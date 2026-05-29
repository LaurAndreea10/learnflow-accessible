export const learner = {
  id: 'laura-demo',
  name: 'Laura',
  language: 'English Sprint',
  level: 'A2 Builder',
  xp: 2840,
  streak: 18,
  gems: 460,
  hearts: 5,
  weeklyGoal: 900,
  weeklyXp: 620,
  accessibility: {
    largeText: false,
    highContrast: false,
    reduceMotion: false,
    dyslexiaFont: false,
    keyboardMode: true,
    audioCaptions: true
  }
};

export const courseMap = [
  {
    id: 'unit-1',
    title: 'Unitatea 1 — Conversații rapide',
    subtitle: 'Saluturi, prezentări și fraze utile',
    progress: 82,
    lessons: [
      { id: 'l1', title: 'Saluturi clare', type: 'Vocabulary', xp: 15, state: 'done', duration: '4 min' },
      { id: 'l2', title: 'Prezintă-te', type: 'Speaking', xp: 20, state: 'done', duration: '6 min' },
      { id: 'l3', title: 'Alege răspunsul', type: 'Quiz', xp: 20, state: 'active', duration: '5 min' },
      { id: 'l4', title: 'Dialog scurt', type: 'Story', xp: 25, state: 'locked', duration: '7 min' }
    ]
  },
  {
    id: 'unit-2',
    title: 'Unitatea 2 — Oraș și orientare',
    subtitle: 'Direcții, locuri, transport',
    progress: 35,
    lessons: [
      { id: 'l5', title: 'Unde este?', type: 'Vocabulary', xp: 15, state: 'active', duration: '5 min' },
      { id: 'l6', title: 'La cafenea', type: 'Listening', xp: 20, state: 'locked', duration: '6 min' },
      { id: 'l7', title: 'Rezervare', type: 'Roleplay', xp: 25, state: 'locked', duration: '8 min' }
    ]
  },
  {
    id: 'unit-3',
    title: 'Unitatea 3 — Job & interviu',
    subtitle: 'Fraze profesionale și mini-scenarii',
    progress: 0,
    lessons: [
      { id: 'l8', title: 'Small talk', type: 'Vocabulary', xp: 15, state: 'locked', duration: '5 min' },
      { id: 'l9', title: 'Întrebări de interviu', type: 'AI Coach', xp: 30, state: 'locked', duration: '10 min' }
    ]
  }
];

export const lessonDesign = {
  id: 'l3',
  title: 'Alege răspunsul',
  objective: 'Învață să răspunzi natural la întrebări simple.',
  steps: [
    {
      id: 's1',
      kind: 'multiple-choice',
      prompt: 'How are you today?',
      assistivePrompt: 'Alege răspunsul potrivit pentru întrebarea: How are you today?',
      options: ['I am fine, thank you.', 'I am table.', 'Blue tomorrow.'],
      answer: 0,
      hint: 'Întrebarea cere starea ta, nu un obiect sau o culoare.',
      explanation: '“I am fine, thank you” este răspunsul natural.'
    },
    {
      id: 's2',
      kind: 'pair-match',
      prompt: 'Potrivește expresia cu traducerea.',
      pairs: [
        ['Good morning', 'Bună dimineața'],
        ['See you soon', 'Ne vedem curând'],
        ['Nice to meet you', 'Îmi pare bine']
      ],
      hint: 'Caută expresiile pe care le-ai folosi la începutul sau finalul unei conversații.'
    },
    {
      id: 's3',
      kind: 'typing',
      prompt: 'Completează: My name ___ Laura.',
      answer: 'is',
      hint: 'Pentru “My name” folosim verbul “is”.'
    }
  ]
};

export const quests = [
  { id: 'q1', title: 'Completează 2 lecții', reward: '+40 XP', progress: 50, icon: 'target' },
  { id: 'q2', title: 'Fără greșeli la un quiz', reward: '+25 gems', progress: 20, icon: 'sparkles' },
  { id: 'q3', title: 'Exersează 10 minute', reward: 'Streak Shield', progress: 70, icon: 'clock' }
];

export const shopItems = [
  { id: 'i1', title: 'Streak Shield', price: 120, description: 'Protejează o zi ratată.' },
  { id: 'i2', title: 'Focus Boost', price: 90, description: 'Primești +15% XP timp de 20 minute.' },
  { id: 'i3', title: 'Lesson Replay', price: 60, description: 'Reia o lecție fără să pierzi inimi.' }
];

export const leaderboard = [
  { rank: 1, name: 'Mara', xp: 3920, trend: 'up' },
  { rank: 2, name: 'Andrei', xp: 3180, trend: 'same' },
  { rank: 3, name: 'Laura', xp: 2840, trend: 'up', current: true },
  { rank: 4, name: 'Ioana', xp: 2510, trend: 'down' },
  { rank: 5, name: 'Radu', xp: 2280, trend: 'same' }
];

export const achievements = [
  { title: '18 zile streak', description: 'Ai păstrat ritmul aproape 3 săptămâni.' },
  { title: 'Quiz Solver', description: 'Ai terminat 12 quiz-uri.' },
  { title: 'Keyboard Hero', description: 'Ai folosit navigarea completă din tastatură.' }
];
