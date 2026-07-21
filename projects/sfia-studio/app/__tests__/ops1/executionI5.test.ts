import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  canonicalize,
  computeContractHash,
} from "@/lib/ops1/executionCanonicalize";
import {
  buildContractPayload,
  createExecutionContract,
  recordExecutionGate,
} from "@/lib/ops1/executionContractService";
import { revalidateBeforeExecution } from "@/lib/ops1/executionRevalidation";
import { runExecutionAttempt } from "@/lib/ops1/executionOrchestrator";
import { createFixtureActionCandidate } from "@/lib/ops1/actionGate";
import { evaluateAndPersistAllowlist } from "@/lib/ops1/allowlistService";
import { createOpenSession } from "@/lib/ops1/repository";
import { openOps1Db, resetOps1DbForTests } from "@/lib/ops1/db";
import { recordGateDecision } from "@/lib/ops1/actionGate";

function initTempGitRepo(): string {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i5-repo-"));
  execFileSync("git", ["init"], { cwd: root });
  execFileSync("git", ["config", "user.email", "ops1@test.local"], { cwd: root });
  execFileSync("git", ["config", "user.name", "OPS1 Test"], { cwd: root });
  const campus = path.join(root, "projects", "campus360");
  fs.mkdirSync(campus, { recursive: true });
  for (const name of [
    "README.md",
    "01-opportunity-and-vision.md",
    "02-sfia-cycle-coverage-hypothesis.md",
    "03-pre-framing-decision-pack.md",
  ]) {
    fs.writeFileSync(path.join(campus, name), `# ${name}\n`, "utf8");
  }
  execFileSync("git", ["add", "."], { cwd: root });
  execFileSync("git", ["commit", "-m", "init campus360"], { cwd: root });
  return root;
}

describe("ops1 I5 execution contract + fixture run", () => {
  let tmpRoot: string;
  let workspaceRoot: string;

  beforeEach(() => {
    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i5-exec-"));
    process.env.OPS1_EXEC_ROOT = tmpRoot;
    resetOps1DbForTests();
    workspaceRoot = initTempGitRepo();
  });

  afterEach(() => {
    resetOps1DbForTests();
    delete process.env.OPS1_EXEC_ROOT;
    fs.rmSync(tmpRoot, { recursive: true, force: true });
    fs.rmSync(workspaceRoot, { recursive: true, force: true });
  });

  it("canonicalizes stably and changes hash on mutation", () => {
    const a = { z: 1, a: ["b", "a"], nested: { y: 2, x: 1 } };
    const b = { nested: { x: 1, y: 2 }, a: ["b", "a"], z: 1 };
    expect(canonicalize(a)).toBe(canonicalize(b));
    const payload = buildContractPayload({
      sessionId: "ops1-sess-00000000-0000-4000-8000-000000000001",
      actionCandidateId: "ops1-act-00000000-0000-4000-8000-000000000001",
      actionVersion: 1,
      actionObjective: "obj",
      actionInstructions: "instr",
      allowedReads: ["projects/campus360/README.md"],
      allowedCreates: [],
      allowedModifies: [],
      workspaceRoot,
      createdAt: "2026-01-01T00:00:00.000+00:00",
      executionBranchName: "ops1/action/test",
    });
    const h1 = computeContractHash(payload);
    const h2 = computeContractHash(payload);
    expect(h1).toBe(h2);
    expect(h1).toMatch(/^[a-f0-9]{64}$/);
    const mutated = { ...payload, actionObjective: "other" };
    expect(computeContractHash(mutated)).not.toBe(h1);
  });

  async function prepareApprovedWithAllowlist() {
    openOps1Db();
    const { session } = createOpenSession("fixture");
    const { candidate } = createFixtureActionCandidate(session.sessionId);
    recordGateDecision({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      kind: "GO",
    });
    // reload candidate version after GO
    const refreshed = openOps1Db()
      .prepare(`SELECT * FROM action_candidates WHERE action_candidate_id = ?`)
      .get(candidate.actionCandidateId) as Record<string, unknown>;
    const { evaluation } = evaluateAndPersistAllowlist({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      workspaceRoot,
      entries: [
        { path: "projects/campus360/README.md", mode: "READ" },
        { path: "projects/campus360/04-ops1-i5-note.md", mode: "CREATE" },
      ],
    });
    expect(evaluation.status).toBe("VALID");
    return {
      session,
      candidate: {
        ...candidate,
        status: "APPROVED" as const,
        version: Number(refreshed.version),
      },
    };
  }

  it("creates contract, records GO linked to hash, runs fixture, blocks double exec", async () => {
    const { session, candidate } = await prepareApprovedWithAllowlist();
    const { contract } = createExecutionContract({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      actionObjective: "Créer note I5",
      actionInstructions: "Écrire un paragraphe de preuve I5.",
      adapterMode: "fixture",
      workspaceRoot,
    });
    expect(contract.status).toBe("READY_FOR_GATE");
    expect(contract.contractHash).toMatch(/^[a-f0-9]{64}$/);

    const refused = revalidateBeforeExecution({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      workspaceRoot,
    });
    expect(refused.ok).toBe(false);
    if (!refused.ok) {
      expect(refused.reason).toMatch(/MORRIS ACTION GATE MISSING/i);
    }

    const { gate, contract: approved } = recordExecutionGate({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      contractHash: contract.contractHash,
      actionCandidateId: candidate.actionCandidateId,
      actionVersion: candidate.version,
      baseHeadSha: contract.baseHeadSha,
    });
    expect(gate.contractHash).toBe(contract.contractHash);
    expect(approved.status).toBe("APPROVED");

    expect(() =>
      recordExecutionGate({
        sessionId: session.sessionId,
        contractId: contract.contractId,
        contractHash: "0".repeat(64),
        actionCandidateId: candidate.actionCandidateId,
        actionVersion: candidate.version,
        baseHeadSha: contract.baseHeadSha,
      }),
    ).toThrow(/contractHash/i);

    const run = await runExecutionAttempt({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      adapterMode: "fixture",
      workspaceRoot,
    });
    expect(run.result.status).toBe("SUCCEEDED");
    expect(run.result.outOfContract).toBe(false);
    expect(run.result.filesCreated).toContain(
      "projects/campus360/04-ops1-i5-note.md",
    );
    expect(run.attempt.executionAttemptId).not.toBe(contract.contractHash);
    expect(run.attempt.worktreePath).toBeTruthy();

    // Principal untouched
    const status = execFileSync("git", ["status", "--porcelain", "-uno"], {
      cwd: workspaceRoot,
      encoding: "utf8",
    }).trim();
    expect(status).toBe("");

    // Anti double-exec after SUCCEEDED
    await expect(
      runExecutionAttempt({
        sessionId: session.sessionId,
        contractId: contract.contractId,
        adapterMode: "fixture",
        workspaceRoot,
      }),
    ).rejects.toThrow(/double|SUCCEEDED|incompatible/i);
  });

  it("refuses HEAD drift and remote flags stay true", async () => {
    const { session, candidate } = await prepareApprovedWithAllowlist();
    const { contract } = createExecutionContract({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      actionObjective: "obj",
      actionInstructions: "instr",
      workspaceRoot,
    });
    recordExecutionGate({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      contractHash: contract.contractHash,
      actionCandidateId: candidate.actionCandidateId,
      actionVersion: candidate.version,
      baseHeadSha: contract.baseHeadSha,
    });
    expect(contract.noRemoteGit).toBe(true);
    expect(contract.noCommit).toBe(true);
    expect(contract.noPush).toBe(true);

    // Drift HEAD by new commit
    fs.writeFileSync(
      path.join(workspaceRoot, "projects/campus360/README.md"),
      "# changed\n",
      "utf8",
    );
    execFileSync("git", ["add", "."], { cwd: workspaceRoot });
    execFileSync("git", ["commit", "-m", "drift"], { cwd: workspaceRoot });

    const drift = revalidateBeforeExecution({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      workspaceRoot,
    });
    expect(drift.ok).toBe(false);
    if (!drift.ok) expect(drift.reason).toMatch(/HEAD dérivé/i);
  });

  it("refuses real adapter without OPS1_CURSOR_REAL and never falls back to fixture", async () => {
    const prev = process.env.OPS1_CURSOR_REAL;
    delete process.env.OPS1_CURSOR_REAL;
    const { session, candidate } = await prepareApprovedWithAllowlist();
    expect(() =>
      createExecutionContract({
        sessionId: session.sessionId,
        actionCandidateId: candidate.actionCandidateId,
        actionObjective: "obj",
        actionInstructions: "instr",
        adapterMode: "real",
        workspaceRoot,
      }),
    ).toThrow(/REAL ADAPTER UNAVAILABLE|OPS1_CURSOR_REAL/i);
    if (prev === undefined) delete process.env.OPS1_CURSOR_REAL;
    else process.env.OPS1_CURSOR_REAL = prev;
  });

  it("rejects run adapterMode mismatch (no silent real→fixture swap)", async () => {
    const { session, candidate } = await prepareApprovedWithAllowlist();
    const { contract } = createExecutionContract({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      actionObjective: "obj",
      actionInstructions: "instr",
      adapterMode: "fixture",
      workspaceRoot,
    });
    recordExecutionGate({
      sessionId: session.sessionId,
      contractId: contract.contractId,
      contractHash: contract.contractHash,
      actionCandidateId: candidate.actionCandidateId,
      actionVersion: candidate.version,
      baseHeadSha: contract.baseHeadSha,
    });
    await expect(
      runExecutionAttempt({
        sessionId: session.sessionId,
        contractId: contract.contractId,
        adapterMode: "real",
        workspaceRoot,
      }),
    ).rejects.toThrow(/≠ contrat|fallback/i);
  });
});
