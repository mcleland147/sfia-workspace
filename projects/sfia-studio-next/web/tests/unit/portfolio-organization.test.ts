import { describe, expect, it } from "vitest";
import { acceptNavigationKey, destinationIndex, rememberNavigationKey } from "@/domains/identity/portfolio-organization";
import {
  classifyPortfolioResponse,
  intentionMatchesBoard,
  portfolioMutationFollowUp,
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

  it("keeps an unknown mutation blocked until the relevant state is reread", () => {
    expect(classifyPortfolioResponse(503, { message: "unavailable" })).toBe("unknown");
    expect(classifyPortfolioResponse(500, {})).toBe("unknown");
    expect(classifyPortfolioResponse(200, {})).toBe("unknown");
    expect(classifyPortfolioResponse(200, { rowVersion: 2, favorite: true })).toBe("confirmed");
    expect(classifyPortfolioResponse(404, { error: "missing" })).toBe("refused");
    expect(classifyPortfolioResponse(409, { message: "conflict" })).toBe("conflict");
    expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "failed" })).toEqual({
      uncertain: true,
      retry: false,
      blockFurtherMutations: true,
    });
    expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "unverified" })).toEqual({
      uncertain: true,
      retry: false,
      blockFurtherMutations: true,
    });
    expect(portfolioMutationFollowUp({ outcome: "unknown", reread: "matched" })).toEqual({
      uncertain: false,
      retry: false,
      blockFurtherMutations: false,
    });
    expect(portfolioMutationFollowUp({ outcome: "confirmed", reread: "failed" }).blockFurtherMutations).toBe(true);
    expect(portfolioMutationFollowUp({ outcome: "refused", reread: "not-attempted" }).uncertain).toBe(false);
    const board = {
      items: [{ spaceType: "preparation" as const, id: "prep_1", favorite: false, archived: false }],
      preferences: { view: "list", sort: "recent", version: 2 },
    };
    expect(intentionMatchesBoard({ kind: "favorite", spaceType: "preparation", spaceId: "prep_1", desired: true, knownVersion: 1 }, board)).toBe(false);
    expect(intentionMatchesBoard({ kind: "favorite", spaceType: "preparation", spaceId: "prep_absent", desired: true, knownVersion: 1 }, board)).toBe(false);
    expect(intentionMatchesBoard({ kind: "preference", view: "grid", knownVersion: 1 }, { ...board, preferences: { view: "grid", sort: "recent", version: 2 } })).toBe(true);
  });
});
