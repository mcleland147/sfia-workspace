# CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — FULL Review Pack (Hybrid UX)

**Timestamp:** 2026-09-27T18:43:43.167Z
**Verdict:** `READY FOR CHATGPT CRITICAL REVIEW`

**Repo:** mcleland147/sfia-workspace
**Worktree:** /Users/morris/Projects/sfia-workspace-chat-first-governed-decision-loop-01
**Branch:** `feat/sfia-studio-chat-first-governed-decision-loop-01`
**HEAD (uncommitted local candidate base):** `955e86d2ea6eb0ed19dff1e66f578d61edeb3522`
**origin/main:** `955e86d2ea6eb0ed19dff1e66f578d61edeb3522`
**Prior handoff superseded:** `117e042f`

**Anti-claims:** NOT REAL PROVEN · NOT READY FOR REAL · NOT PROJECT GIT INTEGRATED · NOT PRODUCT GLOBAL READY · RUNTIME V3 NON ADOPTED

---

## 1. Git Truth

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/oa/cycle/deriveWorkRecommendations.d0.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/undisposedRecommendations.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/chatFirstPilotDecisionCandidate.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts
?? projects/sfia-studio/app/features/project-assistant/w2/deferWorkRecommendation.ts
?? projects/sfia-studio/app/features/project-assistant/w2/disposeWorkRecommendation.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/deriveUndisposedRecommendations.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts

```

ZERO project commits on feat vs origin/main.

---

## 2. Décision Morris superseding Lifecycle Chat-first

**Hybrid UX (binding):**
- Work Recommendations = **Chat-first** nominal
- Lifecycle Recommendations (NEXT_CYCLE / FINALIZE_CURRENT_CYCLE) = **explicit Studio actions** (prepare trajectory / approve / prepare cycle / START / FINALIZE)
- Chat « oui » **never** START/FINALIZE solely because a Lifecycle Recommendation is CURRENT
- `pilotDecisionCandidate` must **not** trigger START/FINALIZE

This SUPERSEDES the candidate Lifecycle Chat-first orchestration previously published in handoff `117e042f`.

---

## 3. Architecture fonctionnelle finale

### Work
Nora Work Recommendation → Pilot chat disposition → NON-AUTHORITATIVE candidate → `resolveChatFirstPilotDecision` → `decideTrajectory` → dispose Work Recommendation → PREPARE when accept.

### Lifecycle
Lifecycle Recommendation CURRENT → right panel / lifecycle surface → existing prepare/approve/start/finalize actions → existing HumanDecision lifecycle engines. **Not chat-first.**

### Journal
Sujets | Réserves | Recommandations(Work) | Décisions — Lifecycle ABSENT from Recommandations tab.

### Finalization
`undisposed_recommendations` = Work of cycle only. Lifecycle NEXT/FINALIZE never that blocker.

---

## 4. Candidate-only deletions (Lifecycle Chat-first)

Proved absent from base `955e86d2`; removed from local candidate:

- `projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstLifecycleTransition.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstLifecycleEligibility.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/loadChatFirstLifecycleMaterial.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/chatFirstLifecycleTransition.d0.test.ts`

No historical main asset deleted.

---

## 5. KEEP / ADAPT / RETIRE

| KEEP | ADAPT | RETIRE FROM NOMINAL WORK UX | RETIRE FROM CANDIDATE |
|---|---|---|---|
| decideTrajectory, HD OA, Reservation, assessFinalization, lifecycle machinery, START/FINALIZE engines, Fake spine | Work chat decisions, Journal Work projection, Work blockers/defer, Bible | Instruire/Décider/Modifier Work CTAs | Lifecycle Chat-first resolver modules + tests; pilotDecisionCandidate→START/FINALIZE |

---

## 6. Tests + validations (FINAL tree — after code + Bible + digests)

Working directory: `projects/sfia-studio/app`

| Command | Result |
|---|---|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS (0 warnings/errors) |
| `npm run build` | PASS |
| Targeted hybrid suite (frontDoor chat-first + #536 + undisposed + deriveWork + UI + candidate + importBoundaries + lifecycleClosure) | **8 files / 63 tests PASS** |
| Full `npm test` (AFTER final digests) | **Test Files 450 passed \| 17 skipped (467)** · **Tests 4955 passed \| 137 skipped (5092)** · **0 FAIL** · Duration ~58.8s |

ZERO REAL. Proof ceiling: DETERMINISTIC only.

---

## 7. COMPLETE FILES


### FILE: `projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts`

```typescript
/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — server-side resolution of a
 * NON-AUTHORITATIVE Pilot disposition candidate into (at most) ONE durable
 * HumanDecision on an already-presented governed decision subject.
 *
 * Doctrine boundaries enforced here:
 * - the candidate is NEVER a HumanDecision; it only selects WHICH sealed
 *   option of an existing PresentedOptionSet the server submits to the
 *   existing `decideTrajectory` writer;
 * - option refs are read from the sealed durable binding, never from the model;
 * - ambiguity / absence of a unique eligible subject records NOTHING and never
 *   locks the rest of the conversation (governed action fails closed, the
 *   conversation stays open);
 * - no new store, no new HumanDecision writer, no DEFERRED enum invention.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { PilotDecisionDisposition } from "../f2/types";
import {
  listEffectivePendingDecisionSubjectMarkers,
  readActiveProposalDecisionSubject,
} from "./activeProposalDecisionSubject";
import { decideTrajectory, trajectoryDecisionScope } from "./decideTrajectory";
import {
  isProposalSubjectPresentedSet,
  type PresentedOptionSetBinding,
} from "./presentedOptionSet";
import {
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "./proposalSubjectOptions";
import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "./qualificationInputs";
import { pilotAmbiguousPendingMessage } from "../presentationLabels";
import { deferWorkRecommendation } from "./deferWorkRecommendation";

/** Dispositions that can carry a governed effect (incl. durable defer). */
export type ChatFirstEffectiveDisposition =
  | "accept"
  | "refuse"
  | "amend"
  | "defer";

export type ChatFirstPilotDecisionResult =
  /** Nothing to dispose — normal orchestration continues untouched. */
  | { readonly kind: "no_decision" }
  /** More than one effective pending subject — Studio never selects for the Pilot. */
  | {
      readonly kind: "ambiguous_subjects";
      readonly message: string;
      readonly proposalIds: readonly string[];
    }
  /** No unique bound subject with a sealed PresentedOptionSet — governed action fails closed. */
  | {
      readonly kind: "no_eligible_subject";
      readonly message: string;
      readonly code?: string;
    }
  /** Durable epistemic/subject read failed — never downgraded to "no subject". */
  | {
      readonly kind: "subject_read_failed";
      readonly code: string;
      readonly message: string;
    }
  /** Defer target could not be resolved honestly — conversation stays open. */
  | {
      readonly kind: "defer_target_unresolved";
      readonly message: string;
      readonly code?: string;
    }
  /** Subject was eligible but the existing writer refused — nothing recorded. */
  | {
      readonly kind: "decision_refused";
      readonly code: string;
      readonly message: string;
    }
  | {
      readonly kind: "decision_recorded";
      readonly disposition: ChatFirstEffectiveDisposition;
      readonly decisionId: string;
      readonly proposalId: string | null;
      readonly optionSetRef: string;
      readonly selectedOptionRef: string;
      readonly scope: string;
      readonly capturedAt: string;
      readonly decisionBasisLinked: boolean;
      readonly readyForNextGatedStep: boolean;
    };

const SELECTED_OPTION_BY_DISPOSITION: Record<
  Exclude<ChatFirstEffectiveDisposition, "defer">,
  string
> = {
  accept: PROPOSAL_SUBJECT_PURSUE_REF,
  refuse: PROPOSAL_SUBJECT_REFUSE_REF,
  amend: PROPOSAL_SUBJECT_AMEND_REF,
};

const NO_ELIGIBLE_SUBJECT_MESSAGE =
  "Aucun sujet de décision gouverné unique n'est ouvert pour ce projet — aucune décision n'a été enregistrée. La conversation reste ouverte.";

export function toEffectiveDisposition(
  disposition: PilotDecisionDisposition | null | undefined,
): ChatFirstEffectiveDisposition | "defer" | null {
  if (disposition === "accept") return "accept";
  if (disposition === "refuse") return "refuse";
  if (disposition === "amend") return "amend";
  if (disposition === "defer") return "defer";
  return null;
}

/**
 * Bind a sealed PresentedOptionSet for a unique pre-binding pending subject.
 *
 * FR-01 pattern without the « Instruire les options » CTA: the option set is
 * server-materialised from the durable pending marker, so a chat-first
 * disposition always decides on a sealed set instead of a model payload.
 */
async function materializeSealedOptionSetForPendingSubject(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly proposalId: string;
}): Promise<
  | { readonly ok: true; readonly presented: PresentedOptionSetBinding }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const qualification = await resolveW2QualificationInputs({
    oa: input.oa,
    projectId: input.projectId,
  });
  if (!qualification.ok) {
    return {
      ok: false,
      code: qualification.code,
      message: qualification.message,
    };
  }

  const proposed = await proposeTrajectoryOptions({
    oa: input.oa,
    projectId: input.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
    proposalId: input.proposalId,
  });
  if (!proposed.ok) {
    return { ok: false, code: proposed.code, message: proposed.message };
  }

  // Re-read durable truth: the freshly written Observation is the SoT, not the
  // in-memory result of the writer.
  const rebound = await readActiveProposalDecisionSubject(
    input.oa,
    input.projectId,
  );
  if (!rebound.ok) {
    return { ok: false, code: rebound.code, message: rebound.message };
  }
  if (rebound.kind !== "bound_awaiting_decision") {
    return {
      ok: false,
      code: "SEALED_OPTION_SET_NOT_BOUND",
      message:
        "Le jeu d'options scellé n'a pas pu être relié au sujet en attente — aucune décision enregistrée.",
    };
  }
  return { ok: true, presented: rebound.presented };
}

export async function resolveChatFirstPilotDecision(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly disposition: PilotDecisionDisposition | null | undefined;
  /** Non-authoritative hint carried into the decision reserves; never authority. */
  readonly rationale?: string | null;
  /** Test inject for the local single-user authority gate. */
  readonly forceLocalAuthority?: boolean;
}): Promise<ChatFirstPilotDecisionResult> {
  const effective = toEffectiveDisposition(input.disposition);
  if (effective == null) return { kind: "no_decision" };

  const subject = await readActiveProposalDecisionSubject(
    input.oa,
    input.projectId,
  );
  if (!subject.ok) {
    return {
      kind: "subject_read_failed",
      code: subject.code,
      message: subject.message,
    };
  }

  let presented: PresentedOptionSetBinding;
  if (subject.kind === "bound_awaiting_decision") {
    // A second effective pending subject alongside a bound one is a competing
    // sealed-subject situation: Studio never picks one for the Pilot.
    const pending = await listEffectivePendingDecisionSubjectMarkers(
      input.oa,
      input.projectId,
    );
    if (!pending.ok) {
      return {
        kind: "subject_read_failed",
        code: pending.code,
        message: pending.message,
      };
    }
    const competing = pending.markers.filter(
      (m) => m.proposalId !== subject.presented.proposalId,
    );
    if (competing.length > 0) {
      return {
        kind: "ambiguous_subjects",
        message: pilotAmbiguousPendingMessage(),
        proposalIds: [
          ...(subject.presented.proposalId
            ? [subject.presented.proposalId]
            : []),
          ...competing.map((m) => m.proposalId),
        ],
      };
    }
    presented = subject.presented;
  } else if (subject.kind === "pending_reinstruction_required") {
    if (subject.markers.length > 1) {
      return {
        kind: "ambiguous_subjects",
        message: subject.message,
        proposalIds: subject.markers.map((m) => m.proposalId),
      };
    }
    const sole = subject.markers[0];
    if (!sole || !subject.recoverableProposalIds.includes(sole.proposalId)) {
      // Pending marker without a reconstructible subject: fail-closed action.
      return {
        kind: "no_eligible_subject",
        message: subject.message,
        code: "PENDING_SUBJECT_NOT_RECONSTRUCTIBLE",
      };
    }
    const bound = await materializeSealedOptionSetForPendingSubject({
      oa: input.oa,
      projectId: input.projectId,
      proposalId: sole.proposalId,
    });
    if (!bound.ok) {
      return {
        kind: "no_eligible_subject",
        message: bound.message,
        code: bound.code,
      };
    }
    presented = bound.presented;
  } else {
    // "none" and "pursue_prepare_ready": nothing awaiting a disposition.
    return {
      kind: "no_eligible_subject",
      message: NO_ELIGIBLE_SUBJECT_MESSAGE,
      code: "NO_ACTIVE_DECISION_SUBJECT",
    };
  }

  if (!isProposalSubjectPresentedSet(presented)) {
    // Project trajectory promotion stays on its own explicit path.
    return {
      kind: "no_eligible_subject",
      message: NO_ELIGIBLE_SUBJECT_MESSAGE,
      code: "SUBJECT_NOT_PROPOSAL_MODE",
    };
  }

  if (effective === "defer") {
    const deferred = await deferWorkRecommendation({
      oa: input.oa,
      projectId: input.projectId,
      presented,
      rationale: input.rationale,
      forceLocalAuthority: input.forceLocalAuthority,
    });
    if (!deferred.ok) {
      if (deferred.code === "DEFER_TARGET_UNRESOLVED") {
        return {
          kind: "defer_target_unresolved",
          code: deferred.code,
          message: deferred.message,
        };
      }
      return {
        kind: "decision_refused",
        code: deferred.code,
        message: deferred.message,
      };
    }
    return {
      kind: "decision_recorded",
      disposition: "defer",
      decisionId: deferred.decisionId,
      proposalId: presented.proposalId ?? null,
      optionSetRef: presented.optionSetRef,
      selectedOptionRef: "opt:defer-work-recommendation",
      scope: trajectoryDecisionScope(presented.optionSetRef),
      capturedAt: deferred.capturedAt,
      decisionBasisLinked: false,
      readyForNextGatedStep: false,
    };
  }

  const selectedOptionRef =
    SELECTED_OPTION_BY_DISPOSITION[effective as Exclude<
      ChatFirstEffectiveDisposition,
      "defer"
    >];
  if (!presented.optionRefs.includes(selectedOptionRef)) {
    return {
      kind: "no_eligible_subject",
      message:
        "L'option correspondante n'appartient pas au jeu d'options scellé — aucune décision enregistrée.",
      code: "OPTION_NOT_PRESENTED",
    };
  }

  const decided = await decideTrajectory({
    oa: input.oa,
    projectId: input.projectId,
    // Sealed binding only — no client/model-supplied refs ever reach here.
    optionSetRef: presented.optionSetRef,
    options: presented.options,
    recommendedOptionRef: presented.recommendedOptionRef,
    selectedOptionRef,
    trajectoryId: null,
    candidateVersion: null,
    epistemicRefs: presented.epistemicRefs,
    reservesText: null,
    forceLocalAuthority: input.forceLocalAuthority,
  });
  if (!decided.ok) {
    return {
      kind: "decision_refused",
      code: decided.code,
      message: decided.message,
    };
  }

  return {
    kind: "decision_recorded",
    disposition: effective as Exclude<ChatFirstEffectiveDisposition, "defer">,
    decisionId: decided.decision.decisionId,
    proposalId: decided.decision.proposalId ?? presented.proposalId ?? null,
    optionSetRef: presented.optionSetRef,
    selectedOptionRef,
    scope: trajectoryDecisionScope(presented.optionSetRef),
    capturedAt: decided.decision.capturedAt,
    decisionBasisLinked: decided.decision.decisionBasisLinked,
    readyForNextGatedStep: effective === "accept",
  };
}

```

### FILE: `projects/sfia-studio/app/features/project-assistant/w2/deferWorkRecommendation.ts`

```typescript
/**
 * CHAT-FIRST — durable defer of an OptionSet Work Recommendation via
 * HumanDecision + Reservation stamp + Proposal subject closure.
 *
 * Lifecycle Recommendations are NEVER disposed here — they stay on the
 * explicit Studio lifecycle surface. CURRENT NEXT_CYCLE is only consulted
 * as an honest defer *target* (cycle type), never as a chat-triggered START.
 */

import { randomUUID } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  deriveLifecycleBlockersFromEpistemicItems,
  isWorkRecommendationItem,
  selectCurrentLifecycleRecommendations,
  workRecommendationOptionSetRef,
} from "@/lib/oa/cycle";
import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
import {
  resolveHonestReservationDeferTarget,
  type EpistemicReservationMetadata,
} from "@/lib/oa/cycle/domain/reservationSemantics";
import type { PresentedOptionSetBinding } from "./presentedOptionSet";
import {
  finalizeProposalSubjectAfterDurableClosure,
  writeProposalDecisionRef,
} from "./closeProposalDecisionSubject";
import { disposeWorkRecommendationAfterDecision } from "./disposeWorkRecommendation";

export const WORK_RECOMMENDATION_DEFER_OPTION_ID =
  "opt:defer-work-recommendation" as const;

export function workRecommendationDeferSubjectFor(
  epistemicItemId: string,
): string {
  return `work-recommendation-defer:${epistemicItemId}`;
}

async function resolveDeferTargetCycleTypeId(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly activeCycleInstanceId: string | null;
}): Promise<
  | { readonly ok: true; readonly targetCycleTypeId: string; readonly targetLabel: string }
  | { readonly ok: false }
> {
  const { oa, projectId } = input;
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  const lpsActive = lps.ok
    ? (lps.livingProjectState.activeCycleInstanceId ?? null)
    : null;

  let items: Awaited<ReturnType<typeof oa.cycleServices.epistemic.listByProject>> =
    [];
  let cycles: Awaited<ReturnType<typeof oa.cycleServices.cycles.listByProject>> =
    [];
  let decisions: Awaited<
    ReturnType<typeof oa.decisionServices.decisions.listByProject>
  > = [];
  let evidence: Awaited<
    ReturnType<typeof oa.evidenceReviewServices.repository.listByProject>
  > = [];
  let trajectory: import("@/lib/oa/cycle/domain/types").ProjectTrajectory | null =
    null;
  const failed = new Set<LifecycleRecommendationMaterialDimension>();

  try {
    items = await oa.cycleServices.epistemic.listByProject(projectId);
  } catch {
    failed.add("epistemic_blockers");
  }
  try {
    cycles = await oa.cycleServices.cycles.listByProject(projectId);
  } catch {
    /* ignore — target resolution fail-closed below */
  }
  try {
    decisions = await oa.decisionServices.decisions.listByProject(projectId);
  } catch {
    failed.add("decisions");
  }
  try {
    evidence = await oa.evidenceReviewServices.repository.listByProject(
      projectId,
    );
  } catch {
    failed.add("evidence");
  }
  try {
    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    trajectory = traj.ok ? traj.trajectory : null;
  } catch {
    failed.add("trajectory");
  }

  const projectResult = await oa.projectServices.getProject.execute({
    projectId,
  });
  const doctrinePin = projectResult.ok
    ? projectResult.project.doctrinePackageRef
    : lps.ok
      ? lps.livingProjectState.doctrinePackageRef
      : undefined;
  const blockersSnap = deriveLifecycleBlockersFromEpistemicItems(items);

  const current = selectCurrentLifecycleRecommendations({
    items,
    cycles,
    lpsActiveCycleInstanceId: lpsActive,
    lpsVersion: lps.ok ? lps.livingProjectState.version : null,
    doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
    doctrinePackageVersion: doctrinePin?.version ?? null,
    doctrinePackageDigest: doctrinePin?.digest ?? null,
    trajectory,
    decisions,
    evidence,
    blockingReservationStatements: blockersSnap.statements,
    failedMaterialDimensions: failed,
  });

  const next = current.find(
    (r) =>
      r.derivedCurrentness === "CURRENT" &&
      r.intent === "NEXT_CYCLE" &&
      (r.targetCycleTypeId?.trim()?.length ?? 0) > 0,
  );
  if (next?.targetCycleTypeId) {
    const id = next.targetCycleTypeId.trim();
    return { ok: true, targetCycleTypeId: id, targetLabel: id };
  }

  const activeCycle = input.activeCycleInstanceId
    ? cycles.find((c) => c.cycleInstanceId === input.activeCycleInstanceId)
    : null;
  const honest = resolveHonestReservationDeferTarget({
    trajectory,
    currentCycleTypeId: activeCycle?.cycleTypeId ?? null,
  });
  if (honest) {
    return {
      ok: true,
      targetCycleTypeId: honest.targetCycleTypeId,
      targetLabel: honest.targetLabel,
    };
  }
  return { ok: false };
}

export async function deferWorkRecommendation(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly presented: PresentedOptionSetBinding;
  readonly rationale?: string | null;
  readonly forceLocalAuthority?: boolean;
}): Promise<
  | {
      readonly ok: true;
      readonly decisionId: string;
      readonly reservationEpistemicItemId: string;
      readonly workRecommendationId: string;
      readonly targetCycleTypeId: string;
      readonly capturedAt: string;
    }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const optionSetRef = input.presented.optionSetRef;
  const proposalId = input.presented.proposalId;
  if (!proposalId) {
    return {
      ok: false,
      code: "PROPOSAL_ID_MISSING",
      message: "Sujet Proposal sans identifiant — report refusé.",
    };
  }

  let items: Awaited<
    ReturnType<typeof input.oa.cycleServices.epistemic.listByProject>
  > = [];
  try {
    items = await input.oa.cycleServices.epistemic.listByProject(
      input.projectId,
    );
  } catch {
    return {
      ok: false,
      code: "EPISTEMIC_READ_FAILED",
      message: "Lecture épistémique impossible — report refusé.",
    };
  }

  const workRec = items.find(
    (item) =>
      isWorkRecommendationItem(item) &&
      workRecommendationOptionSetRef(item) === optionSetRef &&
      item.status === "active",
  );
  if (!workRec?.epistemicItemId) {
    return {
      ok: false,
      code: "WORK_RECOMMENDATION_MISSING",
      message:
        "Recommandation de travail introuvable pour ce jeu d'options — report refusé.",
    };
  }

  const live = await input.oa.projectServices.getCurrentLivingProjectState.execute(
    { projectId: input.projectId },
  );
  const activeCycleInstanceId = live.ok
    ? (live.livingProjectState.activeCycleInstanceId ?? null)
    : null;
  if (!activeCycleInstanceId) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_MISSING",
      message: "Cycle actif requis pour reporter une recommandation de travail.",
    };
  }

  const target = await resolveDeferTargetCycleTypeId({
    oa: input.oa,
    projectId: input.projectId,
    activeCycleInstanceId,
  });
  if (!target.ok) {
    return {
      ok: false,
      code: "DEFER_TARGET_UNRESOLVED",
      message:
        "Aucune cible aval honnête (cycle suivant) — précisez quand reporter ou poursuivez une autre disposition.",
    };
  }

  const nowIso = input.oa.clock.nowIso();
  const scope = `pilot-lifecycle:${activeCycleInstanceId}`;
  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.oa.authorityResolver,
    scope,
    issuedAt: nowIso,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
    };
  }

  const decisionId = `dec:work-rec-defer:${randomUUID()}`;
  const rationale =
    input.rationale?.trim() ||
    `Report explicite de la recommandation de travail vers ${target.targetLabel}.`;
  const reservationEpistemicItemId = `epi:work-defer:${randomUUID().slice(0, 12)}`;

  try {
    await input.oa.projectServices.store.runInTransaction(async () => {
      const recorded = await input.oa.decisionServices.recordHumanDecision.execute(
        {
          decisionId,
          projectId: input.projectId,
          cycleInstanceId: activeCycleInstanceId,
          subject: workRecommendationDeferSubjectFor(workRec.epistemicItemId!),
          options: [
            {
              optionId: WORK_RECOMMENDATION_DEFER_OPTION_ID,
              label: "Reporter la recommandation de travail",
            },
            { optionId: "opt:refuse", label: "Annuler" },
          ],
          selectedOptionId: WORK_RECOMMENDATION_DEFER_OPTION_ID,
          actor: LOCAL_PILOTE_ACTOR,
          authority: "pilot",
          status: "accepted",
          reversible: false,
          scope,
          authorityEvidenceId: authority.evidenceId,
          rationale,
          evidenceRefs: [
            workRec.epistemicItemId!,
            optionSetRef,
            target.targetCycleTypeId,
          ],
          supersedeExistingAccepted: true,
        },
      );
      if (!recorded.ok) {
        throw Object.assign(new Error(recorded.error.message), {
          detailCode: recorded.error.detailCode,
        });
      }

      const reservationMeta: EpistemicReservationMetadata = {
        ordinal: 1,
        title: "Report recommandation de travail",
        summary: rationale,
        impact: "minor",
        attentionBy: "before_finalization",
        finalizationRelevance: "may_affect",
        rationale,
        resolutionCondition: `Traiter lors du cycle ${target.targetLabel}.`,
        journalEntryRefs: [],
        sourceTurnRefs: [],
        deferred: {
          deferredAt: nowIso,
          humanDecisionId: decisionId,
          targetCycleTypeId: target.targetCycleTypeId,
          rationale,
        },
      };

      const reservationWrite =
        await input.oa.cycleServices.updateEpistemicState.execute({
          projectId: input.projectId,
          createdBy: LOCAL_PILOTE_ACTOR,
          items: [
            {
              epistemicItemId: reservationEpistemicItemId,
              type: "Reservation",
              statement: rationale,
              status: "active",
              source: "work-recommendation-defer",
              blocking: false,
              relatedObjects: [
                input.projectId,
                activeCycleInstanceId,
                workRec.epistemicItemId!,
                optionSetRef,
                decisionId,
              ],
              reservation: reservationMeta,
            },
          ],
        });
      if (!reservationWrite.ok) {
        throw Object.assign(new Error(reservationWrite.error.message), {
          detailCode: reservationWrite.error.detailCode,
        });
      }

      const disposed = await disposeWorkRecommendationAfterDecision({
        oa: input.oa,
        projectId: input.projectId,
        optionSetRef,
        decisionId,
        disposition: "defer",
        deferTargetCycleTypeId: target.targetCycleTypeId,
      });
      if (!disposed.ok) {
        throw Object.assign(new Error(disposed.message), {
          detailCode: disposed.code,
        });
      }

      const closure = await writeProposalDecisionRef({
        oa: input.oa,
        projectId: input.projectId,
        decisionId,
        proposalId,
        selectedOptionRef: WORK_RECOMMENDATION_DEFER_OPTION_ID,
        optionSetRef,
        epistemicRefs: input.presented.epistemicRefs,
        markerReason: "decided",
        nextProposalStatus: "APPROVED_WITH_RESERVES",
        statement: `Décision reportée (defer) — ${decisionId} — sujet ${proposalId}.`,
        correlationId: `w2-decref-defer:${optionSetRef}`,
      });
      if (!closure.ok) {
        throw Object.assign(new Error(closure.message), {
          detailCode: closure.code,
        });
      }
    });
  } catch (err) {
    const code =
      err &&
      typeof err === "object" &&
      "detailCode" in err &&
      typeof (err as { detailCode: unknown }).detailCode === "string"
        ? (err as { detailCode: string }).detailCode
        : "PERSISTENCE_FAILURE";
    return {
      ok: false,
      code,
      message:
        err instanceof Error
          ? err.message
          : "Report de recommandation de travail impossible.",
    };
  }

  await finalizeProposalSubjectAfterDurableClosure({
    oa: input.oa,
    projectId: input.projectId,
    proposalId,
    markerReason: "decided",
    nextProposalStatus: "APPROVED_WITH_RESERVES",
    correlationId: `cor:pending-defer:${proposalId}`,
  });

  return {
    ok: true,
    decisionId,
    reservationEpistemicItemId,
    workRecommendationId: workRec.epistemicItemId,
    targetCycleTypeId: target.targetCycleTypeId,
    capturedAt: nowIso,
  };
}

```

### FILE: `projects/sfia-studio/app/features/project-assistant/w2/disposeWorkRecommendation.ts`

```typescript
/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — sync OptionSet Work Recommendation
 * epistemic status after a durable Proposal-subject HumanDecision.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import {
  isWorkRecommendationItem,
  workRecommendationOptionSetRef,
  type WorkRecommendationItemLike,
} from "@/lib/oa/cycle/application/deriveWorkRecommendations";
import type { ChatFirstEffectiveDisposition } from "./resolveChatFirstPilotDecision";

function statusAfterDisposition(
  disposition: ChatFirstEffectiveDisposition | "defer",
): "resolved" | "rejected" | "superseded" {
  if (disposition === "refuse") return "rejected";
  if (disposition === "amend") return "superseded";
  return "resolved";
}

export async function disposeWorkRecommendationAfterDecision(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly optionSetRef: string;
  readonly decisionId: string;
  readonly disposition: ChatFirstEffectiveDisposition | "defer";
  readonly deferTargetCycleTypeId?: string | null;
}): Promise<
  | { readonly ok: true; readonly epistemicItemId: string | null }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  let items: WorkRecommendationItemLike[] = [];
  try {
    items = await input.oa.cycleServices.epistemic.listByProject(input.projectId);
  } catch {
    return {
      ok: false,
      code: "EPISTEMIC_READ_FAILED",
      message: "Lecture des recommandations de travail impossible.",
    };
  }

  const match = items.find(
    (item) =>
      isWorkRecommendationItem(item) &&
      workRecommendationOptionSetRef(item) === input.optionSetRef &&
      item.status === "active",
  );
  if (!match?.epistemicItemId) {
    return { ok: true, epistemicItemId: null };
  }

  const nextStatus = statusAfterDisposition(input.disposition);
  const related = new Set(match.relatedObjects ?? []);
  related.add(input.decisionId);
  if (input.deferTargetCycleTypeId?.trim()) {
    related.add(`defer-target:${input.deferTargetCycleTypeId.trim()}`);
  }

  const updated = await input.oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    createdBy: LOCAL_PILOTE_ACTOR,
    items: [
      {
        epistemicItemId: match.epistemicItemId,
        type: "Recommendation",
        statement: match.statement ?? "",
        source: match.source ?? input.optionSetRef,
        status: nextStatus,
        relatedObjects: [...related],
        supersedes: match.supersedes ?? undefined,
      },
    ],
    correlationId: `w2-work-rec-dispose:${input.optionSetRef}`,
  });
  if (!updated.ok) {
    return {
      ok: false,
      code: updated.error.detailCode,
      message: updated.error.message,
    };
  }
  return { ok: true, epistemicItemId: match.epistemicItemId };
}

```

### FILE: `projects/sfia-studio/app/lib/oa/cycle/application/deriveUndisposedRecommendations.ts`

```typescript
/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — derive Work Recommendations that still
 * require an explicit Pilot disposition before a cycle can be finalized.
 *
 * Scope (Morris correction):
 * - WORK Recommendations only (OptionSet / Proposal subject carriers)
 * - belonging to the cycle being finalized
 * - still active / applicable
 * - without durable disposition (active DecisionRef closing the OptionSet OR
 *   Recommendation status already resolved/rejected/superseded)
 *
 * Explicitly OUT of scope (never blockers):
 * - Lifecycle Recommendation NEXT_CYCLE / FINALIZE_CURRENT_CYCLE
 * - Journal cards (projection only — not Truth C)
 * - Recommendations of another cycle
 * - stale / resolved / rejected / superseded work Recommendations
 *
 * Pure derivation over EpistemicItems. NOT a second authority.
 */

import {
  isLifecycleRecommendationItem,
  isWorkRecommendationItem,
  workRecommendationBelongsToCycle,
  workRecommendationOptionSetRef,
  type WorkRecommendationItemLike,
} from "./deriveWorkRecommendations";

const OPTION_SET_REF_PREFIX = "optset:";

export type UndisposedRecommendation = {
  readonly epistemicItemId: string;
  readonly optionSetRef: string;
  readonly statement: string;
  readonly cycleInstanceId: string;
};

function disposedOptionSetRefs(
  items: ReadonlyArray<WorkRecommendationItemLike>,
): ReadonlySet<string> {
  const refs = new Set<string>();
  for (const item of items) {
    if (item.type !== "DecisionRef" || item.status !== "active") continue;
    for (const related of item.relatedObjects ?? []) {
      if (related.startsWith(OPTION_SET_REF_PREFIX)) refs.add(related);
    }
  }
  return refs;
}

export function deriveUndisposedRecommendations(
  items: ReadonlyArray<WorkRecommendationItemLike>,
  cycleInstanceId?: string | null,
): readonly UndisposedRecommendation[] {
  // Back-compat: callers that omit cycle still get project-scoped work-only
  // filtering (never lifecycle). Prefer passing cycleInstanceId.
  const disposed = disposedOptionSetRefs(items);
  const out: UndisposedRecommendation[] = [];
  for (const item of items) {
    if (!isWorkRecommendationItem(item)) continue;
    if (isLifecycleRecommendationItem(item)) continue;
    if (item.status !== "active") continue;
    const optionSetRef = workRecommendationOptionSetRef(item);
    if (!optionSetRef) continue;
    if (disposed.has(optionSetRef)) continue;
    if (cycleInstanceId) {
      if (
        !workRecommendationBelongsToCycle(item, cycleInstanceId, cycleInstanceId)
      ) {
        continue;
      }
    }
    out.push({
      epistemicItemId: item.epistemicItemId ?? optionSetRef,
      optionSetRef,
      statement: item.statement ?? "",
      cycleInstanceId: cycleInstanceId ?? "",
    });
  }
  return out;
}

```

### FILE: `projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts`

```typescript
/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 (Morris correction) —
 * Work Recommendation vs Lifecycle Recommendation family separation.
 *
 * Work Recommendations: in-cycle governed work (OptionSet / Proposal subject).
 * Carrier: EpistemicItem.type = Recommendation WITHOUT lifecycleRecommendation
 * and source ≠ lifecycle-recommendation:nora (typically source = optset:…).
 *
 * Lifecycle Recommendations: NEXT_CYCLE / FINALIZE_CURRENT_CYCLE transitions.
 * Carrier: typed lifecycleRecommendation + source lifecycle-recommendation:nora.
 *
 * Journal > Recommandations projects WORK only.
 * Right-panel / lifecycle projection keeps Lifecycle CURRENT only.
 * No new store / table.
 */

const LIFECYCLE_RECOMMENDATION_SOURCE = "lifecycle-recommendation:nora";
const OPTION_SET_REF_PREFIX = "optset:";
const PROPOSAL_ID_PREFIX = "prop:";
const CYCLE_ID_PREFIX = "cycinst:";
/** Alternate cycle id prefix used by some durable writers. */
const CYCLE_INSTANCE_PREFIXES = ["cycinst:", "cycle:", "cyc:"] as const;

export type WorkRecommendationItemLike = {
  readonly type: string;
  readonly status: string;
  readonly epistemicItemId?: string;
  readonly source?: string | null;
  readonly statement?: string;
  readonly createdAt?: string;
  readonly relatedObjects?: readonly string[] | null;
  readonly lifecycleRecommendation?: unknown;
  readonly supersedes?: string | null;
};

export type WorkRecommendationProjectionCard = {
  readonly epistemicItemId: string;
  readonly statement: string;
  readonly status: string;
  readonly source: string | null;
  readonly optionSetRef: string | null;
  readonly proposalId: string | null;
  readonly cycleInstanceId: string | null;
  readonly createdAt: string;
  /** HumanDecision id closing this work recommendation when reconstructible. */
  readonly dispositionDecisionId: string | null;
};

export function isLifecycleRecommendationItem(
  item: WorkRecommendationItemLike,
): boolean {
  if (item.type !== "Recommendation") return false;
  if (item.lifecycleRecommendation != null) return true;
  return (item.source ?? "") === LIFECYCLE_RECOMMENDATION_SOURCE;
}

export function isWorkRecommendationItem(
  item: WorkRecommendationItemLike,
): boolean {
  if (item.type !== "Recommendation") return false;
  if (isLifecycleRecommendationItem(item)) return false;
  const source = item.source ?? "";
  // Primary durable carrier for chat-first work: PresentedOptionSet Recommendation.
  if (source.startsWith(OPTION_SET_REF_PREFIX)) return true;
  // Fail-closed: unknown Recommendation sources without lifecycle payload are
  // treated as work only when they carry an optset-related object.
  return (item.relatedObjects ?? []).some((r) =>
    r.startsWith(OPTION_SET_REF_PREFIX),
  );
}

export function workRecommendationOptionSetRef(
  item: WorkRecommendationItemLike,
): string | null {
  const source = item.source ?? "";
  if (source.startsWith(OPTION_SET_REF_PREFIX)) return source;
  return (
    (item.relatedObjects ?? []).find((r) =>
      r.startsWith(OPTION_SET_REF_PREFIX),
    ) ?? null
  );
}

function relatedCycleInstanceId(
  item: WorkRecommendationItemLike,
): string | null {
  for (const related of item.relatedObjects ?? []) {
    if (related.startsWith(CYCLE_ID_PREFIX)) return related;
    for (const prefix of CYCLE_INSTANCE_PREFIXES) {
      if (related.startsWith(prefix) && related !== prefix) return related;
    }
  }
  // Many writers store raw cycleInstanceId strings (no prefix). Prefer explicit
  // ids that look like durable cycle instance ids when present.
  for (const related of item.relatedObjects ?? []) {
    if (/^cycinst:/i.test(related)) return related;
    if (/^ci[_:]/i.test(related)) return related;
  }
  return null;
}

function relatedProposalId(item: WorkRecommendationItemLike): string | null {
  return (
    (item.relatedObjects ?? []).find((r) => r.startsWith(PROPOSAL_ID_PREFIX)) ??
    null
  );
}

function dispositionDecisionIdFromItems(
  item: WorkRecommendationItemLike,
  all: ReadonlyArray<WorkRecommendationItemLike>,
): string | null {
  const optionSetRef = workRecommendationOptionSetRef(item);
  if (!optionSetRef) return null;
  for (const candidate of all) {
    if (candidate.type !== "DecisionRef" || candidate.status !== "active") {
      continue;
    }
    const related = candidate.relatedObjects ?? [];
    if (!related.includes(optionSetRef)) continue;
    const fromSource =
      typeof candidate.source === "string" && candidate.source.startsWith("dec:")
        ? candidate.source
        : null;
    const fromRelated =
      related.find((r) => typeof r === "string" && r.startsWith("dec:")) ?? null;
    return fromSource ?? fromRelated;
  }
  return null;
}

/**
 * Does this work Recommendation belong to the cycle being inspected?
 * Prefer explicit relatedObjects cycle binding. Legacy optset Recommendations
 * without a cycle id are attributed to `fallbackCycleInstanceId` when provided
 * (typically LPS active / selected cycle) so finalization stays honest.
 */
export function workRecommendationBelongsToCycle(
  item: WorkRecommendationItemLike,
  cycleInstanceId: string,
  fallbackCycleInstanceId?: string | null,
): boolean {
  const bound = relatedCycleInstanceId(item);
  if (bound) return bound === cycleInstanceId;
  if (
    fallbackCycleInstanceId &&
    fallbackCycleInstanceId === cycleInstanceId &&
    isWorkRecommendationItem(item)
  ) {
    return true;
  }
  return false;
}

export function projectCycleWorkRecommendations(input: {
  readonly items: ReadonlyArray<WorkRecommendationItemLike>;
  readonly cycleInstanceId: string | null;
  /** When cycle binding is missing on legacy items, attribute to this cycle. */
  readonly fallbackCycleInstanceId?: string | null;
}): readonly WorkRecommendationProjectionCard[] {
  const cycleId = input.cycleInstanceId;
  if (!cycleId) return [];
  const cards: WorkRecommendationProjectionCard[] = [];
  for (const item of input.items) {
    if (!isWorkRecommendationItem(item)) continue;
    if (
      !workRecommendationBelongsToCycle(
        item,
        cycleId,
        input.fallbackCycleInstanceId ?? cycleId,
      )
    ) {
      continue;
    }
    cards.push({
      epistemicItemId: item.epistemicItemId ?? workRecommendationOptionSetRef(item) ?? "",
      statement: item.statement ?? "",
      status: item.status,
      source: item.source ?? null,
      optionSetRef: workRecommendationOptionSetRef(item),
      proposalId: relatedProposalId(item),
      cycleInstanceId: relatedCycleInstanceId(item) ?? cycleId,
      createdAt: item.createdAt ?? "",
      dispositionDecisionId: dispositionDecisionIdFromItems(item, input.items),
    });
  }
  return cards.sort((a, b) => {
    if (a.createdAt !== b.createdAt) {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    return a.epistemicItemId < b.epistemicItemId ? 1 : -1;
  });
}

```

### FILE: `projects/sfia-studio/app/features/project-assistant/w2/assessChatFirstWorkEligibility.ts`

```typescript
/**
 * Read-only eligibility for chat-first Work (Proposal subject) disposition.
 * Mirrors resolveChatFirstPilotDecision subject binding without recording.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  listEffectivePendingDecisionSubjectMarkers,
  readActiveProposalDecisionSubject,
} from "./activeProposalDecisionSubject";
import {
  isProposalSubjectPresentedSet,
  type PresentedOptionSetBinding,
} from "./presentedOptionSet";
import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "./qualificationInputs";
import { pilotAmbiguousPendingMessage } from "../presentationLabels";

export type ChatFirstWorkEligibility =
  | { readonly eligible: true; readonly presented: PresentedOptionSetBinding }
  | {
      readonly eligible: false;
      readonly kind:
        | "no_eligible_subject"
        | "ambiguous_subjects"
        | "subject_read_failed";
      readonly message?: string;
      readonly code?: string;
      readonly proposalIds?: readonly string[];
    };

async function materializeSealedOptionSetForPendingSubject(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly proposalId: string;
}): Promise<
  | { readonly ok: true; readonly presented: PresentedOptionSetBinding }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const qualification = await resolveW2QualificationInputs({
    oa: input.oa,
    projectId: input.projectId,
  });
  if (!qualification.ok) {
    return {
      ok: false,
      code: qualification.code,
      message: qualification.message,
    };
  }
  const proposed = await proposeTrajectoryOptions({
    oa: input.oa,
    projectId: input.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
    proposalId: input.proposalId,
  });
  if (!proposed.ok) {
    return { ok: false, code: proposed.code, message: proposed.message };
  }
  const rebound = await readActiveProposalDecisionSubject(
    input.oa,
    input.projectId,
  );
  if (!rebound.ok) {
    return { ok: false, code: rebound.code, message: rebound.message };
  }
  if (rebound.kind !== "bound_awaiting_decision") {
    return {
      ok: false,
      code: "SEALED_OPTION_SET_NOT_BOUND",
      message: "Jeu d'options scellé non relié.",
    };
  }
  return { ok: true, presented: rebound.presented };
}

export async function assessChatFirstWorkEligibility(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<ChatFirstWorkEligibility> {
  const subject = await readActiveProposalDecisionSubject(
    input.oa,
    input.projectId,
  );
  if (!subject.ok) {
    return {
      eligible: false,
      kind: "subject_read_failed",
      code: subject.code,
      message: subject.message,
    };
  }

  let presented: PresentedOptionSetBinding;
  if (subject.kind === "bound_awaiting_decision") {
    const pending = await listEffectivePendingDecisionSubjectMarkers(
      input.oa,
      input.projectId,
    );
    if (!pending.ok) {
      return {
        eligible: false,
        kind: "subject_read_failed",
        code: pending.code,
        message: pending.message,
      };
    }
    const competing = pending.markers.filter(
      (m) => m.proposalId !== subject.presented.proposalId,
    );
    if (competing.length > 0) {
      return {
        eligible: false,
        kind: "ambiguous_subjects",
        message: pilotAmbiguousPendingMessage(),
        proposalIds: [
          ...(subject.presented.proposalId
            ? [subject.presented.proposalId]
            : []),
          ...competing.map((m) => m.proposalId),
        ],
      };
    }
    presented = subject.presented;
  } else if (subject.kind === "pending_reinstruction_required") {
    if (subject.markers.length > 1) {
      return {
        eligible: false,
        kind: "ambiguous_subjects",
        message: subject.message,
        proposalIds: subject.markers.map((m) => m.proposalId),
      };
    }
    const sole = subject.markers[0];
    if (!sole || !subject.recoverableProposalIds.includes(sole.proposalId)) {
      return {
        eligible: false,
        kind: "no_eligible_subject",
        code: "PENDING_SUBJECT_NOT_RECONSTRUCTIBLE",
        message: subject.message,
      };
    }
    const bound = await materializeSealedOptionSetForPendingSubject({
      oa: input.oa,
      projectId: input.projectId,
      proposalId: sole.proposalId,
    });
    if (!bound.ok) {
      return {
        eligible: false,
        kind: "no_eligible_subject",
        code: bound.code,
        message: bound.message,
      };
    }
    presented = bound.presented;
  } else {
    return { eligible: false, kind: "no_eligible_subject" };
  }

  if (!isProposalSubjectPresentedSet(presented)) {
    return { eligible: false, kind: "no_eligible_subject" };
  }
  return { eligible: true, presented };
}

```

---

## 8. USEFUL DIFFS


### DIFF: `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 2a836c62..d84952df 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -89,7 +89,9 @@ import {
   saveProposal,
 } from "./proposalStore";
 import type {
+  DecisionDto,
   F2ContextSnapshot,
+  F2DecisionKind,
   IntentAnalysisDto,
   ProposalDto,
   QualificationDto,
@@ -98,6 +100,12 @@ import type { ExecutionIntentPayload } from "./executionIntentSchema";
 import {
   assertExplicitReinstructionGate,
 } from "../w2/activeProposalDecisionSubject";
+import { assessChatFirstWorkEligibility } from "../w2/assessChatFirstWorkEligibility";
+import {
+  resolveChatFirstPilotDecision,
+  toEffectiveDisposition,
+  type ChatFirstEffectiveDisposition,
+} from "../w2/resolveChatFirstPilotDecision";
 import {
   replacePendingDecisionSubjectForExplicitReinstruction,
   writePendingDecisionSubjectMarker,
@@ -192,6 +200,33 @@ async function commitPendingDecisionSubjectForDecisionRequired(input: {
   return { ok: true };
 }

+/**
+ * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — codes where the pending subject must
+ * be disposed of in the conversation instead of locking the composer.
+ *
+ * The gate itself stays fail-closed (no competing DECISION_REQUIRED is minted);
+ * only the Pilot-facing shape changes from a transport error to a clarification
+ * turn, so an unrelated topic can never dead-end the chat.
+ */
+function isChatFirstDisposableGateCode(code: string | undefined): boolean {
+  return (
+    code === "EXPLICIT_REINSTRUCTION_REQUIRED" ||
+    code === "AMBIGUOUS_PENDING_REINSTRUCTION"
+  );
+}
+
+function pendingDispositionClarificationText(input: {
+  readonly presentation: "test_provider" | "openai_live";
+  readonly gateMessage: string;
+}): string {
+  return [
+    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+    input.gateMessage,
+    "Aucune nouvelle proposition n'a été ouverte et aucune décision n'a été enregistrée.",
+    "Répondez ici pour poursuivre, amender ou refuser le sujet en attente — la conversation reste ouverte sur les autres sujets.",
+  ].join(" ");
+}
+
 async function resolveExplicitReinstructionGate(input: {
   readonly oa: RuntimeOaStack;
   readonly projectId: string;
@@ -658,6 +693,64 @@ function qualificationFromActiveCycle(input: {
   };
 }

+/**
+ * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — presentation mapping for a durable
+ * HumanDecision recorded from a conversational disposition. The kinds reuse
+ * the existing F2 decision vocabulary; no new decision semantics are invented.
+ */
+const CHAT_FIRST_DECISION_KIND: Record<
+  ChatFirstEffectiveDisposition,
+  F2DecisionKind
+> = {
+  accept: "GO",
+  refuse: "NO_GO",
+  amend: "AMEND",
+  defer: "GO_WITH_RESERVES",
+};
+
+const CHAT_FIRST_HUMAN_STATUS: Record<
+  ChatFirstEffectiveDisposition,
+  "accepted" | "refused" | "amended"
+> = {
+  accept: "accepted",
+  refuse: "refused",
+  amend: "amended",
+  defer: "accepted",
+};
+
+function chatFirstDecisionText(input: {
+  readonly presentation: "test_provider" | "openai_live";
+  readonly disposition: ChatFirstEffectiveDisposition;
+}): string {
+  const head =
+    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
+  const body =
+    input.disposition === "accept"
+      ? [
+          "Votre décision est enregistrée : vous poursuivez le sujet proposé.",
+          "La préparation de l'action est maintenant disponible. Rien n'a encore été exécuté.",
+        ]
+      : input.disposition === "refuse"
+        ? [
+            "Votre décision est enregistrée : vous ne poursuivez pas ce sujet.",
+            "Aucun contrat d'exécution n'est préparé. Aucune trajectoire projet n'est promue.",
+          ]
+        : input.disposition === "defer"
+          ? [
+              "Votre report est enregistré : la recommandation de travail est reportée vers un cycle aval honnête.",
+              "Une réserve non bloquante trace le report. Le sujet proposé est clos.",
+            ]
+          : [
+              "Votre décision est enregistrée : le sujet doit être amendé avant d'être engagé.",
+              "Le sujet précédent est clos ; reformulez ce que vous voulez changer et je réinstruirai.",
+            ];
+  return [
+    head,
+    ...body,
+    "Nora recommande ; le Pilote décide. AUCUNE EXÉCUTION.",
+  ].join(" ");
+}
+
 /**
  * JOURNEY-INTEGRITY — the reinstruction arm is a server verdict, never a
  * client inference. "superseded" is reserved for a committed supersession of
@@ -681,9 +774,19 @@ function f2Success(base: {
   intentClass: IntentAnalysisDto["intentClass"];
   qualification?: QualificationDto;
   proposal?: ProposalDto;
+  /**
+   * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — durable HumanDecision recorded by
+   * this conversational turn (chat-first disposition). Never synthesised.
+   */
+  decision?: DecisionDto | null;
   executionBlocked?: boolean;
   mw5?: Mw5TurnSurface | null;
-  turnKind?: "f1_informative" | "f2_clarification" | "f2_proposal" | "f2_blocked";
+  turnKind?:
+    | "f1_informative"
+    | "f2_clarification"
+    | "f2_proposal"
+    | "f2_blocked"
+    | "f2_decision";
   reinstructionTransition?: "superseded" | "not_consumed" | "not_applicable";
   /**
    * JOURNEY-INTEGRITY — armed reinstruction carried by this turn. Only the
@@ -693,11 +796,14 @@ function f2Success(base: {
 }): ProjectAssistantSendResult {
   const turnKind =
     base.turnKind ??
-    (base.qualification && base.proposal
-      ? "f2_proposal"
-      : base.mw5?.disposition === "CLARIFY" || base.intentClass === "ambiguous"
-        ? "f2_clarification"
-        : "f2_blocked");
+    (base.decision
+      ? "f2_decision"
+      : base.qualification && base.proposal
+        ? "f2_proposal"
+        : base.mw5?.disposition === "CLARIFY" ||
+            base.intentClass === "ambiguous"
+          ? "f2_clarification"
+          : "f2_blocked");
   return {
     ok: true,
     status: "ok",
@@ -738,7 +844,7 @@ function f2Success(base: {
       intentClass: base.intentClass,
       qualification: base.qualification ?? null,
       proposal: base.proposal ?? null,
-      decision: null,
+      decision: base.decision ?? null,
       labels: {
         recommendation:
           base.proposal && base.qualification ? "RECOMMANDATION" : null,
@@ -746,7 +852,7 @@ function f2Success(base: {
         decisionRequired: base.proposal?.morrisGateRequired
           ? "DÉCISION REQUISE"
           : null,
-        decisionTaken: null,
+        decisionTaken: base.decision ? "DÉCISION PRISE" : null,
         noExecution: "AUCUNE EXÉCUTION",
       },
       executionBlocked: base.executionBlocked === true,
@@ -770,9 +876,15 @@ async function f2ConversationalSuccess(input: {
   intentClass: IntentAnalysisDto["intentClass"];
   qualification?: QualificationDto;
   proposal?: ProposalDto;
+  decision?: DecisionDto | null;
   executionBlocked?: boolean;
   mw5?: Mw5TurnSurface | null;
-  turnKind?: "f1_informative" | "f2_clarification" | "f2_proposal" | "f2_blocked";
+  turnKind?:
+    | "f1_informative"
+    | "f2_clarification"
+    | "f2_proposal"
+    | "f2_blocked"
+    | "f2_decision";
   reinstructionTransition?: "superseded" | "not_consumed" | "not_applicable";
   reinstructionOfProposalId?: string | null;
 }): Promise<ProjectAssistantSendResult> {
@@ -1066,6 +1178,169 @@ export async function orchestrateAssistantSend(input: {
     project.projectId,
   );

+  // ── CHAT-FIRST-GOVERNED-DECISION-LOOP-01 (Work Recommendations ONLY) ───
+  // A NON-AUTHORITATIVE disposition candidate is resolved against durable
+  // Work / Proposal decision subjects BEFORE any new DECISION_REQUIRED mint.
+  // Lifecycle NEXT_CYCLE / FINALIZE_CURRENT_CYCLE are NEVER triggered here —
+  // they stay on explicit Studio lifecycle actions (prepare / start / finalize).
+  {
+    const candidateDisposition = toEffectiveDisposition(
+      analysis.pilotDecisionCandidate?.disposition,
+    );
+    const oaForChatFirst = getRuntimeApplicationService().oa;
+    if (candidateDisposition != null && oaForChatFirst) {
+      const workGate = await assessChatFirstWorkEligibility({
+        oa: oaForChatFirst,
+        projectId: project.projectId,
+      });
+
+      if (
+        workGate.eligible === false &&
+        workGate.kind === "ambiguous_subjects"
+      ) {
+        return f2ConversationalSuccess({
+          userText: content,
+          sessionDbPath: input.sessionDbPath,
+          text: [
+            presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+            workGate.message ??
+              "Plusieurs sujets de décision gouvernés sont ouverts.",
+            "Aucune décision n'a été enregistrée. Précisez lequel vous voulez traiter — la conversation reste ouverte.",
+          ].join(" "),
+          mode: modeResolution.mode as "fixture" | "live",
+          presentation,
+          model,
+          project,
+          intentClass: analysis.intentClass,
+          turnKind: "f2_clarification",
+          reinstructionOfProposalId,
+        });
+      }
+
+      if (workGate.eligible === true) {
+        const resolved = await resolveChatFirstPilotDecision({
+          oa: oaForChatFirst,
+          projectId: project.projectId,
+          disposition: analysis.pilotDecisionCandidate?.disposition ?? null,
+          rationale: analysis.pilotDecisionCandidate?.rationale ?? null,
+        });
+
+        if (resolved.kind === "decision_recorded") {
+          const decision: DecisionDto = {
+            decisionId: resolved.decisionId,
+            proposalId: resolved.proposalId ?? resolved.optionSetRef,
+            kind: CHAT_FIRST_DECISION_KIND[resolved.disposition],
+            statusLabel: "DÉCISION PRISE",
+            humanDecisionStatus:
+              CHAT_FIRST_HUMAN_STATUS[resolved.disposition],
+            scope: resolved.scope,
+            reservesText: null,
+            capturedAt: resolved.capturedAt,
+            readyForNextGatedStep: resolved.readyForNextGatedStep,
+            executionPerformed: false,
+          };
+          return f2ConversationalSuccess({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: chatFirstDecisionText({
+              presentation,
+              disposition: resolved.disposition,
+            }),
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            decision,
+            turnKind: "f2_decision",
+            executionBlocked: false,
+            reinstructionOfProposalId: null,
+          });
+        }
+
+        if (resolved.kind === "ambiguous_subjects") {
+          return f2ConversationalSuccess({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: [
+              presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+              resolved.message,
+              "Aucune décision n'a été enregistrée. Précisez lequel vous voulez traiter — la conversation reste ouverte.",
+            ].join(" "),
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            turnKind: "f2_clarification",
+            reinstructionOfProposalId,
+          });
+        }
+
+        if (resolved.kind === "defer_target_unresolved") {
+          return f2ConversationalSuccess({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: [
+              presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+              resolved.message,
+            ].join(" "),
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            turnKind: "f2_clarification",
+            reinstructionOfProposalId,
+          });
+        }
+
+        if (
+          resolved.kind === "subject_read_failed" ||
+          resolved.kind === "decision_refused"
+        ) {
+          return f2ConversationalSuccess({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: [
+              presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+              resolved.message,
+              "Aucune décision n'a été enregistrée.",
+            ].join(" "),
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            turnKind: "f2_blocked",
+            executionBlocked: true,
+            reinstructionOfProposalId,
+          });
+        }
+        // no_eligible_subject / no_decision → fall through
+      } else if (candidateDisposition === "defer") {
+        return f2ConversationalSuccess({
+          userText: content,
+          sessionDbPath: input.sessionDbPath,
+          text: [
+            presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+            "Aucun sujet de travail ouvert à reporter — précisez de quoi vous parlez.",
+            "Les transitions de cycle (démarrer / finaliser) se pilotent via les actions Studio du panneau d'état.",
+          ].join(" "),
+          mode: modeResolution.mode as "fixture" | "live",
+          presentation,
+          model,
+          project,
+          intentClass: analysis.intentClass,
+          turnKind: "f2_clarification",
+          reinstructionOfProposalId,
+        });
+      }
+      // No eligible Work subject: ordinary orchestration. Lifecycle CURRENT
+      // never receives START/FINALIZE from this conversational path.
+    }
+  }
+
   // Repository read/search/Git-truth without mutation → F1 (no Cycle/LPS mutation).
   // Deterministic override when the classifier drifts to ambiguous/actionable for pure reads.
   const forceRepoInformative =
@@ -1397,6 +1672,24 @@ export async function orchestrateAssistantSend(input: {
       mode: modeResolution.mode,
     });
     if (!reinstructionGate.ok) {
+      if (isChatFirstDisposableGateCode(reinstructionGate.code)) {
+        return f2ConversationalSuccess({
+          userText: content,
+          sessionDbPath: input.sessionDbPath,
+          text: pendingDispositionClarificationText({
+            presentation,
+            gateMessage: reinstructionGate.message,
+          }),
+          mode: modeResolution.mode as "fixture" | "live",
+          presentation,
+          model,
+          project,
+          intentClass: analysis.intentClass,
+          qualification,
+          turnKind: "f2_clarification",
+          reinstructionOfProposalId,
+        });
+      }
       return {
         ok: false,
         status: "validation_error",
@@ -1694,6 +1987,24 @@ export async function orchestrateAssistantSend(input: {
       mode: modeResolution.mode,
     });
     if (!reinstructionGate.ok) {
+      if (isChatFirstDisposableGateCode(reinstructionGate.code)) {
+        return f2ConversationalSuccess({
+          userText: content,
+          sessionDbPath: input.sessionDbPath,
+          text: pendingDispositionClarificationText({
+            presentation,
+            gateMessage: reinstructionGate.message,
+          }),
+          mode: modeResolution.mode as "fixture" | "live",
+          presentation,
+          model,
+          project,
+          intentClass: analysis.intentClass,
+          qualification,
+          turnKind: "f2_clarification",
+          reinstructionOfProposalId,
+        });
+      }
       return {
         ok: false,
         status: "validation_error",

```

### DIFF: `projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts b/projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts
index 66093a9f..c0372927 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts
@@ -163,6 +163,12 @@ export type AssessFinalizationInput = {
   }>;
   finalizeDecisionId?: string | null;
   blockingReservationStatements?: readonly string[];
+  /**
+   * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — refs of active Recommendations on a
+   * presented governed decision subject that the Pilot has not disposed of.
+   * Empty/absent = nothing to dispose. Never a Recommendation→Decision promotion.
+   */
+  undisposedRecommendationRefs?: readonly string[];
 };

 function findFinalizeDecision(
@@ -780,9 +786,10 @@ export function assessFinalizationObligations(
     }
   }

-  // 8) Blockers / reservations
+  // 8) Blockers / reservations / undisposed Recommendations
   {
     const blockingReservations = input.blockingReservationStatements ?? [];
+    const undisposedRecommendations = input.undisposedRecommendationRefs ?? [];
     const applicability = resolveApplicability("blockers", "APPLICABLE", rules);
     if (applicability === "NOT_APPLICABLE") {
       pushNa(
@@ -798,15 +805,32 @@ export function assessFinalizationObligations(
         "blockers",
         "blockers_applicability_unknown",
       );
-    } else if (blockingReservations.length > 0) {
+    } else if (
+      blockingReservations.length > 0 ||
+      undisposedRecommendations.length > 0
+    ) {
       obligations.push({
         family: "blockers",
         applicability: "APPLICABLE",
         status: "BLOCKING",
-        detail: blockingReservations.join("|"),
+        detail: [
+          ...blockingReservations,
+          ...(undisposedRecommendations.length > 0
+            ? [
+                `undisposed_recommendations:${undisposedRecommendations.join(
+                  ",",
+                )}`,
+              ]
+            : []),
+        ].join("|"),
         blocking: true,
       });
-      blockers.push("blocking_reservations");
+      if (blockingReservations.length > 0) {
+        blockers.push("blocking_reservations");
+      }
+      if (undisposedRecommendations.length > 0) {
+        blockers.push("undisposed_recommendations");
+      }
     } else {
       obligations.push({
         family: "blockers",

```

### DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
index e3b83648..3a772999 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
@@ -1,12 +1,29 @@
 "use client";

 import { useState } from "react";
-import type { CycleReservationProjectionCard } from "@/lib/oa/cycle/application/lifecycleProjection";
+import type {
+  CycleDecisionProjectionCard,
+  CycleReservationProjectionCard,
+} from "@/lib/oa/cycle/application/lifecycleProjection";
+import type { WorkRecommendationProjectionCard } from "@/lib/oa/cycle/application/deriveWorkRecommendations";
 import styles from "./JournalSurface.module.css";

 export type JournalReservationCard = CycleReservationProjectionCard;
+export type JournalDecisionCard = CycleDecisionProjectionCard;
+/** Work Recommendations only — never Lifecycle NEXT_CYCLE / FINALIZE. */
+export type JournalRecommendationCard = WorkRecommendationProjectionCard;

-export type JournalMemoryTab = "sujets" | "reserves";
+/**
+ * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — four read rails over the same durable
+ * projection: Sujets | Réserves | Recommandations | Décisions.
+ * Recommandations = Work Recommendations of the cycle (not Lifecycle).
+ * Décisions = HumanDecision history. Read-only (no accept/refuse CTA).
+ */
+export type JournalMemoryTab =
+  | "sujets"
+  | "reserves"
+  | "recommandations"
+  | "decisions";

 export type JournalSurfaceEntry = {
   journalEntryId: string;
@@ -68,6 +85,18 @@ export type JournalSurfaceProps = {
   onViewJournalSubject?: (journalEntryId: string) => void;
   /** Epistemic id currently being confirmed (disables its CTA). */
   reservationBusyId?: string | null;
+  /**
+   * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — CURRENT lifecycle Recommendations
+   * from the durable projection. Read-only: a Recommendation never decides.
+   */
+  recommendations?: JournalRecommendationCard[];
+  /** Durable HumanDecisions from the same projection. Read-only audit cards. */
+  decisions?: JournalDecisionCard[];
+  /**
+   * Non-mutating handoff: prefill the composer to resume a Recommendation in
+   * the conversation. MUST NOT send and MUST NOT record anything.
+   */
+  onResumeRecommendationInChat?: (recommendationId: string) => void;
 };

 function isOpenReservation(card: JournalReservationCard): boolean {
@@ -78,6 +107,37 @@ function isOpenReservation(card: JournalReservationCard): boolean {
   );
 }

+/** Pilot-facing label for a Work Recommendation disposition state. */
+function recommendationCurrentnessLabel(card: JournalRecommendationCard): string {
+  if (card.status === "resolved") return "Traitée";
+  if (card.status === "rejected") return "Écartée";
+  if (card.status === "superseded") return "Remplacée";
+  if (card.dispositionDecisionId) return "Dispositionnée";
+  return "En attente de votre réponse";
+}
+
+/** A Work Recommendation still awaiting an explicit Pilot disposition. */
+function isOpenRecommendation(card: JournalRecommendationCard): boolean {
+  return card.status === "active" && !card.dispositionDecisionId;
+}
+
+function decisionStatusLabel(status: string): string {
+  switch (status) {
+    case "accepted":
+      return "Acceptée";
+    case "refused":
+      return "Refusée";
+    case "amended":
+      return "Amendée";
+    case "superseded":
+      return "Remplacée";
+    case "revoked":
+      return "Révoquée";
+    default:
+      return status;
+  }
+}
+
 function statusLabel(status: string): string {
   switch (status) {
     case "active":
@@ -146,11 +206,22 @@ export function JournalSurface({
   onConfirmDefer,
   onViewJournalSubject,
   reservationBusyId = null,
+  recommendations = [],
+  decisions = [],
+  onResumeRecommendationInChat,
 }: JournalSurfaceProps) {
   const safeEntries = Array.isArray(entries) ? entries : [];
   const safeReservations = Array.isArray(reservations) ? reservations : [];
+  const safeRecommendations = Array.isArray(recommendations)
+    ? recommendations
+    : [];
+  const safeDecisions = Array.isArray(decisions) ? decisions : [];
   const activeCount = safeEntries.filter((e) => e.status === "active").length;
   const openReservationCount = safeReservations.filter(isOpenReservation).length;
+  const openRecommendationCount = safeRecommendations.filter(
+    isOpenRecommendation,
+  ).length;
+  const decisionCount = safeDecisions.length;
   const [expandedEntryId, setExpandedEntryId] = useState<string | null>(null);
   const [pointsOpenId, setPointsOpenId] = useState<string | null>(null);
   const [internalTab, setInternalTab] = useState<JournalMemoryTab>("sujets");
@@ -167,8 +238,35 @@ export function JournalSurface({
   const subjectOrdinalById = new Map(
     safeEntries.map((e) => [e.journalEntryId, e.topicOrdinal] as const),
   );
-  const paneId = tab === "sujets" ? "cycle-journal-list" : "cycle-reservations-list";
+  const paneId =
+    tab === "sujets"
+      ? "cycle-journal-list"
+      : tab === "reserves"
+        ? "cycle-reservations-list"
+        : tab === "recommandations"
+          ? "cycle-recommendations-list"
+          : "cycle-decisions-list";
   const reservationCycleId = reservationsCycleInstanceId ?? cycleInstanceId;
+  const railTitle =
+    tab === "sujets"
+      ? "Journal du cycle"
+      : tab === "reserves"
+        ? "Réserves du cycle"
+        : tab === "recommandations"
+          ? "Recommandations"
+          : "Décisions";
+  const railMeta =
+    tab === "sujets"
+      ? cycleInstanceId
+        ? `${activeCount} sujet${activeCount === 1 ? "" : "s"}`
+        : "Aucun cycle actif"
+      : tab === "reserves"
+        ? reservationCycleId
+          ? `${openReservationCount} réserve${openReservationCount === 1 ? "" : "s"} ouverte${openReservationCount === 1 ? "" : "s"}`
+          : "Aucun cycle sélectionné"
+        : tab === "recommandations"
+          ? `${openRecommendationCount} en attente de votre réponse`
+          : `${decisionCount} décision${decisionCount === 1 ? "" : "s"} enregistrée${decisionCount === 1 ? "" : "s"}`;

   return (
     <aside
@@ -181,17 +279,9 @@ export function JournalSurface({
         <div className={styles.headerText}>
           <p className={styles.eyebrow}>Mémoire de cycle</p>
           <h2 className={styles.title} id="cycle-journal-heading">
-            {tab === "sujets" ? "Journal du cycle" : "Réserves du cycle"}
+            {railTitle}
           </h2>
-          <p className={styles.meta}>
-            {tab === "sujets"
-              ? cycleInstanceId
-                ? `${activeCount} sujet${activeCount === 1 ? "" : "s"}`
-                : "Aucun cycle actif"
-              : reservationCycleId
-                ? `${openReservationCount} réserve${openReservationCount === 1 ? "" : "s"} ouverte${openReservationCount === 1 ? "" : "s"}`
-                : "Aucun cycle sélectionné"}
-          </p>
+          <p className={styles.meta}>{railMeta}</p>
         </div>
         {onToggleCollapsed ? (
           <button
@@ -242,6 +332,165 @@ export function JournalSurface({
           >
             Réserves ({openReservationCount})
           </button>
+          <button
+            type="button"
+            role="tab"
+            id="memory-rail-tab-recommandations"
+            className={[
+              styles.tab,
+              tab === "recommandations" ? styles.tabActive : "",
+            ]
+              .filter(Boolean)
+              .join(" ")}
+            data-testid="memory-rail-tab-recommandations"
+            aria-selected={tab === "recommandations"}
+            aria-controls="cycle-recommendations-list"
+            onClick={() => setTab("recommandations")}
+          >
+            Recommandations ({openRecommendationCount})
+          </button>
+          <button
+            type="button"
+            role="tab"
+            id="memory-rail-tab-decisions"
+            className={[styles.tab, tab === "decisions" ? styles.tabActive : ""]
+              .filter(Boolean)
+              .join(" ")}
+            data-testid="memory-rail-tab-decisions"
+            aria-selected={tab === "decisions"}
+            aria-controls="cycle-decisions-list"
+            onClick={() => setTab("decisions")}
+          >
+            Décisions ({decisionCount})
+          </button>
+        </div>
+      ) : null}
+
+      {!collapsed && tab === "recommandations" ? (
+        <div
+          id="cycle-recommendations-list"
+          className={styles.list}
+          role="tabpanel"
+          aria-labelledby="memory-rail-tab-recommandations"
+          data-testid="cycle-recommendations-list"
+        >
+          {safeRecommendations.length === 0 ? (
+            <p className={styles.empty} data-testid="cycle-recommendations-empty">
+              Aucune recommandation de travail pour ce cycle. Nora en formulera
+              pendant le travail — une recommandation ne décide jamais.
+            </p>
+          ) : (
+            safeRecommendations.map((card) => {
+              const open = isOpenRecommendation(card);
+              return (
+                <article
+                  key={card.epistemicItemId}
+                  className={[styles.card, !open ? styles.cardMuted : ""]
+                    .filter(Boolean)
+                    .join(" ")}
+                  data-testid={`cycle-recommendation-card-${card.epistemicItemId}`}
+                  data-state={card.status}
+                  data-family="work"
+                >
+                  <div className={styles.cardHeading}>
+                    <span
+                      className={styles.stateBadge}
+                      data-state={card.status}
+                      data-testid={`cycle-recommendation-state-${card.epistemicItemId}`}
+                    >
+                      {recommendationCurrentnessLabel(card)}
+                    </span>
+                  </div>
+                  <p className={styles.cardTitle}>{card.statement}</p>
+                  <p className={styles.cardMeta}>
+                    <span>Recommandation de travail</span>
+                    <span>Nora · recommandation</span>
+                  </p>
+                  <p
+                    className={styles.finalizationHint}
+                    data-testid={`cycle-recommendation-authority-${card.epistemicItemId}`}
+                  >
+                    RECOMMANDATION — PAS UNE DÉCISION HUMAINE. Disposez-en dans
+                    le chat (poursuivre, amender, refuser ou reporter).
+                  </p>
+                  {open && onResumeRecommendationInChat ? (
+                    <div className={styles.cardActions}>
+                      <button
+                        type="button"
+                        className={styles.actionSecondary}
+                        data-testid={`cycle-recommendation-resume-${card.epistemicItemId}`}
+                        onClick={() =>
+                          onResumeRecommendationInChat(card.epistemicItemId)
+                        }
+                      >
+                        Reprendre dans le chat
+                      </button>
+                    </div>
+                  ) : null}
+                </article>
+              );
+            })
+          )}
+        </div>
+      ) : null}
+
+      {!collapsed && tab === "decisions" ? (
+        <div
+          id="cycle-decisions-list"
+          className={styles.list}
+          role="tabpanel"
+          aria-labelledby="memory-rail-tab-decisions"
+          data-testid="cycle-decisions-list"
+        >
+          {safeDecisions.length === 0 ? (
+            <p className={styles.empty} data-testid="cycle-decisions-empty">
+              Aucune décision enregistrée. Vos décisions apparaîtront ici après
+              avoir été prises dans la conversation.
+            </p>
+          ) : (
+            safeDecisions.map((card) => (
+              <article
+                key={card.decisionId}
+                className={styles.card}
+                data-testid={`cycle-decision-card-${card.decisionId}`}
+                data-status={card.status}
+              >
+                <div className={styles.cardHeading}>
+                  <span
+                    className={styles.stateBadge}
+                    data-state={card.status}
+                    data-testid={`cycle-decision-state-${card.decisionId}`}
+                  >
+                    {decisionStatusLabel(card.status)}
+                  </span>
+                </div>
+                <p className={styles.cardTitle}>{card.selectedOptionLabel}</p>
+                <p className={styles.cardSummary}>{card.subject}</p>
+                <p className={styles.cardMeta}>
+                  <span>{card.actorDisplayName}</span>
+                  <span>{card.effectiveAt}</span>
+                </p>
+                {card.reservations.length > 0 ? (
+                  <ul
+                    className={styles.pointsList}
+                    data-testid={`cycle-decision-reserves-${card.decisionId}`}
+                  >
+                    {card.reservations.map((r, i) => (
+                      <li key={`r-${i}`}>{r}</li>
+                    ))}
+                  </ul>
+                ) : null}
+                <details data-testid={`cycle-decision-tech-${card.decisionId}`}>
+                  <summary>Détails techniques</summary>
+                  <p className={styles.detailText}>
+                    <code>{card.decisionId}</code>
+                    {card.cycleInstanceId ? ` · cycle ${card.cycleInstanceId}` : ""}
+                    {` · base de décision ${card.decisionBasisLinked ? "reliée" : "absente"}`}
+                  </p>
+                </details>
+              </article>
+            ))
+          )}
         </div>
       ) : null}


```

### DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 4f89366a..ec1d8112 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -241,11 +241,20 @@ export function TrajectorySurface({
   activeProposalId = null,
   onRequestReformulateWithNora,
   onProposalSubjectOwnershipChange,
+  decisionWorkflowMode = "chat_first",
 }: {
   projectId: string;
   onDurableFactsChanged?: () => void;
   /** Increment after Lifecycle bridge / durable mutations to rehydrate candidate. */
   durableRefreshSignal?: number;
+  /**
+   * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — nominal product path is chat_first:
+   * the governed disposition happens in the conversation and this surface stays
+   * state / inspection / audit only. `legacy_cta` re-exposes the historical
+   * « Instruire les options » / per-option « Décider » affordances for harvest
+   * and RETIRE LATER proofs. The server actions themselves are unchanged.
+   */
+  decisionWorkflowMode?: "chat_first" | "legacy_cta";
   /**
    * H-01 Option A: embed visually in the LPS piloting region.
    * Presentation-only — does not change ProjectTrajectory domain identity.
@@ -2056,6 +2065,14 @@ export function TrajectorySurface({
   /** Alias — same single fail-closed gate for EC and subject mutations. */
   const governedContinuationBlocked = continuityMutationBlocked;

+  /**
+   * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — on the nominal product path the
+   * Pilot disposes of a governed subject in the conversation, so this surface
+   * exposes state / inspection / audit only. The underlying server actions stay
+   * available; they are simply no longer a required UX step.
+   */
+  const legacyDecisionCtaVisible = decisionWorkflowMode === "legacy_cta";
+
   useEffect(() => {
     if (!onProposalSubjectOwnershipChange) return;
     if (continuityReadsUnresolved) {
@@ -2086,13 +2103,14 @@ export function TrajectorySurface({
       <header className={styles.head}>
         <p className={styles.eyebrow}>Trajectoire du projet</p>
         <h2 id="w2-trajectory-title" className={styles.title}>
-          Options, recommandation, puis votre décision
+          {legacyDecisionCtaVisible
+            ? "Options, recommandation, puis votre décision"
+            : "État, options instruites et recommandation"}
         </h2>
         <p className={styles.note}>
-          Nora instruit des options et recommande. La décision vous appartient :
-          une recommandation ne décide jamais et ne rend jamais une trajectoire
-          courante. L&apos;exécution n&apos;est possible qu&apos;après une
-          autorisation vérifiée, via une action Exécuter explicite et distincte.
+          {legacyDecisionCtaVisible
+            ? "Nora instruit des options et recommande. La décision vous appartient : une recommandation ne décide jamais et ne rend jamais une trajectoire courante. L'exécution n'est possible qu'après une autorisation vérifiée, via une action Exécuter explicite et distincte."
+            : "Nora instruit des options et recommande ; vous décidez dans la conversation. Cette section montre l'état gouverné et sert d'inspection/audit : elle ne décide pas et ne rend jamais une trajectoire courante. L'exécution reste une action explicite et distincte, après autorisation vérifiée."}
         </p>
       </header>

@@ -2138,25 +2156,35 @@ export function TrajectorySurface({
               >
                 {pendingReinstruction.message}
               </p>
-              <div className={styles.actions}>
-                <button
-                  type="button"
-                  className={styles.primaryAction}
-                  data-testid="w2-instruct-recoverable-options"
-                  onClick={() => {
-                    if (
-                      pendingReinstruction.proposalIds.length !== 1 ||
-                      pendingReinstruction.recoverableProposalIds.length !== 1
-                    ) {
-                      return;
-                    }
-                    void proposeOptions();
-                  }}
-                  disabled={busy !== null || continuityMutationBlocked}
+              {legacyDecisionCtaVisible ? (
+                <div className={styles.actions}>
+                  <button
+                    type="button"
+                    className={styles.primaryAction}
+                    data-testid="w2-instruct-recoverable-options"
+                    onClick={() => {
+                      if (
+                        pendingReinstruction.proposalIds.length !== 1 ||
+                        pendingReinstruction.recoverableProposalIds.length !== 1
+                      ) {
+                        return;
+                      }
+                      void proposeOptions();
+                    }}
+                    disabled={busy !== null || continuityMutationBlocked}
+                  >
+                    Instruire les options
+                  </button>
+                </div>
+              ) : (
+                <p
+                  className={styles.blockNote}
+                  data-testid="w2-chat-first-pending-hint"
                 >
-                  Instruire les options
-                </button>
-              </div>
+                  Répondez dans la conversation pour poursuivre, amender ou
+                  refuser ce sujet. Cette section reste en lecture.
+                </p>
+              )}
             </>
           ) : pendingReinstruction.proposalIds.length === 1 &&
             pendingReinstruction.recoverableProposalIds.length === 0 ? (
@@ -2381,7 +2409,8 @@ export function TrajectorySurface({
         decision subjects can never compete for the same primary action.
         Continuity reads must both resolve; pending/error/conflict stay fail-closed.
       */}
-      {activeCycleInstanceId &&
+      {legacyDecisionCtaVisible &&
+      activeCycleInstanceId &&
       !proposalSubjectOwnsNextAction &&
       !continuityReadsUnresolved ? (
       <div className={styles.actions}>
@@ -2513,24 +2542,36 @@ export function TrajectorySurface({
                         </p>
                       </details>
                     )}
-                    <button
-                      type="button"
-                      className={styles.decideAction}
-                      data-testid={`w2-decide-${option.optionRef}`}
-                      onClick={() => void decide(option.optionRef)}
-                      disabled={
-                        busy !== null ||
-                        decision !== null ||
-                        continuityMutationBlocked
-                      }
-                      aria-label={`Décider: ${option.label}`}
-                    >
-                      Décider cette option
-                    </button>
+                    {legacyDecisionCtaVisible ? (
+                      <button
+                        type="button"
+                        className={styles.decideAction}
+                        data-testid={`w2-decide-${option.optionRef}`}
+                        onClick={() => void decide(option.optionRef)}
+                        disabled={
+                          busy !== null ||
+                          decision !== null ||
+                          continuityMutationBlocked
+                        }
+                        aria-label={`Décider: ${option.label}`}
+                      >
+                        Décider cette option
+                      </button>
+                    ) : null}
                   </li>
                 );
               })}
             </ul>
+            {!legacyDecisionCtaVisible ? (
+              <p
+                className={styles.blockNote}
+                data-testid="w2-chat-first-decision-hint"
+              >
+                Votre décision se prend dans la conversation. Cette section
+                présente l&apos;état, les options instruites et la
+                recommandation — elle ne décide pas.
+              </p>
+            ) : null}
           </section>

           <section

```

### DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 574feaaf..52805f50 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -589,12 +589,12 @@ export function ConversationSurface({
               id={`${fieldId}-authority-guidance`}
               className={styles.cardTitle}
             >
-              Décidez la trajectoire ci-dessous
+              Votre décision se prend ici, dans la conversation
             </h3>
             <p className={styles.cardNote}>
-              La qualification est enregistrée. La décision de trajectoire, le
-              contrat, la confirmation et l&apos;exécution se font dans la
-              section « Trajectoire et décision ».
+              La qualification est enregistrée. Répondez pour poursuivre,
+              amender ou refuser cette proposition. Le panneau « Trajectoire »
+              reste disponible en lecture pour l&apos;état et l&apos;audit.
             </p>
           </header>
         </section>

```

### DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index 6d040062..b6ba5d62 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -552,6 +552,14 @@ export function useProductConversation({
         // A committed decision subject is a durable Epistemic marker write.
         notifyDurableFactsChanged();
       }
+      if (result.f2?.decision) {
+        // CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — the conversational turn wrote
+        // a durable HumanDecision. Refresh lifecycle/subject reads so the next
+        // governed step (PREPARE) appears without any decide button, and drop a
+        // stale reinstruction arm the server no longer needs.
+        setArmedReinstructionOfProposalId(null);
+        notifyDurableFactsChanged();
+      }
       if (result.reservationResolutionProposal) {
         setReservationResolutionProposal(result.reservationResolutionProposal);
       } else if (!reservationInteractionContext) {

```

### DIFF: `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 1025f9b5..9175564c 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -26,7 +26,9 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Trigger:** Pilot message via product conversation
 - **Steps:** orchestrateTurn → provider analyze/respond → session append → journal tools
 - **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider
+- **Non-blocking conversation (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** a pending governed decision subject no longer turns an unrelated or informative turn into a transport error. `assertExplicitReinstructionGate` stays fail-closed (no competing `DECISION_REQUIRED` is minted) but `orchestrateF2` now renders `EXPLICIT_REINSTRUCTION_REQUIRED` / `AMBIGUOUS_PENDING_REINSTRUCTION` as a conversational clarification turn, so the composer never dead-ends.
 - **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts
+- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case A (pending subject + unrelated topic → answered turn, ZERO HumanDecision, subject intact)

 ## F05 — Active-cycle Artifact materialization
 - **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
@@ -36,6 +38,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Same CycleInstance:** no silent NEW_CYCLE / re-formalization
 - **Exit:** Proposal `DECISION_REQUIRED`
 - **Product spine (UI server actions):** Send → Decide → PrepareResolvedM3 → ConfirmAndExecuteResolvedM3 → RehydrateEvidenceOutcome
+- **Nominal chat-first spine:** Send (proposal) → Send (disposition) → PrepareResolvedM3 → … — `projectAssistantDecideAction` remains available but is no longer a required UX step
 - **Paths:** `activeCycleGovernedContinuation.ts`, `artifactTargetRouting.ts`, Fake matcher, `actions.ts` Product actions
 - **Oracle:** `productCycleE2eStabilization.frontDoor.d0.test.ts` (+ continuity/bridge CORR-01, corrProof07)
 - **Status / proof:** **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (ZERO REAL this macro)
@@ -43,13 +46,21 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

 ## F06 — Proposal / Decision Subject / options
 - **Trigger:** F2 turn producing `f2_proposal`
-- **Persistence:** process-local proposal store
+- **Persistence:** process-local proposal store; durable pending marker + `PresentedOptionSet` Observation in Epistemic
+- **Sealed set without a CTA (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** the `PresentedOptionSet` is materialised server-side when a chat-first disposition needs it (`resolveChatFirstPilotDecision` → existing `proposeTrajectoryOptions` with the resolved `proposalId`), and the UI keeps the pre-existing FR-01 auto-instruct for a sole recoverable pending subject. Materialisation is **lazy, on the disposition turn** — NOT at `DECISION_REQUIRED` mint time. Reserve: an unbound subject that is never disposed of stays unbound (see vol 09).
+- **UI role:** `TrajectorySurface` is read/inspection/audit on the nominal path (`decisionWorkflowMode="chat_first"`); « Instruire les options » and per-option « Décider » are only rendered under `decisionWorkflowMode="legacy_cta"` (harvest / RETIRE LATER proofs). Server actions `w2ProposeTrajectoryOptionsAction` / `w2DecideTrajectoryAction` are unchanged.
 - **Status:** COMPLETE for in-process; PARTIAL across restart

 ## F07 — HumanDecision on Proposal
-- **Trigger:** Pilot accept/refuse via `projectAssistantDecideAction`
-- **Paths:** `actions.ts` → `recordDecision.ts` → `oa_human_decisions`
-- **Status:** COMPLETE durable path
+- **Trigger (legacy):** Pilot accept/refuse via `projectAssistantDecideAction` → `recordDecision.ts`
+- **Trigger (nominal, chat-first Work only):** conversational disposition on `projectAssistantSendAction`. `analyzeIntent` emits a NON-AUTHORITATIVE `pilotDecisionCandidate` (accept|refuse|amend|defer|none|ambiguous). `orchestrateF2` resolves **Work / Proposal decision subjects only** via `resolveChatFirstPilotDecision` → existing `decideTrajectory`. Chat « oui » never START/FINALIZE a Lifecycle Recommendation.
+- **Work family:** sealed option ref (`PROPOSAL_SUBJECT_PURSUE_REF` / `REFUSE` / `AMEND`) via existing `decideTrajectory`; OptionSet Work Recommendation status synced (`disposeWorkRecommendationAfterDecision`). Journal > Recommandations projects **Work** Recommendations only.
+- **Lifecycle family:** explicit Studio actions preserved — prepareCandidateTrajectory / approval / prepareCycle / START / FINALIZE on the right-panel lifecycle surface. Not condensed into chat disposition.
+- **Defer (Work):** durable Pilot HumanDecision + non-blocking Reservation stamp + Work Recommendation `resolved` + Proposal DecisionRef closure; honest target from CURRENT `NEXT_CYCLE` `targetCycleTypeId` or `resolveHonestReservationDeferTarget` (target lookup only). Missing target ⇒ `defer_target_unresolved` (conversation open). No `DEFERRED` enum invented.
+- **Authority boundary:** the candidate is never a HumanDecision. Model-supplied option/proposal/optionSet refs are never read. `none` / `ambiguous` / no unique eligible Work subject / multiple effective pending subjects ⇒ **ZERO HumanDecision**; the conversation stays open. Lifecycle CURRENT alone never yields a chat START/FINALIZE.
+- **Paths:** `f2/intentAnalysis.ts`, `f2/orchestrateF2.ts`, `w2/resolveChatFirstPilotDecision.ts`, `w2/deferWorkRecommendation.ts`, `w2/decideTrajectory.ts` → `oa_human_decisions`; lifecycle → existing `pilotLifecycle` / prepare-start actions
+- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` (Work + hybrid non-START proofs)
+- **Status:** COMPLETE durable Work path (deterministic); Lifecycle explicit Studio path preserved

 ## F08 — EC PREPARE
 - **Trigger:** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
@@ -82,7 +93,10 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Status:** PARTIAL (greenfield/recovery fixes integrated; front-door rehydrate proven at tested scope)

 ## F15 — Cycle finalization
-- **Paths:** `assessFinalization.ts`, lifecycle finalize decision path
+- **Paths:** `assessFinalization.ts`, `deriveUndisposedRecommendations.ts`, lifecycle finalize decision path
+- **Undisposed Recommendations (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** finalization fails closed while an **active** Recommendation published on a presented governed subject (`source` = `optset:…`) is not closed by an active `DecisionRef`. Blocker code `undisposed_recommendations`, reported through the existing `blockers` obligation family — no second engine, no new obligation family. `resolved` / `rejected` / `superseded` Recommendations never block. An unreadable Epistemic source reports `recommendation_source_unreadable` and stays blocking.
+- **Explicitly NOT an authority:** Cycle Journal open points are not Truth C and do not gate finalization; only existing Reservation mechanisms do.
+- **Proof at tested scope:** `undisposedRecommendations.d0.test.ts`, `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case K
 - **Status:** COMPLETE assessment engine; Pilot finalize HD required

 ## F16 — Replan
@@ -91,8 +105,10 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

 ## F17 — Restart at Proposal pending
 - **Expected:** process-local proposal may be absent → product subject-read (`w2ReadActiveDecisionSubjectAction`) hydrates recoverable snapshots / pending reinstruction; Truth C intact; no invented HD
-- **Product resume:** explicit `reinstructionOfProposalId` on Send, then Decide
-- **Status:** DETERMINISTIC proven at tested scope (front-door oracle); Proposal store remains process-local
+- **Product resume (legacy arm, still supported):** explicit `reinstructionOfProposalId` on Send, then Decide — proven by `productCycleE2eStabilization.frontDoor.d0.test.ts`
+- **Product resume (nominal, chat-first):** the Pilot disposes of the pending subject in the conversation. The server owns the continuity: after a chat-first AMEND closes the subject, the next formalization turn needs **no** client-supplied `reinstructionOfProposalId`. A non-reconstructible pending subject yields `no_eligible_subject` (ZERO HumanDecision), never an invented decision.
+- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case D
+- **Status:** DETERMINISTIC proven at tested scope (both front-door oracles); Proposal store remains process-local

 ## F18 — Restart after HD / before execution
 - **Survives:** HD, LPS, cycle; EC if prepared

```

### DIFF: `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 0dcab803..5eb7336b 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -6,6 +6,7 @@
 - This corpus does not change product behavior by itself (Living Reference is descriptive)
 - PocketTasks-observed materialization / MW5 gaps are **mitigated at deterministic tested scope**; REAL OpenAI / PocketTasks parity is **not** re-proven
 - ZERO REAL in PRODUCT-CYCLE-E2E-STABILIZATION-01 — no READY FOR REAL / E2E REAL / Product global READY claimed
+- CHAT-FIRST-GOVERNED-DECISION-LOOP-01: DETERMINISTIC PRODUCT E2E proven at tested scope only — **NOT REAL PROVEN**, **NOT READY FOR REAL**, **NOT PRODUCT GLOBAL READY**
 - No CI workflow changes

 ## Current campaign findings (verified against repo where possible)
@@ -32,7 +33,23 @@

 ## Next macro

-`PRODUCT-CYCLE-E2E-STABILIZATION-01` **executed** on branch `fix/sfia-studio-product-cycle-e2e-stabilization-01` (this tree). Capacité suivante: **requalifier après preuve** — ne pas auto-sélectionner.
+`CHAT-FIRST-GOVERNED-DECISION-LOOP-01` **local candidate** on branch `feat/sfia-studio-chat-first-governed-decision-loop-01` (this tree). Capacité suivante après revue: **campagne PocketTasks REAL bornée** (Gate Morris distinct) — ne pas auto-sélectionner READY FOR REAL.
+
+## CHAT-FIRST-GOVERNED-DECISION-LOOP-01 overlay
+
+| Item | Status |
+|---|---|
+| Chat-first = nominal Work disposition path | DETERMINISTIC proven at tested scope — `pilotDecisionCandidate` → Work only (`resolveChatFirstPilotDecision` → `decideTrajectory`). Chat « oui » never START/FINALIZE |
+| Work vs Lifecycle recommendation families | AS-IMPLEMENTED — Journal Work-only; Lifecycle CURRENT on right-panel / lifecycle projection; finalization `undisposed_recommendations` scans Work in-cycle only |
+| Conversation non-blocking under pending subject | DETERMINISTIC — reinstruction gate no longer dead-ends composer; unrelated turns stay conversational |
+| CTAs Instruire / Décider / Modifier as required UX | RETIRED FROM NOMINAL (`decisionWorkflowMode="chat_first"`); server actions KEEP for legacy_cta / harvest |
+| Journal Recommandations / Décisions tabs | AS-IMPLEMENTED projection from existing Epistemic / HumanDecision reads — never Truth C |
+| Finalization undisposed Recommendations | AS-IMPLEMENTED blocker `undisposed_recommendations` via existing `assessFinalization` blockers family (Work only) |
+| Defer disposition (Work) | AS-IMPLEMENTED at tested scope — durable HD + Reservation `may_affect` + Work Recommendation resolved; missing honest target ⇒ `defer_target_unresolved` |
+| Lifecycle transitions | EXPLICIT Studio actions preserved (prepare trajectory / approve / prepare cycle / START / FINALIZE) — NOT chat-first; candidate Lifecycle Chat-first resolver RETIRED |
+| Unbound subject never disposed | RESERVE — stays unbound; chat-first materialises OptionSet lazily on disposition turn only |
+| REAL chat-first / PocketTasks parity | NOT PROVEN — ZERO REAL this macro; Gate Morris distinct required |
+| Legacy CTA / GO strip / reinstruction arm | KEEP compatibility — RETIRE LATER; #535 NO SAFE REMOVAL PROVEN still holds |

 ## PRODUCT-CYCLE-E2E-STABILIZATION-01 overlay


```

---

## 9. ORACLE + KEY TESTS

### FILE: productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts

```typescript
/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — deterministic PRODUCT front-door oracle.
 *
 * Nominal governed disposition happens IN THE CONVERSATION:
 *   projectAssistantSendAction (proposal)
 *   → projectAssistantSendAction (chat-first accept/refuse/amend)
 *   → projectAssistantPrepareResolvedM3Action
 *
 * No « Instruire les options » CTA, no per-option « Décider » button and no
 * client-supplied reinstructionOfProposalId are used anywhere in this suite.
 *
 * ZERO REAL / ZERO LIVE / ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  projectAssistantPrepareResolvedM3Action,
  projectAssistantSendAction,
} from "@/features/project-assistant/actions";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import { w2ReadActiveDecisionSubjectAction } from "@/features/project-assistant/w2/actions";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  deriveUndisposedRecommendations,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  produceLifecycleRecommendation,
  resolveCanonicalLifecycleRecommendationBasis,
} from "@/lib/oa/cycle";
import { assessChatFirstWorkEligibility } from "@/features/project-assistant/w2/assessChatFirstWorkEligibility";
import {
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  MemoryLaunchSafetyJournal,
  isStudioCursorRealEnabled,
} from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project";
import {
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { W2_FIXED_NOW, W2_REGISTRY_ROOT, W2_SCHEMAS_ROOT } from "./w2Harness";

const STABILIZED_WHAT = [
  "statuts A / B / C",
  "attribut optionnel P avec valeurs basse / moyenne / haute",
  "filtres par statut et P",
  "persistance locale requise",
].join("; ");

const MATERIALIZATION_REQUEST = `Matérialise cette spécification fonctionnelle comme livrable de référence du cycle, sans élargir le périmètre.
La spécification consolidée inclut : ${STABILIZED_WHAT}.
N'exécute rien : prépare la proposition pour ma décision.`;

/** Unrelated informative topic — must never dispose of a governed subject. */
const UNRELATED_TOPIC =
  "Par curiosité, quelles réserves méthodologiques vois-tu sur la lisibilité du projet en général ? __F2_INFORMATIVE__";

/** Bare acknowledgement with no governed target — disposition must be none. */
const UNRELATED_YES = "oui __F2_DECIDE_NONE__";

const CHAT_ACCEPT = "Oui, poursuis cette proposition. __F2_DECIDE_ACCEPT__";
const CHAT_REFUSE = "Non, ne poursuis pas ce sujet. __F2_DECIDE_REFUSE__";
const CHAT_AMEND = "Amende le sujet avant d'engager. __F2_DECIDE_AMEND__";
const CHAT_DEFER = "On verra plus tard pour ce sujet. __F2_DECIDE_DEFER__";
const CHAT_AMBIGUOUS = "Oui, vas-y. __F2_DECIDE_AMBIGUOUS__";

const EXPECTED_PROJECT_ROOT = "projects/mini-cadrage-suivi-de-taches";
const EXPECTED_CYCLE_ROOT = `${EXPECTED_PROJECT_ROOT}/02-conception-fonctionnelle`;
const EXPECTED_ARTIFACT_FILE = "specification-fonctionnelle.md";
const IDENTITY = "acme/widget";
const BRANCH = "main";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function assertRealOff(): void {
  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
  process.env.OPS1_CURSOR_REAL = "0";
  expect(isStudioCursorRealEnabled()).toBe(false);
}

function initManagedGitRepo(managedBase: string, identity: string) {
  fs.mkdirSync(managedBase, { recursive: true });
  const repoRoot = path.join(managedBase, identity.replace("/", "__"));
  fs.mkdirSync(repoRoot, { recursive: true });
  fs.writeFileSync(path.join(repoRoot, ".keep"), "");
  execFileSync("git", ["init"], { cwd: repoRoot });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: repoRoot,
  });
  execFileSync("git", ["config", "user.name", "Test"], { cwd: repoRoot });
  execFileSync("git", ["add", "."], { cwd: repoRoot });
  execFileSync("git", ["commit", "-m", "init"], { cwd: repoRoot });
  const baseHeadSha = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
  return { repoRoot, baseHeadSha };
}

class SeededIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:${this.prefix}-${this.correlation}`;
  }
}

describe("CHAT-FIRST-GOVERNED-DECISION-LOOP-01 front-door oracle", () => {
  let managedBase: string;
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;
  let previousIdentity: string | undefined;
  let previousRemote: string | undefined;
  let previousBranch: string | undefined;
  let previousManaged: string | undefined;
  const tempRoots: string[] = [];

  beforeEach(() => {
    assertRealOff();
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousIdentity = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    previousRemote = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
    previousBranch = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH;
    previousManaged = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = IDENTITY;
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/widget.git";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = BRANCH;

    const root = fs.mkdtempSync(path.join(os.tmpdir(), "cfgdl-"));
    tempRoots.push(root);
    managedBase = path.join(root, "managed");
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
    const initialized = initManagedGitRepo(managedBase, IDENTITY);

    const gitState = new FakeCursorGitExternalState({
      worktreeRoot: initialized.repoRoot,
      initialBranch: BRANCH,
      initialSha: initialized.baseHeadSha,
    });
    const fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: initialized.repoRoot,
      pathAllowlist: [EXPECTED_CYCLE_ROOT],
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
      gitState,
      content: `# Spécification fonctionnelle\n\n${STABILIZED_WHAT}\n`,
    });

    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    runtime = getRuntimeApplicationService({
      registryRoot: W2_REGISTRY_ROOT,
      schemasRoot: W2_SCHEMAS_ROOT,
      nowIso: W2_FIXED_NOW,
      idSource: new SeededIdSource("cfgdl"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa.sqlite"),
      realBoundary: {
        launchPort: fakeLaunch,
        safetyJournal: new MemoryLaunchSafetyJournal(),
        managedRepoRootBase: managedBase,
      },
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    while (tempRoots.length) {
      const d = tempRoots.pop();
      if (d) {
        try {
          fs.rmSync(d, { recursive: true, force: true });
        } catch {
          /* ignore */
        }
      }
    }
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar(
      "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY",
      previousMorrisAuthority,
    );
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY", previousIdentity);
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL", previousRemote);
    restoreEnvVar(
      "SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH",
      previousBranch,
    );
    restoreEnvVar(SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV, previousManaged);
    assertRealOff();
  });

  async function seedFunctionalDesignWithRequireArtifact(
    suffix: string,
  ): Promise<{ projectId: string; cycleInstanceId: string }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "Mini cadrage — Suivi de tâches",
      objective: "Cadrer le suivi de tâches",
      context: `CHAT-FIRST-GOVERNED-DECISION-LOOP-01 ${suffix}`,
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `CFGDL${suffix.toUpperCase()}`,
      idempotencyKey: `idem:cfgdl-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject failed");
    const projectId = created.project.projectId;

    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("LPS unavailable");

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        {
          stepId: "stp:fd",
          order: 1,
          label: "Conception fonctionnelle",
          state: "active",
          cycleTypeId: "cyc:functional-design",
        },
        {
          stepId: "stp:deliver",
          order: 2,
          label: "Livraison",
          state: "pending",
          cycleTypeId: "cyc:delivery",
        },
      ],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    expect(traj.ok).toBe(true);

    const cycleInstanceId = `cyc:cfgdl-${suffix}-${projectId.slice(-6)}`;
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:functional-design",
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
    expect(candidate.ok).toBe(true);

    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-09-27T12:00:00.000Z",
      forceEnable: true,
    });
    if (!auth.ok) throw new Error("authority failed");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("LPS1 unavailable");

    const started = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth.evidenceId,
      expectedLpsVersion: lps1.livingProjectState.version,
    });
    expect(started.ok).toBe(true);

    const obligation = await recordObligationPolicyRequireArtifact({
      projectId,
      cycleInstanceId,
      cycleServices: oa.cycleServices,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => "2026-09-27T12:01:00.000Z",
    });
    expect(obligation.ok).toBe(true);

    return { projectId, cycleInstanceId };
  }

  async function sendPendingProposal(projectId: string): Promise<string> {
    const send = await projectAssistantSendAction({
      projectId,
      content: MATERIALIZATION_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed: ${JSON.stringify(send)}`);
    expect(send.f2?.turnKind).toBe("f2_proposal");
    expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    return send.f2!.proposal!.proposalId;
  }

  async function hdCount(projectId: string): Promise<number> {
    return (
      await runtime.oa!.decisionServices.decisions.listByProject(projectId)
    ).length;
  }

  async function materializeCurrentNextCycleLr(
    projectId: string,
    cycleInstanceId: string,
  ): Promise<void> {
    const oa = runtime.oa!;
    const cycles = await oa.cycleServices.cycles.listByProject(projectId);
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps.ok) throw new Error("lps");
    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    if (!traj.ok) throw new Error("traj");
    const pin = lps.livingProjectState.doctrinePackageRef;
    const basis = resolveCanonicalLifecycleRecommendationBasis({
      intent: "FINALIZE_CURRENT_CYCLE",
      projectId,
      subjectCycleInstanceId: cycleInstanceId,
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: pin.doctrinePackageId,
      doctrinePackageVersion: pin.version,
      doctrinePackageDigest: pin.digest,
      trajectory: traj.trajectory,
      decisions: await oa.decisionServices.decisions.listByProject(projectId),
      evidence: [],
      blockingReservationStatements: [],
    });
    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: oa.cycleServices.updateEpistemicState,
      projectId,
      structured: {
        intent: "FINALIZE_CURRENT_CYCLE" as const,
        statement: "Envisager la finalisation pendant un sujet ouvert.",
        subjectCycleInstanceId: cycleInstanceId,
        targetCycleInstanceId: null,
        targetCycleTypeId: null,
        rationale: "Finalisation supportable pendant travail en cours.",
        authority: "none" as const,
        isHumanDecision: false as const,
        qualificationSignals: null,
      },
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      basisRefs: basis,
      producedAt: "2026-09-27T13:00:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      existingItems: await oa.cycleServices.epistemic.listByProject(projectId),
    });
    expect(produced.ok).toBe(true);
  }

  it("A — conversation stays non-blocking under a pending subject (unrelated topic)", async () => {
    const { projectId } = await seedFunctionalDesignWithRequireArtifact("nonblk");
    const proposalId = await sendPendingProposal(projectId);
    const hdBefore = await hdCount(projectId);

    const unrelated = await projectAssistantSendAction({
      projectId,
      content: UNRELATED_TOPIC,
    });
    expect(unrelated.ok).toBe(true);
    if (!unrelated.ok) throw new Error(JSON.stringify(unrelated));

    // No dead-end: an ordinary turn is answered, not rejected.
    expect(unrelated.text.length).toBeGreaterThan(0);
    expect(unrelated.f2?.decision ?? null).toBeNull();
    expect(await hdCount(projectId)).toBe(hdBefore);

    // The governed subject survives the unrelated turn.
    const subject = await w2ReadActiveDecisionSubjectAction({ projectId });
    expect(subject.ok).toBe(true);
    if (!subject.ok) throw new Error("subject read failed");
    expect(subject.kind).not.toBe("none");
    if (subject.kind === "pending_reinstruction_required") {
      expect(subject.proposalIds).toContain(proposalId);
    }
  });

  it("B — chat-first accept records exactly one HD with DecisionBasis and opens PREPARE", async () => {
    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("accept");
    await sendPendingProposal(projectId);
    const hdBefore = await hdCount(projectId);

    const accepted = await projectAssistantSendAction({
      projectId,
      content: CHAT_ACCEPT,
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) throw new Error(JSON.stringify(accepted));

    expect(accepted.f2?.turnKind).toBe("f2_decision");
    expect(accepted.f2?.decision?.kind).toBe("GO");
    expect(accepted.f2?.decision?.readyForNextGatedStep).toBe(true);
    expect(accepted.f2?.labels.decisionTaken).toBe("DÉCISION PRISE");
    // Chat-first must not mint a competing proposal on the same turn.
    expect(accepted.f2?.proposal ?? null).toBeNull();

    expect(await hdCount(projectId)).toBe(hdBefore + 1);

    const decisionId = accepted.f2!.decision!.decisionId;
    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) throw new Error("hd read failed");
    expect(hd.decision.status).toBe("accepted");
    expect(hd.decision.decisionBasis?.sourceType).toBe("proposal");
    expect(hd.decision.decisionBasis?.executionBasis?.artifactFileName).toBe(
      EXPECTED_ARTIFACT_FILE,
    );

    // PREPARE is reachable straight from the conversational decision.
    const prepared = await projectAssistantPrepareResolvedM3Action({
      projectId,
      decisionId,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(`prepare: ${prepared.message}`);
    expect(prepared.f3.executionPerformed).toBe(false);
    expect(prepared.f3.attemptCreated).toBe(false);
    expect(prepared.f3.successor.executionContractId).toMatch(/^xct:/);

    const cycles =
      await runtime.oa!.cycleServices.cycles.listByProject(projectId);
    expect(
      cycles.filter((c) => c.status === "active").map((c) => c.cycleInstanceId),
    ).toEqual([cycleInstanceId]);
  });

  it("C — chat-first refuse records exactly one refused HD and closes the subject", async () => {
    const { projectId } = await seedFunctionalDesignWithRequireArtifact("refuse");
    await sendPendingProposal(projectId);
    const hdBefore = await hdCount(projectId);

    const refused = await projectAssistantSendAction({
      projectId,
      content: CHAT_REFUSE,
    });
    expect(refused.ok).toBe(true);
    if (!refused.ok) throw new Error(JSON.stringify(refused));

    expect(refused.f2?.turnKind).toBe("f2_decision");
    expect(refused.f2?.decision?.kind).toBe("NO_GO");
    expect(refused.f2?.decision?.readyForNextGatedStep).toBe(false);
    expect(await hdCount(projectId)).toBe(hdBefore + 1);

    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: refused.f2!.decision!.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) throw new Error("hd read failed");
    expect(hd.decision.status).toBe("accepted");
    expect(hd.decision.decisionBasis?.sourceType).toBe("proposal");

    const subject = await w2ReadActiveDecisionSubjectAction({ projectId });
    expect(subject.ok).toBe(true);
    if (!subject.ok) throw new Error("subject read failed");
    expect(subject.kind).toBe("none");
  });

  it("D — chat-first amend closes the subject without any client reinstructionOfProposalId", async () => {
    const { projectId } = await seedFunctionalDesignWithRequireArtifact("amend");
    await sendPendingProposal(projectId);
    const hdBefore = await hdCount(projectId);

    const amended = await projectAssistantSendAction({
      projectId,
      content: CHAT_AMEND,
    });
    expect(amended.ok).toBe(true);
    if (!amended.ok) throw new Error(JSON.stringify(amended));
    expect(amended.f2?.turnKind).toBe("f2_decision");
    expect(amended.f2?.decision?.kind).toBe("AMEND");
    expect(await hdCount(projectId)).toBe(hdBefore + 1);

    // Server-owned continuity: the next formalization turn needs NO client arm
    // and must not dead-end on EXPLICIT_REINSTRUCTION_REQUIRED.
    const next = await projectAssistantSendAction({
      projectId,
      content: MATERIALIZATION_REQUEST,
    });
    expect(next.ok).toBe(true);
    if (!next.ok) throw new Error(JSON.stringify(next));
    expect(next.f2?.turnKind).toBe("f2_proposal");
    expect(next.f2?.proposal?.status).toBe("DECISION_REQUIRED");
  });

  it("E — chat-first defer records durable HD, closes subject, resolves work Recommendation", async () => {
    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("defer");
    await sendPendingProposal(projectId);
    const hdBefore = await hdCount(projectId);

    const deferred = await projectAssistantSendAction({
      projectId,
      content: CHAT_DEFER,
    });
    expect(deferred.ok).toBe(true);
    if (!deferred.ok) throw new Error(JSON.stringify(deferred));
    expect(deferred.f2?.turnKind).toBe("f2_decision");
    expect(deferred.f2?.decision?.kind).toBe("GO_WITH_RESERVES");
    expect(deferred.text).toMatch(/report/i);
    expect(await hdCount(projectId)).toBe(hdBefore + 1);

    const subject = await w2ReadActiveDecisionSubjectAction({ projectId });
    expect(subject.ok).toBe(true);
    if (!subject.ok) throw new Error("subject read failed");
    expect(subject.kind).toBe("none");

    const items =
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId);
    expect(
      deriveUndisposedRecommendations(items, cycleInstanceId),
    ).toHaveLength(0);
    expect(
      items.some(
        (i) =>
          i.type === "Reservation" &&
          i.source === "work-recommendation-defer" &&
          i.status === "active",
      ),
    ).toBe(true);
  });

  it("F — two pending subjects + « oui » → ambiguity, no HD", async () => {
    const { projectId } = await seedFunctionalDesignWithRequireArtifact("ambig");
    const first = await sendPendingProposal(projectId);

    // Second pending subject written directly through the durable marker path.
    const { writePendingDecisionSubjectMarker } = await import(
      "@/features/project-assistant/w2/pendingDecisionSubjectMarker"
    );
    const { getProposal } = await import(
      "@/features/project-assistant/f2/proposalStore"
    );
    const { sealProposalExecutionBasis, computeProposalSubjectDigest } =
      await import(
        "@/features/project-assistant/w2/resolveProposalDecisionSubject"
      );
    const firstProposal = getProposal(first);
    expect(firstProposal).not.toBeNull();
    const secondProposalId = `prop:cfgdl-second-${Date.now()}`;
    const secondProposal = {
      ...firstProposal!,
      proposalId: secondProposalId,
    };
    const sealed = sealProposalExecutionBasis(secondProposal);
    const marker = await writePendingDecisionSubjectMarker({
      oa: runtime.oa!,
      projectId,
      proposalId: secondProposalId,
      subjectDigest: computeProposalSubjectDigest(sealed, secondProposalId),
      lpsId: secondProposal.contextSnapshot.lpsId,
      lpsVersion: secondProposal.contextSnapshot.lpsVersion,
      doctrineDigest: secondProposal.contextSnapshot.doctrineDigest,
      proposal: secondProposal,
      correlationId: `cor:pending-subject:${secondProposalId}`,
    });
    expect(marker.ok).toBe(true);

    const hdBefore = await hdCount(projectId);
    const ambiguous = await projectAssistantSendAction({
      projectId,
      content: CHAT_AMBIGUOUS,
    });
    expect(ambiguous.ok).toBe(true);
    if (!ambiguous.ok) throw new Error(JSON.stringify(ambiguous));
    expect(ambiguous.f2?.decision ?? null).toBeNull();
    expect(await hdCount(projectId)).toBe(hdBefore);

    // A literal accept on two competing subjects must also record nothing.
    const accepted = await projectAssistantSendAction({
      projectId,
      content: CHAT_ACCEPT,
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) throw new Error(JSON.stringify(accepted));
    expect(accepted.f2?.decision ?? null).toBeNull();
    expect(accepted.f2?.turnKind).toBe("f2_clarification");
    expect(await hdCount(projectId)).toBe(hdBefore);
  });

  it("G — an unrelated « oui » without a governed target records nothing", async () => {
    const { projectId } = await seedFunctionalDesignWithRequireArtifact("yes");
    await sendPendingProposal(projectId);
    const hdBefore = await hdCount(projectId);

    const yes = await projectAssistantSendAction({
      projectId,
      content: UNRELATED_YES,
    });
    expect(yes.ok).toBe(true);
    if (!yes.ok) throw new Error(JSON.stringify(yes));
    expect(yes.f2?.decision ?? null).toBeNull();
    expect(yes.f2?.turnKind).toBe("f1_informative");
    expect(await hdCount(projectId)).toBe(hdBefore);

    const subject = await w2ReadActiveDecisionSubjectAction({ projectId });
    expect(subject.ok).toBe(true);
    if (!subject.ok) throw new Error("subject read failed");
    expect(subject.kind).not.toBe("none");
  });

  it("K — finalization is blocked by an undisposed Recommendation and unblocked after disposition", async () => {
    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("final");

    const cleanAssessment = async () => {
      const assessed = await runtime.oa!.cycleServices.pilotLifecycle.assess({
        cycleInstanceId,
        projectId,
      });
      expect(assessed.ok).toBe(true);
      if (!assessed.ok) throw new Error("assess failed");
      return assessed.assessment;
    };

    const baseline = await cleanAssessment();
    expect(baseline.blockers).not.toContain("undisposed_recommendations");

    await sendPendingProposal(projectId);
    // Lazy FR-01 materialisation — Work Recommendation exists only after sealed OptionSet bind.
    const bound = await assessChatFirstWorkEligibility({
      oa: runtime.oa!,
      projectId,
    });
    expect(bound.eligible).toBe(true);

    const blocked = await cleanAssessment();
    expect(blocked.blockers).toContain("undisposed_recommendations");
    expect(blocked.canComplete).toBe(false);

    const deferred = await projectAssistantSendAction({
      projectId,
      content: CHAT_DEFER,
    });
    expect(deferred.ok).toBe(true);
    if (!deferred.ok) throw new Error(JSON.stringify(deferred));
    expect(deferred.f2?.decision?.kind).toBe("GO_WITH_RESERVES");

    const itemsFinal =
      await runtime.oa!.cycleServices.epistemic.listByProject(projectId);
    expect(
      deriveUndisposedRecommendations(itemsFinal, cycleInstanceId),
    ).toHaveLength(0);

    const unblocked = await cleanAssessment();
    expect(unblocked.blockers).not.toContain("undisposed_recommendations");
  });

  it("B-lifecycle — NEXT_CYCLE CURRENT + chat « oui » → ZERO START / ZERO lifecycle HD from chat", async () => {
    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("lc-yes");
    // No Work subject — only Lifecycle CURRENT NEXT_CYCLE.
    await materializeCurrentNextCycleLr(projectId, cycleInstanceId);

    const workGate = await assessChatFirstWorkEligibility({
      oa: runtime.oa!,
      projectId,
    });
    expect(workGate.eligible).toBe(false);

    const hdBefore = await hdCount(projectId);
    const cyclesBefore = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    const activeBefore = cyclesBefore.filter((c) => c.status === "active").length;
    const statusesBefore = cyclesBefore.map((c) => c.status).sort();

    const yes = await projectAssistantSendAction({
      projectId,
      content: CHAT_ACCEPT,
    });
    expect(yes.ok).toBe(true);
    if (!yes.ok) throw new Error(JSON.stringify(yes));
    // Chat-first Work path must not record a Work HD nor trigger START.
    expect(yes.f2?.decision ?? null).toBeNull();
    expect(await hdCount(projectId)).toBe(hdBefore);

    const cyclesAfter = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesAfter.filter((c) => c.status === "active").length).toBe(
      activeBefore,
    );
    expect(cyclesAfter.map((c) => c.status).sort()).toEqual(statusesBefore);
  });

  it("B-hybrid — Work + Lifecycle CURRENT + chat accept → Work HD only, ZERO START", async () => {
    const { projectId, cycleInstanceId } =
      await seedFunctionalDesignWithRequireArtifact("hybrid");
    await sendPendingProposal(projectId);
    await materializeCurrentNextCycleLr(projectId, cycleInstanceId);

    const workGate = await assessChatFirstWorkEligibility({
      oa: runtime.oa!,
      projectId,
    });
    expect(workGate.eligible).toBe(true);

    const hdBefore = await hdCount(projectId);
    const cyclesBefore = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    const activeBefore = cyclesBefore.filter((c) => c.status === "active").length;

    const accepted = await projectAssistantSendAction({
      projectId,
      content: CHAT_ACCEPT,
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) throw new Error(JSON.stringify(accepted));
    expect(accepted.f2?.decision?.kind).toBe("GO");
    expect(await hdCount(projectId)).toBe(hdBefore + 1);

    const cyclesAfter = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(cyclesAfter.filter((c) => c.status === "active").length).toBe(
      activeBefore,
    );
  });

  it("STRUCTURAL — the chat-first lineage never touches CTA/decide seams", () => {
    // Only the suite body above this guard is the lineage under proof; the
    // guard's own literals must not count as usages.
    const src = fs
      .readFileSync(__filename, "utf8")
      .split("STRUCTURAL — the chat-first lineage")[0]!;
    expect(src).toMatch(/projectAssistantSendAction/);
    expect(src).toMatch(/projectAssistantPrepareResolvedM3Action/);
    // No « Instruire les options » CTA, no per-option decide button,
    // no legacy F2 gate decide, no client-supplied reinstruction arm.
    for (const forbidden of [
      "w2ProposeTrajectoryOptionsAction",
      "w2DecideTrajectoryAction",
      "projectAssistantDecideAction",
      "reinstructionOfProposalId:",
    ]) {
      expect(src.includes(forbidden)).toBe(false);
    }
  });
});

```

### FILE: `projects/sfia-studio/app/__tests__/oa/cycle/deriveWorkRecommendations.d0.test.ts`

```typescript
/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 §10-A — Work vs Lifecycle family separation.
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  isLifecycleRecommendationItem,
  projectCycleWorkRecommendations,
} from "@/lib/oa/cycle/application/deriveWorkRecommendations";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  resolveTrajectoryBootstrapPresence,
  selectCurrentLifecycleRecommendations,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";

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

const CYCLE_ID = "cycinst:sep-a";
const OPTION_SET = "optset:w2-work-only";

const tempDirs: string[] = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "dwr-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

function workRecommendation() {
  return {
    epistemicItemId: "epi:work-1",
    type: "Recommendation",
    status: "active",
    source: OPTION_SET,
    statement: "RECOMMANDATION — poursuivre le sujet proposé.",
    relatedObjects: ["prj:x", OPTION_SET, "prop:f2:1", CYCLE_ID],
    createdAt: "2026-09-27T10:00:00.000Z",
  };
}

function lifecycleItem(input: {
  id: string;
  intent: "NEXT_CYCLE" | "FINALIZE_CURRENT_CYCLE";
  statement: string;
}) {
  return {
    epistemicItemId: input.id,
    type: "Recommendation",
    status: "active",
    source: "lifecycle-recommendation:nora",
    statement: input.statement,
    createdAt: "2026-09-27T11:00:00.000Z",
    relatedObjects: ["prj:x", CYCLE_ID],
    lifecycleRecommendation: {
      intent: input.intent,
      basisFingerprint: `fp:${input.id}`,
      semanticKey: `sk:${input.id}`,
      basisRefs: { projectId: "prj:x" },
      subjectCycleInstanceId: CYCLE_ID,
      targetCycleInstanceId: null,
      targetCycleTypeId:
        input.intent === "NEXT_CYCLE" ? "cyc:framing" : null,
      authority: "none",
    },
  };
}

describe("deriveWorkRecommendations — §10-A family separation", () => {
  it("classifies lifecycle carriers and keeps optset work Recommendations", () => {
    const work = workRecommendation();
    const next = lifecycleItem({
      id: "epi:lr-next",
      intent: "NEXT_CYCLE",
      statement: "Envisager le prochain cycle.",
    });
    const fin = lifecycleItem({
      id: "epi:lr-fin",
      intent: "FINALIZE_CURRENT_CYCLE",
      statement: "Envisager la finalisation.",
    });

    expect(isLifecycleRecommendationItem(next)).toBe(true);
    expect(isLifecycleRecommendationItem(fin)).toBe(true);
    expect(isLifecycleRecommendationItem(work)).toBe(false);

    const journalCards = projectCycleWorkRecommendations({
      items: [work, next, fin],
      cycleInstanceId: CYCLE_ID,
    });
    expect(journalCards).toHaveLength(1);
    expect(journalCards[0]!.epistemicItemId).toBe("epi:work-1");
    expect(journalCards[0]!.source).toBe(OPTION_SET);
    expect(journalCards.map((c) => c.epistemicItemId)).not.toContain(
      "epi:lr-next",
    );
    expect(journalCards.map((c) => c.epistemicItemId)).not.toContain(
      "epi:lr-fin",
    );
  });

  it("CURRENT NEXT_CYCLE and FINALIZE appear in lifecycle projection only", async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T20:00:00.000Z",
      idSource: new FixedIdSource("dwr"),
      auditMode: "noop",
      productDbPath: tempDbPath("sep.sqlite"),
    });
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "Separation",
      objective: "gestion de tâches",
      context: "journal vs lifecycle",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "DWR",
      idempotencyKey: "idem:dwr-sep",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    const projectId = created.projectId;

    const cycles = await oa.cycleServices.cycles.listByProject(projectId);
    const decisions = await oa.decisionServices.decisions.listByProject(
      projectId,
    );
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps.ok) throw new Error("lps");
    const presence = await resolveTrajectoryBootstrapPresence(
      oa.cycleServices.trajectories,
      projectId,
    );
    const mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId,
      structuredOutput: {
        narrative: "Prochain cycle recommandé.",
        preCycleRoutingAssessment: {
          ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
        },
        lifecycleRecommendation: {
          intent: "NEXT_CYCLE" as const,
          statement: "Envisager un Cadrage.",
          subjectCycleInstanceId: null,
          targetCycleInstanceId: null,
          targetCycleTypeId: "cyc:framing",
          rationale: "Suite supportable.",
          authority: "none" as const,
          isHumanDecision: false as const,
          qualificationSignals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
        },
      },
      updateEpistemicState: oa.cycleServices.updateEpistemicState,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: null,
        trajectoryBootstrapPresence: presence,
        decisions,
        evidence: [],
        epistemicItems: await oa.cycleServices.epistemic.listByProject(
          projectId,
        ),
      },
      producedAt: "2026-09-09T20:01:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.materialization?.ok).toBe(true);

    const durableItems = await oa.cycleServices.epistemic.listByProject(
      projectId,
    );
    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    const current = selectCurrentLifecycleRecommendations({
      items: durableItems,
      cycles: await oa.cycleServices.cycles.listByProject(projectId),
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj.ok ? traj.trajectory : null,
      decisions: await oa.decisionServices.decisions.listByProject(projectId),
      evidence: [],
    }).filter((r) => r.derivedCurrentness === "CURRENT");

    expect(current.some((r) => r.intent === "NEXT_CYCLE")).toBe(true);

    const workCards = projectCycleWorkRecommendations({
      items: [workRecommendation(), ...durableItems],
      cycleInstanceId: CYCLE_ID,
      fallbackCycleInstanceId: CYCLE_ID,
    });
    expect(workCards).toHaveLength(1);
    expect(workCards[0]!.optionSetRef).toBe(OPTION_SET);
    for (const lr of current) {
      expect(workCards.some((c) => c.statement === lr.statement)).toBe(false);
    }
  });
});

```

### FILE: `projects/sfia-studio/app/__tests__/oa/cycle/undisposedRecommendations.d0.test.ts`

```typescript
/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — undisposed Recommendation derivation
 * and its finalization blocker.
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assessFinalizationObligations,
  deriveUndisposedRecommendations,
} from "@/lib/oa/cycle";
import type { CycleInstance } from "@/lib/oa/cycle/domain/types";

const OPTION_SET = "optset:w2-abc";

function recommendation(overrides?: Partial<{
  epistemicItemId: string;
  status: string;
  source: string;
  relatedObjects: readonly string[];
}>) {
  return {
    epistemicItemId: "epi:rec-1",
    type: "Recommendation",
    status: "active",
    source: OPTION_SET,
    statement: "RECOMMANDATION — poursuivre le sujet.",
    relatedObjects: ["prj:x", OPTION_SET, "cycinst:1"],
    ...overrides,
  };
}

const CYCLE_ID = "cycinst:1";

function decisionRef(optionSetRef = OPTION_SET) {
  return {
    epistemicItemId: "epi:decref-1",
    type: "DecisionRef",
    status: "active",
    source: "dec:w2-prop:1",
    statement: "Décision humaine enregistrée.",
    relatedObjects: ["prj:x", "dec:w2-prop:1", optionSetRef, "prop:f2:1"],
  };
}

describe("deriveUndisposedRecommendations", () => {
  it("reports an active OptionSet Recommendation with no closing DecisionRef", () => {
    const out = deriveUndisposedRecommendations([recommendation()], CYCLE_ID);
    expect(out).toHaveLength(1);
    expect(out[0]!.optionSetRef).toBe(OPTION_SET);
    expect(out[0]!.cycleInstanceId).toBe(CYCLE_ID);
  });

  it("stops reporting once a DecisionRef closes the same OptionSet", () => {
    expect(
      deriveUndisposedRecommendations(
        [recommendation(), decisionRef()],
        CYCLE_ID,
      ),
    ).toHaveLength(0);
  });

  it("ignores resolved / rejected / superseded Recommendations", () => {
    for (const status of ["resolved", "rejected", "superseded"]) {
      expect(
        deriveUndisposedRecommendations(
          [recommendation({ status })],
          CYCLE_ID,
        ),
      ).toHaveLength(0);
    }
  });

  it("never treats lifecycle Recommendations as undisposed work blockers", () => {
    expect(
      deriveUndisposedRecommendations(
        [
          recommendation({ source: "lifecycle-recommendation:nora" }),
          {
            epistemicItemId: "epi:lr-next",
            type: "Recommendation",
            status: "active",
            source: "lifecycle-recommendation:nora",
            statement: "NEXT_CYCLE advisory",
            lifecycleRecommendation: {
              intent: "NEXT_CYCLE",
              basisFingerprint: "fp",
            },
            relatedObjects: ["prj:x", "cycinst:1"],
          },
        ],
        CYCLE_ID,
      ),
    ).toHaveLength(0);
  });

  it("scopes work Recommendations to the cycle under finalization", () => {
    expect(
      deriveUndisposedRecommendations(
        [
          recommendation({
            relatedObjects: ["prj:x", OPTION_SET, "cycinst:other"],
          }),
        ],
        CYCLE_ID,
      ),
    ).toHaveLength(0);
  });

  it("does not let a DecisionRef on another OptionSet dispose this one", () => {
    expect(
      deriveUndisposedRecommendations(
        [recommendation(), decisionRef("optset:w2-other")],
        CYCLE_ID,
      ),
    ).toHaveLength(1);
  });
});

const CYCLE: CycleInstance = {
  schemaVersion: "0.1.0-oa",
  cycleInstanceId: "cycinst:1",
  cycleTypeId: "cyc:functional-design",
  projectId: "prj:x",
  profile: "Standard",
  status: "active",
  createdAt: "2026-09-27T10:00:00.000Z",
  createdBy: {
    actorId: "actor:morris",
    role: "project_owner",
    displayName: "Morris",
    authorityLevel: "N3",
  },
} as unknown as CycleInstance;

function assess(undisposedRecommendationRefs: readonly string[]) {
  return assessFinalizationObligations({
    cycle: CYCLE,
    projectId: "prj:x",
    assessedAt: "2026-09-27T12:00:00.000Z",
    decisions: [],
    evidence: [],
    reviewBundles: [],
    trajectory: null,
    undisposedRecommendationRefs,
  });
}

describe("assessFinalizationObligations — undisposed_recommendations", () => {
  it("blocks finalization while a Recommendation awaits a Pilot disposition", () => {
    const assessment = assess(["epi:rec-1"]);
    expect(assessment.blockers).toContain("undisposed_recommendations");
    expect(assessment.canComplete).toBe(false);
    const blockersFamily = assessment.obligations.find(
      (o) => o.family === "blockers",
    );
    expect(blockersFamily?.status).toBe("BLOCKING");
    expect(blockersFamily?.detail).toContain("undisposed_recommendations");
  });

  it("does not block when nothing is left to dispose", () => {
    expect(assess([]).blockers).not.toContain("undisposed_recommendations");
  });
});

```

---

## 10. Living Ref finals

### 03

```markdown
# 03 — End-to-End Flow Catalog

**As-implemented @ `1162b36b14ca2f4f644dcd3da970b25113214b06`**

Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

## F01 — Project creation / greenfield
- **Trigger:** Studio create project
- **Steps:** LocalProjectComposition → oa_projects/LPS → optional trajectory bootstrap
- **Paths:** `vertical-slice-runtime/service.ts`, project create use cases
- **Status:** COMPLETE (deterministic); greenfield continuity corrections on main (#531)

## F02 — Project load / restart
- **Trigger:** Open `/studio/projects/[id]`
- **Reads:** Product DB Truth C + Nora session continuity action
- **Paths:** `projectAssistantConversationContinuityAction` in `actions.ts`
- **Status:** PARTIAL — transcript availability depends on session DB path colocation

## F03 — Cycle qualification / activation
- **Trigger:** F2 qualification / Pilot lifecycle start
- **Objects:** CycleInstance, CKC, LPS active pointer
- **Paths:** `f2/qualify.ts`, `orchestrateF2.ts`, `pilotLifecycle.start`
- **Status:** COMPLETE deterministic core

## F04 — Nora conversation during active cycle
- **Trigger:** Pilot message via product conversation
- **Steps:** orchestrateTurn → provider analyze/respond → session append → journal tools
- **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider
- **Non-blocking conversation (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** a pending governed decision subject no longer turns an unrelated or informative turn into a transport error. `assertExplicitReinstructionGate` stays fail-closed (no competing `DECISION_REQUIRED` is minted) but `orchestrateF2` now renders `EXPLICIT_REINSTRUCTION_REQUIRED` / `AMBIGUOUS_PENDING_REINSTRUCTION` as a conversational clarification turn, so the composer never dead-ends.
- **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts
- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case A (pending subject + unrelated topic → answered turn, ZERO HumanDecision, subject intact)

## F05 — Active-cycle Artifact materialization
- **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
- **Admission:** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE ∧ ¬SATISFIED (#532+#533)
- **Leaf / target:** Nora/Pilot leaf candidate is non-authoritative; server owns `targetPath` composition (D-PC-09); no normal filename micro-gate when cues suffice; clarification only when no coherent cue
- **Continuation fact:** `structurallyResolvedActiveCycleContinuation` is server-owned and local to this Recommendation/Proposal — ≠ Truth C, ≠ HumanDecision, ≠ universal uncertainty resolution; sealed continuation without impacting signals skips gratuitous structural MW5 re-challenge
- **Same CycleInstance:** no silent NEW_CYCLE / re-formalization
- **Exit:** Proposal `DECISION_REQUIRED`
- **Product spine (UI server actions):** Send → Decide → PrepareResolvedM3 → ConfirmAndExecuteResolvedM3 → RehydrateEvidenceOutcome
- **Nominal chat-first spine:** Send (proposal) → Send (disposition) → PrepareResolvedM3 → … — `projectAssistantDecideAction` remains available but is no longer a required UX step
- **Paths:** `activeCycleGovernedContinuation.ts`, `artifactTargetRouting.ts`, Fake matcher, `actions.ts` Product actions
- **Oracle:** `productCycleE2eStabilization.frontDoor.d0.test.ts` (+ continuity/bridge CORR-01, corrProof07)
- **Status / proof:** **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (ZERO REAL this macro)
- **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle; satisfied artifact

## F06 — Proposal / Decision Subject / options
- **Trigger:** F2 turn producing `f2_proposal`
- **Persistence:** process-local proposal store; durable pending marker + `PresentedOptionSet` Observation in Epistemic
- **Sealed set without a CTA (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** the `PresentedOptionSet` is materialised server-side when a chat-first disposition needs it (`resolveChatFirstPilotDecision` → existing `proposeTrajectoryOptions` with the resolved `proposalId`), and the UI keeps the pre-existing FR-01 auto-instruct for a sole recoverable pending subject. Materialisation is **lazy, on the disposition turn** — NOT at `DECISION_REQUIRED` mint time. Reserve: an unbound subject that is never disposed of stays unbound (see vol 09).
- **UI role:** `TrajectorySurface` is read/inspection/audit on the nominal path (`decisionWorkflowMode="chat_first"`); « Instruire les options » and per-option « Décider » are only rendered under `decisionWorkflowMode="legacy_cta"` (harvest / RETIRE LATER proofs). Server actions `w2ProposeTrajectoryOptionsAction` / `w2DecideTrajectoryAction` are unchanged.
- **Status:** COMPLETE for in-process; PARTIAL across restart

## F07 — HumanDecision on Proposal
- **Trigger (legacy):** Pilot accept/refuse via `projectAssistantDecideAction` → `recordDecision.ts`
- **Trigger (nominal, chat-first Work only):** conversational disposition on `projectAssistantSendAction`. `analyzeIntent` emits a NON-AUTHORITATIVE `pilotDecisionCandidate` (accept|refuse|amend|defer|none|ambiguous). `orchestrateF2` resolves **Work / Proposal decision subjects only** via `resolveChatFirstPilotDecision` → existing `decideTrajectory`. Chat « oui » never START/FINALIZE a Lifecycle Recommendation.
- **Work family:** sealed option ref (`PROPOSAL_SUBJECT_PURSUE_REF` / `REFUSE` / `AMEND`) via existing `decideTrajectory`; OptionSet Work Recommendation status synced (`disposeWorkRecommendationAfterDecision`). Journal > Recommandations projects **Work** Recommendations only.
- **Lifecycle family:** explicit Studio actions preserved — prepareCandidateTrajectory / approval / prepareCycle / START / FINALIZE on the right-panel lifecycle surface. Not condensed into chat disposition.
- **Defer (Work):** durable Pilot HumanDecision + non-blocking Reservation stamp + Work Recommendation `resolved` + Proposal DecisionRef closure; honest target from CURRENT `NEXT_CYCLE` `targetCycleTypeId` or `resolveHonestReservationDeferTarget` (target lookup only). Missing target ⇒ `defer_target_unresolved` (conversation open). No `DEFERRED` enum invented.
- **Authority boundary:** the candidate is never a HumanDecision. Model-supplied option/proposal/optionSet refs are never read. `none` / `ambiguous` / no unique eligible Work subject / multiple effective pending subjects ⇒ **ZERO HumanDecision**; the conversation stays open. Lifecycle CURRENT alone never yields a chat START/FINALIZE.
- **Paths:** `f2/intentAnalysis.ts`, `f2/orchestrateF2.ts`, `w2/resolveChatFirstPilotDecision.ts`, `w2/deferWorkRecommendation.ts`, `w2/decideTrajectory.ts` → `oa_human_decisions`; lifecycle → existing `pilotLifecycle` / prepare-start actions
- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` (Work + hybrid non-START proofs)
- **Status:** COMPLETE durable Work path (deterministic); Lifecycle explicit Studio path preserved

## F08 — EC PREPARE
- **Trigger:** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
- **Paths:** `prepareAndResolveM3ProductPath` → `lib/oa/execution-contract/**`
- **Invariant:** cannot expand DecisionBasis WHAT; Product UI seals N2 Pilot authority (legacy omit → MORRIS)
- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (front-door oracle)

## F09 — EC inspect / Confirmation / authority
- **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
- **Product path:** Confirm+execute folded in `projectAssistantConfirmAndExecuteResolvedM3Action` (boundary validates MORRIS legacy or N2 Product Pilot matching PREPARE)
- **Status:** COMPLETE tables/services; Product E2E at tested scope

## F10 — Governed execution (docs_write / Cursor)
- **Gate:** `SFIA_STUDIO_CURSOR_REAL` + managed repo base + EC/attempt
- **Status:** BOUNDARY gated; REAL only under Morris GO (out of this macro); Fake docs-write proven in front-door oracle

## F11 — Attempt terminal → Evidence → ReviewBundle
- **Paths:** execution-attempt + evidence-review aggregates; docs-write appends LPS `evidenceIds`/`reviewBundleIds` for rehydrate
- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (Fake)

## F12 — ContractResult / ClaimEvaluation
- **Paths:** claim evaluation tables/services
- **Status:** PRESENT; journey proof PARTIAL

## F13 — Nora post-Evidence
- **Status:** PARTIAL — product surfaces exist; campaign re-proof deferred

## F14 — LPS / trajectory continuation or recovery
- **Paths:** trajectory services; recovery ownership continuity; `projectAssistantRehydrateEvidenceOutcomeAction`
- **Status:** PARTIAL (greenfield/recovery fixes integrated; front-door rehydrate proven at tested scope)

## F15 — Cycle finalization
- **Paths:** `assessFinalization.ts`, `deriveUndisposedRecommendations.ts`, lifecycle finalize decision path
- **Undisposed Recommendations (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** finalization fails closed while an **active** Recommendation published on a presented governed subject (`source` = `optset:…`) is not closed by an active `DecisionRef`. Blocker code `undisposed_recommendations`, reported through the existing `blockers` obligation family — no second engine, no new obligation family. `resolved` / `rejected` / `superseded` Recommendations never block. An unreadable Epistemic source reports `recommendation_source_unreadable` and stays blocking.
- **Explicitly NOT an authority:** Cycle Journal open points are not Truth C and do not gate finalization; only existing Reservation mechanisms do.
- **Proof at tested scope:** `undisposedRecommendations.d0.test.ts`, `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case K
- **Status:** COMPLETE assessment engine; Pilot finalize HD required

## F16 — Replan
- **Invariant:** No silent replan
- **Status:** PARTIAL — explicit replan seams exist; silent replan forbidden

## F17 — Restart at Proposal pending
- **Expected:** process-local proposal may be absent → product subject-read (`w2ReadActiveDecisionSubjectAction`) hydrates recoverable snapshots / pending reinstruction; Truth C intact; no invented HD
- **Product resume (legacy arm, still supported):** explicit `reinstructionOfProposalId` on Send, then Decide — proven by `productCycleE2eStabilization.frontDoor.d0.test.ts`
- **Product resume (nominal, chat-first):** the Pilot disposes of the pending subject in the conversation. The server owns the continuity: after a chat-first AMEND closes the subject, the next formalization turn needs **no** client-supplied `reinstructionOfProposalId`. A non-reconstructible pending subject yields `no_eligible_subject` (ZERO HumanDecision), never an invented decision.
- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case D
- **Status:** DETERMINISTIC proven at tested scope (both front-door oracles); Proposal store remains process-local

## F18 — Restart after HD / before execution
- **Survives:** HD, LPS, cycle; EC if prepared
- **Status:** PARTIAL proven by domain tests

## F19 — Restart post-Evidence
- **Survives:** Evidence/RB/claims in product DB; LPS evidence outcome refs; session transcript if session path stable
- **Status:** PARTIAL — front-door rehydrate assertions at tested scope

## F20 — Legacy / historical compatibility
- **Examples:** deprecated `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` alias; historical new-cycle formalization when no materialization intent
- **Historical UI surfaces (still routed):** `/cycle-actif`, `/decision`, `/synthese` (nav tier `historical`; `/` still redirects to `/synthese`; POC fixture harness — ≠ OA Truth C)
- **OPS1 ops surface:** `/ops1/nouvelle-demande` + `lib/ops1/**` (isolated sqlite; D1 nav still links; product Fake env reuses `OPS1_*` names)
- **Parallel BC:** `lib/oa/execution-run/**` (memory-only; FinOps/T7 shadow consumer; not product EC→Attempt)
- **Status:** ACTIVE compatibility / temporary keep — **no SAFE TO REMOVE proven** under SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (see vol 09)

```

### 09

```markdown
# 09 — Known Gaps, Reserves & Current Boundaries

## Hard boundaries

- Runtime v3 **NON ADOPTED**
- This corpus does not change product behavior by itself (Living Reference is descriptive)
- PocketTasks-observed materialization / MW5 gaps are **mitigated at deterministic tested scope**; REAL OpenAI / PocketTasks parity is **not** re-proven
- ZERO REAL in PRODUCT-CYCLE-E2E-STABILIZATION-01 — no READY FOR REAL / E2E REAL / Product global READY claimed
- CHAT-FIRST-GOVERNED-DECISION-LOOP-01: DETERMINISTIC PRODUCT E2E proven at tested scope only — **NOT REAL PROVEN**, **NOT READY FOR REAL**, **NOT PRODUCT GLOBAL READY**
- No CI workflow changes

## Current campaign findings (verified against repo where possible)

| Finding | Class | Notes |
|---|---|---|
| Natural active-cycle materialization routing corrected (#532) | CONFIRMED | continuity tests on main |
| Artifact applicability bridge corrected (#533) | CONFIRMED | bridge helpers on HEAD |
| D-PC-09: filename candidate + server exact target; no micro-gate | CONFIRMED (doc) | product-completion cadrage amendment |
| REAL PocketTasks asked Pilot for filename | OBSERVATION | campaign UX; REAL not re-run here |
| Fake may derive `note-de-cadrage.md`; REAL may leave null | MITIGATED Fake / REAL still provider-dependent | Fake now uses provider-neutral leaf cues; REAL not re-run |
| MW5 may re-challenge structurally resolved continuation | MITIGATED at tested scope | `structurallyResolvedActiveCycleContinuation` |
| Local tests pre-satisfy challenge assessment | MITIGATED on materialization Fake path | default assessment null |
| E2E backbone can bypass natural conversation front door | MITIGATED at tested scope — Product server-action oracle | `productCycleE2eStabilization.frontDoor.d0.test.ts` |
| Pending Proposal / reinstruction continuity = downstream impact seam | CONFIRMED structural | process-local proposalStore |
| EC→Attempt→Evidence→Recovery single lineage needs re-proof | RE-PROVEN AT TESTED SCOPE (Fake) | front-door oracle |

## Uncertainties

- Dependency graph is representative, not exhaustive of every file.
- Failure-mode catalog is selected, not every string code in repo.
- Some object cards mark PARTIAL where aggregate naming is distributed across DTOs.
- REAL OpenAI leaf candidacy parity not re-proven this macro (DETERMINISTIC only).

## Next macro

`CHAT-FIRST-GOVERNED-DECISION-LOOP-01` **local candidate** on branch `feat/sfia-studio-chat-first-governed-decision-loop-01` (this tree). Capacité suivante après revue: **campagne PocketTasks REAL bornée** (Gate Morris distinct) — ne pas auto-sélectionner READY FOR REAL.

## CHAT-FIRST-GOVERNED-DECISION-LOOP-01 overlay

| Item | Status |
|---|---|
| Chat-first = nominal Work disposition path | DETERMINISTIC proven at tested scope — `pilotDecisionCandidate` → Work only (`resolveChatFirstPilotDecision` → `decideTrajectory`). Chat « oui » never START/FINALIZE |
| Work vs Lifecycle recommendation families | AS-IMPLEMENTED — Journal Work-only; Lifecycle CURRENT on right-panel / lifecycle projection; finalization `undisposed_recommendations` scans Work in-cycle only |
| Conversation non-blocking under pending subject | DETERMINISTIC — reinstruction gate no longer dead-ends composer; unrelated turns stay conversational |
| CTAs Instruire / Décider / Modifier as required UX | RETIRED FROM NOMINAL (`decisionWorkflowMode="chat_first"`); server actions KEEP for legacy_cta / harvest |
| Journal Recommandations / Décisions tabs | AS-IMPLEMENTED projection from existing Epistemic / HumanDecision reads — never Truth C |
| Finalization undisposed Recommendations | AS-IMPLEMENTED blocker `undisposed_recommendations` via existing `assessFinalization` blockers family (Work only) |
| Defer disposition (Work) | AS-IMPLEMENTED at tested scope — durable HD + Reservation `may_affect` + Work Recommendation resolved; missing honest target ⇒ `defer_target_unresolved` |
| Lifecycle transitions | EXPLICIT Studio actions preserved (prepare trajectory / approve / prepare cycle / START / FINALIZE) — NOT chat-first; candidate Lifecycle Chat-first resolver RETIRED |
| Unbound subject never disposed | RESERVE — stays unbound; chat-first materialises OptionSet lazily on disposition turn only |
| REAL chat-first / PocketTasks parity | NOT PROVEN — ZERO REAL this macro; Gate Morris distinct required |
| Legacy CTA / GO strip / reinstruction arm | KEEP compatibility — RETIRE LATER; #535 NO SAFE REMOVAL PROVEN still holds |

## PRODUCT-CYCLE-E2E-STABILIZATION-01 overlay

| Item | Status |
|---|---|
| G2 filename micro-gate nominal | MITIGATED — Nora leaf candidate + server compose; clarify when no cue |
| G3 MW5 gratuitous re-challenge | MITIGATED — `structurallyResolvedActiveCycleContinuation` (≠ Truth C ≠ HD) |
| G1/G8 front-door + Fake realism | MITIGATED — front-door oracle; Fake materialization assessment default null |
| G6 EC→Attempt→Evidence lineage | RE-PROVEN at tested scope via Product server-action front-door oracle (Fake docs-write + LPS outcome refs) |
| REAL / E2E REAL | NOT claimed — ZERO REAL this macro |
| Naming policy STOP | NOT required — leaf remains non-authoritative candidate (D-PC-09) |

## Legacy architecture decommission audit (this tree)

**Macro:** `SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01` @ `1162b36b` / merged `#535`
**Verdict:** **AUDIT COMPLETE — NO SAFE REMOVAL PROVEN** (no product code deleted).

| Candidate | Classification | Exit / why not removed |
|---|---|---|
| OPS1 (`app/ops1`, `lib/ops1`, `features/ops1`) | KEEP — TEMPORARY | Active route + D1 nav + CI `__tests__/ops1/**` + product Fake env names `OPS1_*`; exit requires Morris GO + env rename + suite/nav cutover |
| `lib/oa/execution-run/**` | KEEP — TEMPORARY | Not on product spine, but FinOps/T7 shadow + CI suite + vol coupling; FinOps HORS SCOPE blocks clean delete |
| `/cycle-actif`, `/decision`, `/synthese` (+ features) | RETIRE FROM ACTIVE VISIBILITY (partial) + KEEP — TEMPORARY | Historical nav tier done; `/`→`/synthese`, 404, FLUSH_TABS, increment/p0 tests remain |
| D1 routes / `lib/d1` | KEEP — CURRENT / ADAPT | Active intake surfaces |
| F3 / W3A fixtures | KEEP — CURRENT (test substitute) | Wired in `vertical-slice-runtime/service.ts` |
| FinOps / T7 | HORS SCOPE | Frozen — do not touch |
| `sfia-v3-modeled/**` | HORS SCOPE | Required Gate CI |

No `retired-components-ledger.md` — zero components removed.

```

---

## 11. Fake/Real

Fake shares Work chat-first spine. REAL not exercised. NOT READY FOR REAL.

## 12. Réserves

- REAL PocketTasks chat-first Work path unproven
- Legacy Work CTAs retained behind `legacy_cta`
- Lifecycle explicit UI non-regression relies on existing lifecycle suites (PASS)

## Verdict

`CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — LOCAL CANDIDATE / WORK RECOMMENDATIONS CHAT-FIRST PROVEN / LIFECYCLE EXPLICIT STUDIO ACTIONS PRESERVED / DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE / READY FOR CHATGPT CRITICAL REVIEW`
