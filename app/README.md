# SALAD School Website

Production React/Vite website for SALAD School. The app uses static assets from `public/images`, hash-based client routing, Tailwind CSS, Framer Motion animations, and Lenis smooth scrolling.

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS
- Framer Motion
- React Router with `HashRouter`
- Lenis smooth scrolling

## Project Structure

```text
app/
  public/images/          Static image assets used by the site
  src/
    components/
      animations/         Reusable scroll and entrance animation components
      common/             Small shared UI pieces
      layout/             Site-wide layout components
    data/                 Structured page, course, team, FAQ, and content data
    hooks/                Shared React hooks
    pages/                Route-level pages
    sections/             Home page sections
    App.tsx               Router and application shell
    index.css             Global Tailwind and site styles
    main.tsx              React entry point
  vercel.json             Vercel build/output settings
```

## Local Development

Use Node `20.10.0` or newer.

```bash
npm install
npm run dev
```

The dev server defaults to [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Vercel Deployment

Recommended Vercel settings:

- Framework preset: `Vite`
- Root directory: `app`
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Node version: `20.10.0` or newer

No environment variables are required for the current static site.
