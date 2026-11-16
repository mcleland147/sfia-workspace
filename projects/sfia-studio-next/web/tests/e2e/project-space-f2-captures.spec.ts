import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

/**
 * F2 captures — Ensemble 04 vs Figma 652:* at 1680×970.
 * Artifacts under web/docs/evidence/ensemble-04-project-space/
 */
test("F2 runtime captures Ensemble 04 project space", async ({ page }) => {
  const outDir = path.join(
    process.cwd(),
    "docs",
    "evidence",
    "ensemble-04-project-space",
  );
  fs.mkdirSync(outDir, { recursive: true });

  await page.setViewportSize({ width: 1680, height: 970 });
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  const projectName = `F2 Espace projet ${Date.now()}`;
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");
  await page.getByTestId("prep-draft").fill("Capture F2 Ensemble 04");
  await page.getByTestId("prep-send").click();
  await expect(
    page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
  ).toBeVisible({ timeout: 30000 });
  await seedInspectedNameViaApi(page, {
    name: projectName,
    summary: "capture runtime",
  });
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
  await page.getByTestId("prep-create-project").click();
  await page.waitForURL("**/projects/**", { timeout: 15000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];

  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-load-state",
    "ready",
    { timeout: 20000 },
  );

  await page.goto(`/projects/${projectId}?surface=travail`);
  await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);
  await page.screenshot({
    path: path.join(outDir, "runtime-travail-1680x970.png"),
    fullPage: false,
  });

  await page.goto(`/projects/${projectId}?surface=projet`);
  await expect(page.getByTestId("project-overview")).toBeVisible();
  await page.screenshot({
    path: path.join(outDir, "runtime-projet-overview-1680x970.png"),
    fullPage: false,
  });

  await page.goto(`/projects/${projectId}?surface=journal`);
  await expect(page.getByTestId("project-load-state")).toHaveAttribute(
    "data-project-surface",
    "journal",
  );
  await page.screenshot({
    path: path.join(outDir, "runtime-journal-nav-1680x970.png"),
    fullPage: false,
  });

  await page.goto("/projects/proj_unavailable_e04_f2");
  await expect(page.getByTestId("project-unavailable")).toHaveAttribute(
    "data-unavailable-kind",
    "not_found",
    { timeout: 20000 },
  );
  await page.screenshot({
    path: path.join(outDir, "runtime-unavailable-1680x970.png"),
    fullPage: false,
  });

  fs.writeFileSync(
    path.join(outDir, "manifest.json"),
    JSON.stringify(
      {
        capturedAt: new Date().toISOString(),
        viewport: { width: 1680, height: 970 },
        projectName,
        projectId,
        frames: {
          travail: "652:8",
          projet: "652:58",
          journal: "652:108",
          unavailable: "652:158",
        },
        files: [
          "runtime-travail-1680x970.png",
          "runtime-projet-overview-1680x970.png",
          "runtime-journal-nav-1680x970.png",
          "runtime-unavailable-1680x970.png",
        ],
      },
      null,
      2,
    ),
  );
});
