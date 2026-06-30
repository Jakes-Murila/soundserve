import { BadgeCheck, DollarSign, Headphones, MessageSquare, Upload, Users } from 'lucide-react';

const metrics = [
  { label: 'Monthly listeners', value: '1.82M', icon: Headphones },
  { label: 'Followers', value: '438K', icon: Users },
  { label: 'Streams this month', value: '9.4M', icon: BadgeCheck },
  { label: 'Revenue', value: '$42.8K', icon: DollarSign }
];

export function ArtistDashboardPage() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-header">
        <div>
          <span className="eyebrow">Artist dashboard</span>
          <h1>Nia Vale</h1>
          <p>Upload music, review analytics, track playlist performance, and respond to fan engagement from one control room.</p>
        </div>
        <button className="primary-button" type="button"><Upload size={18} /> Upload release</button>
      </section>
      <section className="metric-grid">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <metric.icon size={18} />
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>
      <section className="split-grid">
        <div className="panel chart-panel">
          <h2>Streams</h2>
          <div className="bar-chart" aria-label="Stream analytics chart">
            {[42, 58, 51, 72, 66, 88, 96, 79, 104, 118, 132, 149].map((height, index) => (
              <span key={index} style={{ height }} />
            ))}
          </div>
        </div>
        <div className="panel">
          <h2>Fan engagement</h2>
          <div className="stack-list">
            {['Night Bloom added to 8,420 playlists', '312 comments awaiting reply', 'Verification review: approved'].map((item) => (
              <article className="list-row" key={item}>
                <MessageSquare size={18} />
                <div><strong>{item}</strong><span>Updated today</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
