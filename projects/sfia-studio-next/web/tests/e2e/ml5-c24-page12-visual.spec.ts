/**
 * C24 — capture runtime fixtures for Figma page 12 (14 states).
 * Visual proof only — not LIVE behavior proof.
 */
import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const STATES = [
  "12.01",
  "12.02",
  "12.03",
  "12.04",
  "12.05",
  "12.06",
  "12.07",
  "12.08",
  "12.09",
  "12.10",
  "12.11",
  "12.12",
  "12.13",
  "12.14",
] as const;

const OUT_DIR = path.join(
  process.cwd(),
  ".sfia-evidence",
  "figma-page12-runtime",
);

test.describe("C24 page 12 visual fixtures", () => {
  test.beforeAll(() => {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  });

  for (const state of STATES) {
    test(`capture ${state}`, async ({ page }) => {
      await page.setViewportSize({ width: 1680, height: 970 });
      await page.goto(`/dev/ml5-page12-visual/${state}`, {
        waitUntil: "networkidle",
      });
      const root = page.getByTestId("ml5-page12-visual");
      await expect(root).toBeVisible();
      await expect(root).toHaveAttribute("data-ml5-page12-state", state);

      if (state === "12.09") {
        await expect(page.getByTestId("dossier-composer-attachment")).toBeVisible();
      }
      if (state === "12.03") {
        await expect(page.getByTestId("d6-confirm-launch")).toBeVisible();
      }
      if (state === "12.08" || state === "12.11" || state === "12.12" || state === "12.13") {
        await expect(page.getByTestId("bilan-appreciations")).toBeVisible();
        await expect(page.getByTestId("bilan-tabs")).toBeVisible();
      }

      const file = path.join(OUT_DIR, `${state}.png`);
      await page.screenshot({ path: file, fullPage: false });
      const buf = fs.readFileSync(file);
      const sha = createHash("sha256").update(buf).digest("hex");
      fs.writeFileSync(
        path.join(OUT_DIR, `${state}.sha256`),
        `${sha}  ${state}.png\n`,
      );
    });
  }
});
