# Saisons automatiques et choix manuel

Mise en place : 27 octobre 2026.

## Pourquoi cela fonctionne sur un site statique

Astro génère des fichiers HTML, CSS, JavaScript et des images. Vercel peut servir ces fichiers tels quels. Le navigateur exécute ensuite le JavaScript et adapte la page déjà chargée.

La date est lue chez le visiteur avec `new Date()`. Elle est donc évaluée à chaque visite, et non figée au moment du build. Aucun service de météo, géolocalisation ou serveur applicatif n’est nécessaire.

## Calendrier retenu

Le portfolio utilise des périodes fixes de l’hémisphère nord, en date locale du navigateur :

| Saison | Période |
| --- | --- |
| Printemps | 1er mars au 31 mai |
| Été | 1er juin au 31 août |
| Automne | 1er septembre au 30 novembre |
| Hiver | 1er décembre à la fin février |

La table `SEASONS_BY_MONTH`, dans `src/lib/seasons.ts`, associe chacun des douze mois à une saison. JavaScript numérote les mois de 0 (janvier) à 11 (décembre).

## Ce qui change à l’écran

Le contrôleur `src/scripts/seasons.ts` choisit une saison puis met à jour, par exemple :

```html
<html lang="fr" data-season="automne" data-season-mode="auto">
```

Les règles CSS de `src/styles/portfolio.css` lisent `data-season` et définissent les couleurs sémantiques : fond, texte, cartes, boutons, bordures et sections sombres.

Le script remplace aussi la source du paysage par le fichier correspondant. Les quatre paysages sont déjà disponibles dans les fichiers du site. Les logos et contenus restent identiques.

Une initialisation légère dans `src/layouts/Layout.astro` utilise la même table de mois pour appliquer la palette avant l’affichage. Le contrôleur synchronise ensuite les images et les commandes des préférences.

## Priorité des préférences

- Un nouveau visiteur utilise la saison automatique.
- Un choix ancien déjà mémorisé est conservé en mode manuel.
- Choisir une icône active le mode manuel et mémorise cette saison.
- Réactiver Saison automatique applique immédiatement la saison calculée.
- Désactiver l’automatique retrouve la dernière saison choisie manuellement.
- Le mode clair/sombre reste indépendant.

Deux valeurs sont conservées dans le stockage local du navigateur :

- `portfolio-season-mode` : `auto` ou `manual`.
- `portfolio-season` : dernier choix manuel.

La saison automatique est recalculée ; elle n’est pas enfermée dans une ancienne valeur stockée. Si le stockage est indisponible, les commandes fonctionnent pendant la visite.

## Une page laissée ouverte

En mode automatique, un réveil est programmé au prochain minuit local. À son déclenchement, la saison est recalculée et le prochain réveil est préparé.

Le prochain minuit est construit avec une date de calendrier, plutôt qu’en ajoutant systématiquement 24 heures : cela tient compte des journées de 23 ou 25 heures.

Un retour dans l’onglet ou la fenêtre provoque également une vérification, utile après une mise en veille. En mode manuel, la minuterie quotidienne est arrêtée. Les changements de préférences sont synchronisés entre onglets du même site.

## Vérification

`tests/seasons.test.mjs` vérifie les douze mois, les quatre frontières de saison, le passage d’année, le 29 février, la priorité manuelle, les anciennes préférences et le prochain minuit.

Commandes :

```sh
npm run check
TZ=Europe/Paris npm test
npm run build
```
