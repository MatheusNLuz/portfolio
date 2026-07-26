import React from 'react';
import { useWizardStore } from './useWizardStore';
import { WizardStep } from './WizardStep';
import { WizardSummary } from './WizardSummary';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import { GlassContainer } from '@/components/ui/GlassContainer';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const WizardContainer: React.FC = () => {
  const {
    currentStepIndex,
    totalSteps,
    currentQuestion,
    data,
    isCompleted,
    updateField,
    nextStep,
    prevStep,
    calculateEstimation,
    resetWizard,
  } = useWizardStore();

  if (isCompleted) {
    return (
      <WizardSummary
        data={data}
        estimation={calculateEstimation()}
        onReset={resetWizard}
      />
    );
  }

  const isCurrentValid = () => {
    const val = data[currentQuestion.id];
    if (typeof val === 'string') return val.trim().length > 0;
    return val !== undefined && val !== null;
  };

  return (
    <GlassContainer glow className="p-6 sm:p-10 space-y-8 max-w-3xl mx-auto">
      {/* Progress Bar */}
      <ProgressBar currentStep={currentStepIndex + 1} totalSteps={totalSteps} />

      {/* Active Step Question */}
      <div className="min-h-[260px] flex flex-col justify-center">
        <WizardStep
          question={currentQuestion}
          data={data}
          onUpdate={updateField}
          onNext={nextStep}
        />
      </div>

      {/* Navigation Footer */}
      <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
        <Button
          variant="ghost"
          size="md"
          onClick={prevStep}
          disabled={currentStepIndex === 0}
          leftIcon={<ArrowLeft className="w-4 h-4" />}
        >
          Voltar
        </Button>

        <Button
          variant="primary"
          size="lg"
          onClick={nextStep}
          disabled={!isCurrentValid()}
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          {currentStepIndex === totalSteps - 1 ? 'Gerar Resumo' : 'Próximo'}
        </Button>
      </div>
    </GlassContainer>
  );
};
