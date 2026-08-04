/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server";
import { getFixture } from "@/lib/oa/execution-run";

describe("D2-D1 memory repository via server composition", () => {
  it("saves and loads with defensive copies", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const loaded = await c.getById(created.run.runId);
    expect(loaded?.runId).toBe(created.run.runId);
    expect(loaded).not.toBe(created.run);
  });

  it("lists by correlation deterministically", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    const list = await c.listByCorrelationId(f.intent.correlationId);
    expect(list.length).toBe(1);
  });

  it("returns null for missing", async () => {
    const c = composeExecutionRunMemory();
    expect(await c.getById("missing")).toBeNull();
  });

  it("issues new identity after terminal via new create", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const a = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    const b = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    expect(a.ok && b.ok).toBe(true);
    if (a.ok && b.ok) expect(a.run.runId).not.toBe(b.run.runId);
  });

  it("discloses process-local memory only", () => {
    const c = composeExecutionRunMemory();
    expect(c.disclosure).toEqual({
      persistence: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
    });
  });

  it("does not expose raw repository save on composition", () => {
    const c = composeExecutionRunMemory() as Record<string, unknown>;
    expect(c.repository).toBeUndefined();
    expect(c.store).toBeUndefined();
  });
});
