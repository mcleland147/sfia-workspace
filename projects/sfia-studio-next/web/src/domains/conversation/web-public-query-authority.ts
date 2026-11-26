/**
 * S5 — Exceptional public WEB query authority binding (D6 owner).
 *
 * Regex AUTHORIZE_PUBLIC_QUERY parse is a technical extractor only.
 * Egress admission for non-catalog queries requires an inspectable authority
 * binding when a project scope exists — never a parallel decision register.
 *
 * Uses existing HumanDecision kind RECORD_DECISION (no schema migration).
 * Extending DECISION_KINDS for a dedicated WEB kind requires Morris GO.
 */

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { humanDecisions } from "@/db/schema";
import { canonicalPayloadFingerprint } from "./provider-emission-frontier";
import {
  extractPilotAuthorizedExactQueries,
  isDedicatedAuthorizePublicQueryAct,
} from "./public-web-registry";

export const WEB_PUBLIC_QUERY_OBJECT_PREFIX = "web.public_query:" as const;
export const WEB_PUBLIC_QUERY_DESTINATION = "public_web_search" as const;

export type WebPublicQueryAuthorityPayload = {
  query: string;
  destination: typeof WEB_PUBLIC_QUERY_DESTINATION;
  purpose: string;
  projectId: string;
  pilotId: string;
  policyVersion: string;
};

export function normalizeWebPublicQuery(query: string): string {
  return query.replace(/\s+/g, " ").trim();
}

export function buildWebPublicQueryObjectRef(
  payload: Pick<WebPublicQueryAuthorityPayload, "query" | "projectId">,
): string {
  const fp = canonicalPayloadFingerprint({
    query: normalizeWebPublicQuery(payload.query),
    destination: WEB_PUBLIC_QUERY_DESTINATION,
    projectId: payload.projectId,
  });
  return `${WEB_PUBLIC_QUERY_OBJECT_PREFIX}${fp}`;
}

export function buildWebPublicQueryEffectConditions(
  payload: WebPublicQueryAuthorityPayload,
): string {
  const canonical = {
    query: normalizeWebPublicQuery(payload.query),
    destination: payload.destination,
    purpose: payload.purpose.slice(0, 200),
    projectId: payload.projectId,
    pilotId: payload.pilotId,
    policyVersion: payload.policyVersion,
  };
  return JSON.stringify(canonical);
}

export type ParseEffectConditionsResult =
  | { ok: true; payload: WebPublicQueryAuthorityPayload }
  | { ok: false; reasonCode: "EFFECT_CONDITIONS_MISSING" | "EFFECT_CONDITIONS_MALFORMED" | "EFFECT_CONDITIONS_INCOMPLETE" };

/** Fail closed on missing/malformed effectConditions (discriminant, no DB). */
export function parseWebPublicQueryEffectConditions(
  raw: string | null | undefined,
): ParseEffectConditionsResult {
  const text = (raw ?? "").trim();
  if (!text) {
    return { ok: false, reasonCode: "EFFECT_CONDITIONS_MISSING" };
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return { ok: false, reasonCode: "EFFECT_CONDITIONS_MALFORMED" };
  }
  if (!parsed || typeof parsed !== "object") {
    return { ok: false, reasonCode: "EFFECT_CONDITIONS_MALFORMED" };
  }
  const o = parsed as Record<string, unknown>;
  const query =
    typeof o.query === "string" ? normalizeWebPublicQuery(o.query) : "";
  const destination = o.destination;
  const purpose = typeof o.purpose === "string" ? o.purpose.trim() : "";
  const projectId = typeof o.projectId === "string" ? o.projectId.trim() : "";
  const pilotId = typeof o.pilotId === "string" ? o.pilotId.trim() : "";
  const policyVersion =
    typeof o.policyVersion === "string" ? o.policyVersion.trim() : "";
  if (
    !query ||
    query.length < 3 ||
    destination !== WEB_PUBLIC_QUERY_DESTINATION ||
    !purpose ||
    !projectId ||
    !pilotId ||
    !policyVersion
  ) {
    return { ok: false, reasonCode: "EFFECT_CONDITIONS_INCOMPLETE" };
  }
  return {
    ok: true,
    payload: {
      query,
      destination: WEB_PUBLIC_QUERY_DESTINATION,
      purpose: purpose.slice(0, 200),
      projectId,
      pilotId,
      policyVersion,
    },
  };
}

type DecisionRow = {
  id: string;
  pilotId: string;
  kind: string;
  objectRef: string;
  state: string;
  effectConditions: string | null;
};

export type WebQueryAuthorityVerdict =
  | {
      allowed: true;
      decisionId: string;
      objectRef: string;
      query: string;
      source: "HUMAN_DECISION_RECORD";
    }
  | {
      allowed: false;
      reasonCode:
        | "PROJECT_REQUIRED"
        | "PARSE_NOT_AUTHORITY"
        | "POISON_OR_NON_DEDICATED"
        | "DECISION_NOT_FOUND"
        | "DECISION_NOT_APPLICABLE"
        | "PAYLOAD_MISMATCH"
        | "PILOT_MISMATCH"
        | "POLICY_VERSION_MISMATCH"
        | "EFFECT_CONDITIONS_INVALID"
        | "KIND_MISMATCH"
        | "REVOKED_OR_SUPERSEDED";
      reason: string;
      parsedQuery?: string;
      objectRef?: string;
    };

export function validateWebPublicQueryDecisionRow(
  row: DecisionRow,
  expected: {
    query: string;
    projectId: string;
    pilotId: string;
    policyVersion?: string;
    objectRef: string;
  },
): WebQueryAuthorityVerdict {
  const query = normalizeWebPublicQuery(expected.query);

  if (row.kind !== "RECORD_DECISION") {
    return {
      allowed: false,
      reasonCode: "KIND_MISMATCH",
      reason: `decision kind=${row.kind} (expected RECORD_DECISION)`,
      parsedQuery: query,
      objectRef: expected.objectRef,
    };
  }

  if (row.state !== "APPLICABLE") {
    return {
      allowed: false,
      reasonCode: "DECISION_NOT_APPLICABLE",
      reason: `decision state=${row.state}`,
      parsedQuery: query,
      objectRef: expected.objectRef,
    };
  }

  if (row.pilotId !== expected.pilotId) {
    return {
      allowed: false,
      reasonCode: "PILOT_MISMATCH",
      reason: "Decision pilot does not match requesting pilot",
      parsedQuery: query,
      objectRef: expected.objectRef,
    };
  }

  if (row.objectRef !== expected.objectRef) {
    return {
      allowed: false,
      reasonCode: "PAYLOAD_MISMATCH",
      reason: "Decision objectRef fingerprint does not match query payload",
      parsedQuery: query,
      objectRef: expected.objectRef,
    };
  }

  const ec = parseWebPublicQueryEffectConditions(row.effectConditions);
  if (!ec.ok) {
    return {
      allowed: false,
      reasonCode: "EFFECT_CONDITIONS_INVALID",
      reason: ec.reasonCode,
      parsedQuery: query,
      objectRef: expected.objectRef,
    };
  }

  if (ec.payload.projectId !== expected.projectId) {
    return {
      allowed: false,
      reasonCode: "PAYLOAD_MISMATCH",
      reason: "effectConditions.projectId does not match scope",
      parsedQuery: query,
      objectRef: expected.objectRef,
    };
  }

  if (ec.payload.pilotId !== expected.pilotId) {
    return {
      allowed: false,
      reasonCode: "PILOT_MISMATCH",
      reason: "effectConditions.pilotId does not match requesting pilot",
      parsedQuery: query,
      objectRef: expected.objectRef,
    };
  }

  if (ec.payload.query !== query) {
    return {
      allowed: false,
      reasonCode: "PAYLOAD_MISMATCH",
      reason: "effectConditions.query does not match authorized query",
      parsedQuery: query,
      objectRef: expected.objectRef,
    };
  }

  if (ec.payload.destination !== WEB_PUBLIC_QUERY_DESTINATION) {
    return {
      allowed: false,
      reasonCode: "PAYLOAD_MISMATCH",
      reason: "effectConditions.destination is not public_web_search",
      parsedQuery: query,
      objectRef: expected.objectRef,
    };
  }

  const expectedPolicy = (expected.policyVersion ?? "").trim();
  if (expectedPolicy && ec.payload.policyVersion !== expectedPolicy) {
    return {
      allowed: false,
      reasonCode: "POLICY_VERSION_MISMATCH",
      reason: "effectConditions.policyVersion does not match active policy",
      parsedQuery: query,
      objectRef: expected.objectRef,
    };
  }

  if (!ec.payload.purpose.trim()) {
    return {
      allowed: false,
      reasonCode: "EFFECT_CONDITIONS_INVALID",
      reason: "effectConditions.purpose missing",
      parsedQuery: query,
      objectRef: expected.objectRef,
    };
  }

  return {
    allowed: true,
    decisionId: row.id,
    objectRef: expected.objectRef,
    query,
    source: "HUMAN_DECISION_RECORD",
  };
}

/** Last-mile revocation / supersession proof before network egress. */
export async function assertWebPublicQueryDecisionEgressProof(
  decisionId: string,
  projectId: string,
): Promise<"ok" | "revoked_or_stale"> {
  const fresh = (
    await db
      .select({
        id: humanDecisions.id,
        state: humanDecisions.state,
        kind: humanDecisions.kind,
      })
      .from(humanDecisions)
      .where(
        and(
          eq(humanDecisions.id, decisionId),
          eq(humanDecisions.projectId, projectId),
        ),
      )
      .limit(1)
  )[0];
  if (!fresh || fresh.kind !== "RECORD_DECISION" || fresh.state !== "APPLICABLE") {
    return "revoked_or_stale";
  }

  const revoke = (
    await db
      .select({ id: humanDecisions.id })
      .from(humanDecisions)
      .where(
        and(
          eq(humanDecisions.projectId, projectId),
          eq(humanDecisions.state, "APPLICABLE"),
          eq(humanDecisions.kind, "REVOKE_DECISION"),
          eq(humanDecisions.revokesDecisionId, decisionId),
        ),
      )
      .limit(1)
  )[0];
  if (revoke) {
    return "revoked_or_stale";
  }

  return "ok";
}

async function loadWebPublicQueryDecisionRow(input: {
  projectId: string;
  pilotId: string;
  objectRef: string;
  decisionId?: string;
}): Promise<DecisionRow | undefined> {
  if (input.decisionId) {
    return (
      await db
        .select({
          id: humanDecisions.id,
          pilotId: humanDecisions.pilotId,
          kind: humanDecisions.kind,
          objectRef: humanDecisions.objectRef,
          state: humanDecisions.state,
          effectConditions: humanDecisions.effectConditions,
        })
        .from(humanDecisions)
        .where(
          and(
            eq(humanDecisions.id, input.decisionId),
            eq(humanDecisions.projectId, input.projectId),
          ),
        )
        .limit(1)
    )[0];
  }

  const rows = await db
    .select({
      id: humanDecisions.id,
      pilotId: humanDecisions.pilotId,
      kind: humanDecisions.kind,
      objectRef: humanDecisions.objectRef,
      state: humanDecisions.state,
      effectConditions: humanDecisions.effectConditions,
    })
    .from(humanDecisions)
    .where(
      and(
        eq(humanDecisions.projectId, input.projectId),
        eq(humanDecisions.objectRef, input.objectRef),
        eq(humanDecisions.kind, "RECORD_DECISION"),
        eq(humanDecisions.state, "APPLICABLE"),
      ),
    )
    .limit(8);

  return rows.find((r) => r.pilotId === input.pilotId);
}

/**
 * Re-verify a prior or explicit binding without re-parsing pilot AUTHORIZE text.
 * `decisionId` is required when reusing authority across turns.
 */
export async function reverifyWebPublicQueryAuthorityAtEgress(input: {
  query: string;
  projectId: string;
  pilotId: string;
  policyVersion?: string;
  decisionId?: string | null;
}): Promise<WebQueryAuthorityVerdict> {
  const projectId = input.projectId.trim();
  const query = normalizeWebPublicQuery(input.query);
  if (!projectId || !query) {
    return {
      allowed: false,
      reasonCode: "PROJECT_REQUIRED",
      reason: "Exceptional WEB authorization requires project-scoped HumanDecision (D6)",
      parsedQuery: query,
    };
  }

  const objectRef = buildWebPublicQueryObjectRef({ query, projectId });
  const decisionId = (input.decisionId ?? "").trim();
  if (!decisionId) {
    return {
      allowed: false,
      reasonCode: "DECISION_NOT_FOUND",
      reason:
        "Exceptional WEB egress requires durable decisionId reference (priorExactQueries alone insufficient)",
      parsedQuery: query,
      objectRef,
    };
  }

  const row = await loadWebPublicQueryDecisionRow({
    projectId,
    pilotId: input.pilotId,
    objectRef,
    decisionId,
  });

  if (!row) {
    return {
      allowed: false,
      reasonCode: "DECISION_NOT_FOUND",
      reason:
        "No APPLICABLE HumanDecision RECORD_DECISION for exact public query payload",
      parsedQuery: query,
      objectRef,
    };
  }

  const verdict = validateWebPublicQueryDecisionRow(row, {
    query,
    projectId,
    pilotId: input.pilotId,
    policyVersion: input.policyVersion,
    objectRef,
  });
  if (!verdict.allowed) {
    return verdict;
  }

  const egress = await assertWebPublicQueryDecisionEgressProof(verdict.decisionId, projectId);
  if (egress !== "ok") {
    return {
      allowed: false,
      reasonCode: "REVOKED_OR_SUPERSEDED",
      reason: "HumanDecision revoked or no longer APPLICABLE at egress",
      parsedQuery: query,
      objectRef,
    };
  }

  return verdict;
}

/**
 * Technical parse alone never grants egress. When projectId is present,
 * require an APPLICABLE HumanDecision RECORD_DECISION bound to the payload.
 */
export async function evaluateWebPublicQueryAuthority(input: {
  pilotText: string;
  projectId: string | null | undefined;
  pilotId: string;
  /** Optional explicit decision id (inspectable act already recorded). */
  decisionId?: string | null;
  policyVersion?: string;
}): Promise<WebQueryAuthorityVerdict> {
  const projectId = (input.projectId ?? "").trim();
  const parsed = extractPilotAuthorizedExactQueries(input.pilotText);
  const dedicated = isDedicatedAuthorizePublicQueryAct(input.pilotText);

  if (!dedicated || parsed.length === 0) {
    return {
      allowed: false,
      reasonCode: "POISON_OR_NON_DEDICATED",
      reason: "AUTHORIZE_PUBLIC_QUERY must be a dedicated Pilote act (parse ≠ D6)",
    };
  }

  const query = parsed[0]!;
  if (!projectId) {
    return {
      allowed: false,
      reasonCode: "PROJECT_REQUIRED",
      reason:
        "Exceptional WEB authorization requires project-scoped HumanDecision (D6)",
      parsedQuery: query,
    };
  }

  const objectRef = buildWebPublicQueryObjectRef({ query, projectId });
  const row = await loadWebPublicQueryDecisionRow({
    projectId,
    pilotId: input.pilotId,
    objectRef,
    decisionId: (input.decisionId ?? "").trim() || undefined,
  });

  if (!row) {
    return {
      allowed: false,
      reasonCode: "DECISION_NOT_FOUND",
      reason:
        "No APPLICABLE HumanDecision RECORD_DECISION for exact public query payload",
      parsedQuery: query,
      objectRef,
    };
  }

  const verdict = validateWebPublicQueryDecisionRow(row, {
    query,
    projectId,
    pilotId: input.pilotId,
    policyVersion: input.policyVersion,
    objectRef,
  });
  if (!verdict.allowed) {
    return verdict;
  }

  const egress = await assertWebPublicQueryDecisionEgressProof(verdict.decisionId, projectId);
  if (egress !== "ok") {
    return {
      allowed: false,
      reasonCode: "REVOKED_OR_SUPERSEDED",
      reason: "HumanDecision revoked or no longer APPLICABLE",
      parsedQuery: query,
      objectRef,
    };
  }

  return verdict;
}

/**
 * Promote parsed AUTHORIZE markers into exactQueries only when D6-bound
 * (or when caller explicitly opts into technical-parse-only for catalog-free
 * DEV harnesses that already isolated the project). Default: do not promote.
 */
export function promoteExactQueriesFromAuthority(input: {
  pilotText: string;
  authority: WebQueryAuthorityVerdict | null;
  /** DEV harness only — never product default. */
  allowTechnicalParseWithoutDecision?: boolean;
}): { exactQueries: string[]; limits: string[] } {
  const limits: string[] = [];
  const parsed = extractPilotAuthorizedExactQueries(input.pilotText);
  if (parsed.length === 0) {
    limits.push("AUTHORIZE_PARSE_EMPTY");
    return { exactQueries: [], limits };
  }

  if (input.authority?.allowed) {
    limits.push("WEB_QUERY_AUTHORITY_D6_BOUND");
    limits.push(`DECISION_${input.authority.decisionId}`);
    return {
      exactQueries: [input.authority.query],
      limits,
    };
  }

  if (input.allowTechnicalParseWithoutDecision) {
    limits.push("WEB_QUERY_TECHNICAL_PARSE_ONLY_DEV");
    limits.push("PARSE_NOT_D6_AUTHORITY");
    return { exactQueries: parsed, limits };
  }

  limits.push("PILOT_EXACT_PARSE_NOT_PROMOTED");
  limits.push(input.authority?.reasonCode ?? "PARSE_NOT_AUTHORITY");
  return { exactQueries: [], limits };
}