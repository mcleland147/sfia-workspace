/**
 * TD-W3B-02 Option B — Attempt-bound immutable ExecutionContract semantic snapshot.
 * Historical binding evidence owned by ExecutionAttempt — not a second EC aggregate.
 */
import {
  computeExecutionContractSemanticFingerprint,
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
  type ExecutionContractSemanticMaterial,
} from "@/lib/oa/execution-contract";
import type { ExecutionContract } from "@/lib/oa/execution-contract";

/** Payload interpretability metadata only — not a migration/version subsystem. */
export const BOUND_EXECUTION_CONTRACT_SNAPSHOT_SCHEMA_VERSION =
  "0.1.0-oa" as const;

export type BoundExecutionContractSnapshot = {
  readonly executionContractSchemaVersion: typeof BOUND_EXECUTION_CONTRACT_SNAPSHOT_SCHEMA_VERSION;
  readonly executionContractVersion: number;
  readonly semanticFingerprint: string;
  readonly semanticMaterial: ExecutionContractSemanticMaterial;
};

/**
 * Capture once at Attempt acceptance from the actual bound EC.
 * Persistence-normalizes material via JSON round-trip (same as SQLite payload).
 */
export function captureBoundExecutionContractSnapshot(
  contract: ExecutionContract,
): BoundExecutionContractSnapshot {
  const material = persistenceNormalize(
    executionContractSemanticMaterial(contract),
  );
  const fingerprint =
    computeExecutionContractSemanticMaterialFingerprint(material);
  const contractFp =
    (contract.semanticFingerprint ?? "").trim() ||
    computeExecutionContractSemanticFingerprint(contract);
  if (fingerprint !== contractFp) {
    throw new Error("bound_snapshot_fingerprint_mismatch_at_capture");
  }
  return {
    executionContractSchemaVersion:
      BOUND_EXECUTION_CONTRACT_SNAPSHOT_SCHEMA_VERSION,
    executionContractVersion: contract.version,
    semanticFingerprint: fingerprint,
    semanticMaterial: material,
  };
}

export type BoundSnapshotValidationResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly reason: string };

/**
 * Self-consistency of Attempt-bound snapshot. Does NOT consult latest EC.
 */
export function validateBoundExecutionContractSnapshot(input: {
  attempt: {
    executionContractId: string;
    executionContractVersion: number;
    executionContractSemanticFingerprint?: string;
    boundExecutionContract?: {
      executionContractSchemaVersion: string;
      executionContractVersion: number;
      semanticFingerprint: string;
      semanticMaterial: ExecutionContractSemanticMaterial | {
        executionContractId: string;
        projectId: string;
        cycleInstanceId?: string;
        [key: string]: unknown;
      };
    };
  };
  requirePresent?: boolean;
  expectedProjectId?: string;
  expectedCycleInstanceId?: string | null;
}): BoundSnapshotValidationResult {
  const snap = input.attempt.boundExecutionContract;
  if (!snap) {
    if (input.requirePresent) {
      return { ok: false, reason: "bound_snapshot_missing" };
    }
    return { ok: true };
  }
  if (
    snap.executionContractSchemaVersion !==
    BOUND_EXECUTION_CONTRACT_SNAPSHOT_SCHEMA_VERSION
  ) {
    return { ok: false, reason: "bound_snapshot_schema_unsupported" };
  }
  if (
    snap.semanticMaterial.executionContractId !==
    input.attempt.executionContractId
  ) {
    return { ok: false, reason: "bound_snapshot_ec_id_mismatch" };
  }
  if (
    snap.executionContractVersion !== input.attempt.executionContractVersion
  ) {
    return { ok: false, reason: "bound_snapshot_version_mismatch" };
  }
  const attemptFp = (
    input.attempt.executionContractSemanticFingerprint ?? ""
  ).trim();
  // When a snapshot is present, Attempt fingerprint must match exactly.
  if (!attemptFp || attemptFp !== snap.semanticFingerprint) {
    return { ok: false, reason: "bound_snapshot_attempt_fingerprint_mismatch" };
  }
  const recomputed =
    computeExecutionContractSemanticMaterialFingerprint(
      snap.semanticMaterial as ExecutionContractSemanticMaterial,
    );
  if (recomputed !== snap.semanticFingerprint) {
    return { ok: false, reason: "bound_snapshot_fingerprint_corrupt" };
  }
  if (
    input.expectedProjectId !== undefined &&
    snap.semanticMaterial.projectId !== input.expectedProjectId
  ) {
    return { ok: false, reason: "bound_snapshot_project_mismatch" };
  }
  if (input.expectedCycleInstanceId !== undefined) {
    const materialCycle = snap.semanticMaterial.cycleInstanceId ?? null;
    if (materialCycle !== input.expectedCycleInstanceId) {
      return { ok: false, reason: "bound_snapshot_cycle_mismatch" };
    }
  }
  return { ok: true };
}

function persistenceNormalize<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}
