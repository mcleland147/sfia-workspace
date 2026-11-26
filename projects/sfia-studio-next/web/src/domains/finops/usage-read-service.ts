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
  computeEstimationCompletenessPercent,
  computeMeasureCoveragePercent,
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
  reconcileFinOpsCosts,
  resolveProductAdminCollectorView,
  sumMeasuredCostUsd,
  type FinOpsScopeEvidence,
} from "./provider-admin-usage-collector";
import { decimalFromNumberLike } from "./decimal-money";

function studioLane(): string {
  return process.env.STUDIO_LANE?.trim().toUpperCase() || "UNKNOWN";
}

export type FinOpsFilterInput = {
  periodDays?: FinOpsPeriodDays;
  projectId?: string | null;
  model?: string | null;
};

function baseObservationWhere(pilotId: string, input: FinOpsFilterInput, since: Date) {
  const lane = studioLane();
  const conditions = [
    eq(providerUsageObservations.ownerPilotId, pilotId),
    gte(providerUsageObservations.createdAt, since),
    sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
  ];
  if (input.projectId) {
    conditions.push(eq(providerUsageObservations.projectId, input.projectId));
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

async function loadObservations(
  pilotId: string,
  input: FinOpsFilterInput,
): Promise<ObservationRow[]> {
  const periodDays = input.periodDays ?? 30;
  const since = periodStartDate(periodDays);
  if (input.projectId) {
    await assertProjectOwned(pilotId, input.projectId);
  }
  return db
    .select()
    .from(providerUsageObservations)
    .where(baseObservationWhere(pilotId, { ...input, periodDays }, since))
    .orderBy(desc(providerUsageObservations.createdAt));
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
      hasData: slice.length > 0,
    });
  }
  return out;
}

function bucketModelBreakdown(rows: ObservationRow[]): FinOpsSummaryDto["modelBreakdown"] {
  const byModel = new Map<string, ObservationRow[]>();
  for (const r of rows) {
    const m =
      r.modelApplied ?? r.modelRequested ?? "inconnu";
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

  const workIds = [
    ...new Set(rows.map((r) => r.cognitiveWorkId).filter((id): id is string => Boolean(id))),
  ];
  let completedWorks: MeasuredValue<number> = { kind: "empty" };
  if (workIds.length > 0) {
    const works = await db
      .select({ id: cognitiveWorks.id, status: cognitiveWorks.status })
      .from(cognitiveWorks)
      .where(
        and(
          inArray(cognitiveWorks.id, workIds),
          eq(cognitiveWorks.ownerPilotId, pilotId),
        ),
      );
    const completeCount = works.filter((w) => w.status === "COMPLETE").length;
    completedWorks =
      completeCount > 0
        ? { kind: "known", value: completeCount }
        : { kind: "known", value: 0 };
  } else if (rows.length > 0) {
    completedWorks = { kind: "unknown", reason: "Travaux non liés" };
  }

  let costPerCompletedWorkUsd: MeasuredValue<number> = { kind: "empty" };
  if (
    completedWorks.kind === "known" &&
    completedWorks.value > 0 &&
    (estimatedCostUsd.kind === "known" || estimatedCostUsd.kind === "partial")
  ) {
    costPerCompletedWorkUsd = {
      kind: estimatedCostUsd.kind === "partial" ? "partial" : "known",
      value: estimatedCostUsd.value / completedWorks.value,
      note: estimatedCostUsd.kind === "partial" ? estimatedCostUsd.note : undefined,
    };
  } else if (rows.length > 0 && completedWorks.kind === "known" && completedWorks.value === 0) {
    costPerCompletedWorkUsd = { kind: "unknown", reason: "Aucun travail abouti" };
  }

  const totalRequests = sumBillableProviderRequests(rows);
  const measuredRequests = sumBillableProviderRequests(rows, {
    onlyWithObservedCost: true,
  });

  const providerReconciliation = buildProviderReconciliationDto(
    estimatedCostUsd,
    input,
  );

  return {
    periodDays,
    projectId: input.projectId ?? null,
    model: input.model ?? null,
    hasObservations: rows.length > 0,
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

function buildProviderReconciliationDto(
  estimatedCostUsd: MeasuredValue<number>,
  filter: FinOpsFilterInput,
): FinOpsProviderReconciliationDto {
  // Product path: never inspect OPENAI_ADMIN_KEY.
  const productView = resolveProductAdminCollectorView();
  const freshness = getAdminCollectorFreshness();
  const snapshots = listAdminCollectorSnapshots().filter(
    (s) =>
      s.surfaceObject === "organization.costs.result" &&
      s.completeness === "complete",
  );
  const limits: string[] = ["PROVIDER_SNAPSHOT_PG_MIGRATION_PENDING"];

  const studio =
    estimatedCostUsd.kind === "known" || estimatedCostUsd.kind === "partial"
      ? estimatedCostUsd.value
      : null;
  const studioDecimal =
    studio != null ? decimalFromNumberLike(studio) : null;

  const freshnessDto = {
    lastAttemptAtUtc: freshness.lastAttemptAtUtc,
    lastSuccessAtUtc: freshness.lastSuccessAtUtc,
    lastCollectionId: freshness.lastCollectionId,
    status: freshness.status,
    snapshotCount: freshness.snapshotCount,
    secretReadableByProduct: false as const,
  };

  if (freshness.status === "IDLE" || freshness.snapshotCount === 0) {
    limits.push("ADMIN_COLLECTION_UNAVAILABLE");
    limits.push("ADMIN_SECRET_STATUS_UNKNOWN_TO_PRODUCT");
    return {
      studioEstimatedUsd: studio,
      studioEstimationKind: estimatedCostUsd.kind,
      providerCostUsd: null,
      providerCurrency: null,
      deltaUsd: null,
      comparability: "UNAVAILABLE",
      freshness: freshnessDto,
      limits,
      noraIndependent: true,
      studioEstimatedUsdDecimal: studioDecimal,
      providerCostUsdDecimal: null,
      deltaUsdDecimal: null,
    };
  }

  const since = periodStartDate(filter.periodDays ?? 30);
  const sum = sumMeasuredCostUsd(snapshots, {
    intervalStartUtc: since.toISOString(),
    intervalEndUtc: new Date().toISOString(),
    projectId: null, // provider project mapping not proven from Studio projectId alone
  });
  limits.push(...sum.limits);

  const configuredProject =
    (process.env.SFIA_OPENAI_PROJECT_ID ?? "").trim() || null;
  const configuredKey =
    (process.env.SFIA_OPENAI_API_KEY_ID ?? "").trim() || null;
  const evidence: FinOpsScopeEvidence = {
    organizationMatches: Boolean(productView.organizationScope),
    projectIdsOverlap: Boolean(
      configuredProject &&
        snapshots.some((s) => s.dimensions.project_id === configuredProject),
    ),
    apiKeyIdsOverlap: Boolean(
      configuredKey &&
        snapshots.some((s) => s.dimensions.api_key_id === configuredKey),
    ),
    periodOverlap: sum.counted > 0,
    currencyMatches: true,
    surfacesRequested: ["/organization/costs"],
    evidenceNotes: [
      // Config flag alone is never sufficient evidence.
      (process.env.SFIA_FINOPS_SCOPE_COMPARABLE ?? "").trim() === "1"
        ? "SCOPE_FLAG_SET_BUT_EVIDENCE_REQUIRED"
        : "SCOPE_FLAG_UNSET",
    ],
  };

  const rec = reconcileFinOpsCosts({
    studioEstimatedUsd: studioDecimal,
    providerCostUsd: sum.total,
    scope: evidence,
  });
  limits.push(...rec.limits);

  // Display numbers are derived from decimal strings only when present.
  const providerNum =
    sum.total != null ? Number(sum.total) : null;
  const deltaNum = rec.deltaUsd != null ? Number(rec.deltaUsd) : null;

  return {
    studioEstimatedUsd: studio,
    studioEstimationKind: estimatedCostUsd.kind,
    providerCostUsd:
      providerNum != null && Number.isFinite(providerNum) ? providerNum : null,
    providerCurrency: "usd",
    deltaUsd: deltaNum != null && Number.isFinite(deltaNum) ? deltaNum : null,
    comparability: rec.status,
    freshness: freshnessDto,
    limits: [...new Set(limits)],
    noraIndependent: true,
    studioEstimatedUsdDecimal: studioDecimal,
    providerCostUsdDecimal: sum.total,
    deltaUsdDecimal: rec.deltaUsd,
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
  for (const r of rows) {
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

  const projectIds = [
    ...new Set(works.map((w) => w.projectId).filter((id): id is string => Boolean(id))),
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
    const title =
      (w.objective?.trim() || "Travail cognitif").slice(0, 120) +
      ((w.objective?.length ?? 0) > 120 ? "…" : "");
    return {
      cognitiveWorkId: w.id,
      title,
      projectId: w.projectId,
      projectName: w.projectId ? projectNames.get(w.projectId) ?? null : null,
      modelsLabel: uniqueModelsLabel(slice.map((r) => r.modelApplied ?? r.modelRequested)),
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

  let projectName: string | null = null;
  if (work.projectId) {
    const p = (
      await db
        .select({ name: projects.name })
        .from(projects)
        .where(and(eq(projects.id, work.projectId), eq(projects.ownerPilotId, pilotId)))
        .limit(1)
    )[0];
    projectName = p?.name ?? null;
  }

  const title = work.objective?.trim() || "Travail cognitif";
  const bySegment = new Map<number, ObservationRow[]>();
  for (const r of rows) {
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
        model: head?.modelApplied ?? head?.modelRequested ?? null,
        effort: head?.effortApplied ?? head?.effortRequested ?? null,
        tokens,
        estimatedCostUsd: aggregateEstimatedCost(slice),
      };
    });

  const providerRequestsTotal = sumBillableProviderRequests(rows);
  const providerRequests: MeasuredValue<number> =
    rows.length === 0
      ? { kind: "empty" }
      : providerRequestsTotal > 0
        ? { kind: "known", value: providerRequestsTotal }
        : { kind: "unknown", reason: "Requêtes non observées" };

  const segmentCount: MeasuredValue<number> =
    segments.length > 0
      ? { kind: "known", value: segments.length }
      : rows.length > 0
        ? { kind: "unknown", reason: "Segments non délimités" }
        : { kind: "empty" };

  return {
    cognitiveWorkId: work.id,
    title,
    projectId: work.projectId,
    projectName,
    statusLabel: mapCognitiveWorkStatusLabel(work.status),
    kpis: {
      estimatedCostUsd: aggregateEstimatedCost(rows),
      totalTokens: aggregateTokenTotal(rows),
      providerRequests,
      segmentCount,
    },
    segments,
    timeline: rows.map((r) => ({
      id: r.id,
      at: r.createdAt.toISOString(),
      operation: r.operation,
      model: r.modelApplied ?? r.modelRequested,
      status: r.status,
      costCoverage: r.costCoverage,
    })),
    tariffVersion: rows.find((r) => r.tariffVersion)?.tariffVersion ?? null,
  };
}
