/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { evaluateReadOnlyPolicy, getFixture } from "@/lib/oa/execution-run";

describe("D2-D1 read-only policy", () => {
  it("denies mutation", () => {
    const f = getFixture("mutation_forbidden");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("MUTATION_FORBIDDEN");
  });

  it("denies protected path", () => {
    const f = getFixture("protected_path");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("PROTECTED_PATH");
  });

  it("denies auth failure", () => {
    const f = getFixture("auth_failure");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("AUTHORIZATION_ERROR");
  });

  it("denies provider unavailable", () => {
    const f = getFixture("provider_unavailable");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("PROVIDER_UNAVAILABLE");
  });

  it("denies source mismatch", () => {
    const f = getFixture("source_mismatch");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("SOURCE_MISMATCH");
  });

  it("denies unsatisfied human gate", () => {
    const f = getFixture("blocked_gate");
    const d = evaluateReadOnlyPolicy({
      intent: f.intent,
      context: f.context,
      capability: f.capability,
      gateSatisfied: false,
    });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("HUMAN_GATE_REQUIRED");
  });

  it("accepts nominal", () => {
    const f = getFixture("nominal");
    const d = evaluateReadOnlyPolicy({ intent: f.intent, context: f.context, capability: f.capability });
    expect(d.ok).toBe(true);
  });

  it("never exposes secrets in failures", () => {
    const f = getFixture("secret_redaction");
    expect(JSON.stringify(f.expectedFailure)).not.toMatch(/sk-|BEGIN PRIVATE|password/i);
    expect(f.expectedFailure?.technicalDetailsRedacted).toBe(true);
  });

  it("denies Cursor regardless of capability.verified", () => {
    const f = getFixture("nominal");
    const d = evaluateReadOnlyPolicy({
      intent: {
        ...f.intent,
        requestedLane: "cursor",
        intentId: "intent:cursor",
        correlationId: "corr:cursor",
      },
      context: f.context,
      capability: {
        lane: "cursor",
        capabilityId: "cursor:fake",
        available: true,
        verified: true,
        readOnly: true,
        supportsCancellation: true,
        supportsTimeout: true,
      },
    });
    expect(d.ok).toBe(false);
    if (!d.ok) expect(d.failure.code).toBe("SANDBOX_BLOCKED");
  });
});
