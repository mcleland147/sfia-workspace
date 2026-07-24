/**
 * Minimal audit/observability sink for T-A1.
 * Compatible with future EventSink wiring; no distributed broker.
 */
export type ProjectAuditEvent =
  | {
      event: "oa.project.created";
      ts: string;
      correlationId?: string;
      projectId: string;
      lpsVersion?: number;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
      reusedFromIdempotencyKey?: boolean;
    }
  | {
      event: "oa.lps.version_appended";
      ts: string;
      correlationId?: string;
      projectId: string;
      lpsVersion: number;
      previousLpsVersionId?: string;
      result: "ok";
      durationMs: number;
    }
  | {
      event: "oa.lps.version_conflict";
      ts: string;
      correlationId?: string;
      projectId: string;
      expectedVersion?: number;
      currentVersion?: number;
      result: "conflict";
      detailCode: "LPS_VERSION_CONFLICT";
      durationMs: number;
    }
  | {
      event: "oa.project.load_failed";
      ts: string;
      correlationId?: string;
      projectId?: string;
      result: "error";
      detailCode?: string;
      durationMs: number;
    };

export interface ProjectAuditJournalPort {
  append(event: ProjectAuditEvent): void;
}
