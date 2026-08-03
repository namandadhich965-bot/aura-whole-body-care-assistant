'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface GenerationStateProps {
  status: string;
  onCancel: () => void;
}

export function GenerationState({ status, onCancel }: GenerationStateProps) {
  return (
    <div className="rounded-[1.75rem] border border-soft bg-surface p-8 text-center shadow-soft">
      <motion.div
        className="mx-auto mb-6 h-16 w-16 rounded-full border-4 border-sage-light border-t-sage"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
      />

      <h3 className="text-xl font-semibold text-primary">Generating your routine...</h3>
      <p className="mt-3 text-sm leading-6 text-secondary" aria-live="polite">
        {status}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">
        AURA keeps this to a few simple steps so you can review the result quickly.
      </p>

      <div className="mt-6">
        <Button variant="secondary" onClick={onCancel}>
          Cancel and start over
        </Button>
      </div>
    </div>
  );
}
