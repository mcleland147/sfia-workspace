/**
 * MW6 REAL authorization — construction-gate consumer (TEMPORARY WITH EXIT).
 *
 * Orthogonal to Pilote authority (HumanDecision / Confirmation / S1).
 * Server-owned only: reads SFIA_MW6_REAL_PROOF_GRANT_JSON (never NEXT_PUBLIC_*).
 * Default-deny. No persistence. No client-controlled grant.
 *
 * Exit: replace/retire when a generalized construction REAL-gate is designed.
 *
 * Does NOT authorize OpenAI LIVE by itself — only the REAL axis of preflight.
 *
 * Trust root: process env under Morris-controlled proof cycle (not cryptographic).
 * decisionRef is provenance only — grant lifecycle / Morris gate freshness is
 * governed by the construction cycle that provisions the envelope, not by
 * hard-coded decision text.
 */

import { MW6_EXTERNAL_DISCOVERY_ACTION } from "@/lib/auth/piloteS1AuthorityPolicy";

export const MW6_REAL_PROOF_GRANT_ENV = "SFIA_MW6_REAL_PROOF_GRANT_JSON" as const;
export const MW6_REAL_PROOF_PURPOSE =
  "mw6_external_discovery_bounded_real" as const;
export const MW6_REAL_PROOF_GRANT_VERSION = "v1" as const;
export { MW6_EXTERNAL_DISCOVERY_ACTION };

export type Mw6RealProofGrantV1 = {
  version: typeof MW6_REAL_PROOF_GRANT_VERSION;
  purpose: typeof MW6_REAL_PROOF_PURPOSE;
  decisionRef: string;
  projectId: string;
  executionContractId: string;
  action: typeof MW6_EXTERNAL_DISCOVERY_ACTION;
  requiredAuthority: "N2";
  semanticFingerprint: string;
  expiresAt: string;
  campaignId?: string;
  notBefore?: string;
};

export type Mw6RealAuthorizationMatchContext = {
  projectId: string;
  executionContractId: string;
  action: string;
  requiredAuthority: "N2";
  semanticFingerprint: string;
  /**
   * Optional on context. When the grant includes campaignId, context.campaignId
   * must be exactly equal (absent context campaign → CAMPAIGN_MISMATCH).
   */
  campaignId?: string;
  nowIso: string;
};

export type Mw6RealAuthorizationDecision = {
  authorized: boolean;
  code:
    | "OK"
    | "GRANT_ABSENT"
    | "GRANT_MALFORMED"
    | "GRANT_EXPIRED"
    | "GRANT_NOT_YET_VALID"
    | "PURPOSE_MISMATCH"
    | "PROJECT_MISMATCH"
    | "EXECUTION_CONTRACT_MISMATCH"
    | "ACTION_MISMATCH"
    | "REQUIRED_AUTHORITY_MISMATCH"
    | "SEMANTIC_FINGERPRINT_MISMATCH"
    | "CAMPAIGN_MISMATCH"
    | "CONTEXT_INCOMPLETE";
  matchedScope: boolean;
  expired: boolean;
  /** Provenance only — not cryptographic proof. Never log raw grant. */
  decisionRef?: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function parseIsoMs(value: string): number | null {
  const t = Date.parse(value);
  return Number.isFinite(t) ? t : null;
}

/**
 * Pure parse — never throws into REAL-open. Malformed → GRANT_MALFORMED.
 * Does not log grant contents.
 */
export function parseMw6RealProofGrantJson(
  raw: string | undefined | null,
):
  | { ok: true; grant: Mw6RealProofGrantV1 }
  | { ok: false; code: "GRANT_ABSENT" | "GRANT_MALFORMED" } {
  if (raw === undefined || raw === null || String(raw).trim() === "") {
    return { ok: false, code: "GRANT_ABSENT" };
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(String(raw));
  } catch {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  const o = parsed as Record<string, unknown>;
  // Reject prototype pollution vectors — only own enumerable keys matter;
  // unknown keys are ignored (fail-open on extras), required keys enforced.
  if (o.version !== MW6_REAL_PROOF_GRANT_VERSION) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (o.purpose !== MW6_REAL_PROOF_PURPOSE) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  // decisionRef: required non-empty provenance only — opaque to runtime.
  if (!isNonEmptyString(o.decisionRef)) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (!isNonEmptyString(o.projectId)) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (!isNonEmptyString(o.executionContractId)) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (o.action !== MW6_EXTERNAL_DISCOVERY_ACTION) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (o.requiredAuthority !== "N2") {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (!isNonEmptyString(o.semanticFingerprint)) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (!isNonEmptyString(o.expiresAt) || parseIsoMs(o.expiresAt) === null) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (o.campaignId !== undefined && !isNonEmptyString(o.campaignId)) {
    return { ok: false, code: "GRANT_MALFORMED" };
  }
  if (o.notBefore !== undefined) {
    if (!isNonEmptyString(o.notBefore) || parseIsoMs(o.notBefore) === null) {
      return { ok: false, code: "GRANT_MALFORMED" };
    }
  }

  const grant: Mw6RealProofGrantV1 = {
    version: MW6_REAL_PROOF_GRANT_VERSION,
    purpose: MW6_REAL_PROOF_PURPOSE,
    decisionRef: o.decisionRef.trim(),
    projectId: o.projectId.trim(),
    executionContractId: o.executionContractId.trim(),
    action: MW6_EXTERNAL_DISCOVERY_ACTION,
    requiredAuthority: "N2",
    semanticFingerprint: o.semanticFingerprint.trim(),
    expiresAt: o.expiresAt.trim(),
    ...(o.campaignId !== undefined
      ? { campaignId: String(o.campaignId).trim() }
      : {}),
    ...(o.notBefore !== undefined
      ? { notBefore: String(o.notBefore).trim() }
      : {}),
  };
  return { ok: true, grant };
}

/**
 * Pure matcher — exact scope + expiry. Never throws.
 */
export function matchMw6RealProofGrant(
  grant: Mw6RealProofGrantV1,
  context: Mw6RealAuthorizationMatchContext,
): Mw6RealAuthorizationDecision {
  const nowMs = parseIsoMs(context.nowIso);
  if (nowMs === null) {
    return {
      authorized: false,
      code: "GRANT_MALFORMED",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  if (grant.purpose !== MW6_REAL_PROOF_PURPOSE) {
    return {
      authorized: false,
      code: "PURPOSE_MISMATCH",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  if (grant.projectId !== context.projectId) {
    return {
      authorized: false,
      code: "PROJECT_MISMATCH",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  if (grant.executionContractId !== context.executionContractId) {
    return {
      authorized: false,
      code: "EXECUTION_CONTRACT_MISMATCH",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  if (
    grant.action !== context.action ||
    context.action !== MW6_EXTERNAL_DISCOVERY_ACTION
  ) {
    return {
      authorized: false,
      code: "ACTION_MISMATCH",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  if (
    grant.requiredAuthority !== "N2" ||
    context.requiredAuthority !== "N2"
  ) {
    return {
      authorized: false,
      code: "REQUIRED_AUTHORITY_MISMATCH",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  if (grant.semanticFingerprint !== context.semanticFingerprint) {
    return {
      authorized: false,
      code: "SEMANTIC_FINGERPRINT_MISMATCH",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  // Optional in grant schema; when present, exact match against context is mandatory
  // (including deny when context.campaignId is absent).
  if (
    grant.campaignId !== undefined &&
    grant.campaignId !== context.campaignId
  ) {
    return {
      authorized: false,
      code: "CAMPAIGN_MISMATCH",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }

  const expMs = parseIsoMs(grant.expiresAt);
  if (expMs === null) {
    return {
      authorized: false,
      code: "GRANT_MALFORMED",
      matchedScope: false,
      expired: false,
      decisionRef: grant.decisionRef,
    };
  }
  if (nowMs >= expMs) {
    return {
      authorized: false,
      code: "GRANT_EXPIRED",
      matchedScope: true,
      expired: true,
      decisionRef: grant.decisionRef,
    };
  }
  if (grant.notBefore !== undefined) {
    const nb = parseIsoMs(grant.notBefore);
    if (nb === null) {
      return {
        authorized: false,
        code: "GRANT_MALFORMED",
        matchedScope: false,
        expired: false,
        decisionRef: grant.decisionRef,
      };
    }
    if (nowMs < nb) {
      return {
        authorized: false,
        code: "GRANT_NOT_YET_VALID",
        matchedScope: true,
        expired: false,
        decisionRef: grant.decisionRef,
      };
    }
  }

  return {
    authorized: true,
    code: "OK",
    matchedScope: true,
    expired: false,
    decisionRef: grant.decisionRef,
  };
}

/**
 * Server-owned resolver — reads process env only (or explicit raw for pure tests
 * of the resolver composition; preflight always uses process.env).
 */
export function resolveMw6RealAuthorization(input: {
  context: Mw6RealAuthorizationMatchContext | null;
  /**
   * Optional raw JSON override for unit tests of the resolver.
   * Production preflight MUST omit this and use process.env.
   */
  grantJson?: string | null;
  env?: NodeJS.ProcessEnv;
}): Mw6RealAuthorizationDecision {
  if (!input.context) {
    return {
      authorized: false,
      code: "CONTEXT_INCOMPLETE",
      matchedScope: false,
      expired: false,
    };
  }
  const env = input.env ?? process.env;
  const raw =
    input.grantJson !== undefined
      ? input.grantJson
      : env[MW6_REAL_PROOF_GRANT_ENV];
  const parsed = parseMw6RealProofGrantJson(raw);
  if (!parsed.ok) {
    return {
      authorized: false,
      code: parsed.code,
      matchedScope: false,
      expired: false,
    };
  }
  return matchMw6RealProofGrant(parsed.grant, input.context);
}
