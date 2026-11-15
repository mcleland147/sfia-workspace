import { describe, expect, it, beforeEach } from "vitest";
import {
  STUDIO_RAIL_VARIANTS,
  buildShellNav,
  clearProjectSurfaceNavIntent,
  noteProjectSurfaceNavIntent,
  peekProjectSurfaceNavIntent,
  resolveProjectLoadSurface,
  resolveRailVariant,
} from "@/components/shell/studio-rail";

describe("F1 studio rail variants (G2 railEvidence)", () => {
  it("keeps personnel vs projet fill discriminant", () => {
    expect(STUDIO_RAIL_VARIANTS.personnel.fill.toLowerCase()).toBe("#0c101a");
    expect(STUDIO_RAIL_VARIANTS.projet.fill.toLowerCase()).toBe("#0c1020");
    expect(STUDIO_RAIL_VARIANTS.personnel.fill).not.toBe(STUDIO_RAIL_VARIANTS.projet.fill);
  });

  it("exposes measured widths", () => {
    expect(STUDIO_RAIL_VARIANTS.personnel.widthPx).toBe(246);
    expect(STUDIO_RAIL_VARIANTS.projet.widthPx).toBe(246);
    expect(STUDIO_RAIL_VARIANTS.conversation.widthPx).toBe(240);
    expect(STUDIO_RAIL_VARIANTS.inspection.widthPx).toBe(244);
  });

  it("resolves variant from G2 railEvidence route ↔ state mapping", () => {
    expect(resolveRailVariant({ pathname: "/portfolio" })).toBe("personnel");
    expect(resolveRailVariant({ pathname: "/login" })).toBe("personnel");
    expect(resolveRailVariant({ pathname: "/preparations/abc" })).toBe("personnel");
    expect(
      resolveRailVariant({
        pathname: "/preparations/abc",
        searchParams: new URLSearchParams("resume=1"),
      }),
    ).toBe("projet");
    expect(
      resolveRailVariant({ pathname: "/projects/p1", surface: "document" }),
    ).toBe("inspection");
    expect(
      resolveRailVariant({ pathname: "/projects/p1", surface: "travail" }),
    ).toBe("conversation");
    expect(
      resolveRailVariant({ pathname: "/projects/p1", surface: "pilotage" }),
    ).toBe("projet");
    expect(
      resolveRailVariant({ pathname: "/projects/p1", surface: "journal" }),
    ).toBe("personnel");
  });
});

describe("B1 shell navigation", () => {
  it("exposes real project surface hrefs (no #)", () => {
    const items = buildShellNav({ pathname: "/projects/proj-1", surface: "pilotage" });
    const travail = items.find((i) => i.key === "travail");
    const docs = items.find((i) => i.key === "document");
    expect(travail?.href).toBe("/projects/proj-1?surface=travail");
    expect(docs?.href).toBe("/projects/proj-1?surface=document");
    expect(items.every((i) => i.href !== "#")).toBe(true);
    expect(items.find((i) => i.key === "pilotage")?.active).toBe(true);
  });

  it("keeps portfolio personnel entries without hash-only fakes", () => {
    const items = buildShellNav({ pathname: "/portfolio" });
    expect(items.some((i) => i.key === "mes-projets")).toBe(true);
    expect(items.every((i) => i.href !== "#")).toBe(true);
  });

  it("disables project surfaces without project context (prep)", () => {
    const items = buildShellNav({ pathname: "/preparations/prep-1" });
    const travail = items.find((i) => i.key === "travail");
    expect(travail?.href).toBeNull();
    expect(travail?.disabledReason).toBeTruthy();
  });
});

describe("project surface load vs nav intent (NAV-01/02/03)", () => {
  beforeEach(() => {
    clearProjectSurfaceNavIntent();
  });

  it("defaults missing URL surface to travail when no pending intent", () => {
    const d = resolveProjectLoadSurface({ rawSurface: null, pendingIntent: null });
    expect(d.effectiveSurface).toBe("travail");
    expect(d.shouldNormalizeUrl).toBe(true);
  });

  it("preserves pending pilotage when URL has no surface yet (race with load)", () => {
    const d = resolveProjectLoadSurface({
      rawSurface: null,
      pendingIntent: "pilotage",
    });
    expect(d.effectiveSurface).toBe("pilotage");
    expect(d.shouldNormalizeUrl).toBe(true);
  });

  it("lets a valid live URL surface win over a stale pending intent", () => {
    const d = resolveProjectLoadSurface({
      rawSurface: "journal",
      pendingIntent: "pilotage",
    });
    expect(d.effectiveSurface).toBe("journal");
    expect(d.shouldNormalizeUrl).toBe(false);
  });

  it("normalises invalid raw surface via pending or default", () => {
    const withPending = resolveProjectLoadSurface({
      rawSurface: "not-a-surface",
      pendingIntent: "document",
    });
    expect(withPending.effectiveSurface).toBe("document");
    expect(withPending.shouldNormalizeUrl).toBe(true);

    const without = resolveProjectLoadSurface({
      rawSurface: "not-a-surface",
      pendingIntent: null,
    });
    expect(without.effectiveSurface).toBe("travail");
    expect(without.shouldNormalizeUrl).toBe(true);
  });

  it("shares transient intent between note and peek (rail + page)", () => {
    expect(peekProjectSurfaceNavIntent()).toBeNull();
    noteProjectSurfaceNavIntent("pilotage");
    expect(peekProjectSurfaceNavIntent()).toBe("pilotage");
    clearProjectSurfaceNavIntent("pilotage");
    expect(peekProjectSurfaceNavIntent()).toBeNull();
  });
});
