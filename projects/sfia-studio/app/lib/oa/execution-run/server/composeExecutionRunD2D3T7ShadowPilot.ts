/**
 * Execution-run D2-D3 composition wired for T7 SHADOW Option A pilot.
 *
 * Reuses composeExecutionRunD2D3 injection surface unchanged.
 * Reuses composeFinOpsT7ShadowExecutionDeps thin adapter.
 *
 * Anti-claims:
 * - SHADOW NOT ACTIVATED (no durable SHADOW row write).
 * - MONITOR / E1 not activated.
 * - No real provider / Neon / production threshold.
 * - Pilot identity: OPS1_PROJECT_KEY (sfia-studio-ops1) — Morris-selected.
 */

import type { Pool } from "pg";
import { OPS1_PROJECT_KEY } from "@/lib/ops1/types";
import {
  composeFinOpsT7ShadowExecutionDeps,
  type FinOpsT7ShadowDecisionDiagnostic,
  type FinOpsT7ShadowPolicyInput,
} from "../../finops/server/composeFinOpsT7ShadowExecutionDeps";
import type { EvaluateFinOpsEnforcementInput } from "../../finops/application/types.enforcement";
import {
  composeExecutionRunD2D3,
  type ExecutionRunD2D3Composition,
} from "./composeExecutionRunD2D3";
import type { ClockPort } from "../ports/clockPort";
import type { ExecutionRunProviderComposition } from "./composeExecutionRunProviders";
import { assertServerOnly } from "./serverOnly";

/**
 * Morris-selected T7 SHADOW pilot identity — not global project identity.
 * Reuses existing OPS1_PROJECT_KEY constant (= "sfia-studio-ops1").
 */
export const T7_SHADOW_PILOT_PROJECT_ID = OPS1_PROJECT_KEY;

export type ComposeExecutionRunD2D3T7ShadowPilotInput = {
  /** Caller-owned FinOps pool. Never closed here. */
  readonly pool: Pool;
  readonly nowIso?: () => string;
  readonly providers?: ExecutionRunProviderComposition;
  readonly clock?: ClockPort;
  readonly clockIso?: string;
  /**
   * Explicit SHADOW policy injection (TEST or future activation source).
   * Returning null ⇒ allow/not_configured. Effect always forced signal_only by adapter.
   */
  readonly resolveShadowPolicy: (
    input: EvaluateFinOpsEnforcementInput,
  ) =>
    | Promise<FinOpsT7ShadowPolicyInput | null>
    | FinOpsT7ShadowPolicyInput
    | null;
  readonly onShadowDecision?: (
    diagnostic: FinOpsT7ShadowDecisionDiagnostic,
  ) => void | Promise<void>;
};

export type ExecutionRunD2D3T7ShadowPilotComposition =
  ExecutionRunD2D3Composition & {
    readonly pilotProjectId: string;
    readonly resolveProjectRollout: (
      projectId: string,
    ) => Promise<
      import("../../finops/application/types.rollout").FinOpsRolloutInstruction
    >;
    readonly flushAudit: () => Promise<void>;
  };

/**
 * Compose D2-D3 with T7 SHADOW pilot-aware FinOps deps injected.
 * Does not modify composeExecutionRunD2D3 / coordinateExecutionRun sources.
 */
export function composeExecutionRunD2D3T7ShadowPilot(
  input: ComposeExecutionRunD2D3T7ShadowPilotInput,
): ExecutionRunD2D3T7ShadowPilotComposition {
  assertServerOnly("oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot");

  const nowIso =
    input.nowIso ??
    input.clock?.nowIso ??
    (() => input.clockIso ?? "2026-08-08T16:00:00.000Z");

  const shadowDeps = composeFinOpsT7ShadowExecutionDeps({
    pool: input.pool,
    nowIso,
    pilotProjectId: T7_SHADOW_PILOT_PROJECT_ID,
    resolveShadowPolicy: input.resolveShadowPolicy,
    onShadowDecision: input.onShadowDecision,
  });

  const base = composeExecutionRunD2D3({
    providers: input.providers,
    clock: input.clock,
    clockIso: input.clockIso,
    finops: shadowDeps.capture,
    finopsEnforcement: shadowDeps.finopsEnforcement,
  });

  return {
    ...base,
    pilotProjectId: T7_SHADOW_PILOT_PROJECT_ID,
    resolveProjectRollout: shadowDeps.resolveProjectRollout,
    flushAudit: shadowDeps.flushAudit,
  };
}
