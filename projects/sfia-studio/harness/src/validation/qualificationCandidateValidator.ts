import {
  QUALIFICATION_CANDIDATE_SCHEMA_VERSION,
  SFIA_BLOCKS,
  SFIA_CYCLES,
  SFIA_PROFILES,
  type QualificationModelPayload,
  type SfiaBlock,
  type SfiaCycle,
  type SfiaProfile,
} from "../types/qualificationCandidate.js";
import { HarnessError } from "../types/contracts.js";
import { detectObviousSecrets } from "../finops/qualificationLimits.js";

const ALLOWED_KEYS = new Set([
  "schemaVersion",
  "requestId",
  "correlationId",
  "summary",
  "proposedCycle",
  "proposedProfile",
  "profileJustification",
  "proposedBlocks",
  "proposedScope",
  "proposedGates",
  "risks",
  "ambiguities",
  "questions",
  "confidence",
  "reserves",
]);

function isStringArray(v: unknown, maxItems: number, maxLen: number): v is string[] {
  if (!Array.isArray(v) || v.length > maxItems) return false;
  return v.every((x) => typeof x === "string" && x.length <= maxLen);
}

export function validateQualificationModelPayload(
  raw: unknown,
  expected: { requestId: string; correlationId: string },
): QualificationModelPayload {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw new HarnessError("INVALID_RESPONSE", "Payload must be a JSON object");
  }
  const obj = raw as Record<string, unknown>;
  for (const k of Object.keys(obj)) {
    if (!ALLOWED_KEYS.has(k)) {
      throw new HarnessError("INVALID_RESPONSE", `Unknown property: ${k}`);
    }
  }
  for (const k of ALLOWED_KEYS) {
    if (!(k in obj)) {
      throw new HarnessError("INVALID_RESPONSE", `Missing property: ${k}`);
    }
  }

  if (obj.schemaVersion !== QUALIFICATION_CANDIDATE_SCHEMA_VERSION) {
    throw new HarnessError("INVALID_RESPONSE", "schemaVersion mismatch");
  }
  if (obj.requestId !== expected.requestId) {
    throw new HarnessError("INVALID_RESPONSE", "requestId mismatch");
  }
  if (obj.correlationId !== expected.correlationId) {
    throw new HarnessError("INVALID_RESPONSE", "correlationId mismatch");
  }

  const summary = obj.summary;
  const justification = obj.profileJustification;
  if (typeof summary !== "string" || summary.length === 0 || summary.length > 2000) {
    throw new HarnessError("INVALID_RESPONSE", "summary invalid");
  }
  if (typeof justification !== "string" || justification.length > 2000) {
    throw new HarnessError("INVALID_RESPONSE", "profileJustification invalid");
  }

  const cycle = obj.proposedCycle;
  const profile = obj.proposedProfile;
  if (typeof cycle !== "string" || !(SFIA_CYCLES as readonly string[]).includes(cycle)) {
    throw new HarnessError("INVALID_RESPONSE", `Unknown cycle: ${String(cycle)}`);
  }
  if (typeof profile !== "string" || !(SFIA_PROFILES as readonly string[]).includes(profile)) {
    throw new HarnessError("INVALID_RESPONSE", `Unknown profile: ${String(profile)}`);
  }
  if (profile === "Critical" && justification.trim() === "") {
    throw new HarnessError("INVALID_RESPONSE", "Critical requires non-empty profileJustification");
  }

  if (!isStringArray(obj.proposedBlocks, 11, 64)) {
    throw new HarnessError("INVALID_RESPONSE", "proposedBlocks invalid");
  }
  for (const b of obj.proposedBlocks) {
    if (!(SFIA_BLOCKS as readonly string[]).includes(b)) {
      throw new HarnessError("INVALID_RESPONSE", `Unauthorized block: ${b}`);
    }
  }

  if (!isStringArray(obj.proposedScope, 12, 240)) {
    throw new HarnessError("INVALID_RESPONSE", "proposedScope invalid");
  }
  if (!isStringArray(obj.proposedGates, 12, 160)) {
    throw new HarnessError("INVALID_RESPONSE", "proposedGates invalid");
  }
  if (!isStringArray(obj.risks, 12, 400)) {
    throw new HarnessError("INVALID_RESPONSE", "risks invalid");
  }
  if (!isStringArray(obj.ambiguities, 12, 400)) {
    throw new HarnessError("INVALID_RESPONSE", "ambiguities invalid");
  }
  if (!isStringArray(obj.questions, 12, 400)) {
    throw new HarnessError("INVALID_RESPONSE", "questions invalid");
  }
  if (!isStringArray(obj.reserves, 12, 400)) {
    throw new HarnessError("INVALID_RESPONSE", "reserves invalid");
  }

  const confidence = obj.confidence;
  if (typeof confidence !== "number" || Number.isNaN(confidence) || confidence < 0 || confidence > 1) {
    throw new HarnessError("INVALID_RESPONSE", "confidence must be in [0,1]");
  }

  const blob = JSON.stringify(obj);
  if (detectObviousSecrets(blob)) {
    throw new HarnessError("SECRET_DETECTED", "Secret-like pattern in model payload");
  }

  // Forbidden authority fields if model smuggled them somehow under known keys — already blocked.
  // Extra check on string content for decision claims:
  if (/\bexecutionAuthorized\s*[:=]\s*true\b/i.test(blob) || /\bcandidateOnly\s*[:=]\s*false\b/i.test(blob)) {
    throw new HarnessError("INVALID_RESPONSE", "Authority claim forbidden in payload");
  }

  return {
    schemaVersion: QUALIFICATION_CANDIDATE_SCHEMA_VERSION,
    requestId: expected.requestId,
    correlationId: expected.correlationId,
    summary,
    proposedCycle: cycle as SfiaCycle,
    proposedProfile: profile as SfiaProfile,
    profileJustification: justification,
    proposedBlocks: obj.proposedBlocks as SfiaBlock[],
    proposedScope: obj.proposedScope,
    proposedGates: obj.proposedGates,
    risks: obj.risks,
    ambiguities: obj.ambiguities,
    questions: obj.questions,
    confidence,
    reserves: obj.reserves,
  };
}

/** Fail-closed if a assembled candidate violates authority invariants. */
export function assertCandidateAuthorityInvariants(candidate: {
  authority: { candidateOnly: boolean; morrisDecisionRequired: boolean; executionAuthorized: boolean };
}): void {
  if (candidate.authority.candidateOnly !== true) {
    throw new HarnessError("INVALID_RESPONSE", "candidateOnly must be true");
  }
  if (candidate.authority.morrisDecisionRequired !== true) {
    throw new HarnessError("INVALID_RESPONSE", "morrisDecisionRequired must be true");
  }
  if (candidate.authority.executionAuthorized !== false) {
    throw new HarnessError("INVALID_RESPONSE", "executionAuthorized must be false");
  }
}
