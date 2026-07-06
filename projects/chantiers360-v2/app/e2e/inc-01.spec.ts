import { test, expect, type Page } from "@playwright/test";
import { hasDatabaseUrl, resetChantiers } from "./helpers/db";

const STATUSES = ["En cours", "En retard", "Terminé"] as const;

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

async function updateStatus(page: Page, status: string) {
  await page.locator("#status").selectOption(status);
  await page.getByRole("button", { name: "Mettre à jour" }).click();
}

test.describe("INC-01 — Chantiers360 v2", () => {
  test.beforeEach(async () => {
    test.skip(!hasDatabaseUrl(), "TEST_DATABASE_URL or DATABASE_URL required");
    await resetChantiers();
  });

  test("US-02 — liste vide et CTA création", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText("Aucun chantier — créez votre premier chantier pour démarrer INC-01.")
    ).toBeVisible();
    await expect(page.getByText("Aucun chantier pour ce filtre.")).toBeVisible();
    await expect(page.getByRole("link", { name: "+ Nouveau chantier" })).toBeVisible();
  });

  test("US-01 — création chantier et champs obligatoires", async ({ page }) => {
    await page.goto("/chantiers/nouveau");
    await expect(page.getByLabel("Libellé chantier")).toHaveAttribute("required", "");
    await expect(page.getByLabel("Client")).toHaveAttribute("required", "");
    await expect(page.getByLabel("Adresse")).toHaveAttribute("required", "");

    const title = `Chantier QA ${Date.now()}`;
    await createChantier(page, {
      title,
      client: "Client QA",
      address: "12 rue des Tests, Lyon",
    });

    await expect(page.getByRole("heading", { name: title })).toBeVisible();
    await expect(page.getByText("À démarrer").first()).toBeVisible();
  });

  test("US-03 — fiche chantier, retour dashboard, placeholders INC-02+", async ({ page }) => {
    const title = `Fiche QA ${Date.now()}`;
    await createChantier(page, {
      title,
      client: "Client Fiche",
      address: "1 avenue Test",
    });

    await expect(page.getByText("Client Fiche")).toBeVisible();
    await expect(page.getByText("1 avenue Test")).toBeVisible();
    await expect(page.getByText("Tâches")).toBeVisible();
    await expect(page.getByText("INC-02").first()).toBeVisible();
    await expect(page.getByText("Sections opérationnelles disponibles")).toBeVisible();

    await page.getByRole("link", { name: "Retour au tableau de bord" }).click();
    await expect(page).toHaveURL("/");
    await expect(page.getByRole("heading", { name: title })).toBeVisible();
  });

  test("US-04 — modification des statuts sur fiche et liste", async ({ page }) => {
    const title = `Statut QA ${Date.now()}`;
    await createChantier(page, {
      title,
      client: "Client Statut",
      address: "5 rue Statut",
    });

    for (const status of STATUSES) {
      await updateStatus(page, status);
      await expect(page.locator("header dd").filter({ hasText: status })).toBeVisible();

      await page.getByRole("link", { name: "Retour au tableau de bord" }).click();
      await expect(page.getByRole("heading", { name: title }).locator("..")).toContainText(status);
      await page.getByRole("heading", { name: title }).click();
      await expect(page).toHaveURL(/\/chantiers\/[0-9a-f-]+$/);
    }

    await expect(page.getByRole("heading", { name: title })).toBeVisible();
  });
});
