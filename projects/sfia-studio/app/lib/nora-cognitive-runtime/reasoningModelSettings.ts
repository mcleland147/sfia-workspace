/**
 * MW2-S01 — build Runner modelSettings preserving GPT-5.6 baseline text.verbosity.
 * reasoning.context and reasoning.mode intentionally omitted (EVALUATE/DEFER).
 *
 * MW6 PRE-REAL: optional providerData.max_tool_calls (Responses built-in tool cap).
 * R-PRE-REAL-07: this final materialization boundary validates safe-integer domain
 * itself — a guarded resolver does not make an unguarded callee safe.
 * R-PRE-REAL-07A: inherited base.providerData.max_tool_calls is also validated
 * when present — ANY max_tool_calls leaving this helper must be safe.
 *
 * GPT-5.6 remains the MW6 reference model. GPT-6 migration is deferred after MW6.
 */
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
import { requireSafeNonNegativeInteger } from "./campaignBudget";

export type NoraRunnerModelSettings = {
  reasoning: { effort: OpenAiReasoningEffort };
  text: { verbosity: "low" };
  /**
   * Passed through OpenAIResponsesModel into Responses create body.
   * Used for provider-enforced max_tool_calls (hosted web_search cap).
   */
  providerData?: {
    max_tool_calls?: number;
    [key: string]: unknown;
  };
};

export function buildRunnerModelSettingsForEffort(
  effort: OpenAiReasoningEffort,
): NoraRunnerModelSettings {
  return {
    reasoning: { effort },
    text: { verbosity: "low" },
  };
}

/**
 * Merge campaign hosted cap into Runner modelSettings without dropping reasoning/text.
 *
 * Final boundary (R-PRE-REAL-07 / 07A):
 * - If base already carries providerData.max_tool_calls, it MUST be a
 *   non-negative Number.isSafeInteger (no floor/clamp/coerce).
 * - If maxToolCalls is non-null, it MUST already be a safe non-negative integer
 *   and overwrites the inherited cap.
 * - Other providerData keys are preserved unchanged.
 *
 * Module-local / internal — not part of the public Nora runtime barrel.
 */
export function withMaxToolCallsProviderData(
  base: NoraRunnerModelSettings | undefined,
  maxToolCalls: number | null,
): NoraRunnerModelSettings | undefined {
  const inherited = base?.providerData?.max_tool_calls;
  if (inherited !== undefined) {
    // Inherited path: same final-boundary semantics as a newly injected cap.
    requireSafeNonNegativeInteger(
      "inherited.providerData.max_tool_calls",
      inherited,
    );
  }

  if (maxToolCalls == null) {
    // Valid inherited cap preserved; absent inherited → return base unchanged.
    return base;
  }

  const safe = requireSafeNonNegativeInteger(
    "providerData.max_tool_calls",
    maxToolCalls,
  );
  const next: NoraRunnerModelSettings = base ?? {
    reasoning: { effort: "none" },
    text: { verbosity: "low" },
  };
  return {
    ...next,
    providerData: {
      ...(next.providerData ?? {}),
      max_tool_calls: safe,
    },
  };
}
