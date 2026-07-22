/**
 * Deterministic SFIA Action Compiler.
 * Never widens a proposal to make it valid.
 */
import {
  createActionCandidateId,
  createEventId,
} from "../ids";
import { openOps1Db, nowIsoWithOffset } from "../db";
import { Ops1Error } from "../errors";
import { getActionCandidate } from "../actionGate";
import type { ActionCandidate, SessionEvent, SessionEventType } from "../types";
import { isContextStale } from "./contextResolver";
import type {
  SfiaActionProposal,
  SfiaCanonicalContext,
  SfiaCompilationResult,
} from "./types";

function insertEvent(
  sessionId: string,
  type: SessionEventType,
  detail: Record<string, unknown> | SfiaCompilationResult,
): SessionEvent {
  const db = openOps1Db();
  const eventId = createEventId();
  const createdAt = nowIsoWithOffset();
  const payload = JSON.stringify(detail);
  db.prepare(
    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(eventId, sessionId, type, createdAt, payload);
  return { eventId, sessionId, type, createdAt, detail: payload };
}

function pathAllowed(
  filePath: string,
  context: SfiaCanonicalContext,
): boolean {
  if (context.protectedPaths.some((p) => filePath === p || filePath.startsWith(p))) {
    return false;
  }
  return context.allowedPaths.some(
    (p) => filePath === p || filePath.startsWith(p),
  );
}

function deny(
  status: SfiaCompilationResult["status"],
  base: Pick<
    SfiaCompilationResult,
    "contextId" | "proposalId" | "sessionId"
  >,
  reasons: string[],
  extra?: Partial<SfiaCompilationResult>,
): SfiaCompilationResult {
  return {
    status,
    ...base,
    reasons,
    deniedOperations: extra?.deniedOperations ?? [],
    deniedPaths: extra?.deniedPaths ?? [],
    ...extra,
  };
}

export function compileSfiaActionProposal(input: {
  proposal: SfiaActionProposal;
  context: SfiaCanonicalContext;
  workspaceRoot: string;
  persist?: boolean;
}): SfiaCompilationResult {
  const { proposal, context } = input;
  const base = {
    contextId: context.contextId,
    proposalId: proposal.proposalId,
    sessionId: proposal.sessionId,
  };

  insertEvent(proposal.sessionId, "SFIA_COMPILATION_STARTED", {
    proposalId: proposal.proposalId,
    contextId: context.contextId,
    kind: proposal.kind,
  });

  if (proposal.contextId !== context.contextId) {
    const r = deny("CONTEXT_STALE", base, ["contextId mismatch"]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }
  if (proposal.sessionId !== input.proposal.sessionId) {
    const r = deny("INVALID_PROPOSAL", base, ["sessionId incohérent"]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }
  if (isContextStale({ context, workspaceRoot: input.workspaceRoot })) {
    const r = deny("CONTEXT_STALE", base, [
      "CONTEXT_STALE — REQUALIFICATION REQUIRED (HEAD drift)",
    ]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }

  if (proposal.kind === "clarification_required") {
    const r = deny("CLARIFICATION_REQUIRED", base, [
      "Clarification requise avant ActionCandidate.",
    ]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }
  if (proposal.kind === "no_action") {
    const r = deny("BLOCKED", base, ["no_action — aucune ActionCandidate"]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }
  if (proposal.kind === "blocked" || proposal.kind === "decision_required") {
    const r = deny(
      proposal.kind === "blocked" ? "BLOCKED" : "GATE_REQUIRED",
      base,
      [proposal.userVisibleSummary],
    );
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }

  // action_proposed
  const deniedOps: string[] = [];
  const deniedPaths: string[] = [];

  for (const op of proposal.operations) {
    const lower = op.toLowerCase();
    if (
      context.forbiddenOperations.some((f) =>
        lower.includes(f.toLowerCase()),
      ) ||
      ["commit", "push", "merge", "create_pr", "pr", "shell"].includes(lower)
    ) {
      deniedOps.push(op);
    }
  }
  if (deniedOps.length > 0) {
    const r = deny(
      "POLICY_DENIED",
      base,
      [`Opérations interdites: ${deniedOps.join(", ")}`],
      { deniedOperations: deniedOps },
    );
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }

  for (const f of proposal.files) {
    if (f.operation === "DELETE") {
      deniedPaths.push(f.path);
      const r = deny(
        "POLICY_DENIED",
        base,
        ["DELETE non autorisé dans cet incrément"],
        { deniedPaths },
      );
      insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
      return r;
    }
    if (!pathAllowed(f.path, context)) {
      deniedPaths.push(f.path);
    }
  }
  if (deniedPaths.length > 0) {
    const r = deny(
      "PATH_DENIED",
      base,
      [`Chemins refusés: ${deniedPaths.join(", ")}`],
      { deniedPaths },
    );
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }

  // Require CREATE/MODIFY under campus360 markdown for demo compiler
  const writes = proposal.files.filter(
    (f) => f.operation === "CREATE" || f.operation === "MODIFY",
  );
  if (writes.length === 0) {
    const r = deny("INVALID_PROPOSAL", base, [
      "Aucune opération CREATE/MODIFY",
    ]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }
  if (writes.length > 1) {
    const r = deny("INVALID_PROPOSAL", base, [
      "Une seule écriture fichier autorisée dans ce correctif démonstrateur",
    ]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }
  const target = writes[0]!;
  if (!target.path.endsWith(".md")) {
    const r = deny("PATH_DENIED", base, ["Seul Markdown .md autorisé"]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }

  const exactContent =
    proposal.exactRequestedContent ?? target.exactContent ?? "";
  if (!exactContent.trim()) {
    const r = deny("INVALID_PROPOSAL", base, [
      "Contenu exact requis (exactRequestedContent)",
    ]);
    insertEvent(proposal.sessionId, "SFIA_COMPILATION_DENIED", r);
    return r;
  }

  const title = `SFIA live: ${target.operation} ${target.path}`;
  const objective = proposal.objective;
  const scopeSummary = `${target.operation} ${target.path} ; hors commit/push/PR/merge`;
  const riskSummary = `Profil ${proposal.profile} — Cursor après GO Morris uniquement`;

  let actionCandidateId: string | undefined;
  if (input.persist !== false) {
    const db = openOps1Db();
    const session = db
      .prepare(`SELECT status FROM cycle_sessions WHERE session_id = ?`)
      .get(proposal.sessionId) as { status: string } | undefined;
    if (!session || session.status !== "OPEN") {
      throw new Ops1Error(
        "CONFLICT",
        "Session non OPEN — compilation refusée.",
      );
    }
    const now = nowIsoWithOffset();
    actionCandidateId = createActionCandidateId();
    db.prepare(
      `INSERT INTO session_qualifications (session_id, qualification, updated_at)
       VALUES (?, 'ACTION_REQUIRED', ?)
       ON CONFLICT(session_id) DO UPDATE SET
         qualification = excluded.qualification,
         updated_at = excluded.updated_at`,
    ).run(proposal.sessionId, now);
    db.prepare(
      `INSERT INTO action_candidates (
        action_candidate_id, session_id, status, title, objective,
        scope_summary, risk_summary, version, created_at, updated_at
      ) VALUES (?, ?, 'PROPOSED', ?, ?, ?, ?, 1, ?, ?)`,
    ).run(
      actionCandidateId,
      proposal.sessionId,
      title,
      objective,
      scopeSummary,
      riskSummary,
      now,
      now,
    );
    insertEvent(proposal.sessionId, "ACTION_CANDIDATE_CREATED_FROM_LIVE", {
      actionCandidateId,
      proposalId: proposal.proposalId,
      contextId: context.contextId,
      path: target.path,
      operation: target.operation,
    });
    insertEvent(proposal.sessionId, "ACTION_CANDIDATE_CREATED", {
      actionCandidateId,
      source: "sfia_live_compiler",
    });
  }

  const result: SfiaCompilationResult = {
    status: "COMPILED",
    ...base,
    reasons: ["Proposition compilée — aucune exécution lancée"],
    deniedOperations: [],
    deniedPaths: [],
    actionCandidateId,
    title,
    objective,
    scopeSummary,
    riskSummary,
    files: proposal.files,
    exactContent,
  };
  insertEvent(proposal.sessionId, "SFIA_COMPILATION_SUCCEEDED", {
    proposalId: proposal.proposalId,
    actionCandidateId,
    contextId: context.contextId,
  });
  return result;
}

export function getCompiledActionCandidate(
  actionCandidateId: string,
): ActionCandidate | null {
  return getActionCandidate(actionCandidateId);
}
