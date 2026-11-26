/**
 * ML5 provisional cognitive policy — DEV only (Morris 2026-11-26).
 *
 * v0.2 (explicit): Terra medium default; Luna low/medium experimental;
 * Sol L/M/H historical; Terra high / Luna high candidates.
 *
 * Activation is NEVER implicit: absent or unknown SFIA_COG_PROVISIONAL_POLICY
 * resolves to legacy_sol (safe historical default). Provisional couples require
 * explicit `v0.2` (or deprecated `v0.1`) AND STUDIO_LANE=DEV.
 *
 * Rollback: `legacy_sol` | `off` | `0` — no structural rewrite.
 */

import type { CognitiveEffort, CognitiveModelId } from "./resource-catalog";

export const PROVISIONAL_COGNITIVE_POLICY_VERSION =
  "ml5-cog-provisional-policy-v0.2-20261126" as const;

export type ProvisionalPolicyId = "v0.2" | "v0.1" | "legacy_sol";

/** Historical Sol medium — rollback / comparison reference. */
export const HISTORICAL_SOL_DEFAULT_RESOURCE = {
  modelId: "gpt-6.2-sol",
  effort: "medium",
} as const satisfies {
  modelId: CognitiveModelId;
  effort: CognitiveEffort;
};

/** Morris-validated provisional initial resource (DEV). */
export const PROVISIONAL_V02_DEFAULT_RESOURCE = {
  modelId: "gpt-6.1-terra",
  effort: "medium",
} as const satisfies {
  modelId: CognitiveModelId;
  effort: CognitiveEffort;
};

/** @deprecated alias — same default as v0.2 */
export const PROVISIONAL_V01_DEFAULT_RESOURCE = PROVISIONAL_V02_DEFAULT_RESOURCE;

/**
 * Couples admitted under provisional v0.2 (operational DEV, explicit).
 * Luna Low: experimental admission (Morris 26/11 finalisation).
 */
const PROVISIONAL_V02_ADMITTED: ReadonlySet<string> = new Set([
  "gpt-6.1-terra:medium",
  "gpt-6-luna:low",
  "gpt-6-luna:medium",
  "gpt-6.2-sol:low",
  "gpt-6.2-sol:medium",
  "gpt-6.2-sol:high",
]);

/** v0.1 admitted set (no Luna low) — kept for explicit `v0.1` rollback of admission surface. */
const PROVISIONAL_V01_ADMITTED: ReadonlySet<string> = new Set([
  "gpt-6.1-terra:medium",
  "gpt-6-luna:medium",
  "gpt-6.2-sol:low",
  "gpt-6.2-sol:medium",
  "gpt-6.2-sol:high",
]);

const PROVISIONAL_CANDIDATES: ReadonlySet<string> = new Set([
  "gpt-6-luna:high",
  "gpt-6.1-terra:high",
]);

function coupleKey(modelId: string, effort: string): string {
  return `${modelId}:${effort}`;
}

function studioLane(env: NodeJS.ProcessEnv): string {
  return (env.STUDIO_LANE ?? "").trim().toUpperCase();
}

export type ProvisionalPolicyResolution = {
  id: ProvisionalPolicyId;
  /** True when provisional experimental couples may be admitted. */
  provisionalActive: boolean;
  reasonCodes: string[];
};

/**
 * Resolve active policy — fail closed to legacy_sol unless explicitly activated on DEV.
 */
export function resolveProvisionalPolicy(
  env: NodeJS.ProcessEnv = process.env,
): ProvisionalPolicyResolution {
  const raw = (env.SFIA_COG_PROVISIONAL_POLICY ?? "").trim().toLowerCase();
  const lane = studioLane(env);
  const codes: string[] = [];

  if (!raw) {
    return {
      id: "legacy_sol",
      provisionalActive: false,
      reasonCodes: [
        "COG_POLICY_ABSENT_FALLBACK_LEGACY_SOL",
        "COG_POLICY_VERSION_legacy_sol",
      ],
    };
  }

  if (
    raw === "off" ||
    raw === "0" ||
    raw === "legacy" ||
    raw === "legacy_sol" ||
    raw === "sol"
  ) {
    return {
      id: "legacy_sol",
      provisionalActive: false,
      reasonCodes: ["COG_POLICY_LEGACY_SOL", "COG_POLICY_VERSION_legacy_sol"],
    };
  }

  if (raw === "v0.2" || raw === "0.2" || raw === "v2") {
    if (lane !== "DEV") {
      return {
        id: "legacy_sol",
        provisionalActive: false,
        reasonCodes: [
          "COG_POLICY_V02_REFUSED_NON_DEV_LANE",
          `LANE_${lane || "UNKNOWN"}`,
          "COG_POLICY_VERSION_legacy_sol",
        ],
      };
    }
    return {
      id: "v0.2",
      provisionalActive: true,
      reasonCodes: [
        `COG_POLICY_PROVISIONAL_${PROVISIONAL_COGNITIVE_POLICY_VERSION}`,
        "COG_POLICY_VERSION_v0.2",
        "LANE_DEV",
      ],
    };
  }

  if (raw === "v0.1" || raw === "0.1" || raw === "v1") {
    if (lane !== "DEV") {
      return {
        id: "legacy_sol",
        provisionalActive: false,
        reasonCodes: [
          "COG_POLICY_V01_REFUSED_NON_DEV_LANE",
          `LANE_${lane || "UNKNOWN"}`,
          "COG_POLICY_VERSION_legacy_sol",
        ],
      };
    }
    return {
      id: "v0.1",
      provisionalActive: true,
      reasonCodes: [
        "COG_POLICY_PROVISIONAL_ml5-cog-provisional-policy-v0.1-20261126",
        "COG_POLICY_VERSION_v0.1",
        "COG_POLICY_V01_DEPRECATED_PREFER_V02",
        "LANE_DEV",
      ],
    };
  }

  // Unknown value — never invent provisional admission.
  return {
    id: "legacy_sol",
    provisionalActive: false,
    reasonCodes: [
      "COG_POLICY_UNKNOWN_FALLBACK_LEGACY_SOL",
      `COG_POLICY_RAW_${raw.slice(0, 32)}`,
      "COG_POLICY_VERSION_legacy_sol",
    ],
  };
}

/** Active provisional policy id — never defaults to v0.2 when env absent. */
export function activeProvisionalPolicyId(
  env: NodeJS.ProcessEnv = process.env,
): ProvisionalPolicyId {
  return resolveProvisionalPolicy(env).id;
}

export function isProvisionalPolicyActive(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return resolveProvisionalPolicy(env).provisionalActive;
}

export function resolveOperationalDefaultResource(
  env: NodeJS.ProcessEnv = process.env,
): { modelId: CognitiveModelId; effort: CognitiveEffort } {
  const resolved = resolveProvisionalPolicy(env);
  if (!resolved.provisionalActive) {
    return { ...HISTORICAL_SOL_DEFAULT_RESOURCE };
  }
  return { ...PROVISIONAL_V02_DEFAULT_RESOURCE };
}

export function isProvisionalAdmittedCouple(
  modelId: CognitiveModelId,
  effort: CognitiveEffort,
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  const resolved = resolveProvisionalPolicy(env);
  if (!resolved.provisionalActive) return false;
  if (resolved.id === "v0.1") {
    return PROVISIONAL_V01_ADMITTED.has(coupleKey(modelId, effort));
  }
  return PROVISIONAL_V02_ADMITTED.has(coupleKey(modelId, effort));
}

/** @deprecated use isProvisionalAdmittedCouple */
export function isProvisionalV01AdmittedCouple(
  modelId: CognitiveModelId,
  effort: CognitiveEffort,
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return isProvisionalAdmittedCouple(modelId, effort, env);
}

export function isProvisionalCandidateCouple(
  modelId: CognitiveModelId,
  effort: CognitiveEffort,
): boolean {
  return PROVISIONAL_CANDIDATES.has(coupleKey(modelId, effort));
}

/** @deprecated alias */
export function isProvisionalV01CandidateCouple(
  modelId: CognitiveModelId,
  effort: CognitiveEffort,
): boolean {
  return isProvisionalCandidateCouple(modelId, effort);
}

export function provisionalPolicyReasonCodes(
  env: NodeJS.ProcessEnv = process.env,
): string[] {
  return [...resolveProvisionalPolicy(env).reasonCodes];
}
