/**
 * P5-S06 CP02 — request-scoped Nora turn abort (not Cognitive STOP, not Execution STOP).
 * AbortSignal is the only cancellation token. Not Product truth.
 */

export class NoraTurnAbortedError extends Error {
  readonly code = "NORA_TURN_STOPPED" as const;
  constructor() {
    super("NORA_TURN_STOPPED");
    this.name = "NoraTurnAbortedError";
  }
}

export function isAbortLike(
  error: unknown,
  signal?: AbortSignal,
): boolean {
  if (signal?.aborted) return true;
  if (error instanceof NoraTurnAbortedError) return true;
  if (typeof DOMException !== "undefined" && error instanceof DOMException) {
    return error.name === "AbortError";
  }
  if (error instanceof Error) {
    return (
      error.name === "AbortError" ||
      error.message === "AbortError" ||
      error.message === "NORA_TURN_STOPPED"
    );
  }
  return false;
}

export function throwIfAborted(signal?: AbortSignal): void {
  if (signal?.aborted) {
    throw new NoraTurnAbortedError();
  }
}

export function abortError(): Error {
  const error = new Error("AbortError");
  error.name = "AbortError";
  return error;
}
