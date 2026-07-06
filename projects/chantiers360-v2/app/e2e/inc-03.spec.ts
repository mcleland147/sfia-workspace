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

async function openJalonsTab(page: Page) {
  await page.getByRole("button", { name: "Jalons", exact: true }).click();
}

test.describe("INC-03 — Chantiers360 v2", () => {
  test.beforeEach(async () => {
    test.skip(!hasDatabaseUrl(), "TEST_DATABASE_URL or DATABASE_URL required");
    await resetChantiers();
  });

  test("US-10 — renseigner des jalons simples optionnels", async ({ page }) => {
    await createChantier(page, {
      title: `Jalons QA ${Date.now()}`,
      client: "Client Jalons",
      address: "12 rue Planning",
    });

    await openJalonsTab(page);

    await page.getByLabel("Date de début prévue").fill("2026-08-01");
    await page.getByLabel("Date de fin prévue").fill("2026-09-15");
    await page.getByLabel("Prochaine intervention").fill("2026-08-10");
    await page.getByLabel("Jalon à venir").fill("Pose carrelage salle de bain");
    await page
      .getByLabel("Commentaire planning simple")
      .fill("Accès chantier confirmé avec le client");
    await page.getByRole("button", { name: "Enregistrer les jalons" }).click();

    const summary = page.getByLabel("Résumé planning simple");
    await expect(summary.getByText("1 août 2026")).toBeVisible();
    await expect(summary.getByText("15 septembre 2026")).toBeVisible();
    await expect(summary.getByText("10 août 2026")).toBeVisible();
    await expect(summary.getByText("Pose carrelage salle de bain")).toBeVisible();
    await expect(
      summary.getByText("Accès chantier confirmé avec le client")
    ).toBeVisible();
  });

  test("US-10 — modifier des jalons simples existants", async ({ page }) => {
    await createChantier(page, {
      title: `Modifier jalons QA ${Date.now()}`,
      client: "Client Modifier",
      address: "5 avenue Jalon",
    });

    await openJalonsTab(page);

    await page.getByLabel("Jalon à venir").fill("Première livraison");
    await page.getByRole("button", { name: "Enregistrer les jalons" }).click();
    await expect(
      page.getByLabel("Résumé planning simple").getByText("Première livraison")
    ).toBeVisible();

    await openJalonsTab(page);
    await page.getByLabel("Jalon à venir").fill("Livraison finale");
    await page.getByRole("button", { name: "Enregistrer les jalons" }).click();
    await expect(
      page.getByLabel("Résumé planning simple").getByText("Livraison finale")
    ).toBeVisible();
    await expect(
      page.getByLabel("Résumé planning simple").getByText("Première livraison")
    ).not.toBeVisible();
  });
});
