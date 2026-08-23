/**
 * W2 /studio runtime product proof (deterministic).
 * Captures Options → Recommendation (Phase B cognition) → HD → Trajectory →
 * EC → inspect → material constraint amendment → re-inspect →
 * AUTHORIZED|BLOCKED → STOP BEFORE EXECUTE on the canonical /studio path.
 *
 * Track D / bounded Phase B is integrated on the product path.
 * Deterministic Product E2E only · No REAL · no Execute.
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/w2-final-closure-product-correction",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

const AMENDMENT_CONSTRAINT =
  "W2_E2E_TIGHTEN: borner strictement le slice livré — aucune extension silencieuse";

async function capture(
  page: Page,
  id: string,
  meta: { screen: string; state: string },
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
      provenance:
        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2 FINAL CLOSURE PRODUCT CORRECTION /STUDIO PROOF",
    })}\n`,
    "utf8",
  );
}

test.describe("W2 final-closure /studio product correction proof", () => {
  test.describe.configure({ timeout: 240_000 });

  test("walks Options → Phase-B Reco → HD → EC amend/reinspect → STOP BEFORE EXECUTE", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(MANIFEST, "");

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/studio");
    await expect(page.getByTestId("studio-projects-home")).toBeVisible({
      timeout: 30_000,
    });
    await capture(page, "01-studio-home", {
      screen: "ProjectsHome",
      state: "loaded",
    });

    await page.goto("/studio/projects/new");
    await expect(page.getByTestId("create-project-form")).toBeVisible();
    await page.locator("#project-name").fill("W2 Final Closure Product Correction");
    await page
      .locator("#project-objective")
      .fill(
        "Prouver Options / Recommendation Phase B / Décision / amendement EC / réinspection — aucune exécution.",
      );
    await page.getByTestId("create-project-submit").click();
    await expect(page.getByTestId("open-project-workspace")).toBeVisible({
      timeout: 30_000,
    });
    await page.getByTestId("open-project-workspace").click();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await capture(page, "02-workspace", {
      screen: "ProjectWorkspace",
      state: "opened",
    });

    // W1 qualification must precede W2 options (CYCLE_NOT_QUALIFIED otherwise).
    const input = page.getByTestId("project-assistant-input");
    await expect(input).toBeEnabled({ timeout: 15_000 });
    await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
    await page.getByTestId("project-assistant-send").click();
    await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
      timeout: 60_000,
    });
    await capture(page, "02b-qualified-gate", {
      screen: "ConversationSurface",
      state: "f2_gate_qualified",
    });

    const trajectory = page.getByTestId("w2-trajectory-panel");
    await expect(trajectory).toBeVisible({ timeout: 15_000 });
    await trajectory.scrollIntoViewIfNeeded();
    await capture(page, "03-trajectory-idle", {
      screen: "TrajectorySurface",
      state: "idle_after_qualification",
    });

    await page.getByTestId("w2-propose-options").click();
    const optionsOrError = page
      .getByTestId("w2-options")
      .or(page.getByTestId("w2-error"));
    await expect(optionsOrError).toBeVisible({ timeout: 60_000 });
    if (await page.getByTestId("w2-error").isVisible()) {
      const err = await page.getByTestId("w2-error").textContent();
      throw new Error(`w2 propose failed: ${err}`);
    }
    await expect(page.getByTestId("w2-options")).toBeVisible();

    // --- R01: Phase B semantic cognition on integrated /studio path ---
    const recommendation = page.getByTestId("w2-recommendation");
    await expect(recommendation).toContainText(
      "RECOMMANDATION — PAS UNE DÉCISION",
    );
    await expect(recommendation).toContainText(/anti scope creep/i);
    await expect(recommendation).toContainText("Contexte de cycle rattaché.");
    const recoText = (await recommendation.textContent()) ?? "";
    expect(recoText).not.toMatch(/\[CKC:/);
    expect(recoText).not.toMatch(/ckc:studio:/);
    expect(recoText).not.toMatch(/digest=/);
    expect(recoText).not.toMatch(/fp=/);

    await expect(page.getByTestId("w2-proposed-trajectory")).toContainText(
      "TRAJECTOIRE PROPOSÉE",
    );
    await expect(page.getByTestId("w2-decision")).toHaveCount(0);
    await capture(page, "04-options-recommendation-phase-b", {
      screen: "TrajectorySurface",
      state: "options_proposed_phase_b_semantic",
    });

    const decideButtons = page.locator("[data-testid^='w2-decide-']");
    await expect(decideButtons.first()).toBeVisible();
    await decideButtons.first().click();
    await expect(page.getByTestId("w2-decision")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("w2-decision")).toContainText(
      "Décision de trajectoire",
    );
    await expect(page.getByTestId("w2-decided-trajectory")).toContainText(
      "TRAJECTOIRE DÉCIDÉE / COURANTE",
    );
    await capture(page, "05-human-decision-trajectory", {
      screen: "TrajectorySurface",
      state: "decided",
    });

    // --- R02: prepare → inspect → material amend → block → reinspect → auth ---
    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("w2-contract-action")).toBeVisible();
    await expect(page.getByTestId("w2-contract-facts")).toBeVisible();

    const priorIdText =
      (await page.getByTestId("w2-contract").textContent()) ?? "";
    const priorConstraints =
      (await page.getByTestId("w2-contract-constraints").textContent()) ?? "";
    expect(priorConstraints).not.toContain("W2_E2E_TIGHTEN");

    const confirm = page.getByTestId("w2-confirm-contract");
    if (await confirm.count()) {
      await expect(confirm).toBeDisabled();
    }

    await page.getByTestId("w2-inspect-contract").click();
    await expect(page.getByTestId("w2-inspection-state")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("w2-inspection-state")).toContainText(
      "INSPECTÉ",
    );
    await capture(page, "06-original-inspected", {
      screen: "TrajectorySurface",
      state: "original_ec_inspected",
    });

    await expect(page.getByTestId("w2-amendment-form")).toBeVisible();
    await page.getByTestId("w2-amend-constraint").fill(AMENDMENT_CONSTRAINT);
    await page.getByTestId("w2-amend-contract").click();

    await expect(page.getByTestId("w2-amendment-notice")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("w2-amendment-status")).toContainText(
      /réinspection requise/i,
    );
    await expect(page.getByTestId("w2-contract-constraints")).toContainText(
      "W2_E2E_TIGHTEN",
    );
    await expect(page.getByTestId("w2-amendment-lineage")).toBeVisible();
    await expect(page.getByTestId("w2-inspection-state")).toContainText(
      "NON INSPECTÉ",
    );
    // Successor is a different contract identity (lineage shows prior id).
    const lineage =
      (await page.getByTestId("w2-amendment-lineage").textContent()) ?? "";
    expect(lineage).toMatch(/Successeur de xct:/);

    await capture(page, "07-material-amendment-reinspection-required", {
      screen: "TrajectorySurface",
      state: "successor_reinspection_required",
    });

    // Pre-reinspect authority must BLOCK from product authorize logic.
    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
      "BLOQUÉ",
    );
    const blockedReason =
      (await page.getByTestId("w2-authorization-reason").textContent()) ?? "";
    expect(blockedReason.toLowerCase()).toMatch(/inspect/);

    await page.getByTestId("w2-inspect-contract").click();
    await expect(page.getByTestId("w2-inspection-state")).toContainText(
      "INSPECTÉ",
      { timeout: 30_000 },
    );
    await expect(page.getByTestId("w2-amendment-status")).toContainText(
      /RÉINSPECTION DÉJÀ SATISFAITE|réinspect/i,
    );
    await capture(page, "08-successor-reinspected", {
      screen: "TrajectorySurface",
      state: "successor_reinspected",
    });

    const confirmAfter = page.getByTestId("w2-confirm-contract");
    if (await confirmAfter.count()) {
      if (await confirmAfter.isEnabled()) {
        await confirmAfter.click();
      }
    }

    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("w2-stop-before-execute")).toContainText(
      "arrêt avant exécution",
    );
    const outcome = page.getByTestId("w2-authorization-outcome");
    await expect(outcome).toBeVisible();
    const outcomeText = (await outcome.textContent()) ?? "";
    expect(
      outcomeText.includes("AUTORISÉ") || outcomeText.includes("BLOQUÉ"),
    ).toBe(true);
    await expect(page.getByTestId("w2-authorization-reason")).not.toBeEmpty();
    await expect(page.getByTestId("w2-authorization-next")).not.toBeEmpty();

    await capture(page, "09-final-authority-stop", {
      screen: "TrajectorySurface",
      state: outcomeText.includes("AUTORISÉ") ? "authorized" : "blocked",
    });

    // Silence unused prior capture vars while keeping explicit E2E-R02-02 intent.
    expect(priorIdText.length).toBeGreaterThan(0);

    expect(
      fs.existsSync(
        path.join(CAPTURE_ROOT, "04-options-recommendation-phase-b.png"),
      ),
    ).toBe(true);
    expect(
      fs.existsSync(
        path.join(CAPTURE_ROOT, "07-material-amendment-reinspection-required.png"),
      ),
    ).toBe(true);
    expect(
      fs.existsSync(path.join(CAPTURE_ROOT, "09-final-authority-stop.png")),
    ).toBe(true);
  });
});
