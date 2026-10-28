// Une entrée d’historique par niveau : fiche, fiche liée, puis image agrandie.
type DialogFrame = { dialog: HTMLDialogElement; opener: HTMLElement; scroll: number };
const frames = new Map<string, DialogFrame>();
const stateKey = 'portfolioDialogs';
let stack: string[] = [];
let returning = false;

// Un rechargement démarre avec une page sans modale ouverte.
if (history.state?.[stateKey]) {
  const state = { ...history.state };
  delete state[stateKey];
  history.replaceState(state, '');
}

function scroller(dialog: HTMLDialogElement) {
  return dialog.querySelector<HTMLElement>('.detail-layout') ?? dialog;
}

function display(next: string[]) {
  const previous = frames.get(stack.at(-1) ?? '');
  if (previous?.dialog.open) {
    previous.scroll = scroller(previous.dialog).scrollTop;
    previous.dialog.close();
  }
  stack = next;
  const current = frames.get(stack.at(-1) ?? '');
  if (current) {
    current.dialog.showModal();
    scroller(current.dialog).scrollTop = current.scroll;
  } else {
    previous?.opener.focus({ preventScroll: true });
  }
}

export function openDialog(dialog: HTMLDialogElement, opener: HTMLElement) {
  if (returning || stack.includes(dialog.id)) return;
  frames.set(dialog.id, { dialog, opener, scroll: 0 });
  const next = [...stack, dialog.id];
  history.pushState({ ...history.state, [stateKey]: next }, '');
  display(next);
}

function closeDialog() {
  if (!stack.length || returning) return;
  returning = true;
  history.back();
}

window.addEventListener('popstate', (event) => {
  returning = false;
  const next: string[] = event.state?.[stateKey] ?? [];
  const previous = frames.get(stack.at(-1) ?? '');
  display(next.filter((id) => frames.has(id)));
  // Retrouver le déclencheur dans la fiche parente après fermeture d’une image.
  if (previous && stack.length && previous.opener.closest('dialog')?.open) {
    previous.opener.focus({ preventScroll: true });
  }
});

document.querySelectorAll<HTMLButtonElement>('[data-entry]').forEach((button) => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById('detail-' + button.dataset.entry);
    if (dialog instanceof HTMLDialogElement) openDialog(dialog, button);
  });
});
document.querySelectorAll<HTMLDialogElement>('.entry-dialog').forEach((dialog) => {
  dialog
    .querySelectorAll('[data-close-dialog]')
    .forEach((button) => button.addEventListener('click', closeDialog));
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeDialog();
  });
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      closeDialog();
  });
});
