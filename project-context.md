# Contexte du projet — Portfolio personnel

## 1. Objectif du projet

Ce projet consiste à concevoir et développer mon portfolio personnel de développeur.

Le portfolio doit servir à présenter de manière claire et professionnelle :

- mon profil ;
- mon parcours ;
- mes expériences ;
- mes compétences ;
- mes projets ;
- mes centres d’intérêt techniques ;
- mes coordonnées et liens professionnels.

Le site doit également être un projet suffisamment propre et cohérent pour pouvoir lui-même être valorisé sur GitHub.

L’objectif n’est pas de créer une démonstration technique artificiellement complexe, mais de construire un site :

- sobre ;
- moderne ;
- rapide ;
- maintenable ;
- responsive ;
- accessible ;
- agréable à parcourir ;
- visuellement identifiable.

Le portfolio est principalement destiné aux recruteurs, développeurs, responsables techniques et personnes souhaitant découvrir mon profil professionnel.

---

## 2. Principe fondamental

Aucune idée décrite dans ce document ne doit être considérée comme définitivement figée.

Ce document représente l’état actuel de la réflexion.

La structure, le design, les technologies, les composants, les animations, les assets et les choix UX peuvent être remis en question si une meilleure approche apparaît au cours du projet.

Toute proposition d’amélioration est encouragée tant qu’elle reste cohérente avec les objectifs principaux :

- simplicité ;
- qualité ;
- personnalité ;
- performance ;
- lisibilité ;
- cohérence professionnelle ;
- absence d’overengineering.

Le projet doit rester évolutif.

---

# 3. Direction générale du design

Le design recherché est sobre, épuré et moderne.

L’inspiration peut se rapprocher de certaines interfaces Apple ou de sites produits minimalistes :

- beaucoup d’espace ;
- contenu bien hiérarchisé ;
- peu d’éléments décoratifs ;
- animations discrètes ;
- typographie claire ;
- détails graphiques ponctuels ;
- forte attention aux finitions.

Le portfolio ne doit pas donner l’impression d’un site surchargé ou d’une démonstration d’effets frontend.

Les éléments décoratifs doivent soutenir le contenu et non le remplacer.

---

# 4. Identité graphique

L’identité graphique repose principalement sur deux inspirations :

- le renard ;
- l’univers naturel / automnal.

Ces références doivent rester discrètes.

Le portfolio ne doit pas devenir un site entièrement thématisé autour du renard ou de l’automne.

L’idée est plutôt d’utiliser cet univers pour créer une signature personnelle reconnaissable.

---

## 4.1 Renard

Le renard pourrait être l’élément graphique principal du portfolio.

Styles possibles :

- polygonal ;
- low-poly ;
- origami ;
- géométrique ;
- minimaliste.

Déclinaisons envisageables :

- renard complet ;
- tête de renard ;
- silhouette ;
- queue ;
- oreilles ;
- symbole simplifié ;
- favicon ;
- logo personnel.

Un renard plus détaillé pourrait notamment apparaître dans le Hero.

Une version plus simple pourrait servir de signature graphique dans la navigation ou le footer.

---

## 4.2 Nature et automne

Autres éléments décoratifs possibles :

- feuilles ;
- feuilles d’érable ;
- fragments polygonaux ;
- arbres ;
- forêt ;
- montagnes ;
- collines ;
- vent ;
- lignes courbes ;
- formes géométriques abstraites.

Ces assets doivent rester secondaires.

Ils pourraient apparaître :

- dans les coins des sections ;
- autour du Hero ;
- dans le footer ;
- comme séparateurs ;
- en arrière-plan ;
- comme éléments animés très légers.

---

# 5. Thématique saisonnière — piste expérimentale

Une piste créative possible serait de faire évoluer l’identité visuelle du portfolio selon les saisons.

Cette fonctionnalité n’est absolument pas obligatoire pour la première version.

Elle pourrait être expérimentée plus tard si elle apporte réellement quelque chose au site.

L’idée serait de conserver :

- la même structure ;
- les mêmes composants ;
- les mêmes contenus ;
- le même langage graphique ;

tout en faisant évoluer principalement :

- les couleurs ;
- certains assets ;
- certains décors ;
- éventuellement la variante du renard.

Exemples possibles :

## Printemps

Palette :

- vert ;
- vert clair ;
- crème ;
- couleurs naturelles plus vives.

Éléments :

- végétation ;
- feuilles jeunes ;
- fleurs très discrètes ;
- renard roux.

## Été

Palette :

- jaune ;
- sable ;
- orange clair ;
- couleurs chaudes.

Éléments :

- soleil ;
- herbes ;
- paysage plus lumineux ;
- renard roux.

## Automne

Thématique principale envisagée actuellement.

Palette :

- orange ;
- marron ;
- rouille ;
- beige ;
- crème.

Éléments :

- feuilles ;
- forêt ;
- vent ;
- couleurs chaudes ;
- renard roux.

## Hiver

Palette :

- blanc ;
- bleu ;
- gris clair ;
- tons froids.

Éléments :

- neige ;
- montagnes ;
- arbres nus ;
- formes glacées.

Possibilité graphique :

- renard polaire / renard blanc.

Cette piste pourrait éventuellement être réalisée avec un système de design tokens CSS.

Exemple conceptuel :

```css
:root {
  --background: ...;
  --surface: ...;
  --primary: ...;
  --secondary: ...;
  --accent: ...;
}
```

Puis des variantes :

```text
theme-spring
theme-summer
theme-autumn
theme-winter
```

Le changement de saison pourrait éventuellement être :

- automatique selon la date ;
- manuel ;
- uniquement utilisé ponctuellement ;
- ou finalement abandonné.

Aucune décision n’est encore prise.

---

# 6. Palette actuelle

Le thème principal actuellement imaginé est automnal.

Direction possible :

- blanc cassé ;
- crème ;
- beige ;
- gris chaud ;
- anthracite ;
- orange ;
- orange brûlé ;
- rouille ;
- marron.

Exemple indicatif :

```css
--background: #f7f3ed;
--surface: #ffffff;

--text: #20201e;
--muted: #75716d;

--orange: #d96d2d;
--rust: #a94d2a;
--brown: #593c2e;
--sand: #e6d3bd;
```

Ces valeurs sont uniquement des pistes.

---

# 7. Typographie

Direction recherchée :

- simple ;
- moderne ;
- lisible ;
- professionnelle ;
- sans-serif.

Polices envisagées :

- Roboto ;
- Inter ;
- Geist ;
- Manrope ;
- autre alternative cohérente.

La typographie doit rester relativement neutre.

L’identité doit principalement venir :

- des compositions ;
- des couleurs ;
- des illustrations ;
- des détails visuels.

---

# 8. Structure générale envisagée

La première version pourrait prendre la forme d’un portfolio single-page.

Structure possible :

```text
Header
Hero
À propos
Expérience
Projets
Stack / compétences
Contact
Footer
```

Cette organisation peut évoluer.

Des sections peuvent être :

- déplacées ;
- fusionnées ;
- supprimées ;
- ajoutées.

---

# 9. Header / navigation

Navigation simple et légère.

Liens possibles :

- Accueil ;
- À propos ;
- Expérience ;
- Projets ;
- Stack ;
- Contact ;
- CV.

Possibilités :

- navbar fixe ;
- fond transparent au chargement ;
- léger fond après scroll ;
- logo renard ;
- nom ;
- menu mobile minimal.

---

# 10. Hero

Le Hero doit être l’une des parties les plus identitaires du site.

Contenu possible :

- prénom / nom ;
- rôle ;
- courte présentation ;
- mots-clés ;
- CTA vers les projets ;
- lien GitHub ;
- lien CV.

Exemple d’esprit :

```text
Bonjour,
je suis Jonathan.

Développeur Full Stack

Je conçois et développe des applications
web et métier modernes et maintenables.

[ Voir mes projets ]
[ GitHub ]

            illustration renard
```

Décorations possibles :

- renard polygonal ;
- paysage minimaliste ;
- quelques feuilles ;
- fragments géométriques ;
- très léger dégradé.

Le Hero doit rester lisible et aéré.

---

# 11. Section À propos

Présentation courte du profil.

L’objectif n’est pas de reproduire le CV.

Le contenu pourrait présenter :

- mon intérêt pour le développement ;
- ma curiosité technique ;
- mon expérience des applications métier ;
- mon intérêt pour l’architecture ;
- mon exposition au DevOps / cloud ;
- mon approche orientée besoins utilisateurs.

Positionnement général possible :

```text
Développement applicatif
+
Full Stack
+
DevOps / Cloud
```

Sans chercher à se présenter comme expert absolu de chaque domaine.

---

# 12. Expérience professionnelle

Une timeline pourrait être intéressante.

L’expérience Orange devrait probablement être l’élément principal.

Possibilité de montrer la progression au fil des années :

- développement frontend/backend ;
- refonte d’application ;
- cloud ;
- infrastructure ;
- CI/CD ;
- mise en production ;
- fonctionnalités métier ;
- autonomie ;
- relation avec les utilisateurs.

Les autres expériences peuvent être présentées plus succinctement.

L’objectif est d’apporter du contexte complémentaire au CV.

---

# 13. Projets

Les projets doivent occuper une place importante.

Une première approche pourrait afficher quelques projets principaux directement sur la page.

Chaque carte projet pourrait contenir :

- screenshot ;
- nom ;
- courte description ;
- technologies ;
- GitHub ;
- site en ligne éventuel.

Projets possibles à valoriser :

- portfolio ;
- Watch Together ;
- Enjo ;
- AMTTA ;
- site ostéopathie ;
- projets académiques pertinents ;
- futurs projets personnels.

Concernant les projets professionnels internes :

- ne pas exposer d’informations confidentielles ;
- ne pas publier de screenshots privés ;
- privilégier une présentation du contexte, du rôle et des apprentissages.

---

# 14. Pages projet détaillées

Ce n’est pas nécessairement une fonctionnalité de V1.

Plus tard, certains projets pourraient avoir une page dédiée :

```text
/projects/watch-together
/projects/enjo
/projects/amtta
```

Contenu possible :

- contexte ;
- problématique ;
- rôle ;
- architecture ;
- stack ;
- choix techniques ;
- difficultés ;
- solutions ;
- résultats ;
- axes d’amélioration.

---

# 15. Stack et compétences

Technologies possibles à présenter :

## Frontend

- HTML ;
- CSS ;
- JavaScript ;
- TypeScript ;
- Vue.js ;
- Astro.

## Backend

- PHP ;
- Symfony ;
- Node.js ;
- éventuellement autres technologies réellement pertinentes.

## Données

- MariaDB ;
- MySQL ;
- PostgreSQL ;
- autres bases réellement utilisées.

## DevOps / infrastructure

- Docker ;
- Git ;
- GitLab CI/CD ;
- Cloud Foundry ;
- CI/CD ;
- éventuellement Terraform.

Le portfolio ne doit pas devenir une collection de logos.

Les technologies importantes doivent idéalement être liées aux expériences et projets.

---

# 16. Logos des technologies

Utiliser autant que possible les logos officiels.

Pas de transformation pixel-art ou de réinterprétation inutile.

Interaction actuellement envisagée :

```text
état normal :
grayscale / faible saturation

hover :
couleurs originales
```

Possibilité d’ajouter :

- légère augmentation d’opacité ;
- déplacement vertical subtil ;
- petit scale.

---

# 17. Icônes d’interface

Bibliothèques possibles :

- Lucide ;
- Iconify.

Pour :

- GitHub ;
- LinkedIn ;
- mail ;
- liens ;
- téléchargement ;
- flèches ;
- navigation.

Principe :

Les icônes fonctionnelles doivent rester neutres.

Les éléments polygonaux / automnaux constituent la partie identitaire.

---

# 18. Assets graphiques

Les assets personnalisés pourraient être créés ou retravaillés dans Figma.

Bibliothèque indicative :

```text
identity/
  fox-full.svg
  fox-head.svg
  fox-mark.svg

autumn/
  leaf.svg
  leaf-small.svg
  wind.svg
  fragments.svg

scenery/
  mountains.svg
  hills.svg
  forest.svg
  trees.svg
```

D’autres sources sont possibles :

- SVG Repo ;
- Iconify ;
- banques SVG ;
- illustrations libres ;
- génération d’images ;
- créations personnelles.

L’objectif est surtout d’uniformiser leur style.

---

# 19. SVG

Le format SVG semble particulièrement adapté aux éléments décoratifs.

Avantages :

- léger ;
- scalable ;
- compatible responsive ;
- facilement recolorable ;
- facilement animable.

Deux utilisations possibles.

Asset statique :

```html
<img src="/assets/leaf.svg" alt="" />
```

Asset plus avancé :

```text
Fox.astro
Leaf.astro
Landscape.astro
```

avec SVG inline.

Cette deuxième approche permettrait :

- animations ;
- changement de couleurs ;
- manipulation des polygones ;
- adaptation aux saisons.

---

# 20. Paysages minimalistes

Une piste intéressante consiste à utiliser des paysages très légers.

Exemple :

```text
montagnes
↓
collines
↓
forêt
↓
quelques éléments polygonaux
```

Utilisations possibles :

- Hero ;
- fin de section ;
- timeline ;
- footer.

Les paysages ne doivent pas réduire la lisibilité.

---

# 21. Animations

GSAP est actuellement envisagé.

Les animations doivent rester discrètes.

Effets possibles :

- fade ;
- translate ;
- stagger ;
- reveal au scroll ;
- légère parallaxe ;
- SVG draw ;
- apparition progressive du renard ;
- mouvement léger des feuilles ;
- animation du vent.

Un vocabulaire limité d’animations est préférable afin de maintenir une cohérence visuelle.

---

# 22. À éviter côté animation

Éviter :

- animations permanentes inutiles ;
- scroll hijacking ;
- énormes transformations ;
- mouvements incessants ;
- curseur personnalisé complexe ;
- loading screen artificiel ;
- animations longues ;
- effets uniquement présents pour démontrer GSAP.

Le site doit rester très agréable sans animation.

---

# 23. Accessibilité

Le site doit prendre en compte :

- navigation clavier ;
- HTML sémantique ;
- contrastes ;
- textes alternatifs ;
- focus visibles ;
- éléments décoratifs ignorés par les lecteurs d’écran.

Respecter également :

```css
@media (prefers-reduced-motion: reduce) {
  /* animations réduites */
}
```

---

# 24. Stack technique envisagée

Base actuellement privilégiée :

```text
Astro
TypeScript
CSS
GSAP
Lucide
SVG
Git
GitHub
Vercel
```

Cette stack n’est pas définitive.

Chaque technologie doit répondre à un besoin réel.

---

# 25. Astro

Astro semble adapté parce que le portfolio sera majoritairement statique.

Objectifs :

- HTML statique ;
- JavaScript minimal ;
- composants ;
- performance ;
- facilité de maintenance ;
- SEO.

---

# 26. Vue.js

Vue.js reste possible.

Il ne doit être introduit que si certains composants nécessitent réellement :

- état côté client ;
- interactions complexes ;
- logique frontend.

Principe potentiel :

```text
Astro majoritaire
+
Vue ponctuellement
```

Ne pas ajouter Vue simplement pour l’ajouter à la stack.

---

# 27. TypeScript

TypeScript peut notamment servir pour structurer :

- projets ;
- expériences ;
- technologies ;
- réseaux sociaux ;
- données du site.

Exemple :

```ts
interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  github?: string;
  website?: string;
  featured?: boolean;
}
```

---

# 28. CSS

CSS natif est actuellement privilégié.

Possibilité de mettre en place un petit système de design tokens.

Exemple :

```text
styles/
  tokens.css
  reset.css
  typography.css
  animations.css
  global.css
```

Tailwind reste possible si son utilisation devient réellement pertinente.

---

# 29. Architecture indicative

Exemple de structure :

```text
src/
├── assets/
│   ├── identity/
│   ├── seasons/
│   ├── scenery/
│   └── projects/
│
├── components/
│   ├── layout/
│   ├── ui/
│   ├── sections/
│   └── decorative/
│
├── data/
│   ├── projects.ts
│   ├── experiences.ts
│   ├── technologies.ts
│   └── socials.ts
│
├── layouts/
│
├── pages/
│
├── scripts/
│
└── styles/
```

Cette architecture est uniquement une base de réflexion.

Elle doit évoluer en fonction du besoin réel.

---

# 30. Séparation données / présentation

Les données du portfolio devraient idéalement être indépendantes des composants.

Exemples :

```text
projects.ts
experiences.ts
technologies.ts
socials.ts
```

Avantages :

- maintenance ;
- lisibilité ;
- ajout de contenu simple ;
- réutilisation.

---

# 31. Responsive design

Le site doit être pensé pour :

- desktop ;
- laptop ;
- tablette ;
- smartphone.

Les éléments décoratifs peuvent être adaptés en fonction de l’écran.

Certains assets peuvent :

- changer de taille ;
- changer de position ;
- être simplifiés ;
- disparaître sur mobile.

---

# 32. Performance

Le portfolio étant statique, de bonnes performances sont attendues.

Points d’attention :

- JavaScript limité ;
- images optimisées ;
- SVG optimisés ;
- fonts limitées ;
- lazy loading ;
- animations légères ;
- bundle réduit.

Lighthouse peut servir d’indicateur.

---

# 33. SEO

Prévoir au minimum :

- title ;
- description ;
- canonical ;
- Open Graph ;
- favicon ;
- sitemap ;
- robots.txt.

Possibilité d’ajouter des données structurées plus tard.

---

# 34. Open Graph

Créer éventuellement une identité dédiée au partage du portfolio.

Exemple :

```text
Jonathan Maquenhem
Développeur Full Stack

[tête de renard polygonale]
```

---

# 35. Contact

Approche simple privilégiée.

Possibilités :

- email ;
- LinkedIn ;
- GitHub.

Un formulaire n’est pas obligatoire.

Éviter de créer un backend uniquement pour disposer d’un formulaire.

---

# 36. CV

Possibilité d’avoir :

- bouton voir le CV ;
- téléchargement PDF.

Pas nécessairement besoin de lecteur PDF intégré.

---

# 37. Footer

Possibilité d’avoir un footer légèrement plus graphique.

Éléments :

- logo renard ;
- nom ;
- liens ;
- réseaux ;
- décor polygonal ;
- paysage ;
- fond sombre éventuel.

---

# 38. Déploiement

Cible actuelle :

Vercel.

Workflow possible :

```text
GitHub
↓
Pull Request
↓
Preview Vercel
↓
main
↓
Production
```

Le déploiement doit rester simple.

---

# 39. Repository GitHub

Le repository doit être propre.

README possible :

- présentation ;
- screenshot ;
- stack ;
- installation ;
- architecture ;
- choix techniques ;
- déploiement.

Les choix importants peuvent être documentés.

---

# 40. Figma

Figma peut servir de terrain d’expérimentation visuelle.

Organisation possible :

```text
Visual Playground
├── Colors
├── Typography
├── Buttons
├── Cards
├── Icons
├── Fox
├── Leaves
├── Landscapes
├── Seasonal themes
└── Motion ideas
```

Puis éventuellement :

```text
Desktop
Tablet
Mobile
```

---

# 41. Design system léger

Le projet peut progressivement formaliser :

- couleurs ;
- spacing ;
- typographie ;
- radius ;
- boutons ;
- cartes ;
- badges ;
- liens ;
- containers.

Pas besoin de construire une bibliothèque UI complète.

---

# 42. Ton éditorial

Le ton doit rester :

- humain ;
- professionnel ;
- simple ;
- concret.

Éviter le marketing excessif.

Préférer des formulations expliquant réellement le travail réalisé.

---

# 43. Évolutivité

Le projet doit permettre plus tard d’ajouter éventuellement :

- nouveaux projets ;
- nouvelles expériences ;
- pages projet ;
- retours d’expérience ;
- articles ;
- blog.

Ces fonctionnalités ne doivent pas être développées tant qu’elles n’ont pas d’intérêt concret.

---

# 44. Blog

Le blog reste une possibilité future.

Il n’est pas nécessaire pour la première version.

Sujets éventuels :

- retours d’expérience ;
- développement ;
- Symfony ;
- frontend ;
- DevOps ;
- architecture ;
- projets personnels.

---

# 45. Tests

La stratégie de tests doit rester proportionnée au projet.

Possibilités :

- typecheck ;
- build ;
- lint ;
- quelques tests sur les fonctions utiles ;
- tests E2E légers avec Playwright si nécessaire.

Éviter de tester artificiellement chaque composant statique simplement pour augmenter le nombre de tests.

---

# 46. CI/CD

Vercel couvre déjà une grande partie du déploiement.

Une CI GitHub supplémentaire pourrait éventuellement lancer :

```text
lint
typecheck
build
tests
```

Seulement si cela apporte une vraie valeur.

---

# 47. YAGNI / éviter l’overengineering

Ne pas ajouter inutilement :

- backend ;
- base de données ;
- authentification ;
- API ;
- CMS ;
- microservices ;
- infrastructure complexe.

Le projet doit utiliser uniquement ce qui est utile.

Le fait de ne pas utiliser une technologie lorsque le besoin n’existe pas est considéré comme une bonne décision technique.

---

# 48. Philosophie globale

Le portfolio doit viser l’équilibre suivant :

```text
simplicité
+
identité personnelle
+
qualité technique
+
contenu professionnel
+
expérience utilisateur
```

Et non :

```text
maximum de technologies
+
maximum d’effets
+
maximum d’animations
```

---

# 49. Attitude attendue pendant le développement

Pendant le développement :

- proposer des alternatives lorsqu’elles semblent meilleures ;
- challenger les choix existants ;
- expliquer les décisions importantes ;
- éviter les dépendances inutiles ;
- privilégier la solution la plus simple répondant correctement au besoin ;
- conserver une architecture cohérente ;
- penser responsive et accessibilité dès le départ ;
- ne pas considérer les idées visuelles actuelles comme définitives.

Avant d’introduire une technologie ou une abstraction importante, vérifier qu’elle répond réellement à un besoin.

---

# 50. Première phase recommandée

Avant de développer l’intégralité du portfolio, commencer par cadrer :

1. l’architecture technique ;
2. la structure des contenus ;
3. le design system minimal ;
4. la palette ;
5. la typographie ;
6. le Hero ;
7. les premiers assets graphiques ;
8. la structure responsive.

Créer ensuite une première version verticale simple du site.

L’objectif est d’obtenir rapidement une base cohérente avant d’ajouter progressivement les détails, animations et raffinements graphiques.