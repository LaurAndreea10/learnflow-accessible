import Progress from '../components/Progress.jsx';
import { icons } from '../components/Icons.jsx';

export default function Learn({ courseMap, onOpenLesson }) {
  return (
    <section className="page-grid" aria-labelledby="learn-title">
      <div className="hero-card">
        <p className="eyebrow">Learning path</p>
        <h2 id="learn-title">Hartă de lecții cu progres vizibil</h2>
        <p>Unitățile sunt scurte, navigabile din tastatură și includ feedback, indicii, subtitrări pentru audio și variante fără animații.</p>
        <button className="primary-action" onClick={onOpenLesson}>Începe lecția activă</button>
      </div>

      {courseMap.map(unit => (
        <article className="unit-card" key={unit.id}>
          <div className="unit-head">
            <div>
              <h3>{unit.title}</h3>
              <p>{unit.subtitle}</p>
            </div>
            <Progress value={unit.progress} label={`Progres ${unit.title}`} />
          </div>
          <div className="lesson-path" role="list" aria-label={`Lecții din ${unit.title}`}>
            {unit.lessons.map((lesson, index) => {
              const Done = icons.check;
              const Lock = icons.lock;
              const Play = icons.play;
              return (
                <button
                  key={lesson.id}
                  className={`lesson-node ${lesson.state}`}
                  disabled={lesson.state === 'locked'}
                  onClick={lesson.state !== 'locked' ? onOpenLesson : undefined}
                  role="listitem"
                  aria-label={`${lesson.title}, ${lesson.type}, ${lesson.xp} XP, ${lesson.state === 'locked' ? 'blocat' : 'disponibil'}`}
                >
                  <span className="node-icon" aria-hidden="true">
                    {lesson.state === 'done' && <Done size={20} />}
                    {lesson.state === 'active' && <Play size={20} />}
                    {lesson.state === 'locked' && <Lock size={20} />}
                  </span>
                  <span>
                    <strong>{index + 1}. {lesson.title}</strong>
                    <small>{lesson.type} · {lesson.duration} · {lesson.xp} XP</small>
                  </span>
                </button>
              );
            })}
          </div>
        </article>
      ))}
    </section>
  );
}
