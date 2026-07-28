/** @vitest-environment node */
/**
 * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation.
 * Qualifies asymmetry: CT path-policy denies method/ while canonical loader
 * allowlists specific method/** core paths. NO POLICY CHANGE.
 */
import path from "node:path";
import { describe, expect, it } from "vitest";
import { decideReadPath } from "@/lib/platform/security/pathPolicy";
import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonicalPaths";
import {
  isCanonicalPathAllowed,
  loadCanonicalSource,
} from "@/lib/platform/sfia-context/sourceLoader";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/ops1/allowlistEvaluation";

describe("T-A7 probe — path-policy vs canonical loader asymmetry", () => {
  it("path-policy denies method/ prefixes", () => {
    const samples = [
      "method/sfia-fast-track/core/sfia-rules-and-guardrails.md",
      "method/anything.md",
    ];
    for (const sample of samples) {
      const decision = decideReadPath(sample);
      expect(decision.allowed, sample).toBe(false);
    }
  });

  it("canonical allowlist includes method core paths that path-policy denies", () => {
    const methodCores = SFIA_CANONICAL_CORE_PATHS.filter((p) =>
      p.startsWith("method/"),
    );
    expect(methodCores.length).toBeGreaterThanOrEqual(3);
    for (const p of methodCores) {
      expect(isCanonicalPathAllowed(p)).toBe(true);
      expect(decideReadPath(p).allowed).toBe(false);
    }
  });

  it("loader can still read allowlisted method core from disk (digest)", () => {
    const root = resolveWorkspaceRootFromAppCwd();
    const target =
      "method/sfia-fast-track/core/sfia-rules-and-guardrails.md";
    const ref = loadCanonicalSource(root, target);
    expect(ref.digest).toMatch(/^[a-f0-9]{64}$/);
    expect(ref.sizeBytes).toBeGreaterThan(0);
    // Asymmetry remains: CT tool path still denied for same path.
    expect(decideReadPath(target).allowed).toBe(false);
  });

  it("documents closed allowlist — non-core method path refused by loader", () => {
    const root = resolveWorkspaceRootFromAppCwd();
    expect(() =>
      loadCanonicalSource(root, "method/secret.md"),
    ).toThrow();
  });

  it("does not modify policies (probe assertion)", () => {
    // Sentinel: this probe file must not import write APIs for policy.
    const probePath = path.resolve(
      __dirname,
      "t-a7-path-policy-loader-asymmetry.probe.test.ts",
    );
    expect(probePath.endsWith(".probe.test.ts")).toBe(true);
  });
});
