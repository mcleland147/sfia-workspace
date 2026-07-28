/** @vitest-environment node */
/**
 * TEST/DIAGNOSTIC ONLY — T-A7 bounded preparation (E-PER-01 volumes).
 * Aggregated metrics only — no table dumps, no PII, no content copy.
 * Searches known local .sfia-exec locations relative to workspace roots.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/ops1/allowlistEvaluation";

type VolumeHit = {
  relativePath: string;
  sizeBytes: number;
  exists: boolean;
};

function tryStat(root: string, rel: string): VolumeHit {
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) {
    return { relativePath: rel, sizeBytes: 0, exists: false };
  }
  const st = fs.statSync(abs);
  return {
    relativePath: rel,
    sizeBytes: st.isFile() ? st.size : 0,
    exists: true,
  };
}

describe("T-A7 probe — local volume evidence (aggregated)", () => {
  it("collects aggregated sqlite sizes when present, else records unavailable", () => {
    const workspaceRoot = resolveWorkspaceRootFromAppCwd();
    const candidates = [
      "projects/sfia-studio/.sfia-exec/local-i1/state/ops1.sqlite",
      "projects/sfia-studio/.sfia-exec/local-i1/state/d1.sqlite",
    ];

    const hits = candidates.map((rel) => tryStat(workspaceRoot, rel));
    const present = hits.filter((h) => h.exists);

    // Always produce a reproducible aggregate object (no content).
    const aggregate = {
      workspaceRootBasename: path.basename(workspaceRoot),
      candidatesChecked: candidates.length,
      presentCount: present.length,
      totalSizeBytes: present.reduce((acc, h) => acc + h.sizeBytes, 0),
      files: present.map((h) => ({
        name: path.basename(h.relativePath),
        sizeBytes: h.sizeBytes,
      })),
    };

    expect(aggregate.candidatesChecked).toBe(2);
    expect(aggregate.presentCount).toBeGreaterThanOrEqual(0);
    // Environment limitation is allowed — do not invent production volumes.
    if (aggregate.presentCount === 0) {
      expect(aggregate.totalSizeBytes).toBe(0);
    } else {
      expect(aggregate.totalSizeBytes).toBeGreaterThan(0);
      for (const f of aggregate.files) {
        expect(f.name.endsWith(".sqlite")).toBe(true);
        expect(f.sizeBytes).toBeGreaterThan(0);
      }
    }
  });
});
