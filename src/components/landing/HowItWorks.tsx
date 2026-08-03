'use client';

import { motion } from 'framer-motion';

const STEPS = [
  {
    number: 1,
    title: 'Choose an area',
    description: 'Select the part of your face, hair, scalp, or body you want to care for.',
  },
  {
    number: 2,
    title: 'Choose a concern',
    description: 'Tell AURA what has been bothering you and answer a few short questions.',
  },
  {
    number: 3,
    title: 'Get a simple plan',
    description: 'Receive a short morning, evening, and optional weekly routine.',
  },
];

export function HowItWorksLanding() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage mb-3">
            THREE SIMPLE STEPS
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
            Less guessing. A clearer routine.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              className="rounded-[1.5rem] border border-soft bg-surface p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-soft bg-background-soft text-sm font-semibold text-sage">
                {step.number}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-primary">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
