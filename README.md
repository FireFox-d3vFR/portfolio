# Mon portfolio

Mon portfolio de développeur Full Stack : mon parcours, mes projets et mes contributions, dans un univers saisonnier inspiré du renard et de Git.

**[Découvrir le site](https://jonathan-mqhm.vercel.app/)**

Le site est développé avec **Astro, TypeScript et Tailwind CSS 4**, puis publié sur **Vercel**. Il génère des pages statiques ; les interactions utilisent les API du navigateur, sans runtime React.

## Ce que présente le site

- Une présentation de mon approche et de mes compétences.
- Six projets en grille ou en liste : AZOR chez Orange, AMTTA, le cabinet d’ostéopathie, ce portfolio, AnthLabs et Enjo.
- Des fiches détaillant le contexte, ma contribution et les supports disponibles : captures, repères graphiques et présentations PDF selon les projets.
- Un parcours chronologique filtrable par expériences, formations, projets et hackathons.
- Quatre palettes saisonnières, choisies automatiquement selon le mois ou manuellement, avec une apparence claire ou sombre.
- Un accès au CV, à LinkedIn et à GitHub, ainsi qu’un bouton pour copier mon email. La carte Email ouvre la messagerie via un lien `mailto:`.

La navigation s’adapte aux mobiles, tablettes et ordinateurs. Les fiches gardent leur bouton de fermeture visible et prennent en charge le retour du navigateur. Les captures peuvent être agrandies, affichées à leur taille réelle ou ajustées à l’écran.

La page [Identité visuelle](https://jonathan-mqhm.vercel.app/identite/) explique les choix graphiques et présente les palettes, les variantes du renard et les favicons. La page [Informations du site](https://jonathan-mqhm.vercel.app/informations/) rassemble les informations de publication et de confidentialité. Une page 404 complète ces trois pages principales.

## Démarrer en local

Prérequis : **Node.js 24 et npm**. Depuis le dossier du projet :

```sh
nvm use
npm ci
npm run dev
```

Si Node.js est installé sans nvm, ignorer `nvm use`. La version attendue est indiquée dans `.nvmrc`.

- Accueil : `http://localhost:4321/`
- Identité visuelle : `http://localhost:4321/identite/`
- Informations du site : `http://localhost:4321/informations/`

Utiliser l’adresse affichée dans le terminal si ce port est déjà occupé.

## Vérifier et compiler

```sh
npm run check
npm test
npm run build
npm run preview
```

- `check` vérifie Astro et TypeScript.
- Les tests couvrent les règles du graphe du parcours, le calendrier saisonnier et la priorité des préférences.
- `build` génère le site statique dans `dist/` et optimise les images.
- `preview` sert le résultat compilé pour le vérifier en local.

Les interactions de navigation, les modales, les galeries, la copie de l’email et les mises en page doivent également être vérifiées dans le navigateur.

### Formatage

```sh
npm run format:check
npm run format
```

Prettier et son extension Astro harmonisent les sources, les tests et les fichiers de configuration. `.editorconfig` fournit les mêmes repères aux éditeurs. Les images, `dist/` et les documents de suivi ne sont pas reformatés par ces commandes.

## Organisation du projet

| Emplacement | Contenu |
| --- | --- |
| `src/pages/` | Accueil, identité visuelle, informations, page 404, sitemap et robots.txt |
| `src/components/sections/` | Hero, présentation, compétences, projets, parcours et contact |
| `src/components/navigation/` | Navigation, préférences, saisons et retour en haut |
| `src/components/projects/` | Fiches, logos, supports et vue agrandie des images |
| `src/components/identity/` | Renards, empreintes, disponibilité et favicons |
| `src/components/ui/` et `src/components/decoration/` | Éléments réutilisables et décors |
| `src/data/projects/` | Textes, logos et supports des projets |
| `src/data/journey/` | Événements du parcours et liens avec les projets |
| `src/data/identity/` | Variantes du renard et état de disponibilité |
| `src/data/about.ts`, `src/data/skills.ts`, `src/data/site.ts` | Qualités, compétences, coordonnées et configuration des statistiques |
| `src/scripts/portfolio.ts` | Point d’entrée des interactions, réparties en modules |
| `src/lib/` | Règles du calendrier et du graphe, testables sans navigateur |
| `src/styles/portfolio.css` | Palettes, styles et adaptations aux différents écrans |
| `src/assets/` | Logos, illustrations et captures optimisés au build |
| `public/assets/` | CV, présentations PDF et supports servis avec des chemins stables |
| `tests/` | Tests exécutés avec Node.js |

Le [guide du code](docs/organisation-code.md) donne des repères complémentaires pour retrouver les composants.

## Mettre à jour les contenus

- **CV** : remplacer `public/assets/pdf/cv-jonathan-maquenhem.pdf`. Le bouton « Mon CV » utilise ce fichier et le téléchargement natif du navigateur.
- **Disponibilité** : modifier `availabilityStatus` dans `src/data/identity/profile.ts` (`available`, `open` ou `unavailable`). Ce réglage reste indépendant des préférences des visiteurs et des saisons.
- **Coordonnées** : modifier `src/data/site.ts`.
- **Projets et parcours** : mettre à jour les données dans `src/data/projects/` et `src/data/journey/`.
- **Captures** : placer les versions destinées à la publication dans `src/assets/projects/`. Astro génère les aperçus WebP et les miniatures pendant le build.

Les captures d’AZOR présentées dans le dépôt ont été préparées pour publication avec les informations sensibles masquées. L’application et son code restent internes ; seuls les supports autorisés et expurgés doivent être ajoutés ici.

## Déploiement sur Vercel

Le site est déjà publié à l’adresse **https://jonathan-mqhm.vercel.app/**.

Configuration : preset **Astro**, commande **`npm run build`**, sortie **`dist/`**. Aucun adaptateur serveur n’est nécessaire.

L’adresse publique est définie par `SITE_URL`, ou à défaut par `VERCEL_PROJECT_PRODUCTION_URL`. Pour choisir cette adresse lors d’un build local, copier `.env.example` vers `.env`. Elle sert aux URL canoniques et aux métadonnées de partage. Sans adresse publique configurée, ou dans un déploiement Vercel de prévisualisation, les pages demandent aux moteurs de ne pas les indexer.

Vercel Web Analytics est activé uniquement dans l’environnement Vercel de production ; les essais locaux et les prévisualisations ne sont pas comptés.

## Documentation complémentaire

- [Publication statique](docs/publication-statique.md) : configuration de publication.
- [Saisons automatiques](docs/saisons.md) : calendrier et choix manuel.
- [Identité visuelle](docs/identite-visuelle.md) : repères graphiques.
- [Fiches de parcours](docs/parcours/) : contexte et contributions détaillées.
- [Cadrage V1](docs/cadrage-v1.md) et [contexte du projet](project-context.md) : décisions et périmètre initial.
- [Suivi des échanges](docs/suivi/README.md) : historique des changements et vérifications.

Les documents de cadrage et de suivi conservent l’historique du projet ; certains décrivent des étapes antérieures à la version publiée.
