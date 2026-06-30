import { motion } from 'framer-motion';
import { Mic2, Play, Sparkles, TrendingUp } from 'lucide-react';
import type { ReactNode } from 'react';
import { albums, artists, playlists, songs } from '../data/catalog';

export function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">AI-powered streaming</span>
          <h1>Soundserve</h1>
          <p>Premium discovery, social listening, artist tools, and natural-language music intelligence in one launch-ready platform.</p>
          <div className="hero-actions">
            <button className="primary-button" type="button"><Play size={18} fill="currentColor" /> Start listening</button>
            <button className="secondary-button" type="button"><Sparkles size={18} /> Generate playlist</button>
          </div>
        </div>
        <div className="hero-visual" aria-label="Featured listening session">
          <img src={songs[0].coverUrl} alt="Night Bloom album artwork" />
          <div className="hero-mix">
            <strong>Discover Weekly</strong>
            <span>86% match for your late-night rotation</span>
          </div>
        </div>
      </section>

      <section className="metric-grid" aria-label="Platform activity">
        {[
          ['48M', 'monthly streams'],
          ['12K', 'verified artists'],
          ['320K', 'AI playlists generated'],
          ['99.98%', 'stream uptime']
        ].map(([value, label]) => (
          <div className="metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <ContentRail title="Trending Music" icon={<TrendingUp size={18} />}>
        {songs.map((song, index) => (
          <motion.article className="music-card" key={song.id} whileHover={{ y: -6 }}>
            <img src={song.coverUrl} alt={`${song.album} cover`} />
            <span className="rank">0{index + 1}</span>
            <strong>{song.title}</strong>
            <p>{song.artist} · {song.genre}</p>
          </motion.article>
        ))}
      </ContentRail>

      <ContentRail title="Featured Artists" icon={<Mic2 size={18} />}>
        {artists.map((artist) => (
          <motion.article className="artist-card" key={artist.id} whileHover={{ y: -6 }}>
            <img src={artist.imageUrl} alt={artist.name} />
            <strong>{artist.name}</strong>
            <p>{artist.monthlyListeners.toLocaleString()} monthly listeners</p>
          </motion.article>
        ))}
      </ContentRail>

      <section className="split-grid">
        <div className="panel">
          <h2>Recommended For You</h2>
          <div className="stack-list">
            {playlists.map((playlist) => (
              <article className="list-row" key={playlist.id}>
                <img src={playlist.coverUrl} alt="" />
                <div><strong>{playlist.title}</strong><span>{playlist.description}</span></div>
              </article>
            ))}
          </div>
        </div>
        <div className="panel">
          <h2>Recently Released</h2>
          <div className="stack-list">
            {albums.map((album) => (
              <article className="list-row" key={album.id}>
                <img src={album.coverUrl} alt="" />
                <div><strong>{album.title}</strong><span>{album.artist} · {album.releaseDate}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ContentRail({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) {
  return (
    <section className="content-rail">
      <div className="section-heading">
        <h2>{icon}{title}</h2>
        <button type="button">View all</button>
      </div>
      <div className="card-grid">{children}</div>
    </section>
  );
}
