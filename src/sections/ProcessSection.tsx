import React, { useRef } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Compass, MessageCircle, Hammer, Truck, CheckCircle } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/utils/gsap';

export const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (stepsRef.current && lineRef.current) {
      const stepElements = gsap.utils.toArray('.process-step', stepsRef.current);
      
      // Animate vertical line
      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: true,
          }
        }
      );

      // Animate steps fading in
      stepElements.forEach((step: any) => {
        gsap.from(step, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        });
      });
    }
  }, { scope: sectionRef });

  const steps = [
    {
      step: '01',
      title: 'Conversa',
      subtitle: 'Entendendo as suas dores reais',
      description:
        'Bate-papo sem termos técnicos. Você me conta como funciona o seu negócio hoje, onde estão as dores de cabeça (como agendamentos furados ou mensagens perdidas) e nós definimos a melhor solução.',
      icon: MessageCircle,
      deliverables: ['Diagnóstico do Negócio', 'Proposta Clara', 'Orçamento Transparente'],
    },
    {
      step: '02',
      title: 'Construção',
      subtitle: 'A mão na massa para resolver o problema',
      description:
        'Eu desenvolvo o sistema, site ou catálogo enquanto você continua focando em atender seus clientes. Você acompanha tudo de forma simples e aprova o visual antes de finalizarmos.',
      icon: Hammer,
      deliverables: ['Design Profissional', 'Desenvolvimento Rápido', 'Aprovação Visual'],
    },
    {
      step: '03',
      title: 'Entrega',
      subtitle: 'Seu negócio pronto para vender mais',
      description:
        'Colocamos tudo no ar. Te ensino a usar a ferramenta em poucos minutos e fico à disposição para dar suporte. Nada de te abandonar depois que o serviço está pronto.',
      icon: Truck,
      deliverables: ['Sistema no Ar', 'Treinamento Rápido', 'Suporte Contínuo'],
    },
  ];

  return (
    <section id="processo" ref={sectionRef} className="overflow-hidden py-24 px-4 sm:px-8 relative bg-[#f8fafc] border-t border-slate-200">
      <div className="aurora-orb-1 top-0 left-[-10%]"></div>
      <div className="aurora-orb-2 bottom-0 right-[-10%]"></div>
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="accent" icon={<Compass className="w-3.5 h-3.5 text-sky-500" />}>
            Simples e Direto
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Sem enrolação: Como vamos trabalhar juntos
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg">
            Um processo de 3 passos feito para não tomar o seu tempo e entregar resultados rápidos.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          <div ref={lineRef} className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-blue-200 hidden sm:block will-change-transform"></div>
          
          <div ref={stepsRef} className="space-y-12 md:space-y-24">
            {steps.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;
              return (
                <div key={index} className="process-step relative flex flex-col md:flex-row w-full items-start md:items-center will-change-transform">
                  
                  {/* Marker */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-sm">
                    <Icon className="w-5 h-5 text-slate-800" />
                  </div>

                  {/* Content Wrapper */}
                  <div className={cn("w-full pl-20 md:pl-0 md:w-1/2", 
                    isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto md:text-left"
                  )}>
                    <div className="space-y-4">
                      <span className="font-mono font-black text-4xl text-slate-400 block mb-2">{item.step}</span>
                      <h3 className="font-display font-bold text-2xl text-slate-900">{item.title}</h3>
                      <p className="font-sans text-slate-800 text-sm font-semibold">{item.subtitle}</p>
                      <p className="font-sans text-slate-600 text-sm leading-relaxed">{item.description}</p>
                      
                      <div className={cn("pt-4 space-y-2 flex flex-col", isEven ? "md:items-end" : "md:items-start")}>
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">O que você recebe:</span>
                        {item.deliverables.map((deliv, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                            {isEven && <span className="hidden md:block">{deliv}</span>}
                            <CheckCircle className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                            <span className={cn(isEven && "md:hidden")}>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
