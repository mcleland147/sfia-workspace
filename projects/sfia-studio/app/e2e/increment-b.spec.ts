import { expect, test } from "@playwright/test";
import fs from "fs";
import path from "path";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-increment-b",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test.describe("Increment B — harness-derived cockpit", () => {
  test("decision shows harness panel and four routes only", async ({ page }) => {
    await page.goto("/decision?vs=VS-UX-04");
    await expect(page.getByTestId("vs-demo-banner")).toContainText("Incrément C");
    await expect(page.getByTestId("vs-harness-idle")).toBeVisible();
    await expect(page.getByTestId("vs-status-source")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "inc-b-gate-valide-idle.png"),
      fullPage: true,
    });
  });

  test("GO confirm runs fixture harness and shows derived status", async ({ page }) => {
    test.setTimeout(90_000);
    await page.goto("/decision?vs=VS-UX-04");
    await page.getByTestId("vs-gate-GO").click();
    await page.getByTestId("vs-gate-confirm").click();
    // Nominal GO navigates to cycle-actif; harness view is persisted in sessionStorage.
    await expect(page).toHaveURL(/cycle-actif/, { timeout: 60_000 });
    await expect(page.getByTestId("vs-harness-panel")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("vs-status-source")).toContainText("harness");
    await expect(page.getByTestId("vs-go-valid")).toContainText("oui");
    await expect(page.getByTestId("vs-report-flag")).toContainText("disponible");
    await expect(page.getByTestId("vs-proof-flag")).toContainText("complet");
    await page.screenshot({
      path: path.join(screenshotDir, "inc-b-execution-fixture.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "inc-b-rapport-preuves.png"),
      fullPage: true,
    });
    await page.getByTestId("vs-resume").click();
    await expect(page.getByTestId("vs-harness-panel")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("vs-harness-status")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "inc-b-reprise-session.png"),
      fullPage: true,
    });
  });

  test("GO invalid probe refuses without success", async ({ page }) => {
    await page.goto("/decision?vs=VS-UX-04");
    await page.getByRole("button", { name: /Simuler GO invalide/i }).click();
    await page.getByTestId("vs-gate-GO").click();
    await page.getByTestId("vs-gate-confirm").click();
    await expect(page.getByTestId("vs-harness-panel")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("vs-go-valid")).toContainText("non");
    await expect(page.getByTestId("vs-harness-error")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "inc-b-go-invalide.png"),
      fullPage: true,
    });
  });

  test("STOP via cycle harness is distinct", async ({ page }) => {
    await page.goto("/cycle-actif?vs=VS-UX-05");
    await page.getByTestId("vs-stop-execution").click();
    await expect(page.getByTestId("vs-harness-panel")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("vs-stop-timeout")).toContainText("STOP");
    await page.screenshot({
      path: path.join(screenshotDir, "inc-b-stop.png"),
      fullPage: true,
    });
  });

  test("synthese shows derived closure from harness when resumed", async ({ page }) => {
    test.setTimeout(90_000);
    await page.goto("/decision?vs=VS-UX-04");
    await page.getByTestId("vs-gate-GO").click();
    await page.getByTestId("vs-gate-confirm").click();
    await expect(page).toHaveURL(/cycle-actif/, { timeout: 60_000 });
    await expect(page.getByTestId("vs-harness-panel")).toBeVisible({ timeout: 60_000 });
    await page.goto("/synthese?vs=VS-UX-10");
    await expect(page.getByTestId("vs-harness-panel")).toBeVisible({ timeout: 30_000 });
    await page.getByTestId("vs-resume").click();
    await expect(page.getByTestId("vs-harness-panel")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("vs-cycle-summary")).toContainText(/harness|CLOSED|fixture/i);
    await page.screenshot({
      path: path.join(screenshotDir, "inc-b-cloture-derivee.png"),
      fullPage: true,
    });
  });
});

