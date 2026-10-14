/**
 * P6 — Live activity event contract (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  isNoraLiveActivityEvent,
  liveActivityFromTechnicalToolEvent,
  terminalLiveActivityFromProductResult,
  type NoraLiveActivityEvent,
} from "@/features/project-assistant/liveActivityEvents";

describe("P6 live activity events", () => {
  it("accepts well-formed browser-safe events", () => {
    const event: NoraLiveActivityEvent = {
      kind: "tool_started",
      seq: 1,
      at: "2026-10-14T12:00:00.000Z",
      label: "Consultation en cours — git_local_read_file",
      toolName: "git_local_read_file",
      sourcePath: "docs/a.md",
    };
    expect(isNoraLiveActivityEvent(event)).toBe(true);
  });

  it("rejects oversized or empty labels and non-finite seq", () => {
    expect(
      isNoraLiveActivityEvent({
        kind: "activity_update",
        seq: Number.NaN,
        at: "x",
        label: "ok",
      }),
    ).toBe(false);
    expect(
      isNoraLiveActivityEvent({
        kind: "activity_update",
        seq: 1,
        at: "x",
        label: "",
      }),
    ).toBe(false);
    expect(
      isNoraLiveActivityEvent({
        kind: "activity_update",
        seq: 1,
        at: "x",
        label: "x".repeat(280),
      }),
    ).toBe(false);
  });

  it("maps tool running → tool_started without inventing secrets", () => {
    const mapped = liveActivityFromTechnicalToolEvent({
      type: "tool.start",
      detail: {
        toolName: "git_local_read_file",
        status: "running",
        path: "projects/sfia-studio/docs/a.md",
      },
      seq: 2,
      at: "2026-10-14T12:00:01.000Z",
    });
    expect(mapped?.kind).toBe("tool_started");
    expect(mapped?.sourcePath).toBe("projects/sfia-studio/docs/a.md");
    expect(mapped?.label).toContain("a.md");
    expect(mapped?.label).toMatch(/consultation/i);
  });

  it("maps tool succeeded → tool_completed with basename label when present", () => {
    const mapped = liveActivityFromTechnicalToolEvent({
      type: "tool.result",
      detail: {
        toolName: "git_local_read_file",
        status: "succeeded",
        path: "docs/b.md",
      },
      seq: 3,
    });
    expect(mapped?.kind).toBe("tool_completed");
    expect(mapped?.label).toContain("b.md");
    expect(mapped?.label).toMatch(/consulté/i);
  });

  it("maps tool failed → tool_failed", () => {
    const mapped = liveActivityFromTechnicalToolEvent({
      type: "tool.fail",
      detail: { toolName: "git_local_read_file", status: "failed" },
      seq: 4,
    });
    expect(mapped?.kind).toBe("tool_failed");
    expect(mapped?.label).toMatch(/échec/i);
  });

  it("terminal kinds expose Pilote-safe French labels", () => {
    expect(
      terminalLiveActivityFromProductResult({
        result: { ok: true, status: "ok" },
      }).label,
    ).toMatch(/Mission terminée/);
    expect(
      terminalLiveActivityFromProductResult({
        result: { ok: true, status: "cognitive_stop" },
      }).kind,
    ).toBe("mission_cognitive_stop");
    expect(
      terminalLiveActivityFromProductResult({
        result: { ok: false, status: "provider_unavailable" },
        transportAbortedWithoutAck: true,
      }).kind,
    ).toBe("transport_interrupted");
  });
});
