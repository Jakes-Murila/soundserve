# Architecture

Soundserve is organized as a modular monorepo with independent deployable apps and shared packages.

## Frontend

The web application uses React 19, Vite, TypeScript, React Router, React Query, Framer Motion, React Hook Form, and Zod. The first product surface includes discovery, search, an artist dashboard, admin workflows, and a persistent player.

## Backend

The API is an Express 5 TypeScript service. It exposes REST endpoints under `/api`, uses JWT access and refresh token patterns, validates input with Zod, and hosts Socket.IO for realtime listening activity.

## Data

PostgreSQL is modeled through Prisma. The schema favors explicit relations, audit timestamps, and scalable join tables for playlists, follows, achievements, and listening history.

## Cloud

Audio and image uploads are designed for S3 with CloudFront delivery. Stripe powers subscription and payment records. The web app can deploy to Vercel, while the API runs on AWS ECS, App Runner, or another container host.
