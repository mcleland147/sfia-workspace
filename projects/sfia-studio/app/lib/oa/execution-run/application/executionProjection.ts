import type {
  Completeness,
  ExecutionRun,
  ExecutionState,
  UsageSummary,
} from "../domain/types";
import {
  assessExecutionReadiness,
  type ExecutionReadinessAssessment,
} from "./executionReadiness";
import {
  readUntrustedPlainData,
  redactBoundedText,
} from "./untrustedExecutionData";

const MAX_TEXT = 240;

const ALLOWED_STATES = new Set<string>([
  "idle",
  "running",
  "awaiting_human",
  "succeeded",
  "failed",
  "cancelled",
  "timed_out",
  "blocked",
]);

const ALLOWED_SOURCES = new Set(["fixture", "sandbox-real", "real"]);
const ALLOWED_LANES = new Set(["ai", "git", "cursor", "none"]);
const ALLOWED_COMPLETENESS = new Set(["complete", "partial", "empty"]);

export type ExecutionProjection = {
  readonly runId: string;
  readonly correlationId: string;
  readonly state: ExecutionState;
  readonly source: ExecutionRun["disclosure"]["source"];
  readonly providerLane: ExecutionRun["disclosure"]["providerLane"];
  readonly phase: string;
  readonly completeness: Completeness | "unavailable";
  readonly resultSummary: string | null;
  readonly failure: {
    readonly family: string;
    readonly code: string;
    readonly message: string;
    readonly retryable: boolean;
  } | null;
  readonly blockedReason: string | null;
  readonly humanGate: {
    readonly gateId: string;
    readonly question: string;
    readonly required: boolean;
    readonly decision: "approve" | "reject" | "cancel" | null;
  } | null;
  readonly evidenceSummary: readonly {
    readonly evidenceId: string;
    readonly source: ExecutionRun["disclosure"]["source"];
    readonly completeness: Completeness;
    readonly producedAt: string;
    readonly late: boolean;
    readonly official: true;
  }[];
  readonly usage: UsageSummary;
  readonly openReserves: readonly string[];
  readonly readinessAssessment: ExecutionReadinessAssessment;
  readonly limits: readonly string[];
  readonly persistence: {
    readonly kind: "memory_process_local";
    readonly durable: false;
    readonly multiInstance: false;
    readonly restartSafe: false;
  };
  readonly cursorUnverified: true;
  readonly gitWrite: false;
};

export type CreateExecutionProjectionResult =
  | { readonly ok: true; readonly projection: ExecutionProjection }
  | {
      readonly ok: false;
      readonly failure: { readonly code: string; readonly message: string };
    };

function observablePhase(state: ExecutionState): string {
  switch (state) {
    case "idle":
      return "validated";
    case "running":
      return "provider_operation";
    case "awaiting_human":
      return "human_decision";
    default:
      return "terminal";
  }
}

function fail(
  code: string,
  message: string,
): CreateExecutionProjectionResult {
  return { ok: false, failure: { code, message } };
}

function asString(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}

function readPersistence(raw: unknown): CreateExecutionProjectionResult | {
  ok: true;
  persistence: ExecutionProjection["persistence"];
} {
  const copied = readUntrustedPlainData(raw);
  if (!copied.ok || !copied.value || typeof copied.value !== "object") {
    return fail("PERSISTENCE_INVALID", "persistence must be a plain object");
  }
  const p = copied.value as Record<string, unknown>;
  if (p.kind !== "memory_process_local") {
    return fail("PERSISTENCE_KIND", "persistence.kind must be memory_process_local");
  }
  if (p.durable !== false || p.multiInstance !== false || p.restartSafe !== false) {
    return fail(
      "PERSISTENCE_FLAGS",
      "persistence durable/multiInstance/restartSafe must be false",
    );
  }
  return {
    ok: true,
    persistence: {
      kind: "memory_process_local",
      durable: false,
      multiInstance: false,
      restartSafe: false,
    },
  };
}

function readEvidence(
  raw: unknown,
  runId: string,
  correlationId: string,
  source: ExecutionRun["disclosure"]["source"],
): CreateExecutionProjectionResult | {
  ok: true;
  evidence: ExecutionProjection["evidenceSummary"];
} {
  if (raw === undefined) {
    return { ok: true, evidence: [] };
  }
  const copied = readUntrustedPlainData(raw, { redact: true });
  if (!copied.ok || !Array.isArray(copied.value)) {
    return fail("EVIDENCE_INVALID", "evidence must be a plain array");
  }
  const out: ExecutionProjection["evidenceSummary"][number][] = [];
  for (const item of copied.value) {
    if (!item || typeof item !== "object") {
      return fail("EVIDENCE_ENTRY", "evidence entry must be a plain object");
    }
    const e = item as Record<string, unknown>;
    if (e.official !== true) {
      return fail("EVIDENCE_OFFICIAL", "canonical evidence.official must be true");
    }
    if (e.runId !== runId || e.correlationId !== correlationId) {
      return fail("EVIDENCE_IDENTITY", "evidence identity must match the run");
    }
    if (e.source !== source) {
      return fail("EVIDENCE_SOURCE", "evidence source must match run disclosure source");
    }
    const evidenceId = asString(e.evidenceId);
    const producedAt = asString(e.producedAt);
    if (!evidenceId || !producedAt) {
      return fail("EVIDENCE_FIELDS", "evidence fields missing");
    }
    if (
      typeof e.completeness !== "string" ||
      !ALLOWED_COMPLETENESS.has(e.completeness)
    ) {
      return fail("EVIDENCE_COMPLETENESS", "evidence completeness invalid");
    }
    if (typeof e.late !== "boolean") {
      return fail("EVIDENCE_LATE", "evidence.late must be boolean");
    }
    if (
      typeof e.source !== "string" ||
      !ALLOWED_SOURCES.has(e.source)
    ) {
      return fail("EVIDENCE_SOURCE_VALUE", "evidence source invalid");
    }
    out.push({
      evidenceId,
      source: e.source as ExecutionRun["disclosure"]["source"],
      completeness: e.completeness as Completeness,
      producedAt,
      late: e.late,
      official: true,
    });
  }
  return { ok: true, evidence: out };
}

function readUsage(raw: unknown): UsageSummary {
  const copied = readUntrustedPlainData(raw, { redact: true });
  if (!copied.ok || !copied.value || typeof copied.value !== "object") {
    return { status: "unavailable", reason: "usage_unavailable" };
  }
  const usage = copied.value as Record<string, unknown>;
  if (usage.status === "validated") {
    return {
      status: "validated",
      inputTokens:
        typeof usage.inputTokens === "number" ? usage.inputTokens : undefined,
      outputTokens:
        typeof usage.outputTokens === "number" ? usage.outputTokens : undefined,
      unit: typeof usage.unit === "string" ? usage.unit : undefined,
    };
  }
  return {
    status: "unavailable",
    reason:
      typeof usage.reason === "string"
        ? (redactBoundedText(usage.reason, MAX_TEXT) ?? "usage_unavailable")
        : "usage_unavailable",
  };
}

/**
 * Reconstruct a transport-neutral projection from unknown input.
 * TypeScript types are not trusted; values are allowlisted and redacted.
 */
export function createExecutionProjection(
  input: unknown,
): CreateExecutionProjectionResult {
  const envelope = readUntrustedPlainData(input, {
    redact: true,
    maxStringLength: 100_000,
  });
  if (!envelope.ok || !envelope.value || typeof envelope.value !== "object") {
    return fail("INPUT_REJECTED", "projection input rejected");
  }
  const root = envelope.value as Record<string, unknown>;
  const runRaw = root.run ?? root;
  if (!runRaw || typeof runRaw !== "object" || Array.isArray(runRaw)) {
    return fail("RUN_REQUIRED", "run object required");
  }
  const run = runRaw as Record<string, unknown>;

  const runId = asString(run.runId);
  const correlationId = asString(run.correlationId);
  if (!runId || !correlationId) {
    return fail("IDENTITY", "runId and correlationId required");
  }
  if (typeof run.state !== "string" || !ALLOWED_STATES.has(run.state)) {
    return fail("STATE", "run.state invalid");
  }
  const state = run.state as ExecutionState;

  const disclosureRaw = run.disclosure;
  if (!disclosureRaw || typeof disclosureRaw !== "object") {
    return fail("DISCLOSURE", "disclosure required");
  }
  const disclosure = disclosureRaw as Record<string, unknown>;
  if (
    typeof disclosure.source !== "string" ||
    !ALLOWED_SOURCES.has(disclosure.source) ||
    typeof disclosure.providerLane !== "string" ||
    !ALLOWED_LANES.has(disclosure.providerLane)
  ) {
    return fail("DISCLOSURE_FIELDS", "disclosure source/lane invalid");
  }
  const source = disclosure.source as ExecutionRun["disclosure"]["source"];
  const providerLane =
    disclosure.providerLane as ExecutionRun["disclosure"]["providerLane"];

  const limitsRaw = disclosure.limits;
  const limitsCopied = readUntrustedPlainData(limitsRaw);
  if (!limitsCopied.ok || !Array.isArray(limitsCopied.value)) {
    return fail("LIMITS", "disclosure.limits must be a string array");
  }
  const limits: string[] = [];
  for (const item of limitsCopied.value) {
    if (typeof item !== "string") {
      return fail("LIMITS_TYPE", "disclosure.limits entries must be strings");
    }
    limits.push(redactBoundedText(item, MAX_TEXT) ?? "");
  }

  const persistence = readPersistence(run.persistence);
  if (!("persistence" in persistence)) return persistence;

  const evidence = readEvidence(run.evidence, runId, correlationId, source);
  if (!("evidence" in evidence)) return evidence;

  let resultSummary: string | null = null;
  let completeness: Completeness | "unavailable" = "unavailable";
  if (run.externalResult && typeof run.externalResult === "object") {
    const ext = run.externalResult as Record<string, unknown>;
    if (ext.kind === "success") {
      resultSummary = redactBoundedText(ext.redactedSummary, MAX_TEXT);
      if (
        typeof ext.completeness === "string" &&
        ALLOWED_COMPLETENESS.has(ext.completeness)
      ) {
        completeness = ext.completeness as Completeness;
      }
    }
  }
  if (completeness === "unavailable" && evidence.evidence.length > 0) {
    completeness = evidence.evidence[evidence.evidence.length - 1]!.completeness;
  }

  let failure: ExecutionProjection["failure"] = null;
  if (run.failure && typeof run.failure === "object") {
    const f = run.failure as Record<string, unknown>;
    failure = {
      family: asString(f.family) ?? "internal_normalized_failure",
      code: asString(f.code) ?? "INTERNAL_NORMALIZED_FAILURE",
      message:
        redactBoundedText(f.userMessage, MAX_TEXT) ??
        "Failure details unavailable",
      retryable: f.retryable === true,
    };
  }

  let humanGate: ExecutionProjection["humanGate"] = null;
  if (run.gate && typeof run.gate === "object") {
    const g = run.gate as Record<string, unknown>;
    const gateId = asString(g.gateId);
    if (gateId) {
      humanGate = {
        gateId,
        question:
          redactBoundedText(g.question, MAX_TEXT) ?? "Human decision required",
        required: g.required === true,
        decision:
          g.decision === "approve" ||
          g.decision === "reject" ||
          g.decision === "cancel"
            ? g.decision
            : null,
      };
    }
  }

  const usage =
    root.validatedUsage !== undefined
      ? readUsage(root.validatedUsage)
      : readUsage(run.usage);

  const openReservesRaw = root.openReserves;
  let openReserves: readonly string[] | undefined;
  if (openReservesRaw !== undefined) {
    const copied = readUntrustedPlainData(openReservesRaw, { redact: true });
    if (!copied.ok || !Array.isArray(copied.value)) {
      return fail("RESERVES", "openReserves must be a string array");
    }
    openReserves = copied.value.map((item) => {
      if (typeof item !== "string") return "reserve_redacted";
      return redactBoundedText(item, MAX_TEXT) ?? "reserve_redacted";
    });
  }

  const readinessAssessment: ExecutionReadinessAssessment =
    root.readinessAssessment && typeof root.readinessAssessment === "object"
      ? (root.readinessAssessment as ExecutionReadinessAssessment)
      : assessExecutionReadiness({
          run: {
            runId,
            correlationId,
            state,
            disclosure: { source, providerLane, limits },
            evidence: evidence.evidence.map((e) => ({
              ...e,
              runId,
              correlationId,
              official: true as const,
              summary: "projection_internal",
            })),
            persistence: persistence.persistence,
          },
        });

  // Re-assess when caller supplied a readiness object that is not artifact-linked.
  const linkedReadiness = assessExecutionReadiness({
    run: {
      runId,
      correlationId,
      state,
      disclosure: {
        source,
        providerLane,
        limits,
        processLocalMemory: true,
        cursorUnverified: true,
      },
      evidence: evidence.evidence.map((e) => ({
        evidenceId: e.evidenceId,
        runId,
        correlationId,
        source: e.source,
        completeness: e.completeness,
        producedAt: e.producedAt,
        late: e.late,
        official: true as const,
        summary: "projection_internal",
      })),
      persistence: persistence.persistence,
    },
    projection: {
      runId,
      correlationId,
      source,
      state,
    },
  });

  const finalReadiness =
    root.readinessAssessment && typeof root.readinessAssessment === "object"
      ? linkedReadiness
      : readinessAssessment;

  return {
    ok: true,
    projection: {
      runId,
      correlationId,
      state,
      source,
      providerLane,
      phase: observablePhase(state),
      completeness,
      resultSummary,
      failure,
      blockedReason: redactBoundedText(run.blockedReason, MAX_TEXT),
      humanGate,
      evidenceSummary: evidence.evidence,
      usage,
      openReserves: openReserves ?? finalReadiness.openReserves,
      readinessAssessment: finalReadiness,
      limits,
      persistence: persistence.persistence,
      cursorUnverified: true,
      gitWrite: false,
    },
  };
}
