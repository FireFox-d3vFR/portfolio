document.querySelectorAll<HTMLButtonElement>('[data-copy-email]').forEach((button) => {
  button.addEventListener('click', async () => {
    const status = document.getElementById(button.dataset.copyFeedback!);
    if (!status) return;
    try {
      await navigator.clipboard.writeText(button.dataset.copyEmail!);
      status.textContent = 'Adresse copiée !';
    } catch {
      status.textContent =
        'La copie est indisponible. Vous pouvez sélectionner l’adresse dans la carte Email.';
    }
  });
});
