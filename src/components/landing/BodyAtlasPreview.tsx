'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { BODY_AREAS } from '../../data/bodyAreas';
import { motion } from 'framer-motion';

function BodyAtlas({ selectedArea, onAreaSelect }: { 
  selectedArea: string | null; 
  onAreaSelect: (_areaId: string) => void;
}) {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-80">
      <svg viewBox="0 0 200 320" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5f0ec" />
            <stop offset="100%" stopColor="#e8e0d4" />
          </linearGradient>
        </defs>

        <ellipse cx="100" cy="220" rx="40" ry="15" fill="#d4c3a8" opacity="0.5" />

        <ellipse cx="100" cy="190" rx="35" ry="30" fill="url(#bodyGradient)" />

        <ellipse cx="100" cy="120" rx="25" ry="35" fill="url(#bodyGradient)" />

        <path d="M65 190 Q40 170 42 130 Q45 90 75 80 Q100 75 100 75 Q125 75 125 80 Q155 90 158 130 Q160 170 135 190" 
          fill="url(#bodyGradient)" />

        <path d="M100 45 Q85 55 85 75" stroke="#d4c3a8" strokeWidth="3" fill="none" />
        <path d="M115 45 Q130 55 130 75" stroke="#d4c3a8" strokeWidth="3" fill="none" />

        <circle cx="100" cy="35" r="20" fill="url(#bodyGradient)" />

        {Object.entries({
          face: { x: 100, y: 35, r: 20 },
          'hair-scalp': { x: 100, y: 35, r: 26 },
          neck: { x: 100, y: 178, r: 22 },
          'chest-back': { x: 100, y: 190, r: 35 },
          'arms-hands': { x: 60, y: 120, r: 16 },
          'arms-hands-2': { x: 140, y: 120, r: 16 },
          'feet-nails': { x: 75, y: 285, r: 14 },
          'feet-nails-2': { x: 125, y: 285, r: 14 },
        }).map(([key, pos]) => {
          if (key.endsWith('-2')) return null;

          return (
            <g key={key}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={pos.r + 3}
                fill="transparent"
                stroke={selectedArea === key ? "#8a9a5a" : "#d4c3a8"}
                strokeWidth={selectedArea === key ? "3" : "1.5"}
                opacity={selectedArea === key ? 0.8 : 0.4}
                style={{ cursor: 'pointer' }}
                onClick={() => onAreaSelect(key)}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function BodyAtlasPreview() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const selected = selectedArea ? BODY_AREAS.find((a) => a.id === selectedArea) : null;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
            Start with what is bothering you.
          </h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Select an area, choose a concern, and AURA will guide you from there.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <BodyAtlas selectedArea={selectedArea} onAreaSelect={setSelectedArea} />
          </div>

          <div className="flex-1">
            {selected ? (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-charcoal-900">{selected.label}</h3>
                <p className="text-charcoal-600">{selected.shortDescription}</p>

                <div>
                  <h4 className="font-semibold text-charcoal-800 mb-3">Common concerns:</h4>
                  <ul className="space-y-2">
                    {selected.concerns.map((concern) => (
                      <li key={concern.id} className="text-charcoal-700">
                        {concern.label}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={`/routine?area=${selected.id}`}>
                  <Button className="w-full sm:w-auto">
                    Create a routine for this area
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <div className="text-center py-12 text-charcoal-500">
                <p className="mb-4">Select an area on the body map</p>
                <p className="text-sm">or browse areas below</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {BODY_AREAS.map((area) => (
            <Link key={area.id} href={`/routine?area=${area.id}`}>
              <Button variant="tertiary" size="sm" className="w-full">
                {area.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
