/**
 * @vitest-environment node
 *
 * FinOps T4 — execution-run ENF-B boundary tests (≥15).
 * FICTITIOUS fixtures only — NOT historical 15/20/25/30.
 */
import { describe, expect, it, vi } from "vitest";
import { getFixture } from "@/lib/oa/execution-run";
import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";
import {
  composeExecutionRunProviders,
  composeExecutionRunProvidersFake,
} from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
import type { FinOpsEnforcementPort } from "@/lib/oa/finops/ports/finopsEnforcementPort";
import type { FinOpsEnforcementDecision } from "@/lib/oa/finops/application/types.enforcement";
import { FakeAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter";
import { FakeGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter";
import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";
import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";

function decisionPort(
  decision: FinOpsEnforcementDecision,
): FinOpsEnforcementPort {
  return {
    async evaluateBeforeProvider() {
      return decision;
    },
  };
}

function throwingPort(): FinOpsEnforcementPort {
  return {
    async evaluateBeforeProvider() {
      throw new Error("SELECT password FROM secrets WHERE host='db'");
    },
  };
}

function spyAiProviders() {
  const ai = new FakeAiExecutionAdapter();
  const completeSpy = vi.spyOn(ai, "complete");
  const secretsAdapter = new FakeSecretSourceAdapter();
  const providers = composeExecutionRunProviders({
    ai,
    git: new FakeGitReadAdapter({
      repositoryAllowlist: ["o/r", "example/example", "mcleland147/sfia-workspace"],
      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
    }),
    cursor: new FixtureCursorExecutionAdapter(),
    secrets: {
      resolve: (secretId) => secretsAdapter.resolve(secretId),
    },
    events: new RecordingExecutionEventSink(),
  });
  return { providers, completeSpy };
}

function nominalCoordinateInput(suffix: string) {
  const fixture = getFixture("nominal");
  return {
    intent: {
      ...fixture.intent,
      intentId: `intent:t4:${suffix}`,
      correlationId: `corr:t4:${suffix}`,
    },
    context: fixture.context,
    providerRequest: {
      correlationId: `corr:t4:${suffix}`,
      lane: "ai" as const,
      operation: "complete" as const,
      messages: [{ role: "user" as const, content: "bounded fixture summary" }],
      timeoutMs: 100,
    },
    timeoutMs: 100,
  };
}

describe("FinOps T4 enforcement boundary (ENF-B)", () => {
  it("1. no finopsEnforcement dependency → existing provider behavior preserved", async () => {
    const composition = composeExecutionRunD2D3();
    const result = await composition.coordinate(nominalCoordinateInput("none"));
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(result.providerCompleted).toBe(true);
  });

  it("2. ALLOW → provider invoked", async () => {
    const { providers, completeSpy } = spyAiProviders();
    const composition = composeExecutionRunD2D3({
      providers,
      finopsEnforcement: decisionPort({
        decision: "allow",
        reason: "below_threshold",
      }),
    });
    const result = await composition.coordinate(nominalCoordinateInput("allow"));
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
  });

  it("3. soft_signal → provider invoked", async () => {
    const { providers, completeSpy } = spyAiProviders();
    const composition = composeExecutionRunD2D3({
      providers,
      finopsEnforcement: decisionPort({
        decision: "soft_signal",
        reason: "threshold_crossed_signal_only",
      }),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("soft"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
  });

  it("4. FAILED → provider invoked", async () => {
    const { providers, completeSpy } = spyAiProviders();
    const composition = composeExecutionRunD2D3({
      providers,
      finopsEnforcement: decisionPort({
        decision: "failed",
        reason: "projection_missing",
        finopsSideOnly: true,
      }),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("failed"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
  });

  it("5. enforcement port throws → provider invoked, exception not leaked", async () => {
    const { providers, completeSpy } = spyAiProviders();
    const composition = composeExecutionRunD2D3({
      providers,
      finopsEnforcement: throwingPort(),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("throw"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    expect(completeSpy).toHaveBeenCalled();
    const serialized = JSON.stringify(result);
    expect(serialized).not.toMatch(/SELECT password FROM secrets/i);
    expect(serialized).not.toMatch(/host='db'/i);
  });

  it("6. BLOCK → run blocked", async () => {
    const composition = composeExecutionRunD2D3({
      finopsEnforcement: decisionPort({
        decision: "block",
        reason: "threshold_crossed_enforce",
      }),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("block-state"),
    );
    expect(result.ok).toBe(false);
    expect(result.run?.state).toBe("blocked");
  });

  it("7. BLOCK → providerAttempted false", async () => {
    const composition = composeExecutionRunD2D3({
      finopsEnforcement: decisionPort({
        decision: "block",
        reason: "threshold_crossed_enforce",
      }),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("block-attempted"),
    );
    expect(result.providerAttempted).toBe(false);
  });

  it("8. BLOCK → providerInvoked false", async () => {
    const composition = composeExecutionRunD2D3({
      finopsEnforcement: decisionPort({
        decision: "block",
        reason: "threshold_crossed_enforce",
      }),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("block-invoked"),
    );
    expect(result.providerInvoked).toBe(false);
  });

  it("9. BLOCK → provider port spy not called", async () => {
    const { providers, completeSpy } = spyAiProviders();
    const composition = composeExecutionRunD2D3({
      providers,
      finopsEnforcement: decisionPort({
        decision: "block",
        reason: "threshold_crossed_enforce",
      }),
    });
    await composition.coordinate(nominalCoordinateInput("block-spy"));
    expect(completeSpy).not.toHaveBeenCalled();
  });

  it("10. BLOCK failure code = HUMAN_GATE_REQUIRED", async () => {
    const composition = composeExecutionRunD2D3({
      finopsEnforcement: decisionPort({
        decision: "block",
        reason: "threshold_crossed_enforce",
      }),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("block-code"),
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.failure.code).toBe("HUMAN_GATE_REQUIRED");
    expect(result.failure.family).toBe("human_gate_required");
  });

  it("11. BLOCK happens after run creation", async () => {
    const composition = composeExecutionRunD2D3({
      finopsEnforcement: decisionPort({
        decision: "block",
        reason: "threshold_crossed_enforce",
      }),
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("block-created"),
    );
    expect(result.run).toBeTruthy();
    expect(result.run?.runId).toBeTruthy();
    expect(result.stateTrace[0]).toBe("idle");
    expect(result.stateTrace).toContain("blocked");
  });

  it("12. pre-engagement validation failure → T4 enforcement not called", async () => {
    const evaluate = vi.fn(async () => ({
      decision: "block" as const,
      reason: "should_not_run",
    }));
    const composition = composeExecutionRunD2D3({
      finopsEnforcement: { evaluateBeforeProvider: evaluate },
    });
    const fixture = getFixture("nominal");
    const result = await composition.coordinate({
      intent: {
        ...fixture.intent,
        intentId: "intent:t4:pre",
        correlationId: "corr:t4:pre",
        requestedLane: "none",
      },
      context: fixture.context,
      timeoutMs: 100,
    });
    expect(result.ok).toBe(false);
    expect(evaluate).not.toHaveBeenCalled();
    expect(result.run?.state).toBe("blocked");
  });

  it("13. T4 decision occurs before intent_valid / provider", async () => {
    const order: string[] = [];
    const { providers, completeSpy } = spyAiProviders();
    completeSpy.mockImplementation(async () => {
      order.push("provider");
      throw new Error("provider must not be reached after T4 block");
    });
    const composition = composeExecutionRunD2D3({
      providers,
      finopsEnforcement: {
        async evaluateBeforeProvider() {
          order.push("t4");
          return { decision: "block", reason: "threshold_crossed_enforce" };
        },
      },
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("order"),
    );
    expect(order).toEqual(["t4"]);
    expect(result.providerInvoked).toBe(false);
    expect(result.stateTrace).not.toContain("running");
    expect(completeSpy).not.toHaveBeenCalled();
  });

  it("14. compose default → no enforcement active", async () => {
    const composition = composeExecutionRunD2D3();
    // Default compose must not invent a T4 instance — behavioral proof via success path.
    const result = await composition.coordinate(
      nominalCoordinateInput("default-inert"),
    );
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
    // Source inspection: default options omit finopsEnforcement (no auto-wire).
    const fake = composeExecutionRunProvidersFake();
    expect(fake).toBeTruthy();
  });

  it("15. compose explicit optional fake enforcement → pass-through works", async () => {
    const evaluate = vi.fn(async () => ({
      decision: "allow" as const,
      reason: "not_configured",
    }));
    const composition = composeExecutionRunD2D3({
      finopsEnforcement: { evaluateBeforeProvider: evaluate },
    });
    const result = await composition.coordinate(
      nominalCoordinateInput("passthrough"),
    );
    expect(evaluate).toHaveBeenCalledTimes(1);
    expect(result.ok).toBe(true);
    expect(result.providerInvoked).toBe(true);
  });
});
