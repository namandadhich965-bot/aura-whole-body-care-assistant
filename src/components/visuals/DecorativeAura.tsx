import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference';

export function DecorativeAura() {
  const prefersReduced = useReducedMotionPreference();

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-sage-100/30 rounded-full blur-3xl" 
        style={{ animation: prefersReduced ? 'none' : 'pulse 12s ease-in-out infinite' }} />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl"
        style={{ animation: prefersReduced ? 'none' : 'pulse 15s ease-in-out infinite reverse' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cream/20 rounded-full blur-3xl"
        style={{ animation: prefersReduced ? 'none' : 'pulse 10s ease-in-out infinite' }} />
    </div>
  );
}

export function SubtleGradientBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-sand-50 via-warmGrey-50 to-sage-50/30" aria-hidden="true" />
  );
}
