# API Documentation

Base URL: `http://localhost:4000/api`

## Health

`GET /health`

Returns service status and request id.

## Authentication

`POST /auth/register`

Body:

```json
{ "email": "listener@example.com", "password": "strong-password" }
```

`POST /auth/login`

Returns a JWT access token and sets an HTTP-only refresh token cookie.

## Catalog

`GET /catalog/songs`

Returns seed catalog data.

`GET /catalog/search?q=focus`

Searches songs by title, artist, genre, and mood.

## AI

`POST /ai/playlist`

Body:

```json
{ "prompt": "I want calm jazz for studying.", "limit": 25 }
```

Returns a generated playlist rationale and track list.

## Admin

`GET /admin/overview`

Returns moderation, approvals, payment, and platform health metrics.
