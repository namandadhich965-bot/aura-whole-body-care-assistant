'use client';

import { motion } from 'framer-motion';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference';

interface ConnectionDiagramProps {
  connections: { from: string; to: string; label: string }[];
}

export function ConnectionDiagram({ connections }: ConnectionDiagramProps) {
  const prefersReduced = useReducedMotionPreference();

  const nodePositions: Record<string, { x: number; y: number; label: string }> = {
    hair: { x: 30, y: 50, label: 'Hair care' },
    neck: { x: 70, y: 40, label: 'Neck products' },
    shaving: { x: 40, y: 100, label: 'Shaving' },
    friction: { x: 80, y: 110, label: 'Friction' },
    exfoliation: { x: 70, y: 150, label: 'Over-exfoliation' },
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto h-64">
      <svg viewBox="0 0 120 160" className="w-full h-full" aria-hidden="true">
        {connections.map((conn, i) => {
          const from = nodePositions[conn.from];
          const to = nodePositions[conn.to];
          if (!from || !to) return null;

          return (
            <g key={i}>
              {!prefersReduced ? (
                <motion.line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="#e0c7b8"
                  strokeWidth="1.5"
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                />
              ) : (
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="#e0c7b8"
                  strokeWidth="1.5"
                  strokeDasharray="2 2"
                />
              )}
              <motion.circle
                cx={from.x}
                cy={from.y}
                r="4"
                fill="#cba37f"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.3 }}
              />
              <motion.circle
                cx={to.x}
                cy={to.y}
                r="4"
                fill="#e0c7b8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.3 }}
              />
            </g>
          );
        })}
      </svg>

      {connections.map((conn, i) => {
        const from = nodePositions[conn.from];
        const to = nodePositions[conn.to];
        if (!from || !to) return null;

        return (
          <div
            key={`label-${i}`}
            className="absolute text-xs text-warmGrey-600 bg-white/80 px-2 py-1 rounded"
            style={{
              left: `${(from.x + to.x) / 2}%`,
              top: `${(from.y + to.y) / 2}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {conn.label}
          </div>
        );
      })}
    </div>
  );
}
