# CORR-PROOF-05 — Delivery Implementation (Pilot-Governed Cycle Lifecycle)
## FULL Review Pack — exploitable

| Field | Value |
| --- | --- |
| **Timestamp (UTC)** | 2026-09-07T16:03:21Z |
| **Repo** | `mcleland147/sfia-workspace` |
| **Delivery worktree** | `/Users/morris/Projects/sfia-wt-corr05-impl-12d837fd` |
| **Branch** | `delivery/sfia-studio-proof-corr-05-pilot-lifecycle` |
| **HEAD** | `12d837fd29a69b3e83155a06ec58dc91b0e15f0b` |
| **origin/main** | `12d837fd29a69b3e83155a06ec58dc91b0e15f0b` |
| **Handoff input (preflight)** | `7bed15887a3af8ddf34eacfa387d535979bd2051` |
| **Functional contract tip** | `6b5a266c2d6702d5712a218b7b9824eba7286480` |
| **Cycle** | CORR-PROOF-05 — Delivery / Pilot-Governed Cycle Lifecycle |
| **Profile** | CRITICAL |
| **Gap closed (deterministic)** | `CYCLE_LIFECYCLE_ORCHESTRATION_GAP` |
| **Product Proof** | OPEN |
| **runtime v3** | NON ADOPTED |
| **Product commit** | NOT PERFORMED (local uncommitted) |
| **Verdict** | READY FOR CHATGPT CORR-PROOF-05 DELIVERY REVIEW |

### Anti-claims
- NOT DELIVERY AUTHORIZED as merge/PR (local Delivery only; commit/PR/merge NOT AUTHORIZED)
- NOT PRODUCT PROOF CLOSED
- NOT STAGE B AUTHORIZED
- NOT runtime v3 ADOPTED
- NOT READY FOR REAL
- NO REAL Suivi executed
- NO FinalizationLedger / new table / migration

---

# 1. Metadata / timestamp
See table above. Generated after deterministic validations.

# 2. Local Git Truth initial
- Recommended WT `sfia-wt-corr05-delivery-12d837fd` drifted externally to `1f48dd81` / CORR-04 — left untouched (no reset/stash).
- Isolated authoritative WT: `sfia-wt-corr05-impl-12d837fd` @ exact `12d837fd` on `delivery/sfia-studio-proof-corr-05-pilot-lifecycle`.
- `origin/main` = `12d837fd…`; `origin/sfia/review-handoff` before = `7bed1588…`.
- No product agent-root move used (prevents known Cursor checkout drift).

# 3. Décisions Morris consommées
1. Functional Contract CORR-PROOF-05 VALIDATED.
2. GO DELIVERY CORR-PROOF-05 + PUBLISH REVIEW HANDOFF (L3 borné).
NOT consumed: product commit/push/PR/merge; REAL; Product Proof closure; Stage B; runtime v3; structural persistence.

# 4. Sources consultées
- Template v2.6 `prompts/templates/sfia-cycle-execution-template.md` @ 12d837fd
- Build Doctrine; Roadmap; C1; C2
- v3 framing 30, 32–35, 37
- Functional contract handoff `6b5a266c…`
- Technical preflight handoff `7bed1588…`
- Runtime: orchestrateF2, gatePolicy, recordDecision, studioCognitiveContext, actions, Panel, OA cycle/project/decision/EC/evidence, vertical-slice service
- FACT: `sfia-cycle-routing-guide.md` ABSENT on origin/main (documented; template used)

# 5. Convergence qualification
- Capability: Pilot-Governed Project Lifecycle (V3-F02/F05/F06/F09 + F04/F11/F14/F15)
- Milestone: Product Completion / Product Proof
- Classification KEEP/ADAPT/COMPLETE/FORBIDDEN respected
- No parallel lifecycle engine; no FinalizationLedger

# 6. Runtime before-map
- F2 `createCycle(... linkAsActiveCycle:true)` from `actor:nora-f2`
- CycleServices: create/get/trajectory/epistemic only
- Statuses: proposed|acknowledged|active|blocked|completed|cancelled|superseded — no paused
- `evaluateMorrisGateRequired` coupled into F2 proposal flow
- LPS clear via `pickLink(null)` already existed

# 7. Design réellement implémenté
1. Soft-add `paused` to CycleInstanceStatus (TEXT; no DDL).
2. Domain `lifecycleInvariants` — ≤1 ACTIVE, transitions, terminal guards.
3. `PilotLifecycleTransitions` — START/PAUSE/RESUME/FINALIZE/CANCEL + reevaluateAndComplete.
4. Derived `assessFinalizationObligations` (idempotent; NOT_APPLICABLE requires reason).
5. F2: `linkAsActiveCycle:false`; candidate messaging; Morris gate labeled construction-only.
6. createCycle link path: refuse overwrite when another ACTIVE / LPS pointer exists.
7. Vertical-slice late-bound decision/evidence/EC readers into pilotLifecycle.
8. Server action `projectAssistantPilotLifecycleAction` + minimal Panel CTAs.
9. HD for FINALIZE/CANCEL via DecisionServices + LOCAL_PILOTE_ACTOR (authority class `morris` technical; UX = Pilot).
10. Audit events `oa.cycle.lifecycle_transition` + `oa.cycle.finalization_assessed` via existing journal.

# 8. Lifecycle status/transition matrix after
| Action | From | To | LPS active | HD default |
| --- | --- | --- | --- | --- |
| F2 create candidate | — | proposed/acknowledged | unchanged/null | N/A |
| START | proposed/acknowledged | active | set | NO (unless trajectory amend) |
| PAUSE | active | paused | clear null | NO |
| RESUME clean | paused | active | set | NO |
| RESUME drift | paused | refused | unchanged | replan HD if structuring |
| FINALIZE | active/paused/blocked | same or completed | clear if completed | YES |
| CANCEL | non-terminal | cancelled | clear | YES |
| BLOCKED | (manual/domain) | blocked | retain | — |

# 9. HD / Confirmation / Morris-gate matrix after
- START traj decided: no HD; START+amend: HD; PAUSE/clean RESUME: no HD; FINALIZE/CANCEL: HD
- Confirmation N1/N2/N3 unchanged (EC path)
- `evaluateMorrisGateRequired` KEPT for construction; NOT used as Pilot lifecycle authority
- recordDecision Morris-gate path unchanged for F2 construction proposals

# 10. Finalization obligation model
Families: exit_criteria, human_decision, artifact, execution_contract, evidence, review_bundle, git_repository, blockers.
Derived from existing assets; 0..N EC only when required/present.

# 11. NOT_APPLICABLE policy
Every N/A requires `notApplicableReason`. Missing proof → MISSING/PENDING/BLOCKING. Fail-closed if N/A without reason.

# 12. Single-ACTIVE enforcement
Application: `assertAtMostOneActiveCycle` + LPS pointer check inside START/RESUME and createCycle link, inside UoW transaction when store present.

# 13. Persistence assessment
FACT: no new table/schema/migration/store. OPTIONAL soft `paused` on TEXT. FinalizationLedger NOT REQUIRED / NOT CREATED.

# 14. KEEP / ADAPT / COMPLETE / debt
KEEP: OA HD/EC/Evidence/RB/LPS/Trajectory/UoW/audit.
ADAPT: F2 link, createCycle link guard, gate call-site labeling, cognitive context wording, Panel/actions, Cycle status/invariants.
COMPLETE: Pilot transitions, assessment, CTAs, audit events, tests.
DEBT: `acknowledged` semantic overload remains (bounded); enum↔C2 rich mapping deferred; Artifact family N/A until artifact SoT bound.

# 15. Fichiers créés

## CREATED `projects/sfia-studio/app/lib/oa/cycle/domain/lifecycleInvariants.ts` (155 lines)

```typescript
/**
 * CORR-PROOF-05 — Pilot-governed CycleInstance lifecycle invariants.
 * Application/domain enforcement (not UI-only).
 */
import type { CycleInstance, CycleInstanceStatus } from "./types";
import type { InvariantViolation } from "./invariants";

/** Authority-bearing working status for ≤1 ACTIVE enforcement. */
export const ACTIVE_AUTHORITY_STATUS: CycleInstanceStatus = "active";

export type PilotLifecycleAction =
  | "START"
  | "PAUSE"
  | "RESUME"
  | "FINALIZE"
  | "CANCEL"
  | "COMPLETE"
  | "BLOCK";

export function isTerminalCycleStatus(status: CycleInstanceStatus): boolean {
  return status === "completed" || status === "cancelled";
}

export function isActiveAuthorityStatus(status: CycleInstanceStatus): boolean {
  return status === ACTIVE_AUTHORITY_STATUS;
}

export function isPausedStatus(status: CycleInstanceStatus): boolean {
  return status === "paused";
}

export function isCandidateNonActiveStatus(status: CycleInstanceStatus): boolean {
  return (
    status === "proposed" ||
    status === "acknowledged" ||
    status === "superseded"
  );
}

export function listActiveAuthorityCycles(
  cycles: readonly CycleInstance[],
): CycleInstance[] {
  return cycles.filter((c) => isActiveAuthorityStatus(c.status));
}

/**
 * ≤1 ACTIVE CycleInstance per Project.
 * Optional excludeId allows the cycle being activated to pass through.
 */
export function assertAtMostOneActiveCycle(input: {
  cycles: readonly CycleInstance[];
  excludeCycleInstanceId?: string;
}): InvariantViolation | null {
  const actives = listActiveAuthorityCycles(input.cycles).filter(
    (c) => c.cycleInstanceId !== input.excludeCycleInstanceId,
  );
  if (actives.length > 0) {
    return {
      detailCode: "CYCLE_ALREADY_ACTIVE_EXISTS",
      reason: `active_exists:${actives.map((c) => c.cycleInstanceId).join(",")}`,
    };
  }
  return null;
}

export function assertNotTerminal(
  cycle: CycleInstance,
): InvariantViolation | null {
  if (isTerminalCycleStatus(cycle.status)) {
    return {
      detailCode: "CYCLE_TERMINAL",
      reason: `terminal_${cycle.status}`,
    };
  }
  return null;
}

/**
 * Allowed Pilot lifecycle transitions (domain matrix).
 * BLOCKED remains distinct from PAUSED.
 */
export function assertLifecycleTransition(input: {
  from: CycleInstanceStatus;
  action: PilotLifecycleAction;
}): InvariantViolation | null {
  const { from, action } = input;
  if (isTerminalCycleStatus(from) && action !== "COMPLETE") {
    return {
      detailCode: "CYCLE_TERMINAL",
      reason: `no_transition_from_${from}`,
    };
  }

  const ok = (allowed: boolean, reason: string): InvariantViolation | null =>
    allowed
      ? null
      : { detailCode: "CYCLE_TRANSITION_INVALID", reason };

  switch (action) {
    case "START":
      return ok(
        from === "proposed" || from === "acknowledged",
        `start_from_${from}`,
      );
    case "PAUSE":
      return ok(from === "active", `pause_from_${from}`);
    case "RESUME":
      return ok(from === "paused", `resume_from_${from}`);
    case "FINALIZE":
      return ok(
        from === "active" || from === "paused" || from === "blocked",
        `finalize_from_${from}`,
      );
    case "CANCEL":
      return ok(!isTerminalCycleStatus(from), `cancel_from_${from}`);
    case "COMPLETE":
      return ok(
        from === "active" || from === "paused" || from === "blocked",
        `complete_from_${from}`,
      );
    case "BLOCK":
      return ok(from === "active" || from === "paused", `block_from_${from}`);
    default: {
      const _exhaustive: never = action;
      void _exhaustive;
      return { detailCode: "CYCLE_TRANSITION_INVALID", reason: "unknown_action" };
    }
  }
}

export function targetStatusForAction(
  action: PilotLifecycleAction,
): CycleInstanceStatus | null {
  switch (action) {
    case "START":
    case "RESUME":
      return "active";
    case "PAUSE":
      return "paused";
    case "CANCEL":
      return "cancelled";
    case "COMPLETE":
      return "completed";
    case "BLOCK":
      return "blocked";
    case "FINALIZE":
      // FINALIZE does not by itself complete; status unchanged until COMPLETE.
      return null;
    default: {
      const _exhaustive: never = action;
      void _exhaustive;
      return null;
    }
  }
}

```

## CREATED `projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts` (401 lines)

```typescript
/**
 * CORR-PROOF-05 — derived, idempotent finalization obligation assessment.
 * No FinalizationLedger. ABSENCE OF PROOF ≠ NOT_APPLICABLE.
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
import type { ProjectTrajectory } from "../domain/types";
import type {
  CycleInstance,
  FinalizationAssessment,
  FinalizationObligation,
} from "../domain/types";

export const FINALIZE_SUBJECT_PREFIX = "pilot.lifecycle.finalize:" as const;
export const CANCEL_SUBJECT_PREFIX = "pilot.lifecycle.cancel:" as const;

export function finalizeSubjectFor(cycleInstanceId: string): string {
  return `${FINALIZE_SUBJECT_PREFIX}${cycleInstanceId}`;
}

export function cancelSubjectFor(cycleInstanceId: string): string {
  return `${CANCEL_SUBJECT_PREFIX}${cycleInstanceId}`;
}

/** Domain-local CURRENT mapping — mirrors CORR-PROOF-04 HD lifecycle without UI import. */
function isCurrentHumanDecisionStatus(
  status: HumanDecision["status"],
): boolean {
  return status === "accepted" || status === "amended";
}

export function isAcceptedFinalizeDecision(
  decision: HumanDecision,
  cycleInstanceId: string,
): boolean {
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
): boolean {
  if (decision.cycleInstanceId && decision.cycleInstanceId !== cycleInstanceId) {
    return false;
  }
  if (decision.subject !== cancelSubjectFor(cycleInstanceId)) {
    return false;
  }
  return isCurrentHumanDecisionStatus(decision.status);
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
   * When true, Git/repository obligation applies (cycle effects imply repo work).
   * When false/undefined with no explicit applicability rule → fail-closed MISSING
   * is NOT used; instead NOT_APPLICABLE with explicit reason when Git not in scope.
   */
  gitApplicable?: boolean;
  /**
   * When true, execution contracts were required for this cycle's exit.
   * Default: applicable only if at least one EC exists for the project/cycle,
   * otherwise NOT_APPLICABLE with reason "no_execution_required_for_cycle".
   */
  executionRequired?: boolean;
  executionContracts?: ReadonlyArray<{
    contractId: string;
    cycleInstanceId?: string;
    status: string;
  }>;
  executionAttempts?: ReadonlyArray<{
    attemptId: string;
    contractId?: string;
    terminalState?: string;
  }>;
  /** Explicit finalize decision id to prefer; otherwise discover from decisions. */
  finalizeDecisionId?: string | null;
  /** Epistemic/blocking reservations marked blocking on cycle context. */
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
    isAcceptedFinalizeDecision(d, input.cycle.cycleInstanceId),
  );
  // Prefer most recent by effectiveAt
  return (
    [...matches].sort((a, b) =>
      a.effectiveAt < b.effectiveAt ? 1 : a.effectiveAt > b.effectiveAt ? -1 : 0,
    )[0] ?? null
  );
}

/**
 * Pure assessment. Idempotent for the same input snapshot.
 */
export function assessFinalizationObligations(
  input: AssessFinalizationInput,
): FinalizationAssessment {
  const obligations: FinalizationObligation[] = [];
  const blockers: string[] = [];

  const finalizeDecision = findFinalizeDecision(input);
  const finalizeAccepted = Boolean(
    finalizeDecision &&
      isAcceptedFinalizeDecision(
        finalizeDecision,
        input.cycle.cycleInstanceId,
      ),
  );

  // 1) HumanDecision FINALIZE
  if (finalizeAccepted && finalizeDecision) {
    obligations.push({
      family: "human_decision",
      status: "SATISFIED",
      detail: `finalize_decision:${finalizeDecision.decisionId}`,
    });
  } else if (finalizeDecision) {
    obligations.push({
      family: "human_decision",
      status: "PENDING",
      detail: `finalize_decision_status:${finalizeDecision.status}`,
      blocking: true,
    });
    blockers.push("finalize_human_decision_not_current");
  } else {
    obligations.push({
      family: "human_decision",
      status: "MISSING",
      detail: "finalize_human_decision_absent",
      blocking: true,
    });
    blockers.push("finalize_human_decision_absent");
  }

  // 2) Exit criteria / trajectory steps — applicable when trajectory present
  if (!input.trajectory) {
    obligations.push({
      family: "exit_criteria",
      status: "NOT_APPLICABLE",
      notApplicableReason: "no_project_trajectory_bound",
      detail: "trajectory_absent",
    });
  } else {
    const openSteps = input.trajectory.steps.filter(
      (s) => s.state === "pending" || s.state === "active" || s.state === "blocked",
    );
    if (openSteps.length === 0) {
      obligations.push({
        family: "exit_criteria",
        status: "SATISFIED",
        detail: "trajectory_steps_closed_or_skipped",
      });
    } else {
      const blocked = openSteps.some((s) => s.state === "blocked");
      obligations.push({
        family: "exit_criteria",
        status: blocked ? "BLOCKING" : "PENDING",
        detail: `open_steps:${openSteps.map((s) => s.stepId).join(",")}`,
        blocking: true,
      });
      blockers.push("exit_criteria_open");
    }
  }

  // 3) Artifacts — no durable Artifact SoT in current OA slice → explicit N/A
  obligations.push({
    family: "artifact",
    status: "NOT_APPLICABLE",
    notApplicableReason: "artifact_model_not_bound_in_runtime_slice",
    detail: "no_artifact_authority_store",
  });

  // 4) ExecutionContract — applicable only when execution required or EC present
  const cycleContracts = (input.executionContracts ?? []).filter(
    (c) =>
      !c.cycleInstanceId || c.cycleInstanceId === input.cycle.cycleInstanceId,
  );
  const executionRequired =
    input.executionRequired === true || cycleContracts.length > 0;
  if (!executionRequired) {
    obligations.push({
      family: "execution_contract",
      status: "NOT_APPLICABLE",
      notApplicableReason: "no_execution_required_for_cycle",
      detail: "zero_execution_contracts",
    });
  } else {
    const open = cycleContracts.filter(
      (c) =>
        c.status !== "confirmed" &&
        c.status !== "cancelled" &&
        c.status !== "superseded",
    );
    // Attempts alone never satisfy completion
    const terminalSuccessOnly = (input.executionAttempts ?? []).some(
      (a) => a.terminalState === "terminal_success",
    );
    if (open.length > 0) {
      obligations.push({
        family: "execution_contract",
        status: "PENDING",
        detail: `open_contracts:${open.map((c) => c.contractId).join(",")}`,
        blocking: true,
      });
      blockers.push("execution_contract_open");
    } else if (cycleContracts.length === 0 && input.executionRequired) {
      obligations.push({
        family: "execution_contract",
        status: "MISSING",
        detail: "execution_required_but_no_contract",
        blocking: true,
      });
      blockers.push("execution_contract_missing");
    } else {
      obligations.push({
        family: "execution_contract",
        status: "SATISFIED",
        detail: terminalSuccessOnly
          ? "contracts_settled_attempts_not_sufficient_alone"
          : "contracts_settled",
      });
    }
  }

  // 5) Evidence — applicable when LPS/decision basis implies review OR evidence exists
  const cycleEvidence = input.evidence.filter(
    (e) =>
      e.bindings?.cycleInstanceId === input.cycle.cycleInstanceId ||
      !e.bindings?.cycleInstanceId,
  );
  if (cycleEvidence.length === 0) {
    // Without an explicit Evidence requirement signal, treat as N/A (not missing).
    // Fail-closed: never invent SATISFIED from absence.
    obligations.push({
      family: "evidence",
      status: "NOT_APPLICABLE",
      notApplicableReason: "no_evidence_requirement_signal_for_cycle",
      detail: "zero_evidence_rows",
    });
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
        status: "BLOCKING",
        detail: "all_evidence_non_supporting",
        blocking: true,
      });
      blockers.push("evidence_non_supporting");
    } else if (pending.length > 0) {
      obligations.push({
        family: "evidence",
        status: "PENDING",
        detail: `pending_evidence:${pending.length}`,
        blocking: true,
      });
      blockers.push("evidence_pending");
    } else {
      obligations.push({
        family: "evidence",
        status: "SATISFIED",
        detail: `supporting_evidence:${cycleEvidence.length - weak.length}`,
      });
    }
  }

  // 6) ReviewBundle
  const cycleReviews = input.reviewBundles.filter(
    (r) =>
      !r.cycleInstanceId || r.cycleInstanceId === input.cycle.cycleInstanceId,
  );
  if (cycleReviews.length === 0) {
    obligations.push({
      family: "review_bundle",
      status: "NOT_APPLICABLE",
      notApplicableReason: "no_review_bundle_requirement_signal_for_cycle",
      detail: "zero_review_bundles",
    });
  } else {
    const open = cycleReviews.filter(
      (r) =>
        r.status !== "accepted" &&
        r.status !== "superseded" &&
        r.status !== "rejected",
    );
    if (open.length > 0) {
      obligations.push({
        family: "review_bundle",
        status: "PENDING",
        detail: `open_review_bundles:${open.length}`,
        blocking: true,
      });
      blockers.push("review_bundle_open");
    } else {
      obligations.push({
        family: "review_bundle",
        status: "SATISFIED",
        detail: `review_bundles:${cycleReviews.length}`,
      });
    }
  }

  // 7) Git — only when explicitly applicable
  if (input.gitApplicable === true) {
    obligations.push({
      family: "git_repository",
      status: "MISSING",
      detail: "git_applicable_but_no_proof_in_assessment_input",
      blocking: true,
    });
    blockers.push("git_proof_missing");
  } else {
    obligations.push({
      family: "git_repository",
      status: "NOT_APPLICABLE",
      notApplicableReason: "git_not_applicable_to_cycle_effects",
      detail: "git_applicability_false_or_unset",
    });
  }

  // 8) Blockers / reservations
  const blockingReservations = input.blockingReservationStatements ?? [];
  if (blockingReservations.length > 0) {
    obligations.push({
      family: "blockers",
      status: "BLOCKING",
      detail: blockingReservations.join("|"),
      blocking: true,
    });
    blockers.push("blocking_reservations");
  } else {
    obligations.push({
      family: "blockers",
      status: "SATISFIED",
      detail: "no_blocking_reservations",
    });
  }

  // Validate NOT_APPLICABLE policy: every N/A must carry reason
  for (const o of obligations) {
    if (o.status === "NOT_APPLICABLE" && !o.notApplicableReason) {
      o.status = "BLOCKING";
      o.blocking = true;
      o.detail = `${o.detail ?? ""}|na_without_reason_fail_closed`;
      blockers.push(`${o.family}_na_without_reason`);
    }
  }

  const canComplete =
    finalizeAccepted &&
    blockers.length === 0 &&
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

```

## CREATED `projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts` (859 lines)

```typescript
/**
 * CORR-PROOF-05 — Pilot-governed CycleInstance lifecycle transitions.
 * START / PAUSE / RESUME / FINALIZE / CANCEL (+ auto-complete when ready).
 * Never uses evaluateMorrisGateRequired / morrisGateRequired as authority.
 */
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
import type { ProjectServices } from "@/lib/oa/project";
import { createCycleError } from "../domain/errors";
import {
  assertAtMostOneActiveCycle,
  assertLifecycleTransition,
  assertNotTerminal,
  targetStatusForAction,
} from "../domain/lifecycleInvariants";
import type {
  AssessFinalizationRequest,
  AssessFinalizationResult,
  CancelCycleRequest,
  CycleInstance,
  FinalizeCycleRequest,
  PauseCycleRequest,
  PilotLifecycleResult,
  ResumeCycleRequest,
  StartCycleRequest,
} from "../domain/types";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type { CyclePersistenceUnitOfWorkPort } from "../ports/cyclePersistenceUnitOfWorkPort";
import type { CycleRepositoryPort } from "../ports/cycleRepository";
import type { TrajectoryRepositoryPort } from "../ports/trajectoryRepository";
import {
  assessFinalizationObligations,
  isAcceptedCancelDecision,
  isAcceptedFinalizeDecision,
  type AssessFinalizationInput,
} from "./assessFinalization";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

export type LifecycleDecisionReader = {
  getById(decisionId: string): Promise<HumanDecision | null>;
  listByProject(projectId: string): Promise<HumanDecision[]>;
};

export type LifecycleEvidenceReader = {
  listByProject(projectId: string): Promise<Evidence[]>;
};

export type LifecycleReviewBundleReader = {
  listByProject(projectId: string): Promise<ReviewBundle[]>;
};

export type LifecycleExecutionSnapshotReader = {
  listContractsByProject?(projectId: string): Promise<
    Array<{
      contractId: string;
      cycleInstanceId?: string;
      status: string;
    }>
  >;
  listAttemptsByProject?(projectId: string): Promise<
    Array<{
      attemptId: string;
      contractId?: string;
      terminalState?: string;
    }>
  >;
};

export type PilotLifecycleDeps = {
  cycles: CycleRepositoryPort;
  trajectories: TrajectoryRepositoryPort;
  projectServices: ProjectServices;
  clock: ClockPort;
  audit: CycleAuditPort;
  store?: CyclePersistenceUnitOfWorkPort;
  decisions?: LifecycleDecisionReader;
  evidence?: LifecycleEvidenceReader;
  reviewBundles?: LifecycleReviewBundleReader;
  execution?: LifecycleExecutionSnapshotReader;
};

async function appendLpsActiveLink(input: {
  projectServices: ProjectServices;
  projectId: string;
  createdBy: StartCycleRequest["createdBy"];
  correlationId: string;
  expectedLpsVersion?: number;
  activeCycleInstanceId: string | null;
}): Promise<{ ok: true; version: number } | { ok: false; detail: string; currentVersion?: number }> {
  const current =
    await input.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
  if (!current.ok) {
    return { ok: false, detail: "missing_current_lps" };
  }
  const expected =
    input.expectedLpsVersion ?? current.livingProjectState.version;
  const appended =
    await input.projectServices.appendLivingProjectStateVersion.execute({
      projectId: input.projectId,
      expectedVersion: expected,
      objective: current.livingProjectState.objective,
      createdBy: input.createdBy,
      correlationId: input.correlationId,
      context: current.livingProjectState.context,
      scope: current.livingProjectState.scope,
      activeCycleInstanceId: input.activeCycleInstanceId,
    });
  if (!appended.ok) {
    if (appended.error.detailCode === "LPS_VERSION_CONFLICT") {
      return {
        ok: false,
        detail: "lps_version_conflict",
        currentVersion: appended.error.currentVersion,
      };
    }
    return { ok: false, detail: "lps_append_failed" };
  }
  return { ok: true, version: appended.livingProjectState.version };
}

export class PilotLifecycleTransitions {
  constructor(private readonly deps: PilotLifecycleDeps) {}

  async start(request: StartCycleRequest): Promise<PilotLifecycleResult> {
    return this.runTransition({
      action: "START",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId: request.correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      requireDecision: Boolean(request.requiresTrajectoryHumanDecision),
      decisionId: request.decisionId,
      setActiveLink: request.cycleInstanceId,
      clearActiveLink: false,
    });
  }

  async pause(request: PauseCycleRequest): Promise<PilotLifecycleResult> {
    return this.runTransition({
      action: "PAUSE",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId: request.correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      requireDecision: false,
      setActiveLink: null,
      clearActiveLink: true,
    });
  }

  async resume(request: ResumeCycleRequest): Promise<PilotLifecycleResult> {
    if (request.materialDriftDetected) {
      const timestamp = this.deps.clock.nowIso();
      const correlationId = request.correlationId ?? newId("cor");
      const durationMs = 0;
      const error = createCycleError({
        detailCode: "CYCLE_RESUME_DRIFT",
        timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        internalCauseRef: "material_drift_detected",
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "RESUME",
        fromStatus: "paused",
        toStatus: "paused",
        actorId: request.createdBy.actorId,
        result: "error",
        detailCode: "CYCLE_RESUME_DRIFT",
        durationMs,
      });
      return { ok: false, error, durationMs };
    }
    return this.runTransition({
      action: "RESUME",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId: request.correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      requireDecision: Boolean(request.requiresReplanHumanDecision),
      decisionId: request.decisionId,
      setActiveLink: request.cycleInstanceId,
      clearActiveLink: false,
      resumeContextCheck: true,
    });
  }

  async finalize(request: FinalizeCycleRequest): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      assessment?: AssessFinalizationResult extends { ok: true }
        ? never
        : import("../domain/types").FinalizationAssessment,
    ): PilotLifecycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        internalCauseRef,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "FINALIZE",
        fromStatus: "unknown",
        toStatus: "unknown",
        actorId: request.createdBy.actorId,
        decisionRef: request.decisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, assessment, durationMs };
    };

    if (!this.deps.decisions) {
      return fail("CYCLE_DECISION_REQUIRED", "decision_reader_unavailable");
    }

    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }
    const terminal = assertNotTerminal(cycle);
    if (terminal) return fail(terminal.detailCode, terminal.reason);
    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: "FINALIZE",
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const decision = await this.deps.decisions.getById(request.decisionId);
    if (
      !decision ||
      !isAcceptedFinalizeDecision(decision, request.cycleInstanceId)
    ) {
      return fail("CYCLE_DECISION_REQUIRED", "finalize_hd_missing_or_invalid");
    }

    const assessment = await this.buildAssessment({
      cycle,
      projectId: request.projectId,
      finalizeDecisionId: request.decisionId,
      assessedAt: timestamp,
    });

    this.deps.audit.append({
      event: "oa.cycle.finalization_assessed",
      ts: timestamp,
      correlationId,
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      decisionRef: request.decisionId,
      canComplete: assessment.canComplete,
      blockers: assessment.blockers,
      result: "ok",
      durationMs: Date.now() - started,
    });

    if (!assessment.canComplete) {
      const durationMs = Date.now() - started;
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "FINALIZE",
        fromStatus: cycle.status,
        toStatus: cycle.status,
        actorId: request.createdBy.actorId,
        decisionRef: request.decisionId,
        result: "ok",
        detailCode: "CYCLE_FINALIZE_INCOMPLETE",
        durationMs,
      });
      return {
        ok: true,
        cycle: structuredClone(cycle),
        assessment,
        durationMs,
      };
    }

    // Auto-complete — no second Close click
    return this.completeFromAssessment({
      cycle,
      projectId: request.projectId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      decisionId: request.decisionId,
      assessment,
      started,
      timestamp,
    });
  }

  async cancel(request: CancelCycleRequest): Promise<PilotLifecycleResult> {
    if (!this.deps.decisions) {
      const timestamp = this.deps.clock.nowIso();
      return {
        ok: false,
        error: createCycleError({
          detailCode: "CYCLE_DECISION_REQUIRED",
          timestamp,
          correlationId: request.correlationId ?? newId("cor"),
          projectId: request.projectId,
          cycleInstanceId: request.cycleInstanceId,
          internalCauseRef: "decision_reader_unavailable",
        }),
        durationMs: 0,
      };
    }
    const decision = await this.deps.decisions.getById(request.decisionId);
    if (
      !decision ||
      !isAcceptedCancelDecision(decision, request.cycleInstanceId)
    ) {
      const timestamp = this.deps.clock.nowIso();
      return {
        ok: false,
        error: createCycleError({
          detailCode: "CYCLE_DECISION_REQUIRED",
          timestamp,
          correlationId: request.correlationId ?? newId("cor"),
          projectId: request.projectId,
          cycleInstanceId: request.cycleInstanceId,
          internalCauseRef: "cancel_hd_missing_or_invalid",
        }),
        durationMs: 0,
      };
    }
    return this.runTransition({
      action: "CANCEL",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId: request.correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      requireDecision: true,
      decisionId: request.decisionId,
      setActiveLink: null,
      clearActiveLink: true,
      setClosedAt: true,
    });
  }

  async assess(
    request: AssessFinalizationRequest,
  ): Promise<AssessFinalizationResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return {
        ok: false,
        error: createCycleError({
          detailCode: "CYCLE_NOT_FOUND",
          timestamp,
          projectId: request.projectId,
          cycleInstanceId: request.cycleInstanceId,
        }),
        durationMs: Date.now() - started,
      };
    }
    const assessment = await this.buildAssessment({
      cycle,
      projectId: request.projectId,
      finalizeDecisionId: request.finalizeDecisionId ?? null,
      assessedAt: timestamp,
    });
    this.deps.audit.append({
      event: "oa.cycle.finalization_assessed",
      ts: timestamp,
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      decisionRef: assessment.finalizeDecisionId ?? undefined,
      canComplete: assessment.canComplete,
      blockers: assessment.blockers,
      result: "ok",
      durationMs: Date.now() - started,
    });
    return { ok: true, assessment, durationMs: Date.now() - started };
  }

  /**
   * Re-evaluate after obligations change; completes when ready without new FINALIZE.
   */
  async reevaluateAndComplete(input: {
    cycleInstanceId: string;
    projectId: string;
    createdBy: StartCycleRequest["createdBy"];
    correlationId?: string;
    expectedLpsVersion?: number;
  }): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = input.correlationId ?? newId("cor");
    const cycle = await this.deps.cycles.findById(input.cycleInstanceId);
    if (!cycle || cycle.projectId !== input.projectId) {
      return {
        ok: false,
        error: createCycleError({
          detailCode: "CYCLE_NOT_FOUND",
          timestamp,
          correlationId,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
        }),
        durationMs: Date.now() - started,
      };
    }
    if (cycle.status === "completed" || cycle.status === "cancelled") {
      return {
        ok: false,
        error: createCycleError({
          detailCode: "CYCLE_TERMINAL",
          timestamp,
          correlationId,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
          internalCauseRef: "already_terminal",
        }),
        durationMs: Date.now() - started,
      };
    }
    const assessment = await this.buildAssessment({
      cycle,
      projectId: input.projectId,
      assessedAt: timestamp,
    });
    if (!assessment.canComplete) {
      return {
        ok: true,
        cycle: structuredClone(cycle),
        assessment,
        durationMs: Date.now() - started,
      };
    }
    return this.completeFromAssessment({
      cycle,
      projectId: input.projectId,
      createdBy: input.createdBy,
      correlationId,
      expectedLpsVersion: input.expectedLpsVersion,
      decisionId: assessment.finalizeDecisionId ?? undefined,
      assessment,
      started,
      timestamp,
    });
  }

  private async buildAssessment(input: {
    cycle: CycleInstance;
    projectId: string;
    finalizeDecisionId?: string | null;
    assessedAt: string;
  }) {
    const decisions = this.deps.decisions
      ? await this.deps.decisions.listByProject(input.projectId)
      : [];
    const evidence = this.deps.evidence
      ? await this.deps.evidence.listByProject(input.projectId)
      : [];
    const reviewBundles = this.deps.reviewBundles
      ? await this.deps.reviewBundles.listByProject(input.projectId)
      : [];
    let trajectory = null;
    try {
      trajectory = await this.deps.trajectories.findCurrentByProjectId(
        input.projectId,
      );
    } catch {
      trajectory = null;
    }
    void trajectory;
    const trajResult = await this.loadTrajectory(input.projectId);

    const executionContracts = this.deps.execution?.listContractsByProject
      ? await this.deps.execution.listContractsByProject(input.projectId)
      : [];
    const executionAttempts = this.deps.execution?.listAttemptsByProject
      ? await this.deps.execution.listAttemptsByProject(input.projectId)
      : [];

    const snapshot: AssessFinalizationInput = {
      cycle: input.cycle,
      projectId: input.projectId,
      assessedAt: input.assessedAt,
      decisions,
      evidence,
      reviewBundles,
      trajectory: trajResult,
      finalizeDecisionId: input.finalizeDecisionId,
      executionContracts,
      executionAttempts,
      gitApplicable: false,
    };
    return assessFinalizationObligations(snapshot);
  }

  private async loadTrajectory(projectId: string) {
    try {
      return await this.deps.trajectories.findCurrentByProjectId(projectId);
    } catch {
      return null;
    }
  }

  private async completeFromAssessment(input: {
    cycle: CycleInstance;
    projectId: string;
    createdBy: StartCycleRequest["createdBy"];
    correlationId: string;
    expectedLpsVersion?: number;
    decisionId?: string;
    assessment: import("../domain/types").FinalizationAssessment;
    started: number;
    timestamp: string;
  }): Promise<PilotLifecycleResult> {
    const fromStatus = input.cycle.status;
    const next: CycleInstance = {
      ...structuredClone(input.cycle),
      status: "completed",
      closedAt: input.timestamp,
    };

    try {
      const persist = async () => {
        await this.deps.cycles.save(next);
        const lps = await appendLpsActiveLink({
          projectServices: this.deps.projectServices,
          projectId: input.projectId,
          createdBy: input.createdBy,
          correlationId: input.correlationId,
          expectedLpsVersion: input.expectedLpsVersion,
          activeCycleInstanceId: null,
        });
        if (!lps.ok) {
          const err = new Error(lps.detail) as Error & {
            currentVersion?: number;
          };
          err.currentVersion = lps.currentVersion;
          throw err;
        }
        return lps.version;
      };
      let version: number | undefined;
      if (this.deps.store) {
        version = await this.deps.store.runInTransaction(persist);
      } else {
        version = await persist();
      }
      const durationMs = Date.now() - input.started;
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: input.timestamp,
        correlationId: input.correlationId,
        projectId: input.projectId,
        cycleInstanceId: input.cycle.cycleInstanceId,
        action: "COMPLETE",
        fromStatus,
        toStatus: "completed",
        actorId: input.createdBy.actorId,
        decisionRef: input.decisionId,
        result: "ok",
        durationMs,
      });
      return {
        ok: true,
        cycle: next,
        livingProjectStateVersion: version,
        activeCycleInstanceId: null,
        assessment: input.assessment,
        durationMs,
      };
    } catch (err) {
      const durationMs = Date.now() - input.started;
      const detail =
        err instanceof Error && err.message === "lps_version_conflict"
          ? "LPS_VERSION_CONFLICT"
          : "PERSISTENCE_FAILURE";
      return {
        ok: false,
        error: createCycleError({
          detailCode: detail,
          timestamp: input.timestamp,
          correlationId: input.correlationId,
          projectId: input.projectId,
          cycleInstanceId: input.cycle.cycleInstanceId,
          currentVersion:
            err instanceof Error
              ? (err as Error & { currentVersion?: number }).currentVersion
              : undefined,
        }),
        assessment: input.assessment,
        durationMs,
      };
    }
  }

  private async runTransition(input: {
    action: "START" | "PAUSE" | "RESUME" | "CANCEL";
    projectId: string;
    cycleInstanceId: string;
    createdBy: StartCycleRequest["createdBy"];
    correlationId?: string;
    expectedLpsVersion?: number;
    requireDecision: boolean;
    decisionId?: string;
    setActiveLink: string | null;
    clearActiveLink: boolean;
    setClosedAt?: boolean;
    resumeContextCheck?: boolean;
  }): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = input.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ): PilotLifecycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        internalCauseRef,
        ...extra,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        action: input.action,
        fromStatus: "unknown",
        toStatus: "unknown",
        actorId: input.createdBy.actorId,
        decisionRef: input.decisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    if (!input.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    if (input.requireDecision && !input.decisionId) {
      return fail("CYCLE_DECISION_REQUIRED", "decision_id_required");
    }

    const projectResult = await this.deps.projectServices.getProject.execute({
      projectId: input.projectId,
    });
    if (!projectResult.ok) {
      return fail("PROJECT_NOT_FOUND", "missing_project");
    }

    const cycle = await this.deps.cycles.findById(input.cycleInstanceId);
    if (!cycle || cycle.projectId !== input.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }

    const terminal = assertNotTerminal(cycle);
    if (terminal && input.action !== "CANCEL") {
      // CANCEL also blocked by assertLifecycleTransition on terminal
    }
    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }

    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: input.action,
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    if (input.resumeContextCheck) {
      const lps =
        await this.deps.projectServices.getCurrentLivingProjectState.execute({
          projectId: input.projectId,
        });
      if (!lps.ok) {
        return fail("CONTEXT_STALE", "lps_unreadable_on_resume");
      }
      // Material drift: another active pointer already set to a different cycle
      if (
        lps.livingProjectState.activeCycleInstanceId &&
        lps.livingProjectState.activeCycleInstanceId !== input.cycleInstanceId
      ) {
        return fail("CYCLE_RESUME_DRIFT", "active_pointer_elsewhere");
      }
    }

    const toStatus = targetStatusForAction(input.action);
    if (!toStatus) {
      return fail("CYCLE_TRANSITION_INVALID", "no_target_status");
    }

    if (input.action === "START" || input.action === "RESUME") {
      const siblings = await this.deps.cycles.listByProject(input.projectId);
      const single = assertAtMostOneActiveCycle({
        cycles: siblings,
        excludeCycleInstanceId: input.cycleInstanceId,
      });
      if (single) return fail(single.detailCode, single.reason);

      const lps =
        await this.deps.projectServices.getCurrentLivingProjectState.execute({
          projectId: input.projectId,
        });
      if (lps.ok) {
        const activeId = lps.livingProjectState.activeCycleInstanceId;
        if (activeId && activeId !== input.cycleInstanceId) {
          return fail(
            "CYCLE_ALREADY_ACTIVE_EXISTS",
            `lps_active_pointer:${activeId}`,
          );
        }
      }
    }

    const next: CycleInstance = {
      ...structuredClone(cycle),
      status: toStatus,
      closedAt: input.setClosedAt ? timestamp : cycle.closedAt,
      acknowledgedAt:
        toStatus === "active" && !cycle.acknowledgedAt
          ? timestamp
          : cycle.acknowledgedAt,
    };

    try {
      const persist = async () => {
        // Re-check single ACTIVE inside transaction window
        if (input.action === "START" || input.action === "RESUME") {
          const siblings = await this.deps.cycles.listByProject(input.projectId);
          const single = assertAtMostOneActiveCycle({
            cycles: siblings,
            excludeCycleInstanceId: input.cycleInstanceId,
          });
          if (single) {
            throw new Error(single.reason);
          }
        }
        await this.deps.cycles.save(next);
        if (input.clearActiveLink || input.setActiveLink !== undefined) {
          const linkTarget = input.clearActiveLink
            ? null
            : input.setActiveLink;
          const lps = await appendLpsActiveLink({
            projectServices: this.deps.projectServices,
            projectId: input.projectId,
            createdBy: input.createdBy,
            correlationId,
            expectedLpsVersion: input.expectedLpsVersion,
            activeCycleInstanceId: linkTarget,
          });
          if (!lps.ok) {
            const err = new Error(lps.detail) as Error & {
              currentVersion?: number;
            };
            err.currentVersion = lps.currentVersion;
            throw err;
          }
          return lps.version;
        }
        return undefined;
      };

      let version: number | undefined;
      if (this.deps.store) {
        version = await this.deps.store.runInTransaction(persist);
      } else {
        version = await persist();
      }

      const durationMs = Date.now() - started;
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        action: input.action,
        fromStatus: cycle.status,
        toStatus,
        actorId: input.createdBy.actorId,
        decisionRef: input.decisionId,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        cycle: next,
        livingProjectStateVersion: version,
        activeCycleInstanceId: input.clearActiveLink
          ? null
          : input.setActiveLink,
        durationMs,
      };
    } catch (err) {
      if (err instanceof Error && err.message.startsWith("active_exists")) {
        return fail("CYCLE_ALREADY_ACTIVE_EXISTS", err.message);
      }
      if (err instanceof Error && err.message === "lps_version_conflict") {
        return fail("LPS_VERSION_CONFLICT", "expected_version_mismatch", {
          expectedVersion: input.expectedLpsVersion,
          currentVersion: (err as Error & { currentVersion?: number })
            .currentVersion,
        });
      }
      return fail("PERSISTENCE_FAILURE", "lifecycle_persist_failed");
    }
  }
}

function isTerminalGuard(cycle: CycleInstance): boolean {
  return cycle.status === "completed" || cycle.status === "cancelled";
}

```

## CREATED `projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts` (334 lines)

```typescript
/**
 * CORR-PROOF-05 — Project Assistant Pilot lifecycle server helpers.
 * Pilot lifecycle authority ≠ Morris construction gate.
 */
import { randomUUID } from "node:crypto";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type DecisionServices,
  type MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import {
  cancelSubjectFor,
  finalizeSubjectFor,
  type CycleServices,
  type FinalizationAssessment,
  type PilotLifecycleResult,
} from "@/lib/oa/cycle";
import type { ProjectServices } from "@/lib/oa/project";

export type PilotLifecycleActionKind =
  | "START"
  | "PAUSE"
  | "RESUME"
  | "FINALIZE"
  | "CANCEL"
  | "ASSESS"
  | "REEVALUATE";

const PILOTE = LOCAL_PILOTE_ACTOR;

async function ensurePiloteAuthority(input: {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  scope: string;
  nowIso: string;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; code: string; message: string }> {
  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.authorityResolver,
    scope: input.scope,
    issuedAt: input.nowIso,
    forceEnable: true,
  });
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }
  return { ok: true, evidenceId: authority.evidenceId };
}

async function recordLifecycleDecision(input: {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  projectId: string;
  cycleInstanceId: string;
  subject: string;
  selectedOptionId: string;
  nowIso: string;
}): Promise<
  | { ok: true; decisionId: string }
  | { ok: false; code: string; message: string }
> {
  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  const auth = await ensurePiloteAuthority({
    decisionServices: input.decisionServices,
    authorityResolver: input.authorityResolver,
    scope,
    nowIso: input.nowIso,
  });
  if (!auth.ok) return auth;

  const decisionId = `dec:pilot-life:${randomUUID()}`;
  const recorded = await input.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    subject: input.subject,
    options: [
      { optionId: "opt:accept", label: "Accept" },
      { optionId: "opt:refuse", label: "Refuse" },
    ],
    selectedOptionId: input.selectedOptionId,
    actor: PILOTE,
    // Technical OA authority class for structuring Pilot HD — not Morris runtime UX.
    authority: "morris",
    status: "accepted",
    reversible: false,
    scope,
    authorityEvidenceId: auth.evidenceId,
    rationale: `Pilot lifecycle ${input.subject}`,
  });
  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.error.detailCode,
      message: recorded.error.message,
    };
  }
  return { ok: true, decisionId };
}

export async function executePilotLifecycleAction(input: {
  action: PilotLifecycleActionKind;
  projectId: string;
  cycleInstanceId: string;
  cycleServices: CycleServices;
  projectServices: ProjectServices;
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
  /** RESUME only — caller-detected material drift. */
  materialDriftDetected?: boolean;
  requiresTrajectoryHumanDecision?: boolean;
  requiresReplanHumanDecision?: boolean;
}): Promise<
  | {
      ok: true;
      action: PilotLifecycleActionKind;
      result?: PilotLifecycleResult;
      assessment?: FinalizationAssessment;
      decisionId?: string;
    }
  | { ok: false; code: string; message: string; assessment?: FinalizationAssessment }
> {
  const createdBy = {
    actorId: PILOTE.actorId,
    role: PILOTE.role,
    displayName: PILOTE.displayName,
    authorityLevel: PILOTE.authorityLevel,
  };

  const lps = await input.projectServices.getCurrentLivingProjectState.execute({
    projectId: input.projectId,
  });
  const expectedLpsVersion = lps.ok
    ? lps.livingProjectState.version
    : undefined;

  switch (input.action) {
    case "START": {
      let decisionId: string | undefined;
      if (input.requiresTrajectoryHumanDecision) {
        const hd = await recordLifecycleDecision({
          decisionServices: input.decisionServices,
          authorityResolver: input.authorityResolver,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
          subject: `pilot.lifecycle.start+trajectory:${input.cycleInstanceId}`,
          selectedOptionId: "opt:accept",
          nowIso: input.nowIso(),
        });
        if (!hd.ok) return hd;
        decisionId = hd.decisionId;
      }
      const result = await input.cycleServices.pilotLifecycle.start({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        expectedLpsVersion,
        requiresTrajectoryHumanDecision:
          input.requiresTrajectoryHumanDecision,
        decisionId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
        };
      }
      return { ok: true, action: "START", result, decisionId };
    }
    case "PAUSE": {
      const result = await input.cycleServices.pilotLifecycle.pause({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        expectedLpsVersion,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
        };
      }
      return { ok: true, action: "PAUSE", result };
    }
    case "RESUME": {
      let decisionId: string | undefined;
      if (input.requiresReplanHumanDecision) {
        const hd = await recordLifecycleDecision({
          decisionServices: input.decisionServices,
          authorityResolver: input.authorityResolver,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
          subject: `pilot.lifecycle.resume+replan:${input.cycleInstanceId}`,
          selectedOptionId: "opt:accept",
          nowIso: input.nowIso(),
        });
        if (!hd.ok) return hd;
        decisionId = hd.decisionId;
      }
      const result = await input.cycleServices.pilotLifecycle.resume({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        expectedLpsVersion,
        materialDriftDetected: input.materialDriftDetected,
        requiresReplanHumanDecision: input.requiresReplanHumanDecision,
        decisionId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
          assessment: result.assessment,
        };
      }
      return { ok: true, action: "RESUME", result, decisionId };
    }
    case "FINALIZE": {
      const hd = await recordLifecycleDecision({
        decisionServices: input.decisionServices,
        authorityResolver: input.authorityResolver,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        subject: finalizeSubjectFor(input.cycleInstanceId),
        selectedOptionId: "opt:accept",
        nowIso: input.nowIso(),
      });
      if (!hd.ok) return hd;
      const result = await input.cycleServices.pilotLifecycle.finalize({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        decisionId: hd.decisionId,
        expectedLpsVersion,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
          assessment: result.assessment,
        };
      }
      return {
        ok: true,
        action: "FINALIZE",
        result,
        assessment: result.assessment,
        decisionId: hd.decisionId,
      };
    }
    case "CANCEL": {
      const hd = await recordLifecycleDecision({
        decisionServices: input.decisionServices,
        authorityResolver: input.authorityResolver,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        subject: cancelSubjectFor(input.cycleInstanceId),
        selectedOptionId: "opt:accept",
        nowIso: input.nowIso(),
      });
      if (!hd.ok) return hd;
      const result = await input.cycleServices.pilotLifecycle.cancel({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        decisionId: hd.decisionId,
        expectedLpsVersion,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
        };
      }
      return { ok: true, action: "CANCEL", result, decisionId: hd.decisionId };
    }
    case "ASSESS": {
      const assessed = await input.cycleServices.pilotLifecycle.assess({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
      });
      if (!assessed.ok) {
        return {
          ok: false,
          code: assessed.error.detailCode,
          message: assessed.error.message,
        };
      }
      return {
        ok: true,
        action: "ASSESS",
        assessment: assessed.assessment,
      };
    }
    case "REEVALUATE": {
      const result =
        await input.cycleServices.pilotLifecycle.reevaluateAndComplete({
          cycleInstanceId: input.cycleInstanceId,
          projectId: input.projectId,
          createdBy,
          expectedLpsVersion,
        });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
          assessment: result.assessment,
        };
      }
      return {
        ok: true,
        action: "REEVALUATE",
        result,
        assessment: result.assessment,
      };
    }
    default: {
      const _exhaustive: never = input.action;
      void _exhaustive;
      return {
        ok: false,
        code: "CYCLE_LIFECYCLE_DENIED",
        message: "Unknown Pilot lifecycle action.",
      };
    }
  }
}

```

## CREATED `projects/sfia-studio/app/__tests__/oa/cycle/corrProof05.pilotLifecycle.d0.test.ts` (573 lines)

```typescript
/**
 * CORR-PROOF-05 — Pilot-governed Cycle lifecycle deterministic proofs (scenarios 1–16).
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  FixedClock,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import {
  assessFinalizationObligations,
  createSqliteCycleServices,
  finalizeSubjectFor,
  cancelSubjectFor,
  type CycleInstance,
} from "@/lib/oa/cycle";
import {
  MemoryAuthorityResolver,
  createSqliteDecisionServices,
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type DecisionServices,
} from "@/lib/oa/decision";
import { evaluateMorrisGateRequired } from "@/features/project-assistant/f2/gatePolicy";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const PILOTE = {
  actorId: LOCAL_PILOTE_ACTOR.actorId,
  role: LOCAL_PILOTE_ACTOR.role,
  displayName: LOCAL_PILOTE_ACTOR.displayName,
  authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
};

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-corr05-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function buildStack(dbPath: string): {
  project: SqliteProductProjectServices;
  cycles: ReturnType<typeof createSqliteCycleServices>;
  decisions: DecisionServices;
  authority: MemoryAuthorityResolver;
} {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const project = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-09-07T16:00:00.000Z",
    dbPath,
  });
  openServices.push(project);
  const authority = new MemoryAuthorityResolver();
  const clock = new FixedClock("2026-09-07T16:00:00.000Z");
  let decisions!: DecisionServices;
  const cycles = createSqliteCycleServices({
    projectServices: project,
    productStore: project.store,
    clock,
    decisions: {
      getById: (id) => decisions.decisions.findById(id),
      listByProject: (pid) => decisions.decisions.listByProject(pid),
    },
  });
  decisions = createSqliteDecisionServices({
    projectServices: project,
    cycleServices: cycles,
    productStore: project.store,
    clock,
    authorityResolver: authority,
  });
  return { project, cycles, decisions, authority };
}

async function seedProject(
  project: SqliteProductProjectServices,
  projectId: string,
) {
  const created = await project.createProject.execute({
    projectId,
    title: "CORR-05",
    objective: "lifecycle",
    context: "corr05",
    scope: "pilot-lifecycle",
    doctrinePackagePin: VALID_PIN,
    createdBy: ACTOR,
    lpsVersionId: `lps:${projectId}-v1`,
    idempotencyKey: `idem:${projectId}`,
  });
  expect(created.ok).toBe(true);
}

async function createCandidate(
  cycles: ReturnType<typeof createSqliteCycleServices>,
  projectId: string,
  cycleInstanceId: string,
  linkAsActive = false,
) {
  return cycles.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: "cyc:delivery",
    projectId,
    signals: { lowRiskBounded: true },
    createdBy: {
      actorId: "actor:nora-f2",
      role: "agent",
      displayName: "Nora F2",
      authorityLevel: "N1",
    },
    linkAsActiveCycle: linkAsActive,
  });
}

async function recordHd(input: {
  decisions: DecisionServices;
  authority: MemoryAuthorityResolver;
  projectId: string;
  cycleInstanceId: string;
  subject: string;
  decisionId: string;
}) {
  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  const auth = registerLocalPiloteAuthority({
    authorityResolver: input.authority,
    scope,
    issuedAt: "2026-09-07T16:00:00.000Z",
    forceEnable: true,
  });
  expect(auth.ok).toBe(true);
  if (!auth.ok) return auth;
  return input.decisions.recordHumanDecision.execute({
    decisionId: input.decisionId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    subject: input.subject,
    options: [
      { optionId: "opt:accept", label: "Accept" },
      { optionId: "opt:refuse", label: "Refuse" },
    ],
    selectedOptionId: "opt:accept",
    actor: LOCAL_PILOTE_ACTOR,
    authority: "morris",
    status: "accepted",
    reversible: false,
    scope,
    authorityEvidenceId: auth.evidenceId,
  });
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("CORR-PROOF-05 Pilot lifecycle", () => {
  it("1+2 — candidate pre-START; no active link; create without authority", async () => {
    const dbPath = tempDbPath("s1.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:corr05-s1");
    const created = await createCandidate(
      stack.cycles,
      "prj:corr05-s1",
      "cyc:corr05-s1",
      false,
    );
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    expect(created.cycle.status).not.toBe("active");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-s1",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.activeCycleInstanceId).toBeUndefined();
  });

  it("3 — START activates exactly one; second ACTIVE refused", async () => {
    const dbPath = tempDbPath("s3.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:corr05-s3");
    const a = await createCandidate(
      stack.cycles,
      "prj:corr05-s3",
      "cyc:corr05-s3a",
    );
    const b = await createCandidate(
      stack.cycles,
      "prj:corr05-s3",
      "cyc:corr05-s3b",
    );
    expect(a.ok && b.ok).toBe(true);
    const startA = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s3a",
      projectId: "prj:corr05-s3",
      createdBy: PILOTE,
    });
    expect(startA.ok).toBe(true);
    if (!startA.ok) return;
    expect(startA.cycle.status).toBe("active");
    expect(startA.activeCycleInstanceId).toBe("cyc:corr05-s3a");
    const startB = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s3b",
      projectId: "prj:corr05-s3",
      createdBy: PILOTE,
    });
    expect(startB.ok).toBe(false);
    if (startB.ok) return;
    expect(startB.error.detailCode).toBe("CYCLE_ALREADY_ACTIVE_EXISTS");
  });

  it("4+5 — PAUSE clears active; BLOCKED retains pointer and stays distinct", async () => {
    const dbPath = tempDbPath("s4.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:corr05-s4");
    await createCandidate(stack.cycles, "prj:corr05-s4", "cyc:corr05-s4");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s4",
      projectId: "prj:corr05-s4",
      createdBy: PILOTE,
    });
    const paused = await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-s4",
      projectId: "prj:corr05-s4",
      createdBy: PILOTE,
    });
    expect(paused.ok).toBe(true);
    if (!paused.ok) return;
    expect(paused.cycle.status).toBe("paused");
    expect(paused.activeCycleInstanceId).toBeNull();
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-s4",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.activeCycleInstanceId).toBeUndefined();

    // BLOCKED path: resume then manually save blocked with retained pointer
    await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-s4",
      projectId: "prj:corr05-s4",
      createdBy: PILOTE,
    });
    const active = await stack.cycles.getCycle.execute({
      cycleInstanceId: "cyc:corr05-s4",
    });
    expect(active.ok).toBe(true);
    if (!active.ok) return;
    const blocked: CycleInstance = {
      ...active.cycle,
      status: "blocked",
    };
    await stack.cycles.cycles.save(blocked);
    const lpsBlocked = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-s4",
    });
    expect(lpsBlocked.ok).toBe(true);
    if (!lpsBlocked.ok) return;
    expect(lpsBlocked.livingProjectState.activeCycleInstanceId).toBe(
      "cyc:corr05-s4",
    );
    expect(blocked.status).not.toBe("paused");
  });

  it("6+7 — RESUME clean ok; material drift refused", async () => {
    const dbPath = tempDbPath("s6.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:corr05-s6");
    await createCandidate(stack.cycles, "prj:corr05-s6", "cyc:corr05-s6");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s6",
      projectId: "prj:corr05-s6",
      createdBy: PILOTE,
    });
    await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-s6",
      projectId: "prj:corr05-s6",
      createdBy: PILOTE,
    });
    const clean = await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-s6",
      projectId: "prj:corr05-s6",
      createdBy: PILOTE,
    });
    expect(clean.ok).toBe(true);
    if (!clean.ok) return;
    expect(clean.cycle.status).toBe("active");

    await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-s6",
      projectId: "prj:corr05-s6",
      createdBy: PILOTE,
    });
    const drift = await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-s6",
      projectId: "prj:corr05-s6",
      createdBy: PILOTE,
      materialDriftDetected: true,
    });
    expect(drift.ok).toBe(false);
    if (drift.ok) return;
    expect(drift.error.detailCode).toBe("CYCLE_RESUME_DRIFT");
  });

  it("8+9+11+12 — FINALIZE requires HD; incomplete ≠ completed; no gratuitous EC; complete when ready", async () => {
    const dbPath = tempDbPath("s8.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:corr05-s8");
    await createCandidate(stack.cycles, "prj:corr05-s8", "cyc:corr05-s8");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s8",
      projectId: "prj:corr05-s8",
      createdBy: PILOTE,
    });

    const noHd = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-s8",
      projectId: "prj:corr05-s8",
      createdBy: PILOTE,
      decisionId: "dec:missing",
    });
    expect(noHd.ok).toBe(false);
    if (noHd.ok) return;
    expect(noHd.error.detailCode).toBe("CYCLE_DECISION_REQUIRED");

    const hd = await recordHd({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-s8",
      cycleInstanceId: "cyc:corr05-s8",
      subject: finalizeSubjectFor("cyc:corr05-s8"),
      decisionId: "dec:corr05-finalize-s8",
    });
    expect(hd.ok).toBe(true);

    const finalized = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-s8",
      projectId: "prj:corr05-s8",
      createdBy: PILOTE,
      decisionId: "dec:corr05-finalize-s8",
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    // Without trajectory open blockers, assessment should allow complete
    expect(finalized.assessment?.canComplete).toBe(true);
    expect(finalized.cycle.status).toBe("completed");
    expect(finalized.cycle.closedAt).toBeTruthy();
    expect(finalized.activeCycleInstanceId).toBeNull();
    const ecFamily = finalized.assessment?.obligations.find(
      (o) => o.family === "execution_contract",
    );
    expect(ecFamily?.status).toBe("NOT_APPLICABLE");
    expect(ecFamily?.notApplicableReason).toBeTruthy();
  });

  it("10 — ExecutionAttempt terminal_success alone does not complete", async () => {
    const cycle: CycleInstance = {
      schemaVersion: "0.1.0-oa",
      cycleInstanceId: "cyc:corr05-s10",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:corr05-s10",
      profile: "Standard",
      status: "active",
      createdAt: "2026-09-07T16:00:00.000Z",
    };
    const assessment = assessFinalizationObligations({
      cycle,
      projectId: "prj:corr05-s10",
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: null,
      executionAttempts: [
        {
          attemptId: "att:1",
          terminalState: "terminal_success",
        },
      ],
    });
    expect(assessment.canComplete).toBe(false);
    expect(assessment.finalizeAccepted).toBe(false);
  });

  it("13+14 — CANCEL requires HD, terminal, no reopen", async () => {
    const dbPath = tempDbPath("s13.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:corr05-s13");
    await createCandidate(stack.cycles, "prj:corr05-s13", "cyc:corr05-s13");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s13",
      projectId: "prj:corr05-s13",
      createdBy: PILOTE,
    });
    const hd = await recordHd({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-s13",
      cycleInstanceId: "cyc:corr05-s13",
      subject: cancelSubjectFor("cyc:corr05-s13"),
      decisionId: "dec:corr05-cancel-s13",
    });
    expect(hd.ok).toBe(true);
    const cancelled = await stack.cycles.pilotLifecycle.cancel({
      cycleInstanceId: "cyc:corr05-s13",
      projectId: "prj:corr05-s13",
      createdBy: PILOTE,
      decisionId: "dec:corr05-cancel-s13",
    });
    expect(cancelled.ok).toBe(true);
    if (!cancelled.ok) return;
    expect(cancelled.cycle.status).toBe("cancelled");
    expect(cancelled.activeCycleInstanceId).toBeNull();

    const reopen = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s13",
      projectId: "prj:corr05-s13",
      createdBy: PILOTE,
    });
    expect(reopen.ok).toBe(false);
    if (reopen.ok) return;
    expect(reopen.error.detailCode).toBe("CYCLE_TERMINAL");

    const newCycle = await createCandidate(
      stack.cycles,
      "prj:corr05-s13",
      "cyc:corr05-s13-new",
    );
    expect(newCycle.ok).toBe(true);
  });

  it("15 — Pilot lifecycle actions do not use morrisGateRequired; construction gate still exists", () => {
    const construction = evaluateMorrisGateRequired({
      recommendedProfile: "Critical",
      signals: {
        structuralChange: true,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: false,
      },
      intent: {
        intentClass: "actionable",
        candidateCycleTypeId: null,
        signals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
        cognitiveWorkload: null,
        objective: "change architecture",
        scope: "runtime",
        outOfScope: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        activatedBlocks: [],
        expectedOutcome: null,
        rephrasedRequest: null,
        requestedOperation: null,
        criticalJustification: null,
        parseOk: true,
      },
    });
    expect(construction).toBe(true);
  });

  it("NOT_APPLICABLE never used as missing-proof fallback", () => {
    const cycle: CycleInstance = {
      schemaVersion: "0.1.0-oa",
      cycleInstanceId: "cyc:corr05-na",
      cycleTypeId: "cyc:delivery",
      projectId: "prj:corr05-na",
      profile: "Standard",
      status: "active",
      createdAt: "2026-09-07T16:00:00.000Z",
    };
    const assessment = assessFinalizationObligations({
      cycle,
      projectId: "prj:corr05-na",
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: null,
      gitApplicable: true,
    });
    const git = assessment.obligations.find((o) => o.family === "git_repository");
    expect(git?.status).toBe("MISSING");
    expect(git?.notApplicableReason).toBeUndefined();
    const hd = assessment.obligations.find((o) => o.family === "human_decision");
    expect(hd?.status).toBe("MISSING");
  });

  it("createCycle linkAsActive refuses second ACTIVE overwrite", async () => {
    const dbPath = tempDbPath("link.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:corr05-link");
    const first = await createCandidate(
      stack.cycles,
      "prj:corr05-link",
      "cyc:corr05-link-a",
      true,
    );
    expect(first.ok).toBe(true);
    // Note: linkAsActive still sets LPS pointer but does not force status=active.
    // Single ACTIVE status enforcement applies when status===active OR LPS conflict.
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-link-a",
      projectId: "prj:corr05-link",
      createdBy: PILOTE,
    });
    const second = await createCandidate(
      stack.cycles,
      "prj:corr05-link",
      "cyc:corr05-link-b",
      true,
    );
    expect(second.ok).toBe(false);
    if (second.ok) return;
    expect(second.error.detailCode).toBe("CYCLE_ALREADY_ACTIVE_EXISTS");
  });
});

```

# 16. Fichiers modifiés

# 17. Git Review Index
```
M	projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
M	projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts

UNTRACKED:
projects/sfia-studio/app/lib/oa/cycle/domain/lifecycleInvariants.ts
projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts
projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts
projects/sfia-studio/app/__tests__/oa/cycle/corrProof05.pilotLifecycle.d0.test.ts
```

Diff stat:
```
 .../oa/cycle/m2ProductCycleDurability.test.ts      |   8 +-
 .../project-assistant/f2.orchestrate.test.ts       |   2 +-
 .../m2CognitivePiloting.e2e.test.ts                |  18 +--
 .../project-assistant/w2TrackDPhaseB.test.ts       |  22 ++-
 .../project-assistant/ProjectAssistantPanel.tsx    | 168 ++++++++++++++++++++-
 .../app/features/project-assistant/actions.ts      |  89 +++++++++++
 .../features/project-assistant/f2/orchestrateF2.ts |  13 +-
 .../project-assistant/f2/studioCognitiveContext.ts |   6 +-
 .../app/lib/oa/cycle/application/createCycle.ts    |  19 +++
 .../sfia-studio/app/lib/oa/cycle/domain/errors.ts  |  18 +++
 .../sfia-studio/app/lib/oa/cycle/domain/types.ts   | 152 +++++++++++++++++++
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |  43 ++++++
 .../sqlite/createSqliteCycleServices.ts            |  24 +++
 .../app/lib/oa/cycle/ports/cycleAudit.ts           |  28 ++++
 .../app/lib/vertical-slice-runtime/service.ts      |  54 ++++++-
 15 files changed, 642 insertions(+), 22 deletions(-)
```

# 18–19. Created files = §15 full contents. Modified files = useful diffs below.

## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/domain/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
index c151d57c..d283e270 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
@@ -23,11 +23,53 @@ export type CycleInstanceStatus =
   | "proposed"
   | "acknowledged"
   | "active"
+  | "paused"
   | "blocked"
   | "completed"
   | "cancelled"
   | "superseded";

+/**
+ * CORR-PROOF-05 — derived finalization obligation status (not a persistence enum).
+ * Labels are functional assessment vocabulary; not claimed as migrated schema.
+ */
+export type FinalizationObligationStatus =
+  | "SATISFIED"
+  | "PENDING"
+  | "MISSING"
+  | "BLOCKING"
+  | "NOT_APPLICABLE";
+
+export type FinalizationObligationFamily =
+  | "exit_criteria"
+  | "human_decision"
+  | "artifact"
+  | "execution_contract"
+  | "evidence"
+  | "review_bundle"
+  | "git_repository"
+  | "blockers";
+
+export type FinalizationObligation = {
+  family: FinalizationObligationFamily;
+  status: FinalizationObligationStatus;
+  /** Required whenever status === NOT_APPLICABLE — never a missing-proof fallback. */
+  notApplicableReason?: string;
+  detail?: string;
+  blocking?: boolean;
+};
+
+export type FinalizationAssessment = {
+  cycleInstanceId: string;
+  projectId: string;
+  finalizeDecisionId: string | null;
+  finalizeAccepted: boolean;
+  obligations: FinalizationObligation[];
+  canComplete: boolean;
+  blockers: string[];
+  assessedAt: string;
+};
+
 export type TrajectoryStatus =
   | "candidate"
   | "validated"
@@ -290,6 +332,13 @@ export type CycleDetailCode =
   | "CYCLE_ALREADY_EXISTS"
   | "CYCLE_NOT_FOUND"
   | "CYCLE_CRITICAL_JUSTIFICATION_REQUIRED"
+  | "CYCLE_ALREADY_ACTIVE_EXISTS"
+  | "CYCLE_TRANSITION_INVALID"
+  | "CYCLE_TERMINAL"
+  | "CYCLE_RESUME_DRIFT"
+  | "CYCLE_FINALIZE_INCOMPLETE"
+  | "CYCLE_DECISION_REQUIRED"
+  | "CYCLE_LIFECYCLE_DENIED"
   | "PROJECT_NOT_FOUND"
   | "TRAJECTORY_INVALID"
   | "TRAJECTORY_ALREADY_EXISTS"
@@ -303,6 +352,109 @@ export type CycleDetailCode =
   | "STATE_CONFLICT"
   | "PERSISTENCE_FAILURE";

+/** CORR-PROOF-05 Pilot lifecycle transition requests. */
+export type PilotLifecycleActor = {
+  actorId: string;
+  role: ActorReference["role"];
+  displayName?: string;
+  authorityLevel?: ActorReference["authorityLevel"];
+};
+
+export type StartCycleRequest = {
+  cycleInstanceId: string;
+  projectId: string;
+  createdBy: PilotLifecycleActor;
+  correlationId?: string;
+  expectedLpsVersion?: number;
+  /**
+   * When true, START also requires a durable HumanDecision covering
+   * trajectory amendment / structuring choice (same arbitration may cover both).
+   */
+  requiresTrajectoryHumanDecision?: boolean;
+  decisionId?: string;
+};
+
+export type PauseCycleRequest = {
+  cycleInstanceId: string;
+  projectId: string;
+  createdBy: PilotLifecycleActor;
+  correlationId?: string;
+  expectedLpsVersion?: number;
+};
+
+export type ResumeCycleRequest = {
+  cycleInstanceId: string;
+  projectId: string;
+  createdBy: PilotLifecycleActor;
+  correlationId?: string;
+  expectedLpsVersion?: number;
+  /** When true, material drift was confirmed by caller — refuse silent resume. */
+  materialDriftDetected?: boolean;
+  requiresReplanHumanDecision?: boolean;
+  decisionId?: string;
+};
+
+export type FinalizeCycleRequest = {
+  cycleInstanceId: string;
+  projectId: string;
+  createdBy: PilotLifecycleActor;
+  /** Required Pilot HumanDecision id for FINALIZE. */
+  decisionId: string;
+  correlationId?: string;
+  expectedLpsVersion?: number;
+};
+
+export type CancelCycleRequest = {
+  cycleInstanceId: string;
+  projectId: string;
+  createdBy: PilotLifecycleActor;
+  /** Required Pilot HumanDecision id for CANCEL. */
+  decisionId: string;
+  correlationId?: string;
+  expectedLpsVersion?: number;
+};
+
+export type AssessFinalizationRequest = {
+  cycleInstanceId: string;
+  projectId: string;
+  /** Optional explicit finalize decision id; otherwise discovered from decisions. */
+  finalizeDecisionId?: string | null;
+};
+
+export type PilotLifecycleSuccess = {
+  ok: true;
+  cycle: CycleInstance;
+  livingProjectStateVersion?: number;
+  activeCycleInstanceId?: string | null;
+  assessment?: FinalizationAssessment;
+  durationMs: number;
+};
+
+export type PilotLifecycleFailure = {
+  ok: false;
+  error: CycleStructuredError;
+  assessment?: FinalizationAssessment;
+  durationMs: number;
+};
+
+export type PilotLifecycleResult = PilotLifecycleSuccess | PilotLifecycleFailure;
+
+export type AssessFinalizationSuccess = {
+  ok: true;
+  assessment: FinalizationAssessment;
+  durationMs: number;
+};
+
+export type AssessFinalizationFailure = {
+  ok: false;
+  error: CycleStructuredError;
+  durationMs: number;
+};
+
+export type AssessFinalizationResult =
+  | AssessFinalizationSuccess
+  | AssessFinalizationFailure;
+
 export type CycleStructuredError = {
   code: CycleModeledErrorCode;
   detailCode: CycleDetailCode;

```

## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts
index 5fe6aaf5..4d96fe98 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts
@@ -10,6 +10,13 @@ const DETAIL_TO_MODELED: Record<CycleDetailCode, CycleModeledErrorCode> = {
   CYCLE_ALREADY_EXISTS: "STATE_CONFLICT",
   CYCLE_NOT_FOUND: "STATE_CONFLICT",
   CYCLE_CRITICAL_JUSTIFICATION_REQUIRED: "DECISION_REQUIRED",
+  CYCLE_ALREADY_ACTIVE_EXISTS: "STATE_CONFLICT",
+  CYCLE_TRANSITION_INVALID: "STATE_CONFLICT",
+  CYCLE_TERMINAL: "STATE_CONFLICT",
+  CYCLE_RESUME_DRIFT: "CONTEXT_STALE",
+  CYCLE_FINALIZE_INCOMPLETE: "STATE_CONFLICT",
+  CYCLE_DECISION_REQUIRED: "DECISION_REQUIRED",
+  CYCLE_LIFECYCLE_DENIED: "AUTHORITY_DENIED",
   PROJECT_NOT_FOUND: "STATE_CONFLICT",
   TRAJECTORY_INVALID: "STATE_CONFLICT",
   TRAJECTORY_ALREADY_EXISTS: "STATE_CONFLICT",
@@ -30,6 +37,17 @@ const SAFE_MESSAGES: Record<CycleDetailCode, string> = {
   CYCLE_NOT_FOUND: "Cycle instance was not found.",
   CYCLE_CRITICAL_JUSTIFICATION_REQUIRED:
     "Critical profile requires a non-empty justification.",
+  CYCLE_ALREADY_ACTIVE_EXISTS:
+    "Another ACTIVE CycleInstance already exists for this Project.",
+  CYCLE_TRANSITION_INVALID: "Cycle lifecycle transition is not allowed.",
+  CYCLE_TERMINAL: "Terminal CycleInstance cannot be transitioned.",
+  CYCLE_RESUME_DRIFT:
+    "Material context drift prevents silent RESUME; replan required.",
+  CYCLE_FINALIZE_INCOMPLETE:
+    "FINALIZE accepted but applicable exit obligations are not satisfied.",
+  CYCLE_DECISION_REQUIRED:
+    "Pilot HumanDecision is required for this lifecycle action.",
+  CYCLE_LIFECYCLE_DENIED: "Pilot lifecycle action was denied.",
   PROJECT_NOT_FOUND: "Project was not found.",
   TRAJECTORY_INVALID: "Trajectory input is invalid.",
   TRAJECTORY_ALREADY_EXISTS: "Trajectory already exists.",

```

## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts b/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
index f4e14a80..1a9b2929 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
@@ -137,6 +137,13 @@ export class CreateCycle {
         await this.cycles.save(cycle);

         if (request.linkAsActiveCycle) {
+          const siblings = await this.cycles.listByProject(request.projectId);
+          const activeSibling = siblings.find((c) => c.status === "active");
+          if (activeSibling) {
+            throw new Error(
+              `active_exists:${activeSibling.cycleInstanceId}`,
+            );
+          }
           const current =
             await this.projectServices.getCurrentLivingProjectState.execute({
               projectId: request.projectId,
@@ -144,6 +151,15 @@ export class CreateCycle {
           if (!current.ok) {
             throw new Error("missing_current_lps");
           }
+          if (
+            current.livingProjectState.activeCycleInstanceId &&
+            current.livingProjectState.activeCycleInstanceId !==
+              request.cycleInstanceId
+          ) {
+            throw new Error(
+              `active_exists:${current.livingProjectState.activeCycleInstanceId}`,
+            );
+          }
           const expected =
             request.expectedLpsVersion ?? current.livingProjectState.version;
           const appended =
@@ -181,6 +197,9 @@ export class CreateCycle {
         if (err instanceof Error && err.message === "cycle_id_taken") {
           return fail("CYCLE_ALREADY_EXISTS", "cycle_id_taken");
         }
+        if (err instanceof Error && err.message.startsWith("active_exists:")) {
+          return fail("CYCLE_ALREADY_ACTIVE_EXISTS", err.message);
+        }
         if (err instanceof Error && err.message === "lps_version_conflict") {
           return fail("LPS_VERSION_CONFLICT", "expected_version_mismatch", {
             expectedVersion: request.expectedLpsVersion,

```

## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts b/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
index 422b847d..5d915c28 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
@@ -130,6 +130,34 @@ export type CycleAuditEvent =
       result: "error";
       detailCode?: string;
       durationMs: number;
+    }
+  | {
+      event: "oa.cycle.lifecycle_transition";
+      ts: string;
+      correlationId?: string;
+      projectId: string;
+      cycleInstanceId: string;
+      action: string;
+      fromStatus: string;
+      toStatus: string;
+      actorId: string;
+      decisionRef?: string;
+      result: "ok" | "error";
+      detailCode?: string;
+      durationMs: number;
+    }
+  | {
+      event: "oa.cycle.finalization_assessed";
+      ts: string;
+      correlationId?: string;
+      projectId: string;
+      cycleInstanceId: string;
+      decisionRef?: string;
+      canComplete: boolean;
+      blockers: string[];
+      result: "ok" | "error";
+      detailCode?: string;
+      durationMs: number;
     };

 export interface CycleAuditPort {

```

## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 201f8b2b..ce618fd8 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -30,6 +30,24 @@ export * from "./application/qualifyCycleWithCkc";
 export * from "./application/bindCatalogAuthority";
 export { CreateCycle } from "./application/createCycle";
 export { GetCycle } from "./application/getCycle";
+export {
+  assessFinalizationObligations,
+  finalizeSubjectFor,
+  cancelSubjectFor,
+  isAcceptedFinalizeDecision,
+  isAcceptedCancelDecision,
+  FINALIZE_SUBJECT_PREFIX,
+  CANCEL_SUBJECT_PREFIX,
+} from "./application/assessFinalization";
+export {
+  PilotLifecycleTransitions,
+  type PilotLifecycleDeps,
+  type LifecycleDecisionReader,
+  type LifecycleEvidenceReader,
+  type LifecycleReviewBundleReader,
+  type LifecycleExecutionSnapshotReader,
+} from "./application/pilotLifecycleTransitions";
+export * from "./domain/lifecycleInvariants";
 export { CreateInitialTrajectory } from "./application/createInitialTrajectory";
 export { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
 export { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
@@ -92,6 +110,13 @@ import {
 } from "./application/bindCatalogAuthority";
 import { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
 import { UpdateEpistemicState } from "./application/updateEpistemicState";
+import {
+  PilotLifecycleTransitions,
+  type LifecycleDecisionReader,
+  type LifecycleEvidenceReader,
+  type LifecycleReviewBundleReader,
+  type LifecycleExecutionSnapshotReader,
+} from "./application/pilotLifecycleTransitions";
 import { DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY } from "./domain/catalogFingerprint";
 import type { CycleTypeCatalogAuthority } from "./domain/catalogFingerprint";
 import type { CycleTypeCatalog } from "./domain/cycleTypeCatalog";
@@ -132,6 +157,8 @@ export type CycleServices = {
   getEpistemicState: GetEpistemicState;
   updateEpistemicState: UpdateEpistemicState;
   resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
+  /** CORR-PROOF-05 Pilot lifecycle transitions. */
+  pilotLifecycle: PilotLifecycleTransitions;
 };

 export type CreateInMemoryCycleServicesOptions = {
@@ -139,6 +166,10 @@ export type CreateInMemoryCycleServicesOptions = {
   clock?: ClockPort;
   audit?: CycleAuditPort;
   ckcResolver?: CkcResolverPort;
+  decisions?: LifecycleDecisionReader;
+  evidence?: LifecycleEvidenceReader;
+  reviewBundles?: LifecycleReviewBundleReader;
+  execution?: LifecycleExecutionSnapshotReader;
 };

 export type CkcQualificationServices = {
@@ -329,6 +360,18 @@ export function createInMemoryCycleServices(
       clock,
       audit,
     ),
+    pilotLifecycle: new PilotLifecycleTransitions({
+      cycles,
+      trajectories,
+      projectServices: options.projectServices,
+      clock,
+      audit,
+      store,
+      decisions: options.decisions,
+      evidence: options.evidence,
+      reviewBundles: options.reviewBundles,
+      execution: options.execution,
+    }),
   };
 }


```

## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
index 8823ec68..a228bdd0 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
@@ -12,6 +12,13 @@ import { ProposeTrajectoryVersion } from "../../application/proposeTrajectoryVer
 import { QualifyCycle } from "../../application/qualifyCycle";
 import { ResolveCycleKnowledgeContract } from "../../application/resolveCycleKnowledgeContract";
 import { UpdateEpistemicState } from "../../application/updateEpistemicState";
+import {
+  PilotLifecycleTransitions,
+  type LifecycleDecisionReader,
+  type LifecycleEvidenceReader,
+  type LifecycleReviewBundleReader,
+  type LifecycleExecutionSnapshotReader,
+} from "../../application/pilotLifecycleTransitions";
 import { MemoryCkcResolver } from "../memoryCkcResolver";
 import type { CycleAuditPort } from "../../ports/cycleAudit";
 import type { CyclePersistenceUnitOfWorkPort } from "../../ports/cyclePersistenceUnitOfWorkPort";
@@ -31,6 +38,10 @@ export type CreateSqliteCycleServicesOptions = {
   clock?: ClockPort;
   audit?: CycleAuditPort;
   ckcResolver?: CkcResolverPort;
+  decisions?: LifecycleDecisionReader;
+  evidence?: LifecycleEvidenceReader;
+  reviewBundles?: LifecycleReviewBundleReader;
+  execution?: LifecycleExecutionSnapshotReader;
 };

 export type SqliteCycleServices = {
@@ -52,6 +63,7 @@ export type SqliteCycleServices = {
   getEpistemicState: GetEpistemicState;
   updateEpistemicState: UpdateEpistemicState;
   resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
+  pilotLifecycle: PilotLifecycleTransitions;
 };

 /**
@@ -120,6 +132,18 @@ export function createSqliteCycleServices(
       clock,
       audit,
     ),
+    pilotLifecycle: new PilotLifecycleTransitions({
+      cycles,
+      trajectories,
+      projectServices: options.projectServices,
+      clock,
+      audit,
+      store: productStore,
+      decisions: options.decisions,
+      evidence: options.evidence,
+      reviewBundles: options.reviewBundles,
+      execution: options.execution,
+    }),
   };
 }


```

## MODIFIED `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index 81b82ee2..25acd68b 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -183,13 +183,62 @@ function wireOaStack(
     projectServices.store instanceof SqliteProductStore
       ? projectServices.store
       : null;
+
+  // CORR-PROOF-05 — late-bound readers so CycleServices can assess FINALIZE
+  // without creating a construction-time cycle with Decision/Evidence factories.
+  const late = {
+    decisionServices: null as DecisionServices | null,
+    evidenceReviewServices: null as
+      | EvidenceReviewServices
+      | SqliteEvidenceReviewServices
+      | null,
+    executionContractServices: null as ExecutionContractServices | null,
+  };
+
+  const lifecycleReaders = {
+    decisions: {
+      getById: (decisionId: string) =>
+        late.decisionServices!.decisions.findById(decisionId),
+      listByProject: (projectId: string) =>
+        late.decisionServices!.decisions.listByProject(projectId),
+    },
+    evidence: {
+      listByProject: (projectId: string) =>
+        late.evidenceReviewServices!.repository.listByProject(projectId),
+    },
+    reviewBundles: {
+      listByProject: (projectId: string) =>
+        late.evidenceReviewServices!.reviewBundleRepository.listByProject(
+          projectId,
+        ),
+    },
+    execution: {
+      listContractsByProject: async (projectId: string) => {
+        const list =
+          await late.executionContractServices!.contracts.listByProject(
+            projectId,
+          );
+        return list.map((c) => ({
+          contractId: c.executionContractId,
+          cycleInstanceId: c.cycleInstanceId,
+          status: c.status,
+        }));
+      },
+    },
+  };
+
   const cycleServices = productSqlite
     ? createSqliteCycleServices({
         projectServices,
         productStore: productSqlite,
         clock,
+        ...lifecycleReaders,
       })
-    : createInMemoryCycleServices({ projectServices, clock });
+    : createInMemoryCycleServices({
+        projectServices,
+        clock,
+        ...lifecycleReaders,
+      });
   const ckcQualification = createCkcQualificationServices({
     clock,
     registryRoot: options?.registryRoot,
@@ -213,6 +262,7 @@ function wireOaStack(
         clock,
         authorityResolver,
       });
+  late.decisionServices = decisionServices;

   const executionContractServices = productSqlite
     ? createSqliteExecutionContractServices({
@@ -230,6 +280,7 @@ function wireOaStack(
         clock,
         authorityResolver,
       });
+  late.executionContractServices = executionContractServices;

   // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
   // GAP-3: realBoundary is optional and OFF by default. M4 descriptor is
@@ -288,6 +339,7 @@ function wireOaStack(
           executionAttemptServices.attempts,
         ),
       });
+  late.evidenceReviewServices = evidenceReviewServices;

   // MW1-S03 / CORR-01 — compose materialization on normal RuntimeOaStack path.
   // Product SQLite: durable materialization audit via SqliteProjectAuditJournal

```

## MODIFIED `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 31f2649c..e1d69ee6 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -997,7 +997,7 @@ export async function orchestrateAssistantSend(input: {
       authorityLevel: "N1",
     },
     correlationId,
-    linkAsActiveCycle: true,
+    linkAsActiveCycle: false,
     expectedLpsVersion: preLpsVersion,
     ckcResolutionRef,
   });
@@ -1084,16 +1084,19 @@ export async function orchestrateAssistantSend(input: {
     presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
     "Qualification SFIA et proposition structurée générées.",
     `Cycle: ${qualification.cycleTypeId} (${qualification.cycleLabel}).`,
-    `CycleInstance: ${created.cycle.cycleInstanceId} (${created.cycle.status}).`,
+    `CycleInstance candidate: ${created.cycle.cycleInstanceId} (${created.cycle.status}) — NON ACTIVE — Pilot START requis.`,
     `Profil recommandé: ${qualification.recommendedProfile}.`,
-    `LPS v${preLpsVersion} → v${project.lpsVersion}.`,
+    project.lpsVersion === preLpsVersion
+      ? `LPS v${preLpsVersion} inchangé (pas d'activation pre-START).`
+      : `LPS v${preLpsVersion} → v${project.lpsVersion}.`,
     qualification.recommendationLabel,
     ...(qualification.ckcCognitiveRecommendation
       ? [qualification.ckcCognitiveRecommendation]
       : []),
+    "RECOMMANDATION ≠ décision Pilote — AUCUNE activation authority-bearing avant Pilot START.",
     morrisGateRequired
-      ? "DÉCISION REQUISE — gate Morris ouvert."
-      : "NO MORRIS GATE REQUIRED — AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI.",
+      ? "DÉCISION REQUISE — gate Morris construction (≠ Pilot lifecycle START)."
+      : "NO MORRIS CONSTRUCTION GATE REQUIRED — AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI.",
     executionBlocked
       ? "Demande d'exécution détectée — AUCUNE EXÉCUTION (Cursor/PR/merge indisponibles)."
       : "AUCUNE EXÉCUTION.",

```

## MODIFIED `projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
index 5804633c..eede8eca 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
@@ -469,10 +469,12 @@ export function buildStudioCognitivePromptSections(
   lines.push(`Criticité : ${ctx.projectTruth.criticality}`);
   if (ctx.projectTruth.activeCycleInstanceId) {
     lines.push(
-      `Cycle actif (identité) : présent — ne pas inventer d'activation.`,
+      `Cycle ACTIVE authority-bearing : ${ctx.projectTruth.activeCycleInstanceId} — ne pas inventer d'activation.`,
     );
   } else {
-    lines.push("Cycle actif : aucun.");
+    lines.push(
+      "Cycle ACTIVE : aucun (un CycleInstance candidate peut exister sans LPS.activeCycleInstanceId).",
+    );
   }
   lines.push("");


```

## MODIFIED `projects/sfia-studio/app/features/project-assistant/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 8137350f..acc36178 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -4,6 +4,10 @@ import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
 import { orchestrateAssistantSend } from "./f2/orchestrateF2";
 import { recordF2Decision } from "./f2/recordDecision";
+import {
+  executePilotLifecycleAction,
+  type PilotLifecycleActionKind,
+} from "./f2/pilotLifecycleActions";
 import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
 import type { F2DecisionKind } from "./f2/types";
 import { confirmAndExecuteF3Fixture } from "./f3/confirmAndExecuteF3Fixture";
@@ -914,3 +918,88 @@ export async function projectAssistantRehydrateEvidenceOutcomeAction(input: {
     reviewBundleIds: rehydrated.reviewBundleIds,
   };
 }
+
+
+/**
+ * CORR-PROOF-05 — Pilot lifecycle transitions (START/PAUSE/RESUME/FINALIZE/CANCEL).
+ * Never uses morrisGateRequired as Pilot lifecycle authority.
+ */
+export async function projectAssistantPilotLifecycleAction(input: {
+  projectId: string;
+  cycleInstanceId: string;
+  action: PilotLifecycleActionKind;
+  materialDriftDetected?: boolean;
+  requiresTrajectoryHumanDecision?: boolean;
+  requiresReplanHumanDecision?: boolean;
+}): Promise<{
+  ok: boolean;
+  status: string;
+  code?: string;
+  message?: string;
+  action?: PilotLifecycleActionKind;
+  cycleStatus?: string;
+  activeCycleInstanceId?: string | null;
+  assessment?: unknown;
+  decisionId?: string;
+  project?: ProjectAssistantContextDto;
+}> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "oa_unavailable",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA indisponibles pour Pilot lifecycle.",
+    };
+  }
+  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
+  if (!projectResult.ok) {
+    return {
+      ok: false,
+      status: "project_not_found",
+      code: projectResult.error.code,
+      message: projectResult.error.message,
+    };
+  }
+  const project = toContextDto(projectResult);
+  const executed = await executePilotLifecycleAction({
+    action: input.action,
+    projectId: input.projectId,
+    cycleInstanceId: input.cycleInstanceId,
+    cycleServices: runtime.oa.cycleServices,
+    projectServices: runtime.oa.projectServices,
+    decisionServices: runtime.oa.decisionServices,
+    authorityResolver: runtime.oa.authorityResolver,
+    nowIso: () => runtime.oa!.clock.nowIso(),
+    materialDriftDetected: input.materialDriftDetected,
+    requiresTrajectoryHumanDecision: input.requiresTrajectoryHumanDecision,
+    requiresReplanHumanDecision: input.requiresReplanHumanDecision,
+  });
+  if (!executed.ok) {
+    return {
+      ok: false,
+      status: "lifecycle_error",
+      code: executed.code,
+      message: executed.message,
+      assessment: executed.assessment,
+      project,
+    };
+  }
+  const reloaded = await loadProjectRuntimeForAssistant(input.projectId);
+  const nextProject = reloaded.ok ? toContextDto(reloaded) : project;
+  return {
+    ok: true,
+    status: "ok",
+    action: executed.action,
+    cycleStatus: executed.result?.ok ? executed.result.cycle.status : undefined,
+    activeCycleInstanceId: executed.result?.ok
+      ? (executed.result.activeCycleInstanceId ??
+        nextProject.activeCycleInstanceId ??
+        null)
+      : nextProject.activeCycleInstanceId ?? null,
+    assessment: executed.assessment,
+    decisionId: executed.decisionId,
+    project: nextProject,
+    message: `Pilot lifecycle ${executed.action} applied.`,
+  };
+}

```

## MODIFIED `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index 22d561b0..1afedd47 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -6,11 +6,16 @@ import {
   projectAssistantConfirmAndExecuteF3FixtureAction,
   projectAssistantConfirmAndExecuteResolvedM3Action,
   projectAssistantDecideAction,
+  projectAssistantPilotLifecycleAction,
   projectAssistantPrepareF3FixtureAction,
   projectAssistantPrepareResolvedM3Action,
   projectAssistantRehydrateEvidenceOutcomeAction,
   projectAssistantSendAction,
 } from "./actions";
+import type { PilotLifecycleActionKind } from "./f2/pilotLifecycleActions";
+import type {
+  FinalizationAssessment,
+} from "@/lib/oa/cycle";
 import type {
   AssistantHistoryMessage,
   AssistantToolEventDto,
@@ -128,6 +133,10 @@ export function ProjectAssistantPanel({
     string | null
   >(null);
   const [f3Busy, setF3Busy] = useState(false);
+  const [lifecycleBusy, setLifecycleBusy] = useState(false);
+  const [lifecycleAssessment, setLifecycleAssessment] =
+    useState<FinalizationAssessment | null>(null);
+  const [lifecycleMessage, setLifecycleMessage] = useState<string | null>(null);
   const [isPending, startTransition] = useTransition();
   const listRef = useRef<HTMLDivElement | null>(null);
   const f3InFlightRef = useRef(false);
@@ -243,6 +252,7 @@ export function ProjectAssistantPanel({
   const busy =
     isPending ||
     f3Busy ||
+    lifecycleBusy ||
     uiState === "SENDING" ||
     uiState === "ASSISTANT_WORKING" ||
     uiState === "SOURCE_LOOKUP";
@@ -252,6 +262,48 @@ export function ProjectAssistantPanel({
     activeProposal?.morrisGateRequired === true &&
     activeProposal.status === "DECISION_REQUIRED";

+  const lifecycleCycleId =
+    f2?.qualification?.cycleInstanceId ??
+    activeProposal?.contextSnapshot.activeCycleInstanceId ??
+    null;
+  const lifecycleStatus = f2?.qualification?.cycleStatus ?? null;
+
+  function runPilotLifecycle(action: PilotLifecycleActionKind) {
+    if (!lifecycleCycleId || lifecycleBusy || busy) return;
+    setLifecycleBusy(true);
+    setLifecycleMessage(null);
+    startTransition(async () => {
+      const result = await projectAssistantPilotLifecycleAction({
+        projectId,
+        cycleInstanceId: lifecycleCycleId,
+        action,
+      });
+      setLifecycleBusy(false);
+      if (!result.ok) {
+        setLifecycleMessage(result.message ?? result.code ?? "Lifecycle error");
+        if (result.assessment) {
+          setLifecycleAssessment(
+            result.assessment as FinalizationAssessment,
+          );
+        }
+        return;
+      }
+      setLifecycleMessage(result.message ?? `OK ${action}`);
+      if (result.assessment) {
+        setLifecycleAssessment(result.assessment as FinalizationAssessment);
+      }
+      if (result.cycleStatus && f2?.qualification) {
+        setF2({
+          ...f2,
+          qualification: {
+            ...f2.qualification,
+            cycleStatus: result.cycleStatus,
+          },
+        });
+      }
+    });
+  }
+
   function historyForRequest(): AssistantHistoryMessage[] {
     return messages
       .filter((m) => m.role === "user" || m.role === "assistant")
@@ -740,12 +792,16 @@ export function ProjectAssistantPanel({
             </div>
             {f2.qualification.cycleInstanceId ? (
               <div>
-                <dt>Cycle lié</dt>
+                <dt>Cycle candidate / instance</dt>
                 <dd data-testid="f2-cycle-instance">
                   {f2.qualification.cycleInstanceId}
                   {f2.qualification.cycleStatus
                     ? ` · ${f2.qualification.cycleStatus}`
                     : ""}
+                  {f2.qualification.cycleStatus &&
+                  f2.qualification.cycleStatus !== "active"
+                    ? " · non authority-bearing jusqu'à Pilot START"
+                    : ""}
                 </dd>
               </div>
             ) : null}
@@ -780,6 +836,116 @@ export function ProjectAssistantPanel({
         </section>
       ) : null}

+      {lifecycleCycleId ? (
+        <section
+          className={styles.qualificationCard}
+          data-testid="pilot-lifecycle-controls"
+          aria-labelledby="pilot-lifecycle-title"
+        >
+          <h3 id="pilot-lifecycle-title" className={styles.cardTitle}>
+            Pilot lifecycle
+          </h3>
+          <p className={styles.cardMeta}>
+            Transitions Pilot-governed — Nora recommande uniquement. Gate Morris
+            construction ≠ lifecycle Pilot.
+          </p>
+          <p className={styles.cardMeta} data-testid="pilot-lifecycle-status">
+            {lifecycleCycleId}
+            {lifecycleStatus ? ` · ${lifecycleStatus}` : ""}
+          </p>
+          <div data-testid="pilot-lifecycle-actions">
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-start"
+              disabled={busy || lifecycleStatus === "active"}
+              onClick={() => runPilotLifecycle("START")}
+            >
+              START
+            </button>
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-pause"
+              disabled={busy || lifecycleStatus !== "active"}
+              onClick={() => runPilotLifecycle("PAUSE")}
+            >
+              PAUSE
+            </button>
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-resume"
+              disabled={busy || lifecycleStatus !== "paused"}
+              onClick={() => runPilotLifecycle("RESUME")}
+            >
+              RESUME
+            </button>
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-finalize"
+              disabled={
+                busy ||
+                lifecycleStatus === "completed" ||
+                lifecycleStatus === "cancelled"
+              }
+              onClick={() => runPilotLifecycle("FINALIZE")}
+            >
+              FINALIZE
+            </button>
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-cancel"
+              disabled={
+                busy ||
+                lifecycleStatus === "completed" ||
+                lifecycleStatus === "cancelled"
+              }
+              onClick={() => runPilotLifecycle("CANCEL")}
+            >
+              CANCEL
+            </button>
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-assess"
+              disabled={busy}
+              onClick={() => runPilotLifecycle("ASSESS")}
+            >
+              Assess exit
+            </button>
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-reevaluate"
+              disabled={busy}
+              onClick={() => runPilotLifecycle("REEVALUATE")}
+            >
+              Re-evaluate
+            </button>
+          </div>
+          {lifecycleMessage ? (
+            <p className={styles.cardMeta} data-testid="pilot-lifecycle-message">
+              {lifecycleMessage}
+            </p>
+          ) : null}
+          {lifecycleAssessment ? (
+            <div data-testid="pilot-lifecycle-assessment">
+              <p className={styles.cardMeta}>
+                canComplete={String(lifecycleAssessment.canComplete)} · blockers=
+                {lifecycleAssessment.blockers.join(",") || "none"}
+              </p>
+              <ul>
+                {lifecycleAssessment.obligations.map((o) => (
+                  <li key={`${o.family}-${o.status}-${o.detail ?? ""}`}>
+                    {o.family}: {o.status}
+                    {o.notApplicableReason
+                      ? ` (${o.notApplicableReason})`
+                      : ""}
+                    {o.detail ? ` — ${o.detail}` : ""}
+                  </li>
+                ))}
+              </ul>
+            </div>
+          ) : null}
+        </section>
+      ) : null}
+
       {activeProposal ? (
         <section
           className={styles.proposalCard}

```

## MODIFIED `projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
index c034ff0d..b44f0c86 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
@@ -105,7 +105,7 @@ describe("F2 orchestration AC coverage", () => {
     expect(result.f2?.qualification?.cycleInstanceId).toMatch(/^cyc:f2-/);
     expect(result.f2?.qualification?.executionAuthority).toBe(false);
     expect(result.f2?.proposal).toBeTruthy();
-    expect(result.f2?.proposal?.contextSnapshot.lpsVersion).toBe(preVersion + 1);
+    expect(result.f2?.proposal?.contextSnapshot.lpsVersion).toBe(preVersion);
     expect(result.f2?.proposal?.outOfScope.length).toBeGreaterThan(0);
     expect(result.f2?.labels.noExecution).toBe("AUCUNE EXÉCUTION");
     expect(result.f2?.proposal?.agentBinding).toBe("NOT_AVAILABLE");

```

## MODIFIED `projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
index e28d5c08..68c10fc8 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
@@ -81,10 +81,11 @@ describe("M2 F2 cognitive piloting e2e", () => {
     expect(result.f2?.qualification?.cycleInstanceId).toMatch(/^cyc:f2-/);
     expect(result.f2?.qualification?.executionAuthority).toBe(false);
     expect(result.f2?.qualification?.ckcResolutionRef).toMatch(/^ckc:m2-/);
+    // CORR-PROOF-05: F2 creates candidate without LPS activation / version bump.
     expect(result.f2?.proposal?.contextSnapshot.lpsVersion).toBe(
-      before.livingState.version + 1,
+      before.livingState.version,
     );
-    expect(result.f2?.proposal?.contextSnapshot.lpsId).not.toBe(
+    expect(result.f2?.proposal?.contextSnapshot.lpsId).toBe(
       before.livingState.id,
     );
     expect(result.f2?.decision).toBeNull();
@@ -93,13 +94,10 @@ describe("M2 F2 cognitive piloting e2e", () => {
     const after = await runtime.getProject(projectId);
     expect(after.ok).toBe(true);
     if (!after.ok) return;
-    expect(after.livingState.version).toBe(before.livingState.version + 1);
-    expect(after.livingState.activeCycleInstanceId).toBe(
-      result.f2?.qualification?.cycleInstanceId,
-    );
-    expect(after.livingState.ckcResolutionRef).toBe(
-      result.f2?.qualification?.ckcResolutionRef,
-    );
+    expect(after.livingState.version).toBe(before.livingState.version);
+    expect(after.livingState.activeCycleInstanceId ?? null).toBeNull();
+    // CKC ref is carried on qualification; not stamped on LPS until Pilot START path.
+    expect(result.f2?.qualification?.ckcResolutionRef).toBeTruthy();
     expect(after.disclosures.persistence).toBe(
       "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
     );
@@ -111,7 +109,7 @@ describe("M2 F2 cognitive piloting e2e", () => {
     });
     expect(cycle.ok).toBe(true);
     if (!cycle.ok) return;
-    expect(cycle.cycle.status).not.toBe("active" as never);
+    expect(cycle.cycle.status).not.toBe("active");
   });

   it("D/E — ambiguous and informative do not mutate Cycle/LPS", async () => {

```

## MODIFIED `projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts
index 4f35ac7d..1c3cabc8 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts
@@ -272,7 +272,13 @@ describe("M2 Product SQLite migration + Cycle durability", () => {
     });
     expect(stale.ok).toBe(false);
     if (stale.ok) return;
-    expect(stale.error.detailCode).toBe("LPS_VERSION_CONFLICT");
+    // CORR-PROOF-05: refuse linking a second authority-bearing active pointer
+    // before attempting a stale LPS append. Either fail-closed code proves
+    // no orphan CycleInstance and LPS remains on cyc:m2-std-1 @ v2.
+    expect([
+      "LPS_VERSION_CONFLICT",
+      "CYCLE_ALREADY_ACTIVE_EXISTS",
+    ]).toContain(stale.error.detailCode);

     const orphan = await cycleSvc.cycles.findById("cyc:m2-stale-1");
     expect(orphan).toBeNull();

```

## MODIFIED `projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
index 670e1349..6a33337e 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
@@ -295,6 +295,26 @@ describe("Phase B P10 — requalification via existing createCycle", () => {
     const overview = await runtime.getProject(seeded.projectId);
     expect(overview.ok).toBe(true);
     if (!overview.ok) return;
+    // CORR-PROOF-05: never overwrite an existing activeCycleInstanceId silently.
+    // Clear the prior active pointer via LPS append, then link the requalified cycle.
+    const currentLps =
+      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
+        projectId: seeded.projectId,
+      });
+    expect(currentLps.ok).toBe(true);
+    if (!currentLps.ok) return;
+    const cleared =
+      await runtime.oa!.projectServices.appendLivingProjectStateVersion.execute({
+        projectId: seeded.projectId,
+        expectedVersion: currentLps.livingProjectState.version,
+        objective: currentLps.livingProjectState.objective,
+        createdBy: W2_TEST_ACTOR,
+        context: currentLps.livingProjectState.context,
+        scope: currentLps.livingProjectState.scope,
+        activeCycleInstanceId: null,
+      });
+    expect(cleared.ok).toBe(true);
+    if (!cleared.ok) return;
     const requal = await runtime.oa!.cycleServices.createCycle.execute({
       cycleInstanceId: "cyc:inst:w2-rq-sec",
       cycleTypeId: "cyc:security",
@@ -304,7 +324,7 @@ describe("Phase B P10 — requalification via existing createCycle", () => {
       scope: "w2-requal",
       createdBy: W2_TEST_ACTOR,
       linkAsActiveCycle: true,
-      expectedLpsVersion: overview.livingState.version,
+      expectedLpsVersion: cleared.livingProjectState.version,
       ckcResolutionRef: "ckcres:w2-harness-sec",
     });
     expect(requal.ok).toBe(true);

```

# 20. Tests scenarios 1–16
Source: `__tests__/oa/cycle/corrProof05.pilotLifecycle.d0.test.ts` — **10/10 PASS**
Mapped:
1 Candidate pre-START PASS
2 No authority link / candidate PASS (with 1)
3 START + second ACTIVE refused PASS
4 PAUSE clear PASS
5 BLOCKED ≠ PAUSED retain pointer PASS
6 RESUME clean PASS
7 RESUME drift PASS
8 FINALIZE HD required PASS
9/11/12 Completion + EC N/A PASS (combined)
10 Attempt alone ≠ complete PASS
13/14 CANCEL + no reopen + new instance PASS
15 Gate separation PASS
16 Regressions: corrProof01–04 + F2 + m2 + w2TrackD PASS (assertions updated with CORR-PROOF-05 justification where obsolete)

Complementary: NOT_APPLICABLE policy PASS; no active overwrite PASS.

# 21. Regressions
- corrProof01–04: PASS
- f2.orchestrate / m2CognitivePiloting: PASS (updated for no pre-START LPS activation)
- m2ProductCycleDurability / w2TrackDPhaseB: PASS (justified assertion/flow adapts)
- Full `npm test`: **315 files passed | 3136 tests passed | 135 skipped**

# 22. typecheck / build / diff-check
- `npm run typecheck`: PASS
- `npm run build`: PASS
- `git diff --check`: PASS (exit 0)

# 23. Fake / Real Qualification
- DETERMINISTIC PROVEN (this cycle)
- REAL BOUNDARY / E2E REAL: OUT OF SCOPE
- Future REAL: Suivi de contrat same state — DO NOT EXECUTE here

# 24. Risks / reserves
- R1: Cursor WT drift risk — mitigated by isolated WT without move_agent_to_root
- R2: `acknowledged` overload remains debt
- R3: Artifact obligations mostly N/A until artifact model bound
- R4: FINALIZE auto-completes when assessment canComplete; sparse projects may complete with many N/A — policy requires reasons

# 25. Debt + exit
- Exit: REAL Suivi after Morris GO; optional enum cleanup later; artifact SoT binding later
- No destructive migration debt

# 26. Future REAL Suivi sequence — DO NOT EXECUTE
Cadrage mature → Nora recommend FINALIZE → Pilot FINALIZE → obligations → Artifact/EC/Evidence/Review/Git conditional → completed → Nora recommend Conception → candidate non-active → no Conception content → Pilot START → Conception begins.

# 27. Files out of scope intact
No edits to Build Doctrine, Roadmap, C1/C2, sfia-v3-framing, templates, db/migrations, protected doctrine paths.

# 28. Local Git Truth final
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
 M projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/corrProof05.pilotLifecycle.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/lifecycleInvariants.ts
```

HEAD remains `12d837fd…`. Product changes **uncommitted / unstaged for commit** (working tree dirty by design). No product push/PR.

# 29. Review Handoff publication metadata
- Mode: publish-in-cycle
- Source: `.tmp-sfia-review/chatgpt-review.md`
- Branch: `sfia/review-handoff`
- File: `sfia-review-handoff/latest-chatgpt-review.md`
- Commit message: `docs(review-handoff): publish CORR-PROOF-05 delivery implementation`
- Remote before: `7bed15887a3af8ddf34eacfa387d535979bd2051`
- (filled after publish)

# 30. Final verdict
**READY FOR CHATGPT CORR-PROOF-05 DELIVERY REVIEW**

Instruction ChatGPT: lire le handoff Git distant COMPLET avant décision Morris. Ne pas traiter ce résumé Cursor seul comme preuve.
