import { test, expect } from "@playwright/test";
import { bootstrapProjectFromPortfolio } from "./helpers/g4-chat-first";

/**
 * R05 — cognitive UNKNOWN recovery (FAKE/DEV :3101, no OpenAI).
 * Seeds a durable UNKNOWN turn without D7; verifies hydrate + reconcile button paths.
 */
test.describe("Ensemble 05 R05 cognitive UNKNOWN recovery", () => {
  test("hydrate clears durable cognitive UNKNOWN pending; draft preserved", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    const { projectId, preparationId } = await bootstrapProjectFromPortfolio(page, {
      seed: "E05 R05 hydrate",
      name: `E05 R05 H ${Date.now()}`,
      summary: "r05 hydrate",
    });
    expect(preparationId).toBeTruthy();

    const seed = await page.request.post("/api/dev/e2e/s05-fixture", {
      data: { action: "seed_unknown", preparationId },
    });
    expect(seed.ok(), await seed.text()).toBeTruthy();
    const seeded = await seed.json();
    const clientTurnKey = String(seeded.clientTurnKey);

    const lookup = await page.request.get(
      `/api/preparations/${preparationId}/turns/by-key/${encodeURIComponent(clientTurnKey)}`,
    );
    expect(lookup.ok()).toBeTruthy();
    const durable = await lookup.json();
    expect(durable.status).toBe("UNKNOWN");
    expect(durable.pilotageEffect?.attempted ?? false).toBe(false);

    const draftText = `BROUILLON_R05_H_${Date.now()}`;
    await page.addInitScript(
      ({ pid, key, content, draft }) => {
        sessionStorage.setItem(
          `sfia.thread.pending:${pid}`,
          JSON.stringify({
            content,
            clientTurnKey: key,
            clientCommandKey: `conv-auth:${key}`,
            origin: "composer",
            projectId: pid,
          }),
        );
        // Draft key shape matches composer-draft helpers (best-effort; UI also fills after load).
        void draft;
      },
      {
        pid: projectId,
        key: clientTurnKey,
        content: "Acte A E2E S05 — en cours (seed fixture)",
        draft: draftText,
      },
    );

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    await page.getByTestId("thread-draft").fill(draftText);
    await expect(page.getByTestId("thread-pending-banner")).toHaveCount(0, { timeout: 20000 });
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftText);
  });

  test("reconcile button clears pending when hydrate skipped; no provider loop", async ({
    page,
  }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    const { projectId, preparationId } = await bootstrapProjectFromPortfolio(page, {
      seed: "E05 R05 button",
      name: `E05 R05 B ${Date.now()}`,
      summary: "r05 button",
    });
    expect(preparationId).toBeTruthy();

    const seed = await page.request.post("/api/dev/e2e/s05-fixture", {
      data: { action: "seed_unknown", preparationId },
    });
    expect(seed.ok(), await seed.text()).toBeTruthy();
    const seeded = await seed.json();
    const clientTurnKey = String(seeded.clientTurnKey);

    // First by-key during load hydrate → 404 so pending stays; later clicks continue to real API.
    let byKeyHits = 0;
    await page.route(`**/api/preparations/${preparationId}/turns/by-key/**`, async (route) => {
      byKeyHits += 1;
      if (byKeyHits === 1) {
        await route.fulfill({
          status: 404,
          contentType: "application/json",
          body: JSON.stringify({ found: false, status: null, errorCategory: "TURN_NOT_FOUND" }),
        });
        return;
      }
      await route.continue();
    });

    await page.addInitScript(
      ({ pid, key, content }) => {
        sessionStorage.setItem(
          `sfia.thread.pending:${pid}`,
          JSON.stringify({
            content,
            clientTurnKey: key,
            clientCommandKey: `conv-auth:${key}`,
            origin: "composer",
            projectId: pid,
          }),
        );
      },
      {
        pid: projectId,
        key: clientTurnKey,
        content: "Acte A E2E S05 — en cours (seed fixture)",
      },
    );

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const draftText = `BROUILLON_R05_B_${Date.now()}`;
    await page.getByTestId("thread-draft").fill(draftText);
    await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
    await page.getByTestId("thread-reconcile-pending").click();
    await expect(page.getByTestId("thread-pending-banner")).toHaveCount(0, { timeout: 20000 });
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftText);
    await expect(page.getByTestId("thread-nora-status")).toContainText(/non aboutie|UNKNOWN|durable/i, {
      timeout: 15000,
    });

    // Explicit new request still works (fixture — no OpenAI).
    await page.getByTestId("thread-draft").fill(`Suite après reprise ${Date.now()}`);
    await page.getByTestId("thread-send").click();
    await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE|Nora/i, {
      timeout: 45000,
    });
    await expect(page.getByTestId("thread-pending-banner")).toHaveCount(0);
    await page.unrouteAll({ behavior: "ignoreErrors" });
  });
});
