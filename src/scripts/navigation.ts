const header = document.querySelector<HTMLElement>('[data-header]');
const backToTop = document.querySelector<HTMLAnchorElement>('[data-back-to-top]');
const sectionLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-section-link]')];
const navigationSections = [...new Set(sectionLinks.map((link) => link.dataset.sectionLink!))]
  .map((id) => document.getElementById(id))
  .filter((section): section is HTMLElement => !!section);
function updateActiveSection() {
  if (!navigationSections.length) return;
  const readingLine = (header?.getBoundingClientRect().bottom ?? 64) + 80;
  let active = navigationSections[0].id;
  for (const section of navigationSections) {
    if (section.getBoundingClientRect().top <= readingLine) active = section.id;
  }
  // La dernière section peut être plus courte que la fenêtre.
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
    active = navigationSections[navigationSections.length - 1].id;
  }
  sectionLinks.forEach((link) => {
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
  toggle?.querySelectorAll('svg').forEach((icon, index) => {
    icon.classList.toggle('hidden', index === (open ? 0 : 1));
  });
}
toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
window.matchMedia('(min-width: 1024px)').addEventListener('change', (event) => {
  if (event.matches) setMenu(false);
});

export { setMenu };
