/** Generic technical event types for Studio platform. */
export type TechnicalEventType =
  | "AI_REQUESTED"
  | "AI_COMPLETED"
  | "AI_FAILED"
  | "TOOL_REQUESTED"
  | "TOOL_STARTED"
  | "TOOL_SUCCEEDED"
  | "TOOL_DENIED"
  | "TOOL_FAILED"
  | "SOURCE_LOADED"
  | "SOURCE_REJECTED"
  | "SOURCE_SEARCH_STARTED"
  | "STRUCTURED_OUTPUT_VALIDATED"
  | "STRUCTURED_OUTPUT_REJECTED"
  | "TOOL_LOOP_COMPLETED"
  | "TOOL_LOOP_LIMIT_REACHED";

export interface TechnicalEvent {
  type: TechnicalEventType;
  /** Correlation id (session, intake run, …) — opaque to platform. */
  correlationId?: string;
  detail: Record<string, unknown>;
}
