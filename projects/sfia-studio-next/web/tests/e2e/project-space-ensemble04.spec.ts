import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";
import { test, expect } from "@playwright/test";

/**
 * Ensemble 04 — Espace projet shell: identity, rail nav, overview, no duplicate tabs.
 * FAKE/DEV lane — does not claim Nora LIVE or RECETTE promotion.
 */
test.describe("Ensemble 04 project space", () => {
  test("identity, rail nav, overview, no central tabs, unavailable", async ({ page }) => {
    const projectName = `Cockpit E04 ${Date.now()}`;

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await page.getByTestId("portfolio-new-prep").click();
    await page.waitForURL("**/preparations/**");
    await page.getByTestId("prep-draft").fill("Ensemble 04 project space seed");
    await page.getByTestId("prep-send").click();
    await expect(
      page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
    ).toBeVisible({ timeout: 30000 });
    await seedInspectedNameViaApi(page, { name: projectName, summary: "résumé e04" });
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
    await page.getByTestId("prep-create-project").click();
    await page.waitForURL("**/projects/**", { timeout: 15000 });

    const projectUrl = page.url();
    const projectId = projectUrl.split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();

    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    // T02 — real project name in rail
    await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);

    // T04 — no duplicated central surface tab buttons
    await expect(page.getByRole("navigation", { name: "Surfaces projet" })).toHaveCount(0);

    const rail = page.getByTestId("studio-rail");

    // T03 — Travail / Projet / Journal / Trajectoire
    await rail.getByTestId("nav-projet").click();
    await expect(page).toHaveURL(/surface=projet/);
    await expect(page.getByTestId("project-overview")).toBeVisible();
    await expect(page.getByTestId("project-overview-name")).toHaveText(projectName);

    await rail.getByTestId("nav-journal").click();
    await expect(page).toHaveURL(/surface=journal/);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-surface",
      "journal",
    );

    await rail.getByTestId("nav-pilotage").click();
    await expect(page).toHaveURL(/surface=pilotage/);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-surface",
      "pilotage",
    );

    await rail.getByTestId("nav-travail").click();
    await expect(page).toHaveURL(/surface=travail/);

    // T05 — Accès directs
    await expect(page.getByTestId("nav-documents")).toBeVisible();
    await expect(page.getByTestId("nav-sources-git")).toBeVisible();
    await expect(page.getByTestId("nav-resultats")).toBeVisible();
    await page.getByTestId("nav-documents").click();
    await expect(page).toHaveURL(/surface=document/);

    // T08 — deep URL + reload
    await page.goto(`/projects/${projectId}?surface=projet`);
    await expect(page.getByTestId("project-overview")).toBeVisible({ timeout: 20000 });
    await page.reload();
    await expect(page.getByTestId("project-overview")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);

    // T06 — Retour Portefeuille
    await rail.getByTestId("nav-portfolio").click();
    await page.waitForURL("**/portfolio");

    // T11 — projet absent
    await page.goto("/projects/proj_does_not_exist_e04");
    await expect(page.getByTestId("project-unavailable")).toHaveAttribute(
      "data-unavailable-kind",
      "not_found",
      { timeout: 20000 },
    );
    await expect(page.getByTestId("unavailable-back-portfolio")).toBeVisible();
    await expect(page.getByTestId("rail-project-name")).toHaveText("Projet indisponible");
    await expect(page.getByTestId("studio-rail").getByTestId("nav-travail")).toHaveCount(0);
  });
});
