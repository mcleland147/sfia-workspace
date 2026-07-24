import type {
  DecisionAuditEvent,
  DecisionAuditPort,
} from "../ports/decisionAudit";

/** Structured console sink — does not log decision option payload content. */
export class ConsoleDecisionAuditJournal implements DecisionAuditPort {
  append(event: DecisionAuditEvent): void {
    console.info(JSON.stringify(event));
  }
}

export class MemoryDecisionAuditJournal implements DecisionAuditPort {
  readonly events: DecisionAuditEvent[] = [];
  append(event: DecisionAuditEvent): void {
    this.events.push(event);
  }
}
