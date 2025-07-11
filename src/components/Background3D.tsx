
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  shape: 'sphere' | 'box' | 'torus';
}

const FloatingShape = ({ position, color, shape }: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh position={position} ref={meshRef}>
      {shape === 'sphere' && <Sphere args={[0.5, 32, 32]} />}
      {shape === 'box' && <Box args={[0.8, 0.8, 0.8]} />}
      {shape === 'torus' && <Torus args={[0.6, 0.3, 16, 32]} />}
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
};

interface Background3DProps {
  isDark: boolean;
}

const Background3D = ({ isDark }: Background3DProps) => {
  const shapes: Array<{
    position: [number, number, number];
    color: string;
    shape: 'sphere' | 'box' | 'torus';
  }> = [
    { position: [-4, 2, -5], color: isDark ? '#8b5cf6' : '#3b82f6', shape: 'sphere' },
    { position: [4, -2, -3], color: isDark ? '#06b6d4' : '#8b5cf6', shape: 'box' },
    { position: [-2, -3, -4], color: isDark ? '#f59e0b' : '#06b6d4', shape: 'torus' },
    { position: [3, 3, -6], color: isDark ? '#ec4899' : '#f59e0b', shape: 'sphere' },
    { position: [-5, -1, -2], color: isDark ? '#10b981' : '#ec4899', shape: 'box' },
  ];

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        {shapes.map((shape, index) => (
          <FloatingShape
            key={index}
            position={shape.position}
            color={shape.color}
            shape={shape.shape}
          />
        ))}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Background3D;
