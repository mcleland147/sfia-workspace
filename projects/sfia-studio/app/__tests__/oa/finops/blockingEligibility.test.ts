/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  ESTIMATION_NEVER_BLOCKS,
  evaluateBlockingEligibility,
  type FinOpsSourceOfTruth,
} from "@/lib/oa/finops";

describe("FinOps T0 blocking eligibility (T-TECH-12)", () => {
  const matrix: Array<{
    source: FinOpsSourceOfTruth;
    eligible: boolean;
    reason: string;
    confidenceClass: string;
  }> = [
    {
      source: "BILLED",
      eligible: true,
      reason: "SOURCE_MAY_BLOCK",
      confidenceClass: "billed",
    },
    {
      source: "PROVIDER_OBSERVED",
      eligible: true,
      reason: "SOURCE_MAY_BLOCK",
      confidenceClass: "observed",
    },
    {
      source: "API_USAGE",
      eligible: false,
      reason: "API_USAGE_NEVER_BLOCKS",
      confidenceClass: "observed",
    },
    {
      source: "LOCAL_COUNT",
      eligible: false,
      reason: "LOCAL_COUNT_NEVER_BLOCKS",
      confidenceClass: "estimated",
    },
    {
      source: "PARAMETRIC_ESTIMATE",
      eligible: false,
      reason: "ESTIMATE_NEVER_BLOCKS",
      confidenceClass: "estimated",
    },
    {
      source: "UNKNOWN",
      eligible: false,
      reason: "UNKNOWN_NEVER_BLOCKS",
      confidenceClass: "unknown",
    },
  ];

  it.each(matrix)(
    "applies matrix row for $source",
    ({ source, eligible, reason, confidenceClass }) => {
      const decision = evaluateBlockingEligibility(source);
      expect(decision).toEqual({
        eligible,
        reason,
        source,
        confidenceClass,
      });
    },
  );

  it("exports ESTIMATION_NEVER_BLOCKS and never blocks estimates", () => {
    expect(ESTIMATION_NEVER_BLOCKS).toBe(true);
    expect(evaluateBlockingEligibility("PARAMETRIC_ESTIMATE").eligible).toBe(
      false,
    );
    expect(evaluateBlockingEligibility("LOCAL_COUNT").eligible).toBe(false);
  });

  it("allows official observed / billed eligibility without reading an amount", () => {
    expect(evaluateBlockingEligibility("BILLED").eligible).toBe(true);
    expect(evaluateBlockingEligibility("PROVIDER_OBSERVED").eligible).toBe(
      true,
    );
    // Decision shape has no monetary field.
    expect(
      Object.keys(evaluateBlockingEligibility("BILLED")).sort(),
    ).toEqual(["confidenceClass", "eligible", "reason", "source"]);
  });

  it("is deterministic", () => {
    expect(evaluateBlockingEligibility("API_USAGE")).toEqual(
      evaluateBlockingEligibility("API_USAGE"),
    );
  });
});
