import type { ClockPort } from "@/lib/oa/doctrine";
import { createCycleError } from "../domain/errors";
import type { GetTrajectoryResult } from "../domain/types";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type { TrajectoryRepositoryPort } from "../ports/trajectoryRepository";

export class GetTrajectoryVersion {
  constructor(
    private readonly trajectories: TrajectoryRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: CycleAuditPort,
  ) {}

  async execute(input: {
    projectId: string;
    version: number;
    correlationId?: string;
  }): Promise<GetTrajectoryResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const trajectory = await this.trajectories.findByProjectAndVersion(
      input.projectId,
      input.version,
    );
    if (!trajectory) {
      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.cycle.load_failed",
        ts: timestamp,
        correlationId: input.correlationId,
        projectId: input.projectId,
        result: "error",
        detailCode: "TRAJECTORY_NOT_FOUND",
        durationMs,
      });
      return {
        ok: false,
        error: createCycleError({
          detailCode: "TRAJECTORY_NOT_FOUND",
          timestamp,
          correlationId: input.correlationId,
          projectId: input.projectId,
          expectedVersion: input.version,
        }),
      };
    }
    return { ok: true, trajectory };
  }
}
