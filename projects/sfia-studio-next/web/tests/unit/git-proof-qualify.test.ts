import { describe, expect, it } from "vitest";
import { qualifyObservedFacts } from "@/domains/proofs/qualify";

describe("qualifyObservedFacts", () => {
  it("never claims tests or adoption from git alone", () => {
    const q = qualifyObservedFacts([
      { factKind: "COMMIT", sha: "abc" },
      { factKind: "PR_OPEN", sha: "def", prNumber: 1 },
    ]);
    expect(q.commitObserved).toBe(true);
    expect(q.prCreatedHistorically).toBe(true);
    expect(q.prOpen).toBe(true); // legacy alias = historical
    expect(q.prCurrentState).toBe("UNKNOWN");
    expect(q.mergeObserved).toBe(false);
    expect(q.testsPass).toBe(false);
    expect(q.adopted).toBe(false);
    expect(q.limits.length).toBeGreaterThan(0);
  });

  it("distinguishes historical PR creation from current CLOSED", () => {
    const q = qualifyObservedFacts(
      [{ factKind: "PR_OPEN", sha: "def", prNumber: 1 }],
      { prCurrentState: "CLOSED" },
    );
    expect(q.prCreatedHistorically).toBe(true);
    expect(q.prCurrentState).toBe("CLOSED");
    expect(q.limits.some((l) => /CLOSED/i.test(l))).toBe(true);
  });
});
