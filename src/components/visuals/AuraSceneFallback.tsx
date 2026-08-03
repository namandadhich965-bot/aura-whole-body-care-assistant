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
            <radialGradient id="auraGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgb(157,185,166)" stopOpacity="0.18" />
              <stop offset="50%" stopColor="rgb(157,185,166)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="rgb(157,185,166)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="auraInner" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgb(184,143,120)" stopOpacity="0.12" />
              <stop offset="60%" stopColor="rgb(184,143,120)" stopOpacity="0.04" />
              <stop offset="100%" stopColor="rgb(184,143,120)" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="100" cy="100" r="95" fill="url(#auraGradient)" />
          <circle cx="100" cy="100" r="65" fill="url(#auraInner)" />

          <circle cx="100" cy="100" r="72" fill="none" stroke="rgb(157,185,166)" strokeWidth="0.6" opacity="0.2" />
          <circle cx="100" cy="100" r="82" fill="none" stroke="rgb(157,185,166)" strokeWidth="0.4" opacity="0.12" />
          <circle cx="100" cy="100" r="55" fill="none" stroke="rgb(184,143,120)" strokeWidth="0.5" opacity="0.15" />

          <circle cx="65" cy="72" r="2" fill="rgb(157,185,166)" opacity="0.35" />
          <circle cx="135" cy="68" r="1.8" fill="rgb(184,143,120)" opacity="0.3" />
          <circle cx="72" cy="132" r="1.5" fill="rgb(157,185,166)" opacity="0.25" />
          <circle cx="128" cy="130" r="2" fill="rgb(184,143,120)" opacity="0.3" />
          <circle cx="100" cy="155" r="1.2" fill="rgb(157,185,166)" opacity="0.2" />
          <circle cx="50" cy="100" r="1.5" fill="rgb(184,143,120)" opacity="0.25" />
          <circle cx="148" cy="100" r="1.3" fill="rgb(157,185,166)" opacity="0.2" />

          <circle cx="65" cy="72" r="6" fill="none" stroke="rgb(157,185,166)" strokeWidth="0.4" opacity="0.15" />
          <circle cx="135" cy="68" r="5" fill="none" stroke="rgb(184,143,120)" strokeWidth="0.4" opacity="0.12" />
          <circle cx="72" cy="132" r="4.5" fill="none" stroke="rgb(157,185,166)" strokeWidth="0.4" opacity="0.1" />
          <circle cx="128" cy="130" r="5.5" fill="none" stroke="rgb(184,143,120)" strokeWidth="0.4" opacity="0.12" />
        </svg>
      </div>
    </div>
  );
}
