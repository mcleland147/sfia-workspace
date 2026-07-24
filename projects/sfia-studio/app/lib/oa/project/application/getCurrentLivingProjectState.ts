import type { ClockPort } from "@/lib/oa/doctrine";
import { createProjectError } from "../domain/errors";
import { isOaIdentifier } from "../domain/invariants";
import type { GetLpsResult } from "../domain/types";
import type { LivingProjectStateRepositoryPort } from "../ports/livingProjectStateRepositoryPort";
import type { ProjectAuditJournalPort } from "../ports/projectAuditJournalPort";
import type { ProjectRepositoryPort } from "../ports/projectRepositoryPort";

export class GetCurrentLivingProjectState {
  constructor(
    private readonly projects: ProjectRepositoryPort,
    private readonly lps: LivingProjectStateRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: ProjectAuditJournalPort,
  ) {}

  async execute(input: {
    projectId: string;
    correlationId?: string;
  }): Promise<GetLpsResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = input.correlationId;

    if (!isOaIdentifier(input.projectId) || !input.projectId.startsWith("prj:")) {
      return {
        ok: false,
        error: createProjectError({
          detailCode: "PROJECT_INVALID",
          timestamp,
          correlationId,
          projectId: input.projectId,
          internalCauseRef: "project_id_invalid",
        }),
      };
    }

    try {
      const project = await this.projects.findById(input.projectId);
      if (!project) {
        this.audit.append({
          event: "oa.project.load_failed",
          ts: timestamp,
          correlationId,
          projectId: input.projectId,
          result: "error",
          detailCode: "PROJECT_NOT_FOUND",
          durationMs: Date.now() - started,
        });
        return {
          ok: false,
          error: createProjectError({
            detailCode: "PROJECT_NOT_FOUND",
            timestamp,
            correlationId,
            projectId: input.projectId,
            internalCauseRef: "missing_project",
          }),
        };
      }

      const livingProjectState = await this.lps.findCurrentByProjectId(
        input.projectId,
      );
      if (!livingProjectState) {
        this.audit.append({
          event: "oa.project.load_failed",
          ts: timestamp,
          correlationId,
          projectId: input.projectId,
          result: "error",
          detailCode: "LPS_NOT_FOUND",
          durationMs: Date.now() - started,
        });
        return {
          ok: false,
          error: createProjectError({
            detailCode: "LPS_NOT_FOUND",
            timestamp,
            correlationId,
            projectId: input.projectId,
            internalCauseRef: "missing_current_lps",
          }),
        };
      }

      return { ok: true, livingProjectState };
    } catch {
      this.audit.append({
        event: "oa.project.load_failed",
        ts: timestamp,
        correlationId,
        projectId: input.projectId,
        result: "error",
        detailCode: "PERSISTENCE_FAILURE",
        durationMs: Date.now() - started,
      });
      return {
        ok: false,
        error: createProjectError({
          detailCode: "PERSISTENCE_FAILURE",
          timestamp,
          correlationId,
          projectId: input.projectId,
          internalCauseRef: "load_exception",
        }),
      };
    }
  }
}
