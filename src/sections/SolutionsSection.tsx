import React, { useRef } from 'react';
import { ArrowRight, Blocks, Code2, Workflow } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/utils/gsap';

const services = [
  {
    id: 'automacao',
    eyebrow: 'Menos repetição',
    title: 'Automação e integrações',
    description: 'Conecto etapas e ferramentas para reduzir tarefas repetidas e manter a operação em movimento.',
    icon: Workflow,
  },
  {
    id: 'sistemas',
    eyebrow: 'Feito para o contexto',
    title: 'Software sob medida',
    description: 'Desenvolvo sistemas que acompanham as regras e as necessidades do seu negócio.',
    icon: Code2,
  },
  {
    id: 'saas',
    eyebrow: 'Produtos próprios',
    title: 'Produtos SaaS',
    description: 'Crio produtos digitais como o PapinhIA, aproximando tecnologia de necessidades do dia a dia.',
    icon: Blocks,
  },
];

export const SolutionsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rows = sectionRef.current?.querySelectorAll<HTMLElement>('.service-row');
    if (!rows?.length) return;

    gsap.fromTo(rows, { autoAlpha: 0, y: 14 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 72%', once: true },
    });
  }, { scope: sectionRef });

  return (
  <section id="solucoes" ref={sectionRef} className="border-t border-brand-blue-gray px-4 py-20 sm:px-8 sm:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div className="max-w-xl lg:sticky lg:top-28 lg:self-start">
          <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-cobalt">O que eu faço</p>
          <h2 className="max-w-xl text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Escolha o próximo passo.</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-brand-muted">
            Da tarefa que se repete ao produto que ainda não existe: a solução começa pelo que precisa funcionar melhor.
          </p>
        </div>
      <div className="border-t border-brand-blue-gray">
        {services.map(({ id, eyebrow, title, description, icon: Icon }, index) => (
          <article id={id} key={id} className="service-row group border-b border-brand-blue-gray">
            <a
              href="#contato"
              aria-label={`Conversar sobre ${title.toLowerCase()}`}
              className="grid min-h-[7.5rem] grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-5 text-brand-ink sm:min-h-[8.5rem] sm:grid-cols-[3.5rem_1fr_auto] sm:gap-6"
            >
              <span className="font-mono text-xs tracking-wider text-brand-muted">0{index + 1}</span>
              <span className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-brand-cobalt transition-colors duration-200 group-hover:bg-brand-cobalt group-hover:text-white sm:size-12">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-brand-muted">{eyebrow}</span>
                  <span className="mt-1 block text-lg font-semibold leading-tight tracking-[-0.03em] sm:text-2xl">{title}</span>
                  <span className="mt-1.5 block max-w-lg text-[15px] leading-6 text-brand-muted">{description}</span>
                </span>
              </span>
              <ArrowRight aria-hidden="true" className="size-5 text-brand-cobalt transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </article>
        ))}
      </div>
    </div>
    </div>
  </section>
  );
};
