# Recette de production du 28 octobre 2026

Adresse vérifiée : https://jonathan-mqhm.vercel.app/

Cette recette porte sur le site réellement servi par Vercel, à partir du commit 6659737. Elle complète les contrôles locaux consignés dans la préparation de publication. Aucun code du site ni réglage Vercel modifié pendant cette recette.

## Déploiement et ressources

- Accueil, `/identite/` et `/informations/` : HTTP 200, avec les URL canoniques du nouveau domaine.
- 133 URL locales référencées contrôlées par requête HTTP, y compris images, variantes responsive, scripts, CSS, polices et documents : aucune réponse en erreur.
- Trois PDF disponibles avec le type application/pdf : CV, AnthLabs et Enjo.
- `/partage.png`, `/robots.txt` et `/sitemap.xml` accessibles. Sitemap de trois pages, sans ancienne adresse. Aucun noindex dans les trois pages ni dans leur en-tête X-Robots-Tag.
- Une route inexistante retourne le véritable statut 404.
- HTTP redirige vers HTTPS en 308 ; certificat accepté normalement par les clients de test, sans contournement TLS.
- En-têtes HSTS, X-Content-Type-Options, Referrer-Policy et Permissions-Policy présents.
- Aucune erreur JavaScript relevée pendant les parcours testés dans Chromium.
- Audit npm des dépendances de production : aucune vulnérabilité connue signalée. Ce résultat ne constitue pas un audit de sécurité exhaustif.

## Navigation et accessibilité ciblée

- Un H1 et une langue fr sur chacune des trois pages. Aucun img sans attribut alt relevé. Sur l’accueil, aucun ID dupliqué ni bouton sans texte ou nom accessible repéré par le contrôle DOM simple.
- Activation clavier du lien d’évitement : focus placé sur main#contenu.
- Ouverture des six modales de projet, titres accessibles reliés par aria-labelledby et boutons de fermeture présents.
- Modale Enjo activable au clavier ; tabulation vers ses commandes ; fermeture Échap et retour au bouton déclencheur vérifiés. Le navigateur conserve aussi l’accès normal à ses propres commandes.
- Passage grille/liste effectif. Masquage des hackathons : passage de 12 à 10 événements visibles, puis restauration du filtre.
- Quatre saisons et mode sombre activés et restaurés. Mesures calculées depuis les valeurs OKLCH effectivement servies : couples texte principal/fond, texte secondaire/fond, accent/fond, texte du bouton/accent, texte secondaire du contact/fond sombre et accent du contact/fond sombre.

| Palette | Rapport minimal parmi ces couples |
| --- | --- |
| Printemps clair | 5,72:1 |
| Été clair | 5,16:1 |
| Automne clair | 4,69:1 |
| Hiver clair | 6,04:1 |
| Printemps sombre | 8,48:1 |
| Été sombre | 8,48:1 |
| Automne sombre | 7,57:1 |
| Hiver sombre | 8,45:1 |

Ces mesures ciblées ne couvrent pas tous les éléments, transparences et états de survol. Les pourcentages OKLCH issus de la minification CSS ont été pris en compte dans la conversion sRGB utilisée pour le calcul.

## Formats d’écran

- Accueil à 320, 390 et 720 px : aucun débordement horizontal global constaté.
- Menu mobile : ouverture clavier et fermeture Échap vérifiées.
- Modale Enjo à 320 px : largeur de contenu égale à sa largeur utile (276 px), sans débordement horizontal.
- Vue liste à 720 px et pages Identité/Informations à 390 px contrôlées sans débordement.

## Limites et points secondaires

- Pas de certification RGAA/WCAG ni d’audit exhaustif avec lecteur d’écran. Vérifications effectuées dans Chromium ; autres navigateurs et appareils physiques non couverts.
- Le raccourci de zoom essayé dans le navigateur de test n’a pas modifié le zoom mesuré. Le zoom réel à 200 % n’est donc pas déclaré testé. Les contrôles de reflow par largeur de fenêtre ne sont pas présentés comme un remplacement de ce test.
- Les règles prefers-reduced-motion sont présentes dans le code ; l’activation du réglage système n’a pas été rejouée pendant cette recette.
- Logs Vercel fournis ensuite : les deux avertissements répètent `npm warn Unknown env config "cache-dir"`, une fois à l’installation et une fois au build. Option de configuration d’environnement npm absente du dépôt (aucun `.npmrc` ni réglage cache-dir repéré). Origine exacte dans l’environnement de compilation non inspectée ; aucun correctif du code Astro requis pour ces avertissements. Installation, quatre pages et 100 variantes d’images générées, puis déploiement terminé. À réexaminer si une future version de npm rend ce réglage bloquant.
- L’ancien domaine portfolio-five-black-gf2petom7r.vercel.app renvoie encore 404. Aucun lien interne du nouveau site ne doit l’utiliser ; il n’est pas nécessaire pour le fonctionnement de la nouvelle adresse.

Conclusion : aucun défaut bloquant identifié dans le périmètre testé. La mise à jour du CV, de LinkedIn et de GitHub peut utiliser le nouveau lien. Les avertissements npm sont identifiés comme non bloquants sur ce déploiement ; les essais d’accessibilité complémentaires restent explicitement non réalisés.
