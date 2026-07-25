import type {
  ExecutionAttemptAuditEvent,
  ExecutionAttemptAuditPort,
} from "../ports/executionAttemptAudit";

/** Structured console sink — refs only, never payloads or secrets. */
export class ConsoleExecutionAttemptAuditJournal
  implements ExecutionAttemptAuditPort
{
  append(event: ExecutionAttemptAuditEvent): void {
    console.info(JSON.stringify(event));
  }
}

/** Append-only in-memory journal. */
export class MemoryExecutionAttemptAuditJournal
  implements ExecutionAttemptAuditPort
{
  readonly events: ExecutionAttemptAuditEvent[] = [];

  append(event: ExecutionAttemptAuditEvent): void {
    this.events.push(Object.freeze({ ...event }));
  }

  byName(name: ExecutionAttemptAuditEvent["event"]): ExecutionAttemptAuditEvent[] {
    return this.events.filter((event) => event.event === name);
  }
}
