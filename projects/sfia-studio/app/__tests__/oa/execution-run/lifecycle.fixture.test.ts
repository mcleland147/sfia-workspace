/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server";
import { getFixture } from "@/lib/oa/execution-run";

describe("D2-D1 fixture lifecycle", () => {
  it("covers required catalogue scenarios", () => {
    const ids = [
      "nominal",
      "validation_failure",
      "auth_failure",
      "provider_unavailable",
      "rate_limit",
      "timeout",
      "cancellation",
      "blocked_gate",
      "protected_path",
      "mutation_forbidden",
      "partial_result",
      "invalid_provider_result",
      "late_result",
      "secret_redaction",
      "source_mismatch",
    ] as const;
    for (const id of ids) {
      expect(getFixture(id).source).toBe("fixture");
    }
  });

  it("runs nominal to succeeded with official evidence", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const started = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "intent_valid",
    });
    expect(started.ok && started.run.state).toBe("running");
    if (!started.ok) return;
    const done = await c.transitionExecutionRun({
      runId: started.run.runId,
      reason: "outputs_validated",
      completeness: "complete",
      externalResult: {
        kind: "success",
        completeness: "complete",
        redactedSummary: "ok",
        rawPresent: false,
      },
    });
    expect(done.ok && done.run.state).toBe("succeeded");
    if (!done.ok) return;
    expect(done.run.evidence?.some((e) => e.official && !e.late)).toBe(true);
  });

  it("never succeeds on partial", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("partial_result");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    if (!created.ok) return;
    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "intent_valid",
    });
    const done = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "outputs_validated",
      completeness: "partial",
      externalResult: {
        kind: "success",
        completeness: "partial",
        redactedSummary: "partial",
        rawPresent: false,
      },
    });
    expect(done.ok).toBe(false);
  });

  it("records late evidence without state change on cancelled", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("late_result");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    if (!created.ok) return;
    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "intent_valid",
    });
    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "cancel_accepted",
    });
    const late = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late_redacted",
    });
    expect(late.ok).toBe(true);
    if (!late.ok) return;
    expect(late.run.state).toBe("cancelled");
    expect(late.run.evidence?.some((e) => e.late)).toBe(true);
  });

  it("blocks mutation intent at create", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("mutation_forbidden");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    expect(created.ok).toBe(false);
    if (created.run) expect(created.run.state).toBe("blocked");
  });
});
