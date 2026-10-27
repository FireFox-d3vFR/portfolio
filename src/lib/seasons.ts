export const SEASONS = ['printemps', 'ete', 'automne', 'hiver'] as const;
export type Season = (typeof SEASONS)[number];
export type SeasonMode = 'auto' | 'manual';

// Saisons calendaires de l’hémisphère nord, calculées avec la date locale.
export const SEASONS_BY_MONTH: readonly Season[] = [
  'hiver',
  'hiver',
  'printemps',
  'printemps',
  'printemps',
  'ete',
  'ete',
  'ete',
  'automne',
  'automne',
  'automne',
  'hiver',
];

export function isSeason(value: unknown): value is Season {
  return typeof value === 'string' && (SEASONS as readonly string[]).includes(value);
}

export function getSeasonForDate(date = new Date()): Season {
  const season = SEASONS_BY_MONTH[date.getMonth()];
  if (!season) throw new RangeError('Invalid date');
  return season;
}

export function resolveSeasonPreferences(
  savedMode: string | null,
  savedSeason: string | null,
  date = new Date(),
) {
  const automaticSeason = getSeasonForDate(date);
  const hasManualChoice = isSeason(savedSeason);
  // Conserver le choix du visiteur lors de la reprise des anciennes préférences.
  const mode: SeasonMode =
    hasManualChoice && (savedMode === 'manual' || savedMode === null) ? 'manual' : 'auto';
  return {
    mode,
    manualSeason: hasManualChoice ? savedSeason : automaticSeason,
    season: mode === 'manual' && hasManualChoice ? savedSeason : automaticSeason,
  };
}

export function millisecondsUntilNextLocalDay(date = new Date()): number {
  // Le calcul calendaire prend en compte les années bissextiles et les changements d’heure.
  const midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  return midnight.getTime() - date.getTime() + 100;
}
