# SFIA Studio Next — ML3 B13 R2–R3 Final Adjustments Review Pack FULL

## 01. Date et GO Morris
- Date UTC: 2026-11-06T14:51:51Z
- GO Morris: 2026-11-06 — derniers ajustements R2/R3 après Critical Review
- Nature: INC corrective ciblée ; Cycle 08 ; Profil CRITICAL
- Contrat B13 v0.1 VALIDATED IN CONTENT BY MORRIS

## 02. Branche, HEAD, base, dirty tree
```
pwd -P: /Users/morris/Projects/sfia-workspace
toplevel: /Users/morris/Projects/sfia-workspace
branch: sfia/next-pilotage-decisions-delivery
HEAD: 7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480
origin/main: 7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480
origin/sfia/review-handoff: 541c08946cda764cc41925150f2a322c03d15c06
handoff_blob_prior: ada98550620d5b649cf339f2b5e908e4f1284a1d
status (head):
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
 M projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
 M projects/sfia-studio-next/web/scripts/db-migrate.sh
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/db/schema.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
 M projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
?? projects/sfia-studio-next/cki/manifest.v0.2.0.json
?? projects/sfia-studio-next/web/public/file.svg
?? projects/sfia-studio-next/web/public/globe.svg
?? projects/sfia-studio-next/web/public/next.svg
?? projects/sfia-studio-next/web/public/vercel.svg
?? projects/sfia-studio-next/web/public/window.svg
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/decisions/route.ts
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/[commandId]/route.ts
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/by-key/[clientCommandKey]/route.ts
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/route.ts
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/route.ts
?? projects/sfia-studio-next/web/src/components/PilotagePanel.tsx
?? projects/sfia-studio-next/web/src/db/migrations/007_ml3_pilotage_decisions.sql
?? projects/sfia-studio-next/web/src/domains/decisions/authority.ts
?? projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts
?? projects/sfia-studio-next/web/src/domains/decisions/service.ts
?? projects/sfia-studio-next/web/src/domains/decisions/types.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/cki-resolve.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/service.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/types.ts
?? projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
?? projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml3-authority.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
diff name-status:
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
M	projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
M	projects/sfia-studio-next/web/scripts/db-migrate.sh
M	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
M	projects/sfia-studio-next/web/src/db/schema.ts
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
M	projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
M	projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
M	projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
untracked (head):
projects/sfia-studio-next/cki/manifest.v0.2.0.json
projects/sfia-studio-next/web/public/file.svg
projects/sfia-studio-next/web/public/globe.svg
projects/sfia-studio-next/web/public/next.svg
projects/sfia-studio-next/web/public/vercel.svg
projects/sfia-studio-next/web/public/window.svg
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/decisions/route.ts
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/[commandId]/route.ts
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/by-key/[clientCommandKey]/route.ts
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/route.ts
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/route.ts
projects/sfia-studio-next/web/src/components/PilotagePanel.tsx
projects/sfia-studio-next/web/src/db/migrations/007_ml3_pilotage_decisions.sql
projects/sfia-studio-next/web/src/domains/decisions/authority.ts
projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts
projects/sfia-studio-next/web/src/domains/decisions/service.ts
projects/sfia-studio-next/web/src/domains/decisions/types.ts
projects/sfia-studio-next/web/src/domains/pilotage/cki-resolve.ts
projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts
projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
projects/sfia-studio-next/web/src/domains/pilotage/service.ts
projects/sfia-studio-next/web/src/domains/pilotage/types.ts
projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
projects/sfia-studio-next/web/tests/unit/ml3-authority.test.ts
projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts
projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
```
Attendu HEAD=origin/main=`7f1f41c…` ; handoff prior `541c0894` / blob `ada98550`. Candidat dirty préservé. Aucun commit projet.

## 03. Sources Git consultées
- routing/template SFIA v2.6 ; SEF/roadmap/decisions/naming ; ENV-01 `14b61f0d` ; versioning `8bc93e0f`
- construction pilotage + delivery-history ; handoff prior R1–R3 ; code local divergence-assist / nora-context / service / tests

## 04. Reproduction R2/R3 avant correction
| ID | Constat |
| --- | --- |
| R2 | Forms n-est jamais / n-est aucunement not recognized → false COMPATIBLE_RESTATEMENT via synonym/overlap |
| R3 | Foreign decision created AFTER Nora generation → non-discriminating proof |

## 05. Diff fonctionnel exact
- R2: normalize typographic apostrophes ; extend polarity cues jamais/aucunement/ne doit|peut pas (être)
- R3: seed A+B and APPLICABLE decisions BEFORE postUserMessageAndNora ; same objectRef ; unique marker ; assert ctx B+/A-

## 06. Blast radius
- Touched: divergence-assist.ts ; ml3-b13-divergence.test.ts ; ml3-pilotage.pg.test.ts ; docs construction
- Untouched: D5/D6 services, migration 007, PilotagePanel, APIs, SEF

## 07. Fichiers créés
Aucun fichier architectural nouveau.

## 08. Modifications — contenus
SHA-256:
```
7c80d4d20ecb8bd2e0613208ebd6c92dad8606f05a12b8106aeb70d983f8c9f3  projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts
5d39a9db96a5d43f74dbcc483128f8082ed448c083b17eedafb83be03c59d4ba  projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts
65b14219d7ef213734286614bca41a791227eec9995ee9930b8f663e5d2e0f64  projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
```

### divergence-assist.ts — normalizeText + modalityPolarity + frameConfrontation (extrait)
```typescript
function normalizeText(text: string): string {
  // Normalize typographic apostrophes so « n’est » and « n'est » share one path.
  return text
    .trim()
    .toLowerCase()
    .replace(/[\u2019\u2018\u02bc`]/g, "'")
    .replace(/\s+/g, " ");
}

function significantTokens(text: string): string[] {
  return normalizeText(text)
    .split(/[^a-z0-9àâäéèêëïîôùûüç]+/i)
    .filter((t) => t.length >= 4);
}

/** True when user text appears to revisit a recorded object (heuristic, cognitive only). */
export function utteranceTouchesObject(userText: string, objectRef: string): boolean {
  const needle = objectRef.trim().toLowerCase();
  if (!needle || needle.length < 3) return false;
  const hay = normalizeText(userText);
  if (hay.includes(needle)) return true;
  const tokens = needle.split(/[^a-z0-9àâäéèêëïîôùûüç]+/i).filter((t) => t.length >= 4);
  if (tokens.length === 0) return false;
  return tokens.some((t) => hay.includes(t));
}

function tokenOverlapRatio(a: string, b: string): number {
  const ta = new Set(significantTokens(a));
  const tb = new Set(significantTokens(b));
  if (ta.size === 0 || tb.size === 0) return 0;
  let inter = 0;
  for (const t of ta) if (tb.has(t)) inter += 1;
  return inter / Math.max(ta.size, tb.size);
}

function looksOpposed(prior: string, current: string): boolean {
  for (const [left, right] of OPPOSITION_PAIRS) {
    if ((left.test(prior) && right.test(current)) || (right.test(prior) && left.test(current))) {
      return true;
    }
  }
  return false;
}

/**
 * R2 — detect affirmed vs negated polarity of a modality term in a short window.
 * Heuristic only (Niveau A). Prefer AMBIGUOUS/POSSIBLE_CHANGE over false COMPATIBLE.
 * Bounded FR family: n'est plus|pas|jamais|aucunement ; ne doit/peut pas (être) ; pas / never / not.
 */
function modalityPolarity(text: string, term: string): "affirm" | "negate" | "absent" {
  const n = normalizeText(text);
  const idx = n.indexOf(term);
  if (idx < 0) return "absent";
  const before = n.slice(Math.max(0, idx - 56), idx);
  // Apostrophe already normalized to ASCII in normalizeText.
  if (
    /(?:n'est\s+(?:plus|pas|jamais|aucunement)|ne\s+(?:doit|peut|saurait)\s+pas(?:\s+être)?|ne\s+\w{1,20}\s+pas|pas\s+(?:plus\s+|du\s+tout\s+|aucunement\s+)?|plus\s+(?:d[e']\s+)?|non\s+|is\s+no\s+longer\s+|is\s+not\s+|no\s+longer\s+|never\s+|not\s+)\s*$/i.test(
      before,
    )
  ) {
    return "negate";
  }
  const after = n.slice(idx + term.length, idx + term.length + 32);
  if (
    /^\s*(?:n'est\s+(?:plus|pas|jamais|aucunement)|is\s+no\s+longer|is\s+not|never)\b/i.test(after)
  ) {
    return "negate";
  }
  return "affirm";
}

function looksPolarityInverted(prior: string, current: string): boolean {
  for (const term of MODALITY_TERMS) {
    const p = modalityPolarity(prior, term);
    const c = modalityPolarity(current, term);
    if (p !== "absent" && c !== "absent" && p !== c) return true;
  }
  return false;
}

function sharesAffirmedModalitySynonym(prior: string, current: string): boolean {
  for (const group of MODALITY_SYNONYM_GROUPS) {
    const priorAffirm = group.some((t) => modalityPolarity(prior, t) === "affirm");
    const currentAffirm = group.some((t) => modalityPolarity(current, t) === "affirm");
    if (priorAffirm && currentAffirm) return true;
  }
  return false;
}

/** Distinct global vs local scope markers → clarify; never auto-equate. */
function looksScopeShift(prior: string, current: string): boolean {
  return (
    (GLOBAL_SCOPE_RE.test(prior) && LOCAL_SCOPE_RE.test(current)) ||
    (LOCAL_SCOPE_RE.test(prior) && GLOBAL_SCOPE_RE.test(current))
  );
}

/**
 * R2 — Level A framing only. Never D6 authority.
 * Negation / polarity inversion must not become COMPATIBLE_RESTATEMENT via token overlap.
 */
function frameConfrontation(prior: string, current: string): LevelASignal["framing"] {
  if (looksOpposed(prior, current) || looksPolarityInverted(prior, current)) {
    return "POSSIBLE_CHANGE";
  }
  if (looksScopeShift(prior, current)) {
    return "AMBIGUOUS";
  }
  if (sharesAffirmedModalitySynonym(prior, current)) {
    return "COMPATIBLE_RESTATEMENT";
  }
  const overlap = tokenOverlapRatio(prior, current);
  // High lexical overlap alone is weak evidence — prefer AMBIGUOUS over false compatible
  // when modality synonyms are absent (R2: shared words ≠ same sense).
  if (overlap >= 0.65) return "COMPATIBLE_RESTATEMENT";
  if (overlap >= 0.2) return "AMBIGUOUS";
  return "AMBIGUOUS";
}

/**
 * C01
```

### divergence-assist.ts — fichier complet
```typescript
/**
 * B13 v0.1 — assisted contradictions (VALIDATED IN CONTENT BY MORRIS, 2026-11-06).
 *
 * Level A — POTENTIAL / cognitive signal for Nora. Never D6 authority.
 * Level B — MATERIAL conflict: typed deterministic checks at point of effect only.
 *
 * C01: a single APPLICABLE D6 decision can be confronted with a new USER message
 * without requiring a second persisted decision.
 */

export type DecisionBrief = {
  id: string;
  kind: string;
  objectRef: string;
  scope: string;
  statement: string;
  state: string;
  sourceKind: string;
};

/** Structured Level A signal passed to Nora (fixture and LIVE path). Never authority. */
export type LevelASignal = {
  kind: "MESSAGE_DECISION_CONFRONTATION" | "STORED_DECISION_DIVERGENCE";
  objectRef: string;
  scope: string;
  decisionId: string;
  decisionIds?: string[];
  priorStatement: string;
  currentExpression: string;
  /** Context selection framing — not a D6 verdict. */
  framing: "POSSIBLE_CHANGE" | "COMPATIBLE_RESTATEMENT" | "AMBIGUOUS";
  authorityClaim: "NONE";
};

export type PotentialDivergence = {
  level: "A_POTENTIAL";
  kind: string;
  objectRef: string;
  scope: string;
  decisionIds: string[];
  statements: string[];
  authorityClaim: "NONE";
};

const MAX_APPLICABLE_FOR_CONTEXT = 12;
const MAX_SIGNALS = 3;

const OPPOSITION_PAIRS: Array<[RegExp, RegExp]> = [
  [/\b(obligatoire|requis|required|mandatory|must)\b/i, /\b(facultatif|optionnel|optional|volontaire)\b/i],
  [/\b(interdit|prohibé|banned|forbidden)\b/i, /\b(autorisé|permis|allowed|autoriser)\b/i],
  [/\b(actif|ouverte?|open)\b/i, /\b(fermé|clos|closed|inactif)\b/i],
];

/** Modality terms whose affirmed/negated polarity must not be collapsed by lexical overlap. */
const MODALITY_TERMS = [
  "obligatoire",
  "requis",
  "required",
  "mandatory",
  "interdit",
  "prohibé",
  "banned",
  "forbidden",
  "autorisé",
  "permis",
  "allowed",
  "facultatif",
  "optionnel",
  "optional",
  "volontaire",
] as const;

/** Affirmed synonym groups — shared group ⇒ possible COMPATIBLE_RESTATEMENT (still Level A). */
const MODALITY_SYNONYM_GROUPS: string[][] = [
  ["obligatoire", "requis", "required", "mandatory"],
  ["facultatif", "optionnel", "optional", "volontaire"],
  ["interdit", "prohibé", "banned", "forbidden"],
  ["autorisé", "permis", "allowed"],
];

const GLOBAL_SCOPE_RE =
  /\b(tout\s+le\s+projet|ensemble\s+du\s+projet|global(?:e|ement)?|pour\s+tout)\b/i;
const LOCAL_SCOPE_RE =
  /\b(seulement|uniquement|juste\s+pour|pour\s+(?:ce\s+)?(?:cycle|ux|cadrage|activité))\b/i;

/** Keep recent applicable decisions for Nora context — project-scoped, bounded. */
export function selectApplicableBriefs(rows: DecisionBrief[]): DecisionBrief[] {
  return rows
    .filter((r) => r.state === "APPLICABLE" && (r.objectRef ?? "").trim().length > 0)
    .slice(-MAX_APPLICABLE_FOR_CONTEXT);
}

function normalizeText(text: string): string {
  // Normalize typographic apostrophes so « n’est » and « n'est » share one path.
  return text
    .trim()
    .toLowerCase()
    .replace(/[\u2019\u2018\u02bc`]/g, "'")
    .replace(/\s+/g, " ");
}

function significantTokens(text: string): string[] {
  return normalizeText(text)
    .split(/[^a-z0-9àâäéèêëïîôùûüç]+/i)
    .filter((t) => t.length >= 4);
}

/** True when user text appears to revisit a recorded object (heuristic, cognitive only). */
export function utteranceTouchesObject(userText: string, objectRef: string): boolean {
  const needle = objectRef.trim().toLowerCase();
  if (!needle || needle.length < 3) return false;
  const hay = normalizeText(userText);
  if (hay.includes(needle)) return true;
  const tokens = needle.split(/[^a-z0-9àâäéèêëïîôùûüç]+/i).filter((t) => t.length >= 4);
  if (tokens.length === 0) return false;
  return tokens.some((t) => hay.includes(t));
}

function tokenOverlapRatio(a: string, b: string): number {
  const ta = new Set(significantTokens(a));
  const tb = new Set(significantTokens(b));
  if (ta.size === 0 || tb.size === 0) return 0;
  let inter = 0;
  for (const t of ta) if (tb.has(t)) inter += 1;
  return inter / Math.max(ta.size, tb.size);
}

function looksOpposed(prior: string, current: string): boolean {
  for (const [left, right] of OPPOSITION_PAIRS) {
    if ((left.test(prior) && right.test(current)) || (right.test(prior) && left.test(current))) {
      return true;
    }
  }
  return false;
}

/**
 * R2 — detect affirmed vs negated polarity of a modality term in a short window.
 * Heuristic only (Niveau A). Prefer AMBIGUOUS/POSSIBLE_CHANGE over false COMPATIBLE.
 * Bounded FR family: n'est plus|pas|jamais|aucunement ; ne doit/peut pas (être) ; pas / never / not.
 */
function modalityPolarity(text: string, term: string): "affirm" | "negate" | "absent" {
  const n = normalizeText(text);
  const idx = n.indexOf(term);
  if (idx < 0) return "absent";
  const before = n.slice(Math.max(0, idx - 56), idx);
  // Apostrophe already normalized to ASCII in normalizeText.
  if (
    /(?:n'est\s+(?:plus|pas|jamais|aucunement)|ne\s+(?:doit|peut|saurait)\s+pas(?:\s+être)?|ne\s+\w{1,20}\s+pas|pas\s+(?:plus\s+|du\s+tout\s+|aucunement\s+)?|plus\s+(?:d[e']\s+)?|non\s+|is\s+no\s+longer\s+|is\s+not\s+|no\s+longer\s+|never\s+|not\s+)\s*$/i.test(
      before,
    )
  ) {
    return "negate";
  }
  const after = n.slice(idx + term.length, idx + term.length + 32);
  if (
    /^\s*(?:n'est\s+(?:plus|pas|jamais|aucunement)|is\s+no\s+longer|is\s+not|never)\b/i.test(after)
  ) {
    return "negate";
  }
  return "affirm";
}

function looksPolarityInverted(prior: string, current: string): boolean {
  for (const term of MODALITY_TERMS) {
    const p = modalityPolarity(prior, term);
    const c = modalityPolarity(current, term);
    if (p !== "absent" && c !== "absent" && p !== c) return true;
  }
  return false;
}

function sharesAffirmedModalitySynonym(prior: string, current: string): boolean {
  for (const group of MODALITY_SYNONYM_GROUPS) {
    const priorAffirm = group.some((t) => modalityPolarity(prior, t) === "affirm");
    const currentAffirm = group.some((t) => modalityPolarity(current, t) === "affirm");
    if (priorAffirm && currentAffirm) return true;
  }
  return false;
}

/** Distinct global vs local scope markers → clarify; never auto-equate. */
function looksScopeShift(prior: string, current: string): boolean {
  return (
    (GLOBAL_SCOPE_RE.test(prior) && LOCAL_SCOPE_RE.test(current)) ||
    (LOCAL_SCOPE_RE.test(prior) && GLOBAL_SCOPE_RE.test(current))
  );
}

/**
 * R2 — Level A framing only. Never D6 authority.
 * Negation / polarity inversion must not become COMPATIBLE_RESTATEMENT via token overlap.
 */
function frameConfrontation(prior: string, current: string): LevelASignal["framing"] {
  if (looksOpposed(prior, current) || looksPolarityInverted(prior, current)) {
    return "POSSIBLE_CHANGE";
  }
  if (looksScopeShift(prior, current)) {
    return "AMBIGUOUS";
  }
  if (sharesAffirmedModalitySynonym(prior, current)) {
    return "COMPATIBLE_RESTATEMENT";
  }
  const overlap = tokenOverlapRatio(prior, current);
  // High lexical overlap alone is weak evidence — prefer AMBIGUOUS over false compatible
  // when modality synonyms are absent (R2: shared words ≠ same sense).
  if (overlap >= 0.65) return "COMPATIBLE_RESTATEMENT";
  if (overlap >= 0.2) return "AMBIGUOUS";
  return "AMBIGUOUS";
}

/**
 * C01 — confront a new USER message with existing APPLICABLE D6 decisions.
 * Does not require a second persisted decision. Never creates authority.
 */
export function findMessageDecisionConfrontations(
  userText: string,
  rows: DecisionBrief[],
): LevelASignal[] {
  const text = userText.trim();
  if (!text) return [];
  const applicable = selectApplicableBriefs(rows);
  const out: LevelASignal[] = [];
  for (const row of applicable) {
    if (!utteranceTouchesObject(text, row.objectRef)) continue;
    // Exact same statement → no signal beyond the applicable list itself.
    if (normalizeText(text) === normalizeText(row.statement)) continue;
    out.push({
      kind: "MESSAGE_DECISION_CONFRONTATION",
      objectRef: row.objectRef,
      scope: row.scope,
      decisionId: row.id,
      priorStatement: row.statement,
      currentExpression: text.slice(0, 500),
      framing: frameConfrontation(row.statement, text),
      authorityClaim: "NONE",
    });
    if (out.length >= MAX_SIGNALS) break;
  }
  return out;
}

/**
 * Level A among already-stored APPLICABLE rows (same kind+objectRef+scope,
 * ≥2 distinct statements). Secondary to message confrontation. Cognitive only.
 */
export function findPotentialDivergences(rows: DecisionBrief[]): PotentialDivergence[] {
  const applicable = selectApplicableBriefs(rows);
  const groups = new Map<string, DecisionBrief[]>();
  for (const row of applicable) {
    const key = `${row.kind}\u0000${row.objectRef.trim().toLowerCase()}\u0000${row.scope}`;
    const bucket = groups.get(key) ?? [];
    bucket.push(row);
    groups.set(key, bucket);
  }
  const out: PotentialDivergence[] = [];
  for (const bucket of groups.values()) {
    const statements = [...new Set(bucket.map((b) => b.statement.trim()).filter(Boolean))];
    if (statements.length < 2) continue;
    out.push({
      level: "A_POTENTIAL",
      kind: bucket[0].kind,
      objectRef: bucket[0].objectRef,
      scope: bucket[0].scope,
      decisionIds: bucket.map((b) => b.id),
      statements,
      authorityClaim: "NONE",
    });
    if (out.length >= MAX_SIGNALS) break;
  }
  return out;
}

export function storedDivergencesToSignals(divs: PotentialDivergence[]): LevelASignal[] {
  return divs.map((d) => ({
    kind: "STORED_DECISION_DIVERGENCE" as const,
    objectRef: d.objectRef,
    scope: d.scope,
    decisionId: d.decisionIds[0],
    decisionIds: d.decisionIds,
    priorStatement: d.statements[0] ?? "",
    currentExpression: d.statements[1] ?? d.statements[0] ?? "",
    framing: looksOpposed(d.statements[0] ?? "", d.statements[1] ?? "")
      ? ("POSSIBLE_CHANGE" as const)
      : ("AMBIGUOUS" as const),
    authorityClaim: "NONE" as const,
  }));
}

export function formatLevelASignalSnippets(signals: LevelASignal[]): string[] {
  if (signals.length === 0) {
    return [
      "### Niveau A — rapprochement message / décisions",
      "Aucun signal de revisite pertinente pour l'énoncé courant.",
    ];
  }
  const lines: string[] = [
    "### Niveau A — rapprochement message / décisions (cognitive, PAS un blocage D6)",
    "Nora peut expliquer et clarifier. Elle ne révoque, ne remplace, ni ne suspend.",
    "Une suspicion n'est pas un conflit matériel déterministe.",
  ];
  for (const s of signals) {
    lines.push(
      `- signal=${s.kind} framing=${s.framing} objet=${s.objectRef} scope=${s.scope} décision=${s.decisionId} authorityClaim=${s.authorityClaim}`,
      `  décision existante: « ${s.priorStatement.slice(0, 160)} »`,
      `  expression courante: « ${s.currentExpression.slice(0, 160)} »`,
    );
  }
  return lines;
}

/** @deprecated Prefer formatLevelASignalSnippets — kept for callers that still pass raw divergences. */
export function formatDivergenceSnippets(
  divergences: PotentialDivergence[],
  userText?: string,
): string[] {
  const filtered = userText
    ? divergences.filter((d) => utteranceTouchesObject(userText, d.objectRef))
    : divergences;
  return formatLevelASignalSnippets(storedDivergencesToSignals(filtered));
}

export function formatApplicableDecisionSnippets(rows: DecisionBrief[]): string[] {
  const briefs = selectApplicableBriefs(rows);
  if (briefs.length === 0) {
    return ["### Décisions D6 applicables", "(aucune décision applicable avec objectRef)"];
  }
  const lines = [
    "### Décisions D6 applicables (sources — Nora n'en tire aucune autorité)",
  ];
  for (const b of briefs) {
    lines.push(
      `- ${b.id} kind=${b.kind} object=${b.objectRef} scope=${b.scope} state=${b.state} source=${b.sourceKind} « ${b.statement.slice(0, 160)} »`,
    );
  }
  return lines;
}

export function buildLevelAClarification(input: {
  priorStatement: string;
  newExpression: string;
  objectRef: string;
  framing?: LevelASignal["framing"];
}): string {
  if (input.framing === "COMPATIBLE_RESTATEMENT") {
    return (
      `Tu as une décision applicable sur « ${input.objectRef} » : « ${input.priorStatement.slice(0, 200)} ».\n` +
      `Ton message (« ${input.newExpression.slice(0, 200)} ») semble compatible — pas de conflit matériel établi.\n` +
      `(Niveau A — pas une HumanDecision, pas une interdiction D6.)`
    );
  }
  return (
    `Tu avais retenu : « ${input.priorStatement.slice(0, 200)} » (objet ${input.objectRef}).\n` +
    `Tu exprimes maintenant : « ${input.newExpression.slice(0, 200)} ».\n` +
    `Souhaites-tu remplacer ce choix pour l'ensemble du projet ou seulement pour cette activité ?\n` +
    `(Proposition cognitive Niveau A — pas une décision D6, pas une interdiction.)`
  );
}

/**
 * C02 — qualify pilotage command outcomes for UX.
 * CONFLICT alone is never an authority block (STALE_REVISION / HUMAN_INTENT / FINGERPRINT / ACTIVE_CYCLE).
 */
export type CommandOutcomeKind =
  | "authority_block"
  | "technical_conflict"
  | "d5_state"
  | "business_refusal"
  | "unknown"
  | "applied"
  | "other";

export function qualifyCommandOutcome(input: {
  status: string;
  reasonCode?: string | null;
}): { kind: CommandOutcomeKind; label: string; testId: string } {
  const status = (input.status ?? "").trim().toUpperCase();
  const code = (input.reasonCode ?? "").trim().toUpperCase();

  if (status === "APPLIED" || status === "ALREADY_APPLIED") {
    return { kind: "applied", label: "Effet confirmé.", testId: "outcome-applied" };
  }
  if (status === "UNKNOWN" || status.startsWith("UNKNOWN")) {
    return {
      kind: "unknown",
      label: "Résultat non confirmé — réconcilier avant une nouvelle tentative.",
      testId: "outcome-unknown",
    };
  }
  if (status === "REJECTED" && code === "RESTRICTION") {
    return {
      kind: "authority_block",
      label: "Restriction D6 applicable — refus d'autorité borné au point d'effet.",
      testId: "authority-block-established",
    };
  }
  if (status === "CONFLICT" && (code === "STALE_REVISION" || code === "HUMAN_INTENT" || code === "FINGERPRINT")) {
    const labels: Record<string, string> = {
      STALE_REVISION: "Révision périmée — actualiser / réconcilier.",
      HUMAN_INTENT: "Intention humaine déjà enregistrée — consulter le résultat, pas de double effet.",
      FINGERPRINT: "Clé d'idempotence réutilisée avec paramètres incompatibles.",
    };
    return {
      kind: "technical_conflict",
      label: labels[code] ?? "Conflit technique — pas un blocage d'autorité D6.",
      testId: `outcome-technical-${code.toLowerCase()}`,
    };
  }
  if (status === "CONFLICT" && (code === "ACTIVE_CYCLE" || code === "ALREADY_PRESENT")) {
    return {
      kind: "d5_state",
      label: "Invariant d'état D5 — pas une contradiction entre décisions humaines.",
      testId: "outcome-d5-state",
    };
  }
  if (status === "REJECTED") {
    return {
      kind: "business_refusal",
      label: "Refus métier — pas une décision APPLIED.",
      testId: "authority-refusal",
    };
  }
  if (status === "CONFLICT") {
    return {
      kind: "technical_conflict",
      label: "Conflit technique/état — pas un blocage d'autorité D6 établi.",
      testId: "outcome-technical-other",
    };
  }
  return { kind: "other", label: "", testId: "outcome-other" };
}

```

### ml3-b13-divergence.test.ts — complet
```typescript
import { describe, expect, it, afterEach } from "vitest";
import {
  buildLevelAClarification,
  findMessageDecisionConfrontations,
  findPotentialDivergences,
  qualifyCommandOutcome,
  selectApplicableBriefs,
} from "@/domains/decisions/divergence-assist";
import { generateNoraReply } from "@/domains/conversation/nora-adapter";

const prior = {
  id: "dec_gh",
  kind: "RECORD_DECISION",
  objectRef: "github-connexion",
  scope: "PROJECT",
  statement: "La connexion GitHub est obligatoire pour ce projet.",
  state: "APPLICABLE",
  sourceKind: "EXPLICIT_INTERACTION",
};

describe("B13 C01 message↔decision confrontation", () => {
  const prevLane = process.env.STUDIO_LANE;
  const prevE2e = process.env.STUDIO_E2E;

  afterEach(() => {
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
    if (prevE2e === undefined) delete process.env.STUDIO_E2E;
    else process.env.STUDIO_E2E = prevE2e;
  });

  it("C01: single APPLICABLE decision + new USER message yields Level A without second decision", () => {
    const signals = findMessageDecisionConfrontations(
      "Finalement, je préfère GitHub facultatif.",
      [prior],
    );
    expect(signals).toHaveLength(1);
    expect(signals[0].kind).toBe("MESSAGE_DECISION_CONFRONTATION");
    expect(signals[0].decisionId).toBe("dec_gh");
    expect(signals[0].framing).toBe("POSSIBLE_CHANGE");
    expect(signals[0].authorityClaim).toBe("NONE");
    expect(findPotentialDivergences([prior])).toHaveLength(0);
  });

  it("C01/R2: compatible different formulations are not treated as possible change", () => {
    const signals = findMessageDecisionConfrontations(
      "GitHub reste requis pour ce projet.",
      [prior],
    );
    expect(signals.length).toBeGreaterThanOrEqual(1);
    expect(signals[0].framing).toBe("COMPATIBLE_RESTATEMENT");
    expect(signals[0].authorityClaim).toBe("NONE");
  });

  it("R2: negation of same modality is never COMPATIBLE_RESTATEMENT", () => {
    const base = { ...prior, statement: "GitHub est obligatoire." };
    const cases: Array<{ user: string; statement?: string }> = [
      { user: "GitHub n'est plus obligatoire." },
      { user: "GitHub n'est pas obligatoire." },
      { user: "GitHub n'est jamais obligatoire." },
      { user: "GitHub n'est aucunement obligatoire." },
      // Typographic apostrophe (U+2019)
      { user: "GitHub n\u2019est jamais obligatoire." },
      { user: "GitHub n\u2019est aucunement obligatoire." },
      { user: "GitHub ne doit pas être obligatoire." },
      {
        user: "GitHub n'est pas interdit.",
        statement: "GitHub est interdit pour ce projet.",
      },
      {
        user: "GitHub n'est pas requis.",
        statement: "GitHub est requis pour ce projet.",
      },
    ];
    for (const c of cases) {
      const row = { ...base, statement: c.statement ?? base.statement };
      const signals = findMessageDecisionConfrontations(c.user, [row]);
      expect(signals.length, c.user).toBeGreaterThanOrEqual(1);
      expect(signals[0].framing, c.user).not.toBe("COMPATIBLE_RESTATEMENT");
      expect(["POSSIBLE_CHANGE", "AMBIGUOUS"], c.user).toContain(signals[0].framing);
      expect(signals[0].authorityClaim).toBe("NONE");
    }
  });

  it("R2: positive restatements remain compatible when polarity agrees", () => {
    const base = { ...prior, statement: "GitHub est obligatoire." };
    for (const user of ["GitHub reste obligatoire.", "GitHub reste requis."]) {
      const signals = findMessageDecisionConfrontations(user, [base]);
      expect(signals.length).toBeGreaterThanOrEqual(1);
      expect(signals[0].framing).toBe("COMPATIBLE_RESTATEMENT");
      expect(signals[0].authorityClaim).toBe("NONE");
    }
  });

  it("R2: scope shift stays AMBIGUOUS (no automatic global equivalence)", () => {
    const signals = findMessageDecisionConfrontations(
      "GitHub obligatoire seulement pour UX",
      [
        {
          ...prior,
          statement: "GitHub obligatoire pour tout le projet.",
        },
      ],
    );
    expect(signals.length).toBeGreaterThanOrEqual(1);
    expect(signals[0].framing).toBe("AMBIGUOUS");
    expect(signals[0].authorityClaim).toBe("NONE");
  });

  it("R1: UNKNOWN presentation is never authority-block; cleared outcome shows nothing", () => {
    const restriction = qualifyCommandOutcome({
      status: "REJECTED",
      reasonCode: "RESTRICTION",
    });
    expect(restriction.testId).toBe("authority-block-established");
    // After runCommand start, lastOutcome is null → UI hides qualified motif.
    const afterStart: null = null;
    expect(afterStart).toBeNull();
    const unknown = qualifyCommandOutcome({ status: "UNKNOWN" });
    expect(unknown.kind).toBe("unknown");
    expect(unknown.testId).toBe("outcome-unknown");
    expect(unknown.testId).not.toBe("authority-block-established");
    const applied = qualifyCommandOutcome({ status: "APPLIED" });
    expect(applied.testId).toBe("outcome-applied");
    expect(applied.testId).not.toBe("authority-block-established");
  });

  it("C01: unrelated object is not confronted", () => {
    expect(
      findMessageDecisionConfrontations("Je veux changer la couleur du logo.", [prior]),
    ).toHaveLength(0);
  });

  it("C01: REVOKED decision is not a current authority source", () => {
    expect(
      findMessageDecisionConfrontations("GitHub facultatif", [
        { ...prior, state: "REVOKED" },
      ]),
    ).toHaveLength(0);
    expect(selectApplicableBriefs([{ ...prior, state: "REVOKED" }])).toHaveLength(0);
  });

  it("C01 fixture uses structured levelASignals (same entry as conversation path)", async () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    const signals = findMessageDecisionConfrontations(
      "Finalement, je préfère GitHub facultatif.",
      [prior],
    );
    const result = await generateNoraReply({
      userText: "Finalement, je préfère GitHub facultatif.",
      contextSnippets: [],
      pilotageSnippets: ["### Décisions D6 applicables"],
      levelASignals: signals,
    });
    expect(result.mode).toBe("deterministic-fixture");
    expect(result.status).toBe("COMPLETE");
    expect(result.content).toMatch(/Niveau A/i);
    expect(result.content).toMatch(/pas une (HumanDecision|interdiction D6)/i);
    expect(result.content).toContain("dec_gh");
    expect(result.content).not.toMatch(/HumanDecision créée|je révoque/i);
  });

  it("buildLevelAClarification distinguishes compatible restatement", () => {
    expect(
      buildLevelAClarification({
        priorStatement: prior.statement,
        newExpression: "GitHub reste requis",
        objectRef: prior.objectRef,
        framing: "COMPATIBLE_RESTATEMENT",
      }),
    ).toMatch(/semble compatible/);
  });
});

describe("B13 C02 qualifyCommandOutcome", () => {
  it("does not treat CONFLICT+STALE_REVISION as authority block", () => {
    const q = qualifyCommandOutcome({ status: "CONFLICT", reasonCode: "STALE_REVISION" });
    expect(q.kind).toBe("technical_conflict");
    expect(q.testId).not.toBe("authority-block-established");
  });

  it("does not treat CONFLICT+HUMAN_INTENT as authority block", () => {
    const q = qualifyCommandOutcome({ status: "CONFLICT", reasonCode: "HUMAN_INTENT" });
    expect(q.kind).toBe("technical_conflict");
    expect(q.testId).toBe("outcome-technical-human_intent");
  });

  it("does not treat CONFLICT+FINGERPRINT as authority block", () => {
    const q = qualifyCommandOutcome({ status: "CONFLICT", reasonCode: "FINGERPRINT" });
    expect(q.kind).toBe("technical_conflict");
  });

  it("REJECTED+RESTRICTION is authority block", () => {
    const q = qualifyCommandOutcome({ status: "REJECTED", reasonCode: "RESTRICTION" });
    expect(q.kind).toBe("authority_block");
    expect(q.testId).toBe("authority-block-established");
  });

  it("CONFLICT+ACTIVE_CYCLE is D5 state, not D6 contradiction", () => {
    const q = qualifyCommandOutcome({ status: "CONFLICT", reasonCode: "ACTIVE_CYCLE" });
    expect(q.kind).toBe("d5_state");
  });

  it("UNKNOWN asks for reconciliation", () => {
    const q = qualifyCommandOutcome({ status: "UNKNOWN" });
    expect(q.kind).toBe("unknown");
    expect(q.testId).toBe("outcome-unknown");
  });
});

```

### ml3-pilotage.pg.test.ts — test R3 complet
```typescript
it("R3: postUserMessageAndNora integrates USER→D6 context→fixture→persisted thread without inventing HumanDecision", async () => {
    const { postUserMessageAndNora, listMessages } = await import(
      "@/domains/conversation/service"
    );
    const { buildNoraPilotageContext } = await import("@/domains/pilotage/nora-context");
    const { utteranceTouchesObject } = await import("@/domains/decisions/divergence-assist");
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const projectA = await seedProject("b13-r3-iso-a");
      const projectB = await seedProject("b13-r3-iso-b");
      const foreignMarker = `MARKER_B13_R3_ISO_FOREIGN_${newId("mk")}`;

      // Both decisions MUST exist and be APPLICABLE before Nora generation (discriminating isolation).
      const recordedA = await executePilotageCommand(projectA.pilotId, projectA.projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        objectRef: "github-connexion",
        statement: "La connexion GitHub est obligatoire.",
      });
      expect(recordedA.status).toBe("APPLIED");
      expect(recordedA.decisionId).toBeTruthy();

      const recordedB = await executePilotageCommand(projectB.pilotId, projectB.projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        // Same objectRef as A so a cross-project leak would be selected for the USER text.
        objectRef: "github-connexion",
        statement: `GitHub obligatoire — ${foreignMarker} — décision étrangère projet B.`,
      });
      expect(recordedB.status).toBe("APPLIED");
      expect(recordedB.decisionId).toBeTruthy();

      const journalABefore = await listDecisionJournal(projectA.pilotId, projectA.projectId);
      const journalBBefore = await listDecisionJournal(projectB.pilotId, projectB.projectId);
      expect(journalABefore.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);
      expect(journalBBefore.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);
      expect(journalBBefore.some((d) => d.statement.includes(foreignMarker))).toBe(true);
      expect(journalBBefore.some((d) => d.id === recordedB.decisionId)).toBe(true);

      const userText = "Finalement, GitHub devient facultatif.";
      // USER text is relevant to B's objectRef — without project filter B would be confrontable.
      expect(utteranceTouchesObject(userText, "github-connexion")).toBe(true);

      const ctxB = await buildNoraPilotageContext(
        projectB.pilotId,
        projectB.preparationId,
        userText,
      );
      expect(ctxB.projectId).toBe(projectB.projectId);
      expect(ctxB.snippets.join("\n")).toContain(foreignMarker);
      expect(ctxB.snippets.join("\n")).toContain(recordedB.decisionId!);

      const ctxABefore = await buildNoraPilotageContext(
        projectA.pilotId,
        projectA.preparationId,
        userText,
      );
      expect(ctxABefore.projectId).toBe(projectA.projectId);
      expect(ctxABefore.snippets.join("\n")).toContain(recordedA.decisionId!);
      expect(ctxABefore.snippets.join("\n")).not.toContain(foreignMarker);
      expect(ctxABefore.snippets.join("\n")).not.toContain(recordedB.decisionId!);
      expect(ctxABefore.levelASignals.every((s) => s.decisionId !== recordedB.decisionId)).toBe(
        true,
      );

      const turnKey = `b13-r3-${newId("turn")}`;
      const result = await postUserMessageAndNora(
        projectA.pilotId,
        projectA.preparationId,
        userText,
        { clientTurnKey: turnKey },
      );
      expect(result.status).toBe("COMPLETE");
      expect(result.humanDecisionCreated).toBe(false);
      expect(result.noraMode).toBe("deterministic-fixture");
      expect(result.userMessageId).toBeTruthy();
      expect(result.assistantMessageId).toBeTruthy();

      const thread = await listMessages(projectA.pilotId, projectA.preparationId);
      const userMsg = thread.find((m) => m.id === result.userMessageId);
      const assistantMsg = thread.find((m) => m.id === result.assistantMessageId);
      expect(userMsg?.role).toBe("user");
      expect(userMsg?.content).toBe(userText);
      expect(userMsg?.status).toBe("COMPLETE");
      expect(assistantMsg?.role).toBe("assistant");
      expect(assistantMsg?.status).toBe("COMPLETE");
      expect(assistantMsg?.content).toMatch(/Niveau A/i);
      expect(assistantMsg?.content).toContain(recordedA.decisionId!);
      expect(assistantMsg?.content).toMatch(/pas une (HumanDecision|interdiction D6)/i);
      expect(assistantMsg?.content).not.toMatch(/blocage D6 établi|je révoque|HumanDecision créée/i);
      expect(assistantMsg?.content).not.toContain(foreignMarker);
      expect(assistantMsg?.content).not.toContain(recordedB.decisionId!);

      const journalAAfter = await listDecisionJournal(projectA.pilotId, projectA.projectId);
      const journalBAfter = await listDecisionJournal(projectB.pilotId, projectB.projectId);
      expect(journalAAfter.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);
      expect(journalAAfter.map((d) => d.id).sort()).toEqual(journalABefore.map((d) => d.id).sort());
      expect(journalBAfter.map((d) => d.id).sort()).toEqual(journalBBefore.map((d) => d.id).sort());
      expect(journalBAfter.find((d) => d.id === recordedB.decisionId)?.statement).toContain(
        foreignMarker,
      );

      const view = await getPilotageProjection(projectA.pilotId, projectA.projectId);
      expect(view.cycle).toBeNull();
      expect(view.method.presence).toBe("ABSENT");

      const reloaded = await listMessages(projectA.pilotId, projectA.preparationId);
      expect(reloaded.some((m) => m.id === result.userMessageId)).toBe(true);
      expect(reloaded.some((m) => m.id === result.assistantMessageId)).toBe(true);

      const replay = await postUserMessageAndNora(
        projectA.pilotId,
        projectA.preparationId,
        userText,
        { clientTurnKey: turnKey },
      );
      expect(replay.idempotentReplay).toBe(true);
      expect(replay.humanDecisionCreated).toBe(false);
      expect(
        (await listDecisionJournal(projectA.pilotId, projectA.projectId)).filter(
          (d) => d.state === "APPLICABLE",
        ),
      ).toHaveLength(1);
      const users = (await listMessages(projectA.pilotId, projectA.preparationId)).filter(
        (m) => m.role === "user" && m.content === userText,
      );
      expect(users).toHaveLength(1);
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

```

### Docs as-built
```markdown
### B13 R2–R3 — derniers ajustements Critical Review (2026-11-06, local, non poussé)

| Correctif | As-built |
| --- | --- |
| **R2** | `normalizeText` unifie apostrophes typographiques. `modalityPolarity` reconnaît `n'est jamais` / `n'est aucunement` / `ne doit|peut pas (être)` en plus de `plus`/`pas`. Ces négations ne produisent plus `COMPATIBLE_RESTATEMENT` par synonymes ou overlap. |
| **R3** | Isolation discriminante : décision B (`github-connexion` + marqueur unique) **persistée et APPLICABLE avant** `postUserMessageAndNora` sur A. Contexte B contient le marqueur ; contexte/réponse A ne le contiennent pas. USER text pertinent pour le même objectRef. Journal B inchangé ; replay idempotent. |

**Limites documentées :** famille de négations FR bornée (pas un NLP universel) ; Niveau B libre-texte NOT PROVEN ; Nora LIVE / Figma NOT EXECUTED / NOT VERIFIED.

```
```markdown
## delivery_id: DELIV-2026-11-06-ML3-B13-R2-R3-FINAL-ADJUST

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — B13 R2/R3 final targeted adjustments |
| Type | INC corrective continuation (same ML3) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only**) |
| Base | `origin/main@7f1f41c` dirty candidate preserved |
| Prior handoff | `sfia/review-handoff@541c0894` blob `ada98550` |
| R2 | Polarity: jamais / aucunement / typographic apostrophe / ne doit pas être — never false COMPATIBLE |
| R3 | Isolation proof: foreign APPLICABLE decision on same objectRef created BEFORE Nora gen ; marker absent from A context/reply |
| Schema | unchanged `007` |
| Product version | `NO RELEASE` |
| Lane | DEV only ; LIVE Nora NOT EXECUTED |
| Verdict candidate | `ML3 B13 R2-R3 TARGETED ADJUSTMENTS COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |

```

## 09. Négations — entrées/assertions
```typescript
it("R2: negation of same modality is never COMPATIBLE_RESTATEMENT", () => {
    const base = { ...prior, statement: "GitHub est obligatoire." };
    const cases: Array<{ user: string; statement?: string }> = [
      { user: "GitHub n'est plus obligatoire." },
      { user: "GitHub n'est pas obligatoire." },
      { user: "GitHub n'est jamais obligatoire." },
      { user: "GitHub n'est aucunement obligatoire." },
      // Typographic apostrophe (U+2019)
      { user: "GitHub n\u2019est jamais obligatoire." },
      { user: "GitHub n\u2019est aucunement obligatoire." },
      { user: "GitHub ne doit pas être obligatoire." },
      {
        user: "GitHub n'est pas interdit.",
        statement: "GitHub est interdit pour ce projet.",
      },
      {
        user: "GitHub n'est pas requis.",
        statement: "GitHub est requis pour ce projet.",
      },
    ];
    for (const c of cases) {
      const row = { ...base, statement: c.statement ?? base.statement };
      const signals = findMessageDecisionConfrontations(c.user, [row]);
      expect(signals.length, c.user).toBeGreaterThanOrEqual(1);
      expect(signals[0].framing, c.user).not.toBe("COMPATIBLE_RESTATEMENT");
      expect(["POSSIBLE_CHANGE", "AMBIGUOUS"], c.user).toContain(signals[0].framing);
      expect(signals[0].authorityClaim).toBe("NONE");
    }
  });

it("R2: positive restatements remain compatible when polarity agrees", () => {
    const base = { ...prior, statement: "GitHub est obligatoire." };
    for (const user of ["GitHub reste obligatoire.", "GitHub reste requis."]) {
      const signals = findMessageDecisionConfrontations(user, [base]);
      expect(signals.length).toBeGreaterThanOrEqual(1);
      expect(signals[0].framing).toBe("COMPATIBLE_RESTATEMENT");
      expect(signals[0].authorityClaim).toBe("NONE");
    }
  });

it("R2: scope shift stays AMBIGUOUS (no automatic global equivalence)", () => {
    const signals = findMessageDecisionConfrontations(
      "GitHub obligatoire seulement pour UX",
      [
        {
          ...prior,
          statement: "GitHub obligatoire pour tout le projet.",
        },
      ],
    );
    expect(signals.length).toBeGreaterThanOrEqual(1);
    expect(signals[0].framing).toBe("AMBIGUOUS");
    expect(signals[0].authorityClaim).toBe("NONE");
  });
```

## 10. Isolation — chronologie
1. seed A + seed B
2. RECORD_DECISION A (github-connexion)
3. RECORD_DECISION B (same objectRef + MARKER_B13_R3_ISO_FOREIGN_*) — APPLICABLE
4. assert journals A/B ; utteranceTouchesObject(userText, github-connexion)=true
5. buildNoraPilotageContext(B) contains marker ; buildNoraPilotageContext(A) does not
6. postUserMessageAndNora(A) ; reply without marker/decisionId B
7. journal B unchanged ; idempotent replay

## 11. Preuve que B serait pertinent sans filtrage
- Same objectRef `github-connexion` ; USER text touches object
- ctx B includes marker + decisionId B
- Without projectId filter, B would enter the same applicable bucket for this message

## 12. Chemin postUserMessageAndNora
- Real conversation service call (not context helper alone)
- DEV fixture ; humanDecisionCreated=false ; USER+assistant persisted

## 13. Non-régression
| Suite | Résultat |
| --- | --- |
| unit | 35 PASS |
| PG ML3 | 24 PASS |
| mig 001→007 | 3 PASS |
| Playwright | 3 PASS |
| tsc / eslint exact / next build | EXIT 0 |

## 14. Logs bruts

### ml3-unit.txt
```
CMD: npx vitest run tests/unit/ml3-b13-divergence.test.ts tests/unit/ml3-authority.test.ts tests/unit/ml3-cki-intent.test.ts tests/unit/nora-adapter-corrective.test.ts
CWD: /Users/morris/Projects/sfia-workspace/projects/sfia-studio-next/web
DATE_UTC: 2026-11-06T14:49:27Z
◇ injected env (9) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace/projects/sfia-studio-next/web

SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.479Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_c82c7245-9cf5-468d-bb2a-b0075451efe6","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.1-sol","tools":"search_project_resources,read_project_document_revision","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.481Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.provider_attempt","component":"d3.nora_adapter","generation_id":"gen_c82c7245-9cf5-468d-bb2a-b0075451efe6","attempt_id":"att_6060453b-c1a8-47dd-8cd2-3dd95089d1b4","outcome":"PARTIAL","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"kind":"stream","maxTurns":6,"model_requested":"gpt-6.1-sol","max_turns_note":"maxTurns≠maxProviderCalls"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.485Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_bd32f2c0-6bbb-40da-834a-ac12298322ad","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.1-sol","tools":"search_project_resources,read_project_document_revision","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.486Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.provider_attempt","component":"d3.nora_adapter","generation_id":"gen_bd32f2c0-6bbb-40da-834a-ac12298322ad","attempt_id":"att_449a6b87-a5c8-4f00-a02d-7c67bb3d45d6","outcome":"PARTIAL","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"kind":"stream","maxTurns":6,"model_requested":"gpt-6.1-sol","max_turns_note":"maxTurns≠maxProviderCalls"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.489Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_83c53f76-f925-4041-945c-f814f1597e5a","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.1-sol","tools":"search_project_resources,read_project_document_revision","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.489Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.provider_attempt","component":"d3.nora_adapter","generation_id":"gen_83c53f76-f925-4041-945c-f814f1597e5a","attempt_id":"att_db79ac65-6997-47b7-8c18-aaf25f42ab65","outcome":"PARTIAL","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"kind":"stream","maxTurns":6,"model_requested":"gpt-6.1-sol","max_turns_note":"maxTurns≠maxProviderCalls"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.492Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_f60b7035-8f38-42cf-bf0d-c5f2962127f6","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.1-sol","tools":"search_project_resources,read_project_document_revision","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.492Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.provider_attempt","component":"d3.nora_adapter","generation_id":"gen_f60b7035-8f38-42cf-bf0d-c5f2962127f6","attempt_id":"att_008978c2-c73c-4177-b998-5b1e4436a4c8","outcome":"PARTIAL","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"kind":"stream","maxTurns":6,"model_requested":"gpt-6.1-sol","max_turns_note":"maxTurns≠maxProviderCalls"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.493Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_3a3a5544-41dd-4776-a6fe-c68358b30816","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.493Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","generation_id":"gen_3a3a5544-41dd-4776-a6fe-c68358b30816","attempt_id":"att_aba1ba88-2df4-4459-ba80-d808ffbcd227","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.493Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_3782c0ed-2859-49f8-947d-c7723df61b16","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.494Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","generation_id":"gen_3782c0ed-2859-49f8-947d-c7723df61b16","attempt_id":"att_dd45abfd-5468-443c-8aad-b066679d97ef","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.494Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_d7f55664-f9d9-4b0c-b56e-bbf673251804","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.494Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","generation_id":"gen_d7f55664-f9d9-4b0c-b56e-bbf673251804","attempt_id":"att_7401c6d6-9c7d-4fa9-bfc4-fe6c3c9ddda7","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
 ✓ tests/unit/nora-adapter-corrective.test.ts (6 tests) 20ms
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.735Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_d8a3936c-fa29-4f98-9fbb-6f8e3adfbece","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:28.736Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","generation_id":"gen_d8a3936c-fa29-4f98-9fbb-6f8e3adfbece","attempt_id":"att_62a4a4ef-374f-4001-94c1-47a46e0d8614","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
 ✓ tests/unit/ml3-b13-divergence.test.ts (16 tests) 5ms
 ✓ tests/unit/ml3-cki-intent.test.ts (8 tests) 6ms
 ✓ tests/unit/ml3-authority.test.ts (5 tests) 1ms

 Test Files  4 passed (4)
      Tests  35 passed (35)
   Start at  15:49:28
   Duration  1.08s (transform 94ms, setup 0ms, collect 616ms, tests 33ms, environment 0ms, prepare 82ms)

EXIT:0
```

### ml3-pg.txt
```
CMD: npx vitest run tests/integration/ml3-pilotage.pg.test.ts
CWD: /Users/morris/Projects/sfia-workspace/projects/sfia-studio-next/web
DATE_UTC: 2026-11-06T14:49:33Z
◇ injected env (9) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace/projects/sfia-studio-next/web

stderr | tests/integration/ml3-pilotage.pg.test.ts
◇ injected env (0) from .env.local

SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:34.850Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_410cd61e-a94b-4c37-bee2-9e4523f66405","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:34.851Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","generation_id":"gen_410cd61e-a94b-4c37-bee2-9e4523f66405","attempt_id":"att_a61faa1f-2654-45fa-8af6-e72bea18cc77","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:34.926Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.accepted","component":"d3.conversation","request_id":"req_53758d48-3042-43c5-b4f0-e0896b835f7c","operation_id":"op_4a3dc228-b79a-49dc-be67-81958715599a","outcome":"PARTIAL","meta":{"client_turn_key_fp":"b4d3c50b48d5"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:34.937Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_4a3dc228-b79a-49dc-be67-81958715599a","generation_id":"gen_0ebd712b-2485-4304-9046-584f1850f410","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:34.938Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","operation_id":"op_4a3dc228-b79a-49dc-be67-81958715599a","generation_id":"gen_0ebd712b-2485-4304-9046-584f1850f410","attempt_id":"att_5bc555bb-7d94-47fe-949c-2b3120ca7199","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:34.944Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.completed","component":"d3.conversation","request_id":"req_53758d48-3042-43c5-b4f0-e0896b835f7c","operation_id":"op_4a3dc228-b79a-49dc-be67-81958715599a","generation_id":"gen_0ebd712b-2485-4304-9046-584f1850f410","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"attempts":1,"tool_calls":0,"turn_status":"COMPLETE","cas_applied":true}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T14:49:34.961Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.replay","component":"d3.conversation","request_id":"req_02d70043-3755-4cf3-9669-6fb12b2ce835","operation_id":"op_4a3dc228-b79a-49dc-be67-81958715599a","outcome":"SUCCESS","meta":{"status":"COMPLETE","reconciled":false}}
 ✓ tests/integration/ml3-pilotage.pg.test.ts (24 tests) 960ms

 Test Files  1 passed (1)
      Tests  24 passed (24)
   Start at  15:49:33
   Duration  1.44s (transform 118ms, setup 0ms, collect 335ms, tests 960ms, environment 0ms, prepare 29ms)

EXIT:0
```

### ml3-tsc.txt
```
CMD: npx tsc --noEmit
CWD: /Users/morris/Projects/sfia-workspace/projects/sfia-studio-next/web
DATE_UTC: 2026-11-06T14:49:45Z
EXIT:0
```

### ml3-lint.txt
```
CMD: npx eslint src/domains/decisions/divergence-assist.ts src/domains/pilotage/nora-context.ts src/domains/conversation/service.ts src/domains/conversation/nora-adapter.ts src/components/PilotagePanel.tsx tests/unit/ml3-b13-divergence.test.ts tests/integration/ml3-pilotage.pg.test.ts tests/e2e/ml3-pilotage.spec.ts
CWD: /Users/morris/Projects/sfia-workspace/projects/sfia-studio-next/web
DATE_UTC: 2026-11-06T14:49:46Z
EXIT:0
```

### ml3-mig.txt
```
CMD: npx vitest run tests/integration/migrations-fresh.pg.test.ts
CWD: /Users/morris/Projects/sfia-workspace/projects/sfia-studio-next/web
DATE_UTC: 2026-11-06T14:49:42Z
◇ injected env (9) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace/projects/sfia-studio-next/web

 ✓ tests/integration/migrations-fresh.pg.test.ts (3 tests) 2047ms
   ✓ migrations 001→007 on fresh isolated Postgres > applies 001→007; auth_mode + knowledge + turn owner_token + pilotage tables exist  344ms

 Test Files  1 passed (1)
      Tests  3 passed (3)
   Start at  15:49:42
   Duration  2.54s (transform 13ms, setup 0ms, collect 408ms, tests 2.05s, environment 0ms, prepare 21ms)

EXIT:0
```

### ml3-e2e.txt
```
CMD: npx playwright test tests/e2e/ml3-pilotage.spec.ts
CWD: /Users/morris/Projects/sfia-workspace/projects/sfia-studio-next/web
DATE_UTC: 2026-11-06T14:49:48Z
[WebServer] ◇ injected env (9) from .env.local
[WebServer] e2e-preflight OK: operator=sfia_next_dev → e2e=sfia_next_e2e container=sfia-next-dev-pg port=5433
[WebServer] NOTICE:  relation "pilots" already exists, skipping
[WebServer] NOTICE:  relation "pilots_github_user_id_uidx" already exists, skipping
[WebServer] NOTICE:  relation "users" already exists, skipping
[WebServer] NOTICE:  relation "sessions" already exists, skipping
[WebServer] NOTICE:  relation "sessions_user_id_idx" already exists, skipping
[WebServer] NOTICE:  relation "accounts" already exists, skipping
[WebServer] NOTICE:  relation "verifications" already exists, skipping
[WebServer] NOTICE:  relation "preparations" already exists, skipping
[WebServer] NOTICE:  relation "preparations_owner_idx" already exists, skipping
[WebServer] NOTICE:  relation "projects" already exists, skipping
[WebServer] NOTICE:  relation "projects_owner_idx" already exists, skipping
[WebServer] NOTICE:  relation "preparation_project_links" already exists, skipping
[WebServer] NOTICE:  relation "create_project_commands" already exists, skipping
[WebServer] NOTICE:  relation "create_project_commands_pilot_key_uidx" already exists, skipping
[WebServer] NOTICE:  relation "conversations" already exists, skipping
[WebServer] NOTICE:  relation "conversations_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "messages" already exists, skipping
[WebServer] NOTICE:  relation "messages_conversation_idx" already exists, skipping
[WebServer] NOTICE:  relation "documents" already exists, skipping
[WebServer] NOTICE:  relation "documents_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions_doc_rev_uidx" already exists, skipping
[WebServer] NOTICE:  column "auth_mode" of relation "sessions" already exists, skipping
[WebServer] NOTICE:  column "base_revision_id" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  column "correlation_key" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  column "provenance_json" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  column "scope" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions_corr_uidx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subjects" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subjects_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subjects_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_acquis" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_acquis_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_acquis_subject_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_open_points" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_open_points_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_open_points_status_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subject_events" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subject_events_subject_idx" already exists, skipping
[WebServer] NOTICE:  column "creation_correlation_key" of relation "documents" already exists, skipping
[WebServer] NOTICE:  relation "documents_prep_owner_corr_uidx" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions_base_idx" already exists, skipping
[WebServer] NOTICE:  relation "conversation_turn_commands" already exists, skipping
[WebServer] NOTICE:  relation "conversation_turn_commands_conv_key_uidx" already exists, skipping
[WebServer] NOTICE:  relation "conversation_turn_commands_operation_uidx" already exists, skipping
[WebServer] NOTICE:  relation "conversation_turn_commands_conv_status_idx" already exists, skipping
[WebServer] NOTICE:  relation "messages_conversation_ordinal_uidx" already exists, skipping
[WebServer] NOTICE:  column "owner_token" of relation "conversation_turn_commands" already exists, skipping
[WebServer] NOTICE:  relation "conversation_turn_commands_owner_token_idx" already exists, skipping
[WebServer] NOTICE:  relation "human_decisions" already exists, skipping
[WebServer] NOTICE:  relation "human_decisions_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "trajectory_revisions" already exists, skipping
[WebServer] NOTICE:  relation "trajectory_revisions_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "project_pilotage_state" already exists, skipping
[WebServer] NOTICE:  relation "project_cycles" already exists, skipping
[WebServer] NOTICE:  relation "project_cycles_one_active_uidx" already exists, skipping
[WebServer] NOTICE:  relation "project_cycles_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "method_applications" already exists, skipping
[WebServer] NOTICE:  relation "method_applications_current_uidx" already exists, skipping
[WebServer] NOTICE:  relation "method_applications_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "governance_restrictions" already exists, skipping
[WebServer] NOTICE:  relation "governance_restrictions_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_client_key_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_human_intent_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects_command_ordinal_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects_command_idx" already exists, skipping

Running 3 tests using 1 worker

(node:38330) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓  1 tests/e2e/ml3-pilotage.spec.ts:8:5 › ML3 pilotage: projet sans cycle → ouverture → cycle ACTIVE visible (12.0s)
  ✓  2 tests/e2e/ml3-pilotage.spec.ts:63:5 › ML3 B13 C02: motif RESTRICTION vs conflit technique HUMAN_INTENT (5.4s)
  ✓  3 tests/e2e/ml3-pilotage.spec.ts:140:5 › ML3 B13 R1: motif périmé effacé après UNKNOWN puis APPLIED (4.5s)

  3 passed (25.4s)
EXIT:0
```

### ml3-build.txt
```
CMD: npx next build
CWD: /Users/morris/Projects/sfia-workspace/projects/sfia-studio-next/web
DATE_UTC: 2026-11-06T14:50:13Z
   ▲ Next.js 15.5.29
   - Environments: .env.local

   Creating an optimized production build ...
 ✓ Compiled successfully in 6.5s
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/10) ...
   Generating static pages (2/10)
   Generating static pages (4/10)
   Generating static pages (7/10)
 ✓ Generating static pages (10/10)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                                                   Size  First Load JS
┌ ○ /                                                                        166 B         103 kB
├ ○ /_not-found                                                              994 B         104 kB
├ ƒ /api/auth/[...all]                                                       166 B         103 kB
├ ƒ /api/dev/login                                                           166 B         103 kB
├ ƒ /api/portfolio                                                           166 B         103 kB
├ ƒ /api/preparations                                                        166 B         103 kB
├ ƒ /api/preparations/[preparationId]                                        166 B         103 kB
├ ƒ /api/preparations/[preparationId]/create-project                         166 B         103 kB
├ ƒ /api/preparations/[preparationId]/documents                              166 B         103 kB
├ ƒ /api/preparations/[preparationId]/documents/[documentId]                 166 B         103 kB
├ ƒ /api/preparations/[preparationId]/knowledge                              166 B         103 kB
├ ƒ /api/preparations/[preparationId]/messages                               166 B         103 kB
├ ƒ /api/preparations/[preparationId]/reconcile                              166 B         103 kB
├ ƒ /api/projects/[projectId]                                                166 B         103 kB
├ ƒ /api/projects/[projectId]/decisions                                      166 B         103 kB
├ ƒ /api/projects/[projectId]/pilotage                                       166 B         103 kB
├ ƒ /api/projects/[projectId]/pilotage/commands                              166 B         103 kB
├ ƒ /api/projects/[projectId]/pilotage/commands/[commandId]                  166 B         103 kB
├ ƒ /api/projects/[projectId]/pilotage/commands/by-key/[clientCommandKey]    166 B         103 kB
├ ○ /login                                                                 1.22 kB         104 kB
├ ○ /portfolio                                                             1.08 kB         104 kB
├ ƒ /preparations/[preparationId]                                          6.47 kB         109 kB
└ ƒ /projects/[projectId]                                                  8.07 kB         111 kB
+ First Load JS shared by all                                               103 kB
  ├ chunks/493-d3099f0aa7768a9d.js                                         46.6 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js                                    54.2 kB
  └ other shared chunks (total)                                            1.92 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

EXIT:0
```

## 15. ENV-01 / versioning
```
DATABASE_URL_SET true
HOST 127.0.0.1
PORT 5433
DB sfia_next_dev
STUDIO_LANE DEV
```
DEV 127.0.0.1:5433/sfia_next_dev ; NO RELEASE ; LIVE/RECETTE/STABLE not authorized.

## 16. Fake/Real
| Capacité | Qualif |
| --- | --- |
| R2 unit | DETERMINISTIC PROVEN |
| R3 PG isolation + conversation | PG INTEGRATION PROVEN (FAKE Nora) |
| Nora LIVE / Niveau B libre-texte / RECETTE | NOT EXECUTED / NOT PROVEN / NOT AUTHORIZED |

## 17. Réserves et exit
- Bounded FR negation family (not universal NLP)
- Niveau B free-text NOT PROVEN
- Gate: ChatGPT Critical Review ; then global ML3 / RECETTE contract (separate GO)

## 18. Git final
Delivery branch dirty intact @ 7f1f41c ; no project push.

## 19. Handoff distant
- Branch sfia/review-handoff ; path sfia-review-handoff/latest-chatgpt-review.md
- Message: sfia: publish ML3 B13 R2-R3 final adjustments review

## 20. Verdict et instruction ChatGPT
**ML3 B13 R2-R3 TARGETED ADJUSTMENTS COMPLETE — READY FOR CHATGPT CRITICAL REVIEW**

Instruction: re-read remote handoff ; confront R2 code (jamais/aucunement), R3 isolation chronology (B before gen), logs, Git, gates. Cursor report does not replace canonical handoff.

FIN — SFIA v2.6 / ML3 B13 R2-R3 FINAL ADJUSTMENTS.
