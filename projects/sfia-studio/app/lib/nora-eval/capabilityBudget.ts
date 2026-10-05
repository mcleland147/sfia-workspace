/**
 * Provider capability + pricing manifests + budget enforcement (CORR-MW0-02/budget).
 * SDK/CODE ≠ MODEL ≠ CAMPAIGN EFFECTIVE.
 */

import {
  OPENAI_REASONING_EFFORT_VALUES,
  type OpenAiReasoningEffort,
} from "@/lib/platform/ai";
import type { CampaignBudgetPolicy } from "./types";
import { MW0_BUDGET_POLICY } from "./types";

export type ModelPricing = {
  modelId: string;
  alias?: string;
  inputUsdPerMTok: number;
  outputUsdPerMTok: number;
  cachedInputUsdPerMTok?: number;
  reasoningEfforts: OpenAiReasoningEffort[];
};

export type CapabilityManifest = {
  retrievedAt: string;
  provider: "openai";
  sourceName: string;
  sourceNote: string;
  sdkCodeCapabilitySet: readonly OpenAiReasoningEffort[];
  models: ModelPricing[];
  campaignAllowlist: {
    modelIds: string[];
    reasoningEfforts: OpenAiReasoningEffort[];
  };
  caveats: string[];
};

/** Official OpenAI API Models documentation snapshot verified 2026-08-29 (revalidated Delivery). */
export function buildMw0CapabilityManifest(retrievedAtIso: string): CapabilityManifest {
  return {
    retrievedAt: retrievedAtIso,
    provider: "openai",
    sourceName: "Official OpenAI API Models documentation",
    sourceNote:
      "Provider snapshot for campaign evidence only — not durable SFIA doctrine. Revalidate each campaign.",
    sdkCodeCapabilitySet: OPENAI_REASONING_EFFORT_VALUES,
    models: [
      {
        modelId: "gpt-5.6-sol",
        alias: "gpt-5.6",
        inputUsdPerMTok: 4,
        outputUsdPerMTok: 20,
        reasoningEfforts: ["none", "low", "medium", "high", "xhigh", "max"],
      },
      {
        modelId: "gpt-5.6-terra",
        inputUsdPerMTok: 2,
        outputUsdPerMTok: 12,
        reasoningEfforts: ["none", "low", "medium", "high", "xhigh", "max"],
      },
      {
        modelId: "gpt-5.6-luna",
        inputUsdPerMTok: 0.2,
        outputUsdPerMTok: 1.2,
        reasoningEfforts: ["none", "low", "medium", "high", "xhigh", "max"],
      },
    ],
    campaignAllowlist: {
      // Prefer cheapest sufficient for MW0 screening.
      modelIds: ["gpt-5.6-luna", "gpt-5.6-terra"],
      reasoningEfforts: ["none", "low", "medium"],
    },
    caveats: [
      "SDK accepts 'minimal' but current GPT-5.6 Sol/Terra/Luna model docs do not list 'minimal'.",
      "Do not silently coerce reasoning efforts.",
      "Provider rejection = CONFIG/PROVIDER_CAPABILITY evidence, not cognitive FAIL.",
      "MW0 campaignAllowlist is historical screening only — not the Global Model × Reasoning campaign matrix.",
    ],
  };
}

/**
 * Current OpenAI provider capability snapshot for runtime + Global MR (R22).
 * Includes GPT-6 Astra. Does NOT mutate {@link buildMw0CapabilityManifest}.
 * Snapshot ≠ permanent doctrine; account availability ≠ documented capability.
 */
export function buildCurrentOpenAiCapabilityManifest(
  retrievedAtIso: string,
): CapabilityManifest {
  const historical = buildMw0CapabilityManifest(retrievedAtIso);
  return {
    ...historical,
    sourceName: "Official OpenAI API Models documentation (current provider snapshot)",
    sourceNote:
      "CURRENT OpenAI provider capability snapshot (GPT-5.6 Luna/Terra/Sol + GPT-6 Astra) — campaign Evidence only; ≠ permanent SFIA doctrine; ≠ production routing; Astra account availability NOT PROVEN until authorized REAL boundary.",
    models: [
      ...historical.models,
      {
        modelId: "gpt-6-astra",
        inputUsdPerMTok: 10,
        cachedInputUsdPerMTok: 1,
        outputUsdPerMTok: 50,
        // Official docs: low/medium/high/xhigh/max — NO none.
        reasoningEfforts: ["low", "medium", "high", "xhigh", "max"],
      },
    ],
    // Provider snapshot is not a campaign allowlist — keep MW0 allowlist shape unused here.
    campaignAllowlist: {
      modelIds: [
        "gpt-5.6-luna",
        "gpt-5.6-terra",
        "gpt-5.6-sol",
        "gpt-6-astra",
      ],
      reasoningEfforts: ["none", "low", "medium", "high", "xhigh", "max"],
    },
    caveats: [
      ...historical.caveats,
      "CURRENT provider snapshot includes GPT-6 Astra (no none / no minimal).",
      "Documented capability ≠ account/API entitlement.",
      "Do not silently coerce Astra none→low.",
    ],
  };
}

/**
 * P5 nominal TARGET routing cohort capability snapshot (dated external input).
 * Cohort EXACT: gpt-6-luna · gpt-6.1-sol · gpt-6-astra.
 * Does NOT mutate {@link buildMw0CapabilityManifest} (GPT-5.6 historical FREEZE).
 * Does NOT replace {@link buildCurrentOpenAiCapabilityManifest} provider universe.
 * Snapshot ≠ permanent SFIA doctrine; account entitlement ≠ documented capability.
 *
 * Effort sets (external input revalidated for P5-S01 Delivery / Correction Pass 01, 2026-10-05):
 * - gpt-6-luna: none · low · medium · high · xhigh · max
 * - gpt-6.1-sol: low · medium · high · xhigh · max (none unsupported)
 * - gpt-6-astra: low · medium · high · xhigh · max (none unsupported)
 *
 * Pricing (Correction Pass 01 — Official OpenAI STANDARD SHORT CONTEXT ≤272K):
 * - Luna 0.10 / 0.50 · Sol 2.00 / 10.00 · Astra 10.00 / 50.00 (USD per 1M tokens)
 * Cached/cache-write rates exist at provider but are not stored unless consumed by estimateCostUsd.
 * Long-context / Batch / Flex / Fast / Ultrafast / regional tiers differ.
 * Replaceable FinOps ordering hint only — NOT doctrine · NOT observed REAL cost.
 */
export function buildP5TargetCapabilityManifest(
  retrievedAtIso: string,
): CapabilityManifest {
  return {
    retrievedAt: retrievedAtIso,
    provider: "openai",
    sourceName:
      "Official OpenAI API Models + Pricing — P5 TARGET cohort (GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra) — Standard short-context — revalidated 2026-10-05",
    sourceNote:
      "P5-S01 Correction Pass 01 TARGET routing cohort — Standard processing tier · short-context pricing band (≤272K input) · ≠ MW0 historical · ≠ full provider universe · ≠ permanent doctrine · ≠ entitlement proof · ZERO REAL in S01. Revalidate before REAL gates. Long-context and other tiers use different rates.",
    sdkCodeCapabilitySet: OPENAI_REASONING_EFFORT_VALUES,
    models: [
      {
        modelId: "gpt-6-luna",
        inputUsdPerMTok: 0.1,
        outputUsdPerMTok: 0.5,
        reasoningEfforts: ["none", "low", "medium", "high", "xhigh", "max"],
      },
      {
        modelId: "gpt-6.1-sol",
        inputUsdPerMTok: 2.0,
        outputUsdPerMTok: 10.0,
        reasoningEfforts: ["low", "medium", "high", "xhigh", "max"],
      },
      {
        modelId: "gpt-6-astra",
        inputUsdPerMTok: 10.0,
        outputUsdPerMTok: 50.0,
        reasoningEfforts: ["low", "medium", "high", "xhigh", "max"],
      },
    ],
    campaignAllowlist: {
      modelIds: ["gpt-6-luna", "gpt-6.1-sol", "gpt-6-astra"],
      reasoningEfforts: ["none", "low", "medium", "high", "xhigh", "max"],
    },
    caveats: [
      "P5 TARGET cohort excludes GPT-5.6 from nominal Product routing.",
      "Historical GPT-5.6 manifests/evidence remain IMMUTABLE (buildMw0CapabilityManifest).",
      "Sol/Astra do not support reasoning.effort=none — do not silently coerce.",
      "minimal remains non-admissible for target cohort.",
      "Documented capability ≠ account/API entitlement — ZERO REAL in P5-S01.",
      "Pricing = Official OpenAI Standard short-context (≤272K) dated 2026-10-05 — FinOps ordering hint only.",
      "Long-context rates differ; Batch/Flex/Fast/Ultrafast/regional tiers differ — not stored here.",
      "Cached input / cache write rates exist at provider; schema stores only fields consumed by estimateCostUsd.",
      "NOT observed REAL cost · NOT production savings claim · revalidate before REAL.",
    ],
  };
}

/**
 * Distinct campaign capability policy for the Global Model × Reasoning Campaign.
 * EXIT: campaign evaluation contract only — ≠ production model routing / ≠ multi-model router.
 * Does not mutate or replace {@link buildMw0CapabilityManifest} historical semantics.
 * Option C: GPT-5.6 primary cohort + bounded GPT-6 Astra challenger capability.
 */
export function buildGlobalModelReasoningCapabilityManifest(
  retrievedAtIso: string,
): CapabilityManifest {
  const current = buildCurrentOpenAiCapabilityManifest(retrievedAtIso);
  return {
    ...current,
    sourceNote:
      "Global Model × Reasoning campaign candidate (GPT-5.6 Luna/Terra/Sol + GPT-6 Astra capability) — Stage A Option C challenger. ≠ production routing. Revalidate each campaign. EXIT → global campaign contract only.",
    campaignAllowlist: {
      modelIds: [
        "gpt-5.6-luna",
        "gpt-5.6-terra",
        "gpt-5.6-sol",
        "gpt-6-astra",
      ],
      reasoningEfforts: ["none", "low", "medium", "high", "xhigh", "max"],
    },
    caveats: [
      ...current.caveats,
      "Global campaign allowlist ≠ MW0 historical allowlist.",
      "minimal remains non-admissible for GPT-5.6 / Astra.",
      "Astra Stage A challenger uses medium only (matrix); capability set is broader.",
      "Campaign candidate ≠ adopted production routing / ≠ Astra-only selection.",
    ],
  };
}

export function modelCapabilitySet(
  manifest: CapabilityManifest,
  modelId: string,
): OpenAiReasoningEffort[] | null {
  const model = manifest.models.find(
    (m) => m.modelId === modelId || m.alias === modelId,
  );
  return model ? [...model.reasoningEfforts] : null;
}

export function campaignEffectiveCapabilitySet(
  manifest: CapabilityManifest,
  modelId: string,
): {
  ok: boolean;
  efforts: OpenAiReasoningEffort[];
  reason?: string;
} {
  const modelSet = modelCapabilitySet(manifest, modelId);
  if (!modelSet) {
    return { ok: false, efforts: [], reason: `Unknown model ${modelId}` };
  }
  if (!manifest.campaignAllowlist.modelIds.includes(modelId)) {
    return {
      ok: false,
      efforts: [],
      reason: `Model ${modelId} not in campaign allowlist`,
    };
  }
  const sdk = new Set(manifest.sdkCodeCapabilitySet);
  const allow = new Set(manifest.campaignAllowlist.reasoningEfforts);
  const efforts = modelSet.filter((e) => sdk.has(e) && allow.has(e));
  return { ok: efforts.length > 0, efforts };
}

export function estimateCostUsd(input: {
  manifest: CapabilityManifest;
  modelId: string;
  inputTokens: number;
  outputTokens: number;
  cachedInputTokens?: number;
}): number {
  const model = input.manifest.models.find(
    (m) => m.modelId === input.modelId || m.alias === input.modelId,
  );
  if (!model) {
    // Conservative unknown-model estimate: treat as Sol pricing
    const inCost = (input.inputTokens / 1_000_000) * 4;
    const outCost = (input.outputTokens / 1_000_000) * 20;
    return inCost + outCost;
  }
  const cached = input.cachedInputTokens ?? 0;
  const billableInput = Math.max(0, input.inputTokens - cached);
  const cachedRate = model.cachedInputUsdPerMTok ?? model.inputUsdPerMTok;
  return (
    (billableInput / 1_000_000) * model.inputUsdPerMTok +
    (cached / 1_000_000) * cachedRate +
    (input.outputTokens / 1_000_000) * model.outputUsdPerMTok
  );
}

/** Conservative pre-call estimate for a structured intent / short completion. */
/**
 * Official OpenAI API Pricing — Web search (all models) tool-call fee.
 * Source: developers.openai.com/api/docs/pricing (revalidated 2026-09-05).
 * $10.00 / 1k calls = $0.01 / call. Search-content tokens billed separately at model rates.
 * ≠ invoice; ≠ permanent doctrine.
 */
export const OPENAI_WEB_SEARCH_TOOL_CALL_USD = 0.01;

export function conservativePreCallEstimateUsd(input: {
  manifest: CapabilityManifest;
  modelId: string;
  assumedInputTokens?: number;
  assumedOutputTokens?: number;
}): number {
  return estimateCostUsd({
    manifest: input.manifest,
    modelId: input.modelId,
    inputTokens: input.assumedInputTokens ?? 4000,
    outputTokens: input.assumedOutputTokens ?? 1200,
  });
}

export class BudgetTracker {
  readonly policy: CampaignBudgetPolicy;
  cumulativeUsd = 0;
  softStopTriggered = false;
  hardStopTriggered = false;
  readonly ledger: Array<{
    at: string;
    estimatedUsd: number;
    cumulativeUsd: number;
    note: string;
  }> = [];

  constructor(
    policy: CampaignBudgetPolicy = MW0_BUDGET_POLICY,
    carryInUsd = 0,
  ) {
    this.policy = policy;
    if (carryInUsd > 0) {
      this.recordSpend(carryInUsd, "historical-carry-in");
    }
  }

  canStartCall(conservativeEstimateUsd: number): {
    allowed: boolean;
    reason?: string;
  } {
    if (this.hardStopTriggered || this.cumulativeUsd >= this.policy.hardCapUsd) {
      this.hardStopTriggered = true;
      return { allowed: false, reason: "HARD_CAP_REACHED" };
    }
    if (this.cumulativeUsd + conservativeEstimateUsd > this.policy.hardCapUsd) {
      return { allowed: false, reason: "PRECALL_WOULD_EXCEED_HARD_CAP" };
    }
    if (this.cumulativeUsd >= this.policy.softStopUsd) {
      this.softStopTriggered = true;
      return {
        allowed: false,
        reason: "SOFT_STOP_NO_NEW_NONESSENTIAL_CELLS",
      };
    }
    return { allowed: true };
  }

  /** Essential already-engaged evidence may continue between soft and hard. */
  canContinueEssential(conservativeEstimateUsd: number): {
    allowed: boolean;
    reason?: string;
  } {
    if (this.hardStopTriggered || this.cumulativeUsd >= this.policy.hardCapUsd) {
      this.hardStopTriggered = true;
      return { allowed: false, reason: "HARD_CAP_REACHED" };
    }
    if (this.cumulativeUsd + conservativeEstimateUsd > this.policy.hardCapUsd) {
      return { allowed: false, reason: "PRECALL_WOULD_EXCEED_HARD_CAP" };
    }
    if (this.cumulativeUsd >= this.policy.softStopUsd) {
      this.softStopTriggered = true;
    }
    return { allowed: true };
  }

  recordSpend(estimatedUsd: number, note: string): void {
    this.cumulativeUsd += estimatedUsd;
    if (this.cumulativeUsd >= this.policy.softStopUsd) this.softStopTriggered = true;
    if (this.cumulativeUsd >= this.policy.hardCapUsd) this.hardStopTriggered = true;
    this.ledger.push({
      at: new Date().toISOString(),
      estimatedUsd,
      cumulativeUsd: this.cumulativeUsd,
      note,
    });
  }
}

export function validateCellAgainstManifest(input: {
  manifest: CapabilityManifest;
  modelId: string;
  reasoningEffort: OpenAiReasoningEffort;
}): { ok: boolean; failureClass?: "CONFIG" | "PROVIDER_CAPABILITY"; detail: string } {
  const effective = campaignEffectiveCapabilitySet(input.manifest, input.modelId);
  if (!effective.ok) {
    return {
      ok: false,
      failureClass: "PROVIDER_CAPABILITY",
      detail: effective.reason ?? "effective set empty",
    };
  }
  if (!effective.efforts.includes(input.reasoningEffort)) {
    return {
      ok: false,
      failureClass: "PROVIDER_CAPABILITY",
      detail: `Effort ${input.reasoningEffort} not in campaign effective set for ${input.modelId}`,
    };
  }
  // Explicit: minimal must not sneak through for GPT-5.6 family
  if (input.reasoningEffort === "minimal") {
    return {
      ok: false,
      failureClass: "PROVIDER_CAPABILITY",
      detail: "minimal is SDK-accepted but not in current GPT-5.6 model capability set",
    };
  }
  return { ok: true, detail: "cell allowed" };
}
