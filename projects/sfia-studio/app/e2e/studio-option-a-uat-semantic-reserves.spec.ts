/**
 * Cycle 8 Delivery — PRE-M6 UAT semantic reserves browser DET proof.
 * ZERO REAL. Fake OpenAI + deterministic Cursor boundary.
 *
 * Captures:
 *   A. contrat avant confirmation
 *   B. running
 *   C. succeeded + Evidence/RB/Recommendation
 *   D. reload/reprise durable
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  process.env.SFIA_UAT_RESERVES_SCREENSHOT_DIR?.trim() ||
    "../../../.tmp-sfia-review/pre-m6-uat-reserves-delivery-screenshots",
);
const BANNER =
  "DETERMINISTIC / TEST BOUNDARY — ZERO REAL — not REAL proof";

async function stamp(page: Page): Promise<void> {
  await page.evaluate((text) => {
    const id = "sfia-det-banner";
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement("div");
      el.id = id;
      el.setAttribute("data-testid", "sfia-det-banner");
      el.style.cssText =
        "position:fixed;top:0;left:0;right:0;z-index:2147483647;background:#111;color:#f6c90e;font:12px/1.35 ui-monospace,monospace;padding:8px 12px;pointer-events:none";
      document.body.appendChild(el);
    }
    el.textContent = text;
  }, BANNER);
}

async function capture(page: Page, id: string): Promise<string> {
  await stamp(page);
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

test.describe("PRE-M6 UAT semantic reserves — deterministic browser", () => {

// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");

  test.describe.configure({ timeout: 240_000 });

  test("A–D confirmation → running → succeeded → reload", async ({ page }) => {
    test.setTimeout(240_000);
    await page.setViewportSize({ width: 1440, height: 1024 });

    await page.goto("/studio/projects/new");
    await expect(page.getByTestId("create-project-form")).toBeVisible();
    await page.locator("#project-name").fill("PRE-M6 UAT reserves DET");
    await page.locator("#project-objective").fill("Semantic reserves DET — ZERO REAL");
    await page
      .locator("#project-context")
      .fill("E2E TEST BOUNDARY — Cursor CLI not invoked.");
    await page.getByTestId("create-project-submit").click();
    await expect(page.getByTestId("open-project-workspace")).toBeVisible({
      timeout: 30_000,
    });
    await page.getByTestId("open-project-workspace").click();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });

    const input = page.getByTestId("project-assistant-input");
    await expect(input).toBeEnabled({ timeout: 15_000 });
    await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
    await page.getByTestId("project-assistant-send").click();
    await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
      timeout: 45_000,
    });
    await page.getByTestId("f2-decide-GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });

    await page.getByTestId("f3-prepare-button").click();
    await expect(page.getByTestId("project-assistant-f3-contract")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-contract-user-summary")).toBeVisible();
    await expect(page.getByTestId("f3-contract-action")).toContainText(
      "cursor.read_only.inspect",
    );
    await expect(page.getByTestId("f3-contract-capabilities")).toContainText(
      "cap:cursor.read_only",
    );
    await expect(page.getByTestId("f3-contract-semantic-chip")).not.toHaveText(
      /Exécution réelle bloquée/,
    );
    await expect(page.getByTestId("f3-contract-semantic-chip")).not.toHaveText(
      /Cursor réelle/,
    );
    await expect(page.getByTestId("f3-contract-semantic-chip")).toHaveText(
      /contrôlée|déterministe|bornée/,
    );
    await expect(page.getByTestId("f3-contract-constraints")).not.toContainText(
      "CURSOR CLI REAL PROFILE",
    );
    await expect(page.getByTestId("f3-refresh-running-button")).toHaveCount(0);
    await capture(page, "A-contract-before-confirm");

    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-attempt-status")).toContainText(/running/i);
    await expect(
      page.getByTestId("project-assistant-f3-execute"),
    ).not.toContainText("Aucune exécution réelle");
    await expect(page.getByTestId("project-assistant-f3-no-real")).toHaveCount(0);
    const attemptId = (await page.getByTestId("f3-attempt-id").textContent())?.trim();
    if (!attemptId) throw new Error("attemptId missing");
    await capture(page, "B-running");

    await expect(page.getByTestId("f3-attempt-status")).toContainText(/succeeded/i, {
      timeout: 20_000,
    });
    await expect(page.getByTestId("f3-attempt-id")).toHaveText(attemptId);
    await expect(page.getByTestId("f3-execute-semantic")).toBeVisible();
    await expect(page.getByTestId("f3-execute-semantic")).toHaveText(
      /Exécution déterministe de test/,
    );
    await expect(page.getByTestId("f3-execute-semantic")).not.toHaveText(
      /Aucune exécution réelle|REAL BOUNDARY PROVEN|Fixture de test/,
    );
    await expect(page.getByTestId("f3-result-user-summary")).toBeVisible();
    await expect(page.getByTestId("f3-recommendation-card")).toBeVisible();
    await expect(page.getByTestId("f3-recommendation-execution-authority")).toContainText(
      "false",
    );
    await expect(page.getByText("REAL BOUNDARY PROVEN")).toHaveCount(0);
    await capture(page, "C-succeeded-evidence-rb-recommendation");
    await capture(page, "A-det-session-succeeded");

    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("durable-evidence-outcome")).toBeVisible({
      timeout: 20_000,
    });
    await expect(page.getByTestId("durable-outcome-semantic")).toBeVisible();
    await expect(page.getByTestId("durable-outcome-semantic")).toContainText(
      "Lecture durable du résultat",
    );
    await expect(page.getByTestId("durable-ephemeral-notice")).toContainText(
      "Lecture durable du résultat",
    );
    await expect(page.getByTestId("durable-ephemeral-notice")).toContainText(
      "résultat d'exécution borné",
    );
    await expect(page.getByText("Une exécution Cursor réelle")).toHaveCount(0);
    await expect(page.getByText("Exécution Cursor réelle")).toHaveCount(0);
    await expect(page.getByText("REAL BOUNDARY PROVEN")).toHaveCount(0);
    await expect(page.getByText("REAL execution remains disabled")).toHaveCount(0);
    await expect(page.getByText("[[SFIA_POST_EVIDENCE_NORA_ANALYSIS]]")).toHaveCount(
      0,
    );
    await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
    await expect(page.getByTestId("project-assistant-f3-execute")).toHaveCount(0);
    await capture(page, "D-reload-durable-read");
    await capture(page, "B-det-reload-neutral-durable");
  });
});
