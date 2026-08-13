/**
 * Cursor PREPARE-only projection (M3).
 * Pure — no Attempt, no REAL, no Gate D consumption.
 */
import type { ExecutionContract } from "../domain/types";
import { computeExecutionContractSemanticFingerprint } from "../domain/semanticFingerprint";

export type CursorPrepareOnlyProjection = {
  projectionOnly: true;
  executionAllowed: false;
  cursorReal: false;
  selectedAgentRef: null;
  gateD: "NOT_CONSUMED";
  contractId: string;
  fingerprint: string;
  projectId: string;
  status: ExecutionContract["status"];
  version: number;
  action: string;
  target: string;
  scope: string;
  requiredAuthority: ExecutionContract["requiredAuthority"];
  decisionRefs: string[];
  cycleInstanceId?: string;
  constraints: string[];
  stopConditions: string[];
};

export function projectCursorPrepareOnly(
  contract: ExecutionContract,
): CursorPrepareOnlyProjection {
  const fingerprint =
    contract.semanticFingerprint ??
    computeExecutionContractSemanticFingerprint(contract);
  return {
    projectionOnly: true,
    executionAllowed: false,
    cursorReal: false,
    selectedAgentRef: null,
    gateD: "NOT_CONSUMED",
    contractId: contract.executionContractId,
    fingerprint,
    projectId: contract.projectId,
    status: contract.status,
    version: contract.version,
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
    requiredAuthority: contract.requiredAuthority,
    decisionRefs: [...(contract.decisionRefs ?? [])],
    cycleInstanceId: contract.cycleInstanceId,
    constraints: [...contract.constraints],
    stopConditions: [...contract.stopConditions],
  };
}
