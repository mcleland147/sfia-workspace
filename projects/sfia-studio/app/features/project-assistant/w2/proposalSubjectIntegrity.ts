/**
 * Pure Proposal subject sealing + digest primitives.
 *
 * Isolated so Decision Subject reconstruction (pending markers) and subject
 * resolution can share identical digest semantics without an import cycle:
 *   pendingDecisionSubjectMarker ─┐
 *                                 ├→ proposalSubjectIntegrity (this module)
 *   resolveProposalDecisionSubject┘
 *
 * This module MUST remain free of:
 * - activeProposalDecisionSubject
 * - pendingDecisionSubjectMarker
 * - RuntimeOaStack / persistence / server actions
 */

import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
import type { ProposalDto } from "../f2/types";
import type { ExecutionIntentPayload } from "../f2/executionIntentSchema";

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
  /** Non-authoritative leaf filename candidate sealed for HD presentation. */
  readonly artifactFileName: string | null;
  /**
   * Server-derived CREATE/UPDATE when existence was resolved.
   * ASK = ambiguity sealed — Proposal not executable until clarified.
   * null = legacy / unresolved (treat as non-executable for docs_write materialization).
   */
  readonly artifactWriteMode: "CREATE" | "UPDATE" | "ASK" | null;
  readonly projectWorkspaceRoot: string | null;
  readonly cycleWorkspaceRoot: string | null;
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

export function resolveRequestedOperation(proposal: ProposalDto): string {
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

function sealArtifactWriteMode(
  raw: unknown,
): "CREATE" | "UPDATE" | "ASK" | null {
  if (raw === "CREATE" || raw === "UPDATE" || raw === "ASK") return raw;
  return null;
}

/**
 * Canonical sealed execution basis — every authoritative field is materialised
 * with deterministic null/empty defaults for digest stability.
 */
export function sealProposalExecutionBasis(
  proposal: ProposalDto,
): SealedProposalExecutionBasis {
  const ei: ExecutionIntentPayload | null | undefined = proposal.executionIntent;
  const targetPath = ei?.targetPath ?? null;
  const artifactFileName =
    ei?.artifactFileName?.trim() ||
    (targetPath ? targetPath.split("/").pop()?.trim() || null : null);
  const scopeIn = asStringArray(ei?.scopeIn);
  const cycleWorkspaceRoot = scopeIn[0]?.trim() || null;
  let projectWorkspaceRoot: string | null = null;
  if (cycleWorkspaceRoot && cycleWorkspaceRoot.includes("/")) {
    const parts = cycleWorkspaceRoot.split("/");
    if (parts.length >= 2 && parts[0] === "projects") {
      projectWorkspaceRoot = parts.slice(0, 2).join("/");
    } else if (parts.length >= 2) {
      projectWorkspaceRoot = parts.slice(0, -1).join("/");
    }
  }
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
    targetPath,
    artifactFileName,
    artifactWriteMode: sealArtifactWriteMode(ei?.artifactWriteMode),
    projectWorkspaceRoot,
    cycleWorkspaceRoot,
    scopeIn,
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
    artifactFileName: sealed.artifactFileName,
    artifactWriteMode: sealed.artifactWriteMode,
    projectWorkspaceRoot: sealed.projectWorkspaceRoot,
    cycleWorkspaceRoot: sealed.cycleWorkspaceRoot,
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
