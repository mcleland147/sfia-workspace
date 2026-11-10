/**
 * Safe internal returnPath for GitHub App user OAuth redirects.
 * Allowlist + canonicalization — never open redirect.
 */

const DEFAULT = "/settings/integrations";

const ALLOWED_EXACT = new Set([
  "/settings/integrations",
  "/portfolio",
]);

/** /projects/<id> where id is a conservative token (no path traversal). */
const PROJECT_PATH = /^\/projects\/[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/;

function hasControlChars(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c <= 0x1f || c === 0x7f) return true;
  }
  return false;
}

/**
 * Normalize and validate a candidate return path.
 * Returns DEFAULT when unsafe — never throws with attacker-controlled detail.
 */
export function safeReturnPath(raw: string | null | undefined): string {
  if (raw == null || typeof raw !== "string") return DEFAULT;
  let path = raw.trim();
  if (!path) return DEFAULT;
  if (hasControlChars(path)) return DEFAULT;

  // Reject schemes / protocol-relative / backslash / encoded tricks before decode.
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/i.test(path)) return DEFAULT;
  if (path.includes("\\")) return DEFAULT;
  if (path.includes("//")) return DEFAULT;
  if (/%00/i.test(path)) return DEFAULT;

  // Decode once; reject if decode changes structure dangerously or fails.
  let decoded = path;
  try {
    decoded = decodeURIComponent(path);
  } catch {
    return DEFAULT;
  }
  if (decoded !== path) {
    // Re-check after decode.
    if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/i.test(decoded)) return DEFAULT;
    if (decoded.includes("\\") || decoded.includes("//")) return DEFAULT;
    if (hasControlChars(decoded)) return DEFAULT;
    path = decoded;
  }

  if (!path.startsWith("/")) return DEFAULT;
  if (path.startsWith("//")) return DEFAULT;
  if (path.includes("://")) return DEFAULT;
  if (path.includes("..")) return DEFAULT;
  // Strip query/hash — only path segment is allowed to be stored.
  const q = path.indexOf("?");
  if (q >= 0) path = path.slice(0, q);
  const h = path.indexOf("#");
  if (h >= 0) path = path.slice(0, h);
  // Collapse trailing slash except root.
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);

  if (ALLOWED_EXACT.has(path)) return path;
  if (PROJECT_PATH.test(path)) return path;
  return DEFAULT;
}

/** Opaque callback error codes — never raw exception messages. */
export type OauthCallbackErrorCode =
  | "missing_code"
  | "access_denied"
  | "invalid_state"
  | "session_mismatch"
  | "not_configured"
  | "conflict"
  | "failed";

export function mapOauthCallbackError(e: unknown): OauthCallbackErrorCode {
  if (e && typeof e === "object" && "code" in e) {
    const code = String((e as { code: string }).code);
    if (code === "NOT_CONFIGURED") return "not_configured";
    if (code === "ACCESS_DENIED" || code === "SESSION_INVALID") return "access_denied";
    if (code === "CONFLICT") return "conflict";
    if (code === "INVALID_REQUEST") return "invalid_state";
  }
  return "failed";
}
