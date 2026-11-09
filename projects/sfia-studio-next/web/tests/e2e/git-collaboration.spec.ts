import { expect, test } from "@playwright/test";
import path from "path";
import { openNewPreparation, sendPrepMessage, constituteAndCreateProject } from "./helpers/g4-chat-first";

test.describe("ML4 git collaboration corrective (SCRIPTED)", () => {
  test("AT journey: inspect diff → authorize → dispatch → merge distinct", async ({ page }) => {
    test.setTimeout(240_000);

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(page, "Note pour publication Git documentaire corrective");

    // Create AVAILABLE document in sas before project (D4 continuity).
    await page.getByRole("button", { name: "Documents", exact: true }).click();
    await page.getByTestId("doc-start-create").click();
    await page.getByTestId("document-revise-draft").fill("# Contenu inspectable\n\nParagraphe.\n");
    await page.getByTestId("doc-save").click();
    await expect(page.getByTestId("surface-status")).toContainText(/AVAILABLE/i, { timeout: 15_000 });

    await page.getByRole("button", { name: "Discussion", exact: true }).click();
    const projectId = await constituteAndCreateProject(page, {
      name: "Projet Git ML4 B",
      summary: "publication documentaire B1-B9",
    });
    expect(projectId).toBeTruthy();

    await page.goto("/settings/integrations");
    await expect(page.getByTestId("integrations-panel")).toBeVisible();
    // Wait for status hydration (avoid race: default DISCONNECTED before fetch).
    await expect(page.getByTestId("provider-mode-note")).not.toContainText(/Chargement/i, {
      timeout: 15_000,
    });
    if (await page.getByTestId("disconnect-github").isVisible().catch(() => false)) {
      await page.getByTestId("disconnect-github").click();
      await expect(page.getByTestId("connect-github")).toBeVisible({ timeout: 15_000 });
    }
    await page.getByTestId("connect-github").click();
    await expect(page.getByTestId("integrations-status-banner")).toContainText(/GitHub est connecté/i, {
      timeout: 20_000,
    });
    // Refresh repos so SCRIPTED permission snapshot is current (write for documentary publish).
    if (await page.getByTestId("refresh-repos").isVisible().catch(() => false)) {
      await page.getByTestId("refresh-repos").click();
      await expect(page.getByTestId("repo-list")).toBeVisible({ timeout: 10_000 });
    }

    await page.goto(`/projects/${projectId}?surface=git`);
    const gitSurface = page.getByRole("main").getByTestId("git-surface");
    await expect(gitSurface).toBeVisible({ timeout: 20_000 });
    await expect(gitSurface.getByTestId("publication-inspection")).toBeVisible();

    const panel = gitSurface.getByTestId("publication-inspection");
    const attach = panel.locator('[data-testid^="attach-repo-"]').first();
    await expect(attach).toBeVisible({ timeout: 20_000 });
    await attach.click();
    await expect(panel.getByTestId("project-git-sources")).toBeVisible({ timeout: 20_000 });
    await expect(panel.getByTestId("publication-repo")).not.toHaveValue("", { timeout: 10_000 });

    const docSelect = panel.getByTestId("publication-document");
    await expect(docSelect.locator("option")).not.toHaveCount(1, { timeout: 15_000 });
    await docSelect.selectOption({ index: 1 });

    await panel.getByTestId("publication-path").fill("docs/architecture.md");
    await expect(panel.getByTestId("publication-prepare")).toBeEnabled({ timeout: 10_000 });
    await panel.getByTestId("publication-prepare").click();
    await expect(panel.getByTestId("publication-attempt-status")).toContainText(/PREPARED/i, {
      timeout: 20_000,
    });
    await expect(panel.getByTestId("publication-diff-panel")).toBeVisible();
    await expect(panel.getByTestId("publication-unified-diff")).toBeVisible();
    await panel.getByTestId("publication-unified-diff").focus();

    await panel.getByTestId("publication-authorize").click();
    await expect(panel.getByTestId("publication-attempt-status")).toContainText(/AUTHORIZED/i, {
      timeout: 15_000,
    });

    const dispatchWait = page.waitForResponse(
      (r) => r.url().includes("/git/publications/") && r.url().includes("/dispatch") && r.request().method() === "POST",
      { timeout: 20_000 },
    );
    await panel.getByTestId("publication-dispatch").click();
    const dispatchRes = await dispatchWait;
    const dispatchBody = await dispatchRes.json().catch(() => ({}));
    expect(dispatchRes.ok(), JSON.stringify(dispatchBody)).toBeTruthy();
    await expect(panel.getByTestId("publication-attempt-status")).toContainText(/COMPLETED/i, {
      timeout: 20_000,
    });
    await expect(panel.getByTestId("publication-pr-number")).not.toHaveText("—");

    const mergePrepWait = page.waitForResponse(
      (r) => r.url().includes("/git/merge/prepare") && r.request().method() === "POST",
      { timeout: 20_000 },
    );
    await panel.getByTestId("merge-prepare").click();
    const mergePrepRes = await mergePrepWait;
    const mergePrepBody = await mergePrepRes.json().catch(() => ({}));
    expect(mergePrepRes.ok(), JSON.stringify(mergePrepBody)).toBeTruthy();
    await expect(panel.getByTestId("merge-attempt-status")).toContainText(/PREPARED/i, {
      timeout: 15_000,
    });
    await panel.getByTestId("merge-authorize").click();
    await expect(panel.getByTestId("merge-attempt-status")).toContainText(/AUTHORIZED|mandat/i, {
      timeout: 15_000,
    });
    await panel.getByTestId("merge-dispatch").click();
    await expect(panel.getByTestId("merge-attempt-status")).toContainText(/COMPLETED/i, {
      timeout: 20_000,
    });

    await page.setViewportSize({ width: 390, height: 844 });
    await panel.scrollIntoViewIfNeeded();
    await expect(panel.getByRole("heading", { name: /Publication Git/i })).toBeVisible();
    await page.setViewportSize({ width: 320, height: 568 });
    await panel.scrollIntoViewIfNeeded();
    await expect(panel.getByTestId("badge-effect-provider")).toHaveText("SCRIPTED");
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(panel.getByTestId("merge-attempt-status")).toContainText(/COMPLETED/i);

    const shot = path.join("tests/e2e/artifacts", `ml4-git-corrective-${Date.now()}.png`);
    await page.screenshot({ path: shot, fullPage: true });
  });
});
