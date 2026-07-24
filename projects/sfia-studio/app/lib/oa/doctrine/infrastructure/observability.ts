import type {
  AuditJournalPort,
  DoctrineAuditEvent,
} from "../ports/auditJournalPort";

/** Structured console sink — does not log doctrinal content. */
export class ConsoleDoctrineAuditJournal implements AuditJournalPort {
  append(event: DoctrineAuditEvent): void {
    console.info(JSON.stringify(event));
  }
}

export class MemoryDoctrineAuditJournal implements AuditJournalPort {
  readonly events: DoctrineAuditEvent[] = [];
  append(event: DoctrineAuditEvent): void {
    this.events.push(event);
  }
}
