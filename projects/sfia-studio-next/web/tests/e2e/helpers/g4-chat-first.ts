import { expect, type Page } from "@playwright/test";

/** Same-pilot project names must be unique (Morris A12) — never reuse fixed labels across runs/tests. */
export function uniqueProjectName(base: string): string {
  return `${base} ${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

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
  const draft = page.getByTestId("prep-draft");
  const send = page.getByTestId("prep-send");
  // Idle composer: empty draft → send disabled. Wait before filling the next turn.
  await expect(draft).toHaveValue("", { timeout: 60000 });
  await draft.fill(text);
  await expect(send).toBeEnabled({ timeout: 10000 });
  await send.click();
  // User turn must appear; do not treat a stale fixture badge as completion.
  await expect(page.getByText(text.slice(0, Math.min(48, text.length)), { exact: false }).first()).toBeVisible({
    timeout: 30000,
  });
  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  // Turn finished: draft cleared and busy released.
  await expect(draft).toHaveValue("", { timeout: 60000 });
  await expect(send).toBeDisabled({ timeout: 10000 });
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
 * Technical compatibility: set inspected name via PATCH API.
 * Product UI no longer exposes « Ajuster l'aperçu » — do not use this as the nominal Sas proof.
 */
export async function seedInspectedNameViaApi(
  page: Page,
  opts: { name: string; summary: string },
): Promise<void> {
  const preparationId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
  expect(preparationId).toBeTruthy();
  const getRes = await page.request.get(`/api/preparations/${preparationId}`);
  expect(getRes.ok()).toBeTruthy();
  const prep = (await getRes.json()) as {
    creationRevision?: number;
    preparation?: { creationRevision?: number };
  };
  const rev = prep.creationRevision ?? prep.preparation?.creationRevision;
  expect(typeof rev).toBe("number");
  const patchRes = await page.request.patch(`/api/preparations/${preparationId}`, {
    data: {
      previewName: opts.name,
      previewSummary: opts.summary,
      expectedCreationRevision: rev,
    },
  });
  expect(patchRes.ok()).toBeTruthy();
  await page.reload();
  await expect(page.getByTestId("prep-create-project")).toBeEnabled({ timeout: 30000 });
  await expect(page.getByTestId("prep-constitute")).toHaveCount(0);
}

/**
 * Technical bootstrap: API seed then explicit D2 create CTA.
 */
export async function constituteAndCreateProject(
  page: Page,
  opts: { name: string; summary: string; alreadyUnique?: boolean },
): Promise<string> {
  const name = opts.alreadyUnique ? opts.name : uniqueProjectName(opts.name);
  await seedInspectedNameViaApi(page, { name, summary: opts.summary });
  await page.getByTestId("prep-create-project").click();
  // E07 SAS06: progress popup gates navigation until "Accéder au projet".
  const nameConflict = page
    .getByText(/Ce nom est déjà utilisé/i)
    .waitFor({ state: "visible", timeout: 20000 })
    .then(() => {
      throw new Error(`create blocked: project name already used for this pilot (${name})`);
    });
  const enterViaPopup = (async () => {
    await expect(page.getByTestId("sas-create-progress-popup")).toBeVisible({
      timeout: 20000,
    });
    const dismiss = page.getByTestId("sas-create-progress-dismiss");
    await dismiss.scrollIntoViewIfNeeded();
    await dismiss.click();
    await page.waitForURL("**/projects/**", { timeout: 20000 });
  })();
  await Promise.race([enterViaPopup, nameConflict]);
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  return projectId!;
}

/** Primary path: living projection already has a name — create without adjust. */
export async function createFromLivingProjection(page: Page): Promise<string> {
  const { clickCreateProjectAndEnter } = await import("./create-project-from-prep");
  return clickCreateProjectAndEnter(page, {
    createTimeoutMs: 30_000,
    navTimeoutMs: 20_000,
  });
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
