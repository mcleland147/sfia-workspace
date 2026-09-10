/**
 * D-GF-HD-01 — approve pre-cycle candidate trajectory as-is.
 *
 * Outer Product UoW: RecordHumanDecision → durable readback → promotion guard
 * → PromoteDecidedTrajectory (steps unchanged). No START / Cycle / EC / Confirmation.
 * ZERO model calls. Client may supply only projectId + presentationDigest.
 */

import { randomUUID } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
import type { DecisionBasis, HumanDecision } from "@/lib/oa/decision";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { ProjectTrajectory } from "@/lib/oa/cycle/domain/types";
import {
  isTargetCycleCurrentlySelectable,
  resolveCandidateTrajectoryProvenance,
  buildCandidateTrajectoryApprovalPresentationDto,
  buildCandidateTrajectoryPresentationMaterial,
  CANDIDATE_TRAJECTORY_APPROVAL_KIND,
  CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
  CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL,
  candidateTrajectoryApprovalSubject,
  computeCandidateContentDigest,
  computeCandidateTrajectoryPresentationDigest,
  type CandidateTrajectoryApprovalPresentationDto,
  getCycleTypeById,
} from "@/lib/oa/cycle";
import { assertCandidateTrajectoryDecisionAuthorizesPromotion } from "./candidateTrajectoryPromotionGuard";

export type ApproveCandidateTrajectoryInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly presentationDigest: string;
  /** Test inject for local Pilote authority gate. */
  readonly forceLocalAuthority?: boolean;
  /**
   * Test-only: mutate durable HD in-memory between readback and guard
   * (simulates corrupted basis before promotion).
   */
  readonly __testMutateDecisionBeforeGuard?: (
    decision: HumanDecision,
  ) => HumanDecision;
};

export type ApproveCandidateTrajectoryResult =
  | {
      readonly ok: true;
      readonly decisionId: string;
      readonly trajectoryId: string;
      readonly trajectoryVersion: number;
      readonly status: "validated" | "active";
      readonly decidedByDecisionRef: string;
      readonly targetCycleTypeId: string;
      readonly catalogLabel: string | null;
      readonly lpsVersionAfter: number;
      readonly activeCycleInstanceId: null;
      readonly confirmationCount: 0;
      readonly cycleInstanceCount: 0;
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

class ApprovalAtomicFailure extends Error {
  constructor(
    readonly code: string,
    message: string,
  ) {
    super(message);
    this.name = "ApprovalAtomicFailure";
  }
}

async function resolveCandidateForProject(
  oa: RuntimeOaStack,
  projectId: string,
): Promise<
  | { ok: true; trajectory: ProjectTrajectory; lpsVersion: number }
  | { ok: false; code: string; message: string }
> {
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) {
    return {
      ok: false,
      code: "LPS_UNAVAILABLE",
      message: "Living Project State courant illisible.",
    };
  }
  const version = lps.livingProjectState.trajectoryVersion;
  if (typeof version !== "number" || version < 1) {
    return {
      ok: false,
      code: "CANDIDATE_MISSING",
      message: "Aucune trajectoire candidate liée au LPS.",
    };
  }
  const found = await oa.cycleServices.trajectories.findByProjectAndVersion(
    projectId,
    version,
  );
  if (!found) {
    return {
      ok: false,
      code: "CANDIDATE_MISSING",
      message: "Trajectoire candidate introuvable.",
    };
  }
  return { ok: true, trajectory: found, lpsVersion: lps.livingProjectState.version };
}

/**
 * Server-owned presentation for the Pilote approval CTA.
 */
export async function buildPreCycleCandidateApprovalPresentation(input: {
  oa: RuntimeOaStack;
  projectId: string;
}): Promise<
  | {
      ok: true;
      presentation: CandidateTrajectoryApprovalPresentationDto | null;
      alreadyDecided: {
        trajectoryId: string;
        version: number;
        status: string;
        decidedByDecisionRef: string | null;
        targetCycleTypeId: string | null;
        catalogLabel: string | null;
      } | null;
      activeCycleInstanceId: string | null;
    }
  | { ok: false; code: string; message: string }
> {
  const { oa, projectId } = input;
  const live = await readLiveProjectContext(oa, projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }

  const activeCycleInstanceId = live.context.activeCycleInstanceId;

  const current = await oa.cycleServices.trajectories.findCurrentByProjectId(
    projectId,
  );
  if (
    current &&
    (current.status === "validated" || current.status === "active") &&
    current.decidedByDecisionRef
  ) {
    let targetCycleTypeId: string | null = null;
    let catalogLabel: string | null = null;
    const hd = await oa.decisionServices.getHumanDecision.execute({
      decisionId: current.decidedByDecisionRef,
    });
    if (
      hd.ok &&
      hd.decision.decisionBasis?.sourceType === "candidate_trajectory"
    ) {
      targetCycleTypeId =
        hd.decision.decisionBasis.candidateTrajectoryContext?.targetCycleTypeId ??
        null;
      if (targetCycleTypeId) {
        catalogLabel = getCycleTypeById(targetCycleTypeId)?.label ?? null;
      }
    }
    return {
      ok: true,
      presentation: null,
      alreadyDecided: {
        trajectoryId: current.trajectoryId,
        version: current.version,
        status: current.status,
        decidedByDecisionRef: current.decidedByDecisionRef,
        targetCycleTypeId,
        catalogLabel,
      },
      activeCycleInstanceId,
    };
  }

  const resolved = await resolveCandidateForProject(oa, projectId);
  if (!resolved.ok) {
    return {
      ok: true,
      presentation: null,
      alreadyDecided: null,
      activeCycleInstanceId,
    };
  }
  const trajectory = resolved.trajectory;
  if (trajectory.status !== "candidate" || trajectory.projectId !== projectId) {
    return {
      ok: true,
      presentation: null,
      alreadyDecided: null,
      activeCycleInstanceId,
    };
  }
  if (current && current.trajectoryId === trajectory.trajectoryId) {
    // Effective current while still candidate should not happen; refuse presentation.
    return {
      ok: true,
      presentation: null,
      alreadyDecided: null,
      activeCycleInstanceId,
    };
  }

  const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
  const provenance = resolveCandidateTrajectoryProvenance({
    projectId,
    trajectoryId: trajectory.trajectoryId,
    epistemicItems: epistemic,
  });
  if (provenance.status !== "RESOLVED") {
    return {
      ok: true,
      presentation: null,
      alreadyDecided: null,
      activeCycleInstanceId,
    };
  }

  const material = buildCandidateTrajectoryPresentationMaterial({
    projectId,
    lpsId: live.context.lpsId,
    lpsVersion: live.context.lpsVersion,
    doctrineDigest: live.context.doctrineDigest,
    trajectory,
    provenanceObservationId: provenance.provenanceObservationId,
    recommendationId: provenance.recommendationId,
    semanticKey: provenance.semanticKey,
    targetCycleTypeId: provenance.targetCycleTypeId,
  });
  const presentationDigest =
    computeCandidateTrajectoryPresentationDigest(material);
  const selectable = isTargetCycleCurrentlySelectable(
    provenance.targetCycleTypeId,
  );

  return {
    ok: true,
    presentation: buildCandidateTrajectoryApprovalPresentationDto({
      material,
      presentationDigest,
      steps: trajectory.steps,
      targetCycleSelectable: selectable,
    }),
    alreadyDecided: null,
    activeCycleInstanceId,
  };
}

export async function approveCandidateTrajectory(
  input: ApproveCandidateTrajectoryInput,
): Promise<ApproveCandidateTrajectoryResult> {
  const { oa, projectId } = input;
  const clientDigest = input.presentationDigest?.trim();
  if (!clientDigest) {
    return {
      ok: false,
      code: "PRESENTATION_DIGEST_REQUIRED",
      message: "presentationDigest requis.",
    };
  }

  const project = await oa.projectServices.getProject.execute({ projectId });
  if (!project.ok) {
    return {
      ok: false,
      code: "PROJECT_NOT_FOUND",
      message: "Projet introuvable.",
    };
  }

  const live = await readLiveProjectContext(oa, projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }
  if (live.context.activeCycleInstanceId) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_PRESENT",
      message:
        "Un cycle actif est présent — l'approbation greenfield pre-cycle est refusée.",
    };
  }

  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  if (cycles.length > 0) {
    return {
      ok: false,
      code: "CYCLE_INSTANCE_PRESENT",
      message: "Des CycleInstance existent — chemin greenfield refusé.",
    };
  }

  const current = await oa.cycleServices.trajectories.findCurrentByProjectId(
    projectId,
  );
  if (
    current &&
    (current.status === "validated" || current.status === "active")
  ) {
    return {
      ok: false,
      code: "ALREADY_DECIDED",
      message:
        "Une trajectoire décidée/courante existe déjà — aucune nouvelle décision.",
    };
  }

  const resolved = await resolveCandidateForProject(oa, projectId);
  if (!resolved.ok) {
    return resolved;
  }
  const trajectory = resolved.trajectory;
  if (trajectory.status !== "candidate") {
    return {
      ok: false,
      code: "TRAJECTORY_NOT_CANDIDATE",
      message: `La trajectoire n'est pas candidate (${trajectory.status}).`,
    };
  }
  if (trajectory.projectId !== projectId) {
    return {
      ok: false,
      code: "TRAJECTORY_PROJECT_MISMATCH",
      message: "La trajectoire n'appartient pas à ce projet.",
    };
  }
  if (current && current.trajectoryId === trajectory.trajectoryId) {
    return {
      ok: false,
      code: "CANDIDATE_IS_CURRENT",
      message: "La candidate est déjà effective current — approbation refusée.",
    };
  }

  const lpsPointer = (
    await oa.projectServices.getCurrentLivingProjectState.execute({ projectId })
  );
  if (!lpsPointer.ok) {
    return {
      ok: false,
      code: "LPS_UNAVAILABLE",
      message: "LPS illisible.",
    };
  }
  if (
    lpsPointer.livingProjectState.trajectoryId !== undefined &&
    lpsPointer.livingProjectState.trajectoryId !== trajectory.trajectoryId
  ) {
    return {
      ok: false,
      code: "LPS_TRAJECTORY_MISMATCH",
      message: "Le LPS ne pointe pas la candidate attendue.",
    };
  }

  const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
  const provenance = resolveCandidateTrajectoryProvenance({
    projectId,
    trajectoryId: trajectory.trajectoryId,
    epistemicItems: epistemic,
  });
  if (provenance.status !== "RESOLVED") {
    return {
      ok: false,
      code: `PROVENANCE_${provenance.status}`,
      message: `Provenance candidate non résolue (${provenance.status}).`,
    };
  }

  // Recommendation source project match via relatedObjects / resolver identity.
  if (provenance.trajectoryId !== trajectory.trajectoryId) {
    return {
      ok: false,
      code: "PROVENANCE_TRAJECTORY_MISMATCH",
      message: "La provenance ne correspond pas à la trajectoire candidate.",
    };
  }
  if (!provenance.semanticKey?.trim() || !provenance.targetCycleTypeId?.trim()) {
    return {
      ok: false,
      code: "PROVENANCE_INCOMPLETE",
      message: "semanticKey / targetCycleTypeId manquants.",
    };
  }

  if (!isTargetCycleCurrentlySelectable(provenance.targetCycleTypeId)) {
    return {
      ok: false,
      code: "TARGET_CYCLE_NOT_SELECTABLE",
      message:
        "Le type de cycle proposé n'est plus sélectionnable — réévaluation requise.",
    };
  }

  const material = buildCandidateTrajectoryPresentationMaterial({
    projectId,
    lpsId: live.context.lpsId,
    lpsVersion: live.context.lpsVersion,
    doctrineDigest: live.context.doctrineDigest,
    trajectory,
    provenanceObservationId: provenance.provenanceObservationId,
    recommendationId: provenance.recommendationId,
    semanticKey: provenance.semanticKey,
    targetCycleTypeId: provenance.targetCycleTypeId,
  });
  const presentationDigest =
    computeCandidateTrajectoryPresentationDigest(material);
  if (presentationDigest !== clientDigest) {
    return {
      ok: false,
      code: "CANDIDATE_TRAJECTORY_DECISION_STALE",
      message:
        "La présentation a changé depuis l'affichage — aucune décision enregistrée.",
    };
  }

  const candidateContentDigest = material.candidate.candidateContentDigest;
  const recomputedContent = computeCandidateContentDigest({
    trajectoryId: trajectory.trajectoryId,
    version: trajectory.version,
    status: trajectory.status,
    steps: trajectory.steps,
  });
  if (recomputedContent !== candidateContentDigest) {
    return {
      ok: false,
      code: "CANDIDATE_CONTENT_DIGEST_MISMATCH",
      message: "Digest de contenu candidate incohérent.",
    };
  }

  const subject = candidateTrajectoryApprovalSubject(
    trajectory.trajectoryId,
    trajectory.version,
  );
  const existingAccepted =
    await oa.decisionServices.decisions.listAcceptedBySubject(
      projectId,
      subject,
    );
  if (existingAccepted.length > 0) {
    return {
      ok: false,
      code: "ALREADY_DECIDED",
      message:
        "Une décision acceptée existe déjà pour cette candidate/version.",
    };
  }

  const issuedAt = oa.clock.nowIso();
  const authority = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: subject,
    issuedAt,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const decisionBasis: DecisionBasis = {
    sourceType: "candidate_trajectory",
    sourceRef: trajectory.trajectoryId,
    sourceDigest: presentationDigest,
    projectId,
    proposalContext: {
      lpsId: live.context.lpsId,
      lpsVersion: live.context.lpsVersion,
      doctrineDigest: live.context.doctrineDigest,
      ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
    },
    candidateTrajectoryContext: {
      trajectoryId: trajectory.trajectoryId,
      candidateVersion: trajectory.version,
      provenanceObservationId: provenance.provenanceObservationId,
      recommendationId: provenance.recommendationId,
      semanticKey: provenance.semanticKey,
      targetCycleTypeId: provenance.targetCycleTypeId,
      candidateContentDigest,
      presentationDigest,
    },
    executionBasis: {
      objective: live.context.objective,
      expectedOutcome: "Trajectoire candidate validée par le Pilote (as-is).",
      stopConditions: [
        "AUCUN CYCLE",
        "AUCUN START",
        "AUCUN EXECUTION_CONTRACT",
      ],
      cycleTypeId: provenance.targetCycleTypeId,
      requestedOperation: CANDIDATE_TRAJECTORY_APPROVAL_KIND,
    },
  };

  const decisionId = `dec:gf-trj:${randomUUID()}`;
  const preDecisionSteps = structuredClone(trajectory.steps);
  const candidateVersion = trajectory.version;
  const trajectoryId = trajectory.trajectoryId;
  const targetCycleTypeId = provenance.targetCycleTypeId;
  const catalogLabel =
    getCycleTypeById(targetCycleTypeId)?.label ?? null;

  let atomic: {
    decisionId: string;
    promoted: ProjectTrajectory;
    lpsVersionAfter: number;
  };

  try {
    atomic = await oa.projectServices.store.runInTransaction(async () => {
      const recorded = await oa.decisionServices.recordHumanDecision.execute({
        decisionId,
        projectId,
        subject,
        options: [
          {
            optionId: CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
            label: CANDIDATE_TRAJECTORY_APPROVAL_OPTION_LABEL,
            recommended: false,
          },
        ],
        selectedOptionId: CANDIDATE_TRAJECTORY_APPROVAL_OPTION_ID,
        actor: LOCAL_PILOTE_ACTOR,
        authority: "morris",
        status: "accepted",
        reversible: true,
        scope: subject,
        rationale:
          "Le Pilote a validé explicitement la trajectoire candidate telle quelle.",
        authorityEvidenceId: authority.evidenceId,
        decisionBasis,
        linkToLivingProjectState: true,
        expectedLpsVersion: live.context.lpsVersion,
        supersedeExistingAccepted: false,
        linkEpistemicDecisionRef: false,
        correlationId: `gf-hd:${trajectoryId}:v${candidateVersion}`,
      });

      if (!recorded.ok) {
        throw new ApprovalAtomicFailure(
          recorded.error.detailCode,
          recorded.error.message,
        );
      }

      const readback = await oa.decisionServices.getHumanDecision.execute({
        decisionId,
      });
      if (!readback.ok) {
        throw new ApprovalAtomicFailure(
          "READBACK_FAILURE",
          "Relecture durable de la HumanDecision impossible.",
        );
      }

      // CR-HD-01 — fresh durable Epistemic read + provenance re-resolution
      // AFTER logical HD write / durable readback, BEFORE promotion.
      const freshEpistemic =
        await oa.cycleServices.epistemic.listByProject(projectId);
      const freshProvenance = resolveCandidateTrajectoryProvenance({
        projectId,
        trajectoryId,
        epistemicItems: freshEpistemic,
      });
      if (freshProvenance.status !== "RESOLVED") {
        throw new ApprovalAtomicFailure(
          `PROVENANCE_${freshProvenance.status}`,
          `Provenance candidate non résolue au recheck in-transaction (${freshProvenance.status}).`,
        );
      }
      if (
        freshProvenance.trajectoryId !== trajectoryId ||
        freshProvenance.provenanceObservationId !==
          provenance.provenanceObservationId ||
        freshProvenance.recommendationId !== provenance.recommendationId ||
        freshProvenance.semanticKey !== provenance.semanticKey ||
        freshProvenance.targetCycleTypeId !== provenance.targetCycleTypeId
      ) {
        throw new ApprovalAtomicFailure(
          "CANDIDATE_TRAJECTORY_DECISION_STALE",
          "Provenance durable dérivée depuis le snapshot présenté — aucune promotion.",
        );
      }

      let decisionForGuard = readback.decision;
      if (input.__testMutateDecisionBeforeGuard) {
        decisionForGuard = input.__testMutateDecisionBeforeGuard(
          structuredClone(readback.decision),
        );
      }

      const guard = assertCandidateTrajectoryDecisionAuthorizesPromotion({
        decision: decisionForGuard,
        projectId,
        trajectoryId,
        candidateVersion,
        presentationDigest,
        candidateContentDigest,
        provenanceObservationId: freshProvenance.provenanceObservationId,
        recommendationId: freshProvenance.recommendationId,
        semanticKey: freshProvenance.semanticKey,
        targetCycleTypeId: freshProvenance.targetCycleTypeId,
        expectedLpsId: live.context.lpsId,
        expectedLpsVersionAtDecision: live.context.lpsVersion,
      });
      if (!guard.ok) {
        throw new ApprovalAtomicFailure(guard.code, guard.message);
      }

      // Re-check selectability + candidate status inside the UoW.
      if (
        !isTargetCycleCurrentlySelectable(freshProvenance.targetCycleTypeId)
      ) {
        throw new ApprovalAtomicFailure(
          "TARGET_CYCLE_NOT_SELECTABLE",
          "Le type de cycle n'est plus sélectionnable au moment de la promotion.",
        );
      }
      const stillCandidate =
        await oa.cycleServices.trajectories.findByProjectAndVersion(
          projectId,
          candidateVersion,
        );
      if (!stillCandidate || stillCandidate.status !== "candidate") {
        throw new ApprovalAtomicFailure(
          "TRAJECTORY_NOT_CANDIDATE",
          "La trajectoire n'est plus candidate au moment de la promotion.",
        );
      }
      const stillContent = computeCandidateContentDigest({
        trajectoryId: stillCandidate.trajectoryId,
        version: stillCandidate.version,
        status: stillCandidate.status,
        steps: stillCandidate.steps,
      });
      if (stillContent !== candidateContentDigest) {
        throw new ApprovalAtomicFailure(
          "CANDIDATE_TRAJECTORY_DECISION_STALE",
          "Contenu candidate modifié avant promotion.",
        );
      }

      const lpsAfterDecision =
        recorded.livingProjectStateVersion ?? live.context.lpsVersion;

      const promoted = await oa.cycleServices.promoteDecidedTrajectory.execute({
        trajectoryId,
        projectId,
        expectedVersion: candidateVersion,
        status: "validated",
        decisionRef: decisionId,
        // As-is: omit steps — PromoteDecidedTrajectory keeps candidate steps.
        createdBy: LOCAL_PILOTE_ACTOR,
        correlationId: `gf-promote:${trajectoryId}:v${candidateVersion}`,
        expectedLpsVersion: lpsAfterDecision,
      });
      if (!promoted.ok) {
        throw new ApprovalAtomicFailure(
          promoted.error.detailCode,
          `Promotion refusée (${promoted.error.detailCode}).`,
        );
      }

      // CR-HD-02 — steps parity BEFORE outer UoW commit (not post-commit).
      const priorSteps = JSON.stringify(preDecisionSteps);
      const promotedSteps = JSON.stringify(promoted.trajectory.steps);
      if (promotedSteps !== priorSteps) {
        throw new ApprovalAtomicFailure(
          "STEPS_CHANGED",
          "Les steps post-promotion diffèrent de la candidate approuvée — rollback.",
        );
      }

      return {
        decisionId,
        promoted: promoted.trajectory,
        lpsVersionAfter:
          promoted.livingProjectStateVersion ?? lpsAfterDecision,
      };
    });
  } catch (err) {
    if (err instanceof ApprovalAtomicFailure) {
      return { ok: false, code: err.code, message: err.message };
    }
    return {
      ok: false,
      code: "PERSISTENCE_FAILURE",
      message:
        "Échec atomique décision+promotion — aucune décision orpheline n'a été commitée.",
    };
  }

  // Post-commit: format success only — no business failure path for
  // provenance / content / steps parity / promotion authorization.
  return {
    ok: true,
    decisionId: atomic.decisionId,
    trajectoryId: atomic.promoted.trajectoryId,
    trajectoryVersion: atomic.promoted.version,
    status: atomic.promoted.status as "validated" | "active",
    decidedByDecisionRef: atomic.decisionId,
    targetCycleTypeId,
    catalogLabel,
    lpsVersionAfter: atomic.lpsVersionAfter,
    activeCycleInstanceId: null,
    confirmationCount: 0,
    cycleInstanceCount: 0,
  };
}
