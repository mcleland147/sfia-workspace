import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-ops1-i5",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

async function prepareThroughI4(page: import("@playwright/test").Page) {
  await page.goto("/nouvelle-demande");
  await page.evaluate(() => window.sessionStorage.clear());
  await page.reload();
  await expect(page.getByTestId("ops1-session-root")).toBeVisible();
  await page.getByTestId("ops1-create-mode-fixture").check();
  await page.getByTestId("ops1-create-session").click();
  await expect(page.getByTestId("ops1-open-session")).toBeVisible();
  await page.getByTestId("ops1-message-input").fill("Besoin exécution I5");
  await page.getByTestId("ops1-send-message").click();
  await expect(page.getByTestId("ops1-turn").first()).toBeVisible();
  await page.getByTestId("ops1-i3-create-candidate").click();
  await page.getByTestId("ops1-gate-go").click();
  await expect(page.getByTestId("ops1-i4-allowlist")).toBeVisible();
  await page.getByTestId("ops1-i4-evaluate").click();
  await expect(page.getByTestId("ops1-i4-global-status")).toContainText(
    "ALLOWLIST VALIDE",
  );
}

test.describe("OPS1 I5 contract + fixture execution", () => {
  test("contract without GO blocks execution button", async ({ page }) => {
    await prepareThroughI4(page);
    await expect(page.getByTestId("ops1-increment-badge")).toContainText(
      "OPS1 I5",
    );
    await expect(page.getByTestId("ops1-i5-execution")).toBeVisible();
    await expect(page.getByTestId("ops1-i5-run-execution")).toBeDisabled();
    await page.getByTestId("ops1-i5-create-contract").click();
    await expect(page.getByTestId("ops1-i5-contract-hash")).toBeVisible();
    await expect(page.getByTestId("ops1-i5-run-execution")).toBeDisabled();
    await page.screenshot({
      path: path.join(screenshotDir, "01-contract-no-go.png"),
      fullPage: true,
    });
  });

  test("GO linked to hash then fixture execution succeeds", async ({
    page,
  }) => {
    await prepareThroughI4(page);
    await page.getByTestId("ops1-i5-create-contract").click();
    await expect(page.getByTestId("ops1-i5-contract-status")).toContainText(
      "READY_FOR_GATE",
    );
    await page.getByTestId("ops1-i5-record-gate").click();
    await expect(page.getByTestId("ops1-i5-contract-status")).toContainText(
      "APPROVED",
    );
    await expect(page.getByTestId("ops1-i5-run-execution")).toBeEnabled();
    await page.getByTestId("ops1-i5-run-execution").click();
    await expect(page.getByTestId("ops1-i5-attempt-status")).toContainText(
      "SUCCEEDED",
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("ops1-i5-worktree")).not.toContainText("—");
    await expect(page.getByTestId("ops1-i5-no-remote")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "02-fixture-succeeded.png"),
      fullPage: true,
    });
  });

  test("microcopies I5 visible", async ({ page }) => {
    await prepareThroughI4(page);
    const panel = page.getByTestId("ops1-i5-execution");
    await expect(panel.getByText("GO DELIVERY ≠ GO D’EXÉCUTION")).toBeVisible();
    await expect(panel.getByText("GO LIÉ AU CONTRACT HASH")).toBeVisible();
    await expect(panel.getByText("I5 EXÉCUTE — I6 ANALYSE LE RAPPORT")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "03-microcopies.png"),
      fullPage: true,
    });
  });
});
