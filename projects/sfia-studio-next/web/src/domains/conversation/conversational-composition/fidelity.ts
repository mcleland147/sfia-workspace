/**
 * Deterministic canonical-fidelity gates (F1 / C-04).
 * Distinguishes: anchor presence ≠ structural validity ≠ content equivalence.
 * Never claims full semantic equality; refuses presentation when substance
 * claims are not literally supported by the canonical replyDraft.
 */

import type { VisualBlock, VisualComposition } from "@/domains/conversation/visual-composition";
import { hasGraphicBlocks } from "@/domains/conversation/visual-composition";

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function pushClaim(claims: string[], raw: string | undefined | null, minLen = 3): void {
  const t = (raw ?? "").trim();
  if (t.length >= minLen) claims.push(t);
}

/**
 * Substance claims that must appear in canonical text for a graphic block
 * to be presentable. Titles alone are insufficient (F1 adversarial).
 */
export function extractProjectionClaims(composition: VisualComposition): string[] {
  const claims: string[] = [];
  for (const block of composition.blocks) {
    if (block.kind === "comparison") {
      for (const a of block.alternatives) {
        pushClaim(claims, a.title);
        pushClaim(claims, a.summary);
        for (const p of a.pros ?? []) pushClaim(claims, p);
        for (const c of a.cons ?? []) pushClaim(claims, c);
      }
      if (block.criteria) {
        for (const c of block.criteria) {
          pushClaim(claims, c.label);
          for (const v of Object.values(c.values)) pushClaim(claims, v);
        }
      }
      pushClaim(claims, block.recommendation ?? undefined, 8);
    } else if (block.kind === "sequence") {
      for (const s of block.steps) {
        pushClaim(claims, s.title);
        pushClaim(claims, s.detail);
        pushClaim(claims, s.dateLabel ?? undefined);
      }
    } else if (block.kind === "relations") {
      for (const n of block.nodes) {
        pushClaim(claims, n.label);
        pushClaim(claims, n.detail);
      }
      for (const e of block.edges) {
        pushClaim(claims, e.label);
      }
    } else if (block.kind === "synthesis") {
      for (const it of block.items) {
        pushClaim(claims, it.label);
        pushClaim(claims, it.detail);
      }
    }
    // text blocks are gated separately via maySubstituteNarrative (F1-06).
  }
  return claims;
}

/** @deprecated use extractProjectionClaims — kept for callers expecting titles only. */
export function extractProjectionAnchors(composition: VisualComposition): string[] {
  return extractProjectionClaims(composition);
}

export function claimsSupportedByCanonical(
  claims: string[],
  canonicalText: string | null | undefined,
): { ok: boolean; missing: string[]; reasonCodes: string[] } {
  const reasons: string[] = [];
  const canon = typeof canonicalText === "string" ? normalize(canonicalText) : "";
  if (!canon) {
    reasons.push("CV_FIDELITY_NO_CANONICAL_TEXT");
    return { ok: false, missing: claims, reasonCodes: reasons };
  }
  const missing: string[] = [];
  for (const raw of claims) {
    const a = normalize(raw);
    if (a.length < 2) continue;
    if (!canon.includes(a)) missing.push(raw);
  }
  if (missing.length) {
    reasons.push("CV_FIDELITY_CLAIM_MISSING_IN_CANONICAL");
    return { ok: false, missing, reasonCodes: reasons };
  }
  reasons.push("CV_FIDELITY_CLAIMS_SUPPORTED_BY_CANONICAL");
  return { ok: true, missing: [], reasonCodes: reasons };
}

export function projectionAnchorsAlignWithCanonical(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): { aligned: boolean; missing: string[]; reasonCodes: string[] } {
  const r = claimsSupportedByCanonical(extractProjectionClaims(composition), canonicalText);
  return { aligned: r.ok, missing: r.missing, reasonCodes: r.reasonCodes };
}

/**
 * Preferential recommendation vs opposite preference in canonical (F1-01).
 * Deterministic: if recommendation names option X and canonical contains
 * an explicit preference for a different option Y among the same set → refuse.
 */
export function detectPreferenceContradiction(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): string[] {
  const reasons: string[] = [];
  const canon = typeof canonicalText === "string" ? normalize(canonicalText) : "";
  if (!canon) return reasons;

  const preferRe =
    /(?:prefer(?:er|e)?|recommande|reten(?:ir|ons)|choisir|retenir)\s+(?:l['’]approche\s+|l['’]option\s+|le\s+)?(.{3,80}?)(?:\.|,|;|$)/gi;

  for (const block of composition.blocks) {
    if (block.kind !== "comparison" || !block.recommendation) continue;
    const rec = normalize(block.recommendation);
    const titles = block.alternatives.map((a) => ({
      title: a.title,
      n: normalize(a.title),
    }));
    const recHits = titles.filter((t) => t.n.length >= 2 && rec.includes(t.n));
    if (recHits.length !== 1) continue;
    const preferred = recHits[0]!;

    // Canonical preference mentions
    const canonPrefs: string[] = [];
    let m: RegExpExecArray | null;
    const re = new RegExp(preferRe.source, preferRe.flags);
    while ((m = re.exec(canon)) !== null) {
      canonPrefs.push(normalize(m[1] ?? ""));
    }
    for (const pref of canonPrefs) {
      for (const t of titles) {
        if (t.n.length >= 2 && pref.includes(t.n) && t.n !== preferred.n) {
          reasons.push("CV_FIDELITY_RECOMMENDATION_OPPOSES_CANONICAL_PREFERENCE");
          return reasons;
        }
      }
    }
  }
  return reasons;
}

export function detectCrudeContradictions(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): string[] {
  return detectPreferenceContradiction(composition, canonicalText);
}

/** Narrative-only: text blocks must be supported by canonical before substitute. */
export function maySubstituteNarrative(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): { ok: boolean; reasonCodes: string[] } {
  const texts = composition.blocks.filter((b): b is Extract<VisualBlock, { kind: "text" }> => b.kind === "text");
  if (!texts.length) {
    return { ok: false, reasonCodes: ["CV_FIDELITY_NARRATIVE_EMPTY"] };
  }
  const claims = texts.map((t) => t.markdown);
  const support = claimsSupportedByCanonical(claims, canonicalText);
  if (!support.ok) {
    return {
      ok: false,
      reasonCodes: [...support.reasonCodes, "CV_FIDELITY_NARRATIVE_SUBSTITUTE_REFUSED"],
    };
  }
  return { ok: true, reasonCodes: ["CV_FIDELITY_NARRATIVE_SUBSTITUTE_OK"] };
}

export function mayPresentGraphicComposition(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): { ok: boolean; reasonCodes: string[]; missing: string[] } {
  if (!hasGraphicBlocks(composition)) {
    return { ok: true, reasonCodes: ["CV_FIDELITY_NARRATIVE_ONLY"], missing: [] };
  }
  // Strategy A — identity path: sections are the sole authority; text was derived from them.
  // No lexical claim matching (that was Strategy B dual-author reconciliation).
  if (composition.contentAuthority === "canonical_sections") {
    return {
      ok: true,
      reasonCodes: ["CV_FIDELITY_IDENTITY_CANONICAL_SECTIONS"],
      missing: [],
    };
  }
  const support = claimsSupportedByCanonical(extractProjectionClaims(composition), canonicalText);
  const pref = detectPreferenceContradiction(composition, canonicalText);
  if (!support.ok || pref.length) {
    return {
      ok: false,
      reasonCodes: [
        ...support.reasonCodes,
        ...pref,
        "CV_FIDELITY_REFUSE_GRAPHIC_PRESENTATION",
      ],
      missing: support.missing,
    };
  }
  return { ok: true, reasonCodes: support.reasonCodes, missing: [] };
}
