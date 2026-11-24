/**
 * C24 P0 — no in-process eval; no default content pass; linked Studio verify only.
 */
import { describe, expect, it } from "vitest";
import { mkdirSync, writeFileSync, mkdtempSync, rmSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { buildVerifiedEvidenceFromWorkspace } from "@/domains/execution/cursor-autonomous-restitution";
import { qualifyCursorRealization } from "@/domains/proofs/cursor-qualify";
import {
  staticEvaluateContentAgainstCriterion,
} from "@/domains/proofs/studio-isolated-verify";

describe("C24 D8 safety + generic qualification", () => {
  it("static content: no default pass without extractable tokens", () => {
    const r = staticEvaluateContentAgainstCriterion(
      "le fichier doit être correct",
      "export function add(a,b){return a+b}",
    );
    expect(r.ok).toBe(false);
    expect(r.note).toMatch(/INSUFFICIENT/);
  });

  it("static content: explicit export token required", () => {
    const ok = staticEvaluateContentAgainstCriterion(
      "src/add.ts export add",
      "export function add(a: number, b: number) { return a + b; }\n",
    );
    expect(ok.ok).toBe(true);
    const bad = staticEvaluateContentAgainstCriterion(
      "src/add.ts export add",
      "export function sub(a,b){return a-b}\n",
    );
    expect(bad.ok).toBe(false);
  });

  it("agent exit=0 alone never CONFORMING; no new Function path", async () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-c24-d8-"));
    mkdirSync(join(root, "src"), { recursive: true });
    mkdirSync(join(root, ".sfia", "test-captures"), { recursive: true });
    writeFileSync(
      join(root, "src/add.ts"),
      "export function add(a: number, b: number) { return a + b; }\n",
    );
    writeFileSync(join(root, ".sfia/test-captures/add.exit"), "0\n");
    const report = [
      "attemptId: efx_c24",
      "contractFingerprint: fp_c24",
      "filesCreated: src/add.ts",
      "testsDeclared: add",
    ].join("\n");
    const ev = await buildVerifiedEvidenceFromWorkspace({
      workspaceCwd: root,
      reportMarkdown: report,
      acceptanceCriteria: ["src/add.ts export add", "test add exit=0"],
      attemptId: "efx_c24",
      contractFingerprint: "fp_c24",
    });
    expect(ev.limits.some((l) => /AGENT_EXIT_CAPTURE_NOT_CERTIFYING/.test(l))).toBe(
      true,
    );
    expect(ev.criterionEvidence["src/add.ts export add"]?.verified).toBe(true);
    expect(ev.criterionEvidence["test add exit=0"]?.verified).toBe(false);
    expect(ev.criterionEvidence["test add exit=0"]?.level).toBe("INSUFFICIENT");
    // Legacy STUDIO_BOUNDED artifact must not certify
    mkdirSync(join(root, ".sfia", "studio-verifications", "efx_c24"), {
      recursive: true,
    });
    writeFileSync(
      join(root, ".sfia/studio-verifications/efx_c24/add.json"),
      JSON.stringify({
        attemptId: "efx_c24",
        contractFingerprint: "fp_c24",
        testId: "add",
        exit: 0,
        ok: true,
        verifiedBy: "STUDIO_BOUNDED",
      }),
    );
    const ev2 = await buildVerifiedEvidenceFromWorkspace({
      workspaceCwd: root,
      reportMarkdown: report,
      acceptanceCriteria: ["test add exit=0"],
      attemptId: "efx_c24",
      contractFingerprint: "fp_c24",
    });
    expect(ev2.criterionEvidence["test add exit=0"]?.verified).toBe(false);
    expect(
      ev2.limits.some((l) =>
        /LEGACY_NOT_CERTIFYING_C24|NOT_CERTIFYING|TEST_CRITERION_INSUFFICIENT|UNTRUSTED|TOOLING_GAP|INSUFFICIENT/.test(
          l,
        ),
      ),
    ).toBe(true);
    const q = qualifyCursorRealization({
      contractFingerprint: "fp_c24",
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

  it("source tree must not contain new Function D8 eval", async () => {
    const { readFileSync } = await import("fs");
    const { resolve } = await import("path");
    const src = readFileSync(
      resolve(
        process.cwd(),
        "src/domains/execution/cursor-autonomous-restitution.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/new Function\s*\(/);
    expect(src).not.toMatch(/studioEvalAddFunction/);
  });
});
