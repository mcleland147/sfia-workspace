/**
 * O3 hybrid observation schedule (ARCH-WOP-1 / D-EXEC-TIME-06).
 *
 * Pure / table-driven. Independent of click count.
 * Early probes then proportional cadence, forced observation at deadline.
 *
 * interval = clamp(window * 0.10, 30s, 120s)
 * early: 5s, 15s, 30s, 60s (when strictly before the window)
 */

export const O3_EARLY_PROBE_OFFSETS_MS = Object.freeze([
  5_000, 15_000, 30_000, 60_000,
] as const);

export const O3_PROPORTIONAL_RATIO = 0.1;
export const O3_MIN_INTERVAL_MS = 30_000;
export const O3_MAX_INTERVAL_MS = 120_000;

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function o3LaterIntervalMs(windowMs: number): number {
  return clamp(
    Math.floor(windowMs * O3_PROPORTIONAL_RATIO),
    O3_MIN_INTERVAL_MS,
    O3_MAX_INTERVAL_MS,
  );
}

/** Absolute observation timestamps from startedAt, including t=start and deadline. */
export function o3ObservationScheduleMs(
  startedAtMs: number,
  windowMs: number,
): readonly number[] {
  if (
    !Number.isFinite(startedAtMs) ||
    !Number.isFinite(windowMs) ||
    windowMs <= 0
  ) {
    return [];
  }
  const deadlineMs = startedAtMs + windowMs;
  const times: number[] = [startedAtMs];
  for (const offset of O3_EARLY_PROBE_OFFSETS_MS) {
    const t = startedAtMs + offset;
    if (t < deadlineMs) times.push(t);
  }
  const interval = o3LaterIntervalMs(windowMs);
  let t = times[times.length - 1]!;
  while (t + interval < deadlineMs) {
    t += interval;
    times.push(t);
  }
  if (times[times.length - 1] !== deadlineMs) {
    times.push(deadlineMs);
  }
  return times;
}

/**
 * Delay until the next O3 tick after `lastObservedAtMs`.
 * 0 = observe now (due or overdue). null = no further observation (past deadline).
 */
export function nextO3ObservationDelayMs(input: {
  startedAtMs: number;
  nowMs: number;
  windowMs: number;
  lastObservedAtMs: number;
}): number | null {
  const times = o3ObservationScheduleMs(input.startedAtMs, input.windowMs);
  if (times.length === 0) return null;
  const next = times.find((t) => t > input.lastObservedAtMs);
  if (next === undefined) return null;
  const delay = next - input.nowMs;
  return delay <= 0 ? 0 : delay;
}

export function attemptDeadlineMs(
  startedAtMs: number,
  resolvedMaxDurationMs: number,
): number {
  return startedAtMs + resolvedMaxDurationMs;
}
