# Assets de référence Lovable

Images reprises le 26 octobre 2026 depuis le projet fourni par Jonathan dans `/home/jonathan/Dev/portfolio-lovable/src/assets/`.

- `fox.png` : renard polygonal transparent, 1024 × 1024.
- `autumn-landscape.jpg` : paysage automnal, 1024 × 1024.
- `spring-landscape.png`, `summer-landscape.png`, `winter-landscape.png` : paysages saisonniers, 1024 × 1024.

Les trois derniers fichiers portaient l’extension .jpg dans la référence, mais leur contenu est au format PNG. Seule leur extension a été corrigée ; les octets originaux sont conservés.

Astro génère les variantes WebP au build. Ces images constituent une base provisoire pour retrouver la maquette et pourront être remplacées ultérieurement.


## Renards entiers, 27 octobre 2026

- `fox-facets.png` : renard seul extrait de la piste Facettes douces, fond alpha transparent.
- `fox-curves.png` : renard seul extrait de Courbes et paysage, fond alpha transparent.

Extractions réalisées avec l’outil intégré imagegen à partir des planches validées, sans leur paysage, leur texte ni leurs logos. Les planches s’inspirent de l’avatar et des dessins fournis par Jonathan.

La variante active du Hero est choisie dans `src/data/fox.ts`. Le Hero conserve ses paysages saisonniers existants. Les deux personnages sont comparables dans `/identite/`. `fox.png` est conservé comme référence historique. Les nouveaux logos de navigation et du footer sont dans `src/assets/brand/`, avec leur sélection dans `src/data/fox.ts`. Aucun original n’est écrasé.


## Empreintes de renard, 27 octobre 2026

`fox-pawprints.png` : deux empreintes brunes légèrement facettées, fond transparent, générées avec imagegen (outil intégré). Composant décoratif `FoxTracks.astro` partagé entre l’introduction de la page identité et le contact. Source alpha conservée, variantes WebP optimisées par Astro. Prompt archivé dans `docs/identite-renard.md`.
