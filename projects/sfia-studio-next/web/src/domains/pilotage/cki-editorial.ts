/**
 * Read-only editorial projection of a validated CKI specialty file for UI 09.05.
 * Parses the corpus markdown — does not invent copy or create a second CKI catalogue.
 */
import { loadVerifiedCkiText, CKI_CORPUS_VERSION } from "./cki-resolve";

export type CkiEditorialAngle = {
  title: string;
  summary: string;
};

export type CkiEditorialProjection = {
  ckiId: string;
  ordinal: string;
  title: string;
  corpusVersion: string;
  resultSought: string | null;
  relevance: string | null;
  angles: CkiEditorialAngle[];
  sourceDigest: string;
};

function stripMdBold(s: string): string {
  return s.replace(/\*\*/g, "").trim();
}

function firstHeadingTitle(text: string): string | null {
  const m = text.match(/^#\s+CKI Next\s+\d+\s+[—–-]\s+(.+)$/m);
  if (m?.[1]) return m[1].trim();
  const h1 = text.match(/^#\s+(.+)$/m);
  return h1?.[1]?.trim() ?? null;
}

function extractResultSought(text: string): string | null {
  const m = text.match(
    /\*\*Résultat recherché\s*:\*\*\s*([\s\S]+?)(?:\n\n|\n(?=[A-ZÀ-Ü*#])|$)/,
  );
  return m?.[1] ? stripMdBold(m[1].replace(/\n+/g, " ")) : null;
}

function extractRelevance(text: string): string | null {
  const m = text.match(/-\s+\*\*Pertinent\s*:\*\*\s*([\s\S]+?)(?:\n-|\n\n|$)/);
  return m?.[1] ? stripMdBold(m[1].replace(/\n+/g, " ")) : null;
}

/** First three technique bullets under "Manières de raisonner" — title + remainder as summary. */
function extractAngles(text: string): CkiEditorialAngle[] {
  const section = text.match(
    /## Manières de raisonner[\s\S]*?\n\n([\s\S]*?)(?:\n\nCes techniques|\n## )/,
  );
  if (!section?.[1]) return [];
  const bullets = [
    ...section[1].matchAll(/-\s+\*\*([^*]+)\*\*\s*([\s\S]+?)(?=\n-|\n*$)/g),
  ];
  return bullets.slice(0, 3).map((b) => {
    const rawTitle = stripMdBold(b[1] ?? "").replace(/\.$/, "");
    const rawSummary = stripMdBold((b[2] ?? "").replace(/\n+/g, " "));
    // Keep corpus technique titles intact (Figma mock uses curated short labels;
    // we do not invent synonyms). Summaries are clipped to one line for the card.
    const shortSummary =
      rawSummary
        .replace(/^[:.\s]+/, "")
        .split(/[.;]/)[0]
        ?.trim()
        .slice(0, 72) || rawSummary.slice(0, 72);
    return { title: rawTitle, summary: shortSummary };
  });
}

export function parseCkiEditorialMarkdown(
  ckiId: string,
  text: string,
  digest: string,
): CkiEditorialProjection {
  const ordinal = (ckiId.match(/^(\d{2})/)?.[1] ?? "").replace(/^0/, "") || ckiId;
  return {
    ckiId,
    ordinal: ordinal.padStart(2, "0"),
    title: firstHeadingTitle(text) ?? ckiId,
    corpusVersion: CKI_CORPUS_VERSION,
    resultSought: extractResultSought(text),
    relevance: extractRelevance(text),
    angles: extractAngles(text),
    sourceDigest: digest,
  };
}

/**
 * Load editorial projection only when bytes match the pinned digest (RESOLVED path).
 * ASSOCIATED / UNAVAILABLE → null (UI shows honest absence, no fallback inventé).
 */
export function loadCkiEditorialForPin(opts: {
  ckiId: string | null | undefined;
  contentDigest: string | null | undefined;
  availability: string | null | undefined;
}): CkiEditorialProjection | null {
  if (!opts.ckiId || !opts.contentDigest) return null;
  if (opts.availability !== "RESOLVED") return null;
  const text = loadVerifiedCkiText(opts.ckiId, opts.contentDigest);
  if (!text) return null;
  return parseCkiEditorialMarkdown(opts.ckiId, text, opts.contentDigest);
}
