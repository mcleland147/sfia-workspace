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

async function openProchainesActions(page: Page) {
  await page.goto("/prochaines-actions");
  await expect(page.getByRole("heading", { name: "Prochaines actions" })).toBeVisible();
}

test.describe("INC-05 — Chantiers360 v2", () => {
  test.beforeEach(async () => {
    test.skip(!hasDatabaseUrl(), "TEST_DATABASE_URL or DATABASE_URL required");
    await resetChantiers();
  });

  test("US-12 — consulter les prochaines actions dérivées", async ({ page }) => {
    const title = `PA QA ${Date.now()}`;
    await createChantier(page, {
      title,
      client: "Client PA",
      address: "3 rue Actions",
    });

    const taskLabel = "Préparer livraison matériaux";
    await page.getByLabel("Ajouter une tâche").fill(taskLabel);
    await page.getByRole("button", { name: "Ajouter" }).click();
    await expect(page.getByText(taskLabel)).toBeVisible();

    await openProchainesActions(page);

    const list = page.getByLabel("Liste des prochaines actions");
    await expect(list.getByText(taskLabel)).toBeVisible();
    await expect(list.getByText(title)).toBeVisible();
    await expect(list.getByText("Tâche")).toBeVisible();
  });

  test("US-12 — item dérivé disparaît quand la tâche est terminée", async ({ page }) => {
    await createChantier(page, {
      title: `PA done QA ${Date.now()}`,
      client: "Client Done",
      address: "7 avenue Terminée",
    });
    const chantierUrl = page.url();

    const taskLabel = "Nettoyage fin de chantier";
    await page.getByLabel("Ajouter une tâche").fill(taskLabel);
    await page.getByRole("button", { name: "Ajouter" }).click();
    await expect(page.getByText(taskLabel)).toBeVisible();

    await openProchainesActions(page);
    await expect(page.getByLabel("Liste des prochaines actions").getByText(taskLabel)).toBeVisible();

    await page.goto(chantierUrl);

    const statusSelect = page.getByLabel(`Statut de la tâche ${taskLabel}`);
    await statusSelect.selectOption("Terminée");
    await page
      .locator("li")
      .filter({ hasText: taskLabel })
      .getByRole("button", { name: "Mettre à jour la tâche" })
      .click();
    await expect(statusSelect).toHaveValue("Terminée");

    await openProchainesActions(page);
    await expect(page.getByLabel("Liste des prochaines actions").getByText(taskLabel)).not.toBeVisible();
  });

  test("US-13 — naviguer vers la section source depuis prochaines actions", async ({ page }) => {
    const title = `PA nav QA ${Date.now()}`;
    await createChantier(page, {
      title,
      client: "Client Nav",
      address: "11 rue Navigation",
    });

    await page.getByRole("button", { name: "Réserves" }).click();
    const description = "Joint fenêtre à refaire";
    await page.getByLabel("Ajouter une réserve").fill(description);
    await page.getByRole("button", { name: "Ajouter" }).click();
    await expect(page.getByText(description)).toBeVisible();

    await openProchainesActions(page);
    await page
      .getByRole("link", { name: new RegExp(`Ouvrir ${title}`) })
      .first()
      .click();

    await expect(page).toHaveURL(/\/chantiers\/[0-9a-f-]+\?tab=reserves$/);
    await expect(page.getByRole("button", { name: "Réserves" })).toBeVisible();
    await expect(page.getByText(description)).toBeVisible();
  });

  test("US-12 — inclure un chantier en retard", async ({ page }) => {
    const title = `PA retard QA ${Date.now()}`;
    await createChantier(page, {
      title,
      client: "Client Retard",
      address: "9 rue Retard",
    });

    await page.locator("#status").selectOption("En retard");
    await page.getByRole("button", { name: "Mettre à jour" }).click();
    await expect(page.getByRole("definition").filter({ hasText: "En retard" })).toBeVisible();

    await openProchainesActions(page);
    const list = page.getByLabel("Liste des prochaines actions");
    await expect(list.getByText("Chantier marqué en retard")).toBeVisible();
    await expect(list.getByText(title)).toBeVisible();
  });
});
