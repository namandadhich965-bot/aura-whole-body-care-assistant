'use client';

import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference';

const CARE_AREA_COLORS: [number, number, number][] = [
  [0.6, 0.3, 0.2],
  [0.7, 0.35, 0.25],
  [0.8, 0.4, 0.3],
  [0.9, 0.45, 0.35],
  [0.55, 0.25, 0.2],
  [0.65, 0.3, 0.22],
];

const PARTICLE_COUNT = 200;
const ORBIT_COUNT = 6;

export default function AuraSceneWebgl() {
  const prefersReduced = useReducedMotionPreference();
  const [isTabVisible, setIsTabVisible] = useState(true);

  useEffect(() => {
    const handleVisibility = () => {
      setIsTabVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const particles = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const radii = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 1.5 + Math.random() * 1.5;
      radii[i] = radius;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return { positions, radii };
  }, []);

  const centralFormRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const orbitRefs = useRef<THREE.Mesh[]>([]);
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    if (!isTabVisible || prefersReduced) return;
    timeRef.current += delta * 0.2;

    if (centralFormRef.current) {
      const scale = 1 + Math.sin(timeRef.current * 0.3) * 0.03;
      centralFormRef.current.scale.setScalar(scale);
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = timeRef.current * 0.02;
      const posAttr = particlesRef.current.geometry.attributes.position;
      if (posAttr) {
        const positions = posAttr.array as Float32Array;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const radius = particles.radii[i];
          const theta = (i / PARTICLE_COUNT) * Math.PI * 2 + timeRef.current * 0.05;
          const phi = Math.acos((i / PARTICLE_COUNT) * 2 - 1) + timeRef.current * 0.02;
          positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[i * 3 + 2] = radius * Math.cos(phi);
        }
        posAttr.needsUpdate = true;
      }
    }

    orbitRefs.current.forEach((mesh, i) => {
      if (mesh) {
        const angle = (i / ORBIT_COUNT) * Math.PI * 2 + timeRef.current;
        const radius = 2.5;
        mesh.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * 0.5,
          Math.sin(angle * 0.5) * 0.3
        );
        mesh.scale.setScalar(0.4 + Math.sin(timeRef.current + i) * 0.05);
      }
    });
  });

  useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.style.opacity = isTabVisible ? '1' : '0.5';
    }
  }, [isTabVisible]);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} color="#f5f0ec" />
      <pointLight position={[-3, -3, -3]} intensity={0.2} color="#e0c7b8" />

      <mesh ref={centralFormRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#e0c7b8"
          transparent
          opacity={0.15}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh>
        <torusKnotGeometry args={[1.2, 0.25, 64, 12]} />
        <meshBasicMaterial
          color="#cba37f"
          transparent
          opacity={0.1}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      <Points
        ref={particlesRef}
        limit={PARTICLE_COUNT}
        positions={particles.positions}
      >
        <PointMaterial
          color="#f5e9dc"
          size={0.08}
          sizeAttenuation
          transparent
          opacity={0.5}
          depthWrite={false}
        />
      </Points>

      {Array.from({ length: ORBIT_COUNT }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) orbitRefs.current[i] = el;
          }}
          position={[0, 0, 0]}
        >
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial
            color={CARE_AREA_COLORS[i % CARE_AREA_COLORS.length]}
            transparent
            opacity={0.6}
            depthWrite={false}
          />
        </mesh>
      ))}

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.8, 0]}>
        <ringGeometry args={[2.6, 2.7, 64]} />
        <meshBasicMaterial
          color="#e0c7b8"
          transparent
          opacity={0.08}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.3, 0]}>
        <ringGeometry args={[3.2, 3.3, 64]} />
        <meshBasicMaterial
          color="#cba37f"
          transparent
          opacity={0.05}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}
