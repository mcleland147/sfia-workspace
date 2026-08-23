/**
 * W2-G3 correction pass — /studio runtime product proof (deterministic).
 * Captures Options → Recommendation → HD → Trajectory → EC → inspect →
 * AUTHORIZED|BLOCKED → STOP BEFORE EXECUTE on the canonical /studio path.
 * No REAL · no Execute · Track D untouched.
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/w2-g3-correction",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

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
        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W2-G3 CORRECTION /STUDIO PROOF",
    })}\n`,
    "utf8",
  );
}

test.describe("W2-G3 correction /studio runtime proof", () => {
  test.describe.configure({ timeout: 240_000 });

  test("walks Options → HD → EC inspect → STOP BEFORE EXECUTE", async ({
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
    await page.locator("#project-name").fill("W2-G3 Correction Runtime Proof");
    await page
      .locator("#project-objective")
      .fill(
        "Prouver Options / Recommendation / Décision de trajectoire / inspection — aucune exécution.",
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
    await expect(page.getByTestId("w2-recommendation")).toContainText(
      "RECOMMANDATION — PAS UNE DÉCISION",
    );
    await expect(page.getByTestId("w2-proposed-trajectory")).toContainText(
      "TRAJECTOIRE PROPOSÉE",
    );
    await expect(page.getByTestId("w2-decision")).toHaveCount(0);
    await capture(page, "04-options-recommendation", {
      screen: "TrajectorySurface",
      state: "options_proposed",
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

    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({
      timeout: 45_000,
    });
    await expect(page.getByTestId("w2-contract-action")).toBeVisible();
    await expect(page.getByTestId("w2-contract-facts")).toBeVisible();
    await capture(page, "06-execution-contract", {
      screen: "TrajectorySurface",
      state: "contract_prepared",
    });

    const confirm = page.getByTestId("w2-confirm-contract");
    if (await confirm.count()) {
      await expect(confirm).toBeDisabled();
    }

    await page.getByTestId("w2-inspect-contract").click();
    await expect(page.getByTestId("w2-inspection-state")).toBeVisible({
      timeout: 30_000,
    });
    await capture(page, "07-inspected", {
      screen: "TrajectorySurface",
      state: "inspected",
    });

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
    await capture(page, "08-authorization-stop", {
      screen: "TrajectorySurface",
      state: outcomeText.includes("AUTORISÉ") ? "authorized" : "blocked",
    });

    const history = page.getByTestId("project-history");
    if (await history.count()) {
      await history.scrollIntoViewIfNeeded();
      await capture(page, "09-history", {
        screen: "HistorySurface",
        state: "visible",
      });
    }

    expect(fs.existsSync(path.join(CAPTURE_ROOT, "04-options-recommendation.png"))).toBe(
      true,
    );
    expect(fs.existsSync(path.join(CAPTURE_ROOT, "08-authorization-stop.png"))).toBe(
      true,
    );
  });
});
