'use client';

import { useEffect, useState } from 'react';

export function useReducedMotionPreference() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(query.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}
