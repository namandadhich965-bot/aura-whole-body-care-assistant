'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Heart, Shield, Smartphone, Cloud } from 'lucide-react';

const FEATURES = [
  {
    icon: <CheckCircle2 className="w-5 h-5 text-sage" />,
    title: 'Whole-body coverage',
    description: 'Face, hair, scalp, and body care in one place.',
  },
  {
    icon: <Clock className="w-5 h-5 text-sage" />,
    title: 'Short routines',
    description: 'AURA prioritises the smallest useful routine.',
  },
  {
    icon: <Cloud className="w-5 h-5 text-sage" />,
    title: 'Use what you own',
    description: 'Current products are considered before suggesting additions.',
  },
  {
    icon: <Shield className="w-5 h-5 text-sage" />,
    title: 'Clear safety boundaries',
    description: 'AURA avoids diagnosis and unsafe claims.',
  },
  {
    icon: <Smartphone className="w-5 h-5 text-sage" />,
    title: 'Built-in fallback',
    description: 'The routine flow works even without a live AI provider.',
  },
  {
    icon: <Heart className="w-5 h-5 text-sage" />,
    title: 'Private by default',
    description: 'Saved routines remain in the user’s browser.',
  },
];

export function Features() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
            Helpful without becoming overwhelming.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="rounded-[1.5rem] border border-soft bg-surface p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
