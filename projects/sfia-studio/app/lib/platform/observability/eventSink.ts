import type { TechnicalEvent } from "./types";

/** Local injectable sink — no global bus, no shared storage. */
export interface EventSink {
  emit(event: TechnicalEvent): void;
}

export class NoopEventSink implements EventSink {
  emit(_event: TechnicalEvent): void {
    /* intentional no-op */
  }
}

export const noopEventSink = new NoopEventSink();
