'use client';

import Link from 'next/link';
import { siteConfig, footerNavGroups } from '../../config/site';

export function Footer() {
  return (
    <footer className="border-t border-soft bg-background-soft text-secondary">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:pr-4">
            <h3 className="text-lg font-semibold tracking-[0.28em] text-primary">{siteConfig.name}</h3>
            <p className="mt-4 text-sm leading-6">
              {siteConfig.subline}
            </p>
            <p className="mt-4 text-xs leading-6 text-muted">
              A friendly AI whole-body cosmetic care assistant built for the ChatGPT Codex India Hackathon 2026.
            </p>
          </div>

          {footerNavGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{group.title}</h4>
              <ul className="mt-4 space-y-3">
                {group.links
                  .filter((link) => !!link.href)
                  .map((link) => {
                    const href = link.href!;
                    return (
                      <li key={href}>
                        {href.startsWith('http') ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm transition-colors hover:text-primary"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link href={href} className="text-sm transition-colors hover:text-primary">
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-soft pt-6 text-sm text-muted">
          <p>
            {siteConfig.name} provides general cosmetic self-care information and does not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
