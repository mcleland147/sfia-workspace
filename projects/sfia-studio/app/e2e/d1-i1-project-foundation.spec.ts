import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const shotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-d1-i1",
);

test.beforeAll(() => {
  fs.mkdirSync(shotDir, { recursive: true });
});

test.describe("D1-I1 Project Foundation", () => {
  test("workspace → create project → cockpit → reload + audit", async ({
    page,
  }) => {
    await page.goto("/workspace");
    await expect(
      page.getByRole("heading", { name: "Workspace", level: 1 }),
    ).toBeVisible();
    await page.screenshot({
      path: path.join(shotDir, "workspace-home-1440.png"),
      fullPage: false,
    });

    await page.getByTestId("cta-new-project").click();
    await expect(page).toHaveURL(/\/projects\/new/);
    await expect(
      page.getByRole("heading", {
        name: "Créer manuellement",
        level: 1,
      }),
    ).toBeVisible();
    await page.screenshot({
      path: path.join(shotDir, "new-project-1440.png"),
      fullPage: false,
    });

    await page.getByTestId("project-name").fill("Projet D1-I1 E2E");
    await page
      .getByTestId("project-objective")
      .fill("Valider Project-first foundation");
    await page.getByTestId("project-context").fill("Contexte léger I1");
    await expect(page.getByTestId("project-method-mode")).toHaveCount(0);
    await page.getByTestId("project-submit").click();

    await expect(page).toHaveURL(/\/projects\/proj-/);
    await expect(page.getByTestId("project-title")).toHaveText(
      "Projet D1-I1 E2E",
    );
    await expect(page.getByTestId("project-state-badge")).toContainText(
      "ACTIVE",
    );
    await expect(page.getByTestId("audit-timeline")).toContainText(
      "Projet créé",
    );

    await page.screenshot({
      path: path.join(shotDir, "project-cockpit-1440.png"),
      fullPage: false,
    });

    const url = page.url();
    await page.reload();
    await expect(page).toHaveURL(url);
    await expect(page.getByTestId("project-title")).toHaveText(
      "Projet D1-I1 E2E",
    );

    await page.goto("/workspace");
    await expect(page.getByTestId("project-list")).toContainText(
      "Projet D1-I1 E2E",
    );
  });

  test("intake /nouvelle-demande and OPS1 legacy remain accessible", async ({
    page,
  }) => {
    await page.goto("/nouvelle-demande");
    await expect(
      page.getByRole("heading", { name: "Nouvelle demande", level: 1 }),
    ).toBeVisible();
    await expect(page.getByTestId("intake-composer")).toBeVisible();

    await page.goto("/ops1/nouvelle-demande");
    await expect(
      page.getByRole("heading", { name: "Nouvelle demande", level: 1 }),
    ).toBeVisible();
  });

  for (const width of [1728, 1440, 1280, 1024] as const) {
    test(`no horizontal overflow at ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1024 });
      await page.goto("/workspace");
      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
        shellWidth: document
          .querySelector('[data-testid="d1-app-shell"]')
          ?.getBoundingClientRect().width,
      }));
      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.innerWidth + 1);
      expect(metrics.shellWidth).toBeGreaterThanOrEqual(metrics.innerWidth - 1);
      await page.screenshot({
        path: path.join(shotDir, `workspace-${width}.png`),
        fullPage: false,
      });

      await page.goto("/projects/new");
      await page.getByTestId("project-name").fill(`Overflow ${width}`);
      await page.getByTestId("project-objective").fill("Responsive check");
      await page.getByTestId("project-submit").click();
      await expect(page.getByTestId("project-title")).toBeVisible();
      const cockpitMetrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      }));
      expect(cockpitMetrics.scrollWidth).toBeLessThanOrEqual(
        cockpitMetrics.innerWidth + 1,
      );
      await page.screenshot({
        path: path.join(shotDir, `project-cockpit-${width}.png`),
        fullPage: false,
      });
    });
  }
});
