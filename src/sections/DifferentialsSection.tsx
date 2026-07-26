import React, { useRef } from 'react';
import { GlassContainer } from '@/components/ui/GlassContainer';
import { Badge } from '@/components/ui/Badge';
import { createStaggerReveal } from '@/utils/gsap';
import { Award, Target, MessageCircle, Wallet, Smartphone, ShieldCheck, Clock } from 'lucide-react';
import { useGSAP } from '@gsap/react';

export const DifferentialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (gridRef.current) {
      createStaggerReveal(gridRef.current.children, {
        trigger: sectionRef.current,
        start: 'top 80%',
        stagger: 0.1,
      });
    }
  }, { scope: sectionRef });

  const differentials = [
    {
      title: 'Contato direto comigo',
      description:
        'Nada de robôs, tickets de suporte demorados ou gerentes de conta que não resolvem nada. Você fala diretamente com quem está construindo o seu projeto.',
      icon: MessageCircle,
    },
    {
      title: 'Sem mensalidades abusivas',
      description:
        'Sistemas de assinatura levam todo o seu lucro. Aqui nós combinamos um valor justo pelo desenvolvimento e o sistema passa a ser 100% seu.',
      icon: Wallet,
    },
    {
      title: 'Focado na sua realidade',
      description:
        'Não tentamos te vender tecnologias que você não precisa. O foco é resolver o seu problema: seja agendar mais, vender mais ou economizar tempo.',
      icon: Target,
    },
    {
      title: 'Pensado para o Celular',
      description:
        '95% dos seus clientes vão acessar o seu sistema pelo smartphone. Tudo o que construímos é pensado primeiro para a tela do celular.',
      icon: Smartphone,
    },
    {
      title: 'Segurança e Confiança',
      description:
        'Seus dados e os dados dos seus clientes estão protegidos. Cuidamos da parte técnica para você não se preocupar com vazamentos ou lentidão.',
      icon: ShieldCheck,
    },
    {
      title: 'Velocidade de Entrega',
      description:
        'Entendemos que o seu negócio não pode parar. Trabalhamos de forma ágil para colocar o seu novo sistema no ar no menor tempo possível.',
      icon: Clock,
    },
  ];

  return (
    <section id="diferenciais" ref={sectionRef} className="overflow-hidden py-24 px-4 sm:px-8 relative bg-[#f8fafc] border-t border-slate-200">
      <div className="aurora-orb-1 top-0 left-[-10%]"></div>
      <div className="aurora-orb-2 bottom-0 right-[-10%]"></div>
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="default" icon={<Award className="w-3.5 h-3.5 text-slate-600" />}>
            Por que me escolher
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Uma parceria focada no seu crescimento
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg">
            Sem complicações e sem jargões difíceis. Apenas tecnologia trabalhando a favor da sua empresa.
          </p>
        </div>

        {/* Differentials Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <GlassContainer
                key={index}
                className="group space-y-4 glass-panel border-slate-200 p-6 will-change-transform hover:border-slate-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center transition-colors group-hover:border-slate-500/30">
                  <Icon className="w-5 h-5 text-slate-600 group-hover:text-slate-800 transition-colors" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  {item.title}
                </h3>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </GlassContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
};
