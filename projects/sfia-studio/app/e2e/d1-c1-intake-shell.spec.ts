import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const shotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-d1-c1-ia-cleanup",
);

test.beforeAll(() => {
  fs.mkdirSync(shotDir, { recursive: true });
});

test.describe("D1-C1 Intake IA Cleanup", () => {
  test("nouvelle-demande keeps only two primary actions", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await expect(page.getByTestId("quick-describe")).toBeVisible();
    await expect(page.getByTestId("quick-manual")).toHaveText(
      "Créer manuellement",
    );
    await expect(page.getByTestId("quick-resume")).toHaveCount(0);
    await expect(page.getByTestId("quick-decisions")).toHaveCount(0);
    await expect(
      page.getByRole("button", { name: "Reprendre un travail" }),
    ).toHaveCount(0);
    await expect(
      page.getByRole("link", { name: "Reprendre un travail" }),
    ).toHaveCount(0);
    await expect(page.getByText(/Voir mes décisions/i)).toHaveCount(0);
    await expect(page.getByText(/Création manuelle avancée/i)).toHaveCount(0);
    await expect(page.getByTestId("intake-resume")).toHaveCount(0);
    await page.screenshot({
      path: path.join(shotDir, "nouvelle-demande-1440.png"),
      fullPage: false,
    });
  });

  test("Créer manuellement form unchanged; Workspace hosts Reprendre", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page.getByTestId("quick-manual").click();
    await expect(page).toHaveURL(/\/projects\/new/);
    await expect(
      page.getByRole("heading", { name: "Créer manuellement", level: 1 }),
    ).toBeVisible();
    await expect(page.getByTestId("project-name")).toBeVisible();
    await expect(page.getByTestId("project-objective")).toBeVisible();
    await expect(page.getByTestId("project-context")).toBeVisible();
    await expect(page.getByTestId("project-activate")).toBeVisible();
    await expect(page.getByTestId("project-method-mode")).toHaveCount(0);
    await page.screenshot({
      path: path.join(shotDir, "creer-manuellement-1440.png"),
      fullPage: false,
    });

    await page.goto("/workspace");
    await expect(
      page.getByRole("heading", { name: "Reprendre un travail", level: 2 }),
    ).toBeVisible();
    await expect(page.getByTestId("workspace-resume")).toBeVisible();
    await expect(page.getByTestId("cta-new-project")).toHaveText(
      "Créer manuellement",
    );
    await page.screenshot({
      path: path.join(shotDir, "workspace-reprendre-1440.png"),
      fullPage: false,
    });

    // ensure a project exists then open cockpit
    await page.goto("/projects/new");
    await page.getByTestId("project-name").fill("Projet IA Cleanup");
    await page.getByTestId("project-objective").fill("Reprise workspace");
    await page.getByTestId("project-submit").click();
    await expect(page.getByTestId("project-title")).toHaveText(
      "Projet IA Cleanup",
    );

    await page.goto("/workspace");
    await expect(page.getByTestId("project-list")).toContainText(
      "Projet IA Cleanup",
    );
    await page.getByTestId("project-list").locator("a").filter({ hasText: "Projet IA Cleanup" }).first().click();
    await expect(page.getByTestId("project-title")).toHaveText(
      "Projet IA Cleanup",
    );
  });

  for (const width of [1728, 1440, 1280, 1024] as const) {
    test(`no horizontal overflow at ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1024 });
      await page.goto("/nouvelle-demande");
      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      }));
      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.innerWidth + 1);
      if (width === 1024) {
        await page.screenshot({
          path: path.join(shotDir, "nouvelle-demande-1024.png"),
          fullPage: false,
        });
      }
    });
  }
});
