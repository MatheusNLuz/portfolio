import React from 'react';
import { cn } from '@/utils/cn';

export interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const GlassContainer: React.FC<GlassContainerProps> = ({
  className,
  glow = false,
  hoverEffect = true,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        glow ? 'card-highlight' : 'card-surface',
        'p-6 transition-all duration-300 ease-out bg-white border border-blue-200',
        hoverEffect && 'hover:-translate-y-1 hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
