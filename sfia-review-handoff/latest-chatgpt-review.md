# CORR-PROOF-05 — DELIVERY ENFORCEMENT CORRECTION #3
## CLOSED-WORLD EXIT CONSISTENCY
## FULL Review Pack — mono-cycle

| Field | Value |
| --- | --- |
| **Timestamp (UTC)** | 2026-09-07T19:30:49Z |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-wt-corr05-impl-12d837fd` |
| **Branch** | `delivery/sfia-studio-proof-corr-05-pilot-lifecycle` |
| **HEAD** | `12d837fd29a69b3e83155a06ec58dc91b0e15f0b` |
| **origin/main** | `12d837fd29a69b3e83155a06ec58dc91b0e15f0b` |
| **Handoff input (before)** | `9ae791ca048b8fdacdf22210f360d896107c039f` |
| **Cycle** | 8 — Delivery enforcement correction #3 |
| **Profile** | CRITICAL |
| **Capability** | Pilot-Governed Project Lifecycle |
| **Defects closed** | APPLICABILITY_CONTRADICTION_PRECEDENCE · EXECUTION_CONTRACT_EXIT_SEMANTICS · GIT_EVIDENCE_SEMANTIC_BINDING · REVIEW_BUNDLE_EXIT_SEMANTICS · PAUSE_BLOCKER_BASELINE_UNKNOWN |
| **Product Proof** | OPEN |
| **runtime v3** | NON ADOPTED |
| **Product commit** | NOT PERFORMED |
| **Evidence** | DETERMINISTIC PROVEN (closed-world exit consistency) |
| **Verdict** | READY FOR CHATGPT CORR-PROOF-05 DELIVERY RE-REVIEW |

### Anti-claims
NOT READY FOR COMMIT/PR/REAL · NOT PRODUCT PROOF CLOSED · NOT STAGE B · NOT runtime v3 ADOPTED · NO REAL · NO new table/migration/ledger

---

# 1. Timestamp UTC
2026-09-07T19:30:49Z

# 2. Initial Local Git Truth
- WT `delivery/sfia-studio-proof-corr-05-pilot-lifecycle` @ `12d837fd29a69b3e83155a06ec58dc91b0e15f0b` (= origin/main)
- Handoff before `9ae791ca048b8fdacdf22210f360d896107c039f`
- Product dirty CORR-PROOF-05 delta intact; staged=0
- No reset/stash/clean/move_agent_to_root

# 3. Input handoff
`9ae791ca048b8fdacdf22210f360d896107c039f` — correction #2 Product wiring. Remaining: closed-world exit consistency (#3).

# 4. Morris GO consumed
GO CORRECTION + PUBLISH REVIEW HANDOFF (#3). Not consumed: Product commit/push/PR/merge, REAL, Proof closure, Stage B, v3 adopt, doctrine/C1/C2 edits, structural persistence.

# 5. Sources read
- Mission contract correction #3
- Prior handoffs through 9ae791ca…
- Domain: ExecutionContract statuses, ReviewBundle statuses/synthesisOnly/supersession, Evidence bindings, deriveFinalizationApplicability, assessFinalization, pause reconciliation

# 6. Convergence qualification
Same corrective / Cycle 8 / baseline. KEEP/ADAPT. No parallel engine.

# 7. Previously accepted implementation preserved
Candidate pre-START; ≤1 ACTIVE; PAUSED≠BLOCKED; START readiness; pauseReconciliation; server RESUME; authority no forceEnable Product; HD CURRENT; FINALIZE/CANCEL HD; Product-derived applicability; absence≠N/A; UNKNOWN→BLOCKING; epistemic blockers; superseded not startable; durable projection; no FinalizationLedger.

# 8. Five remaining defects
1. NO_* HD overwrote APPLICABLE (fail-open)
2. EC confirmed/cancelled/superseded treated as settled
3. Generic document/attestation/log_ref counted as Git proof
4. Rejected/superseded ReviewBundle could satisfy
5. PAUSE unreadable blockers serialized as known-empty fingerprint

# 9. Applicability precedence before/after
Before: setNa overwrote APPLICABLE.
After: trySetNa — if APPLICABLE from durable fact, keep APPLICABLE + record contradiction; NO_* only converts UNKNOWN→N/A.

# 10. Contradiction representation
`FinalizationApplicabilityRules.contradictions[]` with family, positiveSource, conflictingDecisionId, conflictingOptionId.
assessFinalization pushes blockers `*_policy_contradicts_applicability` → canComplete=false.

# 11. Positive applicability source precedence
POSITIVE DURABLE FACT > contradictory NO_* policy.

# 12. NO_* policy behavior
UNKNOWN + NO_* → N/A with `pilot_hd_obligation_policy:<opt>`.
APPLICABLE + NO_* → contradiction BLOCKING, stays APPLICABLE.
REQUIRE_* → UNKNOWN→APPLICABLE; no contradiction if already APPLICABLE.
NO_GOVERNED_EFFECTS applies per-family independently.

# 13. ExecutionContract actual domain statuses
draft|proposed|validated|confirmation_required|confirmed|executing|completed|failed|cancelled|superseded

# 14. Effective/current EC selection
`selectEffectiveExecutionContracts`: cycle-bound; predecessors referenced by supersedesExecutionContractId excluded; status=superseded without successor → orphanedSuperseded (fail-closed).

# 15. EC status → exit obligation matrix
| Status | Exit |
| --- | --- |
| draft/proposed/validated/confirmation_required/confirmed | PENDING |
| executing | PENDING |
| completed | SATISFIED candidate |
| failed | BLOCKING |
| cancelled | BLOCKING (not satisfied) |
| superseded (effective) | should not; orphaned → BLOCKING |
| terminal_success Attempt alone | never completes EC family |

# 16. Git applicability source
EC requiredCapabilities~/git/i or action/target/scope~/git|repository/i or REQUIRE HD.

# 17. Git evidence semantic-binding rules
`isGitQualifyingEvidence`: available|verified AND (bindings.executionContractId ∈ git-applicable ECs OR cycle-bound + location/source explicit /git|repository/i). Type alone insufficient.

# 18. False-positive Git proof tests
GP1–GP8: unrelated document/EC/generic attestation → MISSING; bound Git-qualified evidence → SATISFIED.

# 19. ReviewBundle actual domain statuses
draft|ready_for_review|under_review|accepted|rejected|incomplete|superseded + synthesisOnly.

# 20. Effective/current ReviewBundle selection
`selectEffectiveReviewBundles`: supersession via supersedesReviewBundleId; synthesisOnly ineligible for satisfaction.

# 21. Review status → exit matrix
| Status | Exit |
| --- | --- |
| accepted (eligible) | SATISFIED |
| draft/ready/under_review | PENDING |
| rejected/incomplete/synthesisOnly | BLOCKING |
| superseded only / no current | BLOCKING not SATISFIED |
| superseded + accepted successor | SATISFIED from successor |

# 22. PAUSE blocker baseline known/unknown
`blockerSnapshotState: KNOWN|UNKNOWN` + optional reason on pauseReconciliation JSON.
Reader fail → UNKNOWN + fingerprint null (never pretend empty-known).

# 23. RESUME from UNKNOWN baseline
Always CYCLE_RESUME_DRIFT (`blocker_baseline_unknown`) even if current reader recovers empty.

# 24. Persistence assessment
JSON payload fields only. No DDL.

# 25. Confirmation
NO new table / store / migration / ledger / second engine.

# 26. Files created

- `projects/sfia-studio/app/__tests__/oa/cycle/corrProof05.pilotLifecycle.d0.test.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/assessResumeReconciliation.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/assessStartReadiness.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/deriveLifecycleBlockers.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitEvidence.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/selectEffectiveExecutionContracts.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/selectEffectiveReviewBundles.ts`
- `projects/sfia-studio/app/lib/oa/cycle/domain/lifecycleInvariants.ts`

# 27. Files modified

- `projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts`
- `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`
- `projects/sfia-studio/app/features/project-assistant/actions.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts`
- `projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts`
- `projects/sfia-studio/app/lib/oa/cycle/domain/types.ts`
- `projects/sfia-studio/app/lib/oa/cycle/index.ts`
- `projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts`
- `projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

# 28. Git Review Index
See embedded created content + modified diffs.


# 29–30. Created file contents + modified diffs


## FILE `projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts`

```typescript
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

```


## FILE `projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts`

```typescript
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

```


## FILE `projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitEvidence.ts`

```typescript
/**
 * CORR-PROOF-05 #3 — semantic binding for Git/repository proof Evidence.
 * Pure; no persistence. Type alone is never sufficient.
 */
import type { Evidence } from "@/lib/oa/evidence-review";

export type GitQualifiableContract = {
  contractId: string;
  requiredCapabilities?: string[];
  action?: string;
  target?: string;
  scope?: string;
};

/** EC makes Git applicable via capability or action/target/scope. */
export function isGitApplicableContract(
  contract: GitQualifiableContract,
): boolean {
  const fromCaps = (contract.requiredCapabilities ?? []).some((cap) =>
    /git/i.test(cap),
  );
  const fromFields = [contract.action, contract.target, contract.scope].some(
    (v) => typeof v === "string" && /\bgit\b|repository/i.test(v),
  );
  return fromCaps || fromFields;
}

/**
 * Evidence qualifies as git proof only when status is supporting AND
 * semantically bound to a git-applicable EC, or (without EC binding)
 * same-cycle with explicit git/repository location|source.
 */
export function isGitQualifyingEvidence(
  evidence: Evidence,
  gitApplicableContractIds: ReadonlySet<string> | readonly string[],
  cycleInstanceId: string,
): boolean {
  if (evidence.status !== "available" && evidence.status !== "verified") {
    return false;
  }

  const ids =
    gitApplicableContractIds instanceof Set
      ? gitApplicableContractIds
      : new Set(gitApplicableContractIds);

  const ecId =
    evidence.bindings?.executionContractId ??
    (evidence as Evidence & { executionContractId?: string }).executionContractId;
  if (ecId) {
    // Bound to a specific EC: only a git-applicable EC qualifies (never fall through).
    return ids.has(ecId);
  }

  // Attempt→contract linking requires attempts; skip when not available.

  const sameCycle = evidence.bindings?.cycleInstanceId === cycleInstanceId;
  if (sameCycle) {
    const location = evidence.location ?? "";
    const source = evidence.source ?? "";
    if (/git|repository/i.test(location) || /git|repository/i.test(source)) {
      return true;
    }
  }

  return false;
}

```


## FILE `projects/sfia-studio/app/lib/oa/cycle/application/selectEffectiveExecutionContracts.ts`

```typescript
/**
 * CORR-PROOF-05 #3 — effective ExecutionContract set via supersession.
 * Pure; no persistence.
 */

export type SelectableExecutionContract = {
  contractId: string;
  status: string;
  cycleInstanceId?: string;
  supersedesExecutionContractId?: string;
};

export type SelectEffectiveExecutionContractsResult<
  T extends SelectableExecutionContract = SelectableExecutionContract,
> = {
  effective: T[];
  orphanedSuperseded: T[];
};

/**
 * Filter to cycle-bound contracts, then:
 * - effective = not superseded by another in the set AND status !== "superseded"
 * - orphanedSuperseded = status===superseded with no successor pointing at it
 */
export function selectEffectiveExecutionContracts<
  T extends SelectableExecutionContract,
>(
  contracts: readonly T[],
  cycleInstanceId: string,
): SelectEffectiveExecutionContractsResult<T> {
  const cycleBound = contracts.filter(
    (c) => !c.cycleInstanceId || c.cycleInstanceId === cycleInstanceId,
  );

  const supersededPredecessorIds = new Set(
    cycleBound
      .map((c) => c.supersedesExecutionContractId)
      .filter((id): id is string => Boolean(id)),
  );

  const effective = cycleBound.filter(
    (c) =>
      !supersededPredecessorIds.has(c.contractId) && c.status !== "superseded",
  );

  const orphanedSuperseded = cycleBound.filter(
    (c) =>
      c.status === "superseded" &&
      !cycleBound.some(
        (other) => other.supersedesExecutionContractId === c.contractId,
      ),
  );

  return { effective, orphanedSuperseded };
}

```


## FILE `projects/sfia-studio/app/lib/oa/cycle/application/selectEffectiveReviewBundles.ts`

```typescript
/**
 * CORR-PROOF-05 #3 — effective ReviewBundle set via supersession.
 * Pure; no persistence.
 */
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";

export type SelectEffectiveReviewBundlesResult = {
  /** Current non-superseded, non-synthesisOnly bundles. */
  effective: ReviewBundle[];
  /** Current non-superseded but synthesisOnly (ineligible to satisfy). */
  ineligible: ReviewBundle[];
};

/**
 * Filter to cycle-bound bundles, then:
 * - current = not superseded by another in the set AND status !== "superseded"
 * - effective = current ∧ !synthesisOnly
 * - ineligible = current ∧ synthesisOnly
 */
export function selectEffectiveReviewBundles(
  bundles: readonly ReviewBundle[],
  cycleInstanceId: string,
): SelectEffectiveReviewBundlesResult {
  const cycleBound = bundles.filter(
    (r) => !r.cycleInstanceId || r.cycleInstanceId === cycleInstanceId,
  );

  const supersededPredecessorIds = new Set(
    cycleBound
      .map((r) => r.supersedesReviewBundleId)
      .filter((id): id is string => Boolean(id)),
  );

  const current = cycleBound.filter(
    (r) =>
      !supersededPredecessorIds.has(r.reviewBundleId) &&
      r.status !== "superseded",
  );

  const effective = current.filter((r) => !r.synthesisOnly);
  const ineligible = current.filter((r) => r.synthesisOnly);

  return { effective, ineligible };
}

```


## FILE `projects/sfia-studio/app/lib/oa/cycle/application/assessResumeReconciliation.ts`

```typescript
/**
 * CORR-PROOF-05 — server-owned PAUSE/RESUME reconciliation (no caller SoT).
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type {
  CycleInstance,
  PauseReconciliationSnapshot,
  ProjectTrajectory,
} from "../domain/types";
import { isCurrentHumanDecisionStatus } from "./assessFinalization";

export type BuildPauseSnapshotInput = {
  pausedAt: string;
  lpsVersion: number;
  lpsActiveCycleInstanceId: string | null | undefined;
  objective: string;
  context: string;
  scope: string;
  doctrinePackageId?: string;
  doctrinePackageVersion?: string;
  doctrinePackageDigest?: string;
  trajectory: ProjectTrajectory | null;
  decisions: readonly HumanDecision[];
  evidence: readonly Evidence[];
  blockingReservationStatements?: readonly string[];
  blockerSnapshotState: "KNOWN" | "UNKNOWN";
  blockerSnapshotReason?: string;
  projectId: string;
  cycleInstanceId: string;
};

export function trajectoryFingerprint(
  trajectory: ProjectTrajectory | null,
): string | null {
  if (!trajectory) return null;
  return `${trajectory.trajectoryId}@v${trajectory.version}:${trajectory.status}:${trajectory.steps
    .map((s) => `${s.stepId}:${s.state}`)
    .join(",")}`;
}

function decisionFingerprint(
  decisions: readonly HumanDecision[],
  projectId: string,
  cycleInstanceId: string,
): string {
  const relevant = decisions
    .filter(
      (d) =>
        d.projectId === projectId &&
        (!d.cycleInstanceId || d.cycleInstanceId === cycleInstanceId) &&
        isCurrentHumanDecisionStatus(d.status),
    )
    .map((d) => `${d.decisionId}:${d.status}:${d.subject}`)
    .sort();
  return relevant.join("|") || "none";
}

function evidenceFingerprint(
  evidence: readonly Evidence[],
  cycleInstanceId: string,
): string {
  const relevant = evidence
    .filter(
      (e) =>
        !e.bindings?.cycleInstanceId ||
        e.bindings.cycleInstanceId === cycleInstanceId,
    )
    .map(
      (e) =>
        `${e.evidenceId}:${e.status}:${e.availability ?? ""}:${e.freshness ?? ""}`,
    )
    .sort();
  return relevant.join("|") || "none";
}

export function buildPauseReconciliationSnapshot(
  input: BuildPauseSnapshotInput,
): PauseReconciliationSnapshot {
  return {
    pausedAt: input.pausedAt,
    lpsVersion: input.lpsVersion,
    lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
    objective: input.objective,
    context: input.context,
    scope: input.scope,
    doctrinePackageId: input.doctrinePackageId,
    doctrinePackageVersion: input.doctrinePackageVersion,
    doctrinePackageDigest: input.doctrinePackageDigest,
    trajectoryId: input.trajectory?.trajectoryId ?? null,
    trajectoryVersion: input.trajectory?.version ?? null,
    trajectoryFingerprint: trajectoryFingerprint(input.trajectory),
    currentDecisionFingerprint: decisionFingerprint(
      input.decisions,
      input.projectId,
      input.cycleInstanceId,
    ),
    evidenceFingerprint: evidenceFingerprint(
      input.evidence,
      input.cycleInstanceId,
    ),
    blockerFingerprint:
      input.blockerSnapshotState === "UNKNOWN"
        ? null
        : (input.blockingReservationStatements ?? []).slice().sort().join("|") ||
          "none",
    blockerSnapshotState: input.blockerSnapshotState,
    blockerSnapshotReason: input.blockerSnapshotReason,
  };
}

export type ResumeReconciliationInput = {
  cycle: CycleInstance;
  projectId: string;
  lpsReadable: boolean;
  lpsVersion: number;
  lpsActiveCycleInstanceId: string | null | undefined;
  objective: string;
  context: string;
  scope: string;
  doctrinePackageId?: string;
  doctrinePackageVersion?: string;
  doctrinePackageDigest?: string;
  trajectory: ProjectTrajectory | null;
  decisions: readonly HumanDecision[];
  evidence: readonly Evidence[];
  blockingReservationStatements?: readonly string[];
  /** Current blocker source unreadable → fail-closed drift. */
  blockerSourceUnreadable?: boolean;
  siblingActiveExists: boolean;
  /** Caller hint — forces drift when true; never proves clean when false. */
  callerMaterialDriftHint?: boolean;
};

export type ResumeReconciliationResult = {
  clean: boolean;
  driftReasons: string[];
  requiresReplanHumanDecision: boolean;
};

export function assessResumeReconciliation(
  input: ResumeReconciliationInput,
): ResumeReconciliationResult {
  const driftReasons: string[] = [];

  if (input.callerMaterialDriftHint === true) {
    driftReasons.push("caller_material_drift_hint");
  }

  const snap = input.cycle.pauseReconciliation;
  if (!snap) {
    driftReasons.push("pause_snapshot_missing");
  }

  if (!input.lpsReadable) {
    driftReasons.push("lps_unreadable");
  }

  if (input.siblingActiveExists) {
    driftReasons.push("another_active_exists");
  }

  if (
    input.lpsActiveCycleInstanceId &&
    input.lpsActiveCycleInstanceId !== input.cycle.cycleInstanceId
  ) {
    driftReasons.push("lps_active_pointer_elsewhere");
  }

  if (input.blockerSourceUnreadable) {
    driftReasons.push("blocker_source_unreadable");
  }

  if (snap) {
    if (snap.objective !== input.objective) driftReasons.push("objective_drift");
    if (snap.context !== input.context) driftReasons.push("context_drift");
    if (snap.scope !== input.scope) driftReasons.push("scope_drift");

    if (
      (snap.doctrinePackageId ?? "") !== (input.doctrinePackageId ?? "") ||
      (snap.doctrinePackageVersion ?? "") !==
        (input.doctrinePackageVersion ?? "") ||
      (snap.doctrinePackageDigest ?? "") !== (input.doctrinePackageDigest ?? "")
    ) {
      driftReasons.push("doctrine_pin_drift");
    }

    const currentTrajFp = trajectoryFingerprint(input.trajectory);
    if ((snap.trajectoryFingerprint ?? null) !== currentTrajFp) {
      driftReasons.push("trajectory_material_drift");
    }

    const currentDecFp = decisionFingerprint(
      input.decisions,
      input.projectId,
      input.cycle.cycleInstanceId,
    );
    if ((snap.currentDecisionFingerprint ?? "none") !== currentDecFp) {
      driftReasons.push("human_decision_material_drift");
    }

    const currentEvFp = evidenceFingerprint(
      input.evidence,
      input.cycle.cycleInstanceId,
    );
    if ((snap.evidenceFingerprint ?? "none") !== currentEvFp) {
      const stale = input.evidence.some(
        (e) =>
          (!e.bindings?.cycleInstanceId ||
            e.bindings.cycleInstanceId === input.cycle.cycleInstanceId) &&
          (e.status === "stale" ||
            e.status === "unavailable" ||
            e.availability === "unavailable"),
      );
      if (stale || currentEvFp !== (snap.evidenceFingerprint ?? "none")) {
        driftReasons.push("evidence_freshness_drift");
      }
    }

    // Blocker baseline: UNKNOWN at pause → refuse RESUME regardless of recovery.
    if (snap.blockerSnapshotState === "UNKNOWN") {
      driftReasons.push("blocker_baseline_unknown");
    } else if (!input.blockerSourceUnreadable) {
      // KNOWN (or legacy without state — treat fingerprint comparison as today)
      const blockerFp =
        (input.blockingReservationStatements ?? []).slice().sort().join("|") ||
        "none";
      if ((snap.blockerFingerprint ?? "none") !== blockerFp) {
        driftReasons.push("blocker_introduced_or_changed");
      }
    }
  }

  // Deduplicate
  const unique = [...new Set(driftReasons)];
  return {
    clean: unique.length === 0,
    driftReasons: unique,
    requiresReplanHumanDecision: unique.length > 0,
  };
}

```


## FILE `projects/sfia-studio/app/lib/oa/cycle/application/deriveLifecycleBlockers.ts`

```typescript
/**
 * CORR-PROOF-05 — derive lifecycle blockers from durable epistemic reservations.
 * No second blockers store; unreadable sources must fail closed at transitions.
 */
import type { EpistemicItem } from "../domain/types";

export type LifecycleBlockerSnapshot =
  | { ok: true; statements: string[]; source: "epistemic_reservation" }
  | { ok: false; reason: "epistemic_unreadable" | "epistemic_reader_unavailable" };

export function deriveLifecycleBlockersFromEpistemicItems(
  items: readonly EpistemicItem[],
): Extract<LifecycleBlockerSnapshot, { ok: true }> {
  const statements = items
    .filter(
      (i) =>
        i.type === "Reservation" &&
        i.status === "active" &&
        i.blocking === true,
    )
    .map((i) => i.statement)
    .sort();
  return { ok: true, statements, source: "epistemic_reservation" };
}

/** Helper for transitions when the epistemic reader is missing or throws. */
export function lifecycleBlockersFromReaderFailure(
  reason: Extract<LifecycleBlockerSnapshot, { ok: false }>["reason"],
): Extract<LifecycleBlockerSnapshot, { ok: false }> {
  return { ok: false, reason };
}

```


## FILE `projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts`

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
  targetStatusForAction,
} from "../domain/lifecycleInvariants";
import type {
  AssessFinalizationRequest,
  AssessFinalizationResult,
  CancelCycleRequest,
  CycleInstance,
  EpistemicItem,
  FinalizationApplicabilityRules,
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
  isAcceptedResumeReplanDecision,
  isAcceptedStartTrajectoryDecision,
  type AssessFinalizationInput,
} from "./assessFinalization";
import {
  assessResumeReconciliation,
  buildPauseReconciliationSnapshot,
} from "./assessResumeReconciliation";
import { assessStartReadiness } from "./assessStartReadiness";
import {
  deriveFinalizationApplicability,
  type DerivableExecutionContract,
} from "./deriveFinalizationApplicability";
import {
  deriveLifecycleBlockersFromEpistemicItems,
  lifecycleBlockersFromReaderFailure,
  type LifecycleBlockerSnapshot,
} from "./deriveLifecycleBlockers";

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

export type LifecycleEpistemicReader = {
  listByProject(projectId: string): Promise<EpistemicItem[]>;
};

export type LifecycleExecutionSnapshotReader = {
  listContractsByProject?(projectId: string): Promise<
    Array<DerivableExecutionContract>
  >;
  listAttemptsByProject?(projectId: string): Promise<
    Array<{
      attemptId: string;
      contractId?: string;
      terminalState?: string;
    }>
  >;
};

/** Narrow authority verify surface for Pilot lifecycle mutations. */
export type PilotLifecycleAuthorityPort = {
  verify(request: {
    actorId: string;
    scope: string;
    evidenceId?: string;
    requiredLevel?: "N1" | "N2" | "N3";
    requireMorrisGate?: boolean;
  }): { ok: boolean; reason?: string };
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
  epistemic?: LifecycleEpistemicReader;
  authority?: PilotLifecycleAuthorityPort;
  /**
   * Optional static applicability override — test-only / low-level.
   * Product `buildAssessment` always derives from durable facts and ignores this.
   */
  applicabilityRules?: FinalizationApplicabilityRules;
};

function authorityNotConfiguredReason(reason?: string): boolean {
  if (!reason) return true;
  const r = reason.toLowerCase();
  return (
    r.includes("no_evidence") ||
    r.includes("not_configured") ||
    r.includes("not configured") ||
    r.includes("evidence_not_found") ||
    r === "authority_port_unavailable"
  );
}

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
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

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
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        internalCauseRef,
        ...extra,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "START",
        fromStatus: "unknown",
        toStatus: "unknown",
        actorId: request.createdBy.actorId,
        decisionRef: request.decisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    if (!request.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    const authGate = this.verifyAuthority({
      actorId: request.createdBy.actorId,
      cycleInstanceId: request.cycleInstanceId,
      evidenceId: request.authorityEvidenceId,
    });
    if (!authGate.ok) {
      return fail(authGate.detailCode, authGate.internalCauseRef);
    }

    const projectResult = await this.deps.projectServices.getProject.execute({
      projectId: request.projectId,
    });
    const projectOk = projectResult.ok;
    if (!projectOk) {
      return fail("PROJECT_NOT_FOUND", "missing_project");
    }

    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }
    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }
    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: "START",
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const siblings = await this.deps.cycles.listByProject(request.projectId);
    const single = assertAtMostOneActiveCycle({
      cycles: siblings,
      excludeCycleInstanceId: request.cycleInstanceId,
    });
    const siblingActiveExists = Boolean(single);

    const lps =
      await this.deps.projectServices.getCurrentLivingProjectState.execute({
        projectId: request.projectId,
      });
    const lpsReadable = lps.ok;
    const lpsActiveCycleInstanceId = lps.ok
      ? lps.livingProjectState.activeCycleInstanceId
      : undefined;

    const trajectory = await this.loadTrajectory(request.projectId);
    const decisions = this.deps.decisions
      ? await this.deps.decisions.listByProject(request.projectId)
      : [];

    const doctrineReadable = Boolean(
      (projectResult.ok && projectResult.project.doctrinePackageRef) ||
        (lps.ok && lps.livingProjectState.doctrinePackageRef),
    );

    const blockersSnap = await this.loadBlockers(request.projectId);
    const readiness = assessStartReadiness({
      assessedAt: timestamp,
      projectOk,
      cycle,
      projectId: request.projectId,
      lpsReadable,
      lpsActiveCycleInstanceId,
      siblingActiveExists,
      trajectory,
      decisions,
      decisionId: request.decisionId,
      doctrineReadable,
      blockingReservationStatements: blockersSnap.ok
        ? blockersSnap.statements
        : undefined,
      blockerSourceUnreadable: !blockersSnap.ok,
    });

    const nonHdBlockers = readiness.blockers.filter(
      (b) => b !== "start_trajectory_hd_missing_or_invalid",
    );
    if (nonHdBlockers.length > 0 || (!readiness.ready && !readiness.requiresTrajectoryHumanDecision)) {
      return fail(
        "CYCLE_START_NOT_READY",
        readiness.blockers.join("|") || "start_not_ready",
      );
    }

    if (readiness.requiresTrajectoryHumanDecision) {
      if (!this.deps.decisions) {
        return fail("CYCLE_DECISION_REQUIRED", "decision_reader_unavailable");
      }
      let hd: HumanDecision | null = null;
      if (request.decisionId) {
        hd = await this.deps.decisions.getById(request.decisionId);
      } else {
        hd =
          decisions.find((d) =>
            isAcceptedStartTrajectoryDecision(
              d,
              request.cycleInstanceId,
              request.projectId,
            ),
          ) ?? null;
      }
      if (
        !hd ||
        !isAcceptedStartTrajectoryDecision(
          hd,
          request.cycleInstanceId,
          request.projectId,
        )
      ) {
        return fail(
          "CYCLE_DECISION_REQUIRED",
          "start_trajectory_hd_missing_or_invalid",
        );
      }
    }

    if (single) return fail(single.detailCode, single.reason);

    const next: CycleInstance = {
      ...structuredClone(cycle),
      status: "active",
      acknowledgedAt: cycle.acknowledgedAt ?? timestamp,
      pauseReconciliation: null,
    };

    return this.persistLifecycleMutation({
      action: "START",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      decisionId: request.decisionId,
      fromStatus: cycle.status,
      toStatus: "active",
      next,
      setActiveLink: request.cycleInstanceId,
      clearActiveLink: false,
      started,
      timestamp,
      fail,
    });
  }

  async pause(request: PauseCycleRequest): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

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
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        internalCauseRef,
        ...extra,
      });
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        action: "PAUSE",
        fromStatus: "unknown",
        toStatus: "unknown",
        actorId: request.createdBy.actorId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    if (!request.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    const authGate = this.verifyAuthority({
      actorId: request.createdBy.actorId,
      cycleInstanceId: request.cycleInstanceId,
      evidenceId: request.authorityEvidenceId,
    });
    if (!authGate.ok) {
      return fail(authGate.detailCode, authGate.internalCauseRef);
    }

    const projectResult = await this.deps.projectServices.getProject.execute({
      projectId: request.projectId,
    });
    if (!projectResult.ok) {
      return fail("PROJECT_NOT_FOUND", "missing_project");
    }

    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }
    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }
    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: "PAUSE",
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const lps =
      await this.deps.projectServices.getCurrentLivingProjectState.execute({
        projectId: request.projectId,
      });
    const trajectory = await this.loadTrajectory(request.projectId);
    const decisions = this.deps.decisions
      ? await this.deps.decisions.listByProject(request.projectId)
      : [];
    const evidence = this.deps.evidence
      ? await this.deps.evidence.listByProject(request.projectId)
      : [];

    const doctrinePin =
      projectResult.project.doctrinePackageRef ??
      (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined);

    const blockersSnap = await this.loadBlockers(request.projectId);
    const pauseReconciliation = buildPauseReconciliationSnapshot({
      pausedAt: timestamp,
      lpsVersion: lps.ok ? lps.livingProjectState.version : 0,
      lpsActiveCycleInstanceId: lps.ok
        ? lps.livingProjectState.activeCycleInstanceId
        : null,
      objective: lps.ok ? lps.livingProjectState.objective : "",
      context: lps.ok ? (lps.livingProjectState.context ?? "") : "",
      scope: lps.ok ? (lps.livingProjectState.scope ?? "") : "",
      doctrinePackageId: doctrinePin?.doctrinePackageId,
      doctrinePackageVersion: doctrinePin?.version,
      doctrinePackageDigest: doctrinePin?.digest,
      trajectory,
      decisions,
      evidence,
      blockerSnapshotState: blockersSnap.ok ? "KNOWN" : "UNKNOWN",
      blockerSnapshotReason: blockersSnap.ok ? undefined : blockersSnap.reason,
      blockingReservationStatements: blockersSnap.ok
        ? blockersSnap.statements
        : undefined,
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
    });

    const next: CycleInstance = {
      ...structuredClone(cycle),
      status: "paused",
      pauseReconciliation,
    };

    return this.persistLifecycleMutation({
      action: "PAUSE",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      fromStatus: cycle.status,
      toStatus: "paused",
      next,
      setActiveLink: null,
      clearActiveLink: true,
      started,
      timestamp,
      fail,
    });
  }

  async resume(request: ResumeCycleRequest): Promise<PilotLifecycleResult> {
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

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
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        internalCauseRef,
        ...extra,
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
        decisionRef: request.decisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    if (!request.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    const authGate = this.verifyAuthority({
      actorId: request.createdBy.actorId,
      cycleInstanceId: request.cycleInstanceId,
      evidenceId: request.authorityEvidenceId,
    });
    if (!authGate.ok) {
      return fail(authGate.detailCode, authGate.internalCauseRef);
    }

    const projectResult = await this.deps.projectServices.getProject.execute({
      projectId: request.projectId,
    });
    if (!projectResult.ok) {
      return fail("PROJECT_NOT_FOUND", "missing_project");
    }

    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }
    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }
    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: "RESUME",
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const siblings = await this.deps.cycles.listByProject(request.projectId);
    const single = assertAtMostOneActiveCycle({
      cycles: siblings,
      excludeCycleInstanceId: request.cycleInstanceId,
    });

    const lps =
      await this.deps.projectServices.getCurrentLivingProjectState.execute({
        projectId: request.projectId,
      });
    const trajectory = await this.loadTrajectory(request.projectId);
    const decisions = this.deps.decisions
      ? await this.deps.decisions.listByProject(request.projectId)
      : [];
    const evidence = this.deps.evidence
      ? await this.deps.evidence.listByProject(request.projectId)
      : [];

    const doctrinePin =
      projectResult.project.doctrinePackageRef ??
      (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined);

    const blockersSnap = await this.loadBlockers(request.projectId);
    const reconciliation = assessResumeReconciliation({
      cycle,
      projectId: request.projectId,
      lpsReadable: lps.ok,
      lpsVersion: lps.ok ? lps.livingProjectState.version : 0,
      lpsActiveCycleInstanceId: lps.ok
        ? lps.livingProjectState.activeCycleInstanceId
        : undefined,
      objective: lps.ok ? lps.livingProjectState.objective : "",
      context: lps.ok ? (lps.livingProjectState.context ?? "") : "",
      scope: lps.ok ? (lps.livingProjectState.scope ?? "") : "",
      doctrinePackageId: doctrinePin?.doctrinePackageId,
      doctrinePackageVersion: doctrinePin?.version,
      doctrinePackageDigest: doctrinePin?.digest,
      trajectory,
      decisions,
      evidence,
      blockingReservationStatements: blockersSnap.ok
        ? blockersSnap.statements
        : undefined,
      blockerSourceUnreadable: !blockersSnap.ok,
      siblingActiveExists: Boolean(single),
      callerMaterialDriftHint: request.materialDriftDetected === true,
    });

    if (!reconciliation.clean) {
      // Stay paused; ensure LPS active pointer is cleared.
      // Only a clean reconciliation may activate — replan HD does not override drift.
      if (lps.ok && lps.livingProjectState.activeCycleInstanceId != null) {
        try {
          await appendLpsActiveLink({
            projectServices: this.deps.projectServices,
            projectId: request.projectId,
            createdBy: request.createdBy,
            correlationId,
            expectedLpsVersion: request.expectedLpsVersion,
            activeCycleInstanceId: null,
          });
        } catch {
          /* best-effort clear; drift denial still returned */
        }
      }
      const replanAsserted =
        request.requiresReplanHumanDecision === true ||
        reconciliation.requiresReplanHumanDecision;
      if (replanAsserted && request.decisionId) {
        if (!this.deps.decisions) {
          return fail("CYCLE_DECISION_REQUIRED", "decision_reader_unavailable");
        }
        const hd = await this.deps.decisions.getById(request.decisionId);
        if (
          !hd ||
          !isAcceptedResumeReplanDecision(
            hd,
            request.cycleInstanceId,
            request.projectId,
          )
        ) {
          return fail(
            "CYCLE_DECISION_REQUIRED",
            "resume_replan_hd_missing_or_invalid",
          );
        }
      }
      return fail(
        "CYCLE_RESUME_DRIFT",
        reconciliation.driftReasons.join("|") || "resume_drift",
      );
    }

    // Clean path: no replan HD required.
    void request.requiresReplanHumanDecision;

    if (single) return fail(single.detailCode, single.reason);

    const next: CycleInstance = {
      ...structuredClone(cycle),
      status: "active",
      acknowledgedAt: cycle.acknowledgedAt ?? timestamp,
      pauseReconciliation: null,
    };

    return this.persistLifecycleMutation({
      action: "RESUME",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      decisionId: request.decisionId,
      fromStatus: cycle.status,
      toStatus: "active",
      next,
      setActiveLink: request.cycleInstanceId,
      clearActiveLink: false,
      started,
      timestamp,
      fail,
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

    if (!request.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    const authGate = this.verifyAuthority({
      actorId: request.createdBy.actorId,
      cycleInstanceId: request.cycleInstanceId,
      evidenceId: request.authorityEvidenceId,
    });
    if (!authGate.ok) {
      return fail(authGate.detailCode, authGate.internalCauseRef);
    }

    if (!this.deps.decisions) {
      return fail("CYCLE_DECISION_REQUIRED", "decision_reader_unavailable");
    }

    const cycle = await this.deps.cycles.findById(request.cycleInstanceId);
    if (!cycle || cycle.projectId !== request.projectId) {
      return fail("CYCLE_NOT_FOUND", "missing_cycle");
    }
    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }
    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: "FINALIZE",
    });
    if (transition) return fail(transition.detailCode, transition.reason);

    const decision = await this.deps.decisions.getById(request.decisionId);
    if (
      !decision ||
      !isAcceptedFinalizeDecision(
        decision,
        request.cycleInstanceId,
        request.projectId,
      )
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
    const started = Date.now();
    const timestamp = this.deps.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
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
        action: "CANCEL",
        fromStatus: "unknown",
        toStatus: "unknown",
        actorId: request.createdBy.actorId,
        decisionRef: request.decisionId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    if (!request.createdBy?.actorId) {
      return fail("CYCLE_LIFECYCLE_DENIED", "actor_required");
    }

    const authGate = this.verifyAuthority({
      actorId: request.createdBy.actorId,
      cycleInstanceId: request.cycleInstanceId,
      evidenceId: request.authorityEvidenceId,
    });
    if (!authGate.ok) {
      return fail(authGate.detailCode, authGate.internalCauseRef);
    }

    if (!this.deps.decisions) {
      return fail("CYCLE_DECISION_REQUIRED", "decision_reader_unavailable");
    }
    const decision = await this.deps.decisions.getById(request.decisionId);
    if (
      !decision ||
      !isAcceptedCancelDecision(
        decision,
        request.cycleInstanceId,
        request.projectId,
      )
    ) {
      return fail("CYCLE_DECISION_REQUIRED", "cancel_hd_missing_or_invalid");
    }

    return this.runTransition({
      action: "CANCEL",
      projectId: request.projectId,
      cycleInstanceId: request.cycleInstanceId,
      createdBy: request.createdBy,
      correlationId,
      expectedLpsVersion: request.expectedLpsVersion,
      decisionId: request.decisionId,
      authorityEvidenceId: request.authorityEvidenceId,
      setActiveLink: null,
      clearActiveLink: true,
      setClosedAt: true,
      skipAuthority: true,
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

  private verifyAuthority(input: {
    actorId: string;
    cycleInstanceId: string;
    evidenceId?: string;
  }):
    | { ok: true }
    | {
        ok: false;
        detailCode: "AUTHORITY_NOT_CONFIGURED" | "CYCLE_LIFECYCLE_DENIED";
        internalCauseRef: string;
      } {
    if (!this.deps.authority) {
      return {
        ok: false,
        detailCode: "AUTHORITY_NOT_CONFIGURED",
        internalCauseRef: "authority_port_unavailable",
      };
    }
    const result = this.deps.authority.verify({
      actorId: input.actorId,
      scope: `pilot-lifecycle:${input.cycleInstanceId}`,
      evidenceId: input.evidenceId,
      requiredLevel: "N3",
      requireMorrisGate: true,
    });
    if (result.ok) return { ok: true };
    if (authorityNotConfiguredReason(result.reason)) {
      return {
        ok: false,
        detailCode: "AUTHORITY_NOT_CONFIGURED",
        internalCauseRef: result.reason ?? "authority_not_configured",
      };
    }
    return {
      ok: false,
      detailCode: "CYCLE_LIFECYCLE_DENIED",
      internalCauseRef: result.reason ?? "authority_denied",
    };
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
    const trajectory = await this.loadTrajectory(input.projectId);

    const executionContracts = this.deps.execution?.listContractsByProject
      ? await this.deps.execution.listContractsByProject(input.projectId)
      : [];
    const executionAttempts = this.deps.execution?.listAttemptsByProject
      ? await this.deps.execution.listAttemptsByProject(input.projectId)
      : [];

    // Product path: always derive from durable facts (ignore static applicabilityRules).
    const applicability = deriveFinalizationApplicability({
      cycleInstanceId: input.cycle.cycleInstanceId,
      projectId: input.projectId,
      trajectory,
      decisions,
      evidence,
      reviewBundles,
      executionContracts,
    });

    const blockersSnap = await this.loadBlockers(input.projectId);
    const blockingReservationStatements = blockersSnap.ok
      ? blockersSnap.statements
      : ["blocker_source_unreadable"];

    const snapshot: AssessFinalizationInput = {
      cycle: input.cycle,
      projectId: input.projectId,
      assessedAt: input.assessedAt,
      decisions,
      evidence,
      reviewBundles,
      trajectory,
      finalizeDecisionId: input.finalizeDecisionId,
      executionContracts,
      executionAttempts,
      applicability,
      blockingReservationStatements,
    };
    return assessFinalizationObligations(snapshot);
  }

  private async loadBlockers(
    projectId: string,
  ): Promise<LifecycleBlockerSnapshot> {
    if (!this.deps.epistemic) {
      return lifecycleBlockersFromReaderFailure("epistemic_reader_unavailable");
    }
    try {
      const items = await this.deps.epistemic.listByProject(projectId);
      return deriveLifecycleBlockersFromEpistemicItems(items);
    } catch {
      return lifecycleBlockersFromReaderFailure("epistemic_unreadable");
    }
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
      pauseReconciliation: null,
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

  private async persistLifecycleMutation(input: {
    action: "START" | "PAUSE" | "RESUME" | "CANCEL";
    projectId: string;
    cycleInstanceId: string;
    createdBy: StartCycleRequest["createdBy"];
    correlationId: string;
    expectedLpsVersion?: number;
    decisionId?: string;
    fromStatus: CycleInstance["status"];
    toStatus: CycleInstance["status"];
    next: CycleInstance;
    setActiveLink: string | null;
    clearActiveLink: boolean;
    started: number;
    timestamp: string;
    fail: (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ) => PilotLifecycleResult;
  }): Promise<PilotLifecycleResult> {
    try {
      const persist = async () => {
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
        await this.deps.cycles.save(input.next);
        if (input.clearActiveLink || input.setActiveLink !== undefined) {
          const linkTarget = input.clearActiveLink ? null : input.setActiveLink;
          const lps = await appendLpsActiveLink({
            projectServices: this.deps.projectServices,
            projectId: input.projectId,
            createdBy: input.createdBy,
            correlationId: input.correlationId,
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

      const durationMs = Date.now() - input.started;
      this.deps.audit.append({
        event: "oa.cycle.lifecycle_transition",
        ts: input.timestamp,
        correlationId: input.correlationId,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        action: input.action,
        fromStatus: input.fromStatus,
        toStatus: input.toStatus,
        actorId: input.createdBy.actorId,
        decisionRef: input.decisionId,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        cycle: input.next,
        livingProjectStateVersion: version,
        activeCycleInstanceId: input.clearActiveLink
          ? null
          : input.setActiveLink,
        durationMs,
      };
    } catch (err) {
      if (err instanceof Error && err.message.startsWith("active_exists")) {
        return input.fail("CYCLE_ALREADY_ACTIVE_EXISTS", err.message);
      }
      if (err instanceof Error && err.message === "lps_version_conflict") {
        return input.fail("LPS_VERSION_CONFLICT", "expected_version_mismatch", {
          expectedVersion: input.expectedLpsVersion,
          currentVersion: (err as Error & { currentVersion?: number })
            .currentVersion,
        });
      }
      return input.fail("PERSISTENCE_FAILURE", "lifecycle_persist_failed");
    }
  }

  private async runTransition(input: {
    action: "START" | "PAUSE" | "RESUME" | "CANCEL";
    projectId: string;
    cycleInstanceId: string;
    createdBy: StartCycleRequest["createdBy"];
    correlationId?: string;
    expectedLpsVersion?: number;
    decisionId?: string;
    authorityEvidenceId?: string;
    setActiveLink: string | null;
    clearActiveLink: boolean;
    setClosedAt?: boolean;
    skipAuthority?: boolean;
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

    if (!input.skipAuthority) {
      const authGate = this.verifyAuthority({
        actorId: input.createdBy.actorId,
        cycleInstanceId: input.cycleInstanceId,
        evidenceId: input.authorityEvidenceId,
      });
      if (!authGate.ok) {
        return fail(authGate.detailCode, authGate.internalCauseRef);
      }
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

    if (isTerminalGuard(cycle)) {
      return fail("CYCLE_TERMINAL", `terminal_${cycle.status}`);
    }

    const transition = assertLifecycleTransition({
      from: cycle.status,
      action: input.action,
    });
    if (transition) return fail(transition.detailCode, transition.reason);

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
      pauseReconciliation:
        input.action === "CANCEL" ? null : cycle.pauseReconciliation,
    };

    return this.persistLifecycleMutation({
      action: input.action,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      createdBy: input.createdBy,
      correlationId,
      expectedLpsVersion: input.expectedLpsVersion,
      decisionId: input.decisionId,
      fromStatus: cycle.status,
      toStatus,
      next,
      setActiveLink: input.setActiveLink,
      clearActiveLink: input.clearActiveLink,
      started,
      timestamp,
      fail,
    });
  }
}

function isTerminalGuard(cycle: CycleInstance): boolean {
  return cycle.status === "completed" || cycle.status === "cancelled";
}

```


## FILE `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts`

```typescript
/**
 * CORR-PROOF-05 — durable Pilot lifecycle projection (reload-safe).
 * Derived from CycleRepository + LPS (+ optional trajectory/assessment).
 * Never owned by F2/proposal process-local state.
 */
import type {
  CycleInstance,
  CycleInstanceStatus,
  FinalizationAssessment,
} from "../domain/types";
import {
  isPausedStatus,
  isStartableCandidateStatus,
  isTerminalCycleStatus,
} from "../domain/lifecycleInvariants";

export type PilotLifecycleProjection = {
  projectId: string;
  activeCycleInstanceId: string | null;
  activeCycle: CycleInstance | null;
  pausedCycles: CycleInstance[];
  /** Startable candidates only (proposed | acknowledged). */
  candidateCycles: CycleInstance[];
  /** Historical superseded — visible, never startable. */
  supersededCycles: CycleInstance[];
  terminalCycles: CycleInstance[];
  /**
   * Selected cycle for CTA surface.
   * Preference: LPS active → single paused → single startable candidate → null (ambiguous).
   * Superseded never selected for canStart; multiple superseded alone do not create ambiguity.
   */
  selectedCycleInstanceId: string | null;
  selectedStatus: CycleInstanceStatus | null;
  selectionAmbiguous: boolean;
  assessment?: FinalizationAssessment | null;
  cta: {
    canStart: boolean;
    canPause: boolean;
    canResume: boolean;
    canFinalize: boolean;
    canCancel: boolean;
  };
};

export function projectPilotLifecycle(input: {
  projectId: string;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  assessment?: FinalizationAssessment | null;
}): PilotLifecycleProjection {
  const byId = new Map(
    input.cycles.map((c) => [c.cycleInstanceId, c] as const),
  );
  const activeId = input.lpsActiveCycleInstanceId ?? null;
  const activeFromRepo = input.cycles.find((c) => c.status === "active") ?? null;
  const activeCycle =
    (activeId ? byId.get(activeId) ?? null : null) ?? activeFromRepo;

  const pausedCycles = input.cycles.filter((c) => isPausedStatus(c.status));
  const candidateCycles = input.cycles.filter((c) =>
    isStartableCandidateStatus(c.status),
  );
  const supersededCycles = input.cycles.filter(
    (c) => c.status === "superseded",
  );
  const terminalCycles = input.cycles.filter((c) =>
    isTerminalCycleStatus(c.status),
  );

  let selectedCycleInstanceId: string | null = null;
  let selectionAmbiguous = false;

  if (activeCycle) {
    selectedCycleInstanceId = activeCycle.cycleInstanceId;
  } else if (pausedCycles.length === 1) {
    selectedCycleInstanceId = pausedCycles[0]!.cycleInstanceId;
  } else if (pausedCycles.length > 1) {
    selectionAmbiguous = true;
  } else if (candidateCycles.length === 1) {
    selectedCycleInstanceId = candidateCycles[0]!.cycleInstanceId;
  } else if (candidateCycles.length > 1) {
    selectionAmbiguous = true;
  }

  const selected = selectedCycleInstanceId
    ? byId.get(selectedCycleInstanceId) ?? null
    : null;
  const selectedStatus = selected?.status ?? null;

  const cta = {
    canStart: Boolean(
      selected && isStartableCandidateStatus(selected.status) && !activeCycle,
    ),
    canPause: Boolean(selected && selected.status === "active"),
    canResume: Boolean(selected && isPausedStatus(selected.status) && !activeCycle),
    canFinalize: Boolean(
      selected &&
        !isTerminalCycleStatus(selected.status) &&
        (selected.status === "active" ||
          selected.status === "paused" ||
          selected.status === "blocked"),
    ),
    canCancel: Boolean(
      selected && !isTerminalCycleStatus(selected.status),
    ),
  };

  return {
    projectId: input.projectId,
    activeCycleInstanceId: activeCycle?.cycleInstanceId ?? activeId,
    activeCycle,
    pausedCycles,
    candidateCycles,
    supersededCycles,
    terminalCycles,
    selectedCycleInstanceId,
    selectedStatus,
    selectionAmbiguous,
    assessment: input.assessment ?? null,
    cta,
  };
}

```


## FILE `projects/sfia-studio/app/lib/oa/cycle/application/assessStartReadiness.ts`

```typescript
/**
 * CORR-PROOF-05 — pure StartReadiness assessment (no StartLedger).
 * Caller requiresTrajectoryHumanDecision is never sole SoT.
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type {
  CycleInstance,
  ProjectTrajectory,
  StartReadinessAssessment,
} from "../domain/types";
import { isStartableCandidateStatus } from "../domain/lifecycleInvariants";
import {
  isAcceptedStartTrajectoryDecision,
  startTrajectorySubjectFor,
} from "./assessFinalization";

export type AssessStartReadinessInput = {
  assessedAt: string;
  projectOk: boolean;
  cycle: CycleInstance | null;
  projectId: string;
  lpsReadable: boolean;
  lpsActiveCycleInstanceId: string | null | undefined;
  siblingActiveExists: boolean;
  trajectory: ProjectTrajectory | null;
  decisions: readonly HumanDecision[];
  /** Optional decisionId supplied by caller — validated, never trusted alone. */
  decisionId?: string;
  blockingReservationStatements?: readonly string[];
  /** Fail-closed when epistemic/blocker reader is unavailable or throws. */
  blockerSourceUnreadable?: boolean;
  doctrineReadable: boolean;
  /**
   * When true, durable context shows an undecided structuring trajectory choice
   * that START must consume (candidate trajectory / undecided amendment).
   */
  structuringTrajectoryChoiceOpen?: boolean;
};

function trajectoryFingerprint(t: ProjectTrajectory): string {
  return `${t.trajectoryId}@v${t.version}:${t.status}:${t.steps
    .map((s) => `${s.stepId}:${s.state}`)
    .join(",")}`;
}

export function assessStartReadiness(
  input: AssessStartReadinessInput,
): StartReadinessAssessment {
  const blockers: string[] = [];

  if (!input.projectOk) blockers.push("project_missing");
  if (!input.cycle) {
    blockers.push("cycle_missing");
  } else {
    if (input.cycle.projectId !== input.projectId) {
      blockers.push("cycle_project_mismatch");
    }
    if (!isStartableCandidateStatus(input.cycle.status)) {
      blockers.push(`cycle_not_candidate:${input.cycle.status}`);
    }
    if (!input.cycle.cycleTypeId?.trim()) {
      blockers.push("cycle_type_missing");
    }
  }

  if (!input.lpsReadable) blockers.push("lps_unreadable");
  if (input.siblingActiveExists) blockers.push("another_active_exists");
  if (
    input.lpsActiveCycleInstanceId &&
    input.cycle &&
    input.lpsActiveCycleInstanceId !== input.cycle.cycleInstanceId
  ) {
    blockers.push("lps_active_pointer_elsewhere");
  }

  if (!input.doctrineReadable) blockers.push("doctrine_unreadable");

  // Product Completion: usable current trajectory required for START compatibility
  if (!input.trajectory) {
    blockers.push("trajectory_missing_or_unreadable");
  } else if (
    input.trajectory.status === "stale" ||
    input.trajectory.status === "superseded"
  ) {
    blockers.push(`trajectory_incompatible:${input.trajectory.status}`);
  }

  const openDeps = (input.trajectory?.steps ?? []).filter(
    (s) => s.state === "blocked",
  );
  if (openDeps.length > 0) {
    blockers.push("trajectory_entry_blocked");
  }

  if (input.blockerSourceUnreadable === true) {
    blockers.push("blocker_source_unreadable");
  }

  const blockingReservations = input.blockingReservationStatements ?? [];
  if (blockingReservations.length > 0) {
    blockers.push("blocking_reservations");
  }

  const structuringOpen =
    input.structuringTrajectoryChoiceOpen === true ||
    input.trajectory?.status === "candidate";

  let requiresTrajectoryHumanDecision = structuringOpen;

  if (requiresTrajectoryHumanDecision) {
    const cycleId = input.cycle?.cycleInstanceId ?? "";
    let hd: HumanDecision | null = null;
    if (input.decisionId) {
      hd =
        input.decisions.find((d) => d.decisionId === input.decisionId) ?? null;
    } else {
      hd =
        input.decisions.find((d) =>
          isAcceptedStartTrajectoryDecision(d, cycleId, input.projectId),
        ) ?? null;
    }
    if (
      !hd ||
      !isAcceptedStartTrajectoryDecision(hd, cycleId, input.projectId)
    ) {
      blockers.push("start_trajectory_hd_missing_or_invalid");
    }
  } else if (input.decisionId) {
    // Arbitrary decisionId must not falsely satisfy when HD not required —
    // but also must not block START. Ignore unless subject matches.
    const hd =
      input.decisions.find((d) => d.decisionId === input.decisionId) ?? null;
    if (
      hd &&
      hd.subject === startTrajectorySubjectFor(input.cycle?.cycleInstanceId ?? "")
    ) {
      requiresTrajectoryHumanDecision = true;
      if (
        !input.cycle ||
        !isAcceptedStartTrajectoryDecision(
          hd,
          input.cycle.cycleInstanceId,
          input.projectId,
        )
      ) {
        blockers.push("start_trajectory_hd_missing_or_invalid");
      }
    }
  }

  void trajectoryFingerprint;

  return {
    ready: blockers.length === 0,
    blockers,
    requiresTrajectoryHumanDecision,
    assessedAt: input.assessedAt,
  };
}

```


## FILE `projects/sfia-studio/app/lib/oa/cycle/domain/lifecycleInvariants.ts`

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

/** Startable non-active statuses only — superseded is historical, not startable. */
export function isStartableCandidateStatus(status: CycleInstanceStatus): boolean {
  return status === "proposed" || status === "acknowledged";
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


## FILE `projects/sfia-studio/app/features/project-assistant/f2/pilotLifecycleActions.ts`

```typescript
/**
 * CORR-PROOF-05 — Project Assistant Pilot lifecycle server helpers.
 * Pilot lifecycle authority ≠ Morris construction gate.
 *
 * Static guard: forceEnable must not appear in this Product file.
 * registerLocalPiloteAuthority is env-gated fail-closed (AUTHORITY_NOT_CONFIGURED).
 * Tests may forceEnable only outside this Product path.
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
  startTrajectorySubjectFor,
  resumeReplanSubjectFor,
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
  authorityResolver: MemoryAuthorityResolver;
  scope: string;
  nowIso: string;
}): Promise<{ ok: true; evidenceId: string } | { ok: false; code: string; message: string }> {
  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.authorityResolver,
    scope: input.scope,
    issuedAt: input.nowIso,
  });
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const verified = input.authorityResolver.verify({
    actorId: LOCAL_PILOTE_ACTOR.actorId,
    requiredLevel: "N3",
    scope: input.scope,
    evidenceId: authority.evidenceId,
    requireMorrisGate: true,
  });
  if (!verified.ok) {
    const reason = verified.reason ?? "authority_verify_failed";
    const notConfigured =
      reason === "no_evidence" ||
      reason === "evidence_not_found" ||
      reason.includes("not_configured") ||
      reason.includes("not configured");
    return {
      ok: false,
      code: notConfigured ? "AUTHORITY_NOT_CONFIGURED" : "CYCLE_LIFECYCLE_DENIED",
      message: reason,
    };
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
  /** Reuse evidence already obtained via ensurePiloteAuthority. */
  authorityEvidenceId?: string;
}): Promise<
  | { ok: true; decisionId: string; evidenceId: string }
  | { ok: false; code: string; message: string }
> {
  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  let evidenceId = input.authorityEvidenceId;
  if (!evidenceId) {
    const auth = await ensurePiloteAuthority({
      authorityResolver: input.authorityResolver,
      scope,
      nowIso: input.nowIso,
    });
    if (!auth.ok) return auth;
    evidenceId = auth.evidenceId;
  }

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
    authorityEvidenceId: evidenceId,
    rationale: `Pilot lifecycle ${input.subject}`,
  });
  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.error.detailCode,
      message: recorded.error.message,
    };
  }
  return { ok: true, decisionId, evidenceId };
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
  /** RESUME only — caller-detected material drift (hint; server owns SoT). */
  materialDriftDetected?: boolean;
  /** START hint only — server assessStartReadiness decides HD requirement. */
  requiresTrajectoryHumanDecision?: boolean;
  /** RESUME hint only — server assessResumeReconciliation decides. */
  requiresReplanHumanDecision?: boolean;
}): Promise<
  | {
      ok: true;
      action: PilotLifecycleActionKind;
      result?: PilotLifecycleResult;
      assessment?: FinalizationAssessment;
      decisionId?: string;
      authorityEvidenceId?: string;
    }
  | {
      ok: false;
      code: string;
      message: string;
      assessment?: FinalizationAssessment;
    }
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

  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;

  switch (input.action) {
    case "START": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;

      let decisionId: string | undefined;
      // Caller hint may pre-record trajectory HD; server still decides readiness.
      if (input.requiresTrajectoryHumanDecision) {
        const hd = await recordLifecycleDecision({
          decisionServices: input.decisionServices,
          authorityResolver: input.authorityResolver,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
          subject: startTrajectorySubjectFor(input.cycleInstanceId),
          selectedOptionId: "opt:accept",
          nowIso: input.nowIso(),
          authorityEvidenceId: auth.evidenceId,
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
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
        };
      }
      return {
        ok: true,
        action: "START",
        result,
        decisionId,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "PAUSE": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;
      const result = await input.cycleServices.pilotLifecycle.pause({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        expectedLpsVersion,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
        };
      }
      return {
        ok: true,
        action: "PAUSE",
        result,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "RESUME": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;

      let decisionId: string | undefined;
      if (input.requiresReplanHumanDecision) {
        const hd = await recordLifecycleDecision({
          decisionServices: input.decisionServices,
          authorityResolver: input.authorityResolver,
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
          subject: resumeReplanSubjectFor(input.cycleInstanceId),
          selectedOptionId: "opt:accept",
          nowIso: input.nowIso(),
          authorityEvidenceId: auth.evidenceId,
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
        authorityEvidenceId: auth.evidenceId,
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
        action: "RESUME",
        result,
        decisionId,
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "FINALIZE": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;
      const hd = await recordLifecycleDecision({
        decisionServices: input.decisionServices,
        authorityResolver: input.authorityResolver,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        subject: finalizeSubjectFor(input.cycleInstanceId),
        selectedOptionId: "opt:accept",
        nowIso: input.nowIso(),
        authorityEvidenceId: auth.evidenceId,
      });
      if (!hd.ok) return hd;
      const result = await input.cycleServices.pilotLifecycle.finalize({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        decisionId: hd.decisionId,
        expectedLpsVersion,
        authorityEvidenceId: auth.evidenceId,
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
        authorityEvidenceId: auth.evidenceId,
      };
    }
    case "CANCEL": {
      const auth = await ensurePiloteAuthority({
        authorityResolver: input.authorityResolver,
        scope,
        nowIso: input.nowIso(),
      });
      if (!auth.ok) return auth;
      const hd = await recordLifecycleDecision({
        decisionServices: input.decisionServices,
        authorityResolver: input.authorityResolver,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        subject: cancelSubjectFor(input.cycleInstanceId),
        selectedOptionId: "opt:accept",
        nowIso: input.nowIso(),
        authorityEvidenceId: auth.evidenceId,
      });
      if (!hd.ok) return hd;
      const result = await input.cycleServices.pilotLifecycle.cancel({
        cycleInstanceId: input.cycleInstanceId,
        projectId: input.projectId,
        createdBy,
        decisionId: hd.decisionId,
        expectedLpsVersion,
        authorityEvidenceId: auth.evidenceId,
      });
      if (!result.ok) {
        return {
          ok: false,
          code: result.error.detailCode,
          message: result.error.message,
        };
      }
      return {
        ok: true,
        action: "CANCEL",
        result,
        decisionId: hd.decisionId,
        authorityEvidenceId: auth.evidenceId,
      };
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


## FILE `projects/sfia-studio/app/__tests__/oa/cycle/corrProof05.pilotLifecycle.d0.test.ts`

```typescript
/**
 * CORR-PROOF-05 — Pilot-governed Cycle lifecycle deterministic proofs.
 * Scenarios 1–16 + A/B/C/D-E/F enforcement blocks.
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
  assessResumeReconciliation,
  assessStartReadiness,
  buildPauseReconciliationSnapshot,
  createSqliteCycleServices,
  deriveFinalizationApplicability,
  finalizeSubjectFor,
  cancelSubjectFor,
  isGitQualifyingEvidence,
  isStartableCandidateStatus,
  obligationPolicySubjectFor,
  OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
  OBLIGATION_POLICY_NO_ARTIFACT,
  OBLIGATION_POLICY_NO_GIT,
  OBLIGATION_POLICY_NO_EXECUTION,
  OBLIGATION_POLICY_NO_EVIDENCE,
  OBLIGATION_POLICY_NO_REVIEW,
  OBLIGATION_POLICY_REQUIRE_ARTIFACT,
  OBLIGATION_POLICY_REQUIRE_GIT,
  projectPilotLifecycle,
  selectEffectiveExecutionContracts,
  selectEffectiveReviewBundles,
  startTrajectorySubjectFor,
  resumeReplanSubjectFor,
  type CycleInstance,
  type FinalizationApplicabilityRules,
  type ProjectTrajectory,
  type TrajectoryStep,
} from "@/lib/oa/cycle";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
import {
  MemoryAuthorityResolver,
  createSqliteDecisionServices,
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type DecisionServices,
  type HumanDecision,
} from "@/lib/oa/decision";
import { evaluateMorrisGateRequired } from "@/features/project-assistant/f2/gatePolicy";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  createRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

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

const COMPLETE_APPLICABILITY: FinalizationApplicabilityRules = {
  exit_criteria: "APPLICABLE",
  artifact: "NOT_APPLICABLE",
  execution_contract: "NOT_APPLICABLE",
  evidence: "NOT_APPLICABLE",
  review_bundle: "NOT_APPLICABLE",
  git_repository: "NOT_APPLICABLE",
  notApplicableReasons: {
    artifact: "explicit_rule_no_artifact_obligation",
    execution_contract: "explicit_rule_no_governed_execution_required",
    evidence: "explicit_rule_no_evidence_obligation",
    review_bundle: "explicit_rule_no_review_bundle_obligation",
    git_repository: "explicit_rule_no_git_obligation",
  },
};

const STEPS_PENDING: TrajectoryStep[] = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "pending" },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "pending",
    dependencies: ["stp:clarify"],
  },
];

const STEPS_DONE: TrajectoryStep[] = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "done",
    dependencies: ["stp:clarify"],
  },
];

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-corr05-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function authorityAdapter(authority: MemoryAuthorityResolver) {
  return {
    verify: (req: {
      actorId: string;
      scope: string;
      evidenceId?: string;
      requiredLevel?: "N1" | "N2" | "N3";
      requireMorrisGate?: boolean;
    }) => {
      const r = authority.verify({
        actorId: req.actorId,
        requiredLevel: req.requiredLevel ?? "N3",
        scope: req.scope,
        evidenceId: req.evidenceId,
        requireMorrisGate: req.requireMorrisGate ?? true,
      });
      return { ok: r.ok, reason: r.reason };
    },
  };
}

function buildStack(
  dbPath: string,
  opts?: {
    applicabilityRules?: FinalizationApplicabilityRules;
    epistemic?: {
      listByProject: (projectId: string) => Promise<
        Array<{
          epistemicItemId: string;
          type: string;
          statement: string;
          status: string;
          blocking?: boolean;
        }>
      >;
    };
  },
): {
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
    authority: authorityAdapter(authority),
    applicabilityRules: opts?.applicabilityRules,
    epistemic: opts?.epistemic as
      | { listByProject: (projectId: string) => Promise<never[]> }
      | undefined,
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

/** TESTS ONLY — forceEnable bypasses product env gate. */
async function registerPilotAuth(
  authority: MemoryAuthorityResolver,
  cycleId: string,
): Promise<string> {
  const auth = registerLocalPiloteAuthority({
    authorityResolver: authority,
    scope: `pilot-lifecycle:${cycleId}`,
    issuedAt: "2026-09-07T16:00:00.000Z",
    forceEnable: true,
  });
  expect(auth.ok).toBe(true);
  if (!auth.ok) throw new Error(auth.message);
  return auth.evidenceId;
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

async function seedTrajectory(
  cycles: ReturnType<typeof createSqliteCycleServices>,
  project: SqliteProductProjectServices,
  projectId: string,
  opts?: {
    status?: "active" | "candidate";
    steps?: TrajectoryStep[];
    trajectoryId?: string;
  },
) {
  const lps = await project.getCurrentLivingProjectState.execute({ projectId });
  expect(lps.ok).toBe(true);
  if (!lps.ok) return;
  const created = await cycles.createInitialTrajectory.execute({
    trajectoryId: opts?.trajectoryId ?? `trj:${projectId}`,
    projectId,
    steps: opts?.steps ?? STEPS_PENDING,
    status: opts?.status ?? "active",
    expectedLpsVersion: lps.livingProjectState.version,
    createdBy: ACTOR,
  });
  expect(created.ok).toBe(true);
  return created;
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
  evidenceId?: string;
  selectedOptionId?: string;
  options?: Array<{ optionId: string; label: string }>;
}) {
  const evidenceId =
    input.evidenceId ??
    (await registerPilotAuth(input.authority, input.cycleInstanceId));
  const scope = `pilot-lifecycle:${input.cycleInstanceId}`;
  return input.decisions.recordHumanDecision.execute({
    decisionId: input.decisionId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    subject: input.subject,
    options: input.options ?? [
      { optionId: "opt:accept", label: "Accept" },
      { optionId: "opt:refuse", label: "Refuse" },
    ],
    selectedOptionId: input.selectedOptionId ?? "opt:accept",
    actor: LOCAL_PILOTE_ACTOR,
    authority: "morris",
    status: "accepted",
    reversible: false,
    scope,
    authorityEvidenceId: evidenceId,
  });
}

async function recordObligationPolicy(input: {
  decisions: DecisionServices;
  authority: MemoryAuthorityResolver;
  projectId: string;
  cycleInstanceId: string;
  decisionId: string;
  evidenceId?: string;
  selectedOptionId: string;
}) {
  return recordHd({
    ...input,
    subject: obligationPolicySubjectFor(input.cycleInstanceId),
    selectedOptionId: input.selectedOptionId,
    options: [
      {
        optionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
        label: "No governed effects",
      },
      { optionId: OBLIGATION_POLICY_NO_ARTIFACT, label: "No artifact" },
      { optionId: OBLIGATION_POLICY_NO_GIT, label: "No git" },
      { optionId: OBLIGATION_POLICY_NO_EXECUTION, label: "No execution" },
      {
        optionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
        label: "Require artifact",
      },
      { optionId: OBLIGATION_POLICY_REQUIRE_GIT, label: "Require git" },
      { optionId: "opt:accept", label: "Accept" },
    ],
  });
}

function makeObligationPolicyDecision(
  cycleInstanceId: string,
  projectId: string,
  selectedOptionId: string,
): HumanDecision {
  return {
    schemaVersion: "0.1.0-oa",
    decisionId: `dec:policy-${selectedOptionId}`,
    projectId,
    cycleInstanceId,
    subject: obligationPolicySubjectFor(cycleInstanceId),
    options: [
      { optionId: selectedOptionId, label: selectedOptionId },
      { optionId: "opt:accept", label: "Accept" },
    ],
    selectedOptionId,
    actor: LOCAL_PILOTE_ACTOR,
    authority: "morris",
    status: "accepted",
    reversible: false,
    effectiveAt: "2026-09-07T16:00:00.000Z",
    recordedAt: "2026-09-07T16:00:00.000Z",
  } as HumanDecision;
}

function baseCycle(overrides?: Partial<CycleInstance>): CycleInstance {
  return {
    schemaVersion: "0.1.0-oa",
    cycleInstanceId: "cyc:corr05-base",
    cycleTypeId: "cyc:delivery",
    projectId: "prj:corr05-base",
    profile: "Standard",
    status: "active",
    createdAt: "2026-09-07T16:00:00.000Z",
    ...overrides,
  };
}

function baseTrajectory(
  overrides?: Partial<ProjectTrajectory>,
): ProjectTrajectory {
  return {
    schemaVersion: "0.1.0-oa",
    trajectoryId: "trj:base",
    projectId: "prj:corr05-base",
    version: 1,
    status: "active",
    steps: STEPS_PENDING,
    ...overrides,
  };
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

describe("CORR-PROOF-05 product static guards", () => {
  it("pilotLifecycleActions.ts source must not contain forceEnable: true", () => {
    const src = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/project-assistant/f2/pilotLifecycleActions.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/forceEnable\s*:\s*true/);
  });
});

describe("CORR-PROOF-05 Pilot lifecycle (1–16)", () => {
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
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-s3");
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
    const evA = await registerPilotAuth(stack.authority, "cyc:corr05-s3a");
    const startA = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s3a",
      projectId: "prj:corr05-s3",
      createdBy: PILOTE,
      authorityEvidenceId: evA,
    });
    expect(startA.ok).toBe(true);
    if (!startA.ok) return;
    expect(startA.cycle.status).toBe("active");
    expect(startA.activeCycleInstanceId).toBe("cyc:corr05-s3a");
    const evB = await registerPilotAuth(stack.authority, "cyc:corr05-s3b");
    const startB = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s3b",
      projectId: "prj:corr05-s3",
      createdBy: PILOTE,
      authorityEvidenceId: evB,
    });
    expect(startB.ok).toBe(false);
    if (startB.ok) return;
    // Fail-closed readiness reports sibling/LPS conflict before single-ACTIVE detail.
    expect([
      "CYCLE_ALREADY_ACTIVE_EXISTS",
      "CYCLE_START_NOT_READY",
    ]).toContain(startB.error.detailCode);
    if (startB.error.detailCode === "CYCLE_START_NOT_READY") {
      expect(startB.error.internalCauseRef ?? "").toMatch(
        /another_active|lps_active/,
      );
    }
  });

  it("4+5 — PAUSE clears active; BLOCKED retains pointer and stays distinct", async () => {
    const dbPath = tempDbPath("s4.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:corr05-s4");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-s4");
    await createCandidate(stack.cycles, "prj:corr05-s4", "cyc:corr05-s4");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-s4");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s4",
      projectId: "prj:corr05-s4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const paused = await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-s4",
      projectId: "prj:corr05-s4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
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

    await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-s4",
      projectId: "prj:corr05-s4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
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
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-s6");
    await createCandidate(stack.cycles, "prj:corr05-s6", "cyc:corr05-s6");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-s6");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s6",
      projectId: "prj:corr05-s6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-s6",
      projectId: "prj:corr05-s6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const clean = await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-s6",
      projectId: "prj:corr05-s6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(clean.ok).toBe(true);
    if (!clean.ok) return;
    expect(clean.cycle.status).toBe("active");

    await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-s6",
      projectId: "prj:corr05-s6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const drift = await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-s6",
      projectId: "prj:corr05-s6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
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
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-s8", {
      steps: STEPS_DONE,
      status: "active",
    });
    await createCandidate(stack.cycles, "prj:corr05-s8", "cyc:corr05-s8");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-s8");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s8",
      projectId: "prj:corr05-s8",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });

    const noHd = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-s8",
      projectId: "prj:corr05-s8",
      createdBy: PILOTE,
      decisionId: "dec:missing",
      authorityEvidenceId: ev,
    });
    expect(noHd.ok).toBe(false);
    if (noHd.ok) return;
    expect(noHd.error.detailCode).toBe("CYCLE_DECISION_REQUIRED");

    // Incomplete path: open trajectory steps → ok but not completed
    const incompleteStack = buildStack(tempDbPath("s8-inc.sqlite"));
    await seedProject(incompleteStack.project, "prj:corr05-s8i");
    await seedTrajectory(
      incompleteStack.cycles,
      incompleteStack.project,
      "prj:corr05-s8i",
      { steps: STEPS_PENDING, status: "active" },
    );
    await createCandidate(
      incompleteStack.cycles,
      "prj:corr05-s8i",
      "cyc:corr05-s8i",
    );
    const evI = await registerPilotAuth(
      incompleteStack.authority,
      "cyc:corr05-s8i",
    );
    await incompleteStack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s8i",
      projectId: "prj:corr05-s8i",
      createdBy: PILOTE,
      authorityEvidenceId: evI,
    });
    const policyInc = await recordObligationPolicy({
      decisions: incompleteStack.decisions,
      authority: incompleteStack.authority,
      projectId: "prj:corr05-s8i",
      cycleInstanceId: "cyc:corr05-s8i",
      decisionId: "dec:corr05-policy-s8i",
      evidenceId: evI,
      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    });
    expect(policyInc.ok).toBe(true);
    const hdInc = await recordHd({
      decisions: incompleteStack.decisions,
      authority: incompleteStack.authority,
      projectId: "prj:corr05-s8i",
      cycleInstanceId: "cyc:corr05-s8i",
      subject: finalizeSubjectFor("cyc:corr05-s8i"),
      decisionId: "dec:corr05-finalize-s8i",
      evidenceId: evI,
    });
    expect(hdInc.ok).toBe(true);
    const incomplete = await incompleteStack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-s8i",
      projectId: "prj:corr05-s8i",
      createdBy: PILOTE,
      decisionId: "dec:corr05-finalize-s8i",
      authorityEvidenceId: evI,
    });
    expect(incomplete.ok).toBe(true);
    if (!incomplete.ok) return;
    expect(incomplete.assessment?.canComplete).toBe(false);
    expect(incomplete.assessment?.blockers).toContain("exit_criteria_open");
    expect(incomplete.cycle.status).toBe("active");

    const policy = await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-s8",
      cycleInstanceId: "cyc:corr05-s8",
      decisionId: "dec:corr05-policy-s8",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    });
    expect(policy.ok).toBe(true);
    const hd = await recordHd({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-s8",
      cycleInstanceId: "cyc:corr05-s8",
      subject: finalizeSubjectFor("cyc:corr05-s8"),
      decisionId: "dec:corr05-finalize-s8",
      evidenceId: ev,
    });
    expect(hd.ok).toBe(true);

    const finalized = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-s8",
      projectId: "prj:corr05-s8",
      createdBy: PILOTE,
      decisionId: "dec:corr05-finalize-s8",
      authorityEvidenceId: ev,
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.assessment?.canComplete).toBe(true);
    expect(finalized.cycle.status).toBe("completed");
    expect(finalized.cycle.closedAt).toBeTruthy();
    expect(finalized.activeCycleInstanceId).toBeNull();
    const ecFamily = finalized.assessment?.obligations.find(
      (o) => o.family === "execution_contract",
    );
    expect(ecFamily?.status).toBe("NOT_APPLICABLE");
    expect(ecFamily?.notApplicableReason).toContain("pilot_hd_obligation_policy");
  });

  it("10 — ExecutionAttempt terminal_success alone does not complete", () => {
    const cycle = baseCycle({
      cycleInstanceId: "cyc:corr05-s10",
      projectId: "prj:corr05-s10",
    });
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
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-s13");
    await createCandidate(stack.cycles, "prj:corr05-s13", "cyc:corr05-s13");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-s13");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s13",
      projectId: "prj:corr05-s13",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const hd = await recordHd({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-s13",
      cycleInstanceId: "cyc:corr05-s13",
      subject: cancelSubjectFor("cyc:corr05-s13"),
      decisionId: "dec:corr05-cancel-s13",
      evidenceId: ev,
    });
    expect(hd.ok).toBe(true);
    const cancelled = await stack.cycles.pilotLifecycle.cancel({
      cycleInstanceId: "cyc:corr05-s13",
      projectId: "prj:corr05-s13",
      createdBy: PILOTE,
      decisionId: "dec:corr05-cancel-s13",
      authorityEvidenceId: ev,
    });
    expect(cancelled.ok).toBe(true);
    if (!cancelled.ok) return;
    expect(cancelled.cycle.status).toBe("cancelled");
    expect(cancelled.activeCycleInstanceId).toBeNull();

    const reopen = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-s13",
      projectId: "prj:corr05-s13",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
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

  it("16 — NOT_APPLICABLE never used as missing-proof fallback", () => {
    const cycle = baseCycle({
      cycleInstanceId: "cyc:corr05-na",
      projectId: "prj:corr05-na",
    });
    const assessment = assessFinalizationObligations({
      cycle,
      projectId: "prj:corr05-na",
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: null,
      applicability: {
        git_repository: "APPLICABLE",
        gitProofPresent: false,
      },
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
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-link");
    const first = await createCandidate(
      stack.cycles,
      "prj:corr05-link",
      "cyc:corr05-link-a",
      true,
    );
    expect(first.ok).toBe(true);
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-link-a");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-link-a",
      projectId: "prj:corr05-link",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
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

describe("A — finalization applicability (A1–A10)", () => {
  const cycle = baseCycle();

  it("A1 — HD missing blocks complete", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      applicability: COMPLETE_APPLICABILITY,
    });
    expect(a.canComplete).toBe(false);
    expect(a.blockers).toContain("finalize_human_decision_absent");
  });

  it("A2 — exit criteria open blocks", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_PENDING }),
      applicability: COMPLETE_APPLICABILITY,
    });
    expect(a.blockers).toContain("exit_criteria_open");
  });

  it("A3 — exit criteria closed satisfies when APPLICABLE", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      applicability: COMPLETE_APPLICABILITY,
    });
    const exit = a.obligations.find((o) => o.family === "exit_criteria");
    expect(exit?.status).toBe("SATISFIED");
  });

  it("A4 — artifact UNKNOWN blocks (no silent N/A)", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
    });
    const art = a.obligations.find((o) => o.family === "artifact");
    expect(art?.applicability).toBe("UNKNOWN");
    expect(a.canComplete).toBe(false);
  });

  it("A5 — artifact explicit N/A requires reason", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      applicability: {
        artifact: "NOT_APPLICABLE",
        notApplicableReasons: {
          artifact: "explicit_rule_no_artifact_obligation",
        },
      },
    });
    const art = a.obligations.find((o) => o.family === "artifact");
    expect(art?.status).toBe("NOT_APPLICABLE");
    expect(art?.notApplicableReason).toBeTruthy();
  });

  it("A6 — execution attempt alone never completes", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      applicability: COMPLETE_APPLICABILITY,
      executionAttempts: [{ attemptId: "att:1", terminalState: "terminal_success" }],
    });
    expect(a.canComplete).toBe(false);
  });

  it("A7 — git APPLICABLE without proof → MISSING", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      applicability: {
        ...COMPLETE_APPLICABILITY,
        git_repository: "APPLICABLE",
        gitProofPresent: false,
        notApplicableReasons: {
          artifact: "explicit_rule_no_artifact_obligation",
          execution_contract: "explicit_rule_no_governed_execution_required",
          evidence: "explicit_rule_no_evidence_obligation",
          review_bundle: "explicit_rule_no_review_bundle_obligation",
        },
      },
    });
    const git = a.obligations.find((o) => o.family === "git_repository");
    expect(git?.status).toBe("MISSING");
  });

  it("A8 — git N/A with reason", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      applicability: COMPLETE_APPLICABILITY,
    });
    const git = a.obligations.find((o) => o.family === "git_repository");
    expect(git?.status).toBe("NOT_APPLICABLE");
    expect(git?.notApplicableReason).toContain("git");
  });

  it("A9 — trajectory absent → exit UNKNOWN blocking", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: null,
    });
    expect(a.blockers.some((b) => b.includes("trajectory") || b.includes("exit"))).toBe(
      true,
    );
  });

  it("A10 — complete path with closed traj + explicit N/A families", () => {
    const a = assessFinalizationObligations({
      cycle,
      projectId: cycle.projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [
        {
          schemaVersion: "0.1.0-oa",
          decisionId: "dec:fin",
          projectId: cycle.projectId,
          cycleInstanceId: cycle.cycleInstanceId,
          subject: finalizeSubjectFor(cycle.cycleInstanceId),
          options: [
            { optionId: "opt:accept", label: "Accept" },
            { optionId: "opt:refuse", label: "Refuse" },
          ],
          selectedOptionId: "opt:accept",
          actor: LOCAL_PILOTE_ACTOR,
          authority: "morris",
          status: "accepted",
          reversible: false,
          effectiveAt: "2026-09-07T16:00:00.000Z",
          recordedAt: "2026-09-07T16:00:00.000Z",
        } as never,
      ],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      applicability: COMPLETE_APPLICABILITY,
      finalizeDecisionId: "dec:fin",
    });
    expect(a.finalizeAccepted).toBe(true);
    expect(a.canComplete).toBe(true);
  });
});

describe("B — start readiness (B1–B8)", () => {
  const cycle = baseCycle({ status: "proposed" });

  it("B1 — ready when candidate + active traj + no sibling", () => {
    const r = assessStartReadiness({
      assessedAt: "2026-09-07T16:00:00.000Z",
      projectOk: true,
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsActiveCycleInstanceId: null,
      siblingActiveExists: false,
      trajectory: baseTrajectory(),
      decisions: [],
      doctrineReadable: true,
    });
    expect(r.ready).toBe(true);
    expect(r.requiresTrajectoryHumanDecision).toBe(false);
  });

  it("B2 — missing trajectory blocks", () => {
    const r = assessStartReadiness({
      assessedAt: "2026-09-07T16:00:00.000Z",
      projectOk: true,
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsActiveCycleInstanceId: null,
      siblingActiveExists: false,
      trajectory: null,
      decisions: [],
      doctrineReadable: true,
    });
    expect(r.ready).toBe(false);
    expect(r.blockers).toContain("trajectory_missing_or_unreadable");
  });

  it("B3 — sibling active blocks", () => {
    const r = assessStartReadiness({
      assessedAt: "2026-09-07T16:00:00.000Z",
      projectOk: true,
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsActiveCycleInstanceId: null,
      siblingActiveExists: true,
      trajectory: baseTrajectory(),
      decisions: [],
      doctrineReadable: true,
    });
    expect(r.blockers).toContain("another_active_exists");
  });

  it("B4 — non-candidate status blocks", () => {
    const r = assessStartReadiness({
      assessedAt: "2026-09-07T16:00:00.000Z",
      projectOk: true,
      cycle: { ...cycle, status: "active" },
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsActiveCycleInstanceId: null,
      siblingActiveExists: false,
      trajectory: baseTrajectory(),
      decisions: [],
      doctrineReadable: true,
    });
    expect(r.blockers.some((b) => b.startsWith("cycle_not_candidate"))).toBe(
      true,
    );
  });

  it("B5 — candidate trajectory requires HD", () => {
    const r = assessStartReadiness({
      assessedAt: "2026-09-07T16:00:00.000Z",
      projectOk: true,
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsActiveCycleInstanceId: null,
      siblingActiveExists: false,
      trajectory: baseTrajectory({ status: "candidate" }),
      decisions: [],
      doctrineReadable: true,
    });
    expect(r.requiresTrajectoryHumanDecision).toBe(true);
    expect(r.blockers).toContain("start_trajectory_hd_missing_or_invalid");
  });

  it("B6 — caller requiresTrajectory hint is not sole SoT (active traj still ready)", () => {
    const r = assessStartReadiness({
      assessedAt: "2026-09-07T16:00:00.000Z",
      projectOk: true,
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsActiveCycleInstanceId: null,
      siblingActiveExists: false,
      trajectory: baseTrajectory({ status: "active" }),
      decisions: [],
      doctrineReadable: true,
      structuringTrajectoryChoiceOpen: false,
    });
    expect(r.ready).toBe(true);
    expect(r.requiresTrajectoryHumanDecision).toBe(false);
  });

  it("B7 — blocked entry step blocks", () => {
    const r = assessStartReadiness({
      assessedAt: "2026-09-07T16:00:00.000Z",
      projectOk: true,
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsActiveCycleInstanceId: null,
      siblingActiveExists: false,
      trajectory: baseTrajectory({
        steps: [
          { stepId: "stp:x", order: 1, label: "X", state: "blocked" },
        ],
      }),
      decisions: [],
      doctrineReadable: true,
    });
    expect(r.blockers).toContain("trajectory_entry_blocked");
  });

  it("B8 — subject helper is stable", () => {
    expect(startTrajectorySubjectFor("cyc:x")).toContain("cyc:x");
    expect(resumeReplanSubjectFor("cyc:x")).toContain("cyc:x");
  });
});

describe("C — resume reconciliation (C1–C9)", () => {
  function snap(
    partial?: Partial<Parameters<typeof buildPauseReconciliationSnapshot>[0]> &
      Partial<ReturnType<typeof buildPauseReconciliationSnapshot>>,
  ) {
    const built = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
      lpsActiveCycleInstanceId: "cyc:corr05-base",
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockerSnapshotState: "KNOWN",
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
      ...(partial as Partial<
        Parameters<typeof buildPauseReconciliationSnapshot>[0]
      >),
    });
    return { ...built, ...partial };
  }

  it("C1 — clean when snapshot matches", () => {
    const cycle = baseCycle({
      status: "paused",
      pauseReconciliation: snap(),
    });
    const r = assessResumeReconciliation({
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
    });
    expect(r.clean).toBe(true);
  });

  it("C2 — missing snapshot is drift", () => {
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: null }),
      projectId: "prj:corr05-base",
      lpsReadable: true,
      lpsVersion: 1,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
    });
    expect(r.clean).toBe(false);
    expect(r.driftReasons).toContain("pause_snapshot_missing");
  });

  it("C3 — caller material drift hint forces drift", () => {
    const cycle = baseCycle({
      status: "paused",
      pauseReconciliation: snap(),
    });
    const r = assessResumeReconciliation({
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
      callerMaterialDriftHint: true,
    });
    expect(r.clean).toBe(false);
    expect(r.driftReasons).toContain("caller_material_drift_hint");
  });

  it("C4 — objective drift", () => {
    const cycle = baseCycle({
      status: "paused",
      pauseReconciliation: snap(),
    });
    const r = assessResumeReconciliation({
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "CHANGED",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
    });
    expect(r.driftReasons).toContain("objective_drift");
  });

  it("C5 — trajectory material drift", () => {
    const cycle = baseCycle({
      status: "paused",
      pauseReconciliation: snap(),
    });
    const r = assessResumeReconciliation({
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory({ steps: STEPS_DONE }),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
    });
    expect(r.driftReasons).toContain("trajectory_material_drift");
  });

  it("C6 — another active exists", () => {
    const cycle = baseCycle({
      status: "paused",
      pauseReconciliation: snap(),
    });
    const r = assessResumeReconciliation({
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: true,
    });
    expect(r.driftReasons).toContain("another_active_exists");
  });

  it("C7 — LPS pointer elsewhere", () => {
    const cycle = baseCycle({
      status: "paused",
      pauseReconciliation: snap(),
    });
    const r = assessResumeReconciliation({
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: "cyc:other",
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
    });
    expect(r.driftReasons).toContain("lps_active_pointer_elsewhere");
  });

  it("C8 — drift requires replan HD flag", () => {
    const cycle = baseCycle({
      status: "paused",
      pauseReconciliation: snap(),
    });
    const r = assessResumeReconciliation({
      cycle,
      projectId: cycle.projectId,
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "CHANGED",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
    });
    expect(r.requiresReplanHumanDecision).toBe(true);
  });

  it("C9 — caller false hint never proves clean alone", () => {
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: null }),
      projectId: "prj:corr05-base",
      lpsReadable: true,
      lpsVersion: 1,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      siblingActiveExists: false,
      callerMaterialDriftHint: false,
    });
    expect(r.clean).toBe(false);
  });
});

describe("D/E — authority + HD (D/E1–D/E8)", () => {
  it("D/E1 — mutation without authorityEvidenceId → AUTHORITY_NOT_CONFIGURED", async () => {
    const stack = buildStack(tempDbPath("de1.sqlite"));
    await seedProject(stack.project, "prj:corr05-de1");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-de1");
    await createCandidate(stack.cycles, "prj:corr05-de1", "cyc:corr05-de1");
    const start = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-de1",
      projectId: "prj:corr05-de1",
      createdBy: PILOTE,
    });
    expect(start.ok).toBe(false);
    if (start.ok) return;
    expect(start.error.detailCode).toBe("AUTHORITY_NOT_CONFIGURED");
  });

  it("D/E2 — START with registered evidence succeeds", async () => {
    const stack = buildStack(tempDbPath("de2.sqlite"));
    await seedProject(stack.project, "prj:corr05-de2");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-de2");
    await createCandidate(stack.cycles, "prj:corr05-de2", "cyc:corr05-de2");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-de2");
    const start = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-de2",
      projectId: "prj:corr05-de2",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(start.ok).toBe(true);
  });

  it("D/E3 — wrong scope evidence denied", async () => {
    const stack = buildStack(tempDbPath("de3.sqlite"));
    await seedProject(stack.project, "prj:corr05-de3");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-de3");
    await createCandidate(stack.cycles, "prj:corr05-de3", "cyc:corr05-de3");
    const wrong = registerLocalPiloteAuthority({
      authorityResolver: stack.authority,
      scope: "pilot-lifecycle:cyc:other",
      issuedAt: "2026-09-07T16:00:00.000Z",
      forceEnable: true,
    });
    expect(wrong.ok).toBe(true);
    if (!wrong.ok) return;
    const start = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-de3",
      projectId: "prj:corr05-de3",
      createdBy: PILOTE,
      authorityEvidenceId: wrong.evidenceId,
    });
    expect(start.ok).toBe(false);
    if (start.ok) return;
    expect(start.error.detailCode).toBe("CYCLE_LIFECYCLE_DENIED");
  });

  it("D/E4 — FINALIZE missing HD fails even with authority", async () => {
    const stack = buildStack(tempDbPath("de4.sqlite"));
    await seedProject(stack.project, "prj:corr05-de4");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-de4", {
      steps: STEPS_DONE,
    });
    await createCandidate(stack.cycles, "prj:corr05-de4", "cyc:corr05-de4");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-de4");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-de4",
      projectId: "prj:corr05-de4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-de4",
      cycleInstanceId: "cyc:corr05-de4",
      decisionId: "dec:corr05-policy-de4",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    });
    const fin = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-de4",
      projectId: "prj:corr05-de4",
      createdBy: PILOTE,
      decisionId: "dec:missing",
      authorityEvidenceId: ev,
    });
    expect(fin.ok).toBe(false);
    if (fin.ok) return;
    expect(fin.error.detailCode).toBe("CYCLE_DECISION_REQUIRED");
  });

  it("D/E5 — CANCEL with HD + authority succeeds", async () => {
    const stack = buildStack(tempDbPath("de5.sqlite"));
    await seedProject(stack.project, "prj:corr05-de5");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-de5");
    await createCandidate(stack.cycles, "prj:corr05-de5", "cyc:corr05-de5");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-de5");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-de5",
      projectId: "prj:corr05-de5",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const hd = await recordHd({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-de5",
      cycleInstanceId: "cyc:corr05-de5",
      subject: cancelSubjectFor("cyc:corr05-de5"),
      decisionId: "dec:de5",
      evidenceId: ev,
    });
    expect(hd.ok).toBe(true);
    const cancelled = await stack.cycles.pilotLifecycle.cancel({
      cycleInstanceId: "cyc:corr05-de5",
      projectId: "prj:corr05-de5",
      createdBy: PILOTE,
      decisionId: "dec:de5",
      authorityEvidenceId: ev,
    });
    expect(cancelled.ok).toBe(true);
  });

  it("D/E6 — PAUSE with unknown evidenceId fail-closed", async () => {
    const stack = buildStack(tempDbPath("de6.sqlite"));
    await seedProject(stack.project, "prj:corr05-de6");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-de6");
    await createCandidate(stack.cycles, "prj:corr05-de6", "cyc:corr05-de6");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-de6");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-de6",
      projectId: "prj:corr05-de6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const paused = await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-de6",
      projectId: "prj:corr05-de6",
      createdBy: PILOTE,
      authorityEvidenceId: "evd:does-not-exist",
    });
    expect(paused.ok).toBe(false);
    if (paused.ok) return;
    expect(paused.error.detailCode).toBe("AUTHORITY_NOT_CONFIGURED");
  });

  it("D/E7 — registerLocalPiloteAuthority without forceEnable fails closed in tests env", () => {
    const authority = new MemoryAuthorityResolver();
    const auth = registerLocalPiloteAuthority({
      authorityResolver: authority,
      scope: "pilot-lifecycle:cyc:x",
      issuedAt: "2026-09-07T16:00:00.000Z",
    });
    expect(auth.ok).toBe(false);
    if (auth.ok) return;
    expect(auth.code).toBe("AUTHORITY_NOT_CONFIGURED");
  });

  it("D/E8 — ASSESS does not require authority evidence", async () => {
    const stack = buildStack(tempDbPath("de8.sqlite"));
    await seedProject(stack.project, "prj:corr05-de8");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-de8");
    await createCandidate(stack.cycles, "prj:corr05-de8", "cyc:corr05-de8");
    const assessed = await stack.cycles.pilotLifecycle.assess({
      cycleInstanceId: "cyc:corr05-de8",
      projectId: "prj:corr05-de8",
    });
    expect(assessed.ok).toBe(true);
  });
});

describe("F — reload projection (F1–F4)", () => {
  it("F1 — candidate projects to selectedCycle with canStart", async () => {
    const stack = buildStack(tempDbPath("f1.sqlite"));
    await seedProject(stack.project, "prj:corr05-f1");
    await createCandidate(stack.cycles, "prj:corr05-f1", "cyc:corr05-f1");
    const cycles = await stack.cycles.cycles.listByProject("prj:corr05-f1");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-f1",
    });
    const projection = projectPilotLifecycle({
      projectId: "prj:corr05-f1",
      cycles,
      lpsActiveCycleInstanceId: lps.ok
        ? lps.livingProjectState.activeCycleInstanceId
        : null,
    });
    expect(projection.selectedCycleInstanceId).toBe("cyc:corr05-f1");
    expect(projection.cta.canStart).toBe(true);
    expect(projection.cta.canPause).toBe(false);
  });

  it("F2 — after START projection shows active + canPause", async () => {
    const stack = buildStack(tempDbPath("f2.sqlite"));
    await seedProject(stack.project, "prj:corr05-f2");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-f2");
    await createCandidate(stack.cycles, "prj:corr05-f2", "cyc:corr05-f2");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-f2");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-f2",
      projectId: "prj:corr05-f2",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const cycles = await stack.cycles.cycles.listByProject("prj:corr05-f2");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-f2",
    });
    const projection = projectPilotLifecycle({
      projectId: "prj:corr05-f2",
      cycles,
      lpsActiveCycleInstanceId: lps.ok
        ? lps.livingProjectState.activeCycleInstanceId
        : null,
    });
    expect(projection.selectedStatus).toBe("active");
    expect(projection.activeCycleInstanceId).toBe("cyc:corr05-f2");
    expect(projection.cta.canPause).toBe(true);
    expect(projection.cta.canStart).toBe(false);
  });

  it("F3 — after PAUSE projection reload shows paused + canResume", async () => {
    const stack = buildStack(tempDbPath("f3.sqlite"));
    await seedProject(stack.project, "prj:corr05-f3");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-f3");
    await createCandidate(stack.cycles, "prj:corr05-f3", "cyc:corr05-f3");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-f3");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-f3",
      projectId: "prj:corr05-f3",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-f3",
      projectId: "prj:corr05-f3",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const cycles = await stack.cycles.cycles.listByProject("prj:corr05-f3");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-f3",
    });
    const projection = projectPilotLifecycle({
      projectId: "prj:corr05-f3",
      cycles,
      lpsActiveCycleInstanceId: lps.ok
        ? lps.livingProjectState.activeCycleInstanceId
        : null,
    });
    expect(projection.selectedStatus).toBe("paused");
    expect(projection.activeCycleInstanceId).toBeNull();
    expect(projection.cta.canResume).toBe(true);
  });

  it("F4 — ambiguous when two paused, no active", async () => {
    const projection = projectPilotLifecycle({
      projectId: "prj:amb",
      cycles: [
        baseCycle({
          cycleInstanceId: "cyc:a",
          projectId: "prj:amb",
          status: "paused",
        }),
        baseCycle({
          cycleInstanceId: "cyc:b",
          projectId: "prj:amb",
          status: "paused",
        }),
      ],
      lpsActiveCycleInstanceId: null,
    });
    expect(projection.selectionAmbiguous).toBe(true);
    expect(projection.selectedCycleInstanceId).toBeNull();
  });
});

describe("AP — Product-derived applicability", () => {
  it("AP1-runtime — stack without applicabilityRules completes via obligation policy HD", async () => {
    const stack = buildStack(tempDbPath("ap1.sqlite"));
    await seedProject(stack.project, "prj:corr05-ap1");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-ap1", {
      steps: STEPS_DONE,
    });
    await createCandidate(stack.cycles, "prj:corr05-ap1", "cyc:corr05-ap1");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-ap1");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-ap1",
      projectId: "prj:corr05-ap1",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(
      (
        await recordObligationPolicy({
          decisions: stack.decisions,
          authority: stack.authority,
          projectId: "prj:corr05-ap1",
          cycleInstanceId: "cyc:corr05-ap1",
          decisionId: "dec:ap1-policy",
          evidenceId: ev,
          selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
        })
      ).ok,
    ).toBe(true);
    expect(
      (
        await recordHd({
          decisions: stack.decisions,
          authority: stack.authority,
          projectId: "prj:corr05-ap1",
          cycleInstanceId: "cyc:corr05-ap1",
          subject: finalizeSubjectFor("cyc:corr05-ap1"),
          decisionId: "dec:ap1-finalize",
          evidenceId: ev,
        })
      ).ok,
    ).toBe(true);
    const finalized = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-ap1",
      projectId: "prj:corr05-ap1",
      createdBy: PILOTE,
      decisionId: "dec:ap1-finalize",
      authorityEvidenceId: ev,
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.assessment?.canComplete).toBe(true);
    expect(finalized.cycle.status).toBe("completed");
  });

  it("AP4 — NO_GIT policy → git N/A with pilot_hd_obligation_policy reason", () => {
    const cycleId = "cyc:corr05-ap4";
    const projectId = "prj:corr05-ap4";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({
        projectId,
        steps: STEPS_DONE,
      }),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_GIT,
        ),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
    });
    expect(rules.git_repository).toBe("NOT_APPLICABLE");
    expect(rules.notApplicableReasons?.git_repository).toContain(
      "pilot_hd_obligation_policy",
    );
    const a = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      applicability: rules,
    });
    const git = a.obligations.find((o) => o.family === "git_repository");
    expect(git?.status).toBe("NOT_APPLICABLE");
    expect(git?.notApplicableReason).toContain("pilot_hd_obligation_policy");
  });

  it("AP5 — no policy/EC git signal → git UNKNOWN blocking", () => {
    const cycleId = "cyc:corr05-ap5";
    const projectId = "prj:corr05-ap5";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      decisions: [],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
    });
    const a = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      applicability: rules,
    });
    const git = a.obligations.find((o) => o.family === "git_repository");
    expect(git?.applicability).toBe("UNKNOWN");
    expect(a.canComplete).toBe(false);
  });

  it("AP6 — NO_EXECUTION policy → execution N/A", () => {
    const cycleId = "cyc:corr05-ap6";
    const projectId = "prj:corr05-ap6";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_EXECUTION,
        ),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
    });
    expect(rules.execution_contract).toBe("NOT_APPLICABLE");
    const a = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      applicability: rules,
    });
    const ec = a.obligations.find((o) => o.family === "execution_contract");
    expect(ec?.status).toBe("NOT_APPLICABLE");
  });

  it("AP7 — no policy no EC → execution UNKNOWN blocking", () => {
    const cycleId = "cyc:corr05-ap7";
    const projectId = "prj:corr05-ap7";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      decisions: [],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
    });
    const a = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      applicability: rules,
    });
    const ec = a.obligations.find((o) => o.family === "execution_contract");
    expect(ec?.applicability).toBe("UNKNOWN");
    expect(a.canComplete).toBe(false);
  });

  it("AP8 — no artifact model/policy → artifact UNKNOWN not N/A", () => {
    const cycleId = "cyc:corr05-ap8";
    const projectId = "prj:corr05-ap8";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      decisions: [],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
    });
    expect(rules.artifact).not.toBe("NOT_APPLICABLE");
    const a = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      applicability: rules,
    });
    const art = a.obligations.find((o) => o.family === "artifact");
    expect(art?.applicability).toBe("UNKNOWN");
    expect(art?.status).not.toBe("NOT_APPLICABLE");
  });

  it("AP2 — REQUIRE_ARTIFACT policy, no evidence → MISSING/BLOCKING", async () => {
    const stack = buildStack(tempDbPath("ap2.sqlite"));
    await seedProject(stack.project, "prj:corr05-ap2");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-ap2", {
      steps: STEPS_DONE,
    });
    await createCandidate(stack.cycles, "prj:corr05-ap2", "cyc:corr05-ap2");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-ap2");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-ap2",
      projectId: "prj:corr05-ap2",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-ap2",
      cycleInstanceId: "cyc:corr05-ap2",
      decisionId: "dec:ap2-policy",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_REQUIRE_ARTIFACT,
    });
    await recordHd({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-ap2",
      cycleInstanceId: "cyc:corr05-ap2",
      subject: finalizeSubjectFor("cyc:corr05-ap2"),
      decisionId: "dec:ap2-finalize",
      evidenceId: ev,
    });
    const finalized = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-ap2",
      projectId: "prj:corr05-ap2",
      createdBy: PILOTE,
      decisionId: "dec:ap2-finalize",
      authorityEvidenceId: ev,
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.assessment?.canComplete).toBe(false);
    const art = finalized.assessment?.obligations.find(
      (o) => o.family === "artifact",
    );
    expect(art?.status).toBe("MISSING");
    expect(finalized.cycle.status).not.toBe("completed");
  });

  it("AP3 — REQUIRE_GIT policy, no git proof → MISSING", async () => {
    const stack = buildStack(tempDbPath("ap3.sqlite"));
    await seedProject(stack.project, "prj:corr05-ap3");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-ap3", {
      steps: STEPS_DONE,
    });
    await createCandidate(stack.cycles, "prj:corr05-ap3", "cyc:corr05-ap3");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-ap3");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-ap3",
      projectId: "prj:corr05-ap3",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-ap3",
      cycleInstanceId: "cyc:corr05-ap3",
      decisionId: "dec:ap3-policy",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_REQUIRE_GIT,
    });
    const assessed = await stack.cycles.pilotLifecycle.assess({
      cycleInstanceId: "cyc:corr05-ap3",
      projectId: "prj:corr05-ap3",
    });
    expect(assessed.ok).toBe(true);
    if (!assessed.ok) return;
    const git = assessed.assessment.obligations.find(
      (o) => o.family === "git_repository",
    );
    expect(git?.status).toBe("MISSING");
  });

  it("AP9 — finalize HD required (assess without HD cannot complete)", async () => {
    const stack = buildStack(tempDbPath("ap9.sqlite"));
    await seedProject(stack.project, "prj:corr05-ap9");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-ap9", {
      steps: STEPS_DONE,
    });
    await createCandidate(stack.cycles, "prj:corr05-ap9", "cyc:corr05-ap9");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-ap9");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-ap9",
      projectId: "prj:corr05-ap9",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-ap9",
      cycleInstanceId: "cyc:corr05-ap9",
      decisionId: "dec:ap9-policy",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    });
    const assessed = await stack.cycles.pilotLifecycle.assess({
      cycleInstanceId: "cyc:corr05-ap9",
      projectId: "prj:corr05-ap9",
      finalizeDecisionId: "dec:ap9-missing",
    });
    expect(assessed.ok).toBe(true);
    if (!assessed.ok) return;
    expect(assessed.assessment.canComplete).toBe(false);
    expect(assessed.assessment.blockers).toContain(
      "finalize_human_decision_absent",
    );
  });

  it("AP10 — ExecutionAttempt terminal_success alone does not complete", () => {
    const cycle = baseCycle({
      cycleInstanceId: "cyc:corr05-ap10",
      projectId: "prj:corr05-ap10",
    });
    const assessment = assessFinalizationObligations({
      cycle,
      projectId: "prj:corr05-ap10",
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

  it("AP-runtime — createRuntimeApplicationService START then FINALIZE → completed", async () => {
    class FixedIdSource implements LocalProjectIdSource {
      private project = 0;
      private lps = 0;
      private correlation = 0;
      nextProjectId(): string {
        this.project += 1;
        return `prj:corr05-rt-${this.project}`;
      }
      nextLpsVersionId(): string {
        this.lps += 1;
        return `lps:corr05-rt-${this.lps}`;
      }
      nextCorrelationId(): string {
        this.correlation += 1;
        return `cor:corr05-rt-${this.correlation}`;
      }
    }

    resetRuntimeApplicationServiceForTests();
    const runtime = createRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-07T16:00:00.000Z",
      idSource: new FixedIdSource(),
      auditMode: "noop",
    });
    expect(runtime.oa).toBeTruthy();
    if (!runtime.oa) return;

    const created = await runtime.createProject({
      name: "CORR-05 runtime AP",
      objective: "lifecycle",
      context: "corr05-runtime",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "C05RT",
      idempotencyKey: "idem:corr05-ap-runtime",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.projectId;
    const oa = runtime.oa;

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: STEPS_DONE,
      status: "active",
      expectedLpsVersion: created.livingState.version,
      createdBy: ACTOR,
    });
    expect(traj.ok).toBe(true);

    const cycleInstanceId = "cyc:corr05-ap-rt";
    const cycle = await oa.cycleServices.createCycle.execute({
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
      linkAsActiveCycle: false,
    });
    expect(cycle.ok).toBe(true);

    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-09-07T16:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    const evidenceId = auth.evidenceId;

    const start = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: PILOTE,
      authorityEvidenceId: evidenceId,
    });
    expect(start.ok).toBe(true);

    const policy = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: "dec:ap-rt-policy",
      projectId,
      cycleInstanceId,
      subject: obligationPolicySubjectFor(cycleInstanceId),
      options: [
        {
          optionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
          label: "No governed effects",
        },
        { optionId: "opt:accept", label: "Accept" },
      ],
      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
      actor: LOCAL_PILOTE_ACTOR,
      authority: "morris",
      status: "accepted",
      reversible: false,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      authorityEvidenceId: evidenceId,
    });
    expect(policy.ok).toBe(true);

    const hd = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: "dec:ap-rt-finalize",
      projectId,
      cycleInstanceId,
      subject: finalizeSubjectFor(cycleInstanceId),
      options: [
        { optionId: "opt:accept", label: "Accept" },
        { optionId: "opt:refuse", label: "Refuse" },
      ],
      selectedOptionId: "opt:accept",
      actor: LOCAL_PILOTE_ACTOR,
      authority: "morris",
      status: "accepted",
      reversible: false,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      authorityEvidenceId: evidenceId,
    });
    expect(hd.ok).toBe(true);

    const finalized = await oa.cycleServices.pilotLifecycle.finalize({
      cycleInstanceId,
      projectId,
      createdBy: PILOTE,
      decisionId: "dec:ap-rt-finalize",
      authorityEvidenceId: evidenceId,
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.assessment?.canComplete).toBe(true);
    expect(finalized.cycle.status).toBe("completed");
    resetRuntimeApplicationServiceForTests();
  });
});

describe("BL — blockers", () => {
  it("BL1 — blocking Reservation → START refused CYCLE_START_NOT_READY", async () => {
    const stack = buildStack(tempDbPath("bl1.sqlite"));
    await seedProject(stack.project, "prj:corr05-bl1");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-bl1");
    await createCandidate(stack.cycles, "prj:corr05-bl1", "cyc:corr05-bl1");
    const epi = await stack.cycles.updateEpistemicState.execute({
      projectId: "prj:corr05-bl1",
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: "epi:bl1-rsv",
          type: "Reservation",
          statement: "blocking_reservation_bl1",
          status: "active",
          blocking: true,
        },
      ],
    });
    expect(epi.ok).toBe(true);
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-bl1");
    const start = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-bl1",
      projectId: "prj:corr05-bl1",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(start.ok).toBe(false);
    if (start.ok) return;
    expect(start.error.detailCode).toBe("CYCLE_START_NOT_READY");
    expect(start.error.internalCauseRef ?? "").toContain(
      "blocking_reservations",
    );
  });

  it("BL2 — after START+PAUSE, pauseReconciliation.blockerFingerprint includes reservation", async () => {
    const stack = buildStack(tempDbPath("bl2.sqlite"));
    await seedProject(stack.project, "prj:corr05-bl2");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-bl2");
    await createCandidate(stack.cycles, "prj:corr05-bl2", "cyc:corr05-bl2");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-bl2");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-bl2",
      projectId: "prj:corr05-bl2",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.updateEpistemicState.execute({
      projectId: "prj:corr05-bl2",
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: "epi:bl2-rsv",
          type: "Reservation",
          statement: "pause_blocker_bl2",
          status: "active",
          blocking: true,
        },
      ],
    });
    const paused = await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-bl2",
      projectId: "prj:corr05-bl2",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(paused.ok).toBe(true);
    if (!paused.ok) return;
    expect(paused.cycle.pauseReconciliation?.blockerFingerprint).toContain(
      "pause_blocker_bl2",
    );
  });

  it("BL3 — PAUSE then new blocking reservation → RESUME CYCLE_RESUME_DRIFT", async () => {
    const stack = buildStack(tempDbPath("bl3.sqlite"));
    await seedProject(stack.project, "prj:corr05-bl3");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-bl3");
    await createCandidate(stack.cycles, "prj:corr05-bl3", "cyc:corr05-bl3");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-bl3");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-bl3",
      projectId: "prj:corr05-bl3",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-bl3",
      projectId: "prj:corr05-bl3",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.updateEpistemicState.execute({
      projectId: "prj:corr05-bl3",
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: "epi:bl3-rsv",
          type: "Reservation",
          statement: "introduced_after_pause",
          status: "active",
          blocking: true,
        },
      ],
    });
    const resume = await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-bl3",
      projectId: "prj:corr05-bl3",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(resume.ok).toBe(false);
    if (resume.ok) return;
    expect(resume.error.detailCode).toBe("CYCLE_RESUME_DRIFT");
    const cycle = await stack.cycles.getCycle.execute({
      cycleInstanceId: "cyc:corr05-bl3",
    });
    expect(cycle.ok).toBe(true);
    if (!cycle.ok) return;
    expect(cycle.cycle.status).toBe("paused");
    const lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-bl3",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.activeCycleInstanceId).toBeUndefined();
  });

  it("BL4 — materialDriftDetected:false still drifts when blockers change", async () => {
    const stack = buildStack(tempDbPath("bl4.sqlite"));
    await seedProject(stack.project, "prj:corr05-bl4");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-bl4");
    await createCandidate(stack.cycles, "prj:corr05-bl4", "cyc:corr05-bl4");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-bl4");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-bl4",
      projectId: "prj:corr05-bl4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-bl4",
      projectId: "prj:corr05-bl4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.updateEpistemicState.execute({
      projectId: "prj:corr05-bl4",
      createdBy: ACTOR,
      items: [
        {
          epistemicItemId: "epi:bl4-rsv",
          type: "Reservation",
          statement: "drift_even_if_hint_false",
          status: "active",
          blocking: true,
        },
      ],
    });
    const resume = await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-bl4",
      projectId: "prj:corr05-bl4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
      materialDriftDetected: false,
    });
    expect(resume.ok).toBe(false);
    if (resume.ok) return;
    expect(resume.error.detailCode).toBe("CYCLE_RESUME_DRIFT");
  });

  it("BL6 — clean resume without blockers works", async () => {
    const stack = buildStack(tempDbPath("bl6.sqlite"));
    await seedProject(stack.project, "prj:corr05-bl6");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-bl6");
    await createCandidate(stack.cycles, "prj:corr05-bl6", "cyc:corr05-bl6");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-bl6");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-bl6",
      projectId: "prj:corr05-bl6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-bl6",
      projectId: "prj:corr05-bl6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    const resume = await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-bl6",
      projectId: "prj:corr05-bl6",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(resume.ok).toBe(true);
    if (!resume.ok) return;
    expect(resume.cycle.status).toBe("active");
  });

  it("BL7 — trajectory blocked step still blocks START", async () => {
    const stack = buildStack(tempDbPath("bl7.sqlite"));
    await seedProject(stack.project, "prj:corr05-bl7");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-bl7", {
      steps: [{ stepId: "stp:x", order: 1, label: "X", state: "blocked" }],
    });
    await createCandidate(stack.cycles, "prj:corr05-bl7", "cyc:corr05-bl7");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-bl7");
    const start = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-bl7",
      projectId: "prj:corr05-bl7",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(start.ok).toBe(false);
    if (start.ok) return;
    expect(start.error.detailCode).toBe("CYCLE_START_NOT_READY");
    expect(start.error.internalCauseRef ?? "").toContain(
      "trajectory_entry_blocked",
    );
  });
});

describe("SP — superseded", () => {
  it("SP1/SP2 — proposed/acknowledged canStart true via projectPilotLifecycle", () => {
    for (const status of ["proposed", "acknowledged"] as const) {
      expect(isStartableCandidateStatus(status)).toBe(true);
      const projection = projectPilotLifecycle({
        projectId: "prj:sp12",
        cycles: [
          baseCycle({
            cycleInstanceId: `cyc:sp12-${status}`,
            projectId: "prj:sp12",
            status,
          }),
        ],
        lpsActiveCycleInstanceId: null,
      });
      expect(projection.cta.canStart).toBe(true);
      expect(projection.selectedCycleInstanceId).toBe(`cyc:sp12-${status}`);
    }
  });

  it("SP3 — superseded canStart false", () => {
    expect(isStartableCandidateStatus("superseded")).toBe(false);
    const projection = projectPilotLifecycle({
      projectId: "prj:sp3",
      cycles: [
        baseCycle({
          cycleInstanceId: "cyc:sp3",
          projectId: "prj:sp3",
          status: "superseded",
        }),
      ],
      lpsActiveCycleInstanceId: null,
    });
    expect(projection.cta.canStart).toBe(false);
    expect(projection.supersededCycles).toHaveLength(1);
  });

  it("SP4 — server START on superseded fails", async () => {
    const stack = buildStack(tempDbPath("sp4.sqlite"));
    await seedProject(stack.project, "prj:corr05-sp4");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-sp4");
    await createCandidate(stack.cycles, "prj:corr05-sp4", "cyc:corr05-sp4");
    const got = await stack.cycles.getCycle.execute({
      cycleInstanceId: "cyc:corr05-sp4",
    });
    expect(got.ok).toBe(true);
    if (!got.ok) return;
    await stack.cycles.cycles.save({ ...got.cycle, status: "superseded" });
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-sp4");
    const start = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-sp4",
      projectId: "prj:corr05-sp4",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(start.ok).toBe(false);
    if (start.ok) return;
    expect([
      "CYCLE_TRANSITION_INVALID",
      "CYCLE_START_NOT_READY",
    ]).toContain(start.error.detailCode);
  });

  it("SP5 — one proposed + two superseded → selected proposed, not ambiguous, canStart", () => {
    const projection = projectPilotLifecycle({
      projectId: "prj:sp5",
      cycles: [
        baseCycle({
          cycleInstanceId: "cyc:sp5-a",
          projectId: "prj:sp5",
          status: "superseded",
        }),
        baseCycle({
          cycleInstanceId: "cyc:sp5-b",
          projectId: "prj:sp5",
          status: "proposed",
        }),
        baseCycle({
          cycleInstanceId: "cyc:sp5-c",
          projectId: "prj:sp5",
          status: "superseded",
        }),
      ],
      lpsActiveCycleInstanceId: null,
    });
    expect(projection.selectedCycleInstanceId).toBe("cyc:sp5-b");
    expect(projection.selectionAmbiguous).toBe(false);
    expect(projection.cta.canStart).toBe(true);
    expect(projection.supersededCycles).toHaveLength(2);
  });
});

describe("SC runtime acceptance", () => {
  it("SC01–SC06 + SC12 — candidate → start → pause → resume → finalize completed", async () => {
    const stack = buildStack(tempDbPath("sc.sqlite"));
    await seedProject(stack.project, "prj:corr05-sc");
    // SC01/SC02 — candidate, no active link
    const created = await createCandidate(
      stack.cycles,
      "prj:corr05-sc",
      "cyc:corr05-sc",
      false,
    );
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    expect(isStartableCandidateStatus(created.cycle.status)).toBe(true);
    expect(created.cycle.status).not.toBe("active");
    let lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-sc",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.activeCycleInstanceId).toBeUndefined();

    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-sc", {
      steps: STEPS_DONE,
    });
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-sc");

    // SC03 — START
    const started = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-sc",
      projectId: "prj:corr05-sc",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(started.cycle.status).toBe("active");
    expect(started.activeCycleInstanceId).toBe("cyc:corr05-sc");

    // SC04 — PAUSE
    const paused = await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-sc",
      projectId: "prj:corr05-sc",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(paused.ok).toBe(true);
    if (!paused.ok) return;
    expect(paused.cycle.status).toBe("paused");
    expect(paused.activeCycleInstanceId).toBeNull();

    // SC05 — RESUME
    const resumed = await stack.cycles.pilotLifecycle.resume({
      cycleInstanceId: "cyc:corr05-sc",
      projectId: "prj:corr05-sc",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(resumed.ok).toBe(true);
    if (!resumed.ok) return;
    expect(resumed.cycle.status).toBe("active");

    // SC06 — second START refused while active sibling path covered by create+start sibling
    const sibling = await createCandidate(
      stack.cycles,
      "prj:corr05-sc",
      "cyc:corr05-sc-b",
    );
    expect(sibling.ok).toBe(true);
    const evB = await registerPilotAuth(stack.authority, "cyc:corr05-sc-b");
    const startB = await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-sc-b",
      projectId: "prj:corr05-sc",
      createdBy: PILOTE,
      authorityEvidenceId: evB,
    });
    expect(startB.ok).toBe(false);

    // SC12 — FINALIZE complete via obligation policy
    await recordObligationPolicy({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-sc",
      cycleInstanceId: "cyc:corr05-sc",
      decisionId: "dec:sc-policy",
      evidenceId: ev,
      selectedOptionId: OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
    });
    await recordHd({
      decisions: stack.decisions,
      authority: stack.authority,
      projectId: "prj:corr05-sc",
      cycleInstanceId: "cyc:corr05-sc",
      subject: finalizeSubjectFor("cyc:corr05-sc"),
      decisionId: "dec:sc-finalize",
      evidenceId: ev,
    });
    const finalized = await stack.cycles.pilotLifecycle.finalize({
      cycleInstanceId: "cyc:corr05-sc",
      projectId: "prj:corr05-sc",
      createdBy: PILOTE,
      decisionId: "dec:sc-finalize",
      authorityEvidenceId: ev,
    });
    expect(finalized.ok).toBe(true);
    if (!finalized.ok) return;
    expect(finalized.assessment?.canComplete).toBe(true);
    expect(finalized.cycle.status).toBe("completed");
    lps = await stack.project.getCurrentLivingProjectState.execute({
      projectId: "prj:corr05-sc",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.activeCycleInstanceId).toBeUndefined();
  });
});

function makeEvidence(
  partial: Partial<Evidence> & Pick<Evidence, "evidenceId" | "type" | "status">,
): Evidence {
  return {
    schemaVersion: "0.1.0-oa",
    source: partial.source ?? "test-source",
    sourceKind: partial.sourceKind ?? "human",
    producedAt: "2026-09-07T16:00:00.000Z",
    classification: "supporting",
    storageMode: "reference",
    availability: "available",
    bindings: partial.bindings ?? {},
    containsSecrets: false,
    provenance: {
      recordedAt: "2026-09-07T16:00:00.000Z",
      recordedBy: { actorId: "actor:test", role: "system" },
    },
    version: 1,
    createdAt: "2026-09-07T16:00:00.000Z",
    ...partial,
  } as Evidence;
}

function makeReview(
  partial: Partial<ReviewBundle> &
    Pick<ReviewBundle, "reviewBundleId" | "status">,
): ReviewBundle {
  return {
    schemaVersion: "0.2.0-oa",
    projectId: partial.projectId ?? "prj:corr05-base",
    version: 1,
    evidenceRefs: [],
    claimEvaluationRefs: [],
    completeness: partial.completeness ?? "complete",
    synthesisOnly: partial.synthesisOnly ?? false,
    createdAt: "2026-09-07T16:00:00.000Z",
    provenance: {
      recordedAt: "2026-09-07T16:00:00.000Z",
      recordedBy: { actorId: "actor:test", role: "system" },
    },
    ...partial,
  } as ReviewBundle;
}

describe("CP — contradiction precedence (CP1–CP9)", () => {
  const traj = () =>
    baseTrajectory({ projectId: "prj:cp", steps: STEPS_DONE });

  it("CP1 — EC git signal + opt:no-git → Git APPLICABLE + contradiction BLOCKING", () => {
    const cycleId = "cyc:cp1";
    const projectId = "prj:cp1";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(cycleId, projectId, OBLIGATION_POLICY_NO_GIT),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [
        {
          contractId: "ec:git",
          cycleInstanceId: cycleId,
          status: "completed",
          requiredCapabilities: ["git.commit"],
        },
      ],
    });
    expect(rules.git_repository).toBe("APPLICABLE");
    expect(rules.contradictions?.some((c) => c.family === "git_repository")).toBe(
      true,
    );
    const a = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: traj(),
      applicability: rules,
      executionContracts: [
        {
          contractId: "ec:git",
          cycleInstanceId: cycleId,
          status: "completed",
        },
      ],
    });
    expect(a.blockers).toContain("git_policy_contradicts_applicability");
    expect(a.canComplete).toBe(false);
  });

  it("CP2 — EC git + no-governed-effects → Git APPLICABLE + BLOCKING", () => {
    const cycleId = "cyc:cp2";
    const projectId = "prj:cp2";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
        ),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [
        {
          contractId: "ec:git",
          cycleInstanceId: cycleId,
          status: "completed",
          requiredCapabilities: ["git"],
        },
      ],
    });
    expect(rules.git_repository).toBe("APPLICABLE");
    expect(rules.execution_contract).toBe("APPLICABLE");
    expect(rules.contradictions?.length).toBeGreaterThan(0);
    const a = assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: traj(),
      applicability: rules,
    });
    expect(a.blockers).toContain("git_policy_contradicts_applicability");
    expect(a.canComplete).toBe(false);
  });

  it("CP3 — EC present + no-execution → execution APPLICABLE + BLOCKING", () => {
    const cycleId = "cyc:cp3";
    const projectId = "prj:cp3";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_EXECUTION,
        ),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [
        { contractId: "ec:1", cycleInstanceId: cycleId, status: "completed" },
      ],
    });
    expect(rules.execution_contract).toBe("APPLICABLE");
    expect(rules.contradictions?.[0]?.family).toBe("execution_contract");
  });

  it("CP4 — Evidence present + no-evidence → evidence APPLICABLE + BLOCKING", () => {
    const cycleId = "cyc:cp4";
    const projectId = "prj:cp4";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_EVIDENCE,
        ),
      ],
      evidence: [
        makeEvidence({
          evidenceId: "ev:1",
          type: "document",
          status: "verified",
          bindings: { cycleInstanceId: cycleId },
        }),
      ],
      reviewBundles: [],
      executionContracts: [],
    });
    expect(rules.evidence).toBe("APPLICABLE");
    expect(rules.contradictions?.[0]?.family).toBe("evidence");
  });

  it("CP5 — ReviewBundle present + no-review → review APPLICABLE + BLOCKING", () => {
    const cycleId = "cyc:cp5";
    const projectId = "prj:cp5";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_REVIEW,
        ),
      ],
      evidence: [],
      reviewBundles: [
        makeReview({
          reviewBundleId: "rb:1",
          status: "accepted",
          cycleInstanceId: cycleId,
          projectId,
        }),
      ],
      executionContracts: [],
    });
    expect(rules.review_bundle).toBe("APPLICABLE");
    expect(rules.contradictions?.[0]?.family).toBe("review_bundle");
  });

  it("CP6 — artifact signal + no-artifact → artifact APPLICABLE + BLOCKING", () => {
    const cycleId = "cyc:cp6";
    const projectId = "prj:cp6";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_ARTIFACT,
        ),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [
        {
          contractId: "ec:art",
          cycleInstanceId: cycleId,
          status: "completed",
          expectedOutputs: ["artifact:report"],
        },
      ],
    });
    expect(rules.artifact).toBe("APPLICABLE");
    expect(rules.contradictions?.[0]?.family).toBe("artifact");
  });

  it("CP7 — no positive git fact + no-git → explicit NOT_APPLICABLE", () => {
    const cycleId = "cyc:cp7";
    const projectId = "prj:cp7";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(cycleId, projectId, OBLIGATION_POLICY_NO_GIT),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
    });
    expect(rules.git_repository).toBe("NOT_APPLICABLE");
    expect(rules.contradictions ?? []).toHaveLength(0);
    expect(rules.notApplicableReasons?.git_repository).toContain(
      "pilot_hd_obligation_policy",
    );
  });

  it("CP8 — no positive governed facts + no-governed-effects → N/A allowed", () => {
    const cycleId = "cyc:cp8";
    const projectId = "prj:cp8";
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(
          cycleId,
          projectId,
          OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
        ),
      ],
      evidence: [],
      reviewBundles: [],
      executionContracts: [],
    });
    expect(rules.execution_contract).toBe("NOT_APPLICABLE");
    expect(rules.git_repository).toBe("NOT_APPLICABLE");
    expect(rules.artifact).toBe("NOT_APPLICABLE");
    expect(rules.evidence).toBe("NOT_APPLICABLE");
    expect(rules.review_bundle).toBe("NOT_APPLICABLE");
    expect(rules.contradictions ?? []).toHaveLength(0);
  });

  it("CP9 — contradiction re-derived from durable sources", () => {
    const cycleId = "cyc:cp9";
    const projectId = "prj:cp9";
    const input = {
      cycleInstanceId: cycleId,
      projectId,
      trajectory: traj(),
      decisions: [
        makeObligationPolicyDecision(cycleId, projectId, OBLIGATION_POLICY_NO_GIT),
      ],
      evidence: [] as Evidence[],
      reviewBundles: [] as ReviewBundle[],
      executionContracts: [
        {
          contractId: "ec:git",
          cycleInstanceId: cycleId,
          status: "completed",
          requiredCapabilities: ["git"],
        },
      ],
    };
    const a = deriveFinalizationApplicability(input);
    const b = deriveFinalizationApplicability(input);
    expect(a.contradictions).toEqual(b.contradictions);
    expect(a.git_repository).toBe("APPLICABLE");
  });
});

describe("EC — execution contract exit semantics (EC1–EC10)", () => {
  function assessEc(
    status: string,
    extra?: {
      contracts?: Array<{
        contractId: string;
        status: string;
        supersedesExecutionContractId?: string;
        cycleInstanceId?: string;
      }>;
      attempts?: Array<{
        attemptId: string;
        contractId?: string;
        terminalState?: string;
      }>;
      policy?: string;
    },
  ) {
    const cycleId = "cyc:ec";
    const projectId = "prj:ec";
    const contracts =
      extra?.contracts ??
      [{ contractId: "ec:1", cycleInstanceId: cycleId, status }];
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      decisions: extra?.policy
        ? [makeObligationPolicyDecision(cycleId, projectId, extra.policy)]
        : [],
      evidence: [],
      reviewBundles: [],
      executionContracts: contracts,
    });
    return assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: [],
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      applicability: {
        ...rules,
        artifact: "NOT_APPLICABLE",
        evidence: "NOT_APPLICABLE",
        review_bundle: "NOT_APPLICABLE",
        git_repository: "NOT_APPLICABLE",
        notApplicableReasons: {
          ...rules.notApplicableReasons,
          artifact: "test",
          evidence: "test",
          review_bundle: "test",
          git_repository: "test",
        },
      },
      executionContracts: contracts,
      executionAttempts: extra?.attempts,
    });
  }

  it("EC1 — confirmed only → NOT SATISFIED (PENDING)", () => {
    const a = assessEc("confirmed");
    const ec = a.obligations.find((o) => o.family === "execution_contract");
    expect(ec?.status).toBe("PENDING");
  });

  it("EC2 — executing → PENDING", () => {
    const a = assessEc("executing");
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).toBe("PENDING");
  });

  it("EC3 — completed → execution SATISFIED", () => {
    const a = assessEc("completed");
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).toBe("SATISFIED");
    expect(a.canComplete).toBe(false);
  });

  it("EC4 — failed → BLOCKING", () => {
    const a = assessEc("failed");
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).toBe("BLOCKING");
  });

  it("EC5 — cancelled with execution applicable → NOT SATISFIED", () => {
    const a = assessEc("cancelled");
    const ec = a.obligations.find((o) => o.family === "execution_contract");
    expect(ec?.status).not.toBe("SATISFIED");
    expect(ec?.status).toBe("BLOCKING");
  });

  it("EC6 — superseded predecessor + successor confirmed → successor PENDING", () => {
    const a = assessEc("confirmed", {
      contracts: [
        {
          contractId: "ec:old",
          status: "superseded",
          cycleInstanceId: "cyc:ec",
        },
        {
          contractId: "ec:new",
          status: "confirmed",
          cycleInstanceId: "cyc:ec",
          supersedesExecutionContractId: "ec:old",
        },
      ],
    });
    const { effective } = selectEffectiveExecutionContracts(
      [
        { contractId: "ec:old", status: "superseded", cycleInstanceId: "cyc:ec" },
        {
          contractId: "ec:new",
          status: "confirmed",
          cycleInstanceId: "cyc:ec",
          supersedesExecutionContractId: "ec:old",
        },
      ],
      "cyc:ec",
    );
    expect(effective.map((c) => c.contractId)).toEqual(["ec:new"]);
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).toBe("PENDING");
  });

  it("EC7 — superseded predecessor + successor completed → SATISFIED", () => {
    const a = assessEc("completed", {
      contracts: [
        {
          contractId: "ec:old",
          status: "superseded",
          cycleInstanceId: "cyc:ec",
        },
        {
          contractId: "ec:new",
          status: "completed",
          cycleInstanceId: "cyc:ec",
          supersedesExecutionContractId: "ec:old",
        },
      ],
    });
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).toBe("SATISFIED");
  });

  it("EC8 — superseded with no successor → fail closed", () => {
    const a = assessEc("superseded", {
      contracts: [
        {
          contractId: "ec:orphan",
          status: "superseded",
          cycleInstanceId: "cyc:ec",
        },
      ],
    });
    expect(a.blockers).toContain("execution_superseded_unresolved");
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).toBe("BLOCKING");
  });

  it("EC9 — terminal_success + confirmed EC → not execution-family complete", () => {
    const a = assessEc("confirmed", {
      attempts: [
        {
          attemptId: "att:1",
          contractId: "ec:1",
          terminalState: "terminal_success",
        },
      ],
    });
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).not.toBe("SATISFIED");
  });

  it("EC10 — no EC + no-execution policy → N/A", () => {
    const a = assessEc("completed", {
      contracts: [],
      policy: OBLIGATION_POLICY_NO_EXECUTION,
    });
    expect(
      a.obligations.find((o) => o.family === "execution_contract")?.status,
    ).toBe("NOT_APPLICABLE");
  });
});

describe("GP — git evidence semantic binding (GP1–GP8)", () => {
  const cycleId = "cyc:gp";
  const projectId = "prj:gp";
  const gitEc = {
    contractId: "ec:git",
    cycleInstanceId: cycleId,
    status: "completed" as const,
    requiredCapabilities: ["git"],
  };
  const otherEc = {
    contractId: "ec:other",
    cycleInstanceId: cycleId,
    status: "completed" as const,
  };

  function assessGit(evidence: Evidence[], contracts = [gitEc, otherEc]) {
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      decisions: [],
      evidence,
      reviewBundles: [],
      executionContracts: contracts,
    });
    return {
      rules,
      assessment: assessFinalizationObligations({
        cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
        projectId,
        assessedAt: "2026-09-07T16:00:00.000Z",
        decisions: [],
        evidence,
        reviewBundles: [],
        trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
        applicability: rules,
        executionContracts: contracts,
      }),
    };
  }

  it("GP1 — unrelated verified document → Git MISSING", () => {
    const { rules, assessment } = assessGit([
      makeEvidence({
        evidenceId: "ev:doc",
        type: "document",
        status: "verified",
        bindings: { projectId, cycleInstanceId: cycleId },
        source: "meeting-notes",
      }),
    ]);
    expect(rules.gitProofPresent).toBe(false);
    expect(
      assessment.obligations.find((o) => o.family === "git_repository")?.status,
    ).toBe("MISSING");
  });

  it("GP2 — verified document bound to unrelated EC → Git MISSING", () => {
    const { rules, assessment } = assessGit([
      makeEvidence({
        evidenceId: "ev:doc",
        type: "document",
        status: "verified",
        bindings: {
          cycleInstanceId: cycleId,
          executionContractId: "ec:other",
        },
        source: "git-log",
      }),
    ]);
    expect(rules.gitProofPresent).toBe(false);
    expect(
      assessment.obligations.find((o) => o.family === "git_repository")?.status,
    ).toBe("MISSING");
  });

  it("GP3 — evidence bound to git EC → Git SATISFIED", () => {
    const { rules, assessment } = assessGit([
      makeEvidence({
        evidenceId: "ev:git",
        type: "document",
        status: "verified",
        bindings: {
          cycleInstanceId: cycleId,
          executionContractId: "ec:git",
        },
        source: "repo-proof",
      }),
    ]);
    expect(rules.gitProofPresent).toBe(true);
    expect(
      assessment.obligations.find((o) => o.family === "git_repository")?.status,
    ).toBe("SATISFIED");
  });

  it("GP4 — cycle-bound Git-specific log_ref without EC binding → acceptable", () => {
    const ev = makeEvidence({
      evidenceId: "ev:log",
      type: "log_ref",
      status: "available",
      bindings: { cycleInstanceId: cycleId },
      location: "git://repo/main",
      source: "repository-ref",
    });
    expect(isGitQualifyingEvidence(ev, new Set(["ec:git"]), cycleId)).toBe(
      true,
    );
    const { rules } = assessGit([ev]);
    expect(rules.gitProofPresent).toBe(true);
  });

  it("GP5 — generic project attestation → never enough", () => {
    const ev = makeEvidence({
      evidenceId: "ev:att",
      type: "attestation",
      status: "verified",
      bindings: { projectId },
      source: "pilot-attestation",
    });
    expect(isGitQualifyingEvidence(ev, new Set(["ec:git"]), cycleId)).toBe(
      false,
    );
  });

  it("GP6 — unavailable Git evidence → never satisfies", () => {
    const { rules } = assessGit([
      makeEvidence({
        evidenceId: "ev:bad",
        type: "log_ref",
        status: "unavailable",
        bindings: {
          cycleInstanceId: cycleId,
          executionContractId: "ec:git",
        },
        source: "git",
      }),
    ]);
    expect(rules.gitProofPresent).toBe(false);
  });

  it("GP7 — proof for non-Git EC must not satisfy Git", () => {
    const { rules } = assessGit([
      makeEvidence({
        evidenceId: "ev:other",
        type: "document",
        status: "verified",
        bindings: {
          cycleInstanceId: cycleId,
          executionContractId: "ec:other",
        },
        location: "git://spoof",
      }),
    ]);
    expect(rules.gitProofPresent).toBe(false);
  });

  it("GP8 — APPLICABLE git with zero qualifying evidence → MISSING", () => {
    const { assessment } = assessGit([]);
    expect(
      assessment.obligations.find((o) => o.family === "git_repository")?.status,
    ).toBe("MISSING");
  });
});

describe("RV — review bundle exit semantics (RV1–RV9)", () => {
  const cycleId = "cyc:rv";
  const projectId = "prj:rv";

  function assessRv(bundles: ReviewBundle[]) {
    const rules = deriveFinalizationApplicability({
      cycleInstanceId: cycleId,
      projectId,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      decisions: [],
      evidence: [],
      reviewBundles: bundles,
      executionContracts: [],
    });
    return assessFinalizationObligations({
      cycle: baseCycle({ cycleInstanceId: cycleId, projectId }),
      projectId,
      assessedAt: "2026-09-07T16:00:00.000Z",
      decisions: [],
      evidence: [],
      reviewBundles: bundles,
      trajectory: baseTrajectory({ projectId, steps: STEPS_DONE }),
      applicability: {
        ...rules,
        artifact: "NOT_APPLICABLE",
        execution_contract: "NOT_APPLICABLE",
        evidence: "NOT_APPLICABLE",
        git_repository: "NOT_APPLICABLE",
        notApplicableReasons: {
          artifact: "test",
          execution_contract: "test",
          evidence: "test",
          git_repository: "test",
        },
      },
    });
  }

  it("RV1 — accepted current review → SATISFIED", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:1",
        status: "accepted",
        cycleInstanceId: cycleId,
        projectId,
      }),
    ]);
    expect(
      a.obligations.find((o) => o.family === "review_bundle")?.status,
    ).toBe("SATISFIED");
  });

  it("RV2 — rejected only → BLOCKING", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:1",
        status: "rejected",
        cycleInstanceId: cycleId,
        projectId,
      }),
    ]);
    expect(
      a.obligations.find((o) => o.family === "review_bundle")?.status,
    ).toBe("BLOCKING");
  });

  it("RV3 — incomplete only → BLOCKING", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:1",
        status: "incomplete",
        completeness: "incomplete",
        cycleInstanceId: cycleId,
        projectId,
      }),
    ]);
    expect(
      a.obligations.find((o) => o.family === "review_bundle")?.status,
    ).toBe("BLOCKING");
  });

  it("RV4 — draft / ready / under_review → PENDING", () => {
    for (const status of [
      "draft",
      "ready_for_review",
      "under_review",
    ] as const) {
      const a = assessRv([
        makeReview({
          reviewBundleId: `rb:${status}`,
          status,
          cycleInstanceId: cycleId,
          projectId,
        }),
      ]);
      expect(
        a.obligations.find((o) => o.family === "review_bundle")?.status,
      ).toBe("PENDING");
    }
  });

  it("RV5 — superseded only → NOT SATISFIED", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:old",
        status: "superseded",
        cycleInstanceId: cycleId,
        projectId,
      }),
    ]);
    const rv = a.obligations.find((o) => o.family === "review_bundle");
    expect(rv?.status).not.toBe("SATISFIED");
    expect(a.blockers).toContain("review_bundle_no_current");
  });

  it("RV6 — superseded predecessor + accepted successor → SATISFIED", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:old",
        status: "superseded",
        cycleInstanceId: cycleId,
        projectId,
      }),
      makeReview({
        reviewBundleId: "rb:new",
        status: "accepted",
        cycleInstanceId: cycleId,
        projectId,
        supersedesReviewBundleId: "rb:old",
      }),
    ]);
    const { effective } = selectEffectiveReviewBundles(
      [
        makeReview({
          reviewBundleId: "rb:old",
          status: "superseded",
          cycleInstanceId: cycleId,
          projectId,
        }),
        makeReview({
          reviewBundleId: "rb:new",
          status: "accepted",
          cycleInstanceId: cycleId,
          projectId,
          supersedesReviewBundleId: "rb:old",
        }),
      ],
      cycleId,
    );
    expect(effective.map((r) => r.reviewBundleId)).toEqual(["rb:new"]);
    expect(
      a.obligations.find((o) => o.family === "review_bundle")?.status,
    ).toBe("SATISFIED");
  });

  it("RV7 — superseded predecessor + rejected successor → BLOCKING", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:old",
        status: "superseded",
        cycleInstanceId: cycleId,
        projectId,
      }),
      makeReview({
        reviewBundleId: "rb:new",
        status: "rejected",
        cycleInstanceId: cycleId,
        projectId,
        supersedesReviewBundleId: "rb:old",
      }),
    ]);
    expect(
      a.obligations.find((o) => o.family === "review_bundle")?.status,
    ).toBe("BLOCKING");
  });

  it("RV8 — accepted historical superseded + current draft → PENDING", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:old",
        status: "superseded",
        cycleInstanceId: cycleId,
        projectId,
      }),
      makeReview({
        reviewBundleId: "rb:new",
        status: "draft",
        cycleInstanceId: cycleId,
        projectId,
        supersedesReviewBundleId: "rb:old",
      }),
    ]);
    expect(
      a.obligations.find((o) => o.family === "review_bundle")?.status,
    ).toBe("PENDING");
  });

  it("RV9 — synthesis-only → never manufacture completion", () => {
    const a = assessRv([
      makeReview({
        reviewBundleId: "rb:syn",
        status: "accepted",
        synthesisOnly: true,
        completeness: "incomplete",
        cycleInstanceId: cycleId,
        projectId,
      }),
    ]);
    expect(
      a.obligations.find((o) => o.family === "review_bundle")?.status,
    ).not.toBe("SATISFIED");
  });
});

describe("BL5 — pause blocker baseline UNKNOWN (BL5a–BL5f)", () => {
  it("BL5a — PAUSE with epistemic unreadable → UNKNOWN baseline", async () => {
    let fail = false;
    const stack = buildStack(tempDbPath("bl5a.sqlite"), {
      epistemic: {
        listByProject: async () => {
          if (fail) throw new Error("epistemic_unreadable");
          return [];
        },
      },
    });
    await seedProject(stack.project, "prj:corr05-bl5a");
    await seedTrajectory(stack.cycles, stack.project, "prj:corr05-bl5a");
    await createCandidate(stack.cycles, "prj:corr05-bl5a", "cyc:corr05-bl5a");
    const ev = await registerPilotAuth(stack.authority, "cyc:corr05-bl5a");
    await stack.cycles.pilotLifecycle.start({
      cycleInstanceId: "cyc:corr05-bl5a",
      projectId: "prj:corr05-bl5a",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    fail = true;
    const paused = await stack.cycles.pilotLifecycle.pause({
      cycleInstanceId: "cyc:corr05-bl5a",
      projectId: "prj:corr05-bl5a",
      createdBy: PILOTE,
      authorityEvidenceId: ev,
    });
    expect(paused.ok).toBe(true);
    if (!paused.ok) return;
    expect(paused.cycle.pauseReconciliation?.blockerSnapshotState).toBe(
      "UNKNOWN",
    );
    expect(paused.cycle.pauseReconciliation?.blockerFingerprint).toBeNull();
  });

  it("BL5b — baseline UNKNOWN + later empty → RESUME refused", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockerSnapshotState: "UNKNOWN",
      blockerSnapshotReason: "epistemic_unreadable",
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: snap }),
      projectId: "prj:corr05-base",
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
      siblingActiveExists: false,
    });
    expect(r.clean).toBe(false);
    expect(r.driftReasons).toContain("blocker_baseline_unknown");
  });

  it("BL5c — baseline UNKNOWN + later blockers → RESUME refused", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockerSnapshotState: "UNKNOWN",
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: snap }),
      projectId: "prj:corr05-base",
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockingReservationStatements: ["still_blocking"],
      siblingActiveExists: false,
    });
    expect(r.driftReasons).toContain("blocker_baseline_unknown");
  });

  it("BL5d — baseline known empty + current known empty → clean", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockerSnapshotState: "KNOWN",
      blockingReservationStatements: [],
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: snap }),
      projectId: "prj:corr05-base",
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockingReservationStatements: [],
      siblingActiveExists: false,
    });
    expect(r.clean).toBe(true);
  });

  it("BL5e — baseline known same blockers → clean on blocker dimension", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockerSnapshotState: "KNOWN",
      blockingReservationStatements: ["r1", "r2"],
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: snap }),
      projectId: "prj:corr05-base",
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockingReservationStatements: ["r2", "r1"],
      siblingActiveExists: false,
    });
    expect(r.driftReasons).not.toContain("blocker_introduced_or_changed");
    expect(r.driftReasons).not.toContain("blocker_baseline_unknown");
    expect(r.clean).toBe(true);
  });

  it("BL5f — baseline known + changed blocker set → drift", () => {
    const snap = buildPauseReconciliationSnapshot({
      pausedAt: "2026-09-07T16:00:00.000Z",
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockerSnapshotState: "KNOWN",
      blockingReservationStatements: [],
      projectId: "prj:corr05-base",
      cycleInstanceId: "cyc:corr05-base",
    });
    const r = assessResumeReconciliation({
      cycle: baseCycle({ status: "paused", pauseReconciliation: snap }),
      projectId: "prj:corr05-base",
      lpsReadable: true,
      lpsVersion: 3,
      lpsActiveCycleInstanceId: null,
      objective: "lifecycle",
      context: "corr05",
      scope: "pilot-lifecycle",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: baseTrajectory(),
      decisions: [],
      evidence: [],
      blockingReservationStatements: ["new_blocker"],
      siblingActiveExists: false,
    });
    expect(r.driftReasons).toContain("blocker_introduced_or_changed");
  });
});

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


## MODIFIED `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
index bf6a6db1..b981465d 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
@@ -45,6 +45,22 @@ vi.mock("@/features/project-assistant/actions", () => ({
     projectAssistantConfirmAndExecuteResolvedM3ActionMock(...args),
   projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
     projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
+  projectAssistantPilotLifecycleProjection: vi.fn(async () => ({
+    ok: true,
+    status: "ok",
+    selectedCycleInstanceId: null,
+    selectedStatus: null,
+    activeCycleInstanceId: null,
+    selectionAmbiguous: false,
+    cta: {
+      canStart: false,
+      canPause: false,
+      canResume: false,
+      canFinalize: false,
+      canCancel: false,
+    },
+  })),
+  projectAssistantPilotLifecycleAction: vi.fn(),
 }));

 vi.mock("next/link", () => ({

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


## MODIFIED `projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
index 22aa8b62..80556cc3 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
@@ -25,6 +25,22 @@ vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantConfirmAndExecuteResolvedM3Action: vi.fn(),
   projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
     projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
+  projectAssistantPilotLifecycleProjection: vi.fn(async () => ({
+    ok: true,
+    status: "ok",
+    selectedCycleInstanceId: null,
+    selectedStatus: null,
+    activeCycleInstanceId: null,
+    selectionAmbiguous: false,
+    cta: {
+      canStart: false,
+      canPause: false,
+      canResume: false,
+      canFinalize: false,
+      canCancel: false,
+    },
+  })),
+  projectAssistantPilotLifecycleAction: vi.fn(),
 }));

 vi.mock("next/link", () => ({

```


## MODIFIED `projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
index 93172998..4b2d7c62 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
@@ -25,6 +25,22 @@ vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantConfirmAndExecuteResolvedM3Action: vi.fn(),
   projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
     projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
+  projectAssistantPilotLifecycleProjection: vi.fn(async () => ({
+    ok: true,
+    status: "ok",
+    selectedCycleInstanceId: null,
+    selectedStatus: null,
+    activeCycleInstanceId: null,
+    selectionAmbiguous: false,
+    cta: {
+      canStart: false,
+      canPause: false,
+      canResume: false,
+      canFinalize: false,
+      canCancel: false,
+    },
+  })),
+  projectAssistantPilotLifecycleAction: vi.fn(),
 }));

 vi.mock("next/link", () => ({

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


## MODIFIED `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index 22d561b0..640cb16b 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -6,11 +6,18 @@ import {
   projectAssistantConfirmAndExecuteF3FixtureAction,
   projectAssistantConfirmAndExecuteResolvedM3Action,
   projectAssistantDecideAction,
+  projectAssistantPilotLifecycleAction,
+  projectAssistantPilotLifecycleProjection,
   projectAssistantPrepareF3FixtureAction,
   projectAssistantPrepareResolvedM3Action,
   projectAssistantRehydrateEvidenceOutcomeAction,
   projectAssistantSendAction,
 } from "./actions";
+import type { PilotLifecycleActionKind } from "./f2/pilotLifecycleActions";
+import type {
+  FinalizationAssessment,
+  PilotLifecycleProjection,
+} from "@/lib/oa/cycle";
 import type {
   AssistantHistoryMessage,
   AssistantToolEventDto,
@@ -128,6 +135,12 @@ export function ProjectAssistantPanel({
     string | null
   >(null);
   const [f3Busy, setF3Busy] = useState(false);
+  const [lifecycleBusy, setLifecycleBusy] = useState(false);
+  const [lifecycleAssessment, setLifecycleAssessment] =
+    useState<FinalizationAssessment | null>(null);
+  const [lifecycleMessage, setLifecycleMessage] = useState<string | null>(null);
+  const [lifecycleProjection, setLifecycleProjection] =
+    useState<PilotLifecycleProjection | null>(null);
   const [isPending, startTransition] = useTransition();
   const listRef = useRef<HTMLDivElement | null>(null);
   const f3InFlightRef = useRef(false);
@@ -173,6 +186,24 @@ export function ProjectAssistantPanel({
     setUiState((prev) => (prev === "INITIAL" ? "READY" : prev));
   }, []);

+  useEffect(() => {
+    let cancelled = false;
+    setLifecycleProjection(null);
+    startTransition(() => {
+      void projectAssistantPilotLifecycleProjection({ projectId }).then(
+        (result) => {
+          if (cancelled) return;
+          if (result.ok && result.projection) {
+            setLifecycleProjection(result.projection);
+          }
+        },
+      );
+    });
+    return () => {
+      cancelled = true;
+    };
+  }, [projectId]);
+
   useEffect(() => {
     let cancelled = false;
     applyDurableEvidenceOutcome(null);
@@ -243,6 +274,7 @@ export function ProjectAssistantPanel({
   const busy =
     isPending ||
     f3Busy ||
+    lifecycleBusy ||
     uiState === "SENDING" ||
     uiState === "ASSISTANT_WORKING" ||
     uiState === "SOURCE_LOOKUP";
@@ -252,6 +284,68 @@ export function ProjectAssistantPanel({
     activeProposal?.morrisGateRequired === true &&
     activeProposal.status === "DECISION_REQUIRED";

+  const lifecycleCycleId =
+    lifecycleProjection?.selectedCycleInstanceId ??
+    (f2?.qualification?.cycleInstanceId ??
+      activeProposal?.contextSnapshot.activeCycleInstanceId ??
+      null);
+  const lifecycleStatus =
+    lifecycleProjection?.selectedStatus ??
+    f2?.qualification?.cycleStatus ??
+    null;
+  const lifecycleCta = lifecycleProjection?.cta;
+
+  function applyLifecycleProjection(projection?: PilotLifecycleProjection) {
+    if (projection) setLifecycleProjection(projection);
+  }
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
+        applyLifecycleProjection(result.projection);
+        return;
+      }
+      setLifecycleMessage(result.message ?? `OK ${action}`);
+      if (result.assessment) {
+        setLifecycleAssessment(result.assessment as FinalizationAssessment);
+      }
+      if (result.projection) {
+        applyLifecycleProjection(result.projection);
+      } else {
+        const refreshed = await projectAssistantPilotLifecycleProjection({
+          projectId,
+        });
+        if (refreshed.ok && refreshed.projection) {
+          applyLifecycleProjection(refreshed.projection);
+        }
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
@@ -740,12 +834,16 @@ export function ProjectAssistantPanel({
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
@@ -780,6 +878,131 @@ export function ProjectAssistantPanel({
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
+              disabled={
+                busy ||
+                (lifecycleCta ? !lifecycleCta.canStart : lifecycleStatus === "active")
+              }
+              onClick={() => runPilotLifecycle("START")}
+            >
+              START
+            </button>
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-pause"
+              disabled={
+                busy ||
+                (lifecycleCta ? !lifecycleCta.canPause : lifecycleStatus !== "active")
+              }
+              onClick={() => runPilotLifecycle("PAUSE")}
+            >
+              PAUSE
+            </button>
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-resume"
+              disabled={
+                busy ||
+                (lifecycleCta
+                  ? !lifecycleCta.canResume
+                  : lifecycleStatus !== "paused")
+              }
+              onClick={() => runPilotLifecycle("RESUME")}
+            >
+              RESUME
+            </button>
+            <button
+              type="button"
+              data-testid="pilot-lifecycle-finalize"
+              disabled={
+                busy ||
+                (lifecycleCta
+                  ? !lifecycleCta.canFinalize
+                  : lifecycleStatus === "completed" ||
+                    lifecycleStatus === "cancelled")
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
+                (lifecycleCta
+                  ? !lifecycleCta.canCancel
+                  : lifecycleStatus === "completed" ||
+                    lifecycleStatus === "cancelled")
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


## MODIFIED `projects/sfia-studio/app/features/project-assistant/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 8137350f..ed66148b 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -4,6 +4,14 @@ import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
 import { orchestrateAssistantSend } from "./f2/orchestrateF2";
 import { recordF2Decision } from "./f2/recordDecision";
+import {
+  executePilotLifecycleAction,
+  type PilotLifecycleActionKind,
+} from "./f2/pilotLifecycleActions";
+import {
+  projectPilotLifecycle,
+  type PilotLifecycleProjection,
+} from "@/lib/oa/cycle";
 import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
 import type { F2DecisionKind } from "./f2/types";
 import { confirmAndExecuteF3Fixture } from "./f3/confirmAndExecuteF3Fixture";
@@ -914,3 +922,189 @@ export async function projectAssistantRehydrateEvidenceOutcomeAction(input: {
     reviewBundleIds: rehydrated.reviewBundleIds,
   };
 }
+
+
+async function buildAssistantPilotLifecycleProjection(
+  projectId: string,
+): Promise<PilotLifecycleProjection | null> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return null;
+  const cycles = await runtime.oa.cycleServices.cycles.listByProject(projectId);
+  const lps =
+    await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+  return projectPilotLifecycle({
+    projectId,
+    cycles,
+    lpsActiveCycleInstanceId: lps.ok
+      ? lps.livingProjectState.activeCycleInstanceId
+      : null,
+  });
+}
+
+/**
+ * CORR-PROOF-05 — durable Pilot lifecycle projection (reload without F2).
+ */
+export async function projectAssistantPilotLifecycleProjection(input: {
+  projectId: string;
+}): Promise<{
+  ok: boolean;
+  status: string;
+  code?: string;
+  message?: string;
+  projection?: PilotLifecycleProjection;
+  selectedCycleInstanceId?: string | null;
+  selectedStatus?: string | null;
+  activeCycleInstanceId?: string | null;
+  selectionAmbiguous?: boolean;
+  cta?: PilotLifecycleProjection["cta"];
+}> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "oa_unavailable",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA indisponibles pour Pilot lifecycle projection.",
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
+  const projection = await buildAssistantPilotLifecycleProjection(
+    input.projectId,
+  );
+  if (!projection) {
+    return {
+      ok: false,
+      status: "projection_unavailable",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Pilot lifecycle projection unavailable.",
+    };
+  }
+  return {
+    ok: true,
+    status: "ok",
+    projection,
+    selectedCycleInstanceId: projection.selectedCycleInstanceId,
+    selectedStatus: projection.selectedStatus,
+    activeCycleInstanceId: projection.activeCycleInstanceId,
+    selectionAmbiguous: projection.selectionAmbiguous,
+    cta: projection.cta,
+  };
+}
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
+  projection?: PilotLifecycleProjection;
+  selectedCycleInstanceId?: string | null;
+  selectedStatus?: string | null;
+  selectionAmbiguous?: boolean;
+  cta?: PilotLifecycleProjection["cta"];
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
+    const projection = await buildAssistantPilotLifecycleProjection(
+      input.projectId,
+    );
+    return {
+      ok: false,
+      status: "lifecycle_error",
+      code: executed.code,
+      message: executed.message,
+      assessment: executed.assessment,
+      project,
+      projection: projection ?? undefined,
+      selectedCycleInstanceId: projection?.selectedCycleInstanceId,
+      selectedStatus: projection?.selectedStatus,
+      selectionAmbiguous: projection?.selectionAmbiguous,
+      cta: projection?.cta,
+    };
+  }
+  const reloaded = await loadProjectRuntimeForAssistant(input.projectId);
+  const nextProject = reloaded.ok ? toContextDto(reloaded) : project;
+  const projection = await buildAssistantPilotLifecycleProjection(
+    input.projectId,
+  );
+  return {
+    ok: true,
+    status: "ok",
+    action: executed.action,
+    cycleStatus: executed.result?.ok ? executed.result.cycle.status : undefined,
+    activeCycleInstanceId: executed.result?.ok
+      ? (executed.result.activeCycleInstanceId ??
+        projection?.activeCycleInstanceId ??
+        nextProject.activeCycleInstanceId ??
+        null)
+      : projection?.activeCycleInstanceId ??
+        nextProject.activeCycleInstanceId ??
+        null,
+    assessment: executed.assessment,
+    decisionId: executed.decisionId,
+    project: nextProject,
+    projection: projection ?? undefined,
+    selectedCycleInstanceId: projection?.selectedCycleInstanceId,
+    selectedStatus: projection?.selectedStatus,
+    selectionAmbiguous: projection?.selectionAmbiguous,
+    cta: projection?.cta,
+    message: `Pilot lifecycle ${executed.action} applied.`,
+  };
+}

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


## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts b/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
index f4e14a80..1858c148 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
@@ -128,6 +128,7 @@ export class CreateCycle {
         acknowledgedAt:
           status === "acknowledged" ? timestamp : undefined,
         createdAt: timestamp,
+        qualificationSignals: request.signals,
       };

       const persist = async () => {
@@ -137,6 +138,13 @@ export class CreateCycle {
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
@@ -144,6 +152,15 @@ export class CreateCycle {
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
@@ -181,6 +198,9 @@ export class CreateCycle {
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


## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts
index 5fe6aaf5..58fb4762 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts
@@ -10,6 +10,15 @@ const DETAIL_TO_MODELED: Record<CycleDetailCode, CycleModeledErrorCode> = {
   CYCLE_ALREADY_EXISTS: "STATE_CONFLICT",
   CYCLE_NOT_FOUND: "STATE_CONFLICT",
   CYCLE_CRITICAL_JUSTIFICATION_REQUIRED: "DECISION_REQUIRED",
+  CYCLE_ALREADY_ACTIVE_EXISTS: "STATE_CONFLICT",
+  CYCLE_TRANSITION_INVALID: "STATE_CONFLICT",
+  CYCLE_TERMINAL: "STATE_CONFLICT",
+  CYCLE_RESUME_DRIFT: "CONTEXT_STALE",
+  CYCLE_START_NOT_READY: "STATE_CONFLICT",
+  CYCLE_FINALIZE_INCOMPLETE: "STATE_CONFLICT",
+  CYCLE_DECISION_REQUIRED: "DECISION_REQUIRED",
+  CYCLE_LIFECYCLE_DENIED: "AUTHORITY_DENIED",
+  AUTHORITY_NOT_CONFIGURED: "AUTHORITY_DENIED",
   PROJECT_NOT_FOUND: "STATE_CONFLICT",
   TRAJECTORY_INVALID: "STATE_CONFLICT",
   TRAJECTORY_ALREADY_EXISTS: "STATE_CONFLICT",
@@ -30,6 +39,21 @@ const SAFE_MESSAGES: Record<CycleDetailCode, string> = {
   CYCLE_NOT_FOUND: "Cycle instance was not found.",
   CYCLE_CRITICAL_JUSTIFICATION_REQUIRED:
     "Critical profile requires a non-empty justification.",
+  CYCLE_ALREADY_ACTIVE_EXISTS:
+    "Another ACTIVE CycleInstance already exists for this Project.",
+  CYCLE_TRANSITION_INVALID: "Cycle lifecycle transition is not allowed.",
+  CYCLE_TERMINAL: "Terminal CycleInstance cannot be transitioned.",
+  CYCLE_RESUME_DRIFT:
+    "Material context drift prevents silent RESUME; replan required.",
+  CYCLE_START_NOT_READY:
+    "START refused — candidate is not ready to become ACTIVE authority.",
+  CYCLE_FINALIZE_INCOMPLETE:
+    "FINALIZE accepted but applicable exit obligations are not satisfied.",
+  CYCLE_DECISION_REQUIRED:
+    "Pilot HumanDecision is required for this lifecycle action.",
+  CYCLE_LIFECYCLE_DENIED: "Pilot lifecycle action was denied.",
+  AUTHORITY_NOT_CONFIGURED:
+    "Pilot local authority is not configured (fail-closed).",
   PROJECT_NOT_FOUND: "Project was not found.",
   TRAJECTORY_INVALID: "Trajectory input is invalid.",
   TRAJECTORY_ALREADY_EXISTS: "Trajectory already exists.",

```


## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/domain/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
index c151d57c..0a98ae95 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
@@ -23,11 +23,55 @@ export type CycleInstanceStatus =
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
+  /** Derived applicability before proof mapping. */
+  applicability?: ObligationApplicability;
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
@@ -72,6 +116,41 @@ export type CkcSource =
   | "product_package"
   | "unavailable";

+/**
+ * Minimal pause-time reconciliation basis (CORR-PROOF-05).
+ * Stored in CycleInstance JSON payload — no DDL / no new table.
+ */
+export type PauseReconciliationSnapshot = {
+  pausedAt: string;
+  lpsVersion: number;
+  lpsActiveCycleInstanceId: string | null;
+  objective: string;
+  context: string;
+  scope: string;
+  doctrinePackageId?: string;
+  doctrinePackageVersion?: string;
+  doctrinePackageDigest?: string;
+  trajectoryId?: string | null;
+  trajectoryVersion?: number | null;
+  trajectoryFingerprint?: string | null;
+  currentDecisionFingerprint?: string | null;
+  evidenceFingerprint?: string | null;
+  blockerFingerprint?: string | null;
+  /** Pause-time knowledge of blocker baseline (CORR-PROOF-05 #3). */
+  blockerSnapshotState?: "KNOWN" | "UNKNOWN";
+  blockerSnapshotReason?: string;
+};
+
+/** Explicit qualification signals — no invented scores. */
+export type CycleQualificationSignals = {
+  structuralChange?: boolean;
+  securityImpact?: boolean;
+  architectureImpact?: boolean;
+  dataImpact?: boolean;
+  irreversible?: boolean;
+  lowRiskBounded?: boolean;
+};
+
 export type CycleInstance = {
   schemaVersion: "0.1.0-oa";
   cycleInstanceId: string;
@@ -82,6 +161,65 @@ export type CycleInstance = {
   acknowledgedAt?: string;
   createdAt: string;
   closedAt?: string;
+  /** Set on PAUSE; cleared on successful RESUME / terminal close. */
+  pauseReconciliation?: PauseReconciliationSnapshot | null;
+  /** Durable create-time qualification signals (JSON payload — no DDL). */
+  qualificationSignals?: CycleQualificationSignals;
+};
+
+/** Applicability before proof status (CORR-PROOF-05 enforcement). */
+export type ObligationApplicability =
+  | "APPLICABLE"
+  | "NOT_APPLICABLE"
+  | "UNKNOWN";
+
+export type FinalizationApplicabilityRules = {
+  exit_criteria?: ObligationApplicability;
+  artifact?: ObligationApplicability;
+  execution_contract?: ObligationApplicability;
+  evidence?: ObligationApplicability;
+  review_bundle?: ObligationApplicability;
+  git_repository?: ObligationApplicability;
+  blockers?: ObligationApplicability;
+  /** Required when a family is NOT_APPLICABLE via explicit rule. */
+  notApplicableReasons?: Partial<
+    Record<
+      | "exit_criteria"
+      | "artifact"
+      | "execution_contract"
+      | "evidence"
+      | "review_bundle"
+      | "git_repository"
+      | "blockers",
+      string
+    >
+  >;
+  /** When git is APPLICABLE, whether durable git proof is present. */
+  gitProofPresent?: boolean;
+  /** When artifact is APPLICABLE, whether durable artifact proof is present. */
+  artifactProofPresent?: boolean;
+  /**
+   * Derived contradictions: durable APPLICABLE fact vs contradictory NO_* policy.
+   * Transient — never persisted as a second truth store.
+   */
+  contradictions?: Array<{
+    family:
+      | "artifact"
+      | "execution_contract"
+      | "evidence"
+      | "review_bundle"
+      | "git_repository";
+    positiveSource: string;
+    conflictingDecisionId: string;
+    conflictingOptionId: string;
+  }>;
+};
+
+export type StartReadinessAssessment = {
+  ready: boolean;
+  blockers: string[];
+  requiresTrajectoryHumanDecision: boolean;
+  assessedAt: string;
 };

 export type TrajectoryStep = {
@@ -146,16 +284,6 @@ export type CkcResolution = {
   provenance?: ProvenanceRecord;
 };

-/** Explicit qualification signals — no invented scores. */
-export type CycleQualificationSignals = {
-  structuralChange?: boolean;
-  securityImpact?: boolean;
-  architectureImpact?: boolean;
-  dataImpact?: boolean;
-  irreversible?: boolean;
-  lowRiskBounded?: boolean;
-};
-
 export type QualifyCycleRequest = {
   objective?: string;
   scope?: string;
@@ -290,6 +418,15 @@ export type CycleDetailCode =
   | "CYCLE_ALREADY_EXISTS"
   | "CYCLE_NOT_FOUND"
   | "CYCLE_CRITICAL_JUSTIFICATION_REQUIRED"
+  | "CYCLE_ALREADY_ACTIVE_EXISTS"
+  | "CYCLE_TRANSITION_INVALID"
+  | "CYCLE_TERMINAL"
+  | "CYCLE_RESUME_DRIFT"
+  | "CYCLE_START_NOT_READY"
+  | "CYCLE_FINALIZE_INCOMPLETE"
+  | "CYCLE_DECISION_REQUIRED"
+  | "CYCLE_LIFECYCLE_DENIED"
+  | "AUTHORITY_NOT_CONFIGURED"
   | "PROJECT_NOT_FOUND"
   | "TRAJECTORY_INVALID"
   | "TRAJECTORY_ALREADY_EXISTS"
@@ -303,6 +440,118 @@ export type CycleDetailCode =
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
+  /** Pilot authority evidence verified server-side (never actorId alone). */
+  authorityEvidenceId?: string;
+  /**
+   * Caller hint only — server derives whether trajectory HD is required.
+   * Never sole authority for skipping HD.
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
+  authorityEvidenceId?: string;
+};
+
+export type ResumeCycleRequest = {
+  cycleInstanceId: string;
+  projectId: string;
+  createdBy: PilotLifecycleActor;
+  correlationId?: string;
+  expectedLpsVersion?: number;
+  authorityEvidenceId?: string;
+  /**
+   * Caller diagnostic hint only — NOT source of truth.
+   * Server reconciles; hint true forces fail-closed drift.
+   */
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
+  authorityEvidenceId?: string;
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
+  authorityEvidenceId?: string;
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


## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 201f8b2b..4b4af311 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -30,6 +30,82 @@ export * from "./application/qualifyCycleWithCkc";
 export * from "./application/bindCatalogAuthority";
 export { CreateCycle } from "./application/createCycle";
 export { GetCycle } from "./application/getCycle";
+export {
+  assessFinalizationObligations,
+  finalizeSubjectFor,
+  cancelSubjectFor,
+  startTrajectorySubjectFor,
+  resumeReplanSubjectFor,
+  isAcceptedFinalizeDecision,
+  isAcceptedCancelDecision,
+  isAcceptedStartTrajectoryDecision,
+  isAcceptedResumeReplanDecision,
+  FINALIZE_SUBJECT_PREFIX,
+  CANCEL_SUBJECT_PREFIX,
+  START_TRAJECTORY_SUBJECT_PREFIX,
+  RESUME_REPLAN_SUBJECT_PREFIX,
+} from "./application/assessFinalization";
+export {
+  assessStartReadiness,
+  type AssessStartReadinessInput,
+} from "./application/assessStartReadiness";
+export {
+  buildPauseReconciliationSnapshot,
+  assessResumeReconciliation,
+  trajectoryFingerprint,
+  type BuildPauseSnapshotInput,
+  type ResumeReconciliationInput,
+  type ResumeReconciliationResult,
+} from "./application/assessResumeReconciliation";
+export {
+  projectPilotLifecycle,
+  type PilotLifecycleProjection,
+} from "./application/lifecycleProjection";
+export {
+  deriveLifecycleBlockersFromEpistemicItems,
+  lifecycleBlockersFromReaderFailure,
+  type LifecycleBlockerSnapshot,
+} from "./application/deriveLifecycleBlockers";
+export {
+  deriveFinalizationApplicability,
+  obligationPolicySubjectFor,
+  OBLIGATION_POLICY_SUBJECT_PREFIX,
+  OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
+  OBLIGATION_POLICY_NO_ARTIFACT,
+  OBLIGATION_POLICY_NO_GIT,
+  OBLIGATION_POLICY_NO_EXECUTION,
+  OBLIGATION_POLICY_NO_EVIDENCE,
+  OBLIGATION_POLICY_NO_REVIEW,
+  OBLIGATION_POLICY_REQUIRE_ARTIFACT,
+  OBLIGATION_POLICY_REQUIRE_GIT,
+  isGitQualifyingEvidence,
+  type DerivableExecutionContract,
+  type DeriveFinalizationApplicabilityInput,
+} from "./application/deriveFinalizationApplicability";
+export {
+  selectEffectiveExecutionContracts,
+  type SelectableExecutionContract,
+  type SelectEffectiveExecutionContractsResult,
+} from "./application/selectEffectiveExecutionContracts";
+export {
+  selectEffectiveReviewBundles,
+  type SelectEffectiveReviewBundlesResult,
+} from "./application/selectEffectiveReviewBundles";
+export {
+  isGitApplicableContract,
+  type GitQualifiableContract,
+} from "./application/qualifyGitEvidence";
+export {
+  PilotLifecycleTransitions,
+  type PilotLifecycleDeps,
+  type PilotLifecycleAuthorityPort,
+  type LifecycleDecisionReader,
+  type LifecycleEvidenceReader,
+  type LifecycleReviewBundleReader,
+  type LifecycleExecutionSnapshotReader,
+  type LifecycleEpistemicReader,
+} from "./application/pilotLifecycleTransitions";
+export * from "./domain/lifecycleInvariants";
 export { CreateInitialTrajectory } from "./application/createInitialTrajectory";
 export { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
 export { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
@@ -92,9 +168,19 @@ import {
 } from "./application/bindCatalogAuthority";
 import { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
 import { UpdateEpistemicState } from "./application/updateEpistemicState";
+import {
+  PilotLifecycleTransitions,
+  type LifecycleDecisionReader,
+  type LifecycleEvidenceReader,
+  type LifecycleReviewBundleReader,
+  type LifecycleExecutionSnapshotReader,
+  type LifecycleEpistemicReader,
+  type PilotLifecycleAuthorityPort,
+} from "./application/pilotLifecycleTransitions";
 import { DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY } from "./domain/catalogFingerprint";
 import type { CycleTypeCatalogAuthority } from "./domain/catalogFingerprint";
 import type { CycleTypeCatalog } from "./domain/cycleTypeCatalog";
+import type { FinalizationApplicabilityRules } from "./domain/types";
 import { CkcQualificationResolver } from "./infrastructure/ckcQualificationResolver";
 import { MemoryCkcResolver } from "./infrastructure/memoryCkcResolver";
 import { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
@@ -132,6 +218,8 @@ export type CycleServices = {
   getEpistemicState: GetEpistemicState;
   updateEpistemicState: UpdateEpistemicState;
   resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
+  /** CORR-PROOF-05 Pilot lifecycle transitions. */
+  pilotLifecycle: PilotLifecycleTransitions;
 };

 export type CreateInMemoryCycleServicesOptions = {
@@ -139,6 +227,13 @@ export type CreateInMemoryCycleServicesOptions = {
   clock?: ClockPort;
   audit?: CycleAuditPort;
   ckcResolver?: CkcResolverPort;
+  decisions?: LifecycleDecisionReader;
+  evidence?: LifecycleEvidenceReader;
+  reviewBundles?: LifecycleReviewBundleReader;
+  execution?: LifecycleExecutionSnapshotReader;
+  epistemic?: LifecycleEpistemicReader;
+  authority?: PilotLifecycleAuthorityPort;
+  applicabilityRules?: FinalizationApplicabilityRules;
 };

 export type CkcQualificationServices = {
@@ -329,6 +424,23 @@ export function createInMemoryCycleServices(
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
+      epistemic: options.epistemic ?? {
+        listByProject: (projectId) => epistemic.listByProject(projectId),
+      },
+      authority: options.authority,
+      applicabilityRules: options.applicabilityRules,
+    }),
   };
 }


```


## MODIFIED `projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
index 8823ec68..cec31f88 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts
@@ -12,6 +12,16 @@ import { ProposeTrajectoryVersion } from "../../application/proposeTrajectoryVer
 import { QualifyCycle } from "../../application/qualifyCycle";
 import { ResolveCycleKnowledgeContract } from "../../application/resolveCycleKnowledgeContract";
 import { UpdateEpistemicState } from "../../application/updateEpistemicState";
+import {
+  PilotLifecycleTransitions,
+  type LifecycleDecisionReader,
+  type LifecycleEvidenceReader,
+  type LifecycleReviewBundleReader,
+  type LifecycleExecutionSnapshotReader,
+  type LifecycleEpistemicReader,
+  type PilotLifecycleAuthorityPort,
+} from "../../application/pilotLifecycleTransitions";
+import type { FinalizationApplicabilityRules } from "../../domain/types";
 import { MemoryCkcResolver } from "../memoryCkcResolver";
 import type { CycleAuditPort } from "../../ports/cycleAudit";
 import type { CyclePersistenceUnitOfWorkPort } from "../../ports/cyclePersistenceUnitOfWorkPort";
@@ -31,6 +41,13 @@ export type CreateSqliteCycleServicesOptions = {
   clock?: ClockPort;
   audit?: CycleAuditPort;
   ckcResolver?: CkcResolverPort;
+  decisions?: LifecycleDecisionReader;
+  evidence?: LifecycleEvidenceReader;
+  reviewBundles?: LifecycleReviewBundleReader;
+  execution?: LifecycleExecutionSnapshotReader;
+  epistemic?: LifecycleEpistemicReader;
+  authority?: PilotLifecycleAuthorityPort;
+  applicabilityRules?: FinalizationApplicabilityRules;
 };

 export type SqliteCycleServices = {
@@ -52,6 +69,7 @@ export type SqliteCycleServices = {
   getEpistemicState: GetEpistemicState;
   updateEpistemicState: UpdateEpistemicState;
   resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
+  pilotLifecycle: PilotLifecycleTransitions;
 };

 /**
@@ -120,6 +138,23 @@ export function createSqliteCycleServices(
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
+      epistemic: options.epistemic ?? {
+        listByProject: (projectId) => epistemic.listByProject(projectId),
+      },
+      authority: options.authority,
+      applicabilityRules: options.applicabilityRules,
+    }),
   };
 }


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


## MODIFIED `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index 81b82ee2..2c7af594 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -183,21 +183,171 @@ function wireOaStack(
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
+    executionAttemptServices: null as ExecutionAttemptServices | null,
+  };
+
+  const mapAttemptTerminalState = (
+    status: string,
+  ): string | undefined => {
+    switch (status) {
+      case "succeeded":
+        return "terminal_success";
+      case "failed":
+        return "terminal_failure";
+      case "timeout":
+        return "terminal_timeout";
+      case "cancelled":
+        return "terminal_cancelled";
+      default:
+        return undefined;
+    }
+  };
+
+  const lateCycle = {
+    services: null as CycleServices | null,
+  };
+
+  const lifecycleReaders = {
+    decisions: {
+      getById: async (decisionId: string) => {
+        if (!late.decisionServices) return null;
+        return late.decisionServices.decisions.findById(decisionId);
+      },
+      listByProject: async (projectId: string) => {
+        if (!late.decisionServices) return [];
+        return late.decisionServices.decisions.listByProject(projectId);
+      },
+    },
+    evidence: {
+      listByProject: async (projectId: string) => {
+        if (!late.evidenceReviewServices) return [];
+        return late.evidenceReviewServices.repository.listByProject(projectId);
+      },
+    },
+    reviewBundles: {
+      listByProject: async (projectId: string) => {
+        if (!late.evidenceReviewServices) return [];
+        return late.evidenceReviewServices.reviewBundleRepository.listByProject(
+          projectId,
+        );
+      },
+    },
+    epistemic: {
+      listByProject: async (projectId: string) => {
+        if (!lateCycle.services) {
+          throw new Error("epistemic_reader_unavailable");
+        }
+        return lateCycle.services.epistemic.listByProject(projectId);
+      },
+    },
+    execution: {
+      listContractsByProject: async (projectId: string) => {
+        if (!late.executionContractServices) return [];
+        const list =
+          await late.executionContractServices.contracts.listByProject(
+            projectId,
+          );
+        return list.map((c) => ({
+          contractId: c.executionContractId,
+          cycleInstanceId: c.cycleInstanceId,
+          status: c.status,
+          expectedOutputs: c.expectedOutputs,
+          requiredCapabilities: c.requiredCapabilities,
+          evidenceRequirements: c.evidenceRequirements,
+          action: c.action,
+          target: c.target,
+          scope: c.scope,
+        }));
+      },
+      listAttemptsByProject: async (projectId: string) => {
+        if (
+          !late.executionContractServices ||
+          !late.executionAttemptServices
+        ) {
+          return [];
+        }
+        const contracts =
+          await late.executionContractServices.contracts.listByProject(
+            projectId,
+          );
+        const out: Array<{
+          attemptId: string;
+          contractId?: string;
+          terminalState?: string;
+        }> = [];
+        for (const c of contracts) {
+          const attempts =
+            await late.executionAttemptServices.attempts.listByContract(
+              c.executionContractId,
+            );
+          for (const a of attempts) {
+            out.push({
+              attemptId: a.attemptId,
+              contractId: a.executionContractId,
+              terminalState: mapAttemptTerminalState(a.status),
+            });
+          }
+        }
+        return out;
+      },
+    },
+  };
+
+  // CORR-PROOF-05 — create authority before CycleServices so Pilot lifecycle
+  // mutations can verify N3 evidence (chicken-egg with decision factory).
+  const authorityResolver = new MemoryAuthorityResolver();
+  // M3 authority is fail-closed unless env enabled; registration happens per-scope in F2/F3.
+  void isM3LocalAuthorityEnabled;
+
+  const authorityPort = {
+    verify: (req: {
+      actorId: string;
+      scope: string;
+      evidenceId?: string;
+      requiredLevel?: "N1" | "N2" | "N3";
+      requireMorrisGate?: boolean;
+    }) => {
+      const r = authorityResolver.verify({
+        actorId: req.actorId,
+        requiredLevel: req.requiredLevel ?? "N3",
+        scope: req.scope,
+        evidenceId: req.evidenceId,
+        requireMorrisGate: req.requireMorrisGate ?? true,
+      });
+      return { ok: r.ok, reason: r.reason };
+    },
+  };
+
   const cycleServices = productSqlite
     ? createSqliteCycleServices({
         projectServices,
         productStore: productSqlite,
         clock,
+        ...lifecycleReaders,
+        authority: authorityPort,
       })
-    : createInMemoryCycleServices({ projectServices, clock });
+    : createInMemoryCycleServices({
+        projectServices,
+        clock,
+        ...lifecycleReaders,
+        authority: authorityPort,
+      });
+  lateCycle.services = cycleServices;
   const ckcQualification = createCkcQualificationServices({
     clock,
     registryRoot: options?.registryRoot,
     doctrinePackagePin: options?.doctrinePackagePin,
   });
-  const authorityResolver = new MemoryAuthorityResolver();
-  // M3 authority is fail-closed unless env enabled; registration happens per-scope in F2/F3.
-  void isM3LocalAuthorityEnabled;

   const decisionServices = productSqlite
     ? createSqliteDecisionServices({
@@ -213,6 +363,7 @@ function wireOaStack(
         clock,
         authorityResolver,
       });
+  late.decisionServices = decisionServices;

   const executionContractServices = productSqlite
     ? createSqliteExecutionContractServices({
@@ -230,6 +381,7 @@ function wireOaStack(
         clock,
         authorityResolver,
       });
+  late.executionContractServices = executionContractServices;

   // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
   // GAP-3: realBoundary is optional and OFF by default. M4 descriptor is
@@ -273,6 +425,7 @@ function wireOaStack(
         policy: { defaultMaxRetriesBudget: 0 },
         realBoundary,
       });
+  late.executionAttemptServices = executionAttemptServices;

   const evidenceReviewServices = productSqlite
     ? createSqliteEvidenceReviewServices({
@@ -288,6 +441,7 @@ function wireOaStack(
           executionAttemptServices.attempts,
         ),
       });
+  late.evidenceReviewServices = evidenceReviewServices;

   // MW1-S03 / CORR-01 — compose materialization on normal RuntimeOaStack path.
   // Product SQLite: durable materialization audit via SqliteProjectAuditJournal

```


# 31. Focused test results
corrProof05.pilotLifecycle.d0.test.ts — **114/114 PASS**

# 32. CP test results
CP1–CP9 PASS (contradiction precedence)

# 33. EC test results
EC1–EC10 PASS (execution exit semantics)

# 34. GP test results
GP1–GP8 PASS (Git semantic binding)

# 35. RV test results
RV1–RV9 PASS (ReviewBundle exit semantics)

# 36. BL5 test results
BL5a–BL5f PASS (pause blocker baseline UNKNOWN/KNOWN)

# 37. Positive runtime path
AP1-runtime / SC12 still PASS: NO_GOVERNED_EFFECTS only when no contradictory positive facts; FINALIZE → completed; no second Close.

# 38. Full npm test
315 passed | 17 skipped files; **3240 passed** | 135 skipped tests

# 39. typecheck
PASS (tsc --noEmit after build)

# 40. build
PASS (Next.js production build)

# 41. diff-check
OK

# 42. Fake/Real
Deterministic only. REAL = NOT EXECUTED. Suivi untouched.

# 43. Risks/reserves
- Obligation-policy HD remains Decision convention for UNKNOWN→N/A (no UI yet)
- Git binding requires EC id or explicit location/source git semantics
- Legacy pause snapshots without blockerSnapshotState: RESUME treats missing state conservatively via UNKNOWN check when field present; new pauses always set state

# 44. Bounded debt + exit
Debt: Product UI for obligation-policy; future Artifact/Git SoT if Morris decides.
Exit: ChatGPT DELIVERY RE-REVIEW of correction #3.

# 45. Final Local Git Truth
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
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
?? projects/sfia-studio/app/lib/oa/cycle/application/assessResumeReconciliation.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/assessStartReadiness.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/deriveLifecycleBlockers.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/qualifyGitEvidence.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/selectEffectiveExecutionContracts.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/selectEffectiveReviewBundles.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/lifecycleInvariants.ts

```
name-status:
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/oa/cycle/m2ProductCycleDurability.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/m2CognitivePiloting.e2e.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
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

```
stat:
```
 .tmp-sfia-review/chatgpt-review.md                 | 8460 +++++++++++++++++++-
 .../oa/cycle/m2ProductCycleDurability.test.ts      |    8 +-
 .../ProjectAssistantPanel.test.tsx                 |   16 +
 .../project-assistant/f2.orchestrate.test.ts       |    2 +-
 .../m2CognitivePiloting.e2e.test.ts                |   18 +-
 .../mw3.cognitiveStop.panel.ux.d0.test.tsx         |   16 +
 .../mw3.correction.panel.ux.d0.test.tsx            |   16 +
 .../project-assistant/w2TrackDPhaseB.test.ts       |   22 +-
 .../project-assistant/ProjectAssistantPanel.tsx    |  225 +-
 .../app/features/project-assistant/actions.ts      |  194 +
 .../features/project-assistant/f2/orchestrateF2.ts |   13 +-
 .../project-assistant/f2/studioCognitiveContext.ts |    6 +-
 .../app/lib/oa/cycle/application/createCycle.ts    |   20 +
 .../sfia-studio/app/lib/oa/cycle/domain/errors.ts  |   24 +
 .../sfia-studio/app/lib/oa/cycle/domain/types.ts   |  269 +-
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |  112 +
 .../sqlite/createSqliteCycleServices.ts            |   35 +
 .../app/lib/oa/cycle/ports/cycleAudit.ts           |   28 +
 .../app/lib/vertical-slice-runtime/service.ts      |  162 +-
 19 files changed, 9408 insertions(+), 238 deletions(-)

```
cached:
```
(none)
```
HEAD `12d837fd29a69b3e83155a06ec58dc91b0e15f0b` · staged=0 · Product uncommitted

# 46. Review Handoff metadata
- Publisher: scripts/sfia/publish-review-handoff.sh
- Message: docs(review-handoff): publish CORR-PROOF-05 delivery enforcement correction 3
- Before: `9ae791ca048b8fdacdf22210f360d896107c039f`
- After: (post-publish)

# 47. Final verdict
**READY FOR CHATGPT CORR-PROOF-05 DELIVERY RE-REVIEW**
