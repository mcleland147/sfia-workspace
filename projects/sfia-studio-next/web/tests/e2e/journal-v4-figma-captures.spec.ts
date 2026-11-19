import { test, expect, type Page } from "@playwright/test";
import fs from "fs";
import path from "path";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

const OUT = path.resolve(__dirname, "../../../.tmp-sfia-review/figma-ux-after");

async function seedJournal(page: Page, projectId: string) {
  const res = await page.request.post("/api/dev/e2e/journal-fixture", {
    data: { projectId, longThreadCount: 12 },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  const body = (await res.json()) as { seed: Record<string, string> };
  return body.seed;
}

test.describe("Journal V4 Figma captures 1680×970", () => {
  test("eleven runtime frames + empty exploration", async ({ page }) => {
    test.setTimeout(180000);
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
    await page.screenshot({
      path: path.join(OUT, "01-runtime-835-71-sujets-exploration.png"),
      fullPage: false,
    });

    await page.getByTestId(`journal-subject-${seed.leafSubjectId}`).click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");
    await page.screenshot({
      path: path.join(OUT, "02-runtime-842-26-sujet-autonome-40-60.png"),
      fullPage: false,
    });

    await page.getByTestId(`journal-subject-${seed.parentSubjectId}`).click();
    await page.screenshot({
      path: path.join(OUT, "03-runtime-842-131-sujet-parent-40-60.png"),
      fullPage: false,
    });

    await page.getByTestId("journal-viewer-enlarge").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute(
      "data-journal-layout",
      "enlarged",
    );
    await page.screenshot({
      path: path.join(OUT, "04-runtime-835-159-sujet-agrandi.png"),
      fullPage: false,
    });
    await page.getByTestId("journal-viewer-reduce").click();

    await page.getByTestId(`journal-subject-${seed.parentSubjectId}`).click();
    await page.getByTestId("journal-viewer-enlarge").click();
    await page.screenshot({
      path: path.join(OUT, "05-runtime-835-239-parent-agrandi.png"),
      fullPage: false,
    });
    await page.getByTestId("journal-viewer-reduce").click();

    await page.getByTestId("journal-search").fill("traçabilité");
    await expect(page.getByTestId(`journal-match-${seed.leafSubjectId}`)).toBeVisible();
    await page.screenshot({
      path: path.join(OUT, "06-runtime-859-42-recherche-sujets.png"),
      fullPage: false,
    });

    await page.getByTestId("journal-filter-open-points").click();
    await expect(page.getByTestId("journal-filter-open-points")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await page.screenshot({
      path: path.join(OUT, "07-runtime-859-146-filtre-points.png"),
      fullPage: false,
    });
    await page.getByTestId("journal-filter-open-points").click();
    await page.getByTestId("journal-search").fill("");

    await page.getByTestId("journal-tab-decisions").click();
    await expect(page.getByTestId("journal-decision-list")).toBeVisible();
    await page.screenshot({
      path: path.join(OUT, "08-runtime-860-58-decisions-nominales.png"),
      fullPage: false,
    });

    await page.getByTestId(`journal-decision-${seed.decisionApplicableId}`).click();
    await expect(page.getByTestId("journal-decision-viewer")).toBeVisible();
    await page.screenshot({
      path: path.join(OUT, "09-runtime-860-136-decision-40-60.png"),
      fullPage: false,
    });

    await page.getByTestId("journal-search").fill("multicritèreorion");
    await page.screenshot({
      path: path.join(OUT, "10-runtime-860-251-recherche-decisions.png"),
      fullPage: false,
    });

    await page.getByTestId("journal-viewer-enlarge").click();
    await page.screenshot({
      path: path.join(OUT, "11-runtime-860-360-decision-agrandie.png"),
      fullPage: false,
    });

    // Empty project — return portfolio then new prep without seed
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
    await page.screenshot({
      path: path.join(OUT, "00-runtime-empty-exploration.png"),
      fullPage: false,
    });

    fs.writeFileSync(
      path.join(OUT, "capture-report.json"),
      JSON.stringify({ projectId, seed, out: OUT, ok: true }, null, 2),
    );
  });
});
