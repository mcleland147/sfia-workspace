/**
 * C24 — capture AFTER screenshots of the real Studio product (not harness).
 * Requires qualify DEV on :3100 with the rebuilt fidelity build.
 */
import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), ".sfia-evidence", "figma-page12-product-after");

async function resolveProjectId(page: import("@playwright/test").Page): Promise<string> {
  if (process.env.SFIA_C24_PROJECT_ID) return process.env.SFIA_C24_PROJECT_ID;
  const port = await page.request.get("/api/portfolio");
  expect(port.ok()).toBeTruthy();
  const j = (await port.json()) as {
    portfolio?: { projects?: Array<{ id: string; name?: string }> };
  };
  const projects = j.portfolio?.projects ?? [];
  // Prefer ML5 projects that typically hold contracts.
  const preferred =
    projects.find((p) => /C11-LIVE|C12-LIVE|C13-STOP|C24 Director/i.test(p.name ?? "")) ??
    projects.find((p) => /ML5/i.test(p.name ?? "")) ??
    projects[0];
  expect(preferred?.id).toBeTruthy();
  return preferred!.id;
}

test.describe("C24 product AFTER captures", () => {
  test.beforeAll(() => {
    fs.mkdirSync(OUT, { recursive: true });
  });

  test("login + capture travail / execution / results compositions", async ({ page }) => {
    await page.setViewportSize({ width: 1680, height: 970 });

    // Cookie must live on the page context (not the isolated APIRequestContext fixture).
    const auto = await page.request.post("/api/dev/auto-session", { data: {} });
    expect(auto.ok()).toBeTruthy();
    await page.goto("/portfolio", { waitUntil: "networkidle" });
    await expect(page.getByTestId("portfolio-new-prep")).toBeVisible({ timeout: 30_000 });

    const PROJECT = await resolveProjectId(page);
    fs.writeFileSync(path.join(OUT, "project-id.txt"), PROJECT);

    // TRAVAIL shell
    await page.goto(`/projects/${PROJECT}?surface=travail`, {
      waitUntil: "networkidle",
    });
    await page.waitForTimeout(1800);
    await expect(page.getByTestId("project-load-state")).toBeVisible({ timeout: 30_000 });
    await page.screenshot({
      path: path.join(OUT, "12.01-like-travail.png"),
      fullPage: false,
    });

    // Open contract viewer if possible
    const openContract = page.locator("[data-testid^=travail-open-contract-]").first();
    if (await openContract.isVisible().catch(() => false)) {
      await openContract.click();
      await page.waitForTimeout(1000);
    } else {
      const inspect = page
        .getByRole("button", {
          name: /inspecter|ouvrir le contrat|contrat|voir le contrat/i,
        })
        .first();
      if (await inspect.isVisible().catch(() => false)) {
        await inspect.click();
        await page.waitForTimeout(1000);
      }
    }
    const viewer = page.getByTestId("contract-viewer");
    await page.screenshot({
      path: path.join(
        OUT,
        (await viewer.isVisible().catch(() => false))
          ? "12.02-contract-viewer.png"
          : "12.02-contract-viewer-missing.png",
      ),
      fullPage: false,
    });

    // EXÉCUTION list/detail
    await page.goto(`/projects/${PROJECT}?surface=execution`, {
      waitUntil: "networkidle",
    });
    await page.waitForTimeout(1800);
    await page.screenshot({
      path: path.join(OUT, "12.04-execution.png"),
      fullPage: false,
    });

    const contractBtn = page.locator("[data-testid^=contract-select-]").first();
    if (await contractBtn.isVisible().catch(() => false)) {
      await contractBtn.click();
      await page.waitForTimeout(800);
      await page.screenshot({
        path: path.join(OUT, "12.05-execution-contract.png"),
        fullPage: false,
      });
      // Expand a volet + instruction if present
      const volet = page.locator(".fig-cv-volet summary, [data-testid^=contract-volet-]").first();
      if (await volet.isVisible().catch(() => false)) {
        await volet.click();
        await page.waitForTimeout(400);
      }
      await page.screenshot({
        path: path.join(OUT, "12.05-execution-contract-expanded.png"),
        fullPage: false,
      });
    }

    const attemptRow = page.locator("[data-testid^=attempt-row-]").first();
    if (await attemptRow.isVisible().catch(() => false)) {
      await attemptRow.click();
      await page.waitForTimeout(800);
      await page.screenshot({
        path: path.join(OUT, "12.06-or-12.07-execution-detail.png"),
        fullPage: false,
      });
    }

    const bilanInExec = page.getByTestId("realization-bilan");
    const stacked = await bilanInExec.isVisible().catch(() => false);
    fs.writeFileSync(
      path.join(OUT, "execution-bilan-stacked.txt"),
      stacked ? "FAIL: bilan visible under execution" : "PASS: no bilan under execution",
    );

    // RÉSULTATS
    await page.goto(`/projects/${PROJECT}?surface=publication`, {
      waitUntil: "networkidle",
    });
    await page.waitForTimeout(1800);
    await page.screenshot({
      path: path.join(OUT, "12.08-results.png"),
      fullPage: false,
    });

    // Prefer a COMPLETED attempt (likely to have a D8 dossier).
    const completed = page
      .locator("[data-testid^=attempt-bilan-]")
      .filter({ hasText: /COMPLETED|Terminé|finished/i })
      .first();
    const attempt =
      (await completed.isVisible().catch(() => false))
        ? completed
        : page.locator("[data-testid^=attempt-bilan-]").first();
    if (await attempt.isVisible().catch(() => false)) {
      await attempt.click();
      await page.waitForTimeout(1800);
      await page.screenshot({
        path: path.join(OUT, "12.08-results-with-bilan.png"),
        fullPage: false,
      });
      for (const tab of ["synthese", "livrables", "git", "ecarts"] as const) {
        const t = page.getByTestId(`bilan-tab-${tab}`);
        if (await t.isVisible().catch(() => false)) {
          await t.click();
          await page.waitForTimeout(500);
          await page.screenshot({
            path: path.join(OUT, `results-tab-${tab}.png`),
            fullPage: false,
          });
        }
      }

      const discuss = page
        .getByRole("button", {
          name: /discuter avec Nora|En discuter avec Nora|Reprendre avec Nora/i,
        })
        .first();
      if (await discuss.isVisible().catch(() => false)) {
        await discuss.click();
        await page.waitForTimeout(1400);
        await page.screenshot({
          path: path.join(OUT, "12.09-reprise-nora.png"),
          fullPage: false,
        });
      }
    }

    await page.goto("/portfolio", { waitUntil: "networkidle" });
    await page.waitForTimeout(800);
    await page.screenshot({
      path: path.join(OUT, "shell-portfolio.png"),
      fullPage: false,
    });

    const build = await page.request.get("/api/dev/build-identity").catch(() => null);
    if (build && build.ok()) {
      fs.writeFileSync(
        path.join(OUT, "build-identity.json"),
        JSON.stringify(await build.json(), null, 2),
      );
    }
  });
});
