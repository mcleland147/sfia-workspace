import { expect, test, type Page } from "@playwright/test";
import { constituteAndCreateProject, openNewPreparation, uniqueProjectName } from "./helpers/g4-chat-first";

async function sendPreparationMessage(page: Page, text: string) {
  const draft = page.getByTestId("prep-draft");
  const send = page.getByTestId("prep-send");
  await expect(draft).toHaveValue("", { timeout: 60000 });
  await draft.fill(text);
  await expect(draft).toHaveValue(text);
  await expect(send).toBeEnabled();
  await send.click();
  await expect(page.getByText("suffisamment établi")).toBeVisible({ timeout: 60000 });
}

test("preparation title stays independent of the official project name", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  const preparationId = await openNewPreparation(page);
  await page.goto("/portfolio");
  const preparationRow = page.getByTestId(`resume-prep-${preparationId}`);
  await expect(preparationRow).toContainText("Nouvelle préparation");

  await page.goto(`/preparations/${preparationId}`);
  await sendPreparationMessage(page, "Je prépare la refonte des accès utilisateurs");
  await page.goto("/portfolio");
  await expect(preparationRow).toContainText("Refonte des accès utilisateurs");
  await page.getByTestId("portfolio-search").fill("Refonte des accès");
  await expect(preparationRow).toBeVisible();
  await page.getByTestId("portfolio-search").fill("");

  await preparationRow.getByRole("button", { name: "Actions de l'espace" }).click();
  await expect(page.getByRole("menuitem", { name: "Supprimer" })).toBeDisabled();
  await page.getByRole("menuitem", { name: "Renommer" }).click();
  const dialog = page.getByTestId("portfolio-rename");
  await expect(dialog).toContainText("Il ne modifie pas le nom du futur projet");
  await page.getByTestId("portfolio-rename-input").fill("Titre retenu par le pilote");
  await dialog.getByRole("button", { name: "Enregistrer" }).click();
  await expect(preparationRow).toContainText("Titre retenu par le pilote", { timeout: 15000 });
  await page.reload();
  await expect(preparationRow).toContainText("Titre retenu par le pilote", { timeout: 15000 });

  const lateKey = `turn-${crypto.randomUUID()}`;
  const late = await page.request.post(`/api/preparations/${preparationId}/messages`, {
    data: { content: "Suggestion tardive de titre", clientTurnKey: lateKey, correlationKey: lateKey },
  });
  expect(late.ok()).toBeTruthy();
  await page.goto("/portfolio");
  await expect(preparationRow).toContainText("Titre retenu par le pilote", { timeout: 15000 });
  await expect(preparationRow).not.toContainText("Titre tardif");

  const officialName = uniqueProjectName("Nom officiel distinct");
  await page.goto(`/preparations/${preparationId}`);
  const projectId = await constituteAndCreateProject(page, {
    name: officialName,
    summary: "Création explicite",
    alreadyUnique: true,
  });
  await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));

  await page.goto("/portfolio");
  await expect(page.getByTestId(`resume-prep-${preparationId}`)).toHaveCount(0);
  const projectRow = page.getByTestId(`open-project-${projectId}`);
  await expect(projectRow).toContainText(officialName);
  await projectRow.getByRole("button", { name: "Actions de l'espace" }).click();
  await page.getByRole("menuitem", { name: "Renommer" }).click();
  const renamed = `${officialName} révisé`;
  await page.getByTestId("portfolio-rename-input").fill(renamed);
  await page.getByTestId("portfolio-rename").getByRole("button", { name: "Enregistrer" }).click();
  await expect(projectRow).toContainText(renamed);
  await page.goto(`/projects/${projectId}?surface=travail`);
  await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));

  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote B (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await expect(page.getByText(renamed)).toHaveCount(0);
  await expect(page.getByTestId(`open-project-${projectId}`)).toHaveCount(0);
});

test("rename keeps the typed value when validation fails or the version is stale", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  const preparationId = await openNewPreparation(page);
  await page.goto("/portfolio");
  const row = page.getByTestId(`resume-prep-${preparationId}`);
  await row.getByRole("button", { name: "Actions de l'espace" }).click();
  await page.getByRole("menuitem", { name: "Renommer" }).click();
  const dialog = page.getByTestId("portfolio-rename");
  const input = page.getByTestId("portfolio-rename-input");
  await expect(input).toBeFocused();
  await input.fill("<titre refusé>");
  await dialog.getByRole("button", { name: "Enregistrer" }).click();
  await expect(dialog).toBeVisible();
  await expect(page.getByTestId("portfolio-rename-message")).toBeVisible();
  await expect(input).toHaveValue("<titre refusé>");
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);

  await row.getByRole("button", { name: "Actions de l'espace" }).click();
  await page.getByRole("menuitem", { name: "Renommer" }).click();
  const current = await page.request.get(`/api/portfolio/spaces/preparation/${preparationId}`);
  expect(current.ok()).toBeTruthy();
  const record = await current.json() as { nameRevision: number };
  const ahead = await page.request.put(`/api/preparations/${preparationId}/title`, {
    data: {
      title: "Titre déjà enregistré",
      expectedRevision: record.nameRevision,
      intentionKey: `ahead-${crypto.randomUUID()}`,
    },
  });
  expect(ahead.ok()).toBeTruthy();
  await input.fill("Titre proposé ensuite");
  await dialog.getByRole("button", { name: "Enregistrer" }).click();
  await expect(dialog).toBeVisible();
  await expect(page.getByTestId("portfolio-rename-message")).toBeVisible();
  await expect(input).toHaveValue("Titre proposé ensuite");
  await expect(dialog).toContainText("Titre déjà enregistré");
  await dialog.getByRole("button", { name: "Enregistrer" }).click();
  await expect(dialog).toHaveCount(0);
  await expect(row).toContainText("Titre proposé ensuite", { timeout: 15000 });
});
