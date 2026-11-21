import { describe, expect, it } from "vitest";

/**
 * Mirrors ProjectOverview nextEnvisagedFromTrajectory rule:
 * next forecast step after active cycle — never invent Figma illustrative « Conception UX ».
 */
function nextEnvisaged(
  activeType: string | null,
  forecast: Array<{ order: number; cycleType: string }> | null,
): string | null {
  const labels: Record<string, string> = {
    CADRAGE: "Cadrage",
    CONCEPTION_FONCTIONNELLE: "Conception fonctionnelle",
    UX_UI: "Conception UX",
  };
  if (!activeType || !forecast?.length) return null;
  const matchIdx = forecast.findIndex((s) => s.cycleType === activeType);
  const next =
    matchIdx >= 0
      ? forecast.slice(matchIdx + 1).find((s) => s.cycleType !== activeType) ??
        forecast[matchIdx + 1]
      : forecast.find((s) => s.cycleType !== activeType);
  if (!next) return null;
  return labels[next.cycleType] ?? next.cycleType;
}

describe("ProjectOverview suite envisagée from trajectory", () => {
  it("uses next forecast step after CADRAGE — not illustrative UX", () => {
    const label = nextEnvisaged("CADRAGE", [
      { order: 1, cycleType: "CADRAGE" },
      { order: 2, cycleType: "CONCEPTION_FONCTIONNELLE" },
      { order: 3, cycleType: "UX_UI" },
    ]);
    expect(label).toBe("Conception fonctionnelle");
    expect(label).not.toBe("Conception UX");
  });

  it("returns null when no future step exists", () => {
    expect(
      nextEnvisaged("CADRAGE", [{ order: 1, cycleType: "CADRAGE" }]),
    ).toBeNull();
  });

  it("returns null without active cycle or forecast", () => {
    expect(nextEnvisaged(null, [{ order: 1, cycleType: "CADRAGE" }])).toBeNull();
    expect(nextEnvisaged("CADRAGE", null)).toBeNull();
  });
});
