import { test, expect } from "@playwright/test";
import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";

/**
 * ML4C S05 — DETERMINISTIC END-TO-END ON DEV BOUNDARY.
 * Browser → real Studio HTTP messages API → server S05 gate → PG.
 * Nora fixture ONLY at provider boundary (STUDIO_E2E / FORCE_NORA_FIXTURE).
 * NO route.fulfill on the conversation endpoint under test.
 *
 * Distinguishes:
 * - SAFE UNKNOWN (seed_unknown): QUALIFIED / d3.converse EXPLORE → PROVEN_NO_EFFECT
 * - RISK UNKNOWN (seed_unknown_effect_risk): QUALIFIED REQUEST_EFFECT D5 → UNKNOWN_EFFECT_RISK
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
  await seedInspectedNameViaApi(page, { name: "ML4C S05 Real API", summary: "S05 real api" });
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

async function seedUnknownEffectRisk(
  page: import("@playwright/test").Page,
  preparationId: string,
): Promise<{ clientTurnKey: string; commandId: string; s05RiskClass: string }> {
  const res = await page.request.post("/api/dev/e2e/s05-fixture", {
    data: { action: "seed_unknown_effect_risk", preparationId },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  const body = await res.json();
  expect(body.status).toBe("UNKNOWN");
  expect(body.s05RiskClass).toBe("UNKNOWN_EFFECT_RISK");
  expect(body.capabilityId).toBe("d5.pilotage_command");
  expect(body.mode).toBe("REQUEST_EFFECT");
  expect(body.clientTurnKey).toBeTruthy();
  return {
    clientTurnKey: body.clientTurnKey,
    commandId: body.commandId,
    s05RiskClass: body.s05RiskClass,
  };
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

async function postThreadMessage(
  page: import("@playwright/test").Page,
  preparationId: string,
  content: string,
) {
  const respPromise = page.waitForResponse(
    (r) =>
      r.url().includes(`/api/preparations/${preparationId}/messages`) &&
      r.request().method() === "POST",
  );
  await page.getByLabel("Message à Nora").fill(content);
  await page.getByTestId("thread-send").click();
  const resp = await respPromise;
  expect(resp.ok()).toBeTruthy();
  return resp.json();
}

test.describe("S05 real API (no route.fulfill)", () => {
  test("S05-SAFE-01/08/09: UNKNOWN EXPLORE A allows independent progress", async ({ page }) => {
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

    // Independent question — S05 must not block dialogue.
    const bodyQ = await postThreadMessage(
      page,
      preparationId,
      "Quelle est la différence entre blob et commit ?",
    );
    expect(bodyQ.status).toBe("COMPLETE");
    expect(bodyQ.nextTurnKind).toBe("DIALOGUE_INDEPENDANT");
    expect(bodyQ.pendingEffectBlocked).not.toBe(true);
    expect(bodyQ.noraMode).toMatch(/fixture|deterministic/i);

    const afterQ = await oracle(page, preparationId);
    expect(afterQ.unknownTurns).toContain(seeded.clientTurnKey);
    expect(afterQ.creationRevision).toBe(revBefore);

    // Independent effect intention — S05 must NOT block on PROVEN_NO_EFFECT sibling A.
    // Owner retains final authority (may refuse or apply); that is not an S05 failure.
    const bodyCycle = await postThreadMessage(page, preparationId, "Ouvre le cycle cadrage.");
    expect(bodyCycle.pendingEffectBlocked).not.toBe(true);
    expect(String(bodyCycle.pendingBlockReason ?? "")).not.toMatch(
      new RegExp(`S05_PENDING_BLOCKS.*:${seeded.clientTurnKey}`),
    );

    const afterCycle = await oracle(page, preparationId);
    expect(afterCycle.unknownTurns).toContain(seeded.clientTurnKey);

    // Clear client pending hint — server authority unchanged (still no S05 block from A).
    await page.evaluate((id) => {
      sessionStorage.removeItem(`sfia.thread.pending:${id}`);
    }, projectId);
    const bodyHint = await postThreadMessage(
      page,
      preparationId,
      "Je veux créer un projet.",
    );
    expect(bodyHint.pendingEffectBlocked).not.toBe(true);
    expect(String(bodyHint.pendingBlockReason ?? "")).not.toMatch(
      new RegExp(`S05_PENDING_BLOCKS.*:${seeded.clientTurnKey}`),
    );

    // Refresh: A still recoverable via oracle
    await page.reload();
    const afterReload = await oracle(page, preparationId);
    expect(afterReload.unknownTurns).toContain(seeded.clientTurnKey);
    expect(afterReload.turns.some((t) => t.id === seeded.commandId && t.status === "UNKNOWN")).toBe(
      true,
    );
    expect(beforeSeed.unknownTurns).not.toContain(seeded.clientTurnKey);
  });

  test("S05-RISK-01/02/03/04/06: UNKNOWN REQUEST_EFFECT A blocks concurrent effects", async ({
    page,
  }) => {
    test.setTimeout(180_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId, projectId } = await openProjectCapturingPrep(page);

    const seeded = await seedUnknownEffectRisk(page, preparationId);
    const afterSeed = await oracle(page, preparationId);
    expect(afterSeed.unknownTurns).toContain(seeded.clientTurnKey);
    const revBefore = afterSeed.creationRevision;
    const cmdsBefore = afterSeed.businessCommandCount;
    const docsBefore = afterSeed.documentCount;

    // Independent question still allowed.
    const bodyQ = await postThreadMessage(
      page,
      preparationId,
      "Quelle est la différence entre blob et commit ?",
    );
    expect(bodyQ.status).toBe("COMPLETE");
    expect(bodyQ.nextTurnKind).toBe("DIALOGUE_INDEPENDANT");
    expect(bodyQ.pendingEffectBlocked).not.toBe(true);
    const afterQ = await oracle(page, preparationId);
    expect(afterQ.unknownTurns).toContain(seeded.clientTurnKey);
    expect(afterQ.businessCommandCount).toBe(cmdsBefore);

    // OPEN_CYCLE blocked by UNKNOWN_EFFECT_RISK sibling.
    const bodyCycle = await postThreadMessage(page, preparationId, "Ouvre le cycle cadrage.");
    expect(bodyCycle.pendingEffectBlocked).toBe(true);
    expect(String(bodyCycle.pendingBlockReason ?? "")).toMatch(/S05_PENDING_BLOCKS/i);
    expect(bodyCycle.pilotageEffect?.attempted).not.toBe(true);
    const afterCycle = await oracle(page, preparationId);
    expect(afterCycle.businessCommandCount).toBe(cmdsBefore);
    expect(afterCycle.unknownTurns).toContain(seeded.clientTurnKey);

    // Create-project wording must not bump creationRevision.
    const bodyCreate = await postThreadMessage(page, preparationId, "Je veux créer un projet.");
    expect(bodyCreate.pendingEffectBlocked).toBe(true);
    const afterCreate = await oracle(page, preparationId);
    expect(afterCreate.creationRevision).toBe(revBefore);

    // Document CREATE (fixture exact phrase) blocked by S05.
    const bodyDoc = await postThreadMessage(
      page,
      preparationId,
      "Rédige un document de synthèse sur les options A et B",
    );
    expect(bodyDoc.nextTurnKind).toBe("INTENTION_EFFET");
    expect(bodyDoc.pendingEffectBlocked).toBe(true);
    expect(
      bodyDoc.documentSave == null ||
        bodyDoc.documentSave.status === "NOT_EXECUTED" ||
        bodyDoc.documentSave.status === "SKIPPED",
    ).toBe(true);
    const afterDoc = await oracle(page, preparationId);
    expect(afterDoc.documentCount).toBe(docsBefore);

    // Clear client pending hint; server protection unchanged.
    await page.evaluate((id) => {
      sessionStorage.removeItem(`sfia.thread.pending:${id}`);
    }, projectId);
    const bodyHint = await postThreadMessage(page, preparationId, "Ouvre le cycle cadrage.");
    expect(bodyHint.nextTurnKind).toBe("INTENTION_EFFET");
    expect(bodyHint.pendingEffectBlocked).toBe(true);
    expect(bodyHint.pilotageEffect?.attempted).not.toBe(true);
    expect(afterDoc.unknownTurns).toContain(seeded.clientTurnKey);
  });

  test("S05-RISK-07: lying pending key does not bypass server", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId, projectId } = await openProjectCapturingPrep(page);
    await seedUnknownEffectRisk(page, preparationId);
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

    const body = await postThreadMessage(page, preparationId, "Ouvre le cycle cadrage.");
    expect(body.pendingEffectBlocked).toBe(true);
    expect(String(body.pendingBlockReason ?? "")).toMatch(/S05_PENDING_BLOCKS/i);
    expect(body.pilotageEffect?.attempted).not.toBe(true);
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

    const body = await postThreadMessage(page, preparationId, "Ouvre le cycle cadrage.");
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
    const body2 = await postThreadMessage(
      page,
      preparationId,
      "Rédige un document de synthèse sur les options A et B",
    );
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

    const body = await postThreadMessage(
      page,
      preparationId,
      "Quelle est la différence entre blob et commit ?",
    );
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
    const unauthRisk = await anonPage.request.post("http://127.0.0.1:3101/api/dev/e2e/s05-fixture", {
      data: { action: "seed_unknown_effect_risk", preparationId },
    });
    expect([401, 403]).toContain(unauthRisk.status());
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
    const seedRiskCross = await page.request.post("/api/dev/e2e/s05-fixture", {
      data: { action: "seed_unknown_effect_risk", preparationId },
    });
    expect([403, 404]).toContain(seedRiskCross.status());
  });

  test("S05-RISK-10: concurrent protected posts — no doubled métier effect", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { preparationId } = await openProjectCapturingPrep(page);
    await seedUnknownEffectRisk(page, preparationId);
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
      if (body.pendingEffectBlocked === true) {
        expect(String(body.pendingBlockReason ?? "")).toMatch(/S05_PENDING_BLOCKS/i);
      }
    }
    const after = await oracle(page, preparationId);
    expect(after.businessCommandCount).toBe(before.businessCommandCount);
    expect(after.creationRevision).toBe(before.creationRevision);
  });
});
