import { test, expect } from "@playwright/test";

/**
 * Q1 — DETERMINISTIC END-TO-END ON DEV BOUNDARY.
 * Real D2 sas path → AWAITING_PILOT_ACT (no artificial mission seed).
 * Then S05 blocks concurrent document effect B.
 * Nora fixture only at provider boundary.
 */

async function openFreshPrep(page: import("@playwright/test").Page): Promise<string> {
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL(/\/preparations\//, { timeout: 30000 });
  const preparationId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
  if (!preparationId) throw new Error("preparationId missing");
  return preparationId;
}

async function oracle(page: import("@playwright/test").Page, preparationId: string) {
  const res = await page.request.post("/api/dev/e2e/s05-fixture", {
    data: { action: "oracle", preparationId },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  return res.json() as Promise<{
    projectId: string | null;
    creationRevision: number | null;
    documentCount: number;
    humanDecisionCount?: number;
    unknownTurns: string[];
    awaitingMissions?: Array<{
      clientIntentKey: string;
      status: string;
      preparationId?: string | null;
    }>;
  }>;
}

test.describe("Q1 real D2 mission + S05", () => {
  test("MISSION real path: create intent → AWAITING; B doc blocked; control OK", async ({
    page,
  }) => {
    test.setTimeout(180_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    // --- Control prep: no AWAITING — document CREATE must succeed ---
    const controlPrep = await openFreshPrep(page);
    const ctrlBefore = await oracle(page, controlPrep);
    expect(ctrlBefore.projectId).toBeNull();
    expect(ctrlBefore.awaitingMissions?.length ?? 0).toBe(0);
    const ctrlRespPromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${controlPrep}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByTestId("prep-draft").fill("Rédige un document de synthèse sur les options A et B");
    await page.getByTestId("prep-send").click();
    const ctrlBody = await (await ctrlRespPromise).json();
    expect(ctrlBody.status).toBe("COMPLETE");
    expect(ctrlBody.pendingEffectBlocked).not.toBe(true);
    expect(ctrlBody.documentSave?.status).toBe("AVAILABLE");
    const ctrlAfter = await oracle(page, controlPrep);
    expect(ctrlAfter.documentCount).toBe(ctrlBefore.documentCount + 1);

    // --- Subject prep: real D2 create intent, NO create-project click ---
    await page.goto("/portfolio");
    const prepId = await openFreshPrep(page);
    const beforeA = await oracle(page, prepId);
    expect(beforeA.projectId).toBeNull();
    expect(beforeA.unknownTurns.length).toBe(0);

    const respAPromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${prepId}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByTestId("prep-draft").fill("Je veux créer un projet.");
    await page.getByTestId("prep-send").click();
    const respA = await respAPromise;
    expect(respA.ok()).toBeTruthy();
    const bodyA = await respA.json();
    expect(bodyA.status).toBe("COMPLETE");
    expect(bodyA.nextTurnKind).toBe("INTENTION_EFFET");
    expect(bodyA.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    expect(bodyA.missionProjection?.ownerActBinding?.kind).toBe("D2_CREATE_PROJECT");
    expect(bodyA.missionProjection?.ownerActBinding?.preparationId).toBe(prepId);
    expect(bodyA.missionProjection?.ownerActBinding?.clientIntentKey).toBeTruthy();
    expect(bodyA.missionProjection?.ownerActBinding?.suggestedIdempotencyKey).toMatch(
      /^d2:mission:/,
    );
    expect(bodyA.humanDecisionCreated).not.toBe(true);
    const intentKey = bodyA.missionProjection.clientIntentKey as string;

    // Restitution métier (status enum is API/oracle, not literal UI copy).
    await expect(
      page.getByText(/acte Pilote requis|création de projet/i).first(),
    ).toBeVisible({ timeout: 15000 });
    await expect(page.getByText(/Espace de préparation — projet non créé/i)).toBeVisible();
    // Explicit D2 gesture present but NOT clicked (MISSION-16).
    const createBtn = page.getByTestId("prep-create-project");
    await expect(createBtn).toBeVisible({ timeout: 15000 });
    expect(page.url()).toContain(`/preparations/${prepId}`);

    const afterA = await oracle(page, prepId);
    expect(afterA.projectId).toBeNull();
    expect(afterA.unknownTurns.length).toBe(0);
    expect(afterA.awaitingMissions?.some((m) => m.clientIntentKey === intentKey)).toBe(true);
    const revA = afterA.creationRevision;
    const docsA = afterA.documentCount;
    const hdA = afterA.humanDecisionCount ?? 0;

    // Refresh — mission still recoverable via server reader (oracle).
    await page.reload();
    const afterReload = await oracle(page, prepId);
    expect(afterReload.projectId).toBeNull();
    expect(afterReload.awaitingMissions?.some((m) => m.clientIntentKey === intentKey)).toBe(true);

    // B — concurrent document effect must be S05-blocked by mission A.
    const respBPromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${prepId}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByTestId("prep-draft").fill("Rédige un document de synthèse sur l'architecture");
    await page.getByTestId("prep-send").click();
    const bodyB = await (await respBPromise).json();
    expect(bodyB.nextTurnKind).toBe("INTENTION_EFFET");
    expect(bodyB.pendingEffectBlocked).toBe(true);
    expect(String(bodyB.pendingBlockReason ?? "")).toMatch(/S05_MISSION_BLOCKS_EFFECT/i);
    expect(
      bodyB.documentSave == null ||
        bodyB.documentSave.status === "NOT_EXECUTED" ||
        bodyB.documentSave.status === "SKIPPED",
    ).toBe(true);

    const afterB = await oracle(page, prepId);
    expect(afterB.projectId).toBeNull();
    expect(afterB.documentCount).toBe(docsA);
    expect(afterB.humanDecisionCount ?? 0).toBe(hdA);
    expect(afterB.creationRevision).toBe(revA);
    expect(afterB.awaitingMissions?.some((m) => m.clientIntentKey === intentKey)).toBe(true);
    expect(afterB.unknownTurns.length).toBe(0);

    // Independent question leaves A intact.
    const respQPromise = page.waitForResponse(
      (r) =>
        r.url().includes(`/api/preparations/${prepId}/messages`) &&
        r.request().method() === "POST",
    );
    await page.getByTestId("prep-draft").fill("Quelle est la différence entre blob et commit ?");
    await page.getByTestId("prep-send").click();
    const bodyQ = await (await respQPromise).json();
    expect(bodyQ.status).toBe("COMPLETE");
    expect(bodyQ.nextTurnKind).toBe("DIALOGUE_INDEPENDANT");
    expect(bodyQ.pendingEffectBlocked).not.toBe(true);
    const afterQ = await oracle(page, prepId);
    expect(afterQ.awaitingMissions?.some((m) => m.clientIntentKey === intentKey)).toBe(true);
  });
});
