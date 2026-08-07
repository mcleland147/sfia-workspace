/**
 * @vitest-environment node
 */
import { describe, expect, it, vi } from "vitest";
import { createFinOpsCaptureService } from "@/lib/oa/finops/application/captureFinOpsUsage";
import type { FinOpsUsageLedgerPort } from "@/lib/oa/finops/ports/finopsUsageLedgerPort";
import { getFixture } from "@/lib/oa/execution-run";
import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server/composeExecutionRunD2D3";
import { composeExecutionRunProvidersFake } from "@/lib/oa/execution-run/server/composeExecutionRunProviders";

function nominalAiInput(correlationSuffix = "finops") {
  const fixture = getFixture("nominal");
  const correlationId = `${fixture.intent.correlationId}:${correlationSuffix}`;
  return {
    intent: {
      ...fixture.intent,
      intentId: `${fixture.intent.intentId}:${correlationSuffix}`,
      correlationId,
    },
    context: fixture.context,
    providerRequest: {
      correlationId,
      lane: "ai" as const,
      operation: "complete",
      messages: [{ role: "user" as const, content: "bounded fixture summary" }],
      timeoutMs: 100,
    },
    timeoutMs: 100,
  };
}

describe("FinOps T1 coordinator fail-open", () => {
  it("returns disabled when FinOps dependency is not injected", async () => {
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProvidersFake(),
    });
    const result = await composition.coordinate(nominalAiInput("disabled"));
    expect(result.ok).toBe(true);
    expect(result.finopsCapture.status).toBe("disabled");
  });

  it("does not fail the user run when FinOps capture fails", async () => {
    const ledger: FinOpsUsageLedgerPort = {
      insertUsageEvent: async () => ({
        outcome: "failed",
        error: {
          code: "FINOPS_DB_UNAVAILABLE",
          message: "FinOps capture failed",
          retryable: true,
          technicalDetailsRedacted: true,
        },
      }),
    };
    const audit = { emit: vi.fn() };
    const finops = createFinOpsCaptureService({ ledger, audit });
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProvidersFake(),
      finops,
    });
    const result = await composition.coordinate(nominalAiInput("failopen"));
    expect(result.ok).toBe(true);
    expect(result.finopsCapture.status).toBe("failed");
    if (result.finopsCapture.status === "failed") {
      expect(result.finopsCapture.error.technicalDetailsRedacted).toBe(true);
      expect(result.finopsCapture.error.message).not.toMatch(/postgres|host|sql/i);
    }
    expect(audit.emit).toHaveBeenCalledWith(
      expect.objectContaining({ type: "finops_capture_failed" }),
    );
  });

  it("skips FinOps capture for non-AI lanes", async () => {
    const captureUsage = vi.fn();
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProvidersFake(),
      finops: { captureUsage },
    });
    const fixture = getFixture("nominal");
    const intent = {
      ...fixture.intent,
      intentId: "intent:d2d3:git:finops",
      correlationId: "corr:d2d3:git:finops",
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
    expect(captureUsage).not.toHaveBeenCalled();
    expect(result.finopsCapture.status).toBe("not_attempted");
  });

  it("records created diagnostic when ledger inserts", async () => {
    const ledger: FinOpsUsageLedgerPort = {
      insertUsageEvent: async (event) => ({
        outcome: "created",
        eventId: event.eventId,
      }),
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProvidersFake(),
      finops: createFinOpsCaptureService({ ledger }),
    });
    const result = await composition.coordinate(nominalAiInput("created"));
    expect(result.ok).toBe(true);
    expect(result.finopsCapture.status).toBe("created");
  });

  it("keeps provider success when FinOps validation fails (invalid occurredAt via clock)", async () => {
    const ledger: FinOpsUsageLedgerPort = {
      insertUsageEvent: async (event) => ({
        outcome: "created",
        eventId: event.eventId,
      }),
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProvidersFake(),
      finops: createFinOpsCaptureService({ ledger }),
      clock: { nowIso: () => "not-a-valid-instant" },
    });
    const result = await composition.coordinate(nominalAiInput("baddate"));
    expect(result.ok).toBe(true);
    expect(result.finopsCapture.status).toBe("failed");
    if (result.finopsCapture.status === "failed") {
      expect(result.finopsCapture.error.code).toBe("FINOPS_VALIDATION_FAILED");
      expect(result.finopsCapture.error.retryable).toBe(false);
    }
  });
});
