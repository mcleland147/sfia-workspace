/**
 * MW5 product-authority fact projection (CORR-MW5-01 / CORR-MW5-01B).
 *
 * Read-only. Facts come from existing Truth C / LPS + HumanDecision history —
 * never from user-message markers or orphan text tags as product authority.
 * No new store / table / migration / HumanDecision schema.
 */

export type Mw5ClaimProjection = {
  objective: string | null;
  scope: string | null;
  recommendedProfile: string | null;
  requestedOperation: string | null;
};

export type Mw5TruthCProjection = {
  objective: string;
  context: string;
  scope: string;
  /** LPS-linked consumed decision ids (authoritative consumption). */
  decisionIds: readonly string[];
};

export type Mw5ConsumedDecisionProjection = {
  decisionId: string;
  status: string;
  subject: string;
  scope?: string;
  rationale?: string;
  linkedToCurrentLps: boolean;
  executionObjective?: string;
  executionScope?: string;
  requestedOperation?: string;
  hasDecisionBasis: boolean;
};

export type Mw5ProductAuthorityFacts = {
  truthCEstablishedForClaim: boolean;
  consumedHumanDecisionWithoutNewContradiction: boolean;
  truthCContextAvailable: boolean;
  consumedDecisionIds: string[];
  reasonCodes: string[];
};

export type ChallengeResponseAssessment =
  | "sufficient"
  | "insufficient"
  | "unknown"
  | null;

/** INTERNAL challenge context passed to the same analyzeIntent call (CORR-MW5-02B). */
export type Mw5ChallengeContextForAnalysis = {
  challengePresent: true;
  challenges: readonly string[];
  challengedPremise: string;
  structuralChallengeCount: number;
};

export type Mw5ChallengeContextInput =
  | Mw5ChallengeContextForAnalysis
  | { challengePresent: false }
  | null
  | undefined;

const CONSUMED_HD_STATUSES = new Set(["accepted", "amended"]);
const MIN_STRUCTURED_FIELD_LEN = 12;
const MIN_STRONG_CONTAINMENT_LEN = 24;

function normalize(text: string | null | undefined): string {
  return (text ?? "").trim().toLowerCase().replace(/\s+/g, " ");
}

function substantive(text: string | null | undefined): string | null {
  const n = normalize(text);
  return n.length >= MIN_STRUCTURED_FIELD_LEN ? n : null;
}

/**
 * LPS.scope may carry Studio UI metadata JSON (visible-slice envelope), which is
 * not a structural Truth C / DecisionBasis scope qualifier for MW5 claim identity.
 * Treat that payload as qualifier-unavailable rather than an incompatible scope.
 */
function structuralScopeText(text: string | null | undefined): string | null {
  const raw = (text ?? "").trim();
  if (!raw) return null;
  if (
    raw.startsWith("{") &&
    /sfia-visible-slice-project-ui/i.test(raw)
  ) {
    return null;
  }
  return substantive(raw);
}

/**
 * Exact normalized equality, or strong containment (shorter ≥ 24 chars).
 * Never uses orphan ESTABLISHED_CLAIM tags or single-token fuzzy overlap.
 */
function structuredFieldPairMatch(
  a: string | null,
  b: string | null,
): boolean {
  if (!a || !b) return false;
  if (a === b) return true;
  const shorter = a.length <= b.length ? a : b;
  const longer = a.length <= b.length ? b : a;
  return (
    shorter.length >= MIN_STRONG_CONTAINMENT_LEN && longer.includes(shorter)
  );
}

/**
 * Optional structured qualifier compatibility (CORR-MW5-PR-02).
 * Inputs are already substantive-normalized or null.
 * Missing either side → no contradiction invented.
 * Both present → must structuredFieldPairMatch.
 * Never produces positive identity by itself.
 */
function optionalStructuredQualifierCompatible(
  left: string | null,
  right: string | null,
): boolean {
  if (!left || !right) return true;
  return structuredFieldPairMatch(left, right);
}

/**
 * When both sides expose substantive structural scopes, they must be compatible.
 * A missing/optional qualifier (incl. UI metadata-as-scope) does not invent
 * incompatibility.
 */
function substantiveScopesCompatible(
  left: string | null | undefined,
  right: string | null | undefined,
): boolean {
  return optionalStructuredQualifierCompatible(
    structuralScopeText(left),
    structuralScopeText(right),
  );
}

/**
 * Fail-closed Truth C vs claim identity (CORR-MW5-PR-01).
 *
 * Contract:
 * - objective is the primary structural anchor (required on both sides);
 * - scope is a qualifier — never sufficient alone;
 * - explicit incompatible substantive scopes block even when objective matches;
 * - insufficient structured evidence → false (prefer reopen challenge).
 */
export function truthCMatchesClaimStructured(
  truthC: Mw5TruthCProjection,
  claim: Mw5ClaimProjection,
): boolean {
  const claimObjective = substantive(claim.objective);
  const lpsObjective = substantive(truthC.objective);
  if (!claimObjective || !lpsObjective) return false;
  if (!structuredFieldPairMatch(claimObjective, lpsObjective)) return false;
  if (!substantiveScopesCompatible(claim.scope, truthC.scope)) return false;
  return true;
}

/**
 * Fail-closed DecisionBasis relevance vs claim (CORR-MW5-PR-01 / PR-02).
 *
 * Contract:
 * - objective is the primary structural anchor (required on both sides);
 * - requestedOperation is a qualifier — never sufficient alone;
 * - scope is a qualifier — never sufficient alone;
 * - explicit incompatible substantive scopes OR requestedOperations block
 *   even when objective matches;
 * - missing optional qualifier does not invent contradiction;
 * - insufficient structured evidence → false (prefer reopen challenge).
 */
export function decisionBasisMatchesClaimStructured(
  decision: Mw5ConsumedDecisionProjection,
  claim: Mw5ClaimProjection,
): boolean {
  if (!decision.hasDecisionBasis) return false;
  if (!decision.linkedToCurrentLps) return false;
  if (!CONSUMED_HD_STATUSES.has(decision.status)) return false;

  const claimObjective = substantive(claim.objective);
  const decisionObjective = substantive(decision.executionObjective);
  if (!claimObjective || !decisionObjective) return false;
  if (!structuredFieldPairMatch(claimObjective, decisionObjective)) {
    return false;
  }
  if (
    !substantiveScopesCompatible(claim.scope, decision.executionScope)
  ) {
    return false;
  }
  if (
    !optionalStructuredQualifierCompatible(
      substantive(claim.requestedOperation),
      substantive(decision.requestedOperation),
    )
  ) {
    return false;
  }
  return true;
}

/**
 * Pure projection: Truth C / consumed HD facts for MW5 gate.
 * Caller supplies already-loaded OA read-side snapshots.
 */
export function resolveMw5ProductAuthorityFacts(input: {
  truthC: Mw5TruthCProjection | null;
  consumedDecisions: readonly Mw5ConsumedDecisionProjection[];
  claim: Mw5ClaimProjection;
  /** INTERNAL MW3 candidate only — presence blocks "no new contradiction". */
  newContradictionSignalPresent?: boolean;
}): Mw5ProductAuthorityFacts {
  const reasons: string[] = [];
  const truthC = input.truthC;
  const truthCContextAvailable = Boolean(
    truthC &&
      (normalize(truthC.objective) ||
        normalize(truthC.context) ||
        normalize(truthC.scope)),
  );
  if (!truthCContextAvailable) reasons.push("truth_c_unavailable_or_empty");

  const truthCEstablishedForClaim =
    truthC != null && truthCMatchesClaimStructured(truthC, input.claim);
  if (truthCEstablishedForClaim) {
    reasons.push("truth_c_structured_objective_anchor_match");
  } else if (truthCContextAvailable) {
    reasons.push("truth_c_no_structured_claim_match");
  }

  const linkedConsumed = input.consumedDecisions.filter(
    (d) =>
      d.linkedToCurrentLps &&
      CONSUMED_HD_STATUSES.has(d.status) &&
      d.hasDecisionBasis,
  );
  const relevant = linkedConsumed.filter((d) =>
    decisionBasisMatchesClaimStructured(d, input.claim),
  );
  const contradictionBlocks =
    input.newContradictionSignalPresent === true && relevant.length > 0;
  if (contradictionBlocks) {
    reasons.push("consumed_hd_blocked_by_contradiction_signal");
  }

  const consumedHumanDecisionWithoutNewContradiction =
    relevant.length > 0 && !contradictionBlocks;
  if (consumedHumanDecisionWithoutNewContradiction) {
    reasons.push("consumed_hd_lps_linked_decision_basis_match");
  } else if (relevant.length === 0 && linkedConsumed.length > 0) {
    reasons.push("consumed_hd_no_decision_basis_claim_match");
  } else if (linkedConsumed.length === 0) {
    reasons.push("no_lps_linked_consumed_human_decision");
  }

  return {
    truthCEstablishedForClaim,
    consumedHumanDecisionWithoutNewContradiction,
    truthCContextAvailable,
    consumedDecisionIds: relevant.map((d) => d.decisionId),
    reasonCodes: reasons,
  };
}

export function parseChallengeResponseAssessment(
  value: unknown,
): ChallengeResponseAssessment {
  if (value === null || value === undefined) return null;
  if (typeof value !== "string") return null;
  const normalized = value.trim().toLowerCase();
  if (normalized === "sufficient") return "sufficient";
  if (normalized === "insufficient") return "insufficient";
  if (normalized === "unknown") return "unknown";
  return null;
}

export function formatMw5ChallengeContextForProvider(
  ctx: Mw5ChallengeContextForAnalysis,
): string {
  const lines = ctx.challenges
    .slice(0, 3)
    .map((q, i) => `${i + 1}. ${q}`)
    .join("\n");
  return [
    "MW5_CHALLENGE_CONTEXT (server-issued, INTERNAL — not Truth C / Evidence / HumanDecision):",
    `challengePresent: true`,
    `structuralChallengeCount: ${ctx.structuralChallengeCount}`,
    `challengedPremise: ${ctx.challengedPremise}`,
    "challengeQuestions:",
    lines || "(none)",
  ].join("\n");
}
