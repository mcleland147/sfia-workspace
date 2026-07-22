import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/control-tower-fast-track-evidence/screenshots",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test.describe("Control Tower Fast Track — tools UI", () => {
  test("fixture git tool marker shows tool events", async ({ page }) => {
    await page.goto("/ops1/nouvelle-demande");
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();

    await page.getByTestId("ops1-create-mode-fixture").check();
    await page.getByTestId("ops1-create-session").click();
    await expect(page.getByTestId("ops1-session-id")).toBeVisible();

    await page
      .getByTestId("ops1-message-input")
      .fill("État projet __CT_TOOL_GIT_STATUS__");
    await page.getByTestId("ops1-send-message").click();

    await expect(page.getByTestId("ct-sources-panel")).toBeVisible();
    await expect(page.getByTestId("ct-tool-event").first()).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("ct-timeline-panel")).toBeVisible();

    await page.screenshot({
      path: path.join(screenshotDir, "01-fixture-git-tool.png"),
      fullPage: true,
    });
  });

  test("denied path tool is visible as denied/failed event", async ({
    page,
  }) => {
    await page.goto("/ops1/nouvelle-demande");
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();
    await page.getByTestId("ops1-create-mode-fixture").check();
    await page.getByTestId("ops1-create-session").click();
    await page
      .getByTestId("ops1-message-input")
      .fill("Secret probe __CT_TOOL_DENIED_PATH__");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-turn").last()).toContainText(
      "PATH_NOT_ALLOWED",
      { timeout: 15_000 },
    );
    await expect(page.getByTestId("ct-tool-event").first()).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "02-tool-denied.png"),
      fullPage: true,
    });
  });
});
