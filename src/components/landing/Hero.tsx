'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference';
import { siteConfig, TRUST_LINE } from '../../config/site';

function HeroAuraVisual({ prefersReduced }: { prefersReduced: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <svg viewBox="0 0 200 200" className={`w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] ${prefersReduced ? '' : 'animation-slowPulse'}`}>
        <defs>
          <radialGradient id="heroAuraGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(157,185,166)" stopOpacity="0.18" />
            <stop offset="50%" stopColor="rgb(157,185,166)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="rgb(157,185,166)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroAuraInner" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(184,143,120)" stopOpacity="0.12" />
            <stop offset="60%" stopColor="rgb(184,143,120)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="rgb(184,143,120)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="95" fill="url(#heroAuraGlow)" />
        <circle cx="100" cy="100" r="65" fill="url(#heroAuraInner)" />
        <circle cx="100" cy="100" r="72" fill="none" stroke="rgb(157,185,166)" strokeWidth="0.6" opacity="0.2" />
        <circle cx="100" cy="100" r="82" fill="none" stroke="rgb(157,185,166)" strokeWidth="0.4" opacity="0.12" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="rgb(184,143,120)" strokeWidth="0.5" opacity="0.15" />
        <circle cx="65" cy="72" r="2" fill="rgb(157,185,166)" opacity="0.35" />
        <circle cx="135" cy="68" r="1.8" fill="rgb(184,143,120)" opacity="0.3" />
        <circle cx="72" cy="132" r="1.5" fill="rgb(157,185,166)" opacity="0.25" />
        <circle cx="128" cy="130" r="2" fill="rgb(184,143,120)" opacity="0.3" />
        <circle cx="100" cy="155" r="1.2" fill="rgb(157,185,166)" opacity="0.2" />
        <circle cx="50" cy="100" r="1.5" fill="rgb(184,143,120)" opacity="0.25" />
        <circle cx="148" cy="100" r="1.3" fill="rgb(157,185,166)" opacity="0.2" />
      </svg>
    </div>
  );
}

export function Hero() {
  const prefersReduced = useReducedMotionPreference();

  return (
    <section className="relative overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(157,185,166,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(184,143,120,0.14),transparent_30%)]" />

      {!prefersReduced && (
        <div className="absolute left-[-6rem] top-10 h-72 w-72 rounded-full bg-sage-light blur-3xl" />
      )}
      {!prefersReduced && (
        <div className="absolute bottom-[-5rem] right-[-4rem] h-72 w-72 rounded-full bg-terracotta-50 blur-3xl" />
      )}

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <Badge variant="outline" className="mb-5">
                WHOLE-BODY CARE, MADE SIMPLE
              </Badge>
            </motion.div>

            <motion.h1
              className="max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-primary md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              Care for every part of you.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-secondary md:text-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              {siteConfig.subline}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
            >
              <Link href="/routine">
                <Button variant="primary" size="lg" className="group">
                  Build my routine
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="secondary" size="lg">
                  See how it works
                </Button>
              </Link>
            </motion.div>

            <motion.p
              className="mt-6 text-sm text-secondary"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {TRUST_LINE}
            </motion.p>

            <motion.p
              className="mt-4 text-sm text-muted"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
            >
              Face · Hair · Scalp · Body · Hands · Feet
            </motion.p>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            <div className="relative rounded-[2rem] border border-strong bg-surface p-4 shadow-soft backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem] border border-soft bg-background-soft">
                <div className="relative aspect-[4/5] min-h-[24rem]">
                  <HeroAuraVisual prefersReduced={prefersReduced} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 overflow-hidden rounded-[1.75rem] border border-soft bg-surface p-4 shadow-soft backdrop-blur"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36 }}
        >
          <div className="flex flex-wrap items-center gap-3 text-sm text-secondary">
            <span className="rounded-full border border-soft bg-background-soft px-3 py-1">Short routines</span>
            <span className="rounded-full border border-soft bg-background-soft px-3 py-1">Built-in fallback</span>
            <span className="rounded-full border border-soft bg-background-soft px-3 py-1">Private by default</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
