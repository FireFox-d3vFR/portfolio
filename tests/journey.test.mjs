import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assignLanes, getJourneyLayout, monthIndex } from '../src/lib/journey.ts';
const item = (id, category, start, end) => ({ id, category, start, end });
const present = monthIndex('2026-10');
test('les activités simultanées ont des pistes distinctes, réutilisables ensuite', () => {
  const entries = [
    item('a', 'experience', '2022-01', '2023-06'),
    item('b', 'experience', '2023-01', '2024-01'),
    item('c', 'experience', '2024-02', '2025-01'),
  ];
  const { lanes, count } = assignLanes(entries, present);
  assert.equal(count, 2);
  assert.notEqual(lanes.get('a'), lanes.get('b'));
  assert.equal(lanes.get('a'), lanes.get('c'));
});
test('les bornes d’un même mois se chevauchent et les catégories restent séparées', () => {
  const { lanes, count } = assignLanes(
    [
      item('a', 'experience', '2022-01', '2023-01'),
      item('b', 'experience', '2023-01', '2024-01'),
      item('c', 'education', '2022-01', '2024-01'),
    ],
    present,
  );
  assert.equal(count, 3);
  assert.equal(lanes.get('c'), 2);
});
test('les branches en cours continuent au-dessus du premier événement et les dates restent ordonnées', () => {
  const entries = [
    item('ongoing', 'projects', '2022-05', null),
    item('point', 'hackathons', '2026-07', '2026-07'),
    item('job', 'experience', '2023-09', '2026-09'),
  ];
  const original = JSON.stringify(entries);
  const { rows } = getJourneyLayout(entries, present);
  assert.deepEqual(
    rows.map((row) => row.entry.id),
    ['point', 'job', 'ongoing'],
  );
  assert.equal(rows[0].lines.find((line) => line.category === 'projects').capped, false);
  assert.equal(rows[0].lines.find((line) => line.category === 'experience').capped, true);
  assert.equal(rows[0].upward, false);
  assert.equal(JSON.stringify(entries), original);
});
test('les filtres recalculent les pistes et retirent les liaisons masquées', () => {
  const { rows, count } = getJourneyLayout(
    [item('education', 'education', '2024-09', '2026-09')],
    present,
  );
  assert.equal(count, 1);
  assert.equal(rows[0].lane, 0);
  assert.deepEqual(rows[0].lines, []);
  assert.deepEqual(getJourneyLayout([], present), { rows: [], count: 0 });
});

test('les hackathons ponctuels restent des nœuds isolés même à côté d’un autre événement', () => {
  const entries = [
    item('cabinet', 'projects', '2026-07', null),
    item('anthlabs', 'hackathons', '2026-07', '2026-07'),
    item('enjo', 'hackathons', '2026-03', '2026-03'),
  ];
  const { rows } = getJourneyLayout(entries, present);
  const { lanes } = assignLanes(entries, present);
  assert.equal(rows.find((row) => row.entry.id === 'anthlabs').upward, false);
  assert.equal(rows.find((row) => row.entry.id === 'enjo').upward, false);
  assert.equal(
    rows.flatMap((row) => row.lines).some((line) => line.lane === lanes.get('anthlabs')),
    false,
  );
});
test('la fin du contrat de mars 2024 se place entre le Mastère et le début de l’alternance', () => {
  const entries = [
    item('mastere', 'education', '2024-09', '2026-09'),
    item('orange', 'experience', '2023-09', '2026-09'),
    item('mcdo', 'experience', '2022-06', '2024-03'),
  ];
  const { rows } = getJourneyLayout(entries, present);
  const { lanes } = assignLanes(entries, present);
  const end = rows
    .find((row) => row.entry.id === 'mastere')
    .lines.find((line) => line.lane === lanes.get('mcdo'));
  assert.equal(end.capped, true);
  assert.equal(end.capProgress, 0.5);
  const overlap = rows
    .find((row) => row.entry.id === 'orange')
    .lines.find((line) => line.lane === lanes.get('mcdo'));
  assert.equal(overlap.capped, false);
  assert.equal(rows.find((row) => row.entry.id === 'mcdo').upward, true);
});
