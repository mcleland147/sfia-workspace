/**
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const MODULE_ROOT = path.join(APP_ROOT, "lib/oa/execution-run");

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

function importsOf(file: string): string[] {
  return fs
    .readFileSync(file, "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("import ") || l.startsWith("export "));
}

describe("D2-D1 execution-run import boundaries", () => {
  it("domain stays pure", () => {
    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
    expect(files.length).toBeGreaterThan(0);
    const hits: string[] = [];
    const forbidden =
      /from\s+["'](?:node:|next|react|ajv|@\/lib\/(?:ops1|d1|platform|vertical-slice|harness)|fs|path|child_process)/;
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
      }
    }
    expect(hits).toEqual([]);
  });

  it("application does not import infrastructure, AJV, Node, Next, or providers", () => {
    const files = listTsFiles(path.join(MODULE_ROOT, "application"));
    const hits: string[] = [];
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (
          /from\s+["'].*\/infrastructure\/|from\s+["']ajv|openai|@octokit|cursor|node:|from\s+["']next|from\s+["']react/.test(
            line,
          )
        ) {
          hits.push(`${file}: ${line}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("module does not import harness, vertical-slice-runtime, execution-attempt, or execution-contract internals", () => {
    const files = listTsFiles(MODULE_ROOT);
    const hits: string[] = [];
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (
          /vertical-slice-runtime|execution-attempt|execution-contract|harness\//.test(
            line,
          )
        ) {
          hits.push(`${path.relative(APP_ROOT, file)}: ${line}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("root barrel does not export concrete composition", () => {
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/composeExecutionRunMemory/);
    expect(barrel).not.toMatch(/MemoryExecutionRunStore/);
    expect(barrel).not.toMatch(/AjvExecutionRunSchemaValidation/);
  });

  it("server composition lives under server/ with server-only guard", () => {
    const serverDir = path.join(MODULE_ROOT, "server");
    expect(fs.existsSync(serverDir)).toBe(true);
    const compose = fs.readFileSync(
      path.join(serverDir, "composeExecutionRunMemory.ts"),
      "utf8",
    );
    expect(compose).toMatch(/assertServerOnly/);
    expect(compose).toMatch(/infrastructure\//);
    const guard = fs.readFileSync(path.join(serverDir, "serverOnly.ts"), "utf8");
    expect(guard).toMatch(/typeof window/);
  });

  it("application folder no longer hosts concrete composition", () => {
    expect(
      fs.existsSync(path.join(MODULE_ROOT, "application/composeExecutionRun.ts")),
    ).toBe(false);
  });

  it("public persistExecutionRun is removed; helper lives under application/internal", () => {
    expect(
      fs.existsSync(path.join(MODULE_ROOT, "application/persistExecutionRun.ts")),
    ).toBe(false);
    expect(
      fs.existsSync(
        path.join(
          MODULE_ROOT,
          "application/internal/persistExecutionRunInternal.ts",
        ),
      ),
    ).toBe(true);
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/persistExecutionRun/);
  });
});
