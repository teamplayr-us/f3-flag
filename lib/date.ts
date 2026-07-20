// Timezone-safe date formatting for ISO YYYY-MM-DD strings (no Date parsing
// pitfalls). Keeps the schedule deterministic across server and client.
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function parts(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return { y, m: m - 1, d };
}

export function formatEventDate(iso: string): string {
  const { y, m, d } = parts(iso);
  // Zeller-free weekday via UTC date (date-only, no TZ shift).
  const weekday = DAYS[new Date(Date.UTC(y, m, d)).getUTCDay()];
  return `${weekday}, ${MONTHS[m]} ${d}`;
}

export function eventMonth(iso: string): string {
  const { y, m } = parts(iso);
  return `${MONTHS[m]} ${y}`;
}
