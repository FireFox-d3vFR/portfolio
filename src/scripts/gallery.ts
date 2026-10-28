import { openDialog } from './dialogs';

// Chaque modale conserve sa sélection d’image et de support.
document.querySelectorAll<HTMLElement>('[data-project-supports]').forEach((supports) => {
  const buttons = supports.querySelectorAll<HTMLButtonElement>('[data-support-tab]');
  buttons.forEach((button) =>
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      supports.querySelectorAll<HTMLElement>('[data-support-panel]').forEach((panel) => {
        panel.hidden = panel.dataset.supportPanel !== button.dataset.supportTab;
      });
    }),
  );
  const thumbnails = supports.querySelectorAll<HTMLButtonElement>('[data-support-thumbnail]');
  thumbnails.forEach((button) =>
    button.addEventListener('click', () => {
      const image = supports.querySelector<HTMLImageElement>('[data-support-image]');
      const caption = supports.querySelector<HTMLElement>('[data-support-caption]');
      if (!image || !caption) return;
      image.src = button.dataset.src!;
      image.alt = button.dataset.alt!;
      caption.textContent = button.dataset.caption!;
      thumbnails.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    }),
  );
});

const viewer = document.getElementById('project-image-viewer');
const enlarged = viewer?.querySelector<HTMLImageElement>('[data-enlarged-image]');
const canvas = viewer?.querySelector<HTMLElement>('[data-image-canvas]');
const sizeButton = viewer?.querySelector<HTMLButtonElement>('[data-image-size]');
document.querySelectorAll<HTMLButtonElement>('[data-enlarge-image]').forEach((button) => {
  button.addEventListener('click', () => {
    const supports = button.closest('[data-project-supports]');
    const image = supports?.querySelector<HTMLImageElement>('[data-support-image]');
    if (!(viewer instanceof HTMLDialogElement) || !enlarged || !image) return;
    enlarged.src = image.currentSrc || image.src;
    enlarged.alt = image.alt;
    const caption = viewer.querySelector('[data-enlarged-caption]');
    if (caption)
      caption.textContent = supports?.querySelector('[data-support-caption]')?.textContent ?? '';
    canvas?.classList.remove('is-natural-size');
    if (sizeButton) {
      sizeButton.textContent = 'Taille réelle';
      sizeButton.setAttribute('aria-pressed', 'false');
    }
    openDialog(viewer, button);
    if (canvas) {
      canvas.scrollTop = 0;
      canvas.scrollLeft = 0;
    }
  });
});
sizeButton?.addEventListener('click', () => {
  const natural = canvas?.classList.toggle('is-natural-size') ?? false;
  sizeButton.setAttribute('aria-pressed', String(natural));
  sizeButton.textContent = natural ? 'Ajuster à l’écran' : 'Taille réelle';
  if (canvas) {
    canvas.scrollTop = 0;
    canvas.scrollLeft = 0;
  }
});
