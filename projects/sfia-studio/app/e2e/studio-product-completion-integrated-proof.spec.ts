/**
 * PC-INTEGRATED-QA-01 — Product Completion integrated proof on canonical /studio.
 *
 * Thin orchestration of EXISTING product-native behavior.
 * Fake substitutes ONLY the external executor boundary (TestExecutionAdapter / W3-B arms).
 * REAL OUT · OpenAI LIVE OUT · Cursor REAL OUT.
 *
 * Scenarios:
 *   QA-INT-01 nominal SUCCESS → Evidence → Nora post-Evidence → reload
 *   QA-INT-02 governed STOP (armed)
 *   QA-INT-03 FAIL → recovery / replan recommendation
 *   QA-INT-04 material EC amend invalidates stale inspection/authorization
 *   QA-INT-05 restart continuity (reload after SUCCESS — checkpoint B)
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
  "../../../.tmp-sfia-review/product-completion-integrated-qa/screenshots",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

const AMENDMENT_CONSTRAINT =
  "W2_E2E_TIGHTEN: borner strictement le slice livré — aucune extension silencieuse";

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
      proofLevel: "DETERMINISTIC_PRODUCT_COMPLETION_INTEGRATED",
      provenance:
        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — PC INTEGRATED QA /STUDIO — NOT REAL",
    })}\n`,
    "utf8",
  );
}

async function assertNoSecondAuthorityPath(page: Page) {
  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
  await expect(page.getByTestId("f3-legacy-confirm-execute-button")).toHaveCount(
    0,
  );
}

async function createAndQualify(page: Page, name: string, objective: string) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/studio");
  await expect(page.getByTestId("studio-projects-home")).toBeVisible({
    timeout: 30_000,
  });
  await page.goto("/studio/projects/new");
  await expect(page.getByTestId("create-project-form")).toBeVisible();
  await page.locator("#project-name").fill(name);
  await page.locator("#project-objective").fill(objective);
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
  await assertNoSecondAuthorityPath(page);
}

async function decideTrajectory(page: Page) {
  const trajectory = page.getByTestId("w2-trajectory-panel");
  await expect(trajectory).toBeVisible({ timeout: 15_000 });
  await trajectory.scrollIntoViewIfNeeded();
  await page.getByTestId("w2-propose-options").click();
  await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
  await page.locator("[data-testid^='w2-decide-']").first().click();
  await expect(page.getByTestId("w2-decision")).toBeVisible({
    timeout: 45_000,
  });
}

async function prepareInspectConfirmAuthorize(page: Page) {
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
  await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
  await expect(page.getByTestId("w3a-governed-execute")).toHaveText("Exécuter");
}

async function openThroughAuthorized(
  page: Page,
  name: string,
  objective: string,
) {
  await createAndQualify(page, name, objective);
  await decideTrajectory(page);
  await prepareInspectConfirmAuthorize(page);
}

async function assertPostEvidence(page: Page, kind: string) {
  await expect(page.getByTestId("w3c-post-evidence")).toBeVisible({
    timeout: 60_000,
  });
  await expect(page.getByTestId("w3c-recommendation-kind")).toHaveText(kind);
  await expect(page.getByTestId("w3c-nora-analysis")).toBeVisible();
  const recDetails = page
    .getByTestId("w3c-post-evidence")
    .locator("details")
    .filter({ has: page.getByTestId("w3c-recommendation-authority") });
  if (
    (await recDetails.count()) > 0 &&
    !(await recDetails.evaluate((el) => (el as HTMLDetailsElement).open))
  ) {
    await recDetails.locator("summary").click();
  }
  await expect(page.getByTestId("w3c-recommendation-authority")).toContainText(
    "none — Recommendation ≠ HumanDecision",
  );
  await expect(page.getByTestId("w3c-lps-version")).not.toHaveText("—");
}

test.describe("PC Integrated Proof — Product Completion final QA", () => {
  test.describe.configure({ timeout: 420_000 });

  test.beforeEach(async ({ request }) => {
    await clearW3bBoundary(request);
  });
  test.afterEach(async ({ request }) => {
    await clearW3bBoundary(request);
  });

  test("QA-INT-01/05 nominal SUCCESS loop + Evidence→Nora + reload", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    if (!fs.existsSync(MANIFEST)) fs.writeFileSync(MANIFEST, "");

    await openThroughAuthorized(
      page,
      `PC-QA INT-01 ${Date.now()}`,
      "Preuve intégrée Product Completion — boucle nominale SUCCESS.",
    );
    await capture(page, "QA-INT-01-pre-execute", {
      scenario: "QA-INT-01",
      state: "authorized_before_execute",
    });

    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveAttribute(
      "data-kind",
      "SUCCESS",
      { timeout: 120_000 },
    );
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "Succès",
    );
    await expect(page.getByTestId("w3b-claim-allowed")).toHaveText("oui");
    await expect(page.getByTestId("w3b-ready")).toHaveText("non");
    await expect(page.getByTestId("w3b-evidence-id")).not.toHaveText("");
    await expect(page.getByTestId("w3b-review-bundle-id")).not.toHaveText("");

    await assertPostEvidence(page, "continue");
    await expect(page.getByTestId("w3c-requires-human-decision")).toBeVisible();
    await assertNoSecondAuthorityPath(page);

    await capture(page, "QA-INT-01-success-post-evidence", {
      scenario: "QA-INT-01",
      productOutcome: "SUCCESS",
      postEvidence: "continue",
    });

    // QA-INT-05 checkpoint B — reload after terminal + Evidence
    const urlBefore = page.url();
    const evidenceId = (
      await page.getByTestId("w3b-evidence-id").textContent()
    )?.trim();
    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 60_000,
    });
    expect(page.url()).toBe(urlBefore);
    await expect(page.getByTestId("w2-trajectory-panel")).toBeVisible({
      timeout: 30_000,
    });
    const rehydrateBtn = page.getByTestId("w3b-rehydrate-product");
    if ((await rehydrateBtn.count()) > 0) {
      await rehydrateBtn.first().click();
      await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveAttribute(
        "data-kind",
        "SUCCESS",
        { timeout: 30_000 },
      );
      expect(
        (await page.getByTestId("w3b-evidence-id").textContent())?.trim(),
      ).toBe(evidenceId);
    }
    await capture(page, "QA-INT-05-reload-after-success", {
      scenario: "QA-INT-05",
      evidenceId: evidenceId ?? null,
      state: "reload_after_terminal_evidence",
    });
  });

  test("QA-INT-02 governed STOP — no false SUCCESS", async ({
    page,
    request,
  }) => {
    await openThroughAuthorized(
      page,
      `PC-QA INT-02 ${Date.now()}`,
      "Preuve intégrée — STOP gouverné.",
    );
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
    await expect(page.getByTestId("w3b-product-outcome-kind")).not.toHaveAttribute(
      "data-kind",
      "SUCCESS",
    );
    await expect(page.getByTestId("w3a-attempt-technical-status")).toHaveText(
      "cancelled",
    );
    await expect(page.getByTestId("w3b-governed-boundary")).toContainText(
      "EXECUTOR_INSUFFICIENT",
    );
    await assertPostEvidence(page, "recover");
    await capture(page, "QA-INT-02-governed-stop", {
      scenario: "QA-INT-02",
      productOutcome: "STOP",
    });
    await clearW3bBoundary(request);
  });

  test("QA-INT-03 FAIL via TestExecutionAdapter + recovery", async ({
    page,
    request,
  }) => {
    await openThroughAuthorized(
      page,
      `PC-QA INT-03 ${Date.now()}`,
      "Preuve intégrée — FAIL + recovery.",
    );
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
    await expect(page.getByTestId("w3a-attempt-technical-status")).toHaveText(
      "failed",
    );
    await assertPostEvidence(page, "recover");
    await expect(page.getByTestId("w3c-recommendation-authority")).toContainText(
      "Recommendation ≠ HumanDecision",
    );
    await capture(page, "QA-INT-03-fail-recovery", {
      scenario: "QA-INT-03",
      productOutcome: "FAIL",
    });
    await clearW3bBoundary(request);
  });

  test("QA-INT-04 material EC amend invalidates stale authorization", async ({
    page,
  }) => {
    await createAndQualify(
      page,
      `PC-QA INT-04 ${Date.now()}`,
      "Preuve intégrée — amendement EC matériel.",
    );
    await decideTrajectory(page);

    // Mirror W2 G3: prepare → inspect → material amend (no confirm before amend).
    await page
      .getByTestId("w3a-operation-kind")
      .selectOption("generate-temporary-artifact");
    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({
      timeout: 45_000,
    });
    const confirmBefore = page.getByTestId("w2-confirm-contract");
    if ((await confirmBefore.count()) > 0) {
      await expect(confirmBefore).toBeDisabled();
    }
    await page.getByTestId("w2-inspect-contract").click();
    await expect(page.getByTestId("w2-inspection-state")).toContainText(
      "INSPECTÉ",
      { timeout: 30_000 },
    );

    await expect(page.getByTestId("w2-amendment-form")).toBeVisible();
    await page.getByTestId("w2-amend-constraint").fill(AMENDMENT_CONSTRAINT);
    await page.getByTestId("w2-amend-contract").click();
    await expect(page.getByTestId("w2-amendment-notice")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("w2-amendment-status")).toContainText(
      /réinspection requise/i,
    );
    await expect(page.getByTestId("w2-inspection-state")).toContainText(
      "NON INSPECTÉ",
    );

    // Stale authorize must BLOCK without reinspection.
    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
      "Exécution bloquée",
    );
    const blockedReason =
      (await page.getByTestId("w2-authorization-reason").textContent()) ?? "";
    expect(blockedReason.toLowerCase()).toMatch(/inspect/);

    await capture(page, "QA-INT-04-stale-auth-blocked", {
      scenario: "QA-INT-04",
      state: "stale_authorization_blocked",
    });

    // Stale path must not launch an Attempt.
    await expect(page.getByTestId("w3a-attempt-lifecycle")).toHaveCount(0);

    // Full successor reinspect → confirm → authorize → STOP BEFORE EXECUTE is
    // proven in this campaign by e2e/studio-w2-g3-correction-runtime.spec.ts
    // (executed and PASS). This integrated case locks the critical negative:
    // material amend invalidates inspection; stale authorize is blocked.
  });
});
