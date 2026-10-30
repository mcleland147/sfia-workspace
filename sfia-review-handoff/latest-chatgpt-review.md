# GI-R24-NAP-01 — DOCUMENTARY GIT INTEGRATION — REVIEW PACK FULL

MONO-CYCLE: GI-R24-NAP-01
PROFILE: STANDARD
TYPOLOGY: DOC / R24 / GIT INTEGRATION
MILESTONE: AKG-M5 / L3-S2
PARENT: C14-NAP-01 / R24-NAP-CR-01 / R24-NAP-DG-01

## 1. Timestamp UTC

2026-10-30T13:49:03Z

## 2. GO Morris consommé

GI-R24-NAP-01 — DOCUMENTARY COMMIT + PUSH + DRAFT PR.

Autorisé: Git Truth; octet verification; PR readiness; validations pré-commit; UN commit documentaire 7 fichiers; push non forcé branche docs; UNE Draft PR vers main; observation CI; Review Pack FULL; handoff L3.

Interdit (respecté): modifier docs/Product/manifest; refresh digests; doctrine/process; 8e fichier; push main; force push; undraft; merge; cleanup; REAL/LIVE; clôture L3; v3 adopt.

## 3. Repo / ref / HEAD / base

| Item | Value |
|------|-------|
| Repo | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-workspace-docs-akg-m5-nap-option-c-c14-r24-truth-sync` |
| Branch | `docs/akg-m5-nap-option-c-c14-r24-truth-sync` |
| HEAD before commit | `c848b98c5bdb218322c8a2cf457568c8a75c1e3f` |
| HEAD after | `6e60d839abd99f847e45e1797be9c98886d1b3aa` |
| origin/main | `c848b98c5bdb218322c8a2cf457568c8a75c1e3f` |
| Product PR | #628 MERGED |

## 4. Local Git Truth Check

- HEAD initial = main = `c848b98c…`
- Docs remote branch **ABSENT** before push
- No preexisting PR for head
- Exactly 7 project files dirty (+ `.tmp-sfia-review` artefact)
- No staged unexpected; no Product WIP
- DG handoff tip `290d0904…` / blob `6ec03694…` verified

## 5. Sources consultées

Processus: cycle template; routing; guardrails; validation checklist; repository execution engine; delivery pipeline; prepare-pr-summary.
Studio: Build Doctrine + Roadmap; Product Completion 01; doctrine v3 30/32/34/35.
PRR README/03/06/08/09 (+02/04/07 coherence); manifest; checker; CI workflow.
Handoffs: C14 `687c060f…` · CR `4e46f546…` · DG `290d0904…`.

## 6. Convergence Pre-check

Product Option C CURRENT ON MAIN · DET · CI product SUCCESS.
Docs candidate semantic PASS + five-digest local PASS.
Gap: docs not on main → INTEGRATE via Draft PR.
No new architecture. Reserves preserved.

## 7. Handoffs C14 / CR / DG

| Cycle | Tip | Blob |
|-------|-----|------|
| C14-NAP-01 | `687c060f67234bff920614b8887e88612f69019e` | `00bd8a58…` |
| R24-NAP-CR-01 | `4e46f546132238f1ba52d632e953a673fa2c0837` | `20a029a233366df8624d3eb2156a30a1d9c3cc8b` |
| R24-NAP-DG-01 | `290d0904ce51f1b239e2e0c9582b565fa2fff8af` | `6ec036941968e979fd88d52d2c22f4247f82b43f` |

## 8. Octets des six documents (git hash-object)

| `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` | `fe967d0ea2ece43e8a47cb5ed3bc3af86048b4cc` |
| `projects/sfia-studio/production-runtime-reference/README.md` | `1a8a31419441590e2e2b9428cb36521a5fc5a77d` |
| `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md` | `2261507d65786ff5d3c8dffe56b55041e2bc9e06` |
| `projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md` | `0458fde026cfc0c4428f4a03df3e3a3263e6e1af` |
| `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md` | `6a5cd93f175633849d7f9635379fc6d5b5a139d4` |
| `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md` | `eb8869e8b0bf9f0b82c74a8e7069e3934fdd4701` |

All match DG-01 expected blobs. **NO DOCUMENTARY BYTE DRIFT.**

## 9. Diff manifest vérifié (pre-commit; five substitutions)

Manifest blob after DG write: `4c8735dae9aa99617c4792587918f55a77a2a278`
Diff index prefix: `7c864568..4c8735da` (matches DG handoff).

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 7c864568..4c8735da 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -7,7 +7,7 @@
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "81b778241ade4da8"
+      "sha256_16": "fd9d3aadd64084b0"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "89c1b959740c308b"
+      "sha256_16": "4e8afd0560d3f660"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -31,7 +31,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "2f4d2ab593a581b0"
+      "sha256_16": "c79b001b5136a1be"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "f6bc6f73585425dd"
+      "sha256_16": "c3ea1874a2ba011c"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "6ebfc7c9f2163bcb"
+      "sha256_16": "974279ccc64db86d"
     }
   ],
   "components": [
```

## 10. Liste sept fichiers

1. Roadmap
2. PRR README
3. PRR 03
4. PRR 06
5. PRR 08
6. PRR 09
7. production-runtime-reference.manifest.json

## 11. PRR checker local

```
OK: canonical README exists
RESULT: PRODUCTION RUNTIME REFERENCE CONFORMANCE OK
```

EXIT 0 — **PRODUCTION RUNTIME REFERENCE CONFORMANCE OK**

## 12. Targeted conformance test

Local Vitest: **NOT AVAILABLE** in this worktree (`node_modules/vitest` missing; `npx vitest` failed to resolve `vitest/config`).

```
vitest.config.ts (1:529) [33m[UNRESOLVED_IMPORT] [0mCould not resolve 'vitest/config' in vitest.config.ts
 - Module not found, treating it as an external dependency in vitest.config.ts at 529..544

failed to load config from /Users/morris/Projects/sfia-workspace-docs-akg-m5-nap-option-c-c14-r24-truth-sync/projects/sfia-studio/app/vitest.config.ts

⎯⎯⎯⎯⎯⎯⎯ Startup Error ⎯⎯⎯⎯⎯⎯⎯⎯
Error: Cannot find module 'vitest/config'
Require stack:
- /Users/morris/Projects/sfia-workspace-docs-akg-m5-nap-option-c-c14-r24-truth-sync/projects/sfia-studio/app/vitest.config.ts
- /Users/morris/.npm/_npx/69c381f8ad94b576/node_modules/vite/dist/node/chunks/node.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1500:15)
    at wrapResolveFilename (node:internal/modules/cjs/loader:1071:27)
    at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1095:10)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1116:12)
    at Module._load (node:internal/modules/cjs/loader:1285:25)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.require (node:internal/modules/cjs/loader:1600:12)
    at require (node:internal/modules/helpers:153:16)
    at Object.<anonymous> (/Users/morris/Projects/sfia-workspace-docs-akg-m5-nap-option-c-c14-r24-truth-sync/projects/sfia-studio/app/vitest.config.ts:23:21)
    at Module._compile (node:internal/modules/cjs/loader:1854:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/Users/morris/Projects/sfia-workspace-docs-akg-m5-nap-option-c-c14-r24-truth-sync/projects/sfia-studio/app/vitest.config.ts',
    '/Users/morris/.npm/_npx/69c381f8ad94b576/node_modules/vite/dist/node/chunks/node.js'
  ]
}



npm notice
npm notice New major version of npm available! 11.13.0 -> 12.2.1
npm notice Changelog: https://github.com/npm/cli/releases/tag/v12.2.1
npm notice To update run: npm install -g npm@12.2.1
npm notice
```

Full Vitest + Required Gate qualified by Draft PR CI on HEAD `6e60d839abd99f847e45e1797be9c98886d1b3aa` (see §22–23).

## 13. Staged diff exact COMPLET (equals commit diff)

Seven files staged explicitly (no `git add -A`). Staged identity verified then committed.

## 14. Commit SHA / parent / message

```
commit 6e60d839abd99f847e45e1797be9c98886d1b3aa
Author:     Morris Cleland <morris@MacBook-Air.local>
AuthorDate: Fri Oct 30 14:41:12 2026 +0100
Commit:     Morris Cleland <morris@MacBook-Air.local>
CommitDate: Fri Oct 30 14:41:12 2026 +0100

    docs(studio): sync Nora adaptive presentation post-merge PRR

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../convergence/sfia-studio-convergence-roadmap.md |  3 +-
 .../03-end-to-end-flow-catalog.md                  | 24 ++++++-----
 .../06-persistence-restart-and-recovery.md         | 12 +++---
 .../08-test-proof-and-conformance-map.md           | 20 +++++----
 ...9-known-gaps-reserves-and-current-boundaries.md | 50 ++++++++++++----------
 .../production-runtime-reference/README.md         | 13 ++++++
 .../production-runtime-reference.manifest.json     | 10 ++---
 7 files changed, 79 insertions(+), 53 deletions(-)
```

| Field | Value |
|-------|-------|
| COMMIT_SHA | `6e60d839abd99f847e45e1797be9c98886d1b3aa` |
| PARENT | `c848b98c5bdb218322c8a2cf457568c8a75c1e3f` (= `c848b98c…`) |
| Message | `docs(studio): sync Nora adaptive presentation post-merge PRR` |
| Files | 7 M |

Name-status:

```
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/README.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```

## 15. Commit diff COMPLET

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 32822a0d..fe967d0e 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,8 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **CURRENT TIP 2026-10-28 — AKG-M5 L3-S2 EP-S2-08-PROOF-01 POST-MERGE VERIFIED (PR #625 + PR #626)** | **Morris GO 2026-10-28** · **CYCLE 14/15 — POST-MERGE CAPITALIZATION & TRAJECTORY TRUTH-SYNC** · [PR #625](https://github.com/mcleland147/sfia-workspace/pull/625) **MERGED** `2026-10-28T03:48:03Z` · merge **`3fb84630efb9e0d2acaaf81b342da0358107db10`** · **4 documentary files** (Roadmap · PRR README · PRR 09 · manifest) · living-tip truth-sync after #623/#624 · **NO PRODUCT RUNTIME SEMANTIC IMPACT** · [PR #626](https://github.com/mcleland147/sfia-workspace/pull/626) **MERGED** `2026-10-28T13:44:42Z` · merge **`3064047258e54cfc9a1f24e21d322ad6ae18217d`** · parents **`3fb84630…`** + **`485ec3cb…`** · source `feat/akg-m5-ep-s2-08-proof-01` · **2 commits** preserved (`e78db159…` Product · `485ec3cb…` R24 premerge currentness) · **18 files** (7 Product code · 5 tests · 6 PRR/manifest) · feature branch **preserved** · Pre-merge CI [#40696083699](https://github.com/mcleland147/sfia-workspace/actions/runs/40696083699) **SUCCESS** · Required Gate **PASS** (head `485ec3cb…`) · Post-merge CI [#40699255387](https://github.com/mcleland147/sfia-workspace/actions/runs/40699255387) **SUCCESS** · Detect / Build and validate / **SFIA Studio Required Gate PASS** (event=`push` · branch=`main` · HEAD=`30640472…`) · **EP-S2-08-PROOF-01 ON MAIN (DET at tested scope):** Option A Project-only Delivery CKC eligibility · Option 1 Generic PREPARE preserves `repositoryMutationDeclared` · R-INSPECT-01 Pilote inspection disclosure · R-HD-01 integrated HD provenance / `HD_MUTATION_DECLARATION_CONFLICT` · B2/B5/B6 remount / restitution / Nora unavailable · R24 temporal currentness · Proof ceiling: **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE** · **Preserved Option B / S8 ON MAIN (PR #623):** Project-first · CycleInstance optional · no invented cycle · SHE · GERM/W3-C · EP-S2-01…04/06/07/09…12 PASS DET · **OPEN EXITS:** EP-S2-08 **PARTIAL** (browser `/studio` remount E2E OPEN · dual F3/W3-C live UX OPEN) · EP-S2-05 **NOT PROVEN** · Late Evidence supersession **OPEN** · mutating Generic Product PASS **NOT PROVEN** · **L3 GLOBAL OPEN / NOT COMPLETE** · exclusive **DEFAULT OFF** · **ANTI-CLAIMS:** REAL **NOT PROVEN** · G-REAL **NOT GRANTED** · L4 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** · merge ≠ Product Completion · documentary ON MAIN ≠ new REAL proof · ≠ automatic L4 · Prior CURRENT tip (**PR #623/#624 living tip / Cycle 14 R24 FOLLOW-UP**) = **HISTORICAL AS TIP** under this CURRENT · **HISTORICAL AUTHORING SNAPSHOT AS-OF 2026-10-28:** Roadmap CURRENT tip + PRR 09 post-merge temporal qualification authored locally · manifest digest refresh **GATED** by independent Critical Semantic Review until distinct Morris DOC GI · **NEXT (qualification only):** further L3 Product exit proofs (EP-S2-08 remaining · EP-S2-05 · Late Evidence policy) under **distinct Morris GO** · ≠ Delivery implied by this tip. |
+| **CURRENT TIP 2026-10-30 — AKG-M5 L3-S2 NORA ADAPTIVE PRESENTATION OPTION C — PR #628 MERGED ON MAIN** | **Morris GO 2026-10-30** · **CYCLE 14 — C14-NAP-01 POST-MERGE VERIFICATION + R24 TRUTH-SYNC** · [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628) **MERGED** `2026-10-30T11:46:31Z` · merge **`c848b98c5bdb218322c8a2cf457568c8a75c1e3f`** · parents **`2cc6368602197e18fe886c87c8ced0a1b434f5a2`** + **`1c3a8d9e16e69c5553fb0d52d847fdeeb2648a9a`** · source `feat/akg-m5-nora-adaptive-presentation` · **2 commits** preserved: Delivery **`c6b5ae3a798070760587ac6605e6276458f375f6`** (`feat(studio): add Nora adaptive presentation with QA and PRR sync`) · CI correction **`1c3a8d9e16e69c5553fb0d52d847fdeeb2648a9a`** (`test(studio): keep auth cookie Vitest independent of Chromium`) · **30 files** (23 modified / 7 added / 0 deleted) · Pre-merge CI [#41043545435](https://github.com/mcleland147/sfia-workspace/actions/runs/41043545435) **SUCCESS** · Post-merge CI [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551) **SUCCESS** · Detect / Build and validate / **SFIA Studio Required Gate PASS** · Vitest CI **565** files PASS / **22** SKIP · **6183** tests PASS / **142** SKIP / **0** FAIL · Modeled governance **75 PASS** · Product capability **INTEGRATED ON MAIN**: Nora Adaptive Presentation A3/A4 Option C · nullable `presentation` DTO · fail-closed normalize · typed Studio notices · Memory B `presentation_json` / `studio_control_json` · ConversationSurface adaptive renderer · narrative fallback · Cognitive STOP / CORR-NAP-01…04 · Fake NAP dual-gate · Vitest cookie-shape oracle without Chromium · Proof ceiling: **DETERMINISTIC AT TESTED SCOPE** · **Preserved prior L3-S2 ON MAIN:** Option B / S8 (#623) · EP-S2-08-PROOF-01 DET (#626) · Binding/docs_write retired (#618) · **R24 DOCUMENTARY LAYER — HISTORICAL AUTHORING SNAPSHOT (C14-NAP-01, 2026-10-30, before semantic review and documentary Git Integration):** at that dated authoring instant the documentary candidate was local on branch `docs/akg-m5-nap-option-c-c14-r24-truth-sync` (Roadmap + PRR README/03/06/08/09); digest regularization was pending (manifest **not** refreshed in that cycle); documentary publication was not yet authorized. These statements describe the dated authoring state, **not** a permanent post-publication lifecycle claim. Subsequent documentary integration / digest / publication status must be resolved from Git, applicable gates and post-merge proofs. · **OPEN EXITS / RESERVES (Product — CURRENT):** R-STOP-BROWSER **NOT PROVEN** · R-SRV-RESTART **NOT PROVEN** · R-LIVE-EMIT **NOT PROVEN** · R-MANIFEST-TOPO **OPEN** · EP-S2-08 **PARTIAL** · EP-S2-05 **NOT PROVEN** · **L3 GLOBAL OPEN / NOT COMPLETE** · exclusive **DEFAULT OFF** · **ANTI-CLAIMS:** REAL **NOT PROVEN** · G-REAL **NOT GRANTED** · L4 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** · merge ≠ Product Completion · digest MATCH ≠ semantic exhaustiveness · Product ON MAIN ≠ automatic documentary publication · Prior CURRENT tip (**2026-10-28 EP-S2-08-PROOF-01 / PR #625 + #626**) = **HISTORICAL AS TIP** under this CURRENT · **NEXT QUALIFIED PATH AT AUTHORING (subject to subsequent Morris gates):** Semantic Review of this R24 candidate → Morris digest regularization GO if needed → distinct DOC Git Integration → then Product continuity proofs (STOP browser · server restart · OpenAI LIVE structured emit · EP-S2-08 remaining · EP-S2-05) under **distinct Morris GO** · ≠ Delivery implied by this tip · ≠ L3 closed · C1/Product Completion link preserved. |
+| **HISTORICAL TIP 2026-10-28 — AKG-M5 L3-S2 EP-S2-08-PROOF-01 POST-MERGE VERIFIED (PR #625 + PR #626)** | **HISTORICAL AS TIP** (superseded as CURRENT by **CURRENT TIP 2026-10-30 — NORA ADAPTIVE PRESENTATION OPTION C / PR #628 MERGED**) — **Morris GO 2026-10-28** · **CYCLE 14/15 — POST-MERGE CAPITALIZATION & TRAJECTORY TRUTH-SYNC** · [PR #625](https://github.com/mcleland147/sfia-workspace/pull/625) **MERGED** `2026-10-28T03:48:03Z` · merge **`3fb84630efb9e0d2acaaf81b342da0358107db10`** · **4 documentary files** (Roadmap · PRR README · PRR 09 · manifest) · living-tip truth-sync after #623/#624 · **NO PRODUCT RUNTIME SEMANTIC IMPACT** · [PR #626](https://github.com/mcleland147/sfia-workspace/pull/626) **MERGED** `2026-10-28T13:44:42Z` · merge **`3064047258e54cfc9a1f24e21d322ad6ae18217d`** · parents **`3fb84630…`** + **`485ec3cb…`** · source `feat/akg-m5-ep-s2-08-proof-01` · **2 commits** preserved (`e78db159…` Product · `485ec3cb…` R24 premerge currentness) · **18 files** (7 Product code · 5 tests · 6 PRR/manifest) · feature branch **preserved** · Pre-merge CI [#40696083699](https://github.com/mcleland147/sfia-workspace/actions/runs/40696083699) **SUCCESS** · Required Gate **PASS** (head `485ec3cb…`) · Post-merge CI [#40699255387](https://github.com/mcleland147/sfia-workspace/actions/runs/40699255387) **SUCCESS** · Detect / Build and validate / **SFIA Studio Required Gate PASS** (event=`push` · branch=`main` · HEAD=`30640472…`) · **EP-S2-08-PROOF-01 ON MAIN (DET at tested scope):** Option A Project-only Delivery CKC eligibility · Option 1 Generic PREPARE preserves `repositoryMutationDeclared` · R-INSPECT-01 Pilote inspection disclosure · R-HD-01 integrated HD provenance / `HD_MUTATION_DECLARATION_CONFLICT` · B2/B5/B6 remount / restitution / Nora unavailable · R24 temporal currentness · Proof ceiling: **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE** · **Preserved Option B / S8 ON MAIN (PR #623):** Project-first · CycleInstance optional · no invented cycle · SHE · GERM/W3-C · EP-S2-01…04/06/07/09…12 PASS DET · **OPEN EXITS:** EP-S2-08 **PARTIAL** (browser `/studio` remount E2E OPEN · dual F3/W3-C live UX OPEN) · EP-S2-05 **NOT PROVEN** · Late Evidence supersession **OPEN** · mutating Generic Product PASS **NOT PROVEN** · **L3 GLOBAL OPEN / NOT COMPLETE** · exclusive **DEFAULT OFF** · **ANTI-CLAIMS:** REAL **NOT PROVEN** · G-REAL **NOT GRANTED** · L4 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** · merge ≠ Product Completion · documentary ON MAIN ≠ new REAL proof · ≠ automatic L4 · Prior CURRENT tip (**PR #623/#624 living tip / Cycle 14 R24 FOLLOW-UP**) = **HISTORICAL AS TIP** under the then-CURRENT · **HISTORICAL AUTHORING SNAPSHOT AS-OF 2026-10-28:** Roadmap CURRENT tip + PRR 09 post-merge temporal qualification authored locally · manifest digest refresh **GATED** by independent Critical Semantic Review until distinct Morris DOC GI · Product facts remain ON MAIN; tip status only is historical under 2026-10-30 CURRENT. |
 | **HISTORICAL TIP 2026-10-28 — AKG-M5 L3-S2 OPTION B — PRODUCT MERGED ON MAIN (PR #623) / R24 DOCUMENTARY MERGED ON MAIN (PR #624) / LIVING TIP TRUTH-SYNC** | **HISTORICAL AS TIP** (superseded as CURRENT by **CURRENT TIP 2026-10-28 — EP-S2-08-PROOF-01 POST-MERGE VERIFIED / PR #625 + PR #626**) — **Morris GO 2026-10-28** · **CYCLE 14 — R24 FOLLOW-UP LIVING TIP TRUTH-SYNC** · [PR #623](https://github.com/mcleland147/sfia-workspace/pull/623) **MERGED** `2026-10-27T15:02:16Z` · merge **`6c8b661c50a5c1d9bd04793192b9294b63349bb1`** · parents **`6e957ecbf50b009b692cf1fcba2748ee1aa9c862`** + **`73f0166c6a71c301a7b2a9c2471beb30ad068221`** · source branch `feat/akg-m5-l3-s2-generic-proof-continuity` · 4 commits preserved (`0577ca5c` · `90bbf479` · `f7c9ba78` CORR-CI-623-01 · `73f0166c` CORR-CI-623-02) · **23 files** · [post-merge CI #40526990871](https://github.com/mcleland147/sfia-workspace/actions/runs/40526990871) **SUCCESS** · **Required Gate PASS** · Construction **Option B / S8 Project-first** **CURRENT ON MAIN**: Project obligatoire · CycleInstance facultatif (D-ER-17) · aucun cycle fictif · Evidence `generic_materialization` · FS OBSERVED / digest-from-bytes DET · W3-B ABSENT/ADMISSIBLE/REJECTED · ReviewBundle / ClaimEvaluation · W3-C / GERM / Nora Tool-First (CI-623-01/02 closed DET) · SHE preserved · Preuve **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE** · EP-S2-01…04 **PASS DET** · EP-S2-05 **NOT PROVEN** · EP-S2-06/07 **PASS DET** · EP-S2-08 **PARTIAL** · EP-S2-09…12 **PASS at tested scope** · **L3 GLOBAL OPEN / NOT COMPLETE** · exclusive **DEFAULT OFF** · G-REAL **NOT GRANTED** · REAL **NOT PROVEN** · runtime v3 **NON ADOPTED** · mutating Generic Product PASS **NOT PROVEN** · late Evidence supersession policy **OPEN** (fail-closed `IDEMPOTENCY_CONFLICT`) · Prior tip **LOCAL CANDIDATE / dirty / PROJECT GIT INTEGRATION NOT AUTHORIZED** = **HISTORICAL AS TIP** (true pre-merge) · Prior L3-S1 oracle tip remains historically true and is **HISTORICAL AS TIP** under this CURRENT · **THIS TIP'S DOCUMENTARY LAYER (updated R24 FOLLOW-UP LIVING TIP TRUTH-SYNC 2026-10-28):** Product facts above remain **CURRENT IMPLEMENTED** · R24 documentary Truth-Sync is **CURRENT ON MAIN** via [PR #624](https://github.com/mcleland147/sfia-workspace/pull/624) **MERGED** `2026-10-28T01:51:07Z` · merge **`1fea1e61df02a90cd42edfd7b987ad7982a8fd63`** · parents **`6c8b661c50a5c1d9bd04793192b9294b63349bb1`** + **`603b43e2927ab420be172f6bd26d40ad676cae1a`** · documentary commit **`603b43e2927ab420be172f6bd26d40ad676cae1a`** · source branch `docs/akg-m5-l3-s2-postmerge-r24-current` · **10 documentary files** ON MAIN · [post-merge CI #40617482621](https://github.com/mcleland147/sfia-workspace/actions/runs/40617482621) **SUCCESS** · PRR CONFORMANCE **PASS** (Vitest 5/5 at merge) · **NO PRODUCT SEMANTIC IMPACT** · Preuves Product / EP-S2-05 **NOT PROVEN** / EP-S2-08 **PARTIAL** / L3 GLOBAL **OPEN** / REAL **NOT PROVEN** / G-REAL **NOT GRANTED** / runtime v3 **NON ADOPTED** / late Evidence supersession **OPEN** remain **INCHANGÉES** · Prior tip documentary layer **PRE-INTEGRATION SNAPSHOT (as-of 2026-10-27, before documentary Git Integration)** = **HISTORICAL AS TIP / CONSUMED** (true for that dated local candidate; **≠** erasure) · **CONSUMED GATE SNAPSHOTS (dated):** Eight-Digest Manifest Gate **PASS LOCAL** 2026-10-27 (handoff tip `e0c9f298…`) · R24-CR-01 currentness correction **DELIVERED** 2026-10-27 on Roadmap + PRR README + PRR 09 (handoff `f8e16328…`) · Critical Delta Semantic Review **PASS** · Two-Digest Manifest Gate **PASS LOCAL** 2026-10-27 for the then-reviewed README digest `d6b3f0732e9cbd5a` + PRR 09 digest `ce0e37604698e0c5` (handoff tip `daf6ed0b…` / blob `14a12e41…`) — that result is **octet-scoped**, not a permanent claim on later bytes · Final Documentary Delta Readiness **RESERVED** 2026-10-27 (handoff `db51d58d…` / blob `a344626c…`) on residual ACTIVE currentness · R24-CR-02 durable temporal classification **DELIVERED** 2026-10-27 · Final Documentary Delta Readiness **PASS LOCAL** → DOC GI Draft PR #624 → undraft/merge **CONSUMED** 2026-10-28 · **THIS CYCLE (local until distinct Morris DOC GI):** living CURRENT TIP truth-sync post-merge #624 on Roadmap (+ PRR README/09 anti-claim currentness if required) · **CONDITIONAL FUTURE REQUIREMENTS (durable):** any subsequent README/09 byte change requires applicable Critical Semantic Review and Morris-authorized digest refresh before claiming local PRR conformance · digest mismatch ⇒ REFERENCE REVIEW REQUIRED · documentary commit/push/Draft PR and documentary merge each require a **distinct Morris GO** · post-merge documentary truth-sync and EP requalification remain governed · living currentness follows Git/preuves and future governed Roadmap updates · **≠** automatic L4 · **≠** L3 GLOBAL CLOSED · **≠** REAL / G-REAL · **≠** runtime v3 ADOPTED · **≠** EP-S2-05 PROVEN · **≠** EP-S2-08 PASS · documentary ON MAIN ≠ new Product proof · living tip sync ≠ Product Delivery. |
 | **HISTORICAL TIP 2026-10-26 — AKG-M5 L3-S1 ORACLE INTEGRATED ON MAIN (PR #621 MERGED / POST-MERGE CI SUCCESS)** | **HISTORICAL AS TIP** (superseded as CURRENT by **CURRENT TIP 2026-10-27 — AKG-M5 L3-S2 OPTION B MERGED ON MAIN / PR #623**) — **Morris 2026-10-26** · **AKG-M5-TC-2026-10-26 T-C ADOPTED** · **AKG-M5-L3S1-2026-10-26 L3-S1 ADOPTED** · **D-P6-SHE-01** SHE · Decision Pack [`05-…requalification.md`](./architectural-knowledge-governance/m5-product-transformation/05-m5-target-journey-and-trajectory-requalification.md) **INTEGRATED ON MAIN** via [PR #620](https://github.com/mcleland147/sfia-workspace/pull/620) (**MERGED** `2026-10-26T15:25:24Z` · merge `b20733c799aa4abef16a283dc2069fd61325367e`) · [PR #621](https://github.com/mcleland147/sfia-workspace/pull/621) **MERGED** `2026-10-26T18:50:21Z` · merge **`592226cd53b70035c1b5f1f0454f76e52abab7e3`** · parents **`b20733c799aa4abef16a283dc2069fd61325367e`** + **`de1fa7aefa0cc08c0afb6e2fbc307287f305427d`** · source commit `test(studio): cover AKG-M5 L3-S1 generic DET integration` · oracle `akgM5L3S1.genericExecutionIntegrated.d0.test.ts` **INTEGRATED ON MAIN** (blob `2c97b91a…` · sha256 `6372ddf8…`) · [post-merge CI #40381306724](https://github.com/mcleland147/sfia-workspace/actions/runs/40381306724) **COMPLETED / SUCCESS** (Detect · Build and validate · **Required Gate** · event=`push` · branch=`main` · HEAD=merge) · Product runtime **UNCHANGED** by #621 · **NO PRODUCT SEMANTIC IMPACT** · EP01–EP09 **PASS** DET tested scope · EP10 **NON-CLAIM** · technical Evidence + frozen RB + ClaimEvaluation `not_proven` + Product **UNCLAIMED** · Technical SUCCESS **≠** Product PROVEN · L1 **DONE** · L2 **PARTIAL** · exclusive **DEFAULT OFF** · L3-S1 delivery **INTEGRATED** · **L3 GLOBAL OPEN / NOT COMPLETE** · **HISTORICAL SNAPSHOT 2026-10-26 (as-of tip date):** L3-S2 was then **NOT STARTED** / **NO DELIVERY GO** / prospective « NEXT CANDIDATE QUALIFICATION » / Delivery then **NOT AUTHORIZED** — true for that dated tip; **do not read as active trajectory instructions after 2026-10-27** · **HISTORICAL TRAJECTORY NOTE (as tip date / pre #623 merge):** L3-S2 Option B was then **LOCAL CANDIDATE** · **≠ L3-S2 CURRENT ON MAIN** · **PROJECT GIT INTEGRATION NOT AUTHORIZED** · **≠ READY TO MERGE** — superseded by PR #623 MERGED · L4–L6 **NOT STARTED** / **NOT AUTHORIZED by this tip** · H4/Q12/R-CUT/G-ACTIVATION **OPEN** · G-REAL/REAL **NOT GRANTED / NOT PROVEN** · runtime v3 **NON ADOPTED** · **AKG-M5 GLOBAL OPEN** · remaining functional gaps (Mission Project-only EP-S2-05 · Nora/Pilote UX EP-S2-08 PARTIAL · late Evidence recovery · FS→Git→Review REAL) tracked under LOCAL tip / PRR 09 · **HISTORICAL NEXT (as tip date):** R24-SR / Manifest / Project Git Integration path then pending — superseded after PR #623 MERGED + Cycle 14 R24 CURRENT local authoring · **≠** automatic L4 start. |
 | **HISTORICAL TIP 2026-10-27 — AKG-M5 L3-S2 OPTION B — R24 DOCUMENTARY TRUTH-SYNC + PR READINESS PREPARATION (PRE-MERGE LOCAL CANDIDATE)** | **HISTORICAL AS TIP** (superseded as CURRENT by **CURRENT TIP 2026-10-27 — PR #623 MERGED**) — accurate for pre-merge dirty LOCAL CANDIDATE / Git Integration NOT AUTHORIZED snapshot · **Morris GO 2026-10-27** · **R24 DOCUMENTARY TRUTH-SYNC AND GIT/PR READINESS PREPARATION** · Branch `feat/akg-m5-l3-s2-generic-proof-continuity` · Product HEAD **`6e957ecbf50b009b692cf1fcba2748ee1aa9c862`** (= `origin/main`) · **DIRTY LOCAL CANDIDATE** (Product + tests uncommitted) · Construction **Option B** (S8 Project-first: Project obligatoire · CycleInstance facultatif · aucun cycle fictif · même moteur Generic Execution) · Delivery S8 + CORR-S2-01/02/03 + R-S2-04/05 + R-S8-01/02/03/04 **ACCEPTED LOCAL DET** (Critical Reviews) · Preuve **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE** · Handoff Pass 05 tip **`91a1dbaa4fe8143325658e08d10c9e8f49c8c72c`** / blob **`c5ccaee49b3088a52b5d321912e0d0c2cb344c6f`** · EP-S2-01…04 **PASS DET** · EP-S2-05 **NOT PROVEN** (Project-only Mission semantic) · EP-S2-06/07 **PASS DET** · EP-S2-08 **PARTIAL** · EP-S2-09…12 **PASS at tested scope** · **R24 LOCAL DOCUMENTARY CANDIDATE** (this tip) · **MANIFEST DIGEST REFRESH PENDING** (no digest write before semantic review) · **PROJECT GIT INTEGRATION NOT AUTHORIZED** · commit/push/PR/merge projet **INTERDITS** this cycle · **L3 GLOBAL OPEN** · exclusive **DEFAULT OFF** · **G-REAL NOT GRANTED** · REAL **NOT PROVEN** · runtime v3 **NON ADOPTED** · mutating Generic Product PASS **NOT PROVEN** · Nora/Pilote UX E2E **NOT PROVEN** · Debt: late Evidence after frozen RB (IDEMPOTENCY_CONFLICT fail-closed; no supersession same key) · **R24 Critical Semantic Review:** PASS WITH RESERVES R24-SR-01/02 (this correction cycle) · **ACTIVE NEXT:** R24-SR-01/02 targeted documentary closure → ChatGPT Critical Semantic Re-Review → PRR Manifest Digest Gate → Project Git/PR Readiness finale → Morris Project Git Integration GO (distinct; commit/push/PR **not** implied) · then requalify EP-S2-05 / EP-S2-08 under their **distinct** exit criteria (≠ automatic L4) · **≠** L3-S2 CURRENT ON MAIN · **≠** L3 GLOBAL CLOSED · **≠** READY TO MERGE · **≠** L4 AUTHORIZED. |
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index b02f4900..2261507d 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -23,7 +23,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Reads:** Product DB Truth C + Nora session continuity action
 - **Paths:** `projectAssistantConversationContinuityAction` in `actions.ts`
 - **Status:** PARTIAL — transcript availability depends on session DB path colocation
-- **Overlay — Nora Adaptive Presentation Option C (LOCAL CANDIDATE — PRE-INTEGRATION):** continuity rehydrate may restore assistant `presentation_json` / `studio_control_json` when present (see dedicated overlay after F04). **≠ CURRENT ON MAIN** · **≠** server restart proven.
+- **Overlay — Nora Adaptive Presentation Option C (CURRENT ON MAIN — PR #628):** continuity rehydrate may restore assistant `presentation_json` / `studio_control_json` when present (see dedicated overlay after F04). **≠** server process restart proven.

 ## F03 — Cycle qualification / activation
 - **Trigger (legacy / Studio):** F2 qualification / Pilot lifecycle start controls
@@ -48,13 +48,15 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **First Framing continuity (presentation):** conversation surface may project a Framing Continuity Card from server-owned snapshot (`projectAssistantReadFramingContinuityAction`) — examinable trajectory facts before HD; « Ouvrir » ≠ composer auto-send; recommendation details stay Recommendation≠Decision (P2-D-01; no presumed operational materiality)
 - **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts; Framing continuity UI DETERMINISTIC at tested scope; REC-01 WR path DETERMINISTIC at tested scope (ZERO REAL claim)
 - **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case A; `framingContinuityCard.ui.test.tsx`, `framingContinuityRehydrate.ui.test.tsx`, `p6.ux.recommendationContinuity.ui.test.tsx`; REC-01 — `qualifyProspectiveWorkRecommendationMaterialization.d0`, `activeCycleCognitiveWork.d0` (Option A reload + historical replay), `p6.hqa.rec01.minimalStabilization.d0`, Option B context tests
-- **Overlay — Nora Adaptive Presentation Option C (LOCAL CANDIDATE — PRE-INTEGRATION):** when a coherent Product turn carries a validated `presentation` DTO, ConversationSurface may render `NoraAdaptivePresentationView` instead of plain prose (coverage + Studio notices). See dedicated overlay below. **≠ CURRENT ON MAIN** · OpenAI LIVE structured emit **NOT PROVEN**.
+- **Overlay — Nora Adaptive Presentation Option C (CURRENT ON MAIN — PR #628):** when a coherent Product turn carries a validated `presentation` DTO, ConversationSurface may render `NoraAdaptivePresentationView` instead of plain prose (coverage + Studio notices). See dedicated overlay below. OpenAI LIVE structured emit **NOT PROVEN**.

-## Overlay — Nora Adaptive Presentation Option C (LOCAL CANDIDATE — PRE-INTEGRATION — 2026-10-30)
+## Overlay — Nora Adaptive Presentation Option C (CURRENT ON MAIN — PR #628 MERGED — 2026-10-30)

-> **Epistemic class:** **LOCAL CANDIDATE — PRE-INTEGRATION** · source worktree `feat/akg-m5-nora-adaptive-presentation` · Git base / HEAD alignment `2cc6368602197e18fe886c87c8ced0a1b434f5a2` (= `origin/main` tip at authoring) · **Delivery Product bytes UNCOMMITTED** · **PROJECT GIT INTEGRATION NOT AUTHORIZED** · **≠ CURRENT ON MAIN** · **≠** L3 GLOBAL CLOSED · **≠** runtime v3 ADOPTED · **≠** OpenAI LIVE / Cursor REAL.
+> **Epistemic class:** **CURRENT PRODUCT ON MAIN** via [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628) **MERGED** `2026-10-30T11:46:31Z` · merge **`c848b98c5bdb218322c8a2cf457568c8a75c1e3f`** · parents **`2cc63686…`** + **`1c3a8d9e…`** · Delivery **`c6b5ae3a…`** · CI correction **`1c3a8d9e…`** · Pre-merge CI [#41043545435](https://github.com/mcleland147/sfia-workspace/actions/runs/41043545435) **SUCCESS** · Post-merge CI [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551) **SUCCESS** · Required Gate **PASS** · Proof: **DETERMINISTIC AT TESTED SCOPE** · **≠** L3 GLOBAL CLOSED · **≠** runtime v3 ADOPTED · **≠** OpenAI LIVE / Cursor REAL.
 >
-> **Evidence refs (Git handoffs):** QA-NAP-03 `b11ef7c95d89327c5a4ea164de21a30b40b334b1` / blob `006daf8f…` · CORR-NAP-04 `d36fddf12eae51b6f0900b9c2b510749a13dfe6b` / blob `b1972a63…` · prior CORR-NAP-01…03 / QA-NAP-01…02 as supporting chronology only.
+> **HISTORICAL AS OF authoring (2026-10-30 pre-merge):** prior overlay « LOCAL CANDIDATE — PRE-INTEGRATION / UNCOMMITTED / PROJECT GIT INTEGRATION NOT AUTHORIZED / ≠ CURRENT ON MAIN » — true before merge; preserve; superseded for Product lifecycle by this block.
+>
+> **Evidence refs (Git handoffs):** QA-NAP-03 `b11ef7c95d89327c5a4ea164de21a30b40b334b1` / blob `006daf8f…` · CORR-NAP-04 `d36fddf12eae51b6f0900b9c2b510749a13dfe6b` / blob `b1972a63…` · GI-NAP-03 `5c61edfc…` · prior CORR-NAP-01…03 / QA-NAP-01…02 as supporting chronology only.

 ### Flow — Pilot message → adaptive UI (F04 extension; F02 rehydrate)

@@ -68,27 +70,27 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 8. **Fallback:** absent/invalid DTO → plain content; forged `[Studio]` in Nora prose is **not** Studio provenance (CORR-NAP-02 typed notices only).
 9. **Reload:** `page.reload()` rehydrates transcript + DTO when columns present (QA-NAP-03 DET browser Fake). **Server process restart NOT PROVEN.**

-### Guardrails (as-implemented local)
+### Guardrails (as-implemented ON MAIN)

 | Rule | Status |
 |---|---|
-| presentation ≠ Truth C / OA object | DOCUMENTED local |
+| presentation ≠ Truth C / OA object | DOCUMENTED + DET |
 | recommendation block ≠ HumanDecision | DOCUMENTED + DET UI |
 | evidence_reserves ≠ validated Product Evidence | DOCUMENTED + DET UI |
-| no free Product CTA from adaptive blocks | DET browser QA-NAP-03 |
+| no free Product CTA from adaptive blocks | DET browser QA-NAP-03 (historical Fake) |
 | server Studio notices > forged Nora `[Studio]` | DET unit/UI CORR-NAP-02/03 |
 | Cognitive STOP outranks optimistic LR | DET CORR-NAP-04 |
 | F2 does not auto-gain Nora-generated adaptive DTO as authority | DOCUMENTED — projection only |

 ### Proof ceiling / anti-claims

-- **AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED** (Better Auth Playwright + Fake NAP QA markers gated `SFIA_STUDIO_E2E_QA_CONTROL=1`) — A4 **STRUCTURAL ALIGNMENT** at reported QA scope · **≠ PIXEL PERFECT** · **≠** shell↔Figma pixel score.
-- **DETERMINISTIC VERIFIED** unit/UI/Fake/coherence suites at tested paths.
+- **PRODUCT OPTION C INTEGRATED ON MAIN** · **DETERMINISTIC AT TESTED SCOPE** (CI Vitest + unit/UI).
+- **AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED** (Better Auth Playwright + Fake NAP QA markers gated `SFIA_STUDIO_E2E_QA_CONTROL=1`) — A4 **STRUCTURAL ALIGNMENT** at reported QA scope · **≠ PIXEL PERFECT** · **≠** shell↔Figma pixel score · E2E path **not** re-run as Required Gate job.
 - OpenAI LIVE structured `presentation` emit **NOT PROVEN**.
 - QA-NAP-06 STOP browser / QA-NAP-10 server restart **NOT PROVEN**.
 - Does **not** rewrite CURRENT ON MAIN F04 semantics for Binding/docs_write/Generic PREPARE.

-**Paths (local WIP):** `lib/nora-cognitive-runtime/noraAdaptivePresentation.ts`, `lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`, `lib/nora-cognitive-runtime/cycleJournalStore.ts`, `lib/nora-cognitive-runtime/productSqliteSession.ts`, `features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx`, `features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`, `features/project-assistant/orchestrateTurn.ts`, `features/project-assistant/actions.ts`, `features/pre-m6-product-ui/hooks/useProductConversation.ts`, `lib/platform/ai/fakeProvider.ts` (QA-only markers), `e2e/studio-nora-adaptive-qa-nap01.spec.ts` (all relative to `app/`).
+**Paths (ON MAIN via #628):** `lib/nora-cognitive-runtime/noraAdaptivePresentation.ts`, `lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`, `lib/nora-cognitive-runtime/cycleJournalStore.ts`, `lib/nora-cognitive-runtime/productSqliteSession.ts`, `features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx`, `features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`, `features/project-assistant/orchestrateTurn.ts`, `features/project-assistant/actions.ts`, `features/pre-m6-product-ui/hooks/useProductConversation.ts`, `lib/platform/ai/fakeProvider.ts` (QA-only markers), `e2e/studio-nora-adaptive-qa-nap01.spec.ts` (all relative to `app/`).

 ## F05 — Active-cycle Artifact materialization
 - **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index c42e9632..0458fde0 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -29,11 +29,13 @@

 `session_items`, `logical_product_turns`, `logical_product_turn_retry_bindings`, `pilot_transcript_turns`, `cycle_journal_entries`, `cycle_journal_mutation_ledger`

-## Overlay — Nora Adaptive Presentation Option C (LOCAL CANDIDATE — PRE-INTEGRATION — 2026-10-30)
+## Overlay — Nora Adaptive Presentation Option C (CURRENT ON MAIN — PR #628 MERGED — 2026-10-30)

-> **Epistemic class:** **LOCAL CANDIDATE — PRE-INTEGRATION** · worktree `feat/akg-m5-nora-adaptive-presentation` · Git base / HEAD alignment `2cc6368602197e18fe886c87c8ced0a1b434f5a2` (= `origin/main` tip at authoring) · Product Delivery **UNCOMMITTED** · **PROJECT GIT INTEGRATION NOT AUTHORIZED** · **≠ CURRENT ON MAIN** · **≠** GLOBAL RESTART SAFE · **≠** LIVE SESSION RECOVERY PROVEN · **≠** FULL C1 LONG-HORIZON MEMORY · **≠** OpenAI LIVE structured emit.
+> **Epistemic class:** **CURRENT PRODUCT ON MAIN** via [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628) **MERGED** `2026-10-30T11:46:31Z` · merge **`c848b98c5bdb218322c8a2cf457568c8a75c1e3f`** · Delivery **`c6b5ae3a…`** · CI correction **`1c3a8d9e…`** · Pre/post-merge CI **SUCCESS** · **≠** GLOBAL RESTART SAFE · **≠** LIVE SESSION RECOVERY PROVEN · **≠** FULL C1 LONG-HORIZON MEMORY · **≠** OpenAI LIVE structured emit.
 >
-> **Evidence refs:** QA-NAP-03 handoff `b11ef7c95d89327c5a4ea164de21a30b40b334b1` · CORR-NAP-04 `d36fddf12eae51b6f0900b9c2b510749a13dfe6b` · unit `noraAdaptivePresentation.d0.test.ts` (incl. CORR-NAP-01 P2 legacy migrate) · UI continuity suites · E2E `studio-nora-adaptive-qa-nap01.spec.ts`.
+> **HISTORICAL AS OF authoring (pre-merge):** prior overlay « LOCAL CANDIDATE — PRE-INTEGRATION / UNCOMMITTED / PROJECT GIT INTEGRATION NOT AUTHORIZED » — true before merge; preserve; superseded for Product lifecycle by this block.
+>
+> **Evidence refs:** QA-NAP-03 handoff `b11ef7c95d89327c5a4ea164de21a30b40b334b1` · CORR-NAP-04 `d36fddf12eae51b6f0900b9c2b510749a13dfe6b` · unit `noraAdaptivePresentation.d0.test.ts` (incl. CORR-NAP-01 P2 legacy migrate) · UI continuity suites · E2E `studio-nora-adaptive-qa-nap01.spec.ts` · post-merge CI [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551).

 ### Columns on `pilot_transcript_turns` (Memory B only)

@@ -42,11 +44,11 @@
 | `presentation_json` | TEXT NULL | Serialized validated Option C presentation DTO (UI projection); absent/null → plain `content` fallback |
 | `studio_control_json` | TEXT NULL | Serialized Studio-owned typed notices (server authority); forged Nora prose `[Studio]` ≠ this column |

-**Migration (local WIP):** idempotent `ALTER TABLE pilot_transcript_turns ADD COLUMN …` in `productSqliteSession.ts` when columns missing. Historical rows without columns → NULL → plain narrative. **No** new table · **no** second SoT · **≠** Truth C / OA.
+**Migration (ON MAIN via #628):** idempotent `ALTER TABLE pilot_transcript_turns ADD COLUMN …` in `productSqliteSession.ts` when columns missing. Historical rows without columns → NULL → plain narrative. **No** new table · **no** second SoT · **≠** Truth C / OA.

 ### Write / read / fallback

-| Path | Behavior (local) |
+| Path | Behavior (ON MAIN) |
 |---|---|
 | Write | After Product turn normalize: persist validated `presentation` + Studio notices via `appendPilotTranscriptTurn` INSERT on the assistant transcript row; retry-safe `logicalTurnId` lookup returns an existing row instead of creating a duplicate (**no** transcript UPDATE on that path) |
 | Read | Continuity / transcript load → `presentationJson` / `studioControlJson` → hook → ConversationSurface |
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 77bbe71c..6a5cd93f 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -9,25 +9,29 @@
 - E2E: Playwright `app/e2e/**` (often harness/boundary routes)
 - Conformance (this macro): `app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

-## Overlay — Nora Adaptive Presentation Option C proof index (LOCAL CANDIDATE — PRE-INTEGRATION — 2026-10-30)
+## Overlay — Nora Adaptive Presentation Option C proof index (CURRENT ON MAIN — PR #628 — 2026-10-30)

-> **Impact check R24-NAP-01:** **YES — documentary index only.** New NAP/Fake/Auth oracles, browser QA, and CORR-NAP-04 introduce proof rows that must stay traceable. **No** new CURRENT ON MAIN claim · Product suites remain **UNCOMMITTED WIP** · **≠** REAL · **≠** L3 closed.
+> **Impact check C14-NAP-01:** **YES — documentary index requalification.** Product suites + CI correction are **INTEGRATED ON MAIN** via [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628). Proof ceiling: **DETERMINISTIC AT TESTED SCOPE**. **≠** REAL · **≠** L3 closed.
 >
-> Evidence handoffs: QA-NAP-03 `b11ef7c9…` · CORR-NAP-04 `d36fddf1…`.
+> **HISTORICAL AS OF authoring:** prior index « LOCAL CANDIDATE — PRE-INTEGRATION / UNCOMMITTED WIP » — true before merge; preserve; superseded for Product lifecycle by this block.
+>
+> Evidence: Pre-merge CI [#41043545435](https://github.com/mcleland147/sfia-workspace/actions/runs/41043545435) · Post-merge CI [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551) · Vitest **6183 PASS / 142 SKIP / 0 FAIL** · Modeled governance **75 PASS** · QA-NAP-03 `b11ef7c9…` · CORR-NAP-04 `d36fddf1…` · CORR-NAP-CI-01 Vitest/Chromium boundary fix on `1c3a8d9e…`.

 | Suite / artifact | What it proves | Class |
 |---|---|---|
-| `noraAdaptivePresentation.d0.test.ts` | DTO parse/normalize fail-closed; block limits; legacy `presentation_json` migrate idempotent (CORR-NAP-01 P2); Memory B write/read | **DETERMINISTIC VERIFIED** · local WIP |
-| `noraAdaptivePresentation.ui.test.tsx` | Adaptive compose / fallback / Studio notices / incomplete banner trust / continuity restore | **DETERMINISTIC VERIFIED** · jsdom · local WIP |
-| `preCycleRoutingBoundary` / coherence suites (CORR-NAP-04) | Cognitive STOP → local LR neutralization **returned** (no silent LR revive drop) | **DETERMINISTIC VERIFIED** · local WIP |
+| `noraAdaptivePresentation.d0.test.ts` | DTO parse/normalize fail-closed; block limits; legacy `presentation_json` migrate idempotent (CORR-NAP-01 P2); Memory B write/read | **DETERMINISTIC VERIFIED** · ON MAIN |
+| `noraAdaptivePresentation.ui.test.tsx` | Adaptive compose / fallback / Studio notices / incomplete banner trust / continuity restore | **DETERMINISTIC VERIFIED** · jsdom · ON MAIN |
+| `preCycleRoutingBoundary` / coherence suites (CORR-NAP-04) | Cognitive STOP → local LR neutralization **returned** (no silent LR revive drop) | **DETERMINISTIC VERIFIED** · ON MAIN |
+| `authenticatedStudioSession.d0.test.ts` | Cookie header → url-only Playwright cookie **shape** (no Chromium launch) | **DETERMINISTIC COOKIE SHAPE VERIFIED** · ON MAIN · ≠ BrowserContext acceptance |
 | `fakeProvider` NAP QA markers (`__NAP_QA_*__`) | Deterministic Fake structured presentation emit — gated QA control | **DET Fake** · ≠ OpenAI LIVE |
-| `e2e/studio-nora-adaptive-qa-nap01.spec.ts` | Authenticated Better Auth Playwright + Fake NAP browser runtime; reload continuity; no free CTA | **AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED** · local WIP |
+| `e2e/studio-nora-adaptive-qa-nap01.spec.ts` | Authenticated Better Auth Playwright + Fake NAP browser runtime; reload continuity; no free CTA | **AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED** · historical E2E · code ON MAIN · **not** Required Gate job |
 | Captures `.tmp-sfia-review/runtime-captures/nora-adaptive/` | Structural A4 screenshots at reported QA scope | **STRUCTURAL ALIGNMENT** · ≠ PIXEL PERFECT |
+| Full Vitest GitHub CI (pre + post merge) | Suite green on `1c3a8d9e…` and `c848b98c…` | **CI DETERMINISTIC SUITE PASS** · 142 SKIP unchanged |
 | QA-NAP-06 STOP browser | — | **NOT PROVEN** |
 | QA-NAP-10 server restart | — | **NOT PROVEN** |
 | OpenAI LIVE structured `presentation` | — | **NOT PROVEN** |

-**PRR conformance note:** documentary volumes 03/06/08/09 touched under R24-NAP-01 ⇒ digest mismatch vs committed manifest **expected** until distinct digest regularization GO. Digest MATCH ≠ semantic validity.
+**PRR conformance note (C14-NAP-01 / R24-NAP-CR-01):** **As-of C14-NAP-01 local authoring**, the documentary changes to volumes 03/06/08/09 + README/Roadmap introduced expected digest drifts vs the committed manifest; the manifest was **not** refreshed in that cycle. R24-NAP-CR-01 corrects temporal currentness only and still does **not** refresh digests. Later conformance must be determined from the actual manifest/document bytes and the corresponding governed gate. Digest MATCH ≠ semantic correctness. Manifest remains unmodified until a distinct Morris digest regularization GO.

 ## Overlay — PR #618 proof map (CURRENT ON MAIN — MERGED + post-merge CI — 2026-10-26)

diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index e5ba8d0a..eb8869e8 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,42 +5,46 @@
 - Runtime v3 **NON ADOPTED**
 - This corpus does not change product behavior by itself (Living Reference is descriptive)

-## Overlay — Nora Adaptive Presentation Option C / AKG-M5 L3-S2 (LOCAL CANDIDATE — PRE-INTEGRATION — 2026-10-30)
+## Overlay — Nora Adaptive Presentation Option C / AKG-M5 L3-S2 (CURRENT ON MAIN — PR #628 — 2026-10-30)

 | Field | Value |
 |---|---|
 | Capability | Nora Adaptive Presentation A3/A4 — Option C |
-| Authoring date | 2026-10-30 |
-| Git base / HEAD alignment | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` (= `origin/main` tip at authoring) |
-| Branch / worktree | `feat/akg-m5-nora-adaptive-presentation` |
-| Status | **LOCAL CANDIDATE — PRE-INTEGRATION** · Product Delivery **UNCOMMITTED** · **≠ CURRENT ON MAIN** · **PROJECT GIT INTEGRATION NOT AUTHORIZED** |
-| Evidence refs | QA-NAP-03 `b11ef7c95d89327c5a4ea164de21a30b40b334b1` / blob `006daf8f…` · CORR-NAP-04 `d36fddf12eae51b6f0900b9c2b510749a13dfe6b` / blob `b1972a63…` · CORR-NAP-01…03 / QA-NAP-01…02 supporting · local unit/UI/E2E WIP |
-| PRR sync cycle | R24-NAP-01 (this overlay) — **DOCUMENTARY DIGEST GATE PENDING** (manifest `--write-digests` **NOT** authorized here) |
+| Qualification date | 2026-10-30 (C14-NAP-01) |
+| Merge | **`c848b98c5bdb218322c8a2cf457568c8a75c1e3f`** · [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628) **MERGED** `2026-10-30T11:46:31Z` |
+| Commits | Delivery **`c6b5ae3a…`** · CI correction **`1c3a8d9e…`** (both ancestors of main) |
+| Status | **CURRENT PRODUCT ON MAIN** · proof **DETERMINISTIC AT TESTED SCOPE** |
+| CI | Pre [#41043545435](https://github.com/mcleland147/sfia-workspace/actions/runs/41043545435) **SUCCESS** · Post [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551) **SUCCESS** · Required Gate **PASS** · Vitest **6183 PASS / 142 SKIP / 0 FAIL** |
+| Evidence refs | QA-NAP-03 `b11ef7c9…` · CORR-NAP-04 `d36fddf1…` · GI-NAP-03 `5c61edfc…` · CORR-NAP-CI-01 |
+| R24 C14-NAP-01 / R24-NAP-CR-01 | **HISTORICAL AUTHORING SNAPSHOT (2026-10-30, before semantic review and documentary Git Integration):** at that dated instant the documentary candidate was local (Roadmap + PRR README/03/06/08/09); digest regularization was pending; documentary publication was not yet authorized. These statements describe the dated authoring state, **not** a permanent post-publication lifecycle claim. Subsequent documentary status must be resolved from Git, applicable gates and post-merge proofs. R24-NAP-CR-01 = temporal currentness correction only · **≠** Product change |

 | Élément | Statut | Preuve | Limite / exit |
 |---|---|---|---|
-| A. Option C Delivery | **LOCAL IMPLEMENTED** (WIP) | Code paths + DET suites local | **≠** ON MAIN · distinct Morris GI GO |
-| B. CORR-NAP-01/02/03 | **DETERMINISTIC VERIFIED** at tested scope | Unit/UI CORR suites | Scope-bounded · ≠ LIVE |
-| C. CORR-NAP-04 Product Turn Coherence (LR return after STOP) | **DETERMINISTIC VERIFIED** | CORR-NAP-04 handoff + `applyPreCycleRoutingBoundaryCoherence` T1/T5/T9 | ≠ browser STOP QA |
-| D. QA navigateur Fake/Auth | **AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED** | QA-NAP-03 + `studio-nora-adaptive-qa-nap01.spec.ts` + captures | Better Auth Playwright · Fake NAP markers · gate `SFIA_STUDIO_E2E_QA_CONTROL` |
-| E. A4 structural | **STRUCTURAL ALIGNMENT** at QA scope | Captures / E2E assertions | **≠ PIXEL PERFECT** · ≠ shell↔Figma score |
-| F. Browser reload | **DETERMINISTIC VERIFIED** at reported scope | QA-NAP-03 `page.reload()` | Fake only |
-| G. Server restart | **NOT PROVEN** | — | QA-NAP-10 open |
-| H. STOP navigateur | **NOT PROVEN** | — | QA-NAP-06 open |
-| I. OpenAI LIVE structured emit | **NOT PROVEN** | — | distinct REAL GO |
+| A. Option C Delivery | **CURRENT ON MAIN** | PR #628 · 30 files · CI SUCCESS | Product integrated; ≠ L3 closed |
+| B. CORR-NAP-01/02/03 | **DETERMINISTIC VERIFIED** at tested scope | Unit/UI CORR suites ON MAIN | Scope-bounded · ≠ LIVE |
+| C. CORR-NAP-04 Product Turn Coherence (LR return after STOP) | **DETERMINISTIC VERIFIED** | CORR-NAP-04 + coherence suites ON MAIN | ≠ browser STOP QA |
+| D. QA navigateur Fake/Auth | **AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED** | QA-NAP-03 + E2E code ON MAIN | Better Auth · Fake markers · **not** Required Gate job |
+| E. A4 structural | **STRUCTURAL ALIGNMENT** at QA scope | Captures / E2E assertions | **≠ PIXEL PERFECT** |
+| F. Browser reload | **DETERMINISTIC VERIFIED** at reported Fake scope | QA-NAP-03 `page.reload()` | Fake only |
+| G. Server restart | **NOT PROVEN** | — | QA-NAP-10 / R-SRV-RESTART open |
+| H. STOP navigateur | **NOT PROVEN** | — | QA-NAP-06 / R-STOP-BROWSER open |
+| I. OpenAI LIVE structured emit | **NOT PROVEN** | — | R-LIVE-EMIT · distinct REAL GO |
 | J. Fake/Real gap | Fake DET ≠ model REAL quality/latency/cost | — | keep ceiling |
-| K. Product Git Integration | **NOT AUTHORIZED / NOT ON MAIN** | — | Morris GI + PR + merge gates |
-| L. PRR semantic sync | **LOCAL DOC CANDIDATE** | R24-NAP-01 volumes 03/06/09 (+08 index) | Manifest digest gate + semantic review **PENDING** |
+| K. Product Git Integration | **COMPLETED — PR #628 MERGED** | merge `c848b98c…` · two commits preserved | Feature cleanup may remain BLOCKED separately |
+| L. PRR semantic sync (C14 / R24-NAP-CR-01) | **HISTORICAL AUTHORING SNAPSHOT (2026-10-30)** — local candidate at that instant; later lifecycle resolve from Git | C14-NAP-01 volumes + Roadmap (+ R24-NAP-CR-01 temporal fix) | As-of C14 authoring: Semantic Review / digest gate / DOC GI were **not yet consumed**. Do **not** read as eternally PENDING after later gates. Resolve subsequent status from Git + applicable Morris GOs |
+| M. Full Vitest CI | **SUCCESS** on `1c3a8d9e…` and `c848b98c…` | GitHub CI logs | 142 SKIP not claimed as executed |

-**Covered (local, not ON MAIN):** Option C DTO + normalize/fail-closed · Studio typed notices · adaptive UI composition · Memory B columns · Fake QA Auth browser · CORR-NAP-01…04 DET · Cognitive STOP LR coherence unit.
+**Covered ON MAIN:** Option C DTO + normalize/fail-closed · Studio typed notices · adaptive UI · Memory B columns · Fake QA Auth browser (historical) · CORR-NAP-01…04 DET · Cognitive STOP LR coherence · Vitest cookie-shape without Chromium · CI Required Gate.

-**Preserved L3-S2 reserves (unchanged by NAP):** EP-S2-08 **PARTIAL** · EP-S2-05 **NOT PROVEN** · L3 GLOBAL **OPEN** · L4 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED**. **QA-NAP ≠** closure of EP-S2-08 or EP-S2-05.
+**HISTORICAL PRE-INTEGRATION SNAPSHOT (as-of R24-NAP-01 authoring, before merge):** table that said **LOCAL IMPLEMENTED WIP / PROJECT GIT INTEGRATION NOT AUTHORIZED / ≠ CURRENT ON MAIN** — **true at that dated instant**; preserve; do not read as active Product status after PR #628.

-**Exit / next (documentary → integration):** (1) R24 semantic review PASS · (2) distinct manifest digest regularization GO · (3) distinct Morris Product GI / PR / merge · (4) post-merge requalify LOCAL CANDIDATE → CURRENT only after verified merge + proofs · (5) open Product proofs: STOP browser · server restart · OpenAI LIVE structured emit · build/CI on integrated bytes.
+**Preserved L3-S2 reserves (unchanged by NAP merge):** EP-S2-08 **PARTIAL** · EP-S2-05 **NOT PROVEN** · L3 GLOBAL **OPEN** · L4 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** · R-MANIFEST-TOPO **OPEN**. **QA-NAP ≠** closure of EP-S2-08 or EP-S2-05.

-**Anti-claims:** ≠ CURRENT ON MAIN · ≠ PR READY · ≠ REAL PROVEN · ≠ G-REAL · ≠ L3 CLOSED · ≠ L4 AUTHORIZED · ≠ runtime v3 ADOPTED · ≠ GLOBAL RESTART SAFE · digest MATCH ≠ semantic validity.
+**Exit / next (NEXT QUALIFIED PATH AT AUTHORING — subject to subsequent Morris gates):** (1) C14 R24 Semantic Review · (2) distinct manifest digest regularization GO if needed · (3) distinct documentary Git Integration · (4) open Product proofs (CURRENT gaps): STOP browser · server restart · OpenAI LIVE structured emit · EP-S2-08 remaining · EP-S2-05 — each under distinct Morris GO. Documentary gate consumption after authoring must be resolved from Git; do not assume they remain unconsumed forever.

-**Gates Morris still open:** semantic review of R24-NAP-01 · manifest digest gate · Product commit/PR/merge authorization · any LIVE/REAL/STOP-browser/server-restart proof GOs.
+**Anti-claims:** ≠ REAL PROVEN · ≠ G-REAL · ≠ L3 CLOSED · ≠ L4 AUTHORIZED · ≠ runtime v3 ADOPTED · ≠ GLOBAL RESTART SAFE · Product ON MAIN ≠ automatic documentary publication · digest MATCH ≠ semantic validity · authoring-time local-candidate wording ≠ permanent post-publication lifecycle.
+
+**Gates Morris (as-of C14-NAP-01 / R24-NAP-CR-01 authoring — resolve later from Git):** documentary Semantic Review · digest gate · documentary commit/PR/merge were **not consumed at that snapshot**; subsequent consumption must be verified from Git and applicable GOs. **Product proof GOs still CURRENT OPEN:** LIVE/REAL · STOP-browser · server-restart · EP-S2-08 remaining · EP-S2-05.

 ## Overlay — AKG-M5 L3-S2 Option B / S8 (CURRENT ON MAIN — PR #623 MERGED — 2026-10-27)

diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index b0752916..1a8a3141 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -66,6 +66,19 @@ Cycle 14 documentary truth-sync [PR #615](https://github.com/mcleland147/sfia-wo
 Canonical detail for lifecycle, known gaps, and main-vs-branch split: **[09 — Known Gaps](./09-known-gaps-reserves-and-current-boundaries.md)**. Volumes 03/07/08 dated 2026-10-25 overlays that still say pre-push **LOCAL DELIVERY** / **PENDING GIT INTEGRATION** are **HISTORICAL AS OF `a75d0ed5`** for lifecycle status (superseded by vol 09 + this README block). Behaviour marked **CURRENT ON MAIN** in those volumes remains main truth until merge.


+**Nora Adaptive Presentation Option C / AKG-M5 L3-S2 — CURRENT PRODUCT ON MAIN (PR #628 MERGED — 2026-10-30) + C14-NAP-01 / R24-NAP-CR-01 documentary truth-sync:**
+
+| Epistemic class | Element |
+|---|---|
+| **CURRENT PRODUCT ON MAIN** | [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628) **MERGED** `2026-10-30T11:46:31Z` · merge **`c848b98c5bdb218322c8a2cf457568c8a75c1e3f`** · parents **`2cc63686…`** + **`1c3a8d9e…`** · Delivery **`c6b5ae3a…`** + CI correction **`1c3a8d9e…`** (Vitest cookie-shape without Chromium) · **30 files** · Pre-merge CI [#41043545435](https://github.com/mcleland147/sfia-workspace/actions/runs/41043545435) **SUCCESS** · Post-merge CI [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551) **SUCCESS** · Required Gate **PASS** · Vitest **6183 PASS / 142 SKIP / 0 FAIL** · Modeled governance **75 PASS** |
+| **Product facts ON MAIN** | Nullable Option C `presentation` DTO · fail-closed normalize · typed Studio notices (server provenance) · Memory B `presentation_json` / `studio_control_json` · ConversationSurface → `NoraAdaptivePresentationView` · narrative / plain fallback · Cognitive STOP / CORR-NAP-01…04 · Fake NAP dual-gate (`SFIA_STUDIO_E2E_QA_CONTROL` ∧ Fake provider) |
+| **Proof ceiling** | **DETERMINISTIC AT TESTED SCOPE** · Fake Auth browser QA historical (QA-NAP-03) · **≠** OpenAI LIVE structured emit · **≠** STOP browser · **≠** server process restart |
+| **HISTORICAL AS OF authoring** | Pre-merge R24-NAP overlays « LOCAL CANDIDATE — PRE-INTEGRATION / PRODUCT UNCOMMITTED / PROJECT GIT INTEGRATION NOT AUTHORIZED / ≠ CURRENT ON MAIN » — **true before PR #628 merge**; preserve as dated snapshot · superseded for Product lifecycle by this block |
+| **R24 C14-NAP-01 / R24-NAP-CR-01 — HISTORICAL AUTHORING SNAPSHOT (2026-10-30)** | **As-of C14-NAP-01 local authoring (before semantic review and documentary Git Integration):** documentary candidate was local on branch `docs/akg-m5-nap-option-c-c14-r24-truth-sync` (volumes 03/06/08/09 + Roadmap + this README); digest regularization was pending (no `--write-digests` in that cycle); documentary publication was not yet authorized. These statements describe the dated authoring state, **not** a permanent post-publication lifecycle claim for this README. Subsequent documentary integration / digest / publication status must be resolved from Git, applicable gates and post-merge proofs. R24-NAP-CR-01 corrects temporal currentness only · **NO PRODUCT SEMANTIC IMPACT** |
+| **Anti-claims** | ≠ L3 GLOBAL CLOSED · ≠ EP-S2-08 PASS · ≠ EP-S2-05 PROVEN · ≠ G-REAL · ≠ L4 · ≠ runtime v3 ADOPTED · ≠ REAL PROVEN · digest MATCH ≠ semantic exhaustiveness · Product ON MAIN ≠ automatic documentary publication |
+
+Canonical Option C gap table: **[09 — Known Gaps](./09-known-gaps-reserves-and-current-boundaries.md)** (CURRENT overlay supersedes PRE-INTEGRATION table). Flow/persistence/proof detail: volumes **03 / 06 / 08**.
+
 **AKG-M5 L3-S2 Option B / S8 Project-first — CURRENT ON MAIN (PR #623 MERGED — 2026-10-27) + Cycle 14 R24 LOCAL documentary sync:**

 | Epistemic class | Element |
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 7c864568..4c8735da 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -7,7 +7,7 @@
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "81b778241ade4da8"
+      "sha256_16": "fd9d3aadd64084b0"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "89c1b959740c308b"
+      "sha256_16": "4e8afd0560d3f660"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -31,7 +31,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "2f4d2ab593a581b0"
+      "sha256_16": "c79b001b5136a1be"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "f6bc6f73585425dd"
+      "sha256_16": "c3ea1874a2ba011c"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "6ebfc7c9f2163bcb"
+      "sha256_16": "974279ccc64db86d"
     }
   ],
   "components": [
```

## 16. Push command + EXIT

Command: `git push --porcelain origin HEAD:refs/heads/docs/akg-m5-nap-option-c-c14-r24-truth-sync`
No `--force` / `--force-with-lease`.

```
To https://github.com/mcleland147/sfia-workspace.git
*	HEAD:refs/heads/docs/akg-m5-nap-option-c-c14-r24-truth-sync	[new branch]
Done
```

## 17. Remote feature SHA

REMOTE_SHA = `6e60d839abd99f847e45e1797be9c98886d1b3aa` = COMMIT_SHA. **REMOTE VERIFIED.**

## 18. Relecture commit GitHub

`gh api …/commits/6e60d839abd99f847e45e1797be9c98886d1b3aa`: parents=`c848b98c…`; file_count=7; exact allowlist paths; message matches.

## 19. PR numéro et URL

| Field | Value |
|-------|-------|
| PR_NUMBER | **629** |
| PR_URL | https://github.com/mcleland147/sfia-workspace/pull/629 |
| Title | docs(studio): sync Nora adaptive presentation post-merge PRR |

## 20. Draft / head / base / files

| Field | Value |
|-------|-------|
| state | OPEN |
| isDraft | **True** |
| base | `main` |
| head | `docs/akg-m5-nap-option-c-c14-r24-truth-sync` |
| headRefOid | `6e60d839abd99f847e45e1797be9c98886d1b3aa` |
| commits | 1 |

Files:

| Path | Type | Delta |
|------|------|-------|
| `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` | MODIFIED | +2/-1 |
| `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md` | MODIFIED | +13/-11 |
| `projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md` | MODIFIED | +7/-5 |
| `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md` | MODIFIED | +12/-8 |
| `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md` | MODIFIED | +27/-23 |
| `projects/sfia-studio/production-runtime-reference/README.md` | MODIFIED | +13/-0 |
| `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json` | MODIFIED | +5/-5 |

## 21. PR body publié complet

```markdown
## Context

- Milestone: **AKG-M5 / L3-S2**
- Capability: **Nora Adaptive Presentation A3/A4 Option C**
- Product [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628) **already MERGED** on `main` (`c848b98c5bdb218322c8a2cf457568c8a75c1e3f`)
- This PR is **documentary only** (R24 truth-sync + five-digest manifest regularization)

## Scope

Exactly **seven** documentary files:

1. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` — living CURRENT TIP 2026-10-30
2. `projects/sfia-studio/production-runtime-reference/README.md`
3. `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`
4. `projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md`
5. `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md`
6. `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`
7. `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json` — **five** `sha256_16` substitutions only

**No Product / tests / CI / scripts / packages / doctrine changes.**

## Evidence

- Product merge `c848b98c…` · parents `2cc63686…` + `1c3a8d9e…`
- Product post-merge CI [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551) **SUCCESS**
- Pre-merge CI [#41043545435](https://github.com/mcleland147/sfia-workspace/actions/runs/41043545435) **SUCCESS**
- C14-NAP-01 post-merge verification handoff `687c060f…`
- R24-NAP-CR-01 temporal currentness correction — Semantic Delta Review **PASS** (handoff `4e46f546…` / blob `20a029a2…`)
- R24-NAP-DG-01 five-digest gate — local **PASS** / PRR CONFORMANCE OK (handoff `290d0904…` / blob `6ec03694…`)

## Validation (local before Draft PR)

- `node scripts/check-production-runtime-reference.mjs` → **PRODUCTION RUNTIME REFERENCE CONFORMANCE OK** (EXIT 0)
- Six document git blobs match DG-01 reviewed octets
- Manifest: exactly five volume digest replacements; metadata/topology/trackedSources/trackedTests unchanged
- Seven-file commit parent = `c848b98c…`
- **No Product mutation**

## Historical / Current

- **Product Option C** = **CURRENT ON MAIN** via PR #628
- Pre-merge / authoring-time documentary statuses preserved as **HISTORICAL AUTHORING SNAPSHOTS** (R24-NAP-CR-01)
- **This Draft PR is not integrated on main yet** — docs ≠ CURRENT ON MAIN until distinct Morris merge GO

## Reserves (unchanged)

- STOP browser **NOT PROVEN**
- Server process restart **NOT PROVEN**
- OpenAI LIVE structured emit **NOT PROVEN**
- EP-S2-08 **PARTIAL**
- EP-S2-05 **NOT PROVEN**
- L3 GLOBAL **OPEN**
- G-REAL **NOT GRANTED**
- L4 **NOT AUTHORIZED**
- Runtime v3 **NON ADOPTED**
- R-MANIFEST-TOPO **OPEN**

## Next gate

1. Draft PR CI / Required Gate on this documentary HEAD
2. ChatGPT PR readiness review
3. **Distinct Morris GO** for undraft + merge
4. Post-merge documentary verification

**Anti-claims:** Draft ≠ merge · this PR ≠ REAL · ≠ L3 CLOSED · ≠ docs already ON MAIN · Product ON MAIN ≠ automatic documentary publication.
```

## 22. CI run et conclusion

| Field | Value |
|-------|-------|
| Run ID | `41065363300` |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/41065363300 |
| Event | `pull_request` |
| headSha | `6e60d839abd99f847e45e1797be9c98886d1b3aa` |
| status | `completed` |
| conclusion | **`success`** |

## 23. Jobs / steps / Required Gate

| Job | Status | Conclusion |
|-----|--------|------------|
| Detect SFIA Studio changes | completed | success |
| Build and validate SFIA Studio | completed | success |
| SFIA Studio Required Gate | completed | success |

PR checks:

```
Build and validate SFIA Studio	pass	5m48s	https://github.com/mcleland147/sfia-workspace/actions/runs/41065363300/job/124095200029
Detect SFIA Studio changes	pass	10s	https://github.com/mcleland147/sfia-workspace/actions/runs/41065363300/job/124095085954
SFIA Studio Required Gate	pass	2s	https://github.com/mcleland147/sfia-workspace/actions/runs/41065363300/job/124098284553
```

**SFIA Studio Required Gate: PASS** on documentary HEAD `6e60d839abd99f847e45e1797be9c98886d1b3aa`.
Build steps observed SUCCESS: Detect · Typecheck · Lint · Build · Unit tests (Vitest) · Modeled governance · Secret pattern scan · Trailing whitespace · Required Gate.

## 24. R23 / R24

R23: Product architecture already ON MAIN (Option C). Documents INTEGRATE. No parallel architecture.
R24: DOCUMENTARY TRUTH-SYNC · **NO SEMANTIC PRODUCT IMPACT**. Manifest digest alignment already PASS local. Draft ≠ docs CURRENT ON MAIN.

## 25. Fake/Real Qualification

Product ON MAIN · DET · Fake Auth browser historical. NOT PROVEN: LIVE emit · STOP browser · server restart · G-REAL · L4 · v3. This cycle: no REAL.

## 26. Réserves

R-STOP-BROWSER / R-SRV-RESTART / R-LIVE-EMIT OPEN · R-MANIFEST-TOPO OPEN · EP-S2-08 PARTIAL · EP-S2-05 NOT PROVEN · L3 GLOBAL OPEN · G-REAL NOT GRANTED · L4 NOT AUTHORIZED · runtime v3 NON ADOPTED.

## 27. Gates Morris restants

1. ChatGPT PR readiness review
2. Distinct Morris GO undraft + merge
3. Post-merge documentary verification
4. Product continuity proofs under distinct GOs

**MERGE NOT EXECUTED. UNDRAFT NOT EXECUTED.**

## 28. Git status final (pre-handoff)

Branch `docs/akg-m5-nap-option-c-c14-r24-truth-sync` @ `6e60d839abd99f847e45e1797be9c98886d1b3aa`
Dirty artefact only: `.tmp-sfia-review/**` (not committed).

```
 M .tmp-sfia-review/chatgpt-review.md
```

## 29. Verdict unique

**DOCUMENTARY COMMIT & PUSH COMPLETE — REMOTE SHA VERIFIED — DRAFT PR CREATED — REQUIRED GATE CI SUCCESS — CHATGPT PRE-MERGE REVIEW REQUIRED — MERGE NOT EXECUTED**

## 30. Instruction ChatGPT

1. Vérifier handoff Git canonique.
2. Vérifier commit documentaire distant `6e60d839abd99f847e45e1797be9c98886d1b3aa`.
3. Vérifier parent + sept fichiers.
4. Vérifier manifest cinq digests.
5. Vérifier Draft PR #629.
6. Vérifier CI run `41065363300` on HEAD exact.
7. Vérifier Required Gate.
8. Contrôler périmètre R24.
9. Préserver réserves.
10. Prononcer PR readiness.
11. Si gates PASS, préparer GO Morris undraft + merge distinct.
12. Ne pas nettoyer la feature branch.
13. Ne pas annoncer docs CURRENT ON MAIN avant merge confirmé.
