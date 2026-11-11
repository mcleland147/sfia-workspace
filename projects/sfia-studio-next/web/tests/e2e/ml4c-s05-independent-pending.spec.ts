import { test, expect } from "@playwright/test";

/**
 * ML4C S05 — independent cognitive COMPLETE must not clear unresolved métier pending A.
 * Browser FAKE / E2E lane — not Nora LIVE.
 */

async function openProjectFromNewPrep(page: import("@playwright/test").Page): Promise<string> {
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL(/\/preparations\//, { timeout: 30000 });
  await page.getByTestId("prep-draft").fill("Intention E2E S05 pending preserve (fixture FAKE Nora)");
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await page.getByTestId("prep-constitute").click();
  await page.getByTestId("prep-adopt-nora").click();
  await page.getByTestId("prep-proposal-name").fill("ML4C S05 Pending A");
  await page.getByTestId("prep-proposal-save").click();
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 15000 });
  const createBtn = page.getByTestId("prep-create-project");
  await expect(createBtn).toBeEnabled({ timeout: 20000 });
  await createBtn.click();
  await page.waitForURL(/\/projects\//, { timeout: 30000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  if (!projectId) throw new Error("projectId missing");
  return projectId;
}

test("S05: independent COMPLETE leaves pending A identity intact", async ({ page }) => {
  test.setTimeout(120_000);
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  const projectId = await openProjectFromNewPrep(page);

  const pendingA = {
    content: "Publie le document sur la branche feature/s05-a",
    clientTurnKey: "ctk_pending_a_s05",
    clientCommandKey: "conv-auth:ctk_pending_a_s05",
  };
  await page.evaluate(
    ({ projectId: id, pending }) => {
      sessionStorage.setItem(`sfia.thread.pending:${id}`, JSON.stringify(pending));
    },
    { projectId, pending: pendingA },
  );
  await page.reload();
  await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });

  await page.route("**/api/preparations/*/messages", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        status: "COMPLETE",
        noraMode: "deterministic-fixture",
        messages: [
          { id: "m1", role: "user", content: "Quelle est la différence entre blob et commit ?" },
          {
            id: "m2",
            role: "assistant",
            content: "Un blob est un contenu ; un commit pointe une arborescence.",
          },
        ],
        pilotageEffect: { attempted: false, status: null },
        humanDecisionCreated: false,
      }),
    });
  });

  await page.getByLabel("Message à Nora").fill("Quelle est la différence entre blob et commit ?");
  await page.getByTestId("thread-send").click();
  await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE/i, {
    timeout: 20000,
  });
  await expect(page.getByTestId("thread-pending-banner")).toBeVisible();

  const stored = await page.evaluate((id) => {
    const raw = sessionStorage.getItem(`sfia.thread.pending:${id}`);
    return raw ? (JSON.parse(raw) as typeof pendingA) : null;
  }, projectId);
  expect(stored).toEqual(pendingA);

  // Incompatible métier mutation still blocked with same pending key.
  await page.getByLabel("Message à Nora").fill("Crée un projet nommé Concurrent Bypass");
  await page.getByTestId("thread-send").click();
  await expect(page.getByTestId("thread-nora-status")).toContainText(/non résolue|réconcilier/i, {
    timeout: 10000,
  });
  await expect(page.getByTestId("thread-pending-banner")).toBeVisible();
  const still = await page.evaluate((id) => {
    const raw = sessionStorage.getItem(`sfia.thread.pending:${id}`);
    return raw ? (JSON.parse(raw) as typeof pendingA) : null;
  }, projectId);
  expect(still?.clientTurnKey).toBe(pendingA.clientTurnKey);
  expect(still?.clientCommandKey).toBe(pendingA.clientCommandKey);
});
