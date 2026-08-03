'use client';

import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference';

export default function AuraSceneFallback() {
  const prefersReduced = useReducedMotionPreference();

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
      <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px]">
        <svg
          viewBox="0 0 200 200"
          className={`w-full h-full ${prefersReduced ? '' : 'animation-slowPulse'}`}
        >
          <defs>
            <linearGradient id="auraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5e9dc" stopOpacity="0.4" />
              <stop offset="30%" stopColor="#cba37f" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#e0c7b8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#d4b89d" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <circle cx="100" cy="100" r="60" fill="url(#auraGradient)" />

          <circle cx="100" cy="100" r="75" fill="none" stroke="#f5e9dc" strokeWidth="1" opacity="0.3" />
          <circle cx="100" cy="100" r="85" fill="none" stroke="#cba37f" strokeWidth="0.5" opacity="0.2" />
          <circle cx="100" cy="100" r="95" fill="none" stroke="#e0c7b8" strokeWidth="0.5" opacity="0.1" />

          <circle cx="60" cy="70" r="3.5" fill="#cba37f" opacity="0.7" />
          <circle cx="140" cy="65" r="3" fill="#e0c7b8" opacity="0.6" />
          <circle cx="70" cy="140" r="2.5" fill="#d4b89d" opacity="0.5" />
          <circle cx="130" cy="135" r="3" fill="#cba37f" opacity="0.7" />
          <circle cx="100" cy="160" r="2" fill="#e0c7b8" opacity="0.4" />
          <circle cx="50" cy="100" r="2.5" fill="#d4b89d" opacity="0.5" />

          <circle cx="60" cy="70" r="8" fill="none" stroke="#cba37f" strokeWidth="0.5" opacity="0.4" />
          <circle cx="140" cy="65" r="7" fill="none" stroke="#e0c7b8" strokeWidth="0.5" opacity="0.3" />
          <circle cx="70" cy="140" r="6" fill="none" stroke="#d4b89d" strokeWidth="0.5" opacity="0.3" />
          <circle cx="130" cy="135" r="7" fill="none" stroke="#cba37f" strokeWidth="0.5" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}
