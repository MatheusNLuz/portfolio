import React, { useRef } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { COMPANY } from '@/constants/company';
import { WorkflowDiagram } from '@/components/ui/WorkflowDiagram';
import { Logo } from '@/components/ui/Logo';
import { SITE_INTRO_REVEAL_EVENT } from '@/constants/motion';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/utils/gsap';

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP((_, contextSafe) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const section = sectionRef.current;
    if (!section || !contextSafe) return;

    const startEntrance = contextSafe(() => {
      const route = section.querySelector<SVGPathElement>('.workflow-route');
      const marker = section.querySelector<SVGCircleElement>('#workflow-marker');
      const markerHalo = section.querySelector<SVGCircleElement>('#workflow-marker-halo');
      const markPaths = section.querySelectorAll<SVGPathElement>('.hero-mark .logo-mark-path');
      const markAccent = section.querySelector<SVGCircleElement>('.hero-mark .logo-accent');
      const revealItems = section.querySelectorAll<HTMLElement>('.hero-reveal');
      const nodes = section.querySelectorAll<SVGGElement>('.workflow-node');
      if (!route || !marker || !revealItems.length) return;

      const routeLength = route.getTotalLength();
      const travel = { progress: 0 };
      gsap.set(route, { strokeDasharray: routeLength, strokeDashoffset: routeLength });

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro.fromTo(revealItems, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.1 }, 0);
      intro.fromTo(nodes, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.48, stagger: 0.1, ease: 'power3.out' }, 0.08);
      markPaths.forEach((path, index) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        intro.to(path, { strokeDashoffset: 0, duration: 0.55, ease: 'power2.out' }, 0.06 + index * 0.12);
      });
      if (markAccent) intro.fromTo(markAccent, { autoAlpha: 0, scale: 0, transformOrigin: '50% 50%' }, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, 0.4);
      intro.to(route, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }, 0.12);
      intro.to(travel, {
        progress: 1,
        duration: 1.75,
        ease: 'power1.inOut',
        onUpdate: () => {
          const point = route.getPointAtLength(routeLength * travel.progress);
          marker.setAttribute('cx', String(point.x));
          marker.setAttribute('cy', String(point.y));
          markerHalo?.setAttribute('cx', String(point.x));
          markerHalo?.setAttribute('cy', String(point.y));
        },
      }, 0.25);
    });

    window.addEventListener(SITE_INTRO_REVEAL_EVENT, startEntrance, { once: true });
    return () => window.removeEventListener(SITE_INTRO_REVEAL_EVENT, startEntrance);
  }, { scope: sectionRef });

  return (
  <section id="inicio" ref={sectionRef} className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
      <div className="hero-copy max-w-2xl">
        <div className="hero-reveal mb-7 inline-flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.19em] text-brand-muted">
          <Logo className="hero-mark h-9 w-9 shrink-0 text-brand-ink" />
          Tecnologia prática
        </div>
        <h1 className="hero-reveal max-w-[11ch] text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-brand-ink sm:text-6xl lg:text-[4.7rem]">
          {COMPANY.heroHeadline}
        </h1>
        <p className="hero-reveal mt-7 max-w-xl text-pretty text-base leading-7 text-brand-muted sm:text-lg sm:leading-8">
          {COMPANY.heroSubheadline}
        </p>
        <div className="hero-reveal mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
          <a
            href="#contato"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-brand-cobalt px-6 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#1c43b4] focus-visible:outline-offset-4"
          >
            Me conte o que precisa <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <a
            href="#projetos"
            className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-semibold text-brand-ink transition-colors hover:text-brand-cobalt focus-visible:text-brand-cobalt"
          >
            Conheça o PapinhIA <ArrowDownRight aria-hidden="true" className="h-4 w-4 text-brand-cobalt" />
          </a>
        </div>
        <div className="hero-reveal mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-brand-blue-gray pt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-brand-muted sm:text-[11px]">
          <span>Automação</span><span aria-hidden="true" className="text-brand-signal">/</span>
          <span>Software sob medida</span><span aria-hidden="true" className="text-brand-signal">/</span>
          <span>Produtos SaaS</span>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[40rem] lg:max-w-none">
        <WorkflowDiagram />
      </div>
    </div>
  </section>
  );
};
