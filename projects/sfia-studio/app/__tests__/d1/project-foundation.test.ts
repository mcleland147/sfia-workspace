import { describe, expect, it, beforeEach, afterEach } from "vitest";
import fs from "node:fs";
import os from "node:fs";
import path from "node:path";
import {
  assertMethodMode,
  assertNoForbiddenClaim,
  canActivate,
  validateCreateProjectInput,
} from "@/lib/d1/domain";
import { D1Error } from "@/lib/d1/errors";
import {
  createProject,
  listProjectAudit,
  resetD1DbForTests,
  selectMethodMode,
} from "@/lib/d1/commands";

describe("d1 domain", () => {
  it("accepts authorized method modes", () => {
    expect(assertMethodMode("SFIA_V2_6")).toBe("SFIA_V2_6");
    expect(assertMethodMode("V3_CANDIDATE")).toBe("V3_CANDIDATE");
  });

  it("rejects forbidden claims", () => {
    expect(() => assertNoForbiddenClaim("go V3-ADOPTED now")).toThrow(D1Error);
    expect(() => assertNoForbiddenClaim("V3_IMPLEMENTED")).toThrow(D1Error);
  });

  it("validates create input", () => {
    expect(() =>
      validateCreateProjectInput({
        name: "",
        objective: "x",
        methodMode: "SFIA_V2_6",
        activate: true,
        idempotencyKey: "k",
      }),
    ).toThrow(D1Error);
  });

  it("allows activate only from DRAFT with mode", () => {
    expect(canActivate("DRAFT", "TRANSITION")).toBe(true);
    expect(canActivate("DRAFT", null)).toBe(false);
    expect(canActivate("ACTIVE", "TRANSITION")).toBe(false);
  });
});

describe("d1 repository commands", () => {
  let tmpDir: string;

  beforeEach(() => {
    resetD1DbForTests();
    tmpDir = fs.mkdtempSync(path.join(require("node:os").tmpdir(), "d1-i1-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
  });

  afterEach(() => {
    resetD1DbForTests();
    delete process.env.D1_SQLITE_PATH;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it("creates project with audit and mono-operator assignments", () => {
    const { project, idempotent } = createProject({
      name: "Demo Framing",
      objective: "Cadrer D1-I1",
      methodMode: "V3_CANDIDATE",
      activate: true,
      idempotencyKey: "key-1",
    });
    expect(idempotent).toBe(false);
    expect(project.state).toBe("ACTIVE");
    expect(project.methodMode).toBe("V3_CANDIDATE");
    const audit = listProjectAudit(project.projectId);
    const types = audit.map((e) => e.eventType);
    expect(types).toContain("PROJECT_CREATED");
    expect(types).toContain("PROJECT_MODE_SELECTED");
    expect(types).toContain("PROJECT_ACTIVATED");
  });

  it("is idempotent on duplicate key", () => {
    const a = createProject({
      name: "Idem",
      objective: "same",
      methodMode: "SFIA_V2_6",
      activate: false,
      idempotencyKey: "key-dup",
    });
    const b = createProject({
      name: "Idem changed",
      objective: "different",
      methodMode: "TRANSITION",
      activate: true,
      idempotencyKey: "key-dup",
    });
    expect(b.idempotent).toBe(true);
    expect(b.project.projectId).toBe(a.project.projectId);
    expect(b.project.name).toBe("Idem");
  });

  it("selects method mode with optimistic locking", () => {
    const { project } = createProject({
      name: "Mode",
      objective: "switch",
      methodMode: "SFIA_V2_6",
      activate: false,
      idempotencyKey: "key-mode",
    });
    const updated = selectMethodMode({
      projectId: project.projectId,
      methodMode: "TRANSITION",
      expectedVersion: project.version,
      activate: true,
    });
    expect(updated.methodMode).toBe("TRANSITION");
    expect(updated.state).toBe("ACTIVE");
    expect(updated.version).toBe(project.version + 1);
    expect(() =>
      selectMethodMode({
        projectId: project.projectId,
        methodMode: "V3_CANDIDATE",
        expectedVersion: project.version,
      }),
    ).toThrow(D1Error);
  });
});
