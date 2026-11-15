import { test, expect } from "@playwright/test";

/**
 * ML4C S02 — D2_ACK_OBS (versioned).
 * Simulates lost ACK after create-project commit: UI must reconcile with the same
 * idempotency key and open the real project — without a second create POST by default.
 * Nora FAKE / E2E lane only — not LIVE.
 */

async function openNewPreparation(page: import("@playwright/test").Page): Promise<string> {
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL(/\/preparations\//, { timeout: 30000 });
  const id = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
  if (!id) throw new Error("preparationId missing");
  return id;
}

test("S02 D2_ACK_OBS: lost ACK after commit → reconcile → real project, one create POST", async ({
  page,
}) => {
  test.setTimeout(120_000);
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  const preparationId = await openNewPreparation(page);

  // Mirror G4: Nora turn unlocks constitute (FAKE fixture).
  await page.getByTestId("prep-draft").fill("Intention E2E D2 ACK loss (fixture FAKE Nora)");
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
    timeout: 30000,
  });

  await page.getByTestId("prep-constitute").click();
  await page.getByTestId("prep-adopt-nora").click();
  await page.getByTestId("prep-proposal-name").fill("ML4C D2 AckLost");
  await page.getByTestId("prep-proposal-save").click();
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 15000 });
  const createBtn = page.getByTestId("prep-create-project");
  await expect(createBtn).toBeEnabled({ timeout: 20000 });

  let createPosts = 0;
  const keys: string[] = [];
  await page.route("**/api/preparations/*/create-project", async (route) => {
    const req = route.request();
    if (req.method() !== "POST") {
      await route.continue();
      return;
    }
    createPosts += 1;
    try {
      const body = req.postDataJSON() as { idempotencyKey?: string };
      if (body.idempotencyKey) keys.push(body.idempotencyKey);
    } catch {
      /* ignore */
    }
    if (createPosts === 1) {
      // page.request bypasses this page.route so the server commits.
      const upstream = await page.request.fetch(req);
      expect(upstream.ok()).toBeTruthy();
      await route.fulfill({
        status: 502,
        contentType: "application/json",
        body: JSON.stringify({
          status: "FAILED",
          reason: "ACK_LOST_SIM_D2",
          errorCategory: "ACK_LOST_SIM",
        }),
      });
      return;
    }
    await route.continue();
  });

  await createBtn.click();
  await expect(page).toHaveURL(/\/projects\//, { timeout: 30000 });
  expect(createPosts).toBe(1);
  expect(keys[0]).toBe(`create-${preparationId}`);

  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();

  const recon = await page.request.get(
    `/api/preparations/${preparationId}/reconcile?idempotencyKey=${encodeURIComponent(keys[0]!)}`,
  );
  const reconJson = (await recon.json()) as { status?: string; projectId?: string };
  expect(reconJson.status).toBe("ALREADY_CREATED");
  expect(reconJson.projectId).toBe(projectId);
});
