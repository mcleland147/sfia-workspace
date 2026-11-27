# SFIA REVIEW PACK — FULL
# MACRO-LOT 2 — FINAL LIVE NORA QUALIFICATION + CYCLE CLOSURE

- **Generated (UTC):** 2026-11-27T06:17:12Z
- **Objective:** Morris GO FINAL LIVE Nora (≤18 HTTP / ≤38k tokens) + Review Pack FULL cycle since e784232b.
- **Prior handoffs:** bcbb897c · blob e48bb39c · (product qualification) · 4d92cc70 (Gate A+B)
- **Campaign:** ml2-i2-docintel-20261127 — **no renew** · WEB OFF · Admin unused
- **Local HEAD:** `9321bcf73d95cdcbba76bb3f6e33b17ed8163afe`
- **Tree web:** `3af82abd0ed3e1b9734b9c45e1eb99a554ba02c9`
- **BUILD_ID:** `nzwWNOfltBjOBpaSmv5_q` · digest `37fc26536b425f5e798eee6be1445be1ae598bb732fe7e47cc4a041a5572513f` · pid `77388`
- **Schema:** 027 APPLIED DEV · lane DEV · RECETTE :3200 protected
- **Verdict:** MACRO-LOT 2 — PRODUCT QUALIFICATION COMPLETE WITH RESERVES — LIVE NORA PARTIAL — MORRIS EXIT ACCEPTANCE PROPOSED
- **Fake/Real:** REAL LIVE Nora (D4 search+read) + REAL PG hybrid/docs/work + REAL Chromium smoke prior + UNIT ; spoon-fed answers: **NO**

---

## 0. Local Git Truth Check

| Field | Value |
|---|---|
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `9321bcf73d95cdcbba76bb3f6e33b17ed8163afe` |
| Baseline | `e784232b` |
| Tree web | `3af82abd0ed3e1b9734b9c45e1eb99a554ba02c9` |
| Project push | **NONE** |
| Flags after | SEARCH/JUDGMENT/VISION **OFF** · BACKEND=pg |
| WEB | OFF |

### Commits e784..HEAD
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

### Diffstat (tail)
```text
 .../architecture-selection-locked-20261127.md      |  60 ++
 ...ast-radius-inventory-final-delivery-20261127.md |  47 +
 .../ml2-qualification/corpus-decisions-labels.json |  71 +-
 .../corpus-pdf-vision-oracle.json                  |  36 +-
 .../ml2-qualification/corpus-retrieval-oracle.json | 105 ++-
 .../finops-reconcile-audit-20261127.md             |  27 +
 .../gate-b-frontier-reconciliation-20261127.md     |  42 +
 .../live-campaign-manifest-candidate.md            | 103 +++
 .../live-campaign-manifest-final.md                | 186 ++++
 .../live-campaign-remainder-20261127.md            |  32 +
 .../live-checkpoint-post-gate-b-20261127.md        |  66 ++
 .../live-gate-b-emission-plan-20261127.md          |  55 ++
 .../ml2-qualification/migration-027-candidate.md   |  41 +
 .../morris-checkpoint-027-and-live-20261127.md     | 115 +++
 .../product-consumer-cartography-20261127.md       |  32 +
 .../ml2-qualification/protocole-qualification.md   |   5 +-
 .../selection-checkpoint-ml2-i2-20261127.md        |  82 ++
 .../construction/delivery-history.md               |  65 ++
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
 .../conversation/provider-emission-frontier.ts     | 441 ++++++++--
 .../domains/documents/document-vision-punctual.ts  | 126 +++
 .../domains/knowledge/derived-embedding-index.ts   | 248 ++++++
 .../src/domains/knowledge/derived-embedding-pg.ts  | 173 ++++
 .../domains/knowledge/derived-embedding-service.ts | 409 +++++++++
 .../domains/knowledge/hybrid-knowledge-search.ts   | 150 ++++
 .../web/src/domains/knowledge/journal.ts           |  51 +-
 .../web/src/domains/knowledge/service.ts           |  13 +
 .../domains/proofs/d8-cognitive-criterion-eval.ts  |  76 ++
 .../qualify/ml2-product-browser-smoke.spec.ts      |  95 ++
 .../web/tests/unit/ml2-bounded-judgment.test.ts    |  79 ++
 .../tests/unit/ml2-derived-embedding-index.test.ts | 169 ++++
 .../tests/unit/ml2-derived-rights-rebuild.test.ts  |  65 ++
 .../tests/unit/ml2-frontier-metrics-clone.test.ts  |  39 +
 .../web/tests/unit/ml2-product-wiring.test.ts      |  96 ++
 59 files changed, 8564 insertions(+), 124 deletions(-)
```

### Candidat runtime
```json
{"pid":77388,"port":3100,"host":"127.0.0.1","buildId":"nzwWNOfltBjOBpaSmv5_q","contentDigest":"37fc26536b425f5e798eee6be1445be1ae598bb732fe7e47cc4a041a5572513f","sessionFingerprint":"e4829b8bd74645b3df79713af1f7d8fcc9d3fc6268c5b59a2bc75f9a1c53a6c4","workspaceRoot":"/tmp/sfia-c12-cursor-live-ws","effectMode":"LIVE","startedAt":"2026-11-27T06:04:37Z","mode":"qualify-next-start"}
```

---

## 1. Morris GO FINAL LIVE — autorisation & préflight

| Cap GO | Valeur |
|---|---|
| HTTP additionnels | ≤18 |
| Tokens cumulés additionnels | ≤38 000 |
| Coût estimé accepté | 0,15–0,60 USD |
| Campagne | ml2-i2-docintel-20261127 (existante) |
| Lane | DEV synthétique · WEB OFF |

Préflight démontré avant émission: protectPersisted=true · HTTP SoT 99 · embRemain 4 · respRemain 88 · hardMaxHttp 117.

---

## 2. Résultat LIVE consolidé

```json
{
  "campaignId": "ml2-i2-docintel-20261127",
  "morrisGo": "2026-11-27-final-live-nora-qualification",
  "caps": {
    "http": 18,
    "tokensCumulative": 38000,
    "costUsd": "0.15-0.60"
  },
  "baselineBeforeGo": {
    "http": 99,
    "tokensInOut": 74037
  },
  "afterGo": {
    "http": 106,
    "tokensInOut": 156454,
    "family": {
      "decisions": 14,
      "embeddings": 12,
      "responses": 27,
      "vector_stores": 29,
      "files": 12
    }
  },
  "delta": {
    "http": 7,
    "tokens": 82417
  },
  "withinHttp": true,
  "withinTokens": false,
  "stopReason": "CAMPAIGN_FAMILY_HTTP_EXHAUSTED:embeddings + TOKEN_GO_EXCEEDED — no further LIVE",
  "artefacts": {
    "workId": "cgw_5ce99393-e0bd-4bc8-a3d9-07d0e687ca92",
    "documentId": "doc_30e2913e-c777-462e-aded-e1836d03969e",
    "documentRevisions": 3
  },
  "phase1": {
    "verdict": "FINAL_LIVE_NORA_PARTIAL_WITHIN_GO",
    "httpDelta": 2,
    "tokenDelta": 14110
  },
  "phase2": {
    "verdict": "FINAL_LIVE_NORA_BUDGET_FAIL",
    "httpDeltaFromGoStart": 7,
    "tokenDeltaFromGoStart": 82417
  },
  "quality": {
    "d4Search": true,
    "d4DocumentRead": true,
    "hybridRightsRevalidated": true,
    "noraCompleteRestitution": false,
    "noteConservedAndRevised": true,
    "spoonFedAnswers": false
  },
  "verdict": "FINAL_LIVE_NORA_PARTIAL — HTTP_WITHIN_GO / TOKENS_EXCEEDED / EMBEDDINGS_FAMILY_EXHAUSTED"
}
```

| Mesure | Résultat |
|---|---|
| HTTP | **+7 / 18** (99→106) — **WITHIN** |
| Tokens | **+82417 / 38000** — **EXCEEDED** |
| Familles Δ | emb 8→12 (MAX) · resp 24→27 · others inchangés |
| Stop | `CAMPAIGN_FAMILY_HTTP_EXHAUSTED:embeddings` puis **STOP** nouvelle émission |
| Coût | non inventé — observation Frontier ; fourchette GO dépassée côté tokens |

**Cause technique primaire du stop:** avec `SFIA_DERIVED_EMBEDDING_SEARCH=1`, les outils D4 `search_project_resources` consomment la famille embeddings jusqu'au plafond 12/12, refusant la poursuite du tour Nora avant restitution COMPLETE.

**Cause secondaire / gouvernance:** dépassement du plafond tokens GO (comptabilisation Frontier in+out après tours partiels). Aucune émission supplémentaire après constat.

---

## 3. Parcours Studio exercé (véritable)

| Étape | Résultat | Fake/Real |
|---|---|---|
| Investigation Nora | work `cgw_5ce99393-e0bd-4bc8-a3d9-07d0e687ca92` · segments + reprise | REAL LIVE |
| Recherche connaissances | hybrid 8 hits · rightsRevalidated · journal | REAL PG + 1 LIVE embed |
| Consultation sources | D4 search + **read** 2 documents CONSULTED | REAL LIVE tools |
| Production documentaire | note markdown depuis restitution partielle | REAL PG |
| Conservation | `doc_30e2913e-c777-462e-aded-e1836d03969e` AVAILABLE | REAL PG |
| Révision | 3 révisions | REAL PG |
| Restitution COMPLETE | **NON** — PARTIAL / UNKNOWN provider refuse mid-loop | — |

### Phase 1 knowledgeSearch
- derivedUsed=True rightsRevalidated=True hits=8
- sourceIds sample: ['subj_97b30cf9-248d-4a1d-a675-fd6028b8ef74', 'subj_92234688-3728-48a1-9fd1-9077f157357d', 'acq_ff17101c-43f7-4532-9247-21034b77361a', 'subj_70aedb56-4391-4c30-8e2a-cc705f595c57', 'acq_36b7251d-2711-4722-aa64-6756bb15ebce', 'acq_f931324b-c44e-4db4-8c17-07eae34523b4']

### Phase 1 Nora preview
```text
J’ai avancé sur ce travail, mais je n’ai pas pu livrer une restitution complète et fiable sur ce tour.
Sources découvertes non ouvertes :
• Document · DISCOVERED — Capacité Orion B [syn-contradict-b]
• Document · DISCOVERED — Capacité Orion A [syn-contradict-a]
• Document · DISCOVERED — AUTH-TOKEN TTL [syn-auth-v2]
• Document · DISCOVERED — Note qualification Orion (synthétique)
Aucune conclusion métier n’est affirmée au-delà de ces acquis observés.
Votre message est conservé. Vous pouvez me demander de reprendre — aucune relance automatique.
```

### Phase 2 Nora preview (après lectures)
```text
J’ai avancé sur ce travail, mais je n’ai pas pu livrer une restitution complète et fiable sur ce tour.
Lectures effectuées :
• Document · CONSULTED — Note qualification Orion (synthétique)
• Document · CONSULTED — Note qualification finale Orion (LIVE Nora)
Sources découvertes non ouvertes :
• Document · DISCOVERED — Capacité Orion B [syn-contradict-b]
• Document · DISCOVERED — Capacité Orion A [syn-contradict-a]
• Document · DISCOVERED — AUTH-TOKEN TTL [syn-auth-v2]
• Document · DISCOVERED — acquis:acq_5338c606-cc95-457d-b572-33926a1b174e
Aucune conclusion métier n’est affirmée au-delà de ces acquis observés.
Votre message est conservé. Vous pouvez me demander de reprendre — aucune relance automatique.
```

Sources outils (phase 2 count=11): lectures CONSULTED de notes synthétiques ; acquis Capacité Orion A/B et AUTH-TOKEN encore DISCOVERED non ouverts au moment du refus.

**Aucune réponse attendue fournie artificiellement dans le prompt Pilote.**

---

## 4. Cycle complet depuis e784232b (capitalisation)

1. Architecture lock E + migration 027 candidate → **GO A APPLIED**
2. Product-wide wiring hybrid/Decisions/Vision + Frontier families
3. Gate B LIVE Δ9 ≤30 · reconcile familyHttp clone
4. Product qualification PG/API + Playwright smoke + LIVE checkpoint
5. **GO FINAL LIVE Nora** (ce Delivery) — PARTIAL

CONV-F21…F26: F21–F24/F26 conservés ; **F25 PARTIAL_LIVE**.

---

## 5. Tests / non-régression (inchangés + scripts)

| Item | Statut |
|---|---|
| Unit ml2 prior | 51 PASS (cycle qualification) |
| Playwright smoke | 2/2 PASS prior |
| Parcours PG/API | PASS prior |
| FINAL LIVE scripts | exécutés · consolidated report |
| Flags OFF | démontré `.env.local` |
| RECETTE | non modifiée |

---

## 6. Décisions & réserves (Exit)

1. HTTP GO respecté (+7≤18) — **OK**
2. Tokens GO **non respecté** (+82417>38000) — réserve majeure / STOP
3. Famille embeddings saturée — réserve produit (budget famille trop serré pour search sémantique D4 sous flag ON)
4. Restitution Nora COMPLETE non livrée — F25 PARTIAL
5. Flags OFF · 027 intact · Macro-lot 3 **non engagé**
6. NO RELEASE / NOT ADOPTED / R6 NOT STARTED / R5 IN PROGRESS / ML5 OPEN

---

## 7. Fake / Real matrix (LIVE GO)

| Capacité | Mode |
|---|---|
| Hybrid search | REAL LIVE embed + REAL PG |
| Nora cognitive turn | REAL LIVE Responses + D4 tools |
| Document conserve/revise | REAL PG (no provider) |
| Vision this GO | NOT RUN (skipped on continue) |
| Spoon-fed oracle answers | **NO** |

---

## 8. ChatGPT mandatory instruction (§9.1 Critical)

ChatGPT doit:

1. Vérifier handoff SHA/blob vs HEAD `9321bcf7` / tree `3af82abd` / BUILD `nzwWNOfltBjOBpaSmv5_q`
2. Qualifier HTTP WITHIN vs TOKENS EXCEEDED — ne pas fusionner les deux plafonds
3. Confirmer STOP après emb family exhaust — pas de poursuite implicite
4. Qualifier F25 PARTIAL (lectures D4 + note 3 revs, restitution incomplete)
5. Trancher acceptation sortie **avec réserves** vs exiger nouveau GO tokens/emb élargi
6. Confirmer NO RELEASE · Macro-lot 3 OUT · flags OFF
7. Contrôler Frontier préflight + clone metrics + protectPersisted

---

## 9. Verdict

**MACRO-LOT 2 — PRODUCT QUALIFICATION COMPLETE WITH RESERVES — LIVE NORA PARTIAL — MORRIS EXIT ACCEPTANCE PROPOSED**

R5 IN PROGRESS / ML5 OPEN. R6 NOT STARTED. Macro-lot 3 non engagé. NO RELEASE / NOT ADOPTED.
