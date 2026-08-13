/**
 * Record Morris-gate HumanDecision via OA DecisionServices (M3 durable).
 * Authority evidence is server-owned LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT
 * when configured; fail-closed otherwise. Client claims ignored.
 */

import { randomUUID } from "node:crypto";
import type {
  DecisionBasis,
  DecisionServices,
  MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import {
  computeDecisionBasisSourceDigest,
  LOCAL_MORRIS_M3_ACTOR,
  registerM3LocalMorrisAuthority,
} from "@/lib/oa/decision";
import type {
  DecisionDto,
  F2ContextSnapshot,
  F2DecisionKind,
  ProposalDto,
} from "./types";
import {
  contextMatches,
  getProposal,
  markProposalStale,
  updateProposalStatus,
} from "./proposalStore";

/** @deprecated M2 demo actor — prefer LOCAL_MORRIS_M3_ACTOR when M3 authority enabled. */
export const LOCAL_MORRIS_ACTOR = Object.freeze({
  actorId: "actor:local-morris-demo",
  role: "decision_maker" as const,
  displayName: "Local Morris demo",
  authorityLevel: "none" as const,
});

/** @deprecated M2 demo source — M3 uses LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT. */
export const LOCAL_MORRIS_EVIDENCE_SOURCE =
  "LOCAL_PROCESS_MORRIS_DEMO_AUTHORITY" as const;

export function proposalScope(proposal: ProposalDto): string {
  return `f2-proposal:${proposal.proposalId}`;
}

function mapStatus(kind: F2DecisionKind): {
  proposalStatus:
    | "APPROVED"
    | "APPROVED_WITH_RESERVES"
    | "REFUSED"
    | "AMENDMENT_REQUIRED";
  selectedOptionId: string;
  humanStatus: "accepted" | "refused" | "amended";
} {
  switch (kind) {
    case "GO":
      return {
        proposalStatus: "APPROVED",
        selectedOptionId: "opt:go",
        humanStatus: "accepted",
      };
    case "GO_WITH_RESERVES":
      return {
        proposalStatus: "APPROVED_WITH_RESERVES",
        selectedOptionId: "opt:go-reserves",
        humanStatus: "accepted",
      };
    case "NO_GO":
      return {
        proposalStatus: "REFUSED",
        selectedOptionId: "opt:no-go",
        humanStatus: "refused",
      };
    case "AMEND":
      return {
        proposalStatus: "AMENDMENT_REQUIRED",
        selectedOptionId: "opt:amend",
        humanStatus: "amended",
      };
  }
}

function buildDecisionBasis(input: {
  proposal: ProposalDto;
  projectId: string;
  currentContext: F2ContextSnapshot;
}): DecisionBasis {
  const { proposal, projectId, currentContext } = input;
  const stablePayload = {
    proposalId: proposal.proposalId,
    objective: proposal.objective,
    scope: proposal.scope,
    outOfScope: proposal.outOfScope,
    activatedBlocks: proposal.activatedBlocks,
    expectedOutcome: proposal.expectedOutcome,
    risks: proposal.risks,
    reservations: proposal.reservations,
    stopConditions: proposal.stopConditions,
    cycleTypeId: proposal.cycleTypeId,
    recommendedProfile: proposal.recommendedProfile,
    rephrasedRequest: proposal.rephrasedRequest,
  };
  const cycleInstanceId =
    currentContext.activeCycleInstanceId ??
    proposal.contextSnapshot.activeCycleInstanceId ??
    undefined;
  return {
    sourceType: "proposal",
    sourceRef: proposal.proposalId,
    sourceDigest: computeDecisionBasisSourceDigest(stablePayload),
    projectId,
    cycleInstanceId: cycleInstanceId ?? undefined,
    proposalContext: {
      lpsId: currentContext.lpsId,
      lpsVersion: currentContext.lpsVersion,
      doctrineDigest: currentContext.doctrineDigest,
      activeCycleInstanceId: currentContext.activeCycleInstanceId ?? undefined,
      ckcResolutionRef: currentContext.ckcResolutionRef ?? undefined,
    },
    executionBasis: {
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
      requestedOperation: proposal.rephrasedRequest,
    },
  };
}

export async function recordF2Decision(input: {
  proposalId: string;
  projectId: string;
  decisionKind: F2DecisionKind;
  reservesText?: string | null;
  /** Hostile client fields — ignored. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
  currentContext: F2ContextSnapshot;
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
  /** Test inject for M3 authority. */
  forceM3Authority?: boolean;
}): Promise<
  | {
      ok: true;
      decision: DecisionDto;
      proposal: ProposalDto;
    }
  | {
      ok: false;
      code: string;
      message: string;
      proposal?: ProposalDto | null;
    }
> {
  // Never trust client authority claims.
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const proposal = getProposal(input.proposalId);
  if (!proposal) {
    return {
      ok: false,
      code: "PROPOSAL_NOT_FOUND",
      message:
        "Proposition introuvable (process-local). Aucune autorisation durable après redémarrage.",
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
        "Contexte Project/LPS modifié — proposition STALE. Aucun GO silencieux.",
      proposal: stale,
    };
  }

  if (
    proposal.status === "STALE" ||
    proposal.status === "REFUSED" ||
    proposal.status === "AMENDMENT_REQUIRED" ||
    proposal.status === "APPROVED" ||
    proposal.status === "APPROVED_WITH_RESERVES"
  ) {
    return {
      ok: false,
      code: "PROPOSAL_NOT_DECIDABLE",
      message: `Proposition non décidable (statut ${proposal.status}).`,
      proposal,
    };
  }

  if (!proposal.morrisGateRequired) {
    return {
      ok: false,
      code: "GATE_NOT_REQUIRED",
      message: "Aucun gate Morris requis pour cette proposition.",
      proposal,
    };
  }

  if (
    input.decisionKind === "GO_WITH_RESERVES" &&
    !(input.reservesText && input.reservesText.trim())
  ) {
    return {
      ok: false,
      code: "RESERVES_REQUIRED",
      message: "GO WITH RESERVES exige un texte de réserves explicite.",
      proposal,
    };
  }

  const scope = proposalScope(proposal);
  const issuedAt = input.nowIso();

  const authority = registerM3LocalMorrisAuthority({
    authorityResolver: input.authorityResolver,
    scope,
    issuedAt,
    forceEnable: input.forceM3Authority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
      proposal,
    };
  }

  const mapped = mapStatus(input.decisionKind);
  const decisionId = `dec:f2:${randomUUID()}`;
  const options = [
    { optionId: "opt:go", label: "GO" },
    { optionId: "opt:go-reserves", label: "GO WITH RESERVES" },
    { optionId: "opt:no-go", label: "NO-GO" },
    { optionId: "opt:amend", label: "AMEND" },
  ];

  const reservations =
    input.decisionKind === "GO_WITH_RESERVES"
      ? [
          {
            reservationId: `rsv:${randomUUID()}`,
            statement: input.reservesText!.trim(),
            blocking: false,
          },
        ]
      : undefined;

  const isGoAccepted =
    input.decisionKind === "GO" || input.decisionKind === "GO_WITH_RESERVES";
  const decisionBasis = isGoAccepted
    ? buildDecisionBasis({
        proposal,
        projectId: input.projectId,
        currentContext: input.currentContext,
      })
    : undefined;

  const result = await input.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.projectId,
    cycleInstanceId: decisionBasis?.cycleInstanceId,
    subject: `F2 gate for ${proposal.proposalId}`,
    options,
    selectedOptionId: mapped.selectedOptionId,
    actor: LOCAL_MORRIS_M3_ACTOR,
    authority: "morris",
    status: mapped.humanStatus,
    reversible: true,
    scope,
    reservations,
    rationale: `F2 ${input.decisionKind} on ${proposal.proposalId}`,
    authorityEvidenceId: authority.evidenceId,
    decisionBasis,
    linkToLivingProjectState: isGoAccepted,
    expectedLpsVersion: isGoAccepted
      ? input.currentContext.lpsVersion
      : undefined,
    correlationId: `f2-dec:${proposal.proposalId}`,
  });

  if (!result.ok) {
    return {
      ok: false,
      code: result.error.detailCode,
      message: result.error.message,
      proposal,
    };
  }

  const updated = updateProposalStatus(proposal.proposalId, mapped.proposalStatus);
  const decision: DecisionDto = {
    decisionId,
    proposalId: proposal.proposalId,
    kind: input.decisionKind,
    statusLabel: "DÉCISION PRISE",
    humanDecisionStatus: mapped.humanStatus,
    scope,
    reservesText:
      input.decisionKind === "GO_WITH_RESERVES"
        ? input.reservesText!.trim()
        : null,
    capturedAt: issuedAt,
    readyForNextGatedStep: isGoAccepted,
    executionPerformed: false,
  };

  return { ok: true, decision, proposal: updated! };
}
