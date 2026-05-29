import { icons } from './Icons.jsx';
import StatPill from './StatPill.jsx';

const tabs = [
  ['learn', 'Lecții'],
  ['practice', 'Practică'],
  ['leaderboard', 'Clasament'],
  ['quests', 'Quest-uri'],
  ['shop', 'Shop'],
  ['profile', 'Profil'],
  ['accessibility', 'Accesibilitate']
];

export default function Shell({ activeTab, setActiveTab, learner, children }) {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Sari la conținut</a>
      <aside className="sidebar" aria-label="Navigare principală">
        <div className="brand" aria-label="LearnFlow Accessible">
          <span className="brand-mark">LF</span>
          <div>
            <strong>LearnFlow</strong>
            <small>Accessible</small>
          </div>
        </div>
        <nav className="tabs" aria-label="File aplicație">
          {tabs.map(([id, label]) => {
            const Icon = icons[id];
            return (
              <button
                key={id}
                className={activeTab === id ? 'tab active' : 'tab'}
                onClick={() => setActiveTab(id)}
                aria-current={activeTab === id ? 'page' : undefined}
              >
                <Icon aria-hidden="true" size={20} />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="content-area">
        <header className="topbar">
          <div>
            <p className="eyebrow">{learner.language}</p>
            <h1>Salut, {learner.name}! Continuă lecția de azi.</h1>
          </div>
          <div className="stats" aria-label="Statistici cursant">
            <StatPill icon="flame" label="Streak" value={learner.streak} />
            <StatPill icon="gem" label="Gems" value={learner.gems} />
            <StatPill icon="heart" label="Inimi" value={learner.hearts} />
          </div>
        </header>
        <main id="main-content" className="main" tabIndex="-1">{children}</main>
      </div>
    </div>
  );
}
