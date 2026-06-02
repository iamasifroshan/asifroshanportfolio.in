"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';

function WireframeRobotFace() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/robot-head.glb');

  // Apply the wireframe material to all meshes in the robotic model
  useMemo(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = new THREE.MeshBasicMaterial({
          color: "#00f3ff",
          wireframe: true,
          transparent: true,
          opacity: 0.35
        });
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Smooth idle rotation
    const t = state.clock.getElapsedTime();
    const idleY = Math.sin(t * 0.5) * 0.2;
    
    // Mouse follow
    const targetX = state.pointer.x * 0.6;
    const targetY = state.pointer.y * 0.6;
    
    groupRef.current.rotation.y += (targetX + idleY - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <Center scale={3.5}>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

export default function HolographicImage() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pt-8 z-0 cursor-crosshair">
      <div className="relative w-56 h-72 rounded-[2rem] overflow-hidden border border-cyan-400/40 shadow-[0_0_40px_rgba(0,243,255,0.2)] bg-cyan-950/20">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <Suspense fallback={null}>
            <WireframeRobotFace />
          </Suspense>
        </Canvas>
        
        {/* Holographic scanning overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-transparent to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}

useGLTF.preload('/robot-head.glb');
