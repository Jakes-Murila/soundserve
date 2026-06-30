import { AlertTriangle, CheckCircle2, Flag, Settings, UsersRound } from 'lucide-react';

const adminTiles = [
  { title: 'User management', detail: '182 accounts need review', Icon: UsersRound },
  { title: 'Content moderation', detail: '26 flagged comments', Icon: Flag },
  { title: 'Approvals', detail: '14 artist verification requests', Icon: CheckCircle2 },
  { title: 'Site settings', detail: 'OAuth, Stripe, S3, and CDN status', Icon: Settings },
  { title: 'Risk queue', detail: '3 rate-limit spikes detected', Icon: AlertTriangle }
];

export function AdminPage() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-header">
        <div>
          <span className="eyebrow">Admin command center</span>
          <h1>Moderation, approvals, and platform health.</h1>
          <p>Manage users, artists, reports, featured content, payments, and catalog quality with audit-ready workflows.</p>
        </div>
      </section>
      <section className="admin-grid">
        {adminTiles.map(({ title, detail, Icon }) => (
          <article className="panel admin-tile" key={title}>
            <Icon size={20} />
            <strong>{title}</strong>
            <span>{detail}</span>
          </article>
        ))}
      </section>
    </div>
  );
}
