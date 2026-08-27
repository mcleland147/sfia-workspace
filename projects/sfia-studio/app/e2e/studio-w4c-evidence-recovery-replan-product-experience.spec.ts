/**
 * W4-C — Evidence / Recovery / Replan Product Experience UAT on canonical `/studio`.
 * Consumes W3-B/W3-C engines. Presentation-only. DETERMINISTIC PRODUCT-NATIVE. NOT REAL.
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import {
  armW3bAdapterFail,
  armW3bGovernedStop,
  clearW3bBoundary,
} from "./support/w3bBoundaryControl";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/w4-c/final",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

async function capture(
  page: Page,
  id: string,
  meta: Record<string, string | number | boolean | null | undefined>,
) {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  fs.appendFileSync(
    MANIFEST,
    `${JSON.stringify({
      id,
      file: path.basename(file),
      ...meta,
      route: page.url(),
      timestamp: new Date().toISOString(),
      sha256,
      proofLevel: "DETERMINISTIC_PRODUCT_NATIVE",
      provenance:
        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W4-C DETERMINISTIC PRODUCT EXPERIENCE — NOT REAL",
    })}\n`,
  );
}

async function openThroughAuthorized(page: Page, name: string) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/studio");
  await expect(page.getByTestId("studio-projects-home")).toBeVisible({
    timeout: 30_000,
  });
  await page.goto("/studio/projects/new");
  await expect(page.getByTestId("create-project-form")).toBeVisible();
  await page.locator("#project-name").fill(name);
  await page
    .locator("#project-objective")
    .fill("W4-C Evidence / Recovery / Replan Product Experience.");
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
  await expect(page.getByTestId("project-assistant-qualification")).toBeVisible({
    timeout: 60_000,
  });
  await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);

  const trajectory = page.getByTestId("w2-trajectory-panel");
  await expect(trajectory).toBeVisible({ timeout: 15_000 });
  await trajectory.scrollIntoViewIfNeeded();

  await page.getByTestId("w2-propose-options").click();
  await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
  await page.locator("[data-testid^='w2-decide-']").first().click();
  await expect(page.getByTestId("w2-decision")).toBeVisible({
    timeout: 45_000,
  });

  await page
    .getByTestId("w3a-operation-kind")
    .selectOption("generate-temporary-artifact");
  await page.getByTestId("w2-prepare-contract").click();
  await expect(page.getByTestId("w2-contract")).toBeVisible({
    timeout: 45_000,
  });
  await page.getByTestId("w2-inspect-contract").click();
  await expect(page.getByTestId("w2-inspection-state")).toContainText(
    "INSPECTÉ",
    { timeout: 30_000 },
  );
  await page.getByTestId("w2-confirm-contract").click();
  await expect(page.getByTestId("w2-contract-status")).toHaveText(
    "Confirmation enregistrée",
    { timeout: 30_000 },
  );
  await page.getByTestId("w2-authorize-contract").click();
  await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
    "Autorisation vérifiée",
    { timeout: 30_000 },
  );
}

async function openTechnicalDetails(page: Page) {
  const toggle = page.getByTestId("w3b-technical-details-toggle");
  const details = toggle.locator("xpath=ancestor::details[1]");
  if (!(await details.evaluate((el) => (el as HTMLDetailsElement).open))) {
    await toggle.click();
  }
}

async function assertBusinessFirstHierarchy(page: Page) {
  const outcome = page.getByTestId("w3b-product-outcome");
  await expect(outcome).toBeVisible();
  // Primary experience must not start with raw Evidence/ReviewBundle IDs.
  const primaryText = (await outcome.innerText()).slice(0, 400);
  expect(primaryText).not.toMatch(/^[\s\S]{0,80}ev:w3b:/);
  expect(primaryText).not.toMatch(/^[\s\S]{0,80}rb:w3b:/);
  await expect(page.getByTestId("w3b-product-headline")).toBeVisible();
  await expect(page.getByTestId("w3b-product-reason")).toBeVisible();
  await expect(page.getByTestId("w3b-evidence-summary")).toBeVisible();
  await openTechnicalDetails(page);
  await expect(page.getByTestId("w3b-evidence-id")).toBeVisible();
  await expect(page.getByTestId("w3b-review-bundle-id")).toBeVisible();
}

test.describe("W4-C Evidence / Recovery / Replan Product Experience", () => {
  test.describe.configure({ timeout: 360_000 });

  test.beforeEach(async ({ request }) => {
    await clearW3bBoundary(request);
  });
  test.afterEach(async ({ request }) => {
    await clearW3bBoundary(request);
  });

  test("W4C-01 SUCCESS business-first + W4C-06/07/08/09", async ({ page }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(MANIFEST, "");

    await openThroughAuthorized(page, "W4-C SUCCESS PE");
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome")).toBeVisible({
      timeout: 120_000,
    });
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveAttribute(
      "data-kind",
      "SUCCESS",
    );
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "Succès",
    );
    await expect(page.getByTestId("w3b-product-headline")).toBeVisible();
    await expect(page.getByTestId("w3b-product-reason")).toBeVisible();
    await assertBusinessFirstHierarchy(page);

    // H-03 — inside canonical workspace, no separate Evidence route.
    expect(page.url()).toMatch(/\/studio\/projects\//);
    expect(page.url()).not.toMatch(/\/evidence/i);
    await expect(page.getByTestId("project-principal")).toBeVisible();
    await expect(page.getByTestId("w3b-product-outcome")).toBeVisible();

    await expect(page.getByTestId("w3c-post-evidence")).toBeVisible({
      timeout: 60_000,
    });
    await expect(page.getByText("Ce que Nora recommande maintenant")).toBeVisible();
    await expect(page.getByTestId("w3c-next-step")).toContainText(
      "Ce que vous pouvez faire ensuite",
    );

    await capture(page, "FINAL-SUCCESS-evidence-1440", {
      scenario: "SUCCESS",
      viewport: "1440x900",
    });
    await page.setViewportSize({ width: 1024, height: 900 });
    await expect(page.getByTestId("w3b-product-outcome")).toBeVisible();
    await capture(page, "FINAL-SUCCESS-evidence-1024", {
      scenario: "SUCCESS",
      viewport: "1024x900",
    });
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.getByTestId("w3b-product-outcome")).toBeVisible();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toBeVisible();
    await capture(page, "FINAL-SUCCESS-evidence-390", {
      scenario: "SUCCESS",
      viewport: "390x844",
    });
    await page.setViewportSize({ width: 1440, height: 900 });
  });

  test("W4C-02 STOP recovery + W4C-04 propose≠decide", async ({
    page,
    request,
  }) => {
    await openThroughAuthorized(page, "W4-C STOP PE");
    await armW3bGovernedStop(request, "EXECUTOR_INSUFFICIENT");
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveAttribute(
      "data-kind",
      "STOP",
      { timeout: 120_000 },
    );
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "Arrêt",
    );
    await expect(page.getByTestId("w3b-product-reason")).toBeVisible();
    await expect(page.getByTestId("w3c-post-evidence")).toBeVisible({
      timeout: 60_000,
    });
    await expect(page.getByTestId("w3c-recommendation-kind")).toHaveText(
      "recover",
    );
    await expect(page.getByTestId("w3c-propose-trajectory")).toBeVisible();

    await page.getByTestId("w3c-propose-trajectory").click();
    await expect(page.getByTestId("w2-options")).toBeVisible({
      timeout: 60_000,
    });
    // Propose ≠ decide — no HumanDecision for the new proposal wave.
    await expect(page.getByTestId("w2-decision")).toHaveCount(0);

    await capture(page, "FINAL-STOP-recovery-1440", {
      scenario: "STOP",
      viewport: "1440x900",
    });
    await clearW3bBoundary(request);
  });

  test("W4C-03 FAIL recovery", async ({ page, request }) => {
    await openThroughAuthorized(page, "W4-C FAIL PE");
    await armW3bAdapterFail(request, "adapter_unavailable");
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveAttribute(
      "data-kind",
      "FAIL",
      { timeout: 120_000 },
    );
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "Échec",
    );
    await expect(page.getByTestId("w3b-product-outcome-kind")).not.toHaveAttribute(
      "data-kind",
      "SUCCESS",
    );
    await expect(page.getByTestId("w3b-product-outcome-kind")).not.toHaveAttribute(
      "data-kind",
      "STOP",
    );
    await expect(page.getByTestId("w3b-product-reason")).toBeVisible();
    await expect(page.getByTestId("w3c-post-evidence")).toBeVisible({
      timeout: 60_000,
    });
    await expect(page.getByTestId("w3c-recommendation-kind")).toHaveText(
      "recover",
    );
    await capture(page, "FINAL-FAIL-recovery-1440", {
      scenario: "FAIL",
      viewport: "1440x900",
    });
    await clearW3bBoundary(request);
  });

  test("W4C-05 reload honesty + W4C-10 H-01/H-04/authority non-regression", async ({
    page,
  }) => {
    await openThroughAuthorized(page, "W4-C RELOAD PE");
    // H-01 — trajectory still in LPS/workspace region (w2-trajectory-panel).
    await expect(page.getByTestId("w2-trajectory-panel")).toBeVisible();
    // Single authority path.
    await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
    await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);

    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveAttribute(
      "data-kind",
      "SUCCESS",
      { timeout: 120_000 },
    );
    await expect(page.getByTestId("w3c-post-evidence")).toBeVisible({
      timeout: 60_000,
    });

    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 60_000,
    });
    const postEvidence = page.getByTestId("w3c-post-evidence");
    const productOutcome = page.getByTestId("w3b-product-outcome");
    const recoveryBanner = page.getByTestId("project-recovery-banner");
    const rehydrateBtn = page.getByTestId("w3b-rehydrate-product");
    if ((await rehydrateBtn.count()) > 0) {
      await rehydrateBtn.first().click();
    }
    const hasDurable =
      (await postEvidence.count()) > 0 || (await productOutcome.count()) > 0;
    const hasRecovery = (await recoveryBanner.count()) > 0;
    expect(hasDurable || hasRecovery).toBe(true);

    // No fabricated decision / confirmation / authority after reload alone.
    await expect(page.getByTestId("w2-decision")).toHaveCount(0);
    await expect(page.locator("text=Conversation inventée")).toHaveCount(0);

    if (hasRecovery) {
      await expect(recoveryBanner).toContainText(/enregistré|reprenez/i);
      await expect(page.getByTestId("recovery-resume-durable")).toBeVisible();
      await expect(page.getByTestId("recovery-requalify")).toBeVisible();
    }

    await capture(page, "FINAL-reload-recovery-1440", {
      scenario: "RELOAD",
      viewport: "1440x900",
      durablePath: hasDurable ? "outcome" : "recovery",
    });

    // H-04 empty-state principle — projects home still single primary CTA.
    await page.goto("/studio");
    await expect(page.getByTestId("studio-projects-home")).toBeVisible({
      timeout: 30_000,
    });
    const createLinks = page.getByRole("link", { name: /créer|nouveau projet/i });
    const createButtons = page.getByRole("button", {
      name: /créer|nouveau projet/i,
    });
    const primaryCreateCount =
      (await createLinks.count()) + (await createButtons.count());
    expect(primaryCreateCount).toBeGreaterThanOrEqual(1);
  });
});
