export const CATEGORIES = [
  { key: 'experience', label: 'Expériences', icon: 'briefcase' },
  { key: 'education', label: 'Formations', icon: 'graduation' },
  { key: 'projects', label: 'Projets', icon: 'code' },
  { key: 'hackathons', label: 'Hackathons', icon: 'flag' },
] as const;

export type Category = (typeof CATEGORIES)[number]['key'];
export interface JourneyItem {
  id: string;
  category: Category;
  start: string;
  end: string | null;
}
export const monthIndex = (value: string) => {
  const [year, month] = value.split('-').map(Number);
  return year! * 12 + month! - 1;
};
export const currentMonth = () => {
  const now = new Date();
  return now.getFullYear() * 12 + now.getMonth();
};

export function assignLanes(entries: readonly JourneyItem[], present = currentMonth()) {
  const lanes = new Map<string, number>();
  let offset = 0;
  for (const { key } of CATEGORIES) {
    const items = entries
      .filter((entry) => entry.category === key)
      .sort((a, b) => monthIndex(a.start) - monthIndex(b.start));
    const ends: number[] = [];
    for (const entry of items) {
      let lane = ends.findIndex((end) => end < monthIndex(entry.start));
      if (lane === -1) lane = ends.length;
      ends[lane] = entry.end ? monthIndex(entry.end) : present;
      lanes.set(entry.id, offset + lane);
    }
    offset += ends.length;
  }
  return { lanes, count: offset };
}

export function getJourneyLayout<T extends JourneyItem>(
  entries: readonly T[],
  present = currentMonth(),
) {
  const endOf = (entry: JourneyItem) => (entry.end ? monthIndex(entry.end) : present);
  const sorted = [...entries].sort(
    (a, b) => monthIndex(b.start) - monthIndex(a.start) || endOf(b) - endOf(a),
  );
  const { lanes, count } = assignLanes(sorted, present);
  const positions = new Map(sorted.map((entry, index) => [entry.id, index]));
  // Un segment relie cette ligne à l’événement précédent dans le temps.
  // Placer les fins de période dans cet intervalle, sans les décaler au nœud suivant.
  const alive = (entry: JourneyItem, row: number) =>
    entry.end !== entry.start &&
    row < positions.get(entry.id)! &&
    !!sorted[row + 1] &&
    monthIndex(sorted[row + 1]!.start) <= endOf(entry);

  const rows = sorted.map((entry, index) => ({
    entry,
    lane: lanes.get(entry.id)!,
    year:
      index === 0 || sorted[index - 1]!.start.slice(0, 4) !== entry.start.slice(0, 4)
        ? entry.start.slice(0, 4)
        : '',
    upward:
      entry.end !== entry.start &&
      (index === 0 ? !entry.end || endOf(entry) >= present : alive(entry, index - 1)),
    lines: sorted
      .filter((other) => other.id !== entry.id && alive(other, index))
      .map((other) => ({
        lane: lanes.get(other.id)!,
        category: other.category,
        capped: endOf(other) < monthIndex(entry.start) || (index === 0 && endOf(other) < present),
        capProgress:
          endOf(other) < monthIndex(entry.start)
            ? (monthIndex(entry.start) - endOf(other)) /
              (monthIndex(entry.start) - monthIndex(sorted[index + 1]!.start))
            : 0,
      })),
  }));
  return { rows, count };
}
