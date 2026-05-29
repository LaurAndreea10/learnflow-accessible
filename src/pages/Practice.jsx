import { icons } from '../components/Icons.jsx';

const practiceModes = [
  { title: 'Review rapid', desc: '5 întrebări scurte din lecțiile greșite.', icon: 'star' },
  { title: 'Listening cu subtitrări', desc: 'Audio cu transcriere vizibilă și viteză redusă.', icon: 'audio' },
  { title: 'Keyboard drills', desc: 'Exersare completă fără mouse.', icon: 'keyboard' }
];

export default function Practice({ onOpenLesson }) {
  return (
    <section aria-labelledby="practice-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">Practice</p>
          <h2 id="practice-title">Antrenament adaptiv</h2>
        </div>
        <button className="primary-action" onClick={onOpenLesson}>Pornește review</button>
      </div>
      <div className="cards-grid">
        {practiceModes.map(mode => {
          const Icon = icons[mode.icon];
          return (
            <article className="feature-card" key={mode.title}>
              <Icon aria-hidden="true" />
              <h3>{mode.title}</h3>
              <p>{mode.desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
