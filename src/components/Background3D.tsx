
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  shape: 'sphere' | 'box' | 'torus' | 'octahedron' | 'tetrahedron';
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
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.3 + position[1]) * 0.2;
    }
  });

  return (
    <mesh position={position} ref={meshRef} scale={scale}>
      {shape === 'sphere' && (
        <>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.7} 
            metalness={0.3} 
            roughness={0.4}
            emissive={color}
            emissiveIntensity={0.1}
          />
        </>
      )}
      {shape === 'box' && (
        <>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.7} 
            metalness={0.3} 
            roughness={0.4}
            emissive={color}
            emissiveIntensity={0.1}
          />
        </>
      )}
      {shape === 'torus' && (
        <>
          <torusGeometry args={[1.2, 0.4, 16, 32]} />
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.7} 
            metalness={0.3} 
            roughness={0.4}
            emissive={color}
            emissiveIntensity={0.1}
          />
        </>
      )}
      {shape === 'octahedron' && (
        <>
          <octahedronGeometry args={[1.2]} />
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.7} 
            metalness={0.3} 
            roughness={0.4}
            emissive={color}
            emissiveIntensity={0.1}
          />
        </>
      )}
      {shape === 'tetrahedron' && (
        <>
          <tetrahedronGeometry args={[1.0]} />
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.7} 
            metalness={0.3} 
            roughness={0.4}
            emissive={color}
            emissiveIntensity={0.1}
          />
        </>
      )}
    </mesh>
  );
};

// Particle system for additional visual interest
const ParticleField = ({ isDark }: { isDark: boolean }) => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
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
        size={0.05}
        color={isDark ? '#ffffff' : '#000000'}
        transparent
        opacity={isDark ? 0.6 : 0.3}
      />
    </points>
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
      shape: 'tetrahedron' as const, 
      scale: 1.0,
      rotationSpeed: [0.01, 0.012, 0.018] as [number, number, number]
    },
    { 
      position: [2, 6, -7] as [number, number, number], 
      color: isDark ? '#8b5cf6' : '#10b981', 
      shape: 'sphere' as const, 
      scale: 0.5,
      rotationSpeed: [0.02, 0.01, 0.008] as [number, number, number]
    },
    { 
      position: [-5, 2, -12] as [number, number, number], 
      color: isDark ? '#f59e0b' : '#3b82f6', 
      shape: 'box' as const, 
      scale: 0.8,
      rotationSpeed: [0.008, 0.015, 0.01] as [number, number, number]
    }
  ], [isDark]);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75 }} 
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={isDark ? 0.3 : 0.5} />
        <pointLight position={[10, 10, 10]} intensity={isDark ? 0.8 : 0.6} color={isDark ? '#ffffff' : '#ffd700'} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color={isDark ? '#8b5cf6' : '#06b6d4'} />
        <spotLight 
          position={[0, 15, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={isDark ? 0.5 : 0.3} 
          color={isDark ? '#ec4899' : '#8b5cf6'}
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
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 4}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default Background3D;
