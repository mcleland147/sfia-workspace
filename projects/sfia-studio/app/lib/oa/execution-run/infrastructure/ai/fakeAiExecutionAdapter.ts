import type { AiExecutionPort } from "../../ports/aiExecutionPort";
import type { AiCompletionRequest, ProviderInvocationResult } from "../../ports/providerResult";
import type { ProviderCapabilityDescriptor } from "../../domain/types";
import { normalizedFailure } from "../../domain/errors";
import { validateUntrustedProviderRequest } from "../../domain/providerBoundary";
import { safeProviderRedactedSummary } from "../events/redactEventDetail";

/** Deterministic AI fake for CI — never live. verified=false (no product verification). */
export class FakeAiExecutionAdapter implements AiExecutionPort {
  readonly lane = "ai" as const;
  private calls = 0;

  describeCapability(): ProviderCapabilityDescriptor {
    return {
      lane: "ai",
      capabilityId: "d2d2-ai-fake",
      available: true,
      verified: false,
      readOnly: true,
      supportsCancellation: true,
      supportsTimeout: true,
    };
  }

  async complete(request: AiCompletionRequest): Promise<ProviderInvocationResult> {
    const boundary = validateUntrustedProviderRequest(request);
    if (!boundary.ok) return { kind: "failure", failure: boundary.failure };
    if (request.timeoutMs === undefined) {
      return {
        kind: "failure",
        failure: normalizedFailure({
          family: "validation",
          code: "VALIDATION_ERROR",
          userMessage: "timeoutMs required (no invented default)",
          retryable: false,
          correlationId: request.correlationId,
        }),
      };
    }
    if (request.signal?.aborted) {
      return {
        kind: "cancelled",
        failure: normalizedFailure({
          family: "cancelled",
          code: "CANCELLED",
          userMessage: "AI fake cancelled",
          retryable: false,
          correlationId: request.correlationId,
        }),
      };
    }
    this.calls += 1;
    return {
      kind: "success",
      completeness: "complete",
      redactedSummary: safeProviderRedactedSummary({
        adapter: "FAKE/NON-LIVE",
        operation: "complete",
        status: "ok",
        callIndex: this.calls,
      }),
      disclosureNotes: ["source=fake", "live=false", "verified=false"],
      usage: {
        status: "validated",
        inputTokens: 10,
        outputTokens: 5,
        unit: "tokens",
      },
    };
  }
}
