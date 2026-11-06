import type { CycleType } from "@/domains/pilotage/cki-resolve";
import type { PilotageOperation } from "@/domains/pilotage/types";

export type IntentQualification =
  | {
      clarity: "CLEAR";
      operation: PilotageOperation;
      cycleType?: CycleType;
      toCycleType?: CycleType;
      methodRef?: string;
      methodVersion?: string;
      objective?: string;
      /** Documentary decision text (RECORD / REVISE). */
      statement?: string;
      /** Bounded object key for D6 confrontation — not authority by itself. */
      objectRef?: string;
      /** Resolved only when the caller already knows the D6 target. */
      decisionId?: string;
      /** Hint for conversational LIFT — resolved to restrictionId by authority bridge. */
      restrictionKindHint?: string;
      /** Optional targetRef hint (cycle id / specialty) when the pilot names the instance. */
      restrictionTargetRefHint?: string;
    }
  | { clarity: "AMBIGUOUS"; reason: string }
  | { clarity: "NONE"; reason: string };

/** Derive a short objectRef from a decision statement for journal / confrontation. */
export function deriveDecisionObjectRef(statement: string): string {
  const text = statement.trim().replace(/\s+/g, " ");
  const anchored = text.match(
    /(?:que\s+)?(?:la|le|l['’])?\s*([^,?.;]{3,60}?)\s+(?:est|sera|devient|reste|doit|peu[tv])\b/i,
  );
  if (anchored?.[1]) return anchored[1].trim().slice(0, 80);
  // Prefer content before a Nora/dialogue instruction if still present.
  const core = extractDecisionCore(text);
  const tokens = core
    .toLowerCase()
    .split(/[^a-z0-9àâäéèêëïîôùûüç]+/i)
    .filter((t) => t.length >= 4)
    .slice(0, 4);
  return (tokens.join(" ") || core.slice(0, 40)).trim();
}

const PHRASES: Array<{ type: CycleType; phrase: string }> = [
  { type: "CONCEPTION_FONCTIONNELLE", phrase: "conception fonctionnelle" },
  { type: "ARCHITECTURE_FONCTIONNELLE", phrase: "architecture fonctionnelle" },
  { type: "ARCHITECTURE_TECHNIQUE", phrase: "architecture technique" },
  { type: "INTEGRATION_DEVOPS", phrase: "intégration devops" },
  { type: "INTEGRATION_DEVOPS", phrase: "integration devops" },
  { type: "INTEGRATION_DEVOPS", phrase: "devops" },
  { type: "DEPLOIEMENT_RELEASE", phrase: "déploiement" },
  { type: "DEPLOIEMENT_RELEASE", phrase: "deploiement" },
  { type: "OBSERVABILITE", phrase: "observabilité" },
  { type: "OBSERVABILITE", phrase: "observabilite" },
  { type: "PR_READINESS", phrase: "pr readiness" },
  { type: "POST_MERGE", phrase: "post-merge" },
  { type: "POST_MERGE", phrase: "post merge" },
  { type: "CAPITALISATION", phrase: "capitalisation" },
  { type: "QA_VALIDATION", phrase: "validation" },
  { type: "QA_VALIDATION", phrase: "qa" },
  { type: "SECURITE", phrase: "sécurité" },
  { type: "SECURITE", phrase: "securite" },
  { type: "BACKLOG", phrase: "user stories" },
  { type: "BACKLOG", phrase: "backlog" },
  { type: "UX_UI", phrase: "ux/ui" },
  { type: "UX_UI", phrase: "ux" },
  { type: "DELIVERY", phrase: "réalisation" },
  { type: "DELIVERY", phrase: "realisation" },
  { type: "CADRAGE", phrase: "cadrage" },
];

const AMBIGUOUS_EXACT =
  /^(ok|okay|oui|d'accord|dac|vas-y|go|parfait|ça marche|ca marche)\.?$/i;

/**
 * C01 — exploratory / hypothetical language is never an opposable D6 act.
 * Level A confrontation may still surface candidates; this gate stays linguistic.
 */
const EXPLORATORY_ACT =
  /\b(je pense|je r[eé]fl[eé]chis|je me demande|j['’]envisage|pourrait|pourrais|ce serait|il serait|peut-être|peut etre|et si|nora (?:propose|sugg[eè]re)|int[eé]ressant|hypoth[eè]se|envisager|envisagerais|semblerait|aurait l['’]air)\b/i;

/**
 * Conversational instructions addressed to Nora — not part of a durable decision.
 * Note: after « Nora, » a trailing `\b` would fail (comma + space are both non-word).
 */
const NORA_DIALOGUE_SPLIT =
  /(?:\bnora\s*[,:]|\baide[- ]moi\b|\bpeux[- ]tu\b|\bpeux tu\b|\bexplique[- ]moi\b|\bdis[- ]moi\b|\bmaintenant que (?:cette|la) d[eé]cision\b)/i;

function normalize(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, " ");
}

/** True when the wording is reflective/hypothetical — not a clear human performative. */
export function isExploratoryActLanguage(text: string): boolean {
  const t = text.trim();
  if (!t) return true;
  if (/\?$/.test(t)) return true;
  if (/^(est-ce|dois-je|peut-on|devrait-on|et si)\b/i.test(t)) return true;
  return EXPLORATORY_ACT.test(t);
}

function escapeRe(phrase: string): string {
  return phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function cyclesMentioned(text: string): CycleType[] {
  let masked = normalize(text);
  const found: CycleType[] = [];
  const phrases = [...PHRASES].sort((a, b) => b.phrase.length - a.phrase.length);
  for (const item of phrases) {
    const re = new RegExp(`(?:^|\\s)${escapeRe(item.phrase)}(?:$|\\s|[,.])`, "i");
    if (re.test(masked)) {
      if (!found.includes(item.type)) found.push(item.type);
      masked = masked.replace(item.phrase, " ");
    }
  }
  return found;
}

function matchCyclePrefix(
  text: string,
): { type: CycleType; rest: string } | { ambiguous: true } | null {
  const n = normalize(text);
  const phrases = [...PHRASES].sort((a, b) => b.phrase.length - a.phrase.length);
  for (const item of phrases) {
    const boundary = new RegExp(`^${escapeRe(item.phrase)}(?:$|\\s|[,.])`, "i");
    if (!boundary.test(n)) continue;
    const rest = n.slice(item.phrase.length).trim();
    if (cyclesMentioned(rest).length > 0) return { ambiguous: true };
    return { type: item.type, rest };
  }
  return null;
}

/**
 * C02 — never promote punctuation-only residue to a durable cycle objective.
 * Prefer an explicit « avec pour objectif … » / « objectif … » clause when present.
 */
export function sanitizeCycleObjective(rest: string, cycleType: CycleType): string {
  const raw = (rest ?? "").trim();
  const explicit = raw.match(
    /\b(?:avec\s+(?:pour\s+)?objectif|objectif)\s*(?:de|d['’]|:)?\s*(.+)$/i,
  );
  const candidate = (explicit?.[1] ?? raw).trim().replace(/^[.,;:!?…\-–—]+|[.,;:!?…\-–—]+$/g, "").trim();
  if (!candidate || /^[.\-–—…]+$/.test(candidate)) {
    return `Cycle ${cycleType}`;
  }
  return candidate.slice(0, 500);
}

/**
 * C04 — keep the durable arbitration; drop Nora dialogue / follow-up asks.
 */
export function extractDecisionCore(statement: string): string {
  const text = statement.trim().replace(/\s+/g, " ");
  if (!text) return "";
  const split = text.split(NORA_DIALOGUE_SPLIT);
  const core = (split[0] ?? text).trim().replace(/[.,;:]+$/g, "").trim();
  return core || text;
}

function splitMethod(raw: string): { ref: string; version: string | null } {
  const text = raw.trim().replace(/[.;]+$/, "");
  const versioned = text.match(/^(.*?)(?:\s+version\s+(\S+))$/i);
  if (versioned && versioned[1].trim()) {
    return { ref: versioned[1].trim(), version: versioned[2] };
  }
  return { ref: text, version: null };
}

/**
 * Shared linguistic framing — citation / specimen / historical report /
 * prohibited example. The clause after « : » is not the pilot's own GO.
 * Applies across OPEN / CLOSE / RECORD / REVISE / LIFT (not one-off exceptions).
 */
export function isSpecimenOrHistoricalFraming(text: string): boolean {
  const t = text.trim();
  if (!t) return true;
  // Meta introducers that present the following colon clause as non-authorizing material
  if (
    /(?:^|[.!?…]\s*)(?:voici|voilà|exemple|phrase de test|pour\s+tester|citation|copie(?:r)?\s+ceci|ne\s+fais\s+pas(?:\s+(?:ceci|cela))?|un\s+ancien\s+message\s+disait|quelqu['’]un\s+a\s+(?:écrit|dit)|on\s+disait(?:\s+alors)?|dans\s+l['’]exemple|le\s+message\s+(?:précédent|antérieur)\s+disait)\b[^:]*:\s*/i.test(
      t,
    )
  ) {
    return true;
  }
  // Quoted performative without an independent « je décide »
  if (
    /[«"“][^»"”]{0,80}(?:ouvre|ouvrir|cl[oô]ture|clore|l[eè]ve|lever|je\s+r[eé]vise|je\s+d[eé]cide)[^»"”]*[»"”]/i.test(
      t,
    ) &&
    !/\bje\s+d[eé]cide\b/i.test(t.replace(/[«"“][^»"”]*[»"”]/g, " "))
  ) {
    return true;
  }
  return false;
}

/** Refusal, withheld authorization, or explicit negation of a named act class. */
export function refusesOrWithholdsAct(
  text: string,
  act: "open" | "close" | "lift" | "record" | "revise",
): boolean {
  const t = text.trim();
  if (!t) return true;
  const stems: Record<typeof act, string> = {
    open: "(?:ouvrir|ouvre|ouverture)",
    close: "(?:cl[oô]turer|cl[oô]ture|fermer|ferme)",
    lift: "(?:lever|l[eè]ve)",
    record: "(?:enregistrer|retenir\\s+la\\s+d[eé]cision)",
    revise: "(?:r[eé]viser|corriger|modifier)(?:\\s+la\\s+d[eé]cision)?",
  };
  const stem = stems[act];
  // « je refuse de lever », « interdit d'ouvrir »
  if (
    new RegExp(
      `\\b(?:je\\s+)?(?:refuse|refusons|interdit)\\s+(?:de\\s+|d['’])${stem}\\b`,
      "i",
    ).test(t)
  ) {
    return true;
  }
  // « je ne t'autorise pas à lever », « n'autorise pas à clôturer »
  if (
    new RegExp(
      `\\b(?:je\\s+)?ne\\s+(?:t['’]|l['’]|vous\\s+)?autorise\\s+pas\\s+[àa]\\s+${stem}\\b`,
      "i",
    ).test(t)
  ) {
    return true;
  }
  if (act === "open") {
    return /\b(?:n['’]ouvre\s+pas|ne\s+(?:l['’]\s*)?ouvre\s+pas|sans\s+ouvrir|ne\s+pas\s+ouvrir)\b/i.test(
      t,
    );
  }
  if (act === "close") {
    // Sole negation of close (not a reserve after « je décide de clôturer »)
    return (
      /\b(?:ne\s+cl[oô]ture\s+pas|sans\s+cl[oô]tur|ne\s+pas\s+cl[oô]tur)\b/i.test(t) &&
      !/\bje\s+d[eé]cide\s+de\s+cl[oô]tur/i.test(t)
    );
  }
  if (act === "lift") {
    return (
      /\bne\s+l[eè]ve\s+pas\b/i.test(t) ||
      /\bne\s+pas\s+lever\b/i.test(t) ||
      /\bne\s+(?:\w+\s+){0,3}pas\s+(?:[àa]\s+)?lever\b/i.test(t) ||
      /\bne\s+souhaite\s+pas\s+lever\b/i.test(t) ||
      /\bne\s+veux\s+pas\s+lever\b/i.test(t) ||
      /\bsans\s+lever\b/i.test(t)
    );
  }
  if (act === "record") {
    return /\b(?:n['’]enregistre\s+pas|ne\s+pas\s+enregistrer|je\s+refuse\s+d['’]enregistrer)\b/i.test(
      t,
    );
  }
  if (act === "revise") {
    return /\b(?:je\s+refuse\s+de\s+r[eé]viser|ne\s+r[eé]vise\s+pas|ne\s+pas\s+r[eé]viser)\b/i.test(
      t,
    );
  }
  return false;
}

/**
 * C01 — citation / specimen / prohibited example is not a performative OPEN GO.
 */
export function isNonPerformativeOpenFraming(text: string): boolean {
  if (isSpecimenOrHistoricalFraming(text)) return true;
  if (refusesOrWithholdsAct(text, "open")) return true;
  return false;
}

/** C08 — citation / specimen / historical close is not a CLOSE GO. */
export function isNonPerformativeCloseFraming(text: string): boolean {
  if (isSpecimenOrHistoricalFraming(text)) return true;
  // Prohibition of close when it is the only close signal (reserve « ne clôture pas »
  // after an affirmative « je décide de clôturer » is handled by findCloseCycleAct).
  if (
    refusesOrWithholdsAct(text, "close") &&
    !/\bje\s+d[eé]cide\s+de\s+cl[oô]tur/i.test(text)
  ) {
    return true;
  }
  return false;
}

/** Detect OPEN_CYCLE performative anywhere in a developed message (C01). */
function findOpenCycleAct(
  text: string,
): { cycleType: CycleType; objective: string } | { ambiguous: string } | null {
  if (isNonPerformativeOpenFraming(text)) return null;

  // Reject pure questions about opening.
  if (
    /\b(?:peux[- ]tu|peut[- ]on|dois[- ]je|faut[- ]il|et si)\b[^.?!]{0,40}\bouvrir\b/i.test(text) &&
    !/\b(?:ouvre|ouvrez)\s+(?:le\s+|un\s+)?cycle\b/i.test(text) &&
    !/\bje\s+d[eé]cide\b/i.test(text)
  ) {
    return null;
  }
  if (/\b(?:imaginons|supposons)\s+que\b/i.test(text) && !/\bje\s+d[eé]cide\b/i.test(text)) {
    return null;
  }

  const openRe =
    /(?:^|[.!?…]\s+|nora\s*[,:]?\s*)(?:je\s+d[eé]cide\s+de\s+commencer[^.!?]*[.!?]?\s*)?(?:ouvre|ouvrir|ouvrez|go(?:\s+pour|\s+sur)?)\s+(?:le\s+|un\s+)?cycle\s+(?:de\s+|d['’]\s*)?([^.!?]+)/i;
  const m = text.match(openRe);
  if (!m) {
    // Alternate: « je décide de commencer le cadrage » without « ouvre » — require cycle name.
    const begin = text.match(
      /\bje\s+d[eé]cide\s+de\s+commencer\s+(?:le\s+|un\s+|l['’]\s*)?(?:cycle\s+(?:de\s+|d['’]\s*)?)?([^.!?]+)/i,
    );
    if (!begin) return null;
    if (isExploratoryActLanguage(text) && !/\bje\s+d[eé]cide\b/i.test(text)) return null;
    const matched = matchCyclePrefix(begin[1]);
    if (!matched || "ambiguous" in matched) return { ambiguous: "Type de cycle ambigu" };
    return {
      cycleType: matched.type,
      objective: sanitizeCycleObjective(matched.rest, matched.type),
    };
  }
  const matched = matchCyclePrefix(m[1]);
  if (!matched || "ambiguous" in matched) return { ambiguous: "Type de cycle ambigu" };
  return {
    cycleType: matched.type,
    objective: sanitizeCycleObjective(matched.rest, matched.type),
  };
}

/** Detect CLOSE_CYCLE performative in developed natural language (C08). */
function findCloseCycleAct(
  text: string,
): { cycleType?: CycleType; objective: string } | { ambiguous: string } | null {
  if (isNonPerformativeCloseFraming(text)) return null;

  const hasDecideClose = /\bje\s+d[eé]cide\s+de\s+cl[oô]tur/i.test(text);
  const hasImperativeClose = /\bcl[oô]ture\s+(?:maintenant\s+)?(?:le\s+)?cycle\b/i.test(text);
  if (/\b(?:peux[- ]tu|peut[- ]on|dois[- ]je|faut[- ]il)\b[^.?!]{0,60}\bcl[oô]tur/i.test(text)) {
    // Question about closing — not a GO unless assertive decide/imperative also appears.
    if (!hasDecideClose && !hasImperativeClose) return null;
  }
  if (/\b(?:imaginons|supposons)\s+que\b/i.test(text) && !hasDecideClose) {
    return null;
  }
  // Prefer « je décide de clôturer … le cycle TYPE »
  const decideClose = text.match(
    /\bje\s+d[eé]cide\s+de\s+cl[oô]turer(?:\s+maintenant)?\s+(?:le\s+)?cycle(?:\s+([A-Za-zàâäéèêëïîôùûüçÀÂÄÉÈÊËÏÎÔÙÛÜÇ/_-]+))?/i,
  );
  const imperativeClose = text.match(
    /(?:^|[.!?…]\s+|nora\s*[,:]?\s*)(?:cl[oô]ture|clore|ferme|fermer)(?:\s+maintenant)?\s+(?:le\s+)?cycle(?:\s+([A-Za-zàâäéèêëïîôùûüçÀÂÄÉÈÊËÏÎÔÙÛÜÇ/_-]+))?/i,
  );
  const m = decideClose ?? imperativeClose;
  if (!m) return null;
  if (isExploratoryActLanguage(text) && !hasDecideClose && !hasImperativeClose) {
    return null;
  }
  const typeToken = (m[1] ?? "").trim();
  if (!typeToken) {
    return { objective: text.slice(0, 200) };
  }
  const matched = matchCyclePrefix(typeToken);
  if (!matched || "ambiguous" in matched) {
    return { ambiguous: "Clôture ambiguë" };
  }
  return { cycleType: matched.type, objective: text.slice(0, 200) };
}

/**
 * C06 — negated / refused / unauthorized lift is never an authorizing performative.
 * Covers « ne lève pas », « je refuse de lever », « je ne t'autorise pas à lever »,
 * questions and hypotheses.
 */
export function isNegatedOrNonPerformativeLift(text: string): boolean {
  const t = text.trim();
  if (!t) return true;
  if (isSpecimenOrHistoricalFraming(t)) return true;
  if (refusesOrWithholdsAct(t, "lift")) return true;
  if (/\b(?:faut[- ]il|dois[- ]je|peux[- ]tu|peut[- ]on|est-ce\s+que)\b[^.?!]{0,60}\blever\b/i.test(t)) {
    return true;
  }
  if (/\b(?:si\s+je\s+levais|j['’]envisage\s+de\s+lever|je\s+pense\s+(?:à|de)\s+lever)\b/i.test(t)) {
    return true;
  }
  return false;
}

/** Detect LIFT_RESTRICTION (C06) — conversational path; target resolved by authority bridge. */
function findLiftRestrictionAct(
  text: string,
):
  | { restrictionKindHint: string; restrictionTargetRefHint?: string }
  | { ambiguous: string }
  | null {
  if (
    !/\b(l[eè]ve|lever|lève|je\s+l[eè]ve|supprime(?:r)?\s+la\s+restriction|retire(?:r)?\s+la\s+restriction)\b/i.test(
      text,
    )
  ) {
    return null;
  }
  if (isNegatedOrNonPerformativeLift(text)) return null;

  // Affirmative performative only — bare « lever la restriction » inside a refusal must not match.
  const hasAffirmative =
    /\bje\s+d[eé]cide\s+de\s+lever\b/i.test(text) ||
    /\bje\s+l[eè]ve\s+(?:uniquement\s+)?(?:la\s+)?restriction\b/i.test(text) ||
    /(?:^|[.!?…]\s+|nora\s*[,:]?\s*)l[eè]ve\s+(?:uniquement\s+)?(?:la\s+)?restriction\b/i.test(
      text,
    );
  if (!hasAffirmative) {
    return null;
  }
  if (isExploratoryActLanguage(text) && !/\bje\s+(?:d[eé]cide\s+de\s+)?(?:l[eè]ve|lever)\b/i.test(text)) {
    return { ambiguous: "Levée exploratoire — clarification requise" };
  }
  const kind =
    text.match(/\b(CYCLE_MUTATION|METHOD_USE|METHOD_USAGE|PILOTAGE_EFFECT|[A-Z_]{6,})\b/)?.[1] ??
    (/\bmutation\s+de\s+cycle|cycle_mutation|restriction\s+de\s+cl[oô]ture/i.test(text)
      ? "CYCLE_MUTATION"
      : "");
  const normalizedKind = kind === "METHOD_USAGE" ? "METHOD_USE" : kind;
  if (!normalizedKind) {
    return { ambiguous: "Restriction à lever non identifiée — précisez le type ou la cible" };
  }
  // Optional instance hint (« sur ce cycle CADRAGE », cycle id)
  const targetRef =
    text.match(/\bsur\s+(?:ce\s+|le\s+)?cycle\s+([A-Za-z0-9_-]+)/i)?.[1] ??
    text.match(/\bcycle\s+(CADRAGE|UX_UI|[A-Z_]+)\b/i)?.[1] ??
    undefined;
  return {
    restrictionKindHint: normalizedKind,
    restrictionTargetRefHint: targetRef,
  };
}

/**
 * C05 — extract REVISE statement when designation and new arbitration are
 * separated by period (no colon), without collapsing to punctuation-only.
 */
export function extractReviseStatement(text: string): string | null {
  const m = text.match(/\bje\s+(?:révise|revise|corrige|remplace|modifie)(?:\s+la\s+décision)?\b/i);
  if (!m || m.index === undefined) return null;
  const after = text.slice(m.index + m[0].length).trim();
  if (!after) return null;

  // « … décision que j'ai prise sur X. Nouvelle orientation… »
  const afterDesignation = after.match(
    /^(?:que\s+.+?)(?:\.\s+|:\s+|—\s+|–\s+|-\s+)(.+)$/i,
  );
  if (afterDesignation?.[1]) {
    return extractDecisionCore(afterDesignation[1].trim().replace(/^[.,;:]+/, "").trim());
  }

  // « je révise la décision : nouvel énoncé » / « je révise : … »
  const afterColon = after.match(/^[:：]\s*(.+)$/);
  if (afterColon?.[1]) {
    return extractDecisionCore(afterColon[1].trim());
  }

  // « je révise la décision portant sur X — nouvel énoncé »
  const afterDash = after.match(/^(?:[^—–:.]+?)(?:—|–)\s*(.+)$/);
  if (afterDash?.[1]) {
    return extractDecisionCore(afterDash[1].trim());
  }

  // Fallback: strip a short designation clause then keep the rest if substantial
  const stripped = after
    .replace(/^(?:que\s+j['’]ai\s+prise[^.]*\.\s*)/i, "")
    .replace(/^(?:sur\s+[^.]+\.\s*)/i, "")
    .trim();
  const core = extractDecisionCore(stripped.replace(/^[.,;:]+/, "").trim());
  if (core.length >= 8 && !/^[.\-–—…]+$/.test(core)) return core;
  return null;
}

/**
 * Natural-language qualification. An exact "OK" / "go" is never a cycle GO.
 * Two specialties in one sentence without an explicit transition are ambiguous.
 * "Annule cette méthode" is ambiguous until the pilot names withdraw, replace, or a decision.
 *
 * RCT-02: developed messages may embed a clear performative mid-utterance;
 * punctuation-only objectives and Nora dialogue must not pollute durable D6 fields.
 */
export function qualifyPilotageIntent(utterance: string): IntentQualification {
  const text = utterance.trim().replace(/\s+/g, " ");
  if (!text) return { clarity: "AMBIGUOUS", reason: "Énoncé vide" };
  if (AMBIGUOUS_EXACT.test(text)) return { clarity: "AMBIGUOUS", reason: "Énoncé insuffisant" };
  if (
    /\b(annule|annuler|révoque|revoque)\b/i.test(text) &&
    !/\b(retire|retirer|remplace|remplacer)\b/i.test(text)
  ) {
    return { clarity: "AMBIGUOUS", reason: "Cible d'annulation ambiguë" };
  }

  const transition = text.match(
    /cl[oô]ture(?:r)?\s+(?:le\s+)?cycle\s+(.+?)\s+et\s+ouvre(?:r)?\s+(?:le\s+)?cycle\s+(.+)$/i,
  );
  if (transition) {
    const from = matchCyclePrefix(transition[1]);
    const to = matchCyclePrefix(transition[2]);
    if (!from || "ambiguous" in from || !to || "ambiguous" in to || from.type === to.type) {
      return { clarity: "AMBIGUOUS", reason: "Transition ambiguë" };
    }
    return {
      clarity: "CLEAR",
      operation: "TRANSITION_CYCLE",
      cycleType: from.type,
      toCycleType: to.type,
      objective: text,
    };
  }

  const replace = text.match(
    /remplace(?:r)?\s+(?:la\s+)?méthode\s+(.+?)\s+par\s+(?:la\s+méthode\s+)?(.+)$/i,
  );
  if (replace) {
    const next = splitMethod(replace[2]);
    if (!next.ref) return { clarity: "AMBIGUOUS", reason: "Méthode de remplacement non identifiée" };
    return {
      clarity: "CLEAR",
      operation: "REPLACE_METHOD",
      methodRef: next.ref,
      methodVersion: next.version ?? "",
      objective: text,
    };
  }

  if (/retire(?:r)?\s+(?:la\s+)?méthode|sans méthode|plus de méthode/i.test(text)) {
    return { clarity: "CLEAR", operation: "WITHDRAW_METHOD", objective: text };
  }

  const choose = text.match(
    /(?:retiens|retenir|choisis|choisir|adopte|adopter)\s+(?:la\s+)?méthode\s+(.+)$/i,
  );
  if (choose) {
    const method = splitMethod(choose[1]);
    if (!method.ref) return { clarity: "AMBIGUOUS", reason: "Méthode non identifiée" };
    return {
      clarity: "CLEAR",
      operation: "CHOOSE_METHOD",
      methodRef: method.ref,
      methodVersion: method.version ?? "",
      objective: text,
    };
  }

  // --- C06 LIFT before OPEN/CLOSE so « lève puis clôture » can be disambiguated ---
  const lift = findLiftRestrictionAct(text);
  if (lift && "ambiguous" in lift) {
    return { clarity: "AMBIGUOUS", reason: lift.ambiguous };
  }
  if (lift && "restrictionKindHint" in lift) {
    // If the same message also asserts CLOSE without reserving « ne clôture pas », AMBIGUOUS.
    const alsoClose =
      /\bcl[oô]tur/i.test(text) && !/\bne\s+(?:pas\s+)?(?:cl[oô]tur|ferme)|sans\s+cl[oô]tur/i.test(text);
    if (alsoClose) {
      return {
        clarity: "AMBIGUOUS",
        reason: "Levée et clôture dans le même message — un seul acte à la fois",
      };
    }
    return {
      clarity: "CLEAR",
      operation: "LIFT_RESTRICTION",
      objective: text.slice(0, 200),
      restrictionKindHint: lift.restrictionKindHint,
      restrictionTargetRefHint: lift.restrictionTargetRefHint,
    };
  }

  // C01 / C08 — developed natural OPEN / CLOSE (not only ^-anchored)
  const openAct = findOpenCycleAct(text);
  const closeAct = findCloseCycleAct(text);
  if (openAct && closeAct && !("ambiguous" in openAct) && !("ambiguous" in closeAct)) {
    return {
      clarity: "AMBIGUOUS",
      reason: "Ouverture et clôture dans le même message — clarification requise",
    };
  }
  if (openAct && "ambiguous" in openAct) {
    return { clarity: "AMBIGUOUS", reason: openAct.ambiguous };
  }
  if (openAct && "cycleType" in openAct) {
    // Soft prose with hedges / « intéressant d'ouvrir » is not a GO — require imperative or « je décide ».
    const hasImperativeOpen = /\b(?:ouvre|ouvrez)\s+(?:le\s+|un\s+)?cycle\b/i.test(text);
    const hasDecideOpen = /\bje\s+d[eé]cide\b/i.test(text);
    if (isExploratoryActLanguage(text) && !(hasImperativeOpen || hasDecideOpen)) {
      return { clarity: "AMBIGUOUS", reason: "Ouverture exploratoire — pas un GO" };
    }
    if (/\b(?:imaginons|supposons|par exemple)\b/i.test(text) && !hasDecideOpen) {
      return { clarity: "AMBIGUOUS", reason: "Exemple ou hypothèse — pas un GO" };
    }
    if (isNonPerformativeOpenFraming(text)) {
      return { clarity: "NONE", reason: "Citation ou exemple — pas un GO" };
    }
    return {
      clarity: "CLEAR",
      operation: "OPEN_CYCLE",
      cycleType: openAct.cycleType,
      objective: openAct.objective,
    };
  }
  if (closeAct && "ambiguous" in closeAct) {
    return { clarity: "AMBIGUOUS", reason: closeAct.ambiguous };
  }
  if (closeAct && !("ambiguous" in closeAct)) {
    return {
      clarity: "CLEAR",
      operation: "CLOSE_CYCLE",
      cycleType: closeAct.cycleType,
      objective: closeAct.objective,
    };
  }

  /**
   * Documentary RECORD — explicit performative; may appear after a short address.
   * C04: strip Nora dialogue from the durable statement.
   */
  const record = text.match(
    /(?:^|[.!?…]\s+)(?:je décide(?:\s+que)?|décision\s*:|j['’]enregistre(?:\s+(?:la\s+décision|que))?)\s+(.+)$/i,
  ) ?? text.match(/^(?:je décide(?:\s+que)?|décision\s*:|j['’]enregistre(?:\s+(?:la\s+décision|que))?)\s+(.+)$/i);
  if (record) {
    if (isSpecimenOrHistoricalFraming(text) || refusesOrWithholdsAct(text, "record")) {
      return { clarity: "NONE", reason: "Citation ou refus — pas une décision" };
    }
    // Prefer RECORD over OPEN when « je décide que … » is documentary (not « commencer le cycle »).
    if (/\bcommencer\s+(?:le\s+)?(?:cycle|cadrage)\b/i.test(record[1]) && findOpenCycleAct(text)) {
      // Already handled above; fall through only if open missed.
    } else if (!/\bouvre\s+(?:le\s+)?cycle\b/i.test(text)) {
      const statement = extractDecisionCore(record[1].trim().replace(/[.;]+$/, ""));
      if (statement.length < 8) {
        return { clarity: "AMBIGUOUS", reason: "Décision insuffisamment déterminée" };
      }
      if (isExploratoryActLanguage(statement)) {
        return { clarity: "AMBIGUOUS", reason: "Préférence exploratoire — pas une décision" };
      }
      // Whole-message exploratory only when the decision core itself is soft.
      return {
        clarity: "CLEAR",
        operation: "RECORD_DECISION",
        objective: statement,
        statement,
        objectRef: deriveDecisionObjectRef(statement),
      };
    }
  }

  /**
   * Documentary REVISE — C05: mid-message « Je révise… » with designation then
   * new arbitration separated by period (no colon required).
   * Formulation représentative T05 (période, sans deux-points) — transcript
   * original intégral non établi comme unique source.
   */
  if (/\bje\s+(?:révise|revise|corrige|remplace|modifie)\b/i.test(text)) {
    if (isSpecimenOrHistoricalFraming(text) || refusesOrWithholdsAct(text, "revise")) {
      return { clarity: "NONE", reason: "Citation ou refus — pas une révision" };
    }
    const statement = extractReviseStatement(text);
    if (!statement || statement.length < 8 || /^[.\-–—…]+$/.test(statement)) {
      return { clarity: "AMBIGUOUS", reason: "Révision insuffisamment déterminée" };
    }
    if (isExploratoryActLanguage(statement)) {
      return { clarity: "AMBIGUOUS", reason: "Réflexion — pas un acte de révision" };
    }
    return {
      clarity: "CLEAR",
      operation: "REVISE_DECISION",
      objective: statement,
      statement,
      objectRef: deriveDecisionObjectRef(statement),
    };
  }

  const softRevise = text.match(/^(?:finalement|désormais|dorénavant)[,:]?\s+(.+)$/i);
  if (softRevise) {
    const statement = extractDecisionCore(softRevise[1].trim().replace(/[.;]+$/, ""));
    if (statement.length < 8) {
      return { clarity: "AMBIGUOUS", reason: "Révision insuffisamment déterminée" };
    }
    if (isExploratoryActLanguage(statement) || isExploratoryActLanguage(text)) {
      return {
        clarity: "AMBIGUOUS",
        reason: "Expression exploratoire — clarification requise, aucune révision automatique",
      };
    }
    if (!/\b(devient|est|reste|sera|n['’]est plus|n['’]est pas)\b/i.test(statement)) {
      return {
        clarity: "AMBIGUOUS",
        reason: "Changement de décision non asserté — précisez l'acte de révision",
      };
    }
    return {
      clarity: "CLEAR",
      operation: "REVISE_DECISION",
      objective: statement,
      statement,
      objectRef: deriveDecisionObjectRef(statement),
    };
  }

  if (cyclesMentioned(text).length >= 2) {
    return { clarity: "AMBIGUOUS", reason: "Plusieurs cycles cités" };
  }
  return { clarity: "NONE", reason: "Intention non reconnue" };
}
