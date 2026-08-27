/**
 * Deterministic repository-analysis intent hint for F1 routing.
 * Does not replace F2 architecture — only forces informative when the
 * user clearly asks for read/search/Git truth without mutation/qualification.
 */

const ACTIONABLE_NEGATIVES =
  /\b(commit|push|merge|pull[\s-]?request|exécut(?:e|er|ion)|execut(?:e|ion)|lance\s+cursor|ouvre\s+un\s+gate|qualifi(?:e|er|cation)|livr(?:e|er|aison)|delivery\s+cycle|go morris|écris|crée(?:r)?\s+(?:une\s+)?pr\b|modifie(?:r)?\s+(?:le|la|les|ce|un|une)\b)\b/i;

const REPO_POSITIVES: RegExp[] = [
  /\blis(?:ez)?\b/i,
  /\blire\b/i,
  /\brésume/i,
  /\bretrouve\b/i,
  /\bcherche\b/i,
  /\breconstitue\b/i,
  /\bvérifie\b.*\b(git|head|status|branche|branch)\b/i,
  /\b(git|head|status)\b.*\b(local|distant|remote|main)\b/i,
  /\bgit_local_/i,
  /\bCURSOR_REAL_TIMEOUT_POLICY\b/i,
  /\bsources?\s+(exactes?|consult)/i,
  /\bdans\s+(ce|le)\s+(même\s+)?(document|fichier|c1)\b/i,
  /\bcadrage\b/i,
  /\bproduct\s+completion\b/i,
  /\bcompare(?:r)?\b.*\bmain\b/i,
];

/**
 * True when the message is a pure repository read/search/Git-truth request.
 * Explicit mutation / delivery / execution / qualification requests return false.
 */
export function isPureRepositoryAnalysisIntent(content: string): boolean {
  const text = content.trim();
  if (!text) return false;
  if (ACTIONABLE_NEGATIVES.test(text)) return false;
  return REPO_POSITIVES.some((re) => re.test(text));
}
