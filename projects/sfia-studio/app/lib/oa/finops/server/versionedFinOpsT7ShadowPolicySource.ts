/**
 * FinOps T7 SHADOW — Option A versioned / composition-owned policy source.
 *
 * Git-versioned, server-side, project-scoped. EMPTY by default this Delivery.
 *
 * Anti-claims:
 * - Does NOT select operational policy values (thresholdCode / currency / amount).
 * - Does NOT activate SHADOW / MONITOR / E1.
 * - Does NOT read env, DB, secrets, or OPS1.
 * - Does NOT mutate rollout / finops_rollout_config.
 * - Does NOT introduce process-local cache registries.
 * - Absence of entry ⇒ null ⇒ T4 allow/not_configured.
 */

import type { EvaluateFinOpsEnforcementInput } from "../application/types.enforcement";
import type { FinOpsT7ShadowPolicyInput } from "./composeFinOpsT7ShadowExecutionDeps";

function assertServerOnly(): void {
  if (typeof window !== "undefined") {
    throw new Error(
      "oa/finops/server/versionedFinOpsT7ShadowPolicySource is server-only and must not run in a browser context.",
    );
  }
}

/**
 * Typed resolver compatible with resolveShadowPolicy injection.
 */
export type ResolveVersionedFinOpsT7ShadowPolicy = (
  input: EvaluateFinOpsEnforcementInput,
) => FinOpsT7ShadowPolicyInput | null;

/**
 * Git-versioned project-scoped SHADOW policy table.
 * Intentionally EMPTY — ACTIVE POLICY ENTRIES = 0.
 * Future entries would be added only under a Morris GO for policy values.
 */
const VERSIONED_FINOPS_T7_SHADOW_POLICY_BY_PROJECT_ID: Readonly<
  Record<string, FinOpsT7ShadowPolicyInput>
> = Object.freeze({});

/**
 * Resolve SHADOW policy from the Option A versioned source.
 * Returns null for empty/unknown projectId and for any project without an entry.
 */
export function resolveVersionedFinOpsT7ShadowPolicy(
  input: EvaluateFinOpsEnforcementInput,
): FinOpsT7ShadowPolicyInput | null {
  assertServerOnly();
  const projectId =
    typeof input.projectId === "string" ? input.projectId.trim() : "";
  if (!projectId) {
    return null;
  }
  return VERSIONED_FINOPS_T7_SHADOW_POLICY_BY_PROJECT_ID[projectId] ?? null;
}
