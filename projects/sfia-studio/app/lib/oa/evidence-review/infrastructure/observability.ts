import type {
  EvidenceAuditEvent,
  EvidenceAuditPort,
} from "../ports/evidenceAudit";

export class ConsoleEvidenceAuditJournal implements EvidenceAuditPort {
  append(event: EvidenceAuditEvent): void {
    console.info(JSON.stringify(event));
  }
}

export class MemoryEvidenceAuditJournal implements EvidenceAuditPort {
  readonly events: EvidenceAuditEvent[] = [];

  append(event: EvidenceAuditEvent): void {
    this.events.push(Object.freeze({ ...event }));
  }

  byName(name: EvidenceAuditEvent["event"]): EvidenceAuditEvent[] {
    return this.events.filter((event) => event.event === name);
  }
}
