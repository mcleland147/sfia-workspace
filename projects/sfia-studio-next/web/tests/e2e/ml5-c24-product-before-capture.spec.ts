/**
 * C24 — capture baseline screenshots of the real Studio product.
 * Note: when run after the fidelity rewrite, this is a same-build control capture
 * (true pre-rewrite BEFORE lived in prior Morris inspection / prior pack).
 */
import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), ".sfia-evidence", "figma-page12-product-before");

test.describe("C24 product BEFORE captures", () => {
  test.beforeAll(() => {
    fs.mkdirSync(OUT, { recursive: true });
  });

  test("login + capture travail / execution / results", async ({ page }) => {
    await page.setViewportSize({ width: 1680, height: 970 });
    const auto = await page.request.post("/api/dev/auto-session", { data: {} });
    expect(auto.ok()).toBeTruthy();
    await page.goto("/portfolio", { waitUntil: "networkidle" });
    await expect(page.getByTestId("portfolio-new-prep")).toBeVisible({ timeout: 30_000 });

    const PROJECT =
      process.env.SFIA_C24_PROJECT_ID ||
      "proj_c08249f9-9348-49fb-b33b-016c6430aec5";

    await page.goto(`/projects/${PROJECT}?surface=travail`, {
      waitUntil: "networkidle",
    });
    await page.waitForTimeout(1500);
    await page.screenshot({
      path: path.join(OUT, "travail-shell.png"),
      fullPage: false,
    });

    const openContract = page.locator("[data-testid^=travail-open-contract-]").first();
    if (await openContract.isVisible().catch(() => false)) {
      await openContract.click();
      await page.waitForTimeout(800);
    }
    await page.screenshot({
      path: path.join(
        OUT,
        (await page.getByTestId("contract-viewer").isVisible().catch(() => false))
          ? "12.02-like-contract-viewer.png"
          : "12.02-like-contract-viewer-missing.png",
      ),
      fullPage: false,
    });

    await page.goto(`/projects/${PROJECT}?surface=execution`, {
      waitUntil: "networkidle",
    });
    await page.waitForTimeout(1500);
    await page.screenshot({
      path: path.join(OUT, "12.04-like-execution.png"),
      fullPage: false,
    });

    const contractBtn = page.locator("[data-testid^=contract-select-]").first();
    if (await contractBtn.isVisible().catch(() => false)) {
      await contractBtn.click();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: path.join(OUT, "12.05-like-execution-contract.png"),
        fullPage: false,
      });
    }

    await page.goto(`/projects/${PROJECT}?surface=publication`, {
      waitUntil: "networkidle",
    });
    await page.waitForTimeout(1500);
    await page.screenshot({
      path: path.join(OUT, "12.08-like-results.png"),
      fullPage: false,
    });

    const attempt = page.locator("[data-testid^=attempt-bilan-]").first();
    if (await attempt.isVisible().catch(() => false)) {
      await attempt.click();
      await page.waitForTimeout(1000);
      await page.screenshot({
        path: path.join(OUT, "12.08-results-with-bilan.png"),
        fullPage: false,
      });
      for (const tab of ["synthese", "livrables", "git", "ecarts"] as const) {
        const t = page.getByTestId(`bilan-tab-${tab}`);
        if (await t.isVisible().catch(() => false)) {
          await t.click();
          await page.waitForTimeout(400);
          await page.screenshot({
            path: path.join(OUT, `results-tab-${tab}.png`),
            fullPage: false,
          });
        }
      }
    }

    await page.goto("/portfolio", { waitUntil: "networkidle" });
    await page.waitForTimeout(800);
    await page.screenshot({
      path: path.join(OUT, "shell-portfolio.png"),
      fullPage: false,
    });
  });
});
