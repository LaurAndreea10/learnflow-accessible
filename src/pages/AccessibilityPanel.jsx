const settings = [
  ['largeText', 'Text mare', 'Mărește fonturile și spațierea pentru lizibilitate.'],
  ['highContrast', 'Contrast ridicat', 'Activează contrast mai puternic pentru text și carduri.'],
  ['reduceMotion', 'Reduce animațiile', 'Dezactivează tranzițiile mari pentru confort vestibular.'],
  ['dyslexiaFont', 'Font mai prietenos', 'Folosește un font cu forme mai clare și spațiere mare.'],
  ['keyboardMode', 'Focus vizibil', 'Păstrează contururi clare pentru navigarea din tastatură.'],
  ['audioCaptions', 'Subtitrări audio', 'Arată transcrieri și descrieri pentru exerciții audio.']
];

export default function AccessibilityPanel({ accessibility, setAccessibility }) {
  function toggle(key) {
    setAccessibility({ ...accessibility, [key]: !accessibility[key] });
  }

  return (
    <section aria-labelledby="access-title">
      <p className="eyebrow">Inclusive design</p>
      <h2 id="access-title">Adaptări pentru accesibilitate</h2>
      <p className="section-note">Setările se salvează local și schimbă imediat interfața. Toate controalele pot fi folosite din tastatură.</p>
      <div className="settings-list">
        {settings.map(([key, title, desc]) => (
          <label className="setting-row" key={key}>
            <span>
              <strong>{title}</strong>
              <small>{desc}</small>
            </span>
            <input type="checkbox" checked={Boolean(accessibility[key])} onChange={() => toggle(key)} />
          </label>
        ))}
      </div>
    </section>
  );
}
