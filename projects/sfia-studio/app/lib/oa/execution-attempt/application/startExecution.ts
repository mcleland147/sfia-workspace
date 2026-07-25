/**
 * StartExecution — normative RTA5-09 sequence.
 *
 *  1. Preconditions: authorization, TTL, agent_selection Confirmation when the
 *     strategy is human_confirmed_proposal, registry revalidation, active
 *     index, OCC.
 *  2. The Attempt is ALREADY persisted `accepted` (Select did it). Start never
 *     launches before an `accepted` Attempt exists (anti launch-then-persist).
 *  3. The contract stays `confirmed` while the Attempt is `accepted`.
 *  4. Only the injected fake adapter `launch(attemptId)` is called; it is
 *     idempotent.
 *  5. Launch reject/failure → Attempt `failed`, never `executing`.
 *  6. LaunchAck → Attempt `running` persisted FIRST, then contract
 *     `executing`, then the agent_selection Confirmation is consumed.
 *  7. Contract update failure after `running` → fail-closed compensation of
 *     the Attempt, audited, with no second adapter call and no business
 *     rollback.
 *
 * Contract failure mapping by cause (RTA5-09 "selon cause" ∩ modeled matrix):
 * - launch REJECT (deterministic refusal, nothing started) → contract stays
 *   `confirmed`, so an authorized Retry remains possible;
 * - launch FAIL (indeterminate adapter error) → contract `failed`.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { DecisionServices } from "@/lib/oa/decision";
import type {
  CheckExecutionAuthorization,
  ExecutionContractRepositoryPort,
} from "@/lib/oa/execution-contract";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
import {
  AGENT_SELECTION_SCOPE,
  agentMatchViolation,
  assertAgentSelectionConfirmation,
} from "../domain/invariants";
import type {
  ExecutionAttempt,
  ExecutionAttemptResult,
  StartExecutionRequest,
} from "../domain/types";
import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
import type { AgentRegistryPort } from "../ports/agentRegistry";
import type { ExecutionAdapterPort } from "../ports/executionAdapter";
import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
import {
  authorityFailureDetail,
  contractGateDetail,
  newCorrelationId,
  verifyAttemptAuthority,
} from "./attemptSupport";
import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";
import { mapContractAuthorizationDetail } from "./selectExecutionAgent";

export class StartExecution {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly contractStatusWriter: ExecutionContractStatusWriter,
    private readonly checkExecutionAuthorization: CheckExecutionAuthorization,
    private readonly decisionServices: DecisionServices,
    private readonly authority: AuthorityResolverPort,
    private readonly registry: AgentRegistryPort,
    private readonly adapter: ExecutionAdapterPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAttemptAuditPort,
    private readonly store?: MemoryExecutionAttemptStore,
  ) {}

  async execute(
    request: StartExecutionRequest,
  ): Promise<ExecutionAttemptResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId = request.correlationId ?? newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createAttemptError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createAttemptError>[0]> & {
        attempt?: ExecutionAttempt;
      },
    ): ExecutionAttemptResult => {
      const { attempt, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const error = createAttemptError({
        detailCode,
        timestamp,
        correlationId,
        attemptId: request.attemptId,
        internalCauseRef,
        ...errorExtra,
      });
      this.audit.append({
        event: "oa.execution_attempt.started",
        ts: timestamp,
        correlationId,
        attemptId: request.attemptId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, attempt, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("ATTEMPT_INVALID", "actor_required");
      }

      const attempt = await this.attempts.findById(request.attemptId);
      if (!attempt) {
        return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
      }

      // Crash-window replay: the Attempt is already running — return the same
      // state without calling the adapter a second time.
      if (attempt.status === "running") {
        const contract = await this.contracts.findById(
          attempt.executionContractId,
        );
        const durationMs = Date.now() - started;
        this.audit.append({
          event: "oa.execution_attempt.started",
          ts: timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: attempt.executionContractId,
          newStatus: "running",
          contractStatus: contract?.status,
          result: "ok",
          durationMs,
        });
        return {
          ok: true,
          attempt,
          contractStatus: contract?.status,
          contractVersion: contract?.version,
          replayed: true,
          durationMs,
        };
      }
      if (attempt.status !== "accepted") {
        return fail("ATTEMPT_STATE_CONFLICT", `attempt_status_${attempt.status}`, {
          executionContractId: attempt.executionContractId,
        });
      }
      if (
        request.expectedAttemptVersion !== undefined &&
        request.expectedAttemptVersion !== attempt.version
      ) {
        return fail("VERSION_CONFLICT", "attempt_occ_mismatch", {
          expectedVersion: request.expectedAttemptVersion,
          currentVersion: attempt.version,
        });
      }
      if (
        !attempt.selectionExpiresAt ||
        Date.parse(attempt.selectionExpiresAt) <= Date.parse(timestamp)
      ) {
        // Detection only: no auto-cancel (RTA5-08). A human Cancel disposes
        // of the expired Attempt and releases the active invariant.
        return fail("AGENT_SELECTION_EXPIRED", "selection_ttl_expired", {
          executionContractId: attempt.executionContractId,
        });
      }

      const contract = await this.contracts.findById(
        attempt.executionContractId,
      );
      if (!contract) {
        return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
      }
      const gate = contractGateDetail(contract);
      if (gate) {
        this.audit.append({
          event: "oa.execution_attempt.stale_context_detected",
          ts: timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          contractStatus: contract.status,
          result: "error",
          detailCode: gate,
          durationMs: Date.now() - started,
        });
        return fail(gate, `contract_status_${contract.status}`, {
          executionContractId: contract.executionContractId,
        });
      }
      if (contract.version !== attempt.executionContractVersion) {
        this.audit.append({
          event: "oa.execution_attempt.stale_context_detected",
          ts: timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          contractStatus: contract.status,
          result: "error",
          detailCode: "EXECUTION_CONTRACT_STALE",
          durationMs: Date.now() - started,
        });
        return fail("EXECUTION_CONTRACT_STALE", "contract_version_changed", {
          executionContractId: contract.executionContractId,
          expectedVersion: attempt.executionContractVersion,
          currentVersion: contract.version,
        });
      }
      if (
        request.expectedContractVersion !== undefined &&
        request.expectedContractVersion !== contract.version
      ) {
        return fail("EXECUTION_CONTRACT_STALE", "contract_occ_mismatch", {
          executionContractId: contract.executionContractId,
          expectedVersion: request.expectedContractVersion,
          currentVersion: contract.version,
        });
      }

      const authorization = await this.checkExecutionAuthorization.execute({
        executionContractId: contract.executionContractId,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
        actor: request.actor,
        authorityEvidenceId: request.authorityEvidenceId,
        correlationId,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
      });
      if (!authorization.ok) {
        return fail(
          mapContractAuthorizationDetail(authorization.error.detailCode),
          `check_authorization_${authorization.error.detailCode}`,
          { executionContractId: contract.executionContractId },
        );
      }

      const agent = this.registry.getAgent(attempt.selectedAgentRef);
      if (!agent) {
        return fail("AGENT_NOT_FOUND", "selected_agent_not_registered", {
          selectedAgentRef: attempt.selectedAgentRef,
        });
      }
      const agentViolation = agentMatchViolation(agent, {
        requiredCapabilities: [...contract.requiredCapabilities],
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
      });
      if (agentViolation) {
        return fail(agentViolation.detailCode, agentViolation.reason, {
          selectedAgentRef: attempt.selectedAgentRef,
        });
      }

      let consumeConfirmationId: string | undefined;
      if (attempt.selectionStrategy === "human_confirmed_proposal") {
        if (!attempt.agentConfirmationRef) {
          return fail(
            "AGENT_CONFIRMATION_REQUIRED",
            "agent_confirmation_ref_missing",
          );
        }
        const confirmation = await this.decisionServices.confirmations.findById(
          attempt.agentConfirmationRef,
        );
        if (!confirmation) {
          return fail(
            "AGENT_CONFIRMATION_REQUIRED",
            "agent_confirmation_not_found",
            { confirmationId: attempt.agentConfirmationRef },
          );
        }
        const violation = assertAgentSelectionConfirmation({
          confirmationScope: confirmation.scope,
          confirmationLevel: confirmation.level,
          confirmationStatus: confirmation.status,
          confirmationActionRef: confirmation.actionRef,
          confirmationExpiresAt: confirmation.expiresAt,
          expectedBinding: {
            executionContractId: contract.executionContractId,
            executionContractVersion: contract.version,
            selectedAgentRef: attempt.selectedAgentRef,
          },
          requiredAuthority: contract.requiredAuthority,
          selectionExpiresAt: attempt.selectionExpiresAt,
          nowIso: timestamp,
        });
        if (violation) {
          return fail(violation.detailCode, violation.reason, {
            confirmationId: attempt.agentConfirmationRef,
          });
        }
        const confirmerVerification = verifyAttemptAuthority(this.authority, {
          requiredAuthority: contract.requiredAuthority,
          actorId: confirmation.requestedTo.actorId,
          scope: AGENT_SELECTION_SCOPE,
        });
        if (!confirmerVerification.ok) {
          return fail(
            authorityFailureDetail(confirmerVerification.reason),
            `confirmer_${confirmerVerification.reason}`,
            { confirmationId: attempt.agentConfirmationRef },
          );
        }
        consumeConfirmationId = attempt.agentConfirmationRef;
      }

      try {
        await this.attempts.assertActiveIndexConsistent();
      } catch (err) {
        if (isExecutionAttemptDomainError(err)) {
          return fail(err.detailCode, err.message, {
            executionContractId: contract.executionContractId,
          });
        }
        return fail("ACTIVE_INDEX_DRIFT", "active_index_check_failed");
      }
      const active = await this.attempts.findActiveByContract(
        contract.executionContractId,
      );
      if (!active || active.attemptId !== attempt.attemptId) {
        return fail("EXECUTION_ALREADY_ACTIVE", "another_attempt_is_active", {
          executionContractId: contract.executionContractId,
        });
      }

      // Step 4 — the ONLY adapter interaction.
      let launch;
      try {
        launch = await this.adapter.launch({
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          executionContractVersion: contract.version,
          selectedAgentRef: attempt.selectedAgentRef,
          adapterRef: agent.adapterRef,
          correlationId,
        });
      } catch {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: "fail",
          reason: "adapter_threw",
          timestamp,
          correlationId,
          started,
        });
      }

      if (launch.outcome !== "ack") {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: launch.outcome,
          reason: launch.reason,
          timestamp,
          correlationId,
          started,
        });
      }
      if (launch.attemptId !== attempt.attemptId) {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: "fail",
          reason: "adapter_attempt_binding_mismatch",
          timestamp,
          correlationId,
          started,
        });
      }
      if (launch.adapterId !== this.adapter.adapterId) {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: "fail",
          reason: "adapter_identity_binding_mismatch",
          timestamp,
          correlationId,
          started,
        });
      }

      // Step 6a — Attempt running FIRST.
      const runningAttempt: ExecutionAttempt = {
        ...attempt,
        status: "running",
        launchedAt: timestamp,
        startedAt: timestamp,
        updatedAt: timestamp,
        version: attempt.version + 1,
      };
      try {
        const persist = async () => {
          await this.attempts.update(runningAttempt, attempt.version);
        };
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        // Nothing real ran (fake adapter) — the Attempt stays `accepted` and
        // a replayed Start reuses the memoized launch ack.
        if (isExecutionAttemptDomainError(err)) {
          return fail(err.detailCode, `running_persist_${err.message}`, {
            executionContractId: contract.executionContractId,
            expectedVersion: err.expectedVersion,
            currentVersion: err.currentVersion,
          });
        }
        return fail("EXECUTION_PERSISTENCE_FAILED", "running_persist_failed", {
          executionContractId: contract.executionContractId,
        });
      }

      // Step 6b — contract executing AFTER the Attempt is running.
      const contractWrite = await this.contractStatusWriter.write({
        executionContractId: contract.executionContractId,
        expectedVersion: contract.version,
        nextStatus: "executing",
        selectedAgentRef: attempt.selectedAgentRef,
        runningAttempt: {
          attemptId: runningAttempt.attemptId,
          status: runningAttempt.status,
        },
      });
      if (!contractWrite.ok) {
        const compensated = await this.compensateAfterRunning({
          attempt: runningAttempt,
          timestamp,
          correlationId,
          started,
        });
        return {
          ok: false,
          error: createAttemptError({
            detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
            timestamp,
            correlationId,
            attemptId: attempt.attemptId,
            executionContractId: contract.executionContractId,
            internalCauseRef: contractWrite.internalCauseRef,
            currentVersion: contractWrite.currentVersion,
          }),
          attempt: compensated,
          durationMs: Date.now() - started,
        };
      }

      // Step 6c — consume the agent_selection Confirmation on success only.
      if (consumeConfirmationId) {
        const consumed = await this.decisionServices.consumeConfirmation.execute(
          {
            confirmationId: consumeConfirmationId,
            actor: request.actor,
            correlationId,
            nowIso: timestamp,
          },
        );
        if (!consumed.ok) {
          const alreadyConsumed =
            consumed.error.detailCode === "CONFIRMATION_ALREADY_CONSUMED";
          if (!alreadyConsumed) {
            // Residual R-T-A3-2: the Attempt is running and the contract is
            // executing; cross-store consumption cannot be rolled back.
            this.audit.append({
              event: "oa.execution_attempt.started",
              ts: timestamp,
              correlationId,
              attemptId: attempt.attemptId,
              executionContractId: contract.executionContractId,
              confirmationRef: consumeConfirmationId,
              newStatus: "running",
              contractStatus: contractWrite.contract.status,
              result: "error",
              detailCode: "AGENT_CONFIRMATION_CONSUME_FAILED",
              durationMs: Date.now() - started,
            });
            return {
              ok: false,
              error: createAttemptError({
                detailCode: "AGENT_CONFIRMATION_CONSUME_FAILED",
                timestamp,
                correlationId,
                attemptId: attempt.attemptId,
                executionContractId: contract.executionContractId,
                confirmationId: consumeConfirmationId,
                internalCauseRef: `consume_${consumed.error.detailCode}`,
              }),
              attempt: runningAttempt,
              durationMs: Date.now() - started,
            };
          }
        }
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_attempt.started",
        ts: timestamp,
        correlationId,
        attemptId: runningAttempt.attemptId,
        executionContractId: contract.executionContractId,
        executionContractVersion: contract.version,
        selectedAgentRef: runningAttempt.selectedAgentRef,
        adapterId: this.adapter.adapterId,
        confirmationRef: consumeConfirmationId,
        previousStatus: "accepted",
        newStatus: "running",
        contractStatus: contractWrite.contract.status,
        result: "ok",
        durationMs,
      });
      this.audit.append({
        event: "oa.execution_contract.status_written",
        ts: timestamp,
        correlationId,
        attemptId: runningAttempt.attemptId,
        executionContractId: contract.executionContractId,
        contractStatus: contractWrite.contract.status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        attempt: structuredClone(runningAttempt),
        contractStatus: contractWrite.contract.status,
        contractVersion: contractWrite.contract.version,
        durationMs,
      };
    } catch {
      return fail("EXECUTION_PERSISTENCE_FAILED", "unexpected_exception");
    }
  }

  /** Launch reject/failure → Attempt failed, never executing. */
  private async failLaunch(input: {
    attempt: ExecutionAttempt;
    contractVersion: number;
    cause: "reject" | "fail";
    reason: string;
    timestamp: string;
    correlationId: string;
    started: number;
  }): Promise<ExecutionAttemptResult> {
    const detailCode =
      input.cause === "reject"
        ? ("EXECUTION_LAUNCH_REJECTED" as const)
        : ("EXECUTION_LAUNCH_FAILED" as const);
    const failedAttempt: ExecutionAttempt = {
      ...input.attempt,
      status: "failed",
      failedAt: input.timestamp,
      stopReason: `EXECUTION_LAUNCH_FAILED: ${input.cause}:${input.reason}`,
      updatedAt: input.timestamp,
      version: input.attempt.version + 1,
    };

    let persistedAttempt: ExecutionAttempt | undefined;
    try {
      const persist = async () => {
        await this.attempts.update(failedAttempt, input.attempt.version);
        await this.attempts.releaseActiveContract(
          failedAttempt.executionContractId,
          failedAttempt.attemptId,
        );
      };
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
      persistedAttempt = failedAttempt;
    } catch {
      persistedAttempt = undefined;
    }

    // Indeterminate adapter failure fails the contract; a deterministic
    // rejection leaves it `confirmed` so a Retry stays possible.
    let contractStatus: string | undefined;
    if (input.cause === "fail") {
      const write = await this.contractStatusWriter.write({
        executionContractId: input.attempt.executionContractId,
        expectedVersion: input.contractVersion,
        nextStatus: "failed",
        reason: "Launch failed before execution started",
      });
      contractStatus = write.ok ? write.contract.status : undefined;
    }

    const durationMs = Date.now() - input.started;
    this.audit.append({
      event: "oa.execution_attempt.launch_failed",
      ts: input.timestamp,
      correlationId: input.correlationId,
      attemptId: input.attempt.attemptId,
      executionContractId: input.attempt.executionContractId,
      selectedAgentRef: input.attempt.selectedAgentRef,
      adapterId: this.adapter.adapterId,
      previousStatus: "accepted",
      newStatus: persistedAttempt ? "failed" : "accepted",
      contractStatus,
      stopReason: failedAttempt.stopReason,
      result: "error",
      detailCode,
      durationMs,
    });

    return {
      ok: false,
      error: createAttemptError({
        detailCode,
        timestamp: input.timestamp,
        correlationId: input.correlationId,
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        internalCauseRef: input.reason,
      }),
      attempt: persistedAttempt,
      durationMs,
    };
  }

  /**
   * Contract update failed AFTER the Attempt became running: compensate
   * fail-closed. No second adapter call, no business rollback.
   */
  private async compensateAfterRunning(input: {
    attempt: ExecutionAttempt;
    timestamp: string;
    correlationId: string;
    started: number;
  }): Promise<ExecutionAttempt | undefined> {
    const compensated: ExecutionAttempt = {
      ...input.attempt,
      status: "failed",
      failedAt: input.timestamp,
      stopReason:
        "EXECUTION_PERSISTENCE_FAILED: contract_executing_update_failed",
      irreversibleEffectsPossible: true,
      updatedAt: input.timestamp,
      version: input.attempt.version + 1,
    };
    try {
      const persist = async () => {
        await this.attempts.update(compensated, input.attempt.version);
        await this.attempts.releaseActiveContract(
          compensated.executionContractId,
          compensated.attemptId,
        );
      };
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
    } catch {
      this.audit.append({
        event: "oa.execution_attempt.compensated",
        ts: input.timestamp,
        correlationId: input.correlationId,
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        newStatus: "running",
        result: "error",
        detailCode: "EXECUTION_PERSISTENCE_FAILED",
        durationMs: Date.now() - input.started,
      });
      return undefined;
    }

    this.audit.append({
      event: "oa.execution_attempt.compensated",
      ts: input.timestamp,
      correlationId: input.correlationId,
      attemptId: compensated.attemptId,
      executionContractId: compensated.executionContractId,
      previousStatus: "running",
      newStatus: "failed",
      stopReason: compensated.stopReason,
      result: "ok",
      detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
      durationMs: Date.now() - input.started,
    });
    return compensated;
  }
}
