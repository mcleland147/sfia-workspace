import { test, expect } from "@playwright/test";
import path from "path";

test("ML2 DEV: fil continu, document explicite, journal sujets, reprise projet", async ({
  page,
  context,
}) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
  await page.waitForURL("**/preparations/**");

  // Comparative exchange → capitalisation path
  await page.getByPlaceholder("Écrire à Nora…").fill(
    "Compare les options A et B pour l'architecture, compromis et point ouvert budget",
  );
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText("Nora (fixture FAKE, not LIVE)", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);

  // Explicit document request
  await page.getByPlaceholder("Écrire à Nora…").fill(
    "Rédige un document de synthèse sur les options A et B",
  );
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText(/document doc_.*AVAILABLE|Document proposé|# Synthèse/i)).toBeVisible({
    timeout: 30000,
  });
  // Status line after save confirmation (generation ≠ save until AVAILABLE)
  await expect(page.getByText(/document \S+ v\d+/i)).toBeVisible({ timeout: 15000 });

  // Journal — Sujets surface
  await page.getByRole("button", { name: "Journal — Sujets" }).click();
  await expect(page.getByRole("heading", { name: "Sujets" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Acquis" })).toBeVisible();

  // Document surface: save + inspect
  await page.getByRole("button", { name: "Document", exact: true }).click();
  await expect(page.getByRole("heading", { name: /Document/ })).toBeVisible();

  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByPlaceholder("Nom du projet").fill("Projet ML2 Playwright");
  await page.getByPlaceholder("Résumé inspecté").fill("résumé ml2");
  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
  await page.getByRole("button", { name: "Créer le projet" }).click();
  await page.waitForURL("**/projects/**", { timeout: 20000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();

  await expect(page.getByText(/Même fil/)).toBeVisible();
  await expect(
    page.getByText("Compare les options A et B pour l'architecture, compromis et point ouvert budget", {
      exact: true,
    }),
  ).toBeVisible();

  // Reopen continuity
  await page.goto(`/projects/${projectId}`);
  await expect(page.getByText("réouverture par projectId", { exact: false })).toBeVisible();
  await page.getByRole("button", { name: "Journal" }).click();
  await expect(page.getByRole("heading", { name: "Sujets" })).toBeVisible();

  // Isolation
  const bContext = await context.browser()!.newContext();
  const pageB = await bContext.newPage();
  await pageB.goto("/login");
  await pageB.getByRole("button", { name: "Pilote B (DEV)" }).click();
  await pageB.waitForURL("**/portfolio");
  await pageB.goto(`/projects/${projectId}`);
  await expect(pageB.getByText("non autorisé", { exact: false })).toBeVisible();
  await bContext.close();

  const shot = path.join("tests/e2e/artifacts", `ml2-smoke-${Date.now()}.png`);
  await page.screenshot({ path: shot, fullPage: true });
});
