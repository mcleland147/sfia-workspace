/**
 * S4 — Exceptional public WEB query authority binding (D6 owner).
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

export type WebPublicQueryAuthorityPayload = {
  query: string;
  destination: "public_web_search";
  purpose: string;
  projectId: string;
  pilotId: string;
  policyVersion: string;
};

export function buildWebPublicQueryObjectRef(
  payload: Pick<WebPublicQueryAuthorityPayload, "query" | "projectId">,
): string {
  const fp = canonicalPayloadFingerprint({
    query: payload.query.replace(/\s+/g, " ").trim(),
    destination: "public_web_search",
    projectId: payload.projectId,
  });
  return `${WEB_PUBLIC_QUERY_OBJECT_PREFIX}${fp}`;
}

export function buildWebPublicQueryEffectConditions(
  payload: WebPublicQueryAuthorityPayload,
): string {
  const canonical = {
    query: payload.query.replace(/\s+/g, " ").trim(),
    destination: payload.destination,
    purpose: payload.purpose.slice(0, 200),
    projectId: payload.projectId,
    pilotId: payload.pilotId,
    policyVersion: payload.policyVersion,
  };
  return JSON.stringify(canonical);
}

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
        | "REVOKED_OR_SUPERSEDED";
      reason: string;
      parsedQuery?: string;
      objectRef?: string;
    };

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
    // Without project scope, D6 HumanDecision cannot bind — refuse exceptional auth.
    // Catalog / independently admitted provenance remains the nominal path.
    return {
      allowed: false,
      reasonCode: "PROJECT_REQUIRED",
      reason:
        "Exceptional WEB authorization requires project-scoped HumanDecision (D6)",
      parsedQuery: query,
    };
  }

  const objectRef = buildWebPublicQueryObjectRef({ query, projectId });
  const decisionId = (input.decisionId ?? "").trim();

  let row:
    | {
        id: string;
        pilotId: string;
        kind: string;
        objectRef: string;
        state: string;
        effectConditions: string | null;
      }
    | undefined;

  if (decisionId) {
    row = (
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
            eq(humanDecisions.id, decisionId),
            eq(humanDecisions.projectId, projectId),
          ),
        )
        .limit(1)
    )[0];
  } else {
    // Lookup latest APPLICABLE RECORD_DECISION for this objectRef + pilot.
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
          eq(humanDecisions.projectId, projectId),
          eq(humanDecisions.objectRef, objectRef),
          eq(humanDecisions.state, "APPLICABLE"),
        ),
      )
      .limit(8);
    row = rows.find((r) => r.pilotId === input.pilotId && r.kind === "RECORD_DECISION");
  }

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

  if (row.state !== "APPLICABLE") {
    return {
      allowed: false,
      reasonCode: "REVOKED_OR_SUPERSEDED",
      reason: `decision state=${row.state}`,
      parsedQuery: query,
      objectRef,
    };
  }

  if (row.pilotId !== input.pilotId) {
    return {
      allowed: false,
      reasonCode: "PILOT_MISMATCH",
      reason: "Decision pilot does not match requesting pilot",
      parsedQuery: query,
      objectRef,
    };
  }

  if (row.objectRef !== objectRef) {
    return {
      allowed: false,
      reasonCode: "PAYLOAD_MISMATCH",
      reason: "Decision objectRef fingerprint does not match query payload",
      parsedQuery: query,
      objectRef,
    };
  }

  if (row.effectConditions) {
    try {
      const parsedEc = JSON.parse(row.effectConditions) as { query?: string };
      const ecQuery = (parsedEc.query ?? "").replace(/\s+/g, " ").trim();
      if (ecQuery && ecQuery !== query.replace(/\s+/g, " ").trim()) {
        return {
          allowed: false,
          reasonCode: "PAYLOAD_MISMATCH",
          reason: "effectConditions.query does not match authorized query",
          parsedQuery: query,
          objectRef,
        };
      }
    } catch {
      /* effectConditions optional parse — objectRef remains binding */
    }
  }

  return {
    allowed: true,
    decisionId: row.id,
    objectRef,
    query,
    source: "HUMAN_DECISION_RECORD",
  };
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
