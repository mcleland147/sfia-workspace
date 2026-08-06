/**
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const MODULE_ROOT = path.join(APP_ROOT, "lib/oa/finops");

const FORBIDDEN_EXACT = new Set([
  "node:fs",
  "node:fs/promises",
  "node:net",
  "node:crypto",
  "pg",
  "sqlite",
  "sqlite3",
  "better-sqlite3",
  "openai",
  "next",
  "react",
]);

const FORBIDDEN_SEGMENTS = [
  "platform",
  "execution-run",
  "infrastructure",
  "persistence",
  "ops1",
] as const;

export type ExtractedSpecifier = {
  readonly specifier: string;
  readonly form:
    | "static-from"
    | "export-from"
    | "side-effect"
    | "dynamic"
    | "require";
};

/** Strip line and block comments so commented imports are not treated as active. */
export function stripComments(source: string): string {
  let out = "";
  let i = 0;
  let inLine = false;
  let inBlock = false;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  while (i < source.length) {
    const ch = source[i];
    const next = source[i + 1];
    if (inLine) {
      if (ch === "\n") {
        inLine = false;
        out += ch;
      }
      i += 1;
      continue;
    }
    if (inBlock) {
      if (ch === "*" && next === "/") {
        inBlock = false;
        i += 2;
        continue;
      }
      i += 1;
      continue;
    }
    if (inSingle) {
      out += ch;
      if (ch === "\\" && next !== undefined) {
        out += next;
        i += 2;
        continue;
      }
      if (ch === "'") inSingle = false;
      i += 1;
      continue;
    }
    if (inDouble) {
      out += ch;
      if (ch === "\\" && next !== undefined) {
        out += next;
        i += 2;
        continue;
      }
      if (ch === '"') inDouble = false;
      i += 1;
      continue;
    }
    if (inTemplate) {
      out += ch;
      if (ch === "\\" && next !== undefined) {
        out += next;
        i += 2;
        continue;
      }
      if (ch === "`") inTemplate = false;
      i += 1;
      continue;
    }
    if (ch === "/" && next === "/") {
      inLine = true;
      i += 2;
      continue;
    }
    if (ch === "/" && next === "*") {
      inBlock = true;
      i += 2;
      continue;
    }
    if (ch === "'") {
      inSingle = true;
      out += ch;
      i += 1;
      continue;
    }
    if (ch === '"') {
      inDouble = true;
      out += ch;
      i += 1;
      continue;
    }
    if (ch === "`") {
      inTemplate = true;
      out += ch;
      i += 1;
      continue;
    }
    out += ch;
    i += 1;
  }
  return out;
}

export function extractModuleSpecifiers(source: string): ExtractedSpecifier[] {
  const code = stripComments(source);
  const found: ExtractedSpecifier[] = [];

  const patterns: Array<{
    form: ExtractedSpecifier["form"];
    re: RegExp;
  }> = [
    {
      form: "static-from",
      re: /\bimport\s+(?:type\s+)?[\s\S]*?\bfrom\s*["']([^"']+)["']/g,
    },
    {
      form: "export-from",
      re: /\bexport\s+(?:type\s+)?[\s\S]*?\bfrom\s*["']([^"']+)["']/g,
    },
    {
      form: "side-effect",
      re: /\bimport\s*["']([^"']+)["']/g,
    },
    {
      form: "dynamic",
      re: /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g,
    },
    {
      form: "require",
      re: /\brequire\s*\(\s*["']([^"']+)["']\s*\)/g,
    },
  ];

  for (const { form, re } of patterns) {
    for (const match of code.matchAll(re)) {
      const specifier = match[1];
      if (specifier !== undefined) {
        found.push({ specifier, form });
      }
    }
  }
  return found;
}

export function findProcessEnv(source: string): boolean {
  return /\bprocess\.env\b/.test(stripComments(source));
}

function violationForSpecifier(
  file: string,
  specifier: string,
): string | null {
  const base = specifier.split("/")[0] ?? specifier;
  if (FORBIDDEN_EXACT.has(specifier) || FORBIDDEN_EXACT.has(base)) {
    return `${file}: forbidden module "${specifier}"`;
  }
  for (const segment of FORBIDDEN_SEGMENTS) {
    if (
      specifier === segment ||
      specifier.includes(`/${segment}/`) ||
      specifier.includes(`/${segment}`) ||
      specifier.startsWith(`${segment}/`) ||
      specifier.includes(`@/lib/${segment}`) ||
      specifier.includes(`lib/${segment}`)
    ) {
      return `${file}: forbidden path segment "${segment}" via "${specifier}"`;
    }
  }
  return null;
}

function listTsFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      out.push(...listTsFiles(full));
    } else if (/\.tsx?$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function productT0Files(): string[] {
  const domain = listTsFiles(path.join(MODULE_ROOT, "domain"));
  const barrel = path.join(MODULE_ROOT, "index.ts");
  return [...domain, barrel];
}

describe("FinOps T0 import specifier extractor", () => {
  it("detects static from, side-effect, export-from, dynamic, and require", () => {
    const fixture = `
      import x from "openai";
      import "node:fs";
      export { y } from "react";
      const p = import("pg");
      const s = require("sqlite3");
    `;
    const specs = extractModuleSpecifiers(fixture).map((s) => s.specifier);
    expect(specs).toEqual(
      expect.arrayContaining([
        "openai",
        "node:fs",
        "react",
        "pg",
        "sqlite3",
      ]),
    );
    expect(extractModuleSpecifiers(fixture).map((s) => s.form)).toEqual(
      expect.arrayContaining([
        "static-from",
        "side-effect",
        "export-from",
        "dynamic",
        "require",
      ]),
    );
  });

  it("detects multiline and mixed quotes without false negatives", () => {
    const fixture = `
      import {
        foo
      } from 'node:fs/promises';
      import type { Bar } from "next";
    `;
    const specs = extractModuleSpecifiers(fixture).map((s) => s.specifier);
    expect(specs).toEqual(
      expect.arrayContaining(["node:fs/promises", "next"]),
    );
  });

  it("ignores commented imports", () => {
    const fixture = `
      // import "node:fs"
      /* import x from "openai" */
      import { ok } from "./types";
    `;
    const specs = extractModuleSpecifiers(fixture).map((s) => s.specifier);
    expect(specs).toEqual(["./types"]);
  });

  it("detects process.env outside comments", () => {
    expect(findProcessEnv('const x = process.env.FOO;')).toBe(true);
    expect(findProcessEnv("// process.env\nconst x = 1;")).toBe(false);
  });

  it("flags adversarial fixtures for forbidden modules and paths", () => {
    const adversarial = [
      'import "node:fs"',
      'import x from "openai"',
      'export { x } from "react"',
      'import("pg")',
      'require("sqlite3")',
      'import { z } from "../../platform/ai"',
      "const v = process.env.X",
    ];
    const hits: string[] = [];
    for (const line of adversarial) {
      if (findProcessEnv(line)) {
        hits.push(`process.env via ${line}`);
      }
      for (const { specifier } of extractModuleSpecifiers(line)) {
        const v = violationForSpecifier("fixture", specifier);
        if (v) hits.push(v);
      }
    }
    expect(hits.length).toBeGreaterThanOrEqual(7);
  });
});

describe("FinOps T0 import boundaries", () => {
  it("product T0 sources stay free of forbidden imports and process.env", () => {
    const files = productT0Files();
    expect(files.length).toBeGreaterThan(0);
    const hits: string[] = [];
    for (const file of files) {
      const rel = path.relative(APP_ROOT, file);
      const src = fs.readFileSync(file, "utf8");
      if (/\bDate\.now\b/.test(stripComments(src))) {
        hits.push(`${rel}: Date.now`);
      }
      if (findProcessEnv(src)) {
        hits.push(`${rel}: process.env`);
      }
      for (const { specifier, form } of extractModuleSpecifiers(src)) {
        const v = violationForSpecifier(rel, specifier);
        if (v) {
          hits.push(`${v} (form=${form})`);
        }
        // Non-relative package imports forbidden in FinOps T0 product tree
        if (!specifier.startsWith(".") && !specifier.startsWith("@/")) {
          // Relative domain-only; absolute package names are forbidden
          if (!specifier.startsWith("./") && !specifier.startsWith("../")) {
            hits.push(
              `${rel}: non-relative module "${specifier}" (form=${form})`,
            );
          }
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("public barrel does not export infrastructure or application surfaces", () => {
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/repository|adapter|ledger|migration|openai|pg/i);
    expect(barrel).not.toMatch(/Money|currency|price/i);
    expect(fs.existsSync(path.join(MODULE_ROOT, "domain/index.ts"))).toBe(
      false,
    );
  });
});
