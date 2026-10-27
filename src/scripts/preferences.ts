import { setMenu } from './navigation';
const root = document.documentElement;
const appearanceToggle = document.querySelector<HTMLButtonElement>('[data-appearance-toggle]');
function setAppearance(appearance: string, persist = true) {
  const dark = appearance === 'dark';
  root.dataset.appearance = dark ? 'dark' : 'light';
  appearanceToggle?.setAttribute('aria-checked', String(dark));
  if (persist)
    try {
      localStorage.setItem('portfolio-appearance', dark ? 'dark' : 'light');
    } catch {
      /* Le choix reste utilisable sans mémorisation. */
    }
}
setAppearance(root.dataset.appearance ?? 'light', false);
appearanceToggle?.addEventListener('click', () =>
  setAppearance(root.dataset.appearance === 'dark' ? 'light' : 'dark'),
);
window.addEventListener('storage', (event) => {
  if (event.key === 'portfolio-appearance') setAppearance(event.newValue ?? 'light', false);
});
const preferencesPanel = document.getElementById('display-preferences');
const preferencesToggle = document.querySelector('[data-preferences-toggle]');
preferencesPanel?.addEventListener('toggle', () => {
  const open = preferencesPanel.matches(':popover-open');
  preferencesToggle?.setAttribute('aria-expanded', String(open));
  if (open) setMenu(false);
});
