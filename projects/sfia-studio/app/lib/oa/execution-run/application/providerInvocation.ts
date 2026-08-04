/**
 * D2D2-06 ASYNC-B — Promise + AbortSignal coordination.
 * Does not mutate ExecutionRun state directly; callers must use create/transition.
 * Late results never mutate terminals — evidence-only via transition API.
 */
import { normalizedFailure } from "../domain/errors";
import type { NormalizedFailure } from "../domain/types";
import type { ProviderInvocationResult } from "../ports/providerResult";

export type RetryClass = "none" | "retryable" | "non_retryable";

export type InvokeOptions = {
  readonly timeoutMs: number;
  readonly signal?: AbortSignal;
  readonly correlationId: string;
  readonly maxRetries?: number; // default 0; never infinite
  readonly classifyRetry?: (failure: NormalizedFailure) => RetryClass;
};

export type InvokeOutcome =
  | { readonly status: "completed"; readonly result: ProviderInvocationResult }
  | { readonly status: "timed_out"; readonly failure: NormalizedFailure }
  | { readonly status: "cancelled"; readonly failure: NormalizedFailure }
  | { readonly status: "failed"; readonly failure: NormalizedFailure };

function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(Object.assign(new Error("aborted"), { name: "AbortError" }));
      return;
    }
    const t = setTimeout(resolve, ms);
    const onAbort = () => {
      clearTimeout(t);
      reject(Object.assign(new Error("aborted"), { name: "AbortError" }));
    };
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

export async function invokeWithTimeoutAndCancellation<T extends ProviderInvocationResult>(
  operation: (signal: AbortSignal) => Promise<T>,
  options: InvokeOptions,
): Promise<InvokeOutcome> {
  const maxRetries = Math.max(0, Math.min(options.maxRetries ?? 0, 3));
  let attempt = 0;
  let lastFailure: NormalizedFailure | undefined;

  while (attempt <= maxRetries) {
    attempt += 1;
    if (options.signal?.aborted) {
      return {
        status: "cancelled",
        failure: normalizedFailure({
          family: "cancelled",
          code: "CANCELLED",
          userMessage: "Provider invocation cancelled",
          retryable: false,
          correlationId: options.correlationId,
        }),
      };
    }

    const controller = new AbortController();
    const onOuterAbort = () => controller.abort();
    options.signal?.addEventListener("abort", onOuterAbort, { once: true });

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const timeoutPromise = new Promise<"__timeout__">((resolve) => {
      timeoutId = setTimeout(() => {
        controller.abort();
        resolve("__timeout__");
      }, options.timeoutMs);
    });

    try {
      const raced = await Promise.race([
        operation(controller.signal).then((r) => ({ tag: "result" as const, r })),
        timeoutPromise.then((t) => ({ tag: "timeout" as const, t })),
        new Promise<{ tag: "cancelled" }>((resolve) => {
          if (options.signal?.aborted) {
            resolve({ tag: "cancelled" });
            return;
          }
          options.signal?.addEventListener(
            "abort",
            () => resolve({ tag: "cancelled" }),
            { once: true },
          );
        }),
      ]);

      if (timeoutId) clearTimeout(timeoutId);
      options.signal?.removeEventListener("abort", onOuterAbort);

      if (raced.tag === "timeout") {
        return {
          status: "timed_out",
          failure: normalizedFailure({
            family: "timed_out",
            code: "TIMED_OUT",
            userMessage: "Provider invocation timed out",
            retryable: true,
            correlationId: options.correlationId,
          }),
        };
      }
      if (raced.tag === "cancelled" || options.signal?.aborted) {
        return {
          status: "cancelled",
          failure: normalizedFailure({
            family: "cancelled",
            code: "CANCELLED",
            userMessage: "Provider invocation cancelled",
            retryable: false,
            correlationId: options.correlationId,
          }),
        };
      }
      return { status: "completed", result: raced.r };
    } catch {
      if (timeoutId) clearTimeout(timeoutId);
      options.signal?.removeEventListener("abort", onOuterAbort);
      if (options.signal?.aborted) {
        return {
          status: "cancelled",
          failure: normalizedFailure({
            family: "cancelled",
            code: "CANCELLED",
            userMessage: "Provider invocation cancelled",
            retryable: false,
            correlationId: options.correlationId,
          }),
        };
      }
      if (controller.signal.aborted) {
        return {
          status: "timed_out",
          failure: normalizedFailure({
            family: "timed_out",
            code: "TIMED_OUT",
            userMessage: "Provider invocation timed out",
            retryable: true,
            correlationId: options.correlationId,
          }),
        };
      }
      lastFailure = normalizedFailure({
        family: "provider_unavailable",
        code: "PROVIDER_UNAVAILABLE",
        userMessage: "Provider invocation failed",
        retryable: true,
        correlationId: options.correlationId,
      });
      const cls = options.classifyRetry?.(lastFailure) ?? "non_retryable";
      if (cls !== "retryable" || attempt > maxRetries) {
        return { status: "failed", failure: lastFailure };
      }
      await sleep(1, options.signal);
    }
  }

  return {
    status: "failed",
    failure:
      lastFailure ??
      normalizedFailure({
        family: "internal_normalized_failure",
        code: "INTERNAL_NORMALIZED_FAILURE",
        userMessage: "Provider invocation exhausted",
        retryable: false,
        correlationId: options.correlationId,
      }),
  };
}

/**
 * Late provider results must NOT mutate terminal state.
 * Returns an evidence-only record for the caller to persist via transitionExecutionRun.
 */
export function recordLateProviderResult(input: {
  readonly receivedAt: string;
  readonly terminalState: string;
  readonly redactedSummary: string;
}): {
  readonly kind: "late_result";
  readonly mutatesTerminal: false;
  readonly receivedAt: string;
  readonly terminalStateAtReceipt: string;
  readonly redactedSummary: string;
} {
  return {
    kind: "late_result",
    mutatesTerminal: false,
    receivedAt: input.receivedAt,
    terminalStateAtReceipt: input.terminalState,
    redactedSummary: input.redactedSummary,
  };
}
