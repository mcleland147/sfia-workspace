/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — unified Product execution outcome.
 *
 * Normalizes Attempt / CursorExecutionReport / pre-start rejection facts into
 * one server-owned shape consumed by the same post-execution analysis path.
 *
 * NOT Evidence. NOT a second workflow. Status differences are facts, not
 * separate Product analyzers.
 */

import type { CursorExecutionReport } from "@/lib/oa/execution-attempt";

export type ProductExecutionOutcomeKind =
  | "report"
  | "pre_start_reject"
  | "attempt_terminal"
  | "malformed_report"
  | "binding_mismatch";

export type ProductExecutionOutcomeStatus =
  | "succeeded"
  | "failed"
  | "stopped"
  | "timeout"
  | "rejected_pre_start"
  | "binding_refused"
  | "malformed";

export type ProductExecutionOutcome = {
  readonly kind: ProductExecutionOutcomeKind;
  readonly status: ProductExecutionOutcomeStatus;
  readonly projectId: string;
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly contractFingerprint: string | null;
  readonly repositoryRef: string | null;
  readonly baseSha: string | null;
  readonly realProcessInvoked: boolean;
  readonly stopReason: string | null;
  readonly blockers: readonly string[];
  readonly reservations: readonly string[];
  readonly workPerformed: readonly string[];
  readonly authorizedEffectsExecuted: readonly string[];
  readonly stoppedBeforeEffects: readonly string[];
  readonly diagnosticSummary: string | null;
  readonly recommendedNextProductStep: string | null;
  /** Present only when a Cursor process produced a parseable report claim. */
  readonly cursorReport: CursorExecutionReport | null;
  readonly producer: "cursor_report" | "studio_pre_start" | "studio_binding";
};

export function normalizeCursorExecutionReportOutcome(input: {
  readonly projectId: string;
  readonly report: CursorExecutionReport;
  readonly contractFingerprint?: string | null;
}): ProductExecutionOutcome {
  const r = input.report;
  const diagnostic =
    r.missionResult?.diagnosticSummary?.trim() ||
    r.diagnosticSummary?.trim() ||
    null;
  const nextStep =
    r.missionResult?.recommendedNextProductStep?.trim() ||
    r.recommendedNextProductStep?.trim() ||
    null;
  return Object.freeze({
    kind: "report",
    status: r.status,
    projectId: input.projectId,
    executionContractId: r.executionContractId,
    attemptId: r.attemptId,
    contractFingerprint:
      r.contractFingerprint?.trim() || input.contractFingerprint?.trim() || null,
    repositoryRef: r.repositoryRef,
    baseSha: r.baseSha,
    realProcessInvoked: true,
    stopReason: r.stopConditionTriggered?.trim() || null,
    blockers: Object.freeze([...(r.blockers ?? [])]),
    reservations: Object.freeze([...(r.reservations ?? [])]),
    workPerformed: Object.freeze([...(r.workPerformed ?? [])]),
    authorizedEffectsExecuted: Object.freeze([
      ...r.authorizedEffectsExecuted,
    ]),
    stoppedBeforeEffects: Object.freeze([...(r.stoppedBeforeEffects ?? [])]),
    diagnosticSummary: diagnostic,
    recommendedNextProductStep: nextStep,
    cursorReport: r,
    producer: "cursor_report",
  });
}

/**
 * Pre-start reject: Cursor process was never invoked.
 * Must NOT fabricate a CursorExecutionReport.
 */
export function normalizePreStartRejectionOutcome(input: {
  readonly projectId: string;
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly reason: string;
  readonly contractFingerprint?: string | null;
  readonly repositoryRef?: string | null;
  readonly baseSha?: string | null;
  readonly reservations?: readonly string[] | null;
}): ProductExecutionOutcome {
  const reason = input.reason.trim() || "PRE_START_REJECTED";
  return Object.freeze({
    kind: "pre_start_reject",
    status: "rejected_pre_start",
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    attemptId: input.attemptId,
    contractFingerprint: input.contractFingerprint?.trim() || null,
    repositoryRef: input.repositoryRef?.trim() || null,
    baseSha: input.baseSha?.trim() || null,
    realProcessInvoked: false,
    stopReason: reason,
    blockers: Object.freeze([reason]),
    reservations: Object.freeze([...(input.reservations ?? [])]),
    workPerformed: Object.freeze([] as string[]),
    authorizedEffectsExecuted: Object.freeze([] as string[]),
    stoppedBeforeEffects: Object.freeze([] as string[]),
    diagnosticSummary: `Exécution refusée avant invocation Cursor — ${reason}`,
    recommendedNextProductStep:
      "Corriger la condition de rejet pré-start, puis re-décider / re-préparer le contrat (pas de relance automatique).",
    cursorReport: null,
    producer: "studio_pre_start",
  });
}

export function normalizeBindingMismatchOutcome(input: {
  readonly projectId: string;
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly code: string;
  readonly message: string;
  readonly realProcessInvoked: boolean;
}): ProductExecutionOutcome {
  return Object.freeze({
    kind: "binding_mismatch",
    status: "binding_refused",
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    attemptId: input.attemptId,
    contractFingerprint: null,
    repositoryRef: null,
    baseSha: null,
    realProcessInvoked: input.realProcessInvoked,
    stopReason: input.code,
    blockers: Object.freeze([input.code, input.message]),
    reservations: Object.freeze([] as string[]),
    workPerformed: Object.freeze([] as string[]),
    authorizedEffectsExecuted: Object.freeze([] as string[]),
    stoppedBeforeEffects: Object.freeze([] as string[]),
    diagnosticSummary: `Correspondance rapport↔Attempt↔contrat refusée — ${input.code}: ${input.message}`,
    recommendedNextProductStep:
      "Ne pas traiter le rapport comme preuve ; inspecter le binding et rejouer uniquement après HumanDecision.",
    cursorReport: null,
    producer: "studio_binding",
  });
}
