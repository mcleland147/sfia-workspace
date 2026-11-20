import { test, expect, type Page, type APIRequestContext } from "@playwright/test";
import {
  openNewPreparation,
  seedInspectedNameViaApi,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

/**
 * Ensemble 07 — BROWSER functional qualification A–F on isolated E2E lane :3101.
 *
 * Honesty contract (candidate preparation):
 * - A1 nominal ≠ FAILED
 * - C1 interaction ≠ C2 governed GO effect
 * - D1 safety ≠ D2 CLOSE effect
 * - F UI sync must not be masked by test-driven reconcile
 * - Fixture Nora FAKE — LIVE NOT PROVEN
 * - UX pixel comparison frozen (Morris)
 */

type IqSnap = {
  status: string;
  operationId: string;
  composerLocked: boolean;
  assistantMessageId: string;
  trajectoryRevisionId: string;
  version: number;
};

type ProjectSnap = {
  iq: IqSnap | null;
  messageCount: number;
  cycleStatus: string | null;
  cycleId: string | null;
  cycleType: string | null;
  closedCycleCount: number;
  trajectoryProposed: boolean;
  trajectoryRetained: boolean;
  lastPilotageEffect: string | null;
};

async function loginPilotA(page: Page) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
}

async function openSurface(page: Page, key: string) {
  // surface-* markers in ProjectChrome are sr-only spans (not navigable).
  await page.getByTestId("studio-rail").getByTestId(`nav-${key}`).click();
  await expect(page.getByTestId(`surface-${key}`)).toHaveAttribute(
    "data-surface-active",
    "1",
    { timeout: 15000 },
  );
}

async function getProjectSnap(
  request: APIRequestContext,
  projectId: string,
): Promise<ProjectSnap> {
  const getRes = await request.get(`/api/projects/${projectId}`, { timeout: 8000 });
  expect(getRes.ok()).toBeTruthy();
  const body = (await getRes.json()) as {
    messages?: Array<{ role?: string; content?: string }>;
    turnProjections?: Array<{
      pilotageEffect?: { operation?: string; status?: string } | null;
    }>;
    initialQualification?: {
      status?: string;
      operationId?: string;
      composerLocked?: boolean;
      assistantMessageId?: string | null;
      trajectoryRevisionId?: string | null;
      version?: number;
    } | null;
    pilotage?: {
      cycle?: { id?: string; status?: string; cycleType?: string } | null;
      closedCycles?: unknown[];
      trajectory?: {
        proposed?: unknown | null;
        retained?: unknown | null;
      };
    };
  };
  const q = body.initialQualification;
  const turns = Array.isArray(body.turnProjections) ? body.turnProjections : [];
  const lastEffect =
    [...turns]
      .reverse()
      .map((t) => t.pilotageEffect)
      .find((e) => e && e.operation)?.operation ?? null;
  return {
    iq: q
      ? {
          status: q.status ?? "",
          operationId: q.operationId ?? "",
          composerLocked: Boolean(q.composerLocked),
          assistantMessageId: q.assistantMessageId ?? "",
          trajectoryRevisionId: q.trajectoryRevisionId ?? "",
          version: q.version ?? 0,
        }
      : null,
    messageCount: Array.isArray(body.messages) ? body.messages.length : 0,
    cycleStatus: body.pilotage?.cycle?.status ?? null,
    cycleId: body.pilotage?.cycle?.id ?? null,
    cycleType: body.pilotage?.cycle?.cycleType ?? null,
    closedCycleCount: Array.isArray(body.pilotage?.closedCycles)
      ? body.pilotage!.closedCycles!.length
      : 0,
    trajectoryProposed: Boolean(body.pilotage?.trajectory?.proposed),
    trajectoryRetained: Boolean(body.pilotage?.trajectory?.retained),
    lastPilotageEffect: lastEffect,
  };
}

/** GET-only poll — does not POST reconcile (used by F and by post-terminal checks). */
async function pollQualificationGetOnly(
  request: APIRequestContext,
  projectId: string,
  opts?: { maxSeconds?: number },
): Promise<IqSnap | null> {
  const max = opts?.maxSeconds ?? 40;
  let last: IqSnap | null = null;
  for (let i = 0; i < max; i++) {
    try {
      const snap = await getProjectSnap(request, projectId);
      last = snap.iq;
      if (last && ["PROPOSED", "CLARIFICATION", "FAILED"].includes(last.status)) return last;
    } catch {
      /* retry */
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  return last;
}

/**
 * Bounded product reconcile — allowed for A1 functional completion when GET stays non-terminal.
 * Must be disclosed: this is controlled reconciliation, not process autonomy.
 */
async function waitQualificationWithBoundedReconcile(
  request: APIRequestContext,
  projectId: string,
): Promise<IqSnap | null> {
  let last = await pollQualificationGetOnly(request, projectId, { maxSeconds: 8 });
  if (last && ["PROPOSED", "CLARIFICATION", "FAILED"].includes(last.status)) return last;

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      await request.post(`/api/projects/${projectId}/initial-qualification/reconcile`, {
        timeout: 12000,
      });
    } catch {
      /* retry */
    }
    last = await pollQualificationGetOnly(request, projectId, { maxSeconds: 5 });
    if (last && ["PROPOSED", "CLARIFICATION", "FAILED"].includes(last.status)) return last;
  }
  return last;
}

async function createProjectBrowser(page: Page): Promise<{ projectId: string; name: string }> {
  const name = uniqueProjectName("E07QA Cadrage");
  await openNewPreparation(page);
  await sendPrepMessage(
    page,
    `Je veux un cadrage pour clarifier le périmètre d'un cockpit produit, nommé ${name}.`,
  );
  await seedInspectedNameViaApi(page, {
    name,
    summary: "Cadrage Ensemble 07 candidate preparation",
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

test.describe("Ensemble 07 parcours A–F (BROWSER FAKE — honest oracles)", () => {
  test.describe.configure({ mode: "serial", timeout: 180_000 });

  let projectId = "";
  let a1Terminal: IqSnap | null = null;

  test("A1 — nominal create → PROPOSED|CLARIFICATION (FAILED rejected)", async ({ page }) => {
    await loginPilotA(page);
    const created = await createProjectBrowser(page);
    projectId = created.projectId;

    // Product client may already reconcile; bounded reconcile disclosed if GET not yet terminal.
    const terminal = await waitQualificationWithBoundedReconcile(page.request, projectId);
    expect(terminal, "qualification projection missing").toBeTruthy();
    // QA-A01 — nominal success must not accept FAILED
    expect(["PROPOSED", "CLARIFICATION"]).toContain(terminal!.status);
    expect(terminal!.operationId.length).toBeGreaterThan(0);
    expect(terminal!.composerLocked).toBe(false);
    expect(terminal!.assistantMessageId.length).toBeGreaterThan(0);
    if (terminal!.status === "PROPOSED") {
      expect(terminal!.trajectoryRevisionId.length).toBeGreaterThan(0);
    }
    a1Terminal = terminal;

    const snap = await getProjectSnap(page.request, projectId);
    expect(snap.cycleStatus).toBeNull(); // no implicit ACTIVE
    expect(snap.messageCount).toBeGreaterThanOrEqual(2);

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-travail-stage").first()).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("composer-lock-overlay")).toHaveCount(0);
    await expect(page.getByTestId("thread-draft").first()).toBeEditable({ timeout: 15000 });
    await expect(
      page.getByText(/proposition de trajectoire initiale|clarifier|préciser/i).first(),
    ).toBeVisible({ timeout: 15000 });

    await openSurface(page, "pilotage");
    await expect(
      page.getByTestId("trajectory-board").or(page.getByTestId("project-trajectory")).first(),
    ).toBeVisible({ timeout: 20000 });
  });

  test("A2 — BROWSER FAILURE NOT RUN — PG NEGATIVE COVERAGE VERIFIED", async () => {
    // E2E-FREEZE-03 — do not count a repeated A1 oracle as browser failure proof.
    // PG ensemble07 owns FAILED / Studio-incident negatives. A1 already rejects FAILED.
    test.info().annotations.push({
      type: "note",
      description:
        "A2 BROWSER FAILURE NOT RUN — PG NEGATIVE COVERAGE VERIFIED; A1 NOMINAL refuses FAILED",
    });
    test.skip(
      true,
      "A2 BROWSER FAILURE NOT RUN — PG NEGATIVE COVERAGE VERIFIED (no browser FAILED injection without new architecture)",
    );
  });

  test("B — reopen + GET idempotent (RECONCILIATION; autonomy NOT claimed)", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}`);
    const a = await pollQualificationGetOnly(page.request, projectId, { maxSeconds: 15 });
    const b = await pollQualificationGetOnly(page.request, projectId, { maxSeconds: 15 });
    expect(a?.operationId).toBeTruthy();
    expect(b?.operationId).toBe(a?.operationId);
    expect(b?.status).toBe(a?.status);
    expect(["PROPOSED", "CLARIFICATION"]).toContain(b?.status);
    expect(b?.assistantMessageId).toBe(a?.assistantMessageId);
    test.info().annotations.push({
      type: "note",
      description:
        "B browser = post-terminal idempotent GET. Interruption mid-pipeline (D5-before-message, etc.) = PG P0 — RECONCILIATION PROVEN / PROCESS AUTONOMY NOT PROVEN",
    });
  });

  test("C1 — browser interaction RETAIN/OPEN utterances (no C2 effect claim)", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("composer-lock-overlay")).toHaveCount(0);
    const before = await getProjectSnap(page.request, projectId);
    const draft = page.getByTestId("thread-draft").first();
    const send = page.getByTestId("thread-send").first();
    await expect(draft).toBeEditable({ timeout: 15000 });

    await draft.fill("Je retiens cette trajectoire.");
    await expect(send).toBeEnabled({ timeout: 10000 });
    await send.click();
    await expect(page.getByText("Je retiens cette trajectoire.").last()).toBeVisible({
      timeout: 20000,
    });

    await draft.fill("Ouvre le cycle cadrage.");
    await expect(send).toBeEnabled({ timeout: 10000 });
    await send.click();
    await expect(page.getByText("Ouvre le cycle cadrage.").last()).toBeVisible({
      timeout: 20000,
    });

    const after = await getProjectSnap(page.request, projectId);
    expect(after.messageCount).toBeGreaterThan(before.messageCount);
    // C1 only — observe; do not require RETAINED/ACTIVE
    test.info().annotations.push({
      type: "note",
      description: `C1 PASS — messages accepted; cycle=${after.cycleStatus}; retained=${after.trajectoryRetained}; proposed=${after.trajectoryProposed}`,
    });
  });

  test("C2 — governed OPEN requires persisted ACTIVE (strict)", async ({ page }) => {
    // E2E-FREEZE-01 — PASS only if cycle is really ACTIVE in persisted projection.
    // Fixture exact key "Ouvre le cycle cadrage." → OPEN_CYCLE (DETERMINISTIC, not LIVE).
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);

    let snap: ProjectSnap | null = null;
    for (let i = 0; i < 20; i++) {
      snap = await getProjectSnap(page.request, projectId);
      if (snap.cycleStatus === "ACTIVE") break;
      await new Promise((r) => setTimeout(r, 500));
    }
    expect(snap, "project snap missing").toBeTruthy();
    expect(snap!.cycleStatus, "C2 requires persisted ACTIVE cycle — no soft-pass").toBe("ACTIVE");
    expect(snap!.cycleId, "ACTIVE cycle must have durable id").toBeTruthy();
    expect(snap!.cycleType).toBeTruthy();
    // Projection exposes at most one ACTIVE (single object); closedCycles are separate.
    expect(snap!.closedCycleCount).toBeGreaterThanOrEqual(0);
    test.info().annotations.push({
      type: "note",
      description: `C2 PASS — BROWSER DETERMINISTIC — GOVERNED OPEN PROVEN; cycleId=${snap!.cycleId}; type=${snap!.cycleType}; retained=${snap!.trajectoryRetained}; lastEffect=${snap!.lastPilotageEffect}; LIVE NL NOT PROVEN`,
    });
  });

  test("D1 — close utterance without unauthorized auto-close", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);
    const before = await getProjectSnap(page.request, projectId);
    const draft = page.getByTestId("thread-draft").first();
    const send = page.getByTestId("thread-send").first();
    await expect(draft).toBeEditable({ timeout: 15000 });
    await draft.fill("Clôture le cycle en cours avec réserves.");
    await expect(send).toBeEnabled({ timeout: 10000 });
    await send.click();
    await expect(page.getByText(/Clôture le cycle en cours avec réserves/i).last()).toBeVisible({
      timeout: 20000,
    });

    const after = await getProjectSnap(page.request, projectId);
    // D1 = acceptance + no spontaneous CLOSE without a demonstrated governed path.
    // If ACTIVE existed (from C2), staying ACTIVE after an unmatched CLOSE utterance is OK for D1.
    if (before.cycleStatus !== "ACTIVE") {
      expect(after.cycleStatus).not.toBe("CLOSED");
      expect(after.cycleStatus).toBe(before.cycleStatus);
    } else if (after.cycleStatus === "CLOSED") {
      // Possible only if fixture/LIVE CLOSE applied — claimed under D2, not silently here.
      test.info().annotations.push({
        type: "note",
        description: "D1 observed CLOSED after close utterance — D2 will assert governed close",
      });
    } else {
      expect(after.cycleStatus).toBe("ACTIVE");
    }
    test.info().annotations.push({
      type: "note",
      description: `D1 PASS — utterance accepted; before.cycle=${before.cycleStatus} after.cycle=${after.cycleStatus}`,
    });

    await openSurface(page, "pilotage");
    await expect(
      page.getByTestId("trajectory-board").or(page.getByTestId("project-trajectory")).first(),
    ).toBeVisible({ timeout: 20000 });
  });

  test("D2 — BROWSER CONVERSATIONAL CLOSE NOT PROVEN", async () => {
    // E2E-FREEZE-02 Cas B — no CLOSE fixture for "Clôture le cycle…"; do not PASS on !CLOSED.
    test.info().annotations.push({
      type: "note",
      description:
        "SKIPPED / NOT PROVEN — BROWSER CONVERSATIONAL CLOSE; D5 CLOSE remains PG-proven (ml3-pilotage); LIVE CLOSE NOT PROVEN",
    });
    test.skip(true, "SKIPPED / NOT PROVEN — BROWSER CONVERSATIONAL CLOSE");
  });

  test("E — navigation preserves projectId + qualification identity (GET)", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);
    const before = await getProjectSnap(page.request, projectId);
    expect(before.iq?.operationId).toBeTruthy();

    for (const key of ["projet", "travail", "pilotage", "journal"] as const) {
      await openSurface(page, key);
      expect(page.url()).toContain(`/projects/${projectId}`);
    }
    await page.getByTestId("studio-rail").getByTestId("nav-documents").click();
    expect(page.url()).toContain(`/projects/${projectId}`);

    const after = await getProjectSnap(page.request, projectId);
    expect(after.iq?.operationId).toBe(before.iq?.operationId);
    expect(after.iq?.status).toBe(before.iq?.status);
    expect(after.iq?.version).toBe(before.iq?.version);
    expect(after.iq?.assistantMessageId).toBe(before.iq?.assistantMessageId);
    expect(after.messageCount).toBe(before.messageCount);
    expect(after.cycleStatus).toBe(before.cycleStatus);
  });

  test("F — Trajectoire/Travail UI sync without test-driven reconcile", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    // Intentionally GET-only — do not POST reconcile from the test harness.
    await page.goto(`/projects/${projectId}?surface=pilotage`);
    await expect(
      page.getByTestId("trajectory-board").or(page.getByTestId("project-trajectory")).first(),
    ).toBeVisible({ timeout: 20000 });

    // Prefer proposal/clarification UI; analyzing is acceptable only while non-terminal (rare post-A1).
    const board = page.getByTestId("trajectory-board");
    await expect(board).toBeVisible();
    const iq = await pollQualificationGetOnly(page.request, projectId, { maxSeconds: 20 });
    expect(["PROPOSED", "CLARIFICATION"]).toContain(iq?.status);
    expect(iq?.operationId).toBe(a1Terminal?.operationId);

    await openSurface(page, "travail");
    await expect(page.getByTestId("composer-lock-overlay")).toHaveCount(0);
    await expect(page.getByTestId("thread-draft").first()).toBeEditable({ timeout: 15000 });
    test.info().annotations.push({
      type: "note",
      description:
        "F PASS — UI observed without test POST reconcile; product client poll may still reconcile (PROCESS AUTONOMY NOT PROVEN)",
    });
  });
});
