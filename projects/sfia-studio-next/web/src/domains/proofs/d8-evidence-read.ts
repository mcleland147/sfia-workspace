/**
 * C12 / CA-08 — read-only access to D8 realization pieces for Nora.
 * Owner remains D8; Nora never invents paths or reads outside attempt scope.
 * C13: physical confinement (realpath + lstat + O_NOFOLLOW) — no symlink escape.
 */

import { createHash } from "node:crypto";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, realizationHandoffs } from "@/db/schema";
import type { CursorExecutionPlan } from "@/domains/execution/types";
import type { ToolSourceJournal } from "@/domains/conversation/tool-source-journal";
import { recordToolSource } from "@/domains/conversation/tool-source-journal";
import {
  listEvidenceCapturesForAttempt,
  type EvidenceCaptureMeta,
} from "./evidence-captures";
import {
  D8_MAX_FILE_BYTES,
  readConfinedWorkspaceFile,
  type ConfineDenyReason,
} from "./d8-path-confine";

const MAX_TEXT_CHARS = 24_000;

export type D8ReadCoverage =
  | "FOUND"
  | "OPENED"
  | "CONSULTED"
  | "PARTIAL"
  | "DENIED"
  | "NOT_FOUND"
  | "INTEGRITY_FAIL";

export type D8EvidenceScope = {
  pilotId: string;
  projectId: string;
  attemptId: string;
  budget: { remainingCalls: number; remainingChars: number };
  /** C13 — per-tool provenance journal (not mere toolCallsObserved). */
  sourceJournal?: ToolSourceJournal | null;
};

function journalD8(
  scope: D8EvidenceScope,
  entry: {
    tool: string;
    ref: string;
    coverage: string;
    title?: string;
    versionOrSha?: string | null;
    notes?: string;
  },
): void {
  recordToolSource(scope.sourceJournal, {
    kind: "REPORT",
    ref: `d8:${entry.tool}:${entry.ref}`,
    coverage: entry.coverage,
    title: entry.title ?? entry.tool,
    versionOrSha: entry.versionOrSha,
    notes: entry.notes,
  });
}

function confineReasonToCoverage(reason: ConfineDenyReason): {
  coverage: D8ReadCoverage;
  reason: string;
} {
  switch (reason) {
    case "FILE_ABSENT":
      return { coverage: "NOT_FOUND", reason: "FILE_ABSENT" };
    case "FILE_TOO_LARGE":
      return { coverage: "DENIED", reason: "FILE_TOO_LARGE" };
    case "SYMLINK_ESCAPE":
    case "SYMLINK_COMPONENT":
      return { coverage: "DENIED", reason: "SYMLINK_REFUSED" };
    case "ROOT_UNRESOLVABLE":
      return { coverage: "DENIED", reason: "WORKSPACE_INVALID" };
    case "NOT_REGULAR_FILE":
      return { coverage: "DENIED", reason: "NOT_REGULAR_FILE" };
    case "OPEN_FAILED":
      return { coverage: "INTEGRITY_FAIL", reason: "OPEN_FAILED" };
    default:
      return { coverage: "DENIED", reason };
  }
}

function charge(scope: D8EvidenceScope, payload: unknown): void {
  const n = JSON.stringify(payload).length;
  scope.budget.remainingChars = Math.max(0, scope.budget.remainingChars - n);
}

function trimText(text: string, max = MAX_TEXT_CHARS): { text: string; coverage: D8ReadCoverage } {
  if (text.length <= max) return { text, coverage: "CONSULTED" };
  return { text: text.slice(0, max), coverage: "PARTIAL" };
}

async function loadAttempt(scope: D8EvidenceScope) {
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, scope.attemptId),
          eq(effectAttempts.projectId, scope.projectId),
          eq(effectAttempts.pilotId, scope.pilotId),
          eq(effectAttempts.kind, "CURSOR_EXECUTION"),
        ),
      )
      .limit(1)
  )[0];
  return row ?? null;
}

/** List authorized pieces for an attempt — metadata only (FOUND ≠ CONSULTED). */
export async function listRealizationEvidence(scope: D8EvidenceScope) {
  if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
    journalD8(scope, {
      tool: "list_realization_evidence",
      ref: scope.attemptId,
      coverage: "DENIED",
      notes: "budget exhausted",
    });
    return {
      coverage: "DENIED" as const,
      reason: "D8_TOOL_BUDGET_EXHAUSTED",
      pieces: [] as unknown[],
    };
  }
  scope.budget.remainingCalls -= 1;
  const attempt = await loadAttempt(scope);
  if (!attempt) {
    const out = { coverage: "DENIED" as const, reason: "ATTEMPT_NOT_IN_SCOPE", pieces: [] };
    journalD8(scope, {
      tool: "list_realization_evidence",
      ref: scope.attemptId,
      coverage: "DENIED",
      notes: "out of scope",
    });
    charge(scope, out);
    return out;
  }
  const handoff = (
    await db
      .select()
      .from(realizationHandoffs)
      .where(eq(realizationHandoffs.attemptId, scope.attemptId))
      .limit(1)
  )[0];
  const captures = listEvidenceCapturesForAttempt(scope.attemptId).filter(
    (c) => c.pilotId === scope.pilotId && c.projectId === scope.projectId,
  );
  let plan: CursorExecutionPlan | null = null;
  try {
    plan = JSON.parse(attempt.planJson) as CursorExecutionPlan;
  } catch {
    plan = null;
  }
  const pieces = [
    {
      kind: "HANDOFF_REPORT",
      id: handoff?.id ?? null,
      status: handoff?.status ?? "MISSING",
      integrityHash: handoff?.integrityHash ?? null,
      reportChars: handoff?.reportMarkdown?.length ?? 0,
      coverage: handoff ? ("FOUND" as const) : ("NOT_FOUND" as const),
    },
    ...captures.map((c) => ({
      kind: "EVIDENCE_CAPTURE",
      id: c.id,
      label: c.label,
      mimeType: c.mimeType,
      contentSha256: c.contentSha256,
      byteLength: c.byteLength,
      coverage: "FOUND" as const,
    })),
    {
      kind: "WORKSPACE",
      id: plan?.workspaceKey ?? "default",
      workspaceCwdPresent: Boolean(plan?.workspaceCwd),
      coverage: plan?.workspaceCwd ? ("FOUND" as const) : ("NOT_FOUND" as const),
      note: "Lecture fichier uniquement via read_attempt_workspace_file + chemin relatif",
    },
  ];
  const out = {
    coverage: "OPENED" as const,
    attemptId: scope.attemptId,
    attemptStatus: attempt.status,
    pieces,
  };
  journalD8(scope, {
    tool: "list_realization_evidence",
    ref: scope.attemptId,
    coverage: "DISCOVERED",
    notes: `pieces=${pieces.length} metadata only — content not consulted`,
  });
  charge(scope, out);
  return out;
}

/** Read full handoff report markdown when authorized. */
export async function readRealizationHandoffReport(scope: D8EvidenceScope) {
  if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
    journalD8(scope, {
      tool: "read_realization_handoff_report",
      ref: scope.attemptId,
      coverage: "DENIED",
      notes: "budget exhausted",
    });
    return {
      coverage: "DENIED" as const,
      reason: "D8_TOOL_BUDGET_EXHAUSTED",
      content: null as string | null,
    };
  }
  scope.budget.remainingCalls -= 1;
  const attempt = await loadAttempt(scope);
  if (!attempt) {
    const out = {
      coverage: "DENIED" as const,
      reason: "ATTEMPT_NOT_IN_SCOPE",
      content: null,
    };
    journalD8(scope, {
      tool: "read_realization_handoff_report",
      ref: scope.attemptId,
      coverage: "DENIED",
      notes: "out of scope",
    });
    charge(scope, out);
    return out;
  }
  const handoff = (
    await db
      .select()
      .from(realizationHandoffs)
      .where(eq(realizationHandoffs.attemptId, scope.attemptId))
      .limit(1)
  )[0];
  if (!handoff?.reportMarkdown?.trim()) {
    const out = {
      coverage: "NOT_FOUND" as const,
      reason: "HANDOFF_REPORT_ABSENT",
      handoffId: handoff?.id ?? null,
      content: null,
    };
    journalD8(scope, {
      tool: "read_realization_handoff_report",
      ref: handoff?.id ?? "absent",
      coverage: "NOT_FOUND",
    });
    charge(scope, out);
    return out;
  }
  const trimmed = trimText(handoff.reportMarkdown);
  const sha = createHash("sha256")
    .update(handoff.reportMarkdown, "utf8")
    .digest("hex");
  const out = {
    coverage: trimmed.coverage,
    handoffId: handoff.id,
    status: handoff.status,
    integrityHash: handoff.integrityHash,
    contentSha256: sha,
    content: trimmed.text,
    consulted: true,
    limits: [
      "D8_HANDOFF_READ — contenu original consulté",
      trimmed.coverage === "PARTIAL" ? "REPORT_TRUNCATED_BY_BUDGET" : null,
    ].filter(Boolean),
  };
  journalD8(scope, {
    tool: "read_realization_handoff_report",
    ref: handoff.id,
    coverage: trimmed.coverage,
    versionOrSha: sha,
    notes:
      trimmed.coverage === "PARTIAL"
        ? "content partial (truncated)"
        : "content consulted",
  });
  charge(scope, out);
  return out;
}

/**
 * Read a text file under the attempt's server-resolved workspaceCwd.
 * relativePath only — physical confinement via readConfinedWorkspaceFile (C13).
 */
export async function readAttemptWorkspaceFile(
  scope: D8EvidenceScope,
  relativePath: string,
) {
  if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: relativePath || "(empty)",
      coverage: "DENIED",
      notes: "budget exhausted",
    });
    return {
      coverage: "DENIED" as const,
      reason: "D8_TOOL_BUDGET_EXHAUSTED",
      content: null as string | null,
    };
  }
  scope.budget.remainingCalls -= 1;
  const attempt = await loadAttempt(scope);
  if (!attempt) {
    const out = {
      coverage: "DENIED" as const,
      reason: "ATTEMPT_NOT_IN_SCOPE",
      content: null,
    };
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: relativePath || "(empty)",
      coverage: "DENIED",
      notes: "out of scope",
    });
    charge(scope, out);
    return out;
  }
  let plan: CursorExecutionPlan;
  try {
    plan = JSON.parse(attempt.planJson) as CursorExecutionPlan;
  } catch {
    const out = {
      coverage: "DENIED" as const,
      reason: "PLAN_UNPARSEABLE",
      content: null,
    };
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: relativePath || "(empty)",
      coverage: "DENIED",
      notes: "plan unparseable",
    });
    charge(scope, out);
    return out;
  }
  if (!plan.workspaceCwd?.trim()) {
    const out = {
      coverage: "DENIED" as const,
      reason: "WORKSPACE_ABSENT",
      content: null,
    };
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: relativePath || "(empty)",
      coverage: "DENIED",
      notes: "workspace absent",
    });
    charge(scope, out);
    return out;
  }

  // Absolute client paths refused before confinement (contract: relative only).
  const rawPath = (relativePath || "").trim();
  if (rawPath.startsWith("/") || rawPath.startsWith("~")) {
    const out = {
      coverage: "DENIED" as const,
      reason: "ABSOLUTE_PATH_REFUSED",
      content: null,
    };
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: rawPath.slice(0, 80),
      coverage: "DENIED",
      notes: "absolute path refused",
    });
    charge(scope, out);
    return out;
  }

  const confined = readConfinedWorkspaceFile(plan.workspaceCwd, rawPath, {
    maxBytes: D8_MAX_FILE_BYTES,
  });
  if (!confined.ok) {
    const mapped = confineReasonToCoverage(confined.reason);
    const out = {
      coverage: mapped.coverage,
      reason: mapped.reason,
      path: rawPath,
      content: null as string | null,
      detail: confined.detail,
    };
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: rawPath || "(empty)",
      coverage: mapped.coverage,
      notes: `${mapped.reason}${confined.detail ? `:${confined.detail}` : ""}`,
    });
    charge(scope, out);
    return out;
  }

  const buf = confined.bytes;
  if (buf.includes(0)) {
    const out = {
      coverage: "DENIED" as const,
      reason: "BINARY_FILE_REFUSED",
      path: rawPath,
      content: null as string | null,
      contentSha256: createHash("sha256").update(buf).digest("hex"),
      byteLength: buf.length,
    };
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: rawPath,
      coverage: "DENIED",
      versionOrSha: out.contentSha256,
      notes: "binary refused — content not disclosed",
    });
    charge(scope, out);
    return out;
  }
  const raw = buf.toString("utf8");
  if (/BEGIN (RSA |OPENSSH )?PRIVATE KEY|\bsk-[A-Za-z0-9]{20,}\b/.test(raw)) {
    const out = {
      coverage: "DENIED" as const,
      reason: "SECRET_MATERIAL_REFUSED",
      path: rawPath,
      content: null as string | null,
    };
    journalD8(scope, {
      tool: "read_attempt_workspace_file",
      ref: rawPath,
      coverage: "DENIED",
      notes: "secret material refused — content not disclosed",
    });
    charge(scope, out);
    return out;
  }
  const trimmed = trimText(raw);
  const sha = createHash("sha256").update(buf).digest("hex");
  const out = {
    coverage: trimmed.coverage,
    path: rawPath,
    contentSha256: sha,
    byteLength: buf.length,
    content: trimmed.text,
    consulted: true,
    limits: [
      "D8_WORKSPACE_FILE_READ — contenu original consulté sous cwd tentative",
      "D8_PATH_CONFINED — realpath+lstat+O_NOFOLLOW (C13)",
      trimmed.coverage === "PARTIAL" ? "CONTENT_TRUNCATED_BY_BUDGET" : null,
    ].filter(Boolean),
  };
  journalD8(scope, {
    tool: "read_attempt_workspace_file",
    ref: rawPath,
    coverage: trimmed.coverage,
    versionOrSha: sha,
    notes:
      trimmed.coverage === "PARTIAL"
        ? "content partial (truncated)"
        : "content consulted",
  });
  charge(scope, out);
  return out;
}

/** Capture metadata — image bytes not inlined into Nora text. */
export async function readEvidenceCaptureMeta(
  scope: D8EvidenceScope,
  captureId: string,
): Promise<{
  coverage: D8ReadCoverage;
  reason?: string;
  capture?: EvidenceCaptureMeta;
  note?: string;
}> {
  if (scope.budget.remainingCalls <= 0 || scope.budget.remainingChars <= 0) {
    journalD8(scope, {
      tool: "read_evidence_capture_meta",
      ref: captureId,
      coverage: "DENIED",
      notes: "budget exhausted",
    });
    return { coverage: "DENIED", reason: "D8_TOOL_BUDGET_EXHAUSTED" };
  }
  scope.budget.remainingCalls -= 1;
  const attempt = await loadAttempt(scope);
  if (!attempt) {
    const out = { coverage: "DENIED" as const, reason: "ATTEMPT_NOT_IN_SCOPE" };
    journalD8(scope, {
      tool: "read_evidence_capture_meta",
      ref: captureId,
      coverage: "DENIED",
      notes: "out of scope",
    });
    charge(scope, out);
    return out;
  }
  const cap = listEvidenceCapturesForAttempt(scope.attemptId).find(
    (c) =>
      c.id === captureId &&
      c.pilotId === scope.pilotId &&
      c.projectId === scope.projectId,
  );
  if (!cap) {
    const out = { coverage: "NOT_FOUND" as const, reason: "CAPTURE_NOT_FOUND" };
    journalD8(scope, {
      tool: "read_evidence_capture_meta",
      ref: captureId,
      coverage: "NOT_FOUND",
    });
    charge(scope, out);
    return out;
  }
  const out = {
    coverage: "OPENED" as const,
    capture: cap,
    note: "Capture image — métadonnées + SHA uniquement (pas d'inline binaire dans Nora)",
  };
  journalD8(scope, {
    tool: "read_evidence_capture_meta",
    ref: captureId,
    coverage: "DISCOVERED",
    versionOrSha: cap.contentSha256,
    notes: "metadata opened — binary content not consulted",
  });
  charge(scope, out);
  return out;
}
