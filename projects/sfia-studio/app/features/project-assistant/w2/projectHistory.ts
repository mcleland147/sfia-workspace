/**
 * W2 Track B — minimal durable read model.
 *
 * MUST-MINIMAL only: the anchors a Pilote needs to understand the current
 * state and the next authority boundary. Composed exclusively from existing
 * OA read use cases — no new persistence, no event sourcing, no conversation
 * transcript, no second truth.
 *
 * Anything not durable is reported as absent rather than reconstructed.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";

/** Bounded lookback so the read model can never become a history platform. */
export const W2_HISTORY_MAX_TRAJECTORY_VERSIONS = 5;
export const W2_HISTORY_MAX_DECISIONS = 5;
export const W2_HISTORY_MAX_CONTRACTS = 5;

export type W2TrajectoryAnchor = {
  readonly trajectoryId: string;
  readonly version: number;
  readonly status: string;
  readonly isEffectiveCurrent: boolean;
  readonly decidedByDecisionRef: string | null;
  readonly decidedOptionRef: string | null;
  readonly stepCount: number;
};

export type W2DecisionAnchor = {
  readonly decisionId: string;
  readonly subject: string;
  readonly status: string;
  readonly authority: string;
  readonly actorRole: string;
  readonly selectedOptionRef: string;
  readonly effectiveAt: string;
  readonly basisSourceType: string | null;
  readonly basisTrajectoryRef: string | null;
  readonly reservations: readonly string[];
};

export type W2ContractAnchor = {
  readonly executionContractId: string;
  readonly status: string;
  readonly version: number;
  readonly action: string;
  readonly target: string;
  readonly semanticFingerprint: string | null;
  readonly decisionRefs: readonly string[];
};

export type W2ProjectHistoryReadModel = {
  readonly projectId: string;
  readonly projectTitle: string;
  readonly lps: { readonly lpsId: string; readonly version: number };
  readonly cycle: {
    readonly activeCycleInstanceId: string | null;
    readonly cycleTypeId: string | null;
    readonly profile: string | null;
    readonly status: string | null;
  };
  readonly trajectory: {
    readonly effectiveCurrent: W2TrajectoryAnchor | null;
    readonly proposedNotYetDecided: W2TrajectoryAnchor | null;
    readonly versions: readonly W2TrajectoryAnchor[];
  };
  readonly decisions: readonly W2DecisionAnchor[];
  readonly contracts: readonly W2ContractAnchor[];
  /** Explicit honesty about what this read model does NOT contain. */
  readonly absent: readonly string[];
};

export type ReadW2ProjectHistoryResult =
  | { readonly ok: true; readonly history: W2ProjectHistoryReadModel }
  | { readonly ok: false; readonly code: string; readonly message: string };

const ABSENT_BY_DESIGN: readonly string[] = Object.freeze([
  "Conversation (process-local, non rejouée)",
  "Proposition F2 process-local",
  "Confirmation demandée (process-local)",
  "Raisonnement interne non matérialisé",
]);

export async function readW2ProjectHistory(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<ReadW2ProjectHistoryResult> {
  const { oa, projectId } = input;
  const live = await readLiveProjectContext(oa, projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }

  const activeCycleInstanceId = live.context.activeCycleInstanceId;
  let cycleTypeId: string | null = null;
  let cycleProfile: string | null = null;
  let cycleStatus: string | null = null;
  if (activeCycleInstanceId) {
    const cycle = await oa.cycleServices.getCycle.execute({
      cycleInstanceId: activeCycleInstanceId,
    });
    if (cycle.ok) {
      cycleTypeId = cycle.cycle.cycleTypeId;
      cycleProfile = cycle.cycle.profile;
      cycleStatus = cycle.cycle.status;
    }
  }

  const current = await oa.cycleServices.getCurrentTrajectory.execute({
    projectId,
  });
  const effectiveCurrentVersion = current.ok ? current.trajectory.version : 0;

  // Highest known version may exceed the current pointer when a candidate is
  // proposed but not decided. Probe upward, bounded.
  const versions: W2TrajectoryAnchor[] = [];
  let proposedNotYetDecided: W2TrajectoryAnchor | null = null;
  let probe = effectiveCurrentVersion + 1;
  let highestVersion = effectiveCurrentVersion;
  while (probe <= effectiveCurrentVersion + W2_HISTORY_MAX_TRAJECTORY_VERSIONS) {
    const next = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId,
      version: probe,
    });
    if (!next.ok) break;
    highestVersion = probe;
    probe += 1;
  }

  const lowest = Math.max(
    1,
    highestVersion - W2_HISTORY_MAX_TRAJECTORY_VERSIONS + 1,
  );
  for (let version = highestVersion; version >= lowest; version -= 1) {
    const found = await oa.cycleServices.getTrajectoryVersion.execute({
      projectId,
      version,
    });
    if (!found.ok) continue;
    const anchor: W2TrajectoryAnchor = {
      trajectoryId: found.trajectory.trajectoryId,
      version: found.trajectory.version,
      status: found.trajectory.status,
      isEffectiveCurrent: found.trajectory.version === effectiveCurrentVersion,
      decidedByDecisionRef: found.trajectory.decidedByDecisionRef ?? null,
      decidedOptionRef: found.trajectory.decidedOptionRef ?? null,
      stepCount: found.trajectory.steps.length,
    };
    versions.push(anchor);
    if (!proposedNotYetDecided && anchor.status === "candidate") {
      proposedNotYetDecided = anchor;
    }
  }

  const decisionsResult =
    await oa.decisionServices.listDecisionHistory.execute({ projectId });
  const decisions: W2DecisionAnchor[] = decisionsResult.ok
    ? decisionsResult.decisions
        .slice(-W2_HISTORY_MAX_DECISIONS)
        .reverse()
        .map((decision) => ({
          decisionId: decision.decisionId,
          subject: decision.subject,
          status: decision.status,
          authority: decision.authority,
          actorRole: decision.actor.displayName ?? decision.actor.role,
          selectedOptionRef: decision.selectedOptionId,
          effectiveAt: decision.effectiveAt,
          basisSourceType: decision.decisionBasis?.sourceType ?? null,
          basisTrajectoryRef: decision.decisionBasis?.trajectoryContext
            ? `${decision.decisionBasis.trajectoryContext.trajectoryId}@v${decision.decisionBasis.trajectoryContext.candidateVersion}`
            : null,
          reservations: (decision.reservations ?? []).map((r) => r.statement),
        }))
    : [];

  const contractsResult =
    await oa.executionContractServices.listExecutionContractHistory.execute({
      projectId,
    });
  const contracts: W2ContractAnchor[] = contractsResult.ok
    ? contractsResult.contracts
        .slice(-W2_HISTORY_MAX_CONTRACTS)
        .reverse()
        .map((contract) => ({
          executionContractId: contract.executionContractId,
          status: contract.status,
          version: contract.version,
          action: contract.action,
          target: contract.target,
          semanticFingerprint: contract.semanticFingerprint ?? null,
          decisionRefs: [...(contract.decisionRefs ?? [])],
        }))
    : [];

  return {
    ok: true,
    history: {
      projectId,
      projectTitle: live.context.projectTitle,
      lps: { lpsId: live.context.lpsId, version: live.context.lpsVersion },
      cycle: {
        activeCycleInstanceId,
        cycleTypeId,
        profile: cycleProfile,
        status: cycleStatus,
      },
      trajectory: {
        effectiveCurrent:
          versions.find((v) => v.isEffectiveCurrent) ?? null,
        proposedNotYetDecided,
        versions,
      },
      decisions,
      contracts,
      absent: ABSENT_BY_DESIGN,
    },
  };
}
