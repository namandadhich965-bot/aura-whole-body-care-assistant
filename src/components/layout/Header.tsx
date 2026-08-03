'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { siteConfig, navigation } from '../../config/site';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-background backdrop-blur border-b border-soft shadow-soft'
            : 'bg-transparent'
        )}
      >
        <div className="container flex items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center gap-3 text-primary">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-strong bg-surface text-sm font-semibold tracking-[0.3em] text-sage">
              A
            </span>
            <span className="text-lg font-semibold tracking-[0.28em]">{siteConfig.name}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-secondary transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-soft bg-surface px-4 py-2 text-sm text-secondary transition-colors hover:bg-surface-elevated hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(157,185,166,0.9)]"
              aria-label="View source on GitHub"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>

            <div className="hidden md:block">
              <Link href="/routine">
                <Button variant="primary">Build my routine</Button>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="md:hidden rounded-full border border-soft bg-surface p-2 text-primary hover:bg-surface-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(157,185,166,0.9)]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transition-opacity duration-300',
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      )}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/65"
        onClick={onClose}
        aria-label="Close menu overlay"
        tabIndex={-1}
      />

      <aside
        id="mobile-menu"
        className={cn(
          'absolute right-0 top-0 h-full w-[min(92vw,22rem)] border-l border-soft bg-background-soft shadow-xl transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex h-full flex-col overflow-y-auto px-5 py-6">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/" onClick={onClose} className="text-sm font-semibold tracking-[0.3em] text-primary">
              {siteConfig.name}
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-soft bg-surface p-2 text-primary hover:bg-surface-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(157,185,166,0.9)]"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="rounded-2xl border border-transparent px-4 py-3 text-base text-secondary transition-colors hover:border-soft hover:bg-surface hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-transparent px-4 py-3 text-base text-secondary transition-colors hover:border-soft hover:bg-surface hover:text-primary"
            >
              GitHub
            </a>
          </nav>

          <div className="mt-6">
            <Link href="/routine" onClick={onClose}>
              <Button variant="primary" className="w-full">
                Build my routine
              </Button>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
