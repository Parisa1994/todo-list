Todo List (Next.js)
A minimal Next.js app scaffolded for fast front-end development with TypeScript, Tailwind CSS, ESLint, Storybook 9, and testing via Vitest + Playwright.
Tech versions (from the project): Next 15.5.3, React 19.1.0, TypeScript 5 (range), ESLint 9, Storybook 9.1.x, Tailwind 4, Vitest 3.2.x, Playwright 1.55.x.

Features
⚡️ Dev & build with Turbopack (next dev --turbopack, next build --turbopack).
🧩 Storybook 9 for component docs; Vitest addon runs tests against stories in a real browser (Chromium).
🎨 Tailwind CSS v4 via the official PostCSS plugin.
✅ ESLint (flat config) with Next + TypeScript + Storybook rules.

Requirements
Node.js: LTS recommended (Node 20+ works great with Next 15).
Package manager: npm / yarn / pnpm / bun (examples below use npm).

# 1) Install dependencies
npm install
# 2) Run the dev server (Turbopack)
npm run dev
# App will be available at http://localhost:3000
# 3) Build for production (Turbopack)
npm run build
# 4) Start the production server
npm start

"dev": "next dev --turbopack",
"build": "next build --turbopack",
"start": "next start",
"lint": "eslint",
"storybook": "storybook dev -p 6006",
"build-storybook": "storybook build"

# Start Storybook locally (http://localhost:6006)
npm run storybook
# Build static Storybook (outputs to storybook-static/)
npm run build-storybook
Vitest is integrated via the Storybook Vitest addon/plugin; tests can run against stories in Chromium (headless) using Playwright.

Testing
There isn’t a test npm script yet, but Vitest is configured. You can run it with npx:
# Run Vitest in the terminal
npx vitest run
# Or start the interactive UI
npx vites

Notes:
Browser mode (Chromium via Playwright) is enabled by config; ensure Playwright is installed (it’s in devDeps).
If needed, install Playwright browsers: npx playwright install.
# Check code style and rules
npm run lint

Flat config extends next/core-web-vitals and next/typescript, plus eslint-plugin-storybook recommendations. Common build/compiled folders are ignored.
Styling
Tailwind CSS v4 is enabled through @tailwindcss/postcss in postcss.config.mjs.
Use utility classes directly in your components. No extra global config is required for a minimal setup.
TypeScript
Strict mode enabled.
Path alias @/* maps to the repo root for cleaner imports.
Project Structure (suggested)
The repo follows the standard Next.js layout. Typical key files:
next.config.ts – minimal Next config (ready for extension).
tsconfig.json – strict TS setup with Next plugin and @/* alias.
eslint.config.mjs – flat ESLint config (Next + TS + Storybook).
postcss.config.mjs – Tailwind v4 PostCSS plugin.
vitest.config.ts – Vitest + Storybook + Playwright (Chromium, headless).
If you’re using the App Router, your pages/components will live under app/ (e.g., app/page.tsx). If you prefer the Pages Router, use pages/.

Deploy
Build the app (npm run build) and start with npm start on any Node host.
The project is compatible with platforms like Vercel out of the box.
Roadmap (optional)
Add GitHub Actions for CI (lint → build → tests → Storybook static).
Add component stories with controls/docs for all UI states (loading/empty/error).
Add a dedicated test script and coverage reporting.
Introduce basic state management (if the todo list evolves: filters, persistence, etc.).
License
Add a LICENSE file (e.g., MIT) if you intend to open-source the project


