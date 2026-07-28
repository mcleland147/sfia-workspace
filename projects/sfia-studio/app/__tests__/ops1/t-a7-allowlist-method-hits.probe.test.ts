/** @vitest-environment node */
/**
 * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation (E-OPS-05).
 * Structural allowlist campaign for method/ paths — read-only evaluation.
 * Does not persist, does not mutate workspace files, does not call network.
 */
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  CAMPUS360_ALLOWLIST_POLICY,
  evaluateAllowlist,
} from "@/lib/ops1/allowlistEvaluation";

const ACTION_ID = "ops1-act-aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";

const METHOD_CANDIDATES = [
  "method/",
  "method/sfia-fast-track/core/sfia-rules-and-guardrails.md",
  "method/sfia-fast-track/core/sfia-cycle-routing-guide.md",
  "method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md",
  "method/secret.md",
] as const;

describe("T-A7 probe — allowlist method/ hits (E-OPS-05)", () => {
  const workspaceRoot = os.tmpdir();

  it("declares no method/ entries in CAMPUS360_ALLOWLIST_POLICY", () => {
    const methodKeys = Object.keys(CAMPUS360_ALLOWLIST_POLICY).filter((k) =>
      k === "method" || k.startsWith("method/"),
    );
    expect(methodKeys).toEqual([]);
  });

  it("denies every sampled method/ path for read/modify/create", () => {
    const report: Array<{
      path: string;
      mode: string;
      status: string;
      reason: string;
    }> = [];

    for (const candidate of METHOD_CANDIDATES) {
      for (const mode of ["read", "modify", "create"] as const) {
        const result = evaluateAllowlist({
          actionCandidateId: ACTION_ID,
          actionVersion: 1,
          workspaceRoot,
          entries: [{ path: candidate, mode }],
        });
        const entry = result.evaluatedEntries[0];
        report.push({
          path: candidate,
          mode,
          status: entry?.evaluationStatus ?? "MISSING",
          reason: entry?.evaluationReason ?? "none",
        });
        expect(entry?.evaluationStatus).toMatch(/DENIED|INVALID/);
        expect(result.allowedReads).not.toContain(
          entry?.normalizedPath ?? candidate,
        );
        expect(result.status).not.toBe("VALID");
      }
    }

    // Aggregated local campaign evidence (no content leakage).
    expect(report.length).toBe(METHOD_CANDIDATES.length * 3);
    expect(report.every((r) => /DENIED|INVALID/.test(r.status))).toBe(true);
  });

  it("records local campaign verdict NO LOCAL HITS on allowlist policy keys", () => {
    const policyHitCount = Object.keys(CAMPUS360_ALLOWLIST_POLICY).filter((k) =>
      k.includes("method"),
    ).length;
    expect(policyHitCount).toBe(0);
  });
});
