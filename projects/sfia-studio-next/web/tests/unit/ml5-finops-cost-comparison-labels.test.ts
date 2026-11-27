import { describe, expect, it } from "vitest";
import {
  costComparabilityLabel,
  formatDeltaDisplay,
  formatProviderCostDisplay,
  formatStudioEstimateDisplay,
  pilotCostComparisonMessages,
} from "@/domains/finops/finops-cost-comparison-labels";

describe("FinOps cost comparison Pilot labels", () => {
  it("uses Pilot-facing comparability labels", () => {
    expect(costComparabilityLabel("COMPARABLE")).toBe("Comparable");
    expect(costComparabilityLabel("NON_COMPARABLE")).toBe("Non comparable");
    expect(costComparabilityLabel("PARTIAL")).toBe("Partiel");
    expect(costComparabilityLabel("UNAVAILABLE")).toBe("Indisponible");
  });

  it("never echoes internal limit codes", () => {
    const msgs = pilotCostComparisonMessages([
      "ORG_IDENTITY_UNPROVEN",
      "NO_FINANCIAL_HABILITATION_FOR_PROVIDER_AGGREGATE",
      "SOME_UNKNOWN_INTERNAL_CODE",
    ]);
    expect(msgs.join(" ")).not.toMatch(/org:unspecified|DTO|disclosed|ownership|ORG_IDENTITY/i);
    expect(msgs.some((m) => m.includes("organisation fournisseur"))).toBe(true);
    expect(msgs.some((m) => m.includes("n’est pas autorisé"))).toBe(true);
  });

  it("distinguishes Studio estimate from provider cost", () => {
    const studio = formatStudioEstimateDisplay(1.3, "partial");
    expect(studio.hint).toMatch(/Studio/);
    expect(studio.value).toMatch(/1,30/);

    const providerMasked = formatProviderCostDisplay({
      providerCostUsd: null,
      providerCurrency: null,
      comparability: "UNAVAILABLE",
    });
    expect(providerMasked.value).toBe("Non autorisé");
    expect(providerMasked.hint).toMatch(/fournisseur/i);

    const providerShown = formatProviderCostDisplay({
      providerCostUsd: 13.1,
      providerCurrency: "usd",
      comparability: "COMPARABLE",
    });
    expect(providerShown.value).toMatch(/13,10/);
  });

  it("shows delta only when COMPARABLE and disclosed amount present", () => {
    expect(
      formatDeltaDisplay({
        comparability: "NON_COMPARABLE",
        providerCostUsd: null,
        deltaUsd: 0.7,
      }),
    ).toBeNull();
    expect(
      formatDeltaDisplay({
        comparability: "COMPARABLE",
        providerCostUsd: 13.1,
        deltaUsd: 0.7,
      }),
    ).toMatch(/Écart/);
  });
});
