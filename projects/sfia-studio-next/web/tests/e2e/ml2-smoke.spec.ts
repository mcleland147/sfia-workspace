
import { test, expect } from "@playwright/test";
import path from "path";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
  openSasSecondaryTool,
  backToSasConversation,
} from "./helpers/g4-chat-first";
import { goRailSurface } from "./helpers/rail-nav";

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

  // Journal V4 — sas secondary tool (tabs, not legacy Sujets/Acquis headings).
  await openSasSecondaryTool(page, "Journal");
  await expect(page.getByTestId("journal-title")).toBeVisible();
  await expect(page.getByTestId("journal-tab-subjects")).toBeVisible();

  // Secondary tools only exist on the conversation surface — return before Documents.
  await backToSasConversation(page);
  await openSasSecondaryTool(page, "Documents");
  await expect(page.getByTestId("document-library")).toBeVisible();

  await backToSasConversation(page);
  await constituteAndCreateProject(page, {
    name: "Projet ML2 Playwright",
    summary: "résumé ml2",
  });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();

  await expect(page.getByTestId("travail-intro")).toBeVisible({ timeout: 15000 });
  await expect(page.getByTestId("studio-rail")).toBeVisible();
  await expect(
    page.getByText("Compare les options A et B pour l'architecture, compromis et point ouvert budget", {
      exact: true,
    }),
  ).toBeVisible();

  // Reopen continuity — Journal V4 is a rail surface with tabs.
  await page.goto(`/projects/${projectId}`);
  await expect(page.getByTestId("travail-intro")).toBeVisible({ timeout: 15000 });
  await goRailSurface(page, "journal");
  await expect(page.getByTestId("journal-title")).toBeVisible();
  await expect(page.getByTestId("journal-tab-subjects")).toBeVisible();

  // Isolation
  const bContext = await context.browser()!.newContext();
  const pageB = await bContext.newPage();
  await pageB.goto("/login");
  await pageB.getByRole("button", { name: "Pilote B (DEV)" }).click();
  await pageB.waitForURL("**/portfolio");
  await pageB.goto(`/projects/${projectId}`);
  await expect(pageB.getByTestId("project-unavailable")).toBeVisible();
  await expect(pageB.getByTestId("project-unavailable")).toHaveAttribute(
    "data-unavailable-kind",
    /not_found|unauthorized/,
  );
  await bContext.close();

  const shot = path.join("tests/e2e/artifacts", `ml2-smoke-${Date.now()}.png`);
  await page.screenshot({ path: shot, fullPage: true });
});
