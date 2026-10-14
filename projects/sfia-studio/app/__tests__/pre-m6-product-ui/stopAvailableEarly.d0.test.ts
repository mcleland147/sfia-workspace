/**
 * P6 — Stop availability contract (deterministic unit of the busy/cancellable rule).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";

/**
 * Mirrors useProductConversation stopAvailable formula.
 * Stop must replace Send whenever an AbortController-backed turn is live,
 * even before React startTransition flips uiState to ASSISTANT_WORKING.
 */
function stopAvailable(input: {
  cancellable: boolean;
  blocked: boolean;
  f3Busy: boolean;
}): boolean {
  return input.cancellable && !input.blocked && !input.f3Busy;
}

describe("P6 stopAvailable early cancellable contract", () => {
  it("SENDING/WORKING: cancellable true → Arrêter available", () => {
    expect(
      stopAvailable({ cancellable: true, blocked: false, f3Busy: false }),
    ).toBe(true);
  });

  it("IDLE: cancellable false → Envoyer path (stop unavailable)", () => {
    expect(
      stopAvailable({ cancellable: false, blocked: false, f3Busy: false }),
    ).toBe(false);
  });

  it("blocked or f3Busy suppresses stop even if cancellable", () => {
    expect(
      stopAvailable({ cancellable: true, blocked: true, f3Busy: false }),
    ).toBe(false);
    expect(
      stopAvailable({ cancellable: true, blocked: false, f3Busy: true }),
    ).toBe(false);
  });
});
