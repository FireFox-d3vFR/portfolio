export interface ProjectMedia {
  description?: string;
  link?: { href: string; label: string };
  imageNote?: string;
  images: { src: string; alt: string; caption: string }[];
  pdf?: { href: string; title: string; label: string; note: string };
}

// Les captures du portfolio sont réelles ; les autres supports restent provisoires.
const demoImages = [
  {
    src: '/assets/projects/demo-interface.svg',
    alt: 'Composition abstraite d’une interface, sans contenu du projet',
    caption: 'Interface (visuel provisoire)',
  },
  {
    src: '/assets/projects/demo-palette.svg',
    alt: 'Exemple de planche de couleurs et de formes, sans identité du projet',
    caption: 'Planche graphique (visuel provisoire)',
  },
];
const demoPdf = {
  href: '/assets/pdf/cv-jonathan-maquenhem.pdf',
  title: 'CV de Jonathan Maquenhem',
  label: 'Ouvrir le PDF de démonstration',
  note: 'Le CV sert temporairement à tester ce support. Il sera remplacé par la présentation du projet.',
};

export const projectMedia: Record<string, ProjectMedia> = {
  portfolio: {
    link: { href: '/identite/', label: 'Explorer l’identité visuelle' },
    description: 'Aperçus de la version de travail du portfolio.',
    imageNote:
      'Captures de la version en cours, en thème automnal. Les pistes de logo retracent le travail sur l’identité visuelle.',
    images: [
      {
        src: '/assets/projects/portfolio/hero.png',
        alt: 'Capture du Hero du portfolio : présentation de Jonathan et renard géométrique sur fond automnal',
        caption: 'Hero du portfolio, version en cours',
      },
      {
        src: '/assets/projects/portfolio/branding.png',
        alt: 'Capture de la page identité présentant les trois pistes de logo du renard et leurs aperçus sur fonds clair et sombre',
        caption: 'Identité visuelle : les pistes de logo',
      },
      {
        src: '/assets/projects/portfolio/palette.svg',
        alt: 'Palette du portfolio : orange brûlé, brun et charbon sur fond crème',
        caption: 'Palette automnale du portfolio',
      },
    ],
  },
  anthlabs: { images: demoImages, pdf: demoPdf },
  enjo: { images: demoImages, pdf: demoPdf },
  amtta: { images: demoImages },
  osteo: { images: demoImages },
};
