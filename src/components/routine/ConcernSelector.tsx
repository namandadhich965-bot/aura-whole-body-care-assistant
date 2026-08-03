'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { BODY_AREAS, BodyAreaId } from '../../data/bodyAreas';

interface ConcernSelectorProps {
  area: BodyAreaId;
  onSelect: (_concern: string) => void;
  onBack: () => void;
}

export function ConcernSelector({ area, onSelect, onBack }: ConcernSelectorProps) {
  const areaData = BODY_AREAS.find((item) => item.id === area);

  if (!areaData) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-secondary">Area not found.</p>
        <Button variant="secondary" onClick={onBack}>
          Go back
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-primary">{areaData.label} concerns</h2>
        <p className="mt-2 text-sm leading-6 text-secondary">Select the concern you want to address.</p>
      </div>

      <div className="space-y-3">
        {areaData.concerns.map((concern, index) => (
          <motion.button
            key={concern.id}
            type="button"
            onClick={() => onSelect(concern.id)}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: index * 0.03 }}
            className="flex w-full items-center justify-between rounded-[1.25rem] border border-soft bg-surface px-4 py-4 text-left transition-colors hover:border-strong hover:bg-surface-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(157,185,166,0.9)]"
          >
            <span className="text-sm font-medium text-primary">{concern.label}</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted">Choose</span>
          </motion.button>
        ))}
      </div>

      <Button variant="secondary" onClick={onBack}>
        Back
      </Button>
    </div>
  );
}
