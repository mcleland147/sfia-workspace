/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  decideTransition,
  listAllowedTransitions,
  EXECUTION_STATES,
  isTerminalState,
} from "@/lib/oa/execution-run";

describe("D2-D1 transition authority", () => {
  it("exposes exactly eight states", () => {
    expect(EXECUTION_STATES).toHaveLength(8);
  });

  it("allows documented transitions", () => {
    for (const edge of listAllowedTransitions()) {
      expect(
        decideTransition({
          from: edge.from,
          to: edge.to,
          reason: edge.reason,
          completeness: edge.to === "succeeded" ? "complete" : undefined,
        }).allowed,
      ).toBe(true);
    }
  });

  it("refuses terminal without new run", () => {
    for (const state of ["succeeded", "failed", "cancelled", "timed_out", "blocked"] as const) {
      expect(isTerminalState(state)).toBe(true);
      const d = decideTransition({ from: state, to: "running", reason: "intent_valid" });
      expect(d.allowed).toBe(false);
    }
  });

  it("refuses partial succeeded", () => {
    const d = decideTransition({
      from: "running",
      to: "succeeded",
      reason: "outputs_validated",
      completeness: "partial",
    });
    expect(d.allowed).toBe(false);
  });

  it("refuses late result state mutation", () => {
    const d = decideTransition({
      from: "cancelled",
      to: "succeeded",
      reason: "late_result_evidence_only",
    });
    expect(d.allowed).toBe(false);
  });

  it("refuses idle→succeeded", () => {
    const d = decideTransition({
      from: "idle",
      to: "succeeded",
      reason: "outputs_validated",
      completeness: "complete",
    });
    expect(d.allowed).toBe(false);
  });

  it("samples refused transitions per non-terminal state", () => {
    const samples = [
      { from: "idle" as const, to: "failed" as const, reason: "engaged_operation_failed" as const },
      { from: "running" as const, to: "idle" as const, reason: "intent_valid" as const },
      {
        from: "awaiting_human" as const,
        to: "succeeded" as const,
        reason: "outputs_validated" as const,
        completeness: "complete" as const,
      },
    ];
    for (const s of samples) {
      expect(decideTransition(s).allowed).toBe(false);
    }
  });

  it("preserves exactly the adopted allowed edge count", () => {
    expect(listAllowedTransitions()).toHaveLength(11);
  });
});
