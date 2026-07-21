import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-ops1-i3",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

async function createFixtureSession(page: import("@playwright/test").Page) {
  await page.goto("/nouvelle-demande");
  await page.evaluate(() => window.sessionStorage.clear());
  await page.reload();
  await expect(page.getByTestId("ops1-session-root")).toBeVisible();
  await page.getByTestId("ops1-create-mode-fixture").check();
  await page.getByTestId("ops1-create-session").click();
  await expect(page.getByTestId("ops1-open-session")).toBeVisible();
  await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");
}

test.describe("OPS1 I3 action gate — fixture first / no execution", () => {
  test("ACTION_NOT_REQUIRED after conversation", async ({ page }) => {
    await createFixtureSession(page);
    await page.getByTestId("ops1-message-input").fill("Besoin d’info seulement");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-turn").first()).toBeVisible();

    await page.getByTestId("ops1-i3-qualify-not-required").click();
    await expect(page.getByTestId("ops1-i3-qualification")).toHaveAttribute(
      "data-qualification",
      "ACTION_NOT_REQUIRED",
    );
    await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");
    await expect(page.getByTestId("ops1-action-panel")).toHaveCount(0);

    await page.screenshot({
      path: path.join(screenshotDir, "01-action-not-required.png"),
      fullPage: true,
    });
  });

  test("ActionCandidate outside chat + four gates + refine + GO + reload", async ({
    page,
  }) => {
    await createFixtureSession(page);
    await page.getByTestId("ops1-message-input").fill("Proposition à structurer");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-turn").first()).toBeVisible();

    await page.getByTestId("ops1-i3-create-candidate").click();
    await expect(page.getByTestId("ops1-action-panel")).toBeVisible();
    await expect(page.getByTestId("ops1-action-status")).toContainText(
      "NON AUTORISÉE",
    );
    await expect(page.getByTestId("ops1-go-ne-exec")).toContainText(
      "GO ≠ exécution",
    );
    await expect(page.getByTestId("ops1-gate-panel")).toBeVisible();
    await expect(page.getByTestId("ops1-gate-go")).toBeVisible();
    await expect(page.getByTestId("ops1-gate-no-go")).toBeVisible();
    await expect(page.getByTestId("ops1-gate-corriger")).toBeVisible();
    await expect(page.getByTestId("ops1-gate-abandonner")).toBeVisible();

    // Chat GO does not create gate decision
    await page.getByTestId("ops1-message-input").fill("GO");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-gate-no-decision")).toBeVisible();
    await expect(page.getByTestId("ops1-action-status")).toContainText(
      "NON AUTORISÉE",
    );

    await page.screenshot({
      path: path.join(screenshotDir, "02-candidate-proposed-unauthorized.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "03-gate-four-actions.png"),
      fullPage: true,
    });

    // Refine
    await page.getByTestId("ops1-action-title-input").fill("Titre raffiné I3");
    await page
      .getByTestId("ops1-action-objective-input")
      .fill("Objectif raffiné I3");
    await page.getByTestId("ops1-action-scope-input").fill("Périmètre raffiné");
    await page.getByTestId("ops1-action-risk-input").fill("Risques raffinés");
    await page.getByTestId("ops1-action-refine-submit").click();
    await expect(page.getByTestId("ops1-action-version")).toHaveText("2");
    await expect(page.getByTestId("ops1-action-candidate-status")).toHaveText(
      "UNDER_REVIEW",
    );

    // GO
    await page.getByTestId("ops1-gate-go").click();
    await expect(page.getByTestId("ops1-action-status")).toContainText(
      "NON EXÉCUTÉE",
    );
    await expect(page.getByTestId("ops1-gate-go-microcopy")).toContainText(
      "Aucune exécution n’est lancée dans I3",
    );
    await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");
    await expect(page.getByRole("button", { name: /^Exécuter$/i })).toHaveCount(
      0,
    );
    await expect(
      page.getByRole("button", { name: /Lancer Cursor/i }),
    ).toHaveCount(0);

    await page.screenshot({
      path: path.join(screenshotDir, "04-go-validated-not-executed.png"),
      fullPage: true,
    });

    const sessionId = await page.getByTestId("ops1-session-id").innerText();
    const actionId = await page.getByTestId("ops1-action-id").innerText();

    await page.reload();
    await expect(page.getByTestId("ops1-session-id")).toHaveText(sessionId);
    await expect(page.getByTestId("ops1-action-id")).toHaveText(actionId);
    await expect(page.getByTestId("ops1-action-status")).toContainText(
      "NON EXÉCUTÉE",
    );
    await expect(page.getByTestId("ops1-gate-latest-decision")).toHaveAttribute(
      "data-kind",
      "GO",
    );

    await page.screenshot({
      path: path.join(screenshotDir, "05-after-reload.png"),
      fullPage: true,
    });

    // CORRIGER returns to refinement
    await page.getByTestId("ops1-gate-corriger").click();
    await expect(page.getByTestId("ops1-action-candidate-status")).toHaveText(
      "CHANGES_REQUESTED",
    );
    await expect(page.getByTestId("ops1-action-refine")).toBeVisible();

    await page.screenshot({
      path: path.join(screenshotDir, "06-corriger-refinement.png"),
      fullPage: true,
    });
  });

  test("NO_GO keeps session OPEN", async ({ page }) => {
    await createFixtureSession(page);
    await page.getByTestId("ops1-i3-create-candidate").click();
    await page.getByTestId("ops1-gate-no-go").click();
    await expect(page.getByTestId("ops1-action-candidate-status")).toHaveText(
      "REJECTED",
    );
    await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");
    await expect(page.getByTestId("ops1-gate-panel")).toHaveCount(0);
  });

  test("ABANDONNER keeps session OPEN", async ({ page }) => {
    await createFixtureSession(page);
    await page.getByTestId("ops1-i3-create-candidate").click();
    await page.getByTestId("ops1-gate-abandonner").click();
    await expect(page.getByTestId("ops1-action-candidate-status")).toHaveText(
      "ABANDONED",
    );
    await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");
  });

  test("execution attempt is refused", async ({ page }) => {
    await createFixtureSession(page);
    await page.getByTestId("ops1-i3-refuse-execution").click();
    await expect(page.getByTestId("ops1-i3-execution-refused")).toContainText(
      "Exécution refusée",
    );
    await expect(page.getByTestId("ops1-session-status")).toHaveText("OPEN");
  });
});
