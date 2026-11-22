/**
 * E08 — Dépôts Git surface (SCRIPTED DEV).
 * Does not prove GitHub REAL mutations.
 */
import { expect, test } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

test.describe("E08 GitRepositoriesSurface (SCRIPTED)", () => {
  test("empty → explicit attach → tree → pubs → manage detach", async ({ page }) => {
    test.setTimeout(240_000);

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(page, "Préparation E08 surface dépôts Git");

    const projectId = await constituteAndCreateProject(page, {
      name: uniqueProjectName("E08 Git Surface"),
      summary: "parcours consultation multi-dépôts SCRIPTED",
    });
    expect(projectId).toBeTruthy();

    await page.goto("/settings/integrations");
    await expect(page.getByTestId("integrations-panel")).toBeVisible();
    await expect(page.getByTestId("integrations-status-banner")).toBeVisible({ timeout: 15_000 });
    if (await page.getByTestId("disconnect-github").isVisible().catch(() => false)) {
      await page.getByTestId("disconnect-github").click();
      await expect(page.getByTestId("integrations-disconnect-confirm")).toBeVisible();
      await page.getByTestId("disconnect-github-confirm").click();
      await expect(page.getByTestId("connect-github")).toBeVisible({ timeout: 15_000 });
    }
    await page.getByTestId("connect-github").click();
    await expect(page.getByTestId("integrations-status-banner")).toContainText(/GitHub est connecté/i, {
      timeout: 20_000,
    });
    await expect(page.getByTestId("github-connected-badge")).toBeVisible();
    if (await page.getByTestId("refresh-repos").isVisible().catch(() => false)) {
      await page.getByTestId("refresh-repos").click();
    }

    await page.goto(`/projects/${projectId}?surface=git`);
    await expect(page.getByTestId("git-empty")).toBeVisible({ timeout: 20_000 });
    // P1-02 — choices list, never silent first-repo attach
    const choices = page.getByTestId("git-empty-repo-choices");
    await expect(choices).toBeVisible({ timeout: 15_000 });
    const firstAttach = choices.locator("button").first();
    await expect(firstAttach).toBeVisible();
    await firstAttach.click();

    await expect(page.getByTestId("git-repo-card")).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId("git-tab-files")).toBeVisible();
    await expect(page.getByTestId("git-tree")).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId("git-split")).toBeVisible();

    // Branch select + server-side filter control (E08-S03)
    await expect(page.getByTestId("git-branch-select")).toBeVisible();
    await page.getByTestId("git-branch-select").click();
    await expect(page.getByTestId("git-branch-search")).toBeVisible();
    await page.getByTestId("git-branch-filter").fill("main");
    await page.getByTestId("git-branch-filter-apply").click();
    // Note lives outside the popover — wait for provider filter to apply (S03).
    await expect
      .poll(async () => page.getByTestId("git-branch-filter-note").count(), { timeout: 20_000 })
      .toBeGreaterThan(0);
    await expect(page.getByTestId("git-branch-filter-note")).toContainText(/main/i, {
      timeout: 10_000,
    });
    await page.getByTestId("git-branch-select").click(); // close if still open

    // Publications tab — project-scale, historical wording (E08-S04)
    await page.getByTestId("git-tab-publications").click();
    await expect(page.getByTestId("git-publications")).toBeVisible();
    await expect(page.getByTestId("git-publications")).toContainText(/historique|publication/i);
    await expect(page.getByTestId("git-pubs-split").or(page.getByTestId("git-publications-empty"))).toBeVisible();

    // Manage — at least one attached; second attach when an unattached button is offered
    await page.getByTestId("git-manage-repos").click();
    await expect(page.getByTestId("git-manage")).toBeVisible();
    await expect(page.getByTestId("git-manage").locator(".git-manage-item").first()).toBeVisible();
    const manageAttaches = page.getByTestId("git-manage").locator("button", { hasText: /^Associer / });
    if ((await manageAttaches.count()) > 0) {
      const before = await page.getByTestId("git-manage").locator(".git-manage-item").count();
      await manageAttaches.first().click();
      await page.getByTestId("git-manage-repos").click();
      await expect
        .poll(async () => page.getByTestId("git-manage").locator(".git-manage-item").count(), {
          timeout: 15_000,
        })
        .toBeGreaterThanOrEqual(before);
    }

    // Detach one with confirm (force: list can remount while sources refresh)
    const detachBtn = page.locator('[data-testid^="git-detach-"]').first();
    if (await detachBtn.isVisible().catch(() => false)) {
      await detachBtn.click({ force: true, timeout: 15_000 });
      await expect(page.getByTestId("git-detach-confirm")).toBeVisible({ timeout: 10_000 });
      await page.getByTestId("git-detach-confirm-yes").click();
    }

    // Enlarge control is icon-only with aria-label when a file is open — skip if empty tree
    await page.getByTestId("git-tab-files").click();
    const fileBtn = page.locator('[data-testid^="git-tree-file-"]').first();
    if (await fileBtn.isVisible().catch(() => false)) {
      await fileBtn.click();
      await expect(page.getByTestId("git-preview-actions")).toBeVisible();
      await expect(page.getByTestId("git-action-enlarge")).toHaveAttribute(
        "aria-label",
        /Agrandir/i,
      );
      await expect(page.getByTestId("git-action-enlarge")).not.toContainText(/Agrandir/i);
    }
  });

  test("mobile viewport keeps git empty / manage usable", async ({ page }) => {
    test.setTimeout(180_000);
    await page.setViewportSize({ width: 390, height: 844 });

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(page, "E08 mobile git");
    const projectId = await constituteAndCreateProject(page, {
      name: uniqueProjectName("E08 Git Mobile"),
      summary: "viewport mobile",
    });

    await page.goto("/settings/integrations");
    if (await page.getByTestId("connect-github").isVisible().catch(() => false)) {
      await page.getByTestId("connect-github").click();
    }

    await page.goto(`/projects/${projectId}?surface=git`);
    const empty = page.getByTestId("git-empty");
    const card = page.getByTestId("git-repo-card");
    await expect(empty.or(card)).toBeVisible({ timeout: 20_000 });
  });

  test("disconnect confirmation can be cancelled without effect (11.07)", async ({ page }) => {
    test.setTimeout(180_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await page.goto("/settings/integrations");
    await expect(page.getByTestId("integrations-panel")).toBeVisible();
    if (await page.getByTestId("connect-github").isVisible().catch(() => false)) {
      await page.getByTestId("connect-github").click();
      await expect(page.getByTestId("disconnect-github")).toBeVisible({ timeout: 20_000 });
    }
    if (!(await page.getByTestId("disconnect-github").isVisible().catch(() => false))) {
      test.skip(true, "GitHub not connected in this DEV run");
      return;
    }
    await page.getByTestId("disconnect-github").click();
    await expect(page.getByTestId("integrations-disconnect-confirm")).toBeVisible();
    await expect(page.getByTestId("disconnect-consequence-banner")).toBeVisible();
    await page.getByTestId("disconnect-github-cancel").click();
    await expect(page.getByTestId("integrations-panel")).toBeVisible();
    await expect(page.getByTestId("disconnect-github")).toBeVisible();
  });
});
