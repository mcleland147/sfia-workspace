/**
 * F1 Project Assistant — ephemeral DTOs (no durable persistence).
 */

export type AssistantUiMode = "fixture" | "live" | "unavailable";

export type AssistantTurnStatus =
  | "ok"
  | "provider_unavailable"
  | "provider_error"
  | "project_not_found"
  | "validation_error";

export type AssistantHistoryMessage = {
  role: "user" | "assistant";
  content: string;
};

export type AssistantToolEventDto = {
  toolName: string;
  status: "succeeded" | "denied" | "failed" | "started" | "requested";
  pathOrRef: string | null;
  summary: string | null;
  errorCode: string | null;
  readOnly: true;
};

export type AssistantSourceDto = {
  kind: "git_local" | "github";
  label: string;
  pathOrRef: string | null;
};

export type ProjectAssistantContextDto = {
  projectId: string;
  name: string;
  shortReference: string | null;
  objective: string;
  contextSummary: string;
  criticality: string;
  constraints: string[];
  lpsId: string;
  lpsVersion: number;
  lpsCreatedAt: string;
  doctrineId: string;
  doctrineVersion: string;
  doctrineDigest: string;
  doctrineStatus: string;
  runtimeMode: string;
  persistence: string;
  readiness: string;
};

export type ProjectAssistantSendSuccess = {
  ok: true;
  status: "ok";
  text: string;
  mode: AssistantUiMode;
  presentation: "test_provider" | "openai_live";
  toolRounds: number;
  toolCalls: number;
  sources: AssistantSourceDto[];
  toolEvents: AssistantToolEventDto[];
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
};

export type ProjectAssistantSendFailure = {
  ok: false;
  status: Exclude<AssistantTurnStatus, "ok">;
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
};

export type ProjectAssistantSendResult =
  | ProjectAssistantSendSuccess
  | ProjectAssistantSendFailure;
