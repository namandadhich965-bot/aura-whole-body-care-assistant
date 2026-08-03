'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BODY_AREAS } from '../../data/bodyAreas';
import { ScanFace, Scissors, Hand, Footprints, Activity, Sparkles, Heart, Droplet, Sun } from 'lucide-react';

const AREA_ICONS: Record<string, React.ReactNode> = {
  face: <ScanFace className="w-6 h-6" />,
  'hair-scalp': <Scissors className="w-6 h-6" />,
  neck: <Heart className="w-6 h-6" />,
  underarms: <Droplet className="w-6 h-6" />,
  'chest-back': <Activity className="w-6 h-6" />,
  'arms-hands': <Hand className="w-6 h-6" />,
  'body-friction': <Activity className="w-6 h-6" />,
  'knees-elbows': <Sparkles className="w-6 h-6" />,
  legs: <Footprints className="w-6 h-6" />,
  'feet-nails': <Footprints className="w-6 h-6" />,
};

export function CareAreas() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage mb-3">
            ONE PLACE FOR YOUR WHOLE ROUTINE
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
            Your face is only one part of the picture.
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary">
            AURA helps organise everyday cosmetic care across the areas people commonly manage separately.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BODY_AREAS.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <Link href={`/routine?area=${area.id}`} className="group block">
                <motion.div
                  className="h-full rounded-[1.5rem] border border-soft bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-strong hover:bg-surface-elevated"
                  whileHover={{ y: -2 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-soft bg-background-soft text-sage">
                    {AREA_ICONS[area.id] || <Sun className="w-6 h-6" />}
                  </div>
                  <h3 className="text-lg font-semibold text-primary transition-colors group-hover:text-sage">
                    {area.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-secondary">
                    {area.shortDescription}
                  </p>
                  <p className="mt-4 text-sm font-medium text-sage">
                    Start with this area
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
