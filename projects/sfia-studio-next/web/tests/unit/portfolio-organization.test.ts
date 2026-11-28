import { describe, expect, it } from "vitest";
import { acceptNavigationKey, destinationIndex, rememberNavigationKey } from "@/domains/identity/portfolio-organization";
import {
  classifyPortfolioResponse,
  correlatedAcknowledgement,
  ownerSpaceRecord,
  portfolioMutationFollowUp,
  pertinentSpaceRecord,
  reconcileOwnerEffect,
  type PortfolioIntention,
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
    expect(classifyPortfolioResponse(200, { version: 3 }, "order")).toBe("unknown");
    expect(classifyPortfolioResponse(200, { version: 3, moved: true }, "order")).toBe("confirmed");
    expect(classifyPortfolioResponse(200, { version: 3, moved: false }, "order")).toBe("confirmed");
    expect(classifyPortfolioResponse(409, { message: "conflict" }, "preference")).toBe("conflict");
    const record = { spaceType: "project", id: "prj_1", eligible: true, favorite: false, archived: false, rowVersion: 3, customPosition: null };
    expect(pertinentSpaceRecord(record, { spaceType: "project", id: "prj_1" })).toBe(true);
    expect(pertinentSpaceRecord({ ...record, id: "other" }, { spaceType: "project", id: "prj_1" })).toBe(false);
    expect(pertinentSpaceRecord({ ok: true }, { spaceType: "project", id: "prj_1" })).toBe(false);
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

  it("compares the reread values with the acknowledgement instead of trusting a status", () => {
    const record = { spaceType: "project", id: "prj_1", eligible: true, favorite: true, archived: false, rowVersion: 4, customPosition: 2 };
    const board = {
      preferences: { view: "list", sort: "custom", version: 8 },
      items: [{ spaceType: "project" as const, id: "prj_1", favorite: true, archived: false, rowVersion: 4, customPosition: 2 }],
    };
    const favorite: PortfolioIntention = { kind: "favorite", spaceType: "project", spaceId: "prj_1", desired: true, knownVersion: 3 };
    expect(ownerSpaceRecord(record, { spaceType: "project", id: "prj_1" })?.favorite).toBe(true);
    expect(ownerSpaceRecord({ ok: true }, { spaceType: "project", id: "prj_1" })).toBeNull();
    expect(correlatedAcknowledgement(favorite, { favorite: true, rowVersion: 4 })).toBe(true);
    expect(correlatedAcknowledgement(favorite, { favorite: true, rowVersion: 9 })).toBe(false);
    expect(reconcileOwnerEffect({
      intention: favorite,
      outcome: "confirmed",
      acknowledgement: { favorite: true, rowVersion: 4 },
      records: [record],
      board,
    })).toBe("confirmed");
    expect(reconcileOwnerEffect({
      intention: favorite,
      outcome: "confirmed",
      acknowledgement: { favorite: true, rowVersion: 4 },
      records: [{ ...record, favorite: false }],
      board: { ...board, items: [{ ...board.items[0], favorite: false }] },
    })).toBe("current");
    expect(reconcileOwnerEffect({
      intention: favorite,
      outcome: "confirmed",
      acknowledgement: { favorite: true, rowVersion: 4 },
      records: ["absent"],
      board,
    })).toBe("absent");
    expect(reconcileOwnerEffect({
      intention: favorite,
      outcome: "unknown",
      acknowledgement: null,
      records: [record],
      board,
    })).toBe("current");
    const order: PortfolioIntention = {
      kind: "order",
      spaceType: "project",
      spaceId: "prj_1",
      beforeSpaceType: "project",
      beforeSpaceId: "prj_2",
      direction: "up",
      knownVersion: 7,
      knownPosition: 3,
    };
    const neighbor = { spaceType: "project", id: "prj_2", eligible: true, favorite: false, archived: false, rowVersion: 1, customPosition: 3 };
    expect(reconcileOwnerEffect({
      intention: order,
      outcome: "confirmed",
      acknowledgement: { version: 8, moved: false },
      records: [record, neighbor],
      board,
    })).toBe("unchanged");
    expect(reconcileOwnerEffect({
      intention: order,
      outcome: "confirmed",
      acknowledgement: { version: 8, moved: true },
      records: [record, neighbor],
      board,
    })).toBe("confirmed");
    expect(reconcileOwnerEffect({
      intention: order,
      outcome: "confirmed",
      acknowledgement: { version: 8, moved: true },
      records: [record, { ...neighbor, customPosition: 8 }],
      board,
    })).toBe("current");
    expect(reconcileOwnerEffect({
      intention: { kind: "preference", view: "grid", knownVersion: 7 },
      outcome: "confirmed",
      acknowledgement: { version: 8 },
      records: [],
      board: { ...board, preferences: { ...board.preferences, view: "list", version: 8 } },
    })).toBe("current");
    expect(reconcileOwnerEffect({
      intention: { kind: "preference", view: "grid", knownVersion: 7 },
      outcome: "conflict",
      acknowledgement: null,
      records: [],
      board: { ...board, preferences: { ...board.preferences, view: "grouped", version: 9 } },
    })).toBe("current");
    const renamed = { ...record, displayLabel: "Nouveau nom", nameRevision: 1 };
    const rename: PortfolioIntention = {
      kind: "rename", spaceType: "project", spaceId: "prj_1", knownVersion: 0, intentionKey: "intent-01", requestedLabel: "Nouveau nom",
    };
    const ack = { label: "Nouveau nom", revision: 1, intentionKey: "intent-01", changed: true, spaceType: "project", spaceId: "prj_1" };
    expect(classifyPortfolioResponse(200, ack, "rename")).toBe("confirmed");
    expect(classifyPortfolioResponse(200, { ok: true }, "rename")).toBe("unknown");
    expect(reconcileOwnerEffect({
      intention: rename,
      outcome: "confirmed",
      acknowledgement: ack,
      records: [renamed],
      board: { ...board, items: [{ ...board.items[0], label: "Nouveau nom" }] },
    })).toBe("confirmed");
    expect(reconcileOwnerEffect({
      intention: rename,
      outcome: "confirmed",
      acknowledgement: { ...ack, label: "Ancien nom" },
      records: [{ ...renamed, displayLabel: "Ancien nom" }],
      board: { ...board, items: [{ ...board.items[0], label: "Ancien nom" }] },
    })).toBe("current");
    expect(reconcileOwnerEffect({
      intention: rename,
      outcome: "confirmed",
      acknowledgement: { label: "Autre", revision: 1, intentionKey: "intent-01", changed: true },
      records: [renamed],
      board: { ...board, items: [{ ...board.items[0], label: "Nouveau nom" }] },
    })).toBe("current");
  });
});
