/**
 * FinOps T0 — UTC calendar-month period helpers (injected instant; no hidden wall-clock).
 */

import { requireValidFinOpsPeriod, requireValidIsoTimestamp } from "./invariants";
import type { FinOpsPeriod } from "./types";

/**
 * Calendar month in UTC for the given instant.
 * periodStart inclusive; periodEnd exclusive (= first instant of next UTC month).
 */
export function computeUtcMonthPeriod(instantIso: string): FinOpsPeriod {
  const ms = requireValidIsoTimestamp(instantIso);
  const d = new Date(ms);
  const year = d.getUTCFullYear();
  const month = d.getUTCMonth();
  const periodStart = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0)).toISOString();
  const periodEnd = new Date(
    Date.UTC(year, month + 1, 1, 0, 0, 0, 0),
  ).toISOString();
  return {
    periodStart,
    periodEnd,
    timezone: "UTC",
  };
}

export function periodContainsInstant(
  period: FinOpsPeriod,
  instantIso: string,
): boolean {
  requireValidFinOpsPeriod(period);
  const t = requireValidIsoTimestamp(instantIso);
  const start = Date.parse(period.periodStart);
  const end = Date.parse(period.periodEnd);
  return start <= t && t < end;
}

/** Deterministic ordering by periodStart (UTC instant). */
export function compareFinOpsPeriods(
  a: FinOpsPeriod,
  b: FinOpsPeriod,
): -1 | 0 | 1 {
  requireValidFinOpsPeriod(a);
  requireValidFinOpsPeriod(b);
  const aMs = Date.parse(a.periodStart);
  const bMs = Date.parse(b.periodStart);
  if (aMs < bMs) return -1;
  if (aMs > bMs) return 1;
  return 0;
}

/** Stable key YYYY-MM from UTC periodStart. */
export function finOpsPeriodKey(period: FinOpsPeriod): string {
  requireValidFinOpsPeriod(period);
  const d = new Date(Date.parse(period.periodStart));
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth() + 1;
  return `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}`;
}

/**
 * Late events attach to the UTC month of occurredAt (injected instant).
 */
export function assignInstantToPeriod(instantIso: string): FinOpsPeriod {
  return computeUtcMonthPeriod(instantIso);
}
