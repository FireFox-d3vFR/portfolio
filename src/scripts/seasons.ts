import {
  getSeasonForDate, isSeason, millisecondsUntilNextLocalDay,
  resolveSeasonPreferences, type SeasonMode,
} from '../lib/seasons';

const root = document.documentElement;
const names = { printemps: 'Printemps', ete: 'Été', automne: 'Automne', hiver: 'Hiver' };
function readPreferences() {
  let mode: string | null = null;
  let season: string | null = null;
  try {
    mode = localStorage.getItem('portfolio-season-mode');
    season = localStorage.getItem('portfolio-season');
  } catch { /* Automatic mode remains usable without storage. */ }
  return resolveSeasonPreferences(mode, season);
}
let state = readPreferences();
let midnightTimer: number | undefined;

function renderSeason() {
  state.season = state.mode === 'auto' ? getSeasonForDate() : state.manualSeason;
  root.dataset.season = state.season;
  root.dataset.seasonMode = state.mode;
  document.querySelectorAll('[data-season-name]').forEach(label => { label.textContent = names[state.season]; });
  document.querySelectorAll('[data-season-mode-label]').forEach(label => {
    label.textContent = state.mode === 'auto' ? 'Selon la date' : 'Choix manuel';
  });
  document.querySelectorAll<HTMLButtonElement>('[data-season-auto]').forEach(button =>
    button.setAttribute('aria-checked', String(state.mode === 'auto')));
  document.querySelectorAll<HTMLButtonElement>('[data-season-choice]').forEach(button =>
    button.setAttribute('aria-pressed', String(button.dataset.seasonChoice === state.season)));
  document.querySelectorAll<HTMLImageElement>('[data-landscape]').forEach(image => {
    const source = image.dataset[state.season];
    if (source && image.getAttribute('src') !== source) image.src = source;
  });
}

function scheduleNextDay() {
  if (midnightTimer !== undefined) window.clearTimeout(midnightTimer);
  midnightTimer = undefined;
  if (state.mode === 'auto') {
    midnightTimer = window.setTimeout(() => {
      renderSeason();
      scheduleNextDay();
    }, millisecondsUntilNextLocalDay());
  }
}

function changeMode(mode: SeasonMode) {
  state.mode = mode;
  renderSeason();
  scheduleNextDay();
  try {
    // Keep the last manual selection even while automatic mode is enabled.
    localStorage.setItem('portfolio-season', state.manualSeason);
    localStorage.setItem('portfolio-season-mode', state.mode);
  } catch { /* Selection still works for the current visit. */ }
}

document.querySelectorAll<HTMLButtonElement>('[data-season-choice]').forEach(button =>
  button.addEventListener('click', () => {
    const season = button.dataset.seasonChoice;
    if (!isSeason(season)) return;
    state.manualSeason = season;
    changeMode('manual');
  }));
document.querySelectorAll<HTMLButtonElement>('[data-season-auto]').forEach(button =>
  button.addEventListener('click', () => changeMode(state.mode === 'auto' ? 'manual' : 'auto')));

function refreshAutomaticSeason() {
  if (state.mode === 'auto') {
    renderSeason();
    scheduleNextDay();
  }
}
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) refreshAutomaticSeason();
});
window.addEventListener('focus', refreshAutomaticSeason);
window.addEventListener('storage', event => {
  if (event.key === null || event.key === 'portfolio-season' || event.key === 'portfolio-season-mode') {
    state = readPreferences();
    renderSeason();
    scheduleNextDay();
  }
});

renderSeason();
scheduleNextDay();
