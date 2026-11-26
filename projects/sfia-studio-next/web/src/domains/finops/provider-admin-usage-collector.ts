/**
 * Provider Admin Usage & Costs collector — isolated from Nora.
 *
 * Contract (openai@7.50 / Admin Usage API):
 *   page.data[] = buckets { object:"bucket", start_time, end_time, results[] }
 *   each result has object:"organization.usage.*.result" | "organization.costs.result"
 *
 * Paths (SDK):
 *   GET /organization/usage/completions|embeddings|…|web_search_calls|decisions
 *   GET /organization/costs
 *   NO /organization/usage/responses
 *
 * Secret: never read by Next/Nora product paths. Only the isolated collector
 * process may load OPENAI_ADMIN_KEY (see provider-admin-http-transport.ts).
 */

import {
  decimalAdd,
  decimalFromNumberLike,
  decimalSub,
} from "./decimal-money";

export type AdminCollectorStatus =
  | "READY"
  | "BLOCKED_NO_SECRET"
  | "BLOCKED_NO_LIVE_GO"
  | "PARTIAL"
  | "ERROR"
  | "IDLE";

export type AdminMetricPresence = "MEASURED" | "ABSENT" | "INVALID";

export type AdminMetric = {
  presence: AdminMetricPresence;
  /** Decimal/integer string when MEASURED; never invent "0" for ABSENT. */
  value: string | null;
};

export type AdminUsageSnapshot = {
  sourceEndpoint: string;
  surfaceObject: string;
  organizationScope: string;
  intervalStartUtc: string;
  intervalEndUtc: string;
  granularity: "1m" | "1h" | "1d";
  dimensions: {
    project_id: string | null;
    api_key_id: string | null;
    user_id: string | null;
    model: string | null;
    line_item: string | null;
    api_source: string | null;
  };
  metrics: {
    input_tokens: AdminMetric;
    output_tokens: AdminMetric;
    input_cached_tokens: AdminMetric;
    num_model_requests: AdminMetric;
    num_requests: AdminMetric;
    amount: AdminMetric;
    currency: AdminMetric;
  };
  completeness: "complete" | "partial";
  collectedAtUtc: string;
  collectionId: string;
};

export type AdminCollectionResult = {
  status: AdminCollectorStatus;
  collectionId: string;
  collectedAtUtc: string;
  snapshots: AdminUsageSnapshot[];
  pagesFetched: number;
  limits: string[];
  lastError: string | null;
};

export type AdminHttpTransport = (input: {
  method: "GET";
  path: string;
  query: Record<string, string>;
  headers: Record<string, string>;
}) => Promise<{
  status: number;
  json: unknown;
  headers?: Record<string, string>;
}>;

export type AdminCollectorConfig = {
  /** Present only in isolated collector process — never in Nora/Next. */
  adminApiKey: string | null;
  organizationScope: string;
  liveAdminCallsAuthorized: boolean;
  transport?: AdminHttpTransport;
};

/** Paths confirmed in openai@7.50 SDK admin.organization.usage.* */
export const ADMIN_USAGE_ALLOWED_PATHS = Object.freeze([
  "/organization/usage/completions",
  "/organization/usage/embeddings",
  "/organization/usage/moderations",
  "/organization/usage/images",
  "/organization/usage/audio_speeches",
  "/organization/usage/audio_transcriptions",
  "/organization/usage/vector_stores",
  "/organization/usage/code_interpreter_sessions",
  "/organization/usage/file_search_calls",
  "/organization/usage/web_search_calls",
  "/organization/usage/decisions",
  "/organization/costs",
] as const);

const ALLOWED = new Set<string>(ADMIN_USAGE_ALLOWED_PATHS);

const snapshotByKey = new Map<string, AdminUsageSnapshot>();
let lastAttempt: {
  atUtc: string;
  collectionId: string;
  status: AdminCollectorStatus;
  error: string | null;
} | null = null;
let lastCompleteSuccess: {
  atUtc: string;
  collectionId: string;
} | null = null;

export function resetAdminCollectorStateForTests(): void {
  snapshotByKey.clear();
  lastAttempt = null;
  lastCompleteSuccess = null;
}

export function getAdminCollectorFreshness(): {
  lastAttemptAtUtc: string | null;
  lastSuccessAtUtc: string | null;
  lastCollectionId: string | null;
  status: AdminCollectorStatus;
  snapshotCount: number;
  /** Product-safe: never exposes whether a secret exists in process env. */
  secretReadableByProduct: false;
} {
  return {
    lastAttemptAtUtc: lastAttempt?.atUtc ?? null,
    lastSuccessAtUtc: lastCompleteSuccess?.atUtc ?? null,
    lastCollectionId:
      lastCompleteSuccess?.collectionId ?? lastAttempt?.collectionId ?? null,
    status: lastAttempt?.status ?? "IDLE",
    snapshotCount: snapshotByKey.size,
    secretReadableByProduct: false,
  };
}

export function listAdminCollectorSnapshots(): AdminUsageSnapshot[] {
  return [...snapshotByKey.values()];
}

/** @deprecated alias — prefer listAdminCollectorSnapshots */
export function listAdminCollectorBuckets(): AdminUsageSnapshot[] {
  return listAdminCollectorSnapshots();
}

/**
 * Product/Next must call this — never loads OPENAI_ADMIN_KEY.
 * Secret presence is unknown to the product runtime.
 */
export function resolveProductAdminCollectorView(): {
  organizationScope: string;
  freshness: ReturnType<typeof getAdminCollectorFreshness>;
} {
  return {
    organizationScope:
      (process.env.SFIA_OPENAI_ORG_SCOPE ?? "org:unspecified").trim() ||
      "org:unspecified",
    freshness: getAdminCollectorFreshness(),
  };
}

/**
 * Isolated collector process only. Must not be imported by Nora routes.
 */
export function resolveIsolatedAdminCollectorConfig(input: {
  adminApiKey: string | null;
  liveAuthorized: boolean;
  organizationScope?: string;
  transport?: AdminHttpTransport;
}): AdminCollectorConfig {
  return {
    adminApiKey: input.adminApiKey,
    organizationScope:
      input.organizationScope?.trim() ||
      (process.env.SFIA_OPENAI_ORG_SCOPE ?? "org:unspecified").trim() ||
      "org:unspecified",
    liveAdminCallsAuthorized: input.liveAuthorized,
    transport: input.transport,
  };
}

function metricFromUnknown(v: unknown): AdminMetric {
  if (v === undefined || v === null) {
    return { presence: "ABSENT", value: null };
  }
  if (typeof v === "number") {
    if (!Number.isFinite(v)) return { presence: "INVALID", value: null };
    return { presence: "MEASURED", value: String(Math.trunc(v)) };
  }
  if (typeof v === "string") {
    const d = decimalFromNumberLike(v);
    if (d == null) return { presence: "INVALID", value: null };
    return { presence: "MEASURED", value: d };
  }
  return { presence: "INVALID", value: null };
}

function amountMetric(result: Record<string, unknown>): {
  amount: AdminMetric;
  currency: AdminMetric;
} {
  const amountObj =
    result.amount && typeof result.amount === "object"
      ? (result.amount as Record<string, unknown>)
      : null;
  if (!amountObj) {
    return {
      amount: { presence: "ABSENT", value: null },
      currency: { presence: "ABSENT", value: null },
    };
  }
  const value = decimalFromNumberLike(amountObj.value);
  const currency =
    typeof amountObj.currency === "string" ? amountObj.currency.toLowerCase() : null;
  return {
    amount:
      value != null
        ? { presence: "MEASURED", value }
        : amountObj.value === undefined || amountObj.value === null
          ? { presence: "ABSENT", value: null }
          : { presence: "INVALID", value: null },
    currency:
      currency != null
        ? { presence: "MEASURED", value: currency }
        : { presence: "ABSENT", value: null },
  };
}

function dim(v: unknown): string | null {
  if (v === undefined || v === null) return null;
  if (typeof v === "string") return v;
  return null;
}

export function snapshotKey(s: AdminUsageSnapshot): string {
  const d = s.dimensions;
  return [
    s.sourceEndpoint,
    s.surfaceObject,
    s.organizationScope,
    s.intervalStartUtc,
    s.intervalEndUtc,
    s.granularity,
    d.project_id ?? "∅",
    d.api_key_id ?? "∅",
    d.user_id ?? "∅",
    d.model ?? "∅",
    d.line_item ?? "∅",
    d.api_source ?? "∅",
  ].join("|");
}

function granularityFromQuery(q: Record<string, string>): "1m" | "1h" | "1d" {
  const w = q.bucket_width;
  if (w === "1m" || w === "1h" || w === "1d") return w;
  return "1d";
}

/**
 * Parse official page shape: data[] buckets with nested results[].
 */
export function parseAdminUsagePage(input: {
  path: string;
  json: unknown;
  organizationScope: string;
  collectionId: string;
  collectedAtUtc: string;
  granularity: "1m" | "1h" | "1d";
}): { snapshots: AdminUsageSnapshot[]; nextPage: string | null; limits: string[] } {
  const limits: string[] = [];
  const body = input.json as {
    object?: string;
    data?: unknown[];
    has_more?: boolean;
    next_page?: string | null;
  } | null;
  if (!body || typeof body !== "object") {
    return { snapshots: [], nextPage: null, limits: ["PAGE_BODY_INVALID"] };
  }
  if (body.object != null && body.object !== "page") {
    limits.push("PAGE_OBJECT_UNEXPECTED");
  }
  const data = Array.isArray(body.data) ? body.data : [];
  const snapshots: AdminUsageSnapshot[] = [];

  for (const bucket of data) {
    if (!bucket || typeof bucket !== "object") {
      limits.push("BUCKET_INVALID");
      continue;
    }
    const b = bucket as Record<string, unknown>;
    if (b.object != null && b.object !== "bucket") {
      limits.push("BUCKET_OBJECT_UNEXPECTED");
    }
    if (typeof b.start_time !== "number" || typeof b.end_time !== "number") {
      limits.push("BUCKET_INTERVAL_INVALID");
      continue;
    }
    const intervalStartUtc = new Date(b.start_time * 1000).toISOString();
    const intervalEndUtc = new Date(b.end_time * 1000).toISOString();
    const results = Array.isArray(b.results) ? b.results : [];
    if (results.length === 0) {
      // Empty bucket is valid — no invented zeros.
      continue;
    }
    for (const result of results) {
      if (!result || typeof result !== "object") {
        limits.push("RESULT_INVALID");
        continue;
      }
      const r = result as Record<string, unknown>;
      const surfaceObject =
        typeof r.object === "string" ? r.object : "unknown.result";
      const { amount, currency } = amountMetric(r);
      snapshots.push({
        sourceEndpoint: input.path,
        surfaceObject,
        organizationScope: input.organizationScope,
        intervalStartUtc,
        intervalEndUtc,
        granularity: input.granularity,
        dimensions: {
          project_id: dim(r.project_id),
          api_key_id: dim(r.api_key_id),
          user_id: dim(r.user_id),
          model: dim(r.model),
          line_item: dim(r.line_item),
          api_source: dim(r.api_source),
        },
        metrics: {
          input_tokens: metricFromUnknown(r.input_tokens),
          output_tokens: metricFromUnknown(r.output_tokens),
          input_cached_tokens: metricFromUnknown(r.input_cached_tokens),
          num_model_requests: metricFromUnknown(r.num_model_requests),
          num_requests: metricFromUnknown(r.num_requests),
          amount,
          currency,
        },
        completeness: "complete",
        collectedAtUtc: input.collectedAtUtc,
        collectionId: input.collectionId,
      });
    }
  }

  const nextPage =
    body.has_more && typeof body.next_page === "string" ? body.next_page : null;
  return { snapshots, nextPage, limits };
}

export function upsertAdminSnapshots(
  snapshots: AdminUsageSnapshot[],
): void {
  for (const s of snapshots) {
    const key = snapshotKey(s);
    const prev = snapshotByKey.get(key);
    if (prev?.completeness === "complete" && s.completeness === "partial") {
      continue;
    }
    snapshotByKey.set(key, s);
  }
}

function assertAllowedPath(path: string): void {
  if (!ALLOWED.has(path)) {
    throw new Error(`ADMIN_PATH_NOT_ALLOWLISTED:${path}`);
  }
}

export async function collectAdminUsagePage(input: {
  config: AdminCollectorConfig;
  path: string;
  query: Record<string, string>;
  collectionId: string;
}): Promise<{
  snapshots: AdminUsageSnapshot[];
  nextPage: string | null;
  limits: string[];
}> {
  assertAllowedPath(input.path);
  if (!input.config.adminApiKey) throw new Error("BLOCKED_NO_SECRET");
  if (!input.config.liveAdminCallsAuthorized && !input.config.transport) {
    throw new Error("BLOCKED_NO_LIVE_GO");
  }
  const transport = input.config.transport;
  if (!transport) throw new Error("BLOCKED_NO_TRANSPORT");

  const res = await transport({
    method: "GET",
    path: input.path,
    query: input.query,
    headers: {
      Authorization: `Bearer ${input.config.adminApiKey}`,
      "Content-Type": "application/json",
    },
  });
  if (res.status === 429) throw new Error("RATE_LIMITED");
  if (res.status === 401 || res.status === 403) {
    throw new Error("ADMIN_PERMISSION_DENIED");
  }
  if (res.status < 200 || res.status >= 300) {
    throw new Error(`ADMIN_HTTP_${res.status}`);
  }
  const collectedAtUtc = new Date().toISOString();
  return parseAdminUsagePage({
    path: input.path,
    json: res.json,
    organizationScope: input.config.organizationScope,
    collectionId: input.collectionId,
    collectedAtUtc,
    granularity: granularityFromQuery(input.query),
  });
}

export async function runAdminCollection(input: {
  config: AdminCollectorConfig;
  path: string;
  query: Record<string, string>;
  maxPages?: number;
}): Promise<AdminCollectionResult> {
  const collectionId = `acol_${Date.now().toString(36)}`;
  const collectedAtUtc = new Date().toISOString();
  const limits: string[] = [];

  if (!input.config.adminApiKey) {
    const r: AdminCollectionResult = {
      status: "BLOCKED_NO_SECRET",
      collectionId,
      collectedAtUtc,
      snapshots: [],
      pagesFetched: 0,
      limits: ["OPENAI_ADMIN_KEY_ABSENT"],
      lastError: null,
    };
    lastAttempt = {
      atUtc: collectedAtUtc,
      collectionId,
      status: r.status,
      error: null,
    };
    return r;
  }
  if (!input.config.liveAdminCallsAuthorized && !input.config.transport) {
    const r: AdminCollectionResult = {
      status: "BLOCKED_NO_LIVE_GO",
      collectionId,
      collectedAtUtc,
      snapshots: [],
      pagesFetched: 0,
      limits: ["SFIA_ADMIN_USAGE_LIVE_REQUIRED"],
      lastError: null,
    };
    lastAttempt = {
      atUtc: collectedAtUtc,
      collectionId,
      status: r.status,
      error: null,
    };
    return r;
  }

  const maxPages = Math.max(1, Math.min(50, input.maxPages ?? 10));
  const all: AdminUsageSnapshot[] = [];
  let page: string | null = null;
  let pagesFetched = 0;
  let partial = false;

  try {
    assertAllowedPath(input.path);
    for (let i = 0; i < maxPages; i++) {
      const query = { ...input.query };
      if (page) query.page = page;
      const result = await collectAdminUsagePage({
        config: input.config,
        path: input.path,
        query,
        collectionId,
      });
      pagesFetched += 1;
      all.push(...result.snapshots);
      limits.push(...result.limits);
      page = result.nextPage;
      if (!page) break;
      if (i === maxPages - 1 && page) {
        partial = true;
        limits.push("PAGINATION_TRUNCATED");
      }
    }

    if (partial) {
      for (const s of all) s.completeness = "partial";
      upsertAdminSnapshots(all);
      lastAttempt = {
        atUtc: collectedAtUtc,
        collectionId,
        status: "PARTIAL",
        error: null,
      };
      return {
        status: "PARTIAL",
        collectionId,
        collectedAtUtc,
        snapshots: all,
        pagesFetched,
        limits: [...new Set(limits)],
        lastError: null,
      };
    }

    upsertAdminSnapshots(all);
    lastAttempt = {
      atUtc: collectedAtUtc,
      collectionId,
      status: "READY",
      error: null,
    };
    lastCompleteSuccess = { atUtc: collectedAtUtc, collectionId };
    return {
      status: "READY",
      collectionId,
      collectedAtUtc,
      snapshots: all,
      pagesFetched,
      limits: [...new Set(limits)],
      lastError: null,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    const status: AdminCollectorStatus =
      msg === "BLOCKED_NO_SECRET"
        ? "BLOCKED_NO_SECRET"
        : msg === "BLOCKED_NO_LIVE_GO" || msg === "BLOCKED_NO_TRANSPORT"
          ? "BLOCKED_NO_LIVE_GO"
          : "ERROR";
    lastAttempt = {
      atUtc: collectedAtUtc,
      collectionId,
      status,
      error: msg,
    };
    // Never wipe prior complete snapshots on error.
    return {
      status,
      collectionId,
      collectedAtUtc,
      snapshots: [],
      pagesFetched,
      limits,
      lastError: msg,
    };
  }
}

export type FinOpsScopeEvidence = {
  organizationMatches: boolean;
  projectIdsOverlap: boolean;
  apiKeyIdsOverlap: boolean;
  periodOverlap: boolean;
  currencyMatches: boolean;
  surfacesRequested: string[];
  /** Explicit evidence — never a lone config flag. */
  evidenceNotes: string[];
};

export function assessFinOpsComparability(
  evidence: FinOpsScopeEvidence,
): {
  comparable: boolean;
  status: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL";
  limits: string[];
} {
  const limits: string[] = [...evidence.evidenceNotes];
  if (!evidence.organizationMatches) limits.push("ORG_MISMATCH");
  if (!evidence.periodOverlap) limits.push("PERIOD_NO_OVERLAP");
  if (!evidence.currencyMatches) limits.push("CURRENCY_MISMATCH");
  if (!evidence.projectIdsOverlap && !evidence.apiKeyIdsOverlap) {
    limits.push("PROJECT_OR_KEY_SCOPE_UNPROVEN");
  }
  const hardFail =
    !evidence.organizationMatches ||
    !evidence.periodOverlap ||
    !evidence.currencyMatches ||
    (!evidence.projectIdsOverlap && !evidence.apiKeyIdsOverlap);
  if (hardFail) {
    return { comparable: false, status: "NON_COMPARABLE", limits };
  }
  return { comparable: true, status: "COMPARABLE", limits };
}

export function sumMeasuredCostUsd(
  snapshots: AdminUsageSnapshot[],
  filter: {
    intervalStartUtc?: string;
    intervalEndUtc?: string;
    projectId?: string | null;
  },
): { total: string | null; counted: number; limits: string[] } {
  const limits: string[] = [];
  let total: string | null = null;
  let counted = 0;
  for (const s of snapshots) {
    if (s.surfaceObject !== "organization.costs.result") continue;
    if (
      filter.intervalStartUtc &&
      s.intervalEndUtc <= filter.intervalStartUtc
    ) {
      continue;
    }
    if (
      filter.intervalEndUtc &&
      s.intervalStartUtc >= filter.intervalEndUtc
    ) {
      continue;
    }
    if (
      filter.projectId &&
      s.dimensions.project_id != null &&
      s.dimensions.project_id !== filter.projectId
    ) {
      continue;
    }
    if (s.metrics.amount.presence !== "MEASURED" || !s.metrics.amount.value) {
      if (s.metrics.amount.presence === "ABSENT") limits.push("COST_AMOUNT_ABSENT");
      if (s.metrics.amount.presence === "INVALID") limits.push("COST_AMOUNT_INVALID");
      continue;
    }
    if (
      s.metrics.currency.presence === "MEASURED" &&
      s.metrics.currency.value != null &&
      s.metrics.currency.value !== "usd"
    ) {
      limits.push("NON_USD_CURRENCY_SKIPPED");
      continue;
    }
    total = total == null ? s.metrics.amount.value : decimalAdd(total, s.metrics.amount.value);
    if (total == null) {
      limits.push("DECIMAL_ADD_FAILED");
      return { total: null, counted, limits };
    }
    counted += 1;
  }
  return { total, counted, limits: [...new Set(limits)] };
}

export function reconcileFinOpsCosts(input: {
  studioEstimatedUsd: string | null;
  providerCostUsd: string | null;
  scope: FinOpsScopeEvidence;
}): {
  status: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL" | "UNAVAILABLE";
  deltaUsd: string | null;
  limits: string[];
} {
  if (input.studioEstimatedUsd == null || input.providerCostUsd == null) {
    return {
      status: "UNAVAILABLE",
      deltaUsd: null,
      limits: ["STUDIO_OR_PROVIDER_ABSENT"],
    };
  }
  const scope = assessFinOpsComparability(input.scope);
  if (!scope.comparable) {
    return {
      status: "NON_COMPARABLE",
      deltaUsd: null,
      limits: scope.limits,
    };
  }
  const delta = decimalSub(input.providerCostUsd, input.studioEstimatedUsd);
  if (delta == null) {
    return {
      status: "PARTIAL",
      deltaUsd: null,
      limits: ["DECIMAL_PARSE_FAILED", ...scope.limits],
    };
  }
  return { status: "COMPARABLE", deltaUsd: delta, limits: scope.limits };
}
