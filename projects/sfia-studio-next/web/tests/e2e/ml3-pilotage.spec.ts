import { test, expect } from "@playwright/test";
import path from "path";
import { bootstrapProjectFromPortfolio } from "./helpers/g4-chat-first";

/**
 * ML3 browser FAKE — pilotage surfaces. LIVE Nora forbidden in E2E.
 * Does not claim pixel-perfect Figma conformity.
 */
test("ML3 pilotage: projet sans cycle → ouverture → cycle ACTIVE visible", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await bootstrapProjectFromPortfolio(page, {
    seed: "ML3 e2e seed",
    name: "Projet ML3 Pilotage",
    summary: "e2e ml3",
  });

  await page.getByRole("button", { name: "Pilotage" }).click();
  await expect(page.getByTestId("pilotage-panel")).toBeVisible();
  await expect(page.getByTestId("cycle-absent")).toBeVisible();
  await expect(page.getByTestId("method-absent")).toBeVisible();

  await page.getByLabel("Énoncé GO").fill("ouvre le cycle cadrage");
  await page.getByTestId("open-cycle").click();
  await expect(page.getByTestId("pilotage-pending")).toBeVisible();
  await expect(page.getByTestId("cycle-active")).toBeVisible({ timeout: 15000 });
  await expect(page.getByRole("heading", { name: /Cycle CADRAGE/ })).toBeVisible();
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/);
  await expect(page.getByTestId("decision-state").first()).toContainText("APPLICABLE");

  await page.getByTestId("close-cycle").click();
  await expect(page.getByTestId("cycle-absent")).toBeVisible({ timeout: 15000 });
  await page.getByLabel("Énoncé GO").fill("");
  await page.getByLabel("Type de cycle").selectOption("UX_UI");
  await page.getByTestId("open-cycle").click();
  await expect(page.getByRole("heading", { name: /Cycle UX_UI/ })).toBeVisible({ timeout: 15000 });
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/);

  await page.getByTestId("choose-method").click();
  await expect(page.getByTestId("method-retained")).toBeVisible({ timeout: 15000 });

  const shot = path.join("tests/e2e/artifacts", `ml3-pilotage-${Date.now()}.png`);
  await page.screenshot({ path: shot, fullPage: true });
});

/**
 * B13 C02 — browser FAKE: RESTRICTION shows authority-block-established;
 * HUMAN_INTENT conflict must NOT show authority-block-established.
 * Pixel Figma: NOT VERIFIED.
 */
test("ML3 B13 C02: motif RESTRICTION vs conflit technique HUMAN_INTENT", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await bootstrapProjectFromPortfolio(page, {
    seed: "ML3 B13 C02 seed",
    name: "Projet ML3 B13 C02",
    summary: "e2e b13 c02",
  });

  await page.getByRole("button", { name: "Pilotage" }).click();
  await expect(page.getByTestId("b13-authority-legend")).toBeVisible();

  // Global cycle restriction → OPEN rejected with RESTRICTION (authority).
  await page.getByTestId("apply-cycle-restriction").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/, {
    timeout: 15000,
  });
  await page.getByTestId("open-cycle").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/REJECTED.*RESTRICTION|RESTRICTION/, {
    timeout: 15000,
  });
  await expect(page.getByTestId("authority-block-established")).toBeVisible();
  await expect(page.getByTestId("authority-block-established")).toContainText(/Restriction D6/i);

  // Lift restriction, open cycle (APPLIED — no false authority block).
  await page.getByRole("button", { name: "Lever" }).first().click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/, {
    timeout: 15000,
  });
  await page.getByLabel("Énoncé GO").fill("");
  await page.getByTestId("open-cycle").click();
  await expect(page.getByTestId("cycle-active")).toBeVisible({ timeout: 15000 });
  await expect(page.getByTestId("outcome-applied")).toBeVisible();
  await expect(page.getByTestId("authority-block-established")).toHaveCount(0);

  // Controlled CONFLICT+HUMAN_INTENT response → technical motif, never authority-block.
  // (UI open-cycle is hidden while ACTIVE; choose-method is the reachable pilot action.)
  await page.route("**/api/projects/*/pilotage/commands", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        status: "CONFLICT",
        reasonCode: "HUMAN_INTENT",
        reason: "Intention humaine déjà enregistrée",
        commandId: "bcmd_e2e_c02_human_intent",
        revision: null,
      }),
    });
  });
  await page.getByTestId("choose-method").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/CONFLICT.*HUMAN_INTENT|HUMAN_INTENT/, {
    timeout: 15000,
  });
  await expect(page.getByTestId("outcome-technical-human_intent")).toBeVisible();
  await expect(page.getByTestId("outcome-technical-human_intent")).toContainText(/Intention humaine/i);
  await expect(page.getByTestId("authority-block-established")).toHaveCount(0);
});

/**
 * B13 R1 — rendered UX: prior RESTRICTION must not remain under a new UNKNOWN/APPLIED result.
 * Observes PilotagePanel motifs, not only qualifyCommandOutcome unit calls.
 */
test("ML3 B13 R1: motif périmé effacé après UNKNOWN puis APPLIED", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await bootstrapProjectFromPortfolio(page, {
    seed: "ML3 B13 R1 seed",
    name: "Projet ML3 B13 R1",
    summary: "e2e b13 r1",
  });

  await page.getByRole("button", { name: "Pilotage" }).click();
  await page.getByTestId("apply-cycle-restriction").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/, {
    timeout: 15000,
  });
  await page.getByTestId("open-cycle").click();
  await expect(page.getByTestId("authority-block-established")).toBeVisible({ timeout: 15000 });

  // RESTRICTION → network loss on next command → UNKNOWN (no stale authority motif).
  await page.route("**/api/projects/*/pilotage/commands", async (route) => {
    if (route.request().method() === "POST") {
      await route.abort("failed");
      return;
    }
    await route.continue();
  });
  // also abort by-key reconcile fetches so resolveUnknown stays UNKNOWN
  await page.route("**/api/projects/*/pilotage/commands/**", async (route) => {
    await route.abort("failed");
  });
  await page.getByTestId("choose-method").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/UNKNOWN/i, { timeout: 15000 });
  await expect(page.getByTestId("outcome-unknown")).toBeVisible();
  await expect(page.getByTestId("authority-block-established")).toHaveCount(0);

  // UNKNOWN → controlled APPLIED on a new attempt → outcome-applied, still no authority-block.
  await page.unroute("**/api/projects/*/pilotage/commands");
  await page.unroute("**/api/projects/*/pilotage/commands/**");
  await page.route("**/api/projects/*/pilotage/commands", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        status: "APPLIED",
        reasonCode: null,
        reason: null,
        commandId: "bcmd_e2e_r1_applied",
        revision: 99,
      }),
    });
  });
  // Change method version so signature differs from the UNKNOWN pending record.
  await page.getByLabel("Version").fill("2.6-r1");
  await page.getByTestId("choose-method").click();
  await expect(page.getByTestId("outcome-applied")).toBeVisible({ timeout: 15000 });
  await expect(page.getByTestId("authority-block-established")).toHaveCount(0);
  await expect(page.getByTestId("outcome-unknown")).toHaveCount(0);
});

/**
 * F01 — GO naturel depuis le fil projet principal (pas le bouton PilotagePanel).
 * Pixel Figma: NOT VERIFIED.
 */
test("ML3 F01: GO naturel depuis le fil ouvre un cycle ACTIVE", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await bootstrapProjectFromPortfolio(page, {
    seed: "ML3 F01 thread seed",
    name: "Projet ML3 F01 Fil",
    summary: "e2e f01 thread",
  });

  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByLabel("Message à Nora").fill("Ouvre le cycle cadrage.");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByTestId("thread-nora-status")).toContainText(/OPEN_CYCLE|APPLIED/i, {
    timeout: 30000,
  });
  await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE|deterministic/i, {
    timeout: 30000,
  });

  await page.getByRole("button", { name: "Pilotage" }).click();
  await expect(page.getByTestId("cycle-active")).toBeVisible({ timeout: 15000 });
  await expect(page.getByRole("heading", { name: /Cycle CADRAGE/ })).toBeVisible();
  await expect(page.getByTestId("decision-state").first()).toContainText("APPLICABLE");
});

/**
 * F02 — décision documentaire depuis le fil + révision via Journal.
 */
test("ML3 F02: RECORD depuis le fil puis révision Journal", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await bootstrapProjectFromPortfolio(page, {
    seed: "ML3 F02 seed",
    name: "Projet ML3 F02 Décisions",
    summary: "e2e f02",
  });

  await page.getByRole("button", { name: "Travail" }).click();
  await page
    .getByLabel("Message à Nora")
    .fill("Je décide que la connexion GitHub est obligatoire pour ce projet.");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByTestId("thread-nora-status")).toContainText(
    /RECORD_DECISION|APPLIED|décision/i,
    { timeout: 30000 },
  );

  await page.getByRole("button", { name: "Pilotage" }).click();
  await expect(page.getByTestId("decision-state").first()).toContainText(/RECORD_DECISION.*APPLICABLE/i, {
    timeout: 15000,
  });
  await page.getByTestId("journal-revise-open").first().click();
  await page.getByTestId("journal-revise-draft").fill("La connexion GitHub est facultative pour ce projet.");
  await page.getByTestId("journal-revise-submit").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/, {
    timeout: 15000,
  });
  await expect(page.getByText(/facultative/i).first()).toBeVisible({ timeout: 10000 });
});

/**
 * C03 — Journal >8: newest visible by default; full history via expand.
 * Seeds via D6 API (not the fil loop) to avoid stale status races.
 */
test("ML3 C03: Journal décisions >8 avec historique accessible", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await bootstrapProjectFromPortfolio(page, {
    seed: "ML3 C03 journal seed",
    name: "Projet ML3 C03 Journal",
    summary: "e2e c03",
  });

  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  let revision = 0;
  for (let i = 0; i < 12; i += 1) {
    const actInstanceId = `c03-act-${i}-${Date.now()}`;
    const res = await page.request.post(`/api/projects/${projectId}/pilotage/commands`, {
      data: {
        clientCommandKey: `c03-cmd-${actInstanceId}`,
        expectedRevision: revision,
        operation: "RECORD_DECISION",
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: `ui:RECORD:${actInstanceId}`,
        actInstanceId,
        objectRef: `c03-obj-${i}`,
        statement: `Décision documentaire C03-${i} obligatoire pour ce projet.`,
      },
    });
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body.status).toMatch(/APPLIED|ALREADY_APPLIED/);
    revision = body.revision ?? revision + 1;
  }

  await page.getByRole("button", { name: "Pilotage" }).click();
  await expect(page.getByTestId("journal-count")).toContainText(/1[0-9] décision/i, {
    timeout: 15000,
  });
  await expect(page.getByText(/C03-11/i).first()).toBeVisible();
  await page.getByTestId("journal-expand").click();
  await expect(page.getByText(/C03-0/i).first()).toBeVisible({ timeout: 10000 });
  await expect(page.getByTestId("decision-row")).toHaveCount(12, { timeout: 5000 });
});

/**
 * CR-02 — ACK perdu après effet D6 APPLIED :
 * serveur committe → réponse HTTP interceptée → reload → réconciliation → pas de double effet.
 */
test("ML3 CR-02: ACK perdu puis reload sans double OPEN_CYCLE", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await bootstrapProjectFromPortfolio(page, {
    seed: "ML3 CR-02 ACK seed",
    name: "Projet ML3 CR-02 ACK",
    summary: "e2e cr02 ack",
  });

  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();

  let ackDropped = false;
  let serverApplied = false;
  await page.route("**/api/preparations/*/messages", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    let post: { content?: string } = {};
    try {
      post = route.request().postDataJSON() as { content?: string };
    } catch {
      post = {};
    }
    const response = await route.fetch();
    const raw = await response.text();
    let body: Record<string, unknown> = {};
    try {
      body = JSON.parse(raw) as Record<string, unknown>;
    } catch {
      body = {};
    }
    const effect = body.pilotageEffect as { status?: string } | undefined;
    const applied =
      response.ok() &&
      (body.humanDecisionCreated === true ||
        (typeof effect?.status === "string" && /APPLIED/i.test(effect.status)));
    // Drop ACK only for the OPEN GO after the server has committed the effect.
    if (
      !ackDropped &&
      applied &&
      /ouvre le cycle cadrage/i.test(post.content ?? "")
    ) {
      serverApplied = true;
      ackDropped = true;
      await route.fulfill({
        status: 502,
        contentType: "application/json",
        body: JSON.stringify({
          errorCategory: "ACK_LOST_SIM",
          error: "ACK lost after server commit",
        }),
      });
      return;
    }
    await route.fulfill({
      status: response.status(),
      headers: response.headers(),
      body: raw,
    });
  });

  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByLabel("Message à Nora").fill("Ouvre le cycle cadrage.");
  await page.getByTestId("thread-send").click();
  await expect(page.getByTestId("thread-nora-status")).toContainText(/ACK lost|ACK_LOST|échec|conservée/i, {
    timeout: 45000,
  });
  expect(serverApplied).toBe(true);
  expect(ackDropped).toBe(true);
  await expect(page.getByTestId("thread-pending-banner")).toBeVisible();
  // Distinct new act must not silently overwrite the unresolved pending.
  await page.getByLabel("Message à Nora").fill("Je décide que GitHub est obligatoire pour ce projet.");
  await page.getByTestId("thread-send").click();
  await expect(page.getByTestId("thread-nora-status")).toContainText(/non résolue|réconcilier/i, {
    timeout: 10000,
  });
  await expect(page.getByTestId("thread-pending-banner")).toBeVisible();

  await page.reload();
  await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
  await page.getByTestId("thread-reconcile-pending").click();
  await expect(page.getByTestId("thread-nora-status")).toContainText(/APPLIED|ALREADY_APPLIED|OPEN_CYCLE|ACTIVE/i, {
    timeout: 30000,
  });

  const pilotage = await page.request.get(`/api/projects/${projectId}/pilotage`);
  expect(pilotage.ok()).toBeTruthy();
  const pj = await pilotage.json();
  const cycle = pj.pilotage?.cycle ?? pj.cycle;
  expect(cycle?.status).toBe("ACTIVE");
  expect(cycle?.cycleType).toBe("CADRAGE");

  // Second reconcile / retry must not open another cycle.
  const decisions = await page.request.get(`/api/projects/${projectId}/decisions`);
  expect(decisions.ok()).toBeTruthy();
  const dj = await decisions.json();
  const opens = (dj.decisions ?? []).filter(
    (d: { kind: string; state: string }) =>
      d.kind === "OPEN_CYCLE" && (d.state === "APPLICABLE" || d.state === "SUPERSEDED"),
  );
  expect(opens.filter((d: { state: string }) => d.state === "APPLICABLE").length).toBeLessThanOrEqual(1);
  await page.unrouteAll({ behavior: "ignoreErrors" });
});
