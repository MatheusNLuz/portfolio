import React from 'react';
import { WizardQuestion, WizardData } from '@/types/wizard';
import { cn } from '@/utils/cn';

export interface WizardStepProps {
  question: WizardQuestion;
  data: WizardData;
  onUpdate: <K extends keyof WizardData>(field: K, value: WizardData[K]) => void;
  onNext: () => void;
}

export const WizardStep: React.FC<WizardStepProps> = ({
  question,
  data,
  onUpdate,
  onNext,
}) => {
  const currentValue = data[question.id];

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onUpdate(question.id, e.target.value as any);
  };

  const handleChoiceSelect = (value: string) => {
    onUpdate(question.id, value as any);
  };

  const handleBooleanSelect = (val: boolean) => {
    onUpdate(question.id, val as any);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
      {/* Title & Subtitle */}
      <div className="space-y-2 text-center sm:text-left">
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
          {question.title}
        </h3>
        <p className="text-slate-500 text-sm sm:text-base">
          {question.subtitle}
        </p>
      </div>

      {/* Input Fields / Choices */}
      <div className="pt-2">
        {question.type === 'text' && (
          <div className="space-y-4">
            <input
              type="text"
              value={(currentValue as string) || ''}
              onChange={handleTextChange}
              placeholder={question.placeholder}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (currentValue as string)?.trim()) {
                  onNext();
                }
              }}
              className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-blue-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-lg transition-all"
            />
            <span className="text-xs text-slate-500 block">Pressione Enter para avançar</span>
          </div>
        )}

        {question.type === 'choice' && question.options && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.options.map((opt) => {
              const isSelected = currentValue === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleChoiceSelect(opt.id)}
                  className={cn(
                    'p-4 rounded-xl text-left border transition-all flex flex-col justify-between gap-2 group',
                    isSelected
                      ? 'bg-slate-100 border-blue-600 text-slate-900 shadow-lg shadow-blue-500/10'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-[#f8fafc] hover:border-blue-300'
                  )}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={cn("font-display font-semibold text-base", isSelected ? 'text-slate-800' : 'text-slate-800 group-hover:text-slate-900')}>
                      {opt.label}
                    </span>
                    <div
                      className={cn(
                        'w-4 h-4 rounded-full border flex items-center justify-center',
                        isSelected ? 'border-blue-600 bg-slate-500' : 'border-blue-300'
                      )}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </div>
                  {opt.description && (
                    <p className={cn("text-xs font-normal", isSelected ? "text-slate-700" : "text-slate-500")}>
                      {opt.description}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {question.type === 'boolean' && question.options && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {question.options.map((opt) => {
              const boolVal = opt.id === 'sim';
              const isSelected = currentValue === boolVal;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleBooleanSelect(boolVal)}
                  className={cn(
                    'p-6 rounded-2xl text-left border transition-all flex flex-col gap-2',
                    isSelected
                      ? 'bg-slate-100 border-blue-600 text-slate-900 shadow-lg shadow-blue-500/10'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-[#f8fafc] hover:border-blue-300'
                  )}
                >
                  <span className={cn("font-display font-semibold text-lg", isSelected ? "text-slate-800" : "text-slate-900")}>
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
