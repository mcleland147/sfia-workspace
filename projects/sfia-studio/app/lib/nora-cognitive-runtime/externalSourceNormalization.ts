/**
 * MW6-S02 — Normalize provider / fixture source observations into the
 * source-neutral contract (search ≠ read, partiality, freshness honesty).
 *
 * Reuses MW4 coverage honesty vocabulary; does not invent a second partiality engine.
 */

import {
  assertExternalSourceHasZeroAuthority,
  buildAuthorityIsolationDisclosure,
  detectAuthorityEscalationAttempts,
} from "./externalSourceAuthority";
import type {
  SourceAccessState,
  SourceCoverageKind,
  SourceFreshnessState,
  SourceObservationFact,
  SourceOperationKind,
  SourceProviderId,
  SourceStrategyDecision,
} from "./sourceIntelligenceContract";

/** Minimal hosted-tool call shape from Agents SDK / deterministic fixture. */
export type HostedWebSearchCallLike = {
  type?: string;
  name?: string;
  status?: string | null;
  output?: unknown;
  providerData?: Record<string, unknown> | null;
  /** Optional hostile / snippet text accompanying the observation (fixture). */
  observedText?: string | null;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

function mapAccessState(status: string | null | undefined): SourceAccessState {
  const s = (status ?? "").toLowerCase();
  if (s === "failed") return "failed";
  if (s === "denied") return "denied";
  if (s === "unavailable") return "unavailable";
  if (s === "in_progress" || s === "searching") return "partial";
  if (s === "completed" || s === "succeeded") return "succeeded";
  if (!s) return "absent";
  return "partial";
}

function mapOperation(actionType: string | null | undefined): SourceOperationKind {
  switch ((actionType ?? "").toLowerCase()) {
    case "search":
      return "search";
    case "open_page":
      return "open_page";
    case "find_in_page":
    case "find":
      return "find_in_page";
    default:
      return "unknown";
  }
}

/**
 * Hard MW6-S02 rule: search metadata alone cannot be coverage=full.
 * open_page / find_in_page without full-content proof remain partial.
 */
export function coverageForExternalOperation(
  operation: SourceOperationKind,
  access: SourceAccessState,
): SourceCoverageKind {
  if (access === "failed") return "failed";
  if (access === "denied") return "denied";
  if (access === "unavailable") return "absent";
  if (access === "absent") return "absent";
  if (operation === "search") return "search_discovery";
  if (operation === "open_page" || operation === "find_in_page") return "partial";
  if (operation === "read") return "partial"; // external read completeness not proven here
  return "partial";
}

/**
 * Freshness honesty: a completed web search does NOT imply freshness=observed
 * unless a supportable timestamp is present.
 */
export function freshnessForExternalObservation(input: {
  observedAt?: string | null;
  stale?: boolean;
}): SourceFreshnessState {
  if (input.stale === true) return "stale";
  if (input.observedAt && input.observedAt.trim()) return "observed";
  return "unknown";
}

function extractAction(providerData: Record<string, unknown> | null): {
  type: string | null;
  query?: string;
  url?: string;
  sources: Array<{ url: string; title?: string }>;
} {
  const action = asRecord(providerData?.action);
  if (!action) {
    return { type: null, sources: [] };
  }
  const type = typeof action.type === "string" ? action.type : null;
  const query =
    typeof action.query === "string"
      ? action.query
      : Array.isArray(action.queries) && typeof action.queries[0] === "string"
        ? String(action.queries[0])
        : undefined;
  const url = typeof action.url === "string" ? action.url : undefined;
  const sourcesRaw = Array.isArray(action.sources) ? action.sources : [];
  const sources: Array<{ url: string; title?: string }> = [];
  for (const s of sourcesRaw) {
    const rec = asRecord(s);
    if (!rec) continue;
    const u = typeof rec.url === "string" ? rec.url.trim() : "";
    if (!u) continue;
    const title = typeof rec.title === "string" ? rec.title : undefined;
    sources.push({ url: u, title });
  }
  return { type, query, url, sources };
}

/**
 * Normalize one hosted web_search / fixture call into observation fact(s).
 * Never fabricates URLs/titles not present in the observation.
 */
export function normalizeHostedWebSearchCall(
  call: HostedWebSearchCallLike,
  opts?: {
    provider?: SourceProviderId;
    nowIso?: string | null;
    stale?: boolean;
  },
): SourceObservationFact[] {
  const name = String(call.name ?? "");
  const pd = asRecord(call.providerData) ?? {};
  const isWebSearch =
    name === "web_search" ||
    name === "web_search_call" ||
    name === "web_search_preview" ||
    pd.type === "web_search_call" ||
    pd.type === "web_search" ||
    pd.type === "web_search_preview";

  // CR-10 — positive Web Search identity is mandatory.
  // Generic hosted_tool_call without Web Search identity → no Web Search facts.
  if (!isWebSearch) {
    return [];
  }

  const access = mapAccessState(call.status ?? null);
  const action = extractAction(pd);
  const operation = mapOperation(action.type);
  const provider: SourceProviderId =
    opts?.provider ??
    (call.providerData || call.name
      ? "openai_hosted_web_search"
      : "deterministic_fixture");

  const escalation = detectAuthorityEscalationAttempts(call.observedText);
  assertExternalSourceHasZeroAuthority(escalation);
  const observedText =
    typeof call.observedText === "string" && call.observedText.trim()
      ? call.observedText.trim()
      : undefined;

  const freshness = freshnessForExternalObservation({
    observedAt: opts?.nowIso,
    stale: opts?.stale,
  });

  const baseMeta = {
    status: call.status ?? null,
    actionType: action.type as string | null,
    name,
    ...(observedText ? { observedText } : {}),
  };
  // Failed / unavailable / absent → single fail-closed fact, no invented sources.
  if (
    access === "failed" ||
    access === "denied" ||
    access === "unavailable" ||
    access === "absent"
  ) {
    return [
      {
        sourceClass: "web",
        sourceKind: "web",
        operationKind: operation === "unknown" ? "unavailable" : operation,
        provider,
        provenanceState:
          provider === "deterministic_fixture"
            ? "fixture_observed"
            : "provider_observed",
        freshnessState: freshness,
        freshnessObservedAt:
          freshness === "observed" ? opts?.nowIso ?? undefined : undefined,
        coverage: coverageForExternalOperation(operation, access),
        accessState: access,
        nonAuthoritative: true,
        authorityEscalationAttempts: escalation,
        providerMetadata: { ...baseMeta },
      },
    ];
  }

  const facts: SourceObservationFact[] = [];

  if (action.sources.length > 0) {
    for (const src of action.sources) {
      facts.push({
        sourceClass: "web",
        sourceKind: "web",
        operationKind: operation === "unknown" ? "search" : operation,
        provider,
        sourceIdentity: src.url,
        url: src.url,
        title: src.title,
        query: action.query,
        provenanceState:
          provider === "deterministic_fixture"
            ? "fixture_observed"
            : "provider_observed",
        freshnessState: freshness,
        freshnessObservedAt:
          freshness === "observed" ? opts?.nowIso ?? undefined : undefined,
        coverage: coverageForExternalOperation(
          operation === "unknown" ? "search" : operation,
          access === "succeeded" && operation === "search" ? "succeeded" : access,
        ),
        accessState: access,
        nonAuthoritative: true,
        authorityEscalationAttempts: escalation,
        providerMetadata: { ...baseMeta },
      });
    }
  } else if (action.url) {
    facts.push({
      sourceClass: "web",
      sourceKind: "web",
      operationKind: operation === "unknown" ? "open_page" : operation,
      provider,
      sourceIdentity: action.url,
      url: action.url,
      query: action.query,
      provenanceState:
        provider === "deterministic_fixture"
          ? "fixture_observed"
          : "provider_observed",
      freshnessState: freshness,
      freshnessObservedAt:
        freshness === "observed" ? opts?.nowIso ?? undefined : undefined,
      coverage: coverageForExternalOperation(
        operation === "unknown" ? "open_page" : operation,
        access,
      ),
      accessState: access,
      nonAuthoritative: true,
      authorityEscalationAttempts: escalation,
      providerMetadata: { ...baseMeta },
    });
  } else {
    // Completed search with no observable sources — discovery incomplete, not verified read.
    facts.push({
      sourceClass: "web",
      sourceKind: "web",
      operationKind: operation === "unknown" ? "search" : operation,
      provider,
      query: action.query,
      provenanceState:
        provider === "deterministic_fixture"
          ? "fixture_observed"
          : "provider_observed",
      freshnessState: freshness,
      freshnessObservedAt:
        freshness === "observed" ? opts?.nowIso ?? undefined : undefined,
      coverage: "search_discovery",
      accessState: access === "succeeded" ? "partial" : access,
      nonAuthoritative: true,
      authorityEscalationAttempts: escalation,
      providerMetadata: {
        ...baseMeta,
        sourcesAbsent: true,
      },
    });
  }

  return facts;
}

/**
 * Anti-fabrication: missing/failed access yields no invented URLs/citations.
 */
export function observationsRefuseFabrication(
  facts: readonly SourceObservationFact[],
): boolean {
  for (const f of facts) {
    if (
      (f.accessState === "failed" ||
        f.accessState === "denied" ||
        f.accessState === "unavailable" ||
        f.accessState === "absent") &&
      (f.url || f.title)
    ) {
      return false;
    }
    if (f.coverage === "full" && f.operationKind === "search") {
      return false;
    }
  }
  return true;
}

export function buildSourceObservationDisclosure(
  strategy: SourceStrategyDecision,
  observations: readonly SourceObservationFact[],
): string {
  const lines: string[] = [
    "=== SOURCE OBSERVATIONS (MW6-S02) ===",
    "search hit ≠ verified read; failed/partial/unavailable remain explicit; freshness unknown ≠ current.",
    "Provider citations are provider observation only — not SFIA Evidence.",
    `Strategy need=${strategy.sourceNeed} domain=${strategy.domain} semanticClass=${strategy.semanticSourceClass} acquisition=${strategy.acquisitionRequirement}`,
  ];

  if (observations.length === 0) {
    lines.push("No external source observations this turn.");
  } else {
    for (const [i, o] of observations.entries()) {
      lines.push(
        `[${i + 1}] op=${o.operationKind} coverage=${o.coverage} access=${o.accessState} freshness=${o.freshnessState} provider=${o.provider}` +
          (o.url ? ` url=${o.url}` : "") +
          (o.query ? ` query=${o.query}` : "") +
          ` nonAuthoritative=${o.nonAuthoritative}`,
      );
    }
  }

  const allAttempts = [
    ...new Set(observations.flatMap((o) => o.authorityEscalationAttempts)),
  ];
  lines.push(buildAuthorityIsolationDisclosure(allAttempts));
  return lines.join("\n");
}

export function appendSourceObservationDisclosure(
  systemInstructions: string,
  disclosure: string,
): string {
  if (!disclosure.trim()) return systemInstructions;
  return `${systemInstructions.trim()}\n\n${disclosure.trim()}`;
}

export function authorityIsolationHeld(
  observations: readonly SourceObservationFact[],
): boolean {
  const attempts = observations.flatMap((o) => o.authorityEscalationAttempts);
  return assertExternalSourceHasZeroAuthority(attempts).authorityIsolationHeld;
}
