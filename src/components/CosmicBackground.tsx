"use client";

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const globalMouse = { x: 0, y: 0 };

function CameraController() {
  useFrame((state) => {
    // Parallax effect by moving the camera slightly based on mouse
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, globalMouse.x * 3, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, globalMouse.y * 3, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const count = 3000;
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      const isCyan = Math.random() > 0.5;
      const color = new THREE.Color(isCyan ? '#00f3ff' : '#ff2a5f');
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      const baseRotationY = state.clock.elapsedTime * 0.03;
      const baseRotationX = state.clock.elapsedTime * 0.015;
      
      const targetRotationY = baseRotationY + (globalMouse.x * 0.5);
      const targetRotationX = baseRotationX + (globalMouse.y * 0.5);
      
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, targetRotationY, 0.05);
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, targetRotationX, 0.05);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function InteractiveSphere({ children, position, mouseMultiplier = 1 }: { children: React.ReactNode, position: [number, number, number], mouseMultiplier?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      const targetX = position[0] + globalMouse.x * mouseMultiplier;
      const targetY = position[1] + globalMouse.y * mouseMultiplier;
      
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, globalMouse.y * 0.2, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, globalMouse.x * 0.2, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {children}
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <CameraController />
      <ambientLight intensity={0.5} />
      <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
      <ParticleField />
      
      <InteractiveSphere position={[5, 2, -5]} mouseMultiplier={1.5}>
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <mesh>
            <icosahedronGeometry args={[1.5, 1]} />
            <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.15} blending={THREE.AdditiveBlending} />
          </mesh>
        </Float>
      </InteractiveSphere>
      
      <InteractiveSphere position={[-6, -3, -8]} mouseMultiplier={1.0}>
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
          <mesh>
            <icosahedronGeometry args={[2, 1]} />
            <meshBasicMaterial color="#ff2a5f" wireframe transparent opacity={0.1} blending={THREE.AdditiveBlending} />
          </mesh>
        </Float>
      </InteractiveSphere>
    </>
  );
}

export default function CosmicBackground() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      globalMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      globalMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-[-2] bg-[#030305] pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <Scene />
        </Canvas>
      </div>
    </>
  );
}
