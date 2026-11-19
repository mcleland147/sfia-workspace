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
      openPointId: string;
      decisionApplicableId: string;
      earlyMessageId: string;
      documentId: string;
      revisionIdV2: string;
      messageCount: number;
    };
  };
  expect(body.status).toBe("AVAILABLE");
  expect(body.seed.leafSubjectId).toBeTruthy();
  expect(body.seed.earlyMessageId).toBeTruthy();
  return body.seed;
}

test.describe("Journal V4 — données métier non vides (E06-01)", () => {
  test("sujets/40-60/recherche/décisions/message/document/brouillon", async ({ page }) => {
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

    // Draft BEFORE leaving thread (E06-04)
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

    // C — recherche terme absent du titre (acquis)
    await page.getByTestId("journal-search").fill("traçabilité");
    await expect(page.getByTestId(`journal-match-${seed.leafSubjectId}`)).toBeVisible();
    await page.getByTestId("journal-filter-open-points").locator("input").check();

    // B — 40/60 + enlarge (non conditionnel)
    await leaf.click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");
    await expect(page.getByTestId("journal-viewer-subject-title")).toBeVisible();
    await page.getByTestId("journal-viewer-enlarge").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute(
      "data-journal-layout",
      "enlarged",
    );
    await page.getByTestId("journal-viewer-reduce").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");

    await page.screenshot({
      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-sujet-40-60-seeded.png",
      fullPage: false,
    });

    // Sources → message exact
    const sourceChip = page.locator("[data-testid^=journal-source-]").first();
    await expect(sourceChip).toBeVisible({ timeout: 10000 });
    await sourceChip.click();
    await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
    const focused = page.locator(`[data-message-id="${seed.earlyMessageId}"]`);
    await expect(focused).toBeVisible({ timeout: 15000 });
    // Chronology: early message must not be last in the thread DOM order
    const ids = await page.locator("[data-message-id]").evaluateAll((els) =>
      els.map((e) => e.getAttribute("data-message-id")),
    );
    expect(ids.includes(seed.earlyMessageId)).toBe(true);
    expect(ids[ids.length - 1]).not.toBe(seed.earlyMessageId);
    // No auto-send: draft still present
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);

    // Return Journal — prefer explicit URL (rail remount race on surface switch)
    await page.goto(`/projects/${projectId}?surface=journal`);
    await expect(page).toHaveURL(/surface=journal/);
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
    // Nav state may reset on full navigation; re-assert core tree still present (non-empty).
    await expect(page.getByTestId(`journal-subject-${seed.leafSubjectId}`)).toBeVisible({
      timeout: 15000,
    });

    // D — Décisions
    await page.getByTestId("journal-tab-decisions").click();
    await expect(page.getByTestId(`journal-decision-${seed.decisionApplicableId}`)).toBeVisible({
      timeout: 15000,
    });
    await page.getByTestId(`journal-decision-${seed.decisionApplicableId}`).click();
    await expect(page.getByTestId("journal-decision-viewer")).toBeVisible();
    await expect(page.getByTestId("journal-decision-applicability")).toContainText(/applicable/i);

    // E — Document version (canonical D4 surface)
    await page.goto(
      `/projects/${projectId}?surface=document&documentId=${encodeURIComponent(seed.documentId)}`,
    );
    await expect(
      page.getByTestId("document-library").or(page.getByTestId("document-inspector")),
    ).toBeVisible({ timeout: 20000 });

    // F — 1280 operational
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(`/projects/${projectId}?surface=journal`);
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId(`journal-subject-${seed.leafSubjectId}`)).toBeVisible();
  });
});
