import React from 'react';
import { WizardData, EstimationResult } from '@/types/wizard';
import { Button } from '@/components/ui/Button';
import { GlassContainer } from '@/components/ui/GlassContainer';
import { Badge } from '@/components/ui/Badge';
import { buildWhatsAppUrl } from '@/utils/whatsapp';
import { MessageSquare, Sparkles, Clock, DollarSign, Cpu, CheckCircle2, RotateCcw } from 'lucide-react';

export interface WizardSummaryProps {
  data: WizardData;
  estimation: EstimationResult;
  onReset: () => void;
}

export const WizardSummary: React.FC<WizardSummaryProps> = ({
  data,
  estimation,
  onReset,
}) => {
  const whatsappUrl = buildWhatsAppUrl(data);

  return (
    <GlassContainer glow className="p-8 sm:p-10 space-y-8 max-w-3xl mx-auto border-slate-200">
      {/* Header */}
      <div className="space-y-3 text-center">
        <Badge variant="accent" icon={<Sparkles className="w-4 h-4" />}>
          Estudo Preliminar Concluído
        </Badge>
        <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          Resumo do Seu Projeto & Estimativa
        </h3>
        <p className="text-slate-500 text-sm sm:text-base">
          Obrigado, <strong className="text-slate-900">{data.name}</strong>! Analisamos as informações da{' '}
          <strong className="text-slate-800">{data.company}</strong> e preparamos uma estimativa prévia.
        </p>
      </div>

      {/* Estimations Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-1 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
            <Cpu className="w-4 h-4 text-slate-800" />
            <span>Complexidade</span>
          </div>
          <div className="font-display font-bold text-xl text-slate-900">{estimation.complexity}</div>
        </div>

        <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-1 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
            <Clock className="w-4 h-4 text-slate-800" />
            <span>Prazo Estimado</span>
          </div>
          <div className="font-display font-bold text-xl text-slate-900">{estimation.estimatedTime}</div>
        </div>

        <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-1 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
            <DollarSign className="w-4 h-4 text-slate-800" />
            <span>Faixa de Investimento</span>
          </div>
          <div className="font-display font-bold text-lg text-slate-800">{estimation.budgetRange}</div>
        </div>
      </div>

      {/* Scope Details List */}
      <div className="p-6 rounded-2xl bg-slate-100/50 border border-slate-200 space-y-3">
        <h4 className="font-display font-semibold text-sm text-slate-600 uppercase tracking-wider">
          Escopo Mapeado:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
            <span><strong>Tipo:</strong> {data.projectType}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
            <span><strong>Porte:</strong> {data.employees}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
            <span><strong>Sistema Atual:</strong> {data.hasExistingSystem ? 'Sim (Migração)' : 'Novo do Zero'}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
            <span><strong>Prazo Solicitado:</strong> {data.deadline}</span>
          </div>
        </div>
      </div>

      {/* Encouraging Message */}
      <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-center">
        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
          💡 &quot;Esta estimativa é preliminar. Clique no botão abaixo para nos enviar o escopo formatado via WhatsApp e agendar a reunião inicial com o Engenheiro de Software.&quot;
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1"
        >
          <Button
            variant="primary"
            size="xl"
            className="w-full"
            leftIcon={<MessageSquare className="w-5 h-5 text-white" />}
          >
            Conversar pelo WhatsApp
          </Button>
        </a>

        <Button
          variant="ghost"
          size="lg"
          onClick={onReset}
          leftIcon={<RotateCcw className="w-4 h-4" />}
        >
          Refazer Resumo
        </Button>
      </div>
    </GlassContainer>
  );
};
