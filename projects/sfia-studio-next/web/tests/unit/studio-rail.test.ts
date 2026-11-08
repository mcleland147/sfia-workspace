import { describe, expect, it } from "vitest";
import {
  STUDIO_RAIL_VARIANTS,
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

  it("resolves variant from route and surface", () => {
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
  });
});
