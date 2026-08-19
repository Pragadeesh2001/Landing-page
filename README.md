# Medicare — Healthcare Landing Page

A pixel-perfect, fully responsive recreation of the **Medicare** healthcare landing page, built with React, Vite, Tailwind CSS and Framer Motion. It ships with dark/light mode, scroll-reveal animations, smooth scrolling, and an accessibility-first, component-driven architecture.

![Tech](https://img.shields.io/badge/React-18-61dafb) ![Vite](https://img.shields.io/badge/Vite-6-646cff) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0080) ![pnpm](https://img.shields.io/badge/pnpm-10-f69220)

---

## ✨ Features

- **Pixel-perfect UI** — recreates every section of the reference design: hero, benefits/features, trusted-by logos, consultants, additional medical features, CTA, and footer.
- **Fully responsive** — mobile, tablet and desktop layouts using a fluid, mobile-first grid.
- **Dark / Light mode** — defaults to light to match the reference design, with a toggle that persists the choice in `localStorage`.
- **Framer Motion animations** — scroll-reveal, floating hero UI cards, animated chart bars, and micro-interactions on buttons.
- **Smooth scrolling** — anchor navigation scrolls smoothly to each section.
- **Accessibility** — semantic HTML5 landmarks, skip-to-content link, labeled form controls, `aria-*` attributes, visible focus rings, and full `prefers-reduced-motion` support.
- **Performance** — code-split vendor chunks, lazy-loaded imagery, and a high-`fetchpriority` LCP image for strong Lighthouse scores.
- **No heavy dependencies** — only React, Framer Motion, and `lucide-react` icons. All mockups (phone, chat, dashboard chart, map) are hand-built with SVG/CSS — no image assets required.

---

## 🛠 Tech Stack

| Concern        | Choice                          |
| -------------- | ------------------------------- |
| Framework      | React 18 (functional components + hooks) |
| Build tool     | Vite 6                          |
| Package manager| pnpm                            |
| Styling        | Tailwind CSS 3                   |
| Animation      | Framer Motion 11                |
| Icons          | lucide-react                    |
| Deployment     | Cloudflare Workers              |

> React Router was intentionally **not** included — the design is a single-page site with in-page anchor navigation, so a router would be an unnecessary dependency.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** and **[pnpm](https://pnpm.io) 9+** (this project uses pnpm as its package manager)

> Don't have pnpm? Enable it with Corepack (bundled with Node): `corepack enable pnpm`

### Installation

```bash
# 1. Install dependencies
pnpm install

# 2. Start the dev server (http://localhost:5173)
pnpm dev

# 3. Create a production build (outputs to /dist)
pnpm build

# 4. Preview the production build locally
pnpm preview
```

---

## 📁 Project Structure

```
src/
├── main.jsx                 # App entry, wraps <App/> in ThemeProvider
├── App.jsx                  # Page composition (all sections)
├── index.css                # Tailwind layers + base/global styles
├── context/
│   └── ThemeContext.jsx     # Dark/light theme provider + useTheme hook
├── data/
│   ├── navigation.js        # Nav links + footer columns
│   └── content.js           # Feature, consultant & logo content
└── components/
    ├── common/              # Reusable primitives
    │   ├── Button.jsx        # Polymorphic, animated button
    │   ├── IconBadge.jsx
    │   ├── Logo.jsx
    │   ├── Reveal.jsx        # Scroll-reveal wrapper + motion variants
    │   ├── ScrollToTop.jsx
    │   ├── SectionHeading.jsx
    │   └── ThemeToggle.jsx
    ├── layout/
    │   ├── Navbar.jsx        # Sticky nav w/ mobile menu
    │   └── Footer.jsx
    ├── sections/            # One component per page section
    │   ├── Hero.jsx
    │   ├── Features.jsx
    │   ├── TrustedBy.jsx
    │   ├── Consultants.jsx
    │   ├── AdditionalFeatures.jsx
    │   └── CTA.jsx
    └── ui/                  # Self-contained visual mockups
        ├── PhoneMockup.jsx
        ├── ChatMockup.jsx
        ├── DashboardMockup.jsx
        └── MapCard.jsx
```

**Design principles**

- **Reusable components** — `Button`, `SectionHeading`, `IconBadge`, and `Reveal` are used throughout instead of duplicated markup.
- **Data-driven** — section content lives in `src/data/`, so copy can be updated without touching markup.
- **Separation of concerns** — layout, sections, primitives, and UI mockups are cleanly separated.

---

## 🎨 Theming

Colors, gradients, shadows and fonts are centralized in [`tailwind.config.js`](./tailwind.config.js):

- `brand` — the purple brand scale (50–900)
- `blush` — the soft pink used in the hero gradient
- `ink` — near-black text / dark surfaces

Dark mode uses Tailwind's `class` strategy, toggled on `<html>` by `ThemeContext`.

---

## ☁️ Deployment (Cloudflare)

This app is a static SPA. It deploys to **Cloudflare Workers** (static assets) from a Git-connected project.

### Cloudflare Workers (Git integration)

1. Push this repo to GitHub.
2. In the Cloudflare dashboard connect the repository with:
   - **Framework:** `Vite`
   - **Build command:** `pnpm run build`
   - **Output directory:** `dist`
3. Deploy. Cloudflare detects `pnpm-lock.yaml`, installs with pnpm, builds with Vite 6+, and serves the assets on a `*.workers.dev` URL.

> **SPA routing** is handled by the Worker's `assets.not_found_handling: "single-page-application"`
> setting (added by Cloudflare's Vite auto-configuration), so no `_redirects` file is needed —
> and in fact a `/* /index.html 200` rule is rejected by the Workers asset engine as an infinite loop.

> **Requires Vite ≥ 6** — Cloudflare's Vite auto-configuration cannot configure older Vite versions.

### Cloudflare Pages (alternative)

The build also works on Pages — set build command `pnpm run build` and output directory `dist`.

---

## ♿ Accessibility & Performance Notes

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Keyboard-navigable with a visible focus ring and a skip-to-content link.
- All interactive controls have accessible names (`aria-label` / associated `<label>`).
- `prefers-reduced-motion` disables animations for users who request it.
- Images use explicit `width`/`height` to avoid layout shift; below-the-fold images are `loading="lazy"`, and the hero image is prioritized for a fast LCP.
- Vendor code is split (`framer-motion`, `lucide-react`) for better caching.

---

