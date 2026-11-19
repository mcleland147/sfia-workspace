import { test, expect, type Page, type Locator } from "@playwright/test";
import fs from "fs";
import path from "path";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

const OUT = path.resolve(__dirname, "../../../.tmp-sfia-review/figma-ux-after");

type Seed = Record<string, string>;

async function seedJournal(page: Page, projectId: string) {
  const res = await page.request.post("/api/dev/e2e/journal-fixture", {
    data: { projectId, longThreadCount: 12 },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  const body = (await res.json()) as { seed: Seed };
  return body.seed;
}

async function assertViewerBox(viewer: Locator) {
  const box = await viewer.boundingBox();
  expect(box, "journal-viewer bounding box").toBeTruthy();
  // Figma 784×832 — allow browser chrome / padding variance of a few dozen px, not hundreds.
  expect(box!.width).toBeGreaterThan(700);
  expect(box!.width).toBeLessThan(820);
  expect(box!.height).toBeGreaterThan(700);
}

async function shot(page: Page, name: string) {
  await page.screenshot({ path: path.join(OUT, name), fullPage: false });
}

test.describe("Journal V4 Figma captures 1680×970", () => {
  test("eleven runtime frames + empty exploration", async ({ page }) => {
    test.setTimeout(240000);
    fs.mkdirSync(OUT, { recursive: true });
    await page.setViewportSize({ width: 1680, height: 970 });
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(page, "Capture Journal V4 Figma");
    const projectName = uniqueProjectName("Journal Figma Cap");
    await constituteAndCreateProject(page, {
      name: projectName,
      summary: "captures",
      alreadyUnique: true,
    });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();
    const seed = await seedJournal(page, projectId!);

    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("journal-title")).toHaveText("Journal");
    await expect(page.getByTestId("journal-subtitle")).toContainText(
      /mémoire du projet|organisée par thèmes/i,
    );
    await expect(page.getByTestId(`journal-subject-${seed.parentSubjectId}`)).toBeVisible({
      timeout: 20000,
    });
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "full");
    await expect(page.getByTestId("journal-viewer")).toHaveCount(0);
    await shot(page, "01-runtime-835-71-sujets-exploration.png");

    // 02 — autonomous leaf
    await page.getByTestId(`journal-subject-${seed.leafSubjectId}`).click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");
    await expect(page.getByTestId("journal-viewer")).toHaveAttribute("data-viewer-kind", "autonomous");
    await expect(page.getByTestId("journal-viewer-subject-kind")).toHaveText("Sujet autonome");
    await expect(page.getByTestId("journal-viewer-subject-title")).not.toHaveText(/^\s*$/);
    await expect(page.getByTestId("journal-parent-children")).toHaveCount(0);
    await assertViewerBox(page.getByTestId("journal-viewer"));
    const leafTitle = (await page.getByTestId("journal-viewer-subject-title").innerText()).trim();
    await shot(page, "02-runtime-842-26-sujet-autonome-40-60.png");

    // 03 — parent (must differ from autonomous)
    await page.getByTestId(`journal-subject-${seed.parentSubjectId}`).click();
    await expect(page.getByTestId("journal-viewer")).toHaveAttribute("data-viewer-kind", "parent");
    await expect(page.getByTestId("journal-viewer-subject-kind")).toHaveText("Sujet parent");
    await expect(page.getByTestId("journal-parent-children")).toBeVisible();
    await expect(page.getByTestId("journal-viewer-subject-title")).not.toHaveText(leafTitle);
    await assertViewerBox(page.getByTestId("journal-viewer"));
    const parentTitle = (await page.getByTestId("journal-viewer-subject-title").innerText()).trim();
    expect(parentTitle).not.toEqual(leafTitle);
    await shot(page, "03-runtime-842-131-sujet-parent-40-60.png");

    // 04 — enlarge autonomous (select leaf again first)
    await page.getByTestId(`journal-subject-${seed.leafSubjectId}`).click();
    await expect(page.getByTestId("journal-viewer-subject-kind")).toHaveText("Sujet autonome");
    await page.getByTestId("journal-viewer-enlarge").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute(
      "data-journal-layout",
      "enlarged",
    );
    await expect(page.getByTestId("journal-viewer-aside")).toBeVisible();
    await expect(page.getByTestId("journal-viewer-subject-kind")).toHaveText("Sujet autonome");
    await shot(page, "04-runtime-835-159-sujet-agrandi.png");
    await page.getByTestId("journal-viewer-reduce").click();

    // 05 — enlarge parent
    await page.getByTestId(`journal-subject-${seed.parentSubjectId}`).click();
    await expect(page.getByTestId("journal-viewer-subject-kind")).toHaveText("Sujet parent");
    await page.getByTestId("journal-viewer-enlarge").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute(
      "data-journal-layout",
      "enlarged",
    );
    await expect(page.getByTestId("journal-viewer-aside")).toBeVisible();
    await expect(page.getByTestId("journal-parent-children")).toBeVisible();
    await expect(page.getByTestId("journal-viewer-subject-kind")).toHaveText("Sujet parent");
    await shot(page, "05-runtime-835-239-parent-agrandi.png");
    await page.getByTestId("journal-viewer-reduce").click();

    // 06 — search results composition
    await page.getByTestId("journal-search").fill("traçabilité");
    await expect(page.getByTestId("journal-search-results")).toBeVisible();
    await expect(page.getByTestId(`journal-match-${seed.leafSubjectId}`)).toBeVisible();
    await page.getByTestId(`journal-match-${seed.leafSubjectId}`).click();
    await expect(page.getByTestId("journal-viewer")).toHaveAttribute("data-viewer-kind", "autonomous");
    await assertViewerBox(page.getByTestId("journal-viewer"));
    await shot(page, "06-runtime-859-42-recherche-sujets.png");

    // 07 — open points transversal
    await page.getByTestId("journal-filter-open-points").click();
    await expect(page.getByTestId("journal-filter-open-points")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await expect(page.getByTestId("journal-open-points-list")).toBeVisible();
    await shot(page, "07-runtime-859-146-filtre-points.png");
    await page.getByTestId("journal-filter-open-points").click();
    await page.getByTestId("journal-search").fill("");

    // 08 — decisions nominal
    await page.getByTestId("journal-tab-decisions").click();
    await expect(page.getByTestId("journal-decision-list")).toBeVisible();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "full");
    await shot(page, "08-runtime-860-58-decisions-nominales.png");

    // 09 — decision 40/60
    await page.getByTestId(`journal-decision-${seed.decisionApplicableId}`).click();
    await expect(page.getByTestId("journal-decision-viewer")).toBeVisible();
    await expect(page.getByTestId("journal-viewer")).toHaveAttribute("data-viewer-kind", "decision");
    await assertViewerBox(page.getByTestId("journal-viewer"));
    await shot(page, "09-runtime-860-136-decision-40-60.png");

    // 10 — decision search
    await page.getByTestId("journal-search").fill("multicritèreorion");
    await expect(page.getByTestId(`journal-decision-${seed.decisionApplicableId}`)).toBeVisible();
    await shot(page, "10-runtime-860-251-recherche-decisions.png");

    // 11 — decision enlarged
    await page.getByTestId("journal-viewer-enlarge").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute(
      "data-journal-layout",
      "enlarged",
    );
    await expect(page.getByTestId("journal-decision-aside")).toBeVisible();
    await shot(page, "11-runtime-860-360-decision-agrandie.png");

    // Empty project
    await page.getByTestId("studio-rail").getByRole("link", { name: /Portefeuille/i }).click();
    await page.waitForURL("**/portfolio", { timeout: 20000 });
    await openNewPreparation(page);
    await sendPrepMessage(page, "Projet vide journal");
    const emptyName = uniqueProjectName("Journal Empty");
    await constituteAndCreateProject(page, {
      name: emptyName,
      summary: "empty",
      alreadyUnique: true,
    });
    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
    await expect(page.getByTestId("journal-empty-structure")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("journal-title")).toHaveText("Journal");
    await expect(page.getByTestId("journal-viewer")).toHaveCount(0);
    await shot(page, "00-runtime-empty-exploration.png");

    fs.writeFileSync(
      path.join(OUT, "capture-report.json"),
      JSON.stringify(
        {
          projectId,
          seed,
          out: OUT,
          ok: true,
          distinctions: { leafTitle, parentTitle },
        },
        null,
        2,
      ),
    );
  });
});
