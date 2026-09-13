import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

/**
 * QUAL-TO-GOVERNED-CYCLE — deterministic visual proof (fake provider).
 * ZERO NEW REAL. Captures under .tmp-sfia-review/runtime-captures/qual-to-governed-cycle/
 */

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/qual-to-governed-cycle",
);

async function capture(page: Page, id: string): Promise<string> {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

test.describe("QUAL-TO-GOVERNED visual proof (fake)", () => {
  test("conversation formatting + MW5 pilote-safe + lifecycle empty-or-rec", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.addInitScript(() => {
      (
        window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean }
      ).__SFIA_E2E_QA_CONTROL__ = true;
    });

    const suffix = `qtg-${Date.now().toString(36)}`;
    await page.goto("/studio/projects/new");
    await expect(page.getByTestId("create-project-form")).toBeVisible({
      timeout: 30_000,
    });
    await page.locator("#project-name").fill(`QualToGoverned ${suffix}`);
    await page
      .locator("#project-objective")
      .fill("Application personnelle de suivi de tâches quotidiennes");
    await page
      .locator("#project-context")
      .fill(
        "Intention minimale — fake provider — ZERO REAL — corrective visual proof.",
      );
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

    // Early advisory (incomplete intention)
    await input.fill(
      "Je voudrais une petite application pour suivre mes tâches du jour.",
    );
    await page.getByTestId("project-assistant-send").click();
    await expect(
      page.getByTestId("project-assistant-messages").getByText(/Nora|Pilote/i).first(),
    ).toBeVisible({ timeout: 45_000 });
    await capture(page, "01-early-advisory");

    // Genuine Critical MW5 — Pilote text must not leak markers
    await input.fill(
      "Préparer une proposition d'architecture __F2_STRUCTURING__",
    );
    await page.getByTestId("project-assistant-send").click();
    const messages = page.getByTestId("project-assistant-messages");
    await expect(
      messages.getByText(/périmètre|impact|structurant|clarification/i),
    ).toBeVisible({ timeout: 45_000 });
    await expect(messages.getByText(/\[MW5 CHALLENGE/)).toHaveCount(0);
    await expect(messages.getByText(/\bMW5\b/)).toHaveCount(0);
    await expect(messages.getByText(/\bTruth C\b/)).toHaveCount(0);
    await capture(page, "02-mw5-pilote-safe");

    // Lifecycle surface present (recommendation may be empty until structured LR)
    await expect(page.getByTestId("lifecycle-surface")).toBeVisible();
    await capture(page, "03-lifecycle-surface");
  });
});
