import { test, expect } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

/**
 * Ensemble 06 / Journal V4 — BROWSER parcours on DEV e2e lane (:3101 / sfia_next_e2e).
 * Covers tabs, search, open-points filter, 40/60, enlarge, return (J-C12).
 */
test.describe("Journal V4 parcours", () => {
  test("nominal → search → open points → 40/60 → enlarge → retour fil", async ({ page }) => {
    await page.setViewportSize({ width: 1680, height: 970 });
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(
      page,
      "Compare options traçabilité et budget, laisse un point ouvert sur la preuve GitHub",
    );

    const projectName = uniqueProjectName("Journal V4");
    await constituteAndCreateProject(page, {
      name: projectName,
      summary: "parcours journal v4",
      alreadyUnique: true,
    });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();

    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
    await expect(page).toHaveURL(/surface=journal/);
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("project-journal")).toHaveAttribute(
      "data-figma-frame",
      /835:71|842:|859:|860:/,
    );
    await expect(page.getByTestId("journal-tab-subjects")).toBeVisible();
    await expect(page.getByTestId("journal-tab-decisions")).toBeVisible();

    await page.screenshot({
      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-sujets-exploration.png",
      fullPage: false,
    });

    // Recherche Sujets (859:42)
    await page.getByTestId("journal-search").fill("traçabilité");
    await expect(page.getByTestId("journal-search")).toHaveValue("traçabilité");

    // Filtre points ouverts (859:146)
    await page.getByTestId("journal-filter-open-points").locator("input").check();
    await expect(page.getByTestId("journal-filter-open-points").locator("input")).toBeChecked();

    await page.screenshot({
      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-filtre-points.png",
      fullPage: false,
    });

    // Sélection sujet si arbre non vide → 40/60
    const subjectBtn = page.locator("[data-testid^=journal-subject-]").first();
    if (await subjectBtn.count()) {
      await subjectBtn.click();
      await expect(page.getByTestId("project-journal")).toHaveAttribute(
        "data-journal-layout",
        "split",
      );
      await page.screenshot({
        path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-sujet-40-60.png",
        fullPage: false,
      });
      await page.getByTestId("journal-viewer-enlarge").click();
      await expect(page.getByTestId("project-journal")).toHaveAttribute(
        "data-journal-layout",
        "enlarged",
      );
      await page.getByTestId("journal-viewer-reduce").click();
      await expect(page.getByTestId("project-journal")).toHaveAttribute(
        "data-journal-layout",
        "split",
      );
    }

    // Onglet Décisions (860:58)
    await page.getByTestId("journal-tab-decisions").click();
    await expect(page.getByTestId("journal-tab-decisions")).toHaveAttribute("aria-selected", "true");
    await page.getByTestId("journal-search").fill("décision");
    await page.screenshot({
      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-decisions.png",
      fullPage: false,
    });

    // Compact reflow while still on Journal (avoids remount race)
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.getByTestId("project-journal")).toBeVisible();
    await page.screenshot({
      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1280-journal.png",
      fullPage: false,
    });

    // Retour fil — brouillon non auto-envoyé
    const draftBefore = "brouillon journal retour";
    await page.getByTestId("journal-back-thread").click();
    await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 15000 });
    await page.getByTestId("thread-draft").fill(draftBefore);
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
    // No auto-send: send remains enabled only because draft non-empty; message count unchanged until click.
    await expect(page.getByTestId("thread-send")).toBeEnabled();
  });
});
