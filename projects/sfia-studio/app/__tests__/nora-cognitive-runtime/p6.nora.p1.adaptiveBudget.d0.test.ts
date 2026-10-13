/**
 * P6 Nora P1 — Adaptive Runner Budget (deterministic).
 * ZERO REAL.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  ADAPTIVE_MAX_TURNS_CEILING,
  ADAPTIVE_MAX_TURNS_FLOOR,
  LEGACY_DEFAULT_MAX_TURNS,
  STRATEGY_BASE_MAX_TURNS,
  inferWorkloadHintsFromUserContent,
  resolveAdaptiveMaxTurns,
} from "@/lib/nora-cognitive-runtime/adaptiveTurnBudget";
import { decideCognitiveStrategy } from "@/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy";

describe("P6 Nora P1 — Adaptive maxTurns policy", () => {
  it("legacy default remains 5; ceiling is not experimental 12", () => {
    expect(LEGACY_DEFAULT_MAX_TURNS).toBe(5);
    expect(ADAPTIVE_MAX_TURNS_CEILING).toBe(10);
    expect(ADAPTIVE_MAX_TURNS_CEILING).toBeLessThan(12);
    expect(STRATEGY_BASE_MAX_TURNS.Routine).toBe(5);
    expect(STRATEGY_BASE_MAX_TURNS.Focused).toBe(8);
    expect(STRATEGY_BASE_MAX_TURNS.Deep).toBe(10);
  });

  it("explicit maxTurns wins (tests / eval)", () => {
    const d = resolveAdaptiveMaxTurns({
      strategyClass: "Deep",
      explicitMaxTurns: 3,
    });
    expect(d.requestedMaxTurns).toBe(3);
    expect(d.explicitOverride).toBe(true);
    expect(d.reasonCodes).toContain("explicit_caller_maxTurns");
  });

  it("Routine → 5; Focused → 8; Deep → 10; never above ceiling", () => {
    expect(
      resolveAdaptiveMaxTurns({ strategyClass: "Routine" }).requestedMaxTurns,
    ).toBe(5);
    expect(
      resolveAdaptiveMaxTurns({ strategyClass: "Focused" }).requestedMaxTurns,
    ).toBe(8);
    expect(
      resolveAdaptiveMaxTurns({ strategyClass: "Deep" }).requestedMaxTurns,
    ).toBe(10);
    expect(
      resolveAdaptiveMaxTurns({ strategyClass: "High-Assurance" })
        .requestedMaxTurns,
    ).toBeLessThanOrEqual(ADAPTIVE_MAX_TURNS_CEILING);
  });

  it("UNKNOWN signals do not inflate beyond strategy base", () => {
    const d = resolveAdaptiveMaxTurns({
      strategyClass: "Focused",
      signals: {
        sourceBreadth: "unknown",
        verificationNeed: "unknown",
        reasoningDepth: "unknown",
      },
    });
    expect(d.requestedMaxTurns).toBe(8);
    expect(d.reasonCodes.some((c) => c.includes("unknown_signals"))).toBe(
      true,
    );
  });

  it("known-high documentary hints elevate strategy class via CWP", () => {
    const hints = inferWorkloadHintsFromUserContent(
      "Analyse plusieurs documents du projet et croise les sources.",
    );
    expect(hints.sourceBreadth).toBe("high");
    const strategy = decideCognitiveStrategy({
      signals: {
        ambiguity: "unknown",
        reasoningDepth: "medium",
        sourceBreadth: hints.sourceBreadth!,
        toolDependency: hints.toolDependency ?? "unknown",
        contradictionRisk: "unknown",
        contextSize: "medium",
        verificationNeed: hints.verificationNeed ?? "unknown",
        multimodality: "unknown",
        latencySensitivity: "unknown",
        costBudget: "unknown",
        rigorCriticality: "medium",
      },
    });
    expect(["Deep", "Focused", "High-Assurance"]).toContain(
      strategy.strategyClass,
    );
    const budget = resolveAdaptiveMaxTurns({
      strategyClass: strategy.strategyClass,
      signals: strategy.normalizedSignals,
    });
    expect(budget.requestedMaxTurns).toBeGreaterThanOrEqual(8);
    expect(budget.requestedMaxTurns).toBeLessThanOrEqual(
      ADAPTIVE_MAX_TURNS_CEILING,
    );
    expect(budget.requestedMaxTurns).toBeGreaterThanOrEqual(
      ADAPTIVE_MAX_TURNS_FLOOR,
    );
  });

  it("natural mono-file synthèse does not set sourceBreadth=high", () => {
    const hints = inferWorkloadHintsFromUserContent(
      "Consulte projects/sfia-studio/docs/a.md et fais-en une synthèse.",
    );
    expect(hints.toolDependency).toBe("high");
    expect(hints.reasoningDepth).toBe("medium");
    expect(hints.sourceBreadth).toBeUndefined();
    const budget = resolveAdaptiveMaxTurns({
      strategyClass: "Routine",
      signals: hints,
    });
    // Mono-doc tool+depth bump lifts Routine base to at least Focused floor (8).
    expect(budget.requestedMaxTurns).toBe(8);
    expect(budget.reasonCodes).toContain("known_mono_doc_tool_synthesis_bump");
  });

  it("null strategy falls back to legacy 5", () => {
    expect(
      resolveAdaptiveMaxTurns({ strategyClass: null }).requestedMaxTurns,
    ).toBe(5);
  });

  it("absent maxTurns uses adaptive; explicit NaN/Infinity preserved (no adaptive fallback)", () => {
    const absent = resolveAdaptiveMaxTurns({ strategyClass: "Routine" });
    expect(absent.explicitOverride).toBe(false);
    expect(absent.requestedMaxTurns).toBe(5);

    for (const bad of [
      Number.NaN,
      Number.POSITIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
    ]) {
      const d = resolveAdaptiveMaxTurns({
        strategyClass: "Deep",
        explicitMaxTurns: bad,
      });
      expect(d.explicitOverride).toBe(true);
      expect(d.reasonCodes).toContain("explicit_caller_maxTurns_non_finite");
      expect(Number.isFinite(d.requestedMaxTurns)).toBe(false);
      // Must not silently substitute Deep adaptive ceiling (10).
      expect(d.requestedMaxTurns).not.toBe(10);
    }
  });
});
