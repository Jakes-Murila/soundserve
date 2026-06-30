import { Router } from 'express';

const songs = [
  { id: 's-aurora', title: 'Aurora Streets', artist: 'Nia Vale', genre: 'Alt R&B', mood: 'Late night' },
  { id: 's-orbit', title: 'Soft Orbit', artist: 'Kairo North', genre: 'Electronic', mood: 'Focus' },
  { id: 's-harbor', title: 'Harbor Light', artist: 'Ama Rae Collective', genre: 'Soul', mood: 'Calm' }
];

export const catalogRouter = Router();

catalogRouter.get('/songs', (_req, res) => {
  res.json({ data: songs, requestId: crypto.randomUUID() });
});

catalogRouter.get('/search', (req, res) => {
  const query = String(req.query.q ?? '').toLowerCase();
  const data = songs.filter((song) => Object.values(song).join(' ').toLowerCase().includes(query));
  res.json({ data, requestId: crypto.randomUUID() });
});
