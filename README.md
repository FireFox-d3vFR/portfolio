# Portfolio personnel

Portfolio statique de Jonathan Maquenhem, développeur Full Stack avec un intérêt pour le DevOps, l’intégration et les besoins métier.

La version Astro reprend fidèlement la maquette Lovable fournie : Hero, présentation, compétences, six projets avec vues grille/liste et modales, parcours Git filtrable, quatre saisons, apparences claire/sombre et contact. Les contenus factuels du dépôt restent prioritaires sur les textes de la maquette.

## Démarrer en local

Prérequis : Node.js 24 et npm. Dans WSL, depuis le dossier du projet :

```sh
nvm use
npm ci
npm run dev
```

Si Node.js est installé sans nvm, ignorer `nvm use`. La version attendue est indiquée dans `.nvmrc`.

- Portfolio : `http://localhost:4321/`
- Planche d’identité : `http://localhost:4321/identite/`

## Vérifier et compiler

```sh
npm run check
npm test
npm run build
npm run preview
```

Le check vérifie Astro et TypeScript. Les tests couvrent les règles du graphe, le calendrier saisonnier et la priorité des préférences. Le build génère le site statique dans `dist/`. La commande preview sert ce résultat en local.

## Organisation

- `src/pages/` : les deux pages et leur composition.
- `src/components/sections/` : Hero, présentation, compétences, projets, parcours et contact.
- `src/components/navigation/` : en-têtes, préférences, saisons et retour en haut.
- `src/components/projects/` : modales, logos de projet et galeries.
- `src/components/identity/` : renards, empreintes, disponibilité et favicon.
- `src/components/ui/` et `decoration/` : éléments réutilisables et décors.
- `src/data/projects/` : textes, logos et supports des projets.
- `src/data/journey/` : événements du parcours ; réutilise les textes des projets.
- `src/data/identity/` : variantes du renard et état de disponibilité.
- `src/data/about.ts`, `skills.ts` et `site.ts` : qualités, compétences et coordonnées.
- `src/scripts/portfolio.ts` : point d’entrée des interactions, déléguées à des modules par rôle.
- `src/lib/` : règles du calendrier et du graphe, testables sans navigateur.
- `src/styles/portfolio.css` : Tailwind, palettes et styles, avec commentaires en français.
- `src/assets/` : logos et illustrations optimisés au build.
- `public/assets/` : CV, PDF et images des galeries, servis avec des chemins stables.
- `tests/` : tests du graphe et du calendrier avec Node.js.

Le [guide du code](docs/organisation-code.md) indique où modifier chaque partie.
La [liste des supports attendus](docs/supports-a-fournir.md) précise les images et PDF à ajouter.

### Formatage

```sh
npm run format
npm run format:check
```

Prettier et son extension Astro harmonisent les sources, les tests et les fichiers de configuration : indentation de deux espaces, fins de ligne LF et chaînes TypeScript entre apostrophes. `.editorconfig` fournit les mêmes repères aux éditeurs. Les images, le dossier généré `dist/` et les documents de suivi ne sont pas reformatés.

Astro conserve une sortie entièrement statique. Tailwind CSS 4 via Vite reprend les classes et espacements de Lovable ; les interactions utilisent TypeScript et les API du navigateur, sans runtime React.

## Déploiement prévu : Vercel Hobby

Importer le dépôt dans Vercel avec le preset Astro, la commande `npm run build` et le dossier de sortie `dist`. Aucun adaptateur serveur n’est nécessaire. Aucun déploiement n’a encore été effectué.

## Documentation

- [Cadrage V1](docs/cadrage-v1.md) : périmètre initial et évolutions retenues.
- [Saisons automatiques](docs/saisons.md) : calendrier, choix manuel et fonctionnement côté navigateur.
- [Identité visuelle](docs/identite-visuelle.md) : palette, typographie et interactions actuelles.
- [Contexte du projet](project-context.md) : objectifs et décisions.
- [Fiches de parcours](docs/parcours/) : contexte et contributions détaillées.
- [Suivi des échanges](docs/suivi/README.md) : changements et vérifications.

Les textes publics restent une première adaptation des témoignages fournis. Les fiches conservent les points ouverts, notamment les supports disponibles et les limites de publication.


## Ajouter le CV

Placer le PDF dans public/assets/pdf/cv-jonathan-maquenhem.pdf. Le bouton « Mon CV » de la navigation pointe déjà vers cette adresse et utilise le téléchargement natif du navigateur. Le PDF a été ajouté par Jonathan le 27 octobre 2026.


## Régler la disponibilité

Dans src/data/identity/profile.ts, availabilityStatus accepte available, open ou unavailable. La page affiche le libellé et l’indicateur correspondants. Ce réglage est indépendant des préférences des visiteurs et des saisons. Les trois variantes peuvent être comparées sur /identite/.
