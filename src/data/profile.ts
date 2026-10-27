export const availabilityStates = {
  available: {
    label: 'Disponible pour de nouvelles opportunités',
    light: '#5A8054',
    dark: '#93BC86',
  },
  open: {
    label: 'À l’écoute d’opportunités ciblées',
    light: '#AD7828',
    dark: '#E1B766',
  },
  unavailable: {
    label: 'Indisponible pour le moment',
    light: '#B35E50',
    dark: '#DF9284',
  },
} as const;

export type AvailabilityStatus = keyof typeof availabilityStates;

// Owner-controlled content, independent of visitor preferences and seasons.
export const availabilityStatus: AvailabilityStatus = 'available';
