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
