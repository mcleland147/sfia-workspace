import { describe, expect, it, beforeEach } from "vitest";
import {
  STUDIO_RAIL_VARIANTS,
  buildShellNav,
  clearProjectSurfaceNavIntent,
  noteProjectSurfaceNavIntent,
  peekProjectSurfaceNavIntent,
  resolvePersonalBreadcrumb,
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

  it("keeps a single Portefeuille entry plus Nouveau projet action (UX-004)", () => {
    const items = buildShellNav({ pathname: "/portfolio" });
    expect(items.some((i) => i.key === "mes-projets")).toBe(false);
    expect(items.some((i) => i.key === "login")).toBe(false);
    expect(items.find((i) => i.key === "portfolio")?.label).toBe("Portefeuille");
    const create = items.find((i) => i.key === "new-prep");
    expect(create?.label).toBe("Nouveau projet");
    expect(create?.href).toBeNull();
    expect(create?.action).toBe("open-preparation");
    expect(items.every((i) => i.href !== "#")).toBe(true);
  });

  it("resolves personal breadcrumb for known routes only", () => {
    expect(resolvePersonalBreadcrumb("/portfolio")).toBe("Portefeuille");
    expect(resolvePersonalBreadcrumb("/settings/integrations")).toBe("Intégrations");
    expect(resolvePersonalBreadcrumb("/settings")).toBe("Paramètres");
    expect(resolvePersonalBreadcrumb("/unknown-personal")).toBeNull();
  });

  it("keeps sas rail minimal without project surfaces", () => {
    const items = buildShellNav({ pathname: "/preparations/prep-1" });
    expect(items.map((i) => i.key)).toEqual(["portfolio", "sas"]);
    expect(items.find((i) => i.key === "sas")?.label).toBe("Préparation en cours");
    expect(items.some((i) => i.key === "travail")).toBe(false);
    expect(items.some((i) => i.key === "pilotage")).toBe(false);
    expect(items.some((i) => i.key === "document")).toBe(false);
    expect(items.some((i) => i.key === "journal")).toBe(false);
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
    // Old behaviour without pending would normalize to travail — discriminant.
    const withoutPending = resolveProjectLoadSurface({
      rawSurface: null,
      pendingIntent: null,
    });
    expect(withoutPending.effectiveSurface).toBe("travail");

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

  it("scopes transient intent to projectId (A cannot leak to B)", () => {
    expect(peekProjectSurfaceNavIntent("proj-a")).toBeNull();
    noteProjectSurfaceNavIntent("proj-a", "pilotage");
    expect(peekProjectSurfaceNavIntent("proj-a")).toBe("pilotage");
    expect(peekProjectSurfaceNavIntent("proj-b")).toBeNull();

    // Load of B with null URL must not inherit A's pilotage.
    const forB = resolveProjectLoadSurface({
      rawSurface: null,
      pendingIntent: peekProjectSurfaceNavIntent("proj-b"),
    });
    expect(forB.effectiveSurface).toBe("travail");

    clearProjectSurfaceNavIntent("proj-a", "pilotage");
    expect(peekProjectSurfaceNavIntent("proj-a")).toBeNull();
  });

  it("clear for unrelated project leaves intent intact", () => {
    noteProjectSurfaceNavIntent("proj-a", "journal");
    clearProjectSurfaceNavIntent("proj-b", "journal");
    expect(peekProjectSurfaceNavIntent("proj-a")).toBe("journal");
    clearProjectSurfaceNavIntent("proj-a", "journal");
    expect(peekProjectSurfaceNavIntent("proj-a")).toBeNull();
  });
});
