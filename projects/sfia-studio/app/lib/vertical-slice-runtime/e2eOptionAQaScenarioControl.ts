/**
 * E2E-ONLY Option A QA control core (QA-PRE-M6-TEST-01).
 * Lives under vertical-slice-runtime — NO @/features imports.
 */

import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "./singleton";
import type { RuntimeApplicationService } from "./service";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import { LOCAL_MORRIS_M3_ACTOR } from "@/lib/oa/decision";

export const OPTION_A_QA_SCENARIOS = [
  "recommendation_stale",
  "attempt_failed",
  "attempt_timeout",
  "attempt_cancelled",
  "evidence_missing",
  "rehydrate_read_failure",
  "reset",
] as const;

export type OptionAQaScenario = (typeof OPTION_A_QA_SCENARIOS)[number];

export type OptionAQaControlResult =
  | {
      ok: true;
      scenario: OptionAQaScenario;
      detail: string;
      attemptId?: string;
      attemptStatus?: string;
      evidenceId?: string;
      armedForConfirm?: boolean;
    }
  | { ok: false; code: string; message: string };

export type ArmedTerminal = {
  scenario:
    | "attempt_failed"
    | "attempt_timeout"
    | "attempt_cancelled"
    | "evidence_missing";
  projectId: string;
  decisionId: string;
  executionContractId: string;
};

const ARMED_GLOBAL_KEY = "__SFIA_E2E_OPTION_A_QA_ARMED__" as const;

function armedSlot(): { current: ArmedTerminal | null } {
  const g = globalThis as typeof globalThis & {
    [ARMED_GLOBAL_KEY]?: { current: ArmedTerminal | null };
  };
  if (!g[ARMED_GLOBAL_KEY]) {
    g[ARMED_GLOBAL_KEY] = { current: null };
  }
  return g[ARMED_GLOBAL_KEY];
}

/** Hard enablement gate — every condition must hold. */
export function isOptionAQaControlEnabled(input?: {
  fixtureExternalEffects?: boolean;
}): boolean {
  if (process.env.NODE_ENV === "production") return false;
  if (process.env.OPS1_E2E_ALLOW_DIRTY_PRINCIPAL !== "1") return false;
  if (process.env.OPS1_CONVERSATION_PROVIDER !== "fake") return false;
  if (process.env.SFIA_STUDIO_E2E_QA_CONTROL !== "1") return false;
  if (process.env.SFIA_STUDIO_CURSOR_REAL === "1") return false;
  if (process.env.OPS1_CURSOR_REAL === "1") return false;
  if (input?.fixtureExternalEffects === true) return false;
  return true;
}

export function isKnownOptionAQaScenario(
  value: string,
): value is OptionAQaScenario {
  return (OPTION_A_QA_SCENARIOS as readonly string[]).includes(value);
}

export function rejectUnknownOptionAQaFields(
  body: Record<string, unknown>,
): string | null {
  const allowed = new Set([
    "scenario",
    "projectId",
    "decisionId",
    "executionContractId",
    "attemptId",
  ]);
  for (const key of Object.keys(body)) {
    if (!allowed.has(key)) return key;
  }
  return null;
}

export function consumeArmedTerminalForConfirm(input: {
  projectId: string;
  decisionId: string;
  executionContractId: string;
}): ArmedTerminal | null {
  if (!isOptionAQaControlEnabled()) return null;
  const slot = armedSlot();
  const armed = slot.current;
  if (!armed) return null;
  if (
    armed.projectId !== input.projectId ||
    armed.decisionId !== input.decisionId ||
    armed.executionContractId !== input.executionContractId
  ) {
    return null;
  }
  slot.current = null;
  return armed;
}

export function peekArmedTerminal(): ArmedTerminal | null {
  return armedSlot().current;
}

export function armTerminalScenario(armed: ArmedTerminal): void {
  armedSlot().current = armed;
}

export function clearArmedTerminal(): void {
  armedSlot().current = null;
}

const SYSTEM_FACTUAL_ACTOR = {
  actorId: "actor:sfia-studio-system-factual-writer",
  role: "system" as const,
  displayName: "SFIA Studio system factual state writer",
  authorityLevel: "none" as const,
};

export async function runRecommendationStaleScenario(
  runtime: RuntimeApplicationService,
  projectId: string,
): Promise<OptionAQaControlResult> {
  if (!runtime.oa) {
    return { ok: false, code: "OA_STACK_UNAVAILABLE", message: "OA missing" };
  }
  const current =
    await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
  if (!current.ok) {
    return {
      ok: false,
      code: current.error.detailCode,
      message: current.error.message,
    };
  }
  const lps = current.livingProjectState;
  if ((lps.evidenceIds ?? []).length === 0) {
    return {
      ok: false,
      code: "NO_PRIOR_EVIDENCE",
      message: "recommendation_stale requires prior durable Evidence on LPS.",
    };
  }

  const newEvidenceId = `ev:e2e-stale-supersede:${Date.now()}`;
  const registered =
    await runtime.oa.evidenceReviewServices.registerEvidence.execute({
      evidenceId: newEvidenceId,
      idempotencyKey: `idem:e2e-stale:${newEvidenceId}`,
      actor: SYSTEM_FACTUAL_ACTOR,
      type: "document",
      source: "e2e-qa-harness-supersession",
      sourceKind: "system",
      bindings: { projectId },
      classification: "internal",
      storageMode: "metadata_only",
      status: "available",
    });
  if (!registered.ok) {
    return {
      ok: false,
      code: registered.error.detailCode,
      message: registered.error.message,
    };
  }

  const appended =
    await runtime.oa.projectServices.appendLivingProjectStateVersion.execute({
      projectId,
      expectedVersion: lps.version,
      objective: lps.objective,
      context: lps.context,
      scope: lps.scope,
      createdBy: SYSTEM_FACTUAL_ACTOR,
      evidenceIds: [newEvidenceId],
      reviewBundleIds: [...(lps.reviewBundleIds ?? [])],
    });
  if (!appended.ok) {
    return {
      ok: false,
      code: appended.error.detailCode,
      message: appended.error.message,
    };
  }

  return {
    ok: true,
    scenario: "recommendation_stale",
    detail:
      "Durable LPS Evidence superseded — client must refresh durable readback for STALE.",
    evidenceId: newEvidenceId,
  };
}

export async function runRehydrateReadFailureScenario(
  runtime: RuntimeApplicationService,
  projectId: string,
): Promise<OptionAQaControlResult> {
  if (!runtime.oa) {
    return { ok: false, code: "OA_STACK_UNAVAILABLE", message: "OA missing" };
  }
  const current =
    await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
  if (!current.ok) {
    return {
      ok: false,
      code: current.error.detailCode,
      message: current.error.message,
    };
  }
  const lps = current.livingProjectState;
  const missingId = `ev:e2e-missing-rehydrate:${Date.now()}`;
  const appended =
    await runtime.oa.projectServices.appendLivingProjectStateVersion.execute({
      projectId,
      expectedVersion: lps.version,
      objective: lps.objective,
      context: lps.context,
      scope: lps.scope,
      createdBy: SYSTEM_FACTUAL_ACTOR,
      evidenceIds: [missingId],
      reviewBundleIds: [...(lps.reviewBundleIds ?? [])],
    });
  if (!appended.ok) {
    return {
      ok: false,
      code: appended.error.detailCode,
      message: appended.error.message,
    };
  }
  return {
    ok: true,
    scenario: "rehydrate_read_failure",
    detail:
      "LPS points at missing Evidence — reload triggers durable-rehydrate-error.",
    evidenceId: missingId,
  };
}

export function setProductFailNextSave(
  runtime: RuntimeApplicationService,
  value: "evidence" | "attempt" | "review_bundle" | null,
): boolean {
  const store = runtime.oa?.projectServices.store;
  if (!(store instanceof SqliteProductStore)) return false;
  store.failNextSave = value;
  return true;
}

export function resetOptionAQaRuntime(): OptionAQaControlResult {
  // Dev webServer uses NODE_ENV=development — allow reset only behind E2E gates.
  const prev = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  try {
    resetRuntimeApplicationServiceForTests();
  } finally {
    if (prev === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prev;
  }
  clearArmedTerminal();
  return {
    ok: true,
    scenario: "reset",
    detail: "Runtime singleton reset; armed terminal cleared.",
  };
}

export function getOptionAQaRuntime(): RuntimeApplicationService {
  return getRuntimeApplicationService();
}

void LOCAL_MORRIS_M3_ACTOR;
