import type { TechnicalEvent } from "./types";

/** Local injectable sink — no global bus, no shared storage. */
export interface EventSink {
  emit(event: TechnicalEvent): void;
}

export class NoopEventSink implements EventSink {
  emit(event: TechnicalEvent): void {
    void event;
  }
}

export const noopEventSink = new NoopEventSink();
