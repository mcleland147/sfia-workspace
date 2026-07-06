import { test, expect, type Page } from "@playwright/test";
import { hasDatabaseUrl, resetChantiers } from "./helpers/db";

async function createChantier(
  page: Page,
  data: { title: string; client: string; address: string }
) {
  await page.goto("/chantiers/nouveau");
  await page.getByLabel("Libellé chantier").fill(data.title);
  await page.getByLabel("Client").fill(data.client);
  await page.getByLabel("Adresse").fill(data.address);
  await page.getByRole("button", { name: "Créer le chantier" }).click();
  await expect(page).toHaveURL(/\/chantiers\/[0-9a-f-]+$/);
}

async function openComptesRendusTab(page: Page) {
  await page.getByRole("button", { name: "Comptes rendus" }).click();
}

test.describe("INC-04 — Chantiers360 v2", () => {
  test.beforeEach(async () => {
    test.skip(!hasDatabaseUrl(), "TEST_DATABASE_URL or DATABASE_URL required");
    await resetChantiers();
  });

  test("US-11 — rédiger un compte rendu rapide", async ({ page }) => {
    await createChantier(page, {
      title: `CR QA ${Date.now()}`,
      client: "Client CR",
      address: "14 rue Compte Rendu",
    });

    await openComptesRendusTab(page);

    const contenu = "Pose des cloisons terminée — contrôle qualité OK.";
    await page.getByLabel("Rédiger un compte rendu").fill(contenu);
    await page.getByRole("button", { name: "Enregistrer" }).click();

    const history = page.getByLabel("Historique des comptes rendus");
    await expect(history.getByText(contenu)).toBeVisible();
    await expect(history.locator("time").first()).toBeVisible();
  });

  test("US-11 — consulter l'historique après rechargement", async ({ page }) => {
    await createChantier(page, {
      title: `CR reload QA ${Date.now()}`,
      client: "Client Reload",
      address: "6 avenue Persistance",
    });

    await openComptesRendusTab(page);

    const first = "Intervention matin — livraison matériaux.";
    const second = "Intervention après-midi — démarrage plomberie.";

    await page.getByLabel("Rédiger un compte rendu").fill(first);
    await page.getByRole("button", { name: "Enregistrer" }).click();
    await expect(page.getByText(first)).toBeVisible();

    await page.getByLabel("Rédiger un compte rendu").fill(second);
    await page.getByRole("button", { name: "Enregistrer" }).click();
    await expect(page.getByText(second)).toBeVisible();

    const historyItems = page.getByLabel("Historique des comptes rendus").locator("li");
    await expect(historyItems).toHaveCount(2);
    await expect(historyItems.nth(0)).toContainText(second);
    await expect(historyItems.nth(1)).toContainText(first);

    const url = page.url();
    await page.reload();
    await expect(page).toHaveURL(url);

    await openComptesRendusTab(page);
    await expect(page.getByText(first)).toBeVisible();
    await expect(page.getByText(second)).toBeVisible();
    await expect(historyItems).toHaveCount(2);
    await expect(historyItems.nth(0)).toContainText(second);
    await expect(historyItems.nth(1)).toContainText(first);
  });
});
