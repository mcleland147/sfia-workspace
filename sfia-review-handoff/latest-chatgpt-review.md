# SFIA Studio Next — Review Pack FULL
## ML3 / RCT-02 — C01 FALSE-GO retract (final local remediation)

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-07T01:42Z |
| Nature | Critical Rework après handoff `d89c3009` / blob `4d2cefb9` (REWORK REQUIRED — C01 FALSE GO) |
| Base projet | `d646d42addb5a4c4a3cab441e9e39018d85fae70` |
| Branche locale | `sfia/next-ml3-rct02-live-remediation` (**non poussée**) |
| RECETTE | `:3200` / `d646d42a` **préservée** |
| Fake/Real | unit + PG DEV `:5433` ; ≠ LIVE Nora |
| Version | `0.0.0-dev` / `NO RELEASE` |
| Verdict | **READY FOR CHATGPT FINAL REVIEW — LOCAL LIVE REMEDIATION** |

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

.tmp-sfia-review/chatgpt-review.md                 | 166 ------------
 .../construction/delivery-history.md               |  44 +++
 .../specification-technique.md                     |  31 +++
 .../pilotage-et-decisions/tracabilite-r2-r3-r4.md  |  16 ++
 .../src/domains/pilotage/conversation-authority.ts |  87 ++++--
 .../web/src/domains/pilotage/intent.ts             | 150 +++++++++--
 .../web/tests/integration/ml3-pilotage.pg.test.ts  | 298 +++++++++++++++++++++
 .../web/tests/unit/ml3-rct02-intent.test.ts        | 132 +++++++++
 8 files changed, 712 insertions(+), 212 deletions(-)
```

HEAD base `d646d42addb5a4c4a3cab441e9e39018d85fae70` ; modifications locales non commit/push projet.

## 2. Reproduction avant correction

| Message | Avant | Attendu |
|---|---|---|
| `Nora, ouvre le cycle CADRAGE. Finalement, ne l'ouvre pas : je retire mon GO.` | CLEAR OPEN_CYCLE (faux GO) | aucune mutation |
| `Nora, ouvre le cycle CADRAGE. Mais non, n'ouvre pas ce cycle, c'est une erreur.` | CLEAR OPEN_CYCLE (faux GO) | aucune mutation |
| POS `… Je ne souhaite ni clôturer… ni en ouvrir un autre.` | CLEAR OPEN (à conserver) | 1 OPEN CADRAGE |

Cause : `refusesOrWithholdsAct('open')` neutralisait **toute** négation dès qu'un OPEN affirmatif était présent.

## 3. Correctif

Distinction portée :
- **Négation / retrait du GO demandé** (`ne l'ouvre pas`, `n'ouvre pas ce cycle`, `je retire mon GO`) → withhold / AMBIGUOUS, zéro effet.
- **Exclusion d'une autre ouverture** (`ni en ouvrir un autre`) avec OPEN affirmatif → ne bloque pas le GO primaire.

`findOpenCycleAct` : après surface OPEN reconnue, si withhold → `ambiguous` (clarification), jamais GO déduit de la première phrase. Citations / refus / hypothèses inchangés.

C04/C05/C06 LIVE positifs non refaits sans nécessité.

## 4. Preuves réexécutées

| Suite | Résultat |
|---|---|
| unit intent+divergence+authority | **49/49 PASS** |
| PG `ml3-pilotage.pg.test.ts` | **49/49 PASS** (retract zéro mutation + positif C01 + LIVE C04/C05/C06 + C05 founding/hist) |
| lint / tsc / build | PASS |

## 5. Code produit — contenu intégral

### 5.1 intent.ts (FULL)

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
    // Retraction / contradiction of the *requested* open — always withhold,
    // even if an earlier clause said « ouvre le cycle » (false-GO guard).
    if (
      /\b(?:je\s+)?retire\s+(?:mon\s+)?GO\b/i.test(t) ||
      /\b(?:n['’]ouvre\s+pas|ne\s+(?:l['’]\s*)?ouvre\s+pas|sans\s+ouvrir|ne\s+pas\s+ouvrir)\b/i.test(
        t,
      )
    ) {
      return true;
    }
    // Exclusion of an *additional* open (« ni en ouvrir un autre ») alongside an
    // affirmative OPEN — not a withhold of the primary GO.
    if (
      /\bne\s+(?:souhaite|veux|veut)\s+ni\s+[^.!?]{0,60}\bouvrir\b/i.test(t) ||
      /\bni\s+(?:en\s+)?ouvrir\b/i.test(t)
    ) {
      const hasAffirmativeOpen =
        /\b(?:ouvre|ouvrez)\s+(?:le\s+|un\s+)?cycle\b/i.test(t) ||
        /\bje\s+d[eé]cide\s+de\s+commencer\b/i.test(t);
      const excludesAnotherOpen =
        /\bni\s+(?:en\s+)?ouvrir\s+(?:un\s+)?autre\b/i.test(t) ||
        /\bouvrir\s+(?:un\s+)?autre\b/i.test(t);
      if (hasAffirmativeOpen && excludesAnotherOpen) return false;
      return true;
    }
    return false;
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
  // Specimen / citation / historical — never an open surface.
  if (isSpecimenOrHistoricalFraming(text)) return null;

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
  let matched: { type: CycleType; rest: string } | { ambiguous: true } | null = null;
  if (m) {
    matched = matchCyclePrefix(m[1]);
  } else {
    // Alternate: « je décide de commencer le cadrage » without « ouvre » — require cycle name.
    const begin = text.match(
      /\bje\s+d[eé]cide\s+de\s+commencer\s+(?:le\s+|un\s+|l['’]\s*)?(?:cycle\s+(?:de\s+|d['’]\s*)?)?([^.!?]+)/i,
    );
    if (!begin) return null;
    if (isExploratoryActLanguage(text) && !/\bje\s+d[eé]cide\b/i.test(text)) return null;
    matched = matchCyclePrefix(begin[1]);
  }
  if (!matched || "ambiguous" in matched) return { ambiguous: "Type de cycle ambigu" };

  // After a surface OPEN is recognized: contradiction / retraction → clarification,
  // never a GO deduced from the first clause. Exclusion of *another* open is not
  // a retraction (handled inside refusesOrWithholdsAct).
  if (refusesOrWithholdsAct(text, "open")) {
    return {
      ambiguous: "Ouverture contredite ou retirée dans le même message — clarification requise",
    };
  }

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

### 5.2 conversation-authority.ts (FULL)

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
 * C05 rework — pilot explicitly designates a founding D5 act as the revise target
 * (e.g. « je révise la décision d'ouverture du cycle »). Must not fall through
 * to an opportunistic RECORD_DECISION match.
 */
function designatesFoundingReviseTarget(utterance: string): string | null {
  const t = utterance.trim();
  if (
    /\b(?:d[eé]cision\s+d['’]ouverture|ouverture\s+du\s+cycle|d[eé]cision\s+d['’]ouvrir)\b/i.test(
      t,
    ) ||
    /\br[eé]vise\s+la\s+d[eé]cision\s+d['’]ouverture\b/i.test(t)
  ) {
    return "OPEN_CYCLE";
  }
  if (
    /\b(?:d[eé]cision\s+de\s+cl[oô]ture|cl[oô]ture\s+du\s+cycle|d[eé]cision\s+de\s+cl[oô]turer)\b/i.test(
      t,
    )
  ) {
    return "CLOSE_CYCLE";
  }
  if (/\b(?:d[eé]cision\s+de\s+(?:retenir|choisir)\s+la\s+m[eé]thode)\b/i.test(t)) {
    return "CHOOSE_METHOD";
  }
  if (/\b(?:d[eé]cision\s+(?:d['’]appliquer|de\s+restriction)|restriction\s+appliqu[eé]e)\b/i.test(t)) {
    return "APPLY_RESTRICTION";
  }
  return null;
}

/**
 * Resolve a documentary REVISE target (CR-01 / C05 LIVE / C05 rework).
 * Uses the full APPLICABLE set — never the Nora cognitive window of 12.
 * Level A framing filters relevance only — never authorizes by itself.
 * Qualify must already be CLEAR (caller).
 *
 * Eligibility before uniqueness: only RECORD_DECISION compete for generic
 * REVISE — unless the pilot explicitly designates a founding D5 target, in
 * which case refuse typed (never rewrite OPEN via documentary REVISE).
 * 0 / many admissible candidates ⇒ clarification; never chronological newest-wins.
 */
function resolveReviseTarget(
  utterance: string,
  briefs: DecisionBrief[],
):
  | { ok: true; decisionId: string; statement: string }
  | { ok: false; reason: string } {
  const designatedFounding = designatesFoundingReviseTarget(utterance);
  if (designatedFounding) {
    return {
      ok: false,
      reason: `Révision générique refusée pour ${designatedFounding} — utiliser l'opération métier typée`,
    };
  }

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

## 6. Diffs code / tests

### 6.1 intent.ts

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts b/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
index 26dba3f4..d38a4c6b 100644
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

@@ -230,14 +271,40 @@ export function refusesOrWithholdsAct(
     return true;
   }
   if (act === "open") {
-    return /\b(?:n['’]ouvre\s+pas|ne\s+(?:l['’]\s*)?ouvre\s+pas|sans\s+ouvrir|ne\s+pas\s+ouvrir)\b/i.test(
-      t,
-    );
+    // Retraction / contradiction of the *requested* open — always withhold,
+    // even if an earlier clause said « ouvre le cycle » (false-GO guard).
+    if (
+      /\b(?:je\s+)?retire\s+(?:mon\s+)?GO\b/i.test(t) ||
+      /\b(?:n['’]ouvre\s+pas|ne\s+(?:l['’]\s*)?ouvre\s+pas|sans\s+ouvrir|ne\s+pas\s+ouvrir)\b/i.test(
+        t,
+      )
+    ) {
+      return true;
+    }
+    // Exclusion of an *additional* open (« ni en ouvrir un autre ») alongside an
+    // affirmative OPEN — not a withhold of the primary GO.
+    if (
+      /\bne\s+(?:souhaite|veux|veut)\s+ni\s+[^.!?]{0,60}\bouvrir\b/i.test(t) ||
+      /\bni\s+(?:en\s+)?ouvrir\b/i.test(t)
+    ) {
+      const hasAffirmativeOpen =
+        /\b(?:ouvre|ouvrez)\s+(?:le\s+|un\s+)?cycle\b/i.test(t) ||
+        /\bje\s+d[eé]cide\s+de\s+commencer\b/i.test(t);
+      const excludesAnotherOpen =
+        /\bni\s+(?:en\s+)?ouvrir\s+(?:un\s+)?autre\b/i.test(t) ||
+        /\bouvrir\s+(?:un\s+)?autre\b/i.test(t);
+      if (hasAffirmativeOpen && excludesAnotherOpen) return false;
+      return true;
+    }
+    return false;
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
@@ -287,11 +354,36 @@ export function isNonPerformativeCloseFraming(text: string): boolean {
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
 ): { cycleType: CycleType; objective: string } | { ambiguous: string } | null {
-  if (isNonPerformativeOpenFraming(text)) return null;
+  // Specimen / citation / historical — never an open surface.
+  if (isSpecimenOrHistoricalFraming(text)) return null;

   // Reject pure questions about opening.
   if (
@@ -308,22 +400,29 @@ function findOpenCycleAct(
   const openRe =
     /(?:^|[.!?…]\s+|nora\s*[,:]?\s*)(?:je\s+d[eé]cide\s+de\s+commencer[^.!?]*[.!?]?\s*)?(?:ouvre|ouvrir|ouvrez|go(?:\s+pour|\s+sur)?)\s+(?:le\s+|un\s+)?cycle\s+(?:de\s+|d['’]\s*)?([^.!?]+)/i;
   const m = text.match(openRe);
-  if (!m) {
+  let matched: { type: CycleType; rest: string } | { ambiguous: true } | null = null;
+  if (m) {
+    matched = matchCyclePrefix(m[1]);
+  } else {
     // Alternate: « je décide de commencer le cadrage » without « ouvre » — require cycle name.
     const begin = text.match(
       /\bje\s+d[eé]cide\s+de\s+commencer\s+(?:le\s+|un\s+|l['’]\s*)?(?:cycle\s+(?:de\s+|d['’]\s*)?)?([^.!?]+)/i,
     );
     if (!begin) return null;
     if (isExploratoryActLanguage(text) && !/\bje\s+d[eé]cide\b/i.test(text)) return null;
-    const matched = matchCyclePrefix(begin[1]);
-    if (!matched || "ambiguous" in matched) return { ambiguous: "Type de cycle ambigu" };
+    matched = matchCyclePrefix(begin[1]);
+  }
+  if (!matched || "ambiguous" in matched) return { ambiguous: "Type de cycle ambigu" };
+
+  // After a surface OPEN is recognized: contradiction / retraction → clarification,
+  // never a GO deduced from the first clause. Exclusion of *another* open is not
+  // a retraction (handled inside refusesOrWithholdsAct).
+  if (refusesOrWithholdsAct(text, "open")) {
     return {
-      cycleType: matched.type,
-      objective: sanitizeCycleObjective(matched.rest, matched.type),
+      ambiguous: "Ouverture contredite ou retirée dans le même message — clarification requise",
     };
   }
-  const matched = matchCyclePrefix(m[1]);
-  if (!matched || "ambiguous" in matched) return { ambiguous: "Type de cycle ambigu" };
+
   return {
     cycleType: matched.type,
     objective: sanitizeCycleObjective(matched.rest, matched.type),
@@ -553,10 +652,9 @@ export function qualifyPilotageIntent(utterance: string): IntentQualification {
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
index 38e7c7c5..b2cce28d 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
@@ -90,11 +90,46 @@ async function loadDecisionBriefs(projectId: string): Promise<DecisionBrief[]> {
 }

 /**
- * Resolve a documentary REVISE target (CR-01).
+ * C05 rework — pilot explicitly designates a founding D5 act as the revise target
+ * (e.g. « je révise la décision d'ouverture du cycle »). Must not fall through
+ * to an opportunistic RECORD_DECISION match.
+ */
+function designatesFoundingReviseTarget(utterance: string): string | null {
+  const t = utterance.trim();
+  if (
+    /\b(?:d[eé]cision\s+d['’]ouverture|ouverture\s+du\s+cycle|d[eé]cision\s+d['’]ouvrir)\b/i.test(
+      t,
+    ) ||
+    /\br[eé]vise\s+la\s+d[eé]cision\s+d['’]ouverture\b/i.test(t)
+  ) {
+    return "OPEN_CYCLE";
+  }
+  if (
+    /\b(?:d[eé]cision\s+de\s+cl[oô]ture|cl[oô]ture\s+du\s+cycle|d[eé]cision\s+de\s+cl[oô]turer)\b/i.test(
+      t,
+    )
+  ) {
+    return "CLOSE_CYCLE";
+  }
+  if (/\b(?:d[eé]cision\s+de\s+(?:retenir|choisir)\s+la\s+m[eé]thode)\b/i.test(t)) {
+    return "CHOOSE_METHOD";
+  }
+  if (/\b(?:d[eé]cision\s+(?:d['’]appliquer|de\s+restriction)|restriction\s+appliqu[eé]e)\b/i.test(t)) {
+    return "APPLY_RESTRICTION";
+  }
+  return null;
+}
+
+/**
+ * Resolve a documentary REVISE target (CR-01 / C05 LIVE / C05 rework).
  * Uses the full APPLICABLE set — never the Nora cognitive window of 12.
  * Level A framing filters relevance only — never authorizes by itself.
- * Qualify must already be CLEAR (caller). Founding D5 kinds are refused.
- * 0 / many candidates ⇒ clarification; never chronological newest-wins.
+ * Qualify must already be CLEAR (caller).
+ *
+ * Eligibility before uniqueness: only RECORD_DECISION compete for generic
+ * REVISE — unless the pilot explicitly designates a founding D5 target, in
+ * which case refuse typed (never rewrite OPEN via documentary REVISE).
+ * 0 / many admissible candidates ⇒ clarification; never chronological newest-wins.
  */
 function resolveReviseTarget(
   utterance: string,
@@ -102,15 +137,39 @@ function resolveReviseTarget(
 ):
   | { ok: true; decisionId: string; statement: string }
   | { ok: false; reason: string } {
-  const candidates = findAuthorityReviseCandidates(utterance, briefs);
-  if (candidates.length === 0) {
+  const designatedFounding = designatesFoundingReviseTarget(utterance);
+  if (designatedFounding) {
+    return {
+      ok: false,
+      reason: `Révision générique refusée pour ${designatedFounding} — utiliser l'opération métier typée`,
+    };
+  }
+
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
@@ -119,22 +178,10 @@ function resolveReviseTarget(
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

### 6.3 unit tests

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml3-rct02-intent.test.ts b/projects/sfia-studio-next/web/tests/unit/ml3-rct02-intent.test.ts
index 4f8eed1b..f3c315d2 100644
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
@@ -34,6 +57,35 @@ describe("ml3 RCT-02 conversational intent (C01–C06/C08)", () => {
     }
   });

+  it("C01 rework: affirmative OPEN survives « ni clôturer / ni en ouvrir un autre »", () => {
+    const q = qualifyPilotageIntent(
+      "Nora, je décide de commencer le cadrage. Ouvre le cycle CADRAGE avec pour objectif de préciser le problème utilisateur. Je ne souhaite ni clôturer ce cycle, ni en ouvrir un autre.",
+    );
+    expect(q).toMatchObject({
+      clarity: "CLEAR",
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    if (q.clarity === "CLEAR") {
+      expect(q.objective).toMatch(/préciser le problème utilisateur/i);
+      expect(q.objective).not.toMatch(/clôtur/i);
+      expect(q.objective).not.toMatch(/ouvrir un autre/i);
+    }
+  });
+
+  it("C01 false-GO: retract / contradict the requested open → no OPEN_CYCLE", () => {
+    for (const msg of [
+      "Nora, ouvre le cycle CADRAGE. Finalement, ne l'ouvre pas : je retire mon GO.",
+      "Nora, ouvre le cycle CADRAGE. Mais non, n'ouvre pas ce cycle, c'est une erreur.",
+    ]) {
+      const q = qualifyPilotageIntent(msg);
+      expect(q.clarity).not.toBe("CLEAR");
+      if (q.clarity === "CLEAR") {
+        expect(q.operation).not.toBe("OPEN_CYCLE");
+      }
+    }
+  });
+
   it("C01 Critical Review: citation / specimen never OPEN_CYCLE", () => {
     for (const msg of [
       "Voici une phrase de test : Nora, ouvre le cycle cadrage",
@@ -73,6 +125,24 @@ describe("ml3 RCT-02 conversational intent (C01–C06/C08)", () => {
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
@@ -101,6 +171,51 @@ describe("ml3 RCT-02 conversational intent (C01–C06/C08)", () => {
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
+  it("C05 rework: founding-designation wording still qualifies REVISE at intent (authority must refuse)", () => {
+    const q = qualifyPilotageIntent(
+      "Je révise la décision d'ouverture du cycle CADRAGE. À présent, la coordination entre équipes doit attendre : nous n'aurions pas dû ouvrir ce cycle.",
+    );
+    // Intent may be CLEAR REVISE; resolveReviseTarget must refuse founding designation (PG proof).
+    expect(q.clarity).toBe("CLEAR");
+    if (q.clarity === "CLEAR") {
+      expect(q.operation).toBe("REVISE_DECISION");
+    }
+  });
+
   it("C06: conversational LIFT_RESTRICTION is CLEAR with kind hint", () => {
     const q = qualifyPilotageIntent(
       "Nora, je décide de lever uniquement la restriction CYCLE_MUTATION sur ce cycle. Ne clôture pas le cycle.",
@@ -112,6 +227,23 @@ describe("ml3 RCT-02 conversational intent (C01–C06/C08)", () => {
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

### 6.4 PG tests

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
index 99b2891c..70085873 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
@@ -2088,5 +2088,303 @@ describe("PostgreSQL ML3 pilotage and decisions", () => {
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
+
+    it("C01 rework: OPEN survives « ni clôturer / ni en ouvrir un autre » in PG", async () => {
+      const { applyConversationalAuthority } = await import(
+        "@/domains/pilotage/conversation-authority"
+      );
+      const content =
+        "Nora, je décide de commencer le cadrage. Ouvre le cycle CADRAGE avec pour objectif de préciser le problème utilisateur. Je ne souhaite ni clôturer ce cycle, ni en ouvrir un autre.";
+      const { pilotId, projectId, preparationId } = await seedProject("cr-c01-ni");
+      const msgId = await insertUserMessage(preparationId, content);
+      const outcome = await applyConversationalAuthority({
+        pilotId,
+        projectId,
+        userMessageId: msgId,
+        content,
+        clientTurnKey: `cr-c01-ni-${newId("turn")}`,
+      });
+      expect(outcome.attempted).toBe(true);
+      expect(outcome.operation).toBe("OPEN_CYCLE");
+      expect(outcome.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      const view = await getPilotageProjection(pilotId, projectId);
+      expect(view.cycle?.cycleType).toBe("CADRAGE");
+      expect(view.cycle?.status).toBe("ACTIVE");
+      expect(view.cycle?.objective).toMatch(/préciser le problème utilisateur/i);
+      expect(view.restrictions.filter((r) => r.status === "ACTIVE")).toHaveLength(0);
+      const journal = await listDecisionJournal(pilotId, projectId);
+      expect(journal.filter((d) => d.kind === "OPEN_CYCLE" && d.state === "APPLICABLE")).toHaveLength(
+        1,
+      );
+      expect(journal.some((d) => d.kind === "CLOSE_CYCLE")).toBe(false);
+    });
+
+    it("C01 false-GO: retract / contradict requested open → zero mutation in PG", async () => {
+      const { applyConversationalAuthority } = await import(
+        "@/domains/pilotage/conversation-authority"
+      );
+      const samples = [
+        "Nora, ouvre le cycle CADRAGE. Finalement, ne l'ouvre pas : je retire mon GO.",
+        "Nora, ouvre le cycle CADRAGE. Mais non, n'ouvre pas ce cycle, c'est une erreur.",
+      ];
+      for (let i = 0; i < samples.length; i += 1) {
+        const content = samples[i]!;
+        const { pilotId, projectId, preparationId } = await seedProject(`cr-c01-retract-${i}`);
+        const msgId = await insertUserMessage(preparationId, content);
+        const outcome = await applyConversationalAuthority({
+          pilotId,
+          projectId,
+          userMessageId: msgId,
+          content,
+          clientTurnKey: `cr-c01-retract-${newId("turn")}`,
+        });
+        expect(outcome.attempted).toBe(false);
+        expect(outcome.humanDecisionCreated).toBe(false);
+        expect(outcome.command).toBeNull();
+        expect(outcome.operation ?? "").not.toBe("OPEN_CYCLE");
+        const view = await getPilotageProjection(pilotId, projectId);
+        expect(view.cycle).toBeNull();
+        expect(view.revision).toBe(0);
+        expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(0);
+      }
+    });
+
+    it("C05 rework: explicit OPEN founding target → zero documentary REVISE", async () => {
+      const { applyConversationalAuthority } = await import(
+        "@/domains/pilotage/conversation-authority"
+      );
+      const { pilotId, projectId, preparationId } = await seedProject("cr-c05-founding");
+      const opened = await openCycle(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: 0,
+        sourceRef: newId("src"),
+        cycleType: "CADRAGE",
+        objective: "définir précisément le problème utilisateur",
+      });
+      expect(opened.status).toBe("APPLIED");
+      // Polluted historical RECORD (pre-C04 objectRef) — coordination theme.
+      const polluted = await executePilotageCommand(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: opened.revision ?? 1,
+        sourceKind: "EXPLICIT_INTERACTION",
+        sourceRef: newId("src"),
+        operation: "RECORD_DECISION",
+        objectRef: "mais ne signifie pas que le besoin utilisateur",
+        statement:
+          "que, pendant ce cadrage, nous examinerons en priorité les difficultés de coordination et de suivi des décisions entre plusieurs équipes. Cette orientation constitue une priorité d'exploration, mais ne signifie pas que le besoin utilisateur est déjà validé",
+      });
+      expect(polluted.status).toBe("APPLIED");
+      const before = await getPilotageProjection(pilotId, projectId);
+      const journalBefore = await listDecisionJournal(pilotId, projectId);
+
+      const content =
+        "Je révise la décision d'ouverture du cycle CADRAGE. À présent, la coordination entre équipes doit attendre : nous n'aurions pas dû ouvrir ce cycle.";
+      const msgId = await insertUserMessage(preparationId, content);
+      const outcome = await applyConversationalAuthority({
+        pilotId,
+        projectId,
+        userMessageId: msgId,
+        content,
+        clientTurnKey: `cr-c05-founding-${newId("turn")}`,
+      });
+      expect(outcome.attempted).toBe(false);
+      expect(outcome.humanDecisionCreated).toBe(false);
+      expect(outcome.command).toBeNull();
+      expect(outcome.source).toBe("clarification_only");
+      expect(outcome.intentReason ?? outcome.clarification ?? "").toMatch(/OPEN_CYCLE|opération métier/i);
+
+      const after = await getPilotageProjection(pilotId, projectId);
+      expect(after.revision).toBe(before.revision);
+      expect(after.cycle?.status).toBe("ACTIVE");
+      expect(after.cycle?.cycleType).toBe("CADRAGE");
+      const journalAfter = await listDecisionJournal(pilotId, projectId);
+      expect(journalAfter).toHaveLength(journalBefore.length);
+      expect(journalAfter.find((d) => d.id === polluted.decisionId)?.state).toBe("APPLICABLE");
+      expect(
+        journalAfter.filter((d) => d.kind === "OPEN_CYCLE" && d.state === "APPLICABLE"),
+      ).toHaveLength(1);
+    });
+
+    it("C05 rework: historical polluted objectRef still revisable via LIVE C05 message", async () => {
+      const { applyConversationalAuthority } = await import(
+        "@/domains/pilotage/conversation-authority"
+      );
+      const { pilotId, projectId, preparationId } = await seedProject("cr-c05-hist-polluted");
+      const opened = await openCycle(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: 0,
+        sourceRef: newId("src"),
+        cycleType: "CADRAGE",
+        objective: "définir précisément le problème utilisateur, les besoins prioritaires",
+      });
+      expect(opened.status).toBe("APPLIED");
+      const polluted = await executePilotageCommand(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: opened.revision ?? 1,
+        sourceKind: "EXPLICIT_INTERACTION",
+        sourceRef: newId("src"),
+        operation: "RECORD_DECISION",
+        objectRef: "mais ne signifie pas que le besoin utilisateur",
+        statement:
+          "que, pendant ce cadrage, nous examinerons en priorité les difficultés de coordination et de suivi des décisions entre plusieurs équipes. Cette orientation constitue une priorité d'exploration, mais ne signifie pas que le besoin utilisateur est déjà validé",
+      });
+      expect(polluted.status).toBe("APPLIED");
+      expect(polluted.decisionId).toBeTruthy();
+
+      const C05_LIVE = `Nora, je révise la décision que j'ai prise concernant la priorité d'exploration des difficultés de coordination et de suivi des décisions entre plusieurs équipes.
+
+Plutôt que de nous concentrer immédiatement sur ces difficultés, je décide que nous examinerons d'abord différentes situations réelles de coordination interéquipes pour identifier le problème véritablement prioritaire.
+
+Cette nouvelle orientation remplace la priorité précédente. Le besoin utilisateur reste à valider.
+
+Aide-moi ensuite à identifier les premières situations concrètes que nous devrions examiner.`;
+      const msgId = await insertUserMessage(preparationId, C05_LIVE);
+      const revised = await applyConversationalAuthority({
+        pilotId,
+        projectId,
+        userMessageId: msgId,
+        content: C05_LIVE,
+        clientTurnKey: `cr-c05-hist-${newId("turn")}`,
+      });
+      expect(revised.attempted).toBe(true);
+      expect(revised.operation).toBe("REVISE_DECISION");
+      expect(revised.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      const after = await listDecisionJournal(pilotId, projectId);
+      expect(after.find((d) => d.id === polluted.decisionId)?.state).toBe("REVISED");
+      const applicable = after.filter(
+        (d) => d.state === "APPLICABLE" && d.kind === "RECORD_DECISION",
+      );
+      expect(applicable).toHaveLength(1);
+      expect(applicable[0]?.supersedesDecisionId).toBe(polluted.decisionId);
+      expect(applicable[0]?.statement).toMatch(/situations réelles de coordination/i);
+      expect(after.find((d) => d.kind === "OPEN_CYCLE")?.state).toBe("APPLICABLE");
+    });
   });
 });
```

## 7. Documentation — diffs

### 7.1 specification-technique.md

```diff
diff --git a/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md b/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
index 415a29b0..717f6a55 100644
--- a/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
+++ b/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
@@ -443,3 +443,34 @@ Après **NOT ACCEPTED** sur handoff `4b168905`. Qualification linguistique unifi
 | RECORD / REVISE | mêmes gates specimen + refus avant CLEAR |

 Oracles négatifs supplémentaires : « Je refuse de lever… », « je ne t'autorise pas à lever… », « Ne fais pas ceci : Nora, clôture… », « Un ancien message disait : Nora, clôture… ». Positifs T01/T05 représentatif/T10/T13 et cockpits préservés. T05 = **formulation représentative** (transcript original intégral non établi).
+
+### LIVE remediation ML3/RCT-02 — C04/C05/C06 (2026-11-07, local)
+
+Après restitution LIVE `sfia-next-rct02-live-gaps-d646d42a.md` sur candidat RECETTE `d646d42a`. Périmètre borné C04/C05/C06 ; C01/C02/C07/C08 et faux GO préservés ; historique D6 RECETTE non réécrit.
+
+| ID | Cause confirmée (repro messages exacts) | Correction as-built |
+|----|----------------------------------------|---------------------|
+| **C04** | `deriveDecisionObjectRef` matchait la réserve « besoin utilisateur est… » ; énoncé préfixé par `que,` | `extractDecisionCore` retire `que,` ; `deriveDecisionObjectRef` dérive l'objet depuis l'arbitrage principal (priorité / examinerons), jamais la réserve adversative |
+| **C05** | Unicité évaluée sur tous les kinds APPLICABLE : `OPEN_CYCLE` fondateur + `RECORD` → 2 candidates → clarification | `resolveReviseTarget` : éligibilité `RECORD_DECISION` **avant** unicité ; D5 fondateur lexical ne bloque plus une cible documentaire unique ; refus typé si seule une fondation matche |
+| **C06** | `alsoClose` via `/\bclôtur/` sans couvrir « je ne souhaite ni clôturer… » → AMBIGUOUS | `assertsAffirmativeCloseAct` + `refusesOrWithholdsAct('close'/'open')` étendus ; LIFT+CLOSE seulement si CLOSE est un second acte affirmatif |
+
+Chaîne inchangée : qualification → délimitation → résolution éligible → D6 `executePilotageCommand` → projection. Preuves : unit messages LIVE exacts ; PG `LIVE C04/C05/C06` (OPEN + RECORD propre + REVISE malgré OPEN + LIFT malgré exclusion CLOSE/OPEN). **Pas** de push projet / redéploiement RECETTE sous ce mandat.
+
+### LIVE remediation rework — C01 / C05 cibles (2026-11-07, local)
+
+| ID | Risque | Correction as-built |
+|----|--------|---------------------|
+| **C01** | « ni en ouvrir un autre » annulait un OPEN affirmatif via `refusesOrWithholdsAct('open')` | négation d'open ignorée lorsqu'un OPEN affirmatif (`ouvre le cycle` / `je décide de commencer`) est déjà présent |
+| **C05** | « je révise la décision d'ouverture… » + RECORD coordination → REVISE opportuniste du RECORD | `designatesFoundingReviseTarget` : refus typé D5 **avant** l'éligibilité documentaire ; historique `objectRef` pollué toujours révisable si la cible documentaire est désignée |
+
+Preuves : unit C01 rework ; PG C01 ni-clôturer/ouvrir ; PG C05 founding zéro mutation ; PG C05 historique pollué + message LIVE. Positifs C04/C05/C06 LIVE préservés.
+
+### LIVE remediation — C01 false-GO retract (2026-11-07, local)
+
+| Cas | Comportement as-built |
+|-----|------------------------|
+| « ouvre… Finalement, ne l'ouvre pas : je retire mon GO » | contradiction du **même** acte → AMBIGUOUS / zéro mutation |
+| « ouvre… Mais non, n'ouvre pas ce cycle » | idem |
+| « ouvre… Je ne souhaite ni clôturer… ni en ouvrir un autre » | exclusion d'une **autre** ouverture → OPEN CADRAGE conservé |
+
+`refusesOrWithholdsAct('open')` ne neutralise plus toute négation dès qu'un OPEN affirmatif apparaît : retrait/contradiction du GO demandé ≠ exclusion d'une ouverture supplémentaire.
```

### 7.2 tracabilite-r2-r3-r4.md

```diff
diff --git a/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md b/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
index 3c846c0a..6bf96601 100644
--- a/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
+++ b/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
@@ -302,3 +302,19 @@ Statut candidat : `IMPLEMENTED — CANDIDATE` (branche projet) — **NOT RECETTE
 | cross | specimen RECORD / OPEN historique / refus REVISE | gates partagés | PG journal + cycle inchangés | NLP universel NOT CLAIMED |

 Statut : **IMPLEMENTED — LOCAL CORRECTIVE (Critical Re-Review faux GO)** sur `sfia/next-ml3-rct02-correctifs` — **NOT PUSHED** — **NOT RECETTE** — **NOT MERGED** — **NOT ADOPTED**.
+
+### LIVE remediation C04/C05/C06 — messages exacts (2026-11-07)
+
+| ID | Preuve avant (d646d42a) | Correction | Preuve après (local) | Limite |
+| --- | --- | --- | --- | --- |
+| C04 | LIVE PARTIAL : `objectRef=mais ne signifie…`, énoncé `que,` | `deriveDecisionObjectRef` + strip `que,` | unit C04 LIVE ; PG LIVE chain statement/objectRef | historiques RECETTE non migrés |
+| C05 | LIVE FAIL : 0 REVISE (OPEN+RECORD lexical) | éligibilité RECORD avant unicité | unit C05 LIVE lexical ; PG REVISE + `supersedesDecisionId` | 2 RECORD distincts → clarification |
+| C06 | LIVE FAIL : AMBIGUOUS « Levée et clôture » | `assertsAffirmativeCloseAct` | unit C06 LIVE + LIFT+CLOSE affirmatif AMBIGUOUS ; PG LIFT, cycle ACTIVE | — |
+
+Statut : **IMPLEMENTED — LOCAL LIVE REMEDIATION** sur branche locale `sfia/next-ml3-rct02-live-remediation` depuis `d646d42a` — **NOT PUSHED** — **NOT RECETTE redeploy** — **NOT MERGED** — **NOT ADOPTED**. LIVE Nora retest : **REQUIRES GO** sur nouveau candidat.
+
+| ID | Rework ChatGPT | Preuve |
+| --- | --- | --- |
+| C01 | OPEN + « ni clôturer / ni en ouvrir » | unit + PG : 1 OPEN CADRAGE, objectif conservé, 0 CLOSE |
+| C01 | retrait / contradiction du même OPEN | unit + PG : AMBIGUOUS, 0 cycle, 0 HumanDecision |
+| C05 | désignation fondatrice OPEN ≠ REVISE RECORD | PG zéro mutation + `objectRef` historique pollué toujours révisable via C05 LIVE |
```

### 7.3 delivery-history.md

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 91d5f411..c2efa92f 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -643,3 +643,47 @@ Append-only logical journal of Cursor product deliveries.
 | Preuves | unit 47 ; PG CR 9/9 ; PG `ml3-pilotage` 44/44 ; lint/tsc/build PASS |
 | Push projet / PR / merge / deploy RECETTE | **NON** |
 | Verdict candidat | `READY FOR CHATGPT RE-REVIEW` |
+
+## delivery_id: DELIV-2026-11-07-ML3-RCT02-LIVE-REMEDIATION-LOCAL
+
+| Champ | Valeur |
+|---|---|
+| Date UTC | 2026-11-07 |
+| Macro-lot | R5 / ML3 — remédiation LIVE RCT-02 C04/C05/C06 |
+| Type | INC CRITICAL |
+| Branche locale | `sfia/next-ml3-rct02-live-remediation` (depuis `d646d42a`, **non poussée**) |
+| Source D0 | `sfia-next-rct02-live-gaps-d646d42a.md` (hors Git) |
+| Correctifs | C04 objectRef/statement ; C05 éligibilité RECORD avant unicité ; C06 CLOSE non performatif (« ni clôturer ») |
+| Preuves | unit `ml3-rct02-intent` 17 ; PG `ml3-pilotage` 45/45 dont LIVE chain ; lint/tsc PASS |
+| Product version | `NO RELEASE` / package `0.0.0-dev` |
+| ENV-01 | DEV `:3100` / PG `:5433` — RECETTE `:3200` / `d646d42a` **préservée, non mutée** |
+| Push projet / PR / merge / deploy RECETTE | **NON** |
+| Verdict candidat | `READY FOR CHATGPT REVIEW — LOCAL LIVE REMEDIATION` |
+
+## delivery_id: DELIV-2026-11-07-ML3-RCT02-LIVE-REMEDIATION-REWORK
+
+| Champ | Valeur |
+|---|---|
+| Date UTC | 2026-11-07 |
+| Macro-lot | R5 / ML3 — rework LIVE remediation C01/C05 cibles |
+| Type | INC CRITICAL REWORK |
+| Branche locale | `sfia/next-ml3-rct02-live-remediation` (**non poussée**) |
+| Handoff rejeté | `f2c5e3b5` / blob `d59ba25c` (REWORK REQUIRED) |
+| Correctifs | C01 négation secondaire n'annule pas OPEN ; C05 refus si cible fondatrice désignée ; pack Full complet |
+| Preuves | unit + PG C01/C05 rework + non-régression LIVE C04/C05/C06 |
+| Push projet / PR / merge / deploy RECETTE | **NON** |
+| Verdict candidat | `READY FOR CHATGPT RE-REVIEW` |
+
+## delivery_id: DELIV-2026-11-07-ML3-RCT02-C01-FALSE-GO-RETRACT
+
+| Champ | Valeur |
+|---|---|
+| Date UTC | 2026-11-07 |
+| Macro-lot | R5 / ML3 — C01 false-GO retract vs exclusion autre ouverture |
+| Type | INC CRITICAL REWORK |
+| Branche locale | `sfia/next-ml3-rct02-live-remediation` (**non poussée**) |
+| Handoff rejeté | `d89c3009` / blob `4d2cefb9` (REWORK REQUIRED — C01 FALSE GO) |
+| Correctif | distinguer négation du GO demandé vs « ni en ouvrir un autre » |
+| Preuves | unit 3 formulations ; PG zéro mutation négatifs + positif C01 ; non-régression LIVE C04/C05/C06 |
+| Push projet / PR / merge / deploy RECETTE | **NON** |
+| Verdict candidat | `READY FOR CHATGPT FINAL REVIEW — LOCAL LIVE REMEDIATION` |
```

## 8. Fichier D0 — contenu intégral

### 8.1 recette-ml3-rct02-live-corrective-gaps.md (FULL)

```md
> **Preuve D0 utilisateur (non normative).** Copie locale du rapport LIVE fourni hors Git> (`sfia-next-rct02-live-evidence-bundle/report/sfia-next-rct02-live-gaps-d646d42a.md`).> N'autorise aucune modification de SEF/roadmap/ADR. Conservée pour traçabilité du macro-lot> correctif local C04/C05/C06.

# SFIA Studio Next — ML3 / RCT-02
## Restitution complémentaire de RECETTE LIVE — C04, C05, C06

| Champ | Valeur / qualification |
|---|---|
| Date des observations | 7 novembre 2026, Europe/Paris |
| Nature | **D0 — restitution de preuves utilisateur et diagnostic technique initial**, non normative, non publiée sur Git |
| Programme / jalon | SFIA Studio Next / R5 — macro-lot ML3 « Piloter et décider » |
| Produit observé | RECETTE `http://127.0.0.1:3200`, SHA **`d646d42addb5a4c4a3cab441e9e39018d85fae70`** |
| Build reporté par Cursor | `R7JhVsbMaJdiUuuljApyn`; identité du runtime non contre-vérifiée indépendamment depuis cette analyse |
| Branche Git consultée | `sfia/next-ml3-rct02-correctifs` ; remote encore à `d646d42a` au pré-check |
| Base `main` comparée | `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` (merge base) ; branche 4 commits devant / 0 derrière |
| Source précédente | `construction/pilotage-et-decisions/recette-ml3-rct02-anomalies.md` (Git, blob `be12d062ae11730e6b224d77ca22da5a7366fa0c`) |
| Nature de preuve | Captures et transcriptions en conversation utilisateur + inspection statique de fichiers Git du SHA ; **aucun accès aux logs locaux, SQL RECETTE ou instrumentation runtime** |
| Décideur | Morris ; ChatGPT prépare/revoit ; Cursor réalise D3 |
| Statut | **RCT-02 TARGETED LIVE TEST COMPLETED — CORRECTIVE GAPS OPEN** ; pas de ML3 CLOSED/RECETTE ACCEPTED/ADOPTED |

> **Règle de lecture.** Les écrans montrent des effets réellement visibles en RECETTE. Les causes indiquées comme « reproduites statiquement » correspondent à la logique du code Git inspecté ou à sa simulation sur les phrases fournies. Seules les traces de l'application, les tests d'intégration et les effets DB peuvent confirmer la chaîne d'exécution exacte. Ne pas transformer une hypothèse en preuve.

## 1. Résumé de la micro-recette

**But :** retester les huit anomalies C01–C08 de la première RCT-02 sans refaire les 16 scénarios. Tests réalisés par Morris sur un nouveau projet, avec Nora `openai-agents-sdk-live · COMPLETE` affiché lors des échanges observés.

| ID | Correction testée | Verdict LIVE | Preuve principale |
|---|---|---|---|
| C01 | Ouverture de cycle en message naturel développé | **PASS** | `OPEN_CYCLE APPLIED`, `CADRAGE ACTIVE`, révision 1 |
| C02 | Objectif de cycle correctement persisté | **PASS** | objectif exact en Pilotage / journal, non `.` |
| C03 | CKI interne non cité spontanément | **FAVORABLE, NON CLOS** | plusieurs réponses naturelles en CADRAGE ; pas de test intercycles CONCEPTION_FONCTIONNELLE |
| C04 | Enregistrer un arbitrage, non les instructions à Nora | **PARTIAL** | `RECORD_DECISION APPLICABLE` ; consigne finale exclue, mais `objectRef` erroné et énoncé préfixé par « que, » |
| C05 | Révision naturelle d'une décision documentaire | **FAIL** | aucun `REVISE_DECISION` ; ancienne décision toujours APPLICABLE ; aucune nouvelle décision |
| C06 | Levée naturelle d'une restriction ciblée | **FAIL** | restriction restée ACTIVE, révision et journal inchangés |
| C07 | Lire l'état effectif des restrictions | **PASS** | après levée UI : `restrictions_actives=aucune`, révision 4 correctement restituée par Nora |
| C08 | Clôture naturelle sans transition automatique | **PASS** | `CLOSE_CYCLE APPLIED`, révision 5, aucun cycle actif |

**Contrôle négatif supplémentaire : PASS.** Une commande `OPEN_CYCLE` citée comme exemple n'a pas déclenché de mutation : révision 5 et journal à 5 décisions, Nora distingue citation/GO/exécution.

**Comptage : 4 PASS, 2 FAIL, 1 PARTIAL, 1 NON CLOS (favorable).** C03 ne doit pas être présenté comme accepté intercycles. Les succès concernent uniquement les scénarios observés, pas toute la variété du français.

## 2. Chronologie DB/projection visible — projet de RECETTE

L'identifiant interne du projet est visible dans les captures de la conversation ; ce dossier n'en a pas besoin pour décrire les règles. Les valeurs ci-dessous sont celles affichées par Pilotage, non un dump SQL.

| Étape | Révision | Cycle | Restriction active | Journal de décisions | Conclusion |
|---|---:|---|---|---:|---|
| Début / C01–C02 | 1 | CADRAGE ACTIVE | Aucune | 1 | OPEN appliqué |
| C04 | 2 | CADRAGE ACTIVE | Aucune | 2 | RECORD appliqué avec objet erroné |
| C05 | **2** | CADRAGE ACTIVE | Aucune | **2** | REVISE absent |
| Application cockpit (prérequis C06) | 3 | CADRAGE ACTIVE | `CYCLE_MUTATION` ciblée sur instance | 3 | APPLY appliqué |
| C06 | **3** | CADRAGE ACTIVE | **Toujours ACTIVE** | **3** | LIFT absent |
| Levée cockpit (prérequis C07) | 4 | CADRAGE ACTIVE | Aucune | 4 | LIFT appliqué |
| C07 | 4 | CADRAGE ACTIVE | Aucune | 4 | Lecture correcte, aucune mutation |
| C08 | 5 | Aucun cycle actif | Aucune | 5 | CLOSE appliqué |
| Faux GO cité | 5 | Aucun cycle actif | Aucune | 5 | Aucun OPEN |

**Cycle instance** dans les captures : `cyc_b03f4df8-2099-476b-8dfd-6a4fda5e12ff`. La restriction cockpit est liée à cette instance, pas à la portée `*` globale.

## 3. C04 — RECORD_DECISION : effet présent, identité erronée

### 3.1 Message utilisateur effectivement envoyé

> Je décide que, pendant ce cadrage, nous examinerons en priorité les difficultés de coordination et de suivi des décisions entre plusieurs équipes.
>
> Cette orientation constitue une priorité d'exploration, mais ne signifie pas que le besoin utilisateur est déjà validé.
>
> Nora, maintenant que cette décision est exprimée, aide-moi à identifier la prochaine question importante à poser pour vérifier cette hypothèse.

### 3.2 Attendu / observé

**Attendu :** une HumanDecision `RECORD_DECISION APPLICABLE` exprimant la priorité *d'exploration des difficultés de coordination/suivi des décisions entre équipes*, avec sa réserve sur la validation du besoin. La demande à Nora est une instruction de conversation, pas un champ décisionnel. `objectRef` doit rester une référence métier utile et stable.

**Observé :** `RECORD_DECISION APPLICABLE` présent, révision 2, deux décisions ; consigne « Nora, maintenant que… » exclue. En revanche :

- l'énoncé durable commence par **« que, pendant ce cadrage… »** (préfixe syntaxique inutile) ;
- son **`objectRef` / libellé D6 affiché** est **« mais ne signifie pas que le besoin utilisateur »**, prélevé dans la réserve plutôt que dans l'arbitrage central ;
- le cycle est resté `CADRAGE ACTIVE` ; aucun autre effet non demandé.

### 3.3 Diagnostic de code Git (statique)

Fichier : `web/src/domains/pilotage/intent.ts`, fonction `deriveDecisionObjectRef` (début de fichier). L'expression :

```ts
/(?:que\s+)?(?:la|le|l['’])?\s*([^,?.;]{3,60}?)\s+(?:est|sera|devient|reste|doit|peu[tv])\b/i
```

est appliquée avant la fallback de tokens sur le cœur décisionnel. Sur **l'énoncé réellement persisté**, cette expression renvoie exactement `mais ne signifie pas que le besoin utilisateur`, à cause de la séquence `...besoin utilisateur est déjà validé`. **Reproduction statique confirmée.**

Dans `qualifyPilotageIntent`, le `record` capture la suite de `je décide` et `extractDecisionCore` supprime les consignes à Nora mais ne normalise pas entièrement le préfixe `que,`. Le test `ml3-rct02-intent.test.ts` vérifie l'absence de `aide-moi`, **pas la qualité de `objectRef` ni la fidélité complète de l'énoncé**.

### 3.4 Reprise ciblée demandée

- Identifier la responsabilité canonique de la référence d'objet D6. La déduire de l'arbitrage principal ou d'une référence explicitement nommée ; éviter de promouvoir une réserve secondaire comme sujet de décision.
- Normaliser sans réécrire le sens : retirer le préfixe artificiel `que,` ; conserver priorité, contexte, réserve et absence de validation du besoin.
- Préserver une référence suffisamment stable pour confrontation/révision ; pas de second registre d'autorité.
- **Ne pas migrer automatiquement l'ancienne décision polluée en RECETTE**. C05 doit pouvoir réviser la décision existante via un mécanisme de cible robuste malgré son ancien `objectRef`.
- Si l'objet ne peut être identifié de manière suffisamment sûre, préférer un statut explicite/clarification au libellé arbitraire ; ne pas fabriquer une vérité sémantique par le modèle.

### 3.5 Acceptance et contre-tests

- Message **intégral** ci-dessus via le véritable flux `USER_MESSAGE` → un seul RECORD, statement = deux phrases de décision, aucune consigne Nora, pas de `que,` initial.
- ObjectRef pertinent pour la décision (coordination/suivi entre équipes), et non sous-proposition `mais ne signifie…`.
- Deux décisions distinctes de sujet voisin ne se fusionnent pas par similarité lexicale.
- Aucun RECORD pour exemple, refus, hypothèse ou conseil de Nora.

## 4. C05 — REVISE_DECISION : absence de mutation malgré un GO explicite

### 4.1 Message utilisateur réellement envoyé

> Nora, je révise la décision que j'ai prise concernant la priorité d'exploration des difficultés de coordination et de suivi des décisions entre plusieurs équipes.
>
> Plutôt que de nous concentrer immédiatement sur ces difficultés, je décide que nous examinerons d'abord différentes situations réelles de coordination interéquipes pour identifier le problème véritablement prioritaire.
>
> Cette nouvelle orientation remplace la priorité précédente. Le besoin utilisateur reste à valider.
>
> Aide-moi ensuite à identifier les premières situations concrètes que nous devrions examiner.

### 4.2 Attendu / observé

**Attendu :** `REVISE_DECISION APPLIED` sur l'unique HumanDecision documentaire C04 ; ancienne version `REVISED`, nouvelle `APPLICABLE`, `supersedesDecisionId` correct, nouvel énoncé = arbitrage révisé (sans instruction « Aide-moi »), objet historique cohérent ; `CADRAGE ACTIVE` sans autre mutation.

**Observé :** Nora LIVE comprend le remplacement mais répond **« sans prétendre avoir enregistré son remplacement dans le système »**. Travail : `2 applicable(s) · 2 au journal · dernière RECORD_DECISION/APPLICABLE`. Pilotage : révision **2**, deux décisions, aucune REVISE ; ancienne RECORD toujours `APPLICABLE`. **Échec de l'effet confirmé par captures**.

### 4.3 Diagnostic de code Git (forte piste, non prouvé par log runtime)

- `conversation-authority.ts` → `resolveReviseTarget` utilise `findAuthorityReviseCandidates(utterance, briefs)` ; si 0 ou >1 candidats, **clarification sans mutation**.
- `decisions/divergence-assist.ts` → `selectAllApplicableBriefs` inclut **tous les types** `APPLICABLE` avec `objectRef`, y compris les **décisions D5 fondatrices**. Le filtrage `target.kind === 'RECORD_DECISION'` se fait **après** la sélection et le contrôle d'unicité dans `resolveReviseTarget`.
- La recherche exploite `utteranceTouchesObject`, ou, pour un `je révise` explicite, un recouvrement d'au moins **deux tokens significatifs** entre l'énoncé de la décision et le message utilisateur.
- Simulation sur les deux HumanDecisions visibles :
  - `OPEN_CYCLE` (énoncé : « définir précisément le problème utilisateur… ») touche le message C05 via **« problème »** et **« utilisateur »** ;
  - `RECORD_DECISION` C04 touche ce même message via **« besoin » / « utilisateur »** dans le `objectRef` dégradé, mais aussi via une quinzaine de tokens de son énoncé.
  - Résultat probable : **deux candidates**, donc `AMBIGUOUS`, alors qu'une seule est légalement révisable via `REVISE_DECISION`.

**Important :** la simulation des règles statiques confirme ces deux correspondances lexicales, **pas l'issue runtime exacte** ; Cursor doit lire `intentClarity`, `intentReason`, `authority.operation`, `source`, refus D6 et candidats retournés dans une reproduction PG intégrale. Éviter d'attribuer l'échec à Nora ou à l'objet C04 sans cette preuve.

### 4.4 Écart de couverture technique

`web/tests/unit/ml3-rct02-intent.test.ts` décrit son T05 comme **représentatif** : « Je révise la décision que j'ai prise sur l'orientation du cadrage. Cette nouvelle orientation… » ; ce n'est pas le message réellement envoyé dans cette recette. Le test de qualification en isolation ne prouve pas que `resolveReviseTarget` fonctionne avec deux décisions D6 dont une fondatrice `OPEN_CYCLE` et un `objectRef` historiquement pollué.

### 4.5 Reprise ciblée demandée

- Distinguer éligibilité *métier* de la cible et pertinence sémantique **avant** de décider l'unicité : `REVISE_DECISION` documentaire ≠ révision d'une HumanDecision fondatrice D5.
- Évaluer l'unicité seulement parmi les cibles admissibles, avec suffisamment d'indices d'identification ; pas de sélection automatique de la plus récente.
- Conserver les protections zéro/pluriel candidat, portées distinctes, concurrent, D5 fondateur, replays et absence d'autorité d'une proposition Nora/CKI.
- Préserver l'objet historique de la décision révisée et les liens `supersedes`; **pas de réécriture rétroactive** de C04.
- Test positif obligatoire avec **les deux messages complets C04 puis C05**, depuis le service conversationnel, et transition réelle en PG.

### 4.6 Oracles négatifs

- Deux décisions documentaires distinctes touchées : **clarification**, aucune mutation.
- Aucune décision documentaire applicable : clarification, aucune mutation.
- Révision d'une OPEN_CYCLE ou d'une restriction fondatrice : **refus typé** sans mutation.
- Reformulation exploratoire « j'envisage de réviser… » : aucune décision.
- Rejeu du même tour/ACK perdu/concurrence : aucune double révision.

## 5. C06 — LIFT_RESTRICTION : mention négative d'une autre opération assimilée à un second GO

### 5.1 Préconditions observées

Depuis Pilotage : `APPLY_RESTRICTION APPLICABLE` ; restriction `CYCLE_MUTATION` ciblée sur l'instance `cyc_b03f4df8-2099-476b-8dfd-6a4fda5e12ff` ; CADRAGE `ACTIVE`, révision 3, journal 3 décisions.

### 5.2 Message utilisateur réellement envoyé

> Nora, je décide de lever uniquement la restriction CYCLE_MUTATION actuellement active sur le cycle CADRAGE.
>
> Cette levée concerne uniquement ce cycle. Je ne souhaite ni clôturer le cycle, ni en ouvrir un autre.
>
> Une fois cette décision appliquée, confirme-moi ce qui a réellement été enregistré dans Studio.

### 5.3 Attendu / observé

**Attendu :** `LIFT_RESTRICTION APPLIED`, exactement la restriction ciblée levée, aucune `CYCLE_MUTATION` active, CADRAGE reste `ACTIVE`, révision **4**, journal **4**, pas de CLOSE/OPEN.

**Observé :** Nora LIVE reconnaît l'intention et la cible mais indique ne pas pouvoir confirmer la levée. Pilotage : **révision 3**, restriction encore `ACTIVE`, journal toujours à **3** décisions, aucun LIFT. **FAIL confirmé**.

### 5.4 Diagnostic Git (reproduction statique)

Dans `intent.ts`, `findLiftRestrictionAct` reconnaît un `je décide de lever` et un kind `CYCLE_MUTATION`. Mais `qualifyPilotageIntent` vérifie ensuite :

```ts
const alsoClose =
  /\bcl[oô]tur/i.test(text) &&
  !/\bne\s+(?:pas\s+)?(?:cl[oô]tur|ferme)|sans\s+cl[oô]tur/i.test(text);
```

La phrase **« Je ne souhaite ni clôturer le cycle, ni en ouvrir un autre »** comporte `clôturer` mais ne correspond pas au motif protecteur `ne clôtur...`. Sur le message réel, `alsoClose` vaut **`true`**, malgré la négation. Le qualificateur retourne alors `AMBIGUOUS` (« Levée et clôture dans le même message »), avant la résolution de restriction. **Correspondance statique confirmée ; cause runtime à valider par trace.**

Le test unitaire positif actuel dit seulement **« Ne clôture pas le cycle »** après le GO de levée : il n'inclut pas la formulation effectivement testée **« Je ne souhaite ni clôturer…, ni en ouvrir… »**.

### 5.5 Reprise ciblée demandée

- Distinguer une seconde **commande affirmative** d'une mention négative, réservée ou explicitement exclue par le Pilote.
- Contrôler la portée de la négation au niveau de la clause d'action : « je ne souhaite ni clôturer ni ouvrir » ≠ CLOSE/OPEN.
- Maintenir l'interdiction d'exécuter deux opérations affirmatives incompatibles dans un même tour ; clarification sans effet dans ce cas.
- Résoudre l'instance précise du cycle et la restriction unique, avec autorité D6 au point d'effet, sans second moteur.
- Préserver les cas négatifs précédemment corrigés : « Ne lève pas… », « Je refuse de lever… », « Je ne t'autorise pas à lever… », citation, question, autre cible, plusieurs restrictions, session étrangère.

### 5.6 Acceptance

Sur message complet C06 et état initial PG correspondant : **un seul LIFT**, aucune restriction active, cycle toujours ACTIVE et aucune OPEN/CLOSE ; Nora obtient le résultat d'autorité confirmé et peut le restituer honnêtement. Contre-tests : zéro mutation.

## 6. Autres preuves utiles : C01/C02/C07/C08 et faux GO

- **C01+C02 PASS** : T01 développé → `OPEN_CYCLE APPLIED`, CADRAGE ACTIVE révision 1 et objectif « définir précisément le problème utilisateur, les besoins prioritaires et les hypothèses à vérifier » correctement conservé. Nora LIVE confirme l'effet et démarre le cadrage sans déclarer les besoins validés.
- **C07 PASS** : après levée manuelle, Nora LIVE indique révision 4, CADRAGE ACTIVE, aucune restriction active et explique que les décisions APPLY/LIFT sont des traces historiques, pas la projection effective. Aucune clôture non demandée.
- **C08 PASS** : demande explicite de clôture, avec réserves et refus d'ouverture automatique ; `CLOSE_CYCLE APPLIED`, révision 5, aucun cycle actif, cinq décisions. Nora distingue conservation dans le message source et absence de preuve de points ouverts structurés.
- **Faux GO PASS** : citation `« Ouvre le cycle CONCEPTION_FONCTIONNELLE »` dans un exemple explicitement non autorisant ; aucune ouverture ; révision et journal restent à 5.
- **C03** : guidance non citée spontanément en CADRAGE dans les réponses observées ; intercycles non testé, **non clos**.

Ne modifier ni les règles ayant permis ces succès, ni les composants externes sans risque démontré. Après la reprise, effectuer des **non-régressions ciblées** (unit, PG, E2E FAKE, navigateur si applicable), puis seulement une nouvelle RECETTE LIVE ciblée après autorisation de mise à disposition sur un nouveau SHA.

## 7. Contrat d'acceptation du macro-lot ciblé

| Groupe | Condition de sortie | Niveau de preuve requis |
|---|---|---|
| C04 | Statement propre et `objectRef` pertinent sur message réel | Unit + PG depuis conversation USER + projection/journal |
| C05 | Bonne cible documentaire même en présence de OPEN_CYCLE et d'un ancien `objectRef` pollué | Unit + PG avec C04 historique + REVISE + historique correct |
| C06 | Levée affirmative malgré exclusion négative de CLOSE/OPEN | Unit + PG avec restriction ciblée, 0 autres opérations |
| Autorité négative | Faux GO, plusieurs cibles, restrictions, refus, historique, hypothèse | Unit + PG, **zéro mutation**, état stable |
| Reprise/idempotence | Un tour = une seule décision ; conservation après replay/ACK perdu | PG + E2E déterministe proportionné |
| Régressions | C01/C02/C07/C08, cockpit, CKI silencieux | Tests ciblés ; pas de nouveau PASS LIVE sans retest utilisateur |
| Cohérence documentaire | Spec ML3, traçabilité et delivery-history synchronisés avec code | Diff + Review Pack Full |

**Sévérité :** C05 et C06 majeures pour l'expérience conversationnelle D6 ; C04 correction de qualité durable pouvant affecter les cibles futures ; conservation des faux GO et restrictions = invariant de sûreté **bloquant**.

## 8. Frontières et gates

- **IN :** diagnostic et corrections intégrées C04/C05/C06, code D3/D6 nécessaire, tests unit/PG/E2E pertinents, doc as-built, Review Pack Full, handoff L3.
- **OUT :** nouveaux domaines fonctionnels, moteur LLM autonome d'autorisation, migration DB, rétrocorrection des données de RECETTE, refonte UX, nouvel algorithme NLP universel, C03 hors non-régression, CI nouvelle, API Git, D7–D9.
- **Git :** source candidate `sfia/next-ml3-rct02-correctifs@d646d42a` ; worktree local **NON OBSERVÉ**, à vérifier par Cursor. Recommandation : branche locale isolée depuis `d646d42a`. Aucun push projet, PR ou merge sans gate distinct.
- **ENV-01 :** DEV isolé uniquement pour les changements ; préserver RECETTE `:3200` (build `R7JhVsbMaJdiUuuljApyn`, données schéma 007, session et fichiers) et l'ancien candidat `ba831b25`. Aucun reset ou migration sans mandat.
- **Versioning :** technique `0.0.0-dev`; `NO RELEASE`, STABLE `NOT AVAILABLE`, aucune nouvelle version produit attribuée.
- **Droits / sécurité :** seul le Pilote USER authentifié autorise ; Nora/CKI/Level A ne décident pas ; `executePilotageCommand` reste propriétaire unique des mutations ; relecture effective/revision attendue avant mutation.
- **Preuves :** tests locaux ≠ navigateur ≠ LIVE. Rapport Cursor autonome mono-cycle, fichier `.tmp-sfia-review/chatgpt-review.md` réinitialisé, handoff `sfia/review-handoff` fichier unique `sfia-review-handoff/latest-chatgpt-review.md` en `publish-in-cycle`.
- **Gates futurs distincts :** GO Morris pour commit/push projet, nouveau candidat RECETTE, reprise LIVE, PR, merge, clôture ML3, STABLE/release/adoption.

## 9. Index des preuves visuelles annexes

Les captures originales, exportées de la conversation, sont **jointes au bundle local** associé à cette restitution. Elles ne sont pas publiées sur Git et ne sont pas directement accessibles à Cursor sans transfert du bundle.

| Pièce | État montré |
|---|---|
| `A01-open-work.png` | Nora LIVE + `OPEN_CYCLE APPLIED` |
| `A02-open-pilotage.png` | CADRAGE ACTIVE rev1, objectif et HumanDecision |
| `A03-c04-pilotage.png` | RECORD rev2, `objectRef` et énoncé dégradés |
| `A04-c05-work.png` | Nora reconnaît révision, ne confirme pas l'effet |
| `A05-c05-pilotage.png` | rev2 et 2 décisions inchangées |
| `A06-restriction-active.png` | prérequis C06, rev3 APPLY |
| `A07-c06-work.png` | Nora comprend GO, ne confirme pas LIFT |
| `A08-c06-pilotage.png` | restriction toujours ACTIVE, rev3 |
| `A09-lift-ui.png` | levée par cockpit, rev4 |
| `A10-c07-work.png` | Nora LIVE lit aucune restriction active et historique |
| `A11-c08-pilotage.png` | CLOSE rev5, aucun cycle actif |
| `A12-faux-go-pilotage.png` | commande citée, zéro OPEN, rev5 |

**Conclusion :** ce complément est une source de défauts et une base de test, **pas une décision normative**. Le prochain Cursor doit d'abord reproduire et qualifier les causes, puis corriger **un macro-lot unique**, avec non-régression complète des effets déjà acceptés.

```

## 9. Gates NON acquis

push projet, PR, merge, redéploiement RECETTE, LIVE OpenAI Cursor, CI workflow, STABLE, release, ML3 CLOSED, ADOPTED.

## 10. Verdict

**READY FOR CHATGPT FINAL REVIEW — LOCAL LIVE REMEDIATION**
