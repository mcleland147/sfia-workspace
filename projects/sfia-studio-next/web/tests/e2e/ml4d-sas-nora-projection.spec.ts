import { expect, test } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
} from "./helpers/g4-chat-first";

async function loginPilotA(page: import("@playwright/test").Page) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
}

test.describe("ML4D Sas Nora — living projection + create", () => {
  test.beforeEach(async ({ page }) => {
    await loginPilotA(page);
  });

  test("AF living aperçu evolves without primary constitute form", async ({ page }) => {
    await openNewPreparation(page);
    await expect(page.getByTestId("prep-proposal")).toBeVisible();
    await expect(page.getByTestId("prep-proposal-empty")).toBeVisible();
    await expect(page.getByRole("button", { name: /Constituer une proposition/i })).toHaveCount(0);

    await sendPrepMessage(page, "Je veux créer un projet.");
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-field-intention")).toContainText(/projet/i);
    await expect(page.getByTestId("prep-nora-assessment")).toBeVisible();

    await expect(page.getByTestId("studio-rail").getByText("Préparation en cours")).toBeVisible();
    await expect(page.getByTestId("studio-rail").getByText("Pilotage", { exact: true })).toHaveCount(
      0,
    );
  });

  test("AF create explicit still works via secondary adjust (D2)", async ({ page }) => {
    await openNewPreparation(page);
    // Dialogue-only seed — avoid awaiting D2 mission name binding for classic create path.
    await sendPrepMessage(page, "Bonjour Nora depuis Playwright");
    const projectId = await constituteAndCreateProject(page, {
      name: `SasNora-${Date.now()}`,
      summary: "Intention inspectée pour création explicite",
    });
    expect(projectId).toBeTruthy();
    await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
    await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
  });
});
