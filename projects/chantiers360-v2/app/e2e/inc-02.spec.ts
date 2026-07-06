import { test, expect, type Page } from "@playwright/test";
import { hasDatabaseUrl, resetChantiers } from "./helpers/db";

const TACHE_STATUSES = ["À faire", "En cours", "Terminée"] as const;
const RESERVE_STATUSES = ["Ouverte", "En cours de traitement", "Levée"] as const;

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

async function openReservesTab(page: Page) {
  await page.getByRole("button", { name: "Réserves" }).click();
}

test.describe("INC-02 — Chantiers360 v2", () => {
  test.beforeEach(async () => {
    test.skip(!hasDatabaseUrl(), "TEST_DATABASE_URL or DATABASE_URL required");
    await resetChantiers();
  });

  test("US-06 — ajouter une tâche avec statut À faire", async ({ page }) => {
    await createChantier(page, {
      title: `Tâches QA ${Date.now()}`,
      client: "Client Tâches",
      address: "10 rue Tâches",
    });

    const taskLabel = "Poser cloison séparation";
    await page.getByLabel("Ajouter une tâche").fill(taskLabel);
    await page.getByRole("button", { name: "Ajouter" }).click();

    await expect(page.getByText(taskLabel)).toBeVisible();
    await expect(
      page.getByLabel(`Statut de la tâche ${taskLabel}`)
    ).toHaveValue("À faire");
  });

  test("US-07 — modifier le statut d'une tâche", async ({ page }) => {
    await createChantier(page, {
      title: `Statut tâche QA ${Date.now()}`,
      client: "Client Statut Tâche",
      address: "2 rue Statut",
    });

    const taskLabel = "Contrôle électricité";
    await page.getByLabel("Ajouter une tâche").fill(taskLabel);
    await page.getByRole("button", { name: "Ajouter" }).click();
    await expect(page.getByText(taskLabel)).toBeVisible();

    for (const status of TACHE_STATUSES) {
      const statusSelect = page.getByLabel(`Statut de la tâche ${taskLabel}`);
      await statusSelect.selectOption(status);
      await page
        .locator("li")
        .filter({ hasText: taskLabel })
        .getByRole("button", { name: "Mettre à jour la tâche" })
        .click();
      await expect(statusSelect).toHaveValue(status, { timeout: 10_000 });
    }
  });

  test("US-08 — ajouter une réserve avec statut Ouverte", async ({ page }) => {
    await createChantier(page, {
      title: `Réserves QA ${Date.now()}`,
      client: "Client Réserves",
      address: "8 avenue Réserve",
    });

    await openReservesTab(page);

    const description = "Fissure plafond salon à traiter";
    await page.getByLabel("Ajouter une réserve").fill(description);
    await page.getByRole("button", { name: "Ajouter" }).click();

    await expect(page.getByText(description)).toBeVisible();
    await expect(
      page.getByLabel(`Statut de la réserve ${description}`)
    ).toHaveValue("Ouverte");
  });

  test("US-09 — modifier le statut d'une réserve", async ({ page }) => {
    await createChantier(page, {
      title: `Statut réserve QA ${Date.now()}`,
      client: "Client Statut Réserve",
      address: "3 rue Réserve",
    });

    await openReservesTab(page);

    const description = "Joint salle de bain dégradé";
    await page.getByLabel("Ajouter une réserve").fill(description);
    await page.getByRole("button", { name: "Ajouter" }).click();
    await expect(page.getByText(description)).toBeVisible();

    for (const status of RESERVE_STATUSES) {
      const statusSelect = page.getByLabel(`Statut de la réserve ${description}`);
      await statusSelect.selectOption(status);
      await page
        .locator("li")
        .filter({ hasText: description })
        .getByRole("button", { name: "Mettre à jour la réserve" })
        .click();
      await expect(statusSelect).toHaveValue(status, { timeout: 10_000 });
    }
  });
});
