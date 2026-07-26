import React, { useRef } from 'react';
import { GlassContainer } from '@/components/ui/GlassContainer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { createStaggerReveal } from '@/utils/gsap';
import { Calendar, ShoppingBag, LayoutTemplate, Zap, Check, ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';

export const SolutionsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const localServices = [
    {
      id: 'agendamento',
      title: 'Sistemas de Agendamento',
      description: 'Acabe com o vai e vem de mensagens no WhatsApp. Seus clientes agendam, remarcam e cancelam sozinhos, 24 horas por dia, enquanto você foca no atendimento.',
      iconName: 'Calendar',
      benefits: ['Agenda sempre organizada', 'Redução de faltas (lembretes automáticos)', 'Profissionalismo desde o 1º contato'],
      deliverables: ['Painel de Controle', 'Link na Bio', 'Notificações'],
    },
    {
      id: 'catalogo',
      title: 'Catálogos Virtuais',
      description: 'Esqueça os PDFs pesados e desatualizados. Mostre seus produtos e serviços com fotos, preços atualizados e receba os pedidos organizados direto no seu WhatsApp.',
      iconName: 'ShoppingBag',
      benefits: ['Pedidos organizados e padronizados', 'Atualização fácil de preços', 'Carregamento rápido no celular'],
      deliverables: ['Cardápio/Catálogo Online', 'Carrinho de Compras', 'Link Direto'],
    },
    {
      id: 'landing',
      title: 'Landing Pages de Alta Conversão',
      description: 'Um site rápido e focado em transformar visitantes em clientes. Perfeito para clínicas, advogados ou prestadores de serviços que investem em anúncios e precisam de resultados.',
      iconName: 'LayoutTemplate',
      benefits: ['Mais orçamentos diários', 'Passa confiança e autoridade', 'Funciona perfeitamente no celular'],
      deliverables: ['Site Rápido (SEO)', 'Botão de WhatsApp', 'Formulário de Contato'],
    }
  ];

  const iconMap: Record<string, React.ReactNode> = {
    Calendar: <Calendar className="w-6 h-6 text-slate-800" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-slate-800" />,
    LayoutTemplate: <LayoutTemplate className="w-6 h-6 text-slate-800" />,
  };

  useGSAP(() => {
    if (gridRef.current) {
      createStaggerReveal(gridRef.current.children, {
        trigger: sectionRef.current,
        start: 'top 80%',
        stagger: 0.15,
      });
    }
  }, { scope: sectionRef });

  return (
    <section id="solucoes" ref={sectionRef} className="overflow-hidden py-24 px-4 sm:px-8 relative bg-[#f8fafc] border-t border-slate-200">
      <div className="aurora-orb-1 top-0 left-[-10%]"></div>
      <div className="aurora-orb-2 bottom-0 right-[-10%]"></div>
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="accent" icon={<Zap className="w-3.5 h-3.5 text-sky-500" />}>
            O que fazemos
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Ferramentas práticas para o seu dia a dia
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg">
            Soluções digitais focadas em resolver problemas reais: trazer mais clientes, organizar os pedidos e economizar o seu tempo.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localServices.map((service, index) => {
            const isFirst = index === 0;
            return (
              <GlassContainer
                key={service.id}
                className={`flex flex-col justify-between space-y-6 glass-panel border-slate-200 p-8 will-change-transform ${
                  isFirst ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                    {iconMap[service.iconName] || <Zap className="w-6 h-6 text-slate-800" />}
                  </div>

                  <h3 className="font-display font-bold text-2xl text-slate-900">
                    {service.title}
                  </h3>

                  <p className="font-sans text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 pt-2">
                    <span className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Como isso te ajuda:
                    </span>
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-slate-800 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables & Action */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-medium">
                    <span className="text-slate-500">Você recebe:</span>{' '}
                    <span className="text-slate-700 font-semibold">
                      {service.deliverables.join(' • ')}
                    </span>
                  </div>
                  <Button
                    variant="surface"
                    size="sm"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    onClick={() => {
                      const ctaSection = document.getElementById('orcamento');
                      ctaSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Saber Mais
                  </Button>
                </div>
              </GlassContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
};
