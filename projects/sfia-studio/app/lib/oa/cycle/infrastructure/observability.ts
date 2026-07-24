import type {
  CycleAuditEvent,
  CycleAuditPort,
} from "../ports/cycleAudit";

/** Structured console sink — does not log trajectory/epistemic payload content. */
export class ConsoleCycleAuditJournal implements CycleAuditPort {
  append(event: CycleAuditEvent): void {
    console.info(JSON.stringify(event));
  }
}

export class MemoryCycleAuditJournal implements CycleAuditPort {
  readonly events: CycleAuditEvent[] = [];
  append(event: CycleAuditEvent): void {
    this.events.push(event);
  }
}
