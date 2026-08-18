/**
 * ARCH-WOP-1 O3 schedule — fake clock only, no real waits.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { PRE_M6_EXECUTION_WINDOW_MS } from "@/lib/oa/execution-contract";
import {
  attemptDeadlineMs,
  nextO3ObservationDelayMs,
  o3LaterIntervalMs,
  o3ObservationScheduleMs,
  O3_EARLY_PROBE_OFFSETS_MS,
  O3_MAX_INTERVAL_MS,
  O3_MIN_INTERVAL_MS,
} from "@/lib/oa/execution-attempt";

const WINDOWS = [
  PRE_M6_EXECUTION_WINDOW_MS.short,
  PRE_M6_EXECUTION_WINDOW_MS.standard,
  PRE_M6_EXECUTION_WINDOW_MS.long,
  PRE_M6_EXECUTION_WINDOW_MS.extended,
] as const;

describe("O3 hybrid observation schedule", () => {
  it("uses early 5/15/30/60s probes then clamped 10% cadence, forced at deadline", () => {
    expect([...O3_EARLY_PROBE_OFFSETS_MS]).toEqual([
      5_000, 15_000, 30_000, 60_000,
    ]);
    expect(o3LaterIntervalMs(PRE_M6_EXECUTION_WINDOW_MS.short)).toBe(
      O3_MIN_INTERVAL_MS,
    );
    expect(o3LaterIntervalMs(PRE_M6_EXECUTION_WINDOW_MS.standard)).toBe(90_000);
    expect(o3LaterIntervalMs(PRE_M6_EXECUTION_WINDOW_MS.long)).toBe(
      O3_MAX_INTERVAL_MS,
    );
    expect(o3LaterIntervalMs(PRE_M6_EXECUTION_WINDOW_MS.extended)).toBe(
      O3_MAX_INTERVAL_MS,
    );
  });

  it.each(WINDOWS)("schedule for window %s includes start and deadline, no 200ms loop", (windowMs) => {
    const startedAtMs = 1_000_000;
    const times = o3ObservationScheduleMs(startedAtMs, windowMs);
    expect(times[0]).toBe(startedAtMs);
    expect(times[times.length - 1]).toBe(startedAtMs + windowMs);
    expect(times.length).toBeGreaterThan(4);
    const gaps = times.slice(1).map((t, i) => t - times[i]!);
    expect(gaps.every((g) => g >= 5_000)).toBe(true);
    expect(gaps.some((g) => g <= 200)).toBe(false);
    expect(times.length).toBeGreaterThan(3);
  });

  it("detects a 20s completion around the 30s probe, not immediately", () => {
    const startedAtMs = 0;
    const windowMs = PRE_M6_EXECUTION_WINDOW_MS.short;
    const after20s = nextO3ObservationDelayMs({
      startedAtMs,
      nowMs: 20_000,
      windowMs,
      lastObservedAtMs: 15_000,
    });
    expect(after20s).toBe(10_000);
    const at30s = nextO3ObservationDelayMs({
      startedAtMs,
      nowMs: 30_000,
      windowMs,
      lastObservedAtMs: 15_000,
    });
    expect(at30s).toBe(0);
  });

  it("detects a 2 min completion on the O3 cadence", () => {
    const startedAtMs = 0;
    const windowMs = PRE_M6_EXECUTION_WINDOW_MS.short;
    const times = o3ObservationScheduleMs(startedAtMs, windowMs);
    expect(times).toContain(120_000);
    const delay = nextO3ObservationDelayMs({
      startedAtMs,
      nowMs: 100_000,
      windowMs,
      lastObservedAtMs: 90_000,
    });
    expect(delay).toBe(20_000);
  });

  it("forces a final observation at the deadline and none after terminal", () => {
    for (const windowMs of WINDOWS) {
      const startedAtMs = 0;
      const deadline = attemptDeadlineMs(startedAtMs, windowMs);
      expect(deadline).toBe(windowMs);
      const due = nextO3ObservationDelayMs({
        startedAtMs,
        nowMs: deadline,
        windowMs,
        lastObservedAtMs: deadline - 1,
      });
      expect(due).toBe(0);
      const after = nextO3ObservationDelayMs({
        startedAtMs,
        nowMs: deadline + 1,
        windowMs,
        lastObservedAtMs: deadline,
      });
      expect(after).toBeNull();
    }
  });

  it("does not count clicks and does not cap at 3 refreshes", () => {
    const startedAtMs = 0;
    const windowMs = PRE_M6_EXECUTION_WINDOW_MS.extended;
    const times = o3ObservationScheduleMs(startedAtMs, windowMs);
    expect(times.length).toBeGreaterThan(10);
    const fourth = nextO3ObservationDelayMs({
      startedAtMs,
      nowMs: times[3]!,
      windowMs,
      lastObservedAtMs: times[2]!,
    });
    expect(fourth).toBe(0);
    const fifth = nextO3ObservationDelayMs({
      startedAtMs,
      nowMs: times[4]!,
      windowMs,
      lastObservedAtMs: times[3]!,
    });
    expect(fifth).toBe(0);
  });
});
