/**
 * L2-D2 — Local OA-exclusive D1 freeze (Q8).
 * Fail-closed BEFORE openD1Db resolve/DDL. Disposable paths only.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { actionCreateProject, actionSelectMethodMode } from "@/lib/d1/actions";
import { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
import {
  createProject,
  selectMethodMode,
  resetD1DbForTests,
} from "@/lib/d1/commands";
import { actionExecuteConfirmation } from "@/lib/d1/confirmation/actions";
import { executeConfirmedMutation } from "@/lib/d1/confirmation/executeConfirmation";
import { openD1Db } from "@/lib/d1/db";
import { D1Error } from "@/lib/d1/errors";
import {
  resetLocalOaExclusiveModeForTests,
  setLocalOaExclusiveModeForTests,
} from "@/lib/d1/localOaExclusiveMode.test-only";
import { D1_GOVERNANCE_METHOD_MODE } from "@/lib/d1/types";

const tempDirs: string[] = [];

function tempPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-l2d2-freeze-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

beforeEach(() => {
  resetLocalOaExclusiveModeForTests();
  resetD1DbForTests();
  delete process.env.D1_SQLITE_PATH;
});

afterEach(() => {
  resetLocalOaExclusiveModeForTests();
  resetD1DbForTests();
  delete process.env.D1_SQLITE_PATH;
  for (const dir of tempDirs.splice(0)) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

describe("L2-D2 local OA-exclusive D1 freeze (Q8)", () => {
  it("default inactive — createProject still works on disposable D1", () => {
    const dbPath = tempPath("d1-ok.sqlite");
    process.env.D1_SQLITE_PATH = dbPath;
    const result = createProject({
      name: "Legacy OK",
      objective: "Hors cutover",
      methodMode: D1_GOVERNANCE_METHOD_MODE,
      activate: true,
      idempotencyKey: "idem-ok-1",
    });
    expect(result.project.projectId.startsWith("proj-")).toBe(true);
    expect(fs.existsSync(dbPath)).toBe(true);
  });

  it("exclusive — openD1Db fails before creating the SQLite file", () => {
    setLocalOaExclusiveModeForTests(true);
    const probe = tempPath("must-not-exist.sqlite");
    expect(fs.existsSync(probe)).toBe(false);
    expect(() => openD1Db(probe)).toThrow(D1Error);
    try {
      openD1Db(probe);
    } catch (error) {
      expect(error).toBeInstanceOf(D1Error);
      expect((error as D1Error).code).toBe("FORBIDDEN");
    }
    expect(fs.existsSync(probe)).toBe(false);
  });

  it("exclusive — createProject refused (CR-D2-01 path, not hold-only)", () => {
    setLocalOaExclusiveModeForTests(true);
    const probe = tempPath("create-blocked.sqlite");
    process.env.D1_SQLITE_PATH = probe;
    expect(() =>
      createProject({
        name: "Blocked",
        objective: "Must fail",
        methodMode: D1_GOVERNANCE_METHOD_MODE,
        activate: true,
        idempotencyKey: "idem-blocked-create",
      }),
    ).toThrow(D1Error);
    expect(fs.existsSync(probe)).toBe(false);
  });

  it("exclusive — actionCreateProject returns FORBIDDEN without D1 file", async () => {
    setLocalOaExclusiveModeForTests(true);
    const probe = tempPath("action-create-blocked.sqlite");
    process.env.D1_SQLITE_PATH = probe;
    const result = await actionCreateProject({
      name: "Blocked action",
      objective: "Must fail",
      methodMode: D1_GOVERNANCE_METHOD_MODE,
      activate: true,
      idempotencyKey: "idem-action-create",
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.code).toBe("FORBIDDEN");
    expect(fs.existsSync(probe)).toBe(false);
  });

  it("exclusive — selectMethodMode and actionSelectMethodMode refused", async () => {
    setLocalOaExclusiveModeForTests(true);
    const probe = tempPath("select-blocked.sqlite");
    process.env.D1_SQLITE_PATH = probe;
    expect(() =>
      selectMethodMode({
        projectId: "proj-does-not-matter",
        methodMode: D1_GOVERNANCE_METHOD_MODE,
        expectedVersion: 1,
      }),
    ).toThrow(D1Error);
    const action = await actionSelectMethodMode({
      projectId: "proj-does-not-matter",
      methodMode: D1_GOVERNANCE_METHOD_MODE,
      expectedVersion: 1,
    });
    expect(action.ok).toBe(false);
    if (!action.ok) expect(action.code).toBe("FORBIDDEN");
    expect(fs.existsSync(probe)).toBe(false);
  });

  it("exclusive — confirmation CREATE_PROJECT refused", async () => {
    setLocalOaExclusiveModeForTests(true);
    const probe = tempPath("confirm-blocked.sqlite");
    process.env.D1_SQLITE_PATH = probe;
    const input = {
      actionType: "CREATE_PROJECT" as const,
      sessionLocalId: "sess-1",
      proposalId: "prop-1",
      matchId: null,
      targetProjectId: null,
      confirmationId: "conf-1",
      idempotencyKey: "idem-confirm-create",
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      explicitConfirmation: true,
      projectDraft: {
        name: "Intake create",
        objective: "Must fail under exclusive",
        initialContextSummary: "",
        activate: true,
      },
    };
    // executeConfirmedMutation catches D1Error and returns FAILED (does not rethrow).
    const mutation = executeConfirmedMutation(input);
    expect(mutation.status).toBe("FAILED");
    expect(mutation.errorCode).toBe("FORBIDDEN");
    // CR-D2-02: FORBIDDEN must surface as ok:false (not ok:true + FAILED).
    const action = await actionExecuteConfirmation(input);
    expect(action.ok).toBe(false);
    if (!action.ok) {
      expect(action.code).toBe("FORBIDDEN");
      expect(action.message.length).toBeGreaterThan(0);
    }
    expect(fs.existsSync(probe)).toBe(false);
  });

  it("exclusive — BoundedAtomicAuditStore construction refuses before DDL", () => {
    setLocalOaExclusiveModeForTests(true);
    const probe = tempPath("audit-blocked.sqlite");
    process.env.D1_SQLITE_PATH = probe;
    expect(() => new BoundedAtomicAuditStore()).toThrow(D1Error);
    expect(fs.existsSync(probe)).toBe(false);
  });
});
