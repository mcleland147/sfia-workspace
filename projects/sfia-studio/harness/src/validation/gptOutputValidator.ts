/**
 * Deterministic GPT output validators — fail closed, no silent repair.
 */

import { createHash } from "node:crypto";
import { HarnessError } from "../types/contracts.js";
import {
  GPT_CONTRACT_SCHEMA_VERSION,
  type ExecutionContractCandidate,
  type GPTQualificationRequest,
  type GPTVerdictRequest,
  type VerdictCandidate,
} from "../types/gptContracts.js";

const MAX_STRING = 4_000;
const MAX_ARRAY = 64;
const MAX_JSON_BYTES = 64_000;

const CYCLES = new Set(["Cycle 7", "Cycle 8", "Cycle 9", "Cycle 13", "DOC"]);
const PROFILES = new Set(["Light", "Standard", "Critical"]);
const VERDICT_STATUS = new Set([
  "OBSERVED",
  "PARTIAL",
  "INCONCLUSIVE",
  "FAILED",
  "READY_FOR_MORRIS_REVIEW",
]);
const PROPOSED = new Set([
  "PASS_WITH_RESERVES",
  "FAIL",
  "INCONCLUSIVE",
  "NEEDS_MORRIS_DECISION",
]);

const SECRET_PATTERNS = [
  /OPENAI_API_KEY\s*=\s*\S+/i,
  /Authorization:\s*Bearer\s+\S+/i,
  /sk-[a-zA-Z0-9_-]{20,}/,
  /Bearer\s+[A-Za-z0-9._-]{20,}/,
];

const FORBIDDEN_AUTHORITY = [
  /\bgoConsumed\s*[:=]\s*true\b/i,
  /\bdecisionValidated\s*[:=]\s*true\b/i,
  /\bmergeAuthorized\s*[:=]\s*true\b/i,
  /\bbaselinePromoted\s*[:=]\s*true\b/i,
  /\bproductionReady\s*[:=]\s*true\b/i,
  /\b(I|we)\s+(authorize|approve)\s+(this|the|merge|go)\b/i,
  /\bMorris\s+GO\s+(is\s+)?(consumed|issued|granted)\b/i,
];

const FORBIDDEN_GIT = [
  /\bgit\s+push\b/i,
  /\bgit\s+commit\b/i,
  /\bgit\s+merge\b/i,
  /\bgh\s+pr\b/i,
  /\bgit\s+rebase\b/i,
];

const EXCESSIVE_VERDICT = [
  /\bproduction\s+ready\b/i,
  /\bready\s+for\s+merge\b/i,
  /\bPOC\s+complete\b/i,
  /\bEND-TO-END\s+PROVEN\b/i,
  /\bCHATGPT\s+APP\s+INTEGRATED\b/i,
];

const CONTRACT_KEYS = new Set([
  "schemaVersion",
  "requestId",
  "correlationId",
  "proposedCycle",
  "proposedProfile",
  "profileJustification",
  "objective",
  "allowedReadPaths",
  "allowedWritePaths",
  "deniedPaths",
  "requestedActions",
  "stopConditions",
  "requiredMorrisGates",
  "assumptions",
  "observations",
  "options",
  "recommendations",
  "validatedDecisions",
  "contractHashCandidate",
  "modelMetadata",
]);

const VERDICT_KEYS = new Set([
  "schemaVersion",
  "requestId",
  "correlationId",
  "status",
  "observations",
  "provenElements",
  "unprovenElements",
  "risks",
  "reserves",
  "recommendations",
  "decisionsRequiredFromMorris",
  "forbiddenClaimsDetected",
  "proposedVerdict",
  "modelMetadata",
  "decisionValidated",
  "mergeAuthorized",
  "goConsumed",
  "baselinePromoted",
  "productionReady",
]);

const META_KEYS = new Set([
  "provider",
  "mechanism",
  "model",
  "experimental",
  "productionReadyClaimed",
  "responseIdRedacted",
  "durationMs",
]);

function reject(code: string, message: string, detail?: Record<string, unknown>): never {
  throw new HarnessError(code, message, detail);
}

function assertString(v: unknown, field: string): string {
  if (typeof v !== "string") reject("GPT_SCHEMA", `${field} must be string`);
  if (v.length > MAX_STRING) reject("GPT_SIZE", `${field} exceeds max length`);
  return v;
}

function assertStringArray(v: unknown, field: string): string[] {
  if (!Array.isArray(v)) reject("GPT_SCHEMA", `${field} must be array`);
  if (v.length > MAX_ARRAY) reject("GPT_SIZE", `${field} exceeds max items`);
  return v.map((x, i) => assertString(x, `${field}[${i}]`));
}

function assertExactKeys(obj: Record<string, unknown>, allowed: Set<string>, label: string): void {
  for (const k of Object.keys(obj)) {
    if (!allowed.has(k)) reject("GPT_UNKNOWN_PROPERTY", `Unknown property ${k} on ${label}`, { key: k });
  }
}

function scanText(text: string, context: string): void {
  for (const p of SECRET_PATTERNS) {
    if (p.test(text)) reject("GPT_SECRET_DETECTED", `Secret-like pattern in ${context}`);
  }
  for (const p of FORBIDDEN_AUTHORITY) {
    if (p.test(text)) reject("GPT_AUTHORITY_BOUNDARY", `Forbidden authority claim in ${context}`);
  }
  for (const p of FORBIDDEN_GIT) {
    if (p.test(text)) reject("GPT_GIT_WRITE", `Forbidden git write instruction in ${context}`);
  }
}

function isPathSubset(candidate: string[], allowed: string[]): boolean {
  const set = new Set(allowed);
  return candidate.every((p) => set.has(p) || allowed.some((a) => p === a || p.startsWith(`${a}/`)));
}

function isActionSubset(candidate: string[], allowed: string[]): boolean {
  const set = new Set(allowed);
  return candidate.every((a) => set.has(a));
}

export function assertJsonSize(raw: string): void {
  if (Buffer.byteLength(raw, "utf8") > MAX_JSON_BYTES) {
    reject("GPT_OUTPUT_TOO_LARGE", `Output exceeds ${MAX_JSON_BYTES} bytes`);
  }
}

export function parseStrictJson(raw: string): unknown {
  assertJsonSize(raw);
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    reject("GPT_INVALID_JSON", "Output is not valid JSON");
  }
  if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
    reject("GPT_SCHEMA", "Output must be a JSON object");
  }
  return parsed;
}

export function validateModelMetadata(raw: unknown): ExecutionContractCandidate["modelMetadata"] {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) reject("GPT_SCHEMA", "modelMetadata invalid");
  const o = raw as Record<string, unknown>;
  assertExactKeys(o, META_KEYS, "modelMetadata");
  if (o.experimental !== true) reject("GPT_SCHEMA", "modelMetadata.experimental must be true");
  if (o.productionReadyClaimed !== false) {
    reject("GPT_AUTHORITY_BOUNDARY", "productionReadyClaimed must be false");
  }
  const provider = assertString(o.provider, "modelMetadata.provider");
  if (provider !== "fixture" && provider !== "openai-api") reject("GPT_SCHEMA", "provider enum");
  const mechanism = assertString(o.mechanism, "modelMetadata.mechanism");
  if (mechanism !== "gpt-fixture" && mechanism !== "openai-chat-completions-https") {
    reject("GPT_SCHEMA", "mechanism enum");
  }
  return {
    provider,
    mechanism,
    model: assertString(o.model, "modelMetadata.model"),
    experimental: true,
    productionReadyClaimed: false,
    responseIdRedacted:
      o.responseIdRedacted === undefined ? undefined : assertString(o.responseIdRedacted, "responseIdRedacted"),
    durationMs: o.durationMs === undefined ? undefined : Number(o.durationMs),
  };
}

export function validateExecutionContractCandidate(
  raw: unknown,
  request: GPTQualificationRequest,
): ExecutionContractCandidate {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) reject("GPT_SCHEMA", "candidate must be object");
  const o = raw as Record<string, unknown>;
  assertExactKeys(o, CONTRACT_KEYS, "ExecutionContractCandidate");

  const schemaVersion = assertString(o.schemaVersion, "schemaVersion");
  if (schemaVersion !== GPT_CONTRACT_SCHEMA_VERSION) reject("GPT_SCHEMA", "schemaVersion mismatch");

  const requestId = assertString(o.requestId, "requestId");
  const correlationId = assertString(o.correlationId, "correlationId");
  if (requestId !== request.requestId || correlationId !== request.correlationId) {
    reject("GPT_ID_MISMATCH", "requestId/correlationId must match request");
  }

  const proposedCycle = assertString(o.proposedCycle, "proposedCycle");
  if (!CYCLES.has(proposedCycle) || !request.availableCycles.includes(proposedCycle as never)) {
    reject("GPT_ENUM", "proposedCycle not in availableCycles");
  }
  const proposedProfile = assertString(o.proposedProfile, "proposedProfile");
  if (!PROFILES.has(proposedProfile) || !request.availableProfiles.includes(proposedProfile as never)) {
    reject("GPT_ENUM", "proposedProfile not in availableProfiles");
  }

  const allowedReadPaths = assertStringArray(o.allowedReadPaths, "allowedReadPaths");
  const allowedWritePaths = assertStringArray(o.allowedWritePaths, "allowedWritePaths");
  const deniedPaths = assertStringArray(o.deniedPaths, "deniedPaths");
  const requestedActions = assertStringArray(o.requestedActions, "requestedActions");
  const requiredMorrisGates = assertStringArray(o.requiredMorrisGates, "requiredMorrisGates");
  const validatedDecisions = assertStringArray(o.validatedDecisions, "validatedDecisions");

  if (!isPathSubset(allowedReadPaths, request.allowedPaths)) {
    reject("GPT_PATH_SUBSET", "allowedReadPaths exceeds request.allowedPaths");
  }
  if (!isPathSubset(allowedWritePaths, request.allowedPaths)) {
    reject("GPT_PATH_SUBSET", "allowedWritePaths exceeds request.allowedPaths");
  }
  if (allowedWritePaths.some((p) => p.includes("app/") || p.startsWith("projects/sfia-studio/app"))) {
    reject("GPT_PATH_DENIED", "write to app/** forbidden");
  }
  if (!isActionSubset(requestedActions, request.allowedActions)) {
    reject("GPT_ACTION_SUBSET", "requestedActions not subset of allowlist");
  }
  for (const g of request.requiredMorrisGates) {
    if (!requiredMorrisGates.includes(g)) {
      reject("GPT_GATE_REMOVED", `requiredMorrisGates missing input gate ${g}`);
    }
  }
  for (const d of validatedDecisions) {
    if (!request.decisionsAlreadyValidated.includes(d)) {
      reject("GPT_INVENTED_DECISION", `validatedDecisions invents ${d}`);
    }
  }

  const blob = JSON.stringify(o);
  scanText(blob, "ExecutionContractCandidate");
  for (const field of [
    "profileJustification",
    "objective",
    ...assertStringArray(o.assumptions, "assumptions"),
    ...assertStringArray(o.observations, "observations"),
    ...assertStringArray(o.options, "options"),
    ...assertStringArray(o.recommendations, "recommendations"),
    ...assertStringArray(o.stopConditions, "stopConditions"),
  ]) {
    scanText(String(field), "contract text");
  }

  const candidate: ExecutionContractCandidate = {
    schemaVersion: GPT_CONTRACT_SCHEMA_VERSION,
    requestId,
    correlationId,
    proposedCycle: proposedCycle as ExecutionContractCandidate["proposedCycle"],
    proposedProfile: proposedProfile as ExecutionContractCandidate["proposedProfile"],
    profileJustification: assertString(o.profileJustification, "profileJustification"),
    objective: assertString(o.objective, "objective"),
    allowedReadPaths,
    allowedWritePaths,
    deniedPaths,
    requestedActions,
    stopConditions: assertStringArray(o.stopConditions, "stopConditions"),
    requiredMorrisGates,
    assumptions: assertStringArray(o.assumptions, "assumptions"),
    observations: assertStringArray(o.observations, "observations"),
    options: assertStringArray(o.options, "options"),
    recommendations: assertStringArray(o.recommendations, "recommendations"),
    validatedDecisions,
    contractHashCandidate: assertString(o.contractHashCandidate, "contractHashCandidate"),
    modelMetadata: validateModelMetadata(o.modelMetadata),
  };

  if (candidate.modelMetadata.productionReadyClaimed !== false) {
    reject("GPT_AUTHORITY_BOUNDARY", "model must not claim production ready");
  }
  return candidate;
}

export function validateVerdictCandidate(raw: unknown, request: GPTVerdictRequest): VerdictCandidate {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) reject("GPT_SCHEMA", "verdict must be object");
  const o = raw as Record<string, unknown>;
  assertExactKeys(o, VERDICT_KEYS, "VerdictCandidate");

  const schemaVersion = assertString(o.schemaVersion, "schemaVersion");
  if (schemaVersion !== GPT_CONTRACT_SCHEMA_VERSION) reject("GPT_SCHEMA", "schemaVersion mismatch");

  const requestId = assertString(o.requestId, "requestId");
  const correlationId = assertString(o.correlationId, "correlationId");
  if (requestId !== request.requestId || correlationId !== request.correlationId) {
    reject("GPT_ID_MISMATCH", "requestId/correlationId must match request");
  }

  const status = assertString(o.status, "status");
  if (!VERDICT_STATUS.has(status)) reject("GPT_ENUM", "status enum");
  const proposedVerdict = assertString(o.proposedVerdict, "proposedVerdict");
  if (!PROPOSED.has(proposedVerdict) || !request.expectedVerdicts.includes(proposedVerdict as never)) {
    reject("GPT_ENUM", "proposedVerdict not allowed");
  }

  for (const flag of [
    "decisionValidated",
    "mergeAuthorized",
    "goConsumed",
    "baselinePromoted",
    "productionReady",
  ] as const) {
    if (flag in o && o[flag] !== false) {
      reject("GPT_AUTHORITY_BOUNDARY", `${flag} must be absent or false`);
    }
  }

  const textFields = [
    ...assertStringArray(o.observations, "observations"),
    ...assertStringArray(o.provenElements, "provenElements"),
    ...assertStringArray(o.unprovenElements, "unprovenElements"),
    ...assertStringArray(o.risks, "risks"),
    ...assertStringArray(o.reserves, "reserves"),
    ...assertStringArray(o.recommendations, "recommendations"),
    ...assertStringArray(o.decisionsRequiredFromMorris, "decisionsRequiredFromMorris"),
    ...assertStringArray(o.forbiddenClaimsDetected, "forbiddenClaimsDetected"),
  ];
  const blob = JSON.stringify(o);
  scanText(blob, "VerdictCandidate");
  for (const t of textFields) {
    for (const p of EXCESSIVE_VERDICT) {
      if (p.test(t)) reject("GPT_EXCESSIVE_VERDICT", `Excessive claim in verdict: ${t}`);
    }
    scanText(t, "verdict text");
  }

  if (request.decisionAuthority !== "Morris") {
    reject("GPT_AUTHORITY_BOUNDARY", "decisionAuthority must be Morris");
  }

  return {
    schemaVersion: GPT_CONTRACT_SCHEMA_VERSION,
    requestId,
    correlationId,
    status: status as VerdictCandidate["status"],
    observations: assertStringArray(o.observations, "observations"),
    provenElements: assertStringArray(o.provenElements, "provenElements"),
    unprovenElements: assertStringArray(o.unprovenElements, "unprovenElements"),
    risks: assertStringArray(o.risks, "risks"),
    reserves: assertStringArray(o.reserves, "reserves"),
    recommendations: assertStringArray(o.recommendations, "recommendations"),
    decisionsRequiredFromMorris: assertStringArray(
      o.decisionsRequiredFromMorris,
      "decisionsRequiredFromMorris",
    ),
    forbiddenClaimsDetected: assertStringArray(o.forbiddenClaimsDetected, "forbiddenClaimsDetected"),
    proposedVerdict: proposedVerdict as VerdictCandidate["proposedVerdict"],
    modelMetadata: validateModelMetadata(o.modelMetadata),
    decisionValidated: o.decisionValidated === false ? false : undefined,
    mergeAuthorized: o.mergeAuthorized === false ? false : undefined,
    goConsumed: o.goConsumed === false ? false : undefined,
    baselinePromoted: o.baselinePromoted === false ? false : undefined,
    productionReady: o.productionReady === false ? false : undefined,
  };
}

export function hashContractCandidate(c: Omit<ExecutionContractCandidate, "contractHashCandidate" | "modelMetadata">): string {
  return createHash("sha256").update(JSON.stringify(c)).digest("hex");
}
