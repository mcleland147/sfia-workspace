import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import { createExecutionError } from "../domain/errors";
import {
  isTa5Status,
  isValidSupersessionReason,
  PRE_EXEC_CANCEL_STATUSES,
} from "../domain/invariants";
import type {
  ActorReference,
  CancelExecutionContractRequest,
  ExecutionContract,
  ExecutionContractResult,
} from "../domain/types";
import type { ExecutionContractPersistenceUnitOfWorkPort } from "../ports/executionContractPersistenceUnitOfWorkPort";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import { verifyRequiredAuthority } from "./authorityHelper";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type CancelSnapshot = {
  executionContractId: string;
  reason: string;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  expectedVersion: number | undefined;
  claimedAuthorityLevel: string | undefined;
};

/**
 * CancelExecutionContract — maps to catalog CancelExecution (pre-exec).
 * Only pre-exec statuses (draft|proposed|validated|confirmation_required|confirmed).
 * Reason required (non-whitespace). Does NOT cancel post-start / T-A5 path.
 */
export class CancelExecutionContract {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
    private readonly store?: ExecutionContractPersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: CancelExecutionContractRequest,
  ): Promise<ExecutionContractResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createExecutionError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createExecutionError>[0]>,
    ): ExecutionContractResult => {
      const durationMs = Date.now() - started;
      const error = createExecutionError({
        detailCode,
        timestamp,
        correlationId,
        executionContractId: request.executionContractId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.cancelled",
        ts: timestamp,
        correlationId,
        projectId: extra?.projectId ?? "prj:unknown",
        executionContractId: request.executionContractId,
        status: "unknown",
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("CONTRACT_INVALID", "actor_required");
      }
      if (!isValidSupersessionReason(request.reason)) {
        return fail("CONTRACT_INVALID", "cancel_reason_required");
      }

      const snap: CancelSnapshot = {
        executionContractId: request.executionContractId,
        reason: request.reason,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        expectedVersion: request.expectedVersion,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
      };
      void snap.claimedAuthorityLevel;
      void snap.reason;

      const existing = await this.contracts.findById(snap.executionContractId);
      if (!existing) {
        return fail("CONTRACT_NOT_FOUND", "missing_contract");
      }
      if (isTa5Status(existing.status)) {
        return fail("TA5_STATUS_REFUSED", `ta5_post_start_${existing.status}`, {
          projectId: existing.projectId,
        });
      }
      if (!PRE_EXEC_CANCEL_STATUSES.has(existing.status)) {
        return fail("STATE_CONFLICT", `status_${existing.status}`, {
          projectId: existing.projectId,
        });
      }
      if (
        snap.expectedVersion !== undefined &&
        snap.expectedVersion !== existing.version
      ) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          projectId: existing.projectId,
          expectedVersion: snap.expectedVersion,
          currentVersion: existing.version,
        });
      }

      const verification = verifyRequiredAuthority(this.authority, {
        requiredAuthority: existing.requiredAuthority,
        actorId: snap.actor.actorId,
        scope: existing.scope,
        evidenceId: snap.authorityEvidenceId,
        claimedAuthorityLevel: snap.claimedAuthorityLevel,
        displayName: snap.actor.displayName,
      });
      this.audit.append({
        event: "oa.authority.verified",
        ts: timestamp,
        correlationId,
        actorId: snap.actor.actorId,
        requiredLevel:
          existing.requiredAuthority === "MORRIS"
            ? "N3"
            : existing.requiredAuthority,
        scope: existing.scope,
        ok: verification.ok,
        verifiedLevel: verification.verifiedLevel,
        reason: verification.reason,
        canActAsMorris: verification.canActAsMorris,
        durationMs: Date.now() - started,
      });
      if (!verification.ok) {
        return fail(
          verification.reason === "scope_mismatch"
            ? "AUTHORITY_SCOPE_MISMATCH"
            : "AUTHORITY_DENIED",
          verification.reason,
          { projectId: existing.projectId },
        );
      }

      let contract: ExecutionContract | undefined;

      const persist = async () => {
        const current = await this.contracts.findById(snap.executionContractId);
        if (!current) {
          throw Object.assign(new Error("missing"), {
            detailCode: "CONTRACT_NOT_FOUND" as const,
          });
        }
        if (isTa5Status(current.status)) {
          throw Object.assign(new Error("ta5"), {
            detailCode: "TA5_STATUS_REFUSED" as const,
          });
        }
        if (!PRE_EXEC_CANCEL_STATUSES.has(current.status)) {
          throw Object.assign(new Error("status"), {
            detailCode: "STATE_CONFLICT" as const,
          });
        }
        if (
          snap.expectedVersion !== undefined &&
          snap.expectedVersion !== current.version
        ) {
          throw Object.assign(new Error("occ"), {
            detailCode: "VERSION_CONFLICT" as const,
            expectedVersion: snap.expectedVersion,
            currentVersion: current.version,
          });
        }
        const next: ExecutionContract = {
          ...current,
          status: "cancelled",
          supersessionReason: snap.reason,
          version: current.version + 1,
        };
        await this.contracts.save(next);
        contract = next;
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (err && typeof err === "object" && "detailCode" in err) {
          const e = err as {
            detailCode: Parameters<typeof createExecutionError>[0]["detailCode"];
            expectedVersion?: number;
            currentVersion?: number;
          };
          return fail(e.detailCode, "race", {
            projectId: existing.projectId,
            expectedVersion: e.expectedVersion,
            currentVersion: e.currentVersion,
          });
        }
        return fail("PERSISTENCE_FAILURE", "atomic_cancel_failed", {
          projectId: existing.projectId,
        });
      }

      if (!contract) {
        return fail("PERSISTENCE_FAILURE", "atomic_cancel_incomplete", {
          projectId: existing.projectId,
        });
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_contract.cancelled",
        ts: timestamp,
        correlationId,
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        status: contract.status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        contract: structuredClone(contract),
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
