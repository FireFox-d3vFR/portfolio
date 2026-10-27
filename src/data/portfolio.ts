// Set hosting after the public deployment is confirmed.
export const footer = {
  repository: 'https://github.com/FireFox-d3vFR/portfolio',
  author: 'FireFox-d3vFR',
  hosting: null as { label: string; href: string } | null,
};

export const contact = {
  email: 'maquenhem.jonathan.emploi@gmail.com',
  github: 'https://github.com/FireFox-d3vFR',
  linkedin: 'https://www.linkedin.com/in/jonathan-maquenhem/',
};

export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  status: string;
  summary: string;
  technologies: string[];
  context: string;
  contributions: string[];
  takeaway: string;
  link?: { label: string; href: string };
}

export const projects: Project[] = [
  {
    id: 'orange',
    title: 'Applications métier chez Orange',
    category: 'Expérience professionnelle',
    period: '2023 à 2026',
    status: 'Alternance de trois ans',
    summary: 'De la refonte applicative à la mise en production : trois années au service des équipes métier de la Transmission.',
    technologies: ['Symfony', 'Vue.js', 'Cloud Foundry', 'GitLab CI/CD'],
    context: 'Au sein du Département Transmission d’Orange France, contribution à une application interne destinée aux équipes opérationnelles et de production réseau.',
    contributions: [
      'Participation à la refonte du socle Symfony et Vue.js, en conservant les besoins métier de l’application existante.',
      'Préparation des environnements Cloud Foundry, des services associés et des pipelines GitLab CI/CD, avec l’accompagnement de l’équipe.',
      'Développement frontend et backend d’un module de suivi des ordres de travaux : import quotidien, recherche, filtres, prise en charge et exports.',
      'Améliorations à partir des retours utilisateurs, fiabilisation du rafraîchissement et contribution à la supervision.',
    ],
    takeaway: 'Cette expérience m’a permis de passer du frontend au développement Full Stack et de participer à la mise en production. Les supports internes ne sont pas publics.',
  },
  {
    id: 'anthlabs',
    title: 'AnthLabs · Visionnage synchronisé',
    category: 'Hackathon ESTIAM',
    period: 'Juillet 2026',
    status: 'Prototype collectif · démonstration arrêtée',
    summary: 'Assembler et déployer une application permettant de regarder une vidéo ensemble, à distance.',
    technologies: ['Terraform', 'GitHub Actions', 'Docker', 'Railway'],
    context: 'Un prototype collectif, également documenté sous le nom Watch Together, réalisé pendant un hackathon. Le projet associait un backend Rust, un frontend React et une chaîne vidéo FFmpeg/HLS.',
    contributions: [
      'Configuration des environnements et description d’une partie de l’infrastructure avec Terraform.',
      'Mise en place des workflows GitHub Actions et intégration des composants Docker.',
      'Assemblage et déploiement du projet sur Railway pour rendre la démonstration accessible.',
    ],
    takeaway: 'La création d’une session, le partage de son lien et la lecture synchronisée fonctionnaient à la fin du hackathon. Ma contribution principale portait sur l’infrastructure et la livraison.',
    link: { label: 'Voir l’organisation sur GitHub', href: 'https://github.com/AnthLabs' },
  },
  {
    id: 'amtta',
    title: 'Association Mions Tir à l’Arc',
    category: 'Projet associatif',
    period: 'Depuis mai 2022',
    status: 'Site en ligne · suivi dans la durée',
    summary: 'Faire évoluer un site associatif pour rendre les informations du club plus claires et le contact plus direct.',
    technologies: ['Wix', 'Conception web', 'Contenu', 'UX'],
    context: 'Impliqué dans l’association, j’ai repris un site existant pour le faire évoluer avec les besoins des adhérents, des futurs pratiquants et des visiteurs.',
    contributions: [
      'Refonte progressive de la présentation, de la structure des pages et de la navigation.',
      'Réorganisation des informations pratiques et simplification du parcours de contact.',
      'Actualisation des contenus et suivi du site depuis 2022.',
    ],
    takeaway: 'J’y apprends à faire évoluer un site existant en fonction des besoins du club et à le suivre dans la durée.',
    link: { label: 'Visiter le site de l’association', href: 'https://amtta-mions.fr' },
  },
  {
    id: 'enjo',
    title: 'Enjo · Un concept imaginé à Kyoto',
    category: 'Hackathon international',
    period: 'Mars 2026',
    status: 'Conception produit · 2ᵉ sur 9 équipes',
    summary: 'Imaginer un service de mise en relation pour des prestations à domicile, dans un contexte international.',
    technologies: ['Conception produit', 'Parcours utilisateur', 'Priorisation'],
    context: 'Lors d’un hackathon au KCGI à Kyoto, conception collective d’un service mobile pour trouver des professionnels disponibles à proximité.',
    contributions: [
      'Réflexion sur le besoin, les fonctionnalités et le parcours utilisateur.',
      'Contribution aux échanges sur la faisabilité technique et le périmètre d’une première version.',
      'Participation à la préparation du contenu présenté au jury.',
    ],
    takeaway: 'Le livrable était un concept produit et une présentation, sans application développée. Le projet collectif a obtenu la deuxième place sur neuf équipes.',
  },
  {
    id: 'cabinet',
    title: 'Site vitrine d’un cabinet d’ostéopathie',
    category: 'Projet indépendant',
    period: '2026',
    status: 'En cours de finalisation',
    summary: 'Concevoir un site vitrine simple et rassurant pour deux praticiennes, de la structure à l’intégration.',
    technologies: ['WordPress', 'Gutenberg', 'HTML', 'CSS'],
    context: 'Un projet de site vitrine pour présenter le cabinet, ses deux praticiennes, leur approche et les informations utiles aux patients.',
    contributions: [
      'Conception de la structure, de la hiérarchie des contenus et des composants visuels.',
      'Travail sur l’identité graphique et la mise en page responsive.',
      'Intégration WordPress/Gutenberg et personnalisation HTML/CSS, avec des itérations visuelles.',
    ],
    takeaway: 'La structure et une grande partie du design sont en place. Des contenus et ajustements restent à valider avant la première livraison.',
  },
  {
    id: 'portfolio',
    title: 'Portfolio personnel',
    category: 'Projet personnel',
    period: 'Depuis octobre 2026',
    status: 'En cours de réalisation',
    summary: 'Construire un espace personnel pour présenter mon parcours et mes réalisations, avec une identité visuelle qui me ressemble.',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    context: 'Créer un point d’entrée au-delà de mon profil GitHub pour montrer mes projets, expliquer mes contributions et permettre de me contacter. Une première maquette réalisée avec Lovable a servi de référence avant son adaptation en site statique avec Astro.',
    contributions: [
      'Cadrage des contenus à partir de mes expériences, de mes projets et de leurs contributions réelles.',
      'Choix d’une identité automnale, des couleurs et des typographies, puis ajustements progressifs des sections et des interactions.',
      'Adaptation de la maquette React en composants Astro, avec des interactions en TypeScript : vues grille et liste, modales, galeries et parcours inspiré de Git.',
      'Mise en place de quatre ambiances saisonnières, d’un choix automatique ou manuel et d’un mode sombre.',
      'Travail sur le responsive, la navigation au clavier et le respect des préférences de mouvement.',
    ],
    takeaway: 'Le portfolio est encore en cours : identité du renard et supports de certains projets à affiner. Le site est généré statiquement avec Astro ; l’hébergement sur Vercel est prévu, mais le déploiement public n’est pas encore confirmé.',
    link: { label: 'Voir le code du portfolio sur GitHub', href: 'https://github.com/FireFox-d3vFR/portfolio' },
  },
];

export const qualities = [
  ['Curiosité', 'Comprendre le pourquoi, explorer de nouvelles pistes et continuer à apprendre.'],
  ['Autonomie', 'Prendre un sujet en main, chercher des solutions et savoir quand échanger.'],
  ['Polyvalence', 'Faire le lien entre l’interface, la logique métier et le déploiement.'],
  ['Sens métier', 'Comprendre les usages et les contraintes pour proposer une solution adaptée.'],
];

export const skills = [
  { number: '01', title: 'Backend', description: 'Structurer les données et traduire les besoins en logique applicative.', items: ['PHP', 'Symfony', 'API', 'MariaDB', 'SQL'] },
  { number: '02', title: 'Frontend', description: 'Donner forme aux fonctionnalités avec des interfaces claires.', items: ['Vue.js', 'JavaScript', 'HTML', 'CSS'] },
  { number: '03', title: 'DevOps & Cloud', description: 'Accompagner le code jusqu’à son environnement d’utilisation.', items: ['Cloud Foundry', 'GitLab CI/CD', 'Docker', 'Terraform', 'Prometheus'] },
];
