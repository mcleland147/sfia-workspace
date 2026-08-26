/**
 * W4-D — Product Screens Visual Closure captures on canonical /studio.
 * Extends W4-B single-authority flow with Entry/Create/responsive coverage.
 * Presentation regression only — no new product semantics.
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/w4-d",
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
      "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W4-D PRODUCT SCREENS VISUAL CLOSURE",
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
}

async function assertNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
    };
  });
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
}

test.describe("W4-D product screens visual closure", () => {
  test.describe.configure({ timeout: 420_000 });

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      (
        window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean }
      ).__SFIA_E2E_QA_CONTROL__ = true;
    });
  });

  test("entry/create/workspace visual path + responsive trio + authority chain", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(MANIFEST_JSONL, "");
    fs.writeFileSync(
      MANIFEST,
      [
        "# W4-D runtime captures",
        "",
        "| file | timestamp | viewport | route | SC | state | observation |",
        "| --- | --- | --- | --- | --- | --- | --- |",
        "",
      ].join("\n"),
    );

    // --- Entry / empty-capable home ---
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/studio");
    await expect(page.getByTestId("studio-projects-home")).toBeVisible();
    await expect(page.getByTestId("studio-projects-create")).toBeVisible();
    await expect(page.getByTestId("studio-projects-create")).toHaveText(
      /Créer un projet/,
    );
    // Empty state is deterministic on temp SQLite — assert Pilote-facing copy.
    const empty = page.getByTestId("studio-projects-empty");
    if (await empty.count()) {
      await expect(empty).toContainText(
        "Créez un projet pour commencer avec Nora",
      );
      await expect(empty).not.toContainText("Une seule action primaire");
      await expect(empty.getByTestId("studio-projects-create")).toHaveCount(1);
    }
    await capture(page, "SC-01-entry-1440", {
      sc: "SC-01",
      state: "projects entry",
      viewport: { width: 1440, height: 900 },
      observation: "Entry CTA Créer un projet; shell coherent",
    });
    await assertNoHorizontalOverflow(page);

    await page.setViewportSize({ width: 1024, height: 900 });
    await capture(page, "SC-01-entry-1024", {
      sc: "SC-01",
      state: "projects entry",
      viewport: { width: 1024, height: 900 },
      observation: "Entry contained at 1024",
    });
    await assertNoHorizontalOverflow(page);

    await page.setViewportSize({ width: 390, height: 844 });
    await capture(page, "SC-01-entry-390", {
      sc: "SC-01",
      state: "projects entry",
      viewport: { width: 390, height: 844 },
      observation: "Entry contained at 390",
    });
    await assertNoHorizontalOverflow(page);

    // --- Create ---
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/studio/projects/new");
    await expect(page.getByTestId("create-project-form")).toBeVisible();
    await expect(page.getByLabel("Intention du projet")).toBeVisible();
    await expect(page.getByLabel("Contexte optionnel")).toBeVisible();
    await expect(page.getByTestId("create-project-cancel")).toBeVisible();
    await capture(page, "SC-02-create-1440", {
      sc: "SC-02",
      state: "create form",
      viewport: { width: 1440, height: 900 },
      observation: "Create form business-first; Créer + Annuler",
    });

    await page.setViewportSize({ width: 1024, height: 900 });
    await capture(page, "SC-02-create-1024", {
      sc: "SC-02",
      state: "create form",
      viewport: { width: 1024, height: 900 },
      observation: "Create at 1024",
    });
    await assertNoHorizontalOverflow(page);

    await page.setViewportSize({ width: 390, height: 844 });
    await capture(page, "SC-02-create-390", {
      sc: "SC-02",
      state: "create form",
      viewport: { width: 390, height: 844 },
      observation: "Create at 390",
    });
    await assertNoHorizontalOverflow(page);

    // --- Deterministic authority path ---
    await page.setViewportSize({ width: 1440, height: 900 });
    const name = `W4-D Visual ${Date.now()}`;
    await page.goto("/studio/projects/new");
    await page.locator("#project-name").fill(name);
    await page
      .locator("#project-objective")
      .fill("W4-D visual closure deterministic");
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
    await capture(page, "SC-03-workspace-h01-1440", {
      sc: "SC-03",
      state: "workspace H-01",
      viewport: { width: 1440, height: 900 },
      observation: "Conversation + H-01 LPS/Trajectory region",
    });

    const input = page.getByTestId("project-assistant-input");
    await expect(input).toBeEnabled({ timeout: 15_000 });
    await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
    await page.getByTestId("project-assistant-send").click();
    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible(
      { timeout: 60_000 },
    );
    await assertNoSecondAuthorityPath(page);
    await capture(page, "SC-03-qualified-1440", {
      sc: "SC-03",
      state: "qualified",
      viewport: { width: 1440, height: 900 },
      observation: "Nora qualification; single authority",
    });

    await page.getByTestId("w2-propose-options").click();
    await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("w2-recommendation")).toBeVisible();
    await capture(page, "SC-04-options-rec-1440", {
      sc: "SC-04",
      state: "options + recommendation",
      viewport: { width: 1440, height: 900 },
      observation: "Option ≠ Recommendation visual badges",
    });

    await page.locator("[data-testid^='w2-decide-']").first().click();
    await expect(page.getByTestId("w2-decision")).toBeVisible({ timeout: 45_000 });
    await capture(page, "SC-04-humandecision-1440", {
      sc: "SC-04",
      state: "HumanDecision",
      viewport: { width: 1440, height: 900 },
      observation: "HumanDecision visually distinct",
    });

    await page
      .getByTestId("w3a-operation-kind")
      .selectOption("generate-temporary-artifact");
    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
    await expect(page.getByTestId("w2-contract-status")).not.toHaveText(
      "confirmation_required",
    );
    await capture(page, "SC-05-ec-summary-1440", {
      sc: "SC-05",
      state: "EC summary",
      viewport: { width: 1440, height: 900 },
      observation: "EC business status primary",
    });

    await page.getByTestId("w2-inspect-contract").click();
    await expect(page.getByTestId("w2-inspection-state")).toBeVisible({
      timeout: 30_000,
    });
    await capture(page, "SC-06-ec-inspect-1440", {
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
      await capture(page, "SC-06-confirmation-1440", {
        sc: "SC-06",
        state: "confirmed",
        viewport: { width: 1440, height: 900 },
        observation: "Confirmation ≠ Execute",
      });
    }

    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
      "Autorisation vérifiée",
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
    await capture(page, "SC-07-08-authorized-execute-1440", {
      sc: "SC-07/08",
      state: "authorized execute available",
      viewport: { width: 1440, height: 900 },
      observation: "Authority allowed; Execute separate",
    });

    // Responsive workspace + EC
    await page.setViewportSize({ width: 1024, height: 900 });
    await capture(page, "SC-R01-workspace-1024", {
      sc: "SC-R01",
      state: "workspace+trajectory",
      viewport: { width: 1024, height: 900 },
      observation: "H-01 stack at 1024",
    });
    await assertNoHorizontalOverflow(page);

    await page.setViewportSize({ width: 390, height: 844 });
    await capture(page, "SC-R01-workspace-390", {
      sc: "SC-R01",
      state: "workspace+trajectory",
      viewport: { width: 390, height: 844 },
      observation: "H-01 stack at 390",
    });
    await assertNoHorizontalOverflow(page);

    await page.setViewportSize({ width: 1024, height: 900 });
    await page.getByTestId("w2-contract").scrollIntoViewIfNeeded();
    await capture(page, "SC-R02-ec-1024", {
      sc: "SC-R02",
      state: "EC/authority",
      viewport: { width: 1024, height: 900 },
      observation: "EC contained at 1024",
    });
    await assertNoHorizontalOverflow(page);

    await page.setViewportSize({ width: 390, height: 844 });
    await page.getByTestId("w2-contract").scrollIntoViewIfNeeded();
    await capture(page, "SC-R02-ec-390", {
      sc: "SC-R02",
      state: "EC/authority",
      viewport: { width: 390, height: 844 },
      observation: "EC contained at 390",
    });
    await assertNoHorizontalOverflow(page);

    // History surface if present
    await page.setViewportSize({ width: 1440, height: 900 });
    const history = page.getByTestId("project-history-panel");
    if (await history.count()) {
      await history.scrollIntoViewIfNeeded();
      await capture(page, "SC-history-1440", {
        sc: "History",
        state: "history panel",
        viewport: { width: 1440, height: 900 },
        observation: "History shell-coherent",
      });
    }

    // Execute for running if available
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3a-attempt")).toBeVisible({
      timeout: 60_000,
    });
    await capture(page, "SC-08-attempt-1440", {
      sc: "SC-08",
      state: "attempt running/terminal",
      viewport: { width: 1440, height: 900 },
      observation: "Attempt state represented",
    });
  });
});
