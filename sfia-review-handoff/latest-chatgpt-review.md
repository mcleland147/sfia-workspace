# SFIA Review Pack — AKG-M5 P0 POST-MERGE TRUTH SYNC + TRAJECTORY REQUALIFICATION
## FULL MONO-CYCLE — STANDARD — Cycle 14 Post-Merge — GO Morris P0 DOCUMENTARY ONLY

## A. Horodatage
- UTC: 2026-10-26T06:43:28Z
- Europe/Paris: 2026-10-26T07:43:28+0100

## B. GO Morris P0
- AUTHORIZED: Local Documentary Post-Merge Truth Sync + Trajectory Requalification L2/L3 + Review Pack FULL + Handoff L3 borné
- NOT AUTHORIZED / NOT CONSUMED: project commit · project branch push · PR create/edit · merge · branch delete · Delivery L2/L3 · G-ACTIVATION · G-REAL · H4 live · Cursor REAL · D1/OPS1 deletion · architecture pivot · runtime v3 ADOPTED · AKG-M5 global close
- RECOMMENDATION ≠ DÉCISION: Options A/B soumis à Morris après Critical Review

## C. Git Truth

| Item | Value |
|---|---|
| Worktree authoring | /Users/morris/Projects/sfia-workspace-docs-akg-m5-postmerge-convergence-p0 |
| Branch locale (no push) | docs/akg-m5-postmerge-convergence-p0 |
| Base | origin/main = fec4e65d1c8437f15fc6cf8ea81376d655c79394 |
| PR #618 | MERGED 2026-10-26T05:01:23Z · mergeCommit = main tip |
| Parents | 7db8afd7c27720712f08000274dbbc4e1a62d935 + ffc033a7b69bbf37b2834b999bb621d3c3465f7a |
| Post-merge CI | 40272048259 SUCCESS on merge SHA |
| Prior handoff | a7be7627f7c0efc4bbf7f225be093eaafc630e76 |
| Feature WT historique | feat/akg-m5-remove-repository-binding-docs-write @ ffc033a7 non modifié pour ce P0 |
| Staged | empty |
| Scope | DOC-only (Roadmap + PRR + manifest digests) · aucun Product/source/test |

## D. Sources / Convergence Pre-check
- Template / routing / operating model / guardrails / CKC Cycle 14
- Build Doctrine · Roadmap · C1 · AKG README · M5-A blueprint 01 · L1 pack 02 · Formal Exit 03 · L2-D0 04
- Doctrine v3 framing 32/33/34/35/37 (read-only)
- Generic Execution architecture (read-only)
- PRR README + vols 01–09 + manifest
- Git proofs: PR #609/#611/#612/#614/#617/#618 + CI post-merge #40272048259
- Code spot-check @ fec4e65d: CreateProject no repositoryBinding · has projectWorkspaceKey · exclusive default OFF (.env.example commented =0)

Convergence: AKG-M5 OPEN · O-01 · Milestone = Post-merge Structural Removal #618 · M5-A CLOSED · L1–L2 Delivery on main · L2 ops NOT ACTIVATED · L3 Delivery NOT STARTED · runtime v3 NON ADOPTED · v2.6 process

## E. Inventaire fichiers effectivement modifiés
```
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M	projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M	projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
M	projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
M	projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/README.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```
```
.../convergence/sfia-studio-convergence-roadmap.md |  5 +-
 .../02-runtime-object-catalog.md                   | 20 +++----
 .../03-end-to-end-flow-catalog.md                  | 20 +++----
 .../04-dependency-impact-map.md                    |  8 +--
 ...05-environments-configuration-and-boundaries.md | 14 ++---
 .../06-persistence-restart-and-recovery.md         |  8 +--
 .../07-authority-invariants-and-failure-modes.md   | 14 ++---
 .../08-test-proof-and-conformance-map.md           | 29 ++++-----
 ...9-known-gaps-reserves-and-current-boundaries.md | 68 +++++++++-------------
 .../production-runtime-reference/README.md         | 19 +++---
 .../production-runtime-reference.manifest.json     | 18 +++---
 11 files changed, 106 insertions(+), 117 deletions(-)
```
- Volume 01 READ-ONLY (digest unchanged 8bfbcb286b053f04)
- lastReviewedCommit / lastReviewedAt non modifiés (ne prétendent pas un audit corpus complet)

## F. Diffs complets (tous fichiers modifiés)

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 79a4d19a..b3d7512c 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,8 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **CURRENT TIP 2026-10-26 — AKG-M5 PR #618 — PROJECT GIT INTEGRATED / CI SUCCESS / R24 DOCUMENTARY TRUTH SYNC LOCAL** | **GO MORRIS Git Integration consommé** · commit `a75d0ed5785861dd198894ea1c5d7436b6d1840c` (`refactor(studio): retire Product repository binding and docs_write admission`) **poussé** FF sur `feat/akg-m5-remove-repository-binding-docs-write` · **63 fichiers** (60 M + 3 A KEEP) · quatre helpers orphelins docs_write **absents** · Review Pack **exclu** du commit · Draft [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) **OPEN / DRAFT / NOT MERGED** · base `origin/main` `7db8afd7` · [CI #40258385791](https://github.com/mcleland147/sfia-workspace/actions/runs/40258385791) **COMPLETED / SUCCESS** (Detect · Build and validate · **Required Gate** · event=`pull_request` · HEAD=`a75d0ed5`) · local attesté: typecheck/lint/build PASS · CI-44 639 PASS · `CI=true npm test` **6013 PASS / 142 skipped** · Critical Review post-push **PASS WITH RESERVES** · code RETIRE **sur branche candidat seulement** — **PAS sur main** · **Cycle 13 R24 documentary truth-sync LOCAL** (Roadmap + PRR README + PRR 09 + manifest digests) · **≠** ce tip = intégration de sa propre correction R24 · **≠ MERGED ON MAIN** · **H4 / REAL / G-ACTIVATION NOT GRANTED** · **AKG-M5 GLOBAL OPEN** · runtime v3 **NON ADOPTED** · next = ChatGPT Critical Review documentaire → GO distinct commit/push R24 → nouveau Required Gate → GO merge distinct → post-merge truth-sync. |
+| **CURRENT TIP 2026-10-26 — AKG-M5 PR #618 — MERGED ON MAIN / POST-MERGE CI SUCCESS / STRUCTURAL REMOVAL CURRENT** | **GO Morris undraft + merge consommé** · [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) **MERGED** `2026-10-26T05:01:23Z` · merge commit **`fec4e65d1c8437f15fc6cf8ea81376d655c79394`** · parents **`7db8afd7c27720712f08000274dbbc4e1a62d935`** + **`ffc033a7b69bbf37b2834b999bb621d3c3465f7a`** · `origin/main` = merge SHA · [post-merge CI #40272048259](https://github.com/mcleland147/sfia-workspace/actions/runs/40272048259) **COMPLETED / SUCCESS** (Detect · Build and validate · **Required Gate** · event=`push` · branch=`main` · HEAD=merge) · Product **RepositoryBinding RETIRED ON MAIN** · Product **docs_write admission RETIRED ON MAIN** · code Product `a75d0ed5` + R24 docs `ffc033a7` **ancêtres de main** · **PRESERVED:** `projectWorkspaceKey` / `projects/<key>` · Generic PREPARE / ExecutionContract / AES / Cursor generalist · Evidence / ReviewBundle · sealed Git identity (seal-only env; residual `repositoryBindingIdentity` naming) · KEEP helpers · feature branch **conservée** @ `ffc033a7` (no delete) · **≠** H4 QUALIFIED · **≠** G-REAL · **≠** G-ACTIVATION · exclusive **DEFAULT OFF** · runtime v3 **NON ADOPTED** · REAL **NOT PROVEN** · P6 GLOBAL **NOT PASSED** · **AKG-M5 GLOBAL OPEN** · KNOWN GAPS (PRR 09): Product E2E FS→Git→Review partielle · FS→SHA Evidence historical-only · worktree layout · residual naming · Q12 / R-CUT LIVE · P0 documentary truth-sync = **LOCAL AUTHORING CANDIDATE** (this tip) · **≠** project GI of this P0 · next = ChatGPT Critical Review → Morris GO GI documentaire P0 → puis arbitrage **Option A (finir L2)** vs **Option B (avancer L3)** — **aucune option adoptée ici**. |
+| **HISTORICAL TIP 2026-10-26 — AKG-M5 PR #618 — PROJECT GIT INTEGRATED / CI SUCCESS / R24 DOCUMENTARY TRUTH SYNC LOCAL (PRE-MERGE)** | **HISTORICAL AS TIP** (superseded as CURRENT by PR #618 MERGED / post-merge CI SUCCESS tip) — accurate for pre-merge Git-integrated candidate + R24 local sync · **GO MORRIS Git Integration consommé** · commit `a75d0ed5785861dd198894ea1c5d7436b6d1840c` (`refactor(studio): retire Product repository binding and docs_write admission`) **poussé** FF sur `feat/akg-m5-remove-repository-binding-docs-write` · **63 fichiers** (60 M + 3 A KEEP) · quatre helpers orphelins docs_write **absents** · Review Pack **exclu** du commit · Draft [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) **OPEN / DRAFT / NOT MERGED** · base `origin/main` `7db8afd7` · [CI #40258385791](https://github.com/mcleland147/sfia-workspace/actions/runs/40258385791) **COMPLETED / SUCCESS** (Detect · Build and validate · **Required Gate** · event=`pull_request` · HEAD=`a75d0ed5`) · local attesté: typecheck/lint/build PASS · CI-44 639 PASS · `CI=true npm test` **6013 PASS / 142 skipped** · Critical Review post-push **PASS WITH RESERVES** · code RETIRE **sur branche candidat seulement** — **PAS sur main** · **Cycle 13 R24 documentary truth-sync LOCAL** (Roadmap + PRR README + PRR 09 + manifest digests) · **≠** ce tip = intégration de sa propre correction R24 · **≠ MERGED ON MAIN** · **H4 / REAL / G-ACTIVATION NOT GRANTED** · **AKG-M5 GLOBAL OPEN** · runtime v3 **NON ADOPTED** · next = ChatGPT Critical Review documentaire → GO distinct commit/push R24 → nouveau Required Gate → GO merge distinct → post-merge truth-sync. |
 | **HISTORICAL TIP 2026-10-25 — AKG-M5 PR #618 CYCLE 8 CRITICAL CI SEMANTIC RECONCILIATION (LOCAL)** | **HISTORICAL AS TIP** (superseded as CURRENT by PROJECT GIT INTEGRATED / CI SUCCESS tip) — **GO MORRIS 2026-10-25 Cycle 8** · **LOCAL CORRECTIVE ONLY** on Draft [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) · branche `feat/akg-m5-remove-repository-binding-docs-write` · base `origin/main` `7db8afd7` · **HEAD projet alors** `ff653b58` · **aucun commit/push projet à cette date** · RepositoryBinding / docs_write Product admission **non restaurés** · GitHub CI corrective `40215089725` **FAILURE** (160 FAIL / 44 suites) · Cycle 8 local: P0 effect-gated profiles + sealed-git adversarial Start + FakeDocsWrite DET under AKG-M5 naming · P1/P2 obsolete Binding/docs_write oracles ADAPTED · PRR/Roadmap LOCAL CANDIDATE sync · local Vitest of the 44 + typecheck/lint/build as recorded in Review Pack · **≠ GitHub CI PASS** (no new push *at that date*) · PR **DRAFT / NOT MERGED** · **H4 / G-REAL / G-ACTIVATION NOT GRANTED** · **AKG-M5 OPEN** · runtime v3 **NON ADOPTED** · **≠** REAL · (later superseded by Git Integration `a75d0ed5` + CI `40258385791` SUCCESS). |
 | **HISTORICAL TIP 2026-10-25 — AKG-M5 LOCAL DELIVERY — CORR-02 Git target fidelity on structural removal** | **DECIDED BY MORRIS 2026-10-25** · **LOCAL IMPLEMENTED** · **PENDING REVIEW** · **PENDING GIT INTEGRATION** · **NOT MERGED** — branche `feat/akg-m5-remove-repository-binding-docs-write` (Delivery locale non intégrée, au-dessus de `origin/main` `7db8afd7c27720712f08000274dbbc4e1a62d935`) ; **RepositoryBinding RETIRED IN LOCAL DELIVERY** (CreateProject sans `repositoryBinding` ; `SFIA_STUDIO_PROJECT_REPOSITORY_*` retirés du preflight et de `.env.example`) ; **docs_write Product specialization RETIRED IN LOCAL DELIVERY** (admission Product `intentKind` / cap / action retirée des lib + features actifs) ; `projectWorkspaceKey` et routage `projects/<key>` **PRÉSERVÉS** ; **CORR-02 LOCAL CORRECTION** on that structural removal (Git target fidelity) — identity↔remote↔checkout **DET VERIFIED** ; Evidence FS-anchor allowlist tightened to historical `execution_attempt:docs_write` (+ dotted suffix) ; residual stubs removed ; managed resolver requires origin match ; provided remote must match sealed identity (`repository_remote_identity_mismatch` / `managed_repo_identity_mismatch`) ; **NOT MERGED** · **≠** REAL ; O-01 DET **PASS** ; typecheck **PASS** ; **known regressions accepted** ; **H4 / G-REAL / G-ACTIVATION NOT GRANTED** ; **AKG-M5 OPEN** ; runtime v3 **NON ADOPTED** ; `origin/main` `7db8afd7` conserve le binding et l'admission docs_write **historiquement présents sur main** (PR #617 = activation prep, pas ce retrait) ; **≠ MERGED ON MAIN** · **≠** H4 qualifié · **≠** exclusive ACTIVATED · **≠** REAL PROVEN · **≠** P6 GLOBAL PASS. C1 D-PC-09 **NO SEMANTIC IMPACT** (historical text not rewritten). Superseded as CURRENT tip by PR #618 CI Reconciliation entry above. |
 | **HISTORICAL TIP 2026-10-24 — AKG-M5 L2-D2 POST-MERGE VERIFIED (PR #614)** | **HISTORICAL AS TIP** (superseded as CURRENT by the 2026-10-25 LOCAL Delivery tip) — truth sync : [PR #617](https://github.com/mcleland147/sfia-workspace/pull/617) **MERGED** 2026-10-25 on main for **L2-D2 activation prep** (S1–S4) · source `cdc9909d8adaa6b31df3b75e33e58a8d27c88317` · merge `7db8afd7c27720712f08000274dbbc4e1a62d935` = `origin/main` · [CI #40169014052](https://github.com/mcleland147/sfia-workspace/actions/runs/40169014052) **COMPLETED / SUCCESS** (Detect, Build and validate, Required Gate · event=push · branch=main · HEAD=merge) · exclusive **DEFAULT OFF / NOT ACTIVATED** · **G-ACTIVATION / G-REAL NOT GRANTED** by #617 · [PR #616](https://github.com/mcleland147/sfia-workspace/pull/616) also **MERGED** `d7aad77e999e4fe64f31a776ddf39c1d99278b1b` (R-01 evidence status) between #615 and #617 · RepositoryBinding / docs_write retirement is **not** in #617 and is **NOT MERGED** — **L2-D2 MERGED ON MAIN / POST-MERGE CI SUCCESS / DEFAULT OFF / NOT ACTIVATED** — [PR #614](https://github.com/mcleland147/sfia-workspace/pull/614) **MERGED** 2026-10-24, source `4647983aa36b76ae393200a7a8caaaed96936149`, merge `1a0ccd846247d8d96c4c6e1258edd739a2bb5d11` = `main` contrôlé ; [CI #40130977607](https://github.com/mcleland147/sfia-workspace/actions/runs/40130977607) **COMPLETED / SUCCESS** (Detect, Build and validate, Required Gate · event=push · branch=main · HEAD=merge) ; GO Morris Delivery + CORR-02 + R24 + Cycle13 digests + G-GIT commit/push/Draft PR **consommés** ; code CURRENT : marker `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` default **OFF** (trim=`"1"` arms fail-closed) · D1 open+mutation guards (injected writers) · confirmation FORBIDDEN→`ok:false` · D4 Option A redirect/notFound · O-01 LPS objective→UI **DET 31/7 PASS** ; **aucun dual-write** · **aucun** `proj-*`→`prj:*` · D1 FREEZE gated / RETIRE LATER (pas de retrait physique) ; **G-ACTIVATION OPEN** · **R-CUT LIVE NOT PROVEN** · D4 LIVE HTTP NOT PROVEN · dette `R-L2D2-SQLITE-SNAPSHOT` OPEN · raw `DatabaseSync` KNOWN GAP · Q15 global PARTIAL ; chronologie L2-D0→L2-D1→L2-D2 conservée ; **AKG-M5 GLOBAL OPEN** · H1 hold ACTIVE · H4/R-VOL-01 OPEN · REAL NOT PROVEN · P6 GLOBAL NOT PASSED · runtime v3 NON ADOPTED ; suite = **G-ACTIVATION PREPARATION sous réserves** (≠ autorisation d'activation) ; Cycle 14 documentary truth-sync [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) **MERGED** on main · merge `7b64ab21aa29211d5fce93d06d24bce539a0c5a5` · [post-merge CI #40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · **NO PRODUCT SEMANTIC IMPACT** · **R-01 exit proof satisfied** · formal closure separate. |
@@ -309,7 +310,7 @@ Observation / Recommendation / Decision Required doivent rester **distincts**.
 | **AKG-M2** Architecture Understanding | Cartes responsabilités / interactions critiques / revue de compréhension | V3-F05 / F06 | AKG-M1 CLOSED + GO understanding | **Lots A/B/C** ownership/authority + critical interactions + understanding review | Lot A Formal Exit · Lot B Formal Exit · Lot C Formal Exit · Critical Re-Review CP01 PASS WITH GOVERNED RESERVES · Exit Matrix X-A…X-L SATISFIED WITH GOVERNED RESERVES · R-M2A-04 OPEN/GOVERNED · R-M2B-03 PASS WITH RESERVE · B-M2B-05 OPEN · G-M1-* governed · RS-03 OPEN · TOOL-FIRST-REAL-NOWRITE OPEN · F18/F19 PARTIAL · F11b INDEX SCOPE non clos · REAL BOUNDARY NOT PROVEN · **AKG-M2 GLOBAL FORMAL MILESTONE EXIT — APPROVED BY MORRIS 2026-10-21** · scope **BOUNDED ARCHITECTURE UNDERSTANDING** · Option **A** · AKG-M3 distinct G5 START | Lot A handoffs `86a2b1e7…` / `34ce3147…` · Lot B handoffs `6bf33c8c…` / `d9ee7f75…` / `b699b716…` · Lot C handoffs `cdb9c5be…` / `435cee9a…` · G1 Decision Record `f46c8bca674439ac84ec0d8f061913ef6d11fc4d` · Field Semantics `df77b8a2…` · PR **#597 MERGED** · CI `39559364932` SUCCESS | Sur-modélisation · confondre Lot C CLOSED avec M2 CLOSED *(résolu par G1 distinct)* · autoriser M3 sans G5 · confondre G1 ADOPTED avec tip INTEGRATED ON MAIN | Lot A/B/C Formal Exit **ADOPTED** · **G1 Formal Milestone Exit APPROVED BY MORRIS / CONSUMED** · **M2 GLOBAL CLOSED BY MORRIS AT BOUNDED SCOPE — G1 ADOPTED** · **R-M2A-04 OPEN/GOVERNED** · **B-M2B-05 OPEN** · AKG-M3 later **CLOSED BY MORRIS** at bounded Reference Consolidation scope (see AKG-M3 row / CURRENT tip) · prior « tip GI PENDING / AKG-M3 NOT AUTHORIZED » = **HISTORICAL AS TIP** | **AKG-M3 sous G5 START distinct** |
 | **AKG-M3** Reference Consolidation | Consolider la PRR ; mesurer couverture | V3-F05 / F12 | AKG-M2 GLOBAL G1 CLOSED BY MORRIS + **G5 M3 START** consommé | PRR CURRENT consolidation · coverage · index/dependencies · Vol09 Known Gaps · semantic conformance | Critères couverture appliqués · gaps gouvernés · Formal Exit **FE-01 ADOPTED** · six FE-02 **FORMALLY CLOSED** · cleanup FE-03 OPEN/DEFER · FE-04 debts preserved | Conformance + revue sémantique + CI post-merge + Decision Record | Tentation 2e référentiel · confondre Formal Exit avec readiness Product/REAL/P6 · confondre FE-02 avec clôture de toutes dettes · démarrer M4 sans GO | **CLOSED BY MORRIS AT BOUNDED REFERENCE CONSOLIDATION SCOPE WITH GOVERNED RESERVES** · G5 START consommé · G6 Semantic PASS · Digest Sync PASS · G7 PASS · PR **#599 MERGED** · merge `d41c6a66…` · CI `39651441205` SUCCESS · documentary truth-sync PR **#600 MERGED** · merge `606f756e…` · CI post-merge **`39729128729` SUCCESS** · checker PRR PASS · E1–E12 qualifiés (E8/E11/E12 SATISFIED) · FE-01–FE-04 ADOPTED · six réserves **FORMALLY CLOSED BY MORRIS FE-02** · cleanup **OPEN/DEFER** · AKG-M4 **NOT AUTHORIZED** · this tip publication = **LOCAL AUTHORING CANDIDATE** | AKG-M4 sous GO Morris M4 distinct (Formal Exit M3 acquis ≠ GO M4) |
 | **AKG-M4** Rationalization Assessment | Matrice KEEP/ADAPT/CONSOLIDATE/REPLACE/RETIRE sur preuves | V3-F05 / F07 | AKG-M3 CLOSED BY MORRIS | Matrice, audits, impact packs, FE | Décisions Morris par lot à portée bornée | T-A01–T-A06, M4A-FE-01–05, [Global Exit 14](./architectural-knowledge-governance/m4-rationalization/14-akg-m4-global-formal-exit-decision-record.md) | A01–A12 dispositions techniques encore candidates, dettes Delivery/REAL OPEN | **AKG-M4 GLOBAL CLOSED BY MORRIS (2026-10-23) AT BOUNDED ASSESSMENT SCOPE WITH GOVERNED OPEN RESERVES** ; aucun GO Product, Delivery, AKG-M5 ou adoption runtime | AKG-M5 sous GO distinct |
-| **AKG-M5** Product Transformation | Product Architecture Convergence documentaire **M5-A CLOSED** ; L1/A09 **MERGED / POST-MERGE VERIFIED** ; transformation Product globale toujours ouverte | V3-F05+ | AKG-M4 GLOBAL CLOSED ; M5-A Formal Exit ; **H0-L1 GRANTED** ; GO commit/push/Draft PR puis **GO Morris merge #609 consommé** | **M5-A** blueprint + L1 pack + Formal Exit 03 sur `main` (PR #607/#608) ; **L1/A09** découplage audit Product VSR/core avec `ProjectCycleAuditPort` ; implémentation D1 conservée transitoirement | M5-A CI post-merge SUCCESS ; L1 **Q1–Q10 PASS LOCAL**, **R-A09-01 PASS TECHNIQUE au périmètre testé** ; CI post-merge #39998468332 **SUCCESS** (Detect/Build/Required Gate) | PR #607 `0e1181ab…` / CI #39973034538 ; PR #608 `56447774…` / CI #39978574740 ; **PR #609 MERGED** `e8e8b5e1…` / CI #39998468332 | Confusion M5-A CLOSED et AKG-M5 GLOBAL OPEN ; assimiler PASS local/CI à REAL, à retrait D1 ou à GO L2 | **M5-A documentaire CLOSED BY MORRIS** ; **L1/A09 MERGED / POST-MERGE VERIFIED** ; D1 adapter et dette L2 conservés ; **AKG-M5 GLOBAL OPEN** ; **L2 NOT GRANTED** ; H1–H5 OPEN ; runtime v3 NON ADOPTED · REAL NOT PROVEN · P6 GLOBAL NOT PASSED | Synchronisation documentaire post-merge L1 (ce lot) → qualification / décision H0-L2 séparée, sans lancement implicite |
+| **AKG-M5** Product Transformation | Product Architecture Convergence **M5-A CLOSED** ; L1/A09 · L2-D0 · L2-D1 · L2-D2 readiness · G-ACTIVATION prep S1–S4 **MERGED** ; **Structural Removal PR #618 MERGED ON MAIN** (`fec4e65d` · CI #40272048259 SUCCESS) — RepositoryBinding + docs_write Product admission **RETIRED ON MAIN** ; `projectWorkspaceKey` + Generic Execution **PRESERVED** ; L2 **ops NOT ACTIVATED** ; L3 Delivery **NOT STARTED** ; L4–L6 **NOT STARTED** ; transformation Product globale **OPEN** | V3-F05+ / O-01 | AKG-M4 GLOBAL CLOSED ; M5-A Formal Exit ; H0-L1 ; L2-D0→D2 Delivery ; #617 prep ; **#618 merge** | Blueprint 01–04 ; L1–L2 code on main ; #618 Product+R24 on main ; PRR CURRENT (post-merge sync local) | Structural removal **CURRENT ON MAIN** + post-merge CI SUCCESS · exclusive DEFAULT OFF · H4/Q12/R-CUT LIVE / G-ACTIVATION **OPEN** · Generic E2E FS→Git→Review **KNOWN GAP** · FS→SHA generic **KNOWN GAP** | PR #609/#611/#612/#614/#617/#618 · merge `fec4e65d` · CI #40272048259 · DET L2 suites · DET Generic PREPARE | Confusion MERGED≠ACTIVATED · DET≠REAL · #618≠L3 complete · M5-A CLOSED≠AKG-M5 CLOSED | **AKG-M5 GLOBAL OPEN** · H4 **NOT QUALIFIED** · G-ACTIVATION / G-REAL **NOT GRANTED** · runtime v3 **NON ADOPTED** · REAL **NOT PROVEN** · P6 **NOT PASSED** · **next arbitration:** Option A finish L2 (H4→G-ACTIVATION→R-CUT) **vs** Option B advance L3 Generic completeness — **P0 ≠ décision** | P0 documentary truth-sync (local) → ChatGPT Critical Review → Morris GI P0 → **Morris capacité suivante** |

 ### Non-claims AKG

diff --git a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
index 59ce9676..9d07124e 100644
--- a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
@@ -7,21 +7,21 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.
 ## OBJ-PROJECT — Project

 - **Purpose:** Durable product container (name, objective, workspace key). Historical cards also named a repository binding; see the status split.
-- **Status split 2026-10-25:** **CURRENT ON MAIN** (`origin/main` `7db8afd7`): CreateProject still projects server-owned RepositoryBinding from `SFIA_STUDIO_PROJECT_REPOSITORY_*`. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** **RepositoryBinding RETIRED IN LOCAL DELIVERY** — CreateProject has no `repositoryBinding`. `projectWorkspaceKey` / `projects/<key>` routing **PRESERVED**. **PENDING REVIEW** · **PENDING GIT INTEGRATION** · **NOT MERGED**.
+- **Status split (post-merge 2026-10-26):** **CURRENT ON MAIN** (`fec4e65d` / PR #618 MERGED): **RepositoryBinding RETIRED** — CreateProject has no `repositoryBinding`. `projectWorkspaceKey` / `projects/<key>` routing **PRESERVED**. **HISTORICAL SNAPSHOT** before merge: on `7db8afd7` CreateProject still projected server-owned RepositoryBinding from `SFIA_STUDIO_PROJECT_REPOSITORY_*`.
 - **SoT / persistence:** `oa_projects` (+ payload_json) via OA project store.
 - **Create:** `RuntimeApplicationService.createProject` / LocalProjectComposition.
-- **Upstream:** **CURRENT ON MAIN:** server-owned repository binding env (`SFIA_STUDIO_PROJECT_REPOSITORY_*`). **LOCAL DELIVERY CANDIDATE:** those keys are removed from preflight and `.env.example`.
+- **Upstream:** **CURRENT ON MAIN after #618:** CreateProject does **not** take RepositoryBinding from env; `SFIA_STUDIO_PROJECT_REPOSITORY_*` removed from CreateProject preflight / `.env.example` as Product SoT (may remain **seal-only** for ExecutionContract git-target). **HISTORICAL:** before #618, server-owned binding env fed CreateProject.
 - **Downstream:** LPS, trajectories, cycles, decisions, contracts.
 - **Paths:** `lib/oa/project/**`, `lib/vertical-slice-runtime/service.ts`
 - **Restart:** survives product DB.

 ## OBJ-REPO-BINDING — RepositoryBinding

-- **Status:** **CURRENT ON MAIN** (`7db8afd7`) and **RETIRED IN LOCAL DELIVERY**. The card below is the historical / main object. It is a **LOCAL DELIVERY CANDIDATE / NOT ON MAIN** retirement (Morris GO 2026-10-25): not projected at CreateProject; `SFIA_STUDIO_PROJECT_REPOSITORY_*` removed from preflight and `.env.example`. **NOT MERGED**. Do not read this card as the local candidate's create path.
-- **Purpose (historical / CURRENT ON MAIN):** Explicit GitHub identity/remote/branch/pathRoot for Project.
-- **SoT (CURRENT ON MAIN):** Project payload / binding fields — server-owned; never client-authored.
-- **Paths (CURRENT ON MAIN):** project domain + `SFIA_STUDIO_PROJECT_REPOSITORY_*` in `.env.example`. Absent from the local-candidate preflight.
-- **Authority:** configuration ≠ authority. On main it enables docs_write composition. In the local candidate, docs_write Product admission is also retired (see OBJ-CAPABILITY). `projectWorkspaceKey` routing is not this object.
+- **Status:** **RETIRED ON MAIN** via PR #618 MERGED (`fec4e65d`). The card below is a **HISTORICAL SNAPSHOT** of the pre-merge object (true on `7db8afd7`). Do not read it as CURRENT CreateProject.
+- **Purpose (historical):** Explicit GitHub identity/remote/branch/pathRoot for Project.
+- **SoT (historical):** Project payload / binding fields — server-owned; never client-authored.
+- **Paths (historical):** project domain + `SFIA_STUDIO_PROJECT_REPOSITORY_*` in `.env.example` as CreateProject SoT. **CURRENT:** those keys are not CreateProject SoT; seal-only residual may remain for git-target.
+- **Authority:** configuration ≠ authority. Historical Binding enabled docs_write composition; **CURRENT:** docs_write Product admission also **RETIRED** (see OBJ-CAPABILITY). `projectWorkspaceKey` routing is not this object.

 ## OBJ-LPS — LivingProjectState

@@ -130,7 +130,7 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.
   - **SHE CURRENT (D-P6-SHE-01 / PR #590):** STRUCTURAL / HD-required / UNKNOWN may obtain an **inspectable** PREPARE **without** prior HD when Product qualification admits (`sheDeferredStructuralAuthority` stamp possible). Authority is consumed on Pilot **Exécuter** (`singleHumanExecutePreparedContract`): Inspect binding → applicable HD (if required) → Confirm (if required) → Authorize → launch gates. **0 Attempt** if pre-launch gates fail. Historical disposition-before-PREPARE remains available at its own boundary.
 - **Tool-First pathless stamp (CURRENT ON MAIN — PR #588 merge `304e30e8`):** Generic PREPARE may set `inputs.boundedNonMutatingAnalysis` and related `NO_REPOSITORY_MUTATION_*` constraints/stops for Product-admitted pathless analysis. Stamp declares Product intent envelope — **≠** Cursor REAL technical no-write (see F10 R2 / `boundedNonMutatingRealLaunchGate.ts`). DETERMINISTIC at tested scope · REAL no-write enforcement OPEN (`TOOL-FIRST-REAL-NOWRITE`).
 - **CORR-01 / LOCAL DELIVERY:** `inputs.repositoryBindingIdentity` is **residual naming** for a sealed git-target string stamped from server env when canonical — **≠** OBJ-REPO-BINDING / **≠** `Project.repositoryBinding` SoT.
-- **CORR-02 / LOCAL DELIVERY — sealed git-target + managed checkout:** before protected Git start, a provided remote must match the canonical identity (`sealRepositoryBindingFromExecutionInputs`; mismatch → `repository_remote_identity_mismatch`, no synthesized-URL fallback). A managed checkout under `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` is accepted only when its `origin` matches that identity (`resolveIdentityMatchedLocalRepo`). `.git` presence is not fidelity. Worktree gitfile is followed one `gitdir` hop, then `commondir` when the worktree gitdir has no origin url. **DETERMINISTIC VERIFIED** at tested scope (`gitTargetIdentityRemoteFidelity.d0.test.ts`). **NOT MERGED**. **≠** REAL.
+- **CORR-02 / LOCAL DELIVERY — sealed git-target + managed checkout:** before protected Git start, a provided remote must match the canonical identity (`sealRepositoryBindingFromExecutionInputs`; mismatch → `repository_remote_identity_mismatch`, no synthesized-URL fallback). A managed checkout under `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` is accepted only when its `origin` matches that identity (`resolveIdentityMatchedLocalRepo`). `.git` presence is not fidelity. Worktree gitfile is followed one `gitdir` hop, then `commondir` when the worktree gitdir has no origin url. **DETERMINISTIC VERIFIED** at tested scope (`gitTargetIdentityRemoteFidelity.d0.test.ts`). **MERGED via #618** (pre-merge NOT MERGED claim = HISTORICAL). **≠** REAL.

 ## OBJ-INSPECTION — InspectionAttestation

@@ -146,7 +146,7 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.
 ## OBJ-CAPABILITY — AgentCapability

 - **Purpose:** Declared agent capabilities. Historical Product example: `cap:cursor.docs_write`.
-- **Status split 2026-10-25:** **CURRENT ON MAIN** (`7db8afd7`): docs_write Product admission (`intentKind` / `cap:cursor.docs_write` / `cursor.docs_write.apply`) remains in active lib+features. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** that Product specialization is **RETIRED**; the generalist envelope refuses the retired document-write token (`CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE`). **NOT MERGED**.
+- **Status split 2026-10-25:** **CURRENT ON MAIN** (`7db8afd7`): docs_write Product admission (`intentKind` / `cap:cursor.docs_write` / `cursor.docs_write.apply`) remains in active lib+features. **CURRENT ON MAIN (PR #618 MERGED) — was LOCAL DELIVERY pre-merge:** that Product specialization is **RETIRED**; the generalist envelope refuses the retired document-write token (`CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE`). **MERGED via #618** (pre-merge NOT MERGED claim = HISTORICAL).
 - **Authority:** capability presence ≠ permission to execute.

 ## OBJ-ATTEMPT — ExecutionAttempt
@@ -174,7 +174,7 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.

 - **Purpose:** Durable evidence records tied to attempts/artifacts.
 - **Persistence:** `oa_evidence` (+ idempotency).
-- **CORR-02 / LOCAL DELIVERY — FS-anchor allowlist:** FS→SHA supersession (`isFsAnchorSupersededByVerifiedLocalCommit`) accepts only historical artifact sources `execution_attempt:docs_write` and dotted suffixes (`execution_attempt:docs_write.*`). That reading is **not** Product admission of docs_write. No new Product materialization Evidence source is stamped after the retirement. Prose `execution attempt <id> (succeeded)`, `execution_attempt:mission_result`, and other non-allowlisted sources do not supersede. Ambiguous matching artifacts do not auto-PASS (T11/T12). **NOT MERGED**. **≠** REAL.
+- **CORR-02 / LOCAL DELIVERY — FS-anchor allowlist:** FS→SHA supersession (`isFsAnchorSupersededByVerifiedLocalCommit`) accepts only historical artifact sources `execution_attempt:docs_write` and dotted suffixes (`execution_attempt:docs_write.*`). That reading is **not** Product admission of docs_write. No new Product materialization Evidence source is stamped after the retirement. Prose `execution attempt <id> (succeeded)`, `execution_attempt:mission_result`, and other non-allowlisted sources do not supersede. Ambiguous matching artifacts do not auto-PASS (T11/T12). **MERGED via #618** (pre-merge NOT MERGED claim = HISTORICAL). **≠** REAL.

 ## OBJ-RB — ReviewBundle

diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 3b6277e8..9a38cc68 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -4,18 +4,18 @@

 Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

-**Epistemic split 2026-10-25 — RepositoryBinding + docs_write Product specialization:** sentences below that describe server-owned RepositoryBinding or docs_write Product admission (`intentKind` / cap / action) are **CURRENT ON MAIN** (`origin/main` `7db8afd7`, PR #617). The same mechanisms are a **LOCAL DELIVERY CANDIDATE / NOT ON MAIN** on `feat/akg-m5-remove-repository-binding-docs-write` (Morris GO 2026-10-25): **RepositoryBinding RETIRED IN LOCAL DELIVERY**; **docs_write Product specialization RETIRED IN LOCAL DELIVERY**. `projectWorkspaceKey` / `projects/<key>` routing stays. **PENDING REVIEW** · **PENDING GIT INTEGRATION** · **NOT MERGED**. **H4 / G-REAL / G-ACTIVATION NOT GRANTED**. **AKG-M5 OPEN**. Runtime v3 **NON ADOPTED**. Historical flow text is not rewritten as if the main behaviour never existed.
+**Epistemic split (post-merge 2026-10-26) — RepositoryBinding + docs_write Product specialization:** **CURRENT ON MAIN** (`fec4e65d` / PR #618 MERGED): **RepositoryBinding RETIRED**; **docs_write Product admission RETIRED**. `projectWorkspaceKey` / `projects/<key>` routing **PRESERVED**. Sentences below that still describe Binding or docs_write Product admission as live Product behaviour are **HISTORICAL SNAPSHOTS** (true on `7db8afd7` before merge). **H4 / G-REAL / G-ACTIVATION NOT GRANTED**. **AKG-M5 OPEN**. Runtime v3 **NON ADOPTED**.

-## Overlay — CORR-02 Git target fidelity (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+## Overlay — CORR-02 Git target fidelity (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

-**BOUNDED FLOW IMPACT — F10 only.** Protected Git start seals identity↔remote and accepts a managed checkout only when `origin` matches the sealed identity. **NO SEMANTIC IMPACT** on unrelated flows (F01–F09, F11–F20), including D-PC-09 workspace routing (`projects/<key>`). FS→SHA continuation reading (narrative under F10/F11b pre-commit continuation) stays historical-only on `execution_attempt:docs_write` Evidence; it does not restore docs_write Product admission. **NOT MERGED**. **≠** REAL.
+**BOUNDED FLOW IMPACT — F10 only.** Protected Git start seals identity↔remote and accepts a managed checkout only when `origin` matches the sealed identity. **NO SEMANTIC IMPACT** on unrelated flows (F01–F09, F11–F20), including D-PC-09 workspace routing (`projects/<key>`). FS→SHA continuation reading stays historical-only on `execution_attempt:docs_write` Evidence; it does not restore docs_write Product admission. Pre-merge LOCAL DELIVERY / NOT ON MAIN wording = **HISTORICAL**. **≠** REAL.

 ## F01 — Project creation / greenfield
 - **Trigger:** Studio create project
 - **Steps:** LocalProjectComposition → oa_projects/LPS → optional trajectory bootstrap
 - **Paths:** `vertical-slice-runtime/service.ts`, project create use cases
 - **Status:** COMPLETE (deterministic); greenfield continuity corrections on main (#531)
-- **RepositoryBinding:** **CURRENT ON MAIN** — server-owned projection from `SFIA_STUDIO_PROJECT_REPOSITORY_*` at create. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN (2026-10-25):** CreateProject has no `repositoryBinding`; those env keys are removed from preflight / `.env.example`; `projectWorkspaceKey` still set. **NOT MERGED**.
+- **RepositoryBinding:** **CURRENT ON MAIN after #618:** CreateProject has **no** `repositoryBinding`; env keys removed from CreateProject preflight / `.env.example` as Product SoT; `projectWorkspaceKey` still set. **HISTORICAL** before merge: server-owned projection from `SFIA_STUDIO_PROJECT_REPOSITORY_*` at create on `7db8afd7`.
 - **Overlay — AKG-M5 L2-D2 (CURRENT ON MAIN — PR #614; DEFAULT OFF / NOT ACTIVATED; main tip PR #617 activation prep, exclusive still OFF):** Product create remains OA Truth C (`prj:*` / `oa_*`). When `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` trim=`"1"` (future **G-ACTIVATION** only), D1 create/confirm paths fail-closed — **no dual-write**, **no** `proj-*`→`prj:*` mapping. O-01 DET proves create → durable LPS objective → list/workspace UI (« comprendre ») on disposable SQLite. Marker default OFF preserves pre-L2-D2 D1 operator paths. **≠** live Studio activation / HTTP E2E.

 ## F02 — Project load / restart
@@ -53,7 +53,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Boundary (CI-HQA-F01 / AS-IMPLEMENTED):** explicit NEW_CYCLE formalization (« préparer / créer / démarrer un cycle … », even when a future deliverable/note is mentioned) is **not** Artifact continuation. `hasExplicitNewCycleFormalizationSignal` keeps those turns on `NEW_CYCLE_FORMALIZATION` so absence of an active cycle does not fail-closed as `no_active_cycle` before `createCycle`. Natural Artifact cues still cover produce/write/materialize of a documentary object under an active cycle (F-C9-04).
 - **Admission (Artifact governed continuation):** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE ∧ ¬SATISFIED (#532+#533) — unchanged; obligations are not bypassed by Generic PREPARE.
 - **Adjacent hand-off (P6-HQA-F05-GD4-01 / PR #586 AS-IMPLEMENTED on main):** ordinary documentary materialization recognized by ACGC but **without** a closure Artifact obligation resolves as `ACTIVE_CYCLE_CONTINUATION_BLOCKED` / `no_require_artifact` (or, for a natural signal without a docs_write-compatible effect — **CURRENT ON MAIN**; the 2026-10-25 local candidate no longer admits that Product effect — may surface `NEW_CYCLE_FORMALIZATION` / `no_compatible_artifact_effect` — see vol 08 oracle semantics). When the turn is actionable for Generic PREPARE, orchestration may **hand off to F08** via `isOptionalDocumentaryWithoutClosureArtifactBlock`. This is **not** Artifact governed continuation, **not** an invented `REQUIRE_ARTIFACT` HumanDecision, and **not** proof that a new CycleInstance was created. Full Generic PREPARE admission/authority lives under **F08**, not F05. **NOT MERGED** applies only to the local retirement, not to PR #586.
-- **Leaf / target:** Nora/Pilot leaf candidate is non-authoritative; server owns `targetPath` composition under `projects/<projectWorkspaceKey>/` (D-PC-09 workspace routing — **PRESERVED** in the 2026-10-25 local candidate); no normal filename micro-gate when cues suffice; clarification only when no coherent cue. The D-PC-09 **RepositoryBinding projection** is **CURRENT ON MAIN** and **superseded only as LOCAL DELIVERY CANDIDATE / NOT ON MAIN**.
+- **Leaf / target:** Nora/Pilot leaf candidate is non-authoritative; server owns `targetPath` composition under `projects/<projectWorkspaceKey>/` (D-PC-09 workspace routing — **PRESERVED**); no normal filename micro-gate when cues suffice; clarification only when no coherent cue. The D-PC-09 **RepositoryBinding projection** is **RETIRED ON MAIN** via #618 (historical on `7db8afd7`).
 - **Continuation fact:** `structurallyResolvedActiveCycleContinuation` is server-owned and local to this Recommendation/Proposal — ≠ Truth C, ≠ HumanDecision, ≠ universal uncertainty resolution; sealed continuation without impacting signals skips gratuitous structural MW5 re-challenge
 - **Same CycleInstance:** no silent NEW_CYCLE / re-formalization on the Artifact path
 - **Exit (Artifact path):** Proposal `DECISION_REQUIRED`
@@ -131,9 +131,9 @@ Descriptive Product routing map for the same conversational front door. **Does n

 ## F10 — Governed execution (docs_write / Cursor)

-**Status split:** the docs_write Product path in this section is **CURRENT ON MAIN** (`7db8afd7`). **LOCAL DELIVERY CANDIDATE / NOT ON MAIN (2026-10-25):** docs_write Product admission (`intentKind` / cap / action) is **RETIRED** from active lib+features; documentary work is generic PREPARE / generalist. Historical docs_write execution, report, and evidence sentences below stay the main record. **NOT MERGED**. Known regressions of that retirement are **accepted** and are not a new REAL claim.
+**Status split:** **CURRENT ON MAIN after #618:** docs_write Product admission (`intentKind` / cap / action) is **RETIRED**; documentary work is generic PREPARE / generalist. Historical docs_write execution, report, and evidence sentences below are **HISTORICAL SNAPSHOTS** (true on `7db8afd7` before merge). Known regressions of that retirement are **accepted** and are not a new REAL claim.
 - **Gate:** effective Authorization on EC + attempt lifecycle; REAL additionally requires `SFIA_STUDIO_CURSOR_REAL` + managed repo base + Product REAL readiness fail-closed
-- **CORR-02 / LOCAL DELIVERY — git-target fidelity (F10):** `sealRepositoryBindingFromExecutionInputs` refuses a provided remote that does not match the canonical identity (`repository_remote_identity_mismatch` / `REAL_WORKSPACE_INVALID`; no synthesized GitHub URL fallback). `resolveIdentityMatchedLocalRepo` accepts `{managedRootBase}/{sanitizedIdentity}` only when checkout `origin` matches that identity (`managed_repo_identity_mismatch` / `managed_repo_absent` on the protected path). **DETERMINISTIC VERIFIED** at tested scope. **NOT MERGED**. **≠** REAL. Unrelated flows: **NO SEMANTIC IMPACT**.
+- **CORR-02 / CURRENT ON MAIN (#618) — git-target fidelity (F10):** `sealRepositoryBindingFromExecutionInputs` refuses a provided remote that does not match the canonical identity (`repository_remote_identity_mismatch` / `REAL_WORKSPACE_INVALID`; no synthesized GitHub URL fallback). `resolveIdentityMatchedLocalRepo` accepts `{managedRootBase}/{sanitizedIdentity}` only when checkout `origin` matches that identity (`managed_repo_identity_mismatch` / `managed_repo_absent` on the protected path). **DETERMINISTIC VERIFIED** at tested scope. **≠** REAL. Unrelated flows: **NO SEMANTIC IMPACT**.
 - **Project-scoped Cursor Select/Start (CURRENT ON MAIN at tested scope):** AUTHORIZED PRODUCT_GOVERNED EC may Select→Start→Result on Fake Cursor **without** active CycleInstance when the existing OA contract admits null-cycle — **no invented CycleInstance**, **no invented HumanDecision**. `SelectionProfile` is a technical OA carrier (e.g. capabilities_deterministic), **not** a methodological SFIA Standard/Critical access gate. Unauthorized / closed-cycle / missing project remain refuse. DETERMINISTIC Fake/DET · ≠ REAL BOUNDARY PROVEN.
 - **R2 — pathless non-mutating vs Cursor REAL (CURRENT ON MAIN — PR #588 merge `304e30e8`):** Cursor REAL generalist launch remains technically writable (`--sandbox disabled` class). A contract stamp / prompt “no write” is **not** enforcement. When EC is pathless non-mutating (`boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` + empty concrete scope) **and** `SFIA_STUDIO_CURSOR_REAL=1`, Product applies `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (`boundedNonMutatingRealLaunchGate.ts`) at **two distinct phases**:
   - **Select (`governedExecuteSelectAgent`):** refuse **before** creating a new Attempt — no accepted Attempt from that Select; no REAL process.
@@ -147,7 +147,7 @@ Descriptive Product routing map for the same conversational front door. **Does n
 ## F11 — Attempt terminal → Evidence → ReviewBundle
 - **Paths:** execution-attempt + evidence-review aggregates; docs-write appends LPS `evidenceIds`/`reviewBundleIds` for rehydrate
 - **Docs_write durable artifact (POST-EXECUTION-…-01):** when hot-worktree bytes are available at completion, Artifact Evidence uses `external_payload_ref` under existing `mission-result-refs/refs/attempts/…/docs-write-artifact` (same filesystem Evidence layout as MissionResult — **no new store/table**). CursorExecutionReport claim is persisted alongside as `cursor-execution-report.json` on the nominal path (CLAIM, not Evidence). Independent digest verify retained.
-- **Status:** COMPLETE domain on main; Product E2E lineage proven at tested scope (Fake); docs_write durable review material **CURRENT ON MAIN** at tested scope. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** docs_write Product specialization **RETIRED**. **NOT MERGED**.
+- **Status:** COMPLETE domain on main for Generic Evidence/RB at tested scope (Fake). docs_write Product specialization **RETIRED ON MAIN** (#618). Historical docs_write durable review material sentences = **HISTORICAL**. Product E2E FS→Git→Review généraliste = **KNOWN GAP** (partially fixture-safe).

 ## F11b — Product Continuity / Shared Knowledge (PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01)

@@ -162,7 +162,7 @@ Descriptive Product routing map for the same conversational front door. **Does n
 - **Paths:** claim evaluation tables/services; docs_write automatic `completeDocsWriteClaimEvidenceCompletion` while hot worktree / durable absolute path available
 - **Claim-completion propagation:** RecordResult **consumes** the completion result via closed `classifyDocsWriteClaimCompletionFailure` — only `CONFORMITY_HEADINGS_MISSING` / `ARTIFACT_EMPTY` → Product NOT_PROVEN/UNCLAIMED; all oracle/integrity/lineage/unknown codes → `POST_EXECUTION_CONTINUITY_ADVANCE_FAILED`. No startsWith/includes catch-alls.
 - **Honesty:** Attempt `succeeded` ≠ Product PASS; NOT_PROVEN remains when conformity Evidence insufficient
-- **Status:** PRESENT on main; automatic docs_write qualification **CURRENT ON MAIN**; **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** that Product specialization is **RETIRED** (**NOT MERGED**); journey REAL proof PARTIAL / NOT PROVEN this macro
+- **Status:** PRESENT on main for Generic journey shells; automatic docs_write Product qualification **RETIRED ON MAIN** (#618); journey REAL proof PARTIAL / NOT PROVEN this macro

 ## F13 — Nora post-Evidence
 - **Handoff (POST-EXECUTION-…-01):** `runW3cPostEvidenceLoop` and `rehydrateW3cPostEvidenceFromLps` share `projectW3cExecutionReportSurfaceFromDurable` — loads durable artifact review material + Cursor report into `PostEvidenceAnalysisFacts` / `executionReport` (`artifactReviewMaterial` FULL/PARTIAL, never invent FULL). Fresh and restart/rehydrate paths project the same `W3cExecutionReportSurface`. No fabricated « sans CursorExecutionReport » surface. Nora must not depend on generic worktree `read` that yields `PATH_NOT_ALLOWED`.
@@ -228,4 +228,4 @@ Nominal Product path (architecture D-ER; **CURRENT ON MAIN** at deterministic te

 HumanDecision (durable DecisionBasis + local-write seal) → Generic EC `studio.cursor.generalist.execute` (authorized `EFFECT_CLASS:local-write` / filesystem.create|modify — **≠** Product write taxonomy) → Cursor Generalist → isolated Git worktree → CursorExecutionReport [CLAIM] + native Cursor Review End Of [CLAIM executor-only; missing ⇒ PARTIAL / no Studio synthesis] → Studio `NodeLocalGitStatusDiffPort` / `observeVerifiedChangeSet` [FACTS] (Git delta only; OBSERVED vs UNAVAILABLE — never invent empty FACTS; never full-repo scan in Git mode) → Generic Execution Review Material → Verification Evidence `ev:execution-review:*` + Mission Evidence → same ReviewBundle / ClaimEvaluation / ContractResult (mismatch ⇒ ≠ PASS) → Product Resolution (`executionReview`) → scheduled UI continue (no abandonment counter) + remount auto-resume → Nora Deep Review (shared Agents core; actual `execution_review_*` tool calls) → Result Surface (real fields + Pilot `w2ReadExecutionReviewItemAction` by itemId).

-**CURRENT ON MAIN:** docs_write specialized persist remains a TRANSITIONAL dual-write bridge. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN (2026-10-25):** docs_write Product specialization is **RETIRED** (admission removed from active lib+features). This bridge sentence remains true of `origin/main` `7db8afd7` and is superseded history for the local candidate. **NOT MERGED**. Anti-stall: mounted schedule + remount from durable projection; Reconciler remains owner of transitions. Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · ZERO REAL · READY FOR REAL **NO**.
+**CURRENT ON MAIN after #618:** docs_write Product specialization is **RETIRED**. Dual-write bridge sentences that assumed admission are **HISTORICAL** (true on `7db8afd7`). Anti-stall: mounted schedule + remount from durable projection; Reconciler remains owner of transitions. Proof ceiling for generic paths: **DETERMINISTIC AT TESTED SCOPE** · ZERO REAL · READY FOR REAL **NO**.
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index ddda7370..335bbfc9 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -17,13 +17,13 @@ Given changed paths:
 9. Collect `testPaths` as mandatory regression set.
 10. List doc volumes requiring review; after content review only, refresh digests.

-## Overlay — CORR-01 (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+## Overlay — CORR-01 (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

-**CORR-01 NO SEMANTIC IMPACT** on this dependency map beyond the RepositoryBinding / docs_write Product specialization retirement already documented in the LOCAL DELIVERY overlays (README and volumes 02, 03, 05, 09). Restored generic proofs add no dependency edges. **NOT MERGED**.
+**CORR-01 NO SEMANTIC IMPACT** on this dependency map beyond the RepositoryBinding / docs_write Product specialization retirement documented in README and volumes 02, 03, 05, 09 (**CURRENT ON MAIN** via #618). Restored generic proofs add no dependency edges. Pre-merge LOCAL DELIVERY / NOT ON MAIN = **HISTORICAL**.

-## Overlay — CORR-02 (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+## Overlay — CORR-02 (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

-**BOUNDED DEPENDENCY IMPACT.** Protected managed-checkout resolution now requires an origin match: `resolveIdentityMatchedLocalRepo` (`ManagedProjectRepositoryResolver`) accepts a candidate under `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` only when checkout `origin` matches the sealed git-target identity. `.git` existence is not that dependency. No new curated `manifest.dependencies[]` edge (the nine indexed edges are unchanged). Callers on the protected Git start path (`startExecution` seal + guarded managed root) fail closed on mismatch. **NOT MERGED**. **≠** REAL.
+**BOUNDED DEPENDENCY IMPACT.** Protected managed-checkout resolution now requires an origin match: `resolveIdentityMatchedLocalRepo` (`ManagedProjectRepositoryResolver`) accepts a candidate under `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` only when checkout `origin` matches the sealed git-target identity. `.git` existence is not that dependency. No new curated `manifest.dependencies[]` edge (the nine indexed edges are unchanged). Callers on the protected Git start path (`startExecution` seal + guarded managed root) fail closed on mismatch. Pre-merge NOT MERGED = **HISTORICAL**. **≠** REAL.

 ## Core dependency edges (harvested)

diff --git a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
index 5a593c34..b83fcf56 100644
--- a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
@@ -11,7 +11,7 @@
 | Capability | What an agent *can* do technically |
 | Authority | What a Pilot/Morris *may* authorize |

-## Overlay — PR #618 mutating Cursor confinement (LOCAL CANDIDATE — 2026-10-25)
+## Overlay — PR #618 mutating Cursor confinement (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

 | Item | Status |
 |---|---|
@@ -27,10 +27,10 @@
 | `SFIA_STUDIO_PRODUCT_DB_PATH` | Absolute product SQLite | optional | else `.sfia-exec/product/oa-product.sqlite` | Truth C · server-only · prefer absolute path for durable instance |
 | `SFIA_STUDIO_NORA_SESSION_DB_PATH` | Absolute Nora session SQLite | optional | else cwd-relative `.sfia-exec/product/nora-session.sqlite` | Memory B · **≠ Truth C** · worktree-sensitive · prefer absolute per-instance |
 | `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` | Local OA-exclusive cutover marker (L2-D2) | no — default **OFF** | Arms when `process.env` value **after `trim()`** equals `"1"` (code: `isLocalOaExclusiveMode`) ; `"1"` / `" 1 "` → ON ; unset / `"0"` / other → OFF (historical D1) | Server-only · **not** global across worktrees · code **CURRENT ON MAIN** (PR #614) · default OFF · **G-ACTIVATION** required to arm · **NOT ACTIVATED** by merge |
-| `SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY` | Server-owned repo identity | **CURRENT ON MAIN** (`7db8afd7`): yes Product local, fail-closed if absent. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** **NOT** CreateProject SoT — removed from preflight and `.env.example` as Product **RepositoryBinding** projection. **CORR-01 / CORR-02:** **seal-only** — read by `resolveTrustedProductLaunchContext` only to stamp sealed ExecutionContract git-target inputs (`repositoryBindingIdentity` field name = residual naming / env-key rename debt). Absent / non-canonical → identity `null` → **Select** eligibility fail-closed. **Not** written onto Project. | config · historical on main · **NOT MERGED** |
-| `SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL` | Server-owned remote | **CURRENT ON MAIN:** yes Product local, fail-closed. **LOCAL DELIVERY CANDIDATE:** **seal-only** (not CreateProject / not RepositoryBinding SoT); removed from preflight / `.env.example`. **CORR-02:** a provided remote **must match** the canonical identity (HTTPS or SSH GitHub). Mismatch → `repository_remote_identity_mismatch`. Absent remote is synthesized only after the identity is canonical. | config · **NOT MERGED** |
-| `SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH` | Default branch | **CURRENT ON MAIN:** optional, `main`. **LOCAL DELIVERY CANDIDATE:** **seal-only** with identity/remote; removed from preflight / `.env.example` with binding retirement. Does not by itself prove remote fidelity. | config · **NOT MERGED** |
-| `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` | Managed checkout root | **CURRENT ON MAIN:** yes for REAL docs_write; identity subpath; fail-closed if blank. **LOCAL DELIVERY CANDIDATE:** still required for preflight / `SFIA_STUDIO_CURSOR_REAL`; no RepositoryBinding identity map; fail-closed `MANAGED_REPO_ROOT_BASE_UNCONFIGURED` | config · **NOT MERGED** |
+| `SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY` | Server-owned repo identity | **CURRENT ON MAIN after #618:** **NOT** CreateProject SoT — removed from preflight and `.env.example` as Product **RepositoryBinding** projection. **seal-only** — read by `resolveTrustedProductLaunchContext` only to stamp sealed ExecutionContract git-target inputs (`repositoryBindingIdentity` = residual naming / env-key rename debt). Absent / non-canonical → identity `null` → **Select** fail-closed. **Not** written onto Project. **HISTORICAL** on `7db8afd7`: CreateProject required it. | config · seal-only CURRENT · CreateProject SoT HISTORICAL |
+| `SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL` | Server-owned remote | **CURRENT ON MAIN after #618:** **seal-only** (not CreateProject / not RepositoryBinding SoT); removed from preflight / `.env.example`. **CORR-02:** a provided remote **must match** the canonical identity (HTTPS or SSH GitHub). Mismatch → `repository_remote_identity_mismatch`. Absent remote synthesized only after identity is canonical. **HISTORICAL** CreateProject requirement on `7db8afd7`. | config · seal-only CURRENT |
+| `SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH` | Default branch | **CURRENT ON MAIN after #618:** **seal-only** with identity/remote; removed from CreateProject preflight / `.env.example` with binding retirement. Does not by itself prove remote fidelity. | config · seal-only CURRENT |
+| `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` | Managed checkout root | **CURRENT ON MAIN after #618:** still required for preflight / `SFIA_STUDIO_CURSOR_REAL`; no RepositoryBinding CreateProject identity map; fail-closed `MANAGED_REPO_ROOT_BASE_UNCONFIGURED`. Historical « for REAL docs_write » wording = **HISTORICAL** specialization. | config · CURRENT |
 | `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY` | Local Pilot N3 gate | yes single-user profile | fail-closed | TEMPORARY WITH EXIT |
 | `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` | Deprecated alias | compat | prefer canonical | TEMPORARY |
 | `SFIA_STUDIO_CURSOR_REAL` | Enable Cursor REAL | optional default OFF | exclusive vs deterministic boundary | REAL gate |
@@ -54,9 +54,9 @@

 - Product binding/authority envs are **server-only** (never `NEXT_PUBLIC_*`).
 - **CURRENT ON MAIN:** browser must not supply repository binding or Pilot authority claims.
-- **LOCAL DELIVERY CANDIDATE / NOT ON MAIN (2026-10-25):** Product **RepositoryBinding** projection is retired — CreateProject does **not** read `SFIA_STUDIO_PROJECT_REPOSITORY_*` and those keys are **not** CreateProject SoT (removed from preflight / `.env.example`). **CORR-01 / CORR-02:** the same env keys remain **seal-only**. `resolveTrustedProductLaunchContext` may read them only to stamp sealed ExecutionContract git-target inputs (`inputs.repositoryBindingIdentity` = residual field naming). **CORR-02:** a provided `SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL` must match that identity. Absent / non-canonical identity → `null` → **Select** eligibility fail-closed; values are **not** written onto Project. Pilot authority envs stay server-only. **NOT MERGED**. `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` remains a server path; the managed resolver accepts a checkout only when `origin` matches the sealed identity (no RepositoryBinding identity subfolder as CreateProject SoT).
+- **CURRENT ON MAIN after #618:** Product **RepositoryBinding** projection is retired — CreateProject does **not** read `SFIA_STUDIO_PROJECT_REPOSITORY_*` as CreateProject SoT (removed from preflight / `.env.example`). The same env keys remain **seal-only**. `resolveTrustedProductLaunchContext` may read them only to stamp sealed ExecutionContract git-target inputs (`inputs.repositoryBindingIdentity` = residual field naming). A provided `SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL` must match that identity. Absent / non-canonical identity → `null` → **Select** fail-closed; values are **not** written onto Project. Pilot authority envs stay server-only. `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` remains a server path; the managed resolver accepts a checkout only when `origin` matches the sealed identity.

-## Overlay — CORR-02 sealed git-target (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+## Overlay — CORR-02 sealed git-target (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

 `SFIA_STUDIO_PROJECT_REPOSITORY_*` = **seal-only**. Remote must match identity. Mismatch does not fall back to a synthesized GitHub URL. **D-PC-09 workspace routing: NO SEMANTIC IMPACT** (historical C1 text not rewritten). **NOT MERGED**. **≠** REAL.

diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index dabd8bfa..2151df82 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -2,13 +2,13 @@

 **As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**

-## Overlay — CORR-01 (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+## Overlay — CORR-01 (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

-**CORR-01 NO SEMANTIC IMPACT** on persistence / restart / recovery. Generic continuity wording is **DETERMINISTIC AT TESTED SCOPE** only (`postExecutionProductContinuity.generic.d0.test.ts`); restart continuity remains covered by existing suites. **≠** REAL. **NOT MERGED**.
+**CORR-01 NO SEMANTIC IMPACT** on persistence / restart / recovery. Generic continuity wording is **DETERMINISTIC AT TESTED SCOPE** only (`postExecutionProductContinuity.generic.d0.test.ts`); restart continuity remains covered by existing suites. **≠** REAL. Pre-merge NOT MERGED claim = **HISTORICAL**.

-## Overlay — CORR-02 (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+## Overlay — CORR-02 (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

-**CORR-02 NO SEMANTIC IMPACT** on persistence stores, restart, or recovery tables. Identity↔remote↔checkout checks are in-process seal and filesystem metadata reads (no new table, migration, or clone). Evidence FS→SHA supersession reads already-persisted Evidence and is **historical-only** for allowlisted sources `execution_attempt:docs_write` (+ dotted suffix). No new Product materialization Evidence source is persisted after the docs_write retirement. **≠** REAL. **NOT MERGED**.
+**CORR-02 NO SEMANTIC IMPACT** on persistence stores, restart, or recovery tables. Identity↔remote↔checkout checks are in-process seal and filesystem metadata reads (no new table, migration, or clone). Evidence FS→SHA supersession reads already-persisted Evidence and is **historical-only** for allowlisted sources `execution_attempt:docs_write` (+ dotted suffix). No new Product materialization Evidence source is persisted after the docs_write retirement. **≠** REAL. Pre-merge NOT MERGED claim = **HISTORICAL**.

 ## Store topology

diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index 12bb9974..4f91a688 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -4,13 +4,13 @@

 **Amendement documentaire D-P6-SHE-01 (requalifié AKG-M3 G6 — 2026-10-21) :** SINGLE HUMAN EXECUTE / Option A est **CURRENT ON MAIN** — Product integrated via **PR #590** merge `c9abdbc3` (ancestor of main tip `c2b3d00c…`). DETERMINISTIC at tested scope. Les invariants SHE ci-dessous restent CURRENT. Les invariants « STRUCTURAL PREPARE requires HD » restent **HISTORICAL / disposition-before-PREPARE** (chemin encore disponible) — ils ne bloquent plus l’inspectable PREPARE sous SHE. Prior wording « CURRENT on Delivery / PR DRAFT pending merge / NOT INTEGRATED ON MAIN » is **HISTORICAL**. ≠ REAL/HQA PROVEN · ≠ P6 GLOBAL PASS · runtime v3 NON ADOPTED.

-## Overlay — PR #618 effect-based confinement + write-mode without Product Binding (LOCAL CANDIDATE — 2026-10-25)
+## Overlay — PR #618 effect-based confinement + write-mode without Product Binding (CURRENT ON MAIN — PR #618 MERGED — DET scope — 2026-10-26)

 | ID | Statement | Status |
 |---|---|---|
-| INV-CONFINE-BY-EFFECT | Mutating Cursor child env follows authorized effects / sealed slice — **not** `isDocsWrite` | **LOCAL CANDIDATE** DET · **NOT ON MAIN** |
-| INV-WRITE-MODE-NO-BINDING | CREATE/UPDATE/ASK for automatic `projects/<key>` uses sealed env probe identity + managed base — **not** `Project.repositoryBinding` | **LOCAL CANDIDATE** DET (PWR routing) · **NOT ON MAIN** |
-| INV-NO-RESTORE-DOCS-WRITE | docs_write Product admission remains **RETIRED** on this branch | **LOCAL CANDIDATE** |
+| INV-CONFINE-BY-EFFECT | Mutating Cursor child env follows authorized effects / sealed slice — **not** `isDocsWrite` | **CURRENT ON MAIN** · **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |
+| INV-WRITE-MODE-NO-BINDING | CREATE/UPDATE/ASK for automatic `projects/<key>` uses sealed env probe identity + managed base — **not** `Project.repositoryBinding` | **CURRENT ON MAIN** · **DETERMINISTIC AT TESTED SCOPE** (PWR routing) · **≠** REAL |
+| INV-NO-RESTORE-DOCS-WRITE | docs_write Product admission remains **RETIRED** on main | **CURRENT ON MAIN** |

 ## Invariant catalog — CURRENT IMPLEMENTED

@@ -145,9 +145,9 @@ Code integrated on main. Invariants apply **when** exclusive is armed (trim=`"1"
 | `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (Start) | F10 R2 | same EC + REAL=1 at Start with prior `accepted` Attempt | Start refused; Attempt stays `accepted`; no launch-port call | none | yes — Fake/DET still OK |
 | `CKC_*` | CKC | incoherent/unavailable mapping | qualification fail | none unauthorized | yes |
 | `AUTHORITY_NOT_CONFIGURED` | authz | missing local Pilot gate | cannot decide | none | yes |
-| `MANAGED_REPO_ROOT_BASE_UNCONFIGURED` | **CURRENT ON MAIN:** docs_write REAL. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** missing managed root still fail-closes; this is no longer a docs_write Product-admission gate. **NOT MERGED** | missing managed root | cannot REAL write | none | yes |
-| `repository_remote_identity_mismatch` | F10 seal (`sealRepositoryBindingFromExecutionInputs`) — **CORR-02 LOCAL DELIVERY CANDIDATE / NOT ON MAIN** | provided remote does not match canonical git-target identity | REAL start refused (`REAL_WORKSPACE_INVALID`); no synthesized GitHub URL fallback | none | yes — DET · **≠** REAL |
-| `managed_repo_identity_mismatch` | managed resolver (`resolveIdentityMatchedLocalRepo` / `guardedManagedRepoRootForProtectedGit`) — **CORR-02 LOCAL DELIVERY CANDIDATE / NOT ON MAIN** | checkout `origin` missing or does not match sealed identity (including one-hop worktree gitfile whose resolved origin mismatches) | protected Git fail-closed (`REAL_WORKSPACE_INVALID`); non-protected work does not fail solely because the checkout is unusable | none | yes — DET · **≠** REAL |
+| `MANAGED_REPO_ROOT_BASE_UNCONFIGURED` | **CURRENT ON MAIN after #618:** missing managed root still fail-closes; **not** a docs_write Product-admission gate (admission RETIRED). Historical « docs_write REAL » association = **HISTORICAL** | missing managed root | cannot REAL write | none | yes |
+| `repository_remote_identity_mismatch` | F10 seal (`sealRepositoryBindingFromExecutionInputs`) — **CORR-02 CURRENT ON MAIN (#618)** | provided remote does not match canonical git-target identity | REAL start refused (`REAL_WORKSPACE_INVALID`); no synthesized GitHub URL fallback | none | yes — DET · **≠** REAL |
+| `managed_repo_identity_mismatch` | managed resolver (`resolveIdentityMatchedLocalRepo` / `guardedManagedRepoRootForProtectedGit`) — **CORR-02 CURRENT ON MAIN (#618)** | checkout `origin` missing or does not match sealed identity (including one-hop worktree gitfile whose resolved origin mismatches) | protected Git fail-closed (`REAL_WORKSPACE_INVALID`); non-protected work does not fail solely because the checkout is unusable | none | yes — DET · **≠** REAL |
 | Session path orphan | Memory B | worktree cwd default | empty transcript UI | Truth C intact | operational |

 Governance STOP ≠ product defect: blocked continuation for UNKNOWN Artifact is **expected**.
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 1325a53c..5c58cd60 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -9,17 +9,20 @@
 - E2E: Playwright `app/e2e/**` (often harness/boundary routes)
 - Conformance (this macro): `app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

-## Overlay — PR #618 CI Reconciliation proof map (LOCAL CANDIDATE — 2026-10-25)
+## Overlay — PR #618 proof map (CURRENT ON MAIN — MERGED + post-merge CI — 2026-10-26)

 | Suite / scope | Result | Epistemic |
 |---|---|---|
-| Baseline CI Vitest (workflow `40207375690`) | 301 FAIL / 65 files / 5721 PASS | **CI FACT** on HEAD `15d3bd39` |
-| `gcecMutatingCursorConfinementEnv.d0.test.ts` | PASS | **DET** P0 confinement |
+| Post-merge CI `40272048259` on merge `fec4e65d` | Detect / Build / **Required Gate SUCCESS** | **CI FACT CURRENT ON MAIN** · event=`push` |
+| Pre-merge CI `40258385791` on `a75d0ed5` | Detect / Build / Required Gate SUCCESS | **HISTORICAL** candidate CI · pull_request |
+| Baseline CI Vitest (`40207375690`) | 301 FAIL / 65 files | **HISTORICAL CI FAILURE** (superseded) |
+| Corrective CI on `ff653b58` (`40215089725`) | 160 FAIL / 44 suites | **HISTORICAL CI FAILURE** (superseded) |
+| `gcecMutatingCursorConfinementEnv.d0.test.ts` | PASS | **DET** confinement · on main via #618 |
 | `gcecCursorFullCapabilityParity.d0.test.ts` | PASS (docs_write parity retired) | **DET** |
-| `nativeExecutionLoopConvergence01.gatewayMission.d0.test.ts` | PASS (docs_write overlay its retired; git/RO/generalist kept) | **DET** |
-| `productWorkspaceArtifactRouting*.d0.test.ts` + natural materialization | PASS | **DET** P1 routing / O-01 without Binding |
-| Original 65 CI-fail files (local re-run after corrective) | 21 PASS / 44 FAIL · 828 PASS / 160 FAIL tests | **LOCAL RECONCILIATION** · residuals explicit · **≠** full CI PASS until post-push |
-| typecheck / lint / build | PASS | **LOCAL** |
+| `nativeExecutionLoopConvergence01.gatewayMission.d0.test.ts` | PASS (docs_write overlay retired; git/RO/generalist kept) | **DET** |
+| `productWorkspaceArtifactRouting*.d0.test.ts` + natural materialization | PASS | **DET** O-01 without Binding |
+| `gitTargetIdentityRemoteFidelity.d0.test.ts` | PASS | **DET** CORR-02 |
+| Deterministic proof ceiling | DET / CI SUCCESS | **≠** REAL · **≠** H4 · **≠** G-ACTIVATION |

 ## Overlay — AKG-M5 L2-D2 proof map (CURRENT ON MAIN — PR #614; DET — 2026-10-24)

@@ -46,9 +49,9 @@

 **Integrated DET batch (pre-commit revalidation):** S1–S4 + freeze + injected + D4 + O-01 + D5 + M1 — **52 PASS / 10 files** (includes CR-S2-02 suite growth). **Anti-claims:** DET ≠ LIVE · H4 **NOT QUALIFIED** · G-ACTIVATION / G-REAL **NOT GRANTED** · exclusive **DEFAULT OFF**.

-## Overlay — CORR-01 restored generic proofs (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+## Overlay — CORR-01 restored generic proofs (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

-docs_write suites retired with the Product specialization are not restored. These rows are the generic mission / wording proofs re-ported on the generalist contract. **NOT MERGED**. **≠** GI. **≠** REAL.
+docs_write suites retired with the Product specialization are not restored. These rows are the generic mission / wording proofs re-ported on the generalist contract. Pre-merge NOT ON MAIN = **HISTORICAL**. **≠** REAL.

 | Suite file | What it proves | Class |
 |---|---|---|
@@ -57,9 +60,9 @@ docs_write suites retired with the Product specialization are not restored. Thes
 | `postExecutionProductContinuity.generic.d0.test.ts` | FAIL / STOP / UNCLAIMED trajectory wording only | **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |
 | `contractResultCriteria.generic.d0.test.ts` | Project-specific EO without a criterion → NOT_PROVEN; `mission_diagnostic` bound to that EO → PASS; `manual_review` → NOT_PROVEN; criterion bound to a different EO does not leak PASS | **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |

-## Overlay — CORR-02 Git target fidelity (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+## Overlay — CORR-02 Git target fidelity (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

-Identity↔remote↔checkout and the tightened FS-anchor allowlist. Docs_write Product suites are **not** restored. **NOT MERGED**. **≠** REAL. **≠** GI.
+Identity↔remote↔checkout and the tightened FS-anchor allowlist. Docs_write Product suites are **not** restored. Pre-merge NOT ON MAIN = **HISTORICAL**. **≠** REAL.

 | Suite file | What it proves | Class |
 |---|---|---|
@@ -120,7 +123,7 @@ Parent handoff `eae8dbe2` listed these under `NO_SEMANTIC_IMPACT` (tests). That
 | Reason | `incompatible_execution_intent` | `no_compatible_artifact_effect` |

 - Scenario: natural materialization signal **without** a `docs_write`-compatible effect under an active cycle with REQUIRE_ARTIFACT.
-- **Epistemic split 2026-10-25:** this oracle wording is **CURRENT ON MAIN** (`7db8afd7`), where a docs_write-compatible effect can still be admitted. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** docs_write Product admission is **RETIRED**, so that specialized effect is not a Product admission path. The historical oracle is superseded history for the local candidate. **NOT MERGED**.
+- **Epistemic split (post-merge 2026-10-26):** **CURRENT ON MAIN after #618:** docs_write Product admission is **RETIRED**, so that specialized effect is not a Product admission path. Oracle wording that assumed admission on `7db8afd7` is **HISTORICAL**.
 - **Does not prove** that a new CycleInstance was created — the same case asserts `countCycles === 1` (resolution alone never invents a cycle).
 - Mode name `NEW_CYCLE_FORMALIZATION` here is a resolution **routing** outcome (D-ER-17: not a dead-end; Generic PREPARE may remain eligible on project/active-cycle context) — **≠** Artifact governed continuation, **≠** CREATE_CYCLE proof.
 - Ceiling: DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). NOT E2E REAL. NOT READY FOR REAL.
@@ -130,7 +133,7 @@ Parent handoff `eae8dbe2` listed these under `NO_SEMANTIC_IMPACT` (tests). That
 Candidate assertions distinguish:

 1. **Generic PREPARE eligible** on same active-cycle / project context (no dead-end force-unbind).
-2. **Artifact governed materialization not authorized** for the natural signal that, **on main**, is non-`docs_write`. **LOCAL DELIVERY CANDIDATE:** docs_write is not a Product admission effect; this bullet stays the historical / main oracle. **NOT MERGED**.
+2. **Artifact governed materialization not authorized** for natural signals that are non-documentary under Generic PREPARE. **CURRENT after #618:** docs_write is not a Product admission effect; pre-merge « on main docs_write still admitted » oracle = **HISTORICAL**.
 3. **No artificial new CycleInstance** (`countCycles` stable; `createCycle` not required by this path).
 4. **No misleading Artifact materialization Proposal** bound as active-cycle governed continuation.

diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index b8f8ceae..4045d293 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,53 +5,37 @@
 - Runtime v3 **NON ADOPTED**
 - This corpus does not change product behavior by itself (Living Reference is descriptive)

-## Overlay — Product RepositoryBinding + docs_write Product specialization (GIT-INTEGRATED PR CANDIDATE / NOT ON MAIN — 2026-10-26)
+## Overlay — Product RepositoryBinding + docs_write Product specialization (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

 | Item | Status |
 |---|---|
-| Decision | **DECIDED BY MORRIS 2026-10-25** (structural removal) · **GO Morris Git Integration consommé** 2026-10-26 |
-| Branch / HEAD | `feat/akg-m5-remove-repository-binding-docs-write` @ **`a75d0ed5785861dd198894ea1c5d7436b6d1840c`** — Draft [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) **OPEN / DRAFT / NOT MERGED** |
-| Git Integration | Commit `refactor(studio): retire Product repository binding and docs_write admission` · **63 files** (60 M + 3 A KEEP helpers) · four orphan docs_write helpers **absent** · Review Pack **excluded** from project commit |
-| GitHub CI | [run `40258385791`](https://github.com/mcleland147/sfia-workspace/actions/runs/40258385791) **COMPLETED / SUCCESS** · event=`pull_request` · HEAD=`a75d0ed5` · Detect **SUCCESS** · Build and validate **SUCCESS** · **SFIA Studio Required Gate SUCCESS** |
-| Local attestations (pre-push) | typecheck/lint/build **PASS** · CI-44 **639 PASS** · `CI=true npm test` **6013 PASS / 142 skipped** (skipped ≠ PASS) |
-| **CURRENT ON MAIN** | `origin/main` `7db8afd7` ([PR #617](https://github.com/mcleland147/sfia-workspace/pull/617) activation prep) **still has** server-owned RepositoryBinding, `SFIA_STUDIO_PROJECT_REPOSITORY_*`, and docs_write Product admission. PR #614 / #616 / #617 facts below stay **main** facts. **#618 code is a pushed Git candidate, not merged.** |
-| RepositoryBinding | **RETIRED ON BRANCH CANDIDATE ONLY** — CreateProject has no `repositoryBinding`; preflight / `.env.example` no longer require `PROJECT_REPOSITORY_*`. **Main retains prior behaviour until #618 merges.** |
-| docs_write Product specialization | **RETIRED ON BRANCH CANDIDATE ONLY** — Product admission (`intentKind` / cap / action) removed from active lib+features. Historical docs_write rows later in this volume remain the **CURRENT ON MAIN** record. Historical Evidence durable-read `execution_attempt:docs_write` **≠** Product docs_write action admission. |
-| Preserved | `projectWorkspaceKey` / `projects/<key>` routing · Generic PREPARE / EC / AES / Cursor generalist / Evidence / ReviewBundle |
-| KEEP helpers (in commit) | `resolveSealedDocsWriteWorktreePaths.ts` · `resolveVerifiedFilesystemMaterializationPriorAttempt.ts` · `fakeCursorDeterministicLaunchPort.ts` |
+| Decision | **DECIDED BY MORRIS 2026-10-25** (structural removal) · **GO Morris Git Integration consommé** · **GO Morris undraft + merge consommé** 2026-10-26 |
+| PR / merge | [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) **MERGED** `2026-10-26T05:01:23Z` · merge **`fec4e65d1c8437f15fc6cf8ea81376d655c79394`** · parents `7db8afd7…` + `ffc033a7…` · feature branch **conservée** @ `ffc033a7` |
+| Post-merge CI | [run `40272048259`](https://github.com/mcleland147/sfia-workspace/actions/runs/40272048259) **SUCCESS** · event=`push` · branch=`main` · HEAD=merge · Detect / Build / **Required Gate SUCCESS** |
+| Pre-merge CI (historical) | [run `40258385791`](https://github.com/mcleland147/sfia-workspace/actions/runs/40258385791) **SUCCESS** on Product HEAD `a75d0ed5` (pull_request) — dated fact |
+| **CURRENT ON MAIN** | **RepositoryBinding RETIRED** · **docs_write Product admission RETIRED** · CreateProject has no `repositoryBinding` · Product admission tokens removed from active lib+features |
+| Preserved | `projectWorkspaceKey` / `projects/<key>` · Generic PREPARE / EC / AES / Cursor generalist / Evidence / ReviewBundle · sealed Git identity (seal-only) |
+| KEEP helpers | `resolveSealedDocsWriteWorktreePaths.ts` · `resolveVerifiedFilesystemMaterializationPriorAttempt.ts` · `fakeCursorDeterministicLaunchPort.ts` |
 | Orphans RETIRE (absent) | `completeBoundedDocsWriteLaunch` · `ingestDocsWriteArtifactEvidence` · `persistDocsWriteArtifactReviewMaterial` · `resolveDocsWriteArtifactAbsolutePath` |
-| Historical CI (superseded) | Baseline Vitest **301 FAIL / 65 files** (`40207375690`) · Corrective on `ff653b58` **160 FAIL / 44 suites** (`40215089725`) — **dated FAILURE facts**; superseded as CI status by **`40258385791` SUCCESS** on `a75d0ed5` |
-| Cycle 8 LOCAL (historical) | Pre-push Cycle 8 on `ff653b58` (no project commit *then*): P0 effect-gated profiles + FakeDocsWrite DET + adversarial Git Start rewrite — **HISTORICAL stage** before Git Integration |
-| Epistemic supersession | PRR **README** canonical block corrected 2026-10-26 (no longer CURRENT **PENDING GIT INTEGRATION**). PRR 03 / 07 / 08 overlays dated 2026-10-25 that still say **PENDING GIT INTEGRATION** or pre-push-only **LOCAL DELIVERY** are **HISTORICAL AS OF `a75d0ed5`** for lifecycle status — **superseded by this overlay + README**. Code remains **NOT ON MAIN** until merge. Residual dated wording in vols 03/07/08 is not rewritten in this R24 cycle. |
+| HISTORICAL stages | LOCAL DELIVERY · Cycle 8 CI FAILURE · GIT-INTEGRATED PR CANDIDATE / Draft / NOT ON MAIN / MERGE NOT GRANTED — **true at their dates**; superseded as CURRENT by this overlay |
+| Epistemic supersession | README + this overlay are **CURRENT**. Volumes 02–08 overlays that still said LOCAL DELIVERY / NOT ON MAIN / PENDING GIT INTEGRATION for #618 are requalified in the same P0 pass to **CURRENT ON MAIN** (or marked HISTORICAL where they correctly describe pre-merge). |
 | KNOWN GAP — Product E2E FS→Git→Review | Front-door généraliste Product E2E physique FS→Git→Review **not re-proven** end-to-end (partially fixture-safe). **OPEN** |
 | KNOWN GAP — FS→SHA Evidence source | Allowlist **historical-only** `execution_attempt:docs_write` (+ dotted suffix). **No new generic Product materialization Evidence source** proven after retirement. **OPEN** |
 | KNOWN GAP — worktree layouts | Checkout origin read: one `.git` gitfile `gitdir` hop (+ `commondir`). Layouts beyond tested hops **fail-closed**. **OPEN** |
 | KNOWN GAP — residual naming | `repositoryBindingIdentity` seal-only field name **KEEP**; env keys `SFIA_STUDIO_PROJECT_REPOSITORY_*` — rename debt. **NOT** `Project.repositoryBinding` SoT. **OPEN** |
-| KNOWN GAP — REAL / H4 / G-ACTIVATION | **NOT QUALIFIED / NOT GRANTED**. **OPEN** — no automatic CLOSED |
-| KNOWN GAP — M3 bounded docs_write Execute | Historical `reachAuthorizedDocsWrite` / Fake docs_write launch path **RETIRED**. Deterministic Fake Execute via generalist for TOCTOU E2E **not** re-proven in PWR application-path suite (routing→Authorize remains). |
+| KNOWN GAP — REAL / H4 / G-ACTIVATION | **NOT QUALIFIED / NOT GRANTED**. **OPEN** |
+| KNOWN GAP — M3 bounded docs_write Execute | Historical Fake docs_write launch path **RETIRED**. Deterministic Fake Execute via generalist for TOCTOU E2E **not** re-proven in PWR application-path suite (routing→Authorize remains). |
 | KNOWN GAP — import deep paths | Prefer `@/lib/vertical-slice-runtime` barrel for managed-repo helpers (importBoundaries allowlist). |
-| Not granted | **H4 / G-REAL / G-ACTIVATION NOT GRANTED** · **AKG-M5 OPEN** · runtime v3 **NON ADOPTED** · merge **NOT GRANTED** · undraft **NOT GRANTED** |
-| Anti-claim | ≠ **MERGED ON MAIN** · ≠ **CI SUCCESS on future R24 SHA** · ≠ **runtime v3 ADOPTED** · ≠ **REAL PROVEN** |
+| Not granted | **H4 / G-REAL / G-ACTIVATION NOT GRANTED** · **AKG-M5 OPEN** · runtime v3 **NON ADOPTED** · exclusive **DEFAULT OFF** |
+| Anti-claim | ≠ exclusive ACTIVATED · ≠ L3 complete · ≠ REAL PROVEN · ≠ AKG-M5 CLOSED · ≠ P6 GLOBAL PASS |
 | CORR-01 — KNOWN GAP | `sameMacroClosure` helpers (`repositorySourcesFromProductFacts` / `normalize*Outcome`) lack a dedicated test after the docs_write suite retirement |
 | CORR-01 — KNOWN GAP | `replan` / `w3cPayloadMatchesCurrentProduct` / `isEvidenceBackedNotProvenUnclaimed` not re-ported |
-| CORR-01 — `repositoryBindingIdentity` | **KEEP** residual field name — sealed **git-target** identity string on ExecutionContract `inputs` / subject; source = server env (`SFIA_STUDIO_PROJECT_REPOSITORY_*`) when canonical via `resolveTrustedProductLaunchContext`; absent / non-canonical → `null` → **Select** fail-closed. **NOT** `Project.repositoryBinding` SoT (no `NewRepositoryBinding`; not written onto Project). `identity: null` in `activeCycleGovernedContinuation` local `WorkspacePathRoot` variable |
-| CORR-01 — restored proofs | Generic ambiguity / mission / criteria / continuity wording proofs restored (`*.generic.d0.test.ts`). **DET at tested scope** · **≠** REAL |
-| CORR-02 — Git target fidelity | Identity↔remote↔checkout **DETERMINISTIC VERIFIED** (`gitTargetIdentityRemoteFidelity.d0.test.ts`). Evidence FS-anchor allowlist tightened. On branch candidate `a75d0ed5` · **NOT MERGED**. **≠** REAL |
-| CORR-02 — D-PC-09 | **NO SEMANTIC IMPACT** on D-PC-09 workspace routing. Historical C1 text is not rewritten. Qualification lives in this volume and volumes 03 / 05 |
+| CORR-01 — `repositoryBindingIdentity` | **KEEP** residual field name — sealed **git-target** identity string on ExecutionContract `inputs` / subject; source = server env (`SFIA_STUDIO_PROJECT_REPOSITORY_*`) when canonical via `resolveTrustedProductLaunchContext`; absent / non-canonical → `null` → **Select** fail-closed. **NOT** `Project.repositoryBinding` SoT. |
+| CORR-01 — restored proofs | Generic ambiguity / mission / criteria / continuity wording proofs restored (`*.generic.d0.test.ts`). **DET at tested scope** · **≠** REAL · **CURRENT ON MAIN** via #618 |
+| CORR-02 — Git target fidelity | Identity↔remote↔checkout **DETERMINISTIC VERIFIED** (`gitTargetIdentityRemoteFidelity.d0.test.ts`). Evidence FS-anchor allowlist tightened. **CURRENT ON MAIN** via #618 · **≠** REAL |
+| CORR-02 — D-PC-09 | **NO SEMANTIC IMPACT** on D-PC-09 workspace routing. Historical C1 text is not rewritten. |

-## Overlay — AKG-M5 L2-D2 local OA cutover readiness (CURRENT ON MAIN — PR #614; Cycle 14 truth-sync — 2026-10-24)
-
-| Item | Status |
-|---|---|
-| Epistemic | **CURRENT ON MAIN** — [PR #614](https://github.com/mcleland147/sfia-workspace/pull/614) MERGED `1a0ccd84…` · [CI #40130977607](https://github.com/mcleland147/sfia-workspace/actions/runs/40130977607) SUCCESS · marker **DEFAULT OFF / NOT ACTIVATED** |
-| Pre-merge history | Local Delivery / CORR-02 / R24 / Cycle13 digests / G-GIT Draft PR = **HISTORICAL stages** (handoffs `ceb0a69d` / `85f15081` / `f23c4f54` / `e6e43b5b`) |
-| G-ACTIVATION | **OPEN** — no Studio live arming ; no definitive App Support DBs by merge |
-| DET proof | **31 PASS / 7 suites** + post-merge CI SUCCESS |
-| O-01 « comprendre » | LPS objective → Product UI **BEHAVIOR PROVEN AT TESTED SCOPE (DET)** — **≠** LIVE E2E COMPLETE |
-| **R-01** documentary lag | Documentary lag corrected and integrated on main through [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) · post-merge CI [#40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · **exit proof satisfied** · **formal close pending Morris** (**≠** FORMALLY CLOSED BY MORRIS) |
-| **R-02** D4 LIVE | DET redirect/notFound + S3 harness proven · Studio/HTTP LIVE path **NOT PROVEN** · **R-02 remains OPEN** |
-| **R-03** SQLite / raw DB | Snapshot DET **PARTIAL** (**CR-S1-01**) · applicative `openD1Db` native allowlist + authorizer DET-proven (**CR-S2-01/02**) · residual raw `new DatabaseSync` outside `openD1Db` **KNOWN GAP** · R-03 FULL CLOSE **NOT CLAIMED** |
-| Q12 RO fallback | **OPEN** — S4 uses test-only disposable RO diagnostic ≠ product Q12 |
+ — S4 uses test-only disposable RO diagnostic ≠ product Q12 |
 | OPS1 | **OUT** of initial D4 · unchanged |
 | Q15 global | **PARTIAL** |
 | R-CUT DET | **PASS** (CORR-01: exclusive stays ON through final D1 oracle) |
@@ -172,7 +156,7 @@
 |---|---|---|
 | Natural active-cycle materialization routing corrected (#532) | CONFIRMED | continuity tests on main |
 | Artifact applicability bridge corrected (#533) | CONFIRMED | bridge helpers on HEAD |
-| D-PC-09: filename candidate + server exact target; no micro-gate | CONFIRMED (doc) on main for workspace routing. `projects/<key>` **PRESERVED** in the 2026-10-25 local candidate. Server-owned RepositoryBinding projection stays **CURRENT ON MAIN** (`7db8afd7`) and is superseded only as **LOCAL DELIVERY CANDIDATE / NOT ON MAIN**. **CORR-02: NO SEMANTIC IMPACT** on this routing sentence; sealed git-target fidelity is not a D-PC-09 rewrite | product-completion cadrage amendment; historical D-PC-09 text not rewritten |
+| D-PC-09: filename candidate + server exact target; no micro-gate | CONFIRMED (doc) on main for workspace routing. `projects/<key>` **PRESERVED**. Server-owned RepositoryBinding projection is **RETIRED ON MAIN** via #618 (historical on `7db8afd7` before merge). **CORR-02: NO SEMANTIC IMPACT** on this routing sentence; sealed git-target fidelity is not a D-PC-09 rewrite | product-completion cadrage amendment; historical D-PC-09 text not rewritten |
 | REAL PocketTasks asked Pilot for filename | OBSERVATION | campaign UX; REAL not re-run here |
 | Fake may derive `note-de-cadrage.md`; REAL may leave null | MITIGATED Fake / REAL still provider-dependent | Fake now uses provider-neutral leaf cues; REAL not re-run |
 | MW5 may re-challenge structurally resolved continuation | MITIGATED at tested scope | `structurallyResolvedActiveCycleContinuation` |
@@ -239,7 +223,7 @@ R-M3A-01 OPEN · R-M3B-01 OPEN · R-G6-SR-01…04 = correction candidates under
 - **CP4-02 OPTION C IMPLEMENTED** — Studio Product write protection = sandbox floor ∪ `STUDIO_GOVERNANCE_PROTECTED_PATHS` (framing prefix + exact Build Doctrine / Roadmap / D-ER architecture / C1). No blanket `projects/sfia-studio/**` deny. No Campus360/CT `SFIA_DEFAULT_PROTECTED_PATHS` as Product classifier.
 - Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** (at time of that macro) · ZERO REAL · READY FOR REAL **NO** · runtime v3 **NON ADOPTED**.
 - Historical: Correction Pass 04 STOP (Morris decision required on CP4-02) superseded by MD-CP4-01/MD-CP4-02 resume — see prior tip / handoff `2daf0dc3…`.
-- docs_write adapters: **CURRENT ON MAIN** — TRANSITIONAL bridge retained (dual-write Review Material) — exit when historical callers = 0. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN (2026-10-25):** docs_write Product admission is **RETIRED**; this bridge sentence is superseded history for that candidate and is **NOT MERGED**. Do not read it as proof the bridge was deleted.
+- docs_write adapters: **HISTORICAL ON MAIN before #618** — TRANSITIONAL bridge retained while admission existed. **CURRENT ON MAIN after PR #618 MERGED:** docs_write Product admission is **RETIRED**; do not read residual bridge sentences as Product admission. Historical Evidence `execution_attempt:docs_write` durable-read **≠** admission.
 - `durableLocalWriteSeal` domain seam: **TRANSITIONAL** (isolated domain/tests only) — exit when GOVERNED trajectory Product carrier is retired or superseded; never browser/client.
 - NoteLite REAL replay: **NOT DONE** (PAUSED; distinct Morris GO).
 - Retention GC / Git promotion: **NOT IMPLEMENTED**.
@@ -266,8 +250,8 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | Item | Status |
 |---|---|
 | Cursor report machine-readable protocol in EC→Cursor prompt | AS-IMPLEMENTED — `CURSOR_EXECUTION_REPORT_JSON=` required |
-| docs_write report **runtime** required (not optional) | **CURRENT ON MAIN** — `CURSOR_EXECUTION_REPORT_REQUIRED` / `_MALFORMED` / bind fail-closed; Attempt may stay succeeded. **LOCAL DELIVERY CANDIDATE:** docs_write Product admission **RETIRED** / **NOT ON MAIN**; do not promote this row to the local candidate |
-| docs_write report continuity after `completeBoundedDocsWriteLaunch` | **CURRENT ON MAIN** — bind + persist claim beside Artifact Evidence. Superseded history for the 2026-10-25 local candidate. **NOT MERGED** |
+| docs_write report **runtime** required (not optional) | **HISTORICAL** for specialized docs_write admission path. **CURRENT ON MAIN after #618:** Product admission **RETIRED**; generalist report/bind rules follow Generic Execution — do not re-admit docs_write |
+| docs_write report continuity after `completeBoundedDocsWriteLaunch` | **HISTORICAL** — helper **RETIRED / ABSENT** on main after #618. Do not treat as CURRENT Product path |
 | Durable artifact review without hot worktree / Pilot paste | AS-IMPLEMENTED — `external_payload_ref` under existing mission-result-refs layout |
 | Claim completion result propagation | AS-IMPLEMENTED — closed classifier; only headings-missing / empty-content → NOT_PROVEN; oracle/integrity/lineage/unknown → continuity fail-closed |
 | Nora grounding (contract + report + artifact FULL/PARTIAL + CE) | AS-IMPLEMENTED at tested scope — no PATH_NOT_ALLOWED for governed artifact handoff |
@@ -307,7 +291,7 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | `repositoryMutation` absent **without** `read_only` | **FORBIDDEN** as pathless NON_STRUCTURAL — fail-closed (`repository_mutation_claim_absent` / Materiality UNKNOWN) |
 | `repositoryMutation` unknown / write → pathless NON_STRUCTURAL | **FORBIDDEN** — fail-closed |
 | Nora `repositoryMutation` / `read_only` alone as Product authority | **INSUFFICIENT** — live context, envelope, contradiction checks still apply |
-| Structural / protected-path / elevated caps / docs_write disguise | **PRESERVED on main** — HD / refuse paths KEEP. **LOCAL DELIVERY CANDIDATE:** the retired document-write token stays outside the generalist envelope (refuse, not re-admission). **NOT MERGED** |
+| Structural / protected-path / elevated caps / docs_write disguise | **PRESERVED / CURRENT ON MAIN after #618** — HD / refuse paths KEEP; retired document-write token stays outside the generalist envelope (refuse, not re-admission) |
 | Inspect ≠ Execute; server Confirm/Authorize/Execute distinct | **PRESERVED** — Exécuter may fold Confirm after attest only |
 | Cursor REAL generalist technical no-write | **ABSENT** — debt open |
 | R2 Select (REAL + pathless non-mutating) | **CURRENT ON MAIN** — refuse **before new Attempt**; code `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` |
@@ -326,7 +310,7 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | `no_require_artifact` aliased as NEW_CYCLE_FORMALIZATION | **FORBIDDEN** — preserved |
 | Invented REQUIRE_ARTIFACT / silent HD for optional documentary | **FORBIDDEN** — preserved |
 | Applicable Artifact obligation / REQUIRE_ARTIFACT path | **PRESERVED** — Generic PREPARE does not bypass Artifact governance |
-| Intent fidelity (`docs_write` / missionEffects) | **CURRENT ON MAIN** — offer → rebuild → inspectable contract at tested scope. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** `docs_write` is not a Product admission `intentKind`; documentary work uses generic PREPARE. **NOT MERGED** |
+| Intent fidelity (`docs_write` / missionEffects) | **CURRENT ON MAIN after #618:** `docs_write` is **not** a Product admission `intentKind`; documentary work uses generic PREPARE. Historical offer/rebuild sentences that assumed admission are **HISTORICAL** |
 | Capability envelope | Exact Product identities only; substring spoofing fail-closed |
 | Nora proposed path as authorized expectedOutput | **FORBIDDEN** at Generic PREPARE when unresolved — candidate only (`unresolved_nora_candidate`) |
 | Pending Generic PREPARE offer persistence | **PROCESS-LOCAL** — restart-unsafe; re-offer required |
@@ -410,7 +394,7 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 No `retired-components-ledger.md` — zero components removed.

 ### CP4 residual reserves (acceptable debt after resume)
-- docs_write compatibility bridges retained on **CURRENT ON MAIN**. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN (2026-10-25):** Product admission of that specialization is **RETIRED**; bridges are not claimed deleted by this note. **NOT MERGED**
+- docs_write compatibility bridges: **HISTORICAL** while admission existed. **CURRENT ON MAIN after #618:** Product admission **RETIRED**; bridges are not claimed physically deleted by this note, and must not be read as re-admission
 - Review Material GC/retention not implemented
 - Git promotion of reviewed candidate not implemented
 - NoteLite REAL re-proof deferred (Morris GO distinct)
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index 35902ec2..06b8e718 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -46,21 +46,22 @@ Fake/DET remains the deterministic proof path for R1/R2 at tested scope. Determi

 Cycle 14 documentary truth-sync [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) **MERGED** · merge `7b64ab21aa29211d5fce93d06d24bce539a0c5a5` · [post-merge CI #40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · eight Cycle-14 digests on main · **R-01 exit proof satisfied** · formal close **NOT CONSUMED** · digest match ≠ semantic exhaustiveness (**NO PRODUCT SEMANTIC IMPACT**) · code L2-D2 remains DEFAULT OFF / NOT ACTIVATED (PR #614 distinct).

-**Main tip truth-sync (2026-10-25):** [PR #617](https://github.com/mcleland147/sfia-workspace/pull/617) **MERGED ON MAIN** · merge `7db8afd7c27720712f08000274dbbc4e1a62d935` = `origin/main` · [CI #40169014052](https://github.com/mcleland147/sfia-workspace/actions/runs/40169014052) **SUCCESS** · L2-D2 activation prep S1–S4 is **CURRENT ON MAIN**. [PR #616](https://github.com/mcleland147/sfia-workspace/pull/616) **MERGED** `d7aad77e999e4fe64f31a776ddf39c1d99278b1b` (R-01 evidence status) sits between #615 and #617. Exclusive remains **DEFAULT OFF / NOT ACTIVATED**. **G-ACTIVATION / G-REAL NOT GRANTED**. This truth-sync does **not** retire RepositoryBinding or docs_write Product admission — both remain historically present on `7db8afd7`.
+**Main tip truth-sync (2026-10-25):** [PR #617](https://github.com/mcleland147/sfia-workspace/pull/617) **MERGED ON MAIN** · merge `7db8afd7c27720712f08000274dbbc4e1a62d935` = `origin/main` · [CI #40169014052](https://github.com/mcleland147/sfia-workspace/actions/runs/40169014052) **SUCCESS** · L2-D2 activation prep S1–S4 is **CURRENT ON MAIN**. [PR #616](https://github.com/mcleland147/sfia-workspace/pull/616) **MERGED** `d7aad77e999e4fe64f31a776ddf39c1d99278b1b` (R-01 evidence status) sits between #615 and #617. Exclusive remains **DEFAULT OFF / NOT ACTIVATED**. **G-ACTIVATION / G-REAL NOT GRANTED**. At that date this truth-sync did **not** retire RepositoryBinding or docs_write Product admission — both were then present on `7db8afd7`. **Superseded for Product retirement by PR #618 MERGED** (`fec4e65d`).

 **G-ACTIVATION PREPARATION S1–S4 + CORR-01 + CR-S2-02 (IMPLEMENTED — DET scope — CURRENT ON MAIN via PR #617 — 2026-10-25):** Product `VACUUM INTO` snapshot/restore (closed_copy unavailable; RO integrity) · `openD1Db` native **allowlist** Proxy (closes `setAuthorizer`/`createTagStore`/`deserialize`/deferred `iterate` escapes — **CR-S2-01/02**) · D4 DET harness · R-CUT DET rehearsal (exclusive held; disposable RO D1 oracle ≠ Q12). Volumes 05–09 describe this behaviour. **Operational anti-claims (unchanged by Git Integration):** exclusive **DEFAULT OFF / NOT ACTIVATED** · G-ACTIVATION / G-REAL **NOT GRANTED** · H4 real instance **NOT QUALIFIED** · D4 HTTP LIVE / R-CUT LIVE **NOT PROVEN** · raw `new DatabaseSync` outside `openD1Db` **KNOWN GAP** · Q12 **OPEN** · runtime v3 **NON ADOPTED**.

-**Product RepositoryBinding + docs_write Product specialization — GIT-INTEGRATED PR CANDIDATE / NOT ON MAIN (2026-10-26):**
+**Product RepositoryBinding + docs_write Product specialization — CURRENT ON MAIN — PR #618 MERGED (2026-10-26):**

 | Epistemic class | Element |
 |---|---|
-| **CURRENT ON MAIN** | `origin/main` `7db8afd7` (PR #617) still has server-owned RepositoryBinding on CreateProject, `SFIA_STUDIO_PROJECT_REPOSITORY_*` in preflight / `.env.example`, and docs_write Product admission (`intentKind` / cap / action) in active lib+features. Main retains that behaviour until [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) merges. |
-| **GIT-INTEGRATED PR CANDIDATE / NOT ON MAIN** | Branch `feat/akg-m5-remove-repository-binding-docs-write` @ HEAD **`a75d0ed5785861dd198894ea1c5d7436b6d1840c`**. **DECIDED BY MORRIS 2026-10-25**. **GO Morris Git Integration CONSUMED** 2026-10-26. Commit `refactor(studio): retire Product repository binding and docs_write admission` (63 files). **RepositoryBinding RETIRED ON BRANCH CANDIDATE ONLY**. **docs_write Product admission RETIRED ON BRANCH CANDIDATE ONLY**. Preserved: `projectWorkspaceKey` / `projects/<key>` · Generic Execution · sealed Git identity · Evidence / ReviewBundle · transitional historical durable-read `execution_attempt:docs_write` (≠ Product admission). |
-| **CI / Review** | [CI #40258385791](https://github.com/mcleland147/sfia-workspace/actions/runs/40258385791) **COMPLETED / SUCCESS** (Detect · Build and validate · **Required Gate** · event=`pull_request` · HEAD=`a75d0ed5`). Critical Review post-push **PASS WITH RESERVES**. |
-| **PR / Gates** | Draft [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) **OPEN / DRAFT / NOT MERGED**. Merge **NOT GRANTED**. **H4 NOT QUALIFIED** · **G-REAL NOT GRANTED** · **G-ACTIVATION NOT GRANTED**. **AKG-M5 OPEN**. Runtime v3 **NON ADOPTED**. REAL **NOT PROVEN**. |
-| **Anti-claims** | ≠ **INTEGRATED ON MAIN** · ≠ **MERGED ON MAIN** · ≠ exclusive ACTIVATED · ≠ REAL PROVEN · ≠ P6 GLOBAL PASS · ≠ CI SUCCESS on a future R24 documentary SHA · historical D-PC-09 / docs_write sentences in volumes 02–09 stay the **main** record until merge |
+| **CURRENT ON MAIN** | Merge [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) · merge SHA **`fec4e65d1c8437f15fc6cf8ea81376d655c79394`** · parents `7db8afd7…` + `ffc033a7…` · [post-merge CI #40272048259](https://github.com/mcleland147/sfia-workspace/actions/runs/40272048259) **SUCCESS** (Detect · Build · **Required Gate**). **RepositoryBinding RETIRED ON MAIN** (CreateProject has no `repositoryBinding`; `SFIA_STUDIO_PROJECT_REPOSITORY_*` removed from CreateProject preflight / `.env.example` as Product SoT). **docs_write Product admission RETIRED ON MAIN** (`intentKind` / cap / action removed from active lib+features). |
+| **PRESERVED** | `projectWorkspaceKey` / `projects/<key>` · Generic PREPARE / ExecutionContract / AuthorizedExecutionSlice / Cursor generalist · Evidence / ReviewBundle · sealed Git identity (env seal-only via `resolveTrustedProductLaunchContext`; residual field name `repositoryBindingIdentity`) · KEEP helpers (`resolveSealedDocsWriteWorktreePaths` · `resolveVerifiedFilesystemMaterializationPriorAttempt` · `fakeCursorDeterministicLaunchPort`) · historical Evidence durable-read allowlist `execution_attempt:docs_write` (**≠** Product admission). |
+| **HISTORICAL (pre-merge)** | GIT-INTEGRATED PR CANDIDATE / NOT ON MAIN · Draft OPEN · MERGE NOT GRANTED · main tip `7db8afd7` still had Binding + docs_write admission — **true before merge**; superseded by this block. Pre-merge CI `#40258385791` SUCCESS on `a75d0ed5` remains a dated fact. |
+| **KNOWN GAPS** | Product E2E FS→Git→Review **not re-proven** end-to-end · FS→SHA Evidence source **historical-only** (no new generic Product materialization Evidence source proven) · worktree layouts beyond tested hops fail-closed · residual naming / env-key rename debt · H4 / Q12 / R-CUT LIVE / G-ACTIVATION **OPEN**. |
+| **Gates not consumed** | **H4 NOT QUALIFIED** · **G-REAL NOT GRANTED** · **G-ACTIVATION NOT GRANTED** (exclusive **DEFAULT OFF**) · runtime v3 **NON ADOPTED** · REAL **NOT PROVEN** · P6 GLOBAL **NOT PASSED** · **AKG-M5 GLOBAL OPEN**. |
+| **Anti-claims** | ≠ exclusive ACTIVATED · ≠ L3 Delivery complete · ≠ REAL PROVEN · ≠ AKG-M5 CLOSED · ≠ digest match = semantic exhaustiveness |

-- **CORR-01 / CORR-02 (HISTORICAL STAGES → `a75d0ed5`):** Local Delivery corrections (generic invariant coverage + Git target fidelity DET; FS-anchor allowlist historical `execution_attempt:docs_write`) led to the Git-integrated candidate commit. They are **not** a separate pending GI status. Detail: volume 09 overlay. **NOT MERGED**. **≠** REAL.
+- **CORR-01 / CORR-02:** Local Delivery corrections (generic invariant coverage + Git target fidelity DET; FS-anchor allowlist historical `execution_attempt:docs_write`) are **ancestors of main** via #618. Detail: volume 09. **≠** REAL.

 Canonical detail for lifecycle, known gaps, and main-vs-branch split: **[09 — Known Gaps](./09-known-gaps-reserves-and-current-boundaries.md)**. Volumes 03/07/08 dated 2026-10-25 overlays that still say pre-push **LOCAL DELIVERY** / **PENDING GIT INTEGRATION** are **HISTORICAL AS OF `a75d0ed5`** for lifecycle status (superseded by vol 09 + this README block). Behaviour marked **CURRENT ON MAIN** in those volumes remains main truth until merge.

@@ -77,7 +78,7 @@ This corpus describes **how SFIA Studio actually works** in Git:
 - tests and proof oracles;
 - impact-analysis procedure for future changes.

-For RepositoryBinding and docs_write Product admission, **CURRENT ON MAIN** (`origin/main` `7db8afd7`) wins over the Git-integrated PR candidate (`a75d0ed5` / Draft PR #618) until merge.
+For RepositoryBinding and docs_write Product admission, **CURRENT ON MAIN** is the **#618 merge tip** (`fec4e65d`): both Product specializations are **RETIRED**. Pre-merge sentences that describe Binding/docs_write as still on `7db8afd7` are **HISTORICAL SNAPSHOTS**.

 It is the primary **impact-analysis substrate** for future Studio corrections.

diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 1d27e568..8c284734 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -7,7 +7,7 @@
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "e7e4c631d181781f"
+      "sha256_16": "239b50320868c320"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -15,35 +15,35 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md",
-      "sha256_16": "29f5090856249f87"
+      "sha256_16": "2257a20206c6a69d"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "a5a30590681df038"
+      "sha256_16": "cf5793d50ce88663"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "768d13f5c4e16b02"
+      "sha256_16": "a2515300ecf7962a"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
-      "sha256_16": "a861c7e12a6eabb2"
+      "sha256_16": "5190232c2ad6f741"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "0a28f40356eb10e0"
+      "sha256_16": "478e066769082203"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "3950105c0c28fdf6"
+      "sha256_16": "8265b1af9b9dcf2a"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "457b71e0dc906d9c"
+      "sha256_16": "f7f8e9e1bc07da26"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "4c0b16bd2723f6e8"
+      "sha256_16": "d4f8c546633fff31"
     }
   ],
   "components": [

```

## G. Tableau CURRENT / HISTORICAL / GAP

| Claim | Class |
|---|---|
| PR #618 MERGED · merge fec4e65d · CI #40272048259 SUCCESS | CURRENT FACT |
| RepositoryBinding RETIRED ON MAIN · docs_write Product admission RETIRED ON MAIN | CURRENT FACT / CODE VERIFIED |
| projectWorkspaceKey + Generic Execution + Evidence/RB + sealed Git identity preserved | CURRENT FACT |
| Pre-merge Draft / NOT ON MAIN / MERGE NOT GRANTED / Binding still on 7db8afd7 | HISTORICAL SNAPSHOT |
| CI failures 40207375690 / 40215089725 | HISTORICAL |
| Pre-merge CI SUCCESS 40258385791 on a75d0ed5 | HISTORICAL candidate fact |
| CORR-01/02 DET suites · confinement/write-mode without Binding | DETERMINISTIC AT TESTED SCOPE · CURRENT ON MAIN |
| L2 exclusive DEFAULT OFF · G-ACTIVATION NOT GRANTED | CURRENT FACT |
| H4 / Q12 / R-CUT LIVE / Product E2E FS→Git→Review / FS→SHA generic | KNOWN GAP / NOT PROVEN |
| REAL / G-REAL / runtime v3 / AKG-M5 CLOSED / P6 GLOBAL PASS | NOT PROVEN / NOT GRANTED / OPEN |
| Option A or B as next Delivery | TARGET / NOT DECIDED |

## H. Manifest digests recalculés

| Volume | sha256_16 |
|---|---|
| README.md | 239b50320868c320 |
| 01 (unchanged) | 8bfbcb286b053f04 |
| 02 | 2257a20206c6a69d |
| 03 | cf5793d50ce88663 |
| 04 | a2515300ecf7962a |
| 05 | 5190232c2ad6f741 |
| 06 | 478e066769082203 |
| 07 | 8265b1af9b9dcf2a |
| 08 | f7f8e9e1bc07da26 |
| 09 | d4f8c546633fff31 |

lastReviewedCommit=928ab15b032c392dafee74a916f2faad3ed524de · lastReviewedAt=2026-10-15T22:51:00+02:00 — unchanged (digest sync ≠ full corpus audit).

## I. Conformance et validations
- npx vitest run __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts → 5/5 PASS
- git diff --check → clean
- staged empty · DOC-only scope · no Product/source/test edits
- Digest match ≠ semantic exhaustiveness

## J. Matrice L2 actuelle

| CAPACITÉ | MILESTONE | CURRENT AS IMPLEMENTED | PREUVES | KNOWN GAPS | DÉPENDANCES | DET/REAL | DETTE+EXIT | MORRIS GATE | EXIT PROOF | NEXT |
|---|---|---|---|---|---|---|---|---|---|---|
| L2-D1 OA create/audit | #612 | Product OA create + D5 UnitOfWork on main | CI #40082088441 · Q5.x DET | Dual UX until activation | L1 A09 | DET yes / LIVE E2E COMPLETE NOT PROVEN | Dual UX → exit via activation | G-ACTIVATION distinct | No D1 writers on activated env | Arm after H4 |
| L2-D2 OA-exclusive readiness | #614/#617 | Marker + freeze + D4 DET + S1–S4 prep DEFAULT OFF | 31/7 · 52/10 DET · CI #40130977607/#40169014052 | LIVE cutover | D1 + H4 | DET ≠ LIVE | Archive RO needs owner | G-ACTIVATION | Q8/Q9 on named env | Not global cutover |
| H4 env coverage | Gate | Local/fixture ≠ prod | DOCUMENTED R-VOL-01 | Prod UNKNOWN | Policy owner | N/A | R-VOL-01 OPEN | H4 per env | Checklist green | Block G-ACTIVATION without H4 |
| Snapshot/restore | #617 S1 | VACUUM INTO DET | S1 DET | LIVE App Support restore NOT PROVEN | Before freeze | DET / LIVE gap | R-L2D2-SQLITE-SNAPSHOT | Part of activation | Backup+checksum | Target env |
| Q12 / R-CUT | #614/#617 S4 | R-CUT DET PASS | S4 DET | Q12 OPEN · R-CUT LIVE NOT PROVEN | H4 + D4 | DET / LIVE no | Unfreeze write forbidden | G-ACTIVATION then LIVE | No writer leak | Product RO oracle |
| D3 migration | Conditional | Not default-required | — | Need-based only | Real need | — | — | Distinct GO if needed | — | Prefer activation first |
| D4/D6/D7/H1 | L2 residual | D4 DET redirect; MethodMode hold ACTIVE; D6 UNASSIGNED | D4 DET | D4 HTTP LIVE NOT PROVEN; H1 OPEN | H4 | DET / LIVE gaps | MethodMode RETIRE LATER | Formal H1; D6 owner | Q6/Q7/Q10/Q11 | Freeze ≠ delete |

L2 aggregate: Delivery on main · exclusive DEFAULT OFF / NOT ACTIVATED · G-ACTIVATION / G-REAL NOT GRANTED · H4 OPEN.

## K. Matrice L3 actuelle

| CAPACITÉ | MILESTONE | CURRENT AS IMPLEMENTED | PREUVES | KNOWN GAPS | DÉPENDANCES | DET/REAL | DETTE+EXIT | MORRIS GATE | EXIT PROOF | NEXT |
|---|---|---|---|---|---|---|---|---|---|---|
| Generic PREPARE / EC | Pre-M5 + #618 | Socle intégrés; docs_write ≠ intentKind | PR #588/#590 · #618 CI | Pending offer process-local (H3/L4) | Cap matrix · sealed identity | DET / REAL NOT PROVEN | Carrier restart-unsafe | Distinct L3/L4 | Inspectable EC | Reuse; no re-admit docs_write |
| AuthorizedSlice / Cursor | A04/A12 target | Fake DET; Real gateway; OPS1 ≠ Product exclusive | DET Fake | R-EXCL NOT PROVEN | H2/H5 | DET ≠ REAL | Flag rename after exclusivity | H2; H5; R-EXCL; G-REAL | Exclusive Product REAL | Do not claim REAL from #618 |
| Evidence / ReviewBundle | Continuity | Preserved; historical docs_write allowlist | DET continuity · CORR-02 | Generic materialization Evidence source not proven | FS allowlist | DET / REAL gap | Keep historical ≠ admission | — | Evidence without false admission | Define generic FS Evidence |
| FS→Git→Review | L3 critical | Front-door généraliste not re-proven E2E | Partial fixture-safe | KNOWN GAP OPEN | Workspace key + sealed identity | NOT PROVEN E2E | Restore generalist E2E oracle | GO L3 proof | Product E2E PASS | Priority if Option B |
| FS→SHA | CORR-02 | Historical-only allowlist | CODE VERIFIED | No new generic source | #618 retirement | DET historical / generic GAP | Tighten ≠ invent | — | Named generic source + tests | Pair with FS→Git |
| H2/H5/R-EXCL/REAL | L3 gates | Tool-First R1/R2 DET; TOOL-FIRST-REAL-NOWRITE OPEN | PRR 07/09 | H2/H5/R-EXCL OPEN | Cap matrix | DET / REAL NOT PROVEN | Don't retire OPS1 early | H2; H5; R-EXCL; G-REAL | Exclusive REAL proved | Block premature REAL |
| Nora→Result→Pilot | L3/L4 | Nora DET; Pilot authority | Nora/P6 DET | LIVE HQA NOT PROVEN | L4 ownership | DET / REAL gap | Continuity carriers H3 | — | Honest result | L4 after L2/L3 |

#618 effect on L3: structural precondition — ≠ L3 started / ≠ R-EXCL / ≠ REAL.

## L. Dépendances et trajectoire L1–L6

| Lot | Status after #618 | Proof ceiling | Next |
|---|---|---|---|
| L1 A09 | DONE on main (#609) | BEHAVIOR PROVEN AT TESTED SCOPE | D1 adapter transitional |
| L2 Intake/cutover | Code on main; ops NOT ACTIVATED | DET proven; LIVE NOT PROVEN | H4 → G-ACTIVATION → R-CUT LIVE → Q12 |
| L3 Generic Execution Completeness | Delivery NOT STARTED; #618 clears specialization debt | Generic DET prior; E2E/FS→SHA gaps OPEN | Distinct GO L3 |
| L4 PA/carriers | NOT STARTED | DOCUMENTED | Needs coherent L2+L3 exclusive Product |
| L5 studio UX | NOT STARTED | DOCUMENTED | After L4 |
| L6 Freeze/retire | PARTIAL prep (FREEZE gated / RETIRE LATER) | NOT PROVEN as retire | After L2/L3 proofs |

## M. Options A / B et challenge

### OPTION A — Finir L2
- Pourquoi: code L2 mergé mais exclusive OFF; dual UX + D1 writers restent default
- Réutiliser: #614/#617 marker/snapshot/allowlist/D4/R-CUT DET · D5 · O-01 DET · #618 workspace-key
- Gaps fermés: H4 · Q12 · R-CUT LIVE · D4 HTTP LIVE · path FREEZE/RETIRE LATER
- Exit proof: Named-env GO → backup → freeze → exclusive ON → Q8/Q9/Q12 → no dual-write
- Risque: activer sans H4; DET=LIVE; unfreeze write; prod UNKNOWN as empty
- Gates: H4 → G-ACTIVATION → LIVE verify
- Entry/STOP: Entry=H4 green; STOP=writer leak / dual-write / snapshot fail
- 1er résultat user: create/list/open Project only via Studio/OA on activated env
- L4–L6: unlocks exclusive Product input for L4; L6 retire D1 after consumers=0

### OPTION B — Avancer L3
- Pourquoi: #618 a retiré les spécialités; Generic PREPARE/EC existent; L3 = Attempt/Evidence completeness
- Réutiliser: Attempt stack · Fake Cursor · sealed identity · Evidence/RB · Tool-First · KEEP helpers
- Gaps fermés: FS→Git→Review E2E · generic FS→SHA · H2/H5 toward R-EXCL
- Exit proof: Exclusive Product Attempt DET→bounded REAL with R-EXCL oracles
- Risque: REAL from DET; dual intake unresolved; re-admit docs_write
- Gates: GO L3 · H2 · H5 · R-EXCL · G-REAL (≠ G-ACTIVATION)
- Entry/STOP: Entry=L3 GO; STOP=REAL without exclusivity / Evidence invention
- 1er résultat user: Pilote Exécute generic governed Attempt with inspectable EC+Evidence (DET first)
- L4–L6: feeds L4; OPS1 retire only after R-EXCL

Séquencement: ne pas lancer A∥B automatiques. Parallel tracks only with separate GOs and explicit non-claims.

## N. Recommandation conditionnelle (≠ décision)
Conditional lean: Option A (finish L2 operational closure) before L3 Delivery, treating #618 as landed structural prep that L3 will reuse—not as L3 progress.
Grounding: (1) L2 remaining gap is governance/LIVE not CreateProject wiring; (2) L4 needs both L2+L3 coherent; (3) #618 opened Evidence E2E gaps that belong under L3 GO, not reasons to skip L2 activation proof.

## O. Exit proofs et dettes/exit
- P0 exit (this cycle): Roadmap CURRENT MERGED · PRR CURRENT ON MAIN · digests · conformance PASS · L2/L3 matrices · Options · handoff L3 — local authoring; project GI NOT this GO
- Open debts: H4 · Q12 · R-CUT LIVE · FS→Git→Review · FS→SHA generic · residual naming · exclusive OFF · REAL/H4/G-ACTIVATION · MethodMode hold · D1 FREEZE/RETIRE LATER · documentary GI of this P0

## P. R23 / R24
- R23: Comprehension only of CreateProject / OA / exclusive / Generic PREPARE / AES / Cursor / Evidence / sealed Git — no Product code edits
- R24: Documentary status sync only · NO PRODUCT SEMANTIC IMPACT
- Classifications: Binding/docs_write Product admission = RETIRE (done on main) · KEEP workspace key / Generic / Evidence / sealed identity · COMPLETE L2 LIVE / L3 E2E under future GOs · RETIRE LATER D1/OPS1 ≠ delete permission

## Q. Fake / Real Qualification
- Applicable: qualification of existing proofs only
- Fake/DET: CI SUCCESS on exact SHAs · DET suites cited · ≠ new REAL campaign
- Claims allowed: Git integrated · CI SUCCESS · DET at tested scope · Product Code Verified · gaps OPEN
- Claims forbidden: runtime v3 ADOPTED · H4 PASS · REAL E2E PROVEN · G-ACTIVATION GRANTED · P6 GLOBAL PASS · AKG-M5 GLOBAL CLOSED

## R. Gates Morris non consommés
1. ChatGPT Critical Review of this P0
2. GO project Git Integration documentaire P0 (commit/push/PR) — distinct
3. Arbitrage Option A vs B (or sequenced plan)
4. H4 / G-ACTIVATION / G-REAL / H2 / H5 / R-EXCL / REAL / runtime v3 / AKG-M5 close — all distinct

## S. Verdict
**P0 CONSOLIDATED — DOCUMENTARY TRUTH VERIFIED — READY FOR CHATGPT CRITICAL REVIEW**

## Instruction ChatGPT
Lire sfia/review-handoff → sfia-review-handoff/latest-chatgpt-review.md.
Confronter diffs complets (§F) aux sources Git @ fec4e65d + worktree docs/akg-m5-postmerge-convergence-p0.
Vérifier Roadmap CURRENT · PRR README/02–09 · digests · conformance · matrices L2/L3 · Options A/B · non-claims.
Une Critical Review complète. Si conforme: proposer à Morris (A) GO intégration Git documentaire P0 ou (B) correction bloquante précise. Puis seulement: arbitrage capacité AKG-M5 suivante. Ne pas démarrer L2/L3 automatiquement.
