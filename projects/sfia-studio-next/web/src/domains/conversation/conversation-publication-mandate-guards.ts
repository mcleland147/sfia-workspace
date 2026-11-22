/**
 * Pure guards for E08 conversational publication mandate admission (no I/O).
 * Deterministic checks verify values/ids — they do not route métier intent.
 */
import type { PublicationPlan } from "@/domains/execution/types";

const PATH_RE =
  /(?:(?:chemin|path|fichier)\s*[:=]?\s*|sous\s+)[`"]?([A-Za-z0-9_./\-]+\.(?:md|markdown|txt))[`"]?/i;

/** Natural-language tokens that must never become a Git branch reference. */
const BRANCH_STOPWORDS = new Set(
  [
    "du",
    "de",
    "des",
    "le",
    "la",
    "les",
    "un",
    "une",
    "mon",
    "ma",
    "mes",
    "ton",
    "ta",
    "tes",
    "son",
    "sa",
    "ses",
    "notre",
    "nos",
    "votre",
    "vos",
    "leur",
    "leurs",
    "ce",
    "cet",
    "cette",
    "ces",
    "repo",
    "repos",
    "dépôt",
    "depot",
    "dépôts",
    "depots",
    "github",
    "git",
    "projet",
    "project",
    "candidat",
    "candidate",
    "active",
    "actuelle",
    "actuel",
    "courante",
    "courant",
    "nouvelle",
    "nouveau",
    "dédiée",
    "dediee",
    "dédié",
    "dedie",
    "the",
    "a",
    "an",
    "my",
    "our",
  ].map((s) => s.toLowerCase()),
);

/** Intent to create/use a new branch without naming it — not a technical ref. */
const NEW_BRANCH_INTENT_RE =
  /\b(?:une?\s+)?nouvelle\s+branche\b|\bbranche\s+dédi[ée]e?\b|\bnew\s+branch\b|\bdedicated\s+branch\b/i;

/**
 * Capture after branche|branch only for validation of an explicit technical name.
 * Never used as a métier router.
 *
 * Form A — immediate: "branche feat/x", "branch main"
 * Form B — labeled create/base: "Branche à créer : `sfia/pub-…`", "branch to create: name"
 *   (allows a few non-ref words between branche|branch and `:`/`=` before the technical name)
 */
const EXPLICIT_BRANCH_CAPTURE_RE =
  /(?:branche|branch)\s*[:=]?\s*[`"']?([A-Za-z0-9][A-Za-z0-9._/\-]*)[`"']?/gi;

/** Labeled form — requires `:` or `=` so "branche de mon dépôt" does not capture. */
const EXPLICIT_BRANCH_LABELED_CAPTURE_RE =
  /(?:branche|branch)(?:\s+[^\s:;`'"=]{1,24}){0,5}\s*[:=]\s*[`"']?([A-Za-z0-9][A-Za-z0-9._/\-]*)[`"']?/gi;

function extractPublicationPathHint(userText: string): string | null {
  return userText.match(PATH_RE)?.[1] ?? null;
}

/** True when the token looks like an explicit Git ref name, not French prose. */
export function looksLikeTechnicalBranchName(token: string): boolean {
  const t = token.trim();
  if (!t || t.length > 200) return false;
  if (BRANCH_STOPWORDS.has(t.toLowerCase())) return false;
  if (!/^[A-Za-z0-9][A-Za-z0-9._/\-]*$/.test(t)) return false;
  if (t.includes("/")) return true;
  if (/^(main|master|develop|dev|trunk|head)$/i.test(t)) return true;
  if (/^(feat|fix|chore|docs|hotfix|release|studio)([.\-_].+)?$/i.test(t)) return true;
  // Bare alphanumeric without slash/prefix is ambiguous natural language — reject.
  return false;
}

/** All explicit technical branch names found in USER text (deduped). */
export function extractAllPublicationBranchHints(userText: string): string[] {
  const text = userText.normalize("NFKC");
  const candidates: string[] = [];
  for (const re of [EXPLICIT_BRANCH_CAPTURE_RE, EXPLICIT_BRANCH_LABELED_CAPTURE_RE]) {
    re.lastIndex = 0;
    for (const m of text.matchAll(re)) {
      const raw = m[1];
      if (raw && looksLikeTechnicalBranchName(raw)) candidates.push(raw);
    }
  }
  return [...new Set(candidates)];
}

/**
 * Publication head branch explicitly named by the Pilote, when distinct from the base.
 * Returns null when only the base is named or when no technical name is present
 * (auto-generation of publicationBranch remains legitimate).
 */
export function extractExplicitPublicationBranch(input: {
  userText: string;
  baseBranch?: string | null;
}): string | null {
  const base = (input.baseBranch ?? "main").trim() || "main";
  const hints = extractAllPublicationBranchHints(input.userText);
  const nonBase = hints.filter((h) => h !== base);
  if (nonBase.length === 1) return nonBase[0] ?? null;
  if (nonBase.length > 1) return null; // ambiguous — caller must refuse, not invent
  return null;
}

/**
 * Extract a single explicit technical branch name from USER text.
 * Returns null for new-branch intent without a name, natural-language
 * "branche de/du …" phrases, or contradictory names (P0-01).
 */
export function extractPublicationBranchHint(userText: string): string | null {
  const unique = extractAllPublicationBranchHints(userText);
  if (unique.length === 1) return unique[0] ?? null;
  return null;
}

/** True when USER asks for a new/dedicated branch without naming it. */
export function userStatementRequestsUnnamedNewBranch(userStatement: string): boolean {
  const t = userStatement.normalize("NFKC");
  if (!NEW_BRANCH_INTENT_RE.test(t)) return false;
  return extractAllPublicationBranchHints(t).length === 0;
}

const PUBLISH_VERB_RE =
  /\b(?:publ(?:ie|ier|ication)|pousse(?:r)?\s+(?:vers|sur)\s+(?:git|github|le\s+dépôt))\b/i;

/** Fail closed on explicit refusal / cancellation in the USER utterance. */
export function userStatementRefusesPublication(userStatement: string): boolean {
  const t = userStatement.normalize("NFKC").trim();
  if (!t) return true;
  const patterns = [
    /\bne\s+(?:publie|publier)\s+pas\b/i,
    /\bsans\s+publier\b/i,
    /\bpas\s+de\s+publication\b/i,
    /\bn['']?(?:autorise|auto)\s+pas\b/i,
    /\bannul(?:e|er)\s+(?:la\s+)?publication\b/i,
    /\brefus(?:e|er)\s+(?:de\s+)?publier\b/i,
    /\b(?:hold|stop)\s+(?:la\s+)?publication\b/i,
  ];
  return patterns.some((re) => re.test(t));
}

/** Merge-only mandate must not authorize publication (publish ≠ merge). */
export function userStatementRequestsMergeOnly(userStatement: string): boolean {
  const t = userStatement.toLowerCase();
  const merge =
    /\b(?:merge|fusionner?|merger)\b/.test(t) ||
    /\bpr\b[^\n]{0,40}\bmerge\b/.test(t);
  const publish = PUBLISH_VERB_RE.test(userStatement);
  return merge && !publish;
}

export function assertPublicationMandateCoversPlan(input: {
  userStatement: string;
  qualifiedPath: string | null;
  qualifiedBranch: string | null;
  plan: PublicationPlan;
}):
  | { ok: true }
  | { ok: false; reason: string; reasonCode: string } {
  const norm = (p: string) => p.replace(/\\/g, "/").trim();
  const pathHints: string[] = [];
  if (input.qualifiedPath?.trim()) pathHints.push(norm(input.qualifiedPath));
  const fromText = extractPublicationPathHint(input.userStatement);
  if (fromText) pathHints.push(norm(fromText));
  const uniquePaths = [...new Set(pathHints.filter(Boolean))];
  if (uniquePaths.length > 1) {
    return {
      ok: false,
      reason: "Chemins de publication contradictoires dans le mandat — précision requise",
      reasonCode: "AMBIGUOUS_PATH",
    };
  }
  if (uniquePaths.length === 1 && uniquePaths[0] !== norm(input.plan.targetPath)) {
    return {
      ok: false,
      reason: "Chemin du mandat hors plan exécutable préparé",
      reasonCode: "PLAN_DRIFT",
    };
  }

  const branchHints: string[] = [];
  if (input.qualifiedBranch?.trim()) branchHints.push(input.qualifiedBranch.trim());
  for (const b of extractAllPublicationBranchHints(input.userStatement)) {
    branchHints.push(b.trim());
  }
  const uniqueBranches = [...new Set(branchHints.filter(Boolean))];
  if (uniqueBranches.length > 1) {
    return {
      ok: false,
      reason: "Branches contradictoires — précision requise",
      reasonCode: "AMBIGUOUS_BRANCH",
    };
  }
  if (uniqueBranches.length === 1) {
    const hint = uniqueBranches[0]!;
    // Explicit name may refer to targetBranch or publicationBranch (new branch).
    const allowed = new Set(
      [input.plan.targetBranch, input.plan.publicationBranch].filter(Boolean).map((b) => b.trim()),
    );
    if (!allowed.has(hint)) {
      return {
        ok: false,
        reason: "Branche du mandat hors plan exécutable préparé",
        reasonCode: "PLAN_DRIFT",
      };
    }
  }
  // Unnamed new-branch intent: no deterministic hint — do not invent PLAN_DRIFT.

  return { ok: true };
}

export { PUBLISH_VERB_RE };
