import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-ops1-i6",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

async function prepareThroughI5Fixture(
  page: import("@playwright/test").Page,
  opts?: { keepUnusedModify?: boolean },
) {
  await page.goto("/nouvelle-demande");
  await page.evaluate(() => window.sessionStorage.clear());
  await page.reload();
  await expect(page.getByTestId("ops1-session-root")).toBeVisible();
  await page.getByTestId("ops1-create-mode-fixture").check();
  await page.getByTestId("ops1-create-session").click();
  await expect(page.getByTestId("ops1-open-session")).toBeVisible();
  await page.getByTestId("ops1-message-input").fill("Besoin rapport I6");
  await page.getByTestId("ops1-send-message").click();
  await expect(page.getByTestId("ops1-turn").first()).toBeVisible();
  await page.getByTestId("ops1-i3-create-candidate").click();
  await page.getByTestId("ops1-gate-go").click();
  await expect(page.getByTestId("ops1-i4-allowlist")).toBeVisible();

  if (!opts?.keepUnusedModify) {
    // COMPLETED path: only READ+CREATE so fixture CREATE covers allowlist.
    while (
      (await page.locator('[data-testid^="ops1-i4-draft-remove-"]').count()) > 2
    ) {
      await page.getByTestId("ops1-i4-draft-remove-2").click();
    }
  }
  // Ensure CREATE proof file on last CREATE row when present
  const path1 = page.getByTestId("ops1-i4-draft-path-1");
  if ((await path1.count()) && !opts?.keepUnusedModify) {
    await path1.fill("projects/campus360/04-ops1-i5-execution-proof.md");
    await page.getByTestId("ops1-i4-draft-mode-1").selectOption("CREATE");
  }
  if (opts?.keepUnusedModify) {
    // Default draft: READ + unused MODIFY + CREATE → REPORT_INCOMPLETE by design.
    await page
      .getByTestId("ops1-i4-draft-path-2")
      .fill("projects/campus360/04-ops1-i5-execution-proof.md");
    await page.getByTestId("ops1-i4-draft-mode-2").selectOption("CREATE");
  }

  await page.getByTestId("ops1-i4-evaluate").click();
  await expect(page.getByTestId("ops1-i4-global-status")).toContainText(
    "ALLOWLIST VALIDE",
  );
  await page.getByTestId("ops1-i5-adapter-fixture").check();
  await page.getByTestId("ops1-i5-create-contract").click();
  await page.getByTestId("ops1-i5-record-gate").click();
  await page.getByTestId("ops1-i5-run-execution").click();
  await expect(page.getByTestId("ops1-i5-attempt-status")).toContainText(
    "SUCCEEDED",
    { timeout: 60_000 },
  );
}

test.describe("OPS1 I6 report + continuation", () => {
  test("A — COMPLETED report then resume chat without new execution", async ({
    page,
  }) => {
    await prepareThroughI5Fixture(page);
    await expect(page.getByTestId("ops1-increment-badge")).toContainText(
      "OPS1 I6",
    );
    await expect(page.getByTestId("ops1-i6-report")).toBeVisible();
    await expect(page.getByTestId("ops1-i6-open-continuation")).toBeDisabled();
    await page.getByTestId("ops1-i6-generate-report").click();
    await expect(page.getByTestId("ops1-i6-report-status")).toContainText(
      "COMPLETED",
    );
    await expect(page.getByTestId("ops1-i6-duration")).not.toContainText(
      "METRICS_INCOMPLETE",
    );
    await expect(page.getByTestId("ops1-i6-coverage-list")).toBeVisible();
    await expect(page.getByTestId("ops1-i6-open-continuation")).toBeDisabled();
    const attemptBefore = await page
      .getByTestId("ops1-i5-attempt-id")
      .innerText();
    await page.getByTestId("ops1-i6-resume-chat").click();
    await expect(page.getByTestId("ops1-i6-resume-summary")).toContainText(
      "REPRISE CHAT",
    );
    await page
      .getByTestId("ops1-message-input")
      .fill("Exécute Cursor maintenant sur Campus360");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-turn").last()).toBeVisible();
    await expect(page.getByTestId("ops1-i5-attempt-id")).toHaveText(
      attemptBefore,
    );
    await page.screenshot({
      path: path.join(screenshotDir, "01-report-completed-resume.png"),
      fullPage: true,
    });
  });

  test("B — REPORT_INCOMPLETE when unused MODIFY remains allowlisted", async ({
    page,
  }) => {
    await prepareThroughI5Fixture(page, { keepUnusedModify: true });
    await page.getByTestId("ops1-i6-generate-report").click();
    await expect(page.getByTestId("ops1-i6-report-status")).toContainText(
      "REPORT_INCOMPLETE",
    );
    await expect(page.getByTestId("ops1-i6-report-status")).toContainText(
      "PAS UN SUCCÈS",
    );
    await expect(page.getByTestId("ops1-i6-report-status")).not.toContainText(
      "COMPLETED",
    );
    await expect(page.getByTestId("ops1-i6-generate-report")).toBeDisabled();
    await page.screenshot({
      path: path.join(screenshotDir, "02-report-status.png"),
      fullPage: true,
    });
  });

  test("C — close session then continuation with parentSessionId", async ({
    page,
  }) => {
    await prepareThroughI5Fixture(page);
    await page.getByTestId("ops1-i6-generate-report").click();
    await expect(page.getByTestId("ops1-i6-report-id")).toBeVisible();
    await expect(page.getByTestId("ops1-i6-open-continuation")).toBeDisabled();
    const parentId = await page.evaluate(() =>
      window.sessionStorage.getItem("sfia-ops1-i1-active-session"),
    );
    await page.getByTestId("ops1-i6-close-session").click();
    await expect(page.getByTestId("ops1-i6-open-continuation")).toBeEnabled();
    await page
      .getByTestId("ops1-message-input")
      .fill("tentative mutation CLOSED");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-error")).toBeVisible({
      timeout: 10_000,
    });
    await page.getByTestId("ops1-i6-open-continuation").click();
    await expect(page.getByTestId("ops1-i6-parent-session")).toContainText(
      parentId ?? "ops1-sess-",
    );
    const childId = await page.evaluate(() =>
      window.sessionStorage.getItem("sfia-ops1-i1-active-session"),
    );
    expect(childId).toBeTruthy();
    expect(childId).not.toBe(parentId);
    await page.screenshot({
      path: path.join(screenshotDir, "03-continuation.png"),
      fullPage: true,
    });
  });
});
