import { AnimatePresence, motion } from 'framer-motion';
import { BarChart3, Bot, Compass, Home, Search, Shield, Sparkles, UserRound } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { FloatingPlayer } from './FloatingPlayer';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/search', label: 'Search', icon: Search },
  { to: '/artist', label: 'Artist', icon: BarChart3 },
  { to: '/admin', label: 'Admin', icon: Shield }
];

export function Shell({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Primary navigation">
        <NavLink to="/" className="brand" aria-label="Soundserve home">
          <span className="brand-mark">S</span>
          <span>Soundserve</span>
        </NavLink>
        <nav className="nav-list">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              <item.icon size={18} aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="assistant-card">
          <Bot size={20} aria-hidden="true" />
          <strong>AI Music Assistant</strong>
          <p>Ask for calm jazz, road trip gospel, or songs similar to your favorite artist.</p>
        </div>
      </aside>

      <div className="main-column">
        <header className="topbar">
          <div className="search-pill" role="search">
            <Search size={18} aria-hidden="true" />
            <span>Search songs, artists, moods, people</span>
          </div>
          <div className="topbar-actions">
            <button className="icon-button" type="button" aria-label="Open discovery radar">
              <Compass size={18} />
            </button>
            <button className="icon-button" type="button" aria-label="Open AI assistant">
              <Sparkles size={18} />
            </button>
            <button className="profile-button" type="button" aria-label="Open profile">
              <UserRound size={18} />
              <span>Amara</span>
            </button>
          </div>
        </header>
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            className="page"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
      <FloatingPlayer />
    </div>
  );
}
