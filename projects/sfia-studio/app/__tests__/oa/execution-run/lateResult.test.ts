/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server";
import {
  canAcceptLateResult,
  EXECUTION_STATES,
  getFixture,
  LATE_RESULT_ELIGIBLE_STATES,
  normalizedFailure,
} from "@/lib/oa/execution-run";

async function runningRun() {
  const c = composeExecutionRunMemory();
  const f = getFixture("nominal");
  const created = await c.createExecutionRun({
    intent: f.intent,
    context: f.context,
    capability: f.capability,
  });
  if (!created.ok) throw new Error("create failed");
  const started = await c.transitionExecutionRun({
    runId: created.run.runId,
    reason: "intent_valid",
  });
  if (!started.ok) throw new Error("start failed");
  return { c, run: started.run };
}

describe("D2-D1 late result eligibility", () => {
  it("documents eligible terminals", () => {
    expect([...LATE_RESULT_ELIGIBLE_STATES].sort()).toEqual(
      ["cancelled", "failed", "timed_out"].sort(),
    );
    for (const s of EXECUTION_STATES) {
      expect(canAcceptLateResult(s)).toBe(
        (LATE_RESULT_ELIGIBLE_STATES as readonly string[]).includes(s),
      );
    }
  });

  it("refuses idle, running, awaiting_human, succeeded, blocked", async () => {
    const c = composeExecutionRunMemory();
    const f = getFixture("nominal");
    const created = await c.createExecutionRun({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
    });
    if (!created.ok) return;

    const idle = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late",
    });
    expect(idle.ok).toBe(false);

    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "intent_valid",
    });
    const running = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late",
    });
    expect(running.ok).toBe(false);

    await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "human_gate_required",
    });
    const awaiting = await c.transitionExecutionRun({
      runId: created.run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late",
    });
    expect(awaiting.ok).toBe(false);

    // fresh run → succeeded
    const { c: c2, run } = await runningRun();
    const succeeded = await c2.transitionExecutionRun({
      runId: run.runId,
      reason: "outputs_validated",
      completeness: "complete",
      externalResult: {
        kind: "success",
        completeness: "complete",
        redactedSummary: "ok",
        rawPresent: false,
      },
    });
    expect(succeeded.ok).toBe(true);
    if (!succeeded.ok) return;
    const lateOnSuccess = await c2.transitionExecutionRun({
      runId: run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late",
    });
    expect(lateOnSuccess.ok).toBe(false);

    // blocked at create
    const c3 = composeExecutionRunMemory();
    const blocked = await c3.createExecutionRun({
      intent: getFixture("mutation_forbidden").intent,
      context: getFixture("mutation_forbidden").context,
      capability: getFixture("mutation_forbidden").capability,
    });
    expect(blocked.run?.state).toBe("blocked");
    if (!blocked.run) return;
    const lateOnBlocked = await c3.transitionExecutionRun({
      runId: blocked.run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late",
    });
    expect(lateOnBlocked.ok).toBe(false);
  });

  it("accepts cancelled, timed_out, failed with evidence-only mutation", async () => {
    // cancelled
    const { c, run } = await runningRun();
    await c.transitionExecutionRun({
      runId: run.runId,
      reason: "cancel_accepted",
    });
    const lateCancel = await c.transitionExecutionRun({
      runId: run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late_cancel",
    });
    expect(lateCancel.ok).toBe(true);
    if (lateCancel.ok) {
      expect(lateCancel.run.state).toBe("cancelled");
      expect(lateCancel.run.evidence?.at(-1)?.late).toBe(true);
      expect(lateCancel.run.evidence?.at(-1)?.official).toBe(true);
      expect(lateCancel.run.evidence?.at(-1)?.completeness).toBe("partial");
    }

    // timed_out
    const r2 = await runningRun();
    await r2.c.transitionExecutionRun({
      runId: r2.run.runId,
      reason: "time_limit",
    });
    const lateTimeout = await r2.c.transitionExecutionRun({
      runId: r2.run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late_timeout",
    });
    expect(lateTimeout.ok).toBe(true);
    if (lateTimeout.ok) expect(lateTimeout.run.state).toBe("timed_out");

    // failed
    const r3 = await runningRun();
    const failed = await r3.c.transitionExecutionRun({
      runId: r3.run.runId,
      reason: "engaged_operation_failed",
      failure: normalizedFailure({
        family: "provider_unavailable",
        code: "PROVIDER_UNAVAILABLE",
        userMessage: "down",
        retryable: true,
        correlationId: r3.run.correlationId,
      }),
    });
    expect(failed.ok).toBe(true);
    const lateFailed = await r3.c.transitionExecutionRun({
      runId: r3.run.runId,
      reason: "late_result_evidence_only",
      lateEvidenceSummary: "late_failed",
    });
    expect(lateFailed.ok).toBe(true);
    if (lateFailed.ok) expect(lateFailed.run.state).toBe("failed");
  });
});
