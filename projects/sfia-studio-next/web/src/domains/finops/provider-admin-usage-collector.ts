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
  /** Durable TEST vs LIVE separation — TEST never treated as real cost. */
  collectionProvenance?: "TEST_SUBSTITUTED" | "LIVE" | "UNKNOWN";
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

export type AdminTransportMode = "TEST_SUBSTITUTED" | "LIVE";

export type AdminHttpTransportFn = (input: {
  method: "GET";
  path: string;
  query: Record<string, string>;
  headers: Record<string, string>;
}) => Promise<{
  status: number;
  json: unknown;
  headers?: Record<string, string>;
}>;

export type AdminHttpTransport = AdminHttpTransportFn & {
  readonly __sfiaAdminMode: AdminTransportMode;
};

/** Runtime registry — property markers alone are not a security boundary. */
const liveTransportRegistry = new WeakSet<object>();
const substitutedTransportRegistry = new WeakSet<object>();

export function markSubstitutedAdminTransport(
  fn: AdminHttpTransportFn,
): AdminHttpTransport {
  const t = fn as AdminHttpTransport;
  Object.defineProperty(t, "__sfiaAdminMode", {
    value: "TEST_SUBSTITUTED" as const,
    enumerable: false,
    configurable: false,
    writable: false,
  });
  substitutedTransportRegistry.add(t);
  return t;
}

export function markLiveAdminTransport(
  fn: AdminHttpTransportFn,
): AdminHttpTransport {
  const t = fn as AdminHttpTransport;
  Object.defineProperty(t, "__sfiaAdminMode", {
    value: "LIVE" as const,
    enumerable: false,
    configurable: false,
    writable: false,
  });
  liveTransportRegistry.add(t);
  return t;
}

export function isRegisteredLiveAdminTransport(
  transport: AdminHttpTransportFn,
): boolean {
  return liveTransportRegistry.has(transport);
}

export function isRegisteredSubstitutedAdminTransport(
  transport: AdminHttpTransportFn,
): boolean {
  return substitutedTransportRegistry.has(transport);
}

export type AdminCollectorConfig = {
  /**
   * LIVE requires a real Admin key in the isolated collector.
   * TEST_SUBSTITUTED never needs a real key (dummy/null accepted).
   */
  adminApiKey: string | null;
  organizationScope: string;
  /** Explicit mode — transport injection alone never authorizes LIVE. */
  mode: AdminTransportMode;
  /** LIVE GO — required when mode=LIVE; ignored for authorization of TEST. */
  liveAdminCallsAuthorized: boolean;
  transport: AdminHttpTransport;
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
  mode: AdminTransportMode;
  liveAuthorized: boolean;
  organizationScope?: string;
  transport: AdminHttpTransport;
}): AdminCollectorConfig {
  return {
    adminApiKey: input.adminApiKey,
    organizationScope:
      input.organizationScope?.trim() ||
      (process.env.SFIA_OPENAI_ORG_SCOPE ?? "org:unspecified").trim() ||
      "org:unspecified",
    mode: input.mode,
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
  if (body.has_more === true) {
    if (typeof body.next_page !== "string" || !body.next_page.trim()) {
      limits.push("HAS_MORE_WITHOUT_CURSOR");
    }
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
    if (!prev) {
      snapshotByKey.set(key, s);
      continue;
    }
    // Partial never degrades a complete snapshot.
    if (prev.completeness === "complete" && s.completeness === "partial") {
      continue;
    }
    // Older collect never replaces a newer one.
    if (s.collectedAtUtc < prev.collectedAtUtc) {
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

function assertTransportGate(config: AdminCollectorConfig): void {
  const transport = config.transport;
  const marked = transport?.__sfiaAdminMode;
  if (config.mode === "LIVE") {
    if (!config.liveAdminCallsAuthorized) {
      throw new Error("BLOCKED_NO_LIVE_GO");
    }
    if (!config.adminApiKey) {
      throw new Error("BLOCKED_NO_SECRET");
    }
    // Registry + marker — forging __sfiaAdminMode alone is insufficient.
    if (
      !transport ||
      marked !== "LIVE" ||
      !isRegisteredLiveAdminTransport(transport)
    ) {
      throw new Error("BLOCKED_LIVE_TRANSPORT_REQUIRED");
    }
    return;
  }
  if (config.mode === "TEST_SUBSTITUTED") {
    if (config.adminApiKey) {
      // TEST must never carry a real Admin key.
      throw new Error("BLOCKED_TEST_MUST_NOT_HOLD_LIVE_KEY");
    }
    if (
      !transport ||
      marked !== "TEST_SUBSTITUTED" ||
      !isRegisteredSubstitutedAdminTransport(transport)
    ) {
      throw new Error("BLOCKED_TEST_TRANSPORT_REQUIRED");
    }
    return;
  }
  throw new Error("BLOCKED_UNKNOWN_MODE");
}

/** Envelope bounds for Admin collection — refuse unbounded org sweeps. */
export function assertAdminCollectionEnvelope(input: {
  path: string;
  query: Record<string, string>;
  maxPages: number;
}): void {
  assertAllowedPath(input.path);
  const start = input.query.start_time;
  const end = input.query.end_time;
  if (!start || !/^\d+$/.test(start)) {
    throw new Error("ENVELOPE_START_TIME_REQUIRED");
  }
  if (end != null && end !== "" && !/^\d+$/.test(end)) {
    throw new Error("ENVELOPE_END_TIME_INVALID");
  }
  if (end && Number(end) <= Number(start)) {
    throw new Error("ENVELOPE_END_BEFORE_START");
  }
  // Mandate: finished short window — end_time required for LIVE-shaped envelopes.
  if ((input.query.require_end_time ?? "") === "1" && !end) {
    throw new Error("ENVELOPE_END_TIME_REQUIRED");
  }
  const width = input.query.bucket_width;
  if (width != null && width !== "" && width !== "1m" && width !== "1h" && width !== "1d") {
    throw new Error("ENVELOPE_GRANULARITY_INVALID");
  }
  if (input.maxPages < 1 || input.maxPages > 20) {
    throw new Error("ENVELOPE_MAX_PAGES_OUT_OF_BOUNDS");
  }
  // project_ids / group_by must be explicit strings when present (no open JSON).
  for (const key of ["project_ids", "group_by", "api_key_ids", "models"]) {
    const v = input.query[key];
    if (v != null && v !== "" && typeof v !== "string") {
      throw new Error(`ENVELOPE_PARAM_INVALID:${key}`);
    }
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
  assertTransportGate(input.config);
  const transport = input.config.transport;

  const bearer =
    input.config.mode === "LIVE"
      ? `Bearer ${input.config.adminApiKey}`
      : "Bearer test-substituted-not-a-secret";

  const res = await transport({
    method: "GET",
    path: input.path,
    query: input.query,
    headers: {
      Authorization: bearer,
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
  /** Persist to PostgreSQL (isolated collector / integration). */
  persistToPg?: boolean;
  /** Require end_time in query (LIVE envelope). */
  requireEndTime?: boolean;
}): Promise<AdminCollectionResult> {
  const { randomBytes } = await import("node:crypto");
  const collectionId = `acol_${Date.now().toString(36)}_${randomBytes(4).toString("hex")}`;
  const collectedAtUtc = new Date().toISOString();
  const limits: string[] = [];
  const provenance = input.config.mode;

  try {
    assertTransportGate(input.config);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    const status: AdminCollectorStatus =
      msg === "BLOCKED_NO_SECRET"
        ? "BLOCKED_NO_SECRET"
        : msg === "BLOCKED_NO_LIVE_GO" ||
            msg === "BLOCKED_LIVE_TRANSPORT_REQUIRED" ||
            msg === "BLOCKED_TEST_TRANSPORT_REQUIRED" ||
            msg === "BLOCKED_TEST_MUST_NOT_HOLD_LIVE_KEY" ||
            msg === "BLOCKED_UNKNOWN_MODE"
          ? "BLOCKED_NO_LIVE_GO"
          : "ERROR";
    const r: AdminCollectionResult = {
      status,
      collectionId,
      collectedAtUtc,
      snapshots: [],
      pagesFetched: 0,
      limits: [msg],
      lastError: msg,
    };
    lastAttempt = {
      atUtc: collectedAtUtc,
      collectionId,
      status: r.status,
      error: msg,
    };
    return r;
  }

  const maxPages = Math.max(1, Math.min(20, input.maxPages ?? 10));
  const all: AdminUsageSnapshot[] = [];
  let page: string | null = null;
  let pagesFetched = 0;
  let partial = false;
  const seenCursors = new Set<string>();

  const persist =
    input.persistToPg === true
      ? await import("./provider-admin-usage-repository")
      : null;

  try {
    assertAdminCollectionEnvelope({
      path: input.path,
      query: {
        ...input.query,
        ...(input.requireEndTime || input.config.mode === "LIVE"
          ? { require_end_time: "1" }
          : {}),
      },
      maxPages,
    });
    if (persist) {
      await persist.insertAdminCollectionRun({
        collectionId,
        startedAtUtc: collectedAtUtc,
        status: "IDLE",
        path: input.path,
        organizationScope: input.config.organizationScope,
        provenance,
      });
    }
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
      if (result.limits.includes("HAS_MORE_WITHOUT_CURSOR")) {
        partial = true;
        break;
      }
      page = result.nextPage;
      if (page) {
        if (seenCursors.has(page)) {
          limits.push("REPEATED_CURSOR");
          partial = true;
          break;
        }
        seenCursors.add(page);
      }
      if (!page) break;
      if (i === maxPages - 1 && page) {
        partial = true;
        limits.push("PAGINATION_TRUNCATED");
      }
    }

    // Structural anomalies ⇒ never mark complete.
    if (
      limits.includes("PAGE_BODY_INVALID") ||
      limits.includes("BUCKET_INTERVAL_INVALID") ||
      limits.includes("RESULT_INVALID")
    ) {
      partial = true;
      limits.push("STRUCTURE_ANOMALY");
    }

    const status: AdminCollectorStatus = partial ? "PARTIAL" : "READY";
    if (partial) {
      for (const s of all) s.completeness = "partial";
    }
    for (const s of all) {
      s.collectionProvenance = provenance;
    }
    upsertAdminSnapshots(all);
    if (persist) {
      await persist.upsertAdminSnapshotsPg(all, provenance);
      await persist.finishAdminCollectionRun({
        collectionId,
        finishedAtUtc: new Date().toISOString(),
        status,
        pagesFetched,
        limits: [...new Set(limits)],
        lastError: null,
      });
    }
    lastAttempt = {
      atUtc: collectedAtUtc,
      collectionId,
      status,
      error: null,
    };
    if (status === "READY") {
      lastCompleteSuccess = { atUtc: collectedAtUtc, collectionId };
    }
    return {
      status,
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
        : msg === "BLOCKED_NO_LIVE_GO" ||
            msg === "BLOCKED_LIVE_TRANSPORT_REQUIRED" ||
            msg === "BLOCKED_TEST_TRANSPORT_REQUIRED"
          ? "BLOCKED_NO_LIVE_GO"
          : "ERROR";
    lastAttempt = {
      atUtc: collectedAtUtc,
      collectionId,
      status,
      error: msg,
    };
    if (persist) {
      try {
        await persist.finishAdminCollectionRun({
          collectionId,
          finishedAtUtc: new Date().toISOString(),
          status,
          pagesFetched,
          limits,
          lastError: msg,
        });
      } catch {
        /* never mask primary error */
      }
    }
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
  /** Verified org identity match — not merely a non-empty scope string. */
  organizationMatches: boolean;
  organizationIdentityProven: boolean;
  projectIdsOverlap: boolean;
  /** Studio project ↔ provider project mapping proven (not presence alone). */
  projectAttributionProven: boolean;
  apiKeyIdsOverlap: boolean;
  periodOverlap: boolean;
  /** Window equality proven — intersection alone is insufficient. */
  periodEqual: boolean;
  currencyMatches: boolean;
  /** Currency observed on provider rows (null ⇒ unknown, never invent USD). */
  providerCurrency: string | null;
  surfacesRequested: string[];
  groupingCompatible: boolean;
  coverageComplete: boolean;
  freshnessAcceptable: boolean;
  /** Explicit evidence — never a lone config flag. */
  evidenceNotes: string[];
};

/**
 * Period equality: every attributed snapshot must share the exact compare window
 * (interval start/end), not merely intersect it.
 */
export function assessPeriodEquality(
  snapshots: AdminUsageSnapshot[],
  window: { startUtc: string; endUtc: string },
): { periodEqual: boolean; periodOverlap: boolean; limits: string[] } {
  const limits: string[] = [];
  if (!window.startUtc || !window.endUtc) {
    return { periodEqual: false, periodOverlap: false, limits: ["PERIOD_WINDOW_ABSENT"] };
  }
  if (snapshots.length === 0) {
    return { periodEqual: false, periodOverlap: false, limits: ["PERIOD_NO_SNAPSHOTS"] };
  }
  let overlap = false;
  let allEqual = true;
  for (const s of snapshots) {
    if (s.intervalEndUtc > window.startUtc && s.intervalStartUtc < window.endUtc) {
      overlap = true;
    }
    if (
      s.intervalStartUtc !== window.startUtc ||
      s.intervalEndUtc !== window.endUtc
    ) {
      allEqual = false;
    }
  }
  if (!overlap) limits.push("PERIOD_NO_OVERLAP");
  if (overlap && !allEqual) limits.push("PERIOD_OVERLAP_NOT_EQUAL");
  return { periodEqual: overlap && allEqual, periodOverlap: overlap, limits };
}

export function assessFinOpsComparability(
  evidence: FinOpsScopeEvidence,
): {
  comparable: boolean;
  status: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL";
  limits: string[];
} {
  const limits: string[] = [...evidence.evidenceNotes];
  if (!evidence.organizationIdentityProven || !evidence.organizationMatches) {
    limits.push("ORG_IDENTITY_UNPROVEN");
  }
  if (!evidence.periodEqual) limits.push("PERIOD_NOT_EQUAL");
  if (!evidence.periodOverlap) limits.push("PERIOD_NO_OVERLAP");
  if (!evidence.currencyMatches) limits.push("CURRENCY_MISMATCH");
  if (evidence.providerCurrency == null) limits.push("CURRENCY_ABSENT");
  if (!evidence.projectAttributionProven) {
    limits.push("PROJECT_ATTRIBUTION_UNPROVEN");
  }
  if (!evidence.projectIdsOverlap && !evidence.apiKeyIdsOverlap) {
    limits.push("PROJECT_OR_KEY_SCOPE_UNPROVEN");
  }
  if (!evidence.groupingCompatible) limits.push("GROUPING_INCOMPATIBLE");
  if (!evidence.coverageComplete) limits.push("COVERAGE_PARTIAL");
  if (!evidence.freshnessAcceptable) limits.push("FRESHNESS_STALE");

  const hardFail =
    !evidence.organizationIdentityProven ||
    !evidence.organizationMatches ||
    !evidence.periodEqual ||
    !evidence.currencyMatches ||
    evidence.providerCurrency == null ||
    !evidence.projectAttributionProven ||
    (!evidence.projectIdsOverlap && !evidence.apiKeyIdsOverlap) ||
    !evidence.groupingCompatible;
  if (hardFail) {
    return { comparable: false, status: "NON_COMPARABLE", limits };
  }
  if (!evidence.coverageComplete || !evidence.freshnessAcceptable) {
    return { comparable: false, status: "PARTIAL", limits };
  }
  return { comparable: true, status: "COMPARABLE", limits };
}

/**
 * Sum measured costs only for an explicitly attributed provider projectId.
 * Refuses to sum org-wide aggregates when projectId is null/unproven —
 * that would leak organization totals into a Pilot gap calculation.
 */
export function sumMeasuredCostUsd(
  snapshots: AdminUsageSnapshot[],
  filter: {
    intervalStartUtc?: string;
    intervalEndUtc?: string;
    /** Required for Pilot-safe summation — null refuses org-wide totals. */
    projectId: string | null;
    requireProjectDimension?: boolean;
  },
): {
  total: string | null;
  counted: number;
  limits: string[];
  currency: string | null;
} {
  const limits: string[] = [];
  if (!filter.projectId) {
    return {
      total: null,
      counted: 0,
      limits: ["ORG_AGGREGATE_SUM_REFUSED_WITHOUT_PROJECT"],
      currency: null,
    };
  }
  let total: string | null = null;
  let counted = 0;
  let currency: string | null = null;
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
    // Require the result to be attributed to the requested provider project.
    if (s.dimensions.project_id !== filter.projectId) {
      continue;
    }
    if (s.metrics.amount.presence !== "MEASURED" || !s.metrics.amount.value) {
      if (s.metrics.amount.presence === "ABSENT") limits.push("COST_AMOUNT_ABSENT");
      if (s.metrics.amount.presence === "INVALID") limits.push("COST_AMOUNT_INVALID");
      continue;
    }
    if (s.metrics.currency.presence !== "MEASURED" || !s.metrics.currency.value) {
      limits.push("CURRENCY_ABSENT_ROW_SKIPPED");
      continue;
    }
    if (currency == null) currency = s.metrics.currency.value;
    else if (currency !== s.metrics.currency.value) {
      limits.push("CURRENCY_MIXED");
      return { total: null, counted, limits: [...new Set(limits)], currency: null };
    }
    total =
      total == null
        ? s.metrics.amount.value
        : decimalAdd(total, s.metrics.amount.value);
    if (total == null) {
      limits.push("DECIMAL_ADD_FAILED");
      return { total: null, counted, limits, currency: null };
    }
    counted += 1;
  }
  return { total, counted, limits: [...new Set(limits)], currency };
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
