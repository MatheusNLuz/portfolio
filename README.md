# Software House Premium — Plataforma Institucional & High-Converting Product

> **Sistemas inteligentes para empresas que querem crescer.**
> Desenvolvimento de sistemas personalizados, sites profissionais e automações que economizam tempo e aumentam produtividade.

---

## 🎯 Missão & Filosofia CRO

Este projeto é um produto comercial de altíssimo nível projetado com foco em **Conversion Rate Optimization (CRO)**, autoridade institucional e alto valor percebido (ticket médio de projetos R$ 20.000+).

Cada decisão de UX, UI, animação 3D e arquitetura foi planejada para transmitir segurança enterprise, maturidade técnica e conduzir o visitante ao objetivo principal: **Solicitar um Orçamento via Wizard Interativo e WhatsApp**.

---

## 🚀 Tecnologias Obrigatórias (Stack Atualizada)

- **Core:** React 19+ | TypeScript 5+ | Vite 7+
- **Styling:** Tailwind CSS v4+ (CSS Variables, `@theme` nativo, sem utilitários legados)
- **Roteamento:** React Router 7+
- **Animações & Motion:** GSAP 3+ (ScrollTrigger, Timelines, Context, MatchMedia) + Lenis Smooth Scroll
- **Gráficos 3D:** React Three Fiber + `@react-three/drei` (Cartão executivo de vidro interativo)
- **Ícones & UI:** Lucide React + `clsx` + `tailwind-merge`
- **SEO & Head Management:** React Helmet Async (OpenGraph, JSON-LD, Twitter Cards, Schema.org)
- **Qualidade de Código:** ESLint + Prettier + Husky + lint-staged

### 🚫 Proibições Estritas
- CRA (Create React App)
- JavaScript sem TypeScript (strict mode obrigatório)
- Styled Components / Bootstrap / Material UI / jQuery / Framer Motion / CSS Modules
- APIs depreciadas ou bibliotecas legadas

---

## 📂 Arquitetura de Pastas

```
portfolio/
├── .agents/                    # Skills do ecossistema de agentes IA
│   └── skills/                 # Skills ativadas (gsap, 3d, tailwind4, motion, seo)
├── docs/                       # Documentação técnica e guia de skills
│   ├── SKILLS_GUIDE.md         # Mapeamento automático de acionamento de skills para IA
│   └── ARCHITECTURE.md         # Diretrizes de arquitetura Clean Code & SOLID
├── public/                     # Assets estáticos (favicon, manifest, sitemap, robots)
├── src/
│   ├── app/                    # Entrypoint, Router e Providers da aplicação
│   │   ├── App.tsx
│   │   ├── router.tsx
│   │   └── main.tsx
│   ├── assets/                 # SVGs, texturas 3D e recursos gráficos
│   ├── components/             # Componentes reusáveis de UI e Layout
│   │   ├── ui/                 # Buttons, Cards, GlassContainer, Badges
│   │   ├── layout/             # Navbar dinâmica, Footer institucional
│   │   └── seo/                # Componente SEOHead com JSON-LD
│   ├── constants/              # Dados estáticos (cases, serviços, perguntas do wizard)
│   ├── features/               # Módulos complexos isolados
│   │   ├── hero-3d/            # Cena R3F (Cartão executivo 3D com rotação 180°)
│   │   └── wizard/             # Wizard CTA interativo em tela cheia com calculadora
│   ├── hooks/                  # Custom hooks (GSAP, Lenis, Mouse position, State)
│   ├── layouts/                # Layouts base das páginas
│   ├── providers/              # React Providers (HelmetProvider, LenisProvider)
│   ├── sections/               # Seções da Landing Page
│   │   ├── HeroSection.tsx
│   │   ├── ProblemsSection.tsx
│   │   ├── SolutionsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── DifferentialsSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── CTAWizardSection.tsx
│   ├── styles/                 # Tailwind CSS 4 Design Tokens & Custom CSS
│   │   └── index.css
│   ├── types/                  # Definições estritas de TypeScript
│   └── utils/                  # Utilitários (Formatters, WhatsApp URL encoder, GSAP helpers)
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions para Deploy no GitHub Pages
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🌐 Hospedagem & GitHub Pages

O projeto é compilado estaticamente para execução no **GitHub Pages**:
- Sem backend Node.js.
- Sem banco de dados.
- Configuração estática otimizada no `vite.config.ts` com `base`.
- Pipeline automatizada no `.github/workflows/deploy.yml`.

---

## 🛠️ Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento local (Vite)
npm run dev

# Validar TypeScript e Linting
npm run lint

# Formatar código
npm run format

# Gerar bundle estático de produção
npm run build

# Visualizar a compilação localmente
npm run preview
```
