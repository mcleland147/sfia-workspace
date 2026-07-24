/**
 * Minimal audit/observability sink for T-A2.
 */
export type CycleAuditEvent =
  | {
      event: "oa.cycle.qualified";
      ts: string;
      correlationId?: string;
      recommendedProfile: string;
      result: "ok";
      durationMs?: number;
    }
  | {
      event: "oa.cycle.created";
      ts: string;
      correlationId?: string;
      projectId: string;
      cycleInstanceId: string;
      profile: string;
      status: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.trajectory.created";
      ts: string;
      correlationId?: string;
      projectId: string;
      trajectoryId: string;
      version: number;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.trajectory.version_proposed";
      ts: string;
      correlationId?: string;
      projectId: string;
      trajectoryId: string;
      version: number;
      previousVersion?: number;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.trajectory.version_conflict";
      ts: string;
      correlationId?: string;
      projectId: string;
      trajectoryId: string;
      expectedVersion?: number;
      currentVersion?: number;
      result: "conflict";
      detailCode: "TRAJECTORY_VERSION_CONFLICT";
      durationMs: number;
    }
  | {
      event: "oa.epistemic.updated";
      ts: string;
      correlationId?: string;
      projectId: string;
      itemCount: number;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.ckc.resolved";
      ts: string;
      correlationId?: string;
      cycleTypeId: string;
      level: string;
      status: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.cycle.load_failed";
      ts: string;
      correlationId?: string;
      projectId?: string;
      result: "error";
      detailCode?: string;
      durationMs: number;
    };

export interface CycleAuditPort {
  append(event: CycleAuditEvent): void;
}
