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
          /from\s+["'].*\/infrastructure\/|from\s+["']ajv|openai|@octokit|@cursor\/|node:|from\s+["']next|from\s+["']react/.test(
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


describe("D2-D2 execution-run provider boundary imports", () => {
  it("domain still has no platform/SDK imports after D2-D2", () => {
    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
    const hits: string[] = [];
    const forbidden =
      /from\s+["'](?:node:|openai|@octokit|@\/lib\/(?:platform|harness)|fs|path|child_process)/;
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
      }
    }
    expect(hits).toEqual([]);
  });

  it("application providerInvocation does not import platform adapters", () => {
    const file = path.join(MODULE_ROOT, "application/providerInvocation.ts");
    const src = fs.readFileSync(file, "utf8");
    expect(src).not.toMatch(/platform\//);
    expect(src).not.toMatch(/openai|@octokit|harness\//);
  });

  it("root barrel does not export concrete provider adapters", () => {
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/FakeAiExecutionAdapter/);
    expect(barrel).not.toMatch(/PlatformAiExecutionAdapter/);
    expect(barrel).not.toMatch(/FakeGitReadAdapter/);
    expect(barrel).not.toMatch(/FixtureCursorExecutionAdapter/);
    expect(barrel).not.toMatch(/composeExecutionRunProvidersFake/);
  });

  it("Git read port type file declares no mutation methods", () => {
    const src = fs.readFileSync(path.join(MODULE_ROOT, "ports/gitReadPort.ts"), "utf8");
    expect(src).not.toMatch(/\bpush\b/);
    expect(src).not.toMatch(/\bcommit\(/);
    expect(src).not.toMatch(/^\s*write\s*\(/m);
    expect(src).toMatch(/read\(request/);
  });

  it("public SecretSourcePort has no materialize surface", () => {
    const src = fs.readFileSync(path.join(MODULE_ROOT, "ports/secretSourcePort.ts"), "utf8");
    expect(src).not.toMatch(/materialize/);
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/serverOnlySecretMaterializer/);
    expect(barrel).not.toMatch(/materializeForServerOnly/);
  });
});

describe("D2-D3 coordination and projection boundaries", () => {
  it("keeps application code free of Node, Next, SDK, process, and infrastructure imports", () => {
    const files = [
      "application/coordinateExecutionRun.ts",
      "application/executionProjection.ts",
      "application/executionReadiness.ts",
      "application/untrustedExecutionData.ts",
    ];
    for (const relative of files) {
      const src = fs.readFileSync(path.join(MODULE_ROOT, relative), "utf8");
      expect(src).not.toMatch(
        /from\s+["'](?:node:|next|openai|@octokit)|\bchild_process\b|\bprocess\.|\binfrastructure\//,
      );
    }
  });

  it("keeps the concrete D2-D3 composition out of the public barrel", () => {
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/composeExecutionRunD2D3/);
    expect(barrel).not.toMatch(/composeExecutionRunProviders/);
    expect(barrel).not.toMatch(/MemoryExecutionRunRepository/);
    // Coordinator function must not be re-exported; timeout bound may import the module path.
    expect(barrel).not.toMatch(
      /export\s*\{[^}]*\bcoordinateExecutionRun\b[^}]*\}\s*from/,
    );
    expect(barrel).not.toMatch(/availableSources/);
  });

  it("reuses the existing single memory authority without a new store or repository", () => {
    const src = fs.readFileSync(
      path.join(MODULE_ROOT, "server/composeExecutionRunD2D3.ts"),
      "utf8",
    );
    expect(src).toMatch(/composeExecutionRunMemory/);
    expect(src).not.toMatch(/new\s+MemoryExecutionRunStore/);
    expect(src).not.toMatch(/new\s+MemoryExecutionRunRepository/);
    expect(src).not.toMatch(/\.save\(/);
    expect(src).not.toMatch(/availableSources/);
  });

  it("gives the coordinator only create and transition state authority", () => {
    const src = fs.readFileSync(
      path.join(MODULE_ROOT, "application/coordinateExecutionRun.ts"),
      "utf8",
    );
    expect(src).toMatch(/createExecutionRun/);
    expect(src).toMatch(/transitionExecutionRun/);
    expect(src).not.toMatch(/\.save\(/);
    expect(src).not.toMatch(/Object\.assign\([^)]*run/);
    expect(src).not.toMatch(/\brun\.state\s*=/);
    expect(src).not.toMatch(/availableSources:/);
  });

  it("keeps projection pure and free of secret materializers and transports", () => {
    const src = fs.readFileSync(
      path.join(MODULE_ROOT, "application/executionProjection.ts"),
      "utf8",
    );
    expect(src).not.toMatch(
      /materialize|NextResponse|fetch\(|from\s+["'](?:node:|next)/i,
    );
  });
});
