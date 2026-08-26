/**
 * W4-B — Single authority path on canonical `/studio`.
 * Proves F2/F3 authority/execute affordances are not product-visible;
 * W2/W3 remains the sole decision → EC → confirm → authorize → execute chain.
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/w4-br-corr-01",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.md");
const MANIFEST_JSONL = path.join(CAPTURE_ROOT, "manifest.jsonl");

async function capture(
  page: Page,
  id: string,
  meta: {
    sc: string;
    state: string;
    viewport: { width: number; height: number };
    observation: string;
  },
) {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  const timestamp = new Date().toISOString();
  const row = {
    id,
    file: path.basename(file),
    timestamp,
    sha256,
    route: page.url(),
    ...meta,
    provenance:
      "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W4-BR-CORR-01 BUSINESS-FIRST COPY + EC STATUS",
  };
  fs.appendFileSync(MANIFEST_JSONL, `${JSON.stringify(row)}\n`);
  fs.appendFileSync(
    MANIFEST,
    `| ${row.file} | ${timestamp} | ${meta.viewport.width}×${meta.viewport.height} | ${page.url()} | ${meta.sc} | ${meta.state} | ${meta.observation} |\n`,
  );
}

async function assertNoSecondAuthorityPath(page: Page) {
  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
  await expect(page.getByTestId("f2-decide-NO_GO")).toHaveCount(0);
  await expect(page.getByTestId("f3-prepare-button")).toHaveCount(0);
  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
  await expect(page.getByTestId("f3-legacy-confirm-execute-button")).toHaveCount(
    0,
  );
  await expect(page.getByTestId("f3-legacy-fixture-prepare-button")).toHaveCount(
    0,
  );
  await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
}

test.describe("W4-B single authority path /studio", () => {
  test.describe.configure({ timeout: 360_000 });

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      (
        window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean }
      ).__SFIA_E2E_QA_CONTROL__ = true;
    });
  });

  test("qualify → single W2 HD → EC → confirm → authorize → execute; no F3 path", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(MANIFEST_JSONL, "");
    fs.writeFileSync(
      MANIFEST,
      [
        "# W4-BR-CORR-01 runtime captures (business-first copy + EC status)",
        "",
        "| file | timestamp | viewport | route | SC | state | observation |",
        "| --- | --- | --- | --- | --- | --- | --- |",
        "",
      ].join("\n"),
    );

    await page.setViewportSize({ width: 1440, height: 900 });
    const name = `W4-B SPA ${Date.now()}`;
    await page.goto("/studio/projects/new");
    await expect(page.getByTestId("create-project-form")).toBeVisible();
    await expect(page.getByLabel("Intention du projet")).toBeVisible();
    await expect(page.getByLabel("Contexte optionnel")).toBeVisible();
    await expect(page.getByTestId("create-project-cancel")).toBeVisible();
    // W4-BR-CORR-01 — banned internal/method copy absent from Pilote-facing S2.
    await expect(page.locator("body")).not.toContainText(
      "pas un questionnaire méthode",
    );
    await expect(page.locator("body")).not.toContainText(
      "cela ne qualifie pas automatiquement le cycle et ne crée pas de décision humaine",
    );
    await expect(page.locator("#project-context")).toHaveAttribute(
      "placeholder",
      "Ajoutez uniquement le contexte utile au projet.",
    );
    await capture(page, "A-S2-create-form-1440", {
      sc: "S2",
      state: "create form after CORR-01 copy",
      viewport: { width: 1440, height: 900 },
      observation: "Business-first context copy; no method jargon",
    });
    await page.locator("#project-name").fill(name);
    await page
      .locator("#project-objective")
      .fill("W4-B single authority path deterministic");
    await page.locator("#project-context").fill("REAL=0");
    await page.getByTestId("create-project-submit").click();
    await expect(page.getByTestId("open-project-workspace")).toBeVisible({
      timeout: 30_000,
    });
    await page.getByTestId("open-project-workspace").click();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-state-trajectory-region")).toBeVisible();
    await expect(page.getByTestId("h01-lps-trajectory-composition")).toBeVisible();
    await expect(page.getByTestId("living-project-state-panel")).toBeVisible();
    await expect(page.getByTestId("w2-trajectory-panel")).toHaveAttribute(
      "data-composition",
      "lps-embedded",
    );
    await expect(
      page.getByTestId("project-lps-column").getByTestId("w2-trajectory-panel"),
    ).toBeVisible();
    await expect(page.locator("body")).not.toContainText(
      "sans second chemin d'autorité",
    );
    await expect(page.getByTestId("project-state-trajectory-region")).toContainText(
      "L'état actuel et la trajectoire sont regroupés ici pour faciliter le pilotage.",
    );
    await capture(page, "B-workspace-state-trajectory-note-1440", {
      sc: "H-01",
      state: "État/Trajectoire note after CORR-01",
      viewport: { width: 1440, height: 900 },
      observation: "Pilote-facing note; no authority-path jargon",
    });
    const input = page.getByTestId("project-assistant-input");
    await expect(input).toBeEnabled({ timeout: 15_000 });
    await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
    await page.getByTestId("project-assistant-send").click();
    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible(
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
    await expect(page.getByTestId("product-authority-path-guidance")).toContainText(
      "La qualification est enregistrée",
    );
    await expect(page.getByTestId("product-authority-path-guidance")).not.toContainText(
      "un seul chemin d'autorité",
    );
    await assertNoSecondAuthorityPath(page);
    await capture(page, "SC-03-qualified-single-path-1440", {
      sc: "SC-03",
      state: "qualified; guidance to trajectory; no F2/F3 authority",
      viewport: { width: 1440, height: 900 },
      observation: "Nora qualify kept; H-01 LPS+Trajectory region; second authority path absent",
    });

    await page.getByTestId("w2-propose-options").click();
    await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("w2-recommendation")).toBeVisible();
    await capture(page, "SC-04-options-recommendation-1440", {
      sc: "SC-04",
      state: "options + recommendation",
      viewport: { width: 1440, height: 900 },
      observation: "Single W2 options path",
    });

    await page.locator("[data-testid^='w2-decide-']").first().click();
    await expect(page.getByTestId("w2-decision")).toBeVisible({ timeout: 45_000 });
    // Only one structural decide family: w2-decide-*, no f2-decide-*
    await expect(page.locator("[data-testid^='f2-decide-']")).toHaveCount(0);
    await capture(page, "SC-04-humandecision-1440", {
      sc: "SC-04",
      state: "W2 HumanDecision recorded",
      viewport: { width: 1440, height: 900 },
      observation: "Single structural HumanDecision",
    });

    await page
      .getByTestId("w3a-operation-kind")
      .selectOption("generate-temporary-artifact");
    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
    await expect(page.getByTestId("w2-contract-status")).toHaveText(
      "Confirmation requise",
    );
    await expect(page.getByTestId("w2-contract-status")).toHaveAttribute(
      "data-status",
      "confirmation_required",
    );
    await expect(page.getByTestId("w2-contract-status")).not.toHaveText(
      "confirmation_required",
    );
    await expect(page.getByTestId("w2-contract-status-tech")).toHaveText(
      "confirmation_required",
    );
    await page.getByText("Détails techniques du contrat").click();
    await capture(page, "C-EC-business-status-1440", {
      sc: "SC-05",
      state: "EC prepared; business status label primary",
      viewport: { width: 1440, height: 900 },
      observation: "w2-contract-status = Confirmation requise",
    });
    await capture(page, "D-EC-technical-status-audit-1440", {
      sc: "SC-05",
      state: "EC technical details; raw status auditable",
      viewport: { width: 1440, height: 900 },
      observation: "w2-contract-status-tech = confirmation_required",
    });
    await capture(page, "SC-05-ec-summary-1440", {
      sc: "SC-05",
      state: "EC prepared",
      viewport: { width: 1440, height: 900 },
      observation: "EC summary on TrajectorySurface only",
    });

    await page.getByTestId("w2-inspect-contract").click();
    await expect(page.getByTestId("w2-inspection-state")).toBeVisible({
      timeout: 30_000,
    });
    await capture(page, "SC-06-ec-inspection-1440", {
      sc: "SC-06",
      state: "EC inspected",
      viewport: { width: 1440, height: 900 },
      observation: "Inspection before Confirmation",
    });

    const confirm = page.getByTestId("w2-confirm-contract");
    if (await confirm.isVisible()) {
      await expect(confirm).toBeEnabled();
      await confirm.click();
      await expect(page.getByTestId("w2-contract-status")).toHaveText(
        "Confirmation enregistrée",
        { timeout: 30_000 },
      );
      await expect(page.getByTestId("w2-contract-status")).toHaveAttribute(
        "data-status",
        "confirmed",
      );
      await capture(page, "SC-06-confirmation-1440", {
        sc: "SC-06",
        state: "Confirmation separate from Execute",
        viewport: { width: 1440, height: 900 },
        observation: "A11Y-PC-05: confirm ≠ execute",
      });
    }

    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
      "Autorisation vérifiée",
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
    await expect(page.getByTestId("w3a-governed-execute")).toHaveText("Exécuter");
    await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
    await capture(page, "SC-07-authorized-1440", {
      sc: "SC-07",
      state: "AUTHORIZED business label",
      viewport: { width: 1440, height: 900 },
      observation: "Business-first authorization; Execute separate",
    });

    for (const w of [1024, 390] as const) {
      await page.setViewportSize({ width: w, height: 900 });
      await capture(page, `SC-07-authorized-${w}`, {
        sc: "SC-07 / H-02",
        state: `authorized responsive ${w}`,
        viewport: { width: w, height: 900 },
        observation: "Responsive authority region",
      });
    }

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3a-attempt")).toBeVisible({ timeout: 90_000 });
    await assertNoSecondAuthorityPath(page);
    await capture(page, "SC-08-09-attempt-terminal-1440", {
      sc: "SC-08/SC-09",
      state: "attempt / terminal after governed execute",
      viewport: { width: 1440, height: 900 },
      observation: "Single execute path; no F3 confirm+execute",
    });

    await page.setViewportSize({ width: 1024, height: 900 });
    await capture(page, "SC-04-or-05-responsive-1024", {
      sc: "SC-04/05 / H-02",
      state: "post-execute workspace 1024",
      viewport: { width: 1024, height: 900 },
      observation: "Responsive workspace after single path",
    });
    await page.setViewportSize({ width: 390, height: 900 });
    await capture(page, "SC-04-or-05-responsive-390", {
      sc: "SC-04/05 / H-02",
      state: "post-execute workspace 390",
      viewport: { width: 390, height: 900 },
      observation: "Responsive workspace after single path",
    });
  });

  test("negative: blocked authorization shows business label and no Attempt", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    const name = `W4-B BLOCK ${Date.now()}`;
    await page.goto("/studio/projects/new");
    await page.locator("#project-name").fill(name);
    await page.locator("#project-objective").fill("W4-B blocked auth path");
    await page.locator("#project-context").fill("REAL=0");
    await page.getByTestId("create-project-submit").click();
    await page.getByTestId("open-project-workspace").click();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    const input = page.getByTestId("project-assistant-input");
    await expect(input).toBeEnabled({ timeout: 15_000 });
    await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
    await page.getByTestId("project-assistant-send").click();
    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible(
      { timeout: 60_000 },
    );
    await page.getByTestId("w2-propose-options").click();
    await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
    await page.locator("[data-testid^='w2-decide-']").first().click();
    await expect(page.getByTestId("w2-decision")).toBeVisible({ timeout: 45_000 });
    await page
      .getByTestId("w3a-operation-kind")
      .selectOption("generate-temporary-artifact");
    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
    // Authorize WITHOUT inspect → blocked
    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
      "Exécution bloquée",
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("w3a-governed-execute")).toHaveCount(0);
    await expect(page.getByTestId("w3a-attempt")).toHaveCount(0);
    await assertNoSecondAuthorityPath(page);
    await capture(page, "SC-07-blocked-1440", {
      sc: "SC-07",
      state: "authorization blocked; no attempt",
      viewport: { width: 1440, height: 900 },
      observation: "Blocked is textual; Execute absent",
    });
  });
});
