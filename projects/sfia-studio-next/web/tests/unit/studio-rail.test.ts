import { describe, expect, it } from "vitest";
import {
  STUDIO_RAIL_VARIANTS,
  buildShellNav,
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

  it("resolves variant from proven route ↔ state mapping", () => {
    expect(resolveRailVariant({ pathname: "/portfolio" })).toBe("personnel");
    expect(resolveRailVariant({ pathname: "/login" })).toBe("personnel");
    expect(resolveRailVariant({ pathname: "/preparations/abc" })).toBe("conversation");
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
    ).toBe("projet");
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

  it("disables project surfaces without project context (prep)", () => {
    const items = buildShellNav({ pathname: "/preparations/prep-1" });
    const travail = items.find((i) => i.key === "travail");
    expect(travail?.href).toBeNull();
    expect(travail?.disabledReason).toBeTruthy();
  });
});
