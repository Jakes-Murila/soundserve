# Developer Guide

## Local Development

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env`.
3. Start PostgreSQL with `docker compose up -d postgres`.
4. Run `npm run prisma:generate`.
5. Start the stack with `npm run dev`.

## Quality Gates

Run these before opening a pull request:

```bash
npm run lint
npm run typecheck
npm run build
```

## Conventions

- Shared API contracts live in `packages/shared`.
- Reusable visual tokens live in `packages/ui`.
- API modules should validate request bodies with Zod.
- New database fields must be added through Prisma migrations.
