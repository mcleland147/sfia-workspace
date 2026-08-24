/**
 * SHA-256 semantic fingerprint for ExecutionContract (M3).
 * Canonical JSON over execution-significant fields; excludes volatile provenance
 * and T-A4 lifecycle metadata (status, version) that do not change intent.
 *
 * Nested objects are persistence-normalized (JSON round-trip) so undefined keys
 * cannot make build-time hashes diverge from reload/recompute.
 */
import { createHash } from "node:crypto";
import { canonicalizeJson } from "@/lib/oa/doctrine";
import type { ExecutionContract } from "./types";

/** Drop undefined keys the same way SQLite payload_json persistence does. */
function persistenceNormalize<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export type ExecutionContractSemanticMaterial = {
  executionContractId: string;
  projectId: string;
  cycleInstanceId?: string;
  decisionRefs?: string[];
  confirmationRef?: string;
  doctrinePackageRef?: ExecutionContract["doctrinePackageRef"];
  action: string;
  target: string;
  scope: string;
  inputs?: Record<string, unknown>;
  expectedOutputs?: string[];
  requiredCapabilities: string[];
  requiredAuthority: ExecutionContract["requiredAuthority"];
  constraints: string[];
  stopConditions: string[];
  evidenceRequirements: string[];
  reversibility: ExecutionContract["reversibility"];
  executionWindowClass?: ExecutionContract["executionWindowClass"];
  idempotencyKey: string;
  supersedesExecutionContractId?: string;
  supersessionReason?: string;
  adapterExportRef?: string;
  immutableAfterConfirm?: true;
};

export function executionContractSemanticMaterial(
  contract: Pick<
    ExecutionContract,
    | "executionContractId"
    | "projectId"
    | "cycleInstanceId"
    | "decisionRefs"
    | "confirmationRef"
    | "doctrinePackageRef"
    | "action"
    | "target"
    | "scope"
    | "inputs"
    | "expectedOutputs"
    | "requiredCapabilities"
    | "requiredAuthority"
    | "constraints"
    | "stopConditions"
    | "evidenceRequirements"
    | "reversibility"
    | "executionWindowClass"
    | "idempotencyKey"
    | "supersedesExecutionContractId"
    | "supersessionReason"
    | "adapterExportRef"
    | "immutableAfterConfirm"
  >,
): ExecutionContractSemanticMaterial {
  const material: ExecutionContractSemanticMaterial = {
    executionContractId: contract.executionContractId,
    projectId: contract.projectId,
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
    requiredCapabilities: [...contract.requiredCapabilities],
    requiredAuthority: contract.requiredAuthority,
    constraints: [...contract.constraints],
    stopConditions: [...contract.stopConditions],
    evidenceRequirements: [...contract.evidenceRequirements],
    reversibility: contract.reversibility,
    idempotencyKey: contract.idempotencyKey,
  };
  if (contract.executionWindowClass !== undefined) {
    material.executionWindowClass = contract.executionWindowClass;
  }
  if (contract.cycleInstanceId !== undefined) {
    material.cycleInstanceId = contract.cycleInstanceId;
  }
  if (contract.decisionRefs !== undefined) {
    material.decisionRefs = [...contract.decisionRefs];
  }
  if (contract.confirmationRef !== undefined) {
    material.confirmationRef = contract.confirmationRef;
  }
  if (contract.doctrinePackageRef !== undefined) {
    material.doctrinePackageRef = persistenceNormalize(
      contract.doctrinePackageRef,
    );
  }
  if (contract.inputs !== undefined) {
    material.inputs = persistenceNormalize(contract.inputs);
  }
  if (contract.expectedOutputs !== undefined) {
    material.expectedOutputs = [...contract.expectedOutputs];
  }
  if (contract.supersedesExecutionContractId !== undefined) {
    material.supersedesExecutionContractId =
      contract.supersedesExecutionContractId;
  }
  if (contract.supersessionReason !== undefined) {
    material.supersessionReason = contract.supersessionReason;
  }
  if (contract.adapterExportRef !== undefined) {
    material.adapterExportRef = contract.adapterExportRef;
  }
  if (contract.immutableAfterConfirm !== undefined) {
    material.immutableAfterConfirm = contract.immutableAfterConfirm;
  }
  return material;
}

/** Primitive: fingerprint an already-built semantic material payload. */
export function computeExecutionContractSemanticMaterialFingerprint(
  material: ExecutionContractSemanticMaterial,
): string {
  const canonical = canonicalizeJson(material);
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}

export function computeExecutionContractSemanticFingerprint(
  contract: Parameters<typeof executionContractSemanticMaterial>[0],
): string {
  return computeExecutionContractSemanticMaterialFingerprint(
    executionContractSemanticMaterial(contract),
  );
}
