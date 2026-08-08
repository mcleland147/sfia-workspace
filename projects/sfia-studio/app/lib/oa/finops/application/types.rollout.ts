/**
 * FinOps T7 — rollout / activation readiness types (foundation only).
 *
 * T7 owns mode vocabulary and rollout resolution.
 * T4 owns monetary enforcement evaluation.
 * T3 owns human-review state.
 *
 * Anti-claims:
 * - Mode presence ≠ activation.
 * - No monetary threshold / currency / IAM / actor fields.
 * - Foundation Ready ≠ SHADOW / MONITOR / E1 activated.
 */

export type FinOpsRolloutMode =
  | "OFF"
  | "SHADOW"
  | "MONITOR"
  | "E1_ENFORCED";

export type FinOpsRolloutConfig = {
  readonly projectId: string;
  readonly mode: FinOpsRolloutMode;
  readonly revision: number;
  readonly updatedAt: string;
};

export type FinOpsRolloutPolicyEffect = "signal_only" | "enforce" | null;

export type FinOpsRolloutActivationState =
  | "inert"
  | "configured_not_activated";

export type FinOpsRolloutResolution =
  | "default_off"
  | "persisted"
  | "fail_open_off";

/**
 * T7-owned runtime instruction. Architectural representation only.
 * blockingAllowed=true for E1 does NOT activate enforcement consumers.
 */
export type FinOpsRolloutInstruction = {
  readonly mode: FinOpsRolloutMode;
  readonly evaluateT4: boolean;
  readonly policyEffect: FinOpsRolloutPolicyEffect;
  readonly blockingAllowed: boolean;
  readonly requiresT3Sync: boolean;
  readonly activationState: FinOpsRolloutActivationState;
  readonly resolution: FinOpsRolloutResolution;
  /** Present only when a persisted row was successfully read. */
  readonly config: FinOpsRolloutConfig | null;
};

export const FINOPS_ROLLOUT_MODES: ReadonlyArray<FinOpsRolloutMode> = [
  "OFF",
  "SHADOW",
  "MONITOR",
  "E1_ENFORCED",
] as const;

export function isFinOpsRolloutMode(value: string): value is FinOpsRolloutMode {
  return (FINOPS_ROLLOUT_MODES as ReadonlyArray<string>).includes(value);
}
