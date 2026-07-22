/** French stop words (bounded) for deterministic tokenization. */
const FR_STOP_WORDS = new Set([
  "le",
  "la",
  "les",
  "un",
  "une",
  "des",
  "du",
  "de",
  "d",
  "et",
  "ou",
  "a",
  "à",
  "au",
  "aux",
  "en",
  "dans",
  "pour",
  "par",
  "sur",
  "avec",
  "sans",
  "ce",
  "cette",
  "ces",
  "je",
  "tu",
  "il",
  "elle",
  "nous",
  "vous",
  "ils",
  "elles",
  "mon",
  "ma",
  "mes",
  "ton",
  "ta",
  "tes",
  "son",
  "sa",
  "ses",
  "qui",
  "que",
  "quoi",
  "dont",
  "où",
  "ne",
  "pas",
  "plus",
  "moins",
  "très",
  "tres",
  "est",
  "sont",
  "être",
  "etre",
  "avoir",
  "fait",
  "faire",
  "veux",
  "vouloir",
  "aimer",
  "nouveau",
  "nouvelle",
  "sujet",
  "projet",
  "cycle",
  "travail",
  "travailler",
  "lancer",
  "créer",
  "creer",
  "ouvrir",
  "reprendre",
  "améliorer",
  "ameliorer",
  "gestion",
  "application",
  "besoin",
  "demande",
]);

/** Overly generic tokens that should not dominate matching alone. */
export const GENERIC_MATCH_TOKENS = new Set([
  "projet",
  "cycle",
  "systeme",
  "system",
  "outil",
  "app",
  "application",
  "module",
  "service",
  "data",
  "donnees",
  "gestion",
  "suivi",
  "nouveau",
  "nouvelle",
]);

/**
 * Normalize text for deterministic matching:
 * lowercase, strip accents, punctuation → spaces, collapse whitespace, stop words.
 */
export function normalizeText(input: string, maxLength = 800): string {
  if (!input) return "";
  const sliced = input.slice(0, maxLength);
  const noAccents = sliced
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  const cleaned = noAccents
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned;
}

export function tokenize(input: string, maxLength = 800): string[] {
  const normalized = normalizeText(input, maxLength);
  if (!normalized) return [];
  return normalized
    .split(" ")
    .map((t) => t.trim())
    .filter((t) => t.length >= 2 && !FR_STOP_WORDS.has(t));
}

export function tokenSet(input: string, maxLength = 800): Set<string> {
  return new Set(tokenize(input, maxLength));
}

/** Jaccard similarity of two token sets — 0 when either empty. */
export function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const t of a) {
    if (b.has(t)) inter += 1;
  }
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

export function containsNormalizedPhrase(
  haystack: string,
  needle: string,
): boolean {
  const h = normalizeText(haystack);
  const n = normalizeText(needle);
  if (!h || !n || n.length < 2) return false;
  return h.includes(n);
}
