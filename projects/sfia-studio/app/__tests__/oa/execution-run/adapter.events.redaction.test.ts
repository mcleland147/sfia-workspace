/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
import { PlatformExecutionEventSinkAdapter } from "@/lib/oa/execution-run/infrastructure/events/platformExecutionEventSinkAdapter";
import { NoopEventSink } from "@/lib/platform/observability/eventSink";
import type { EventSink } from "@/lib/platform/observability/eventSink";

describe("D2D2-05 EVENT-B", () => {
  it("rejects invalid timestamps and sensitive keys", () => {
    const sink = new RecordingExecutionEventSink();
    expect(() =>
      sink.emit({
        type: "validation",
        correlationId: "e1",
        runId: "r1",
        providerLane: "none",
        occurredAt: "not-iso",
        detail: { ok: true },
      }),
    ).toThrow(/EVENT_TIMESTAMP_INVALID/);

    expect(() =>
      sink.emit({
        type: "validation",
        correlationId: "e2",
        runId: "r1",
        providerLane: "none",
        occurredAt: new Date().toISOString(),
        detail: { apiKey: "x" },
      }),
    ).toThrow(/EVENT_SENSITIVE/);
  });

  it("rejects nested secrets at any depth for recording and platform", () => {
    const recording = new RecordingExecutionEventSink();
    expect(() =>
      recording.emit({
        type: "validation",
        correlationId: "eN",
        runId: "r1",
        providerLane: "ai",
        occurredAt: new Date().toISOString(),
        detail: { nested: { password: "x", token: "y" } } as never,
      }),
    ).toThrow(/EVENT_(SENSITIVE|NESTED)/);

    const emitted: unknown[] = [];
    const sink: EventSink = {
      emit(e) {
        emitted.push(e);
      },
    };
    const adapter = new PlatformExecutionEventSinkAdapter(sink);
    expect(() =>
      adapter.emit({
        type: "validation",
        correlationId: "eN2",
        runId: "r1",
        providerLane: "ai",
        occurredAt: new Date().toISOString(),
        detail: { nested: { apiKey: "should-not-pass" } } as never,
      }),
    ).toThrow(/EVENT_(SENSITIVE|NESTED)/);
    expect(emitted).toHaveLength(0);
  });

  it("platform adapter accepts redacted flat D2-D events", () => {
    const adapter = new PlatformExecutionEventSinkAdapter(new NoopEventSink());
    expect(() =>
      adapter.emit({
        type: "source",
        correlationId: "e3",
        runId: "r1",
        providerLane: "ai",
        occurredAt: new Date().toISOString(),
        detail: { source: "fixture" },
      }),
    ).not.toThrow();
  });
});
