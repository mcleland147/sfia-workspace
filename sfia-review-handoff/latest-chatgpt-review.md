# SFIA Studio Next — Review Pack E1 — Continuité cognitive et fonctionnelle

| Champ | Valeur |
| --- | --- |
| Date/heure UTC | 2026-11-27T16:53Z |
| Mandat | E1 only — B.1–B.8 + MP-03/10/12/13 + interfaces MP-08/09/11/14 |
| Profil | Critical / Cycle 8 / EVOL |
| Verdict proposé | **READY WITH RESERVES** — DETERMINISTIC PROVEN (E1) ; autonomie LIVE NON PROUVÉE ; gate Morris avant E2 |
| Programme | R5 IN PROGRESS / ML5 OPEN / Livraison 1 NOT ACCEPTED / 17 MP OPEN RECETTE / T09 NOT SENT / NO RELEASE / NOT ADOPTED |
| Handoff attendu | `review(next): complete project cognitive continuity capability` |

## 1. Mandat E1

Périmètre exclusif Ensemble 1 du macro-lot correctif ML5. OUT : E2–E5, LIVE, RECETTE mutation, commit projet, UX panneau, audio, FinOps refonte.
Source fonctionnelle : `continuite-cognitive-et-fonctionnelle-du-projet.md` blob `1a5f822f…` (non modifié).
Suivi indépendant ChatGPT : `suivi-macro-lot-correctif-continuite-fiabilite-ml5.md` blob `4fb8b75a…` (non modifié par Cursor).

## 2. Git Truth
```
DATE=2026-11-27T16:52Z
BRANCH=sfia/next-ml5-integrated-delivery-20261123
HEAD=58ca9486003805f74e69a0842f2c0792a7184437
MAIN=997897fd7cf914771e7d08e8030dc7123fab7d25
MERGE_BASE=997897fd7cf914771e7d08e8030dc7123fab7d25
HANDOFF_TIP=14177ee1c672b9d4680487777bc296f706ab788f
DOCS_TIP=6a211aea882fad885ab794afb119c346cc66710b
RECETTE_HTTP=200
DEV_HTTP=500
```


- Worktree dirty attendu (axes A/C/D préservés).
- Empreinte entrée : `.tmp-sfia-review/e1-entry-status.txt` / `e1-entry-diffstat.txt`.
- Aucun staged inattendu au démarrage E1.
- STOP non déclenché (pas de collision concurrente, RECETTE préservée).

## 3. ENV-01

| Contrôle | Résultat |
| --- | --- |
| STUDIO_LANE | DEV |
| App DEV | :3100 — HTTP **500** sous `next dev` turbopack (tooling ; `@cursor/sdk` map parse historique) |
| PG DEV | :5433 ; tests vitest → `sfia_next_e2e` |
| RECETTE | :3200 HTTP 200 ; PG :5434 listen ; **aucune mutation** |
| WEB/Admin | OFF |
| LIVE OpenAI/embeddings/Realtime | aucune émission |
| Verdict | **ENV ROUTING COMPLETE** (lane DEV, RECETTE intacte). Réserve tooling navigateur DEV. |

## 4. Versioning

`product-version.ts` : NO RELEASE / STABLE NOT AVAILABLE.
Delivery History complété (même delivery_id DELIV-2026-11-27-ML5-INTEGRATED-CONTINUITY-RELIABILITY-DEV) avec périmètre E1 + 58 PASS suite.
Aucune nouvelle livraison produit ; aucune promotion.

## 5. Git Review Index (sources lues / utilisées)

| Source | Ref | Rôle | Statut |
| --- | --- | --- | --- |
| Continuity contract | blob `1a5f822f` | §4–12 oracles | LU — non modifié |
| Suivi macro-lot | tip docs `6a211aea` / blob `4fb8b75a` | E1–E5 / MP / oracles | LU — non modifié |
| Handoff reprise | `14177ee1` / blob `0235ea6d` | B.1–B.8 PARTIAL/RACCORDÉ | LU — point d'entrée |
| SEF / ENV-01 / versioning | main `997897fd` | gates | LU |
| Code D3/D4/D5/D6 | worktree dirty | mécanismes | EXAMINÉ + corrigé E1 |

## 6. Cartographie initiale
# E1 — Cartographie initiale (Étape 0) — 2026-11-27

## Git / ENV (préalable)

| Contrôle | Résultat |
| --- | --- |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486…` |
| Worktree | dirty attendu (axes A/C/D préservés) ; staged inattendu : aucun |
| Docs tip | `6a211aea…` / suivi blob `4fb8b75a…` |
| Handoff tip entrée | `14177ee1…` / blob `0235ea6d…` |
| DEV PG | `:5433` / rôle `sfia_next_dev` ; tests → `sfia_next_e2e` |
| RECETTE | `:3200` / `:5434` préservée (pas de mutation) |
| STUDIO_LANE | DEV |
| Versioning | `NO RELEASE` / STABLE NOT AVAILABLE (`product-version.ts`) |
| DEV HTTP :3100 | **500** au démarrage E1 (next dev turbopack) — tooling/runtime ; preuve navigateur à rejouer via qualify:start si besoin |

Verdict préalable : **ENV ROUTING COMPLETE** (lane DEV, RECETTE intacte). DEV app 500 = réserve tooling navigateur, pas contamination RECETTE.

## Empreinte d'entrée

- `.tmp-sfia-review/e1-entry-status.txt`
- `.tmp-sfia-review/e1-entry-diffstat.txt`

## Chaîne propriétaire (exigence → mécanisme)

```
message USER/Nora
→ semantic qualification (QUALIFIED + REQUEST_EFFECT)
→ extractKnowledgeProposals / pilotage bindings
→ admission Studio (ownership fence)
→ propriétaire D4/D5/D6
→ persistance PG
→ projection (project-context / Journal / Trajectoire / Travail)
→ réutilisation (hints + D4 read tools + segment-context-efficiency)
```

| Exigence | Capacité propriétaire | Raccordement Nora | Persistance | Projection | Preuve entrée |
| --- | --- | --- | --- | --- | --- |
| B.1 Capitalisation | `maybeCapitalizeFromExchange` + `extractKnowledgeProposals` | `d4.record_knowledge` REQUEST_EFFECT ; service.ts après reply | D4 PG | Journal | Partiel — zéro proposition = no-op ; capitalisation résultats Nora via assistantMessageId + proposals |
| B.2 Arborescence | `ensureSubject`, `reparentSubject`, `renameSubject`, `merge/split` | parentSubjectId ; **même tour** via `subject-proposal-batch` | `knowledge_subjects.parent_subject_id` | Journal arbre | Entrée : enfant d'un parent précréé seulement |
| B.3 Synthèses/acquis | `appendSubjectSummaryRevision`, `capitalizeAcquis`, supersede | proposals ACQUIS/SUBJECT | révisions + acquis CURRENT | Journal | Structures EXISTANTES — couverture à exercer |
| B.4 Points ouverts | `openPoint`, `resolveOpenPointFactually` | OPEN_POINT + resolvesOpenPointId | `knowledge_open_points` | activity.openPointsCount | PG résolution + retrait OPEN acquis |
| B.5 Décisions | D6 `RECORD_DECISION` / conversation-authority | REQUEST_EFFECT D6 | `human_decisions` | applicableDecisions | À tort « HORS P2 » — à démontrer E1 |
| B.6 Trajectoire | D5 propose/retain/open cycle | bindings D5 | `project_cycles` / forecast | PilotagePanel + labels | Labels acquis ≠ trajectoire vivante |
| B.7 Réutilisation | D4 read tools, hints, segment-context-efficiency | tools + PREFERRED | lecture | contexte Nora | Trim ≠ reuse ; embedding residual → E2 si non bloquant |
| B.8 Projections | `getOwnedProjectContext` + activity projection | N/A (Studio) | PG | 4 surfaces | Doc identité OK ; décisions/sujets à prouver PG→DOM |

## Écarts prioritaires (sévérité)

1. **B.2 même tour** — parentSubjectId exigeait un id préexistant → **en correction** (`subject-proposal-batch` + precreate).
2. **B.2 réorg Nora** — `reparentSubject` existait sans raccord capitalisation → **en correction** (SUBJECT + subjectId + parentSubjectId).
3. **B.5** — mobilisation D6 non prouvée dans continuité.
4. **B.6** — évolution trajectoire / finalité contextualisée / états envisagé-retenu.
5. **B.7** — chaîne reuse déterministe bout en bout.
6. **B.8** — compteur décisions (défaut MaintiPlan) + cohérence 4 surfaces.
7. **B.1** — capitalisation contribution Nora vs USER ; sélectivité ; reprise.
8. **B.3/B.4** — titres courts points, consolidation acquis, provenance messages.
9. **B.2 ops** — merge/split/rename API UI ; Nora via qualification (rename/reparent) ; merge/split non exposés au conducteur → documenter.
10. **Navigateur DEV** — :3100 500 sous next dev ; qualify:start alternatif.

## OUT E1 (rappel)

E2 allocation/FinOps/hybrid residual ; E3 UX panneau ; E4 audio ; E5 exit ; LIVE ; commit projet.

## 7. Écarts et causes (résumé)

1. parentSubjectId exigeait un id préexistant → même tour impossible → **corrigé** (batch order + resolve title/intent).
2. reparent existait sans raccord capitalisation/API → **corrigé**.
3. B.5 à tort « HORS P2 » → **exercé** via D6 conversational authority.
4. PROPOSE_TRAJECTORY échouait si body.objective ≠ durable → **corrigé** (pas d'echo body).
5. Compteur décisions : supersede par lignes non-APPLICABLE → **corrigé**.
6. B.7 trim ≠ reuse → **prouvé** PREFERRED + omit marker + tools path.
7. shortTitle points → **dérivé éditorial** pour E3.

## 8. Blast radius

Fichiers E1 touchés : knowledge service/batch/journal ; conversation-authority ; semantic-qualification ; nora-adapter ; project-context ; project-activity-projection ; knowledge API reparent ; tests E1 ; delivery-history ; ml5-registre ; as-built E1.
Hors scope préservé : audio/composer, FinOps, allocation, RECETTE, SEF, continuity contract, suivi ChatGPT.

## 9. Contrats techniques retenus
# E1 — Continuité cognitive as-built (DEV, 2026-11-27)

Statut : DOCUMENTED as-built — NO RELEASE. Ne remplace pas le contrat fonctionnel
`conception-fonctionnelle/continuite-cognitive-et-fonctionnelle-du-projet.md`.

## Responsabilités

| Domaine | Rôle |
| --- | --- |
| D3 | Qualification, extraction `d4.record_knowledge`, contexte, outils lecture |
| D4 | Sujets, hiérarchie, synthèses, acquis, points ouverts, provenance |
| D5 | Trajectoire (propose/retain), cycles, finalité |
| D6 | Décisions humaines (RECORD/REVISE/REVOKE) — jamais dérivées d'une reco Nora seule |
| Studio | Admission, fence, persistance PG, projections |

## Mécanismes E1

### B.1 Capitalisation

- Gate : `QUALIFIED` + `REQUEST_EFFECT` + `d4.record_knowledge` → `extractKnowledgeProposals`.
- Écriture : `maybeCapitalizeFromExchange` (zéro proposition = zéro mutation).
- Provenance : message USER + message assistant (Nora) constitutifs lorsque fournis.
- Epistemic `established` Nora → D4 refuse FACT sans source indépendante.

### B.2 Arborescence

- Module : `web/src/domains/knowledge/subject-proposal-batch.ts`
  - `orderSubjectCreatesByDependency` — parents avant enfants ; détection de cycle.
  - `resolveBatchParentRef` — `subj_*` | intent id | titre co-proposé | `lookup_title` DB.
- `precreateBatchSubjects` dans `knowledge/service.ts` crée le batch avant le reste.
- Reparent/rename : SUBJECT avec `subjectId` existant + `parentSubjectId` / `subjectTitle`.
- API Pilote : `POST .../knowledge` action `reparent` (en plus rename/merge/split).
- Nora : guidance adapter — parent+enfant même tour autorisé.

### B.4 / B.8

- `openPointShortTitle` (éditorial, pas de migration) exposé dans `getOwnedProjectContext`.
- Décisions applicables : `filterApplicableHumanDecisions` — supersede uniquement si
  successeur **APPLICABLE** (corrige compteur zéro MaintiPlan).

### B.5 / B.6

- `applyConversationalAuthority` : PROPOSE/RETAIN n'échouent plus le body objective/orientation
  (champs issus uniquement de la qualification durable).
- OPEN_CYCLE conserve l'objectif contextualisé via `persistableCycleObjective`.

### B.7

- Sélection : `selectRelevantKnowledgeContext` + preferred ids.
- Continuation : `resolveContinuationKnowledgeSnippets` + marqueur d'omit — l'info reste
  accessible via outils D4 (trim ≠ perte).

## Limites

- Autonomie sémantique LIVE : NON PROUVÉE (E1 = DET + injections).
- Hybrid embedding `derivedUsed=false` : réserve E2 si impact mesure.
- Merge/split : API UI, non mobilisés par le conducteur comme intents typés.
- UX panneau / multi-types : E3.
- Navigateur : `next dev` :3100 peut 500 (tooling) ; qualify:start alternatif.

## Preuves

Suite E1 focalisée (unit+PG) — voir Delivery History et Review Pack E1.

## 10. Matrice B.1–B.8

| Exigence | Source | Mécanisme | Écart initial | Modification | Raccordement | Persistance | Test | Résultat | Niveau | Réserve | Dep |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B.1 | §5 | extract+maybeCapitalize | Nora results / sélectivité | guidance+tests | service.ts post-reply | D4 | e1-b1 unit + integrated | PASS | RACCORDÉ DET | LIVE qual | — |
| B.2 | §6.1 | batch+ensure+reparent | même tour / reorg Nora | subject-proposal-batch | d4.record_knowledge | PG parent_id | continuity+integrated PG | PASS | RACCORDÉ DET | LIVE pertinence ; merge/split Nora | — |
| B.3 | §6.2 | summary/acquis/supersede | couverture | exercé integrated | capitalisation | PG | integrated | PASS | EXISTANT+EXERCÉ | consolidation LIVE | — |
| B.4 | §6.3 | open/resolve | cycle vie | shortTitle | proposals | PG | continuity+integrated | PASS | RACCORDÉ DET | UX E3 | E3 |
| B.5 | §7 | D6 authority | HORS P2 | tests+paths | REQUEST_EFFECT d6 | human_decisions | e1-b5-b6 | PASS | RACCORDÉ DET | LIVE naturel | — |
| B.6 | §8.1 | D5 propose/retain/open | labels≠vivant | no body objective | conversational | trajectory/cycles | e1-b5-b6 | PASS | RACCORDÉ DET | LIVE orientation | — |
| B.7 | §6.4 | select+omit+tools | trim≠reuse | preuves | PREFERRED | lecture | e1-b7-b8 | PASS | RACCORDÉ DET | embedding/T08 | E2 |
| B.8 | §8.2–8.3 | project-context | compteur décisions | filterApplicable | API→projection | PG | e1-b7-b8+integrated | PASS | RACCORDÉ DET | DOM navigateur | E3 |

## 11. Preuves de raccordement

Chaîne exercée (DET) :
qualification injectée → extractKnowledgeProposals / pilotage bindings → maybeCapitalizeFromExchange / applyConversationalAuthority → PG → getOwnedProjectContext / getPilotageProjection / listProjectKnowledge → sélection PREFERRED + omit.
Parent+enfant même tour : intent id + title ref — 6/6 continuity PG + integrated PASS.

## 12. Matrice MP-03/10/12/13

| MP | État E1 | Preuve | RECETTE |
| --- | --- | --- | --- |
| MP-03 Points ouverts | RÉCONCILIÉ DET | open/resolve/shortTitle/projections | OPEN |
| MP-10 Continuité | RÉCONCILIÉ DET (B.1–B.7) | suite E1 58 PASS | OPEN |
| MP-12 Trajectoire | RÉCONCILIÉ DET | propose/retain/open/figma-no-op | OPEN |
| MP-13 Compteurs | RÉCONCILIÉ DET | decisions/subjects/docs/points | OPEN |
Aucun MP clôturé en RECETTE.

## 13. Interfaces MP-08/09/11/14

| Interface | Livrable E1 |
| --- | --- |
| MP-08 | openPoints + shortTitle + id + subjectId dans project-context |
| MP-09 | préservé (multi-binding) ; non réouvert |
| MP-11 | capitalisation obs events existants ; effets D5/D6 via command status |
| MP-14 | PREFERRED hints + selectRelevantKnowledgeContext + omit marker |

## 14. Matrice 18 oracles

| # | Niveau E1 | Résultat | Test | Reliquat |
| --- | --- | --- | --- | --- |
| 1 Exploration→création | DET identité | PASS integrated | seed project | LIVE naturel |
| 2 Hiérarchie | DET même tour | PASS | continuity+integrated | LIVE |
| 3 Réorganisation | DET reparent | PASS integrated | merge/split Nora | LIVE |
| 4 Pilote+Nora | DET dual proposals | PASS | capitalisation mixed | LIVE |
| 5 Correction acquis | DET supersede path | EXISTANT+exercé | unit/historical | LIVE |
| 6 Résolution question | DET | PASS | resolve+projection | — |
| 7 Local vs durable | DET D6 | PASS e1-b5 | LIVE naturel | |
| 8 Combiné T05/T06 | préservé | non régressé | E2 deepen | LIVE |
| 9 Figma réorientation | DET no-op + propose | PASS | e1-b6 | LIVE |
| 10 Finalité cycle | DET objective | PASS OPEN_CYCLE | — | |
| 11 Compteurs | DET PG→ctx | PASS | B.8 | DOM browser |
| 12 Multitypes | interface données | partial | E3 | E3 |
| 13 Points panneau | shortTitle+ids | PASS données | E3 UX | E3 |
| 14 Navigation/interruption | données+reprise | PASS omit/resume unit | E3/E5 | |
| 15 Réutilisation longue | DET select | PASS B.7 | E2/LIVE mesure | |
| 16 V1→V2 analogue | doc identity count | PASS library | T09 RECETTE | |
| 17 Sans intérêt | zéro proposition | PASS | e1-b1+integrated | |
| 18 Isolation/échec | DET foreign parent + iso project | PASS | continuity+integrated | E5 |

## 15. Fichiers créés (contenu)

### `projects/sfia-studio-next/web/src/domains/knowledge/subject-proposal-batch.ts`
```typescript
/**
 * E1 B.2 — order and resolve parent refs for SUBJECT proposals in one capitalisation batch.
 * parentSubjectId may be a persisted subj_* id, a co-proposal intent id, or a parent subjectTitle.
 */

export type SubjectCreateProposal = {
  intentId: string;
  title: string;
  /** Raw parentSubjectId / parentRef from qualification — not necessarily a DB id. */
  parentRef?: string;
};

export function normalizeSubjectTitle(title: string): string {
  return title.trim().replace(/\s+/g, " ").toLowerCase();
}

function looksLikePersistedSubjectId(ref: string): boolean {
  return ref.startsWith("subj_");
}

export type ParentResolveInput = {
  self: SubjectCreateProposal;
  batch: SubjectCreateProposal[];
  /** intentId → created subj_* id within this capitalisation turn */
  createdByIntentId: ReadonlyMap<string, string>;
};

export type ParentResolveResult =
  | { kind: "root" }
  | { kind: "resolved"; parentSubjectId: string }
  | { kind: "pending_batch"; parentIntentId: string }
  /** Not in this batch — Studio looks up an existing ACTIVE subject by title. */
  | { kind: "lookup_title"; title: string }
  | { kind: "error"; reason: string };

/**
 * Resolve a parent reference without DB access when possible.
 * `pending_batch` means the parent is another proposal in the same batch (not yet created).
 */
export function resolveBatchParentRef(ref: string, input: ParentResolveInput): ParentResolveResult {
  const trimmed = ref.trim();
  if (!trimmed) return { kind: "root" };

  if (trimmed === input.self.intentId) {
    return { kind: "error", reason: "SUBJECT_SELF_PARENT" };
  }
  const selfNorm = normalizeSubjectTitle(input.self.title);
  if (normalizeSubjectTitle(trimmed) === selfNorm) {
    return { kind: "error", reason: "SUBJECT_SELF_PARENT" };
  }

  if (looksLikePersistedSubjectId(trimmed)) {
    return { kind: "resolved", parentSubjectId: trimmed };
  }

  const byIntent = input.batch.find((p) => p.intentId === trimmed);
  if (byIntent) {
    const created = input.createdByIntentId.get(trimmed);
    if (created) return { kind: "resolved", parentSubjectId: created };
    return { kind: "pending_batch", parentIntentId: trimmed };
  }

  const refNorm = normalizeSubjectTitle(trimmed);
  const titleMatches = input.batch.filter(
    (p) => p.intentId !== input.self.intentId && normalizeSubjectTitle(p.title) === refNorm,
  );
  if (titleMatches.length === 1) {
    const parent = titleMatches[0]!;
    const created = input.createdByIntentId.get(parent.intentId);
    if (created) return { kind: "resolved", parentSubjectId: created };
    return { kind: "pending_batch", parentIntentId: parent.intentId };
  }
  if (titleMatches.length > 1) {
    return { kind: "error", reason: "AMBIGUOUS_PARENT_REF" };
  }

  // Title or opaque ref not found in batch — allow DB title lookup (same prep).
  return { kind: "lookup_title", title: trimmed };
}

export type OrderSubjectsResult =
  | { ordered: SubjectCreateProposal[] }
  | { error: string; reason: string };

/**
 * Topological order: parents before children. Detects cycles within the batch.
 */
export function orderSubjectCreatesByDependency(
  creates: SubjectCreateProposal[],
): OrderSubjectsResult {
  const byId = new Map(creates.map((c) => [c.intentId, c]));
  const inBatchParent = new Map<string, string>();

  for (const c of creates) {
    if (!c.parentRef?.trim()) continue;
    const trimmed = c.parentRef.trim();
    if (looksLikePersistedSubjectId(trimmed)) continue;
    if (trimmed === c.intentId) {
      return { error: c.intentId, reason: "SUBJECT_SELF_PARENT" };
    }
    if (byId.has(trimmed)) {
      inBatchParent.set(c.intentId, trimmed);
      continue;
    }
    const refNorm = normalizeSubjectTitle(trimmed);
    if (refNorm === normalizeSubjectTitle(c.title)) {
      return { error: c.intentId, reason: "SUBJECT_SELF_PARENT" };
    }
    const titleMatches = creates.filter(
      (p) => p.intentId !== c.intentId && normalizeSubjectTitle(p.title) === refNorm,
    );
    if (titleMatches.length > 1) {
      return { error: c.intentId, reason: "AMBIGUOUS_PARENT_REF" };
    }
    if (titleMatches.length === 1) {
      inBatchParent.set(c.intentId, titleMatches[0]!.intentId);
    }
  }

  const pendingBatchParent = new Map(inBatchParent);
  const ready = creates
    .filter((c) => !pendingBatchParent.has(c.intentId))
    .map((c) => c.intentId);

  const ordered: SubjectCreateProposal[] = [];
  while (ready.length > 0) {
    const id = ready.shift()!;
    const node = byId.get(id);
    if (node) ordered.push(node);
    for (const [childId, parentId] of [...pendingBatchParent]) {
      if (parentId === id) {
        pendingBatchParent.delete(childId);
        ready.push(childId);
      }
    }
  }

  if (ordered.length !== creates.length) {
    return { error: creates[0]?.intentId ?? "batch", reason: "SUBJECT_BATCH_CYCLE" };
  }

  return { ordered };
}
```


### `projects/sfia-studio-next/web/src/domains/preparation/project-activity-projection.ts`
```typescript
/**
 * ML5 continuity (B.8) — deterministic activity counters for Travail/Projet.
 * One row per document identity; révisions do not inflate the library count.
 */

import { editorialDisplayBullet } from "@/domains/knowledge/journal-editorial";

export type DecisionProjectionRow = {
  id: string;
  state: string;
  statement: string;
  supersedesDecisionId?: string | null;
  kind?: string;
};

/**
 * A decision is superseded only when an APPLICABLE successor carries supersedesDecisionId.
 * Non-APPLICABLE rows (REVISED / FAILED lineage) must not zero activity counters (MaintiPlan).
 */
export function buildSupersededDecisionIds<T extends DecisionProjectionRow>(rows: T[]): Set<string> {
  const out = new Set<string>();
  for (const d of rows) {
    if (d.state === "APPLICABLE" && d.supersedesDecisionId) {
      out.add(d.supersedesDecisionId);
    }
  }
  return out;
}

export function filterApplicableHumanDecisions<T extends DecisionProjectionRow>(
  rows: T[],
  opts?: { kinds?: string[] },
): T[] {
  const superseded = buildSupersededDecisionIds(rows);
  return rows.filter((d) => {
    if (d.state !== "APPLICABLE") return false;
    if (superseded.has(d.id)) return false;
    if (opts?.kinds?.length && d.kind && !opts.kinds.includes(d.kind)) return false;
    return true;
  });
}

/** E3-facing compact label — editorial, no schema migration. */
export function openPointShortTitle(statement: string, maxLen = 72): string {
  return editorialDisplayBullet(statement, maxLen);
}

export type DocumentListRow = {
  document?: { id: string; title?: string } | null;
};

export function countProjectLibraryDocuments(documents: DocumentListRow[]): number {
  const seen = new Set<string>();
  for (const d of documents) {
    const id = d.document?.id;
    if (id) seen.add(id);
  }
  return seen.size;
}

export function projectLibraryDocumentExamples(
  documents: DocumentListRow[],
  limit = 2,
): Array<{ id: string; title: string }> {
  const seen = new Set<string>();
  const out: Array<{ id: string; title: string }> = [];
  for (const d of documents) {
    const id = d.document?.id;
    if (!id || seen.has(id)) continue;
    seen.add(id);
    out.push({ id, title: d.document!.title ?? "Sans titre" });
    if (out.length >= limit) break;
  }
  return out;
}

export function openKnowledgePoints<T extends { status: string }>(points: T[]): T[] {
  return points.filter((p) => p.status === "OPEN");
}

export function countOpenKnowledgePoints<T extends { status: string }>(points: T[]): number {
  return openKnowledgePoints(points).length;
}

/** Travail aside — at most five compact titles, same OPEN population as Journal. */
export function travailAsideOpenPoints<T extends { id: string; statement: string; status: string }>(
  points: T[],
  max = 5,
): T[] {
  return openKnowledgePoints(points).slice(0, max);
}
```


### `projects/sfia-studio-next/architecture-technique/e1-continuite-cognitive-as-built.md`
```typescript
# E1 — Continuité cognitive as-built (DEV, 2026-11-27)

Statut : DOCUMENTED as-built — NO RELEASE. Ne remplace pas le contrat fonctionnel
`conception-fonctionnelle/continuite-cognitive-et-fonctionnelle-du-projet.md`.

## Responsabilités

| Domaine | Rôle |
| --- | --- |
| D3 | Qualification, extraction `d4.record_knowledge`, contexte, outils lecture |
| D4 | Sujets, hiérarchie, synthèses, acquis, points ouverts, provenance |
| D5 | Trajectoire (propose/retain), cycles, finalité |
| D6 | Décisions humaines (RECORD/REVISE/REVOKE) — jamais dérivées d'une reco Nora seule |
| Studio | Admission, fence, persistance PG, projections |

## Mécanismes E1

### B.1 Capitalisation

- Gate : `QUALIFIED` + `REQUEST_EFFECT` + `d4.record_knowledge` → `extractKnowledgeProposals`.
- Écriture : `maybeCapitalizeFromExchange` (zéro proposition = zéro mutation).
- Provenance : message USER + message assistant (Nora) constitutifs lorsque fournis.
- Epistemic `established` Nora → D4 refuse FACT sans source indépendante.

### B.2 Arborescence

- Module : `web/src/domains/knowledge/subject-proposal-batch.ts`
  - `orderSubjectCreatesByDependency` — parents avant enfants ; détection de cycle.
  - `resolveBatchParentRef` — `subj_*` | intent id | titre co-proposé | `lookup_title` DB.
- `precreateBatchSubjects` dans `knowledge/service.ts` crée le batch avant le reste.
- Reparent/rename : SUBJECT avec `subjectId` existant + `parentSubjectId` / `subjectTitle`.
- API Pilote : `POST .../knowledge` action `reparent` (en plus rename/merge/split).
- Nora : guidance adapter — parent+enfant même tour autorisé.

### B.4 / B.8

- `openPointShortTitle` (éditorial, pas de migration) exposé dans `getOwnedProjectContext`.
- Décisions applicables : `filterApplicableHumanDecisions` — supersede uniquement si
  successeur **APPLICABLE** (corrige compteur zéro MaintiPlan).

### B.5 / B.6

- `applyConversationalAuthority` : PROPOSE/RETAIN n'échouent plus le body objective/orientation
  (champs issus uniquement de la qualification durable).
- OPEN_CYCLE conserve l'objectif contextualisé via `persistableCycleObjective`.

### B.7

- Sélection : `selectRelevantKnowledgeContext` + preferred ids.
- Continuation : `resolveContinuationKnowledgeSnippets` + marqueur d'omit — l'info reste
  accessible via outils D4 (trim ≠ perte).

## Limites

- Autonomie sémantique LIVE : NON PROUVÉE (E1 = DET + injections).
- Hybrid embedding `derivedUsed=false` : réserve E2 si impact mesure.
- Merge/split : API UI, non mobilisés par le conducteur comme intents typés.
- UX panneau / multi-types : E3.
- Navigateur : `next dev` :3100 peut 500 (tooling) ; qualify:start alternatif.

## Preuves

Suite E1 focalisée (unit+PG) — voir Delivery History et Review Pack E1.

```


### `projects/sfia-studio-next/web/tests/unit/e1-b1-capitalisation-selectivity.test.ts`
```typescript
/**
 * E1 B.1 — selective capitalisation raccordement (injected proposals).
 * Distinguishes: zero proposals → no write; pilot vs Nora epistemic; no silent loss.
 */
import { describe, expect, it } from "vitest";
import {
  extractKnowledgeProposals,
  summarizeKnowledgeProposals,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";

function qualifiedRecord(
  intents: Array<Record<string, unknown>>,
): NoraTurnQualification {
  return {
    status: "QUALIFIED",
    intents,
  } as unknown as NoraTurnQualification;
}

describe("E1 B.1 — capitalisation selectivity (qualification → proposals)", () => {
  it("significant Pilot contribution → ACQUIS hypothesized proposal extracted", () => {
    const q = qualifiedRecord([
      {
        id: "p1",
        capabilityId: "d4.record_knowledge",
        mode: "REQUEST_EFFECT",
        summary: "Fait Pilote",
        parameters: {
          knowledgeKind: "ACQUIS",
          knowledgeStatement:
            "Le campus dispose de douze ordinateurs portables à Lille.",
          epistemic: "hypothesized",
          subjectTitle: "Parc informatique",
          continuityReason: "apport Pilote durable",
        },
      },
    ]);
    const proposals = extractKnowledgeProposals(q);
    expect(proposals).toHaveLength(1);
    expect(proposals[0]?.kind).toBe("ACQUIS");
    expect(proposals[0]?.epistemic).toBe("hypothesized");
    expect(summarizeKnowledgeProposals(proposals).acquis_count).toBe(1);
  });

  it("Nora investigation result → RECOMMENDATION epistemic retained", () => {
    const q = qualifiedRecord([
      {
        id: "n1",
        capabilityId: "d4.record_knowledge",
        mode: "REQUEST_EFFECT",
        summary: "Conclusion Nora",
        parameters: {
          knowledgeKind: "ACQUIS",
          knowledgeStatement:
            "Neuf portables restent mobilisables après le prêt incident.",
          epistemic: "recommended",
          subjectTitle: "Parc informatique",
          continuityReason: "résultat d'investigation Nora",
        },
      },
    ]);
    const proposals = extractKnowledgeProposals(q);
    expect(proposals[0]?.epistemic).toBe("recommended");
  });

  it("mixed contributions → multiple kinds counted", () => {
    const q = qualifiedRecord([
      {
        id: "s1",
        capabilityId: "d4.record_knowledge",
        mode: "REQUEST_EFFECT",
        summary: "Sujet",
        parameters: {
          knowledgeKind: "SUBJECT",
          knowledgeStatement: "Synthèse du parc informatique campus Lille et maintenance.",
          epistemic: "established",
          subjectTitle: "Parc informatique",
        },
      },
      {
        id: "o1",
        capabilityId: "d4.record_knowledge",
        mode: "REQUEST_EFFECT",
        summary: "Question",
        parameters: {
          knowledgeKind: "OPEN_POINT",
          knowledgeStatement: "Qui valide le prêt exceptionnel hors horaires ?",
          epistemic: "hypothesized",
          subjectTitle: "Parc informatique",
        },
      },
    ]);
    const summary = summarizeKnowledgeProposals(extractKnowledgeProposals(q));
    expect(summary.subject_count).toBe(1);
    expect(summary.open_point_count).toBe(1);
    expect(summary.proposal_present).toBe(true);
  });

  it("exchange without durable interest → zero proposals (no mutation)", () => {
    const q = qualifiedRecord([
      {
        id: "chat",
        capabilityId: "d3.conversational_reply",
        mode: "EXPLAIN",
        summary: "Éclaircissement ponctuel",
        parameters: {},
      },
    ]);
    const proposals = extractKnowledgeProposals(q);
    expect(proposals).toHaveLength(0);
    expect(summarizeKnowledgeProposals(proposals).proposal_present).toBe(false);
  });

  it("PREPARE / EXPLAIN record_knowledge ignored (REQUEST_EFFECT gate)", () => {
    const q = qualifiedRecord([
      {
        id: "prep",
        capabilityId: "d4.record_knowledge",
        mode: "PREPARE",
        summary: "Piste seulement",
        parameters: {
          knowledgeKind: "ACQUIS",
          knowledgeStatement: "Une hypothèse encore trop fragile pour capitaliser durablement.",
          epistemic: "hypothesized",
        },
      },
    ]);
    expect(extractKnowledgeProposals(q)).toHaveLength(0);
  });

  it("UNAVAILABLE qualification yields no proposals", () => {
    const q = {
      status: "UNAVAILABLE",
      intents: [],
    } as unknown as NoraTurnQualification;
    expect(extractKnowledgeProposals(q)).toHaveLength(0);
  });
});

```


### `projects/sfia-studio-next/web/tests/unit/knowledge-parent-subject-proposal.test.ts`
```typescript
import { describe, expect, it } from "vitest";
import { extractKnowledgeProposals } from "@/domains/conversation/semantic-qualification";
import type { NoraTurnQualification } from "@/domains/conversation/semantic-qualification";
import {
  orderSubjectCreatesByDependency,
  resolveBatchParentRef,
  type SubjectCreateProposal,
} from "@/domains/knowledge/subject-proposal-batch";

describe("B.2 — parentSubjectId on knowledge proposals", () => {
  it("extracts parentSubjectId from d4.record_knowledge SUBJECT intents", () => {
    const q = {
      status: "QUALIFIED",
      intents: [
        {
          id: "i1",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Sous-sujet planning",
          parameters: {
            knowledgeKind: "SUBJECT",
            knowledgeStatement:
              "Organisation du planning d'intervention et des contraintes horaires.",
            epistemic: "established",
            subjectTitle: "Planning d'intervention",
            parentSubjectId: "subj_parent_abc",
            continuityReason: "approfondissement naturel",
          },
        },
      ],
    } as unknown as NoraTurnQualification;

    const proposals = extractKnowledgeProposals(q);
    expect(proposals).toHaveLength(1);
    expect(proposals[0]?.kind).toBe("SUBJECT");
    expect(proposals[0]?.parentSubjectId).toBe("subj_parent_abc");
    expect(proposals[0]?.subjectTitle).toBe("Planning d'intervention");
  });

  it("orders parent before child when child references parent title", () => {
    const batch: SubjectCreateProposal[] = [
      { intentId: "child", title: "Créneaux terrain", parentRef: "Planning intervention" },
      { intentId: "parent", title: "Planning intervention" },
    ];
    const ordered = orderSubjectCreatesByDependency(batch);
    expect("ordered" in ordered).toBe(true);
    if (!("ordered" in ordered)) return;
    expect(ordered.ordered.map((s) => s.intentId)).toEqual(["parent", "child"]);
  });

  it("orders parent before child when child references parent intent id", () => {
    const batch: SubjectCreateProposal[] = [
      { intentId: "child", title: "Sous-thème", parentRef: "intent-parent" },
      { intentId: "intent-parent", title: "Thème" },
    ];
    const ordered = orderSubjectCreatesByDependency(batch);
    expect("ordered" in ordered).toBe(true);
    if (!("ordered" in ordered)) return;
    expect(ordered.ordered[0]?.intentId).toBe("intent-parent");
  });

  it("rejects self-parent by intent id", () => {
    const batch: SubjectCreateProposal[] = [
      { intentId: "loop", title: "Sujet", parentRef: "loop" },
    ];
    const ordered = orderSubjectCreatesByDependency(batch);
    expect("ordered" in ordered).toBe(false);
    if ("ordered" in ordered) return;
    expect(ordered.reason).toBe("SUBJECT_SELF_PARENT");
  });

  it("rejects batch cycle", () => {
    const batch: SubjectCreateProposal[] = [
      { intentId: "a", title: "A", parentRef: "b" },
      { intentId: "b", title: "B", parentRef: "a" },
    ];
    const ordered = orderSubjectCreatesByDependency(batch);
    expect("ordered" in ordered).toBe(false);
    if ("ordered" in ordered) return;
    expect(ordered.reason).toBe("SUBJECT_BATCH_CYCLE");
  });

  it("resolveBatchParentRef maps intent id to created id", () => {
    const batch: SubjectCreateProposal[] = [
      { intentId: "parent", title: "Parent" },
      { intentId: "child", title: "Child", parentRef: "parent" },
    ];
    const created = new Map([["parent", "subj_parent_1"]]);
    const r = resolveBatchParentRef("parent", {
      self: batch[1]!,
      batch,
      createdByIntentId: created,
    });
    expect(r).toEqual({ kind: "resolved", parentSubjectId: "subj_parent_1" });
  });

  it("resolveBatchParentRef yields lookup_title for unknown title outside batch", () => {
    const batch: SubjectCreateProposal[] = [
      { intentId: "child", title: "Child", parentRef: "Parent existant" },
    ];
    const r = resolveBatchParentRef("Parent existant", {
      self: batch[0]!,
      batch,
      createdByIntentId: new Map(),
    });
    expect(r).toEqual({ kind: "lookup_title", title: "Parent existant" });
  });
});

```


### `projects/sfia-studio-next/web/tests/integration/e1-continuity-integrated.pg.test.ts`
```typescript
/**
 * E1 — integrated deterministic continuity chain (injected quals, no LIVE).
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  ensureSubject,
  maybeCapitalizeFromExchange,
  openPoint,
} from "@/domains/knowledge/service";
import { listProjectKnowledge, reparentSubject, resolveOpenPointFactually } from "@/domains/knowledge/journal";
import { savePreparationDocument } from "@/domains/document/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { getOwnedProjectContext } from "@/domains/preparation/project-context";
import {
  executePilotageCommand,
  getPilotageProjection,
  retainTrajectory,
} from "@/domains/pilotage/service";
import { applyConversationalAuthority } from "@/domains/pilotage/conversation-authority";
import { reserveTurnCommand, stashTurnQualification } from "@/domains/conversation/turn-command";
import { getPreparationContext } from "@/domains/preparation/service";
import {
  clearPilotagePreQualified,
  d6DecisionEnvelope,
} from "../helpers/semantic-fixture-envelopes";

async function seedWorld(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "e1-integrated");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "e1-integrated",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`create failed: ${created.status}`);
  }
  const ctx = await getPreparationContext(pilotId, prep.id);
  return {
    pilotId,
    preparationId: prep.id,
    projectId: created.projectId!,
    conversationId: ctx.conversation!.id,
  };
}

describe("E1 integrated continuity chain (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("hierarchy → knowledge → decision → trajectory → projections → isolation", async () => {
    const world = await seedWorld(`e1-int-${Date.now()}`);

    // 1–2 Same-turn parent + child + acquis + open point
    const cap = await maybeCapitalizeFromExchange(world.pilotId, world.preparationId, {
      userText: "Structurons interventions et planification.",
      assistantText: "Thème parent, sous-thème, acquis et question.",
      generationId: newId("gen"),
      userMessageId: newId("msg"),
      assistantMessageId: newId("msg"),
      proposals: [
        {
          intentId: "parent",
          kind: "SUBJECT",
          statement: "Organisation du cycle de vie des interventions terrain.",
          epistemic: "established",
          subjectTitle: "Gestion des interventions",
          continuityReason: "thème structurant",
        },
        {
          intentId: "child",
          kind: "SUBJECT",
          statement: "Règles de planification et conflits de créneaux.",
          epistemic: "established",
          subjectTitle: "Planification",
          parentSubjectId: "parent",
          continuityReason: "sous-thème",
        },
        {
          intentId: "acq",
          kind: "ACQUIS",
          statement: "Une intervention confirmée ne peut être déplacée que par une autorité habilitée.",
          epistemic: "hypothesized",
          subjectTitle: "Planification",
          continuityReason: "apport Pilote",
        },
        {
          intentId: "op",
          kind: "OPEN_POINT",
          statement: "Qui valide une replanification urgente hors horaires ?",
          epistemic: "hypothesized",
          subjectTitle: "Planification",
          continuityReason: "question ouverte",
        },
      ],
    });
    expect(cap.ownershipLost).toBe(false);
    expect(cap.capitalisations.some((c) => c.status === "FAILED")).toBe(false);

    let bundle = await listProjectKnowledge(world.pilotId, world.projectId);
    const parent = bundle.subjects.find((s) => s.title === "Gestion des interventions");
    const child = bundle.subjects.find((s) => s.title === "Planification");
    expect(child?.parentSubjectId).toBe(parent?.id);
    expect(bundle.openPoints.some((o) => o.status === "OPEN")).toBe(true);

    // 3 Durable decision
    const decisionStatement = "L'habilitation est obligatoire avant toute affectation terrain.";
    const content = `Je décide que ${decisionStatement}`;
    const qual = d6DecisionEnvelope({
      operation: "RECORD_DECISION",
      statement: decisionStatement,
      objectRef: "habilitation",
    });
    const reserved = await reserveTurnCommand({
      ownerPilotId: world.pilotId,
      conversationId: world.conversationId,
      clientTurnKey: `e1-int-${newId("ctk")}`,
      content,
    });
    if (reserved.kind !== "fresh") throw new Error(`expected fresh turn: ${reserved.kind}`);
    const stashed = await stashTurnQualification({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      qualificationJson: JSON.stringify(qual),
    });
    if (!stashed.applied) throw new Error("qualification stash failed");
    const decisionOutcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: reserved.userMessageId,
      content,
      clientTurnKey: reserved.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "RECORD_DECISION",
        statement: decisionStatement,
        objectRef: "habilitation",
        semanticIntentId: qual.intents[0]!.id,
      }),
    });
    expect(decisionOutcome.humanDecisionCreated).toBe(true);

    // 4 Zero proposals → no mutation
    const noop = await maybeCapitalizeFromExchange(world.pilotId, world.preparationId, {
      userText: "Merci.",
      assistantText: "De rien.",
      generationId: newId("gen"),
      userMessageId: newId("msg"),
      proposals: [],
    });
    expect(noop.capitalisations).toHaveLength(0);

    // 5 Resolve open point with verified document revision provenance
    const openId = bundle.openPoints.find((o) => o.status === "OPEN")!.id;
    const doc = await savePreparationDocument(
      world.pilotId,
      world.preparationId,
      "Preuve habilitation",
      "# Habilitation\nRègle documentée pour replanification.",
      undefined,
      { correlationKey: `e1-int-${openId}`, provenance: { sourceKind: "pilot" } },
    );
    expect(doc.status).toBe("AVAILABLE");
    const revisionId = "revisionId" in doc ? String(doc.revisionId) : "";
    const resolved = await resolveOpenPointFactually(world.pilotId, world.projectId, openId, {
      reason: "Règle d'habilitation documentée",
      provenance: { sourceKind: "revision", sourceId: revisionId, epistemic: "established" },
      operationId: newId("resolve"),
    });
    expect(resolved.status).toBe("AVAILABLE");

    // 6 Trajectory propose + retain + open cycle
    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const proposed = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "PROPOSE_TRAJECTORY",
      orientation: "Cadrage puis conception UX avant validation",
    });
    expect(proposed.status).toBe("APPLIED");
    rev = proposed.revision ?? rev + 1;
    const trajId = proposed.effects.find((e) => e.effectKind === "PROPOSE")?.targetRef;
    const retained = await retainTrajectory(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceRef: newId("src"),
      trajectoryRevisionId: trajId,
    });
    expect(retained.status).toBe("APPLIED");
    rev = retained.revision ?? rev + 1;
    const opened = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      objective: "Définir les règles de planification et d'affectation des interventions.",
    });
    expect(opened.status).toBe("APPLIED");

    // 7 Reparent child under a new root sibling
    const sibling = await ensureSubject(world.pilotId, world.preparationId, "Gestion des techniciens");
    const rep = await reparentSubject(
      world.pilotId,
      world.projectId,
      child!.id,
      sibling.subjectId!,
    );
    expect(rep.status).toBe("AVAILABLE");

    // 8 Projections
    const ctx = await getOwnedProjectContext(world.pilotId, world.projectId);
    expect(ctx.activity.openSubjects.count).toBeGreaterThanOrEqual(3);
    expect(ctx.activity.applicableDecisions.count).toBeGreaterThanOrEqual(1);
    expect(ctx.activity.openPointsCount).toBe(0);
    expect(ctx.knowledge.openPoints.every((o) => o.shortTitle)).toBe(true);
    const pilotage = await getPilotageProjection(world.pilotId, world.projectId);
    expect(pilotage.cycle?.status).toBe("ACTIVE");
    expect(pilotage.trajectory.retained?.status).toBe("RETAINED");

    // 9 Isolation
    const other = await seedWorld(`e1-iso-${Date.now()}`);
    const otherBundle = await listProjectKnowledge(other.pilotId, other.projectId);
    expect(otherBundle.subjects.find((s) => s.id === parent!.id)).toBeFalsy();
    const otherCtx = await getOwnedProjectContext(other.pilotId, other.projectId);
    expect(otherCtx.activity.applicableDecisions.count).toBe(0);
  });
});

```

## 16. Diffs E1 (fichiers modifiés clés)
### Diffstat
```
 .../construction/delivery-history.md               |  23 ++
 ...5-registre-couverture-et-revue-developpement.md |  16 +-
 .../[preparationId]/knowledge/route.ts             |  25 +-
 .../web/src/domains/conversation/nora-adapter.ts   |   8 +-
 .../domains/conversation/semantic-qualification.ts | 106 ++++++--
 .../web/src/domains/knowledge/journal.ts           |   6 +-
 .../web/src/domains/knowledge/service.ts           | 293 ++++++++++++++++++++-
 .../src/domains/pilotage/conversation-authority.ts |  41 ++-
 .../web/src/domains/preparation/project-context.ts |  29 +-
 9 files changed, 494 insertions(+), 53 deletions(-)
```


### Diff — knowledge/service.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
index 8e294388..cbd88bde 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/service.ts
@@ -49,6 +49,11 @@ import {
   editorialCompactKnowledgeStatement,
   composeSubjectSummaryFromCurrentKnowledge,
 } from "./journal-editorial";
+import {
+  orderSubjectCreatesByDependency,
+  resolveBatchParentRef,
+  type SubjectCreateProposal,
+} from "./subject-proposal-batch";

 function provenanceString(p: Provenance): string {
   return JSON.stringify({ ...p, notedAt: p.notedAt ?? new Date().toISOString() });
@@ -99,6 +104,143 @@ async function assertSubjectRef(
   return { subject: row };
 }

+/** Resolve an ACTIVE subject by exact title within the preparation (owner-scoped). */
+async function findActiveSubjectByTitle(
+  pilotId: string,
+  preparationId: string,
+  title: string,
+): Promise<{ id: string } | null> {
+  const cleaned = title.trim().slice(0, 200);
+  if (!cleaned) return null;
+  const rows = await db
+    .select({ id: knowledgeSubjects.id })
+    .from(knowledgeSubjects)
+    .where(
+      and(
+        eq(knowledgeSubjects.preparationId, preparationId),
+        eq(knowledgeSubjects.ownerPilotId, pilotId),
+        eq(knowledgeSubjects.title, cleaned),
+        eq(knowledgeSubjects.status, "ACTIVE"),
+      ),
+    )
+    .limit(2);
+  if (rows.length !== 1) return null;
+  return rows[0] ?? null;
+}
+
+async function precreateBatchSubjects(
+  pilotId: string,
+  preparationId: string,
+  proposals: Array<{
+    intentId: string;
+    kind: "ACQUIS" | "OPEN_POINT" | "SUBJECT";
+    statement: string;
+    subjectTitle?: string;
+    subjectId?: string;
+    parentSubjectId?: string;
+  }>,
+  fence: TurnOwnershipFence | undefined,
+): Promise<{
+  createdByIntentId: Map<string, string>;
+  failedByIntentId: Map<string, string>;
+  ownershipLost: boolean;
+}> {
+  const createdByIntentId = new Map<string, string>();
+  const failedByIntentId = new Map<string, string>();
+  const specs: SubjectCreateProposal[] = [];
+
+  for (const p of proposals) {
+    if (p.kind !== "SUBJECT") continue;
+    if (p.subjectId?.trim()) {
+      const check = await assertSubjectRef(pilotId, preparationId, p.subjectId);
+      if (check?.subject) continue;
+    }
+    const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
+    if (title.length < 3) continue;
+    const parentRef =
+      p.parentSubjectId && p.parentSubjectId !== p.subjectId
+        ? p.parentSubjectId.trim()
+        : undefined;
+    specs.push({ intentId: p.intentId, title, parentRef });
+  }
+
+  if (specs.length === 0) {
+    return { createdByIntentId, failedByIntentId, ownershipLost: false };
+  }
+
+  const ordering = orderSubjectCreatesByDependency(specs);
+  if (!("ordered" in ordering)) {
+    if (ordering.reason === "SUBJECT_BATCH_CYCLE") {
+      for (const s of specs) {
+        failedByIntentId.set(s.intentId, ordering.reason);
+      }
+    } else {
+      failedByIntentId.set(ordering.error, ordering.reason);
+    }
+    return { createdByIntentId, failedByIntentId, ownershipLost: false };
+  }
+
+  for (const spec of ordering.ordered) {
+    const parentResolved = spec.parentRef
+      ? resolveBatchParentRef(spec.parentRef, {
+          self: spec,
+          batch: ordering.ordered,
+          createdByIntentId,
+        })
+      : ({ kind: "root" } as const);
+
+    let parentSubjectId: string | null = null;
+    if (parentResolved.kind === "error") {
+      failedByIntentId.set(spec.intentId, parentResolved.reason);
+      continue;
+    }
+    if (parentResolved.kind === "pending_batch") {
+      failedByIntentId.set(spec.intentId, "SUBJECT_BATCH_ORDER");
+      continue;
+    }
+    if (parentResolved.kind === "resolved") {
+      parentSubjectId = parentResolved.parentSubjectId;
+      if (parentSubjectId.startsWith("subj_")) {
+        const check = await assertSubjectRef(pilotId, preparationId, parentSubjectId);
+        if (check && "error" in check) {
+          failedByIntentId.set(spec.intentId, check.error ?? "SUBJECT_FOREIGN_OR_UNKNOWN");
+          continue;
+        }
+      }
+    }
+    if (parentResolved.kind === "lookup_title") {
+      const found = await findActiveSubjectByTitle(
+        pilotId,
+        preparationId,
+        parentResolved.title,
+      );
+      if (!found) {
+        failedByIntentId.set(spec.intentId, "PARENT_NOT_FOUND");
+        continue;
+      }
+      parentSubjectId = found.id;
+    }
+
+    const s = await ensureSubject(
+      pilotId,
+      preparationId,
+      spec.title,
+      parentSubjectId,
+      fence,
+    );
+    if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
+      return { createdByIntentId, failedByIntentId, ownershipLost: true };
+    }
+    if (s.status === "AVAILABLE" && s.subjectId) {
+      createdByIntentId.set(spec.intentId, s.subjectId);
+    } else if (s.status === "FAILED" && "reason" in s) {
+      failedByIntentId.set(spec.intentId, String(s.reason));
+    }
+  }
+
+  return { createdByIntentId, failedByIntentId, ownershipLost: false };
+}
+
 /** Selective capitalisation — never invents D6 decisions. */
 export async function capitalizeAcquis(
   pilotId: string,
@@ -1165,6 +1307,8 @@ export async function maybeCapitalizeFromExchange(
       epistemic: "hypothesized" | "recommended" | "established" | "limited";
       subjectTitle?: string;
       subjectId?: string;
+      /** Existing parent subject for hierarchical SUBJECT creation. */
+      parentSubjectId?: string;
       continuityReason?: string;
       supersedesAcquisId?: string;
       resolvesOpenPointId?: string;
@@ -1193,6 +1337,21 @@ export async function maybeCapitalizeFromExchange(
   let subjectId: string | null = null;
   const ctx = await assertPrep(pilotId, preparationId);
   const projectId = ctx.project?.id ?? null;
+  const batchSubjects = await precreateBatchSubjects(
+    pilotId,
+    preparationId,
+    proposals,
+    fence,
+  );
+  if (batchSubjects.ownershipLost) {
+    return {
+      capitalisations: results,
+      selectionMethod: "semantic-proposals" as const,
+      selectionLimit: "OWNERSHIP_LOST",
+      humanDecisionCreated: false as const,
+      ownershipLost: true as const,
+    };
+  }
   /** Subjects that already received an explicit SUBJECT summary this turn. */
   const subjectsWithExplicitSummary = new Set<string>();
   /** Subjects that gained significant CURRENT acquis this turn (may need synthesis). */
@@ -1239,9 +1398,45 @@ export async function maybeCapitalizeFromExchange(
     });
   }

+  /** Map subjectTitle (normalized) → id for subjects created in this batch. */
+  const batchTitleToId = new Map<string, string>();
+  for (const p of proposals) {
+    if (p.kind !== "SUBJECT") continue;
+    const created = batchSubjects.createdByIntentId.get(p.intentId);
+    if (!created) continue;
+    const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
+    if (title.length >= 3) {
+      batchTitleToId.set(title.trim().replace(/\s+/g, " ").toLowerCase(), created);
+    }
+  }
+
   for (const p of proposals) {
     if (p.kind === "SUBJECT") {
-      // Prefer explicit subjectId for synthesis revision on an existing subject.
+      const batchFailed = batchSubjects.failedByIntentId.get(p.intentId);
+      if (batchFailed) {
+        results.push({
+          kind: "subject",
+          status: "FAILED",
+          reason: batchFailed,
+          epistemicNote: p.continuityReason,
+        });
+        continue;
+      }
+      const batchCreated = batchSubjects.createdByIntentId.get(p.intentId);
+      if (batchCreated) {
+        subjectId = batchCreated;
+        results.push({
+          kind: "subject",
+          id: batchCreated,
+          status: "AVAILABLE",
+          epistemicNote: p.continuityReason,
+        });
+        const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
+        await writeSubjectSummary(batchCreated, p.statement.trim(), title.trim(), p);
+        subjectsWithExplicitSummary.add(batchCreated);
+        continue;
+      }
+      // Prefer explicit subjectId for synthesis revision / reparent on an existing subject.
       if (p.subjectId) {
         const check = await assertSubjectRef(pilotId, preparationId, p.subjectId);
         if (check && "error" in check) {
@@ -1255,6 +1450,75 @@ export async function maybeCapitalizeFromExchange(
         }
         if (check?.subject) {
           subjectId = check.subject.id;
+          // B.2 — reparent when Nora cites an existing subject + new parent.
+          if (projectId && p.parentSubjectId && p.parentSubjectId !== check.subject.id) {
+            let newParentId: string | null = p.parentSubjectId;
+            if (!p.parentSubjectId.startsWith("subj_")) {
+              const fromBatch = batchSubjects.createdByIntentId.get(p.parentSubjectId);
+              const byTitle =
+                fromBatch ??
+                batchTitleToId.get(
+                  p.parentSubjectId.trim().replace(/\s+/g, " ").toLowerCase(),
+                ) ??
+                (await findActiveSubjectByTitle(pilotId, preparationId, p.parentSubjectId))
+                  ?.id;
+              newParentId = byTitle ?? null;
+              if (!newParentId) {
+                results.push({
+                  kind: "subject",
+                  id: subjectId,
+                  status: "FAILED",
+                  reason: "PARENT_NOT_FOUND",
+                  epistemicNote: p.continuityReason,
+                });
+                continue;
+              }
+            } else {
+              const parentCheck = await assertSubjectRef(
+                pilotId,
+                preparationId,
+                p.parentSubjectId,
+              );
+              if (parentCheck && "error" in parentCheck) {
+                results.push({
+                  kind: "subject",
+                  id: subjectId,
+                  status: "FAILED",
+                  reason: parentCheck.error,
+                  epistemicNote: p.continuityReason,
+                });
+                continue;
+              }
+            }
+            if (newParentId && newParentId !== check.subject.parentSubjectId) {
+              const { reparentSubject } = await import("@/domains/knowledge/journal");
+              const rep = await reparentSubject(pilotId, projectId, subjectId, newParentId);
+              results.push({
+                kind: "subject_reparent",
+                id: subjectId,
+                status: rep.status,
+                reason: "reason" in rep ? String(rep.reason) : undefined,
+                epistemicNote: p.continuityReason,
+              });
+              if (rep.status !== "AVAILABLE") continue;
+            }
+          }
+          // Optional rename when subjectTitle differs from current title.
+          if (p.subjectTitle && p.subjectTitle.trim() !== check.subject.title.trim()) {
+            const renamed = await renameSubject(
+              pilotId,
+              preparationId,
+              subjectId,
+              p.subjectTitle,
+            );
+            results.push({
+              kind: "subject_rename",
+              id: subjectId,
+              status: renamed.status,
+              reason: "reason" in renamed ? String(renamed.reason) : undefined,
+              epistemicNote: p.continuityReason,
+            });
+          }
           results.push({
             kind: "subject",
             id: subjectId,
@@ -1264,7 +1528,7 @@ export async function maybeCapitalizeFromExchange(
           await writeSubjectSummary(
             subjectId,
             p.statement.trim(),
-            check.subject.title.trim(),
+            (p.subjectTitle ?? check.subject.title).trim(),
             p,
           );
           subjectsWithExplicitSummary.add(subjectId);
@@ -1273,7 +1537,17 @@ export async function maybeCapitalizeFromExchange(
       }
       const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
       if (title.length < 3) continue;
-      const s = await ensureSubject(pilotId, preparationId, title, undefined, fence);
+      const parentForCreate =
+        p.parentSubjectId && p.parentSubjectId !== p.subjectId
+          ? p.parentSubjectId
+          : undefined;
+      const s = await ensureSubject(
+        pilotId,
+        preparationId,
+        title,
+        parentForCreate?.startsWith("subj_") ? parentForCreate : undefined,
+        fence,
+      );
       if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
         results.push({
           kind: "subject",
@@ -1303,9 +1577,18 @@ export async function maybeCapitalizeFromExchange(
       continue;
     }

+    // Resolve subject for ACQUIS/OPEN_POINT: prefer batch ids, then subjectId, then title.
+    if (p.subjectId) {
+      const check = await assertSubjectRef(pilotId, preparationId, p.subjectId);
+      if (check?.subject) subjectId = check.subject.id;
+    }
     if (p.subjectTitle) {
       const title = p.subjectTitle.trim().slice(0, 120);
-      if (title.length >= 3) {
+      const norm = title.replace(/\s+/g, " ").toLowerCase();
+      const fromBatch = batchTitleToId.get(norm);
+      if (fromBatch) {
+        subjectId = fromBatch;
+      } else if (title.length >= 3) {
         const s = await ensureSubject(pilotId, preparationId, title, undefined, fence);
         if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
           results.push({
@@ -1334,8 +1617,6 @@ export async function maybeCapitalizeFromExchange(
       }
     }

-    if (p.subjectId) subjectId = p.subjectId;
-
     if (p.kind === "OPEN_POINT") {
       const op = await openPoint(pilotId, preparationId, {
         statement: p.statement,

```


### Diff — conversation-authority.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts b/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
index 185c5540..08631798 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
@@ -68,6 +68,16 @@ export function conversationalCommandKey(clientTurnKey: string): string {
   return conversationalClientCommandKey(clientTurnKey);
 }

+/** Per semantic intent when several pilotage acts share one clientTurnKey (MP-09). */
+export function conversationalCommandKeyForIntent(
+  clientTurnKey: string,
+  semanticIntentId?: string | null,
+): string {
+  const base = conversationalCommandKey(clientTurnKey);
+  const intentId = semanticIntentId?.trim();
+  return intentId ? `${base}:${intentId}` : base;
+}
+
 /** @deprecated retained for lexical helper tests only — authority path uses durable resolvers. */
 export async function loadDecisionBriefs(projectId: string): Promise<DecisionBrief[]> {
   const rows = await db
@@ -232,9 +242,11 @@ export async function reconstituteConversationalAuthority(input: {
   projectId: string;
   clientTurnKey?: string | null;
   userMessageId?: string | null;
+  /** When set, scopes C02 replay to one semantic pilotage intent (MP-09). */
+  semanticIntentId?: string | null;
 }): Promise<ConversationalAuthorityOutcome | null> {
   const key = input.clientTurnKey?.trim()
-    ? conversationalCommandKey(input.clientTurnKey)
+    ? conversationalCommandKeyForIntent(input.clientTurnKey, input.semanticIntentId)
     : null;
   if (key) {
     try {
@@ -251,6 +263,10 @@ export async function reconstituteConversationalAuthority(input: {
   }
   const messageId = input.userMessageId?.trim();
   if (!messageId) return null;
+  // MP-09 — multi-intent turns share one userMessageId; never replay sibling acts here.
+  if (input.semanticIntentId?.trim()) {
+    return null;
+  }
   const cmd = (
     await db
       .select()
@@ -297,7 +313,14 @@ export async function applyConversationalAuthority(input: {
   preQualified?: IntentQualification | null;
 }): Promise<ConversationalAuthorityOutcome> {
   const content = input.content.trim();
-  const clientCommandKey = conversationalCommandKey(input.clientTurnKey);
+  const preQualifiedSemanticIntentId =
+    input.preQualified?.clarity === "CLEAR"
+      ? input.preQualified.semanticIntentId
+      : undefined;
+  const clientCommandKey = conversationalCommandKeyForIntent(
+    input.clientTurnKey,
+    preQualifiedSemanticIntentId,
+  );
   const empty: ConversationalAuthorityOutcome = {
     attempted: false,
     intentClarity: "NONE",
@@ -315,6 +338,7 @@ export async function applyConversationalAuthority(input: {
     projectId: input.projectId,
     clientTurnKey: input.clientTurnKey,
     userMessageId: input.userMessageId,
+    semanticIntentId: preQualifiedSemanticIntentId,
   });
   if (prior?.attempted && prior.command) {
     return prior;
@@ -441,7 +465,7 @@ export async function applyConversationalAuthority(input: {
     return outcomeFromCommand(command, "LIFT_RESTRICTION", clientCommandKey);
   }

-  // FIX-08 — RETAIN: do not send orientation/trajectoryRevisionId on USER_MESSAGE body
+  // FIX-08 — RETAIN: do not send orientation/trajectoryRevisionId/objective on USER_MESSAGE body
   // (SEM rejects client-supplied D5 targets). mutateCommand resolves current PROPOSED.
   if (qualified.operation === "RETAIN_TRAJECTORY") {
     if (!projection.trajectory.proposed?.id) {
@@ -458,11 +482,20 @@ export async function applyConversationalAuthority(input: {
     const command = await executePilotageCommand(input.pilotId, input.projectId, {
       ...base,
       operation: "RETAIN_TRAJECTORY",
-      objective: qualified.objective,
     });
     return outcomeFromCommand(command, "RETAIN_TRAJECTORY", clientCommandKey);
   }

+  // E1 B.6 — PROPOSE: orientation/statement come from durable qualification only.
+  // Never echo objective/orientation on the USER_MESSAGE body (clientSensitive gate).
+  if (qualified.operation === "PROPOSE_TRAJECTORY") {
+    const command = await executePilotageCommand(input.pilotId, input.projectId, {
+      ...base,
+      operation: "PROPOSE_TRAJECTORY",
+    });
+    return outcomeFromCommand(command, "PROPOSE_TRAJECTORY", clientCommandKey);
+  }
+
   const command = await executePilotageCommand(input.pilotId, input.projectId, {
     ...base,
     operation: qualified.operation,

```


### Diff — project-context.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
index a50bd368..460629f3 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
@@ -7,6 +7,13 @@ import { listDocuments } from "@/domains/document/service";
 import { listProjectKnowledge } from "@/domains/knowledge/journal";
 import { getPilotageProjection } from "@/domains/pilotage/service";
 import { getPreparationContext } from "@/domains/preparation/service";
+import {
+  countOpenKnowledgePoints,
+  countProjectLibraryDocuments,
+  filterApplicableHumanDecisions,
+  openPointShortTitle,
+  projectLibraryDocumentExamples,
+} from "@/domains/preparation/project-activity-projection";

 /**
  * Owner-scoped project reopen: durable projectId → linked preparation + same thread + documents.
@@ -66,6 +73,7 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)
     openPoints: knowledgeBundle.openPoints.map((o) => ({
       id: o.id,
       statement: o.statement,
+      shortTitle: openPointShortTitle(o.statement),
       status: o.status,
       subjectId: o.subjectId,
     })),
@@ -81,23 +89,17 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)
       id: humanDecisions.id,
       statement: humanDecisions.statement,
       state: humanDecisions.state,
+      kind: humanDecisions.kind,
       supersedesDecisionId: humanDecisions.supersedesDecisionId,
     })
     .from(humanDecisions)
     .where(eq(humanDecisions.projectId, projectId))
     .orderBy(desc(humanDecisions.createdAt));

-  const supersededIds = new Set(
-    decisionRows.map((d) => d.supersedesDecisionId).filter(Boolean) as string[],
-  );
-  const applicableDecisions = decisionRows.filter(
-    (d) => d.state === "APPLICABLE" && !supersededIds.has(d.id),
-  );
+  const applicableDecisions = filterApplicableHumanDecisions(decisionRows);

   const openSubjects = knowledge.subjects.filter((s) => s.status === "ACTIVE");
-  const openPoints = knowledge.openPoints.filter((o) => o.status === "OPEN");
-  // FIX-11 — "en cours" = actively writing (SAVING), not FAILED/UNKNOWN/AVAILABLE.
-  const docsInProgress = documents.filter((d) => d.latestRevision?.status === "SAVING");
+  const openPointsCount = countOpenKnowledgePoints(knowledge.openPoints);

   const activity = {
     openSubjects: {
@@ -109,13 +111,10 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)
       examples: applicableDecisions.slice(0, 2).map((d) => ({ id: d.id, statement: d.statement })),
     },
     documentsInProgress: {
-      count: docsInProgress.length,
-      examples: docsInProgress.slice(0, 2).map((d) => ({
-        id: d.document.id,
-        title: d.document.title,
-      })),
+      count: countProjectLibraryDocuments(documents),
+      examples: projectLibraryDocumentExamples(documents),
     },
-    openPointsCount: openPoints.length,
+    openPointsCount,
   };

   return {

```


### Diff — journal.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts b/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
index 51a13963..d3a15270 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
@@ -27,6 +27,7 @@ import {
   type ExtendedProvenance,
 } from "@/domains/knowledge/journal-cognition";
 import { extractSourcedMotivationFromMessage } from "@/domains/knowledge/journal-editorial";
+import { buildSupersededDecisionIds } from "@/domains/preparation/project-activity-projection";
 import { StudioError } from "@/lib/http-errors";
 import { newId } from "@/lib/ids";

@@ -1130,9 +1131,10 @@ export async function getJournalProjection(pilotId: string, projectId: string) {
     .where(eq(humanDecisions.projectId, projectId))
     .orderBy(desc(humanDecisions.createdAt));

+  const supersededDecisionIds = buildSupersededDecisionIds(decisionRows);
   const supersededBy = new Map<string, string>();
   for (const d of decisionRows) {
-    if (d.supersedesDecisionId) {
+    if (d.state === "APPLICABLE" && d.supersedesDecisionId) {
       supersededBy.set(d.supersedesDecisionId, d.id);
     }
   }
@@ -1140,7 +1142,7 @@ export async function getJournalProjection(pilotId: string, projectId: string) {
   const decisions = [];
   for (const d of decisionRows) {
     const expl = await getCurrentDecisionExplanation(pilotId, projectId, d.id);
-    const applicable = d.state === "APPLICABLE" && !supersededBy.has(d.id);
+    const applicable = d.state === "APPLICABLE" && !supersededDecisionIds.has(d.id);
     const originSources: Array<{
       ownerKind: "decision";
       ownerId: string;

```


### Diff — knowledge route
```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/knowledge/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/knowledge/route.ts
index 996f1db9..bee1b096 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/knowledge/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/knowledge/route.ts
@@ -6,6 +6,8 @@ import {
   renameSubject,
   splitSubject,
 } from "@/domains/knowledge/service";
+import { reparentSubject } from "@/domains/knowledge/journal";
+import { getPreparationContext } from "@/domains/preparation/service";
 import { studioErrorResponse } from "@/lib/http-errors";

 export async function GET(_: Request, ctx: { params: Promise<{ preparationId: string }> }) {
@@ -25,11 +27,12 @@ export async function POST(req: Request, ctx: { params: Promise<{ preparationId:
     const session = await requireStudioSession();
     const { preparationId } = await ctx.params;
     const body = (await req.json()) as {
-      action?: "rename" | "merge" | "split";
+      action?: "rename" | "merge" | "split" | "reparent";
       subjectId?: string;
       newTitle?: string;
       targetSubjectId?: string;
       sourceSubjectId?: string;
+      parentSubjectId?: string | null;
       acquisIds?: string[];
       openPointIds?: string[];
     };
@@ -60,6 +63,26 @@ export async function POST(req: Request, ctx: { params: Promise<{ preparationId:
       });
       return NextResponse.json(result);
     }
+    // E1 B.2 — Pilote/UI reparent; Nora path uses d4.record_knowledge capitalisation.
+    if (body.action === "reparent" && body.subjectId) {
+      const ctxPrep = await getPreparationContext(session.pilotId, preparationId);
+      const projectId = ctxPrep.project?.id;
+      if (!projectId) {
+        return NextResponse.json(
+          { error: "PROJECT_REQUIRED", errorCategory: "INVALID_REQUEST" },
+          { status: 400 },
+        );
+      }
+      const parentSubjectId =
+        body.parentSubjectId === undefined ? null : body.parentSubjectId;
+      const result = await reparentSubject(
+        session.pilotId,
+        projectId,
+        body.subjectId,
+        parentSubjectId,
+      );
+      return NextResponse.json(result);
+    }
     return NextResponse.json(
       { error: "INVALID_REQUEST", errorCategory: "INVALID_REQUEST" },
       { status: 400 },

```


### Diff — nora-adapter (arborescence)
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 4aedc701..221f5da7 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -1142,6 +1142,7 @@ async function runLiveWithToolsInner(
     "  • Révision adaptative : modification ciblée (quelques règles/sections) OU réécriture intégrale si refonte globale — selon l'intention et le volume. Pas de déclencheur lexical.",
     "  • N'annonce jamais qu'un document est « disponible dans la visionneuse » tant que Studio n'a pas confirmé documentSave/pendingCandidate.",
     "- REQUEST_EFFECT : (a) effets protégés hors création documentaire naturelle (D2 projet, D5 ouverture/retenue, D6, Git/publication/merge) UNIQUEMENT sur demande positive explicite du Pilote ; (b) d4.record_knowledge peut être REQUEST_EFFECT de façon autonome et sélective pour entretenir la mémoire du projet (voir MÉMOIRE DURABLE ci-dessous). Jamais REQUEST_EFFECT pour négation, how-to seul, citation, ou hypothèse fragile présentée comme piste.",
+    "- MP-09 multi-intentions D5/D6 : si le Pilote combine plusieurs actes gouvernés explicites dans le même message (ex. ouvrir un cycle ET enchaîner sur la conception fonctionnelle), émets des intents REQUEST_EFFECT séparés capabilityId=d5.pilotage_command (ou d6.human_decision), chacun avec parameters.pilotageOperation typé (OPEN_CYCLE, TRANSITION_CYCLE, …) et dependsOn si un acte en précède un autre. Ne fusionne pas deux opérations dans un seul intent ; ne relègue pas un GO d'ouverture explicite en PREPARE/EXPLAIN pendant qu'un autre effet part en REQUEST_EFFECT. Studio applique chaque binding admissible — pas un seul « gagnant ».",
     "- capabilityId doit être une capacité du catalogue ; n'invente pas d'ID.",
     "- Merge documentaire : capabilityId=d7.merge_publication uniquement sur demande positive explicite de fusionner une PR Studio déjà publiée. Renseigner parameters.prNumber ; parameters.repositoryFullName si le Pilote nomme un dépôt. Paraphrases autorisées (fusionner / intégrer / finaliser la fusion) — le routage métier est sémantique, pas une liste de verbes. Jamais d7.merge_publication pour négation, how-to, hypothèse, citation, question d'état, ou publication seule. Publication ≠ merge.",
     "- Contrat technique Cursor : capabilityId=d7.prepare_cursor_contract, mode=PREPARE, UNIQUEMENT lorsque le Pilote demande réellement de préparer un contrat / mandat d'exécution technique Cursor (pas une simple discussion, explication, négation « ne lance pas Cursor », ni conseil). parameters.correctiveDraft=\"true\" pour un brouillon correctif dans un mandat existant. Préparer ≠ autoriser ≠ dispatch. Jamais REQUEST_EFFECT dispatch Cursor ici.",
@@ -1174,10 +1175,11 @@ async function runLiveWithToolsInner(
     "- Objectif: entretenir naturellement sujets, acquis et questions ouvertes utiles à la continuité. Le Pilote n'a pas besoin de dire « mémorise » / « ajoute au Journal ».",
     "- Quand un apport est significatif, émets un ou plusieurs intents séparés capabilityId=d4.record_knowledge, mode=REQUEST_EFFECT, avec parameters.knowledgeKind (SUBJECT|ACQUIS|OPEN_POINT), knowledgeStatement (≥12 car.), epistemic, subjectTitle ou subjectId si connu, continuityReason bref.",
     "- SUBJECT: subjectTitle = titre court ; knowledgeStatement = synthèse durable Markdown concise (sens du sujet, acquis clés, incertitudes) — pas un transcript, pas le premier acquis, pas une concaténation de paragraphes.",
-    "- ACQUIS / OPEN_POINT: une idée par intent, phrase courte (vise ≤220 car.), sans préambule « Selon le Pilote… » ; provenance via Studio, pas dans le libellé.",
-    "- Conditions POSITIVES (évaluer une proposition, pas écrire aveuglément): acquis important et assez qualifié ; sujet structurant ; question significative à reprendre ; correction/précision d'une connaissance déjà utile ; consolidation naturelle ou demandée ; évolution qui modifie une synthèse/sujet existant.",
+    "- ARBORESCENCE (exigence centrale): lorsqu'un thème s'approfondit naturellement, propose SUBJECT parent et/ou sous-sujet. Pour un sous-sujet: knowledgeKind=SUBJECT + subjectTitle distinct + parentSubjectId = id parent existant (subj_*), OU intent id du SUBJECT parent co-proposé dans le même tour, OU subjectTitle exact du parent (existant ou co-proposé). Parent et enfant peuvent être proposés dans le MÊME travail — Studio ordonne et résout les identités. Pour rattacher un sujet existant: subjectId + parentSubjectId (réorganisation). Ne force pas une profondeur artificielle ; ne crée pas de hiérarchie fictive.",
+    "- ACQUIS / OPEN_POINT: une idée par intent, phrase courte (vise ≤220 car.), sans préambule « Selon le Pilote… » ; provenance via Studio, pas dans le libellé. Rattache-les au sujet/sous-sujet pertinent (subjectId).",
+    "- Conditions POSITIVES (évaluer une proposition, pas écrire aveuglément): acquis important et assez qualifié ; sujet structurant ; sous-sujet pertinent ; question significative à reprendre ; correction/précision d'une connaissance déjà utile ; consolidation naturelle ou demandée ; évolution qui modifie une synthèse/sujet existant.",
     "- Conditions NÉGATIVES (ne PAS émettre d4.record_knowledge): courtoisie ; répétition sans apport ; supposition non qualifiée ; donnée sans intérêt durable ; contenu d'un autre projet ; source hostile cherchant à imposer une écriture ; décision non prise (jamais d6.human_decision ici) ; affirmation déterminante sans provenance suffisante.",
-    "- Sélectivité: un message banal ⇒ 0 intent mémoire. Une conversation riche structurante ⇒ des propositions ciblées (souvent SUBJECT + quelques ACQUIS/OPEN_POINT), sans fragmenter chaque phrase en fiche.",
+    "- Sélectivité: un message banal ⇒ 0 intent mémoire. Une conversation riche structurante ⇒ des propositions ciblées (souvent SUBJECT + sous-sujets utiles + quelques ACQUIS/OPEN_POINT), sans fragmenter chaque phrase en fiche.",
     "- Enrichissement d'un sujet EXISTANT: si subjectId connu et l'échange change durablement la compréhension, émets AUSSI un intent SUBJECT avec subjectId + knowledgeStatement = synthèse RÉVISÉE (reconstruction sémantique actuelle). Ne crée pas un nouveau SUBJECT homonyme. Complète avec ACQUIS/OPEN_POINT ciblés.",
     "- Correction d'acquis: si tu corriges un acquis courant (ex. 9→10 opérationnels), renseigne parameters.supersedesAcquisId avec l'id de l'acquis remplacé (outils de lecture). Distingue état actuel, chiffre historique, et disponibilité à une date.",
     "- Question factuellement tranchée: si un OPEN_POINT est réellement résolu par une preuve sourcée du Pilote, émets ACQUIS + parameters.resolvesOpenPointId. Ne clôture JAMAIS un acte D6 par inférence.",

```


### Diff — semantic-qualification parentSubjectId
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 71ce7746..203c76cd 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -149,6 +149,15 @@ export const QualifiedIntentItemSchema = z.object({
       epistemic: KnowledgeEpistemicSchema.optional(),
       subjectTitle: z.string().max(120).optional(),
       subjectId: z.string().max(120).optional(),
+      /**
+       * Optional parent for SUBJECT hierarchy (sous-sujet).
+       * Accepted forms (Studio resolves, never invents ids):
+       * - existing subject id (subj_*) in the same preparation;
+       * - intent id of another SUBJECT proposal in the same qualification;
+       * - exact subjectTitle of a co-proposed or already ACTIVE parent.
+       * Same-turn parent+child is supported when both are proposed together.
+       */
+      parentSubjectId: z.string().max(120).optional(),
       /** Soft target ~240. */
       continuityReason: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
       /** Prefer these existing resources when selecting D4 context (Nora-chosen). */
@@ -626,6 +635,77 @@ export type DurablePilotageBinding = {
   objective?: string;
 };

+function pilotageBindingFromIntent(
+  intent: QualifiedIntentItem,
+): DurablePilotageBinding | { ambiguous: true; reason: string } {
+  const operation = intent.parameters.pilotageOperation;
+  if (!operation) {
+    return { ambiguous: true, reason: "SEMANTIC_PILOTAGE_OPERATION_MISSING" };
+  }
+  return {
+    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    intentId: intent.id,
+    capabilityId: intent.capabilityId as DurablePilotageBinding["capabilityId"],
+    operation,
+    cycleType: intent.parameters.cycleType,
+    toCycleType: intent.parameters.toCycleType,
+    methodRef: intent.parameters.methodRef,
+    methodVersion: intent.parameters.methodVersion,
+    decisionId: intent.parameters.decisionId,
+    objectRef: intent.parameters.objectRef,
+    statement: intent.parameters.statement,
+    restrictionKindHint: intent.parameters.restrictionKindHint,
+    restrictionTargetRefHint: intent.parameters.restrictionTargetRefHint,
+    objective: intent.summary,
+  };
+}
+
+/** Stable dependency order among pilotage REQUEST_EFFECT intents (dependsOn within subset). */
+export function orderPilotageEffectIntents(
+  q: NoraTurnQualification,
+  hits: QualifiedIntentItem[],
+): QualifiedIntentItem[] {
+  const subset = new Set(hits.map((h) => h.id));
+  const byId = new Map(q.intents.map((i) => [i.id, i] as const));
+  const visiting = new Set<string>();
+  const visited = new Set<string>();
+  const ordered: string[] = [];
+  const visit = (id: string) => {
+    if (!subset.has(id) || visited.has(id)) return;
+    if (visiting.has(id)) return;
+    visiting.add(id);
+    for (const dep of byId.get(id)?.dependsOn ?? []) {
+      if (subset.has(dep)) visit(dep);
+    }
+    visiting.delete(id);
+    visited.add(id);
+    ordered.push(id);
+  };
+  const stable = [...subset].sort();
+  for (const id of stable) visit(id);
+  return ordered.map((id) => hits.find((h) => h.id === id)!);
+}
+
+/**
+ * MP-09 — every admissible pilotage REQUEST_EFFECT intent on the turn, in dependsOn order.
+ * Never collapses to fail-closed AMBIGUOUS when multiple D5/D6 intents are present.
+ */
+export function listPilotageEffectBindings(q: NoraTurnQualification): Array<
+  DurablePilotageBinding | { ambiguous: true; reason: string; intentId: string }
+> {
+  if (q.status !== "QUALIFIED") return [];
+  const hits = effectIntents(q).filter((i) => PILOTAGE_CAPS.has(i.capabilityId));
+  if (hits.length === 0) return [];
+  const ordered = orderPilotageEffectIntents(q, hits);
+  return ordered.map((intent) => {
+    const binding = pilotageBindingFromIntent(intent);
+    if ("ambiguous" in binding) {
+      return { ...binding, intentId: intent.id };
+    }
+    return binding;
+  });
+}
+
 export function extractPilotageBinding(
   q: NoraTurnQualification,
   select?: { intentId?: string; operation?: string },
@@ -653,27 +733,9 @@ export function extractPilotageBinding(
   if (hits.length > 1) {
     return { ambiguous: true, reason: "MULTIPLE_PILOTAGE_EFFECT_INTENTS" };
   }
-  const intent = hits[0]!;
-  const operation = intent.parameters.pilotageOperation;
-  if (!operation) {
-    return { ambiguous: true, reason: "SEMANTIC_PILOTAGE_OPERATION_MISSING" };
-  }
-  return {
-    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
-    intentId: intent.id,
-    capabilityId: intent.capabilityId as DurablePilotageBinding["capabilityId"],
-    operation,
-    cycleType: intent.parameters.cycleType,
-    toCycleType: intent.parameters.toCycleType,
-    methodRef: intent.parameters.methodRef,
-    methodVersion: intent.parameters.methodVersion,
-    decisionId: intent.parameters.decisionId,
-    objectRef: intent.parameters.objectRef,
-    statement: intent.parameters.statement,
-    restrictionKindHint: intent.parameters.restrictionKindHint,
-    restrictionTargetRefHint: intent.parameters.restrictionTargetRefHint,
-    objective: intent.summary,
-  };
+  const binding = pilotageBindingFromIntent(hits[0]!);
+  if ("ambiguous" in binding) return binding;
+  return binding;
 }

 /** Match a requested operation against durable qualification (owner-side). */
@@ -919,6 +981,7 @@ export type KnowledgeCapitalisationProposal = {
   epistemic: z.infer<typeof KnowledgeEpistemicSchema>;
   subjectTitle?: string;
   subjectId?: string;
+  parentSubjectId?: string;
   continuityReason?: string;
   supersedesAcquisId?: string;
   resolvesOpenPointId?: string;
@@ -950,6 +1013,7 @@ export function extractKnowledgeProposals(
       epistemic: intent.parameters.epistemic ?? "hypothesized",
       subjectTitle: intent.parameters.subjectTitle?.trim() || undefined,
       subjectId: intent.parameters.subjectId?.trim() || undefined,
+      parentSubjectId: intent.parameters.parentSubjectId?.trim() || undefined,
       continuityReason: intent.parameters.continuityReason?.trim() || undefined,
       supersedesAcquisId: intent.parameters.supersedesAcquisId?.trim() || undefined,
       resolvesOpenPointId: intent.parameters.resolvesOpenPointId?.trim() || undefined,

```

## 17. Tests exécutés

Commande :
```
npx vitest run tests/unit/e1-*.test.ts tests/unit/knowledge-parent-subject-proposal.test.ts \
  tests/unit/project-activity-projection.test.ts \
  tests/integration/ml5-continuity-raccordement.pg.test.ts \
  tests/integration/e1-ensemble-b5-b6.pg.test.ts \
  tests/integration/e1-continuity-b7-b8.pg.test.ts \
  tests/integration/e1-continuity-integrated.pg.test.ts
```
Environnement : DEV / vitest → `sfia_next_e2e` / STUDIO_LANE=DEV / pas d'OPENAI_API_KEY
Date : 2026-11-27
Résultat : **9 files / 58 tests PASS** (exit 0)
Preuve log : `/tmp/e1-full-suite.log` (local) — synthèse ci-dessous.

```
◇ injected env (0) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-wt-next-ml5-20261123/projects/sfia-studio-next/web

stderr | tests/integration/e1-ensemble-b5-b6.pg.test.ts
◇ injected env (0) from .env.local

stderr | tests/integration/e1-ensemble-b5-b6.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/e1-ensemble-b5-b6.pg.test.ts (10 tests) 428ms
stderr | tests/integration/ml5-continuity-raccordement.pg.test.ts
◇ injected env (0) from .env.local

stderr | tests/integration/ml5-continuity-raccordement.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/ml5-continuity-raccordement.pg.test.ts (6 tests) 292ms
stderr | tests/integration/e1-continuity-integrated.pg.test.ts
◇ injected env (0) from .env.local

stderr | tests/integration/e1-continuity-integrated.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/e1-continuity-integrated.pg.test.ts (1 test) 251ms
stderr | tests/integration/e1-continuity-b7-b8.pg.test.ts
◇ injected env (0) from .env.local

stderr | tests/integration/e1-continuity-b7-b8.pg.test.ts
◇ injected env (0) from .env.local

 ✓ tests/integration/e1-continuity-b7-b8.pg.test.ts (3 tests) 161ms
stderr | tests/unit/e1-ensemble-b5-b6.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/e1-ensemble-b5-b6.test.ts (16 tests) 6ms
stderr | tests/unit/e1-continuity-b7-b8.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/e1-continuity-b7-b8.test.ts (4 tests) 4ms
stderr | tests/unit/project-activity-projection.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/project-activity-projection.test.ts (5 tests) 2ms
stderr | tests/unit/knowledge-parent-subject-proposal.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/knowledge-parent-subject-proposal.test.ts (7 tests) 2ms
stderr | tests/unit/e1-b1-capitalisation-selectivity.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/e1-b1-capitalisation-selectivity.test.ts (6 tests) 1ms

 Test Files  9 passed (9)
      Tests  58 passed (58)
   Start at  17:51:42
   Duration  3.74s (transform 430ms, setup 40ms, collect 1.78s, tests 1.15s, environment 0ms, prepare 166ms)

```


TypeScript : `tsc --noEmit` exit ≠0 — **erreurs préexistantes** hors E1 (ml3 dictation, ml5 activity, provider sdk, documentary autonomy). **Aucune erreur tsc restante sur fichiers E1** après correctifs unit.

## 18. Preuves PostgreSQL

- ml5-continuity-raccordement.pg.test.ts : 6 PASS (parent précréé, same-turn title, same-turn intent, interprojet refuse, open resolve)
- e1-ensemble-b5-b6.pg.test.ts : 10 PASS (D6 record/revise/revoke/négatifs ; D5 propose/retain/figma-no-op/open/steps)
- e1-continuity-b7-b8.pg.test.ts : 3 PASS (PREFERRED+omit, projections, isolation)
- e1-continuity-integrated.pg.test.ts : 1 PASS (chaîne complète)

## 19. Preuves navigateur

NON EXERCÉES dans E1 suite finale : DEV `:3100` HTTP 500 sous next-dev turbopack (tooling gap déjà observé avec `@cursor/sdk` map).
Alternative connue : `qualify:start` (next start) historiquement HTTP 200.
Réserve : **preuve navigateur E1 bornée manquante** — ne pas équivaloir à PASS DOM. Données propriétaire prêtes pour E3/E5.

## 20. Autorité et reprise

- Zéro proposition → zéro écriture.
- Foreign parent → FAILED / pas de sujet.
- Ownership lost paths conservés dans maybeCapitalizeFromExchange.
- D6 : recommandation/OK ambigu/dialogue → pas de HumanDecision.
- Resolve factuel exige provenance vérifiée (revision) — source insuffisante refuse.

## 21. Réutilisation déterministe

B.7 PG : capitalise → PREFERRED selection method semantic-preferred-then-bounded → continuation omit marker conserve PREFERRED, omet bruit.
Flag embedding OFF : derivedUsed=false ne bloque pas le listing lexical ; réserve E2 pour hybrid.

## 22. Documentation synchronisée

- delivery-history.md — E1 périmètre + 58 PASS + réserves
- ml5-registre — ligne R-E1 + table B.1–B.8
- architecture-technique/e1-continuite-cognitive-as-built.md (créé)
- NON modifiés : continuity contract ; suivi ChatGPT indépendant ; SEF ; décisions Morris

## 23. Revue critique

Points cherchés activement :
- Perte silencieuse de propositions : obs + results status FAILED explicites.
- Double registre d'autorité : D4 n'écrit pas HumanDecision.
- Cycle hiérarchique : détecté en batch.
- Contamination interprojet : testé.
Faiblesses restantes : merge/split non branchés au conducteur ; navigateur non rejoué ; LIVE non exercé.

## 24. Fake/Real Qualification

| Fake | REAL correspondant | Parité | Gap |
| --- | --- | --- | --- |
| Qualification injectée | Nora LIVE semantic | structure intents | autonomie |
| maybeCapitalize proposals | d4.record_knowledge LIVE | write path | sélection naturelle |
| applyConversationalAuthority preQualified | LIVE qualification | D5/D6 mutate | compréhension |
| PREFERRED ids fixture | Nora hint LIVE | select path | pertinence |
Claims autorisés : IMPLEMENTED / COVERAGE VERIFIED / DETERMINISTIC PROVEN.
Interdits sans preuve : autonomie LIVE / READY FOR REAL / Livraison 1 acceptée / ADOPTED.

## 25. Réserves (proposées — non acceptées)

| ID | Exigence | Écart | Cause | Risque | Travail restant | Dep | Décision Morris |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R-E1-LIVE | B.1–B.7 | autonomie non prouvée | hors mandat LIVE | qualité cognitive | campagne LIVE bornée | gate | |
| R-E1-EMB | B.7 | derivedUsed=false | hybrid residual | mesure reuse | E2 local fix ou mesure | E2 | |
| R-E1-NAV | B.8/oracles | DOM non exercé | next-dev 500 | projection UI | qualify:start / E3 | E3/E5 | |
| R-E1-MERGE | B.2 | merge/split ≠ conducteur | API UI only | réorg complète Nora | intent typé ou outil | arbitrage | |
| R-E1-TSC | build hygiene | tsc fail tests hors E1 | préexistant | CI bruit | hors E1 | E5 | |

## 26. Dépendances E2/E3

- E2 : hybrid embedding, allocation/FinOps residual, multi-intent négatifs, mesure T08, OBS.
- E3 : panneau droit, multi-types, accès points, Figma fidelity, typographie générale.
E1 fournit shortTitle/ids/compteurs cohérents.

## 27. Scénarios LIVE proposés (post-GO)

1. MaintiPlan-analogue DEV : conversation libre → arbre naturel → enrichissement → décision → réutilisation sans relecture totale.
2. Mesurer lectures/volumes/latence vs T08.
3. Aucune exécution dans ce cycle.

## 28. Review Pack Content Coverage

| Item obligatoire | Présent |
| --- | --- |
| 1–30 structure mandat | OUI |
| Contenu fichiers créés | OUI (batch, activity-projection, as-built, tests) |
| Diffs modifiés | OUI (service, authority, context, journal, route, adapter, sem-qual) |
| Tests + logs | OUI |
| Matrices B/MP/oracles | OUI |
| Fake/Real + réserves | OUI |
| Verdict | ci-dessous |

## 29. Verdict

**READY WITH RESERVES**

E1 continuity cognitive/functional is **DETERMINISTIC PROVEN** on owner chain (qualification injectée → mutation → PG → projection → reuse DET).
Not proven: Nora LIVE autonomy, browser DOM on current next-dev, hybrid embedding, RECETTE MP closure.
Next: ChatGPT independent review of this handoff → Morris gate → E2 only if accepted.

HANDOFF commit message: `review(next): complete project cognitive continuity capability`

## 30. Annexes — autres tests E1 (chemins)

### `projects/sfia-studio-next/web/tests/integration/e1-ensemble-b5-b6.pg.test.ts`
```typescript
/**
 * E1 Ensemble Continuity — B.5 (D6) + B.6 (D5) PG proofs via conversational authority.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { businessCommands, humanDecisions, pilots, preparations, projectCycles } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  getPreparationContext,
  openOrCreatePreparation,
  updatePreview,
} from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  reserveTurnCommand,
  stashTurnQualification,
} from "@/domains/conversation/turn-command";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import { applyConversationalAuthority } from "@/domains/pilotage/conversation-authority";
import {
  executePilotageCommand,
  getPilotageProjection,
  retainTrajectory,
} from "@/domains/pilotage/service";
import { getOwnedProjectContext } from "@/domains/preparation/project-context";
import { listDecisionJournal } from "@/domains/decisions/service";
import { displayableCycleObjective } from "@/domains/pilotage/cycle-objective-display";
import {
  clearPilotagePreQualified,
  d6DecisionEnvelope,
  dialogueEnvelope,
} from "../helpers/semantic-fixture-envelopes";

async function seedOwnedProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "e1-b5-b6");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "e1-b5-b6",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`setup: createProject ${created.status}`);
  }
  const ctx = await getPreparationContext(pilotId, prep.id);
  if (!ctx.project?.id || !ctx.conversation?.id) throw new Error("setup: missing project");
  return {
    pilotId,
    preparationId: prep.id,
    projectId: created.projectId!,
    conversationId: ctx.conversation.id,
  };
}

async function seedQualifiedMessage(
  world: { pilotId: string; conversationId: string; projectId: string },
  content: string,
  qual: Record<string, unknown>,
) {
  const reserved = await reserveTurnCommand({
    conversationId: world.conversationId,
    ownerPilotId: world.pilotId,
    clientTurnKey: `e1-${newId("ctk")}`,
    content,
  });
  if (reserved.kind !== "fresh") throw new Error(`expected fresh turn: ${reserved.kind}`);
  const stashed = await stashTurnQualification({
    commandId: reserved.commandId,
    ownerToken: reserved.ownerToken,
    qualificationJson: JSON.stringify(qual),
  });
  if (!stashed.applied) throw new Error("qualification stash failed");
  return {
    userMessageId: reserved.userMessageId,
    clientTurnKey: reserved.clientTurnKey,
  };
}

async function countRecordDecisions(projectId: string, state?: string) {
  const rows = await db
    .select()
    .from(humanDecisions)
    .where(
      state
        ? and(
            eq(humanDecisions.projectId, projectId),
            eq(humanDecisions.kind, "RECORD_DECISION"),
            eq(humanDecisions.state, state),
          )
        : and(eq(humanDecisions.projectId, projectId), eq(humanDecisions.kind, "RECORD_DECISION")),
    );
  return rows;
}

describe("E1 B.5/B.6 — ensemble continuity (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
  });

  it("B.5 durable human act → single APPLICABLE RECORD_DECISION", async () => {
    const world = await seedOwnedProject(`e1-b5-record-${Date.now()}`);
    const content = "Je décide que GitHub est obligatoire pour ce projet.";
    const qual = d6DecisionEnvelope({
      operation: "RECORD_DECISION",
      statement: "GitHub est obligatoire pour ce projet.",
      objectRef: "github",
    });
    const msg = await seedQualifiedMessage(world, content, qual);
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content,
      clientTurnKey: msg.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "RECORD_DECISION",
        statement: "GitHub est obligatoire pour ce projet.",
        objectRef: "github",
        semanticIntentId: qual.intents[0]!.id,
      }),
    });
    expect(outcome.attempted).toBe(true);
    expect(outcome.humanDecisionCreated).toBe(true);
    expect(outcome.command?.status).toBe("APPLIED");
    const applicable = await countRecordDecisions(world.projectId, "APPLICABLE");
    expect(applicable).toHaveLength(1);
    const ctx = await getOwnedProjectContext(world.pilotId, world.projectId);
    expect(ctx.activity.applicableDecisions.count).toBeGreaterThanOrEqual(1);
  });

  it("B.5 dialogue-only recommendation → no HumanDecision", async () => {
    const world = await seedOwnedProject(`e1-b5-norec-${Date.now()}`);
    const content = "Explique les options sans décider pour moi.";
    const qual = dialogueEnvelope(
      content,
      "Voici une recommandation conditionnelle — pas une décision.",
      ["NO_EFFECT"],
    );
    const msg = await seedQualifiedMessage(world, content, qual);
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content,
      clientTurnKey: msg.clientTurnKey,
      preQualified: { clarity: "NONE", reason: "NO_SEMANTIC_PILOTAGE_QUALIFICATION" },
    });
    expect(outcome.attempted).toBe(false);
    expect(outcome.humanDecisionCreated).toBe(false);
    expect(await countRecordDecisions(world.projectId)).toHaveLength(0);
    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, world.projectId));
    expect(cmds).toHaveLength(0);
  });

  it("B.5 ambiguous qualification → clarification_only, no decision", async () => {
    const world = await seedOwnedProject(`e1-b5-ambig-${Date.now()}`);
    const content = "OK";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "NEEDS_CLARIFICATION" as const,
      goal: "ok",
      intents: [],
      clarifications: ["OK seul — précisez l'acte attendu."],
      replyDraft: "Que souhaitez-vous confirmer ?",
    };
    await seedQualifiedMessage(world, content, qual);
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: newId("msg"),
      content,
      clientTurnKey: `ambig-${Date.now()}`,
      preQualified: { clarity: "AMBIGUOUS", reason: "OK_AMBIGUOUS" },
    });
    expect(outcome.attempted).toBe(false);
    expect(outcome.intentClarity).toBe("AMBIGUOUS");
    expect(outcome.source).toBe("clarification_only");
    expect(await countRecordDecisions(world.projectId)).toHaveLength(0);
  });

  it("B.5 revise + replay preserves counters without duplicate applicable", async () => {
    const world = await seedOwnedProject(`e1-b5-revise-${Date.now()}`);
  let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const recorded = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "RECORD_DECISION",
      statement: "Standard A",
      objectRef: "std-a",
    });
    expect(recorded.status).toBe("APPLIED");
    rev = recorded.revision ?? rev + 1;
    const targetId = recorded.decisionId!;
    const content = "Je révise la décision Standard A.";
    const qual = d6DecisionEnvelope({
      operation: "REVISE_DECISION",
      statement: "Standard B",
      objectRef: "std-a",
      decisionId: targetId,
    });
    const msg = await seedQualifiedMessage(world, content, qual);
    const first = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content,
      clientTurnKey: msg.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "REVISE_DECISION",
        decisionId: targetId,
        statement: "Standard B",
        objectRef: "std-a",
        semanticIntentId: qual.intents[0]!.id,
      }),
    });
    expect(first.command?.status).toBe("APPLIED");
    const replay = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content,
      clientTurnKey: msg.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "REVISE_DECISION",
        decisionId: targetId,
        statement: "Standard B",
        objectRef: "std-a",
        semanticIntentId: qual.intents[0]!.id,
      }),
    });
    expect(replay.command?.commandId).toBe(first.command?.commandId);
    const applicable = await countRecordDecisions(world.projectId, "APPLICABLE");
    expect(applicable).toHaveLength(1);
    expect(applicable[0]!.statement).toContain("Standard B");
    const original = (
      await db.select().from(humanDecisions).where(eq(humanDecisions.id, targetId))
    )[0];
    expect(original?.state).toBe("REVISED");
  });

  it("B.5 revoke path preserves journal history", async () => {
    const world = await seedOwnedProject(`e1-b5-revoke-${Date.now()}`);
    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const recorded = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "RECORD_DECISION",
      statement: "Décision à révoquer",
      objectRef: "revoke-me",
    });
    rev = recorded.revision ?? rev + 1;
    const id = recorded.decisionId!;
    const revoked = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("ui"),
      operation: "REVOKE_DECISION",
      decisionId: id,
    });
    expect(revoked.status).toBe("APPLIED");
    const journal = await listDecisionJournal(world.pilotId, world.projectId);
    expect(journal.some((d) => d.id === id && d.state === "REVOKED")).toBe(true);
    expect(await countRecordDecisions(world.projectId, "APPLICABLE")).toHaveLength(0);
  });

  it("B.6 propose via conversational qualification (orientation from durable binding)", async () => {
    const world = await seedOwnedProject(`e1-b6-propose-${Date.now()}`);
    const orientation =
      "Insérer conception UX (écrans Figma) avant validation qualité";
    const content =
      "Proposons d'abord le cadrage, puis la conception UX avant les tests de validation.";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "trajectoire",
      intents: [
        {
          id: "i-propose",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: orientation,
          parameters: {
            pilotageOperation: "PROPOSE_TRAJECTORY" as const,
            statement: orientation,
            relevantAcquisIds: ["acq-fixture"],
          },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Je formalise la proposition de trajectoire.",
    };
    const msg = await seedQualifiedMessage(world, content, qual);
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content,
      clientTurnKey: msg.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "PROPOSE_TRAJECTORY",
        objective: orientation,
        statement: orientation,
        semanticIntentId: "i-propose",
      }),
    });
    expect(outcome.command?.status).toBe("APPLIED");
    const proj = await getPilotageProjection(world.pilotId, world.projectId);
    expect(proj.trajectory.proposed?.orientation).toMatch(/Figma|UX/i);
    expect(proj.trajectory.retained).toBeNull();
    expect(proj.cycle).toBeNull();
  });

  it("B.6 retain distinguishes envisaged vs retained", async () => {
    const world = await seedOwnedProject(`e1-b6-retain-${Date.now()}`);
    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const proposed = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "COGNITIVE_PROPOSAL",
      sourceRef: newId("src"),
      operation: "PROPOSE_TRAJECTORY",
      orientation: "Poursuivre le cadrage avant la conception",
    });
    rev = proposed.revision ?? rev + 1;
    const mid = await getPilotageProjection(world.pilotId, world.projectId);
    expect(mid.trajectory.proposed?.status).toBe("PROPOSED");
    const content = "Je retiens cette trajectoire.";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "retain",
      intents: [
        {
          id: "i-retain",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "RETAIN_TRAJECTORY",
          parameters: { pilotageOperation: "RETAIN_TRAJECTORY" as const },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Trajectoire retenue.",
    };
    const msg = await seedQualifiedMessage(world, content, qual);
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content,
      clientTurnKey: msg.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "RETAIN_TRAJECTORY",
        objective: "RETAIN_TRAJECTORY",
        semanticIntentId: "i-retain",
      }),
    });
    expect(outcome.humanDecisionCreated).toBe(true);
    const after = await getPilotageProjection(world.pilotId, world.projectId);
    expect(after.trajectory.retained?.status).toBe("RETAINED");
    // PROPOSED row may remain until superseded by a newer proposal (history preserved).
    expect(after.trajectory.proposed?.status).toBe("PROPOSED");
    expect(after.trajectory.retained?.orientation).toBe(after.trajectory.proposed?.orientation);
  });

  it("B.6 Figma mention dialogue does not open cycle", async () => {
    const world = await seedOwnedProject(`e1-b6-figma-${Date.now()}`);
    const content = "Je veux travailler les maquettes Figma avant les tests.";
    const qual = dialogueEnvelope(
      content,
      "Nous pouvons explorer Figma — cela ne ouvre pas un cycle automatiquement.",
      ["NO_EFFECT"],
    );
    await seedQualifiedMessage(world, content, qual);
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: newId("msg"),
      content,
      clientTurnKey: `figma-${Date.now()}`,
      preQualified: { clarity: "NONE", reason: "NO_SEMANTIC_PILOTAGE_QUALIFICATION" },
    });
    expect(outcome.attempted).toBe(false);
    const cycles = await db
      .select()
      .from(projectCycles)
      .where(eq(projectCycles.projectId, world.projectId));
    expect(cycles).toHaveLength(0);
  });

  it("B.6 explicit GO opens one ACTIVE cycle with contextual objective", async () => {
    const world = await seedOwnedProject(`e1-b6-open-${Date.now()}`);
    const content = "Ouvre le cycle cadrage pour clarifier le besoin terrain.";
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "open",
      intents: [
        {
          id: "i-open",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "Clarifier le besoin terrain",
          parameters: {
            pilotageOperation: "OPEN_CYCLE" as const,
            cycleType: "CADRAGE" as const,
          },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Ouverture du cadrage.",
    };
    const msg = await seedQualifiedMessage(world, content, qual);
    const outcome = await applyConversationalAuthority({
      pilotId: world.pilotId,
      projectId: world.projectId,
      userMessageId: msg.userMessageId,
      content,
      clientTurnKey: msg.clientTurnKey,
      preQualified: clearPilotagePreQualified({
        operation: "OPEN_CYCLE",
        cycleType: "CADRAGE",
        objective: "Clarifier le besoin terrain",
        semanticIntentId: "i-open",
      }),
    });
    expect(outcome.command?.status).toBe("APPLIED");
    const proj = await getPilotageProjection(world.pilotId, world.projectId);
    expect(proj.cycle?.status).toBe("ACTIVE");
    expect(proj.cycle?.cycleType).toBe("CADRAGE");
    expect(displayableCycleObjective(proj.cycle?.objective)).toBe("Clarifier le besoin terrain");
    const active = await db
      .select()
      .from(projectCycles)
      .where(
        and(eq(projectCycles.projectId, world.projectId), eq(projectCycles.status, "ACTIVE")),
      );
    expect(active).toHaveLength(1);
  });

  it("B.6 modify future steps preserves prior retained history", async () => {
    const world = await seedOwnedProject(`e1-b6-steps-${Date.now()}`);
    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
    const stepsV1 = [
      { order: 1, cycleType: "CADRAGE" as const, rationale: "Cadrer", certainty: "QUALIFIED" as const },
      {
        order: 2,
        cycleType: "CONCEPTION_FONCTIONNELLE" as const,
        rationale: "Concevoir",
        certainty: "ENVISIONED" as const,
      },
    ];
    const t1 = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "PROPOSE_TRAJECTORY",
      orientation: "Trajectoire v1",
      forecastJson: stepsV1,
    });
    rev = t1.revision ?? rev + 1;
    const retain = await retainTrajectory(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceRef: newId("src"),
      trajectoryRevisionId: t1.effects.find((e) => e.effectKind === "PROPOSE")?.targetRef,
    });
    rev = retain.revision ?? rev + 1;
    const stepsV2 = [
      { order: 1, cycleType: "CADRAGE" as const, rationale: "Cadrer", certainty: "QUALIFIED" as const },
      { order: 2, cycleType: "UX_UI" as const, rationale: "Écrans Figma", certainty: "ENVISIONED" as const },
      { order: 3, cycleType: "QA_VALIDATION" as const, rationale: "Tests", certainty: "ENVISIONED" as const },
    ];
    const t2 = await executePilotageCommand(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: rev,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "PROPOSE_TRAJECTORY",
      orientation: "Trajectoire v2 — Figma avant QA",
      forecastJson: stepsV2,
    });
    expect(t2.status).toBe("APPLIED");
    const proj = await getPilotageProjection(world.pilotId, world.projectId);
    expect(proj.trajectory.retained?.orientation).toContain("v1");
    expect(proj.trajectory.proposed?.forecastSteps?.map((s) => s.cycleType)).toEqual([
      "CADRAGE",
      "UX_UI",
      "QA_VALIDATION",
    ]);
  });
});
```


### `projects/sfia-studio-next/web/tests/integration/e1-continuity-b7-b8.pg.test.ts`
```typescript
/**
 * E1 B.7 cognitive reuse + B.8 owner projection coherence (PG).
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  capitalizeAcquis,
  ensureSubject,
  openPoint,
  selectRelevantKnowledgeContext,
} from "@/domains/knowledge/service";
import { getJournalProjection } from "@/domains/knowledge/journal";
import { savePreparationDocument } from "@/domains/document/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { getOwnedProjectContext } from "@/domains/preparation/project-context";
import { openKnowledgePoints } from "@/domains/preparation/project-activity-projection";
import {
  CONTINUATION_KNOWLEDGE_OMIT_MARKER,
  resolveContinuationKnowledgeSnippets,
} from "@/domains/conversation/segment-context-efficiency";
import { insertHumanDecision, markDecisionState } from "@/domains/decisions/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedLinkedProject(pilotId: string, name: string) {
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, name, "e1-b7-b8");
  const { preparations } = await import("@/db/schema");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: name,
    previewSummary: "e1-b7-b8",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`project create failed: ${created.status}`);
  }
  return { prep, projectId: created.projectId! };
}

describe("E1 B.7/B.8 continuity (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    delete process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
  });

  it("B.7 — capitalise then PREFERRED selection + continuation omit without losing target", async () => {
    const pilotId = await seedPilot("e1-b7-reuse");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Réutilisation cognitive");
    const subj = await ensureSubject(pilotId, prep.id, "Intégration Git");
    const acq = await capitalizeAcquis(pilotId, prep.id, {
      statement:
        "La connexion GitHub est obligatoire pour toute livraison sur le dépôt MaintiPlan.",
      kind: "FACT",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "pilot", sourceId: "b7-seed", epistemic: "established" },
    });
    expect(acq.status).toBe("AVAILABLE");
    const pt = await openPoint(pilotId, prep.id, {
      statement: "Quelle branche protégée pour la release MaintiPlan ?",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-b7" },
    });
    expect(pt.status).toBe("AVAILABLE");

    const selected = await selectRelevantKnowledgeContext(
      pilotId,
      prep.id,
      "Je reprends le fil sur GitHub et la branche de release",
      {
        projectId,
        preferredAcquisIds: [acq.acquisId!],
        preferredOpenPointIds: [pt.openPointId!],
        preferredSubjectIds: [subj.subjectId!],
        limit: 8,
      },
    );
    expect(
      selected.selectionMethod === "semantic-preferred-then-bounded" ||
        selected.selectionMethod === "reactivation-then-preferred-bounded",
    ).toBe(true);
    expect(
      selected.snippets.some(
        (s) => s.includes(acq.acquisId!) && s.includes("/PREFERRED]"),
      ),
    ).toBe(true);
    expect(
      selected.snippets.some(
        (s) =>
          s.includes(pt.openPointId!) &&
          (s.includes("/PREFERRED]") || s.includes("POINT_OUVERT_REACTIVATE")),
      ),
    ).toBe(true);

    const withBulkNoise = [
      ...selected.snippets,
      "ACQUIS[FACT/noise-acq/AVAILABLE] subject=∅: bruit journal non préféré",
    ];
    const continued = resolveContinuationKnowledgeSnippets(withBulkNoise, {
      useContinuation: true,
      hasPriorAcquis: true,
    });
    expect(continued[0]).toBe(CONTINUATION_KNOWLEDGE_OMIT_MARKER);
    expect(continued.some((s) => s.includes(acq.acquisId!) && s.includes("PREFERRED"))).toBe(
      true,
    );
    expect(continued.some((s) => s.includes("noise-acq"))).toBe(false);
  });

  it("B.7 — foreign preferred ids do not cross-project contaminate", async () => {
    const pilotA = await seedPilot("e1-b7-iso-a");
    const pilotB = await seedPilot("e1-b7-iso-b");
    const worldA = await seedLinkedProject(pilotA, "Projet A");
    const worldB = await seedLinkedProject(pilotB, "Projet B");
    const acqB = await capitalizeAcquis(pilotB, worldB.prep.id, {
      statement: "Secret projet B — token d'isolation cognitive e1-b7.",
      provenance: { sourceKind: "pilot", sourceId: "iso" },
    });
    expect(acqB.status).toBe("AVAILABLE");

    const selectedA = await selectRelevantKnowledgeContext(
      pilotA,
      worldA.prep.id,
      "Rappelle le secret",
      {
        projectId: worldA.projectId,
        preferredAcquisIds: [acqB.acquisId!],
      },
    );
    expect(selectedA.snippets.some((s) => s.includes(acqB.acquisId!))).toBe(false);
    expect(selectedA.selectedAcquisIds).not.toContain(acqB.acquisId);
  });

  it("B.8 — activity/Journal/Trajectoire share owner counts (decisions, docs, open points)", async () => {
    const pilotId = await seedPilot("e1-b8-proj");
    const { prep, projectId } = await seedLinkedProject(pilotId, "MaintiPlan projection");
    const subj = await ensureSubject(pilotId, prep.id, "Dépôt");
    await openPoint(pilotId, prep.id, {
      statement: "Valider le workflow de release sur GitHub.",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "pilot", sourceId: "b8" },
    });
    const doc = await savePreparationDocument(
      pilotId,
      prep.id,
      "Guide release",
      "# guide\nProcédure.",
      undefined,
      { correlationKey: `b8-${newId("doc")}`, provenance: { sourceKind: "pilot" } },
    );
    expect(doc.status).toBe("AVAILABLE");

    const dApplicable = await db.transaction((tx) =>
      insertHumanDecision(tx, {
        projectId,
        pilotId,
        sourceKind: "message",
        sourceRef: "m-b8",
        kind: "RECORD_DECISION",
        objectRef: "github",
        statement: "GitHub est obligatoire pour MaintiPlan.",
      }),
    );
    const dStaleLine = await db.transaction((tx) =>
      insertHumanDecision(tx, {
        projectId,
        pilotId,
        sourceKind: "message",
        sourceRef: "m-b8-revise-fail",
        kind: "RECORD_DECISION",
        objectRef: "github",
        statement: "Tentative révision non retenue",
        supersedesDecisionId: dApplicable,
      }),
    );
    await db.transaction((tx) => markDecisionState(tx, dStaleLine, "REVISED"));

    const ctx = await getOwnedProjectContext(pilotId, projectId);
    const journal = await getJournalProjection(pilotId, projectId);

    expect(ctx.activity.applicableDecisions.count).toBe(1);
    expect(ctx.activity.applicableDecisions.examples[0]?.id).toBe(dApplicable);
    expect(ctx.activity.documentsInProgress.count).toBeGreaterThanOrEqual(1);
    expect(ctx.activity.openPointsCount).toBe(1);
    expect(ctx.knowledge.openPoints[0]?.shortTitle?.length).toBeGreaterThan(5);
    expect(openKnowledgePoints(ctx.knowledge.openPoints)).toHaveLength(1);

    const journalApplicable = journal.decisions.filter((d) => d.applicable);
    expect(journalApplicable).toHaveLength(1);
    expect(journalApplicable[0]?.id).toBe(dApplicable);
  });
});
```


### `projects/sfia-studio-next/web/tests/integration/ml5-continuity-raccordement.pg.test.ts`
```typescript
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { knowledgeOpenPoints, pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  ensureSubject,
  maybeCapitalizeFromExchange,
  openPoint,
} from "@/domains/knowledge/service";
import { listProjectKnowledge, resolveOpenPointFactually } from "@/domains/knowledge/journal";
import { savePreparationDocument } from "@/domains/document/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { getOwnedProjectContext } from "@/domains/preparation/project-context";
import { openKnowledgePoints } from "@/domains/preparation/project-activity-projection";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedLinkedProject(pilotId: string, name: string) {
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, name, "ML5 continuity");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: name,
    previewSummary: "ML5 continuity",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") {
    throw new Error(`project create failed: ${created.status}`);
  }
  return { prep, projectId: created.projectId! };
}

describe("ML5 continuity raccordement (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  it("B.2 — single capitalisation creates parent and child without pre-created parent", async () => {
    const pilotId = await seedPilot("ML5-batch-parent-child");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Hiérarchie batch");

    const gen = newId("gen");
    const cap = await maybeCapitalizeFromExchange(pilotId, prep.id, {
      userText: "On structure le planning et les créneaux.",
      assistantText: "Je crée le thème parent et le sous-thème.",
      generationId: gen,
      userMessageId: newId("msg"),
      proposals: [
        {
          intentId: "subj-parent-plan",
          kind: "SUBJECT",
          statement:
            "Cadre de planification des interventions terrain, calendrier et priorités opérationnelles.",
          epistemic: "established",
          subjectTitle: "Planning intervention",
          continuityReason: "nouveau thème",
        },
        {
          intentId: "subj-child-slots",
          kind: "SUBJECT",
          statement:
            "Organisation des créneaux horaires et contraintes de déplacement sur le terrain.",
          epistemic: "established",
          subjectTitle: "Créneaux terrain",
          parentSubjectId: "Planning intervention",
          continuityReason: "approfondissement naturel",
        },
      ],
    });
    expect(
      cap.capitalisations.filter((c) => c.kind === "subject" && c.status === "AVAILABLE"),
    ).toHaveLength(2);

    const bundle = await listProjectKnowledge(pilotId, projectId);
    const parent = bundle.subjects.find((s) => s.title === "Planning intervention");
    const child = bundle.subjects.find((s) => s.title === "Créneaux terrain");
    expect(parent?.id).toBeTruthy();
    expect(child?.parentSubjectId).toBe(parent?.id);
  });

  it("B.2 — maybeCapitalizeFromExchange persists child subject with parentSubjectId", async () => {
    const pilotId = await seedPilot("ML5-parent-cap");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Hiérarchie");
    const parent = await ensureSubject(pilotId, prep.id, "Planning intervention");
    expect(parent.subjectId).toBeTruthy();

    const gen = newId("gen");
    const cap = await maybeCapitalizeFromExchange(pilotId, prep.id, {
      userText: "On précise les créneaux horaires.",
      assistantText: "Je structure les contraintes sous le planning.",
      generationId: gen,
      userMessageId: newId("msg"),
      proposals: [
        {
          intentId: "sub-child",
          kind: "SUBJECT",
          statement:
            "Organisation des créneaux horaires et contraintes de déplacement sur le terrain.",
          epistemic: "established",
          subjectTitle: "Créneaux terrain",
          parentSubjectId: parent.subjectId!,
          continuityReason: "approfondissement naturel",
        },
      ],
    });
    expect(cap.capitalisations.some((c) => c.kind === "subject" && c.status === "AVAILABLE")).toBe(
      true,
    );

    const bundle = await listProjectKnowledge(pilotId, projectId);
    const child = bundle.subjects.find((s) => s.title === "Créneaux terrain");
    expect(child?.parentSubjectId).toBe(parent.subjectId);
  });

  it("B.2 — same-turn parent+child via parent title ref (no pre-created parent)", async () => {
    const pilotId = await seedPilot("ML5-same-turn-hier");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Hiérarchie même tour");

    const gen = newId("gen");
    const cap = await maybeCapitalizeFromExchange(pilotId, prep.id, {
      userText: "Structurons la gestion des interventions et la planification.",
      assistantText: "Je propose un thème parent et un sous-thème planification.",
      generationId: gen,
      userMessageId: newId("msg"),
      assistantMessageId: newId("msg"),
      proposals: [
        {
          intentId: "child-first",
          kind: "SUBJECT",
          statement:
            "Règles de planification, conflits de créneaux et replanification des interventions.",
          epistemic: "established",
          subjectTitle: "Planification",
          parentSubjectId: "Gestion des interventions",
          continuityReason: "sous-thème naturel du thème structurant",
        },
        {
          intentId: "parent-second",
          kind: "SUBJECT",
          statement:
            "Organisation globale du cycle de vie des interventions terrain et atelier.",
          epistemic: "established",
          subjectTitle: "Gestion des interventions",
          continuityReason: "thème structurant émergent",
        },
      ],
    });

    expect(cap.ownershipLost).toBe(false);
    const availableSubjects = cap.capitalisations.filter(
      (c) => c.kind === "subject" && c.status === "AVAILABLE",
    );
    expect(availableSubjects.length).toBeGreaterThanOrEqual(2);

    const bundle = await listProjectKnowledge(pilotId, projectId);
    const parent = bundle.subjects.find((s) => s.title === "Gestion des interventions");
    const child = bundle.subjects.find((s) => s.title === "Planification");
    expect(parent?.id).toBeTruthy();
    expect(child?.parentSubjectId).toBe(parent?.id);
  });

  it("B.2 — same-turn parent+child via parent intent id ref", async () => {
    const pilotId = await seedPilot("ML5-same-turn-intent");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Hiérarchie intent");

    const cap = await maybeCapitalizeFromExchange(pilotId, prep.id, {
      userText: "Techniciens et habilitations.",
      assistantText: "Je structure le thème et le sous-thème.",
      generationId: newId("gen"),
      userMessageId: newId("msg"),
      proposals: [
        {
          intentId: "intent-parent",
          kind: "SUBJECT",
          statement: "Organisation des techniciens, rôles et responsabilités terrain.",
          epistemic: "established",
          subjectTitle: "Gestion des techniciens",
          continuityReason: "thème structurant",
        },
        {
          intentId: "intent-child",
          kind: "SUBJECT",
          statement: "Habilitations obligatoires avant affectation d'une intervention.",
          epistemic: "established",
          subjectTitle: "Habilitations",
          parentSubjectId: "intent-parent",
          continuityReason: "sous-thème",
        },
      ],
    });

    const bundle = await listProjectKnowledge(pilotId, projectId);
    const parent = bundle.subjects.find((s) => s.title === "Gestion des techniciens");
    const child = bundle.subjects.find((s) => s.title === "Habilitations");
    expect(cap.capitalisations.some((c) => c.status === "FAILED")).toBe(false);
    expect(child?.parentSubjectId).toBe(parent?.id);
  });

  it("B.2 — rejects inter-project parent id", async () => {
    const pilotA = await seedPilot("ML5-hier-iso-a");
    const pilotB = await seedPilot("ML5-hier-iso-b");
    const { prep: prepA } = await seedLinkedProject(pilotA, "Projet A");
    const { prep: prepB, projectId: projectB } = await seedLinkedProject(pilotB, "Projet B");
    const foreign = await ensureSubject(pilotA, prepA.id, "Sujet étranger");
    expect(foreign.subjectId).toBeTruthy();

    const cap = await maybeCapitalizeFromExchange(pilotB, prepB.id, {
      userText: "Sous-sujet",
      assistantText: "Tentative de rattachement interprojet.",
      generationId: newId("gen"),
      userMessageId: newId("msg"),
      proposals: [
        {
          intentId: "bad-child",
          kind: "SUBJECT",
          statement: "Tentative de rattachement vers un parent d'un autre projet.",
          epistemic: "established",
          subjectTitle: "Enfant isolé",
          parentSubjectId: foreign.subjectId!,
          continuityReason: "test isolation",
        },
      ],
    });

    expect(cap.capitalisations.some((c) => c.status === "FAILED")).toBe(true);
    const bundle = await listProjectKnowledge(pilotB, projectB);
    expect(bundle.subjects.find((s) => s.title === "Enfant isolé")).toBeFalsy();
  });

  it("B.4/B.8 — resolved open point drops from activity and aside population", async () => {
    const pilotId = await seedPilot("ML5-op-resolve");
    const { prep, projectId } = await seedLinkedProject(pilotId, "Points");
    const subj = await ensureSubject(pilotId, prep.id, "Git");
    const pt = await openPoint(pilotId, prep.id, {
      statement: "Quelle branche pour le déploiement ?",
      subjectId: subj.subjectId,
      provenance: { sourceKind: "message", sourceId: "m-1" },
    });
    expect(pt.status).toBe("AVAILABLE");

    const beforeCtx = await getOwnedProjectContext(pilotId, projectId);
    expect(beforeCtx.activity.openPointsCount).toBe(1);
    expect(openKnowledgePoints(beforeCtx.knowledge.openPoints)).toHaveLength(1);

    const doc = await savePreparationDocument(
      pilotId,
      prep.id,
      "Preuve branche",
      "# preuve\nBranche `main` documentée.",
      undefined,
      { correlationKey: `proof-${pt.openPointId}`, provenance: { sourceKind: "pilot" } },
    );
    expect(doc.status).toBe("AVAILABLE");
    const revisionId = "revisionId" in doc ? String(doc.revisionId) : "";

    const resolved = await resolveOpenPointFactually(pilotId, projectId, pt.openPointId!, {
      reason: "Branche confirmée dans la doc",
      provenance: { sourceKind: "revision", sourceId: revisionId, epistemic: "established" },
      operationId: newId("resolve"),
    });
    expect(resolved.status).toBe("AVAILABLE");

    const row = (
      await db.select().from(knowledgeOpenPoints).where(eq(knowledgeOpenPoints.id, pt.openPointId!))
    )[0];
    expect(row.status).toBe("RESOLVED");

    const afterCtx = await getOwnedProjectContext(pilotId, projectId);
    expect(afterCtx.activity.openPointsCount).toBe(0);
    expect(openKnowledgePoints(afterCtx.knowledge.openPoints)).toHaveLength(0);
  });
});
```


### `projects/sfia-studio-next/web/tests/unit/e1-ensemble-b5-b6.test.ts`
```typescript
/**
 * E1 Ensemble Continuity — B.5 (durable D6) + B.6 (living D5) deterministic unit proofs.
 * Semantic bindings only — never invents HumanDecision without REQUEST_EFFECT d6.
 */
import { describe, expect, it } from "vitest";
import {
  deriveThreadTurnKind,
  effectIntents,
  extractKnowledgeSelectionHints,
  extractPilotageBinding,
  listPilotageEffectBindings,
  matchPilotageIntentInQualification,
  projectStudioEffects,
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";
import { displayableCycleObjective } from "@/domains/pilotage/cycle-objective-display";
import { CYCLE_TYPE_LABELS } from "@/domains/pilotage/cycle-type-labels";
import { forecastStepsFromQualificationIntents } from "@/domains/pilotage/forecast-builder";
import { asNoraQualification } from "../helpers/semantic-fixture-envelopes";

function bindingOp(q: NoraTurnQualification): string | null {
  const b = extractPilotageBinding(q);
  if (!b || "ambiguous" in b) return null;
  return b.operation;
}

function qualified(
  partial: Partial<NoraTurnQualification> & Pick<NoraTurnQualification, "intents">,
): NoraTurnQualification {
  return asNoraQualification({
    status: "QUALIFIED",
    goal: "e1-b5-b6",
    clarifications: [],
    replyDraft: "Réponse déterministe.",
    ...partial,
  });
}

describe("E1 B.5 — durable decisions (semantic → D6 boundary)", () => {
  it("explicit durable human act binds d6.human_decision RECORD_DECISION", () => {
    const q = qualified({
      intents: [
        {
          id: "i-record",
          capabilityId: "d6.human_decision",
          mode: "REQUEST_EFFECT",
          summary: "GitHub obligatoire",
          parameters: {
            pilotageOperation: "RECORD_DECISION",
            statement: "La connexion GitHub est obligatoire pour ce projet.",
            objectRef: "github",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    const bindings = listPilotageEffectBindings(q);
    expect(bindings).toHaveLength(1);
    expect("ambiguous" in bindings[0]!).toBe(false);
    expect((bindings[0] as { operation: string }).operation).toBe("RECORD_DECISION");
    expect(deriveThreadTurnKind(q)).toBe("INTENTION_EFFET");
  });

  it("local work preference / dialogue does not bind D6", () => {
    const q = qualified({
      intents: [
        {
          id: "i-pref",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "Préférer l'option A pour cette session",
          parameters: { notes: "arbitrage local de travail" },
          constraints: ["NO_EFFECT"],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(extractPilotageBinding(q)).toBeNull();
    expect(listPilotageEffectBindings(q)).toHaveLength(0);
    expect(deriveThreadTurnKind(q)).toBe("DIALOGUE_INDEPENDANT");
  });

  it("Nora recommendation alone (PREPARE d6) is not REQUEST_EFFECT", () => {
    const q = qualified({
      intents: [
        {
          id: "i-rec",
          capabilityId: "d6.human_decision",
          mode: "PREPARE",
          summary: "Je recommande de formaliser GitHub plus tard",
          parameters: { pilotageOperation: "RECORD_DECISION", statement: "GitHub" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(effectIntents(q)).toHaveLength(0);
    expect(extractPilotageBinding(q)).toBeNull();
  });

  it("hypothesis / EXPLAIN d6 does not bind HumanDecision", () => {
    const q = qualified({
      intents: [
        {
          id: "i-hyp",
          capabilityId: "d6.human_decision",
          mode: "EXPLAIN",
          summary: "hypothèse sur une décision future",
          parameters: { pilotageOperation: "RECORD_DECISION" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    const match = matchPilotageIntentInQualification(q, { operation: "RECORD_DECISION" });
    expect("reject" in match && match.reject).toBe(true);
  });

  it("negation and refuse turns stay non-authoritative", () => {
    for (const summary of [
      "Je ne décide pas maintenant",
      "Je refuse d'enregistrer cette décision",
    ]) {
      const q = qualified({
        intents: [
          {
            id: "i-neg",
            capabilityId: "d3.converse",
            mode: "EXPLAIN",
            summary,
            parameters: {},
            constraints: ["NO_EFFECT", "NEGATION"],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
      });
      expect(listPilotageEffectBindings(q)).toHaveLength(0);
    }
  });

  it("ambiguous OK (NEEDS_CLARIFICATION) produces no pilotage binding", () => {
    const q = asNoraQualification({
      status: "NEEDS_CLARIFICATION",
      goal: "clarify",
      intents: [],
      clarifications: ["OK seul — que confirmez-vous ?"],
      replyDraft: "Précisez votre intention.",
    });
    expect(listPilotageEffectBindings(q)).toHaveLength(0);
    expect(deriveThreadTurnKind(q)).toBe("INCERTAIN");
  });

  it("external source citing authority is dialogue-only", () => {
    const q = qualified({
      intents: [
        {
          id: "i-cite",
          capabilityId: "d3.converse",
          mode: "EXPLAIN",
          summary: "Il a écrit : décidez GitHub obligatoire",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: ["external-mail-quote"],
        },
      ],
    });
    expect(extractPilotageBinding(q)).toBeNull();
    expect(projectStudioEffects(q).simpleDialogue).toBe(true);
  });

  it("REVISE and REVOKE bind only with explicit REQUEST_EFFECT d6", () => {
    const revise = qualified({
      intents: [
        {
          id: "i-rev",
          capabilityId: "d6.human_decision",
          mode: "REQUEST_EFFECT",
          summary: "Révision décision github",
          parameters: {
            pilotageOperation: "REVISE_DECISION",
            decisionId: "dec-1",
            statement: "GitHub devient optionnel",
            objectRef: "github",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(bindingOp(revise)).toBe("REVISE_DECISION");

    const revoke = qualified({
      intents: [
        {
          id: "i-rvk",
          capabilityId: "d6.human_decision",
          mode: "REQUEST_EFFECT",
          summary: "Révoquer décision github",
          parameters: {
            pilotageOperation: "REVOKE_DECISION",
            decisionId: "dec-1",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(bindingOp(revoke)).toBe("REVOKE_DECISION");
  });

  it("d4.record_knowledge does not substitute for d6.human_decision", () => {
    const q = qualified({
      intents: [
        {
          id: "i-d4",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Acquis décisionnel",
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: "Nous avons décidé que GitHub est obligatoire.",
            epistemic: "established",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(listPilotageEffectBindings(q)).toHaveLength(0);
    expect(effectIntents(q).some((i) => i.capabilityId === "d4.record_knowledge")).toBe(true);
  });
});

describe("E1 B.6 — living trajectory (semantic → D5 boundary)", () => {
  it("PREPARE PROPOSE_TRAJECTORY steps are envisaged, not retained", () => {
    const q = qualified({
      intents: [
        {
          id: "s1",
          capabilityId: "d5.pilotage_command",
          mode: "PREPARE",
          summary: "Étape cadrage",
          parameters: { pilotageOperation: "PROPOSE_TRAJECTORY", cycleType: "CADRAGE" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "s2",
          capabilityId: "d5.pilotage_command",
          mode: "PREPARE",
          summary: "UX après conception",
          parameters: {
            pilotageOperation: "PROPOSE_TRAJECTORY",
            cycleType: "UX_UI",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(effectIntents(q)).toHaveLength(0);
    const steps = forecastStepsFromQualificationIntents(q.intents);
    expect(steps.map((s) => s.cycleType)).toEqual(["CADRAGE", "UX_UI"]);
    expect(steps.every((s) => s.certainty === "ENVISIONED" || s.order === 1)).toBe(true);
  });

  it("RETAIN_TRAJECTORY REQUEST_EFFECT is distinct from PROPOSE", () => {
    const q = qualified({
      intents: [
        {
          id: "i-retain",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "Je retiens cette trajectoire",
          parameters: { pilotageOperation: "RETAIN_TRAJECTORY" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(bindingOp(q)).toBe("RETAIN_TRAJECTORY");
  });

  it("mere Figma mention is dialogue — no OPEN_CYCLE binding", () => {
    const q = qualified({
      intents: [
        {
          id: "i-figma",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "Travailler les écrans dans Figma avant les tests",
          parameters: { notes: "aucun cycle UX_UI implicite" },
          constraints: ["NO_EFFECT"],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(listPilotageEffectBindings(q)).toHaveLength(0);
    const match = matchPilotageIntentInQualification(q, { operation: "OPEN_CYCLE" });
    expect("reject" in match && match.reject).toBe(true);
  });

  it("explicit GO OPEN_CYCLE is REQUEST_EFFECT d5", () => {
    const q = qualified({
      intents: [
        {
          id: "i-open",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "Ouvrir cadrage",
          parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "CADRAGE" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    expect(bindingOp(q)).toBe("OPEN_CYCLE");
  });

  it("knowledge selection hints surface acquis/open points without D4 authority", () => {
    const q = qualified({
      intents: [
        {
          id: "i-propose",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "Réorienter vers Figma puis tests",
          parameters: {
            pilotageOperation: "PROPOSE_TRAJECTORY",
            statement: "Insérer conception UX (Figma) avant validation qualité",
            relevantAcquisIds: ["acq-figma-1"],
            relevantOpenPointIds: ["op-test-1"],
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
    });
    const hints = extractKnowledgeSelectionHints(q);
    expect(hints.acquisIds).toEqual(["acq-figma-1"]);
    expect(hints.openPointIds).toEqual(["op-test-1"]);
    expect(bindingOp(q)).toBe("PROPOSE_TRAJECTORY");
  });

  it("contextual cycle labels differ from raw enum tokens", () => {
    expect(CYCLE_TYPE_LABELS.UX_UI).toBe("conception UX");
    expect(CYCLE_TYPE_LABELS.CADRAGE).toBe("cadrage");
    expect(displayableCycleObjective("OPEN_CYCLE CADRAGE")).toBeNull();
    expect(displayableCycleObjective("Clarifier le besoin terrain")).toBe(
      "Clarifier le besoin terrain",
    );
  });

  it("schema version is stable for injected PG qualifications", () => {
    expect(SEMANTIC_QUALIFICATION_SCHEMA_VERSION).toBe("ml4c-sem-qual-v1");
  });
});
```


### `projects/sfia-studio-next/web/tests/unit/e1-continuity-b7-b8.test.ts`
```typescript
/**
 * E1 B.7 cognitive reuse + B.8 projection helpers — deterministic unit proofs (no PG).
 */
import { describe, expect, it } from "vitest";
import {
  CONTINUATION_KNOWLEDGE_OMIT_MARKER,
  resolveContinuationKnowledgeSnippets,
} from "@/domains/conversation/segment-context-efficiency";
import {
  extractKnowledgeSelectionHints,
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";
import { mergeLexicalAndDerived } from "@/domains/knowledge/hybrid-knowledge-search";
import { asNoraQualification } from "../helpers/semantic-fixture-envelopes";

describe("E1 B.7 — cognitive reuse (non-trim proofs)", () => {
  it("knowledge hints bind acquis/open points/subjects for PREFERRED selection", () => {
    const q = asNoraQualification({
      status: "QUALIFIED",
      goal: "reuse",
      intents: [
        {
          id: "i-sel",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "Reprendre le fil Git",
          parameters: {
            relevantAcquisIds: ["acq-git"],
            relevantOpenPointIds: ["op-branch"],
            relevantSubjectIds: ["subj-plan"],
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    });
    const hints = extractKnowledgeSelectionHints(q);
    expect(hints).toEqual({
      acquisIds: ["acq-git"],
      openPointIds: ["op-branch"],
      subjectIds: ["subj-plan"],
    });
  });

  it("continuation omits bulk journal but retains PREFERRED + tool-access marker", () => {
    const base = [
      "ACQUIS[FACT/target/PREFERRED] subject=∅: conserver ce fil",
      "ACQUIS[FACT/noise/AVAILABLE] subject=∅: bruit historique",
      "POINT_OUVERT[op-x/AVAILABLE] subject=∅: autre point",
    ];
    const out = resolveContinuationKnowledgeSnippets(base, {
      useContinuation: true,
      hasPriorAcquis: true,
    });
    expect(out[0]).toBe(CONTINUATION_KNOWLEDGE_OMIT_MARKER);
    expect(out.some((s) => s.includes("target") && s.includes("PREFERRED"))).toBe(true);
    expect(out.some((s) => s.includes("noise"))).toBe(false);
    expect(out.some((s) => s.includes("op-x"))).toBe(false);
  });

  it("fresh segment after interrupt path re-qualifies hints (schema stable)", () => {
    const resumed = asNoraQualification({
      status: "QUALIFIED",
      goal: "resume",
      intents: [
        {
          id: "resume",
          capabilityId: "d3.converse",
          mode: "EXPLORE",
          summary: "Poursuivre",
          parameters: { relevantAcquisIds: ["acq-1"] },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "Je reprends.",
    });
    expect(extractKnowledgeSelectionHints(resumed).acquisIds).toEqual(["acq-1"]);
  });

  it("derivedUsed=false (flag off) does not block lexical B.7 listing", () => {
    const prev = process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
    delete process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
    const merged = mergeLexicalAndDerived({
      projectId: "proj_b7",
      lexical: [
        {
          sourceId: "acq-1",
          snippet: "GitHub obligatoire pour le dépôt",
          matchKind: "acquis",
          channel: "lexical",
        },
      ],
      queryVector: [1, 0, 0],
    });
    expect(merged.derivedUsed).toBe(false);
    expect(merged.derivedSkippedReason).toBe("FLAG_OFF");
    expect(merged.hits).toHaveLength(1);
    if (prev === undefined) delete process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
    else process.env.SFIA_DERIVED_EMBEDDING_SEARCH = prev;
  });
});
```
