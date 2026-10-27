import './seasons';
import { getJourneyLayout, type Category, type JourneyItem } from '../lib/journey';

const root = document.documentElement;
const header = document.querySelector<HTMLElement>('[data-header]');
const backToTop = document.querySelector<HTMLAnchorElement>('[data-back-to-top]');
const sectionLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-section-link]')];
const navigationSections = [...new Set(sectionLinks.map(link => link.dataset.sectionLink!))]
  .map(id => document.getElementById(id)).filter((section): section is HTMLElement => !!section);
function updateActiveSection() {
  if (!navigationSections.length) return;
  const readingLine = (header?.getBoundingClientRect().bottom ?? 64) + 80;
  let active = navigationSections[0].id;
  for (const section of navigationSections) {
    if (section.getBoundingClientRect().top <= readingLine) active = section.id;
  }
  // The final section can be shorter than the viewport.
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
    active = navigationSections[navigationSections.length - 1].id;
  }
  sectionLinks.forEach(link => {
    if (link.dataset.sectionLink === active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
const onScroll = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 20);
  if (backToTop) backToTop.hidden = window.scrollY < 600;
  updateActiveSection();
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
window.addEventListener('load', onScroll, { once: true });
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.getElementById('mobile-navigation');
function setMenu(open: boolean) {
  toggle?.setAttribute('aria-expanded', String(open));
  toggle?.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  if (menu) menu.hidden = !open;
  toggle?.querySelectorAll('svg').forEach((icon, index) => { icon.classList.toggle('hidden', index === (open ? 0 : 1)); });
}
toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    setMenu(false); toggle.focus();
  }
});
window.matchMedia('(min-width: 1024px)').addEventListener('change', event => { if (event.matches) setMenu(false); });

document.querySelectorAll<HTMLButtonElement>('[data-entry]').forEach(button => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById('detail-' + button.dataset.entry);
    if (dialog instanceof HTMLDialogElement) {
      const previous = button.closest<HTMLDialogElement>('dialog');
      // Close before opening the related detail, then restore the source modal on return.
      if (previous?.open) {
        const previousScroll = previous.scrollTop;
        previous.close();
        dialog.addEventListener('close', () => {
          previous.showModal();
          previous.scrollTop = previousScroll;
          button.focus({ preventScroll: true });
        }, { once: true });
      }
      dialog.showModal();
      dialog.scrollTop = 0;
    }
  });
});
document.querySelectorAll<HTMLDialogElement>('.entry-dialog').forEach(dialog => {
  dialog.querySelector('[data-close-dialog]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  root.classList.add('motion-ready');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  reduceMotion.addEventListener('change', event => { if (event.matches) root.classList.remove('motion-ready'); });
}

const graph = document.getElementById('journey-graph');
const rowElements = [...document.querySelectorAll<HTMLLIElement>('[data-journey-id]')];
const items: JourneyItem[] = rowElements.map(element => ({
  id: element.dataset.journeyId!,
  category: element.dataset.category as Category,
  start: element.dataset.start!,
  end: element.dataset.end || null,
}));
const filters = [...document.querySelectorAll<HTMLButtonElement>('button[data-category]')];
function updateGraph() {
  const visible = filters.filter(button => button.getAttribute('aria-pressed') === 'true').map(button => button.dataset.category);
  const { rows, count } = getJourneyLayout(items.filter(item => visible.includes(item.category)));
  graph?.style.setProperty('--lanes', String(Math.max(count, 1)));
  rowElements.forEach(element => { element.hidden = !visible.includes(element.dataset.category); });
  for (const row of rows) {
    const element = rowElements.find(item => item.dataset.journeyId === row.entry.id)!;
    element.querySelector('.git-year')!.textContent = row.year;
    const lanes = element.querySelector('.git-lanes')!;
    const fragment = document.createDocumentFragment();
    const addSpan = (classes: string, lane: number, capProgress = 0) => {
      const span = document.createElement('span');
      span.className = classes; span.style.setProperty('--lane', String(lane)); span.style.setProperty('--cap-progress', String(capProgress)); fragment.append(span);
    };
    row.lines.forEach(line => addSpan('git-line cat-' + line.category + (line.capped ? ' is-capped' : ''), line.lane, line.capProgress));
    if (row.upward) addSpan('git-line git-line-up cat-' + row.entry.category, row.lane);
    addSpan('git-node cat-' + row.entry.category + (row.entry.end === row.entry.start ? ' is-point' : '') + (!row.entry.end ? ' is-ongoing' : ''), row.lane);
    lanes.replaceChildren(fragment);
  }
  const empty = document.querySelector<HTMLElement>('[data-journey-empty]');
  const now = document.querySelector<HTMLElement>('[data-journey-now]');
  if (empty) empty.hidden = rows.length !== 0;
  if (now) now.hidden = rows.length === 0;
  const status = document.querySelector('[data-journey-status]');
  if (status) status.textContent = rows.length + ' éléments affichés dans le parcours.';
}
filters.forEach(button => button.addEventListener('click', () => {
  const active = button.getAttribute('aria-pressed') !== 'true';
  button.setAttribute('aria-pressed', String(active)); button.classList.toggle('is-active', active);
  updateGraph();
}));
updateGraph();


// Switch the presentation without duplicating the project cards or modal triggers.
const projectCollection = document.getElementById('project-collection');
const projectViewControls = document.querySelector<HTMLElement>('[data-project-view-controls]');
const projectViewButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-project-view]')];
function setProjectView(view: string, persist = true) {
  if (!projectCollection || !['grid', 'list'].includes(view)) return;
  projectCollection.dataset.view = view;
  projectViewButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.projectView === view)));
  const status = document.querySelector('[data-project-view-status]');
  if (status) status.textContent = 'Vue ' + (view === 'grid' ? 'grille' : 'liste') + ', ' + projectCollection.children.length + ' projets.';
  if (persist) try { localStorage.setItem('portfolio-project-view', view); } catch { /* Optional preference. */ }
}
if (projectCollection && projectViewControls) {
  projectViewControls.hidden = false;
  let initialView = 'grid';
  try { initialView = localStorage.getItem('portfolio-project-view') ?? 'grid'; } catch { /* Grid remains available. */ }
  setProjectView(['grid', 'list'].includes(initialView) ? initialView : 'grid', false);
  projectViewButtons.forEach(button => button.addEventListener('click', () => setProjectView(button.dataset.projectView!)));
}


const appearanceToggle = document.querySelector<HTMLButtonElement>('[data-appearance-toggle]');
function setAppearance(appearance: string, persist = true) {
  const dark = appearance === 'dark';
  root.dataset.appearance = dark ? 'dark' : 'light';
  appearanceToggle?.setAttribute('aria-checked', String(dark));
  if (persist) try { localStorage.setItem('portfolio-appearance', dark ? 'dark' : 'light'); } catch { /* Optional persistence. */ }
}
setAppearance(root.dataset.appearance ?? 'light', false);
appearanceToggle?.addEventListener('click', () => setAppearance(root.dataset.appearance === 'dark' ? 'light' : 'dark'));
window.addEventListener('storage', event => {
  if (event.key === 'portfolio-appearance') setAppearance(event.newValue ?? 'light', false);
});
const preferencesPanel = document.getElementById('display-preferences');
const preferencesToggle = document.querySelector('[data-preferences-toggle]');
preferencesPanel?.addEventListener('toggle', () => {
  const open = preferencesPanel.matches(':popover-open');
  preferencesToggle?.setAttribute('aria-expanded', String(open));
  if (open) setMenu(false);
});


// Each modal keeps its own gallery selection and support panel.
document.querySelectorAll<HTMLElement>('[data-project-supports]').forEach(supports => {
  const buttons = supports.querySelectorAll<HTMLButtonElement>('[data-support-tab]');
  buttons.forEach(button => button.addEventListener('click', () => {
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    supports.querySelectorAll<HTMLElement>('[data-support-panel]').forEach(panel => {
      panel.hidden = panel.dataset.supportPanel !== button.dataset.supportTab;
    });
  }));
  const thumbnails = supports.querySelectorAll<HTMLButtonElement>('[data-support-thumbnail]');
  thumbnails.forEach(button => button.addEventListener('click', () => {
    const image = supports.querySelector<HTMLImageElement>('[data-support-image]');
    const caption = supports.querySelector<HTMLElement>('[data-support-caption]');
    if (!image || !caption) return;
    image.src = button.dataset.src!;
    image.alt = button.dataset.alt!;
    caption.textContent = button.dataset.caption!;
    thumbnails.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  }));
});
