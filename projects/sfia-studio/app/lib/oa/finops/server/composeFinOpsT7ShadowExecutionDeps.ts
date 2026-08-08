/**
 * FinOps T7 SHADOW — thin adapter: rollout instruction → execution-run deps.
 *
 * Option A wiring (Morris-selected):
 * - Reuses composeFinOpsT7Runtime + createFinOpsEnforcementPort.
 * - Forces effect=signal_only for SHADOW.
 * - Never returns decision=block (defense-in-depth).
 * - MONITOR / E1 paths stay inert (allow).
 * - Pilot-scoped capture/enforcement only.
 *
 * Anti-claims:
 * - Does NOT activate SHADOW (no durable row write).
 * - Does NOT select production thresholds (15/20/25/30 forbidden).
 * - Does NOT create pools, read env, or close caller-owned pool.
 * - Does NOT modify composeFinOpsT7Runtime / T4 / T6 / coordinator sources.
 */

import type { Pool } from "pg";
import { createFinOpsEnforcementPort } from "../application/evaluateFinOpsEnforcement";
import type {
  EvaluateFinOpsEnforcementInput,
  FinOpsEnforcementDecision,
} from "../application/types.enforcement";
import type { FinOpsRolloutInstruction } from "../application/types.rollout";
import { createPostgresFinOpsEnforcementProjectionStore } from "../infrastructure/postgres/postgresFinOpsEnforcementProjectionStore";
import type { FinOpsCapturePort } from "../ports/finopsCapturePort";
import type { FinOpsEnforcementPort } from "../ports/finopsEnforcementPort";
import {
  composeFinOpsT7Runtime,
  type FinOpsT7RuntimeComposition,
} from "./composeFinOpsT7Runtime";

/**
 * Policy fields injectable for SHADOW evaluation.
 * Effect is intentionally omitted — the adapter always forces signal_only.
 */
export type FinOpsT7ShadowPolicyInput = {
  readonly thresholdCode: string;
  readonly currency: string;
  /** Canonical Money scale-8 string; TEST / injected only — not a product default. */
  readonly thresholdAmount: string;
};

export type FinOpsT7ShadowDecisionDiagnostic = {
  readonly projectId: string;
  readonly mode: FinOpsRolloutInstruction["mode"] | "unresolved";
  readonly decision: FinOpsEnforcementDecision["decision"];
  readonly reason: string;
  readonly pilotProjectId: string;
};

export type ComposeFinOpsT7ShadowExecutionDepsInput = {
  /** Caller-owned pool. Never closed by this adapter. */
  readonly pool: Pool;
  readonly nowIso: () => string;
  /**
   * Morris-selected T7 SHADOW pilot identity — not global project identity.
   * Expected production pilot: sfia-studio-ops1 (injected by pilot composer).
   */
  readonly pilotProjectId: string;
  /**
   * Explicit policy injection. Returning null ⇒ T4 allow/not_configured.
   * Must NOT adopt historical 15/20/25/30 as product thresholds.
   */
  readonly resolveShadowPolicy: (
    input: EvaluateFinOpsEnforcementInput,
  ) =>
    | Promise<FinOpsT7ShadowPolicyInput | null>
    | FinOpsT7ShadowPolicyInput
    | null;
  /** Optional observe sink — errors ignored (fail-open). */
  readonly onShadowDecision?: (
    diagnostic: FinOpsT7ShadowDecisionDiagnostic,
  ) => void | Promise<void>;
};

export type FinOpsT7ShadowExecutionDeps = {
  readonly capture: FinOpsCapturePort;
  readonly finopsEnforcement: FinOpsEnforcementPort;
  readonly resolveProjectRollout: FinOpsT7RuntimeComposition["resolveProjectRollout"];
  readonly flushAudit: FinOpsT7RuntimeComposition["flushAudit"];
  readonly pilotProjectId: string;
};

function assertServerOnly(): void {
  if (typeof window !== "undefined") {
    throw new Error(
      "oa/finops/server/composeFinOpsT7ShadowExecutionDeps is server-only and must not run in a browser context.",
    );
  }
}

function allow(reason: string): FinOpsEnforcementDecision {
  return { decision: "allow", reason };
}

function failed(reason: string): FinOpsEnforcementDecision {
  return { decision: "failed", reason, finopsSideOnly: true };
}

/**
 * Defense-in-depth: SHADOW path must never surface `block` to the coordinator.
 * Exported for focused unit proof (T7-SW06).
 */
export function ensureShadowNeverBlocks(
  decision: FinOpsEnforcementDecision,
): FinOpsEnforcementDecision {
  if (decision.decision === "block") {
    return failed("shadow_block_forbidden");
  }
  return decision;
}

async function emitShadowDecision(
  sink: ComposeFinOpsT7ShadowExecutionDepsInput["onShadowDecision"],
  diagnostic: FinOpsT7ShadowDecisionDiagnostic,
): Promise<void> {
  if (!sink) return;
  try {
    await sink(diagnostic);
  } catch {
    // Diagnostic sink failures must never affect provider path.
  }
}

/**
 * Compose pilot-aware FinOps deps for execution-run Option A SHADOW wiring.
 */
export function composeFinOpsT7ShadowExecutionDeps(
  input: ComposeFinOpsT7ShadowExecutionDepsInput,
): FinOpsT7ShadowExecutionDeps {
  assertServerOnly();

  const pilotProjectId = input.pilotProjectId.trim();
  if (!pilotProjectId) {
    throw new Error("pilotProjectId is required for T7 SHADOW execution deps");
  }

  const t7 = composeFinOpsT7Runtime({
    pool: input.pool,
    nowIso: input.nowIso,
  });
  const projection = createPostgresFinOpsEnforcementProjectionStore(input.pool);

  const finopsEnforcement: FinOpsEnforcementPort = {
    async evaluateBeforeProvider(evalInput) {
      let mode: FinOpsT7ShadowDecisionDiagnostic["mode"] = "unresolved";
      try {
        const projectId =
          typeof evalInput.projectId === "string"
            ? evalInput.projectId.trim()
            : "";
        if (!projectId || projectId !== pilotProjectId) {
          const decision = allow("non_pilot_inert");
          await emitShadowDecision(input.onShadowDecision, {
            projectId: projectId || "",
            mode: "OFF",
            decision: decision.decision,
            reason: decision.reason,
            pilotProjectId,
          });
          return decision;
        }

        let instruction: FinOpsRolloutInstruction;
        try {
          instruction = await t7.resolveProjectRollout(projectId);
        } catch {
          const decision = failed("rollout_resolve_failed");
          await emitShadowDecision(input.onShadowDecision, {
            projectId,
            mode: "unresolved",
            decision: decision.decision,
            reason: decision.reason,
            pilotProjectId,
          });
          return decision;
        }

        mode = instruction.mode;

        if (instruction.mode !== "SHADOW") {
          // OFF / MONITOR / E1_ENFORCED / inert — this adapter does not activate them.
          const decision = allow("rollout_not_shadow_inert");
          await emitShadowDecision(input.onShadowDecision, {
            projectId,
            mode,
            decision: decision.decision,
            reason: decision.reason,
            pilotProjectId,
          });
          return decision;
        }

        const port = createFinOpsEnforcementPort({
          projection,
          resolvePolicy: async (policyInput) => {
            let base: FinOpsT7ShadowPolicyInput | null;
            try {
              base = await input.resolveShadowPolicy(policyInput);
            } catch {
              throw new Error("policy_resolver_failed");
            }
            if (!base) return null;
            return {
              thresholdCode: base.thresholdCode,
              currency: base.currency,
              thresholdAmount: base.thresholdAmount,
              effect: "signal_only",
            };
          },
        });

        const decision = ensureShadowNeverBlocks(
          await port.evaluateBeforeProvider(evalInput),
        );

        await emitShadowDecision(input.onShadowDecision, {
          projectId,
          mode,
          decision: decision.decision,
          reason: decision.reason,
          pilotProjectId,
        });
        return decision;
      } catch {
        const decision = failed("shadow_adapter_failed");
        await emitShadowDecision(input.onShadowDecision, {
          projectId:
            typeof evalInput.projectId === "string"
              ? evalInput.projectId.trim()
              : "",
          mode,
          decision: decision.decision,
          reason: decision.reason,
          pilotProjectId,
        });
        return decision;
      }
    },
  };

  const capture: FinOpsCapturePort = {
    async captureUsage(request) {
      try {
        const projectId =
          typeof request.projectId === "string" ? request.projectId.trim() : "";
        if (!projectId || projectId !== pilotProjectId) {
          return {
            status: "disabled",
            reason: "non_pilot_shadow_capture_inactive",
          };
        }

        let instruction: FinOpsRolloutInstruction;
        try {
          instruction = await t7.resolveProjectRollout(projectId);
        } catch {
          return {
            status: "disabled",
            reason: "shadow_capture_rollout_failed_inert",
          };
        }

        if (instruction.mode !== "SHADOW") {
          return {
            status: "disabled",
            reason: "shadow_capture_inactive",
          };
        }

        return t7.capture.captureUsage(request);
      } catch {
        return {
          status: "failed",
          error: {
            code: "FINOPS_CAPTURE_FAILED",
            message: "shadow_capture_adapter_failed",
            retryable: true,
            technicalDetailsRedacted: true,
          },
        };
      }
    },
  };

  return {
    capture,
    finopsEnforcement,
    resolveProjectRollout: t7.resolveProjectRollout,
    flushAudit: t7.flushAudit,
    pilotProjectId,
  };
}
