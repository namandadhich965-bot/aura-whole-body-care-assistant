'use client';

import { motion } from 'framer-motion';

const MODES = [
  {
    id: 'gentle',
    title: 'Gentle',
    description: 'Calm and supportive language.',
    example: '"A soothing plan to help your skin feel comfortable and cared for..."',
  },
  {
    id: 'direct',
    title: 'Direct',
    description: 'Short instructions without extra motivation.',
    example: '"Cleanse. Moisturize. Sunscreen. Three steps."',
  },
  {
    id: 'curious',
    title: 'Curious',
    description: 'More explanation about why each step exists.',
    example: '"Dryness often comes from a compromised barrier. Here is why hydration helps..."',
  },
  {
    id: 'minimal',
    title: 'Minimal',
    description: 'Only the essential daily actions.',
    example: '"Just cleanse and moisturize today."',
  },
];

export function PersonalityModes() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
            Guidance in the style you prefer.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {MODES.map((mode, index) => (
            <motion.div
              key={mode.id}
              className="bg-white border border-warmGrey-200 rounded-2xl p-6 shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-charcoal-900 mb-2">{mode.title} (default)</h3>
              <p className="text-charcoal-600 mb-3">{mode.description}</p>
              <p className="text-sm text-charcoal-500 italic">"{mode.example}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
