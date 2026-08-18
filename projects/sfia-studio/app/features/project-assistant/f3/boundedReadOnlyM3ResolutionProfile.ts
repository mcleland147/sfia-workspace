/**
 * Sibling M3 resolution profile for the future governed REAL bounded
 * read-only path (GAP-1).
 *
 * Values are harvested from the existing M4 descriptor
 * `createM4BoundedReadOnlyCursorAgentDescriptor` — not invented here.
 *
 * RESERVE: scope is historically named `studio.m4.real_off`. This cycle
 * does not "correct" that name. The existing descriptor is source of truth.
 *
 * NOT a new engine. NOT client-injectable. NOT authorized live REAL in this cycle.
 */

import {
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
} from "@/lib/oa/execution-attempt";
import { DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS } from "@/lib/oa/execution-contract";
import type { M3ResolvedExecutionFields } from "./resolveM3ExecutionContract";

export function boundedReadOnlyM3ResolutionProfile(): M3ResolvedExecutionFields {
  return {
    action: M4_BOUNDED_RO_ACTION,
    target: M4_BOUNDED_RO_TARGET,
    requiredCapabilities: [M4_BOUNDED_RO_CAPABILITY],
    reversibility: "reversible",
    scope: M4_BOUNDED_RO_SCOPE,
    constraints: [
      "BOUNDED READ-ONLY",
      "CURSOR CLI REAL PROFILE",
      "GATE D REQUIRED",
      "NO GIT WRITE",
      "NO GITHUB WRITE",
      "NO CLIENT COMMAND",
      "NO WILDCARD",
    ],
    stopConditions: [
      "AUTHORITY_DENIED",
      "CONTEXT_STALE",
      "DECISION_NOT_CURRENT",
      "GATE_D_REQUIRED",
      "REAL_BOUNDARY_DISABLED",
    ],
    executionWindowClass: DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
  };
}

export const BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON =
  "PRE-M6 Option A — resolve durable M3 PREPARE via existing G-UX-15 supersession (bounded read-only Cursor REAL profile; ZERO LIVE in this cycle)" as const;
