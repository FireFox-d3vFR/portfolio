# Logos des projets

Placer ici les logos fournis par Jonathan. Un seul fichier par projet, avec le nom suivant :

| Projet | Nom du fichier, exemple PNG |
| --- | --- |
| Orange | `orange.png` |
| AnthLabs | `anthlabs.png` |
| Enjo | `enjo.png` |
| AMTTA | `amtta.png` |
| Cabinet d’ostéopathie | `cabinet-osteopathie.png` |

Formats acceptés : PNG, JPG, JPEG, WebP et AVIF. Noms et extensions en minuscules.
PNG transparent recommandé lorsque disponible ; les JPEG conviennent également.
Conserver un peu d’espace autour du logo dans le fichier si nécessaire.

Le composant détecte automatiquement ces fichiers à la compilation. En développement, Vite surveille leur ajout. Pour un site déjà déployé, reconstruire et redéployer après l’ajout.

Les images sont affichées entièrement, sans déformation ni recadrage, et optimisées en WebP par Astro. La grille utilise un espace de présentation large ; la liste une vignette à gauche.

En attendant les fichiers :
- les illustrations actuelles restent dans la grille ;
- les vignettes de liste affichent de simples initiales de repérage, qui ne sont pas présentées comme des logos officiels.

La correspondance des noms se trouve dans `src/data/project-logos.ts`.
Les modales des projets utilisent le même composant et les mêmes logos que les cartes.


## Réglages après réception — 27 octobre 2026

Les cinq logos ont été ajoutés et vérifiés. Les réglages optiques sont dans src/data/project-logos.ts :
- gridWidth / gridHeight : boîte maximale du logo dans la grille ;
- listPadding / mobilePadding : marges dans la vignette de liste.

Les logos AMTTA et cabinet disposent de marges plus petites pour compenser l’espace transparent contenu dans les sources. Un fond blanc neutre facilite la lecture et intègre le fond du fichier AnthLabs. Les variantes WebP sont générées à qualité 90 et ne dépassent pas la largeur du fichier source.
