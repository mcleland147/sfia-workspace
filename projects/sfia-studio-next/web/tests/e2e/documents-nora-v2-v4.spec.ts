import { test, expect } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  openSasSecondaryTool,
  backToSasConversation,
  sendPrepMessage,
} from "./helpers/g4-chat-first";

/**
 * F1/F4/F5 — V2 historical → confirm → proposal candidate → conserve V4.
 * Fixture lane (FAKE Nora). Playwright isolated :3101.
 *
 * Sas manual editor used only to seed V1–V3 (KNOWN GAP — out of GO scope).
 */
test("Documents Nora: V2 historique → proposition exacte → V4", async ({ page }) => {
  test.setTimeout(180_000);

  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await openNewPreparation(page);
  await sendPrepMessage(page, "Bonjour Nora — reprise documentaire V2 V4.");
  await expect(page.getByText("Nora", { exact: false }).first()).toBeVisible({ timeout: 30000 });

  await openSasSecondaryTool(page, "Documents");
  await page.getByTestId("doc-start-create").click();
  await page.getByTestId("document-revise-draft").fill(
    "# Parcours\n\n## Objet\nCircuit V1.\n\n## Responsabilités\nCentres.\n",
  );
  await page.getByTestId("doc-save").click();
  await expect(page.getByTestId("surface-status")).toContainText(/AVAILABLE/i, { timeout: 15000 });

  // Stay in Sas editor to seed V2 then V3 (KNOWN GAP seed path).
  await page.getByTestId("document-revise-draft").fill(
    "# Parcours\n\n## Objet\nCircuit V2.\n\n## Responsabilités\nVérification V2.\n",
  );
  await page.getByTestId("doc-save").click();
  await expect(page.getByTestId("surface-status")).toContainText(/AVAILABLE.*rev 2|rev 2/i, {
    timeout: 15000,
  });

  await page.getByTestId("document-revise-draft").fill(
    "# Parcours\n\n## Objet\nCircuit V3.\n\n## Responsabilités\nCourante V3.\n",
  );
  await page.getByTestId("doc-save").click();
  await expect(page.getByTestId("surface-status")).toContainText(/AVAILABLE.*rev 3|rev 3/i, {
    timeout: 15000,
  });
  await backToSasConversation(page);

  await constituteAndCreateProject(page, {
    name: `DocsV2V4 ${Date.now()}`,
    summary: "v2-v4",
  });
  await page.waitForURL("**/projects/**");

  await page.getByTestId("nav-documents").click();
  await expect(page.getByTestId("document-bibliotheque")).toBeVisible({ timeout: 15000 });
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-versions").click();
  await expect(page.getByTestId("document-history-surface")).toBeVisible();

  await page.getByTestId("doc-rev-2").click();
  await page.getByTestId("doc-action-rework-nora").click();
  await expect(page).toHaveURL(/surface=travail/);

  // F4 — historical choices in conversation thread (not under-composer panel).
  await expect(page.getByTestId("document-historical-confirm")).toHaveCount(0);
  await expect(page.getByRole("button", { name: /Repartir de la v2/i })).toBeVisible({
    timeout: 45000,
  });
  await page.getByRole("button", { name: /Repartir de la v2/i }).click();
  await expect(
    page.getByText(/nous repartons de la version historique/i),
  ).toBeVisible({ timeout: 45000 });

  const composer = page.getByLabel("Message à Nora");
  await expect(composer).toBeEnabled({ timeout: 15000 });
  await composer.fill(
    "Je souhaite clarifier les responsabilités entre les trois centres.",
  );
  await page.getByRole("button", { name: "Envoyer" }).click();

  await expect(
    page.getByRole("button", { name: /Conserver comme nouvelle version/i }),
  ).toBeVisible({ timeout: 45000 });
  // F5 — no duplicate conserve panel under composer.
  await expect(page.getByTestId("document-proposal-conserve")).toHaveCount(0);

  const viewer = page.getByTestId("travail-viewer");
  await expect(viewer).toBeVisible();
  await expect(viewer).toContainText(/coordinateur consolide|confirmation tracée/i, {
    timeout: 10000,
  });
  await expect(page.getByTestId("document-focus-banner")).toContainText(
    /PROPOSITION NON ENREGISTRÉE/i,
  );

  await page.getByRole("button", { name: /Conserver comme nouvelle version/i }).click();

  await expect(
    page.getByText(/Nouvelle version disponible\s*:\s*v4|Version v4 conservée/i).first(),
  ).toBeVisible({ timeout: 45000 });
  // No technical pending/internal codes in product surface after conserve.
  await expect(page.getByText("PROPOSAL_PENDING_CONSERVATION")).toHaveCount(0);
  await expect(page.getByText("NOT_EXECUTED")).toHaveCount(0);

  await page.getByTestId("nav-documents").click();
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-versions").click();
  await expect(page.getByTestId("doc-rev-4")).toBeVisible({ timeout: 15000 });
  await expect(page.getByTestId("doc-rev-1")).toBeVisible();
  await expect(page.getByTestId("doc-rev-2")).toBeVisible();
  await expect(page.getByTestId("doc-rev-3")).toBeVisible();

  // Reload — no auto-save; V4 still present.
  await page.reload();
  await page.getByTestId("nav-documents").click();
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-versions").click();
  await expect(page.getByTestId("doc-rev-4")).toBeVisible({ timeout: 15000 });
});
