import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FooterSignature } from '@/components/layout/FooterSignature';
import { SEOHead } from '@/components/seo/SEOHead';
import { LenisProvider } from '@/providers/LenisProvider';
import { IntroTransition } from '@/components/ui/IntroTransition';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LenisProvider>
      <SEOHead />
      <div className="min-h-screen bg-brand-paper text-brand-ink flex flex-col font-sans selection:bg-brand-cobalt/20 selection:text-brand-ink">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-brand-ink focus:shadow-lg"
        >
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="conteudo" tabIndex={-1} className="flex-grow">{children}</main>
        <Footer />
        <FooterSignature />
      </div>
      <IntroTransition />
    </LenisProvider>
  );
};
