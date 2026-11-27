import { describe, expect, it } from "vitest";
import { buildStudioContinuityFromWork } from "@/domains/conversation/provider-response-continuity";

describe("buildStudioContinuityFromWork", () => {
  it("uses real sources, acquis, tokens and rights — not placeholders", () => {
    const snap = buildStudioContinuityFromWork({
      id: "work_1",
      revision: 3,
      ownerToken: "tok_live",
      leaseUntil: new Date(Date.now() + 60_000),
      state: {
        intentSummary: "investigate docs",
        conclusions: ["Finding A is durable"],
        sources: [
          { ref: "d4:doc1", versionOrSha: "rev9" },
          { ref: "git-file:r:path.ts", versionOrSha: "abc123" },
        ],
      },
      resources: { inputTokens: 100, outputTokens: 40, segmentCalls: 2 },
    });
    expect(snap.workId).toBe("work_1");
    expect(snap.checkpointId).toBe("ckpt:work_1:r3");
    expect(snap.acquisFingerprint).toContain("Finding A");
    expect(snap.sourceVersions).toEqual([
      "d4:doc1@rev9",
      "git-file:r:path.ts@abc123",
    ]);
    expect(snap.budgets.tokensConsumed).toBe(140);
    expect(snap.rightsOk).toBe(true);
  });

  it("rightsOk false when lease expired or owner token absent", () => {
    const expired = buildStudioContinuityFromWork({
      id: "work_2",
      revision: 1,
      ownerToken: "tok",
      leaseUntil: new Date(Date.now() - 1000),
      state: { intentSummary: "x", sources: [] },
      resources: {},
    });
    expect(expired.rightsOk).toBe(false);
    const noTok = buildStudioContinuityFromWork({
      id: "work_3",
      revision: 1,
      ownerToken: null,
      leaseUntil: null,
      state: { intentSummary: "x", sources: [] },
      resources: {},
    });
    expect(noTok.rightsOk).toBe(false);
  });
});
