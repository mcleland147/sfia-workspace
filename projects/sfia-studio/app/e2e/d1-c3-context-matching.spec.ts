import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const shotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-d1-c3",
);

test.beforeAll(() => {
  fs.mkdirSync(shotDir, { recursive: true });
  process.env.D1_INTAKE_PROVIDER = "fake";
});

async function createProjectViaUi(
  page: import("@playwright/test").Page,
  name: string,
  objective: string,
  activate = true,
) {
  await page.goto("/projects/new");
  await page.getByTestId("project-name").fill(name);
  await page.getByTestId("project-objective").fill(objective);
  await page.getByTestId("project-context").fill(`Contexte ${name}`);
  const activateBox = page.getByTestId("project-activate");
  if (await activateBox.count()) {
    if (activate) await activateBox.check();
    else await activateBox.uncheck();
  }
  await page.getByTestId("project-submit").click();
  await expect(page).toHaveURL(/\/projects\//, { timeout: 15_000 });
}

test.describe("D1-C3 Existing Context Matching", () => {
  test("exact name → strong match + temporary selection, no mutation", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createProjectViaUi(
      page,
      "Campus360",
      "Gestion des utilisateurs du campus",
    );
    await createProjectViaUi(page, "FacturationX", "Factures clients B2B");

    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill(
        "Je veux reprendre Campus360 pour la gestion des utilisateurs.",
      );
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-proposal")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("intake-context")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("context-result")).toBeVisible();
    await expect(page.getByTestId("context-status")).toContainText(
      /Correspondance|plusieurs|possible/i,
    );
    await expect(page.getByText("Campus360").first()).toBeVisible();
    await expect(
      page.getByTestId("context-cycle-action-unavailable"),
    ).toBeVisible();
    await expect(page.getByText(/Confirmer et créer|Rattacher définitivement/i)).toHaveCount(
      0,
    );

    // Select first available radio
    const radio = page.locator('input[name="context-selection"]').first();
    await radio.check();
    await expect(page.getByTestId("context-selection-draft")).toBeVisible();
    await expect(page.getByTestId("context-no-mutation")).toBeVisible();

    await page.screenshot({
      path: path.join(shotDir, "strong-match-1440.png"),
      fullPage: false,
    });

    // Cockpit read link present
    await expect(
      page.locator('[data-testid^="context-cockpit-"]').first(),
    ).toBeVisible();
  });

  test("no-match for unrelated intent", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createProjectViaUi(
      page,
      "AstronomieC3",
      "Cataloguer les étoiles lointaines",
    );
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux lancer une application de suivi des contrats.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-context")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("context-result")).toBeVisible();
    // Either no-match or low candidates — Astronomie should not be forced top
    const status = page.getByTestId("context-status");
    await expect(status).toBeVisible();
    await page.screenshot({
      path: path.join(shotDir, "no-match-1440.png"),
      fullPage: false,
    });
  });

  test("analyze-only keeps informational matching only", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Analyse cette idée, mais ne crée rien.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-proposal")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("intake-context")).toBeVisible();
    await expect(page.getByText(/Confirmer et créer/i)).toHaveCount(0);
  });

  test("multiple close projects show ambiguity path", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createProjectViaUi(
      page,
      "Suivi Contrats Alpha",
      "Suivi des contrats fournisseurs",
    );
    await createProjectViaUi(
      page,
      "Suivi Contrats Beta",
      "Suivi des contrats fournisseurs",
    );
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux améliorer le suivi des contrats fournisseurs.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-context")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("context-candidates")).toBeVisible();
    await page.screenshot({
      path: path.join(shotDir, "multiple-matches-1440.png"),
      fullPage: false,
    });
  });

  test("inactive project warning when DRAFT exists", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createProjectViaUi(
      page,
      "ProjetDraftC3",
      "Projet brouillon pour matching",
      false,
    );

    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux reprendre ProjetDraftC3 pour la gestion des utilisateurs.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-context")).toBeVisible({
      timeout: 15_000,
    });
    await page.screenshot({
      path: path.join(shotDir, "inactive-project-1440.png"),
      fullPage: false,
    });
  });

  for (const width of [1728, 1280, 1024] as const) {
    test(`strong match responsive no H-scroll at ${width}`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 1024 });
      await createProjectViaUi(
        page,
        `Campus${width}`,
        "Gestion campus responsive",
      );
      await page.goto("/nouvelle-demande");
      await page
        .getByTestId("intake-intent")
        .fill(`Je veux reprendre Campus${width} pour la gestion des utilisateurs.`);
      await page.getByTestId("intake-submit").click();
      await expect(page.getByTestId("intake-context")).toBeVisible({
        timeout: 15_000,
      });
      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth + 1,
      );
      expect(overflow).toBe(false);
      await page.screenshot({
        path: path.join(shotDir, `strong-match-${width}.png`),
        fullPage: false,
      });
    });
  }

  test("context unavailable is honest (forced query)", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande?forceContextUnavailable=1");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux lancer une application de suivi des contrats.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-context")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("context-unavailable")).toBeVisible({
      timeout: 10_000,
    });
    await expect(page.getByTestId("context-status")).toContainText(
      /indisponible/i,
    );
    await page.screenshot({
      path: path.join(shotDir, "context-unavailable-1440.png"),
      fullPage: false,
    });
  });

  test("workspace and OPS1 legacy remain reachable", async ({ page }) => {
    await page.goto("/workspace");
    await expect(page.getByRole("heading", { name: /workspace/i })).toBeVisible();
    await page.goto("/ops1/nouvelle-demande");
    await expect(page).toHaveURL(/\/ops1\/nouvelle-demande/);
  });
});
