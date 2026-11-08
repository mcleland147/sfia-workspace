import { expect, type Page } from "@playwright/test";

/** Open a new preparation from the G4 portfolio CTA (replaces "Ouvrir un sas…"). */
export async function openNewPreparation(page: Page): Promise<string> {
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");
  const preparationId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
  expect(preparationId).toBeTruthy();
  return preparationId!;
}

/** Send a Nora turn on the chat-first sas composer (fixture FAKE lane). */
export async function sendPrepMessage(page: Page, text: string): Promise<void> {
  await page.getByTestId("prep-draft").fill(text);
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
    timeout: 30000,
  });
}

/**
 * Constitute inspectable proposal then create project (explicit D2).
 * Leaves the browser on `/projects/{id}`.
 */
export async function constituteAndCreateProject(
  page: Page,
  opts: { name: string; summary: string },
): Promise<string> {
  await page.getByTestId("prep-constitute").click();
  await page.getByTestId("prep-proposal-name").fill(opts.name);
  await page.getByTestId("prep-proposal-summary").fill(opts.summary);
  await page.getByTestId("prep-proposal-save").click();
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
  await page.getByTestId("prep-create-project").click();
  await page.waitForURL("**/projects/**", { timeout: 20000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  return projectId!;
}

/** Portfolio → prep → Nora seed → create project (common ML1/ML2/ML3 bootstrap). */
export async function bootstrapProjectFromPortfolio(
  page: Page,
  opts: { seed: string; name: string; summary: string },
): Promise<{ preparationId: string; projectId: string }> {
  const preparationId = await openNewPreparation(page);
  await sendPrepMessage(page, opts.seed);
  const projectId = await constituteAndCreateProject(page, {
    name: opts.name,
    summary: opts.summary,
  });
  return { preparationId, projectId };
}
