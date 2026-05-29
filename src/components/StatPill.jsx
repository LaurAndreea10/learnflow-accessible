import { icons } from './Icons.jsx';

export default function StatPill({ icon, label, value }) {
  const Icon = icons[icon];
  return (
    <div className="stat-pill" aria-label={`${label}: ${value}`}>
      {Icon && <Icon aria-hidden="true" size={18} />}
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
