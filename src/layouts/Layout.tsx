import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { LenisProvider } from '@/providers/LenisProvider';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LenisProvider>
      <SEOHead />
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-sky-500/30 selection:text-slate-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </LenisProvider>
  );
};
