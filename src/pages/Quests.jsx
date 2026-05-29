import Progress from '../components/Progress.jsx';
import { icons } from '../components/Icons.jsx';

export default function Quests({ quests }) {
  return (
    <section aria-labelledby="quests-title">
      <p className="eyebrow">Daily goals</p>
      <h2 id="quests-title">Quest-uri zilnice</h2>
      <div className="cards-grid">
        {quests.map(q => {
          const Icon = icons[q.icon];
          return (
            <article className="quest-card" key={q.id}>
              <Icon aria-hidden="true" />
              <h3>{q.title}</h3>
              <p>Recompensă: <strong>{q.reward}</strong></p>
              <Progress value={q.progress} label={`Progres ${q.title}`} />
            </article>
          );
        })}
      </div>
    </section>
  );
}
