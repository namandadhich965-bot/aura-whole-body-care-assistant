'use client';

import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-transparent';

  const variantClasses = {
    primary: 'bg-sage text-background hover:opacity-95 focus-visible:ring-[rgba(157,185,166,0.9)]',
    secondary: 'bg-surface text-primary border border-soft hover:bg-surface-elevated focus-visible:ring-[rgba(157,185,166,0.9)]',
    tertiary: 'bg-transparent text-sage border border-sage-200 hover:bg-sage-50/10 focus-visible:ring-[rgba(157,185,166,0.9)]',
    ghost: 'text-secondary hover:bg-surface focus-visible:ring-[rgba(157,185,166,0.9)]',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    icon: 'w-10 h-10 p-0',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        'disabled:opacity-50 disabled:pointer-events-none',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
