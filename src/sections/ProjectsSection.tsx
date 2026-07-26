import React, { useRef } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PROJECTS } from '@/constants/projects';
import { createStaggerReveal } from '@/utils/gsap';
import { Briefcase, TrendingUp, ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (cardsRef.current) {
      createStaggerReveal(cardsRef.current.children, {
        trigger: sectionRef.current,
        start: 'top 80%',
        stagger: 0.2,
      });
    }
  }, { scope: sectionRef });

  return (
    <section id="projetos" ref={sectionRef} className="overflow-hidden py-24 px-4 sm:px-8 relative bg-[#f8fafc] border-t border-slate-200">
      <div className="aurora-orb-1 top-0 left-[-10%]"></div>
      <div className="aurora-orb-2 bottom-0 right-[-10%]"></div>
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="accent" icon={<Briefcase className="w-3.5 h-3.5 text-sky-500" />}>
            Projetos Entregues
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Negócios reais que transformaram sua rotina
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg">
            Veja como ajudamos clínicas, restaurantes, barbearias e prestadores de serviço a economizar tempo e aumentar as vendas.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-panel border border-slate-200 shadow-slate-500/5 rounded-2xl flex flex-col justify-between overflow-hidden p-0 group will-change-transform hover:border-slate-500/30 transition-colors"
            >
              {/* Image Preview */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="default" className="bg-white/90 text-slate-900 border-slate-200 backdrop-blur-sm">{project.category}</Badge>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="font-sans text-xs font-semibold text-slate-800">
                    Cliente: {project.client}
                  </span>
                  <h3 className="font-display font-bold text-xl text-slate-900 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Impact Metrics Grid */}
                <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-2">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="font-mono font-bold text-base text-slate-900 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-slate-800" />
                        <span>{metric.value}</span>
                      </div>
                      <div className="font-sans text-[10px] text-slate-500 leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="font-mono px-2 py-0.5 text-[10px] font-medium bg-slate-100 text-slate-600 rounded-md border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="text-center pt-6">
          <Button
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={() => {
              const ctaSection = document.getElementById('orcamento');
              ctaSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Quero esses resultados na minha empresa
          </Button>
        </div>
      </div>
    </section>
  );
};
