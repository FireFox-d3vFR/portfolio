import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

export interface ProjectMedia {
  description?: string;
  link?: { href: string; label: string };
  imageNote?: string;
  images: { src: string; thumbnail?: string; alt: string; caption: string }[];
  pdf?: { href: string; title: string; label: string; note: string; demo?: boolean };
}

// Supports réels des projets ; les visuels Enjo sont des maquettes du concept.
const sourceMedia: Record<string, ProjectMedia> = {
  portfolio: {
    link: { href: '/identite/', label: 'Explorer l’identité visuelle' },
    description: 'Aperçus de la version de travail du portfolio.',
    imageNote:
      'Captures de la version en cours et pistes de logo. Les repères graphiques présentent la palette automnale, les polices et les détails d’interface du portfolio.',
    images: [
      {
        src: '/assets/projects/portfolio/hero.png',
        alt: 'Capture du Hero du portfolio : présentation et renard géométrique sur fond automnal',
        caption: 'Hero du portfolio, version en cours',
      },
      {
        src: '/assets/projects/portfolio/branding.png',
        alt: 'Capture de la page identité présentant les trois pistes de logo du renard et leurs aperçus sur fonds clair et sombre',
        caption: 'Identité visuelle : les pistes de logo',
      },
      {
        src: '/assets/projects/portfolio/palette.svg',
        alt: 'Repères graphiques du portfolio : renard, palette automnale, Fraunces, Manrope, JetBrains Mono et exemples de boutons',
        caption: 'Repères graphiques du portfolio',
      },
    ],
  },
  anthlabs: {
    description: 'Captures du prototype Watch Together relancé localement.',
    imageNote:
      'Version locale d’octobre 2026. L’ancien déploiement Railway reste arrêté. La planche graphique synthétise les couleurs et la typographie du code actuel.',
    images: [
      {
        src: '/assets/projects/anthlabs/accueil.png',
        alt: 'Accueil Watch Room sur fond d’affiches de films, avec création et accès à un salon',
        caption: 'Accueil du prototype',
      },
      {
        src: '/assets/projects/anthlabs/salon-video.png',
        alt: 'Salon Watch Room avec une vidéo de démonstration, ses commandes de lecture et l’indicateur de connexion WebSocket',
        caption: 'Salon avec une vidéo de démonstration',
      },
      {
        src: '/assets/projects/anthlabs/salon-vide.png',
        alt: 'Salon Watch Room sans flux, avec saisie d’une URL vidéo et bouton de téléversement',
        caption: 'Salon en attente d’un flux',
      },
      {
        src: '/assets/projects/anthlabs/reperes-graphiques.svg',
        alt: 'Synthèse graphique Watch Room : fonds noirs, accent vert, texte clair et typographie JetBrains Mono',
        caption: 'Repères graphiques du prototype actuel',
      },
    ],
    pdf: {
      href: '/assets/pdf/anthlabs-presentation.pdf',
      title: 'Présentation du hackathon AnthLabs 2026',
      label: 'Ouvrir la présentation',
      note: 'Le support de présentation du projet AnthLabs / Watch Together.',
    },
  },
  enjo: {
    description: 'Présentation du hackathon et visuels du concept Enjo.',
    imageNote:
      'Maquettes de communication et de parcours imaginées pour le pitch. Elles ne représentent pas une application développée ou publiée.',
    images: [
      {
        src: '/assets/projects/enjo/presentation.png',
        alt: 'Couverture de la présentation Enjo, avec le logo noir et jaune et une mise en situation sur téléphone',
        caption: 'Présentation du concept Enjo',
      },
      {
        src: '/assets/projects/enjo/maquette-affiche.png',
        alt: 'Maquette d’une affiche Enjo jaune et noire dans une station, créée pour illustrer le concept',
        caption: 'Mise en situation : affiche du concept',
      },
      {
        src: '/assets/projects/enjo/maquette-facade.png',
        alt: 'Maquette de communication Enjo sur une façade, avec portrait et identité jaune et blanche',
        caption: 'Mise en situation : communication extérieure',
      },
      {
        src: '/assets/projects/enjo/parcours-concept.png',
        alt: 'Diapositive du pitch Enjo illustrant un parcours mobile imaginé pour décrire une demande de service',
        caption: 'Parcours imaginé dans la présentation',
      },
      {
        src: '/assets/projects/enjo/reperes-graphiques.svg',
        alt: 'Repères graphiques Enjo : logo, palette jaune noire et blanche et polices relevées dans le PDF',
        caption: 'Repères graphiques du concept Enjo',
      },
    ],
    pdf: {
      href: '/assets/pdf/enjo-presentation.pdf',
      title: 'Enjo : présentation du hackathon de Kyoto',
      label: 'Ouvrir la présentation',
      note: 'Le support du pitch collectif présenté pendant le hackathon.',
    },
  },
  amtta: {
    description: 'Captures du site public de l’Association Mions Tir à l’Arc.',
    imageNote:
      'Pages consultées en octobre 2026. La planche reprend les couleurs du club et les polices Rubik et Quicksand.',
    images: [
      {
        src: '/assets/projects/amtta/accueil.png',
        alt: 'Accueil du site AMTTA avec son bandeau vert, sa navigation bleue et la présentation du club de tir à l’arc',
        caption: 'Accueil du site AMTTA',
      },
      {
        src: '/assets/projects/amtta/club.png',
        alt: 'Page de présentation AMTTA avec le logo, le texte du club et les cartes de ses valeurs',
        caption: 'Présentation et valeurs du club',
      },
      {
        src: '/assets/projects/amtta/rejoindre.png',
        alt: 'Page Nous rejoindre du site AMTTA, avec la présentation de l’adhésion et les informations pratiques',
        caption: 'Parcours d’adhésion au club',
      },
      {
        src: '/assets/projects/amtta/reperes-graphiques.svg',
        alt: 'Repères graphiques AMTTA : vert, bleu, jaune, gris foncé et polices Rubik et Quicksand',
        caption: 'Repères graphiques du site AMTTA',
      },
    ],
  },
  osteo: {
    description: 'Aperçus du site Ostéo Chartreuse en cours de finalisation.',
    imageNote:
      'Captures de la version de travail d’octobre 2026, avec certains visuels encore provisoires. Repères graphiques relevés dans l’aperçu WordPress.',
    images: [
      {
        src: '/assets/projects/osteo/accueil.png',
        alt: 'Accueil Ostéo Chartreuse avec présentation des deux praticiennes et illustration de salle de consultation',
        caption: 'Accueil du site en cours de finalisation',
      },
      {
        src: '/assets/projects/osteo/osteopathie.png',
        alt: 'Page L’ostéopathie avec son introduction, des tons bleu brume et une illustration de consultation',
        caption: 'Page L’ostéopathie',
      },
      {
        src: '/assets/projects/osteo/equipe.png',
        alt: 'Page L’équipe présentant les praticiennes et les accès à leurs parcours',
        caption: 'Page L’équipe',
      },
      {
        src: '/assets/projects/osteo/reperes-graphiques.svg',
        alt: 'Repères graphiques Ostéo Chartreuse : turquoise, bleu brume, gris ardoise et polices Spectral et Rethink Sans',
        caption: 'Repères graphiques du site Ostéo Chartreuse',
      },
    ],
  },
};

// Les images matricielles sont locales et optimisées une seule fois à la compilation.
// Les planches SVG restent vectorielles, sans transformation de leurs polices.
const sources = import.meta.glob<ImageMetadata>('../../assets/projects/**/*.png', {
  eager: true,
  import: 'default',
});
export const projectMedia: Record<string, ProjectMedia> = Object.fromEntries(
  await Promise.all(
    Object.entries(sourceMedia).map(async ([id, media]) => [
      id,
      {
        ...media,
        images: await Promise.all(
          media.images.map(async (image) => {
            if (image.src.endsWith('.svg')) return image;
            const source =
              sources[image.src.replace('/assets/projects/', '../../assets/projects/')];
            if (!source) throw new Error('Support introuvable : ' + image.src);
            const [preview, thumbnail] = await Promise.all([
              getImage({
                src: source,
                width: Math.min(1440, source.width),
                format: 'webp',
                quality: 85,
              }),
              getImage({
                src: source,
                width: Math.min(160, source.width),
                format: 'webp',
                quality: 75,
              }),
            ]);
            return { ...image, src: preview.src, thumbnail: thumbnail.src };
          }),
        ),
      },
    ]),
  ),
);
