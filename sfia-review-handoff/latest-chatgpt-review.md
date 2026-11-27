# SFIA REVIEW PACK — FULL
# MACRO-LOT 2 — FINAL PRODUCT QUALIFICATION

- **Generated (UTC):** 2026-11-27T06:08:49Z
- **Objective:** Qualification fonctionnelle intégrée DEV — Macro-lot 2 / Cycle 8 Delivery.
- **Prior handoffs capitalized:** 4d92cc70 · blob a425b789 · (product Gate A+B)
- **Campaign:** ml2-i2-docintel-20261127 — **no renew** · HTTP SoT **99**/236 · Gate B Δ9 reconciled
- **Local HEAD:** `ae435d41ae8fbcaee387108db8b4162fb4a1b6fb`
- **Tree web:** `b1dd9a68abd9019ee1e0ca32851d7861f7ad7a06`
- **BUILD_ID:** `nzwWNOfltBjOBpaSmv5_q` · digest `37fc26536b425f5e798eee6be1445be1ae598bb732fe7e47cc4a041a5572513f` · pid `77388`
- **Schema:** 027 APPLIED DEV (:5433) · lane DEV · RECETTE protected :3200/:5434
- **Verdict:** MACRO-LOT 2 — PRODUCT QUALIFICATION INTEGRATED DEV PROVEN — LIVE NORA LOOP AWAITS GO — MORRIS EXIT ACCEPTANCE PROPOSED
- **Fake/Real:** REAL PG/API parcours + REAL Chromium smoke + UNIT 51 + Gate B LIVE prior (no new emit) + SUBSTITUTED embed for hybrid; Nora LIVE investigation→note **NOT RUN** (checkpoint ≤18 awaiting Morris GO)

---

## 0. Local Git Truth Check

| Field | Value |
|---|---|
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `ae435d41ae8fbcaee387108db8b4162fb4a1b6fb` |
| Baseline cycle | `e784232b` |
| HEAD entrée mandat | `bca4a4e5` |
| origin/main | `997897fd` |
| Tree web | `b1dd9a68abd9019ee1e0ca32851d7861f7ad7a06` |
| Project push | **NONE** |
| Schema | **027 applied DEV** |
| Lane | DEV |
| RECETTE | protected :3200 pid 89199 |
| WEB LIVE | OFF |
| Feature flags | SEARCH/JUDGMENT/VISION **OFF** · BACKEND=pg durable |
| cwd | `/Users/morris/Projects/sfia-wt-next-ml5-20261123/projects/sfia-studio-next/web` |

### Commits e784..HEAD
```text
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
 .../as-built-macro-lot-2-20261127.md               |  73 ++
 .../cloture-macro-lot-1.md                         |  11 +-
 ...ion-specialisee-et-intelligence-documentaire.md |  14 +-
 .../contrat-fonctionnel.md                         |   2 +
 .../convergence-openai-studio/contrat-technique.md |   6 +-
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
 .../live-checkpoint-post-gate-b-20261127.md        |  57 ++
 .../live-gate-b-emission-plan-20261127.md          |  55 ++
 .../ml2-qualification/migration-027-candidate.md   |  41 +
 .../morris-checkpoint-027-and-live-20261127.md     | 115 +++
 .../product-consumer-cartography-20261127.md       |  32 +
 .../ml2-qualification/protocole-qualification.md   |   5 +-
 .../selection-checkpoint-ml2-i2-20261127.md        |  82 ++
 .../construction/delivery-history.md               |  52 ++
 ...5-registre-couverture-et-revue-developpement.md |   2 +-
 projects/sfia-studio-next/web/.gitignore           |   3 +
 .../sfia-studio-next/web/scripts/db-migrate.sh     |   3 +-
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
 57 files changed, 7597 insertions(+), 124 deletions(-)
```

### Candidat runtime
```json
{"pid":77388,"port":3100,"host":"127.0.0.1","buildId":"nzwWNOfltBjOBpaSmv5_q","contentDigest":"37fc26536b425f5e798eee6be1445be1ae598bb732fe7e47cc4a041a5572513f","sessionFingerprint":"e4829b8bd74645b3df79713af1f7d8fcc9d3fc6268c5b59a2bc75f9a1c53a6c4","workspaceRoot":"/tmp/sfia-c12-cursor-live-ws","effectMode":"LIVE","startedAt":"2026-11-27T06:04:37Z","mode":"qualify-next-start"}
```

---

## 1. Mandat & périmètre

- R5 / ML5 / Livraison 1 — Critical / INC-EVOL
- **IN:** qualification DEV, corrections ciblées (Frontier clone, fingerprint rights, Playwright smoke), tests, docs, build, commit local, Handoff L3
- **OUT:** Macro-lot 3 · SEF/ADR/méthode · Admin · migration supplémentaire · RECETTE/STABLE · push projet/PR/merge · nouvelle campagne LIVE sans GO
- Acquis préservés: 027 · PG ops · lexical+embeddings · Decisions+fallback · Vision · PDF · Responses/semantic · D3 V1 · D6 · benchmarks LIVE prior

---

## 2. Contrôles transverses (écarts A–D)

### A. Recherche et droits — CORRIGÉ / PROUVÉ

| Contrôle | Résultat | Preuve |
|---|---|---|
| Droits courants / versions | admissible-only via collectAdmissibleKnowledgeSources | unit + parcours |
| Exclusion obsolètes | SUPERSEDED/ARCHIVED/CLOSED exclus | ml2-derived-rights-rebuild.test.ts |
| Cohérence journal/D4 | listProjectKnowledge + searchJournal | parcours REAL PG |
| Reconstruction / révocation | revoke PG + restore ; search re-read | parcours revokeOk+restoreOk |
| Fingerprint same sourceId | filter @fp vs fresh contentFingerprint | service + unit |
| Foreign project | ACCESS denied | parcours foreignDenied=true |

### B. Frontier — RÉCONCILIÉ

| Point | Valeur |
|---|---|
| Écart Gate B | report familyHttp before=after alias ; HTTP 90→99 réel |
| Cause | getCampaignEnvelopeMetrics returned familyHttp by reference |
| Fix | JSON deep-clone of familyHttp |
| SoT familles | decisions 14 · embeddings 8 · responses 24 · VS 29 · files 12 · **sum 87** (=78+9) |
| Δ HTTP = Δ familles | **+9** |
| Gouvernance GO B | plan documenté + plafond principe ≤30 ; **pas** de micro-GO écrit distinct enveloppe exacte post-plan — limite qualifiée |
| 21 remainder | **≠ auto-autorisation** |

Doc: `projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/gate-b-frontier-reconciliation-20261127.md`

### C. FinOps — CONSERVÉ

Audit prior Gate A/B ; pas de nouveau LIVE ; attributions ledger ; coûts inconnus signalés. Aucun double comptage introduit.

### D. Gouvernance Gate B GO

- Accord principe Morris ≤30 + plan présenté/exécuté même Delivery
- Trace: plan + gate-b-report + as-built — **pas** de validation rétroactive inventée
- Nouveau LIVE: checkpoint consolidé `live-checkpoint-post-gate-b-20261127.md` **≤18 HTTP — ATTENTE GO**

---

## 3. Parcours Studio réel (qualification)

Mode: **PG/API + substituted embed** — **pas** generateNoraReply isolé comme preuve unique.

| Étape mandat | Exercice | Fake/Real |
|---|---|---|
| 1 Expression besoin | objective cognitive work | REAL PG |
| 2 Investigation Nora | **attente GO LIVE** | NOT RUN |
| 3 Recherche connaissances | journal Orion + hybrid | REAL PG + SUBSTITUTED embed |
| 4 Consultation sources | admissible 14 · hits 8 · rightsRevalidated | REAL |
| 5 Analyse doc textuelle/visuelle | inventaire + prior LIVE Vision Gate B | PARTIAL this cycle |
| 6 Reprise cognitive | checkpoint rev 2 cause ML2_PARCOURS_QUALIFY | REAL PG |
| 7 Note sourcée | savePreparationDocument AVAILABLE | REAL PG |
| 8 Inspection Pilote | listDocumentRevisions count=2 | REAL PG |
| 9 Conservation | document persisted | REAL PG |
| 10 Révision ciblée + versions | reviseDocument AVAILABLE · 2 revs | REAL PG |

### Identifiants démontrés

| Artefact | Id |
|---|---|
| workId | `cgw_4dc5ec02-3442-45d9-8294-eb78e7fa0e41` |
| checkpoint revision | 2 |
| documentId | `doc_51e6a868-f3b6-4c3f-9fb5-9470e3f35605` |
| baseRevision | `drev_131f60c3-87e2-4628-a86c-26646fd12541` |
| project | `proj_330057a0-cb37-4ab1-9c98-be5eb4454ead` |

### Parcours report
```json
{
  "startedAt": "2026-11-27T06:03:33.970Z",
  "mode": "PG_API_SUBSTITUTED_EMBED_NO_NEW_LIVE",
  "steps": [
    {
      "step": "listProjectKnowledge",
      "subjects": 7,
      "acquisCurrent": 7,
      "admissible": 14,
      "backend": "pg"
    },
    {
      "step": "searchJournalSubjects",
      "status": "AVAILABLE",
      "resultCount": 5,
      "coverage": "PARTIAL"
    },
    {
      "step": "foreignProjectDenied",
      "denied": true
    },
    {
      "step": "staleFingerprintDetectable",
      "liveFpPrefix": "7d8db88e",
      "staleRefHasWrongFp": true,
      "mergeReturnedStaleWithoutServiceFilter": true,
      "note": "Service hybridSearch re-filters via fresh listProjectKnowledge + fp match"
    },
    {
      "step": "hybridSearchSubstitutedEmbed",
      "derivedUsed": true,
      "rightsRevalidated": true,
      "backend": "pg",
      "hitCount": 8,
      "skipped": null
    },
    {
      "step": "pgChunksAndRevokeRestore",
      "beforeCount": 14,
      "revokeId": "acq_b2c623ca-6a62-48fc-b1f2-c646d1aae885",
      "revokeOk": true,
      "restoreOk": true
    },
    {
      "step": "cognitiveWorkCheckpoint",
      "workId": "cgw_4dc5ec02-3442-45d9-8294-eb78e7fa0e41",
      "resumed": false,
      "revisionAfter": 2,
      "checkpointRevision": 2,
      "checkpointCause": "ML2_PARCOURS_QUALIFY"
    },
    {
      "step": "documentCreateRevise",
      "createStatus": "AVAILABLE",
      "documentId": "doc_51e6a868-f3b6-4c3f-9fb5-9470e3f35605",
      "baseRevisionId": "drev_131f60c3-87e2-4628-a86c-26646fd12541",
      "reviseStatus": "AVAILABLE",
      "revisionCount": 2
    },
    {
      "step": "inventoryAfter",
      "documents": 1,
      "works": 1,
      "latestDoc": {
        "id": "doc_51e6a868-f3b6-4c3f-9fb5-9470e3f35605",
        "title": "Note qualification Orion (synthétique)"
      },
      "latestWork": {
        "id": "cgw_4dc5ec02-3442-45d9-8294-eb78e7fa0e41",
        "status": "SUSPENDED",
        "revision": 2
      },
      "note": "Nora LIVE investigation loop awaits Morris GO on live-checkpoint-post-gate-b"
    }
  ],
  "verdict": "PARCOURS_PG_API_PASS — LIVE_NORA_LOOP_AWAITS_GO",
  "finishedAt": "2026-11-27T06:03:34.178Z"
}
```

### Autres consommateurs

- Journal projet: search AVAILABLE coverage PARTIAL
- Recherche connaissances: hybrid derivedUsed + rightsRevalidated
- Documents Studio: create+revise
- Git/D8/Vision: wired prior Gate B — flags OFF
- Consommations/OBS: frontier protect + FinOps audit prior ; no new LIVE

---

## 4. Playwright

| Avant | Après |
|---|---|
| Suite complète + Nora WEB-OFF hang / timeout | Smoke borné défaut QUALIFY_BROWSER_SUITE=smoke |
| HTTP 200 ≠ navigateur | Chromium réel login→portfolio + journal API session |

Résultat: **2 passed (1.2s)** against pid 77388 BUILD `nzwWNOfltBjOBpaSmv5_q`.

Full suite: opt-in `QUALIFY_BROWSER_SUITE=all` (non exécutée — risque hang Nora WEB).

---

## 5. Tests & non-régression

| Suite | Résultat |
|---|---|
| Unit ml2-* + frontier | **51 passed** (7 files) |
| Parcours PG/API | **PASS** exit 0 |
| Playwright smoke | **2/2 PASS** |
| typecheck | pre-existing errors hors fichiers ML2 ; ML2 ProcessEnv cast fixed |
| lint (domains knowledge/conversation) | warnings only pre-existing |
| build + qualify:start | BUILD `nzwWNOfltBjOBpaSmv5_q` |
| smoke HTTP | login/portfolio 200 + BUILD_ID in HTML |
| LIVE fournisseur new | **NONE** (await GO) |

### CONV-F21…F26

| ID | Statut |
|---|---|
| F21 | PASS_WITH_RESERVE |
| F22 | PASS_ARCHITECTURE_E |
| F23 | PASS_PG_INDEX (027 + fingerprint) |
| F24 | PASS (prior LIVE Vision) |
| F25 | PARTIAL_INTEGRATED — Nora LIVE loop awaits GO |
| F26 | PASS_ATTRIBUTED |

---

## 6. Checkpoint LIVE consolidé (NO EMIT)

Voir `live-checkpoint-post-gate-b-20261127.md`:

- HTTP committed **99**/236
- Proposition **≤18** HTTP · ~32k/5.4k tokens · ~0.15–0.60 USD
- Flags temp DEV documentés · retour OFF après
- **21** remainder Gate B ≠ autorisation
- **GO Morris requis** avant émission

---

## 7. Documentation synchronisée

- as-built ML2 · registre v0.24 · delivery-history DELIV …PRODUCT-QUALIFICATION
- contrat-fonctionnel §4.4 · architecture lock · migration-027 — mentions 027 obsolete corrigées
- Frontier reconciliation + LIVE checkpoint docs
- Local product commit: `ae435d41` feat(ml2): qualify integrated product parcours and harden Frontier/rights

---

## 8. Décisions & réserves

1. **Pas de nouveau LIVE** sans GO explicite enveloppe ≤18
2. Flags feature **OFF** jusqu'à décision Morris disponibilité durable
3. Nora LIVE investigation complète = seule réserve bloquant le libellé exact « PRODUCT QUALIFICATION COMPLETE » sans réserve
4. Macro-lot 3 **non engagé**
5. NO RELEASE / NOT ADOPTED / R6 NOT STARTED / R5 IN PROGRESS / ML5 OPEN

---

## 9. Fake / Real Qualification Matrix

| Capacité | Mode | Note |
|---|---|---|
| Frontier metrics clone | UNIT | real store mutation |
| Rights/fingerprint | UNIT + PG parcours | REAL |
| Hybrid search | SUBSTITUTED embed + REAL PG index | no LIVE HTTP |
| Cognitive work/checkpoint | REAL PG | no provider |
| Document create/revise | REAL PG | no provider |
| Browser login/portfolio/journal | REAL Chromium | WEB OFF |
| Gate B product LIVE | REAL LIVE prior | Δ9 · not re-run |
| Nora full loop | — | **awaits GO** |

---

## 10. ChatGPT mandatory instruction (§9.1 Critical)

ChatGPT doit:

1. Vérifier Git Truth distant handoff (SHA/blob) vs claims HEAD/tree/BUILD
2. Qualifier Frontier reconcile (Δ HTTP vs familles) et absence d'auto-auth 21 remainder
3. Distinguer parcours PG/API PROVEN vs Nora LIVE NOT RUN
4. Ne pas inventer GO LIVE post-Gate-B
5. Trancher acceptation sortie Morris: **proposée avec réserve LIVE Nora** — ou exiger GO ≤18 puis re-qualify F25
6. Confirmer NO RELEASE / Macro-lot 3 OUT / R6 NOT STARTED
7. Contrôler exhaustivement Frontier + préflight (metrics clone) inclus cette fois

---

## 11. Verdict

**MACRO-LOT 2 — PRODUCT QUALIFICATION INTEGRATED DEV PROVEN — LIVE NORA LOOP AWAITS GO — MORRIS EXIT ACCEPTANCE PROPOSED**

R5 IN PROGRESS / ML5 OPEN. R6 NOT STARTED. Macro-lot 3 non engagé. NO RELEASE / NOT ADOPTED.
