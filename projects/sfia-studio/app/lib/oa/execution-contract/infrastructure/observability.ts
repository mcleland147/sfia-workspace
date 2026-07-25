import type {
  ExecutionAuditEvent,
  ExecutionAuditPort,
} from "../ports/executionAudit";

/** Structured console sink — does not log contract payload content. */
export class ConsoleExecutionAuditJournal implements ExecutionAuditPort {
  append(event: ExecutionAuditEvent): void {
    console.info(JSON.stringify(event));
  }
}

export class MemoryExecutionAuditJournal implements ExecutionAuditPort {
  readonly events: ExecutionAuditEvent[] = [];
  append(event: ExecutionAuditEvent): void {
    this.events.push(event);
  }
}
