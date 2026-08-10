/**
 * Record Morris-gate HumanDecision via OA DecisionServices.
 * Authority evidence is registered server-side only.
 */

import { randomUUID } from "node:crypto";
import type { DecisionServices, MemoryAuthorityResolver } from "@/lib/oa/decision";
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

export const LOCAL_MORRIS_ACTOR = Object.freeze({
  actorId: "actor:local-morris-demo",
  role: "decision_maker" as const,
  displayName: "Local Morris demo",
  authorityLevel: "none" as const,
});

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
  const evidenceId = `evd:f2-morris:${proposal.proposalId}:${randomUUID()}`;
  const issuedAt = input.nowIso();

  try {
    input.authorityResolver.register({
      evidenceId,
      actorId: LOCAL_MORRIS_ACTOR.actorId,
      level: "N3",
      scope,
      issuedAt,
      source: LOCAL_MORRIS_EVIDENCE_SOURCE,
      canActAsMorris: true,
    });
  } catch (error) {
    return {
      ok: false,
      code: "AUTHORITY_REGISTER_FAILED",
      message:
        error instanceof Error
          ? error.message
          : "Échec enregistrement evidence Morris locale.",
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

  const result = await input.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.projectId,
    subject: `F2 gate for ${proposal.proposalId}`,
    options,
    selectedOptionId: mapped.selectedOptionId,
    actor: LOCAL_MORRIS_ACTOR,
    authority: "morris",
    status: mapped.humanStatus,
    reversible: true,
    scope,
    reservations,
    rationale: `F2 ${input.decisionKind} on ${proposal.proposalId}`,
    authorityEvidenceId: evidenceId,
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
    readyForNextGatedStep:
      input.decisionKind === "GO" || input.decisionKind === "GO_WITH_RESERVES",
    executionPerformed: false,
  };

  return { ok: true, decision, proposal: updated! };
}
