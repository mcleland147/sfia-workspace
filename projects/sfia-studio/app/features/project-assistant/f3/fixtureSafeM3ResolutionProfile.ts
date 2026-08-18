/**
 * HARVEST — exact fixture-safe G-UX-15 resolution profile (ZERO REAL only).
 *
 * Provenance: `__tests__/project-assistant/gux15.resolveM3ExecutionContract.test.ts`
 * `fixtureResolution()` + `F3_ACTION` / `F3_TARGET` / `F3_CAPABILITY` / `F3_SCOPE`.
 *
 * NOT a new business provenance model.
 * NOT authorized for Cursor REAL.
 * NOT a generic production action-selection mapping.
 */

import type { M3ResolvedExecutionFields } from "./resolveM3ExecutionContract";
import {
  F3_ACTION,
  F3_CAPABILITY,
  F3_SCOPE,
  F3_TARGET,
} from "./constants";

/**
 * Exact values harvested from the accepted G-UX-15 fixtureResolution().
 * Constraints intentionally omit "PROCESS LOCAL" (same as gux15 test).
 * stopConditions use CONTEXT_STALE / DECISION_NOT_CURRENT (not raw F3_STOP_CONDITIONS).
 */
export function fixtureSafeM3ResolutionProfile(): M3ResolvedExecutionFields {
  return {
    action: F3_ACTION,
    target: F3_TARGET,
    requiredCapabilities: [F3_CAPABILITY],
    reversibility: "reversible",
    scope: F3_SCOPE,
    constraints: [
      "FIXTURE ONLY",
      "TEST ADAPTER ONLY",
      "NO REAL",
      "NO SHELL",
      "NO NETWORK EXECUTION",
      "NO GIT WRITE",
      "NO GITHUB WRITE",
      "NO AUTO RETRY",
    ],
    stopConditions: [
      "AUTHORITY_DENIED",
      "CONTEXT_STALE",
      "DECISION_NOT_CURRENT",
    ],
  };
}

export const FIXTURE_SAFE_M3_SUPERSESSION_REASON =
  "PRE-M6 Option A — resolve durable M3 PREPARE via existing G-UX-15 supersession (fixture-safe ZERO REAL)" as const;
