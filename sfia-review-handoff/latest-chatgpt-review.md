# SFIA REVIEW PACK — FULL
# CONVERGENCE OPENAI–STUDIO — ML1/ML2 CONSOLIDATION + REGULARIZATION
# PRODUCT COMPLETENESS & ENGINEERING QUALIFICATION

- **Generated (UTC):** 2026-11-27T07:02:29Z
- **Cycle:** 8 Delivery / Critical / INC-EVOL
- **Motive:** REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING → targeted proof + build regularization
- **HEAD final:** `6665083447244234960b3d724d2fe66f6bead910`
- **Tree web:** `04be6bef4218cd69d79014680349d883dd6c87a8`
- **BUILD_ID:** `kZ2BQGAn9NHhPNqh4kZnT`
- **Build meta:** `{}`
- **Identity (server):**
```json
n/a
```
- **Schema:** 027 APPLIED DEV · flags OFF · WEB OFF · RECETTE protected
- **Verdict:** MACRO-LOT 2 — IMPLEMENTATION COMPLETE — ENGINEERING QUALIFICATION COMPLETE — FUNCTIONAL RECETTE QUALIFICATION PENDING — MORRIS EXIT ACCEPTANCE PROPOSED
- **SFIA status:** READY WITH RESERVES
- **Fake/Real:** DETERMINISTIC/UNIT + REAL PG wiring · **no new LIVE**
- **Prior incomplete handoffs:** `c4f7c52b` (consolidation) · `ee9af91a` (52-line stub) — **superseded**

---

## 0. Local Git Truth Check

| Field | Value |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée consolidation | `9321bcf73d95cdcbba76bb3f6e33b17ed8163afe` |
| HEAD final | `6665083447244234960b3d724d2fe66f6bead910` |
| Tree web | `04be6bef4218cd69d79014680349d883dd6c87a8` |
| Push projet | NON |
| RECETTE | protected :3200 |

### Commits 9321bcf7 → HEAD
```text
66650834 docs(ml2): record handoff regularization delivery with final BUILD_ID
14cfa4e2 fix(ml2): serialize derived upsert concurrency and uniquify FinOps attemptIds
479dd54d fix(ml2): close journal PG hybrid, Frontier measured tokens, and ML2 FinOps gaps
8a6eef97 fix(ml2): complete derived-index product lifecycle and ML1/ML2 consolidation
```

### Diffstat 9321bcf7 → HEAD
```text
.../as-built-macro-lot-2-20261127.md               |   4 +-
 .../completeness-cartography-20261127.md           |  49 +++++++
 .../recette-qualification-backlog-20261127.md      |  24 ++++
 .../construction/delivery-history.md               |  33 +++++
 ...5-registre-couverture-et-revue-developpement.md |   2 +-
 .../src/domains/conversation/bounded-judgment.ts   |  45 ++++++-
 .../conversation/provider-emission-frontier.ts     |  60 +++++++--
 .../domains/documents/document-vision-punctual.ts  |  38 +++++-
 .../src/domains/knowledge/derived-embedding-pg.ts  |  80 +++++++++++
 .../domains/knowledge/derived-embedding-service.ts | 146 ++++++++++++++++++++-
 .../web/src/domains/knowledge/journal.ts           |  29 ++--
 .../web/src/domains/knowledge/service.ts           |  64 ++++++++-
 .../unit/ml2-derived-lifecycle-upsert.test.ts      |  46 +++++++
 .../web/tests/unit/ml2-journal-hybrid-pg.test.ts   | 101 ++++++++++++++
 .../web/tests/unit/ml2-product-wiring.test.ts      |   3 +-
 15 files changed, 692 insertions(+), 32 deletions(-)
```

### Diffstat follow-up+regularization 8a6eef97 → HEAD
```text
.../completeness-cartography-20261127.md           |   5 +-
 .../construction/delivery-history.md               |  21 ++++
 .../src/domains/conversation/bounded-judgment.ts   |  45 ++++++++-
 .../conversation/provider-emission-frontier.ts     |  39 +++++++-
 .../domains/documents/document-vision-punctual.ts  |  38 +++++++-
 .../src/domains/knowledge/derived-embedding-pg.ts  | 107 ++++++++++++---------
 .../domains/knowledge/derived-embedding-service.ts |  37 ++++++-
 .../web/src/domains/knowledge/journal.ts           |  29 ++++--
 .../web/tests/unit/ml2-journal-hybrid-pg.test.ts   | 101 +++++++++++++++++++
 9 files changed, 356 insertions(+), 66 deletions(-)
```

---

## 1. Structure du dossier

### A. Delivery consolidation (9321bcf7 → 8a6eef97)
LIFECYCLE-01 upsert produit · CONTEXT-01 hybrid in selectRelevantKnowledgeContext · FINOPS-IDEM-01 · cartography · RECETTE backlog.

### B. Annexe régularisation documentaire macro-lot 2 (e784 → 9321)
Conservée conceptuellement — non rejouée.

### C. Follow-up P0/P1 (8a6eef97 → 479dd54d)
JOURNAL-PG-01 · FRONTIER-MEAS-01 · FINOPS-ML2-01.

### D. Regularization preuves (479dd54d → 66650834)
- **CONCUR-01** : `pg_advisory_xact_lock` dans `upsertDerivedChunkPg`
- **FINOPS-KEY-01** : `attemptId` unique par consommation
- **BUILD** : candidat DEV `kZ2BQGAn9NHhPNqh4kZnT` aligné sur HEAD `66650834`

---

## 2. Confirmations demandées par ChatGPT

### 2.1 Protection mises à jour concurrentes de l'index
**Défaut confirmé puis corrigé.** Sans lock, deux upserts concurrents avec fingerprints distincts pouvaient chacun révoquer l'autre → double revoked.

**Correction (`upsertDerivedChunkPg`):**
1. `pg.begin` transaction
2. `pg_advisory_xact_lock(hashtext(projectId), hashtext(sourceId))`
3. INSERT … ON CONFLICT DO UPDATE
4. UPDATE revoke autres fingerprints du même sourceId

### 2.2 Identification unique des consommations FinOps
**Défaut confirmé puis corrigé.** Clés basées uniquement sur fingerprint / `name:source` → collisions `onConflictDoNothing`.

| Surface | Clé |
|---|---|
| `embeddings.derived_query` | `attemptId = randomUUID()` |
| `bounded_judgment.*` | `attemptId = randomUUID()` |
| `vision.punctual` | `attemptId = randomUUID()` |
| `embeddings.derived_index_upsert` | `attemptId = sourceId:fp` (idempotent même contenu) |

Le fingerprint reste en `limits[]` pour audit, pas comme seule identité.

---

## 3. Cartographie (état)

```markdown
# Cartographie de complétude ML1/ML2 — consolidation 2026-11-27

| Capacité | Contrat | Implémentation | Consommateurs réels | Cycle de vie | Niveau | Écart | Action |
|---|---|---|---|---|---|---|---|
| Decisions bornés | CF §4 / CT | `bounded-judgment.ts` | D8 `d8-cognitive-criterion-eval` | flag OFF défaut | wired / available | C/F RECETTE pertinence | KEEP |
| Fallback Responses | CF | dans `runBoundedJudgment` | D8 | — | wired | — | KEEP |
| Embeddings + hybrid | Arch E lock | `derived-embedding-*` + `hybrid-knowledge-search` | `d4-read-tools.searchProjectResources` · `journal/search` · `selectRelevantKnowledgeContext` (supplément) | **upsert produit** capitalize/openPoint + revoke supersede · rebuild scripts | available (flag) | B→corrigé lifecycle | ADAPT done |
| Index PG 027 | GO A | `derived_embedding_chunks` | search PG | reconstructible | available | — | KEEP |
| Droits/fingerprint | F23 | hybrid re-read + fp filter | hybridSearch | concurrent revoke | unit+parcours | — | KEEP |
| Vision ponctuelle | CF | `document-vision-punctual.ts` | `git-read-tools.read_git_pdf` | flag OFF | wired | F RECETTE schémas | KEEP |
| Frontier commun | CT | `createFrontierBoundOpenAIClient` | judgment · embeddings · vision · Nora | campaign only if `SFIA_G_LIVE_API` | available | expérimentale ≠ produit | KEEP |
| Allocation cognitive | ML1 | policy + admitModelEffort | Nora adapter | — | available | F RECETTE | KEEP |
| Conducteur D3 V1 | ML1 | cognitive-conductor / work | postUserMessageAndNora | lease/CAS | available | F RECETTE | KEEP |
| FinOps usages | CT | usage-accounting | rebuild/upsert/judgment/vision | PARTIAL tariff | available | C Admin reserve | KEEP |
| WEB | ML1 | public-web | Nora | LIVE OFF | preserved | — | KEEP |
| VS / File Search | DEFER | — | — | — | deferred | — | DEFER |
| Audio ML3 | OUT | — | — | — | not started | — | OUT |

## Écarts classés (mandat §6)

| Id | Classe | Description | Traitement |
|---|---|---|---|
| LIFECYCLE-01 | A défaut réel | Rebuild index uniquement via scripts ; capitalize ne faisait que revoke | **Corrigé** : `upsertDerivedAdmissibleSource` + wiring capitalize/openPoint |
| CONTEXT-01 | B couverture | `selectRelevantKnowledgeContext` sans canal hybrid | **Corrigé** : supplément DERIVED_HIT si flag ON |
| FINOPS-IDEM-01 | B | `callOrdinal: Date.now()` sur rebuild | **Corrigé** : ordinal stable fingerprint |
| JOURNAL-PG-01 | A défaut réel | Journal `mergeLexicalAndDerived` sans semanticHits → PG no-op + embed gaspillé | **Corrigé** : `hybridSearchProjectKnowledge` + stub queryVector |
| FRONTIER-MEAS-01 | A défaut réel | Commit sans measured ; emb réserve maxOutputTokensPerRequest | **Corrigé** : measured pass-through ; output reserve Responses-only |
| FINOPS-ML2-01 | B | Ledger manquant query/judgment/vision | **Corrigé** : observations best-effort |
| EXP-TOKENS-01 | E tooling | Campagne LIVE tokens reserved→committed (historique) | Cause produit corrigée ; **pas** de nouvelle campagne |
| EXP-EMB-FAM-01 | E/D | Famille embeddings 12/12 saturée sous flag search + multi-tool D4 | Limite **expérimentale** ; produit sans campaign familyHttp |
| F25-REST-01 | F RECETTE | Restitution Nora COMPLETE non obtenue en DEV LIVE | QUALIFICATION RECETTE REQUIRED |
| TYPECHECK-BASELINE | E | Erreurs tsc historiques hors ML2 | non bloquant delivery ; pas de remédiation générale |

## Protections produit vs campagne

| Mécanisme | Produit | Campagne expérimentale |
|---|---|---|
| Cognitive max tokens / reeval / segments | `cognitiveEnvelopeLimits` 2M / 1M / 120 | non |
| Frontier campaign envelope | seulement si `SFIA_G_LIVE_API` ou WEB gate | oui |
| familyHttp | null hors campagne | oui (ML2 LIVE) |
| Flags SEARCH/JUDGMENT/VISION | OFF défaut | ON temporaire qualify |

## Dépendances ML3 (préparation, non engagement)

- Frontier + Responses path stable
- D3 continuity V1
- D4/D9 rights
- FinOps attribution
- Pas d’audio/Realtime dans ce delivery

```

---

## 4. Code complet des fichiers créés/modifiés

### `src/domains/knowledge/derived-embedding-pg.ts` (8249 bytes, 253 lines)
```ts
/**
 * PG backend for derived embeddings — sole operational store after Morris GO A.
 * No dual-read/dual-write with file. File helpers remain for unit tests only.
 *
 * Authorization: caller MUST revalidate pilot/project via D4.
 * owner_pilot_id on rows is attribution only.
 */
import { sql as pg } from "@/db/client";
import {
  DERIVED_EMBEDDING_MODEL,
  cosineSimilarity,
  type DerivedIndexEntry,
  type MobilizableHit,
} from "@/domains/knowledge/derived-embedding-index";

export function derivedEmbeddingBackend(
  env: NodeJS.ProcessEnv = process.env,
): "file" | "pg" {
  const v = (env.SFIA_DERIVED_EMBEDDING_BACKEND || "pg").trim().toLowerCase();
  // Explicit file only for unit tests / emergency — ops default is pg.
  return v === "file" ? "file" : "pg";
}

export function pgDerivedStoreActive(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return derivedEmbeddingBackend(env) === "pg";
}

/**
 * Replace project projection: delete prior rows then upsert admissible entries.
 * Transactional via postgres.js reserved transaction.
 */
export async function replaceDerivedChunksPg(input: {
  projectId: string;
  preparationId: string;
  ownerPilotId: string;
  entries: DerivedIndexEntry[];
  vectors: Map<string, number[]>;
}): Promise<{ written: number }> {
  if (!pgDerivedStoreActive()) {
    throw new Error("PG_DERIVED_STORE_INACTIVE");
  }
  await pg.begin(async (tx) => {
    await tx`
      DELETE FROM derived_embedding_chunks
      WHERE project_id = ${input.projectId}
    `;
    for (const e of input.entries) {
      const vector = input.vectors.get(e.sourceId);
      if (!vector) continue;
      const id = `${input.projectId}:${e.sourceId}:${e.contentFingerprint}:${e.model}`;
      const vectorJson = JSON.stringify(vector);
      await tx.unsafe(
        `INSERT INTO derived_embedding_chunks (
          id, project_id, preparation_id, owner_pilot_id,
          source_id, source_kind, content_fingerprint, model, dims,
          vector_json, text_excerpt, revoked, deleted, version_label, index_ref, updated_at
        ) VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13,$14,$15,now()
        )
        ON CONFLICT (project_id, source_id, content_fingerprint, model)
        DO UPDATE SET
          vector_json = EXCLUDED.vector_json,
          text_excerpt = EXCLUDED.text_excerpt,
          revoked = EXCLUDED.revoked,
          deleted = EXCLUDED.deleted,
          version_label = EXCLUDED.version_label,
          index_ref = EXCLUDED.index_ref,
          updated_at = now(),
          preparation_id = EXCLUDED.preparation_id,
          owner_pilot_id = EXCLUDED.owner_pilot_id,
          dims = EXCLUDED.dims`,
        [
          id,
          input.projectId,
          input.preparationId,
          input.ownerPilotId,
          e.sourceId,
          e.sourceKind,
          e.contentFingerprint,
          e.model,
          e.dims,
          vectorJson,
          e.text.slice(0, 2000),
          e.revoked,
          e.deleted,
          e.versionLabel,
          e.indexRef,
        ],
      );
    }
  });
  return { written: input.entries.filter((e) => input.vectors.has(e.sourceId)).length };
}

/**
 * Upsert a single chunk without wiping the project projection.
 * Used by product lifecycle (capitalize / open-point), not full rebuild.
 *
 * Concurrent upserts for the same (projectId, sourceId) are serialized via
 * pg_advisory_xact_lock so two distinct fingerprints cannot both remain active
 * (insert+revoke race).
 */
export async function upsertDerivedChunkPg(input: {
  projectId: string;
  preparationId: string;
  ownerPilotId: string;
  entry: DerivedIndexEntry;
  vector: number[];
}): Promise<boolean> {
  if (!pgDerivedStoreActive()) {
    throw new Error("PG_DERIVED_STORE_INACTIVE");
  }
  const e = input.entry;
  const id = `${input.projectId}:${e.sourceId}:${e.contentFingerprint}:${e.model}`;
  const vectorJson = JSON.stringify(input.vector);
  await pg.begin(async (tx) => {
    // Transaction-scoped advisory lock keyed by project + source.
    await tx`
      SELECT pg_advisory_xact_lock(
        hashtext(${input.projectId}),
        hashtext(${e.sourceId})
      )
    `;
    await tx.unsafe(
      `INSERT INTO derived_embedding_chunks (
        id, project_id, preparation_id, owner_pilot_id,
        source_id, source_kind, content_fingerprint, model, dims,
        vector_json, text_excerpt, revoked, deleted, version_label, index_ref, updated_at
      ) VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13,$14,$15,now()
      )
      ON CONFLICT (project_id, source_id, content_fingerprint, model)
      DO UPDATE SET
        vector_json = EXCLUDED.vector_json,
        text_excerpt = EXCLUDED.text_excerpt,
        revoked = false,
        deleted = false,
        version_label = EXCLUDED.version_label,
        index_ref = EXCLUDED.index_ref,
        updated_at = now(),
        preparation_id = EXCLUDED.preparation_id,
        owner_pilot_id = EXCLUDED.owner_pilot_id,
        dims = EXCLUDED.dims`,
      [
        id,
        input.projectId,
        input.preparationId,
        input.ownerPilotId,
        e.sourceId,
        e.sourceKind,
        e.contentFingerprint,
        e.model,
        e.dims,
        vectorJson,
        (e.text ?? "").slice(0, 480),
        false,
        false,
        e.versionLabel,
        e.indexRef,
      ],
    );
    // Revoke prior fingerprints for same sourceId (content change, same id).
    await tx`
      UPDATE derived_embedding_chunks
      SET revoked = true, updated_at = now()
      WHERE project_id = ${input.projectId}
        AND source_id = ${e.sourceId}
        AND content_fingerprint <> ${e.contentFingerprint}
        AND revoked = false
    `;
  });
  return true;
}

/** Mark revoked/deleted idempotently. */
export async function markDerivedChunkLifecyclePg(input: {
  projectId: string;
  sourceId: string;
  revoked?: boolean;
  deleted?: boolean;
}): Promise<number> {
  if (!pgDerivedStoreActive()) {
    throw new Error("PG_DERIVED_STORE_INACTIVE");
  }
  const rows = await pg`
    UPDATE derived_embedding_chunks
    SET
      revoked = COALESCE(${input.revoked ?? null}, revoked),
      deleted = COALESCE(${input.deleted ?? null}, deleted),
      updated_at = now()
    WHERE project_id = ${input.projectId}
      AND source_id = ${input.sourceId}
    RETURNING id
  `;
  return rows.length;
}

export async function searchDerivedChunksPg(input: {
  projectId: string;
  queryVector: number[];
  limit?: number;
  model?: string;
}): Promise<MobilizableHit[]> {
  if (!pgDerivedStoreActive()) {
    throw new Error("PG_DERIVED_STORE_INACTIVE");
  }
  const model = input.model ?? DERIVED_EMBEDDING_MODEL;
  const limit = Math.min(Math.max(input.limit ?? 8, 1), 20);
  const rows = await pg`
    SELECT source_id, source_kind, preparation_id, version_label, index_ref,
           vector_json, text_excerpt
    FROM derived_embedding_chunks
    WHERE project_id = ${input.projectId}
      AND model = ${model}
      AND revoked = false
      AND deleted = false
  `;
  const hits: MobilizableHit[] = [];
  for (const row of rows) {
    const raw = row.vector_json;
    const vector = Array.isArray(raw)
      ? (raw as number[])
      : typeof raw === "string"
        ? (JSON.parse(raw) as number[])
        : null;
    if (!vector?.length) continue;
    hits.push({
      sourceId: String(row.source_id),
      sourceKind: String(row.source_kind) as MobilizableHit["sourceKind"],
      score: cosineSimilarity(input.queryVector, vector),
      versionLabel: (row.version_label as string | null) ?? null,
      indexRef: String(row.index_ref),
      preparationId: String(row.preparation_id),
      snippet: String(row.text_excerpt ?? "").slice(0, 280),
    });
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}

export async function countDerivedChunksPg(projectId?: string): Promise<number> {
  if (projectId) {
    const rows = await pg`
      SELECT count(*)::int AS n FROM derived_embedding_chunks
      WHERE project_id = ${projectId}
    `;
    return Number(rows[0]?.n ?? 0);
  }
  const rows = await pg`SELECT count(*)::int AS n FROM derived_embedding_chunks`;
  return Number(rows[0]?.n ?? 0);
}
```

### `src/domains/knowledge/derived-embedding-service.ts` (16644 bytes, 551 lines)
```ts
/**
 * Product service for ML2 derived embeddings.
 * Ops backend: PostgreSQL (Morris GO A). File helpers remain for unit tests
 * when SFIA_DERIVED_EMBEDDING_BACKEND=file only — no dual-write.
 */
import {
  contentFingerprint,
  DERIVED_EMBEDDING_MODEL,
  derivedEmbeddingSearchEnabled,
  makeIndexRef,
  markSourceLifecycle,
  searchDerivedIndex,
  writeDerivedIndex,
  type DerivedIndexEntry,
  type DerivedSourceKind,
  type MobilizableHit,
} from "@/domains/knowledge/derived-embedding-index";
import {
  derivedEmbeddingBackend,
  markDerivedChunkLifecyclePg,
  replaceDerivedChunksPg,
  searchDerivedChunksPg,
  upsertDerivedChunkPg,
} from "@/domains/knowledge/derived-embedding-pg";
import {
  mergeLexicalAndDerived,
  type HybridHit,
  type LexicalHit,
} from "@/domains/knowledge/hybrid-knowledge-search";
import { listProjectKnowledge } from "@/domains/knowledge/journal";

export type EmbedClient = {
  embeddings: {
    create: (body: {
      model: string;
      input: string | string[];
    }) => Promise<{
      data: Array<{ embedding: number[] }>;
      usage?: { total_tokens?: number };
    }>;
  };
};

async function defaultEmbedClient(): Promise<EmbedClient | null> {
  const key = (process.env.OPENAI_API_KEY || "").trim();
  if (!key) return null;
  try {
    const frontier = await import(
      "@/domains/conversation/provider-emission-frontier"
    );
    const client = await frontier.createFrontierBoundOpenAIClient({
      maxRetries: 0,
    });
    return client as unknown as EmbedClient | null;
  } catch {
    return null;
  }
}

export async function embedQueryText(
  text: string,
  client?: EmbedClient | null,
): Promise<{ vector: number[]; tokens: number } | null> {
  const c = client ?? (await defaultEmbedClient());
  if (!c) return null;
  const q = text.trim();
  if (!q) return null;
  const res = await c.embeddings.create({
    model: DERIVED_EMBEDDING_MODEL,
    input: q,
  });
  const vector = res.data[0]?.embedding;
  if (!vector?.length) return null;
  const tokens = res.usage?.total_tokens ?? 0;
  try {
    const { randomUUID } = await import("node:crypto");
    const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
      "@/domains/conversation/usage-accounting"
    );
    const fp = contentFingerprint(q).slice(0, 12);
    // Distinct HTTP consumption ⇒ distinct attemptId (content FP alone must not dedupe).
    const attemptId = randomUUID();
    await recordProviderUsageObservation({
      operation: "embeddings.derived_query",
      modelRequested: DERIVED_EMBEDDING_MODEL,
      modelApplied: DERIVED_EMBEDDING_MODEL,
      inputTokens: tokens || null,
      outputTokens: 0,
      status: "succeeded",
      granularity: "REQUEST",
      costCoverage: "PARTIAL",
      idempotencyKey: buildIdempotencyKey({
        granularity: "REQUEST",
        lane: process.env.STUDIO_LANE || "DEV",
        operation: "embeddings.derived_query",
        attemptId,
        callOrdinal: 0,
      }),
      limits: ["DERIVED_QUERY_EMBED", "EMBEDDING_TARIFF_PARTIAL", `FP_${fp}`],
    });
  } catch {
    /* FinOps best-effort */
  }
  return { vector, tokens };
}

export function collectAdmissibleKnowledgeSources(bundle: Awaited<
  ReturnType<typeof listProjectKnowledge>
>): Array<{
  sourceId: string;
  sourceKind: DerivedSourceKind;
  text: string;
  versionLabel: string | null;
}> {
  const sources: Array<{
    sourceId: string;
    sourceKind: DerivedSourceKind;
    text: string;
    versionLabel: string | null;
  }> = [];
  for (const a of bundle.acquis) {
    if (a.status !== "CURRENT") continue;
    sources.push({
      sourceId: a.id,
      sourceKind: "acquis",
      text: `${a.kind}: ${a.statement}`,
      versionLabel: "CURRENT",
    });
  }
  for (const o of bundle.openPoints) {
    if (o.status !== "OPEN") continue;
    sources.push({
      sourceId: o.id,
      sourceKind: "open_point",
      text: o.statement,
      versionLabel: o.status,
    });
  }
  for (const s of bundle.subjects) {
    if (s.status === "ARCHIVED") continue;
    sources.push({
      sourceId: s.id,
      sourceKind: "subject",
      text: s.title,
      versionLabel: s.status,
    });
  }
  return sources;
}

async function persistDerivedIndex(input: {
  pilotId: string;
  projectId: string;
  preparationId: string;
  entries: DerivedIndexEntry[];
  vectors: Map<string, number[]>;
}): Promise<void> {
  if (derivedEmbeddingBackend() === "pg") {
    await replaceDerivedChunksPg({
      projectId: input.projectId,
      preparationId: input.preparationId,
      ownerPilotId: input.pilotId,
      entries: input.entries,
      vectors: input.vectors,
    });
    return;
  }
  // Test-only file backend — not an operational dual-write path.
  writeDerivedIndex({
    projectId: input.projectId,
    entries: input.entries,
    vectors: input.vectors,
  });
}

/**
 * Rebuild derived index from CURRENT/OPEN admissible sources only.
 */
export async function rebuildDerivedIndexFromProjectKnowledge(input: {
  pilotId: string;
  projectId: string;
  preparationId: string;
  client?: EmbedClient | null;
}): Promise<{
  ok: boolean;
  entryCount: number;
  tokens: number;
  reason?: string;
  skippedNonAdmissible?: number;
  backend?: string;
}> {
  if (!derivedEmbeddingSearchEnabled()) {
    return { ok: false, entryCount: 0, tokens: 0, reason: "FLAG_OFF" };
  }
  const client = input.client ?? (await defaultEmbedClient());
  if (!client) {
    return { ok: false, entryCount: 0, tokens: 0, reason: "NO_OPENAI_CLIENT" };
  }
  const bundle = await listProjectKnowledge(input.pilotId, input.projectId);
  const nonAdmissible =
    bundle.acquis.filter((a) => a.status !== "CURRENT").length +
    bundle.openPoints.filter((o) => o.status !== "OPEN").length +
    bundle.subjects.filter((s) => s.status === "ARCHIVED").length;
  const sources = collectAdmissibleKnowledgeSources(bundle);
  if (sources.length === 0) {
    await persistDerivedIndex({
      pilotId: input.pilotId,
      projectId: input.projectId,
      preparationId: input.preparationId,
      entries: [],
      vectors: new Map(),
    });
    return {
      ok: true,
      entryCount: 0,
      tokens: 0,
      skippedNonAdmissible: nonAdmissible,
      backend: derivedEmbeddingBackend(),
    };
  }
  const texts = sources.map((s) => s.text);
  const emb = await client.embeddings.create({
    model: DERIVED_EMBEDDING_MODEL,
    input: texts,
  });
  const vectors = new Map<string, number[]>();
  const entries: DerivedIndexEntry[] = [];
  for (let i = 0; i < sources.length; i++) {
    const src = sources[i]!;
    const vector = emb.data[i]?.embedding;
    if (!vector) continue;
    const fp = contentFingerprint(src.text);
    vectors.set(src.sourceId, vector);
    entries.push({
      sourceId: src.sourceId,
      sourceKind: src.sourceKind,
      projectId: input.projectId,
      preparationId: input.preparationId,
      contentFingerprint: fp,
      model: DERIVED_EMBEDDING_MODEL,
      dims: vector.length,
      revoked: false,
      deleted: false,
      versionLabel: src.versionLabel,
      indexRef: makeIndexRef({
        projectId: input.projectId,
        sourceId: src.sourceId,
        contentFingerprint: fp,
      }),
      updatedAt: new Date().toISOString(),
      text: src.text,
    });
  }
  await persistDerivedIndex({
    pilotId: input.pilotId,
    projectId: input.projectId,
    preparationId: input.preparationId,
    entries,
    vectors,
  });
  try {
    const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
      "@/domains/conversation/usage-accounting"
    );
    await recordProviderUsageObservation({
      operation: "embeddings.derived_index_rebuild",
      modelRequested: DERIVED_EMBEDDING_MODEL,
      modelApplied: DERIVED_EMBEDDING_MODEL,
      inputTokens: emb.usage?.total_tokens ?? null,
      outputTokens: 0,
      status: "succeeded",
      granularity: "REQUEST",
      costCoverage: "PARTIAL",
      projectId: input.projectId,
      ownerPilotId: input.pilotId,
      preparationId: input.preparationId,
      idempotencyKey: buildIdempotencyKey({
        granularity: "REQUEST",
        lane: process.env.STUDIO_LANE || "DEV",
        operation: "embeddings.derived_index_rebuild",
        projectId: input.projectId,
        preparationId: input.preparationId,
        // Stable ordinal from admissible set size + first fingerprint — not wall-clock.
        callOrdinal: (sources.length * 1000 + (entries[0]?.contentFingerprint
          ? Number.parseInt(entries[0].contentFingerprint.slice(0, 4), 16)
          : 0)) % 100000,
      }),
      limits: [
        "DERIVED_INDEX_PG",
        "ADMISSIBLE_SOURCES_ONLY",
        "EMBEDDING_TARIFF_PARTIAL",
        `BACKEND_${derivedEmbeddingBackend().toUpperCase()}`,
      ],
    });
  } catch {
    /* FinOps best-effort */
  }
  return {
    ok: true,
    entryCount: entries.length,
    tokens: emb.usage?.total_tokens ?? 0,
    skippedNonAdmissible: nonAdmissible,
    backend: derivedEmbeddingBackend(),
  };
}

export async function hybridSearchProjectKnowledge(input: {
  pilotId: string;
  projectId: string;
  query: string;
  lexical: LexicalHit[];
  limit?: number;
  client?: EmbedClient | null;
  openPointsOnly?: boolean;
}): Promise<{
  hits: HybridHit[];
  derivedUsed: boolean;
  derivedSkippedReason: string | null;
  rightsRevalidated: boolean;
  backend?: string;
}> {
  if (!derivedEmbeddingSearchEnabled()) {
    return {
      hits: input.lexical.map((l) => ({ ...l, channel: "lexical" as const })),
      derivedUsed: false,
      derivedSkippedReason: "FLAG_OFF",
      rightsRevalidated: false,
      backend: derivedEmbeddingBackend(),
    };
  }
  const bundle = await listProjectKnowledge(input.pilotId, input.projectId);
  const admissible = new Set(
    collectAdmissibleKnowledgeSources(bundle).map((s) => s.sourceId),
  );
  if (input.openPointsOnly) {
    for (const id of [...admissible]) {
      const op = bundle.openPoints.find((o) => o.id === id);
      if (!op || op.status !== "OPEN") admissible.delete(id);
    }
  }
  for (const l of input.lexical) admissible.add(l.sourceId);

  const emb = await embedQueryText(input.query, input.client);
  if (!emb) {
    return {
      hits: input.lexical
        .filter((l) => admissible.has(l.sourceId))
        .map((l) => ({ ...l, channel: "lexical" as const })),
      derivedUsed: false,
      derivedSkippedReason: "EMBED_UNAVAILABLE",
      rightsRevalidated: true,
      backend: derivedEmbeddingBackend(),
    };
  }
  const snippets = new Map<string, string>();
  for (const l of input.lexical) snippets.set(l.sourceId, l.snippet);

  let semanticHits: MobilizableHit[] =
    derivedEmbeddingBackend() === "pg"
      ? await searchDerivedChunksPg({
          projectId: input.projectId,
          queryVector: emb.vector,
          limit: Math.max((input.limit ?? 12) * 2, 16),
        })
      : searchDerivedIndex({
          projectId: input.projectId,
          queryVector: emb.vector,
          limit: Math.max((input.limit ?? 12) * 2, 16),
          snippets,
        });
  // Attach snippets for PG hits when available from lexical map.
  semanticHits = semanticHits.map((h) => ({
    ...h,
    snippet: h.snippet || snippets.get(h.sourceId) || "",
  }));

  // Concurrent revoke / content change (same sourceId, new fingerprint):
  // re-read D4 admissible set and drop stale index refs before merge.
  const freshBundle = await listProjectKnowledge(input.pilotId, input.projectId);
  const freshSources = collectAdmissibleKnowledgeSources(freshBundle);
  const freshFp = new Map(
    freshSources.map((s) => [s.sourceId, contentFingerprint(s.text)]),
  );
  const freshIds = new Set(freshFp.keys());
  for (const l of input.lexical) freshIds.add(l.sourceId);
  semanticHits = semanticHits.filter((h) => {
    if (!freshFp.has(h.sourceId)) return false;
    const m = /@([a-f0-9]+)$/i.exec(h.indexRef || "");
    if (!m) return true;
    return m[1] === freshFp.get(h.sourceId);
  });

  const merged = mergeLexicalAndDerived({
    projectId: input.projectId,
    lexical: input.lexical.filter((l) => freshIds.has(l.sourceId)),
    queryVector: emb.vector,
    limit: input.limit,
    snippets,
    allowedSourceIds: freshIds,
    semanticHits,
  });
  return {
    ...merged,
    rightsRevalidated: true,
    backend: derivedEmbeddingBackend(),
  };
}

/**
 * Product lifecycle: upsert one admissible source into the derived index.
 * Best-effort; flag OFF / missing client → no-op. Never full-rebuild.
 */
export async function upsertDerivedAdmissibleSource(input: {
  pilotId: string;
  projectId: string;
  preparationId: string;
  sourceId: string;
  sourceKind: DerivedSourceKind;
  text: string;
  versionLabel?: string | null;
  client?: EmbedClient | null;
}): Promise<{ ok: boolean; reason?: string; tokens?: number }> {
  if (!derivedEmbeddingSearchEnabled()) {
    return { ok: false, reason: "FLAG_OFF" };
  }
  const text = input.text.trim();
  if (!text || !input.sourceId.trim()) {
    return { ok: false, reason: "EMPTY" };
  }
  const client = input.client ?? (await defaultEmbedClient());
  if (!client) return { ok: false, reason: "NO_OPENAI_CLIENT" };
  const emb = await client.embeddings.create({
    model: DERIVED_EMBEDDING_MODEL,
    input: text,
  });
  const vector = emb.data[0]?.embedding;
  if (!vector?.length) return { ok: false, reason: "NO_VECTOR" };
  const fp = contentFingerprint(text);
  const entry: DerivedIndexEntry = {
    sourceId: input.sourceId,
    sourceKind: input.sourceKind,
    projectId: input.projectId,
    preparationId: input.preparationId,
    contentFingerprint: fp,
    model: DERIVED_EMBEDDING_MODEL,
    dims: vector.length,
    revoked: false,
    deleted: false,
    versionLabel: input.versionLabel ?? null,
    indexRef: makeIndexRef({
      projectId: input.projectId,
      sourceId: input.sourceId,
      contentFingerprint: fp,
    }),
    updatedAt: new Date().toISOString(),
    text,
  };
  if (derivedEmbeddingBackend() === "pg") {
    await upsertDerivedChunkPg({
      projectId: input.projectId,
      preparationId: input.preparationId,
      ownerPilotId: input.pilotId,
      entry,
      vector,
    });
  } else {
    // File backend (unit tests): single-entry write — not product ops path.
    writeDerivedIndex({
      projectId: input.projectId,
      entries: [entry],
      vectors: new Map([[input.sourceId, vector]]),
    });
  }
  try {
    const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
      "@/domains/conversation/usage-accounting"
    );
    await recordProviderUsageObservation({
      operation: "embeddings.derived_index_upsert",
      modelRequested: DERIVED_EMBEDDING_MODEL,
      modelApplied: DERIVED_EMBEDDING_MODEL,
      inputTokens: emb.usage?.total_tokens ?? null,
      outputTokens: 0,
      status: "succeeded",
      granularity: "REQUEST",
      costCoverage: "PARTIAL",
      projectId: input.projectId,
      ownerPilotId: input.pilotId,
      preparationId: input.preparationId,
      idempotencyKey: buildIdempotencyKey({
        granularity: "REQUEST",
        lane: process.env.STUDIO_LANE || "DEV",
        operation: "embeddings.derived_index_upsert",
        projectId: input.projectId,
        preparationId: input.preparationId,
        // sourceId+fp identify the indexed content; attemptId distinguishes re-emissions.
        attemptId: `${input.sourceId}:${fp}`,
        callOrdinal: 0,
      }),
      limits: [
        "DERIVED_INDEX_UPSERT",
        "ADMISSIBLE_SOURCE",
        `BACKEND_${derivedEmbeddingBackend().toUpperCase()}`,
        `FP_${fp.slice(0, 12)}`,
        `SOURCE_${input.sourceId.slice(0, 24)}`,
      ],
    });
  } catch {
    /* FinOps best-effort */
  }
  return {
    ok: true,
    tokens: emb.usage?.total_tokens ?? 0,
  };
}

export async function revokeDerivedSource(
  projectId: string,
  sourceId: string,
): Promise<boolean> {
  if (derivedEmbeddingBackend() === "pg") {
    const n = await markDerivedChunkLifecyclePg({
      projectId,
      sourceId,
      revoked: true,
    });
    return n > 0;
  }
  return markSourceLifecycle(projectId, sourceId, { revoked: true });
}

export async function deleteDerivedSource(
  projectId: string,
  sourceId: string,
): Promise<boolean> {
  if (derivedEmbeddingBackend() === "pg") {
    const n = await markDerivedChunkLifecyclePg({
      projectId,
      sourceId,
      deleted: true,
    });
    return n > 0;
  }
  return markSourceLifecycle(projectId, sourceId, { deleted: true });
}

export {
  searchDerivedIndex,
  derivedEmbeddingSearchEnabled,
  derivedEmbeddingBackend,
};
```

### `src/domains/knowledge/journal.ts` (42733 bytes, 1337 lines)
```ts
import { createHash } from "crypto";
import { and, desc, eq, inArray, isNull, ne, or, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversations,
  documentRevisions,
  documents,
  governanceRestrictions,
  humanDecisions,
  knowledgeAcquis,
  knowledgeDecisionExplanationRevisions,
  knowledgeOpenPointEvents,
  knowledgeOpenPoints,
  knowledgeSubjectEvents,
  knowledgeSubjectSummaryRevisions,
  knowledgeSubjects,
  messages,
  preparationProjectLinks,
  preparations,
  projects,
} from "@/db/schema";
import type { Provenance } from "@/domains/knowledge/service";
import {
  assertHonestSynthesisInput,
  detectAcquisContradictions,
  qualifyProvenanceSource,
  type ExtendedProvenance,
} from "@/domains/knowledge/journal-cognition";
import { extractSourcedMotivationFromMessage } from "@/domains/knowledge/journal-editorial";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";

function d6SourceKindToProvenanceKind(
  sourceKind: string,
): ExtendedProvenance["sourceKind"] | null {
  const k = sourceKind.trim().toUpperCase();
  if (k === "USER_MESSAGE" || k === "MESSAGE") return "message";
  if (k === "DOCUMENT" || k === "DOCUMENT_REVISION") return "document";
  if (k === "PILOT") return "pilot";
  if (k === "NORA" || k === "ASSISTANT_MESSAGE") return "nora";
  return null;
}

type Tx = {
  select: typeof db.select;
  insert: typeof db.insert;
  update: typeof db.update;
  execute: typeof db.execute;
};

function provenanceString(p: Provenance): string {
  return JSON.stringify({ ...p, notedAt: p.notedAt ?? new Date().toISOString() });
}

function decisionOfficialFingerprint(decision: {
  id: string;
  state: string;
  kind: string;
  statement: string;
  objectRef: string;
  scope: string;
  effectiveAt: Date;
}): string {
  return createHash("sha256")
    .update(
      JSON.stringify({
        id: decision.id,
        state: decision.state,
        kind: decision.kind,
        statement: decision.statement,
        objectRef: decision.objectRef,
        scope: decision.scope,
        effectiveAt: decision.effectiveAt.toISOString(),
      }),
    )
    .digest("hex");
}

async function assertOwnedProject(pilotId: string, projectId: string) {
  const project = (
    await db
      .select()
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");
  return project;
}

async function linkedPreparationIds(pilotId: string, projectId: string): Promise<string[]> {
  await assertOwnedProject(pilotId, projectId);
  const rows = await db
    .select({ preparationId: preparationProjectLinks.preparationId })
    .from(preparationProjectLinks)
    .innerJoin(preparations, eq(preparations.id, preparationProjectLinks.preparationId))
    .where(
      and(eq(preparationProjectLinks.projectId, projectId), eq(preparations.ownerPilotId, pilotId)),
    );
  return rows.map((r) => r.preparationId);
}

export type JournalSummary = {
  id: string;
  revisionNumber: number;
  summaryMarkdown: string;
  createdAt: Date;
  provenanceJson: string;
} | null;

export async function listProjectKnowledge(pilotId: string, projectId: string) {
  const prepIds = await linkedPreparationIds(pilotId, projectId);
  if (prepIds.length === 0) {
    return {
      preparationIds: [] as string[],
      subjects: [] as typeof knowledgeSubjects.$inferSelect[],
      acquis: [] as typeof knowledgeAcquis.$inferSelect[],
      openPoints: [] as typeof knowledgeOpenPoints.$inferSelect[],
      summariesBySubjectId: {} as Record<string, JournalSummary>,
    };
  }

  const scope = and(
    eq(knowledgeSubjects.ownerPilotId, pilotId),
    inArray(knowledgeSubjects.preparationId, prepIds),
    or(isNull(knowledgeSubjects.projectId), eq(knowledgeSubjects.projectId, projectId)),
    ne(knowledgeSubjects.status, "ARCHIVED"),
  );

  const subjects = await db.select().from(knowledgeSubjects).where(scope).orderBy(desc(knowledgeSubjects.updatedAt));

  const acquis = await db
    .select()
    .from(knowledgeAcquis)
    .where(
      and(
        eq(knowledgeAcquis.ownerPilotId, pilotId),
        inArray(knowledgeAcquis.preparationId, prepIds),
        or(isNull(knowledgeAcquis.projectId), eq(knowledgeAcquis.projectId, projectId)),
      ),
    )
    .orderBy(desc(knowledgeAcquis.createdAt));

  const openPoints = await db
    .select()
    .from(knowledgeOpenPoints)
    .where(
      and(
        eq(knowledgeOpenPoints.ownerPilotId, pilotId),
        inArray(knowledgeOpenPoints.preparationId, prepIds),
        or(isNull(knowledgeOpenPoints.projectId), eq(knowledgeOpenPoints.projectId, projectId)),
      ),
    )
    .orderBy(desc(knowledgeOpenPoints.createdAt));

  const summariesBySubjectId: Record<string, JournalSummary> = {};
  const subjectIds = subjects.map((s) => s.id);
  if (subjectIds.length > 0) {
    const revRows = await db
      .select()
      .from(knowledgeSubjectSummaryRevisions)
      .where(
        and(
          eq(knowledgeSubjectSummaryRevisions.ownerPilotId, pilotId),
          inArray(knowledgeSubjectSummaryRevisions.subjectId, subjectIds),
        ),
      )
      .orderBy(desc(knowledgeSubjectSummaryRevisions.revisionNumber));
    for (const row of revRows) {
      if (summariesBySubjectId[row.subjectId]) continue;
      summariesBySubjectId[row.subjectId] = {
        id: row.id,
        revisionNumber: row.revisionNumber,
        summaryMarkdown: row.summaryMarkdown,
        createdAt: row.createdAt,
        provenanceJson: row.provenanceJson,
      };
    }
    for (const id of subjectIds) {
      if (!(id in summariesBySubjectId)) summariesBySubjectId[id] = null;
    }
  }

  return { preparationIds: prepIds, subjects, acquis, openPoints, summariesBySubjectId };
}

async function loadOwnedSubjectForProject(
  pilotId: string,
  projectId: string,
  subjectId: string,
  tx: Tx = db,
) {
  const prepIds = await linkedPreparationIds(pilotId, projectId);
  if (prepIds.length === 0) return null;
  return (
    await tx
      .select()
      .from(knowledgeSubjects)
      .where(
        and(
          eq(knowledgeSubjects.id, subjectId),
          eq(knowledgeSubjects.ownerPilotId, pilotId),
          inArray(knowledgeSubjects.preparationId, prepIds),
          or(isNull(knowledgeSubjects.projectId), eq(knowledgeSubjects.projectId, projectId)),
        ),
      )
      .limit(1)
  )[0];
}

export async function getCurrentSubjectSummary(pilotId: string, projectId: string, subjectId: string) {
  const subject = await loadOwnedSubjectForProject(pilotId, projectId, subjectId);
  if (!subject) return { status: "NOT_FOUND" as const };
  const row = (
    await db
      .select()
      .from(knowledgeSubjectSummaryRevisions)
      .where(
        and(
          eq(knowledgeSubjectSummaryRevisions.subjectId, subjectId),
          eq(knowledgeSubjectSummaryRevisions.ownerPilotId, pilotId),
        ),
      )
      .orderBy(desc(knowledgeSubjectSummaryRevisions.revisionNumber))
      .limit(1)
  )[0];
  if (!row) {
    return { status: "AVAILABLE" as const, summary: null };
  }
  return {
    status: "AVAILABLE" as const,
    summary: {
      id: row.id,
      revisionNumber: row.revisionNumber,
      summaryMarkdown: row.summaryMarkdown,
      createdAt: row.createdAt,
      provenanceJson: row.provenanceJson,
    },
  };
}

export async function appendSubjectSummaryRevision(
  pilotId: string,
  projectId: string,
  subjectId: string,
  input: {
    summaryMarkdown: string;
    provenance: Provenance;
    operationId?: string;
    idempotencyKey?: string;
    expectedRevision?: number;
    sourceFingerprint?: string;
    /** Optional qualified sources already evaluated by D3/D4 (J-C06). */
    qualifiedSources?: Awaited<ReturnType<typeof qualifyProvenanceSource>>[];
    /** When true (default), refuse overclaiming established facts over unresolved contradictions. */
    enforceHonesty?: boolean;
  },
) {
  const markdown = input.summaryMarkdown.trim();
  if (!markdown || markdown.length < 12) {
    return { status: "SKIPPED" as const, reason: "summary too thin for durable revision" };
  }

  const subject = await loadOwnedSubjectForProject(pilotId, projectId, subjectId);
  if (!subject) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  if (subject.status !== "ACTIVE") return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };

  // No-op when exchange brings no significant durable change vs current synthesis.
  const currentSummary = await getCurrentSubjectSummary(pilotId, projectId, subjectId);
  if (
    currentSummary.status === "AVAILABLE" &&
    currentSummary.summary?.summaryMarkdown &&
    currentSummary.summary.summaryMarkdown.replace(/\s+/g, " ").trim().toLowerCase() ===
      markdown.replace(/\s+/g, " ").trim().toLowerCase()
  ) {
    return {
      status: "SKIPPED" as const,
      reason: "NO_SIGNIFICANT_CHANGE",
      revisionId: currentSummary.summary.id,
      revisionNumber: currentSummary.summary.revisionNumber,
    };
  }

  if (input.enforceHonesty !== false) {
    const acquisRows = await db
      .select({
        id: knowledgeAcquis.id,
        subjectId: knowledgeAcquis.subjectId,
        statement: knowledgeAcquis.statement,
        status: knowledgeAcquis.status,
        kind: knowledgeAcquis.kind,
      })
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.ownerPilotId, pilotId),
          eq(knowledgeAcquis.subjectId, subjectId),
          eq(knowledgeAcquis.status, "CURRENT"),
        ),
      );
    const contradictions = detectAcquisContradictions(acquisRows);
    const sources =
      input.qualifiedSources ??
      (await Promise.all([
        qualifyProvenanceSource(pilotId, input.provenance as ExtendedProvenance),
      ]));
    const honesty = assertHonestSynthesisInput({
      summaryMarkdown: markdown,
      contradictions,
      sources,
    });
    if (!honesty.ok) {
      return { status: "SKIPPED" as const, reason: honesty.reason };
    }
  }

  if (input.operationId) {
    const prior = (
      await db
        .select()
        .from(knowledgeSubjectSummaryRevisions)
        .where(
          and(
            eq(knowledgeSubjectSummaryRevisions.subjectId, subjectId),
            eq(knowledgeSubjectSummaryRevisions.operationId, input.operationId),
          ),
        )
        .limit(1)
    )[0];
    if (prior) {
      return {
        status: "AVAILABLE" as const,
        revisionId: prior.id,
        revisionNumber: prior.revisionNumber,
        idempotentReplay: true as const,
      };
    }
  }

  try {
    return await db.transaction(async (tx) => {
      await tx.execute(
        sql`select id from knowledge_subjects where id = ${subjectId} and owner_pilot_id = ${pilotId} for update`,
      );
      const current = (
        await tx
          .select({ revisionNumber: knowledgeSubjectSummaryRevisions.revisionNumber })
          .from(knowledgeSubjectSummaryRevisions)
          .where(eq(knowledgeSubjectSummaryRevisions.subjectId, subjectId))
          .orderBy(desc(knowledgeSubjectSummaryRevisions.revisionNumber))
          .limit(1)
      )[0];
      const nextRev = (current?.revisionNumber ?? 0) + 1;
      if (input.expectedRevision != null && input.expectedRevision !== (current?.revisionNumber ?? 0)) {
        return { status: "CONFLICT" as const, reason: "EXPECTED_REVISION_MISMATCH" };
      }
      const id = newId("ksr");
      await tx.insert(knowledgeSubjectSummaryRevisions).values({
        id,
        subjectId,
        preparationId: subject.preparationId,
        projectId,
        ownerPilotId: pilotId,
        revisionNumber: nextRev,
        summaryMarkdown: markdown,
        provenanceJson: provenanceString(input.provenance),
        operationId: input.operationId ?? null,
        idempotencyKey: input.idempotencyKey ?? null,
        expectedRevision: input.expectedRevision ?? null,
        sourceFingerprint: input.sourceFingerprint ?? null,
      });
      return { status: "AVAILABLE" as const, revisionId: id, revisionNumber: nextRev };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "summary revision failed",
    };
  }
}

async function loadOwnedDecision(pilotId: string, projectId: string, decisionId: string) {
  await assertOwnedProject(pilotId, projectId);
  return (
    await db
      .select()
      .from(humanDecisions)
      .where(and(eq(humanDecisions.id, decisionId), eq(humanDecisions.projectId, projectId)))
      .limit(1)
  )[0];
}

export async function getCurrentDecisionExplanation(
  pilotId: string,
  projectId: string,
  decisionId: string,
) {
  const decision = await loadOwnedDecision(pilotId, projectId, decisionId);
  if (!decision) return { status: "NOT_FOUND" as const };
  const fingerprint = decisionOfficialFingerprint(decision);
  const row = (
    await db
      .select()
      .from(knowledgeDecisionExplanationRevisions)
      .where(
        and(
          eq(knowledgeDecisionExplanationRevisions.decisionId, decisionId),
          eq(knowledgeDecisionExplanationRevisions.ownerPilotId, pilotId),
        ),
      )
      .orderBy(desc(knowledgeDecisionExplanationRevisions.revisionNumber))
      .limit(1)
  )[0];
  if (!row) {
    return { status: "AVAILABLE" as const, explanation: null, decisionState: decision.state };
  }
  return {
    status: "AVAILABLE" as const,
    decisionState: decision.state,
    explanation: {
      revisionNumber: row.revisionNumber,
      explanationMarkdown: row.explanationMarkdown,
      officialDecisionFingerprint: row.officialDecisionFingerprint,
      createdAt: row.createdAt,
      provenanceJson: row.provenanceJson,
      potentiallyStale: row.officialDecisionFingerprint !== fingerprint,
    },
  };
}

export async function appendDecisionExplanationRevision(
  pilotId: string,
  projectId: string,
  decisionId: string,
  input: {
    explanationMarkdown: string;
    provenance: Provenance;
    preparationId?: string | null;
    operationId?: string;
    idempotencyKey?: string;
    expectedRevision?: number;
  },
) {
  const markdown = input.explanationMarkdown.trim();
  if (!markdown || markdown.length < 12) {
    return { status: "SKIPPED" as const, reason: "explanation too thin for durable revision" };
  }
  const decision = await loadOwnedDecision(pilotId, projectId, decisionId);
  if (!decision) return { status: "FAILED" as const, reason: "NOT_FOUND" };

  if (input.operationId) {
    const prior = (
      await db
        .select()
        .from(knowledgeDecisionExplanationRevisions)
        .where(
          and(
            eq(knowledgeDecisionExplanationRevisions.decisionId, decisionId),
            eq(knowledgeDecisionExplanationRevisions.operationId, input.operationId),
          ),
        )
        .limit(1)
    )[0];
    if (prior) {
      return {
        status: "AVAILABLE" as const,
        revisionId: prior.id,
        revisionNumber: prior.revisionNumber,
        idempotentReplay: true as const,
      };
    }
  }

  const fingerprint = decisionOfficialFingerprint(decision);

  try {
    return await db.transaction(async (tx) => {
      const current = (
        await tx
          .select({ revisionNumber: knowledgeDecisionExplanationRevisions.revisionNumber })
          .from(knowledgeDecisionExplanationRevisions)
          .where(eq(knowledgeDecisionExplanationRevisions.decisionId, decisionId))
          .orderBy(desc(knowledgeDecisionExplanationRevisions.revisionNumber))
          .limit(1)
      )[0];
      const nextRev = (current?.revisionNumber ?? 0) + 1;
      if (input.expectedRevision != null && input.expectedRevision !== (current?.revisionNumber ?? 0)) {
        return { status: "CONFLICT" as const, reason: "EXPECTED_REVISION_MISMATCH" };
      }
      const id = newId("der");
      await tx.insert(knowledgeDecisionExplanationRevisions).values({
        id,
        decisionId,
        preparationId: input.preparationId ?? null,
        projectId,
        ownerPilotId: pilotId,
        revisionNumber: nextRev,
        officialDecisionFingerprint: fingerprint,
        explanationMarkdown: markdown,
        provenanceJson: provenanceString(input.provenance),
        operationId: input.operationId ?? null,
        idempotencyKey: input.idempotencyKey ?? null,
        expectedRevision: input.expectedRevision ?? null,
      });
      return { status: "AVAILABLE" as const, revisionId: id, revisionNumber: nextRev };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "explanation revision failed",
    };
  }
}

/** E06-05 — open point must belong to a preparation linked to the requested project. */
export async function loadOwnedOpenPoint(
  pilotId: string,
  projectId: string,
  openPointId: string,
  tx: Tx = db,
) {
  const prepIds = await linkedPreparationIds(pilotId, projectId);
  if (prepIds.length === 0) return null;
  return (
    await tx
      .select()
      .from(knowledgeOpenPoints)
      .where(
        and(
          eq(knowledgeOpenPoints.id, openPointId),
          eq(knowledgeOpenPoints.ownerPilotId, pilotId),
          inArray(knowledgeOpenPoints.preparationId, prepIds),
        ),
      )
      .limit(1)
  )[0];
}

function provenanceSufficient(p: Provenance): boolean {
  if (p.sourceKind === "pilot" || p.sourceKind === "nora") return Boolean(p.sourceId || p.generationId);
  if (p.sourceKind === "document" || p.sourceKind === "revision" || p.sourceKind === "message") {
    return Boolean(p.sourceId);
  }
  return false;
}

/**
 * E06-06 — factual resolve requires a revalidated source, not an invented id string.
 * Document/revision/message must exist in the project scope for the Pilote.
 */
async function provenanceFactuallyVerified(
  pilotId: string,
  projectId: string,
  p: Provenance,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  if (!provenanceSufficient(p)) {
    return { ok: false, reason: "INSUFFICIENT_PROVENANCE" };
  }
  if (p.sourceKind === "pilot" || p.sourceKind === "nora") {
    return { ok: false, reason: "ACTOR_DECLARATION_NOT_FACTUAL_SOURCE" };
  }
  const prepIds = await linkedPreparationIds(pilotId, projectId);
  if (prepIds.length === 0) return { ok: false, reason: "NO_PROJECT_SCOPE" };

  if (p.sourceKind === "message" && p.sourceId) {
    const msg = (
      await db
        .select({ id: messages.id })
        .from(messages)
        .innerJoin(conversations, eq(conversations.id, messages.conversationId))
        .where(
          and(
            eq(messages.id, p.sourceId),
            eq(conversations.ownerPilotId, pilotId),
            inArray(conversations.preparationId, prepIds),
          ),
        )
        .limit(1)
    )[0];
    if (!msg) return { ok: false, reason: "MESSAGE_SOURCE_INACCESSIBLE" };
    return { ok: true };
  }

  if (p.sourceKind === "document" || p.sourceKind === "revision") {
    const sourceId = p.sourceId;
    if (!sourceId) return { ok: false, reason: "INSUFFICIENT_PROVENANCE" };
    const rev = (
      await db
        .select({
          id: documentRevisions.id,
          status: documentRevisions.status,
        })
        .from(documentRevisions)
        .innerJoin(documents, eq(documents.id, documentRevisions.documentId))
        .where(
          and(
            eq(documentRevisions.id, sourceId),
            eq(documents.ownerPilotId, pilotId),
            inArray(documents.preparationId, prepIds),
          ),
        )
        .limit(1)
    )[0];
    if (rev) {
      if (rev.status !== "AVAILABLE") {
        return { ok: false, reason: "DOCUMENT_REVISION_NOT_AVAILABLE" };
      }
      return { ok: true };
    }
    const doc = (
      await db
        .select({ id: documents.id })
        .from(documents)
        .where(
          and(
            eq(documents.id, sourceId),
            eq(documents.ownerPilotId, pilotId),
            inArray(documents.preparationId, prepIds),
          ),
        )
        .limit(1)
    )[0];
    if (!doc) return { ok: false, reason: "DOCUMENT_SOURCE_INACCESSIBLE" };
    return { ok: true };
  }

  return { ok: false, reason: "UNSUPPORTED_PROVENANCE_KIND" };
}

export async function resolveOpenPointFactually(
  pilotId: string,
  projectId: string,
  openPointId: string,
  input: { reason: string; provenance: Provenance; operationId?: string; actorKind?: string },
) {
  const verified = await provenanceFactuallyVerified(pilotId, projectId, input.provenance);
  if (!verified.ok) {
    return { status: "FAILED" as const, reason: verified.reason };
  }
  const point = await loadOwnedOpenPoint(pilotId, projectId, openPointId);
  if (!point) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  if (point.status === "RESOLVED") {
    return { status: "AVAILABLE" as const, openPointId, alreadyResolved: true as const };
  }

  // J-C05 — factual D4 resolve never mutates D6 restrictions. Snapshot ACTIVE count for callers/tests.
  const activeRestrictionsBefore = await db
    .select({ id: governanceRestrictions.id })
    .from(governanceRestrictions)
    .where(
      and(
        eq(governanceRestrictions.projectId, projectId),
        eq(governanceRestrictions.status, "ACTIVE"),
      ),
    );

  if (input.operationId) {
    const prior = (
      await db
        .select()
        .from(knowledgeOpenPointEvents)
        .where(
          and(
            eq(knowledgeOpenPointEvents.openPointId, openPointId),
            eq(knowledgeOpenPointEvents.operationId, input.operationId),
          ),
        )
        .limit(1)
    )[0];
    if (prior) {
      return { status: "AVAILABLE" as const, openPointId, eventId: prior.id, idempotentReplay: true as const };
    }
  }

  try {
    return await db.transaction(async (tx) => {
      await tx.execute(
        sql`select id from knowledge_open_points where id = ${openPointId} and owner_pilot_id = ${pilotId} for update`,
      );
      const eventId = newId("ope");
      await tx
        .update(knowledgeOpenPoints)
        .set({ status: "RESOLVED", updatedAt: new Date() })
        .where(eq(knowledgeOpenPoints.id, openPointId));
      await tx.insert(knowledgeOpenPointEvents).values({
        id: eventId,
        openPointId,
        preparationId: point.preparationId,
        projectId,
        ownerPilotId: pilotId,
        eventType: "RESOLVED",
        reason: input.reason.trim().slice(0, 500),
        actorKind: input.actorKind ?? "pilot",
        provenanceJson: provenanceString(input.provenance),
        operationId: input.operationId ?? null,
      });
      const activeRestrictionsAfter = await tx
        .select({ id: governanceRestrictions.id })
        .from(governanceRestrictions)
        .where(
          and(
            eq(governanceRestrictions.projectId, projectId),
            eq(governanceRestrictions.status, "ACTIVE"),
          ),
        );
      if (activeRestrictionsAfter.length !== activeRestrictionsBefore.length) {
        throw new Error("D6_RESTRICTION_MUTATION_FORBIDDEN");
      }
      return {
        status: "AVAILABLE" as const,
        openPointId,
        eventId,
        activeRestrictionIds: activeRestrictionsAfter.map((r) => r.id),
      };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "resolve failed",
    };
  }
}

export async function reopenOpenPoint(
  pilotId: string,
  projectId: string,
  openPointId: string,
  input: { reason: string; provenance: Provenance; operationId?: string; actorKind?: string },
) {
  const point = await loadOwnedOpenPoint(pilotId, projectId, openPointId);
  if (!point) return { status: "FAILED" as const, reason: "NOT_FOUND" };

  if (input.operationId) {
    const prior = (
      await db
        .select()
        .from(knowledgeOpenPointEvents)
        .where(
          and(
            eq(knowledgeOpenPointEvents.openPointId, openPointId),
            eq(knowledgeOpenPointEvents.operationId, input.operationId),
          ),
        )
        .limit(1)
    )[0];
    if (prior) {
      return { status: "AVAILABLE" as const, openPointId, eventId: prior.id, idempotentReplay: true as const };
    }
  }

  try {
    return await db.transaction(async (tx) => {
      await tx.execute(
        sql`select id from knowledge_open_points where id = ${openPointId} and owner_pilot_id = ${pilotId} for update`,
      );
      const eventId = newId("ope");
      await tx
        .update(knowledgeOpenPoints)
        .set({ status: "OPEN", updatedAt: new Date() })
        .where(eq(knowledgeOpenPoints.id, openPointId));
      await tx.insert(knowledgeOpenPointEvents).values({
        id: eventId,
        openPointId,
        preparationId: point.preparationId,
        projectId,
        ownerPilotId: pilotId,
        eventType: "REOPENED",
        reason: input.reason.trim().slice(0, 500),
        actorKind: input.actorKind ?? "pilot",
        provenanceJson: provenanceString(input.provenance),
        operationId: input.operationId ?? null,
      });
      return { status: "AVAILABLE" as const, openPointId, eventId };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "reopen failed",
    };
  }
}

async function wouldCreateCycle(
  pilotId: string,
  projectId: string,
  subjectId: string,
  newParentId: string,
): Promise<boolean> {
  if (newParentId === subjectId) return true;
  let current: string | null = newParentId;
  const visited = new Set<string>();
  while (current) {
    if (current === subjectId) return true;
    if (visited.has(current)) return true;
    visited.add(current);
    const row = await loadOwnedSubjectForProject(pilotId, projectId, current);
    if (!row) return true;
    current = row.parentSubjectId;
  }
  return false;
}

export async function reparentSubject(
  pilotId: string,
  projectId: string,
  subjectId: string,
  newParentSubjectId: string | null,
) {
  const subject = await loadOwnedSubjectForProject(pilotId, projectId, subjectId);
  if (!subject) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  if (subject.status !== "ACTIVE") return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };

  if (newParentSubjectId) {
    const parent = await loadOwnedSubjectForProject(pilotId, projectId, newParentSubjectId);
    if (!parent) return { status: "FAILED" as const, reason: "PARENT_NOT_FOUND" };
    if (parent.preparationId !== subject.preparationId) {
      return { status: "FAILED" as const, reason: "CROSS_PREPARATION_PARENT" };
    }
    if (parent.status !== "ACTIVE") return { status: "FAILED" as const, reason: "PARENT_NOT_ACTIVE" };
    if (await wouldCreateCycle(pilotId, projectId, subjectId, newParentSubjectId)) {
      return { status: "FAILED" as const, reason: "CYCLE_OR_INVALID_TREE" };
    }
  }

  try {
    return await db.transaction(async (tx) => {
      await tx.execute(
        sql`select id from knowledge_subjects where id = ${subjectId} and owner_pilot_id = ${pilotId} for update`,
      );
      await tx
        .update(knowledgeSubjects)
        .set({ parentSubjectId: newParentSubjectId, updatedAt: new Date() })
        .where(eq(knowledgeSubjects.id, subjectId));
      await tx.insert(knowledgeSubjectEvents).values({
        id: newId("sev"),
        preparationId: subject.preparationId,
        ownerPilotId: pilotId,
        subjectId,
        eventType: "REPARENTED",
        payloadJson: JSON.stringify({
          from: subject.parentSubjectId,
          to: newParentSubjectId,
        }),
      });
      return { status: "AVAILABLE" as const, subjectId, parentSubjectId: newParentSubjectId };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "reparent failed",
    };
  }
}

function subjectPathTitles(
  subjectId: string,
  byId: Map<string, { id: string; title: string; parentSubjectId: string | null }>,
): string[] {
  const path: string[] = [];
  let current: string | null = subjectId;
  const guard = new Set<string>();
  while (current && !guard.has(current)) {
    guard.add(current);
    const row = byId.get(current);
    if (!row) break;
    path.unshift(row.title);
    current = row.parentSubjectId;
  }
  return path;
}

export async function searchJournalSubjects(
  pilotId: string,
  projectId: string,
  query: string,
  opts?: {
    openPointsOnly?: boolean;
    limit?: number;
    /** Optional query embedding for ML2 hybrid E (flag SFIA_DERIVED_EMBEDDING_SEARCH=1). */
    queryVector?: number[] | null;
  },
) {
  const q = query.trim().toLowerCase();
  const limit = opts?.limit ?? 24;
  const bundle = await listProjectKnowledge(pilotId, projectId);
  if (!q && !opts?.openPointsOnly) {
    return { status: "AVAILABLE" as const, results: [], coverage: "EMPTY_QUERY" as const };
  }

  const byId = new Map(
    bundle.subjects.map((s) => [
      s.id,
      { id: s.id, title: s.title, parentSubjectId: s.parentSubjectId },
    ]),
  );

  type Hit = {
    subjectId: string;
    title: string;
    path: string[];
    matchKind: "title" | "acquis" | "open_point" | "summary";
    snippet: string;
    openPointId?: string;
  };
  const hits: Hit[] = [];

  const seen = new Set<string>();

  const pushHit = (hit: Hit) => {
    const key = `${hit.subjectId}:${hit.matchKind}:${hit.openPointId ?? hit.snippet.slice(0, 40)}`;
    if (seen.has(key)) return;
    seen.add(key);
    hits.push(hit);
  };

  for (const s of bundle.subjects) {
    if (opts?.openPointsOnly) {
      const openForSubject = bundle.openPoints.filter(
        (o) => o.subjectId === s.id && o.status === "OPEN",
      );
      if (openForSubject.length === 0) continue;
      for (const o of openForSubject) {
        if (q && !o.statement.toLowerCase().includes(q) && !s.title.toLowerCase().includes(q)) continue;
        pushHit({
          subjectId: s.id,
          title: s.title,
          path: subjectPathTitles(s.id, byId),
          matchKind: "open_point",
          snippet: o.statement.slice(0, 280),
          openPointId: o.id,
        });
      }
      continue;
    }
    if (q && s.title.toLowerCase().includes(q)) {
      pushHit({
        subjectId: s.id,
        title: s.title,
        path: subjectPathTitles(s.id, byId),
        matchKind: "title",
        snippet: s.title,
      });
    }
    const summary = bundle.summariesBySubjectId[s.id];
    if (q && summary?.summaryMarkdown.toLowerCase().includes(q)) {
      pushHit({
        subjectId: s.id,
        title: s.title,
        path: subjectPathTitles(s.id, byId),
        matchKind: "summary",
        snippet: summary.summaryMarkdown.slice(0, 280),
      });
    }
    for (const a of bundle.acquis) {
      if (a.subjectId !== s.id || a.status !== "CURRENT") continue;
      if (!q || !a.statement.toLowerCase().includes(q)) continue;
      pushHit({
        subjectId: s.id,
        title: s.title,
        path: subjectPathTitles(s.id, byId),
        matchKind: "acquis",
        snippet: a.statement.slice(0, 280),
      });
    }
    for (const o of bundle.openPoints) {
      if (o.subjectId !== s.id || o.status !== "OPEN") continue;
      if (!q || !o.statement.toLowerCase().includes(q)) continue;
      pushHit({
        subjectId: s.id,
        title: s.title,
        path: subjectPathTitles(s.id, byId),
        matchKind: "open_point",
        snippet: o.statement.slice(0, 280),
        openPointId: o.id,
      });
    }
  }

  const lexicalResults = hits.slice(0, limit);

  // ML2 E: hybrid via product service (PG semanticHits + rights/fp). Never bare
  // mergeLexicalAndDerived({ queryVector }) — that yields SEMANTIC_HITS_REQUIRED_FOR_PG.
  if (opts?.queryVector && opts.queryVector.length > 0) {
    const { hybridSearchProjectKnowledge } = await import(
      "@/domains/knowledge/derived-embedding-service"
    );
    const lexical = lexicalResults.map((h) => ({
      sourceId: h.subjectId,
      title: h.title,
      snippet: h.snippet,
      matchKind: h.matchKind,
      channel: "lexical" as const,
    }));
    // Client stub: reuse precomputed queryVector — avoid a second embeddings HTTP.
    const stubClient = {
      embeddings: {
        create: async () => ({
          data: [{ embedding: opts.queryVector as number[] }],
          usage: { total_tokens: 0 },
        }),
      },
    };
    const merged = await hybridSearchProjectKnowledge({
      pilotId,
      projectId,
      query,
      lexical,
      limit,
      client: stubClient,
      openPointsOnly: opts.openPointsOnly,
    });
    return {
      status: "AVAILABLE" as const,
      results: merged.hits.map((h) => ({
        subjectId: h.sourceId,
        title: h.title ?? h.sourceId,
        path: subjectPathTitles(h.sourceId, byId),
        matchKind: (h.matchKind as Hit["matchKind"]) ?? "acquis",
        snippet: h.snippet,
        channel: h.channel,
        score: h.score,
        indexRef: h.indexRef,
      })),
      coverage:
        merged.hits.length === 0 ? ("NONE" as const) : ("PARTIAL" as const),
      derivedUsed: merged.derivedUsed,
      derivedSkippedReason: merged.derivedSkippedReason,
      rightsRevalidated: merged.rightsRevalidated,
    };
  }

  return {
    status: "AVAILABLE" as const,
    results: lexicalResults,
    coverage: hits.length === 0 ? ("NONE" as const) : ("PARTIAL" as const),
  };
}

export async function searchJournalDecisions(
  pilotId: string,
  projectId: string,
  query: string,
  opts?: { limit?: number },
) {
  const q = query.trim().toLowerCase();
  const limit = opts?.limit ?? 24;
  if (!q) {
    return { status: "AVAILABLE" as const, results: [], coverage: "EMPTY_QUERY" as const };
  }

  await assertOwnedProject(pilotId, projectId);
  const decisions = await db
    .select()
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId))
    .orderBy(desc(humanDecisions.createdAt));

  type Row = {
    decisionId: string;
    kind: string;
    state: string;
    statement: string;
    matchKind: "statement" | "explanation";
    snippet: string;
    explanationStale?: boolean;
  };
  const results: Row[] = [];

  for (const d of decisions) {
    if (d.statement.toLowerCase().includes(q)) {
      results.push({
        decisionId: d.id,
        kind: d.kind,
        state: d.state,
        statement: d.statement,
        matchKind: "statement",
        snippet: d.statement.slice(0, 280),
      });
    }
    const expl = await getCurrentDecisionExplanation(pilotId, projectId, d.id);
    if (
      expl.status === "AVAILABLE" &&
      expl.explanation?.explanationMarkdown.toLowerCase().includes(q)
    ) {
      results.push({
        decisionId: d.id,
        kind: d.kind,
        state: d.state,
        statement: d.statement,
        matchKind: "explanation",
        snippet: expl.explanation.explanationMarkdown.slice(0, 280),
        explanationStale: expl.explanation.potentiallyStale,
      });
    }
    if (results.length >= limit) break;
  }

  return {
    status: "AVAILABLE" as const,
    results: results.slice(0, limit),
    coverage: results.length === 0 ? ("NONE" as const) : ("PARTIAL" as const),
  };
}

export async function getJournalProjection(pilotId: string, projectId: string) {
  const knowledge = await listProjectKnowledge(pilotId, projectId);
  const decisionRows = await db
    .select({
      id: humanDecisions.id,
      kind: humanDecisions.kind,
      state: humanDecisions.state,
      scope: humanDecisions.scope,
      statement: humanDecisions.statement,
      objectRef: humanDecisions.objectRef,
      sourceKind: humanDecisions.sourceKind,
      sourceRef: humanDecisions.sourceRef,
      supersedesDecisionId: humanDecisions.supersedesDecisionId,
      effectiveAt: humanDecisions.effectiveAt,
      createdAt: humanDecisions.createdAt,
    })
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId))
    .orderBy(desc(humanDecisions.createdAt));

  const supersededBy = new Map<string, string>();
  for (const d of decisionRows) {
    if (d.supersedesDecisionId) {
      supersededBy.set(d.supersedesDecisionId, d.id);
    }
  }

  const decisions = [];
  for (const d of decisionRows) {
    const expl = await getCurrentDecisionExplanation(pilotId, projectId, d.id);
    const applicable = d.state === "APPLICABLE" && !supersededBy.has(d.id);
    const originSources: Array<{
      ownerKind: "decision";
      ownerId: string;
      subjectId: string | null;
      sourceKind: string;
      sourceId?: string;
      documentId?: string;
      revisionId?: string;
      currentness: string;
      detail: string;
      authorLabel?: string;
      occurredAt?: string;
      excerpt?: string;
      contributionKind?: string;
    }> = [];
    let sourcedMotivationExcerpt: string | null = null;
    const provKind = d6SourceKindToProvenanceKind(d.sourceKind);
    if (provKind && d.sourceRef?.trim()) {
      const q = await qualifyProvenanceSource(pilotId, {
        sourceKind: provKind,
        sourceId: d.sourceRef.trim(),
        contributionKind: provKind === "nora" ? "nora_analysis" : "pilot_confirmation",
      });
      originSources.push({
        ownerKind: "decision",
        ownerId: d.id,
        subjectId: null,
        sourceKind: q.sourceKind,
        sourceId: q.sourceId,
        documentId: q.documentId,
        revisionId: q.revisionId,
        currentness: q.currentness,
        detail: q.detail,
        authorLabel: q.authorLabel,
        occurredAt: q.occurredAt,
        excerpt: q.excerpt,
        contributionKind: q.contributionKind,
      });
      if (provKind === "message" && q.currentness !== "INACCESSIBLE") {
        const msgRow = (
          await db
            .select({ content: messages.content })
            .from(messages)
            .innerJoin(conversations, eq(conversations.id, messages.conversationId))
            .where(
              and(eq(messages.id, d.sourceRef.trim()), eq(conversations.ownerPilotId, pilotId)),
            )
            .limit(1)
        )[0];
        if (msgRow?.content) {
          sourcedMotivationExcerpt = extractSourcedMotivationFromMessage(String(msgRow.content));
        }
      }
    }
    decisions.push({
      ...d,
      applicable,
      supersededByDecisionId: supersededBy.get(d.id) ?? null,
      explanation:
        expl.status === "AVAILABLE" && expl.explanation
          ? {
              revisionNumber: expl.explanation.revisionNumber,
              explanationMarkdown: expl.explanation.explanationMarkdown,
              potentiallyStale: expl.explanation.potentiallyStale,
            }
          : null,
      originSources,
      sourcedMotivationExcerpt,
    });
  }

  const restrictions = await db
    .select({
      id: governanceRestrictions.id,
      targetKind: governanceRestrictions.targetKind,
      targetRef: governanceRestrictions.targetRef,
      status: governanceRestrictions.status,
      originDecisionId: governanceRestrictions.originDecisionId,
    })
    .from(governanceRestrictions)
    .where(eq(governanceRestrictions.projectId, projectId));

  const contradictions = detectAcquisContradictions(
    knowledge.acquis.map((a) => ({
      id: a.id,
      subjectId: a.subjectId,
      statement: a.statement,
      status: a.status,
      kind: a.kind,
    })),
  );

  const sourceLinks: Array<{
    ownerKind: "acquis" | "open_point" | "summary";
    ownerId: string;
    subjectId: string | null;
    sourceKind: string;
    sourceId?: string;
    documentId?: string;
    revisionId?: string;
    currentness: string;
    detail: string;
    authorLabel?: string;
    occurredAt?: string;
    excerpt?: string;
    contributionKind?: string;
  }> = [];

  const seenSourceKeys = new Set<string>();
  const pushLink = (link: (typeof sourceLinks)[number]) => {
    const key = `${link.sourceKind}:${link.sourceId ?? link.documentId ?? link.revisionId ?? link.ownerId}`;
    if (seenSourceKeys.has(key)) return;
    seenSourceKeys.add(key);
    sourceLinks.push(link);
  };

  async function pushProvenanceLinks(
    ownerKind: "acquis" | "open_point" | "summary",
    ownerId: string,
    subjectId: string | null,
    provenanceJson: string,
  ) {
    try {
      const prov = JSON.parse(provenanceJson) as ExtendedProvenance;
      const q = await qualifyProvenanceSource(pilotId, prov);
      pushLink({
        ownerKind,
        ownerId,
        subjectId,
        sourceKind: q.sourceKind,
        sourceId: q.sourceId,
        documentId: q.documentId,
        revisionId: q.revisionId,
        currentness: q.currentness,
        detail: q.detail,
        authorLabel: q.authorLabel,
        occurredAt: q.occurredAt,
        excerpt: q.excerpt,
        contributionKind: q.contributionKind,
      });
      for (const relatedId of prov.relatedMessageIds ?? []) {
        if (!relatedId || relatedId === prov.sourceId) continue;
        const rq = await qualifyProvenanceSource(pilotId, {
          ...prov,
          sourceKind: "message",
          sourceId: relatedId,
          contributionKind:
            q.contributionKind === "nora_analysis" ? "pilot_fact" : "nora_analysis",
        });
        pushLink({
          ownerKind,
          ownerId,
          subjectId,
          sourceKind: rq.sourceKind,
          sourceId: rq.sourceId,
          documentId: rq.documentId,
          revisionId: rq.revisionId,
          currentness: rq.currentness,
          detail: rq.detail,
          authorLabel: rq.authorLabel,
          occurredAt: rq.occurredAt,
          excerpt: rq.excerpt,
          contributionKind: rq.contributionKind,
        });
      }
    } catch {
      /* provenance JSON corrupt — omit rather than invent */
    }
  }

  for (const a of knowledge.acquis) {
    if (a.status !== "CURRENT") continue;
    await pushProvenanceLinks("acquis", a.id, a.subjectId, a.provenanceJson);
  }
  for (const o of knowledge.openPoints) {
    if (o.status !== "OPEN") continue;
    await pushProvenanceLinks("open_point", o.id, o.subjectId, o.provenanceJson);
  }
  for (const s of knowledge.subjects) {
    const summary = knowledge.summariesBySubjectId[s.id];
    if (!summary?.provenanceJson) continue;
    await pushProvenanceLinks("summary", summary.id, s.id, summary.provenanceJson);
  }

  return {
    knowledge: {
      ...knowledge,
      acquis: knowledge.acquis.map((a) => ({
        ...a,
        provenanceJson: a.provenanceJson,
      })),
      openPoints: knowledge.openPoints.map((o) => ({
        ...o,
        provenanceJson: o.provenanceJson,
      })),
    },
    decisions,
    restrictions,
    contradictions,
    sourceLinks,
  };
}
```

### `src/domains/conversation/provider-emission-frontier.ts`
- size: 84790 bytes · lines ≈ 2542
- reason: large frontier module — critical modified sections below
### Excerpt `OUTPUT_RESERVE`
```ts
Output reservation ceiling applies to Responses generations only.
  // Embeddings / decisions / files / VS have no meaningful output-token wire
  // ceiling — applying maxOutputTokensPerRequest here inflated campaign
  // committed tokens (FINAL LIVE +40 960 on 5 non-measured commits).
  if (!isResponsesGeneration) {
    reservedOutput = reservedOutput ?? 0;
  } else if (
    reservedOutput == null &&
    (campaign.maxOutputTokens != null ||
      campaign.maxOutputTokensPerRequest != null)
  ) {
    if (campaign.maxOutputTokensPerRequest != null) {
      reservedOutput = campaign.maxOutputTokensPerRequest;
    } else {
      return {
        ok: false,
        reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
        reason:
          "OUTPUT_UNBOUNDED — campaign output limit set but no per-request ceiling or max_output_tokens",
      };
    }
  }

  const inTok = reservedInput
```

### Excerpt `MEASURED_COMMIT`
```ts
let measuredInputTokens: number | null = null;
      let measuredOutputTokens: number | null = null;
      if (res.ok && isResponsesCreateUrl(url)) {
        const ct = (res.headers.get("content-type") ?? "").toLowerCase();
        const isEventStream =
          ct.includes("text/event-stream") || ct.includes("application/x-ndjson");
        if (isEventStream) {
          // Do not consume an unbounded SSE body for observability.
          hostedLimits = ["STREAM_USAGE_UNKNOWN"];
          hostedStatus = "UNKNOWN";
          if (campaign) {
            campaign.hostedSearchMeasureStatus = mergeHostedSearchMeasureStatus(
              campaign.hostedSearchMeasureStatus,
              "UNKNOWN",
            );
            campaign.hostedSearchMeasureLimits = [
              ...new Set([
                ...campaign.hostedSearchMeasureLimits,
                "STREAM_USAGE_UNKNOWN",
              ]),
            ];
          }
        } else {
          try {
            const parsed = (await res.clone().json()) as unknown;
            const native = extractResponseNativeUsage(parsed);
            responseId = native.responseId;
            measuredInputTokens = native.inputTokens;
            measuredOutputTokens = native.outputTokens;
            const reconciled = reconcileHostedSearchUsage({
              reservedMaxToolCalls: hostedSearchDelta,
              observed: native.hostedWebSearch,
              alreadyCommitted: campaign?.hostedSearchesCommitted ?? 0,
              maxHostedSearches: campaign?.maxHostedSearches ?? null,
            });
            measuredHostedDelta = reconciled.commitDelta;
            hostedStatus = reconciled.status;
            hostedLimits = reconciled.limits;
            if (campaign) {
              // Aggregate status must not promote UNKNOWN→MEASURED when prior
              // attempts remain unknown. Mixed history ⇒ PARTIAL.
              campaign.hostedSearchMeasureStatus = mergeHostedSearchMeasureStatus(
                campaign.hostedSearchMeasureStatus,
                reconciled.status === "MEASURED" ? "MEASURED" : "UNKNOWN",
              );
              campaign.hostedSearchMeasureLimits = [
                ...new Set([
                  ...campaign.hostedSearchMeasureLimits,
                  ...reconciled.limits,
                ]),
              ];
              if (
                reconciled.status === "MEASURED" &&
                reconciled.measured != null
              ) {
                campaign.hostedSearchesMeasured =
                  (campaign.hostedSearchesMeasured ?? 0) + reconciled.measured;
              }
              if (reconciled.suspend) {
                campaign.suspended = true;
                campaign.suspendReason =
                  reconciled.suspendReason ??
                  "CAMPAIGN_HOSTED_SEARCHES_EXHAUSTED";
              }
            }
          } catch {
            hostedLimits = ["RESPONSE_BODY_PARSE_FAILED"];
            hostedStatus = "UNKNOWN";
            if (campaign) {
              campaign.hostedSearchMeasureStatus = mergeHostedSearchMeasureStatus(
                campaign.hostedSearchMeasureStatus,
                "UNKNOWN",
              );
              campaign.hostedSearchMeasureLimits = [
                ...new Set([
                  ...campaign.hostedSearchMeasureLimits,
                  "RESPONSE_BODY_PARSE_FAILED",
                ]),
              ];
            }
          }
        }
      } else if (res.ok) {
        // Non-Responses families (embeddings/decisions/files/VS): parse usage when present.
        try {
          const parsed = (await res.clone().json()) as unknown;
          const native = extractResponseNativeUsage(parsed);
          if (native.inputTokens != null) measuredInputTokens = native.inputTokens;
          if (native.outputTokens != null) measuredOutputTokens = native.outputTokens;
          // Embeddings often expose usage.total_tokens only.
          if (
            measuredInputTokens == null &&
            typeof (parsed as { usage?: { total_tokens?: number } })?.usage
              ?.total_tokens === "number"
          ) {
            measuredInputTokens = Math.max(
              0,
              Math.floor(
                (parsed as { usage: { total_tokens: number } }).usage
                  .total_tokens,
              ),
            );
            measuredOutputTokens = 0;
          }
        } catch {
          /* measured stays null → commit falls back to reserved */
        }
      }
      // Envelope pressure: max_tool_calls bound is consumed even when billable
      // num_requests is UNKNOWN — never claim ASSUMED_1 as a billable guarantee.
      // FinOps billable figure lives in hostedSearchesMeasured when MEASURED.
      const envelopeHostedDelta =
        hostedStatus === "MEASURED"
          ? measuredHostedDelta
          : hostedSearchDelta > 0
            ? hostedSearchDelta
            : 0;
      commitProviderEmission({
        attemptId: reservation.attemptId,
        reservedSlots: reservation.reservedSlots,
        reservedInputTokens: reservation.reservedInputTokens,
        reservedOutputTokens: reservation.reservedOutputTokens,
        measuredInputTokens,
        measuredOutputTokens,
        hostedSearchDelta: envelopeHostedDelta,
```


### `src/domains/conversation/bounded-judgment.ts` (16553 bytes, 570 lines)
```ts
/**
 * ML2 ADAPT — OpenAI Decisions for bounded judgments (predicate/choice/score).
 * NOT HumanDecision D6. Explicit uncertainty + Responses fallback when
 * Decisions abstains / confidence is out of band / API unavailable / invalid.
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

/**
 * p≈0 is NOT sufficient proof the proposition is false (may be AMB/INS collapse).
 * Callers must not treat value=false at p=0 as authoritative without fallback.
 */
export function isOverconfidentFalseAtZero(result: {
  kind: BoundedJudgmentKind;
  value: unknown;
  probability: number | null;
}): boolean {
  if (result.kind !== "predicate") return false;
  if (result.value !== false) return false;
  return result.probability === 0 || result.probability == null;
}

export function shouldFallbackToResponses(result: {
  uncertain: boolean;
  abstain: boolean;
  probability: number | null;
  value: unknown;
  kind?: BoundedJudgmentKind;
  reason?: string | null;
}): boolean {
  if (result.abstain) return true;
  if (result.value == null && result.probability == null) return true;
  if (result.uncertain) return true;
  if (result.reason?.startsWith("INVALID_")) return true;
  if (
    result.kind === "predicate" &&
    isOverconfidentFalseAtZero({
      kind: "predicate",
      value: result.value,
      probability: result.probability,
    })
  ) {
    return true;
  }
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

function parseStrictBoolean(raw: unknown): boolean | null {
  if (typeof raw === "boolean") return raw;
  // Never Boolean("false") === true
  if (typeof raw === "string") {
    const t = raw.trim().toLowerCase();
    if (t === "true" || t === "yes" || t === "1") return true;
    if (t === "false" || t === "no" || t === "0") return false;
    return null;
  }
  if (typeof raw === "number" && Number.isFinite(raw)) {
    if (raw === 1) return true;
    if (raw === 0) return false;
  }
  return null;
}

export function validateDecisionsAnswer(input: {
  kind: BoundedJudgmentKind;
  answer: {
    type: string;
    probability?: number;
    choice?: string;
    score?: number;
  } | null | undefined;
  choices?: string[];
  levels?: string[];
}): {
  ok: boolean;
  value: boolean | string | number | null;
  probability: number | null;
  reason: string | null;
} {
  const a = input.answer;
  if (!a) {
    return {
      ok: false,
      value: null,
      probability: null,
      reason: "INVALID_MISSING_ANSWER",
    };
  }
  if (a.type !== input.kind) {
    return {
      ok: false,
      value: null,
      probability: null,
      reason: `INVALID_TYPE_MISMATCH:${a.type}`,
    };
  }
  if (input.kind === "predicate") {
    const probability =
      typeof a.probability === "number" && Number.isFinite(a.probability)
        ? a.probability
        : null;
    if (probability == null || probability < 0 || probability > 1) {
      return {
        ok: false,
        value: null,
        probability: null,
        reason: "INVALID_PREDICATE_PROBABILITY",
      };
    }
    // Threshold mapping is interpretive — p=0 must still be treated carefully
    // by shouldFallbackToResponses (overconfident false).
    return {
      ok: true,
      value: probability >= 0.5,
      probability,
      reason: null,
    };
  }
  if (input.kind === "choice") {
    const choice = a.choice != null ? String(a.choice) : null;
    const allowed = input.choices ?? [];
    if (!choice || (allowed.length > 0 && !allowed.includes(choice))) {
      return {
        ok: false,
        value: null,
        probability: null,
        reason: "INVALID_CHOICE",
      };
    }
    // Do NOT invent confidence=1 for choice answers.
    return { ok: true, value: choice, probability: null, reason: null };
  }
  // score
  const levels = input.levels ?? [];
  if (typeof a.score === "number" && Number.isFinite(a.score)) {
    if (levels.length > 0) {
      const asLabel = String(a.score);
      if (!levels.includes(asLabel) && a.choice == null) {
        // numeric score without level labels — accept number, no fake p=1
        return {
          ok: true,
          value: a.score,
          probability: null,
          reason: null,
        };
      }
    }
    return { ok: true, value: a.score, probability: null, reason: null };
  }
  if (a.choice != null) {
    const label = String(a.choice);
    if (levels.length > 0 && !levels.includes(label)) {
      return {
        ok: false,
        value: null,
        probability: null,
        reason: "INVALID_SCORE_LEVEL",
      };
    }
    return { ok: true, value: label, probability: null, reason: null };
  }
  return {
    ok: false,
    value: null,
    probability: null,
    reason: "INVALID_SCORE",
  };
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

function validateResponsesValue(
  req: BoundedJudgmentRequest,
  raw: unknown,
): { ok: boolean; value: boolean | string | number | null; reason: string | null } {
  if (req.kind === "predicate") {
    const b = parseStrictBoolean(raw);
    if (b == null) {
      return { ok: false, value: null, reason: "INVALID_RESPONSES_PREDICATE" };
    }
    return { ok: true, value: b, reason: null };
  }
  if (req.kind === "choice") {
    const choice = raw != null ? String(raw) : null;
    const allowed = req.choices ?? [];
    if (!choice || (allowed.length > 0 && !allowed.includes(choice))) {
      return { ok: false, value: null, reason: "INVALID_RESPONSES_CHOICE" };
    }
    return { ok: true, value: choice, reason: null };
  }
  if (typeof raw === "number" && Number.isFinite(raw)) {
    return { ok: true, value: raw, reason: null };
  }
  if (raw != null) {
    const label = String(raw);
    const levels = req.levels ?? [];
    if (levels.length > 0 && !levels.includes(label)) {
      return { ok: false, value: null, reason: "INVALID_RESPONSES_LEVEL" };
    }
    return { ok: true, value: label, reason: null };
  }
  return { ok: false, value: null, reason: "INVALID_RESPONSES_SCORE" };
}

/**
 * Run Decisions first; on uncertainty/abstain/invalid/error, Responses JSON fallback.
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
    const validated = validateDecisionsAnswer({
      kind: req.kind,
      answer: primary,
      choices: req.choices,
      levels: req.levels,
    });
    const uncertain =
      req.kind === "predicate"
        ? assessUncertainty(validated.probability, band) ||
          isOverconfidentFalseAtZero({
            kind: "predicate",
            value: validated.value,
            probability: validated.probability,
          })
        : !validated.ok;
    decisionsResult = {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "decisions",
      value: validated.ok ? validated.value : null,
      probability: validated.probability,
      uncertain,
      abstain: !validated.ok || validated.value == null,
      reason: validated.reason ?? (uncertain ? "UNCERTAINTY_BAND" : null),
      usage: {
        inputTokens: dec.usage?.input_tokens,
        outputTokens: dec.usage?.output_tokens,
        model: input.modelDecisions ?? "gpt-6-luna",
      },
    };
    if (
      !shouldFallbackToResponses({
        ...decisionsResult,
        kind: req.kind,
      })
    ) {
      await recordBoundedJudgmentFinops(decisionsResult);
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
Return ONLY JSON matching ${schemaHint}. If unsure set uncertainty=true and/or abstain=true.
For predicate, value must be boolean true/false — never the strings "true"/"false" without boolean type.`;
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
    if (parsed.abstain) {
      return {
        schema: BOUNDED_JUDGMENT_SCHEMA,
        name: req.name,
        kind: req.kind,
        source: "responses_fallback",
        value: null,
        probability: null,
        uncertain: true,
        abstain: true,
        reason: decisionsResult?.reason
          ? `FALLBACK_ABSTAIN_AFTER:${decisionsResult.reason}`
          : "FALLBACK_ABSTAIN",
        usage: {
          inputTokens: resp.usage?.input_tokens,
          outputTokens: resp.usage?.output_tokens,
          model: input.modelResponses ?? "gpt-6-luna",
        },
      };
    }
    const validated = validateResponsesValue(req, parsed.value);
    if (!validated.ok) {
      return {
        schema: BOUNDED_JUDGMENT_SCHEMA,
        name: req.name,
        kind: req.kind,
        source: "refused",
        value: null,
        probability: null,
        uncertain: true,
        abstain: true,
        reason: validated.reason,
        usage: {
          inputTokens: resp.usage?.input_tokens,
          outputTokens: resp.usage?.output_tokens,
          model: input.modelResponses ?? "gpt-6-luna",
        },
      };
    }
    const fallbackResult: BoundedJudgmentResult = {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "responses_fallback",
      value: validated.value,
      probability: null,
      uncertain: Boolean(parsed.uncertainty),
      abstain: false,
      reason: decisionsResult?.reason
        ? `FALLBACK_AFTER:${decisionsResult.reason}`
        : "FALLBACK",
      usage: {
        inputTokens: resp.usage?.input_tokens,
        outputTokens: resp.usage?.output_tokens,
        model: input.modelResponses ?? "gpt-6-luna",
      },
    };
    await recordBoundedJudgmentFinops(fallbackResult);
    return fallbackResult;
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

async function recordBoundedJudgmentFinops(
  result: BoundedJudgmentResult,
): Promise<void> {
  try {
    const { randomUUID } = await import("node:crypto");
    const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
      "@/domains/conversation/usage-accounting"
    );
    const attemptId = randomUUID();
    await recordProviderUsageObservation({
      operation:
        result.source === "decisions"
          ? "bounded_judgment.decisions"
          : "bounded_judgment.responses_fallback",
      modelRequested: result.usage?.model ?? null,
      modelApplied: result.usage?.model ?? null,
      inputTokens: result.usage?.inputTokens ?? null,
      outputTokens: result.usage?.outputTokens ?? null,
      status: "succeeded",
      granularity: "REQUEST",
      costCoverage: "PARTIAL",
      idempotencyKey: buildIdempotencyKey({
        granularity: "REQUEST",
        lane: process.env.STUDIO_LANE || "DEV",
        operation: `bounded_judgment.${result.source}`,
        attemptId,
        callOrdinal: 0,
      }),
      limits: [
        "NOT_D6_HUMAN_DECISION",
        "BOUNDED_JUDGMENT",
        result.source,
        `NAME_${result.name.slice(0, 40)}`,
      ],
    });
  } catch {
    /* FinOps best-effort */
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

### `src/domains/documents/document-vision-punctual.ts` (4506 bytes, 154 lines)
```ts
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
    const usage = {
      inputTokens: resp.usage?.input_tokens,
      outputTokens: resp.usage?.output_tokens,
      model: input.model ?? "gpt-6.1-terra",
    };
    try {
      const { randomUUID } = await import("node:crypto");
      const { recordProviderUsageObservation, buildIdempotencyKey } =
        await import("@/domains/conversation/usage-accounting");
      const fp = visionBytesFingerprint(req.bytes);
      const attemptId = randomUUID();
      await recordProviderUsageObservation({
        operation: "vision.punctual",
        modelRequested: usage.model,
        modelApplied: usage.model,
        inputTokens: usage.inputTokens ?? null,
        outputTokens: usage.outputTokens ?? null,
        status: text.trim().length > 0 ? "succeeded" : "failed",
        granularity: "REQUEST",
        costCoverage: "PARTIAL",
        idempotencyKey: buildIdempotencyKey({
          granularity: "REQUEST",
          lane: process.env.STUDIO_LANE || "DEV",
          operation: "vision.punctual",
          attemptId,
          callOrdinal: 0,
        }),
        limits: [...limits, `BYTES_FP_${fp}`],
      });
    } catch {
      /* FinOps best-effort */
    }
    return {
      schema: DOCUMENT_VISION_SCHEMA,
      ok: text.trim().length > 0,
      text,
      parsed,
      limits,
      usage,
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

### `tests/unit/ml2-journal-hybrid-pg.test.ts` (3379 bytes, 101 lines)
```ts
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("ml2 journal semantic uses hybridSearch (PG-safe)", () => {
  it("searchJournalSubjects routes through hybridSearchProjectKnowledge", () => {
    const src = readFileSync(
      join(__dirname, "../../src/domains/knowledge/journal.ts"),
      "utf8",
    );
    expect(src).toContain("hybridSearchProjectKnowledge");
    // Must not leave bare merge with only queryVector (PG skip path).
    const block = src.slice(
      src.indexOf("ML2 E: hybrid via product service"),
      src.indexOf("export async function searchJournalDecisions"),
    );
    expect(block).toContain("hybridSearchProjectKnowledge");
    expect(block).not.toMatch(
      /mergeLexicalAndDerived\(\{\s*projectId,\s*lexical,\s*queryVector/,
    );
  });

  it("frontier does not reserve maxOutputTokensPerRequest for non-Responses", () => {
    const src = readFileSync(
      join(
        __dirname,
        "../../src/domains/conversation/provider-emission-frontier.ts",
      ),
      "utf8",
    );
    expect(src).toContain("!isResponsesGeneration");
    expect(src).toContain("reservedOutput = reservedOutput ?? 0");
    expect(src).toContain("measuredInputTokens");
    expect(src).toContain("measuredOutputTokens");
  });

  it("FinOps observations exist for query embed, judgment, vision", () => {
    const emb = readFileSync(
      join(
        __dirname,
        "../../src/domains/knowledge/derived-embedding-service.ts",
      ),
      "utf8",
    );
    const bj = readFileSync(
      join(__dirname, "../../src/domains/conversation/bounded-judgment.ts"),
      "utf8",
    );
    const vis = readFileSync(
      join(
        __dirname,
        "../../src/domains/documents/document-vision-punctual.ts",
      ),
      "utf8",
    );
    expect(emb).toContain('operation: "embeddings.derived_query"');
    expect(bj).toContain("recordBoundedJudgmentFinops");
    expect(vis).toContain('operation: "vision.punctual"');
  });

  it("FinOps keys use attemptId (not content-only ordinal)", () => {
    const emb = readFileSync(
      join(
        __dirname,
        "../../src/domains/knowledge/derived-embedding-service.ts",
      ),
      "utf8",
    );
    const bj = readFileSync(
      join(__dirname, "../../src/domains/conversation/bounded-judgment.ts"),
      "utf8",
    );
    const vis = readFileSync(
      join(
        __dirname,
        "../../src/domains/documents/document-vision-punctual.ts",
      ),
      "utf8",
    );
    expect(emb).toMatch(/const attemptId = randomUUID\(\)/);
    expect(bj).toMatch(/const attemptId = randomUUID\(\)/);
    expect(vis).toMatch(/const attemptId = randomUUID\(\)/);
    expect(emb).toMatch(/attemptId,/);
    expect(bj).toMatch(/attemptId,/);
    expect(vis).toMatch(/attemptId,/);
    expect(emb).not.toMatch(
      /callOrdinal:\s*Number\.parseInt\(fp\.slice\(0,\s*8\)/,
    );
  });

  it("upsertDerivedChunkPg serializes concurrent source updates", () => {
    const src = readFileSync(
      join(__dirname, "../../src/domains/knowledge/derived-embedding-pg.ts"),
      "utf8",
    );
    expect(src).toContain("pg_advisory_xact_lock");
    expect(src).toContain("pg.begin");
    expect(src).toContain("hashtext(${input.projectId})");
    expect(src).toContain("hashtext(${e.sourceId})");
  });
});
```

### `tests/unit/ml2-derived-lifecycle-upsert.test.ts` (1935 bytes, 46 lines)
```ts
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("ml2 derived index product lifecycle wiring", () => {
  const root = join(__dirname, "../../src");

  it("exposes upsertDerivedAdmissibleSource (single-source, not full wipe)", () => {
    const svc = readFileSync(
      join(root, "domains/knowledge/derived-embedding-service.ts"),
      "utf8",
    );
    expect(svc).toContain("export async function upsertDerivedAdmissibleSource");
    expect(svc).toContain("upsertDerivedChunkPg");
    // Must not call full-project replace for single upsert path.
    const upsertBlock = svc.slice(
      svc.indexOf("export async function upsertDerivedAdmissibleSource"),
      svc.indexOf("export async function revokeDerivedSource"),
    );
    expect(upsertBlock).not.toContain("replaceDerivedChunksPg");
  });

  it("capitalizeAcquis and openPoint wire upsert + revoke", () => {
    const src = readFileSync(join(root, "domains/knowledge/service.ts"), "utf8");
    expect(src).toContain("upsertDerivedAdmissibleSource");
    expect(src).toContain('sourceKind: "acquis"');
    expect(src).toContain('sourceKind: "open_point"');
    expect(src).toContain("revokeDerivedSource");
  });

  it("pg module has non-destructive upsertDerivedChunkPg", () => {
    const pg = readFileSync(
      join(root, "domains/knowledge/derived-embedding-pg.ts"),
      "utf8",
    );
    expect(pg).toContain("export async function upsertDerivedChunkPg");
    expect(pg).toContain("ON CONFLICT (project_id, source_id, content_fingerprint, model)");
    expect(pg).toContain("content_fingerprint <>");
  });

  it("selectRelevantKnowledgeContext can supplement with hybrid hits", () => {
    const src = readFileSync(join(root, "domains/knowledge/service.ts"), "utf8");
    expect(src).toContain("hybridSearchProjectKnowledge");
    expect(src).toContain("DERIVED_HIT");
  });
});
```


---

## 5. Preuves techniques

### Tests (subset)
```text
ml2-journal-hybrid-pg.test.ts — 5 PASS (hybrid, frontier markers, FinOps attemptId, advisory lock)
ml2-derived-lifecycle-upsert.test.ts — PASS
ml2-bounded-judgment.test.ts — PASS
```

### Build DEV final
- BUILD_ID: `kZ2BQGAn9NHhPNqh4kZnT`
- port: 3100
- flags OFF · WEB OFF · schema 027

### Non rejoué
- aucune campagne LIVE
- aucune mutation RECETTE

---

## 6. Synthèse produit

| | |
|---|---|
| A Déjà OK | Arch E, 027, Frontier, D3 V1, Decisions≠D6, Vision gated Git |
| B Consolidation | LIFECYCLE-01 · CONTEXT-01 · FINOPS-IDEM-01 |
| C Follow-up | JOURNAL-PG-01 · FRONTIER-MEAS-01 · FINOPS-ML2-01 |
| D Regularization | CONCUR-01 · FINOPS-KEY-01 · BUILD aligné HEAD |
| E RECETTE | backlog F |
| F Bloquant ML3 ? | Non — GO Morris distinct |

---

## 7. Instruction ChatGPT (obligatoire)

1. Lire ce Handoff distant **complet** (pas `ee9af91a` / pas `c4f7c52b` seuls).
2. Croiser HEAD `6665083447244234960b3d724d2fe66f6bead910` · tree `04be6bef4218cd69d79014680349d883dd6c87a8` · BUILD `kZ2BQGAn9NHhPNqh4kZnT`.
3. Vérifier sections 2.1 / 2.2 et le code `upsertDerivedChunkPg` + FinOps `attemptId`.
4. Confirmer que le pack contient le code modifié (pas un stub 52 lignes).
5. Ne pas exiger une nouvelle campagne LIVE pour accepter la fin de construction.

---

## 8. Verdict

**MACRO-LOT 2 — IMPLEMENTATION COMPLETE — ENGINEERING QUALIFICATION COMPLETE — FUNCTIONAL RECETTE QUALIFICATION PENDING — MORRIS EXIT ACCEPTANCE PROPOSED**

READY WITH RESERVES · ENV ROUTING COMPLETE

R5 IN PROGRESS · ML5 OPEN · LIVRAISON 1 NOT ACCEPTED GLOBALLY · MACRO-LOT 3 NOT STARTED · NO RELEASE · STABLE NOT AVAILABLE · NOT ADOPTED
