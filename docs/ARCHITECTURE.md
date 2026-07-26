# 🏛️ Arquitetura de Software & Padrões do Projeto

Este documento detalha os princípios de arquitetura, organização de pastas, fluxo de dados e regras de compilação estática adotadas nesta plataforma.

---

## 🎯 Princípios Norteadores

1. **Clean Code & Single Responsibility (SRP):** Cada arquivo ou componente deve possuir uma única responsabilidade clara e ter menos de 250-300 linhas de código.
2. **Separation of Concerns (SoC):** Descouplar completamente a lógica de negócios e estado UI (hooks customizados em `src/hooks/` e `src/features/`) dos elementos de renderização visual em `src/components/` e `src/sections/`.
3. **DRY & KISS:** Reutilizar componentes base em `src/components/ui/` (Button, Card, GlassContainer, Badge, ProgressBar). Evitar abstrações prematuras ou complicadas.
4. **Desempenho 100/100:** Carregamento dinâmico (Code Splitting) para partes pesadas como React Three Fiber via `React.lazy()` + `Suspense`.

---

## 📂 Estrutura de Pastas e Suas Responsabilidades

- **`src/app/`**: Inicialização do React, roteador (`router.tsx`), providers principais (`App.tsx` e `main.tsx`).
- **`src/assets/`**: Imagens otimizadas, favicons, texturas e ícones locais.
- **`src/components/ui/`**: Componentes atômicos e primitivos do Design System (Button, Card, GlassContainer, Badge, Modal, Input).
- **`src/components/layout/`**: Estrutura global da aplicação (Navbar estática/dinâmica com scroll e Footer).
- **`src/components/seo/`**: Componente de SEO dinâmico (`SEOHead.tsx`) utilizando `react-helmet-async`.
- **`src/constants/`**: Informações imutáveis da empresa, cases de sucesso, catálogo de soluções e lista de perguntas do Wizard CTA.
- **`src/features/hero-3d/`**: Módulo isolado contendo a cena 3D R3F, física dos materiais (`MeshPhysicalMaterial`), iluminação studio e animação interativa do cartão executivo.
- **`src/features/wizard/`**: Módulo isolado contendo o gerenciador de estado do Wizard (`useWizardStore.ts`), passos da pesquisa, algoritmo de calculo de estimativa e resumo pré-WhatsApp.
- **`src/hooks/`**: Custom hooks reusáveis para GSAP ScrollTrigger, Lenis smooth scroll, dimensões da tela e posição do cursor.
- **`src/layouts/`**: Invólucros de página com layout padrão.
- **`src/providers/`**: Context Providers do React (`HelmetProvider`, `LenisProvider`).
- **`src/sections/`**: Seções individuais da Landing Page (Hero, Problems, Solutions, Process, Projects, Differentials, TechStack, About, FAQ, CTAWizard).
- **`src/styles/`**: Design tokens e CSS global com Tailwind v4 (`index.css`).
- **`src/types/`**: Interfaces e discriminated unions do TypeScript.
- **`src/utils/`**: Funções utilitárias puras (WhatsApp URL generator, animações GSAP de suporte, `cn()` helper).

---

## 🔄 Fluxo de Dados e Estado

```
[ Usuário Interage com o Wizard ]
               │
               ▼
[ State Store (useWizardStore / React Context) ]
               │
               ▼
[ Algoritmo de Estimativa (Prazo e Faixa de Investimento) ]
               │
               ▼
[ Resumo Executivo na Tela ]
               │
               ▼
[ whatsapp.ts -> encodeURIComponent(Mensagem) ]
               │
               ▼
[ Redirecionamento Direto para https://wa.me/55... ]
```

---

## ⚙️ Regras de Compilação Estática (GitHub Pages)

- **Sem Server-Side Rendering (SSR) runtime ou Node server.**
- Roteamento via `react-router-dom` com suporte a `HashRouter` ou `BrowserRouter` com fallback `404.html` para GitHub Pages.
- `vite.config.ts` configurado com `base: './'` ou `/portfolio/` garantindo links de assets estáticos relativos válidos.
