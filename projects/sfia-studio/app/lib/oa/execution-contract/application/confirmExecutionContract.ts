import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { CycleServices } from "@/lib/oa/cycle";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import { createExecutionError } from "../domain/errors";
import { isTa5Status } from "../domain/invariants";
import type {
  ActorReference,
  ConfirmExecutionContractRequest,
  ExecutionContract,
  ExecutionContractResult,
} from "../domain/types";
import type { MemoryExecutionContractStore } from "../infrastructure/memoryExecutionContractStore";
import type { ExecutionAuditPort } from "../ports/executionAudit";
import type { ExecutionContractRepositoryPort } from "../ports/executionContractRepository";
import { verifyRequiredAuthority } from "./authorityHelper";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

type ConfirmSnapshot = {
  executionContractId: string;
  confirmationId: string;
  actor: ActorReference;
  authorityEvidenceId: string | undefined;
  expectedVersion: number | undefined;
  claimedAuthorityLevel: string | undefined;
  nowIso: string | undefined;
};

/**
 * ConfirmExecutionContract — validated|confirmation_required → confirmed.
 * Consumes Confirmation exactly once via DecisionServices.consumeConfirmation
 * (public T-A3 API). Build/Validate must not consume.
 *
 * Critical fail-closed (R-T-A3-1 OPEN): if linked cycle is Critical and still
 * `proposed` (no public AcknowledgeCriticalCycle API), Confirm fails.
 *
 * Cross-store residual (R-T-A3-2): confirmation consume (decision store) and
 * contract persist (execution store) are not a single atomic txn. On contract
 * save failure after successful consume, confirmation remains consumed —
 * callers must treat this as fail-closed STATE_CONFLICT / PERSISTENCE_FAILURE.
 */
export class ConfirmExecutionContract {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly decisionServices: DecisionServices,
    private readonly cycleServices: CycleServices | undefined,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAuditPort,
    private readonly store?: MemoryExecutionContractStore,
  ) {}

  async execute(
    request: ConfirmExecutionContractRequest,
  ): Promise<ExecutionContractResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
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
        confirmationId: request.confirmationId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.execution_contract.confirmed",
        ts: timestamp,
        correlationId,
        projectId: extra?.projectId ?? "prj:unknown",
        executionContractId: request.executionContractId,
        confirmationId: request.confirmationId,
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

      const snap: ConfirmSnapshot = {
        executionContractId: request.executionContractId,
        confirmationId: request.confirmationId,
        actor: structuredClone(request.actor),
        authorityEvidenceId: request.authorityEvidenceId,
        expectedVersion: request.expectedVersion,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
        nowIso: request.nowIso,
      };
      void snap.claimedAuthorityLevel;

      const existing = await this.contracts.findById(snap.executionContractId);
      if (!existing) {
        return fail("CONTRACT_NOT_FOUND", "missing_contract");
      }
      if (isTa5Status(existing.status)) {
        return fail("TA5_STATUS_REFUSED", `ta5_status_${existing.status}`, {
          projectId: existing.projectId,
        });
      }
      if (
        existing.status !== "validated" &&
        existing.status !== "confirmation_required"
      ) {
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

      // Critical fail-closed — R-T-A3-1: no public ack API on Cycle.
      if (existing.cycleInstanceId) {
        if (!this.cycleServices) {
          return fail("CYCLE_NOT_FOUND", "cycle_services_unavailable", {
            projectId: existing.projectId,
          });
        }
        const cycleResult = await this.cycleServices.getCycle.execute({
          cycleInstanceId: existing.cycleInstanceId,
        });
        if (!cycleResult.ok) {
          return fail("CYCLE_NOT_FOUND", "missing_cycle", {
            projectId: existing.projectId,
          });
        }
        const cycle = cycleResult.cycle;
        if (cycle.projectId !== existing.projectId) {
          return fail("CYCLE_PROJECT_MISMATCH", "cycle_project_mismatch", {
            projectId: existing.projectId,
          });
        }
        if (cycle.profile === "Critical" && cycle.status === "proposed") {
          return fail(
            "CRITICAL_NOT_ACKNOWLEDGED",
            "critical_proposed_no_public_ack",
            { projectId: existing.projectId },
          );
        }
      }

      // Decision freshness: accepted + same project + not superseded.
      const decisionRefs = existing.decisionRefs ?? [];
      if (decisionRefs.length < 1) {
        return fail("DECISION_REQUIRED", "decision_refs_required", {
          projectId: existing.projectId,
        });
      }
      for (const decisionId of decisionRefs) {
        const decisionResult =
          await this.decisionServices.getHumanDecision.execute({
            decisionId,
            correlationId,
          });
        if (!decisionResult.ok) {
          return fail("DECISION_NOT_FOUND", "missing_decision", {
            projectId: existing.projectId,
          });
        }
        const d = decisionResult.decision;
        if (d.projectId !== existing.projectId) {
          return fail("DECISION_REQUIRED", "decision_project_mismatch", {
            projectId: existing.projectId,
          });
        }
        if (d.status !== "accepted") {
          return fail("DECISION_NOT_CURRENT", `decision_status_${d.status}`, {
            projectId: existing.projectId,
          });
        }
      }

      // Pre-check confirmation via public repository port (no mutate yet).
      const confirmation =
        await this.decisionServices.confirmations.findById(
          snap.confirmationId,
        );
      if (!confirmation) {
        return fail("CONFIRMATION_NOT_FOUND", "missing_confirmation", {
          projectId: existing.projectId,
        });
      }
      if (confirmation.status === "consumed") {
        return fail(
          "CONFIRMATION_ALREADY_CONSUMED",
          "already_consumed",
          { projectId: existing.projectId },
        );
      }
      if (confirmation.status !== "granted") {
        return fail("CONFIRMATION_REQUIRED", `status_${confirmation.status}`, {
          projectId: existing.projectId,
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

      // Consume confirmation via public T-A3 use-case (decision store txn).
      const consumeResult =
        await this.decisionServices.consumeConfirmation.execute({
          confirmationId: snap.confirmationId,
          actor: snap.actor,
          correlationId,
          nowIso: snap.nowIso ?? timestamp,
        });
      if (!consumeResult.ok) {
        const mapped =
          consumeResult.error.detailCode === "CONFIRMATION_EXPIRED"
            ? "CONFIRMATION_EXPIRED"
            : consumeResult.error.detailCode === "CONFIRMATION_ALREADY_CONSUMED"
              ? "CONFIRMATION_ALREADY_CONSUMED"
              : consumeResult.error.detailCode === "CONFIRMATION_NOT_FOUND"
                ? "CONFIRMATION_NOT_FOUND"
                : "CONFIRMATION_CONSUME_FAILED";
        return fail(mapped, consumeResult.error.detailCode, {
          projectId: existing.projectId,
        });
      }

      let contract: ExecutionContract | undefined;

      const persist = async () => {
        const current = await this.contracts.findById(snap.executionContractId);
        if (!current) {
          throw Object.assign(new Error("missing"), {
            detailCode: "CONTRACT_NOT_FOUND" as const,
          });
        }
        if (
          current.status !== "validated" &&
          current.status !== "confirmation_required"
        ) {
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
          status: "confirmed",
          confirmationRef: snap.confirmationId,
          immutableAfterConfirm: true,
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
        // R-T-A3-2: confirmation already consumed; contract persist failed.
        if (err && typeof err === "object" && "detailCode" in err) {
          const e = err as {
            detailCode: Parameters<typeof createExecutionError>[0]["detailCode"];
            expectedVersion?: number;
            currentVersion?: number;
          };
          return fail(e.detailCode, "post_consume_persist_race", {
            projectId: existing.projectId,
            expectedVersion: e.expectedVersion,
            currentVersion: e.currentVersion,
          });
        }
        return fail("PERSISTENCE_FAILURE", "post_consume_persist_failed", {
          projectId: existing.projectId,
        });
      }

      if (!contract) {
        return fail("PERSISTENCE_FAILURE", "post_consume_incomplete", {
          projectId: existing.projectId,
        });
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_contract.confirmed",
        ts: timestamp,
        correlationId,
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        confirmationId: snap.confirmationId,
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
