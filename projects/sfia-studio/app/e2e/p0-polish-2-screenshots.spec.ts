import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const polish2Dir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots/polish-2",
);

const routes = [
  {
    path: "/nouvelle-demande",
    heading: "Nouvelle demande",
    screenshot: "p0-00c-nouvelle-demande-polish-2.png",
  },
  {
    path: "/synthese",
    heading: "Vue synthèse",
    screenshot: "p0-01c-synthese-polish-2.png",
  },
  {
    path: "/cycle-actif",
    heading: "Cycle actif",
    screenshot: "p0-02c-cycle-actif-polish-2.png",
  },
  {
    path: "/decision",
    heading: "Décision Morris",
    screenshot: "p0-03c-decision-polish-2.png",
  },
];

test.beforeAll(() => {
  fs.mkdirSync(polish2Dir, { recursive: true });
});

test.describe("P0 geometry polish-2 captures", () => {
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
        dpr: window.devicePixelRatio,
      }));

      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
      expect(metrics.scrollHeight).toBeLessThanOrEqual(1024 + 1);

      await page.screenshot({
        path: path.join(polish2Dir, route.screenshot),
        clip: { x: 0, y: 0, width: 1440, height: 1024 },
      });
    });
  }
});
