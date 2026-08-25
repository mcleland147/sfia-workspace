/**
 * W3-C — Post-Evidence replan / recommendation product-native proof on /studio.
 * Consumes W3-B terminal Evidence; Recommendation ≠ HumanDecision; propose ≠ decide.
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
  "../../../.tmp-sfia-review/runtime-captures/w3-c-post-evidence-replan",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

async function capture(
  page: Page,
  id: string,
  meta: Record<string, string | boolean | null | undefined>,
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
        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-C /STUDIO POST-EVIDENCE — NOT REAL",
    })}\n`,
    "utf8",
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
    .fill("Preuve produit native — post-Evidence recommandation.");
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
    timeout: 60_000,
  });

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
  await expect(page.getByTestId("w2-contract-status")).toHaveText("confirmed", {
    timeout: 30_000,
  });
  await page.getByTestId("w2-authorize-contract").click();
  await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
    "AUTORISÉ",
    { timeout: 30_000 },
  );
}

async function assertW3cPostEvidence(page: Page, kind: string) {
  await expect(page.getByTestId("w3c-post-evidence")).toBeVisible({
    timeout: 60_000,
  });
  await expect(page.getByTestId("w3c-recommendation-kind")).toHaveText(kind);
  await expect(page.getByTestId("w3c-recommendation-authority")).toContainText(
    "none — Recommendation ≠ HumanDecision",
  );
  await expect(page.getByTestId("w3c-nora-analysis")).toBeVisible();
  await expect(page.getByTestId("w3c-lps-version")).not.toHaveText("—");
  await expect(page.getByTestId("w3b-nora-replan")).toContainText(
    "replan auto: non",
  );
}

test.describe("W3-C /studio Post-Evidence replan", () => {
  test.describe.configure({ timeout: 360_000 });

  test.beforeEach(async ({ request }) => {
    await clearW3bBoundary(request);
  });
  test.afterEach(async ({ request }) => {
    await clearW3bBoundary(request);
  });

  test("A SUCCESS → continue recommendation", async ({ page }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(MANIFEST, "");

    await openThroughAuthorized(page, "W3-C SUCCESS PostEvidence");
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "SUCCESS",
      { timeout: 120_000 },
    );
    await assertW3cPostEvidence(page, "continue");
    await expect(page.getByTestId("w3c-requires-human-decision")).toHaveText(
      "non",
    );
    await expect(page.getByTestId("w3c-propose-trajectory")).toHaveCount(0);
    await capture(page, "01-success-continue", {
      scenario: "SUCCESS",
      recommendationKind: "continue",
    });
  });

  test("B STOP → recover + propose available", async ({ page, request }) => {
    await openThroughAuthorized(page, "W3-C STOP PostEvidence");
    await armW3bGovernedStop(request, "EXECUTOR_INSUFFICIENT");
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "STOP",
      { timeout: 120_000 },
    );
    await assertW3cPostEvidence(page, "recover");
    await expect(page.getByTestId("w3c-requires-human-decision")).toHaveText(
      "non",
    );
    await expect(page.getByTestId("w3c-propose-trajectory")).toBeVisible();
    // R01 — recovery CTA consumable → w2-options without automatic HD.
    await page.getByTestId("w3c-propose-trajectory").click();
    await expect(page.getByTestId("w2-options")).toBeVisible({
      timeout: 60_000,
    });
    await expect(page.getByTestId("w2-decision")).toHaveCount(0);
    await capture(page, "02-stop-recover", {
      scenario: "STOP",
      recommendationKind: "recover",
    });
    await clearW3bBoundary(request);
  });

  test("C FAIL → recover distinct", async ({ page, request }) => {
    await openThroughAuthorized(page, "W3-C FAIL PostEvidence");
    await armW3bAdapterFail(request, "adapter_unavailable");
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "FAIL",
      { timeout: 120_000 },
    );
    await assertW3cPostEvidence(page, "recover");
    await expect(page.getByTestId("w3c-recommendation-kind")).not.toHaveText(
      "continue",
    );
    await capture(page, "03-fail-recover", {
      scenario: "FAIL",
      recommendationKind: "recover",
    });
    await clearW3bBoundary(request);
  });

  test("D propose without decide then decide", async ({ page }) => {
    await openThroughAuthorized(page, "W3-C Propose Then Decide");
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "SUCCESS",
      { timeout: 120_000 },
    );
    await assertW3cPostEvidence(page, "continue");

    // Explicit propose (panel button) — does not decide.
    await page.getByTestId("w2-propose-options").click();
    await expect(page.getByTestId("w2-options")).toBeVisible({
      timeout: 60_000,
    });
    // Until decide, no new decision record for this propose wave.
    await expect(page.getByTestId("w2-decision")).toHaveCount(0);

    await page.locator("[data-testid^='w2-decide-']").first().click();
    await expect(page.getByTestId("w2-decision")).toBeVisible({
      timeout: 45_000,
    });
    await capture(page, "04-propose-then-decide", {
      scenario: "PROPOSE_THEN_DECIDE",
      recommendationKind: "continue",
    });
  });

  test("E reload restart postEvidence rehydrate", async ({ page }) => {
    await openThroughAuthorized(page, "W3-C Reload PostEvidence");
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "SUCCESS",
      { timeout: 120_000 },
    );
    await assertW3cPostEvidence(page, "continue");
    const evidenceId = (
      await page.getByTestId("w3b-evidence-id").textContent()
    )?.trim();
    const lpsVersion = (
      await page.getByTestId("w3c-lps-version").textContent()
    )?.trim();

    await page.getByTestId("w3b-rehydrate-product").click();
    await expect(page.getByTestId("w3c-recommendation-kind")).toHaveText(
      "continue",
      { timeout: 30_000 },
    );
    expect(
      (await page.getByTestId("w3b-evidence-id").textContent())?.trim(),
    ).toBe(evidenceId);
    expect(
      (await page.getByTestId("w3c-lps-version").textContent())?.trim(),
    ).toBe(lpsVersion);

    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 60_000,
    });
    // W3C-R07 — no silent pass: durable postEvidence OR recovery surface required.
    const rehydrateBtn = page.getByTestId("w3b-rehydrate-product");
    if ((await rehydrateBtn.count()) > 0) {
      await rehydrateBtn.first().click();
    }
    const postEvidence = page.getByTestId("w3c-post-evidence");
    const recoveryBanner = page.getByTestId("project-recovery-banner");
    const recoveryRequalify = page.getByTestId("recovery-requalify");
    const hasPostEvidence = (await postEvidence.count()) > 0;
    const hasRecovery =
      (await recoveryBanner.count()) > 0 ||
      (await recoveryRequalify.count()) > 0;
    expect(hasPostEvidence || hasRecovery).toBe(true);
    if (hasPostEvidence) {
      await expect(postEvidence).toBeVisible({ timeout: 30_000 });
      await expect(page.getByTestId("w3c-recommendation-kind")).toHaveText(
        "continue",
      );
    }
    await capture(page, "05-reload-rehydrate", {
      scenario: "RELOAD",
      evidenceId: evidenceId ?? null,
      lpsVersion: lpsVersion ?? null,
      durablePath: hasPostEvidence ? "postEvidence" : "recovery",
    });
  });
});
