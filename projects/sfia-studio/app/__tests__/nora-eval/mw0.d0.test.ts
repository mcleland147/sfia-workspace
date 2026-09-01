/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  assertAllBarsBound,
  campaignEffectiveCapabilitySet,
  catalogSelfCheck,
  failClosedMissingObservable,
  getCatalogVersion,
  listScenarioIdsSorted,
  listScenarios,
  MW0_BUDGET_POLICY,
  BudgetTracker,
  buildMw0CapabilityManifest,
  validateCellAgainstManifest,
  runFullD0Suite,
  runD0Scenario,
  estimateCostUsd,
  conservativePreCallEstimateUsd,
  assertNoSecretLeak,
  PARITY_METRIC_TARGETS,
} from "@/lib/nora-eval";
import { OPENAI_REASONING_EFFORT_VALUES as SDK_EFFORTS } from "@/lib/platform/ai";

describe("MW0 nora-eval D0 harness", () => {
  it("S01 — catalog version + stable sorted IDs", () => {
    expect(getCatalogVersion()).toBe("mw0-catalog-v1");
    const a = listScenarioIdsSorted();
    const b = listScenarioIdsSorted();
    expect(a).toEqual(b);
    expect(catalogSelfCheck().ok).toBe(true);
    expect(listScenarios().length).toBeGreaterThanOrEqual(7);
  });

  it("S02 — all NCC-BAR bindings + fail-closed missing observable", () => {
    expect(assertAllBarsBound()).toEqual({ ok: true, missing: [] });
    const missing = failClosedMissingObservable({
      barId: "NCC-BAR-11",
      observedObservableIds: [],
    });
    expect(missing.ok).toBe(false);
    expect(missing.missingObservableId).toBe("obs.authority.absolute_boundary");
  });

  it("S07 — parity metrics defined NOT_PROVEN", () => {
    expect(PARITY_METRIC_TARGETS.status).toBe("NOT_PROVEN");
    expect(PARITY_METRIC_TARGETS.metrics.length).toBeGreaterThan(0);
  });

  it("full D0 suite PASS", async () => {
    const suite = await runFullD0Suite();
    expect(suite.catalogOk).toBe(true);
    expect(suite.barsOk).toBe(true);
    expect(suite.failed).toEqual([]);
    expect(suite.ok).toBe(true);
  });

  it("false HD promotion fixture is detected (overall PASS detection)", async () => {
    const r = await runD0Scenario("mw0.s05.authority-false-promotion-detect");
    expect(r.passFail).toBe("PASS");
    expect(
      r.scorers.some((s) => s.hardInvariantViolation && s.passFail === "FAIL"),
    ).toBe(true);
  });

  it("capability: SDK ≠ model ≠ campaign effective; minimal rejected", () => {
    const manifest = buildMw0CapabilityManifest("2026-08-29T22:00:00.000Z");
    expect(manifest.sdkCodeCapabilitySet).toEqual(SDK_EFFORTS);
    expect(SDK_EFFORTS).toContain("minimal");
    const luna = campaignEffectiveCapabilitySet(manifest, "gpt-5.6-luna");
    expect(luna.ok).toBe(true);
    expect(luna.efforts).not.toContain("minimal");
    const bad = validateCellAgainstManifest({
      manifest,
      modelId: "gpt-5.6-luna",
      reasoningEffort: "minimal",
    });
    expect(bad.ok).toBe(false);
    expect(bad.failureClass).toBe("PROVIDER_CAPABILITY");
  });

  it("budget hard cap blocks pre-call overrun", () => {
    const tracker = new BudgetTracker(MW0_BUDGET_POLICY);
    tracker.recordSpend(4.9, "near-cap");
    const manifest = buildMw0CapabilityManifest(new Date().toISOString());
    const est = conservativePreCallEstimateUsd({
      manifest,
      modelId: "gpt-5.6-sol",
      assumedInputTokens: 100_000,
      assumedOutputTokens: 50_000,
    });
    expect(est).toBeGreaterThan(0.1);
    const gate = tracker.canStartCall(est);
    expect(gate.allowed).toBe(false);
  });

  it("cost estimator uses model pricing", () => {
    const manifest = buildMw0CapabilityManifest(new Date().toISOString());
    const luna = estimateCostUsd({
      manifest,
      modelId: "gpt-5.6-luna",
      inputTokens: 1_000_000,
      outputTokens: 1_000_000,
    });
    expect(luna).toBeCloseTo(0.2 + 1.2, 5);
  });

  it("secret leak detector", () => {
    expect(assertNoSecretLeak("hello").ok).toBe(true);
    expect(assertNoSecretLeak("OPENAI_API_KEY=sk-testvaluehere").ok).toBe(false);
  });
});
