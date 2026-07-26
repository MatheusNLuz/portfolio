import { useState } from 'react';
import { WizardData, EstimationResult } from '@/types/wizard';
import { WIZARD_QUESTIONS } from '@/constants/wizardQuestions';

const initialData: WizardData = {
  name: '',
  company: '',
  segment: 'tecnologia',
  employees: '11-50',
  hasExistingSystem: false,
  projectType: 'sistema-gestao',
  currentProblem: '',
  deadline: 'normal',
  budgetRange: '25k-45k',
  contactMethod: 'whatsapp',
};

export function useWizardStore() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [data, setData] = useState<WizardData>(initialData);
  const [isCompleted, setIsCompleted] = useState(false);

  const totalSteps = WIZARD_QUESTIONS.length;
  const currentQuestion = WIZARD_QUESTIONS[currentStepIndex];

  const updateField = <K extends keyof WizardData>(field: K, value: WizardData[K]) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const calculateEstimation = (): EstimationResult => {
    let complexity: 'Média' | 'Alta' | 'Enterprise' = 'Média';
    let time = '4 a 6 semanas';
    let budget = 'R$ 25.000 - R$ 40.000';

    if (data.projectType === 'saas' || data.employees === '200+') {
      complexity = 'Enterprise';
      time = '8 a 12 semanas';
      budget = 'R$ 55.000 - R$ 90.000+';
    } else if (data.projectType === 'automacao') {
      complexity = 'Média';
      time = '3 a 5 semanas';
      budget = 'R$ 18.000 - R$ 30.000';
    } else if (data.budgetRange === '80k+') {
      complexity = 'Enterprise';
      time = '10 a 14 semanas';
      budget = 'R$ 80.000+';
    }

    return {
      complexity,
      estimatedTime: time,
      budgetRange: budget,
      recommendation:
        'Projeto com alta viabilidade técnica. Nossa equipe preparará a proposta de arquitetura inicial para nossa reunião.',
    };
  };

  const resetWizard = () => {
    setCurrentStepIndex(0);
    setData(initialData);
    setIsCompleted(false);
  };

  return {
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
  };
}
