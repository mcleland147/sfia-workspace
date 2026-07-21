/** @vitest-environment node */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { createOpenSession, resetOps1DbForTests } from "@/lib/ops1/repository";
import { openOps1Db } from "@/lib/ops1/db";
import { Ops1Error } from "@/lib/ops1/errors";
import {
  createFixtureActionCandidate,
  getI3Bundle,
  qualifyActionNotRequired,
  recordGateDecision,
  refineActionCandidate,
  refuseExecutionAttempt,
} from "@/lib/ops1/actionGate";
import { OPS1_I3_GO_MICROCOPY } from "@/lib/ops1/types";
import {
  assertActionCandidateId,
  assertGateDecisionKind,
} from "@/lib/ops1/validation";
import { createActionCandidateId, createGateDecisionId } from "@/lib/ops1/ids";

describe("ops1 I3 action gate domain", () => {
  let tmpRoot: string;

  beforeEach(() => {
    resetOps1DbForTests();
    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ops1-i3-"));
    process.env.OPS1_EXEC_ROOT = tmpRoot;
  });

  afterEach(() => {
    resetOps1DbForTests();
    delete process.env.OPS1_EXEC_ROOT;
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  });

  it("creates action and gate ids", () => {
    expect(createActionCandidateId()).toMatch(/^ops1-act-/);
    expect(createGateDecisionId()).toMatch(/^ops1-gate-/);
    expect(assertActionCandidateId(createActionCandidateId())).toMatch(
      /^ops1-act-/,
    );
    expect(assertGateDecisionKind("GO")).toBe("GO");
    expect(() => assertGateDecisionKind("EXECUTE")).toThrow(Ops1Error);
  });

  it("qualifies ACTION_NOT_REQUIRED and keeps session OPEN", () => {
    const { session } = createOpenSession();
    const { qualification } = qualifyActionNotRequired(session.sessionId);
    expect(qualification.qualification).toBe("ACTION_NOT_REQUIRED");
    const bundle = getI3Bundle(session.sessionId);
    expect(bundle.qualification?.qualification).toBe("ACTION_NOT_REQUIRED");
    expect(bundle.candidates).toHaveLength(0);
    const status = openOps1Db()
      .prepare(`SELECT status FROM cycle_sessions WHERE session_id = ?`)
      .get(session.sessionId) as { status: string };
    expect(status.status).toBe("OPEN");
  });

  it("creates ActionCandidate distinct from chat and persists", () => {
    const { session } = createOpenSession();
    const { candidate } = createFixtureActionCandidate(session.sessionId);
    expect(candidate.status).toBe("PROPOSED");
    expect(candidate.version).toBe(1);
    expect(candidate.title).toContain("fixture");
    const reloaded = getI3Bundle(session.sessionId);
    expect(reloaded.candidates).toHaveLength(1);
    expect(reloaded.candidates[0].actionCandidateId).toBe(
      candidate.actionCandidateId,
    );
    expect(reloaded.qualification?.qualification).toBe("ACTION_REQUIRED");
  });

  it("refines candidate and bumps version", () => {
    const { session } = createOpenSession();
    const { candidate } = createFixtureActionCandidate(session.sessionId);
    const refined = refineActionCandidate({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      title: "Titre raffiné",
      objective: "Objectif raffiné",
      scopeSummary: "Scope raffiné",
      riskSummary: "Risque raffiné",
    });
    expect(refined.candidate.version).toBe(2);
    expect(refined.candidate.status).toBe("UNDER_REVIEW");
    expect(refined.candidate.title).toBe("Titre raffiné");
  });

  it("records GO without execution side effects", () => {
    const { session } = createOpenSession();
    const { candidate } = createFixtureActionCandidate(session.sessionId);
    const result = recordGateDecision({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      kind: "GO",
    });
    expect(result.candidate.status).toBe("APPROVED");
    expect(result.decision.kind).toBe("GO");
    expect(result.microcopy).toBe(OPS1_I3_GO_MICROCOPY);
    expect(result.decision.actionVersion).toBe(1);
    const status = openOps1Db()
      .prepare(`SELECT status FROM cycle_sessions WHERE session_id = ?`)
      .get(session.sessionId) as { status: string };
    expect(status.status).toBe("OPEN");
  });

  it("records NO_GO, CORRIGER, ABANDONNER", () => {
    const { session: s1 } = createOpenSession();
    const c1 = createFixtureActionCandidate(s1.sessionId).candidate;
    expect(
      recordGateDecision({
        sessionId: s1.sessionId,
        actionCandidateId: c1.actionCandidateId,
        kind: "NO_GO",
      }).candidate.status,
    ).toBe("REJECTED");

    const { session: s2 } = createOpenSession();
    const c2 = createFixtureActionCandidate(s2.sessionId).candidate;
    expect(
      recordGateDecision({
        sessionId: s2.sessionId,
        actionCandidateId: c2.actionCandidateId,
        kind: "CORRIGER",
        motif: "à corriger",
      }).candidate.status,
    ).toBe("CHANGES_REQUESTED");

    const { session: s3 } = createOpenSession();
    const c3 = createFixtureActionCandidate(s3.sessionId).candidate;
    expect(
      recordGateDecision({
        sessionId: s3.sessionId,
        actionCandidateId: c3.actionCandidateId,
        kind: "ABANDONNER",
      }).candidate.status,
    ).toBe("ABANDONED");
  });

  it("GO then CORRIGER reopens refinement; refine bumps version", () => {
    const { session } = createOpenSession();
    const { candidate } = createFixtureActionCandidate(session.sessionId);
    recordGateDecision({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      kind: "GO",
    });
    recordGateDecision({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      kind: "CORRIGER",
      motif: "reopen",
    });
    const refined = refineActionCandidate({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      title: "v2",
      objective: "obj",
      scopeSummary: "scope",
      riskSummary: "risk",
    });
    expect(refined.candidate.version).toBe(2);
    expect(refined.candidate.status).toBe("UNDER_REVIEW");
  });

  it("isolates candidates between sessions", () => {
    const a = createOpenSession().session;
    const b = createOpenSession().session;
    createFixtureActionCandidate(a.sessionId);
    createFixtureActionCandidate(b.sessionId);
    expect(getI3Bundle(a.sessionId).candidates).toHaveLength(1);
    expect(getI3Bundle(b.sessionId).candidates).toHaveLength(1);
    expect(getI3Bundle(a.sessionId).candidates[0].sessionId).toBe(a.sessionId);
  });

  it("refuses execution and records EXECUTION_REFUSED", () => {
    const { session } = createOpenSession();
    const event = refuseExecutionAttempt(session.sessionId);
    expect(event.type).toBe("EXECUTION_REFUSED");
    const row = openOps1Db()
      .prepare(
        `SELECT type FROM session_events WHERE session_id = ? AND type = ?`,
      )
      .get(session.sessionId, "EXECUTION_REFUSED") as { type: string };
    expect(row.type).toBe("EXECUTION_REFUSED");
  });

  it("blocks refine after GO until CORRIGER", () => {
    const { session } = createOpenSession();
    const { candidate } = createFixtureActionCandidate(session.sessionId);
    recordGateDecision({
      sessionId: session.sessionId,
      actionCandidateId: candidate.actionCandidateId,
      kind: "GO",
    });
    expect(() =>
      refineActionCandidate({
        sessionId: session.sessionId,
        actionCandidateId: candidate.actionCandidateId,
        title: "x",
        objective: "y",
        scopeSummary: "z",
        riskSummary: "r",
      }),
    ).toThrow(Ops1Error);
  });
});
