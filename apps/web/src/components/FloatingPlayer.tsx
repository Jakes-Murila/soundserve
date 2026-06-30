import { Clock3, ListMusic, Maximize2, Pause, Repeat, Shuffle, SkipBack, SkipForward, SlidersHorizontal, Volume2 } from 'lucide-react';
import { songs } from '../data/catalog';

export function FloatingPlayer() {
  const active = songs[0];

  return (
    <section className="floating-player" aria-label="Now playing">
      <img src={active.coverUrl} alt={`${active.album} artwork`} />
      <div className="track-meta">
        <strong>{active.title}</strong>
        <span>{active.artist}</span>
      </div>
      <div className="player-controls" aria-label="Playback controls">
        <button type="button" aria-label="Shuffle"><Shuffle size={16} /></button>
        <button type="button" aria-label="Previous"><SkipBack size={16} /></button>
        <button className="play-button" type="button" aria-label="Pause"><Pause size={18} /></button>
        <button type="button" aria-label="Next"><SkipForward size={16} /></button>
        <button type="button" aria-label="Repeat"><Repeat size={16} /></button>
      </div>
      <div className="progress-area" aria-label="Playback progress">
        <span>1:18</span>
        <div className="progress-track"><span style={{ width: '42%' }} /></div>
        <span>3:34</span>
      </div>
      <div className="player-tools">
        <button type="button" aria-label="Queue"><ListMusic size={16} /></button>
        <button type="button" aria-label="Equalizer"><SlidersHorizontal size={16} /></button>
        <button type="button" aria-label="Sleep timer"><Clock3 size={16} /></button>
        <button type="button" aria-label="Volume"><Volume2 size={16} /></button>
        <button type="button" aria-label="Mini player"><Maximize2 size={16} /></button>
      </div>
    </section>
  );
}
