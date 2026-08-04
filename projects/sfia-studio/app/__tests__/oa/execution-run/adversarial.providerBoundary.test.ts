/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  validateUntrustedProviderRequest,
  validateUntrustedProviderResult,
} from "@/lib/oa/execution-run/domain/providerBoundary";

describe("D2D2-07 adversarial provider boundary", () => {
  const cases: unknown[] = [
    null,
    undefined,
    1,
    "x",
    [],
    {},
    { correlationId: "c", lane: "ai" },
    { correlationId: "c", lane: "nope", operation: "o" },
    { correlationId: "c", lane: "ai", operation: "o", timeoutMs: -1 },
    { correlationId: "c", lane: "ai", operation: "complete", apiKey: "secret" },
    { correlationId: "c", lane: "git", operation: "read", path: "../etc/passwd" },
    {
      correlationId: "c",
      lane: "none",
      operation: "totally_arbitrary_op",
      unexpectedExtra: true,
    },
    { correlationId: "c", lane: "git", operation: "read" },
    {
      correlationId: "c",
      lane: "ai",
      operation: "complete",
      messages: [{ role: "user", content: "hi" }],
      extraField: 1,
    },
  ];

  it.each(cases.map((c, i) => [i, c] as const))("rejects case %s", (_i, input) => {
    const v = validateUntrustedProviderRequest(input);
    expect(v.ok).toBe(false);
  });

  it("accepts a minimal valid request before metadata use", () => {
    const v = validateUntrustedProviderRequest({
      correlationId: "c",
      lane: "ai",
      operation: "complete",
      messages: [{ role: "user", content: "hi" }],
    });
    expect(v.ok).toBe(true);
  });

  it("requires git owner/repo/kind", () => {
    expect(
      validateUntrustedProviderRequest({
        correlationId: "c",
        lane: "git",
        operation: "read",
        owner: "o",
        repo: "r",
        kind: "repository",
      }).ok,
    ).toBe(true);
  });

  it("rejects provider results with raw/sensitive fields", () => {
    expect(
      validateUntrustedProviderResult(
        { kind: "success", redactedSummary: "x", prompt: "FULL" },
        "c",
      ).ok,
    ).toBe(false);
    expect(
      validateUntrustedProviderResult(
        { kind: "success", redactedSummary: "x", token: "x" },
        "c",
      ).ok,
    ).toBe(false);
    expect(
      validateUntrustedProviderResult(
        {
          kind: "success",
          redactedSummary: "echo=alice@example.com sk-abcdefghijklmnopqrstuvwxyz",
        },
        "c",
      ).ok,
    ).toBe(false);
  });
});
