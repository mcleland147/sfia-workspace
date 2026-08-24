/**
 * W3-A R09 — canonical /studio Governed Execute product proof (deterministic).
 *
 * Positive: actual work qualified → EC (temp artifact, real target/scope) →
 * inspect → Confirmation N1 → AUTHORIZED → Execute →
 * accepted visible → running visible → terminal visible.
 *
 * Blocked: missing actual work — no Prepare / no Execute / no Attempt.
 *
 * R09 harness: Playwright retains then releases real Server Action transports
 * (Select → Start → Complete) to capture honest visual lifecycle states.
 * No product sleep · no forged DOM · no fake responses.
 */
import { test, expect, type Page, type Route } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/w3a-governed-execute-r09",
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
        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-A R09 /STUDIO GOVERNED EXECUTE PROOF",
    })}\n`,
    "utf8",
  );
}

/** TEST-ONLY latch: retain Start/Complete Server Actions until screenshots taken. */
function installExecuteVisualCaptureLatch(page: Page) {
  let active = false;
  let executePostIndex = 0;
  let releaseStart: (() => void) | null = null;
  let releaseComplete: (() => void) | null = null;
  let startHeld: Promise<void> | null = null;
  let completeHeld: Promise<void> | null = null;

  const handler = async (route: Route) => {
    const request = route.request();
    if (!active || request.method() !== "POST") {
      await route.continue();
      return;
    }
    if (!request.headers()["next-action"]) {
      await route.continue();
      return;
    }

    executePostIndex += 1;
    if (executePostIndex === 1) {
      await route.continue();
      return;
    }
    if (executePostIndex === 2) {
      await page.waitForFunction(
        () => {
          const history =
            document.querySelector('[data-testid="w3a-attempt-phase-history"]')
              ?.textContent ?? "";
          const lifecycle =
            document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
              ?.textContent ?? "";
          return history === "accepted" && lifecycle === "accepted";
        },
        undefined,
        { timeout: 30_000, polling: "raf" },
      );
      if (startHeld) await startHeld;
      await route.continue();
      return;
    }
    if (executePostIndex === 3) {
      await page.waitForFunction(
        () => {
          const history =
            document.querySelector('[data-testid="w3a-attempt-phase-history"]')
              ?.textContent ?? "";
          const lifecycle =
            document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
              ?.textContent ?? "";
          return history === "accepted|running" && lifecycle === "running";
        },
        undefined,
        { timeout: 30_000, polling: "raf" },
      );
      if (completeHeld) await completeHeld;
      await route.continue();
      return;
    }
    await route.continue();
  };

  return {
    async arm() {
      executePostIndex = 0;
      active = true;
      startHeld = new Promise<void>((resolve) => {
        releaseStart = resolve;
      });
      completeHeld = new Promise<void>((resolve) => {
        releaseComplete = resolve;
      });
      await page.route("**/*", handler);
    },
    releaseStartForCapture() {
      releaseStart?.();
    },
    releaseCompleteForCapture() {
      releaseComplete?.();
    },
    async disarm() {
      active = false;
      releaseStart?.();
      releaseComplete?.();
      await page.unroute("**/*", handler);
    },
  };
}

async function openQualifiedStudioProject(page: Page, name: string) {
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
    .fill(
      "Prouver actual work → EC → Confirmation → Attempt accepted/running/terminal.",
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
  await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
  await page.getByTestId("project-assistant-send").click();
  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
    timeout: 60_000,
  });

  const trajectory = page.getByTestId("w2-trajectory-panel");
  await expect(trajectory).toBeVisible({ timeout: 15_000 });
  await trajectory.scrollIntoViewIfNeeded();

  await page.getByTestId("w2-propose-options").click();
  const optionsOrError = page
    .getByTestId("w2-options")
    .or(page.getByTestId("w2-error"));
  await expect(optionsOrError).toBeVisible({ timeout: 60_000 });
  if (await page.getByTestId("w2-error").isVisible()) {
    const err = await page.getByTestId("w2-error").textContent();
    throw new Error(`w2 propose failed: ${err}`);
  }

  const decideButtons = page.locator("[data-testid^='w2-decide-']");
  await expect(decideButtons.first()).toBeVisible();
  await decideButtons.first().click();
  await expect(page.getByTestId("w2-decision")).toBeVisible({
    timeout: 45_000,
  });
}

test.describe("W3-A R09 /studio governed execute product proof", () => {
  test.describe.configure({ timeout: 300_000 });

  test("positive: accepted → running → terminal with actual work + N1 Confirmation", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(MANIFEST, "");

    await openQualifiedStudioProject(page, "W3-A R09 Positive Actual Work");
    await capture(page, "01-studio-home", {
      screen: "TrajectorySurface",
      state: "after_w2_decision",
    });

    // Actual work qualification — not W2 trajectory alone.
    await expect(page.getByTestId("w3a-qualify-execution-work")).toBeVisible();
    await page
      .getByTestId("w3a-operation-kind")
      .selectOption("generate-temporary-artifact");
    await capture(page, "02-actual-work-qualified", {
      screen: "TrajectorySurface",
      state: "actual_work_temp_artifact",
    });

    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({
      timeout: 45_000,
    });

    const actionText =
      (await page.getByTestId("w2-contract-action").textContent()) ?? "";
    expect(actionText).toContain("product:generate-temporary-artifact");
    expect(actionText).not.toMatch(/trajectory-governed|trajectory-bounded/);
    await expect(page.getByTestId("w2-contract-authority")).toHaveText("N1");
    await expect(page.getByTestId("w2-contract-scope")).toHaveText(
      "product:temporary-local-artifact",
    );
    await expect(page.getByTestId("w2-contract-target")).toHaveText(
      "product:project-workspace",
    );
    await expect(page.getByTestId("w2-contract-status")).toHaveText(
      "confirmation_required",
    );
    await expect(page.getByTestId("w2-contract-reversibility")).toContainText(
      "reversible",
    );
    await capture(page, "03-execution-contract-n1-confirm-required", {
      screen: "TrajectorySurface",
      state: "ec_prepared_temp_artifact_n1_confirmation_required",
    });

    await page.getByTestId("w2-inspect-contract").click();
    await expect(page.getByTestId("w2-inspection-state")).toContainText(
      "INSPECTÉ",
      { timeout: 30_000 },
    );
    await expect(page.getByTestId("w2-confirm-contract")).toBeEnabled();
    await capture(page, "04-inspected", {
      screen: "TrajectorySurface",
      state: "inspected_confirmation_required",
    });

    await page.getByTestId("w2-confirm-contract").click();
    await expect(page.getByTestId("w2-contract-status")).toHaveText(
      "confirmed",
      { timeout: 30_000 },
    );
    await capture(page, "05-confirmed", {
      screen: "TrajectorySurface",
      state: "effect_confirmation_n1_granted",
    });

    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
      "AUTORISÉ",
    );
    await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
    await capture(page, "06-authorized", {
      screen: "TrajectorySurface",
      state: "authorized_stop_before_execute",
    });

    const latch = installExecuteVisualCaptureLatch(page);
    await latch.arm();

    const executeClick = page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3a-attempt")).toBeVisible({
      timeout: 60_000,
    });

    await page.waitForFunction(
      () => {
        const history =
          document.querySelector('[data-testid="w3a-attempt-phase-history"]')
            ?.textContent ?? "";
        const lifecycle =
          document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
            ?.textContent ?? "";
        return history === "accepted" && lifecycle === "accepted";
      },
      undefined,
      { timeout: 30_000, polling: "raf" },
    );
    await expect(page.getByTestId("w3a-attempt-lifecycle")).toHaveText("accepted");
    await expect(page.getByTestId("w3a-attempt-phase-history")).toHaveText(
      "accepted",
    );
    await capture(page, "07-attempt-accepted", {
      screen: "TrajectorySurface",
      state: "accepted",
      phaseHistory: "accepted",
      lifecycleAtCapture: "accepted",
    });
    latch.releaseStartForCapture();

    const attemptIdAccepted =
      (await page.getByTestId("w3a-attempt-id").textContent()) ?? "";
    expect(attemptIdAccepted.length).toBeGreaterThan(0);

    await page.waitForFunction(
      () => {
        const history =
          document.querySelector('[data-testid="w3a-attempt-phase-history"]')
            ?.textContent ?? "";
        const lifecycle =
          document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
            ?.textContent ?? "";
        return history === "accepted|running" && lifecycle === "running";
      },
      undefined,
      { timeout: 30_000, polling: "raf" },
    );
    await expect(page.getByTestId("w3a-attempt-lifecycle")).toHaveText("running");
    await expect(page.getByTestId("w3a-attempt-phase-history")).toHaveText(
      "accepted|running",
    );
    await capture(page, "08-attempt-running", {
      screen: "TrajectorySurface",
      state: "running",
      phaseHistory: "accepted|running",
      lifecycleAtCapture: "running",
    });
    latch.releaseCompleteForCapture();
    expect(await page.getByTestId("w3a-attempt-id").textContent()).toBe(
      attemptIdAccepted,
    );

    await page.waitForFunction(
      () =>
        (document.querySelector('[data-testid="w3a-attempt-phase-history"]')
          ?.textContent ?? "") === "accepted|running|terminal" &&
        (document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
          ?.textContent ?? "") === "terminal",
      undefined,
      { timeout: 60_000, polling: "raf" },
    );
    await executeClick;
    await latch.disarm();

    await expect(page.getByTestId("w3a-attempt-lifecycle")).toHaveText(
      "terminal",
    );
    await expect(page.getByTestId("w3a-attempt-phase-history")).toHaveText(
      "accepted|running|terminal",
    );
    await expect(page.getByTestId("w3a-attempt-technical-status")).toHaveText(
      "succeeded",
    );
    await expect(page.getByTestId("w3a-attempt-real")).toContainText("non");
    await expect(page.getByTestId("w3a-cycle-closed")).toHaveText("non");
    await expect(page.getByTestId("w3a-terminal-honesty")).toContainText(
      "W3-B",
    );
    expect(await page.getByTestId("w3a-attempt-id").textContent()).toBe(
      attemptIdAccepted,
    );
    await capture(page, "09-attempt-terminal", {
      screen: "TrajectorySurface",
      state: "terminal",
      phaseHistory: "accepted|running|terminal",
      lifecycleAtCapture: "terminal",
    });

    const body = (await page.locator("body").textContent()) ?? "";
    expect(body.toLowerCase()).not.toMatch(/runtime v3 adopted/);
    expect(body.toLowerCase()).not.toMatch(/ready for real/);

    expect(
      fs.existsSync(path.join(CAPTURE_ROOT, "07-attempt-accepted.png")),
    ).toBe(true);
    expect(
      fs.existsSync(path.join(CAPTURE_ROOT, "08-attempt-running.png")),
    ).toBe(true);
    expect(
      fs.existsSync(path.join(CAPTURE_ROOT, "09-attempt-terminal.png")),
    ).toBe(true);
  });

  test("blocked: missing actual work — no Prepare / no Execute / no Attempt", async ({
    page,
  }) => {
    await openQualifiedStudioProject(page, "W3-A R09 Blocked No Work");
    // Empty operation kind → Prepare disabled → no Execute → no Attempt.
    await page.getByTestId("w3a-operation-kind").selectOption("");
    await expect(page.getByTestId("w2-prepare-contract")).toBeDisabled();
    await expect(page.getByTestId("w3a-governed-execute")).toHaveCount(0);
    await expect(page.getByTestId("w3a-attempt")).toHaveCount(0);
    await capture(page, "10-blocked-no-actual-work", {
      screen: "TrajectorySurface",
      state: "blocked_no_actual_work_no_execute",
    });
  });
});
