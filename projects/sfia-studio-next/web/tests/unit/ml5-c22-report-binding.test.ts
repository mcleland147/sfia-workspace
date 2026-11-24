import { describe, expect, it } from "vitest";
import { mkdirSync, writeFileSync, symlinkSync, rmSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { mkdtempSync } from "fs";
import { collectAttemptBoundReport } from "@/domains/execution/cursor-autonomous-restitution";

describe("C22 attempt-bound report collection", () => {
  it("accepts confined attempt-path report with binding", async () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-c22-rpt-"));
    const attemptId = "efx_test_bind_001";
    const fp = "fp_contract_abc";
    const dir = join(root, ".sfia", "attempts", attemptId);
    mkdirSync(dir, { recursive: true });
    writeFileSync(
      join(dir, "realization-report.md"),
      `# Rapport\nattemptId: ${attemptId}\ncontractFingerprint: ${fp}\nfilesCreated: src/a.ts\n`,
    );
    const r = await collectAttemptBoundReport({
      workspaceCwd: root,
      attemptId,
      contractFingerprint: fp,
    });
    expect(r.markdown).toMatch(/efx_test_bind_001/);
    expect(r.source).toMatch(/CONFINED_WORKSPACE/);
    expect(r.sha256).toBeTruthy();
    rmSync(root, { recursive: true, force: true });
  });

  it("refuses generic report without binding (stale other attempt)", async () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-c22-rpt2-"));
    writeFileSync(
      join(root, "realization-report.md"),
      `# Old\nattemptId: efx_OTHER\ncontractFingerprint: fp_OTHER\n`,
    );
    const r = await collectAttemptBoundReport({
      workspaceCwd: root,
      attemptId: "efx_current",
      contractFingerprint: "fp_current",
    });
    expect(r.markdown).toBeNull();
    expect(r.limits.some((l) => /BINDING_MISSING|NOT_FOUND/.test(l))).toBe(true);
    rmSync(root, { recursive: true, force: true });
  });

  it("refuses symlink escape", async () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-c22-rpt3-"));
    const outside = mkdtempSync(join(tmpdir(), "sfia-c22-out-"));
    writeFileSync(join(outside, "secret.md"), "leak");
    try {
      symlinkSync(join(outside, "secret.md"), join(root, "realization-report.md"));
    } catch {
      // platform may block — still exercise API
    }
    const r = await collectAttemptBoundReport({
      workspaceCwd: root,
      attemptId: "efx_x",
      contractFingerprint: "fp_x",
    });
    expect(r.markdown).toBeNull();
    rmSync(root, { recursive: true, force: true });
    rmSync(outside, { recursive: true, force: true });
  });
});
