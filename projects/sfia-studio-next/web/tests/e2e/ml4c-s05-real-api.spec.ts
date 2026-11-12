import { test, expect } from "@playwright/test";

/**
 * ML4C S05 — DETERMINISTIC END-TO-END ON DEV BOUNDARY.
 * Browser → real Studio HTTP messages API → server S05 gate → PG.
 * Nora fixture ONLY at provider boundary (STUDIO_E2E / FORCE_NORA_FIXTURE).
 * NO route.fulfill on the conversation endpoint under test.
 *
 * Does NOT prove: NORA LIVE SEMANTIC BEHAVIOR / READY FOR REAL.
 */

async function openProjectCapturingPrep(
  page: import("@playwright/test").Page,
): Promise<{ projectId: string; preparationId: string }> {
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL(/\/preparations\//, { timeout: 30000 });
  const preparationId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
  if (!preparationId) throw new Error("preparationId missing");

  await page.getByTestId("prep-draft").fill("Intention E2E S05 real API (fixture Nora provider)");
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await page.getByTestId("prep-constitute").click();
  await page.getByTestId("prep-adopt-nora").click();
  await page.getByTestId("prep-proposal-name").fill("ML4C S05 Real API");
  await page.getByTestId("prep-proposal-save").click();
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 15000 });
  const createBtn = page.getByTestId("prep-create-project");
  await expect(createBtn).toBeEnabled({ timeout: 20000 });
  await createBtn.click();
  await page.waitForURL(/\/projects\//, { timeout: 30000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  if (!projectId) throw new Error("projectId missing");
  return { projectId, preparationId };
}

async function seedUnknownA(
  page: import("@playwright/test").Page,
  preparationId: string,
): Promise<{ clientTurnKey: string; commandId: string }> {
  const res = await page.request.post("/api/dev/e2e/s05-fixture", {
    data: { action: "seed_unknown", preparationId },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  const body = await res.json();
  expect(body.status).toBe("UNKNOWN");
  expect(body.clientTurnKey).toBeTruthy();
  return { clientTurnKey: body.clientTurnKey, commandId: body.commandId };
}

async function oracle(page: import("@playwright/test").Page, preparationId: string) {
  const res = await page.request.post("/api/dev/e2e/s05-fixture", {
    data: { action: "oracle", preparationId },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  return res.json() as Promise<{
    creationRevision: number | null;
    businessCommandCount: number;
    documentCount: number;
    humanDecisionCount?: number;
    unknownTurns: string[];
    turns: Array<{ id: string; status: string; clientTurnKey: string }>;
    awaitingMissions?: Array<{ clientIntentKey: string; status: string }>;
    missions?: Array<{ clientIntentKey: string; status: string }>;
  }>;
}

async function seedAwaitingMission(
  page: import("@playwright/test").Page,
  preparationId: string,
): Promise<{ clientIntentKey: string; commandId: string }> {
  const res = await page.request.post("/api/dev/e2e/s05-fixture", {
    data: { action: "seed_awaiting_mission", preparationId },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  const body = await res.json();
  expect(body.missionStatus).toBe("AWAITING_PILOT_ACT");
  expect(body.turnStatus).toBe("COMPLETE");
  expect(body.unknownSiblingCount).toBe(0);
  expect(body.clientIntentKey).toBeTruthy();
  return { clientIntentKey: body.clientIntentKey, commandId: body.commandId };
}

test.describe("S05 real API (no route.fulfill)", () => {
  test("S05-REAL-01/02/03/04/06/08/09: UNKNOWN A + real messages API", async ({ page }) => {
    test.setTimeout(180_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId, projectId } = await openProjectCapturingPrep(page);

    const beforeSeed = await oracle(page, preparationId);
    const seeded = await seedUnknownA(page, preparationId);
    const afterSeed = await oracle(page, preparationId);
    expect(afterSeed.unknownTurns).toContain(seeded.clientTurnKey);
    const revBefore = afterSeed.creationRevision;
    const cmdsBefore = afterSeed.businessCommandCount;
    const docsBefore = afterSeed.documentCount;

    // S05-REAL-01 — independent question via REAL messages API
    const respQPromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${preparationId}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByLabel("Message à Nora").fill("Quelle est la différence entre blob et commit ?");
    await page.getByTestId("thread-send").click();
    const respQ = await respQPromise;
    expect(respQ.ok()).toBeTruthy();
    const bodyQ = await respQ.json();
    expect(bodyQ.status).toBe("COMPLETE");
    expect(bodyQ.nextTurnKind).toBe("DIALOGUE_INDEPENDANT");
    expect(bodyQ.pendingEffectBlocked).not.toBe(true);
    expect(bodyQ.noraMode).toMatch(/fixture|deterministic/i);

    const afterQ = await oracle(page, preparationId);
    expect(afterQ.unknownTurns).toContain(seeded.clientTurnKey);
    expect(afterQ.creationRevision).toBe(revBefore);
    expect(afterQ.businessCommandCount).toBe(cmdsBefore);

    // S05-REAL-02 — OPEN_CYCLE blocked (no business command applied for B)
    const respCyclePromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${preparationId}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByLabel("Message à Nora").fill("Ouvre le cycle cadrage.");
    await page.getByTestId("thread-send").click();
    const respCycle = await respCyclePromise;
    expect(respCycle.ok()).toBeTruthy();
    const bodyCycle = await respCycle.json();
    expect(bodyCycle.pendingEffectBlocked).toBe(true);
    expect(bodyCycle.pilotageEffect?.attempted).not.toBe(true);

    const afterCycle = await oracle(page, preparationId);
    expect(afterCycle.businessCommandCount).toBe(cmdsBefore);
    expect(afterCycle.unknownTurns).toContain(seeded.clientTurnKey);

    // S05-REAL-03 — create project wording must not bump creationRevision
    const respCreatePromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${preparationId}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByLabel("Message à Nora").fill("Je veux créer un projet.");
    await page.getByTestId("thread-send").click();
    const respCreate = await respCreatePromise;
    expect(respCreate.ok()).toBeTruthy();
    const bodyCreate = await respCreate.json();
    expect(bodyCreate.pendingEffectBlocked).toBe(true);
    const afterCreate = await oracle(page, preparationId);
    expect(afterCreate.creationRevision).toBe(revBefore);

    // S05-REAL-04 — document CREATE (fixture exact phrase) blocked by S05
    const respDocPromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${preparationId}/messages`) &&
        r.request().method() === "POST",
    );
    await page
      .getByLabel("Message à Nora")
      .fill("Rédige un document de synthèse sur les options A et B");
    await page.getByTestId("thread-send").click();
    const respDoc = await respDocPromise;
    expect(respDoc.ok()).toBeTruthy();
    const bodyDoc = await respDoc.json();
    expect(bodyDoc.nextTurnKind).toBe("INTENTION_EFFET");
    expect(bodyDoc.pendingEffectBlocked).toBe(true);
    expect(
      bodyDoc.documentSave == null ||
        bodyDoc.documentSave.status === "NOT_EXECUTED" ||
        bodyDoc.documentSave.status === "SKIPPED",
    ).toBe(true);
    const afterDoc = await oracle(page, preparationId);
    expect(afterDoc.documentCount).toBe(docsBefore);

    // S05-REAL-06 — clear client pending hint; server protection unchanged
    await page.evaluate((id) => {
      sessionStorage.removeItem(`sfia.thread.pending:${id}`);
    }, projectId);
    const respHintPromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${preparationId}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByLabel("Message à Nora").fill("Ouvre le cycle cadrage.");
    await page.getByTestId("thread-send").click();
    const respHint = await respHintPromise;
    const bodyHint = await respHint.json();
    expect(bodyHint.nextTurnKind).toBe("INTENTION_EFFET");
    expect(bodyHint.pendingEffectBlocked).toBe(true);
    expect(bodyHint.pilotageEffect?.attempted).not.toBe(true);

    // S05-REAL-08 — refresh: A still recoverable via oracle
    await page.reload();
    const afterReload = await oracle(page, preparationId);
    expect(afterReload.unknownTurns).toContain(seeded.clientTurnKey);
    expect(afterReload.turns.some((t) => t.id === seeded.commandId && t.status === "UNKNOWN")).toBe(
      true,
    );

    // S05-REAL-09 — independent COMPLETE does not close A
    expect(afterReload.unknownTurns).toContain(seeded.clientTurnKey);
    expect(beforeSeed.unknownTurns).not.toContain(seeded.clientTurnKey);
  });

  test("S05-REAL-07: lying pending key does not bypass server", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId, projectId } = await openProjectCapturingPrep(page);
    await seedUnknownA(page, preparationId);
    const before = await oracle(page, preparationId);

    await page.evaluate(
      ({ projectId: id }) => {
        sessionStorage.setItem(
          `sfia.thread.pending:${id}`,
          JSON.stringify({
            content: "fake",
            clientTurnKey: "ctk_lying_pending",
            clientCommandKey: "conv-auth:ctk_lying_pending",
          }),
        );
      },
      { projectId },
    );
    await page.reload();

    const respPromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${preparationId}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByLabel("Message à Nora").fill("Ouvre le cycle cadrage.");
    await page.getByTestId("thread-send").click();
    const resp = await respPromise;
    const body = await resp.json();
    expect(body.pendingEffectBlocked).toBe(true);
    const after = await oracle(page, preparationId);
    expect(after.businessCommandCount).toBe(before.businessCommandCount);
  });

  test("S05-REAL-05 / S05-M01: AWAITING_PILOT_ACT blocks effect B (no UNKNOWN)", async ({
    page,
  }) => {
    test.setTimeout(180_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId, projectId } = await openProjectCapturingPrep(page);

    const before = await oracle(page, preparationId);
    expect(before.unknownTurns.length).toBe(0);
    const seeded = await seedAwaitingMission(page, preparationId);
    const afterSeed = await oracle(page, preparationId);
    expect(afterSeed.unknownTurns.length).toBe(0);
    expect(afterSeed.awaitingMissions?.some((m) => m.clientIntentKey === seeded.clientIntentKey)).toBe(
      true,
    );
    const cmdsBefore = afterSeed.businessCommandCount;
    const docsBefore = afterSeed.documentCount;
    const hdBefore = afterSeed.humanDecisionCount ?? 0;
    const revBefore = afterSeed.creationRevision;

    const respPromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${preparationId}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByLabel("Message à Nora").fill("Ouvre le cycle cadrage.");
    await page.getByTestId("thread-send").click();
    const resp = await respPromise;
    expect(resp.ok()).toBeTruthy();
    const body = await resp.json();
    expect(body.nextTurnKind).toBe("INTENTION_EFFET");
    expect(body.pendingEffectBlocked).toBe(true);
    expect(String(body.pendingBlockReason ?? "")).toMatch(/S05_MISSION_BLOCKS_EFFECT/i);
    expect(body.pilotageEffect?.attempted).not.toBe(true);
    expect(body.humanDecisionCreated).not.toBe(true);

    const after = await oracle(page, preparationId);
    expect(after.unknownTurns.length).toBe(0);
    expect(after.businessCommandCount).toBe(cmdsBefore);
    expect(after.documentCount).toBe(docsBefore);
    expect(after.humanDecisionCount ?? 0).toBe(hdBefore);
    expect(after.creationRevision).toBe(revBefore);
    expect(after.awaitingMissions?.some((m) => m.clientIntentKey === seeded.clientIntentKey)).toBe(
      true,
    );

    // S05-M05 — clear/falsify client hint; server still blocks via mission.
    await page.evaluate((id) => {
      sessionStorage.removeItem(`sfia.thread.pending:${id}`);
    }, projectId);
    const resp2Promise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${preparationId}/messages`) &&
        r.request().method() === "POST",
    );
    await page
      .getByLabel("Message à Nora")
      .fill("Rédige un document de synthèse sur les options A et B");
    await page.getByTestId("thread-send").click();
    const body2 = await (await resp2Promise).json();
    expect(body2.pendingEffectBlocked).toBe(true);
    expect(body2.documentSave == null || body2.documentSave.status === "NOT_EXECUTED").toBe(true);
    const after2 = await oracle(page, preparationId);
    expect(after2.documentCount).toBe(docsBefore);
    expect(after2.awaitingMissions?.some((m) => m.clientIntentKey === seeded.clientIntentKey)).toBe(
      true,
    );
  });

  test("S05-M02: AWAITING mission + independent question leaves A intact", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId } = await openProjectCapturingPrep(page);
    const seeded = await seedAwaitingMission(page, preparationId);

    const respPromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${preparationId}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByLabel("Message à Nora").fill("Quelle est la différence entre blob et commit ?");
    await page.getByTestId("thread-send").click();
    const body = await (await respPromise).json();
    expect(body.status).toBe("COMPLETE");
    expect(body.nextTurnKind).toBe("DIALOGUE_INDEPENDANT");
    expect(body.pendingEffectBlocked).not.toBe(true);
    const after = await oracle(page, preparationId);
    expect(after.awaitingMissions?.some((m) => m.clientIntentKey === seeded.clientIntentKey)).toBe(
      true,
    );
  });

  test("FIX-05/07: fixture requires session; invalid action controlled", async ({ page, browser }) => {
    test.setTimeout(90_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId } = await openProjectCapturingPrep(page);

    const badAction = await page.request.post("/api/dev/e2e/s05-fixture", {
      data: { action: "drop_all", preparationId },
    });
    expect(badAction.status()).toBe(400);

    const anon = await browser.newContext();
    const anonPage = await anon.newPage();
    const unauth = await anonPage.request.post("http://127.0.0.1:3101/api/dev/e2e/s05-fixture", {
      data: { action: "oracle", preparationId },
    });
    expect([401, 403]).toContain(unauth.status());
    await anon.close();
  });

  test("FIX-06: Pilot B cannot oracle/seed Pilot A preparation", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId } = await openProjectCapturingPrep(page);

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote B (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const cross = await page.request.post("/api/dev/e2e/s05-fixture", {
      data: { action: "oracle", preparationId },
    });
    expect([403, 404]).toContain(cross.status());
    const seedCross = await page.request.post("/api/dev/e2e/s05-fixture", {
      data: { action: "seed_awaiting_mission", preparationId },
    });
    expect([403, 404]).toContain(seedCross.status());
  });

  test("S05-REAL-10: concurrent protected posts — no doubled métier effect", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId } = await openProjectCapturingPrep(page);
    await seedUnknownA(page, preparationId);
    const before = await oracle(page, preparationId);

    const [r1, r2] = await Promise.all([
      page.request.post(`/api/preparations/${preparationId}/messages`, {
        data: {
          content: "Ouvre le cycle cadrage.",
          clientTurnKey: `s05-conc-a-${Date.now()}`,
        },
      }),
      page.request.post(`/api/preparations/${preparationId}/messages`, {
        data: {
          content: "Ouvre le cycle cadrage.",
          clientTurnKey: `s05-conc-b-${Date.now()}`,
        },
      }),
    ]);
    // Concurrent turns: one may win COMPLETE with pendingEffectBlocked; the other
    // may get 409 TURN_IN_PROGRESS. Neither may apply a métier mutation.
    const statuses = [r1.status(), r2.status()];
    expect(statuses.some((s) => s === 200 || s === 409)).toBe(true);
    for (const r of [r1, r2]) {
      if (!r.ok()) continue;
      const body = await r.json();
      expect(body.pilotageEffect?.attempted).not.toBe(true);
      expect(body.pendingEffectBlocked === true || body.status === "COMPLETE").toBe(true);
    }
    const after = await oracle(page, preparationId);
    expect(after.businessCommandCount).toBe(before.businessCommandCount);
    expect(after.creationRevision).toBe(before.creationRevision);
  });
});
