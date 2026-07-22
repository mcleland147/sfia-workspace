import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/sfia-canonical-context-engine-evidence/screenshots",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test.describe("SFIA Canonical Context Engine", () => {
  test("fixture propose CREATE → context + ActionCandidate live (no fixture button)", async ({
    page,
  }) => {
    await page.goto("/ops1/nouvelle-demande");
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();

    await page.getByTestId("ops1-create-mode-fixture").check();
    await page.getByTestId("ops1-create-session").click();
    await expect(page.getByTestId("ops1-session-id")).toBeVisible();

    await expect(page.getByTestId("sfia-context-panel")).toBeVisible();
    await expect(page.getByTestId("sfia-context-ready")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("sfia-baseline")).toContainText("SFIA");
    await expect(page.getByTestId("sfia-source-item").first()).toBeVisible();

    await page.screenshot({
      path: path.join(screenshotDir, "01-sfia-context-loaded.png"),
      fullPage: true,
    });

    await page
      .getByTestId("ops1-message-input")
      .fill("Prépare action bornée __SFIA_PROPOSE_CREATE_MD__");
    await page.getByTestId("ops1-send-message").click();

    await expect(page.getByTestId("sfia-proposal-panel")).toBeVisible({
      timeout: 20_000,
    });
    await expect(page.getByTestId("sfia-compilation-status")).toHaveText(
      "COMPILED",
    );
    await expect(page.getByTestId("sfia-live-action-id")).toBeVisible();
    await expect(page.getByTestId("ops1-action-panel")).toBeVisible();
    await expect(page.getByTestId("ops1-i3-create-candidate")).toBeVisible();

    await page.screenshot({
      path: path.join(screenshotDir, "02-sfia-proposal-compiled.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "03-sfia-action-candidate-live.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "04-sfia-sources-digests.png"),
      fullPage: true,
    });
  });

  test("commit proposal denied deterministically", async ({ page }) => {
    await page.goto("/ops1/nouvelle-demande");
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();
    await page.getByTestId("ops1-create-mode-fixture").check();
    await page.getByTestId("ops1-create-session").click();
    await page
      .getByTestId("ops1-message-input")
      .fill("Mauvaise proposition __SFIA_PROPOSE_COMMIT__");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("sfia-compilation-status")).toHaveText(
      "POLICY_DENIED",
      { timeout: 20_000 },
    );
    await expect(page.getByTestId("sfia-denied-ops")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "05-sfia-forbidden-ops-denied.png"),
      fullPage: true,
    });
  });
});
