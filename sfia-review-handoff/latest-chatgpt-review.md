# SFIA Studio Next — Review Pack FULL
## ML3 / RCT-02 — Local LIVE Remediation C04 / C05 / C06

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-07T01:24Z |
| Contrat | `sfia-next-rct02-mandat-cursor-live-remediation.md` |
| Profil | CRITICAL — autorité D6 |
| D0 | `sfia-next-rct02-live-gaps-d646d42a.md` + captures A01–A12 |
| SHA d'entrée | `d646d42addb5a4c4a3cab441e9e39018d85fae70` |
| Branche locale | `sfia/next-ml3-rct02-live-remediation` (**non poussée**) |
| HEAD local (arbre de travail modifié) | basé sur `d646d42addb5a4c4a3cab441e9e39018d85fae70` |
| RECETTE | `:3200` SHA `d646d42a` **préservée, non mutée** (HTTP 307 observé) |
| Fake/Real | unit + PG DEV `:5433` = effets moteur ; **≠ LIVE Nora** |
| Version | `0.0.0-dev` / `NO RELEASE` / STABLE NOT AVAILABLE |
| Verdict | **READY FOR CHATGPT REVIEW — LOCAL LIVE REMEDIATION** |

## 1. Git Truth

```
## sfia/next-ml3-rct02-live-remediation
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
 M projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
 M projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
 M projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml3-rct02-intent.test.ts
?? projects/sfia-studio-next/construction/pilotage-et-decisions/recette-ml3-rct02-live-corrective-gaps.md

diffstat:
.tmp-sfia-review/chatgpt-review.md                 | 166 ---------------------
 .../construction/delivery-history.md               |  16 ++
 .../specification-technique.md                     |  12 ++
 .../pilotage-et-decisions/tracabilite-r2-r3-r4.md  |  10 ++
 .../src/domains/pilotage/conversation-authority.ts |  48 +++---
 .../web/src/domains/pilotage/intent.ts             | 105 ++++++++++---
 .../web/tests/integration/ml3-pilotage.pg.test.ts  | 127 ++++++++++++++++
 .../web/tests/unit/ml3-rct02-intent.test.ts        |  92 ++++++++++++
 8 files changed, 373 insertions(+), 203 deletions(-)
```

- Worktree projet : `/Users/morris/Projects/sfia-workspace-ml3-rct02-correctifs`
- Branche de travail créée depuis `d646d42a` : `sfia/next-ml3-rct02-live-remediation`
- **Aucun push projet / PR / merge** sous ce mandat
- Handoff L3 mono-fichier autorisé séparément

## 2. Reproduction avant correction (messages exacts)

Messages intégraux du contrat §4 / gaps §3–5 exécutés via `qualifyPilotageIntent` + simulation candidats.

| ID | Observé avant | Cause frontière |
|---|---|---|
| C04 | CLEAR RECORD ; `statement` préfixé `que,` ; `objectRef=mais ne signifie pas que le besoin utilisateur` | `deriveDecisionObjectRef` regex `X est` sur la réserve |
| C05 | CLEAR REVISE en intent, mais 2 candidates lexicales OPEN+RECORD → autorité AMBIGUOUS | unicité avant éligibilité kind |
| C06 | AMBIGUOUS « Levée et clôture… » ; `alsoClose_legacy=true` | `/clôtur/` + protecteur trop étroit vs « ne souhaite ni clôturer » |

Après correctif (même messages) : C04 objectRef `difficultés de coordination…` ; C06 CLEAR LIFT ; C05 RECORD unique après filtre éligibilité → PG APPLIED.

## 3. Architecture / impacts

Chaîne unique inchangée : USER durable → `qualifyPilotageIntent` → `applyConversationalAuthority` → `executePilotageCommand` → projection.

- C04 : extraction objectRef / statement (intent)
- C05 : éligibilité documentaire avant unicité (conversation-authority)
- C06 : performativité CLOSE (intent helpers partagés)
- Pas de migration DB, pas de nouvelle API, pas de second moteur, pas de rewrite historique RECETTE

### Blast radius
objectRef nouvelles décisions ; résolution REVISE vs D5 fondateur ; négation CLOSE/OPEN ; idempotence/journal inchangés ; nora-context/adapter non touchés (C07/C03 préservés).

## 4. Preuves tests

| Suite | Résultat |
|---|---|
| unit `ml3-rct02-intent` + divergence + authority | **46/46 PASS** |
| PG `ml3-pilotage.pg.test.ts` | **45/45 PASS** (dont LIVE C04/C05/C06 chain) |
| lint | PASS |
| tsc --noEmit | PASS |
| build | PASS |

Contre-tests : LIFT+CLOSE affirmatif AMBIGUOUS ; négations LIFT ; specimen OPEN/CLOSE ; 2 RECORD → clarification (logique inchangée sur multi-documentaire).

## 5. Fichiers code modifiés — contenu intégral

### 5.1 `projects/sfia-studio-next/web/src/domains/pilotage/intent.ts` (FULL)

```ts
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

/**
 * C04 — durable objectRef from the primary arbitration, never from an
 * adversative reserve (« mais ne signifie pas que… »).
 */
export function deriveDecisionObjectRef(statement: string): string {
  const text = statement.trim().replace(/\s+/g, " ");
  // Strip Nora dialogue residue, then keep the primary clause before a reserve.
  const core = extractDecisionCore(text);
  const primary =
    core
      .split(
        /\bmais\s+(?:ne\s+signifie|cela\s+ne|ceci\s+ne|pas\s+que|cela\s+n['’]implique)\b/i,
      )[0]
      ?.trim()
      .replace(/[.,;:]+$/g, "")
      .trim() || core;

  // Prefer an explicit priority designation when present.
  const priority = primary.match(
    /\b(?:en\s+priorit[eé]|priorit[eé]\s+(?:d['’]|de|sur))\s+([^.;]{6,80})/i,
  );
  if (priority?.[1]) {
    return priority[1]
      .trim()
      .replace(/^(?:les|la|le|des|du|d['’])\s+/i, "")
      .slice(0, 80);
  }

  // « examinerons / examinons … [en priorité] les/la … »
  const examine = primary.match(
    /\b(?:examinerons|examinons|examiner)\s+(?:d['’]abord\s+)?(?:en\s+priorit[eé]\s+)?(?:les|la|le|des|du)?\s*([^.;]{6,80})/i,
  );
  if (examine?.[1]) {
    return examine[1].trim().slice(0, 80);
  }

  // « X est/sera… » only on the primary arbitration — never a reserve subject.
  const anchored = primary.match(
    /(?:que\s+)?(?:la|le|l['’])?\s*([^,?.;]{3,60}?)\s+(?:est|sera|devient|reste|doit|peu[tv])\b/i,
  );
  if (anchored?.[1]) {
    const cand = anchored[1].trim();
    if (!/^mais\b/i.test(cand) && !/\bne\s+signifie\b/i.test(cand)) {
      return cand.slice(0, 80);
    }
  }

  const tokens = primary
    .toLowerCase()
    .split(/[^a-z0-9àâäéèêëïîôùûüç]+/i)
    .filter((t) => t.length >= 4 && !/^(pendant|cette|nous|pour|avec|dans)$/i.test(t))
    .slice(0, 4);
  return (tokens.join(" ") || primary.slice(0, 40)).trim();
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
 * Also strip the syntactic « que, » residue left by « je décide que … ».
 */
export function extractDecisionCore(statement: string): string {
  const text = statement.trim().replace(/\s+/g, " ");
  if (!text) return "";
  const split = text.split(NORA_DIALOGUE_SPLIT);
  let core = (split[0] ?? text).trim().replace(/[.,;:]+$/g, "").trim();
  // « je décide que, pendant… » → durable statement without the conjunction residue.
  core = core.replace(/^que\s*[,:]?\s+/i, "").trim();
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
    return (
      /\b(?:n['’]ouvre\s+pas|ne\s+(?:l['’]\s*)?ouvre\s+pas|sans\s+ouvrir|ne\s+pas\s+ouvrir)\b/i.test(
        t,
      ) ||
      /\bne\s+(?:souhaite|veux|veut)\s+ni\s+[^.!?]{0,40}\bouvrir\b/i.test(t) ||
      /\bni\s+(?:en\s+)?ouvrir\b/i.test(t)
    );
  }
  if (act === "close") {
    // Sole negation / exclusion of close (not a reserve after « je décide de clôturer »).
    // Covers « ne clôture pas », « sans clôturer », « ne souhaite ni clôturer… ».
    return (
      (/\b(?:ne\s+cl[oô]ture\s+pas|sans\s+cl[oô]tur|ne\s+pas\s+cl[oô]tur)\b/i.test(t) ||
        /\bne\s+(?:souhaite|veux|veut)\s+ni\s+cl[oô]tur/i.test(t) ||
        /\bni\s+cl[oô]tur(?:er)?\b/i.test(t)) &&
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

/**
 * C06 — true only when CLOSE is asserted as a second performative act
 * alongside another GO (e.g. LIFT). Negated / excluded mentions
 * (« ne clôture pas », « je ne souhaite ni clôturer… ») are not acts.
 */
export function assertsAffirmativeCloseAct(text: string): boolean {
  const t = text.trim();
  if (!t) return false;
  if (/\bje\s+d[eé]cide\s+de\s+cl[oô]tur/i.test(t)) return true;
  if (
    /\b(?:puis|ensuite|et)\s+(?:je\s+)?(?:cl[oô]ture|clore|ferme)\b/i.test(t) &&
    !refusesOrWithholdsAct(t, "close")
  ) {
    return true;
  }
  if (
    /\b(?:cl[oô]ture|clore|ferme)\s+(?:maintenant\s+)?(?:le\s+)?cycle\b/i.test(t) &&
    !refusesOrWithholdsAct(t, "close")
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
    // Second affirmative CLOSE act in the same turn → clarification, zero effect.
    // Negated / excluded mentions of close (incl. « ne souhaite ni clôturer ») are not acts.
    if (assertsAffirmativeCloseAct(text)) {
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

```

### 5.2 `projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts` (FULL)

```ts
/**
 * F01/F02 — bridge from a persisted USER message to the existing D5/D6
 * command boundary. Never invents authority from Nora or D4 content.
 *
 * Sequencing contract:
 * 1. USER message already durable (COMPLETE) before this runs.
 * 2. Short business TX via executePilotageCommand only — never around Nora.
 * 3. Ambiguous / insufficient acts do not call the command runner
 *    (avoids HUMAN_INTENT locks on clarification turns).
 * 4. C02 — durable effects are recoverable via business_commands
 *    (conv-auth:{clientTurnKey} / USER_MESSAGE sourceRef), not only resultJson.
 */
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { businessCommandEffects, businessCommands, humanDecisions } from "@/db/schema";
import {
  findAuthorityReviseCandidates,
  type DecisionBrief,
} from "@/domains/decisions/divergence-assist";
import { toCommandResult } from "@/domains/pilotage/command-runner";
import { qualifyPilotageIntent } from "@/domains/pilotage/intent";
import {
  executePilotageCommand,
  getPilotageProjection,
  reconcileCommandByClientKey,
} from "@/domains/pilotage/service";
import { conversationalClientCommandKey } from "@/domains/pilotage/thread-recovery";
import type { CommandResult, PilotageRequestBody } from "@/domains/pilotage/types";

const D5_FOUNDING_KINDS = new Set([
  "OPEN_CYCLE",
  "CLOSE_CYCLE",
  "TRANSITION_CYCLE",
  "CHOOSE_METHOD",
  "REPLACE_METHOD",
  "WITHDRAW_METHOD",
  "RETAIN_TRAJECTORY",
  "PROPOSE_TRAJECTORY",
  "APPLY_RESTRICTION",
  "LIFT_RESTRICTION",
  "REVOKE_DECISION",
]);

export type ConversationalAuthorityOutcome = {
  /** Whether a D5/D6 command was attempted. */
  attempted: boolean;
  /** Intent recognized before any command. */
  intentClarity: "CLEAR" | "AMBIGUOUS" | "NONE";
  intentReason?: string;
  operation?: string;
  /** Honest command result when attempted. */
  command: CommandResult | null;
  /** True only when a HumanDecision id was produced or already applied. */
  humanDecisionCreated: boolean;
  decisionId: string | null;
  clarification?: string;
  source: "none" | "user_message_command" | "clarification_only" | "reconstituted";
  /** Stable business key — searchable after Nora/HTTP interruption. */
  clientCommandKey?: string;
};

/** Stable D5/D6 client key for a conversational turn — not a second registry. */
export function conversationalCommandKey(clientTurnKey: string): string {
  return conversationalClientCommandKey(clientTurnKey);
}

async function loadDecisionBriefs(projectId: string): Promise<DecisionBrief[]> {
  const rows = await db
    .select({
      id: humanDecisions.id,
      kind: humanDecisions.kind,
      objectRef: humanDecisions.objectRef,
      scope: humanDecisions.scope,
      statement: humanDecisions.statement,
      state: humanDecisions.state,
      sourceKind: humanDecisions.sourceKind,
    })
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId))
    .orderBy(asc(humanDecisions.createdAt));
  return rows.map((r) => ({
    id: r.id,
    kind: r.kind,
    objectRef: r.objectRef ?? "",
    scope: r.scope ?? "PROJECT",
    statement: r.statement ?? "",
    state: r.state,
    sourceKind: r.sourceKind,
  }));
}

/**
 * Resolve a documentary REVISE target (CR-01 / C05 LIVE).
 * Uses the full APPLICABLE set — never the Nora cognitive window of 12.
 * Level A framing filters relevance only — never authorizes by itself.
 * Qualify must already be CLEAR (caller).
 *
 * Eligibility before uniqueness: only RECORD_DECISION compete for generic
 * REVISE. Founding D5 kinds (OPEN_CYCLE, …) may lexically match the utterance
 * but must not block a unique documentary target, nor be revised via this path.
 * 0 / many admissible candidates ⇒ clarification; never chronological newest-wins.
 */
function resolveReviseTarget(
  utterance: string,
  briefs: DecisionBrief[],
):
  | { ok: true; decisionId: string; statement: string }
  | { ok: false; reason: string } {
  const lexical = findAuthorityReviseCandidates(utterance, briefs);
  const documentary = lexical.filter((c) => c.kind === "RECORD_DECISION");

  if (documentary.length === 0) {
    const founding = lexical.find((c) => D5_FOUNDING_KINDS.has(c.kind));
    if (founding) {
      return {
        ok: false,
        reason: `Révision générique refusée pour ${founding.kind} — utiliser l'opération métier typée`,
      };
    }
    const other = lexical[0];
    if (other) {
      return {
        ok: false,
        reason: `Révision conversationnelle limitée aux décisions documentaires (kind=${other.kind})`,
      };
    }
    return {
      ok: false,
      reason: "Aucune décision applicable clairement revisitée — précisez la cible",
    };
  }
  if (documentary.length > 1) {
    const scopes = new Set(documentary.map((c) => c.scope));
    return {
      ok: false,
      reason:
        scopes.size > 1
          ? "Plusieurs décisions candidates à portées distinctes — précisez la portée et la cible"
          : "Plusieurs décisions candidates — précisez laquelle réviser",
    };
  }
  const target = documentary[0];
  if (!target || target.state !== "APPLICABLE") {
    return { ok: false, reason: "Cible de révision non applicable" };
  }
  const qualified = qualifyPilotageIntent(utterance);
  const statement =
    (qualified.clarity === "CLEAR" && qualified.statement) ||
    utterance.replace(/^(?:finalement|désormais|dorénavant)[,:]?\s+/i, "").trim();
  return { ok: true, decisionId: target.id, statement: statement.slice(0, 500) };
}

function outcomeFromCommand(
  command: CommandResult,
  operation: string,
  clientCommandKey: string,
  source: ConversationalAuthorityOutcome["source"] = "user_message_command",
): ConversationalAuthorityOutcome {
  const applied = command.status === "APPLIED" || command.status === "ALREADY_APPLIED";
  return {
    attempted: true,
    intentClarity: "CLEAR",
    operation,
    command,
    humanDecisionCreated: applied && Boolean(command.decisionId),
    decisionId: command.decisionId,
    source,
    clientCommandKey,
    intentReason:
      command.status === "REJECTED" || command.status === "CONFLICT" || command.status === "UNKNOWN"
        ? command.reason
        : undefined,
    clarification:
      command.status === "REJECTED" && command.reasonCode === "AMBIGUOUS"
        ? command.reason
        : undefined,
  };
}

/**
 * C02 — reconstitute a prior conversational D5/D6 effect from the durable registry.
 * Prefer clientCommandKey; fall back to USER_MESSAGE sourceRef (= userMessageId).
 * Never invents APPLIED/REJECTED when nothing is found.
 */
export async function reconstituteConversationalAuthority(input: {
  pilotId: string;
  projectId: string;
  clientTurnKey?: string | null;
  userMessageId?: string | null;
}): Promise<ConversationalAuthorityOutcome | null> {
  const key = input.clientTurnKey?.trim()
    ? conversationalCommandKey(input.clientTurnKey)
    : null;
  if (key) {
    try {
      const command = await reconcileCommandByClientKey(input.pilotId, input.projectId, key);
      return outcomeFromCommand(
        command,
        command.effects[0]?.effectKind ?? "UNKNOWN",
        key,
        "reconstituted",
      );
    } catch {
      /* fall through to sourceRef */
    }
  }
  const messageId = input.userMessageId?.trim();
  if (!messageId) return null;
  const cmd = (
    await db
      .select()
      .from(businessCommands)
      .where(
        and(
          eq(businessCommands.projectId, input.projectId),
          eq(businessCommands.actorPilotId, input.pilotId),
          eq(businessCommands.sourceKind, "USER_MESSAGE"),
          eq(businessCommands.sourceRef, messageId),
        ),
      )
      .limit(1)
  )[0];
  if (!cmd) return null;
  const effects = await db
    .select()
    .from(businessCommandEffects)
    .where(eq(businessCommandEffects.commandId, cmd.id))
    .orderBy(asc(businessCommandEffects.ordinal));
  const command = toCommandResult(cmd, effects, "replay");
  return outcomeFromCommand(
    command,
    cmd.operation || effects[0]?.effectKind || "UNKNOWN",
    cmd.clientCommandKey,
    "reconstituted",
  );
}

/**
 * Attempt a governed D5/D6 command from a persisted USER message.
 * Caller must pass the durable message id as sourceRef / actInstanceId.
 */
export async function applyConversationalAuthority(input: {
  pilotId: string;
  projectId: string;
  userMessageId: string;
  content: string;
  clientTurnKey: string;
}): Promise<ConversationalAuthorityOutcome> {
  const content = input.content.trim();
  const clientCommandKey = conversationalCommandKey(input.clientTurnKey);
  const empty: ConversationalAuthorityOutcome = {
    attempted: false,
    intentClarity: "NONE",
    command: null,
    humanDecisionCreated: false,
    decisionId: null,
    source: "none",
    clientCommandKey,
  };
  if (!content || !input.projectId || !input.userMessageId) return empty;

  // C02 — if this turn key already produced a durable command, return it (no second effect).
  const prior = await reconstituteConversationalAuthority({
    pilotId: input.pilotId,
    projectId: input.projectId,
    clientTurnKey: input.clientTurnKey,
    userMessageId: input.userMessageId,
  });
  if (prior?.attempted && prior.command) {
    return prior;
  }

  const qualified = qualifyPilotageIntent(content);
  if (qualified.clarity === "NONE") {
    return { ...empty, intentClarity: "NONE", intentReason: qualified.reason };
  }
  if (qualified.clarity === "AMBIGUOUS") {
    return {
      ...empty,
      intentClarity: "AMBIGUOUS",
      intentReason: qualified.reason,
      clarification: qualified.reason,
      source: "clarification_only",
    };
  }

  const projection = await getPilotageProjection(input.pilotId, input.projectId);
  const base: PilotageRequestBody = {
    clientCommandKey,
    expectedRevision: projection.revision,
    sourceKind: "USER_MESSAGE",
    sourceRef: input.userMessageId,
    utterance: content,
    actInstanceId: input.userMessageId,
  };

  if (qualified.operation === "REVISE_DECISION") {
    const briefs = await loadDecisionBriefs(input.projectId);
    const resolved = resolveReviseTarget(content, briefs);
    if (!resolved.ok) {
      return {
        attempted: false,
        intentClarity: "AMBIGUOUS",
        intentReason: resolved.reason,
        command: null,
        humanDecisionCreated: false,
        decisionId: null,
        clarification: resolved.reason,
        source: "clarification_only",
        operation: "REVISE_DECISION",
        clientCommandKey,
      };
    }
    const command = await executePilotageCommand(input.pilotId, input.projectId, {
      ...base,
      operation: "REVISE_DECISION",
      decisionId: resolved.decisionId,
      statement: resolved.statement,
      objectRef: qualified.objectRef,
    });
    return outcomeFromCommand(command, "REVISE_DECISION", clientCommandKey);
  }

  if (qualified.operation === "RECORD_DECISION") {
    const command = await executePilotageCommand(input.pilotId, input.projectId, {
      ...base,
      operation: "RECORD_DECISION",
      statement: qualified.statement ?? qualified.objective ?? content,
      objectRef: qualified.objectRef,
      objective: qualified.objective,
    });
    return outcomeFromCommand(command, "RECORD_DECISION", clientCommandKey);
  }

  /** C06 — resolve a unique ACTIVE restriction before LIFT (never approximate). */
  if (qualified.operation === "LIFT_RESTRICTION") {
    const hint = (qualified.restrictionKindHint ?? "").trim().toUpperCase();
    const targetHint = (qualified.restrictionTargetRefHint ?? "").trim();
    const active = projection.restrictions.filter((r) => r.status === "ACTIVE");
    let pool = hint
      ? active.filter((r) => r.targetKind.toUpperCase() === hint)
      : active;
    // If the pilot named an instance/specialty, require a matching targetRef
    // (a lone matching kind with a contradictory target is not enough).
    if (targetHint && pool.length > 0) {
      const hintNorm = targetHint.toUpperCase();
      const narrowed = pool.filter((r) => {
        const ref = (r.targetRef || "*").toUpperCase();
        if (ref === "*" || ref === hintNorm) return true;
        // Specialty name vs cycle id: allow when pilot says CADRAGE and target is cycle id
        // only if projection cycle type matches — otherwise require exact/soft includes.
        if (projection.cycle && hintNorm === projection.cycle.cycleType.toUpperCase()) {
          return ref === projection.cycle.id.toUpperCase() || ref === "*";
        }
        return ref.includes(hintNorm) || hintNorm.includes(ref);
      });
      if (narrowed.length === 0) {
        return {
          attempted: false,
          intentClarity: "AMBIGUOUS",
          intentReason:
            "Restriction active d'un autre cible que celle indiquée — précisez la cible exacte",
          command: null,
          humanDecisionCreated: false,
          decisionId: null,
          clarification:
            "Restriction active d'un autre cible que celle indiquée — précisez la cible exacte",
          source: "clarification_only",
          operation: "LIFT_RESTRICTION",
          clientCommandKey,
        };
      }
      pool = narrowed;
    }
    if (pool.length === 0) {
      return {
        attempted: false,
        intentClarity: "AMBIGUOUS",
        intentReason: "Aucune restriction active correspondant à la demande",
        command: null,
        humanDecisionCreated: false,
        decisionId: null,
        clarification: "Aucune restriction active correspondant à la demande — précisez la cible",
        source: "clarification_only",
        operation: "LIFT_RESTRICTION",
        clientCommandKey,
      };
    }
    if (pool.length > 1) {
      return {
        attempted: false,
        intentClarity: "AMBIGUOUS",
        intentReason: "Plusieurs restrictions actives — précisez laquelle lever",
        command: null,
        humanDecisionCreated: false,
        decisionId: null,
        clarification: "Plusieurs restrictions actives — précisez laquelle lever",
        source: "clarification_only",
        operation: "LIFT_RESTRICTION",
        clientCommandKey,
      };
    }
    const target = pool[0];
    const command = await executePilotageCommand(input.pilotId, input.projectId, {
      ...base,
      operation: "LIFT_RESTRICTION",
      restrictionId: target.id,
    });
    return outcomeFromCommand(command, "LIFT_RESTRICTION", clientCommandKey);
  }

  const command = await executePilotageCommand(input.pilotId, input.projectId, {
    ...base,
    operation: qualified.operation,
    cycleType: qualified.cycleType,
    toCycleType: qualified.toCycleType,
    methodRef: qualified.methodRef,
    methodVersion: qualified.methodVersion,
    objective: qualified.objective,
  });
  return outcomeFromCommand(command, qualified.operation, clientCommandKey);
}

```

## 6. Diffs exploitables

### 6.1 intent.ts

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts b/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
index 26dba3f4..c3b5ed9e 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
@@ -24,21 +24,59 @@ export type IntentQualification =
   | { clarity: "AMBIGUOUS"; reason: string }
   | { clarity: "NONE"; reason: string };

-/** Derive a short objectRef from a decision statement for journal / confrontation. */
+/**
+ * C04 — durable objectRef from the primary arbitration, never from an
+ * adversative reserve (« mais ne signifie pas que… »).
+ */
 export function deriveDecisionObjectRef(statement: string): string {
   const text = statement.trim().replace(/\s+/g, " ");
-  const anchored = text.match(
+  // Strip Nora dialogue residue, then keep the primary clause before a reserve.
+  const core = extractDecisionCore(text);
+  const primary =
+    core
+      .split(
+        /\bmais\s+(?:ne\s+signifie|cela\s+ne|ceci\s+ne|pas\s+que|cela\s+n['’]implique)\b/i,
+      )[0]
+      ?.trim()
+      .replace(/[.,;:]+$/g, "")
+      .trim() || core;
+
+  // Prefer an explicit priority designation when present.
+  const priority = primary.match(
+    /\b(?:en\s+priorit[eé]|priorit[eé]\s+(?:d['’]|de|sur))\s+([^.;]{6,80})/i,
+  );
+  if (priority?.[1]) {
+    return priority[1]
+      .trim()
+      .replace(/^(?:les|la|le|des|du|d['’])\s+/i, "")
+      .slice(0, 80);
+  }
+
+  // « examinerons / examinons … [en priorité] les/la … »
+  const examine = primary.match(
+    /\b(?:examinerons|examinons|examiner)\s+(?:d['’]abord\s+)?(?:en\s+priorit[eé]\s+)?(?:les|la|le|des|du)?\s*([^.;]{6,80})/i,
+  );
+  if (examine?.[1]) {
+    return examine[1].trim().slice(0, 80);
+  }
+
+  // « X est/sera… » only on the primary arbitration — never a reserve subject.
+  const anchored = primary.match(
     /(?:que\s+)?(?:la|le|l['’])?\s*([^,?.;]{3,60}?)\s+(?:est|sera|devient|reste|doit|peu[tv])\b/i,
   );
-  if (anchored?.[1]) return anchored[1].trim().slice(0, 80);
-  // Prefer content before a Nora/dialogue instruction if still present.
-  const core = extractDecisionCore(text);
-  const tokens = core
+  if (anchored?.[1]) {
+    const cand = anchored[1].trim();
+    if (!/^mais\b/i.test(cand) && !/\bne\s+signifie\b/i.test(cand)) {
+      return cand.slice(0, 80);
+    }
+  }
+
+  const tokens = primary
     .toLowerCase()
     .split(/[^a-z0-9àâäéèêëïîôùûüç]+/i)
-    .filter((t) => t.length >= 4)
+    .filter((t) => t.length >= 4 && !/^(pendant|cette|nous|pour|avec|dans)$/i.test(t))
     .slice(0, 4);
-  return (tokens.join(" ") || core.slice(0, 40)).trim();
+  return (tokens.join(" ") || primary.slice(0, 40)).trim();
 }

 const PHRASES: Array<{ type: CycleType; phrase: string }> = [
@@ -150,12 +188,15 @@ export function sanitizeCycleObjective(rest: string, cycleType: CycleType): stri

 /**
  * C04 — keep the durable arbitration; drop Nora dialogue / follow-up asks.
+ * Also strip the syntactic « que, » residue left by « je décide que … ».
  */
 export function extractDecisionCore(statement: string): string {
   const text = statement.trim().replace(/\s+/g, " ");
   if (!text) return "";
   const split = text.split(NORA_DIALOGUE_SPLIT);
-  const core = (split[0] ?? text).trim().replace(/[.,;:]+$/g, "").trim();
+  let core = (split[0] ?? text).trim().replace(/[.,;:]+$/g, "").trim();
+  // « je décide que, pendant… » → durable statement without the conjunction residue.
+  core = core.replace(/^que\s*[,:]?\s+/i, "").trim();
   return core || text;
 }

@@ -230,14 +271,21 @@ export function refusesOrWithholdsAct(
     return true;
   }
   if (act === "open") {
-    return /\b(?:n['’]ouvre\s+pas|ne\s+(?:l['’]\s*)?ouvre\s+pas|sans\s+ouvrir|ne\s+pas\s+ouvrir)\b/i.test(
-      t,
+    return (
+      /\b(?:n['’]ouvre\s+pas|ne\s+(?:l['’]\s*)?ouvre\s+pas|sans\s+ouvrir|ne\s+pas\s+ouvrir)\b/i.test(
+        t,
+      ) ||
+      /\bne\s+(?:souhaite|veux|veut)\s+ni\s+[^.!?]{0,40}\bouvrir\b/i.test(t) ||
+      /\bni\s+(?:en\s+)?ouvrir\b/i.test(t)
     );
   }
   if (act === "close") {
-    // Sole negation of close (not a reserve after « je décide de clôturer »)
+    // Sole negation / exclusion of close (not a reserve after « je décide de clôturer »).
+    // Covers « ne clôture pas », « sans clôturer », « ne souhaite ni clôturer… ».
     return (
-      /\b(?:ne\s+cl[oô]ture\s+pas|sans\s+cl[oô]tur|ne\s+pas\s+cl[oô]tur)\b/i.test(t) &&
+      (/\b(?:ne\s+cl[oô]ture\s+pas|sans\s+cl[oô]tur|ne\s+pas\s+cl[oô]tur)\b/i.test(t) ||
+        /\bne\s+(?:souhaite|veux|veut)\s+ni\s+cl[oô]tur/i.test(t) ||
+        /\bni\s+cl[oô]tur(?:er)?\b/i.test(t)) &&
       !/\bje\s+d[eé]cide\s+de\s+cl[oô]tur/i.test(t)
     );
   }
@@ -287,6 +335,30 @@ export function isNonPerformativeCloseFraming(text: string): boolean {
   return false;
 }

+/**
+ * C06 — true only when CLOSE is asserted as a second performative act
+ * alongside another GO (e.g. LIFT). Negated / excluded mentions
+ * (« ne clôture pas », « je ne souhaite ni clôturer… ») are not acts.
+ */
+export function assertsAffirmativeCloseAct(text: string): boolean {
+  const t = text.trim();
+  if (!t) return false;
+  if (/\bje\s+d[eé]cide\s+de\s+cl[oô]tur/i.test(t)) return true;
+  if (
+    /\b(?:puis|ensuite|et)\s+(?:je\s+)?(?:cl[oô]ture|clore|ferme)\b/i.test(t) &&
+    !refusesOrWithholdsAct(t, "close")
+  ) {
+    return true;
+  }
+  if (
+    /\b(?:cl[oô]ture|clore|ferme)\s+(?:maintenant\s+)?(?:le\s+)?cycle\b/i.test(t) &&
+    !refusesOrWithholdsAct(t, "close")
+  ) {
+    return true;
+  }
+  return false;
+}
+
 /** Detect OPEN_CYCLE performative anywhere in a developed message (C01). */
 function findOpenCycleAct(
   text: string,
@@ -553,10 +625,9 @@ export function qualifyPilotageIntent(utterance: string): IntentQualification {
     return { clarity: "AMBIGUOUS", reason: lift.ambiguous };
   }
   if (lift && "restrictionKindHint" in lift) {
-    // If the same message also asserts CLOSE without reserving « ne clôture pas », AMBIGUOUS.
-    const alsoClose =
-      /\bcl[oô]tur/i.test(text) && !/\bne\s+(?:pas\s+)?(?:cl[oô]tur|ferme)|sans\s+cl[oô]tur/i.test(text);
-    if (alsoClose) {
+    // Second affirmative CLOSE act in the same turn → clarification, zero effect.
+    // Negated / excluded mentions of close (incl. « ne souhaite ni clôturer ») are not acts.
+    if (assertsAffirmativeCloseAct(text)) {
       return {
         clarity: "AMBIGUOUS",
         reason: "Levée et clôture dans le même message — un seul acte à la fois",
```

### 6.2 conversation-authority.ts

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts b/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
index 38e7c7c5..4abec875 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
@@ -90,11 +90,15 @@ async function loadDecisionBriefs(projectId: string): Promise<DecisionBrief[]> {
 }

 /**
- * Resolve a documentary REVISE target (CR-01).
+ * Resolve a documentary REVISE target (CR-01 / C05 LIVE).
  * Uses the full APPLICABLE set — never the Nora cognitive window of 12.
  * Level A framing filters relevance only — never authorizes by itself.
- * Qualify must already be CLEAR (caller). Founding D5 kinds are refused.
- * 0 / many candidates ⇒ clarification; never chronological newest-wins.
+ * Qualify must already be CLEAR (caller).
+ *
+ * Eligibility before uniqueness: only RECORD_DECISION compete for generic
+ * REVISE. Founding D5 kinds (OPEN_CYCLE, …) may lexically match the utterance
+ * but must not block a unique documentary target, nor be revised via this path.
+ * 0 / many admissible candidates ⇒ clarification; never chronological newest-wins.
  */
 function resolveReviseTarget(
   utterance: string,
@@ -102,15 +106,31 @@ function resolveReviseTarget(
 ):
   | { ok: true; decisionId: string; statement: string }
   | { ok: false; reason: string } {
-  const candidates = findAuthorityReviseCandidates(utterance, briefs);
-  if (candidates.length === 0) {
+  const lexical = findAuthorityReviseCandidates(utterance, briefs);
+  const documentary = lexical.filter((c) => c.kind === "RECORD_DECISION");
+
+  if (documentary.length === 0) {
+    const founding = lexical.find((c) => D5_FOUNDING_KINDS.has(c.kind));
+    if (founding) {
+      return {
+        ok: false,
+        reason: `Révision générique refusée pour ${founding.kind} — utiliser l'opération métier typée`,
+      };
+    }
+    const other = lexical[0];
+    if (other) {
+      return {
+        ok: false,
+        reason: `Révision conversationnelle limitée aux décisions documentaires (kind=${other.kind})`,
+      };
+    }
     return {
       ok: false,
       reason: "Aucune décision applicable clairement revisitée — précisez la cible",
     };
   }
-  if (candidates.length > 1) {
-    const scopes = new Set(candidates.map((c) => c.scope));
+  if (documentary.length > 1) {
+    const scopes = new Set(documentary.map((c) => c.scope));
     return {
       ok: false,
       reason:
@@ -119,22 +139,10 @@ function resolveReviseTarget(
           : "Plusieurs décisions candidates — précisez laquelle réviser",
     };
   }
-  const target = candidates[0];
+  const target = documentary[0];
   if (!target || target.state !== "APPLICABLE") {
     return { ok: false, reason: "Cible de révision non applicable" };
   }
-  if (D5_FOUNDING_KINDS.has(target.kind)) {
-    return {
-      ok: false,
-      reason: `Révision générique refusée pour ${target.kind} — utiliser l'opération métier typée`,
-    };
-  }
-  if (target.kind !== "RECORD_DECISION") {
-    return {
-      ok: false,
-      reason: `Révision conversationnelle limitée aux décisions documentaires (kind=${target.kind})`,
-    };
-  }
   const qualified = qualifyPilotageIntent(utterance);
   const statement =
     (qualified.clarity === "CLEAR" && qualified.statement) ||
```

### 6.3 tests unit (diff)

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml3-rct02-intent.test.ts b/projects/sfia-studio-next/web/tests/unit/ml3-rct02-intent.test.ts
index 4f8eed1b..f56ad193 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml3-rct02-intent.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml3-rct02-intent.test.ts
@@ -1,5 +1,7 @@
 import { describe, expect, it } from "vitest";
+import { findAuthorityReviseCandidates } from "@/domains/decisions/divergence-assist";
 import {
+  deriveDecisionObjectRef,
   extractDecisionCore,
   extractReviseStatement,
   qualifyPilotageIntent,
@@ -14,6 +16,27 @@ import {
 const T05_REPRESENTATIVE =
   "Je révise la décision que j'ai prise sur l'orientation du cadrage. Cette nouvelle orientation remplace la priorité sur le suivi des décisions et consiste à explorer plusieurs situations réelles de coordination interéquipes.";

+/** Exact LIVE transcripts — sfia-next-rct02-live-gaps-d646d42a.md §3–5. Do not rewrite. */
+const C04_LIVE = `Je décide que, pendant ce cadrage, nous examinerons en priorité les difficultés de coordination et de suivi des décisions entre plusieurs équipes.
+
+Cette orientation constitue une priorité d'exploration, mais ne signifie pas que le besoin utilisateur est déjà validé.
+
+Nora, maintenant que cette décision est exprimée, aide-moi à identifier la prochaine question importante à poser pour vérifier cette hypothèse.`;
+
+const C05_LIVE = `Nora, je révise la décision que j'ai prise concernant la priorité d'exploration des difficultés de coordination et de suivi des décisions entre plusieurs équipes.
+
+Plutôt que de nous concentrer immédiatement sur ces difficultés, je décide que nous examinerons d'abord différentes situations réelles de coordination interéquipes pour identifier le problème véritablement prioritaire.
+
+Cette nouvelle orientation remplace la priorité précédente. Le besoin utilisateur reste à valider.
+
+Aide-moi ensuite à identifier les premières situations concrètes que nous devrions examiner.`;
+
+const C06_LIVE = `Nora, je décide de lever uniquement la restriction CYCLE_MUTATION actuellement active sur le cycle CADRAGE.
+
+Cette levée concerne uniquement ce cycle. Je ne souhaite ni clôturer le cycle, ni en ouvrir un autre.
+
+Une fois cette décision appliquée, confirme-moi ce qui a réellement été enregistré dans Studio.`;
+
 /**
  * RCT-02 C01–C08 — conversational qualification oracles from user recette messages.
  * Deterministic only — does not prove LIVE Nora cognition.
@@ -73,6 +96,24 @@ describe("ml3 RCT-02 conversational intent (C01–C06/C08)", () => {
     expect(extractDecisionCore(msg.split(/je décide que/i)[1] ?? msg)).not.toMatch(/aide-moi/i);
   });

+  it("C04 LIVE: exact message → clean statement + objectRef from primary arbitration", () => {
+    const q = qualifyPilotageIntent(C04_LIVE);
+    expect(q).toMatchObject({ clarity: "CLEAR", operation: "RECORD_DECISION" });
+    if (q.clarity === "CLEAR") {
+      expect(q.statement).toMatch(/difficultés de coordination/i);
+      expect(q.statement).toMatch(/besoin utilisateur est déjà validé/i);
+      expect(q.statement).not.toMatch(/^que\b/i);
+      expect(q.statement).not.toMatch(/aide-moi/i);
+      expect(q.statement).not.toMatch(/Nora/i);
+      expect(q.objectRef).toMatch(/coordination|suivi|difficult/i);
+      expect(q.objectRef).not.toMatch(/mais ne signifie/i);
+      expect(q.objectRef).not.toMatch(/besoin utilisateur/i);
+    }
+    expect(deriveDecisionObjectRef(q.clarity === "CLEAR" ? (q.statement ?? "") : "")).not.toMatch(
+      /mais ne signifie/i,
+    );
+  });
+
   it("C05 Critical Review: T05 representative (period, no colon) yields REVISE with developed statement", () => {
     const extracted = extractReviseStatement(T05_REPRESENTATIVE);
     expect(extracted).toBeTruthy();
@@ -101,6 +142,40 @@ describe("ml3 RCT-02 conversational intent (C01–C06/C08)", () => {
     }
   });

+  it("C05 LIVE: exact message qualifies REVISE; OPEN_CYCLE lexical hit does not alone decide eligibility", () => {
+    const q = qualifyPilotageIntent(C05_LIVE);
+    expect(q).toMatchObject({ clarity: "CLEAR", operation: "REVISE_DECISION" });
+    if (q.clarity === "CLEAR") {
+      expect(q.statement).toMatch(/situations réelles de coordination/i);
+      expect(q.statement).not.toMatch(/Aide-moi/i);
+    }
+    // Lexical finder may still surface OPEN + RECORD (pre-eligibility); authority filters later.
+    const lexical = findAuthorityReviseCandidates(C05_LIVE, [
+      {
+        id: "open1",
+        kind: "OPEN_CYCLE",
+        objectRef: "CADRAGE",
+        scope: "PROJECT",
+        statement:
+          "définir précisément le problème utilisateur, les besoins prioritaires et les hypothèses à vérifier",
+        state: "APPLICABLE",
+        sourceKind: "USER_MESSAGE",
+      },
+      {
+        id: "rec1",
+        kind: "RECORD_DECISION",
+        objectRef: "mais ne signifie pas que le besoin utilisateur",
+        scope: "PROJECT",
+        statement:
+          "que, pendant ce cadrage, nous examinerons en priorité les difficultés de coordination et de suivi des décisions entre plusieurs équipes. Cette orientation constitue une priorité d'exploration, mais ne signifie pas que le besoin utilisateur est déjà validé",
+        state: "APPLICABLE",
+        sourceKind: "USER_MESSAGE",
+      },
+    ]);
+    expect(lexical.map((c) => c.kind).sort()).toEqual(["OPEN_CYCLE", "RECORD_DECISION"]);
+    expect(lexical.filter((c) => c.kind === "RECORD_DECISION")).toHaveLength(1);
+  });
+
   it("C06: conversational LIFT_RESTRICTION is CLEAR with kind hint", () => {
     const q = qualifyPilotageIntent(
       "Nora, je décide de lever uniquement la restriction CYCLE_MUTATION sur ce cycle. Ne clôture pas le cycle.",
@@ -112,6 +187,23 @@ describe("ml3 RCT-02 conversational intent (C01–C06/C08)", () => {
     });
   });

+  it("C06 LIVE: exact message with « ne souhaite ni clôturer » → CLEAR LIFT (not AMBIGUOUS)", () => {
+    const q = qualifyPilotageIntent(C06_LIVE);
+    expect(q).toMatchObject({
+      clarity: "CLEAR",
+      operation: "LIFT_RESTRICTION",
+      restrictionKindHint: "CYCLE_MUTATION",
+    });
+  });
+
+  it("C06: affirmative LIFT then CLOSE in same message stays AMBIGUOUS", () => {
+    const q = qualifyPilotageIntent(
+      "Nora, je décide de lever la restriction CYCLE_MUTATION puis je décide de clôturer le cycle CADRAGE.",
+    );
+    expect(q.clarity).toBe("AMBIGUOUS");
+    expect(q.clarity === "AMBIGUOUS" ? q.reason : "").toMatch(/Levée et clôture/i);
+  });
+
   it("C06 Critical Review: negated / refused / unauthorized lift never LIFT", () => {
     for (const msg of [
       "Ne lève pas la restriction CYCLE_MUTATION",
```

### 6.4 tests PG (diff)

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
index 99b2891c..c46f9a82 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
@@ -2088,5 +2088,132 @@ describe("PostgreSQL ML3 pilotage and decisions", () => {
       expect(after.cycle?.cycleType).toBe("CADRAGE");
       expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(journalBefore.length);
     });
+
+    /**
+     * LIVE remediation (d646d42a gaps) — exact transcripts C04 → C05 → C06.
+     * OPEN founding + polluted historical objectRef must not block REVISE;
+     * « ne souhaite ni clôturer » must not block LIFT.
+     */
+    it("LIVE C04/C05/C06: exact messages → clean RECORD, REVISE despite OPEN, LIFT despite negative close", async () => {
+      const { applyConversationalAuthority } = await import(
+        "@/domains/pilotage/conversation-authority"
+      );
+      const C04_LIVE = `Je décide que, pendant ce cadrage, nous examinerons en priorité les difficultés de coordination et de suivi des décisions entre plusieurs équipes.
+
+Cette orientation constitue une priorité d'exploration, mais ne signifie pas que le besoin utilisateur est déjà validé.
+
+Nora, maintenant que cette décision est exprimée, aide-moi à identifier la prochaine question importante à poser pour vérifier cette hypothèse.`;
+      const C05_LIVE = `Nora, je révise la décision que j'ai prise concernant la priorité d'exploration des difficultés de coordination et de suivi des décisions entre plusieurs équipes.
+
+Plutôt que de nous concentrer immédiatement sur ces difficultés, je décide que nous examinerons d'abord différentes situations réelles de coordination interéquipes pour identifier le problème véritablement prioritaire.
+
+Cette nouvelle orientation remplace la priorité précédente. Le besoin utilisateur reste à valider.
+
+Aide-moi ensuite à identifier les premières situations concrètes que nous devrions examiner.`;
+      const C06_LIVE = `Nora, je décide de lever uniquement la restriction CYCLE_MUTATION actuellement active sur le cycle CADRAGE.
+
+Cette levée concerne uniquement ce cycle. Je ne souhaite ni clôturer le cycle, ni en ouvrir un autre.
+
+Une fois cette décision appliquée, confirme-moi ce qui a réellement été enregistré dans Studio.`;
+
+      const { pilotId, projectId, preparationId } = await seedProject("live-c04-c05-c06");
+
+      // C01-like OPEN so OPEN_CYCLE is APPLICABLE alongside RECORD (C05 eligibility).
+      const openContent =
+        "Nora, je décide de commencer le cadrage. Ouvre le cycle CADRAGE avec pour objectif de définir précisément le problème utilisateur, les besoins prioritaires et les hypothèses à vérifier.";
+      const openMsg = await insertUserMessage(preparationId, openContent, { ordinal: 1 });
+      const opened = await applyConversationalAuthority({
+        pilotId,
+        projectId,
+        userMessageId: openMsg,
+        content: openContent,
+        clientTurnKey: `live-open-${newId("turn")}`,
+      });
+      expect(opened.attempted).toBe(true);
+      expect(opened.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      const cycleId = (await getPilotageProjection(pilotId, projectId)).cycle?.id ?? null;
+      expect(cycleId).toBeTruthy();
+
+      // C04 LIVE RECORD
+      const recMsg = await insertUserMessage(preparationId, C04_LIVE, { ordinal: 2 });
+      const recorded = await applyConversationalAuthority({
+        pilotId,
+        projectId,
+        userMessageId: recMsg,
+        content: C04_LIVE,
+        clientTurnKey: `live-c04-${newId("turn")}`,
+      });
+      expect(recorded.attempted).toBe(true);
+      expect(recorded.operation).toBe("RECORD_DECISION");
+      expect(recorded.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      expect(recorded.decisionId).toBeTruthy();
+      const afterC04 = await listDecisionJournal(pilotId, projectId);
+      const recRow = afterC04.find((d) => d.id === recorded.decisionId);
+      expect(recRow?.state).toBe("APPLICABLE");
+      expect(recRow?.statement).toMatch(/difficultés de coordination/i);
+      expect(recRow?.statement).not.toMatch(/^que\b/i);
+      expect(recRow?.statement).not.toMatch(/aide-moi/i);
+      expect(recRow?.objectRef ?? "").toMatch(/coordination|suivi|difficult/i);
+      expect(recRow?.objectRef ?? "").not.toMatch(/mais ne signifie/i);
+
+      // C05 LIVE REVISE — unique documentary despite OPEN_CYCLE lexical competition
+      const revMsg = await insertUserMessage(preparationId, C05_LIVE, { ordinal: 3 });
+      const revised = await applyConversationalAuthority({
+        pilotId,
+        projectId,
+        userMessageId: revMsg,
+        content: C05_LIVE,
+        clientTurnKey: `live-c05-${newId("turn")}`,
+      });
+      expect(revised.attempted).toBe(true);
+      expect(revised.operation).toBe("REVISE_DECISION");
+      expect(revised.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      expect(revised.humanDecisionCreated).toBe(true);
+      const afterC05 = await listDecisionJournal(pilotId, projectId);
+      expect(afterC05.find((d) => d.id === recorded.decisionId)?.state).toBe("REVISED");
+      const openStill = afterC05.find((d) => d.kind === "OPEN_CYCLE");
+      expect(openStill?.state).toBe("APPLICABLE");
+      const newRec = afterC05.filter(
+        (d) => d.state === "APPLICABLE" && d.kind === "RECORD_DECISION",
+      );
+      expect(newRec).toHaveLength(1);
+      expect(newRec[0]?.id).toBe(revised.decisionId);
+      expect(newRec[0]?.statement).toMatch(/situations réelles de coordination/i);
+      expect(newRec[0]?.statement).not.toMatch(/Aide-moi/i);
+      expect(newRec[0]?.supersedesDecisionId).toBe(recorded.decisionId);
+
+      // APPLY instance restriction (cockpit path) then C06 LIVE LIFT
+      const viewBeforeApply = await getPilotageProjection(pilotId, projectId);
+      const applied = await applyGovernanceRestriction(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: viewBeforeApply.revision,
+        sourceRef: newId("src"),
+        targetKind: "CYCLE_MUTATION",
+        targetRef: cycleId!,
+        statement: "Freeze CADRAGE instance",
+      });
+      expect(applied.status).toBe("APPLIED");
+      expect(
+        (await getPilotageProjection(pilotId, projectId)).restrictions.filter(
+          (r) => r.status === "ACTIVE",
+        ),
+      ).toHaveLength(1);
+
+      const liftMsg = await insertUserMessage(preparationId, C06_LIVE, { ordinal: 4 });
+      const lifted = await applyConversationalAuthority({
+        pilotId,
+        projectId,
+        userMessageId: liftMsg,
+        content: C06_LIVE,
+        clientTurnKey: `live-c06-${newId("turn")}`,
+      });
+      expect(lifted.attempted).toBe(true);
+      expect(lifted.operation).toBe("LIFT_RESTRICTION");
+      expect(lifted.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      const afterC06 = await getPilotageProjection(pilotId, projectId);
+      expect(afterC06.restrictions.filter((r) => r.status === "ACTIVE")).toHaveLength(0);
+      expect(afterC06.cycle?.status).toBe("ACTIVE");
+      expect(afterC06.cycle?.cycleType).toBe("CADRAGE");
+    });
   });
 });
```

## 7. Documentation as-built (même lot)

- `construction/pilotage-et-decisions/specification-technique.md` — section LIVE remediation
- `construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md` — preuves C04/C05/C06
- `construction/delivery-history.md` — DELIV-2026-11-07-ML3-RCT02-LIVE-REMEDIATION-LOCAL
- `construction/pilotage-et-decisions/recette-ml3-rct02-live-corrective-gaps.md` — copie D0 non normative

## 8. Gates NON acquis

push projet, PR, merge, redéploiement RECETTE, session LIVE OpenAI Cursor, CI workflow, STABLE, release, ML3 CLOSED, ADOPTED.

## 9. Proposition retest LIVE (après GO Morris + nouveau candidat)

Retester C04/C05/C06 messages exacts + spot C01/C07/C08/faux GO sur **nouveau** SHA uniquement après mise à disposition autorisée. Ne pas muter RECETTE actuelle `d646d42a`.

## 10. Verdict

**READY FOR CHATGPT REVIEW — LOCAL LIVE REMEDIATION**
