import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  getSeasonForDate,
  resolveSeasonPreferences,
  millisecondsUntilNextLocalDay,
} from '../src/lib/seasons.ts';

test('les douze mois locaux respectent le calendrier saisonnier', () => {
  const expected = [
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
  expected.forEach((season, month) =>
    assert.equal(getSeasonForDate(new Date(2026, month, 15)), season),
  );
});

test('chaque saison change à minuit local le premier jour du mois prévu', () => {
  for (const [month, before, after] of [
    [2, 'hiver', 'printemps'],
    [5, 'printemps', 'ete'],
    [8, 'ete', 'automne'],
    [11, 'automne', 'hiver'],
  ]) {
    assert.equal(getSeasonForDate(new Date(2026, month, 0, 23, 59, 59, 999)), before);
    assert.equal(getSeasonForDate(new Date(2026, month, 1, 0, 0, 0)), after);
  }
});

test('l’hiver couvre le changement d’année et le 29 février', () => {
  assert.equal(getSeasonForDate(new Date(2026, 11, 31)), 'hiver');
  assert.equal(getSeasonForDate(new Date(2027, 0, 1)), 'hiver');
  assert.equal(getSeasonForDate(new Date(2028, 1, 29)), 'hiver');
});

test('la date s’applique aux nouveaux visiteurs et les anciens choix manuels sont conservés', () => {
  const date = new Date(2026, 9, 27);
  assert.deepEqual(resolveSeasonPreferences(null, null, date), {
    mode: 'auto',
    manualSeason: 'automne',
    season: 'automne',
  });
  assert.deepEqual(resolveSeasonPreferences(null, 'hiver', date), {
    mode: 'manual',
    manualSeason: 'hiver',
    season: 'hiver',
  });
});

test('le choix manuel prévaut sur la date et reste mémorisé en mode automatique', () => {
  const date = new Date(2026, 9, 27);
  assert.equal(resolveSeasonPreferences('manual', 'ete', date).season, 'ete');
  assert.deepEqual(resolveSeasonPreferences('auto', 'ete', date), {
    mode: 'auto',
    manualSeason: 'ete',
    season: 'automne',
  });
});

test('les préférences invalides reviennent à la saison actuelle', () => {
  const date = new Date(2026, 3, 12);
  assert.equal(resolveSeasonPreferences('manual', 'unknown', date).mode, 'auto');
  assert.equal(resolveSeasonPreferences('unknown', 'hiver', date).season, 'printemps');
  assert.throws(() => getSeasonForDate(new Date('invalid')), RangeError);
});

test('la prochaine actualisation suit minuit local même lors des changements d’heure', () => {
  for (const date of [
    new Date(2026, 2, 29, 0, 15),
    new Date(2026, 9, 25, 0, 15),
    new Date(2026, 11, 31, 23, 59, 59),
  ]) {
    const delay = millisecondsUntilNextLocalDay(date);
    const next = new Date(date.getTime() + delay);
    const expected = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 1,
      0,
      0,
      0,
      100,
    );
    assert.equal(next.getTime(), expected.getTime());
    assert.ok(delay > 0 && delay < 26 * 60 * 60 * 1000);
  }
});
