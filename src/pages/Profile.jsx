import Progress from '../components/Progress.jsx';

export default function Profile({ learner, achievements }) {
  return (
    <section aria-labelledby="profile-title">
      <div className="profile-card">
        <div className="avatar" aria-hidden="true">{learner.name.slice(0, 1)}</div>
        <div>
          <p className="eyebrow">Profil</p>
          <h2 id="profile-title">{learner.name} · {learner.level}</h2>
          <p>{learner.xp} XP total · {learner.streak} zile streak</p>
        </div>
      </div>
      <Progress value={Math.round((learner.weeklyXp / learner.weeklyGoal) * 100)} label="Obiectiv săptămânal" />
      <div className="cards-grid achievements">
        {achievements.map(a => (
          <article className="feature-card" key={a.title}>
            <h3>{a.title}</h3>
            <p>{a.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
