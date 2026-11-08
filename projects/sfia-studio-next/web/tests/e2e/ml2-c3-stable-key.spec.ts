import { test, expect } from "@playwright/test";
import { openNewPreparation } from "./helpers/g4-chat-first";

/**
 * C3-B: creation correlation key must stay stable across retries of the same intent.
 * BROWSER FAKE — no LIVE Nora required.
 *
 * Lost-ACK contract:
 * - first POST may commit server-side while the client observes failure;
 * - create intent + correlation key remain until AVAILABLE is confirmed;
 * - retry reuses the same create key (no divert to revise / no duplicate doc).
 */
test("ML2 C3-B: stable creation key across double-save retry", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  const preparationId = await openNewPreparation(page);

  await page.getByRole("button", { name: "Documents", exact: true }).click();
  await page.getByTestId("doc-start-create").click();
  await expect(page.getByTestId("document-revise-draft")).toBeVisible();

  await page.getByTestId("document-revise-draft").fill("# Intent stable\n\nContenu pour clé corrélée.");

  // Intercept first create: server commits, UI sees network failure (ACK perdu)
  let createCalls = 0;
  let reviseCalls = 0;
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
    if (body.correlationKey && body.documentId) {
      reviseCalls += 1;
      await route.continue();
      return;
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
  // Capture key as soon as the intent is minted — before any incidental reload.
  await expect(page.getByTestId("create-intent-key")).toBeVisible({ timeout: 15000 });
  const keyWhilePending = (await page.getByTestId("create-intent-key").innerText()).trim();
  expect(keyWhilePending).toMatch(/create-doc-/);

  await expect(page.getByTestId("surface-status")).toContainText(/Document FAILED|ACK|clé/i, {
    timeout: 15000,
  });
  // Intent must survive the lost ACK (no silent adopt-of-docId that hides the key).
  await expect(page.getByTestId("create-intent-key")).toBeVisible({ timeout: 5000 });
  const keyAfterFail = (await page.getByTestId("create-intent-key").innerText()).trim();
  expect(keyAfterFail).toBe(keyWhilePending);

  // Retry without starting a new intention — same key, idempotent AVAILABLE
  await page.getByTestId("doc-save").click();
  await expect(page.getByTestId("surface-status")).toContainText(/Document AVAILABLE/i, {
    timeout: 20000,
  });

  expect(createCalls).toBeGreaterThanOrEqual(2);
  expect(keysSeen.length).toBeGreaterThanOrEqual(2);
  expect(keysSeen[0]).toBe(keysSeen[1]);
  expect(keysSeen[0]).toBe(keyWhilePending.match(/create-doc-[0-9a-f-]+/i)?.[0] ?? keysSeen[0]);
  // Must not have diverted into revise-via-save (that would mint a new revsave key / rev 2).
  expect(reviseCalls).toBe(0);
  await expect(page.getByTestId("create-intent-key")).toHaveCount(0);

  // DB truth: exactly one document, creation replay stays at revision 1.
  const api = await page.request.get(`/api/preparations/${preparationId}`);
  expect(api.ok()).toBeTruthy();
  const body = await api.json();
  const docs = body.documents ?? [];
  expect(docs).toHaveLength(1);
  expect(docs[0]?.latestRevision?.revisionNumber).toBe(1);
});
