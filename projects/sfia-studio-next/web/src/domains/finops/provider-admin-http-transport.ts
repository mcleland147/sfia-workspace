/**
 * Operational Admin HTTP transport — GET allowlist only.
 *
 * MUST only be constructed from an isolated collector process that already
 * holds OPENAI_ADMIN_KEY. Never import this from Nora conversation paths.
 *
 * LIVE calls additionally require SFIA_ADMIN_USAGE_LIVE=1 + STUDIO_LANE=DEV
 * + SFIA_ADMIN_COLLECTOR_PROCESS=1. Presence of a transport must never
 * authorize LIVE by itself.
 */

import {
  ADMIN_USAGE_ALLOWED_PATHS,
  markLiveAdminTransport,
  type AdminHttpTransport,
} from "./provider-admin-usage-collector";

const ALLOWED = new Set<string>(ADMIN_USAGE_ALLOWED_PATHS);
/** Official Admin API origin — no arbitrary baseUrl in LIVE. */
export const ADMIN_LIVE_BASE_URL = "https://api.openai.com/v1";
const MAX_RESPONSE_BYTES = 2_000_000;

export type AdminTransportOptions = {
  timeoutMs?: number;
  /** Injected fetch for controlled tests of LIVE shape — still path/redirect gated. */
  fetchImpl?: typeof fetch;
  /** Max retries on 429/5xx (bounded). */
  maxRetries?: number;
  /**
   * Must be true (and env LIVE GO must hold) to construct a LIVE transport.
   * A substituted transport must use markSubstitutedAdminTransport instead.
   */
  liveAuthorized: boolean;
};

function sanitizeErrorMessage(status: number, bodyText: string): string {
  const clipped = bodyText
    .replace(/sk-[A-Za-z0-9_-]+/g, "[REDACTED]")
    .replace(/Bearer\s+\S+/gi, "Bearer [REDACTED]")
    .slice(0, 200);
  return `ADMIN_HTTP_${status}:${clipped}`;
}

/**
 * Construct LIVE Admin transport. Throws if LIVE GO is not proven.
 * Destination fixed to ADMIN_LIVE_BASE_URL; redirects refused.
 */
export function createAdminHttpTransport(
  opts: AdminTransportOptions,
): AdminHttpTransport {
  if (!opts.liveAuthorized || !isAdminLiveAuthorized()) {
    throw new Error("BLOCKED_NO_LIVE_GO");
  }
  const base = ADMIN_LIVE_BASE_URL;
  const timeoutMs = Math.max(1_000, Math.min(60_000, opts.timeoutMs ?? 15_000));
  const maxRetries = Math.max(0, Math.min(3, opts.maxRetries ?? 2));
  const fetchImpl = opts.fetchImpl ?? fetch;

  const transport = async (input: {
    method: "GET";
    path: string;
    query: Record<string, string>;
    headers: Record<string, string>;
  }) => {
    // Gate again at emission — construction GO must not be stale-trusted alone.
    if (!isAdminLiveAuthorized()) {
      throw new Error("BLOCKED_NO_LIVE_GO");
    }
    if (input.method !== "GET") {
      throw new Error("ADMIN_METHOD_NOT_ALLOWED");
    }
    if (!ALLOWED.has(input.path)) {
      throw new Error(`ADMIN_PATH_NOT_ALLOWLISTED:${input.path}`);
    }
    const auth = input.headers.Authorization;
    if (!auth || !auth.startsWith("Bearer ")) {
      throw new Error("ADMIN_AUTH_HEADER_REQUIRED");
    }

    const url = new URL(`${base}${input.path}`);
    for (const [k, v] of Object.entries(input.query)) {
      if (v != null && v !== "") url.searchParams.set(k, v);
    }
    if (url.origin !== "https://api.openai.com") {
      throw new Error("ADMIN_DESTINATION_REFUSED");
    }

    let attempt = 0;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const ac = new AbortController();
      const timer = setTimeout(() => ac.abort(), timeoutMs);
      try {
        const res = await fetchImpl(url.toString(), {
          method: "GET",
          headers: {
            Authorization: auth,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          signal: ac.signal,
          redirect: "error",
        });
        const buf = await res.arrayBuffer();
        if (buf.byteLength > MAX_RESPONSE_BYTES) {
          throw new Error("ADMIN_RESPONSE_TOO_LARGE");
        }
        const text = new TextDecoder().decode(buf);
        let json: unknown = null;
        try {
          json = text ? JSON.parse(text) : null;
        } catch {
          json = { parse_error: true };
        }
        const retryable =
          res.status === 429 || (res.status >= 500 && res.status <= 599);
        if (retryable && attempt < maxRetries) {
          attempt += 1;
          const ra = res.headers.get("retry-after");
          const waitMs =
            ra && /^\d+$/.test(ra)
              ? Math.min(10_000, Number(ra) * 1000)
              : 250 * attempt;
          await new Promise((r) => setTimeout(r, waitMs));
          continue;
        }
        if (
          !res.ok &&
          res.status !== 401 &&
          res.status !== 403 &&
          res.status !== 429
        ) {
          void sanitizeErrorMessage(res.status, text);
        }
        const headers: Record<string, string> = {};
        const retryAfter = res.headers.get("retry-after");
        if (retryAfter) headers["retry-after"] = retryAfter;
        return { status: res.status, json, headers };
      } finally {
        clearTimeout(timer);
      }
    }
  };

  return markLiveAdminTransport(transport);
}

/**
 * Load Admin key only when explicitly running as isolated collector.
 * Returns null for product/Next contexts. Never logs the key.
 */
export function loadIsolatedAdminApiKey(env: NodeJS.ProcessEnv = process.env): {
  key: string | null;
  limits: string[];
} {
  const isolated = (env.SFIA_ADMIN_COLLECTOR_PROCESS ?? "").trim() === "1";
  if (!isolated) {
    return { key: null, limits: ["NOT_ISOLATED_COLLECTOR_PROCESS"] };
  }
  const key = (env.OPENAI_ADMIN_KEY ?? "").trim() || null;
  if (!key) return { key: null, limits: ["OPENAI_ADMIN_KEY_ABSENT"] };
  return { key, limits: [] };
}

export function isAdminLiveAuthorized(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return (
    (env.SFIA_ADMIN_USAGE_LIVE ?? "").trim() === "1" &&
    (env.STUDIO_LANE ?? "").trim().toUpperCase() === "DEV" &&
    (env.SFIA_ADMIN_COLLECTOR_PROCESS ?? "").trim() === "1"
  );
}
