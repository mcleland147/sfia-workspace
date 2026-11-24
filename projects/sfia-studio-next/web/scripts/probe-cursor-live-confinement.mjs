#!/usr/bin/env node
/**
 * Bounded Cursor LIVE + confinement probe (no D6 dispatch, no mutation).
 * Exit 0 = SDK key resolvable + workspace root confined outside product trees.
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, realpathSync } from "node:fs";
import { isAbsolute, join, normalize, relative, resolve, sep } from "node:path";
function fail(msg) {
  console.error(JSON.stringify({ ok: false, error: msg }));
  process.exit(1);
}

function assertRootSafe(realRoot) {
  const lowered = realRoot.toLowerCase();
  const forbidden = [
    "/sfia-workspace/",
    "/sfia-wt-next-",
    "/sfia-workspace-next-",
    "/projects/sfia-studio-next/",
  ];
  for (const marker of forbidden) {
    if (lowered.includes(marker.toLowerCase())) {
      fail(`ROOT_INSIDE_PRODUCT_TREE:${marker}`);
    }
  }
  const leaf = realRoot.replace(/\/+$/, "").split(sep).pop() ?? "";
  if (
    leaf === "sfia-workspace" ||
    /^sfia-wt-next-/.test(leaf) ||
    /^sfia-workspace-next-/.test(leaf)
  ) {
    fail("ROOT_EQUALS_PRODUCT_CHECKOUT");
  }
}

const mode = (process.env.SFIA_CURSOR_EFFECT_MODE || "").trim().toUpperCase();
const rawRoot = (process.env.SFIA_CURSOR_WORKSPACE_ROOT || "").trim();
if (!rawRoot) fail("SFIA_CURSOR_WORKSPACE_ROOT_MISSING");
if (!isAbsolute(rawRoot)) fail("SFIA_CURSOR_WORKSPACE_ROOT_NOT_ABSOLUTE");
mkdirSync(rawRoot, { recursive: true, mode: 0o700 });
if (!existsSync(rawRoot)) fail("SFIA_CURSOR_WORKSPACE_ROOT_ABSENT");
const root = realpathSync(normalize(rawRoot));
assertRootSafe(root);

const pilotSeg = createHash("sha256").update("probe-pilot", "utf8").digest("hex").slice(0, 16);
const projectSeg = createHash("sha256")
  .update("probe-project", "utf8")
  .digest("hex")
  .slice(0, 16);
const candidate = resolve(join(root, pilotSeg, projectSeg, "default"));
const rel = relative(root, candidate);
if (rel.startsWith("..") || isAbsolute(rel)) fail("WORKSPACE_ESCAPES_ROOT");
mkdirSync(candidate, { recursive: true, mode: 0o700 });
const realWs = realpathSync(candidate);
const relReal = relative(root, realWs);
if (relReal.startsWith("..") || isAbsolute(relReal)) fail("WORKSPACE_REALPATH_ESCAPES");

const productMarkers = [
  "/Users/morris/Projects/sfia-workspace",
  "/Users/morris/Projects/sfia-wt-next-ml5-20261123",
];
for (const p of productMarkers) {
  if (realWs === p || realWs.startsWith(p + sep) || root === p || root.startsWith(p + sep)) {
    fail(`WORKSPACE_OVERLAPS_PRODUCT:${p}`);
  }
}

let keySource = "NONE";
try {
  const fromEnv = (process.env.CURSOR_API_KEY || "").trim();
  if (fromEnv) {
    keySource = "ENV";
  } else {
    const sdk = await import("@cursor/sdk");
    const store = new sdk.FileCredentialStore();
    const creds = await store.load();
    if (typeof creds?.apiKey === "string" && creds.apiKey.trim()) {
      keySource = "FILE_CREDENTIAL_STORE";
    }
  }
} catch (e) {
  fail(`KEY_RESOLVE_ERROR:${String(e).slice(0, 120)}`);
}

if (keySource === "NONE") fail("CURSOR_API_KEY_UNAVAILABLE");

const out = {
  ok: true,
  effectModeConfigured: mode || "UNSET",
  liveNominal: mode === "LIVE",
  keySource,
  workspaceRoot: root,
  probeWorkspace: realWs,
  confinement: "ROOT_HASHED_SEGMENTS_OUTSIDE_PRODUCT_TREES",
  dispatch: "NOT_PERFORMED — requires D6 HumanDecision",
  mutation: "NONE",
};
console.log(JSON.stringify(out, null, 2));
process.exit(mode === "LIVE" ? 0 : 0);
