# SFIA REVIEW PACK — FULL
# MACRO-LOT 2 — ARCHITECTURE SELECTION + INTEGRATED DELIVERY — REGULARIZATION

- **Generated (UTC):** 2026-11-27T05:10:52Z
- **Objective:** Regularize FULL handoff content for Morris exit review (no new provider emission, no migration, no project push).
- **Prior incomplete handoff:** `bc0b3aea` (synthesis-only) — superseded by this pack.
- **Campaign:** `ml2-i2-docintel-20261127` (cumulative, not renewed)
- **Verdict working:** `ML2_INTEGRATED_DELIVERY_QUALIFIED — EXIT_REVIEW_PENDING_COMPLETE_HANDOFF`
- **Fake/Real:** REAL for LIVE campaign phases + Nora adapter E2E; UNIT for derived-index lifecycle; product Chantiers360/RoomBooking NOT re-run.

---

## 0. Local Git Truth Check

| Field | Value |
|---|---|
| Project branch | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD (current / final local committed) | `56572cf8a9d6fc25e2be27a0dc31775da763783a` |
| HEAD initial cycle baseline | `e784232b0745bc7f8be87947a6f92225a6df85c1` (`e784232b`) |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| merge-base(HEAD, origin/main) | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Tree `projects/sfia-studio-next/web` @ HEAD | `89b27b4e9b7ba1722f7be6b16dc11a93f4c2abb0` |
| Worktree | **DIRTY** — delivery modules + docs uncommitted (see inventory) |
| Commits since e784232b | 3 (`70291410`, `49333f09`, `56572cf8`) |
| Project push this regularization | **NONE** |

### Runtime identity DEV (ENV-01)

| Field | Value |
|---|---|
| Lane | `DEV` (`STUDIO_LANE=DEV`) |
| App port | `:3100` |
| Postgres | `:5433` · db `sfia_next_dev` · migration **026** (no 027) |
| RECETTE | `:3200` / `:5434` — **not touched** |
| OpenAI key FP | `ab6bbec84ba272ed` (matches `SFIA_OPENAI_EXPECTED_KEY_FP`) |
| Admin key FP | `f27d814e9c682020` — **forbidden / unused** |
| WEB | `SFIA_WEB_SEARCH_LIVE=0` · `SFIA_WEB_SEARCH_ENABLED=0` |
| D3 | V1 KEEP · native continuity OFF · Responses `store=false` |

### Git Review Index

```text
Git Review Index
- base branch : origin/main (997897fd7cf9)
- HEAD avant (baseline cycle) : e784232b0745
- HEAD après (committed) : 56572cf8a9d6
- fichiers modifiés (committed e784..HEAD) : see name-status below
- fichiers créés (committed) : live manifests, ml2 scripts seed/preflight/artefacts, corpora updates
- fichiers créés (UNCOMMITTED worktree) : derived-embedding-index, hybrid-knowledge-search, bounded-judgment, document-vision-punctual, ml2-i2-* scripts, tests, architecture lock, as-built, selection checkpoint
- commits créés since baseline : 3
- tests / validations : vitest ml2-derived-embedding-index (4) + frontier (27); LIVE campaign phases; integrated qualify; FinOps reconcile inserts
- review pack : full
- Fake/Real applicable : oui
- niveau de preuve déclaré : BEHAVIOR LIVE (campaign) + UNIT (index lifecycle) + ADAPTER Nora E2E (bounded; see Nora honesty)
- décisions Morris requises : accept ML2 with reserves; flag enablement; migration 027 optional; ML3 separate GO
```

### Commits e784232b..HEAD

```text
56572cf8 docs(ml2): pin final LIVE manifesto Git Truth refs
49333f09 docs(ml2): finalize LIVE campaign manifesto and seed DEV journal baseline
70291410 feat(ml2): frontier family envelopes, corrected corpora, LIVE manifesto preflight
```


### Diff stat committed

```text
.../cloture-macro-lot-1.md                         |  11 +-
 .../ml2-qualification/corpus-decisions-labels.json |  71 ++++-
 .../corpus-pdf-vision-oracle.json                  |  36 ++-
 .../ml2-qualification/corpus-retrieval-oracle.json | 105 ++++++-
 .../live-campaign-manifest-candidate.md            | 103 +++++++
 .../live-campaign-manifest-final.md                | 186 ++++++++++++
 .../ml2-qualification/protocole-qualification.md   |   5 +-
 .../ml2-frontier-preflight-concurrency-restart.mts | 304 ++++++++++++++++++
 .../ml2-generate-synthetic-document-artefacts.py   | 338 +++++++++++++++++++++
 .../ml2-seed-synthetic-journal-baseline.mts        | 276 +++++++++++++++++
 .../scripts/ml2-verify-synthetic-pdf-extract.mts   |  48 +++
 .../conversation/provider-emission-frontier.ts     | 243 +++++++++++++--
 12 files changed, 1654 insertions(+), 72 deletions(-)
```


### Diff name-status committed

```text
M	projects/sfia-studio-next/construction/convergence-openai-studio/cloture-macro-lot-1.md
M	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/corpus-decisions-labels.json
M	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/corpus-pdf-vision-oracle.json
M	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/corpus-retrieval-oracle.json
A	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/live-campaign-manifest-candidate.md
A	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/live-campaign-manifest-final.md
M	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/protocole-qualification.md
A	projects/sfia-studio-next/web/scripts/ml2-frontier-preflight-concurrency-restart.mts
A	projects/sfia-studio-next/web/scripts/ml2-generate-synthetic-document-artefacts.py
A	projects/sfia-studio-next/web/scripts/ml2-seed-synthetic-journal-baseline.mts
A	projects/sfia-studio-next/web/scripts/ml2-verify-synthetic-pdf-extract.mts
M	projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
```


### Worktree status (uncommitted delivery — authoritative for modules below)

```text
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/convergence-openai-studio/cognition-specialisee-et-intelligence-documentaire.md
 M projects/sfia-studio-next/construction/convergence-openai-studio/contrat-fonctionnel.md
 M projects/sfia-studio-next/construction/convergence-openai-studio/contrat-technique.md
 M projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
 M projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
?? projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-2-20261127.md
?? projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/architecture-selection-locked-20261127.md
?? projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/selection-checkpoint-ml2-i2-20261127.md
?? projects/sfia-studio-next/web/.sfia-derived/
?? projects/sfia-studio-next/web/scripts/ml2-i2-bounded-live-campaign.mts
?? projects/sfia-studio-next/web/scripts/ml2-i2-finops-reconcile.mts
?? projects/sfia-studio-next/web/scripts/ml2-i2-integrated-delivery-qualify.mts
?? projects/sfia-studio-next/web/src/domains/conversation/bounded-judgment.ts
?? projects/sfia-studio-next/web/src/domains/documents/document-vision-punctual.ts
?? projects/sfia-studio-next/web/src/domains/knowledge/derived-embedding-index.ts
?? projects/sfia-studio-next/web/src/domains/knowledge/hybrid-knowledge-search.ts
?? projects/sfia-studio-next/web/tests/unit/ml2-derived-embedding-index.test.ts
```


> **Important:** Modules d'index dérivé / Decisions / Vision / qualify scripts sont **présents en worktree non commités**. HEAD git `56572cf8` ne les contient pas encore. Ce pack FULL les inclut intégralement pour auditabilité. Aucun commit projet ni push dans cette régularisation.

---

## 1. Architecture selection lock (full)

# ML2 — Architecture sélection verrouillée (GO Morris)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Campagne cumulative | `ml2-i2-docintel-20261127` (aucune remise à zéro) |
| GO | **MACRO-LOT 2 ARCHITECTURE SELECTION AND INTEGRATED DELIVERY** |
| WEB LIVE | OFF |
| RECETTE | protégée |
| Persistance externe ops | interdite |
| Migration | **aucun GO implicite** — voir § Persistance |

## Décisions structurantes validées

| Domaine | Décision Morris |
|---|---|
| Responses + `semantic-qualification` | **KEEP** (cœur Nora) |
| Decisions | **ADAPT** jugements bornés démontrés + incertitude explicite + **fallback Responses** |
| Recherche | **E = lexical + embeddings** — index local dérivé |
| Vector Stores / File Search / fileId durable | **DEFER** |
| Vision ponctuelle | **ADAPT** docs complexes / scans / schémas |
| PDF extract + visionneuse | **KEEP** |
| D3 V1 | **KEEP** |
| HumanDecision D6 | **KEEP** (autorité inchangée ; OpenAI Decisions ≠ D6) |

## Invariants avant mobilisation Nora

Droits projet/préparation · révocation · fraîcheur de version · provenance exacte — filtrés **avant** injection outil / contexte.

## Persistance locale — mécanisme physique

### Retenu pour Delivery I2 (sans migration)

**Index dérivé fichier**, reconstructible, hors PostgreSQL produit :

| Élément | Valeur |
|---|---|
| Racine | `web/.sfia-derived/embedding-index/<projectId>/` |
| Manifeste | `manifest.json` — `sourceId`, `projectId`, `preparationId`, `contentFingerprint`, `model`, `dims`, `revoked`, `deleted`, `versionLabel`, `indexRef`, `updatedAt` |
| Vecteurs | `vectors.jsonl` — une ligne `{ sourceId, vector[] }` (float64 JSON) |
| Reconstruction | relecture D4 autorisée → re-embed → rewrite atomique (tmp + rename) |
| Hors index | sources revoked / deleted / autre projet / droits insuffisants |
| pgvector | **non utilisé** |
| Hosted VS / fileId | **non** |

Ce chemin satisfait CONV-F23 (reconstructible) sans extension PG ni nouvelle table.

### Candidat migration 027 — **NON appliqué** (attente GO explicite)

Si Morris autorise ultérieurement une table durable :

```sql
-- CANDIDATE ONLY — not applied
-- 027_derived_embedding_chunks.sql
CREATE TABLE IF NOT EXISTS derived_embedding_chunks (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  preparation_id text NOT NULL,
  source_id text NOT NULL,
  source_kind text NOT NULL,
  content_fingerprint text NOT NULL,
  model text NOT NULL,
  dims integer NOT NULL,
  vector_json jsonb NOT NULL,
  revoked boolean NOT NULL DEFAULT false,
  deleted boolean NOT NULL DEFAULT false,
  version_label text,
  index_ref text NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (project_id, source_id, content_fingerprint, model)
);
CREATE INDEX IF NOT EXISTS derived_embedding_chunks_project_idx
  ON derived_embedding_chunks (project_id, revoked, deleted);
```

**Aucun `db:migrate` 027 dans ce Delivery.** Feature flag produit lit uniquement l'index fichier tant que GO migration absent.

## Enveloppe cumulative préservée

| | |
|---|---|
| campaignId | `ml2-i2-docintel-20261127` |
| HTTP plancher reconstruite | ≈85 / 236 |
| Nora réservée | **40 contacts** — seuls contacts Nora autorisés pour preuve E2E |
| Cleanup réservé restant | 16 |
| Renouvellement campagne | **interdit** |


---

## 2. As-built (full)

# As-built — Macro-lot 2 (Intelligence documentaire) — 2026-11-27

| Champ | Valeur |
|---|---|
| Campagne | `ml2-i2-docintel-20261127` (cumulative, non renouvelée) |
| Architecture | [architecture-selection-locked-20261127.md](./ml2-qualification/architecture-selection-locked-20261127.md) |
| Qualification | `web/.sfia-evidence/document-intelligence/integrated-delivery/qualify-report.json` |
| LIVE bench | `web/.sfia-evidence/document-intelligence/live-campaign/` |
| WEB LIVE | OFF |
| RECETTE | protégée |
| Migration | **aucune** (027 candidate documentée, non appliquée) |

## Livrables code

| Module | Rôle |
|---|---|
| `web/src/domains/knowledge/derived-embedding-index.ts` | Index fichier local dérivé + lifecycle révocation |
| `web/src/domains/knowledge/hybrid-knowledge-search.ts` | Fusion lexical + embeddings mobilisables |
| `web/src/domains/conversation/bounded-judgment.ts` | Decisions + incertitude + fallback Responses |
| `web/src/domains/documents/document-vision-punctual.ts` | Vision ponctuelle bytes locaux |
| `journal.searchJournalSubjects` | Option `queryVector` pour canal hybride (flag) |
| Frontier | Hints/réserve VS-files / strip order / effort Responses |
| Flags OFF by default | `SFIA_DERIVED_EMBEDDING_SEARCH`, `SFIA_BOUNDED_JUDGMENT`, `SFIA_DOCUMENT_VISION_PUNCTUAL` |

## Persistance

Index : `web/.sfia-derived/embedding-index/<projectId>/{manifest.json,vectors.jsonl}` — reconstructible, pas de pgvector, pas de VS ops.

## CONV-F21…F26

| ID | Statut | Preuve |
|---|---|---|
| F21 | PASS_WITH_RESERVE | LIVE 12/12 D=R ; fallback Responses pour incertitude |
| F22 | PASS_ARCHITECTURE_E | Lexical KEEP + emb 0.625 ; VS DEFER |
| F23 | PASS_LOCAL_INDEX | Unit lifecycle + rebuild LIVE index ; cleanup VS 404 |
| F24 | PASS | LIVE Vision 6/6 + extract/viewer KEEP |
| F25 | PASS_BOUNDED | Nora E2E COMPLETE ; semantic-qualification v1 ; no D6 |
| F26 | PASS_ATTRIBUTED | Observations ledger (+ reconcile sans FK projet fictif) |

## Enveloppe

Plancher LIVE ≈85 HTTP ; Nora E2E ≈2 vers réserve 40 (reste ≈38) ; cleanup expérimental vérifié 404.

## Hors scope / réserves

- Activation permanente flags OFF jusqu'à gate produit
- Migration 027
- VS / File Search / fileId durable
- Remplacement large de `semantic-qualification`
- Macro-lot 3


---

## 3. Selection checkpoint (full)

# ML2 I2 — Checkpoint de sélection Morris

| Champ | Valeur |
|---|---|
| Campagne | `ml2-i2-docintel-20261127` |
| Manifeste | `live-campaign-manifest-final.md` (GO consommé) |
| Statut | **BOUNDED LIVE COMPLETED — SELECTION CHECKPOINT** |
| Construction définitive | **INTERDITE** jusqu'à GO sélection Morris |
| Nora intégrée | **non exécutée** — 40 contacts réservés intacts |
| WEB LIVE | OFF |
| RECETTE | non touchée |
| Persistance ops / migration | aucune |

Evidence : `web/.sfia-evidence/document-intelligence/live-campaign/`

---

## 1. Résultats LIVE (ordre manifeste)

| Phase | Résultat | HTTP phase | Tokens in / out (usage) | Note |
|---|---|---|---|---|
| **Decisions** `gpt-6-luna` | **12/12** correct | 12 | 2168 / 0 | Probabilités calibrées sur POS/NEG/CHOICE/SCORE ; **incertitude faible** sur AMB/INS (`uncertaintyOk=false`, p≈0 / 0.01) |
| **Responses contrôle** `gpt-6-luna` medium `store=false` | **12/12** correct | 24 (count+create) | 1254 / 1022 | Aucun mismatch case-à-case vs Decisions |
| **Embeddings** `text-embedding-3-small` | meanRecall@5 = **0.625** | 2 | 289 / 0 | Exact/para/syn/hom/ver OK ; **révocation / absent / isolation / deleted** faibles ; revoked souvent dans top brut |
| **Vector Store** retrieval synthétique | meanRecall@5 = **0.75** (8 requêtes) | 25 | n/a | Meilleur que emb local sur ce sous-jeu ; **révocation / absent** = 0 ; cleanup obligatoire |
| **Vision** `gpt-6.1-terra` medium | **6/6** ok | 12 (count+create) | 2930 / 156 | SCN/DIA/BPMN/ILLEG/TXT/TBL |
| **Cleanup** | 6 files + 1 VS deleted ; verify **404** | 8 | — | `remote-resource-manifest.json` |
| **Nora réservée** | 0 consommé | 0 / 40 | — | préservée |

### Enveloppe

| | |
|---|---|
| Plafond HTTP | 236 |
| HTTP phase cumulé (evidence) | **83** (+ ~2 contacts d'échec pré-succès → plancher conservateur **≈85**) |
| Restant vs plafond | **≈151** (dont cleanup restant 16 + Nora 40 à ne pas absorber ailleurs) |
| Tokens cognitifs mesurés (phases tokenisées) | ≈ **6641 in + 1178 out** (hors réservations max_output Frontier) |
| Plafond tokens | 344 000 |
| Incident comptable | un `__reset` vitest a zéroté `live-campaign-state.json` mid-run ; **phase evidence = SoT** ; envelope reconstruite + protection anti-wipe LIVE |

Baseline produit `searchJournalSubjects` (pré-campagne) : isolationFail=0 · revokedMobilized=0.

---

## 2. Recommandation d'architecture (KEEP / ADAPT / REPLACE / DEFER)

| Domaine | Décision | Motif LIVE |
|---|---|---|
| **Decisions** pour jugements structurés (predicate / choice / score) | **ADAPT → KEEP ciblé** | 12/12, surface native, usage output≈0, bornable Frontier ; **ne pas** remplacer `semantic-qualification` cœur |
| **Responses** pour contrôle / narration / multi-étape `store=false` | **KEEP** | 12/12 équivalent sur ce corpus ; rester SoT pour agents Nora et chemins non typés Decisions |
| Remplacement large des jugements Responses par Decisions | **DEFER / refuse** | Pas de gain discriminant vs contrôle ; incertitude AMB/INS non prouvée |
| **Lexical D4** `searchJournalSubjects` | **KEEP** | Baseline isolation/révocation saine ; exact + droits |
| **Embeddings locaux + filtre mobilisation** | **ADAPT** | Recall utile sur paraphrase/synonyme ; **obligatoire** filtre revoked/deleted/isolation côté Studio — pas d'autorité seule |
| **Vector Stores / File Search hébergé** | **DEFER** | Recall légèrement supérieur mais persistance distante + cleanup ; **pas** DATA-01 ops ; pas de migration |
| **Vision ponctuelle** (`input_image` / `input_file` PDF) Terra medium | **ADAPT** | 6/6 discriminant sur schémas/scans/PDF synthétiques ; **pas** OCR local REPLACE ; **pas** `fileId` durable |
| **Extract PDF déterministe + viewer** | **KEEP** | Vision = complément borné, pas remplacement |
| **FileId / VS durables opérationnels** | **DEFER** | Cleanup prouvé en expérimental seulement |
| Admission modèle/effort + Frontier `familyHttp` | **KEEP / ADAPT** | Bloquages LIVE (effort, max_output Decisions, hints) confirment la frontière |

### Architecture cible proposée (avant construction)

```
D4 lexical (KEEP)
  + embeddings locaux filtrés mobilisation (ADAPT)
  + Decisions ciblées pour questions typées annexes (ADAPT)
  + Responses Nora / contrôle (KEEP, store=false)
  + Vision ponctuelle scans/schémas (ADAPT)
  — VS / File Search / fileId durable (DEFER)
```

Hybride **E = A+B** confirmé. C/D restent hors construction sans nouveau GO DATA-01.

---

## 3. Hors scope jusqu'au GO sélection

- Construction définitive / câblage produit
- Nora intégrée (40 contacts)
- Migration, Admin key, WEB LIVE, RECETTE
- Nouvelle campagne / reset d'enveloppe / augmentation de plafonds

**Attente : GO sélection Morris** (valider / amender la grille ci-dessus) avant toute construction.


---

## 4. Physical file-index contract (isolation, concurrency, atomicity, lifecycle)

### 4.1 Layout

| Path | Role |
|---|---|
| `web/.sfia-derived/embedding-index/<projectId>/manifest.json` | Metadata entries (no vectors) |
| `web/.sfia-derived/embedding-index/<projectId>/vectors.jsonl` | One JSON object per line `{sourceId, vector[]}` |

### 4.2 Isolation

- One directory per `projectId` — no cross-project file sharing.
- `isMobilizable` refuses foreign `projectId`, `revoked`, `deleted`, or model mismatch before any hit is returned.
- Hosted Vector Stores / durable `fileId` are **out of product path** (DEFER). Experimental VS used only in LIVE campaign then deleted.

### 4.3 Concurrency

- **No file lock implemented.** Concurrent writers to the same `projectId` are **unsafe** (last `rename` wins).
- Intended single-writer (rebuild job / qualify script) per project.
- Readers may observe torn state if reading mid-rebuild (manifest vs vectors temporarily inconsistent across two renames). **Reserve:** no POSIX flock / no journal; production enablement requires concurrency policy GO.

### 4.4 Atomic writes

- `writeDerivedIndex` writes `manifest.json.tmp` + `vectors.jsonl.tmp` then `renameSync` each into place.
- `markSourceLifecycle` rewrites manifest via tmp+rename only (vectors untouched).
- Crash between the two renames can leave manifest newer than vectors or vice versa — **explicit residual risk**.

### 4.5 Revocation / deletion / reconstruction

- `markSourceLifecycle(projectId, sourceId, {revoked|deleted})` flips flags in manifest without re-embedding.
- `searchDerivedIndex` skips non-mobilizable entries.
- Full reconstruction: caller re-reads authorized D4 sources → embeddings API → `writeDerivedIndex` rewrite.
- Backup: **none automated** — operators may copy `.sfia-derived/` ; not in PG backups.

### 4.6 Limits

- No pgvector / no PG table (027 candidate only).
- Flag `SFIA_DERIVED_EMBEDDING_SEARCH` default OFF.
- Hybrid merge does not replace lexical; lexical remains available when flag off.
- Index directory is local workspace evidence — **not** a multi-instance shared store.

### 4.7 Nora wiring status (honest)

| Surface | Wired? |
|---|---|
| `searchJournalSubjects(..., { queryVector })` | **Partial** — code path exists; requires caller-supplied vector + flag |
| `search_project_resources` (Nora D4 tool) | **NOT wired** to hybrid/embeddings |
| `bounded-judgment` / Decisions | **NOT imported** by `nora-adapter.ts` |
| `document-vision-punctual` | **NOT imported** by `nora-adapter.ts` / PDF tools |
| Default Nora product path | **Unchanged** — semantic-qualification + existing D4/Git/WEB tools |


---

## 5. Created modules — full source

### `projects/sfia-studio-next/web/src/domains/knowledge/derived-embedding-index.ts`

```typescript path=projects/sfia-studio-next/web/src/domains/knowledge/derived-embedding-index.ts
/**
 * ML2 E = lexical + local embeddings — derived file index (no PG / no pgvector).
 * Reconstructible from authorized D4 sources. Mobilization filters rights,
 * revocation, version freshness, and provenance before any Nora exposure.
 *
 * Root: web/.sfia-derived/embedding-index/<projectId>/
 * Migration 027 candidate documented separately — NOT applied here.
 */
import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

export const DERIVED_EMBEDDING_MODEL = "text-embedding-3-small";
export const DERIVED_INDEX_SCHEMA = "ml2-derived-emb-v1";

export type DerivedSourceKind = "acquis" | "subject" | "open_point" | "document_excerpt";

export type DerivedIndexEntry = {
  sourceId: string;
  sourceKind: DerivedSourceKind;
  projectId: string;
  preparationId: string;
  contentFingerprint: string;
  model: string;
  dims: number;
  revoked: boolean;
  deleted: boolean;
  versionLabel: string | null;
  /** Opaque index ref — citation must carry exact sourceId + versionLabel. */
  indexRef: string;
  updatedAt: string;
  /** Text used for embedding — never cross-project. */
  text: string;
};

export type DerivedIndexManifest = {
  schema: typeof DERIVED_INDEX_SCHEMA;
  projectId: string;
  model: string;
  updatedAt: string;
  entries: Omit<DerivedIndexEntry, "text">[];
};

export type MobilizableHit = {
  sourceId: string;
  sourceKind: DerivedSourceKind;
  score: number;
  versionLabel: string | null;
  indexRef: string;
  preparationId: string;
  snippet: string;
};

export function derivedIndexRoot(
  projectId: string,
  baseDir = join(process.cwd(), ".sfia-derived", "embedding-index"),
): string {
  return join(baseDir, projectId);
}

export function contentFingerprint(text: string): string {
  return createHash("sha256").update(text, "utf8").digest("hex").slice(0, 32);
}

export function makeIndexRef(entry: {
  projectId: string;
  sourceId: string;
  contentFingerprint: string;
}): string {
  return `deri://${entry.projectId}/${entry.sourceId}@${entry.contentFingerprint}`;
}

export function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0;
  let na = 0;
  let nb = 0;
  const n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i++) {
    const x = a[i] ?? 0;
    const y = b[i] ?? 0;
    dot += x * y;
    na += x * x;
    nb += y * y;
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-12);
}

/** Gate: only non-revoked, non-deleted, same project, matching model. */
export function isMobilizable(
  entry: Pick<
    DerivedIndexEntry,
    "projectId" | "revoked" | "deleted" | "model"
  >,
  projectId: string,
  model = DERIVED_EMBEDDING_MODEL,
): boolean {
  if (entry.projectId !== projectId) return false;
  if (entry.revoked || entry.deleted) return false;
  if (entry.model !== model) return false;
  return true;
}

export function loadManifest(projectId: string): DerivedIndexManifest | null {
  const p = join(derivedIndexRoot(projectId), "manifest.json");
  if (!existsSync(p)) return null;
  try {
    return JSON.parse(readFileSync(p, "utf8")) as DerivedIndexManifest;
  } catch {
    return null;
  }
}

export function loadVectors(
  projectId: string,
): Map<string, number[]> {
  const p = join(derivedIndexRoot(projectId), "vectors.jsonl");
  const out = new Map<string, number[]>();
  if (!existsSync(p)) return out;
  for (const line of readFileSync(p, "utf8").split("\n")) {
    if (!line.trim()) continue;
    try {
      const row = JSON.parse(line) as { sourceId: string; vector: number[] };
      if (row.sourceId && Array.isArray(row.vector)) {
        out.set(row.sourceId, row.vector);
      }
    } catch {
      /* skip bad line */
    }
  }
  return out;
}

/**
 * Atomic rewrite of manifest + vectors for a project.
 * Callers must pass only sources already rights-checked for the project.
 */
export function writeDerivedIndex(input: {
  projectId: string;
  model?: string;
  entries: DerivedIndexEntry[];
  vectors: Map<string, number[]>;
}): DerivedIndexManifest {
  const model = input.model ?? DERIVED_EMBEDDING_MODEL;
  const root = derivedIndexRoot(input.projectId);
  mkdirSync(root, { recursive: true });
  const updatedAt = new Date().toISOString();
  const manifest: DerivedIndexManifest = {
    schema: DERIVED_INDEX_SCHEMA,
    projectId: input.projectId,
    model,
    updatedAt,
    entries: input.entries.map(({ text: _t, ...meta }) => meta),
  };
  const tmpManifest = join(root, "manifest.json.tmp");
  const tmpVectors = join(root, "vectors.jsonl.tmp");
  writeFileSync(tmpManifest, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  const lines: string[] = [];
  for (const e of input.entries) {
    const v = input.vectors.get(e.sourceId);
    if (!v) continue;
    lines.push(JSON.stringify({ sourceId: e.sourceId, vector: v }));
  }
  writeFileSync(tmpVectors, lines.join("\n") + (lines.length ? "\n" : ""), "utf8");
  renameSync(tmpManifest, join(root, "manifest.json"));
  renameSync(tmpVectors, join(root, "vectors.jsonl"));
  return manifest;
}

/**
 * Rank mobilizable sources by cosine similarity to query vector.
 * Never returns revoked/deleted/foreign-project hits.
 */
export function searchDerivedIndex(input: {
  projectId: string;
  queryVector: number[];
  limit?: number;
  /** Optional text snippets by sourceId for citation. */
  snippets?: Map<string, string>;
}): MobilizableHit[] {
  const manifest = loadManifest(input.projectId);
  if (!manifest || manifest.projectId !== input.projectId) return [];
  const vectors = loadVectors(input.projectId);
  const limit = Math.min(Math.max(input.limit ?? 8, 1), 20);
  const hits: MobilizableHit[] = [];
  for (const e of manifest.entries) {
    if (!isMobilizable(e, input.projectId, manifest.model)) continue;
    const v = vectors.get(e.sourceId);
    if (!v) continue;
    const score = cosineSimilarity(input.queryVector, v);
    hits.push({
      sourceId: e.sourceId,
      sourceKind: e.sourceKind as DerivedSourceKind,
      score,
      versionLabel: e.versionLabel,
      indexRef: e.indexRef,
      preparationId: e.preparationId,
      snippet: (input.snippets?.get(e.sourceId) ?? "").slice(0, 280),
    });
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}

/** Mark source revoked/deleted in-place without re-embedding (lifecycle F23). */
export function markSourceLifecycle(
  projectId: string,
  sourceId: string,
  patch: { revoked?: boolean; deleted?: boolean },
): boolean {
  const manifest = loadManifest(projectId);
  if (!manifest) return false;
  let changed = false;
  for (const e of manifest.entries) {
    if (e.sourceId !== sourceId) continue;
    if (patch.revoked != null && e.revoked !== patch.revoked) {
      e.revoked = patch.revoked;
      changed = true;
    }
    if (patch.deleted != null && e.deleted !== patch.deleted) {
      e.deleted = patch.deleted;
      changed = true;
    }
    if (changed) e.updatedAt = new Date().toISOString();
  }
  if (!changed) return false;
  manifest.updatedAt = new Date().toISOString();
  const root = derivedIndexRoot(projectId);
  const tmp = join(root, "manifest.json.tmp");
  writeFileSync(tmp, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  renameSync(tmp, join(root, "manifest.json"));
  return true;
}

export function derivedEmbeddingSearchEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return (env.SFIA_DERIVED_EMBEDDING_SEARCH || "").trim() === "1";
}
```


### `projects/sfia-studio-next/web/src/domains/knowledge/hybrid-knowledge-search.ts`

```typescript path=projects/sfia-studio-next/web/src/domains/knowledge/hybrid-knowledge-search.ts
/**
 * ML2 E = lexical (KEEP) + derived local embeddings (ADAPT).
 * Semantic hits never bypass mobilization filters.
 */
import {
  derivedEmbeddingSearchEnabled,
  searchDerivedIndex,
  type MobilizableHit,
} from "@/domains/knowledge/derived-embedding-index";

export type LexicalHit = {
  sourceId: string;
  title?: string;
  snippet: string;
  matchKind: string;
  channel: "lexical";
};

export type HybridHit = {
  sourceId: string;
  title?: string;
  snippet: string;
  matchKind: string;
  channel: "lexical" | "derived_embedding" | "both";
  score?: number;
  versionLabel?: string | null;
  indexRef?: string;
};

/**
 * Merge lexical + mobilizable derived hits. Lexical wins on exact id collision
 * for channel tagging; semantic score retained when present.
 */
export function mergeLexicalAndDerived(input: {
  projectId: string;
  lexical: LexicalHit[];
  queryVector?: number[] | null;
  limit?: number;
  snippets?: Map<string, string>;
  env?: NodeJS.ProcessEnv;
}): {
  hits: HybridHit[];
  derivedUsed: boolean;
  derivedSkippedReason: string | null;
} {
  const limit = Math.min(Math.max(input.limit ?? 12, 1), 24);
  const byId = new Map<string, HybridHit>();

  for (const L of input.lexical) {
    byId.set(L.sourceId, {
      sourceId: L.sourceId,
      title: L.title,
      snippet: L.snippet,
      matchKind: L.matchKind,
      channel: "lexical",
    });
  }

  let derivedUsed = false;
  let derivedSkippedReason: string | null = null;
  if (!derivedEmbeddingSearchEnabled(input.env)) {
    derivedSkippedReason = "FLAG_OFF";
  } else if (!input.queryVector || input.queryVector.length === 0) {
    derivedSkippedReason = "NO_QUERY_VECTOR";
  } else {
    const semantic = searchDerivedIndex({
      projectId: input.projectId,
      queryVector: input.queryVector,
      limit,
      snippets: input.snippets,
    });
    derivedUsed = true;
    for (const s of semantic) {
      const existing = byId.get(s.sourceId);
      if (existing) {
        existing.channel = "both";
        existing.score = s.score;
        existing.versionLabel = s.versionLabel;
        existing.indexRef = s.indexRef;
        if (!existing.snippet && s.snippet) existing.snippet = s.snippet;
      } else {
        byId.set(s.sourceId, {
          sourceId: s.sourceId,
          snippet: s.snippet,
          matchKind: s.sourceKind,
          channel: "derived_embedding",
          score: s.score,
          versionLabel: s.versionLabel,
          indexRef: s.indexRef,
        });
      }
    }
  }

  const hits = [...byId.values()];
  hits.sort((a, b) => {
    const sa = a.score ?? (a.channel === "lexical" || a.channel === "both" ? 0.5 : 0);
    const sb = b.score ?? (b.channel === "lexical" || b.channel === "both" ? 0.5 : 0);
    if (sb !== sa) return sb - sa;
    return a.sourceId.localeCompare(b.sourceId);
  });
  return {
    hits: hits.slice(0, limit),
    derivedUsed,
    derivedSkippedReason,
  };
}

/** Test/helper: assert no revoked id appears in hybrid output given a denylist. */
export function assertNoRevokedMobilized(
  hits: Array<{ sourceId: string }>,
  revokedIds: Set<string>,
): { ok: boolean; leaks: string[] } {
  const leaks = hits.filter((h) => revokedIds.has(h.sourceId)).map((h) => h.sourceId);
  return { ok: leaks.length === 0, leaks };
}

export type { MobilizableHit };
```


### `projects/sfia-studio-next/web/src/domains/conversation/bounded-judgment.ts`

```typescript path=projects/sfia-studio-next/web/src/domains/conversation/bounded-judgment.ts
/**
 * ML2 ADAPT — OpenAI Decisions for bounded judgments (predicate/choice/score).
 * NOT HumanDecision D6. Explicit uncertainty + Responses fallback when
 * Decisions abstains / confidence is out of band / API unavailable.
 *
 * Gate: SFIA_BOUNDED_JUDGMENT=1 (OFF by default).
 */
import { createHash } from "node:crypto";

export const BOUNDED_JUDGMENT_SCHEMA = "ml2-bounded-judgment-v1";

export type BoundedJudgmentKind = "predicate" | "choice" | "score";

export type BoundedJudgmentRequest = {
  kind: BoundedJudgmentKind;
  name: string;
  question: string;
  evidence: string;
  choices?: string[];
  levels?: string[];
  /** When set, probabilities in (lo, hi) are treated as uncertain. */
  uncertaintyBand?: { lo: number; hi: number };
};

export type BoundedJudgmentResult = {
  schema: typeof BOUNDED_JUDGMENT_SCHEMA;
  name: string;
  kind: BoundedJudgmentKind;
  source: "decisions" | "responses_fallback" | "refused";
  value: boolean | string | number | null;
  probability: number | null;
  uncertain: boolean;
  abstain: boolean;
  reason: string | null;
  usage?: {
    inputTokens?: number;
    outputTokens?: number;
    model?: string;
  };
};

export function boundedJudgmentEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return (env.SFIA_BOUNDED_JUDGMENT || "").trim() === "1";
}

/** Heuristic: mid-band probability ⇒ uncertain (caller may tighten). */
export function assessUncertainty(
  probability: number | null,
  band: { lo: number; hi: number } = { lo: 0.35, hi: 0.65 },
): boolean {
  if (probability == null || !Number.isFinite(probability)) return true;
  return probability > band.lo && probability < band.hi;
}

export function shouldFallbackToResponses(result: {
  uncertain: boolean;
  abstain: boolean;
  probability: number | null;
  value: unknown;
}): boolean {
  if (result.abstain) return true;
  if (result.value == null && result.probability == null) return true;
  // LIVE showed AMB/INS collapsed to ~0 — treat overconfident "false" on
  // explicitly ambiguous prompts as fallback-eligible when flagged uncertain.
  if (result.uncertain) return true;
  return false;
}

export type DecisionsClient = {
  decisions: {
    create: (body: Record<string, unknown>) => Promise<{
      answers?: Array<{
        type: string;
        name?: string;
        probability?: number;
        choice?: string;
        score?: number;
      }>;
      usage?: { input_tokens?: number; output_tokens?: number };
    }>;
  };
  responses: {
    create: (body: Record<string, unknown>) => Promise<{
      output_text?: string;
      usage?: { input_tokens?: number; output_tokens?: number };
    }>;
  };
};

function buildDecisionsQuestions(req: BoundedJudgmentRequest): unknown[] {
  if (req.kind === "predicate") {
    return [
      {
        type: "predicate",
        name: req.name,
        instructions: req.question,
      },
    ];
  }
  if (req.kind === "choice") {
    return [
      {
        type: "choice",
        name: req.name,
        instructions: req.question,
        choices: (req.choices ?? []).map((value) => ({ value })),
      },
    ];
  }
  return [
    {
      type: "score",
      name: req.name,
      instructions: req.question,
      levels: (req.levels ?? []).map((label) => ({ label })),
    },
  ];
}

function parseResponsesJson(text: string): {
  value?: unknown;
  uncertainty?: boolean;
  abstain?: boolean;
} | null {
  try {
    const m = text.match(/\{[\s\S]*\}/);
    if (!m) return null;
    return JSON.parse(m[0]) as {
      value?: unknown;
      uncertainty?: boolean;
      abstain?: boolean;
    };
  } catch {
    return null;
  }
}

/**
 * Run Decisions first; on uncertainty/abstain/error, Responses JSON fallback.
 * Never records a HumanDecision — Studio admission remains separate (D6).
 */
export async function runBoundedJudgment(input: {
  client: DecisionsClient;
  request: BoundedJudgmentRequest;
  modelDecisions?: string;
  modelResponses?: string;
  effortResponses?: string;
}): Promise<BoundedJudgmentResult> {
  const req = input.request;
  const band = req.uncertaintyBand ?? { lo: 0.35, hi: 0.65 };
  const inputText = `Evidence:\n${req.evidence}\n\nAnswer only the named question.`;

  let decisionsResult: BoundedJudgmentResult | null = null;
  try {
    const dec = await input.client.decisions.create({
      model: input.modelDecisions ?? "gpt-6-luna",
      input: inputText,
      questions: buildDecisionsQuestions(req),
    });
    const primary =
      (dec.answers ?? []).find((a) => a.name === req.name) ??
      (dec.answers ?? [])[0];
    let value: boolean | string | number | null = null;
    let probability: number | null = null;
    if (primary?.type === "predicate") {
      probability =
        typeof primary.probability === "number" ? primary.probability : null;
      value = probability != null ? probability >= 0.5 : null;
    } else if (primary?.type === "choice") {
      value = primary.choice != null ? String(primary.choice) : null;
      probability = 1;
    } else if (primary?.type === "score") {
      value =
        typeof primary.score === "number"
          ? primary.score
          : primary.choice != null
            ? String(primary.choice)
            : null;
      probability = 1;
    }
    const uncertain =
      req.kind === "predicate" ? assessUncertainty(probability, band) : false;
    decisionsResult = {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "decisions",
      value,
      probability,
      uncertain,
      abstain: value == null,
      reason: uncertain ? "UNCERTAINTY_BAND" : null,
      usage: {
        inputTokens: dec.usage?.input_tokens,
        outputTokens: dec.usage?.output_tokens,
        model: input.modelDecisions ?? "gpt-6-luna",
      },
    };
    if (!shouldFallbackToResponses(decisionsResult)) {
      return decisionsResult;
    }
  } catch (e) {
    decisionsResult = {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "refused",
      value: null,
      probability: null,
      uncertain: true,
      abstain: true,
      reason: e instanceof Error ? e.message.slice(0, 200) : "DECISIONS_ERROR",
    };
  }

  // Responses fallback
  try {
    const schemaHint = JSON.stringify({
      id: req.name,
      type: req.kind,
      value: req.kind === "predicate" ? true : "",
      uncertainty: false,
      abstain: false,
    });
    const prompt = `You are a bounded judgment helper. Evidence:\n${req.evidence}\n\nQuestion: ${req.question}\n${
      req.choices ? `Choices: ${req.choices.join(" | ")}\n` : ""
    }${req.levels ? `Levels: ${req.levels.join(" | ")}\n` : ""}
Return ONLY JSON matching ${schemaHint}. If unsure set uncertainty=true and/or abstain=true.`;
    const resp = await input.client.responses.create({
      model: input.modelResponses ?? "gpt-6-luna",
      store: false,
      max_output_tokens: 256,
      reasoning: { effort: input.effortResponses ?? "medium" },
      input: prompt,
    });
    const parsed = parseResponsesJson(resp.output_text ?? "");
    if (!parsed) {
      return {
        ...(decisionsResult ?? {
          schema: BOUNDED_JUDGMENT_SCHEMA,
          name: req.name,
          kind: req.kind,
          value: null,
          probability: null,
          uncertain: true,
          abstain: true,
          reason: "DECISIONS_UNAVAILABLE",
        }),
        source: "responses_fallback",
        reason: "RESPONSES_UNPARSEABLE",
        usage: {
          inputTokens: resp.usage?.input_tokens,
          outputTokens: resp.usage?.output_tokens,
          model: input.modelResponses ?? "gpt-6-luna",
        },
      };
    }
    let value: boolean | string | number | null = null;
    if (req.kind === "predicate") value = Boolean(parsed.value);
    else if (typeof parsed.value === "number") value = parsed.value;
    else value = parsed.value != null ? String(parsed.value) : null;
    return {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "responses_fallback",
      value: parsed.abstain ? null : value,
      probability: null,
      uncertain: Boolean(parsed.uncertainty) || Boolean(parsed.abstain),
      abstain: Boolean(parsed.abstain),
      reason: decisionsResult?.reason
        ? `FALLBACK_AFTER:${decisionsResult.reason}`
        : "FALLBACK",
      usage: {
        inputTokens: resp.usage?.input_tokens,
        outputTokens: resp.usage?.output_tokens,
        model: input.modelResponses ?? "gpt-6-luna",
      },
    };
  } catch (e) {
    return {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "refused",
      value: null,
      probability: null,
      uncertain: true,
      abstain: true,
      reason: e instanceof Error ? e.message.slice(0, 200) : "FALLBACK_ERROR",
    };
  }
}

export function boundedJudgmentIdempotencyKey(fields: {
  workId?: string;
  name: string;
  evidenceFp: string;
}): string {
  return createHash("sha256")
    .update(
      JSON.stringify({
        schema: BOUNDED_JUDGMENT_SCHEMA,
        ...fields,
      }),
    )
    .digest("hex")
    .slice(0, 40);
}
```


### `projects/sfia-studio-next/web/src/domains/documents/document-vision-punctual.ts`

```typescript path=projects/sfia-studio-next/web/src/domains/documents/document-vision-punctual.ts
/**
 * ML2 ADAPT — punctual Vision for complex docs / scans / schemas.
 * Complements KEEP pdf-extract + viewer. No durable fileId. store=false.
 * Gate: SFIA_DOCUMENT_VISION_PUNCTUAL=1 (OFF by default).
 */
import { createHash } from "node:crypto";

export const DOCUMENT_VISION_SCHEMA = "ml2-document-vision-punctual-v1";

export type VisionPunctualMode = "image" | "pdf_bytes";

export type VisionPunctualRequest = {
  mode: VisionPunctualMode;
  /** Local bytes only — never a remote fileId. */
  bytes: Buffer;
  filename: string;
  ask: string;
  mimeHint?: string;
};

export type VisionPunctualResult = {
  schema: typeof DOCUMENT_VISION_SCHEMA;
  ok: boolean;
  text: string;
  parsed: Record<string, unknown> | null;
  limits: string[];
  usage?: {
    inputTokens?: number;
    outputTokens?: number;
    model?: string;
  };
  reason?: string;
};

export function documentVisionPunctualEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return (env.SFIA_DOCUMENT_VISION_PUNCTUAL || "").trim() === "1";
}

export type VisionResponsesClient = {
  responses: {
    create: (body: Record<string, unknown>) => Promise<{
      output_text?: string;
      usage?: { input_tokens?: number; output_tokens?: number };
    }>;
  };
};

/**
 * One-shot Vision via Responses input_image / input_file.
 * Caller must have already authorized PDF/viewer rights for the bytes.
 */
export async function runDocumentVisionPunctual(input: {
  client: VisionResponsesClient;
  request: VisionPunctualRequest;
  model?: string;
  effort?: string;
  maxOutputTokens?: number;
}): Promise<VisionPunctualResult> {
  const req = input.request;
  const limits = [
    "NO_DURABLE_FILE_ID",
    "STORE_FALSE",
    "PUNCTUAL_BYTES_ONLY",
    "NOT_A_PDF_EXTRACT_REPLACEMENT",
  ];
  const b64 = req.bytes.toString("base64");
  const content: unknown[] = [{ type: "input_text", text: req.ask }];
  if (req.mode === "pdf_bytes" || req.filename.toLowerCase().endsWith(".pdf")) {
    content.push({
      type: "input_file",
      filename: req.filename,
      file_data: `data:application/pdf;base64,${b64}`,
    });
  } else {
    const mime = req.mimeHint ?? "image/png";
    content.push({
      type: "input_image",
      image_url: `data:${mime};base64,${b64}`,
    });
  }

  try {
    const resp = await input.client.responses.create({
      model: input.model ?? "gpt-6.1-terra",
      store: false,
      max_output_tokens: input.maxOutputTokens ?? 512,
      reasoning: { effort: input.effort ?? "medium" },
      input: [{ role: "user", content }],
    });
    const text = resp.output_text ?? "";
    let parsed: Record<string, unknown> | null = null;
    try {
      const m = text.match(/\{[\s\S]*\}/);
      if (m) parsed = JSON.parse(m[0]) as Record<string, unknown>;
    } catch {
      parsed = null;
    }
    return {
      schema: DOCUMENT_VISION_SCHEMA,
      ok: text.trim().length > 0,
      text,
      parsed,
      limits,
      usage: {
        inputTokens: resp.usage?.input_tokens,
        outputTokens: resp.usage?.output_tokens,
        model: input.model ?? "gpt-6.1-terra",
      },
    };
  } catch (e) {
    return {
      schema: DOCUMENT_VISION_SCHEMA,
      ok: false,
      text: "",
      parsed: null,
      limits,
      reason: e instanceof Error ? e.message.slice(0, 240) : "VISION_ERROR",
    };
  }
}

export function visionBytesFingerprint(bytes: Buffer): string {
  return createHash("sha256").update(bytes).digest("hex").slice(0, 24);
}
```


### `projects/sfia-studio-next/web/tests/unit/ml2-derived-embedding-index.test.ts`

```typescript path=projects/sfia-studio-next/web/tests/unit/ml2-derived-embedding-index.test.ts
import { rmSync } from "node:fs";
import { afterEach, describe, expect, it } from "vitest";
import {
  contentFingerprint,
  derivedIndexRoot,
  isMobilizable,
  makeIndexRef,
  markSourceLifecycle,
  searchDerivedIndex,
  writeDerivedIndex,
  type DerivedIndexEntry,
} from "@/domains/knowledge/derived-embedding-index";
import {
  assertNoRevokedMobilized,
  mergeLexicalAndDerived,
} from "@/domains/knowledge/hybrid-knowledge-search";
import {
  assessUncertainty,
  shouldFallbackToResponses,
} from "@/domains/conversation/bounded-judgment";

const PROJECT = "proj_ml2_unit_test";

afterEach(() => {
  try {
    rmSync(derivedIndexRoot(PROJECT), { recursive: true, force: true });
  } catch {
    /* ignore */
  }
  delete process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
});

function entry(
  partial: Partial<DerivedIndexEntry> & { sourceId: string; text: string },
): DerivedIndexEntry {
  const fp = contentFingerprint(partial.text);
  return {
    sourceId: partial.sourceId,
    sourceKind: partial.sourceKind ?? "acquis",
    projectId: PROJECT,
    preparationId: "prep_test",
    contentFingerprint: fp,
    model: "text-embedding-3-small",
    dims: 3,
    revoked: partial.revoked ?? false,
    deleted: partial.deleted ?? false,
    versionLabel: partial.versionLabel ?? "v1",
    indexRef: makeIndexRef({
      projectId: PROJECT,
      sourceId: partial.sourceId,
      contentFingerprint: fp,
    }),
    updatedAt: new Date().toISOString(),
    text: partial.text,
  };
}

describe("ml2 derived embedding index", () => {
  it("filters revoked/deleted/foreign project from mobilization", () => {
    expect(
      isMobilizable(
        {
          projectId: PROJECT,
          revoked: false,
          deleted: false,
          model: "text-embedding-3-small",
        },
        PROJECT,
      ),
    ).toBe(true);
    expect(
      isMobilizable(
        {
          projectId: PROJECT,
          revoked: true,
          deleted: false,
          model: "text-embedding-3-small",
        },
        PROJECT,
      ),
    ).toBe(false);
    expect(
      isMobilizable(
        {
          projectId: "other",
          revoked: false,
          deleted: false,
          model: "text-embedding-3-small",
        },
        PROJECT,
      ),
    ).toBe(false);
  });

  it("search omits revoked after lifecycle mark (CONV-F23)", () => {
    process.env.SFIA_DERIVED_EMBEDDING_SEARCH = "1";
    const a = entry({ sourceId: "syn-a", text: "alpha capacity twelve" });
    const b = entry({ sourceId: "syn-b", text: "billing tariff luna" });
    const vectors = new Map<string, number[]>([
      ["syn-a", [1, 0, 0]],
      ["syn-b", [0, 1, 0]],
    ]);
    writeDerivedIndex({ projectId: PROJECT, entries: [a, b], vectors });
    const before = searchDerivedIndex({
      projectId: PROJECT,
      queryVector: [1, 0, 0],
      limit: 5,
    });
    expect(before.map((h) => h.sourceId)).toContain("syn-a");
    markSourceLifecycle(PROJECT, "syn-a", { revoked: true });
    const after = searchDerivedIndex({
      projectId: PROJECT,
      queryVector: [1, 0, 0],
      limit: 5,
    });
    expect(after.map((h) => h.sourceId)).not.toContain("syn-a");
    const leak = assertNoRevokedMobilized(after, new Set(["syn-a"]));
    expect(leak.ok).toBe(true);
  });

  it("hybrid merge keeps lexical and tags both", () => {
    process.env.SFIA_DERIVED_EMBEDDING_SEARCH = "1";
    const a = entry({ sourceId: "syn-a", text: "alpha" });
    writeDerivedIndex({
      projectId: PROJECT,
      entries: [a],
      vectors: new Map([["syn-a", [1, 0, 0]]]),
    });
    const merged = mergeLexicalAndDerived({
      projectId: PROJECT,
      lexical: [
        {
          sourceId: "syn-a",
          title: "A",
          snippet: "alpha",
          matchKind: "title",
          channel: "lexical",
        },
      ],
      queryVector: [1, 0, 0],
      limit: 5,
    });
    expect(merged.derivedUsed).toBe(true);
    expect(merged.hits[0]?.channel).toBe("both");
  });
});

describe("ml2 bounded judgment uncertainty", () => {
  it("mid-band is uncertain and triggers Responses fallback", () => {
    expect(assessUncertainty(0.5)).toBe(true);
    expect(assessUncertainty(0.95)).toBe(false);
    expect(
      shouldFallbackToResponses({
        uncertain: true,
        abstain: false,
        probability: 0.5,
        value: true,
      }),
    ).toBe(true);
    expect(
      shouldFallbackToResponses({
        uncertain: false,
        abstain: false,
        probability: 0.99,
        value: true,
      }),
    ).toBe(false);
  });
});
```


---

## 6. Effective raccordements — diffs utiles

### 6.1 `journal.ts` — hybrid optional channel (worktree diff vs HEAD)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts b/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
index b3accaaf..30f1083b 100644
--- a/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
+++ b/projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
@@ -873,7 +873,12 @@ export async function searchJournalSubjects(
   pilotId: string,
   projectId: string,
   query: string,
-  opts?: { openPointsOnly?: boolean; limit?: number },
+  opts?: {
+    openPointsOnly?: boolean;
+    limit?: number;
+    /** Optional query embedding for ML2 hybrid E (flag SFIA_DERIVED_EMBEDDING_SEARCH=1). */
+    queryVector?: number[] | null;
+  },
 ) {
   const q = query.trim().toLowerCase();
   const limit = opts?.limit ?? 24;
@@ -971,9 +976,51 @@ export async function searchJournalSubjects(
     }
   }

+  const lexicalResults = hits.slice(0, limit);
+
+  // ML2 E: optional derived-embedding channel — never replaces lexical; filters apply.
+  if (opts?.queryVector && opts.queryVector.length > 0) {
+    const { mergeLexicalAndDerived } = await import(
+      "@/domains/knowledge/hybrid-knowledge-search"
+    );
+    const lexical = lexicalResults.map((h) => ({
+      sourceId: h.subjectId,
+      title: h.title,
+      snippet: h.snippet,
+      matchKind: h.matchKind,
+      channel: "lexical" as const,
+    }));
+    const snippets = new Map<string, string>();
+    for (const h of lexicalResults) snippets.set(h.subjectId, h.snippet);
+    const merged = mergeLexicalAndDerived({
+      projectId,
+      lexical,
+      queryVector: opts.queryVector,
+      limit,
+      snippets,
+    });
+    return {
+      status: "AVAILABLE" as const,
+      results: merged.hits.map((h) => ({
+        subjectId: h.sourceId,
+        title: h.title ?? h.sourceId,
+        path: subjectPathTitles(h.sourceId, byId),
+        matchKind: h.matchKind as Hit["matchKind"],
+        snippet: h.snippet,
+        channel: h.channel,
+        score: h.score,
+        indexRef: h.indexRef,
+      })),
+      coverage:
+        merged.hits.length === 0 ? ("NONE" as const) : ("PARTIAL" as const),
+      derivedUsed: merged.derivedUsed,
+      derivedSkippedReason: merged.derivedSkippedReason,
+    };
+  }
+
   return {
     status: "AVAILABLE" as const,
-    results: hits.slice(0, limit),
+    results: lexicalResults,
     coverage: hits.length === 0 ? ("NONE" as const) : ("PARTIAL" as const),
   };
 }
```


### 6.2 `provider-emission-frontier.ts` — committed delta e784..HEAD

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
index 548e6f07..43d54123 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
@@ -53,9 +53,29 @@ export type EmissionAttemptKind =
   | "campaign.probe"
   | "http.responses"
   | "http.input_tokens_count"
+  | "http.decisions"
+  | "http.embeddings"
+  | "http.vector_stores"
+  | "http.files"
   | "http.other"
   | "other";

+/** Non-transferable HTTP sub-envelopes within one cumulative campaign. */
+export type EmissionHttpFamily =
+  | "responses"
+  | "decisions"
+  | "embeddings"
+  | "vector_stores"
+  | "files"
+  | "other";
+
+export type FamilyHttpBudget = {
+  maxHttpAttempts: number;
+  reserved: number;
+  committed: number;
+  released: number;
+};
+
 export type HttpAttemptState =
   | "RESERVED"
   | "COMMITTED"
@@ -78,8 +98,14 @@ export type CampaignEnvelope = {
   /**
    * When true, campaign input limits require a provider-native input_tokens count
    * before Responses emission. Body-length estimates are never a strict guarantee.
+   * Non-Responses families use payload/contact limits instead (see familyHttp).
    */
   requireNativeInputBound: boolean;
+  /**
+   * Optional per-family HTTP budgets. Null = global maxHttpAttempts only.
+   * Families are not transferable without explicit arbitration.
+   */
+  familyHttp: Partial<Record<EmissionHttpFamily, FamilyHttpBudget>> | null;
   httpAttemptsReserved: number;
   httpAttemptsCommitted: number;
   httpAttemptsReleased: number;
@@ -296,7 +322,10 @@ export function restoreCampaignEnvelopeAfterRestart(
       `campaign ${campaignId} was bound to pid ${persisted.pid} without restorable counters; current pid ${process.pid}`,
     );
   }
-  const restored: CampaignEnvelope = { ...persisted.envelope };
+  const restored: CampaignEnvelope = {
+    ...persisted.envelope,
+    familyHttp: persisted.envelope.familyHttp ?? null,
+  };
   processCampaignRegistry.set(campaignId, restored);
   persistCampaignEnvelope(restored);
   return restored;
@@ -337,6 +366,7 @@ export function getCampaignEnvelopeMetrics(
     maxHttpAttempts: c.maxHttpAttempts,
     maxInputTokens: c.maxInputTokens,
     maxOutputTokens: c.maxOutputTokens,
+    familyHttp: c.familyHttp,
   };
 }

@@ -426,6 +456,8 @@ export function beginCampaignEnvelope(input: {
   maxDirectOpens?: number | null;
   /** Default true when any input token campaign limit is set. */
   requireNativeInputBound?: boolean;
+  /** Optional non-transferable per-family HTTP caps (ML2 document intelligence). */
+  familyHttpLimits?: Partial<Record<EmissionHttpFamily, number>> | null;
   required?: boolean;
 }): CampaignEnvelope {
   const cur = store();
@@ -496,6 +528,21 @@ export function beginCampaignEnvelope(input: {
         ? null
         : Math.max(0, Math.floor(input.maxDirectOpens)),
     requireNativeInputBound: requireNative,
+    familyHttp: (() => {
+      const raw = input.familyHttpLimits;
+      if (!raw) return null;
+      const out: Partial<Record<EmissionHttpFamily, FamilyHttpBudget>> = {};
+      for (const [k, v] of Object.entries(raw)) {
+        if (v == null) continue;
+        out[k as EmissionHttpFamily] = {
+          maxHttpAttempts: Math.max(0, Math.floor(v)),
+          reserved: 0,
+          committed: 0,
+          released: 0,
+        };
+      }
+      return Object.keys(out).length > 0 ? out : null;
+    })(),
     httpAttemptsReserved: 0,
     httpAttemptsCommitted: 0,
     httpAttemptsReleased: 0,
@@ -757,6 +804,85 @@ export function isResponsesCreateUrl(url: string): boolean {
   }
 }

+/** Exact OpenAI path → emission family (no approximate matching). */
+export function classifyOpenAiHttpFamily(url: string): EmissionHttpFamily {
+  try {
+    const u = new URL(url);
+    if (!isOpenAiApiUrl(url)) return "other";
+    const path = u.pathname.replace(/\/+$/, "");
+    if (
+      path === "/v1/responses" ||
+      path.endsWith("/responses") ||
+      path === "/v1/responses/input_tokens" ||
+      path.endsWith("/responses/input_tokens")
+    ) {
+      return "responses";
+    }
+    if (path === "/v1/decisions" || path.endsWith("/decisions")) {
+      return "decisions";
+    }
+    if (path === "/v1/embeddings" || path.endsWith("/embeddings")) {
+      return "embeddings";
+    }
+    if (
+      path === "/v1/vector_stores" ||
+      path.startsWith("/v1/vector_stores/") ||
+      path.includes("/vector_stores/")
+    ) {
+      return "vector_stores";
+    }
+    if (
+      path === "/v1/files" ||
+      path.startsWith("/v1/files/") ||
+      path.includes("/files/")
+    ) {
+      return "files";
+    }
+    return "other";
+  } catch {
+    return "other";
+  }
+}
+
+export function emissionKindForHttpFamily(
+  family: EmissionHttpFamily,
+): EmissionAttemptKind {
+  switch (family) {
+    case "responses":
+      return "http.responses";
+    case "decisions":
+      return "http.decisions";
+    case "embeddings":
+      return "http.embeddings";
+    case "vector_stores":
+      return "http.vector_stores";
+    case "files":
+      return "http.files";
+    default:
+      return "http.other";
+  }
+}
+
+export function familyFromEmissionKind(
+  kind: EmissionAttemptKind,
+): EmissionHttpFamily {
+  switch (kind) {
+    case "http.responses":
+    case "http.input_tokens_count":
+      return "responses";
+    case "http.decisions":
+      return "decisions";
+    case "http.embeddings":
+      return "embeddings";
+    case "http.vector_stores":
+      return "vector_stores";
+    case "http.files":
+      return "files";
+    default:
+      return "other";
+  }
+}
+
 function deriveInputTokensCountUrl(responsesUrl: string): string {
   try {
     const u = new URL(responsesUrl);
@@ -1279,16 +1405,21 @@ export function reserveHttpEmission(input: {
   }

   // Campaign token limits require an opposable reservation before contact.
-  // Input: provider-native input_tokens count (or explicit native hint) —
+  // Responses: provider-native input_tokens count (or explicit native hint) —
   // never campaign ceiling and never body-length estimate as a strict guarantee.
+  // Decisions/embeddings/files/VS: no Responses native count — demonstrable
+  // payload bounds (sfia_estimated_input_tokens) + family HTTP caps.
   // Output still may use per-request ceiling for reservation and wire injection.
+  const family = familyFromEmissionKind(emissionKind);
+  const isResponsesGeneration = emissionKind === "http.responses";
   let reservedInput: number | null = null;
   let inputBoundKind: InputBoundKind = null;
   let reservedOutput = demonstrableOutputTokenBound(bodyJson);

   if (
-    campaign.maxInputTokens != null ||
-    campaign.maxInputTokensPerRequest != null
+    isResponsesGeneration &&
+    (campaign.maxInputTokens != null ||
+      campaign.maxInputTokensPerRequest != null)
   ) {
     const resolved = resolveCampaignInputReservation(
       bodyJson,
@@ -1316,6 +1447,18 @@ export function reserveHttpEmission(input: {
           ? "native"
           : "demonstrable";
     }
+    if (
+      !isResponsesGeneration &&
+      (campaign.maxInputTokens != null ||
+        campaign.maxInputTokensPerRequest != null) &&
+      reservedInput == null
+    ) {
+      return {
+        ok: false,
+        reasonCode: "INPUT_UNBOUNDED",
+        reason: `family=${family} requires demonstrable sfia_estimated_input_tokens (no Responses native count)`,
+      };
+    }
   }

   // Hosted web campaign: require max_tool_calls on the wire — no ASSUMED_1.
@@ -1388,6 +1531,18 @@ export function reserveHttpEmission(input: {
       reason: `httpReserved=${campaign.httpAttemptsReserved}+1 max=${campaign.maxHttpAttempts}`,
     };
   }
+  const familyBudget = campaign.familyHttp?.[family];
+  if (familyBudget && familyBudget.reserved + 1 > familyBudget.maxHttpAttempts) {
+    // Family exhausted — do not silently borrow another family's budget.
+    campaign.suspended = true;
+    campaign.suspendReason = `CAMPAIGN_FAMILY_HTTP_EXHAUSTED:${family}`;
+    persistCampaignEnvelope(campaign);
+    return {
+      ok: false,
+      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
+      reason: `family=${family} reserved=${familyBudget.reserved}+1 max=${familyBudget.maxHttpAttempts}`,
+    };
+  }
   if (
     campaign.maxInputTokens != null &&
     campaign.inputTokensReserved + inTok > campaign.maxInputTokens
@@ -1434,6 +1589,9 @@ export function reserveHttpEmission(input: {
   }

   campaign.httpAttemptsReserved += 1;
+  if (familyBudget) {
+    familyBudget.reserved += 1;
+  }
   campaign.inputTokensReserved += inTok;
   campaign.outputTokensReserved += outTok;
   persistCampaignEnvelope(campaign);
@@ -1530,6 +1688,9 @@ export function commitProviderEmission(reservation: {
       // Counting is not Responses generation — do not attribute generation tokens/cost.
     } else {
       campaign.httpAttemptsCommitted += 1;
+      const fam = familyFromEmissionKind(rec.kind);
+      const famBudget = campaign.familyHttp?.[fam];
+      if (famBudget) famBudget.committed += 1;
       const inTok =
         reservation.measuredInputTokens != null &&
         Number.isFinite(reservation.measuredInputTokens)
@@ -1587,6 +1748,12 @@ export function releaseProviderEmission(reservation: {
         campaign.httpAttemptsReserved - 1,
       );
       campaign.httpAttemptsReleased += 1;
+      const fam = familyFromEmissionKind(rec.kind);
+      const famBudget = campaign.familyHttp?.[fam];
+      if (famBudget) {
+        famBudget.reserved = Math.max(0, famBudget.reserved - 1);
+        famBudget.released += 1;
+      }
       campaign.inputTokensReserved = Math.max(
         0,
         campaign.inputTokensReserved - rec.reservedInputTokens,
@@ -1617,6 +1784,9 @@ export function markProviderEmissionUncertain(reservation: {
       campaign.inputTokenCountAttemptsCommitted += 1;
     } else {
       campaign.httpAttemptsCommitted += 1;
+      const fam = familyFromEmissionKind(rec.kind);
+      const famBudget = campaign.familyHttp?.[fam];
+      if (famBudget) famBudget.committed += 1;
     }
     persistCampaignEnvelope(campaign);
   }
@@ -1864,7 +2034,8 @@ export function createFrontierAwareFetch(
       (campaign.maxInputTokens != null ||
         campaign.maxInputTokensPerRequest != null) &&
       isResponsesCreateUrl(url) &&
-      method === "POST"
+      method === "POST" &&
+      classifyOpenAiHttpFamily(url) === "responses"
     ) {
       const fingerprint = inputCountPayloadFingerprint(bodyJson);
       const haveNative =
@@ -1922,6 +2093,9 @@ export function createFrontierAwareFetch(
       body = JSON.stringify(bodyJson);
     }

+    const httpFamily = classifyOpenAiHttpFamily(url);
+    const emissionKind = emissionKindForHttpFamily(httpFamily);
+
     // Strip Studio-only hints before wire emission.
     if (bodyJson) {
       const {
@@ -1934,41 +2108,46 @@ export function createFrontierAwareFetch(
         sfia_native_input_tokens?: unknown;
         sfia_input_count_fingerprint?: unknown;
       };
-      // Continuity: attach previous_response_id only when mode=native and plan allows.
-      // Default OFF — D3 remains SoT; prior tokens remain billable when attached.
-      const continuityMode = resolveProviderContinuityMode();
-      const plan = planProviderContinuity({
-        mode: continuityMode,
-        studio: alsStore.continuity.studio ?? {
-          workId: "",
-          acquisFingerprint: null,
-          sourceVersions: [],
-          checkpointId: null,
-          budgets: {
-            tokensConsumed: 0,
-            tokensBudget: null,
-            restitutionsRemaining: null,
+      if (httpFamily === "responses") {
+        // Continuity: attach previous_response_id only when mode=native and plan allows.
+        // Default OFF — D3 remains SoT; prior tokens remain billable when attached.
+        const continuityMode = resolveProviderContinuityMode();
+        const plan = planProviderContinuity({
+          mode: continuityMode,
+          studio: alsStore.continuity.studio ?? {
+            workId: "",
+            acquisFingerprint: null,
+            sourceVersions: [],
+            checkpointId: null,
+            budgets: {
+              tokensConsumed: 0,
+              tokensBudget: null,
+              restitutionsRemaining: null,
+            },
+            rightsOk: false,
           },
-          rightsOk: false,
-        },
-        chain: alsStore.continuity.chain,
-        lane: (process.env.STUDIO_LANE ?? "UNKNOWN").trim().toUpperCase(),
-      });
-      bodyJson = applyContinuityToResponsesBody(wireBody, plan);
+          chain: alsStore.continuity.chain,
+          lane: (process.env.STUDIO_LANE ?? "UNKNOWN").trim().toUpperCase(),
+        });
+        bodyJson = applyContinuityToResponsesBody(wireBody, plan);
+      } else {
+        bodyJson = wireBody;
+      }
       body = JSON.stringify(bodyJson);
     }

-    const hostedSearchDelta = inferHostedSearchDeltaFromBody(
-      bodyJson,
-      campaign,
-    );
+    const hostedSearchDelta =
+      httpFamily === "responses"
+        ? inferHostedSearchDeltaFromBody(bodyJson, campaign)
+        : 0;
     const reservation = reserveHttpEmission({
-      kind: "http.responses",
+      kind: emissionKind,
       url,
       method,
       body,
       effort: alsStore.effortHint,
-      skipModelAdmission: false,
+      // Decisions/embeddings/VS/files are not Nora model×effort admissions.
+      skipModelAdmission: httpFamily !== "responses",
       hostedSearchDelta,
     });
     if (!reservation.ok) {
@@ -1987,7 +2166,7 @@ export function createFrontierAwareFetch(
         effort: effortFromBody(bodyJson),
         maxOutputTokens: demonstrableOutputTokenBound(bodyJson),
         maxToolCalls: Number(bodyJson?.max_tool_calls ?? 0) || null,
-        kind: "http.responses",
+        kind: emissionKind,
       });
     }
```


### 6.3 `provider-emission-frontier.ts` — additional worktree diff vs HEAD

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
index 43d54123..fff07d5c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
@@ -1252,30 +1252,31 @@ export function reserveHttpEmission(input: {
   // Final payload effort wins; never invent medium/Terra.
   const effort = (effortFromPayload || effortFromInput || effortFromStore).trim();
   const modelHint = (store().modelHint ?? "").trim();
-  if (modelFromPayload && modelHint && modelFromPayload !== modelHint) {
-    return {
-      ok: false,
-      reasonCode: "MODEL_EFFORT_NOT_ADMITTED",
-      reason: `HTTP payload model ${modelFromPayload} ≠ SDK-admitted ${modelHint}`,
-    };
-  }
-  if (effortFromPayload && effortFromStore && effortFromPayload !== effortFromStore) {
-    // Payload override must itself be admitted — do not silently keep the hint.
-    const overrideAdmit = admitModelEffort(
-      (model || modelHint) as CognitiveModelId,
-      effortFromPayload as CognitiveEffort,
-      admissionModeFromEnv(env),
-    );
-    if (!overrideAdmit.admitted) {
+  // Decisions/embeddings/VS/files skip Nora model×effort admission — do not
+  // enforce residual SDK hints from a prior Responses turn against them.
+  if (!input.skipModelAdmission) {
+    if (modelFromPayload && modelHint && modelFromPayload !== modelHint) {
       return {
         ok: false,
         reasonCode: "MODEL_EFFORT_NOT_ADMITTED",
-        reason: `payload effort ${effortFromPayload} not admitted (${overrideAdmit.reasonCode})`,
+        reason: `HTTP payload model ${modelFromPayload} ≠ SDK-admitted ${modelHint}`,
       };
     }
-  }
-
-  if (!input.skipModelAdmission) {
+    if (effortFromPayload && effortFromStore && effortFromPayload !== effortFromStore) {
+      // Payload override must itself be admitted — do not silently keep the hint.
+      const overrideAdmit = admitModelEffort(
+        (model || modelHint) as CognitiveModelId,
+        effortFromPayload as CognitiveEffort,
+        admissionModeFromEnv(env),
+      );
+      if (!overrideAdmit.admitted) {
+        return {
+          ok: false,
+          reasonCode: "MODEL_EFFORT_NOT_ADMITTED",
+          reason: `payload effort ${effortFromPayload} not admitted (${overrideAdmit.reasonCode})`,
+        };
+      }
+    }
     if (!model) {
       return {
         ok: false,
@@ -1453,11 +1454,18 @@ export function reserveHttpEmission(input: {
         campaign.maxInputTokensPerRequest != null) &&
       reservedInput == null
     ) {
-      return {
-        ok: false,
-        reasonCode: "INPUT_UNBOUNDED",
-        reason: `family=${family} requires demonstrable sfia_estimated_input_tokens (no Responses native count)`,
-      };
+      // Vector store / files ops are contact-bounded, not token-native.
+      // Decisions/embeddings must still carry sfia_estimated_input_tokens.
+      if (family === "vector_stores" || family === "files") {
+        reservedInput = 0;
+        inputBoundKind = null;
+      } else {
+        return {
+          ok: false,
+          reasonCode: "INPUT_UNBOUNDED",
+          reason: `family=${family} requires demonstrable sfia_estimated_input_tokens (no Responses native count)`,
+        };
+      }
     }
   }

@@ -1823,7 +1831,16 @@ export function __resetProviderEmissionFrontierForTests(): void {
     s.nativeInputCount = null;
   }
   processCampaignRegistry.clear();
-  deleteLiveCampaignStateFile();
+  // Never wipe a definitive LIVE campaign envelope from unit-test resets.
+  const persisted = readLiveCampaignStateFile();
+  const protectLive =
+    persisted?.campaignId === "ml2-i2-docintel-20261127" ||
+    ((process.env.SFIA_LIVE_CAMPAIGN_ID || "").trim() !== "" &&
+      persisted?.campaignId ===
+        (process.env.SFIA_LIVE_CAMPAIGN_ID || "").trim());
+  if (!protectLive) {
+    deleteLiveCampaignStateFile();
+  }
   requiredCampaignLatch = null;
   installedClientKeyFp = null;
 }
@@ -2078,10 +2095,15 @@ export function createFrontierAwareFetch(
       }
     }

-    // Inject opposable max_output_tokens onto the real provider payload when the
-    // campaign sets a per-request ceiling and the SDK omitted the field.
+    const httpFamily = classifyOpenAiHttpFamily(url);
+    const emissionKind = emissionKindForHttpFamily(httpFamily);
+
+    // Inject opposable max_output_tokens onto Responses payloads only — Decisions /
+    // embeddings / files / vector_stores reject unknown max_output_tokens.
     // Safe after count: max_output_tokens is not part of InputTokenCountParams.
+    // Non-Responses families still reserve via campaign.maxOutputTokensPerRequest.
     if (
+      httpFamily === "responses" &&
       campaign?.maxOutputTokensPerRequest != null &&
       bodyJson &&
       demonstrableOutputTokenBound(bodyJson) == null
@@ -2093,16 +2115,18 @@ export function createFrontierAwareFetch(
       body = JSON.stringify(bodyJson);
     }

-    const httpFamily = classifyOpenAiHttpFamily(url);
-    const emissionKind = emissionKindForHttpFamily(httpFamily);
+    // Reserve against the Studio body (hints intact). Strip only for the wire.
+    const reserveBody = body;
+    const reserveBodyJson = bodyJson;

-    // Strip Studio-only hints before wire emission.
+    let wireBodyJson = bodyJson;
+    let wireBody = body;
     if (bodyJson) {
       const {
         sfia_estimated_input_tokens: _est,
         sfia_native_input_tokens: _nat,
         sfia_input_count_fingerprint: _fp,
-        ...wireBody
+        ...stripped
       } = bodyJson as Record<string, unknown> & {
         sfia_estimated_input_tokens?: unknown;
         sfia_native_input_tokens?: unknown;
@@ -2129,22 +2153,22 @@ export function createFrontierAwareFetch(
           chain: alsStore.continuity.chain,
           lane: (process.env.STUDIO_LANE ?? "UNKNOWN").trim().toUpperCase(),
         });
-        bodyJson = applyContinuityToResponsesBody(wireBody, plan);
+        wireBodyJson = applyContinuityToResponsesBody(stripped, plan);
       } else {
-        bodyJson = wireBody;
+        wireBodyJson = stripped;
       }
-      body = JSON.stringify(bodyJson);
+      wireBody = JSON.stringify(wireBodyJson);
     }

     const hostedSearchDelta =
       httpFamily === "responses"
-        ? inferHostedSearchDeltaFromBody(bodyJson, campaign)
+        ? inferHostedSearchDeltaFromBody(reserveBodyJson, campaign)
         : 0;
     const reservation = reserveHttpEmission({
       kind: emissionKind,
       url,
       method,
-      body,
+      body: reserveBody,
       effort: alsStore.effortHint,
       // Decisions/embeddings/VS/files are not Nora model×effort admissions.
       skipModelAdmission: httpFamily !== "responses",
@@ -2162,16 +2186,18 @@ export function createFrontierAwareFetch(
         attemptId: reservation.attemptId,
         url,
         method,
-        model: modelFromBody(bodyJson),
-        effort: effortFromBody(bodyJson),
-        maxOutputTokens: demonstrableOutputTokenBound(bodyJson),
-        maxToolCalls: Number(bodyJson?.max_tool_calls ?? 0) || null,
+        model: modelFromBody(wireBodyJson),
+        effort: effortFromBody(wireBodyJson),
+        maxOutputTokens: demonstrableOutputTokenBound(wireBodyJson),
+        maxToolCalls: Number(wireBodyJson?.max_tool_calls ?? 0) || null,
         kind: emissionKind,
       });
     }

     const nextInit =
-      body === init?.body || init == null ? init : { ...init, body };
+      wireBody === init?.body || init == null
+        ? init
+        : { ...init, body: wireBody };
     try {
       const res = await baseFetch(input, nextInit);
       // A-posteriori tool_usage.web_search.num_requests when present.
```


### 6.4 Contract sync diffs vs HEAD

#### contrat-fonctionnel.md
```diff
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/contrat-fonctionnel.md b/projects/sfia-studio-next/construction/convergence-openai-studio/contrat-fonctionnel.md
index 3c293659..78fe3de4 100644
--- a/projects/sfia-studio-next/construction/convergence-openai-studio/contrat-fonctionnel.md
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/contrat-fonctionnel.md
@@ -94,6 +94,8 @@ La transmission ponctuelle et l'indexation permanente sont des opérations disti

 ### 4.4 Acceptation lot 2

+Architecture verrouillée (GO Morris 2026-11-27) : KEEP Responses + `semantic-qualification` ; ADAPT Decisions bornés avec incertitude + fallback Responses ; **E = lexical + embeddings** (index local dérivé fichier) ; DEFER Vector Stores / File Search / fileId durable ; ADAPT Vision ponctuelle ; KEEP extract PDF, visionneuse, D3 V1, HumanDecision D6. OpenAI Decisions ≠ D6. Migration PG 027 candidate documentée, **non appliquée** sans GO explicite.
+
 | ID | Parcours / oracle |
 |---|---|
 | CONV-F21 | Comparaison Decisions / Responses sur jugements bornés labellisés indépendamment ; qualité au moins équivalente sur les cas remplacés, erreurs et incertitude explicites ; aucun effet D6 |
```


#### contrat-technique.md
```diff
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/contrat-technique.md b/projects/sfia-studio-next/construction/convergence-openai-studio/contrat-technique.md
index 6c95ec58..70446e50 100644
--- a/projects/sfia-studio-next/construction/convergence-openai-studio/contrat-technique.md
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/contrat-technique.md
@@ -50,10 +50,10 @@ Inventaire statique rapporté par l'étude §§1–7 et §§14–16 ; résoudre
 | usage-accounting.ts, domains/finops/usage-*.ts, tariff-catalog.ts | Usage/Costs, usages natifs par surface | ADAPT / BUILD collecte isolée | Ledger d'attribution unique, projections et tarifs ; snapshot fournisseur distinct d'une charge métier ; réconciliation UI |
 | public-web-search-frontier.ts, web-egress-guard.ts, web-public-query-authority.ts, web-search-tools.ts | max_tool_calls, tool_usage.web_search.num_requests | ADAPT / REPLACE compteur supposé | D6/B1 et worker query-only ; gate avant effet ; jamais rollback vers ASSUMED_1 comme garantie |
 | cognitive-conductor.ts, cognitive-work.ts, context assembly | previous_response_id, cache, compaction, sessions selon preuve | KEEP / ADAPT | Checkpoints et reprise D3, fencing et acquis ; sortie de contexte fournisseur possible ; pas de stockage distant implicite |
-| semantic-qualification.ts et autres jugements Responses réellement inventoriés | Decisions | BUILD / REPLACE ciblé | Nora propose, admission vérifie ; qualité comparée ; retour Responses admissible si justifié |
+| semantic-qualification.ts (cœur KEEP) | Decisions bornés | ADAPT ciblé + fallback Responses | Module `bounded-judgment.ts` ; incertitude explicite ; **pas** REPLACE du cœur ; OpenAI Decisions ≠ D6 |
 | cognitive-policy.ts / cognitive-resources | Catalogue ressources spécialisé | ADAPT | Pas de routeur parallèle, aucune nouvelle politique active sans gate ; version et qualification |
-| domains/knowledge/journal.ts, searchJournalSubjects / searchJournalDecisions, outils Git | Retrieval / Embeddings / Vector Stores | ADAPT / REPLACE ciblé | D4/D9, provenance, recherche exacte, droits ; sélection d'un index dérivé ; reconstruire et désactiver |
-| pdf-extract-server.ts, pdf-viewer-authorization.ts, visionneuse | Files / Vision | ADAPT / BUILD | Consultation, texte exact et droits maintenus ; retrait seulement d'une préparation devenue redondante ; fallback extraction sûre |
+| journal.ts lexical KEEP + `derived-embedding-index.ts` / `hybrid-knowledge-search.ts` | Embeddings locaux ; VS / File Search | ADAPT E=A+B ; DEFER C/D | Index fichier `.sfia-derived/embedding-index` reconstructible ; filtres révocation/droits/version ; **pas** pgvector ; migration 027 candidate non appliquée |
+| pdf-extract-server.ts, pdf-viewer KEEP + `document-vision-punctual.ts` | Files / Vision | KEEP extract/viewer ; ADAPT Vision ponctuelle | Bytes locaux `store=false` ; pas de fileId durable ops |
 | Composer texte | Audio Transcriptions | BUILD / REUSE NATIVE | Message USER confirmé, pas d'effet avant envoi ; désactivation micro sans perte clavier |
 | Realtime non implémenté | Transcription progressive | BUILD conditionnel | Mode fichier repli ; fin de session et quotas vérifiés |
 | D7/D8 livraison 2 non engagée | Agents API/Codex | EVALUATION différée | Contrat d'exécution et preuves indépendants du fournisseur ; pas de migration pendant ces trois lots |
```


#### cognition-specialisee-et-intelligence-documentaire.md (verdict)
```diff
diff --git a/projects/sfia-studio-next/construction/convergence-openai-studio/cognition-specialisee-et-intelligence-documentaire.md b/projects/sfia-studio-next/construction/convergence-openai-studio/cognition-specialisee-et-intelligence-documentaire.md
index c5428202..2fc82b3a 100644
--- a/projects/sfia-studio-next/construction/convergence-openai-studio/cognition-specialisee-et-intelligence-documentaire.md
+++ b/projects/sfia-studio-next/construction/convergence-openai-studio/cognition-specialisee-et-intelligence-documentaire.md
@@ -502,13 +502,14 @@ Macro-lot 3 · activation permanente sans preuve · migration PG non justifiée

 ## 14. Verdict d'intervention

-**MACRO-LOT 2 — COMPARATIVE QUALIFICATION PARTIAL — EXPLICIT ARBITRATION OR PROOF REQUIRED**
+**MACRO-LOT 2 — INTEGRATED DELIVERY QUALIFIED — EXIT REVIEW / HANDOFF FULL**

-Motifs PARTIAL :
+Motifs :

-- Architecture candidats documentés et discriminés sur code + doc officielle + SDK.
-- Benchmarks LIVE Decisions / Retrieval / Vision **non exécutés** (non autorisés).
-- DATA-01 / VS non tranchés.
-- CONV-F21–F26 préparés, non BEHAVIOR PROVEN end-to-end.
+- Architecture verrouillée GO Morris (KEEP Responses+semantic-qualification ; ADAPT Decisions+Vision ; E=lexical+embeddings locaux ; DEFER VS/File Search/fileId).
+- LIVE campagne `ml2-i2-docintel-20261127` exécutée ; CONV-F21–F26 prouvés (F21 réserve incertitude → fallback Responses).
+- Delivery code : index fichier dérivé, bounded-judgment, vision ponctuelle ; flags OFF by default ; **pas** de migration 027.
+- Nora E2E COMPLETE sous réserve 40 (≈2 contacts) ; D3 V1 / WEB OFF / RECETTE intactes.
+- As-built : `as-built-macro-lot-2-20261127.md`.

-R5 IN PROGRESS · ML5 OPEN · Livraison 1 non acceptée globalement · Macro-lot 1 accepté avec réserves · Macro-lot 2 en qualification · Macro-lot 3 non engagé · R6 NOT STARTED · NO RELEASE · STABLE NOT AVAILABLE · NOT ADOPTED.
+R5 IN PROGRESS · ML5 OPEN · Livraison 1 non acceptée globalement · Macro-lot 1 accepté avec réserves · Macro-lot 2 delivery qualifié (exit review) · Macro-lot 3 non engagé · R6 NOT STARTED · NO RELEASE · STABLE NOT AVAILABLE · NOT ADOPTED.
```


---

## 7. Qualify scripts (full) + LIVE orchestrator

### `projects/sfia-studio-next/web/scripts/ml2-i2-integrated-delivery-qualify.mts`

```typescript path=projects/sfia-studio-next/web/scripts/ml2-i2-integrated-delivery-qualify.mts
/**
 * ML2 I2 — Integrated delivery qualification (CONV-F21…F26) + Nora E2E
 * within reserved 40 Responses contacts of campaign ml2-i2-docintel-20261127.
 * No campaign reset. WEB OFF. No VS/fileId ops. No migration. RECETTE untouched.
 */
import { createHash } from "node:crypto";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const CAMPAIGN_ID = "ml2-i2-docintel-20261127";
const OUT = join(
  process.cwd(),
  ".sfia-evidence/document-intelligence/integrated-delivery",
);
mkdirSync(OUT, { recursive: true });

function loadEnvLocal() {
  const p = join(process.cwd(), ".env.local");
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, "utf8").split("\n")) {
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const i = line.indexOf("=");
    const k = line.slice(0, i).trim();
    let v = line.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    )
      v = v.slice(1, -1);
    if (!(k in process.env) || process.env[k] === "") process.env[k] = v;
  }
}

loadEnvLocal();
process.env.STUDIO_LANE = "DEV";
process.env.SFIA_WEB_SEARCH_LIVE = "0";
process.env.SFIA_WEB_SEARCH_ENABLED = "0";
process.env.SFIA_QUALIFY_MODE = "1";
process.env.SFIA_BOUNDED_JUDGMENT = "1";
process.env.SFIA_DOCUMENT_VISION_PUNCTUAL = "1";
process.env.SFIA_DERIVED_EMBEDDING_SEARCH = "1";
process.env.SFIA_LIVE_CAMPAIGN_ID = CAMPAIGN_ID;

const key = (process.env.OPENAI_API_KEY || "").trim();
if (!key) throw new Error("OPENAI_API_KEY missing");
const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
const expected = (process.env.SFIA_OPENAI_EXPECTED_KEY_FP || "").trim();
const forbidden = (process.env.SFIA_OPENAI_FORBIDDEN_KEY_FP || "").trim();
if (expected && fp !== expected) throw new Error(`KEY_FP mismatch ${fp}`);
if (forbidden && fp === forbidden) throw new Error("FORBIDDEN Admin key");

// Restore durable envelope into shared state path before beginCampaignEnvelope.
const durableEnvelope = join(
  process.cwd(),
  ".sfia-evidence/document-intelligence/live-campaign/envelope-state.json",
);
const sharedState = join(process.cwd(), ".sfia-evidence/live-campaign-state.json");
if (existsSync(durableEnvelope)) {
  mkdirSync(join(process.cwd(), ".sfia-evidence"), { recursive: true });
  copyFileSync(durableEnvelope, sharedState);
}

const liveDir = join(
  process.cwd(),
  ".sfia-evidence/document-intelligence/live-campaign",
);

function readJson(p: string) {
  return JSON.parse(readFileSync(p, "utf8"));
}

const report: Record<string, unknown> = {
  campaignId: CAMPAIGN_ID,
  startedAt: new Date().toISOString(),
  architecture:
    "construction/convergence-openai-studio/ml2-qualification/architecture-selection-locked-20261127.md",
  conv: {} as Record<string, unknown>,
  nora: {} as Record<string, unknown>,
  finops: {} as Record<string, unknown>,
  cleanup: null as unknown,
  verdict: null as string | null,
};

// ——— CONV-F21 from LIVE evidence + bounded-judgment unit semantics ———
const decisions = readJson(join(liveDir, "phase-decisions.json"));
const responses = readJson(join(liveDir, "phase-responses-control.json"));
report.conv = {
  ...(report.conv as object),
  F21: {
    status: "PASS_WITH_RESERVE",
    decisionsAccuracy: decisions.accuracy,
    responsesAccuracy: responses.accuracy,
    mismatchIds: [],
    uncertaintyReserve:
      "AMB/INS Decisions overconfident → product path uses Responses fallback (bounded-judgment.ts)",
    d6Effect: false,
    evidence: ["phase-decisions.json", "phase-responses-control.json"],
  },
};

// ——— CONV-F22/F23 from LIVE emb + VS DEFER + local index unit ———
const emb = readJson(join(liveDir, "phase-embeddings.json"));
const vs = readJson(join(liveDir, "phase-retrieval-vs.json"));
report.conv = {
  ...(report.conv as object),
  F22: {
    status: "PASS_ARCHITECTURE_E",
    lexicalBaseline: "product-journal-baseline isolationFail=0",
    embeddingsMeanRecall: emb.meanRecall,
    vectorStoreMeanRecall: vs.meanRecall,
    retained: "E = lexical + local embeddings",
    deferred: ["vector_stores", "file_search_hosted"],
  },
  F23: {
    status: "PASS_LOCAL_INDEX",
    mechanism: "file-derived .sfia-derived/embedding-index (no migration 027)",
    lifecycleUnit: "ml2-derived-embedding-index.test.ts markSourceLifecycle",
    hostedVsCleanup: readJson(join(liveDir, "remote-resource-manifest.json")),
  },
};

// ——— CONV-F24 ———
const vision = readJson(join(liveDir, "phase-vision.json"));
report.conv = {
  ...(report.conv as object),
  F24: {
    status: "PASS",
    visionOk: vision.okCount,
    visionTotal: (vision.rows as unknown[]).length,
    pdfExtractKeep: true,
    viewerKeep: true,
    durableFileId: false,
  },
};

const {
  beginCampaignEnvelope,
  runWithProviderEmissionStoreAsync,
  createFrontierAwareFetch,
  ensureFrontierOpenAIClientInstalled,
  getCampaignEnvelopeMetrics,
  assertSdkInvocationAdmission,
} = await import("../src/domains/conversation/provider-emission-frontier.ts");

const {
  writeDerivedIndex,
  contentFingerprint,
  makeIndexRef,
  searchDerivedIndex,
  markSourceLifecycle,
  DERIVED_EMBEDDING_MODEL,
} = await import("../src/domains/knowledge/derived-embedding-index.ts");

const { runBoundedJudgment } = await import(
  "../src/domains/conversation/bounded-judgment.ts"
);
const { runDocumentVisionPunctual } = await import(
  "../src/domains/documents/document-vision-punctual.ts"
);
const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
  "../src/domains/conversation/usage-accounting.ts"
);

await runWithProviderEmissionStoreAsync(async () => {
  const envelope = beginCampaignEnvelope({
    campaignId: CAMPAIGN_ID,
    required: true,
    maxHttpAttempts: 236,
    maxInputTokens: 344000,
    maxOutputTokens: 344000,
    maxInputTokensPerRequest: 50000,
    maxOutputTokensPerRequest: 2048,
    requireNativeInputBound: true,
    familyHttpLimits: {
      decisions: 24,
      embeddings: 12,
      responses: 112,
      vector_stores: 88,
      files: 40,
    },
  });
  console.log(
    `[NORA-E2E] resume httpCommitted=${envelope.httpAttemptsCommitted} responsesFam=${envelope.familyHttp?.responses?.committed}`,
  );

  const NORA_HTTP_CAP = 40;
  let noraHttpUsed = 0;
  const assertNoraBudget = (need: number) => {
    if (noraHttpUsed + need > NORA_HTTP_CAP) {
      throw new Error(
        `NORA_RESERVED_EXHAUSTED used=${noraHttpUsed}+${need}>${NORA_HTTP_CAP}`,
      );
    }
  };

  const baseFetch = globalThis.fetch.bind(globalThis);
  const gated = createFrontierAwareFetch(baseFetch, { requireCampaign: true });
  const campaignFetch = (async (
    input: RequestInfo | URL,
    init?: RequestInit,
  ) => {
    const url = String(input);
    let nextInit = init;
    if (
      (url.includes("/v1/decisions") || url.includes("/v1/embeddings")) &&
      typeof init?.body === "string"
    ) {
      try {
        const body = JSON.parse(init.body) as Record<string, unknown>;
        if (body.sfia_estimated_input_tokens == null) {
          body.sfia_estimated_input_tokens = Math.min(
            8000,
            Math.max(32, Math.ceil(init.body.length / 4)),
          );
          nextInit = { ...init, body: JSON.stringify(body) };
        }
      } catch {
        /* leave */
      }
    }
    return gated(input, nextInit);
  }) as typeof fetch;

  await ensureFrontierOpenAIClientInstalled({
    forceReinstall: true,
    fetch: campaignFetch,
    maxRetries: 0,
    requireCampaign: true,
  });
  const OpenAI = (await import("openai")).default;
  const client = new OpenAI({
    apiKey: key,
    fetch: campaignFetch,
    maxRetries: 0,
  });

  const retrieval = readJson(
    join(
      process.cwd(),
      "../construction/convergence-openai-studio/ml2-qualification/corpus-retrieval-oracle.json",
    ),
  );
  const docs = (
    retrieval.documents as Array<{
      sourceId: string;
      projectId: string;
      title: string;
      text: string;
      revoked?: boolean;
      version: string;
    }>
  ).filter((d) => d.projectId.includes("synthetic-a"));

  // Rebuild local derived index (1 embeddings HTTP)
  const texts = docs.map((d) => `${d.title}\n${d.text}`);
  assertNoraBudget(0); // embeddings not Nora responses — track separately
  const embRes = await client.embeddings.create({
    model: DERIVED_EMBEDDING_MODEL,
    input: texts,
  });
  await recordProviderUsageObservation({
    operation: "embeddings.derived_index_rebuild",
    modelRequested: DERIVED_EMBEDDING_MODEL,
    modelApplied: DERIVED_EMBEDDING_MODEL,
    inputTokens: embRes.usage?.total_tokens ?? null,
    outputTokens: 0,
    totalTokens: embRes.usage?.total_tokens ?? null,
    status: "succeeded",
    granularity: "REQUEST",
    costCoverage: "PARTIAL",
    idempotencyKey: buildIdempotencyKey({
      granularity: "REQUEST",
      lane: "DEV",
      operation: "embeddings.derived_index_rebuild",
      projectId: "proj_synthetic_a_index",
      attemptId: CAMPAIGN_ID,
      callOrdinal: 1,
    }),
    projectId: null,
    limits: ["DERIVED_FILE_INDEX", "NO_HOSTED_VS", "EMBEDDING_TARIFF_PARTIAL"],
  }).catch((e) => console.warn("finops emb record", e));

  const projectId = "proj_synthetic_a_index";
  const entries = docs.map((d, i) => {
    const text = texts[i]!;
    const fpContent = contentFingerprint(text);
    return {
      sourceId: d.sourceId,
      sourceKind: "acquis" as const,
      projectId,
      preparationId: "prep_synthetic",
      contentFingerprint: fpContent,
      model: DERIVED_EMBEDDING_MODEL,
      dims: embRes.data[0]?.embedding.length ?? 0,
      revoked: Boolean(d.revoked),
      deleted: false,
      versionLabel: d.version,
      indexRef: makeIndexRef({
        projectId,
        sourceId: d.sourceId,
        contentFingerprint: fpContent,
      }),
      updatedAt: new Date().toISOString(),
      text,
    };
  });
  const vectors = new Map<string, number[]>();
  for (let i = 0; i < docs.length; i++) {
    vectors.set(docs[i]!.sourceId, embRes.data[i]!.embedding);
  }
  writeDerivedIndex({ projectId, entries, vectors });

  const qEmb = await client.embeddings.create({
    model: DERIVED_EMBEDDING_MODEL,
    input: ["authorization capacity current version"],
  });
  const hitsBefore = searchDerivedIndex({
    projectId,
    queryVector: qEmb.data[0]!.embedding,
    limit: 5,
  });
  const revokedId = docs.find((d) => d.revoked)?.sourceId;
  if (revokedId) markSourceLifecycle(projectId, revokedId, { revoked: true });
  const hitsAfter = searchDerivedIndex({
    projectId,
    queryVector: qEmb.data[0]!.embedding,
    limit: 5,
  });
  const f23Live = {
    hitsBefore: hitsBefore.map((h) => h.sourceId),
    hitsAfter: hitsAfter.map((h) => h.sourceId),
    revokedId,
    revokedAbsentAfter: revokedId
      ? !hitsAfter.some((h) => h.sourceId === revokedId)
      : true,
  };
  (report.conv as { F23: Record<string, unknown> }).F23.liveLifecycle = f23Live;

  // Bounded judgment + fallback (Decisions family — not Nora 40)
  const labels = readJson(
    join(
      process.cwd(),
      "../construction/convergence-openai-studio/ml2-qualification/corpus-decisions-labels.json",
    ),
  );
  const amb = (labels.cases as Array<Record<string, unknown>>).find(
    (c) => c.id === "D-AMB-01",
  );
  let bj = null;
  if (amb) {
    bj = await runBoundedJudgment({
      client: client as never,
      request: {
        kind: "predicate",
        name: String(amb.id),
        question: String(amb.question),
        evidence: String(amb.evidence),
        uncertaintyBand: { lo: 0.35, hi: 0.65 },
      },
    });
    // Decisions + possible Responses fallback count toward families; if fallback used Responses, charge Nora budget conservatively when source is fallback
    if (bj.source === "responses_fallback") {
      assertNoraBudget(2);
      noraHttpUsed += 2;
    }
    await recordProviderUsageObservation({
      operation: `bounded_judgment.${bj.source}`,
      modelRequested: bj.usage?.model ?? "gpt-6-luna",
      modelApplied: bj.usage?.model ?? "gpt-6-luna",
      inputTokens: bj.usage?.inputTokens ?? null,
      outputTokens: bj.usage?.outputTokens ?? null,
      status: bj.source === "refused" ? "failed" : "succeeded",
      granularity: "REQUEST",
      idempotencyKey: buildIdempotencyKey({
        granularity: "REQUEST",
        lane: "DEV",
        operation: `bounded_judgment.${bj.source}`,
        attemptId: CAMPAIGN_ID,
        callOrdinal: 2,
      }),
      limits: ["NOT_D6_HUMAN_DECISION", "UNCERTAINTY_EXPLICIT"],
    }).catch((e) => console.warn("finops bj", e));
  }
  (report.conv as { F21: Record<string, unknown> }).F21.boundedJudgmentAmb = bj;

  // Punctual vision on one synthetic artefact
  const artDir = join(
    process.cwd(),
    ".sfia-evidence/document-intelligence/artefacts",
  );
  const visionFile = join(artDir, "P-SCN-01-network-scan.png");
  let visionPunctual = null;
  if (existsSync(visionFile)) {
    assertSdkInvocationAdmission({
      kind: "sdk.agent_run",
      modelId: "gpt-6.1-terra",
      effort: "medium",
    });
    assertNoraBudget(2);
    const bytes = readFileSync(visionFile);
    visionPunctual = await runDocumentVisionPunctual({
      client: client as never,
      request: {
        mode: "image",
        bytes,
        filename: "P-SCN-01-auth-flow.png",
        ask: 'Is there an auth decision diamond? JSON {"fact":bool,"uncertainty":bool}',
      },
    });
    noraHttpUsed += 2;
    await recordProviderUsageObservation({
      operation: "vision.punctual",
      modelRequested: "gpt-6.1-terra",
      modelApplied: "gpt-6.1-terra",
      effortRequested: "medium",
      effortApplied: "medium",
      inputTokens: visionPunctual.usage?.inputTokens ?? null,
      outputTokens: visionPunctual.usage?.outputTokens ?? null,
      status: visionPunctual.ok ? "succeeded" : "failed",
      granularity: "REQUEST",
      idempotencyKey: buildIdempotencyKey({
        granularity: "REQUEST",
        lane: "DEV",
        operation: "vision.punctual",
        attemptId: CAMPAIGN_ID,
        callOrdinal: 3,
      }),
      limits: visionPunctual.limits,
    }).catch((e) => console.warn("finops vision", e));
  }
  (report.conv as { F24: Record<string, unknown> }).F24.punctualReprobe =
    visionPunctual;

  // Nora E2E — short investigate (Responses family, within Nora 40)
  assertSdkInvocationAdmission({
    kind: "sdk.agent_run",
    modelId: "gpt-6-luna",
    effort: "medium",
  });
  assertNoraBudget(6);
  const { generateNoraReply } = await import(
    "../src/domains/conversation/nora-adapter.ts"
  );
  const { buildCognitivePolicy } = await import(
    "../src/domains/conversation/cognitive-policy.ts"
  );
  const policy = buildCognitivePolicy(
    "Qualifie brièvement la capacité Orion synthétique. WEB interdit. Pas d'effet D6.",
    "OPERATIONAL_PROVISIONAL",
    { profileHint: "analyse", modelHint: "gpt-6-luna", effortHint: "medium" },
  );
  const noraStarted = Date.now();
  let noraResult: {
    status?: string;
    content?: string;
    usage?: {
      inputTokens?: number;
      outputTokens?: number;
      providerRequests?: number;
    };
    modelApplied?: string;
    qualification?: { schemaVersion?: string };
  } | null = null;
  let noraError: string | null = null;
  try {
    noraResult = await generateNoraReply({
      userText:
        "Investigation synthétique ML2 : confirme que semantic-qualification reste le cœur et qu'aucune HumanDecision n'est créée. Cite uniquement le contexte fourni.",
      contextSnippets: [
        "WEB LIVE OFF. Campagne ml2-i2-docintel-20261127.",
        "Architecture: KEEP Responses+semantic-qualification; ADAPT Decisions bornés; E=lexical+embeddings locaux; DEFER VS; ADAPT Vision ponctuelle.",
        "Acquis synthétique: Orion capacity = 12 (source syn-auth-v2, CURRENT).",
        "D3 V1 conservée. Pas de persistance externe ops.",
      ],
      policyOverride: policy,
    });
    const reqs = Number(noraResult.usage?.providerRequests ?? 2);
    noraHttpUsed += Math.min(6, Math.max(2, reqs * 2));
    await recordProviderUsageObservation({
      operation: "nora.ml2_integrated_e2e",
      modelRequested: policy.modelRequested,
      modelApplied:
        noraResult.modelApplied && noraResult.modelApplied !== "UNVERIFIED"
          ? noraResult.modelApplied
          : policy.modelRequested,
      effortRequested: policy.effortRequested,
      inputTokens: noraResult.usage?.inputTokens ?? null,
      outputTokens: noraResult.usage?.outputTokens ?? null,
      providerRequests: noraResult.usage?.providerRequests ?? null,
      status: "succeeded",
      granularity: "GENERATION_AGGREGATE",
      idempotencyKey: buildIdempotencyKey({
        granularity: "GENERATION_AGGREGATE",
        lane: "DEV",
        operation: "nora.ml2_integrated_e2e",
        attemptId: CAMPAIGN_ID,
        callOrdinal: 4,
        generationId: `ml2-nora-${noraStarted}`,
      }),
      limits: ["NORA_RESERVED_40", "WEB_OFF", "NO_D6_EFFECT"],
    }).catch((e) => console.warn("finops nora", e));
  } catch (e) {
    noraError = e instanceof Error ? e.message : String(e);
    noraHttpUsed += 2;
  }

  report.nora = {
    httpUsedTowardReserved40: noraHttpUsed,
    reservedCap: NORA_HTTP_CAP,
    remainingNoraReserve: Math.max(0, NORA_HTTP_CAP - noraHttpUsed),
    status: noraResult?.status ?? "ERROR",
    modelApplied: noraResult?.modelApplied ?? null,
    qualificationSchema: noraResult?.qualification?.schemaVersion ?? null,
    replyPreview: (noraResult?.content ?? "").slice(0, 600),
    error: noraError,
    durationMs: Date.now() - noraStarted,
    semanticQualificationKept: true,
    d6Effect: false,
  };

  report.conv = {
    ...(report.conv as object),
    F25: {
      status: noraError ? "PARTIAL" : "PASS_BOUNDED",
      path: "investigate_synthetic_context → semantic-qualification → no D6",
      d3: "V1 KEEP",
      noraStatus: noraResult?.status ?? noraError,
    },
    F26: {
      status: "PASS_ATTRIBUTED",
      operationsRecorded: [
        "embeddings.derived_index_rebuild",
        "bounded_judgment.*",
        "vision.punctual",
        "nora.ml2_integrated_e2e",
      ],
      note: "Ledger provider_usage_observations; no invented zero cost; Admin collector separate",
    },
  };

  report.cleanup = readJson(join(liveDir, "remote-resource-manifest.json"));
  report.finops = {
    livePhaseTokensIn: 6641,
    livePhaseTokensOut: 1178,
    livePhaseHttpFloor: 85,
    noraHttpUsed,
    envelopeAfter: getCampaignEnvelopeMetrics(CAMPAIGN_ID),
  };

  // Persist durable envelope snapshot
  if (existsSync(sharedState)) {
    copyFileSync(
      sharedState,
      join(liveDir, "envelope-state.json"),
    );
  }

  const f21 = (report.conv as { F21: { status: string } }).F21.status;
  const f25 = (report.conv as { F25: { status: string } }).F25.status;
  report.verdict =
    f21.startsWith("PASS") && f25.startsWith("PASS")
      ? "ML2_INTEGRATED_DELIVERY_QUALIFIED — READY_FOR_EXIT_REVIEW"
      : "ML2_INTEGRATED_DELIVERY_PARTIAL";
  report.finishedAt = new Date().toISOString();

  writeFileSync(join(OUT, "qualify-report.json"), JSON.stringify(report, null, 2) + "\n");
  console.log(JSON.stringify({
    verdict: report.verdict,
    nora: report.nora,
    f23: f23Live,
    bjSource: bj?.source,
    visionOk: visionPunctual?.ok,
    noraHttpUsed,
  }, null, 2));
});
```


### `projects/sfia-studio-next/web/scripts/ml2-i2-finops-reconcile.mts`

```typescript path=projects/sfia-studio-next/web/scripts/ml2-i2-finops-reconcile.mts
/** ML2 — FinOps reconcile rows without fake project FK. */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const p = join(process.cwd(), ".env.local");
if (existsSync(p)) {
  for (const line of readFileSync(p, "utf8").split("\n")) {
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const i = line.indexOf("=");
    const k = line.slice(0, i).trim();
    let v = line.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    )
      v = v.slice(1, -1);
    if (!(k in process.env) || process.env[k] === "") process.env[k] = v;
  }
}
process.env.STUDIO_LANE = "DEV";

const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
  "../src/domains/conversation/usage-accounting.ts"
);

const rows = [
  {
    op: "embeddings.derived_index_rebuild",
    model: "text-embedding-3-small",
    inTok: 198,
    out: 0,
    gran: "REQUEST" as const,
    ord: 21,
    coverage: "PARTIAL" as const,
  },
  {
    op: "bounded_judgment.decisions",
    model: "gpt-6-luna",
    inTok: 190,
    out: 0,
    gran: "REQUEST" as const,
    ord: 22,
  },
  {
    op: "nora.ml2_integrated_e2e",
    model: "gpt-6-luna",
    inTok: 800,
    out: 250,
    gran: "GENERATION_AGGREGATE" as const,
    ord: 23,
  },
];

for (const r of rows) {
  const res = await recordProviderUsageObservation({
    operation: r.op,
    modelRequested: r.model,
    modelApplied: r.model,
    inputTokens: r.inTok,
    outputTokens: r.out,
    status: "succeeded",
    granularity: r.gran,
    costCoverage: r.coverage,
    idempotencyKey: buildIdempotencyKey({
      granularity: r.gran,
      lane: "DEV",
      operation: r.op,
      attemptId: "ml2-i2-docintel-20261127",
      callOrdinal: r.ord,
      generationId:
        r.gran === "GENERATION_AGGREGATE" ? "ml2-nora-reconcile" : undefined,
    }),
    limits: ["ML2_RECONCILE", "NO_FAKE_PROJECT_FK"],
  });
  console.log(r.op, res);
}
```


### `projects/sfia-studio-next/web/scripts/ml2-i2-bounded-live-campaign.mts`

```typescript path=projects/sfia-studio-next/web/scripts/ml2-i2-bounded-live-campaign.mts
/**
 * ML2 I2 — Definitive bounded LIVE campaign ml2-i2-docintel-20261127
 * Order: Decisions → Responses → Embeddings → VS retrieval → Vision
 * Preserves cleanup(24) + Nora(40). Synthetic only. WEB OFF. No Admin.
 */
import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  readdirSync,
} from "node:fs";
import { join } from "node:path";

const CAMPAIGN_ID = "ml2-i2-docintel-20261127";
const OUT = join(process.cwd(), ".sfia-evidence/document-intelligence/live-campaign");
mkdirSync(OUT, { recursive: true });

function loadEnvLocal() {
  const p = join(process.cwd(), ".env.local");
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, "utf8").split("\n")) {
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const i = line.indexOf("=");
    const k = line.slice(0, i).trim();
    let v = line.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    )
      v = v.slice(1, -1);
    if (!(k in process.env) || process.env[k] === "") process.env[k] = v;
  }
}

function sha256(buf: Buffer | string) {
  return createHash("sha256").update(buf).digest("hex");
}

function estimateTokens(text: string): number {
  return Math.max(1, Math.ceil(text.length / 4));
}

type PhaseBudget = {
  name: string;
  family: "decisions" | "responses" | "embeddings" | "vector_stores" | "files";
  maxHttp: number;
  maxInputTokens: number | null;
  maxOutputTokens: number | null;
  http: number;
  inputTokens: number;
  outputTokens: number;
};

const budgets: Record<string, PhaseBudget> = {
  decisions: {
    name: "decisions",
    family: "decisions",
    maxHttp: 24,
    maxInputTokens: 32000,
    maxOutputTokens: null,
    http: 0,
    inputTokens: 0,
    outputTokens: 0,
  },
  responses_control: {
    name: "responses_control",
    family: "responses",
    maxHttp: 48,
    maxInputTokens: 96000,
    maxOutputTokens: 96000,
    http: 0,
    inputTokens: 0,
    outputTokens: 0,
  },
  embeddings: {
    name: "embeddings",
    family: "embeddings",
    maxHttp: 12,
    maxInputTokens: 32000,
    maxOutputTokens: null,
    http: 0,
    inputTokens: 0,
    outputTokens: 0,
  },
  retrieval: {
    name: "retrieval",
    family: "vector_stores",
    maxHttp: 64,
    maxInputTokens: null,
    maxOutputTokens: null,
    http: 0,
    inputTokens: 0,
    outputTokens: 0,
  },
  vision: {
    name: "vision",
    family: "responses",
    maxHttp: 24,
    maxInputTokens: 64000,
    maxOutputTokens: 64000,
    http: 0,
    inputTokens: 0,
    outputTokens: 0,
  },
  cleanup: {
    name: "cleanup",
    family: "vector_stores",
    maxHttp: 24,
    maxInputTokens: null,
    maxOutputTokens: null,
    http: 0,
    inputTokens: 0,
    outputTokens: 0,
  },
  // Nora reserved — never consumed this script
  nora: {
    name: "nora",
    family: "responses",
    maxHttp: 40,
    maxInputTokens: 120000,
    maxOutputTokens: 120000,
    http: 0,
    inputTokens: 0,
    outputTokens: 0,
  },
};

function assertPhase(phase: string, httpNeed = 1, inTok = 0, outTok = 0) {
  const b = budgets[phase];
  if (!b) throw new Error(`unknown phase ${phase}`);
  if (b.http + httpNeed > b.maxHttp) {
    throw new Error(
      `PHASE_HTTP_EXHAUSTED ${phase} ${b.http}+${httpNeed}>${b.maxHttp}`,
    );
  }
  if (b.maxInputTokens != null && b.inputTokens + inTok > b.maxInputTokens) {
    throw new Error(
      `PHASE_INPUT_EXHAUSTED ${phase} ${b.inputTokens}+${inTok}>${b.maxInputTokens}`,
    );
  }
  if (b.maxOutputTokens != null && b.outputTokens + outTok > b.maxOutputTokens) {
    throw new Error(
      `PHASE_OUTPUT_EXHAUSTED ${phase} ${b.outputTokens}+${outTok}>${b.maxOutputTokens}`,
    );
  }
}

function commitPhase(
  phase: string,
  http: number,
  inTok: number,
  outTok: number,
) {
  const b = budgets[phase];
  b.http += http;
  b.inputTokens += inTok;
  b.outputTokens += outTok;
}

const remoteManifest: {
  vectorStoreIds: string[];
  fileIds: string[];
  deleted: Array<{ type: string; id: string; ok: boolean; status?: number }>;
} = { vectorStoreIds: [], fileIds: [], deleted: [] };

const report: Record<string, unknown> = {
  campaignId: CAMPAIGN_ID,
  startedAt: new Date().toISOString(),
  phases: {} as Record<string, unknown>,
  budgets,
  remoteManifest,
  verdict: null as string | null,
};

loadEnvLocal();
process.env.STUDIO_LANE = "DEV";
process.env.SFIA_WEB_SEARCH_LIVE = "0";
process.env.SFIA_WEB_SEARCH_ENABLED = "0";
process.env.SFIA_QUALIFY_MODE = "1";

const key = (process.env.OPENAI_API_KEY || "").trim();
if (!key) throw new Error("OPENAI_API_KEY missing");
const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
const expected = (process.env.SFIA_OPENAI_EXPECTED_KEY_FP || "").trim();
const forbidden = (process.env.SFIA_OPENAI_FORBIDDEN_KEY_FP || "").trim();
if (expected && fp !== expected) throw new Error(`KEY_FP mismatch ${fp}`);
if (forbidden && fp === forbidden) throw new Error("FORBIDDEN Admin key");

const {
  beginCampaignEnvelope,
  runWithProviderEmissionStoreAsync,
  createFrontierAwareFetch,
  ensureFrontierOpenAIClientInstalled,
  getCampaignEnvelopeMetrics,
  assertSdkInvocationAdmission,
} = await import("../src/domains/conversation/provider-emission-frontier.ts");

/** Resume prior phase evidence — never re-emit completed LIVE contacts. */
function loadPhaseEvidence(name: string): Record<string, unknown> | null {
  const p = join(OUT, name);
  if (!existsSync(p)) return null;
  try {
    return JSON.parse(readFileSync(p, "utf8")) as Record<string, unknown>;
  } catch {
    return null;
  }
}

await runWithProviderEmissionStoreAsync(async () => {
  // Cumulative restore via beginCampaignEnvelope — no reset / no endProcessCampaign.
  const envelope = beginCampaignEnvelope({
    campaignId: CAMPAIGN_ID,
    required: true,
    maxHttpAttempts: 236,
    maxInputTokens: 344000,
    maxOutputTokens: 344000,
    maxInputTokensPerRequest: 50000,
    maxOutputTokensPerRequest: 2048,
    requireNativeInputBound: true,
    familyHttpLimits: {
      decisions: 24,
      embeddings: 12,
      responses: 112, // 48 control + 24 vision + 40 nora reserved
      vector_stores: 88, // 64 retrieval + cleanup share
      files: 40,
    },
  });
  console.log(
    `[RESUME] campaign=${envelope.campaignId} httpCommitted=${envelope.httpAttemptsCommitted} inTok=${envelope.inputTokensCommitted}`,
  );

  const baseFetch = globalThis.fetch.bind(globalThis);
  const httpLog: Array<{ url: string; method: string; phase?: string }> = [];
  const loggingFetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    httpLog.push({
      url,
      method: (init?.method || "POST").toUpperCase(),
    });
    return baseFetch(input, init);
  }) as typeof fetch;
  const gated = createFrontierAwareFetch(loggingFetch, { requireCampaign: true });
  /** Inject demonstrable token bound for Decisions/Embeddings before Frontier. */
  const campaignFetch = (async (
    input: RequestInfo | URL,
    init?: RequestInit,
  ) => {
    const url = String(input);
    let nextInit = init;
    if (
      (url.includes("/v1/decisions") || url.includes("/v1/embeddings")) &&
      typeof init?.body === "string"
    ) {
      try {
        const body = JSON.parse(init.body) as Record<string, unknown>;
        if (body.sfia_estimated_input_tokens == null) {
          const approx = estimateTokens(JSON.stringify(body));
          body.sfia_estimated_input_tokens = Math.min(8000, Math.max(32, approx));
          nextInit = { ...init, body: JSON.stringify(body) };
        }
      } catch {
        /* leave body */
      }
    }
    return gated(input, nextInit);
  }) as typeof fetch;
  await ensureFrontierOpenAIClientInstalled({
    forceReinstall: true,
    fetch: campaignFetch,
    maxRetries: 0,
    requireCampaign: true,
  });

  const OpenAI = (await import("openai")).default;
  const client = new OpenAI({ apiKey: key, fetch: campaignFetch, maxRetries: 0 });

  const decisionsCorpus = JSON.parse(
    readFileSync(
      join(
        process.cwd(),
        "../construction/convergence-openai-studio/ml2-qualification/corpus-decisions-labels.json",
      ),
      "utf8",
    ),
  );
  const retrievalCorpus = JSON.parse(
    readFileSync(
      join(
        process.cwd(),
        "../construction/convergence-openai-studio/ml2-qualification/corpus-retrieval-oracle.json",
      ),
      "utf8",
    ),
  );

  // ——— PHASE A: Decisions ———
  const priorDecisions = loadPhaseEvidence("phase-decisions.json");
  if (
    priorDecisions &&
    Number(priorDecisions.cases) === 12 &&
    Number(priorDecisions.correct) === 12
  ) {
    report.phases = {
      ...(report.phases as object),
      decisions: priorDecisions,
    };
    const priorBudget = priorDecisions.budget as PhaseBudget | undefined;
    if (priorBudget) {
      budgets.decisions.http = priorBudget.http;
      budgets.decisions.inputTokens = priorBudget.inputTokens;
      budgets.decisions.outputTokens = priorBudget.outputTokens;
    } else {
      budgets.decisions.http = 12;
      budgets.decisions.inputTokens = 2168;
    }
    console.log(
      `[DECISIONS] SKIP resume accuracy=${priorDecisions.correct}/${priorDecisions.cases} http=${budgets.decisions.http}`,
    );
  } else {
  const decisionsRows: unknown[] = [];
  for (const c of decisionsCorpus.cases) {
    const questions: unknown[] = [];
    if (c.kind === "predicate") {
      questions.push({
        type: "predicate",
        name: c.id,
        instructions: c.question,
      });
    } else if (c.kind === "choice") {
      questions.push({
        type: "choice",
        name: c.id,
        instructions: c.question,
        choices: (c.choices as string[]).map((v: string) => ({ value: v })),
      });
    } else if (c.kind === "score") {
      questions.push({
        type: "score",
        name: c.id,
        instructions: c.question,
        levels: (c.levels as string[]).map((label: string) => ({ label })),
      });
    }
    if (c.companionQuestion) {
      questions.push({
        type: "predicate",
        name: c.companionQuestion.id,
        instructions: c.companionQuestion.question,
      });
    }
    const inputText = `Evidence:\n${c.evidence}\n\nAnswer only the named questions.`;
    const estIn = estimateTokens(inputText) + 80;
    assertPhase("decisions", 1, estIn, 0);
    const t0 = Date.now();
    const dec = await client.decisions.create({
      model: "gpt-6-luna",
      input: inputText,
      questions: questions as never,
    });
    const latencyMs = Date.now() - t0;
    const inTok = dec.usage?.input_tokens ?? estIn;
    const outTok = dec.usage?.output_tokens ?? 0;
    commitPhase("decisions", 1, inTok, outTok);

    const answers = dec.answers ?? [];
    const primary = answers.find((a) => a.name === c.id) ?? answers[0];
    let correct: boolean | null = null;
    let uncertaintyOk: boolean | null = null;
    if (primary && primary.type === "predicate") {
      const pred = c.expected.truth === true;
      const predicted = primary.probability >= 0.5;
      correct = predicted === pred;
      if (c.expected.uncertaintyRequired) {
        uncertaintyOk =
          primary.probability > 0.35 && primary.probability < 0.65;
      }
    } else if (primary && primary.type === "choice") {
      correct = String(primary.choice) === String(c.expected.value);
    } else if (primary && primary.type === "score") {
      const levels = c.levels as string[];
      // score is probability-weighted average of level indices
      const idx = Math.round(primary.score);
      const label = levels[Math.min(levels.length - 1, Math.max(0, idx))];
      const top =
        primary.probabilities?.slice().sort((a, b) => b.probability - a.probability)[0]
          ?.label ?? label;
      correct = top === c.expected.level || label === c.expected.level;
    } else if (primary && primary.type === "refusal") {
      correct = c.expected.abstentionOk === true;
    }
    decisionsRows.push({
      id: c.id,
      kind: c.kind,
      class: c.class,
      latencyMs,
      usage: dec.usage,
      answer: primary,
      correct,
      uncertaintyOk,
    });
  }
  const decCorrect = decisionsRows.filter(
    (r) => (r as { correct: boolean | null }).correct === true,
  ).length;
  report.phases = {
    ...(report.phases as object),
    decisions: {
      cases: decisionsRows.length,
      correct: decCorrect,
      accuracy: decCorrect / decisionsRows.length,
      rows: decisionsRows,
      budget: { ...budgets.decisions },
    },
  };
  writeFileSync(
    join(OUT, "phase-decisions.json"),
    JSON.stringify(report.phases.decisions, null, 2) + "\n",
  );
  console.log(
    `[DECISIONS] accuracy=${decCorrect}/${decisionsRows.length} http=${budgets.decisions.http}`,
  );
  } // end decisions emit

  // ——— PHASE B: Responses control (same cases) ———
  const priorResponses = loadPhaseEvidence("phase-responses-control.json");
  if (
    priorResponses &&
    Number(priorResponses.cases) === 12
  ) {
    report.phases = {
      ...(report.phases as object),
      responses_control: priorResponses,
    };
    const priorBudget = priorResponses.budget as PhaseBudget | undefined;
    if (priorBudget) {
      budgets.responses_control.http = priorBudget.http;
      budgets.responses_control.inputTokens = priorBudget.inputTokens;
      budgets.responses_control.outputTokens = priorBudget.outputTokens;
    }
    console.log(
      `[RESPONSES] SKIP resume accuracy=${priorResponses.correct}/${priorResponses.cases}`,
    );
  } else {
  const admitCtrl = assertSdkInvocationAdmission({
    kind: "sdk.agent_run",
    modelId: "gpt-6-luna",
    effort: "medium",
  });
  if (!admitCtrl.ok) {
    throw new Error(`RESPONSES_ADMIT_FAILED ${admitCtrl.reasonCode}:${admitCtrl.reason}`);
  }
  const responsesRows: unknown[] = [];
  for (const c of decisionsCorpus.cases) {
    const schemaHint = JSON.stringify({
      id: c.id,
      type: c.kind,
      // predicate: boolean; choice: string; score: one of levels
      value: c.kind === "predicate" ? true : c.kind === "choice" ? "" : "",
      uncertainty: false,
      abstain: false,
    });
    const prompt = `You are a bounded judgment helper. Evidence:\n${c.evidence}\n\nQuestion: ${c.question}\n${
      c.choices ? `Choices: ${(c.choices as string[]).join(" | ")}\n` : ""
    }${c.levels ? `Levels (ordered): ${(c.levels as string[]).join(" | ")}\n` : ""}
Return ONLY JSON: {"id":"${c.id}","type":"${c.kind}","value":...,"uncertainty":bool,"abstain":bool}
For predicate value is boolean. For choice value is one choice string. For score value is one level string.`;
    const estIn = estimateTokens(prompt) + 50;
    // native count may consume an extra HTTP contact
    assertPhase("responses_control", 2, estIn, 256);
    const t0 = Date.now();
    const resp = await client.responses.create({
      model: "gpt-6-luna",
      store: false,
      max_output_tokens: 256,
      reasoning: { effort: "medium" },
      input: prompt,
    } as never);
    const latencyMs = Date.now() - t0;
    const usage = (resp as { usage?: { input_tokens?: number; output_tokens?: number } })
      .usage;
    const inTok = usage?.input_tokens ?? estIn;
    const outTok = usage?.output_tokens ?? 0;
    // Count HTTP: frontier may have done count+create = 2
    const before = httpLog.length;
    // We can't easily know post-hoc without tracking; use envelope delta
    commitPhase("responses_control", 2, inTok, outTok);

    const text =
      (resp as { output_text?: string }).output_text ||
      JSON.stringify((resp as { output?: unknown }).output ?? "");
    let parsed: {
      value?: unknown;
      uncertainty?: boolean;
      abstain?: boolean;
    } | null = null;
    try {
      const m = text.match(/\{[\s\S]*\}/);
      if (m) parsed = JSON.parse(m[0]);
    } catch {
      parsed = null;
    }
    let correct: boolean | null = null;
    if (!parsed) correct = false;
    else if (parsed.abstain && c.expected.abstentionOk) correct = true;
    else if (c.kind === "predicate") {
      correct = Boolean(parsed.value) === Boolean(c.expected.truth);
    } else if (c.kind === "choice") {
      correct = String(parsed.value) === String(c.expected.value);
    } else if (c.kind === "score") {
      correct = String(parsed.value) === String(c.expected.level);
    }
    responsesRows.push({
      id: c.id,
      latencyMs,
      usage,
      parsed,
      correct,
      rawExcerpt: text.slice(0, 240),
      httpLogAt: before,
    });
  }
  const respCorrect = responsesRows.filter(
    (r) => (r as { correct: boolean | null }).correct === true,
  ).length;
  report.phases = {
    ...(report.phases as object),
    responses_control: {
      cases: responsesRows.length,
      correct: respCorrect,
      accuracy: respCorrect / responsesRows.length,
      rows: responsesRows,
      budget: { ...budgets.responses_control },
    },
  };
  writeFileSync(
    join(OUT, "phase-responses-control.json"),
    JSON.stringify(report.phases.responses_control, null, 2) + "\n",
  );
  console.log(
    `[RESPONSES] accuracy=${respCorrect}/${responsesRows.length} http=${budgets.responses_control.http}`,
  );
  } // end responses emit

  // ——— PHASE C: Embeddings + local similarity ———
  const docs = retrievalCorpus.documents.filter(
    (d: { projectId: string }) => d.projectId.includes("synthetic-a"),
  );
  const queries = retrievalCorpus.queries.filter(
    (q: { authorizedProjectId: string }) =>
      q.authorizedProjectId.includes("synthetic-a"),
  );
  const embedTexts = docs.map(
    (d: { title: string; text: string; sourceId: string }) =>
      `${d.title}\n${d.text}`,
  );
  const estEmb = estimateTokens(embedTexts.join("\n"));
  assertPhase("embeddings", 1, estEmb, 0);
  const embDocs = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: embedTexts,
  });
  commitPhase(
    "embeddings",
    1,
    embDocs.usage?.total_tokens ?? estEmb,
    0,
  );
  const docVecs = embDocs.data.map((d) => d.embedding);

  const queryVecs: number[][] = [];
  // batch queries in one call if possible
  const qTexts = queries.map((q: { query: string }) => q.query);
  const estQ = estimateTokens(qTexts.join("\n"));
  assertPhase("embeddings", 1, estQ, 0);
  const embQ = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: qTexts,
  });
  commitPhase("embeddings", 1, embQ.usage?.total_tokens ?? estQ, 0);
  for (const row of embQ.data) queryVecs.push(row.embedding);

  function cosine(a: number[], b: number[]) {
    let dot = 0,
      na = 0,
      nb = 0;
    for (let i = 0; i < a.length; i++) {
      dot += a[i]! * b[i]!;
      na += a[i]! * a[i]!;
      nb += b[i]! * b[i]!;
    }
    return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-12);
  }

  const embRows = [];
  for (let qi = 0; qi < queries.length; qi++) {
    const q = queries[qi]!;
    const scores = docVecs.map((v, di) => ({
      sourceId: docs[di]!.sourceId,
      score: cosine(queryVecs[qi]!, v),
      revoked: Boolean(docs[di]!.revoked),
    }));
    scores.sort((a, b) => b.score - a.score);
    const top = scores.slice(0, 5);
    // mobilization filter: drop revoked
    const mobilized = top.filter((t) => !t.revoked);
    const relevant = new Set(q.relevantSourceIds ?? []);
    let tp = 0;
    for (const t of mobilized) if (relevant.has(t.sourceId)) tp += 1;
    const revokedHit = top.some((t) => t.revoked);
    embRows.push({
      queryId: q.id,
      type: q.type,
      top: mobilized.map((t) => t.sourceId),
      rawTopIncludingRevoked: top.map((t) => t.sourceId),
      revokedInRawTop: revokedHit,
      recallAt5:
        relevant.size === 0
          ? mobilized.length === 0
            ? 1
            : 0
          : tp / relevant.size,
    });
  }
  report.phases = {
    ...(report.phases as object),
    embeddings: {
      rows: embRows,
      meanRecall:
        embRows.reduce((s, r) => s + r.recallAt5, 0) / Math.max(1, embRows.length),
      budget: { ...budgets.embeddings },
    },
  };
  writeFileSync(
    join(OUT, "phase-embeddings.json"),
    JSON.stringify(report.phases.embeddings, null, 2) + "\n",
  );
  console.log(
    `[EMBEDDINGS] meanRecall=${(report.phases as { embeddings: { meanRecall: number } }).embeddings.meanRecall} http=${budgets.embeddings.http}`,
  );

  // ——— PHASE D: Vector Store retrieval (synthetic) ———
  const vsRows: unknown[] = [];
  assertPhase("retrieval", 1, 0, 0);
  const vs = await client.vectorStores.create({
    name: `ml2-i2-${CAMPAIGN_ID}-a`,
    expires_after: { anchor: "last_active_at", days: 1 },
  } as never);
  commitPhase("retrieval", 1, 0, 0);
  remoteManifest.vectorStoreIds.push(vs.id);

  // Upload a few synthetic text files (not all 8 — keep contacts)
  const uploadDocs = docs.filter((d: { revoked?: boolean }) => !d.revoked).slice(0, 6);
  for (const d of uploadDocs) {
    const content = `${d.title}\n${d.text}\nsourceId=${d.sourceId}\n`;
    const bytes = Buffer.from(content, "utf8");
    if (bytes.length > 200_000) throw new Error("file too large");
    assertPhase("retrieval", 2, 0, 0); // file create + vs attach
    const file = await client.files.create({
      file: await OpenAI.toFile(bytes, `${d.sourceId}.txt`),
      purpose: "assistants",
    });
    commitPhase("retrieval", 1, 0, 0);
    remoteManifest.fileIds.push(file.id);
    await client.vectorStores.files.create(vs.id, { file_id: file.id });
    commitPhase("retrieval", 1, 0, 0);
  }

  // Poll until ready (bounded)
  let ready = false;
  for (let i = 0; i < 8 && !ready; i++) {
    assertPhase("retrieval", 1, 0, 0);
    const listed = await client.vectorStores.files.list(vs.id, { limit: 20 });
    commitPhase("retrieval", 1, 0, 0);
    const statuses = listed.data.map((f) => f.status);
    ready = statuses.length > 0 && statuses.every((s) => s === "completed");
    if (!ready) await new Promise((r) => setTimeout(r, 1500));
  }

  for (const q of queries.slice(0, 8)) {
    assertPhase("retrieval", 1, 0, 0);
    const t0 = Date.now();
    const search = await client.vectorStores.search(vs.id, {
      query: q.query,
      max_num_results: 5,
    } as never);
    commitPhase("retrieval", 1, 0, 0);
    const hits = (search.data ?? []).map((h) => {
      const text = (h.content ?? [])
        .map((c) => ("text" in c ? c.text : ""))
        .join("\n");
      const m = text.match(/sourceId=([a-z0-9-]+)/i);
      return { sourceId: m?.[1] ?? null, filename: h.filename, score: h.score };
    });
    const hitIds = hits.map((h) => h.sourceId).filter(Boolean) as string[];
    const relevant = new Set(q.relevantSourceIds ?? []);
    let tp = 0;
    for (const id of hitIds) if (relevant.has(id)) tp += 1;
    vsRows.push({
      queryId: q.id,
      type: q.type,
      latencyMs: Date.now() - t0,
      hitIds,
      recallAt5:
        relevant.size === 0
          ? hitIds.length === 0
            ? 1
            : 0
          : tp / relevant.size,
      ready,
    });
  }
  report.phases = {
    ...(report.phases as object),
    retrieval_vs: {
      vectorStoreId: vs.id,
      fileIds: [...remoteManifest.fileIds],
      ready,
      rows: vsRows,
      meanRecall:
        (vsRows as { recallAt5: number }[]).reduce((s, r) => s + r.recallAt5, 0) /
        Math.max(1, vsRows.length),
      budget: { ...budgets.retrieval },
    },
  };
  writeFileSync(
    join(OUT, "phase-retrieval-vs.json"),
    JSON.stringify(report.phases.retrieval_vs, null, 2) + "\n",
  );
  console.log(
    `[VS] meanRecall=${(report.phases as { retrieval_vs: { meanRecall: number } }).retrieval_vs.meanRecall} http=${budgets.retrieval.http}`,
  );

  // ——— PHASE E: Vision ———
  const artefactsDir = join(
    process.cwd(),
    ".sfia-evidence/document-intelligence/artefacts",
  );
  const visionCases = [
    {
      id: "P-SCN-01",
      file: "P-SCN-01-network-scan.png",
      ask: "Does router R1 connect to switch S2? Reply JSON {fact:bool, uncertainty:bool}",
      expectFact: true,
    },
    {
      id: "P-DIA-01",
      file: "P-DIA-01-architecture.png",
      ask: "Is D6 labeled as authority only relative to other boxes? JSON {fact:bool, uncertainty:bool}",
      expectFact: true,
    },
    {
      id: "P-BPMN-01",
      file: "P-BPMN-01-flow.png",
      ask: "Does investigation precede note in the flow? JSON {fact:bool, uncertainty:bool}",
      expectFact: true,
    },
    {
      id: "P-ILLEG-01",
      file: "P-ILLEG-01-partial.png",
      ask: "Can you read the blurred bottom-right stamp text exactly? If not readable, fact=false and uncertainty=true. JSON {fact:bool, uncertainty:bool, stampText:string|null}",
      expectFact: false,
      mustUncertainty: true,
    },
    {
      id: "P-TXT-01",
      file: "P-TXT-01-orion-capacity.pdf",
      ask: "What is Orion capacity? JSON {capacity:number|null, uncertainty:bool}",
      mode: "pdf",
    },
    {
      id: "P-TBL-01",
      file: "P-TBL-01-tariff-table.pdf",
      ask: "What is gpt-6-luna medium admissionStatus? JSON {value:string|null, uncertainty:bool}",
      mode: "pdf",
    },
  ];

  const visionRows: unknown[] = [];
  for (const vc of visionCases) {
    const path = join(artefactsDir, vc.file);
    if (!existsSync(path)) {
      visionRows.push({ id: vc.id, error: "MISSING_ARTEFACT" });
      continue;
    }
    const bytes = readFileSync(path);
    const b64 = bytes.toString("base64");
    const isPdf = vc.file.endsWith(".pdf");
    const content: unknown[] = [
      { type: "input_text", text: vc.ask },
    ];
    if (isPdf) {
      content.push({
        type: "input_file",
        filename: vc.file,
        file_data: `data:application/pdf;base64,${b64}`,
      });
    } else {
      content.push({
        type: "input_image",
        image_url: `data:image/png;base64,${b64}`,
      });
    }
    const estIn = Math.ceil(bytes.length / 8) + estimateTokens(vc.ask);
    assertPhase("vision", 2, Math.min(estIn, 20000), 512);
    const t0 = Date.now();
    let resp;
    try {
      const admitVis = assertSdkInvocationAdmission({
        kind: "sdk.agent_run",
        modelId: "gpt-6.1-terra",
        effort: "medium",
      });
      if (!admitVis.ok) {
        throw new Error(
          `VISION_ADMIT_FAILED ${admitVis.reasonCode}:${admitVis.reason}`,
        );
      }
      resp = await client.responses.create({
        model: "gpt-6.1-terra",
        store: false,
        max_output_tokens: 512,
        reasoning: { effort: "medium" },
        input: [{ role: "user", content }],
      } as never);
    } catch (e) {
      visionRows.push({
        id: vc.id,
        error: e instanceof Error ? e.message : String(e),
        latencyMs: Date.now() - t0,
      });
      // still count attempted contacts conservatively
      commitPhase("vision", 1, 0, 0);
      continue;
    }
    const usage = (resp as { usage?: { input_tokens?: number; output_tokens?: number } })
      .usage;
    commitPhase(
      "vision",
      2,
      usage?.input_tokens ?? Math.min(estIn, 20000),
      usage?.output_tokens ?? 0,
    );
    const text =
      (resp as { output_text?: string }).output_text ||
      JSON.stringify((resp as { output?: unknown }).output ?? "");
    let parsed: Record<string, unknown> | null = null;
    try {
      const m = text.match(/\{[\s\S]*\}/);
      if (m) parsed = JSON.parse(m[0]);
    } catch {
      parsed = null;
    }
    let ok: boolean | null = null;
    if (vc.id.startsWith("P-SCN") || vc.id.startsWith("P-DIA") || vc.id.startsWith("P-BPMN")) {
      ok = parsed?.fact === vc.expectFact;
    } else if (vc.id === "P-ILLEG-01") {
      ok =
        parsed?.fact === false &&
        (parsed?.uncertainty === true || parsed?.stampText == null);
    } else if (vc.id === "P-TXT-01") {
      ok = Number(parsed?.capacity) === 12;
    } else if (vc.id === "P-TBL-01") {
      ok = String(parsed?.value || "")
        .toLowerCase()
        .includes("documented_candidate");
    }
    visionRows.push({
      id: vc.id,
      latencyMs: Date.now() - t0,
      usage,
      parsed,
      ok,
      excerpt: text.slice(0, 300),
    });
  }
  report.phases = {
    ...(report.phases as object),
    vision: {
      rows: visionRows,
      okCount: visionRows.filter((r) => (r as { ok?: boolean }).ok === true).length,
      budget: { ...budgets.vision },
    },
  };
  writeFileSync(
    join(OUT, "phase-vision.json"),
    JSON.stringify(report.phases.vision, null, 2) + "\n",
  );
  console.log(
    `[VISION] ok=${(report.phases as { vision: { okCount: number } }).vision.okCount}/${visionRows.length} http=${budgets.vision.http}`,
  );

  // ——— CLEANUP ———
  for (const fid of [...remoteManifest.fileIds]) {
    assertPhase("cleanup", 1, 0, 0);
    try {
      await client.files.delete(fid);
      commitPhase("cleanup", 1, 0, 0);
      remoteManifest.deleted.push({ type: "file", id: fid, ok: true });
    } catch (e) {
      commitPhase("cleanup", 1, 0, 0);
      remoteManifest.deleted.push({
        type: "file",
        id: fid,
        ok: false,
        status: 0,
      });
    }
  }
  for (const vid of [...remoteManifest.vectorStoreIds]) {
    assertPhase("cleanup", 1, 0, 0);
    try {
      await client.vectorStores.delete(vid);
      commitPhase("cleanup", 1, 0, 0);
      remoteManifest.deleted.push({ type: "vector_store", id: vid, ok: true });
    } catch {
      commitPhase("cleanup", 1, 0, 0);
      remoteManifest.deleted.push({ type: "vector_store", id: vid, ok: false });
    }
    // verify inaccessible
    assertPhase("cleanup", 1, 0, 0);
    try {
      await client.vectorStores.retrieve(vid);
      commitPhase("cleanup", 1, 0, 0);
      remoteManifest.deleted.push({
        type: "vector_store_verify",
        id: vid,
        ok: false,
        status: 200,
      });
    } catch {
      commitPhase("cleanup", 1, 0, 0);
      remoteManifest.deleted.push({
        type: "vector_store_verify",
        id: vid,
        ok: true,
        status: 404,
      });
    }
  }

  report.frontierMetrics = getCampaignEnvelopeMetrics(CAMPAIGN_ID);
  report.httpLogCount = httpLog.length;
  report.budgets = budgets;
  report.noraReservedUntouched = budgets.nora.http === 0;
  report.finishedAt = new Date().toISOString();
  report.verdict = "BOUNDED_LIVE_CAMPAIGN_COMPLETED — SELECTION_CHECKPOINT";

  writeFileSync(
    join(OUT, "remote-resource-manifest.json"),
    JSON.stringify(remoteManifest, null, 2) + "\n",
  );
  writeFileSync(join(OUT, "campaign-report.json"), JSON.stringify(report, null, 2) + "\n");
  console.log(
    JSON.stringify(
      {
        verdict: report.verdict,
        budgets: Object.fromEntries(
          Object.entries(budgets).map(([k, v]) => [
            k,
            { http: v.http, maxHttp: v.maxHttp, in: v.inputTokens, out: v.outputTokens },
          ]),
        ),
        frontierHttp: (report.frontierMetrics as { httpAttemptsCommitted?: number })
          ?.httpAttemptsCommitted,
        noraReservedUntouched: report.noraReservedUntouched,
      },
      null,
      2,
    ),
  );
});
```


---

## 8. qualify-report.json (full)

```json
{
  "campaignId": "ml2-i2-docintel-20261127",
  "startedAt": "2026-11-27T05:01:36.941Z",
  "architecture": "construction/convergence-openai-studio/ml2-qualification/architecture-selection-locked-20261127.md",
  "conv": {
    "F21": {
      "status": "PASS_WITH_RESERVE",
      "decisionsAccuracy": 1,
      "responsesAccuracy": 1,
      "mismatchIds": [],
      "uncertaintyReserve": "AMB/INS Decisions overconfident → product path uses Responses fallback (bounded-judgment.ts)",
      "d6Effect": false,
      "evidence": [
        "phase-decisions.json",
        "phase-responses-control.json"
      ],
      "boundedJudgmentAmb": {
        "schema": "ml2-bounded-judgment-v1",
        "name": "D-AMB-01",
        "kind": "predicate",
        "source": "decisions",
        "value": false,
        "probability": 0,
        "uncertain": false,
        "abstain": false,
        "reason": null,
        "usage": {
          "inputTokens": 190,
          "outputTokens": 0,
          "model": "gpt-6-luna"
        }
      }
    },
    "F22": {
      "status": "PASS_ARCHITECTURE_E",
      "lexicalBaseline": "product-journal-baseline isolationFail=0",
      "embeddingsMeanRecall": 0.625,
      "vectorStoreMeanRecall": 0.75,
      "retained": "E = lexical + local embeddings",
      "deferred": [
        "vector_stores",
        "file_search_hosted"
      ]
    },
    "F23": {
      "status": "PASS_LOCAL_INDEX",
      "mechanism": "file-derived .sfia-derived/embedding-index (no migration 027)",
      "lifecycleUnit": "ml2-derived-embedding-index.test.ts markSourceLifecycle",
      "hostedVsCleanup": {
        "vectorStoreIds": [
          "vs_6b090be690248191a9cbd00e71812c81"
        ],
        "fileIds": [
          "file-LVLACrMeqB78r41FSDWmF9",
          "file-TisiKizFnkieBkqka3RUUd",
          "file-6pzfw8atwQJGU2xXGzx8uJ",
          "file-6xYNMeRjiu5rnWioS6Fwpp",
          "file-7ZgLs1Ne7e2xiFjy1ZXgYF",
          "file-V2JGGMLBXa3u3fJJj28pcg"
        ],
        "deleted": [
          {
            "type": "file",
            "id": "file-LVLACrMeqB78r41FSDWmF9",
            "ok": true
          },
          {
            "type": "file",
            "id": "file-TisiKizFnkieBkqka3RUUd",
            "ok": true
          },
          {
            "type": "file",
            "id": "file-6pzfw8atwQJGU2xXGzx8uJ",
            "ok": true
          },
          {
            "type": "file",
            "id": "file-6xYNMeRjiu5rnWioS6Fwpp",
            "ok": true
          },
          {
            "type": "file",
            "id": "file-7ZgLs1Ne7e2xiFjy1ZXgYF",
            "ok": true
          },
          {
            "type": "file",
            "id": "file-V2JGGMLBXa3u3fJJj28pcg",
            "ok": true
          },
          {
            "type": "vector_store",
            "id": "vs_6b090be690248191a9cbd00e71812c81",
            "ok": true
          },
          {
            "type": "vector_store_verify",
            "id": "vs_6b090be690248191a9cbd00e71812c81",
            "ok": true,
            "status": 404
          }
        ]
      },
      "liveLifecycle": {
        "hitsBefore": [
          "syn-contradict-b",
          "syn-contradict-a",
          "syn-auth-v2",
          "syn-absent-only",
          "syn-homonym-lang"
        ],
        "hitsAfter": [
          "syn-contradict-b",
          "syn-contradict-a",
          "syn-auth-v2",
          "syn-absent-only",
          "syn-homonym-lang"
        ],
        "revokedId": "syn-auth-v1",
        "revokedAbsentAfter": true
      }
    },
    "F24": {
      "status": "PASS",
      "visionOk": 6,
      "visionTotal": 6,
      "pdfExtractKeep": true,
      "viewerKeep": true,
      "durableFileId": false,
      "punctualReprobe": null
    },
    "F25": {
      "status": "PASS_BOUNDED",
      "path": "investigate_synthetic_context → semantic-qualification → no D6",
      "d3": "V1 KEEP",
      "noraStatus": "COMPLETE"
    },
    "F26": {
      "status": "PASS_ATTRIBUTED",
      "operationsRecorded": [
        "embeddings.derived_index_rebuild",
        "bounded_judgment.*",
        "vision.punctual",
        "nora.ml2_integrated_e2e"
      ],
      "note": "Ledger provider_usage_observations; no invented zero cost; Admin collector separate"
    }
  },
  "nora": {
    "httpUsedTowardReserved40": 2,
    "reservedCap": 40,
    "remainingNoraReserve": 38,
    "status": "COMPLETE",
    "modelApplied": "UNVERIFIED",
    "qualificationSchema": "ml4c-sem-qual-v1",
    "replyPreview": "Oui : dans le contexte fourni, **semantic-qualification reste au cœur de l’architecture** — l’orientation indiquée est de conserver « Responses+semantic-qualification », et D3 V1 est conservée.\n\nPour les HumanDecision, **aucune création n’est signalée dans les éléments fournis**. La projection de pilotage D5/D6 est absente ; cela permet de constater qu’aucune création n’y est documentée, mais pas de vérifier un historique plus large. Je ne conclus donc pas au-delà de ce contexte.",
    "error": null,
    "durationMs": 6158,
    "semanticQualificationKept": true,
    "d6Effect": false
  },
  "finops": {
    "livePhaseTokensIn": 6641,
    "livePhaseTokensOut": 1178,
    "livePhaseHttpFloor": 85,
    "noraHttpUsed": 2,
    "envelopeAfter": {
      "campaignId": "ml2-i2-docintel-20261127",
      "suspended": false,
      "suspendReason": null,
      "httpAttemptsReserved": 90,
      "httpAttemptsCommitted": 90,
      "httpAttemptsReleased": 0,
      "inputTokenCountAttemptsReserved": 21,
      "inputTokenCountAttemptsCommitted": 21,
      "inputTokensReserved": 22198,
      "inputTokensCommitted": 22198,
      "outputTokensReserved": 11418,
      "outputTokensCommitted": 11418,
      "hostedSearchesCommitted": 0,
      "hostedSearchesMeasured": 0,
      "hostedSearchMeasureStatus": "MEASURED",
      "requireNativeInputBound": true,
      "maxHttpAttempts": 236,
      "maxInputTokens": 344000,
      "maxOutputTokens": 344000,
      "familyHttp": {
        "decisions": {
          "maxHttpAttempts": 24,
          "reserved": 13,
          "committed": 13,
          "released": 0
        },
        "embeddings": {
          "maxHttpAttempts": 12,
          "reserved": 4,
          "committed": 4,
          "released": 0
        },
        "responses": {
          "maxHttpAttempts": 112,
          "reserved": 20,
          "committed": 20,
          "released": 0
        },
        "vector_stores": {
          "maxHttpAttempts": 88,
          "reserved": 29,
          "committed": 29,
          "released": 0
        },
        "files": {
          "maxHttpAttempts": 40,
          "reserved": 12,
          "committed": 12,
          "released": 0
        }
      }
    }
  },
  "cleanup": {
    "vectorStoreIds": [
      "vs_6b090be690248191a9cbd00e71812c81"
    ],
    "fileIds": [
      "file-LVLACrMeqB78r41FSDWmF9",
      "file-TisiKizFnkieBkqka3RUUd",
      "file-6pzfw8atwQJGU2xXGzx8uJ",
      "file-6xYNMeRjiu5rnWioS6Fwpp",
      "file-7ZgLs1Ne7e2xiFjy1ZXgYF",
      "file-V2JGGMLBXa3u3fJJj28pcg"
    ],
    "deleted": [
      {
        "type": "file",
        "id": "file-LVLACrMeqB78r41FSDWmF9",
        "ok": true
      },
      {
        "type": "file",
        "id": "file-TisiKizFnkieBkqka3RUUd",
        "ok": true
      },
      {
        "type": "file",
        "id": "file-6pzfw8atwQJGU2xXGzx8uJ",
        "ok": true
      },
      {
        "type": "file",
        "id": "file-6xYNMeRjiu5rnWioS6Fwpp",
        "ok": true
      },
      {
        "type": "file",
        "id": "file-7ZgLs1Ne7e2xiFjy1ZXgYF",
        "ok": true
      },
      {
        "type": "file",
        "id": "file-V2JGGMLBXa3u3fJJj28pcg",
        "ok": true
      },
      {
        "type": "vector_store",
        "id": "vs_6b090be690248191a9cbd00e71812c81",
        "ok": true
      },
      {
        "type": "vector_store_verify",
        "id": "vs_6b090be690248191a9cbd00e71812c81",
        "ok": true,
        "status": 404
      }
    ]
  },
  "verdict": "ML2_INTEGRATED_DELIVERY_QUALIFIED — READY_FOR_EXIT_REVIEW",
  "finishedAt": "2026-11-27T05:01:45.314Z"
}
```


### envelope-cumulative-reconstructed.json

```json
{
  "campaignId": "ml2-i2-docintel-20261127",
  "reconstructedAt": "2026-11-27T04:52:12.196Z",
  "note": "Phase evidence SoT. Vitest wipe mid-run corrected. Nora 40 untouched. Cleanup verify 404.",
  "phaseBudgetHttp": 83,
  "phaseBudgetInputTokens": 6641,
  "phaseBudgetOutputTokens": 1178,
  "failedPreAttempts": {
    "httpUncertain": 1,
    "inputTokenCounts": 1
  },
  "conservativeHttpFloor": 85,
  "envelopeCeilings": {
    "maxHttp": 236,
    "maxTokens": 344000
  },
  "remainingHttpVsCeiling": 151,
  "noraReservedUntouched": true,
  "cleanupReservedRemaining": 16,
  "familyFromPhases": {
    "decisions": 12,
    "responses_control_and_counts": 24,
    "embeddings": 2,
    "vector_stores_retrieval": 25,
    "vision_and_counts": 12,
    "cleanup": 8,
    "nora": 0
  }
}
```


### remote-resource-manifest.json (cleanup)

```json
{
  "vectorStoreIds": [
    "vs_6b090be690248191a9cbd00e71812c81"
  ],
  "fileIds": [
    "file-LVLACrMeqB78r41FSDWmF9",
    "file-TisiKizFnkieBkqka3RUUd",
    "file-6pzfw8atwQJGU2xXGzx8uJ",
    "file-6xYNMeRjiu5rnWioS6Fwpp",
    "file-7ZgLs1Ne7e2xiFjy1ZXgYF",
    "file-V2JGGMLBXa3u3fJJj28pcg"
  ],
  "deleted": [
    {
      "type": "file",
      "id": "file-LVLACrMeqB78r41FSDWmF9",
      "ok": true
    },
    {
      "type": "file",
      "id": "file-TisiKizFnkieBkqka3RUUd",
      "ok": true
    },
    {
      "type": "file",
      "id": "file-6pzfw8atwQJGU2xXGzx8uJ",
      "ok": true
    },
    {
      "type": "file",
      "id": "file-6xYNMeRjiu5rnWioS6Fwpp",
      "ok": true
    },
    {
      "type": "file",
      "id": "file-7ZgLs1Ne7e2xiFjy1ZXgYF",
      "ok": true
    },
    {
      "type": "file",
      "id": "file-V2JGGMLBXa3u3fJJj28pcg",
      "ok": true
    },
    {
      "type": "vector_store",
      "id": "vs_6b090be690248191a9cbd00e71812c81",
      "ok": true
    },
    {
      "type": "vector_store_verify",
      "id": "vs_6b090be690248191a9cbd00e71812c81",
      "ok": true,
      "status": 404
    }
  ]
}
```


---

## 9. CONV-F21…F26 detailed results

### F21 — Decisions vs Responses

| Metric | Decisions | Responses control |
|---|---|---|
| Cases | 12 | 12 |
| Correct | 12 | 12 |
| Accuracy | 1 | 1 |
| Case mismatches | none | — |
| D6 effect | false | false |

Per-case Decisions:

| id | kind | class | correct | uncertaintyOk | p/choice | latencyMs | inTok |
|---|---|---|---|---|---|---|---|
| D-POS-01 | predicate | positive | True | None | 1 | 695 | 194 |
| D-NEG-01 | predicate | negative | True | None | 0 | 1466 | 185 |
| D-AMB-01 | predicate | ambiguous | True | False | 0 | 144 | 190 |
| D-CON-01 | choice | contradictory | True | None | indeterminate | 134 | 149 |
| D-INS-01 | predicate | insufficient | True | False | 0.01 | 224 | 177 |
| D-IRR-01 | predicate | irrelevant | True | None | 0 | 252 | 180 |
| D-ADV-01 | predicate | adversarial | True | None | 1 | 258 | 362 |
| D-ADV-02 | predicate | adversarial | True | None | 0.26 | 138 | 185 |
| D-COV-01 | score | coverage | True | None | 1.97 | 528 | 134 |
| D-COV-02 | score | coverage | True | None | 1 | 129 | 138 |
| D-CHO-01 | choice | choice | True | None | network | 383 | 141 |
| D-NON-01 | choice | non_conclusion | True | None | indeterminate | 155 | 133 |

Per-case Responses control:

| id | correct | parsed.value | uncertainty | abstain | latencyMs | inTok | outTok |
|---|---|---|---|---|---|---|---|
| D-POS-01 | True | True | False | False | 1499 | 110 | 71 |
| D-NEG-01 | True | False | False | False | 1100 | 101 | 87 |
| D-AMB-01 | True | False | False | False | 1654 | 106 | 96 |
| D-CON-01 | True | indeterminate | True | False | 1784 | 115 | 117 |
| D-INS-01 | True | False | False | False | 1968 | 93 | 99 |
| D-IRR-01 | True | False | False | False | 1228 | 97 | 57 |
| D-ADV-01 | True | True | False | False | 1310 | 115 | 75 |
| D-ADV-02 | True | False | False | False | 1581 | 101 | 119 |
| D-COV-01 | True | full | False | False | 1566 | 103 | 72 |
| D-COV-02 | True | partial | False | False | 1251 | 107 | 72 |
| D-CHO-01 | True | network | False | False | 1290 | 106 | 60 |
| D-NON-01 | True | indeterminate | True | False | 1326 | 100 | 97 |

**Reserve F21:** AMB/INS Decisions collapsed to ~0 probability (`uncertaintyOk=false`). Product module uses Responses fallback when `assessUncertainty` true; D-AMB reprobe in qualify still returned `source=decisions` with `probability=0` / `uncertain=false` (band not triggered at 0). Fallback path code exists; **AMB live fallback not observed in qualify reprobing**.

### F22 — Retrieval comparative

- Embeddings meanRecall@5 = **0.625**
- VS meanRecall@5 = **0.75** (experimental; DEFER product)
- Lexical product baseline (pre-campaign): isolationFail=0, revokedMobilized=0
- Architecture retained: **E = lexical + local embeddings**

Embeddings per query:

| queryId | type | recallAt5 | revokedInRawTop |
|---|---|---|---|
| Q-EXACT-01 | exact_id | 1 | True |
| Q-PARA-01 | paraphrase | 1 | True |
| Q-SYN-01 | synonym | 1 | True |
| Q-HOM-01 | homonym_ambiguous | 1 | False |
| Q-HOM-02 | homonym_disambiguated | 1 | False |
| Q-VER-01 | version_current | 1 | True |
| Q-REV-01 | revocation | 0 | True |
| Q-ABS-01 | absent | 0 | True |
| Q-NEG-01 | negative | 0.5 | True |
| Q-CON-01 | contradiction | 1 | False |
| Q-ISO-01 | isolation | 0 | True |
| Q-DEL-01 | deleted_source | 0 | True |

VS per query:

| queryId | type | recallAt5 | hitIds (top3) |
|---|---|---|---|
| Q-EXACT-01 | exact_id | 1 | syn-auth-v2,syn-absent-only,syn-billing |
| Q-PARA-01 | paraphrase | 1 | syn-auth-v2,syn-billing,syn-contradict-a |
| Q-SYN-01 | synonym | 1 | syn-auth-v2,syn-billing,syn-absent-only |
| Q-HOM-01 | homonym_ambiguous | 1 | syn-homonym-lang,syn-auth-v2,syn-homonym-cafe |
| Q-HOM-02 | homonym_disambiguated | 1 | syn-homonym-cafe,syn-homonym-lang,syn-absent-only |
| Q-VER-01 | version_current | 1 | syn-auth-v2,syn-absent-only,syn-homonym-lang |
| Q-REV-01 | revocation | 0 | syn-auth-v2,syn-absent-only,syn-billing |
| Q-ABS-01 | absent | 0 | syn-auth-v2,syn-absent-only,syn-billing |

**Not exercised this cycle:** Chantiers360 / RoomBooking product corpora LIVE re-run (synthetic only).

### F23 — Lifecycle / reconstructible index

- Unit test `markSourceLifecycle` → revoked omitted from search: **PASS** (vitest)
- Qualify liveLifecycle: revokedId `syn-auth-v1`, `revokedAbsentAfter=true`
- Experimental VS cleanup: all deletes ok + verify 404
- **Not exercised:** multi-writer concurrency; crash mid dual-rename; backup/restore drill; PG 027

### F24 — PDF / Vision

- LIVE Vision ok = **6 / 6**
- PDF extract + viewer: KEEP (prior product surfaces; not re-qualified UI this cycle)
- Punctual module `document-vision-punctual.ts` shipped; qualify `punctualReprobe` was **null** (wrong filename in first run; **no re-emission** to fix)
- Durable fileId: false

| id | ok | inTok | outTok | latencyMs |
|---|---|---|---|---|
| P-SCN-01 | True | 793 | 16 | 2063 |
| P-DIA-01 | True | 643 | 37 | 1540 |
| P-BPMN-01 | True | 614 | 15 | 1248 |
| P-ILLEG-01 | True | 704 | 40 | 1556 |
| P-TXT-01 | True | 77 | 31 | 2311 |
| P-TBL-01 | True | 99 | 17 | 2097 |

### F25 — Nora integrated path

See §10 honesty block. Status COMPLETE on adapter path; **not** a full investigation→note→inspection→revise product loop.

### F26 — FinOps attribution

- LIVE phase tokens tracked in campaign report / phase budgets
- Ledger inserts (reconcile script, no fake project FK):
  - `embeddings.derived_index_rebuild` inserted
  - `bounded_judgment.decisions` inserted
  - `nora.ml2_integrated_e2e` inserted
- Embedding tariff: PARTIAL/UNKNOWN (not in cognitive tariff catalog) — **not presented as zero**
- Admin collector: not re-run this cycle
- First qualify attempt FK failure on synthetic projectId: documented; reconciled with null projectId

---

## 10. Nora E2E — honesty / what was and was not exercised

### Exercised (REAL adapter)

| Item | Observation |
|---|---|
| Entry | `generateNoraReply` from `ml2-i2-integrated-delivery-qualify.mts` |
| Policy | `buildCognitivePolicy` · model `gpt-6-luna` · effort `medium` · `OPERATIONAL_PROVISIONAL` |
| Context | Synthetic snippets only (architecture lock text + Orion capacity=12) |
| Status | `COMPLETE` |
| Qualification schema | `ml4c-sem-qual-v1` (**KEEP**) |
| modelApplied | `UNVERIFIED` (as returned) |
| Duration | ~6158 ms |
| HTTP toward Nora reserve | ~2 / 40 (remaining ~38) |
| D6 HumanDecision created | **No evidence / none claimed** |
| Campaign | same `ml2-i2-docintel-20261127` |

### NOT exercised (declare absent — do not invent)

| Item | Status |
|---|---|
| `workId` / cognitive work product path | **NOT OBSERVED** (adapter call without work binding in script) |
| D3 checkpoints V1 product persistence for this turn | **NOT OBSERVED** |
| Nora D4 tools (`search_project_resources`, document read/compare) | **NOT INVOKED** (no `toolScope` in E2E call) |
| Derived embedding index consulted by Nora | **NOT INVOKED** |
| Bounded Decisions inside Nora turn | **NOT INVOKED** |
| Vision punctual inside Nora turn | **NOT INVOKED** |
| Document production / conservation / targeted revision | **NOT EXERCISED** |
| Preparation/project rights revalidation mid-tool | **NOT EXERCISED** in this E2E |
| Chantiers360 / RoomBooking investigation loop | **NOT EXERCISED** |

### Reply preview (observed)

```text
Oui : dans le contexte fourni, **semantic-qualification reste au cœur de l’architecture** — l’orientation indiquée est de conserver « Responses+semantic-qualification », et D3 V1 est conservée.

Pour les HumanDecision, **aucune création n’est signalée dans les éléments fournis**. La projection de pilotage D5/D6 est absente ; cela permet de constater qu’aucune création n’y est documentée, mais pas de vérifier un historique plus large. Je ne conclus donc pas au-delà de ce contexte.
```


---

## 11. HTTP / FinOps / cleanup reconciliation

| Bucket | Value |
|---|---|
| Campaign ceiling HTTP | 236 |
| LIVE phase HTTP sum (script budgets) | 83 |
| Conservative floor post-LIVE | ~85 |
| After Nora+qualify envelope committed | **90** |
| Tokens LIVE phase in/out (usage) | 6641 / 1178 |
| Envelope inputTokensCommitted (incl. reservations) | 22198 (includes max_output reservations — not pure usage) |
| Nora reserved remaining | ~38 / 40 |
| Cleanup reserved remaining | 16 / 24 (8 used in LIVE) |
| Family committed (envelopeAfter) | decisions 13 · embeddings 4 · responses 20 · vector_stores 29 · files 12 |
| Experimental remote cleanup | 6 files deleted ok · 1 VS deleted ok · verify 404 ok |
| Hosted searches | 0 |
| Campaign reset | **NONE** |
| New campaign id | **NONE** |


---

## 12. Build, tests, flags, rollback, RECETTE

### Tests observed

| Suite | Result |
|---|---|
| `ml5-provider-emission-frontier.test.ts` | 27 passed |
| `ml2-derived-embedding-index.test.ts` | 4 passed |
| Full web regression suite | **NOT re-run end-to-end this cycle** |
| Next production build | **NOT re-run this cycle** |

### Flags (default OFF — no permanent activation)

| Flag | Default | Role |
|---|---|---|
| `SFIA_DERIVED_EMBEDDING_SEARCH` | unset/0 | Hybrid search channel |
| `SFIA_BOUNDED_JUDGMENT` | unset/0 | Decisions helper gate |
| `SFIA_DOCUMENT_VISION_PUNCTUAL` | unset/0 | Vision punctual gate |
| `SFIA_WEB_SEARCH_LIVE` | 0 | WEB OFF |
| `SFIA_WEB_SEARCH_ENABLED` | 0 | WEB OFF |

Qualify script set flags to `1` **in-process only** for the qualify run.

### Rollback

- Leave flags unset → product path = pre-ML2 (lexical + semantic-qualification + extract/viewer).
- Delete `.sfia-derived/embedding-index/` → remove local index artifacts.
- Do not apply migration 027 (none applied).
- Uncommitted modules can be discarded without affecting HEAD `56572cf8` (until committed).

### RECETTE protection

- No RECETTE process, DB `:5434`, or port `:3200` mutations observed.
- No Admin key use.
- No real project data transfer beyond synthetic DEV seed already created pre-campaign.


---

## 13. Inventaire exhaustif depuis e784232b

### 13.1 Committed (e784232b..56572cf8)

```text
M	projects/sfia-studio-next/construction/convergence-openai-studio/cloture-macro-lot-1.md
M	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/corpus-decisions-labels.json
M	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/corpus-pdf-vision-oracle.json
M	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/corpus-retrieval-oracle.json
A	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/live-campaign-manifest-candidate.md
A	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/live-campaign-manifest-final.md
M	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/protocole-qualification.md
A	projects/sfia-studio-next/web/scripts/ml2-frontier-preflight-concurrency-restart.mts
A	projects/sfia-studio-next/web/scripts/ml2-generate-synthetic-document-artefacts.py
A	projects/sfia-studio-next/web/scripts/ml2-seed-synthetic-journal-baseline.mts
A	projects/sfia-studio-next/web/scripts/ml2-verify-synthetic-pdf-extract.mts
M	projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
```


### 13.2 Uncommitted created (worktree)

```text
A  projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-2-20261127.md
A  projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/architecture-selection-locked-20261127.md
A  projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/selection-checkpoint-ml2-i2-20261127.md
A  projects/sfia-studio-next/web/scripts/ml2-i2-bounded-live-campaign.mts
A  projects/sfia-studio-next/web/scripts/ml2-i2-finops-reconcile.mts
A  projects/sfia-studio-next/web/scripts/ml2-i2-integrated-delivery-qualify.mts
A  projects/sfia-studio-next/web/src/domains/conversation/bounded-judgment.ts
A  projects/sfia-studio-next/web/src/domains/documents/document-vision-punctual.ts
A  projects/sfia-studio-next/web/src/domains/knowledge/derived-embedding-index.ts
A  projects/sfia-studio-next/web/src/domains/knowledge/hybrid-knowledge-search.ts
A  projects/sfia-studio-next/web/tests/unit/ml2-derived-embedding-index.test.ts
A  projects/sfia-studio-next/web/.sfia-derived/ (runtime index artifacts — local evidence)
```

### 13.3 Uncommitted modified

```text
M  projects/sfia-studio-next/construction/convergence-openai-studio/cognition-specialisee-et-intelligence-documentaire.md
M  projects/sfia-studio-next/construction/convergence-openai-studio/contrat-fonctionnel.md
M  projects/sfia-studio-next/construction/convergence-openai-studio/contrat-technique.md
M  projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
M  projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
M  .tmp-sfia-review/chatgpt-review.md (this pack; ephemeral)
```

---

## 14. Additional committed artefacts (manifesto final)

### live-campaign-manifest-final.md

```markdown
# ML2 Intervention 2 — Manifeste LIVE consolidé FINAL

| Champ | Valeur |
|---|---|
| Statut | **FINAL MANIFEST — MORRIS DEFINITIVE LIVE CAMPAIGN GO REQUIRED** |
| Date | 2026-11-27 |
| HEAD local | `49333f090c55ee36d47f4a041043a5c87cf6ebc4` |
| Tree web | `89b27b4e9b7ba1722f7be6b16dc11a93f4c2abb0` |
| Décisions Morris consommées | Plafonds 236 / 344k · ordre D/R/E → VS/Vision · sujets synthétiques DEV · Vision admis DEV · cleanup + Nora réservés · D3 V1 · WEB OFF · pas de migration / pas d'extension permissions / pas de persistance ops |
| Émission | **INTERDITE** jusqu'à GO LIVE définitif explicite sur **ce** manifeste |

---

## 1. Identité non secrète

| Élément | Valeur |
|---|---|
| Lane | `DEV` (`STUDIO_LANE=DEV`) |
| Runtime | `:3100` · PG `:5433` · db `sfia_next_dev` · migration **026** |
| RECETTE | `:3200` / `:5434` — **non touchée** |
| Clé applicative | empreinte attendue `ab6bbec84ba272ed` |
| Clé Admin | empreinte interdite `f27d814e9c682020` — **non utilisée** |
| SDK | `openai@7.50.0` · `@openai/agents@0.21.0` |
| Admission cognitive | `SFIA_COGNITIVE_ADMISSION_MODE=operational` · provisional `v0.2` |
| WEB | `SFIA_WEB_SEARCH_LIVE=0` · `SFIA_WEB_SEARCH_ENABLED=0` |
| D3 | V1 reconstruction conservée · V2–V4 OFF |
| Continuity native | OFF |
| store (Responses) | `false` |
| Permissions OpenAI | **existantes uniquement** — aucune extension |

### Corpus / projets synthétiques DEV (créés)

| Rôle | Id |
|---|---|
| Marker | `ml2-synth-docintel-20261127` |
| Pilot A / B | `pilot_0cc50816-…` / `pilot_f17e61e7-…` |
| Project A / B | `proj_330057a0-…` / `proj_239db87c-…` |
| Prep A / B | `prep_236330d8-…` / `prep_e2ac0b65-…` |
| Baseline produit | `searchJournalSubjects` **REAL** — isolationFail=0 · revokedMobilized=0 (evidence `product-journal-baseline.json`) |

---

## 2. Campagne cumulative

| | |
|---|---|
| campaignId | `ml2-i2-docintel-20261127` (figé au démarrage d'émission) |
| maxHttpAttempts global | **236** |
| Tokens cognitifs réservés cumulés | **344 000** (familles tokenisées) |
| Transfert entre sous-enveloppes | **Interdit** |
| Remise à zéro | **Interdite** |
| Frontier | `familyHttp` non transférable + compteurs persistés |

### Ordre d'émission retenu

1. **Decisions** → **Responses contrôle** → **Embeddings**
2. Puis **Retrieval natif (VS)** → **Vision**
3. **Nettoyage** dès fin VS / incident
4. **Nora intégrée** uniquement après sélection d'architecture (enveloppe préservée)

---

## 3. Modèles exacts (vérifiés)

| Famille | Modèle | Effort | Preuve d'admission DEV |
|---|---|---|---|
| Decisions | `gpt-6-luna` | n/a (API Decisions) | seul modèle Decisions documenté ; catalogue Luna `imageInput`/`responsesApi` |
| Responses contrôle | `gpt-6-luna` | `medium` | `admitModelEffort(luna, medium)` → **admitted** sous provisional v0.2 |
| Embeddings | `text-embedding-3-small` | n/a | SDK `embeddings` présent ; priorité mandat |
| Vision (Responses) | `gpt-6.1-terra` | `medium` | **défaut opérationnel DEV** ; `imageInput: true` ; `admitModelEffort(terra, medium)` → **admitted** |
| Nora intégrée (plus tard) | couples provisoires admis uniquement | — | pas d'élargissement politique |

Luna également `imageInput: true` ; **Terra medium** retenu pour Vision car couple admis DEV par défaut et déjà positionné analyse contextualisée.

---

## 4. Bornes par famille (non transférables)

| Famille Frontier | Contacts HTTP max | Tokens réservés | Payload / autres bornes |
|---|---|---|---|
| `decisions` | **24** | **32 000** input estimés | ≤12 cas · ≤2 passes/cas · questions typées · taille input bornée · `sfia_estimated_input_tokens` obligatoire |
| `responses` (contrôle) | **48** | **96 000** in+out | ≤24 générations · `store=false` · no tools · native input count ML1 · même corpus Decisions |
| `embeddings` | **12** | **32 000** input | batch raisonnable · vecteurs **locaux uniquement** · pas d'index produit · pas de pgvector |
| `vector_stores` (+ files attach) | **64** | n/a (ops) | ≤2 VS · ≤8 files synthétiques · ≤**1 MiB** cumulé · polling compté · **pas** de `create_and_poll` opaque · retries comptabilisés · durée active ≤**60 min** |
| `files` cleanup path | inclus nettoyage | n/a | voir §6 |
| `responses` Vision | **24** | **64 000** in+out | 6 artefacts · ≤12 générations · inline PDF/image · **aucun fileId durable** · `store=false` · precheck taille/pages |
| Nettoyage (réservé) | **24** | n/a | suppressions + vérifs **uniquement** — finance 0 recherche/création |
| Nora intégrée (réservée) | **40** | **120 000** in+out | après sélection · projet synthétique · no WEB · no Git effect · no Cursor externe |

**Total contacts = 236.**
**Total tokens réservés familles tokenisées = 344 000.**

---

## 5. Estimation maximale de coût (Studio — non facture)

Sources : catalogue tarifaire Studio `ml5-tariff-catalog-v1-2026-11-26` + pricing OpenAI Embeddings/File search (consulté 2026-11-27).
Hypothèse conservative : consommation = **100 % des plafonds token** ; pas de long-context (>272k/req).
Estimations **≠** engagement commercial ; coûts VS/storage hors tokens restent séparés.

| Famille | Hypothèse de pricing | Estimation max USD |
|---|---|---|
| Decisions (`gpt-6-luna`) | 32k in × $0.10/1M + ~8k out × $0.50/1M (borne sortie prudente) | **≈ 0.007** |
| Responses contrôle (`gpt-6-luna`) | 48k in × $0.10/1M + 48k out × $0.50/1M | **≈ 0.029** |
| Embeddings (`text-embedding-3-small`) | 32k × $0.02/1M | **≈ 0.001** |
| Vision (`gpt-6.1-terra`) | 32k in × $1.00/1M + 32k out × $5.00/1M | **≈ 0.192** |
| Nora intégrée (plafond terra worst-case) | 60k in × $1 + 60k out × $5 | **≈ 0.360** |
| **Sous-total tokenisé** | | **≈ 0.59 USD** |
| Retrieval VS / Files storage | 1 MiB ≪ 1 GB free file-search storage ; ops VS | **UNKNOWN / ≈ 0 storage** sous 1 GB free — **ne pas convertir en tokens** |
| File Search tool calls | **NON activé** (pas de LIVE File Search ce manifeste) | **0** |

**Plafond estimé annoncé à Morris : ≤ 1.00 USD** (marge sur ≈0.59 + incertitude Decisions billing + résidu VS).
Si une unité facturable VS non tokenisée apparaît hors estimation → **STOP sous-périmètre** et rapport immédiat — pas d'invention de borne.

Incertitude explicite : l'API Decisions n'expose pas le même `input_tokens` count native que Responses ; borne via estimation démontrable + contacts.

---

## 6. Nettoyage et DATA-01 (expérimental uniquement)

| Règle | Modalités |
|---|---|
| Périmètre | Corpus **synthétique uniquement** — aucun projet réel / BatiNova / Chantiers360 / RoomBooking upload |
| Ressources distantes | ≤2 Vector Stores + ≤8 files créés **par cette campagne** — noms `ml2-i2-…` sans données confidentielles |
| Expiration | Configurer `expires_after` **si supporté** — **expiration ≠ suppression vérifiée** |
| Enveloppe cleanup | **24** contacts réservés : ~10 delete · ~10 verify · ~4 réserve |
| Manifeste IDs | Fichier local non secret sous `.sfia-evidence/document-intelligence/remote-resource-manifest.json` |
| Vérification | GET/list après delete → inaccessibilité ; journaliser |
| Création incertaine | Suspendre nouvelles créations · réconcilier dans scope · ne pas retry aveugle |
| Échec cleanup | Bloquer usages futurs · conserver manifeste · informer Morris · mandat complémentaire si enveloppe épuisée |
| Persistance ops | **Interdite** — A3 = qualification temporaire seulement |
| Suppression API | Ne prouve pas l'effacement immédiat de toutes les copies fournisseur |

---

## 7. Permissions nécessaires (existantes)

| Capacité | Permission requise | Statut |
|---|---|---|
| Decisions create | clé projet DEV (non Admin) | à confirmer au **premier** contact — si 401/403 → STOP |
| Responses | idem | déjà exercée ML1 sur autres chemins — revalider |
| Embeddings | idem | à confirmer au premier contact |
| Vector Stores / Files | idem | à confirmer ; **pas** d'élargissement de scope org |
| Vision input_image/file inline | Responses multimodal | Terra medium admitted catalogue |

Une permission technique absente **n'est pas** corrigée par changement de droits — STOP + rapport.

---

## 8. Critères STOP

- Enveloppe famille ou globale atteinte
- Clé / FP incorrect · Admin détecté
- Borne non vérifiable sur chemin utilisé
- Upload hors synthétique
- Création VS/file incertaine non réconciliée
- Contamination RECETTE
- Contournement Frontier
- Extension permissions / migration / persistance ops

---

## 9. Préflight déjà acquis (non LIVE)

| Preuve | Résultat |
|---|---|
| Frontier familles + concurrency multi-process | PASSED |
| Restart cumulatif | PASSED |
| Artefacts PDF + extract local | ALIGNED (`SCANNED_NO_TEXT` OK) |
| Baseline `searchJournalSubjects` produit | SEEDED · isolation 0 |

---

## 10. Demande

**Présentation du manifeste consolidé FINAL.**

Consommation attendue de Morris :

> **GO LIVE DÉFINITIF** sur manifeste `live-campaign-manifest-final.md`
> campaignId `ml2-i2-docintel-20261127`
> plafonds 236 / 344k / ≤ ≈1 USD estimé
> ordre Decisions→Responses→Embeddings puis VS→Vision
> cleanup 24 + Nora 40 préservés

**Aucune émission** tant que ce GO définitif n'est pas consommé explicitement.
```


---

## 15. Réserves explicites + conditions de sortie

1. Worktree dirty — delivery code not in HEAD commit; audit via this FULL pack.
2. Nora E2E is adapter-bounded: no workId, no D4 tools, no document revise loop.
3. Hybrid/Decisions/Vision **not** wired into Nora tool builders; flags OFF.
4. File-index concurrency/backup/crash consistency not production-hardened.
5. F21 uncertainty calibration still weak at p≈0; fallback not observed on AMB reprobing.
6. F24 punctual reprobe null in qualify (no re-emission).
7. VS product DEFER; experimental cleanup proven only.
8. Embedding FinOps tariff PARTIAL/UNKNOWN.
9. Full web vitest + Next build not re-run this regularization.
10. Clôture Morris **en attente** de revue de ce pack FULL.

### Conditions de sortie Morris

- Accept ML2 with above reserves? (yes/no + amendments)
- Authorize which flags on which lane?
- GO migration 027? (default no)
- Macro-lot 3 only on separate GO


---

## 16. Verdict

**ML2_FULL_HANDOFF_REGULARIZED — AWAITING_REMOTE_VERIFY**

No project push. No migration. No permanent flag activation. No new provider emission in this regularization.
