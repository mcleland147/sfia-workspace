/**
 * FinOps T7 — rollout resolver / mode adapter (foundation).
 *
 * Responsibilities:
 * 1. read project-scoped config
 * 2. missing row → OFF (default_off)
 * 3. store technical failure → fail-open OFF
 * 4. translate mode → T7 instruction
 *
 * Never evaluates T4, never reads enforcement projection, never calls provider,
 * never supplies monetary thresholds.
 */

import type { FinOpsRolloutPort } from "../ports/finopsRolloutPort";
import type {
  FinOpsRolloutConfig,
  FinOpsRolloutInstruction,
  FinOpsRolloutMode,
} from "./types.rollout";

export type ResolveFinOpsRolloutDeps = {
  readonly rollout: FinOpsRolloutPort;
};

function instructionFor(
  mode: FinOpsRolloutMode,
  resolution: FinOpsRolloutInstruction["resolution"],
  config: FinOpsRolloutConfig | null,
): FinOpsRolloutInstruction {
  switch (mode) {
    case "OFF":
      return {
        mode: "OFF",
        evaluateT4: false,
        policyEffect: null,
        blockingAllowed: false,
        requiresT3Sync: false,
        activationState: "inert",
        resolution,
        config,
      };
    case "SHADOW":
      return {
        mode: "SHADOW",
        evaluateT4: true,
        policyEffect: "signal_only",
        blockingAllowed: false,
        requiresT3Sync: false,
        activationState: "configured_not_activated",
        resolution,
        config,
      };
    case "MONITOR":
      return {
        mode: "MONITOR",
        evaluateT4: true,
        policyEffect: "signal_only",
        blockingAllowed: false,
        requiresT3Sync: true,
        activationState: "configured_not_activated",
        resolution,
        config,
      };
    case "E1_ENFORCED":
      return {
        mode: "E1_ENFORCED",
        evaluateT4: true,
        policyEffect: "enforce",
        blockingAllowed: true,
        requiresT3Sync: true,
        activationState: "configured_not_activated",
        resolution,
        config,
      };
    default: {
      const _exhaustive: never = mode;
      return _exhaustive;
    }
  }
}

function offInstruction(
  resolution: "default_off" | "fail_open_off",
): FinOpsRolloutInstruction {
  return instructionFor("OFF", resolution, null);
}

/**
 * Resolve project rollout. Invalid / empty projectId → fail-open OFF
 * (never throws raw DB details).
 */
export async function resolveFinOpsRollout(
  deps: ResolveFinOpsRolloutDeps,
  projectId: string,
): Promise<FinOpsRolloutInstruction> {
  const trimmed = typeof projectId === "string" ? projectId.trim() : "";
  if (!trimmed) {
    return offInstruction("fail_open_off");
  }

  try {
    const config = await deps.rollout.readProjectRollout(trimmed);
    if (config === null) {
      return offInstruction("default_off");
    }
    return instructionFor(config.mode, "persisted", config);
  } catch {
    return offInstruction("fail_open_off");
  }
}
