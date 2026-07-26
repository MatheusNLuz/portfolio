import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Building2, CheckCircle2, Clock, Smartphone } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="overflow-hidden py-24 px-4 sm:px-8 relative bg-[#f8fafc] border-t border-slate-200">
      <div className="aurora-orb-1 top-0 left-[-10%]"></div>
      <div className="aurora-orb-2 bottom-0 right-[-10%]"></div>
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="default" icon={<Building2 className="w-3.5 h-3.5 text-slate-600" />}>
              Sobre o Serviço
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Eu ajudo empresários locais a pararem de perder tempo com tarefas repetitivas.
            </h2>
            <p className="font-sans text-slate-600 text-base leading-relaxed">
              Você não abriu seu negócio para passar o dia inteiro respondendo mensagens de agendamento ou enviando o cardápio em PDF. Meu objetivo é criar sistemas simples e diretos que funcionam como um funcionário 24 horas por dia.
            </p>
            <p className="font-sans text-slate-600 text-sm leading-relaxed">
              Sem termos técnicos complicados ou mensalidades ocultas. Focamos na sua realidade: criar uma presença digital profissional que passa confiança aos seus clientes e devolve a organização para a sua rotina.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Soluções sob medida para a realidade do comércio local',
                'Comunicação direta, transparente e no seu idioma (sem techês)',
                'Foco em resultados práticos: mais vendas, menos estresse',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stats & Security Card */}
          <div className="lg:col-span-6">
            <div className="glass-panel border border-slate-200 shadow-slate-500/5 rounded-2xl space-y-8 p-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-slate-800" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900">Sua rotina no piloto automático</h3>
                  <p className="text-xs text-slate-600">Deixe a tecnologia fazer o trabalho braçal</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div className="space-y-1">
                  <div className="font-mono font-bold text-2xl text-slate-900">100%</div>
                  <div className="text-xs text-slate-600">Focado no seu negócio</div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono font-bold text-2xl text-slate-900">24/7</div>
                  <div className="text-xs text-slate-600">Disponibilidade online</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-slate-800 shrink-0" />
                <span className="text-xs text-slate-600">
                  Tudo projetado para funcionar perfeitamente no celular dos seus clientes.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
