import { Layout } from '@/layouts/Layout';
import { HeroSection } from '@/sections/HeroSection';
import { SolutionsSection } from '@/sections/SolutionsSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { ProcessSection } from '@/sections/ProcessSection';
import { AboutSection } from '@/sections/AboutSection';
import { FAQSection } from '@/sections/FAQSection';
import { CTAContactSection } from '@/sections/CTAContactSection';

export const App = () => (
  <Layout>
    <HeroSection />
    <SolutionsSection />
    <ProjectsSection />
    <ProcessSection />
    <AboutSection />
    <FAQSection />
    <CTAContactSection />
  </Layout>
);

export default App;
