import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

/**
 * Cycle 9 — FULL QA / VALIDATION re-run (Option A).
 *
 * Env required (via process.env → playwright webServer spread):
 *   SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1
 *
 * Captures go to .tmp-sfia-review/runtime-captures/cycle-9-rerun/
 * Provenance: CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT
 */

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/cycle-9-rerun",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

function runId(): string {
  return `c9-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

async function capture(
  page: Page,
  id: string,
  meta: {
    screen: string;
    state: string;
    viewport: { width: number; height: number };
  },
): Promise<string> {
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
      screen: meta.screen,
      state: meta.state,
      viewport: meta.viewport,
      timestamp: new Date().toISOString(),
      sha256,
      provenance: "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT",
    })}\n`,
  );
  return sha256;
}

async function createUniqueProject(page: Page, suffix: string) {
  const name = `QA Option A ${suffix}`;
  await page.goto("/studio/projects/new");
  await expect(page.getByTestId("create-project-form")).toBeVisible();
  await page.locator("#project-name").fill(name);
  await page.locator("#project-objective").fill("Cycle 9 QA re-run Option A");
  await page
    .locator("#project-context")
    .fill("Contexte E2E local fake provider — REAL=0 — post-hardening.");
  await page.getByTestId("create-project-submit").click();
  await expect(page.getByTestId("open-project-workspace")).toBeVisible({
    timeout: 30_000,
  });
  await page.getByTestId("open-project-workspace").click();
  await expect(page.getByTestId("project-principal")).toBeVisible({
    timeout: 30_000,
  });
  await expect(page.getByTestId("project-assistant-panel")).toBeVisible();
  return name;
}

/**
 * MW5 structuring contract (CORR-MW5-03):
 * turn 1 → CHALLENGE visible, no Recommendation-Proposal
 * turn 2 (sufficient) → proposal allowed (Rec ≠ HD)
 * Product path (non-legacy): gate affordances redirect to trajectory section —
 * assert proposal + recommendation labels, not legacy project-assistant-gate.
 */
async function sendStructuring(page: Page) {
  const input = page.getByTestId("project-assistant-input");
  await expect(input).toBeEnabled({ timeout: 15_000 });
  await input.fill(
    "Préparer une proposition d'architecture __F2_STRUCTURING__",
  );
  await page.getByTestId("project-assistant-send").click();
  await expect(
    page.getByTestId("project-assistant-messages").getByText(/\[MW5 CHALLENGE/),
  ).toBeVisible({ timeout: 45_000 });
  await expect(page.getByTestId("project-assistant-proposal")).toHaveCount(0);
  await expect(page.getByTestId("project-assistant-decision")).toHaveCount(0);

  await input.fill(
    "Prémisse d'architecture product explicitée. __F2_STRUCTURING__ __MW5_SATISFACTION_SUFFICIENT__",
  );
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-proposal")).toBeVisible({
    timeout: 45_000,
  });
  await expect(page.getByTestId("f2-gate-required")).toBeVisible();
  await expect(page.getByText(/RECOMMANDATION/i).first()).toBeVisible();
  await expect(page.getByTestId("project-assistant-decision")).toHaveCount(0);
}


/**
 * Standard/Light gated path (W4-B product surface):
 * proposal + Morris gate label + authority-path guidance.
 * Legacy `project-assistant-gate` / in-conversation `f2-decide-*` are RETIRE LATER
 * (only when exposeLegacyAuthorityPath=true in unit harvest).
 */
async function sendGatedStandard(page: Page) {
  const input = page.getByTestId("project-assistant-input");
  await expect(input).toBeEnabled({ timeout: 15_000 });
  await input.fill(
    "Préparer une livraison gated __F2_GATED_STANDARD__",
  );
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-proposal")).toBeVisible({
    timeout: 45_000,
  });
  await expect(page.getByTestId("f2-gate-required")).toBeVisible();
  await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
  await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
  await expect(page.getByTestId("project-assistant-decision")).toHaveCount(0);
}

test.describe("Cycle 9 — F1→F11 durable post-GO happy path", () => {

// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");

  test.describe.configure({ timeout: 240_000 });

  test("F1→F11 happy path + History/Recovery + responsive captures", async ({
    page,
  }) => {
    test.setTimeout(240_000);
    const suffix = runId();

    // F1 @1440
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/studio");
    await expect(page.getByTestId("studio-shell")).toBeVisible();
    await expect(page.getByTestId("studio-projects-home")).toBeVisible();
    await capture(page, "R01-F1-Projects", {
      screen: "F1",
      state: "Projects entry",
      viewport: { width: 1440, height: 1024 },
    });

    await createUniqueProject(page, suffix);
    await expect(page.getByTestId("project-recovery-banner")).toHaveCount(0);

    // F2 @1440
    await expect(page.getByTestId("project-principal")).toBeVisible();
    await expect(page.getByTestId("project-assistant-panel")).toBeVisible();
    await expect(page.getByTestId("living-project-state-panel")).toBeVisible();
    await capture(page, "R02-F2-Project-1440", {
      screen: "F2",
      state: "Project principal conversation + LPS @1440",
      viewport: { width: 1440, height: 1024 },
    });

    // F3 @1280
    await page.setViewportSize({ width: 1280, height: 900 });
    await expect(page.getByTestId("project-principal")).toBeVisible();
    await capture(page, "R03-F3-Project-1280", {
      screen: "F3",
      state: "Project principal @1280",
      viewport: { width: 1280, height: 900 },
    });

    await page.setViewportSize({ width: 1440, height: 1024 });
    await sendGatedStandard(page);
    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible();
    await expect(page.getByTestId("project-assistant-decision")).toHaveCount(0);
    await capture(page, "R04-F4-Qualification", {
      screen: "F4",
      state: "Qualification + Proposal ≠ HumanDecision (gated Standard/Light)",
      viewport: { width: 1440, height: 1024 },
    });

    await page.getByTestId("f2-decide-GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f2-decision-kind")).toContainText(/GO/i);
    await capture(page, "R05-F5-HumanDecision", {
      screen: "F5",
      state: "HumanDecision GO recorded",
      viewport: { width: 1440, height: 1024 },
    });

    await expect(page.getByTestId("f3-prepare-button")).toBeEnabled({
      timeout: 15_000,
    });
    await page.getByTestId("f3-prepare-button").click();
    await expect(page.getByTestId("project-assistant-f3-contract")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-contract-id")).toContainText(/xct:m3-res:/);
    await expect(page.getByTestId("f3-prepare-no-attempt")).toBeVisible();
    await expect(page.getByTestId("project-assistant-f3-execute")).toHaveCount(0);
    await capture(page, "R06-F6-Resolved-Contract", {
      screen: "F6",
      state: "Durable resolved successor awaiting Confirmation",
      viewport: { width: 1440, height: 1024 },
    });

    await page.getByTestId("f3-confirm-execute-button").click();
    await expect(page.getByTestId("project-assistant-f3-execute")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f3-attempt-status")).toContainText(/succeeded/i);
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
    await expect(page.getByTestId("f3-review-bundle-id")).toBeHidden();
    await expect(page.getByTestId("f3-recommendation-card")).toBeVisible();
    await expect(page.getByText(/PAS UNE DÉCISION/i).first()).toBeVisible();
    await capture(page, "R07-F7-Succeeded", {
      screen: "F7",
      state: "Fixture-safe Attempt succeeded + Evidence + ReviewBundle",
      viewport: { width: 1440, height: 1024 },
    });
    await capture(page, "R08-F8-Recommendation-Current", {
      screen: "F8",
      state: "Recommendation current; executionAuthority false",
      viewport: { width: 1440, height: 1024 },
    });

    // F9 History
    await expect(page.getByTestId("project-history-panel")).toBeVisible();
    await capture(page, "R10-F9-History", {
      screen: "F9",
      state: "History durable readback after execution",
      viewport: { width: 1440, height: 1024 },
    });

    // F10 Recovery — reload after durable progress
    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-assistant-empty")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
    await expect(page.getByTestId("project-assistant-proposal")).toHaveCount(0);
    await expect(page.getByTestId("living-project-state-panel")).toBeVisible();
    await capture(page, "R11-F10-Recovery", {
      screen: "F10",
      state: "Recovery — process-local cleared; durable LPS retained",
      viewport: { width: 1440, height: 1024 },
    });

    // F11 responsive @1024
    await page.setViewportSize({ width: 1024, height: 800 });
    await expect(page.getByTestId("project-principal")).toBeVisible();
    await capture(page, "R12-F11-LPS-Closed-1024", {
      screen: "F11A",
      state: "Responsive @1024 LPS closed/default",
      viewport: { width: 1024, height: 800 },
    });
    const lpsToggle = page.getByTestId("lps-drawer-toggle");
    if ((await lpsToggle.count()) > 0) {
      await lpsToggle.click();
      await capture(page, "R13-F11-LPS-Open-1024", {
        screen: "F11B",
        state: "Responsive @1024 LPS drawer open",
        viewport: { width: 1024, height: 800 },
      });
    } else {
      await capture(page, "R13-F11-LPS-Open-1024", {
        screen: "F11B",
        state: "Responsive @1024 — LPS toggle absent; panel layout capture",
        viewport: { width: 1024, height: 800 },
      });
    }

    // F11 sub-768
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.getByTestId("project-assistant-panel")).toBeVisible();
    await expect(page.getByTestId("project-assistant-input")).toBeVisible();
    await capture(page, "R14-F11-Sub768", {
      screen: "F11-mobile",
      state: "Sub-768 conversation full width; composer accessible",
      viewport: { width: 390, height: 844 },
    });
  });

  test("Legacy fixture prepare after GO remains STALE (negative authority)", async ({
    page,
  }) => {
    test.setTimeout(120_000);
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `legacy-${suffix}`);
    await sendGatedStandard(page);
    await page.getByTestId("f2-decide-GO").click();
    await expect(page.getByTestId("project-assistant-decision")).toBeVisible({
      timeout: 45_000,
    });

    await expect(page.getByTestId("f3-legacy-fixture-prepare-button")).toBeEnabled({
      timeout: 15_000,
    });
    await page
      .getByTestId("project-assistant-f3-prepare")
      .locator("summary")
      .click();
    await page.getByTestId("f3-legacy-fixture-prepare-button").click();
    await expect(page.getByTestId("project-assistant-error")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-assistant-error")).toContainText(
      /STALE/i,
    );
    await expect(page.getByTestId("project-assistant-f3-contract")).toHaveCount(0);
    await expect(page.getByTestId("project-assistant-f3-execute")).toHaveCount(0);
    await capture(page, "R06b-Legacy-STALE-Preserved", {
      screen: "F6-neg",
      state: "Legacy Proposal prepare STALE after GO LPS advance",
      viewport: { width: 1440, height: 1024 },
    });
  });
});

test.describe("Option A — Negative authority reachable", () => {
  test.describe.configure({ timeout: 120_000 });

  // W4-B: in-conversation F2 decide / F3 prepare-confirm removed from product path.
  // Authority continues on TrajectorySurface (w2-decide-* / w2-prepare-*). Covered by
  // studio-w4b-single-authority-path.spec.ts. Keep N1 + N12 + MW5 product-path asserts.

  test("N2 rejected HumanDecision NO_GO blocks prepare", async () => {
    test.skip(
      true,
      "W4-B product path: f2-decide-* removed — RETIRE LATER (unit harvest / W2 trajectory)",
    );
  });

  test("N1 Recommendation remains distinct from HumanDecision at Proposal stage", async ({
    page,
  }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `n1-${suffix}`);
    await sendStructuring(page);
    await expect(page.getByTestId("project-assistant-proposal")).toBeVisible();
    await expect(page.getByText(/PAS UNE DÉCISION/i).first()).toBeVisible();
    await expect(page.getByTestId("project-assistant-decision")).toHaveCount(0);
    await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
    await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
  });

  test("N3 resolve alone leaves Attempt count 0 until Confirmation", async () => {
    test.skip(
      true,
      "W4-B product path: f2-decide-*/f3-prepare removed — RETIRE LATER (W2 trajectory)",
    );
  });

  test("N4 duplicate Confirmation does not create second effective Attempt UI", async () => {
    test.skip(
      true,
      "W4-B product path: f2-decide-*/f3-confirm removed — RETIRE LATER (W2 trajectory)",
    );
  });

  test("N12 Recovery honesty — reload does not rebuild conversation", async ({
    page,
  }) => {
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `n12-${suffix}`);
    await sendStructuring(page);
    await expect(page.getByTestId("project-assistant-proposal")).toBeVisible();
    await expect(page.getByTestId("f2-gate-required")).toBeVisible();
    await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-assistant-empty")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
    await expect(page.getByTestId("project-assistant-proposal")).toHaveCount(0);
    await expect(page.getByTestId("product-authority-path-guidance")).toHaveCount(0);
  });

  test("G-UX-08 AMEND deferred message only", async () => {
    test.skip(
      true,
      "W4-B product path: f2-decide-AMEND removed — RETIRE LATER (unit harvest)",
    );
  });
});

/**
 * CORR-MW5-03 — dedicated MW5 UX contract (not under W4-B skip).
 * Recommendation-Proposal only after challenge satisfied; Rec ≠ HumanDecision.
 */
test.describe("MW5 — Critical Challenge structuring UX (CORR-MW5-03)", () => {
  test.describe.configure({ timeout: 180_000 });

  test("challenge first; insufficient blocked; sufficient unlocks proposal; Rec ≠ HD", async ({
    page,
  }) => {
    test.setTimeout(180_000);
    const suffix = runId();
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createUniqueProject(page, `mw5-${suffix}`);

    const input = page.getByTestId("project-assistant-input");
    await expect(input).toBeEnabled({ timeout: 15_000 });
    await input.fill(
      "Préparer une proposition d'architecture __F2_STRUCTURING__",
    );
    await page.getByTestId("project-assistant-send").click();

    const messages = page.getByTestId("project-assistant-messages");
    await expect(messages.getByText(/\[MW5 CHALLENGE/)).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("project-assistant-proposal")).toHaveCount(0);
    await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
    await expect(page.getByTestId("project-assistant-decision")).toHaveCount(0);

    const challengeText = await messages.innerText();
    const questionMarks = (challengeText.match(/\?/g) ?? []).length;
    expect(questionMarks).toBeLessThanOrEqual(3);

    await input.fill("ok __F2_STRUCTURING__");
    await page.getByTestId("project-assistant-send").click();
    await expect(page.getByTestId("project-assistant-proposal")).toHaveCount(0, {
      timeout: 45_000,
    });
    await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);

    await input.fill(
      "Prémisse d'architecture product explicitée. __F2_STRUCTURING__ __MW5_SATISFACTION_SUFFICIENT__",
    );
    await page.getByTestId("project-assistant-send").click();
    await expect(page.getByTestId("project-assistant-proposal")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("f2-gate-required")).toContainText(
      /Décision sur la proposition requise|DÉCISION REQUISE/i,
    );
    await expect(page.getByText(/RECOMMANDATION/i).first()).toBeVisible();
    await expect(page.getByTestId("project-assistant-decision")).toHaveCount(0);
    await expect(
      page.getByTestId("product-authority-path-guidance"),
    ).toBeVisible();
  });
});

test.describe("Option A — accessibility bounded smoke", () => {
  test("F1 and Project principal expose structure", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/studio");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    const suffix = runId();
    await createUniqueProject(page, `a11y-${suffix}`);
    const input = page.getByTestId("project-assistant-input");
    await input.focus();
    await expect(input).toBeFocused();
    // Send stays disabled until non-empty input (honest empty-state CTA).
    await expect(page.getByTestId("project-assistant-send")).toBeDisabled();
    await input.fill("ping a11y");
    await expect(page.getByTestId("project-assistant-send")).toBeEnabled();
  });
});
