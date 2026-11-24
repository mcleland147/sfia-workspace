/**
 * D3 cognitive policy — proportional qualification without a second LLM classifier.
 * TEST_BOUNDARY = stress-only (explicit tests).
 * OPERATIONAL_PROVISIONAL = explicit DEV or RECETTE (Morris GO 2026-11-24) — not production-validated.
 * OPERATIONAL_VALIDATED = Morris-approved only (not yet available).
 */

import { StudioError } from "@/lib/http-errors";

export type CognitiveProfile = "simple" | "analyse" | "investigation";
export type PolicyProfileType =
  | "TEST_BOUNDARY"
  | "OPERATIONAL_PROVISIONAL"
  | "OPERATIONAL_VALIDATED";
export type ReasoningEffort = "low" | "medium" | "high";

/** Traces RECETTE operational-provisional allowance without rewriting historical meta. */
export const COGNITIVE_POLICY_VERSION =
  "ml5-cog-policy-v3-recette-operational-provisional" as const;
/** Study model — C23: all active Nora refs use GPT-6.2 Sol (Morris). */
export const NORA_STUDY_MODEL = "gpt-6.2-sol" as const;

/** Default effort for a profile when no semantic effortHint is provided. */
export function defaultEffortForProfile(
  profile: CognitiveProfile,
): ReasoningEffort {
  if (profile === "simple") return "low";
  if (profile === "investigation") return "high";
  return "medium";
}

export type BudgetLimits = {
  maxProviderCalls: number;
  maxD4ToolCalls: number;
  /**
   * Separate Git READ call budget (D9 tools).
   * Must not share the D4/history call counter — otherwise a nominal PR consult
   * (sources + PR + files + commit + compare) exhausts TEST_BOUNDARY analyse (4)
   * before reconciliation completes. Chars remain shared via maxD4CharsReturned.
   */
  maxGitToolCalls: number;
  wallClockMs: number;
  maxD4CharsReturned: number;
};

/**
 * Artificial stress ceilings for qualification only.
 * MUST NOT become implicit operational defaults.
 *
 * TEST_BOUNDARY remains available for explicit stress tests.
 * Nominal RECETTE uses OPERATIONAL_PROVISIONAL (explicit env), not these ceilings.
 * Git call ceilings below are sized for a nominal multi-tool Git READ (UAT-01..07).
 */
export const TEST_BOUNDARY_BUDGETS: Record<CognitiveProfile, BudgetLimits> = {
  // Lot E/D5: short messages must still be able to call authorized read tools.
  simple: {
    maxProviderCalls: 4,
    maxD4ToolCalls: 2,
    maxGitToolCalls: 6,
    wallClockMs: 60_000,
    maxD4CharsReturned: 16_000,
  },
  analyse: {
    maxProviderCalls: 8,
    maxD4ToolCalls: 4,
    maxGitToolCalls: 12,
    wallClockMs: 120_000,
    maxD4CharsReturned: 32_000,
  },
  investigation: {
    maxProviderCalls: 12,
    maxD4ToolCalls: 8,
    maxGitToolCalls: 16,
    wallClockMs: 180_000,
    maxD4CharsReturned: 64_000,
  },
};

/**
 * Provisional OPERATIONAL ceilings — finite and reconfigurable.
 * NOT VALIDATED as production policy.
 * Explicit activation via SFIA_COG_PROFILE_TYPE on DEV or RECETTE only.
 * Never silent; never STABLE/PROD/UNKNOWN.
 */
export const OPERATIONAL_BUDGETS_PROVISIONAL: Record<CognitiveProfile, BudgetLimits> = {
  simple: {
    maxProviderCalls: 2,
    maxD4ToolCalls: 2,
    maxGitToolCalls: 6,
    wallClockMs: 600_000,
    maxD4CharsReturned: 100_000,
  },
  analyse: {
    maxProviderCalls: 20,
    maxD4ToolCalls: 20,
    maxGitToolCalls: 24,
    wallClockMs: 600_000,
    maxD4CharsReturned: 500_000,
  },
  investigation: {
    maxProviderCalls: 40,
    maxD4ToolCalls: 40,
    maxGitToolCalls: 40,
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
    | "search_conversation_history"
    | "read_conversation_messages"
    | "list_project_git_sources"
    | "read_git_file"
    | "list_git_refs"
    | "list_git_directory"
    | "read_git_pull_request"
    | "list_git_pull_requests"
    | "list_git_pull_request_files"
    | "read_git_commit"
    | "compare_git_refs"
    | "read_git_commit_status"
    | "list_realization_evidence"
    | "read_realization_handoff_report"
    | "read_attempt_workspace_file"
    | "read_evidence_capture_meta"
    | "public_web_search"
    | "public_web_open_page"
  >;
  budgets: BudgetLimits;
  reasonCodes: string[];
};

function studioLane(): string {
  return (process.env.STUDIO_LANE ?? "UNKNOWN").trim().toUpperCase() || "UNKNOWN";
}

/** STABLE/PROD/unknown never receive operational budgets. */
export function isOperationalForbiddenLane(lane: string): boolean {
  return (
    lane === "STABLE" ||
    lane === "PROD" ||
    lane === "PRODUCTION" ||
    lane === "UNKNOWN" ||
    !lane
  );
}

/** Morris GO 2026-11-24 — OPERATIONAL_PROVISIONAL explicit on DEV and RECETTE only. */
export function isOperationalProvisionalAllowedLane(lane: string): boolean {
  return lane === "DEV" || lane === "RECETTE";
}

/**
 * Fail-closed profile resolution.
 * - absent → DEV defaults to TEST_BOUNDARY; other lanes → refuse
 * - OPERATIONAL_PROVISIONAL → explicit DEV or RECETTE only
 * - OPERATIONAL_VALIDATED → not yet approved → refuse
 * - legacy "OPERATIONAL" → alias of PROVISIONAL (same lane rules)
 * - STABLE / PROD / UNKNOWN → refuse operational regimes
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
    if (
      override === "OPERATIONAL_PROVISIONAL" &&
      !isOperationalProvisionalAllowedLane(studioLane())
    ) {
      throw new StudioError(
        "INVALID_REQUEST",
        "OPERATIONAL_PROVISIONAL interdit hors DEV/RECETTE",
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
    if (!isOperationalProvisionalAllowedLane(lane)) {
      throw new StudioError(
        "INVALID_REQUEST",
        "OPERATIONAL_PROVISIONAL / OPERATIONAL interdit hors STUDIO_LANE=DEV|RECETTE",
        { httpStatus: 400 },
      );
    }
    if (isOperationalForbiddenLane(lane)) {
      throw new StudioError(
        "INVALID_REQUEST",
        "OPERATIONAL_PROVISIONAL interdit sur lane STABLE/PROD/UNKNOWN",
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
 * C14 / Morris D2: message length must NOT decide cognitive profile, investigation
 * need, or tool selection. Budgets default to `analyse` / medium; Nora escalates
 * depth semantically via tools and structured qualification — never via length.
 * `userText` is retained for API stability / future semantic override wiring only.
 */
export function qualifyCognitiveProfile(_userText: string): {
  profile: CognitiveProfile;
  effort: ReasoningEffort;
  reasonCodes: string[];
} {
  return {
    profile: "analyse",
    effort: "medium",
    reasonCodes: ["BUDGET_DEFAULT_ANALYSE_NO_LENGTH_ROUTING"],
  };
}

/**
 * Single mutable budget bag for one Nora generation.
 * D4+history share remainingCalls; Git uses remainingGitCalls; all share remainingChars.
 * Pass the SAME object reference to every tool family — never clone numeric snapshots.
 */
export function createSharedToolBudget(budgets: BudgetLimits): {
  remainingCalls: number;
  remainingChars: number;
  remainingGitCalls: number;
} {
  return {
    remainingCalls: budgets.maxD4ToolCalls,
    remainingChars: budgets.maxD4CharsReturned,
    remainingGitCalls: budgets.maxGitToolCalls,
  };
}

export function buildCognitivePolicy(
  userText: string,
  overrideType?: PolicyProfileType,
  opts?: {
    /** C18 — semantic profile from consolidated investigation / qualification. */
    profileHint?: CognitiveProfile;
    effortHint?: ReasoningEffort;
  },
): CognitivePolicy {
  const profileType = resolveProfileType(overrideType);
  const q = qualifyCognitiveProfile(userText);
  const profile = opts?.profileHint ?? q.profile;
  // Profile (nature of work) ≠ effort (mobilized depth). When only a profile
  // hint is set, derive a proportional effort default — never leave
  // investigation stuck on medium by accident.
  const effort =
    opts?.effortHint ??
    (opts?.profileHint ? defaultEffortForProfile(profile) : q.effort);
  const budgets =
    profileType === "TEST_BOUNDARY"
      ? TEST_BOUNDARY_BUDGETS[profile]
      : OPERATIONAL_BUDGETS_PROVISIONAL[profile];

  // SEM corrective: short utterances still get authorized read tools.
  // Length budgets control cost (maxTurns/chars), not métier intent detection.
  const toolAllowlist: CognitivePolicy["toolAllowlist"] = [
    "search_project_resources",
    "read_project_document_revision",
    "search_conversation_history",
    "read_conversation_messages",
    "list_project_git_sources",
    "read_git_file",
    "list_git_refs",
    "list_git_directory",
    "read_git_pull_request",
    "list_git_pull_requests",
    "list_git_pull_request_files",
    "read_git_commit",
    "compare_git_refs",
    "read_git_commit_status",
    "list_realization_evidence",
    "read_realization_handoff_report",
    "read_attempt_workspace_file",
    "read_evidence_capture_meta",
    "public_web_search",
    "public_web_open_page",
  ];

  const reasonCodes = [
    ...q.reasonCodes,
    `PROFILE_TYPE_${profileType}`,
    `LANE_${studioLane()}`,
  ];
  if (opts?.profileHint) reasonCodes.push(`PROFILE_HINT_${opts.profileHint}`);
  if (opts?.effortHint) reasonCodes.push(`EFFORT_HINT_${opts.effortHint}`);

  return {
    policyVersion: COGNITIVE_POLICY_VERSION,
    profileType,
    profile,
    modelRequested: NORA_STUDY_MODEL,
    effortRequested: effort,
    toolAllowlist,
    budgets,
    reasonCodes,
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
