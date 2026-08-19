# Medicare — Healthcare Landing Page

A pixel-perfect, fully responsive recreation of the **Medicare** healthcare landing page, built with React, Vite, Tailwind CSS and Framer Motion. It ships with dark/light mode, scroll-reveal animations, smooth scrolling, and an accessibility-first, component-driven architecture.

![Tech](https://img.shields.io/badge/React-18-61dafb) ![Vite](https://img.shields.io/badge/Vite-5-646cff) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0080)

---

## ✨ Features

- **Pixel-perfect UI** — recreates every section of the reference design: hero, benefits/features, trusted-by logos, consultants, additional medical features, CTA, and footer.
- **Fully responsive** — mobile, tablet and desktop layouts using a fluid, mobile-first grid.
- **Dark / Light mode** — respects the OS `prefers-color-scheme` on first load, with a toggle that persists the choice in `localStorage`.
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
| Build tool     | Vite 5                          |
| Styling        | Tailwind CSS 3                   |
| Animation      | Framer Motion 11                |
| Icons          | lucide-react                    |
| Deployment     | Cloudflare Pages                |

> React Router was intentionally **not** included — the design is a single-page site with in-page anchor navigation, so a router would be an unnecessary dependency.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** and **npm 9+**

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Create a production build (outputs to /dist)
npm run build

# 4. Preview the production build locally
npm run preview
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

## ☁️ Deployment (Cloudflare Pages)

This app is a static SPA and deploys to **Cloudflare Pages** with zero config changes.

### Option A — Dashboard (Git integration)

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository and use these build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare builds and serves the site on a `*.pages.dev` URL.

The included [`public/_redirects`](./public/_redirects) file (`/* /index.html 200`) ensures deep links resolve correctly.

### Option B — Wrangler CLI

```bash
npm run build
npx wrangler pages deploy dist --project-name medicare-landing
```

---

## ♿ Accessibility & Performance Notes

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Keyboard-navigable with a visible focus ring and a skip-to-content link.
- All interactive controls have accessible names (`aria-label` / associated `<label>`).
- `prefers-reduced-motion` disables animations for users who request it.
- Images use explicit `width`/`height` to avoid layout shift; below-the-fold images are `loading="lazy"`, and the hero image is prioritized for a fast LCP.
- Vendor code is split (`framer-motion`, `lucide-react`) for better caching.

---

## 📸 Image Credits

People photography is loaded from [Unsplash](https://unsplash.com) via their CDN for demonstration purposes. Swap the URLs in `src/data/content.js` and `src/components/sections/Hero.jsx` for your own licensed assets in production.

---

## 📄 License

Provided for evaluation/demonstration purposes.
