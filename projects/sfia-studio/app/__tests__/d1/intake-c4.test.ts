import { describe, expect, it, beforeEach, afterEach } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  buildConfirmationIntent,
  asStrictBoolean,
  draftFingerprint,
} from "@/lib/d1/confirmation/validate";
import { buildConfirmationSummary } from "@/lib/d1/confirmation/summary";
import { executeConfirmedMutation } from "@/lib/d1/confirmation/executeConfirmation";
import { EXISTING_PROJECT_PERSISTENCE_NOTE } from "@/lib/d1/confirmation/types";
import { D1Error } from "@/lib/d1/errors";
import {
  createProject,
  getProject,
  resetD1DbForTests,
  selectMethodMode,
} from "@/lib/d1/commands";

describe("D1-C4 confirmation contracts", () => {
  it("allowlists actionType and requires explicit confirmation", () => {
    expect(() =>
      buildConfirmationIntent({
        sessionLocalId: "s",
        proposalId: "rrp-1",
        matchId: null,
        actionType: "DELETE_EVERYTHING" as never,
        targetProjectId: null,
        projectDraft: null,
        expectedProjectVersion: null,
        expectedUpdatedAt: null,
        idempotencyKey: "k",
        explicitConfirmation: true,
      }),
    ).toThrow(D1Error);

    expect(() =>
      buildConfirmationIntent({
        sessionLocalId: "s",
        proposalId: "rrp-1",
        matchId: null,
        actionType: "CREATE_PROJECT",
        targetProjectId: null,
        projectDraft: {
          name: "A",
          objective: "B",
          initialContextSummary: "",
          activate: true,
        },
        expectedProjectVersion: null,
        expectedUpdatedAt: null,
        idempotencyKey: "k",
        explicitConfirmation: false,
      }),
    ).toThrow(/explicite/i);

    expect(() => asStrictBoolean("true", "x")).toThrow(D1Error);
  });

  it("rejects client Project ID on CREATE_PROJECT", () => {
    expect(() =>
      buildConfirmationIntent({
        sessionLocalId: "s",
        proposalId: "rrp-1",
        matchId: null,
        actionType: "CREATE_PROJECT",
        targetProjectId: "proj-hack",
        projectDraft: {
          name: "A",
          objective: "B",
          initialContextSummary: "",
          activate: true,
        },
        expectedProjectVersion: null,
        expectedUpdatedAt: null,
        idempotencyKey: "k1",
        explicitConfirmation: true,
      }),
    ).toThrow(/interdit targetProjectId/i);
  });
});

describe("D1-C4 bounded mutations", () => {
  let tmpDir: string;

  beforeEach(() => {
    resetD1DbForTests();
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "d1-c4-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
  });

  afterEach(() => {
    resetD1DbForTests();
    delete process.env.D1_SQLITE_PATH;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it("creates project only with explicit confirmation and audits", () => {
    const without = executeConfirmedMutation({
      sessionLocalId: "s1",
      proposalId: "rrp-1",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Contrats C4",
        objective: "Suivi contrats",
        initialContextSummary: "contexte",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-c4-1",
      explicitConfirmation: false,
    });
    expect(without.status).toBe("REJECTED");

    const created = executeConfirmedMutation({
      sessionLocalId: "s1",
      proposalId: "rrp-1",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Contrats C4",
        objective: "Suivi contrats",
        initialContextSummary: "contexte",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-c4-1",
      explicitConfirmation: true,
    });
    expect(created.status).toBe("SUCCEEDED");
    expect(created.projectId).toMatch(/^proj-/);
    expect(created.auditEventId).toBeTruthy();
    const reread = getProject(created.projectId!);
    expect(reread.name).toBe("Contrats C4");
  });

  it("replays same key same payload without duplicate", () => {
    const draft = {
      name: "Idem C4",
      objective: "obj",
      initialContextSummary: "",
      activate: true,
    };
    const a = executeConfirmedMutation({
      sessionLocalId: "s2",
      proposalId: "rrp-2",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: draft,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-same",
      explicitConfirmation: true,
    });
    const b = executeConfirmedMutation({
      sessionLocalId: "s2",
      proposalId: "rrp-2",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: draft,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-same",
      explicitConfirmation: true,
    });
    expect(a.status).toBe("SUCCEEDED");
    expect(b.status).toBe("ALREADY_APPLIED");
    expect(b.idempotentReplay).toBe(true);
    expect(b.projectId).toBe(a.projectId);
  });

  it("conflicts when same key different payload", () => {
    executeConfirmedMutation({
      sessionLocalId: "s3",
      proposalId: "rrp-3",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Alpha",
        objective: "o1",
        initialContextSummary: "",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-conflict",
      explicitConfirmation: true,
    });
    const conflict = executeConfirmedMutation({
      sessionLocalId: "s3",
      proposalId: "rrp-3",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Beta",
        objective: "o2",
        initialContextSummary: "",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-conflict",
      explicitConfirmation: true,
    });
    expect(conflict.status).toBe("CONFLICT");
    expect(conflict.errorCode).toBe("IDEMPOTENCY");
  });

  it("existing project confirm is NO_MUTATION without invented link", () => {
    const { project } = createProject({
      name: "Campus360",
      objective: "Gestion",
      methodMode: "V3_CANDIDATE",
      activate: true,
      idempotencyKey: "seed-campus",
    });
    const result = executeConfirmedMutation({
      sessionLocalId: "s4",
      proposalId: "rrp-4",
      matchId: "match-1",
      actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      targetProjectId: project.projectId,
      projectDraft: null,
      expectedProjectVersion: project.version,
      expectedUpdatedAt: project.updatedAt,
      idempotencyKey: "idem-exist",
      explicitConfirmation: true,
    });
    expect(result.status).toBe("NO_MUTATION");
    expect(result.persistenceNote).toBe(EXISTING_PROJECT_PERSISTENCE_NOTE);
    expect(result.projectId).toBe(project.projectId);
  });

  it("detects stale existing project conflict", () => {
    const { project } = createProject({
      name: "Stale",
      objective: "obj",
      methodMode: "V3_CANDIDATE",
      activate: false,
      idempotencyKey: "seed-stale",
    });
    selectMethodMode({
      projectId: project.projectId,
      methodMode: "V3_CANDIDATE",
      expectedVersion: project.version,
      activate: true,
    });
    const updated = getProject(project.projectId);
    const result = executeConfirmedMutation({
      sessionLocalId: "s5",
      proposalId: "rrp-5",
      matchId: null,
      actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      targetProjectId: project.projectId,
      projectDraft: null,
      expectedProjectVersion: project.version,
      expectedUpdatedAt: project.updatedAt,
      idempotencyKey: "idem-stale",
      explicitConfirmation: true,
    });
    expect(result.status).toBe("CONFLICT");
    expect(updated.version).not.toBe(project.version);
  });

  it("analyze-only and cancel produce no mutation", () => {
    const ao = executeConfirmedMutation({
      sessionLocalId: "s6",
      proposalId: "rrp-6",
      matchId: null,
      actionType: "ANALYZE_ONLY",
      targetProjectId: null,
      projectDraft: null,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-ao",
      explicitConfirmation: true,
    });
    expect(ao.status).toBe("NO_MUTATION");

    const cancel = executeConfirmedMutation({
      sessionLocalId: "s6",
      proposalId: "rrp-6",
      matchId: null,
      actionType: "CANCEL",
      targetProjectId: null,
      projectDraft: null,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-cancel",
      explicitConfirmation: true,
    });
    expect(cancel.status).toBe("CANCELLED");
  });

  it("missing existing project returns CONFLICT", () => {
    const result = executeConfirmedMutation({
      sessionLocalId: "s7",
      proposalId: "rrp-7",
      matchId: null,
      actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      targetProjectId: "proj-missing-does-not-exist",
      projectDraft: null,
      expectedProjectVersion: 1,
      expectedUpdatedAt: "2026-01-01T00:00:00.000Z",
      idempotencyKey: "idem-missing",
      explicitConfirmation: true,
    });
    expect(result.status).toBe("CONFLICT");
    expect(result.errorCode).toBe("NOT_FOUND");
  });

  it("summary builder labels actions clearly", () => {
    const create = buildConfirmationSummary({
      actionType: "CREATE_PROJECT",
      draft: {
        name: "X",
        objective: "Y",
        initialContextSummary: "",
        activate: true,
      },
    });
    expect(create.actionLabel).toBe("Créer ce projet");
    expect(create.confirmationRequired).toBe(true);
    expect(
      draftFingerprint({
        name: "X",
        objective: "Y",
        initialContextSummary: "",
        activate: true,
      }),
    ).toContain("X");
  });
});
