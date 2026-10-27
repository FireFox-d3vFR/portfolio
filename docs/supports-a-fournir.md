# Supports à fournir pour compléter le portfolio

## Ce qui est déjà disponible

Le CV et les logos des projets sont présents. Le portfolio possède de vraies captures et une palette. AnthLabs dispose maintenant de trois captures réelles et d’une planche graphique issue du code actuel. AMTTA dispose de trois captures du site public et de sa planche graphique. Ostéo Chartreuse dispose de trois captures de l’aperçu de travail et de sa planche graphique. Enjo dispose de son PDF de pitch, de deux mises en situation et d’une planche graphique. Les PDF de démonstration ont été remplacés par les présentations réelles.

## Liste par projet

| Projet | À fournir en priorité | Compléments utiles | Emplacement conseillé |
| --- | --- | --- | --- |
| AnthLabs / Watch Together | Captures et présentation PDF disponibles | Capture des workflows ou schéma d’infrastructure partageable ; lien du dépôt précis | `public/assets/projects/anthlabs/`, PDF `public/assets/pdf/anthlabs-presentation.pdf` |
| Enjo | Présentation PDF et visuels du concept disponibles | Photo d’équipe ou du hackathon partageable ; lien public éventuel | `public/assets/projects/enjo/`, PDF `public/assets/pdf/enjo-presentation.pdf` |
| AMTTA | Captures et repères graphiques disponibles | Évolution avant/après si tu disposes des deux versions ; capture mobile éventuelle | `public/assets/projects/amtta/` |
| Ostéo Chartreuse | Captures de travail et repères graphiques disponibles | Visuels finaux validés, nom confirmé avec les praticiennes et URL publique lorsque le site sera prêt | `public/assets/projects/osteo/` |
| Orange | Aucun support attendu tant que l’autorisation n’est pas confirmée | Si autorisé : nom du projet et captures explicitement partageables ; sinon la fiche textuelle suffit | Prévoir `public/assets/projects/orange/` uniquement au moment de l’ajout |
| Portfolio | Rien de bloquant | Nouvelles captures après validation de l’identité ; URL publique après déploiement | `public/assets/projects/portfolio/` existe déjà |

Enjo reste présenté comme un concept et un pitch, sans application développée. AnthLabs et Watch Together désignent le même projet. Le CV reste dans `public/assets/pdf/cv-jonathan-maquenhem.pdf`.

## Pour chaque fichier

- Nommer le projet concerné et l’ordre souhaité dans la galerie.
- Indiquer une courte légende et ce que le visuel montre ; préciser si c’est une maquette, un prototype ou une version en production.
- Signaler les éléments à masquer et fournir une version partageable ; pour une photo d’équipe, confirmer qu’elle peut être publiée.
- Pour un PDF, donner son titre et la version à utiliser. Il s’ouvrira dans un nouvel onglet.
- Pour un lien, fournir l’URL exacte et préciser s’il s’agit du site, d’un dépôt ou d’une démonstration encore active.

Images : PNG pour les captures nettes, JPEG/WebP pour les photos. Une largeur de 1 200 à 1 600 px convient généralement ; éviter les captures minuscules ou déjà compressées. PDF : version lisible et aussi légère que possible. Nommer les fichiers simplement, par exemple `accueil-desktop.webp`, `accueil-mobile.png`, `pitch.pdf`, sans espaces ni accents.

## Intégration

Déposer les fichiers dans le dossier du projet puis renseigner `src/data/projects/media.ts` : `src`, `alt`, `caption`, et éventuellement `pdf`. Les chemins publics commencent par `/assets/`, sans le préfixe `public/`. Les noms de dossiers `anthlabs`, `enjo`, `amtta`, `osteo` et `portfolio` restent stables.

Pour remplacer les démonstrations, ajuster aussi `description`, `imageNote`, le titre et le libellé PDF. Retirer la référence au CV de démonstration du projet une fois sa vraie présentation ajoutée. Aucun PDF n’est nécessaire pour un projet qui n’en possède pas. Les détails techniques sont décrits dans [Supports des projets](supports-projets.md).
