import { describe, expect, it } from "vitest";
import { assertNoImplicitEffects, probeCreateProjectSideEffects } from "@/domains/boundaries/non-effects";

describe("D5-D9 non-effects", () => {
  it("reports no implicit cycle/git/cursor effects", () => {
    expect(assertNoImplicitEffects(probeCreateProjectSideEffects())).toBe(true);
  });
});
