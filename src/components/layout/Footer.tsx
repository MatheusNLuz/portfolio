import React from 'react';
import { COMPANY } from '@/constants/company';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8fafc] relative pt-16 pb-12 px-4 sm:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <a href="#" className="flex items-center space-x-2 group">
            <div className="text-slate-800 transition-transform group-hover:scale-105">
              <Logo className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg text-slate-900 leading-none tracking-tight">
                {COMPANY.name}
              </span>
            </div>
          </a>
          <p className="text-slate-500 text-sm max-w-md leading-relaxed">
            {COMPANY.subtagline}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={COMPANY.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors shadow-sm"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={COMPANY.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <h4 className="font-display font-semibold text-sm text-slate-900 uppercase tracking-wider">
            Navegação
          </h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <a href="#sobre" className="hover:text-slate-900 transition-colors">
                Sobre Mim
              </a>
            </li>
            <li>
              <a href="#projetos" className="hover:text-slate-900 transition-colors">
                Cases de Sucesso
              </a>
            </li>
            <li>
              <a href="#solucoes" className="hover:text-slate-900 transition-colors">
                Soluções
              </a>
            </li>
            <li>
              <a href="#processo" className="hover:text-slate-900 transition-colors">
                Processo de Desenvolvimento
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-slate-900 transition-colors">
                Perguntas Frequentes
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-3">
          <h4 className="font-display font-semibold text-sm text-slate-900 uppercase tracking-wider">
            Contato Direct
          </h4>
          <div className="space-y-2 text-sm text-slate-600">
            <p>{COMPANY.location}</p>
            <p className="text-xs text-slate-500">{COMPANY.workingHours}</p>
          </div>
          <div className="pt-2">
            <a
              href={`https://wa.me/${COMPANY.whatsappPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-slate-600 transition-colors"
            >
              Conversar via WhatsApp <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
