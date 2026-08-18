/**
 * Playwright client for Option A E2E QA scenario control.
 */

import type { APIRequestContext, Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

export type OptionAQaScenario =
  | "recommendation_stale"
  | "attempt_failed"
  | "attempt_timeout"
  | "attempt_cancelled"
  | "evidence_missing"
  | "rehydrate_read_failure"
  | "reset";

const CONTROL_PATH = "/api/e2e/option-a-qa-scenario";

export const HARNESS_CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/testability-harness",
);

export async function invokeOptionAQaScenario(
  request: APIRequestContext,
  body: {
    scenario: OptionAQaScenario;
    projectId?: string;
    decisionId?: string;
    executionContractId?: string;
    attemptId?: string;
  },
): Promise<{ status: number; json: Record<string, unknown> }> {
  const response = await request.post(CONTROL_PATH, { data: body });
  let json: Record<string, unknown> = {};
  try {
    json = (await response.json()) as Record<string, unknown>;
  } catch {
    json = {};
  }
  return { status: response.status(), json };
}

/** E2E-only durable refresh — Panel listens only when window flag is set. */
export async function refreshDurableOutcomeE2e(page: Page): Promise<void> {
  await page.evaluate(() => {
    (
      window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean }
    ).__SFIA_E2E_QA_CONTROL__ = true;
    window.dispatchEvent(new CustomEvent("sfia-e2e-refresh-durable"));
  });
  await page.waitForTimeout(500);
}

export async function captureHarness(
  page: Page,
  id: string,
  meta: { screen: string; state: string; viewport: { width: number; height: number } },
): Promise<string> {
  fs.mkdirSync(HARNESS_CAPTURE_ROOT, { recursive: true });
  const file = path.join(HARNESS_CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  fs.appendFileSync(
    path.join(HARNESS_CAPTURE_ROOT, "manifest.jsonl"),
    `${JSON.stringify({
      id,
      file: path.basename(file),
      screen: meta.screen,
      state: meta.state,
      viewport: meta.viewport,
      timestamp: new Date().toISOString(),
      sha256,
      provenance:
        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — TESTABILITY HARNESS PROOF",
    })}\n`,
  );
  return sha256;
}
