/**
 * Eval/server Stage A cell ConversationProvider factory.
 * Reuses OpenAIConversationProvider + MeteredConversationProvider for REAL/eval.
 * INTERNAL / EVAL ONLY — never a client DTO / never a Server Action seam.
 */
import {
  OpenAIConversationProvider,
  type ConversationProvider,
  type OpenAiReasoningEffort,
} from "@/lib/platform/ai";
import {
  claimModelInvocation,
  type NoraCampaignBudget,
} from "@/lib/nora-cognitive-runtime";
import { validateRuntimeReasoningCapability } from "@/lib/nora-cognitive-runtime/reasoningCapability";
import {
  MeteredConversationProvider,
  type MeteredConversationProviderOptions,
} from "./meteredProvider";
import type { BudgetTracker, CapabilityManifest } from "./capabilityBudget";

export type EvalCellProviderFactory = (input: {
  modelId: string;
  reasoningEffort: OpenAiReasoningEffort;
}) => ConversationProvider;

/**
 * Production-shaped factory: OpenAIConversationProvider(apiKey, model, effort).
 * ZERO REAL tests must NOT call this with a live key — inject a Fake factory instead.
 */
export function createOpenAiEvalCellProviderFactory(
  apiKey: string,
): EvalCellProviderFactory {
  return ({ modelId, reasoningEffort }) => {
    validateRuntimeReasoningCapability(modelId, reasoningEffort);
    return new OpenAIConversationProvider(apiKey, modelId, reasoningEffort);
  };
}

/**
 * Compose: inner(model, effort) → MeteredConversationProvider(shared BudgetTracker)
 * → optional canonical claim AFTER USD preflight / BEFORE dispatch.
 */
export function createMeteredEvalCellProviderFactory(input: {
  innerFactory: EvalCellProviderFactory;
  manifest: CapabilityManifest;
  budget: BudgetTracker;
  campaignBudget?: NoraCampaignBudget;
  assumedPreflight?: { inputTokens: number; outputTokens: number };
}): EvalCellProviderFactory {
  return ({ modelId, reasoningEffort }) => {
    validateRuntimeReasoningCapability(modelId, reasoningEffort);
    const inner = input.innerFactory({ modelId, reasoningEffort });
    const options: MeteredConversationProviderOptions | undefined =
      input.campaignBudget
        ? {
            beforeAuthorizedDispatch: () => {
              const ok = claimModelInvocation(input.campaignBudget!);
              if (!ok) {
                throw new Error(
                  input.campaignBudget!.denialReason ??
                    "Campaign model invocation cap reached — provider not dispatched.",
                );
              }
            },
          }
        : undefined;
    return new MeteredConversationProvider(
      inner,
      input.manifest,
      input.budget,
      modelId,
      input.assumedPreflight ?? { inputTokens: 4000, outputTokens: 1200 },
      options,
    );
  };
}

/**
 * Resolve cell provider for Stage A F2 constitutive structured calls.
 *
 * - No eval control → historical provider passthrough.
 * - Eval control present → EvalCellProviderFactory REQUIRED (no arbitrary provider fallback).
 */
export function resolveEvalCellConversationProvider(input: {
  evalModelReasoningControl?: {
    modelId: string;
    reasoningEffort: OpenAiReasoningEffort;
  };
  evalCellProviderFactory?: EvalCellProviderFactory;
  /** Used only when eval control is absent (production / non-eval injection). */
  provider?: ConversationProvider;
}): ConversationProvider | undefined {
  const control = input.evalModelReasoningControl;
  if (!control) return input.provider;
  validateRuntimeReasoningCapability(control.modelId, control.reasoningEffort);
  if (!input.evalCellProviderFactory) {
    return undefined;
  }
  return input.evalCellProviderFactory({
    modelId: control.modelId,
    reasoningEffort: control.reasoningEffort,
  });
}
