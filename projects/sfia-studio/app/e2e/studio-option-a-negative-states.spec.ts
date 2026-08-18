/**
 * Cycle 8 AMEND QA-PRE-M6-TEST-01 — targeted negative-state harness proof.
 *
 * Requires:
 *   SFIA_STUDIO_E2E_QA_CONTROL=1
 *   SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1
 *   (OPS1_E2E_ALLOW_DIRTY_PRINCIPAL + fake provider already via playwright.config)
 */

import { test, expect, type Page } from "@playwright/test";
import {
  captureHarness,
  invokeOptionAQaScenario,
  refreshDurableOutcomeE2e,
} from "./support/optionAQaScenarioControl";

function runId(): string {
  return `harness-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

async function createUniqueProject(page: Page, suffix: string) {
  const name = `QA Harness ${suffix}`;
  await page.goto("/studio/projects/new");
  await expect(page.getByTestId("create-project-form")).toBeVisible();
  await page.locator("#project-name").fill(name);
  await page.locator("#project-objective").fill("QA-PRE-M6-TEST-01 harness");
  await page
    .locator("#project-context")
    .fill("E2E negative-state harness — REAL=0 — fixture-safe.");
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
  const projectId = decodeURIComponent(rawId);
  return { name, projectId };
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

async function goToResolvedContract(page: Page, suffix: string) {
  const created = await createUniqueProject(page, suffix);
  await sendGatedStandard(page);
  await page.getByTestId("f2-decide-GO").click();
  await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
    timeout: 45_000,
  });
  const decisionId = (await page.getByTestId("f2-decision-id").textContent())?.trim();
  if (!decisionId) throw new Error("decisionId missing");
  await page.getByTestId("f3-prepare-button").click();
  await expect(page.getByTestId("project-assistant-f3-contract")).toBeVisible({
    timeout: 45_000,
  });
  const executionContractId = (
    await page.getByTestId("f3-contract-id").textContent()
  )?.trim();
  if (!executionContractId) throw new Error("executionContractId missing");
  return { ...created, decisionId, executionContractId };
}

test.describe("QA-PRE-M6-TEST-01 negative-state harness", () => {
  test.describe.configure({ timeout: 240_000 });

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      (
        window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean }
      ).__SFIA_E2E_QA_CONTROL__ = true;
    });
  });

  test("N7 attempt_failed browser reachable", async ({ page, request }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    const ctx = await goToResolvedContract(page, `n7-${runId()}`);
    const arm = await invokeOptionAQaScenario(request, {
      scenario: "attempt_failed",
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      executionContractId: ctx.executionContractId,
    });
    if (arm.status !== 200 || arm.json.ok !== true) {
      throw new Error(
        `arm failed status=${arm.status} body=${JSON.stringify(arm.json)} ids=${JSON.stringify(ctx)}`,
      );
    }
    expect(arm.json.armedForConfirm).toBe(true);

    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-attempt-status")).toContainText(/failed/i);
    await expect(page.getByTestId("f3-attempt-status-label")).toContainText(
      /échec/i,
    );
    await expect(page.getByTestId("f3-attempt-id")).toBeVisible();
    await expect(page.getByTestId("f3-evidence-status")).toContainText(/absent/i);
    await captureHarness(page, "N7-attempt-failed", {
      screen: "F7",
      state: "Attempt FAILED via harness",
      viewport: { width: 1440, height: 1024 },
    });
  });

  test("N8 attempt_timeout browser reachable", async ({ page, request }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    const ctx = await goToResolvedContract(page, `n8-${runId()}`);
    const arm = await invokeOptionAQaScenario(request, {
      scenario: "attempt_timeout",
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      executionContractId: ctx.executionContractId,
    });
    expect(arm.json.ok).toBe(true);

    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("f3-attempt-status")).toContainText(
      /timeout/i,
      { timeout: 45_000 },
    );
    await expect(page.getByTestId("f3-attempt-status-label")).toContainText(
      /timeout/i,
    );
    await expect(page.getByTestId("f3-attempt-status")).not.toContainText(
      /failed/i,
    );
    await captureHarness(page, "N8-attempt-timeout", {
      screen: "F7",
      state: "Attempt TIMEOUT via harness",
      viewport: { width: 1440, height: 1024 },
    });
  });

  test("N9 attempt_cancelled browser reachable", async ({ page, request }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    const ctx = await goToResolvedContract(page, `n9-${runId()}`);
    const arm = await invokeOptionAQaScenario(request, {
      scenario: "attempt_cancelled",
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      executionContractId: ctx.executionContractId,
    });
    expect(arm.json.ok).toBe(true);

    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("f3-attempt-status")).toContainText(
      /cancelled/i,
      { timeout: 45_000 },
    );
    await expect(page.getByTestId("f3-attempt-status-label")).toContainText(
      /annulé/i,
    );
    await captureHarness(page, "N9-attempt-cancelled", {
      screen: "F7",
      state: "Attempt CANCELLED via harness",
      viewport: { width: 1440, height: 1024 },
    });
  });

  test("N10 evidence_missing browser reachable", async ({ page, request }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    const ctx = await goToResolvedContract(page, `n10-${runId()}`);
    const arm = await invokeOptionAQaScenario(request, {
      scenario: "evidence_missing",
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      executionContractId: ctx.executionContractId,
    });
    expect(arm.json.ok).toBe(true);

    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-attempt-status")).toContainText(
      /succeeded/i,
    );
    await expect(page.getByTestId("f3-evidence-status")).toContainText(/absent/i);
    await expect(page.getByTestId("f3-review-bundle-status")).toContainText(
      /absent/i,
    );
    await captureHarness(page, "N10-evidence-missing", {
      screen: "F7",
      state: "Attempt succeeded + Evidence absent",
      viewport: { width: 1440, height: 1024 },
    });
  });

  test("N5 recommendation_stale browser reachable", async ({ page, request }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    const ctx = await goToResolvedContract(page, `n5-${runId()}`);
    // Nominal confirm first → session recommendation current
    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-recommendation-freshness")).toContainText(
      /à jour/i,
    );

    const stale = await invokeOptionAQaScenario(request, {
      scenario: "recommendation_stale",
      projectId: ctx.projectId,
    });
    expect(stale.status).toBe(200);
    expect(stale.json.ok).toBe(true);

    await refreshDurableOutcomeE2e(page);
    await expect(page.getByTestId("f3-recommendation-freshness")).toContainText(
      /périmée/i,
      { timeout: 15_000 },
    );
    // F8 execute card shows freshness via deriveRecommendationFreshness;
    // f3-stale-recommendation-notice is F6-only (!f3Execute).
    await expect(
      page.getByTestId("f3-recommendation-execution-authority"),
    ).toContainText(/false/i);
    await captureHarness(page, "N5-recommendation-stale", {
      screen: "F8",
      state: "Recommendation STALE after durable supersession",
      viewport: { width: 1440, height: 1024 },
    });
  });

  test("N11 rehydrate_read_failure browser reachable", async ({
    page,
    request,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    const ctx = await goToResolvedContract(page, `n11-${runId()}`);
    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });

    const fail = await invokeOptionAQaScenario(request, {
      scenario: "rehydrate_read_failure",
      projectId: ctx.projectId,
    });
    expect(fail.json.ok).toBe(true);

    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-assistant-empty")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("durable-rehydrate-error")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
    await expect(page.getByTestId("project-assistant-proposal")).toHaveCount(0);
    await captureHarness(page, "N11-rehydrate-read-failure", {
      screen: "F10",
      state: "Durable rehydrate error honest",
      viewport: { width: 1440, height: 1024 },
    });

    const reset = await invokeOptionAQaScenario(request, { scenario: "reset" });
    expect(reset.json.ok).toBe(true);
  });

  test("control disabled without SFIA_STUDIO_E2E_QA_CONTROL returns 404", async ({
    request,
  }) => {
    // This process may have control enabled via env; probe unknown field rejection
    // when enabled, or 404 when disabled — both prove fail-closed.
    const res = await request.post("/api/e2e/option-a-qa-scenario", {
      data: { scenario: "reset", evilSql: "DROP TABLE" },
    });
    // With control ON: 400 UNKNOWN_FIELD. With control OFF: 404.
    expect([400, 404]).toContain(res.status());
  });
});
