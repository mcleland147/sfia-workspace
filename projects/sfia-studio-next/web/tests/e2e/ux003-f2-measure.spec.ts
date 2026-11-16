import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "../../../.tmp-sfia-review/f2-measures.json");

test("F2 measure desktop stable rectangles", async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 970 });
  await page.goto("/login");
  const box = async (sel: string) => {
    const loc = page.locator(sel).first();
    const b = await loc.boundingBox();
    return b;
  };
  const measures = {
    viewport: { w: 1680, h: 970 },
    header: await box(".uxe-header"),
    mark: await box(".uxe-mark"),
    auth: await box("[data-testid='unified-entry-auth-panel']"),
    cta: await box("[data-testid='login-github']"),
    accent: await box(".uxe-auth-accent"),
    figma: {
      headerH: 106,
      mark: { w: 39, h: 39 },
      auth: { w: 536, h: 550 },
      cta: { w: 480, h: 62 },
      accent: { w: 52, h: 5 },
    },
  };
  const deltas = {
    headerH: Math.abs((measures.header?.height ?? 0) - 106),
    markW: Math.abs((measures.mark?.width ?? 0) - 39),
    markH: Math.abs((measures.mark?.height ?? 0) - 39),
    authW: Math.abs((measures.auth?.width ?? 0) - 536),
    authH: Math.abs((measures.auth?.height ?? 0) - 550),
    ctaW: Math.abs((measures.cta?.width ?? 0) - 480),
    ctaH: Math.abs((measures.cta?.height ?? 0) - 62),
    accentW: Math.abs((measures.accent?.width ?? 0) - 52),
    accentH: Math.abs((measures.accent?.height ?? 0) - 5),
  };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({ measures, deltas }, null, 2));
  console.log(JSON.stringify(deltas));
  for (const [k, v] of Object.entries(deltas)) {
    expect(v, k).toBeLessThanOrEqual(2);
  }
});
