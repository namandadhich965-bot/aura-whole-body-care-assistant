'use client';

import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

export function SectionHeading({
  className,
  eyebrow,
  title,
  subtitle,
  centered = false,
  children,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12',
        centered && 'text-center',
        className
      )}
      {...props}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wider text-sage-600 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-charcoal-600 max-w-2xl">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
