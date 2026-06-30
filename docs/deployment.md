# Deployment Guide

## Web

Deploy `apps/web` to Vercel.

- Build command: `npm run build -w @soundserve/web`
- Output directory: `apps/web/dist`
- Environment: `VITE_API_URL=https://api.soundserve.app`

## API

Build the API container with `docker/api.Dockerfile` and deploy it to AWS ECS, App Runner, or EKS.

Required production environment variables:

- `DATABASE_URL`
- `JWT_ACCESS_SECRET`
- `JWT_REFRESH_SECRET`
- `WEB_ORIGIN`
- `STRIPE_SECRET_KEY`
- `AWS_REGION`
- `S3_BUCKET`

## Database

Use a managed PostgreSQL service such as Amazon RDS. Run migrations during release:

```bash
npm run prisma:generate
npm run prisma:migrate
```
