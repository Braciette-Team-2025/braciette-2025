# Braciette — Web Client

A concise, professional frontend for the Braciette product. This repository contains a Next.js + TypeScript application (App Router) that implements public pages and authenticated user flows (choose, voting, ranking, user home).

This web client powers BRACIATE 2025 — the official voting event organized by Eksekutif Mahasiswa UB 2025 (the Student Executive Board of University of Brawijaya). It provides voter-facing pages, authenticated user flows, and supporting admin utilities to run the election efficiently and securely.

## Quick overview

- Framework: Next.js (App Router)
- Language: TypeScript
- Purpose: Production-ready web client for Braciette with feature-driven folders, shared providers, and a central API layer.

## Quick start (development)

1. Install dependencies

```bash
cd braciette-web
npm install
```

2. Run the dev server

```bash
npm run dev
```

Open http://localhost:3000

## Environment

Create a `.env.local` in the `braciette-web` folder with at least the required runtime variables. Example:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

Keep secrets out of version control and store production secrets in your deployment platform.

## Important scripts

Run these from the `braciette-web` folder (adjust for yarn/pnpm if used):

- npm run dev — start development server
- npm run build — build production artifacts
- npm run start — start built production server
- npm run lint — lint the codebase
- npm run typecheck — TypeScript checks

If any of these scripts are missing, check `package.json` in `braciette-web`.

## Project structure (high level)

- braciette-web/
  - src/app/ — Next.js App Router routes and layouts
  - src/api/ — Axios instance and service wrappers
  - src/shared/ — providers, contexts, and shared UI
  - src/components/ — reusable components
  - src/feature/ — feature modules (auth, user flows)
  - public/ — static assets (images, fonts, svgs)
  - next.config.ts, tsconfig.json, postcss.config.mjs

## Deployment

Recommended: Vercel (native Next.js support). Configure the project root as `braciette-web` and add the environment variables from production `.env` to the hosting platform.

General steps:

1. Build: `npm run build`
2. Start: `npm run start` (or let the platform handle serving)

## Contributing

- Branch from `dev` for feature work: `git checkout -b feat/<short-desc>`
- Open a PR against `dev`.
- Ensure type checks, linting, and build pass in CI.
- Don't commit secrets.
