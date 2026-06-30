<<<<<<< HEAD
# Soundserve

Soundserve is a premium AI-powered full-stack music streaming platform built as a production-oriented monorepo. It includes a React 19 web app, Express API, shared TypeScript contracts, Prisma PostgreSQL schema, Docker assets, CI, and launch documentation.

## Workspace

```text
apps/
  web/      React, Vite, TypeScript, React Router, React Query, Framer Motion
  api/      Node.js, Express, TypeScript, JWT, WebSockets, REST modules
packages/
  shared/   Zod schemas and domain contracts
  ui/       Shared design tokens
prisma/     PostgreSQL data model
docker/     Runtime Dockerfiles
docs/       Architecture, API, deployment, developer guides
```

## Quick Start

```bash
npm install
cp .env.example .env
docker compose up -d postgres
npm run prisma:generate
npm run dev
```

The web app runs at `http://localhost:5173` and the API at `http://localhost:4000`.

## Highlights

- Listener experience with home, search, AI recommendations, charts, playlists, and floating player UI.
- Artist dashboard for uploads, analytics, revenue, playlist performance, and fan engagement.
- Admin command center for user management, approvals, moderation, reports, and site settings.
- API modules for auth, catalog, AI playlist generation, admin overview, and realtime listening activity.
- PostgreSQL schema covering users, artists, songs, albums, genres, playlists, likes, follows, streams, subscriptions, payments, notifications, messages, comments, reviews, achievements, badges, reports, search history, and recommendations.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
npm run prisma:migrate
```
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 2f61728022eee9247f4fec6f983a5caf44350327
