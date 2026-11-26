/**
 * ML5 E02 — versioned OpenAI tariff referential (observation, not commercial promise).
 * CF-allocation.md §3.2 — Standard, short context, as of 2026-11-26.
 */

import type { CognitiveModelId } from "./resource-catalog";

export const TARIFF_CATALOG_VERSION = "ml5-tariff-catalog-v1-2026-11-26" as const;

export const TARIFF_PROVENANCE = {
  asOf: "2026-11-26",
  serviceTier: "Standard" as const,
  contextBand: "short_context" as const,
  source: "CF-allocation.md §3.2",
  unit: "USD_per_million_tokens" as const,
} as const;

/** Input tokens on a single provider request above this threshold trigger long-context multipliers. */
export const LONG_CONTEXT_INPUT_THRESHOLD_TOKENS = 272_000;

export const LONG_CONTEXT_TARIFF_MULTIPLIERS = {
  inputAndCache: 2,
  output: 1.5,
} as const;

export type ModelTariffRates = {
  inputUncachedUsdPerMillion: number;
  inputCachedReadUsdPerMillion: number;
  outputUsdPerMillion: number;
  cacheWrite30MinUsdPerMillion: number;
  /** Luna Standard 12h write not confirmed in contract excerpt — do not presume. */
  cacheWrite12hUsdPerMillion: number | null;
};

export type ModelTariffEntry = {
  modelId: CognitiveModelId;
  shortContextStandard: ModelTariffRates;
};

export const TARIFF_CATALOG: readonly ModelTariffEntry[] = [
  {
    modelId: "gpt-6-luna",
    shortContextStandard: {
      inputUncachedUsdPerMillion: 0.1,
      inputCachedReadUsdPerMillion: 0.01,
      outputUsdPerMillion: 0.5,
      cacheWrite30MinUsdPerMillion: 0.125,
      cacheWrite12hUsdPerMillion: null,
    },
  },
  {
    modelId: "gpt-6.1-terra",
    shortContextStandard: {
      inputUncachedUsdPerMillion: 1.0,
      inputCachedReadUsdPerMillion: 0.05,
      outputUsdPerMillion: 5.0,
      cacheWrite30MinUsdPerMillion: 1.25,
      cacheWrite12hUsdPerMillion: 2.5,
    },
  },
  {
    modelId: "gpt-6.2-sol",
    shortContextStandard: {
      inputUncachedUsdPerMillion: 2.0,
      inputCachedReadUsdPerMillion: 0.1,
      outputUsdPerMillion: 10.0,
      cacheWrite30MinUsdPerMillion: 2.5,
      cacheWrite12hUsdPerMillion: 5.0,
    },
  },
];

export type TariffComputationInput = {
  modelId: CognitiveModelId;
  inputTokens: number;
  /** Applies long-context multipliers to the entire request when input exceeds threshold. */
  useLongContextTier?: boolean;
};

export function getTariffEntry(
  modelId: CognitiveModelId,
): ModelTariffEntry | undefined {
  return TARIFF_CATALOG.find((e) => e.modelId === modelId);
}

export function resolvesLongContextTier(inputTokens: number): boolean {
  return inputTokens > LONG_CONTEXT_INPUT_THRESHOLD_TOKENS;
}

/** Scale short-context Standard rates when the long-context tier applies (per request, not multi-request totals). */
export function applyLongContextMultipliers(
  rates: ModelTariffRates,
): ModelTariffRates {
  const mIn = LONG_CONTEXT_TARIFF_MULTIPLIERS.inputAndCache;
  const mOut = LONG_CONTEXT_TARIFF_MULTIPLIERS.output;
  return {
    inputUncachedUsdPerMillion: rates.inputUncachedUsdPerMillion * mIn,
    inputCachedReadUsdPerMillion: rates.inputCachedReadUsdPerMillion * mIn,
    outputUsdPerMillion: rates.outputUsdPerMillion * mOut,
    cacheWrite30MinUsdPerMillion: rates.cacheWrite30MinUsdPerMillion * mIn,
    cacheWrite12hUsdPerMillion:
      rates.cacheWrite12hUsdPerMillion === null
        ? null
        : rates.cacheWrite12hUsdPerMillion * mIn,
  };
}

export function effectiveTariffRates(
  modelId: CognitiveModelId,
  inputTokens: number,
): ModelTariffRates | undefined {
  const entry = getTariffEntry(modelId);
  if (!entry) return undefined;
  if (resolvesLongContextTier(inputTokens)) {
    return applyLongContextMultipliers(entry.shortContextStandard);
  }
  return entry.shortContextStandard;
}