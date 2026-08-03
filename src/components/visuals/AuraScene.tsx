'use client';

import { Suspense, lazy, Component, type ReactNode } from 'react';
import AuraSceneFallback from './AuraSceneFallback';

class ErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

const AuraSceneLazy = lazy(() =>
  import('./AuraSceneCanvas').catch(() => {
    const Fallback = () => <AuraSceneFallback />;
    return { default: Fallback };
  })
);

export default function AuraSceneWrapper() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <ErrorBoundary fallback={<AuraSceneFallback />}>
        <Suspense fallback={<AuraSceneFallback />}>
          <AuraSceneLazy />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
