import { randomBytes } from "node:crypto";
import type {
  ActorReference,
  ClockPort,
  DoctrinePackageResolverPort,
  ProvenanceRecord,
} from "@/lib/oa/doctrine";
import { createProjectError } from "../domain/errors";
import {
  assertLpsSnapshotSize,
  validateCreateProjectFields,
} from "../domain/invariants";
import type {
  CreateProjectRequest,
  CreateProjectResult,
  LivingProjectState,
  Project,
} from "../domain/types";
import type { LivingProjectStateRepositoryPort } from "../ports/livingProjectStateRepositoryPort";
import type { ProjectAuditJournalPort } from "../ports/projectAuditJournalPort";
import type { ProjectRepositoryPort } from "../ports/projectRepositoryPort";
import type { ProjectPersistenceUnitOfWorkPort } from "../ports/projectPersistenceUnitOfWorkPort";

function newId(prefix: "lps" | "prv" | "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

function creationProvenance(input: {
  timestamp: string;
  correlationId: string;
  projectId: string;
  actor: ActorReference;
  doctrinePackageRef: string;
}): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: newId("prv"),
    actor: input.actor,
    source: "system",
    timestamp: input.timestamp,
    correlationId: input.correlationId,
    projectId: input.projectId,
    doctrinePackageRef: input.doctrinePackageRef,
  };
}

/**
 * Application use-case: create Project + LPS v1 atomically.
 * Resolves doctrine via T-A0 port only. Fail-closed. No v2.6 / method / OPS1.
 */
export class CreateProject {
  constructor(
    private readonly projects: ProjectRepositoryPort,
    private readonly lps: LivingProjectStateRepositoryPort,
    private readonly doctrine: DoctrinePackageResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: ProjectAuditJournalPort,
    private readonly store?: ProjectPersistenceUnitOfWorkPort,
  ) {}

  async execute(request: CreateProjectRequest): Promise<CreateProjectResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId =
      request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createProjectError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<
        Parameters<typeof createProjectError>[0]
      >,
    ): CreateProjectResult => {
      const durationMs = Date.now() - started;
      const error = createProjectError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        doctrinePackageId: request.doctrinePackagePin.doctrinePackageId,
        version: request.doctrinePackagePin.version,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.project.created",
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
      if (request.idempotencyKey) {
        const existingId = await this.projects.findIdempotency(
          request.idempotencyKey,
        );
        if (existingId) {
          const project = await this.projects.findById(existingId);
          const livingProjectState = project?.currentLpsVersionId
            ? await this.lps.findById(project.currentLpsVersionId)
            : null;
          if (project && livingProjectState) {
            const durationMs = Date.now() - started;
            this.audit.append({
              event: "oa.project.created",
              ts: timestamp,
              correlationId,
              projectId: project.projectId,
              lpsVersion: livingProjectState.version,
              result: "ok",
              durationMs,
              reusedFromIdempotencyKey: true,
            });
            return {
              ok: true,
              project,
              livingProjectState,
              reusedFromIdempotencyKey: true,
              durationMs,
            };
          }
        }
      }

      const fieldViolation = validateCreateProjectFields({
        projectId: request.projectId,
        title: request.title,
        objective: request.objective,
        lpsVersionId: request.lpsVersionId,
      });
      if (fieldViolation) {
        return fail(fieldViolation.detailCode, fieldViolation.reason);
      }

      if (!request.createdBy?.actorId) {
        return fail("PROJECT_INVALID", "created_by_required");
      }

      const sizeViolation = assertLpsSnapshotSize({
        objective: request.objective,
        context: request.context,
        scope: request.scope,
        constraints: [],
        stakeholders: [],
        epistemicItemIds: [],
        decisionIds: [],
      });
      if (sizeViolation) {
        return fail(sizeViolation.detailCode, sizeViolation.reason);
      }

      if (await this.projects.exists(request.projectId)) {
        return fail("PROJECT_ALREADY_EXISTS", "project_id_taken");
      }

      const resolved = await this.doctrine.resolve({
        pin: request.doctrinePackagePin,
        correlationId,
        resolverActor: {
          actorId: "sys:project-create",
          role: "system",
        },
      });

      if (resolved.outcome !== "resolved") {
        return fail(
          "DOCTRINE_UNRESOLVED",
          resolved.error.detailCode ?? resolved.outcome,
          {
            doctrinePackageId: request.doctrinePackagePin.doctrinePackageId,
            version: request.doctrinePackagePin.version,
          },
        );
      }

      const doctrinePackageRef = resolved.ref;
      const lpsVersionId = request.lpsVersionId ?? newId("lps");
      const provenance = creationProvenance({
        timestamp,
        correlationId,
        projectId: request.projectId,
        actor: request.createdBy,
        doctrinePackageRef: `${doctrinePackageRef.doctrinePackageId}@${doctrinePackageRef.version}`,
      });

      const livingProjectState: LivingProjectState = {
        schemaVersion: "0.1.0-oa",
        lpsVersionId,
        projectId: request.projectId,
        version: 1,
        status: "active",
        objective: request.objective.trim(),
        context: request.context,
        scope: request.scope,
        constraints: [],
        stakeholders: [],
        doctrinePackageRef: structuredClone(doctrinePackageRef),
        epistemicItemIds: [],
        decisionIds: [],
        createdAt: timestamp,
        createdBy: structuredClone(request.createdBy),
        correlationId,
        provenance,
        uiOwnership: false,
      };

      const project: Project = {
        schemaVersion: "0.1.0-oa",
        projectId: request.projectId,
        title: request.title.trim(),
        status: "active",
        currentLpsVersionId: lpsVersionId,
        doctrinePackageRef: structuredClone(doctrinePackageRef),
        createdAt: timestamp,
        updatedAt: timestamp,
        createdBy: structuredClone(request.createdBy),
        provenance,
      };

      const persist = async () => {
        // Re-check under txn/mutex — concurrent creates of the same id must conflict.
        if (await this.projects.exists(request.projectId)) {
          throw new Error("project_id_taken");
        }
        await this.projects.save(project);
        await this.lps.save(livingProjectState);
        if (request.idempotencyKey) {
          await this.projects.putIdempotency(
            request.idempotencyKey,
            project.projectId,
          );
        }
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (err instanceof Error && err.message === "project_id_taken") {
          return fail("PROJECT_ALREADY_EXISTS", "project_id_taken");
        }
        return fail("PERSISTENCE_FAILURE", "atomic_create_failed");
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.project.created",
        ts: timestamp,
        correlationId,
        projectId: project.projectId,
        lpsVersion: 1,
        result: "ok",
        durationMs,
      });

      // Return deep clones so callers cannot alias into the returned graph.
      return {
        ok: true,
        project: structuredClone(project),
        livingProjectState: structuredClone(livingProjectState),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
