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
