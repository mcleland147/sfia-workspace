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
 * 3. none
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
