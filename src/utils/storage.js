const KEY = 'learnflow-accessible-state';

export function loadState(fallback) {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
  } catch {
    return fallback;
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // LocalStorage poate fi dezactivat. Aplicația continuă cu state temporar.
  }
}
