/**
 * E06 — pure FinOps read projections (no I/O). UNKNOWN ≠ 0.
 */

export const FINOPS_PERIOD_OPTIONS = [7, 30, 90] as const;
export type FinOpsPeriodDays = (typeof FINOPS_PERIOD_OPTIONS)[number];

export type MeasuredValue<T> =
  | { kind: "empty" }
  | { kind: "unknown"; reason?: string }
  | { kind: "known"; value: T }
  | { kind: "partial"; value: T; note?: string };

export function parseFinOpsPeriodDays(raw: string | null | undefined): FinOpsPeriodDays {
  const n = Number(raw);
  if (n === 7 || n === 90) return n;
  return 30;
}

export function periodStartDate(periodDays: FinOpsPeriodDays, now = new Date()): Date {
  const d = new Date(now);
  d.setUTCDate(d.getUTCDate() - periodDays);
  d.setUTCHours(0, 0, 0, 0);
  return d;
}

export type CostRow = {
  estimatedCostUsd: string | null;
  costCoverage: string;
};

export type TokenRow = {
  totalTokens: number | null;
  inputTokens: number | null;
  outputTokens: number | null;
};

export function tokenTotalForRow(row: TokenRow): number | null {
  if (row.totalTokens != null && Number.isFinite(row.totalTokens)) {
    return row.totalTokens;
  }
  const input = row.inputTokens;
  const output = row.outputTokens;
  if (input == null && output == null) return null;
  if (input == null || output == null) return null;
  if (!Number.isFinite(input) || !Number.isFinite(output)) return null;
  return input + output;
}

export function aggregateEstimatedCost(rows: CostRow[]): MeasuredValue<number> {
  if (rows.length === 0) return { kind: "empty" };
  let sum = 0;
  let hasKnown = false;
  let hasUnknown = false;
  let hasPartial = false;
  for (const r of rows) {
    if (r.costCoverage === "UNKNOWN" || r.estimatedCostUsd == null) {
      hasUnknown = true;
      continue;
    }
    if (r.costCoverage === "PARTIAL") {
      hasPartial = true;
    }
    const n = Number(r.estimatedCostUsd);
    if (!Number.isFinite(n)) {
      hasUnknown = true;
      continue;
    }
    sum += n;
    hasKnown = true;
  }
  if (!hasKnown) return { kind: "unknown", reason: "Aucun coût mesuré" };
  if (hasUnknown || hasPartial) {
    return {
      kind: "partial",
      value: sum,
      note: hasUnknown
        ? "Certains coûts restent inconnus"
        : "Certains coûts sont partiels",
    };
  }
  return { kind: "known", value: sum };
}

export function aggregateTokenTotal(rows: TokenRow[]): MeasuredValue<number> {
  if (rows.length === 0) return { kind: "empty" };
  let sum = 0;
  let hasUnknown = false;
  for (const r of rows) {
    const t = tokenTotalForRow(r);
    if (t == null) {
      hasUnknown = true;
      continue;
    }
    sum += t;
  }
  if (sum === 0 && hasUnknown && rows.length > 0) {
    return { kind: "unknown", reason: "Tokens non recensés" };
  }
  if (hasUnknown) {
    return { kind: "partial", value: sum, note: "Tokens partiellement recensés" };
  }
  return { kind: "known", value: sum };
}

export function computeMeasureCoveragePercent(
  rows: Array<{ costCoverage: string; providerRequests: number | null }>,
): MeasuredValue<number> {
  if (rows.length === 0) return { kind: "empty" };
  let totalReq = 0;
  let measuredReq = 0;
  let missingRequestCounts = false;
  for (const r of rows) {
    if (r.providerRequests == null || !Number.isFinite(r.providerRequests)) {
      missingRequestCounts = true;
      continue;
    }
    totalReq += r.providerRequests;
    if (r.costCoverage === "KNOWN") {
      measuredReq += r.providerRequests;
    } else if (r.costCoverage === "PARTIAL") {
      measuredReq += r.providerRequests;
    }
  }
  if (missingRequestCounts && totalReq <= 0) {
    return { kind: "unknown", reason: "Requêtes non observées" };
  }
  if (totalReq <= 0) return { kind: "unknown", reason: "Requêtes non observées" };
  const pct = Math.round((measuredReq / totalReq) * 100);
  const value = Math.min(100, Math.max(0, pct));
  if (missingRequestCounts) {
    return {
      kind: "partial",
      value,
      note: "Certaines lignes sans nombre de requêtes",
    };
  }
  return { kind: "known", value };
}

export function formatUsdFr(value: number): string {
  const s = value.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${s} $`;
}

/** Compact USD for chart Y-axis (Figma 13.03). */
export function formatUsdAxisFr(value: number): string {
  const s = value.toLocaleString("fr-FR", {
    minimumFractionDigits: value > 0 && value < 1 ? 1 : 0,
    maximumFractionDigits: value > 0 && value < 1 ? 2 : 0,
  });
  return `${s} $`;
}

export function finOpsDailyChartScaleMax(costs: Array<number | null>): number {
  let max = 0;
  for (const c of costs) {
    if (c != null && Number.isFinite(c) && c > max) max = c;
  }
  return max > 0 ? max : 1;
}

function finOpsNiceChartTop(max: number): number {
  if (max <= 1) return 1;
  if (max <= 3) return 3;
  if (max <= 6) return 6;
  if (max <= 10) return 10;
  const mag = 10 ** Math.floor(Math.log10(max));
  return Math.ceil(max / mag) * mag;
}

/** Descending USD ticks for a daily spend chart (top → 0). */
export function finOpsDailyChartYTicks(scaleMax: number): number[] {
  const top = finOpsNiceChartTop(scaleMax);
  const steps = top <= 1 ? 2 : 3;
  const step = top / steps;
  const ticks: number[] = [];
  for (let i = steps; i >= 0; i--) {
    ticks.push(Math.round(step * i * 1000) / 1000);
  }
  return ticks;
}

export function finOpsDailyXAxisLabels(periodDays: number): { start: string; end: string } {
  const span = Math.max(1, periodDays);
  return { start: `J-${span - 1}`, end: "Aujourd'hui" };
}

export function formatModelBreakdownCost(row: {
  costUsd: number | null;
  coverage: string;
}): string {
  if (row.costUsd == null || row.coverage === "UNKNOWN") {
    return "Inconnu";
  }
  if (row.coverage === "PARTIAL") {
    return formatMeasuredUsd({ kind: "partial", value: row.costUsd });
  }
  return formatMeasuredUsd({ kind: "known", value: row.costUsd });
}

export function mapCostCoverageLabel(coverage: string): string {
  switch ((coverage ?? "").toUpperCase()) {
    case "KNOWN":
      return "Mesuré";
    case "PARTIAL":
      return "Partiel";
    case "UNKNOWN":
      return "Inconnu";
    default:
      return coverage || "—";
  }
}

export function formatTokenCountFr(value: number): string {
  if (value >= 1_000_000) {
    const m = value / 1_000_000;
    return `${m.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} M`;
  }
  return value.toLocaleString("fr-FR");
}

export function formatIntegerFr(value: number): string {
  return value.toLocaleString("fr-FR");
}

export function formatMeasuredUsd(metric: MeasuredValue<number>): string {
  switch (metric.kind) {
    case "known":
    case "partial":
      return formatUsdFr(metric.value);
    case "unknown":
      return "Inconnu";
    case "empty":
      return "—";
  }
}

export function formatMeasuredTokens(metric: MeasuredValue<number>): string {
  switch (metric.kind) {
    case "known":
    case "partial":
      return formatTokenCountFr(metric.value);
    case "unknown":
      return "—";
    case "empty":
      return "—";
  }
}

export function formatMeasuredPercent(metric: MeasuredValue<number>): string {
  switch (metric.kind) {
    case "known":
      return `${metric.value} %`;
    case "partial":
      return `${metric.value} %`;
    case "unknown":
      return "—";
    case "empty":
      return "—";
  }
}

export function mapCognitiveWorkStatusLabel(status: string | null | undefined): string {
  switch ((status ?? "").toUpperCase()) {
    case "COMPLETE":
      return "Abouti";
    case "OPEN":
    case "RUNNING":
    case "SUSPENDED":
      return "En cours";
    default:
      return "Interrompu";
  }
}

export function resolvePersonalSettingsActive(
  pathname: string,
): "integrations" | "consumption" | null {
  const path = pathname || "/";
  if (path.startsWith("/settings/consumption")) return "consumption";
  if (path.startsWith("/settings/integrations")) return "integrations";
  return null;
}

export function displayModelShort(model: string | null | undefined): string | null {
  if (!model) return null;
  const m = model.toLowerCase();
  if (m.includes("luna")) return "Luna";
  if (m.includes("terra")) return "Terra";
  if (m.includes("sol")) return "Sol";
  const tail = model.split(/[-_/]/).pop();
  return tail ? tail.charAt(0).toUpperCase() + tail.slice(1) : model;
}

export function uniqueModelsLabel(models: Iterable<string | null | undefined>): string {
  const set = new Set<string>();
  for (const raw of models) {
    const d = displayModelShort(raw);
    if (d) set.add(d);
  }
  return [...set].sort().join(" · ") || "—";
}