import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

/**
 * Polish-1 captures (lisibility pass). Disabled by default after geometry polish-2
 * to avoid overwriting historical evidence. Re-enable with SFIA_CAPTURE_POLISH1=1
 * only when intentionally regenerating polish-1 baselines.
 */
const polishDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots/polish",
);

const routes = [
  {
    path: "/nouvelle-demande",
    heading: "Nouvelle demande",
    screenshot: "p0-00c-nouvelle-demande-polish.png",
  },
  {
    path: "/synthese",
    heading: "Vue synthèse",
    screenshot: "p0-01c-synthese-polish.png",
  },
  {
    path: "/cycle-actif",
    heading: "Cycle actif",
    screenshot: "p0-02c-cycle-actif-polish.png",
  },
  {
    path: "/decision",
    heading: "Décision Morris",
    screenshot: "p0-03c-decision-polish.png",
  },
];

const describePolish = process.env.SFIA_CAPTURE_POLISH1
  ? test.describe
  : test.describe.skip;

describePolish("P0 polish captures", () => {
  test.beforeAll(() => {
    fs.mkdirSync(polishDir, { recursive: true });
  });

  for (const route of routes) {
    test(`capture ${route.path}`, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 1024 });
      await page.goto(route.path);
      await expect(
        page.getByRole("heading", { name: route.heading, level: 1 }),
      ).toBeVisible();

      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        scrollHeight: document.documentElement.scrollHeight,
      }));

      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);

      await page.screenshot({
        path: path.join(polishDir, route.screenshot),
        clip: { x: 0, y: 0, width: 1440, height: 1024 },
      });
    });
  }
});
