/**
 * Runtime model capability validation — fail-closed, no campaign allowlist.
 * Default: CURRENT OpenAI provider snapshot (incl. Astra). MW0 historical untouched.
 * Callers on the P5 nominal Product path pass the P5 TARGET cohort manifest.
 */
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
import { TechnicalError } from "@/lib/platform/ai/errors";
import {
  buildCurrentOpenAiCapabilityManifest,
  buildP5TargetCapabilityManifest,
  modelCapabilitySet,
  type CapabilityManifest,
} from "@/lib/nora-eval/capabilityBudget";

function resolveCapabilitySet(
  modelId: string,
  manifest?: CapabilityManifest,
): OpenAiReasoningEffort[] | null {
  if (manifest) {
    return modelCapabilitySet(manifest, modelId);
  }
  const now = new Date().toISOString();
  // Prefer CURRENT provider universe; fall back to P5 TARGET cohort for
  // nominal Product / eval pins that already use GPT-6 Luna/Sol/Astra.
  return (
    modelCapabilitySet(buildCurrentOpenAiCapabilityManifest(now), modelId) ??
    modelCapabilitySet(buildP5TargetCapabilityManifest(now), modelId)
  );
}

export function validateRuntimeReasoningCapability(
  modelId: string,
  reasoningEffort: OpenAiReasoningEffort,
  manifest?: CapabilityManifest,
): void {
  const supported = resolveCapabilitySet(modelId, manifest);
  if (!supported) {
    throw new TechnicalError(
      "CONFIG",
      `Modèle inconnu pour validation capability runtime : ${modelId}`,
    );
  }
  if (reasoningEffort === "minimal") {
    throw new TechnicalError(
      "PROVIDER",
      "minimal n'est pas supporté pour les modèles OpenAI courants du snapshot provider",
    );
  }
  if (!supported.includes(reasoningEffort)) {
    throw new TechnicalError(
      "PROVIDER",
      `Effort ${reasoningEffort} non supporté pour le modèle ${modelId}`,
    );
  }
}
