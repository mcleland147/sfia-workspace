import { describe, expect, it } from "vitest";
import {
  isGlobalRestrictionTarget,
  restrictionTargetMatchesHint,
} from "@/domains/pilotage/durable-target-resolve";

describe("restrictionTargetMatchesHint — global vs specific scope", () => {
  it("specific CADRAGE hint does not match global '*'", () => {
    expect(
      restrictionTargetMatchesHint({ targetRef: "*", hint: "CADRAGE" }),
    ).toBe(false);
  });

  it("global durable hint matches only global ACTIVE refs", () => {
    expect(restrictionTargetMatchesHint({ targetRef: "*", hint: "*" })).toBe(true);
    expect(restrictionTargetMatchesHint({ targetRef: "", hint: "*" })).toBe(true);
    expect(restrictionTargetMatchesHint({ targetRef: "CADRAGE", hint: "*" })).toBe(false);
  });

  it("exact specific match and cycleType↔cycleId equivalence remain", () => {
    expect(
      restrictionTargetMatchesHint({ targetRef: "CADRAGE", hint: "CADRAGE" }),
    ).toBe(true);
    expect(
      restrictionTargetMatchesHint({
        targetRef: "cyc_1",
        hint: "CADRAGE",
        activeCycle: { id: "cyc_1", cycleType: "CADRAGE" },
      }),
    ).toBe(true);
    expect(
      restrictionTargetMatchesHint({
        targetRef: "cyc_other",
        hint: "CADRAGE",
        activeCycle: { id: "cyc_1", cycleType: "CADRAGE" },
      }),
    ).toBe(false);
  });

  it("isGlobalRestrictionTarget covers empty and '*'", () => {
    expect(isGlobalRestrictionTarget("*")).toBe(true);
    expect(isGlobalRestrictionTarget("")).toBe(true);
    expect(isGlobalRestrictionTarget("CADRAGE")).toBe(false);
  });
});
