import { test, expect } from "@playwright/test";
import { bootstrapProjectFromPortfolio } from "./helpers/g4-chat-first";

/**
 * ML4C document continuity — composer send after scroll (FAKE lane).
 * D4 reconcile / long journal: tests/integration/ml4c-document-reconciliation.pg.test.ts
 */
test("ML4C: document continuity — scroll, composer, FAKE send", async ({ page }) => {
  test.setTimeout(180_000);

  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  const seed = "Fil ML4C document continuity (fixture).";
  const { projectId } = await bootstrapProjectFromPortfolio(page, {
    seed,
    name: "ML4C Document Continuity",
    summary: "Continuité composer",
  });

  await page.goto(`/projects/${projectId}`);
  const thread = page.getByTestId("nora-thread");
  const composer = page.getByTestId("nora-composer");
  const draft = page.getByTestId("thread-draft");
  const send = page.getByTestId("thread-send");

  await expect(composer).toBeVisible({ timeout: 30_000 });
  await thread.evaluate((el) => {
    el.scrollTop = el.scrollHeight;
  });
  await expect(composer).toBeVisible();

  const followUp = "ML4C continuity send après scroll.";
  await draft.fill(followUp);
  await send.click();
  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
    timeout: 60_000,
  });
});