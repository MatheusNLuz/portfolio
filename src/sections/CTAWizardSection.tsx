import React from 'react';
import { WizardContainer } from '@/features/wizard/WizardContainer';
import { Badge } from '@/components/ui/Badge';
import { Sparkles } from 'lucide-react';

export const CTAWizardSection: React.FC = () => {
  return (
    <section id="orcamento" className="overflow-hidden py-24 px-4 sm:px-8 relative bg-[#f8fafc] min-h-screen flex items-center border-t border-slate-200">
      <div className="aurora-orb-1 top-0 left-[-10%]"></div>
      <div className="aurora-orb-2 bottom-0 right-[-10%]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#dbeafe_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      <div className="max-w-5xl mx-auto w-full space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Badge variant="accent" icon={<Sparkles className="w-3.5 h-3.5 text-white" />}>
            Solicitação de Orçamento
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Pronto para transformar sua empresa?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Responda algumas perguntas em menos de 2 minutos para receber o estudo preliminar de prazo e investimento.
          </p>
        </div>
        <WizardContainer />
      </div>
    </section>
  );
};
