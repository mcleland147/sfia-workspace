/**
 * C23 historical oracle — superseded by C24 isolated verify (no new Function).
 * Kept as regression: agent exit / legacy STUDIO_BOUNDED must not certify.
 */
import { describe, expect, it } from "vitest";
import { mkdirSync, writeFileSync, mkdtempSync, rmSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { buildVerifiedEvidenceFromWorkspace } from "@/domains/execution/cursor-autonomous-restitution";
import { qualifyCursorRealization } from "@/domains/proofs/cursor-qualify";

describe("C23→C24 D8: agent/legacy must not certify", () => {
  it("broken or correct file + agent exit=0 → test criterion not verified", async () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-c23legacy-"));
    mkdirSync(join(root, "src"), { recursive: true });
    mkdirSync(join(root, ".sfia", "test-captures"), { recursive: true });
    writeFileSync(
      join(root, "src/add.ts"),
      "export function add(a: number, b: number) { return a + b; }\n",
    );
    writeFileSync(join(root, ".sfia/test-captures/add.exit"), "0\n");
    const report = [
      "attemptId: efx_legacy",
      "contractFingerprint: fp_legacy",
      "filesCreated: src/add.ts",
      "testsDeclared: add",
    ].join("\n");
    const ev = await buildVerifiedEvidenceFromWorkspace({
      workspaceCwd: root,
      reportMarkdown: report,
      acceptanceCriteria: ["src/add.ts export add", "test add exit=0"],
      attemptId: "efx_legacy",
      contractFingerprint: "fp_legacy",
    });
    expect(ev.limits.some((l) => /STUDIO_VERIFY_ADD_PASS/.test(l))).toBe(false);
    expect(ev.criterionEvidence["test add exit=0"]?.verified).toBe(false);
    const q = qualifyCursorRealization({
      contractFingerprint: "fp_legacy",
      acceptanceCriteria: ["src/add.ts export add", "test add exit=0"],
      handoffStatus: "RECEIVED",
      reportMarkdown: report,
      manifest: ev.manifest,
      criterionEvidence: ev.criterionEvidence,
      terminalStatus: "finished",
    });
    expect(q.verdict).not.toBe("CONFORMING");
    rmSync(root, { recursive: true, force: true });
  });
});
