import { expect, test } from "@playwright/test";
import { execFileSync } from "node:child_process";
import fs from "fs";
import os from "os";
import path from "path";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-increment-e",
);
const harnessRoot = path.resolve(__dirname, "../../harness");

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

function runAnalyseCli(payload: Record<string, unknown>) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-e2e-inc-e-"));
  const payloadPath = path.join(dir, "payload.json");
  fs.writeFileSync(
    payloadPath,
    JSON.stringify({ ...payload, proofDir: path.join(dir, "proof") }, null, 2),
  );
  const tsx = path.join(harnessRoot, "node_modules/tsx/dist/cli.mjs");
  const cli = path.join(harnessRoot, "src/cli.ts");
  try {
    const stdout = execFileSync(process.execPath, [tsx, cli, "analyse-fixture", payloadPath], {
      cwd: harnessRoot,
      encoding: "utf8",
      env: { ...process.env, SFIA_GPT_REAL_SPIKE: "0", SFIA_CURSOR_REAL_SPIKE: "0" },
      maxBuffer: 8 * 1024 * 1024,
    });
    return JSON.parse(stdout);
  } catch (err) {
    const e = err as { stdout?: string };
    if (e.stdout) return JSON.parse(e.stdout);
    throw err;
  }
}

const completePackBuild = {
  analysisRequestId: "anl-e2e-1",
  report: {
    schemaVersion: "cursor-execution-report-1.0.0",
    executionId: "exec-inc-d-c9f0bec1-5755-40d5-8284-ad6b05597b7c",
    requestId: "req-inc-d-live-1784528437254",
    correlationId: "corr-inc-d-live-1784528437254",
    contractId: "ctr-inc-d-live-001",
    contractHash: "75eeca7668c69c4db9ec1d3afab60563cd1db1ab68b4107f3fd76155ba1c1d78",
    expectedBranch: "delivery/sfia-studio-poc-increment-d",
    actualBranch: "delivery/sfia-studio-poc-increment-d",
    expectedHead: "9926238a0be3c2e7ce745ee95321281ef49f0465",
    actualHead: "9926238a0be3c2e7ce745ee95321281ef49f0465",
    status: "SUCCEEDED",
    filesCreated: ["output.md"],
    filesModified: [],
    filesDeleted: [],
    outOfAllowlistChanges: [],
    remoteGitWrites: 0,
    networkUsed: false,
    stopRequested: false,
    timeout: false,
    reservations: ["Candidate proof only"],
    mode: "live",
    realCursorProcessInvoked: true,
    s1ContractCursorMode: "fixture",
  },
  reviewPackCompleteness: "complete",
  reviewPackHasModifiedContent: true,
  analysisAuthorized: true,
  tests: { harnessPassed: true, appPassed: true, e2ePassed: true, notes: [] },
  securityChecks: { secretsScanPassed: true, notes: [] },
  provenFacts: ["remote=0"],
  sourceReferences: ["cursor-execution-report", "increment-d-sandbox-proof"],
};

test.describe("Increment E — UI", () => {
  test("analyse CTA + decision relaunch mentions new GO + 4 routes", async ({ page }) => {
    await page.goto("/cycle-actif?vs=VS-UX-07");
    await expect(page.getByTestId("vs-inc-e-analyse")).toBeVisible();
    await page.goto("/decision?vs=VS-UX-09");
    await expect(page.getByTestId("vs-final-RELANCER")).toContainText(/nouveau GO/i);
    await expect(page).toHaveURL(/decision/);
    await page.screenshot({
      path: path.join(screenshotDir, "inc-e-decision.png"),
      fullPage: true,
    });
  });

  test("fixture analyse via UI yields candidate awaiting Morris", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/cycle-actif?vs=VS-UX-07");
    await page.getByTestId("vs-inc-e-analyse").click();
    await expect(page.getByTestId("vs-inc-e-awaiting")).toContainText(
      /AWAITING_MORRIS_FINAL_DECISION/i,
      { timeout: 90_000 },
    );
    await expect(page.getByTestId("vs-inc-e-proven")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "inc-e-verdict-candidate.png"),
      fullPage: true,
    });
  });
});

test.describe("Increment E — harness CLI deterministic", () => {
  test("nominal fixture candidate", () => {
    const r = runAnalyseCli({
      requestId: "req-inc-d-live-1784528437254",
      correlationId: "corr-inc-d-live-1784528437254",
      confirmedByUser: true,
      packBuild: completePackBuild,
    });
    expect(r.ok).toBe(true);
    expect(r.candidate.candidateOnly).toBe(true);
    expect(r.candidate.closureAuthorized).toBe(false);
    expect(r.analysisUiState).toBe("AWAITING_MORRIS_FINAL_DECISION");
  });

  test("incomplete pack blocks", () => {
    const r = runAnalyseCli({
      requestId: "req-inc-d-live-1784528437254",
      correlationId: "corr-inc-d-live-1784528437254",
      confirmedByUser: true,
      packBuild: { ...completePackBuild, reviewPackCompleteness: "incomplete" },
    });
    expect(r.ok).toBe(false);
    expect(r.status).toBe("PACK_INCOMPLETE");
  });
});

test.describe("Increment E — CLOSE_SLICE UI", () => {
  test("decision + synthese show CLOSED_WITH_RESERVATIONS without MVP", async ({ page }) => {
    await page.goto("/decision?vs=VS-UX-09&closure=inc-e");
    await expect(page.getByTestId("vs-inc-e-morris-decision")).toBeVisible();
    await expect(page.getByTestId("vs-inc-e-accepted-reservations")).toBeVisible();
    await page.goto("/synthese?vs=VS-UX-10&closure=inc-e");
    await expect(page.getByTestId("vs-inc-e-final-status")).toContainText(
      "CLOSED_WITH_RESERVATIONS",
    );
    await expect(page.getByTestId("vs-no-mvp-claim")).toBeVisible();
    await expect(page.getByTestId("vs-inc-e-trajectory")).toContainText(/Increment A/i);
    await expect(page.getByTestId("vs-inc-e-decision-recorded")).toContainText(/CLOSE_SLICE/);
    await expect(page.getByTestId("vs-inc-e-final-not-proven")).not.toContainText(
      /Increment E completion/i,
    );
    await expect(page.getByTestId("vs-inc-e-final-not-proven")).not.toContainText(
      /Morris final decision/i,
    );
    await expect(page.getByTestId("vs-inc-e-resolved-by-morris")).toBeVisible();
    await expect(page.getByText(/Portefeuille des cycles/i)).toHaveCount(0);
    await page.screenshot({
      path: path.join(screenshotDir, "inc-e-closure-summary.png"),
      fullPage: true,
    });
  });

  test("synthese without closure param stays demo fixture (not auto-closed)", async ({
    page,
  }) => {
    await page.goto("/synthese?vs=VS-UX-10");
    await expect(page.getByTestId("vs-cycle-summary")).toBeVisible();
    await expect(page.getByTestId("vs-inc-e-final-status")).toHaveCount(0);
  });
});
