// Hébergement retenu pour la publication et les crédits du footer.
export const footer = {
  repository: 'https://github.com/FireFox-d3vFR/portfolio',
  author: 'FireFox-d3vFR',
  hosting: { label: 'Vercel', href: 'https://vercel.com/' },
};

export const contact = {
  email: 'maquenhem.jonathan.emploi@gmail.com',
  github: 'https://github.com/FireFox-d3vFR',
  linkedin: 'https://www.linkedin.com/in/jonathan-maquenhem/',
};

// Les essais locaux et les prévisualisations ne comptent pas comme des visites publiques.
export const webAnalyticsEnabled =
  import.meta.env.PROD && import.meta.env.VERCEL_ENV === 'production';
