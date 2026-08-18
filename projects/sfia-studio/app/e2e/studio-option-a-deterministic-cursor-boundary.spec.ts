/**
 * Cycle 8 Delivery — deterministic Cursor boundary browser TOOLING proof.
 * ZERO REAL. Not the formal Cycle 9 QA verdict.
 *
 * Requires Next started with:
 *   SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY=1
 *   SFIA_STUDIO_E2E_QA_CONTROL=1
 *   SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1
 *   OPS1_CONVERSATION_PROVIDER=fake
 *   isolated SFIA_STUDIO_PRODUCT_DB_PATH
 *   SFIA_STUDIO_CURSOR_REAL unset
 *
 * Screenshots: .tmp-sfia-review/deterministic-browser-boundary-tooling/screenshots/
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/cycle-8-execution-window-observation-policy/screenshots",
);
const BANNER =
  "DETERMINISTIC / TEST BOUNDARY — ZERO REAL — not REAL proof";

function runId(): string {
  return `det-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

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

async function capture(page: Page, id: string, state: string): Promise<string> {
  await stamp(page);
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

async function createUniqueProject(page: Page, suffix: string) {
  const name = `QA DET boundary ${suffix}`;
  await page.goto("/studio/projects/new");
  await expect(page.getByTestId("create-project-form")).toBeVisible();
  await page.locator("#project-name").fill(name);
  await page
    .locator("#project-objective")
    .fill("Deterministic browser proof tooling — ZERO REAL");
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
  const url = page.url();
  const rawId = url.split("/studio/projects/")[1]?.split(/[?#]/)[0];
  if (!rawId) throw new Error("projectId missing from URL");
  return { name, projectId: decodeURIComponent(rawId) };
}

async function sendGatedStandard(page: Page) {
  const input = page.getByTestId("project-assistant-input");
  await expect(input).toBeEnabled({ timeout: 15_000 });
  await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
    timeout: 45_000,
  });
}

test.describe("deterministic Cursor boundary browser tooling", () => {
  test.describe.configure({ timeout: 240_000 });

  test("B1–B4 running → pending refresh → terminal → reload", async ({
    page,
  }) => {
    test.setTimeout(240_000);
    await page.setViewportSize({ width: 1440, height: 1024 });
    const created = await createUniqueProject(page, runId());
    await sendGatedStandard(page);
    await page.getByTestId("f2-decide-GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });
    const decisionId = (
      await page.getByTestId("f2-decision-id").textContent()
    )?.trim();
    if (!decisionId) throw new Error("decisionId missing");

    await page.getByTestId("f3-prepare-button").click();
    await expect(page.getByTestId("project-assistant-f3-contract")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-contract-action")).toContainText(
      "cursor.read_only.inspect",
    );
    const executionContractId = (
      await page.getByTestId("f3-contract-id").textContent()
    )?.trim();
    if (!executionContractId) throw new Error("executionContractId missing");

    // N1 — before Confirmation, refresh absent.
    await expect(page.getByTestId("f3-refresh-running-button")).toHaveCount(0);
    await expect(page.getByTestId("f3-confirm-execute-button")).toBeVisible();

    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });

    // B1
    await expect(page.getByTestId("f3-attempt-status")).toContainText(/running/i);
    await expect(page.getByTestId("f3-running-refresh-title")).toContainText(
      "Exécution en cours",
    );
    await expect(page.getByTestId("f3-refresh-running-button")).toBeVisible();
    await expect(page.getByTestId("f3-refresh-running-button")).toContainText(
      "Actualiser le résultat",
    );
    await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
    await expect(
      page.getByTestId("project-assistant-panel").getByRole("button", {
        name: /Relancer|Réessayer|Confirmer l’exécution/i,
      }),
    ).toHaveCount(0);
    const attemptIdB1 = (
      await page.getByTestId("f3-attempt-id").textContent()
    )?.trim();
    if (!attemptIdB1) throw new Error("attemptId missing after confirm");
    await capture(page, "01-running-refresh-available", "B1 running");

    // B6 — manual refresh remains possible without relaunch.
    await page.getByTestId("f3-refresh-running-button").click();
    await expect(page.getByTestId("f3-attempt-id")).toHaveText(attemptIdB1, {
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-attempt-status")).toContainText(/running/i);
    await expect(page.getByTestId("f3-refresh-running-button")).toBeVisible();
    await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
    await capture(page, "02-pending-same-attempt", "B2/B6 pending same Attempt");

    // B2/B3/B4 — auto O3 continues on the same Attempt; terminal without a second launch.
    await expect(page.getByTestId("f3-attempt-status")).toContainText(
      /succeeded/i,
      { timeout: 20_000 },
    );
    await expect(page.getByTestId("f3-attempt-id")).toHaveText(attemptIdB1);
    await expect(page.getByTestId("f3-result-user-summary")).toContainText(
      /terminée avec succès/i,
    );
    await expect(page.getByTestId("f3-evidence-card")).toBeVisible();
    await expect(page.getByTestId("f3-evidence-user-summary")).toContainText(
      /preuve a été enregistrée/i,
    );
    await expect(page.getByTestId("f3-review-bundle-card")).toBeVisible();
    await expect(page.getByTestId("f3-review-bundle-user-summary")).toContainText(
      /dossier de revue/i,
    );
    await expect(page.getByTestId("f3-evidence-id")).toBeHidden();
    await expect(page.getByTestId("f3-evidence-id")).not.toHaveText("ev:pending-real");
    await expect(page.getByTestId("f3-review-bundle-id")).toBeHidden();
    await expect(page.getByTestId("f3-review-bundle-id")).not.toHaveText(
      "rb:pending-real",
    );
    await expect(page.getByTestId("f3-recommendation-card")).toBeVisible();
    await expect(page.getByTestId("f3-refresh-running-button")).toHaveCount(0);
    await capture(page, "03-terminal-evidence", "B3 terminal Evidence");

    await expect(page.getByTestId("living-project-state-panel")).toBeVisible();
    await capture(page, "04-post-evidence-lps", "B3 LPS after Evidence");

    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-assistant-empty")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("living-project-state-panel")).toBeVisible();
    await expect(page.getByTestId("project-history-panel")).toBeVisible();
    await capture(page, "05-reloaded-terminal", "B4 reload durable LPS");

    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    const campaign = {
      classification: [
        "UI-DRIVEN",
        "HARNESS-ARMED-BOUNDARY",
        "DOMAIN-INTEGRATION-PROVEN",
        "DETERMINISTIC PROVEN",
      ],
      banner: BANNER,
      projectId: created.projectId,
      decisionId,
      executionContractId,
      attemptId: attemptIdB1,
      note: "ZERO REAL — TEST BOUNDARY — not REAL proof",
    };
    fs.writeFileSync(
      path.join(CAPTURE_ROOT, "campaign-ids.json"),
      `${JSON.stringify(campaign, null, 2)}\n`,
    );
  });
});
