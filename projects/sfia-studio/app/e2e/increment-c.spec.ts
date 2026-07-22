import { expect, test } from "@playwright/test";
import fs from "fs";
import path from "path";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-increment-c",
);
const correctiveDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-increment-c-corrective",
);
const userInputDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-increment-c-user-input",
);

const CAMPUS =
  "Je veux lancer un cycle de cadrage pour préparer le développement de Campus360.";

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
  fs.mkdirSync(correctiveDir, { recursive: true });
  fs.mkdirSync(userInputDir, { recursive: true });
});

test.describe("Increment C — GPT qualification UI", () => {
  test("empty demand blocks confirmation + invalid capture", async ({ page }) => {
    await page.goto("/ops1/nouvelle-demande?vs=VS-UX-01");
    await expect(page.getByTestId("vs-demand-input")).toHaveValue("");
    await expect(page.getByTestId("vs-qualify-open-confirm")).toHaveAttribute(
      "aria-disabled",
      "true",
    );
    await page.screenshot({
      path: path.join(userInputDir, "inc-c-demand-empty.png"),
      fullPage: true,
    });
    await page.getByTestId("vs-qualify-open-confirm").click({ force: true });
    await expect(page.getByTestId("vs-demand-error")).toBeVisible();
    await page.screenshot({
      path: path.join(userInputDir, "inc-c-demand-invalid.png"),
      fullPage: true,
    });
  });

  test("Campus360 user demand → confirmation → fixture candidate", async ({ page }) => {
    test.setTimeout(90_000);
    await page.goto("/ops1/nouvelle-demande?vs=VS-UX-01");
    await page.getByTestId("vs-demand-input").fill(CAMPUS);
    await page.screenshot({
      path: path.join(userInputDir, "inc-c-demand-campus360.png"),
      fullPage: true,
    });
    await page.getByTestId("vs-qualify-open-confirm").click();
    await expect(page.getByTestId("vs-confirm-demand-text")).toContainText(CAMPUS);
    await expect(page.getByTestId("vs-gpt-confirm-panel")).toContainText("gpt-5.4-mini");
    await page.screenshot({
      path: path.join(userInputDir, "inc-c-confirm-exact-demand.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "inc-c-confirm-panel.png"),
      fullPage: true,
    });
    await page.getByTestId("vs-gpt-confirm-fixture").click();
    await expect(page.getByTestId("vs-qual-cycle")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("vs-qual-cycle")).toContainText("cadrage");
    await expect(page.getByTestId("vs-qual-mode")).toContainText("fixture");
    await expect(page.getByTestId("vs-submitted-demand")).toContainText(CAMPUS);
    await expect(page.getByTestId("vs-demand-provenance")).toContainText("sha256=");
    await expect(page.getByTestId("vs-qual-usage")).toContainText("estimation");
    await expect(page.getByTestId("vs-morris-still-required")).toBeVisible();
    await page.screenshot({
      path: path.join(userInputDir, "inc-c-fixture-campus360-candidate.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(userInputDir, "inc-c-canonical-cycle-blocks.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(userInputDir, "inc-c-tokens-cost-morris.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(userInputDir, "inc-c-no-secret.png"),
      fullPage: true,
    });
    await page.screenshot({
      path: path.join(screenshotDir, "inc-c-candidate.png"),
      fullPage: true,
    });
  });

  test("edit demand after fixture uses new text", async ({ page }) => {
    test.setTimeout(90_000);
    await page.goto("/ops1/nouvelle-demande?vs=VS-UX-01");
    await page.getByTestId("vs-demand-input").fill(CAMPUS);
    await page.getByTestId("vs-qualify-open-confirm").click();
    await page.getByTestId("vs-gpt-confirm-fixture").click();
    await expect(page.getByTestId("vs-qual-cycle")).toBeVisible({ timeout: 60_000 });
    await page.getByTestId("vs-edit-demand-again").click();
    const variant = `${CAMPUS} Variante QA.`;
    await page.getByTestId("vs-demand-input").fill(variant);
    await page.getByTestId("vs-qualify-open-confirm").click();
    await expect(page.getByTestId("vs-confirm-demand-text")).toContainText("Variante QA");
    await page.getByTestId("vs-gpt-confirm-fixture").click();
    await expect(page.getByTestId("vs-submitted-demand")).toContainText("Variante QA");
  });

  test("Nora composer is explicitly non-editable", async ({ page }) => {
    await page.goto("/ops1/nouvelle-demande?vs=VS-UX-01");
    await expect(page.getByTestId("copilot-composer-disabled")).toContainText(
      "Chat non disponible",
    );
  });
});
