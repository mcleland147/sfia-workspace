import { openSasSecondaryTool, backToSasConversation } from "./helpers/g4-chat-first";
import { test, expect } from "@playwright/test";
import { clickCreateProjectAndEnter } from "./helpers/create-project-from-prep";

/**
 * G4 chat-first sas — BROWSER on isolated E2E lane (not operator DEV :3100).
 * Nora responses are fixture FAKE in this lane — not LIVE cognition proof.
 * Manual « Ajuster l'aperçu » removed — name comes from conversation.
 */
test("G4 chat-first: discuss → living projection → create; journal empty structure", async ({
  page,
}) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");

  await expect(page.getByRole("heading", { name: /Parlons de votre projet/i })).toBeVisible();
  await expect(page.getByTestId("prep-empty-invite")).toBeVisible();
  await expect(page.getByTestId("prep-proposal-empty")).toBeVisible();
  await expect(page.getByTestId("prep-constitute")).toHaveCount(0);
  await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);

  const unique = `Projet chat-first E2E ${Date.now()}`;
  await page
    .getByTestId("prep-draft")
    .fill(
      `Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé ${unique}.`,
    );
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
    timeout: 30000,
  });

  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
  await expect(page.getByTestId("prep-field-name")).toContainText(unique);
  await expect(page.getByTestId("prep-create-project")).toBeEnabled();
  await expect(page.getByTestId("prep-constitute")).toHaveCount(0);

  await openSasSecondaryTool(page, "Journal");
  await expect(page.getByTestId("project-journal")).toBeVisible();
  await expect(page.getByTestId("journal-empty-structure")).toBeVisible();

  await backToSasConversation(page);
  await clickCreateProjectAndEnter(page, { createTimeoutMs: 30000, navTimeoutMs: 30000 });
  await expect(page.getByTestId("nora-workspace")).toBeVisible();
});
