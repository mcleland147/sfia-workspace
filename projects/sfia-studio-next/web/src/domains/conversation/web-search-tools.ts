/**
 * B1 — optional hosted web search for Nora (P0-03).
 *
 * The sanitizer alone is NOT an effective boundary when webSearchTool is attached
 * to a Nora run that holds private D3/D4 context: the model can still formulate
 * outgoing queries from private material. Until an isolated public search path
 * is demonstrated, the tool stays detached.
 *
 * Gate: SFIA_WEB_SEARCH_ENABLED=1 AND SFIA_WEB_SEARCH_ISOLATION_PROVEN=1.
 * No LIVE trial with private data before the applicable security gate.
 */

import { webSearchTool } from "@openai/agents";
import type { CognitivePolicy } from "./cognitive-policy";
import { sanitizePublicWebQuery } from "./web-search-sanitize";

export function isWebSearchEnvEnabled(env: NodeJS.ProcessEnv = process.env): boolean {
  return (env.SFIA_WEB_SEARCH_ENABLED || "").trim() === "1";
}

/** Technical isolation of public queries from private Nora context — not a prompt claim. */
export function isWebSearchIsolationProven(env: NodeJS.ProcessEnv = process.env): boolean {
  return (env.SFIA_WEB_SEARCH_ISOLATION_PROVEN || "").trim() === "1";
}

export function canAttachWebSearchTool(
  policy: CognitivePolicy,
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  if (!isWebSearchEnvEnabled(env)) return false;
  // Fail closed until isolation is demonstrated for the retained mechanism.
  if (!isWebSearchIsolationProven(env)) return false;
  if (policy.profile === "simple") return false;
  if (policy.profileType === "TEST_BOUNDARY" && !(env.SFIA_WEB_SEARCH_TEST === "1")) {
    return false;
  }
  return true;
}

/**
 * Hosted OpenAI webSearchTool — only attach when canAttachWebSearchTool is true.
 * Returning null is the safe default; do not treat system instructions as a barrier.
 */
export function buildPublicWebSearchTool(
  env: NodeJS.ProcessEnv = process.env,
): ReturnType<typeof webSearchTool> | null {
  if (!isWebSearchEnvEnabled(env) || !isWebSearchIsolationProven(env)) return null;
  return webSearchTool({
    searchContextSize: "medium",
  });
}

/** Prep a public-only query string; refuse if sanitization fails. */
export function preparePublicWebQuery(raw: string): {
  ok: true;
  query: string;
  redactions: string[];
} | {
  ok: false;
  reason: string;
} {
  const r = sanitizePublicWebQuery(raw);
  if (!r.ok) return { ok: false, reason: r.blockedReason ?? "BLOCKED" };
  return { ok: true, query: r.query, redactions: r.redactions };
}

/**
 * Documented limitation: attaching the hosted tool to a private-context agent run
 * is not a sufficient exfiltration barrier. Prefer an isolated public search
 * under existing D3 conduction when isolation is proven.
 */
export const WEB_SEARCH_BOUNDARY_NOTE =
  "B1 DISABLED until SFIA_WEB_SEARCH_ISOLATION_PROVEN=1 — sanitizer ≠ hosted-tool boundary";
