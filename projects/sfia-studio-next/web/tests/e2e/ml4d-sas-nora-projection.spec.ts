import { expect, test } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
} from "./helpers/g4-chat-first";
import {
  SAS_MATURATION_T1,
  SAS_MATURATION_T2,
  SAS_MATURATION_T3,
  sasMaturationT4Rename,
} from "../../src/domains/conversation/fixture-semantic-qualify";

async function loginPilot(
  page: import("@playwright/test").Page,
  which: "a" | "b" = "a",
) {
  await page.goto("/login");
  await page
    .getByRole("button", { name: which === "a" ? "Pilote A (DEV)" : "Pilote B (DEV)" })
    .click();
  await page.waitForURL("**/portfolio");
}

test.describe("ML4D Sas Nora — corrective convergence", () => {
  test("AF living aperçu without primary constitute; secondary tools not permanent tabs", async ({
    page,
  }) => {
    await loginPilot(page, "a");
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

  test("AF primary path: create without constitute/adjust UI clicks", async ({ page }) => {
    await loginPilot(page, "b");
    await openNewPreparation(page);
    const unique = `Cockpit B-${Date.now()}`;
    await sendPrepMessage(
      page,
      `Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé ${unique}.`,
    );
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-field-name")).toContainText(unique);
    await expect(page.getByTestId("prep-create-project")).toBeEnabled();
    await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);
    await page.getByTestId("prep-create-project").click();
    await page.waitForURL("**/projects/**", { timeout: 30000 });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();
    await page.reload();
    await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
    await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("studio-rail")).toBeVisible();
  });

  test("AF secondary adjust still works (not the primary proof)", async ({ page }) => {
    await loginPilot(page, "a");
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
    await loginPilot(page, "a");
    await openNewPreparation(page);
    await sendPrepMessage(page, "Cette base n'est pas suffisante pour démarrer.");
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-proposal-state")).not.toHaveText(/Base suffisante/i);
    await expect(page.getByTestId("prep-nora-assessment")).toContainText(/pas suffisante/i);
  });

  test("AF multi-turn maturation: vague → outcome → scope → rename → create (no PATCH)", async ({
    page,
  }) => {
    test.setTimeout(240_000);
    await loginPilot(page, "b");
    await openNewPreparation(page);

    // T1 — vague intention: no invented name as fact, exploring
    await sendPrepMessage(page, SAS_MATURATION_T1);
    await expect(page.getByTestId("prep-proposal")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-proposal-state")).not.toHaveText(/Base suffisante/i);
    await expect(page.getByTestId("prep-create-project")).toBeDisabled();
    await expect(page).toHaveURL(/\/preparations\//);

    // T2 — desired outcome appears; still clarifying
    await sendPrepMessage(page, SAS_MATURATION_T2);
    await expect(page.getByTestId("prep-field-intention")).toContainText(/décisions importantes/i, {
      timeout: 30000,
    });
    await expect(page.getByTestId("prep-proposal-state")).not.toHaveText(/Base suffisante/i);
    await expect(page).toHaveURL(/\/preparations\//);

    // T3 — scope + proposed name via proposedProjectName (no REQUEST_EFFECT); no project
    await sendPrepMessage(page, SAS_MATURATION_T3);
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-field-name")).toContainText("Assistant de pilotage");
    await expect(page.getByTestId("prep-proposal-state")).toHaveText(/Base suffisante/i);
    await expect(page.getByTestId("prep-nora-assessment")).toBeVisible();
    await expect(page).toHaveURL(/\/preparations\//);

    // T4 — conversational rename with unique name (no programmatic PATCH, no Ajuster)
    const unique = `Cockpit projets MT-${Date.now()}`;
    await sendPrepMessage(page, sasMaturationT4Rename(unique));
    await expect(page.getByTestId("prep-field-name")).toContainText(unique, {
      timeout: 30000,
    });
    await expect(page.getByTestId("prep-field-name")).not.toHaveText("Assistant de pilotage");
    await expect(page.getByTestId("prep-create-project")).toBeEnabled();
    await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);

    // T5 — create directly from inspected T4 name
    await page.getByTestId("prep-create-project").click();
    await page.waitForURL("**/projects/**", { timeout: 30000 });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();
    await page.reload();
    await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
    await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("studio-rail")).toBeVisible();
  });
});
