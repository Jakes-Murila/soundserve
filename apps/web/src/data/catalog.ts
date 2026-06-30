import type { Album, Artist, Playlist, Song } from '@soundserve/shared';

export const songs: Song[] = [
  {
    id: 's-aurora',
    title: 'Aurora Streets',
    artist: 'Nia Vale',
    album: 'Night Bloom',
    duration: 214,
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80',
    audioUrl: '/demo/aurora-streets.mp3',
    genre: 'Alt R&B',
    mood: 'Late night'
  },
  {
    id: 's-orbit',
    title: 'Soft Orbit',
    artist: 'Kairo North',
    album: 'Signal Room',
    duration: 188,
    coverUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    audioUrl: '/demo/soft-orbit.mp3',
    genre: 'Electronic',
    mood: 'Focus'
  },
  {
    id: 's-harbor',
    title: 'Harbor Light',
    artist: 'Ama Rae Collective',
    album: 'Blue Coast',
    duration: 247,
    coverUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
    audioUrl: '/demo/harbor-light.mp3',
    genre: 'Soul',
    mood: 'Calm'
  }
];

export const artists: Artist[] = [
  {
    id: 'a-nia',
    name: 'Nia Vale',
    imageUrl: 'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&w=700&q=80',
    verified: true,
    monthlyListeners: 1820000,
    genres: ['Alt R&B', 'Pop']
  },
  {
    id: 'a-kairo',
    name: 'Kairo North',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=700&q=80',
    verified: true,
    monthlyListeners: 940000,
    genres: ['Electronic', 'Ambient']
  },
  {
    id: 'a-ama',
    name: 'Ama Rae Collective',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=700&q=80',
    verified: false,
    monthlyListeners: 612000,
    genres: ['Soul', 'Afrobeats']
  }
];

export const albums: Album[] = [
  {
    id: 'al-night',
    title: 'Night Bloom',
    artist: 'Nia Vale',
    coverUrl: songs[0].coverUrl,
    releaseDate: '2026-06-21',
    songCount: 12
  },
  {
    id: 'al-signal',
    title: 'Signal Room',
    artist: 'Kairo North',
    coverUrl: songs[1].coverUrl,
    releaseDate: '2026-06-14',
    songCount: 9
  }
];

export const playlists: Playlist[] = [
  {
    id: 'p-focus',
    title: 'Coding in Low Light',
    description: 'Warm electronic, neo soul, and minimal percussion for deep work.',
    coverUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
    owner: 'Soundserve AI',
    visibility: 'public',
    songCount: 42
  },
  {
    id: 'p-gospel',
    title: 'African Gospel Rising',
    description: 'Modern praise, choir textures, and cross-border worship discoveries.',
    coverUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80',
    owner: 'Editorial',
    visibility: 'public',
    songCount: 58
  }
];
