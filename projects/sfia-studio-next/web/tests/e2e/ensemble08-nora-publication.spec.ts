/**
 * E08 POST-UAT — Playwright Nora publication discriminant (DEV :3101 / sfia_next_e2e).
 * SCRIPTED provider only — WRITE OFF full refuse is proven in PG (REAL gate).
 * Does NOT mutate RECETTE :3200. Does NOT prove GitHub REAL WRITE.
 */
import { expect, test, type Page } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

async function connectGithubAndAttach(page: Page, projectId: string) {
  await page.goto("/settings/integrations");
  await expect(page.getByTestId("integrations-panel")).toBeVisible();
  if (await page.getByTestId("disconnect-github").isVisible().catch(() => false)) {
    await page.getByTestId("disconnect-github").click();
    await expect(page.getByTestId("integrations-disconnect-confirm")).toBeVisible();
    await page.getByTestId("disconnect-github-confirm").click();
    await expect(page.getByTestId("connect-github")).toBeVisible({ timeout: 15_000 });
  }
  await page.getByTestId("connect-github").click();
  await expect(page.getByTestId("integrations-status-banner")).toContainText(
    /GitHub (est )?connecté/i,
    {
      timeout: 20_000,
    },
  );

  await page.goto(`/projects/${projectId}?surface=git`);
  await expect(page.getByTestId("git-empty").or(page.getByTestId("git-repo-card"))).toBeVisible({
    timeout: 20_000,
  });
  if (await page.getByTestId("git-empty").isVisible().catch(() => false)) {
    const choices = page.getByTestId("git-empty-repo-choices");
    await expect(choices).toBeVisible({ timeout: 15_000 });
    await choices.locator("button").first().click();
  }
  await expect(page.getByTestId("git-repo-card")).toBeVisible({ timeout: 20_000 });
}

async function sendTravail(page: Page, text: string) {
  const draft = page.getByTestId("thread-draft").first();
  const send = page.getByTestId("thread-send").first();
  const thread = page.getByTestId("nora-thread");
  await expect(draft).toBeEditable({ timeout: 20_000 });
  await expect(draft).toHaveValue("", { timeout: 60_000 });
  await draft.fill(text);
  await expect(send).toBeEnabled({ timeout: 10_000 });
  await send.click();
  // Match Pilote bubble only — never the draft textarea content.
  await expect(
    thread
      .getByTestId("nora-msg-pilot")
      .filter({ hasText: text.slice(0, Math.min(40, text.length)) })
      .last(),
  ).toBeVisible({ timeout: 30_000 });
  await expect(draft).toHaveValue("", { timeout: 120_000 });
}

async function lastAssistantText(page: Page): Promise<string> {
  const msgs = page.getByTestId("nora-msg-assistant");
  await expect(msgs.last()).toBeVisible({ timeout: 60_000 });
  return (await msgs.last().innerText()).trim();
}

test.describe("E08 Nora publication discriminant (SCRIPTED DEV)", () => {
  test.describe.configure({ mode: "serial", timeout: 300_000 });

  test("clarify missing doc — no success claim", async ({ page }) => {
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    const preparationId = await openNewPreparation(page);
    await sendPrepMessage(page, "Préparation E08 Nora clarify");
    const projectId = await constituteAndCreateProject(page, {
      name: uniqueProjectName("E08 Nora Clarify"),
      summary: "clarification documentaire",
    });
    expect(projectId).toBeTruthy();
    expect(preparationId).toBeTruthy();

    await connectGithubAndAttach(page, projectId!);

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20_000 },
    );

    await sendTravail(
      page,
      "Publie le document Document fantôme E08 introuvable XYZ dans mon dépôt GitHub chemin docs/studio-next/e08-clarify.md",
    );
    const clarifyText = await lastAssistantText(page);
    expect(clarifyText).not.toMatch(/a été publié/i);
    expect(clarifyText).not.toMatch(/Je publie/i);
    expect(clarifyText).toMatch(
      /précision|introuvable|non déterminé|Aucune publication|pas été (lancée|tentée)|pas abouti/i,
    );
  });

  test("SCRIPTED create+publish → Nora COMPLETED + publications", async ({ page }) => {
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(page, "Préparation E08 create publish");

    const projectId = await constituteAndCreateProject(page, {
      name: uniqueProjectName("E08 CreatePub"),
      summary: "create+publish SCRIPTED",
    });
    expect(projectId).toBeTruthy();

    await connectGithubAndAttach(page, projectId!);

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20_000 },
    );

    await sendTravail(page, "E08_PUBLISH_CREATE_SCRIPTED");
    const text = await lastAssistantText(page);
    expect(text).toMatch(/a été publié/i);
    expect(text).toMatch(/Aucune fusion/i);
    expect(text).not.toMatch(/Je publie/i);
    expect(text).not.toMatch(/reste à confirmer/i);

    await page.goto(`/projects/${projectId}?surface=git`);
    await expect(page.getByTestId("git-repo-card")).toBeVisible({ timeout: 20_000 });
    await page.getByTestId("git-tab-publications").click();
    await expect(page.getByTestId("git-publications")).toBeVisible();
    const pubsBody = await page.getByTestId("git-publications").innerText();
    expect(pubsBody.length).toBeGreaterThan(10);

    await page.reload();
    await expect(page.getByTestId("git-tab-publications").or(page.getByTestId("git-publications"))).toBeVisible({
      timeout: 20_000,
    });
    if (await page.getByTestId("git-tab-publications").isVisible().catch(() => false)) {
      await page.getByTestId("git-tab-publications").click();
    }
    const pubsAfter = await page.getByTestId("git-publications").innerText();
    expect(pubsAfter.length).toBeGreaterThan(10);
  });
});
