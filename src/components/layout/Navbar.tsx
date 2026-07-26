import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { COMPANY } from '@/constants/company';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Logo } from '@/components/ui/Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Processo', href: '#processo' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out py-4 px-4 sm:px-8',
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="text-slate-800 transition-transform group-hover:scale-105">
            <Logo className="w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-lg text-slate-900 leading-none tracking-tight">
              {COMPANY.name}
            </span>
            <span className="text-[10px] text-slate-500 tracking-wider uppercase font-semibold">
              Software Engineer & Designer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className={cn('hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full', isScrolled ? 'bg-slate-100/50' : 'bg-white/50 backdrop-blur-sm border border-slate-200')}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-blue-200/50 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="primary"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={() => {
              const ctaSection = document.getElementById('orcamento');
              ctaSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Solicitar Orçamento
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-xl"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-200">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={() => {
                setIsMobileMenuOpen(false);
                const ctaSection = document.getElementById('orcamento');
                ctaSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
