# Matheus Luz Rebrand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Matheus Luz portfolio around a clear three-front technology brand, an ML monogram, intentional motion, and a no-pressure WhatsApp contact path.

**Architecture:** Keep the current React/Vite single-page app and component layout. Replace the visual tokens and presentation sections in place, add a semantic SVG workflow diagram, retain the existing project data and WhatsApp integration, and remove the estimator-oriented wizard state/components. Use installed GSAP and ScrollTrigger through `useGSAP`; do not add dependencies.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS 4, GSAP, `@gsap/react`, ScrollTrigger, Lucide.

**Spec:** `docs/superpowers/specs/2026-09-28-matheus-luz-rebrand-design.md`

## Global Constraints

- Work only on `codex/rebrand-matheus-luz`, never on `master`.
- Keep brand tokens at ink `#17212B`, paper `#F5F7F8`, cobalt `#2454D6`, signal orange `#E77A42`, and blue-gray `#D8E1E7`.
- Use Space Grotesk for display, Inter for body, and JetBrains Mono for process labels.
- Keep all three service fronts under Matheus Luz and use the approved hero message: “Tecnologia para sua operação fluir.”
- Do not invent customer proof, performance numbers, prices, guarantees, or delivery promises.
- Do not ask for revenue, budget/investment range, company size, employee count, or deadline in the contact flow.
- Do not add packages, backend services, analytics, or deployment changes.
- Respect keyboard access, visible focus, touch input, responsive widths, and `prefers-reduced-motion`.
- Run `npm run build` before completion; do not add or run automated tests for this task.

## Review Focus

- At 375 px, navigation, cards, diagram, and WhatsApp action must fit without horizontal scrolling.
- With reduced motion enabled, all text and workflow steps must be visible without animation.
- A contact brief with no optional name or description must still open WhatsApp with a valid, concise message.
- Portuguese text with accents and line breaks must be encoded correctly in the WhatsApp URL.
- Every navigation anchor and service CTA must target a section present in the rendered page.

---

### Task 1: Brand foundation and shared shell

**Files:**
- Modify: `src/styles/index.css`
- Modify: `src/constants/company.ts`
- Modify: `src/components/ui/Logo.tsx`
- Modify: `src/components/layout/Navbar.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/layouts/Layout.tsx`
- Modify: `src/components/seo/SEOHead.tsx`

**Interfaces:**
- Preserve `Logo({ className?: string })` as the shared mark API; its SVG must remain legible at 24–32 px.
- Preserve the existing `COMPANY` export and current working email, WhatsApp, site, and social URLs.
- Keep `Layout` as the shared owner of the site shell and SEO metadata.

- [ ] Replace the old aurora/glass palette and heading defaults with the spec's five semantic color tokens and typography roles.
- [ ] Draw the ML mark as a simple, recognizable inline SVG with the cobalt workflow stroke and orange endpoint; keep the full “Matheus Luz” wordmark as normal text in the shell.
- [ ] Rework desktop and mobile navigation to the approved anchors and conversation CTA; preserve keyboard operation and close the mobile menu after navigation.
- [ ] Align footer colors, wordmark, navigation, and contact links with the new system.
- [ ] Update the company copy and SEO title, description, Open Graph metadata, and structured data to the approved personal-technology positioning, using only known facts.
- [ ] Inspect the shell at 375 px and 1440 px and confirm all links have visible focus and 44 px touch targets.

### Task 2: Hero, service fronts, featured product, and page order

**Files:**
- Modify: `src/app/App.tsx`
- Modify: `src/sections/HeroSection.tsx`
- Create: `src/components/ui/WorkflowDiagram.tsx`
- Modify: `src/sections/SolutionsSection.tsx`
- Modify: `src/sections/ProjectsSection.tsx`
- Modify: `src/constants/projects.ts` only if a displayed metric is template/example content rather than a confirmed fact

**Interfaces:**
- `WorkflowDiagram` is a presentational component with no required props; its accessible labels stay in the DOM when the SVG is static.
- Preserve the existing `PROJECTS` data contract and PapinhIA image path unless the code confirms a stale value.
- Hero and three service cards expose the `#automacao`, `#sistemas`, `#saas`, and `#projetos` anchors used by navigation and CTAs.

- [ ] Replace the 3D business-card hero and claims with the approved headline, supporting copy, “Me conte o que precisa” CTA, and PapinhIA case link.
- [ ] Build the workflow diagram in SVG/CSS with clear labels for Pedido, Organização, Automação, and Tempo de Volta; keep it understandable without animation.
- [ ] Present automation, custom software, and SaaS as three coordinated cards with distinct anchors and plain-language descriptions.
- [ ] Feature PapinhIA using only its existing product description, tags, and media; remove any sample metrics that imply unverified outcomes.
- [ ] Render page sections without the arbitrary 1.5-second `showRest` timer; keep code splitting only where it improves loading without delaying visible content.
- [ ] Confirm every hero, nav, and card link resolves to the rendered section at 375 px and 1440 px.

### Task 3: Supporting sections and consistent brand narrative

**Files:**
- Modify: `src/sections/ProcessSection.tsx`
- Modify: `src/sections/AboutSection.tsx`
- Modify: `src/sections/FAQSection.tsx`

**Interfaces:**
- Preserve each section's named React export so `App` can compose the page consistently.
- Keep claims grounded in current project copy; when a support, guarantee, ownership, or schedule claim cannot be confirmed from current content, phrase it as a question to discuss rather than a commitment.

- [ ] Rewrite the process section around discovery, building, and delivery using concise copy and a visual sequence that matches the workflow motif.
- [ ] Rework the About section as a personal introduction with direct contact and the known PapinhIA product-building experience.
- [ ] Rebuild the FAQ around how a project starts, what can be discussed, and how custom work differs from the SaaS product; remove premature budget/estimate messaging and unverified promises.
- [ ] Check the content hierarchy, motion-free reading order, and mobile spacing.

### Task 4: Low-friction WhatsApp contact

**Files:**
- Rename or replace: `src/sections/CTAWizardSection.tsx` → `src/sections/CTAContactSection.tsx`
- Create: `src/features/contact/ProjectBrief.tsx`
- Create: `src/types/contact.ts`
- Modify: `src/utils/whatsapp.ts`
- Modify: `src/app/App.tsx`
- Delete after all imports are removed: `src/features/wizard/WizardContainer.tsx`, `src/features/wizard/WizardStep.tsx`, `src/features/wizard/WizardSummary.tsx`, `src/features/wizard/useWizardStore.ts`, `src/constants/wizardQuestions.ts`, and `src/types/wizard.ts`
- Delete `src/components/ui/ProgressBar.tsx` only if repository-wide search confirms no other consumers.

**Interfaces:**
- Define `ProjectBriefData` in `src/types/contact.ts` with `interest: 'automation' | 'custom-software' | 'saas'`, optional `description?: string`, and optional `name?: string`.
- `buildWhatsAppUrl(data: ProjectBriefData): string` keeps the existing configured WhatsApp phone and URL-encodes a concise Portuguese message.
- `CTAContactSection` becomes the final page section at `#contato` and contains the CTA form.

- [ ] Replace the long questionnaire with one compact brief: choose an area, optionally describe the need, and optionally provide a name.
- [ ] Remove the automatic complexity/time/budget calculator and quote-style summary; remove all financial and company-size fields from the data model and message builder.
- [ ] Keep visible field labels, keyboard-accessible choices, clear validation, and a single WhatsApp action.
- [ ] Verify that an empty optional name/description still creates a valid URL; verify accented Portuguese and line breaks encode correctly.
- [ ] Search the repository for stale budget, investment range, employee-count, revenue, old wizard, and estimator references; remove obsolete contact-flow copy without deleting unrelated code.

### Task 5: Motion, accessibility, and final visual review

**Files:**
- Modify: `src/sections/HeroSection.tsx`
- Modify: `src/components/ui/WorkflowDiagram.tsx`
- Modify: `src/components/ui/Logo.tsx`
- Modify: `src/sections/SolutionsSection.tsx`
- Modify: `src/sections/ProcessSection.tsx`
- Modify: `src/styles/index.css`
- Modify any section found in review to make content visible and accessible when motion is reduced

**Interfaces:**
- Use existing `gsap` from `src/utils/gsap.ts` and `useGSAP` from `@gsap/react`; do not introduce a new animation framework.
- Keep each timeline/ScrollTrigger scoped to its component and clean it up on unmount.

- [ ] Animate the hero text in a short sequence, draw the workflow path once, and move the orange signal across its steps without blocking reading or CTA interaction.
- [ ] Draw the ML mark once if it remains legible at rest; otherwise keep the mark static and animate only the hero workflow.
- [ ] Reveal service/process content with a restrained ScrollTrigger stagger and use transform/opacity for feedback.
- [ ] Add a `prefers-reduced-motion` path that immediately presents final visible content and disables path travel/staggers; preserve focus and hover feedback without movement.
- [ ] Manually inspect 375, 768, 1024, and 1440 px layouts, plus reduced-motion and keyboard navigation.
- [ ] Run `npm run build` and fix TypeScript/build errors; record the final output.
