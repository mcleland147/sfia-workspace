/**
 * @vitest-environment node
 */
import path from "node:path";
import { describe, expect, it } from "vitest";
import { AjvExecutionRunSchemaValidation } from "@/lib/oa/execution-run/infrastructure/ajvExecutionRunSchemaValidation";
import { getFixture } from "@/lib/oa/execution-run";
import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server";
import { normalizedFailure } from "@/lib/oa/execution-run";

const schemasDir = path.resolve(
  __dirname,
  "../../../lib/oa/execution-run/schemas",
);

describe("D2-D1 AJV adversarial validation", () => {
  const validator = new AjvExecutionRunSchemaValidation(schemasDir);

  it("rejects null and undefined before metadata use", async () => {
    expect((await validator.validate("execution-intent", null)).ok).toBe(false);
    expect((await validator.validate("execution-intent", undefined)).ok).toBe(false);
  });

  it("rejects wrong types and missing fields", async () => {
    expect((await validator.validate("execution-intent", 42)).ok).toBe(false);
    expect((await validator.validate("execution-intent", {})).ok).toBe(false);
    expect(
      (
        await validator.validate("execution-intent", {
          ...getFixture("nominal").intent,
          requestedLane: "openai",
        })
      ).ok,
    ).toBe(false);
  });

  it("rejects empty operation", async () => {
    const f = getFixture("validation_failure");
    const r = await validator.validate("execution-intent", f.intent);
    expect(r.ok).toBe(false);
  });

  it("accepts nominal intent", async () => {
    const f = getFixture("nominal");
    const r = await validator.validate("execution-intent", f.intent);
    expect(r.ok).toBe(true);
  });

  it("does not throw raw AJV exceptions", async () => {
    await expect(validator.validate("execution-run", { circular: null })).resolves.toMatchObject({
      ok: false,
    });
  });
});

describe("D2-D1 succeeded / failed / blocked application invariants", () => {
  it("creates official evidence on succeeded", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
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
      completeness: "complete",
      externalResult: {
        kind: "success",
        completeness: "complete",
        redactedSummary: "redacted-ok",
        rawPresent: false,
      },
    });
    expect(done.ok).toBe(true);
    if (!done.ok) return;
    expect(done.run.evidence?.[0]?.summary).toBe("redacted-ok");
    expect(done.run.evidence?.[0]?.official).toBe(true);
    expect(done.run.evidence?.[0]?.late).toBe(false);
  });

  it("refuses succeeded without external result", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
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
      completeness: "complete",
    });
    expect(done.ok).toBe(false);
  });

  it("requires normalized failure for failed", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
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
    const missing = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "engaged_operation_failed",
    });
    expect(missing.ok).toBe(false);
    const ok = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "engaged_operation_failed",
      failure: normalizedFailure({
        family: "rate_limited",
        code: "RATE_LIMITED",
        userMessage: "slow down",
        retryable: true,
        correlationId: created.run.correlationId,
      }),
    });
    expect(ok.ok).toBe(true);
    if (ok.ok) expect(ok.run.failure?.code).toBe("RATE_LIMITED");
  });

  it("requires failure or blockingReason for blocked transition", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await c.createExecutionRun({
      intent: {
        ...f.intent,
        requiresHumanGate: true,
        intentId: "intent:gate",
        correlationId: "corr:gate",
      },
      context: f.context,
      capability: f.capability,
    });
    // may be blocked at create due to unsatisfied gate — use idle path with gate false via capability
    if (!created.ok && created.run?.state === "blocked") {
      expect(created.run.failure || created.run.blockedReason).toBeTruthy();
      return;
    }
    if (!created.ok) return;
    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "intent_valid",
    });
    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "human_gate_required",
    });
    const blocked = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "human_reject_or_unsatisfied",
      blockingReason: "HUMAN_REJECTED",
    });
    expect(blocked.ok).toBe(true);
    if (blocked.ok) {
      expect(blocked.run.state).toBe("blocked");
      expect(blocked.run.blockedReason).toBe("HUMAN_REJECTED");
    }
  });
});
