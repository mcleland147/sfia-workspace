/**
 * C13 — durable supervisor registry: single observer per attempt, stop/fencing.
 * Does not call Cursor SDK (no LIVE provider in unit).
 */
import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";

describe("ML5 C13 cursor live supervisor registry", () => {
  beforeEach(() => {
    vi.resetModules();
    const g = globalThis as unknown as {
      __sfiaCursorLiveSupervisors?: Map<string, unknown>;
      __sfiaCursorLiveSupervisorResumeOnce?: boolean;
    };
    g.__sfiaCursorLiveSupervisors = undefined;
    g.__sfiaCursorLiveSupervisorResumeOnce = undefined;
  });

  afterEach(() => {
    vi.resetModules();
  });

  it("starts once per attemptId — second ensure is alreadyActive", async () => {
    vi.doMock("@/domains/execution/cursor-attempt-service", () => ({
      reconcileCursorExecution: vi.fn(async () => ({
        status: "DISPATCHED",
        live: { terminalStatus: null, runId: "run_x" },
      })),
    }));
    const mod = await import("@/domains/execution/cursor-live-supervisor");
    const a = mod.ensureCursorLiveSupervisor({
      pilotId: "p1",
      projectId: "proj1",
      attemptId: "efx_sup_1",
    });
    const b = mod.ensureCursorLiveSupervisor({
      pilotId: "p1",
      projectId: "proj1",
      attemptId: "efx_sup_1",
    });
    expect(a.started).toBe(true);
    expect(b.alreadyActive).toBe(true);
    expect(mod.listActiveCursorLiveSupervisors()).toHaveLength(1);
    mod.stopCursorLiveSupervisor("efx_sup_1", "TEST");
    expect(mod.getCursorLiveSupervisor("efx_sup_1")?.stopped).toBe(true);
    expect(mod.listActiveCursorLiveSupervisors()).toHaveLength(0);
  });

  it("two attemptIds do not contaminate", async () => {
    vi.doMock("@/domains/execution/cursor-attempt-service", () => ({
      reconcileCursorExecution: vi.fn(async () => ({
        status: "DISPATCHED",
        live: { terminalStatus: null },
      })),
    }));
    const mod = await import("@/domains/execution/cursor-live-supervisor");
    mod.ensureCursorLiveSupervisor({
      pilotId: "p1",
      projectId: "proj1",
      attemptId: "efx_a",
    });
    mod.ensureCursorLiveSupervisor({
      pilotId: "p2",
      projectId: "proj2",
      attemptId: "efx_b",
    });
    expect(mod.listActiveCursorLiveSupervisors()).toHaveLength(2);
    mod.stopCursorLiveSupervisor("efx_a");
    expect(mod.listActiveCursorLiveSupervisors().map((h) => h.attemptId)).toEqual([
      "efx_b",
    ]);
    mod.stopCursorLiveSupervisor("efx_b");
  });
});
