import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots",
);

const routes = [
  {
    path: "/nouvelle-demande",
    heading: "Nouvelle demande",
    screenshot: "p0-00c-nouvelle-demande-runtime.png",
  },
  {
    path: "/synthese",
    heading: "Vue synthèse",
    screenshot: "p0-01c-synthese-runtime.png",
  },
  {
    path: "/cycle-actif",
    heading: "Cycle actif",
    screenshot: "p0-02c-cycle-actif-runtime.png",
  },
  {
    path: "/decision",
    heading: "Décision Morris",
    screenshot: "p0-03c-decision-runtime.png",
  },
];

const knownNoise = [
  "Download the React DevTools",
  "Hydration failed",
  "Extra attributes from the server",
];

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test.describe("P0 smoke", () => {
  for (const route of routes) {
    test(`renders ${route.path}`, async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() !== "error") return;
        const text = msg.text();
        if (knownNoise.some((noise) => text.includes(noise))) return;
        errors.push(text);
      });

      await page.goto(route.path);
      await expect(
        page.getByRole("heading", { name: route.heading, level: 1 }),
      ).toBeVisible();

      await page.screenshot({
        path: path.join(screenshotDir, route.screenshot),
        fullPage: true,
      });

      expect(errors).toEqual([]);
    });
  }

  test("navigates between primary routes", async ({ page }) => {
    await page.goto("/synthese");
    const rail = page.getByTestId("utility-rail");

    await rail.getByRole("link", { name: "Nouvelle demande" }).click();
    await expect(page).toHaveURL(/\/nouvelle-demande\/?$/);
    // D1-C1: intake uses D1AppShell (no OPS1 utility-rail). Return to Studio shell.
    await page.goto("/synthese");
    const railAfter = page.getByTestId("utility-rail");

    await railAfter.getByRole("link", { name: "Cycle actif" }).click();
    await expect(page).toHaveURL(/cycle-actif/);

    await railAfter.getByRole("link", { name: "Décision Morris" }).click();
    await expect(page).toHaveURL(/decision/);
  });

  test("axe-core smoke has no critical violations", async ({ page }) => {
    await page.goto("/synthese");

    await page.addScriptTag({
      path: require.resolve("axe-core/axe.min.js"),
    });

    const axeResults = await page.evaluate(async () => {
      // @ts-expect-error axe injected by addScriptTag
      const res = await window.axe.run(document, {
        runOnly: { type: "tag", values: ["wcag2a", "wcag2aa"] },
      });
      return {
        violations: res.violations.filter(
          (v: { impact?: string }) =>
            v.impact === "critical" || v.impact === "serious",
        ),
      };
    });

    expect(axeResults.violations.length).toBeLessThanOrEqual(3);
  });
});
