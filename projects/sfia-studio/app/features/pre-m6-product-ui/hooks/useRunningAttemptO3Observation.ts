"use client";

import { useEffect, useRef } from "react";
import { PRE_M6_EXECUTION_WINDOW_MS } from "@/lib/oa/execution-contract/domain/executionWindowPolicy";
import { nextO3ObservationDelayMs } from "@/lib/oa/execution-attempt/application/observationSchedule";

/**
 * Auto-observe a running bounded Attempt while this page/session stays mounted.
 * Uses the same refresh callback as « Actualiser le résultat ».
 * No worker. Stops on unmount, terminal, or non-refreshable.
 */
export function useRunningAttemptO3Observation(input: {
  enabled: boolean;
  startedAt: string | null | undefined;
  resolvedMaxDurationMs: number | null | undefined;
  refresh: () => void;
  inFlight: boolean;
}): void {
  const refreshRef = useRef(input.refresh);
  refreshRef.current = input.refresh;
  const lastObservedAtMsRef = useRef<number | null>(null);

  useEffect(() => {
    if (!input.enabled) {
      lastObservedAtMsRef.current = null;
      return;
    }
    const startedAtMs = input.startedAt ? Date.parse(input.startedAt) : NaN;
    if (!Number.isFinite(startedAtMs)) return;
    const windowMs =
      typeof input.resolvedMaxDurationMs === "number" &&
      input.resolvedMaxDurationMs > 0
        ? input.resolvedMaxDurationMs
        : PRE_M6_EXECUTION_WINDOW_MS.standard;

    if (lastObservedAtMsRef.current === null) {
      lastObservedAtMsRef.current = startedAtMs;
    }

    let timer: ReturnType<typeof setTimeout> | null = null;
    let cancelled = false;

    const arm = () => {
      if (cancelled || input.inFlight) return;
      const delay = nextO3ObservationDelayMs({
        startedAtMs,
        nowMs: Date.now(),
        windowMs,
        lastObservedAtMs: lastObservedAtMsRef.current ?? startedAtMs,
      });
      if (delay === null) return;
      timer = setTimeout(() => {
        if (cancelled || input.inFlight) return;
        lastObservedAtMsRef.current = Date.now();
        refreshRef.current();
        if (!cancelled && !input.inFlight) arm();
      }, delay);
    };

    arm();
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [
    input.enabled,
    input.startedAt,
    input.resolvedMaxDurationMs,
    input.inFlight,
  ]);
}
