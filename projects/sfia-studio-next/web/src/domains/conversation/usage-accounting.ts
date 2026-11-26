import { createHash, randomUUID } from "node:crypto";
import { db } from "@/db/client";
import { providerUsageObservations } from "@/db/schema";
import type { CognitiveModelId } from "./cognitive-resources/resource-catalog";
import {
  TARIFF_CATALOG_VERSION,
  effectiveTariffRates,
  getTariffEntry,
} from "./cognitive-resources/tariff-catalog";
import {
  extractProviderUsageFromRunResult,
  type ProviderUsageSnapshot,
} from "./provider-usage";

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
    "finops-obs-v1",
    input.granularity,
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
  tariffVersion: string = TARIFF_CATALOG_VERSION,
): CostEstimate {
  const limits: string[] = [];
  if (!model || !isCognitiveModelId(model)) {
    return {
      estimatedCostUsd: null,
      costCoverage: "UNKNOWN",
      tariffVersion,
      limits: ["MODEL_TARIFF_UNKNOWN"],
    };
  }
  const { inputTokens, outputTokens, cachedInputTokens } = usage;
  if (inputTokens == null || outputTokens == null) {
    return {
      estimatedCostUsd: null,
      costCoverage: "UNKNOWN",
      tariffVersion,
      limits: ["TOKEN_AGGREGATES_INCOMPLETE"],
    };
  }

  const rates = effectiveTariffRates(model, inputTokens);
  if (!rates) {
    return {
      estimatedCostUsd: null,
      costCoverage: "UNKNOWN",
      tariffVersion,
      limits: ["TARIFF_RATES_UNAVAILABLE"],
    };
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
  const modelForTariff = input.modelApplied ?? input.modelRequested ?? null;
  const usageSlice = {
    inputTokens: input.inputTokens ?? null,
    outputTokens: input.outputTokens ?? null,
    cachedInputTokens: input.cachedInputTokens ?? null,
  };
  const tariffVersion = input.tariffVersion ?? TARIFF_CATALOG_VERSION;
  const cost =
    input.costCoverage != null && input.estimatedCostUsd !== undefined
      ? {
          estimatedCostUsd: input.estimatedCostUsd,
          costCoverage: input.costCoverage,
          tariffVersion,
          limits: input.limits ?? [],
        }
      : estimateCostUsd(usageSlice, modelForTariff, tariffVersion);

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
  return { inserted: false, id };
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
};

/**
 * E04 wiring entrypoint — map Agents SDK run result → durable FinOps row (idempotent).
 * Safe to call from nora-adapter / run-nora-cognitive-turn once per provider invocation.
 */
export async function recordNoraProviderUsageFromRunResult(
  input: NoraProviderUsageHookInput,
): Promise<RecordProviderUsageObservationResult> {
  const snapshot = extractProviderUsageFromRunResult(input.runResult);
  const granularity = input.granularity ?? "REQUEST";
  const idempotencyKey = buildIdempotencyKey({
    granularity,
    operation: input.operation,
    attemptId: input.attemptId,
    generationId: input.generationId,
    segmentIndex: input.segmentIndex,
    providerResponseId: input.providerResponseId,
    callOrdinal: input.callOrdinal,
  });

  return recordProviderUsageObservation({
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
    inputTokens: snapshot.inputTokens,
    outputTokens: snapshot.outputTokens,
    totalTokens: snapshot.totalTokens,
    cachedInputTokens: snapshot.cachedInputTokens,
    reasoningTokens: snapshot.reasoningTokens,
    providerRequests: snapshot.providerRequests,
    durationMs: input.durationMs,
    status: input.status,
    granularity,
    providerResponseId: input.providerResponseId,
    errorCategory: input.errorCategory,
    idempotencyKey,
    limits: [...snapshot.limits, ...(snapshot.provenance === "UNAVAILABLE" ? ["PROVIDER_USAGE_UNAVAILABLE"] : [])],
  });
}