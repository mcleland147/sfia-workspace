import { createHash, randomUUID } from "node:crypto";
import { and, eq, isNull, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { cognitiveWorks, providerUsageObservations } from "@/db/schema";
import type { CognitiveModelId } from "./cognitive-resources/resource-catalog";
import {
  LONG_CONTEXT_INPUT_THRESHOLD_TOKENS,
  TARIFF_CATALOG_VERSION,
  effectiveTariffRates,
  getTariffEntry,
} from "./cognitive-resources/tariff-catalog";
import { getHttpAttemptsSnapshot } from "./provider-emission-frontier";
import {
  extractProviderUsageFromRunResult,
  type ProviderRequestUsageEntry,
  type ProviderUsageSnapshot,
} from "./provider-usage";

function httpAttemptLimitMarker(attemptId: string): string {
  return `HTTP_ATTEMPT:${attemptId}`;
}

export type CostCoverage = "KNOWN" | "PARTIAL" | "UNKNOWN";

export type ProviderUsageObservationStatus =
  | "initiated"
  | "succeeded"
  | "failed"
  | "interrupted"
  | "uncertain";

export type ProviderUsageGranularity = "REQUEST" | "GENERATION_AGGREGATE";

export type ProviderUsageObservationInput = {
  lane?: string | null;
  scopeId?: string | null;
  ownerPilotId?: string | null;
  projectId?: string | null;
  preparationId?: string | null;
  conversationId?: string | null;
  turnId?: string | null;
  cognitiveWorkId?: string | null;
  segmentIndex?: number | null;
  generationId?: string | null;
  operation?: string | null;
  attemptId?: string | null;
  modelRequested?: string | null;
  modelApplied?: string | null;
  effortRequested?: string | null;
  effortApplied?: string | null;
  inputTokens?: number | null;
  cachedInputTokens?: number | null;
  outputTokens?: number | null;
  reasoningTokens?: number | null;
  totalTokens?: number | null;
  providerRequests?: number | null;
  durationMs?: number | null;
  tariffVersion?: string;
  estimatedCostUsd?: number | null;
  costCoverage?: CostCoverage;
  status: ProviderUsageObservationStatus;
  granularity: ProviderUsageGranularity;
  providerResponseId?: string | null;
  idempotencyKey: string;
  errorCategory?: string | null;
  limits?: string[];
};

export type CostEstimate = {
  estimatedCostUsd: number | null;
  costCoverage: CostCoverage;
  tariffVersion: string;
  limits: string[];
};

export type IdempotencyKeyInput = {
  granularity: ProviderUsageGranularity;
  lane?: string | null;
  scopeId?: string | null;
  projectId?: string | null;
  preparationId?: string | null;
  cognitiveWorkId?: string | null;
  operation?: string | null;
  attemptId?: string | null;
  generationId?: string | null;
  segmentIndex?: number | null;
  providerResponseId?: string | null;
  /** Disambiguates multiple provider HTTP calls within one logical attempt. */
  callOrdinal?: number | null;
};

/** Stable dedupe key for durable FinOps rows — distinct from business command idempotency. */
export function buildIdempotencyKey(input: IdempotencyKeyInput): string {
  const canonical = [
    "finops-obs-v2",
    input.granularity,
    input.lane?.trim() ?? "",
    input.scopeId?.trim() ?? "",
    input.projectId?.trim() ?? "",
    input.preparationId?.trim() ?? "",
    input.cognitiveWorkId?.trim() ?? "",
    input.operation?.trim() ?? "",
    input.attemptId?.trim() ?? "",
    input.generationId?.trim() ?? "",
    input.segmentIndex != null ? String(input.segmentIndex) : "",
    input.providerResponseId?.trim() ?? "",
    input.callOrdinal != null ? String(input.callOrdinal) : "",
  ].join("\0");
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}

function isCognitiveModelId(value: string): value is CognitiveModelId {
  return getTariffEntry(value as CognitiveModelId) != null;
}

function usdPerMillion(tokens: number, rateUsdPerMillion: number): number {
  return (tokens / 1_000_000) * rateUsdPerMillion;
}

export type EstimateCostUsdOptions = {
  tariffVersion?: string;
  /**
   * When false, long-context multipliers are never applied (multi-request run aggregate).
   * Default true — tier follows this row's input token count as a single provider request.
   */
  applyLongContextTier?: boolean;
  /** Model used for tariff was requested but applied model is unverified. */
  modelAppliedUnverified?: boolean;
};

function normalizeEstimateOptions(
  options?: EstimateCostUsdOptions | string,
): EstimateCostUsdOptions {
  if (typeof options === "string") return { tariffVersion: options };
  return options ?? {};
}

/**
 * Tariff estimate from observed token fields only — never coerces null → 0 for usage inputs.
 * Missing required token aggregates ⇒ UNKNOWN cost.
 */
export function estimateCostUsd(
  usage: Pick<
    ProviderUsageSnapshot,
    "inputTokens" | "outputTokens" | "cachedInputTokens"
  >,
  model: string | null | undefined,
  options?: EstimateCostUsdOptions | string,
): CostEstimate {
  const {
    tariffVersion = TARIFF_CATALOG_VERSION,
    applyLongContextTier = true,
    modelAppliedUnverified = false,
  } = normalizeEstimateOptions(options);
  const limits: string[] = [];
  if (modelAppliedUnverified) {
    limits.push("MODEL_APPLIED_UNVERIFIED");
  }
  if (!model || !isCognitiveModelId(model)) {
    return {
      estimatedCostUsd: null,
      costCoverage: "UNKNOWN",
      tariffVersion,
      limits: [...limits, "MODEL_TARIFF_UNKNOWN"],
    };
  }
  const { inputTokens, outputTokens, cachedInputTokens } = usage;
  if (inputTokens == null || outputTokens == null) {
    return {
      estimatedCostUsd: null,
      costCoverage: "UNKNOWN",
      tariffVersion,
      limits: [...limits, "TOKEN_AGGREGATES_INCOMPLETE"],
    };
  }

  const entry = getTariffEntry(model);
  const rates =
    applyLongContextTier
      ? effectiveTariffRates(model, inputTokens)
      : entry?.shortContextStandard;
  if (!rates) {
    return {
      estimatedCostUsd: null,
      costCoverage: "UNKNOWN",
      tariffVersion,
      limits: [...limits, "TARIFF_RATES_UNAVAILABLE"],
    };
  }
  if (
    !applyLongContextTier &&
    inputTokens > LONG_CONTEXT_INPUT_THRESHOLD_TOKENS
  ) {
    // Aggregate used short-context rates while per-request tiers are unknown —
    // never present the dollar figure as fully KNOWN.
    limits.push("LONG_CONTEXT_TIER_SUPPRESSED_AGGREGATE");
  }

  let costCoverage: CostCoverage = "KNOWN";
  let cached = 0;
  let uncached = inputTokens;

  if (cachedInputTokens == null) {
    costCoverage = "PARTIAL";
    limits.push("CACHED_INPUT_TOKENS_UNVERIFIED");
  } else {
    cached = Math.min(cachedInputTokens, inputTokens);
    uncached = Math.max(0, inputTokens - cached);
    if (cachedInputTokens > inputTokens) {
      limits.push("CACHED_INPUT_EXCEEDS_INPUT_CLAMPED");
    }
  }

  if (limits.includes("LONG_CONTEXT_TIER_SUPPRESSED_AGGREGATE")) {
    costCoverage = "PARTIAL";
  }

  if (modelAppliedUnverified && costCoverage === "KNOWN") {
    costCoverage = "PARTIAL";
  }

  const estimatedCostUsd =
    usdPerMillion(uncached, rates.inputUncachedUsdPerMillion) +
    usdPerMillion(cached, rates.inputCachedReadUsdPerMillion) +
    usdPerMillion(outputTokens, rates.outputUsdPerMillion);

  return {
    estimatedCostUsd,
    costCoverage,
    tariffVersion,
    limits,
  };
}

const UNVERIFIED_MODEL_SENTINELS = new Set([
  "unverified",
  "provider-simulated",
  "deterministic-fixture",
  "unknown",
  "n/a",
  "na",
]);

/** Exported for FinOps unit tests — tariff identity resolution. */
export function resolveTariffModel(input: Pick<
  ProviderUsageObservationInput,
  "modelApplied" | "modelRequested"
>): { model: string | null; modelAppliedUnverified: boolean } {
  const applied = input.modelApplied?.trim() || "";
  const requested = input.modelRequested?.trim() || "";
  // SDK may report modelApplied as the sentinel "UNVERIFIED" — never tariff that string.
  if (applied && !UNVERIFIED_MODEL_SENTINELS.has(applied.toLowerCase())) {
    if (isCognitiveModelId(applied)) {
      return { model: applied, modelAppliedUnverified: false };
    }
    // Applied value present but not in catalog — fall back to requested with PARTIAL.
    if (requested && isCognitiveModelId(requested)) {
      return { model: requested, modelAppliedUnverified: true };
    }
    return { model: applied, modelAppliedUnverified: true };
  }
  if (requested) {
    return { model: requested, modelAppliedUnverified: true };
  }
  return { model: null, modelAppliedUnverified: false };
}

function mergeCostCoverage(
  a: CostCoverage,
  b: CostCoverage,
): CostCoverage {
  if (a === "UNKNOWN" || b === "UNKNOWN") return "UNKNOWN";
  if (a === "PARTIAL" || b === "PARTIAL") return "PARTIAL";
  return "KNOWN";
}

function nullableTokenField(value: number | null | undefined): number | null | undefined {
  if (value === undefined) return undefined;
  if (value == null) return null;
  return Number.isFinite(value) ? value : null;
}

export type RecordProviderUsageObservationResult = {
  inserted: boolean;
  id: string;
};

export type ProbeUsageClaim = {
  generationId: string;
  ownerPilotId: string;
  preparationId: string;
  projectId?: string | null;
  conversationId?: string | null;
  turnId?: string | null;
  cognitiveWorkId: string;
};

const probeClaims = new Map<string, ProbeUsageClaim>();
const usageWriteInflight = new Map<string, Promise<void>>();
const probeClaimReleases = new Map<string, ReturnType<typeof setTimeout>>();
let probeClaimReadFailure: Error | null = null;

/** One-shot test seam. Throws after the claim is registered and before the observation read. */
export function failNextProbeClaimReadForTests(error: Error | null) {
  probeClaimReadFailure = error;
}

/**
 * A claim is only a handoff for a write that has not landed yet.
 * It is not a durable register. Once the lookup finds nothing and no write
 * is in flight, the claim stays only for this grace so a write that starts
 * immediately afterwards can still read it, then it is dropped.
 */
export const PROBE_CLAIM_GRACE_MS = 500;

export function probeUsageClaimHeld(generationId: string): boolean {
  return probeClaims.has(generationId.trim());
}

function dropProbeClaim(generationId: string, claim: ProbeUsageClaim) {
  const pending = probeClaimReleases.get(generationId);
  if (pending) {
    clearTimeout(pending);
    probeClaimReleases.delete(generationId);
  }
  if (probeClaims.get(generationId) === claim) probeClaims.delete(generationId);
}

function releaseProbeClaimWhenIdle(generationId: string, claim: ProbeUsageClaim) {
  const pending = probeClaimReleases.get(generationId);
  if (pending) clearTimeout(pending);
  const timer = setTimeout(() => {
    probeClaimReleases.delete(generationId);
    void (async () => {
      const inflight = usageWriteInflight.get(generationId);
      if (inflight) await inflight;
      if (usageWriteInflight.has(generationId)) {
        if (probeClaims.get(generationId) === claim) {
          releaseProbeClaimWhenIdle(generationId, claim);
        }
        return;
      }
      if (probeClaims.get(generationId) === claim) probeClaims.delete(generationId);
    })();
  }, PROBE_CLAIM_GRACE_MS);
  timer.unref?.();
  probeClaimReleases.set(generationId, timer);
}

function textOrEmpty(value: string | null | undefined): string {
  return value?.trim() ?? "";
}

function claimMatchesObservation(
  claim: ProbeUsageClaim,
  input: Pick<
    ProviderUsageObservationInput,
    "ownerPilotId" | "preparationId" | "projectId" | "conversationId" | "turnId"
  >,
): boolean {
  if (textOrEmpty(input.ownerPilotId) !== claim.ownerPilotId) return false;
  if (textOrEmpty(input.preparationId) !== claim.preparationId) return false;
  const obsProject = textOrEmpty(input.projectId);
  const claimProject = textOrEmpty(claim.projectId);
  if (obsProject && claimProject && obsProject !== claimProject) return false;
  const obsTurn = textOrEmpty(input.turnId);
  const claimTurn = textOrEmpty(claim.turnId);
  if (obsTurn && claimTurn && obsTurn !== claimTurn) return false;
  const obsConversation = textOrEmpty(input.conversationId);
  const claimConversation = textOrEmpty(claim.conversationId);
  if (obsConversation && claimConversation && obsConversation !== claimConversation) {
    return false;
  }
  return true;
}

/** Apply a validated claim onto a row that is still unattributed. The idempotency key stays unchanged. */
function claimedWorkId(input: ProviderUsageObservationInput): string | null {
  if (textOrEmpty(input.cognitiveWorkId)) return null;
  const generationId = textOrEmpty(input.generationId);
  if (!generationId) return null;
  const claim = probeClaims.get(generationId);
  if (!claim || !claimMatchesObservation(claim, input)) return null;
  return claim.cognitiveWorkId;
}

/**
 * Attach an already recorded probe to the work that actually consumed it.
 * Updates the existing rows. Does not insert a second observation.
 */
export async function attributeConsumedProbeUsage(
  claim: ProbeUsageClaim,
): Promise<{ updated: number; refused: boolean }> {
  const generationId = textOrEmpty(claim.generationId);
  const cognitiveWorkId = textOrEmpty(claim.cognitiveWorkId);
  const ownerPilotId = textOrEmpty(claim.ownerPilotId);
  const preparationId = textOrEmpty(claim.preparationId);
  if (!generationId || !cognitiveWorkId || !ownerPilotId || !preparationId) {
    return { updated: 0, refused: true };
  }
  const normalized: ProbeUsageClaim = {
    generationId,
    cognitiveWorkId,
    ownerPilotId,
    preparationId,
    projectId: textOrEmpty(claim.projectId) || null,
    conversationId: textOrEmpty(claim.conversationId) || null,
    turnId: textOrEmpty(claim.turnId) || null,
  };
  const work = (
    await db
      .select({
        id: cognitiveWorks.id,
        ownerPilotId: cognitiveWorks.ownerPilotId,
        preparationId: cognitiveWorks.preparationId,
        projectId: cognitiveWorks.projectId,
      })
      .from(cognitiveWorks)
      .where(eq(cognitiveWorks.id, cognitiveWorkId))
      .limit(1)
  )[0];
  if (
    !work ||
    work.ownerPilotId !== ownerPilotId ||
    work.preparationId !== preparationId ||
    (normalized.projectId && work.projectId && normalized.projectId !== work.projectId)
  ) {
    return { updated: 0, refused: true };
  }
  probeClaims.set(generationId, normalized);
  try {
    if (probeClaimReadFailure) {
      const error = probeClaimReadFailure;
      probeClaimReadFailure = null;
      throw error;
    }
    const lane = process.env.STUDIO_LANE?.trim().toUpperCase() || "UNKNOWN";
    const readRows = () =>
      db
        .select({
          id: providerUsageObservations.id,
          cognitiveWorkId: providerUsageObservations.cognitiveWorkId,
          projectId: providerUsageObservations.projectId,
          conversationId: providerUsageObservations.conversationId,
          turnId: providerUsageObservations.turnId,
        })
        .from(providerUsageObservations)
        .where(
          and(
            eq(providerUsageObservations.generationId, generationId),
            eq(providerUsageObservations.ownerPilotId, ownerPilotId),
            eq(providerUsageObservations.preparationId, preparationId),
            sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
          ),
        );
    const inflight = usageWriteInflight.get(generationId);
    if (inflight) await inflight;
    let found = await readRows();
    if (found.length === 0) {
      const late = usageWriteInflight.get(generationId);
      if (late && late !== inflight) {
        await late;
        found = await readRows();
      }
    }
    if (found.length === 0) {
      releaseProbeClaimWhenIdle(generationId, normalized);
      return { updated: 0, refused: false };
    }

    const conflicts = found.some((row) => {
      if (row.cognitiveWorkId && row.cognitiveWorkId !== cognitiveWorkId) return true;
      if (row.projectId && work.projectId && row.projectId !== work.projectId) return true;
      if (
        normalized.projectId &&
        row.projectId &&
        row.projectId !== normalized.projectId
      ) {
        return true;
      }
      if (normalized.turnId && row.turnId && row.turnId !== normalized.turnId) return true;
      if (
        normalized.conversationId &&
        row.conversationId &&
        row.conversationId !== normalized.conversationId
      ) {
        return true;
      }
      return false;
    });
    if (conflicts) {
      dropProbeClaim(generationId, normalized);
      return { updated: 0, refused: true };
    }

    let updated = 0;
    for (const row of found) {
      if (row.cognitiveWorkId) continue;
      const written = await db
        .update(providerUsageObservations)
        .set({ cognitiveWorkId })
        .where(
          and(
            eq(providerUsageObservations.id, row.id),
            isNull(providerUsageObservations.cognitiveWorkId),
          ),
        )
        .returning({ id: providerUsageObservations.id });
      updated += written.length;
    }
    dropProbeClaim(generationId, normalized);
    return { updated, refused: false };
  } catch (error) {
    releaseProbeClaimWhenIdle(generationId, normalized);
    throw error;
  }
}

/** Insert one durable observation; duplicate idempotency_key is a no-op. */
export async function recordProviderUsageObservation(
  input: ProviderUsageObservationInput,
): Promise<RecordProviderUsageObservationResult> {
  const { model: modelForTariff, modelAppliedUnverified } = resolveTariffModel(input);
  const usageSlice = {
    inputTokens: input.inputTokens ?? null,
    outputTokens: input.outputTokens ?? null,
    cachedInputTokens: input.cachedInputTokens ?? null,
  };
  const estimateOpts: EstimateCostUsdOptions = {
    tariffVersion: input.tariffVersion ?? TARIFF_CATALOG_VERSION,
    modelAppliedUnverified,
    applyLongContextTier: input.granularity !== "GENERATION_AGGREGATE",
  };
  const cost =
    input.costCoverage != null && input.estimatedCostUsd !== undefined
      ? {
          estimatedCostUsd: input.estimatedCostUsd,
          costCoverage: mergeCostCoverage(
            input.costCoverage,
            modelAppliedUnverified ? "PARTIAL" : input.costCoverage,
          ),
          tariffVersion: estimateOpts.tariffVersion ?? TARIFF_CATALOG_VERSION,
          limits: [
            ...(input.limits ?? []),
            ...(modelAppliedUnverified ? ["MODEL_APPLIED_UNVERIFIED"] : []),
          ],
        }
      : estimateCostUsd(usageSlice, modelForTariff, estimateOpts);

  const mergedLimits = [...new Set([...(input.limits ?? []), ...cost.limits])];
  const id = randomUUID();
  const cognitiveWorkId = claimedWorkId(input) ?? input.cognitiveWorkId ?? null;

  const inserted = await db
    .insert(providerUsageObservations)
    .values({
      id,
      lane:
        input.lane ??
        (process.env.STUDIO_LANE?.trim().toUpperCase() || "UNKNOWN"),
      scopeId: input.scopeId ?? null,
      ownerPilotId: input.ownerPilotId ?? null,
      projectId: input.projectId ?? null,
      preparationId: input.preparationId ?? null,
      conversationId: input.conversationId ?? null,
      turnId: input.turnId ?? null,
      cognitiveWorkId,
      segmentIndex: input.segmentIndex ?? null,
      generationId: input.generationId ?? null,
      operation: input.operation ?? null,
      attemptId: input.attemptId ?? null,
      modelRequested: input.modelRequested ?? null,
      modelApplied: input.modelApplied ?? null,
      effortRequested: input.effortRequested ?? null,
      effortApplied: input.effortApplied ?? null,
      inputTokens: nullableTokenField(input.inputTokens),
      cachedInputTokens: nullableTokenField(input.cachedInputTokens),
      outputTokens: nullableTokenField(input.outputTokens),
      reasoningTokens: nullableTokenField(input.reasoningTokens),
      totalTokens: nullableTokenField(input.totalTokens),
      providerRequests: input.providerRequests ?? null,
      durationMs: input.durationMs ?? null,
      tariffVersion: cost.tariffVersion,
      estimatedCostUsd:
        cost.estimatedCostUsd == null ? null : String(cost.estimatedCostUsd),
      costCoverage: cost.costCoverage,
      status: input.status,
      granularity: input.granularity,
      providerResponseId: input.providerResponseId ?? null,
      idempotencyKey: input.idempotencyKey,
      errorCategory: input.errorCategory ?? null,
      limitsJson: mergedLimits,
      createdAt: new Date(),
    })
    .onConflictDoNothing({ target: providerUsageObservations.idempotencyKey })
    .returning({ id: providerUsageObservations.id });

  if (inserted.length > 0) {
    return { inserted: true, id: inserted[0]!.id };
  }
  // Conflict / no-op: never return a fabricated UUID that was not persisted.
  return { inserted: false, id: "" };
}

export type NoraProviderUsageHookInput = {
  runResult: unknown;
  status: ProviderUsageObservationStatus;
  granularity?: ProviderUsageGranularity;
  scopeId?: string | null;
  ownerPilotId?: string | null;
  projectId?: string | null;
  preparationId?: string | null;
  conversationId?: string | null;
  turnId?: string | null;
  cognitiveWorkId?: string | null;
  segmentIndex?: number | null;
  generationId?: string | null;
  operation?: string | null;
  attemptId?: string | null;
  modelRequested?: string | null;
  modelApplied?: string | null;
  effortRequested?: string | null;
  effortApplied?: string | null;
  durationMs?: number | null;
  providerResponseId?: string | null;
  callOrdinal?: number | null;
  errorCategory?: string | null;
  /** FinOps limits merged before HTTP attempt correlation. */
  correlationLimits?: string[];
};

/**
 * E04 wiring entrypoint — map Agents SDK run result → durable FinOps row (idempotent).
 * Safe to call from nora-adapter / run-nora-cognitive-turn once per provider invocation.
 */
function idempotencyScope(input: NoraProviderUsageHookInput) {
  const lane =
    process.env.STUDIO_LANE?.trim().toUpperCase() || "UNKNOWN";
  return {
    lane,
    scopeId: input.scopeId,
    projectId: input.projectId,
    preparationId: input.preparationId,
    cognitiveWorkId: input.cognitiveWorkId,
  };
}

function observationCommon(input: NoraProviderUsageHookInput) {
  return {
    scopeId: input.scopeId,
    ownerPilotId: input.ownerPilotId,
    projectId: input.projectId,
    preparationId: input.preparationId,
    conversationId: input.conversationId,
    turnId: input.turnId,
    cognitiveWorkId: input.cognitiveWorkId,
    segmentIndex: input.segmentIndex,
    generationId: input.generationId,
    operation: input.operation,
    attemptId: input.attemptId,
    modelRequested: input.modelRequested,
    modelApplied: input.modelApplied,
    effortRequested: input.effortRequested,
    effortApplied: input.effortApplied,
    durationMs: input.durationMs,
    status: input.status,
    providerResponseId: input.providerResponseId,
    errorCategory: input.errorCategory,
  };
}

async function recordPerRequestUsages(
  input: NoraProviderUsageHookInput,
  entries: ProviderRequestUsageEntry[],
  baseLimits: string[],
): Promise<RecordProviderUsageObservationResult> {
  const scope = idempotencyScope(input);
  let last: RecordProviderUsageObservationResult = {
    inserted: false,
    id: "",
  };
  // callOrdinal is a base offset for the batch — never collapse distinct entries
  // onto the same ordinal when an explicit base is provided (`x ?? i` collision).
  const baseOrdinal = input.callOrdinal ?? 0;
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]!;
    const callOrdinal = baseOrdinal + i;
    const idempotencyKey = buildIdempotencyKey({
      ...scope,
      granularity: "REQUEST",
      operation: input.operation,
      attemptId: input.attemptId,
      generationId: input.generationId,
      segmentIndex: input.segmentIndex,
      providerResponseId: input.providerResponseId,
      callOrdinal,
    });
    last = await recordProviderUsageObservation({
      ...observationCommon(input),
      inputTokens: entry.inputTokens,
      outputTokens: entry.outputTokens,
      totalTokens: entry.totalTokens,
      cachedInputTokens: entry.cachedInputTokens,
      reasoningTokens: entry.reasoningTokens,
      providerRequests: 1,
      granularity: "REQUEST",
      idempotencyKey,
      limits: baseLimits,
    });
  }
  return last;
}

export async function recordNoraProviderUsageFromRunResult(
  input: NoraProviderUsageHookInput,
): Promise<RecordProviderUsageObservationResult> {
  const snapshot = extractProviderUsageFromRunResult(input.runResult);
  const baseLimits = [
    ...snapshot.limits,
    ...(input.correlationLimits ?? []),
    ...(snapshot.provenance === "UNAVAILABLE" ? ["PROVIDER_USAGE_UNAVAILABLE"] : []),
  ];
  const forcedGranularity = input.granularity;

  const perRequest = snapshot.requestUsageEntries;
  const requestCount = snapshot.providerRequests;
  const perRequestIncomplete =
    perRequest != null &&
    perRequest.length > 0 &&
    requestCount != null &&
    perRequest.length < requestCount;

  if (
    perRequest &&
    perRequest.length > 0 &&
    forcedGranularity !== "GENERATION_AGGREGATE" &&
    !perRequestIncomplete
  ) {
    return recordPerRequestUsages(input, perRequest, baseLimits);
  }

  const multiRequestWithoutBreakdown =
    (requestCount ?? 0) > 1 && (!perRequest || perRequest.length === 0);
  // Unknown request count must not be auto-classified as a single REQUEST.
  const requestCountUnknown =
    requestCount == null && (!perRequest || perRequest.length === 0);
  const granularity: ProviderUsageGranularity =
    forcedGranularity ??
    (multiRequestWithoutBreakdown || requestCountUnknown || perRequestIncomplete
      ? "GENERATION_AGGREGATE"
      : "REQUEST");

  const aggregateLimits = [...baseLimits];
  if (granularity === "GENERATION_AGGREGATE") {
    aggregateLimits.push("MULTI_REQUEST_AGGREGATE_ONLY");
    if ((requestCount ?? 0) > 1 && (!perRequest || perRequest.length === 0)) {
      aggregateLimits.push("PER_REQUEST_USAGE_UNAVAILABLE");
    }
    if (requestCountUnknown) {
      aggregateLimits.push("REQUEST_COUNT_UNKNOWN");
    }
    if (perRequestIncomplete) {
      aggregateLimits.push("PER_REQUEST_USAGE_INCOMPLETE");
    }
  }

  const scope = idempotencyScope(input);
  const idempotencyKey = buildIdempotencyKey({
    ...scope,
    granularity,
    operation: input.operation,
    attemptId: input.attemptId,
    generationId: input.generationId,
    segmentIndex: input.segmentIndex,
    providerResponseId: input.providerResponseId,
    callOrdinal: input.callOrdinal,
  });

  return recordProviderUsageObservation({
    ...observationCommon(input),
    inputTokens: snapshot.inputTokens,
    outputTokens: snapshot.outputTokens,
    totalTokens: snapshot.totalTokens,
    cachedInputTokens: snapshot.cachedInputTokens,
    reasoningTokens: snapshot.reasoningTokens,
    providerRequests: snapshot.providerRequests,
    granularity,
    idempotencyKey,
    limits: aggregateLimits,
  });
}

/**
 * Nora FinOps row(s) correlated to frontier HTTP attempts in the same ALS window.
 * Does not invent per-HTTP token splits when only the SDK aggregate is known.
 */
export async function recordNoraProviderUsageWithHttpCorrelation(
  input: NoraProviderUsageHookInput,
): Promise<RecordProviderUsageObservationResult> {
  const generationId = input.generationId?.trim() ?? "";
  let release: () => void = () => {};
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  if (generationId) usageWriteInflight.set(generationId, gate);
  try {
    return await recordNoraProviderUsageWithHttpCorrelationBody(input);
  } finally {
    release();
    if (generationId && usageWriteInflight.get(generationId) === gate) {
      usageWriteInflight.delete(generationId);
    }
  }
}

async function recordNoraProviderUsageWithHttpCorrelationBody(
  input: NoraProviderUsageHookInput,
): Promise<RecordProviderUsageObservationResult> {
  const httpAttempts = getHttpAttemptsSnapshot();
  const sdkAttemptId = input.attemptId?.trim() ?? "";

  if (httpAttempts.length === 0) {
    return recordNoraProviderUsageFromRunResult(input);
  }

  if (httpAttempts.length === 1) {
    const http = httpAttempts[0]!;
    const correlationLimits = [httpAttemptLimitMarker(http.attemptId)];
    if (sdkAttemptId && sdkAttemptId !== http.attemptId) {
      correlationLimits.push(`SDK_ATTEMPT:${sdkAttemptId}`);
    }
    return recordNoraProviderUsageFromRunResult({
      ...input,
      attemptId: http.attemptId,
      correlationLimits,
    });
  }

  const correlationLimits = [
    "MULTI_HTTP_ATTEMPT_AGGREGATE",
    ...httpAttempts.map((h) => httpAttemptLimitMarker(h.attemptId)),
  ];
  if (sdkAttemptId) correlationLimits.push(`SDK_ATTEMPT:${sdkAttemptId}`);

  const primary = await recordNoraProviderUsageFromRunResult({
    ...input,
    correlationLimits,
  });

  const scope = idempotencyScope(input);
  // Per-HTTP companion rows are correlation markers only — not billable request increments.
  for (let i = 0; i < httpAttempts.length; i++) {
    const http = httpAttempts[i]!;
    const idempotencyKey = buildIdempotencyKey({
      ...scope,
      granularity: "REQUEST",
      operation: input.operation,
      attemptId: http.attemptId,
      generationId: input.generationId,
      segmentIndex: input.segmentIndex,
      providerResponseId: input.providerResponseId,
      callOrdinal: 900 + i,
    });
    await recordProviderUsageObservation({
      ...observationCommon(input),
      attemptId: http.attemptId,
      granularity: "REQUEST",
      status: input.status,
      inputTokens: null,
      outputTokens: null,
      totalTokens: null,
      cachedInputTokens: null,
      reasoningTokens: null,
      providerRequests: null,
      costCoverage: "PARTIAL",
      estimatedCostUsd: null,
      idempotencyKey,
      limits: [
        "HTTP_ATTEMPT_CORRELATION_ONLY",
        "HTTP_ATTEMPT_USAGE_UNKNOWN",
        httpAttemptLimitMarker(http.attemptId),
        ...(sdkAttemptId ? [`SDK_ATTEMPT:${sdkAttemptId}`] : []),
      ],
    });
  }

  return primary;
}