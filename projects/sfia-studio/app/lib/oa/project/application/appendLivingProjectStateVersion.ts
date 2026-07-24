import { randomBytes } from "node:crypto";
import type {
  ActorReference,
  ClockPort,
  ProvenanceRecord,
} from "@/lib/oa/doctrine";
import { createProjectError } from "../domain/errors";
import {
  assertLpsSnapshotSize,
  doctrinePinEqualsRef,
  validateAppendFields,
} from "../domain/invariants";
import type {
  AppendLivingProjectStateRequest,
  AppendLpsResult,
  LivingProjectState,
  Project,
} from "../domain/types";
import type { LivingProjectStateRepositoryPort } from "../ports/livingProjectStateRepositoryPort";
import type { ProjectAuditJournalPort } from "../ports/projectAuditJournalPort";
import type { ProjectRepositoryPort } from "../ports/projectRepositoryPort";
import type { MemoryProjectStore } from "../infrastructure/memoryProjectStore";

function newId(prefix: "lps" | "prv" | "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

function appendProvenance(input: {
  timestamp: string;
  correlationId: string;
  projectId: string;
  actor: ActorReference;
  doctrinePackageRef: string;
  supersedes?: string;
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
    supersedes: input.supersedes,
  };
}

/**
 * Application use-case: append a new LPS version with optimistic concurrency.
 * Doctrine pin must match Project.doctrinePackageRef (id+version+digest); no re-resolve.
 */
export class AppendLivingProjectStateVersion {
  constructor(
    private readonly projects: ProjectRepositoryPort,
    private readonly lps: LivingProjectStateRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: ProjectAuditJournalPort,
    private readonly store?: MemoryProjectStore,
  ) {}

  async execute(
    request: AppendLivingProjectStateRequest,
  ): Promise<AppendLpsResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createProjectError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createProjectError>[0]>,
    ): AppendLpsResult => {
      const durationMs = Date.now() - started;
      const error = createProjectError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        expectedVersion: request.expectedVersion,
        internalCauseRef,
        ...extra,
      });
      if (detailCode === "LPS_VERSION_CONFLICT") {
        this.audit.append({
          event: "oa.lps.version_conflict",
          ts: timestamp,
          correlationId,
          projectId: request.projectId,
          expectedVersion: request.expectedVersion,
          currentVersion: extra?.currentVersion,
          result: "conflict",
          detailCode: "LPS_VERSION_CONFLICT",
          durationMs,
        });
      } else {
        this.audit.append({
          event: "oa.project.load_failed",
          ts: timestamp,
          correlationId,
          projectId: request.projectId,
          result: "error",
          detailCode,
          durationMs,
        });
      }
      return { ok: false, error, durationMs };
    };

    try {
      const fieldViolation = validateAppendFields({
        projectId: request.projectId,
        expectedVersion: request.expectedVersion,
        objective: request.objective,
        lpsVersionId: request.lpsVersionId,
      });
      if (fieldViolation) {
        return fail(fieldViolation.detailCode, fieldViolation.reason);
      }

      if (!request.createdBy?.actorId) {
        return fail("LPS_INVALID", "created_by_required");
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

      const project = await this.projects.findById(request.projectId);
      if (!project) {
        return fail("PROJECT_NOT_FOUND", "missing_project");
      }

      if (!project.doctrinePackageRef) {
        return fail("DOCTRINE_UNRESOLVED", "project_missing_doctrine_ref");
      }

      if (request.doctrinePackagePin) {
        if (
          !doctrinePinEqualsRef(
            request.doctrinePackagePin,
            project.doctrinePackageRef,
          )
        ) {
          return fail("DOCTRINE_UNRESOLVED", "append_pin_mismatch", {
            doctrinePackageId: request.doctrinePackagePin.doctrinePackageId,
            version: request.doctrinePackagePin.version,
          });
        }
      }

      const current = await this.lps.findCurrentByProjectId(request.projectId);
      if (!current) {
        return fail("LPS_NOT_FOUND", "missing_current_lps");
      }

      if (request.expectedVersion !== current.version) {
        return fail("LPS_VERSION_CONFLICT", "expected_version_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          lpsVersionId: current.lpsVersionId,
        });
      }

      // Non-monotonic refused: next must be current+1 (enforced by construction).
      const nextVersion = current.version + 1;
      if (nextVersion !== current.version + 1 || nextVersion <= current.version) {
        return fail("LPS_INVALID", "non_monotonic_version");
      }

      const lpsVersionId = request.lpsVersionId ?? newId("lps");
      if (await this.lps.findById(lpsVersionId)) {
        return fail("LPS_INVALID", "lps_version_id_taken");
      }

      const provenance = appendProvenance({
        timestamp,
        correlationId,
        projectId: request.projectId,
        actor: request.createdBy,
        doctrinePackageRef: `${project.doctrinePackageRef.doctrinePackageId}@${project.doctrinePackageRef.version}`,
        supersedes: current.provenance?.provenanceRecordId,
      });

      const livingProjectState: LivingProjectState = {
        schemaVersion: "0.1.0-oa",
        lpsVersionId,
        projectId: request.projectId,
        version: nextVersion,
        supersedesLpsVersionId: current.lpsVersionId,
        status: "active",
        objective: request.objective.trim(),
        context: request.context,
        scope: request.scope,
        constraints: [],
        stakeholders: [],
        doctrinePackageRef: project.doctrinePackageRef,
        epistemicItemIds: [],
        decisionIds: [],
        createdAt: timestamp,
        createdBy: request.createdBy,
        correlationId,
        provenance,
        uiOwnership: false,
      };

      const updatedProject: Project = {
        ...project,
        currentLpsVersionId: lpsVersionId,
        updatedAt: timestamp,
      };

      const persist = async () => {
        await this.lps.markSuperseded(current.lpsVersionId);
        await this.lps.save(livingProjectState);
        await this.projects.save(updatedProject);
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch {
        return fail("PERSISTENCE_FAILURE", "atomic_append_failed");
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.lps.version_appended",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        lpsVersion: nextVersion,
        previousLpsVersionId: current.lpsVersionId,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        project: updatedProject,
        livingProjectState,
        previousLpsVersionId: current.lpsVersionId,
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
