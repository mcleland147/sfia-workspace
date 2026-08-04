/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { getFixture } from "@/lib/oa/execution-run";
import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";

describe("D2-D3 fixture coordination", () => {
  it("coordinates AI through idle, running, succeeded and official evidence", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "bounded fixture summary" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });

    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(result.providerCompleted).toBe(true);
    expect(result.stateTrace).toEqual(["idle", "running", "succeeded"]);
    expect(result.run?.evidence).toHaveLength(1);
    expect(result.run?.evidence?.[0]).toMatchObject({
      official: true,
      source: "fixture",
      completeness: "complete",
      late: false,
    });

    if (!result.run) return;
    const projection = await composition.projectById(result.run.runId);
    expect(projection.ok).toBe(true);
    if (!projection.ok) return;
    expect(projection.projection.state).toBe("succeeded");
    expect(projection.projection.source).toBe("fixture");
    expect(projection.projection.providerLane).toBe("ai");
  });

  it("coordinates a read-only Git fixture without a write surface", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const intent = {
      ...fixture.intent,
      intentId: "intent:d2d3:git",
      correlationId: "corr:d2d3:git",
      requestedLane: "git" as const,
    };
    const result = await composition.coordinate({
      intent,
      context: fixture.context,
      providerRequest: {
        correlationId: intent.correlationId,
        lane: "git",
        operation: "read",
        owner: "o",
        repo: "r",
        kind: "repository",
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });

    expect(result.run?.state).toBe("succeeded");
    expect(result.run?.disclosure.providerLane).toBe("git");
    expect(composition.disclosure.gitWrite).toBe(false);
  });

  it("keeps Cursor fixture-only and blocked while Cursor is unverified", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const intent = {
      ...fixture.intent,
      intentId: "intent:d2d3:cursor",
      correlationId: "corr:d2d3:cursor",
      requestedLane: "cursor" as const,
    };
    const result = await composition.coordinate({
      intent,
      context: fixture.context,
      providerRequest: {
        correlationId: intent.correlationId,
        lane: "cursor",
        operation: "fixture",
        instructionSummary: "read-only fixture",
        allowlistRepos: ["projects/sfia-studio/"],
        protectedPaths: [".env"],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });

    expect(result.ok).toBe(false);
    expect(result.run?.state).toBe("blocked");
    expect(result.providerInvoked).toBe(false);
    expect(composition.disclosure.cursorVerified).toBe(false);
  });

  it("blocks lane none without invoking a provider", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        requestedLane: "none",
        intentId: "intent:d2d3:none",
        correlationId: "corr:d2d3:none",
      },
      context: fixture.context,
      timeoutMs: 100,
    });

    expect(result.ok).toBe(false);
    expect(result.run?.state).toBe("blocked");
    expect(result.providerInvoked).toBe(false);
    expect(result.stateTrace).toEqual(["idle", "blocked"]);
  });

  it("does not invoke providers before validation and policy acceptance", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("validation_failure");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "must not execute" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });

    expect(result.ok).toBe(false);
    expect(result.providerInvoked).toBe(false);
    expect(result.stateTrace).toEqual([]);
  });
});
