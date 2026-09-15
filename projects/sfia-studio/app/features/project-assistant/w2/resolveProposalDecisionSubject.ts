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
import { pilotPendingReinstructionMessage } from "../presentationLabels";
import { listEffectivePendingDecisionSubjectMarkers } from "./activeProposalDecisionSubject";

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
 * - durable pending-subject marker exists (restart-before-binding)
 *   that is NOT shadowed by an authoritative Proposal DecisionRef closure.
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

  const pendingResult = await listEffectivePendingDecisionSubjectMarkers(
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
      const recoverable = pending.some((m) =>
        activeLocal.some((p) => p.proposalId === m.proposalId),
      );
      return {
        ok: false,
        code: "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
        message: pilotPendingReinstructionMessage({ recoverable }),
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
    // Closed by DecisionRef → stale marker must not force reinstruction.
    if (pendingResult.closedProposalIds.has(provided)) {
      return { ok: true };
    }
    const matchingPending = pending.find((m) => m.proposalId === provided);
    if (matchingPending || pending.length > 0) {
      return {
        ok: false,
        code: "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
        message: pilotPendingReinstructionMessage({ recoverable: false }),
      };
    }
    // No effective pending — resolveProposalDecisionSubject will fail NOT_FOUND
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
