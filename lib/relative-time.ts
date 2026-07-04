const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;

// Indonesian relative-time label for admin activity feeds.
export function formatRelativeTime(date: Date, now: Date = new Date()): string {
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < MINUTE) return "Baru saja";
  if (seconds < HOUR) return `${Math.floor(seconds / MINUTE)} menit lalu`;
  if (seconds < DAY) return `${Math.floor(seconds / HOUR)} jam lalu`;
  if (seconds < WEEK) return `${Math.floor(seconds / DAY)} hari lalu`;
  if (seconds < WEEK * 4) return `${Math.floor(seconds / WEEK)} minggu lalu`;
  return date.toLocaleDateString("id-ID", { dateStyle: "medium" });
}
