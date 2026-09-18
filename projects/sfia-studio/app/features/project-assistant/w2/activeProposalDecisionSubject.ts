/**
 * CORR-PROOF-10 — durable Proposal decision-subject read / rehydration.
 *
 * Design (smallest delta): PresentedOptionSet Observation is the durable
 * truth after binding. Pending marker covers only the pre-binding window.
 *
 * Crash-consistency: DecisionRef Proposal closure is authoritative over a
 * stale pre-binding pending marker for the SAME proposalId. Physical marker
 * may remain; reconstruction shadows it. READ FAILURE ≠ EMPTY STATE.
 */

import {
  readLiveProjectContext,
  type RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";
import { listProposalsForProject } from "../f2/proposalStore";
import {
  pilotAmbiguousPendingMessage,
  pilotPendingReinstructionMessage,
} from "../presentationLabels";
import {
  hydrateProposalsFromPendingMarkers,
  listActivePendingDecisionSubjectMarkers,
  type PendingDecisionSubjectMarker,
  type SnapshotHydrationLiveContext,
} from "./pendingDecisionSubjectMarker";
import {
  isProposalSubjectPresentedSet,
  parsePresentedOptionSetStatement,
  type PresentedOptionSetBinding,
  W2_PRESENTED_OPTION_SET_KIND,
} from "./presentedOptionSet";
import { readPrepareReadyProposalPursueContinuation } from "./prepareReadyProposalPursueContinuation";
import type {
  TrajectoryDecisionRecordDto,
  TrajectoryOptionSetDto,
} from "./types";

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
      /** Pending proposalIds still present as DECISION_REQUIRED in process-local store. */
      readonly recoverableProposalIds: readonly string[];
      readonly message: string;
    }
  | {
      readonly ok: true;
      readonly kind: "bound_awaiting_decision";
      readonly presented: PresentedOptionSetBinding;
      readonly optionSet: TrajectoryOptionSetDto;
    }
  | {
      /**
       * Checkpoint E resume — Proposal subject already closed by DecisionRef,
       * but durable pursue HD + DecisionBasis remain PREPARE-ready (no EC).
       */
      readonly ok: true;
      readonly kind: "pursue_prepare_ready";
      readonly decision: TrajectoryDecisionRecordDto;
    }
  | EpistemicReadFailure;

type EpistemicItemLike = {
  readonly type: string;
  readonly status: string;
  readonly epistemicItemId?: string;
  readonly relatedObjects?: readonly string[] | null;
};

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
  items: ReadonlyArray<EpistemicItemLike>,
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
 * ProposalIds closed by an authoritative Proposal DecisionRef.
 *
 * Match is precise: active DecisionRef whose relatedObjects explicitly contain
 * the proposalId (prop:…). Trajectory DecisionRefs without proposalId never
 * close a Proposal pending marker.
 */
export function closedProposalIdsFromProposalDecisionRefs(
  items: ReadonlyArray<EpistemicItemLike>,
): ReadonlySet<string> {
  const closed = new Set<string>();
  for (const item of items) {
    if (item.type !== "DecisionRef" || item.status !== "active") continue;
    const related = item.relatedObjects ?? [];
    // Proposal closures always carry both optionSetRef and proposalId.
    const hasOptionSet = related.some((r) => r.startsWith("optset:"));
    if (!hasOptionSet) continue;
    for (const rel of related) {
      if (rel.startsWith("prop:")) {
        closed.add(rel);
      }
    }
  }
  return closed;
}

/**
 * Drop pending markers whose proposalId is already closed by DecisionRef.
 * Pure reconstruction — no mutation of Epistemic state.
 */
export function filterStalePendingMarkersClosedByDecisionRef(
  markers: readonly PendingDecisionSubjectMarker[],
  closedProposalIds: ReadonlySet<string>,
): readonly PendingDecisionSubjectMarker[] {
  return markers.filter((m) => !closedProposalIds.has(m.proposalId));
}

/**
 * Pending markers that still have authority as pre-binding guards.
 * Stale markers for DecisionRef-closed proposals are shadowed (not deleted).
 */
export async function listEffectivePendingDecisionSubjectMarkers(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<
  | {
      readonly ok: true;
      readonly markers: readonly PendingDecisionSubjectMarker[];
      readonly closedProposalIds: ReadonlySet<string>;
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
        "État épistémique illisible — impossible de déterminer les marqueurs pending décisionnels. Aucun fallback trajectoire générique.",
    };
  }

  const pending = await listActivePendingDecisionSubjectMarkers(oa, projectId);
  if (!pending.ok) return pending;

  const closedProposalIds = closedProposalIdsFromProposalDecisionRefs(
    epistemic.state.items,
  );
  return {
    ok: true,
    markers: filterStalePendingMarkersClosedByDecisionRef(
      pending.markers,
      closedProposalIds,
    ),
    closedProposalIds,
  };
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
 *
 * Authority order:
 * 1. bound awaiting PresentedOptionSet
 * 2. effective pending markers (DecisionRef-closed proposalIds shadowed)
 * 3. durable pursue PREPARE continuation (HD + basis, no EC)
 * 4. none
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

  const pending = await listEffectivePendingDecisionSubjectMarkers(
    oa,
    projectId,
  );
  if (!pending.ok) return pending;

  if (pending.markers.length > 0) {
    // Snapshot continuity is only admissible against live Product truth.
    // Unreadable live context is an epistemic failure, not "no subject".
    const live = await readLiveProjectContext(oa, projectId);
    if (!live.ok) {
      return {
        ok: false,
        code: "EPISTEMIC_READ_FAILED",
        message:
          "Contexte Project/LPS courant illisible — reconstruction du sujet de décision refusée. Aucun fallback trajectoire générique.",
      };
    }
    const liveContext: SnapshotHydrationLiveContext = {
      projectId,
      lpsId: live.context.lpsId,
      lpsVersion: live.context.lpsVersion,
      doctrineDigest: live.context.doctrineDigest,
      closedProposalIds: pending.closedProposalIds,
    };
    hydrateProposalsFromPendingMarkers(pending.markers, liveContext);
    const localDecisionRequired = new Set(
      listProposalsForProject(projectId)
        .filter((p) => p.status === "DECISION_REQUIRED")
        .map((p) => p.proposalId),
    );
    const recoverableProposalIds = pending.markers
      .map((m) => m.proposalId)
      .filter((id) => localDecisionRequired.has(id));
    const ambiguous = pending.markers.length > 1;
    return {
      ok: true,
      kind: "pending_reinstruction_required",
      markers: pending.markers,
      recoverableProposalIds,
      message: ambiguous
        ? pilotAmbiguousPendingMessage()
        : pilotPendingReinstructionMessage({
            recoverable: recoverableProposalIds.length > 0,
          }),
    };
  }

  // Subject closed (DecisionRef) but pursue HD still PREPARE-ready — restart resume.
  const prepareReady = await readPrepareReadyProposalPursueContinuation({
    oa,
    projectId,
  });
  if (!prepareReady.ok) {
    return {
      ok: false,
      code: "EPISTEMIC_READ_FAILED",
      message: prepareReady.message,
    };
  }
  if (prepareReady.kind === "pursue_prepare_ready") {
    return {
      ok: true,
      kind: "pursue_prepare_ready",
      decision: prepareReady.decision,
    };
  }

  return { ok: true, kind: "none" };
}

/**
 * CORR-PROOF-11 — server gate before minting a competing DECISION_REQUIRED subject.
 * Ordinary turns without reinstruction must not resolve pendings (R10); they must
 * not silently write a second pending either.
 */
export async function assertExplicitReinstructionGate(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly reinstructionOfProposalId: string | null;
}): Promise<
  | { readonly ok: true; readonly reinstructionOfProposalId: string | null }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const effective = await listEffectivePendingDecisionSubjectMarkers(
    input.oa,
    input.projectId,
  );
  if (!effective.ok) {
    return {
      ok: false,
      code: effective.code,
      message: effective.message,
    };
  }

  if (effective.markers.length === 0) {
    if (input.reinstructionOfProposalId) {
      return {
        ok: false,
        code: "REINSTRUCTION_SUBJECT_NOT_EFFECTIVE",
        message:
          "Aucune proposition en attente à remplacer — retirez la réinstruction explicite.",
      };
    }
    return { ok: true, reinstructionOfProposalId: null };
  }

  // CORR-PROOF-11 final — multi-pending is AMBIGUOUS. Studio never selects.
  // Fail closed BEFORE accepting any client-supplied reinstructionOfProposalId.
  if (effective.markers.length > 1) {
    return {
      ok: false,
      code: "AMBIGUOUS_PENDING_REINSTRUCTION",
      message: pilotAmbiguousPendingMessage(),
    };
  }

  if (!input.reinstructionOfProposalId) {
    return {
      ok: false,
      code: "EXPLICIT_REINSTRUCTION_REQUIRED",
      message: pilotPendingReinstructionMessage({ recoverable: false }),
    };
  }

  const match = effective.markers.find(
    (m) => m.proposalId === input.reinstructionOfProposalId,
  );
  if (!match) {
    return {
      ok: false,
      code: "REINSTRUCTION_SUBJECT_NOT_EFFECTIVE",
      message:
        "La proposition à remplacer n'est pas un sujet pending effectif pour ce projet.",
    };
  }

  return {
    ok: true,
    reinstructionOfProposalId: input.reinstructionOfProposalId,
  };
}
