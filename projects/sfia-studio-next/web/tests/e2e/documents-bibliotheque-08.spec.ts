import { test, expect } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  openSasSecondaryTool,
  backToSasConversation,
  sendPrepMessage,
} from "./helpers/g4-chat-first";

/**
 * Ensemble 06 — Documents Bibliothèque (page 08) browser smoke on E2E lane.
 * Covers DOC-UAT-01/02/04/05/07 selection, read-only, history, compare shell.
 */
test("Documents 08: select≠open, read-only, history, compare", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await openNewPreparation(page);
  await sendPrepMessage(page, "Bonjour Nora documents bibliotheque");
  await expect(page.getByText("Nora", { exact: false }).first()).toBeVisible({ timeout: 30000 });

  await openSasSecondaryTool(page, "Documents");
  await page.getByTestId("doc-start-create").click();
  await page.getByTestId("document-revise-draft").fill(
    "# Parcours\n\n## Objet\nCircuit initial.\n\n## Responsabilites\nCentres.\n",
  );
  await page.getByTestId("doc-save").click();
  await expect(page.getByTestId("surface-status")).toContainText(/AVAILABLE/i, { timeout: 10000 });
  await backToSasConversation(page);

  await constituteAndCreateProject(page, {
    name: `Docs08 ${Date.now()}`,
    summary: "bibliotheque",
  });
  await page.waitForURL("**/projects/**");
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();

  await page.getByTestId("nav-documents").click();
  await expect(page.getByTestId("document-bibliotheque")).toBeVisible({ timeout: 15000 });

  const firstDoc = page.locator('[data-testid^="doc-open-"]').first();
  await expect(firstDoc).toBeVisible({ timeout: 15000 });
  const documentId = (await firstDoc.getAttribute("data-testid"))?.replace("doc-open-", "");
  expect(documentId).toBeTruthy();

  // DOC-UAT-01 — select without opening
  await firstDoc.click();
  await expect(page.getByTestId("document-selection-aside")).toBeVisible();
  await expect(page).not.toHaveURL(/documentId=/);
  await expect(page.getByTestId("doc-action-open")).toBeVisible();

  // DOC-UAT-02/04 — open read-only, no textarea (Figma 08.02: no alert banner in body)
  await page.getByTestId("doc-action-open").click();
  await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`));
  await expect(page.getByTestId("document-read")).toBeVisible();
  await expect(page.getByTestId("document-read-aside")).toContainText("DOCUMENT / ACTIONS");
  await expect(page.getByTestId("doc-action-request-revision")).toContainText(
    "Demander une révision à Nora",
  );
  await expect(page.getByTestId("document-revise-draft")).toHaveCount(0);

  // DOC-UAT-05/07 — history + comparator collapsed then expand
  await page.getByTestId("doc-action-history").click();
  await expect(page.getByTestId("document-history-surface")).toBeVisible();
  await expect(page.getByTestId("document-compare-controls")).toHaveCount(0);
  await page.getByTestId("doc-action-compare-toggle").click();
  await expect(page.getByTestId("document-compare-controls")).toBeVisible();
});
