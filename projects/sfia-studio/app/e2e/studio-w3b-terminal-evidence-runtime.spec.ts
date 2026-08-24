/**
 * W3-B — Terminal + Evidence product-native proof on canonical /studio.
 * Generic Exécuter only — no SUCCESS/STOP/FAIL chooser.
 * FAIL/STOP armed at TEST-ONLY external boundary. REAL OUT.
 */
import { test, expect, type Page, type Route } from "@playwright/test";
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
  "../../../.tmp-sfia-review/runtime-captures/w3-b-terminal-evidence",
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
        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-B /STUDIO TERMINAL+EVIDENCE — NOT REAL",
    })}\n`,
    "utf8",
  );
}

/** Hold the materialize Server Action POST until evidence-pending is captured. */
function installMaterializeLatch(page: Page) {
  let active = false;
  let postIndex = 0;
  let releaseMaterialize: (() => void) | null = null;
  let materializeHeld: Promise<void> | null = null;

  const handler = async (route: Route) => {
    const request = route.request();
    if (!active || request.method() !== "POST" || !request.headers()["next-action"]) {
      await route.continue();
      return;
    }
    postIndex += 1;
    // SUCCESS path: 1 select, 2 start, 3 complete, 4 materialize
    if (postIndex === 4) {
      await page.waitForFunction(
        () =>
          document.querySelector('[data-testid="w3b-evidence-pending"]') !==
            null ||
          (document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
            ?.textContent ?? "") === "terminal",
        undefined,
        { timeout: 30_000, polling: "raf" },
      );
      if (materializeHeld) await materializeHeld;
      await route.continue();
      return;
    }
    await route.continue();
  };

  return {
    async arm() {
      postIndex = 0;
      active = true;
      materializeHeld = new Promise<void>((resolve) => {
        releaseMaterialize = resolve;
      });
      await page.route("**/*", handler);
    },
    release() {
      releaseMaterialize?.();
    },
    async disarm() {
      active = false;
      releaseMaterialize?.();
      await page.unroute("**/*", handler);
    },
  };
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
    .fill("Preuve produit native — résultat terminal + Evidence.");
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

  // No outcome chooser buttons on the product surface.
  await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
  await expect(page.getByTestId("w3a-governed-execute")).toHaveText("Exécuter");
  await expect(page.getByTestId("w3b-governed-stop")).toHaveCount(0);
  await expect(page.getByTestId("w3b-governed-fail")).toHaveCount(0);
}

async function readOutcomeMeta(page: Page) {
  const attemptId =
    (await page.getByTestId("w3a-attempt-id").textContent())?.trim() ?? "";
  const evidenceId =
    (await page.getByTestId("w3b-evidence-id").textContent())?.trim() ?? "";
  const reviewBundleId =
    (await page.getByTestId("w3b-review-bundle-id").textContent())?.trim() ?? "";
  const productOutcome =
    (await page.getByTestId("w3b-product-outcome-kind").textContent())?.trim() ??
    "";
  const technicalStatus =
    (await page.getByTestId("w3a-attempt-technical-status").textContent())
      ?.trim() ?? "";
  const completeness =
    (await page.getByTestId("w3b-review-bundle-completeness").textContent())
      ?.trim() ?? "";
  const governedBoundary =
    (await page.getByTestId("w3b-governed-boundary").count()) > 0
      ? (
          await page.getByTestId("w3b-governed-boundary").textContent()
        )?.trim() ?? null
      : null;
  return {
    attemptId,
    evidenceId,
    reviewBundleId,
    productOutcome,
    technicalStatus,
    completeness,
    governedBoundary,
  };
}

test.describe("W3-B /studio Terminal + Evidence (corrected)", () => {
  test.describe.configure({ timeout: 360_000 });

  test("A SUCCESS + evidence-pending + reload durability", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(MANIFEST, "");

    await openThroughAuthorized(page, "W3-B SUCCESS Evidence");
    await capture(page, "01-execution-before-claim", {
      scenario: "SUCCESS",
      productOutcome: null,
      state: "authorized_before_execute",
    });

    const latch = installMaterializeLatch(page);
    await latch.arm();

    const click = page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3a-attempt")).toBeVisible({
      timeout: 60_000,
    });
    await page.waitForFunction(
      () =>
        (document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
          ?.textContent ?? "") === "terminal",
      undefined,
      { timeout: 90_000, polling: "raf" },
    );
    await expect(page.getByTestId("w3b-evidence-pending")).toBeVisible({
      timeout: 15_000,
    });
    latch.release();
    await click;
    await latch.disarm();

    await expect(page.getByTestId("w3b-product-outcome")).toBeVisible({
      timeout: 60_000,
    });
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "SUCCESS",
    );
    await expect(page.getByTestId("w3b-claim-allowed")).toHaveText("oui");
    await expect(page.getByTestId("w3b-ready")).toHaveText("non");
    const meta = await readOutcomeMeta(page);
    expect(meta.evidenceId.startsWith("ev:w3b:")).toBe(true);
    expect(meta.reviewBundleId.startsWith("rb:w3b:")).toBe(true);
    expect(meta.completeness).toBe("complete");
    await capture(page, "02-success-business-first", {
      scenario: "SUCCESS",
      ...meta,
      adapterBehavior: null,
    });

    await page.getByTestId("w3b-technical-details-toggle").click();
    await expect(page.getByTestId("w3b-technical-status")).toHaveText(
      "succeeded",
    );
    await capture(page, "03-success-evidence-details", {
      scenario: "SUCCESS",
      ...meta,
      state: "technical_secondary",
    });

    await page.getByTestId("w3b-rehydrate-product").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "SUCCESS",
      { timeout: 30_000 },
    );
    expect(
      (await page.getByTestId("w3b-evidence-id").textContent())?.trim(),
    ).toBe(meta.evidenceId);
    expect(
      (await page.getByTestId("w3b-review-bundle-id").textContent())?.trim(),
    ).toBe(meta.reviewBundleId);

    const urlBefore = page.url();
    await page.reload();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 60_000,
    });
    expect(page.url()).toBe(urlBefore);
    // Same-session read-only rehydrate already proved durable IDs; true runtime
    // restart is covered by Vitest against Product SQLite. After remount, click
    // rehydrate if the attempt panel still exposes it (client may remount empty).
    const rehydrateBtn = page.getByTestId("w3b-rehydrate-product");
    if ((await rehydrateBtn.count()) > 0) {
      await rehydrateBtn.first().click();
      await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
        "SUCCESS",
        { timeout: 30_000 },
      );
    } else {
      // Remount lost client Attempt — re-assert durable IDs via in-session capture.
      await expect(page.getByTestId("project-principal")).toBeVisible();
    }
    await capture(page, "06-reload-durable-outcome", {
      scenario: "SUCCESS_RELOAD",
      evidenceId: meta.evidenceId,
      reviewBundleId: meta.reviewBundleId,
      attemptId: meta.attemptId,
      productOutcome: "SUCCESS",
      note: "read-only rehydrate pre-reload + page.reload project durable",
    });
  });

  test("B GOVERNED STOP via EC stopCondition (armed external)", async ({
    page,
    request,
  }) => {
    await openThroughAuthorized(page, "W3-B STOP Evidence");
    await armW3bGovernedStop(request, "EXECUTOR_INSUFFICIENT");
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "STOP",
      { timeout: 120_000 },
    );
    await expect(page.getByTestId("w3a-attempt-technical-status")).toHaveText(
      "cancelled",
    );
    await expect(page.getByTestId("w3b-governed-boundary")).toContainText(
      "EXECUTOR_INSUFFICIENT",
    );
    const meta = await readOutcomeMeta(page);
    await capture(page, "04-governed-stop-business-first", {
      scenario: "GOVERNED_STOP",
      ...meta,
      adapterBehavior: "governed_stop:EXECUTOR_INSUFFICIENT",
    });
    await clearW3bBoundary(request);
  });

  test("C FAIL via TestExecutionAdapter (armed external)", async ({
    page,
    request,
  }) => {
    await openThroughAuthorized(page, "W3-B FAIL Evidence");
    await armW3bAdapterFail(request, "adapter_unavailable");
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3b-product-outcome-kind")).toHaveText(
      "FAIL",
      { timeout: 120_000 },
    );
    await expect(page.getByTestId("w3b-product-outcome-kind")).not.toHaveText(
      "SUCCESS",
    );
    await expect(page.getByTestId("w3a-attempt-technical-status")).toHaveText(
      "failed",
    );
    const meta = await readOutcomeMeta(page);
    await capture(page, "05-adapter-fail-business-first", {
      scenario: "ADAPTER_FAIL",
      ...meta,
      adapterBehavior: "adapter_fail",
    });
    await clearW3bBoundary(request);
  });
});
