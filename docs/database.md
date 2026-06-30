# Database Schema

The Prisma schema in `prisma/schema.prisma` defines the launch data model:

- Identity: `User`, roles, verification, OAuth-ready nullable password hashes.
- Catalog: `Artist`, `Song`, `Album`, `Genre`.
- Playback: `ListeningHistory`, `Stream`.
- Social: `Follow`, `ArtistFollow`, `Like`, `Comment`, `Review`, `Message`.
- Playlists: `Playlist`, `PlaylistSong`, collaborative flags.
- Business: `Subscription`, `Payment`.
- Growth and safety: `Notification`, `Achievement`, `Badge`, `Report`, `SearchHistory`, `Recommendation`.

Use Prisma migrations for all schema changes:

```bash
npm run prisma:migrate
```
