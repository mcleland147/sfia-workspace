import type { ClockPort } from "@/lib/oa/doctrine";
import { createProjectError } from "../domain/errors";
import type { GetProjectResult } from "../domain/types";
import type { ProjectAuditJournalPort } from "../ports/projectAuditJournalPort";
import type { ProjectRepositoryPort } from "../ports/projectRepositoryPort";
import { isOaIdentifier } from "../domain/invariants";

export class GetProject {
  constructor(
    private readonly projects: ProjectRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: ProjectAuditJournalPort,
  ) {}

  async execute(input: {
    projectId: string;
    correlationId?: string;
  }): Promise<GetProjectResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = input.correlationId;

    if (!isOaIdentifier(input.projectId) || !input.projectId.startsWith("prj:")) {
      const error = createProjectError({
        detailCode: "PROJECT_INVALID",
        timestamp,
        correlationId,
        projectId: input.projectId,
        internalCauseRef: "project_id_invalid",
      });
      this.audit.append({
        event: "oa.project.load_failed",
        ts: timestamp,
        correlationId,
        projectId: input.projectId,
        result: "error",
        detailCode: "PROJECT_INVALID",
        durationMs: Date.now() - started,
      });
      return { ok: false, error };
    }

    try {
      const project = await this.projects.findById(input.projectId);
      if (!project) {
        const error = createProjectError({
          detailCode: "PROJECT_NOT_FOUND",
          timestamp,
          correlationId,
          projectId: input.projectId,
          internalCauseRef: "missing",
        });
        this.audit.append({
          event: "oa.project.load_failed",
          ts: timestamp,
          correlationId,
          projectId: input.projectId,
          result: "error",
          detailCode: "PROJECT_NOT_FOUND",
          durationMs: Date.now() - started,
        });
        return { ok: false, error };
      }
      return { ok: true, project };
    } catch {
      const error = createProjectError({
        detailCode: "PERSISTENCE_FAILURE",
        timestamp,
        correlationId,
        projectId: input.projectId,
        internalCauseRef: "load_exception",
      });
      this.audit.append({
        event: "oa.project.load_failed",
        ts: timestamp,
        correlationId,
        projectId: input.projectId,
        result: "error",
        detailCode: "PERSISTENCE_FAILURE",
        durationMs: Date.now() - started,
      });
      return { ok: false, error };
    }
  }
}
