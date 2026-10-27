import facets from '../../assets/images/fox-facets.png';
import curves from '../../assets/images/fox-curves.png';

export const foxVariants = {
  facets: {
    source: facets,
    label: 'Facettes douces',
    description: 'Des volumes polygonaux et une grande queue repliée autour des pattes.',
  },
  curves: {
    source: curves,
    label: 'Courbes et paysage',
    description: 'Des formes plus fluides pour contraster avec le décor polygonal.',
  },
} as const;

// Variante du Hero ; les deux pistes sont comparées sur la page identité.
export const heroFoxVariant: keyof typeof foxVariants = 'facets';

import logoFacets from '../../assets/brand/fox-logo-facets.png';
import logoCurves from '../../assets/brand/fox-logo-curves.png';
import logoLine from '../../assets/brand/fox-logo-line.png';

export const foxLogoVariants = {
  facets: { source: logoFacets, label: 'Facettes douces' },
  curves: { source: logoCurves, label: 'Courbes et paysage' },
  line: { source: logoLine, label: 'Trait et silhouette' },
} as const;

export const activeFoxLogo: keyof typeof foxLogoVariants = 'facets';
