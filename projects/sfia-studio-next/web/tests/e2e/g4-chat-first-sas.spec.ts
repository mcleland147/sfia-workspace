import { test, expect } from "@playwright/test";

/**
 * G4 chat-first sas — BROWSER on isolated E2E lane (not operator DEV :3100).
 * Nora responses are fixture FAKE in this lane — not LIVE cognition proof.
 */
test("G4 chat-first: discuss → constitute proposal → create; journal empty structure", async ({
  page,
}) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");

  await expect(page.getByRole("heading", { name: /Clarifions votre intention/i })).toBeVisible();
  await expect(page.getByTestId("prep-empty-invite")).toBeVisible();
  await expect(page.getByTestId("prep-proposal-empty")).toBeVisible();
  await expect(page.getByPlaceholder("Nom du projet")).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Enregistrer l'aperçu" })).toHaveCount(0);

  await page.getByTestId("prep-draft").fill("Intention E2E chat-first (fixture FAKE Nora)");
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
    timeout: 30000,
  });

  await page.getByTestId("prep-constitute").click();
  await page.getByTestId("prep-adopt-nora").click();
  await page.getByTestId("prep-proposal-name").fill("Projet chat-first E2E");
  await page.getByTestId("prep-proposal-save").click();
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
  await expect(page.getByTestId("prep-create-project")).toBeEnabled();

  await page.getByRole("button", { name: "Journal", exact: true }).click();
  await expect(page.getByTestId("project-journal")).toBeVisible();
  await expect(page.getByTestId("journal-empty-structure")).toBeVisible();

  await page.getByRole("button", { name: "Discussion", exact: true }).click();
  await page.getByTestId("prep-create-project").click();
  await page.waitForURL("**/projects/**", { timeout: 15000 });
  await expect(page.getByTestId("nora-workspace")).toBeVisible();
});
