import React from 'react';
import { Layout } from '@/layouts/Layout';
import { HeroSection } from '@/sections/HeroSection';

const SolutionsSection = React.lazy(() => import('@/sections/SolutionsSection').then(m => ({ default: m.SolutionsSection })));
const ProcessSection = React.lazy(() => import('@/sections/ProcessSection').then(m => ({ default: m.ProcessSection })));
const ProjectsSection = React.lazy(() => import('@/sections/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const AboutSection = React.lazy(() => import('@/sections/AboutSection').then(m => ({ default: m.AboutSection })));
const FAQSection = React.lazy(() => import('@/sections/FAQSection').then(m => ({ default: m.FAQSection })));
const CTAWizardSection = React.lazy(() => import('@/sections/CTAWizardSection').then(m => ({ default: m.CTAWizardSection })));

export const App: React.FC = () => {
  const [showRest, setShowRest] = React.useState(false);

  React.useEffect(() => {
    // Defer rendering of heavy below-the-fold sections by 1.5s
    // This allows the main thread to be fully dedicated to the Hero GSAP animation first.
    const timer = setTimeout(() => setShowRest(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <HeroSection />
      {showRest ? (
        <React.Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><div className="w-8 h-8 border-2 border-sky-500 border-t-transparent rounded-full animate-spin"></div></div>}>
          <AboutSection />
          <ProjectsSection />
          <SolutionsSection />
          <ProcessSection />
          <FAQSection />
          <CTAWizardSection />
        </React.Suspense>
      ) : null}
    </Layout>
  );
};

export default App;
