import { randomUUID } from "node:crypto";

export function createProjectId(): string {
  return `proj-${randomUUID()}`;
}

export function createAuditEventId(): string {
  return `d1-evt-${randomUUID()}`;
}

export function createCorrelationId(): string {
  return `corr-${randomUUID()}`;
}
