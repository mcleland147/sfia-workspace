/**
 * FinOps T4 — Coordinator-facing enforcement port (ENF-B boundary).
 *
 * Coordinator must not know SQL, projection internals, threshold catalogs,
 * T7 modes, T5, or T3 store.
 */

import type {
  EvaluateFinOpsEnforcementInput,
  FinOpsEnforcementDecision,
} from "../application/types.enforcement";

export type FinOpsEnforcementPort = {
  readonly evaluateBeforeProvider: (
    input: EvaluateFinOpsEnforcementInput,
  ) => Promise<FinOpsEnforcementDecision>;
};
