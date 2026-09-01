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
    }
  | {
      event: "oa.project.list";
      ts: string;
      correlationId?: string;
      result: "ok";
      durationMs: number;
      count: number;
    }
  | {
      event: "oa.project.list_failed";
      ts: string;
      correlationId?: string;
      result: "error";
      detailCode?: string;
      durationMs: number;
    }
  /** MW1-S03 — accepted Memory B → Truth C materialization (no full B transcript). */
  | {
      event: "oa.memory.materialization.accepted";
      ts: string;
      correlationId?: string;
      projectId: string;
      materializationClass: 1 | 2 | 3 | 4;
      basisKind?: string;
      basisReferenceId?: string;
      sourceKind?: string;
      sourceSeq?: number;
      sourceContentHash?: string;
      targetKind?: string;
      resultingLpsVersion?: number;
      result: "ok";
      durationMs: number;
    }
  /** MW1-S03 — rejected / external-required materialization (fail-closed). */
  | {
      event: "oa.memory.materialization.rejected";
      ts: string;
      correlationId?: string;
      projectId: string;
      materializationClass?: 1 | 2 | 3 | 4;
      basisKind?: string;
      targetKind?: string;
      result: "rejected" | "external_required";
      detailCode?: string;
      durationMs: number;
    };

export interface ProjectAuditJournalPort {
  append(event: ProjectAuditEvent): void;
}
