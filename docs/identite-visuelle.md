# Identité visuelle — référence Lovable portée dans Astro

Mise à jour : 26 octobre 2026 (Europe/Paris).

À la demande de Jonathan, le portfolio Astro reprend désormais très fidèlement la maquette Lovable fournie, y compris ses quatre saisons. Cette étape remplace la première adaptation libre ; les images restent une base provisoire.

## Composition et interactions

- Navigation fixe, fond translucide au défilement, liens avec survol arrondi et menu mobile.
- Hero : mêmes proportions, hiérarchie, badge de disponibilité, thématiques, actions, renard et paysage masqué.
- Signature Git avec curseur clignotant et renard animé.
- Qualités : coins découpés, feuilles, bordures et léger déplacement au survol.
- Compétences et contact : sections sombres, texture géométrique et montagnes.
- Trois projets sélectionnés, liste secondaire et détails partagés dans des modales natives.
- Graphe chronologique avec pistes parallèles, quatre filtres indépendants, état vide et détails cliquables.
- Bloc gauche du Parcours sticky sur grand écran, conservé selon le retour précédent de Jonathan.

## Palette et saisons

Les valeurs sémantiques OKLCH de Lovable sont portées dans `src/styles/portfolio.css`. Ce fichier est la source de vérité ; l’ancienne palette approximative n’est plus utilisée.

| Rôle | Variable | Automne |
| --- | --- | --- |
| Fond | `--background` | `oklch(.965 .018 80)` |
| Surface | `--card` | `oklch(.985 .012 80)` |
| Texte | `--foreground` | `oklch(.24 .015 50)` |
| Accent | `--primary` | `oklch(.6 .17 45)` |
| Soutien | `--bark` | `oklch(.42 .07 45)` |
| Badges | `--secondary` | `oklch(.91 .03 75)` |
| Fond sombre | `--ink` | `oklch(.22 .012 50)` |
| Accent sombre | `--primary-on-ink` | `oklch(.74 .14 55)` |

Printemps, été et hiver remplacent les tokens de fonds, textes, accents, surfaces, bordures et sections sombres, ainsi que le paysage. Le renard conserve son pelage. L’automne reste la valeur initiale. La sélection est manuelle et mémorisée localement si le stockage du navigateur est disponible.

Ces valeurs reproduisent la référence ; elles ne constituent pas un audit complet de contraste ou d’accessibilité.

## Typographie

- **Fraunces Variable**, romain et italique, avec taille optique automatique : titres et accents éditoriaux.
- **Manrope 400, 500, 600, 700** : texte courant, navigation et actions.
- **JetBrains Mono 400, 500** : dates, technologies et signature Git.

Les polices Fontsource sont servies localement. Aucun chargement Google Fonts à l’exécution.

## Assets et mise en œuvre

- Renard et quatre paysages copiés de `../portfolio-lovable/src/assets/` dans `src/assets/images/`, sans modification des originaux.
- Astro génère les variantes WebP au build, dont les quatre paysages de 768 px.
- Feuilles et montagnes portées en composants SVG Astro.
- Illustrations des projets symboliques : aucun support interne Orange publié ; illustration mobile/maison pour Enjo et site vitrine pour le cabinet.
- Tailwind CSS 4 via Vite permet de conserver les classes et espacements de Lovable.
- Interactions en TypeScript et API natives du navigateur ; aucun runtime React.
- Focus visibles, gestion du focus des modales et réduction des mouvements. Les éléments de contenu restent visibles si les animations ne sont pas initialisées.

Les textes corrigés du dépôt priment sur ceux de la maquette, notamment les contributions réelles à Enjo et AnthLabs.

## Prévisualisation

- `http://localhost:4321/` : portfolio.
- `http://localhost:4321/identite/` : planche utilisant les mêmes tokens et le même sélecteur de saisons.
- `http://localhost:8080/` : référence Lovable distincte.

Les deux projets restent indépendants. Aucun déploiement effectué pendant ce portage.


## Ajustements du 27 octobre 2026

Logos monochromes avec les noms des technologies, sans bannière supplémentaire. Logos Simple Icons servis sous forme de SVG intégrés au HTML ; API/SQL représentés par des pictogrammes génériques. Scrollbars fines utilisant les tokens saisonniers. Coordonnées complètes avec retour à la ligne.

Le Parcours conserve son graphe et son bloc sticky, avec guides pointillés vers les cartes, années renforcées et légende événement/période/en cours. Un CV téléchargeable est prévu, en attente du fichier ; aucun lien fictif n’est affiché.


### Affinage après validation

Les logos restent crème au repos et prennent leur couleur officielle au survol. Un fond clair discret accompagne les marques trop sombres pour la section compétences. Les cartes du contact sont élargies pour afficher leurs liens en entier sur une seule ligne ; sur petit écran, leur taille de texte s’adapte. Le bouton « Mon CV » est préparé dans la navigation, avec le téléchargement du futur fichier public/assets/pdf/cv-jonathan-maquenhem.pdf.


### Logos des projets

Les badges techniques des cartes et modales partagent le composant TechnologyBadge. Ils restent monochromes au repos comme au survol ; les couleurs de marque sont réservées aux badges de la section Compétences. Les libellés métier restent sans icône, notamment Enjo. HTML et CSS ont des badges distincts dans les détails du cabinet.


### Présentations des projets

Les cinq projets ont le même traitement et le même accès aux détails. La grille affiche les visuels, résumés et technologies ; la liste affiche une version compacte avec titre et dates. Un sélecteur Grille / Liste mémorise la préférence. Les anciennes mentions « sélection » et « Autres projets » sont supprimées. L’ordre reste provisoire.


### Identité propre à chaque projet

Le dossier src/assets/logo/ accueille les images officielles fournies par Jonathan. ProjectCover les affiche sans recadrage : visuel large en grille, vignette à gauche en liste. Les noms de fichiers et formats sont documentés dans le README du dossier. En leur absence, illustrations provisoires en grille et initiales neutres en liste.

La liste conserve le titre et les dates, avec les badges techniques ou métier à droite sur desktop et sous le texte sur mobile. Les résumés longs restent réservés à la grille et aux modales.


### Logos fournis : ajustement des proportions

Les cinq logos reçus sont affichés en grille et en liste. Leurs dimensions et marges se règlent par projet dans src/data/project-logos.ts. Les boîtes plus généreuses d’AMTTA et du cabinet compensent leurs marges transparentes. Le fond de présentation est blanc pour préserver la lisibilité des marques dans toutes les saisons. Les originaux restent inchangés ; Astro produit les variantes WebP à qualité 90 sans dépasser la définition source.


### Cohérence des modales

Les bandeaux des modales de projets utilisent désormais ProjectCover, comme les cartes : logos officiels fournis, fond blanc neutre et proportions centralisées. Le reste des fiches est conservé.


### Hero et réglages d’affichage

Le Hero débute sur le badge de disponibilité, avec un espacement réduit sous la navigation ; le repère Exploration est retiré. Les saisons sont accessibles par pictogrammes dans un panneau Préférences à côté du CV.

Le panneau comporte un interrupteur clair/sombre indépendant de la saison. Chaque saison dispose d’une déclinaison sombre via les mêmes tokens sémantiques. Les logos des projets gardent leurs fonds blancs pour préserver leur identité. Les choix sont mémorisés localement. Français actif et anglais désactivé comme emplacement pour une évolution ultérieure ; aucune traduction ni saison automatique n’est activée.


### Calendrier saisonnier activé

Les saisons peuvent désormais suivre la date locale du navigateur : mars–mai, juin–août, septembre–novembre et décembre–février. Le mode automatique est initial pour les nouveaux visiteurs ; les choix manuels déjà mémorisés sont préservés. Choisir une icône passe en manuel. L’interrupteur permet de réactiver le calendrier, indépendamment de l’apparence claire/sombre. Voir [le fonctionnement détaillé](saisons.md).


### Disponibilité et badges du Hero

Les trois états disponibles, à l’écoute et indisponible utilisent des libellés explicites et des indicateurs vert, ambre et rouge brique. Leurs couleurs gardent leur sens quelle que soit la saison et s’adaptent à l’apparence claire/sombre. Le statut est un contenu propriétaire, configuré dans src/data/profile.ts ; le public reste actuellement sur disponible. La planche /identite/ présente les trois variantes.

Le Hero associe les logos Symfony et Vue.js à leurs noms ; DevOps & Cloud reste un seul badge avec une boucle infinie générique. L’introduction est conservée jusqu’à validation d’une formulation représentant le parcours dans son ensemble.
