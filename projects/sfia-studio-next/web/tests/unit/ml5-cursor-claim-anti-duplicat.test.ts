import { describe, expect, it } from "vitest";
import { priorSendMayHaveOccurred } from "@/domains/execution/cursor-claim";

describe("ML5 CF-03 priorSendMayHaveOccurred", () => {
  it("is false when only an expired claim exists", () => {
    expect(
      priorSendMayHaveOccurred(
        JSON.stringify({
          claim: { leaseExpiresAt: "2000-01-01T00:00:00.000Z", releasedAt: null },
        }),
      ),
    ).toBe(false);
  });

  it("is true when sendRequestedAt is set (ACK may be missing)", () => {
    expect(
      priorSendMayHaveOccurred(
        JSON.stringify({
          sendRequestedAt: "2026-11-23T10:00:00.000Z",
          claim: { leaseExpiresAt: "2000-01-01T00:00:00.000Z" },
        }),
      ),
    ).toBe(true);
  });

  it("is true when agentId/runId observed without ACK", () => {
    expect(
      priorSendMayHaveOccurred(JSON.stringify({ agentId: "a1", runId: "r1" })),
    ).toBe(true);
  });
});
