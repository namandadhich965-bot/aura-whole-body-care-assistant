'use client';

import { motion } from 'framer-motion';
import { ScanFace, Scissors, Hand, Footprints, Activity, Sparkles, Heart, Droplet } from 'lucide-react';
import { BODY_AREAS, BodyAreaId } from '../../data/bodyAreas';

const AREA_ICONS: Record<string, JSX.Element> = {
  face: <ScanFace className="h-5 w-5" />,
  'hair-scalp': <Scissors className="h-5 w-5" />,
  neck: <Heart className="h-5 w-5" />,
  underarms: <Droplet className="h-5 w-5" />,
  'chest-back': <Activity className="h-5 w-5" />,
  'arms-hands': <Hand className="h-5 w-5" />,
  'body-friction': <Activity className="h-5 w-5" />,
  'knees-elbows': <Sparkles className="h-5 w-5" />,
  legs: <Footprints className="h-5 w-5" />,
  'feet-nails': <Footprints className="h-5 w-5" />,
};

interface BodyAreaSelectorProps {
  onSelect: (_area: BodyAreaId) => void;
}

export function BodyAreaSelector({ onSelect }: BodyAreaSelectorProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-primary">Let&apos;s build your routine.</h2>
        <p className="mt-2 text-sm leading-6 text-secondary">
          Start with one area and one concern. AURA will keep the result simple.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-sage">Step 1: Select an area</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BODY_AREAS.map((area, index) => (
            <motion.button
              key={area.id}
              type="button"
              onClick={() => onSelect(area.id)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="rounded-[1.5rem] border border-soft bg-surface p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-strong hover:bg-surface-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(157,185,166,0.9)]"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-soft bg-background-soft text-sage">
                {AREA_ICONS[area.id] || <Sparkles className="h-5 w-5" />}
              </div>
              <h4 className="text-base font-semibold text-primary">{area.label}</h4>
              <p className="mt-2 text-sm leading-6 text-secondary">{area.shortDescription}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
