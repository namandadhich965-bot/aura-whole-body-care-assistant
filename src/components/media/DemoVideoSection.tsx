'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { siteConfig } from '../../config/site';

type VideoState = 'checking' | 'available' | 'missing';

const VIDEO_SRC = '/demo/aura-demo.mp4';

export function DemoVideoSection() {
  const [videoState, setVideoState] = useState<VideoState>('checking');

  useEffect(() => {
    const controller = new AbortController();

    fetch(VIDEO_SRC, { method: 'HEAD', signal: controller.signal })
      .then((res) => {
        setVideoState(res.ok ? 'available' : 'missing');
      })
      .catch(() => {
        setVideoState('missing');
      });

    return () => controller.abort();
  }, []);

  return (
    <section id="demo" className="relative py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-[2rem] border border-soft bg-surface p-8 md:p-12">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage">Project Demo</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
                See AURA in action.
              </h2>
            </div>

            {videoState === 'checking' && (
              <div className="aspect-video rounded-2xl border border-soft bg-background-soft flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-sage border-t-transparent" />
                  <p className="text-sm text-muted">Checking for demo video...</p>
                </div>
              </div>
            )}

            {videoState === 'available' && (
              <div className="relative">
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-soft bg-background">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    src={VIDEO_SRC}
                    className="h-full w-full object-contain"
                  >
                    Your browser does not support HTML video.
                  </video>
                </div>
                <p className="mt-4 text-sm text-muted">
                  The complete routine experience is available now.
                </p>
              </div>
            )}

            {videoState === 'missing' && (
              <div>
                <div className="aspect-video rounded-2xl border border-soft bg-background-soft flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-sage-200 bg-sage-50">
                      <Play className="h-6 w-6 text-sage" />
                    </div>
                    <p className="text-sm font-medium text-secondary">
                      A short product walkthrough is being prepared.
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      The demo will show how AURA turns one concern into a simple whole-body care routine.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="inline-block rounded-full border border-sage-200 bg-sage-50 px-3 py-1 text-xs font-medium text-sage">
                      Demo video coming soon
                    </span>
                    <p className="mt-2 text-sm text-muted">
                      The complete routine experience is available now.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Link href="/routine">
                      <span className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90">
                        Build my routine
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                    {siteConfig.links.github && (
                      <a
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-soft bg-surface px-5 py-2.5 text-sm font-medium text-secondary transition-colors hover:bg-surface-elevated hover:text-primary"
                      >
                        View the source on GitHub
                      </a>
                    )}
                  </div>
                </div>

                {siteConfig.links.demoVideo && (
                  <div className="mt-4">
                    <a
                      href={siteConfig.links.demoVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-sage underline-offset-2 hover:underline"
                    >
                      Watch the demo on an external platform
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
