import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";
import { bootstrapProjectFromPortfolio } from "./helpers/g4-chat-first";

/**
 * Ensemble 05 corrective — Travail avec Nora (FAKE/DEV lane :3101).
 * Viewer assertions are NON-OPTIONAL (P2-A). Progressive text NOT COVERED V1.
 */
test.describe("Ensemble 05 Travail avec Nora", () => {
  test("scroll, draft, typed choices, required viewer lifecycle", async ({ page }) => {
    test.setTimeout(180_000);
    const evidenceDir = path.resolve(
      __dirname,
      "../../docs/evidence/ensemble-05-travail-nora",
    );
    fs.mkdirSync(evidenceDir, { recursive: true });

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    const { projectId, preparationId } = await bootstrapProjectFromPortfolio(page, {
      seed: "Ensemble 05 fil Travail avec Nora",
      name: `E05 Travail ${Date.now()}`,
      summary: "e05 corrective",
    });
    expect(preparationId).toBeTruthy();

    // P2-A — seed a guaranteed document (test fails if create fails).
    const docRes = await page.request.post(`/api/preparations/${preparationId}/documents`, {
      data: {
        title: "Note E05 visionneuse",
        contentMarkdown: "# Note E05\n\nContenu déterministe pour la visionneuse Travail.",
        correlationKey: `e05-doc-${Date.now()}`,
      },
    });
    expect(docRes.ok()).toBeTruthy();

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const thread = page.getByTestId("nora-thread");
    const draft = page.getByTestId("thread-draft");
    const send = page.getByTestId("thread-send");

    await expect(thread).toBeVisible();
    const atBottom = await thread.evaluate((el) => {
      return el.scrollHeight - el.scrollTop - el.clientHeight < 80;
    });
    expect(atBottom).toBe(true);

    // CT-03 — draft persists across surface nav.
    const draftText = `Brouillon E05 conservé ${Date.now()}`;
    await draft.fill(draftText);
    await page.getByTestId("studio-rail").getByTestId("nav-documents").click();
    await expect(page).toHaveURL(/surface=document/);
    await page.getByTestId("studio-rail").getByTestId("nav-travail").click();
    await expect(page).toHaveURL(/surface=travail/);
    await expect(draft).toHaveValue(draftText);

    await page.reload();
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftText);

    await thread.evaluate((el) => {
      el.scrollTop = 0;
    });
    // Fixture with typed continueChoices (not clarifications-as-buttons).
    const choiceSeed =
      "J'aimerais créer un outil pour mieux accompagner les chefs de projet, mais je ne sais pas encore ce qu'il devrait faire exactement.";
    await draft.fill(choiceSeed);
    await send.click();
    await expect(
      page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
    ).toBeVisible({ timeout: 30000 });
    await expect
      .poll(async () =>
        thread.evaluate((el) => el.scrollHeight - el.scrollTop - el.clientHeight < 120),
      )
      .toBe(true);

    const actionable = page.locator(
      '[data-testid="nora-choices"][data-actionable="1"] [data-testid="nora-choice"]',
    );
    await expect(actionable.first()).toBeVisible({ timeout: 10000 });
    // Clarification questions must NOT appear as choice buttons.
    const choiceLabels = await actionable.allTextContents();
    expect(
      choiceLabels.some((t) => /Quelle difficulté concrète/i.test(t)),
    ).toBe(false);
    expect(
      choiceLabels.some((t) => /Approfondir|Autre approche/i.test(t)),
    ).toBe(true);

    const keep = `Draft intact pendant choix ${Date.now()}`;
    await draft.fill(keep);
    await actionable.first().click();
    await expect(
      page.getByTestId("nora-msg-pilot").filter({ hasText: /Approfondissons|Explore une autre/i }),
    ).toBeVisible({ timeout: 30000 });
    await expect(draft).toHaveValue(keep);
    await expect(
      page.locator('[data-testid="nora-choices"][data-actionable="0"]').first(),
    ).toBeVisible();

    // P2-A — viewer path REQUIRED (seeded document).
    const consulter = page.locator("[data-testid^=travail-consulter-]").first();
    await expect(consulter).toBeVisible({ timeout: 10000 });
    await consulter.click();
    await expect(page.getByTestId("travail-viewer")).toBeVisible();
    await expect(page.getByTestId("project-travail-stage")).toHaveAttribute(
      "data-travail-layout",
      "split",
    );
    expect(page.url()).not.toMatch(/viewer=/);
    await expect(page.getByTestId("travail-viewer-body")).toContainText("Note E05");
    await page.getByTestId("travail-viewer-enlarge").click();
    await expect(page.getByTestId("project-travail-stage")).toHaveAttribute(
      "data-travail-layout",
      "enlarged",
    );
    // T05 — conversation/composer must leave layout (no text bleed through viewer).
    await expect(page.getByTestId("nora-conversation-panel")).toBeHidden();
    await expect(page.getByTestId("nora-composer-stack")).toBeHidden();
    const panelDisplay = await page
      .getByTestId("nora-conversation-panel")
      .evaluate((el) => getComputedStyle(el).display);
    expect(panelDisplay).toBe("none");
    await expect(page.getByTestId("travail-viewer")).toBeVisible();
    await expect(page.getByTestId("travail-viewer-body")).toContainText("Note E05");
    await page.screenshot({
      path: path.join(evidenceDir, "runtime-viewer-enlarged-1440.png"),
      fullPage: false,
    });
    await page.getByTestId("travail-viewer-reduce").click();
    await expect(page.getByTestId("project-travail-stage")).toHaveAttribute(
      "data-travail-layout",
      "split",
    );
    await expect(page.getByTestId("nora-conversation-panel")).toBeVisible();
    await page.getByTestId("travail-viewer-close").click();
    await expect(page.getByTestId("travail-aside-bref")).toBeVisible();
    await expect(page.getByTestId("thread-draft")).toHaveValue(keep);

    await page.setViewportSize({ width: 1680, height: 970 });
    await page.screenshot({
      path: path.join(evidenceDir, "runtime-nominal-1680x970.png"),
      fullPage: false,
    });

    // Mobile capture
    await page.setViewportSize({ width: 430, height: 932 });
    await page.screenshot({
      path: path.join(evidenceDir, "runtime-mobile-430x932.png"),
      fullPage: false,
    });
  });

  test("C1 exact D4 revision — A cited, not silent latest B", async ({ page }) => {
    test.setTimeout(180_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { projectId, preparationId } = await bootstrapProjectFromPortfolio(page, {
      seed: "E05 C1 revision fidelity",
      name: `E05 C1 ${Date.now()}`,
      summary: "c1",
    });
    const stamp = Date.now();
    const create = await page.request.post(`/api/preparations/${preparationId}/documents`, {
      data: {
        title: "Note C1",
        contentMarkdown: `# Revision A ${stamp}\n\nContenu A exclusif.`,
        correlationKey: `e05-c1-a-${stamp}`,
      },
    });
    expect(create.ok()).toBeTruthy();
    const created = await create.json();
    const documentId = String(created.documentId);
    const revisionA = String(created.revisionId);
    expect(documentId).toBeTruthy();
    expect(revisionA).toBeTruthy();

    const revise = await page.request.post(
      `/api/preparations/${preparationId}/documents/${documentId}`,
      {
        data: {
          action: "revise",
          baseRevisionId: revisionA,
          contentMarkdown: `# Revision B ${stamp}\n\nContenu B exclusif — latest.`,
          correlationKey: `e05-c1-b-${stamp}`,
        },
      },
    );
    expect(revise.ok()).toBeTruthy();
    const revised = await revise.json();
    const revisionB = String(revised.revisionId ?? revised.revision?.id ?? "");
    expect(revisionB).toBeTruthy();
    expect(revisionB).not.toBe(revisionA);

    // D4 API authority: exact A ≠ latest B
    const getA = await page.request.get(
      `/api/preparations/${preparationId}/documents/${documentId}?revisionId=${encodeURIComponent(revisionA)}`,
    );
    expect(getA.ok()).toBeTruthy();
    const bodyA = await getA.json();
    expect(String(bodyA.revision?.contentMarkdown ?? "")).toContain(`Revision A ${stamp}`);
    expect(String(bodyA.revision?.contentMarkdown ?? "")).not.toContain(`Revision B ${stamp}`);

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const cite = `E05_CITE_REVISION documentId=${documentId} revisionId=${revisionA}`;
    await page.getByTestId("thread-draft").fill(cite);
    await page.getByTestId("thread-send").click();
    await expect(page.getByText(/révision documentaire citée/i)).toBeVisible({
      timeout: 30000,
    });
    const refLink = page.getByTestId("nora-ref-link").first();
    await expect(refLink).toBeVisible();

    // Race proof: open A, then quickly request B via current consulter — last wins; late A ignored by seq.
    await refLink.click();
    await expect(page.getByTestId("travail-viewer")).toBeVisible();
    await expect(page.getByTestId("travail-viewer-body")).toContainText(`Revision A ${stamp}`);
    await expect(page.getByTestId("travail-viewer-body")).not.toContainText(
      `Revision B ${stamp}`,
    );
    await expect(page.getByTestId("travail-viewer-revision")).toContainText(/révision citée/i);

    // Close then ensure closed stays closed even if we don't await stale fetch.
    await page.getByTestId("travail-viewer-close").click();
    await expect(page.getByTestId("travail-viewer")).toHaveCount(0);

    // Current (latest) path from En bref — live D4 revalidation, version courante.
    const consulter = page.locator(`[data-testid="travail-consulter-${documentId}"]`);
    await expect(consulter).toBeVisible();
    await consulter.click();
    await expect(page.getByTestId("travail-viewer-body")).toContainText(`Revision B ${stamp}`, {
      timeout: 15000,
    });
    await expect(page.getByTestId("travail-viewer-revision")).toContainText(/version courante/i);
    await expect(page.getByTestId("travail-viewer-body")).not.toContainText(`Revision A ${stamp}`);
  });

  test("C2 ACK lost on choice — single pilot turn, freeze, reconcile, draft kept", async ({
    page,
  }) => {
    test.setTimeout(180_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { projectId, preparationId } = await bootstrapProjectFromPortfolio(page, {
      seed: "E05 C2 ack lost",
      name: `E05 C2 ${Date.now()}`,
      summary: "c2",
    });
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const choiceSeed =
      "J'aimerais créer un outil pour mieux accompagner les chefs de projet, mais je ne sais pas encore ce qu'il devrait faire exactement.";
    await page.getByTestId("thread-draft").fill(choiceSeed);
    await page.getByTestId("thread-send").click();
    await expect(
      page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
    ).toBeVisible({ timeout: 30000 });

    const actionable = page.locator(
      '[data-testid="nora-choices"][data-actionable="1"] [data-testid="nora-choice"]',
    );
    await expect(actionable.first()).toBeVisible({ timeout: 10000 });

    // Free draft A written BEFORE clicking choice B — must survive reconcile.
    const freeDraft = `Je voudrais aussi étudier une approche différente ${Date.now()}`;
    await page.getByTestId("thread-draft").fill(freeDraft);
    await expect(page.getByTestId("thread-draft")).toHaveValue(freeDraft);

    let ackDropped = false;
    let serverOk = false;
    let capturedTurnKey: string | null = null;
    await page.route("**/api/preparations/*/messages", async (route) => {
      if (route.request().method() !== "POST") {
        await route.continue();
        return;
      }
      let post: { content?: string; clientTurnKey?: string } = {};
      try {
        post = route.request().postDataJSON() as {
          content?: string;
          clientTurnKey?: string;
        };
      } catch {
        post = {};
      }
      const isChoice =
        /Approfondissons le besoin|Explore une autre approche/i.test(post.content ?? "");
      const response = await route.fetch();
      const raw = await response.text();
      if (isChoice && response.ok() && !ackDropped) {
        serverOk = true;
        capturedTurnKey = post.clientTurnKey ?? null;
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

    await actionable.first().click();
    await expect(page.getByTestId("thread-nora-status")).toContainText(
      /ACK lost|ACK_LOST|échec|conservée/i,
      { timeout: 45000 },
    );
    expect(serverOk).toBe(true);
    expect(ackDropped).toBe(true);
    expect(capturedTurnKey).toBeTruthy();
    // Draft A still present after ACK loss (choice must not wipe it).
    await expect(page.getByTestId("thread-draft")).toHaveValue(freeDraft);

    // Choices stay frozen — no second independent click path.
    await expect(
      page.locator(
        '[data-testid="nora-choices"][data-actionable="1"] [data-testid="nora-choice"]',
      ),
    ).toHaveCount(0);

    await page.reload();
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    await expect(page.getByTestId("thread-draft")).toHaveValue(freeDraft);
    // Final B — reconciliation path is MANDATORY (not conditional).
    const reconcile = page.getByTestId("thread-reconcile-pending");
    await expect(reconcile).toBeVisible({ timeout: 20000 });
    await expect(reconcile).toBeEnabled();
    ackDropped = true; // already dropped once — subsequent POSTs pass through
    await reconcile.click();
    await expect(page.getByTestId("thread-nora-status")).toContainText(
      /COMPLETE|Nora deterministic-fixture/i,
      { timeout: 45000 },
    );
    await expect(page.getByTestId("thread-reconcile-pending")).toHaveCount(0, {
      timeout: 15000,
    });
    // Free draft A unchanged after reconcile of choice B.
    await expect(page.getByTestId("thread-draft")).toHaveValue(freeDraft);
    const stored = await page.evaluate(() => {
      for (let i = 0; i < sessionStorage.length; i += 1) {
        const k = sessionStorage.key(i);
        if (k && k.startsWith("sfia.travail.draft:v1:")) {
          return sessionStorage.getItem(k);
        }
      }
      return null;
    });
    expect(stored).toBeTruthy();
    expect(String(stored)).toContain(freeDraft);

    await expect(
      page.locator(
        '[data-testid="nora-choices"][data-actionable="1"] [data-testid="nora-choice"]',
      ),
    ).toHaveCount(0);

    const proj = await page.request.get(`/api/projects/${projectId}`);
    expect(proj.ok()).toBeTruthy();
    const pj = await proj.json();
    const pilotMsgs = (pj.messages ?? []).filter(
      (m: { role?: string; content?: string }) =>
        m.role === "user" || m.role === "pilot" || m.role === "PILOT",
    );
    const choiceMsgs = pilotMsgs.filter((m: { content?: string }) =>
      /Approfondissons le besoin|Explore une autre approche/i.test(m.content ?? ""),
    );
    expect(choiceMsgs.length).toBe(1);
    // Free draft was never transmitted as a pilot turn.
    expect(
      pilotMsgs.some((m: { content?: string }) => (m.content ?? "").includes(freeDraft)),
    ).toBe(false);
    expect(capturedTurnKey).toBeTruthy();
    await page.unrouteAll({ behavior: "ignoreErrors" });
    void preparationId;
  });

  test("composer ACK lost — newer draft survives reconcile", async ({ page }) => {
    test.setTimeout(180_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { projectId } = await bootstrapProjectFromPortfolio(page, {
      seed: "E05 composer ack draft",
      name: `E05 CDraft ${Date.now()}`,
      summary: "composer-draft",
    });
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const sentText = `Message libre C ${Date.now()}`;
    let ackDropped = false;
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
      if (!ackDropped && response.ok() && (post.content ?? "").includes("Message libre C")) {
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

    await page.getByTestId("thread-draft").fill(sentText);
    await page.getByTestId("thread-send").click();
    await expect(page.getByTestId("thread-nora-status")).toContainText(
      /ACK lost|ACK_LOST|échec|conservée/i,
      { timeout: 45000 },
    );

    const newer = `Nouvelle saisie D ${Date.now()}`;
    await page.getByTestId("thread-draft").fill(newer);
    await expect(page.getByTestId("thread-draft")).toHaveValue(newer);

    await page.reload();
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    await expect(page.getByTestId("thread-draft")).toHaveValue(newer);
    const reconcile = page.getByTestId("thread-reconcile-pending");
    await expect(reconcile).toBeVisible({ timeout: 20000 });
    await reconcile.click();
    await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE|Nora/i, {
      timeout: 45000,
    });
    await expect(page.getByTestId("thread-reconcile-pending")).toHaveCount(0, {
      timeout: 15000,
    });
    // Newer draft D must survive ACK of C.
    await expect(page.getByTestId("thread-draft")).toHaveValue(newer);

    const proj = await page.request.get(`/api/projects/${projectId}`);
    const pj = await proj.json();
    const cMsgs = (pj.messages ?? []).filter(
      (m: { role?: string; content?: string }) =>
        (m.role === "user" || m.role === "pilot") &&
        (m.content ?? "").includes("Message libre C"),
    );
    expect(cMsgs.length).toBe(1);
    await page.unrouteAll({ behavior: "ignoreErrors" });
  });

  test("T02 visual composition consolidation — ordered S1–S8 via real D3 path", async ({
    page,
  }) => {
    test.setTimeout(300_000);
    const evidenceDir = path.resolve(
      __dirname,
      "../../docs/evidence/ensemble-05-travail-nora",
    );
    fs.mkdirSync(evidenceDir, { recursive: true });

    // Short exact TEST_BOUNDARY keys (aliases of the natural S1–S8 utterances).
    const E05_S1_SIMPLE = "E05_S1_SIMPLE";
    const E05_S2_DIAGNOSTIC = "E05_S2_DIAGNOSTIC";
    const E05_S3_COMPARISON = "E05_S3_COMPARISON";
    const E05_S4_TRAJECTORY = "E05_S4_TRAJECTORY";
    const E05_S5_COMPOSITE = "E05_S5_COMPOSITE";
    const E05_S7_INSUFFICIENT = "E05_S7_INSUFFICIENT";

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { projectId } = await bootstrapProjectFromPortfolio(page, {
      seed: "E05 visual grammar consolidation",
      name: `E05 Visual ${Date.now()}`,
      summary: "visual-consolidation",
    });
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const draft = page.getByTestId("thread-draft");
    const send = page.getByTestId("thread-send");

    async function ask(text: string) {
      await draft.fill(text);
      await send.click();
      await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE|Nora/i, {
        timeout: 45000,
      });
    }

    // S1 — simple text, no graphic composition (UX-NORA-01).
    await ask(E05_S1_SIMPLE);
    const s1 = page.getByTestId("nora-msg-assistant").last();
    await expect(s1).toContainText(/observation/i);
    await expect(s1).toContainText(/hypoth/i);
    await expect(page.getByTestId("nora-visual-composition")).toHaveCount(0);
    await expect(page.getByTestId("nora-choices")).toHaveCount(0);
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.screenshot({
      path: path.join(evidenceDir, "runtime-s1-simple-1440.png"),
      fullPage: false,
    });

    // S2 — diagnostic / relations, semantic icons, no invented causality.
    await ask(E05_S2_DIAGNOSTIC);
    await expect(page.getByTestId("nora-visual-relations")).toBeVisible({ timeout: 45000 });
    await expect(page.getByTestId("nora-visual-icon").first()).toBeVisible();
    await expect(page.getByTestId("nora-visual-composition").last()).toHaveAttribute(
      "data-owns-body",
      "1",
    );
    await page.screenshot({
      path: path.join(evidenceDir, "runtime-s2-diagnostic-1440.png"),
      fullPage: false,
    });

    // S3 — comparison + recommendation + choice/ref anchors + provenance P1-B.
    await ask(E05_S3_COMPARISON);
    const s3 = page.getByTestId("nora-msg-assistant").last();
    await expect(s3.getByTestId("nora-visual-comparison")).toBeVisible({
      timeout: 45000,
    });
    await expect(s3.getByTestId("nora-visual-recommendation")).toBeVisible();
    await expect(s3.getByTestId("nora-choices")).toBeVisible();
    // Canonical provenance → consultable link; invented / label-only → descriptive.
    // V03 — same canonical ref not repeated as a second Consulter via refs anchor.
    const prov = s3.getByTestId("nora-visual-provenance");
    await expect(prov).toBeVisible();
    await expect(prov.locator('[data-consultable="1"]')).toHaveCount(1);
    await expect(prov.locator('[data-consultable="0"]')).toHaveCount(2);
    await expect(prov.getByText(/mention descriptive/i).first()).toBeVisible();
    await expect(s3.getByTestId("nora-visual-prov-link")).toHaveCount(1);
    await expect(s3.getByTestId("nora-ref-link")).toHaveCount(0);
    await expect(s3.getByText(/Consulter · Note de cadrage coordination/i)).toHaveCount(1);
    await page.screenshot({
      path: path.join(evidenceDir, "runtime-visual-comparison-1440.png"),
      fullPage: false,
    });
    await page.screenshot({
      path: path.join(evidenceDir, "runtime-s3-provenance-1440.png"),
      fullPage: false,
    });

    // S4 — trajectory / sequence with human-readable dependencies (V02).
    await ask(E05_S4_TRAJECTORY);
    const s4 = page.getByTestId("nora-msg-assistant").last();
    await expect(s4.getByTestId("nora-visual-sequence")).toBeVisible({
      timeout: 45000,
    });
    await expect(s4.getByTestId("nora-visual-step-deps").first()).toContainText(
      /Partager le constat/i,
    );
    await expect(s4.getByTestId("nora-visual-step-deps").first()).not.toContainText(/\bt1\b/);
    await page.screenshot({
      path: path.join(evidenceDir, "runtime-s4-trajectory-1440.png"),
      fullPage: false,
    });

    // S7 — insufficient quantitative data → no fake chart / no new composition.
    const cmpBeforeS7 = await page.getByTestId("nora-visual-comparison").count();
    await ask(E05_S7_INSUFFICIENT);
    await expect(page.getByTestId("nora-msg-assistant").last()).toContainText(/trompeur/i);
    await expect(page.getByTestId("nora-visual-comparison")).toHaveCount(cmpBeforeS7);
    await expect(page.getByTestId("nora-msg-assistant").last().getByTestId("nora-visual-composition")).toHaveCount(0);

    // S5 composite (ordered blocks + choice anchors).
    await ask(E05_S5_COMPOSITE);
    const lastNora = page.getByTestId("nora-msg-assistant").last();
    const composite = lastNora.getByTestId("nora-visual-composition");
    await expect(composite).toBeVisible({ timeout: 45000 });
    await expect(lastNora.getByTestId("nora-visual-synthesis")).toBeVisible();
    await expect(lastNora.getByTestId("nora-visual-comparison")).toBeVisible();
    await expect(lastNora.getByTestId("nora-choices")).toBeVisible();
    // V01 — no literal markdown markers in structured recommendation.
    const rec = lastNora.getByTestId("nora-visual-recommendation");
    await expect(rec).toBeVisible();
    await expect(rec).not.toContainText(/\*\*/);
    await expect(rec.locator("strong")).toHaveCount(1);

    // DOM order must match composition order (text → synthesis → … → comparison → … → choices).
    const kinds = await composite.locator("[data-block-kind]").evaluateAll((els) =>
      els.map((el) => el.getAttribute("data-block-kind")),
    );
    expect(kinds[0]).toBe("text");
    expect(kinds).toContain("synthesis");
    expect(kinds).toContain("comparison");
    expect(kinds[kinds.length - 1]).toBe("choices");
    const synIdx = kinds.indexOf("synthesis");
    const cmpIdx = kinds.indexOf("comparison");
    expect(synIdx).toBeGreaterThan(-1);
    expect(cmpIdx).toBeGreaterThan(synIdx);
    await expect(composite).toHaveAttribute("data-owns-body", "1");

    await page.screenshot({
      path: path.join(evidenceDir, "runtime-s5-composite-1440.png"),
      fullPage: false,
    });

    // S6 — free draft preserved across choice transmit; prior choices expire after send.
    const freeDraft = `BROUILLON_LIBRE_S6_${Date.now()}`;
    await draft.fill(freeDraft);
    await expect(draft).toHaveValue(freeDraft);
    const s5Msg = page
      .getByTestId("nora-msg-assistant")
      .filter({ has: page.getByTestId("nora-visual-synthesis") })
      .filter({ has: page.getByTestId("nora-visual-comparison") })
      .last();
    const choice = s5Msg.getByTestId("nora-choice").first();
    await expect(choice).toBeEnabled();
    await choice.click();
    await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE|Nora|PENDING|ACK/i, {
      timeout: 45000,
    });
    await expect(draft).toHaveValue(freeDraft);

    // S8 — refresh preserves composite order; mobile reflow.
    await page.reload();
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    const afterReload = page
      .getByTestId("nora-msg-assistant")
      .filter({ has: page.getByTestId("nora-visual-synthesis") })
      .filter({ has: page.getByTestId("nora-visual-comparison") })
      .last()
      .getByTestId("nora-visual-composition");
    await expect(afterReload).toBeVisible({ timeout: 20000 });
    const kindsReload = await afterReload.locator("[data-block-kind]").evaluateAll((els) =>
      els.map((el) => el.getAttribute("data-block-kind")),
    );
    expect(kindsReload.indexOf("synthesis")).toBeLessThan(kindsReload.indexOf("comparison"));
    expect(kindsReload[kindsReload.length - 1]).toBe("choices");

    await page.setViewportSize({ width: 430, height: 932 });
    await expect(afterReload).toBeVisible();
    await page.screenshot({
      path: path.join(evidenceDir, "runtime-s5-composite-mobile-430.png"),
      fullPage: false,
    });
  });

  test("C3 same-tab logout/identity switch purges draft", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { projectId } = await bootstrapProjectFromPortfolio(page, {
      seed: "E05 C3 same tab",
      name: `E05 C3 ${Date.now()}`,
      summary: "c3",
    });
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    const secret = `SECRET_SAME_TAB_${Date.now()}`;
    await page.getByTestId("thread-draft").fill(secret);
    await expect(page.getByTestId("thread-draft")).toHaveValue(secret);

    // Explicit identity switch in the SAME tab (sessionStorage persists across nav).
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote B (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect
      .poll(async () => {
        const state = await page
          .getByTestId("project-load-state")
          .getAttribute("data-project-load-state")
          .catch(() => null);
        const unavailable = await page.getByTestId("project-unavailable").count();
        return state === "ready" || unavailable > 0;
      }, { timeout: 25000 })
      .toBe(true);
    const draft = page.getByTestId("thread-draft");
    if (await draft.count()) {
      await expect(draft).not.toHaveValue(secret);
    }
    // Draft keys must be gone from sessionStorage after login purge.
    const leftover = await page.evaluate(() => {
      const keys: string[] = [];
      for (let i = 0; i < sessionStorage.length; i += 1) {
        const k = sessionStorage.key(i);
        if (k && k.startsWith("sfia.travail.draft:v1:")) keys.push(k);
      }
      return keys.length;
    });
    expect(leftover).toBe(0);
  });

  test("P2-B draft isolation across pilots", async ({ page, browser }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { projectId } = await bootstrapProjectFromPortfolio(page, {
      seed: "E05 draft isolation A",
      name: `E05 Draft A ${Date.now()}`,
      summary: "isolation",
    });
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    const secret = `SECRET_PILOT_A_${Date.now()}`;
    await page.getByTestId("thread-draft").fill(secret);
    await expect(page.getByTestId("thread-draft")).toHaveValue(secret);

    // Separate browser context ⇒ distinct cookies + sessionStorage (P2-B).
    const ctxB = await browser.newContext();
    const pageB = await ctxB.newPage();
    try {
      await pageB.goto("/login");
      await pageB.getByRole("button", { name: "Pilote B (DEV)" }).click();
      await pageB.waitForURL("**/portfolio");
      await pageB.goto(`/projects/${projectId}?surface=travail`);
      // Owner isolation: 404 unavailable OR ready without A's draft.
      await expect
        .poll(async () => {
          const state = await pageB
            .getByTestId("project-load-state")
            .getAttribute("data-project-load-state")
            .catch(() => null);
          const unavailable = await pageB.getByTestId("project-unavailable").count();
          return state === "ready" || unavailable > 0;
        }, { timeout: 25000 })
        .toBe(true);
      const draftB = pageB.getByTestId("thread-draft");
      if (await draftB.count()) {
        await expect(draftB).not.toHaveValue(secret);
      }
    } finally {
      await ctxB.close();
    }
  });
});
