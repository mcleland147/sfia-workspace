import type { ClockPort } from "@/lib/oa/doctrine";
import { createProjectError } from "../domain/errors";
import type { ListProjectsResult } from "../domain/types";
import type { ProjectAuditJournalPort } from "../ports/projectAuditJournalPort";
import type { ProjectRepositoryPort } from "../ports/projectRepositoryPort";

/**
 * Thin product list over existing Project persistence (oa_projects / memory).
 * No schema change, no parallel store.
 */
export class ListProjects {
  constructor(
    private readonly projects: ProjectRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: ProjectAuditJournalPort,
  ) {}

  async execute(input: {
    correlationId?: string;
  } = {}): Promise<ListProjectsResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = input.correlationId;

    try {
      const projects = await this.projects.listAll();
      this.audit.append({
        event: "oa.project.list",
        ts: timestamp,
        correlationId,
        result: "ok",
        durationMs: Date.now() - started,
        count: projects.length,
      });
      return { ok: true, projects };
    } catch {
      const error = createProjectError({
        detailCode: "PERSISTENCE_FAILURE",
        timestamp,
        correlationId,
        internalCauseRef: "list_exception",
      });
      this.audit.append({
        event: "oa.project.list_failed",
        ts: timestamp,
        correlationId,
        result: "error",
        detailCode: "PERSISTENCE_FAILURE",
        durationMs: Date.now() - started,
      });
      return { ok: false, error };
    }
  }
}
