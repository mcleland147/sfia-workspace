import { test, expect } from "@playwright/test";

/**
 * Atlas D2→D4 single-intent — BROWSER on isolated E2E lane (:3101 / sfia_next_e2e).
 * Nora fixture FAKE — not LIVE.
 */
test("Atlas: one intent → Créer le projet → project without second chat send", async ({
  page,
}) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");

  await page
    .getByTestId("prep-draft")
    .fill(
      "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage qui expose l'objectif, le périmètre et les premières étapes.",
    );
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await expect(page.getByText("AWAITING_PILOT_ACT", { exact: false })).toBeVisible();

  // Preview may already be filled by Nora updatePreview("Atlas").
  // Only constitute if create is not yet available.
  const createBtn = page.getByTestId("prep-create-project");
  if (!(await createBtn.isEnabled().catch(() => false))) {
    const constitute = page.getByTestId("prep-constitute");
    if (await constitute.isVisible().catch(() => false)) {
      await constitute.click({ force: true });
    }
    const adopt = page.getByTestId("prep-adopt-nora");
    if (await adopt.isVisible().catch(() => false)) {
      await adopt.click({ force: true });
    }
    const nameField = page.getByTestId("prep-proposal-name");
    if (await nameField.isVisible().catch(() => false)) {
      await nameField.fill("Atlas");
      await page.getByTestId("prep-proposal-save").click();
    }
  }

  await expect(createBtn).toBeEnabled({ timeout: 20000 });

  const createRespPromise = page.waitForResponse(
    (r) => r.url().includes("/create-project") && r.request().method() === "POST",
  );
  await createBtn.click();
  const createResp = await createRespPromise;
  expect(createResp.ok()).toBeTruthy();
  const body = await createResp.json();
  expect(body.projectId).toBeTruthy();
  expect(body.missionBindingError).toBeFalsy();
  // Server continuation of same intention (no second chat POST).
  expect(body.missionContinue?.continued === true || body.missionContinue?.documentSave).toBeTruthy();

  await page.waitForURL("**/projects/**", { timeout: 30000 });
  await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 15000 });
});
