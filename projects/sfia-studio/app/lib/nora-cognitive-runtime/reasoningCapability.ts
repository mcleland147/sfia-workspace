/**
 * MW2 runtime model capability validation — fail-closed, no campaign allowlist.
 * Reuses dated manifest model lookup; NOT MW0 campaignEffectiveCapabilitySet.
 */
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
import { TechnicalError } from "@/lib/platform/ai/errors";
import {
  buildMw0CapabilityManifest,
  modelCapabilitySet,
} from "@/lib/nora-eval/capabilityBudget";

export function validateRuntimeReasoningCapability(
  modelId: string,
  reasoningEffort: OpenAiReasoningEffort,
): void {
  const manifest = buildMw0CapabilityManifest(new Date().toISOString());
  const supported = modelCapabilitySet(manifest, modelId);
  if (!supported) {
    throw new TechnicalError(
      "CONFIG",
      `Modèle inconnu pour validation capability runtime : ${modelId}`,
    );
  }
  if (reasoningEffort === "minimal") {
    throw new TechnicalError(
      "PROVIDER",
      "minimal n'est pas supporté pour la famille GPT-5.6 courante",
    );
  }
  if (!supported.includes(reasoningEffort)) {
    throw new TechnicalError(
      "PROVIDER",
      `Effort ${reasoningEffort} non supporté pour le modèle ${modelId}`,
    );
  }
}
