
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  shape: 'sphere' | 'box' | 'torus' | 'octahedron';
  scale: number;
  rotationSpeed: [number, number, number];
}

const FloatingShape = ({ position, color, shape, scale, rotationSpeed }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed[0];
      meshRef.current.rotation.y += rotationSpeed[1];
      meshRef.current.rotation.z += rotationSpeed[2];
      
      // Enhanced floating animation with more dynamic movement
      const time = state.clock.elapsedTime;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.8 + position[0]) * 0.5;
      meshRef.current.position.x = position[0] + Math.sin(time * 0.4 + position[1]) * 0.3;
      meshRef.current.position.z = position[2] + Math.cos(time * 0.6 + position[0]) * 0.2;
      
      // Pulsing scale effect
      const pulseScale = 1 + Math.sin(time * 2 + position[0]) * 0.1;
      meshRef.current.scale.setScalar(scale * pulseScale);
    }
  });

  const materialProps = {
    color,
    transparent: true,
    opacity: 0.8,
    metalness: 0.5,
    roughness: 0.2,
    emissive: color,
    emissiveIntensity: 0.2,
  };

  return (
    <mesh position={position} ref={meshRef}>
      {shape === 'sphere' && (
        <>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial {...materialProps} />
        </>
      )}
      {shape === 'box' && (
        <>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial {...materialProps} />
        </>
      )}
      {shape === 'torus' && (
        <>
          <torusGeometry args={[1.2, 0.4, 16, 32]} />
          <meshStandardMaterial {...materialProps} />
        </>
      )}
      {shape === 'octahedron' && (
        <>
          <octahedronGeometry args={[1.2]} />
          <meshStandardMaterial {...materialProps} />
        </>
      )}
    </mesh>
  );
};

// Enhanced particle system with more dynamic movement
const ParticleField = ({ isDark }: { isDark: boolean }) => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const particleCount = 150;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime;
      particlesRef.current.rotation.y = time * 0.05;
      particlesRef.current.rotation.x = Math.sin(time * 0.03) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color={isDark ? '#ffffff' : '#000000'}
        transparent
        opacity={isDark ? 0.7 : 0.4}
        sizeAttenuation={true}
      />
    </points>
  );
};

// Fixed AnimatedRings component using native Three.js geometry
const AnimatedRings = ({ isDark }: { isDark: boolean }) => {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ringsRef.current) {
      const time = state.clock.elapsedTime;
      ringsRef.current.rotation.y = time * 0.1;
      ringsRef.current.rotation.z = Math.sin(time * 0.05) * 0.1;
    }
  });

  return (
    <group ref={ringsRef}>
      {[...Array(3)].map((_, i) => (
        <mesh
          key={i}
          position={[0, 0, -15]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[8 + i * 2, 0.05, 8, 64]} />
          <meshStandardMaterial
            color={isDark ? '#8b5cf6' : '#3b82f6'}
            transparent
            opacity={0.1 - i * 0.02}
            emissive={isDark ? '#8b5cf6' : '#3b82f6'}
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
    </group>
  );
};

interface Background3DProps {
  isDark: boolean;
}

const Background3D = ({ isDark }: Background3DProps) => {
  const shapes = useMemo(() => [
    { 
      position: [-6, 3, -8] as [number, number, number], 
      color: isDark ? '#8b5cf6' : '#3b82f6', 
      shape: 'sphere' as const, 
      scale: 0.8,
      rotationSpeed: [0.01, 0.015, 0.008] as [number, number, number]
    },
    { 
      position: [7, -2, -6] as [number, number, number], 
      color: isDark ? '#06b6d4' : '#8b5cf6', 
      shape: 'box' as const, 
      scale: 0.6,
      rotationSpeed: [0.012, 0.01, 0.015] as [number, number, number]
    },
    { 
      position: [-3, -4, -5] as [number, number, number], 
      color: isDark ? '#f59e0b' : '#06b6d4', 
      shape: 'torus' as const, 
      scale: 0.7,
      rotationSpeed: [0.008, 0.02, 0.01] as [number, number, number]
    },
    { 
      position: [5, 4, -10] as [number, number, number], 
      color: isDark ? '#ec4899' : '#f59e0b', 
      shape: 'octahedron' as const, 
      scale: 0.9,
      rotationSpeed: [0.015, 0.008, 0.012] as [number, number, number]
    },
    { 
      position: [-8, -1, -4] as [number, number, number], 
      color: isDark ? '#10b981' : '#ec4899', 
      shape: 'sphere' as const, 
      scale: 0.5,
      rotationSpeed: [0.01, 0.012, 0.018] as [number, number, number]
    },
    { 
      position: [2, 6, -7] as [number, number, number], 
      color: isDark ? '#8b5cf6' : '#10b981', 
      shape: 'box' as const, 
      scale: 0.4,
      rotationSpeed: [0.02, 0.01, 0.008] as [number, number, number]
    },
    { 
      position: [-5, 2, -12] as [number, number, number], 
      color: isDark ? '#f59e0b' : '#3b82f6', 
      shape: 'torus' as const, 
      scale: 0.6,
      rotationSpeed: [0.008, 0.015, 0.01] as [number, number, number]
    },
    { 
      position: [9, 1, -9] as [number, number, number], 
      color: isDark ? '#06b6d4' : '#ec4899', 
      shape: 'octahedron' as const, 
      scale: 0.7,
      rotationSpeed: [0.012, 0.009, 0.016] as [number, number, number]
    }
  ], [isDark]);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75 }} 
        gl={{ alpha: true, antialias: true }}
      >
        {/* Enhanced lighting setup */}
        <ambientLight intensity={isDark ? 0.4 : 0.6} />
        <pointLight 
          position={[10, 10, 10]} 
          intensity={isDark ? 1.0 : 0.8} 
          color={isDark ? '#ffffff' : '#ffd700'} 
        />
        <pointLight 
          position={[-10, -10, -10]} 
          intensity={0.5} 
          color={isDark ? '#8b5cf6' : '#06b6d4'} 
        />
        <spotLight 
          position={[0, 15, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={isDark ? 0.6 : 0.4} 
          color={isDark ? '#ec4899' : '#8b5cf6'}
        />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.3}
          color={isDark ? '#ffffff' : '#87ceeb'}
        />
        
        {shapes.map((shape, index) => (
          <FloatingShape
            key={index}
            position={shape.position}
            color={shape.color}
            shape={shape.shape}
            scale={shape.scale}
            rotationSpeed={shape.rotationSpeed}
          />
        ))}
        
        <ParticleField isDark={isDark} />
        <AnimatedRings isDark={isDark} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 3}
          enableDamping
          dampingFactor={0.03}
        />
      </Canvas>
    </div>
  );
};

export default Background3D;
