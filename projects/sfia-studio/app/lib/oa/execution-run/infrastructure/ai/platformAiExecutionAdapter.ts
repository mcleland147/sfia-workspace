/**
 * AI-B wrapper around platform ConversationProvider.
 * Maps to D2-D contracts; does not re-export SDK types.
 */
import type { ConversationProvider } from "@/lib/platform/ai/types";
import type { AiExecutionPort } from "../../ports/aiExecutionPort";
import type { AiCompletionRequest, ProviderInvocationResult } from "../../ports/providerResult";
import type { ProviderCapabilityDescriptor } from "../../domain/types";
import { normalizedFailure } from "../../domain/errors";
import { validateUntrustedProviderRequest } from "../../domain/providerBoundary";
import { invokeWithTimeoutAndCancellation } from "../../application/providerInvocation";
import { safeProviderRedactedSummary } from "../events/redactEventDetail";

export type PlatformAiAdapterOptions = {
  /** Required when request.timeoutMs omitted — no invented production default. */
  readonly defaultTimeoutMs?: number;
  /** Explicit verification evidence only; never inferred from available. */
  readonly verified?: boolean;
};

export class PlatformAiExecutionAdapter implements AiExecutionPort {
  readonly lane = "ai" as const;

  constructor(
    private readonly provider: ConversationProvider,
    private readonly opts?: PlatformAiAdapterOptions,
  ) {}

  describeCapability(): ProviderCapabilityDescriptor {
    return {
      lane: "ai",
      capabilityId: `d2d2-ai-platform:${this.provider.providerId}`,
      available: true,
      verified: this.opts?.verified === true,
      readOnly: true,
      supportsCancellation: true,
      supportsTimeout: true,
    };
  }

  async complete(request: AiCompletionRequest): Promise<ProviderInvocationResult> {
    const boundary = validateUntrustedProviderRequest(request);
    if (!boundary.ok) return { kind: "failure", failure: boundary.failure };

    const timeoutMs = request.timeoutMs ?? this.opts?.defaultTimeoutMs;
    if (timeoutMs === undefined) {
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

    const outcome = await invokeWithTimeoutAndCancellation(
      async (signal) => {
        if (signal.aborted) {
          return {
            kind: "cancelled" as const,
            failure: normalizedFailure({
              family: "cancelled",
              code: "CANCELLED",
              userMessage: "AI cancelled",
              retryable: false,
              correlationId: request.correlationId,
            }),
          };
        }
        try {
          const raw = await this.provider.complete(
            request.messages.map((m) => ({ role: m.role, content: m.content })),
          );
          if (signal.aborted) {
            return {
              kind: "cancelled" as const,
              failure: normalizedFailure({
                family: "cancelled",
                code: "CANCELLED",
                userMessage: "AI cancelled",
                retryable: false,
                correlationId: request.correlationId,
              }),
            };
          }
          const usage =
            raw.usage.inputTokens != null || raw.usage.outputTokens != null
              ? {
                  status: "validated" as const,
                  inputTokens: raw.usage.inputTokens ?? undefined,
                  outputTokens: raw.usage.outputTokens ?? undefined,
                  unit: "tokens",
                }
              : { status: "unavailable" as const, reason: "provider usage missing" };
          return {
            kind: "success" as const,
            completeness: "complete" as const,
            redactedSummary: safeProviderRedactedSummary({
              adapter: "AI-B",
              operation: "complete",
              status: "ok",
              providerId: this.provider.providerId,
            }),
            disclosureNotes: [
              `providerId=${this.provider.providerId}`,
              "raw_prompt_omitted",
              "raw_response_omitted",
              `verified=${this.opts?.verified === true}`,
            ],
            usage,
          };
        } catch {
          return {
            kind: "failure" as const,
            failure: normalizedFailure({
              family: "provider_unavailable",
              code: "PROVIDER_UNAVAILABLE",
              userMessage: "AI provider unavailable",
              retryable: true,
              correlationId: request.correlationId,
            }),
          };
        }
      },
      { timeoutMs, signal: request.signal, correlationId: request.correlationId, maxRetries: 0 },
    );

    if (outcome.status === "completed") return outcome.result;
    if (outcome.status === "timed_out") return { kind: "timed_out", failure: outcome.failure };
    if (outcome.status === "cancelled") return { kind: "cancelled", failure: outcome.failure };
    return { kind: "failure", failure: outcome.failure };
  }
}
