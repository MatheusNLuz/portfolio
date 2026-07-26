export interface WizardData {
  name: string;
  company: string;
  segment: string;
  employees: string;
  hasExistingSystem: boolean;
  projectType: string;
  currentProblem: string;
  deadline: string;
  budgetRange: string;
  contactMethod: string;
}

export interface QuestionOption {
  id: string;
  label: string;
  description?: string;
  icon?: string;
  estimatedComplexity?: 'Baixa' | 'Média' | 'Alta' | 'Enterprise';
}

export interface WizardQuestion {
  id: keyof WizardData;
  title: string;
  subtitle: string;
  type: 'text' | 'choice' | 'boolean';
  options?: QuestionOption[];
  placeholder?: string;
}

export interface EstimationResult {
  estimatedTime: string;
  budgetRange: string;
  complexity: 'Alta' | 'Média' | 'Enterprise';
  recommendation: string;
}
