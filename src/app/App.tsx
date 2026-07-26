import React from 'react';
import { Layout } from '@/layouts/Layout';
import { HeroSection } from '@/sections/HeroSection';
import { ProblemsSection } from '@/sections/ProblemsSection';
import { SolutionsSection } from '@/sections/SolutionsSection';
import { ProcessSection } from '@/sections/ProcessSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { DifferentialsSection } from '@/sections/DifferentialsSection';
import { AboutSection } from '@/sections/AboutSection';
import { FAQSection } from '@/sections/FAQSection';
import { CTAWizardSection } from '@/sections/CTAWizardSection';

export const App: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <ProcessSection />
      <ProjectsSection />
      <DifferentialsSection />
      <AboutSection />
      <FAQSection />
      <CTAWizardSection />
    </Layout>
  );
};

export default App;
