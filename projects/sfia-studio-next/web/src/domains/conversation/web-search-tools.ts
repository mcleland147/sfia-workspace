/**
 * B1 — optional hosted web search for Nora.
 * Enabled only when SFIA_WEB_SEARCH_ENABLED=1 and policy allows.
 * Never attach private context into the public query path.
 */

import { webSearchTool } from "@openai/agents";
import type { CognitivePolicy } from "./cognitive-policy";
import { sanitizePublicWebQuery } from "./web-search-sanitize";

export function isWebSearchEnvEnabled(env: NodeJS.ProcessEnv = process.env): boolean {
  return (env.SFIA_WEB_SEARCH_ENABLED || "").trim() === "1";
}

export function canAttachWebSearchTool(policy: CognitivePolicy): boolean {
  if (!isWebSearchEnvEnabled()) return false;
  // Simple profile: no systematic web. Investigation/analyse only when gated.
  if (policy.profile === "simple") return false;
  if (policy.profileType === "TEST_BOUNDARY" && !(process.env.SFIA_WEB_SEARCH_TEST === "1")) {
    return false;
  }
  return true;
}

export function buildPublicWebSearchTool(): ReturnType<typeof webSearchTool> | null {
  if (!isWebSearchEnvEnabled()) return null;
  // Hosted tool — Studio does not fetch HTML itself.
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
