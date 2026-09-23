/**
 * Build MissionResultPayload from a validated CursorExecutionReport (+ optional
 * structured mission fields). Report alone is NOT Evidence.
 */
import {
  mintCursorExecutionReportId,
  type CursorExecutionReport,
} from "@/lib/oa/execution-attempt";
import {
  OA_MISSION_RESULT_SCHEMA,
  type MissionResultPayload,
} from "@/lib/oa/evidence-review/application/missionResultPayload";

export type CursorMissionResultClaim = {
  readonly diagnosticSummary: string;
  readonly recommendedNextProductStep: string;
  readonly inspectedDurableTrace?: string;
};

/** Additive optional claim on CursorExecutionReport (backward compatible). */
export type CursorExecutionReportWithMission = CursorExecutionReport & {
  readonly missionResult?: CursorMissionResultClaim;
};

export function buildMissionResultPayloadFromReport(input: {
  report: CursorExecutionReportWithMission;
  /** Fallback diagnostic when report.missionResult absent but stdout carries text. */
  fallbackDiagnosticSummary?: string | null;
  fallbackRecommendedNextStep?: string | null;
  fallbackInspectedTrace?: string | null;
}):
  | { ok: true; payload: MissionResultPayload }
  | { ok: false; code: string; message: string } {
  const claim = input.report.missionResult;
  const diagnosticSummary = (
    claim?.diagnosticSummary ??
    input.fallbackDiagnosticSummary ??
    ""
  ).trim();
  const recommendedNextProductStep = (
    claim?.recommendedNextProductStep ??
    input.fallbackRecommendedNextStep ??
    ""
  ).trim();
  if (!diagnosticSummary || !recommendedNextProductStep) {
    return {
      ok: false,
      code: "MISSION_RESULT_FIELDS_REQUIRED",
      message:
        "Mission result requires diagnosticSummary + recommendedNextProductStep (report claim or structured fallback).",
    };
  }
  const inspected =
    (claim?.inspectedDurableTrace ?? input.fallbackInspectedTrace ?? "").trim() ||
    undefined;
  const reportId =
    input.report.reportId?.trim() ||
    mintCursorExecutionReportId({
      attemptId: input.report.attemptId,
      executionContractId: input.report.executionContractId,
    });
  return {
    ok: true,
    payload: {
      schemaVersion: OA_MISSION_RESULT_SCHEMA,
      reportId,
      attemptId: input.report.attemptId,
      executionContractId: input.report.executionContractId,
      repositoryRef: input.report.repositoryRef,
      baseSha: input.report.baseSha,
      status: input.report.status,
      diagnosticSummary,
      recommendedNextProductStep,
      ...(inspected ? { inspectedDurableTrace: inspected } : {}),
      authorizedEffectsExecuted: [...input.report.authorizedEffectsExecuted],
    },
  };
}
