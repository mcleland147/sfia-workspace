/**
 * C22 — server-side authorization of public web query provenance.
 *
 * Nora may *propose* a search need. She cannot grant herself a public
 * authorization. Free-form publicTopic / short unmarked facts are refused.
 *
 * Admissible paths only:
 * 1. EXPLICIT_AUTHORIZED_EXACT — exact string on the turn allowlist (Pilote/server).
 * 2. REGISTERED_PUBLIC_COMPOSITION — server composes from turnPublicFacts /
 *    turnPublicTopics whose public provenance was registered before the call.
 *
 * Empty public registry ⇒ no arbitrary fact accepted.
 * Lexical classifiers / length / field name are NOT confidentiality guarantees.
 */

import { sanitizePublicWebQuery } from "./web-search-sanitize";

export type WebQueryProvenance =
  | "EXPLICIT_AUTHORIZED_EXACT"
  | "REGISTERED_PUBLIC_COMPOSITION"
  | "DENIED";

export type AuthorizePublicWebQueryInput = {
  /**
   * Proposed topic — accepted only when it equals a registered public topic
   * value or an exact allowlisted query. Never sufficient as free-form text.
   */
  publicTopic?: string | null;
  /** Optional topic id resolved via turnPublicTopics registry. */
  publicTopicRef?: string | null;
  /** Facts requested — every entry MUST already be in turnPublicFacts. */
  authorizedPublicFacts?: string[] | null;
  /** Server-registered PUBLIC facts for this turn (empty ⇒ no fact path). */
  turnPublicFacts?: string[] | null;
  /**
   * Server registry: topicRef → exact public query string already proven public.
   */
  turnPublicTopics?: Record<string, string> | null;
  /**
   * Exact query the Pilote/server explicitly authorized for this turn.
   * Only accepted when present in turnAuthorizedExactQueries.
   */
  explicitlyAuthorizedExactQuery?: string | null;
  turnAuthorizedExactQueries?: string[] | null;
  /**
   * Legacy free-form — refused unless it equals an explicitly authorized exact query.
   */
  rawQuery?: string | null;
  privateContextMarkers?: string[] | null;
};

export type AuthorizePublicWebQueryResult = {
  ok: boolean;
  authorizedQuery: string;
  provenance: WebQueryProvenance;
  deniedReason?: string;
  redactions: string[];
};

function normalizeFact(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

function containsMarker(hay: string, markers: string[]): string | null {
  const lower = hay.toLowerCase();
  for (const m of markers) {
    const t = m.trim();
    if (t.length >= 4 && lower.includes(t.toLowerCase())) return t;
  }
  return null;
}

function deny(
  reason: string,
  redactions: string[] = [],
): AuthorizePublicWebQueryResult {
  return {
    ok: false,
    authorizedQuery: "",
    provenance: "DENIED",
    deniedReason: reason,
    redactions,
  };
}

function admitExact(
  exact: string,
  markers: string[],
  provenance: Extract<
    WebQueryProvenance,
    "EXPLICIT_AUTHORIZED_EXACT" | "REGISTERED_PUBLIC_COMPOSITION"
  >,
): AuthorizePublicWebQueryResult {
  const sanitized = sanitizePublicWebQuery(exact);
  if (!sanitized.ok) {
    return deny(sanitized.blockedReason ?? "SANITIZE_BLOCKED", sanitized.redactions);
  }
  if (containsMarker(sanitized.query, markers)) {
    return deny("PRIVATE_MARKER_IN_AUTHORIZED_QUERY", ["PRIVATE_LEAK_BLOCKED"]);
  }
  return {
    ok: true,
    authorizedQuery: sanitized.query,
    provenance,
    redactions: sanitized.redactions,
  };
}

/**
 * Decide the exact outbound query string the frontier may emit.
 * Does not call the network. Does not log private markers in denial reasons.
 */
export function authorizePublicWebQuery(
  input: AuthorizePublicWebQueryInput,
): AuthorizePublicWebQueryResult {
  const markers = (input.privateContextMarkers ?? []).filter(Boolean);
  const turnFacts = (input.turnPublicFacts ?? []).map(normalizeFact).filter(Boolean);
  const turnExact = (input.turnAuthorizedExactQueries ?? [])
    .map(normalizeFact)
    .filter(Boolean);
  const topics = input.turnPublicTopics ?? {};

  const explicit = normalizeFact(input.explicitlyAuthorizedExactQuery ?? "");
  if (explicit) {
    if (!turnExact.includes(explicit)) {
      return deny("EXACT_QUERY_NOT_IN_TURN_ALLOWLIST");
    }
    return admitExact(explicit, markers, "EXPLICIT_AUTHORIZED_EXACT");
  }

  // Legacy rawQuery alone — only if exact-allowlisted.
  const raw = normalizeFact(input.rawQuery ?? "");
  if (raw) {
    if (turnExact.includes(raw)) {
      return admitExact(raw, markers, "EXPLICIT_AUTHORIZED_EXACT");
    }
    // Never accept rawQuery as publicTopic substitute.
    if (!input.publicTopic?.trim() && !input.publicTopicRef?.trim()) {
      return deny(
        "PROVENANCE_REQUIRED — free-form rawQuery without exact allowlist",
      );
    }
  }

  // Resolve topic via registry ref first (server-controlled mapping).
  const topicRef = (input.publicTopicRef ?? "").trim();
  let registeredTopic: string | null = null;
  if (topicRef) {
    const mapped = topics[topicRef];
    if (!mapped || !normalizeFact(mapped)) {
      return deny("PUBLIC_TOPIC_REF_UNKNOWN");
    }
    registeredTopic = normalizeFact(mapped);
  }

  const proposedTopic = normalizeFact(input.publicTopic ?? "");
  if (proposedTopic) {
    // Free-form topic is refused unless it matches an already-authorized exact
    // or a registered public topic *value* (not a self-attested string).
    const inExact = turnExact.includes(proposedTopic);
    const inRegisteredValues = Object.values(topics)
      .map(normalizeFact)
      .includes(proposedTopic);
    const inFacts = turnFacts.includes(proposedTopic);
    if (!inExact && !inRegisteredValues && !inFacts) {
      return deny(
        "PROVENANCE_NOT_ESTABLISHED — publicTopic free-form refused without registry/allowlist",
      );
    }
    if (!registeredTopic) {
      registeredTopic = proposedTopic;
    } else if (registeredTopic !== proposedTopic) {
      return deny("PUBLIC_TOPIC_REF_MISMATCH");
    }
  }

  const requestedFacts = (input.authorizedPublicFacts ?? [])
    .map(normalizeFact)
    .filter(Boolean);
  if (requestedFacts.length > 0) {
    if (turnFacts.length === 0) {
      return deny(
        "PUBLIC_REGISTRY_EMPTY — no arbitrary fact accepted without registered public facts",
      );
    }
    for (const f of requestedFacts) {
      if (!turnFacts.includes(f)) {
        return deny("PUBLIC_FACT_NOT_REGISTERED_FOR_TURN");
      }
    }
  }

  if (!registeredTopic && requestedFacts.length === 0) {
    return deny("PUBLIC_TOPIC_OR_REGISTERED_FACTS_REQUIRED");
  }

  const composed = [registeredTopic, ...requestedFacts]
    .filter(Boolean)
    .join(" ")
    .slice(0, 400);
  if (!composed || composed.length < 3) {
    return deny("COMPOSED_QUERY_EMPTY");
  }

  // If composition equals an exact allowlist entry, label as explicit.
  if (turnExact.includes(composed)) {
    return admitExact(composed, markers, "EXPLICIT_AUTHORIZED_EXACT");
  }

  return admitExact(composed, markers, "REGISTERED_PUBLIC_COMPOSITION");
}
