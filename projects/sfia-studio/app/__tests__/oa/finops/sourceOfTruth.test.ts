/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  FINOPS_SOT_RANK,
  FINOPS_SOURCES,
  compareSourceOfTruth,
  sourceMayBlock,
  sourceMayInform,
  sourceMayRequestHumanReview,
  sourceOfTruthRank,
  type FinOpsSourceOfTruth,
} from "@/lib/oa/finops";

describe("FinOps T0 source of truth", () => {
  it("exposes exactly six closed SoT values", () => {
    expect([...FINOPS_SOURCES]).toEqual([
      "BILLED",
      "PROVIDER_OBSERVED",
      "API_USAGE",
      "LOCAL_COUNT",
      "PARAMETRIC_ESTIMATE",
      "UNKNOWN",
    ]);
  });

  it("ranks SoT from 1 (most authoritative) to 6", () => {
    expect(FINOPS_SOT_RANK.BILLED).toBe(1);
    expect(FINOPS_SOT_RANK.PROVIDER_OBSERVED).toBe(2);
    expect(FINOPS_SOT_RANK.API_USAGE).toBe(3);
    expect(FINOPS_SOT_RANK.LOCAL_COUNT).toBe(4);
    expect(FINOPS_SOT_RANK.PARAMETRIC_ESTIMATE).toBe(5);
    expect(FINOPS_SOT_RANK.UNKNOWN).toBe(6);
    for (const source of FINOPS_SOURCES) {
      expect(sourceOfTruthRank(source)).toBe(FINOPS_SOT_RANK[source]);
    }
  });

  it("orders the full hierarchy by rank", () => {
    const ordered = [...FINOPS_SOURCES].sort(compareSourceOfTruth);
    expect(ordered).toEqual([...FINOPS_SOURCES]);
    expect(compareSourceOfTruth("BILLED", "UNKNOWN")).toBeLessThan(0);
    expect(compareSourceOfTruth("UNKNOWN", "BILLED")).toBeGreaterThan(0);
    expect(compareSourceOfTruth("API_USAGE", "API_USAGE")).toBe(0);
  });

  it("marks only BILLED and PROVIDER_OBSERVED as blocking-eligible", () => {
    const blocking: FinOpsSourceOfTruth[] = [];
    const nonBlocking: FinOpsSourceOfTruth[] = [];
    for (const source of FINOPS_SOURCES) {
      if (sourceMayBlock(source)) blocking.push(source);
      else nonBlocking.push(source);
    }
    expect(blocking).toEqual(["BILLED", "PROVIDER_OBSERVED"]);
    expect(nonBlocking).toEqual([
      "API_USAGE",
      "LOCAL_COUNT",
      "PARAMETRIC_ESTIMATE",
      "UNKNOWN",
    ]);
  });

  it("keeps all sources informational and review-capable without triggering review", () => {
    for (const source of FINOPS_SOURCES) {
      expect(sourceMayInform(source)).toBe(true);
      expect(sourceMayRequestHumanReview(source)).toBe(true);
    }
  });
});
