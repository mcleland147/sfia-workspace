/**
 * S5 — Exceptional public WEB query authority binding (D6 owner).
 *
 * Regex AUTHORIZE_PUBLIC_QUERY parse is a technical extractor only.
 * Egress admission for non-catalog queries requires an inspectable authority
 * binding when a project scope exists — never a parallel decision register.
 *
 * Real path: inspect (candidate) → apply (RECORD_DECISION + effectConditions)
 * → reverify at egress (including checkpoint reuse). Parse alone never grants.
 *
 * Uses existing HumanDecision kind RECORD_DECISION (no schema migration).
 * Extending DECISION_KINDS for a dedicated WEB kind requires Morris GO.
 */

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { humanDecisions, projects } from "@/db/schema";
import { insertHumanDecision } from "@/domains/decisions/service";
import { canonicalPayloadFingerprint } from "./provider-emission-frontier";
import {
  extractPilotAuthorizedExactQueries,
  isDedicatedAuthorizePublicQueryAct,
} from "./public-web-registry";

export const WEB_PUBLIC_QUERY_OBJECT_PREFIX = "web.public_query:" as const;
export const WEB_PUBLIC_QUERY_DESTINATION = "public_web_search" as const;
/** Default exceptional WEB authority TTL when caller does not override. */
export const WEB_PUBLIC_QUERY_DEFAULT_TTL_MS = 24 * 60 * 60 * 1000;

export type WebPublicQueryAuthorityPayload = {
  query: string;
  destination: typeof WEB_PUBLIC_QUERY_DESTINATION;
  purpose: string;
  projectId: string;
  pilotId: string;
  policyVersion: string;
  /** ISO-8601 expiry — required; past ⇒ deny at validate/egress. */
  expiresAt: string;
};

export type WebPublicQueryInspection = {
  objectRef: string;
  effectConditions: string;
  payload: WebPublicQueryAuthorityPayload;
  statement: string;
  /** Fingerprint of the inspectable mandate (must match at apply). */
  inspectedFingerprint: string;
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
    expiresAt: payload.expiresAt,
  };
  return JSON.stringify(canonical);
}

export function fingerprintWebPublicQueryInspection(
  effectConditions: string,
  objectRef: string,
): string {
  return canonicalPayloadFingerprint({
    kind: "WEB_PUBLIC_QUERY_INSPECTION",
    objectRef,
    effectConditions,
  });
}

export type ParseEffectConditionsResult =
  | { ok: true; payload: WebPublicQueryAuthorityPayload }
  | {
      ok: false;
      reasonCode:
        | "EFFECT_CONDITIONS_MISSING"
        | "EFFECT_CONDITIONS_MALFORMED"
        | "EFFECT_CONDITIONS_INCOMPLETE";
    };

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
  const expiresAt = typeof o.expiresAt === "string" ? o.expiresAt.trim() : "";
  if (
    !query ||
    query.length < 3 ||
    destination !== WEB_PUBLIC_QUERY_DESTINATION ||
    !purpose ||
    !projectId ||
    !pilotId ||
    !policyVersion ||
    !expiresAt
  ) {
    return { ok: false, reasonCode: "EFFECT_CONDITIONS_INCOMPLETE" };
  }
  const expMs = Date.parse(expiresAt);
  if (!Number.isFinite(expMs)) {
    return { ok: false, reasonCode: "EFFECT_CONDITIONS_MALFORMED" };
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
      expiresAt: new Date(expMs).toISOString(),
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
        | "POLICY_VERSION_REQUIRED"
        | "EFFECT_CONDITIONS_INVALID"
        | "KIND_MISMATCH"
        | "REVOKED_OR_SUPERSEDED"
        | "EXPIRED"
        | "CURRENT_RIGHTS_DENIED"
        | "PURPOSE_REQUIRED"
        | "INSPECTION_REQUIRED"
        | "INSPECTION_FINGERPRINT_MISMATCH"
        | "NOT_CONFIRMED";
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
    purpose?: string;
    now?: number;
  },
): WebQueryAuthorityVerdict {
  const query = normalizeWebPublicQuery(expected.query);
  const now = expected.now ?? Date.now();

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

  if (!ec.payload.purpose.trim()) {
    return {
      allowed: false,
      reasonCode: "PURPOSE_REQUIRED",
      reason: "effectConditions.purpose missing",
      parsedQuery: query,
      objectRef: expected.objectRef,
    };
  }

  const expectedPurpose = (expected.purpose ?? "").trim();
  if (expectedPurpose && ec.payload.purpose !== expectedPurpose.slice(0, 200)) {
    return {
      allowed: false,
      reasonCode: "PAYLOAD_MISMATCH",
      reason: "effectConditions.purpose does not match authorized purpose",
      parsedQuery: query,
      objectRef: expected.objectRef,
    };
  }

  const expectedPolicy = (expected.policyVersion ?? "").trim();
  if (!expectedPolicy) {
    return {
      allowed: false,
      reasonCode: "POLICY_VERSION_REQUIRED",
      reason: "Active policyVersion required to apply WEB D6 authority",
      parsedQuery: query,
      objectRef: expected.objectRef,
    };
  }
  if (ec.payload.policyVersion !== expectedPolicy) {
    return {
      allowed: false,
      reasonCode: "POLICY_VERSION_MISMATCH",
      reason: "effectConditions.policyVersion does not match active policy",
      parsedQuery: query,
      objectRef: expected.objectRef,
    };
  }

  const expMs = Date.parse(ec.payload.expiresAt);
  if (!Number.isFinite(expMs) || expMs <= now) {
    return {
      allowed: false,
      reasonCode: "EXPIRED",
      reason: "WEB public query authority expired",
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

/**
 * Inspectable candidate — no DB write. Pilot must confirm inspectedFingerprint
 * before applyWebPublicQueryAuthorityDecision.
 */
export function inspectWebPublicQueryAuthorityCandidate(input: {
  pilotText: string;
  projectId: string;
  pilotId: string;
  purpose: string;
  policyVersion: string;
  /** Absolute expiry; default now+24h when omitted. */
  expiresAt?: string;
  ttlMs?: number;
  now?: number;
}):
  | { ok: true; inspection: WebPublicQueryInspection }
  | { ok: false; reasonCode: string; reason: string; parsedQuery?: string } {
  const projectId = input.projectId.trim();
  const pilotId = input.pilotId.trim();
  const purpose = input.purpose.trim().slice(0, 200);
  const policyVersion = input.policyVersion.trim();
  const dedicated = isDedicatedAuthorizePublicQueryAct(input.pilotText);
  const parsed = extractPilotAuthorizedExactQueries(input.pilotText);

  if (!dedicated || parsed.length === 0) {
    return {
      ok: false,
      reasonCode: "POISON_OR_NON_DEDICATED",
      reason: "AUTHORIZE_PUBLIC_QUERY must be a dedicated Pilote act (parse ≠ D6)",
    };
  }
  if (!projectId) {
    return {
      ok: false,
      reasonCode: "PROJECT_REQUIRED",
      reason: "Exceptional WEB authorization requires project scope",
      parsedQuery: parsed[0],
    };
  }
  if (!pilotId) {
    return {
      ok: false,
      reasonCode: "PILOT_MISMATCH",
      reason: "Exceptional WEB authorization requires requesting pilot",
      parsedQuery: parsed[0],
    };
  }
  if (!purpose) {
    return {
      ok: false,
      reasonCode: "PURPOSE_REQUIRED",
      reason: "Exceptional WEB authorization requires an explicit purpose",
      parsedQuery: parsed[0],
    };
  }
  if (!policyVersion) {
    return {
      ok: false,
      reasonCode: "POLICY_VERSION_REQUIRED",
      reason: "Exceptional WEB authorization requires active policyVersion",
      parsedQuery: parsed[0],
    };
  }

  const now = input.now ?? Date.now();
  let expiresAt = (input.expiresAt ?? "").trim();
  if (!expiresAt) {
    const ttl =
      typeof input.ttlMs === "number" &&
      Number.isFinite(input.ttlMs) &&
      input.ttlMs > 0
        ? input.ttlMs
        : WEB_PUBLIC_QUERY_DEFAULT_TTL_MS;
    expiresAt = new Date(now + ttl).toISOString();
  } else {
    const expMs = Date.parse(expiresAt);
    if (!Number.isFinite(expMs) || expMs <= now) {
      return {
        ok: false,
        reasonCode: "EXPIRED",
        reason: "expiresAt must be a future ISO timestamp",
        parsedQuery: parsed[0],
      };
    }
    expiresAt = new Date(expMs).toISOString();
  }

  const query = parsed[0]!;
  const payload: WebPublicQueryAuthorityPayload = {
    query,
    destination: WEB_PUBLIC_QUERY_DESTINATION,
    purpose,
    projectId,
    pilotId,
    policyVersion,
    expiresAt,
  };
  const objectRef = buildWebPublicQueryObjectRef(payload);
  const effectConditions = buildWebPublicQueryEffectConditions(payload);
  const inspectedFingerprint = fingerprintWebPublicQueryInspection(
    effectConditions,
    objectRef,
  );
  const statement = `AUTHORIZE_PUBLIC_QUERY — ${purpose}`.slice(0, 500);

  return {
    ok: true,
    inspection: {
      objectRef,
      effectConditions,
      payload,
      statement,
      inspectedFingerprint,
    },
  };
}

/**
 * Persist RECORD_DECISION after the Pilote confirms the inspected fingerprint.
 * Does not perform egress — caller must still reverify at the exit point.
 */
export async function applyWebPublicQueryAuthorityDecision(input: {
  pilotId: string;
  projectId: string;
  inspection: WebPublicQueryInspection;
  inspectedFingerprint: string;
  confirmed: boolean;
  sourceRef: string;
  statement?: string;
}): Promise<WebQueryAuthorityVerdict> {
  if (!input.confirmed) {
    return {
      allowed: false,
      reasonCode: "NOT_CONFIRMED",
      reason: "WEB D6 apply requires explicit confirmation of inspected mandate",
      objectRef: input.inspection.objectRef,
      parsedQuery: input.inspection.payload.query,
    };
  }
  if (
    input.inspectedFingerprint !== input.inspection.inspectedFingerprint
  ) {
    return {
      allowed: false,
      reasonCode: "INSPECTION_FINGERPRINT_MISMATCH",
      reason: "Inspected fingerprint does not match candidate — re-inspect",
      objectRef: input.inspection.objectRef,
      parsedQuery: input.inspection.payload.query,
    };
  }

  const parsed = parseWebPublicQueryEffectConditions(
    input.inspection.effectConditions,
  );
  if (!parsed.ok) {
    return {
      allowed: false,
      reasonCode: "EFFECT_CONDITIONS_INVALID",
      reason: parsed.reasonCode,
      objectRef: input.inspection.objectRef,
    };
  }
  if (
    parsed.payload.projectId !== input.projectId.trim() ||
    parsed.payload.pilotId !== input.pilotId.trim()
  ) {
    return {
      allowed: false,
      reasonCode: "PAYLOAD_MISMATCH",
      reason: "Inspection payload does not match apply identity/scope",
      objectRef: input.inspection.objectRef,
    };
  }

  const rights = await assertWebPublicQueryCurrentRights({
    projectId: input.projectId,
    pilotId: input.pilotId,
  });
  if (rights !== "ok") {
    return {
      allowed: false,
      reasonCode: "CURRENT_RIGHTS_DENIED",
      reason: "Pilot no longer owns project — WEB D6 apply refused",
      objectRef: input.inspection.objectRef,
      parsedQuery: parsed.payload.query,
    };
  }

  const decisionId = await db.transaction(async (tx) =>
    insertHumanDecision(tx, {
      projectId: input.projectId.trim(),
      pilotId: input.pilotId.trim(),
      sourceKind: "WEB_PUBLIC_QUERY",
      sourceRef: input.sourceRef.slice(0, 200),
      kind: "RECORD_DECISION",
      objectRef: input.inspection.objectRef,
      statement: (input.statement ?? input.inspection.statement).slice(0, 500),
      effectConditions: input.inspection.effectConditions,
    }),
  );

  return {
    allowed: true,
    decisionId,
    objectRef: input.inspection.objectRef,
    query: parsed.payload.query,
    source: "HUMAN_DECISION_RECORD",
  };
}

/** Current project ownership — rights may change after the decision was recorded. */
export async function assertWebPublicQueryCurrentRights(input: {
  projectId: string;
  pilotId: string;
}): Promise<"ok" | "denied"> {
  const projectId = input.projectId.trim();
  const pilotId = input.pilotId.trim();
  if (!projectId || !pilotId) return "denied";
  const row = (
    await db
      .select({ id: projects.id, ownerPilotId: projects.ownerPilotId })
      .from(projects)
      .where(eq(projects.id, projectId))
      .limit(1)
  )[0];
  if (!row || row.ownerPilotId !== pilotId) return "denied";
  return "ok";
}

/** Last-mile revocation / supersession / current-rights proof before network egress. */
export async function assertWebPublicQueryDecisionEgressProof(
  decisionId: string,
  projectId: string,
  pilotId: string,
): Promise<"ok" | "revoked_or_stale" | "current_rights_denied"> {
  const fresh = (
    await db
      .select({
        id: humanDecisions.id,
        state: humanDecisions.state,
        kind: humanDecisions.kind,
        pilotId: humanDecisions.pilotId,
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
  if (
    !fresh ||
    fresh.kind !== "RECORD_DECISION" ||
    fresh.state !== "APPLICABLE" ||
    fresh.pilotId !== pilotId
  ) {
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

  const rights = await assertWebPublicQueryCurrentRights({ projectId, pilotId });
  if (rights !== "ok") {
    return "current_rights_denied";
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
 * `decisionId` is required when reusing authority across turns / checkpoints.
 */
export async function reverifyWebPublicQueryAuthorityAtEgress(input: {
  query: string;
  projectId: string;
  pilotId: string;
  policyVersion?: string;
  decisionId?: string | null;
  purpose?: string;
  now?: number;
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

  const policyVersion = (input.policyVersion ?? "").trim();
  if (!policyVersion) {
    return {
      allowed: false,
      reasonCode: "POLICY_VERSION_REQUIRED",
      reason: "Active policyVersion required at WEB egress reverify",
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
    policyVersion,
    purpose: input.purpose,
    objectRef,
    now: input.now,
  });
  if (!verdict.allowed) {
    return verdict;
  }

  const egress = await assertWebPublicQueryDecisionEgressProof(
    verdict.decisionId,
    projectId,
    input.pilotId,
  );
  if (egress === "current_rights_denied") {
    return {
      allowed: false,
      reasonCode: "CURRENT_RIGHTS_DENIED",
      reason: "Pilot project ownership withdrawn at egress",
      parsedQuery: query,
      objectRef,
    };
  }
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
 * Prefer inspect → apply for new bindings; this path only evaluates existing acts.
 */
export async function evaluateWebPublicQueryAuthority(input: {
  pilotText: string;
  projectId: string | null | undefined;
  pilotId: string;
  /** Optional explicit decision id (inspectable act already recorded). */
  decisionId?: string | null;
  policyVersion?: string;
  purpose?: string;
  now?: number;
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

  const policyVersion = (input.policyVersion ?? "").trim();
  if (!policyVersion) {
    return {
      allowed: false,
      reasonCode: "POLICY_VERSION_REQUIRED",
      reason: "Active policyVersion required to evaluate WEB D6 authority",
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
        "No APPLICABLE HumanDecision RECORD_DECISION for exact public query payload — inspect then apply first",
      parsedQuery: query,
      objectRef,
    };
  }

  const verdict = validateWebPublicQueryDecisionRow(row, {
    query,
    projectId,
    pilotId: input.pilotId,
    policyVersion,
    purpose: input.purpose,
    objectRef,
    now: input.now,
  });
  if (!verdict.allowed) {
    return verdict;
  }

  const egress = await assertWebPublicQueryDecisionEgressProof(
    verdict.decisionId,
    projectId,
    input.pilotId,
  );
  if (egress === "current_rights_denied") {
    return {
      allowed: false,
      reasonCode: "CURRENT_RIGHTS_DENIED",
      reason: "Pilot project ownership withdrawn",
      parsedQuery: query,
      objectRef,
    };
  }
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
