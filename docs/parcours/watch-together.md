# Watch Together — prototype collectif de visionnage synchronisé

Catégorie : expériences académiques.  
Période : 2026.  
Cadre : hackathon collectif à l’ESTIAM.  
Statut : prototype fonctionnel historiquement déployé ; démonstration en ligne arrêtée.  
Dernière mise à jour : 17 octobre 2026.

Synthèse des échanges de cadrage, fondée sur le témoignage de Jonathan. Aucun code ni fonctionnement actuel vérifié.

## Contexte et objectif

Construire en équipe, sur une période courte, une application permettant à plusieurs utilisateurs de regarder une vidéo dans une session partagée et synchronisée.

Le hackathon demandait de cadrer rapidement l’idée, choisir une architecture, répartir le travail, réaliser une première version et intégrer des briques techniques différentes. La durée exacte et la taille de l’équipe n’ont pas été précisées.

## Parcours effectivement démontrable à la fin du hackathon

1. Accéder à l’application déployée sur Railway.
2. Créer une room ou rejoindre une room existante.
3. Partager son lien et accueillir les participants.
4. Transférer une vidéo pour la session.
5. Préparer et diffuser le contenu.
6. Lancer la lecture et regarder la vidéo simultanément, de manière synchronisée.

La synchronisation faisait partie du prototype fonctionnel, pas seulement des objectifs. Son mécanisme technique et le comportement précis des commandes ne sont pas documentés dans les échanges.

## Architecture collective

- Backend Rust : API et fonctionnalités serveur, avec une volonté d’expérimenter un langage différent de l’environnement habituel.
- Frontend React avec Vite, séparé du backend.
- FFmpeg : traitement/transcodage vidéo.
- HLS : diffusion sous forme de playlists et segments.
- Docker : environnement et intégration des composants lorsque nécessaire.
- GitHub Actions : automatisation du build et de la livraison.
- Terraform : description et automatisation d’une partie de l’infrastructure.
- Railway : hébergement temporaire de la démonstration.

```text
Fichier vidéo → FFmpeg → playlists et segments HLS → serveur → lecteur web

GitHub → GitHub Actions → build/contrôles → construction des composants
→ déploiement Railway
```

La chaîne vidéo et la logique de room/synchronisation sont deux aspects distincts. La mention HLS ne suffit pas à établir du direct, plusieurs qualités ou un bitrate adaptatif.

## Contribution personnelle — infrastructure et livraison

Jonathan n’était pas le développeur principal du backend Rust, du frontend React ou du traitement FFmpeg/HLS. Son rôle principal était de permettre l’assemblage, l’automatisation et le déploiement du travail collectif :

- Infrastructure as Code avec Terraform.
- Configuration des environnements.
- Pipelines GitHub Actions.
- Conteneurisation et intégration Docker lorsque nécessaire.
- Intégration des différentes briques et déploiement sur Railway.
- Mise en place du chemin entre code source GitHub et version accessible en ligne.

Terraform servait à décrire et automatiser une partie de l’infrastructure, notamment autour de la gestion des vidéos et de leur prise en charge dans l’environnement déployé. Ressources, providers et mécanismes exacts non précisés : ne pas en déduire un CDN, un stockage objet ou toute l’infrastructure Railway gérée par Terraform.

## Problème traité et approche

Le fonctionnement local de chaque brique ne garantissait pas une démonstration du projet complet. La contribution infrastructure visait à rendre ces composants compatibles dans un environnement distant, avec la configuration nécessaire, et à éviter une reconstruction et un déploiement entièrement manuels à chaque version.

L’approche cherchait un environnement reproductible et déployable adapté au hackathon, sans les exigences d’une plateforme de production à grande échelle.

Les contrôles CI, artefacts et mécanismes précis de déploiement n’ont pas été détaillés. Aucun gain mesuré n’a été communiqué.

## Résultat et apport au profil

Prototype collectif fonctionnel avec parcours de bout en bout démontrable à l’époque. Le projet illustre travail sous contrainte de temps, expérimentation, intégration de composants hétérogènes et adaptation des pratiques de livraison au niveau de maturité réel du projet.

La stack vidéo et applicative décrit le projet collectif ; la contribution individuelle à valoriser est infrastructure/DevOps et livraison.

## Supports et disponibilité

- Organisation GitHub communiquée : [AnthLabs](https://github.com/AnthLabs).
- Dépôts exacts à identifier ; le lien fourni désigne une organisation.
- Ouverture via l’outil web tentée pendant le cadrage, sans succès de récupération ; contenu non vérifié.
- Déploiement Railway temporaire désormais arrêté : aucun bouton « Live demo » à afficher.
- Captures à retrouver ; aucune disponibilité confirmée.
- Schéma d’architecture possible à produire ultérieurement, sans le présenter comme déjà disponible.

## Points ouverts

Durée, taille de l’équipe, dépôts précis, supports visuels, détail du périmètre Terraform et difficulté technique individuelle plus précise. Ces détails ne bloquent pas une présentation synthétique fidèle au travail déclaré.
