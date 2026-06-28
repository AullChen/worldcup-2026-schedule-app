import { initialData } from "../worker/index.js";

const now = process.env.NOW ? new Date(process.env.NOW) : new Date();
const windowMs = Number(process.env.REFRESH_WINDOW_MINUTES || 29) * 60 * 1000;
const dailyHoursUtc = new Set([0, 12]);
const groupOffsets = [5, 30, 60, 90, 120];
const knockoutOffsets = [5, 30, 60, 90, 120, 150, 180, 210];

const matchWindows = initialData.matches
  .filter((match) => match.kickoffUtc)
  .flatMap((match) => {
    const kickoff = Date.parse(match.kickoffUtc);
    const offsets = match.id > 72 ? knockoutOffsets : groupOffsets;
    return offsets.map((minutes) => ({
      match,
      minutes,
      due: kickoff + minutes * 60 * 1000,
    }));
  });

const finalKickoff = Date.parse(initialData.matches.find((match) => match.id === 104)?.kickoffUtc || "");
const firstKickoff = Math.min(...initialData.matches.filter((match) => match.kickoffUtc).map((match) => Date.parse(match.kickoffUtc)));
const dailyStart = Number.isFinite(firstKickoff) ? utcDayStart(firstKickoff, -1) : 0;
const dailyEnd = Number.isFinite(finalKickoff) ? utcDayStart(finalKickoff, 2) : 0;

// GitHub scheduled workflows can be delayed or skipped under load. Keep a
// tolerance window so delayed 5-minute cron wakes still refresh the cache.
const dueMatch = matchWindows.find((item) => now.getTime() >= item.due && now.getTime() < item.due + windowMs);
const dueDaily =
  now.getTime() >= dailyStart &&
  now.getTime() < dailyEnd &&
  dailyHoursUtc.has(now.getUTCHours()) &&
  (now.getUTCMinutes() * 60 * 1000 + now.getUTCSeconds() * 1000 + now.getUTCMilliseconds()) < windowMs;

if (dueMatch) {
  output(true, `match-${dueMatch.match.id}+${dueMatch.minutes}m`);
} else if (dueDaily) {
  output(true, `daily-${String(now.getUTCHours()).padStart(2, "0")}:00Z`);
} else {
  output(false, "outside-refresh-window");
}

function output(shouldRefresh, reason) {
  console.log(`should_refresh=${shouldRefresh ? "true" : "false"}`);
  console.log(`refresh_reason=${reason}`);
  console.log(`checked_at=${now.toISOString()}`);
}

function utcDayStart(timestamp, offsetDays = 0) {
  const date = new Date(timestamp);
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + offsetDays);
}
