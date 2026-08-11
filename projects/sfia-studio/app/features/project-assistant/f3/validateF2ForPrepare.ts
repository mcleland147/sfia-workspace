/**
 * Fail-closed F2 eligibility checks before F3 PREPARE.
 * F2 GO remains prepare-only — this never creates an Attempt.
 */

import type { DecisionServices } from "@/lib/oa/decision";
import type { F2ContextSnapshot } from "../f2/types";
import {
  contextMatches,
  getProposal,
  markProposalStale,
} from "../f2/proposalStore";
import { proposalScope } from "../f2/recordDecision";
import type { F3ValidateResult } from "./types";

export async function validateF2ForPrepare(input: {
  proposalId: string;
  projectId: string;
  decisionId: string;
  currentContext: F2ContextSnapshot;
  decisionServices: DecisionServices;
}): Promise<F3ValidateResult> {
  const proposal = getProposal(input.proposalId);
  if (!proposal) {
    return {
      ok: false,
      code: "PROPOSAL_NOT_FOUND",
      message:
        "Proposition introuvable (process-local). Fail closed après redémarrage — aucune autorité d'exécution reconstruite.",
    };
  }

  if (proposal.contextSnapshot.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "La proposition n'appartient pas à ce projet.",
      proposal,
    };
  }

  if (!contextMatches(proposal.contextSnapshot, input.currentContext)) {
    const stale = markProposalStale(proposal.proposalId);
    return {
      ok: false,
      code: "STALE",
      message:
        "Contexte Project/LPS modifié — proposition STALE. Aucune préparation F3.",
      proposal: stale,
    };
  }

  if (
    proposal.status !== "APPROVED" &&
    proposal.status !== "APPROVED_WITH_RESERVES"
  ) {
    return {
      ok: false,
      code: "PROPOSAL_NOT_APPROVED",
      message: `Proposition non approuvée (statut ${proposal.status}). PREPARE refusé.`,
      proposal,
    };
  }

  const decisionResult = await input.decisionServices.getHumanDecision.execute({
    decisionId: input.decisionId,
  });
  if (!decisionResult.ok) {
    return {
      ok: false,
      code: "DECISION_NOT_FOUND",
      message:
        "Décision F2 introuvable (process-local). Fail closed — pas d'exécution.",
      proposal,
    };
  }

  const decision = decisionResult.decision;
  if (decision.projectId !== input.projectId) {
    return {
      ok: false,
      code: "DECISION_PROJECT_MISMATCH",
      message: "La décision n'appartient pas à ce projet.",
      proposal,
    };
  }

  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "DECISION_NOT_ACCEPTED",
      message: `Décision non acceptée (statut ${decision.status}).`,
      proposal,
    };
  }

  const expectedScope = proposalScope(proposal);
  if (decision.scope !== expectedScope) {
    return {
      ok: false,
      code: "DECISION_SCOPE_MISMATCH",
      message: "Scope décision ≠ scope proposition F2.",
      proposal,
    };
  }

  return {
    ok: true,
    proposal,
    decisionId: input.decisionId,
    decisionStatus: "accepted",
    scope: expectedScope,
  };
}
