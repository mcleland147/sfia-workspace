import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const shotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-d1-c2",
);

test.beforeAll(() => {
  fs.mkdirSync(shotDir, { recursive: true });
  process.env.D1_INTAKE_PROVIDER = "fake";
});

test.describe("D1-C2 Intent Understanding and Structured Proposal", () => {
  test("clear intent → structured proposal, no mutation", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux lancer une application de suivi des contrats.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-proposal")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("intake-no-mutation")).toBeVisible();
    await expect(page.getByTestId("proposal-outcome")).toContainText(
      "Créer un projet",
    );
    await expect(page.getByText(/Confirmer et créer/i)).toHaveCount(0);
    await expect(page).toHaveURL(/\/nouvelle-demande/);
    await page.screenshot({
      path: path.join(shotDir, "proposal-1440.png"),
      fullPage: false,
    });
  });

  test("ambiguous intent → clarification → proposal", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page.getByTestId("intake-intent").fill("J’ai un nouveau sujet.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-clarification")).toBeVisible({
      timeout: 15_000,
    });
    await page.screenshot({
      path: path.join(shotDir, "clarification-1440.png"),
      fullPage: false,
    });
    await page
      .getByTestId("clarification-answer")
      .fill("Je veux un module de suivi des contrats pour le legal.");
    await page.getByTestId("clarification-submit").click();
    await expect(page.getByTestId("intake-proposal")).toBeVisible({
      timeout: 15_000,
    });
  });

  test("analyze-only produces analysis without executable action", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Analyse cette idée, mais ne crée rien.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-proposal")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("proposal-outcome")).toContainText(
      "Analyse seule",
    );
    await page.screenshot({
      path: path.join(shotDir, "analyze-only-1440.png"),
      fullPage: false,
    });
  });

  test("provider error + retry + cancel + manual + legacy", async ({
    page,
  }) => {
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("__FORCE_PROVIDER_ERROR__ lancer une app");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-error")).toBeVisible({
      timeout: 15_000,
    });
    await page.screenshot({
      path: path.join(shotDir, "error-1440.png"),
      fullPage: false,
    });
    await page.getByTestId("intake-cancel").click();
    await expect(page.getByTestId("intake-composer")).toBeVisible();

    await page.getByTestId("quick-manual").click();
    await expect(page).toHaveURL(/\/projects\/new/);
    await page.goto("/workspace");
    await expect(
      page.getByRole("heading", { name: "Reprendre un travail", level: 2 }),
    ).toBeVisible();
    await page.goto("/ops1/nouvelle-demande");
    await expect(
      page.getByRole("heading", { name: "Nouvelle demande", level: 1 }),
    ).toBeVisible();
  });

  for (const width of [1728, 1440, 1280, 1024] as const) {
    test(`proposal responsive no H-scroll at ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1024 });
      await page.goto("/nouvelle-demande");
      await page
        .getByTestId("intake-intent")
        .fill("Je veux lancer une application de suivi des contrats.");
      await page.getByTestId("intake-submit").click();
      await expect(page.getByTestId("intake-proposal")).toBeVisible({
        timeout: 15_000,
      });
      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      }));
      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.innerWidth + 1);
      await page.screenshot({
        path: path.join(shotDir, `proposal-${width}.png`),
        fullPage: false,
      });
    });
  }
});
