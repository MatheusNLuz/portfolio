import React from 'react';
import { ArrowUpRight, Braces, Workflow } from 'lucide-react';
import { COMPANY } from '@/constants/company';
import { Logo } from '@/components/ui/Logo';

export const AboutSection: React.FC = () => (
  <section id="sobre" className="border-t border-brand-blue-gray px-4 py-20 sm:px-8 sm:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="space-y-6 lg:col-span-7">
        <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold tracking-[0.16em] text-brand-cobalt"><span aria-hidden="true" className="size-2 rounded-full bg-brand-signal" /> POR TRÁS DA TECNOLOGIA</span>
        <h2 className="max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-5xl">
          Sou Matheus. Gosto de transformar problemas reais em soluções digitais.
        </h2>
        <p className="max-w-2xl text-base leading-7 text-brand-muted">
          Sou engenheiro de software e criador do PapinhIA. Neste espaço, compartilho meu trabalho
          com automação, sistemas sob medida e produtos digitais — sempre partindo do que precisa
          funcionar melhor no dia a dia.
        </p>
        <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-cobalt transition-[gap,color] duration-200 hover:gap-3 hover:text-brand-ink focus-visible:text-brand-ink">
          Vamos conversar <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </div>

      <aside aria-label="Frentes de trabalho" className="relative overflow-hidden rounded-2xl border border-brand-blue-gray bg-white p-6 sm:p-8 lg:col-span-5">
        <div aria-hidden="true" className="absolute -right-12 -top-12 size-40 rounded-full border border-brand-blue-gray" />
        <div aria-hidden="true" className="absolute -right-4 -top-4 size-24 rounded-full border border-brand-blue-gray" />
        <div className="relative flex items-center gap-4 border-b border-brand-blue-gray pb-6">
          <div className="grid size-14 place-items-center rounded-xl bg-brand-paper"><Logo className="size-9" /></div>
          <div>
            <p className="font-display text-lg font-semibold">{COMPANY.name}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-brand-muted">Engenharia de software</p>
          </div>
        </div>
        <ul className="relative mt-5 space-y-1">
          <li className="flex items-center gap-3 rounded-lg px-2 py-3 text-sm text-brand-ink"><Workflow aria-hidden="true" className="size-[18px] text-brand-cobalt" /> Automações e integrações</li>
          <li className="flex items-center gap-3 rounded-lg px-2 py-3 text-sm text-brand-ink"><Braces aria-hidden="true" className="size-[18px] text-brand-cobalt" /> Sistemas sob medida</li>
          <li className="flex items-center gap-3 rounded-lg px-2 py-3 text-sm text-brand-ink"><span aria-hidden="true" className="grid size-[18px] place-items-center rounded-full bg-brand-signal font-mono text-[9px] font-bold text-white">P</span> Produto próprio: PapinhIA</li>
        </ul>
      </aside>
    </div>
  </section>
);
