import { expect, test } from "@playwright/test";
import { execFileSync } from "node:child_process";
import fs from "fs";
import os from "os";
import path from "path";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-increment-d",
);
const harnessRoot = path.resolve(__dirname, "../../harness");
const workspaceRoot = path.resolve(__dirname, "../../../..");

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

function runIncDCli(payload: Record<string, unknown>): {
  ok: boolean;
  status: string;
  report?: { remoteGitWrites?: number; analysisAuthorized?: boolean };
  refusedBeforeSpawn?: boolean;
} {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-e2e-inc-d-"));
  const payloadPath = path.join(dir, "payload.json");
  const proofDir = path.join(dir, "proof");
  fs.writeFileSync(
    payloadPath,
    JSON.stringify({ ...payload, proofDir }, null, 2),
    "utf8",
  );
  const tsx = path.join(harnessRoot, "node_modules/tsx/dist/cli.mjs");
  const cli = path.join(harnessRoot, "src/cli.ts");
  try {
    const stdout = execFileSync(process.execPath, [tsx, cli, "inc-d-run", payloadPath], {
      cwd: harnessRoot,
      encoding: "utf8",
      env: { ...process.env, SFIA_CURSOR_REAL_SPIKE: "0", SFIA_GPT_REAL_SPIKE: "0" },
      maxBuffer: 8 * 1024 * 1024,
    });
    return JSON.parse(stdout);
  } catch (err) {
    const e = err as { stdout?: string };
    if (e.stdout) return JSON.parse(e.stdout);
    throw err;
  }
}

test.describe("Increment D — UI Cycle actif", () => {
  test("STOP keyboard-visible + remote=0 + analyse E disabled + 4 routes", async ({
    page,
  }) => {
    await page.goto("/cycle-actif?vs=VS-UX-05");
    await expect(page.getByTestId("vs-stop-execution")).toBeVisible();
    await expect(page.getByTestId("vs-inc-d-remote-zero")).toContainText("0");
    await page.goto("/cycle-actif?vs=VS-UX-06");
    await expect(page.getByTestId("vs-inc-d-status")).toBeVisible();
    await expect(page.getByTestId("vs-inc-d-process-mode")).toContainText("s1.cursorMode=fixture");
    await expect(page.getByTestId("vs-inc-d-analyze-disabled")).toBeDisabled();
    await expect(page.getByTestId("vs-inc-d-analyze-disabled")).toContainText(
      /Increment E non disponible/i,
    );
    await expect(page).toHaveURL(/cycle-actif/);
    await page.screenshot({
      path: path.join(screenshotDir, "inc-d-cycle-actif-ready.png"),
      fullPage: true,
    });
  });

  test("fixture harness run via UI produces report", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/cycle-actif?vs=VS-UX-05");
    await page.getByTestId("vs-inc-d-run-fixture").click();
    await expect(page.getByTestId("vs-inc-d-status")).toBeVisible({ timeout: 90_000 });
    await expect(page.getByTestId("vs-inc-d-remote")).toContainText("0");
    await expect(page.getByTestId("vs-inc-d-analyze-disabled")).toBeDisabled();
    await page.screenshot({
      path: path.join(screenshotDir, "inc-d-fixture-report.png"),
      fullPage: true,
    });
  });

  test("STOP banner distinct from NO-GO", async ({ page }) => {
    await page.goto("/cycle-actif?vs=VS-UX-05");
    await page.getByTestId("vs-stop-execution").click();
    await expect(page.getByTestId("vs-stop-timeout")).toContainText("STOP");
    await expect(page.getByTestId("vs-inc-d-stop-banner")).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "inc-d-stop.png"),
      fullPage: true,
    });
  });
});

test.describe("Increment D — deterministic harness CLI (E2E gate)", () => {
  test("nominal mintGate fixture → SUCCEEDED + remote=0", () => {
    const r = runIncDCli({
      requestId: "req-e2e-inc-d-ok",
      correlationId: "corr-e2e-inc-d-ok",
      contractId: "ctr-e2e-inc-d-ok",
      expectedBranch: "pending",
      expectedHead: "pending",
      gate: null,
      mintGate: true,
      mode: "fixture",
      fakeBehavior: "success",
    });
    expect(r.ok).toBe(true);
    expect(r.status).toBe("SUCCEEDED");
    expect(r.report?.remoteGitWrites).toBe(0);
    expect(r.report?.analysisAuthorized).toBe(false);
  });

  test("absent GO refuses", () => {
    const branch = execFileSync("git", ["branch", "--show-current"], {
      cwd: workspaceRoot,
      encoding: "utf8",
    }).trim();
    const head = execFileSync("git", ["rev-parse", "HEAD"], {
      cwd: workspaceRoot,
      encoding: "utf8",
    }).trim();
    const r = runIncDCli({
      requestId: "req-e2e-inc-d-nogo",
      correlationId: "corr-e2e-inc-d-nogo",
      contractId: "ctr-e2e-inc-d-nogo",
      expectedBranch: branch,
      expectedHead: head,
      gate: null,
      mintGate: false,
      mode: "fixture",
    });
    expect(r.ok).toBe(false);
    expect(r.status).toBe("REFUSED_NO_GO");
    expect(r.refusedBeforeSpawn).toBe(true);
  });

  test("policy violation outside allowlist", () => {
    const r = runIncDCli({
      requestId: "req-e2e-inc-d-pol",
      correlationId: "corr-e2e-inc-d-pol",
      contractId: "ctr-e2e-inc-d-pol",
      expectedBranch: "pending",
      expectedHead: "pending",
      gate: null,
      mintGate: true,
      mode: "fixture",
      fakeBehavior: "write-outside",
    });
    expect(r.status).toBe("POLICY_VIOLATION");
  });

  test("Cursor unavailable", () => {
    const r = runIncDCli({
      requestId: "req-e2e-inc-d-unavail",
      correlationId: "corr-e2e-inc-d-unavail",
      contractId: "ctr-e2e-inc-d-unavail",
      expectedBranch: "pending",
      expectedHead: "pending",
      gate: null,
      mintGate: true,
      mode: "fixture",
      fakeBehavior: "unavailable",
    });
    expect(r.status).toBe("CURSOR_UNAVAILABLE");
  });

  test("exit nonzero", () => {
    const r = runIncDCli({
      requestId: "req-e2e-inc-d-exit",
      correlationId: "corr-e2e-inc-d-exit",
      contractId: "ctr-e2e-inc-d-exit",
      expectedBranch: "pending",
      expectedHead: "pending",
      gate: null,
      mintGate: true,
      mode: "fixture",
      fakeBehavior: "exit-nonzero",
    });
    expect(r.status).toBe("FAILED_EXIT_CODE");
  });

  test("timeout ≠ GO", () => {
    const r = runIncDCli({
      requestId: "req-e2e-inc-d-to",
      correlationId: "corr-e2e-inc-d-to",
      contractId: "ctr-e2e-inc-d-to",
      expectedBranch: "pending",
      expectedHead: "pending",
      gate: null,
      mintGate: true,
      mode: "fixture",
      fakeBehavior: "timeout",
      fakeDelayMs: 10,
    });
    expect(r.status).toBe("TIMED_OUT");
    expect(r.ok).toBe(false);
  });
});
