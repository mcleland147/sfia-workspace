import { test, expect } from "@playwright/test";
import path from "path";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
} from "./helpers/g4-chat-first";

test("DEV fake login → sas → message Nora FAKE → document → create → portfolio reopen by projectId", async ({
  page,
  context,
}) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await expect(page.getByRole("heading", { name: /retrouvez vos projets/i })).toBeVisible();
  await expect(page.getByTestId("portfolio-new-prep")).toBeVisible();

  await openNewPreparation(page);

  await sendPrepMessage(page, "Bonjour Nora depuis Playwright");
  await expect(page.getByText("Nora (fixture FAKE, not LIVE)", { exact: false })).toBeVisible({
    timeout: 30000,
  });

  await page.getByRole("button", { name: "Documents", exact: true }).click();
  await page.getByTestId("doc-start-create").click();
  await page.getByTestId("document-revise-draft").fill("# Document Playwright\ncontenu");
  await page.getByTestId("doc-save").click();
  await expect(page.getByTestId("surface-status")).toContainText(/AVAILABLE/i, { timeout: 10000 });

  await page.getByRole("button", { name: "Discussion", exact: true }).click();
  await constituteAndCreateProject(page, {
    name: "Projet Playwright",
    summary: "résumé test",
  });
  const projectUrl = page.url();
  const projectId = projectUrl.split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  await expect(page.getByText("Même fil", { exact: false })).toBeVisible();
  await expect(page.getByText("Bonjour Nora depuis Playwright", { exact: true })).toBeVisible();

  // Portfolio → open by projectId only (no preparationId query).
  await page.goto("/portfolio");
  await expect(page.getByRole("heading", { name: /retrouvez vos projets/i })).toBeVisible();
  await expect(page.getByText(projectId!, { exact: true })).toBeVisible();
  await page.locator(`a[href^="/projects/${projectId}"]`).click();
  await page.waitForURL(`**/projects/${projectId}**`);
  expect(page.url()).not.toContain("preparationId=");
  await expect(page.getByText("réouverture par projectId", { exact: false })).toBeVisible();
  await expect(page.getByText("Bonjour Nora depuis Playwright", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Documents" }).click();
  await expect(page.getByText("Document Playwright", { exact: false })).toBeVisible();

  await page.reload();
  await expect(page.getByText("Bonjour Nora depuis Playwright", { exact: true })).toBeVisible();

  // New browser context (fresh session) of same DEV pilot A — reopen by id.
  const page2 = await context.newPage();
  await page2.goto("/login");
  await page2.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page2.waitForURL("**/portfolio");
  await page2.goto(`/projects/${projectId}`);
  await expect(page2.getByText("Bonjour Nora depuis Playwright", { exact: true })).toBeVisible();

  // Pilot B cannot read Pilot A's project.
  const bContext = await context.browser()!.newContext();
  const pageB = await bContext.newPage();
  await pageB.goto("/login");
  await pageB.getByRole("button", { name: "Pilote B (DEV)" }).click();
  await pageB.waitForURL("**/portfolio");
  await pageB.goto(`/projects/${projectId}`);
  await expect(pageB.getByText("non autorisé", { exact: false })).toBeVisible();
  await expect(pageB.getByText("Bonjour Nora depuis Playwright")).toHaveCount(0);
  await bContext.close();

  const shot = path.join("tests/e2e/artifacts", `ml1-continuity-${Date.now()}.png`);
  await page.screenshot({ path: shot, fullPage: true });
});
