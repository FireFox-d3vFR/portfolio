const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  root.classList.add('motion-ready');
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  reduceMotion.addEventListener('change', (event) => {
    if (event.matches) root.classList.remove('motion-ready');
  });
}
