import type {
  ProjectAuditEvent,
  ProjectAuditJournalPort,
} from "../ports/projectAuditJournalPort";

/** Structured console sink — does not log LPS snapshot content. */
export class ConsoleProjectAuditJournal implements ProjectAuditJournalPort {
  append(event: ProjectAuditEvent): void {
    console.info(JSON.stringify(event));
  }
}

export class MemoryProjectAuditJournal implements ProjectAuditJournalPort {
  readonly events: ProjectAuditEvent[] = [];
  append(event: ProjectAuditEvent): void {
    this.events.push(event);
  }
}
