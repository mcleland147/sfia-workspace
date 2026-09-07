/**
 * CORR-PROOF-05 — derived, idempotent finalization obligation assessment.
 * No FinalizationLedger.
 * ABSENCE OF PROOF ≠ NOT_APPLICABLE.
 * ABSENCE OF MODEL ≠ NOT_APPLICABLE.
 * UNKNOWN APPLICABILITY ≠ NOT_APPLICABLE → fail-closed BLOCKING.
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
import type { ProjectTrajectory } from "../domain/types";
import type {
  CycleInstance,
  FinalizationApplicabilityRules,
  FinalizationAssessment,
  FinalizationObligation,
  FinalizationObligationFamily,
  ObligationApplicability,
} from "../domain/types";
import { selectEffectiveExecutionContracts } from "./selectEffectiveExecutionContracts";
import { selectEffectiveReviewBundles } from "./selectEffectiveReviewBundles";

const CONTRADICTION_BLOCKER: Record<
  NonNullable<FinalizationApplicabilityRules["contradictions"]>[number]["family"],
  string
> = {
  artifact: "artifact_policy_contradicts_applicability",
  git_repository: "git_policy_contradicts_applicability",
  execution_contract: "execution_policy_contradicts_applicability",
  evidence: "evidence_policy_contradicts_applicability",
  review_bundle: "review_policy_contradicts_applicability",
};

export const FINALIZE_SUBJECT_PREFIX = "pilot.lifecycle.finalize:" as const;
export const CANCEL_SUBJECT_PREFIX = "pilot.lifecycle.cancel:" as const;
export const START_TRAJECTORY_SUBJECT_PREFIX =
  "pilot.lifecycle.start+trajectory:" as const;
export const RESUME_REPLAN_SUBJECT_PREFIX =
  "pilot.lifecycle.resume+replan:" as const;

export function finalizeSubjectFor(cycleInstanceId: string): string {
  return `${FINALIZE_SUBJECT_PREFIX}${cycleInstanceId}`;
}

export function cancelSubjectFor(cycleInstanceId: string): string {
  return `${CANCEL_SUBJECT_PREFIX}${cycleInstanceId}`;
}

export function startTrajectorySubjectFor(cycleInstanceId: string): string {
  return `${START_TRAJECTORY_SUBJECT_PREFIX}${cycleInstanceId}`;
}

export function resumeReplanSubjectFor(cycleInstanceId: string): string {
  return `${RESUME_REPLAN_SUBJECT_PREFIX}${cycleInstanceId}`;
}

/** Domain-local CURRENT mapping — mirrors CORR-PROOF-04 HD lifecycle. */
export function isCurrentHumanDecisionStatus(
  status: HumanDecision["status"],
): boolean {
  return status === "accepted" || status === "amended";
}

export type LifecycleHdMatchInput = {
  decision: HumanDecision;
  projectId: string;
  cycleInstanceId: string;
  subject: string;
};

export function matchesLifecycleHumanDecision(
  input: LifecycleHdMatchInput,
): boolean {
  const d = input.decision;
  if (d.projectId !== input.projectId) return false;
  if (d.cycleInstanceId && d.cycleInstanceId !== input.cycleInstanceId) {
    return false;
  }
  if (d.subject !== input.subject) return false;
  return isCurrentHumanDecisionStatus(d.status);
}

export function isAcceptedFinalizeDecision(
  decision: HumanDecision,
  cycleInstanceId: string,
  projectId?: string,
): boolean {
  if (projectId && decision.projectId !== projectId) return false;
  if (decision.cycleInstanceId && decision.cycleInstanceId !== cycleInstanceId) {
    return false;
  }
  if (decision.subject !== finalizeSubjectFor(cycleInstanceId)) {
    return false;
  }
  return isCurrentHumanDecisionStatus(decision.status);
}

export function isAcceptedCancelDecision(
  decision: HumanDecision,
  cycleInstanceId: string,
  projectId?: string,
): boolean {
  if (projectId && decision.projectId !== projectId) return false;
  if (decision.cycleInstanceId && decision.cycleInstanceId !== cycleInstanceId) {
    return false;
  }
  if (decision.subject !== cancelSubjectFor(cycleInstanceId)) {
    return false;
  }
  return isCurrentHumanDecisionStatus(decision.status);
}

export function isAcceptedStartTrajectoryDecision(
  decision: HumanDecision,
  cycleInstanceId: string,
  projectId: string,
): boolean {
  return matchesLifecycleHumanDecision({
    decision,
    projectId,
    cycleInstanceId,
    subject: startTrajectorySubjectFor(cycleInstanceId),
  });
}

export function isAcceptedResumeReplanDecision(
  decision: HumanDecision,
  cycleInstanceId: string,
  projectId: string,
): boolean {
  return matchesLifecycleHumanDecision({
    decision,
    projectId,
    cycleInstanceId,
    subject: resumeReplanSubjectFor(cycleInstanceId),
  });
}

export type AssessFinalizationInput = {
  cycle: CycleInstance;
  projectId: string;
  assessedAt: string;
  decisions: readonly HumanDecision[];
  evidence: readonly Evidence[];
  reviewBundles: readonly ReviewBundle[];
  trajectory: ProjectTrajectory | null;
  /**
   * Explicit applicability rules / proofs. Client booleans are never sole SoT;
   * omit → UNKNOWN when derivation cannot prove APPLICABLE or NOT_APPLICABLE.
   */
  applicability?: FinalizationApplicabilityRules;
  executionRequired?: boolean;
  executionContracts?: ReadonlyArray<{
    contractId: string;
    cycleInstanceId?: string;
    status: string;
    supersedesExecutionContractId?: string;
  }>;
  executionAttempts?: ReadonlyArray<{
    attemptId: string;
    contractId?: string;
    terminalState?: string;
  }>;
  finalizeDecisionId?: string | null;
  blockingReservationStatements?: readonly string[];
};

function findFinalizeDecision(
  input: AssessFinalizationInput,
): HumanDecision | null {
  if (input.finalizeDecisionId) {
    return (
      input.decisions.find((d) => d.decisionId === input.finalizeDecisionId) ??
      null
    );
  }
  const matches = input.decisions.filter((d) =>
    isAcceptedFinalizeDecision(d, input.cycle.cycleInstanceId, input.projectId),
  );
  return (
    [...matches].sort((a, b) =>
      a.effectiveAt < b.effectiveAt ? 1 : a.effectiveAt > b.effectiveAt ? -1 : 0,
    )[0] ?? null
  );
}

function resolveApplicability(
  family: Exclude<FinalizationObligationFamily, "human_decision">,
  derived: ObligationApplicability,
  rules: FinalizationApplicabilityRules | undefined,
): ObligationApplicability {
  const override: ObligationApplicability | undefined = {
    exit_criteria: rules?.exit_criteria,
    artifact: rules?.artifact,
    execution_contract: rules?.execution_contract,
    evidence: rules?.evidence,
    review_bundle: rules?.review_bundle,
    git_repository: rules?.git_repository,
    blockers: rules?.blockers,
  }[family];
  if (
    override === "APPLICABLE" ||
    override === "NOT_APPLICABLE" ||
    override === "UNKNOWN"
  ) {
    return override;
  }
  return derived;
}

function naReason(
  family: FinalizationObligationFamily,
  rules: FinalizationApplicabilityRules | undefined,
  fallback: string,
): string {
  return rules?.notApplicableReasons?.[
    family as keyof NonNullable<
      FinalizationApplicabilityRules["notApplicableReasons"]
    >
  ] ?? fallback;
}

function pushUnknownBlocking(
  obligations: FinalizationObligation[],
  blockers: string[],
  family: FinalizationObligationFamily,
  detail: string,
): void {
  obligations.push({
    family,
    applicability: "UNKNOWN",
    status: "BLOCKING",
    detail,
    blocking: true,
  });
  blockers.push(`${family}_applicability_unknown`);
}

function pushNa(
  obligations: FinalizationObligation[],
  family: FinalizationObligationFamily,
  reason: string,
  detail: string,
): void {
  obligations.push({
    family,
    applicability: "NOT_APPLICABLE",
    status: "NOT_APPLICABLE",
    notApplicableReason: reason,
    detail,
  });
}

/**
 * Pure assessment. Idempotent for the same input snapshot.
 */
export function assessFinalizationObligations(
  input: AssessFinalizationInput,
): FinalizationAssessment {
  const obligations: FinalizationObligation[] = [];
  const blockers: string[] = [];
  const rules = input.applicability;

  if (rules?.contradictions?.length) {
    for (const c of rules.contradictions) {
      blockers.push(CONTRADICTION_BLOCKER[c.family]);
    }
  }

  const finalizeDecision = findFinalizeDecision(input);
  const finalizeAccepted = Boolean(
    finalizeDecision &&
      isAcceptedFinalizeDecision(
        finalizeDecision,
        input.cycle.cycleInstanceId,
        input.projectId,
      ),
  );

  // 1) HumanDecision FINALIZE — always applicable
  if (finalizeAccepted && finalizeDecision) {
    obligations.push({
      family: "human_decision",
      applicability: "APPLICABLE",
      status: "SATISFIED",
      detail: `finalize_decision:${finalizeDecision.decisionId}`,
    });
  } else if (finalizeDecision) {
    obligations.push({
      family: "human_decision",
      applicability: "APPLICABLE",
      status: "PENDING",
      detail: `finalize_decision_status:${finalizeDecision.status}`,
      blocking: true,
    });
    blockers.push("finalize_human_decision_not_current");
  } else {
    obligations.push({
      family: "human_decision",
      applicability: "APPLICABLE",
      status: "MISSING",
      detail: "finalize_human_decision_absent",
      blocking: true,
    });
    blockers.push("finalize_human_decision_absent");
  }

  // 2) Exit criteria / trajectory — Product Completion MUST; absence ≠ N/A
  {
    const derived: ObligationApplicability = input.trajectory
      ? "APPLICABLE"
      : "UNKNOWN";
    const applicability = resolveApplicability("exit_criteria", derived, rules);
    if (applicability === "NOT_APPLICABLE") {
      pushNa(
        obligations,
        "exit_criteria",
        naReason(
          "exit_criteria",
          rules,
          "explicit_rule_no_exit_criteria_for_cycle",
        ),
        "exit_criteria_explicitly_not_applicable",
      );
    } else if (applicability === "UNKNOWN" || !input.trajectory) {
      pushUnknownBlocking(
        obligations,
        blockers,
        "exit_criteria",
        input.trajectory
          ? "exit_criteria_applicability_unknown"
          : "trajectory_absent_applicability_unknown",
      );
    } else {
      const openSteps = input.trajectory.steps.filter(
        (s) =>
          s.state === "pending" || s.state === "active" || s.state === "blocked",
      );
      if (openSteps.length === 0) {
        obligations.push({
          family: "exit_criteria",
          applicability: "APPLICABLE",
          status: "SATISFIED",
          detail: "trajectory_steps_closed_or_skipped",
        });
      } else {
        const blocked = openSteps.some((s) => s.state === "blocked");
        obligations.push({
          family: "exit_criteria",
          applicability: "APPLICABLE",
          status: blocked ? "BLOCKING" : "PENDING",
          detail: `open_steps:${openSteps.map((s) => s.stepId).join(",")}`,
          blocking: true,
        });
        blockers.push("exit_criteria_open");
      }
    }
  }

  // 3) Artifacts — missing model ≠ N/A
  {
    const derived: ObligationApplicability = "UNKNOWN";
    const applicability = resolveApplicability("artifact", derived, rules);
    if (applicability === "NOT_APPLICABLE") {
      pushNa(
        obligations,
        "artifact",
        naReason("artifact", rules, "explicit_rule_no_artifact_obligation"),
        "artifact_explicitly_not_applicable",
      );
    } else if (applicability === "UNKNOWN") {
      pushUnknownBlocking(
        obligations,
        blockers,
        "artifact",
        "artifact_applicability_unknown_or_model_unbound",
      );
    } else if (rules?.artifactProofPresent === true) {
      obligations.push({
        family: "artifact",
        applicability: "APPLICABLE",
        status: "SATISFIED",
        detail: "artifact_proof_present",
      });
    } else {
      obligations.push({
        family: "artifact",
        applicability: "APPLICABLE",
        status: "MISSING",
        detail: "artifact_required_but_proof_absent",
        blocking: true,
      });
      blockers.push("artifact_missing");
    }
  }

  // 4) ExecutionContract — 0..N; unknown ≠ auto N/A
  {
    const rawContracts = input.executionContracts ?? [];
    const cycleContracts = rawContracts.filter(
      (c) =>
        !c.cycleInstanceId || c.cycleInstanceId === input.cycle.cycleInstanceId,
    );
    let derived: ObligationApplicability;
    if (input.executionRequired === false && cycleContracts.length === 0) {
      derived = "NOT_APPLICABLE";
    } else if (input.executionRequired === true || cycleContracts.length > 0) {
      derived = "APPLICABLE";
    } else {
      derived = "UNKNOWN";
    }
    const applicability = resolveApplicability(
      "execution_contract",
      derived,
      rules,
    );
    if (applicability === "NOT_APPLICABLE") {
      pushNa(
        obligations,
        "execution_contract",
        naReason(
          "execution_contract",
          rules,
          "explicit_rule_no_governed_execution_required",
        ),
        "execution_explicitly_not_required",
      );
    } else if (applicability === "UNKNOWN") {
      pushUnknownBlocking(
        obligations,
        blockers,
        "execution_contract",
        "execution_applicability_unknown",
      );
    } else {
      const { effective, orphanedSuperseded } =
        selectEffectiveExecutionContracts(
          rawContracts,
          input.cycle.cycleInstanceId,
        );

      // Attempts never alone satisfy the family (EC9).
      void input.executionAttempts;

      if (orphanedSuperseded.length > 0 && effective.length === 0) {
        obligations.push({
          family: "execution_contract",
          applicability: "APPLICABLE",
          status: "BLOCKING",
          detail: `orphaned_superseded:${orphanedSuperseded
            .map((c) => c.contractId)
            .join(",")}`,
          blocking: true,
        });
        blockers.push("execution_superseded_unresolved");
      } else if (effective.length === 0) {
        obligations.push({
          family: "execution_contract",
          applicability: "APPLICABLE",
          status: "MISSING",
          detail: "execution_required_but_no_contract",
          blocking: true,
        });
        blockers.push("execution_contract_missing");
      } else {
        let anyBlocking = orphanedSuperseded.length > 0;
        let anyPending = false;
        let allCompleted = true;
        const pendingIds: string[] = [];
        const blockingIds: string[] = [];

        for (const c of effective) {
          switch (c.status) {
            case "completed":
              break;
            case "failed":
            case "cancelled":
            case "superseded":
              anyBlocking = true;
              allCompleted = false;
              blockingIds.push(c.contractId);
              break;
            case "draft":
            case "proposed":
            case "validated":
            case "confirmation_required":
            case "confirmed":
            case "executing":
              anyPending = true;
              allCompleted = false;
              pendingIds.push(c.contractId);
              break;
            default:
              anyPending = true;
              allCompleted = false;
              pendingIds.push(c.contractId);
              break;
          }
        }

        if (anyBlocking) {
          obligations.push({
            family: "execution_contract",
            applicability: "APPLICABLE",
            status: "BLOCKING",
            detail:
              orphanedSuperseded.length > 0 && blockingIds.length === 0
                ? `orphaned_superseded:${orphanedSuperseded
                    .map((c) => c.contractId)
                    .join(",")}`
                : `blocking_contracts:${blockingIds.join(",")}`,
            blocking: true,
          });
          if (orphanedSuperseded.length > 0 && effective.length > 0) {
            blockers.push("execution_superseded_unresolved");
          }
          blockers.push("execution_contract_blocking");
        } else if (anyPending) {
          obligations.push({
            family: "execution_contract",
            applicability: "APPLICABLE",
            status: "PENDING",
            detail: `open_contracts:${pendingIds.join(",")}`,
            blocking: true,
          });
          blockers.push("execution_contract_open");
        } else if (allCompleted) {
          obligations.push({
            family: "execution_contract",
            applicability: "APPLICABLE",
            status: "SATISFIED",
            detail: "contracts_completed",
          });
        }
      }
    }
  }

  // 5) Evidence — zero rows alone ≠ N/A
  {
    const cycleEvidence = input.evidence.filter(
      (e) =>
        e.bindings?.cycleInstanceId === input.cycle.cycleInstanceId ||
        !e.bindings?.cycleInstanceId,
    );
    let derived: ObligationApplicability = "UNKNOWN";
    if (cycleEvidence.length > 0) derived = "APPLICABLE";
    const applicability = resolveApplicability("evidence", derived, rules);
    if (applicability === "NOT_APPLICABLE") {
      pushNa(
        obligations,
        "evidence",
        naReason("evidence", rules, "explicit_rule_no_evidence_obligation"),
        "evidence_explicitly_not_applicable",
      );
    } else if (applicability === "UNKNOWN") {
      pushUnknownBlocking(
        obligations,
        blockers,
        "evidence",
        "evidence_applicability_unknown",
      );
    } else if (cycleEvidence.length === 0) {
      obligations.push({
        family: "evidence",
        applicability: "APPLICABLE",
        status: "MISSING",
        detail: "evidence_required_but_absent",
        blocking: true,
      });
      blockers.push("evidence_missing");
    } else {
      const weak = cycleEvidence.filter(
        (e) =>
          e.status === "rejected" ||
          e.status === "superseded" ||
          e.status === "unavailable" ||
          e.availability === "unavailable",
      );
      const pending = cycleEvidence.filter(
        (e) =>
          e.status === "expected" ||
          e.status === "incomplete" ||
          e.status === "stale",
      );
      if (weak.length === cycleEvidence.length) {
        obligations.push({
          family: "evidence",
          applicability: "APPLICABLE",
          status: "BLOCKING",
          detail: "all_evidence_non_supporting",
          blocking: true,
        });
        blockers.push("evidence_non_supporting");
      } else if (pending.length > 0) {
        obligations.push({
          family: "evidence",
          applicability: "APPLICABLE",
          status: "PENDING",
          detail: `pending_evidence:${pending.length}`,
          blocking: true,
        });
        blockers.push("evidence_pending");
      } else {
        obligations.push({
          family: "evidence",
          applicability: "APPLICABLE",
          status: "SATISFIED",
          detail: `supporting_evidence:${cycleEvidence.length - weak.length}`,
        });
      }
    }
  }

  // 6) ReviewBundle — zero rows alone ≠ N/A
  {
    const cycleReviews = input.reviewBundles.filter(
      (r) =>
        !r.cycleInstanceId || r.cycleInstanceId === input.cycle.cycleInstanceId,
    );
    let derived: ObligationApplicability = "UNKNOWN";
    if (cycleReviews.length > 0) derived = "APPLICABLE";
    const applicability = resolveApplicability("review_bundle", derived, rules);
    if (applicability === "NOT_APPLICABLE") {
      pushNa(
        obligations,
        "review_bundle",
        naReason(
          "review_bundle",
          rules,
          "explicit_rule_no_review_bundle_obligation",
        ),
        "review_bundle_explicitly_not_applicable",
      );
    } else if (applicability === "UNKNOWN") {
      pushUnknownBlocking(
        obligations,
        blockers,
        "review_bundle",
        "review_bundle_applicability_unknown",
      );
    } else if (cycleReviews.length === 0) {
      obligations.push({
        family: "review_bundle",
        applicability: "APPLICABLE",
        status: "MISSING",
        detail: "review_required_but_absent",
        blocking: true,
      });
      blockers.push("review_bundle_missing");
    } else {
      const { effective, ineligible } = selectEffectiveReviewBundles(
        input.reviewBundles,
        input.cycle.cycleInstanceId,
      );

      if (effective.length === 0) {
        obligations.push({
          family: "review_bundle",
          applicability: "APPLICABLE",
          status: "BLOCKING",
          detail:
            ineligible.length > 0
              ? `ineligible_synthesis_only:${ineligible.length}`
              : "review_bundle_no_current",
          blocking: true,
        });
        blockers.push(
          ineligible.length > 0
            ? "review_bundle_ineligible"
            : "review_bundle_no_current",
        );
      } else {
        const rejected = effective.filter((r) => r.status === "rejected");
        const incomplete = effective.filter(
          (r) =>
            r.status === "incomplete" ||
            r.completeness === "incomplete" ||
            r.synthesisOnly,
        );
        const pending = effective.filter(
          (r) =>
            r.status === "draft" ||
            r.status === "ready_for_review" ||
            r.status === "under_review",
        );
        const accepted = effective.filter((r) => r.status === "accepted");

        if (rejected.length > 0 || incomplete.length > 0 || ineligible.length > 0) {
          obligations.push({
            family: "review_bundle",
            applicability: "APPLICABLE",
            status: "BLOCKING",
            detail:
              rejected.length > 0
                ? `rejected_review_bundles:${rejected.length}`
                : incomplete.length > 0
                  ? `incomplete_review_bundles:${incomplete.length}`
                  : `ineligible_synthesis_only:${ineligible.length}`,
            blocking: true,
          });
          blockers.push(
            rejected.length > 0
              ? "review_bundle_rejected"
              : incomplete.length > 0
                ? "review_bundle_incomplete"
                : "review_bundle_ineligible",
          );
        } else if (pending.length > 0) {
          obligations.push({
            family: "review_bundle",
            applicability: "APPLICABLE",
            status: "PENDING",
            detail: `open_review_bundles:${pending.length}`,
            blocking: true,
          });
          blockers.push("review_bundle_open");
        } else if (
          accepted.length === effective.length &&
          accepted.length > 0
        ) {
          obligations.push({
            family: "review_bundle",
            applicability: "APPLICABLE",
            status: "SATISFIED",
            detail: `accepted_review_bundles:${accepted.length}`,
          });
        } else {
          obligations.push({
            family: "review_bundle",
            applicability: "APPLICABLE",
            status: "BLOCKING",
            detail: "review_bundle_no_current",
            blocking: true,
          });
          blockers.push("review_bundle_no_current");
        }
      }
    }
  }

  // 7) Git — never hardcode false; derive or UNKNOWN
  {
    const derived: ObligationApplicability = "UNKNOWN";
    const applicability = resolveApplicability("git_repository", derived, rules);
    if (applicability === "NOT_APPLICABLE") {
      pushNa(
        obligations,
        "git_repository",
        naReason(
          "git_repository",
          rules,
          "explicit_rule_git_not_part_of_cycle_effects",
        ),
        "git_explicitly_not_applicable",
      );
    } else if (applicability === "UNKNOWN") {
      pushUnknownBlocking(
        obligations,
        blockers,
        "git_repository",
        "git_applicability_unknown",
      );
    } else if (rules?.gitProofPresent === true) {
      obligations.push({
        family: "git_repository",
        applicability: "APPLICABLE",
        status: "SATISFIED",
        detail: "git_proof_present",
      });
    } else {
      obligations.push({
        family: "git_repository",
        applicability: "APPLICABLE",
        status: "MISSING",
        detail: "git_applicable_but_no_proof",
        blocking: true,
      });
      blockers.push("git_proof_missing");
    }
  }

  // 8) Blockers / reservations
  {
    const blockingReservations = input.blockingReservationStatements ?? [];
    const applicability = resolveApplicability("blockers", "APPLICABLE", rules);
    if (applicability === "NOT_APPLICABLE") {
      pushNa(
        obligations,
        "blockers",
        naReason("blockers", rules, "explicit_rule_blockers_not_applicable"),
        "blockers_explicitly_not_applicable",
      );
    } else if (applicability === "UNKNOWN") {
      pushUnknownBlocking(
        obligations,
        blockers,
        "blockers",
        "blockers_applicability_unknown",
      );
    } else if (blockingReservations.length > 0) {
      obligations.push({
        family: "blockers",
        applicability: "APPLICABLE",
        status: "BLOCKING",
        detail: blockingReservations.join("|"),
        blocking: true,
      });
      blockers.push("blocking_reservations");
    } else {
      obligations.push({
        family: "blockers",
        applicability: "APPLICABLE",
        status: "SATISFIED",
        detail: "no_blocking_reservations",
      });
    }
  }

  // Policy: every N/A must carry reason; UNKNOWN never appears as status
  for (const o of obligations) {
    if (o.status === "NOT_APPLICABLE" && !o.notApplicableReason) {
      o.status = "BLOCKING";
      o.applicability = "UNKNOWN";
      o.blocking = true;
      o.detail = `${o.detail ?? ""}|na_without_reason_fail_closed`;
      blockers.push(`${o.family}_na_without_reason`);
    }
  }

  const hasUnknown = obligations.some((o) => o.applicability === "UNKNOWN");
  const canComplete =
    finalizeAccepted &&
    blockers.length === 0 &&
    !hasUnknown &&
    obligations.every(
      (o) => o.status === "SATISFIED" || o.status === "NOT_APPLICABLE",
    );

  return {
    cycleInstanceId: input.cycle.cycleInstanceId,
    projectId: input.projectId,
    finalizeDecisionId: finalizeDecision?.decisionId ?? null,
    finalizeAccepted,
    obligations,
    canComplete,
    blockers,
    assessedAt: input.assessedAt,
  };
}
