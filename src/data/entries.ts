import { projects } from './portfolio';
import type { Category } from '../lib/journey';

export interface Entry {
  id: string;
  category: Category;
  title: string;
  org: string;
  shortOrg?: string;
  kind: string;
  location?: string;
  start: string;
  end: string | null;
  dates: string;
  summary: string;
  details: { title?: string; items: string[] }[];
  tech?: string[];
  highlight?: string;
  note?: string;
  relatedEntry?: { id: string; label: string };
  logoId?: string;
  visual?: 'azor' | 'watch' | 'enjo' | 'amtta' | 'osteo' | 'portfolio';
  link?: { label: string; href: string };
}

function documentedProject(metadata: Omit<Entry, 'summary' | 'details' | 'tech' | 'note' | 'link'>): Entry {
  const project = projects.find(project => project.id === (metadata.id === 'osteo' ? 'cabinet' : metadata.id === 'orange-project' ? 'orange' : metadata.id));
  if (!project) throw new Error('Missing documented project: ' + metadata.id);
  return { ...metadata, summary: project.summary, details: [
    {title: 'Contexte', items: [project.context]},
    {title: 'Ma contribution', items: project.contributions},
  ], tech: project.technologies, note: project.takeaway, link: project.link };
}

export const ENTRIES: Entry[] = [
  {
    relatedEntry: { id: 'orange-project', label: 'Voir les réalisations chez Orange' },
    id: 'orange', category: 'experience', title: 'Développeur Web & Applicatif',
    org: 'Orange', kind: 'Alternance', location: 'Lyon (69)',
    start: '2023-09', end: '2026-09', dates: 'Septembre 2023 à septembre 2026',
    summary: 'Trois ans d’alternance pour passer du frontend à un rôle Full Stack, en découvrant aussi le Cloud et la mise en production.',
    details: [
      { title: 'Le cadre de mon alternance', items: ['Au sein du Département Transmission d’Orange France, travail sur des outils internes avec les développeurs, les responsables produit, les équipes métier et les équipes techniques.', 'Une expérience menée pendant mon Bachelor puis mon Mastère en développement web et mobile.'] },
      { title: 'Ma progression sur trois ans', items: ['Première année : comprendre l’existant, participer à la refonte et réaliser mes premiers développements, principalement côté frontend.', 'Deuxième année : approfondir les environnements Cloud, la livraison et la supervision, avec l’accompagnement de l’équipe.', 'Troisième année : prendre en charge des fonctionnalités backend et frontend plus complètes, avec davantage d’autonomie et des ajustements issus des retours utilisateurs.'] },
      { title: 'Ce que j’en retiens', items: ['Apprendre à relier un besoin métier aux contraintes du développement et de la production.', 'Avancer en équipe, faire valider les choix et faire évoluer les fonctionnalités à partir de leur usage réel.'] },
    ],
    tech: ['Symfony', 'Vue.js', 'Cloud Foundry', 'GitLab CI/CD'],
    note: 'Les réalisations applicatives sont présentées séparément dans les projets professionnels. Cette progression s’inscrit dans un travail collectif.',
  },
  {
    id: "mcdonalds",
    category: "experience",
    title: "Employé Service Restauration",
    org: "McDonald's",
    kind: "CDI étudiant",
    location: "Chaponnay (69)",
    start: "2022-06",
    end: "2024-03",
    dates: "Juin 2022 à mars 2024",
    summary:
      "Emploi étudiant exercé parallèlement aux études, développant le sens du service, la réactivité, l'organisation et le travail en équipe.",
    details: [
      {
        items: [
          "Accueil, prise de commandes et relation client.",
          "Collaboration en équipe pendant les périodes de forte affluence.",
          "Respect des procédures internes, des règles d'hygiène et des standards de qualité.",
        ],
      },
    ],
  },
  {
    id: "larbi",
    category: "experience",
    title: "Intégrateur Web & Digital",
    org: "Larbi des Revêtements",
    kind: "Stage",
    location: "Villeurbanne (69)",
    start: "2022-05",
    end: "2022-07",
    dates: "Mai 2022 à juillet 2022",
    summary: "Première expérience web : maintenance d'un site vitrine Joomla et participation à la communication digitale.",
    details: [
      {
        items: [
          "Maintenance et évolution du site Joomla.",
          "Intégration et organisation de contenus web.",
          "Création de supports visuels et contribution aux réseaux sociaux.",
        ],
      },
    ],
    tech: ["Joomla", "HTML", "CSS", "CMS", "Gestion de contenu"],
  },
  {
    id: "mastere",
    category: "education",
    title: "Mastère Développement Web & Mobile",
    org: "ESTIAM",
    kind: "Formation",
    location: "Lyon (69)",
    start: "2024-09",
    end: "2026-09",
    dates: "2024 à 2026",
    summary: "Formation suivie en alternance.",
    details: [],
  },
  {
    id: "bachelor",
    category: "education",
    title: "Bachelor Data, Application Design",
    org: "ESTIAM",
    kind: "Formation",
    location: "Lyon (69)",
    start: "2023-09",
    end: "2024-07",
    dates: "2023 à 2024",
    summary: "",
    details: [],
  },
  {
    id: "bts",
    category: "education",
    title: "BTS Systèmes Numériques",
    org: "Lycée Marcel Sembat",
    kind: "Formation",
    location: "Vénissieux (69)",
    start: "2021-09",
    end: "2023-07",
    dates: "2021 à 2023",
    summary: "",
    details: [],
  },
  {
    id: "bac",
    category: "education",
    title: "Baccalauréat technologique STI2D",
    org: "Lycée Frédéric Faÿs",
    kind: "Formation",
    location: "Villeurbanne (69)",
    start: "2019-09",
    end: "2021-07",
    dates: "2019 à 2021",
    summary: "",
    details: [],
  },
  documentedProject({
    id: "anthlabs",
    category: "hackathons",
    title: "AnthLabs : visionnage synchronisé",
    org: "Hackathon ESTIAM 2026",
    kind: "Hackathon",
    start: "2026-07",
    end: "2026-07",
    dates: "Juillet 2026",
    visual: "watch",
  }),
  documentedProject({
    id: "enjo",
    category: "hackathons",
    title: "Enjo : hackathon international de Kyoto",
    org: "Hackathon international",
    kind: "Hackathon",
    location: "Kyoto, Japon",
    start: "2026-03",
    end: "2026-03",
    dates: "Mars 2026",
    highlight: "2ᵉ place sur 9 équipes",
    visual: "enjo",
  }),
  documentedProject({
    id: "amtta",
    category: "projects",
    title: "Association Mions Tir à l'Arc (AMTTA)",
    org: "AMTTA",
    kind: "Bénévolat",
    start: "2022-05",
    end: null,
    dates: "Depuis mai 2022",
    visual: "amtta",
  }),
  documentedProject({
    id: "osteo",
    category: "projects",
    title: "Site vitrine d’un cabinet d’ostéopathie",
    org: "Cabinet d’ostéopathie en Chartreuse",
    shortOrg: "Ostéo Chartreuse",
    kind: "Projet indépendant",
    start: "2026-07",
    end: null,
    dates: "Depuis juillet 2026",
    visual: "osteo",
  }),
  documentedProject({
    id: 'portfolio', category: 'projects', title: 'Portfolio personnel',
    org: 'Projet personnel', kind: 'Projet personnel',
    start: '2026-10', end: null, dates: 'Depuis octobre 2026', visual: 'portfolio',
  })
];

// Separate professional project from the apprenticeship; no extra journey event.
export const ORANGE_PROJECT = documentedProject({
  id: 'orange-project', logoId: 'orange', category: 'experience',
  title: 'Applications métier · Orange', org: 'Orange', kind: 'Projet professionnel',
  location: 'Lyon (69)', start: '2023-09', end: '2026-09',
  dates: 'Septembre 2023 à septembre 2026', visual: 'azor',
});

const projectOrder = ['orange-project', 'amtta', 'osteo', 'portfolio', 'anthlabs', 'enjo'];
export const PROJECTS = projectOrder.map(id => {
  const entry = id === ORANGE_PROJECT.id ? ORANGE_PROJECT : ENTRIES.find(entry => entry.id === id);
  if (!entry) throw new Error('Missing project entry: ' + id);
  return entry;
});
export const DETAIL_ENTRIES = [...ENTRIES, ORANGE_PROJECT];
