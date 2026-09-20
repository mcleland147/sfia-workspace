/**
 * Canonical Proposal decision-subject epistemic closure.
 * Shared by decideTrajectory (proposal mode) and recordF2Decision so both
 * Product entry points produce the same durable DecisionRef + pending resolution.
 *
 * DecisionRef relatedObjects MUST include optionSetRef (optset:) AND proposalId
 * (prop:) for readActiveProposalDecisionSubject / closedProposalIds matching.
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import {
  resolvePendingDecisionSubjectMarker,
} from "./pendingDecisionSubjectMarker";
import { updateProposalStatus } from "../f2/proposalStore";
import type { F2ProposalStatus } from "../f2/types";

export type ProposalClosureMarkerReason = "decided" | "amended" | "refused";

export type CloseProposalDecisionSubjectInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
  readonly proposalId: string;
  readonly selectedOptionRef: string;
  /** Required for closedProposalIdsFromProposalDecisionRefs matching. */
  readonly optionSetRef: string;
  readonly epistemicRefs?: readonly string[];
  readonly markerReason: ProposalClosureMarkerReason;
  readonly nextProposalStatus: F2ProposalStatus;
  readonly statement?: string;
  readonly correlationId?: string;
};

export type CloseProposalDecisionSubjectResult =
  | { readonly ok: true; readonly epistemicItemId: string }
  | { readonly ok: false; readonly code: string; readonly message: string };

export function f2DirectOptionSetRef(proposalId: string): string {
  return `optset:f2-direct:${proposalId}`;
}

export function decisionRefEpistemicItemId(optionSetRef: string): string {
  return `epi:w2-decref-prop:${optionSetRef.replace(/[^a-zA-Z0-9:_-]/g, "-")}`.slice(
    0,
    180,
  );
}

/**
 * Durable Epistemic DecisionRef write only (caller owns UoW / ordering).
 */
export async function writeProposalDecisionRef(
  input: CloseProposalDecisionSubjectInput,
): Promise<CloseProposalDecisionSubjectResult> {
  const epistemicItemId = decisionRefEpistemicItemId(input.optionSetRef);
  const statement =
    input.statement ??
    `Décision humaine ${input.decisionId} — option retenue ${input.selectedOptionRef} — sujet Proposal ${input.proposalId} (ProjectTrajectory non promue).`;
  const closure = await input.oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    items: [
      {
        epistemicItemId,
        type: "DecisionRef",
        statement,
        status: "active",
        source: input.decisionId,
        relatedObjects: [
          input.projectId,
          input.decisionId,
          input.selectedOptionRef,
          input.optionSetRef,
          input.proposalId,
          ...(input.epistemicRefs ?? []),
        ],
      },
    ],
    createdBy: LOCAL_PILOTE_ACTOR,
    correlationId:
      input.correlationId ?? `w2-decref-prop:${input.optionSetRef}`,
  });
  if (!closure.ok) {
    return {
      ok: false,
      code: closure.error.detailCode,
      message: `Closure DecisionRef Proposal échouée (${closure.error.detailCode}) — HumanDecision non autoritaire.`,
    };
  }
  return { ok: true, epistemicItemId };
}

/**
 * Process-local ProposalStore status + pending marker resolve.
 * Call ONLY after durable DecisionRef (and HD) succeeded.
 */
export async function finalizeProposalSubjectAfterDurableClosure(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly proposalId: string;
  readonly markerReason: ProposalClosureMarkerReason;
  readonly nextProposalStatus: F2ProposalStatus;
  readonly correlationId?: string;
}): Promise<
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  updateProposalStatus(input.proposalId, input.nextProposalStatus);
  return resolvePendingDecisionSubjectMarker({
    oa: input.oa,
    projectId: input.projectId,
    proposalId: input.proposalId,
    reason: input.markerReason,
    correlationId:
      input.correlationId ?? `cor:pending-decide:${input.proposalId}`,
  });
}
