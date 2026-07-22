import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-ops1-i2",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test.describe("OPS1 I2 immutable mode + signalétique", () => {
  test("mode selection, fixture locked, reload, no execution", async ({
    page,
  }) => {
    await page.goto("/ops1/nouvelle-demande");
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();
    await expect(page.getByTestId("ops1-session-root")).toBeVisible();
    await expect(page.getByTestId("ops1-create-mode-selector")).toBeVisible();

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-mode-selection.png"),
      fullPage: true,
    });

    // Also keep legacy name for unavailable state when applicable
    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-live-unavailable.png"),
      fullPage: true,
    });

    await page.getByTestId("ops1-create-mode-fixture").check();
    await page.getByTestId("ops1-create-session").click();
    await expect(page.getByTestId("ops1-mode-locked")).toContainText(
      "FIXTURE — verrouillé",
    );
    await expect(page.getByTestId("global-mode-badge")).toHaveText(
      "MODE FIXTURE / NON LIVE",
    );
    await expect(page.getByTestId("ops1-mode-fixture")).toBeDisabled();
    await expect(page.getByTestId("ops1-mode-live")).toBeDisabled();

    // Attempt to change mode via click — must remain fixture
    await page.getByTestId("ops1-mode-live").click({ force: true });
    await expect(page.getByTestId("ops1-mode-locked")).toContainText(
      "FIXTURE — verrouillé",
    );
    await expect(page.getByTestId("ops1-mode-fixture")).toBeChecked();

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-mode-change-refused.png"),
      fullPage: true,
    });

    await page.getByTestId("ops1-message-input").fill("Tour fixture 1");
    await page.getByTestId("ops1-send-message").click();
    await page.getByTestId("ops1-message-input").fill("Tour fixture 2");
    await page.getByTestId("ops1-send-message").click();
    await page
      .getByTestId("ops1-message-input")
      .fill("exécute Cursor maintenant");
    await page.getByTestId("ops1-send-message").click();

    await expect(page.getByTestId("ops1-turn")).toHaveCount(6);
    await expect(page.getByTestId("ops1-badge-fixture")).toBeVisible();
    await expect(page.getByTestId("ops1-badge-live")).toHaveCount(0);
    await expect(page.getByTestId("global-mode-badge")).toHaveText(
      "MODE FIXTURE / NON LIVE",
    );
    await expect(
      page.getByRole("button", { name: /exécuter|gate|cursor/i }),
    ).toHaveCount(0);

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-fixture-locked.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-global-badge-fixture.png"),
      fullPage: true,
    });

    const sessionId = await page.getByTestId("ops1-session-id").innerText();
    await page.reload();
    await expect(page.getByTestId("ops1-session-id")).toHaveText(sessionId);
    await expect(page.getByTestId("ops1-mode-locked")).toContainText(
      "FIXTURE — verrouillé",
    );
    await expect(page.getByTestId("ops1-turn")).toHaveCount(6);

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-after-reload-locked.png"),
      fullPage: true,
    });
  });

  test("test provider path — never presented as GPT live", async ({ page }) => {
    await page.goto("/ops1/nouvelle-demande");
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();

    const liveCreate = page.getByTestId("ops1-create-mode-live");
    if (!(await liveCreate.isEnabled())) {
      await page.screenshot({
        path: path.join(screenshotDir, "ops1-i2-test-provider-non-live.png"),
        fullPage: true,
      });
      test.info().annotations.push({
        type: "note",
        description: "Live create disabled — fake provider env not active",
      });
      return;
    }

    await liveCreate.check();
    await page.getByTestId("ops1-create-session").click();
    await expect(page.getByTestId("ops1-mode-locked")).toBeVisible();
    await expect(page.getByTestId("ops1-badge-test-provider")).toBeVisible();
    await expect(page.getByTestId("ops1-badge-live")).toHaveCount(0);
    await expect(page.getByTestId("global-mode-badge")).toHaveText(
      "TEST PROVIDER / NON LIVE",
    );

    await page.getByTestId("ops1-message-input").fill("Live fake tour 1");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-turn").nth(1)).toHaveAttribute(
      "data-role",
      "assistant_live",
    );
    await expect(page.getByText("TEST / FAKE").first()).toBeVisible();
    await expect(page.getByText("Assistant test").first()).toBeVisible();
    await expect(page.getByTestId("ops1-badge-live")).toHaveCount(0);
    await expect(page.getByTestId("ops1-mode-locked")).toContainText(
      "LIVE TECHNIQUE (TEST)",
    );
    await expect(page.getByTestId("global-mode-badge")).toHaveText(
      "TEST PROVIDER / NON LIVE",
    );

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-test-provider-non-live.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-global-badge-test-provider.png"),
      fullPage: true,
    });
    // legacy alias used by prior pack naming
    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-live-ready.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-multiturn.png"),
      fullPage: true,
    });

    await page
      .getByTestId("ops1-message-input")
      .fill("__OPS1_FORCE_PROVIDER_ERROR__");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-error")).toBeVisible();
    await expect(page.getByTestId("ops1-mode-locked")).toContainText(
      "verrouillé",
    );

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i2-provider-error.png"),
      fullPage: true,
    });
  });
});
