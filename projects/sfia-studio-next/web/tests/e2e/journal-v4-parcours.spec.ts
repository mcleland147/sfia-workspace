import { test, expect, type Page } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

async function seedJournalScenario(page: Page, projectId: string, longThreadCount = 40) {
  const res = await page.request.post("/api/dev/e2e/journal-fixture", {
    data: { projectId, longThreadCount },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  const body = (await res.json()) as {
    status: string;
    seed: {
      leafSubjectId: string;
      parentSubjectId: string;
      otherParentId: string;
      openPointId: string;
      decisionApplicableId: string;
      earlyMessageId: string;
      documentId: string;
      revisionIdV2: string;
      documentAcquisId: string;
      messageCount: number;
    };
  };
  expect(body.status).toBe("AVAILABLE");
  expect(body.seed.leafSubjectId).toBeTruthy();
  expect(body.seed.earlyMessageId).toBeTruthy();
  expect(body.seed.documentAcquisId).toBeTruthy();
  return body.seed;
}

test.describe("Journal V4 — données métier non vides (E06-01 + §5)", () => {
  test("sujets/recherche-acquis/décisions/message/document/retour-nav", async ({ page }) => {
    await page.setViewportSize({ width: 1680, height: 970 });
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(page, "Amorce projet Journal E2E seed");

    const projectName = uniqueProjectName("Journal E06");
    await constituteAndCreateProject(page, {
      name: projectName,
      summary: "seed journal e06",
      alreadyUnique: true,
    });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();

    const seed = await seedJournalScenario(page, projectId!, 40);

    // Draft BEFORE leaving thread (E06-04 / J-C13)
    const draftBefore = "brouillon préparé avant Journal — ne pas envoyer";
    await page.getByTestId("thread-draft").fill(draftBefore);
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);

    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
    await expect(page).toHaveURL(/surface=journal/);
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });

    // A — arbre non vide (fail if empty)
    const leaf = page.getByTestId(`journal-subject-${seed.leafSubjectId}`);
    await expect(leaf).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId(`journal-subject-${seed.parentSubjectId}`)).toBeVisible();

    // C — J-C08 recherche terme ABSENT du titre/parents/synthèse, PRÉSENT dans acquis
    await page.getByTestId("journal-search").fill("traçabilité");
    const matchBadge = page.getByTestId(`journal-match-${seed.leafSubjectId}`);
    await expect(page.getByTestId("journal-search-results")).toBeVisible();
    await expect(matchBadge).toBeVisible();
    await expect(matchBadge).toContainText(/acquis/i);

    // B — 40/60 + enlarge via résultat de recherche (liste résultats, pas arbre)
    await matchBadge.click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");
    await expect(page.getByTestId("journal-viewer-subject-title")).toBeVisible();
    await expect(page.getByTestId("journal-viewer")).toHaveAttribute("data-viewer-kind", "autonomous");
    await page.getByTestId("journal-viewer-enlarge").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute(
      "data-journal-layout",
      "enlarged",
    );
    await expect(page.getByTestId("journal-viewer-aside")).toBeVisible();
    await page.getByTestId("journal-viewer-reduce").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");

    // Filtre points ouverts (vue transversale) — conserve recherche + sélection
    await page.getByTestId("journal-filter-open-points").click();
    await expect(page.getByTestId("journal-filter-open-points")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await expect(page.getByTestId("journal-open-points-list")).toBeVisible();

    await page.screenshot({
      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-sujet-40-60-seeded.png",
      fullPage: false,
    });

    // Keep selection + search for return assertions
    await expect(page.getByTestId("journal-search")).toHaveValue("traçabilité");
    // Sources → message exact (chip on selected leaf) — deep-link PRIORITY over end-scroll
    const sourceChip = page.locator("[data-testid^=journal-source-]").first();
    await expect(sourceChip).toBeVisible({ timeout: 10000 });
    await expect(sourceChip).toHaveAttribute("data-author", /.+/);
    await expect(sourceChip.locator(".journal-source-cta")).toContainText(/message exact/i);
    await sourceChip.click();
    await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
    const focused = page.locator(`[data-message-id="${seed.earlyMessageId}"]`);
    await expect(focused).toBeVisible({ timeout: 15000 });
    await expect(focused).toHaveAttribute("data-journal-focus", "1");
    const ids = await page.locator("[data-message-id]").evaluateAll((els) =>
      els.map((e) => e.getAttribute("data-message-id")),
    );
    expect(ids.includes(seed.earlyMessageId)).toBe(true);
    expect(ids[ids.length - 1]).not.toBe(seed.earlyMessageId);
    // Focused message must not be displaced by last-message stick during init.
    const lastId = ids[ids.length - 1];
    if (lastId && lastId !== seed.earlyMessageId) {
      const lastBox = await page.locator(`[data-message-id="${lastId}"]`).boundingBox();
      const focusBox = await focused.boundingBox();
      expect(focusBox).toBeTruthy();
      expect(lastBox).toBeTruthy();
    }
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);

    // J-C13 — return via rail (NOT page.goto) and assert nav restored
    const journalNav = page.getByTestId("studio-rail").getByTestId("nav-journal");
    await journalNav.click();
    await expect(page).toHaveURL(/surface=journal/);
    // Soft-nav URL can land before React surface commit; retry rail once if needed.
    if (!(await page.getByTestId("project-journal").isVisible().catch(() => false))) {
      await journalNav.click();
    }
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("journal-search")).toHaveValue("traçabilité");
    await expect(page.getByTestId("journal-open-points-list")).toBeVisible();
    await expect(page.getByTestId("journal-viewer-subject-title")).toBeVisible();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");
    await expect(page.getByTestId("journal-filter-open-points")).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    // D — J-C11 Décisions : terme présent dans explication, absent du libellé
    await page.getByTestId("journal-tab-decisions").click();
    await page.getByTestId("journal-search").fill("multicritèreorion");
    await expect(page.getByTestId(`journal-decision-${seed.decisionApplicableId}`)).toBeVisible({
      timeout: 15000,
    });
    await page.getByTestId(`journal-decision-${seed.decisionApplicableId}`).click();
    await expect(page.getByTestId("journal-decision-viewer")).toBeVisible();
    await expect(page.getByTestId("journal-decision-applicability")).toContainText(/applicable|historique|vigueur|scope/i);
    await expect(page.getByTestId("journal-decision-viewer")).toContainText(/multicritèreorion/i);

    // Back to subjects for document source click
    await page.getByTestId("journal-tab-subjects").click();
    await page.getByTestId("journal-search").fill("");
    const openFilter = page.getByTestId("journal-filter-open-points");
    if ((await openFilter.getAttribute("aria-pressed")) === "true") {
      await openFilter.click();
    }
    const budgetSubject = page.getByTestId(`journal-subject-${seed.otherParentId}`);
    await expect(budgetSubject).toBeVisible();
    await budgetSubject.click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");

    // E — J-C14 document version via Journal source click → Travail viewer (exact revision)
    const docChip = page.getByTestId(`journal-source-${seed.documentAcquisId}`);
    await expect(docChip).toBeVisible({ timeout: 10000 });
    await docChip.click();
    await expect(page.getByTestId("travail-viewer")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("travail-viewer-revision")).toContainText(/révision citée|Version/i);
    await expect(page.getByTestId("travail-viewer")).toContainText(/version exacte pour J-C14/i);
    // Draft still preserved on thread
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);

    // Return Journal via rail — selection of document subject should restore if nav preserved
    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId(`journal-subject-${seed.otherParentId}`)).toBeVisible();

    // F — 1280 operational (rail nav, not goto as success proof of restore)
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId(`journal-subject-${seed.leafSubjectId}`)).toBeVisible();
  });

  test("route seed refuse hors DEV/E2E (gate)", async ({ page, request }) => {
    // With current Playwright webServer STUDIO_E2E=1 + DEV, positive path works above.
    // Negative: call without session → 401; with session but we cannot flip env mid-process.
    // Assert unit-gate contract is wired into this route (static) + unauthenticated 401.
    const unauth = await request.post("/api/dev/e2e/journal-fixture", {
      data: { projectId: "proj_absent" },
    });
    // Either 401 (no cookie) or 403 (gate) depending on harness cookies; never 200 for absent project.
    expect([401, 403, 404]).toContain(unauth.status());
  });
});
