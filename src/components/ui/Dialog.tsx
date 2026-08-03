'use client';

import { type ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { X } from 'lucide-react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Dialog({ isOpen, onClose, title, children, size = 'md' }: DialogProps) {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose();
      }}
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={cn(
          'bg-surface-elevated rounded-2xl shadow-xl w-full border border-strong',
          sizeClasses[size],
          'max-h-[90vh] overflow-y-auto'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-soft">
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-secondary hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(157,185,166,0.9)]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
