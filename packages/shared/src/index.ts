import { z } from 'zod';

export const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const playlistPromptSchema = z.object({
  prompt: z.string().min(4).max(500),
  limit: z.number().int().min(5).max(100).default(25)
});

export type Song = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  coverUrl: string;
  audioUrl: string;
  genre: string;
  mood: string;
};

export type Artist = {
  id: string;
  name: string;
  imageUrl: string;
  verified: boolean;
  monthlyListeners: number;
  genres: string[];
};

export type Album = {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  releaseDate: string;
  songCount: number;
};

export type Playlist = {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  owner: string;
  visibility: 'public' | 'private' | 'collaborative';
  songCount: number;
};

export type ApiEnvelope<T> = {
  data: T;
  requestId: string;
};
