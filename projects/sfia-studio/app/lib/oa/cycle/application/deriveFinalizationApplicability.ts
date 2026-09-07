/**
 * CORR-PROOF-05 — Product-derived FinalizationApplicabilityRules.
 * NEVER invent NOT_APPLICABLE from mere absence of rows/proof.
 * Explicit N/A requires durable obligation-policy HumanDecision options.
 * Positive durable APPLICABLE is monotone — NO_* cannot erase it (contradiction).
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
import type {
  FinalizationApplicabilityRules,
  ObligationApplicability,
  ProjectTrajectory,
} from "../domain/types";
import {
  isCurrentHumanDecisionStatus,
  matchesLifecycleHumanDecision,
} from "./assessFinalization";
import {
  isGitApplicableContract,
  isGitQualifyingEvidence,
} from "./qualifyGitEvidence";

export const OBLIGATION_POLICY_SUBJECT_PREFIX =
  "pilot.lifecycle.obligation-policy:" as const;

export function obligationPolicySubjectFor(cycleInstanceId: string): string {
  return `${OBLIGATION_POLICY_SUBJECT_PREFIX}${cycleInstanceId}`;
}

/** N/A artifact + git + execution + evidence + review. */
export const OBLIGATION_POLICY_NO_GOVERNED_EFFECTS =
  "opt:no-governed-effects" as const;
export const OBLIGATION_POLICY_NO_ARTIFACT = "opt:no-artifact" as const;
export const OBLIGATION_POLICY_NO_GIT = "opt:no-git" as const;
export const OBLIGATION_POLICY_NO_EXECUTION = "opt:no-execution" as const;
export const OBLIGATION_POLICY_NO_EVIDENCE = "opt:no-evidence" as const;
export const OBLIGATION_POLICY_NO_REVIEW = "opt:no-review" as const;
export const OBLIGATION_POLICY_REQUIRE_ARTIFACT =
  "opt:require-artifact" as const;
export const OBLIGATION_POLICY_REQUIRE_GIT = "opt:require-git" as const;

export type DerivableExecutionContract = {
  contractId: string;
  cycleInstanceId?: string;
  status: string;
  expectedOutputs?: string[];
  requiredCapabilities?: string[];
  evidenceRequirements?: string[];
  action?: string;
  target?: string;
  scope?: string;
  supersedesExecutionContractId?: string;
};

export type DeriveFinalizationApplicabilityInput = {
  cycleInstanceId: string;
  projectId: string;
  trajectory: ProjectTrajectory | null;
  decisions: readonly HumanDecision[];
  evidence: readonly Evidence[];
  reviewBundles: readonly ReviewBundle[];
  executionContracts: readonly DerivableExecutionContract[];
};

type PositiveFamily =
  | "artifact"
  | "execution_contract"
  | "evidence"
  | "review_bundle"
  | "git_repository";

function naReasonFor(optionId: string): string {
  return `pilot_hd_obligation_policy:${optionId}`;
}

function cycleBoundContracts(
  contracts: readonly DerivableExecutionContract[],
  cycleInstanceId: string,
): DerivableExecutionContract[] {
  return contracts.filter(
    (c) => !c.cycleInstanceId || c.cycleInstanceId === cycleInstanceId,
  );
}

function cycleBoundEvidence(
  evidence: readonly Evidence[],
  cycleInstanceId: string,
): Evidence[] {
  return evidence.filter(
    (e) =>
      !e.bindings?.cycleInstanceId ||
      e.bindings.cycleInstanceId === cycleInstanceId,
  );
}

function isProofStatus(status: Evidence["status"]): boolean {
  return status === "available" || status === "verified";
}

function findCurrentObligationPolicy(
  decisions: readonly HumanDecision[],
  projectId: string,
  cycleInstanceId: string,
): HumanDecision | null {
  const subject = obligationPolicySubjectFor(cycleInstanceId);
  const matches = decisions.filter((d) =>
    matchesLifecycleHumanDecision({
      decision: d,
      projectId,
      cycleInstanceId,
      subject,
    }),
  );
  if (matches.length === 0) {
    const loose = decisions.filter(
      (d) =>
        d.projectId === projectId &&
        d.subject === subject &&
        isCurrentHumanDecisionStatus(d.status) &&
        (!d.cycleInstanceId || d.cycleInstanceId === cycleInstanceId),
    );
    return (
      [...loose].sort((a, b) =>
        a.effectiveAt < b.effectiveAt
          ? 1
          : a.effectiveAt > b.effectiveAt
            ? -1
            : 0,
      )[0] ?? null
    );
  }
  return (
    [...matches].sort((a, b) =>
      a.effectiveAt < b.effectiveAt ? 1 : a.effectiveAt > b.effectiveAt ? -1 : 0,
    )[0] ?? null
  );
}

function markPositiveApplicable(
  rules: FinalizationApplicabilityRules,
  positiveSources: Partial<Record<PositiveFamily, string>>,
  family: PositiveFamily,
  source: string,
): void {
  rules[family] = "APPLICABLE";
  if (!positiveSources[family]) {
    positiveSources[family] = source;
  }
}

/**
 * Monotone N/A: refuse to overwrite durable positive APPLICABLE;
 * record contradiction instead.
 */
function trySetNa(
  rules: FinalizationApplicabilityRules,
  positiveSources: Partial<Record<PositiveFamily, string>>,
  family: PositiveFamily,
  optionId: string,
  policyDecision: HumanDecision,
): void {
  if (rules[family] === "APPLICABLE" && positiveSources[family]) {
    rules.contradictions = [
      ...(rules.contradictions ?? []),
      {
        family,
        positiveSource: positiveSources[family]!,
        conflictingDecisionId: policyDecision.decisionId,
        conflictingOptionId: optionId,
      },
    ];
    return;
  }
  rules[family] = "NOT_APPLICABLE";
  rules.notApplicableReasons = {
    ...rules.notApplicableReasons,
    [family]: naReasonFor(optionId),
  };
}

function requireApplicable(
  rules: FinalizationApplicabilityRules,
  family: PositiveFamily,
): void {
  if (rules[family] === "APPLICABLE") return;
  rules[family] = "APPLICABLE";
}

/**
 * Derive applicability from durable Product facts.
 * Merge: empty → positive EC/evidence/review/trajectory signals → obligation-policy HD.
 */
export function deriveFinalizationApplicability(
  input: DeriveFinalizationApplicabilityInput,
): FinalizationApplicabilityRules {
  const rules: FinalizationApplicabilityRules = {};
  const positiveSources: Partial<Record<PositiveFamily, string>> = {};
  const cycleId = input.cycleInstanceId;
  const contracts = cycleBoundContracts(input.executionContracts, cycleId);
  const evidence = cycleBoundEvidence(input.evidence, cycleId);
  const reviews = input.reviewBundles.filter(
    (r) => !r.cycleInstanceId || r.cycleInstanceId === cycleId,
  );

  // --- Positive signals (APPLICABLE only; never N/A from absence) ---
  if (input.trajectory) {
    rules.exit_criteria = "APPLICABLE";
  }

  if (contracts.length > 0) {
    markPositiveApplicable(
      rules,
      positiveSources,
      "execution_contract",
      "ec_present",
    );
  }

  const anyEvidenceReq = contracts.some(
    (c) => (c.evidenceRequirements?.length ?? 0) > 0,
  );
  if (evidence.length > 0) {
    markPositiveApplicable(rules, positiveSources, "evidence", "rows");
  } else if (anyEvidenceReq) {
    markPositiveApplicable(
      rules,
      positiveSources,
      "evidence",
      "ec_evidence_requirements",
    );
  }

  if (reviews.length > 0) {
    markPositiveApplicable(
      rules,
      positiveSources,
      "review_bundle",
      "review_present",
    );
  }

  const artifactFromEc = contracts.some((c) =>
    (c.expectedOutputs ?? []).some((o) => /artifact/i.test(o)),
  );
  const artifactFromEvidence = evidence.some((e) => e.type === "artifact");
  if (artifactFromEc) {
    markPositiveApplicable(
      rules,
      positiveSources,
      "artifact",
      "ec_expected_outputs",
    );
  } else if (artifactFromEvidence) {
    markPositiveApplicable(
      rules,
      positiveSources,
      "artifact",
      "evidence_artifact",
    );
  }
  rules.artifactProofPresent = evidence.some(
    (e) => e.type === "artifact" && isProofStatus(e.status),
  );

  const gitApplicable = contracts.filter(isGitApplicableContract);
  if (gitApplicable.length > 0) {
    markPositiveApplicable(
      rules,
      positiveSources,
      "git_repository",
      "ec_capability_git",
    );
  }
  const gitIds = new Set(gitApplicable.map((c) => c.contractId));
  rules.gitProofPresent = evidence.some((e) =>
    isGitQualifyingEvidence(e, gitIds, cycleId),
  );

  // --- Obligation policy HD (explicit N/A or REQUIRE) ---
  const policy = findCurrentObligationPolicy(
    input.decisions,
    input.projectId,
    cycleId,
  );
  if (!policy) {
    return rules;
  }

  const opt = policy.selectedOptionId;

  switch (opt) {
    case OBLIGATION_POLICY_NO_GOVERNED_EFFECTS:
      for (const family of [
        "artifact",
        "git_repository",
        "execution_contract",
        "evidence",
        "review_bundle",
      ] as const) {
        trySetNa(rules, positiveSources, family, opt, policy);
      }
      break;
    case OBLIGATION_POLICY_NO_ARTIFACT:
      trySetNa(rules, positiveSources, "artifact", opt, policy);
      break;
    case OBLIGATION_POLICY_NO_GIT:
      trySetNa(rules, positiveSources, "git_repository", opt, policy);
      break;
    case OBLIGATION_POLICY_NO_EXECUTION:
      trySetNa(rules, positiveSources, "execution_contract", opt, policy);
      break;
    case OBLIGATION_POLICY_NO_EVIDENCE:
      trySetNa(rules, positiveSources, "evidence", opt, policy);
      break;
    case OBLIGATION_POLICY_NO_REVIEW:
      trySetNa(rules, positiveSources, "review_bundle", opt, policy);
      break;
    case OBLIGATION_POLICY_REQUIRE_ARTIFACT:
      requireApplicable(rules, "artifact");
      break;
    case OBLIGATION_POLICY_REQUIRE_GIT:
      requireApplicable(rules, "git_repository");
      break;
    default:
      break;
  }

  return rules;
}

export { isGitQualifyingEvidence } from "./qualifyGitEvidence";

/** Re-export for callers that need the ObligationApplicability union locally. */
export type { ObligationApplicability };
