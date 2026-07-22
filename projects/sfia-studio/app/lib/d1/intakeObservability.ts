/**
 * D1 intake observability — structured logs, no full intent/project body.
 * RGPD: lengths, counts, bands, statuses only.
 */

export type IntakeLogEvent =
  | "intake_opened"
  | "intake_intent_submitted"
  | "intake_manual_creation_opened"
  | "intake_resume_project_opened"
  | "intake_cancelled"
  | "intake_analysis_started"
  | "intake_clarification_requested"
  | "intake_clarification_answered"
  | "intake_proposal_generated"
  | "intake_analysis_only_generated"
  | "intake_provider_failed"
  | "intake_proposal_rejected"
  | "intake_session_cancelled"
  | "intake_context_lookup_started"
  | "intake_context_snapshot_built"
  | "intake_context_match_generated"
  | "intake_context_match_ambiguous"
  | "intake_context_no_match"
  | "intake_context_unavailable"
  | "intake_context_candidate_selected"
  | "intake_context_selection_cleared"
  | "intake_confirmation_presented"
  | "intake_confirmation_cancelled"
  | "intake_project_creation_confirmed"
  | "intake_project_created"
  | "intake_project_creation_replayed"
  | "intake_existing_project_confirmed"
  | "intake_existing_project_conflict"
  | "intake_mutation_rejected"
  | "intake_mutation_failed"
  | "intake_analyze_only_completed";

export function logIntakeEvent(
  event: IntakeLogEvent,
  payload: {
    status?: string;
    intentLength?: number;
    projectId?: string;
    sessionLocalId?: string;
    durationMs?: number;
    providerMode?: "fake" | "live";
    errorCode?: string;
    proposalId?: string;
    sourceProjectCount?: number;
    candidateCount?: number;
    topScoreBand?: string;
    truncationApplied?: boolean;
  } = {},
): void {
  const line = JSON.stringify({
    event,
    ts: new Date().toISOString(),
    status: payload.status ?? "ok",
    intentLength: payload.intentLength,
    projectId: payload.projectId,
    sessionLocalId: payload.sessionLocalId,
    durationMs: payload.durationMs,
    providerMode: payload.providerMode,
    errorCode: payload.errorCode,
    proposalId: payload.proposalId,
    sourceProjectCount: payload.sourceProjectCount,
    candidateCount: payload.candidateCount,
    topScoreBand: payload.topScoreBand,
    truncationApplied: payload.truncationApplied,
  });
  console.info(`[d1.intake] ${line}`);
}
