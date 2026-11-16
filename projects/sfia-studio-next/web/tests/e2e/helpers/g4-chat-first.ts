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

/** Open sas secondary Journal/Documents (not primary chrome). */
export async function openSasSecondaryTool(
  page: Page,
  tool: "Journal" | "Documents",
): Promise<void> {
  const details = page.getByTestId("sas-secondary-tools");
  if (await details.count()) {
    await details.locator("summary").click();
  }
  await page.getByRole("button", { name: tool, exact: true }).click();
}

export async function backToSasConversation(page: Page): Promise<void> {
  const back = page.getByTestId("sas-back-to-conversation");
  if (await back.count()) {
    await back.click();
  } else {
    await page.getByRole("button", { name: "Discussion", exact: true }).click();
  }
}

/**
 * Secondary adjust path then create project (explicit D2).
 * Not the primary sas proof — use createFromLivingProjection for the nominal path.
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

/** Primary path: living projection already has a name — create without adjust. */
export async function createFromLivingProjection(page: Page): Promise<string> {
  await expect(page.getByTestId("prep-create-project")).toBeEnabled({ timeout: 30000 });
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
