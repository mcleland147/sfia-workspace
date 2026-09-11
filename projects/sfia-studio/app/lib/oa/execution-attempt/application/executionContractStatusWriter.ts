/**
 * T-A5 owns the post-start ExecutionContract statuses (executing|completed|
 * failed|cancelled) and D-GCEC-15 return-to-confirmed after a successful
 * bounded slice when effective requirements remain. T-A4 use-cases deliberately
 * refuse TA5 writes, so T-A5 writes them through the SHARED
 * `ExecutionContractRepositoryPort`.
 *
 * Absolute invariant enforced here (RTA5-09):
 *   ExecutionContract.executing ⇒ a matching Attempt is ALREADY running
 *   in the Attempt repository — caller-claimed status alone is NOT trusted.
 *
 * D-GCEC-15:
 *   Attempt succeeded ≠ EC completed.
 *   executing → confirmed when required effects remain / await verification.
 *   confirmed → completed when all effective requirements are verified.
 */
import {
  isExecutionReadyStatus,
  type ExecutionContract,
  type ExecutionContractRepositoryPort,
  type ExecutionContractPersistenceUnitOfWorkPort,
} from "@/lib/oa/execution-contract";
import type { AttemptDetailCode, ExecutionAttemptStatus } from "../domain/types";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";

export type Ta5ContractStatus =
  | "executing"
  | "confirmed"
  | "completed"
  | "failed"
  | "cancelled";

const ALLOWED_SOURCES: Record<Ta5ContractStatus, readonly string[]> = {
  // validated is Execute-ready only via isExecutionReadyStatus (R16 marker).
  executing: ["confirmed", "validated"],
  // D-GCEC-15 — successful partial slice returns EC to execute-ready.
  confirmed: ["executing"],
  // Completion after last slice while executing, or after verification catch-up.
  completed: ["executing", "confirmed"],
  failed: ["confirmed", "validated", "executing"],
  cancelled: ["confirmed", "validated", "executing"],
};

export type ContractStatusWriteRequest = {
  executionContractId: string;
  expectedVersion: number;
  nextStatus: Ta5ContractStatus;
  /** Recorded on the contract when the Attempt selection is bound. */
  selectedAgentRef?: string;
  reason?: string;
  /** Required for `executing`: identifies the Attempt that must already be running. */
  runningAttempt?: { attemptId: string; status: ExecutionAttemptStatus };
};

export type ContractStatusWriteResult =
  | { ok: true; contract: ExecutionContract }
  | {
      ok: false;
      detailCode: AttemptDetailCode;
      internalCauseRef: string;
      currentVersion?: number;
    };

export class ExecutionContractStatusWriter {
  constructor(
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly store: ExecutionContractPersistenceUnitOfWorkPort | undefined,
    private readonly attempts: ExecutionAttemptRepositoryPort,
  ) {}

  async write(
    request: ContractStatusWriteRequest,
  ): Promise<ContractStatusWriteResult> {
    if (request.nextStatus === "executing") {
      if (!request.runningAttempt?.attemptId) {
        return {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
          internalCauseRef: "executing_requires_running_attempt_ref",
        };
      }
      // Defense in depth: never trust a caller-claimed status alone.
      const persisted = await this.attempts.findById(
        request.runningAttempt.attemptId,
      );
      if (!persisted) {
        return {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
          internalCauseRef: "executing_requires_persisted_attempt",
        };
      }
      if (persisted.executionContractId !== request.executionContractId) {
        return {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
          internalCauseRef: "executing_attempt_contract_mismatch",
        };
      }
      if (persisted.status !== "running") {
        return {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
          internalCauseRef: `executing_requires_running_attempt_got_${persisted.status}`,
        };
      }
    }

    let written: ExecutionContract | undefined;
    let failure: ContractStatusWriteResult | undefined;

    const persist = async () => {
      const current = await this.contracts.findById(
        request.executionContractId,
      );
      if (!current) {
        failure = {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_NOT_FOUND",
          internalCauseRef: "missing_contract",
        };
        throw new Error("missing_contract");
      }
      if (current.version !== request.expectedVersion) {
        failure = {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_STALE",
          internalCauseRef: "contract_occ_mismatch",
          currentVersion: current.version,
        };
        throw new Error("contract_occ_mismatch");
      }
      const allowed = ALLOWED_SOURCES[request.nextStatus];
      const sourceAllowed =
        allowed.includes(current.status) &&
        (current.status !== "validated" || isExecutionReadyStatus(current));
      if (!sourceAllowed) {
        failure = {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
          internalCauseRef: `contract_transition_refused_${current.status}_to_${request.nextStatus}`,
          currentVersion: current.version,
        };
        throw new Error("contract_transition_refused");
      }
      const next: ExecutionContract = {
        ...current,
        status: request.nextStatus,
        selectedAgentRef: request.selectedAgentRef ?? current.selectedAgentRef,
        supersessionReason:
          request.nextStatus === "cancelled" && request.reason
            ? request.reason
            : current.supersessionReason,
        version: current.version + 1,
      };
      await this.contracts.save(next);
      written = next;
    };

    try {
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
    } catch {
      return (
        failure ?? {
          ok: false,
          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
          internalCauseRef: "contract_persist_failed",
        }
      );
    }

    if (!written) {
      return {
        ok: false,
        detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
        internalCauseRef: "contract_persist_incomplete",
      };
    }
    return { ok: true, contract: written };
  }
}
