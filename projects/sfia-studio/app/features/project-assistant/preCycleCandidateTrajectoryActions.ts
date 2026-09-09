"use server";

/**
 * Greenfield pre-cycle candidate trajectory bridge — thin server actions.
 * Client may send projectId only. ZERO model calls. No HD / Cycle / START.
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
