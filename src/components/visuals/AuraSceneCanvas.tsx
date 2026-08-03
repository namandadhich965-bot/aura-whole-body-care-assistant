'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AuraSceneWebgl from './AuraSceneWebgl';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference';

export default function AuraSceneCanvas() {
  const prefersReduced = useReducedMotionPreference();

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'low-power',
          preserveDrawingBuffer: false,
          stencil: false,
        }}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
        frameloop={prefersReduced ? 'demand' : 'always'}
        dpr={[1, Math.min(window.devicePixelRatio || 1, 1.5)]}
      >
        <color attach="background" args={['transparent']} />
        <AuraSceneWebgl />
        {!prefersReduced && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            rotateSpeed={0.2}
            autoRotate={false}
          />
        )}
      </Canvas>
    </div>
  );
}
