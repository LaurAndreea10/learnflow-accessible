export default function Progress({ value, label }) {
  const safe = Math.max(0, Math.min(100, value));
  return (
    <div className="progress-wrap" aria-label={label}>
      <div className="progress-label">
        <span>{label}</span>
        <strong>{safe}%</strong>
      </div>
      <div className="progress-track" role="progressbar" aria-valuenow={safe} aria-valuemin="0" aria-valuemax="100">
        <span style={{ width: `${safe}%` }} />
      </div>
    </div>
  );
}
