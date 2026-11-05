import { test, expect } from "@playwright/test";

/**
 * C3-B: creation correlation key must stay stable across retries of the same intent.
 * BROWSER FAKE — no LIVE Nora required.
 */
test("ML2 C3-B: stable creation key across double-save retry", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
  await page.waitForURL("**/preparations/**");

  await page.getByRole("button", { name: "Document", exact: true }).click();
  await expect(page.getByRole("heading", { name: /Document/ })).toBeVisible();

  const area = page.locator("textarea").first();
  await area.fill("# Intent stable\n\nContenu pour clé corrélée.");

  // Intercept first create: server commits, UI sees network failure (ACK perdu)
  let createCalls = 0;
  const keysSeen: string[] = [];
  await page.route("**/api/preparations/*/documents", async (route) => {
    const req = route.request();
    if (req.method() !== "POST") {
      await route.continue();
      return;
    }
    let body: { correlationKey?: string; documentId?: string } = {};
    try {
      body = req.postDataJSON() as { correlationKey?: string; documentId?: string };
    } catch {
      body = {};
    }
    if (body.correlationKey && !body.documentId) {
      keysSeen.push(body.correlationKey);
      createCalls += 1;
      if (createCalls === 1) {
        const upstream = await route.fetch();
        // Discard successful body — client observes failure
        await route.fulfill({
          status: 502,
          contentType: "application/json",
          body: JSON.stringify({ status: "FAILED", reason: "ACK_LOST_SIM" }),
        });
        void upstream;
        return;
      }
    }
    await route.continue();
  });

  await page.getByTestId("doc-save").click();
  await expect(page.getByTestId("create-intent-key")).toBeVisible({ timeout: 15000 });
  await expect(page.getByTestId("surface-status")).toContainText(/Document FAILED|ACK|clé/i, {
    timeout: 10000,
  });
  const keyAfterFail = await page.getByTestId("create-intent-key").innerText();
  expect(keyAfterFail).toMatch(/create-doc-/);

  // Retry without starting a new intention — same key, idempotent AVAILABLE
  await page.getByTestId("doc-save").click();
  await expect(page.getByTestId("surface-status")).toContainText(/Document AVAILABLE/i, {
    timeout: 20000,
  });

  expect(keysSeen.length).toBeGreaterThanOrEqual(2);
  expect(keysSeen[0]).toBe(keysSeen[1]);
  await expect(page.getByTestId("create-intent-key")).toHaveCount(0);
});
