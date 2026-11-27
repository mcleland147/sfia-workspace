# SFIA REVIEW PACK — FULL
# CONVERGENCE OPENAI–STUDIO — ML1/ML2 CONSOLIDATION
# PRODUCT COMPLETENESS & ENGINEERING QUALIFICATION

- **Generated (UTC):** 2026-11-27T06:53:56Z
- **Cycle:** 8 Delivery / Critical / INC-EVOL
- **HEAD entrée:** `9321bcf73d95cdcbba76bb3f6e33b17ed8163afe`
- **HEAD final:** `8a6eef972e42a6bf2cca4e89f90ce5682654c7a6`
- **Tree web:** `8a278531c65add03f4e310a8184a19a393ca391a`
- **BUILD_ID:** `hGsURunVLzPVZv105HFHX` · digest `62617bb4c5da6283da5227ae06916a727aa2c939327010a285613520bb4e89b4` · pid from identity below
- **Schema:** 027 APPLIED DEV · flags OFF · WEB OFF · RECETTE protected
- **Verdict:** MACRO-LOT 2 — IMPLEMENTATION COMPLETE — ENGINEERING QUALIFICATION COMPLETE — FUNCTIONAL RECETTE QUALIFICATION PENDING — MORRIS EXIT ACCEPTANCE PROPOSED
- **SFIA status:** READY WITH RESERVES
- **Fake/Real:** DETERMINISTIC/UNIT + REAL PG wiring proofs · **no new LIVE** · historical LIVE capitalized with limits

---

## 0. Local Git Truth Check

| Field | Value |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD final | `8a6eef972e42a6bf2cca4e89f90ce5682654c7a6` |
| Baseline ML2 delivery | `e784232b` |
| origin/main | `997897fd` |
| Project push | **NONE** |
| Staged unexpected | none |
| ENV | DEV :3100 · PG :5433 · RECETTE :3200 untouched |

### Runtime identity
```json
{"pid":20350,"port":3100,"host":"127.0.0.1","buildId":"hGsURunVLzPVZv105HFHX","contentDigest":"62617bb4c5da6283da5227ae06916a727aa2c939327010a285613520bb4e89b4","sessionFingerprint":"e4829b8bd74645b3df79713af1f7d8fcc9d3fc6268c5b59a2bc75f9a1c53a6c4","workspaceRoot":"/tmp/sfia-c12-cursor-live-ws","effectMode":"LIVE","startedAt":"2026-11-27T06:53:00Z","mode":"qualify-next-start"}
```

### Commits this consolidation (9321bcf7..HEAD)
```text
8a6eef97 fix(ml2): complete derived-index product lifecycle and ML1/ML2 consolidation
```

### Diffstat consolidation
```text
 .../as-built-macro-lot-2-20261127.md               |   4 +-
 .../completeness-cartography-20261127.md           |  46 +++++++++
 .../recette-qualification-backlog-20261127.md      |  24 +++++
 .../construction/delivery-history.md               |  12 +++
 ...5-registre-couverture-et-revue-developpement.md |   2 +-
 .../conversation/provider-emission-frontier.ts     |  21 ++--
 .../src/domains/knowledge/derived-embedding-pg.ts  |  67 +++++++++++++
 .../domains/knowledge/derived-embedding-service.ts | 111 ++++++++++++++++++++-
 .../web/src/domains/knowledge/service.ts           |  64 +++++++++++-
 .../unit/ml2-derived-lifecycle-upsert.test.ts      |  46 +++++++++
 .../web/tests/unit/ml2-product-wiring.test.ts      |   3 +-
 11 files changed, 385 insertions(+), 15 deletions(-)
```

---

## A. Delivery courant — consolidation

### Objectif
Revue de complétude ML1/ML2, corrections réelles, qualification engineering proportionnée, backlog RECETTE, **pas** de campagne LIVE, **pas** ML3.

### Corrections effectuées (défauts A)

1. **LIFECYCLE-01** — Index dérivé seulement via scripts → **upsert produit**
   - `upsertDerivedAdmissibleSource` + `upsertDerivedChunkPg` (sans wipe projet)
   - Wiring `capitalizeAcquis` / `openPoint` + revoke supersede
2. **CONTEXT-01** — `selectRelevantKnowledgeContext` sans hybrid → supplément `DERIVED_HIT` si flag ON
3. **FINOPS-IDEM-01** — `Date.now()` ordinal rebuild → ordinal stable fingerprint

### Non-modifications justifiées (KEEP)

- Architecture E (lexical+embeddings PG) · VS DEFER
- D3 V1 · D6 human authority · Decisions ≠ D6
- Cognitive product limits 1M/2M/120 séparés des caps campagne
- Flags OFF défaut · WEB OFF
- Pas de pivot / migration / Admin / LIVE

### Incident LIVE historique (acquis, non réécrit)

HTTP +7/18 WITHIN · tokens +82417/38000 EXCEEDED · emb family 12/12.
Cause produit vs expérimental : familyHttp + search D4 sous flag = campagne ; reserved→committed si mesure absente.
**Aucune nouvelle campagne.** Protections produit non asservies aux quotas expérimentaux hors `SFIA_G_LIVE_API`.

### Tests

| Suite | Résultat |
|---|---|
| ml2 unit (7 files) | **28 PASS** |
| lifecycle upsert wiring | **4 PASS** |
| build DEV | BUILD `hGsURunVLzPVZv105HFHX` |
| smoke login | 200 + BUILD_ID HTML |
| LIVE | **NONE** this delivery |

### Code créé/modifié (extraits)

#### upsertDerivedAdmissibleSource
```typescript
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
        callOrdinal: Number.parseInt(fp.slice(0, 8), 16) % 100000,
      }),
      limits: [
        "DERIVED_INDEX_UPSERT",
        "ADMISSIBLE_SOURCE",
        `BACKEND_${derivedEmbeddingBackend().toUpperCase()}`,
        `FP_${fp.slice(0, 12)}`,
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


```

#### upsertDerivedChunkPg
```typescript
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
  await pg.unsafe(
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
  await pg`
    UPDATE derived_embedding_chunks
    SET revoked = true, updated_at = now()
    WHERE project_id = ${input.projectId}
      AND source_id = ${e.sourceId}
      AND content_fingerprint <> ${e.contentFingerprint}
      AND revoked = false
  `;
  return true;
}

/** Mark revoked/deleted idempotently. */

```

### Cartographie de complétude
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
| EXP-TOKENS-01 | E tooling | Campagne LIVE tokens reserved→committed sans mesure | Documenté ; Frontier commentaire clarifié ; **pas** de nouvelle campagne |
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


### Backlog RECETTE
# Qualifications à reporter en RECETTE — post consolidation ML2

Statut factuel : **QUALIFICATION RECETTE REQUIRED** pour les propriétés ci-dessous.
Ne masque pas un défaut d’implémentation.

| Exigence | Comportement attendu | Preuve DEV déjà dispo | Propriété restante | Raison report | Environnement | Clôture |
|---|---|---|---|---|---|---|
| Allocation cognitive | pertinence modèle/effort selon demande | policy + admission unit | pertinence Pilote | F usage réel | RECETTE | GO Morris post-ML3 |
| Autonomie Nora | investigation sans spoon-feed | LIVE PARTIAL F25 | restitution COMPLETE longue | D/F tokens+emb | RECETTE | scénario Pilote |
| Recherche sémantique | paraphrase / homonymes | hybrid unit + parcours PG | pertinence ranking | F | RECETTE | corpus projet synthétique |
| Sources contradictoires | signaler contradictions | corpus syn-contradict | arbitrage Pilote | F | RECETTE | |
| Schémas / tableaux | Vision utile | LIVE Vision Gate B | docs mixtes texte+schéma | F | RECETTE | |
| Investigation longue | reprise / stagnation | D3 limits 1M/2M/120 | expérience continue | F | RECETTE | |
| Note→révision | versions D9 | PG parcours + LIVE note 3 revs | qualité contenu | F | RECETTE | |
| FinOps UX | intelligibilité conso | ledger + UI existante | perception Pilote | F | RECETTE | |
| WEB | discovery/open | ML1 reserves | — | WEB OFF preserved | ultérieur | hors ce lot |

## Non reportables (doivent rester techniques)

- Droits / isolation inter-projets
- Fingerprint / revoke pendant search
- Frontier refuse avant émission (déterministe / substitué)
- Cycle de vie index upsert (corrigé ce delivery)
- Pas de D6 remplacé par Decisions


---

## B. Annexe — régularisation documentaire macro-lot 2 (e784232b → 9321bcf7)

Couverture des livraisons déjà réalisées mais partiellement absentes des Handoffs distants antérieurs. **Pas** de réexécution des travaux.

### Commits e784..9321bcf7 (historique)
```text
9321bcf7 feat(ml2): execute final LIVE Nora qualification under Morris GO caps
ae435d41 feat(ml2): qualify integrated product parcours and harden Frontier/rights
bca4a4e5 feat(ml2): apply 027 PG derived index and Gate B product LIVE qualification
f372616e docs(ml2): bump registre to v0.22 checkpoint A+B
be7c2a87 fix(ml2): harden rights, judgment, Frontier protect; finalize 027 checkpoint
8b75249a feat(ml2): product-wide wire hybrid search, Decisions, Vision; protect LIVE campaign
56572cf8 docs(ml2): pin final LIVE manifesto Git Truth refs
49333f09 docs(ml2): finalize LIVE campaign manifesto and seed DEV journal baseline
70291410 feat(ml2): frontier family envelopes, corrected corpora, LIVE manifesto preflight
```

### Capacités livrées dans cette fenêtre (capitalisées)

| Thème | Preuve / artifact |
|---|---|
| Migration 027 APPLIED | `027_derived_embedding_chunks.sql` + db-migrate |
| Product wiring hybrid/D4/journal/D8/Vision | as-built ML2 · unit wiring |
| Frontier familyHttp + metrics clone | gate-b-frontier-reconciliation |
| Gate A+B LIVE | handoffs 4d92cc70 · Δ9 |
| Product qualification PG/API + Playwright smoke | handoff bcbb897c |
| FINAL LIVE Nora PARTIAL | handoff 3b500995 · consolidated JSON |
| Rights fingerprint revalidation | derived-embedding-service |

### Diffstat cycle complet (tail)
```text
 .../selection-checkpoint-ml2-i2-20261127.md        |  82 ++
 .../construction/delivery-history.md               |  77 ++
 ...5-registre-couverture-et-revue-developpement.md |   2 +-
 projects/sfia-studio-next/web/.gitignore           |   3 +
 .../sfia-studio-next/web/scripts/db-migrate.sh     |   3 +-
 .../web/scripts/ml2-final-live-nora-continue.mts   | 397 +++++++++
 .../web/scripts/ml2-final-live-nora-qualify.mts    | 547 ++++++++++++
 .../ml2-frontier-preflight-concurrency-restart.mts | 304 +++++++
 .../web/scripts/ml2-gate-b-product-live.mts        | 361 ++++++++
 .../ml2-generate-synthetic-document-artefacts.py   | 338 +++++++
 .../web/scripts/ml2-i2-bounded-live-campaign.mts   | 973 +++++++++++++++++++++
 .../web/scripts/ml2-i2-finops-reconcile.mts        | 154 ++++
 .../scripts/ml2-i2-integrated-delivery-qualify.mts | 581 ++++++++++++
 .../web/scripts/ml2-product-parcours-qualify.mts   | 379 ++++++++
 .../ml2-seed-synthetic-journal-baseline.mts        | 276 ++++++
 .../scripts/ml2-verify-synthetic-pdf-extract.mts   |  48 +
 .../sfia-studio-next/web/scripts/qualify-dev.sh    |  15 +-
 .../projects/[projectId]/journal/search/route.ts   |  14 +
 .../db/migrations/027_derived_embedding_chunks.sql |  44 +
 .../candidates/027_derived_embedding_chunks.sql    |  44 +
 .../src/domains/conversation/bounded-judgment.ts   | 527 +++++++++++
 .../web/src/domains/conversation/d4-read-tools.ts  |  89 ++
 .../web/src/domains/conversation/git-read-tools.ts |  82 +-
 .../conversation/provider-emission-frontier.ts     | 462 ++++++++--
 .../domains/documents/document-vision-punctual.ts  | 126 +++
 .../domains/knowledge/derived-embedding-index.ts   | 248 ++++++
 .../src/domains/knowledge/derived-embedding-pg.ts  | 240 +++++
 .../domains/knowledge/derived-embedding-service.ts | 518 +++++++++++
 .../domains/knowledge/hybrid-knowledge-search.ts   | 150 ++++
 .../web/src/domains/knowledge/journal.ts           |  51 +-
 .../web/src/domains/knowledge/service.ts           |  71 ++
 .../domains/proofs/d8-cognitive-criterion-eval.ts  |  76 ++
 .../qualify/ml2-product-browser-smoke.spec.ts      |  95 ++
 .../web/tests/unit/ml2-bounded-judgment.test.ts    |  79 ++
 .../tests/unit/ml2-derived-embedding-index.test.ts | 169 ++++
 .../unit/ml2-derived-lifecycle-upsert.test.ts      |  46 +
 .../tests/unit/ml2-derived-rights-rebuild.test.ts  |  65 ++
 .../tests/unit/ml2-frontier-metrics-clone.test.ts  |  39 +
 .../web/tests/unit/ml2-product-wiring.test.ts      |  97 ++
 62 files changed, 8942 insertions(+), 132 deletions(-)
```

Fichiers volumineux historiques (scripts LIVE, bounded-judgment 527L, frontier) : chemins déjà sur HEAD ; revue via as-built + tests + handoffs immuables cités — pas de recopie intégrale.

---

## Synthèse produit (mandat §28)

| Lettre | Contenu |
|---|---|
| A Déjà correct | Architecture E · Frontier commun · D3 V1 · Decisions/D8 · Vision gate · 027 PG · droits/fp |
| B Corrigé | Lifecycle index upsert · context hybrid · FinOps idempotency rebuild |
| C Complété | Cartographie · backlog RECETTE · docs as-built/registre |
| D Vérifié engineering | Units · build · smoke · ENV isolation |
| E RECETTE pending | Voir backlog (pertinence cognitive, restitution longue, ranking, schémas mixtes, UX FinOps) |
| F Bloquant ML3 ? | **Non** pour engagement technique ML3 audio — dépendances communes stables ; GO Morris distinct requis |
| G Dépendances ML3 | Frontier/Responses · D3 continuity · D4/D9 rights · FinOps · **pas** audio ici |

### Réserves

| Réserve | Gravité | Impact | Owner | Vérif | Bloquant trajectoire ML3 ? |
|---|---|---|---|---|---|
| F25 restitution COMPLETE LIVE DEV | moyenne | preuve cognitive partielle | Morris/RECETTE | RECETTE | Non |
| Tokens campagne EXCEEDED (historique) | basse produit | tooling expérimental | Cursor docs | déjà STOP | Non |
| Emb family 12 expérimentale | basse produit | N/A hors campagne | — | — | Non |
| Typecheck baseline hors ML2 | basse | CI noise | ultérieur | hors périmètre | Non |
| Flags OFF | info | capacités gated | Morris | activation distincte | Non |
| Admin FinOps org identity | ML1 reserve | cloisonnement | Morris | keep | Non |

---

## Fake/Real Qualification

| Frontière | Mode | Preuve | Gap |
|---|---|---|---|
| OpenAI | historique LIVE only | Gate B / FINAL PARTIAL | no new LIVE |
| PostgreSQL | REAL DEV | 027 · parcours prior | — |
| API Studio | REAL/wiring | consumers verified | — |
| Navigateur | REAL smoke prior | 2/2 | no LIVE browser |
| Substituted | unit Frontier/rights | refuse N+1 etc. | — |

DETERMINISTIC PROVEN ≠ READY FOR REAL cognitive.
REAL PG ≠ investigation COMPLETE.

---

## ENV-01 / Versioning

- ENV ROUTING COMPLETE · DEV only · RECETTE/STABLE untouched
- NO RELEASE · STABLE NOT AVAILABLE · product-version.ts source unique
- delivery_id: DELIV-2026-11-27-OPENAI-STUDIO-CONVERGENCE-ML1-ML2-CONSOLIDATION

---

## Instruction ChatGPT obligatoire (§9.1)

ChatGPT doit:

1. Lire le Handoff distant complet (SHA/blob) et croiser HEAD `8a6eef97` / tree `8a278531` / BUILD `hGsURunVLzPVZv105HFHX`
2. Vérifier distinction **Delivery A** vs **Annexe B** (régularisation, pas rejeu)
3. Contrôler que LIFECYCLE-01 est un vrai fix produit (upsert non-wipe) et non un script-only
4. Confirmer **aucune** nouvelle campagne LIVE ni mutation RECETTE
5. Qualifier le backlog RECETTE comme F (pas masquer A)
6. Trancher acceptation fin de construction ML2 + GO distinct ML3
7. Refuser READY si couverture code/preuves insuffisante dans le pack

---

## Verdict

**MACRO-LOT 2 — IMPLEMENTATION COMPLETE — ENGINEERING QUALIFICATION COMPLETE — FUNCTIONAL RECETTE QUALIFICATION PENDING — MORRIS EXIT ACCEPTANCE PROPOSED**

READY WITH RESERVES.

R5 IN PROGRESS · ML5 OPEN · Livraison 1 NOT ACCEPTED GLOBALLY · MACRO-LOT 3 NOT STARTED · R6 NOT STARTED · NO RELEASE · STABLE NOT AVAILABLE · NOT ADOPTED.
