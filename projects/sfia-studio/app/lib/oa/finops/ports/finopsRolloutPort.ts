/**
 * FinOps T7 — project-scoped rollout config port (internal FinOps only).
 *
 * NOT a product activation endpoint.
 * NOT a privileged Morris mutation API.
 * Upsert exists for future distinct activation cycles / tests only.
 *
 * Compare-and-swap (CAS) is the authority for bounded T7 operator apply:
 * mutation only when durable (mode, revision) still matches the expected
 * precondition at write time (including absent row = OFF + null revision).
 */

import type {
  FinOpsRolloutConfig,
  FinOpsRolloutMode,
} from "../application/types.rollout";

export type UpsertProjectRolloutInput = {
  readonly projectId: string;
  readonly mode: FinOpsRolloutMode;
  /** ISO-8601 timestamp; caller-supplied for deterministic tests. */
  readonly updatedAt: string;
};

export type CompareAndSwapProjectRolloutInput = {
  readonly projectId: string;
  /** Durable mode that must still match at write time. */
  readonly expectedMode: FinOpsRolloutMode;
  /**
   * Durable revision that must still match at write time.
   * `null` means the row must still be absent (effective OFF first-writer).
   */
  readonly expectedRevision: number | null;
  readonly mode: FinOpsRolloutMode;
  /** ISO-8601 timestamp; caller-supplied for deterministic tests. */
  readonly updatedAt: string;
};

export type FinOpsRolloutPort = {
  /**
   * Read persisted rollout for a project.
   * Absence of row → null (resolver applies DEFAULT-OFF).
   */
  readonly readProjectRollout: (
    projectId: string,
  ) => Promise<FinOpsRolloutConfig | null>;

  /**
   * Atomic upsert. First write revision=1; subsequent writes revision=previous+1.
   * Explicit mutation always increments revision (including same-mode rewrite).
   * Not conditional on expected mode/revision — operator apply must use CAS.
   */
  readonly upsertProjectRollout: (
    input: UpsertProjectRolloutInput,
  ) => Promise<FinOpsRolloutConfig>;
};

/**
 * Rollout port with atomic expected-mode + revision compare-and-swap.
 * Keeps generic upsert for non-operator / test seed paths without forcing
 * every FinOpsRolloutPort mock to implement CAS.
 */
export type FinOpsRolloutCasPort = FinOpsRolloutPort & {
  /**
   * Atomically mutate when durable state still equals
   * (expectedMode, expectedRevision). Returns the new row on success,
   * or null when the precondition does not match (zero mutation).
   */
  readonly compareAndSwapProjectRollout: (
    input: CompareAndSwapProjectRolloutInput,
  ) => Promise<FinOpsRolloutConfig | null>;
};
