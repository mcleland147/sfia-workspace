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
