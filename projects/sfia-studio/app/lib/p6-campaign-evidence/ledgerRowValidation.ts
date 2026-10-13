/**
 * Write-boundary validation for P6 Evidence Ledger rows.
 * Every public append path must pass through this gate.
 */

/** Keep aligned with evidenceLedger.P6_CAMPAIGN_ID (no circular import). */
const P6_CAMPAIGN_ID = "P6-GLOBAL-INTEGRATED-PRODUCT-QA-01";

export const MAX_LEDGER_ROW_JSON_BYTES = 64_000;
export const P6_RECEIPT_LEDGER_SCHEMA_VERSION_REQUIRED = 2;

const FORBIDDEN_KEY_FRAGMENTS = [
  "authorization",
  "api_key",
  "apikey",
  "cookie",
  "secret",
  "password",
  "bearer",
  "prompt",
  "messages",
  "documentbody",
  "chain_of_thought",
  "rawprovider",
] as const;

export type LedgerRowValidationResult =
  | { ok: true; kind: string }
  | { ok: false; code: string; message: string };

function assertNoForbiddenContent(
  value: unknown,
  pathPrefix = "",
): string | null {
  if (value == null) return null;
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i += 1) {
      const hit = assertNoForbiddenContent(value[i], `${pathPrefix}[${i}]`);
      if (hit) return hit;
    }
    return null;
  }
  if (typeof value === "object") {
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      const lower = k.toLowerCase().replace(/[^a-z0-9]/g, "");
      for (const frag of FORBIDDEN_KEY_FRAGMENTS) {
        if (lower.includes(frag.replace(/_/g, ""))) {
          return `forbidden_key:${pathPrefix}${k}`;
        }
      }
      const hit = assertNoForbiddenContent(v, `${pathPrefix}${k}.`);
      if (hit) return hit;
    }
    return null;
  }
  if (typeof value === "string") {
    if (/sk-[a-zA-Z0-9]{10,}/.test(value)) return "secret_like_string";
    if (/Bearer\s+[A-Za-z0-9\-._~+/]+=*/i.test(value)) return "bearer_token";
    if (value.length > 8_000) return "string_too_large";
  }
  return null;
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isNullOrNonNegNumber(v: unknown): boolean {
  return (
    v === null ||
    (typeof v === "number" && Number.isFinite(v) && (v as number) >= 0)
  );
}

function isNullOrString(v: unknown): boolean {
  return v === null || typeof v === "string";
}

/** Product AssistantTurnStatus — from features/project-assistant/types.ts */
const PRODUCT_TERMINAL_STATUSES = new Set([
  "ok",
  "cognitive_stop",
  "incomplete",
  "stopped",
  "provider_unavailable",
  "provider_error",
  "project_not_found",
  "validation_error",
  "stale",
  "decision_error",
  "prepare_error",
  "execute_error",
]);

/** ProviderResponseObservation — from cognitiveExecutionReceipt.ts */
const PROVIDER_RESPONSE_OBSERVATIONS = new Set([
  "FAKE_DETERMINISTIC",
  "NOT_OBSERVED",
  "RUNNER_RESPONSE_ID_OBSERVED",
]);

const CAPTURE_STATUSES = new Set(["CAPTURED"]);

const CONSERVATION_PROCESS_LOCAL = new Set([
  "remembered",
  "failed",
  "skipped",
]);

const CONSERVATION_DURABLE_LEDGER = new Set([
  "not_authorized_candidate",
  "disabled",
]);

function oneOf(value: unknown, allowed: Set<string>, label: string): string | null {
  if (typeof value !== "string" || !allowed.has(value)) {
    return `${label} invalid`;
  }
  return null;
}

function validateHistoricalCampaignRow(
  row: Record<string, unknown>,
): LedgerRowValidationResult {
  if (row.campaignId !== P6_CAMPAIGN_ID) {
    return {
      ok: false,
      code: "CAMPAIGN_SCOPE",
      message: "campaignId must be P6-GLOBAL-INTEGRATED-PRODUCT-QA-01",
    };
  }
  if (!isNonEmptyString(row.scenarioId) || !isNonEmptyString(row.runId)) {
    return {
      ok: false,
      code: "CAMPAIGN_ROW_REQUIRED_FIELDS",
      message: "scenarioId and runId required for campaign ledger rows",
    };
  }
  return { ok: true, kind: "p6_campaign_run" };
}

function validateAdaptiveObserve(value: unknown): string | null {
  if (value === null) return null;
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    return "adaptiveObserve must be object or null";
  }
  const o = value as Record<string, unknown>;
  for (const key of [
    "requestedMaxTurns",
    "effectiveMaxTurns",
    "floor",
    "ceiling",
  ] as const) {
    if (typeof o[key] !== "number" || !Number.isFinite(o[key] as number)) {
      return `adaptiveObserve.${key} must be finite number`;
    }
  }
  if (typeof o.explicitOverride !== "boolean") {
    return "adaptiveObserve.explicitOverride must be boolean";
  }
  if (!(o.strategyClass === null || typeof o.strategyClass === "string")) {
    return "adaptiveObserve.strategyClass must be string or null";
  }
  if (!Array.isArray(o.reasonCodes)) {
    return "adaptiveObserve.reasonCodes must be array";
  }
  if (!o.reasonCodes.every((c) => typeof c === "string")) {
    return "adaptiveObserve.reasonCodes must be string[]";
  }
  return null;
}

function validateContinuationObserve(value: unknown): string | null {
  if (value === null) return null;
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    return "continuationObserve must be object or null";
  }
  const o = value as Record<string, unknown>;
  if (typeof o.continued !== "boolean") return "continuationObserve.continued";
  for (const key of [
    "segmentsExecuted",
    "missionMaxTurns",
    "segmentMaxTurns",
    "allottedTurns",
  ] as const) {
    if (typeof o[key] !== "number" || !Number.isFinite(o[key] as number)) {
      return `continuationObserve.${key} must be finite number`;
    }
  }
  if (typeof o.stopReason !== "string") {
    return "continuationObserve.stopReason must be string";
  }
  if (!Array.isArray(o.reasonCodes)) {
    return "continuationObserve.reasonCodes must be array";
  }
  return null;
}

function validateProductConservation(value: unknown): string | null {
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    return "productConservation must be object";
  }
  const o = value as Record<string, unknown>;
  if (typeof o.ok !== "boolean") return "productConservation.ok";
  if (oneOf(o.processLocal, CONSERVATION_PROCESS_LOCAL, "productConservation.processLocal")) {
    return "productConservation.processLocal invalid";
  }
  if (
    oneOf(o.durableLedger, CONSERVATION_DURABLE_LEDGER, "productConservation.durableLedger")
  ) {
    return "productConservation.durableLedger invalid";
  }
  if (!(o.failureCode === null || typeof o.failureCode === "string")) {
    return "productConservation.failureCode";
  }
  return null;
}

function validateNonNegCountFields(adaptive: unknown, continuation: unknown): string | null {
  if (adaptive != null && typeof adaptive === "object" && !Array.isArray(adaptive)) {
    const o = adaptive as Record<string, unknown>;
    for (const key of [
      "requestedMaxTurns",
      "effectiveMaxTurns",
      "floor",
      "ceiling",
    ] as const) {
      const n = o[key];
      if (typeof n !== "number" || !Number.isFinite(n) || n < 0) {
        return `adaptiveObserve.${key} must be non-negative finite number`;
      }
    }
  }
  if (
    continuation != null &&
    typeof continuation === "object" &&
    !Array.isArray(continuation)
  ) {
    const o = continuation as Record<string, unknown>;
    for (const key of [
      "segmentsExecuted",
      "missionMaxTurns",
      "segmentMaxTurns",
      "allottedTurns",
    ] as const) {
      const n = o[key];
      if (typeof n !== "number" || !Number.isFinite(n) || n < 0) {
        return `continuationObserve.${key} must be non-negative finite number`;
      }
    }
  }
  return null;
}

/**
 * Cognitive receipt rows — schema v2 complete projection required for new writes
 * and for read-integrity of rows that declare ledgerSchemaVersion=2.
 * Presence alone is insufficient: identities and enums must hold valid values.
 */
export function validateCognitiveReceiptRow(
  row: Record<string, unknown>,
): LedgerRowValidationResult {
  const required = [
    "campaignId",
    "runId",
    "scenarioId",
    "logicalTurnId",
    "projectId",
    "providerResponseObservation",
    "productRealProofStatus",
    "realBoundaryClaim",
    "captureStatus",
    "ledgerSchemaVersion",
    "runtimeIdentity",
    "providerIdentity",
    "presentation",
    "providerConfigured",
    "providerResponseId",
    "proofClassification",
    "selectedModelId",
    "observedModel",
    "selectedReasoningEffort",
    "usage",
    "adaptiveObserve",
    "continuationObserve",
    "toolCalls",
    "limitReached",
    "productTerminalStatus",
    "productConservation",
    "productCapturedAt",
  ] as const;
  for (const key of required) {
    if (!(key in row)) {
      return {
        ok: false,
        code: "RECEIPT_SCHEMA",
        message: `missing field ${key}`,
      };
    }
  }

  // Identities — non-null, non-empty strings (null is NOT acceptable).
  for (const key of [
    "runId",
    "scenarioId",
    "logicalTurnId",
    "projectId",
  ] as const) {
    if (!isNonEmptyString(row[key])) {
      return {
        ok: false,
        code: "RECEIPT_IDENTITY",
        message: `${key} must be a non-empty string`,
      };
    }
  }

  if (row.campaignId !== P6_CAMPAIGN_ID) {
    return {
      ok: false,
      code: "CAMPAIGN_SCOPE",
      message: "campaignId must be P6-GLOBAL-INTEGRATED-PRODUCT-QA-01",
    };
  }
  if (row.ledgerSchemaVersion !== P6_RECEIPT_LEDGER_SCHEMA_VERSION_REQUIRED) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA_VERSION",
      message: `ledgerSchemaVersion must be ${P6_RECEIPT_LEDGER_SCHEMA_VERSION_REQUIRED} for new writes`,
    };
  }
  if (row.productRealProofStatus !== "NOT_PROVEN") {
    return {
      ok: false,
      code: "REAL_CLAIM_FORBIDDEN",
      message: "productRealProofStatus must be NOT_PROVEN",
    };
  }
  if (row.realBoundaryClaim !== "NOT_CLAIMED") {
    return {
      ok: false,
      code: "REAL_CLAIM_FORBIDDEN",
      message: "realBoundaryClaim must be NOT_CLAIMED",
    };
  }
  if (row.proofClassification !== "DETERMINISTIC") {
    return {
      ok: false,
      code: "PROOF_CLASSIFICATION",
      message: "proofClassification must be DETERMINISTIC at DET seam",
    };
  }
  if (row.runId === row.logicalTurnId) {
    return {
      ok: false,
      code: "RUNID_EQUALS_LOGICAL_TURN",
      message: "runId must differ from logicalTurnId",
    };
  }
  if (row.runtimeIdentity !== "agents") {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "runtimeIdentity must be agents",
    };
  }
  if (
    row.providerIdentity !== "fake" &&
    row.providerIdentity !== "openai" &&
    row.providerIdentity !== "unknown"
  ) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "providerIdentity invalid",
    };
  }
  if (
    row.presentation !== "test_provider" &&
    row.presentation !== "openai_live"
  ) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "presentation invalid",
    };
  }
  if (typeof row.providerConfigured !== "boolean") {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "providerConfigured must be boolean",
    };
  }

  const obsErr = oneOf(
    row.providerResponseObservation,
    PROVIDER_RESPONSE_OBSERVATIONS,
    "providerResponseObservation",
  );
  if (obsErr) {
    return { ok: false, code: "RECEIPT_STATUS", message: obsErr };
  }
  const termErr = oneOf(
    row.productTerminalStatus,
    PRODUCT_TERMINAL_STATUSES,
    "productTerminalStatus",
  );
  if (termErr) {
    return { ok: false, code: "RECEIPT_STATUS", message: termErr };
  }
  const capErr = oneOf(row.captureStatus, CAPTURE_STATUSES, "captureStatus");
  if (capErr) {
    return { ok: false, code: "RECEIPT_STATUS", message: capErr };
  }

  if (!isNullOrString(row.providerResponseId)) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "providerResponseId must be string or null",
    };
  }
  // Empty string id is not a real observation.
  if (row.providerResponseId === "") {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "providerResponseId empty string not allowed (use null)",
    };
  }

  // Provenance invariants from Product CognitiveExecutionReceipt contract.
  if (row.providerResponseObservation === "NOT_OBSERVED") {
    if (row.providerResponseId !== null) {
      return {
        ok: false,
        code: "PROVENANCE_INVARIANT",
        message: "NOT_OBSERVED requires providerResponseId=null",
      };
    }
  }
  if (row.providerResponseObservation === "RUNNER_RESPONSE_ID_OBSERVED") {
    if (!isNonEmptyString(row.providerResponseId)) {
      return {
        ok: false,
        code: "PROVENANCE_INVARIANT",
        message: "RUNNER_RESPONSE_ID_OBSERVED requires non-null providerResponseId",
      };
    }
  }
  if (row.providerResponseObservation === "FAKE_DETERMINISTIC") {
    if (row.providerIdentity !== "fake" || row.presentation !== "test_provider") {
      return {
        ok: false,
        code: "PROVENANCE_INVARIANT",
        message:
          "FAKE_DETERMINISTIC requires providerIdentity=fake and presentation=test_provider",
      };
    }
  }

  if (!isNullOrString(row.selectedModelId) || !isNullOrString(row.observedModel)) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "selectedModelId/observedModel must be string or null",
    };
  }
  if (!isNullOrString(row.selectedReasoningEffort)) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "selectedReasoningEffort must be string or null",
    };
  }
  if (
    row.usage == null ||
    typeof row.usage !== "object" ||
    Array.isArray(row.usage)
  ) {
    return { ok: false, code: "RECEIPT_SCHEMA", message: "usage required" };
  }
  const usage = row.usage as Record<string, unknown>;
  if (
    !isNullOrNonNegNumber(usage.inputTokens) ||
    !isNullOrNonNegNumber(usage.outputTokens) ||
    !isNullOrNonNegNumber(usage.totalTokens)
  ) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "usage tokens must be null or non-negative finite number (null ≠ 0)",
    };
  }
  const adaptiveErr = validateAdaptiveObserve(row.adaptiveObserve);
  if (adaptiveErr) {
    return { ok: false, code: "RECEIPT_SCHEMA", message: adaptiveErr };
  }
  const contErr = validateContinuationObserve(row.continuationObserve);
  if (contErr) {
    return { ok: false, code: "RECEIPT_SCHEMA", message: contErr };
  }
  const countErr = validateNonNegCountFields(
    row.adaptiveObserve,
    row.continuationObserve,
  );
  if (countErr) {
    return { ok: false, code: "RECEIPT_SCHEMA", message: countErr };
  }
  if (
    typeof row.toolCalls !== "number" ||
    !Number.isFinite(row.toolCalls) ||
    row.toolCalls < 0
  ) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "toolCalls must be non-negative finite number",
    };
  }
  if (typeof row.limitReached !== "boolean") {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "limitReached must be boolean",
    };
  }
  const consErr = validateProductConservation(row.productConservation);
  if (consErr) {
    return { ok: false, code: "RECEIPT_SCHEMA", message: consErr };
  }
  if (!isNonEmptyString(row.productCapturedAt)) {
    return {
      ok: false,
      code: "RECEIPT_SCHEMA",
      message: "productCapturedAt required",
    };
  }
  return { ok: true, kind: "cognitive_execution_receipt" };
}

/**
 * Read-side row classification — aligns with write validators for v2;
 * historical campaign rows keep minimal contract; incomplete receipts
 * are never promoted to v2 and block integrityPass when present.
 */
export type LedgerRowReadClassification =
  | { class: "historical_campaign"; ok: true }
  | { class: "cognitive_receipt_v2"; ok: true }
  | {
      class: "cognitive_receipt_incomplete";
      ok: false;
      reason: string;
    }
  | { class: "unknown_kind"; ok: false; reason: string }
  | { class: "invalid_structure"; ok: false; reason: string };

export function classifyLedgerRowForRead(
  row: unknown,
): LedgerRowReadClassification {
  if (row == null || typeof row !== "object" || Array.isArray(row)) {
    return {
      class: "invalid_structure",
      ok: false,
      reason: "not a plain object",
    };
  }
  const record = row as Record<string, unknown>;
  if (
    typeof record.campaignId !== "string" ||
    record.campaignId.length === 0 ||
    typeof record.runId !== "string" ||
    record.runId.length === 0
  ) {
    return {
      class: "invalid_structure",
      ok: false,
      reason: "missing campaignId/runId",
    };
  }

  const kind =
    typeof record.kind === "string" ? record.kind : "(historical_campaign)";

  if (kind === "cognitive_execution_receipt") {
    const v = validateCognitiveReceiptRow(record);
    if (v.ok) {
      return { class: "cognitive_receipt_v2", ok: true };
    }
    return {
      class: "cognitive_receipt_incomplete",
      ok: false,
      reason: v.message,
    };
  }

  if (
    kind === "(historical_campaign)" ||
    kind === "p6_campaign_run" ||
    kind === "ROOT_CAUSE_INVESTIGATION_READONLY" ||
    kind === "RUNTIME_REQUALIFICATION"
  ) {
    if (!isNonEmptyString(record.scenarioId)) {
      return {
        class: "invalid_structure",
        ok: false,
        reason: "historical campaign row missing scenarioId",
      };
    }
    return { class: "historical_campaign", ok: true };
  }

  return {
    class: "unknown_kind",
    ok: false,
    reason: `unsupported kind: ${kind}`,
  };
}

/** Durable fields compared for duplicate skip (excludes QA capturedAt). */
export const P6_RECEIPT_DURABLE_COMPARE_KEYS = [
  "logicalTurnId",
  "projectId",
  "campaignId",
  "scenarioId",
  "runtimeIdentity",
  "providerIdentity",
  "presentation",
  "providerConfigured",
  "providerResponseId",
  "providerResponseObservation",
  "proofClassification",
  "productRealProofStatus",
  "realBoundaryClaim",
  "selectedModelId",
  "observedModel",
  "selectedReasoningEffort",
  "usage",
  "adaptiveObserve",
  "continuationObserve",
  "toolCalls",
  "limitReached",
  "productTerminalStatus",
  "productConservation",
  "productCapturedAt",
  "ledgerSchemaVersion",
] as const;

export function durableLedgerContentEquivalent(
  existing: Record<string, unknown>,
  candidate: Record<string, unknown>,
): boolean {
  // Incomplete historical receipt never equals a complete v2 candidate.
  if (existing.ledgerSchemaVersion !== P6_RECEIPT_LEDGER_SCHEMA_VERSION_REQUIRED) {
    return false;
  }
  if (candidate.ledgerSchemaVersion !== P6_RECEIPT_LEDGER_SCHEMA_VERSION_REQUIRED) {
    return false;
  }
  for (const key of P6_RECEIPT_DURABLE_COMPARE_KEYS) {
    if (JSON.stringify(existing[key]) !== JSON.stringify(candidate[key])) {
      return false;
    }
  }
  return true;
}

export function validateLedgerRowForAppend(
  row: unknown,
): LedgerRowValidationResult {
  if (row == null || typeof row !== "object" || Array.isArray(row)) {
    return {
      ok: false,
      code: "ROW_NOT_OBJECT",
      message: "ledger row must be a plain object",
    };
  }
  const record = row as Record<string, unknown>;
  try {
    const size = Buffer.byteLength(JSON.stringify(record), "utf8");
    if (size > MAX_LEDGER_ROW_JSON_BYTES) {
      return {
        ok: false,
        code: "ROW_TOO_LARGE",
        message: `row exceeds ${MAX_LEDGER_ROW_JSON_BYTES} bytes`,
      };
    }
  } catch {
    return {
      ok: false,
      code: "ROW_NOT_SERIALIZABLE",
      message: "row is not JSON-serializable",
    };
  }

  const forbidden = assertNoForbiddenContent(record);
  if (forbidden) {
    return {
      ok: false,
      code: "SENSITIVE_PAYLOAD_REJECTED",
      message: forbidden,
    };
  }

  const kind =
    typeof record.kind === "string" ? record.kind : "(historical_campaign)";

  if (kind === "cognitive_execution_receipt") {
    return validateCognitiveReceiptRow(record);
  }

  if (
    kind === "(historical_campaign)" ||
    kind === "p6_campaign_run" ||
    kind === "ROOT_CAUSE_INVESTIGATION_READONLY" ||
    kind === "RUNTIME_REQUALIFICATION"
  ) {
    return validateHistoricalCampaignRow(record);
  }

  return {
    ok: false,
    code: "UNKNOWN_ROW_KIND",
    message: `unsupported ledger row kind: ${kind}`,
  };
}
