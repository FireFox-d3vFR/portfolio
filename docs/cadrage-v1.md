# Cadrage V1 — Portfolio personnel

Date : 26 octobre 2026 (Europe/Paris).
Statut : synthèse des orientations retenues ; détails ouverts indiqués explicitement.
Nature : document de cadrage. Première implémentation commencée le 26 octobre après validation de Jonathan ; voir le suivi et le document d’identité visuelle.

## 1. Objectif et documents de référence

Présenter Jonathan Maquenhem, son profil de développeur Full Stack, ses expériences et ses contributions, avec un intérêt pour le DevOps, l'intégration et les besoins métier. Le portfolio doit aussi exprimer une identité graphique personnelle, sans être orienté par défaut vers une offre ou une cible de recrutement précise.

La V1 vise une page claire, sobre, responsive et accessible, avec une lecture rapide et des détails disponibles à la demande.

- [Contexte initial](../project-context.md) : réflexion générale et pistes techniques ou graphiques, toujours ouvertes.
- [Fiches de parcours](parcours/) : matière éditoriale détaillée, contributions et limites de publication.
- [Suivi du 17 octobre](suivi/2026-10-17.md) : cadrage et collecte du parcours.
- [Suivi du 26 octobre](suivi/2026-10-26.md) : analyse du prototype et retour de Jonathan.

Ce document consolide les choix récents pour la V1. Il ne transforme pas toutes les idées du contexte ou des prompts Lovable en exigences. Les textes, illustrations et détails d'implémentation du prototype ne sont pas automatiquement validés.

## 2. Direction visuelle retenue

- Palette automnale de référence : orange, marron, crème, beige et tons sombres. Valeurs exactes à définir.
- Composition aérée, hiérarchie lisible et alternance de sections claires et sombres inspirées de la maquette.
- Typographie de la maquette comme point de départ : titres à empattements, texte courant lisible et touches de monospace. Polices exactes et ajustements encore ouverts.
- Renard comme signature personnelle et vocabulaire polygonal/nature en soutien du contenu. Le renard actuel de Lovable n'est pas retenu tel quel ; son illustration doit être retravaillée.
- Paysages et montagnes discrets, notamment autour des compétences, avec un rendu à affiner.
- Détail inspiré de `git commit -m` apprécié dans le Hero ; texte et traitement final à préciser.
- Effets au survol et mouvements légers, sans rendre une information dépendante d'une animation ou du survol.

## 3. Structure de la page

L'ordre ci-dessous reprend la maquette comme base de composition ; il reste ajustable si la lisibilité l'exige. Les libellés exacts de navigation sont à finaliser.

| Zone | Contenu et rôle dans la V1 |
| --- | --- |
| Navigation | Accès simple aux sections de la page ; présentation adaptée aux petits écrans. |
| Hero | Prénom/nom, rôle de développeur Full Stack, thématiques principales, courte introduction, badge de disponibilité avec indicateur vert et accès aux projets. Conserver l'esprit de la disposition actuelle. |
| À propos | Présentation courte et quatre qualités expliquées brièvement : curiosité, autonomie, polyvalence et sens métier. Éviter de répéter le récit du Parcours. |
| Compétences | Trois groupes : Backend, Frontend, DevOps & Cloud. Technologies associées et cartes inspirées de la maquette, sans jauges de niveau. |
| Projets | Sélection de cartes synthétiques présentant contexte, dates, contribution, technologies pertinentes et accès aux détails. Autres réalisations accessibles dans une présentation secondaire. |
| Parcours | Chronologie classique des expériences, formations, projets et hackathons, avec dates et lieux lorsqu'ils sont connus. |
| Contact | Bannière simple et lisible, action de contact par email et liens professionnels. La composition est retenue, les formulations restent à écrire. |
| Footer | Signature sobre et liens utiles, dans la continuité du contact et de l'identité graphique. |

Le badge de disponibilité exprime une situation réelle à vérifier au moment de la publication ; son texte ne doit pas être déduit de la seule maquette.

## 4. Projets et Parcours : deux lectures complémentaires

Les projets mettent en valeur le travail réalisé. Le Parcours situe les activités dans le temps. Une même réalisation peut apparaître dans les deux sans répéter toute sa description : les détails doivent rester cohérents entre leurs points d'accès.

La base déjà documentée comprend :

- Orange : expérience professionnelle et contributions à une application métier interne.
- Watch Together / AnthLabs : même réalisation collective de visionnage synchronisé ; appellation publique à harmoniser, sans créer de doublon.
- Enjo : conception produit et hackathon international.
- AMTTA : reprise, évolution et suivi d'un site associatif.
- Cabinet d'ostéopathie : conception et intégration d'un site vitrine.

AMTTA et le cabinet restent accessibles dans la V1. Leur place dans la sélection principale ou dans les autres projets reste ouverte, tout comme le nombre de cartes principales.

Les expériences supplémentaires et formations présentes dans le prompt V3 (McDonald's, Larbi des Revêtements, cursus) constituent de nouvelles informations à consolider avant rédaction publique.

Le regroupement éditorial antérieur en expériences professionnelles, expériences académiques et projets indépendants et associatifs reste un repère. La maquette explore aussi quatre types chronologiques (expériences, formations, projets, hackathons) : classement final et libellés à harmoniser, sans imposer des filtres interactifs en V1.

## 5. Interactions prévues

### Navigation et Hero

- Liens d'ancrage pour rejoindre les sections ; action principale du Hero vers les projets.
- Présentation de navigation utilisable au clavier et sur mobile ; forme exacte du menu à définir.
- Un éventuel défilement animé reste discret et respecte la préférence de réduction des mouvements.

### Cartes et détails des projets

- Activation d'une carte ou de son action explicite pour ouvrir une modale détaillée.
- Résumé court sur la carte ; dans la modale : contexte, rôle personnel, contributions, technologies, état du projet et liens disponibles, selon la matière réelle de chaque fiche.
- Fermeture clairement identifiable, utilisable au clavier, notamment avec Échap ; gestion du focus à l'ouverture et retour au déclencheur à la fermeture.
- Modale lisible sur mobile, avec défilement du contenu si nécessaire et sans bloquer l'accès à sa fermeture.
- Liens vers des supports uniquement lorsqu'ils existent et sont partageables.
- Les effets au survol sont accompagnés d'un état de focus visible ; l'accès aux détails reste possible au toucher.

L'ouverture des entrées du Parcours vers ces mêmes détails est une option à préciser. Elle ne doit pas entraîner la création de descriptions divergentes.

### Compétences et contact

- Reprendre l'esprit des états au survol des cartes Compétences, avec un équivalent perceptible au clavier lorsque l'élément est interactif. Aucun lien artificiel à ajouter pour un simple effet décoratif.
- Contact par lien `mailto:` et liens LinkedIn/GitHub, à partir des coordonnées fournies ; pas de formulaire nécessitant un serveur.

## 6. Fidélité des contenus

L'appréciation visuelle du prototype ne vaut pas validation de ses textes.

- Enjo : conserver la nature de concept produit, sans annoncer de développement backend/mobile. La phrase contraire du prompt et de la modale doit être résolue avant publication.
- Watch Together / AnthLabs : distinguer le projet collectif Rust/React de la contribution personnelle infrastructure, automatisation et livraison. La démonstration Railway est arrêtée selon la fiche ; ne pas afficher une démo active sans nouvelle vérification.
- Orange : respecter les limites de publication de la fiche ; nom public AZOR à clarifier, aucun support privé ou détail confidentiel à exposer. Contributions et versions supplémentaires du prompt V3 à consolider.
- AMTTA : ne pas attribuer la création initiale du site à Jonathan.
- Cabinet : conserver le statut en finalisation tant qu'une livraison n'est pas confirmée ; la fiche contient déjà des détails WordPress/Gutenberg et HTML/CSS à exploiter.
- N'ajouter ni résultat chiffré, ni compétence individuelle, ni fonctionnalité livrée à partir d'une simple illustration ou de la stack d'un projet collectif.

## 7. Éléments gardés pour plus tard

| Élément | Intention conservée |
| --- | --- |
| Graphe inspiré de Git | Évolution souhaitée du Parcours pour montrer branches, durées et activités simultanées. Ne bloque pas la chronologie classique de V1. |
| Filtres du Parcours | Possibilité à réexaminer avec la lisibilité de la chronologie et du futur graphe ; pas une exigence de V1. |
| Variantes saisonnières | Printemps, été et hiver, avec atmosphères adaptées ; automne reste la référence de V1. |
| Sélecteur et mémorisation de saison | À traiter avec les variantes, sans imposer maintenant un comportement automatique selon la date. |
| Pages détaillées dédiées | Évolution possible si les modales deviennent insuffisantes pour certaines études de cas. |
| Animations et raffinements supplémentaires | À ajouter selon leur apport réel, une fois la base cohérente. |

Le blog, un CMS, un backend, une base de données et une authentification ne font pas partie du périmètre V1. Leur présence dans des pistes futures ne crée aucun engagement de réalisation.

## 8. Points à trancher avant ou pendant la conception

- Sélection et hiérarchie des projets principaux, visuels associés et supports disponibles.
- Textes publics, liste des technologies représentatives et compléments du parcours.
- Illustration du renard, polices et valeurs de palette.
- Détails de la navigation, des modales et de la chronologie sur desktop/mobile.
- Stack finale et éléments réutilisables de Lovable après inspection du code. React généré par Lovable n'impose pas la stack finale ; Astro/TypeScript reste une piste du contexte.

## 9. Critères de vérification pour la future V1

Ces contrôles sont prévus, pas exécutés à ce stade :

- Contenu fidèle aux contributions et aux statuts réels ; absence de placeholders trompeurs et de liens non disponibles.
- Lecture claire sur mobile et desktop, sans débordement horizontal gênant.
- Navigation, cartes et modales utilisables au clavier et au toucher ; focus visible et fermeture accessible.
- Contrastes lisibles, illustrations décoratives correctement traitées et mouvements réduits selon la préférence utilisateur.
- Projets secondaires accessibles et cohérence des détails entre cartes et Parcours.
- Liens de contact et liens professionnels vérifiés.
- Contrôles techniques adaptés à la stack retenue lors de l'implémentation.

La création de ce cadrage ne démarre ni le développement, ni l'installation de dépendances, ni la génération d'assets.


## Évolution confirmée le 26 octobre 2026 — portage fidèle de Lovable

Jonathan demande de reprendre presque à l’identique la référence Lovable dans Astro : composition, navigation arrondie, survols, animations, saisons et graphe Git. Ce choix remplace la première adaptation libre et avance les saisons ainsi que le graphe, initialement différés.

La version actuelle utilise Astro statique, Tailwind CSS 4 via Vite et des interactions TypeScript natives, sans runtime React. Automne reste le thème initial ; les quatre saisons sont sélectionnables et mémorisées. Le bloc gauche sticky du Parcours est conservé sur grand écran. Les contributions documentées priment sur les textes du prototype.

Voir [le suivi du 26 octobre](suivi/2026-10-26.md) et la documentation d’identité pour les changements et vérifications.
