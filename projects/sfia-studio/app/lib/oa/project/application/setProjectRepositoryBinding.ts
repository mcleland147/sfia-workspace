/**
 * SetProjectRepositoryBinding — persist explicit Product target repository
 * on Project (CR-GCEC-03). No network. Ambient Studio repo is NEVER implied.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import { createProjectError } from "../domain/errors";
import { validateRepositoryBinding } from "../domain/invariants";
import type {
  ActorReference,
  Project,
  ProjectRepositoryBinding,
  ProjectStructuredError,
} from "../domain/types";
import type { ProjectAuditJournalPort } from "../ports/projectAuditJournalPort";
import type { ProjectRepositoryPort } from "../ports/projectRepositoryPort";

export type SetProjectRepositoryBindingRequest = {
  projectId: string;
  binding: ProjectRepositoryBinding;
  actor: ActorReference;
  correlationId?: string;
};

export type SetProjectRepositoryBindingResult =
  | { ok: true; project: Project; durationMs: number }
  | { ok: false; error: ProjectStructuredError; durationMs: number };

export class SetProjectRepositoryBinding {
  constructor(
    private readonly projects: ProjectRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: ProjectAuditJournalPort,
  ) {}

  async execute(
    request: SetProjectRepositoryBindingRequest,
  ): Promise<SetProjectRepositoryBindingResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId =
      request.correlationId ?? `cor:set-repo-binding:${request.projectId}`;

    const fail = (
      detailCode: Parameters<typeof createProjectError>[0]["detailCode"],
      reason?: string,
    ): SetProjectRepositoryBindingResult => {
      const durationMs = Date.now() - started;
      const error = createProjectError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        internalCauseRef: reason,
      });
      this.audit.append({
        event: "oa.project.repository_binding_set",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      const violation = validateRepositoryBinding(request.binding);
      if (violation) {
        return fail(violation.detailCode, violation.reason);
      }

      const existing = await this.projects.findById(request.projectId);
      if (!existing) {
        return fail("PROJECT_NOT_FOUND", "project_missing");
      }

      const updated: Project = {
        ...existing,
        repositoryBinding: {
          provider: "github",
          identity: request.binding.identity.trim(),
          remoteUrl: request.binding.remoteUrl.trim(),
          defaultBranch: request.binding.defaultBranch.trim(),
          ...(request.binding.baseSha
            ? { baseSha: request.binding.baseSha.trim() }
            : {}),
          ...(request.binding.pathRoot
            ? { pathRoot: request.binding.pathRoot.trim().replace(/\/+$/, "") }
            : {}),
        },
        updatedAt: timestamp,
      };

      await this.projects.save(updated);

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.project.repository_binding_set",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        result: "ok",
        durationMs,
        actorId: request.actor.actorId,
      });

      return { ok: true, project: updated, durationMs };
    } catch (err) {
      const message = err instanceof Error ? err.message : "unknown";
      return fail("PERSISTENCE_FAILURE", message);
    }
  }
}
