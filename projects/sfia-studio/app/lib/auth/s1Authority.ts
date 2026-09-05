/**
 * S1 AuthorityEvidence — single public Auth issuance path.
 *
 * B1: buildValidatedS1Evidence / registerS1EvidenceImmutable are module-private.
 * B2: AuthorityEvidence.scope = computeInspectionFingerprint(contract)
 *     (existing EC inspection primitive — lifecycle-stable across Confirmation).
 */

import { randomUUID } from "node:crypto";
import type {
  AuthorityEvidence,
  AuthorityLevel,
  AuthorityResolverPort,
} from "@/lib/oa/decision";
import {
  BETTER_AUTH_GITHUB_MULTI_USER_S1,
  S1_MAX_TTL_SECONDS,
  SESSION_COOKIE_MAX_AGE_SECONDS,
} from "./constants";
import {
  AUTHORITY_REQUIREMENT_MISMATCH,
  AUTHORITY_REQUIREMENT_UNTRUSTED,
  AUTHORITY_UNRESOLVED,
  CONTRACT_BINDING_MISMATCH,
  CONTRACT_CONTEXT_REQUIRED,
  MORRIS_AUTHORITY_NOT_AVAILABLE,
  MORRIS_GATE_REQUIRED,
  PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
  resolvePiloteS1AuthorityFromGovernedContract,
  resolvePiloteS1AuthorityLevel,
  type AuthS1GovernedContractContext,
  type GovernedEffectsAuthorityInput,
} from "./piloteS1AuthorityPolicy";
import type { ResolveCurrentPiloteResult } from "./resolveCurrentPilote";

export type IssueS1AuthorityEvidenceInput = {
  pilote: Extract<ResolveCurrentPiloteResult, { ok: true }>;
  authorityResolver: AuthorityResolverPort;
  /** Concrete governed ExecutionContract context — required for success. */
  contract?: AuthS1GovernedContractContext;
  /** Server-owned effects facts — required for success; re-projected for level. */
  governedEffects?: GovernedEffectsAuthorityInput;
  issuedAt: string;
  expiresAt: string;
  evidenceId?: string;
};

export type IssueS1AuthorityEvidenceResult =
  | { ok: true; evidence: AuthorityEvidence }
  | {
      ok: false;
      code:
        | "INVALID_SCOPE"
        | "INVALID_ISSUED_AT"
        | "INVALID_EXPIRES_AT"
        | "INVALID_EVIDENCE_LIFETIME"
        | "EVIDENCE_ID_COLLISION"
        | "REGISTER_FAILED"
        | typeof PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN
        | typeof MORRIS_GATE_REQUIRED
        | typeof MORRIS_AUTHORITY_NOT_AVAILABLE
        | typeof AUTHORITY_REQUIREMENT_UNTRUSTED
        | typeof AUTHORITY_REQUIREMENT_MISMATCH
        | typeof AUTHORITY_UNRESOLVED
        | typeof CONTRACT_BINDING_MISMATCH
        | typeof CONTRACT_CONTEXT_REQUIRED;
      message: string;
    };

function parseIsoMs(value: string): number | null {
  if (typeof value !== "string" || value.trim().length === 0) return null;
  const ms = Date.parse(value);
  return Number.isFinite(ms) ? ms : null;
}

/** Lifetime validation only — does not emit/register authority. */
export function validateS1EvidenceLifetime(input: {
  issuedAt: string;
  expiresAt: string;
  maxTtlSeconds?: number;
}):
  | { ok: true; issuedAtMs: number; expiresAtMs: number; ttlSeconds: number }
  | {
      ok: false;
      code: "INVALID_ISSUED_AT" | "INVALID_EXPIRES_AT" | "INVALID_EVIDENCE_LIFETIME";
      message: string;
    } {
  const maxTtl = input.maxTtlSeconds ?? S1_MAX_TTL_SECONDS;
  if (maxTtl > SESSION_COOKIE_MAX_AGE_SECONDS) {
    return {
      ok: false,
      code: "INVALID_EVIDENCE_LIFETIME",
      message: "Configured max TTL exceeds session cookie max age.",
    };
  }

  const issuedAtMs = parseIsoMs(input.issuedAt);
  if (issuedAtMs === null) {
    return {
      ok: false,
      code: "INVALID_ISSUED_AT",
      message: "issuedAt must be a parseable ISO timestamp.",
    };
  }

  const expiresAtMs = parseIsoMs(input.expiresAt);
  if (expiresAtMs === null) {
    return {
      ok: false,
      code: "INVALID_EXPIRES_AT",
      message: "expiresAt is required and must be a parseable ISO timestamp.",
    };
  }

  if (expiresAtMs <= issuedAtMs) {
    return {
      ok: false,
      code: "INVALID_EVIDENCE_LIFETIME",
      message: "expiresAt must be strictly greater than issuedAt.",
    };
  }

  const ttlSeconds = (expiresAtMs - issuedAtMs) / 1000;
  if (ttlSeconds > maxTtl) {
    return {
      ok: false,
      code: "INVALID_EVIDENCE_LIFETIME",
      message: `S1 TTL exceeds max allowed (${maxTtl}s / session cookie bound).`,
    };
  }

  return { ok: true, issuedAtMs, expiresAtMs, ttlSeconds };
}

/** Module-private — not exported from lib/auth (B1). */
function registerS1EvidenceImmutable(
  authorityResolver: AuthorityResolverPort,
  evidence: AuthorityEvidence,
):
  | { ok: true; evidence: AuthorityEvidence }
  | {
      ok: false;
      code: "EVIDENCE_ID_COLLISION" | "REGISTER_FAILED";
      message: string;
    } {
  try {
    const existing = authorityResolver.getEvidence(evidence.evidenceId);
    if (existing) {
      return {
        ok: false,
        code: "EVIDENCE_ID_COLLISION",
        message: "evidenceId already registered; AuthorityEvidence is immutable.",
      };
    }
    authorityResolver.register(evidence);
    const stored = authorityResolver.getEvidence(evidence.evidenceId);
    if (!stored) {
      return {
        ok: false,
        code: "REGISTER_FAILED",
        message: "Evidence register did not persist the record.",
      };
    }
    return { ok: true, evidence: stored };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to register S1 evidence.";
    if (message === "evidence_immutable") {
      return {
        ok: false,
        code: "EVIDENCE_ID_COLLISION",
        message: "evidenceId already registered; AuthorityEvidence is immutable.",
      };
    }
    return { ok: false, code: "REGISTER_FAILED", message };
  }
}

/** Module-private — not exported from lib/auth (B1). */
function buildValidatedS1Evidence(input: {
  pilote: Extract<ResolveCurrentPiloteResult, { ok: true }>;
  /** Must be executionContractId for Auth S1 binding. */
  authorityBindingScope: string;
  issuedAt: string;
  expiresAt: string;
  level: AuthorityLevel;
  evidenceId?: string;
}):
  | { ok: true; evidence: AuthorityEvidence }
  | {
      ok: false;
      code:
        | "INVALID_SCOPE"
        | "INVALID_ISSUED_AT"
        | "INVALID_EXPIRES_AT"
        | "INVALID_EVIDENCE_LIFETIME";
      message: string;
    } {
  const scope = input.authorityBindingScope?.trim();
  if (!scope) {
    return {
      ok: false,
      code: "INVALID_SCOPE",
      message: "AuthorityEvidence binding scope (executionContractId) is required.",
    };
  }

  const lifetime = validateS1EvidenceLifetime({
    issuedAt: input.issuedAt,
    expiresAt: input.expiresAt,
  });
  if (!lifetime.ok) return lifetime;

  const evidenceId =
    input.evidenceId ??
    `evd:github-s1:${input.pilote.githubUserId}:${randomUUID()}`;

  return {
    ok: true,
    evidence: {
      evidenceId,
      actorId: input.pilote.actor.actorId,
      level: input.level,
      scope,
      issuedAt: input.issuedAt,
      expiresAt: input.expiresAt,
      source: BETTER_AUTH_GITHUB_MULTI_USER_S1,
      canActAsMorris: false,
    },
  };
}

/**
 * Canonical (sole) public Auth S1 issuance path.
 * Requires concrete contract + governed effects; never login-only.
 */
export function issueS1AuthorityEvidence(
  input: IssueS1AuthorityEvidenceInput,
): IssueS1AuthorityEvidenceResult {
  if (!input.contract || !input.governedEffects) {
    const loginOnly = resolvePiloteS1AuthorityLevel();
    if (loginOnly.ok) {
      return {
        ok: false,
        code: PILOTE_AUTHORITY_ENVELOPE_NOT_PROVEN,
        message: "Unexpected login policy success — fail-closed.",
      };
    }
    return { ok: false, code: loginOnly.code, message: loginOnly.message };
  }

  const policy = resolvePiloteS1AuthorityFromGovernedContract({
    contract: input.contract,
    governedEffects: input.governedEffects,
  });

  if (!policy.ok) {
    return {
      ok: false,
      code: policy.code,
      message: policy.message,
    };
  }

  const built = buildValidatedS1Evidence({
    pilote: input.pilote,
    authorityBindingScope: policy.authorityBindingScope,
    issuedAt: input.issuedAt,
    expiresAt: input.expiresAt,
    level: policy.level,
    evidenceId: input.evidenceId,
  });
  if (!built.ok) return built;

  return registerS1EvidenceImmutable(input.authorityResolver, built.evidence);
}
