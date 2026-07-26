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
    className={cn("w-8 h-8", className)}
  >
    {/* M */}
    <path 
      d="M20 75V25L45 50L70 25V75" 
      stroke="currentColor" 
      strokeWidth="10" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    {/* L (connected to the right leg of M) */}
    <path 
      d="M70 75H90" 
      stroke="currentColor" 
      strokeWidth="10" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);
