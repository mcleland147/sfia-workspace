/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { getFixture } from "@/lib/oa/execution-run";
import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";

async function succeededProjection() {
  const composition = composeExecutionRunD2D3();
  const fixture = getFixture("nominal");
  const coordinated = await composition.coordinate({
    intent: fixture.intent,
    context: fixture.context,
    providerRequest: {
      correlationId: fixture.intent.correlationId,
      lane: "ai",
      operation: "complete",
      messages: [{ role: "user", content: "fixture-only input" }],
      timeoutMs: 100,
    },
    timeoutMs: 100,
  });
  if (!coordinated.run) throw new Error("expected run");
  const projection = await composition.projectById(coordinated.run.runId);
  if (!projection.ok) throw new Error(projection.failure.message);
  return projection.projection;
}

describe("D2-D3 provider-independent projection", () => {
  it("projects the bounded transport-neutral shape and disclosures", async () => {
    const projection = await succeededProjection();

    expect(projection).toMatchObject({
      state: "succeeded",
      source: "fixture",
      providerLane: "ai",
      phase: "terminal",
      completeness: "complete",
      cursorUnverified: true,
      gitWrite: false,
      persistence: {
        kind: "memory_process_local",
        durable: false,
        multiInstance: false,
        restartSafe: false,
      },
    });
    expect(projection.evidenceSummary[0]).toMatchObject({
      official: true,
      source: "fixture",
      late: false,
    });
    expect(projection.readinessAssessment.uiDelivery.status).toBe(
      "not_demonstrated",
    );
    expect(projection.readinessAssessment.strongRuntimeVerdict.status).toBe(
      "blocked",
    );
  });

  it("contains no executable, SDK, adapter, command, signal, or raw surface", async () => {
    const projection = await succeededProjection();
    const seenKeys: string[] = [];
    const visit = (value: unknown): void => {
      if (!value || typeof value !== "object") {
        expect(typeof value).not.toBe("function");
        return;
      }
      for (const [key, nested] of Object.entries(value)) {
        seenKeys.push(key);
        expect(typeof nested).not.toBe("function");
        visit(nested);
      }
    };
    visit(projection);

    expect(seenKeys).not.toEqual(
      expect.arrayContaining([
        "sdk",
        "adapter",
        "command",
        "signal",
        "abortSignal",
        "rawPrompt",
        "rawResponse",
        "rawError",
        "secret",
      ]),
    );
    expect(JSON.stringify(projection)).not.toMatch(
      /fixture-only input|AbortSignal|executeFixture|complete\(/,
    );
  });

  it("is JSON serializable and exposes no Git write capability", async () => {
    const projection = await succeededProjection();
    expect(() => JSON.stringify(projection)).not.toThrow();
    expect(JSON.parse(JSON.stringify(projection))).toEqual(projection);
    expect(Object.keys(projection)).not.toContain("gitWriteCommand");
    expect(projection.gitWrite).toBe(false);
  });
});
