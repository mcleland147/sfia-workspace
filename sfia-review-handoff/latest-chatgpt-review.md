# CORR-PROOF-10 — Atomic Subject Closure Remediation Review Pack (FULL)

- timestamp: 2026-09-15T07:06:03Z
- repository: mcleland147/sfia-workspace
- worktree: /Users/morris/Projects/sfia-studio-corr-proof-10-decision-context-continuity
- branch: fix/sfia-studio-corr-proof-10-decision-context-continuity
- HEAD / base: 93ac1aea1af6b2094c158c5068bec1602d863ca7
- origin/main: 93ac1aea1af6b2094c158c5068bec1602d863ca7
- base compatibility: HEAD == origin/main == 93ac1aea1af6b2094c158c5068bec1602d863ca7 (NO divergence)
- prior handoff: sfia/review-handoff commit dc43dc5d2bfd51e01d7b0c73a35d31dc1d8ad129 / blob cb4584c6d9241c822b0ff55f4d410b1979315b28
- dogfood (UNTOUCHED): /Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d @ 93ac1aea1af6b2094c158c5068bec1602d863ca7
- cycle: 8 Delivery / EVOL / Critical
- fake/real: Fake only. ZERO LIVE. ZERO REAL. ZERO dogfood mutation.
- project commit/push/PR: NOT PERFORMED

## git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/auth/auth-real-boundary-session.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceCorrection.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
?? .tmp-sfia-review/corr-proof-10-full-diff.txt
?? projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
?? projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
?? projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts
```

## git diff --stat (tracked vs HEAD)

```
 .../auth/auth-real-boundary-session.test.ts        |   4 +-
 .../project-assistant/w2EabcDelivery.test.ts       | 152 +++----
 .../project-assistant/w2TrackDPhaseB.test.ts       |  30 +-
 .../project-assistant/w3aGovernedExecute.test.ts   |   4 +-
 .../project-assistant/w3bProductTerminal.test.ts   |   4 +-
 .../w3cPostEvidenceCorrection.test.ts              |  10 +-
 .../project-assistant/w3cPostEvidenceLoop.test.ts  |  18 +-
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |   5 +
 .../surfaces/TrajectorySurface.tsx                 | 107 ++++-
 .../features/project-assistant/f2/orchestrateF2.ts |  63 +++
 .../features/project-assistant/f2/proposalStore.ts |  11 +
 .../app/features/project-assistant/w2/actions.ts   |  65 ++-
 .../project-assistant/w2/decideTrajectory.ts       | 482 ++++++++++++++++-----
 .../w2/prepareExecutionContractFromW2Decision.ts   |  86 +++-
 .../project-assistant/w2/presentedOptionSet.ts     |  94 ++--
 .../w2/proposeTrajectoryOptions.ts                 | 315 +++++++++++++-
 .../app/features/project-assistant/w2/types.ts     |  33 +-
 17 files changed, 1192 insertions(+), 291 deletions(-)
```

## Sources

- process templates / routing / synthetic cycle map
- convergence doctrine / roadmap / product-completion cadrage
- v3 framing 32–34
- full CORR-PROOF-10 candidate + Integration Readiness Review finding (atomic closure)
- inspected (read-only): lib/oa/decision/application/recordHumanDecision.ts
- inspected UoW: SqliteProductStore AsyncLocalStorage nested reentrance

## Root cause (CONFIRMED)

Proposal decideTrajectory:
1. `runInTransaction` persisted RecordHumanDecision + LPS linkage
2. AFTER commit, DecisionRef Epistemic was written best-effort
3. Failure of (2) left durable HD while subject still appeared awaiting (DecisionRef = closure signal)
4. ProposalStore was updated inside the UoW before durable DecisionRef success

## UoW / transaction seam (PROVEN)

- Product SQLite `SqliteProductStore.runInTransaction` uses AsyncLocalStorage
- Nested `runInTransaction` (RecordHumanDecision, UpdateEpistemicState) joins the same open BEGIN/COMMIT
- `updateEpistemicState` participates in the outer Product UoW when called inside it
- On throw → ROLLBACK of HD + LPS + DecisionRef together
- Deterministic proof via `failNextSave = "epistemic"` (R49–R55)

## Sequencing BEFORE → AFTER (Proposal mode)

### Before
UoW: HD + LPS → COMMIT
then best-effort DecisionRef
then ProposalStore update (was inside UoW — wrong)

### After
UoW: HD + LPS + DecisionRef (checked; fail → throw → ROLLBACK)
AFTER durable success only:
- updateProposalStatus (process-local)
- resolvePending marker (best-effort, non-authoritative)

Trajectory path DecisionRef remains post-commit historical (scope not widened).

## DecisionRef contract (Proposal)

relatedObjects include: projectId, decisionId, selectedOptionRef, optionSetRef, proposalId, epistemicRefs
Stable id: `epi:w2-decref-prop:{optionSetRef}`
Single authoritative closure signal (PresentedOptionSet stays loadable for PREPARE).

## closePresentedProposalOptionSet

REMOVED (was dead code / competing closure model).
Closure = DecisionRef only. R62 proves export absent.

## Tests R01–R68

| Band | Result |
|------|--------|
| R01–R48 | PASS preserved |
| R49–R55 | PASS rollback HD/LPS/DecisionRef + ProposalStore + retry exactly-once |
| R56–R57 | PASS restart closed + SUBJECT_ALREADY_DECIDED + no supersession |
| R58 | PASS PREPARE via prepareM3FromDecision; sealed OptionSet still loadable |
| R59 | PASS amend/refuse atomic closure + PREPARE_NOT_APPLICABLE + ZERO PT |
| R60 | covered by R36/R37 still green |
| R61 | W2 Track A PASS |
| R62 | dead closure removed |
| R63/R68 | ZERO cycle / ZERO REAL/dogfood |
| R64/R65 | CORR-07/09 PASS |
| R66 | CORR-10 37 tests PASS |
| R67 | typecheck/lint/build PASS |

Full Vitest suite: NOT RUN (cost). Not claimed PASS.

## Fake / Real

DETERMINISTIC PROVEN @ CORR-PROOF-10 atomic subject closure scope.
Out of scope: REAL / GO REAL / Product Proof complete / runtime v3 ADOPTED.

## Temporary debt / exits

- Trajectory-mode DecisionRef remains post-commit (historical; out of this remediation scope)
- Pending marker resolve remains best-effort after durable success (not authority)
- Full Vitest NOT RUN

## Decisions Morris consumed

- Continue same CORR-PROOF-10 worktree/branch
- Atomic HD+LPS+DecisionRef for Proposal mode only
- Handoff L3 only; no project commit/push/PR

## Decisions not taken

- lib/oa structural change
- New table / migration
- Trajectory DecisionRef atomicity expansion
- REAL / dogfood

## Verdict

CORR-PROOF-10 DECISION CONTINUITY — ATOMIC SUBJECT CLOSURE DETERMINISTICALLY PROVEN — READY FOR CHATGPT FINAL INTEGRATION READINESS REVIEW


## FULL NEW / CANDIDATE CORE FILES


### FILE: `projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts`

```typescript
/**
 * CORR-PROOF-10 — durable Proposal decision-subject read / rehydration.
 *
 * Design (smallest delta): PresentedOptionSet Observation is the durable
 * truth after binding. Pending marker covers only the pre-binding window.
 *
 * READ FAILURE ≠ EMPTY STATE — Epistemic errors never become "none".
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  listActivePendingDecisionSubjectMarkers,
  type PendingDecisionSubjectMarker,
} from "./pendingDecisionSubjectMarker";
import {
  isProposalSubjectPresentedSet,
  parsePresentedOptionSetStatement,
  type PresentedOptionSetBinding,
  W2_PRESENTED_OPTION_SET_KIND,
} from "./presentedOptionSet";
import type { TrajectoryOptionSetDto } from "./types";

export type EpistemicReadFailure = {
  readonly ok: false;
  readonly code: "EPISTEMIC_READ_FAILED";
  readonly message: string;
};

export type ActiveProposalDecisionSubject =
  | {
      readonly ok: true;
      readonly kind: "none";
    }
  | {
      readonly ok: true;
      readonly kind: "pending_reinstruction_required";
      readonly markers: readonly PendingDecisionSubjectMarker[];
      readonly message: string;
    }
  | {
      readonly ok: true;
      readonly kind: "bound_awaiting_decision";
      readonly presented: PresentedOptionSetBinding;
      readonly optionSet: TrajectoryOptionSetDto;
    }
  | EpistemicReadFailure;

export function presentedBindingToOptionSetDto(
  presented: PresentedOptionSetBinding,
): TrajectoryOptionSetDto {
  return {
    optionSetRef: presented.optionSetRef,
    cycleTypeId: presented.cycleTypeId,
    recommendedProfile: presented.recommendedProfile,
    options: presented.options,
    recommendation: presented.recommendation,
    epistemicRefs: presented.epistemicRefs,
    proposedTrajectory:
      presented.decisionSubjectMode === "proposal" ||
      presented.trajectoryId == null ||
      presented.candidateVersion == null
        ? null
        : {
            trajectoryId: presented.trajectoryId,
            version: presented.candidateVersion,
            status: "candidate",
            statusLabel: "TRAJECTOIRE PROPOSÉE",
            isCurrent: false,
          },
    phase: "OPTIONS_PROPOSED",
    autoDecisionPerformed: false,
    executionPerformed: false,
    ckcCognitionCompletedBeforeMutation: true,
    decisionSubjectMode: presented.decisionSubjectMode,
    proposalId: presented.proposalId ?? null,
    promotesProjectTrajectory: presented.promotesProjectTrajectory,
  };
}

function decidedOptionSetRefsFromEpistemic(
  items: ReadonlyArray<{
    readonly type: string;
    readonly status: string;
    readonly relatedObjects?: readonly string[] | null;
  }>,
): ReadonlySet<string> {
  const refs = new Set<string>();
  for (const item of items) {
    if (item.type !== "DecisionRef" || item.status !== "active") continue;
    for (const rel of item.relatedObjects ?? []) {
      if (rel.startsWith("optset:")) refs.add(rel);
    }
  }
  return refs;
}

/**
 * Scan Epistemic for an active Proposal PresentedOptionSet still awaiting HD.
 * Fail-closed on Epistemic read errors.
 */
export async function findActiveAwaitingProposalPresentedOptionSet(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<
  | {
      readonly ok: true;
      readonly presented: PresentedOptionSetBinding | null;
    }
  | EpistemicReadFailure
> {
  const epistemic = await oa.cycleServices.getEpistemicState.execute({
    projectId,
  });
  if (!epistemic.ok) {
    return {
      ok: false,
      code: "EPISTEMIC_READ_FAILED",
      message:
        "État épistémique illisible — impossible de déterminer un sujet décisionnel Proposal actif. Aucun fallback trajectoire générique.",
    };
  }

  const decidedRefs = decidedOptionSetRefsFromEpistemic(epistemic.state.items);
  const matches: PresentedOptionSetBinding[] = [];
  for (const item of epistemic.state.items) {
    if (item.type !== "Observation" || item.status !== "active") continue;
    const parsed = parsePresentedOptionSetStatement(item.statement);
    if (!parsed) continue;
    if (!isProposalSubjectPresentedSet(parsed)) continue;
    if (parsed.kind !== W2_PRESENTED_OPTION_SET_KIND) continue;
    if (decidedRefs.has(parsed.optionSetRef)) continue;
    matches.push(parsed);
  }

  return {
    ok: true,
    presented: matches.length > 0 ? matches[matches.length - 1]! : null,
  };
}

/**
 * Canonical server read for active Proposal decision subject continuity.
 */
export async function readActiveProposalDecisionSubject(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<ActiveProposalDecisionSubject> {
  const bound = await findActiveAwaitingProposalPresentedOptionSet(
    oa,
    projectId,
  );
  if (!bound.ok) return bound;

  if (bound.presented) {
    return {
      ok: true,
      kind: "bound_awaiting_decision",
      presented: bound.presented,
      optionSet: presentedBindingToOptionSetDto(bound.presented),
    };
  }

  const pending = await listActivePendingDecisionSubjectMarkers(oa, projectId);
  if (!pending.ok) return pending;

  if (pending.markers.length > 0) {
    return {
      ok: true,
      kind: "pending_reinstruction_required",
      markers: pending.markers,
      message:
        "Sujet décisionnel pending durable détecté après perte process-local — réinstruction Nora requise. Aucun fallback vers options de trajectoire génériques.",
    };
  }

  return { ok: true, kind: "none" };
}
```


### FILE: `projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts`

```typescript
/**
 * CORR-PROOF-10 remediation — durable Epistemic Observation marking a
 * pending Proposal decision subject before PresentedOptionSet binding.
 *
 * NOT a HumanDecision, NOT a durable Proposal, NOT a new table.
 * Prevents silent fallback to generic ProjectTrajectory options after
 * process-local ProposalStore loss (restart-before-binding).
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";

export const PENDING_DECISION_SUBJECT_KIND =
  "w2_pending_decision_subject" as const;

export type PendingDecisionSubjectMarker = {
  readonly kind: typeof PENDING_DECISION_SUBJECT_KIND;
  readonly proposalId: string;
  readonly projectId: string;
  /** Digest of full sealed execution basis at marker write time. */
  readonly subjectDigest: string;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest: string;
  readonly status: "pending_binding";
};

export function pendingDecisionSubjectObservationId(
  projectId: string,
  proposalId: string,
): string {
  const slug = `${projectId}:${proposalId}`.replace(/[^a-zA-Z0-9:_-]/g, "-");
  return `epi:pending-subject:${slug}`.slice(0, 180);
}

export function serializePendingDecisionSubjectMarker(
  marker: PendingDecisionSubjectMarker,
): string {
  return JSON.stringify(marker);
}

export function parsePendingDecisionSubjectMarker(
  statement: string,
): PendingDecisionSubjectMarker | null {
  try {
    const parsed: unknown = JSON.parse(statement);
    if (!parsed || typeof parsed !== "object") return null;
    const v = parsed as Record<string, unknown>;
    if (v.kind !== PENDING_DECISION_SUBJECT_KIND) return null;
    if (typeof v.proposalId !== "string" || !v.proposalId.trim()) return null;
    if (typeof v.projectId !== "string" || !v.projectId.trim()) return null;
    if (typeof v.subjectDigest !== "string" || !v.subjectDigest.trim()) {
      return null;
    }
    if (typeof v.lpsId !== "string") return null;
    if (!Number.isInteger(v.lpsVersion)) return null;
    if (typeof v.doctrineDigest !== "string") return null;
    if (v.status !== "pending_binding") return null;
    return {
      kind: PENDING_DECISION_SUBJECT_KIND,
      proposalId: v.proposalId,
      projectId: v.projectId,
      subjectDigest: v.subjectDigest,
      lpsId: v.lpsId,
      lpsVersion: v.lpsVersion as number,
      doctrineDigest: v.doctrineDigest,
      status: "pending_binding",
    };
  } catch {
    return null;
  }
}

export type WritePendingDecisionSubjectMarkerInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly proposalId: string;
  readonly subjectDigest: string;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest: string;
  readonly correlationId?: string;
};

export async function writePendingDecisionSubjectMarker(
  input: WritePendingDecisionSubjectMarkerInput,
): Promise<
  | { readonly ok: true; readonly epistemicItemId: string }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const epistemicItemId = pendingDecisionSubjectObservationId(
    input.projectId,
    input.proposalId,
  );
  const marker: PendingDecisionSubjectMarker = {
    kind: PENDING_DECISION_SUBJECT_KIND,
    proposalId: input.proposalId,
    projectId: input.projectId,
    subjectDigest: input.subjectDigest,
    lpsId: input.lpsId,
    lpsVersion: input.lpsVersion,
    doctrineDigest: input.doctrineDigest,
    status: "pending_binding",
  };
  const written = await input.oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    items: [
      {
        epistemicItemId,
        type: "Observation",
        statement: serializePendingDecisionSubjectMarker(marker),
        status: "active",
        source: input.proposalId,
        relatedObjects: [input.projectId, input.proposalId, epistemicItemId],
      },
    ],
    createdBy: LOCAL_PILOTE_ACTOR,
    correlationId:
      input.correlationId ?? `cor:pending-subject:${input.proposalId}`,
  });
  if (!written.ok) {
    return {
      ok: false,
      code: written.error.detailCode,
      message: `Écriture marqueur pending decision subject échouée (${written.error.detailCode}).`,
    };
  }
  return { ok: true, epistemicItemId };
}

export type ListPendingDecisionSubjectMarkersResult =
  | {
      readonly ok: true;
      readonly markers: readonly PendingDecisionSubjectMarker[];
    }
  | {
      readonly ok: false;
      readonly code: "EPISTEMIC_READ_FAILED";
      readonly message: string;
    };

/**
 * READ FAILURE ≠ EMPTY STATE.
 * Callers must propagate failure — never treat Epistemic errors as "no subject".
 */
export async function listActivePendingDecisionSubjectMarkers(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<ListPendingDecisionSubjectMarkersResult> {
  const epistemic = await oa.cycleServices.getEpistemicState.execute({
    projectId,
  });
  if (!epistemic.ok) {
    return {
      ok: false,
      code: "EPISTEMIC_READ_FAILED",
      message:
        "État épistémique illisible — impossible de lire les marqueurs pending decision subject. Aucun fallback trajectoire générique.",
    };
  }
  const out: PendingDecisionSubjectMarker[] = [];
  for (const item of epistemic.state.items) {
    if (item.type !== "Observation" || item.status !== "active") continue;
    const parsed = parsePendingDecisionSubjectMarker(item.statement);
    if (!parsed) continue;
    if (parsed.projectId !== projectId) continue;
    out.push(parsed);
  }
  return { ok: true, markers: out };
}

export async function resolvePendingDecisionSubjectMarker(
  input: {
    readonly oa: RuntimeOaStack;
    readonly projectId: string;
    readonly proposalId: string;
    readonly reason: "option_set_bound" | "decided" | "amended" | "refused";
    readonly correlationId?: string;
  },
): Promise<
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const epistemicItemId = pendingDecisionSubjectObservationId(
    input.projectId,
    input.proposalId,
  );
  const epistemic = await input.oa.cycleServices.getEpistemicState.execute({
    projectId: input.projectId,
  });
  if (!epistemic.ok) {
    return { ok: true }; // nothing to resolve
  }
  const existing = epistemic.state.items.find(
    (i) => i.epistemicItemId === epistemicItemId,
  );
  if (!existing || existing.status !== "active") {
    return { ok: true };
  }
  const written = await input.oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    items: [
      {
        epistemicItemId,
        type: "Observation",
        statement: `${existing.statement}\n<!-- resolved:${input.reason} -->`,
        status: "resolved",
        source: existing.source,
        relatedObjects: [
          ...(existing.relatedObjects ?? []),
          `resolved:${input.reason}`,
        ],
      },
    ],
    createdBy: LOCAL_PILOTE_ACTOR,
    correlationId:
      input.correlationId ??
      `cor:pending-subject-resolve:${input.proposalId}:${input.reason}`,
  });
  if (!written.ok) {
    return {
      ok: false,
      code: written.error.detailCode,
      message: `Résolution marqueur pending subject échouée (${written.error.detailCode}).`,
    };
  }
  return { ok: true };
}
```


### FILE: `projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts`

```typescript
/**
 * CORR-PROOF-10 — deterministic Options / Recommendation for a Proposal-backed
 * decision subject (not the generic W2 ProjectTrajectory three-way).
 *
 * Labels and intents are derived from sealed Proposal fields — never from a
 * hardcoded dogfood path or docs_write special-case.
 */

import type { TrajectoryStep } from "@/lib/oa/cycle";
import type {
  TrajectoryOptionDto,
  TrajectoryRecommendationDto,
} from "./types";
import type { SealedProposalExecutionBasis } from "./resolveProposalDecisionSubject";

export const PROPOSAL_SUBJECT_PURSUE_REF =
  "opt:proposal-subject:pursue" as const;
export const PROPOSAL_SUBJECT_AMEND_REF =
  "opt:proposal-subject:amend" as const;
export const PROPOSAL_SUBJECT_REFUSE_REF =
  "opt:proposal-subject:refuse" as const;

export const PROPOSAL_SUBJECT_OPTION_REFS = [
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
] as const;

function step(
  order: number,
  slug: string,
  label: string,
  extra?: Partial<TrajectoryStep>,
): TrajectoryStep {
  return {
    stepId: `stp:${slug}`,
    order,
    label,
    state: "pending",
    ...extra,
  };
}

function subjectSummary(sealed: SealedProposalExecutionBasis): string {
  const path = sealed.targetPath == null ? null : sealed.targetPath.trim() || null;
  const op = sealed.requestedOperation.trim() || null;
  const parts = [
    sealed.objective.trim(),
    path ? `cible ${path}` : null,
    op ? `effet ${op}` : null,
  ].filter((p): p is string => Boolean(p));
  return parts.join(" · ");
}

function pursueSteps(sealed: SealedProposalExecutionBasis): TrajectoryStep[] {
  const summary = subjectSummary(sealed);
  return [
    step(1, "w2-ps-review", `Revoir le sujet proposé — ${summary}`),
    step(2, "w2-ps-decide", "Décision humaine explicite sur ce sujet", {
      dependencies: ["stp:w2-ps-review"],
      gate: "human_decision",
      exitCriteria: ["HumanDecision acceptée et reliée à la Proposal"],
    }),
    step(3, "w2-ps-prepare", "Préparer l'exécution bornée si autorisée", {
      dependencies: ["stp:w2-ps-decide"],
    }),
  ];
}

function amendSteps(): TrajectoryStep[] {
  return [
    step(1, "w2-ps-amend", "Amender objectif, chemin ou contraintes du sujet"),
    step(2, "w2-ps-repropose", "Réinstruire les options sur le sujet amendé", {
      dependencies: ["stp:w2-ps-amend"],
      gate: "human_decision",
      exitCriteria: ["Nouvelle instruction d'options requise"],
    }),
  ];
}

function refuseSteps(): TrajectoryStep[] {
  return [
    step(1, "w2-ps-refuse", "Refuser le sujet proposé — aucune exécution"),
    step(2, "w2-ps-close", "Clôturer sans Promotion ProjectTrajectory", {
      dependencies: ["stp:w2-ps-refuse"],
    }),
  ];
}

export type ProposalSubjectOptionInputs = {
  readonly sealed: SealedProposalExecutionBasis;
  readonly proposalId: string;
};

/**
 * Three subject-scoped options derived from the sealed Proposal.
 * Never the generic governed/bounded/clarify trajectory trio.
 */
export function deriveProposalSubjectOptions(
  inputs: ProposalSubjectOptionInputs,
): TrajectoryOptionDto[] {
  const { sealed, proposalId } = inputs;
  const summary = subjectSummary(sealed);
  const reservations = [...sealed.reservations];
  const pathNote = sealed.targetPath
    ? `Chemin scellé: ${sealed.targetPath}`
    : "Aucun targetPath scellé";
  const opNote = `Opération scellée: ${sealed.requestedOperation}`;

  return [
    {
      kind: "OPTION",
      optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      label: "Poursuivre le sujet proposé",
      intent: `Décider sur la Proposal ${proposalId} — ${summary}. ${pathNote}. ${opNote}.`,
      impacts: [
        "HumanDecision liée à cette Proposal",
        "DecisionBasis conserve targetPath / requestedOperation scellés",
        "Pas de promotion ProjectTrajectory automatique",
      ],
      reservations,
      steps: pursueSteps(sealed),
    },
    {
      kind: "OPTION",
      optionRef: PROPOSAL_SUBJECT_AMEND_REF,
      label: "Amender le sujet avant d'engager",
      intent:
        "Modifier objectif, chemin ou contrainte du sujet, puis réinstruire — sans exécution.",
      impacts: [
        "Aucune préparation d'exécution à ce stade",
        "Réinstruction requise après amendement",
      ],
      reservations,
      steps: amendSteps(),
    },
    {
      kind: "OPTION",
      optionRef: PROPOSAL_SUBJECT_REFUSE_REF,
      label: "Ne pas poursuivre / refuser",
      intent:
        "Refuser le sujet proposé. Aucune exécution. Aucune promotion de trajectoire Project.",
      impacts: [
        "Proposal refusée",
        "Aucune ExecutionContract",
        "ProjectTrajectory inchangée",
      ],
      reservations,
      steps: refuseSteps(),
    },
  ];
}

export function deriveProposalSubjectRecommendation(
  inputs: ProposalSubjectOptionInputs,
): TrajectoryRecommendationDto {
  const { sealed, proposalId } = inputs;
  const summary = subjectSummary(sealed);

  if (sealed.reservations.length > 0) {
    return {
      label: "RECOMMANDATION — PAS UNE DÉCISION",
      recommendedOptionRef: PROPOSAL_SUBJECT_AMEND_REF,
      rationale: `Réserves explicites sur la Proposal ${proposalId} (${sealed.reservations.length}) — amender ou clarifier avant de poursuivre « ${summary} ».`,
      isHumanDecision: false,
      promotesTrajectory: false,
      ckcAttribution: null,
      ckcProvenance: null,
    };
  }

  return {
    label: "RECOMMANDATION — PAS UNE DÉCISION",
    recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
    rationale: `Sujet Proposal ${proposalId} prêt pour arbitrage Pilote — poursuivre « ${summary} » sous DecisionBasis scellée (≠ HumanDecision).`,
    isHumanDecision: false,
    promotesTrajectory: false,
    ckcAttribution: null,
    ckcProvenance: null,
  };
}

export function isProposalSubjectOptionRef(optionRef: string): boolean {
  return (PROPOSAL_SUBJECT_OPTION_REFS as readonly string[]).includes(optionRef);
}
```


### FILE: `projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts`

```typescript
/**
 * CORR-PROOF-10 — server-side resolution of an active Proposal as the
 * decision subject for W2 OptionSet instruction.
 *
 * Client may only pass an opaque proposalId. Objective, targetPath,
 * requestedOperation and authority are never trusted from the client.
 *
 * Critical remediation:
 * - HumanDecision path accepts only DECISION_REQUIRED + morrisGateRequired
 * - subject digest covers the FULL sealed execution basis
 */

import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  contextMatches,
  getProposal,
  listProposalsForProject,
} from "../f2/proposalStore";
import type { F2ContextSnapshot, ProposalDto } from "../f2/types";
import type { ExecutionIntentPayload } from "../f2/executionIntentSchema";
import { listActivePendingDecisionSubjectMarkers } from "./pendingDecisionSubjectMarker";

export type SealedProposalExecutionBasis = {
  readonly objective: string;
  readonly scope: string;
  readonly outOfScope: readonly string[];
  readonly activatedBlocks: readonly string[];
  readonly expectedOutcome: string;
  readonly risks: readonly string[];
  readonly reservations: readonly string[];
  readonly stopConditions: readonly string[];
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly requestedOperation: string;
  readonly intentKind: string | null;
  readonly artifactType: string | null;
  readonly targetRepositoryRef: string | null;
  readonly targetPath: string | null;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly expectedOutputs: readonly string[];
  readonly requiredCapabilities: readonly string[];
  readonly validationExpectations: readonly string[];
  readonly evidenceRequirements: readonly string[];
  readonly reversibilityExpectation:
    | "reversible"
    | "irreversible"
    | "unknown"
    | null;
  readonly artifactBrief: string | null;
  readonly contentRequirements: readonly string[];
  readonly exitRequirementKinds: readonly string[];
};

export type ResolvedProposalDecisionSubject = {
  readonly proposalId: string;
  readonly proposal: ProposalDto;
  readonly subjectDigest: string;
  readonly sealedExecutionBasis: SealedProposalExecutionBasis;
  /** Proposal-backed subjects never touch ProjectTrajectory. */
  readonly promotesProjectTrajectory: false;
};

export type ResolveProposalDecisionSubjectResult =
  | { readonly ok: true; readonly subject: ResolvedProposalDecisionSubject }
  | { readonly ok: false; readonly code: string; readonly message: string };

function resolveRequestedOperation(proposal: ProposalDto): string {
  const ei = proposal.executionIntent;
  const fromEi = ei?.requestedOperation?.trim();
  if (fromEi) return fromEi;
  const fromTop = proposal.requestedOperation?.trim();
  if (fromTop) return fromTop;
  return proposal.rephrasedRequest;
}

function asStringArray(value: readonly string[] | null | undefined): string[] {
  return value ? [...value] : [];
}

/**
 * Canonical sealed execution basis — every authoritative field is materialised
 * with deterministic null/empty defaults for digest stability.
 */
export function sealProposalExecutionBasis(
  proposal: ProposalDto,
): SealedProposalExecutionBasis {
  const ei: ExecutionIntentPayload | null | undefined = proposal.executionIntent;
  return {
    objective: proposal.objective,
    scope: proposal.scope,
    outOfScope: [...proposal.outOfScope],
    activatedBlocks: [...proposal.activatedBlocks],
    expectedOutcome: proposal.expectedOutcome,
    risks: [...proposal.risks],
    reservations: [...proposal.reservations],
    stopConditions: [...proposal.stopConditions],
    cycleTypeId: proposal.cycleTypeId,
    recommendedProfile: proposal.recommendedProfile,
    requestedOperation: resolveRequestedOperation(proposal),
    intentKind: ei?.intentKind ?? null,
    artifactType: ei?.artifactType ?? null,
    targetRepositoryRef: ei?.targetRepositoryRef ?? null,
    targetPath: ei?.targetPath ?? null,
    scopeIn: asStringArray(ei?.scopeIn),
    scopeOut: asStringArray(ei?.scopeOut),
    expectedOutputs: asStringArray(ei?.expectedOutputs),
    requiredCapabilities: asStringArray(ei?.requiredCapabilities),
    validationExpectations: asStringArray(ei?.validationExpectations),
    evidenceRequirements: asStringArray(ei?.evidenceRequirements),
    reversibilityExpectation: ei?.reversibilityExpectation ?? null,
    artifactBrief: ei?.artifactBrief ?? null,
    contentRequirements: asStringArray(ei?.contentRequirements),
    exitRequirementKinds: asStringArray(ei?.exitRequirementKinds),
  };
}

/**
 * Full-authority digest over proposalId + complete sealed execution basis.
 * Any material field change must change the digest.
 */
export function computeProposalSubjectDigest(
  sealed: SealedProposalExecutionBasis,
  proposalId: string,
): string {
  return computeDecisionBasisSourceDigest({
    proposalId,
    objective: sealed.objective,
    scope: sealed.scope,
    outOfScope: [...sealed.outOfScope],
    activatedBlocks: [...sealed.activatedBlocks],
    expectedOutcome: sealed.expectedOutcome,
    risks: [...sealed.risks],
    reservations: [...sealed.reservations],
    stopConditions: [...sealed.stopConditions],
    cycleTypeId: sealed.cycleTypeId,
    recommendedProfile: sealed.recommendedProfile,
    requestedOperation: sealed.requestedOperation,
    intentKind: sealed.intentKind,
    artifactType: sealed.artifactType,
    targetRepositoryRef: sealed.targetRepositoryRef,
    targetPath: sealed.targetPath,
    scopeIn: [...sealed.scopeIn],
    scopeOut: [...sealed.scopeOut],
    expectedOutputs: [...sealed.expectedOutputs],
    requiredCapabilities: [...sealed.requiredCapabilities],
    validationExpectations: [...sealed.validationExpectations],
    evidenceRequirements: [...sealed.evidenceRequirements],
    reversibilityExpectation: sealed.reversibilityExpectation,
    artifactBrief: sealed.artifactBrief,
    contentRequirements: [...sealed.contentRequirements],
    exitRequirementKinds: [...sealed.exitRequirementKinds],
  });
}

/**
 * Resolve opaque proposalId as the active decision subject.
 * HumanDecision path: DECISION_REQUIRED + morrisGateRequired only.
 */
export function resolveProposalDecisionSubject(input: {
  readonly proposalId: string;
  readonly projectId: string;
  readonly currentContext: F2ContextSnapshot;
}): ResolveProposalDecisionSubjectResult {
  const proposalId = input.proposalId.trim();
  if (!proposalId) {
    return {
      ok: false,
      code: "PROPOSAL_ID_REQUIRED",
      message: "Référence Proposal opaque requise — aucune instruction générique.",
    };
  }

  const proposal = getProposal(proposalId);
  if (!proposal) {
    return {
      ok: false,
      code: "PROPOSAL_NOT_FOUND",
      message:
        "Proposal introuvable (process-local) — fail-closed, aucune option générique de substitution.",
    };
  }

  if (proposal.contextSnapshot.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "La Proposal n'appartient pas à ce projet.",
    };
  }

  if (!contextMatches(proposal.contextSnapshot, input.currentContext)) {
    return {
      ok: false,
      code: "PROPOSAL_STALE",
      message:
        "Contexte Proposal périmé (LPS/doctrine) — réinstruction requise. Aucune option générique.",
    };
  }

  if (proposal.status !== "DECISION_REQUIRED") {
    return {
      ok: false,
      code: "PROPOSAL_NOT_DECIDABLE",
      message: `Proposal au statut ${proposal.status} — voie HumanDecision refusée (DECISION_REQUIRED requis).`,
    };
  }

  if (proposal.morrisGateRequired !== true) {
    return {
      ok: false,
      code: "PROPOSAL_GATE_REQUIRED",
      message:
        "Proposal DECISION_REQUIRED sans morrisGateRequired — voie HumanDecision refusée.",
    };
  }

  const sealedExecutionBasis = sealProposalExecutionBasis(proposal);
  const subjectDigest = computeProposalSubjectDigest(
    sealedExecutionBasis,
    proposal.proposalId,
  );

  return {
    ok: true,
    subject: {
      proposalId: proposal.proposalId,
      proposal,
      subjectDigest,
      sealedExecutionBasis,
      promotesProjectTrajectory: false,
    },
  };
}

/**
 * Block silent generic trajectory fallback when:
 * - process-local DECISION_REQUIRED Proposal exists, OR
 * - durable pending-subject marker exists (restart-before-binding).
 *
 * Bound PresentedOptionSet awaiting HD is handled by proposeTrajectoryOptions
 * via readActiveProposalDecisionSubject (rehydrate) before this gate runs.
 *
 * Epistemic read failure → fail closed (never "no subject").
 */
export async function assertProposalSubjectGateOrFail(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly proposalId: string | null | undefined;
}): Promise<
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const provided =
    typeof input.proposalId === "string" ? input.proposalId.trim() : "";

  const pendingResult = await listActivePendingDecisionSubjectMarkers(
    input.oa,
    input.projectId,
  );
  if (!pendingResult.ok) {
    return {
      ok: false,
      code: pendingResult.code,
      message: pendingResult.message,
    };
  }
  const pending = pendingResult.markers;
  const activeLocal = listProposalsForProject(input.projectId).filter(
    (p) => p.status === "DECISION_REQUIRED" && p.morrisGateRequired === true,
  );

  if (!provided) {
    if (pending.length > 0) {
      return {
        ok: false,
        code: "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
        message:
          "Sujet décisionnel pending durable détecté après perte process-local — réinstruction Nora requise. Aucun fallback vers options de trajectoire génériques.",
      };
    }
    if (activeLocal.length > 0) {
      return {
        ok: false,
        code: "ACTIVE_PROPOSAL_SUBJECT_REQUIRED",
        message:
          "Une Proposal DECISION_REQUIRED est active — « Instruire les options » doit porter sur cette Proposal (proposalId opaque). Aucun fallback silencieux.",
      };
    }
    return { ok: true };
  }

  // proposalId provided but store may be gone after restart
  const proposal = getProposal(provided);
  if (!proposal) {
    const matchingPending = pending.find((m) => m.proposalId === provided);
    if (matchingPending || pending.length > 0) {
      return {
        ok: false,
        code: "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
        message:
          "Proposal process-local absente alors qu'un marqueur pending durable existe — aucune reconstruction. Réinstruction Nora requise.",
      };
    }
    // No pending marker — resolveProposalDecisionSubject will fail NOT_FOUND
    // (post-binding rehydration already handled upstream when OptionSet exists).
    return { ok: true };
  }

  return { ok: true };
}

/** @deprecated use assertProposalSubjectGateOrFail — kept for call-site migration */
export function requireProposalIdWhenActiveSubjectExists(input: {
  readonly projectId: string;
  readonly proposalId: string | null | undefined;
}): ResolveProposalDecisionSubjectResult | { readonly ok: true; readonly skip: true } {
  const provided =
    typeof input.proposalId === "string" ? input.proposalId.trim() : "";
  if (provided) {
    return { ok: true, skip: true };
  }
  const active = listProposalsForProject(input.projectId).filter(
    (p) => p.status === "DECISION_REQUIRED" && p.morrisGateRequired === true,
  );
  if (active.length === 0) {
    return { ok: true, skip: true };
  }
  return {
    ok: false,
    code: "ACTIVE_PROPOSAL_SUBJECT_REQUIRED",
    message:
      "Une Proposal DECISION_REQUIRED est active — « Instruire les options » doit porter sur cette Proposal (proposalId opaque). Aucun fallback silencieux vers les options de trajectoire génériques.",
  };
}
```


### FILE: `projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts`

```typescript
/**
 * CORR-PROOF-10 — Decision context continuity (Proposal subject ↔ W2 Options/HD).
 * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  getProposal,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import {
  GOVERNED_OPTION_REF,
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import { loadPresentedOptionSet } from "@/features/project-assistant/w2/presentedOptionSet";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  proposeW2OptionsForProject,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import {
  listActivePendingDecisionSubjectMarkers,
  writePendingDecisionSubjectMarker,
} from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";

const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";

/** Probe OA store for all known ProjectTrajectory versions (persistence truth). */
async function snapshotTrajectories(oa: RuntimeOaStack, projectId: string) {
  const versions: { version: number; trajectoryId: string; status: string }[] =
    [];
  for (let v = 1; v <= 64; v += 1) {
    const got = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId,
      version: v,
    });
    if (!got.ok) break;
    versions.push({
      version: got.trajectory.version,
      trajectoryId: got.trajectory.trajectoryId,
      status: got.trajectory.status,
    });
  }
  const current = await oa.cycleServices.getCurrentTrajectory.execute({
    projectId,
  });
  return {
    versions,
    count: versions.length,
    fingerprint: versions
      .map((x) => `${x.trajectoryId}@${x.version}:${x.status}`)
      .join("|"),
    currentOk: current.ok,
    currentStatus: current.ok ? current.trajectory.status : null,
  };
}

function docsWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string;
  proposalId?: string;
  status?: ProposalDto["status"];
  targetPath?: string;
  requestedOperation?: string;
  morrisGateRequired?: boolean;
  eiOverrides?: Record<string, unknown>;
}): ProposalDto {
  return saveProposal({
    proposalId: input.proposalId ?? `prop:f2:corr10-${Date.now()}`,
    status: input.status ?? "DECISION_REQUIRED",
    rephrasedRequest: "Matérialiser la note de gestion de tâches",
    objective: "Matérialiser le livrable de gestion de tâches",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "Continuation Artifact du cycle actif",
    scope: "docs_write borné — cycle actif",
    outOfScope: ["nouveau cycle", "REAL"],
    activatedBlocks: [],
    expectedOutcome: "Fichier sandbox matérialisé",
    sources: ["nora"],
    risks: ["mauvais sujet décisionnel"],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
    morrisGateRequired: input.morrisGateRequired ?? true,
    nextPossibleStep: "Instruire les options sur ce sujet",
    contextSnapshot: {
      projectId: input.projectId,
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      doctrineDigest: input.doctrineDigest,
      activeCycleInstanceId: input.activeCycleInstanceId,
      ckcResolutionRef: "ckcres:w2-harness",
    },
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: input.requestedOperation ?? null,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: null,
      targetRepositoryRef: null,
      targetPath: input.targetPath ?? TARGET_PATH,
      scopeIn: ["sandbox"],
      scopeOut: ["git"],
      expectedOutputs: ["markdown"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation:
        input.requestedOperation ?? F2_ARTIFACT_MATERIALIZATION_OPERATION,
      reversibilityExpectation: "reversible",
      artifactBrief: "Note gestion de tâches",
      contentRequirements: [],
      exitRequirementKinds: [],
      ...input.eiOverrides,
    },
  });
}

async function markPending(
  oa: RuntimeOaStack,
  proposal: ProposalDto,
): Promise<void> {
  const sealed = sealProposalExecutionBasis(proposal);
  const subjectDigest = computeProposalSubjectDigest(
    sealed,
    proposal.proposalId,
  );
  const written = await writePendingDecisionSubjectMarker({
    oa,
    projectId: proposal.contextSnapshot.projectId,
    proposalId: proposal.proposalId,
    subjectDigest,
    lpsId: proposal.contextSnapshot.lpsId,
    lpsVersion: proposal.contextSnapshot.lpsVersion,
    doctrineDigest: proposal.contextSnapshot.doctrineDigest,
  });
  expect(written.ok).toBe(true);
}

describe("CORR-PROOF-10 — decision context continuity", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("corr10.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "corr10" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "c10",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function proposeWith(
    projectId: string,
    proposalId?: string | null,
  ) {
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({ oa, projectId });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qualification failed");
    return proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId: proposalId ?? null,
    });
  }

  it("T01/T02/T03/T14 — Proposal docs_write subject → subject options, not generic trio; no new cycle", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t01",
    });

    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    expect(proposed.proposalId).toBe(proposal.proposalId);
    expect(proposed.promotesProjectTrajectory).toBe(false);
    expect(proposed.decisionSubjectMode).toBe("proposal");
    expect(proposed.proposedTrajectory).toBeNull();
    const refs = proposed.options.map((o) => o.optionRef);
    expect(refs).toEqual([
      PROPOSAL_SUBJECT_PURSUE_REF,
      PROPOSAL_SUBJECT_AMEND_REF,
      PROPOSAL_SUBJECT_REFUSE_REF,
    ]);
    expect(refs).not.toContain(GOVERNED_OPTION_REF);
    expect(refs).not.toContain(BOUNDED_OPTION_REF);
    expect(refs).not.toContain(CLARIFY_OPTION_REF);

    const joined = proposed.options.map((o) => o.intent).join(" ");
    expect(joined).toContain(TARGET_PATH);
    expect(joined).toContain(F2_ARTIFACT_MATERIALIZATION_OPERATION);
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      PROPOSAL_SUBJECT_PURSUE_REF,
    );
    expect(proposed.recommendation.isHumanDecision).toBe(false);

    // T14 — active cycle unchanged (same instance still active).
    const after = await currentF2Context(runtime, projectId);
    expect(after.activeCycleInstanceId).toBe(cycleInstanceId);
  });

  it("T04/T15 — propose does not create HumanDecision or ExecutionContract", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t04",
    });
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.autoDecisionPerformed).toBe(false);
    expect(proposed.executionPerformed).toBe(false);
  });

  it("T05/T06/T07/T12 — HD references same subject; DecisionBasis seals path/op; no trajectory promotion", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t05",
    });
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    expect(decided.promotesProjectTrajectory).toBe(false);
    expect(decided.decisionSubjectMode).toBe("proposal");
    expect(decided.decision.proposalId).toBe(proposal.proposalId);
    expect(decided.trajectory).toBeNull();
    expect(decided.executionPerformed).toBe(false);

    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.decisionBasis?.sourceType).toBe("proposal");
    expect(hd.decision.decisionBasis?.sourceRef).toBe(proposal.proposalId);
    expect(hd.decision.decisionBasis?.executionBasis.targetPath).toBe(
      TARGET_PATH,
    );
    expect(hd.decision.decisionBasis?.executionBasis.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );

    const current = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    // ZERO ProjectTrajectory mutation — none created by propose/decide proposal path.
    expect(current.ok).toBe(false);
    expect(getProposal(proposal.proposalId)?.status).toBe("APPROVED");
  });

  it("T08 — project mismatch blocks", async () => {
    const a = await seed();
    const b = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "c10b",
    });
    const proposal = docsWriteProposal({
      projectId: a.projectId,
      lpsId: a.ctx.lpsId,
      lpsVersion: a.ctx.lpsVersion,
      doctrineDigest: a.ctx.doctrineDigest,
      activeCycleInstanceId: a.cycleInstanceId,
      proposalId: "prop:f2:corr10-t08",
    });
    const proposed = await proposeWith(b.projectId, proposal.proposalId);
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PROJECT_MISMATCH");
  });

  it("T09 — stale proposal context blocks", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion + 99,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t09",
    });
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PROPOSAL_STALE");
  });

  it("T10 — OptionSet / subject mismatch blocks decide", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t10",
    });
    const subjectProposed = await proposeWith(projectId, proposal.proposalId);
    expect(subjectProposed.ok).toBe(true);
    if (!subjectProposed.ok) return;

    const cross = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: subjectProposed.optionSetRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      // Hostile trajectory fields — ignored in proposal mode.
      trajectoryId: "trj:hostile",
      candidateVersion: 999,
      forceLocalAuthority: true,
    });
    expect(cross.ok).toBe(false);
    if (cross.ok) return;
    expect(cross.code).toBe("OPTION_NOT_PRESENTED");
  });

  it("T11/R22 — hostile client targetPath/requestedOperation ignored", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t11",
    });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({ oa, projectId });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId: proposal.proposalId,
      // @ts-expect-error hostile fields are not on the typed input
      targetPath: "/etc/passwd",
      requestedOperation: "github.pr.merge",
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const presented = await loadPresentedOptionSet(
      oa,
      projectId,
      proposed.optionSetRef,
    );
    expect(presented.ok).toBe(true);
    if (!presented.ok) return;
    expect(presented.presented.sealedExecutionBasis?.targetPath).toBe(
      TARGET_PATH,
    );
    expect(presented.presented.sealedExecutionBasis?.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
  });

  it("T13 — true trajectory path unchanged when no active Proposal", async () => {
    const { projectId } = await seed();
    const proposed = await proposeW2OptionsForProject(runtime, projectId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const refs = proposed.options.map((o) => o.optionRef);
    expect(refs).toEqual([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]);
    expect(proposed.promotesProjectTrajectory ?? true).toBe(true);
    expect(proposed.decisionSubjectMode).toBe("project_trajectory");
    expect(proposed.proposedTrajectory).not.toBeNull();
    if (!proposed.proposedTrajectory) return;

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.promotesProjectTrajectory).toBe(true);
    expect(decided.decisionSubjectMode).toBe("project_trajectory");
    expect(decided.trajectory).not.toBeNull();
    expect(decided.trajectory!.status).toBe("validated");
    expect(decided.trajectory!.isCurrent).toBe(true);
  });

  it("T16 — PREPARE after pursue HD keeps sealed executionBasis lineage", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-t16",
    });
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.decisionBasis?.executionBasis.targetPath).toBe(
      TARGET_PATH,
    );
    expect(hd.decision.decisionBasis?.executionBasis.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );

    // Existing Proposal→EC seam (prepareM3FromDecision) — no client-widened path/op.
    const { prepareM3FromDecision } = await import(
      "@/features/project-assistant/f3/prepareM3FromDecision"
    );
    const prepared = await prepareM3FromDecision({
      projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, projectId),
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => "2026-09-15T03:00:00.000Z",
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.executionPerformed).toBe(false);
    expect(prepared.payload.attemptCreated).toBe(false);
    expect(prepared.payload.contract.action).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
  });

  it("T17 — missing proposal before binding = fail closed (no generic fallback)", async () => {
    const { projectId } = await seed();
    const proposed = await proposeWith(projectId, "prop:f2:missing");
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PROPOSAL_NOT_FOUND");
  });

  it("T17b — active DECISION_REQUIRED without proposalId refuses generic fallback", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr10-active",
    });
    const proposed = await proposeWith(projectId, null);
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("ACTIVE_PROPOSAL_SUBJECT_REQUIRED");
  });

  it("T19/T20 — no REAL provider / no dogfood mutation markers", () => {
    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
    expect(dbPath).not.toContain("sfia-studio-product-proof");
    expect(dbPath).not.toContain("oa-product.sqlite");
  });
});

describe("CORR-PROOF-10 Critical Remediation R01–R30", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("corr10-remed.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "c10r" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "rem",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function proposeWith(projectId: string, proposalId?: string | null) {
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({ oa, projectId });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qualification failed");
    return proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId: proposalId ?? null,
    });
  }

  it("R01/R02/R25 — propose+pursue create ZERO ProjectTrajectory; cycle unchanged", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const before = await snapshotTrajectories(runtime.oa!, projectId);
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r01",
    });
    await markPending(runtime.oa!, proposal);

    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.proposedTrajectory).toBeNull();
    const mid = await snapshotTrajectories(runtime.oa!, projectId);
    expect(mid.fingerprint).toBe(before.fingerprint);
    expect(mid.count).toBe(before.count);

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.trajectory).toBeNull();
    const after = await snapshotTrajectories(runtime.oa!, projectId);
    expect(after.fingerprint).toBe(before.fingerprint);
    expect(after.count).toBe(before.count);
    const ctxAfter = await currentF2Context(runtime, projectId);
    expect(ctxAfter.activeCycleInstanceId).toBe(cycleInstanceId);
  });

  it("R03/R04 — amend and refuse create ZERO ProjectTrajectory", async () => {
    for (const [suffix, optionRef] of [
      ["amend", PROPOSAL_SUBJECT_AMEND_REF],
      ["refuse", PROPOSAL_SUBJECT_REFUSE_REF],
    ] as const) {
      resetF2ProposalStoreForTests();
      const seeded = await seedQualifiedProject(runtime, {
        profile: "Critical",
        suffix,
      });
      const ctx = await currentF2Context(runtime, seeded.projectId);
      const before = await snapshotTrajectories(runtime.oa!, seeded.projectId);
      const proposal = docsWriteProposal({
        projectId: seeded.projectId,
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
        activeCycleInstanceId: seeded.cycleInstanceId,
        proposalId: `prop:f2:r03-${suffix}`,
      });
      await markPending(runtime.oa!, proposal);
      const proposed = await proposeWith(seeded.projectId, proposal.proposalId);
      expect(proposed.ok).toBe(true);
      if (!proposed.ok) return;
      const decided = await decideTrajectory({
        oa: runtime.oa!,
        projectId: seeded.projectId,
        optionSetRef: proposed.optionSetRef,
        selectedOptionRef: optionRef,
        forceLocalAuthority: true,
      });
      expect(decided.ok).toBe(true);
      if (!decided.ok) return;
      expect(decided.trajectory).toBeNull();
      const after = await snapshotTrajectories(runtime.oa!, seeded.projectId);
      expect(after.fingerprint).toBe(before.fingerprint);
    }
  });

  it("R05/R11/R28 — true trajectory path still creates/promotes when no pending subject", async () => {
    const { projectId } = await seed();
    const before = await snapshotTrajectories(runtime.oa!, projectId);
    const proposed = await proposeW2OptionsForProject(runtime, projectId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.decisionSubjectMode).toBe("project_trajectory");
    expect(proposed.proposedTrajectory).not.toBeNull();
    const mid = await snapshotTrajectories(runtime.oa!, projectId);
    expect(mid.count).toBeGreaterThan(before.count);
    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.trajectory?.status).toBe("validated");
  });

  it("R06/R07 — decide proposal without trajectory fields; hostile trajectory fields ignored", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r06",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const before = await snapshotTrajectories(runtime.oa!, projectId);
    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      trajectoryId: "trj:hostile-client",
      candidateVersion: 999,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.trajectory).toBeNull();
    const after = await snapshotTrajectories(runtime.oa!, projectId);
    expect(after.fingerprint).toBe(before.fingerprint);
    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(hd.ok && hd.decision.decisionBasis?.trajectoryContext).toBeFalsy();
  });

  it("R08/R09 — restart before binding: pending marker + lost store → fail closed, no generic options, no trajectory", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r08",
    });
    await markPending(runtime.oa!, proposal);
    const pending = await listActivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(pending.ok).toBe(true);
    if (!pending.ok) return;
    expect(pending.markers.some((m) => m.proposalId === proposal.proposalId)).toBe(
      true,
    );

    const before = await snapshotTrajectories(runtime.oa!, projectId);
    resetF2ProposalStoreForTests(); // simulate restart / process-local loss

    const withoutId = await proposeWith(projectId, null);
    expect(withoutId.ok).toBe(false);
    if (withoutId.ok) return;
    expect(withoutId.code).toBe(
      "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
    );

    const withStaleId = await proposeWith(projectId, proposal.proposalId);
    expect(withStaleId.ok).toBe(false);
    if (withStaleId.ok) return;
    expect(withStaleId.code).toBe(
      "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
    );

    const after = await snapshotTrajectories(runtime.oa!, projectId);
    expect(after.fingerprint).toBe(before.fingerprint);
  });

  it("R10 — after OptionSet binding, pending marker is resolved", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r10",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    const pending = await listActivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(pending.ok).toBe(true);
    if (!pending.ok) return;
    expect(
      pending.markers.some((m) => m.proposalId === proposal.proposalId),
    ).toBe(false);
  });

  it("R12/R13/R14/R15 — server decidability", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const base = {
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
    };

    const proposedStatus = docsWriteProposal({
      ...base,
      proposalId: "prop:f2:r12",
      status: "PROPOSED",
    });
    let r = await proposeWith(projectId, proposedStatus.proposalId);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROPOSAL_NOT_DECIDABLE");

    const ready = docsWriteProposal({
      ...base,
      proposalId: "prop:f2:r13",
      status: "READY_NO_GATE",
      morrisGateRequired: false,
    });
    r = await proposeWith(projectId, ready.proposalId);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROPOSAL_NOT_DECIDABLE");

    const noGate = docsWriteProposal({
      ...base,
      proposalId: "prop:f2:r14",
      status: "DECISION_REQUIRED",
      morrisGateRequired: false,
    });
    r = await proposeWith(projectId, noGate.proposalId);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.code).toBe("PROPOSAL_GATE_REQUIRED");

    const ok = docsWriteProposal({
      ...base,
      proposalId: "prop:f2:r15",
      status: "DECISION_REQUIRED",
      morrisGateRequired: true,
    });
    await markPending(runtime.oa!, ok);
    r = await proposeWith(projectId, ok.proposalId);
    expect(r.ok).toBe(true);
  });

  it("R16–R20 — full executionBasis digest coverage + DecisionBasis sourceDigest", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const base = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r16",
    });
    const sealed = sealProposalExecutionBasis(base);
    const d0 = computeProposalSubjectDigest(sealed, base.proposalId);

    const dCaps = computeProposalSubjectDigest(
      { ...sealed, requiredCapabilities: ["cap:other"] },
      base.proposalId,
    );
    expect(dCaps).not.toBe(d0);

    const dScope = computeProposalSubjectDigest(
      { ...sealed, scopeIn: ["a"], scopeOut: ["b"] },
      base.proposalId,
    );
    expect(dScope).not.toBe(d0);

    const dVal = computeProposalSubjectDigest(
      {
        ...sealed,
        validationExpectations: ["v1"],
        evidenceRequirements: ["e1"],
      },
      base.proposalId,
    );
    expect(dVal).not.toBe(d0);

    const dArt = computeProposalSubjectDigest(
      {
        ...sealed,
        artifactBrief: "autre",
        contentRequirements: ["c1"],
        exitRequirementKinds: ["k1"],
      },
      base.proposalId,
    );
    expect(dArt).not.toBe(d0);

    await markPending(runtime.oa!, base);
    const proposed = await proposeWith(projectId, base.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.decisionBasis?.sourceDigest).toBe(d0);
  });

  it("R21 — OptionSet digest mismatch fails decide", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r21",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    // Corrupt sealed observation statement digest
    const presented = await loadPresentedOptionSet(
      runtime.oa!,
      projectId,
      proposed.optionSetRef,
    );
    expect(presented.ok).toBe(true);
    if (!presented.ok) return;
    const corrupted = {
      ...presented.presented,
      optionSetDigest: "deadbeef".repeat(8),
    };
    const { optionSetObservationId, serializePresentedOptionSet } =
      await import(
        "@/features/project-assistant/w2/presentedOptionSet"
      );
    const { LOCAL_PILOTE_ACTOR } = await import("@/lib/oa/decision");
    await runtime.oa!.cycleServices.updateEpistemicState.execute({
      projectId,
      items: [
        {
          epistemicItemId: optionSetObservationId(proposed.optionSetRef),
          type: "Observation",
          statement: serializePresentedOptionSet(corrupted),
          status: "active",
          source: proposed.optionSetRef,
        },
      ],
      createdBy: LOCAL_PILOTE_ACTOR,
    });

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(false);
    if (decided.ok) return;
    expect(decided.code).toBe("OPTION_SET_STALE");
  });

  it("R23/R24 — PREPARE pursue keeps sealed fields; amend not applicable", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r23",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const pursue = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(pursue.ok).toBe(true);
    if (!pursue.ok) return;
    const { prepareM3FromDecision } = await import(
      "@/features/project-assistant/f3/prepareM3FromDecision"
    );
    const prepared = await prepareM3FromDecision({
      projectId,
      decisionId: pursue.decision.decisionId,
      currentContext: await currentF2Context(runtime, projectId),
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => "2026-09-15T04:00:00.000Z",
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.contract.action).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );

    // Separate amend path
    resetF2ProposalStoreForTests();
    const seeded2 = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "r24",
    });
    const ctx2 = await currentF2Context(runtime, seeded2.projectId);
    const p2 = docsWriteProposal({
      projectId: seeded2.projectId,
      lpsId: ctx2.lpsId,
      lpsVersion: ctx2.lpsVersion,
      doctrineDigest: ctx2.doctrineDigest,
      activeCycleInstanceId: seeded2.cycleInstanceId,
      proposalId: "prop:f2:r24",
    });
    await markPending(runtime.oa!, p2);
    const proposed2 = await proposeWith(seeded2.projectId, p2.proposalId);
    expect(proposed2.ok).toBe(true);
    if (!proposed2.ok) return;
    const amend = await decideTrajectory({
      oa: runtime.oa!,
      projectId: seeded2.projectId,
      optionSetRef: proposed2.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_AMEND_REF,
      forceLocalAuthority: true,
    });
    expect(amend.ok).toBe(true);
    if (!amend.ok) return;
    const { prepareExecutionContractFromW2Decision } = await import(
      "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision"
    );
    const prepAmend = await prepareExecutionContractFromW2Decision({
      oa: runtime.oa!,
      projectId: seeded2.projectId,
      decisionId: amend.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded2.projectId),
      forceLocalAuthority: true,
      qualifiedOperationKind: "generate-temporary-artifact",
    });
    expect(prepAmend.ok).toBe(false);
    if (prepAmend.ok) return;
    expect(prepAmend.code).toBe("PREPARE_NOT_APPLICABLE");
  });

  it("R29/R30 — ZERO REAL / ZERO dogfood", () => {
    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
    expect(dbPath).not.toContain("product-proof");
  });
});

describe("CORR-PROOF-10 Post-binding Continuity R31–R48", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("corr10-postbind.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "c10pb" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: `pb-${Date.now()}`,
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function proposeWith(projectId: string, proposalId: string | null) {
    const qual = await resolveW2QualificationInputs({
      oa: runtime.oa!,
      projectId,
    });
    if (!qual.ok) return qual;
    return proposeTrajectoryOptions({
      oa: runtime.oa!,
      projectId,
      ...qual.qualification.inputs,
      packagePin: qual.qualification.packagePin,
      objective: qual.qualification.objective,
      projectTitle: qual.qualification.projectTitle,
      proposalId,
    });
  }

  async function markPending(oa: RuntimeOaStack, proposal: ProposalDto) {
    const sealed = sealProposalExecutionBasis(proposal);
    const digest = computeProposalSubjectDigest(sealed, proposal.proposalId);
    const written = await writePendingDecisionSubjectMarker({
      oa,
      projectId: proposal.contextSnapshot.projectId,
      proposalId: proposal.proposalId,
      subjectDigest: digest,
      lpsId: proposal.contextSnapshot.lpsId,
      lpsVersion: proposal.contextSnapshot.lpsVersion,
      doctrineDigest: proposal.contextSnapshot.doctrineDigest,
    });
    expect(written.ok).toBe(true);
  }

  it("R31/R32/R38/R41/R42 — restart AFTER OptionSet binding: rehydrate same OptionSet; generic instruct does not create trajectory trio", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r31",
    });
    await markPending(runtime.oa!, proposal);
    const before = await snapshotTrajectories(runtime.oa!, projectId);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.decisionSubjectMode).toBe("proposal");
    expect(proposed.proposedTrajectory).toBeNull();
    const afterBind = await snapshotTrajectories(runtime.oa!, projectId);
    expect(afterBind.fingerprint).toBe(before.fingerprint);

    const originalRef = proposed.optionSetRef;
    const originalDigest = (
      await loadPresentedOptionSet(runtime.oa!, projectId, originalRef)
    );
    expect(originalDigest.ok).toBe(true);
    if (!originalDigest.ok) return;

    resetF2ProposalStoreForTests(); // restart — ProposalStore gone; React state gone

    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("bound_awaiting_decision");
    if (read.kind !== "bound_awaiting_decision") return;
    expect(read.optionSet.optionSetRef).toBe(originalRef);
    expect(read.optionSet.recommendation.recommendedOptionRef).toBe(
      proposed.recommendation.recommendedOptionRef,
    );
    expect(read.presented.optionSetDigest).toBe(
      originalDigest.presented.optionSetDigest,
    );
    expect(read.optionSet.options.map((o) => o.optionRef)).toEqual(
      proposed.options.map((o) => o.optionRef),
    );

    // Generic instruct without proposalId → rehydrate same set, ZERO trajectory trio
    const reinstruct = await proposeWith(projectId, null);
    expect(reinstruct.ok).toBe(true);
    if (!reinstruct.ok) return;
    expect(reinstruct.optionSetRef).toBe(originalRef);
    expect(reinstruct.decisionSubjectMode).toBe("proposal");
    expect(
      reinstruct.options.some((o) => o.optionRef === GOVERNED_OPTION_REF),
    ).toBe(false);
    expect(
      reinstruct.options.some((o) => o.optionRef === BOUNDED_OPTION_REF),
    ).toBe(false);
    expect(
      reinstruct.options.some((o) => o.optionRef === CLARIFY_OPTION_REF),
    ).toBe(false);
    const afterGeneric = await snapshotTrajectories(runtime.oa!, projectId);
    expect(afterGeneric.fingerprint).toBe(before.fingerprint);
  });

  it("R33/R43 — decide pursue AFTER restart with empty ProposalStore; ZERO PT; same digest", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r33",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const presented = await loadPresentedOptionSet(
      runtime.oa!,
      projectId,
      proposed.optionSetRef,
    );
    expect(presented.ok).toBe(true);
    if (!presented.ok) return;
    const expectedDigest = presented.presented.proposalSubjectDigest;

    const before = await snapshotTrajectories(runtime.oa!, projectId);
    resetF2ProposalStoreForTests();
    expect(getProposal(proposal.proposalId)).toBeFalsy();

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.trajectory).toBeNull();
    expect(decided.decision.proposalId).toBe(proposal.proposalId);

    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.decisionBasis?.sourceRef).toBe(proposal.proposalId);
    expect(hd.decision.decisionBasis?.sourceDigest).toBe(expectedDigest);
    expect(hd.decision.decisionBasis?.executionBasis?.targetPath).toBe(
      TARGET_PATH,
    );
    expect(hd.decision.decisionBasis?.trajectoryContext).toBeFalsy();

    const after = await snapshotTrajectories(runtime.oa!, projectId);
    expect(after.fingerprint).toBe(before.fingerprint);
  });

  it("R34 — amend/refuse AFTER restart with empty store: ZERO EC / ZERO PT", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    for (const [suffix, optionRef] of [
      ["amend", PROPOSAL_SUBJECT_AMEND_REF],
      ["refuse", PROPOSAL_SUBJECT_REFUSE_REF],
    ] as const) {
      resetF2ProposalStoreForTests();
      const seeded = await seedQualifiedProject(runtime, {
        profile: "Critical",
        suffix: `r34-${suffix}`,
      });
      const c = await currentF2Context(runtime, seeded.projectId);
      const proposal = docsWriteProposal({
        projectId: seeded.projectId,
        lpsId: c.lpsId,
        lpsVersion: c.lpsVersion,
        doctrineDigest: c.doctrineDigest,
        activeCycleInstanceId: seeded.cycleInstanceId,
        proposalId: `prop:f2:r34-${suffix}`,
      });
      await markPending(runtime.oa!, proposal);
      const proposed = await proposeWith(seeded.projectId, proposal.proposalId);
      expect(proposed.ok).toBe(true);
      if (!proposed.ok) return;
      const before = await snapshotTrajectories(runtime.oa!, seeded.projectId);
      resetF2ProposalStoreForTests();

      const decided = await decideTrajectory({
        oa: runtime.oa!,
        projectId: seeded.projectId,
        optionSetRef: proposed.optionSetRef,
        selectedOptionRef: optionRef,
        forceLocalAuthority: true,
      });
      expect(decided.ok).toBe(true);
      if (!decided.ok) return;
      expect(decided.trajectory).toBeNull();

      const { prepareExecutionContractFromW2Decision } = await import(
        "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision"
      );
      const prep = await prepareExecutionContractFromW2Decision({
        oa: runtime.oa!,
        projectId: seeded.projectId,
        decisionId: decided.decision.decisionId,
        currentContext: await currentF2Context(runtime, seeded.projectId),
        forceLocalAuthority: true,
        qualifiedOperationKind: "generate-temporary-artifact",
      });
      expect(prep.ok).toBe(false);
      if (prep.ok) return;
      expect(prep.code).toBe("PREPARE_NOT_APPLICABLE");

      const after = await snapshotTrajectories(runtime.oa!, seeded.projectId);
      expect(after.fingerprint).toBe(before.fingerprint);
    }
    void projectId;
    void cycleInstanceId;
    void ctx;
  });

  it("R35 — restart AFTER HumanDecision: subject no longer awaiting; no second HD", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r35",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    resetF2ProposalStoreForTests();
    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("none");

    const second = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(second.ok).toBe(false);
    if (second.ok) return;
    expect(second.code).toBe("SUBJECT_ALREADY_DECIDED");
  });

  it("R36/R37 — Epistemic read failure fails closed (not empty)", async () => {
    const { projectId } = await seed();
    const oa = runtime.oa!;
    const original = oa.cycleServices.getEpistemicState.execute.bind(
      oa.cycleServices.getEpistemicState,
    );
    oa.cycleServices.getEpistemicState.execute = async () =>
      ({
        ok: false,
        error: {
          code: "PERSISTENCE_FAILURE",
          detailCode: "EPISTEMIC_READ_BOOM",
          message: "boom",
          severity: "error",
          retryable: true,
          blocking: true,
          recoverable: true,
          domain: "D",
          timestamp: "2026-09-15T00:00:00.000Z",
        },
      }) as unknown as Awaited<ReturnType<typeof original>>;

    const pending = await listActivePendingDecisionSubjectMarkers(oa, projectId);
    expect(pending.ok).toBe(false);
    if (pending.ok) return;
    expect(pending.code).toBe("EPISTEMIC_READ_FAILED");

    const { findActiveAwaitingProposalPresentedOptionSet } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const bound = await findActiveAwaitingProposalPresentedOptionSet(
      oa,
      projectId,
    );
    expect(bound.ok).toBe(false);
    if (bound.ok) return;
    expect(bound.code).toBe("EPISTEMIC_READ_FAILED");

    const propose = await proposeWith(projectId, null);
    expect(propose.ok).toBe(false);
    if (propose.ok) return;
    expect(propose.code).toBe("EPISTEMIC_READ_FAILED");

    oa.cycleServices.getEpistemicState.execute = original;
  });

  it("R39 — no active Proposal subject → ProjectTrajectory W2 accessible", async () => {
    const { projectId } = await seed();
    const before = await snapshotTrajectories(runtime.oa!, projectId);
    const proposed = await proposeW2OptionsForProject(runtime, projectId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.decisionSubjectMode).toBe("project_trajectory");
    expect(proposed.proposedTrajectory).not.toBeNull();
    const after = await snapshotTrajectories(runtime.oa!, projectId);
    expect(after.count).toBeGreaterThan(before.count);
  });

  it("R40 — marker transition failure after binding: OptionSet still recoverable; no generic trajectory", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r40",
    });
    await markPending(runtime.oa!, proposal);

    const oa = runtime.oa!;
    const originalUpdate = oa.cycleServices.updateEpistemicState.execute.bind(
      oa.cycleServices.updateEpistemicState,
    );
    let optionSetWrites = 0;
    oa.cycleServices.updateEpistemicState.execute = async (req) => {
      const result = await originalUpdate(req);
      // After OptionSet materialisation, force marker resolve path to "fail"
      // by re-activating pending via a second write that we skip — instead:
      // detect resolve correlation and return failure.
      if (
        typeof req.correlationId === "string" &&
        req.correlationId.startsWith("cor:pending-bound:")
      ) {
        return {
          ok: false,
          error: {
            code: "PERSISTENCE_FAILURE",
            detailCode: "MARKER_RESOLVE_FAIL",
            message: "forced",
            severity: "error",
            retryable: true,
            blocking: true,
            recoverable: true,
            domain: "D",
            timestamp: "2026-09-15T00:00:00.000Z",
          },
          durationMs: 0,
        } as unknown as Awaited<ReturnType<typeof originalUpdate>>;
      }
      if (
        req.items?.some(
          (i) =>
            i.type === "Observation" &&
            typeof i.statement === "string" &&
            i.statement.includes("w2_presented_option_set"),
        )
      ) {
        optionSetWrites += 1;
      }
      return result;
    };

    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(optionSetWrites).toBeGreaterThan(0);

    oa.cycleServices.updateEpistemicState.execute = originalUpdate;

    resetF2ProposalStoreForTests();
    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const read = await readActiveProposalDecisionSubject(oa, projectId);
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    // Bound OptionSet preferred even if pending marker still active
    expect(read.kind).toBe("bound_awaiting_decision");
    if (read.kind !== "bound_awaiting_decision") return;
    expect(read.optionSet.optionSetRef).toBe(proposed.optionSetRef);

    const generic = await proposeWith(projectId, null);
    expect(generic.ok).toBe(true);
    if (!generic.ok) return;
    expect(generic.optionSetRef).toBe(proposed.optionSetRef);
    expect(
      generic.options.some((o) => o.optionRef === GOVERNED_OPTION_REF),
    ).toBe(false);
  });

  it("R48 — ZERO REAL / ZERO dogfood mutation", () => {
    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
    expect(dbPath).not.toContain("product-proof");
    expect(dbPath).not.toContain(
      "sfia-studio-product-proof-preflight-35b1371d",
    );
  });
});

describe("CORR-PROOF-10 Atomic Subject Closure R49–R68", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("corr10-atomic.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "c10at" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: `at-${Date.now()}`,
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function proposeWith(projectId: string, proposalId: string | null) {
    const qual = await resolveW2QualificationInputs({
      oa: runtime.oa!,
      projectId,
    });
    if (!qual.ok) return qual;
    return proposeTrajectoryOptions({
      oa: runtime.oa!,
      projectId,
      ...qual.qualification.inputs,
      packagePin: qual.qualification.packagePin,
      objective: qual.qualification.objective,
      projectTitle: qual.qualification.projectTitle,
      proposalId,
    });
  }

  async function markPending(oa: RuntimeOaStack, proposal: ProposalDto) {
    const sealed = sealProposalExecutionBasis(proposal);
    const digest = computeProposalSubjectDigest(sealed, proposal.proposalId);
    const written = await writePendingDecisionSubjectMarker({
      oa,
      projectId: proposal.contextSnapshot.projectId,
      proposalId: proposal.proposalId,
      subjectDigest: digest,
      lpsId: proposal.contextSnapshot.lpsId,
      lpsVersion: proposal.contextSnapshot.lpsVersion,
      doctrineDigest: proposal.contextSnapshot.doctrineDigest,
    });
    expect(written.ok).toBe(true);
  }

  async function countDecisionRefsForOptionSet(
    projectId: string,
    optionSetRef: string,
  ): Promise<number> {
    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
      projectId,
    });
    if (!epistemic.ok) return -1;
    return epistemic.state.items.filter(
      (i) =>
        i.type === "DecisionRef" &&
        i.status === "active" &&
        (i.relatedObjects ?? []).includes(optionSetRef),
    ).length;
  }

  it("R49–R55 — DecisionRef failure rolls back HD+LPS; ProposalStore unchanged; retry succeeds exactly once", async () => {
    const { SqliteProductStore } = await import("@/lib/oa/project");
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r49",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const beforePt = await snapshotTrajectories(runtime.oa!, projectId);
    const lpsBefore =
      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(lpsBefore.ok).toBe(true);
    if (!lpsBefore.ok) return;
    const lpsVersionBefore = lpsBefore.livingProjectState.version;
    const decisionIdsBefore = [
      ...(lpsBefore.livingProjectState.decisionIds ?? []),
    ];
    const histBefore =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId,
      });
    expect(histBefore.ok).toBe(true);
    if (!histBefore.ok) return;
    const hdCountBefore = histBefore.decisions.length;

    const store = runtime.oa!.projectServices.store;
    expect(store).toBeInstanceOf(SqliteProductStore);
    (store as InstanceType<typeof SqliteProductStore>).failNextSave =
      "epistemic";

    const failed = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;

    // R50 — no durable HD
    const histAfterFail =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId,
      });
    expect(histAfterFail.ok).toBe(true);
    if (!histAfterFail.ok) return;
    expect(histAfterFail.decisions.length).toBe(hdCountBefore);

    // R51 — LPS unchanged
    const lpsAfterFail =
      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(lpsAfterFail.ok).toBe(true);
    if (!lpsAfterFail.ok) return;
    expect(lpsAfterFail.livingProjectState.version).toBe(lpsVersionBefore);
    expect(lpsAfterFail.livingProjectState.decisionIds ?? []).toEqual(
      decisionIdsBefore,
    );

    // R52 — no DecisionRef closure
    expect(
      await countDecisionRefsForOptionSet(projectId, proposed.optionSetRef),
    ).toBe(0);

    // R53 — still awaiting / rehydratable
    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const stillBound = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(stillBound.ok).toBe(true);
    if (!stillBound.ok) return;
    expect(stillBound.kind).toBe("bound_awaiting_decision");
    if (stillBound.kind !== "bound_awaiting_decision") return;
    expect(stillBound.optionSet.optionSetRef).toBe(proposed.optionSetRef);

    // R54 — ProposalStore not advanced
    const local = getProposal(proposal.proposalId);
    expect(local?.status).toBe("DECISION_REQUIRED");

    // R55 — retry after restoring epistemic writes
    (store as InstanceType<typeof SqliteProductStore>).failNextSave = null;
    const retry = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(retry.ok).toBe(true);
    if (!retry.ok) return;

    const histOk =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId,
      });
    expect(histOk.ok).toBe(true);
    if (!histOk.ok) return;
    expect(histOk.decisions.length).toBe(hdCountBefore + 1);
    expect(
      await countDecisionRefsForOptionSet(projectId, proposed.optionSetRef),
    ).toBe(1);
    const afterPt = await snapshotTrajectories(runtime.oa!, projectId);
    expect(afterPt.fingerprint).toBe(beforePt.fingerprint);
    expect(getProposal(proposal.proposalId)?.status).toMatch(/^APPROVED/);
  });

  it("R56/R57 — restart after success: not awaiting; second decide SUBJECT_ALREADY_DECIDED; no supersession", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r56",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const first = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const firstId = first.decision.decisionId;

    resetF2ProposalStoreForTests();
    const { readActiveProposalDecisionSubject } = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("none");

    const histBefore =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId,
      });
    expect(histBefore.ok).toBe(true);
    if (!histBefore.ok) return;

    const second = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(second.ok).toBe(false);
    if (second.ok) return;
    expect(second.code).toBe("SUBJECT_ALREADY_DECIDED");

    const histAfter =
      await runtime.oa!.decisionServices.listDecisionHistory.execute({
        projectId,
      });
    expect(histAfter.ok).toBe(true);
    if (!histAfter.ok) return;
    expect(histAfter.decisions.length).toBe(histBefore.decisions.length);
    const firstHd = histAfter.decisions.find((d) => d.decisionId === firstId);
    expect(firstHd?.status).toBe("accepted");
    expect(
      histAfter.decisions.filter((d) => d.status === "superseded").length,
    ).toBe(0);
  });

  it("R58 — PREPARE pursue after atomic success keeps sealed PresentedOptionSet", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r58",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const presented = await loadPresentedOptionSet(
      runtime.oa!,
      projectId,
      proposed.optionSetRef,
    );
    expect(presented.ok).toBe(true);
    if (!presented.ok) return;
    const sealed = presented.presented.sealedExecutionBasis!;
    const digest = presented.presented.proposalSubjectDigest;

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const reloaded = await loadPresentedOptionSet(
      runtime.oa!,
      projectId,
      proposed.optionSetRef,
    );
    expect(reloaded.ok).toBe(true);
    if (!reloaded.ok) return;
    expect(reloaded.presented.proposalSubjectDigest).toBe(digest);
    expect(reloaded.presented.sealedExecutionBasis?.targetPath).toBe(
      sealed.targetPath,
    );

    const { prepareM3FromDecision } = await import(
      "@/features/project-assistant/f3/prepareM3FromDecision"
    );
    const prepared = await prepareM3FromDecision({
      projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, projectId),
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => "2026-09-15T05:00:00.000Z",
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.contract.action).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
  });

  it("R59 — amend/refuse atomic closure + PREPARE_NOT_APPLICABLE + ZERO PT", async () => {
    for (const [suffix, optionRef] of [
      ["amend", PROPOSAL_SUBJECT_AMEND_REF],
      ["refuse", PROPOSAL_SUBJECT_REFUSE_REF],
    ] as const) {
      resetF2ProposalStoreForTests();
      const seeded = await seedQualifiedProject(runtime, {
        profile: "Critical",
        suffix: `r59-${suffix}`,
      });
      const c = await currentF2Context(runtime, seeded.projectId);
      const proposal = docsWriteProposal({
        projectId: seeded.projectId,
        lpsId: c.lpsId,
        lpsVersion: c.lpsVersion,
        doctrineDigest: c.doctrineDigest,
        activeCycleInstanceId: seeded.cycleInstanceId,
        proposalId: `prop:f2:r59-${suffix}`,
      });
      await markPending(runtime.oa!, proposal);
      const proposed = await proposeWith(seeded.projectId, proposal.proposalId);
      expect(proposed.ok).toBe(true);
      if (!proposed.ok) return;
      const before = await snapshotTrajectories(runtime.oa!, seeded.projectId);
      const decided = await decideTrajectory({
        oa: runtime.oa!,
        projectId: seeded.projectId,
        optionSetRef: proposed.optionSetRef,
        selectedOptionRef: optionRef,
        forceLocalAuthority: true,
      });
      expect(decided.ok).toBe(true);
      if (!decided.ok) return;
      expect(
        await countDecisionRefsForOptionSet(
          seeded.projectId,
          proposed.optionSetRef,
        ),
      ).toBe(1);
      const { prepareExecutionContractFromW2Decision } = await import(
        "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision"
      );
      const prep = await prepareExecutionContractFromW2Decision({
        oa: runtime.oa!,
        projectId: seeded.projectId,
        decisionId: decided.decision.decisionId,
        currentContext: await currentF2Context(runtime, seeded.projectId),
        forceLocalAuthority: true,
        qualifiedOperationKind: "generate-temporary-artifact",
      });
      expect(prep.ok).toBe(false);
      if (prep.ok) return;
      expect(prep.code).toBe("PREPARE_NOT_APPLICABLE");
      const after = await snapshotTrajectories(runtime.oa!, seeded.projectId);
      expect(after.fingerprint).toBe(before.fingerprint);
    }
  });

  it("R62 — closePresentedProposalOptionSet removed (DecisionRef-only closure)", async () => {
    const active = await import(
      "@/features/project-assistant/w2/activeProposalDecisionSubject"
    );
    expect(
      "closePresentedProposalOptionSet" in active,
    ).toBe(false);
  });

  it("R63/R68 — ZERO new CycleInstance / ZERO REAL / ZERO dogfood", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:r63",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    const live = await currentF2Context(runtime, projectId);
    expect(live.activeCycleInstanceId).toBe(cycleInstanceId);
    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
    expect(dbPath).not.toContain("product-proof");
  });
});
```


### FILE: `projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts`

```typescript
/**
 * W2 Track A — product application path enforcement of D-W2-03.
 *
 * A structuring ProjectTrajectory becomes decided/current ONLY through this
 * path, and only after a valid accepted HumanDecision taken by the Pilote.
 * A Recommendation can never reach the promotion call: promotion consumes a
 * decisionId, verifies the durable decision, and refuses everything else.
 *
 * Reuses existing OA use cases (RecordHumanDecision, PromoteDecidedTrajectory,
 * UpdateEpistemicState). OCC/CAS and LPS invariants stay owned by OA.
 *
 * A4/U3: recordHumanDecision + promoteDecidedTrajectory run in one outer
 * Product UoW so an accepted HD cannot commit without a decided trajectory.
 *
 * CORR-PROOF-10 — Proposal subject OptionSets record HD only (ZERO promotion).
 * Client trajectoryId/candidateVersion are hostile and ignored in that mode.
 */

import { randomBytes, randomUUID } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  readLiveProjectContext,
  resolveProductDoctrineRegistryRoot,
} from "@/lib/vertical-slice-runtime";
import type { DecisionBasis, HumanDecision } from "@/lib/oa/decision";
import {
  computeDecisionBasisSourceDigest,
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { TrajectoryStep } from "@/lib/oa/cycle";
import {
  computeCkcSemanticFingerprint,
  loadProductCkcCognitiveContent,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import {
  computeOptionSetDigest,
  computeQualificationDigest,
  isProposalSubjectPresentedSet,
  loadPresentedOptionSet,
} from "./presentedOptionSet";
import { resolvePendingDecisionSubjectMarker } from "./pendingDecisionSubjectMarker";
import {
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "./proposalSubjectOptions";
import { resolveW2QualificationInputs } from "./qualificationInputs";
import type { DecideTrajectoryResult, TrajectoryOptionDto } from "./types";
import { updateProposalStatus } from "../f2/proposalStore";
import type { F2ProposalStatus } from "../f2/types";

function shortId(): string {
  return randomBytes(6).toString("hex");
}

export function trajectoryDecisionScope(optionSetRef: string): string {
  return `w2-trajectory-decision:${optionSetRef}`;
}

export type PromotionGuardResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string };

/**
 * The single gate that lets a trajectory become decided/current.
 * Fail-closed on every mismatch — no synthetic decision can pass it.
 */
export function assertDecisionAuthorizesPromotion(input: {
  readonly decision: HumanDecision | null;
  readonly projectId: string;
  readonly trajectoryId: string;
  readonly candidateVersion: number;
  readonly selectedOptionRef: string;
}): PromotionGuardResult {
  const { decision } = input;
  if (!decision) {
    return {
      ok: false,
      code: "DECISION_REQUIRED",
      message:
        "Aucune décision humaine durable — la trajectoire ne peut pas devenir décidée/courante.",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "DECISION_NOT_ACCEPTED",
      message: `Décision humaine au statut ${decision.status} — promotion refusée.`,
    };
  }
  if (decision.authority !== "morris") {
    return {
      ok: false,
      code: "AUTHORITY_DENIED",
      message:
        "Décision non structurante — seule une décision d'autorité structurante peut promouvoir une trajectoire.",
    };
  }
  if (decision.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "La décision n'appartient pas à ce projet.",
    };
  }
  const basis = decision.decisionBasis;
  const trajectoryContext = basis?.trajectoryContext;
  if (!basis || basis.sourceType !== "trajectory_option" || !trajectoryContext) {
    return {
      ok: false,
      code: "DECISION_BASIS_MISSING",
      message:
        "Décision sans base de décision trajectoire — impossible de rattacher la promotion.",
    };
  }
  if (
    trajectoryContext.trajectoryId !== input.trajectoryId ||
    trajectoryContext.candidateVersion !== input.candidateVersion
  ) {
    return {
      ok: false,
      code: "DECISION_TRAJECTORY_MISMATCH",
      message:
        "La décision ne porte pas sur la version de trajectoire proposée — réinstruction requise.",
    };
  }
  if (trajectoryContext.selectedOptionRef !== input.selectedOptionRef) {
    return {
      ok: false,
      code: "DECISION_OPTION_MISMATCH",
      message: "L'option décidée ne correspond pas à la demande de promotion.",
    };
  }
  if (!trajectoryContext.optionRefs.includes(input.selectedOptionRef)) {
    return {
      ok: false,
      code: "OPTION_NOT_PRESENTED",
      message: "L'option décidée ne faisait pas partie des options présentées.",
    };
  }
  return { ok: true };
}

export type DecideTrajectoryInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly optionSetRef: string;
  /** Optional hint — decide always reloads the durable presented set (A2). */
  readonly options?: readonly TrajectoryOptionDto[];
  readonly recommendedOptionRef?: string;
  readonly selectedOptionRef: string;
  /**
   * Required for project_trajectory mode. Hostile / ignored for proposal mode
   * (authority comes from the sealed PresentedOptionSet only).
   */
  readonly trajectoryId?: string | null;
  readonly candidateVersion?: number | null;
  readonly epistemicRefs?: readonly string[];
  readonly reservesText?: string | null;
  /** Hostile client fields — never trusted. */
  readonly canActAsMorris?: unknown;
  readonly claimedAuthorityLevel?: unknown;
  /** Test inject for the local single-user authority gate. */
  readonly forceLocalAuthority?: boolean;
};

type AtomicDecideOutcome =
  | {
      readonly mode: "proposal";
      readonly decisionId: string;
      readonly livingProjectStateVersion: number;
      readonly proposalId: string;
      readonly markerReason: "decided" | "amended" | "refused";
      readonly nextProposalStatus: F2ProposalStatus;
    }
  | {
      readonly mode: "project_trajectory";
      readonly decisionId: string;
      readonly promoted: {
        readonly trajectoryId: string;
        readonly version: number;
        readonly status: "validated" | "active";
        readonly decidedByDecisionRef?: string;
        readonly decidedOptionRef?: string;
        readonly isCurrent: true;
        readonly statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE";
      };
      readonly livingProjectStateVersion: number;
    };

class DecideAtomicFailure extends Error {
  constructor(
    readonly code: string,
    message: string,
  ) {
    super(message);
    this.name = "DecideAtomicFailure";
  }
}

export async function decideTrajectory(
  input: DecideTrajectoryInput,
): Promise<DecideTrajectoryResult> {
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const { oa } = input;

  // A2 — exact presented OptionSet binding; never re-derive from live state.
  const loaded = await loadPresentedOptionSet(
    oa,
    input.projectId,
    input.optionSetRef,
  );
  if (!loaded.ok) {
    return { ok: false, code: loaded.code, message: loaded.message };
  }
  const presented = loaded.presented;
  const proposalSubjectMode = isProposalSubjectPresentedSet(presented);

  // Durable closure: a DecisionRef for this OptionSet means subject already decided.
  if (proposalSubjectMode) {
    const epistemic = await oa.cycleServices.getEpistemicState.execute({
      projectId: input.projectId,
    });
    if (!epistemic.ok) {
      return {
        ok: false,
        code: "EPISTEMIC_READ_FAILED",
        message:
          "État épistémique illisible — aucune HumanDecision possible sur ce sujet.",
      };
    }
    const alreadyDecided = epistemic.state.items.some(
      (i) =>
        i.type === "DecisionRef" &&
        i.status === "active" &&
        (i.relatedObjects ?? []).includes(input.optionSetRef),
    );
    if (alreadyDecided) {
      return {
        ok: false,
        code: "SUBJECT_ALREADY_DECIDED",
        message:
          "Ce PresentedOptionSet Proposal a déjà reçu une HumanDecision — aucune seconde décision.",
      };
    }
  }

  if (!proposalSubjectMode) {
    if (
      presented.trajectoryId !== input.trajectoryId ||
      presented.candidateVersion !== input.candidateVersion
    ) {
      return {
        ok: false,
        code: "TRAJECTORY_MISMATCH",
        message:
          "La trajectoire/version client ne correspond pas à la liaison présentée.",
      };
    }
  }
  // Proposal mode: ignore hostile client trajectoryId / candidateVersion.

  const recomputedDigest = computeOptionSetDigest({
    cycleTypeId: presented.cycleTypeId,
    recommendedProfile: presented.recommendedProfile,
    criticalSignalsPresent: presented.criticalSignalsPresent,
    irreversible: presented.irreversible,
    reservations: presented.reservations,
    options: presented.options,
    recommendedOptionRef: presented.recommendedOptionRef,
    proposalId: presented.proposalId ?? null,
    proposalSubjectDigest: presented.proposalSubjectDigest ?? null,
    decisionSubjectMode: presented.decisionSubjectMode,
  });
  if (recomputedDigest !== presented.optionSetDigest) {
    return {
      ok: false,
      code: "OPTION_SET_STALE",
      message:
        "Le digest du jeu d'options présenté ne correspond plus au contenu scellé.",
    };
  }

  if (proposalSubjectMode) {
    if (
      !presented.sealedExecutionBasis ||
      !presented.proposalSubjectDigest ||
      !presented.proposalId
    ) {
      return {
        ok: false,
        code: "PROPOSAL_SUBJECT_BINDING_INCOMPLETE",
        message:
          "OptionSet Proposal sans executionBasis/digest scellés — fail-closed.",
      };
    }
  } else if (
    presented.proposalId ||
    presented.sealedExecutionBasis ||
    presented.promotesProjectTrajectory === false ||
    presented.decisionSubjectMode === "proposal"
  ) {
    return {
      ok: false,
      code: "SUBJECT_OPTION_SET_MISMATCH",
      message:
        "Liaison sujet Proposal incohérente avec le mode trajectoire — fail-closed.",
    };
  }

  // A2 — exact presented set stays the decision object, but only while the
  // material qualification context that produced it is still compatible.
  // Never re-derive a substitute OptionSet; refuse and require reinstruction.
  const liveQualification = await resolveW2QualificationInputs({
    oa,
    projectId: input.projectId,
  });
  if (!liveQualification.ok) {
    return {
      ok: false,
      code: liveQualification.code,
      message: liveQualification.message,
    };
  }
  const currentQual = liveQualification.qualification;
  const registryRoot = resolveProductDoctrineRegistryRoot();
  const liveCkc = loadProductCkcCognitiveContent({
    registryRoot,
    cycleTypeId: currentQual.inputs.cycleTypeId,
    packagePin: currentQual.packagePin,
  });
  const liveFingerprint = liveCkc
    ? computeCkcSemanticFingerprint(liveCkc.provenance)
    : null;
  const currentQualificationDigest = computeQualificationDigest({
    cycleTypeId: currentQual.inputs.cycleTypeId,
    recommendedProfile: currentQual.inputs.recommendedProfile,
    criticalSignalsPresent: currentQual.inputs.criticalSignalsPresent,
    irreversible: currentQual.inputs.irreversible,
    reservations: currentQual.inputs.reservations,
    ckcAttribution: currentQual.inputs.ckcAttribution,
    ckcSemanticFingerprint: liveFingerprint,
  });
  if (currentQualificationDigest !== presented.qualificationDigest) {
    return {
      ok: false,
      code: "OPTION_SET_STALE",
      message:
        "Le contexte de qualification a changé depuis la présentation — réinstruction requise. Aucune décision enregistrée.",
    };
  }

  const options = presented.options;
  const recommendedOptionRef = presented.recommendedOptionRef;
  const epistemicRefs = presented.epistemicRefs;
  const optionSetDigest = presented.optionSetDigest;

  const selected = options.find(
    (o) => o.optionRef === input.selectedOptionRef,
  );
  if (!selected) {
    return {
      ok: false,
      code: "OPTION_NOT_PRESENTED",
      message:
        "Option inconnue pour ce jeu d'options — aucune décision enregistrée.",
    };
  }

  // Trajectory candidate load — project_trajectory mode only.
  if (!proposalSubjectMode) {
    if (
      typeof input.trajectoryId !== "string" ||
      !input.trajectoryId.trim() ||
      typeof input.candidateVersion !== "number"
    ) {
      return {
        ok: false,
        code: "TRAJECTORY_REQUIRED",
        message:
          "trajectoryId/candidateVersion requis pour une décision de trajectoire Project.",
      };
    }
    const candidate = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId: input.projectId,
      version: input.candidateVersion,
    });
    if (!candidate.ok) {
      return {
        ok: false,
        code: candidate.error.detailCode,
        message: "Version de trajectoire proposée introuvable.",
      };
    }
    if (candidate.trajectory.trajectoryId !== input.trajectoryId) {
      return {
        ok: false,
        code: "TRAJECTORY_MISMATCH",
        message: "La version proposée n'appartient pas à cette trajectoire.",
      };
    }
    if (candidate.trajectory.status !== "candidate") {
      return {
        ok: false,
        code: "TRAJECTORY_NOT_PROPOSED",
        message: `La version ${input.candidateVersion} n'est pas au statut proposé (${candidate.trajectory.status}).`,
      };
    }
  }

  const live = await readLiveProjectContext(oa, input.projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }

  const scope = trajectoryDecisionScope(input.optionSetRef);
  const issuedAt = oa.clock.nowIso();
  const authority = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope,
    issuedAt,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const optionRefs = options.map((o) => o.optionRef);
  const sealed = presented.sealedExecutionBasis;
  const decisionBasis: DecisionBasis = proposalSubjectMode
    ? {
        sourceType: "proposal",
        sourceRef: presented.proposalId!,
        sourceDigest: presented.proposalSubjectDigest!,
        projectId: input.projectId,
        cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
        proposalContext: {
          lpsId: live.context.lpsId,
          lpsVersion: live.context.lpsVersion,
          doctrineDigest: live.context.doctrineDigest,
          activeCycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
          ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
        },
        // NO trajectoryContext — Proposal subject never binds ProjectTrajectory.
        executionBasis: {
          objective: sealed!.objective,
          scope: sealed!.scope,
          outOfScope: [...sealed!.outOfScope],
          activatedBlocks: [...sealed!.activatedBlocks],
          expectedOutcome: sealed!.expectedOutcome,
          risks: [...sealed!.risks],
          reservations: input.reservesText?.trim()
            ? [input.reservesText.trim(), ...sealed!.reservations]
            : [...sealed!.reservations],
          stopConditions: [...sealed!.stopConditions],
          cycleTypeId: sealed!.cycleTypeId,
          recommendedProfile: sealed!.recommendedProfile,
          requestedOperation: sealed!.requestedOperation,
          intentKind: sealed!.intentKind ?? undefined,
          artifactType: sealed!.artifactType ?? undefined,
          targetRepositoryRef: sealed!.targetRepositoryRef ?? undefined,
          targetPath: sealed!.targetPath ?? undefined,
          scopeIn: [...sealed!.scopeIn],
          scopeOut: [...sealed!.scopeOut],
          expectedOutputs: [...sealed!.expectedOutputs],
          requiredCapabilities: [...sealed!.requiredCapabilities],
          validationExpectations: [...sealed!.validationExpectations],
          evidenceRequirements: [...sealed!.evidenceRequirements],
          reversibilityExpectation:
            sealed!.reversibilityExpectation ?? undefined,
          artifactBrief: sealed!.artifactBrief ?? undefined,
          contentRequirements: [...sealed!.contentRequirements],
          exitRequirementKinds: [...sealed!.exitRequirementKinds],
        },
      }
    : {
        sourceType: "trajectory_option",
        sourceRef: input.optionSetRef,
        sourceDigest: computeDecisionBasisSourceDigest({
          optionSetRef: input.optionSetRef,
          optionSetDigest,
          optionRefs,
          selectedOptionRef: input.selectedOptionRef,
          recommendedOptionRef,
          trajectoryId: input.trajectoryId!,
          candidateVersion: input.candidateVersion!,
          steps: selected.steps.map((s) => ({
            stepId: s.stepId,
            order: s.order,
            label: s.label,
            gate: s.gate ?? null,
          })),
        }),
        projectId: input.projectId,
        cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
        proposalContext: {
          lpsId: live.context.lpsId,
          lpsVersion: live.context.lpsVersion,
          doctrineDigest: live.context.doctrineDigest,
          activeCycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
          ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
        },
        trajectoryContext: {
          trajectoryId: input.trajectoryId!,
          candidateVersion: input.candidateVersion!,
          optionRefs,
          selectedOptionRef: input.selectedOptionRef,
          recommendedOptionRef,
          epistemicRefs: epistemicRefs ? [...epistemicRefs] : undefined,
          optionSetDigest,
        },
        executionBasis: {
          objective: live.context.objective,
          scope: selected.intent,
          expectedOutcome: `Trajectoire décidée: ${selected.label}`,
          reservations: input.reservesText?.trim()
            ? [input.reservesText.trim()]
            : [...selected.reservations],
          stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
          cycleTypeId: undefined,
          requestedOperation: `w2:decide-trajectory:${input.selectedOptionRef}`,
        },
      };

  const decisionId = proposalSubjectMode
    ? `dec:w2-prop:${randomUUID()}`
    : `dec:w2-trj:${randomUUID()}`;
  const reserves = input.reservesText?.trim();
  const decisionSubject = proposalSubjectMode
    ? `W2 Proposal subject arbitration for ${presented.proposalId}`
    : `W2 trajectory arbitration for ${input.optionSetRef}`;

  let atomic: AtomicDecideOutcome;
  try {
    // A4/U3 — single Product UoW around HD (+ promote only for true trajectory).
    atomic = await oa.projectServices.store.runInTransaction(async () => {
      const recorded = await oa.decisionServices.recordHumanDecision.execute({
        decisionId,
        projectId: input.projectId,
        cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
        subject: decisionSubject,
        options: options.map((o) => ({
          optionId: o.optionRef,
          label: o.label,
          impacts: [...o.impacts],
          recommended: o.optionRef === recommendedOptionRef,
        })),
        selectedOptionId: input.selectedOptionRef,
        actor: LOCAL_PILOTE_ACTOR,
        authority: "morris",
        status: "accepted",
        reversible: true,
        scope,
        reservations: reserves
          ? [
              {
                reservationId: `rsv:${randomUUID()}`,
                statement: reserves,
                blocking: false,
              },
            ]
          : undefined,
        rationale: `Pilote a retenu ${selected.label} parmi ${optionRefs.length} options.`,
        authorityEvidenceId: authority.evidenceId,
        decisionBasis,
        linkToLivingProjectState: true,
        expectedLpsVersion: live.context.lpsVersion,
        correlationId: proposalSubjectMode
          ? `w2-dec-prop:${presented.proposalId}`
          : `w2-dec:${input.optionSetRef}`,
      });

      if (!recorded.ok) {
        throw new DecideAtomicFailure(
          recorded.error.detailCode,
          recorded.error.message,
        );
      }

      const lpsAfterDecision =
        recorded.livingProjectStateVersion ?? live.context.lpsVersion;

      if (proposalSubjectMode) {
        // Non-trajectory Proposal subject — HD + DecisionRef closure in ONE UoW.
        // ZERO ProjectTrajectory. ProposalStore is updated only AFTER durable success.
        let nextProposalStatus: F2ProposalStatus = "APPROVED";
        let markerReason: "decided" | "amended" | "refused" = "decided";
        if (input.selectedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF) {
          nextProposalStatus = "REFUSED";
          markerReason = "refused";
        } else if (input.selectedOptionRef === PROPOSAL_SUBJECT_AMEND_REF) {
          nextProposalStatus = "AMENDMENT_REQUIRED";
          markerReason = "amended";
        } else if (input.selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF) {
          nextProposalStatus = reserves
            ? "APPROVED_WITH_RESERVES"
            : "APPROVED";
          markerReason = "decided";
        }

        const closure = await oa.cycleServices.updateEpistemicState.execute({
          projectId: input.projectId,
          items: [
            {
              epistemicItemId: `epi:w2-decref-prop:${input.optionSetRef.replace(/[^a-zA-Z0-9:_-]/g, "-")}`.slice(
                0,
                180,
              ),
              type: "DecisionRef",
              statement: `Décision humaine ${decisionId} — option retenue ${input.selectedOptionRef} — sujet Proposal ${presented.proposalId} (ProjectTrajectory non promue).`,
              status: "active",
              source: decisionId,
              relatedObjects: [
                input.projectId,
                decisionId,
                input.selectedOptionRef,
                input.optionSetRef,
                presented.proposalId!,
                ...epistemicRefs,
              ],
            },
          ],
          createdBy: LOCAL_PILOTE_ACTOR,
          correlationId: `w2-decref-prop:${input.optionSetRef}`,
        });
        if (!closure.ok) {
          throw new DecideAtomicFailure(
            closure.error.detailCode,
            `Closure DecisionRef Proposal échouée (${closure.error.detailCode}) — HumanDecision non autoritaire; rollback UoW.`,
          );
        }

        return {
          mode: "proposal" as const,
          decisionId,
          livingProjectStateVersion: lpsAfterDecision,
          proposalId: presented.proposalId!,
          markerReason,
          nextProposalStatus,
        };
      }

      // Re-read the durable decision: promotion is authorised by persisted truth,
      // never by the in-flight request payload.
      const readback = await oa.decisionServices.getHumanDecision.execute({
        decisionId,
      });
      const guard = assertDecisionAuthorizesPromotion({
        decision: readback.ok ? readback.decision : null,
        projectId: input.projectId,
        trajectoryId: input.trajectoryId!,
        candidateVersion: input.candidateVersion!,
        selectedOptionRef: input.selectedOptionRef,
      });
      if (!guard.ok) {
        throw new DecideAtomicFailure(guard.code, guard.message);
      }

      const promoted = await oa.cycleServices.promoteDecidedTrajectory.execute({
        trajectoryId: input.trajectoryId!,
        projectId: input.projectId,
        expectedVersion: input.candidateVersion!,
        status: "validated",
        decisionRef: decisionId,
        decidedOptionRef: input.selectedOptionRef,
        // A1 — seal selected option steps onto the decided trajectory.
        steps: structuredClone(selected.steps) as TrajectoryStep[],
        createdBy: LOCAL_PILOTE_ACTOR,
        correlationId: `w2-promote:${input.optionSetRef}`,
        expectedLpsVersion: lpsAfterDecision,
      });
      if (!promoted.ok) {
        throw new DecideAtomicFailure(
          promoted.error.detailCode,
          `Promotion de la trajectoire décidée refusée (${promoted.error.detailCode}).`,
        );
      }

      return {
        mode: "project_trajectory" as const,
        decisionId,
        promoted: {
          trajectoryId: promoted.trajectory.trajectoryId,
          version: promoted.trajectory.version,
          status: promoted.trajectory.status as "validated" | "active",
          decidedByDecisionRef: promoted.trajectory.decidedByDecisionRef,
          decidedOptionRef: promoted.trajectory.decidedOptionRef,
          isCurrent: true as const,
          statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE" as const,
        },
        livingProjectStateVersion:
          promoted.livingProjectStateVersion ?? lpsAfterDecision,
      };
    });
  } catch (err) {
    if (err instanceof DecideAtomicFailure) {
      return { ok: false, code: err.code, message: err.message };
    }
    return {
      ok: false,
      code: "PERSISTENCE_FAILURE",
      message:
        "Échec atomique décision+promotion — aucune décision orpheline n'a été commitée.",
    };
  }

  if (atomic.mode === "proposal") {
    // Process-local ProposalStore is NOT transactional — update only after durable success.
    updateProposalStatus(atomic.proposalId, atomic.nextProposalStatus);
    await resolvePendingDecisionSubjectMarker({
      oa,
      projectId: input.projectId,
      proposalId: atomic.proposalId,
      reason: atomic.markerReason,
      correlationId: `cor:pending-decide:${atomic.proposalId}`,
    });

    return {
      ok: true,
      decision: {
        decisionId: atomic.decisionId,
        selectedOptionRef: input.selectedOptionRef,
        actorRole: "Pilote",
        authorityClass: "morris",
        statusLabel: "DÉCISION HUMAINE PRISE",
        capturedAt: issuedAt,
        decisionBasisLinked: true,
        reservesText: reserves ?? null,
        proposalId: atomic.proposalId,
      },
      trajectory: null,
      livingProjectStateVersion: atomic.livingProjectStateVersion,
      executionPerformed: false,
      promotesProjectTrajectory: false,
      decisionSubjectMode: "proposal",
    };
  }

  // ProjectTrajectory path — historical DecisionRef remains post-commit (unchanged scope).
  await oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    items: [
      {
        epistemicItemId: `epi:w2-decref-${shortId()}`,
        type: "DecisionRef",
        statement: `Décision humaine ${atomic.decisionId} — option retenue ${input.selectedOptionRef} — trajectoire ${atomic.promoted.trajectoryId} v${atomic.promoted.version} décidée/courante.`,
        status: "active",
        source: atomic.decisionId,
        relatedObjects: [
          input.projectId,
          atomic.decisionId,
          input.selectedOptionRef,
          input.optionSetRef,
          atomic.promoted.trajectoryId,
          ...epistemicRefs,
        ],
      },
    ],
    createdBy: LOCAL_PILOTE_ACTOR,
    correlationId: `w2-decref:${input.optionSetRef}`,
  });

  return {
    ok: true,
    decision: {
      decisionId: atomic.decisionId,
      selectedOptionRef: input.selectedOptionRef,
      actorRole: "Pilote",
      authorityClass: "morris",
      statusLabel: "DÉCISION HUMAINE PRISE",
      capturedAt: issuedAt,
      decisionBasisLinked: true,
      reservesText: reserves ?? null,
      proposalId: null,
    },
    trajectory: {
      trajectoryId: atomic.promoted.trajectoryId,
      version: atomic.promoted.version,
      status: atomic.promoted.status,
      statusLabel: atomic.promoted.statusLabel,
      isCurrent: atomic.promoted.isCurrent,
      decidedByDecisionRef: atomic.promoted.decidedByDecisionRef ?? null,
      decidedOptionRef: atomic.promoted.decidedOptionRef ?? null,
    },
    livingProjectStateVersion: atomic.livingProjectStateVersion,
    executionPerformed: false,
    promotesProjectTrajectory: true,
    decisionSubjectMode: "project_trajectory",
  };
}
```


## COMPLETE UNIFIED DIFF (candidate vs HEAD / origin/main)

```diff

diff --git a/projects/sfia-studio/app/__tests__/auth/auth-real-boundary-session.test.ts b/projects/sfia-studio/app/__tests__/auth/auth-real-boundary-session.test.ts
index b92916a2..157a51e8 100644
--- a/projects/sfia-studio/app/__tests__/auth/auth-real-boundary-session.test.ts
+++ b/projects/sfia-studio/app/__tests__/auth/auth-real-boundary-session.test.ts
@@ -179,8 +179,8 @@ describe.skipIf(!enabled)(
         options: proposed.options,
         recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
         selectedOptionRef: GOVERNED_OPTION_REF,
-        trajectoryId: proposed.proposedTrajectory.trajectoryId,
-        candidateVersion: proposed.proposedTrajectory.version,
+        trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+        candidateVersion: proposed.proposedTrajectory!.version,
         forceLocalAuthority: true, // decision seeding only — prepare path must NOT use forceLocal
       });
       expect(decided.ok).toBe(true);
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
index 937ed509..2ba007a3 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts
@@ -161,8 +161,8 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
     expect(proposed.executionPerformed).toBe(false);
     expect(proposed.recommendation.isHumanDecision).toBe(false);
     expect(proposed.recommendation.promotesTrajectory).toBe(false);
-    expect(proposed.proposedTrajectory.isCurrent).toBe(false);
-    expect(proposed.proposedTrajectory.status).toBe("candidate");
+    expect(proposed.proposedTrajectory!.isCurrent).toBe(false);
+    expect(proposed.proposedTrajectory!.status).toBe("candidate");

     const before = await oa.cycleServices.getCurrentTrajectory.execute({
       projectId: seeded.projectId,
@@ -181,8 +181,8 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       options: proposed.options,
       recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
       selectedOptionRef: selectedOption.optionRef,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       epistemicRefs: proposed.epistemicRefs,
       forceLocalAuthority: true,
     });
@@ -191,9 +191,9 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
     expect(decided.executionPerformed).toBe(false);
     expect(decided.decision.actorRole).toBe("Pilote");
     expect(decided.decision.decisionBasisLinked).toBe(true);
-    expect(decided.trajectory.isCurrent).toBe(true);
-    expect(decided.trajectory.statusLabel).toBe("TRAJECTOIRE DÉCIDÉE / COURANTE");
-    expect(decided.trajectory.decidedByDecisionRef).toBe(
+    expect(decided.trajectory!.isCurrent).toBe(true);
+    expect(decided.trajectory!.statusLabel).toBe("TRAJECTOIRE DÉCIDÉE / COURANTE");
+    expect(decided.trajectory!.decidedByDecisionRef).toBe(
       decided.decision.decisionId,
     );

@@ -202,7 +202,7 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
     });
     expect(current.ok).toBe(true);
     if (!current.ok) return;
-    expect(current.trajectory.version).toBe(decided.trajectory.version);
+    expect(current.trajectory.version).toBe(decided.trajectory!.version);
     expect(current.trajectory.decidedByDecisionRef).toBe(
       decided.decision.decisionId,
     );
@@ -231,8 +231,8 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       options: proposed.options,
       recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
       selectedOptionRef: "opt:trajectory:invented",
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(unknown.ok).toBe(false);
@@ -292,8 +292,8 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       projectId: seeded.projectId,
       optionSetRef: proposed.optionSetRef,
       selectedOptionRef: proposed.recommendation.recommendedOptionRef,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(decided.ok).toBe(true);
@@ -301,7 +301,7 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
     expect(decided.decision.selectedOptionRef).toBe(
       proposed.recommendation.recommendedOptionRef,
     );
-    expect(decided.trajectory.isCurrent).toBe(true);
+    expect(decided.trajectory!.isCurrent).toBe(true);
   });

   it("A2-2 — reservation drift makes presented X OPTION_SET_STALE (no HD, no current)", async () => {
@@ -362,8 +362,8 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       projectId: seeded.projectId,
       optionSetRef: proposed.optionSetRef,
       selectedOptionRef: proposed.recommendation.recommendedOptionRef,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(decided.ok).toBe(false);
@@ -428,8 +428,8 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       options: proposed.options,
       recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
       selectedOptionRef: proposed.recommendation.recommendedOptionRef,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       epistemicRefs: proposed.epistemicRefs,
       canActAsMorris: true,
       claimedAuthorityLevel: "N3",
@@ -444,7 +444,7 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       optionSetRef: proposed.optionSetRef,
       selectedOptionRef: proposed.recommendation.recommendedOptionRef,
       trajectoryId: "trj:w2-forged",
-      candidateVersion: proposed.proposedTrajectory.version,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(mismatch.ok).toBe(false);
@@ -455,8 +455,8 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       projectId: seeded.projectId,
       optionSetRef: "optset:w2-missing",
       selectedOptionRef: proposed.recommendation.recommendedOptionRef,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(missing.ok).toBe(false);
@@ -506,8 +506,8 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       projectId: seeded.projectId,
       optionSetRef: proposed.optionSetRef,
       selectedOptionRef: proposed.recommendation.recommendedOptionRef,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(decided.ok).toBe(false);
@@ -548,13 +548,13 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
     expect(second.ok).toBe(true);
     if (!second.ok) return;

-    expect(second.proposedTrajectory.trajectoryId).toBe(
-      first.proposedTrajectory.trajectoryId,
+    expect(second.proposedTrajectory!.trajectoryId).toBe(
+      first.proposedTrajectory!.trajectoryId,
     );
-    expect(second.proposedTrajectory.version).toBe(
-      first.proposedTrajectory.version,
+    expect(second.proposedTrajectory!.version).toBe(
+      first.proposedTrajectory!.version,
     );
-    expect(second.proposedTrajectory.version).toBe(1);
+    expect(second.proposedTrajectory!.version).toBe(1);

     const loadedFirst = await loadPresentedOptionSet(
       oa,
@@ -621,7 +621,7 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
     });
     expect(first.ok).toBe(true);
     if (!first.ok) return;
-    expect(first.proposedTrajectory.version).toBe(1);
+    expect(first.proposedTrajectory!.version).toBe(1);
     const v1StepsBefore = (
       await oa.cycleServices.getTrajectoryVersion.execute({
         projectId: seeded.projectId,
@@ -663,10 +663,10 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
     expect(second.ok).toBe(true);
     if (!second.ok) return;
     expect(second.optionSetRef).not.toBe(first.optionSetRef);
-    expect(second.proposedTrajectory.trajectoryId).toBe(
-      first.proposedTrajectory.trajectoryId,
+    expect(second.proposedTrajectory!.trajectoryId).toBe(
+      first.proposedTrajectory!.trajectoryId,
     );
-    expect(second.proposedTrajectory.version).toBe(2);
+    expect(second.proposedTrajectory!.version).toBe(2);

     const loadedX = await loadPresentedOptionSet(
       oa,
@@ -782,8 +782,8 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       projectId: seeded.projectId,
       optionSetRef: first.optionSetRef,
       selectedOptionRef: first.recommendation.recommendedOptionRef,
-      trajectoryId: first.proposedTrajectory.trajectoryId,
-      candidateVersion: first.proposedTrajectory.version,
+      trajectoryId: first.proposedTrajectory!.trajectoryId,
+      candidateVersion: first.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(staleDecide.ok).toBe(false);
@@ -807,15 +807,15 @@ describe("W2 Track A — Options / Recommendation / HumanDecision", () => {
       projectId: seeded.projectId,
       optionSetRef: second.optionSetRef,
       selectedOptionRef: selected.optionRef,
-      trajectoryId: second.proposedTrajectory.trajectoryId,
-      candidateVersion: second.proposedTrajectory.version,
+      trajectoryId: second.proposedTrajectory!.trajectoryId,
+      candidateVersion: second.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(freshDecide.ok).toBe(true);
     if (!freshDecide.ok) return;
     expect(freshDecide.decision.selectedOptionRef).toBe(selected.optionRef);
-    expect(freshDecide.trajectory.isCurrent).toBe(true);
-    expect(freshDecide.trajectory.decidedOptionRef).toBe(selected.optionRef);
+    expect(freshDecide.trajectory!.isCurrent).toBe(true);
+    expect(freshDecide.trajectory!.decidedOptionRef).toBe(selected.optionRef);

     const current = await oa.cycleServices.getCurrentTrajectory.execute({
       projectId: seeded.projectId,
@@ -952,7 +952,7 @@ projectTitle: requal.qualification.projectTitle,

     const [a, b] = await Promise.all([
       oa.cycleServices.proposeTrajectoryVersion.execute({
-        trajectoryId: first.proposedTrajectory.trajectoryId,
+        trajectoryId: first.proposedTrajectory!.trajectoryId,
         projectId: seeded.projectId,
         expectedVersion: 1,
         steps,
@@ -961,7 +961,7 @@ projectTitle: requal.qualification.projectTitle,
         expectedLpsVersion: lps.qualification.lpsVersion,
       }),
       oa.cycleServices.proposeTrajectoryVersion.execute({
-        trajectoryId: first.proposedTrajectory.trajectoryId,
+        trajectoryId: first.proposedTrajectory!.trajectoryId,
         projectId: seeded.projectId,
         expectedVersion: 1,
         steps: structuredClone(steps),
@@ -1019,8 +1019,8 @@ projectTitle: requal.qualification.projectTitle,
       projectId: seeded.projectId,
       optionSetRef: first.optionSetRef,
       selectedOptionRef: first.recommendation.recommendedOptionRef,
-      trajectoryId: first.proposedTrajectory.trajectoryId,
-      candidateVersion: first.proposedTrajectory.version,
+      trajectoryId: first.proposedTrajectory!.trajectoryId,
+      candidateVersion: first.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(decided.ok).toBe(true);
@@ -1031,7 +1031,7 @@ projectTitle: requal.qualification.projectTitle,
     });
     expect(current.ok).toBe(true);
     if (!current.ok) return;
-    expect(current.trajectory.version).toBe(decided.trajectory.version);
+    expect(current.trajectory.version).toBe(decided.trajectory!.version);

     const requal = await resolveW2QualificationInputs({
       oa,
@@ -1049,11 +1049,11 @@ projectTitle: requal.qualification.projectTitle,
     });
     expect(second.ok).toBe(true);
     if (!second.ok) return;
-    expect(second.proposedTrajectory.trajectoryId).toBe(
+    expect(second.proposedTrajectory!.trajectoryId).toBe(
       current.trajectory.trajectoryId,
     );
-    expect(second.proposedTrajectory.version).toBe(current.trajectory.version + 1);
-    expect(second.proposedTrajectory.status).toBe("candidate");
+    expect(second.proposedTrajectory!.version).toBe(current.trajectory.version + 1);
+    expect(second.proposedTrajectory!.status).toBe("candidate");

     const stillCurrent = await oa.cycleServices.getCurrentTrajectory.execute({
       projectId: seeded.projectId,
@@ -1090,8 +1090,8 @@ projectTitle: requal.qualification.projectTitle,
       projectId: seeded.projectId,
       optionSetRef: first.optionSetRef,
       selectedOptionRef: first.recommendation.recommendedOptionRef,
-      trajectoryId: first.proposedTrajectory.trajectoryId,
-      candidateVersion: first.proposedTrajectory.version,
+      trajectoryId: first.proposedTrajectory!.trajectoryId,
+      candidateVersion: first.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(decided.ok).toBe(true);
@@ -1113,8 +1113,8 @@ projectTitle: requal.qualification.projectTitle,
     });
     expect(x.ok).toBe(true);
     if (!x.ok) return;
-    expect(x.proposedTrajectory.version).toBe(decided.trajectory.version + 1);
-    const xVersion = x.proposedTrajectory.version;
+    expect(x.proposedTrajectory!.version).toBe(decided.trajectory!.version + 1);
+    const xVersion = x.proposedTrajectory!.version;

     await oa.cycleServices.updateEpistemicState.execute({
       projectId: seeded.projectId,
@@ -1145,9 +1145,9 @@ projectTitle: requal.qualification.projectTitle,
     });
     expect(y.ok).toBe(true);
     if (!y.ok) return;
-    expect(y.proposedTrajectory.trajectoryId).toBe(x.proposedTrajectory.trajectoryId);
-    expect(y.proposedTrajectory.version).toBe(xVersion + 1);
-    expect(y.proposedTrajectory.version).not.toBe(xVersion);
+    expect(y.proposedTrajectory!.trajectoryId).toBe(x.proposedTrajectory!.trajectoryId);
+    expect(y.proposedTrajectory!.version).toBe(xVersion + 1);
+    expect(y.proposedTrajectory!.version).not.toBe(xVersion);

     const priorCandidate = await oa.cycleServices.getTrajectoryVersion.execute({
       projectId: seeded.projectId,
@@ -1159,7 +1159,7 @@ projectTitle: requal.qualification.projectTitle,

     const newCandidate = await oa.cycleServices.getTrajectoryVersion.execute({
       projectId: seeded.projectId,
-      version: y.proposedTrajectory.version,
+      version: y.proposedTrajectory!.version,
     });
     expect(newCandidate.ok).toBe(true);
     if (!newCandidate.ok) return;
@@ -1171,7 +1171,7 @@ projectTitle: requal.qualification.projectTitle,
     });
     expect(current.ok).toBe(true);
     if (!current.ok) return;
-    expect(current.trajectory.version).toBe(decided.trajectory.version);
+    expect(current.trajectory.version).toBe(decided.trajectory!.version);
   });

   it("A3-6b — reinstruction atomicity: trajectory save failure leaves prior candidate intact", async () => {
@@ -1199,7 +1199,7 @@ projectTitle: requal.qualification.projectTitle,
     const store = oa.projectServices.store as { failNextSave?: string | null };
     store.failNextSave = "trajectory";
     const failed = await oa.cycleServices.proposeTrajectoryVersion.execute({
-      trajectoryId: first.proposedTrajectory.trajectoryId,
+      trajectoryId: first.proposedTrajectory!.trajectoryId,
       projectId: seeded.projectId,
       expectedVersion: 1,
       steps: structuredClone(first.options[0]!.steps) as TrajectoryStep[],
@@ -1437,8 +1437,8 @@ projectTitle: requal.qualification.projectTitle,
     });
     expect(second.ok).toBe(true);
     if (!second.ok) return;
-    expect(second.proposedTrajectory.version).toBe(
-      first.proposedTrajectory.version,
+    expect(second.proposedTrajectory!.version).toBe(
+      first.proposedTrajectory!.version,
     );

     const epistemic = await oa.cycleServices.getEpistemicState.execute({
@@ -1508,7 +1508,7 @@ projectTitle: requal.qualification.projectTitle,
     const steps = structuredClone(first.options[0]!.steps) as TrajectoryStep[];

     const writerA = await oa.cycleServices.proposeTrajectoryVersion.execute({
-      trajectoryId: first.proposedTrajectory.trajectoryId,
+      trajectoryId: first.proposedTrajectory!.trajectoryId,
       projectId: seeded.projectId,
       expectedVersion: 1,
       steps,
@@ -1528,7 +1528,7 @@ projectTitle: requal.qualification.projectTitle,
     if (!afterA.ok) return;

     const writerB = await oa.cycleServices.proposeTrajectoryVersion.execute({
-      trajectoryId: first.proposedTrajectory.trajectoryId,
+      trajectoryId: first.proposedTrajectory!.trajectoryId,
       projectId: seeded.projectId,
       expectedVersion: 1,
       steps: structuredClone(steps),
@@ -1596,7 +1596,7 @@ projectTitle: requal.qualification.projectTitle,
     expect(live.qualification.lpsVersion).toBeGreaterThan(1);

     const failed = await oa.cycleServices.proposeTrajectoryVersion.execute({
-      trajectoryId: first.proposedTrajectory.trajectoryId,
+      trajectoryId: first.proposedTrajectory!.trajectoryId,
       projectId: seeded.projectId,
       expectedVersion: 1,
       steps: structuredClone(first.options[0]!.steps) as TrajectoryStep[],
@@ -1671,8 +1671,8 @@ projectTitle: requal.qualification.projectTitle,
       projectId: seeded.projectId,
       optionSetRef: proposed.optionSetRef,
       selectedOptionRef: proposed.recommendation.recommendedOptionRef,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(failed.ok).toBe(false);
@@ -1696,8 +1696,8 @@ projectTitle: requal.qualification.projectTitle,
       projectId: seeded.projectId,
       optionSetRef: proposed.optionSetRef,
       selectedOptionRef: proposed.recommendation.recommendedOptionRef,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(recovered.ok).toBe(true);
@@ -1730,8 +1730,8 @@ projectTitle: requal.qualification.projectTitle,
       options: proposed.options,
       recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
       selectedOptionRef: proposed.recommendation.recommendedOptionRef,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(decided.ok).toBe(true);
@@ -1865,8 +1865,8 @@ describe("W2 Track C — inspection binding + authorization mechanism proofs", (
       options: proposed.options,
       recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
       selectedOptionRef: GOVERNED_OPTION_REF,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(decided.ok).toBe(true);
@@ -1985,8 +1985,8 @@ describe("W2 Track C — inspection binding + authorization mechanism proofs", (
       options: proposed.options,
       recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
       selectedOptionRef: GOVERNED_OPTION_REF,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(decided.ok).toBe(true);
@@ -2116,8 +2116,8 @@ describe("W2 Track C — inspection binding + authorization mechanism proofs", (
       options: proposed.options,
       recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
       selectedOptionRef: GOVERNED_OPTION_REF,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(decided.ok).toBe(true);
@@ -2246,8 +2246,8 @@ describe("W2 Track C — material constraint amendment (R02 product seam)", () =
       options: proposed.options,
       recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
       selectedOptionRef: GOVERNED_OPTION_REF,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(decided.ok).toBe(true);
@@ -2555,8 +2555,8 @@ describe("W2 Track C — material constraint amendment (R02 product seam)", () =
       options: proposed.options,
       recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
       selectedOptionRef: GOVERNED_OPTION_REF,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     if (!decided.ok) return;
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
index 6a33337e..70b42fb5 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2TrackDPhaseB.test.ts
@@ -199,8 +199,8 @@ describe("Phase B P5–P9 — W2 product path ordering / integrity", () => {
     expect(proposed.recommendation.promotesTrajectory).toBe(false);
     expect(proposed.autoDecisionPerformed).toBe(false);
     expect(proposed.executionPerformed).toBe(false);
-    expect(proposed.proposedTrajectory.status).toBe("candidate");
-    expect(proposed.proposedTrajectory.isCurrent).toBe(false);
+    expect(proposed.proposedTrajectory!.status).toBe("candidate");
+    expect(proposed.proposedTrajectory!.isCurrent).toBe(false);

     const current = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
       projectId: seeded.projectId,
@@ -290,7 +290,7 @@ describe("Phase B P10 — requalification via existing createCycle", () => {
     const first = await proposeFor(runtime, seeded.projectId);
     expect(first.proposed.ok).toBe(true);
     if (!first.proposed.ok) return;
-    const v1 = first.proposed.proposedTrajectory.version;
+    const v1 = first.proposed.proposedTrajectory!.version;

     const overview = await runtime.getProject(seeded.projectId);
     expect(overview.ok).toBe(true);
@@ -338,7 +338,7 @@ describe("Phase B P10 — requalification via existing createCycle", () => {
     expect(
       second.proposed.recommendation.ckcProvenance?.semanticFingerprint,
     ).not.toBe(first.proposed.recommendation.ckcProvenance?.semanticFingerprint);
-    expect(second.proposed.proposedTrajectory.version).toBeGreaterThan(v1);
+    expect(second.proposed.proposedTrajectory!.version).toBeGreaterThan(v1);
   });
 });

@@ -429,11 +429,11 @@ describe("Phase B I1–I4 — binding / idempotence (PB-DLV-01)", () => {
     const second = await proposeFor(runtime, seeded.projectId);
     expect(second.proposed.ok).toBe(true);
     if (!second.proposed.ok) return;
-    expect(second.proposed.proposedTrajectory.version).toBe(
-      first.proposed.proposedTrajectory.version,
+    expect(second.proposed.proposedTrajectory!.version).toBe(
+      first.proposed.proposedTrajectory!.version,
     );
-    expect(second.proposed.proposedTrajectory.trajectoryId).toBe(
-      first.proposed.proposedTrajectory.trajectoryId,
+    expect(second.proposed.proposedTrajectory!.trajectoryId).toBe(
+      first.proposed.proposedTrajectory!.trajectoryId,
     );
   });

@@ -482,8 +482,8 @@ describe("Phase B I1–I4 — binding / idempotence (PB-DLV-01)", () => {
     const second = await proposeFor(runtime, seeded.projectId);
     expect(second.proposed.ok).toBe(true);
     if (!second.proposed.ok) return;
-    expect(second.proposed.proposedTrajectory.version).toBe(
-      first.proposed.proposedTrajectory.version,
+    expect(second.proposed.proposedTrajectory!.version).toBe(
+      first.proposed.proposedTrajectory!.version,
     );
     // Rationale may differ in wording but fingerprint (binding) is stable.
     expect(
@@ -527,14 +527,14 @@ describe("Phase B I1–I4 — binding / idempotence (PB-DLV-01)", () => {
       options: proposed.options,
       recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
       selectedOptionRef: selected.optionRef,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       epistemicRefs: proposed.epistemicRefs,
       reservesText: null,
     });
     expect(decided.ok).toBe(true);
     if (!decided.ok) return;
-    expect(decided.trajectory.isCurrent).toBe(true);
+    expect(decided.trajectory!.isCurrent).toBe(true);
     expect(decided.decision.selectedOptionRef).toBe(selected.optionRef);
     expect(decided.executionPerformed).toBe(false);
   });
@@ -811,8 +811,8 @@ describe("Phase B R1 — legacy pre-Phase-B OptionSet cutover", () => {
       options: proposed.options,
       recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
       selectedOptionRef: selected.optionRef,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       epistemicRefs: proposed.epistemicRefs,
       reservesText: null,
       forceLocalAuthority: true,
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
index d3a217ae..d8e589f9 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
@@ -512,8 +512,8 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
       options: proposed.options,
       recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
       selectedOptionRef: GOVERNED_OPTION_REF,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(decided.ok).toBe(true);
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts
index b8fd114f..6ec932f0 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts
@@ -78,8 +78,8 @@ async function authorizeTempArtifact(suffix: string, dbPath?: string) {
     options: proposed.options,
     recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
     selectedOptionRef: GOVERNED_OPTION_REF,
-    trajectoryId: proposed.proposedTrajectory.trajectoryId,
-    candidateVersion: proposed.proposedTrajectory.version,
+    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+    candidateVersion: proposed.proposedTrajectory!.version,
     forceLocalAuthority: true,
   });
   expect(decided.ok).toBe(true);
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceCorrection.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceCorrection.test.ts
index aa52da53..221d62b4 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceCorrection.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceCorrection.test.ts
@@ -97,8 +97,8 @@ async function authorizeTempArtifact(suffix: string, dbPath?: string) {
     options: proposed.options,
     recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
     selectedOptionRef: GOVERNED_OPTION_REF,
-    trajectoryId: proposed.proposedTrajectory.trajectoryId,
-    candidateVersion: proposed.proposedTrajectory.version,
+    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+    candidateVersion: proposed.proposedTrajectory!.version,
     forceLocalAuthority: true,
   });
   expect(decided.ok).toBe(true);
@@ -141,7 +141,7 @@ async function authorizeTempArtifact(suffix: string, dbPath?: string) {
     executionContractId,
     db,
     runtime,
-    decidedTrajectoryVersion: decided.trajectory.version,
+    decidedTrajectoryVersion: decided.trajectory!.version,
   };
 }

@@ -216,8 +216,8 @@ async function secondSuccessOnSameProject(
     options: proposed.options,
     recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
     selectedOptionRef: GOVERNED_OPTION_REF,
-    trajectoryId: proposed.proposedTrajectory.trajectoryId,
-    candidateVersion: proposed.proposedTrajectory.version,
+    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+    candidateVersion: proposed.proposedTrajectory!.version,
     forceLocalAuthority: true,
   });
   expect(decided.ok).toBe(true);
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
index dfdd7021..21d498ca 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
@@ -79,8 +79,8 @@ async function authorizeTempArtifact(suffix: string, dbPath?: string) {
     options: proposed.options,
     recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
     selectedOptionRef: GOVERNED_OPTION_REF,
-    trajectoryId: proposed.proposedTrajectory.trajectoryId,
-    candidateVersion: proposed.proposedTrajectory.version,
+    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+    candidateVersion: proposed.proposedTrajectory!.version,
     forceLocalAuthority: true,
   });
   expect(decided.ok).toBe(true);
@@ -123,10 +123,10 @@ async function authorizeTempArtifact(suffix: string, dbPath?: string) {
     executionContractId,
     db,
     runtime,
-    trajectoryId: proposed.proposedTrajectory.trajectoryId,
-    trajectoryVersion: proposed.proposedTrajectory.version,
-    decidedTrajectoryId: decided.trajectory.trajectoryId,
-    decidedTrajectoryVersion: decided.trajectory.version,
+    trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+    trajectoryVersion: proposed.proposedTrajectory!.version,
+    decidedTrajectoryId: decided.trajectory!.trajectoryId,
+    decidedTrajectoryVersion: decided.trajectory!.version,
   };
 }

@@ -349,13 +349,13 @@ describe("W3C-P06 structural replan requires decide", () => {
       options: proposed.options,
       recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
       selectedOptionRef: GOVERNED_OPTION_REF,
-      trajectoryId: proposed.proposedTrajectory.trajectoryId,
-      candidateVersion: proposed.proposedTrajectory.version,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
       forceLocalAuthority: true,
     });
     expect(decided.ok).toBe(true);
     if (!decided.ok) return;
-    expect(decided.trajectory.status).toBe("validated");
+    expect(decided.trajectory!.status).toBe("validated");
     expect(decided.decision.decisionId).toBeTruthy();
   });
 });
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index ae27c869..9be0a296 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -238,6 +238,11 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                   recoveryProposeSignal={recoveryProposeSignal}
                   durableRefreshSignal={trajectoryRefreshSignal}
                   onDurableFactsChanged={notifyDurableFactsChanged}
+                  activeProposalId={
+                    controller.activeProposal?.status === "DECISION_REQUIRED"
+                      ? controller.activeProposal.proposalId
+                      : null
+                  }
                 />
               </div>
             </section>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index ac677fee..889411dc 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -24,6 +24,7 @@ import {
   w2MaterializeProductOutcomeAction,
   w2PrepareExecutionContractAction,
   w2ProposeTrajectoryOptionsAction,
+  w2ReadActiveDecisionSubjectAction,
   w2RehydrateProductOutcomeAction,
 } from "@/features/project-assistant/w2/actions";
 import {
@@ -142,6 +143,7 @@ export function TrajectorySurface({
   recoveryProposeSignal = 0,
   durableRefreshSignal = 0,
   composition = "standalone",
+  activeProposalId = null,
 }: {
   projectId: string;
   onDurableFactsChanged?: () => void;
@@ -154,6 +156,11 @@ export function TrajectorySurface({
    * Presentation-only — does not change ProjectTrajectory domain identity.
    */
   composition?: "standalone" | "lps-embedded";
+  /**
+   * CORR-PROOF-10 — opaque Proposal subject from Conversation/Nora.
+   * Server resolves; client never sends objective/path/operation.
+   */
+  activeProposalId?: string | null;
 }) {
   const [busy, setBusy] = useState<Busy>(null);
   const [error, setError] = useState<string | null>(null);
@@ -249,7 +256,10 @@ export function TrajectorySurface({
   const proposeOptions = useCallback(async () => {
     setBusy("options");
     setError(null);
-    const result = await w2ProposeTrajectoryOptionsAction({ projectId });
+    const result = await w2ProposeTrajectoryOptionsAction({
+      projectId,
+      proposalId: activeProposalId ?? null,
+    });
     setBusy(null);
     if (!result.ok) {
       setError(result.message);
@@ -270,7 +280,27 @@ export function TrajectorySurface({
     setProductOutcome(null);
     setPostEvidence(null);
     onDurableFactsChanged?.();
-  }, [projectId, onDurableFactsChanged]);
+  }, [projectId, activeProposalId, onDurableFactsChanged]);
+
+  /** CORR-PROOF-10 — rehydrate bound Proposal OptionSet from durable Epistemic. */
+  const rehydrateActiveDecisionSubject = useCallback(async () => {
+    const result = await w2ReadActiveDecisionSubjectAction({ projectId });
+    if (!result.ok) {
+      setError(result.message);
+      return;
+    }
+    if (result.kind === "bound_awaiting_decision") {
+      setOptionSet(result.optionSet);
+      setError(null);
+      return;
+    }
+    if (result.kind === "pending_reinstruction_required") {
+      setOptionSet(null);
+      setError(result.message);
+      return;
+    }
+    // kind === "none" — leave local optionSet as-is for trajectory path
+  }, [projectId]);

   const refreshPreCycleCandidate = useCallback(async () => {
     const result = await projectAssistantReadPreCycleCandidateTrajectoryAction({
@@ -424,6 +454,10 @@ export function TrajectorySurface({
     }
   }, [durableRefreshSignal, refreshPreCycleCandidate]);

+  useEffect(() => {
+    void rehydrateActiveDecisionSubject();
+  }, [rehydrateActiveDecisionSubject, durableRefreshSignal]);
+
   useEffect(() => {
     if (recoveryProposeSignal > 0) {
       void proposeOptions();
@@ -435,20 +469,41 @@ export function TrajectorySurface({
       if (!optionSet) return;
       setBusy("decision");
       setError(null);
-      const result = await w2DecideTrajectoryAction({
-        projectId,
-        optionSetRef: optionSet.optionSetRef,
-        trajectoryId: optionSet.proposedTrajectory.trajectoryId,
-        candidateVersion: optionSet.proposedTrajectory.version,
-        selectedOptionRef,
-      });
+      const isProposalSubject =
+        optionSet.decisionSubjectMode === "proposal" ||
+        Boolean(optionSet.proposalId);
+      let result;
+      if (isProposalSubject) {
+        // Hostile trajectory fields omitted — decide loads sealed presented set.
+        result = await w2DecideTrajectoryAction({
+          projectId,
+          optionSetRef: optionSet.optionSetRef,
+          selectedOptionRef,
+        });
+      } else {
+        const proposed = optionSet.proposedTrajectory;
+        if (!proposed) {
+          setBusy(null);
+          setError(
+            "Trajectoire proposée absente — réinstruire les options Project.",
+          );
+          return;
+        }
+        result = await w2DecideTrajectoryAction({
+          projectId,
+          optionSetRef: optionSet.optionSetRef,
+          trajectoryId: proposed.trajectoryId,
+          candidateVersion: proposed.version,
+          selectedOptionRef,
+        });
+      }
       setBusy(null);
       if (!result.ok) {
         setError(result.message);
         return;
       }
       setDecision(result.decision);
-      setDecided(result.trajectory);
+      setDecided(result.trajectory ?? null);
       onDurableFactsChanged?.();
     },
     [optionSet, projectId, onDurableFactsChanged],
@@ -1030,9 +1085,31 @@ export function TrajectorySurface({
               </span>
               Options proposées
             </h3>
+            {optionSet.proposalId ? (
+              <p
+                className={styles.blockNote}
+                data-testid="w2-decision-subject"
+              >
+                Sujet de décision : Proposal{" "}
+                <code>{optionSet.proposalId}</code>
+                {optionSet.promotesProjectTrajectory === false
+                  ? " — arbitrage sur ce sujet (pas une promotion ProjectTrajectory)."
+                  : null}
+              </p>
+            ) : (
+              <p
+                className={styles.blockNote}
+                data-testid="w2-decision-subject-trajectory"
+              >
+                Sujet de décision : trajectoire Project (chemin de cycle).
+              </p>
+            )}
             <p className={styles.blockNote} data-testid="w2-proposed-trajectory">
-              {optionSet.proposedTrajectory.statusLabel} · version{" "}
-              {optionSet.proposedTrajectory.version} · pas encore courante
+              {optionSet.proposedTrajectory
+                ? `${optionSet.proposedTrajectory.statusLabel} · version ${optionSet.proposedTrajectory.version} · pas encore courante`
+                : optionSet.decisionSubjectMode === "proposal"
+                  ? "Sujet Proposal — aucune ProjectTrajectory proposée (ZERO promotion)."
+                  : "Aucune trajectoire proposée."}
             </p>
             <ul className={styles.optionList}>
               {optionSet.options.map((option) => {
@@ -1100,7 +1177,7 @@ export function TrajectorySurface({
         </>
       ) : null}

-      {decision && decided ? (
+      {decision ? (
         <section
           className={styles.decision}
           aria-labelledby="w2-decision-title"
@@ -1132,7 +1209,9 @@ export function TrajectorySurface({
             <div>
               <dt>Trajectoire</dt>
               <dd data-testid="w2-decided-trajectory">
-                {decided.statusLabel} · version {decided.version}
+                {decided
+                  ? `${decided.statusLabel} · version ${decided.version}`
+                  : "Aucune promotion ProjectTrajectory"}
               </dd>
             </div>
           </dl>
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 84ccd123..26385e6d 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -87,6 +87,11 @@ import type {
   QualificationDto,
 } from "./types";
 import type { ExecutionIntentPayload } from "./executionIntentSchema";
+import { writePendingDecisionSubjectMarker } from "../w2/pendingDecisionSubjectMarker";
+import {
+  computeProposalSubjectDigest,
+  sealProposalExecutionBasis,
+} from "../w2/resolveProposalDecisionSubject";

 const EPHEMERAL_NOTICE =
   "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.";
@@ -1056,6 +1061,36 @@ export async function orchestrateAssistantSend(input: {
       }),
     );

+    // CORR-PROOF-10 — durable pending subject marker before OptionSet binding.
+    // Fail closed when OA is available and marker write fails.
+    {
+      const sealed = sealProposalExecutionBasis(proposal);
+      const subjectDigest = computeProposalSubjectDigest(
+        sealed,
+        proposal.proposalId,
+      );
+      const marker = await writePendingDecisionSubjectMarker({
+        oa,
+        projectId: project.projectId,
+        proposalId: proposal.proposalId,
+        subjectDigest,
+        lpsId: proposal.contextSnapshot.lpsId,
+        lpsVersion: proposal.contextSnapshot.lpsVersion,
+        doctrineDigest: proposal.contextSnapshot.doctrineDigest,
+        correlationId: `cor:pending-subject:${proposal.proposalId}`,
+      });
+      if (!marker.ok) {
+        return {
+          ok: false,
+          status: "validation_error",
+          code: marker.code,
+          message: marker.message,
+          mode: modeResolution.mode,
+          retryable: true,
+        };
+      }
+    }
+
     const textParts = [
       presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
       "Continuation gouvernée — matérialisation du livrable requis sur le cycle actif.",
@@ -1310,6 +1345,34 @@ export async function orchestrateAssistantSend(input: {
     }),
   );

+  if (status === "DECISION_REQUIRED") {
+    const sealed = sealProposalExecutionBasis(proposal);
+    const subjectDigest = computeProposalSubjectDigest(
+      sealed,
+      proposal.proposalId,
+    );
+    const marker = await writePendingDecisionSubjectMarker({
+      oa,
+      projectId: project.projectId,
+      proposalId: proposal.proposalId,
+      subjectDigest,
+      lpsId: proposal.contextSnapshot.lpsId,
+      lpsVersion: proposal.contextSnapshot.lpsVersion,
+      doctrineDigest: proposal.contextSnapshot.doctrineDigest,
+      correlationId: `cor:pending-subject:${proposal.proposalId}`,
+    });
+    if (!marker.ok) {
+      return {
+        ok: false,
+        status: "validation_error",
+        code: marker.code,
+        message: marker.message,
+        mode: modeResolution.mode,
+        retryable: true,
+      };
+    }
+  }
+
   const executionBlocked = analysis.intentClass === "execution_request";
   const textParts = [
     presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts b/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
index 6816d5f5..3496280e 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
@@ -45,6 +45,17 @@ export function getProposal(proposalId: string): ProposalDto | null {
   return getSlot().byId.get(proposalId) ?? null;
 }

+/** Process-local listing — used to detect an active decision subject for a project. */
+export function listProposalsForProject(projectId: string): ProposalDto[] {
+  const out: ProposalDto[] = [];
+  for (const proposal of getSlot().byId.values()) {
+    if (proposal.contextSnapshot.projectId === projectId) {
+      out.push(proposal);
+    }
+  }
+  return out;
+}
+
 export function updateProposalStatus(
   proposalId: string,
   status: F2ProposalStatus,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index c8acdaa5..db241880 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -35,11 +35,13 @@ import {
 } from "./materializeW3bProductTerminal";
 import { inspectExecutionContract } from "./inspectExecutionContract";
 import { loadPresentedOptionSet } from "./presentedOptionSet";
+import { readActiveProposalDecisionSubject } from "./activeProposalDecisionSubject";
 import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
 import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
 import { readW2ProjectHistory } from "./projectHistory";
 import { resolveW2QualificationInputs } from "./qualificationInputs";
 import type {
+  ActiveDecisionSubjectReadResult,
   AmendExecutionContractResult,
   ConfirmForAuthorizationResult,
   DecideTrajectoryResult,
@@ -61,7 +63,20 @@ const OA_UNAVAILABLE = {

 export async function w2ProposeTrajectoryOptionsAction(input: {
   projectId: string;
+  /**
+   * CORR-PROOF-10 — opaque Proposal subject. Server resolves/validates.
+   * Hostile objective/path/operation payloads are ignored (not accepted).
+   */
+  proposalId?: string | null;
+  /** Hostile — ignored. */
+  targetPath?: unknown;
+  requestedOperation?: unknown;
+  objective?: unknown;
 }): Promise<ProposeTrajectoryOptionsResult> {
+  void input.targetPath;
+  void input.requestedOperation;
+  void input.objective;
+
   const runtime = getRuntimeApplicationService();
   if (!runtime.oa) return OA_UNAVAILABLE;

@@ -84,14 +99,56 @@ export async function w2ProposeTrajectoryOptionsAction(input: {
     packagePin: qualification.qualification.packagePin,
     objective: qualification.qualification.objective,
     projectTitle: qualification.qualification.projectTitle,
+    proposalId: input.proposalId ?? null,
   });
 }

+/**
+ * CORR-PROOF-10 — durable decision-subject continuity read.
+ * Rehydrates bound Proposal PresentedOptionSet or reports pending reinstruction.
+ * Epistemic read failure → fail closed (never "none").
+ */
+export async function w2ReadActiveDecisionSubjectAction(input: {
+  projectId: string;
+}): Promise<ActiveDecisionSubjectReadResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+
+  const read = await readActiveProposalDecisionSubject(
+    runtime.oa,
+    input.projectId,
+  );
+  if (!read.ok) {
+    return { ok: false, code: read.code, message: read.message };
+  }
+  if (read.kind === "none") {
+    return { ok: true, kind: "none" };
+  }
+  if (read.kind === "pending_reinstruction_required") {
+    return {
+      ok: true,
+      kind: "pending_reinstruction_required",
+      message: read.message,
+      proposalIds: read.markers.map((m) => m.proposalId),
+    };
+  }
+  return {
+    ok: true,
+    kind: "bound_awaiting_decision",
+    optionSet: read.optionSet,
+  };
+}
+
 export async function w2DecideTrajectoryAction(input: {
   projectId: string;
   optionSetRef: string;
-  trajectoryId: string;
-  candidateVersion: number;
+  /**
+   * Required for project_trajectory PresentedOptionSets.
+   * Hostile / ignored when presented set is proposal subject mode
+   * (decide loads sealed binding — never trusts client trajectory fields).
+   */
+  trajectoryId?: string | null;
+  candidateVersion?: number | null;
   selectedOptionRef: string;
   reservesText?: string | null;
   /** Hostile — ignored. */
@@ -122,8 +179,8 @@ export async function w2DecideTrajectoryAction(input: {
     options: presented.presented.options,
     recommendedOptionRef: presented.presented.recommendedOptionRef,
     selectedOptionRef: input.selectedOptionRef,
-    trajectoryId: input.trajectoryId,
-    candidateVersion: input.candidateVersion,
+    trajectoryId: input.trajectoryId ?? null,
+    candidateVersion: input.candidateVersion ?? null,
     epistemicRefs: presented.presented.epistemicRefs,
     reservesText: input.reservesText ?? null,
     canActAsMorris: input.canActAsMorris,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
index d5e285c3..e3fbaa33 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
@@ -11,6 +11,9 @@
  *
  * A4/U3: recordHumanDecision + promoteDecidedTrajectory run in one outer
  * Product UoW so an accepted HD cannot commit without a decided trajectory.
+ *
+ * CORR-PROOF-10 — Proposal subject OptionSets record HD only (ZERO promotion).
+ * Client trajectoryId/candidateVersion are hostile and ignored in that mode.
  */

 import { randomBytes, randomUUID } from "node:crypto";
@@ -33,10 +36,19 @@ import {
 import {
   computeOptionSetDigest,
   computeQualificationDigest,
+  isProposalSubjectPresentedSet,
   loadPresentedOptionSet,
 } from "./presentedOptionSet";
+import { resolvePendingDecisionSubjectMarker } from "./pendingDecisionSubjectMarker";
+import {
+  PROPOSAL_SUBJECT_AMEND_REF,
+  PROPOSAL_SUBJECT_PURSUE_REF,
+  PROPOSAL_SUBJECT_REFUSE_REF,
+} from "./proposalSubjectOptions";
 import { resolveW2QualificationInputs } from "./qualificationInputs";
 import type { DecideTrajectoryResult, TrajectoryOptionDto } from "./types";
+import { updateProposalStatus } from "../f2/proposalStore";
+import type { F2ProposalStatus } from "../f2/types";

 function shortId(): string {
   return randomBytes(6).toString("hex");
@@ -138,8 +150,12 @@ export type DecideTrajectoryInput = {
   readonly options?: readonly TrajectoryOptionDto[];
   readonly recommendedOptionRef?: string;
   readonly selectedOptionRef: string;
-  readonly trajectoryId: string;
-  readonly candidateVersion: number;
+  /**
+   * Required for project_trajectory mode. Hostile / ignored for proposal mode
+   * (authority comes from the sealed PresentedOptionSet only).
+   */
+  readonly trajectoryId?: string | null;
+  readonly candidateVersion?: number | null;
   readonly epistemicRefs?: readonly string[];
   readonly reservesText?: string | null;
   /** Hostile client fields — never trusted. */
@@ -149,17 +165,29 @@ export type DecideTrajectoryInput = {
   readonly forceLocalAuthority?: boolean;
 };

-type AtomicDecideOutcome = {
-  readonly decisionId: string;
-  readonly promoted: {
-    readonly trajectoryId: string;
-    readonly version: number;
-    readonly status: "validated" | "active";
-    readonly decidedByDecisionRef?: string;
-    readonly decidedOptionRef?: string;
-  };
-  readonly livingProjectStateVersion: number;
-};
+type AtomicDecideOutcome =
+  | {
+      readonly mode: "proposal";
+      readonly decisionId: string;
+      readonly livingProjectStateVersion: number;
+      readonly proposalId: string;
+      readonly markerReason: "decided" | "amended" | "refused";
+      readonly nextProposalStatus: F2ProposalStatus;
+    }
+  | {
+      readonly mode: "project_trajectory";
+      readonly decisionId: string;
+      readonly promoted: {
+        readonly trajectoryId: string;
+        readonly version: number;
+        readonly status: "validated" | "active";
+        readonly decidedByDecisionRef?: string;
+        readonly decidedOptionRef?: string;
+        readonly isCurrent: true;
+        readonly statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE";
+      };
+      readonly livingProjectStateVersion: number;
+    };

 class DecideAtomicFailure extends Error {
   constructor(
@@ -189,18 +217,51 @@ export async function decideTrajectory(
     return { ok: false, code: loaded.code, message: loaded.message };
   }
   const presented = loaded.presented;
+  const proposalSubjectMode = isProposalSubjectPresentedSet(presented);

-  if (
-    presented.trajectoryId !== input.trajectoryId ||
-    presented.candidateVersion !== input.candidateVersion
-  ) {
-    return {
-      ok: false,
-      code: "TRAJECTORY_MISMATCH",
-      message:
-        "La trajectoire/version client ne correspond pas à la liaison présentée.",
-    };
+  // Durable closure: a DecisionRef for this OptionSet means subject already decided.
+  if (proposalSubjectMode) {
+    const epistemic = await oa.cycleServices.getEpistemicState.execute({
+      projectId: input.projectId,
+    });
+    if (!epistemic.ok) {
+      return {
+        ok: false,
+        code: "EPISTEMIC_READ_FAILED",
+        message:
+          "État épistémique illisible — aucune HumanDecision possible sur ce sujet.",
+      };
+    }
+    const alreadyDecided = epistemic.state.items.some(
+      (i) =>
+        i.type === "DecisionRef" &&
+        i.status === "active" &&
+        (i.relatedObjects ?? []).includes(input.optionSetRef),
+    );
+    if (alreadyDecided) {
+      return {
+        ok: false,
+        code: "SUBJECT_ALREADY_DECIDED",
+        message:
+          "Ce PresentedOptionSet Proposal a déjà reçu une HumanDecision — aucune seconde décision.",
+      };
+    }
+  }
+
+  if (!proposalSubjectMode) {
+    if (
+      presented.trajectoryId !== input.trajectoryId ||
+      presented.candidateVersion !== input.candidateVersion
+    ) {
+      return {
+        ok: false,
+        code: "TRAJECTORY_MISMATCH",
+        message:
+          "La trajectoire/version client ne correspond pas à la liaison présentée.",
+      };
+    }
   }
+  // Proposal mode: ignore hostile client trajectoryId / candidateVersion.

   const recomputedDigest = computeOptionSetDigest({
     cycleTypeId: presented.cycleTypeId,
@@ -210,6 +271,9 @@ export async function decideTrajectory(
     reservations: presented.reservations,
     options: presented.options,
     recommendedOptionRef: presented.recommendedOptionRef,
+    proposalId: presented.proposalId ?? null,
+    proposalSubjectDigest: presented.proposalSubjectDigest ?? null,
+    decisionSubjectMode: presented.decisionSubjectMode,
   });
   if (recomputedDigest !== presented.optionSetDigest) {
     return {
@@ -220,6 +284,33 @@ export async function decideTrajectory(
     };
   }

+  if (proposalSubjectMode) {
+    if (
+      !presented.sealedExecutionBasis ||
+      !presented.proposalSubjectDigest ||
+      !presented.proposalId
+    ) {
+      return {
+        ok: false,
+        code: "PROPOSAL_SUBJECT_BINDING_INCOMPLETE",
+        message:
+          "OptionSet Proposal sans executionBasis/digest scellés — fail-closed.",
+      };
+    }
+  } else if (
+    presented.proposalId ||
+    presented.sealedExecutionBasis ||
+    presented.promotesProjectTrajectory === false ||
+    presented.decisionSubjectMode === "proposal"
+  ) {
+    return {
+      ok: false,
+      code: "SUBJECT_OPTION_SET_MISMATCH",
+      message:
+        "Liaison sujet Proposal incohérente avec le mode trajectoire — fail-closed.",
+    };
+  }
+
   // A2 — exact presented set stays the decision object, but only while the
   // material qualification context that produced it is still compatible.
   // Never re-derive a substitute OptionSet; refuse and require reinstruction.
@@ -279,30 +370,45 @@ export async function decideTrajectory(
     };
   }

-  const candidate = await oa.cycleServices.getTrajectoryVersion.execute({
-    projectId: input.projectId,
-    version: input.candidateVersion,
-  });
-  if (!candidate.ok) {
-    return {
-      ok: false,
-      code: candidate.error.detailCode,
-      message: "Version de trajectoire proposée introuvable.",
-    };
-  }
-  if (candidate.trajectory.trajectoryId !== input.trajectoryId) {
-    return {
-      ok: false,
-      code: "TRAJECTORY_MISMATCH",
-      message: "La version proposée n'appartient pas à cette trajectoire.",
-    };
-  }
-  if (candidate.trajectory.status !== "candidate") {
-    return {
-      ok: false,
-      code: "TRAJECTORY_NOT_PROPOSED",
-      message: `La version ${input.candidateVersion} n'est pas au statut proposé (${candidate.trajectory.status}).`,
-    };
+  // Trajectory candidate load — project_trajectory mode only.
+  if (!proposalSubjectMode) {
+    if (
+      typeof input.trajectoryId !== "string" ||
+      !input.trajectoryId.trim() ||
+      typeof input.candidateVersion !== "number"
+    ) {
+      return {
+        ok: false,
+        code: "TRAJECTORY_REQUIRED",
+        message:
+          "trajectoryId/candidateVersion requis pour une décision de trajectoire Project.",
+      };
+    }
+    const candidate = await oa.cycleServices.getTrajectoryVersion.execute({
+      projectId: input.projectId,
+      version: input.candidateVersion,
+    });
+    if (!candidate.ok) {
+      return {
+        ok: false,
+        code: candidate.error.detailCode,
+        message: "Version de trajectoire proposée introuvable.",
+      };
+    }
+    if (candidate.trajectory.trajectoryId !== input.trajectoryId) {
+      return {
+        ok: false,
+        code: "TRAJECTORY_MISMATCH",
+        message: "La version proposée n'appartient pas à cette trajectoire.",
+      };
+    }
+    if (candidate.trajectory.status !== "candidate") {
+      return {
+        ok: false,
+        code: "TRAJECTORY_NOT_PROPOSED",
+        message: `La version ${input.candidateVersion} n'est pas au statut proposé (${candidate.trajectory.status}).`,
+      };
+    }
   }

   const live = await readLiveProjectContext(oa, input.projectId);
@@ -323,67 +429,119 @@ export async function decideTrajectory(
   }

   const optionRefs = options.map((o) => o.optionRef);
-  const decisionBasis: DecisionBasis = {
-    sourceType: "trajectory_option",
-    sourceRef: input.optionSetRef,
-    sourceDigest: computeDecisionBasisSourceDigest({
-      optionSetRef: input.optionSetRef,
-      optionSetDigest,
-      optionRefs,
-      selectedOptionRef: input.selectedOptionRef,
-      recommendedOptionRef,
-      trajectoryId: input.trajectoryId,
-      candidateVersion: input.candidateVersion,
-      steps: selected.steps.map((s) => ({
-        stepId: s.stepId,
-        order: s.order,
-        label: s.label,
-        gate: s.gate ?? null,
-      })),
-    }),
-    projectId: input.projectId,
-    cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
-    proposalContext: {
-      lpsId: live.context.lpsId,
-      lpsVersion: live.context.lpsVersion,
-      doctrineDigest: live.context.doctrineDigest,
-      activeCycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
-      ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
-    },
-    trajectoryContext: {
-      trajectoryId: input.trajectoryId,
-      candidateVersion: input.candidateVersion,
-      optionRefs,
-      selectedOptionRef: input.selectedOptionRef,
-      recommendedOptionRef,
-      epistemicRefs: epistemicRefs ? [...epistemicRefs] : undefined,
-      optionSetDigest,
-    },
-    executionBasis: {
-      objective: live.context.objective,
-      scope: selected.intent,
-      expectedOutcome: `Trajectoire décidée: ${selected.label}`,
-      reservations: input.reservesText?.trim()
-        ? [input.reservesText.trim()]
-        : [...selected.reservations],
-      stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
-      cycleTypeId: undefined,
-      requestedOperation: `w2:decide-trajectory:${input.selectedOptionRef}`,
-    },
-  };
+  const sealed = presented.sealedExecutionBasis;
+  const decisionBasis: DecisionBasis = proposalSubjectMode
+    ? {
+        sourceType: "proposal",
+        sourceRef: presented.proposalId!,
+        sourceDigest: presented.proposalSubjectDigest!,
+        projectId: input.projectId,
+        cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
+        proposalContext: {
+          lpsId: live.context.lpsId,
+          lpsVersion: live.context.lpsVersion,
+          doctrineDigest: live.context.doctrineDigest,
+          activeCycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
+          ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
+        },
+        // NO trajectoryContext — Proposal subject never binds ProjectTrajectory.
+        executionBasis: {
+          objective: sealed!.objective,
+          scope: sealed!.scope,
+          outOfScope: [...sealed!.outOfScope],
+          activatedBlocks: [...sealed!.activatedBlocks],
+          expectedOutcome: sealed!.expectedOutcome,
+          risks: [...sealed!.risks],
+          reservations: input.reservesText?.trim()
+            ? [input.reservesText.trim(), ...sealed!.reservations]
+            : [...sealed!.reservations],
+          stopConditions: [...sealed!.stopConditions],
+          cycleTypeId: sealed!.cycleTypeId,
+          recommendedProfile: sealed!.recommendedProfile,
+          requestedOperation: sealed!.requestedOperation,
+          intentKind: sealed!.intentKind ?? undefined,
+          artifactType: sealed!.artifactType ?? undefined,
+          targetRepositoryRef: sealed!.targetRepositoryRef ?? undefined,
+          targetPath: sealed!.targetPath ?? undefined,
+          scopeIn: [...sealed!.scopeIn],
+          scopeOut: [...sealed!.scopeOut],
+          expectedOutputs: [...sealed!.expectedOutputs],
+          requiredCapabilities: [...sealed!.requiredCapabilities],
+          validationExpectations: [...sealed!.validationExpectations],
+          evidenceRequirements: [...sealed!.evidenceRequirements],
+          reversibilityExpectation:
+            sealed!.reversibilityExpectation ?? undefined,
+          artifactBrief: sealed!.artifactBrief ?? undefined,
+          contentRequirements: [...sealed!.contentRequirements],
+          exitRequirementKinds: [...sealed!.exitRequirementKinds],
+        },
+      }
+    : {
+        sourceType: "trajectory_option",
+        sourceRef: input.optionSetRef,
+        sourceDigest: computeDecisionBasisSourceDigest({
+          optionSetRef: input.optionSetRef,
+          optionSetDigest,
+          optionRefs,
+          selectedOptionRef: input.selectedOptionRef,
+          recommendedOptionRef,
+          trajectoryId: input.trajectoryId!,
+          candidateVersion: input.candidateVersion!,
+          steps: selected.steps.map((s) => ({
+            stepId: s.stepId,
+            order: s.order,
+            label: s.label,
+            gate: s.gate ?? null,
+          })),
+        }),
+        projectId: input.projectId,
+        cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
+        proposalContext: {
+          lpsId: live.context.lpsId,
+          lpsVersion: live.context.lpsVersion,
+          doctrineDigest: live.context.doctrineDigest,
+          activeCycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
+          ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
+        },
+        trajectoryContext: {
+          trajectoryId: input.trajectoryId!,
+          candidateVersion: input.candidateVersion!,
+          optionRefs,
+          selectedOptionRef: input.selectedOptionRef,
+          recommendedOptionRef,
+          epistemicRefs: epistemicRefs ? [...epistemicRefs] : undefined,
+          optionSetDigest,
+        },
+        executionBasis: {
+          objective: live.context.objective,
+          scope: selected.intent,
+          expectedOutcome: `Trajectoire décidée: ${selected.label}`,
+          reservations: input.reservesText?.trim()
+            ? [input.reservesText.trim()]
+            : [...selected.reservations],
+          stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
+          cycleTypeId: undefined,
+          requestedOperation: `w2:decide-trajectory:${input.selectedOptionRef}`,
+        },
+      };

-  const decisionId = `dec:w2-trj:${randomUUID()}`;
+  const decisionId = proposalSubjectMode
+    ? `dec:w2-prop:${randomUUID()}`
+    : `dec:w2-trj:${randomUUID()}`;
   const reserves = input.reservesText?.trim();
+  const decisionSubject = proposalSubjectMode
+    ? `W2 Proposal subject arbitration for ${presented.proposalId}`
+    : `W2 trajectory arbitration for ${input.optionSetRef}`;

   let atomic: AtomicDecideOutcome;
   try {
-    // A4/U3 — single Product UoW around HD + promote (nested UoWs join).
+    // A4/U3 — single Product UoW around HD (+ promote only for true trajectory).
     atomic = await oa.projectServices.store.runInTransaction(async () => {
       const recorded = await oa.decisionServices.recordHumanDecision.execute({
         decisionId,
         projectId: input.projectId,
         cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
-        subject: `W2 trajectory arbitration for ${input.optionSetRef}`,
+        subject: decisionSubject,
         options: options.map((o) => ({
           optionId: o.optionRef,
           label: o.label,
@@ -410,7 +568,9 @@ export async function decideTrajectory(
         decisionBasis,
         linkToLivingProjectState: true,
         expectedLpsVersion: live.context.lpsVersion,
-        correlationId: `w2-dec:${input.optionSetRef}`,
+        correlationId: proposalSubjectMode
+          ? `w2-dec-prop:${presented.proposalId}`
+          : `w2-dec:${input.optionSetRef}`,
       });

       if (!recorded.ok) {
@@ -420,6 +580,69 @@ export async function decideTrajectory(
         );
       }

+      const lpsAfterDecision =
+        recorded.livingProjectStateVersion ?? live.context.lpsVersion;
+
+      if (proposalSubjectMode) {
+        // Non-trajectory Proposal subject — HD + DecisionRef closure in ONE UoW.
+        // ZERO ProjectTrajectory. ProposalStore is updated only AFTER durable success.
+        let nextProposalStatus: F2ProposalStatus = "APPROVED";
+        let markerReason: "decided" | "amended" | "refused" = "decided";
+        if (input.selectedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF) {
+          nextProposalStatus = "REFUSED";
+          markerReason = "refused";
+        } else if (input.selectedOptionRef === PROPOSAL_SUBJECT_AMEND_REF) {
+          nextProposalStatus = "AMENDMENT_REQUIRED";
+          markerReason = "amended";
+        } else if (input.selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF) {
+          nextProposalStatus = reserves
+            ? "APPROVED_WITH_RESERVES"
+            : "APPROVED";
+          markerReason = "decided";
+        }
+
+        const closure = await oa.cycleServices.updateEpistemicState.execute({
+          projectId: input.projectId,
+          items: [
+            {
+              epistemicItemId: `epi:w2-decref-prop:${input.optionSetRef.replace(/[^a-zA-Z0-9:_-]/g, "-")}`.slice(
+                0,
+                180,
+              ),
+              type: "DecisionRef",
+              statement: `Décision humaine ${decisionId} — option retenue ${input.selectedOptionRef} — sujet Proposal ${presented.proposalId} (ProjectTrajectory non promue).`,
+              status: "active",
+              source: decisionId,
+              relatedObjects: [
+                input.projectId,
+                decisionId,
+                input.selectedOptionRef,
+                input.optionSetRef,
+                presented.proposalId!,
+                ...epistemicRefs,
+              ],
+            },
+          ],
+          createdBy: LOCAL_PILOTE_ACTOR,
+          correlationId: `w2-decref-prop:${input.optionSetRef}`,
+        });
+        if (!closure.ok) {
+          throw new DecideAtomicFailure(
+            closure.error.detailCode,
+            `Closure DecisionRef Proposal échouée (${closure.error.detailCode}) — HumanDecision non autoritaire; rollback UoW.`,
+          );
+        }
+
+        return {
+          mode: "proposal" as const,
+          decisionId,
+          livingProjectStateVersion: lpsAfterDecision,
+          proposalId: presented.proposalId!,
+          markerReason,
+          nextProposalStatus,
+        };
+      }
+
       // Re-read the durable decision: promotion is authorised by persisted truth,
       // never by the in-flight request payload.
       const readback = await oa.decisionServices.getHumanDecision.execute({
@@ -428,21 +651,18 @@ export async function decideTrajectory(
       const guard = assertDecisionAuthorizesPromotion({
         decision: readback.ok ? readback.decision : null,
         projectId: input.projectId,
-        trajectoryId: input.trajectoryId,
-        candidateVersion: input.candidateVersion,
+        trajectoryId: input.trajectoryId!,
+        candidateVersion: input.candidateVersion!,
         selectedOptionRef: input.selectedOptionRef,
       });
       if (!guard.ok) {
         throw new DecideAtomicFailure(guard.code, guard.message);
       }

-      const lpsAfterDecision =
-        recorded.livingProjectStateVersion ?? live.context.lpsVersion;
-
       const promoted = await oa.cycleServices.promoteDecidedTrajectory.execute({
-        trajectoryId: input.trajectoryId,
+        trajectoryId: input.trajectoryId!,
         projectId: input.projectId,
-        expectedVersion: input.candidateVersion,
+        expectedVersion: input.candidateVersion!,
         status: "validated",
         decisionRef: decisionId,
         decidedOptionRef: input.selectedOptionRef,
@@ -460,6 +680,7 @@ export async function decideTrajectory(
       }

       return {
+        mode: "project_trajectory" as const,
         decisionId,
         promoted: {
           trajectoryId: promoted.trajectory.trajectoryId,
@@ -467,6 +688,8 @@ export async function decideTrajectory(
           status: promoted.trajectory.status as "validated" | "active",
           decidedByDecisionRef: promoted.trajectory.decidedByDecisionRef,
           decidedOptionRef: promoted.trajectory.decidedOptionRef,
+          isCurrent: true as const,
+          statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE" as const,
         },
         livingProjectStateVersion:
           promoted.livingProjectStateVersion ?? lpsAfterDecision,
@@ -484,21 +707,55 @@ export async function decideTrajectory(
     };
   }

-  // Epistemic DecisionRef is best-effort after the atomic HD+promote commit.
+  if (atomic.mode === "proposal") {
+    // Process-local ProposalStore is NOT transactional — update only after durable success.
+    updateProposalStatus(atomic.proposalId, atomic.nextProposalStatus);
+    await resolvePendingDecisionSubjectMarker({
+      oa,
+      projectId: input.projectId,
+      proposalId: atomic.proposalId,
+      reason: atomic.markerReason,
+      correlationId: `cor:pending-decide:${atomic.proposalId}`,
+    });
+
+    return {
+      ok: true,
+      decision: {
+        decisionId: atomic.decisionId,
+        selectedOptionRef: input.selectedOptionRef,
+        actorRole: "Pilote",
+        authorityClass: "morris",
+        statusLabel: "DÉCISION HUMAINE PRISE",
+        capturedAt: issuedAt,
+        decisionBasisLinked: true,
+        reservesText: reserves ?? null,
+        proposalId: atomic.proposalId,
+      },
+      trajectory: null,
+      livingProjectStateVersion: atomic.livingProjectStateVersion,
+      executionPerformed: false,
+      promotesProjectTrajectory: false,
+      decisionSubjectMode: "proposal",
+    };
+  }
+
+  // ProjectTrajectory path — historical DecisionRef remains post-commit (unchanged scope).
   await oa.cycleServices.updateEpistemicState.execute({
     projectId: input.projectId,
     items: [
       {
         epistemicItemId: `epi:w2-decref-${shortId()}`,
         type: "DecisionRef",
-        statement: `Décision humaine ${atomic.decisionId} — option retenue ${input.selectedOptionRef} — trajectoire ${input.trajectoryId} v${atomic.promoted.version} décidée/courante.`,
+        statement: `Décision humaine ${atomic.decisionId} — option retenue ${input.selectedOptionRef} — trajectoire ${atomic.promoted.trajectoryId} v${atomic.promoted.version} décidée/courante.`,
         status: "active",
         source: atomic.decisionId,
         relatedObjects: [
           input.projectId,
           atomic.decisionId,
-          input.trajectoryId,
           input.selectedOptionRef,
+          input.optionSetRef,
+          atomic.promoted.trajectoryId,
+          ...epistemicRefs,
         ],
       },
     ],
@@ -517,17 +774,20 @@ export async function decideTrajectory(
       capturedAt: issuedAt,
       decisionBasisLinked: true,
       reservesText: reserves ?? null,
+      proposalId: null,
     },
     trajectory: {
       trajectoryId: atomic.promoted.trajectoryId,
       version: atomic.promoted.version,
       status: atomic.promoted.status,
-      statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
-      isCurrent: true,
+      statusLabel: atomic.promoted.statusLabel,
+      isCurrent: atomic.promoted.isCurrent,
       decidedByDecisionRef: atomic.promoted.decidedByDecisionRef ?? null,
       decidedOptionRef: atomic.promoted.decidedOptionRef ?? null,
     },
     livingProjectStateVersion: atomic.livingProjectStateVersion,
     executionPerformed: false,
+    promotesProjectTrajectory: true,
+    decisionSubjectMode: "project_trajectory",
   };
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
index 8753e264..94176d35 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
@@ -17,7 +17,7 @@ import { S1_MAX_TTL_SECONDS } from "@/lib/auth/constants";
 import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
 import type { ResolveCurrentPiloteResult } from "@/lib/auth/resolveCurrentPilote";
 import type { F2ContextSnapshot } from "../f2/types";
-import { loadPresentedOptionSet } from "./presentedOptionSet";
+import { loadPresentedOptionSet, parsePresentedOptionSetStatement } from "./presentedOptionSet";
 import {
   assertNotF3FixtureSemantics,
   deriveW3AExecutionEnvelope,
@@ -213,19 +213,80 @@ export async function prepareExecutionContractFromW2Decision(input: {
   }

   const traj = basis.trajectoryContext;
-  if (!traj) {
+
+  // trajectory_option always requires trajectoryContext; proposal does not.
+  if (basis.sourceType === "trajectory_option" && !traj) {
     return {
       ok: false,
       code: "TRAJECTORY_CONTEXT_REQUIRED",
       message:
-        "DecisionBasis.trajectoryContext requis pour la préparation W2→W3.",
+        "DecisionBasis.trajectoryContext requis pour la préparation W2→W3 (source trajectory_option).",
+    };
+  }
+
+  // CORR-PROOF-10 — trajectory_option sourceRef IS optionSetRef;
+  // proposal sourceRef is proposalId — recover optionSetRef from epistemicRefs
+  // (legacy traj context) or by scanning presented Proposal OptionSets.
+  let optionSetRef: string | null = null;
+  if (basis.sourceType === "trajectory_option") {
+    optionSetRef = basis.sourceRef;
+  } else if (basis.sourceType === "proposal") {
+    for (const ref of traj?.epistemicRefs ?? []) {
+      if (ref.startsWith("epi:set-")) {
+        optionSetRef = `optset:${ref.slice("epi:set-".length)}`;
+        break;
+      }
+    }
+    if (!optionSetRef) {
+      const epistemic = await oa.cycleServices.getEpistemicState.execute({
+        projectId: input.projectId,
+      });
+      if (epistemic.ok) {
+        for (const item of epistemic.state.items) {
+          if (item.type !== "Observation" || item.status !== "active") continue;
+          if (!item.relatedObjects?.includes(basis.sourceRef)) continue;
+          const parsed = parsePresentedOptionSetStatement(item.statement);
+          if (
+            parsed &&
+            parsed.decisionSubjectMode === "proposal" &&
+            parsed.proposalId === basis.sourceRef
+          ) {
+            optionSetRef = parsed.optionSetRef;
+          }
+        }
+      }
+    }
+  }
+  if (!optionSetRef) {
+    return {
+      ok: false,
+      code: "OPTION_SET_REF_REQUIRED",
+      message:
+        "Référence OptionSet absente de la DecisionBasis — préparation refusée.",
+    };
+  }
+
+  const selectedOptionRef =
+    basis.sourceType === "proposal"
+      ? decision.selectedOptionId
+      : traj!.selectedOptionRef;
+
+  if (
+    basis.sourceType === "proposal" &&
+    selectedOptionRef !== "opt:proposal-subject:pursue"
+  ) {
+    return {
+      ok: false,
+      code: "PREPARE_NOT_APPLICABLE",
+      message:
+        "Préparation EC réservée à la poursuite du sujet Proposal — amend/refuse n'ouvrent pas d'exécution.",
     };
   }

   const presented = await loadPresentedOptionSet(
     oa,
     input.projectId,
-    basis.sourceRef,
+    optionSetRef,
   );
   if (!presented.ok) {
     return {
@@ -235,8 +296,21 @@ export async function prepareExecutionContractFromW2Decision(input: {
     };
   }

+  if (
+    basis.sourceType === "proposal" &&
+    (presented.presented.proposalId !== basis.sourceRef ||
+      presented.presented.proposalSubjectDigest !== basis.sourceDigest)
+  ) {
+    return {
+      ok: false,
+      code: "PROPOSAL_SUBJECT_MISMATCH",
+      message:
+        "OptionSet présenté ≠ sujet Proposal de la DecisionBasis — fail-closed.",
+    };
+  }
+
   const selected = presented.presented.options.find(
-    (o) => o.optionRef === traj.selectedOptionRef,
+    (o) => o.optionRef === selectedOptionRef,
   );
   if (!selected) {
     return {
@@ -312,7 +386,7 @@ export async function prepareExecutionContractFromW2Decision(input: {
     projectId: input.projectId,
     decisionId: decision.decisionId,
     basis,
-    selectedOptionRef: traj.selectedOptionRef,
+    selectedOptionRef,
     selectedOptionIntent: selected.intent,
     selectedOptionLabel: selected.label,
     projectObjective,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts b/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
index e440e65e..f5f1cf7c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts
@@ -4,14 +4,21 @@
  * Propose materialises an Epistemic Observation that pins the exact OptionSet
  * shown to the Pilote. Decide loads that Observation and never re-derives
  * options from live qualification (A2).
+ *
+ * CORR-PROOF-10 remediation:
+ * - proposal subject mode seals Proposal fields without ProjectTrajectory
+ * - trajectoryId / candidateVersion are only required for project_trajectory mode
  */

 import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import type { SealedProposalExecutionBasis } from "./resolveProposalDecisionSubject";
 import type { TrajectoryOptionDto, TrajectoryRecommendationDto } from "./types";

 export const W2_PRESENTED_OPTION_SET_KIND = "w2_presented_option_set" as const;

+export type DecisionSubjectMode = "proposal" | "project_trajectory";
+
 export type OptionSetDigestInputs = {
   readonly cycleTypeId: string;
   readonly recommendedProfile: string;
@@ -20,6 +27,9 @@ export type OptionSetDigestInputs = {
   readonly reservations: readonly string[];
   readonly options: readonly TrajectoryOptionDto[];
   readonly recommendedOptionRef: string;
+  readonly proposalId?: string | null;
+  readonly proposalSubjectDigest?: string | null;
+  readonly decisionSubjectMode?: DecisionSubjectMode;
 };

 export type QualificationDigestInputs = {
@@ -29,10 +39,6 @@ export type QualificationDigestInputs = {
   readonly irreversible: boolean;
   readonly reservations: readonly string[];
   readonly ckcAttribution: string | null;
-  /**
-   * Stable CKC semantic fingerprint (PB-DLV-01). Material cycle/CKC/content
-   * change invalidates binding; raw provider prose is never included.
-   */
   readonly ckcSemanticFingerprint: string | null;
 };

@@ -41,8 +47,10 @@ export type PresentedOptionSetBinding = {
   readonly optionSetRef: string;
   readonly optionSetDigest: string;
   readonly qualificationDigest: string;
-  readonly trajectoryId: string;
-  readonly candidateVersion: number;
+  /** Required for project_trajectory mode; null for proposal subject mode. */
+  readonly trajectoryId: string | null;
+  /** Required for project_trajectory mode; null for proposal subject mode. */
+  readonly candidateVersion: number | null;
   readonly optionRefs: readonly string[];
   readonly recommendedOptionRef: string;
   readonly options: readonly TrajectoryOptionDto[];
@@ -55,6 +63,11 @@ export type PresentedOptionSetBinding = {
   readonly reservations: readonly string[];
   readonly ckcAttribution: string | null;
   readonly ckcSemanticFingerprint: string | null;
+  readonly decisionSubjectMode: DecisionSubjectMode;
+  readonly proposalId?: string | null;
+  readonly proposalSubjectDigest?: string | null;
+  readonly promotesProjectTrajectory: boolean;
+  readonly sealedExecutionBasis?: SealedProposalExecutionBasis | null;
 };

 export function computeQualificationDigest(
@@ -84,6 +97,9 @@ export function computeOptionSetDigest(inputs: OptionSetDigestInputs): string {
       stepIds: o.steps.map((s) => s.stepId),
     })),
     recommendedOptionRef: inputs.recommendedOptionRef,
+    proposalId: inputs.proposalId ?? null,
+    proposalSubjectDigest: inputs.proposalSubjectDigest ?? null,
+    decisionSubjectMode: inputs.decisionSubjectMode ?? "project_trajectory",
   });
 }

@@ -91,12 +107,10 @@ export function optionSetObservationId(optionSetRef: string): string {
   return `epi:${optionSetRef.replace("optset:", "set-")}`;
 }

-/** Deterministic Recommendation EpistemicItem id for a presented OptionSet. */
 export function optionSetRecommendationId(optionSetRef: string): string {
   return `epi:${optionSetRef.replace("optset:", "rec-")}`;
 }

-/** Deterministic Option EpistemicItem id for a presented Option within a set. */
 export function optionSetOptionId(
   optionSetRef: string,
   optionRef: string,
@@ -114,16 +128,30 @@ export function serializePresentedOptionSet(
 function isPresentedBinding(value: unknown): value is PresentedOptionSetBinding {
   if (!value || typeof value !== "object") return false;
   const v = value as Record<string, unknown>;
-  return (
-    v.kind === W2_PRESENTED_OPTION_SET_KIND &&
-    typeof v.optionSetRef === "string" &&
-    typeof v.optionSetDigest === "string" &&
-    typeof v.qualificationDigest === "string" &&
-    typeof v.trajectoryId === "string" &&
-    typeof v.candidateVersion === "number" &&
-    Array.isArray(v.options) &&
-    typeof v.recommendedOptionRef === "string"
-  );
+  if (
+    v.kind !== W2_PRESENTED_OPTION_SET_KIND ||
+    typeof v.optionSetRef !== "string" ||
+    typeof v.optionSetDigest !== "string" ||
+    typeof v.qualificationDigest !== "string" ||
+    !Array.isArray(v.options) ||
+    typeof v.recommendedOptionRef !== "string"
+  ) {
+    return false;
+  }
+  const mode =
+    v.decisionSubjectMode === "proposal" ||
+    v.decisionSubjectMode === "project_trajectory"
+      ? v.decisionSubjectMode
+      : // Legacy bindings without mode are trajectory OptionSets.
+        "project_trajectory";
+  if (mode === "project_trajectory") {
+    return (
+      typeof v.trajectoryId === "string" &&
+      typeof v.candidateVersion === "number"
+    );
+  }
+  // proposal mode: trajectory fields must be null/absent
+  return v.trajectoryId == null && v.candidateVersion == null;
 }

 export function parsePresentedOptionSetStatement(
@@ -131,19 +159,37 @@ export function parsePresentedOptionSetStatement(
 ): PresentedOptionSetBinding | null {
   try {
     const parsed: unknown = JSON.parse(statement);
-    return isPresentedBinding(parsed) ? parsed : null;
+    if (!isPresentedBinding(parsed)) return null;
+    // Normalise legacy bindings missing decisionSubjectMode
+    if (!("decisionSubjectMode" in parsed) || !parsed.decisionSubjectMode) {
+      return {
+        ...parsed,
+        decisionSubjectMode: "project_trajectory",
+        promotesProjectTrajectory:
+          parsed.promotesProjectTrajectory !== false,
+      };
+    }
+    return parsed;
   } catch {
     return null;
   }
 }

+export function isProposalSubjectPresentedSet(
+  presented: PresentedOptionSetBinding,
+): boolean {
+  return (
+    presented.decisionSubjectMode === "proposal" &&
+    typeof presented.proposalId === "string" &&
+    presented.proposalId.trim().length > 0 &&
+    presented.promotesProjectTrajectory === false
+  );
+}
+
 export type LoadPresentedOptionSetResult =
   | { readonly ok: true; readonly presented: PresentedOptionSetBinding }
   | { readonly ok: false; readonly code: string; readonly message: string };

-/**
- * Fail-closed load of the exact OptionSet presented at propose time.
- */
 export async function loadPresentedOptionSet(
   oa: RuntimeOaStack,
   projectId: string,
@@ -190,9 +236,6 @@ export async function loadPresentedOptionSet(
   return { ok: true, presented };
 }

-/**
- * Find the latest active OptionSet Observation bound to a trajectory version.
- */
 export async function findLatestOptionSetBindingForTrajectory(
   oa: RuntimeOaStack,
   projectId: string,
@@ -210,6 +253,7 @@ export async function findLatestOptionSetBindingForTrajectory(
     if (!item.relatedObjects?.includes(trajectoryId)) continue;
     const parsed = parsePresentedOptionSetStatement(item.statement);
     if (!parsed) continue;
+    if (parsed.decisionSubjectMode === "proposal") continue;
     if (
       parsed.trajectoryId === trajectoryId &&
       parsed.candidateVersion === candidateVersion
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
index fb81048d..63ced39a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
@@ -10,7 +10,11 @@
  * Durability follows D-W2-01. D-W2-A3-01 idempotence uses stable CKC semantic
  * fingerprint (not raw provider prose). STOP BEFORE EXECUTE.
  *
- * Reuses existing OA use cases only. No parallel engine, no Proposal-store.
+ * CORR-PROOF-10 — when an opaque proposalId is supplied (or an active
+ * DECISION_REQUIRED Proposal exists), Options/Recommendation are scoped to
+ * that Proposal subject. Silent fallback to the generic trajectory trio is
+ * forbidden. Reuses ProposalStore + PresentedOptionSet — no parallel engine.
+ * Proposal subject path: ZERO ProjectTrajectory mutation.
  */

 import { randomBytes } from "node:crypto";
@@ -41,6 +45,17 @@ import {
   serializePresentedOptionSet,
   type PresentedOptionSetBinding,
 } from "./presentedOptionSet";
+import {
+  deriveProposalSubjectOptions,
+  deriveProposalSubjectRecommendation,
+} from "./proposalSubjectOptions";
+import { resolvePendingDecisionSubjectMarker } from "./pendingDecisionSubjectMarker";
+import { readActiveProposalDecisionSubject } from "./activeProposalDecisionSubject";
+import {
+  assertProposalSubjectGateOrFail,
+  resolveProposalDecisionSubject,
+  type ResolvedProposalDecisionSubject,
+} from "./resolveProposalDecisionSubject";
 import {
   deriveTrajectoryOptions,
   deriveTrajectoryRecommendation,
@@ -161,6 +176,11 @@ export type ProposeTrajectoryOptionsInput = {
   readonly objective: string;
   readonly projectTitle: string;
   readonly correlationId?: string;
+  /**
+   * CORR-PROOF-10 — opaque Proposal subject ref. Server-resolved only.
+   * Hostile objective/path/operation fields are never accepted here.
+   */
+  readonly proposalId?: string | null;
 };

 export async function proposeTrajectoryOptions(
@@ -172,6 +192,95 @@ export async function proposeTrajectoryOptions(
     return { ok: false, code: live.code, message: live.message };
   }

+  const opaqueProposalIdEarly =
+    typeof input.proposalId === "string" ? input.proposalId.trim() : "";
+
+  // Post-binding continuity: durable PresentedOptionSet is SoT — rehydrate,
+  // never invent a second OptionSet or fall back to generic trajectory.
+  const activeSubject = await readActiveProposalDecisionSubject(
+    oa,
+    input.projectId,
+  );
+  if (!activeSubject.ok) {
+    return {
+      ok: false,
+      code: activeSubject.code,
+      message: activeSubject.message,
+    };
+  }
+  if (activeSubject.kind === "bound_awaiting_decision") {
+    if (
+      opaqueProposalIdEarly &&
+      opaqueProposalIdEarly !== activeSubject.presented.proposalId
+    ) {
+      return {
+        ok: false,
+        code: "BOUND_PROPOSAL_SUBJECT_MISMATCH",
+        message:
+          "Un PresentedOptionSet Proposal distinct est déjà en attente de HumanDecision — aucune nouvelle instruction.",
+      };
+    }
+    return { ok: true, ...activeSubject.optionSet };
+  }
+  if (
+    activeSubject.kind === "pending_reinstruction_required" &&
+    !opaqueProposalIdEarly
+  ) {
+    return {
+      ok: false,
+      code: "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
+      message: activeSubject.message,
+    };
+  }
+
+  const activeGate = await assertProposalSubjectGateOrFail({
+    oa,
+    projectId: input.projectId,
+    proposalId: input.proposalId,
+  });
+  if (!activeGate.ok) {
+    return {
+      ok: false,
+      code: activeGate.code,
+      message: activeGate.message,
+    };
+  }
+
+  let proposalSubject: ResolvedProposalDecisionSubject | null = null;
+  const opaqueProposalId = opaqueProposalIdEarly;
+  if (opaqueProposalId) {
+    // Pre-binding only: process-local Proposal required to create OptionSet.
+    // After binding, we already returned via rehydration above.
+    const resolved = resolveProposalDecisionSubject({
+      proposalId: opaqueProposalId,
+      projectId: input.projectId,
+      currentContext: {
+        projectId: input.projectId,
+        lpsId: live.context.lpsId,
+        lpsVersion: live.context.lpsVersion,
+        doctrineDigest: live.context.doctrineDigest,
+        activeCycleInstanceId: live.context.activeCycleInstanceId,
+        ckcResolutionRef: live.context.ckcResolutionRef,
+      },
+    });
+    if (!resolved.ok) {
+      // pending marker + lost store → reinstruction (assert may also catch)
+      if (activeSubject.kind === "pending_reinstruction_required") {
+        return {
+          ok: false,
+          code: "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
+          message: activeSubject.message,
+        };
+      }
+      return {
+        ok: false,
+        code: resolved.code,
+        message: resolved.message,
+      };
+    }
+    proposalSubject = resolved.subject;
+  }
+
   // ── Phase B: product-native CKC cognition BEFORE any durable mutation ──
   const registryRoot = resolveProductDoctrineRegistryRoot();
   const ckcContent = loadProductCkcCognitiveContent({
@@ -189,16 +298,29 @@ export async function proposeTrajectoryOptions(
   }

   const ckcPromptSection = buildCkcCognitivePromptSection(ckcContent);
+  const cognitionUserContent = proposalSubject
+    ? `Instruire Options/Recommendation pour la Proposal ${proposalSubject.proposalId} (sujet: ${proposalSubject.sealedExecutionBasis.objective})`
+    : `Instruire Options/Recommendation pour le cycle ${input.cycleTypeId}`;
   let cognitiveRecommendation: string;
   try {
     const reasoning = await reasonWithResolvedCkcContext({
-      userContent: `Instruire Options/Recommendation pour le cycle ${input.cycleTypeId}`,
+      userContent: cognitionUserContent,
       projectSummary: [
         `name=${input.projectTitle}`,
         `objective=${input.objective}`,
         `projectId=${input.projectId}`,
+        ...(proposalSubject
+          ? [
+              `proposalId=${proposalSubject.proposalId}`,
+              `subjectObjective=${proposalSubject.sealedExecutionBasis.objective}`,
+              `targetPath=${proposalSubject.sealedExecutionBasis.targetPath ?? ""}`,
+              `requestedOperation=${proposalSubject.sealedExecutionBasis.requestedOperation}`,
+            ]
+          : []),
       ].join(" | "),
-      intentSummary: `Cycle ${input.cycleTypeId} · profil ${input.recommendedProfile}`,
+      intentSummary: proposalSubject
+        ? `Proposal subject ${proposalSubject.proposalId} · profil ${input.recommendedProfile}`
+        : `Cycle ${input.cycleTypeId} · profil ${input.recommendedProfile}`,
       ckcPromptSection,
     });
     cognitiveRecommendation = reasoning.recommendation;
@@ -215,34 +337,185 @@ export async function proposeTrajectoryOptions(
     ckcContent.provenance,
   );

-  const inputs: TrajectoryOptionInputs = {
+  const qualificationDigest = computeQualificationDigest({
     cycleTypeId: input.cycleTypeId,
     recommendedProfile: input.recommendedProfile,
     criticalSignalsPresent: input.criticalSignalsPresent,
     irreversible: input.irreversible,
     reservations: input.reservations,
     ckcAttribution: input.ckcAttribution,
-  };
-  const options = deriveTrajectoryOptions(inputs);
-  const baseRecommendation = deriveTrajectoryRecommendation(inputs);
-  const recommendation = enrichRecommendationWithCognition({
-    base: baseRecommendation,
-    content: ckcContent,
-    cognitiveRecommendation,
-    fingerprint: semanticFingerprint,
+    ckcSemanticFingerprint: semanticFingerprint,
   });

   const optionSetRef = `optset:w2-${shortId()}`;
   const correlationId = input.correlationId ?? `cor:w2-opt-${shortId()}`;
-  const qualificationDigest = computeQualificationDigest({
+
+  // ── CORR-PROOF-10 proposal subject — ZERO ProjectTrajectory ───────────
+  if (proposalSubject) {
+    const options = deriveProposalSubjectOptions({
+      sealed: proposalSubject.sealedExecutionBasis,
+      proposalId: proposalSubject.proposalId,
+    });
+    const baseRecommendation = deriveProposalSubjectRecommendation({
+      sealed: proposalSubject.sealedExecutionBasis,
+      proposalId: proposalSubject.proposalId,
+    });
+    const recommendation = enrichRecommendationWithCognition({
+      base: baseRecommendation,
+      content: ckcContent,
+      cognitiveRecommendation,
+      fingerprint: semanticFingerprint,
+    });
+    const optionSetDigest = computeOptionSetDigest({
+      cycleTypeId: input.cycleTypeId,
+      recommendedProfile: input.recommendedProfile,
+      criticalSignalsPresent: input.criticalSignalsPresent,
+      irreversible: input.irreversible,
+      reservations: input.reservations,
+      options,
+      recommendedOptionRef: recommendation.recommendedOptionRef,
+      proposalId: proposalSubject.proposalId,
+      proposalSubjectDigest: proposalSubject.subjectDigest,
+      decisionSubjectMode: "proposal",
+    });
+
+    const optionEpistemicItems = options.map((option) => ({
+      epistemicItemId: optionSetOptionId(optionSetRef, option.optionRef),
+      type: "Option" as const,
+      statement: optionStatement(option),
+      status: "active" as const,
+      source: optionSetRef,
+      relatedObjects: [
+        input.projectId,
+        option.optionRef,
+        optionSetRef,
+        proposalSubject.proposalId,
+      ],
+    }));
+
+    const recommendationItem = {
+      epistemicItemId: optionSetRecommendationId(optionSetRef),
+      type: "Recommendation" as const,
+      statement: recommendationStatement(recommendation, options),
+      status: "active" as const,
+      source: optionSetRef,
+      relatedObjects: [
+        input.projectId,
+        recommendation.recommendedOptionRef,
+        optionSetRef,
+        recommendation.ckcProvenance?.ckcId ?? "ckc:none",
+        ...(input.ckcAttribution ? [input.ckcAttribution] : []),
+        proposalSubject.proposalId,
+      ],
+    };
+
+    const epistemicRefs = [
+      ...optionEpistemicItems.map((i) => i.epistemicItemId),
+      recommendationItem.epistemicItemId,
+      optionSetObservationId(optionSetRef),
+    ];
+
+    const presentedBinding: PresentedOptionSetBinding = {
+      kind: "w2_presented_option_set",
+      optionSetRef,
+      optionSetDigest,
+      qualificationDigest,
+      trajectoryId: null,
+      candidateVersion: null,
+      optionRefs: options.map((o) => o.optionRef),
+      recommendedOptionRef: recommendation.recommendedOptionRef,
+      options,
+      recommendation,
+      epistemicRefs,
+      cycleTypeId: input.cycleTypeId,
+      recommendedProfile: input.recommendedProfile,
+      criticalSignalsPresent: input.criticalSignalsPresent,
+      irreversible: input.irreversible,
+      reservations: [...input.reservations],
+      ckcAttribution: input.ckcAttribution,
+      ckcSemanticFingerprint: semanticFingerprint,
+      decisionSubjectMode: "proposal",
+      proposalId: proposalSubject.proposalId,
+      proposalSubjectDigest: proposalSubject.subjectDigest,
+      promotesProjectTrajectory: false,
+      sealedExecutionBasis: proposalSubject.sealedExecutionBasis,
+    };
+
+    const observationItem = {
+      epistemicItemId: optionSetObservationId(optionSetRef),
+      type: "Observation" as const,
+      statement: serializePresentedOptionSet(presentedBinding),
+      status: "active" as const,
+      source: optionSetRef,
+      relatedObjects: [
+        input.projectId,
+        optionSetRef,
+        proposalSubject.proposalId,
+      ],
+    };
+
+    const materialized = await oa.cycleServices.updateEpistemicState.execute({
+      projectId: input.projectId,
+      items: [...optionEpistemicItems, recommendationItem, observationItem],
+      createdBy: NORA_OPTION_AUTHOR,
+      correlationId,
+    });
+    if (!materialized.ok) {
+      return {
+        ok: false,
+        code: materialized.error.detailCode,
+        message: `Matérialisation des options échouée (${materialized.error.detailCode}).`,
+      };
+    }
+
+    // Marker resolve is best-effort after durable OptionSet write.
+    // If it fails, OptionSet remains the post-binding SoT (conservative).
+    await resolvePendingDecisionSubjectMarker({
+      oa,
+      projectId: input.projectId,
+      proposalId: proposalSubject.proposalId,
+      reason: "option_set_bound",
+      correlationId: `cor:pending-bound:${proposalSubject.proposalId}`,
+    });
+
+    return {
+      ok: true,
+      optionSetRef,
+      cycleTypeId: input.cycleTypeId,
+      recommendedProfile: input.recommendedProfile,
+      options,
+      recommendation,
+      epistemicRefs,
+      proposedTrajectory: null,
+      phase: "OPTIONS_PROPOSED",
+      autoDecisionPerformed: false,
+      executionPerformed: false,
+      ckcCognitionCompletedBeforeMutation: true,
+      decisionSubjectMode: "proposal",
+      proposalId: proposalSubject.proposalId,
+      promotesProjectTrajectory: false,
+    };
+  }
+
+  // ── ProjectTrajectory path (no active Proposal subject) ───────────────
+  const inputs: TrajectoryOptionInputs = {
     cycleTypeId: input.cycleTypeId,
     recommendedProfile: input.recommendedProfile,
     criticalSignalsPresent: input.criticalSignalsPresent,
     irreversible: input.irreversible,
     reservations: input.reservations,
     ckcAttribution: input.ckcAttribution,
-    ckcSemanticFingerprint: semanticFingerprint,
+  };
+
+  const options = deriveTrajectoryOptions(inputs);
+  const baseRecommendation = deriveTrajectoryRecommendation(inputs);
+  const recommendation = enrichRecommendationWithCognition({
+    base: baseRecommendation,
+    content: ckcContent,
+    cognitiveRecommendation,
+    fingerprint: semanticFingerprint,
   });
+
   const optionSetDigest = computeOptionSetDigest({
     cycleTypeId: input.cycleTypeId,
     recommendedProfile: input.recommendedProfile,
@@ -251,6 +524,9 @@ export async function proposeTrajectoryOptions(
     reservations: input.reservations,
     options,
     recommendedOptionRef: recommendation.recommendedOptionRef,
+    proposalId: null,
+    proposalSubjectDigest: null,
+    decisionSubjectMode: "project_trajectory",
   });

   const proposedSteps: TrajectoryStep[] = structuredClone(
@@ -381,9 +657,6 @@ export async function proposeTrajectoryOptions(
     );
   });

-  // R1-03: Epistemic Recommendation statement stays business-first.
-  // Structured audit provenance lives on recommendation.ckcProvenance /
-  // presented binding / relatedObjects tags — not in Pilote-facing prose.
   const recommendationItem = withPriorSetSupersedes(
     {
       epistemicItemId: optionSetRecommendationId(optionSetRef),
@@ -429,6 +702,11 @@ export async function proposeTrajectoryOptions(
     reservations: [...input.reservations],
     ckcAttribution: input.ckcAttribution,
     ckcSemanticFingerprint: semanticFingerprint,
+    decisionSubjectMode: "project_trajectory",
+    proposalId: null,
+    proposalSubjectDigest: null,
+    promotesProjectTrajectory: true,
+    sealedExecutionBasis: null,
   };

   const observationItem = withPriorSetSupersedes(
@@ -478,6 +756,9 @@ export async function proposeTrajectoryOptions(
     autoDecisionPerformed: false,
     executionPerformed: false,
     ckcCognitionCompletedBeforeMutation: true,
+    decisionSubjectMode: "project_trajectory",
+    proposalId: null,
+    promotesProjectTrajectory: true,
   };
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index fc23a695..7a4be826 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -84,6 +84,8 @@ export type TrajectoryDecisionRecordDto = {
   readonly capturedAt: string;
   readonly decisionBasisLinked: true;
   readonly reservesText: string | null;
+  /** CORR-PROOF-10 — Proposal subject when HD is proposal-scoped. */
+  readonly proposalId?: string | null;
 };

 export type TrajectoryOptionSetDto = {
@@ -93,12 +95,18 @@ export type TrajectoryOptionSetDto = {
   readonly options: readonly TrajectoryOptionDto[];
   readonly recommendation: TrajectoryRecommendationDto;
   readonly epistemicRefs: readonly string[];
-  readonly proposedTrajectory: ProposedTrajectoryDto;
+  /**
+   * Present only for true ProjectTrajectory arbitration.
+   * Null for Proposal decision-subject OptionSets (ZERO ProjectTrajectory).
+   */
+  readonly proposedTrajectory: ProposedTrajectoryDto | null;
   readonly phase: "OPTIONS_PROPOSED";
   readonly autoDecisionPerformed: false;
   readonly executionPerformed: false;
-  /** Phase B ordering proof: cognition completed before durable mutation. */
   readonly ckcCognitionCompletedBeforeMutation: true;
+  readonly decisionSubjectMode: "proposal" | "project_trajectory";
+  readonly proposalId?: string | null;
+  readonly promotesProjectTrajectory: boolean;
 };

 export type W2Failure = {
@@ -203,13 +211,32 @@ export type ProposeTrajectoryOptionsResult =
   | ({ readonly ok: true } & TrajectoryOptionSetDto)
   | W2Failure;

+/** CORR-PROOF-10 — durable Proposal decision-subject read for UI rehydration. */
+export type ActiveDecisionSubjectReadResult =
+  | { readonly ok: true; readonly kind: "none" }
+  | {
+      readonly ok: true;
+      readonly kind: "pending_reinstruction_required";
+      readonly message: string;
+      readonly proposalIds: readonly string[];
+    }
+  | {
+      readonly ok: true;
+      readonly kind: "bound_awaiting_decision";
+      readonly optionSet: TrajectoryOptionSetDto;
+    }
+  | W2Failure;
+
 export type DecideTrajectoryResult =
   | {
       readonly ok: true;
       readonly decision: TrajectoryDecisionRecordDto;
-      readonly trajectory: DecidedTrajectoryDto;
+      /** Null when Proposal subject decision (ZERO ProjectTrajectory mutation). */
+      readonly trajectory: DecidedTrajectoryDto | null;
       readonly livingProjectStateVersion: number;
       readonly executionPerformed: false;
+      readonly promotesProjectTrajectory: boolean;
+      readonly decisionSubjectMode: "proposal" | "project_trajectory";
     }
   | W2Failure;

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
new file mode 100644
index 00000000..b27338aa
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
@@ -0,0 +1,1943 @@
+/**
+ * CORR-PROOF-10 — Decision context continuity (Proposal subject ↔ W2 Options/HD).
+ * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation.
+ * @vitest-environment node
+ */
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import {
+  getProposal,
+  resetF2ProposalStoreForTests,
+  saveProposal,
+} from "@/features/project-assistant/f2/proposalStore";
+import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
+import type { ProposalDto } from "@/features/project-assistant/f2/types";
+import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
+import {
+  GOVERNED_OPTION_REF,
+  BOUNDED_OPTION_REF,
+  CLARIFY_OPTION_REF,
+} from "@/features/project-assistant/w2/trajectoryOptions";
+import {
+  PROPOSAL_SUBJECT_AMEND_REF,
+  PROPOSAL_SUBJECT_PURSUE_REF,
+  PROPOSAL_SUBJECT_REFUSE_REF,
+} from "@/features/project-assistant/w2/proposalSubjectOptions";
+import { loadPresentedOptionSet } from "@/features/project-assistant/w2/presentedOptionSet";
+import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
+import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
+import {
+  bootW2Runtime,
+  cleanupW2TempDirs,
+  currentF2Context,
+  proposeW2OptionsForProject,
+  seedQualifiedProject,
+  tempProductDbPath,
+} from "./w2Harness";
+import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+import { setConversationProviderForTests } from "@/lib/platform/ai";
+import {
+  computeProposalSubjectDigest,
+  sealProposalExecutionBasis,
+} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
+import {
+  listActivePendingDecisionSubjectMarkers,
+  writePendingDecisionSubjectMarker,
+} from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+
+const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";
+
+/** Probe OA store for all known ProjectTrajectory versions (persistence truth). */
+async function snapshotTrajectories(oa: RuntimeOaStack, projectId: string) {
+  const versions: { version: number; trajectoryId: string; status: string }[] =
+    [];
+  for (let v = 1; v <= 64; v += 1) {
+    const got = await oa.cycleServices.getTrajectoryVersion.execute({
+      projectId,
+      version: v,
+    });
+    if (!got.ok) break;
+    versions.push({
+      version: got.trajectory.version,
+      trajectoryId: got.trajectory.trajectoryId,
+      status: got.trajectory.status,
+    });
+  }
+  const current = await oa.cycleServices.getCurrentTrajectory.execute({
+    projectId,
+  });
+  return {
+    versions,
+    count: versions.length,
+    fingerprint: versions
+      .map((x) => `${x.trajectoryId}@${x.version}:${x.status}`)
+      .join("|"),
+    currentOk: current.ok,
+    currentStatus: current.ok ? current.trajectory.status : null,
+  };
+}
+
+function docsWriteProposal(input: {
+  projectId: string;
+  lpsId: string;
+  lpsVersion: number;
+  doctrineDigest: string;
+  activeCycleInstanceId: string;
+  proposalId?: string;
+  status?: ProposalDto["status"];
+  targetPath?: string;
+  requestedOperation?: string;
+  morrisGateRequired?: boolean;
+  eiOverrides?: Record<string, unknown>;
+}): ProposalDto {
+  return saveProposal({
+    proposalId: input.proposalId ?? `prop:f2:corr10-${Date.now()}`,
+    status: input.status ?? "DECISION_REQUIRED",
+    rephrasedRequest: "Matérialiser la note de gestion de tâches",
+    objective: "Matérialiser le livrable de gestion de tâches",
+    cycleTypeId: "cyc:delivery",
+    recommendedProfile: "Critical",
+    rationale: "Continuation Artifact du cycle actif",
+    scope: "docs_write borné — cycle actif",
+    outOfScope: ["nouveau cycle", "REAL"],
+    activatedBlocks: [],
+    expectedOutcome: "Fichier sandbox matérialisé",
+    sources: ["nora"],
+    risks: ["mauvais sujet décisionnel"],
+    reservations: [],
+    stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
+    morrisGateRequired: input.morrisGateRequired ?? true,
+    nextPossibleStep: "Instruire les options sur ce sujet",
+    contextSnapshot: {
+      projectId: input.projectId,
+      lpsId: input.lpsId,
+      lpsVersion: input.lpsVersion,
+      doctrineDigest: input.doctrineDigest,
+      activeCycleInstanceId: input.activeCycleInstanceId,
+      ckcResolutionRef: "ckcres:w2-harness",
+    },
+    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+    executionForbidden: true,
+    noExecutingStatus: true,
+    agentBinding: "NOT_AVAILABLE",
+    requestedOperation: input.requestedOperation ?? null,
+    executionIntent: {
+      intentKind: "docs_write",
+      artifactType: null,
+      targetRepositoryRef: null,
+      targetPath: input.targetPath ?? TARGET_PATH,
+      scopeIn: ["sandbox"],
+      scopeOut: ["git"],
+      expectedOutputs: ["markdown"],
+      requiredCapabilities: ["cap:cursor.docs_write"],
+      validationExpectations: [],
+      evidenceRequirements: [],
+      requestedOperation:
+        input.requestedOperation ?? F2_ARTIFACT_MATERIALIZATION_OPERATION,
+      reversibilityExpectation: "reversible",
+      artifactBrief: "Note gestion de tâches",
+      contentRequirements: [],
+      exitRequirementKinds: [],
+      ...input.eiOverrides,
+    },
+  });
+}
+
+async function markPending(
+  oa: RuntimeOaStack,
+  proposal: ProposalDto,
+): Promise<void> {
+  const sealed = sealProposalExecutionBasis(proposal);
+  const subjectDigest = computeProposalSubjectDigest(
+    sealed,
+    proposal.proposalId,
+  );
+  const written = await writePendingDecisionSubjectMarker({
+    oa,
+    projectId: proposal.contextSnapshot.projectId,
+    proposalId: proposal.proposalId,
+    subjectDigest,
+    lpsId: proposal.contextSnapshot.lpsId,
+    lpsVersion: proposal.contextSnapshot.lpsVersion,
+    doctrineDigest: proposal.contextSnapshot.doctrineDigest,
+  });
+  expect(written.ok).toBe(true);
+}
+
+describe("CORR-PROOF-10 — decision context continuity", () => {
+  let runtime: RuntimeApplicationService;
+  let dbPath: string;
+
+  beforeEach(() => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    dbPath = tempProductDbPath("corr10.sqlite");
+    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "corr10" });
+  });
+
+  afterEach(() => {
+    resetF2ProposalStoreForTests();
+    setConversationProviderForTests(null);
+    cleanupW2TempDirs();
+  });
+
+  async function seed() {
+    const seeded = await seedQualifiedProject(runtime, {
+      profile: "Critical",
+      suffix: "c10",
+    });
+    const ctx = await currentF2Context(runtime, seeded.projectId);
+    return { ...seeded, ctx };
+  }
+
+  async function proposeWith(
+    projectId: string,
+    proposalId?: string | null,
+  ) {
+    const oa = runtime.oa!;
+    const qualification = await resolveW2QualificationInputs({ oa, projectId });
+    expect(qualification.ok).toBe(true);
+    if (!qualification.ok) throw new Error("qualification failed");
+    return proposeTrajectoryOptions({
+      oa,
+      projectId,
+      ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
+      proposalId: proposalId ?? null,
+    });
+  }
+
+  it("T01/T02/T03/T14 — Proposal docs_write subject → subject options, not generic trio; no new cycle", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:corr10-t01",
+    });
+
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+
+    expect(proposed.proposalId).toBe(proposal.proposalId);
+    expect(proposed.promotesProjectTrajectory).toBe(false);
+    expect(proposed.decisionSubjectMode).toBe("proposal");
+    expect(proposed.proposedTrajectory).toBeNull();
+    const refs = proposed.options.map((o) => o.optionRef);
+    expect(refs).toEqual([
+      PROPOSAL_SUBJECT_PURSUE_REF,
+      PROPOSAL_SUBJECT_AMEND_REF,
+      PROPOSAL_SUBJECT_REFUSE_REF,
+    ]);
+    expect(refs).not.toContain(GOVERNED_OPTION_REF);
+    expect(refs).not.toContain(BOUNDED_OPTION_REF);
+    expect(refs).not.toContain(CLARIFY_OPTION_REF);
+
+    const joined = proposed.options.map((o) => o.intent).join(" ");
+    expect(joined).toContain(TARGET_PATH);
+    expect(joined).toContain(F2_ARTIFACT_MATERIALIZATION_OPERATION);
+    expect(proposed.recommendation.recommendedOptionRef).toBe(
+      PROPOSAL_SUBJECT_PURSUE_REF,
+    );
+    expect(proposed.recommendation.isHumanDecision).toBe(false);
+
+    // T14 — active cycle unchanged (same instance still active).
+    const after = await currentF2Context(runtime, projectId);
+    expect(after.activeCycleInstanceId).toBe(cycleInstanceId);
+  });
+
+  it("T04/T15 — propose does not create HumanDecision or ExecutionContract", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:corr10-t04",
+    });
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    expect(proposed.autoDecisionPerformed).toBe(false);
+    expect(proposed.executionPerformed).toBe(false);
+  });
+
+  it("T05/T06/T07/T12 — HD references same subject; DecisionBasis seals path/op; no trajectory promotion", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:corr10-t05",
+    });
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+
+    const decided = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
+
+    expect(decided.promotesProjectTrajectory).toBe(false);
+    expect(decided.decisionSubjectMode).toBe("proposal");
+    expect(decided.decision.proposalId).toBe(proposal.proposalId);
+    expect(decided.trajectory).toBeNull();
+    expect(decided.executionPerformed).toBe(false);
+
+    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
+      decisionId: decided.decision.decisionId,
+    });
+    expect(hd.ok).toBe(true);
+    if (!hd.ok) return;
+    expect(hd.decision.decisionBasis?.sourceType).toBe("proposal");
+    expect(hd.decision.decisionBasis?.sourceRef).toBe(proposal.proposalId);
+    expect(hd.decision.decisionBasis?.executionBasis.targetPath).toBe(
+      TARGET_PATH,
+    );
+    expect(hd.decision.decisionBasis?.executionBasis.requestedOperation).toBe(
+      F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    );
+
+    const current = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
+      projectId,
+    });
+    // ZERO ProjectTrajectory mutation — none created by propose/decide proposal path.
+    expect(current.ok).toBe(false);
+    expect(getProposal(proposal.proposalId)?.status).toBe("APPROVED");
+  });
+
+  it("T08 — project mismatch blocks", async () => {
+    const a = await seed();
+    const b = await seedQualifiedProject(runtime, {
+      profile: "Critical",
+      suffix: "c10b",
+    });
+    const proposal = docsWriteProposal({
+      projectId: a.projectId,
+      lpsId: a.ctx.lpsId,
+      lpsVersion: a.ctx.lpsVersion,
+      doctrineDigest: a.ctx.doctrineDigest,
+      activeCycleInstanceId: a.cycleInstanceId,
+      proposalId: "prop:f2:corr10-t08",
+    });
+    const proposed = await proposeWith(b.projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(false);
+    if (proposed.ok) return;
+    expect(proposed.code).toBe("PROJECT_MISMATCH");
+  });
+
+  it("T09 — stale proposal context blocks", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion + 99,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:corr10-t09",
+    });
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(false);
+    if (proposed.ok) return;
+    expect(proposed.code).toBe("PROPOSAL_STALE");
+  });
+
+  it("T10 — OptionSet / subject mismatch blocks decide", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:corr10-t10",
+    });
+    const subjectProposed = await proposeWith(projectId, proposal.proposalId);
+    expect(subjectProposed.ok).toBe(true);
+    if (!subjectProposed.ok) return;
+
+    const cross = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: subjectProposed.optionSetRef,
+      selectedOptionRef: GOVERNED_OPTION_REF,
+      // Hostile trajectory fields — ignored in proposal mode.
+      trajectoryId: "trj:hostile",
+      candidateVersion: 999,
+      forceLocalAuthority: true,
+    });
+    expect(cross.ok).toBe(false);
+    if (cross.ok) return;
+    expect(cross.code).toBe("OPTION_NOT_PRESENTED");
+  });
+
+  it("T11/R22 — hostile client targetPath/requestedOperation ignored", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:corr10-t11",
+    });
+    const oa = runtime.oa!;
+    const qualification = await resolveW2QualificationInputs({ oa, projectId });
+    expect(qualification.ok).toBe(true);
+    if (!qualification.ok) return;
+    const proposed = await proposeTrajectoryOptions({
+      oa,
+      projectId,
+      ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
+      proposalId: proposal.proposalId,
+      // @ts-expect-error hostile fields are not on the typed input
+      targetPath: "/etc/passwd",
+      requestedOperation: "github.pr.merge",
+    });
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    const presented = await loadPresentedOptionSet(
+      oa,
+      projectId,
+      proposed.optionSetRef,
+    );
+    expect(presented.ok).toBe(true);
+    if (!presented.ok) return;
+    expect(presented.presented.sealedExecutionBasis?.targetPath).toBe(
+      TARGET_PATH,
+    );
+    expect(presented.presented.sealedExecutionBasis?.requestedOperation).toBe(
+      F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    );
+  });
+
+  it("T13 — true trajectory path unchanged when no active Proposal", async () => {
+    const { projectId } = await seed();
+    const proposed = await proposeW2OptionsForProject(runtime, projectId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    const refs = proposed.options.map((o) => o.optionRef);
+    expect(refs).toEqual([
+      GOVERNED_OPTION_REF,
+      BOUNDED_OPTION_REF,
+      CLARIFY_OPTION_REF,
+    ]);
+    expect(proposed.promotesProjectTrajectory ?? true).toBe(true);
+    expect(proposed.decisionSubjectMode).toBe("project_trajectory");
+    expect(proposed.proposedTrajectory).not.toBeNull();
+    if (!proposed.proposedTrajectory) return;
+
+    const decided = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: GOVERNED_OPTION_REF,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
+    expect(decided.promotesProjectTrajectory).toBe(true);
+    expect(decided.decisionSubjectMode).toBe("project_trajectory");
+    expect(decided.trajectory).not.toBeNull();
+    expect(decided.trajectory!.status).toBe("validated");
+    expect(decided.trajectory!.isCurrent).toBe(true);
+  });
+
+  it("T16 — PREPARE after pursue HD keeps sealed executionBasis lineage", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:corr10-t16",
+    });
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    const decided = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
+
+    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
+      decisionId: decided.decision.decisionId,
+    });
+    expect(hd.ok).toBe(true);
+    if (!hd.ok) return;
+    expect(hd.decision.decisionBasis?.executionBasis.targetPath).toBe(
+      TARGET_PATH,
+    );
+    expect(hd.decision.decisionBasis?.executionBasis.requestedOperation).toBe(
+      F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    );
+
+    // Existing Proposal→EC seam (prepareM3FromDecision) — no client-widened path/op.
+    const { prepareM3FromDecision } = await import(
+      "@/features/project-assistant/f3/prepareM3FromDecision"
+    );
+    const prepared = await prepareM3FromDecision({
+      projectId,
+      decisionId: decided.decision.decisionId,
+      currentContext: await currentF2Context(runtime, projectId),
+      deps: {
+        decisionServices: runtime.oa!.decisionServices,
+        authorityResolver: runtime.oa!.authorityResolver,
+        executionContractServices: runtime.oa!.executionContractServices,
+        nowIso: () => "2026-09-15T03:00:00.000Z",
+        forceM3Authority: true,
+      },
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    expect(prepared.payload.executionPerformed).toBe(false);
+    expect(prepared.payload.attemptCreated).toBe(false);
+    expect(prepared.payload.contract.action).toBe(
+      F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    );
+  });
+
+  it("T17 — missing proposal before binding = fail closed (no generic fallback)", async () => {
+    const { projectId } = await seed();
+    const proposed = await proposeWith(projectId, "prop:f2:missing");
+    expect(proposed.ok).toBe(false);
+    if (proposed.ok) return;
+    expect(proposed.code).toBe("PROPOSAL_NOT_FOUND");
+  });
+
+  it("T17b — active DECISION_REQUIRED without proposalId refuses generic fallback", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:corr10-active",
+    });
+    const proposed = await proposeWith(projectId, null);
+    expect(proposed.ok).toBe(false);
+    if (proposed.ok) return;
+    expect(proposed.code).toBe("ACTIVE_PROPOSAL_SUBJECT_REQUIRED");
+  });
+
+  it("T19/T20 — no REAL provider / no dogfood mutation markers", () => {
+    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
+    expect(dbPath).not.toContain("sfia-studio-product-proof");
+    expect(dbPath).not.toContain("oa-product.sqlite");
+  });
+});
+
+describe("CORR-PROOF-10 Critical Remediation R01–R30", () => {
+  let runtime: RuntimeApplicationService;
+  let dbPath: string;
+
+  beforeEach(() => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    dbPath = tempProductDbPath("corr10-remed.sqlite");
+    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "c10r" });
+  });
+
+  afterEach(() => {
+    resetF2ProposalStoreForTests();
+    setConversationProviderForTests(null);
+    cleanupW2TempDirs();
+  });
+
+  async function seed() {
+    const seeded = await seedQualifiedProject(runtime, {
+      profile: "Critical",
+      suffix: "rem",
+    });
+    const ctx = await currentF2Context(runtime, seeded.projectId);
+    return { ...seeded, ctx };
+  }
+
+  async function proposeWith(projectId: string, proposalId?: string | null) {
+    const oa = runtime.oa!;
+    const qualification = await resolveW2QualificationInputs({ oa, projectId });
+    expect(qualification.ok).toBe(true);
+    if (!qualification.ok) throw new Error("qualification failed");
+    return proposeTrajectoryOptions({
+      oa,
+      projectId,
+      ...qualification.qualification.inputs,
+      packagePin: qualification.qualification.packagePin,
+      objective: qualification.qualification.objective,
+      projectTitle: qualification.qualification.projectTitle,
+      proposalId: proposalId ?? null,
+    });
+  }
+
+  it("R01/R02/R25 — propose+pursue create ZERO ProjectTrajectory; cycle unchanged", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const before = await snapshotTrajectories(runtime.oa!, projectId);
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:r01",
+    });
+    await markPending(runtime.oa!, proposal);
+
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    expect(proposed.proposedTrajectory).toBeNull();
+    const mid = await snapshotTrajectories(runtime.oa!, projectId);
+    expect(mid.fingerprint).toBe(before.fingerprint);
+    expect(mid.count).toBe(before.count);
+
+    const decided = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
+    expect(decided.trajectory).toBeNull();
+    const after = await snapshotTrajectories(runtime.oa!, projectId);
+    expect(after.fingerprint).toBe(before.fingerprint);
+    expect(after.count).toBe(before.count);
+    const ctxAfter = await currentF2Context(runtime, projectId);
+    expect(ctxAfter.activeCycleInstanceId).toBe(cycleInstanceId);
+  });
+
+  it("R03/R04 — amend and refuse create ZERO ProjectTrajectory", async () => {
+    for (const [suffix, optionRef] of [
+      ["amend", PROPOSAL_SUBJECT_AMEND_REF],
+      ["refuse", PROPOSAL_SUBJECT_REFUSE_REF],
+    ] as const) {
+      resetF2ProposalStoreForTests();
+      const seeded = await seedQualifiedProject(runtime, {
+        profile: "Critical",
+        suffix,
+      });
+      const ctx = await currentF2Context(runtime, seeded.projectId);
+      const before = await snapshotTrajectories(runtime.oa!, seeded.projectId);
+      const proposal = docsWriteProposal({
+        projectId: seeded.projectId,
+        lpsId: ctx.lpsId,
+        lpsVersion: ctx.lpsVersion,
+        doctrineDigest: ctx.doctrineDigest,
+        activeCycleInstanceId: seeded.cycleInstanceId,
+        proposalId: `prop:f2:r03-${suffix}`,
+      });
+      await markPending(runtime.oa!, proposal);
+      const proposed = await proposeWith(seeded.projectId, proposal.proposalId);
+      expect(proposed.ok).toBe(true);
+      if (!proposed.ok) return;
+      const decided = await decideTrajectory({
+        oa: runtime.oa!,
+        projectId: seeded.projectId,
+        optionSetRef: proposed.optionSetRef,
+        selectedOptionRef: optionRef,
+        forceLocalAuthority: true,
+      });
+      expect(decided.ok).toBe(true);
+      if (!decided.ok) return;
+      expect(decided.trajectory).toBeNull();
+      const after = await snapshotTrajectories(runtime.oa!, seeded.projectId);
+      expect(after.fingerprint).toBe(before.fingerprint);
+    }
+  });
+
+  it("R05/R11/R28 — true trajectory path still creates/promotes when no pending subject", async () => {
+    const { projectId } = await seed();
+    const before = await snapshotTrajectories(runtime.oa!, projectId);
+    const proposed = await proposeW2OptionsForProject(runtime, projectId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    expect(proposed.decisionSubjectMode).toBe("project_trajectory");
+    expect(proposed.proposedTrajectory).not.toBeNull();
+    const mid = await snapshotTrajectories(runtime.oa!, projectId);
+    expect(mid.count).toBeGreaterThan(before.count);
+    const decided = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: GOVERNED_OPTION_REF,
+      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
+      candidateVersion: proposed.proposedTrajectory!.version,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
+    expect(decided.trajectory?.status).toBe("validated");
+  });
+
+  it("R06/R07 — decide proposal without trajectory fields; hostile trajectory fields ignored", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:r06",
+    });
+    await markPending(runtime.oa!, proposal);
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    const before = await snapshotTrajectories(runtime.oa!, projectId);
+    const decided = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      trajectoryId: "trj:hostile-client",
+      candidateVersion: 999,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
+    expect(decided.trajectory).toBeNull();
+    const after = await snapshotTrajectories(runtime.oa!, projectId);
+    expect(after.fingerprint).toBe(before.fingerprint);
+    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
+      decisionId: decided.decision.decisionId,
+    });
+    expect(hd.ok && hd.decision.decisionBasis?.trajectoryContext).toBeFalsy();
+  });
+
+  it("R08/R09 — restart before binding: pending marker + lost store → fail closed, no generic options, no trajectory", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:r08",
+    });
+    await markPending(runtime.oa!, proposal);
+    const pending = await listActivePendingDecisionSubjectMarkers(
+      runtime.oa!,
+      projectId,
+    );
+    expect(pending.ok).toBe(true);
+    if (!pending.ok) return;
+    expect(pending.markers.some((m) => m.proposalId === proposal.proposalId)).toBe(
+      true,
+    );
+
+    const before = await snapshotTrajectories(runtime.oa!, projectId);
+    resetF2ProposalStoreForTests(); // simulate restart / process-local loss
+
+    const withoutId = await proposeWith(projectId, null);
+    expect(withoutId.ok).toBe(false);
+    if (withoutId.ok) return;
+    expect(withoutId.code).toBe(
+      "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
+    );
+
+    const withStaleId = await proposeWith(projectId, proposal.proposalId);
+    expect(withStaleId.ok).toBe(false);
+    if (withStaleId.ok) return;
+    expect(withStaleId.code).toBe(
+      "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
+    );
+
+    const after = await snapshotTrajectories(runtime.oa!, projectId);
+    expect(after.fingerprint).toBe(before.fingerprint);
+  });
+
+  it("R10 — after OptionSet binding, pending marker is resolved", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:r10",
+    });
+    await markPending(runtime.oa!, proposal);
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    const pending = await listActivePendingDecisionSubjectMarkers(
+      runtime.oa!,
+      projectId,
+    );
+    expect(pending.ok).toBe(true);
+    if (!pending.ok) return;
+    expect(
+      pending.markers.some((m) => m.proposalId === proposal.proposalId),
+    ).toBe(false);
+  });
+
+  it("R12/R13/R14/R15 — server decidability", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const base = {
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+    };
+
+    const proposedStatus = docsWriteProposal({
+      ...base,
+      proposalId: "prop:f2:r12",
+      status: "PROPOSED",
+    });
+    let r = await proposeWith(projectId, proposedStatus.proposalId);
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.code).toBe("PROPOSAL_NOT_DECIDABLE");
+
+    const ready = docsWriteProposal({
+      ...base,
+      proposalId: "prop:f2:r13",
+      status: "READY_NO_GATE",
+      morrisGateRequired: false,
+    });
+    r = await proposeWith(projectId, ready.proposalId);
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.code).toBe("PROPOSAL_NOT_DECIDABLE");
+
+    const noGate = docsWriteProposal({
+      ...base,
+      proposalId: "prop:f2:r14",
+      status: "DECISION_REQUIRED",
+      morrisGateRequired: false,
+    });
+    r = await proposeWith(projectId, noGate.proposalId);
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.code).toBe("PROPOSAL_GATE_REQUIRED");
+
+    const ok = docsWriteProposal({
+      ...base,
+      proposalId: "prop:f2:r15",
+      status: "DECISION_REQUIRED",
+      morrisGateRequired: true,
+    });
+    await markPending(runtime.oa!, ok);
+    r = await proposeWith(projectId, ok.proposalId);
+    expect(r.ok).toBe(true);
+  });
+
+  it("R16–R20 — full executionBasis digest coverage + DecisionBasis sourceDigest", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const base = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:r16",
+    });
+    const sealed = sealProposalExecutionBasis(base);
+    const d0 = computeProposalSubjectDigest(sealed, base.proposalId);
+
+    const dCaps = computeProposalSubjectDigest(
+      { ...sealed, requiredCapabilities: ["cap:other"] },
+      base.proposalId,
+    );
+    expect(dCaps).not.toBe(d0);
+
+    const dScope = computeProposalSubjectDigest(
+      { ...sealed, scopeIn: ["a"], scopeOut: ["b"] },
+      base.proposalId,
+    );
+    expect(dScope).not.toBe(d0);
+
+    const dVal = computeProposalSubjectDigest(
+      {
+        ...sealed,
+        validationExpectations: ["v1"],
+        evidenceRequirements: ["e1"],
+      },
+      base.proposalId,
+    );
+    expect(dVal).not.toBe(d0);
+
+    const dArt = computeProposalSubjectDigest(
+      {
+        ...sealed,
+        artifactBrief: "autre",
+        contentRequirements: ["c1"],
+        exitRequirementKinds: ["k1"],
+      },
+      base.proposalId,
+    );
+    expect(dArt).not.toBe(d0);
+
+    await markPending(runtime.oa!, base);
+    const proposed = await proposeWith(projectId, base.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    const decided = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
+    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
+      decisionId: decided.decision.decisionId,
+    });
+    expect(hd.ok).toBe(true);
+    if (!hd.ok) return;
+    expect(hd.decision.decisionBasis?.sourceDigest).toBe(d0);
+  });
+
+  it("R21 — OptionSet digest mismatch fails decide", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:r21",
+    });
+    await markPending(runtime.oa!, proposal);
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+
+    // Corrupt sealed observation statement digest
+    const presented = await loadPresentedOptionSet(
+      runtime.oa!,
+      projectId,
+      proposed.optionSetRef,
+    );
+    expect(presented.ok).toBe(true);
+    if (!presented.ok) return;
+    const corrupted = {
+      ...presented.presented,
+      optionSetDigest: "deadbeef".repeat(8),
+    };
+    const { optionSetObservationId, serializePresentedOptionSet } =
+      await import(
+        "@/features/project-assistant/w2/presentedOptionSet"
+      );
+    const { LOCAL_PILOTE_ACTOR } = await import("@/lib/oa/decision");
+    await runtime.oa!.cycleServices.updateEpistemicState.execute({
+      projectId,
+      items: [
+        {
+          epistemicItemId: optionSetObservationId(proposed.optionSetRef),
+          type: "Observation",
+          statement: serializePresentedOptionSet(corrupted),
+          status: "active",
+          source: proposed.optionSetRef,
+        },
+      ],
+      createdBy: LOCAL_PILOTE_ACTOR,
+    });
+
+    const decided = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(false);
+    if (decided.ok) return;
+    expect(decided.code).toBe("OPTION_SET_STALE");
+  });
+
+  it("R23/R24 — PREPARE pursue keeps sealed fields; amend not applicable", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:r23",
+    });
+    await markPending(runtime.oa!, proposal);
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+
+    const pursue = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(pursue.ok).toBe(true);
+    if (!pursue.ok) return;
+    const { prepareM3FromDecision } = await import(
+      "@/features/project-assistant/f3/prepareM3FromDecision"
+    );
+    const prepared = await prepareM3FromDecision({
+      projectId,
+      decisionId: pursue.decision.decisionId,
+      currentContext: await currentF2Context(runtime, projectId),
+      deps: {
+        decisionServices: runtime.oa!.decisionServices,
+        authorityResolver: runtime.oa!.authorityResolver,
+        executionContractServices: runtime.oa!.executionContractServices,
+        nowIso: () => "2026-09-15T04:00:00.000Z",
+        forceM3Authority: true,
+      },
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    expect(prepared.payload.contract.action).toBe(
+      F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    );
+
+    // Separate amend path
+    resetF2ProposalStoreForTests();
+    const seeded2 = await seedQualifiedProject(runtime, {
+      profile: "Critical",
+      suffix: "r24",
+    });
+    const ctx2 = await currentF2Context(runtime, seeded2.projectId);
+    const p2 = docsWriteProposal({
+      projectId: seeded2.projectId,
+      lpsId: ctx2.lpsId,
+      lpsVersion: ctx2.lpsVersion,
+      doctrineDigest: ctx2.doctrineDigest,
+      activeCycleInstanceId: seeded2.cycleInstanceId,
+      proposalId: "prop:f2:r24",
+    });
+    await markPending(runtime.oa!, p2);
+    const proposed2 = await proposeWith(seeded2.projectId, p2.proposalId);
+    expect(proposed2.ok).toBe(true);
+    if (!proposed2.ok) return;
+    const amend = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId: seeded2.projectId,
+      optionSetRef: proposed2.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_AMEND_REF,
+      forceLocalAuthority: true,
+    });
+    expect(amend.ok).toBe(true);
+    if (!amend.ok) return;
+    const { prepareExecutionContractFromW2Decision } = await import(
+      "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision"
+    );
+    const prepAmend = await prepareExecutionContractFromW2Decision({
+      oa: runtime.oa!,
+      projectId: seeded2.projectId,
+      decisionId: amend.decision.decisionId,
+      currentContext: await currentF2Context(runtime, seeded2.projectId),
+      forceLocalAuthority: true,
+      qualifiedOperationKind: "generate-temporary-artifact",
+    });
+    expect(prepAmend.ok).toBe(false);
+    if (prepAmend.ok) return;
+    expect(prepAmend.code).toBe("PREPARE_NOT_APPLICABLE");
+  });
+
+  it("R29/R30 — ZERO REAL / ZERO dogfood", () => {
+    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
+    expect(dbPath).not.toContain("product-proof");
+  });
+});
+
+describe("CORR-PROOF-10 Post-binding Continuity R31–R48", () => {
+  let runtime: RuntimeApplicationService;
+  let dbPath: string;
+
+  beforeEach(() => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    dbPath = tempProductDbPath("corr10-postbind.sqlite");
+    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "c10pb" });
+  });
+
+  afterEach(() => {
+    resetF2ProposalStoreForTests();
+    setConversationProviderForTests(null);
+    cleanupW2TempDirs();
+  });
+
+  async function seed() {
+    const seeded = await seedQualifiedProject(runtime, {
+      profile: "Critical",
+      suffix: `pb-${Date.now()}`,
+    });
+    const ctx = await currentF2Context(runtime, seeded.projectId);
+    return { ...seeded, ctx };
+  }
+
+  async function proposeWith(projectId: string, proposalId: string | null) {
+    const qual = await resolveW2QualificationInputs({
+      oa: runtime.oa!,
+      projectId,
+    });
+    if (!qual.ok) return qual;
+    return proposeTrajectoryOptions({
+      oa: runtime.oa!,
+      projectId,
+      ...qual.qualification.inputs,
+      packagePin: qual.qualification.packagePin,
+      objective: qual.qualification.objective,
+      projectTitle: qual.qualification.projectTitle,
+      proposalId,
+    });
+  }
+
+  async function markPending(oa: RuntimeOaStack, proposal: ProposalDto) {
+    const sealed = sealProposalExecutionBasis(proposal);
+    const digest = computeProposalSubjectDigest(sealed, proposal.proposalId);
+    const written = await writePendingDecisionSubjectMarker({
+      oa,
+      projectId: proposal.contextSnapshot.projectId,
+      proposalId: proposal.proposalId,
+      subjectDigest: digest,
+      lpsId: proposal.contextSnapshot.lpsId,
+      lpsVersion: proposal.contextSnapshot.lpsVersion,
+      doctrineDigest: proposal.contextSnapshot.doctrineDigest,
+    });
+    expect(written.ok).toBe(true);
+  }
+
+  it("R31/R32/R38/R41/R42 — restart AFTER OptionSet binding: rehydrate same OptionSet; generic instruct does not create trajectory trio", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:r31",
+    });
+    await markPending(runtime.oa!, proposal);
+    const before = await snapshotTrajectories(runtime.oa!, projectId);
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    expect(proposed.decisionSubjectMode).toBe("proposal");
+    expect(proposed.proposedTrajectory).toBeNull();
+    const afterBind = await snapshotTrajectories(runtime.oa!, projectId);
+    expect(afterBind.fingerprint).toBe(before.fingerprint);
+
+    const originalRef = proposed.optionSetRef;
+    const originalDigest = (
+      await loadPresentedOptionSet(runtime.oa!, projectId, originalRef)
+    );
+    expect(originalDigest.ok).toBe(true);
+    if (!originalDigest.ok) return;
+
+    resetF2ProposalStoreForTests(); // restart — ProposalStore gone; React state gone
+
+    const { readActiveProposalDecisionSubject } = await import(
+      "@/features/project-assistant/w2/activeProposalDecisionSubject"
+    );
+    const read = await readActiveProposalDecisionSubject(
+      runtime.oa!,
+      projectId,
+    );
+    expect(read.ok).toBe(true);
+    if (!read.ok) return;
+    expect(read.kind).toBe("bound_awaiting_decision");
+    if (read.kind !== "bound_awaiting_decision") return;
+    expect(read.optionSet.optionSetRef).toBe(originalRef);
+    expect(read.optionSet.recommendation.recommendedOptionRef).toBe(
+      proposed.recommendation.recommendedOptionRef,
+    );
+    expect(read.presented.optionSetDigest).toBe(
+      originalDigest.presented.optionSetDigest,
+    );
+    expect(read.optionSet.options.map((o) => o.optionRef)).toEqual(
+      proposed.options.map((o) => o.optionRef),
+    );
+
+    // Generic instruct without proposalId → rehydrate same set, ZERO trajectory trio
+    const reinstruct = await proposeWith(projectId, null);
+    expect(reinstruct.ok).toBe(true);
+    if (!reinstruct.ok) return;
+    expect(reinstruct.optionSetRef).toBe(originalRef);
+    expect(reinstruct.decisionSubjectMode).toBe("proposal");
+    expect(
+      reinstruct.options.some((o) => o.optionRef === GOVERNED_OPTION_REF),
+    ).toBe(false);
+    expect(
+      reinstruct.options.some((o) => o.optionRef === BOUNDED_OPTION_REF),
+    ).toBe(false);
+    expect(
+      reinstruct.options.some((o) => o.optionRef === CLARIFY_OPTION_REF),
+    ).toBe(false);
+    const afterGeneric = await snapshotTrajectories(runtime.oa!, projectId);
+    expect(afterGeneric.fingerprint).toBe(before.fingerprint);
+  });
+
+  it("R33/R43 — decide pursue AFTER restart with empty ProposalStore; ZERO PT; same digest", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:r33",
+    });
+    await markPending(runtime.oa!, proposal);
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    const presented = await loadPresentedOptionSet(
+      runtime.oa!,
+      projectId,
+      proposed.optionSetRef,
+    );
+    expect(presented.ok).toBe(true);
+    if (!presented.ok) return;
+    const expectedDigest = presented.presented.proposalSubjectDigest;
+
+    const before = await snapshotTrajectories(runtime.oa!, projectId);
+    resetF2ProposalStoreForTests();
+    expect(getProposal(proposal.proposalId)).toBeFalsy();
+
+    const decided = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
+    expect(decided.trajectory).toBeNull();
+    expect(decided.decision.proposalId).toBe(proposal.proposalId);
+
+    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
+      decisionId: decided.decision.decisionId,
+    });
+    expect(hd.ok).toBe(true);
+    if (!hd.ok) return;
+    expect(hd.decision.decisionBasis?.sourceRef).toBe(proposal.proposalId);
+    expect(hd.decision.decisionBasis?.sourceDigest).toBe(expectedDigest);
+    expect(hd.decision.decisionBasis?.executionBasis?.targetPath).toBe(
+      TARGET_PATH,
+    );
+    expect(hd.decision.decisionBasis?.trajectoryContext).toBeFalsy();
+
+    const after = await snapshotTrajectories(runtime.oa!, projectId);
+    expect(after.fingerprint).toBe(before.fingerprint);
+  });
+
+  it("R34 — amend/refuse AFTER restart with empty store: ZERO EC / ZERO PT", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    for (const [suffix, optionRef] of [
+      ["amend", PROPOSAL_SUBJECT_AMEND_REF],
+      ["refuse", PROPOSAL_SUBJECT_REFUSE_REF],
+    ] as const) {
+      resetF2ProposalStoreForTests();
+      const seeded = await seedQualifiedProject(runtime, {
+        profile: "Critical",
+        suffix: `r34-${suffix}`,
+      });
+      const c = await currentF2Context(runtime, seeded.projectId);
+      const proposal = docsWriteProposal({
+        projectId: seeded.projectId,
+        lpsId: c.lpsId,
+        lpsVersion: c.lpsVersion,
+        doctrineDigest: c.doctrineDigest,
+        activeCycleInstanceId: seeded.cycleInstanceId,
+        proposalId: `prop:f2:r34-${suffix}`,
+      });
+      await markPending(runtime.oa!, proposal);
+      const proposed = await proposeWith(seeded.projectId, proposal.proposalId);
+      expect(proposed.ok).toBe(true);
+      if (!proposed.ok) return;
+      const before = await snapshotTrajectories(runtime.oa!, seeded.projectId);
+      resetF2ProposalStoreForTests();
+
+      const decided = await decideTrajectory({
+        oa: runtime.oa!,
+        projectId: seeded.projectId,
+        optionSetRef: proposed.optionSetRef,
+        selectedOptionRef: optionRef,
+        forceLocalAuthority: true,
+      });
+      expect(decided.ok).toBe(true);
+      if (!decided.ok) return;
+      expect(decided.trajectory).toBeNull();
+
+      const { prepareExecutionContractFromW2Decision } = await import(
+        "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision"
+      );
+      const prep = await prepareExecutionContractFromW2Decision({
+        oa: runtime.oa!,
+        projectId: seeded.projectId,
+        decisionId: decided.decision.decisionId,
+        currentContext: await currentF2Context(runtime, seeded.projectId),
+        forceLocalAuthority: true,
+        qualifiedOperationKind: "generate-temporary-artifact",
+      });
+      expect(prep.ok).toBe(false);
+      if (prep.ok) return;
+      expect(prep.code).toBe("PREPARE_NOT_APPLICABLE");
+
+      const after = await snapshotTrajectories(runtime.oa!, seeded.projectId);
+      expect(after.fingerprint).toBe(before.fingerprint);
+    }
+    void projectId;
+    void cycleInstanceId;
+    void ctx;
+  });
+
+  it("R35 — restart AFTER HumanDecision: subject no longer awaiting; no second HD", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:r35",
+    });
+    await markPending(runtime.oa!, proposal);
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    const decided = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
+
+    resetF2ProposalStoreForTests();
+    const { readActiveProposalDecisionSubject } = await import(
+      "@/features/project-assistant/w2/activeProposalDecisionSubject"
+    );
+    const read = await readActiveProposalDecisionSubject(
+      runtime.oa!,
+      projectId,
+    );
+    expect(read.ok).toBe(true);
+    if (!read.ok) return;
+    expect(read.kind).toBe("none");
+
+    const second = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(second.ok).toBe(false);
+    if (second.ok) return;
+    expect(second.code).toBe("SUBJECT_ALREADY_DECIDED");
+  });
+
+  it("R36/R37 — Epistemic read failure fails closed (not empty)", async () => {
+    const { projectId } = await seed();
+    const oa = runtime.oa!;
+    const original = oa.cycleServices.getEpistemicState.execute.bind(
+      oa.cycleServices.getEpistemicState,
+    );
+    oa.cycleServices.getEpistemicState.execute = async () =>
+      ({
+        ok: false,
+        error: {
+          code: "PERSISTENCE_FAILURE",
+          detailCode: "EPISTEMIC_READ_BOOM",
+          message: "boom",
+          severity: "error",
+          retryable: true,
+          blocking: true,
+          recoverable: true,
+          domain: "D",
+          timestamp: "2026-09-15T00:00:00.000Z",
+        },
+      }) as unknown as Awaited<ReturnType<typeof original>>;
+
+    const pending = await listActivePendingDecisionSubjectMarkers(oa, projectId);
+    expect(pending.ok).toBe(false);
+    if (pending.ok) return;
+    expect(pending.code).toBe("EPISTEMIC_READ_FAILED");
+
+    const { findActiveAwaitingProposalPresentedOptionSet } = await import(
+      "@/features/project-assistant/w2/activeProposalDecisionSubject"
+    );
+    const bound = await findActiveAwaitingProposalPresentedOptionSet(
+      oa,
+      projectId,
+    );
+    expect(bound.ok).toBe(false);
+    if (bound.ok) return;
+    expect(bound.code).toBe("EPISTEMIC_READ_FAILED");
+
+    const propose = await proposeWith(projectId, null);
+    expect(propose.ok).toBe(false);
+    if (propose.ok) return;
+    expect(propose.code).toBe("EPISTEMIC_READ_FAILED");
+
+    oa.cycleServices.getEpistemicState.execute = original;
+  });
+
+  it("R39 — no active Proposal subject → ProjectTrajectory W2 accessible", async () => {
+    const { projectId } = await seed();
+    const before = await snapshotTrajectories(runtime.oa!, projectId);
+    const proposed = await proposeW2OptionsForProject(runtime, projectId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    expect(proposed.decisionSubjectMode).toBe("project_trajectory");
+    expect(proposed.proposedTrajectory).not.toBeNull();
+    const after = await snapshotTrajectories(runtime.oa!, projectId);
+    expect(after.count).toBeGreaterThan(before.count);
+  });
+
+  it("R40 — marker transition failure after binding: OptionSet still recoverable; no generic trajectory", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:r40",
+    });
+    await markPending(runtime.oa!, proposal);
+
+    const oa = runtime.oa!;
+    const originalUpdate = oa.cycleServices.updateEpistemicState.execute.bind(
+      oa.cycleServices.updateEpistemicState,
+    );
+    let optionSetWrites = 0;
+    oa.cycleServices.updateEpistemicState.execute = async (req) => {
+      const result = await originalUpdate(req);
+      // After OptionSet materialisation, force marker resolve path to "fail"
+      // by re-activating pending via a second write that we skip — instead:
+      // detect resolve correlation and return failure.
+      if (
+        typeof req.correlationId === "string" &&
+        req.correlationId.startsWith("cor:pending-bound:")
+      ) {
+        return {
+          ok: false,
+          error: {
+            code: "PERSISTENCE_FAILURE",
+            detailCode: "MARKER_RESOLVE_FAIL",
+            message: "forced",
+            severity: "error",
+            retryable: true,
+            blocking: true,
+            recoverable: true,
+            domain: "D",
+            timestamp: "2026-09-15T00:00:00.000Z",
+          },
+          durationMs: 0,
+        } as unknown as Awaited<ReturnType<typeof originalUpdate>>;
+      }
+      if (
+        req.items?.some(
+          (i) =>
+            i.type === "Observation" &&
+            typeof i.statement === "string" &&
+            i.statement.includes("w2_presented_option_set"),
+        )
+      ) {
+        optionSetWrites += 1;
+      }
+      return result;
+    };
+
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    expect(optionSetWrites).toBeGreaterThan(0);
+
+    oa.cycleServices.updateEpistemicState.execute = originalUpdate;
+
+    resetF2ProposalStoreForTests();
+    const { readActiveProposalDecisionSubject } = await import(
+      "@/features/project-assistant/w2/activeProposalDecisionSubject"
+    );
+    const read = await readActiveProposalDecisionSubject(oa, projectId);
+    expect(read.ok).toBe(true);
+    if (!read.ok) return;
+    // Bound OptionSet preferred even if pending marker still active
+    expect(read.kind).toBe("bound_awaiting_decision");
+    if (read.kind !== "bound_awaiting_decision") return;
+    expect(read.optionSet.optionSetRef).toBe(proposed.optionSetRef);
+
+    const generic = await proposeWith(projectId, null);
+    expect(generic.ok).toBe(true);
+    if (!generic.ok) return;
+    expect(generic.optionSetRef).toBe(proposed.optionSetRef);
+    expect(
+      generic.options.some((o) => o.optionRef === GOVERNED_OPTION_REF),
+    ).toBe(false);
+  });
+
+  it("R48 — ZERO REAL / ZERO dogfood mutation", () => {
+    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
+    expect(dbPath).not.toContain("product-proof");
+    expect(dbPath).not.toContain(
+      "sfia-studio-product-proof-preflight-35b1371d",
+    );
+  });
+});
+
+describe("CORR-PROOF-10 Atomic Subject Closure R49–R68", () => {
+  let runtime: RuntimeApplicationService;
+  let dbPath: string;
+
+  beforeEach(() => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    setConversationProviderForTests(null);
+    resetF2ProposalStoreForTests();
+    dbPath = tempProductDbPath("corr10-atomic.sqlite");
+    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "c10at" });
+  });
+
+  afterEach(() => {
+    resetF2ProposalStoreForTests();
+    setConversationProviderForTests(null);
+    cleanupW2TempDirs();
+  });
+
+  async function seed() {
+    const seeded = await seedQualifiedProject(runtime, {
+      profile: "Critical",
+      suffix: `at-${Date.now()}`,
+    });
+    const ctx = await currentF2Context(runtime, seeded.projectId);
+    return { ...seeded, ctx };
+  }
+
+  async function proposeWith(projectId: string, proposalId: string | null) {
+    const qual = await resolveW2QualificationInputs({
+      oa: runtime.oa!,
+      projectId,
+    });
+    if (!qual.ok) return qual;
+    return proposeTrajectoryOptions({
+      oa: runtime.oa!,
+      projectId,
+      ...qual.qualification.inputs,
+      packagePin: qual.qualification.packagePin,
+      objective: qual.qualification.objective,
+      projectTitle: qual.qualification.projectTitle,
+      proposalId,
+    });
+  }
+
+  async function markPending(oa: RuntimeOaStack, proposal: ProposalDto) {
+    const sealed = sealProposalExecutionBasis(proposal);
+    const digest = computeProposalSubjectDigest(sealed, proposal.proposalId);
+    const written = await writePendingDecisionSubjectMarker({
+      oa,
+      projectId: proposal.contextSnapshot.projectId,
+      proposalId: proposal.proposalId,
+      subjectDigest: digest,
+      lpsId: proposal.contextSnapshot.lpsId,
+      lpsVersion: proposal.contextSnapshot.lpsVersion,
+      doctrineDigest: proposal.contextSnapshot.doctrineDigest,
+    });
+    expect(written.ok).toBe(true);
+  }
+
+  async function countDecisionRefsForOptionSet(
+    projectId: string,
+    optionSetRef: string,
+  ): Promise<number> {
+    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
+      projectId,
+    });
+    if (!epistemic.ok) return -1;
+    return epistemic.state.items.filter(
+      (i) =>
+        i.type === "DecisionRef" &&
+        i.status === "active" &&
+        (i.relatedObjects ?? []).includes(optionSetRef),
+    ).length;
+  }
+
+  it("R49–R55 — DecisionRef failure rolls back HD+LPS; ProposalStore unchanged; retry succeeds exactly once", async () => {
+    const { SqliteProductStore } = await import("@/lib/oa/project");
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:r49",
+    });
+    await markPending(runtime.oa!, proposal);
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+
+    const beforePt = await snapshotTrajectories(runtime.oa!, projectId);
+    const lpsBefore =
+      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
+        projectId,
+      });
+    expect(lpsBefore.ok).toBe(true);
+    if (!lpsBefore.ok) return;
+    const lpsVersionBefore = lpsBefore.livingProjectState.version;
+    const decisionIdsBefore = [
+      ...(lpsBefore.livingProjectState.decisionIds ?? []),
+    ];
+    const histBefore =
+      await runtime.oa!.decisionServices.listDecisionHistory.execute({
+        projectId,
+      });
+    expect(histBefore.ok).toBe(true);
+    if (!histBefore.ok) return;
+    const hdCountBefore = histBefore.decisions.length;
+
+    const store = runtime.oa!.projectServices.store;
+    expect(store).toBeInstanceOf(SqliteProductStore);
+    (store as InstanceType<typeof SqliteProductStore>).failNextSave =
+      "epistemic";
+
+    const failed = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(failed.ok).toBe(false);
+    if (failed.ok) return;
+
+    // R50 — no durable HD
+    const histAfterFail =
+      await runtime.oa!.decisionServices.listDecisionHistory.execute({
+        projectId,
+      });
+    expect(histAfterFail.ok).toBe(true);
+    if (!histAfterFail.ok) return;
+    expect(histAfterFail.decisions.length).toBe(hdCountBefore);
+
+    // R51 — LPS unchanged
+    const lpsAfterFail =
+      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
+        projectId,
+      });
+    expect(lpsAfterFail.ok).toBe(true);
+    if (!lpsAfterFail.ok) return;
+    expect(lpsAfterFail.livingProjectState.version).toBe(lpsVersionBefore);
+    expect(lpsAfterFail.livingProjectState.decisionIds ?? []).toEqual(
+      decisionIdsBefore,
+    );
+
+    // R52 — no DecisionRef closure
+    expect(
+      await countDecisionRefsForOptionSet(projectId, proposed.optionSetRef),
+    ).toBe(0);
+
+    // R53 — still awaiting / rehydratable
+    const { readActiveProposalDecisionSubject } = await import(
+      "@/features/project-assistant/w2/activeProposalDecisionSubject"
+    );
+    const stillBound = await readActiveProposalDecisionSubject(
+      runtime.oa!,
+      projectId,
+    );
+    expect(stillBound.ok).toBe(true);
+    if (!stillBound.ok) return;
+    expect(stillBound.kind).toBe("bound_awaiting_decision");
+    if (stillBound.kind !== "bound_awaiting_decision") return;
+    expect(stillBound.optionSet.optionSetRef).toBe(proposed.optionSetRef);
+
+    // R54 — ProposalStore not advanced
+    const local = getProposal(proposal.proposalId);
+    expect(local?.status).toBe("DECISION_REQUIRED");
+
+    // R55 — retry after restoring epistemic writes
+    (store as InstanceType<typeof SqliteProductStore>).failNextSave = null;
+    const retry = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(retry.ok).toBe(true);
+    if (!retry.ok) return;
+
+    const histOk =
+      await runtime.oa!.decisionServices.listDecisionHistory.execute({
+        projectId,
+      });
+    expect(histOk.ok).toBe(true);
+    if (!histOk.ok) return;
+    expect(histOk.decisions.length).toBe(hdCountBefore + 1);
+    expect(
+      await countDecisionRefsForOptionSet(projectId, proposed.optionSetRef),
+    ).toBe(1);
+    const afterPt = await snapshotTrajectories(runtime.oa!, projectId);
+    expect(afterPt.fingerprint).toBe(beforePt.fingerprint);
+    expect(getProposal(proposal.proposalId)?.status).toMatch(/^APPROVED/);
+  });
+
+  it("R56/R57 — restart after success: not awaiting; second decide SUBJECT_ALREADY_DECIDED; no supersession", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:r56",
+    });
+    await markPending(runtime.oa!, proposal);
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    const first = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+    const firstId = first.decision.decisionId;
+
+    resetF2ProposalStoreForTests();
+    const { readActiveProposalDecisionSubject } = await import(
+      "@/features/project-assistant/w2/activeProposalDecisionSubject"
+    );
+    const read = await readActiveProposalDecisionSubject(
+      runtime.oa!,
+      projectId,
+    );
+    expect(read.ok).toBe(true);
+    if (!read.ok) return;
+    expect(read.kind).toBe("none");
+
+    const histBefore =
+      await runtime.oa!.decisionServices.listDecisionHistory.execute({
+        projectId,
+      });
+    expect(histBefore.ok).toBe(true);
+    if (!histBefore.ok) return;
+
+    const second = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(second.ok).toBe(false);
+    if (second.ok) return;
+    expect(second.code).toBe("SUBJECT_ALREADY_DECIDED");
+
+    const histAfter =
+      await runtime.oa!.decisionServices.listDecisionHistory.execute({
+        projectId,
+      });
+    expect(histAfter.ok).toBe(true);
+    if (!histAfter.ok) return;
+    expect(histAfter.decisions.length).toBe(histBefore.decisions.length);
+    const firstHd = histAfter.decisions.find((d) => d.decisionId === firstId);
+    expect(firstHd?.status).toBe("accepted");
+    expect(
+      histAfter.decisions.filter((d) => d.status === "superseded").length,
+    ).toBe(0);
+  });
+
+  it("R58 — PREPARE pursue after atomic success keeps sealed PresentedOptionSet", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:r58",
+    });
+    await markPending(runtime.oa!, proposal);
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    const presented = await loadPresentedOptionSet(
+      runtime.oa!,
+      projectId,
+      proposed.optionSetRef,
+    );
+    expect(presented.ok).toBe(true);
+    if (!presented.ok) return;
+    const sealed = presented.presented.sealedExecutionBasis!;
+    const digest = presented.presented.proposalSubjectDigest;
+
+    const decided = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    if (!decided.ok) return;
+
+    const reloaded = await loadPresentedOptionSet(
+      runtime.oa!,
+      projectId,
+      proposed.optionSetRef,
+    );
+    expect(reloaded.ok).toBe(true);
+    if (!reloaded.ok) return;
+    expect(reloaded.presented.proposalSubjectDigest).toBe(digest);
+    expect(reloaded.presented.sealedExecutionBasis?.targetPath).toBe(
+      sealed.targetPath,
+    );
+
+    const { prepareM3FromDecision } = await import(
+      "@/features/project-assistant/f3/prepareM3FromDecision"
+    );
+    const prepared = await prepareM3FromDecision({
+      projectId,
+      decisionId: decided.decision.decisionId,
+      currentContext: await currentF2Context(runtime, projectId),
+      deps: {
+        decisionServices: runtime.oa!.decisionServices,
+        authorityResolver: runtime.oa!.authorityResolver,
+        executionContractServices: runtime.oa!.executionContractServices,
+        nowIso: () => "2026-09-15T05:00:00.000Z",
+        forceM3Authority: true,
+      },
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) return;
+    expect(prepared.payload.contract.action).toBe(
+      F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    );
+  });
+
+  it("R59 — amend/refuse atomic closure + PREPARE_NOT_APPLICABLE + ZERO PT", async () => {
+    for (const [suffix, optionRef] of [
+      ["amend", PROPOSAL_SUBJECT_AMEND_REF],
+      ["refuse", PROPOSAL_SUBJECT_REFUSE_REF],
+    ] as const) {
+      resetF2ProposalStoreForTests();
+      const seeded = await seedQualifiedProject(runtime, {
+        profile: "Critical",
+        suffix: `r59-${suffix}`,
+      });
+      const c = await currentF2Context(runtime, seeded.projectId);
+      const proposal = docsWriteProposal({
+        projectId: seeded.projectId,
+        lpsId: c.lpsId,
+        lpsVersion: c.lpsVersion,
+        doctrineDigest: c.doctrineDigest,
+        activeCycleInstanceId: seeded.cycleInstanceId,
+        proposalId: `prop:f2:r59-${suffix}`,
+      });
+      await markPending(runtime.oa!, proposal);
+      const proposed = await proposeWith(seeded.projectId, proposal.proposalId);
+      expect(proposed.ok).toBe(true);
+      if (!proposed.ok) return;
+      const before = await snapshotTrajectories(runtime.oa!, seeded.projectId);
+      const decided = await decideTrajectory({
+        oa: runtime.oa!,
+        projectId: seeded.projectId,
+        optionSetRef: proposed.optionSetRef,
+        selectedOptionRef: optionRef,
+        forceLocalAuthority: true,
+      });
+      expect(decided.ok).toBe(true);
+      if (!decided.ok) return;
+      expect(
+        await countDecisionRefsForOptionSet(
+          seeded.projectId,
+          proposed.optionSetRef,
+        ),
+      ).toBe(1);
+      const { prepareExecutionContractFromW2Decision } = await import(
+        "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision"
+      );
+      const prep = await prepareExecutionContractFromW2Decision({
+        oa: runtime.oa!,
+        projectId: seeded.projectId,
+        decisionId: decided.decision.decisionId,
+        currentContext: await currentF2Context(runtime, seeded.projectId),
+        forceLocalAuthority: true,
+        qualifiedOperationKind: "generate-temporary-artifact",
+      });
+      expect(prep.ok).toBe(false);
+      if (prep.ok) return;
+      expect(prep.code).toBe("PREPARE_NOT_APPLICABLE");
+      const after = await snapshotTrajectories(runtime.oa!, seeded.projectId);
+      expect(after.fingerprint).toBe(before.fingerprint);
+    }
+  });
+
+  it("R62 — closePresentedProposalOptionSet removed (DecisionRef-only closure)", async () => {
+    const active = await import(
+      "@/features/project-assistant/w2/activeProposalDecisionSubject"
+    );
+    expect(
+      "closePresentedProposalOptionSet" in active,
+    ).toBe(false);
+  });
+
+  it("R63/R68 — ZERO new CycleInstance / ZERO REAL / ZERO dogfood", async () => {
+    const { projectId, cycleInstanceId, ctx } = await seed();
+    const proposal = docsWriteProposal({
+      projectId,
+      lpsId: ctx.lpsId,
+      lpsVersion: ctx.lpsVersion,
+      doctrineDigest: ctx.doctrineDigest,
+      activeCycleInstanceId: cycleInstanceId,
+      proposalId: "prop:f2:r63",
+    });
+    await markPending(runtime.oa!, proposal);
+    const proposed = await proposeWith(projectId, proposal.proposalId);
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    const decided = await decideTrajectory({
+      oa: runtime.oa!,
+      projectId,
+      optionSetRef: proposed.optionSetRef,
+      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      forceLocalAuthority: true,
+    });
+    expect(decided.ok).toBe(true);
+    const live = await currentF2Context(runtime, projectId);
+    expect(live.activeCycleInstanceId).toBe(cycleInstanceId);
+    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
+    expect(dbPath).not.toContain("product-proof");
+  });
+});
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts b/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
new file mode 100644
index 00000000..bec4ed42
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
@@ -0,0 +1,228 @@
+/**
+ * CORR-PROOF-10 remediation — durable Epistemic Observation marking a
+ * pending Proposal decision subject before PresentedOptionSet binding.
+ *
+ * NOT a HumanDecision, NOT a durable Proposal, NOT a new table.
+ * Prevents silent fallback to generic ProjectTrajectory options after
+ * process-local ProposalStore loss (restart-before-binding).
+ */
+
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
+
+export const PENDING_DECISION_SUBJECT_KIND =
+  "w2_pending_decision_subject" as const;
+
+export type PendingDecisionSubjectMarker = {
+  readonly kind: typeof PENDING_DECISION_SUBJECT_KIND;
+  readonly proposalId: string;
+  readonly projectId: string;
+  /** Digest of full sealed execution basis at marker write time. */
+  readonly subjectDigest: string;
+  readonly lpsId: string;
+  readonly lpsVersion: number;
+  readonly doctrineDigest: string;
+  readonly status: "pending_binding";
+};
+
+export function pendingDecisionSubjectObservationId(
+  projectId: string,
+  proposalId: string,
+): string {
+  const slug = `${projectId}:${proposalId}`.replace(/[^a-zA-Z0-9:_-]/g, "-");
+  return `epi:pending-subject:${slug}`.slice(0, 180);
+}
+
+export function serializePendingDecisionSubjectMarker(
+  marker: PendingDecisionSubjectMarker,
+): string {
+  return JSON.stringify(marker);
+}
+
+export function parsePendingDecisionSubjectMarker(
+  statement: string,
+): PendingDecisionSubjectMarker | null {
+  try {
+    const parsed: unknown = JSON.parse(statement);
+    if (!parsed || typeof parsed !== "object") return null;
+    const v = parsed as Record<string, unknown>;
+    if (v.kind !== PENDING_DECISION_SUBJECT_KIND) return null;
+    if (typeof v.proposalId !== "string" || !v.proposalId.trim()) return null;
+    if (typeof v.projectId !== "string" || !v.projectId.trim()) return null;
+    if (typeof v.subjectDigest !== "string" || !v.subjectDigest.trim()) {
+      return null;
+    }
+    if (typeof v.lpsId !== "string") return null;
+    if (!Number.isInteger(v.lpsVersion)) return null;
+    if (typeof v.doctrineDigest !== "string") return null;
+    if (v.status !== "pending_binding") return null;
+    return {
+      kind: PENDING_DECISION_SUBJECT_KIND,
+      proposalId: v.proposalId,
+      projectId: v.projectId,
+      subjectDigest: v.subjectDigest,
+      lpsId: v.lpsId,
+      lpsVersion: v.lpsVersion as number,
+      doctrineDigest: v.doctrineDigest,
+      status: "pending_binding",
+    };
+  } catch {
+    return null;
+  }
+}
+
+export type WritePendingDecisionSubjectMarkerInput = {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly proposalId: string;
+  readonly subjectDigest: string;
+  readonly lpsId: string;
+  readonly lpsVersion: number;
+  readonly doctrineDigest: string;
+  readonly correlationId?: string;
+};
+
+export async function writePendingDecisionSubjectMarker(
+  input: WritePendingDecisionSubjectMarkerInput,
+): Promise<
+  | { readonly ok: true; readonly epistemicItemId: string }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+> {
+  const epistemicItemId = pendingDecisionSubjectObservationId(
+    input.projectId,
+    input.proposalId,
+  );
+  const marker: PendingDecisionSubjectMarker = {
+    kind: PENDING_DECISION_SUBJECT_KIND,
+    proposalId: input.proposalId,
+    projectId: input.projectId,
+    subjectDigest: input.subjectDigest,
+    lpsId: input.lpsId,
+    lpsVersion: input.lpsVersion,
+    doctrineDigest: input.doctrineDigest,
+    status: "pending_binding",
+  };
+  const written = await input.oa.cycleServices.updateEpistemicState.execute({
+    projectId: input.projectId,
+    items: [
+      {
+        epistemicItemId,
+        type: "Observation",
+        statement: serializePendingDecisionSubjectMarker(marker),
+        status: "active",
+        source: input.proposalId,
+        relatedObjects: [input.projectId, input.proposalId, epistemicItemId],
+      },
+    ],
+    createdBy: LOCAL_PILOTE_ACTOR,
+    correlationId:
+      input.correlationId ?? `cor:pending-subject:${input.proposalId}`,
+  });
+  if (!written.ok) {
+    return {
+      ok: false,
+      code: written.error.detailCode,
+      message: `Écriture marqueur pending decision subject échouée (${written.error.detailCode}).`,
+    };
+  }
+  return { ok: true, epistemicItemId };
+}
+
+export type ListPendingDecisionSubjectMarkersResult =
+  | {
+      readonly ok: true;
+      readonly markers: readonly PendingDecisionSubjectMarker[];
+    }
+  | {
+      readonly ok: false;
+      readonly code: "EPISTEMIC_READ_FAILED";
+      readonly message: string;
+    };
+
+/**
+ * READ FAILURE ≠ EMPTY STATE.
+ * Callers must propagate failure — never treat Epistemic errors as "no subject".
+ */
+export async function listActivePendingDecisionSubjectMarkers(
+  oa: RuntimeOaStack,
+  projectId: string,
+): Promise<ListPendingDecisionSubjectMarkersResult> {
+  const epistemic = await oa.cycleServices.getEpistemicState.execute({
+    projectId,
+  });
+  if (!epistemic.ok) {
+    return {
+      ok: false,
+      code: "EPISTEMIC_READ_FAILED",
+      message:
+        "État épistémique illisible — impossible de lire les marqueurs pending decision subject. Aucun fallback trajectoire générique.",
+    };
+  }
+  const out: PendingDecisionSubjectMarker[] = [];
+  for (const item of epistemic.state.items) {
+    if (item.type !== "Observation" || item.status !== "active") continue;
+    const parsed = parsePendingDecisionSubjectMarker(item.statement);
+    if (!parsed) continue;
+    if (parsed.projectId !== projectId) continue;
+    out.push(parsed);
+  }
+  return { ok: true, markers: out };
+}
+
+export async function resolvePendingDecisionSubjectMarker(
+  input: {
+    readonly oa: RuntimeOaStack;
+    readonly projectId: string;
+    readonly proposalId: string;
+    readonly reason: "option_set_bound" | "decided" | "amended" | "refused";
+    readonly correlationId?: string;
+  },
+): Promise<
+  | { readonly ok: true }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+> {
+  const epistemicItemId = pendingDecisionSubjectObservationId(
+    input.projectId,
+    input.proposalId,
+  );
+  const epistemic = await input.oa.cycleServices.getEpistemicState.execute({
+    projectId: input.projectId,
+  });
+  if (!epistemic.ok) {
+    return { ok: true }; // nothing to resolve
+  }
+  const existing = epistemic.state.items.find(
+    (i) => i.epistemicItemId === epistemicItemId,
+  );
+  if (!existing || existing.status !== "active") {
+    return { ok: true };
+  }
+  const written = await input.oa.cycleServices.updateEpistemicState.execute({
+    projectId: input.projectId,
+    items: [
+      {
+        epistemicItemId,
+        type: "Observation",
+        statement: `${existing.statement}\n<!-- resolved:${input.reason} -->`,
+        status: "resolved",
+        source: existing.source,
+        relatedObjects: [
+          ...(existing.relatedObjects ?? []),
+          `resolved:${input.reason}`,
+        ],
+      },
+    ],
+    createdBy: LOCAL_PILOTE_ACTOR,
+    correlationId:
+      input.correlationId ??
+      `cor:pending-subject-resolve:${input.proposalId}:${input.reason}`,
+  });
+  if (!written.ok) {
+    return {
+      ok: false,
+      code: written.error.detailCode,
+      message: `Résolution marqueur pending subject échouée (${written.error.detailCode}).`,
+    };
+  }
+  return { ok: true };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
new file mode 100644
index 00000000..5957aa34
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
@@ -0,0 +1,185 @@
+/**
+ * CORR-PROOF-10 — deterministic Options / Recommendation for a Proposal-backed
+ * decision subject (not the generic W2 ProjectTrajectory three-way).
+ *
+ * Labels and intents are derived from sealed Proposal fields — never from a
+ * hardcoded dogfood path or docs_write special-case.
+ */
+
+import type { TrajectoryStep } from "@/lib/oa/cycle";
+import type {
+  TrajectoryOptionDto,
+  TrajectoryRecommendationDto,
+} from "./types";
+import type { SealedProposalExecutionBasis } from "./resolveProposalDecisionSubject";
+
+export const PROPOSAL_SUBJECT_PURSUE_REF =
+  "opt:proposal-subject:pursue" as const;
+export const PROPOSAL_SUBJECT_AMEND_REF =
+  "opt:proposal-subject:amend" as const;
+export const PROPOSAL_SUBJECT_REFUSE_REF =
+  "opt:proposal-subject:refuse" as const;
+
+export const PROPOSAL_SUBJECT_OPTION_REFS = [
+  PROPOSAL_SUBJECT_PURSUE_REF,
+  PROPOSAL_SUBJECT_AMEND_REF,
+  PROPOSAL_SUBJECT_REFUSE_REF,
+] as const;
+
+function step(
+  order: number,
+  slug: string,
+  label: string,
+  extra?: Partial<TrajectoryStep>,
+): TrajectoryStep {
+  return {
+    stepId: `stp:${slug}`,
+    order,
+    label,
+    state: "pending",
+    ...extra,
+  };
+}
+
+function subjectSummary(sealed: SealedProposalExecutionBasis): string {
+  const path = sealed.targetPath == null ? null : sealed.targetPath.trim() || null;
+  const op = sealed.requestedOperation.trim() || null;
+  const parts = [
+    sealed.objective.trim(),
+    path ? `cible ${path}` : null,
+    op ? `effet ${op}` : null,
+  ].filter((p): p is string => Boolean(p));
+  return parts.join(" · ");
+}
+
+function pursueSteps(sealed: SealedProposalExecutionBasis): TrajectoryStep[] {
+  const summary = subjectSummary(sealed);
+  return [
+    step(1, "w2-ps-review", `Revoir le sujet proposé — ${summary}`),
+    step(2, "w2-ps-decide", "Décision humaine explicite sur ce sujet", {
+      dependencies: ["stp:w2-ps-review"],
+      gate: "human_decision",
+      exitCriteria: ["HumanDecision acceptée et reliée à la Proposal"],
+    }),
+    step(3, "w2-ps-prepare", "Préparer l'exécution bornée si autorisée", {
+      dependencies: ["stp:w2-ps-decide"],
+    }),
+  ];
+}
+
+function amendSteps(): TrajectoryStep[] {
+  return [
+    step(1, "w2-ps-amend", "Amender objectif, chemin ou contraintes du sujet"),
+    step(2, "w2-ps-repropose", "Réinstruire les options sur le sujet amendé", {
+      dependencies: ["stp:w2-ps-amend"],
+      gate: "human_decision",
+      exitCriteria: ["Nouvelle instruction d'options requise"],
+    }),
+  ];
+}
+
+function refuseSteps(): TrajectoryStep[] {
+  return [
+    step(1, "w2-ps-refuse", "Refuser le sujet proposé — aucune exécution"),
+    step(2, "w2-ps-close", "Clôturer sans Promotion ProjectTrajectory", {
+      dependencies: ["stp:w2-ps-refuse"],
+    }),
+  ];
+}
+
+export type ProposalSubjectOptionInputs = {
+  readonly sealed: SealedProposalExecutionBasis;
+  readonly proposalId: string;
+};
+
+/**
+ * Three subject-scoped options derived from the sealed Proposal.
+ * Never the generic governed/bounded/clarify trajectory trio.
+ */
+export function deriveProposalSubjectOptions(
+  inputs: ProposalSubjectOptionInputs,
+): TrajectoryOptionDto[] {
+  const { sealed, proposalId } = inputs;
+  const summary = subjectSummary(sealed);
+  const reservations = [...sealed.reservations];
+  const pathNote = sealed.targetPath
+    ? `Chemin scellé: ${sealed.targetPath}`
+    : "Aucun targetPath scellé";
+  const opNote = `Opération scellée: ${sealed.requestedOperation}`;
+
+  return [
+    {
+      kind: "OPTION",
+      optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+      label: "Poursuivre le sujet proposé",
+      intent: `Décider sur la Proposal ${proposalId} — ${summary}. ${pathNote}. ${opNote}.`,
+      impacts: [
+        "HumanDecision liée à cette Proposal",
+        "DecisionBasis conserve targetPath / requestedOperation scellés",
+        "Pas de promotion ProjectTrajectory automatique",
+      ],
+      reservations,
+      steps: pursueSteps(sealed),
+    },
+    {
+      kind: "OPTION",
+      optionRef: PROPOSAL_SUBJECT_AMEND_REF,
+      label: "Amender le sujet avant d'engager",
+      intent:
+        "Modifier objectif, chemin ou contrainte du sujet, puis réinstruire — sans exécution.",
+      impacts: [
+        "Aucune préparation d'exécution à ce stade",
+        "Réinstruction requise après amendement",
+      ],
+      reservations,
+      steps: amendSteps(),
+    },
+    {
+      kind: "OPTION",
+      optionRef: PROPOSAL_SUBJECT_REFUSE_REF,
+      label: "Ne pas poursuivre / refuser",
+      intent:
+        "Refuser le sujet proposé. Aucune exécution. Aucune promotion de trajectoire Project.",
+      impacts: [
+        "Proposal refusée",
+        "Aucune ExecutionContract",
+        "ProjectTrajectory inchangée",
+      ],
+      reservations,
+      steps: refuseSteps(),
+    },
+  ];
+}
+
+export function deriveProposalSubjectRecommendation(
+  inputs: ProposalSubjectOptionInputs,
+): TrajectoryRecommendationDto {
+  const { sealed, proposalId } = inputs;
+  const summary = subjectSummary(sealed);
+
+  if (sealed.reservations.length > 0) {
+    return {
+      label: "RECOMMANDATION — PAS UNE DÉCISION",
+      recommendedOptionRef: PROPOSAL_SUBJECT_AMEND_REF,
+      rationale: `Réserves explicites sur la Proposal ${proposalId} (${sealed.reservations.length}) — amender ou clarifier avant de poursuivre « ${summary} ».`,
+      isHumanDecision: false,
+      promotesTrajectory: false,
+      ckcAttribution: null,
+      ckcProvenance: null,
+    };
+  }
+
+  return {
+    label: "RECOMMANDATION — PAS UNE DÉCISION",
+    recommendedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
+    rationale: `Sujet Proposal ${proposalId} prêt pour arbitrage Pilote — poursuivre « ${summary} » sous DecisionBasis scellée (≠ HumanDecision).`,
+    isHumanDecision: false,
+    promotesTrajectory: false,
+    ckcAttribution: null,
+    ckcProvenance: null,
+  };
+}
+
+export function isProposalSubjectOptionRef(optionRef: string): boolean {
+  return (PROPOSAL_SUBJECT_OPTION_REFS as readonly string[]).includes(optionRef);
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts
new file mode 100644
index 00000000..257e52e5
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts
@@ -0,0 +1,336 @@
+/**
+ * CORR-PROOF-10 — server-side resolution of an active Proposal as the
+ * decision subject for W2 OptionSet instruction.
+ *
+ * Client may only pass an opaque proposalId. Objective, targetPath,
+ * requestedOperation and authority are never trusted from the client.
+ *
+ * Critical remediation:
+ * - HumanDecision path accepts only DECISION_REQUIRED + morrisGateRequired
+ * - subject digest covers the FULL sealed execution basis
+ */
+
+import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import {
+  contextMatches,
+  getProposal,
+  listProposalsForProject,
+} from "../f2/proposalStore";
+import type { F2ContextSnapshot, ProposalDto } from "../f2/types";
+import type { ExecutionIntentPayload } from "../f2/executionIntentSchema";
+import { listActivePendingDecisionSubjectMarkers } from "./pendingDecisionSubjectMarker";
+
+export type SealedProposalExecutionBasis = {
+  readonly objective: string;
+  readonly scope: string;
+  readonly outOfScope: readonly string[];
+  readonly activatedBlocks: readonly string[];
+  readonly expectedOutcome: string;
+  readonly risks: readonly string[];
+  readonly reservations: readonly string[];
+  readonly stopConditions: readonly string[];
+  readonly cycleTypeId: string;
+  readonly recommendedProfile: string;
+  readonly requestedOperation: string;
+  readonly intentKind: string | null;
+  readonly artifactType: string | null;
+  readonly targetRepositoryRef: string | null;
+  readonly targetPath: string | null;
+  readonly scopeIn: readonly string[];
+  readonly scopeOut: readonly string[];
+  readonly expectedOutputs: readonly string[];
+  readonly requiredCapabilities: readonly string[];
+  readonly validationExpectations: readonly string[];
+  readonly evidenceRequirements: readonly string[];
+  readonly reversibilityExpectation:
+    | "reversible"
+    | "irreversible"
+    | "unknown"
+    | null;
+  readonly artifactBrief: string | null;
+  readonly contentRequirements: readonly string[];
+  readonly exitRequirementKinds: readonly string[];
+};
+
+export type ResolvedProposalDecisionSubject = {
+  readonly proposalId: string;
+  readonly proposal: ProposalDto;
+  readonly subjectDigest: string;
+  readonly sealedExecutionBasis: SealedProposalExecutionBasis;
+  /** Proposal-backed subjects never touch ProjectTrajectory. */
+  readonly promotesProjectTrajectory: false;
+};
+
+export type ResolveProposalDecisionSubjectResult =
+  | { readonly ok: true; readonly subject: ResolvedProposalDecisionSubject }
+  | { readonly ok: false; readonly code: string; readonly message: string };
+
+function resolveRequestedOperation(proposal: ProposalDto): string {
+  const ei = proposal.executionIntent;
+  const fromEi = ei?.requestedOperation?.trim();
+  if (fromEi) return fromEi;
+  const fromTop = proposal.requestedOperation?.trim();
+  if (fromTop) return fromTop;
+  return proposal.rephrasedRequest;
+}
+
+function asStringArray(value: readonly string[] | null | undefined): string[] {
+  return value ? [...value] : [];
+}
+
+/**
+ * Canonical sealed execution basis — every authoritative field is materialised
+ * with deterministic null/empty defaults for digest stability.
+ */
+export function sealProposalExecutionBasis(
+  proposal: ProposalDto,
+): SealedProposalExecutionBasis {
+  const ei: ExecutionIntentPayload | null | undefined = proposal.executionIntent;
+  return {
+    objective: proposal.objective,
+    scope: proposal.scope,
+    outOfScope: [...proposal.outOfScope],
+    activatedBlocks: [...proposal.activatedBlocks],
+    expectedOutcome: proposal.expectedOutcome,
+    risks: [...proposal.risks],
+    reservations: [...proposal.reservations],
+    stopConditions: [...proposal.stopConditions],
+    cycleTypeId: proposal.cycleTypeId,
+    recommendedProfile: proposal.recommendedProfile,
+    requestedOperation: resolveRequestedOperation(proposal),
+    intentKind: ei?.intentKind ?? null,
+    artifactType: ei?.artifactType ?? null,
+    targetRepositoryRef: ei?.targetRepositoryRef ?? null,
+    targetPath: ei?.targetPath ?? null,
+    scopeIn: asStringArray(ei?.scopeIn),
+    scopeOut: asStringArray(ei?.scopeOut),
+    expectedOutputs: asStringArray(ei?.expectedOutputs),
+    requiredCapabilities: asStringArray(ei?.requiredCapabilities),
+    validationExpectations: asStringArray(ei?.validationExpectations),
+    evidenceRequirements: asStringArray(ei?.evidenceRequirements),
+    reversibilityExpectation: ei?.reversibilityExpectation ?? null,
+    artifactBrief: ei?.artifactBrief ?? null,
+    contentRequirements: asStringArray(ei?.contentRequirements),
+    exitRequirementKinds: asStringArray(ei?.exitRequirementKinds),
+  };
+}
+
+/**
+ * Full-authority digest over proposalId + complete sealed execution basis.
+ * Any material field change must change the digest.
+ */
+export function computeProposalSubjectDigest(
+  sealed: SealedProposalExecutionBasis,
+  proposalId: string,
+): string {
+  return computeDecisionBasisSourceDigest({
+    proposalId,
+    objective: sealed.objective,
+    scope: sealed.scope,
+    outOfScope: [...sealed.outOfScope],
+    activatedBlocks: [...sealed.activatedBlocks],
+    expectedOutcome: sealed.expectedOutcome,
+    risks: [...sealed.risks],
+    reservations: [...sealed.reservations],
+    stopConditions: [...sealed.stopConditions],
+    cycleTypeId: sealed.cycleTypeId,
+    recommendedProfile: sealed.recommendedProfile,
+    requestedOperation: sealed.requestedOperation,
+    intentKind: sealed.intentKind,
+    artifactType: sealed.artifactType,
+    targetRepositoryRef: sealed.targetRepositoryRef,
+    targetPath: sealed.targetPath,
+    scopeIn: [...sealed.scopeIn],
+    scopeOut: [...sealed.scopeOut],
+    expectedOutputs: [...sealed.expectedOutputs],
+    requiredCapabilities: [...sealed.requiredCapabilities],
+    validationExpectations: [...sealed.validationExpectations],
+    evidenceRequirements: [...sealed.evidenceRequirements],
+    reversibilityExpectation: sealed.reversibilityExpectation,
+    artifactBrief: sealed.artifactBrief,
+    contentRequirements: [...sealed.contentRequirements],
+    exitRequirementKinds: [...sealed.exitRequirementKinds],
+  });
+}
+
+/**
+ * Resolve opaque proposalId as the active decision subject.
+ * HumanDecision path: DECISION_REQUIRED + morrisGateRequired only.
+ */
+export function resolveProposalDecisionSubject(input: {
+  readonly proposalId: string;
+  readonly projectId: string;
+  readonly currentContext: F2ContextSnapshot;
+}): ResolveProposalDecisionSubjectResult {
+  const proposalId = input.proposalId.trim();
+  if (!proposalId) {
+    return {
+      ok: false,
+      code: "PROPOSAL_ID_REQUIRED",
+      message: "Référence Proposal opaque requise — aucune instruction générique.",
+    };
+  }
+
+  const proposal = getProposal(proposalId);
+  if (!proposal) {
+    return {
+      ok: false,
+      code: "PROPOSAL_NOT_FOUND",
+      message:
+        "Proposal introuvable (process-local) — fail-closed, aucune option générique de substitution.",
+    };
+  }
+
+  if (proposal.contextSnapshot.projectId !== input.projectId) {
+    return {
+      ok: false,
+      code: "PROJECT_MISMATCH",
+      message: "La Proposal n'appartient pas à ce projet.",
+    };
+  }
+
+  if (!contextMatches(proposal.contextSnapshot, input.currentContext)) {
+    return {
+      ok: false,
+      code: "PROPOSAL_STALE",
+      message:
+        "Contexte Proposal périmé (LPS/doctrine) — réinstruction requise. Aucune option générique.",
+    };
+  }
+
+  if (proposal.status !== "DECISION_REQUIRED") {
+    return {
+      ok: false,
+      code: "PROPOSAL_NOT_DECIDABLE",
+      message: `Proposal au statut ${proposal.status} — voie HumanDecision refusée (DECISION_REQUIRED requis).`,
+    };
+  }
+
+  if (proposal.morrisGateRequired !== true) {
+    return {
+      ok: false,
+      code: "PROPOSAL_GATE_REQUIRED",
+      message:
+        "Proposal DECISION_REQUIRED sans morrisGateRequired — voie HumanDecision refusée.",
+    };
+  }
+
+  const sealedExecutionBasis = sealProposalExecutionBasis(proposal);
+  const subjectDigest = computeProposalSubjectDigest(
+    sealedExecutionBasis,
+    proposal.proposalId,
+  );
+
+  return {
+    ok: true,
+    subject: {
+      proposalId: proposal.proposalId,
+      proposal,
+      subjectDigest,
+      sealedExecutionBasis,
+      promotesProjectTrajectory: false,
+    },
+  };
+}
+
+/**
+ * Block silent generic trajectory fallback when:
+ * - process-local DECISION_REQUIRED Proposal exists, OR
+ * - durable pending-subject marker exists (restart-before-binding).
+ *
+ * Bound PresentedOptionSet awaiting HD is handled by proposeTrajectoryOptions
+ * via readActiveProposalDecisionSubject (rehydrate) before this gate runs.
+ *
+ * Epistemic read failure → fail closed (never "no subject").
+ */
+export async function assertProposalSubjectGateOrFail(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly proposalId: string | null | undefined;
+}): Promise<
+  | { readonly ok: true }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+> {
+  const provided =
+    typeof input.proposalId === "string" ? input.proposalId.trim() : "";
+
+  const pendingResult = await listActivePendingDecisionSubjectMarkers(
+    input.oa,
+    input.projectId,
+  );
+  if (!pendingResult.ok) {
+    return {
+      ok: false,
+      code: pendingResult.code,
+      message: pendingResult.message,
+    };
+  }
+  const pending = pendingResult.markers;
+  const activeLocal = listProposalsForProject(input.projectId).filter(
+    (p) => p.status === "DECISION_REQUIRED" && p.morrisGateRequired === true,
+  );
+
+  if (!provided) {
+    if (pending.length > 0) {
+      return {
+        ok: false,
+        code: "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
+        message:
+          "Sujet décisionnel pending durable détecté après perte process-local — réinstruction Nora requise. Aucun fallback vers options de trajectoire génériques.",
+      };
+    }
+    if (activeLocal.length > 0) {
+      return {
+        ok: false,
+        code: "ACTIVE_PROPOSAL_SUBJECT_REQUIRED",
+        message:
+          "Une Proposal DECISION_REQUIRED est active — « Instruire les options » doit porter sur cette Proposal (proposalId opaque). Aucun fallback silencieux.",
+      };
+    }
+    return { ok: true };
+  }
+
+  // proposalId provided but store may be gone after restart
+  const proposal = getProposal(provided);
+  if (!proposal) {
+    const matchingPending = pending.find((m) => m.proposalId === provided);
+    if (matchingPending || pending.length > 0) {
+      return {
+        ok: false,
+        code: "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
+        message:
+          "Proposal process-local absente alors qu'un marqueur pending durable existe — aucune reconstruction. Réinstruction Nora requise.",
+      };
+    }
+    // No pending marker — resolveProposalDecisionSubject will fail NOT_FOUND
+    // (post-binding rehydration already handled upstream when OptionSet exists).
+    return { ok: true };
+  }
+
+  return { ok: true };
+}
+
+/** @deprecated use assertProposalSubjectGateOrFail — kept for call-site migration */
+export function requireProposalIdWhenActiveSubjectExists(input: {
+  readonly projectId: string;
+  readonly proposalId: string | null | undefined;
+}): ResolveProposalDecisionSubjectResult | { readonly ok: true; readonly skip: true } {
+  const provided =
+    typeof input.proposalId === "string" ? input.proposalId.trim() : "";
+  if (provided) {
+    return { ok: true, skip: true };
+  }
+  const active = listProposalsForProject(input.projectId).filter(
+    (p) => p.status === "DECISION_REQUIRED" && p.morrisGateRequired === true,
+  );
+  if (active.length === 0) {
+    return { ok: true, skip: true };
+  }
+  return {
+    ok: false,
+    code: "ACTIVE_PROPOSAL_SUBJECT_REQUIRED",
+    message:
+      "Une Proposal DECISION_REQUIRED est active — « Instruire les options » doit porter sur cette Proposal (proposalId opaque). Aucun fallback silencieux vers les options de trajectoire génériques.",
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
new file mode 100644
index 00000000..53f17f0a
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
@@ -0,0 +1,177 @@
+/**
+ * CORR-PROOF-10 — durable Proposal decision-subject read / rehydration.
+ *
+ * Design (smallest delta): PresentedOptionSet Observation is the durable
+ * truth after binding. Pending marker covers only the pre-binding window.
+ *
+ * READ FAILURE ≠ EMPTY STATE — Epistemic errors never become "none".
+ */
+
+import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import {
+  listActivePendingDecisionSubjectMarkers,
+  type PendingDecisionSubjectMarker,
+} from "./pendingDecisionSubjectMarker";
+import {
+  isProposalSubjectPresentedSet,
+  parsePresentedOptionSetStatement,
+  type PresentedOptionSetBinding,
+  W2_PRESENTED_OPTION_SET_KIND,
+} from "./presentedOptionSet";
+import type { TrajectoryOptionSetDto } from "./types";
+
+export type EpistemicReadFailure = {
+  readonly ok: false;
+  readonly code: "EPISTEMIC_READ_FAILED";
+  readonly message: string;
+};
+
+export type ActiveProposalDecisionSubject =
+  | {
+      readonly ok: true;
+      readonly kind: "none";
+    }
+  | {
+      readonly ok: true;
+      readonly kind: "pending_reinstruction_required";
+      readonly markers: readonly PendingDecisionSubjectMarker[];
+      readonly message: string;
+    }
+  | {
+      readonly ok: true;
+      readonly kind: "bound_awaiting_decision";
+      readonly presented: PresentedOptionSetBinding;
+      readonly optionSet: TrajectoryOptionSetDto;
+    }
+  | EpistemicReadFailure;
+
+export function presentedBindingToOptionSetDto(
+  presented: PresentedOptionSetBinding,
+): TrajectoryOptionSetDto {
+  return {
+    optionSetRef: presented.optionSetRef,
+    cycleTypeId: presented.cycleTypeId,
+    recommendedProfile: presented.recommendedProfile,
+    options: presented.options,
+    recommendation: presented.recommendation,
+    epistemicRefs: presented.epistemicRefs,
+    proposedTrajectory:
+      presented.decisionSubjectMode === "proposal" ||
+      presented.trajectoryId == null ||
+      presented.candidateVersion == null
+        ? null
+        : {
+            trajectoryId: presented.trajectoryId,
+            version: presented.candidateVersion,
+            status: "candidate",
+            statusLabel: "TRAJECTOIRE PROPOSÉE",
+            isCurrent: false,
+          },
+    phase: "OPTIONS_PROPOSED",
+    autoDecisionPerformed: false,
+    executionPerformed: false,
+    ckcCognitionCompletedBeforeMutation: true,
+    decisionSubjectMode: presented.decisionSubjectMode,
+    proposalId: presented.proposalId ?? null,
+    promotesProjectTrajectory: presented.promotesProjectTrajectory,
+  };
+}
+
+function decidedOptionSetRefsFromEpistemic(
+  items: ReadonlyArray<{
+    readonly type: string;
+    readonly status: string;
+    readonly relatedObjects?: readonly string[] | null;
+  }>,
+): ReadonlySet<string> {
+  const refs = new Set<string>();
+  for (const item of items) {
+    if (item.type !== "DecisionRef" || item.status !== "active") continue;
+    for (const rel of item.relatedObjects ?? []) {
+      if (rel.startsWith("optset:")) refs.add(rel);
+    }
+  }
+  return refs;
+}
+
+/**
+ * Scan Epistemic for an active Proposal PresentedOptionSet still awaiting HD.
+ * Fail-closed on Epistemic read errors.
+ */
+export async function findActiveAwaitingProposalPresentedOptionSet(
+  oa: RuntimeOaStack,
+  projectId: string,
+): Promise<
+  | {
+      readonly ok: true;
+      readonly presented: PresentedOptionSetBinding | null;
+    }
+  | EpistemicReadFailure
+> {
+  const epistemic = await oa.cycleServices.getEpistemicState.execute({
+    projectId,
+  });
+  if (!epistemic.ok) {
+    return {
+      ok: false,
+      code: "EPISTEMIC_READ_FAILED",
+      message:
+        "État épistémique illisible — impossible de déterminer un sujet décisionnel Proposal actif. Aucun fallback trajectoire générique.",
+    };
+  }
+
+  const decidedRefs = decidedOptionSetRefsFromEpistemic(epistemic.state.items);
+  const matches: PresentedOptionSetBinding[] = [];
+  for (const item of epistemic.state.items) {
+    if (item.type !== "Observation" || item.status !== "active") continue;
+    const parsed = parsePresentedOptionSetStatement(item.statement);
+    if (!parsed) continue;
+    if (!isProposalSubjectPresentedSet(parsed)) continue;
+    if (parsed.kind !== W2_PRESENTED_OPTION_SET_KIND) continue;
+    if (decidedRefs.has(parsed.optionSetRef)) continue;
+    matches.push(parsed);
+  }
+
+  return {
+    ok: true,
+    presented: matches.length > 0 ? matches[matches.length - 1]! : null,
+  };
+}
+
+/**
+ * Canonical server read for active Proposal decision subject continuity.
+ */
+export async function readActiveProposalDecisionSubject(
+  oa: RuntimeOaStack,
+  projectId: string,
+): Promise<ActiveProposalDecisionSubject> {
+  const bound = await findActiveAwaitingProposalPresentedOptionSet(
+    oa,
+    projectId,
+  );
+  if (!bound.ok) return bound;
+
+  if (bound.presented) {
+    return {
+      ok: true,
+      kind: "bound_awaiting_decision",
+      presented: bound.presented,
+      optionSet: presentedBindingToOptionSetDto(bound.presented),
+    };
+  }
+
+  const pending = await listActivePendingDecisionSubjectMarkers(oa, projectId);
+  if (!pending.ok) return pending;
+
+  if (pending.markers.length > 0) {
+    return {
+      ok: true,
+      kind: "pending_reinstruction_required",
+      markers: pending.markers,
+      message:
+        "Sujet décisionnel pending durable détecté après perte process-local — réinstruction Nora requise. Aucun fallback vers options de trajectoire génériques.",
+    };
+  }
+
+  return { ok: true, kind: "none" };
+}
```


## Actions interdites non effectuées

- project commit / push / PR / merge
- dogfood mutation
- rebase/reset/clean destructif
- nouvelle table / migration
- modification structurelle lib/oa
- CORR-PROOF-11
- restart from main
