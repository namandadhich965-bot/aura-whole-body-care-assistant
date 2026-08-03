'use client';

import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'info' | 'outline';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: 'bg-sage-light text-primary',
    secondary: 'bg-background-soft text-secondary',
    success: 'bg-sage-light text-sage',
    warning: 'bg-terracotta-50 text-terracotta',
    info: 'bg-background-soft text-primary',
    outline: 'border border-soft text-secondary',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.75 text-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
