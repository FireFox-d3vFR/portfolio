# Préparation de la publication statique

## Configuration retenue

- Astro génère uniquement des fichiers statiques dans `dist/`.
- Node 24.x, dépendances verrouillées par `package-lock.json`.
- Vercel : preset Astro, commande `npm run build`, dossier `dist`. Pas d’adaptateur serveur, de fonction ni de base de données.
- `vercel.json` définit aussi trois en-têtes simples : types MIME stricts, référent limité entre origines et désactivation des permissions caméra/micro/géolocalisation.

## Adresse publique et indexation

La configuration lit `SITE_URL` dans l’environnement, puis dans le fichier `.env` local, sinon `VERCEL_PROJECT_PRODUCTION_URL`. Astro évalue sa configuration avant son chargement habituel des fichiers `.env` ; le helper Vite `loadEnv` charge donc explicitement cette valeur. Cette dernière indique le domaine de production, y compris pendant une prévisualisation ; aucun domaine personnel n’est requis pour le premier déploiement.

En local, copier `.env.example` vers `.env` puis modifier `SITE_URL` si besoin ; reconstruire le site ou redémarrer le serveur après un changement. Le fichier `.env` reste ignoré par Git et n’est jamais poussé.

Dans Vercel, conserver l’exposition des variables système activée. Pour un domaine personnel, définir `SITE_URL=https://le-domaine-choisi.fr` dans l’environnement de production puis reconstruire le site. L’URL ne doit contenir ni chemin ni identifiant.

Les balises canoniques et l’image de partage utilisent cette adresse. Le sitemap référence l’accueil, l’identité et les informations du site ; la 404 est exclue. Sans adresse publique, aucun domaine fictif ni `localhost` n’est inscrit dans ces métadonnées et les pages restent en `noindex`. Les builds Vercel `preview` sont également en `noindex`, même quand le domaine de production est connu.

La carte de partage `public/partage.png` mesure 1200 × 630 pixels et reprend le logo et les couleurs du portfolio. La page 404 dispose des mêmes préférences d’affichage et d’un retour à l’accueil.

## Supports des projets

Les captures et maquettes PNG originales ont été déplacées de `public/assets/projects/` vers `src/assets/projects/`, en conservant leurs sous-dossiers et noms. Elles restent versionnées et ne sont pas modifiées. Astro génère des WebP d’aperçu (1440 px maximum, qualité 85) et des miniatures séparées (160 px, qualité 75), avec des URL hachées. Ne pas recopier les originaux dans `public/` pour les afficher.

Les chemins PNG dans les données servent de clés pour retrouver les sources locales ; le module `media.ts` les remplace par les URL compilées. Une source manquante fait échouer le build. Les planches SVG restent dans `public/`, avec leurs polices et leur netteté conservées. Les PDF restent inchangés dans `public/assets/pdf/`, ouverts à la demande.

## Informations et confidentialité

La page `/informations/` présente mon rôle d’éditeur, mon email de contact, les préférences mémorisées et les crédits. Aucun outil de publicité ou de mesure d’audience n’est ajouté. Les informations de Vercel ne sont affichées comme hébergement effectif que lors d’un build Vercel ; la version locale signale le statut de prévisualisation.

Cette préparation décrit le fonctionnement actuel ; elle ne constitue pas une certification juridique ou une déclaration de conformité RGAA. Si les usages changent (formulaire, mesure d’audience, vente), les informations devront être revues.

## Vérifications et limites

Recette locale : génération statique, liens et assets locaux, menu mobile, ouvertures et fermeture Échap des modales, retour au déclencheur, galerie à 390 et 320 px, préférences des huit palettes. Lien d’évitement avec cible explicitement focalisable. Accent automnal clair légèrement foncé pour améliorer le contraste du petit texte et des boutons. Aucun remaniement du design.

Une simulation locale des variables Vercel permet de contrôler la détection de domaine et les métadonnées. Elle ne remplace pas un vrai déploiement sur le compte du propriétaire. La recette du 28 octobre 2026 sur le domaine public confirme HTTPS, les en-têtes servis par Vercel, la réponse HTTP 404 et les PDF. Le périmètre exact et les limites sont décrits dans [la recette de production](recette-production.md). Les essais locaux Chromium ne couvrent pas toutes les combinaisons de navigateurs, zooms et lecteurs d’écran.

Sources :
- https://docs.astro.build/en/guides/deploy/vercel/
- https://vercel.com/docs/environment-variables/system-environment-variables
- https://vercel.com/docs/functions/runtimes/node-js/node-js-versions
- https://vercel.com/legal/privacy-notice
- https://www.cnil.fr/fr/questions-reponses-lignes-directrices-modificatives-et-recommandation-cookies-traceurs
