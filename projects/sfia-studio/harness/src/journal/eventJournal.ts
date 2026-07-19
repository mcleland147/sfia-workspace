import { appendFileSync, mkdirSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type { JournalEvent } from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";

export class EventJournal {
  readonly filePath: string;

  constructor(proofDir: string, readonly correlationId: string) {
    mkdirSync(proofDir, { recursive: true });
    this.filePath = path.join(proofDir, "events.jsonl");
  }

  append(partial: Omit<JournalEvent, "schemaVersion" | "eventId" | "timestamp" | "correlationId"> &
    Partial<Pick<JournalEvent, "correlationId">>): JournalEvent {
    const event: JournalEvent = {
      schemaVersion: "1",
      eventId: randomUUID(),
      timestamp: new Date().toISOString(),
      correlationId: partial.correlationId ?? this.correlationId,
      ...partial,
      eventType: partial.eventType,
      requestId: partial.requestId,
    };
    try {
      appendFileSync(this.filePath, `${JSON.stringify(event)}\n`, { encoding: "utf8" });
    } catch (err) {
      throw new HarnessError("JOURNAL_WRITE_FAILED", (err as Error).message);
    }
    return event;
  }

  readAll(): JournalEvent[] {
    if (!existsSync(this.filePath)) return [];
    const raw = readFileSync(this.filePath, "utf8");
    return raw
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line) as JournalEvent);
  }

  /** Reconstruct last stateAfter from journal — projection, not a second truth. */
  projectLastState(): string | undefined {
    const events = this.readAll();
    for (let i = events.length - 1; i >= 0; i--) {
      if (events[i].stateAfter) return events[i].stateAfter;
    }
    return undefined;
  }
}
