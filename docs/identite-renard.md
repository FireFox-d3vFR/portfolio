# Renard : pistes et extractions

## Choix du 27 octobre 2026

Jonathan préfère deux personnages entiers : le renard polygonal de Facettes douces et celui aux courbes lisses de Courbes et paysage. La troisième piste ne sera pas utilisée pour le Hero. Extraire uniquement les personnages, pas les paysages des planches.

Les deux PNG transparents sont dans `src/assets/images/`, sous les noms `fox-facets.png` et `fox-curves.png`. La sélection dans `src/data/identity/fox.ts` utilise actuellement `facets` pour le premier essai du Hero ; changer en `curves` pour comparer l’autre dans le même décor. Les proportions natives sont conservées. Les deux variantes sont également présentées sur la page identité.

Paysages saisonniers, feuilles, commande git et texte du Hero conservés. Aucun changement du monogramme jm., du logo de navigation ou du favicon.

## Prochaines pistes retenues

- Extraire ultérieurement les trois effigies de tête, sans les lettres jm. des planches.
- Conserver les lettres jm. du site.
- Pour le favicon, explorer une courbe de renard en un seul trait ou une queue seule, éventuellement sur carré orange.

## Production des images

Outil intégré imagegen, mode édition avec conservation du personnage. Aucun recours à la CLI ou à une clé API. Les deux planches originales restent conservées hors du dépôt ; les assets effectivement utilisés sont copiés dans le projet.

Consigne Facettes douces : extraire uniquement le grand renard entier du panneau Hero de la première planche ; conserver la pose assise de profil vers la gauche, le visage, les grandes oreilles, les facettes orange/crème, les pattes sombres et la queue repliée. Supprimer paysage, rochers, sol, végétation, textes, logos et favicon. Fond alpha transparent, personnage entier, sans ombre de sol.

Consigne Courbes et paysage : même extraction depuis la deuxième planche, en conservant les courbes lisses, le museau relevé, l’expression calme et la grande queue arrondie. Ne pas transformer le pelage en triangles. Supprimer tous les autres éléments, avec fond alpha transparent et personnage entier.


## Trois têtes extraites et ajoutées au projet

Jonathan valide l’ajout des trois têtes seules, sans lettres jm. intégrées, avec Facettes douces comme référence par défaut. PNG alpha copiés dans `src/assets/brand/` : `fox-logo-facets.png`, `fox-logo-curves.png`, `fox-logo-line.png`.

Sélection centralisée : `activeFoxLogo` dans `src/data/identity/fox.ts`. Composant `FoxLogo.astro` partagé par la navigation, le footer et les aperçus de la page identité. WebP optimisés générés par Astro. Initiales jm. inchangées, Hero inchangé, favicon inchangé. Les trois logos sont conservés sur `/identite/#fox-logo-explorations`, avec grand aperçu et essais à 32 px sur fonds clair et sombre.

Outil intégré imagegen, mode extraction/édition depuis chacune des planches. Consigne commune : isoler uniquement la tête en haut à droite, préserver son profil, ses couleurs et ses formes ; supprimer lettres jm., titres, séparateurs, paysage, personnage entier et carré favicon ; préserver les parties crème du pelage et rendre le pourtour transparent. La troisième extraction conserve son dessin illustré avec contour ; ce n’est pas encore le futur favicon en trait unique.


## Propositions de favicon, en attente de sélection

Deux SVG natifs dessinés dans `public/assets/brand/` : `favicon-fox-line.svg` (silhouette continue, un seul tracé) et `favicon-fox-tail.svg` (queue relevée, pointe crème et corps orangé). Fond orange fixe `#BA4A12`, crème `#FFF4DF`, orange clair de la queue `#F3993C`. Dessins conçus pour simplifier les détails aux petites tailles ; ce sont des propositions, pas des extractions des planches générées.

Comparaison sur `/identite/#favicon-explorations` : grand aperçu, tailles 16/32/48 px, simulation d’onglet clair et sombre. Préférence proposée : queue seule pour sa forme pleine plus robuste en petit. Jonathan choisira avant activation. Le lien `/favicon.svg` dans Layout reste inchangé.


## Nouvelle exploration de favicon en génération d’image

Jonathan ne retient pas les deux dessins SVG, jugés trop abstraits, et demande de repartir sur de la génération d’image. Deux PNG générés avec l’outil intégré imagegen et copiés dans `src/assets/brand/` : `favicon-fox-pen.png` et `favicon-fox-tail.png`. Les SVG précédents sont conservés comme essais historiques mais ne sont plus affichés.

Consigne renard : dessin simple de renard assis de profil vers la gauche, grandes oreilles, museau et queue touffue, courbes crème d’un geste de stylo sur orange, sans texte, décor ni maquette. La proposition générée est un dessin au trait et ne constitue pas mathématiquement un unique tracé vectoriel.

Consigne queue : queue seule, touffue et recourbée vers le haut, volume orangé et large pointe crème, trois couleurs maximum, sans tête, texte ni décor. Privilégier une forme reconnaissable en petit.

Astro produit les PNG d’aperçu aux tailles 16, 32, 48 et 96 px, avec variantes pour écrans denses. Les compositions originales ne sont pas redessinées en SVG. La page identité conserve les simulations d’onglet clair et sombre. Aucune activation du nouveau favicon avant le choix de Jonathan.


## Activation du favicon queue

À la demande de Jonathan d’adapter le favicon après les deux propositions générées, activation de la queue recommandée pour sa lisibilité. `Layout.astro` génère et déclare des PNG 16, 32 et 48 px depuis `src/assets/brand/favicon-fox-tail.png`, communs au portfolio et à la page identité. URLs d’assets gérées par Astro. L’ancien `/favicon.svg` est conservé en historique mais n’est plus référencé. Page identité actualisée pour identifier la version active. Le renard au trait reste disponible comme variante.


## Simplification au contour seul

Jonathan écarte la queue colorée et demande uniquement un effet line, avec une tête seule ou une queue touffue, sur orange ou noir/blanc. Deux nouveaux PNG transparents générés avec imagegen, sauvegardés dans `src/assets/brand/favicon-head-outline.png` et `favicon-tail-outline.png`.

Consigne tête : contour de profil compact, grandes oreilles et museau, trait crème épais, sans œil ni traits intérieurs, sans corps, sans fond, simplicité pour lecture à 16 px. Consigne queue : contour d’une queue recourbée et touffue, quelques grandes pointes, trait crème épais et intérieur transparent, aucune couleur de remplissage, aucun décor.

La comparaison `/identite/#favicon-explorations` propose chacun des signes sur orange, noir et blanc, avec aperçus 64/32/16 px. Sur blanc, un filtre CSS affiche le trait en noir ; les PNG restent inchangés. Le favicon actif reste le précédent renard assis au trait, en attendant la sélection d’une nouvelle forme et de son fond. Les anciens essais ne sont pas supprimés.


## Choix final : queue au trait sur fond noir

Jonathan choisit la queue au trait pour distinguer le favicon de la tête du logo et du personnage entier du Hero. Fond choisi pour l’intégration : noir avec contour crème, fixe indépendamment des saisons et du mode clair/sombre.

Version de fond réalisée avec l’outil imagegen depuis le contour transparent approuvé : conserver la forme, les pointes et l’épaisseur du trait ; remplacer uniquement le fond transparent et l’intérieur de la queue par du noir, contour crème, sans détail ni couleur supplémentaire. Asset ajouté : `src/assets/brand/favicon-tail-dark.png`. Le PNG original transparent est conservé.

Layout partagé actualisé vers cette image ; Astro génère les PNG 16/32/48 px. La comparaison de la page identité indique la version utilisée et affiche l’asset actif sur le fond Noir de la queue. Les autres pistes restent consultables. Aucun changement des logos ou du Hero.


## Empreintes décoratives (27 octobre 2026)

Essai de deux pas de renard bruns, légèrement facettés, à droite de l’introduction de la page identité et au-dessus du paysage de contact. Image originale transparente dans `src/assets/images/fox-pawprints.png`. Outil intégré imagegen, sans recours au CLI. Brun stable pour ce premier essai, éclairci en CSS sur les fonds sombres ; aucune variation de teinte selon la saison pour le moment. Image décorative ignorée par les lecteurs d’écran.

Prompt utilisé :

```text
Use case: stylized-concept. Asset type: transparent decorative website illustration for a warm autumn French developer portfolio. Generate exactly TWO fox paw footprints viewed from directly above, forming two successive steps, staggered diagonally from lower left to upper right. Each fox print is narrow and oval, FOUR small tapered toe pads with tiny subtle claw marks, and one compact triangular central pad; recognizable fox/canine tracks, not human feet, not bear paws, no fifth toe. A refined minimal flat stamped silhouette, slightly angular edges to gently echo low-poly landscapes, no excessive detail or texture. Solid warm walnut brown #865332 with small tonal variation only if useful. Both prints same size and orientation toward upper right; separated by roughly one print height. Composition centered, generous but not excessive transparent margins, all marks fully in frame. Clean premium understated nature motif. No animal, no ground, no scenery, no leaves, no text, no shadow, no border. True transparent alpha background. This single asset will be used near a large editorial heading on cream and above a dark contact landscape.
```
