/**
 * T-A5 owns the post-start ExecutionContract statuses (executing|completed|
 * failed) and the post-start cancellation. T-A4 use-cases deliberately refuse
 * them, so T-A5 writes them through the SHARED
 * `ExecutionContractRepositoryPort` (+ the same MemoryExecutionContractStore
 * transaction helper). No T-A4 use-case is extended to post-exec.
 *
 * Absolute invariant enforced here:
 *   ExecutionContract.executing ⇒ a matching Attempt is ALREADY running.
 */
import type {
  ExecutionContract,
  ExecutionContractRepositoryPort,
  MemoryExecutionContractStore,
} from "@/lib/oa/execution-contract";
import type { AttemptDetailCode, ExecutionAttemptStatus } from "../domain/types";

export type Ta5ContractStatus =
  | "executing"
  | "completed"
  | "failed"
  | "cancelled";

const ALLOWED_SOURCES: Record<Ta5ContractStatus, readonly string[]> = {
  executing: ["confirmed"],
  completed: ["executing"],
  failed: ["confirmed", "executing"],
  cancelled: ["confirmed", "executing"],
};

export type ContractStatusWriteRequest = {
  executionContractId: string;
  expectedVersion: number;
  nextStatus: Ta5ContractStatus;
  /** Recorded on the contract when the Attempt selection is bound. */
  selectedAgentRef?: string;
  reason?: string;
  /** Required for `executing`: the Attempt must already be running. */
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
    private readonly store?: MemoryExecutionContractStore,
  ) {}

  async write(
    request: ContractStatusWriteRequest,
  ): Promise<ContractStatusWriteResult> {
    if (
      request.nextStatus === "executing" &&
      request.runningAttempt?.status !== "running"
    ) {
      return {
        ok: false,
        detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
        internalCauseRef: "executing_requires_running_attempt",
      };
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
      if (!ALLOWED_SOURCES[request.nextStatus].includes(current.status)) {
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
