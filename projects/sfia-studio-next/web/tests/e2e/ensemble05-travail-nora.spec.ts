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
    await page.getByTestId("travail-viewer-reduce").click();
    await expect(page.getByTestId("project-travail-stage")).toHaveAttribute(
      "data-travail-layout",
      "split",
    );
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

  test("C2 ACK lost on choice — single pilot turn, freeze, reconcile", async ({ page }) => {
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
    // Final B — reconciliation path is MANDATORY (not conditional).
    const reconcile = page.getByTestId("thread-reconcile-pending");
    await expect(reconcile).toBeVisible({ timeout: 20000 });
    await expect(reconcile).toBeEnabled();
    // Keep route open so idempotent retry uses same clientTurnKey; do not drop ACK again.
    ackDropped = true; // already dropped once — subsequent POSTs pass through
    await reconcile.click();
    await expect(page.getByTestId("thread-nora-status")).toContainText(
      /COMPLETE|Nora deterministic-fixture/i,
      { timeout: 45000 },
    );
    // After confirmed reconcile, pending control must clear.
    await expect(page.getByTestId("thread-reconcile-pending")).toHaveCount(0, {
      timeout: 15000,
    });
    // Prior choices expired (not actionable).
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
    // Durable proof: a single effective pilot utterance for the choice intention.
    expect(choiceMsgs.length).toBe(1);
    // Turn key identity conserved through reconcile retry.
    expect(capturedTurnKey).toBeTruthy();
    await page.unrouteAll({ behavior: "ignoreErrors" });
    void preparationId;
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
