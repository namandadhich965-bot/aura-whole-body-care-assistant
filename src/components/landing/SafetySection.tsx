'use client';

import Link from 'next/link';
import { Button } from '../ui/Button';
import { Shield, Zap } from 'lucide-react';

const CAN_HELP_WITH = [
  'Simple cosmetic routines',
  'Dryness and rough texture',
  'Hair and scalp habits',
  'Friction and shaving aftercare',
  'Product-use organization',
];

const STOP_AND_REFER = [
  'Severe pain',
  'Major swelling',
  'Difficulty breathing',
  'Open wounds',
  'Eye involvement',
  'Rapidly spreading reactions',
  'Sudden major hair loss',
  'Persistent or worsening symptoms',
];

export function SafetySection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage mb-3">
            CLEAR BOUNDARIES
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
            Helpful cosmetic guidance - not medical diagnosis.
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary">
            AURA can organise everyday routines, explain general product categories, and suggest cautious cosmetic self-care.
            It cannot determine medical conditions from symptoms or images.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-soft bg-surface p-6">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-sage" />
              <h3 className="text-xl font-semibold text-primary">AURA can help with</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {CAN_HELP_WITH.map((item) => (
                <li key={item} className="flex items-start gap-3 text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sage" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-soft bg-surface p-6">
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-terracotta" />
              <h3 className="text-xl font-semibold text-primary">AURA will stop and suggest professional help for</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {STOP_AND_REFER.map((item) => (
                <li key={item} className="flex items-start gap-3 text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/safety">
            <Button variant="secondary">Read AURA's safety approach</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
