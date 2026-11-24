/**
 * B1 — sanitization of public web queries.
 * A textual prompt rule is not enough: strip private/secret-looking material
 * before any hosted web search request.
 */

const SECRETISH =
  /\b(api[_-]?key|secret|token|password|passwd|bearer|authorization|private[_-]?key|BEGIN (RSA |OPENSSH )?PRIVATE KEY)\b/i;
const PATHISH =
  /(?:\/Users\/[^\s]+|\/home\/[^\s]+|[A-Za-z]:\\[^\s]+|file:\/\/[^\s]+)/g;
const GITHUB_TOKENISH = /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/g;
const OPENAI_KEYISH = /\bsk-[A-Za-z0-9_-]{20,}\b/g;
const JWTISH = /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g;
/** Studio-private identity tokens — never egress on public web. */
const STUDIO_PRIVATE_IDISH =
  /\b(?:prep_|proj_|cgw_|doc_|drev_|tctr_|tcmd_|msg_|op_|req_|dec_|efx_|pilot_|sess_)[A-Za-z0-9_-]{8,}\b/g;
const COOKIEISH = /\b(?:session|cookie|set-cookie|owner[_-]?token)\s*[:=]\s*\S+/gi;
/**
 * C20 — confidential business content must not become public merely because
 * it lacks a studio id marker. Block first-person / internal confidential cues.
 */
const CONFIDENTIAL_BUSINESS =
  /\b(confidentiel|confidential|internal[- ]only|ne pas diffuser|do not (?:share|forward)|notre (?:secret|mot de passe|budget interne|salaire)|password\s*[:=]|api[_-]?key\s*[:=]|bearer\s+[a-z0-9._-]{12,})\b/i;

export type SanitizeWebQueryResult = {
  ok: boolean;
  query: string;
  redactions: string[];
  blockedReason?: string;
};

export function sanitizePublicWebQuery(raw: string): SanitizeWebQueryResult {
  const redactions: string[] = [];
  let q = (raw ?? "").trim();
  if (!q) {
    return { ok: false, query: "", redactions, blockedReason: "EMPTY_QUERY" };
  }
  if (SECRETISH.test(q) || CONFIDENTIAL_BUSINESS.test(q)) {
    return {
      ok: false,
      query: "",
      redactions: ["SECRETISH_OR_CONFIDENTIAL"],
      blockedReason: "SECRETISH_CONTENT",
    };
  }
  const before = q;
  q = q.replace(GITHUB_TOKENISH, "[REDACTED_GH]");
  q = q.replace(OPENAI_KEYISH, "[REDACTED_SK]");
  q = q.replace(JWTISH, "[REDACTED_JWT]");
  q = q.replace(PATHISH, "[REDACTED_PATH]");
  q = q.replace(STUDIO_PRIVATE_IDISH, "[REDACTED_STUDIO_ID]");
  q = q.replace(COOKIEISH, "[REDACTED_SESSION]");
  if (q !== before) redactions.push("TOKEN_OR_PATH_OR_PRIVATE_ID");
  // Refuse if redaction left almost nothing useful.
  const useful = q.replace(/\[REDACTED_[A-Z]+\]/g, "").replace(/\s+/g, " ").trim();
  if (useful.length < 3) {
    return {
      ok: false,
      query: "",
      redactions,
      blockedReason: "QUERY_EMPTY_AFTER_REDACTION",
    };
  }
  // Cap length — public intent only.
  if (q.length > 400) {
    q = q.slice(0, 400);
    redactions.push("TRUNCATED");
  }
  return { ok: true, query: q, redactions };
}

export type WebCoverageLevel =
  | "SEARCH_ENGAGED"
  | "URL_DISCOVERED"
  | "PAGE_OPENED"
  | "FIND_IN_PAGE"
  | "CITED"
  | "UNVERIFIABLE"
  | "ERROR";

export function classifyWebAction(action: string | null | undefined): WebCoverageLevel {
  const a = (action ?? "").toLowerCase();
  if (!a) return "UNVERIFIABLE";
  if (a === "search") return "URL_DISCOVERED";
  if (a === "open_page") return "PAGE_OPENED";
  if (a === "find_in_page") return "FIND_IN_PAGE";
  if (a === "error" || a === "timeout") return "ERROR";
  return "UNVERIFIABLE";
}

/** Citation alone does not prove open_page. */
export function coverageFromObservation(input: {
  action?: string | null;
  hasCitation?: boolean;
  searchEngaged?: boolean;
}): WebCoverageLevel {
  if (input.action) return classifyWebAction(input.action);
  if (input.hasCitation) return "CITED";
  if (input.searchEngaged) return "SEARCH_ENGAGED";
  return "UNVERIFIABLE";
}
