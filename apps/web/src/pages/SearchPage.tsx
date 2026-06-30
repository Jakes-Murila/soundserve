import { useMemo, useState } from 'react';
import { Mic, Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { artists, playlists, songs } from '../data/catalog';

export function SearchPage() {
  const [query, setQuery] = useState('calm jazz for studying');
  const results = useMemo(() => [...songs, ...artists, ...playlists], []);

  return (
    <div className="search-page">
      <section className="search-hero">
        <h1>Search by sound, mood, artist, or sentence.</h1>
        <div className="search-box">
          <Search size={20} aria-hidden="true" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search Soundserve" />
          <button type="button" aria-label="Voice search"><Mic size={18} /></button>
          <button type="button" aria-label="Advanced filters"><SlidersHorizontal size={18} /></button>
        </div>
        <div className="filter-row" aria-label="Search filters">
          {['Songs', 'Artists', 'Albums', 'Playlists', 'Genres', 'Users', 'Live'].map((filter) => (
            <button key={filter} type="button">{filter}</button>
          ))}
        </div>
      </section>
      <section className="assistant-answer">
        <Sparkles size={20} />
        <div>
          <strong>Natural language match</strong>
          <p>For "{query}", Soundserve AI suggests warm piano jazz, quiet percussion, and low-vocal focus playlists.</p>
        </div>
      </section>
      <section className="results-grid">
        {results.map((item) => (
          <article className="result-card" key={item.id}>
            <img src={'coverUrl' in item ? item.coverUrl : item.imageUrl} alt="" />
            <div>
              <strong>{'title' in item ? item.title : item.name}</strong>
              <span>{'artist' in item ? item.artist : 'genres' in item ? item.genres.join(', ') : item.owner}</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
