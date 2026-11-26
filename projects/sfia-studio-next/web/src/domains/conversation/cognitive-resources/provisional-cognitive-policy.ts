/**
 * ML5 provisional cognitive policy v0.1 — DEV only (Morris 2026-11-26).
 * Reversible via SFIA_COG_PROVISIONAL_POLICY=legacy_sol|off without structural rewrites.
 * Does not promote couples to permanent operational catalog status.
 */

import type { CognitiveEffort, CognitiveModelId } from "./resource-catalog";

export const PROVISIONAL_COGNITIVE_POLICY_VERSION =
  "ml5-cog-provisional-policy-v0.1-20261126" as const;

export type ProvisionalPolicyId = "v0.1" | "legacy_sol";

/** Historical Sol medium — rollback / comparison reference. */
export const HISTORICAL_SOL_DEFAULT_RESOURCE = {
  modelId: "gpt-6.2-sol",
  effort: "medium",
} as const satisfies {
  modelId: CognitiveModelId;
  effort: CognitiveEffort;
};

/** Morris-validated provisional initial resource (DEV). */
export const PROVISIONAL_V01_DEFAULT_RESOURCE = {
  modelId: "gpt-6.1-terra",
  effort: "medium",
} as const satisfies {
  modelId: CognitiveModelId;
  effort: CognitiveEffort;
};

/**
 * Couples admitted under provisional v0.1 (operational DEV).
 * Candidates (Luna Low/High, Terra High, …) remain refused until Morris qualifies them.
 */
const PROVISIONAL_V01_ADMITTED: ReadonlySet<string> = new Set([
  "gpt-6.1-terra:medium",
  "gpt-6-luna:medium",
  "gpt-6.2-sol:low",
  "gpt-6.2-sol:medium",
  "gpt-6.2-sol:high",
]);

const PROVISIONAL_V01_CANDIDATES: ReadonlySet<string> = new Set([
  "gpt-6-luna:low",
  "gpt-6-luna:high",
  "gpt-6.1-terra:high",
]);

function coupleKey(modelId: string, effort: string): string {
  return `${modelId}:${effort}`;
}

/** Active provisional policy id — default v0.1; legacy_sol restores Sol-only historical default. */
export function activeProvisionalPolicyId(
  env: NodeJS.ProcessEnv = process.env,
): ProvisionalPolicyId {
  const raw = (env.SFIA_COG_PROVISIONAL_POLICY ?? "v0.1").trim().toLowerCase();
  if (
    raw === "off" ||
    raw === "0" ||
    raw === "legacy" ||
    raw === "legacy_sol" ||
    raw === "sol"
  ) {
    return "legacy_sol";
  }
  return "v0.1";
}

export function resolveOperationalDefaultResource(
  env: NodeJS.ProcessEnv = process.env,
): { modelId: CognitiveModelId; effort: CognitiveEffort } {
  if (activeProvisionalPolicyId(env) === "legacy_sol") {
    return { ...HISTORICAL_SOL_DEFAULT_RESOURCE };
  }
  return { ...PROVISIONAL_V01_DEFAULT_RESOURCE };
}

export function isProvisionalV01AdmittedCouple(
  modelId: CognitiveModelId,
  effort: CognitiveEffort,
): boolean {
  return PROVISIONAL_V01_ADMITTED.has(coupleKey(modelId, effort));
}

export function isProvisionalV01CandidateCouple(
  modelId: CognitiveModelId,
  effort: CognitiveEffort,
): boolean {
  return PROVISIONAL_V01_CANDIDATES.has(coupleKey(modelId, effort));
}

export function provisionalPolicyReasonCodes(
  env: NodeJS.ProcessEnv = process.env,
): string[] {
  const id = activeProvisionalPolicyId(env);
  if (id === "legacy_sol") {
    return ["COG_POLICY_LEGACY_SOL", "COG_POLICY_VERSION_legacy_sol"];
  }
  return [
    `COG_POLICY_PROVISIONAL_${PROVISIONAL_COGNITIVE_POLICY_VERSION}`,
    "COG_POLICY_VERSION_v0.1",
  ];
}
