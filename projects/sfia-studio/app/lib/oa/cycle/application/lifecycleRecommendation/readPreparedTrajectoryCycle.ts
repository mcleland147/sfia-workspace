/**
 * D-GF-START-01 — read model for a prepared (non-active) trajectory-bound cycle.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { getCycleTypeById } from "../../domain/cycleTypeCatalog";
import type { CycleInstance, CycleProfile } from "../../domain/types";
import { parseExplicitQualificationSignals } from "./qualificationSignals";

export type PreparedTrajectoryCycleReadModel = {
  cycleInstanceId: string;
  cycleTypeId: string;
  catalogLabel: string | null;
  profile: CycleProfile;
  status: CycleInstance["status"];
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
};

function isPreparedTrajectoryBound(cycle: CycleInstance): boolean {
  return Boolean(
    cycle.trajectoryId &&
      typeof cycle.trajectoryVersion === "number" &&
      cycle.trajectoryStepId &&
      (cycle.status === "proposed" || cycle.status === "acknowledged"),
  );
}

export async function readPreparedTrajectoryCycle(input: {
  oa: RuntimeOaStack;
  projectId: string;
}): Promise<
  | { ok: true; prepared: PreparedTrajectoryCycleReadModel | null }
  | { ok: false; code: string; reason: string }
> {
  const { oa, projectId } = input;
  if (!projectId?.startsWith("prj:")) {
    return { ok: false, code: "PROJECT_INVALID", reason: "project_id_invalid" };
  }

  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) {
    return { ok: false, code: "LPS_UNAVAILABLE", reason: "lps_unreadable" };
  }
  if (lps.livingProjectState.activeCycleInstanceId) {
    return { ok: true, prepared: null };
  }

  const trajectory =
    await oa.cycleServices.trajectories.findCurrentByProjectId(projectId);
  if (
    !trajectory ||
    (trajectory.status !== "validated" && trajectory.status !== "active")
  ) {
    return { ok: true, prepared: null };
  }

  let cycles: CycleInstance[];
  try {
    cycles = await oa.cycleServices.cycles.listByProject(projectId);
  } catch {
    return { ok: false, code: "CYCLES_UNAVAILABLE", reason: "cycle_reader_failed" };
  }

  const preparedCandidates = cycles.filter(
    (c) =>
      isPreparedTrajectoryBound(c) &&
      c.trajectoryId === trajectory.trajectoryId &&
      c.trajectoryVersion === trajectory.version,
  );
  if (preparedCandidates.length === 0) {
    return { ok: true, prepared: null };
  }
  if (preparedCandidates.length > 1) {
    return {
      ok: false,
      code: "PREPARED_CYCLE_AMBIGUOUS",
      reason: "multiple_prepared_trajectory_bound_cycles",
    };
  }
  const cycle = preparedCandidates[0]!;
  const entry = getCycleTypeById(cycle.cycleTypeId);
  const signals = parseExplicitQualificationSignals(cycle.qualificationSignals);

  return {
    ok: true,
    prepared: {
      cycleInstanceId: cycle.cycleInstanceId,
      cycleTypeId: cycle.cycleTypeId,
      catalogLabel: entry?.label ?? null,
      profile: cycle.profile,
      status: cycle.status,
      trajectoryId: cycle.trajectoryId!,
      trajectoryVersion: cycle.trajectoryVersion!,
      trajectoryStepId: cycle.trajectoryStepId!,
      ckcResolutionRef: cycle.ckcResolutionRef ?? null,
      qualificationSignals: signals,
      isActive: false,
    },
  };
}
