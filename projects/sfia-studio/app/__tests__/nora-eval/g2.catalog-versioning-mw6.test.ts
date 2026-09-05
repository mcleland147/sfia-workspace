/** @vitest-environment node */
/**
 * G2 — catalog versioning + MW6 eval coverage (ZERO REAL).
 */
import { describe, expect, it } from "vitest";
import {
  NORA_EVAL_CATALOG_VERSION,
  NORA_EVAL_GLOBAL_CATALOG_VERSION,
  catalogSelfCheck,
  getCatalogVersion,
  getScenario,
  listCatalogVersions,
  listScenarioIdsSorted,
  listScenarios,
  observeMw6S01FromRuntime,
  observeMw6S02FromRuntime,
  runD0Scenario,
  runFullD0Suite,
  scoreHardInvariants,
} from "@/lib/nora-eval";

describe("G2 — catalog versioning + MW6 coverage", () => {
  it("historical mw0-catalog-v1 pin preserved (no MW6)", () => {
    expect(getCatalogVersion()).toBe("mw0-catalog-v1");
    expect(NORA_EVAL_CATALOG_VERSION).toBe("mw0-catalog-v1");
    const hist = listScenarios(NORA_EVAL_CATALOG_VERSION);
    expect(catalogSelfCheck(NORA_EVAL_CATALOG_VERSION).ok).toBe(true);
    expect(hist.every((s) => s.catalogVersion === "mw0-catalog-v1")).toBe(true);
    expect(
      hist.some((s) => s.scenarioId.startsWith("mw6.")),
    ).toBe(false);
    expect(getScenario("mw6.s01.domain-aware-source-strategy")).toBeUndefined();
  });

  it("global-mr-catalog-v1 includes historical IDs + MW6", () => {
    expect(listCatalogVersions()).toEqual([
      "mw0-catalog-v1",
      "global-mr-catalog-v1",
    ]);
    const global = listScenarios(NORA_EVAL_GLOBAL_CATALOG_VERSION);
    expect(catalogSelfCheck(NORA_EVAL_GLOBAL_CATALOG_VERSION).ok).toBe(true);
    const histIds = listScenarioIdsSorted(NORA_EVAL_CATALOG_VERSION);
    for (const id of histIds) {
      expect(getScenario(id, NORA_EVAL_GLOBAL_CATALOG_VERSION)?.scenarioId).toBe(
        id,
      );
    }
    expect(
      getScenario(
        "mw6.s01.domain-aware-source-strategy",
        NORA_EVAL_GLOBAL_CATALOG_VERSION,
      )?.storyIds,
    ).toEqual(["MW6-S01"]);
    expect(
      getScenario(
        "mw6.s02.read-search-partiality-failclosed",
        NORA_EVAL_GLOBAL_CATALOG_VERSION,
      )?.storyIds,
    ).toEqual(["MW6-S02"]);
    expect(global.length).toBe(histIds.length + 2);
  });

  it("MW6-S01/S02 D0 scenarios PASS with independent observables", async () => {
    const s01 = await runD0Scenario(
      "mw6.s01.domain-aware-source-strategy",
      NORA_EVAL_GLOBAL_CATALOG_VERSION,
    );
    expect(s01.passFail).toBe("PASS");
    const s02 = await runD0Scenario(
      "mw6.s02.read-search-partiality-failclosed",
      NORA_EVAL_GLOBAL_CATALOG_VERSION,
    );
    expect(s02.passFail).toBe("PASS");

    const obs01 = observeMw6S01FromRuntime();
    expect(obs01.mw6DomainAwareStrategyOk).toBe(true);
    expect(obs01.mw6VendorNeutralContractOk).toBe(true);
    expect(obs01.mw6NoAuthorityPromotionOk).toBe(true);

    const obs02 = observeMw6S02FromRuntime();
    expect(obs02.mw6SearchReadDistinctionOk).toBe(true);
    expect(obs02.mw6PartialityHonestyOk).toBe(true);
    expect(obs02.mw6FailClosedNarrativeOk).toBe(true);
    expect(obs02.mw6NoAuthorityPromotionOk).toBe(true);

    // Missing independent observable → hard FAIL (no synthesis)
    const scenario = getScenario(
      "mw6.s01.domain-aware-source-strategy",
      NORA_EVAL_GLOBAL_CATALOG_VERSION,
    )!;
    const missing = scoreHardInvariants(scenario, {
      productPath: "agents",
      mw6DomainAwareStrategyOk: false,
      mw6VendorNeutralContractOk: true,
      mw6NoAuthorityPromotionOk: true,
    });
    expect(
      missing.some(
        (s) =>
          s.scorerId === "hard.mw6_domain_aware_strategy" &&
          s.passFail === "FAIL",
      ),
    ).toBe(true);
  });

  it("historical D0 suite still PASS; global suite includes MW6", async () => {
    const hist = await runFullD0Suite(NORA_EVAL_CATALOG_VERSION);
    expect(hist.ok).toBe(true);
    expect(hist.failed).toEqual([]);

    const global = await runFullD0Suite(NORA_EVAL_GLOBAL_CATALOG_VERSION);
    expect(global.catalogOk).toBe(true);
    expect(global.failed).toEqual([]);
    expect(global.ok).toBe(true);
    expect(
      global.results.some(
        (r) => r.cell.scenarioId === "mw6.s01.domain-aware-source-strategy",
      ),
    ).toBe(true);
  });

  it("A — historical scenario / historical catalog: scenarioVersion ↔ evidenceRefs", async () => {
    const r = await runD0Scenario(
      "mw0.s01.catalog-mechanics",
      NORA_EVAL_CATALOG_VERSION,
    );
    expect(r.passFail).toBe("PASS");
    expect(r.cell.scenarioVersion).toBe(NORA_EVAL_CATALOG_VERSION);
    expect(r.cell.scenarioVersion).toBe("mw0-catalog-v1");
    expect(r.evidenceRefs).toEqual(["catalog:mw0-catalog-v1"]);
  });

  it("B — MW6 / global catalog: scenarioVersion ↔ evidenceRefs", async () => {
    const r = await runD0Scenario(
      "mw6.s01.domain-aware-source-strategy",
      NORA_EVAL_GLOBAL_CATALOG_VERSION,
    );
    expect(r.passFail).toBe("PASS");
    expect(r.cell.scenarioVersion).toBe(NORA_EVAL_GLOBAL_CATALOG_VERSION);
    expect(r.cell.scenarioVersion).toBe("global-mr-catalog-v1");
    expect(r.evidenceRefs).toEqual(["catalog:global-mr-catalog-v1"]);
    expect(r.evidenceRefs).not.toContain("catalog:mw0-catalog-v1");
  });

  it("C — historical scenario under global catalog: corpus version in evidenceRefs", async () => {
    const r = await runD0Scenario(
      "mw0.s01.catalog-mechanics",
      NORA_EVAL_GLOBAL_CATALOG_VERSION,
    );
    expect(r.passFail).toBe("PASS");
    expect(r.cell.scenarioId).toBe("mw0.s01.catalog-mechanics");
    expect(r.cell.scenarioVersion).toBe(NORA_EVAL_GLOBAL_CATALOG_VERSION);
    expect(r.cell.scenarioVersion).toBe("global-mr-catalog-v1");
    expect(r.evidenceRefs).toEqual(["catalog:global-mr-catalog-v1"]);
    expect(r.evidenceRefs).not.toContain("catalog:mw0-catalog-v1");
  });
});
