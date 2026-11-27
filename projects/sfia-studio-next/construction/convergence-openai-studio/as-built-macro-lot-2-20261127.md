# As-built — Macro-lot 2 (Intelligence documentaire) — Product qualification

| Champ | Valeur |
|---|---|
| Campagne | `ml2-i2-docintel-20261127` (cumulative, non renouvelée) |
| Architecture | [architecture-selection-locked-20261127.md](./ml2-qualification/architecture-selection-locked-20261127.md) |
| Cartographie | [product-consumer-cartography-20261127.md](./ml2-qualification/product-consumer-cartography-20261127.md) |
| Migration 027 | **APPLIED DEV** — [migration-027-candidate.md](./ml2-qualification/migration-027-candidate.md) |
| Checkpoint A+B | [morris-checkpoint-027-and-live-20261127.md](./ml2-qualification/morris-checkpoint-027-and-live-20261127.md) · GO A+B exécuté |
| Gate B plan/report | [live-gate-b-emission-plan-20261127.md](./ml2-qualification/live-gate-b-emission-plan-20261127.md) · evidence `gate-b-report.json` |
| Frontier reconcile | [gate-b-frontier-reconciliation-20261127.md](./ml2-qualification/gate-b-frontier-reconciliation-20261127.md) — Δ HTTP = Δ familles = **+9** |
| LIVE checkpoint | [live-checkpoint-post-gate-b-20261127.md](./ml2-qualification/live-checkpoint-post-gate-b-20261127.md) — **GO Morris exécuté** |
| FINAL LIVE Nora | evidence `final-live-nora/` · HTTP **106**/236 (Δ+7/18 WITHIN) · tokens Δ **+82417**/38000 **EXCEEDED** · STOP emb 12/12 |
| Reliquat LIVE | HTTP **106**/236 · embeddings family **exhausted** · flags OFF |
| FinOps audit | [finops-reconcile-audit-20261127.md](./ml2-qualification/finops-reconcile-audit-20261127.md) |
| WEB LIVE | OFF |
| RECETTE | protégée :3200/:5434 |
| Candidat | BUILD_ID `nzwWNOfltBjOBpaSmv5_q` · digest `37fc2653…` · DEV pid 77388 |

## Livrables code (product raccordements + qualification)

| Module / surface | Rôle |
|---|---|
| `derived-embedding-index.ts` | Index fichier local + lifecycle (tests `BACKEND=file`) |
| `derived-embedding-service.ts` | Rebuild admissible-only · **upsert produit** · hybrid + rights/fp revalidation · Frontier-bound client |
| `derived-embedding-pg.ts` | `replaceDerivedChunksPg` (rebuild) · **`upsertDerivedChunkPg`** (lifecycle) |
| `knowledge/service` | capitalize/openPoint → upsert ; supersede → revoke ; `selectRelevantKnowledgeContext` hybrid supplement |
| `derived-embedding-pg.ts` | Store PG ops (`BACKEND=pg`) |
| `hybrid-knowledge-search.ts` | Fusion + `allowedSourceIds` |
| `bounded-judgment.ts` | Validation stricte · pas p=1 inventé · fallback p=0 |
| `document-vision-punctual.ts` | Vision ponctuelle bytes locaux |
| `d4-read-tools.searchProjectResources` | ADAPT semanticSupplement (flag) |
| `journal/search` API | ADAPT queryVector embed (flag) |
| `knowledge/service.capitalizeAcquis` | revoke superseded in derived index |
| `git-read-tools.read_git_pdf` | Vision scan/sparse/schema + Frontier client |
| `d8-cognitive-criterion-eval` | Bounded judgment via Frontier client |
| Frontier | `getCampaignEnvelopeMetrics` **deep-clone** `familyHttp` ; protect générique |
| Flags OFF by default | `SFIA_DERIVED_EMBEDDING_SEARCH`, `SFIA_BOUNDED_JUDGMENT`, `SFIA_DOCUMENT_VISION_PUNCTUAL` |

## Persistance

- **Ops unique:** PostgreSQL `derived_embedding_chunks` (`SFIA_DERIVED_EMBEDDING_BACKEND=pg`)
- Fichier : hors chemin opérationnel (tests unitaires `BACKEND=file` seulement)
- Index ≠ vérité métier · droits via D4/D9 revalidation (re-read + fingerprint)
- Backup pre-027 : `.sfia-evidence/db-backups/sfia_next_dev_pre_027_*.dump`

## Qualification fonctionnelle intégrée DEV

| Surface | Preuve | Fake/Real |
|---|---|---|
| Journal + droits + foreign deny | `ml2-product-parcours-qualify.mts` | REAL PG |
| Hybrid + rightsRevalidated | parcours stub embed | SUBSTITUTED embed + REAL PG |
| Revoke opposable + restore | parcours | REAL PG |
| Cognitive workId + checkpoint | `cgw_4dc5ec02…` rev 2 | REAL PG |
| Document create + revise versions | `doc_51e6a868…` 2 revs | REAL PG |
| Browser login→portfolio + journal API | Playwright smoke 2/2 | REAL Chromium :3100 |
| Gate B LIVE | prior report Δ9 | REAL LIVE (no new emit) |
| Nora LIVE investigation→note | **attente GO** checkpoint ≤18 | NOT RUN this cycle |

## CONV-F21…F26

| ID | Statut | Preuve |
|---|---|---|
| F21 | PASS_WITH_RESERVE | LIVE 12/12 + module fallback ; AMB residual |
| F22 | PASS_ARCHITECTURE_E | Lexical + emb PG ; VS DEFER |
| F23 | PASS_PG_INDEX | Unit lifecycle + fingerprint revalidation + revoke ; 027 APPLIED |
| F24 | PASS | LIVE Vision 6/6 ; product Vision wired behind flag |
| F25 | PARTIAL_LIVE | Nora LIVE search+read+note/revise PROVEN ; restitution COMPLETE not achieved (emb family + token GO) |
| F26 | PASS_ATTRIBUTED | Ledger + reconcile ; product ops record on rebuild |

## Hors scope / réserves

- Activation permanente flags OFF jusqu'à décision Morris
- Nouvelle émission LIVE sans GO explicite sur enveloppe ≤18
- Macro-lot 3
- NO RELEASE / NOT ADOPTED
