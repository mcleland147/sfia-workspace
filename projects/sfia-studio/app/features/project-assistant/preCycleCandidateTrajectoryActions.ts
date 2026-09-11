"use server";

/**
 * Greenfield pre-cycle candidate trajectory bridge — thin server actions.
 * Client may send projectId (+ presentationDigest for approval). ZERO model calls.
 * No Cycle / START / EC / Confirmation. HD only via approve path.
 */

import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  deriveLifecycleBlockersFromEpistemicItems,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  readPreCycleCandidateTrajectory,
  selectCurrentLifecycleRecommendations,
} from "@/lib/oa/cycle";
import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
import type { CandidateTrajectoryProvenanceStatus } from "@/lib/oa/cycle/application/lifecycleRecommendation/candidateTrajectoryProvenance";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";
import {
  prepareCycleFromValidatedTrajectory,
  readPreparedTrajectoryCycle,
  startPreparedTrajectoryCycle,
} from "@/lib/oa/cycle";

export async function projectAssistantPrepareCandidateTrajectoryAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  recommendationId?: string;
  semanticKey?: string;
  targetCycleTypeId?: string;
  catalogLabel?: string;
  trajectoryId?: string;
  trajectoryVersion?: number;
  stepId?: string;
  provenanceObservationId?: string;
  correlationId?: string;
  lpsVersionAfter?: number;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const oa = runtime.oa;
  const result = await prepareCandidateTrajectoryFromCurrentRecommendation({
    projectId: input.projectId,
    deps: {
      trajectories: oa.cycleServices.trajectories,
      createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
      updateEpistemicState: oa.cycleServices.updateEpistemicState,
      runInTransaction: (fn) => oa.projectServices.store.runInTransaction(fn),
      listEpistemicByProject: (projectId) =>
        oa.cycleServices.epistemic.listByProject(projectId),
      listCyclesByProject: (projectId) =>
        oa.cycleServices.cycles.listByProject(projectId),
      listDecisionsByProject: (projectId) =>
        oa.decisionServices.decisions.listByProject(projectId),
      listEvidenceByProject: (projectId) =>
        oa.evidenceReviewServices.repository.listByProject(projectId),
      getCurrentLps: (projectId) =>
        oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
      getProjectDoctrinePin: async (projectId) => {
        const project = await oa.projectServices.getProject.execute({
          projectId,
        });
        if (!project.ok) return null;
        const pin = project.project.doctrinePackageRef;
        return pin
          ? {
              doctrinePackageId: pin.doctrinePackageId,
              version: pin.version,
              digest: pin.digest,
            }
          : null;
      },
    },
  });
  if (!result.ok) {
    return {
      ok: false,
      code: result.code,
      message: result.reason,
      correlationId: result.correlationId,
    };
  }
  return {
    ok: true,
    recommendationId: result.recommendationId,
    semanticKey: result.semanticKey,
    targetCycleTypeId: result.targetCycleTypeId,
    catalogLabel: result.catalogLabel,
    trajectoryId: result.trajectoryId,
    trajectoryVersion: result.trajectoryVersion,
    stepId: result.stepId,
    provenanceObservationId: result.provenanceObservationId,
    correlationId: result.correlationId,
    lpsVersionAfter: result.lpsVersionAfter,
  };
}

/**
 * Durable pre-cycle projection: candidate trajectory + CURRENT NEXT_CYCLE flag.
 * CURRENT flag uses the same material basis as lifecycle read-side (incl. blockers).
 * Authoritative targetCycleTypeId only when provenanceStatus === RESOLVED.
 */
export async function projectAssistantReadPreCycleCandidateTrajectoryAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  candidate?: {
    trajectoryId: string;
    version: number;
    status: "candidate";
    projectId: string;
    steps: readonly {
      stepId: string;
      order: number;
      label: string;
      state: string;
    }[];
    catalogLabel: string | null;
    targetCycleTypeId: string | null;
    provenanceStatus: CandidateTrajectoryProvenanceStatus;
    provenanceObservationId: string | null;
    recommendationId: string | null;
    semanticKey: string | null;
    decidedByDecisionRef: null;
    isEffectiveCurrent: false;
  } | null;
  activeCycleInstanceId?: string | null;
  /** Server-derived via selectCurrentLifecycleRecommendations (canonical basis). */
  hasCurrentNextCycleRecommendation?: boolean;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const oa = runtime.oa;
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId: input.projectId,
  });
  const activeCycleInstanceId = lps.ok
    ? (lps.livingProjectState.activeCycleInstanceId ?? null)
    : null;

  const result = await readPreCycleCandidateTrajectory({
    projectId: input.projectId,
    trajectories: oa.cycleServices.trajectories,
    getCurrentLps: (projectId) =>
      oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
    listCyclesByProject: (projectId) =>
      oa.cycleServices.cycles.listByProject(projectId),
    listEpistemicByProject: (projectId) =>
      oa.cycleServices.epistemic.listByProject(projectId),
  });
  if (!result.ok) {
    return {
      ok: false,
      code: result.code,
      message: result.reason,
      activeCycleInstanceId,
      hasCurrentNextCycleRecommendation: false,
    };
  }

  let hasCurrentNextCycleRecommendation = false;
  try {
    const epistemicItems = await oa.cycleServices.epistemic.listByProject(
      input.projectId,
    );
    const cycles = await oa.cycleServices.cycles.listByProject(input.projectId);
    const decisions =
      await oa.decisionServices.decisions.listByProject(input.projectId);
    let evidence: Awaited<
      ReturnType<typeof oa.evidenceReviewServices.repository.listByProject>
    > = [];
    const failed = new Set<LifecycleRecommendationMaterialDimension>();
    try {
      evidence = await oa.evidenceReviewServices.repository.listByProject(
        input.projectId,
      );
    } catch {
      failed.add("evidence");
    }

    let trajectory = null;
    try {
      const traj = await oa.cycleServices.getCurrentTrajectory.execute({
        projectId: input.projectId,
      });
      trajectory = traj.ok ? traj.trajectory : null;
    } catch {
      failed.add("trajectory");
    }

    const project = await oa.projectServices.getProject.execute({
      projectId: input.projectId,
    });
    const doctrinePin = project.ok
      ? (project.project.doctrinePackageRef ??
        (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
      : lps.ok
        ? lps.livingProjectState.doctrinePackageRef
        : undefined;

    const blockersSnap =
      deriveLifecycleBlockersFromEpistemicItems(epistemicItems);
    const current = selectCurrentLifecycleRecommendations({
      items: epistemicItems,
      cycles,
      lpsActiveCycleInstanceId: activeCycleInstanceId,
      lpsVersion: lps.ok ? lps.livingProjectState.version : null,
      doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
      doctrinePackageVersion: doctrinePin?.version ?? null,
      doctrinePackageDigest: doctrinePin?.digest ?? null,
      trajectory,
      decisions,
      evidence,
      blockingReservationStatements: blockersSnap.statements,
      failedMaterialDimensions: failed,
    });
    hasCurrentNextCycleRecommendation = current.some(
      (r) =>
        r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
    );
  } catch {
    // Fail closed for the flag — do not invent CURRENT.
    hasCurrentNextCycleRecommendation = false;
  }

  return {
    ok: true,
    candidate: result.candidate,
    activeCycleInstanceId,
    hasCurrentNextCycleRecommendation,
  };
}

/**
 * Server-owned approval presentation (digest + selectability).
 * Client must not treat sealed fields as SoT beyond display + digest round-trip.
 */
export async function projectAssistantReadCandidateTrajectoryApprovalPresentationAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  presentation?: {
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
    approvalOptionLabel: string;
    presentationDigest: string;
    displayCandidateVersionHint: number;
  } | null;
  alreadyDecided?: {
    trajectoryId: string;
    version: number;
    status: string;
    decidedByDecisionRef: string | null;
    targetCycleTypeId: string | null;
    catalogLabel: string | null;
    completedMatchingCycle?: boolean;
    prepareBlockedReason?: "cycle_type_already_completed";
  } | null;
  activeCycleInstanceId?: string | null;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const built = await buildPreCycleCandidateApprovalPresentation({
    oa: runtime.oa,
    projectId: input.projectId,
  });
  if (!built.ok) {
    return { ok: false, code: built.code, message: built.message };
  }
  return {
    ok: true,
    presentation: built.presentation,
    alreadyDecided: built.alreadyDecided,
    activeCycleInstanceId: built.activeCycleInstanceId,
  };
}

/**
 * Unary Pilote approval: "Valider cette trajectoire".
 * Client input max: projectId + presentationDigest. All else server-resolved.
 */
export async function projectAssistantApprovePreCycleCandidateTrajectoryAction(input: {
  projectId: string;
  presentationDigest: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  decisionId?: string;
  trajectoryId?: string;
  trajectoryVersion?: number;
  status?: string;
  decidedByDecisionRef?: string;
  targetCycleTypeId?: string;
  catalogLabel?: string | null;
  lpsVersionAfter?: number;
  activeCycleInstanceId?: null;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const result = await approveCandidateTrajectory({
    oa: runtime.oa,
    projectId: input.projectId,
    presentationDigest: input.presentationDigest,
  });
  if (!result.ok) {
    return { ok: false, code: result.code, message: result.message };
  }
  return {
    ok: true,
    decisionId: result.decisionId,
    trajectoryId: result.trajectoryId,
    trajectoryVersion: result.trajectoryVersion,
    status: result.status,
    decidedByDecisionRef: result.decidedByDecisionRef,
    targetCycleTypeId: result.targetCycleTypeId,
    catalogLabel: result.catalogLabel,
    lpsVersionAfter: result.lpsVersionAfter,
    activeCycleInstanceId: null,
  };
}

/**
 * D-GF-START-01 — prepare CycleInstance from validated trajectory (non-active).
 * Client: projectId only.
 */
export async function prepareCycleFromValidatedTrajectoryAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  cycleInstanceId?: string;
  cycleTypeId?: string;
  catalogLabel?: string | null;
  profile?: string;
  status?: string;
  trajectoryId?: string;
  trajectoryVersion?: number;
  stepId?: string;
  ckcResolutionRef?: string;
  reused?: boolean;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const result = await prepareCycleFromValidatedTrajectory({
    oa: runtime.oa,
    projectId: input.projectId,
  });
  if (!result.ok) {
    return { ok: false, code: result.code, message: result.reason };
  }
  return {
    ok: true,
    cycleInstanceId: result.cycle.cycleInstanceId,
    cycleTypeId: result.cycle.cycleTypeId,
    catalogLabel: result.catalogLabel,
    profile: result.cycle.profile,
    status: result.cycle.status,
    trajectoryId: result.trajectoryId,
    trajectoryVersion: result.trajectoryVersion,
    stepId: result.stepId,
    ckcResolutionRef: result.cycle.ckcResolutionRef,
    reused: result.reused,
  };
}

/**
 * D-GF-START-01 — read prepared (non-active) trajectory-bound cycle.
 */
export async function readPreparedTrajectoryCycleAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  prepared?: {
    cycleInstanceId: string;
    cycleTypeId: string;
    catalogLabel: string | null;
    profile: string;
    status: string;
    trajectoryId: string;
    trajectoryVersion: number;
    trajectoryStepId: string;
    ckcResolutionRef: string | null;
    qualificationSignals: {
      structuralChange: boolean;
      securityImpact: boolean;
      architectureImpact: boolean;
      dataImpact: boolean;
      irreversible: boolean;
      lowRiskBounded: boolean;
    } | null;
    isActive: false;
  } | null;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const result = await readPreparedTrajectoryCycle({
    oa: runtime.oa,
    projectId: input.projectId,
  });
  if (!result.ok) {
    return { ok: false, code: result.code, message: result.reason };
  }
  return { ok: true, prepared: result.prepared };
}

/**
 * D-GF-START-01 — START prepared trajectory-bound cycle (N3 Pilote).
 * Client: projectId (+ optional cycleInstanceId).
 */
export async function startPreparedTrajectoryCycleAction(input: {
  projectId: string;
  cycleInstanceId?: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  cycleInstanceId?: string;
  catalogLabel?: string | null;
  trajectoryId?: string;
  trajectoryVersion?: number;
  stepId?: string;
  activeCycleInstanceId?: string;
  lpsVersionAfter?: number;
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "Runtime OA indisponible.",
    };
  }
  const result = await startPreparedTrajectoryCycle({
    oa: runtime.oa,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
  });
  if (!result.ok) {
    return { ok: false, code: result.code, message: result.reason };
  }
  return {
    ok: true,
    cycleInstanceId: result.cycle.cycleInstanceId,
    catalogLabel: result.catalogLabel,
    trajectoryId: result.trajectoryId,
    trajectoryVersion: result.trajectoryVersion,
    stepId: result.stepId,
    activeCycleInstanceId: result.activeCycleInstanceId,
    lpsVersionAfter: result.lpsVersionAfter,
  };
}
