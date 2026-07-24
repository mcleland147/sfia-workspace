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

/** Thrown inside a transaction when optimistic expectedVersion mismatches. */
export class LpsVersionConflictSignal extends Error {
  readonly currentVersion: number;
  readonly lpsVersionId: string;

  constructor(currentVersion: number, lpsVersionId: string) {
    super("lps_version_conflict");
    this.name = "LpsVersionConflictSignal";
    this.currentVersion = currentVersion;
    this.lpsVersionId = lpsVersionId;
  }
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
      const doctrinePackageRef = project.doctrinePackageRef;

      if (request.doctrinePackagePin) {
        if (
          !doctrinePinEqualsRef(
            request.doctrinePackagePin,
            doctrinePackageRef,
          )
        ) {
          return fail("DOCTRINE_UNRESOLVED", "append_pin_mismatch", {
            doctrinePackageId: request.doctrinePackagePin.doctrinePackageId,
            version: request.doctrinePackagePin.version,
          });
        }
      }

      // Preflight: current must exist (final optimistic check runs inside the txn).
      const preflightCurrent = await this.lps.findCurrentByProjectId(
        request.projectId,
      );
      if (!preflightCurrent) {
        return fail("LPS_NOT_FOUND", "missing_current_lps");
      }

      const lpsVersionId = request.lpsVersionId ?? newId("lps");
      if (await this.lps.findById(lpsVersionId)) {
        return fail("LPS_INVALID", "lps_version_id_taken");
      }

      let livingProjectState: LivingProjectState | undefined;
      let updatedProject: Project | undefined;
      let previousLpsVersionId: string | undefined;
      let nextVersion = 0;

      const persist = async () => {
        // Re-read under the transaction/mutex — concurrent double-append must conflict.
        const current = await this.lps.findCurrentByProjectId(request.projectId);
        if (!current) {
          throw new Error("missing_current_lps");
        }
        if (request.expectedVersion !== current.version) {
          throw new LpsVersionConflictSignal(
            current.version,
            current.lpsVersionId,
          );
        }

        nextVersion = current.version + 1;
        if (nextVersion <= current.version) {
          throw new Error("non_monotonic_version");
        }

        previousLpsVersionId = current.lpsVersionId;

        const provenance = appendProvenance({
          timestamp,
          correlationId,
          projectId: request.projectId,
          actor: request.createdBy,
          doctrinePackageRef: `${doctrinePackageRef.doctrinePackageId}@${doctrinePackageRef.version}`,
          supersedes: current.provenance?.provenanceRecordId,
        });

        const pickLink = <T>(
          next: T | null | undefined,
          prior: T | undefined,
        ): T | undefined => {
          if (next === null) return undefined;
          if (next !== undefined) return next;
          return prior;
        };

        const nextLps: LivingProjectState = {
          schemaVersion: "0.1.0-oa",
          lpsVersionId,
          projectId: request.projectId,
          version: nextVersion,
          supersedesLpsVersionId: current.lpsVersionId,
          status: "active",
          objective: request.objective.trim(),
          context: request.context ?? current.context,
          scope: request.scope ?? current.scope,
          constraints: current.constraints ? [...current.constraints] : [],
          stakeholders: current.stakeholders ? [...current.stakeholders] : [],
          doctrinePackageRef: structuredClone(doctrinePackageRef),
          ckcResolutionRef: pickLink(
            request.ckcResolutionRef,
            current.ckcResolutionRef,
          ),
          activeCycleInstanceId: pickLink(
            request.activeCycleInstanceId,
            current.activeCycleInstanceId,
          ),
          trajectoryId: pickLink(request.trajectoryId, current.trajectoryId),
          trajectoryVersion: pickLink(
            request.trajectoryVersion,
            current.trajectoryVersion,
          ),
          epistemicItemIds:
            request.epistemicItemIds !== undefined
              ? [...request.epistemicItemIds]
              : current.epistemicItemIds
                ? [...current.epistemicItemIds]
                : [],
          decisionIds: current.decisionIds ? [...current.decisionIds] : [],
          createdAt: timestamp,
          createdBy: structuredClone(request.createdBy),
          correlationId,
          provenance,
          uiOwnership: false,
        };

        const nextProject: Project = {
          ...structuredClone(project),
          currentLpsVersionId: lpsVersionId,
          activeCycleInstanceId: pickLink(
            request.activeCycleInstanceId,
            project.activeCycleInstanceId,
          ),
          updatedAt: timestamp,
        };

        await this.lps.markSuperseded(current.lpsVersionId);
        await this.lps.save(nextLps);
        await this.projects.save(nextProject);

        livingProjectState = nextLps;
        updatedProject = nextProject;
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (err instanceof LpsVersionConflictSignal) {
          return fail("LPS_VERSION_CONFLICT", "expected_version_mismatch", {
            expectedVersion: request.expectedVersion,
            currentVersion: err.currentVersion,
            lpsVersionId: err.lpsVersionId,
          });
        }
        return fail("PERSISTENCE_FAILURE", "atomic_append_failed");
      }

      if (!livingProjectState || !updatedProject || !previousLpsVersionId) {
        return fail("PERSISTENCE_FAILURE", "atomic_append_incomplete");
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.lps.version_appended",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        lpsVersion: nextVersion,
        previousLpsVersionId,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        project: structuredClone(updatedProject),
        livingProjectState: structuredClone(livingProjectState),
        previousLpsVersionId,
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
