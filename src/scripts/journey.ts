import { getJourneyLayout, type Category, type JourneyItem } from '../lib/journey';
const graph = document.getElementById('journey-graph');
const rowElements = [...document.querySelectorAll<HTMLLIElement>('[data-journey-id]')];
const items: JourneyItem[] = rowElements.map((element) => ({
  id: element.dataset.journeyId!,
  category: element.dataset.category as Category,
  start: element.dataset.start!,
  end: element.dataset.end || null,
}));
const filters = [...document.querySelectorAll<HTMLButtonElement>('button[data-category]')];
function updateGraph() {
  const visible = filters
    .filter((button) => button.getAttribute('aria-pressed') === 'true')
    .map((button) => button.dataset.category);
  const { rows, count } = getJourneyLayout(items.filter((item) => visible.includes(item.category)));
  graph?.style.setProperty('--lanes', String(Math.max(count, 1)));
  rowElements.forEach((element) => {
    element.hidden = !visible.includes(element.dataset.category);
  });
  for (const row of rows) {
    const element = rowElements.find((item) => item.dataset.journeyId === row.entry.id)!;
    element.querySelector('.git-year')!.textContent = row.year;
    const lanes = element.querySelector('.git-lanes')!;
    const fragment = document.createDocumentFragment();
    const addSpan = (classes: string, lane: number, capProgress = 0) => {
      const span = document.createElement('span');
      span.className = classes;
      span.style.setProperty('--lane', String(lane));
      span.style.setProperty('--cap-progress', String(capProgress));
      fragment.append(span);
    };
    row.lines.forEach((line) =>
      addSpan(
        'git-line cat-' + line.category + (line.capped ? ' is-capped' : ''),
        line.lane,
        line.capProgress,
      ),
    );
    if (row.upward) addSpan('git-line git-line-up cat-' + row.entry.category, row.lane);
    addSpan(
      'git-node cat-' +
        row.entry.category +
        (row.entry.end === row.entry.start ? ' is-point' : '') +
        (!row.entry.end ? ' is-ongoing' : ''),
      row.lane,
    );
    lanes.replaceChildren(fragment);
  }
  const empty = document.querySelector<HTMLElement>('[data-journey-empty]');
  const now = document.querySelector<HTMLElement>('[data-journey-now]');
  if (empty) empty.hidden = rows.length !== 0;
  if (now) now.hidden = rows.length === 0;
  const status = document.querySelector('[data-journey-status]');
  if (status) status.textContent = rows.length + ' éléments affichés dans le parcours.';
}
filters.forEach((button) =>
  button.addEventListener('click', () => {
    const active = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('is-active', active);
    updateGraph();
  }),
);
updateGraph();
