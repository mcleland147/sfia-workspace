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

export const HTTP_ATTEMPT_USAGE_UNKNOWN = "HTTP_ATTEMPT_USAGE_UNKNOWN";
export const HTTP_ATTEMPT_CORRELATION_ONLY = "HTTP_ATTEMPT_CORRELATION_ONLY";

/**
 * HTTP attempt companion rows are correlation markers, not billable request increments.
 * E2-REL-05 — require CORRELATION_ONLY (not USAGE_UNKNOWN alone) so a billable row
 * that incorrectly carries USAGE_UNKNOWN is not silently dropped from cost totals.
 */
export function limitsJsonMarksHttpAttemptCorrelationOnly(
  limits: string[] | null | undefined,
): boolean {
  if (!limits?.length) return false;
  return limits.some((l) => l === HTTP_ATTEMPT_CORRELATION_ONLY);
}

/** True when the row is a correlation companion (may also carry USAGE_UNKNOWN). */
export function isHttpAttemptCorrelationCompanion(row: {
  limitsJson?: string[] | null;
}): boolean {
  return limitsJsonMarksHttpAttemptCorrelationOnly(row.limitsJson);
}

export function isBillableFinOpsObservationRow(row: {
  limitsJson?: string[] | null;
}): boolean {
  return !limitsJsonMarksHttpAttemptCorrelationOnly(row.limitsJson);
}

export function filterBillableFinOpsRows<T extends { limitsJson?: string[] | null }>(
  rows: T[],
): T[] {
  return rows.filter(isBillableFinOpsObservationRow);
}

/**
 * E2-REL-05 — single-row effective project attribution.
 * Concordant / one-sided → that id. Conflict obs≠work → null (never invent).
 */
export function effectiveFinOpsProjectId(input: {
  observationProjectId?: string | null;
  workProjectId?: string | null;
}): string | null {
  const obs = input.observationProjectId?.trim() || null;
  const work = input.workProjectId?.trim() || null;
  if (obs && work && obs !== work) return null;
  return work ?? obs ?? null;
}

/**
 * Work-level attribution across a slice of observations.
 * Any obs≠work conflict ⇒ null (do not invent / do not pick first).
 * Work NULL + multiple distinct observation projects ⇒ null (contradictory).
 */
export function effectiveFinOpsProjectIdForWork(
  workProjectId: string | null | undefined,
  rows: Array<{ projectId?: string | null }>,
): string | null {
  const work = workProjectId?.trim() || null;
  for (const r of rows) {
    const obs = r.projectId?.trim() || null;
    if (obs && work && obs !== work) return null;
  }
  return effectiveFinOpsProjectId({
    observationProjectId: resolveObservedProjectId(rows),
    workProjectId: work,
  });
}

/**
 * E2-FINAL-03 — true when the full (unfiltered) observation set for a work
 * cannot be attributed to a single project without inventing a choice.
 */
export function isFinOpsWorkAttributionConflict(
  workProjectId: string | null | undefined,
  rows: Array<{ projectId?: string | null }>,
): boolean {
  if (rows.length === 0) return false;
  return effectiveFinOpsProjectIdForWork(workProjectId, rows) === null &&
    rows.some((r) => Boolean(r.projectId?.trim()));
}

/**
 * Resolve a single projectId from observation rows without inventing attribution.
 * Prefer work.projectId (caller). When falling back to observations:
 * - zero projectIds → null (legitimate hors-projet)
 * - one distinct projectId → that id
 * - multiple distinct → null (do NOT pick the first; avoids cross-project contamination)
 */
export function resolveObservedProjectId(
  rows: Array<{ projectId?: string | null }>,
): string | null {
  const ids = new Set<string>();
  for (const r of rows) {
    const id = r.projectId?.trim();
    if (id) ids.add(id);
  }
  if (ids.size === 1) return [...ids][0]!;
  return null;
}

/** Display label: never present UNVERIFIED/null applied as if it were the requested model. */
export function finOpsModelDisplayLabel(input: {
  modelApplied?: string | null;
  modelRequested?: string | null;
}): string | null {
  const applied = input.modelApplied?.trim() || null;
  const requested = input.modelRequested?.trim() || null;
  if (applied && applied !== "UNVERIFIED" && applied !== "inconnu") return applied;
  if (requested) return `${requested} (demandé)`;
  if (applied === "UNVERIFIED") return "non vérifié";
  return null;
}

/** Subtext under « Couverture mesure » — avoids 100 % / 0 % estimation mismatch without lying. */
export function finOpsMeasureCoverageSubtext(kpis: {
  totalRequests: number;
  measuredRequests: number;
  estimationCompletenessPercent: MeasuredValue<number>;
  measureCoveragePercent?: MeasuredValue<number>;
}): string {
  if (kpis.totalRequests <= 0) return "Requêtes non recensées";
  const observed = `${formatIntegerFr(kpis.measuredRequests)} / ${formatIntegerFr(kpis.totalRequests)} requêtes recensées`;
  const census =
    kpis.measureCoveragePercent?.kind === "partial"
      ? " · observations recensées, pas toutes les émissions"
      : "";
  const est = kpis.estimationCompletenessPercent;
  if (est.kind === "partial" && est.value === 0) {
    return `${observed} · coûts entièrement PARTIAL ou inconnus${census}`;
  }
  if (est.kind === "known" || est.kind === "partial") {
    return `${observed} · estimation connue ${est.value} %${census}`;
  }
  return `${observed}${census}`;
}

const OPEN_WORK_STATUSES = new Set(["OPEN", "RUNNING", "SUSPENDED"]);

/**
 * Completed-work count from observations actually linked in the same filter.
 * Unattributed billable rows make the count partial. They do not invent a work.
 */
export function classifyObservedWorkCounts(input: {
  statuses: string[];
  unattributedBillable: number;
  hasAnyObservation: boolean;
}): { completed: MeasuredValue<number>; openCount: number } {
  const openCount = input.statuses.filter((status) =>
    OPEN_WORK_STATUSES.has(status.toUpperCase()),
  ).length;
  const complete = input.statuses.filter((status) => status.toUpperCase() === "COMPLETE").length;
  if (input.unattributedBillable > 0 && input.statuses.length === 0) {
    return {
      completed: { kind: "unknown", reason: "Observations non attribuées" },
      openCount,
    };
  }
  if (input.unattributedBillable > 0) {
    return {
      completed: {
        kind: "partial",
        value: complete,
        note: `Travaux aboutis observés : ${complete}. En cours : ${openCount}. Observations non attribuées : ${input.unattributedBillable}.`,
      },
      openCount,
    };
  }
  if (input.statuses.length === 0) {
    return {
      completed: input.hasAnyObservation
        ? { kind: "unknown", reason: "Travaux non liés" }
        : { kind: "empty" },
      openCount,
    };
  }
  return { completed: { kind: "known", value: complete }, openCount };
}

/**
 * Global estimated cost divided by observed completed works.
 * This is not the average cost of those works alone.
 * Hidden when the completed-work count is partial or unknown.
 */
export function costPerObservedCompletedWork(input: {
  cost: MeasuredValue<number>;
  completed: MeasuredValue<number>;
}): MeasuredValue<number> {
  if (input.completed.kind === "partial" || input.completed.kind === "unknown") {
    return {
      kind: "unknown",
      reason: "Ratio non affiché : décompte des travaux incomplet",
    };
  }
  if (input.completed.kind !== "known" || input.completed.value <= 0) {
    if (input.completed.kind === "known") {
      return { kind: "unknown", reason: "Aucun travail abouti observé" };
    }
    return { kind: "empty" };
  }
  if (input.cost.kind !== "known" && input.cost.kind !== "partial") {
    return { kind: "empty" };
  }
  return {
    kind: input.cost.kind === "partial" ? "partial" : "known",
    value: input.cost.value / input.completed.value,
    note: "Coût estimé global / travaux aboutis observés",
  };
}

export function finOpsConfirmedValueLabel(input: {
  applied?: string | null;
  requested?: string | null;
}): string | null {
  const applied = input.applied?.trim() || "";
  const requested = input.requested?.trim() || "";
  if (applied && applied.toUpperCase() !== "UNVERIFIED") return applied;
  if (requested) return `${requested} (demandé)`;
  if (applied.toUpperCase() === "UNVERIFIED") return "non vérifié";
  return null;
}

export function finOpsShortModelLabel(label: string | null | undefined): string | null {
  if (!label) return null;
  if (label === "non vérifié") return label;
  const suffix = " (demandé)";
  if (label.endsWith(suffix)) {
    const short = displayModelShort(label.slice(0, -suffix.length)) ?? label;
    return `${short}${suffix}`;
  }
  return displayModelShort(label);
}

export function sumBillableProviderRequests(
  rows: Array<{
    providerRequests: number | null;
    limitsJson?: string[] | null;
    costCoverage?: string;
  }>,
  opts?: { onlyWithObservedCost?: boolean },
): number {
  return rows.reduce((acc, r) => {
    if (!isBillableFinOpsObservationRow(r)) return acc;
    if (
      opts?.onlyWithObservedCost &&
      r.costCoverage !== "KNOWN" &&
      r.costCoverage !== "PARTIAL"
    ) {
      return acc;
    }
    const pr = r.providerRequests;
    if (pr == null || !Number.isFinite(pr)) return acc;
    return acc + pr;
  }, 0);
}

export type CostRow = {
  estimatedCostUsd: string | null;
  costCoverage: string;
  limitsJson?: string[] | null;
};

export type TokenRow = {
  totalTokens: number | null;
  inputTokens: number | null;
  outputTokens: number | null;
  limitsJson?: string[] | null;
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
  const billable = filterBillableFinOpsRows(rows);
  if (billable.length === 0) return { kind: "empty" };
  let sum = 0;
  let hasKnown = false;
  let hasUnknown = false;
  let hasPartial = false;
  for (const r of billable) {
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
  const billable = filterBillableFinOpsRows(rows);
  if (billable.length === 0) return { kind: "empty" };
  let sum = 0;
  let hasUnknown = false;
  for (const r of billable) {
    const t = tokenTotalForRow(r);
    if (t == null) {
      hasUnknown = true;
      continue;
    }
    sum += t;
  }
  if (sum === 0 && hasUnknown && billable.length > 0) {
    return { kind: "unknown", reason: "Tokens non recensés" };
  }
  if (hasUnknown) {
    return { kind: "partial", value: sum, note: "Tokens partiellement recensés" };
  }
  return { kind: "known", value: sum };
}

/**
 * Observation coverage: share of *recorded* provider requests that have *some*
 * cost observation (KNOWN or PARTIAL). PARTIAL still counts as observed — not as
 * financially complete.
 *
 * The denominator is the observation set, not a proven complete HTTP-emission
 * census. Without an independent emission census, never present coverage as a
 * fully-known 100% of all real emissions (mandate S4 — honest coverage).
 */
export function computeMeasureCoveragePercent(
  rows: Array<{
    costCoverage: string;
    providerRequests: number | null;
    limitsJson?: string[] | null;
  }>,
  opts?: { emissionCensusComplete?: boolean },
): MeasuredValue<number> {
  const billable = filterBillableFinOpsRows(rows);
  if (billable.length === 0) return rows.length === 0 ? { kind: "empty" } : { kind: "unknown", reason: "Requêtes non observées" };
  let totalReq = 0;
  let observedReq = 0;
  let missingRequestCounts = false;
  for (const r of billable) {
    if (r.providerRequests == null || !Number.isFinite(r.providerRequests)) {
      missingRequestCounts = true;
      continue;
    }
    totalReq += r.providerRequests;
    if (r.costCoverage === "KNOWN" || r.costCoverage === "PARTIAL") {
      observedReq += r.providerRequests;
    }
  }
  if (missingRequestCounts && totalReq <= 0) {
    return { kind: "unknown", reason: "Requêtes non observées" };
  }
  if (totalReq <= 0) return { kind: "unknown", reason: "Requêtes non observées" };
  const pct = Math.round((observedReq / totalReq) * 100);
  const value = Math.min(100, Math.max(0, pct));
  const censusComplete = opts?.emissionCensusComplete === true;
  if (missingRequestCounts || !censusComplete) {
    return {
      kind: "partial",
      value,
      note: missingRequestCounts
        ? "Certaines lignes sans nombre de requêtes"
        : "Couverture sur observations recensées — population d'émissions HTTP non établie indépendamment",
    };
  }
  return { kind: "known", value };
}

/**
 * Estimation completeness: only KNOWN rows contribute. PARTIAL never inflates
 * this toward a fully-known financial picture. Completeness is always relative
 * to the recorded observation set unless an emission census is proven complete.
 */
export function computeEstimationCompletenessPercent(
  rows: Array<{
    costCoverage: string;
    providerRequests: number | null;
    limitsJson?: string[] | null;
  }>,
  opts?: { emissionCensusComplete?: boolean },
): MeasuredValue<number> {
  const billable = filterBillableFinOpsRows(rows);
  if (billable.length === 0) return rows.length === 0 ? { kind: "empty" } : { kind: "unknown", reason: "Requêtes non observées" };
  let totalReq = 0;
  let knownReq = 0;
  let hasPartial = false;
  let missingRequestCounts = false;
  for (const r of billable) {
    if (r.providerRequests == null || !Number.isFinite(r.providerRequests)) {
      missingRequestCounts = true;
      continue;
    }
    totalReq += r.providerRequests;
    if (r.costCoverage === "KNOWN") {
      knownReq += r.providerRequests;
    } else if (r.costCoverage === "PARTIAL") {
      hasPartial = true;
    }
  }
  if (missingRequestCounts && totalReq <= 0) {
    return { kind: "unknown", reason: "Requêtes non observées" };
  }
  if (totalReq <= 0) return { kind: "unknown", reason: "Requêtes non observées" };
  const pct = Math.round((knownReq / totalReq) * 100);
  const value = Math.min(100, Math.max(0, pct));
  const censusComplete = opts?.emissionCensusComplete === true;
  if (missingRequestCounts || hasPartial || !censusComplete) {
    return {
      kind: "partial",
      value,
      note: hasPartial
        ? "Mesures PARTIAL exclues de la complétude financière"
        : missingRequestCounts
          ? "Certaines lignes sans nombre de requêtes"
          : "Complétude sur observations recensées — population d'émissions HTTP non établie indépendamment",
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