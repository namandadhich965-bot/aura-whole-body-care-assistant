'use client';

import { motion } from 'framer-motion';
import { ConnectionDiagram } from '../visuals/ConnectionDiagram';

const CONNECTIONS = [
  { from: 'hair', to: 'neck', label: 'Hair conditioner → neck and back' },
  { from: 'shaving', to: 'friction', label: 'Shaving + friction → underarms' },
  { from: 'exfoliation', to: 'dryness', label: 'Over-exfoliation → dryness and irritation' },
];

export function Connections() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-sage-600 mb-3">
            WHOLE-BODY THINKING
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
            Small habits can affect more than one area.
          </h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Hair products may contact the back. Shaving can combine with friction. 
            A complicated routine can irritate several areas at once. AURA helps you look at the complete routine 
            instead of treating every concern as an isolated problem.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ConnectionDiagram connections={CONNECTIONS} />

          <motion.div
            className="mt-10 grid md:grid-cols-3 gap-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
            }}
          >
            {CONNECTIONS.map((conn, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-white border border-warmGrey-200 rounded-xl p-6"
              >
                <p className="text-sm text-charcoal-600">{conn.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
