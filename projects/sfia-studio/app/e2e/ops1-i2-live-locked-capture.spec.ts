/**
 * Real GPT live UI capture — skipped unless OPS1_ALLOW_LIVE_SMOKE=1
 * and OPS1_CONVERSATION_PROVIDER is not "fake".
 * Never prints secrets.
 */
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-ops1-i2",
);

const allow =
  process.env.OPS1_ALLOW_LIVE_SMOKE === "1" &&
  process.env.OPS1_CONVERSATION_PROVIDER !== "fake" &&
  Boolean(process.env.OPENAI_API_KEY?.trim()) &&
  Boolean(process.env.OPENAI_MODEL?.trim());

test.describe("OPS1 I2 real live locked capture", () => {
  test.skip(!allow, "Live capture preconditions missing");

  test("GPT LIVE locked session with real assistant_live", async ({ page }) => {
    fs.mkdirSync(screenshotDir, { recursive: true });
    await page.goto("/ops1/nouvelle-demande");
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();

    await page.getByTestId("ops1-create-mode-live").check();
    await page.getByTestId("ops1-create-session").click();
    await expect(page.getByTestId("ops1-mode-locked")).toContainText(
      "GPT LIVE — verrouillé",
    );
    await expect(page.getByTestId("ops1-badge-live")).toBeVisible();
    await expect(page.getByTestId("ops1-badge-test-provider")).toHaveCount(0);
    await expect(page.getByTestId("global-mode-badge")).toHaveText(
      "MODE GPT LIVE",
    );

    await page
      .getByTestId("ops1-message-input")
      .fill("Réponds en une seule phrase courte : ping capture I2.");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-turn").nth(1)).toHaveAttribute(
      "data-role",
      "assistant_live",
    );
    await expect(page.getByText("GPT LIVE").first()).toBeVisible();
    await expect(page.getByText("TEST / FAKE")).toHaveCount(0);
    await expect(page.getByText("Assistant live").first()).toBeVisible();
    await expect(page.getByTestId("global-mode-badge")).toHaveText(
      "MODE GPT LIVE",
    );

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-live-locked.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-global-badge-live.png"),
      fullPage: true,
    });
  });
});
