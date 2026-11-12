/**
 * D3 cognitive policy — proportional qualification without a second LLM classifier.
 * TEST_BOUNDARY = stress-only. OPERATIONAL_PROVISIONAL = DEV explicit only (not validated).
 * OPERATIONAL_VALIDATED = Morris-approved only (not yet available).
 */

import { StudioError } from "@/lib/http-errors";

export type CognitiveProfile = "simple" | "analyse" | "investigation";
export type PolicyProfileType =
  | "TEST_BOUNDARY"
  | "OPERATIONAL_PROVISIONAL"
  | "OPERATIONAL_VALIDATED";
export type ReasoningEffort = "low" | "medium" | "high";

export const COGNITIVE_POLICY_VERSION = "ml2-cog-policy-v2-corrective" as const;
/** Study model — LIVE entitlement not proven in this cycle. */
export const NORA_STUDY_MODEL = "gpt-6.1-sol" as const;

export type BudgetLimits = {
  maxProviderCalls: number;
  maxD4ToolCalls: number;
  wallClockMs: number;
  maxD4CharsReturned: number;
};

/**
 * Artificial stress ceilings for qualification only.
 * MUST NOT become implicit operational defaults.
 */
export const TEST_BOUNDARY_BUDGETS: Record<CognitiveProfile, BudgetLimits> = {
  // Lot E/D5: short messages must still be able to call authorized read tools.
  simple: {
    maxProviderCalls: 4,
    maxD4ToolCalls: 2,
    wallClockMs: 60_000,
    maxD4CharsReturned: 16_000,
  },
  analyse: {
    maxProviderCalls: 6,
    maxD4ToolCalls: 4,
    wallClockMs: 120_000,
    maxD4CharsReturned: 32_000,
  },
  investigation: {
    maxProviderCalls: 10,
    maxD4ToolCalls: 8,
    wallClockMs: 180_000,
    maxD4CharsReturned: 64_000,
  },
};

/**
 * Provisional OPERATIONAL ceilings — finite and reconfigurable.
 * NOT VALIDATED. Must be explicitly activated in DEV (SFIA_COG_PROFILE_TYPE).
 * Must NEVER activate silently in RECETTE/PROD/protected lanes.
 */
export const OPERATIONAL_BUDGETS_PROVISIONAL: Record<CognitiveProfile, BudgetLimits> = {
  simple: {
    maxProviderCalls: 2,
    maxD4ToolCalls: 2,
    wallClockMs: 600_000,
    maxD4CharsReturned: 100_000,
  },
  analyse: {
    maxProviderCalls: 20,
    maxD4ToolCalls: 20,
    wallClockMs: 600_000,
    maxD4CharsReturned: 500_000,
  },
  investigation: {
    maxProviderCalls: 40,
    maxD4ToolCalls: 40,
    wallClockMs: 900_000,
    maxD4CharsReturned: 2_000_000,
  },
};

export type CognitivePolicy = {
  policyVersion: typeof COGNITIVE_POLICY_VERSION;
  profileType: PolicyProfileType;
  profile: CognitiveProfile;
  modelRequested: typeof NORA_STUDY_MODEL;
  effortRequested: ReasoningEffort;
  toolAllowlist: Array<
    | "search_project_resources"
    | "read_project_document_revision"
    | "list_project_git_sources"
    | "read_git_file"
    | "list_git_refs"
  >;
  budgets: BudgetLimits;
  reasonCodes: string[];
};

function studioLane(): string {
  return (process.env.STUDIO_LANE ?? "UNKNOWN").trim().toUpperCase() || "UNKNOWN";
}

function isProtectedLane(lane: string): boolean {
  return lane === "RECETTE" || lane === "STABLE" || lane === "PROD" || lane === "PRODUCTION";
}

/**
 * Fail-closed profile resolution.
 * - absent → DEV defaults to TEST_BOUNDARY; protected/unknown → refuse
 * - OPERATIONAL_PROVISIONAL → DEV only
 * - OPERATIONAL_VALIDATED → not yet approved → refuse
 * - legacy "OPERATIONAL" → alias of PROVISIONAL in DEV only
 */
export function resolveProfileType(override?: PolicyProfileType): PolicyProfileType {
  if (override) {
    if (override === "OPERATIONAL_VALIDATED") {
      throw new StudioError(
        "INVALID_REQUEST",
        "OPERATIONAL_VALIDATED non disponible — calibration Morris requise",
        { httpStatus: 400 },
      );
    }
    if (override === "OPERATIONAL_PROVISIONAL" && isProtectedLane(studioLane())) {
      throw new StudioError(
        "INVALID_REQUEST",
        "OPERATIONAL_PROVISIONAL interdit hors DEV",
        { httpStatus: 400 },
      );
    }
    return override;
  }

  const raw = (process.env.SFIA_COG_PROFILE_TYPE ?? "").trim().toUpperCase();
  const lane = studioLane();

  if (!raw) {
    if (lane === "DEV") return "TEST_BOUNDARY";
    throw new StudioError(
      "INVALID_REQUEST",
      "SFIA_COG_PROFILE_TYPE requis hors DEV (fail-closed)",
      { httpStatus: 400 },
    );
  }

  if (raw === "TEST_BOUNDARY") return "TEST_BOUNDARY";

  if (raw === "OPERATIONAL_VALIDATED") {
    throw new StudioError(
      "INVALID_REQUEST",
      "OPERATIONAL_VALIDATED non adopté — STOP calibration",
      { httpStatus: 400 },
    );
  }

  if (raw === "OPERATIONAL_PROVISIONAL" || raw === "OPERATIONAL") {
    if (lane !== "DEV") {
      throw new StudioError(
        "INVALID_REQUEST",
        "OPERATIONAL_PROVISIONAL / OPERATIONAL interdit hors STUDIO_LANE=DEV",
        { httpStatus: 400 },
      );
    }
    return "OPERATIONAL_PROVISIONAL";
  }

  throw new StudioError(
    "INVALID_REQUEST",
    `SFIA_COG_PROFILE_TYPE invalide: ${raw}`,
    { httpStatus: 400 },
  );
}

/**
 * SEM / Lot D5: length may raise cost ceilings, never strip authorized tools.
 * Short complex requests keep at least `analyse` tool budgets.
 */
export function qualifyCognitiveProfile(userText: string): {
  profile: CognitiveProfile;
  effort: ReasoningEffort;
  reasonCodes: string[];
} {
  const len = userText.trim().length;
  if (len > 600) {
    return {
      profile: "investigation",
      effort: "high",
      reasonCodes: ["BUDGET_LEN_LONG"],
    };
  }
  // Default analyse — never demote short utterances to tool-less simple.
  return {
    profile: "analyse",
    effort: "medium",
    reasonCodes: len < 80 ? ["BUDGET_LEN_SHORT_KEPT_ANALYSE"] : ["BUDGET_LEN_DEFAULT"],
  };
}

export function buildCognitivePolicy(
  userText: string,
  overrideType?: PolicyProfileType,
): CognitivePolicy {
  const profileType = resolveProfileType(overrideType);
  const q = qualifyCognitiveProfile(userText);
  const budgets =
    profileType === "TEST_BOUNDARY"
      ? TEST_BOUNDARY_BUDGETS[q.profile]
      : OPERATIONAL_BUDGETS_PROVISIONAL[q.profile];

  // SEM corrective: short utterances still get authorized read tools.
  // Length budgets control cost (maxTurns/chars), not métier intent detection.
  const toolAllowlist: CognitivePolicy["toolAllowlist"] = [
    "search_project_resources",
    "read_project_document_revision",
    "list_project_git_sources",
    "read_git_file",
    "list_git_refs",
  ];

  return {
    policyVersion: COGNITIVE_POLICY_VERSION,
    profileType,
    profile: q.profile,
    modelRequested: NORA_STUDY_MODEL,
    effortRequested: q.effort,
    toolAllowlist,
    budgets,
    reasonCodes: [...q.reasonCodes, `PROFILE_TYPE_${profileType}`, `LANE_${studioLane()}`],
  };
}

/**
 * maxTurns for Runner — model↔tool loop budget from policy.
 * NOT identical to provider HTTP call count; no silent hard cap of 12.
 * Gap: SDK maxTurns ≠ maxProviderCalls — documented honestly in reason/meta.
 */
export function maxTurnsForPolicy(policy: CognitivePolicy): number {
  // Always allow at least one tool loop for authorized read capabilities.
  return Math.max(2, policy.budgets.maxProviderCalls);
}
