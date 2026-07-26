import React from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'surface' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-xl cursor-pointer transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98] select-none';

    const variants = {
      primary:
        'aurora-button',
      secondary:
        'bg-blue-100 text-blue-950 hover:bg-blue-200 border border-blue-200 shadow-sm',
      surface:
        'bg-white text-blue-950 shadow-sm hover:bg-blue-50 border border-blue-200',
      outline:
        'bg-transparent border border-blue-200 text-blue-800 hover:text-blue-950 hover:bg-blue-100',
      ghost: 'bg-transparent text-blue-700 hover:text-blue-950 hover:bg-blue-100',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs font-semibold gap-1.5',
      md: 'px-4 py-2 text-sm font-semibold gap-2',
      lg: 'px-6 py-3 text-base font-semibold gap-2.5',
      xl: 'px-8 py-4 text-lg font-bold gap-3 shadow-md',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="w-5 h-5 border-2 border-blue-900/30 border-t-blue-900 rounded-full animate-spin" />
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
