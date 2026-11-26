/**
 * Macro-lot 1 — independent OpenAI Admin Usage & Costs collector.
 *
 * Isolated from Nora runtime:
 * - Separate secret env: OPENAI_ADMIN_KEY (never project key / never browser)
 * - Read-only GET allowlist only
 * - Failure never blocks cognitive operations
 *
 * Without secret or without GO for LIVE Admin calls:
 *   status = BLOCKED / NOT_LIVE_PROVEN
 *
 * Persistence of provider snapshots requires a migration GO (see as-built).
 * This module keeps an in-process idempotent view for tests + readiness.
 */

export type AdminCollectorStatus =
  | "READY"
  | "BLOCKED_NO_SECRET"
  | "BLOCKED_NO_LIVE_GO"
  | "PARTIAL"
  | "ERROR"
  | "IDLE";

export type AdminUsageBucket = {
  /** Stable reconciliation key components */
  source: "openai.organization.usage" | "openai.organization.costs";
  organizationScope: string;
  intervalStartUtc: string;
  intervalEndUtc: string;
  granularity: "hour" | "day";
  dimensions: Record<string, string | null>;
  unit: string;
  currency: string | null;
  value: string; // decimal string — never float money math at boundaries
  completeness: "complete" | "partial";
  collectedAtUtc: string;
  collectionId: string;
};

export type AdminCollectionResult = {
  status: AdminCollectorStatus;
  collectionId: string;
  collectedAtUtc: string;
  buckets: AdminUsageBucket[];
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
  /** Never log this value. */
  adminApiKey: string | null;
  organizationScope: string;
  /** Explicit LIVE gate — false under initial GO. */
  liveAdminCallsAuthorized: boolean;
  transport?: AdminHttpTransport;
};

const ALLOWED_PATHS = new Set([
  "/v1/organization/usage/completions",
  "/v1/organization/usage/responses",
  "/v1/organization/usage/embeddings",
  "/v1/organization/usage/audio_speeches",
  "/v1/organization/usage/audio_transcriptions",
  "/v1/organization/usage/vector_stores",
  "/v1/organization/usage/moderations",
  "/v1/organization/usage/images",
  "/v1/organization/costs",
]);

/** In-process snapshot store — NOT a second ledger. Product PG requires migration GO. */
const snapshotByKey = new Map<string, AdminUsageBucket>();
let lastSuccessfulCollection: {
  atUtc: string;
  collectionId: string;
  status: AdminCollectorStatus;
} | null = null;

export function resetAdminCollectorStateForTests(): void {
  snapshotByKey.clear();
  lastSuccessfulCollection = null;
}

export function getAdminCollectorFreshness(): {
  lastSuccessAtUtc: string | null;
  lastCollectionId: string | null;
  status: AdminCollectorStatus;
  bucketCount: number;
} {
  return {
    lastSuccessAtUtc: lastSuccessfulCollection?.atUtc ?? null,
    lastCollectionId: lastSuccessfulCollection?.collectionId ?? null,
    status: lastSuccessfulCollection?.status ?? "IDLE",
    bucketCount: snapshotByKey.size,
  };
}

export function listAdminCollectorBuckets(): AdminUsageBucket[] {
  return [...snapshotByKey.values()];
}

export function resolveAdminCollectorConfig(
  env: NodeJS.ProcessEnv = process.env,
): AdminCollectorConfig {
  const key = (env.OPENAI_ADMIN_KEY ?? "").trim() || null;
  const live =
    (env.SFIA_ADMIN_USAGE_LIVE ?? "").trim() === "1" &&
    (env.STUDIO_LANE ?? "").trim().toUpperCase() === "DEV";
  return {
    adminApiKey: key,
    organizationScope:
      (env.SFIA_OPENAI_ORG_SCOPE ?? "org:unspecified").trim() ||
      "org:unspecified",
    liveAdminCallsAuthorized: live,
  };
}

function bucketKey(b: AdminUsageBucket): string {
  const dims = Object.keys(b.dimensions)
    .sort()
    .map((k) => `${k}=${b.dimensions[k] ?? ""}`)
    .join("&");
  return [
    b.source,
    b.organizationScope,
    b.intervalStartUtc,
    b.intervalEndUtc,
    b.granularity,
    b.unit,
    b.currency ?? "",
    dims,
  ].join("|");
}

function assertAllowedPath(path: string): void {
  if (!ALLOWED_PATHS.has(path)) {
    throw new Error(`ADMIN_PATH_NOT_ALLOWLISTED:${path}`);
  }
}

/**
 * Substituted-transport page reader — representative of Usage/Costs pagination.
 * Real HTTP transport is only used when secret + LIVE GO present.
 */
export async function collectAdminUsagePage(input: {
  config: AdminCollectorConfig;
  path: string;
  query: Record<string, string>;
  collectionId: string;
}): Promise<{
  buckets: AdminUsageBucket[];
  nextPage: string | null;
  partial: boolean;
}> {
  assertAllowedPath(input.path);
  if (!input.config.adminApiKey) {
    throw new Error("BLOCKED_NO_SECRET");
  }
  if (!input.config.liveAdminCallsAuthorized && !input.config.transport) {
    throw new Error("BLOCKED_NO_LIVE_GO");
  }
  const transport = input.config.transport;
  if (!transport) {
    throw new Error("BLOCKED_NO_TRANSPORT");
  }

  const res = await transport({
    method: "GET",
    path: input.path,
    query: input.query,
    headers: {
      Authorization: `Bearer ${input.config.adminApiKey}`,
      "Content-Type": "application/json",
    },
  });

  if (res.status === 429) {
    throw new Error("RATE_LIMITED");
  }
  if (res.status === 401 || res.status === 403) {
    throw new Error("ADMIN_PERMISSION_DENIED");
  }
  if (res.status < 200 || res.status >= 300) {
    throw new Error(`ADMIN_HTTP_${res.status}`);
  }

  const body = (res.json ?? {}) as {
    data?: unknown[];
    has_more?: boolean;
    next_page?: string | null;
  };
  const rows = Array.isArray(body.data) ? body.data : [];
  const collectedAtUtc = new Date().toISOString();
  const source =
    input.path.endsWith("/costs")
      ? ("openai.organization.costs" as const)
      : ("openai.organization.usage" as const);

  const buckets: AdminUsageBucket[] = [];
  for (const row of rows) {
    if (!row || typeof row !== "object") continue;
    const r = row as Record<string, unknown>;
    const start =
      typeof r.start_time === "number"
        ? new Date(r.start_time * 1000).toISOString()
        : typeof r.start_time === "string"
          ? r.start_time
          : input.query.start_time
            ? new Date(Number(input.query.start_time) * 1000).toISOString()
            : collectedAtUtc;
    const end =
      typeof r.end_time === "number"
        ? new Date(r.end_time * 1000).toISOString()
        : typeof r.end_time === "string"
          ? r.end_time
          : start;
    const amount =
      r.amount && typeof r.amount === "object"
        ? (r.amount as Record<string, unknown>)
        : null;
    const valueRaw =
      amount?.value ?? r.value ?? r.input_tokens ?? r.num_model_requests ?? 0;
    const value =
      typeof valueRaw === "number" || typeof valueRaw === "string"
        ? String(valueRaw)
        : "0";
    const currency =
      typeof amount?.currency === "string"
        ? amount.currency
        : source === "openai.organization.costs"
          ? "usd"
          : null;
    buckets.push({
      source,
      organizationScope: input.config.organizationScope,
      intervalStartUtc: start,
      intervalEndUtc: end,
      granularity: input.query.bucket_width === "1h" ? "hour" : "day",
      dimensions: {
        project_id:
          typeof r.project_id === "string"
            ? r.project_id
            : typeof (r.project_id as { value?: string } | null)?.value ===
                "string"
              ? (r.project_id as { value: string }).value
              : null,
        api_key_id:
          typeof r.api_key_id === "string"
            ? r.api_key_id
            : typeof (r.api_key_id as { value?: string } | null)?.value ===
                "string"
              ? (r.api_key_id as { value: string }).value
              : null,
        model: typeof r.model === "string" ? r.model : null,
      },
      unit:
        source === "openai.organization.costs"
          ? "currency"
          : typeof r.usage_type === "string"
            ? r.usage_type
            : "tokens",
      currency,
      value,
      completeness: "complete",
      collectedAtUtc,
      collectionId: input.collectionId,
    });
  }

  return {
    buckets,
    nextPage:
      body.has_more && typeof body.next_page === "string"
        ? body.next_page
        : null,
    partial: false,
  };
}

/**
 * Idempotent upsert: same bucket key replaces (does not add).
 * Partial collections must not wipe prior complete buckets.
 */
export function upsertAdminBuckets(
  buckets: AdminUsageBucket[],
  opts?: { replaceIncompleteOnly?: boolean },
): void {
  for (const b of buckets) {
    const key = bucketKey(b);
    const prev = snapshotByKey.get(key);
    if (
      prev &&
      prev.completeness === "complete" &&
      b.completeness === "partial" &&
      opts?.replaceIncompleteOnly !== false
    ) {
      // Do not overwrite complete with partial.
      continue;
    }
    snapshotByKey.set(key, b);
  }
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
    return {
      status: "BLOCKED_NO_SECRET",
      collectionId,
      collectedAtUtc,
      buckets: [],
      pagesFetched: 0,
      limits: ["OPENAI_ADMIN_KEY_ABSENT"],
      lastError: null,
    };
  }
  if (!input.config.liveAdminCallsAuthorized && !input.config.transport) {
    return {
      status: "BLOCKED_NO_LIVE_GO",
      collectionId,
      collectedAtUtc,
      buckets: [],
      pagesFetched: 0,
      limits: ["SFIA_ADMIN_USAGE_LIVE_REQUIRED"],
      lastError: null,
    };
  }

  const maxPages = Math.max(1, Math.min(50, input.maxPages ?? 10));
  const all: AdminUsageBucket[] = [];
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
      all.push(...result.buckets);
      if (result.partial) partial = true;
      page = result.nextPage;
      if (!page) break;
      if (i === maxPages - 1 && page) {
        partial = true;
        limits.push("PAGINATION_TRUNCATED");
      }
    }

    if (partial) {
      for (const b of all) b.completeness = "partial";
      // Upsert partials without wiping prior completes for same keys.
      upsertAdminBuckets(all);
      lastSuccessfulCollection = {
        atUtc: collectedAtUtc,
        collectionId,
        status: "PARTIAL",
      };
      return {
        status: "PARTIAL",
        collectionId,
        collectedAtUtc,
        buckets: all,
        pagesFetched,
        limits,
        lastError: null,
      };
    }

    upsertAdminBuckets(all);
    lastSuccessfulCollection = {
      atUtc: collectedAtUtc,
      collectionId,
      status: "READY",
    };
    return {
      status: "READY",
      collectionId,
      collectedAtUtc,
      buckets: all,
      pagesFetched,
      limits,
      lastError: null,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    if (msg === "BLOCKED_NO_SECRET") {
      return {
        status: "BLOCKED_NO_SECRET",
        collectionId,
        collectedAtUtc,
        buckets: [],
        pagesFetched,
        limits,
        lastError: msg,
      };
    }
    if (msg === "BLOCKED_NO_LIVE_GO" || msg === "BLOCKED_NO_TRANSPORT") {
      return {
        status: "BLOCKED_NO_LIVE_GO",
        collectionId,
        collectedAtUtc,
        buckets: [],
        pagesFetched,
        limits,
        lastError: msg,
      };
    }
    // Error must not erase prior complete snapshots.
    return {
      status: "ERROR",
      collectionId,
      collectedAtUtc,
      buckets: [],
      pagesFetched,
      limits,
      lastError: msg,
    };
  }
}

/**
 * Compare Studio estimated USD (decimal string) to provider cost aggregate
 * only when scopes are comparable.
 */
export function reconcileFinOpsCosts(input: {
  studioEstimatedUsd: string;
  providerCostUsd: string | null;
  comparable: boolean;
  reasonIfNot?: string;
}): {
  status: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL";
  deltaUsd: string | null;
  limits: string[];
} {
  if (!input.comparable || input.providerCostUsd == null) {
    return {
      status: "NON_COMPARABLE",
      deltaUsd: null,
      limits: [input.reasonIfNot ?? "SCOPE_NOT_COMPARABLE"],
    };
  }
  const a = Number(input.studioEstimatedUsd);
  const b = Number(input.providerCostUsd);
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return {
      status: "PARTIAL",
      deltaUsd: null,
      limits: ["DECIMAL_PARSE_FAILED"],
    };
  }
  // Fixed 10 dp string — display layer; not exact work attribution.
  const delta = (b - a).toFixed(10);
  return { status: "COMPARABLE", deltaUsd: delta, limits: [] };
}
