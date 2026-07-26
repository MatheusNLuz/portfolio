import React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'success' | 'outline';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  icon,
  children,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-blue-100 text-blue-800 border-blue-200',
    accent: 'bg-blue-950 text-white border-blue-900',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    outline: 'bg-transparent text-blue-700 border-blue-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border transition-colors',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
