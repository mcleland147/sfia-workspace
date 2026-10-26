# SFIA Review Pack — AKG-M5 Cycle 13 R24 GROUPED GIT INTEGRATION
## FULL MONO-CYCLE — STANDARD — GO Morris A–E

## A. Horodatage
- UTC: 2026-10-26T04:47:28Z
- Europe/Paris: 2026-10-26T05:47:28+0100

## B. GO Morris groupé consommé
- A Commit 4 docs R24: **DONE**
- B Push FF branche PR #618: **DONE**
- C Actualisation PR body: **DONE**
- D Vérification nouvelle CI: **DONE — SUCCESS**
- E PR readiness + Review Pack + Handoff L3: **in progress**
- EXCLUS: merge · undraft · Product · REAL · H4 · G-ACTIVATION

## C. Git Truth
| | Avant | Après |
|---|---|---|
| Branch | feat/akg-m5-remove-repository-binding-docs-write | idem |
| HEAD | `a75d0ed5785861dd198894ea1c5d7436b6d1840c` | **`ffc033a7b69bbf37b2834b999bb621d3c3465f7a`** |
| origin/main | `7db8afd7c27720712f08000274dbbc4e1a62d935` | idem |
| Remote tip | `a75d0ed5785861dd198894ea1c5d7436b6d1840c` | **`ffc033a7b69bbf37b2834b999bb621d3c3465f7a`** |
| PR #618 | OPEN/DRAFT head=`a75d0ed5785861dd198894ea1c5d7436b6d1840c` | OPEN/DRAFT head=`ffc033a7b69bbf37b2834b999bb621d3c3465f7a` |
| Staged | empty | empty |
| Working tree residual | pack local only | pack local only |

## D. Sources / Convergence
- Template / routing / operating model / guardrails / CKC Cycle 13
- Convergence doctrine / Roadmap / C1 / AKG / Generic Execution architecture
- Doctrine v3 30/32/33/34/35/37 (read-only)
- PRR README + 03/07/08/09 + manifest
- Handoff consolidé `53a1419d3dbe321759b257ad36394d42880cb45b` (base R24 local validée)
- R23 code read-only (non modifié)

## E. Inventaire commit R24 (exactement 4 M)
```
M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M projects/sfia-studio/production-runtime-reference/README.md
M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```
- Message: `docs(studio): sync PR618 R24 Git and CI truth`
- Parent: `a75d0ed5785861dd198894ea1c5d7436b6d1840c`
- SHA: `ffc033a7b69bbf37b2834b999bb621d3c3465f7a`
- Review Pack: **EXCLU**
- Product/tests: **aucun**

## F. Diffs complets du commit R24
```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 566b4a82..79a4d19a 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,8 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **CURRENT TIP 2026-10-25 — AKG-M5 PR #618 CYCLE 8 CRITICAL CI SEMANTIC RECONCILIATION (LOCAL)** | **GO MORRIS 2026-10-25 Cycle 8** · **LOCAL CORRECTIVE ONLY** on Draft [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) · branche `feat/akg-m5-remove-repository-binding-docs-write` · base `origin/main` `7db8afd7` · **HEAD projet inchangé** `ff653b58` · **aucun commit/push projet** · RepositoryBinding / docs_write Product admission **non restaurés** · GitHub CI corrective `40215089725` **FAILURE** (160 FAIL / 44 suites) · Cycle 8 local: P0 effect-gated profiles + sealed-git adversarial Start + FakeDocsWrite DET under AKG-M5 naming · P1/P2 obsolete Binding/docs_write oracles ADAPTED · PRR/Roadmap LOCAL CANDIDATE sync · local Vitest of the 44 + typecheck/lint/build as recorded in Review Pack · **≠ GitHub CI PASS** (no new push) · PR **DRAFT / NOT MERGED** · **H4 / G-REAL / G-ACTIVATION NOT GRANTED** · **AKG-M5 OPEN** · runtime v3 **NON ADOPTED** · **≠** REAL · next = ChatGPT Critical Review then GO distinct for commit/push. |
+| **CURRENT TIP 2026-10-26 — AKG-M5 PR #618 — PROJECT GIT INTEGRATED / CI SUCCESS / R24 DOCUMENTARY TRUTH SYNC LOCAL** | **GO MORRIS Git Integration consommé** · commit `a75d0ed5785861dd198894ea1c5d7436b6d1840c` (`refactor(studio): retire Product repository binding and docs_write admission`) **poussé** FF sur `feat/akg-m5-remove-repository-binding-docs-write` · **63 fichiers** (60 M + 3 A KEEP) · quatre helpers orphelins docs_write **absents** · Review Pack **exclu** du commit · Draft [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) **OPEN / DRAFT / NOT MERGED** · base `origin/main` `7db8afd7` · [CI #40258385791](https://github.com/mcleland147/sfia-workspace/actions/runs/40258385791) **COMPLETED / SUCCESS** (Detect · Build and validate · **Required Gate** · event=`pull_request` · HEAD=`a75d0ed5`) · local attesté: typecheck/lint/build PASS · CI-44 639 PASS · `CI=true npm test` **6013 PASS / 142 skipped** · Critical Review post-push **PASS WITH RESERVES** · code RETIRE **sur branche candidat seulement** — **PAS sur main** · **Cycle 13 R24 documentary truth-sync LOCAL** (Roadmap + PRR README + PRR 09 + manifest digests) · **≠** ce tip = intégration de sa propre correction R24 · **≠ MERGED ON MAIN** · **H4 / REAL / G-ACTIVATION NOT GRANTED** · **AKG-M5 GLOBAL OPEN** · runtime v3 **NON ADOPTED** · next = ChatGPT Critical Review documentaire → GO distinct commit/push R24 → nouveau Required Gate → GO merge distinct → post-merge truth-sync. |
+| **HISTORICAL TIP 2026-10-25 — AKG-M5 PR #618 CYCLE 8 CRITICAL CI SEMANTIC RECONCILIATION (LOCAL)** | **HISTORICAL AS TIP** (superseded as CURRENT by PROJECT GIT INTEGRATED / CI SUCCESS tip) — **GO MORRIS 2026-10-25 Cycle 8** · **LOCAL CORRECTIVE ONLY** on Draft [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) · branche `feat/akg-m5-remove-repository-binding-docs-write` · base `origin/main` `7db8afd7` · **HEAD projet alors** `ff653b58` · **aucun commit/push projet à cette date** · RepositoryBinding / docs_write Product admission **non restaurés** · GitHub CI corrective `40215089725` **FAILURE** (160 FAIL / 44 suites) · Cycle 8 local: P0 effect-gated profiles + sealed-git adversarial Start + FakeDocsWrite DET under AKG-M5 naming · P1/P2 obsolete Binding/docs_write oracles ADAPTED · PRR/Roadmap LOCAL CANDIDATE sync · local Vitest of the 44 + typecheck/lint/build as recorded in Review Pack · **≠ GitHub CI PASS** (no new push *at that date*) · PR **DRAFT / NOT MERGED** · **H4 / G-REAL / G-ACTIVATION NOT GRANTED** · **AKG-M5 OPEN** · runtime v3 **NON ADOPTED** · **≠** REAL · (later superseded by Git Integration `a75d0ed5` + CI `40258385791` SUCCESS). |
 | **HISTORICAL TIP 2026-10-25 — AKG-M5 LOCAL DELIVERY — CORR-02 Git target fidelity on structural removal** | **DECIDED BY MORRIS 2026-10-25** · **LOCAL IMPLEMENTED** · **PENDING REVIEW** · **PENDING GIT INTEGRATION** · **NOT MERGED** — branche `feat/akg-m5-remove-repository-binding-docs-write` (Delivery locale non intégrée, au-dessus de `origin/main` `7db8afd7c27720712f08000274dbbc4e1a62d935`) ; **RepositoryBinding RETIRED IN LOCAL DELIVERY** (CreateProject sans `repositoryBinding` ; `SFIA_STUDIO_PROJECT_REPOSITORY_*` retirés du preflight et de `.env.example`) ; **docs_write Product specialization RETIRED IN LOCAL DELIVERY** (admission Product `intentKind` / cap / action retirée des lib + features actifs) ; `projectWorkspaceKey` et routage `projects/<key>` **PRÉSERVÉS** ; **CORR-02 LOCAL CORRECTION** on that structural removal (Git target fidelity) — identity↔remote↔checkout **DET VERIFIED** ; Evidence FS-anchor allowlist tightened to historical `execution_attempt:docs_write` (+ dotted suffix) ; residual stubs removed ; managed resolver requires origin match ; provided remote must match sealed identity (`repository_remote_identity_mismatch` / `managed_repo_identity_mismatch`) ; **NOT MERGED** · **≠** REAL ; O-01 DET **PASS** ; typecheck **PASS** ; **known regressions accepted** ; **H4 / G-REAL / G-ACTIVATION NOT GRANTED** ; **AKG-M5 OPEN** ; runtime v3 **NON ADOPTED** ; `origin/main` `7db8afd7` conserve le binding et l'admission docs_write **historiquement présents sur main** (PR #617 = activation prep, pas ce retrait) ; **≠ MERGED ON MAIN** · **≠** H4 qualifié · **≠** exclusive ACTIVATED · **≠** REAL PROVEN · **≠** P6 GLOBAL PASS. C1 D-PC-09 **NO SEMANTIC IMPACT** (historical text not rewritten). Superseded as CURRENT tip by PR #618 CI Reconciliation entry above. |
 | **HISTORICAL TIP 2026-10-24 — AKG-M5 L2-D2 POST-MERGE VERIFIED (PR #614)** | **HISTORICAL AS TIP** (superseded as CURRENT by the 2026-10-25 LOCAL Delivery tip) — truth sync : [PR #617](https://github.com/mcleland147/sfia-workspace/pull/617) **MERGED** 2026-10-25 on main for **L2-D2 activation prep** (S1–S4) · source `cdc9909d8adaa6b31df3b75e33e58a8d27c88317` · merge `7db8afd7c27720712f08000274dbbc4e1a62d935` = `origin/main` · [CI #40169014052](https://github.com/mcleland147/sfia-workspace/actions/runs/40169014052) **COMPLETED / SUCCESS** (Detect, Build and validate, Required Gate · event=push · branch=main · HEAD=merge) · exclusive **DEFAULT OFF / NOT ACTIVATED** · **G-ACTIVATION / G-REAL NOT GRANTED** by #617 · [PR #616](https://github.com/mcleland147/sfia-workspace/pull/616) also **MERGED** `d7aad77e999e4fe64f31a776ddf39c1d99278b1b` (R-01 evidence status) between #615 and #617 · RepositoryBinding / docs_write retirement is **not** in #617 and is **NOT MERGED** — **L2-D2 MERGED ON MAIN / POST-MERGE CI SUCCESS / DEFAULT OFF / NOT ACTIVATED** — [PR #614](https://github.com/mcleland147/sfia-workspace/pull/614) **MERGED** 2026-10-24, source `4647983aa36b76ae393200a7a8caaaed96936149`, merge `1a0ccd846247d8d96c4c6e1258edd739a2bb5d11` = `main` contrôlé ; [CI #40130977607](https://github.com/mcleland147/sfia-workspace/actions/runs/40130977607) **COMPLETED / SUCCESS** (Detect, Build and validate, Required Gate · event=push · branch=main · HEAD=merge) ; GO Morris Delivery + CORR-02 + R24 + Cycle13 digests + G-GIT commit/push/Draft PR **consommés** ; code CURRENT : marker `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` default **OFF** (trim=`"1"` arms fail-closed) · D1 open+mutation guards (injected writers) · confirmation FORBIDDEN→`ok:false` · D4 Option A redirect/notFound · O-01 LPS objective→UI **DET 31/7 PASS** ; **aucun dual-write** · **aucun** `proj-*`→`prj:*` · D1 FREEZE gated / RETIRE LATER (pas de retrait physique) ; **G-ACTIVATION OPEN** · **R-CUT LIVE NOT PROVEN** · D4 LIVE HTTP NOT PROVEN · dette `R-L2D2-SQLITE-SNAPSHOT` OPEN · raw `DatabaseSync` KNOWN GAP · Q15 global PARTIAL ; chronologie L2-D0→L2-D1→L2-D2 conservée ; **AKG-M5 GLOBAL OPEN** · H1 hold ACTIVE · H4/R-VOL-01 OPEN · REAL NOT PROVEN · P6 GLOBAL NOT PASSED · runtime v3 NON ADOPTED ; suite = **G-ACTIVATION PREPARATION sous réserves** (≠ autorisation d'activation) ; Cycle 14 documentary truth-sync [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) **MERGED** on main · merge `7b64ab21aa29211d5fce93d06d24bce539a0c5a5` · [post-merge CI #40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · **NO PRODUCT SEMANTIC IMPACT** · **R-01 exit proof satisfied** · formal closure separate. |
 | **HISTORICAL TIP 2026-10-24 — AKG-M5 L2-D1 POST-MERGE VERIFIED (PR #612)** | **HISTORICAL AS TIP** (superseded as CURRENT by PR #614) — **L2-D1 MERGED ON MAIN / POST-MERGE CI SUCCESS** — [PR #612](https://github.com/mcleland147/sfia-workspace/pull/612) **MERGED** 2026-10-24, source `d98b39302a484a21f42a25d8c7155bbbf6f6f746`, merge `b792bc83e1fbe3ee2f630d2637c137ee246bf07a` ; [CI #40082088441](https://github.com/mcleland147/sfia-workspace/actions/runs/40082088441) **SUCCESS** ; D5 Option A `oa.project.created` dans UnitOfWork ; Q5.1–Q5.7 DET ; à la date du tip : O-01 « comprendre » Product→UI = KNOWN GAP et **L2-D2 NOT AUTHORIZED** *(HISTORICAL AS TIP — later L2-D2 Delivery + PR #614 MERGED)* ; AKG-M5 GLOBAL OPEN · REAL NOT PROVEN · runtime v3 NON ADOPTED. |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 182968a7..b8f8ceae 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,30 +5,38 @@
 - Runtime v3 **NON ADOPTED**
 - This corpus does not change product behavior by itself (Living Reference is descriptive)

-## Overlay — Product RepositoryBinding + docs_write Product specialization (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+## Overlay — Product RepositoryBinding + docs_write Product specialization (GIT-INTEGRATED PR CANDIDATE / NOT ON MAIN — 2026-10-26)

 | Item | Status |
 |---|---|
-| Decision | **DECIDED BY MORRIS 2026-10-25** |
-| Branch | `feat/akg-m5-remove-repository-binding-docs-write` — **LOCAL IMPLEMENTED** · Draft [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) · **CI RECONCILIATION corrective** in-cycle · **NOT MERGED** |
-| **CURRENT ON MAIN** | `origin/main` `7db8afd7` (PR #617 activation prep) still has server-owned RepositoryBinding, `SFIA_STUDIO_PROJECT_REPOSITORY_*`, and docs_write Product admission. PR #614 / #616 / #617 facts above and below stay main facts. |
-| RepositoryBinding | **RETIRED IN LOCAL DELIVERY** — CreateProject has no `repositoryBinding`; preflight / `.env.example` no longer require `PROJECT_REPOSITORY_*` |
-| docs_write Product specialization | **RETIRED IN LOCAL DELIVERY** — Product admission (`intentKind` / cap / action) removed from active lib+features. Historical docs_write rows later in this volume remain the **CURRENT ON MAIN** record (superseded history for the local candidate). |
-| Preserved | `projectWorkspaceKey` / `projects/<key>` routing |
-| Proof | O-01 DET **PASS** · typecheck **PASS** · **known regressions accepted** |
-| PR #618 CI Reconciliation (2026-10-25) | Baseline CI Vitest **301 FAIL / 65 files** (run `40207375690`). Corrective CI on HEAD `ff653b58` (run `40215089725`): **160 FAIL / 44 suites**. **Cycle 8 LOCAL** (no project commit): P0 effect-gated Attempt profiles + FakeDocsWrite DET port restored under AKG-M5 naming; adversarial Git Start suites rewritten on generalist+sealed identity; obsolete Binding/docs_write oracles ADAPTED/RETIRED. Local re-run of the 44: **target = all PASS** after Cycle 8 (DET only). **≠** GitHub CI PASS until a new workflow run on a pushed commit. |
-| KNOWN GAP — M3 bounded docs_write Execute | Historical `reachAuthorizedDocsWrite` / Fake docs_write launch path **RETIRED** with specialization. Deterministic Fake Execute via generalist for TOCTOU E2E is **not** re-proven in PWR application-path suite (routing→Authorize remains). |
+| Decision | **DECIDED BY MORRIS 2026-10-25** (structural removal) · **GO Morris Git Integration consommé** 2026-10-26 |
+| Branch / HEAD | `feat/akg-m5-remove-repository-binding-docs-write` @ **`a75d0ed5785861dd198894ea1c5d7436b6d1840c`** — Draft [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) **OPEN / DRAFT / NOT MERGED** |
+| Git Integration | Commit `refactor(studio): retire Product repository binding and docs_write admission` · **63 files** (60 M + 3 A KEEP helpers) · four orphan docs_write helpers **absent** · Review Pack **excluded** from project commit |
+| GitHub CI | [run `40258385791`](https://github.com/mcleland147/sfia-workspace/actions/runs/40258385791) **COMPLETED / SUCCESS** · event=`pull_request` · HEAD=`a75d0ed5` · Detect **SUCCESS** · Build and validate **SUCCESS** · **SFIA Studio Required Gate SUCCESS** |
+| Local attestations (pre-push) | typecheck/lint/build **PASS** · CI-44 **639 PASS** · `CI=true npm test` **6013 PASS / 142 skipped** (skipped ≠ PASS) |
+| **CURRENT ON MAIN** | `origin/main` `7db8afd7` ([PR #617](https://github.com/mcleland147/sfia-workspace/pull/617) activation prep) **still has** server-owned RepositoryBinding, `SFIA_STUDIO_PROJECT_REPOSITORY_*`, and docs_write Product admission. PR #614 / #616 / #617 facts below stay **main** facts. **#618 code is a pushed Git candidate, not merged.** |
+| RepositoryBinding | **RETIRED ON BRANCH CANDIDATE ONLY** — CreateProject has no `repositoryBinding`; preflight / `.env.example` no longer require `PROJECT_REPOSITORY_*`. **Main retains prior behaviour until #618 merges.** |
+| docs_write Product specialization | **RETIRED ON BRANCH CANDIDATE ONLY** — Product admission (`intentKind` / cap / action) removed from active lib+features. Historical docs_write rows later in this volume remain the **CURRENT ON MAIN** record. Historical Evidence durable-read `execution_attempt:docs_write` **≠** Product docs_write action admission. |
+| Preserved | `projectWorkspaceKey` / `projects/<key>` routing · Generic PREPARE / EC / AES / Cursor generalist / Evidence / ReviewBundle |
+| KEEP helpers (in commit) | `resolveSealedDocsWriteWorktreePaths.ts` · `resolveVerifiedFilesystemMaterializationPriorAttempt.ts` · `fakeCursorDeterministicLaunchPort.ts` |
+| Orphans RETIRE (absent) | `completeBoundedDocsWriteLaunch` · `ingestDocsWriteArtifactEvidence` · `persistDocsWriteArtifactReviewMaterial` · `resolveDocsWriteArtifactAbsolutePath` |
+| Historical CI (superseded) | Baseline Vitest **301 FAIL / 65 files** (`40207375690`) · Corrective on `ff653b58` **160 FAIL / 44 suites** (`40215089725`) — **dated FAILURE facts**; superseded as CI status by **`40258385791` SUCCESS** on `a75d0ed5` |
+| Cycle 8 LOCAL (historical) | Pre-push Cycle 8 on `ff653b58` (no project commit *then*): P0 effect-gated profiles + FakeDocsWrite DET + adversarial Git Start rewrite — **HISTORICAL stage** before Git Integration |
+| Epistemic supersession | PRR **README** canonical block corrected 2026-10-26 (no longer CURRENT **PENDING GIT INTEGRATION**). PRR 03 / 07 / 08 overlays dated 2026-10-25 that still say **PENDING GIT INTEGRATION** or pre-push-only **LOCAL DELIVERY** are **HISTORICAL AS OF `a75d0ed5`** for lifecycle status — **superseded by this overlay + README**. Code remains **NOT ON MAIN** until merge. Residual dated wording in vols 03/07/08 is not rewritten in this R24 cycle. |
+| KNOWN GAP — Product E2E FS→Git→Review | Front-door généraliste Product E2E physique FS→Git→Review **not re-proven** end-to-end (partially fixture-safe). **OPEN** |
+| KNOWN GAP — FS→SHA Evidence source | Allowlist **historical-only** `execution_attempt:docs_write` (+ dotted suffix). **No new generic Product materialization Evidence source** proven after retirement. **OPEN** |
+| KNOWN GAP — worktree layouts | Checkout origin read: one `.git` gitfile `gitdir` hop (+ `commondir`). Layouts beyond tested hops **fail-closed**. **OPEN** |
+| KNOWN GAP — residual naming | `repositoryBindingIdentity` seal-only field name **KEEP**; env keys `SFIA_STUDIO_PROJECT_REPOSITORY_*` — rename debt. **NOT** `Project.repositoryBinding` SoT. **OPEN** |
+| KNOWN GAP — REAL / H4 / G-ACTIVATION | **NOT QUALIFIED / NOT GRANTED**. **OPEN** — no automatic CLOSED |
+| KNOWN GAP — M3 bounded docs_write Execute | Historical `reachAuthorizedDocsWrite` / Fake docs_write launch path **RETIRED**. Deterministic Fake Execute via generalist for TOCTOU E2E **not** re-proven in PWR application-path suite (routing→Authorize remains). |
 | KNOWN GAP — import deep paths | Prefer `@/lib/vertical-slice-runtime` barrel for managed-repo helpers (importBoundaries allowlist). |
-| Not granted | **H4 / G-REAL / G-ACTIVATION NOT GRANTED** · **AKG-M5 OPEN** · runtime v3 **NON ADOPTED** |
-| Anti-claim | ≠ **MERGED ON MAIN** |
+| Not granted | **H4 / G-REAL / G-ACTIVATION NOT GRANTED** · **AKG-M5 OPEN** · runtime v3 **NON ADOPTED** · merge **NOT GRANTED** · undraft **NOT GRANTED** |
+| Anti-claim | ≠ **MERGED ON MAIN** · ≠ **CI SUCCESS on future R24 SHA** · ≠ **runtime v3 ADOPTED** · ≠ **REAL PROVEN** |
 | CORR-01 — KNOWN GAP | `sameMacroClosure` helpers (`repositorySourcesFromProductFacts` / `normalize*Outcome`) lack a dedicated test after the docs_write suite retirement |
 | CORR-01 — KNOWN GAP | `replan` / `w3cPayloadMatchesCurrentProduct` / `isEvidenceBackedNotProvenUnclaimed` not re-ported |
 | CORR-01 — `repositoryBindingIdentity` | **KEEP** residual field name — sealed **git-target** identity string on ExecutionContract `inputs` / subject; source = server env (`SFIA_STUDIO_PROJECT_REPOSITORY_*`) when canonical via `resolveTrustedProductLaunchContext`; absent / non-canonical → `null` → **Select** fail-closed. **NOT** `Project.repositoryBinding` SoT (no `NewRepositoryBinding`; not written onto Project). `identity: null` in `activeCycleGovernedContinuation` local `WorkspacePathRoot` variable |
-| CORR-01 — restored proofs | Generic ambiguity / mission / criteria / continuity wording proofs restored (`*.generic.d0.test.ts`). **DET at tested scope** · **≠** REAL · **≠** GI |
-| CORR-02 — Git target fidelity | **LOCAL CORRECTION** on the structural removal. Identity↔remote↔checkout **DETERMINISTIC VERIFIED** (`gitTargetIdentityRemoteFidelity.d0.test.ts`). Evidence FS-anchor allowlist tightened; residual stubs removed. **NOT MERGED**. **≠** REAL |
-| CORR-02 — KNOWN GAP — FS supersession sources | FS→SHA supersession allowlist is **historical-only** `execution_attempt:docs_write` (+ dotted suffix). **No new Product materialization Evidence source** after docs_write retirement. Prose attempt labels and `execution_attempt:mission_result` do not supersede |
-| CORR-02 — KNOWN GAP — worktree layout | Checkout origin read follows **one** `.git` gitfile `gitdir` hop, then `commondir` when that gitdir has no origin url. Not a worktree engine: no `git` invocation, no `core.worktree`, no submodules, no further commondir hops. Layouts beyond that hop fail closed |
-| CORR-02 — KNOWN GAP — residual naming | `repositoryBindingIdentity` field name **KEEP** (same residual as CORR-01). Env keys remain `SFIA_STUDIO_PROJECT_REPOSITORY_*` — **env key rename debt**. Seal-only; not `Project.repositoryBinding` SoT |
+| CORR-01 — restored proofs | Generic ambiguity / mission / criteria / continuity wording proofs restored (`*.generic.d0.test.ts`). **DET at tested scope** · **≠** REAL |
+| CORR-02 — Git target fidelity | Identity↔remote↔checkout **DETERMINISTIC VERIFIED** (`gitTargetIdentityRemoteFidelity.d0.test.ts`). Evidence FS-anchor allowlist tightened. On branch candidate `a75d0ed5` · **NOT MERGED**. **≠** REAL |
 | CORR-02 — D-PC-09 | **NO SEMANTIC IMPACT** on D-PC-09 workspace routing. Historical C1 text is not rewritten. Qualification lives in this volume and volumes 03 / 05 |

 ## Overlay — AKG-M5 L2-D2 local OA cutover readiness (CURRENT ON MAIN — PR #614; Cycle 14 truth-sync — 2026-10-24)
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index 4f113676..35902ec2 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -50,19 +50,19 @@ Cycle 14 documentary truth-sync [PR #615](https://github.com/mcleland147/sfia-wo

 **G-ACTIVATION PREPARATION S1–S4 + CORR-01 + CR-S2-02 (IMPLEMENTED — DET scope — CURRENT ON MAIN via PR #617 — 2026-10-25):** Product `VACUUM INTO` snapshot/restore (closed_copy unavailable; RO integrity) · `openD1Db` native **allowlist** Proxy (closes `setAuthorizer`/`createTagStore`/`deserialize`/deferred `iterate` escapes — **CR-S2-01/02**) · D4 DET harness · R-CUT DET rehearsal (exclusive held; disposable RO D1 oracle ≠ Q12). Volumes 05–09 describe this behaviour. **Operational anti-claims (unchanged by Git Integration):** exclusive **DEFAULT OFF / NOT ACTIVATED** · G-ACTIVATION / G-REAL **NOT GRANTED** · H4 real instance **NOT QUALIFIED** · D4 HTTP LIVE / R-CUT LIVE **NOT PROVEN** · raw `new DatabaseSync` outside `openD1Db` **KNOWN GAP** · Q12 **OPEN** · runtime v3 **NON ADOPTED**.

-**Product RepositoryBinding + docs_write Product specialization — LOCAL DELIVERY CANDIDATE / NOT ON MAIN (Morris GO 2026-10-25):**
+**Product RepositoryBinding + docs_write Product specialization — GIT-INTEGRATED PR CANDIDATE / NOT ON MAIN (2026-10-26):**

 | Epistemic class | Element |
 |---|---|
-| **CURRENT ON MAIN** | `origin/main` `7db8afd7` (PR #617) still has server-owned RepositoryBinding on CreateProject, `SFIA_STUDIO_PROJECT_REPOSITORY_*` in preflight / `.env.example`, and docs_write Product admission (`intentKind` / cap / action) in active lib+features. That is historical presence on main, not this retirement. |
-| **LOCAL DELIVERY CANDIDATE / NOT ON MAIN** | Branch `feat/akg-m5-remove-repository-binding-docs-write`. **DECIDED BY MORRIS 2026-10-25**. **LOCAL IMPLEMENTED**. **RepositoryBinding RETIRED IN LOCAL DELIVERY** (CreateProject has no `repositoryBinding`; `PROJECT_REPOSITORY_*` removed from preflight and `.env.example`). **docs_write Product specialization RETIRED IN LOCAL DELIVERY** (Product admission of `intentKind` / cap / action removed from active lib+features). `projectWorkspaceKey` / `projects/<key>` routing **PRESERVED**. O-01 DET **PASS**. Typecheck **PASS**. **Known regressions accepted**. |
-| **Gates** | **PENDING REVIEW** · **PENDING GIT INTEGRATION** · **NOT MERGED**. **H4 / G-REAL / G-ACTIVATION NOT GRANTED**. **AKG-M5 OPEN**. Runtime v3 **NON ADOPTED**. |
-| **Anti-claims** | ≠ **MERGED ON MAIN** · ≠ exclusive ACTIVATED · ≠ REAL PROVEN · ≠ P6 GLOBAL PASS · historical D-PC-09 / docs_write sentences in volumes 02–09 stay the main record until merge |
+| **CURRENT ON MAIN** | `origin/main` `7db8afd7` (PR #617) still has server-owned RepositoryBinding on CreateProject, `SFIA_STUDIO_PROJECT_REPOSITORY_*` in preflight / `.env.example`, and docs_write Product admission (`intentKind` / cap / action) in active lib+features. Main retains that behaviour until [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) merges. |
+| **GIT-INTEGRATED PR CANDIDATE / NOT ON MAIN** | Branch `feat/akg-m5-remove-repository-binding-docs-write` @ HEAD **`a75d0ed5785861dd198894ea1c5d7436b6d1840c`**. **DECIDED BY MORRIS 2026-10-25**. **GO Morris Git Integration CONSUMED** 2026-10-26. Commit `refactor(studio): retire Product repository binding and docs_write admission` (63 files). **RepositoryBinding RETIRED ON BRANCH CANDIDATE ONLY**. **docs_write Product admission RETIRED ON BRANCH CANDIDATE ONLY**. Preserved: `projectWorkspaceKey` / `projects/<key>` · Generic Execution · sealed Git identity · Evidence / ReviewBundle · transitional historical durable-read `execution_attempt:docs_write` (≠ Product admission). |
+| **CI / Review** | [CI #40258385791](https://github.com/mcleland147/sfia-workspace/actions/runs/40258385791) **COMPLETED / SUCCESS** (Detect · Build and validate · **Required Gate** · event=`pull_request` · HEAD=`a75d0ed5`). Critical Review post-push **PASS WITH RESERVES**. |
+| **PR / Gates** | Draft [PR #618](https://github.com/mcleland147/sfia-workspace/pull/618) **OPEN / DRAFT / NOT MERGED**. Merge **NOT GRANTED**. **H4 NOT QUALIFIED** · **G-REAL NOT GRANTED** · **G-ACTIVATION NOT GRANTED**. **AKG-M5 OPEN**. Runtime v3 **NON ADOPTED**. REAL **NOT PROVEN**. |
+| **Anti-claims** | ≠ **INTEGRATED ON MAIN** · ≠ **MERGED ON MAIN** · ≠ exclusive ACTIVATED · ≠ REAL PROVEN · ≠ P6 GLOBAL PASS · ≠ CI SUCCESS on a future R24 documentary SHA · historical D-PC-09 / docs_write sentences in volumes 02–09 stay the **main** record until merge |

-- **CORR-01 (LOCAL DELIVERY CANDIDATE):** Review Pack completeness + generic invariant coverage restored (ambiguity / mission / criteria / continuity wording). **Not GI**. **NOT MERGED**. **≠** REAL.
-- **CORR-02 (LOCAL DELIVERY CANDIDATE):** Git target fidelity on the structural removal — identity↔remote↔checkout **DETERMINISTIC VERIFIED** at tested scope. Evidence FS-anchor allowlist tightened to historical `execution_attempt:docs_write` (+ dotted suffix); residual stubs removed. **NOT MERGED**. **≠** REAL.
+- **CORR-01 / CORR-02 (HISTORICAL STAGES → `a75d0ed5`):** Local Delivery corrections (generic invariant coverage + Git target fidelity DET; FS-anchor allowlist historical `execution_attempt:docs_write`) led to the Git-integrated candidate commit. They are **not** a separate pending GI status. Detail: volume 09 overlay. **NOT MERGED**. **≠** REAL.

-Checked-out tree may already contain this uncommitted retirement. That working-tree fact is **not** integration on main. Volumes below that still describe binding or docs_write as as-implemented behaviour describe **CURRENT ON MAIN** unless they are explicitly marked **LOCAL DELIVERY CANDIDATE**.
+Canonical detail for lifecycle, known gaps, and main-vs-branch split: **[09 — Known Gaps](./09-known-gaps-reserves-and-current-boundaries.md)**. Volumes 03/07/08 dated 2026-10-25 overlays that still say pre-push **LOCAL DELIVERY** / **PENDING GIT INTEGRATION** are **HISTORICAL AS OF `a75d0ed5`** for lifecycle status (superseded by vol 09 + this README block). Behaviour marked **CURRENT ON MAIN** in those volumes remains main truth until merge.

 ## What this corpus is

@@ -77,7 +77,7 @@ This corpus describes **how SFIA Studio actually works** in Git:
 - tests and proof oracles;
 - impact-analysis procedure for future changes.

-For RepositoryBinding and docs_write Product admission, **CURRENT ON MAIN** (`origin/main` `7db8afd7`) wins over the uncommitted local retirement until merge.
+For RepositoryBinding and docs_write Product admission, **CURRENT ON MAIN** (`origin/main` `7db8afd7`) wins over the Git-integrated PR candidate (`a75d0ed5` / Draft PR #618) until merge.

 It is the primary **impact-analysis substrate** for future Studio corrections.

diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 1a9e6e92..1d27e568 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -7,7 +7,7 @@
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "7ba814d9fab072c3"
+      "sha256_16": "e7e4c631d181781f"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -43,7 +43,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "04f62b733009c944"
+      "sha256_16": "4c0b16bd2723f6e8"
     }
   ],
   "components": [
```

## G. SHA parent / nouveau
- Parent: `a75d0ed5785861dd198894ea1c5d7436b6d1840c` (code structural removal)
- Nouveau: `ffc033a7b69bbf37b2834b999bb621d3c3465f7a` (R24 docs only)
- Digests: README `e7e4c631d181781f` · PRR 09 `4c0b16bd2723f6e8`

## H. Staging audit
- `git add --` chemins explicites ×4 seulement
- cached name-status = 4 M
- pack / orphans / Product: non staged
- `git diff --cached --check`: clean

## I. Push FF
- Commande: `git push origin HEAD:refs/heads/feat/akg-m5-remove-repository-binding-docs-write`
- `a75d0ed5785861dd198894ea1c5d7436b6d1840c` → `ffc033a7b69bbf37b2834b999bb621d3c3465f7a` FF only · no force
- ls-remote match: YES
- PR headRefOid = `ffc033a7b69bbf37b2834b999bb621d3c3465f7a` · OPEN / DRAFT · unique PR #618

## J. PR body AVANT (entier)
```markdown
## A. CONTEXTE

GO Morris Structural Removal 2026-10-25.
Trajectoire AKG-M5 / O-01 / Generic Execution.
Critical Review CORR-02: PASS WITH RESERVES → Morris Git Integration GO.

Base: `origin/main` `7db8afd7c27720712f08000274dbbc4e1a62d935`.
Delivery commit: see PR head.

## B. CHANGEMENTS

- Suppression Product `RepositoryBinding` (CreateProject / SoT / UI / `SetProjectRepositoryBinding` / server-owned projection).
- Suppression admission et chemins spécialisés Product `docs_write` (`intentKind` / cap / action / Fake/REAL specialized agents).
- Maintien du routage `projectWorkspaceKey` / `projects/<key>` / Project+LPS Truth C.
- Consolidation Generic Execution (PREPARE / ExecutionContract / Cursor generalist / Attempt / Evidence / ReviewBundle / Resolution / Reconciler).
- Git target fidelity (CORR-02): identity ↔ remote ↔ managed checkout origin match; fail-closed on mismatch.
- Evidence FS→SHA supersession: allowlist historique `execution_attempt:docs_write(+suffix)` only (pas `execution_attempt:*`).
- Synchronisation Roadmap / C1 amendment / PRR LOCAL CANDIDATE + digests.

## C. PREUVES

- HEAD/base: branch tip vs `7db8afd7`.
- Typecheck: PASS.
- Build: PASS.
- Tests ciblés CORR-02 batch: **120 PASS / 0 FAIL** (O-01, composition, preflight, Git fidelity T1–T9, Evidence continuation T11/T12, generics CORR-01, pjReproof05, generic Cursor).
- PRR conformance: OK.
- Handoffs: CORR-01 `c9ddb83a` / CORR-02 `cac910a4`.

## D. RÉGRESSIONS ACCEPTÉES (Morris)

- Suites historiques docs_write peuvent rester rouges.
- Fonctions spécialisées retirées non restaurées.
- Comportements historiques docs_write / binding non restaurés.

## E. KNOWN GAPS

- `repositoryBindingIdentity` residual sealed git-target field (not Product SoT).
- `SFIA_STUDIO_PROJECT_REPOSITORY_*` seal-only env (retirés du preflight Create; encore lus pour scellement EC).
- FS→SHA: pas de nouvelle source Evidence de matérialisation Product générique après retrait.
- Dispositions worktree au-delà des hops gitdir supportés → fail-closed.
- Dette résiduelle de nommage documentée en PRR 09.

## F. ANTI-CLAIMS

- runtime v3 **NON ADOPTED**
- H4 REAL **NOT QUALIFIED**
- G-REAL **NOT GRANTED**
- G-ACTIVATION **NOT GRANTED**
- P6 GLOBAL **NOT PASSED**
- retrait **NOT YET MERGED**
- Draft PR ≠ promotion ou merge

## G. GATES

- Morris Git Integration: **GRANTED** (ce cycle)
- Morris Merge: **NOT GRANTED**

## H. RISQUES

- Retrait transversal majeur.
- Compatibilité historique acceptée (régressions docs_write).
- Tests historiques rouges explicitement déclarés.
- Preuve REAL non réalisée (DET only).


Made with [Cursor](https://cursor.com)
```

## J2. PR body APRÈS (entier)
```markdown
## A. CONTEXTE

GO Morris Structural Removal 2026-10-25 + GO Morris Git Integration 2026-10-26 consommés.
GO Morris Cycle 13 R24 Grouped Git Integration 2026-10-26 consommé (docs only).
Trajectoire AKG-M5 / O-01 / Generic Execution.
Critical Review post-push code: PASS WITH RESERVES.
Critical Review R24 consolidé: PASS → intégration documentaire groupée.

Base: `origin/main` `7db8afd7c27720712f08000274dbbc4e1a62d935`.
Branche: `feat/akg-m5-remove-repository-binding-docs-write`.
PR: OPEN / DRAFT / NOT MERGED.

## B. CHANGEMENTS (code — commit a75d0ed5)

HEAD code Product: `a75d0ed5785861dd198894ea1c5d7436b6d1840c`
(`refactor(studio): retire Product repository binding and docs_write admission`).

- Suppression Product `RepositoryBinding` **sur la branche candidat**.
- Suppression admission Product `docs_write` **sur la branche candidat**.
- Maintien `projectWorkspaceKey` / `projects/<key>` / Generic Execution / sealed Git identity / Evidence / ReviewBundle.
- Inventaire: **60 M + 3 A KEEP = 63**. Quatre helpers orphelins docs_write **absents**. Review Pack **exclu**.
- C1 consulté, **NON MODIFIÉ** par `a75d0ed5` ni par le commit R24.

## C. DOCUMENTATION R24 — GIT-INTEGRATED ON PR BRANCH

Commit R24: `ffc033a7b69bbf37b2834b999bb621d3c3465f7a`
(`docs(studio): sync PR618 R24 Git and CI truth`) — parent `a75d0ed5`.

Quatre fichiers documentaires uniquement:
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/production-runtime-reference/README.md`
- `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`
- `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

Digests: README `e7e4c631d181781f` · PRR 09 `4c0b16bd2723f6e8`.
R24 = DOCUMENTARY STATUS CORRECTION ONLY · **NO PRODUCT SEMANTIC IMPACT**.
≠ MERGED ON MAIN · ≠ runtime v3 ADOPTED.

## D. PREUVES

### Code `a75d0ed5`
- GitHub CI [40258385791](https://github.com/mcleland147/sfia-workspace/actions/runs/40258385791) **COMPLETED / SUCCESS** (Detect · Build and validate · **Required Gate**).
- Typecheck / lint / build PASS · CI-44 639 PASS · `CI=true npm test` 6013 PASS / 142 skipped.

### Docs R24 `ffc033a7`
- GitHub CI [40269966593](https://github.com/mcleland147/sfia-workspace/actions/runs/40269966593) **COMPLETED / SUCCESS** (Detect · Build and validate · **Required Gate** · event=`pull_request` · HEAD=`ffc033a7`).
- PRR conformance 5/5 PASS (pré-commit R24).

## E. HISTORIQUE CI (supersédé)

- `40207375690` FAILURE — historique.
- `40215089725` FAILURE on `ff653b58` — historique.
- `40258385791` SUCCESS on `a75d0ed5` — preuve code structural removal.
- `40269966593` SUCCESS on `ffc033a7` — preuve R24 documentary integration.

## F. KNOWN GAPS (OPEN)

- Product E2E FS→Git→Review front-door: partiellement fixture-safe / non re-prouvé E2E.
- FS→SHA Evidence: historical-only `execution_attempt:docs_write`; pas de nouvelle source générique Product.
- Worktree layouts hors hops testés: fail-closed.
- Residual naming `repositoryBindingIdentity` / env `SFIA_STUDIO_PROJECT_REPOSITORY_*` (seal-only).
- REAL / H4 / G-ACTIVATION: NOT QUALIFIED / NOT GRANTED.

## G. ANTI-CLAIMS

- runtime v3 **NON ADOPTED**
- H4 REAL **NOT QUALIFIED** · G-REAL **NOT GRANTED** · G-ACTIVATION **NOT GRANTED**
- P6 GLOBAL **NOT PASSED**
- retrait **NOT YET MERGED** · Draft ≠ merge / undraft
- CI SUCCESS ≠ READY FOR MERGE autorisé automatiquement

## H. GATES

- Morris Git Integration code (`a75d0ed5`): **CONSUMED / PASS**
- Morris R24 Grouped Git Integration (`ffc033a7` + PR body): **CONSUMED / PASS**
- Morris Merge: **NOT GRANTED**
- Undraft / Ready for Review: **NOT GRANTED**
- H4 / G-REAL / G-ACTIVATION: **NOT GRANTED**
```

## K. Vérification PR #618 distante
- URL: https://github.com/mcleland147/sfia-workspace/pull/618
- state OPEN · isDraft true · mergedAt null
- headRefOid `ffc033a7b69bbf37b2834b999bb621d3c3465f7a` · baseRefOid `7db8afd7c27720712f08000274dbbc4e1a62d935`
- body_match prepared file: YES
- contient `ffc033a7b69bbf37b2834b999bb621d3c3465f7a` + CI `40269966593` SUCCESS + Merge NOT GRANTED

## L. Nouvelle CI (ne pas confondre avec `40258385791`)
- Run: `40269966593` — https://github.com/mcleland147/sfia-workspace/actions/runs/40269966593
- Workflow: SFIA Studio CI
- Event: pull_request
- head_sha: `ffc033a7b69bbf37b2834b999bb621d3c3465f7a`
- status: completed · conclusion: **success**
- Detect SFIA Studio changes: **SUCCESS**
- Build and validate SFIA Studio: **SUCCESS** (~6m17s)
- SFIA Studio Required Gate: **SUCCESS**
- Historical code CI `40258385791` on `a75d0ed5785861dd198894ea1c5d7436b6d1840c`: SUCCESS (distinct)

## M. Manifest conformance
- Digests match files: README `e7e4c631d181781f` · 09 `4c0b16bd2723f6e8`
- Pre-commit: `npx vitest run productionRuntimeReference.conformance.d0.test.ts` **5/5 PASS**
- Digest ≠ semantic architecture proof

## N. R23 / R24
- R23: aucun changement architecture/code Product
- R24: DOCUMENTARY STATUS CORRECTION ONLY · **NO PRODUCT SEMANTIC IMPACT**
- Vols 03/07/08: non modifiés; superseded wording via README/09

## O. Fake / Real
- DET proofs historical on `a75d0ed5785861dd198894ea1c5d7436b6d1840c`
- GitHub CI verified SUCCESS on `ffc033a7b69bbf37b2834b999bb621d3c3465f7a` and `a75d0ed5785861dd198894ea1c5d7436b6d1840c` (distinct runs)
- Git push = gouvernance externe · NOT Studio Cursor REAL
- Product REAL / H4 / G-REAL / G-ACTIVATION: NOT
- runtime v3: NON ADOPTED

## P. Known gaps / réserves
KNOWN GAPS OPEN: E2E FS→Git→Review · FS Evidence historical-only · worktree hops · residual naming · REAL/H4/G-ACTIVATION.
Node 20 deprecation annotations CI (infra) — non bloquant.
Vols 03/07/08 dated residual wording — intentional.

## Q. Verdict PR readiness
**PR READINESS TECHNICAL PASS — READY FOR CHATGPT CRITICAL REVIEW**

≠ READY FOR MERGE autorisé automatiquement.

## R. Décisions Morris ouvertes
1. Critical Review ChatGPT post-intégration R24
2. GO merge distinct (si Review OK)
3. Undraft / Ready for Review — GO distinct si requis
4. Post-merge truth-sync après merge
5. H4 / G-REAL / G-ACTIVATION / runtime v3 — distincts

## Verdict cycle
**R24 GIT INTEGRATED — CI SUCCESS — READY FOR CHATGPT CRITICAL REVIEW**

## Completeness attestation
- FULL mono-cycle grouped integration
- Diffs complets §F
- PR body avant/après §J/J2
- CI nouveau SHA §L
- Pack local non commit projet

## Instruction ChatGPT
Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
Vérifier commit `ffc033a7b69bbf37b2834b999bb621d3c3465f7a` (4 fichiers), exclusion pack, PR head/body, CI `40269966593` Required Gate SUCCESS, gaps, gouvernance.
Une Critical Review post-intégration. Si conforme: préparer décision Morris merge (gate distinct).
