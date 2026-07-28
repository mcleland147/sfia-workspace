/**
 * TEST-ONLY support for MethodMode hold overrides.
 *
 * Import exclusively from files under `app/__tests__/`.
 * Never re-export from `lib/d1/index.ts` or any runtime barrel.
 */
import { methodModeHoldOverrideSlot } from "@/lib/d1/methodModeHold.store";
import type { MethodModeHoldState } from "@/lib/d1/methodModeHold.types";

export function resetMethodModeHoldForTests(): void {
  methodModeHoldOverrideSlot.current = null;
}

export function setMethodModeHoldForTests(
  state: Omit<MethodModeHoldState, "evaluatedAt" | "provenance" | "completeness"> &
    Partial<
      Pick<MethodModeHoldState, "evaluatedAt" | "provenance" | "completeness">
    >,
): void {
  methodModeHoldOverrideSlot.current = {
    active: state.active,
    reasons: Object.freeze([...state.reasons]),
    evaluatedAt: state.evaluatedAt ?? new Date().toISOString(),
    provenance: state.provenance ?? "test-override",
    completeness: state.completeness ?? "BOUNDED_LOT_1",
  };
}
