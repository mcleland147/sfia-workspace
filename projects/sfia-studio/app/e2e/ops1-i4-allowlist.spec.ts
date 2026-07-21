import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-ops1-i4",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

async function prepareCandidate(page: import("@playwright/test").Page) {
  await page.goto("/nouvelle-demande");
  await page.evaluate(() => window.sessionStorage.clear());
  await page.reload();
  await expect(page.getByTestId("ops1-session-root")).toBeVisible();
  await page.getByTestId("ops1-create-mode-fixture").check();
  await page.getByTestId("ops1-create-session").click();
  await expect(page.getByTestId("ops1-open-session")).toBeVisible();
  await page.getByTestId("ops1-message-input").fill("Besoin allowlist I4");
  await page.getByTestId("ops1-send-message").click();
  await expect(page.getByTestId("ops1-turn").first()).toBeVisible();
  await page.getByTestId("ops1-i3-create-candidate").click();
  await expect(page.getByTestId("ops1-i4-allowlist")).toBeVisible();
}

test.describe("OPS1 I4 allowlist evaluation — no execution", () => {
  test("valid allowlist with READ/CREATE/MODIFY + no exec CTA", async ({
    page,
  }) => {
    await prepareCandidate(page);
    await expect(page.getByTestId("ops1-increment-badge")).toContainText(
      "OPS1 I5",
    );
    await expect(page.getByTestId("ops1-i4-allowlist-lede")).toContainText(
      "Aucune exécution",
    );
    await expect(page.getByTestId("ops1-i4-no-exec-cta")).toBeVisible();
    await expect(page.getByRole("button", { name: /Exécuter/i })).toHaveCount(
      0,
    );
    await expect(
      page.getByRole("button", { name: /Lancer Cursor/i }),
    ).toHaveCount(0);

    await page.getByTestId("ops1-i4-evaluate").click();
    await expect(page.getByTestId("ops1-i4-global-status")).toContainText(
      "ALLOWLIST VALIDE — AUCUNE EXÉCUTION",
    );
    await expect(page.getByTestId("ops1-i4-bucket-reads")).toContainText(
      "README.md",
    );
    await expect(page.getByTestId("ops1-i4-bucket-creates")).toContainText(
      "04-ops1-i5-execution-proof.md",
    );
    await expect(page.getByTestId("ops1-i4-bucket-modifies")).toContainText(
      "01-opportunity-and-vision.md",
    );

    await page.screenshot({
      path: path.join(screenshotDir, "01-allowlist-valid.png"),
      fullPage: true,
    });
  });

  test("refuses MODIFY on protected 03", async ({ page }) => {
    await prepareCandidate(page);
    await page.getByTestId("ops1-i4-draft-path-0").fill(
      "projects/campus360/03-pre-framing-decision-pack.md",
    );
    await page.getByTestId("ops1-i4-draft-mode-0").selectOption("MODIFY");
    // Keep only one row for clarity
    while ((await page.locator('[data-testid^="ops1-i4-draft-remove-"]').count()) > 1) {
      await page.getByTestId("ops1-i4-draft-remove-1").click();
    }
    await page.getByTestId("ops1-i4-evaluate").click();
    await expect(page.getByTestId("ops1-i4-global-status")).toContainText(
      "CORRECTION REQUISE — AUCUNE EXÉCUTION",
    );
    await expect(page.getByTestId("ops1-i4-entry-reason-0")).toContainText(
      "protégé",
    );
    await page.screenshot({
      path: path.join(screenshotDir, "02-deny-modify-03.png"),
      fullPage: true,
    });
  });

  test("refuses unlisted existing Campus360 markdown", async ({ page }) => {
    await prepareCandidate(page);
    await page
      .getByTestId("ops1-i4-draft-path-0")
      .fill("projects/campus360/99-unlisted-extra.md");
    await page.getByTestId("ops1-i4-draft-mode-0").selectOption("READ");
    while (
      (await page.locator('[data-testid^="ops1-i4-draft-remove-"]').count()) > 1
    ) {
      await page.getByTestId("ops1-i4-draft-remove-1").click();
    }
    await page.getByTestId("ops1-i4-evaluate").click();
    await expect(page.getByTestId("ops1-i4-global-status")).toContainText(
      "CORRECTION REQUISE — AUCUNE EXÉCUTION",
    );
    await expect(page.getByTestId("ops1-i4-entry-reason-0")).toContainText(
      "Chemin absent de la politique allowlist déclarative.",
    );
    await page.screenshot({
      path: path.join(screenshotDir, "04-deny-unlisted-campus360-markdown.png"),
      fullPage: true,
    });
  });

  test("refuses wildcard / outside campus360", async ({ page }) => {
    await prepareCandidate(page);
    await page
      .getByTestId("ops1-i4-draft-path-0")
      .fill("projects/campus360/**");
    await page.getByTestId("ops1-i4-draft-mode-0").selectOption("READ");
    while ((await page.locator('[data-testid^="ops1-i4-draft-remove-"]').count()) > 1) {
      await page.getByTestId("ops1-i4-draft-remove-1").click();
    }
    await page.getByTestId("ops1-i4-evaluate").click();
    await expect(page.getByTestId("ops1-i4-global-status")).toContainText(
      "AUCUNE EXÉCUTION",
    );
    await expect(page.getByTestId("ops1-i4-entry-reason-0")).toContainText(
      /Wildcard|interdit/i,
    );
    await page.screenshot({
      path: path.join(screenshotDir, "03-deny-wildcard.png"),
      fullPage: true,
    });
  });
});
