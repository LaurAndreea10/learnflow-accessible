export default function Leaderboard({ leaderboard }) {
  return (
    <section aria-labelledby="leaderboard-title">
      <p className="eyebrow">League</p>
      <h2 id="leaderboard-title">Clasament săptămânal</h2>
      <div className="leaderboard" role="table" aria-label="Clasament XP">
        <div className="leader-row leader-head" role="row">
          <span role="columnheader">Loc</span>
          <span role="columnheader">Cursant</span>
          <span role="columnheader">XP</span>
          <span role="columnheader">Trend</span>
        </div>
        {leaderboard.map(row => (
          <div className={row.current ? 'leader-row current' : 'leader-row'} role="row" key={row.name}>
            <span role="cell">#{row.rank}</span>
            <strong role="cell">{row.name}</strong>
            <span role="cell">{row.xp}</span>
            <span role="cell">{row.trend === 'up' ? '↑ urcă' : row.trend === 'down' ? '↓ scade' : '— stabil'}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
