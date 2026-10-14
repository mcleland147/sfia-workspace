/**
 * R-EXT-01 — terminalLiveActivityFromProductResult (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { terminalLiveActivityFromProductResult } from "@/features/project-assistant/liveActivityEvents";

describe("R-EXT-01 — terminalLiveActivityFromProductResult", () => {
  it("ok + status=ok → mission_completed", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: true, status: "ok" },
    });
    expect(t.kind).toBe("mission_completed");
    expect(t.label).toMatch(/terminée/i);
  });

  it("ok + status=incomplete → mission_incomplete (not completed)", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: true, status: "incomplete" },
    });
    expect(t.kind).toBe("mission_incomplete");
    expect(t.kind).not.toBe("mission_completed");
  });

  it("executionIncomplete flag → mission_incomplete", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: true, status: "ok", executionIncomplete: true },
    });
    expect(t.kind).toBe("mission_incomplete");
  });

  it("ok + status=cognitive_stop → mission_cognitive_stop (not completed)", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: true, status: "cognitive_stop" },
    });
    expect(t.kind).toBe("mission_cognitive_stop");
    expect(t.kind).not.toBe("mission_completed");
  });

  it("status=stopped → stop_confirmed", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: false, status: "stopped" },
    });
    expect(t.kind).toBe("stop_confirmed");
  });

  it("runnerStopConfirmed → stop_confirmed", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: false, status: "provider_error" },
      runnerStopConfirmed: true,
    });
    expect(t.kind).toBe("stop_confirmed");
  });

  it("transportAbortedWithoutAck + provider_unavailable → transport_interrupted (not stop_confirmed)", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: false, status: "provider_unavailable" },
      transportAbortedWithoutAck: true,
    });
    expect(t.kind).toBe("transport_interrupted");
    expect(t.kind).not.toBe("stop_confirmed");
    expect(t.kind).not.toBe("mission_failed");
  });

  it("provider_error → mission_failed", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: false, status: "provider_error" },
    });
    expect(t.kind).toBe("mission_failed");
    expect(t.label).toMatch(/fournisseur/i);
  });

  it("provider_unavailable → mission_failed", () => {
    const t = terminalLiveActivityFromProductResult({
      result: { ok: false, status: "provider_unavailable" },
    });
    expect(t.kind).toBe("mission_failed");
  });
});
