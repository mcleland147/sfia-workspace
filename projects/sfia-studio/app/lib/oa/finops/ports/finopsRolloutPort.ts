/**
 * FinOps T7 — project-scoped rollout config port (internal FinOps only).
 *
 * NOT a product activation endpoint.
 * NOT a privileged Morris mutation API.
 * Upsert exists for future distinct activation cycles / tests only.
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
   */
  readonly upsertProjectRollout: (
    input: UpsertProjectRolloutInput,
  ) => Promise<FinOpsRolloutConfig>;
};
