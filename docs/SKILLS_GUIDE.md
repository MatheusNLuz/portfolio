# 🧠 Guia de Integração de Skills para Agentes IA & Engenheiros

Este documento define o mapeamento automático de gatilhos, escopos e contextos em que cada **Agent Skill** instalada no diretório `.agents/skills/` deve ser obrigatoriamente consultada e executada durante o desenvolvimento do projeto.

---

## 📋 Tabela de Mapeamento de Skills

| Skill Name | Diretório | Arquivos / Componentes Alvo | Quando Acionar (Gatilho Automático) |
| :--- | :--- | :--- | :--- |
| **`ui-ux-pro-max`** | `.agents/skills/ui-ux-pro-max/` | `src/components/`, `src/sections/`, `src/styles/` | Sempre que desenhar ou refatorar layouts UI/UX, paletas de cor HSL, tipografia, micro-interações, acessibilidade e componentes premium. |
| **`frontend-design`** | `.agents/skills/frontend-design/` | `src/components/`, `src/sections/`, `src/styles/` | Para criação visual de alto padrão inspirada em Stripe, Linear, Vercel e Raycast. |
| **`improve-animations`** | `.agents/skills/improve-animations/` | `src/hooks/useGSAP.ts`, `src/sections/`, `src/components/ui/` | Durante a auditoria de microinterações, refinamento de hover, transições de estado, easings e físicas de movimento. |
| **`hyperframes-animation`** | `.agents/skills/hyperframes-animation/` | `src/sections/`, `src/features/` | Para animações baseadas em keyframes e motion graphics de alta fidelidade. |
| **`motion-graphics`** | `.agents/skills/motion-graphics/` | `src/sections/`, `src/components/` | Para criação de motion graphics, efeitos visuais vetoriais e animações de produto. |
| **`remotion-best-practices`** | `.agents/skills/remotion-best-practices/` | `src/features/`, `src/assets/` | Para criação de vídeos interativos, canvas procedurais e animações programáticas baseadas em frames. |
| **`gsap-scrolltrigger`** | `.agents/skills/gsap-scrolltrigger/` | `src/sections/`, `src/utils/gsap.ts`, `src/hooks/useLenis.ts` | Ao implementar animações de revelação por scroll (Text Reveal, Mask Reveal, Cards no scroll, Progress Bar, Navbar dinâmica). |
| **`gsap-performance`** | `.agents/skills/gsap-performance/` | `src/utils/gsap.ts`, `src/features/hero-3d/`, `src/sections/` | Ao otimizar animações para 60fps, prevenir layout thrashing, configurar `will-change` e batching de renderização. |
| **`vercel-react-best-practices`** | `.agents/skills/vercel-react-best-practices/` | `src/app/`, `src/features/`, `src/hooks/`, `src/components/` | Ao escrever componentes React 19, custom hooks, lazy loading com `React.lazy()` + `Suspense` e otimizar bundle size. |
| **`seo`** | `.agents/skills/seo/` | `src/components/seo/`, `public/`, `src/sections/` | Ao configurar meta tags via React Helmet Async, dados estruturados JSON-LD (LocalBusiness, ProfessionalService), OpenGraph e sitemap.xml. |
| **`web-design-guidelines`** | `.agents/skills/web-design-guidelines/` | `src/components/`, `src/sections/` | Durante a revisão de acessibilidade (WCAG AA), navegação por teclado, atributos `aria-label`, foco visível e responsividade. |
| **`find-skills`** | `.agents/skills/find-skills/` | Todo o projeto | Sempre que surgirem novas necessidades técnicas ou desafios de integração não cobertos pelas skills atuais. |
