import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assignLanes, getJourneyLayout, monthIndex } from '../src/lib/journey.ts';
const item = (id, category, start, end) => ({id, category, start, end});
const present = monthIndex('2026-10');
test('overlapping activities have distinct lanes; later activities can reuse a lane', () => {
 const entries = [item('a','experience','2022-01','2023-06'),item('b','experience','2023-01','2024-01'),item('c','experience','2024-02','2025-01')];
 const {lanes,count}=assignLanes(entries,present);
 assert.equal(count,2); assert.notEqual(lanes.get('a'),lanes.get('b')); assert.equal(lanes.get('a'),lanes.get('c'));
});
test('same-month boundaries overlap and categories retain separate blocks', () => {
 const {lanes,count}=assignLanes([item('a','experience','2022-01','2023-01'),item('b','experience','2023-01','2024-01'),item('c','education','2022-01','2024-01')],present);
 assert.equal(count,3); assert.equal(lanes.get('c'),2);
});
test('ongoing branches continue through the top row and events remain chronological', () => {
 const entries=[item('ongoing','projects','2022-05',null),item('point','hackathons','2026-07','2026-07'),item('job','experience','2023-09','2026-09')];
 const original=JSON.stringify(entries);
 const {rows}=getJourneyLayout(entries,present);
 assert.deepEqual(rows.map(row=>row.entry.id),['point','job','ongoing']);
 assert.equal(rows[0].lines.find(line=>line.category==='projects').capped,false);
 assert.equal(rows[0].lines.find(line=>line.category==='experience').capped,true);
 assert.equal(rows[0].upward,false);
 assert.equal(JSON.stringify(entries),original);
});
test('filtering recomputes lanes and removes connections to hidden activities', () => {
 const {rows,count}=getJourneyLayout([item('education','education','2024-09','2026-09')],present);
 assert.equal(count,1); assert.equal(rows[0].lane,0); assert.deepEqual(rows[0].lines,[]);
 assert.deepEqual(getJourneyLayout([],present),{rows:[],count:0});
});

test('same-month hackathons remain isolated nodes, including alongside another event', () => {
 const entries=[item('cabinet','projects','2026-07',null),item('anthlabs','hackathons','2026-07','2026-07'),item('enjo','hackathons','2026-03','2026-03')];
 const {rows}=getJourneyLayout(entries,present);
 const {lanes}=assignLanes(entries,present);
 assert.equal(rows.find(row=>row.entry.id==='anthlabs').upward,false);
 assert.equal(rows.find(row=>row.entry.id==='enjo').upward,false);
 assert.equal(rows.flatMap(row=>row.lines).some(line=>line.lane===lanes.get('anthlabs')),false);
});
test('March 2024 job end sits between September 2024 studies and September 2023 apprenticeship', () => {
 const entries=[item('mastere','education','2024-09','2026-09'),item('orange','experience','2023-09','2026-09'),item('mcdo','experience','2022-06','2024-03')];
 const {rows}=getJourneyLayout(entries,present);
 const {lanes}=assignLanes(entries,present);
 const end=rows.find(row=>row.entry.id==='mastere').lines.find(line=>line.lane===lanes.get('mcdo'));
 assert.equal(end.capped,true);
 assert.equal(end.capProgress,.5);
 const overlap=rows.find(row=>row.entry.id==='orange').lines.find(line=>line.lane===lanes.get('mcdo'));
 assert.equal(overlap.capped,false);
 assert.equal(rows.find(row=>row.entry.id==='mcdo').upward,true);
});
