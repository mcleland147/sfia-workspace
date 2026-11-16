import { expect, test } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
} from "./helpers/g4-chat-first";
import {
  SAS_MATURATION_INCOMPLETE_QUAL,
  SAS_MATURATION_ORDINARY,
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

test.describe("ML4D Sas Nora — post-recette corrections", () => {
  test("AF living aperçu; no manual adjust; secondary tools not permanent tabs", async ({
    page,
  }) => {
    await loginPilot(page, "a");
    await openNewPreparation(page);
    await expect(page.getByTestId("prep-proposal")).toBeVisible();
    await expect(page.getByTestId("prep-constitute")).toHaveCount(0);
    await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);
    await expect(page.getByRole("navigation", { name: "Surfaces sas" })).toHaveCount(0);
    await expect(page.getByTestId("sas-secondary-tools")).toBeVisible();

    await sendPrepMessage(
      page,
      "Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé Cockpit projets.",
    );
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-field-name")).toContainText("Cockpit projets");
    await expect(page.getByTestId("prep-field-intention")).not.toContainText(/Retenir/i);
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
    await expect(page.getByTestId("prep-constitute")).toHaveCount(0);
    await page.getByTestId("prep-create-project").click();
    await page.waitForURL("**/projects/**", { timeout: 30000 });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();
    await page.reload();
    await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
    await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("studio-rail")).toBeVisible();
  });

  test("AF technical API seed still works when UI adjust is removed", async ({ page }) => {
    await loginPilot(page, "a");
    await openNewPreparation(page);
    await sendPrepMessage(page, "Bonjour Nora depuis Playwright");
    const projectId = await constituteAndCreateProject(page, {
      name: `SasNoraAdjust-${Date.now()}`,
      summary: "Correction technique API (hors UI)",
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

  test("T1→T7 maturation: intention durable, questions résolues, rename, create", async ({
    page,
  }) => {
    test.setTimeout(360_000);
    await loginPilot(page, "b");
    await openNewPreparation(page);

    // T1 — vague / exploring presentation after first exchange
    await sendPrepMessage(page, SAS_MATURATION_T1);
    await expect(page.getByTestId("prep-proposal")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-stage-kicker").or(page.getByTestId("sas-stage-kicker"))).toBeVisible();
    await expect(page.getByTestId("sas-stage-kicker")).not.toHaveText(/PREMIÈRE INTENTION/i);
    await expect(page.getByTestId("prep-create-project")).toHaveCount(0);
    await expect(page.getByTestId("prep-create-unavailable")).toBeVisible();

    // T2 — open question about manual vs automatic appears
    await sendPrepMessage(page, SAS_MATURATION_T2);
    await expect(page.getByTestId("prep-field-intention")).toContainText(/chefs de projet/i, {
      timeout: 30000,
    });
    await expect(page.getByTestId("prep-proposal")).toContainText(/automatique|manuelle|réunion/i);

    // Incomplete QUALIFIED (clarifications omitted) — open question must remain (R2-C)
    await sendPrepMessage(page, SAS_MATURATION_INCOMPLETE_QUAL);
    await expect(page.getByTestId("prep-field-intention")).toContainText(/chefs de projet/i, {
      timeout: 30000,
    });
    await expect(page.getByTestId("prep-proposal")).toContainText(
      /récupération automatique depuis les outils existants est-elle indispensable/i,
    );

    // Ordinary turn without rename — durable intention unchanged (R1-B)
    await sendPrepMessage(page, SAS_MATURATION_ORDINARY);
    await expect(page.getByTestId("prep-field-intention")).toContainText(/chefs de projet/i, {
      timeout: 30000,
    });
    await expect(page.getByTestId("prep-field-intention")).not.toContainText(/Recommander/i);
    await expect(page.getByTestId("prep-proposal")).toContainText(
      /récupération automatique depuis les outils existants est-elle indispensable/i,
    );

    // T3 — V1 manual resolves that question; open list empty / not the old arbitration
    await sendPrepMessage(page, SAS_MATURATION_T3);
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-field-name")).toContainText("Assistant de pilotage");
    await expect(page.getByTestId("prep-proposal-state")).toHaveText(/Base suffisante/i);
    await expect(page.getByTestId("prep-proposal")).not.toContainText(
      /récupération automatique depuis les outils existants est-elle indispensable/i,
    );

    // T4/T5 — rename only: name changes, durable intention preserved
    const unique = `Cockpit projets MT-${Date.now()}`;
    await sendPrepMessage(page, sasMaturationT4Rename(unique));
    await expect(page.getByTestId("prep-field-name")).toContainText(unique, {
      timeout: 30000,
    });
    await expect(page.getByTestId("prep-field-name")).not.toHaveText("Assistant de pilotage");
    await expect(page.getByTestId("prep-field-intention")).not.toContainText(/Retenir/i);
    await expect(page.getByTestId("prep-field-intention")).toContainText(/chefs de projet/i);
    await expect(page.getByTestId("prep-create-project")).toBeEnabled();
    await expect(page.getByTestId("prep-constitute")).toHaveCount(0);

    // T6 — explicit create
    await page.getByTestId("prep-create-project").click();
    await page.waitForURL("**/projects/**", { timeout: 30000 });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();

    // T7 — same thread after reload
    await page.reload();
    await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
    await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("studio-rail")).toBeVisible();
  });
});
