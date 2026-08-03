'use client';

import { Suspense, lazy } from 'react';
import AuraSceneFallback from './AuraSceneFallback';

const AuraSceneLazy = lazy(() => 
  import('./AuraSceneCanvas').catch(() => {
    const Fallback = () => <AuraSceneFallback />;
    return { default: Fallback };
  })
);

export default function AuraSceneWrapper() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Suspense fallback={<AuraSceneFallback />}>
        <AuraSceneLazy />
      </Suspense>
    </div>
  );
}
