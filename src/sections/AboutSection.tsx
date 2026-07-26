import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Building2, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="overflow-hidden py-24 px-4 sm:px-8 relative bg-[#f8fafc] border-t border-slate-200">
      <div className="aurora-orb-1 top-0 left-[-10%]"></div>
      <div className="aurora-orb-2 bottom-0 right-[-10%]"></div>
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="default" icon={<Building2 className="w-3.5 h-3.5 text-slate-700" />}>
              Sobre o Serviço
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Sexta-feira à noite e você ainda está respondendo clientes no WhatsApp?
            </h2>
            <p className="font-sans text-slate-700 text-base leading-relaxed">
              Você não abriu seu negócio para passar o dia inteiro copiando e colando mensagens de agendamento ou enviando PDF de cardápio. Eu ajudo empresários a saírem do operacional criando sistemas que funcionam como um funcionário perfeito 24 horas por dia.
            </p>
            <p className="font-sans text-slate-700 text-sm leading-relaxed">
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

          {/* Right Column: Profile Card */}
          <div className="lg:col-span-6">
            <div className="glass-panel border border-slate-200 shadow-slate-500/5 rounded-2xl p-8 transition-all duration-500 hover:shadow-slate-500/10 hover:border-blue-500/30 flex flex-col items-center text-center space-y-6">
              <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-sm overflow-hidden flex items-center justify-center shrink-0">
                <span className="font-display text-4xl text-slate-400">ML</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-slate-900">Olá, eu sou o Matheus Luz</h3>
                <p className="text-sm text-slate-600 font-medium uppercase tracking-widest">
                  Engenheiro de Software & Fundador
                </p>
              </div>
              <p className="font-sans text-slate-700 text-sm leading-relaxed max-w-sm">
                Minha missão é traduzir tecnologias complexas em ferramentas simples que geram lucro e tempo livre. Como criador do SaaS <strong>PapinhIA</strong>, sei exatamente o que é colocar um produto digital no ar e escalar. Trago essa mesma expertise técnica para o seu projeto.
              </p>
              <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 flex flex-col w-full text-left gap-2 mt-4">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>Código limpo e escalável</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>Foco total na experiência do usuário</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
