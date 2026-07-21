import { randomUUID } from "node:crypto";

export function createSessionId(): string {
  return `ops1-sess-${randomUUID()}`;
}

export function createTurnId(): string {
  return `ops1-turn-${randomUUID()}`;
}

export function createEventId(): string {
  return `ops1-evt-${randomUUID()}`;
}

export function createAttemptId(): string {
  return `ops1-att-${randomUUID()}`;
}

export function createActionCandidateId(): string {
  return `ops1-act-${randomUUID()}`;
}

export function createGateDecisionId(): string {
  return `ops1-gate-${randomUUID()}`;
}

export function createAllowlistEvaluationId(): string {
  return `ops1-alw-${randomUUID()}`;
}

export function createContractId(): string {
  return `ops1-ctr-${randomUUID()}`;
}

export function createExecutionGateId(): string {
  return `ops1-xgate-${randomUUID()}`;
}

export function createExecutionAttemptId(): string {
  return `ops1-xatt-${randomUUID()}`;
}

export function createExecutionResultId(): string {
  return `ops1-xres-${randomUUID()}`;
}

export function createReportId(): string {
  return `ops1-rep-${randomUUID()}`;
}
