'use client';

import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'flat';
  hoverable?: boolean;
  selected?: boolean;
}

export function Card({
  className,
  variant = 'default',
  hoverable = false,
  selected = false,
  children,
  ...props
}: CardProps) {
  const variantClasses = {
    default: 'bg-surface border border-soft shadow-soft',
    elevated: 'bg-surface-elevated border border-strong shadow-soft hover:shadow-md',
    flat: 'bg-background-soft border border-soft',
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-200',
        variantClasses[variant],
        hoverable && 'hover:shadow-md hover:-translate-y-0.5',
        selected && 'ring-2 ring-sage-500 border-sage-500',
        'focus-within:ring-2 focus-within:ring-[rgba(157,185,166,0.75)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
