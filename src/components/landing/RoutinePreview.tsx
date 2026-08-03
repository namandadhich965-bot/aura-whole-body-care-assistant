'use client';

import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';

export function RoutinePreview() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage mb-3">
            A ROUTINE YOU CAN FOLLOW
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
            Only the actions that matter today.
          </h2>
        </div>

        <motion.div
          className="mx-auto max-w-3xl rounded-[1.75rem] border border-strong bg-surface-elevated p-6 shadow-soft md:p-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <Badge variant="outline">Knees and elbows</Badge>
            <span className="text-sm text-secondary">Concern: Dry and uneven-looking skin</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-soft bg-background-soft p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-sage">Morning</h3>
              <p className="mt-3 text-sm leading-7 text-primary">Apply moisturiser after bathing.</p>
            </div>

            <div className="rounded-2xl border border-soft bg-background-soft p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-sage">When exposed</h3>
              <p className="mt-3 text-sm leading-7 text-primary">Use sunscreen on exposed skin.</p>
            </div>

            <div className="rounded-2xl border border-soft bg-background-soft p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-sage">Evening</h3>
              <p className="mt-3 text-sm leading-7 text-primary">Apply a thicker moisturising product.</p>
            </div>

            <div className="rounded-2xl border border-soft bg-background-soft p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-terracotta">Avoid</h3>
              <p className="mt-3 text-sm leading-7 text-primary">
                Aggressive scrubbing, lemon, bleach, and introducing several treatments together.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-soft bg-sage-light p-5">
            <p className="text-sm leading-7 text-primary">
              <strong className="text-sage">Safety note:</strong> Seek professional guidance if the area changes suddenly,
              becomes painful, inflamed, or persistently uncomfortable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
