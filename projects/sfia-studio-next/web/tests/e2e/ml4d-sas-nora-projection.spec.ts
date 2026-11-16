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

test.describe("ML4D Sas Nora — corrective convergence", () => {
  test.beforeEach(async ({ page }) => {
    await loginPilotA(page);
  });

  test("AF living aperçu without primary constitute; secondary tools not permanent tabs", async ({
    page,
  }) => {
    await openNewPreparation(page);
    await expect(page.getByTestId("prep-proposal")).toBeVisible();
    await expect(page.getByRole("button", { name: /Constituer une proposition/i })).toHaveCount(0);
    await expect(page.getByRole("navigation", { name: "Surfaces sas" })).toHaveCount(0);
    await expect(page.getByTestId("sas-secondary-tools")).toBeVisible();

    await sendPrepMessage(
      page,
      "Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé Cockpit projets.",
    );
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-field-name")).toContainText("Cockpit projets");
    await expect(page.getByTestId("prep-nora-assessment")).toBeVisible();
    await expect(page.getByTestId("studio-rail").getByText("Préparation en cours")).toBeVisible();
  });

  test("AF primary path: create without constitute/adjust clicks", async ({ page }) => {
    await openNewPreparation(page);
    await sendPrepMessage(
      page,
      "Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé Cockpit projets.",
    );
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-create-project")).toBeEnabled();
    // Discriminant: never open adjust / constitute.
    await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);
    await page.getByTestId("prep-create-project").click();
    await page.waitForURL("**/projects/**", { timeout: 20000 });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();
    await page.reload();
    await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
    await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
  });

  test("AF secondary adjust still works (not the primary proof)", async ({ page }) => {
    await openNewPreparation(page);
    await sendPrepMessage(page, "Bonjour Nora depuis Playwright");
    const projectId = await constituteAndCreateProject(page, {
      name: `SasNoraAdjust-${Date.now()}`,
      summary: "Correction manuelle secondaire",
    });
    expect(projectId).toBeTruthy();
    await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
  });

  test("AF negation: « pas suffisante » does not show Base suffisante", async ({ page }) => {
    await openNewPreparation(page);
    await sendPrepMessage(page, "Cette base n'est pas suffisante pour démarrer.");
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-proposal-state")).not.toHaveText(/Base suffisante/i);
    await expect(page.getByTestId("prep-nora-assessment")).toContainText(/pas suffisante/i);
  });
});
