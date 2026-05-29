import { useMemo, useState } from 'react';
import Progress from '../components/Progress.jsx';
import { icons } from '../components/Icons.jsx';

export default function Lesson({ lesson, onClose, onComplete }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [typed, setTyped] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showHint, setShowHint] = useState(false);
  const step = lesson.steps[stepIndex];
  const progress = useMemo(() => Math.round(((stepIndex + 1) / lesson.steps.length) * 100), [stepIndex, lesson.steps.length]);

  function checkAnswer() {
    if (step.kind === 'multiple-choice') {
      const ok = selected === step.answer;
      setFeedback(ok ? `Corect! ${step.explanation}` : 'Aproape. Încearcă din nou sau deschide indiciul.');
      return ok;
    }
    if (step.kind === 'typing') {
      const ok = typed.trim().toLowerCase() === step.answer.toLowerCase();
      setFeedback(ok ? 'Corect! Ai completat propoziția.' : 'Răspunsul nu este încă potrivit.');
      return ok;
    }
    setFeedback('Exercițiul de potrivire este marcat ca demonstrativ în backend-ul mock.');
    return true;
  }

  function next() {
    const ok = checkAnswer();
    if (!ok) return;
    if (stepIndex < lesson.steps.length - 1) {
      setStepIndex(stepIndex + 1);
      setSelected(null);
      setTyped('');
      setFeedback('');
      setShowHint(false);
    } else {
      onComplete();
      onClose();
    }
  }

  return (
    <section className="lesson-overlay" aria-labelledby="lesson-title" role="dialog" aria-modal="true">
      <div className="lesson-card">
        <div className="lesson-top">
          <button className="ghost" onClick={onClose} aria-label="Închide lecția">×</button>
          <Progress value={progress} label="Progres lecție" />
        </div>
        <p className="eyebrow">Lecție interactivă</p>
        <h2 id="lesson-title">{lesson.title}</h2>
        <p className="lesson-objective">{lesson.objective}</p>

        <div className="exercise-card" aria-live="polite">
          <div className="exercise-toolbar">
            <span className="badge">Pas {stepIndex + 1}/{lesson.steps.length}</span>
            <button className="assist-button" onClick={() => setShowHint(!showHint)}>
              <icons.sparkles size={16} aria-hidden="true" /> Indiciu
            </button>
          </div>

          <h3>{step.prompt}</h3>
          {step.assistivePrompt && <p className="sr-only">{step.assistivePrompt}</p>}

          {step.kind === 'multiple-choice' && (
            <div className="answer-list" role="radiogroup" aria-label="Alege răspunsul corect">
              {step.options.map((option, index) => (
                <button
                  key={option}
                  className={selected === index ? 'answer selected' : 'answer'}
                  role="radio"
                  aria-checked={selected === index}
                  onClick={() => setSelected(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {step.kind === 'pair-match' && (
            <div className="pairs" aria-label="Carduri de potrivire">
              {step.pairs.map(([left, right]) => (
                <div className="pair" key={left}>
                  <strong>{left}</strong>
                  <span>{right}</span>
                </div>
              ))}
            </div>
          )}

          {step.kind === 'typing' && (
            <label className="type-answer">
              Răspunsul tău
              <input value={typed} onChange={e => setTyped(e.target.value)} placeholder="Scrie aici" autoComplete="off" />
            </label>
          )}

          {showHint && <p className="hint" role="status">{step.hint}</p>}
          {feedback && <p className="feedback" role="status">{feedback}</p>}
        </div>

        <div className="lesson-actions">
          <button className="secondary-action" onClick={() => setShowHint(true)}>Am nevoie de ajutor</button>
          <button className="primary-action" onClick={next}>{stepIndex === lesson.steps.length - 1 ? 'Finalizează' : 'Continuă'}</button>
        </div>
      </div>
    </section>
  );
}
