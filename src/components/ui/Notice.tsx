'use client';

import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

export type NoticeVariant = 'info' | 'warning' | 'error' | 'success';

interface NoticeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: NoticeVariant;
  title?: string;
  icon?: boolean;
}

const NOTICE_ICONS: Record<NoticeVariant, React.ComponentType<{ className?: string }>> = {
  info: Info,
  warning: AlertCircle,
  error: XCircle,
  success: CheckCircle,
};

const NOTICE_STYLES: Record<NoticeVariant, string> = {
  info: 'bg-background-soft border-soft text-secondary',
  warning: 'bg-terracotta-50 border-amber-200 text-primary',
  error: 'bg-terracotta-50 border-amber-200 text-primary',
  success: 'bg-sage-light border-soft text-primary',
};

export function Notice({
  className,
  children,
  variant = 'info',
  title,
  icon = true,
  ...props
}: NoticeProps) {
  const Icon = NOTICE_ICONS[variant];

  return (
    <div
      className={cn(
        'rounded-xl border p-4 flex gap-3',
        NOTICE_STYLES[variant],
        className
      )}
      {...props}
    >
      {icon && <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />}
      <div className="flex-1">
        {title && <p className="font-medium mb-1">{title}</p>}
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}
