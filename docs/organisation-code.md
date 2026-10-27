# Organisation et lecture du code

## Principes

Les pages composent les sections ; les composants présentent les données ; les modules TypeScript gèrent les interactions natives. Les identifiants publics, les clés de préférences et les chemins des supports sont conservés. Cette réorganisation n’ajoute pas de framework ni de service externe.

Les noms techniques restent stables pour limiter les changements inutiles. Les commentaires, les messages de diagnostic propres au site et les intitulés de tests sont en français. Les classes Tailwind et les noms des API gardent leur syntaxe officielle.

## Où intervenir

| Besoin | Fichier ou dossier |
| --- | --- |
| Composition des pages | `src/pages/index.astro`, `src/pages/identite.astro` |
| HTML commun, polices et favicon | `src/layouts/Layout.astro` |
| Texte du Hero | `src/components/sections/Hero.astro` |
| Présentation et qualités | `src/components/sections/About.astro`, `src/data/about.ts` |
| Liste des technologies | `src/data/skills.ts` |
| Coordonnées et crédits | `src/data/site.ts` |
| Contributions des projets | `src/data/projects/content.ts` |
| Images, PDF et légendes | `src/data/projects/media.ts` |
| Logos de projet et tailles | `src/data/projects/logos.ts`, `src/assets/logo/` |
| Dates, formations et liens des événements | `src/data/journey/entries.ts` |
| Renard et disponibilité | `src/data/identity/` |
| Règles du graphe et des saisons | `src/lib/journey.ts`, `src/lib/seasons.ts` |
| Palette, styles et adaptations responsive | `src/styles/portfolio.css` |

Les composants sont rangés dans `sections/`, `navigation/`, `projects/`, `identity/`, `ui/` et `decoration/`. La feuille de styles reste centralisée pour conserver l’ordre des règles de la cascade ; les blocs sont repérés par des commentaires en français. L’ancienne feuille `global.css`, inutilisée, a été retirée.

## Interactions

`src/scripts/portfolio.ts` charge les modules dans leur ordre d’initialisation :

- `seasons.ts` : calendrier, préférence manuelle et paysage.
- `navigation.ts` : en-tête, section active, menu mobile et retour en haut.
- `dialogs.ts` : ouverture, fermeture et retour entre modales liées.
- `motion.ts` : apparitions au défilement et mouvement réduit.
- `journey.ts` : filtres et recalcul des pistes du parcours.
- `projects.ts` : vues grille et liste.
- `preferences.ts` : mode sombre et panneau des préférences ; réutilise la fermeture du menu.
- `gallery.ts` : miniatures et sélection du support dans chaque modale.

Chaque module accepte l’absence de ses éléments sur l’autre page. Les données éditoriales restent en dehors des scripts d’interaction.

## Vérifier une modification

```sh
npm run format
npm run format:check
npm run check
npm test
npm run build
```

Pour une retouche visuelle, vérifier aussi les deux pages dans le navigateur, l’ouverture des détails, les préférences et le petit écran. Les tests existants couvrent les règles du calendrier et les chevauchements du graphe ; le formatage ne nécessite pas de nouveaux tests de logique.
