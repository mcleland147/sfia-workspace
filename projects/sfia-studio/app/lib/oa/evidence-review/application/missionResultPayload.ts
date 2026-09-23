/**
 * Mission Result payload — structured Product diagnostic/mission output.
 * Durable via filesystem location + sha256 digest (docs_write pattern).
 * CursorExecutionReport may carry an optional missionResult claim; this
 * payload is the server-validated Evidence body — report alone is NOT Evidence.
 */
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";

export const OA_MISSION_RESULT_SCHEMA = "oa.mission-result.1" as const;

export const PRODUCT_MISSION_FROM_DURABLE_CONTEXT =
  "PRODUCT_MISSION_FROM_DURABLE_CONTEXT" as const;

export const MISSION_RESULT_ER_KEY =
  "evreq:mission-result-for-nora-reevaluation" as const;

/** Exact EO templates stamped by deriveActualExecutionWorkFromProductContext. */
export const MISSION_DIAGNOSTIC_EO_TEMPLATE =
  "Diagnostic utilisable des preuves manquantes / expected outcomes non tenus" as const;

/** Clarify-first (pre-engagement) diagnostic EO — same mission semantic. */
export const MISSION_CLARIFY_DIAGNOSTIC_EO_TEMPLATE =
  "Diagnostic des réserves / incertitudes bloquantes" as const;

export const MISSION_NEXT_STEP_EO_TEMPLATE =
  "Prochaine étape produit recommandée (sans relance automatique)" as const;

/** Clarify-first next-step EO — same mission semantic. */
export const MISSION_CLARIFY_NEXT_STEP_EO_TEMPLATE =
  "Prochaine étape produit recommandée (sans exécution automatique)" as const;

export const MISSION_DIAGNOSTIC_EO_TEMPLATES = [
  MISSION_DIAGNOSTIC_EO_TEMPLATE,
  MISSION_CLARIFY_DIAGNOSTIC_EO_TEMPLATE,
] as const;

export const MISSION_NEXT_STEP_EO_TEMPLATES = [
  MISSION_NEXT_STEP_EO_TEMPLATE,
  MISSION_CLARIFY_NEXT_STEP_EO_TEMPLATE,
] as const;

export const MISSION_TRACE_EO_PREFIX = "Trace d'inspection Attempt " as const;

export type MissionResultPayload = {
  readonly schemaVersion: typeof OA_MISSION_RESULT_SCHEMA;
  readonly reportId: string;
  readonly attemptId: string;
  readonly executionContractId: string;
  readonly repositoryRef: string;
  readonly baseSha: string;
  readonly status: "succeeded" | "failed" | "stopped" | "timeout";
  /** Non-empty product diagnostic — proves diagnostic EO when valid. */
  readonly diagnosticSummary: string;
  /** Non-empty recommended next product step — proves next-step EO. */
  readonly recommendedNextProductStep: string;
  /** Optional inspected durable-facts trace (Attempt/Evidence/RB). */
  readonly inspectedDurableTrace?: string;
  readonly authorizedEffectsExecuted: readonly string[];
};

export function isMissionResultPayload(
  value: unknown,
): value is MissionResultPayload {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    v.schemaVersion === OA_MISSION_RESULT_SCHEMA &&
    typeof v.reportId === "string" &&
    (v.reportId as string).trim().length > 0 &&
    typeof v.attemptId === "string" &&
    typeof v.executionContractId === "string" &&
    typeof v.repositoryRef === "string" &&
    typeof v.baseSha === "string" &&
    typeof v.status === "string" &&
    typeof v.diagnosticSummary === "string" &&
    typeof v.recommendedNextProductStep === "string" &&
    Array.isArray(v.authorizedEffectsExecuted)
  );
}

export function canonicalizeMissionResultPayload(
  payload: MissionResultPayload,
): string {
  return JSON.stringify({
    schemaVersion: payload.schemaVersion,
    reportId: payload.reportId,
    attemptId: payload.attemptId,
    executionContractId: payload.executionContractId,
    repositoryRef: payload.repositoryRef,
    baseSha: payload.baseSha,
    status: payload.status,
    diagnosticSummary: payload.diagnosticSummary.trim(),
    recommendedNextProductStep: payload.recommendedNextProductStep.trim(),
    ...(payload.inspectedDurableTrace
      ? { inspectedDurableTrace: payload.inspectedDurableTrace.trim() }
      : {}),
    authorizedEffectsExecuted: [...payload.authorizedEffectsExecuted],
  });
}

export function digestMissionResultPayload(
  payload: MissionResultPayload,
): Digest {
  const hex = createHash("sha256")
    .update(canonicalizeMissionResultPayload(payload), "utf8")
    .digest("hex");
  return `sha256:${hex}`;
}

export function missionResultLocationForAttempt(attemptId: string): string {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  return `refs/attempts/${segment}/mission-result.json`;
}

/**
 * Read-only mutating effects forbidden for diagnostic/read mission.
 * Any of these on the report → fail-closed for mission PASS.
 */
export const MISSION_READ_FORBIDDEN_EFFECTS = new Set([
  "filesystem.create",
  "filesystem.modify",
  "filesystem.delete",
  "git.commit",
  "git.push",
  "github.pr.create",
  "github.pr.update",
  "github.pr.merge",
]);

export function missionResultHasForbiddenEffects(
  effects: readonly string[],
): boolean {
  return effects.some((e) => MISSION_READ_FORBIDDEN_EFFECTS.has(e));
}
