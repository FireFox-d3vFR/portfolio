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
