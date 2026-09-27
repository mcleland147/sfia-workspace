/**
 * Living Production Runtime Reference — deterministic conformance.
 *
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "../..");
const repoRoot = path.resolve(appRoot, "../../..");
const manifestRel =
  "projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json";
const manifestPath = path.join(repoRoot, manifestRel);

function sha16(abs: string): string {
  return createHash("sha256").update(fs.readFileSync(abs)).digest("hex").slice(0, 16);
}

describe("Living Production Runtime Reference conformance", () => {
  it("manifest exists and is valid JSON schema v1", () => {
    expect(fs.existsSync(manifestPath)).toBe(true);
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    expect(manifest.schemaVersion).toBe(1);
    expect(manifest.kind).toBe(
      "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
    );
    expect(manifest.canonicalReadme).toBeTruthy();
    expect(manifest.lastReviewedCommit).toMatch(/^[0-9a-f]{40}$/);
    expect(manifest.maintenance?.digestMismatchMeans).toBe(
      "REFERENCE REVIEW REQUIRED",
    );
    expect(manifest.maintenance?.refreshDigestDoesNotValidateSemantics).toBe(
      true,
    );
  });

  it("canonical README and all volumes exist", () => {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    expect(
      fs.existsSync(path.join(repoRoot, manifest.canonicalReadme)),
    ).toBe(true);
    for (const v of manifest.volumes) {
      expect(fs.existsSync(path.join(repoRoot, v.path))).toBe(true);
    }
  });

  it("component / flow / invariant / dependency IDs are unique and resolve", () => {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    const componentIds = new Set<string>();
    for (const c of manifest.components) {
      expect(componentIds.has(c.id)).toBe(false);
      componentIds.add(c.id);
    }
    const flowIds = new Set(manifest.flows.map((f: { id: string }) => f.id));
    const invariantIds = new Set(
      manifest.invariants.map((i: { id: string }) => i.id),
    );
    const dependencyIds = new Set(
      manifest.dependencies.map((d: { id: string }) => d.id),
    );
    expect(flowIds.size).toBe(manifest.flows.length);
    expect(invariantIds.size).toBe(manifest.invariants.length);
    expect(dependencyIds.size).toBe(manifest.dependencies.length);

    for (const c of manifest.components) {
      for (const fid of c.flowIds ?? []) expect(flowIds.has(fid)).toBe(true);
      for (const iid of c.invariantIds ?? [])
        expect(invariantIds.has(iid)).toBe(true);
      for (const dep of c.dependsOn ?? [])
        expect(componentIds.has(dep)).toBe(true);
      for (const did of c.dependencyIds ?? [])
        expect(dependencyIds.has(did)).toBe(true);
      for (const p of c.trackedSourcePaths ?? []) {
        expect(fs.existsSync(path.join(repoRoot, p))).toBe(true);
      }
      for (const p of c.testPaths ?? []) {
        expect(fs.existsSync(path.join(repoRoot, p))).toBe(true);
      }
    }
    for (const d of manifest.dependencies) {
      expect(componentIds.has(d.from)).toBe(true);
      expect(componentIds.has(d.to)).toBe(true);
    }
  });

  it("tracked source/test/volume digests match current tree", () => {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    const lists = [
      ...manifest.volumes,
      ...manifest.trackedSources,
      ...manifest.trackedTests,
    ];
    for (const e of lists) {
      const abs = path.join(repoRoot, e.path);
      expect(fs.existsSync(abs)).toBe(true);
      expect(e.sha256_16).toBe(sha16(abs));
    }
  });

  it("intentional digest drift is detectable (temporary mutation)", () => {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    const sample = manifest.trackedSources[0];
    const abs = path.join(repoRoot, sample.path);
    const original = fs.readFileSync(abs);
    const marker = `\n/* PRR-DRIFT-PROBE-${Date.now()} */\n`;
    try {
      fs.appendFileSync(abs, marker);
      expect(sha16(abs)).not.toBe(sample.sha256_16);
    } finally {
      fs.writeFileSync(abs, original);
    }
    // restored
    expect(sha16(abs)).toBe(sample.sha256_16);
  });
});

