import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/constants/projects';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/utils/gsap';

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>('.project-card');
    if (!cards?.length) return;

    gsap.fromTo(cards, { autoAlpha: 0, y: 16 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 72%', once: true },
    });
  }, { scope: sectionRef });

  return (
    <section id="projetos" ref={sectionRef} className="border-t border-brand-blue-gray px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-5 sm:mb-14 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-12">
          <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Do PapinhIA ao Curriculy.</h2>
          <p className="max-w-lg text-sm leading-6 text-brand-muted sm:text-base sm:leading-7">
            Dois produtos próprios, em contextos diferentes: introdução alimentar e próximos passos profissionais.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-7 lg:gap-10">
          {PROJECTS.map((project) => (
            <article key={project.id} className="project-card group min-w-0">
              <div className="relative aspect-[1.75] overflow-hidden rounded-2xl bg-[#f5f6fb]">
                <img
                  src={`${import.meta.env.BASE_URL}${project.image?.startsWith('/') ? project.image.slice(1) : project.image}`}
                  alt={`Captura da página inicial do ${project.title}`}
                  width={project.id === 'curriculy' ? 1897 : 1280}
                  height={project.id === 'curriculy' ? 910 : 800}
                  loading="lazy"
                  className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.025] ${project.id === 'curriculy' ? 'object-contain' : 'object-cover'}`}
                />
                <span className="absolute left-4 top-4 rounded-full border border-brand-blue-gray bg-white px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-ink sm:left-5 sm:top-5">
                  {project.category}
                </span>
              </div>

              <div className="pt-5 sm:pt-6">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.15em] text-brand-muted">{project.client}</p>
                <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{project.title}</h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-brand-muted">{project.description}</p>

                <div className="mt-5 border-t border-brand-blue-gray pt-4">
                  <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.14em] text-brand-muted">{project.detailsLabel ?? 'Tecnologias'}</p>
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-md bg-white px-3 py-2 text-xs font-medium text-brand-ink">{tag}</li>
                    ))}
                  </ul>
                </div>

                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-brand-cobalt transition-[gap,color] duration-200 hover:gap-3 hover:text-brand-ink focus-visible:text-brand-ink">
                    Conhecer o Curriculy <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                ) : (
                  <a href="#contato" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-brand-cobalt transition-[gap,color] duration-200 hover:gap-3 hover:text-brand-ink focus-visible:text-brand-ink">
                    Conversar sobre o PapinhIA <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
