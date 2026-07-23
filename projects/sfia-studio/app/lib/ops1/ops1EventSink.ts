/**
 * TEMP_OPS1_PLATFORM_WRAPPER — EventSink → OPS1 session_events.
 * Remove when OPS1 session event store is retired or fully domain-owned.
 */
import type { DatabaseSync } from "node:sqlite";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import { createEventId } from "./ids";
import { openOps1Db, nowIsoWithOffset } from "./db";
import { redactSecrets } from "@/lib/platform/security/redaction";
import type { SessionEventType } from "./types";

const TECHNICAL_TO_OPS1: Record<string, SessionEventType> = {
  TOOL_REQUESTED: "TOOL_CALL_REQUESTED",
  TOOL_STARTED: "TOOL_CALL_STARTED",
  TOOL_SUCCEEDED: "TOOL_CALL_SUCCEEDED",
  TOOL_DENIED: "TOOL_CALL_DENIED",
  TOOL_FAILED: "TOOL_CALL_FAILED",
  SOURCE_SEARCH_STARTED: "SOURCE_SEARCH_STARTED",
  TOOL_LOOP_COMPLETED: "TOOL_LOOP_COMPLETED",
  TOOL_LOOP_LIMIT_REACHED: "TOOL_LOOP_LIMIT_REACHED",
  SOURCE_LOADED: "SFIA_SOURCE_READ",
  SOURCE_REJECTED: "SFIA_CONTEXT_FAILED",
  AI_REQUESTED: "CONVERSATION_ATTEMPT_STARTED",
  AI_COMPLETED: "CONVERSATION_ATTEMPT_SUCCEEDED",
  AI_FAILED: "CONVERSATION_ATTEMPT_FAILED",
  STRUCTURED_OUTPUT_VALIDATED: "SFIA_PROPOSAL_RECEIVED",
  STRUCTURED_OUTPUT_REJECTED: "SFIA_PROPOSAL_INVALID",
};

export function createOps1SessionEventSink(
  sessionId: string,
  db?: DatabaseSync,
): EventSink {
  const database = db ?? openOps1Db();
  return {
    emit(event: TechnicalEvent): void {
      const type =
        TECHNICAL_TO_OPS1[event.type] ??
        ("TOOL_CALL_FAILED" as SessionEventType);
      const correlation = event.correlationId ?? sessionId;
      database
        .prepare(
          `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
           VALUES (?, ?, ?, ?, ?)`,
        )
        .run(
          createEventId(),
          correlation,
          type,
          nowIsoWithOffset(),
          redactSecrets(JSON.stringify(event.detail)),
        );
    },
  };
}
