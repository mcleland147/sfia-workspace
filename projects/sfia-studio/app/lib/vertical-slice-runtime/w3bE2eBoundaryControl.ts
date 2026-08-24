/**
 * W3-B TEST-ONLY external-boundary arming (E2E / integration).
 * Arms TestExecutionAdapter fail OR a post-start governed stop code.
 * Never creates Product Outcome directly. Disabled outside E2E gates.
 */

import type { TestExecutionAdapter } from "@/lib/oa/execution-attempt";

export type W3bBoundaryArm =
  | {
      readonly kind: "adapter_fail";
      readonly reason: string;
    }
  | {
      readonly kind: "governed_stop";
      /** Must match an EC stopCondition or PROTECTED:* constraint. */
      readonly stopCondition: string;
    };

const ARM_KEY = "__SFIA_E2E_W3B_BOUNDARY_ARM__" as const;

function armSlot(): { current: W3bBoundaryArm | null } {
  const g = globalThis as typeof globalThis & {
    [ARM_KEY]?: { current: W3bBoundaryArm | null };
  };
  if (!g[ARM_KEY]) g[ARM_KEY] = { current: null };
  return g[ARM_KEY];
}

export function isW3bBoundaryControlEnabled(): boolean {
  if (process.env.NODE_ENV === "production") return false;
  if (process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL !== "1") return false;
  if (process.env.OPS1_CONVERSATION_PROVIDER !== "fake") return false;
  if (process.env.SFIA_STUDIO_CURSOR_REAL === "1") return false;
  if (process.env.OPS1_CURSOR_REAL === "1") return false;
  if (
    process.env.SFIA_STUDIO_E2E_QA_CONTROL !== "1" &&
    process.env.VITEST !== "true" &&
    process.env.NODE_ENV !== "test"
  ) {
    return false;
  }
  return true;
}

export function armW3bBoundary(arm: W3bBoundaryArm): void {
  if (!isW3bBoundaryControlEnabled()) {
    throw new Error("W3B_BOUNDARY_CONTROL_DISABLED");
  }
  armSlot().current = arm;
}

export function peekW3bBoundaryArm(): W3bBoundaryArm | null {
  return armSlot().current;
}

export function consumeW3bBoundaryArm(): W3bBoundaryArm | null {
  const slot = armSlot();
  const current = slot.current;
  slot.current = null;
  return current;
}

export function clearW3bBoundaryArm(): void {
  armSlot().current = null;
}

export function applyW3bAdapterFailArmIfPresent(
  fixtureAdapter: TestExecutionAdapter | null | undefined,
): boolean {
  const arm = peekW3bBoundaryArm();
  if (!arm || arm.kind !== "adapter_fail" || !fixtureAdapter) return false;
  consumeW3bBoundaryArm();
  fixtureAdapter.queueDefaultLaunch({
    outcome: "fail",
    reason: arm.reason,
  });
  return true;
}
