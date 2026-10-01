import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COMPANY } from '@/constants/company';
import { ProjectBrief } from '@/features/contact/ProjectBrief';

export const CTAContactSection: React.FC = () => (
  <section id="contato" className="border-t border-brand-blue-gray px-4 py-20 sm:px-8 sm:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="relative overflow-hidden rounded-3xl bg-brand-ink p-6 text-white sm:p-10 lg:p-14">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full border border-white/10" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-5 -top-12 size-52 rounded-full border border-white/10" />
        <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold tracking-[0.16em] text-white/65"><span aria-hidden="true" className="size-2 rounded-full bg-brand-signal" /> UMA CONVERSA PODE SER O COMEÇO</span>
            <h2 className="max-w-lg text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-5xl">O que poderia fluir melhor por aí?</h2>
            <p className="max-w-md text-base leading-7 text-white/70">
              Escolha um tema e, se quiser, conte um pouco mais. Sem formulário longo — a mensagem vai para você revisar no WhatsApp.
            </p>
            <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white/80 transition-[gap,color] duration-200 hover:gap-3 hover:text-white focus-visible:text-white">
              Ou fale direto pelo WhatsApp <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div className="rounded-2xl bg-brand-paper p-5 text-brand-ink sm:p-7">
            <ProjectBrief />
          </div>
        </div>
      </div>
    </div>
  </section>
);
