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

- `src/pages/` : portfolio et planche d’identité.
- `src/components/` : sections Astro, navigation, sélecteur de saisons, logos technologiques, motifs et modales.
- `src/layouts/` : HTML partagé et polices locales.
- `src/data/portfolio.ts` : contributions documentées, qualités et compétences.
- `src/data/entries.ts` : métadonnées des projets et du Parcours ; réutilise les contributions documentées.
- `src/lib/journey.ts` : placement des activités dans les pistes du graphe.
- `src/scripts/portfolio.ts` : saisons, apparence, menu, modales, filtres et révélations au défilement.
- `src/styles/portfolio.css` : tokens saisonniers, Tailwind CSS 4 et styles issus de Lovable.
- `src/assets/images/` : images provisoires et leur provenance.
- `src/assets/logo/` : logos fournis des projets, convention de noms dans son README.
- `src/data/project-logos.ts` : correspondance des fichiers de logos, chargés localement au build.
- `tests/` : tests du graphe avec le runner natif de Node.
- `public/` : favicon.

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

Dans src/data/profile.ts, availabilityStatus accepte available, open ou unavailable. La page affiche le libellé et l’indicateur correspondants. Ce réglage est indépendant des préférences des visiteurs et des saisons. Les trois variantes peuvent être comparées sur /identite/.
