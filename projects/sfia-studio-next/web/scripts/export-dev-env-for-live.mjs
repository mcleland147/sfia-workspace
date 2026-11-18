#!/usr/bin/env node
/** Prints `export KEY=...` lines from .env.local excluding fixture/lane overrides. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = path.join(root, ".env.local");
const skip = new Set([
  "STUDIO_FORCE_NORA_FIXTURE",
  "STUDIO_NORA_SIMULATED_PROVIDER",
  "STUDIO_E2E",
  "STUDIO_LANE",
]);
for (const raw of fs.readFileSync(p, "utf8").split("\n")) {
  const line = raw.trim();
  if (!line || line.startsWith("#")) continue;
  const i = line.indexOf("=");
  if (i < 0) continue;
  const k = line.slice(0, i).trim();
  let v = line.slice(i + 1);
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    v = v.slice(1, -1);
  }
  if (skip.has(k)) continue;
  process.stdout.write(`export ${k}=${JSON.stringify(v)}\n`);
}
