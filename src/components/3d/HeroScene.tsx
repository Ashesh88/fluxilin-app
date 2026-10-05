'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

function Interactive3DObject() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Smooth mouse coordinates
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const onPointerMove = (e: MouseEvent) => {
      // Convert to normalized coordinates (-1 to 1) across the entire window
      mouse.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.targetY = -((e.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener('pointermove', onPointerMove);
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

  useFrame((state, delta) => {
    // Lerp mouse for buttery smooth parallax
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.06;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.06;

    if (groupRef.current) {
      // Strong, noticeable mouse parallax tilt
      groupRef.current.rotation.y = mouse.current.x * 0.9;
      groupRef.current.rotation.x = -mouse.current.y * 0.7;
      groupRef.current.position.x = mouse.current.x * 0.4;
      groupRef.current.position.y = mouse.current.y * 0.3;
    }

    if (meshRef.current) {
      // Continuous gentle idle spin
      meshRef.current.rotation.y += delta * 0.35;
      meshRef.current.rotation.z += delta * 0.15;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.y += delta * 0.35;
      wireframeRef.current.rotation.z += delta * 0.15;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.6;
      ringRef.current.rotation.x = Math.PI / 3 + mouse.current.y * 0.4;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.45;
      ring2Ref.current.rotation.y = mouse.current.x * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Interactive Core */}
      <mesh
        ref={meshRef}
        scale={hovered ? 1.45 : 1.3}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={hovered ? '#818CF8' : '#6366F1'}
          emissive="#3730A3"
          emissiveIntensity={hovered ? 0.9 : 0.6}
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>

      {/* Outer Sharp Wireframe Overlay */}
      <mesh ref={wireframeRef} scale={hovered ? 1.47 : 1.32}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#A3E635"
          emissive="#A3E635"
          emissiveIntensity={hovered ? 0.8 : 0.4}
          roughness={0}
          metalness={1}
          wireframe={true}
          transparent
          opacity={hovered ? 0.6 : 0.35}
        />
      </mesh>

      {/* Ring 1 — Neon Lime */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.2, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#A3E635"
          emissive="#A3E635"
          emissiveIntensity={1.4}
          roughness={0.1}
          metalness={0.7}
        />
      </mesh>

      {/* Ring 2 — Electric Indigo */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 5, 0]}>
        <torusGeometry args={[2.7, 0.022, 16, 100]} />
        <meshStandardMaterial
          color="#818CF8"
          emissive="#6366F1"
          emissiveIntensity={1.1}
          roughness={0.2}
          metalness={0.7}
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
}

function FloatingNodes() {
  const nodes = [
    { pos: [-2.5, 1.8, 0] as [number, number, number], color: '#A3E635', scale: 0.32, speed: 2.2 },
    { pos: [2.8, 1.2, -0.5] as [number, number, number], color: '#6366F1', scale: 0.42, speed: 1.8 },
    { pos: [-2.2, -2, 0.5] as [number, number, number], color: '#818CF8', scale: 0.28, speed: 2.5 },
    { pos: [2.5, -1.8, 0.2] as [number, number, number], color: '#A3E635', scale: 0.36, speed: 1.6 },
  ];

  return (
    <>
      {nodes.map((n, i) => (
        <Float key={i} speed={n.speed} floatIntensity={2} rotationIntensity={1.5}>
          <Sphere position={n.pos} scale={n.scale} args={[1, 16, 16]}>
            <MeshDistortMaterial
              color={n.color}
              emissive={n.color}
              emissiveIntensity={1.2}
              roughness={0}
              metalness={0.6}
              distort={0.25}
              speed={3}
            />
          </Sphere>
        </Float>
      ))}
    </>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 220;

  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 14;
      p[i * 3 + 1] = (Math.random() - 0.5) * 14;
      p[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return p;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#818CF8"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.6} color="#e0e7ff" />
      <directionalLight position={[6, 6, 6]} intensity={1.8} color="#ffffff" />
      <pointLight position={[-4, 3, 3]} intensity={6} color="#6366F1" distance={15} />
      <pointLight position={[4, -3, -2]} intensity={5} color="#A3E635" distance={12} />

      {/* PresentationControls gives instant mouse drag-to-spin physics! */}
      <PresentationControls
        global={false} // Enables drag within canvas area
        cursor={true} // Changes cursor to grab / grabbing
        snap={true} // Snaps back smoothly on release
        speed={2.5}
        zoom={1}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 2, Math.PI / 2]}
      >
        <Interactive3DObject />
        <FloatingNodes />
      </PresentationControls>

      <ParticleField />
    </>
  );
}
