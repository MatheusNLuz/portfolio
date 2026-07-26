# AGENTS & SKILLS AUTOMATION RULES

This file defines the system rules for AI Agents (Antigravity, Claude, AGY CLI, Cursor, etc.) working inside this repository.

## 🎯 Mandatory Execution Pipeline

Before editing or creating any file in `src/`, the agent MUST:

1. **Check `docs/SKILLS_GUIDE.md`** to locate the required skill for the component/feature area.
2. **Read the corresponding `SKILL.md` file** in `.agents/skills/` using `view_file` (e.g. `.agents/skills/frontend-design/SKILL.md`, `.agents/skills/gsap-scrolltrigger/SKILL.md`, `.agents/skills/improve-animations/SKILL.md`).
3. **Follow the skill instructions strictly**:
   - For **Hero / 3D Canvas**: Use `vercel-react-best-practices` (lazy loading) + `frontend-design`.
   - For **Sections & Reveals**: Use `gsap-scrolltrigger` + `gsap-performance`.
   - For **Buttons & Micro-interactions**: Use `improve-animations` (smooth Bezier curves, hover physics).
   - For **Wizard CTA**: Use `frontend-design` + `web-design-guidelines` (high CRO, full keyboard navigation).
   - For **SEO & Head**: Use `seo` (`SEOHead.tsx`, JSON-LD schemas).
4. **Verify**: Ensure zero TypeScript errors and successful `npm run build`.
