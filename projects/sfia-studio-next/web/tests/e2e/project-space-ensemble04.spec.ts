import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";
import { goRailSurface } from "./helpers/rail-nav";
import { test, expect } from "@playwright/test";
import { clickCreateProjectAndEnter } from "./helpers/create-project-from-prep";

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
    await clickCreateProjectAndEnter(page, { createTimeoutMs: 30000, navTimeoutMs: 30000 });

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
    await goRailSurface(page, "projet");
    await expect(page.getByTestId("project-overview")).toBeVisible();
    await expect(page.getByTestId("project-overview-name")).toHaveText(projectName);

    await goRailSurface(page, "journal");
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-surface",
      "journal",
    );

    await goRailSurface(page, "pilotage");
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-surface",
      "pilotage",
    );

    await goRailSurface(page, "travail");

    // T05 — Accès directs
    await expect(page.getByTestId("nav-documents")).toBeVisible();
    await expect(page.getByTestId("nav-sources-git")).toBeVisible();
    await expect(page.getByTestId("nav-resultats")).toBeVisible();

    // Visual fidelity — rail icons / separators / no duplicate portfolio footer
    await expect(rail.getByText("Navigation", { exact: true })).toBeVisible();
    await expect(rail.getByText("Accès directs", { exact: true })).toBeVisible();
    await expect(rail.getByTestId("rail-project-status")).toHaveText(/Projet actif/);
    await expect(page.getByRole("link", { name: /Retour portefeuille/i })).toHaveCount(0);
    await expect(page.getByTestId("thread-send")).toHaveAttribute("aria-label", "Envoyer");
    await expect(page.getByTestId("thread-send")).not.toHaveText(/Envoyer/);
    await expect(page.getByTestId("travail-aside-inspector")).toBeVisible();
    await expect(page.getByText(/Mémoire D4 récupérable/i)).toHaveCount(0);
    await expect(page.getByTestId("travail-intro-rule")).toBeVisible();
    await expect(page.getByTestId("nora-conversation-panel")).toBeVisible();
    await expect(page.getByTestId("nora-composer")).toBeVisible();
    // Conversation and composer are separate cards (composer not inside conversation panel).
    await expect(
      page.getByTestId("nora-conversation-panel").getByTestId("nora-composer"),
    ).toHaveCount(0);
    await expect(page.getByText(/0 applicable/i)).toHaveCount(0);

    const railBox = await rail.boundingBox();
    expect(railBox?.width).toBeGreaterThanOrEqual(244);
    expect(railBox?.width).toBeLessThanOrEqual(248);

    await page.getByTestId("nav-documents").click();
    await expect(page).toHaveURL(/surface=document/);

    // T08 — deep URL + reload
    await page.goto(`/projects/${projectId}?surface=projet`);
    await expect(page.getByTestId("project-overview")).toBeVisible({ timeout: 20000 });
    await page.reload();
    await expect(page.getByTestId("project-overview")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);

    // T06 — Retour Portefeuille (unique rail entry)
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

  test("T13 temporary HTTP 500 then retry recovers without cross-project leak", async ({
    page,
  }) => {
    const projectName = `E04 T13 ${Date.now()}`;
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await page.getByTestId("portfolio-new-prep").click();
    await page.waitForURL("**/preparations/**");
    await page.getByTestId("prep-draft").fill("Ensemble 04 T13 temporary error");
    await page.getByTestId("prep-send").click();
    await expect(
      page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
    ).toBeVisible({ timeout: 30000 });
    await seedInspectedNameViaApi(page, { name: projectName, summary: "t13" });
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
    await clickCreateProjectAndEnter(page, { createTimeoutMs: 30000, navTimeoutMs: 30000 });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);

    let failRootGets = true;
    let rootGetCount = 0;
    await page.route("**/api/projects/**", async (route) => {
      const url = route.request().url();
      const method = route.request().method();
      const isProjectRootGet =
        method === "GET" &&
        /\/api\/projects\/[^/?#]+\/?$/.test(new URL(url).pathname);
      if (isProjectRootGet) {
        rootGetCount += 1;
        if (failRootGets) {
          await route.fulfill({
            status: 500,
            contentType: "application/json",
            body: JSON.stringify({ error: "INTERNAL" }),
          });
          return;
        }
      }
      await route.continue();
    });

    await page.reload();
    await expect(page.getByTestId("project-unavailable")).toHaveAttribute(
      "data-unavailable-kind",
      "temporary",
      { timeout: 20000 },
    );
    await expect(page.getByTestId("unavailable-retry")).toBeVisible();
    await expect(page.getByTestId("rail-project-name")).toHaveText("Projet indisponible");
    await expect(page.getByTestId("rail-project-name")).not.toHaveText(projectName);
    await expect(page.getByTestId("studio-rail").getByTestId("nav-travail")).toHaveCount(0);

    const getsBeforeRetry = rootGetCount;
    failRootGets = false;
    await page.getByTestId("unavailable-retry").click();
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);
    await expect(page.getByTestId("project-unavailable")).toHaveCount(0);
    expect(rootGetCount).toBeGreaterThan(getsBeforeRetry);
  });

  test("T16 pending thread state survives surface nav after Ensemble 04 shell", async ({
    page,
  }) => {
    const projectName = `E04 T16 ${Date.now()}`;
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await page.getByTestId("portfolio-new-prep").click();
    await page.waitForURL("**/preparations/**");
    await page.getByTestId("prep-draft").fill("Ensemble 04 T16 pending preserve");
    await page.getByTestId("prep-send").click();
    await expect(
      page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
    ).toBeVisible({ timeout: 30000 });
    await seedInspectedNameViaApi(page, { name: projectName, summary: "t16" });
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
    await clickCreateProjectAndEnter(page, { createTimeoutMs: 30000, navTimeoutMs: 30000 });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const stamp = Date.now();
    const pending = {
      content: "Intention incertaine E04 T16 — ne pas dupliquer",
      clientTurnKey: `ctk_e04_t16_${stamp}`,
      clientCommandKey: `conv-auth:ctk_e04_t16_${stamp}`,
    };
    await page.evaluate(
      ({ projectId: id, pending: p }) => {
        sessionStorage.setItem(`sfia.thread.pending:${id}`, JSON.stringify(p));
      },
      { projectId, pending },
    );
    await page.reload();
    await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("nora-thread")).toBeVisible();

    await goRailSurface(page, "projet");
    await expect(page.getByTestId("project-overview")).toBeVisible();
    await expect(page.getByTestId("thread-pending-banner")).toHaveCount(0);

    await goRailSurface(page, "journal");

    await goRailSurface(page, "travail");
    await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("thread-reconcile-pending")).toBeVisible();
    await expect(page.getByTestId("nora-thread")).toBeVisible();
    // Scope: shell navigation must not clear client pending identity.
    // Deep Nora scroll / structured replies remain Ensemble 05.
  });
});
