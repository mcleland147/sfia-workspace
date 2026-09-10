/**
 * D-GF-HD-01 — digests + presentation material for greenfield candidate approval.
 * Reuses computeDecisionBasisSourceDigest — no parallel digest engine.
 */

import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
import type { ProjectTrajectory, TrajectoryStep } from "../../domain/types";
import { getCycleTypeById } from "../../domain/cycleTypeCatalog";

export const CANDIDATE_TRAJECTORY_APPROVAL_KIND =
  "approve_candidate_trajectory_as_is" as const;

export const CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID =
  "opt:approve-candidate-trajectory-as-is" as const;

export const CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL =
  "Valider cette trajectoire" as const;

export function candidateTrajectoryApprovalSubject(
  trajectoryId: string,
  candidateVersion: number,
): string {
  return `project.trajectory.approval:${trajectoryId}:v${candidateVersion}`;
}

/** Material step projection — changes that alter what the Pilote approves. */
export function materialTrajectoryStepsProjection(
  steps: readonly TrajectoryStep[],
): readonly Record<string, unknown>[] {
  return steps.map((step) => ({
    stepId: step.stepId,
    order: step.order,
    label: step.label,
    state: step.state,
    ...(step.dependencies !== undefined
      ? { dependencies: [...step.dependencies] }
      : {}),
    ...(step.gate !== undefined ? { gate: step.gate } : {}),
    ...(step.exitCriteria !== undefined
      ? { exitCriteria: [...step.exitCriteria] }
      : {}),
    ...(step.risks !== undefined ? { risks: [...step.risks] } : {}),
    ...(step.reservations !== undefined
      ? { reservations: [...step.reservations] }
      : {}),
  }));
}

export function computeCandidateContentDigest(input: {
  trajectoryId: string;
  version: number;
  status: ProjectTrajectory["status"];
  steps: readonly TrajectoryStep[];
}): string {
  return computeDecisionBasisSourceDigest({
    trajectoryId: input.trajectoryId,
    version: input.version,
    status: input.status,
    steps: materialTrajectoryStepsProjection(input.steps),
  });
}

export type CandidateTrajectoryPresentationMaterial = {
  projectId: string;
  lps: {
    lpsId: string;
    lpsVersion: number;
    doctrineDigest?: string;
  };
  candidate: {
    trajectoryId: string;
    candidateVersion: number;
    status: "candidate";
    candidateContentDigest: string;
  };
  provenance: {
    provenanceObservationId: string;
    recommendationId: string;
    semanticKey: string;
    targetCycleTypeId: string;
  };
  approvalKind: typeof CANDIDATE_TRAJECTORY_APPROVAL_KIND;
};

export function buildCandidateTrajectoryPresentationMaterial(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest?: string;
  trajectory: ProjectTrajectory;
  provenanceObservationId: string;
  recommendationId: string;
  semanticKey: string;
  targetCycleTypeId: string;
}): CandidateTrajectoryPresentationMaterial {
  const candidateContentDigest = computeCandidateContentDigest({
    trajectoryId: input.trajectory.trajectoryId,
    version: input.trajectory.version,
    status: input.trajectory.status,
    steps: input.trajectory.steps,
  });
  return {
    projectId: input.projectId,
    lps: {
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      ...(input.doctrineDigest !== undefined
        ? { doctrineDigest: input.doctrineDigest }
        : {}),
    },
    candidate: {
      trajectoryId: input.trajectory.trajectoryId,
      candidateVersion: input.trajectory.version,
      status: "candidate",
      candidateContentDigest,
    },
    provenance: {
      provenanceObservationId: input.provenanceObservationId,
      recommendationId: input.recommendationId,
      semanticKey: input.semanticKey,
      targetCycleTypeId: input.targetCycleTypeId,
    },
    approvalKind: CANDIDATE_TRAJECTORY_APPROVAL_KIND,
  };
}

export function computeCandidateTrajectoryPresentationDigest(
  material: CandidateTrajectoryPresentationMaterial,
): string {
  return computeDecisionBasisSourceDigest(material);
}

/** Server-owned display DTO — client must not treat as SoT for sealed fields. */
export type CandidateTrajectoryApprovalPresentationDto = {
  projectId: string;
  trajectoryId: string;
  catalogLabel: string | null;
  targetCycleTypeId: string;
  steps: readonly {
    stepId: string;
    order: number;
    label: string;
    state: string;
  }[];
  provenanceStatus: "RESOLVED";
  recommendationId: string;
  semanticKey: string;
  provenanceObservationId: string;
  awaitingDecision: true;
  cycleStarted: false;
  targetCycleSelectable: boolean;
  approvalOptionLabel: typeof CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL;
  presentationDigest: string;
  /** Display-only version hint — never authoritative for approval. */
  displayCandidateVersionHint: number;
};

export function buildCandidateTrajectoryApprovalPresentationDto(input: {
  material: CandidateTrajectoryPresentationMaterial;
  presentationDigest: string;
  steps: readonly TrajectoryStep[];
  targetCycleSelectable: boolean;
}): CandidateTrajectoryApprovalPresentationDto {
  const entry = getCycleTypeById(input.material.provenance.targetCycleTypeId);
  return {
    projectId: input.material.projectId,
    trajectoryId: input.material.candidate.trajectoryId,
    catalogLabel: entry?.label ?? null,
    targetCycleTypeId: input.material.provenance.targetCycleTypeId,
    steps: input.steps.map((s) => ({
      stepId: s.stepId,
      order: s.order,
      label: s.label,
      state: s.state,
    })),
    provenanceStatus: "RESOLVED",
    recommendationId: input.material.provenance.recommendationId,
    semanticKey: input.material.provenance.semanticKey,
    provenanceObservationId: input.material.provenance.provenanceObservationId,
    awaitingDecision: true,
    cycleStarted: false,
    targetCycleSelectable: input.targetCycleSelectable,
    approvalOptionLabel: CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL,
    presentationDigest: input.presentationDigest,
    displayCandidateVersionHint: input.material.candidate.candidateVersion,
  };
}
