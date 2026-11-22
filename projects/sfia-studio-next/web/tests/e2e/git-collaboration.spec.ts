/**
 * E08 — Git collaboration E2E aligned with architecture §8.3.
 *
 * Replaces the historical PublicationInspectionPanel AT journey (prepare/authorize/
 * dispatch/merge technical buttons on the Git surface). That panel is intentionally
 * unmounted on the E08 candidate; publication/merge are conducted via Nora.
 *
 * This file stays discriminant vs ensemble08-nora-publication.spec.ts:
 * - proves Git surface has no technical publication/merge control surface;
 * - proves explicit repo attach on GitRepositoriesSurface;
 * - proves Nora SCRIPTED publication + restitution without implicit merge;
 * - proves publications history is observable after publish.
 *
 * Merge mandate / authority / SHA / reconcile invariants: unit + PG suites
 * (documentary-merge-contract, conversation-merge-authority, merge-pull-request-sha,
 * documentary-merge-corrections.pg, conversation-merge-security.pg, git-collaboration.pg).
 */
import { expect, test, type Page } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

async function connectGithubScripted(page: Page) {
  await page.goto("/settings/integrations");
  await expect(page.getByTestId("integrations-panel")).toBeVisible();
  await expect(page.getByTestId("integrations-status-banner")).toBeVisible({ timeout: 15_000 });
  if (await page.getByTestId("disconnect-github").isVisible().catch(() => false)) {
    await page.getByTestId("disconnect-github").click();
    await expect(page.getByTestId("connect-github")).toBeVisible({ timeout: 15_000 });
  }
  await page.getByTestId("connect-github").click();
  // Must match "GitHub est connecté" and must NOT match "GitHub n'est pas connecté".
  await expect(page.getByTestId("integrations-status-banner")).toContainText(/GitHub est connecté/i, {
    timeout: 20_000,
  });
  if (await page.getByTestId("refresh-repos").isVisible().catch(() => false)) {
    await page.getByTestId("refresh-repos").click();
    await expect(page.getByTestId("repo-list")).toBeVisible({ timeout: 10_000 });
  }
}

async function attachFirstRepoOnGitSurface(page: Page, projectId: string) {
  await page.goto(`/projects/${projectId}?surface=git`);
  const gitSurface = page.getByRole("main").getByTestId("git-surface");
  await expect(gitSurface).toBeVisible({ timeout: 20_000 });

  // E08 UX: empty → explicit attach choices (never silent first-repo attach).
  await expect(page.getByTestId("git-empty").or(page.getByTestId("git-repo-card"))).toBeVisible({
    timeout: 20_000,
  });
  if (await page.getByTestId("git-empty").isVisible().catch(() => false)) {
    const choices = page.getByTestId("git-empty-repo-choices");
    await expect(choices).toBeVisible({ timeout: 15_000 });
    await choices.locator("button").first().click();
  }
  await expect(page.getByTestId("git-repo-card")).toBeVisible({ timeout: 20_000 });

  // Architecture §8.3 — no technical publication/merge panel on Dépôts Git.
  await expect(page.getByTestId("publication-inspection")).toHaveCount(0);
  await expect(page.getByTestId("publication-prepare")).toHaveCount(0);
  await expect(page.getByTestId("merge-prepare")).toHaveCount(0);
  await expect(page.getByTestId("merge-dispatch")).toHaveCount(0);
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

test.describe("E08 git collaboration — Nora boundary (SCRIPTED)", () => {
  test("connect → attach → Nora publish without implicit merge; no technical Git panel", async ({
    page,
  }) => {
    test.setTimeout(300_000);

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(page, "Préparation E08 git collaboration Nora");
    const projectId = await constituteAndCreateProject(page, {
      name: uniqueProjectName("E08 GitCollab Nora"),
      summary: "publication via Nora — pas de panneau technique",
    });
    expect(projectId).toBeTruthy();

    await connectGithubScripted(page);
    await attachFirstRepoOnGitSurface(page, projectId!);

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

    await page.goto(`/projects/${projectId}?surface=git`);
    await expect(page.getByTestId("git-repo-card")).toBeVisible({ timeout: 20_000 });
    // Still no technical panel after a successful publication.
    await expect(page.getByTestId("publication-inspection")).toHaveCount(0);
    await expect(page.getByTestId("merge-prepare")).toHaveCount(0);

    await page.getByTestId("git-tab-publications").click();
    await expect(page.getByTestId("git-publications")).toBeVisible();
    const pubsBody = await page.getByTestId("git-publications").innerText();
    expect(pubsBody.length).toBeGreaterThan(10);
    expect(pubsBody).not.toMatch(/PublicationInspectionPanel/i);
  });
});
