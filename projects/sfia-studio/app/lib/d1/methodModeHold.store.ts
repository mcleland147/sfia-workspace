/**
 * Internal MethodMode hold override slot.
 * Not part of the public D1 API — do not import from runtime barrels.
 * Writable only from `methodModeHold.test-only.ts` (tests).
 */
import type { MethodModeHoldState } from "./methodModeHold.types";

export const methodModeHoldOverrideSlot: {
  current: MethodModeHoldState | null;
} = {
  current: null,
};
