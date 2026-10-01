import React from 'react';
import { COMPANY } from '@/constants/company';
import { Github, Linkedin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-blue-gray bg-brand-paper px-4 py-14 sm:px-8">
      <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col items-start gap-4">
          <a href="#inicio" className="group inline-flex min-h-11 items-center gap-2.5 rounded-md text-brand-ink">
            <Logo className="h-9 w-9 transition-transform duration-200 group-hover:scale-[1.04]" />
            <span className="flex flex-col">
              <span className="font-display text-lg font-bold leading-none tracking-tight">
                {COMPANY.name}
              </span>
              <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-brand-muted">Estúdio de tecnologia</span>
            </span>
          </a>
          <p className="max-w-md text-sm leading-relaxed text-brand-muted">
            {COMPANY.subtagline}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={COMPANY.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-blue-gray bg-brand-white text-brand-muted transition-colors hover:border-brand-cobalt hover:text-brand-cobalt"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={COMPANY.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-blue-gray bg-brand-white text-brand-muted transition-colors hover:border-brand-cobalt hover:text-brand-cobalt"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-ink">
            Navegação
          </h4>
          <ul className="space-y-2 text-sm text-brand-muted">
            <li><a href="#automacao" className="inline-flex min-h-11 items-center transition-colors hover:text-brand-cobalt">Automação</a></li>
            <li><a href="#sistemas" className="inline-flex min-h-11 items-center transition-colors hover:text-brand-cobalt">Sistemas</a></li>
            <li><a href="#saas" className="inline-flex min-h-11 items-center transition-colors hover:text-brand-cobalt">SaaS</a></li>
            <li><a href="#sobre" className="inline-flex min-h-11 items-center transition-colors hover:text-brand-cobalt">Sobre</a></li>
            <li><a href="#projetos" className="inline-flex min-h-11 items-center transition-colors hover:text-brand-cobalt">Projeto PapinhIA</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-ink">
            Contato
          </h4>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-12 items-center gap-3 rounded-lg border border-brand-blue-gray bg-brand-white px-4 text-sm font-semibold text-brand-ink transition-[border-color,background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-cobalt hover:bg-brand-cobalt hover:text-white"
          >
            <MessageCircle aria-hidden="true" className="size-4 text-brand-cobalt transition-colors group-hover:text-white" />
            Chamar no WhatsApp
            <ArrowUpRight aria-hidden="true" className="size-4 text-brand-cobalt transition-colors group-hover:text-white" />
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-brand-blue-gray pt-8 text-xs text-brand-muted sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
