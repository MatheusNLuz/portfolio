import React from 'react';
import { cn } from '@/utils/cn';

export interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  className,
}) => {
  const percentage = Math.min(Math.max((currentStep / totalSteps) * 100, 0), 100);

  return (
    <div className={cn('w-full space-y-2', className)}>
      <div className="flex justify-between items-center text-xs text-blue-600 font-medium">
        <span>Progresso do Orçamento</span>
        <span className="text-blue-950 font-semibold">{Math.round(percentage)}% Concluído</span>
      </div>
      <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden border border-blue-200 p-0.5">
        <div
          className="h-full bg-blue-900 rounded-full transition-all duration-500 ease-out shadow-sm"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
