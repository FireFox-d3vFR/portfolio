# Orange — alternance et application métier de Transmission

Catégorie : expériences professionnelles.  
Période : septembre 2023 à fin septembre 2026.  
Cadre : alternance de trois ans, pendant un Bachelor puis un Mastère en développement web et mobile.  
Dernière mise à jour : 17 octobre 2026.

Cette fiche synthétise les informations fournies pendant le cadrage. Elle constitue une base de travail, pas un texte public définitif ni un audit technique. Les résultats sont déclaratifs et qualitatifs, sans mesure chiffrée communiquée.

## Contexte et besoin

Rattaché au Département Transmission d’Orange France, au sein d’une équipe travaillant sur des outils internes pour les équipes opérationnelles et de production, Jonathan a principalement contribué à AZOR, une application métier interne.

Ces outils visaient à faciliter, centraliser et fiabiliser des opérations liées au réseau de transmission. Les utilisateurs étaient des collaborateurs Orange des métiers de la Transmission et de la production réseau. Certaines tâches nécessitaient auparavant plusieurs outils, fichiers ou manipulations manuelles.

Les interlocuteurs comprenaient développeurs, responsables produit / Product Owners, équipes métier, exploitants et équipes techniques internes de plateforme ou de services.

## Progression sur trois ans

- Première année : découverte de l’environnement, compréhension de l’existant, participation à la refonte et premiers développements, avec une orientation initiale frontend.
- Deuxième année : montée en compétence sur l’infrastructure, le cloud, l’IaC et la CI/CD ; participation importante à la préparation et à la mise en production.
- Troisième année : développement de fonctionnalités métier complètes, autonomie accrue en conception et intégration, échanges et améliorations à partir des retours utilisateurs.

Le périmètre est progressivement devenu full stack et transverse : interface, logique métier, données, API internes, environnements cloud, livraison, supervision et certains sujets d’exploitation. Cette progression ne signifie pas une responsabilité exclusive sur l’application.

## Contribution 1 — refonte du socle applicatif

### Objectifs

AZOR existait avant la refonte. Celle-ci répondait à deux besoins :

- Mieux aligner les pratiques de développement et d’hébergement, les stacks, l’organisation de la livraison et l’identité visuelle avec les attentes internes Orange.
- Intégrer l’application au nouvel environnement d’hébergement Cloud Foundry, en cohérence avec les attentes du SI et les évolutions futures.

La refonte concernait architecture, frontend, backend, technologies, hébergement, déploiement, intégration SI et standards internes.

### Rôle personnel

Participation dès le début aux réflexions sur le socle technique et l’organisation de l’application, puis à leur mise en œuvre. Les choix n’étaient pas tous arrêtés à l’arrivée de Jonathan.

Les choix collectivement retenus comprenaient Symfony pour le backend, Vue.js pour le frontend, une séparation des responsabilités entre couches et une préparation au déploiement Cloud Foundry.

Le travail consistait à reconstruire l’application en conservant les besoins métier existants, tout en améliorant sa structure et son alignement graphique. Les contributions ont progressivement couvert développement Vue.js/Symfony, données, services internes, configuration, CI/CD, migration, supervision et exploitation.

### Résultats décrits

- Application mieux structurée et plus facile à maintenir.
- Meilleur alignement avec les standards techniques du SI.
- Adaptation au nouvel hébergement Cloud Foundry.
- Socle suffisamment stable pour ajouter des fonctionnalités sans remettre en cause l’ensemble de la base technique.

Ces résultats ne constituent pas une affirmation de conformité auditée. L’ancienne stack n’a pas été précisée.

## Contribution 2 — environnements, livraison et observabilité

### Travail réalisé

- Préparation des environnements, espaces et ressources applicatives.
- Configuration des services associés, notamment MariaDB et Redis, et des paramètres applicatifs.
- Préparation des pipelines GitLab CI/CD et automatisation d’une partie des builds et déploiements.
- Utilisation de mécanismes d’IaC pour décrire et reproduire certains éléments de configuration ; outil précis non communiqué pour Orange.
- Préparation de la supervision et des alertes avec Prometheus et Alertmanager.
- Participation aux validations et étapes nécessaires à la première mise en production.

Ce travail a été réalisé avec l’accompagnement de l’équipe, des responsables du projet et des équipes internes concernées. L’autonomie a augmenté progressivement jusqu’à la prise en charge d’une grande partie du travail technique sur les environnements.

### Difficulté représentative

Passer d’une application fonctionnelle en local à une application exploitable en production imposait de traiter les différences de configuration, accès aux services, authentification, secrets, routes réseau, dépendances, logs, supervision et contraintes de sécurité.

Un exemple concret est la mise en place de métriques et d’alertes pour détecter les défaillances de services ou de fonctionnalités critiques, puis leur validation dans plusieurs environnements avant production. Les métriques, seuils et scénarios précis n’ont pas été détaillés.

### Chemin de livraison simplifié

```text
Développement local → branche/commit Git → GitLab → pipeline CI
→ contrôles/build → environnement intermédiaire → validation
→ préproduction → validation de mise en production → Cloud Foundry
→ logs, métriques, supervision et alertes
```

PHP et Node.js intervenaient dans les builds backend et frontend. Des outils internes centralisaient et permettaient d’analyser les logs.

Le processus limitait les manipulations manuelles et rendait la livraison plus structurée et reproductible. Il comportait des validations ; il ne doit pas être décrit comme entièrement automatisé.

## Contribution 3 — TableauOT, suivi des ordres de travaux

### Besoin métier

Les équipes de production devaient suivre quotidiennement des ordres de travaux provenant d’un autre outil : ordres du jour, prise en charge, responsable, avancement et informations de traitement. L’objectif était de centraliser une partie de ce suivi opérationnel dans AZOR.

### Réalisation personnelle

Prise en charge d’une grande partie de la fonctionnalité backend et frontend :

- Import quotidien de fichiers CSV déposés dans un stockage interne, exploitation et persistance des ordres.
- Cas d’usage de récupération des listes et valeurs de filtres.
- Prise en charge par un utilisateur, modification d’état et informations complémentaires de traitement.
- Exposition des données au frontend.
- Interface Vue.js : tableau, recherche, filtres, prise en charge, suivi, clôture, export CSV et vue centrée sur les ordres de l’utilisateur.

### Itérations avec les utilisateurs

Les retours ont conduit à ajouter ou améliorer : commentaire daté associé à l’utilisateur, poste de travail, exports et déduplication de certaines données exportées, filtre des ordres terminés et enrichissement par une API interne.

### Rafraîchissement et fiabilité

Le rafraîchissement automatique a été amélioré pour limiter les appels inutiles et rendre le comportement plus robuste : rafraîchissement régulier, surveillance de son maintien, pause lorsque l’onglet est masqué, reprise au retour, backoff en cas d’erreur et mises à jour différentielles de la vue.

Le rafraîchissement de l’interface est distinct de l’import quotidien depuis l’outil source. Aucun mécanisme de synchronisation instantanée avec cet outil n’a été établi.

### Bénéfices décrits

Vue centralisée des ordres à traiter, de leur prise en charge et de leur avancement ; accès aux ordres personnels, informations complémentaires et exports adaptés à l’activité. Aucun gain de temps ou indicateur d’adoption chiffré communiqué.

## Technologies et environnement cités

Symfony, Vue.js, MariaDB, Redis, Cloud Foundry, GitLab CI/CD, PHP et Node.js pour les builds, Prometheus, Alertmanager, IaC et outils internes de logs.

L’usage précis de Redis et l’outil IaC ne sont pas documentés. Terraform, cité pour Watch Together, ne doit pas être attribué automatiquement à Orange.

## Apports au profil

- Développement Full Stack et compréhension des besoins métier.
- Progression de l’autonomie et contribution au cycle de vie complet.
- Continuité entre développement, livraison et exploitation.
- Travail collectif et coordination avec utilisateurs et équipes techniques.
- Conception itérative, avec des besoins affinés par l’usage réel.

## Publication et points ouverts

- Aucun screenshot privé, donnée interne ou information sensible propre à Orange à publier.
- Nom AZOR à conserver uniquement si publiable ; alternative proposée : « application métier interne de Production Transmission ».
- Caractère publiable du nom TableauOT à préciser ; désignation générique possible : « module de suivi des ordres de travaux ».
- Aucun dépôt ni support public fourni ou consulté.
- État actuel de l’application après la fin de l’alternance non vérifié.
- Fiche de travail à condenser pour le portfolio ; les trois contributions appartiennent à la même expérience, pas à trois projets indépendants.
