import React, { useRef } from 'react';
import { ArrowUpRight, Hammer, MessageCircle } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/utils/gsap';

const steps = [
  {
    number: '01',
    title: 'Entender',
    description:
      'A conversa começa pelo seu contexto: como o trabalho acontece hoje e o que você gostaria de simplificar.',
    icon: MessageCircle,
    tag: 'PONTO DE PARTIDA',
  },
  {
    number: '02',
    title: 'Construir',
    description:
      'Com o desafio mais claro, definimos um caminho: automação, sistema sob medida ou produto. A solução toma forma a partir desse contexto.',
    icon: Hammer,
    tag: 'UMA SOLUÇÃO EM CONTEXTO',
  },
  {
    number: '03',
    title: 'Entregar',
    description:
      'A gente combina como colocar a solução em uso e os próximos passos de acordo com o que o projeto pede.',
    icon: ArrowUpRight,
    tag: 'DA IDEIA AO USO',
  },
];

export const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const steps = sectionRef.current?.querySelectorAll<HTMLElement>('.process-step');
    if (!steps?.length) return;

    gsap.fromTo(steps, { autoAlpha: 0, y: 14 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 72%', once: true },
    });
  }, { scope: sectionRef });

  return (
  <section id="processo" ref={sectionRef} className="border-t border-brand-blue-gray px-4 py-20 sm:px-8 sm:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 max-w-2xl space-y-4 sm:mb-14">
        <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold tracking-[0.16em] text-brand-cobalt"><span aria-hidden="true" className="size-2 rounded-full bg-brand-signal" /> UM PASSO DE CADA VEZ</span>
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Clareza antes de código.</h2>
        <p className="max-w-xl text-base leading-7 text-brand-muted">
          Cada projeto começa entendendo o problema. A partir daí, a gente encontra uma forma
          simples de tirar a ideia do papel.
        </p>
      </div>

      <ol className="relative mt-10 grid list-none gap-0 p-0 md:mt-14 md:grid-cols-3">
        {steps.map(({ number, title, description, icon: Icon, tag }) => (
          <li key={number} className="process-step group relative grid grid-cols-[2.75rem_1fr] gap-4 border-t border-brand-blue-gray py-6 first:border-0 md:grid-cols-1 md:gap-0 md:border-0 md:px-7 md:py-0 md:first:pl-0 md:last:pr-0">
            <span aria-hidden="true" className="absolute left-[1.25rem] top-0 h-full w-px bg-brand-blue-gray md:left-7 md:top-6 md:h-px md:w-full md:group-last:hidden" />
            <span className="relative z-10 grid size-10 place-items-center rounded-full border border-brand-blue-gray bg-brand-paper font-mono text-xs text-brand-cobalt transition-colors duration-200 group-hover:border-brand-cobalt group-hover:bg-brand-cobalt group-hover:text-white md:mb-7 md:size-12">
              {number}
            </span>
            <div className="min-w-0 pb-1 md:pr-7">
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-brand-muted">
                <Icon aria-hidden="true" className="size-4 text-brand-cobalt" /> {tag}
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">{title}</h3>
              <p className="mt-2 max-w-sm text-base leading-7 text-brand-muted">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
  );
};
