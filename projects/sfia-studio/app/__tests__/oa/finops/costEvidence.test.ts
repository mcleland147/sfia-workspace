/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  FINOPS_SOURCES,
  assertDistinctEvidenceClasses,
  assertUnknownNotNumericZero,
  classifyCostEvidenceFromSource,
  evaluateBlockingEligibility,
  isUnknownEvidence,
  type FinOpsSourceOfTruth,
} from "@/lib/oa/finops";

describe("FinOps T0 cost evidence (T-TECH-05 / T-TECH-06)", () => {
  it("maps every SoT to the closed evidence class", () => {
    const expected: Record<FinOpsSourceOfTruth, string> = {
      BILLED: "billed",
      PROVIDER_OBSERVED: "observed",
      API_USAGE: "observed",
      LOCAL_COUNT: "estimated",
      PARAMETRIC_ESTIMATE: "estimated",
      UNKNOWN: "unknown",
    };
    for (const source of FINOPS_SOURCES) {
      expect(classifyCostEvidenceFromSource(source)).toBe(expected[source]);
    }
  });

  it("keeps estimated, observed, billed, and unknown distinct", () => {
    expect(assertDistinctEvidenceClasses()).toBe(true);
    const classes = new Set(
      FINOPS_SOURCES.map((s) => classifyCostEvidenceFromSource(s)),
    );
    expect(classes.has("estimated")).toBe(true);
    expect(classes.has("observed")).toBe(true);
    expect(classes.has("billed")).toBe(true);
    expect(classes.has("unknown")).toBe(true);
    expect(
      classifyCostEvidenceFromSource("LOCAL_COUNT"),
    ).not.toBe(classifyCostEvidenceFromSource("PROVIDER_OBSERVED"));
    expect(
      classifyCostEvidenceFromSource("PROVIDER_OBSERVED"),
    ).not.toBe(classifyCostEvidenceFromSource("BILLED"));
  });

  it("classifies API_USAGE as observed without making it blocking (T-TECH-05)", () => {
    expect(classifyCostEvidenceFromSource("API_USAGE")).toBe("observed");
    expect(evaluateBlockingEligibility("API_USAGE").eligible).toBe(false);
    // Model/tarif unknown stays unknown — not silently priced.
    expect(classifyCostEvidenceFromSource("UNKNOWN")).toBe("unknown");
    expect(isUnknownEvidence("unknown")).toBe(true);
  });

  it("maps LOCAL_COUNT and PARAMETRIC_ESTIMATE to estimated", () => {
    expect(classifyCostEvidenceFromSource("LOCAL_COUNT")).toBe("estimated");
    expect(classifyCostEvidenceFromSource("PARAMETRIC_ESTIMATE")).toBe(
      "estimated",
    );
  });

  it("keeps unknown distinct from zero with no zero fallback (T-TECH-06)", () => {
    expect(assertUnknownNotNumericZero("unknown", 0)).toEqual({
      detailCode: "FINOPS_UNKNOWN_AS_ZERO",
      reason: "unknown_must_not_equal_numeric_zero",
    });
    expect(assertUnknownNotNumericZero("unknown", BigInt(0))).not.toBeNull();
    expect(assertUnknownNotNumericZero("unknown", "0")).not.toBeNull();
    expect(assertUnknownNotNumericZero("unknown", null)).toBeNull();
    expect(assertUnknownNotNumericZero("billed", 0)).toBeNull();
    expect(isUnknownEvidence("unknown")).toBe(true);
    expect(isUnknownEvidence("estimated")).toBe(false);
  });
});
