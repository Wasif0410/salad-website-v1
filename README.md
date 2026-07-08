# SALAD School Final Website

This repository contains the production-ready SALAD School website.

## Main App

The deployable Vite/React application lives in [`app`](./app).

```bash
cd app
npm install
npm run dev
```

Use these checks before deployment:

```bash
npm run lint
npm run typecheck
npm run build
```

## Supporting Documents

Project notes, implementation guides, reference images, and mockups are kept in [`docs`](./docs) so the deployable app stays clean.

## Vercel

Set the Vercel root directory to `app`. The app includes its own `vercel.json`, package scripts, and deployment README.
