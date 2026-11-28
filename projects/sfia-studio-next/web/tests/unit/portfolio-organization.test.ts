import { describe, expect, it } from "vitest";
import { acceptNavigationKey, destinationIndex, rememberNavigationKey } from "@/domains/identity/portfolio-organization";
import {
  classifyPortfolioResponse,
  portfolioMutationFollowUp,
  portfolioReadReview,
} from "@/components/portfolio/PersonalPortfolio";

describe("portfolio organization rules", () => {
  it("places an item before its target in either direction", () => {
    expect(destinationIndex(3, 0, 2)).toBe(1);
    expect(destinationIndex(3, 2, 0)).toBe(0);
    expect(destinationIndex(3, 1, 1)).toBe(1);
    expect(destinationIndex(3, 0, 9)).toBeNull();
  });

  it("ignores a replayed navigation key from the same tab", () => {
    const tab = "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee";
    expect(acceptNavigationKey(null, `${tab}:1`)).toBe(true);
    expect(acceptNavigationKey(`${tab}:2`, `${tab}:2`)).toBe(false);
    expect(acceptNavigationKey(`${tab}:2`, `${tab}:1`)).toBe(false);
    expect(acceptNavigationKey(`${tab}:2`, `${tab}:3`)).toBe(true);
    expect(acceptNavigationKey(`${tab}:2`, "bbbbbbbb-bbbb-cccc-dddd-eeeeeeeeeeee:1")).toBe(true);
    const other = "bbbbbbbb-bbbb-cccc-dddd-eeeeeeeeeeee";
    const remembered = rememberNavigationKey(rememberNavigationKey(null, `${tab}:1`), `${other}:1`);
    expect(acceptNavigationKey(remembered, `${tab}:1`)).toBe(false);
    expect(acceptNavigationKey(remembered, `${other}:2`)).toBe(true);
  });

  it("reopens a refused intention after the current owner state is reread", () => {
    expect(classifyPortfolioResponse(503, { message: "unavailable" }, "favorite")).toBe("unknown");
    expect(classifyPortfolioResponse(200, { version: 4 }, "favorite")).toBe("unknown");
    expect(classifyPortfolioResponse(200, { rowVersion: 2, favorite: true }, "favorite")).toBe("confirmed");
    expect(classifyPortfolioResponse(200, { version: 3 }, "order")).toBe("confirmed");
    expect(classifyPortfolioResponse(409, { message: "conflict" }, "preference")).toBe("conflict");
    expect(portfolioReadReview(200)).toBe("reviewed");
    expect(portfolioReadReview(404)).toBe("reviewed");
    expect(portfolioReadReview(500)).toBe("failed");
    expect(portfolioMutationFollowUp({ outcome: "conflict", reread: "reviewed" })).toEqual({
      uncertain: false,
      retry: false,
      blockFurtherMutations: false,
    });
    expect(portfolioMutationFollowUp({ outcome: "conflict", reread: "failed" }).blockFurtherMutations).toBe(true);
    expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "failed" })).toEqual({
      uncertain: true,
      retry: false,
      blockFurtherMutations: true,
    });
    expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "reviewed" })).toEqual({
      uncertain: false,
      retry: false,
      blockFurtherMutations: false,
    });
    expect(portfolioMutationFollowUp({ outcome: "confirmed", reread: "failed" }).blockFurtherMutations).toBe(true);
    expect(portfolioMutationFollowUp({ outcome: "refused", reread: "not-attempted" }).retry).toBe(false);
  });
});
