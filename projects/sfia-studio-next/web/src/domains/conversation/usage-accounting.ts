import { createHash, randomUUID } from "node:crypto";
import { db } from "@/db/client";
import { providerUsageObservations } from "@/db/schema";
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
      cognitiveWorkId: input.cognitiveWorkId ?? null,
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
      providerRequests: 1,
      costCoverage: "PARTIAL",
      estimatedCostUsd: null,
      idempotencyKey,
      limits: [
        "HTTP_ATTEMPT_USAGE_UNKNOWN",
        httpAttemptLimitMarker(http.attemptId),
        ...(sdkAttemptId ? [`SDK_ATTEMPT:${sdkAttemptId}`] : []),
      ],
    });
  }

  return primary;
}