#!/usr/bin/env node
/**
 * Deterministic Living Production Runtime Reference conformance checker.
 *
 * - Validates manifest structure and ID resolution
 * - Verifies tracked source/test/volume paths exist
 * - Detects sha256_16 digest drift vs current tree
 *
 * Digest mismatch ⇒ REFERENCE REVIEW REQUIRED
 * Refreshing digests ≠ semantic validation.
 *
 * Usage:
 *   node scripts/check-production-runtime-reference.mjs
 *   node scripts/check-production-runtime-reference.mjs --write-digests
 *
 * --write-digests only rewrites sha256_16 fields after human review of content.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(appRoot, "../../..");
const manifestRel =
  "projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json";
const manifestPath = path.join(repoRoot, manifestRel);

const writeDigests = process.argv.includes("--write-digests");

function sha16(abs) {
  const buf = fs.readFileSync(abs);
  return crypto.createHash("sha256").update(buf).digest("hex").slice(0, 16);
}

function fail(msg) {
  console.error(`FAIL: ${msg}`);
  process.exitCode = 1;
}

function ok(msg) {
  console.log(`OK: ${msg}`);
}

if (!fs.existsSync(manifestPath)) {
  fail(`manifest missing: ${manifestRel}`);
  process.exit(1);
}

/** @type {any} */
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

if (manifest.schemaVersion !== 1) fail("schemaVersion must be 1");
if (manifest.kind !== "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE") {
  fail("kind mismatch");
}
if (!manifest.canonicalReadme) fail("canonicalReadme missing");
if (!manifest.lastReviewedCommit) fail("lastReviewedCommit missing");

const readmeAbs = path.join(repoRoot, manifest.canonicalReadme);
if (!fs.existsSync(readmeAbs)) fail(`canonical README missing: ${manifest.canonicalReadme}`);
else ok("canonical README exists");

const componentIds = new Set();
const flowIds = new Set((manifest.flows || []).map((f) => f.id));
const invariantIds = new Set((manifest.invariants || []).map((i) => i.id));
const dependencyIds = new Set((manifest.dependencies || []).map((d) => d.id));

for (const c of manifest.components || []) {
  if (!c.id) {
    fail("component without id");
    continue;
  }
  if (componentIds.has(c.id)) fail(`duplicate component id ${c.id}`);
  componentIds.add(c.id);
}
for (const f of manifest.flows || []) {
  if (!f.id) fail("flow without id");
}
if (new Set((manifest.flows || []).map((f) => f.id)).size !== (manifest.flows || []).length) {
  fail("duplicate flow ids");
}
if (new Set((manifest.invariants || []).map((i) => i.id)).size !== (manifest.invariants || []).length) {
  fail("duplicate invariant ids");
}
if (
  new Set((manifest.dependencies || []).map((d) => d.id)).size !==
  (manifest.dependencies || []).length
) {
  fail("duplicate dependency ids");
}

for (const c of manifest.components || []) {
  for (const fid of c.flowIds || []) {
    if (!flowIds.has(fid)) fail(`component ${c.id} references unknown flow ${fid}`);
  }
  for (const iid of c.invariantIds || []) {
    if (!invariantIds.has(iid)) fail(`component ${c.id} references unknown invariant ${iid}`);
  }
  for (const dep of c.dependsOn || []) {
    if (!componentIds.has(dep)) fail(`component ${c.id} dependsOn unknown ${dep}`);
  }
  for (const did of c.dependencyIds || []) {
    if (!dependencyIds.has(did)) fail(`component ${c.id} dependencyIds unknown ${did}`);
  }
  for (const p of c.trackedSourcePaths || []) {
    if (!fs.existsSync(path.join(repoRoot, p))) fail(`missing trackedSourcePath ${p}`);
  }
  for (const p of c.testPaths || []) {
    if (!fs.existsSync(path.join(repoRoot, p))) fail(`missing testPath ${p}`);
  }
}

for (const d of manifest.dependencies || []) {
  if (!componentIds.has(d.from)) fail(`dependency ${d.id} from unknown ${d.from}`);
  if (!componentIds.has(d.to)) fail(`dependency ${d.id} to unknown ${d.to}`);
}

function checkDigestList(label, entries) {
  for (const e of entries || []) {
    const abs = path.join(repoRoot, e.path);
    if (!fs.existsSync(abs)) {
      fail(`${label} path missing: ${e.path}`);
      continue;
    }
    const current = sha16(abs);
    if (writeDigests) {
      e.sha256_16 = current;
    } else if (e.sha256_16 !== current) {
      fail(
        `${label} digest drift for ${e.path}: manifest=${e.sha256_16} current=${current} ⇒ REFERENCE REVIEW REQUIRED`,
      );
    }
  }
}

checkDigestList("volume", manifest.volumes);
checkDigestList("trackedSource", manifest.trackedSources);
checkDigestList("trackedTest", manifest.trackedTests);

if (writeDigests) {
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
  console.log("WROTE digests — semantic review still required before accepting.");
}

if (process.exitCode) {
  console.error("RESULT: REFERENCE REVIEW REQUIRED / CONFORMANCE FAILED");
  process.exit(process.exitCode);
}
console.log("RESULT: PRODUCTION RUNTIME REFERENCE CONFORMANCE OK");
