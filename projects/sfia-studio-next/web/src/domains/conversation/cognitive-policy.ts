/**
 * D3 cognitive policy — proportional qualification without a second LLM classifier.
 * TEST_BOUNDARY = stress-only (explicit tests).
 * OPERATIONAL_PROVISIONAL = explicit DEV or RECETTE (Morris GO 2026-11-24) — not production-validated.
 * OPERATIONAL_VALIDATED = Morris-approved only (not yet available).
 */

import { StudioError } from "@/lib/http-errors";
import {
  admitModelEffort,
  getResourceCatalogEntry,
  type CognitiveEffort,
  type CognitiveModelId,
  NORA_STUDY_MODEL_HISTORICAL,
  resolveOperationalDefaultResource,
  provisionalPolicyReasonCodes,
  activeProvisionalPolicyId,
} from "./cognitive-resources";

const EFFORT_RANK: Record<CognitiveEffort, number> = {
  none: 0,
  low: 1,
  medium: 2,
  high: 3,
  xhigh: 4,
  max: 5,
};

function effortDowngradeCandidates(
  modelId: CognitiveModelId,
  fromEffort: CognitiveEffort,
): CognitiveEffort[] {
  const entry = getResourceCatalogEntry(modelId);
  // Downgrade across catalogued efforts regardless of catalog admissionStatus —
  // provisional policy (not catalog status) decides which lowered couple admits.
  if (!entry) return [];
  const fromRank = EFFORT_RANK[fromEffort] ?? -1;
  const candidates: CognitiveEffort[] = [];
  for (const effort of entry.documentedEfforts) {
    const rank = EFFORT_RANK[effort];
    if (rank < fromRank) candidates.push(effort);
  }
  candidates.sort((a, b) => EFFORT_RANK[b]! - EFFORT_RANK[a]!);
  return candidates;
}

export type CognitiveProfile = "simple" | "analyse" | "investigation";
export type PolicyProfileType =
  | "TEST_BOUNDARY"
  | "OPERATIONAL_PROVISIONAL"
  | "OPERATIONAL_VALIDATED";
/** Operational band retained for profiles; extended efforts go through admission. */
export type ReasoningEffort = "low" | "medium" | "high";

/** Traces RECETTE operational-provisional allowance without rewriting historical meta. */
export const COGNITIVE_POLICY_VERSION =
  "ml5-cog-policy-v5-provisional-v0.2-20261126" as const;
/**
 * Historical study reference (Sol). Runtime default may be Terra under provisional v0.1.
 */
export const NORA_STUDY_MODEL = NORA_STUDY_MODEL_HISTORICAL;

function admissionModeFromEnv(): "operational" | "calibration" {
  const raw = (process.env.SFIA_COGNITIVE_ADMISSION_MODE ?? "operational")
    .trim()
    .toLowerCase();
  return raw === "calibration" ? "calibration" : "operational";
}

/**
 * Admit a model×effort couple for the next segment. Fail-closed: unknown or
 * uncalibrated couples fall back with explicit reason codes. On the operational
 * model, refused efforts step down (e.g. xhigh → high) before the active default.
 */
export function resolveAdmittedResource(input?: {
  modelId?: string | null;
  effort?: string | null;
}): {
  modelId: CognitiveModelId;
  effort: CognitiveEffort;
  reasonCodes: string[];
} {
  const mode = admissionModeFromEnv();
  const operationalDefault = resolveOperationalDefaultResource();
  const requestedModelId = ((input?.modelId ?? "").trim() ||
    operationalDefault.modelId) as CognitiveModelId;
  const requestedEffort = ((input?.effort ?? "").trim() ||
    operationalDefault.effort) as CognitiveEffort;
  const policyCodes = provisionalPolicyReasonCodes();
  const admission = admitModelEffort(requestedModelId, requestedEffort, mode);
  if (admission.admitted) {
    return {
      modelId: admission.modelId,
      effort: admission.effort,
      reasonCodes: [
        `RESOURCE_ADMITTED_${mode.toUpperCase()}`,
        `MODEL_${admission.modelId}`,
        `EFFORT_${admission.effort}`,
        ...policyCodes,
      ],
    };
  }

  // Same-model effort downgrade before switching models (covers provisional
  // candidates e.g. Terra high → Terra medium).
  for (const lowered of effortDowngradeCandidates(
    requestedModelId,
    requestedEffort,
  )) {
    const retry = admitModelEffort(requestedModelId, lowered, mode);
    if (retry.admitted) {
      return {
        modelId: retry.modelId,
        effort: retry.effort,
        reasonCodes: [
          `RESOURCE_REFUSED_${admission.reasonCode}`,
          "RESOURCE_FALLBACK_EFFORT_DOWNGRADE",
          `REQUESTED_EFFORT_${requestedEffort}`,
          `MODEL_${retry.modelId}`,
          `EFFORT_${retry.effort}`,
          ...policyCodes,
        ],
      };
    }
  }

  // No automatic Sol same-effort switch: technical compatibility ≠ cognitive fit.
  // Continuity path holds the admitted couple after refusal; first-segment path
  // falls through to the explicit operational default (Terra under v0.2 / Sol legacy).
  const fallback = admitModelEffort(
    operationalDefault.modelId,
    operationalDefault.effort,
    "operational",
  );
  if (!fallback.admitted) {
    throw new StudioError(
      "INVALID_REQUEST",
      `Catalogue cognitif: défaut opérationnel ${operationalDefault.modelId}@${operationalDefault.effort} non admis`,
      { httpStatus: 500 },
    );
  }
  const sameAsRequested =
    fallback.modelId === requestedModelId &&
    fallback.effort === requestedEffort;
  return {
    modelId: fallback.modelId,
    effort: fallback.effort,
    reasonCodes: [
      `RESOURCE_REFUSED_${admission.reasonCode}`,
      sameAsRequested
        ? "RESOURCE_FALLBACK_OPERATIONAL_DEFAULT"
        : "RESOURCE_FALLBACK_OPERATIONAL_DEFAULT_NOT_EQUIVALENT",
      `REQUESTED_MODEL_${requestedModelId}`,
      `REQUESTED_EFFORT_${requestedEffort}`,
      `MODEL_${fallback.modelId}`,
      `EFFORT_${fallback.effort}`,
      `PROVISIONAL_POLICY_${activeProvisionalPolicyId()}`,
      ...policyCodes,
    ],
  };
}

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
  // Adaptive continuation — shorter per-segment provider loops so the conductor
  // can checkpoint, compact acquis, and open a new segment before a single SDK
  // run saturates the context. Global envelope is 1M reeval / 2M admin max.
  analyse: {
    maxProviderCalls: 8,
    maxD4ToolCalls: 10,
    maxGitToolCalls: 12,
    wallClockMs: 600_000,
    maxD4CharsReturned: 64_000,
  },
  investigation: {
    maxProviderCalls: 8,
    maxD4ToolCalls: 12,
    maxGitToolCalls: 14,
    wallClockMs: 1_800_000,
    maxD4CharsReturned: 48_000,
  },
};

export type CognitivePolicy = {
  policyVersion: typeof COGNITIVE_POLICY_VERSION;
  profileType: PolicyProfileType;
  profile: CognitiveProfile;
  modelRequested: CognitiveModelId;
  /**
   * Provider effort admitted for the API call — full CognitiveEffort band
   * (none|low|medium|high|xhigh|max). Must NOT be collapsed to budget bands.
   */
  effortRequested: CognitiveEffort;
  /**
   * Technical segment sizing band (low|medium|high) derived from admitted effort.
   * Used only for historical budget tables — never sent as the provider effort.
   */
  effortBudgetBand: ReasoningEffort;
  toolAllowlist: Array<
    | "search_project_resources"
    | "read_project_document_revision"
    | "compare_document_proposal"
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
    | "consult_cognitive_guidance"
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
    effortHint?: ReasoningEffort | CognitiveEffort;
    /** Optional next-segment resource proposal (admitted server-side). */
    modelHint?: CognitiveModelId | string | null;
  },
): CognitivePolicy {
  const profileType = resolveProfileType(overrideType);
  const q = qualifyCognitiveProfile(userText);
  const profile = opts?.profileHint ?? q.profile;
  // Profile (nature of work) ≠ effort (mobilized depth). When only a profile
  // hint is set, derive a proportional effort default — never leave
  // investigation stuck on medium by accident.
  const effortHint =
    opts?.effortHint ??
    (opts?.profileHint ? defaultEffortForProfile(profile) : q.effort);
  const admitted = resolveAdmittedResource({
    modelId: opts?.modelHint ?? resolveOperationalDefaultResource().modelId,
    effort: effortHint,
  });
  // Profile budgets still keyed on low|medium|high; map extended efforts for
  // sizing only — never rewrite the provider effort sent to the API.
  const effortBudgetBand: ReasoningEffort =
    admitted.effort === "low" || admitted.effort === "none"
      ? "low"
      : admitted.effort === "medium"
        ? "medium"
        : "high";
  const budgets =
    profileType === "TEST_BOUNDARY"
      ? TEST_BOUNDARY_BUDGETS[profile]
      : OPERATIONAL_BUDGETS_PROVISIONAL[profile];

  // SEM corrective: short utterances still get authorized read tools.
  // Length budgets control cost (maxTurns/chars), not métier intent detection.
  const toolAllowlist: CognitivePolicy["toolAllowlist"] = [
    "search_project_resources",
    "read_project_document_revision",
    "compare_document_proposal",
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
    "consult_cognitive_guidance",
  ];

  const reasonCodes = [
    ...q.reasonCodes,
    `PROFILE_TYPE_${profileType}`,
    `LANE_${studioLane()}`,
    ...admitted.reasonCodes,
    `EFFORT_BUDGET_BAND_${effortBudgetBand}`,
  ];
  if (opts?.profileHint) reasonCodes.push(`PROFILE_HINT_${opts.profileHint}`);
  if (opts?.effortHint) reasonCodes.push(`EFFORT_HINT_${opts.effortHint}`);
  if (opts?.modelHint) reasonCodes.push(`MODEL_HINT_${opts.modelHint}`);

  return {
    policyVersion: COGNITIVE_POLICY_VERSION,
    profileType,
    profile,
    modelRequested: admitted.modelId,
    // Full admitted provider effort (none/xhigh/max preserved when admitted).
    effortRequested: admitted.effort,
    effortBudgetBand,
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

export type ContinuityResourceHeld = {
  modelId?: string | null;
  effort?: string | null;
};

export type ContinuityResourceProposal = {
  modelId?: string | null;
  effort?: string | null;
};

/** Pilote-facing suspend copy — need/constraint/consequence; no model admin duty. */
export function buildResourceContinuitySuspendMessage(
  refusedModel: string,
  refusedEffort: string,
): string {
  return (
    `Je ne peux pas poursuivre avec la ressource proposée (${refusedModel}@${refusedEffort}) : ` +
    `elle n'est pas admise dans la politique active, et aucune ressource déjà admise n'est disponible ` +
    `pour maintenir le travail sans substitution silencieuse. ` +
    `Besoin restant : poursuivre avec une capacité compatible avec la politique en vigueur. ` +
    `Conséquence : le travail est suspendu jusqu'à réévaluation de la stratégie ou arbitrage ` +
    `métier/politique si une exception est nécessaire — sans obligation d'administrer les modèles.`
  );
}

/**
 * S3 — resolve next-segment policy from structured proposal + held couple.
 * - Explicit proposal → admit; on refusal prefer holding the current couple
 *   (never treat Sol medium as the sole answer to every refusal).
 * - No proposal → hold last admitted model/effort when present.
 * - First segment without hold → operational/calibration default via buildCognitivePolicy.
 */
export function resolveContinuityCognitivePolicy(input: {
  seed: string;
  overrideType?: PolicyProfileType;
  profileHint?: CognitiveProfile;
  /** Forced effort (e.g. restitution / investigation segment rules). */
  effortHint?: ReasoningEffort | CognitiveEffort;
  proposal?: ContinuityResourceProposal | null;
  held?: ContinuityResourceHeld | null;
}): CognitivePolicy {
  const mode = admissionModeFromEnv();
  const profile =
    input.profileHint ?? qualifyCognitiveProfile(input.seed).profile;
  const proposedModel = (input.proposal?.modelId ?? "").trim() || null;
  const proposedEffort = (input.proposal?.effort ?? "").trim() || null;
  const heldModel = (input.held?.modelId ?? "").trim() || null;
  const heldEffort = (input.held?.effort ?? "").trim() || null;
  const hasExplicitProposal = Boolean(proposedModel || proposedEffort);

  const requestedModel =
    proposedModel ||
    heldModel ||
    resolveOperationalDefaultResource().modelId;
  const requestedEffort =
    input.effortHint ||
    proposedEffort ||
    heldEffort ||
    defaultEffortForProfile(profile);

  const direct = admitModelEffort(
    requestedModel as CognitiveModelId,
    requestedEffort as CognitiveEffort,
    mode,
  );

  if (direct.admitted) {
    const policy = buildCognitivePolicy(input.seed, input.overrideType, {
      profileHint: input.profileHint,
      modelHint: direct.modelId,
      effortHint: direct.effort,
    });
    const decisions: string[] = [];
    if (!hasExplicitProposal) {
      decisions.push(heldModel ? "RESOURCE_CONTINUITY_HOLD" : "RESOURCE_CONTINUITY_DEFAULT");
    } else {
      decisions.push("RESOURCE_CONTINUITY_ADMITTED");
      if (proposedModel && heldModel && proposedModel !== heldModel) {
        decisions.push("RESOURCE_CONTINUITY_MODEL_CHANGE");
      }
      if (
        proposedEffort &&
        heldEffort &&
        proposedEffort !== heldEffort &&
        (!proposedModel || proposedModel === heldModel || proposedModel === direct.modelId)
      ) {
        decisions.push("RESOURCE_CONTINUITY_EFFORT_CHANGE");
      }
      if (heldModel && !proposedModel && proposedEffort) {
        decisions.push("RESOURCE_CONTINUITY_EFFORT_CHANGE");
      }
      if (!heldModel && proposedModel) {
        decisions.push("RESOURCE_CONTINUITY_MODEL_CHANGE");
      }
    }
    return {
      ...policy,
      reasonCodes: [...policy.reasonCodes, ...decisions],
    };
  }

  // Refused proposal/request — prefer holding the already-admitted couple.
  if (heldModel && heldEffort) {
    const hold = admitModelEffort(
      heldModel as CognitiveModelId,
      heldEffort as CognitiveEffort,
      mode,
    );
    if (hold.admitted) {
      const policy = buildCognitivePolicy(input.seed, input.overrideType, {
        profileHint: input.profileHint,
        modelHint: hold.modelId,
        effortHint: hold.effort,
      });
      return {
        ...policy,
        reasonCodes: [
          ...policy.reasonCodes,
          `RESOURCE_REFUSED_${direct.reasonCode}`,
          "RESOURCE_CONTINUITY_HOLD_AFTER_REFUSAL",
          `REQUESTED_MODEL_${requestedModel}`,
          `REQUESTED_EFFORT_${requestedEffort}`,
        ],
      };
    }
  }

  // No compatible hold — do not invent cognitive equivalence with another model.
  // Explicit proposals that cannot be admitted must not silently run on an unrelated
  // operational default as if cognitively equivalent. Mark SUSPEND so the conductor
  // can return the refusal to the Pilote / re-propose with technical reason.
  const policy = buildCognitivePolicy(input.seed, input.overrideType, {
    profileHint: input.profileHint,
  });
  if (hasExplicitProposal) {
    return {
      ...policy,
      reasonCodes: [
        ...policy.reasonCodes,
        `RESOURCE_REFUSED_${direct.reasonCode}`,
        "RESOURCE_CONTINUITY_PROPOSAL_UNSATISFIED_NO_HOLD",
        "RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION",
        `REQUESTED_MODEL_${requestedModel}`,
        `REQUESTED_EFFORT_${requestedEffort}`,
      ],
    };
  }
  return {
    ...policy,
    reasonCodes: [
      ...policy.reasonCodes,
      `RESOURCE_REFUSED_${direct.reasonCode}`,
      "RESOURCE_CONTINUITY_PROPOSAL_UNSATISFIED_NO_HOLD",
      "RESOURCE_CONTINUITY_FALLBACK_OPERATIONAL_DEFAULT",
      `REQUESTED_MODEL_${requestedModel}`,
      `REQUESTED_EFFORT_${requestedEffort}`,
    ],
  };
}
