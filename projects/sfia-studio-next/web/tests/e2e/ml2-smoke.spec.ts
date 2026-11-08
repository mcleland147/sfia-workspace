import { test, expect } from "@playwright/test";
import path from "path";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
} from "./helpers/g4-chat-first";

test("ML2 DEV: fil continu, document explicite, journal sujets, reprise projet", async ({
  page,
  context,
}) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await openNewPreparation(page);

  // Comparative exchange → capitalisation path
  await sendPrepMessage(
    page,
    "Compare les options A et B pour l'architecture, compromis et point ouvert budget",
  );

  // Explicit document request
  await page.getByTestId("prep-draft").fill(
    "Rédige un document de synthèse sur les options A et B",
  );
  await page.getByTestId("prep-send").click();
  // Status may include policy/operation metadata between COMPLETE and document proof.
  await expect(
    page.getByText(/Nora deterministic-fixture · COMPLETE[\s\S]*document \S+ v\d+/i),
  ).toBeVisible({
    timeout: 30000,
  });

  // Journal — G4 surface label is "Journal" (not "Journal — Sujets")
  await page.getByRole("button", { name: "Journal", exact: true }).click();
  await expect(page.getByRole("heading", { name: /Sujets/i }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: /Acquis/i }).first()).toBeVisible();

  // Document surface: save + inspect
  await page.getByRole("button", { name: "Documents", exact: true }).click();
  await expect(page.getByTestId("document-library")).toBeVisible();

  await page.getByRole("button", { name: "Discussion", exact: true }).click();
  await constituteAndCreateProject(page, {
    name: "Projet ML2 Playwright",
    summary: "résumé ml2",
  });
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
  await expect(page.getByRole("heading", { name: /Sujets/i }).first()).toBeVisible();

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
