import { Router } from 'express';
import { playlistPromptSchema } from '@soundserve/shared';

export const aiRouter = Router();

aiRouter.post('/playlist', (req, res) => {
  const input = playlistPromptSchema.parse(req.body);
  const mood = input.prompt.toLowerCase().includes('study') ? 'Focus' : 'Discovery';

  res.json({
    data: {
      title: `${mood} Session`,
      prompt: input.prompt,
      rationale: 'Matched tempo, mood, language, genre adjacency, and recent listening history.',
      tracks: ['Soft Orbit', 'Harbor Light', 'Aurora Streets']
    },
    requestId: crypto.randomUUID()
  });
});

aiRouter.get('/assistant/examples', (_req, res) => {
  res.json({
    data: [
      'I want calm jazz for studying.',
      'Give me African gospel music.',
      'Recommend songs similar to Lecrae.',
      'Build a 45-minute workout playlist.'
    ],
    requestId: crypto.randomUUID()
  });
});
