import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-ops1-i1",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test.describe("OPS1 I1 session + journal", () => {
  test("creates session, appends turns, persists after reload", async ({
    page,
  }) => {
    await page.goto("/ops1/nouvelle-demande");
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();
    await expect(page.getByTestId("ops1-session-root")).toBeVisible();
    await expect(
      page.getByTestId("ops1-session-root").getByText("FIXTURE / NON LIVE"),
    ).toBeVisible();
    await expect(page.getByTestId("ops1-empty-state")).toBeVisible();

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i1-empty.png"),
      fullPage: true,
    });

    await page.getByTestId("ops1-create-mode-fixture").check();
    await page.getByTestId("ops1-create-session").click();
    await expect(page.getByTestId("ops1-open-session")).toBeVisible();
    await expect(page.getByTestId("ops1-mode-locked")).toContainText(
      "FIXTURE — verrouillé",
    );
    const sessionId = await page.getByTestId("ops1-session-id").innerText();
    expect(sessionId).toMatch(/^ops1-sess-/);

    await page.getByTestId("ops1-message-input").fill("Premier message I1");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-turn").first()).toBeVisible();

    await page.getByTestId("ops1-message-input").fill("Second message I1");
    await page.getByTestId("ops1-send-message").click();

    const turns = page.getByTestId("ops1-turn");
    await expect(turns).toHaveCount(4); // 2 user + 2 fixture assistant
    await expect(turns.nth(0)).toHaveAttribute("data-role", "user");
    await expect(turns.nth(1)).toHaveAttribute("data-role", "assistant_fixture");
    await expect(
      page.getByTestId("ops1-journal").getByText("FIXTURE / NON LIVE").first(),
    ).toBeVisible();

    // No execution CTA
    await expect(
      page.getByRole("button", { name: /exécuter|gate|cursor/i }),
    ).toHaveCount(0);

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i1-open-journal.png"),
      fullPage: true,
    });

    await page.reload();
    await expect(page.getByTestId("ops1-session-id")).toHaveText(sessionId);
    await expect(page.getByTestId("ops1-turn")).toHaveCount(4);
    await expect(page.getByTestId("ops1-turn").nth(2)).toContainText(
      "Second message I1",
    );

    await page.screenshot({
      path: path.join(screenshotDir, "ops1-i1-after-reload.png"),
      fullPage: true,
    });
  });
});
