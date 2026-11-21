import {
  openSasSecondaryTool,
  backToSasConversation,
  seedInspectedNameViaApi,
} from "./helpers/g4-chat-first";
import { test, expect } from "@playwright/test";
import { clickCreateProjectAndEnter } from "./helpers/create-project-from-prep";

/**
 * B1–B4 targeted BROWSER checks on isolated E2E lane (Playwright config),
 * not the operator DEV :3100 process.
 */
test("G4 B1–B4: rail surfaces, resume without POST, deep-link, revise AVAILABLE", async ({
  page,
}) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  // B4 — create once (new label)
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");
  const prepUrl = page.url();
  const prepId = prepUrl.split("/preparations/")[1]?.split(/[?#]/)[0];
  expect(prepId).toBeTruthy();

  await page.getByTestId("prep-draft").fill("G4 correctifs B1-B4");
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
    timeout: 30000,
  });

  await expect(page.getByPlaceholder("Nom du projet")).toHaveCount(0);
  await expect(page.getByTestId("prep-constitute")).toHaveCount(0);
  await seedInspectedNameViaApi(page, {
    name: `Projet G4 B ${Date.now()}`,
    summary: "résumé g4",
  });
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();

  await openSasSecondaryTool(page, "Documents");
  await page.getByTestId("doc-start-create").click();
  await page.getByTestId("document-revise-draft").fill("# Doc G4\nligne");
  await page.getByTestId("doc-save").click();
  await expect(page.getByTestId("surface-status")).toContainText(/AVAILABLE/i, { timeout: 10000 });
  await backToSasConversation(page);
  await clickCreateProjectAndEnter(page, { createTimeoutMs: 30000, navTimeoutMs: 30000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();

  // B1 — real rail links with surface query
  const rail = page.getByTestId("studio-rail");
  await expect(rail.getByTestId("nav-travail")).toHaveAttribute(
    "href",
    `/projects/${projectId}?surface=travail`,
  );
  await rail.getByTestId("nav-pilotage").click();
  await expect(page).toHaveURL(new RegExp(`/projects/${projectId}\\?surface=pilotage`));
  await rail.getByTestId("nav-documents").click();
  await expect(page).toHaveURL(new RegExp(`surface=document`));
  await expect(page.getByTestId("studio-rail")).toHaveAttribute("data-rail-variant", "inspection");
  await expect(page.getByTestId("document-bibliotheque")).toBeVisible({ timeout: 10000 });

  // Select (not open) then Ouvrir
  const firstDoc = page.locator('[data-testid^="doc-open-"]').first();
  await expect(firstDoc).toBeVisible({ timeout: 15000 });
  const docTestId = await firstDoc.getAttribute("data-testid");
  const documentId = docTestId?.replace("doc-open-", "");
  expect(documentId).toBeTruthy();
  await firstDoc.click();
  await expect(page.getByTestId("document-selection-aside")).toBeVisible();
  // Selection must not push documentId into the URL.
  await expect(page).not.toHaveURL(new RegExp(`documentId=${documentId}`));
  await page.getByTestId("doc-action-open").click();
  await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`));
  await expect(page.getByTestId("document-read")).toBeVisible();

  // B2 — reload keeps deep-link; no mutation claimed on open
  await page.reload();
  await expect(page).toHaveURL(new RegExp(`surface=document`));
  await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`));
  await expect(page.getByTestId("document-read")).toBeVisible();
  await expect(page.getByTestId("document-read-aside")).toContainText("DOCUMENT / ACTIONS");
  await expect(page.getByTestId("document-revise-draft")).toHaveCount(0);

  // Back to travail then Forward
  await page.goBack();
  await page.goForward();
  await expect(page).toHaveURL(new RegExp(`documentId=${documentId}`));

  // Foreign documentId → controlled empty (no content body of another doc)
  await page.goto(`/projects/${projectId}?surface=document&documentId=doc_foreign_denied`);
  await expect(page.getByTestId("document-missing")).toBeVisible();

  // B3 — Ensemble 06: no Pilote textarea; Demander une révision → Travail / Nora
  await page.goto(`/projects/${projectId}?surface=document&documentId=${documentId}`);
  await expect(page.getByTestId("document-read")).toBeVisible({ timeout: 10000 });
  await page.getByTestId("doc-action-request-revision").click();
  await expect(page).toHaveURL(new RegExp(`surface=travail`));
  await expect(page.getByTestId("document-revise-draft")).toHaveCount(0);

  // B4 — Reprendre = GET only (no POST to /api/preparations on resume)
  let prepPostCount = 0;
  page.on("request", (req) => {
    if (req.method() === "POST" && /\/api\/preparations\/?$/.test(new URL(req.url()).pathname)) {
      prepPostCount += 1;
    }
  });
  await page.goto("/portfolio");
  // Create an open prep to resume: use existing list if any, else new then back
  const resumeButtons = page.locator('[data-testid^="resume-prep-"]');
  if ((await resumeButtons.count()) === 0) {
    await page.getByTestId("portfolio-new-prep").click();
    await page.waitForURL("**/preparations/**");
    await page.goto("/portfolio");
  }
  prepPostCount = 0;
  await page.locator('[data-testid^="resume-prep-"]').first().click();
  await page.waitForURL("**/preparations/**");
  expect(prepPostCount).toBe(0);
});
