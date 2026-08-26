/**
 * Pre-M6 clean-slate Figma presentation captures (CS-R01…CS-R19).
 * Provenance: CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT —
 * CLEAN-SLATE FIGMA IMPLEMENTATION PROOF
 */
import { test, expect, type Page, type APIRequestContext } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import {
  invokeOptionAQaScenario,
  refreshDurableOutcomeE2e,
} from "./support/optionAQaScenarioControl";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/clean-slate-ui",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

async function capture(
  page: Page,
  id: string,
  meta: { screen: string; state: string; viewport: { width: number; height: number }; figmaRef: string },
) {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
  fs.appendFileSync(
    MANIFEST,
    `${JSON.stringify({
      id,
      file: path.basename(file),
      ...meta,
      timestamp: new Date().toISOString(),
      sha256,
      provenance:
        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — CLEAN-SLATE FIGMA IMPLEMENTATION PROOF",
    })}\n`,
    "utf8",
  );
  return sha256;
}

async function createProject(page: Page, name: string) {
  await page.goto("/studio/projects/new");
  await expect(page.getByTestId("create-project-form")).toBeVisible();
  await page.locator("#project-name").fill(name);
  await page.locator("#project-objective").fill(
    "Intention de capture clean-slate — Nora recommande, Morris décide.",
  );
  await page.getByTestId("create-project-submit").click();
  await expect(page.getByTestId("open-project-workspace")).toBeVisible({
    timeout: 30_000,
  });
}

async function openWorkspace(page: Page) {
  await page.getByTestId("open-project-workspace").click();
  await expect(page.getByTestId("project-principal")).toBeVisible({
    timeout: 30_000,
  });
}

async function toGate(page: Page) {
  const input = page.getByTestId("project-assistant-input");
  await expect(input).toBeEnabled({ timeout: 15_000 });
  await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
    timeout: 45_000,
  });
}

async function toContract(page: Page) {
  await toGate(page);
  await page.getByTestId("f2-decide-GO").click();
  await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
    timeout: 45_000,
  });
  await page.getByTestId("f3-prepare-button").click();
  await expect(page.getByTestId("project-assistant-f3-contract")).toBeVisible({
    timeout: 45_000,
  });
  const decisionId =
    (await page.getByTestId("f2-decision-id").textContent())?.trim() ?? "";
  const executionContractId =
    (await page.getByTestId("f3-contract-id").textContent())?.trim() ?? "";
  const raw =
    page.url().split("/studio/projects/")[1]?.split(/[?#]/)[0] ?? "";
  const projectId = decodeURIComponent(raw);
  return { projectId, decisionId, executionContractId };
}

test.describe("Pre-M6 clean-slate captures", () => {

// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");

  test.describe.configure({ timeout: 360_000 });

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      (
        window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean }
      ).__SFIA_E2E_QA_CONTROL__ = true;
    });
  });

  test("CS-R01…CS-R19 inventory", async ({ page, request }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(MANIFEST, "");

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/studio");
    await expect(page.getByTestId("studio-projects-home")).toBeVisible({
      timeout: 30_000,
    });
    await expect(
      page
        .getByTestId("studio-projects-list")
        .or(page.getByTestId("studio-projects-empty"))
        .or(page.getByTestId("studio-projects-error")),
    ).toBeVisible({ timeout: 45_000 });
    await expect(page.getByTestId("rail-d1-workspace")).toHaveCount(0);
    await expect(page.getByTestId("rail-ops1-legacy")).toHaveCount(0);
    await capture(page, "CS-R01-F1-Projects", {
      screen: "F1",
      state: "Projects list",
      viewport: { width: 1440, height: 900 },
      figmaRef: "F1-Projets.png",
    });

    await page.goto("/studio/projects/new");
    await expect(page.getByTestId("create-project-form")).toBeVisible();
    await capture(page, "CS-R19-New-Project-Intention", {
      screen: "NewProject",
      state: "Provisional intention sheet (no dedicated Figma frame)",
      viewport: { width: 1440, height: 900 },
      figmaRef: "ABSENT — provisional from F1 empty-state language",
    });

    await createProject(page, `CS Capture ${Date.now()}`);
    await openWorkspace(page);
    await capture(page, "CS-R02-F2-Project-1440", {
      screen: "F2",
      state: "Project principal 1440",
      viewport: { width: 1440, height: 900 },
      figmaRef: "F2-Projet-1440.png",
    });

    await page.setViewportSize({ width: 1280, height: 900 });
    await capture(page, "CS-R03-F3-Project-1280", {
      screen: "F3",
      state: "Project principal 1280",
      viewport: { width: 1280, height: 900 },
      figmaRef: "F3-Projet-1280.png",
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    await toGate(page);
    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible();
    await capture(page, "CS-R04-F4-Qualification", {
      screen: "F4",
      state: "Qualification + gate",
      viewport: { width: 1440, height: 900 },
      figmaRef: "F4-Qualification.png",
    });
    await capture(page, "CS-R05-F5-HumanDecision", {
      screen: "F5",
      state: "Decision gate open",
      viewport: { width: 1440, height: 900 },
      figmaRef: "F5-Decision.png",
    });

    await page.getByTestId("f2-decide-GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });
    await page.getByTestId("f3-prepare-button").click();
    await expect(page.getByTestId("project-assistant-f3-contract")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-prepare-no-attempt")).toBeVisible();
    await capture(page, "CS-R06-F6-Contract-Confirmation", {
      screen: "F6",
      state: "Contract ready to confirm · Attempt=0",
      viewport: { width: 1440, height: 900 },
      figmaRef: "F6-Contrat-Confirmation.png",
    });
    await capture(page, "CS-R08-F7-Blocked-Before-Attempt", {
      screen: "F7",
      state: "Blocked before execution · no Attempt ID",
      viewport: { width: 1440, height: 900 },
      figmaRef: "F7-Bloque-Avant-Execution.png",
    });

    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });
    await capture(page, "CS-R07-F7-Running-Succeeded", {
      screen: "F7",
      state: "Attempt succeeded + outcome",
      viewport: { width: 1440, height: 900 },
      figmaRef: "F7-Execution-EnCours.png",
    });
    await capture(page, "CS-R12-F8-Current-Recommendation", {
      screen: "F8",
      state: "Recommendation current",
      viewport: { width: 1440, height: 900 },
      figmaRef: "F8-Revue-Recommandation.png",
    });

    await expect(page.getByTestId("project-history-panel")).toBeVisible();
    await capture(page, "CS-R14-F9-History", {
      screen: "F9",
      state: "History durable",
      viewport: { width: 1440, height: 900 },
      figmaRef: "F9-Historique.png",
    });

    async function armAndConfirm(
      req: APIRequestContext,
      scenario:
        | "attempt_failed"
        | "attempt_timeout"
        | "attempt_cancelled"
        | "evidence_missing",
      suffix: string,
    ) {
      await page.goto("/studio/projects/new");
      await createProject(page, `CS ${suffix} ${Date.now()}`);
      await openWorkspace(page);
      const ids = await toContract(page);
      const arm = await invokeOptionAQaScenario(req, {
        scenario,
        projectId: ids.projectId,
        decisionId: ids.decisionId,
        executionContractId: ids.executionContractId,
      });
      expect(arm.json.ok).toBe(true);
      await page.getByTestId("f3-confirm-execute-button").click();
      await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
        timeout: 45_000,
      });
    }

    await armAndConfirm(request, "attempt_failed", "failed");
    await capture(page, "CS-R09-F7-Failed", {
      screen: "F7",
      state: "Attempt FAILED",
      viewport: { width: 1440, height: 900 },
      figmaRef: "F7-Echec.png",
    });

    await armAndConfirm(request, "attempt_timeout", "timeout");
    await capture(page, "CS-R10-F7-Timeout", {
      screen: "F7",
      state: "Attempt TIMEOUT",
      viewport: { width: 1440, height: 900 },
      figmaRef: "F7-Timeout.png",
    });

    await armAndConfirm(request, "attempt_cancelled", "cancelled");
    await capture(page, "CS-R11-F7-Cancelled", {
      screen: "F7",
      state: "Attempt CANCELLED",
      viewport: { width: 1440, height: 900 },
      figmaRef: "F7-Annule.png",
    });

    await page.goto("/studio/projects/new");
    await createProject(page, `CS stale ${Date.now()}`);
    await openWorkspace(page);
    const staleIds = await toContract(page);
    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });
    const stale = await invokeOptionAQaScenario(request, {
      scenario: "recommendation_stale",
      projectId: staleIds.projectId,
    });
    expect(stale.json.ok).toBe(true);
    await refreshDurableOutcomeE2e(page);
    await expect(page.getByTestId("f3-recommendation-freshness")).toContainText(
      /périmée/i,
      { timeout: 15_000 },
    );
    await capture(page, "CS-R13-F8-Stale-Recommendation", {
      screen: "F8",
      state: "Recommendation STALE",
      viewport: { width: 1440, height: 900 },
      figmaRef: "F8-Recommandation-Perimee.png",
    });

    const fail = await invokeOptionAQaScenario(request, {
      scenario: "rehydrate_read_failure",
      projectId: staleIds.projectId,
    });
    expect(fail.json.ok).toBe(true);
    await page.reload();
    await expect(page.getByTestId("durable-rehydrate-error")).toBeVisible({
      timeout: 15_000,
    });
    await capture(page, "CS-R15-F10-Recovery", {
      screen: "F10",
      state: "Honest rehydrate error",
      viewport: { width: 1440, height: 900 },
      figmaRef: "F10-Reprise.png",
    });
    await invokeOptionAQaScenario(request, { scenario: "reset" });

    await page.goto("/studio/projects/new");
    await createProject(page, `CS resp ${Date.now()}`);
    await openWorkspace(page);
    await page.setViewportSize({ width: 1024, height: 900 });
    await capture(page, "CS-R16-F11-1024-closed", {
      screen: "F11A",
      state: "LPS closed @1024",
      viewport: { width: 1024, height: 900 },
      figmaRef: "F11A-Responsive-LPS-Ferme.png",
    });
    const toggle = page.getByTestId("lps-drawer-toggle");
    if (await toggle.count()) {
      await toggle.click();
      await expect(page.getByTestId("living-project-state-panel")).toBeVisible();
    }
    await capture(page, "CS-R17-F11-1024-open", {
      screen: "F11B",
      state: "LPS open @1024",
      viewport: { width: 1024, height: 900 },
      figmaRef: "F11B-Responsive-LPS-Ouvert.png",
    });

    await page.setViewportSize({ width: 390, height: 844 });
    await capture(page, "CS-R18-mobile-sub768", {
      screen: "mobile",
      state: "Conversation full width <768",
      viewport: { width: 390, height: 844 },
      figmaRef: "D1-Feuille-Conception_part2.png (<768)",
    });
  });
});
