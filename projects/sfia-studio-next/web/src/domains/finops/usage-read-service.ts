import { and, desc, eq, gte, ilike, inArray, or, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  cognitiveWorks,
  projects,
  providerUsageObservations,
} from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  aggregateEstimatedCost,
  aggregateTokenTotal,
  classifyObservedWorkCounts,
  computeEstimationCompletenessPercent,
  computeMeasureCoveragePercent,
  costPerObservedCompletedWork,
  effectiveFinOpsProjectId,
  effectiveFinOpsProjectIdForWork,
  filterBillableFinOpsRows,
  finOpsConfirmedValueLabel,
  finOpsModelDisplayLabel,
  isFinOpsWorkAttributionConflict,
  sumBillableProviderRequests,
  mapCognitiveWorkStatusLabel,
  parseFinOpsPeriodDays,
  periodStartDate,
  uniqueModelsLabel,
  type FinOpsPeriodDays,
  type MeasuredValue,
} from "./usage-projection";
import {
  getAdminCollectorFreshness,
  listAdminCollectorSnapshots,
  resolveProductAdminCollectorView,
} from "./provider-admin-usage-collector";
import { decimalFromNumberLike } from "./decimal-money";
import { evaluateFinOpsReconciliation } from "./finops-reconciliation";

function studioLane(): string {
  return process.env.STUDIO_LANE?.trim().toUpperCase() || "UNKNOWN";
}

export type FinOpsFilterInput = {
  periodDays?: FinOpsPeriodDays;
  projectId?: string | null;
  model?: string | null;
};

function baseObservationWhere(
  pilotId: string,
  input: FinOpsFilterInput,
  since: Date,
  cognitiveWorkIdsOnProject?: string[],
  /** Works with project_id NULL — may carry a direct observation.projectId. */
  cognitiveWorkIdsHorsProjet?: string[],
) {
  const lane = studioLane();
  const conditions = [
    eq(providerUsageObservations.ownerPilotId, pilotId),
    gte(providerUsageObservations.createdAt, since),
    sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
  ];
  if (input.projectId) {
    // E2-REL-05 — do NOT OR direct projectId with foreign-work rows.
    // Include:
    //   (obs.projectId = A AND work not on another project)
    //   OR (obs.projectId IS NULL AND work.projectId = A)
    // Exclude conflict: obs.projectId = B ∧ work.projectId = A.
    const worksOnA = cognitiveWorkIdsOnProject ?? [];
    const worksNull = cognitiveWorkIdsHorsProjet ?? [];
    const workOkForDirect =
      worksOnA.length || worksNull.length
        ? or(
            sql`${providerUsageObservations.cognitiveWorkId} IS NULL`,
            worksOnA.length
              ? inArray(providerUsageObservations.cognitiveWorkId, worksOnA)
              : sql`false`,
            worksNull.length
              ? inArray(providerUsageObservations.cognitiveWorkId, worksNull)
              : sql`false`,
          )
        : sql`${providerUsageObservations.cognitiveWorkId} IS NULL`;
    const directConcordant = and(
      eq(providerUsageObservations.projectId, input.projectId),
      workOkForDirect,
    );
    const viaWorkNullObs =
      worksOnA.length > 0
        ? and(
            sql`${providerUsageObservations.projectId} IS NULL`,
            inArray(providerUsageObservations.cognitiveWorkId, worksOnA),
          )
        : null;
    conditions.push(
      viaWorkNullObs ? or(directConcordant, viaWorkNullObs)! : directConcordant!,
    );
  }
  if (input.model) {
    const pattern = `%${input.model}%`;
    conditions.push(
      or(
        ilike(providerUsageObservations.modelApplied, pattern),
        ilike(providerUsageObservations.modelRequested, pattern),
      )!,
    );
  }
  return and(...conditions);
}

async function assertProjectOwned(pilotId: string, projectId: string) {
  const row = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!row) throw new StudioError("NOT_FOUND", "Projet introuvable");
}

type ObservationRow = typeof providerUsageObservations.$inferSelect;

/**
 * E2-FINAL-03 / E2-INT — work ids whose observation set is contradictory.
 * Conflict detection is NOT narrowed by period/model filters: a presentation
 * window must not fabricate a coherent attribution when a conflict exists.
 */
async function loadAttributionConflictWorkIds(
  pilotId: string,
  workProjectById: Map<string, string | null>,
): Promise<Set<string>> {
  const lane = studioLane();
  const workIds = [...workProjectById.keys()];
  if (workIds.length === 0) return new Set();
  const obs = await db
    .select({
      cognitiveWorkId: providerUsageObservations.cognitiveWorkId,
      projectId: providerUsageObservations.projectId,
    })
    .from(providerUsageObservations)
    .where(
      and(
        eq(providerUsageObservations.ownerPilotId, pilotId),
        sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
        inArray(providerUsageObservations.cognitiveWorkId, workIds),
      ),
    );
  const byWork = new Map<string, Array<{ projectId?: string | null }>>();
  for (const r of obs) {
    if (!r.cognitiveWorkId) continue;
    const list = byWork.get(r.cognitiveWorkId) ?? [];
    list.push({ projectId: r.projectId });
    byWork.set(r.cognitiveWorkId, list);
  }
  const conflicts = new Set<string>();
  for (const [wid, rows] of byWork) {
    if (isFinOpsWorkAttributionConflict(workProjectById.get(wid) ?? null, rows)) {
      conflicts.add(wid);
    }
  }
  return conflicts;
}

async function loadObservations(
  pilotId: string,
  input: FinOpsFilterInput,
): Promise<ObservationRow[]> {
  const periodDays = input.periodDays ?? 30;
  const since = periodStartDate(periodDays);
  let cognitiveWorkIdsOnProject: string[] | undefined;
  let cognitiveWorkIdsHorsProjet: string[] | undefined;
  let workProjectById = new Map<string, string | null>();
  let conflictWorkIds = new Set<string>();
  if (input.projectId) {
    await assertProjectOwned(pilotId, input.projectId);
    const workRows = await db
      .select({ id: cognitiveWorks.id, projectId: cognitiveWorks.projectId })
      .from(cognitiveWorks)
      .where(eq(cognitiveWorks.ownerPilotId, pilotId));
    workProjectById = new Map(workRows.map((w) => [w.id, w.projectId]));
    // Resolve conflicts from the full observation set BEFORE project/period filtering.
    conflictWorkIds = await loadAttributionConflictWorkIds(pilotId, workProjectById);
    cognitiveWorkIdsOnProject = workRows
      .filter((w) => w.projectId === input.projectId && !conflictWorkIds.has(w.id))
      .map((w) => w.id);
    cognitiveWorkIdsHorsProjet = workRows
      .filter((w) => w.projectId == null && !conflictWorkIds.has(w.id))
      .map((w) => w.id);
  }
  const rows = await db
    .select()
    .from(providerUsageObservations)
    .where(
      baseObservationWhere(
        pilotId,
        { ...input, periodDays },
        since,
        cognitiveWorkIdsOnProject,
        cognitiveWorkIdsHorsProjet,
      ),
    )
    .orderBy(desc(providerUsageObservations.createdAt));
  if (!input.projectId) return rows;
  // Defense in depth — drop residual conflicts (obs≠work) and multi-scope works.
  return rows.filter((r) => {
    if (r.cognitiveWorkId && conflictWorkIds.has(r.cognitiveWorkId)) return false;
    const workPid = r.cognitiveWorkId
      ? workProjectById.get(r.cognitiveWorkId) ?? null
      : null;
    return (
      effectiveFinOpsProjectId({
        observationProjectId: r.projectId,
        workProjectId: workPid,
      }) === input.projectId
    );
  });
}

export async function loadFinOpsFilterOptions(pilotId: string) {
  const lane = studioLane();
  const projectRows = await db
    .select({ id: projects.id, name: projects.name })
    .from(projects)
    .where(eq(projects.ownerPilotId, pilotId))
    .orderBy(projects.name);

  const modelRows = await db
    .select({
      model: sql<string>`COALESCE(${providerUsageObservations.modelApplied}, ${providerUsageObservations.modelRequested})`,
    })
    .from(providerUsageObservations)
    .where(
      and(
        eq(providerUsageObservations.ownerPilotId, pilotId),
        sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
        sql`COALESCE(${providerUsageObservations.modelApplied}, ${providerUsageObservations.modelRequested}) IS NOT NULL`,
      ),
    )
    .groupBy(
      sql`COALESCE(${providerUsageObservations.modelApplied}, ${providerUsageObservations.modelRequested})`,
    );

  return {
    projects: projectRows,
    models: modelRows.map((r) => r.model).filter(Boolean),
  };
}

export type FinOpsProviderReconciliationDto = {
  /** Operational Studio estimates remain the attribution ledger. */
  studioEstimatedUsd: number | null;
  studioEstimationKind: MeasuredValue<number>["kind"];
  /** Provider Costs aggregate when a successful Admin collection exists. */
  providerCostUsd: number | null;
  providerCurrency: string | null;
  deltaUsd: number | null;
  comparability: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL" | "UNAVAILABLE";
  /** Compare window used for provider reconciliation (UTC ISO). */
  compareWindowStartUtc: string | null;
  compareWindowEndUtc: string | null;
  freshness: {
    lastAttemptAtUtc: string | null;
    lastSuccessAtUtc: string | null;
    lastCollectionId: string | null;
    status: string;
    snapshotCount: number;
    secretReadableByProduct: false;
  };
  limits: string[];
  /** Explicit: Admin collection never blocks Nora. */
  noraIndependent: true;
  /** Decimal strings for financial reference (UI may coerce for display). */
  studioEstimatedUsdDecimal: string | null;
  providerCostUsdDecimal: string | null;
  deltaUsdDecimal: string | null;
};

export type FinOpsSummaryDto = {
  periodDays: FinOpsPeriodDays;
  projectId: string | null;
  model: string | null;
  hasObservations: boolean;
  kpis: {
    estimatedCostUsd: MeasuredValue<number>;
    totalTokens: MeasuredValue<number>;
    completedWorks: MeasuredValue<number>;
    measureCoveragePercent: MeasuredValue<number>;
    /** Financial estimation completeness — PARTIAL excluded from the numerator. */
    estimationCompletenessPercent: MeasuredValue<number>;
    costPerCompletedWorkUsd: MeasuredValue<number>;
    measuredRequests: number;
    totalRequests: number;
  };
  dailyCosts: Array<{ day: string; costUsd: number | null; hasData: boolean }>;
  modelBreakdown: Array<{ model: string; costUsd: number | null; coverage: string }>;
  /** Macro-lot 1 — Usage & Costs rapprochement (honest; may be UNAVAILABLE). */
  providerReconciliation: FinOpsProviderReconciliationDto;
};

function bucketDailyCosts(rows: ObservationRow[], periodDays: FinOpsPeriodDays): FinOpsSummaryDto["dailyCosts"] {
  const buckets = new Map<string, ObservationRow[]>();
  for (const r of rows) {
    const d = r.createdAt.toISOString().slice(0, 10);
    const list = buckets.get(d) ?? [];
    list.push(r);
    buckets.set(d, list);
  }
  const out: FinOpsSummaryDto["dailyCosts"] = [];
  const now = new Date();
  for (let i = periodDays - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setUTCDate(d.getUTCDate() - i);
    const key = d.toISOString().slice(0, 10);
    const slice = buckets.get(key) ?? [];
    const agg = aggregateEstimatedCost(slice);
    out.push({
      day: key,
      costUsd: agg.kind === "known" || agg.kind === "partial" ? agg.value : null,
      hasData: filterBillableFinOpsRows(slice).length > 0,
    });
  }
  return out;
}

function bucketModelBreakdown(rows: ObservationRow[]): FinOpsSummaryDto["modelBreakdown"] {
  const byModel = new Map<string, ObservationRow[]>();
  for (const r of rows) {
    // E2 A.7 — never bucket UNVERIFIED applied as if it were a real applied model.
    const m =
      finOpsModelDisplayLabel({
        modelApplied: r.modelApplied,
        modelRequested: r.modelRequested,
      }) ?? "inconnu";
    const list = byModel.get(m) ?? [];
    list.push(r);
    byModel.set(m, list);
  }
  return [...byModel.entries()]
    .map(([model, slice]) => {
      const agg = aggregateEstimatedCost(slice);
      return {
        model,
        costUsd: agg.kind === "known" || agg.kind === "partial" ? agg.value : null,
        coverage:
          agg.kind === "unknown"
            ? "UNKNOWN"
            : agg.kind === "empty"
              ? "EMPTY"
              : agg.kind === "partial"
                ? "PARTIAL"
                : "KNOWN",
      };
    })
    .sort((a, b) => (b.costUsd ?? -1) - (a.costUsd ?? -1));
}

export async function loadFinOpsSummary(
  pilotId: string,
  raw: { period?: string | null; projectId?: string | null; model?: string | null },
): Promise<FinOpsSummaryDto> {
  const periodDays = parseFinOpsPeriodDays(raw.period);
  const input: FinOpsFilterInput = {
    periodDays,
    projectId: raw.projectId?.trim() || null,
    model: raw.model?.trim() || null,
  };
  const rows = await loadObservations(pilotId, input);

  const estimatedCostUsd = aggregateEstimatedCost(rows);
  const totalTokens = aggregateTokenTotal(rows);
  const measureCoveragePercent = computeMeasureCoveragePercent(rows);
  const estimationCompletenessPercent =
    computeEstimationCompletenessPercent(rows);

  const billable = filterBillableFinOpsRows(rows);
  const unattributedBillable = billable.filter((r) => !r.cognitiveWorkId).length;
  const workIds = [
    ...new Set(
      billable.map((r) => r.cognitiveWorkId).filter((id): id is string => Boolean(id)),
    ),
  ];
  const linkedWorks =
    workIds.length === 0
      ? []
      : await db
          .select({ id: cognitiveWorks.id, status: cognitiveWorks.status })
          .from(cognitiveWorks)
          .where(
            and(
              inArray(cognitiveWorks.id, workIds),
              eq(cognitiveWorks.ownerPilotId, pilotId),
            ),
          );
  const observedWorks = classifyObservedWorkCounts({
    statuses: linkedWorks.map((work) => work.status),
    unattributedBillable,
    hasAnyObservation: rows.length > 0,
  });
  const completedWorks = observedWorks.completed;
  const costPerCompletedWorkUsd = costPerObservedCompletedWork({
    cost: estimatedCostUsd,
    completed: completedWorks,
  });

  const totalRequests = sumBillableProviderRequests(rows);
  const measuredRequests = sumBillableProviderRequests(rows, {
    onlyWithObservedCost: true,
  });

  const providerReconciliation = await buildProviderReconciliationDto(
    pilotId,
    estimatedCostUsd,
    input,
  );

  return {
    periodDays,
    projectId: input.projectId ?? null,
    model: input.model ?? null,
    hasObservations: filterBillableFinOpsRows(rows).length > 0,
    kpis: {
      estimatedCostUsd,
      totalTokens,
      completedWorks,
      measureCoveragePercent,
      estimationCompletenessPercent,
      costPerCompletedWorkUsd,
      measuredRequests,
      totalRequests,
    },
    dailyCosts: bucketDailyCosts(rows, periodDays),
    modelBreakdown: bucketModelBreakdown(rows),
    providerReconciliation,
  };
}

async function buildProviderReconciliationDto(
  pilotId: string,
  estimatedCostUsd: MeasuredValue<number>,
  filter: FinOpsFilterInput,
): Promise<FinOpsProviderReconciliationDto> {
  // Product path: never inspect OPENAI_ADMIN_KEY; read only authorized LIVE PG snapshots.
  const {
    allowAdminSnapshotMemoryFallback,
    getAdminCollectionFreshnessFromPg,
    isAdminSnapshotReadEnabled,
    listAdminSnapshotsFromPg,
  } = await import("./provider-admin-usage-repository");
  const productView = resolveProductAdminCollectorView();
  const limits: string[] = [];

  const studio =
    estimatedCostUsd.kind === "known" || estimatedCostUsd.kind === "partial"
      ? estimatedCostUsd.value
      : null;
  const studioDecimal =
    studio != null ? decimalFromNumberLike(studio) : null;
  // Partial estimation stays partial after decimal conversion.
  const studioEstimationKind = estimatedCostUsd.kind;

  if (!isAdminSnapshotReadEnabled()) {
    limits.push("ADMIN_SNAPSHOT_READ_DISABLED");
    return {
      studioEstimatedUsd: studio,
      studioEstimationKind,
      providerCostUsd: null,
      providerCurrency: null,
      deltaUsd: null,
      comparability: "UNAVAILABLE",
      compareWindowStartUtc: null,
      compareWindowEndUtc: null,
      freshness: {
        lastAttemptAtUtc: null,
        lastSuccessAtUtc: null,
        lastCollectionId: null,
        status: "IDLE",
        snapshotCount: 0,
        secretReadableByProduct: false as const,
      },
      limits,
      noraIndependent: true,
      studioEstimatedUsdDecimal: studioDecimal,
      providerCostUsdDecimal: null,
      deltaUsdDecimal: null,
    };
  }

  let freshness;
  let snapshots;
  try {
    const configuredProjectPeek =
      (process.env.SFIA_OPENAI_PROJECT_ID ?? "").trim() || null;
    freshness = await getAdminCollectionFreshnessFromPg({
      organizationScope: productView.organizationScope,
      provenance: "LIVE",
      projectId: configuredProjectPeek,
    });
    snapshots = (
      await listAdminSnapshotsFromPg({
        organizationScope: productView.organizationScope,
        provenance: "LIVE",
      })
    ).filter(
      (s) =>
        s.surfaceObject === "organization.costs.result" &&
        s.completeness === "complete" &&
        s.collectionProvenance === "LIVE",
    );
  } catch {
    if (!allowAdminSnapshotMemoryFallback()) {
      limits.push("ADMIN_SNAPSHOT_PG_UNAVAILABLE");
      return {
        studioEstimatedUsd: studio,
        studioEstimationKind,
        providerCostUsd: null,
        providerCurrency: null,
        deltaUsd: null,
        comparability: "UNAVAILABLE",
        compareWindowStartUtc: null,
        compareWindowEndUtc: null,
        freshness: {
          lastAttemptAtUtc: null,
          lastSuccessAtUtc: null,
          lastCollectionId: null,
          status: "ERROR",
          snapshotCount: 0,
          secretReadableByProduct: false as const,
        },
        limits,
        noraIndependent: true,
        studioEstimatedUsdDecimal: studioDecimal,
        providerCostUsdDecimal: null,
        deltaUsdDecimal: null,
      };
    }
    // Explicit test-only memory path — never silent product fallback.
    freshness = getAdminCollectorFreshness();
    snapshots = listAdminCollectorSnapshots().filter(
      (s) =>
        s.surfaceObject === "organization.costs.result" &&
        s.completeness === "complete" &&
        s.collectionProvenance === "LIVE",
    );
    limits.push("ADMIN_SNAPSHOT_TEST_MEMORY");
  }

  const freshnessDto = {
    lastAttemptAtUtc: freshness.lastAttemptAtUtc,
    lastSuccessAtUtc: freshness.lastSuccessAtUtc,
    lastCollectionId: freshness.lastCollectionId,
    status: freshness.status,
    snapshotCount: freshness.snapshotCount,
    secretReadableByProduct: false as const,
  };

  // Explicit compare window (UTC) — required for periodEqual; else NON_COMPARABLE.
  const windowStart =
    (process.env.SFIA_FINOPS_COMPARE_WINDOW_START_UTC ?? "").trim() ||
    periodStartDate(filter.periodDays ?? 30).toISOString();
  const windowEnd =
    (process.env.SFIA_FINOPS_COMPARE_WINDOW_END_UTC ?? "").trim() || null;

  if (freshness.status === "IDLE" || freshness.snapshotCount === 0) {
    limits.push("ADMIN_COLLECTION_UNAVAILABLE");
    limits.push("ADMIN_SECRET_STATUS_UNKNOWN_TO_PRODUCT");
    return {
      studioEstimatedUsd: studio,
      studioEstimationKind,
      providerCostUsd: null,
      providerCurrency: null,
      deltaUsd: null,
      comparability: "UNAVAILABLE",
      compareWindowStartUtc: windowStart,
      compareWindowEndUtc: windowEnd,
      freshness: freshnessDto,
      limits,
      noraIndependent: true,
      studioEstimatedUsdDecimal: studioDecimal,
      providerCostUsdDecimal: null,
      deltaUsdDecimal: null,
    };
  }

  const configuredProject =
    (process.env.SFIA_OPENAI_PROJECT_ID ?? "").trim() || null;
  const configuredKey =
    (process.env.SFIA_OPENAI_API_KEY_ID ?? "").trim() || null;
  const configuredOrg =
    (process.env.SFIA_OPENAI_ORG_ID ?? "").trim() || null;

  if (!windowEnd) {
    limits.push("PERIOD_WINDOW_END_ABSENT");
    return {
      studioEstimatedUsd: studio,
      studioEstimationKind,
      providerCostUsd: null,
      providerCurrency: null,
      deltaUsd: null,
      comparability: "NON_COMPARABLE",
      compareWindowStartUtc: windowStart,
      compareWindowEndUtc: null,
      freshness: freshnessDto,
      limits: [...new Set(limits)],
      noraIndependent: true,
      studioEstimatedUsdDecimal: studioDecimal,
      providerCostUsdDecimal: null,
      deltaUsdDecimal: null,
    };
  }

  // Pilot authorization for provider costs — fail-closed.
  // Studio project ownership ≠ habilitation to read an OpenAI project aggregate
  // that may span multiple Studio projects. No individual financial habilitation
  // model exists yet → mask provider amounts by default.
  // A global env flag alone never proves individual financial habilitation.
  const emergencyDeny =
    (process.env.SFIA_FINOPS_PROVIDER_DISCLOSE ?? "").trim() === "0";
  if (emergencyDeny) {
    limits.push("PROVIDER_DISCLOSE_EMERGENCY_DENY");
  }
  const studioProjectFilter = filter.projectId?.trim() || null;
  if (studioProjectFilter) {
    try {
      await assertProjectOwned(pilotId, studioProjectFilter);
    } catch {
      limits.push("PILOT_NOT_OWNER_OF_FILTERED_PROJECT");
    }
  } else {
    limits.push("PROVIDER_COST_REQUIRES_STUDIO_PROJECT_FILTER");
  }
  if (!configuredProject) {
    limits.push("OPENAI_PROJECT_NOT_CONFIGURED");
  }
  // Product path: refuse provider-cost disclosure until a real financial
  // habilitation exists. Qualification COMPARABLE stays on evaluateFinOpsReconciliation
  // with explicit pilotAuthorized=true (isolated fixtures only).
  const pilotAuthorized = false;
  limits.push("NO_FINANCIAL_HABILITATION_FOR_PROVIDER_AGGREGATE");

  const evaluated = evaluateFinOpsReconciliation({
    studioEstimatedUsd: studio,
    studioEstimationKind,
    snapshots,
    windowStartUtc: windowStart,
    windowEndUtc: windowEnd,
    organizationScope: productView.organizationScope,
    configuredOrgId: configuredOrg,
    configuredProjectId: configuredProject,
    configuredApiKeyId: configuredKey,
    pilotAuthorized,
    freshnessStatus: freshness.status,
    freshnessSnapshotCount: freshness.snapshotCount,
  });
  limits.push(...evaluated.limits);

  const providerNum =
    evaluated.disclosed && evaluated.providerCostUsd != null
      ? Number(evaluated.providerCostUsd)
      : null;
  const deltaNum =
    evaluated.disclosed && evaluated.deltaUsd != null
      ? Number(evaluated.deltaUsd)
      : null;

  return {
    studioEstimatedUsd: studio,
    studioEstimationKind,
    providerCostUsd:
      providerNum != null && Number.isFinite(providerNum) ? providerNum : null,
    providerCurrency: evaluated.disclosed ? evaluated.providerCurrency : null,
    deltaUsd: deltaNum != null && Number.isFinite(deltaNum) ? deltaNum : null,
    comparability: evaluated.comparability,
    compareWindowStartUtc: windowStart,
    compareWindowEndUtc: windowEnd,
    freshness: freshnessDto,
    limits: [...new Set(limits)],
    noraIndependent: true,
    studioEstimatedUsdDecimal: studioDecimal,
    providerCostUsdDecimal: evaluated.disclosed
      ? evaluated.providerCostUsd
      : null,
    deltaUsdDecimal: evaluated.disclosed ? evaluated.deltaUsd : null,
  };

}

export type FinOpsWorkListItem = {
  cognitiveWorkId: string;
  title: string;
  projectId: string | null;
  projectName: string | null;
  modelsLabel: string;
  tokens: MeasuredValue<number>;
  estimatedCostUsd: MeasuredValue<number>;
  statusLabel: string;
  lastObservedAt: string;
};

export async function loadFinOpsWorks(
  pilotId: string,
  raw: { period?: string | null; projectId?: string | null; model?: string | null; limit?: number },
): Promise<{ items: FinOpsWorkListItem[] }> {
  const periodDays = parseFinOpsPeriodDays(raw.period);
  const limit = Math.min(50, Math.max(1, Number(raw.limit) || 20));
  const input: FinOpsFilterInput = {
    periodDays,
    projectId: raw.projectId?.trim() || null,
    model: raw.model?.trim() || null,
  };
  const rows = await loadObservations(pilotId, input);
  const byWork = new Map<string, ObservationRow[]>();
  for (const r of filterBillableFinOpsRows(rows)) {
    if (!r.cognitiveWorkId) continue;
    const list = byWork.get(r.cognitiveWorkId) ?? [];
    list.push(r);
    byWork.set(r.cognitiveWorkId, list);
  }

  const workIds = [...byWork.keys()];
  if (workIds.length === 0) {
    return { items: [] };
  }

  const works = await db
    .select({
      id: cognitiveWorks.id,
      objective: cognitiveWorks.objective,
      status: cognitiveWorks.status,
      projectId: cognitiveWorks.projectId,
    })
    .from(cognitiveWorks)
    .where(
      and(inArray(cognitiveWorks.id, workIds), eq(cognitiveWorks.ownerPilotId, pilotId)),
    );

  // E2-INT — attribution coherence uses full history, not the period/model slice alone.
  const workProjectById = new Map(works.map((w) => [w.id, w.projectId]));
  const conflictWorkIds = await loadAttributionConflictWorkIds(pilotId, workProjectById);

  const projectIds = [
    ...new Set(
      works.flatMap((w) => {
        if (conflictWorkIds.has(w.id)) return [];
        const slice = byWork.get(w.id) ?? [];
        const eff = effectiveFinOpsProjectIdForWork(w.projectId, slice);
        return eff ? [eff] : [];
      }),
    ),
  ];
  const projectNames = new Map<string, string>();
  if (projectIds.length > 0) {
    const projs = await db
      .select({ id: projects.id, name: projects.name })
      .from(projects)
      .where(and(inArray(projects.id, projectIds), eq(projects.ownerPilotId, pilotId)));
    for (const p of projs) projectNames.set(p.id, p.name);
  }

  const items: FinOpsWorkListItem[] = works.map((w) => {
    const slice = byWork.get(w.id) ?? [];
    const last = slice[0]?.createdAt ?? new Date();
    // E2-REL-05 / E2-INT — conflict (full history) ⇒ null (never invent via period slice).
    const effectiveProjectId = conflictWorkIds.has(w.id)
      ? null
      : effectiveFinOpsProjectIdForWork(w.projectId, slice);
    const title =
      (w.objective?.trim() || "Travail cognitif").slice(0, 120) +
      ((w.objective?.length ?? 0) > 120 ? "…" : "");
    return {
      cognitiveWorkId: w.id,
      title,
      projectId: effectiveProjectId,
      projectName: effectiveProjectId
        ? projectNames.get(effectiveProjectId) ?? null
        : null,
      modelsLabel: uniqueModelsLabel(
        slice.map((r) =>
          finOpsModelDisplayLabel({
            modelApplied: r.modelApplied,
            modelRequested: r.modelRequested,
          }),
        ),
      ),
      tokens: aggregateTokenTotal(slice),
      estimatedCostUsd: aggregateEstimatedCost(slice),
      statusLabel: mapCognitiveWorkStatusLabel(w.status),
      lastObservedAt: last.toISOString(),
    };
  });

  items.sort(
    (a, b) =>
      new Date(b.lastObservedAt).getTime() - new Date(a.lastObservedAt).getTime(),
  );

  return { items: items.slice(0, limit) };
}

export type FinOpsWorkSegment = {
  segmentIndex: number;
  label: string;
  model: string | null;
  effort: string | null;
  tokens: MeasuredValue<number>;
  estimatedCostUsd: MeasuredValue<number>;
};

export type FinOpsWorkDetailDto = {
  cognitiveWorkId: string;
  title: string;
  projectId: string | null;
  projectName: string | null;
  statusLabel: string;
  kpis: {
    estimatedCostUsd: MeasuredValue<number>;
    totalTokens: MeasuredValue<number>;
    providerRequests: MeasuredValue<number>;
    segmentCount: MeasuredValue<number>;
  };
  segments: FinOpsWorkSegment[];
  timeline: Array<{
    id: string;
    at: string;
    operation: string | null;
    model: string | null;
    status: string;
    costCoverage: string;
  }>;
  tariffVersion: string | null;
};

export async function loadFinOpsWorkDetail(
  pilotId: string,
  cognitiveWorkId: string,
): Promise<FinOpsWorkDetailDto> {
  const work = (
    await db
      .select({
        id: cognitiveWorks.id,
        objective: cognitiveWorks.objective,
        status: cognitiveWorks.status,
        projectId: cognitiveWorks.projectId,
      })
      .from(cognitiveWorks)
      .where(
        and(eq(cognitiveWorks.id, cognitiveWorkId), eq(cognitiveWorks.ownerPilotId, pilotId)),
      )
      .limit(1)
  )[0];
  if (!work) throw new StudioError("NOT_FOUND", "Travail introuvable");

  const lane = studioLane();
  const rows = await db
    .select()
    .from(providerUsageObservations)
    .where(
      and(
        eq(providerUsageObservations.cognitiveWorkId, cognitiveWorkId),
        eq(providerUsageObservations.ownerPilotId, pilotId),
        sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
      ),
    )
    .orderBy(
      providerUsageObservations.segmentIndex,
      desc(providerUsageObservations.createdAt),
    );

  const billableRows = filterBillableFinOpsRows(rows);

  let projectName: string | null = null;
  const effectiveProjectId = effectiveFinOpsProjectIdForWork(work.projectId, rows);
  if (effectiveProjectId) {
    const p = (
      await db
        .select({ name: projects.name })
        .from(projects)
        .where(and(eq(projects.id, effectiveProjectId), eq(projects.ownerPilotId, pilotId)))
        .limit(1)
    )[0];
    projectName = p?.name ?? null;
  }

  const title = work.objective?.trim() || "Travail cognitif";
  const bySegment = new Map<number, ObservationRow[]>();
  for (const r of billableRows) {
    const idx = r.segmentIndex ?? 0;
    const list = bySegment.get(idx) ?? [];
    list.push(r);
    bySegment.set(idx, list);
  }

  const segments: FinOpsWorkSegment[] = [...bySegment.entries()]
    .sort(([a], [b]) => a - b)
    .map(([segmentIndex, slice]) => {
      const head = slice[0];
      const tokens = aggregateTokenTotal(slice);
      return {
        segmentIndex,
        label: head?.operation?.trim() || `Segment ${String(segmentIndex + 1).padStart(2, "0")}`,
        model: finOpsModelDisplayLabel({
          modelApplied: head?.modelApplied,
          modelRequested: head?.modelRequested,
        }),
        effort: finOpsConfirmedValueLabel({
          applied: head?.effortApplied,
          requested: head?.effortRequested,
        }),
        tokens,
        estimatedCostUsd: aggregateEstimatedCost(slice),
      };
    });

  const providerRequestsTotal = sumBillableProviderRequests(billableRows);
  const providerRequests: MeasuredValue<number> =
    billableRows.length === 0
      ? { kind: "empty" }
      : providerRequestsTotal > 0
        ? { kind: "known", value: providerRequestsTotal }
        : { kind: "unknown", reason: "Requêtes non observées" };

  const segmentCount: MeasuredValue<number> =
    segments.length > 0
      ? { kind: "known", value: segments.length }
      : billableRows.length > 0
        ? { kind: "unknown", reason: "Segments non délimités" }
        : { kind: "empty" };

  return {
    cognitiveWorkId: work.id,
    title,
    projectId: effectiveProjectId,
    projectName,
    statusLabel: mapCognitiveWorkStatusLabel(work.status),
    kpis: {
      estimatedCostUsd: aggregateEstimatedCost(billableRows),
      totalTokens: aggregateTokenTotal(billableRows),
      providerRequests,
      segmentCount,
    },
    segments,
    timeline: billableRows.map((r) => ({
      id: r.id,
      at: r.createdAt.toISOString(),
      operation: r.operation,
      model: finOpsModelDisplayLabel({
        modelApplied: r.modelApplied,
        modelRequested: r.modelRequested,
      }),
      status: r.status,
      costCoverage: r.costCoverage,
    })),
    tariffVersion: rows.find((r) => r.tariffVersion)?.tariffVersion ?? null,
  };
}
