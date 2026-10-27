document.querySelectorAll<HTMLButtonElement>('[data-entry]').forEach((button) => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById('detail-' + button.dataset.entry);
    if (dialog instanceof HTMLDialogElement) {
      const previous = button.closest<HTMLDialogElement>('dialog');
      // Fermer la modale avant le détail lié, puis la restaurer au retour.
      if (previous?.open) {
        const previousScroll = previous.scrollTop;
        previous.close();
        dialog.addEventListener(
          'close',
          () => {
            previous.showModal();
            previous.scrollTop = previousScroll;
            button.focus({ preventScroll: true });
          },
          { once: true },
        );
      }
      dialog.showModal();
      dialog.scrollTop = 0;
    }
  });
});
document.querySelectorAll<HTMLDialogElement>('.entry-dialog').forEach((dialog) => {
  dialog.querySelector('[data-close-dialog]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  });
});
