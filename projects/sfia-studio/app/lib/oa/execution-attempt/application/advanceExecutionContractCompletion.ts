/**
 * D-GCEC-15 — after Evidence verification, advance EC confirmed → completed
 * when all effective requirements are satisfied (no new Attempt required).
 */
import type { Confirmation } from "@/lib/oa/decision";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
import { qualifyExecutionContractCompletion } from "../domain/qualifyExecutionContractCompletion";
import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";

export async function advanceExecutionContractCompletion(input: {
  executionContractId: string;
  contracts: ExecutionContractRepositoryPort;
  contractStatusWriter: ExecutionContractStatusWriter;
  evidence: readonly Evidence[];
  confirmations?: readonly Confirmation[];
  cycleInstanceId?: string;
  clock?: ClockPort;
  nowIso?: string;
}): Promise<
  | { ok: true; status: string; complete: boolean; advanced: boolean }
  | { ok: false; reason: string }
> {
  const contract = await input.contracts.findById(input.executionContractId);
  if (!contract) return { ok: false, reason: "contract_not_found" };

  const qualification = qualifyExecutionContractCompletion({
    contract,
    evidence: input.evidence,
    confirmations: input.confirmations,
    cycleInstanceId: input.cycleInstanceId,
    nowIso: input.nowIso ?? input.clock?.nowIso(),
  });

  if (!qualification.complete) {
    return {
      ok: true,
      status: contract.status,
      complete: false,
      advanced: false,
    };
  }

  if (contract.status === "completed") {
    return {
      ok: true,
      status: "completed",
      complete: true,
      advanced: false,
    };
  }

  if (contract.status !== "confirmed" && contract.status !== "executing") {
    return {
      ok: false,
      reason: `cannot_complete_from_${contract.status}`,
    };
  }

  const write = await input.contractStatusWriter.write({
    executionContractId: contract.executionContractId,
    expectedVersion: contract.version,
    nextStatus: "completed",
    reason: "all_effective_requirements_verified",
  });
  if (!write.ok) {
    return { ok: false, reason: write.internalCauseRef };
  }
  return {
    ok: true,
    status: write.contract.status,
    complete: true,
    advanced: true,
  };
}
