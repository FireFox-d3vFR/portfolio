# Supports des projets

## Organisation

Les textes éditoriaux des projets sont dans `src/data/projects/content.ts`. La [liste des supports à fournir](supports-a-fournir.md) précise les fichiers attendus par projet. L’alternance Orange possède un contenu distinct dans `src/data/journey/entries.ts`, centré sur la progression et le cadre professionnel ; le projet Orange reste fondé sur les contributions applicatives. `src/data/journey/entries.ts` les réutilise pour les modales des projets et du parcours : contexte, contribution personnelle, technologies et bilan ne sont pas dupliqués.

Les supports sont configurés par identifiant dans `src/data/projects/media.ts` : `anthlabs`, `enjo`, `amtta`, `osteo`, `portfolio`. Un projet sans entrée dans cette configuration ne présente pas de colonne Supports. Orange n’en possède pas : aucun document interne ou visuel métier n’est exposé.

## Remplacer les supports provisoires

Déposer les images partageables dans `public/assets/projects/`, idéalement dans un sous-dossier par projet. Pour chaque image, renseigner `src` (chemin public commençant par `/assets/projects/`), `alt` et `caption`. Les images sont affichées en entier, sans recadrage dans l’aperçu principal. Plusieurs formats d’image sont possibles ; les SVG actuels sont uniquement des compositions abstraites temporaires.

Déposer les présentations dans `public/assets/pdf/`. Dans la propriété facultative `pdf`, remplacer `href`, `title`, `label` et `note`. Les deux hackathons utilisent actuellement le CV comme PDF de démonstration, explicitement identifié : il ne constitue pas leur présentation. Exemple de chemin futur : `/assets/pdf/anthlabs-presentation.pdf`.

L’onglet PDF présente une carte avec le titre du document, une note et un bouton d’ouverture dans un nouvel onglet. Aucun lecteur PDF n’est intégré dans la modale et aucun téléchargement n’est forcé pour les présentations.

Retirer ou adapter les mentions de démonstration dans `src/components/projects/ProjectSupports.astro` lorsque de vrais supports sont fournis. Ne pas publier les exemples comme des captures réelles. Les fichiers de `public/` sont accessibles publiquement.

## Présentation et liens

Sur grand écran, modale de 1120 px maximum : texte à gauche, supports à droite. Sur mobile, les supports passent sous le texte ; la hauteur maximale reste de 88 % de la fenêtre. Les autres événements du parcours conservent leur format compact.

La galerie possède des boutons de sélection accessibles au clavier. La modale s’ouvre au début du contenu, se ferme par Échap ou son bouton et conserve les interactions natives de dialogue.

Le lien principal facultatif reste configuré dans `portfolio.ts`. AMTTA ouvre le site communiqué ; AnthLabs ouvre l’organisation GitHub, sans prétendre pointer sur un dépôt précis ou une démo active. En l’absence de lien, un court statut remplace l’action. Aucun faux bouton désactivé.

## Vérification éditoriale — 27 octobre 2026

Comparaison avec les cinq fiches `docs/parcours/` :

- Orange : participation à un existant et progression Full Stack, Cloud et livraison ; pas de responsabilité exclusive ni de résultat chiffré inventé.
- AnthLabs / Watch Together : prototype collectif fonctionnel à l’époque, contribution infrastructure, intégration et déploiement ; démonstration arrêtée. Rust, React et FFmpeg/HLS décrivent le collectif.
- Enjo : conception et présentation d’un concept, aucune application développée ; deuxième place collective déclarée sur neuf équipes.
- AMTTA : reprise et évolution d’un site Wix existant, sans attribuer sa création initiale ; maintenance dans la durée.
- Cabinet : conception et intégration WordPress/Gutenberg pour deux praticiennes ; finalisation en cours, sans annoncer une mise en production.

Les synthèses existantes sont fidèles et ont été conservées. Les fiches restent plus détaillées que les modales. Les liens externes communiqués n’ont pas fait l’objet d’un nouvel audit de disponibilité pendant cette modification.

Ordre de présentation commun aux vues grille et liste : Orange, AMTTA, cabinet d’ostéopathie, portfolio, AnthLabs, Enjo. Le portfolio dispose d’une capture de travail et d’une planche de couleurs, sans PDF. La chronologie du parcours reste indépendante de cet ordre éditorial.
