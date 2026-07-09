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

test.describe("R-QA-04 — Dashboard panneaux droits", () => {
  test.beforeEach(async () => {
    test.skip(!hasDatabaseUrl(), "TEST_DATABASE_URL or DATABASE_URL required");
    await resetChantiers();
  });

  test("affiche une tâche réelle dans À faire aujourd'hui et la répartition par statut", async ({
    page,
  }) => {
    const title = `Dashboard R-QA-04 ${Date.now()}`;
    await createChantier(page, {
      title,
      client: "Client Dashboard",
      address: "1 rue Dashboard",
    });

    const taskLabel = "Action dashboard réelle";
    await page.getByLabel("Ajouter une tâche").fill(taskLabel);
    await page.getByRole("button", { name: "Ajouter" }).click();
    await expect(page.getByText(taskLabel)).toBeVisible();

    await page.goto("/");
    await expect(page.getByLabel("Actions dérivées du dashboard")).toContainText(taskLabel);
    const repartition = page.getByLabel("Répartition des chantiers par statut");
    await expect(repartition).toContainText("À démarrer");
    await expect(repartition.locator("li").filter({ hasText: "À démarrer" })).toContainText("1");
    await expect(page.getByText("Compte rendu à rédiger")).not.toBeVisible();
  });
});
