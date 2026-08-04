/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assessExecutionReadiness,
  D2D3_OPEN_RESERVES,
  getFixture,
} from "@/lib/oa/execution-run";
import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";

describe("D2-D3 bounded readiness assessment", () => {
  it("rejects boolean-only proofs as not demonstrated", () => {
    const assessment = assessExecutionReadiness({
      fixturePathDemonstrated: true,
      projectionDemonstrated: true,
      disclosuresDemonstrated: true,
    });
    expect(assessment.uxExploration.status).toBe("not_demonstrated");
  });

  it("demonstrates UX exploration only with linked run, projection, and evidence", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "readiness fixture" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });
    expect(result.run?.state).toBe("succeeded");
    const assessment = await composition.assessById(result.run!.runId);
    expect(assessment.uxExploration.status).toBe("demonstrated");
  });

  it("keeps UI delivery not demonstrated and strong runtime blocked", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "bounded" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });
    const assessment = await composition.assessById(result.run!.runId);

    expect(assessment.uiDelivery.status).toBe("not_demonstrated");
    expect(assessment.strongRuntimeVerdict.status).toBe("blocked");
    expect(assessment.strongRuntimeVerdict.reasons).toEqual([
      "G-D2D-CURSOR-01 not consumed",
      "G-D2D-PERSIST-01 not consumed",
      "Cursor unverified",
      "memory is process-local",
      "no live provider proof",
    ]);
  });

  it("carries every inherited reserve without lifting it", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "reserves" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });
    const assessment = await composition.assessById(result.run!.runId);

    expect(assessment.openReserves).toEqual(D2D3_OPEN_RESERVES);
    expect(assessment.openReserves).toHaveLength(6);
  });

  it("uses only the three bounded statuses and makes no excessive claim", async () => {
    const composition = composeExecutionRunD2D3();
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: fixture.intent,
      context: fixture.context,
      providerRequest: {
        correlationId: fixture.intent.correlationId,
        lane: "ai",
        operation: "complete",
        messages: [{ role: "user", content: "status" }],
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });
    const assessment = await composition.assessById(result.run!.runId);
    const statuses = [
      assessment.uxExploration.status,
      assessment.uiDelivery.status,
      assessment.strongRuntimeVerdict.status,
    ];
    const serialized = JSON.stringify(assessment);

    expect(statuses).toEqual([
      "demonstrated",
      "not_demonstrated",
      "blocked",
    ]);
    expect(serialized).not.toMatch(
      /production-ready|RUN READY|multi-instance ready|restart-safe|Cursor verified/i,
    );
  });
});
