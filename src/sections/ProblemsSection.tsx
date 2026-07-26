import React, { useRef } from 'react';
import { Badge } from '@/components/ui/Badge';
import { createStaggerReveal } from '@/utils/gsap';
import { AlertTriangle, CheckCircle, Clock, ShieldAlert, Layers } from 'lucide-react';
import { useGSAP } from '@gsap/react';

export const ProblemsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (rowsRef.current) {
      const rows = rowsRef.current.children;
      createStaggerReveal(rows, {
        trigger: sectionRef.current,
        start: 'top 80%',
        stagger: 0.15,
      });
    }
  }, { scope: sectionRef });

  const comparisons = [
    {
      problemTitle: 'Sistemas Antigos & Lentidão',
      problemDesc:
        'Softwares legados que travam durante a operação, causam perda de dados e geram insatisfação nas equipes e clientes.',
      problemIcon: ShieldAlert,
      solutionTitle: 'Plataformas Modernas e Ultrarrápidas',
      solutionDesc:
        'Arquitetura em React 19 e APIs de alta performance com tempos de resposta inferiores a 100ms e 99.9% de uptime.',
      solutionIcon: CheckCircle,
    },
    {
      problemTitle: 'Processos Manuais & Planilhas',
      problemDesc:
        'Equipes perdendo horas diárias preenchendo planilhas, copiando dados entre telas e cometendo erros operacionais caros.',
      problemIcon: Clock,
      solutionTitle: 'Automação Inteligente 24/7',
      solutionDesc:
        'Workflows automatizados que conectam suas ferramentas, geram relatórios instantâneos e eliminam tarefas repetitivas.',
      solutionIcon: CheckCircle,
    },
    {
      problemTitle: 'Softwares Engessados com Mensalidades',
      problemDesc:
        'Pagar fortunas mensais por licenças de softwares prontos que não se adaptam à realidade do seu modelo de negócio.',
      problemIcon: Layers,
      solutionTitle: 'Software 100% Seu (Sem Mensalidades)',
      solutionDesc:
        'Desenvolvimento de propriedade intelectual própria sob medida para as regras exatas do seu negócio, sem cobranças recorrentes por usuário.',
      solutionIcon: CheckCircle,
    },
  ];

  return (
    <section id="problemas" ref={sectionRef} className="py-24 px-4 sm:px-8 relative bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="accent" icon={<AlertTriangle className="w-3.5 h-3.5 text-white" />}>
            Diagnóstico de Desafios
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Quais problemas sua empresa enfrenta hoje?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Nós eliminamos os gargalos operacionais que impedem seu negócio de escalar com segurança.
          </p>
        </div>

        {/* Comparison Rows */}
        <div ref={rowsRef} className="flex flex-col space-y-6">
          {comparisons.map((item, index) => {
            const ProblemIcon = item.problemIcon;
            const SolutionIcon = item.solutionIcon;

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b border-slate-200 last:border-0 will-change-transform"
              >
                {/* Problem Side */}
                <div className="space-y-3 md:pr-8">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                    <ProblemIcon className="w-4 h-4" />
                    <span>Gargalo Atual</span>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-slate-800">
                    {item.problemTitle}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.problemDesc}
                  </p>
                </div>

                {/* Solution Side */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 text-xs font-semibold uppercase tracking-wider">
                    <SolutionIcon className="w-4 h-4" />
                    <span>Nossa Solução</span>
                  </div>
                  <h4 className="font-display font-semibold text-xl text-slate-900">
                    {item.solutionTitle}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.solutionDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
