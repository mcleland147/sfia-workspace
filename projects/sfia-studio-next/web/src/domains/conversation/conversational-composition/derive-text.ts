/**
 * Deterministic text derivation from canonical semantic sections (Strategy A / C-01–C-04).
 * Preserves narrative prose from text blocks; appends exhaustive structured fallbacks
 * for graphic sections so no substance is dropped.
 * Never invents facts. Never calls an LLM.
 * Never silently truncates (A1) — overflow is an explicit fail.
 */

import { buildExhaustiveBlockFallback } from "./admission";
import type { VisualComposition } from "@/domains/conversation/visual-composition";
import { compositionOwnsBody } from "@/domains/conversation/visual-composition";

/**
 * Envelope limit aligned with replyDraft Zod max.
 * Raised 12000→20000 (2026-11-19): CampusNova consolidation turns approached 11–11.2k
 * under thin context; RECETTE with full tool context failed as REDACTED schema mismatch
 * (fingerprint d57214) — most probable field = replyDraft overflow.
 */
export const REPLY_DRAFT_MAX_CHARS = 20000;

export type DeriveReplyDraftResult =
  | { ok: true; text: string; length: number }
  | { ok: false; reason: "CV_DERIVE_EMPTY" }
  | { ok: false; reason: "CV_DERIVE_OVERFLOW"; length: number; max: number };

/**
 * Derive Pilote-facing Markdown from a composition that owns message substance.
 * Overflow → explicit failure (no slice). Caller must not present FINAL incomplete.
 */
export function deriveReplyDraftFromCanonicalSections(
  composition: VisualComposition,
): DeriveReplyDraftResult {
  if (!compositionOwnsBody(composition)) {
    return { ok: false, reason: "CV_DERIVE_EMPTY" };
  }
  const parts: string[] = [];
  for (const block of composition.blocks) {
    if (block.kind === "choices" || block.kind === "references") continue;
    if (block.kind === "text") {
      const md = block.markdown.trim();
      if (md) parts.push(md);
      continue;
    }
    const fb = buildExhaustiveBlockFallback(block).trim();
    if (fb) parts.push(fb);
  }
  const joined = parts.join("\n\n").trim();
  if (!joined) {
    return { ok: false, reason: "CV_DERIVE_EMPTY" };
  }
  if (joined.length > REPLY_DRAFT_MAX_CHARS) {
    return {
      ok: false,
      reason: "CV_DERIVE_OVERFLOW",
      length: joined.length,
      max: REPLY_DRAFT_MAX_CHARS,
    };
  }
  return { ok: true, text: joined, length: joined.length };
}
