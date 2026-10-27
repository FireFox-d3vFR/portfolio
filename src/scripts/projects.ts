// Changer de vue en conservant les mêmes cartes et boutons de modale.
const projectCollection = document.getElementById('project-collection');
const projectViewControls = document.querySelector<HTMLElement>('[data-project-view-controls]');
const projectViewButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-project-view]')];
function setProjectView(view: string, persist = true) {
  if (!projectCollection || !['grid', 'list'].includes(view)) return;
  projectCollection.dataset.view = view;
  projectViewButtons.forEach((button) =>
    button.setAttribute('aria-pressed', String(button.dataset.projectView === view)),
  );
  const status = document.querySelector('[data-project-view-status]');
  if (status)
    status.textContent =
      'Vue ' +
      (view === 'grid' ? 'grille' : 'liste') +
      ', ' +
      projectCollection.children.length +
      ' projets.';
  if (persist)
    try {
      localStorage.setItem('portfolio-project-view', view);
    } catch {
      /* La mémorisation de la préférence reste facultative. */
    }
}
if (projectCollection && projectViewControls) {
  projectViewControls.hidden = false;
  let initialView = 'grid';
  try {
    initialView = localStorage.getItem('portfolio-project-view') ?? 'grid';
  } catch {
    /* La grille reste disponible sans accès au stockage. */
  }
  setProjectView(['grid', 'list'].includes(initialView) ? initialView : 'grid', false);
  projectViewButtons.forEach((button) =>
    button.addEventListener('click', () => setProjectView(button.dataset.projectView!)),
  );
}
