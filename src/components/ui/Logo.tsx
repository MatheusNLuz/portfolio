import React from 'react';
import { cn } from '@/utils/cn';

export interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={cn('w-8 h-8', className)}
    aria-hidden="true"
    focusable="false"
  >
    <path
      className="logo-mark-path"
      d="M13 76V24L37 47L61 24V76"
      stroke="currentColor" 
      strokeWidth="7"
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path
      className="logo-mark-path"
      d="M73 24V76H86"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle className="logo-accent" cx="91" cy="76" r="4.5" fill="var(--color-brand-signal)" />
  </svg>
);
