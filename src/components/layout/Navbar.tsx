import React, { useState } from 'react';
import { COMPANY } from '@/constants/company';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Logo } from '@/components/ui/Logo';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Automação', href: '#automacao' },
    { label: 'Sistemas', href: '#sistemas' },
    { label: 'SaaS', href: '#saas' },
    { label: 'Sobre', href: '#sobre' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-ink/10 bg-brand-paper/95 px-4 py-3 backdrop-blur-md sm:px-8">
      <div className="mx-auto flex min-h-12 max-w-7xl items-center justify-between gap-4">
        <a href="#inicio" className="group inline-flex min-h-11 items-center gap-2.5 rounded-md text-brand-ink focus-visible:outline-offset-4">
          <Logo className="h-9 w-9 transition-transform duration-200 group-hover:scale-[1.04]" />
          <span className="flex flex-col">
            <span className="font-display text-base font-bold leading-none tracking-tight sm:text-lg">
              {COMPANY.name}
            </span>
            <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-brand-muted">
              Estúdio de tecnologia
            </span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-brand-muted transition-colors duration-200 hover:text-brand-cobalt focus-visible:text-brand-cobalt"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden min-h-11 items-center justify-center gap-2 rounded-md bg-brand-cobalt px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1c43b4] focus-visible:outline-offset-4 lg:inline-flex"
        >
          Conversar <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-blue-gray text-brand-ink transition-colors hover:border-brand-cobalt hover:text-brand-cobalt focus-visible:outline-offset-4 lg:hidden"
        >
          {isMobileMenuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="mx-auto mt-3 max-w-7xl border-t border-brand-blue-gray py-3 lg:hidden">
          <nav aria-label="Navegação móvel" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex min-h-11 items-center rounded-md px-3 text-base font-medium text-brand-ink transition-colors hover:bg-white hover:text-brand-cobalt focus-visible:text-brand-cobalt"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn('mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand-cobalt px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1c43b4]')}
            >
              Conversar <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
