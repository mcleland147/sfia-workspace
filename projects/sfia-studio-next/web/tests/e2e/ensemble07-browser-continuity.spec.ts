import { test, expect, type Page, type APIRequestContext } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  openNewPreparation,
  seedInspectedNameViaApi,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

/**
 * Ensemble 07 — BROWSER continuity qualification (BROWSER-01…06).
 * Lane: Playwright :3101 + sfia_next_e2e + STUDIO_FORCE_NORA_FIXTURE.
 * LIVE Nora: NOT RUN. Fixture emits cycleType="cadrage" (LIVE frontier regression).
 */

const EVIDENCE = path.resolve(
  __dirname,
  "../../../../.tmp-sfia-review/ensemble07-browser-evidence",
);

type PilotageEffectSnap = {
  operation?: string | null;
  status?: string | null;
  reason?: string | null;
  reasonCode?: string | null;
  attempted?: boolean;
};

type ProjectSnap = {
  messageCount: number;
  messages: Array<{
    id?: string;
    role?: string;
    content?: string;
    generationId?: string | null;
    ordinal?: number | null;
  }>;
  turnProjections: Array<{
    messageId?: string | null;
    turnCommandId?: string | null;
    pilotageEffect?: PilotageEffectSnap | null;
  }>;
  cycleStatus: string | null;
  cycleId: string | null;
  cycleType: string | null;
  ckiId: string | null;
  trajectoryRetained: boolean;
  trajectoryProposed: boolean;
  lastPilotageEffect: PilotageEffectSnap | null;
  iqStatus: string | null;
};

async function loginPilotA(page: Page) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
}

async function openSurface(page: Page, key: string) {
  await page.getByTestId("studio-rail").getByTestId(`nav-${key}`).click();
  await expect(page.getByTestId(`surface-${key}`)).toHaveAttribute(
    "data-surface-active",
    "1",
    { timeout: 15000 },
  );
}

async function shot(page: Page, name: string) {
  fs.mkdirSync(EVIDENCE, { recursive: true });
  await page.screenshot({
    path: path.join(EVIDENCE, `${name}.png`),
    fullPage: true,
  });
}

async function getProjectSnap(
  request: APIRequestContext,
  projectId: string,
): Promise<ProjectSnap> {
  const getRes = await request.get(`/api/projects/${projectId}`, { timeout: 10000 });
  expect(getRes.ok()).toBeTruthy();
  const body = (await getRes.json()) as {
    messages?: Array<{
      id?: string;
      role?: string;
      content?: string;
      generationId?: string | null;
      ordinal?: number | null;
    }>;
    turnProjections?: Array<{
      messageId?: string | null;
      turnCommandId?: string | null;
      pilotageEffect?: PilotageEffectSnap | null;
    }>;
    initialQualification?: { status?: string } | null;
    pilotage?: {
      cycle?: {
        id?: string;
        status?: string;
        cycleType?: string;
        cki?: { ckiId?: string | null };
      } | null;
      trajectory?: { proposed?: unknown | null; retained?: unknown | null };
    };
  };
  const turns = Array.isArray(body.turnProjections) ? body.turnProjections : [];
  const lastEffect =
    [...turns]
      .reverse()
      .map((t) => t.pilotageEffect)
      .find((e) => e && e.attempted) ?? null;
  return {
    messageCount: Array.isArray(body.messages) ? body.messages.length : 0,
    messages: Array.isArray(body.messages) ? body.messages : [],
    turnProjections: turns,
    cycleStatus: body.pilotage?.cycle?.status ?? null,
    cycleId: body.pilotage?.cycle?.id ?? null,
    cycleType: body.pilotage?.cycle?.cycleType ?? null,
    ckiId: body.pilotage?.cycle?.cki?.ckiId ?? null,
    trajectoryRetained: Boolean(body.pilotage?.trajectory?.retained),
    trajectoryProposed: Boolean(body.pilotage?.trajectory?.proposed),
    lastPilotageEffect: lastEffect,
    iqStatus: body.initialQualification?.status ?? null,
  };
}

/** Correlate durable pilotageEffect to the assistant that answers a specific user utterance. */
function effectForUserUtterance(
  snap: ProjectSnap,
  utterance: string,
  opts?: { minUserIndex?: number },
): { userId: string; assistantId: string; effect: PilotageEffectSnap } {
  const needle = utterance.slice(0, Math.min(48, utterance.length));
  const minIdx = opts?.minUserIndex ?? 0;
  let userIdx = -1;
  for (let i = snap.messages.length - 1; i >= minIdx; i--) {
    const m = snap.messages[i]!;
    if (m.role === "user" && (m.content ?? "").includes(needle)) {
      userIdx = i;
      break;
    }
  }
  expect(userIdx, `user utterance not found: ${needle}`).toBeGreaterThanOrEqual(0);
  const user = snap.messages[userIdx]!;
  expect(user.id, "user message id required for correlation").toBeTruthy();
  const assistant = snap.messages.slice(userIdx + 1).find((m) => m.role === "assistant");
  expect(assistant?.id, "assistant reply after user turn required").toBeTruthy();
  const turn = snap.turnProjections.find((t) => t.messageId === assistant!.id);
  expect(turn?.pilotageEffect?.attempted, "turnProjection.pilotageEffect for this assistant").toBe(
    true,
  );
  return {
    userId: user.id!,
    assistantId: assistant!.id!,
    effect: turn!.pilotageEffect!,
  };
}

async function pollUntil(
  request: APIRequestContext,
  projectId: string,
  pred: (s: ProjectSnap) => boolean,
  opts?: { maxMs?: number; stepMs?: number },
): Promise<ProjectSnap> {
  const maxMs = opts?.maxMs ?? 25000;
  const stepMs = opts?.stepMs ?? 500;
  const start = Date.now();
  let last = await getProjectSnap(request, projectId);
  while (Date.now() - start < maxMs) {
    if (pred(last)) return last;
    await new Promise((r) => setTimeout(r, stepMs));
    last = await getProjectSnap(request, projectId);
  }
  return last;
}

async function waitIqTerminal(
  request: APIRequestContext,
  projectId: string,
): Promise<ProjectSnap> {
  let last = await pollUntil(
    request,
    projectId,
    (s) => ["PROPOSED", "CLARIFICATION", "FAILED"].includes(s.iqStatus ?? ""),
    { maxMs: 12000 },
  );
  if (["PROPOSED", "CLARIFICATION"].includes(last.iqStatus ?? "")) return last;
  for (let i = 0; i < 3; i++) {
    await request.post(`/api/projects/${projectId}/initial-qualification/reconcile`, {
      timeout: 12000,
    });
    last = await pollUntil(
      request,
      projectId,
      (s) => ["PROPOSED", "CLARIFICATION", "FAILED"].includes(s.iqStatus ?? ""),
      { maxMs: 8000 },
    );
    if (["PROPOSED", "CLARIFICATION"].includes(last.iqStatus ?? "")) return last;
  }
  return last;
}

async function createSyntheticProject(page: Page): Promise<{ projectId: string; name: string }> {
  const name = uniqueProjectName("E07Browser Cont");
  await openNewPreparation(page);
  await sendPrepMessage(
    page,
    `Je veux un cadrage pour clarifier le périmètre d'un cockpit produit, nommé ${name}.`,
  );
  await seedInspectedNameViaApi(page, {
    name,
    summary: "E07 browser continuity synthetic",
  });
  await expect(page.getByTestId("prep-create-project")).toBeEnabled({ timeout: 30000 });
  await page.getByTestId("prep-create-project").click();
  const access = page.getByRole("button", { name: /Accéder au projet/i });
  await expect(access).toBeEnabled({ timeout: 60000 });
  await access.click();
  await page.waitForURL("**/projects/**", { timeout: 30000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  return { projectId: projectId!, name };
}

async function sendTravail(page: Page, text: string) {
  const draft = page.getByTestId("thread-draft").first();
  const send = page.getByTestId("thread-send").first();
  await expect(draft).toBeEditable({ timeout: 20000 });
  await draft.fill(text);
  await expect(send).toBeEnabled({ timeout: 10000 });
  await send.click();
  await expect(page.getByText(text.slice(0, Math.min(40, text.length)), { exact: false }).last()).toBeVisible({
    timeout: 30000,
  });
  await expect(draft).toHaveValue("", { timeout: 60000 });
}

test.describe("Ensemble 07 BROWSER continuity (01–06)", () => {
  test.describe.configure({ mode: "serial", timeout: 240_000 });

  let projectId = "";
  let rejectProjectId = "";

  test("BROWSER-05 prep — create project without technical mission dump", async ({ page }) => {
    await loginPilotA(page);
    const created = await createSyntheticProject(page);
    projectId = created.projectId;

    const iq = await waitIqTerminal(page.request, projectId);
    expect(["PROPOSED", "CLARIFICATION"]).toContain(iq.iqStatus);

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("thread-draft").first()).toBeEditable({ timeout: 20000 });
    await shot(page, "b05-travail-after-create");

    const snap = await getProjectSnap(page.request, projectId);
    const assistant = snap.messages.filter((m) => m.role === "assistant");
    for (const m of assistant) {
      expect(m.content ?? "").not.toMatch(/### Suite de mission/i);
      expect(m.content ?? "").not.toMatch(/projectId=proj_/);
      expect(m.content ?? "").not.toMatch(/clientIntentKey=/);
    }
    // UI: no raw mission dump as Nora speech
    await expect(page.getByText(/### Suite de mission/i)).toHaveCount(0);
    await expect(page.getByText(/projectId=proj_/)).toHaveCount(0);

    // Reload — projection still métier
    await page.reload();
    await expect(page.getByTestId("thread-draft").first()).toBeEditable({ timeout: 20000 });
    await expect(page.getByText(/### Suite de mission/i)).toHaveCount(0);
    await expect(page.getByText(/projectId=proj_/)).toHaveCount(0);
    test.info().annotations.push({
      type: "note",
      description: `BROWSER-05 PASS — projectId=${projectId}; assistantMsgs=${assistant.length}; no tech dump`,
    });
  });

  test("BROWSER-01 — GO naturel cadrage → ACTIVE CADRAGE + restitution + surfaces sans F5", async ({
    page,
  }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("composer-lock-overlay")).toHaveCount(0);

    // RETAIN when a proposed trajectory exists (fixture now registered).
    const before = await getProjectSnap(page.request, projectId);
    if (before.trajectoryProposed && !before.trajectoryRetained) {
      await sendTravail(page, "Je retiens cette trajectoire.");
      const retained = await pollUntil(
        page.request,
        projectId,
        (s) => s.trajectoryRetained === true,
        { maxMs: 20000 },
      );
      expect(retained.trajectoryRetained).toBe(true);
      expect(retained.lastPilotageEffect?.operation).toBe("RETAIN_TRAJECTORY");
      expect(["APPLIED", "ALREADY_APPLIED"]).toContain(retained.lastPilotageEffect?.status ?? "");
    }

    const go =
      "Je donne mon accord explicite pour ouvrir le premier cycle de cadrage.";
    await sendTravail(page, go);
    await shot(page, "b01-travail-after-go");

    const open = await pollUntil(
      page.request,
      projectId,
      (s) =>
        s.cycleStatus === "ACTIVE" &&
        s.cycleType === "CADRAGE" &&
        s.lastPilotageEffect?.operation === "OPEN_CYCLE" &&
        ["APPLIED", "ALREADY_APPLIED"].includes(s.lastPilotageEffect?.status ?? ""),
      { maxMs: 30000 },
    );

    expect(open.cycleStatus, "durable ACTIVE required").toBe("ACTIVE");
    expect(open.cycleId).toBeTruthy();
    expect(open.cycleType, "canonical CADRAGE after cadrage semantic").toBe("CADRAGE");
    expect(open.ckiId, "CKI principal associé").toBeTruthy();
    expect(open.lastPilotageEffect?.operation).toBe("OPEN_CYCLE");
    expect(["APPLIED", "ALREADY_APPLIED"]).toContain(open.lastPilotageEffect?.status ?? "");

    // Restitution métier in API messages (durable) — no pre-effect hedge, success facts.
    const lastAssistant = [...open.messages].reverse().find((m) => m.role === "assistant");
    expect(lastAssistant?.content ?? "").not.toMatch(/reste à confirmer par Studio/i);
    expect(lastAssistant?.content ?? "").toMatch(/appliquée|déjà appliquée/i);
    await expect(page.getByText(/Résultat Studio/i).last()).toBeVisible({ timeout: 15000 });
    await expect(page.getByText(/reste à confirmer par Studio/i)).toHaveCount(0);

    // Surfaces without F5 — wait for refreshed durable pilotage (not the static card shell).
    await openSurface(page, "projet");
    await expect(page.getByTestId("project-overview-cycle-card")).toBeVisible({ timeout: 15000 });
    await expect(page.getByText(/CYCLE EN COURS|● Actif/i).first()).toBeVisible({
      timeout: 20000,
    });
    await expect(
      page.getByTestId("project-overview-cycle-card").getByRole("heading", { name: /Cadrage/i }),
    ).toBeVisible({ timeout: 10000 });
    await shot(page, "b01-projet-after-open");

    await openSurface(page, "pilotage");
    await expect(
      page.getByTestId("trajectory-board").or(page.getByTestId("project-trajectory")).first(),
    ).toBeVisible({ timeout: 20000 });
    // Wait for durable ACTIVE panel (not merely forecast wording).
    await expect(page.getByTestId("trajectory-cycle-actif-panel")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("trajectory-cki-banner")).toBeVisible({ timeout: 15000 });
    await shot(page, "b01-trajectoire-after-open");

    // QA-02 — open dedicated CKI surface; assert identity matches durable projection (no soft if).
    await expect(page.getByTestId("trajectory-cki-banner")).toContainText(open.ckiId!, {
      timeout: 15000,
    });
    await page.getByTestId("trajectory-cki-banner").click();
    await expect(page.getByTestId("trajectory-cki-methode")).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("trajectory-cki-layout")).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("trajectory-cki-main")).toBeVisible();
    await expect(page.getByTestId("trajectory-cki-absent")).toHaveCount(0);
    const ckiNode = page.getByTestId("trajectory-cki-id");
    await expect(ckiNode).toBeVisible({ timeout: 15000 });
    await expect(ckiNode).toHaveAttribute("data-cki-id", open.ckiId!);
    await expect(ckiNode).toHaveText(open.ckiId!);
    await shot(page, "b01-cki-region");

    // Sans F5: leave CKI, return, same identity
    await page.getByRole("button", { name: /Retour à la trajectoire/i }).click();
    await expect(page.getByTestId("trajectory-cycle-actif-panel")).toBeVisible({ timeout: 10000 });
    await expect(page.getByTestId("trajectory-cki-banner")).toContainText(open.ckiId!);
    await page.getByTestId("trajectory-cki-banner").click();
    await expect(page.getByTestId("trajectory-cki-id")).toHaveAttribute(
      "data-cki-id",
      open.ckiId!,
    );

    await openSurface(page, "travail");
    await expect(page.getByText(/Résultat Studio/i).last()).toBeVisible({ timeout: 15000 });

    // Refresh volontaire — CKI facts still match
    await page.reload();
    await openSurface(page, "pilotage");
    await expect(page.getByTestId("trajectory-cycle-actif-panel")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("trajectory-cki-banner")).toContainText(open.ckiId!);
    await page.getByTestId("trajectory-cki-banner").click();
    await expect(page.getByTestId("trajectory-cki-id")).toHaveAttribute(
      "data-cki-id",
      open.ckiId!,
    );

    test.info().annotations.push({
      type: "note",
      description: `BROWSER-01 PASS — cycleId=${open.cycleId}; type=${open.cycleType}; cki=${open.ckiId}; effect=${open.lastPilotageEffect?.status}; LIVE NOT PROVEN`,
    });
  });

  test("BROWSER-04 — sync sans F5 + contrôle refresh volontaire", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);

    const before = await getProjectSnap(page.request, projectId);
    expect(before.cycleStatus).toBe("ACTIVE");
    expect(before.cycleType).toBe("CADRAGE");

    // Change surface after effect already applied (situation 1)
    await openSurface(page, "pilotage");
    await expect(page.getByText(/Cadrage|CADRAGE/i).first()).toBeVisible({ timeout: 15000 });
    await openSurface(page, "projet");
    await expect(page.getByTestId("project-overview-cycle-card")).toBeVisible({ timeout: 15000 });
    await openSurface(page, "travail");
    await expect(page.getByText(/Résultat Studio/i).last()).toBeVisible({ timeout: 15000 });

    // Voluntary refresh control — same durable facts
    await page.reload();
    await expect(page.getByTestId("thread-draft").first()).toBeEditable({ timeout: 20000 });
    const after = await getProjectSnap(page.request, projectId);
    expect(after.cycleId).toBe(before.cycleId);
    expect(after.cycleType).toBe("CADRAGE");
    expect(after.cycleStatus).toBe("ACTIVE");
    await shot(page, "b04-after-voluntary-refresh");

    test.info().annotations.push({
      type: "note",
      description:
        "BROWSER-04 PASS — surface change after effect without F5; situation-2 live multi-tab push NOT claimed (no universal realtime bus)",
    });
  });

  test("BROWSER-02 — REJECTED unknown cycleType + no ACTIVE fictif", async ({ page }) => {
    await loginPilotA(page);
    const created = await createSyntheticProject(page);
    rejectProjectId = created.projectId;
    const iq = await waitIqTerminal(page.request, rejectProjectId);
    expect(["PROPOSED", "CLARIFICATION"]).toContain(iq.iqStatus);

    await page.goto(`/projects/${rejectProjectId}?surface=travail`);
    await sendTravail(page, "Ouvre le cycle comparaison_de_solutions.");

    const snap = await pollUntil(
      page.request,
      rejectProjectId,
      (s) =>
        s.lastPilotageEffect?.operation === "OPEN_CYCLE" &&
        s.lastPilotageEffect?.status === "REJECTED",
      { maxMs: 25000 },
    );

    expect(snap.lastPilotageEffect?.status).toBe("REJECTED");
    expect(snap.cycleStatus).toBeNull();
    expect(snap.cycleId).toBeNull();

    const lastAssistant = [...snap.messages].reverse().find((m) => m.role === "assistant");
    expect(lastAssistant?.content ?? "").toMatch(/refusée|refus/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/a été \*\*appliquée\*\*|désormais actif/i);
    expect(lastAssistant?.content ?? "").not.toMatch(/reste à confirmer par Studio/i);

    // Correlate REJECTED to this utterance's assistant turn (not a prior OPEN).
    const rejectedCorr = effectForUserUtterance(
      snap,
      "Ouvre le cycle comparaison_de_solutions.",
    );
    expect(rejectedCorr.effect.operation).toBe("OPEN_CYCLE");
    expect(rejectedCorr.effect.status).toBe("REJECTED");

    await expect(page.getByText(/refusée|refus/i).last()).toBeVisible({ timeout: 15000 });
    await openSurface(page, "projet");
    await expect(page.getByTestId("project-overview-no-cycle")).toBeVisible({ timeout: 15000 });

    // QA-FINAL-04 — no active CKI when no cycle
    await openSurface(page, "pilotage");
    const openCkiAbsent = page
      .getByTestId("trajectory-cki-banner")
      .or(page.getByTestId("trajectory-open-cki"));
    await expect(openCkiAbsent.first()).toBeVisible({ timeout: 15000 });
    await openCkiAbsent.first().click();
    await expect(page.getByTestId("trajectory-cki-absent")).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("trajectory-cki-id")).toHaveCount(0);
    await shot(page, "b02-rejected-no-cycle");

    test.info().annotations.push({
      type: "note",
      description: `BROWSER-02 PASS — REJECTED correlated assistant=${rejectedCorr.assistantId}; reason=${rejectedCorr.effect.reason ?? "?"}; no ACTIVE; CKI absent`,
    });
  });

  test("BROWSER-03 — restitution coherente (hedge strip); CONFLICT/UNKNOWN levels declared", async ({
    page,
  }) => {
    // APPLIED / REJECTED browser paths: BROWSER-01 / BROWSER-02.
    // CONFLICT / UNKNOWN composer wording: unit ensemble07-pilotage-effect-restitution — NOT BROWSER.
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);
    await page.reload();
    const snap = await getProjectSnap(page.request, projectId);
    const assistants = snap.messages.filter((m) => m.role === "assistant").map((m) => m.content ?? "");
    for (const c of assistants) {
      if (/Résultat Studio/i.test(c) && /appliquée|refusée|conflit|vérification/i.test(c)) {
        expect(c).not.toMatch(/reste à confirmer par Studio/i);
      }
    }
    test.info().annotations.push({
      type: "note",
      description:
        "BROWSER-03 PARTIAL — hedge/coherence BROWSER PROVEN; CONFLICT/UNKNOWN = UNIT DETERMINISTIC ONLY — BROWSER NOT RUN (no reliable non-fraudulent conflict injection in lane)",
    });
  });

  test("QA-FINAL-01 — stale GET must not overwrite newer projection", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    // Baseline load WITHOUT race interception — prove ACTIVE first.
    await page.goto(`/projects/${projectId}?surface=projet`);
    await expect(
      page.getByTestId("project-overview-cycle-card").getByRole("heading", { name: /Cadrage/i }),
    ).toBeVisible({ timeout: 20000 });
    const baselineCycleId = (await getProjectSnap(page.request, projectId)).cycleId;
    expect(baselineCycleId).toBeTruthy();

    const FRESH_MARKER = "E07_FRESH_B_PROJECTION_MARKER";
    const STALE_MARKER = "E07_STALE_A_PROJECTION_MARKER";

    type Gate = { promise: Promise<void>; resolve: () => void };
    const makeGate = (): Gate => {
      let resolve!: () => void;
      const promise = new Promise<void>((r) => {
        resolve = r;
      });
      return { promise, resolve };
    };

    let getA = 0;
    let getB = 0;
    let otherGets = 0;
    let aFulfilledCount = 0;
    let bSeenInUi = false;
    /** Explicit phases — Strict Mode may double-invoke the URL effect; all A-phase GETs stay stale+held. */
    let phase: "await_a" | "hold_a" | "await_b" | "done" = "await_a";

    const awaitGate = async (gate: Gate, label: string, ms = 15000) => {
      await Promise.race([
        gate.promise,
        new Promise<void>((_, reject) => {
          setTimeout(() => {
            reject(
              new Error(
                `QA-FINAL-01 timeout waiting for ${label} (phase=${phase}, getA=${getA}, getB=${getB}, otherGets=${otherGets}, bSeenInUi=${bSeenInUi})`,
              ),
            );
          }, ms);
        }),
      ]);
    };

    const releaseA = makeGate();
    const aIntercepted = makeGate();
    const bIntercepted = makeGate();
    const bFulfilled = makeGate();
    const aFulfilled = makeGate();

    const staleBody = JSON.stringify({
      pilotage: {
        projectId,
        revision: 1,
        cycle: {
          id: baselineCycleId,
          status: "ACTIVE",
          cycleType: "CADRAGE",
          objective: STALE_MARKER,
          cki: { ckiId: "stale-cki-should-not-win", availability: "ASSOCIATED" },
        },
        closedCycles: [],
        trajectory: { proposed: null, retained: null },
        method: { presence: "ABSENT" },
        restrictions: [],
      },
      messages: [],
    });
    const freshBody = JSON.stringify({
      pilotage: {
        projectId,
        revision: 99,
        cycle: {
          id: baselineCycleId,
          status: "ACTIVE",
          cycleType: "CADRAGE",
          objective: FRESH_MARKER,
          cki: { ckiId: "fresh-cki-b", availability: "ASSOCIATED" },
        },
        closedCycles: [],
        trajectory: { proposed: null, retained: { id: "traj_fresh" } },
        method: { presence: "ABSENT" },
        restrictions: [],
      },
      messages: [],
    });

    const matchProjectGet = (url: URL) =>
      url.pathname === `/api/projects/${projectId}` ||
      url.pathname === `/api/projects/${projectId}/`;

    // Exact project resource only — do not swallow /pilotage sub-routes.
    await page.route(matchProjectGet, async (route) => {
      if (route.request().method() !== "GET") {
        await route.continue();
        return;
      }
      if (phase === "await_a" || phase === "hold_a") {
        getA += 1;
        if (phase === "await_a") {
          phase = "hold_a";
          aIntercepted.resolve();
        }
        await releaseA.promise;
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: staleBody,
        });
        aFulfilledCount += 1;
        if (aFulfilledCount === 1) aFulfilled.resolve();
        return;
      }
      if (phase === "await_b") {
        getB += 1;
        if (getB === 1) bIntercepted.resolve();
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: freshBody,
        });
        if (getB === 1) {
          phase = "done";
          bFulfilled.resolve();
        }
        return;
      }
      otherGets += 1;
      await route.continue();
    });

    // A then B: two rail surface changes → two URL-effect refreshDurablePilotage generations.
    const navA = openSurface(page, "pilotage");
    await awaitGate(aIntercepted, "GET A intercept");
    expect(getA, "GET A must be intercepted at least once").toBeGreaterThanOrEqual(1);
    expect(getB, "GET B must not start before phase flip").toBe(0);
    await navA; // surface flip; A-phase GETs remain held

    phase = "await_b";
    const navB = openSurface(page, "projet");
    await awaitGate(bIntercepted, "GET B intercept");
    expect(getB, "GET B must be intercepted").toBeGreaterThanOrEqual(1);

    // B must complete and be observable BEFORE A is released.
    await awaitGate(bFulfilled, "GET B fulfill");
    await expect(page.getByText(FRESH_MARKER, { exact: false })).toBeVisible({ timeout: 20000 });
    bSeenInUi = true;
    await expect(page.getByText(STALE_MARKER, { exact: false })).toHaveCount(0);
    await navB;

    // Now release stale A-phase GETs and wait until at least one fulfill finishes.
    releaseA.resolve();
    await awaitGate(aFulfilled, "GET A fulfill after release");
    // Allow React to process any late setState from stale A.
    await page.waitForTimeout(250);

    // A must NOT overwrite B's identifiable fresh projection.
    await expect(page.getByText(FRESH_MARKER, { exact: false })).toBeVisible({ timeout: 10000 });
    await expect(page.getByText(STALE_MARKER, { exact: false })).toHaveCount(0);
    await expect(
      page.getByTestId("project-overview-cycle-card").getByRole("heading", { name: /Cadrage/i }),
    ).toBeVisible();
    await expect(page.getByTestId("project-overview-no-cycle")).toHaveCount(0);

    await page.unroute(matchProjectGet);

    // Durable API still ACTIVE — GET race must not mutate métier.
    const after = await getProjectSnap(page.request, projectId);
    expect(after.cycleId).toBe(baselineCycleId);
    expect(after.cycleStatus).toBe("ACTIVE");
    expect(after.cycleType).toBe("CADRAGE");

    expect(getA, "GET A must have run").toBeGreaterThanOrEqual(1);
    expect(getB, "GET B must have run").toBeGreaterThanOrEqual(1);
    expect(aFulfilledCount, "GET A must have completed after release").toBeGreaterThanOrEqual(1);
    expect(bSeenInUi, "fresh B projection must have been observable before A release").toBe(true);

    test.info().annotations.push({
      type: "note",
      description: `QA-FINAL-01 PASS — A held (getA=${getA}), B fulfilled+visible (${FRESH_MARKER}) before A release (aFulfilled=${aFulfilledCount}), no stale overwrite; otherGets=${otherGets}`,
    });
  });

  test("BROWSER-06 — correlated second OPEN + GET immutability", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);

    const before = await getProjectSnap(page.request, projectId);
    expect(before.cycleStatus).toBe("ACTIVE");
    const beforeCycleId = before.cycleId;
    const beforeMsgCount = before.messageCount;

    // Ambiguous / unmatched utterance → dialogue only, no second ACTIVE
    await sendTravail(page, "Ce serait intéressant de commencer.");
    const afterAmb = await getProjectSnap(page.request, projectId);
    expect(afterAmb.cycleId).toBe(beforeCycleId);
    expect(afterAmb.cycleStatus).toBe("ACTIVE");

    // GET-only polls — no mutation
    const a = await getProjectSnap(page.request, projectId);
    const b = await getProjectSnap(page.request, projectId);
    expect(b.cycleId).toBe(a.cycleId);
    expect(b.cycleType).toBe(a.cycleType);
    expect(b.messageCount).toBe(a.messageCount);

    // QA-03 — Repeat OPEN: correlate the NEW turn, not a historical OPEN effect.
    const repeatGo = "Ouvre le cycle cadrage.";
    const minUserIndex = afterAmb.messageCount;
    await sendTravail(page, repeatGo);

    const afterRepeat = await pollUntil(
      page.request,
      projectId,
      (s) => {
        if (s.messageCount <= beforeMsgCount) return false;
        try {
          const corr = effectForUserUtterance(s, repeatGo, { minUserIndex });
          return (
            corr.effect.operation === "OPEN_CYCLE" &&
            ["ALREADY_APPLIED", "REJECTED"].includes(corr.effect.status ?? "")
          );
        } catch {
          return false;
        }
      },
      { maxMs: 30000 },
    );

    const corr = effectForUserUtterance(afterRepeat, repeatGo, { minUserIndex });
    // With an ACTIVE cycle already present, D5 must refuse a second OPEN (not soft-pass on first APPLIED).
    expect(["ALREADY_APPLIED", "REJECTED"]).toContain(corr.effect.status ?? "");
    if (corr.effect.status === "REJECTED") {
      expect(corr.effect.reasonCode ?? corr.effect.reason ?? "").toMatch(/ACTIVE|cycle/i);
    }
    expect(afterRepeat.cycleId).toBe(beforeCycleId);
    expect(afterRepeat.cycleStatus).toBe("ACTIVE");
    expect(afterRepeat.cycleType).toBe("CADRAGE");

    // Nora restitution for THIS assistant must not claim a fresh applied success as if first open.
    const assistantMsg = afterRepeat.messages.find((m) => m.id === corr.assistantId);
    expect(assistantMsg?.content ?? "").toMatch(/Résultat Studio/i);
    expect(assistantMsg?.content ?? "").not.toMatch(/reste à confirmer par Studio/i);

    // Cross-project isolation: reject project still has no cycle
    if (rejectProjectId) {
      const other = await getProjectSnap(page.request, rejectProjectId);
      expect(other.cycleStatus).toBeNull();
      expect(other.cycleId).toBeNull();
    }

    await shot(page, "b06-idempotence");
    test.info().annotations.push({
      type: "note",
      description: `BROWSER-06 PASS — correlated assistant=${corr.assistantId} status=${corr.effect.status}; cycleId=${beforeCycleId}`,
    });
  });
});
