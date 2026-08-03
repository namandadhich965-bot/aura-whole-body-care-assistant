'use client';

import { useState, useEffect } from 'react';
import AuraSceneFallback from './AuraSceneFallback';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference';

function hasWebGL(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl') || canvas.getContext('webgl2'));
  } catch {
    return false;
  }
}

export default function AuraSceneCanvas() {
  const prefersReduced = useReducedMotionPreference();
  const [webglOk, setWebglOk] = useState(false);
  const [Canvas, setCanvas] = useState<React.ComponentType<Record<string, unknown>> | null>(null);
  const [OrbitControls, setOrbitControls] = useState<React.ComponentType<Record<string, unknown>> | null>(null);
  const [AuraSceneWebgl, setAuraSceneWebgl] = useState<React.ComponentType<Record<string, unknown>> | null>(null);

  useEffect(() => {
    if (!hasWebGL()) return;
    Promise.all([
      import('@react-three/fiber').then((m) => m.Canvas),
      import('@react-three/drei').then((m) => m.OrbitControls),
      import('./AuraSceneWebgl').then((m) => m.default),
    ]).then(([c, oc, ws]) => {
      setCanvas(() => c);
      setOrbitControls(() => oc);
      setAuraSceneWebgl(() => ws);
      setWebglOk(true);
    }).catch(() => {
      setWebglOk(false);
    });
  }, []);

  if (!webglOk || !Canvas || !OrbitControls || !AuraSceneWebgl) {
    return <AuraSceneFallback />;
  }

  const C = Canvas;
  const OC = OrbitControls;
  const WS = AuraSceneWebgl;

  return (
    <div className="absolute inset-0 w-full h-full">
      <C
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
        dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 1.5)]}
      >
        <color attach="background" args={['transparent']} />
        <WS />
        {!prefersReduced && (
          <OC
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            rotateSpeed={0.2}
            autoRotate={false}
          />
        )}
      </C>
    </div>
  );
}
