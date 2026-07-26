import React, { Suspense, lazy, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/utils/gsap';

// Lazy loading the R3F 3D Canvas component to optimize FCP
const BusinessCardScene = lazy(() => import('@/features/hero-3d/BusinessCardScene'));

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from('.hero-badge', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
    .from('.hero-title', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.4')
    .from('.hero-subtitle', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.6')
    .from('.hero-ctas', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.4')
    .from('.hero-stats', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
    }, '-=0.4')
    .from('.hero-3d-card', {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.5)',
    }, '-=0.8');
  }, { scope: containerRef });

  const stats = [
    { value: '+Tempo', label: 'Livre na sua rotina' },
    { value: 'Zero', label: 'Caos no WhatsApp' },
    { value: '24/7', label: 'Vendas Automáticas' }
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-20 px-4 sm:px-8 flex items-center overflow-hidden bg-[#f8fafc]">
      <div className="absolute inset-0 dot-grid opacity-30 z-0" />
      {/* Aurora Orbs */}
      <div className="aurora-orb-1 top-[-10%] left-[-10%]"></div>
      <div className="aurora-orb-2 bottom-[-10%] right-[-10%]"></div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Copywriting & CRO CTA */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center will-change-transform">
            <Badge variant="accent" icon={<Sparkles className="w-3.5 h-3.5 text-blue-400" />}>
              Para Negócios Locais
            </Badge>
          </div>

          {/* Title */}
          <h1 className="hero-title font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] will-change-transform">
            Seu negócio local finalmente organizado e vendendo no <em className="text-gradient-aurora italic not-italic">automático.</em>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle font-sans text-slate-600 text-base sm:text-lg lg:text-xl max-w-2xl font-normal leading-relaxed will-change-transform">
            Substitua a confusão de mensagens e os agendamentos manuais por um sistema que trabalha por você. Dê aos seus clientes uma experiência profissional enquanto você foca no que realmente importa: o seu serviço.
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 will-change-transform">
            <Button
              variant="primary"
              size="xl"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              onClick={() => {
                const ctaSection = document.getElementById('orcamento');
                ctaSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Quero Profissionalizar Meu Negócio
            </Button>
            <Button
              variant="surface"
              size="xl"
              onClick={() => {
                const projectsSection = document.getElementById('projetos');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Como Funciona
            </Button>
          </div>

          {/* Trust Metrics Banner */}
          <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center gap-4 text-slate-600">
            {stats.map((stat, idx) => (
              <React.Fragment key={idx}>
                <div className="hero-stats flex items-baseline gap-2 will-change-transform">
                  <span className="font-mono font-bold text-xl sm:text-2xl text-slate-900">
                    {stat.value}
                  </span>
                  <span className="font-sans text-xs font-medium leading-tight uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
                {idx < stats.length - 1 && (
                  <span className="hero-stats w-1.5 h-1.5 rounded-full bg-slate-300 will-change-transform" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive 3D Business Card */}
        <div className="hero-3d-card lg:col-span-5 relative flex items-center justify-center will-change-transform">
          <Suspense
            fallback={
              <div className="w-full h-[400px] glass-panel rounded-3xl flex flex-col items-center justify-center gap-3">
                <div className="w-8 h-8 border-2 border-sky-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs text-slate-500 font-medium">Carregando Experiência...</span>
              </div>
            }
          >
            <BusinessCardScene />
          </Suspense>
        </div>
      </div>
    </section>
  );
};
