P4 FINAL REPOSITORY TRUTH-SYNC —
P5 REQUALIFICATION STATE MATERIALIZATION —
FULL REVIEW PACK

Timestamp (UTC): 2026-10-05T01:33:45Z
Timestamp (local): 2026-10-05 03:33:45 +0200

======================================================================
CYCLE / PROFILE
======================================================================

Project: SFIA Studio
Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
Milestone source: P4 — PILOT–NORA–STUDIO SEMANTIC, PROJECTION & COGNITIVE ARCHITECTURE / TECHNICAL DELTA
Pass: P4 FINAL REPOSITORY TRUTH-SYNC
Cycle type: POST-MERGE / EXÉCUTION REPOSITORY DOCUMENTAIRE
Profile: CRITICAL
Typologie: DOC / EVOL
Fake / Real: N/A

======================================================================
MORRIS GO CONSUMED
======================================================================

P4 FINAL REPOSITORY TRUTH-SYNC = YES

AUTHORIZED this run:
- local branch creation
- P4 local edit
- Roadmap local edit
- review pack
- canonical review-handoff publication

NOT AUTHORIZED:
- project commit / push / PR / merge
- branch deletion
- P5 authorization / start / implementation
- REAL
- runtime v3 adoption

P5 AUTHORIZED = NO

======================================================================
PREVIOUS CANONICAL HANDOFF
======================================================================

branch: sfia/review-handoff
commit: 5533a05cbfe334aee7c799ed74f7669ef1a08004
blob: 988967391fd9437355d90611c14aba1b3d74887a
file: sfia-review-handoff/latest-chatgpt-review.md
Previous pack: P4 CLOSURE-PATCH GIT INTEGRATION — COMMIT / PUSH / PR — FULL REVIEW PACK
Historical at that timestamp (now SUPERSEDED as tip):
- P4 CLOSURE-PATCH MERGE = NO
- closure patch integrated on main = NO

======================================================================
LOCAL GIT TRUTH
======================================================================

Workspace: /Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3
Starting branch: docs/sfia-studio-chat-first-product-simplification-p4-post-merge-closure
Starting HEAD: 332ee04df4f1f11ea38971f58f192f629ed06cc6
Initial dirty: M .tmp-sfia-review/chatgpt-review.md only
Staged: EMPTY
origin/main: 17434de03585eb30d13d59d7ba5c249563f0b33c

Truth-sync branch: docs/sfia-studio-p4-final-repository-truth-sync
Truth-sync base / HEAD: 17434de03585eb30d13d59d7ba5c249563f0b33c

======================================================================
PART A — FINAL P4 REPOSITORY TRUTH
======================================================================

PR #552: MERGED · merge d0b4836046911731605883364d9cc3bef4ac3e7f
P4 architecture package ON MAIN: YES
P4 post-merge CI #672: SUCCESS
P4 CLOSED BY MORRIS: YES

PR #553: MERGED
title: docs(sfia-studio): close P4 semantic projection architecture
mergedAt: 2026-10-05T01:12:22Z
mergedBy: mcleland147
head: 332ee04df4f1f11ea38971f58f192f629ed06cc6
merge: 17434de03585eb30d13d59d7ba5c249563f0b33c
parents:
- d0b4836046911731605883364d9cc3bef4ac3e7f
- 332ee04df4f1f11ea38971f58f192f629ed06cc6
URL: https://github.com/mcleland147/sfia-workspace/pull/553

Post-merge CI:
- workflow: SFIA Studio CI
- run: 37250512824
- run number: 674
- headBranch: main
- headSha: 17434de03585eb30d13d59d7ba5c249563f0b33c
- status: completed
- conclusion: success
Jobs:
- Detect SFIA Studio changes = SUCCESS
- Build and validate SFIA Studio = SUCCESS
  (Typecheck / Lint / Build / Unit tests Vitest / FinOps notice / Modeled governance / Secret scan / Trailing whitespace = SUCCESS)
- SFIA Studio Required Gate = SUCCESS

Canonical status:
P4 GLOBAL VALIDATED BY MORRIS = YES
P4 INTEGRATED = YES
P4 POST-MERGE VERIFIED = YES
P4 CLOSED BY MORRIS = YES
P4 CLOSURE PATCH INTEGRATED ON MAIN = YES
P4 FINAL REPOSITORY VERIFICATION = PASS

======================================================================
P4 STATE TRANSITION
======================================================================

BEFORE (stale living CURRENT on main tip before this pass):
- closure materialization = LOCAL CANDIDATE
- closure patch ≠ integrated on main yet / NOT INTEGRATED ON MAIN
- CURRENT NEXT = P5 REQUALIFICATION
- CURRENT MORRIS GATE still framed around post-closure / requalification path

AFTER (local final truth-sync candidate):
- P4 CLOSURE PATCH INTEGRATED ON MAIN = YES (PR #553 / 17434de0…)
- P4 FINAL REPOSITORY VERIFICATION = PASS (CI #674)
- P5 REQUALIFIED BY CHATGPT = YES
- P5 AUTHORIZED = NO
- P5 STARTED = NO
- final truth-sync patch = LOCAL CANDIDATE (≠ integrated on main yet)
- CURRENT STRUCTURAL STEP = P4 CLOSED + FINAL REPOSITORY VERIFIED → P5 REQUALIFIED BY CHATGPT → AWAITING DISTINCT MORRIS P5 AUTHORIZATION GATE
- CURRENT MORRIS GATE = P5 AUTHORIZATION — PENDING / NOT CONSUMED

Architecture substance unchanged? YES

P4 sections changed (status/governance only):
metadata · banner · §1.1 · §1.2 · authority row · §4.2 · §53 · §54 · §55 · §56 · §57 · footer

======================================================================
ROADMAP
======================================================================

Latest maintenance entry:
STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P4 FINAL REPOSITORY TRUTH-SYNC
Timestamp: 2026-10-05 03:32:06 +0200

CURRENT STRUCTURAL STEP:
P4 CLOSED + FINAL REPOSITORY VERIFIED → P5 REQUALIFIED BY CHATGPT → AWAITING DISTINCT MORRIS P5 AUTHORIZATION GATE

CURRENT MORRIS GATE:
P5 AUTHORIZATION — PENDING / NOT CONSUMED

CURRENT NEXT CAPABILITY:
MORRIS P5 AUTHORIZATION GATE

Historical timestamped rows preserved (not rewritten).
Stale living CURRENT closure-patch-not-on-main claims corrected.

======================================================================
CONSISTENCY MATRIX
======================================================================

P1 CLOSED = YES
P2 CLOSED = YES
P3 CLOSED = YES
P4 GLOBAL VALIDATED = YES
P4 INTEGRATED = YES
P4 POST-MERGE VERIFIED = YES
P4 CLOSED BY MORRIS = YES
P4 closure patch integrated on main = YES
P4 final repository verification = PASS
P5 Entry Contract = DEFINED
P5 REQUALIFIED BY CHATGPT = YES
P5 AUTHORIZED = NO
P5 STARTED = NO
TARGET router architecture validated = YES
Production router implemented = NO
REAL routing proven = NO
Cognitive Completion proven = NO
READY FOR REAL = NO
runtime v3 ADOPTED = NO

======================================================================
STALE CURRENT OCCURRENCE AUDIT (SUMMARY)
======================================================================

closure materialization LOCAL CANDIDATE / closure patch ≠ on main as living tip:
→ SUPERSEDED; remain only in HISTORICAL timestamp rows or explicitly labeled HISTORICAL / SUPERSEDED.

LOCAL TRUTH-SYNC CANDIDATE / truth-sync patch ≠ on main yet:
→ CURRENT for THIS documentary pass (authorized; ≠ project commit).

P5 REQUALIFIED BY CHATGPT = YES · P5 AUTHORIZED = NO:
→ CURRENT

PR #553 / 17434de0 / #674 / 37250512824:
→ CURRENT evidence in living blocks + new timestamp row

======================================================================
GIT VALIDATIONS
======================================================================

Files modified:
M projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md
M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M .tmp-sfia-review/chatgpt-review.md

Other project files modified = NONE
Staged = EMPTY
git diff --check = PASS

Diff stat (project files vs HEAD):
 .../convergence/sfia-studio-convergence-roadmap.md | 19 +++--
 ...n-semantic-projection-cognitive-architecture.md | 99 +++++++++++++---------
 2 files changed, 68 insertions(+), 50 deletions(-)

Project commit/push/PR/merge this run = NONE

======================================================================
ROADMAP DIFF (COMPLETE USEFUL PATCH vs HEAD)
======================================================================

diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index db051da6..4d7997d4 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,6 +4,7 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P4 FINAL REPOSITORY TRUTH-SYNC** | 2026-10-05 03:32:06 +0200 — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 FINAL REPOSITORY TRUTH-SYNC COMPLETE AS LOCAL CANDIDATE — READY FOR MORRIS P4 FINAL TRUTH-SYNC GIT INTEGRATION GATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-merge / repository truth-sync** · Milestone **P4** · Pass **P4 FINAL REPOSITORY TRUTH-SYNC** · CRITICAL · EVOL/DOC · PR **#552 MERGED** · architecture merge `d0b4836046911731605883364d9cc3bef4ac3e7f` · post-merge CI **#672** SUCCESS · PR **#553 MERGED** · closure patch merge `17434de03585eb30d13d59d7ba5c249563f0b33c` · parents `d0b48360…` + `332ee04d…` · post-merge SFIA Studio CI run **#674** / `37250512824` = **SUCCESS** · Detect / Build / Unit tests / **Required Gate** = **SUCCESS** · P4 GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS = **YES** · P4 closure patch INTEGRATED ON MAIN = **YES** · P4 FINAL REPOSITORY VERIFICATION = **PASS** · P5 REQUALIFIED BY CHATGPT = **YES** · P5 Entry Contract = **DEFINED** · **P5 AUTHORIZED = NO** · **P5 STARTED = NO** · READY FOR REAL = **NO** · runtime v3 = **NON ADOPTED** · production router IMPLEMENTED = **NO** · REAL routing PROVEN = **NO** · document = `projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md` · branche `docs/sfia-studio-p4-final-repository-truth-sync` · base `origin/main` @ `17434de03585eb30d13d59d7ba5c249563f0b33c` · prior handoff `5533a05cbfe334aee7c799ed74f7669ef1a08004` / blob `988967391fd9437355d90611c14aba1b3d74887a` · next = **ChatGPT P4 final truth-sync review** → **DISTINCT Morris truth-sync Git integration gate** (commit/push/PR) → DISTINCT merge → post-merge verify → **CURRENT MORRIS GATE = P5 AUTHORIZATION** (NOT CONSUMED) · **≠** P5 AUTHORIZED · **≠** P5 STARTED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED · **≠** project commit/push/PR/merge this pass · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P4 POST-MERGE VERIFICATION & CLOSURE** | 2026-10-05 02:49:04 +0200 — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 POST-MERGE VERIFICATION & CLOSURE COMPLETE AS LOCAL CANDIDATE — READY FOR MORRIS P4 CLOSURE PATCH GIT INTEGRATION GATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-merge** · Milestone **P4 — SEMANTIC / PROJECTION / COGNITIVE ARCHITECTURE / TECHNICAL DELTA** · Pass **POST-MERGE VERIFICATION & CLOSURE** · CRITICAL · EVOL/DOC · PR **#552 MERGED** · merge `d0b4836046911731605883364d9cc3bef4ac3e7f` · parents `e19f8940…` + `e24747e1…` · post-merge SFIA Studio CI run **#672** / `37248128868` = **SUCCESS** · Detect / Build / Unit tests / **Required Gate** = **SUCCESS** · P4 GLOBAL VALIDATED BY MORRIS = **YES** · P4 INTEGRATED ON MAIN = **YES** · P4 POST-MERGE VERIFIED = **YES** · P4 CLOSED BY MORRIS = **YES** · P4 Exit Proof = **SATISFIED** · closure materialization = **LOCAL CANDIDATE** · closure patch INTEGRATED ON MAIN = **NO** · **P5 = NOT AUTHORIZED / NOT STARTED** (Entry Contract DEFINED by CLOSED P4 · DEFINED ≠ AUTHORIZED) · READY FOR REAL = **NO** · runtime v3 = **NON ADOPTED** · TARGET routing architecture = **VALIDATED / ADOPTED AS P4 TARGET CONTRACT** · production router IMPLEMENTED = **NO** · REAL routing PROVEN = **NO** · Cognitive Completion PROVEN = **NO** · document = `projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md` · branche de clôture `docs/sfia-studio-chat-first-product-simplification-p4-post-merge-closure` · base `origin/main` @ `d0b4836046911731605883364d9cc3bef4ac3e7f` · prior handoff `59dbf0c2f5cfb804e3c21f83e94e56f688d91792` / blob `2f2b45206e71df859b6850b56c7ec8030c514dd2` · next = **ChatGPT P4 post-merge closure review** → **DISTINCT Morris closure-patch Git integration gate** (commit/push/PR) → DISTINCT merge → repository truth → **P5 REQUALIFICATION** → DISTINCT GO P5 if recommended · **≠** P5 AUTHORIZED · **≠** P5 STARTED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED · **≠** production router implemented · **≠** project commit/push/PR/merge this pass · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P4 GIT INTEGRATION AUTHORIZED / IN PROGRESS** | 2026-10-05 02:23:24 +0200 — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 GLOBAL VALIDATED BY MORRIS — GIT INTEGRATION AUTHORIZED / IN PROGRESS (COMMIT / PUSH / PR)** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **15 — Capitalisation / REX** · Milestone **P4** · Pass **GIT INTEGRATION — COMMIT / PUSH / PR** · CRITICAL · EVOL/DOC · Morris Git Integration GO = **YES** (commit/push/PR) · MERGE = **NOT AUTHORIZED** · ChatGPT materialization/truth-sync review = **PASS** · prior handoff `db3b7b93723847629b9e46eef2ac6b343737a8a1` / blob `63829146f51b609fba31d0436a3e9a400b1a1869` · document P4 = VALIDATED DOCUMENTARY CANDIDATE · Roadmap truth-sync included · **P4 INTEGRATED = NO** · **P4 CLOSED = NO** · **P5 = NOT AUTHORIZED / NOT STARTED** · READY FOR REAL = **NO** · runtime v3 = **NON ADOPTED** · branche `docs/sfia-studio-chat-first-product-simplification-p4-semantic-projection-cognitive-architecture` · base `origin/main` @ `e19f89409a5eb717838b9d7bffdc8c3d2ee02b18` · next after PR = **ChatGPT PR review** → **DISTINCT MORRIS MERGE GATE** · **≠** P4 MERGED · **≠** P4 CLOSED · **≠** P5 AUTHORIZED · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P4 GLOBAL VALIDATION MATERIALIZATION + ROADMAP TRUTH-SYNC** | 2026-10-05 01:54:17 +0200 — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 GLOBAL VALIDATED BY MORRIS — VALIDATION MATERIALIZATION + ROADMAP TRUTH-SYNC LOCAL CANDIDATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **15 — Capitalisation / REX** · Milestone **P4 — SEMANTIC / PROJECTION / COGNITIVE ARCHITECTURE / TECHNICAL DELTA** · Pass **GLOBAL VALIDATION MATERIALIZATION + ROADMAP TRUTH-SYNC** · CRITICAL · EVOL/DOC · Morris 2026-10-05 Europe/Paris = **P4 GLOBAL VALIDATED BY MORRIS = YES** · ChatGPT Final Targeted Coherence Verification = **PASS — P4 READY FOR MORRIS GLOBAL VALIDATION** · C1–C9 = **PASS** · MC1–MC4 = **PASS** · A–E = **PASS** · WP1–WP5 = **PASS / INCLUDED IN GLOBAL P4 VALIDATION** · document = `projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md` = **VALIDATED DOCUMENTARY CANDIDATE** · canonical validation handoff `sfia/review-handoff` @ `e70a0615f68973079b2c5a9bb94e326842f9bfea` / blob `f3e9af22c95543ca82316c9c2fdeaaa0e99bcf18` · P1/P2/P3 = **CLOSED / INTEGRATED** · **P4 INTEGRATED = NO** · **P4 CLOSED = NO** · **P5 = NOT AUTHORIZED / NOT STARTED** (Entry Contract DEFINED ≠ AUTHORIZED) · READY FOR REAL = **NO** · runtime v3 = **NON ADOPTED** · TARGET routing architecture = **VALIDATED IN P4** · production router IMPLEMENTED/PROVEN = **NO** · REAL routing PROVEN = **NO** · Project Git integration = **NOT AUTHORIZED IN THIS RUN** · branche `docs/sfia-studio-chat-first-product-simplification-p4-semantic-projection-cognitive-architecture` · base `origin/main` @ `e19f89409a5eb717838b9d7bffdc8c3d2ee02b18` · next = **ChatGPT review of validation materialization + Roadmap truth-sync** → **DISTINCT Morris P4 Git Integration gate** (commit/push/PR) → PR review → DISTINCT merge gate → post-merge → P4 closure qualification → requalify → DISTINCT GO P5 · **≠** P4 INTEGRATED · **≠** P4 CLOSED · **≠** P5 AUTHORIZED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED · **≠** project commit/push/PR/merge this pass · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** |
@@ -967,18 +968,18 @@ CRITICAL PATH:
   → HISTORICAL / SUPERSEDED (P2 CP01 tip) — STRUCTURAL STEP was P2 CHECKPOINT 01 CORRECTION PASS 01 COMPLETE *(true then)*
   → P2 — **VALIDATED BY MORRIS + INTEGRATED ON MAIN + POST-MERGE VERIFIED + CLOSED** (PR **#549** / merge `e99d9ad5…`)
   → P3 — **VALIDATED BY MORRIS + INTEGRATED ON MAIN + POST-MERGE VERIFIED + CLOSED** (PR **#550** + closure **#551** / main `e19f8940…`)
-  → P4 — **GLOBAL VALIDATED BY MORRIS + INTEGRATED ON MAIN + POST-MERGE VERIFIED + CLOSED BY MORRIS** (PR **#552** / merge `d0b48360…` · post-merge CI **#672** SUCCESS)
-  → CURRENT NEXT CAPABILITY — **P5 REQUALIFICATION** (Entry Contract DEFINED by CLOSED P4) · P5 **NOT AUTHORIZED / NOT STARTED** · DISTINCT Morris GO required before any P5 start
-  → CURRENT STRUCTURAL STEP — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 POST-MERGE VERIFIED + CLOSED BY MORRIS → PRODUCT SIMPLIFICATION P5 REQUALIFICATION · P1/P2/P3/P4 CLOSED · P5 Entry Contract DEFINED · P5 **≠** authorized · TARGET routing architecture validated/adopted as P4 target contract · production router **NOT IMPLEMENTED/PROVEN** · REAL **≠** authorized · runtime v3 **NON ADOPTED** · closure materialization LOCAL CANDIDATE · closure patch **≠** on main yet
+  → P4 — **GLOBAL VALIDATED BY MORRIS + INTEGRATED ON MAIN + POST-MERGE VERIFIED + CLOSED BY MORRIS** (PR **#552** / `d0b48360…` · CI **#672** SUCCESS) + **CLOSURE PATCH INTEGRATED** (PR **#553** / `17434de0…` · CI **#674** SUCCESS) · FINAL REPOSITORY VERIFICATION = **PASS**
+  → CURRENT NEXT CAPABILITY — **MORRIS P5 AUTHORIZATION GATE** · P5 REQUALIFIED BY CHATGPT · Entry Contract DEFINED · P5 **NOT AUTHORIZED / NOT STARTED**
+  → CURRENT STRUCTURAL STEP — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 CLOSED + FINAL REPOSITORY VERIFIED → P5 REQUALIFIED BY CHATGPT → AWAITING DISTINCT MORRIS P5 AUTHORIZATION GATE · P1/P2/P3/P4 CLOSED · P5 Entry Contract DEFINED · P5 **≠** authorized · TARGET routing architecture validated/adopted as P4 target contract · production router **NOT IMPLEMENTED/PROVEN** · REAL **≠** authorized · runtime v3 **NON ADOPTED** · final truth-sync materialization LOCAL CANDIDATE · truth-sync patch **≠** on main yet
   → DYNAMIC PRODUCT TRAJECTORY — requalify after each capability *(method invariant)*

-CURRENT SIMPLIFICATION TRAJECTORY (living — P4 CLOSED · P5 NOT AUTHORIZED):
+CURRENT SIMPLIFICATION TRAJECTORY (living — P4 CLOSED / FINAL REPOSITORY VERIFIED · P5 REQUALIFIED · P5 NOT AUTHORIZED):
   Axes: (1) Product Interaction Simplification · (2) HumanDecision Materiality · (3) Cognitive Reliability / Adaptive Model & Reasoning Strategy · (4) Chat-first Operating / Workspace / Semantic Architecture trajectory
   P1 Cadrage — VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED (PR #548 / merge `642a10c8…`)
   → P2 Functional Operating Model — VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED (PR #549 / merge `e99d9ad5…`)
   → P3 Workspace / Interaction Architecture — VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED (PR #550 + closure #551 / main `e19f8940…`)
-  → P4 Semantic / Projection / Cognitive Architecture — GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS (PR #552 / merge `d0b48360…` · post-merge CI #672 SUCCESS) · closure materialization LOCAL CANDIDATE · closure patch ≠ on main yet
-  → P5 Integrated Delivery — Entry Contract DEFINED by CLOSED P4 · **NOT AUTHORIZED** · **NOT STARTED**
+  → P4 Semantic / Projection / Cognitive Architecture — GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS (PR #552 / `d0b48360…` · CI #672 SUCCESS) · closure patch INTEGRATED (PR #553 / `17434de0…` · CI #674 SUCCESS) · FINAL REPOSITORY VERIFICATION = PASS · final truth-sync materialization LOCAL CANDIDATE · truth-sync patch ≠ on main yet
+  → P5 Integrated Delivery — REQUALIFIED BY CHATGPT · Entry Contract DEFINED by CLOSED P4 · **NOT AUTHORIZED** · **NOT STARTED**
   → P6 Global Integrated Product QA — NOT AUTHORIZED
   → P7 Fresh Project End-to-End Product Replay — NOT AUTHORIZED · Project NOT SELECTED
   → P8 Requalification — NOT AUTHORIZED
@@ -1026,8 +1027,8 @@ HISTORICAL / CONSUMED (W2-era tip): NEXT CONVERGENCE CAPABILITY was W2 TRACK D /
 HISTORICAL / SUPERSEDED (P2 CP01 living tip): CURRENT STRUCTURAL STEP was P2 CHECKPOINT 01 CORRECTION PASS 01 COMPLETE — P2 AUTHORIZED/IN PROGRESS — P2 NOT VALIDATED — P3→P8 NOT AUTHORIZED — production model routing NOT SELECTED — Pilot–Nora–Studio semantic TARGET FOR P4 *(true then)*
 HISTORICAL / CONSUMED / SUPERSEDED: NEXT MORRIS GATE AFTER REQUALIFICATION was "selection / authorization of a future Studio capability — NOT STARTED" — SUPERSEDED by D-SIMP-01 (capability selected = Product Simplification C1)
 HISTORICAL / SUPERSEDED (P2 CP01 living tip): CURRENT MORRIS GATE was CHATGPT CLOSURE REVIEW CHECKPOINT 01 *(true then)*
-CURRENT STRUCTURAL STEP: STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 POST-MERGE VERIFIED + CLOSED BY MORRIS → PRODUCT SIMPLIFICATION P5 REQUALIFICATION — P1/P2/P3/P4 CLOSED — P5 Entry Contract DEFINED — P5 NOT AUTHORIZED / NOT STARTED — TARGET routing architecture VALIDATED / ADOPTED AS P4 TARGET CONTRACT — production router NOT IMPLEMENTED/PROVEN — REAL NOT AUTHORIZED — runtime v3 NON ADOPTED — READY FOR REAL NO — closure materialization LOCAL CANDIDATE — closure patch NOT INTEGRATED ON MAIN
-CURRENT MORRIS GATE: NONE consumed for P5 · next future structural gate = P5 REQUALIFICATION → ChatGPT qualification/recommendation → DISTINCT MORRIS GO P5 if recommended · prior P4 closure GO consumed for LOCAL materialization only · ≠ P5 AUTHORIZED · ≠ P5 STARTED · ≠ READY FOR REAL · ≠ runtime v3 ADOPTED · ≠ closure-patch commit/push/PR this pass
+CURRENT STRUCTURAL STEP: STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 CLOSED + FINAL REPOSITORY VERIFIED → P5 REQUALIFIED BY CHATGPT → AWAITING DISTINCT MORRIS P5 AUTHORIZATION GATE — P1/P2/P3/P4 CLOSED — P5 Entry Contract DEFINED — P5 NOT AUTHORIZED / NOT STARTED — TARGET routing architecture VALIDATED / ADOPTED AS P4 TARGET CONTRACT — production router NOT IMPLEMENTED/PROVEN — REAL NOT AUTHORIZED — runtime v3 NON ADOPTED — READY FOR REAL NO — P4 closure patch INTEGRATED ON MAIN (PR #553) — final truth-sync materialization LOCAL CANDIDATE — truth-sync patch NOT INTEGRATED ON MAIN
+CURRENT MORRIS GATE: P5 AUTHORIZATION — PENDING / NOT CONSUMED · prior P4 gates (validation / git integration / merge #552 / closure / closure-patch merge #553) CONSUMED · ChatGPT P5 requalification COMPLETED · ≠ P5 AUTHORIZED · ≠ P5 STARTED · ≠ READY FOR REAL · ≠ runtime v3 ADOPTED · ≠ truth-sync commit/push/PR this pass
 M6 / M7: HISTORICAL MILESTONES — SUPERSEDED / ABSORBED BY PRODUCT COMPLETION — traces conservées
 CKC COVERAGE: corpus Studio-native INTEGRATED · Phase A package-bound INTEGRATED via W1 · Phase B ≠ complete · `15` non structurel
 CKC→V2.6 CAPITALIZATION: FUTURE OPTION — DISTINCT METHOD GATE — NOT DECIDED — Studio doctrine remains v3-exclusive
@@ -1044,7 +1045,7 @@ MAJOR GAP TREATMENT: ADOPTED AS OPTION A SCOPE (F1 entry · nav · workspace ·
 W1 ROADMAP REPOSITORY TRUTH: SATISFIED — PR #396 MERGED — PUSH/MAIN CI 32591909031 SUCCESS
 HISTORICAL / CONSUMED (duplicate W2-era tip block): NEXT REPO GATE / NEXT PRODUCT GATE / NEXT CONVERGENCE CAPABILITY Track D Phase B — CONSUMED by PR #403 + W2 CLOSED + subsequent W3/W4/PC trajectory
 HISTORICAL / SUPERSEDED (repeat tip): CURRENT STRUCTURAL STEP was P2 CHECKPOINT 01 CORRECTION PASS 01 COMPLETE — P2 NOT VALIDATED — P3→P8 NOT AUTHORIZED — production routing NOT SELECTED *(true then)*
-CURRENT STRUCTURAL STEP (repeat for local block coherence): STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 POST-MERGE VERIFIED + CLOSED BY MORRIS → P5 REQUALIFICATION — P1/P2/P3/P4 CLOSED — P5 NOT AUTHORIZED / NOT STARTED — TARGET routing VALIDATED / ADOPTED AS P4 TARGET CONTRACT — production router NOT PROVEN — runtime v3 NON ADOPTED — closure patch NOT ON MAIN
+CURRENT STRUCTURAL STEP (repeat for local block coherence): STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 CLOSED + FINAL REPOSITORY VERIFIED → P5 REQUALIFIED BY CHATGPT → AWAITING MORRIS P5 AUTHORIZATION GATE — P1/P2/P3/P4 CLOSED — P5 NOT AUTHORIZED / NOT STARTED — TARGET routing VALIDATED / ADOPTED AS P4 TARGET CONTRACT — production router NOT PROVEN — runtime v3 NON ADOPTED — closure patch ON MAIN via PR #553 — truth-sync patch NOT ON MAIN
 M6 / M7: HISTORICAL / SUPERSEDED / ABSORBED — not forward milestones
 CKC COVERAGE: catalogue applicable evolvable — Phase A integrated · Phase B downstream — current 15-type baseline is a measure, not a structural invariant
 CKC→V2.6 CAPITALIZATION: FUTURE OPTION — DISTINCT METHOD GATE — NOT DECIDED — Studio doctrine remains v3-exclusive

======================================================================
COMPLETE FINAL P4 DOCUMENT
======================================================================

Path: projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md
Lines: 2059

# SFIA Studio — Chat-First Product Simplification — P4 Pilot–Nora–Studio Semantic, Projection & Cognitive Architecture / Technical Delta

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| **Milestone** | **P4 — PILOT–NORA–STUDIO SEMANTIC, PROJECTION & COGNITIVE ARCHITECTURE / TECHNICAL DELTA** |
| **Cycle projet** | **14 — Post-merge** (P4 architecture = Cycle **15** historique · closure Git integration = historique consumé) |
| **Pass** | **P4 FINAL REPOSITORY TRUTH-SYNC** |
| **Profil SFIA** | **Capitalization** · profondeur **Critical** |
| **Typologie** | **DOC** dans macro **EVOL** — post-merge / repository truth-sync |
| **Base Git / Integration** | PR **#552** MERGED (`d0b48360…`) · PR **#553** MERGED · closure merge `17434de03585eb30d13d59d7ba5c249563f0b33c` · parents `d0b48360…` + `332ee04d…` · `origin/main` @ `17434de0…` |
| **Branche truth-sync** | `docs/sfia-studio-p4-final-repository-truth-sync` |
| **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
| **Statut P4** | **GLOBAL VALIDATED BY MORRIS** + **INTEGRATED ON MAIN** + **POST-MERGE VERIFIED** + **CLOSED BY MORRIS** + **CLOSURE PATCH INTEGRATED ON MAIN** + **FINAL REPOSITORY VERIFICATION = PASS** |
| **Product Completion C1** | **VALIDATED / INTEGRATED / CLOSED** (macro Product Completion — distinct de Product Simplification) |
| **Product Simplification P1** | **VALIDATED / INTEGRATED / CLOSED** — Cadrage Chat-First Product Simplification |
| **P2** | **VALIDATED / INTEGRATED / CLOSED** (PR **#549**) |
| **P3** | **VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED** (PR **#550** + closure **#551**) |
| **P5** | **REQUALIFIED BY CHATGPT** · Entry Contract **DEFINED** · **NOT AUTHORIZED** · **NOT STARTED** |
| **runtime v3** | **NON ADOPTED** |
| **READY FOR REAL** | **NO** |
| **Figma** | READ ONLY · contrat P3 préservé · **≠** mutation ce cycle |
| **Roadmap** | Final repository truth-sync LOCAL CANDIDATE this pass · P4 architecture + closure patch already on main · **truth-sync patch ≠ integrated on main yet** |
| **Langue** | Français (identifiants Product / runtime préservés) |
| **Fichier** | `projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md` |
| **Date** | 2026-10-05 · Europe/Paris |
| **Review path** | PR **#552** MERGED · CI **#672** SUCCESS · Morris Closure GO YES · PR **#553** MERGED · post-merge CI **#674** / `37250512824` SUCCESS · Required Gate SUCCESS · Pass = **P4 FINAL REPOSITORY TRUTH-SYNC** |

> **Lecture rapide.** P4 = **comment** le monde Product défini par P1/P2/P3 est représenté, projeté, rendu current/durable/searchable et connecté à la cognition Nora — **sans** seconde vérité ni architecture parallèle. Cinq Work Products. **P4 GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS = YES**. **P4 CLOSURE PATCH INTEGRATED ON MAIN = YES** (PR **#553** / `17434de0…`) · **P4 FINAL REPOSITORY VERIFICATION = PASS** (CI **#674** / `37250512824`). Ce pass = **P4 FINAL REPOSITORY TRUTH-SYNC** (documentary living-truth candidate). **P5 REQUALIFIED BY CHATGPT = YES · P5 AUTHORIZED = NO.** **≠** P5 STARTED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED · **≠** production router implemented · **≠** this truth-sync patch integrated on main yet.

---

## 1. Metadata / Status / Authority

### 1.1 Trajectoire CURRENT (construction)

```text
Product Completion C1 = VALIDATED / INTEGRATED / CLOSED
  ≠ Product Simplification P1
Product Simplification P1 = VALIDATED / INTEGRATED / CLOSED
  (Chat-First Product Simplification Cadrage)
P2 = VALIDATED / INTEGRATED / CLOSED          (PR #549)
P3 = VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED
     (PR #550 merge b5fd3b54… · closure PR #551 merge e19f8940…)
P4 = GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS
PR #552 = MERGED · architecture package ON MAIN
merge = d0b4836046911731605883364d9cc3bef4ac3e7f
post-merge CI #672 / 37248128868 = SUCCESS · Required Gate SUCCESS
PR #553 = MERGED · closure patch ON MAIN
closure merge = 17434de03585eb30d13d59d7ba5c249563f0b33c
parents = d0b48360… + 332ee04d…
post-merge CI #674 / 37250512824 = SUCCESS · Required Gate SUCCESS
P4 FINAL REPOSITORY VERIFICATION = PASS
P4 closure patch INTEGRATED ON MAIN = YES
P4 final truth-sync materialization = LOCAL CANDIDATE this pass
  (this documentary truth-sync patch ≠ integrated on main yet)
P5 REQUALIFIED BY CHATGPT = YES
P5 = NOT AUTHORIZED / NOT STARTED
  (Entry Contract DEFINED by CLOSED P4 · DEFINED ≠ AUTHORIZED)
runtime v3 = NON ADOPTED
READY FOR REAL = NO
P4 CLOSED ≠ P5 AUTHORIZED
```

### 1.2 Roadmap / repository truth vs final truth-sync

| Source | Statut | Rôle |
| --- | --- | --- |
| Convergence Roadmap / P4 tip before PR **#553** merge | Living tip still said closure materialization LOCAL CANDIDATE · closure patch ≠ on main | **HISTORICAL / SUPERSEDED** as living tip after PR **#553** / CI **#674** |
| Convergence Roadmap this pass | Final repository truth-sync · P4 CLOSED + closure patch ON MAIN · P5 REQUALIFIED BY CHATGPT | Living construction truth · **LOCAL TRUTH-SYNC CANDIDATE** · this patch ≠ on main yet |
| Morris P4 Global Validation | **YES** · 2026-10-05 Europe/Paris | Validates P4 architecture/document |
| Morris P4 Git Integration / Merge / Closure | **YES** · consumed · PR **#552** / **#553** | Lifecycle evidence |
| Morris P4 Final Repository Truth-Sync GO | **YES** · consumed this pass · local docs only | Removes last living CURRENT contradiction |
| ChatGPT P5 requalification | **COMPLETED** · recommendation/qualification only | **≠** Morris P5 authorization |

**Règle :** historical Roadmap rows remain historically accurate. P4 CLOSED ≠ P5 AUTHORIZED ≠ runtime implemented.

### 1.3 Domaines d’autorité (pas de hiérarchie globale)

Aligné P2 §2.1 / P3 §1.2 — **aucun rang de précédence global** entre domaines.

| Domaine | Autorité | Rôle |
| --- | --- | --- |
| Construction / gouvernance Studio | Décisions Morris · Build Doctrine · Roadmap | Gates, promotions, doctrine de build |
| Runtime Project structural | HumanDecision du Pilote | Décisions structurantes Project |
| CURRENT implementation / proofs | Git courant · runtime evidence qualifiée · PR/CI | Ce qui existe/fonctionne |
| Destination doctrine Product | v3 framing 30–37 | CE QUE Studio doit devenir |
| Product Completion framing | **Product Completion C1** | Cible / scope macro · **≠ Product Simplification P1** |
| Functional Product behavior | P2 | HOW STUDIO FUNCTIONS |
| Experience / Interaction | P3 + Figma (statut frame-by-frame) + décisions Morris P3 | HOW THE PRODUCT IS EXPERIENCED |
| P4 target technical architecture | **Ce document — VALIDATED / INTEGRATED / CLOSED** (Morris global YES · PR **#552** + closure **#553**) · final repository verification PASS · **≠** runtime implemented | HOW P2+P3 sont représentés / projetés / routés cognitivement |
| Processus externe | v2.6 ChatGPT↔Cursor | Operating model d’exécution |
| Cognitive guidance | CKC | Authority **NONE** |
| External OpenAI capabilities | Snapshot CURRENT daté / revalidable | ≠ doctrine permanente |
| Hypothèses / conversation | Aucune | Candidates uniquement |

#### CURRENT vs TARGET RULE

- Git / runtime evidence prime pour **CURRENT**.
- Doctrine / Product Completion C1 / Product Simplification P1 / P2 / P3 / P4 définissent des contrats **TARGET** selon domaine.
- Aucun document TARGET ne prouve qu’une capacité runtime existe déjà.
- Aucun code CURRENT n’annule silencieusement une décision produit cible.
- Conflit CURRENT ↔ TARGET = **gap de convergence**.


### 1.4 WP status — included in P4 GLOBAL VALIDATION

| WP | Status |
| --- | --- |
| WP1 | **PASS / INCLUDED IN P4 GLOBAL VALIDATION** |
| WP2 | **PASS / INCLUDED IN P4 GLOBAL VALIDATION** |
| WP3 | **PASS / INCLUDED IN P4 GLOBAL VALIDATION** |
| WP4 | **PASS / INCLUDED IN P4 GLOBAL VALIDATION** |
| WP5 | **PASS / INCLUDED IN P4 GLOBAL VALIDATION** |

One Morris global P4 decision covers WP1–WP5 (no separate per-WP Morris IDs).
C1–C9 PASS · MC1–MC4 PASS · A–E PASS · ChatGPT Final Targeted Coherence Verification = PASS.
**P4 INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS = YES.** **≠** P5 AUTHORIZED.

---

## 2. Executive Summary

P4 matérialise l’architecture technique **sémantique**, de **projection** et de **routing cognitif** nécessaire pour que P5 puisse délivrer, sans réinterprétation silencieuse :

1. **Un seul monde Product** (objets gouvernés + projections dérivées + records d’interaction) — incl. Deliverable ≠ Artifact.
2. **Des projections bornées** Pilote / Nora / Studio / Executor / surfaces P3 — sans SharedKnowledgeStore — frontend porte P3 sans vérité UI locale.
3. **Synthèse** = materialized derived projection durable, rebuildable, searchable — **TARGET** physical persistence = existing Product SQLite (`oa-product.sqlite`) · **CURRENT** Synthesis Product-derived persistence = **NOT IMPLEMENTED** · classe sémantique = derived projection **≠ Truth C** — **≠** ProductSqliteSession — **≠** Artifact owner primaire.
4. **Nora Cognitive Routing** = Strategy-first bounded router **intégré** au runtime Nora existant (même Agents Runner) — **deterministic NO-LLM bypass** avant routing — cohort GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra — quality floor avant FinOps — escalation ≤ 1 — REAL-FIRST dès P5.
5. **Simplification proof** = Pilot Interaction Budget (heuristic) + Net Complexity Reduction dans le P5 Entry Contract — pas de PIBEngine.

Cinq Work Products structurants (WP1–WP5) + complétions A–E forment le contrat d’entrée P5. **P4 GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS = YES**. **≠** P5 AUTHORIZED · **≠** runtime implemented · **≠** READY FOR REAL.

---

## 3. P4 Mission / Scope / Relationship to P1–P3

### 3.1 Mission

Répondre à :

> COMMENT le monde Product défini par P1/P2/P3 est-il représenté techniquement, projeté (Pilote/Nora/Studio/Executor/surfaces), maintenu current, rendu durable lorsque nécessaire, reconstruit après reprise, searchable, et connecté à la cognition Nora — **sans** deuxième vérité ni deuxième architecture ?

### 3.2 Deux axes

| Axe | Contenu |
| --- | --- |
| **A — Product Simplification Architecture** | Semantic world · ownership · currentness · projections · Conversation/Aperçu/Exécution · Journal/Historique/Synthèses · CURRENT→TARGET |
| **B — Nora Cognitive Architecture** | Semantic context · CWP · Strategy · Quality floor · Model×Effort · cohort GPT-6 · bounded escalation · same Runner · observations |

**Cross-cutting :** OBJECT-NATIVE OPERATION — Nora raisonne sur de vrais objets Product / projections gouvernées. Pas d’« agent world » parallèle.

### 3.3 Trajectoire macro

```text
P1 Cadrage → P2 FOM → P3 Workspace/IA → P4 Semantic/Projection/Cognitive (ce document)
→ P5 Delivery (NOT AUTHORIZED) → P6 QA → P7 Fresh Project → P8 Adoption gates
```

### 3.4 Hors scope P4 (ce document)

Code · migrations · schéma SQL final · package · tests · Figma mutation · Roadmap truth-sync · Build Doctrine edit · sélection table routing production figée · P5 GO · REAL proof · runtime v3 adoption · pixel-perfect runtime proof.

---

## 4. Source Domains / Epistemic Labels / Anti-claims

### 4.1 Labels épistémiques

| Label | Usage |
| --- | --- |
| **CURRENT FACT** | Observé dans Git/runtime |
| **VALIDATED INPUT** | Product Simplification P1/P2/P3 · Product Completion C1 · doctrine validés |
| **MORRIS DECISION / CONSUMED** | Arbitrage Morris P4 |
| **DOCTRINE** | v3 / Build Doctrine |
| **P4 TARGET** | Architecture cible P4 (pas encore runtime) |
| **INFERENCE** | Inférence documentaire bornée |
| **OPEN** | Détail volontairement non figé |
| **EXTERNAL CURRENT INPUT** | Capacités OpenAI snapshot |
| **HISTORICAL** | Campagnes/preuves passées immuables |

### 4.2 Anti-claims (état de CE run)

| Claim | Statut |
| --- | --- |
| P2 VALIDATED / INTEGRATED / CLOSED | **YES** (Git) |
| P3 VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED | **YES** (Git) |
| P4 AUTHORIZED / STARTED | **YES** (historical GO) |
| P4 architectural substance converged | **YES** |
| P4 DOCUMENT = VALIDATED DOCUMENTARY CANDIDATE | **YES** |
| P4 GLOBAL VALIDATED BY MORRIS | **YES** (2026-10-05 Europe/Paris) |
| P4 INTEGRATED ON MAIN | **YES** (PR **#552** / merge `d0b48360…`) |
| P4 POST-MERGE VERIFIED | **YES** (CI **#672** / `37248128868` SUCCESS · Required Gate SUCCESS) |
| P4 CLOSED BY MORRIS | **YES** (closure GO consumed this pass) |
| P4 closure status materialization LOCAL CANDIDATE | **YES** (historical at closure tip · now SUPERSEDED) |
| P4 closure patch INTEGRATED ON MAIN | **YES** (PR **#553** / merge `17434de0…`) |
| P4 FINAL REPOSITORY VERIFICATION | **PASS** (CI **#674** / `37250512824` SUCCESS · Required Gate SUCCESS) |
| Roadmap truth-sync architecture package ON MAIN | **YES** (via PR **#552**) |
| Roadmap closure patch INTEGRATED ON MAIN | **YES** (via PR **#553**) |
| Roadmap final repository truth-sync LOCAL CANDIDATE | **YES** (this pass) |
| P5 REQUALIFIED BY CHATGPT | **YES** |
| P5 AUTHORIZED / STARTED | **NO** |
| READY FOR REAL | **NO** |
| runtime v3 ADOPTED | **NO** |
| Cognitive Completion PROVEN | **NO** |
| Production router IMPLEMENTED | **NO** |
| GPT-6 cohort REAL runtime routing PROVEN | **NO** |
| Synthèse Product implementation | **NO** |
| Figma-to-runtime / pixel-perfect runtime PROVEN | **NO** |
| SharedKnowledgeStore | **REJECT** |
| Second Nora / second Product model | **REJECT** |
| Documentary convergence = runtime convergence | **NO** |
| Target architecture = CURRENT implementation | **NO** |
| P4 CLOSED = P5 AUTHORIZED | **NO** |

---

## 5. Inherited P1 Simplification Contracts

**VALIDATED INPUT** — P1 cadrage.

### 5.1 Simplification First · NON GREENFIELD

Studio possède déjà un backbone fort. Problème principal = fuite de complexité interne dans l’expérience Pilote et la cognition Nora. Simplification **ciblée**.

### 5.2 Préserver / réduire

| Préserver (complexité essentielle) | Réduire (complexité accidentelle) |
| --- | --- |
| Gouvernance · autorité · preuve · provenance · réversibilité · fail-closed · auditabilité · reconstructibilité | Objets internes exposés · surfaces concurrentes · vocabulaire technique · micro-confirmations · désambiguïsation imposée · doubles chemins · chemins parallèles historiques |
| Recommendation ≠ HumanDecision · Evidence/Review · Project ≠ Cycle · authority boundaries | |

### 5.3 Chat-first opérationnel

Chat = interaction primaire **effective**. Chat-first ≠ Chat-only. Chat-first presentation ≠ Chat-first operation. Interactions proportionnées à matérialité / effet / risque.

### 5.4 Nora vs Studio (P1)

| Nora (prioritaire) | Studio (prioritaire) |
| --- | --- |
| UNDERSTAND · REASON · CHALLENGE · RECOMMEND | RESOLVE · VALIDATE · MATERIALIZE · ENFORCE |

### 5.5 Cognitive Reliability

Axe Product structurant. Adaptive model/reasoning = **moyen**. OpenAI-native-first (R22) réutilisé. **Pas de second moteur Nora.**

### 5.6 Pilot Interaction Budget / Simplification Proof Contract

**PIB** (P1 §11) = **lightweight design heuristic**.

PIB **n’est pas** : quota · SLA · runtime score · persistent KPI · PIBEngine · mandatory DB table · Goodhart optimization target.
**Aucun seuil numérique en P4.**

| Dimension | Sens |
| --- | --- |
| **A — Interaction load** | Explicit responses · confirmations · forced clarifications · surface changes |
| **B — Cognitive load** | Jargon · internal IDs · runtime concepts · method mechanics Pilote must understand |
| **C — Recovery load** | Effort to find current state · prior decisions/blockers · next action |

**Indicateur spécifique :** METHOD / RUNTIME ADMINISTRATION BURDEN → **near zero nominally**, without removing useful human decisions.

| Interaction class | Disposition |
| --- | --- |
| **MATERIAL** | Preserve when real judgment/input required |
| **PROTECTIVE** | Preserve guarantee · simplify form when possible |
| **ACCIDENTAL** | Remove first |

**Net Complexity Reduction** (P1 SP-15) = exit criterion for Product Simplification delivery — considers Pilot burden · Nora burden · recovery · architectural duplication · maintainability · cognitive quality/cost/reliability.

> Cognitive FinOps ≠ Product Simplification measurement.

---

## 6. Inherited P2 Functional Contracts

**VALIDATED INPUT** — P2 FOM. P4 **représente** ; **ne rouvre pas**.

### 6.1 P2-D-01…04

| ID | Contrat | Implication P4 |
| --- | --- | --- |
| **P2-D-01** | Recommendation disposition ≠ HumanDecision · phrase utilisateur ≠ HD auto | Projections Rec ≠ HD · object-native propose ≠ decide |
| **P2-D-02** | Cycle close déterministe quand Exit Proof + critères · Execution success ≠ Cycle complete · Artifact ≠ Exit Proof · Result ≠ Evidence | Persistence/qualification séparées · projections honnêtes |
| **P2-D-03** | Confirmation ≠ HD · conditionnelle · après effet inspectable · pas friction gratuite | Confirmation state Studio · ≠ fill missing HD |
| **P2-D-04** | Cycle close ≠ next activation · Project closed distinct · Abandon = HD · ambiguïté fail-closed | Lifecycle Studio · Nora ne self-active pas |

### 6.2 Autres invariants P2 à préserver

Conversation peut produire zéro mutation · Execution branch optionnelle 0/1/N · read-only cognition ≠ execution · intention ≠ EC · EC ≠ authority · launch ≠ permission cognitive · executor claim ≠ fact · Review ≠ Validation · Artifact ≠ deliverable validé · replan signal ≠ replan décidé · recovery résout vérité actuelle avant session · Functional Routes ≠ runtime taxonomy · cognitive escalation ≠ authority escalation · pas de universal Validator Engine · pas de runtime universel CW0–CW3 imposé.

### 6.3 Deliverable / Artifact / Validation (P2 §11 — carried into P4)

| Concept | Contract |
| --- | --- |
| **Deliverable** | Functional result/obligation expected |
| **Artifact** | Concrete manifestation that may satisfy all/part of a Deliverable |
| Binding | Deliverable may bind **0..N** artifacts / versions / Evidence |
| Suggested Deliverable | Ephemeral by default · durable only when continuity/materiality require |
| Execution | **One** production mechanism · **NOT** a Deliverable lifecycle state |
| Hard invariant | Artifact exists ≠ Artifact validated ≠ Exit Proof satisfied ≠ Cycle complete |
| Validation | Compose applicable acceptance/exit/domain/Evidence/Review/Nora/Pilot judgment — **NO universal Validator Engine** |

Nora may propose/draft/analyse/produce semantic candidate — **does NOT** gain durable-effect authority from producing it.

### 6.4 Deterministic NO-LLM boundary (P1 SP-23 / P2 §19.2)

Deterministic Studio mechanics (currentness · membership · authority · idempotence · protected boundaries · lifecycle invariants · fail-closed · schema/projection resolution when deterministic) **do NOT inherently require an LLM**.

CW0–CW3 remain **candidate cognitive workload classes** — **NOT** mandatory runtime taxonomy.
`CW0` may remain explanatory shorthand only.

> DETERMINISTIC MECHANICS BYPASS COGNITIVE ROUTING.

---

## 7. Inherited P3 Workspace / Interaction Contracts

**VALIDATED INPUT** — P3 CLOSED. P4 **ne redesign pas** P3.

### 7.1 North Star (résumé)

Conversation-led · chat-first ≠ chat-only · conversation dominante · minimum Project context · progressive disclosure · Rec/Decision/Confirmation distinctes · Evidence contextuelle · nav globale minimale · journey ≠ rigid workflow · premium/calme/adulte · motion meaningful + reduced motion · FR fonctionnel · internals SFIA masqués.

### 7.2 Navigation / continuité

| Surface | Rôle P3 |
| --- | --- |
| Conversation / Aperçu / Exécution | Nav Project |
| Journal / Historique / Synthèses | Continuité |
| Evidence | Support contextuel Exécution/Synthèses · pas destination principale |

### 7.3 ProjectTrajectory

Past = Terminé · Present = En cours · Future = Proposé.
Future proposed = Recommendation · ≠ next Cycle auto · ≠ decided.

### 7.4 Journal / Historique / Synthèses (expérience)

Journal onglets : Sujets · Réserves · Recommandations · Décisions.
Historique ≠ current truth.
Synthèses : 9 sections · Verdict avant recommendation · full-content search.

### 7.5 Nora activity / Figma fidelity

START · ACTIVITY · STREAMING · COMPLETE · STOPPED · no fake progress · no CoT.
Figma = référence visuelle · **NO INTENTIONAL VISUAL DEVIATION** · 0–1 px target · runtime screenshot + comparison pour verdict fort. P4 **supporte** la fidélité ; **ne redesign pas**.

### 7.6 Réserves P3 routées P4/P5 (non bloquantes architecture)

Create/first Cycle simultané · full-content search mécanique · timings/easing · breakpoints CSS · tokens/components — **OPEN** implémentation · **≠** architecture parallèle.

### 7.7 P3→P4 technical carrying (pointer)

P3 §39.2 requires P4 to carry design-token · component · shared primitives · typography/spacing · radius/border/shadow · color · responsive · dynamic content · overflow/scroll · state · motion · reduced-motion · assets/icons · Meridian · GitHub icon · a11y · capture/testability — **without** CSS ad hoc screen-by-screen · duplicated styles · parallel responsive architecture · generic components degrading Figma · design system diverging from Figma · UI-local Product truth.

Full technical boundary = **§27A**. Surface coverage = **§27**. Frontend CURRENT→TARGET families = **§30**.

---

## 8. P4 Architecture Principles

1. **ONE AUTHORITATIVE OWNER PER TRUTH DOMAIN, N PROJECTIONS.**
2. **INFORMATION MAY BE DURABLE WITHOUT BECOMING PRODUCT TRUTH.**
3. **OBJECT-NATIVE** — text → LLM → duplicate UI state **interdit** comme pattern nominal.
4. **PRODUCT TRUTH BEFORE CONVERSATION REPLAY** (recovery).
5. **STALE/DERIVED PROJECTION** may display honestly · **never alone authorize mutation**.
6. **No SharedKnowledgeStore · no second Project model · no second Nora · no global event sourcing by default · no parallel router service.**
7. **R22 OpenAI-native-first** — USE/KEEP → ADAPT → COMBINE → COMPLETE/BUILD → DEFER/REJECT.
8. **Strategy ≠ Model ≠ Effort ≠ SFIA Profile ≠ Criticality.**
9. **Quality floor before FinOps.**
10. **Cognitive escalation ≠ authority escalation.**
11. **REAL-FIRST** for cognition/routing slices when OpenAI boundary accessible (P5+).
12. **Historical evidence immutable** — no GPT-5.6→GPT-6 rewrite.
13. **DETERMINISTIC MECHANICS BYPASS COGNITIVE ROUTING** — NO LLM when probabilistic cognition is not materially required.
14. **Deliverable ≠ Artifact** · Execution ≠ Deliverable lifecycle · Artifact exists ≠ validated ≠ Exit Proof ≠ Cycle complete.
15. **NO UNIVERSAL VALIDATOR ENGINE** · NO UNIVERSAL MANDATORY DECISIONBASIS ARCHITECTURE.
16. **P3 remains visual/interaction authority** — frontend consumes same Product projections · styling/state primitives ≠ Product truth · no intentional visual deviation.
17. **CONVERGE EXISTING VISUAL ASSETS** toward one minimum-sufficient P3-capable presentation layer — **no** new design-system stack by default · **no** third token family as solution.
18. **SIMPLIFICATION PROOF** — PIB heuristic + Net Complexity Reduction required for Product Simplification success claims · no metrics factory.

---

## 9. WP1 — Semantic Connectivity Audit

### 9.1 Objectif WP1

Identifier objets sémantiques partagés · points d’entrée/lecture/écriture · relations · projections · ruptures CURRENT · duplications · gaps · risques de **parallel truth**.

### 9.2 Monde sémantique cible (inventaire)

| Concept | Famille | Notes |
| --- | --- | --- |
| Conversation / Pilot transcript | Interaction record | Durable possible · non autoritatif |
| Project | Authoritative | Product SQLite |
| Living Project State (LPS) | Authoritative | Product |
| Cycle | Authoritative | Studio lifecycle |
| ProjectTrajectory (decided/current) | Authoritative | Durable/reconstructible |
| ProjectTrajectory (proposed future) | Recommendation / candidate | Non autoritatif jusqu’à HD/transition |
| Recommendation | Epistemic / governed | ≠ HD |
| Reservation / Risk / Epistemic items | Epistemic / governed | ≠ blocker auto sauf règles |
| HumanDecision | Authoritative (scope) | Pilote |
| Confirmation | Governed state | ≠ HD |
| Deliverable Requirement | Governed Product semantic requirement | May be ephemeral or durable · ≠ Artifact |
| Artifact / Version | Produced material/output | May satisfy Deliverable · existence ≠ validation |
| Deliverable validation / qualification | Domain/exit/acceptance composition | NO universal Validator Engine |
| ExecutionContract | Authoritative contractual | Studio |
| Execution / Attempt | Execution facts | ≠ business success seul |
| Executor Claim / Report | CLAIM | ≠ Evidence |
| Result | Outcome record | ≠ Evidence |
| Evidence | Governed epistemic | ≠ vérité absolue auto |
| ReviewBundle | Governed review | Review ≠ Validation |
| ClaimEvaluation / Contract Result | Studio qualification | Verdict canonic |
| Product Resolution | Read composition | ≠ second store |
| Journal | Derived projection | ≠ SoT |
| History | Read projection | ≠ History truth |
| Synthesis | Materialized derived projection | ≠ SoT · rebuildable |
| CKC / Method context | Guidance | Authority NONE |
| Nora cognitive context | Cognitive projection | Seed = studioCognitiveContext |
| Routing telemetry / cost observations | Interaction/cognitive records | Durable ≠ authority |

### 9.3 Flow conceptuel (branches — non linéaire)

Un parcours représentatif **≠** workflow séquentiel obligatoire.

```text
Recommendation / intention / current Product state
→ qualification de matérialité / besoin de jugement

BRANCH A — HumanDecision (0 / 1 / N)
  IF structural judgment required:
    → HumanDecision du Pilote
  ELSE:
    → aucune HumanDecision

BRANCH B — Execution (0 / 1 / N) —
  orthogonale en cardinalité à HumanDecision ;
  peut être gated par A lorsque l’autorité applicable l’exige.
  IF exécution nécessaire:
    → action préparée / ExecutionContract
    → inspection
    → Confirmation uniquement si requise/applicable (0 / 1 / N)
    → effective-authority resolution & enforcement (Studio)
    → Execution / Attempt
    → executor Claim / Result
    → Studio verification
    → Evidence / Review
    → Product qualification / Product Resolution
  ELSE:
    → aucune branche execution

Relation BRANCH A ↔ BRANCH B :
  CARDINALITY / EXISTENCE ARE ORTHOGONAL.
  EFFECTIVE AUTHORITY MAY CREATE A DEPENDENCY WHEN APPLICABLE.
  HD non requise → Execution may proceed without HD,
    subject to all other applicable authority / Confirmation / EC / guardrails.
  HD requise → Execution is gated until a valid applicable HumanDecision exists.

AFTER (as applicable):
→ Nora analysis / Recommendation / replan / continuation
→ deterministic Cycle progression where applicable
→ updated Project semantic context
```

**Cardinalités P2 :** HumanDecision = **0 / 1 / N** · Confirmation = **0 / 1 / N** · Execution branch = **0 / 1 / N**.
Conversation peut produire **zéro** mutation.
HumanDecision = seulement lorsqu’un jugement structurel est requis.
Confirmation = conditionnelle.
Execution = optionnelle.
**≠** HumanDecision always required before Execution.
**≠** Execution never depends on HumanDecision.

**Invariant :** une surface UI **ne possède pas** ce graphe — elle le **projette**.

### 9.4 Pre-Project conversation → Project materialization

**CURRENT FACT :**

- `CreateProject` crée atomiquement **Project + LPS v1** (`createProject.ts`).
- Surfaces pre-M6 (`NewProjectIntentionPage` et héritages) exposent encore une création intention/formulaire provisoire.
- **Aucune preuve** que *pre-project conversation + Project + first Cycle* = une transaction globale atomique.

**TARGET conceptuel :**

```text
pre-Project conversational / intention context
→ non-authoritative interaction / intention state
→ Create Project intent
→ Studio resolves doctrine / current requirements
→ materializes Project + LPS
→ interaction continuity rebound / continued against durable projectId
→ fresh Product truth resolved
→ first Cycle qualified / materialized SEPARATELY if applicable
```

**ANTI-CLAIM :**
> CREATE PROJECT CONTINUITY ≠ ATOMIC PROJECT + FIRST CYCLE TRANSACTION.

Simultanéité Create Project / first Cycle reste **OPEN / P5 implementation subject** sauf nouvelle preuve Git.
Ne pas inventer un mécanisme de persistence pre-project conversation non prouvé par CURRENT.

---

## 10. Canonical Semantic World / Object Topology

```text
PRODUCT WORLD (authoritative + governed facts)
        │
        ▼
RESOLUTION / CURRENTNESS /
EFFECTIVE-AUTHORITY RESOLUTION & ENFORCEMENT (Studio)
        │
        ▼
ROLE-AWARE PROJECTIONS
   ├─ Pilote (minimum-sufficient UX)
   ├─ Nora Semantic Context (object-native)
   ├─ Studio internals (deterministic)
   ├─ Executor (EC-bounded)
   └─ UI surfaces (Conversation / Aperçu / Exécution / Journal / Historique / Synthèses)
```

Pas de SharedKnowledgeStore. Pas de UI database. Pas d’agent semantic database.

---

## 11. Authoritative Objects vs Derived Projections vs Interaction Records

### 11.A AUTHORITATIVE / GOVERNED PRODUCT OBJECTS

Project · LPS · Cycle · decided/current Trajectory · HumanDecision · Confirmation · **Deliverable Requirement (when durable/material)** · **Artifact / Version (as governed production output)** · ExecutionContract · Attempt/execution facts · Evidence · ReviewBundle · ClaimEvaluation · autres objets Product selon source CURRENT.

**Nuance :** « authoritative » est **par domaine**. Evidence = objet gouverné ≠ vérité absolue de toute claim. Attempt = fait d’exécution ≠ décision. HD = autoritatif pour son sujet/scope selon statut. Deliverable Requirement ≠ Artifact. Suggested Deliverable ephemeral by default ≠ automatic durable aggregate.

**Semantic world ≠ persistence schema.** Not every concept is a first-class persistent aggregate.

### 11.B MATERIALIZED / DERIVED PROJECTIONS

Cycle Journal · History read model · Execution continuity projection · Pilot Project projection · Nora semantic projection · UI surface projections · **Synthesis materialized projection**.

**Règle :** projection durable ≠ Product truth.

### 11.C INTERACTION / COGNITIVE RECORDS

Pilot transcript · Session / Memory B · logical turn identity · CWP signals · routing telemetry · usage/cost · interaction records.

**Règle :** durable ≠ authoritative.

**INVARIANT :** *INFORMATION MAY BE DURABLE WITHOUT BECOMING PRODUCT TRUTH.*

---

## 12. WP2 — Information Ownership / Authority Matrix

**CORE INVARIANT :**
> STUDIO WRITER / MATERIALIZER ≠ STUDIO HUMAN AUTHORITY.

Dimensions distinctes (ne pas fusionner) :

| Dimension | Sens |
| --- | --- |
| Canonical domain owner | Qui « possède » le type d’objet dans le monde Product |
| Proposal / producer | Qui peut préparer / proposer |
| Decision / authority source | Qui porte le jugement ou l’autorisation humaine lorsque requis |
| Product writer / materializer | Qui persiste / matérialise (souvent Studio) |
| Persistence | Où ça vit physiquement |
| Consumers | Qui consomme la projection |
| Currentness | Comment la fraîcheur est établie |
| Disposition | KEEP / ADAPT / COMPLETE / … |
| Anti-claims | Interdits de lecture |

| Concept | Domain owner | Proposal/producer | Decision/authority source | Writer/materializer | Persistence | Consumers | Currentness | Disp. | Anti-claims |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Project | Product | Pilot via governed flow | Structural change → Pilote HD ; deterministic transitions → Studio rules | Studio | Product SQLite `oa-product` | All | Project id/version | KEEP | Nora ≠ owner · Studio writer ≠ Pilot judgment |
| LPS | Product | Nora may recommend | Structural arbitration → Pilote HD when required ; else Studio rules | Studio materializes | Product SQLite | Pilote/Nora/Studio | LPS version | KEEP | |
| Cycle | Studio lifecycle | Studio | Deterministic lifecycle Studio-owned/enforced ; HD only if structural arbitration required | Studio | Product SQLite | Surfaces | Cycle state | KEEP | No UI-local lifecycle · Nora cannot self-activate |
| Trajectory decided/current | Product | Studio after HD/rules | HD/rules as applicable | Studio | Product SQLite + trajectory repo | Aperçu/Nora | version/fingerprint | KEEP/ADAPT | Display ≠ decide |
| Trajectory proposed | Epistemic Rec | Nora produce · Studio may materialize Rec | HD/transition applicable | Studio materializes Rec | Epistemic/Rec path | Aperçu « Proposé » | Rec basis-currentness (§13.5) | KEEP/ADAPT | ≠ active Cycle |
| Recommendation | Epistemic object | Nora produce | Disposition P2-D-01 (≠ HD) | Studio materializes | Product epistemic path | Journal Rec / Conversation | **basis/currentness** (§13.5) — **≠ id alone** | KEEP | ≠ HD |
| Reservation | Epistemic/governed | Nora/Studio | Rules | Studio | Product | Journal Réserves | | KEEP | ≠ auto-blocker |
| HumanDecision | Pilote | Nora may prepare/request | **Pilote** (judgment source) | **Studio** persists/materializes | Product SQLite | Journal Décisions | HD id/status | KEEP | Studio NEVER author of Pilot judgment · Nora cannot decide |
| Confirmation | Governed Product Confirmation state | Nora may surface/request **only if** Studio resolved Confirmation applicable | **Pilote** against inspected prepared effect when applicable | Studio persists/applies governed state | Product | Conversation/Exec | Applicability = Studio-resolved from effect/boundary/rules | KEEP | ≠ HD · Nora ≠ decide applicability · cannot fill missing intention/HD · Studio writer ≠ Pilot authority |
| Deliverable Requirement | Product semantic requirement | Nora/Pilote may propose | Materialization/durability per materiality · structural HD when required | Studio materializes when durable | **CURRENT first-class durable representation = NOT IDENTIFIED / GAP TO QUALIFY IN P5** · NEW STORE = **NOT ADOPTED** | Aperçu/Journal/Nora/Synthèses | Subject + status | COMPLETE / ADAPT | ≠ Artifact · Suggested ephemeral by default · no premature durable Suggested Deliverable |
| Artifact / Version | Produced output material | Production mechanisms (Execution and others) | Validation ≠ existence · Studio governs durable materialization | Studio / production path | Artifact routing · review material · docs-write paths (CURRENT) · Product/FS as applicable | Exec/Review/Synthèses | Version/lineage | KEEP / ADAPT | Existence ≠ validated ≠ Exit Proof ≠ Cycle complete |
| Deliverable validation / qualification | Applicable acceptance/exit/domain criteria | Evidence/Review/Nora/Pilot as applicable | Composition of applicable mechanisms | Studio composes · Pilote when judgment required | Reuse Evidence/Review/CE/Product qualification where applicable | Terminal/Exit/Synthèses | Criteria-bound | KEEP / COMPOSE | **NO universal Validator Engine** · do not universalize Generic Execution validation |
| ExecutionContract | Studio | Nora may prepare candidate | Inputs/authority basis may include intention, HD, Confirmation, policy, capabilities **as applicable** | Studio materializes contractual object | Product SQLite | Exec/Nora/Executor | EC version | KEEP | **EC alone ≠ effective authority** · Execution ≠ Deliverable lifecycle state |
| Attempt | Execution subsystem | Studio/executor path | N/A as human judgment | Studio/executor path | Product SQLite | Exec/Resolution | Attempt id + lifecycle | KEEP | See Attempt semantics below |
| Executor report | Executor | Executor | N/A (claim) | Claim path | Review material / claim path | Resolution | | KEEP | CLAIM ≠ Evidence |
| Result | Product pipeline | Studio | Qualification | Studio | Product | Exec/Synthèses | | KEEP | ≠ Evidence |
| Evidence | Studio epistemic | Pipeline | Status/freshness | Studio | Product SQLite | Nora/Synthèses | Evidence status | KEEP | ≠ automatic truth |
| ReviewBundle | Studio | Pipeline | Supersession | Studio | Product SQLite | Resolution/Synthèses | | KEEP | Review ≠ Validation |
| ClaimEvaluation | Studio | Studio | Correct/supersede | Studio | Product SQLite M8 | Terminal/Resolution | | KEEP | No duplicate verdict truth |
| Product Resolution | Studio read composer | N/A | N/A | Composer (not a store) | **Not a store** | Nora/Exec/Synthèses | Resolve-time | KEEP/COMPLETE | ≠ second aggregate |
| Journal | Derived | Studio projection | Supersession of entries | Studio projection | **Session SQLite** journal tables | Journal UI | Entry lineage | KEEP/ADAPT | ≠ SoT |
| History | Read projection | Composer | N/A | Composer | None dedicated | Historique UI | Resolve-time | HARVEST/ADAPT | No HistoryStore default |
| Synthesis | Derived materialized | Builder from Resolution | Rebuild/successor | Builder | **TARGET: Product SQLite** (physical) · class = derived projection **≠ Truth C** | Synthèses UI/Nora | Source consistency | COMPLETE/BUILD | ≠ SoT · ≠ Session owner · co-location ≠ Truth C |
| Transcript | Interaction | Session | Append | Session | Session SQLite | Nora continuity | Turn refs | KEEP | No authority alone |
| CKC | Method | Guidance | N/A | N/A | DoctrinePackage/method | Nora context | | KEEP | Authority NONE |
| Cognitive routing decision | Server cognitive config | Router policy | Policy version | Router/telemetry | Telemetry | Eval/ops | | COMPLETE | No business authority |

### 12.1 Effective authority (conceptuel)

Effective authority = intersection **as applicable** :

```text
valid human authorization when required
∩ ExecutionContract scope
∩ AgentCapability / policy
∩ runtime guardrails
∩ required confirmations / constraints
```

Ne fige **pas** une API d’implémentation. Tous les facteurs ne sont pas requis pour chaque action.

### 12.2 Attempt semantics (explicit)

- Attempt a une identité / lineage durable ;
- Attempt status suit les transitions du lifecycle Execution ;
- les faits d’exécution historiques ne doivent **pas** être réinterprétés comme HumanDecisions ;
- Attempt ≠ succès Product / métier ;
- la qualification Product courante se résout via Evidence / Review / ClaimEvaluation lineage.

### 12.3 DecisionBasis disposition (P2 → P4)

**NO UNIVERSAL MANDATORY DECISIONBASIS ARCHITECTURE REQUIRED AT P4.**

CURRENT already has bounded/optional `DecisionBasis` types embeddable on HumanDecision (`lib/oa/decision/domain/types.ts`) plus snapshot/provenance/subject-integrity/currentness/fingerprint mechanisms.

Reuse these **where materiality/auditability require**. DecisionBasis is **NOT** required for every ordinary Recommendation, Confirmation, or deterministic transition.

COMPLETE only if P5 exposes a demonstrated auditability/reconstructibility gap not satisfied by current mechanisms.
No new DecisionBasis store. Do not expose DecisionBasis to nominal Pilot UX.

### 12.4 Work-class-specific validation disposition (P2 → P4)

**NO UNIVERSAL VALIDATOR ENGINE.**

Default target: compose existing applicable domain mechanisms — Evidence · Review · ClaimEvaluation · Product qualification · deterministic checks · Nora analysis · Pilot judgment when required.

Do **NOT** universalize Generic Execution validation to all work classes.
Specific validation mechanism may be designed **ONLY** if a concrete work-class gap demonstrates the need.
If semantics change → functional requalification first · otherwise minimum-sufficient technical delta · Morris gate if architecture pivots.

---

## 13. Currentness / Provenance / Invalidation Contract

### 13.1 Questions de toute projection sensible

1. Quelles sont mes sources ?
2. Quelles versions / fingerprints ?
3. Quand ai-je été dérivée ?
4. Suis-je encore cohérente ?
5. Suis-je historique ?
6. Dois-je être re-résolue avant effet ?

### 13.2 Métadonnées conceptuelles

`sourceRefs` · `sourceVersions` / `semanticFingerprints` · `derivedAt` · `provenance` · `currentness`

### 13.3 Vocabulaire

| Terme | Sens |
| --- | --- |
| **CURRENT** | Sources toujours applicables |
| **HISTORICAL** | Valide pour un passé · pas représentatif du présent |
| **STALE** | Prétend refléter un état invalidé |
| **UNAVAILABLE** | Studio ne peut pas qualifier honnêtement |

**P4 :** sémantique de résolution d’abord — **≠** schéma persistant universel imposé.

### 13.4 Invariant critique

> A STALE OR DERIVED PROJECTION MAY BE DISPLAYED HONESTLY, BUT MUST NEVER ALONE AUTHORIZE A MUTATION.

Avant effet structurant :

```text
projection/ref → resolve current authoritative object → project binding
→ currentness/version → authority → materialize effect
```

Appliquer au moins à : chat cards · Recommendation · Trajectory proposal · Journal · History deep links · Synthesis · Nora semantic context · prepared actions.

---

### 13.5 Recommendation currentness contract

**CURRENT FACT — pattern à HARVEST / GENERALIZE :**

- `trajectoryRecommendationCurrentness.ts`
- `lifecycleRecommendation/currentness.ts`
- `lifecycleRecommendation/basisFingerprint.ts`
- `lifecycleRecommendation/resolveCanonicalBasis.ts`

Pattern observé : material basis refs · `basisFingerprint` · `semanticKey` · current Product facts · HumanDecision / Evidence / blockers / trajectory / LPS / doctrine basis · supersession/disposition · **fail-closed** si basis matériel requis non rebuildable.

**Families :** Lifecycle Recommendation et trajectory Recommendation ont déjà des mécanismes CURRENT. P4 **n’impose pas** un schéma unique concret pour toutes les Recommendations maintenant.

**TARGET principle :**

> REUSE / GENERALIZE CURRENT BASIS-CURRENTNESS PATTERN
> BEFORE BUILDING A SECOND RECOMMENDATION CURRENTNESS MECHANISM.

**Contract :**

Recommendation identity alone **DOES NOT** establish currentness.

Currentness conceptuelle utilise :

```text
semantic subject / key
+ material basis refs
+ basis fingerprint
+ current Product facts
+ disposition / supersession state
+ fail-closed if required basis unreadable
```

---

## 14. ProjectTrajectory Semantics

| Bande P3 | Sémantique | Owner |
| --- | --- | --- |
| **Terminé** (Past) | Cycles/steps completed durables | Product |
| **En cours** (Present) | LPS + active Cycle + decided/current Trajectory | Product |
| **Proposé** (Future) | Recommendation / candidate | Non autoritatif |

Future proposed : affichable sans HD **comme Recommendation** · ≠ decided · ≠ active · ≠ guaranteed · ≠ next Cycle auto.

Versioning Trajectory CURRENT = **KEEP / ADAPT**. Pas de second trajectory engine.

---

## 15. Conversation / Transcript Contract

### 15.1 CURRENT FACT

- `canonicalConversationSession` / `productSqliteSession` / `cycleJournalStore` persistent désormais conversation/session material et Pilot transcript (Session SQLite).
- `features/project-assistant/f2/proposalStore.ts` reste **process-local** (Map in-memory).
- Le notice historique dans `proposalStore.ts` affirme encore en substance que transcript/Proposal sont « mémoire de processus » — **stale disclosure** par rapport à la durabilité transcript actuelle.
- Le **effective decision subject** peut être durable / reconstructible tant qu’il reste valide via Product / Epistemic markers / snapshots / currentness.
- Subject lost / changed / unreadable → **requalification explicite**, jamais d’invention.

### 15.2 TARGET classification

| Record | Class |
| --- | --- |
| Pilot transcript | Interaction record durable (Session) — **≠** Product authority |
| Proposal store | Process-local helper — **≠** second Proposal truth |
| Effective decision subject | Reconstructible depuis ancres Product/Epistemic **while valid** |

**TARGET :**

- no false-memory claim ;
- no mandatory new durable Proposal aggregate unless P5 proves a real gap ;
- reuse Product objects / Epistemic currentness / DecisionBasis / subject integrity mechanisms first.

### 15.3 F2 Proposal / decision-subject continuity (debt)

| | |
| --- | --- |
| CURRENT | Proposal store = process-local · transcript durability evolved beyond old disclosure · subject reconstructible while valid · lost subject → requalify · old process-local transcript wording in proposalStore notice = stale implementation/documentation debt |
| Disposition | **HARVEST / ADAPT** · **TEMPORARY WITH EXIT** where applicable |
| Debt owner | **P5** |
| Exit proof (conceptuel) | no stale disclosure contradicting actual transcript durability · decision subject honestly reconstructible/current or requalified · no second Proposal truth/store without proof |

**Ce cycle :** document only — **ne pas** éditer `proposalStore.ts`.

---

## 16. Journal Architecture

### 16.1 CURRENT FACT

Cycle Journal projection dans Session SQLite : `journalEntryId` · `projectId` · `cycleInstanceId` · `topicOrdinal` · `title` · `currentSummary` · `stabilizedPoints` · `openPoints` · `sourceTurnRefs` · lineage/supersession · etc. Types : « NEVER Truth C / HD / Evidence / Recommendation authority ».

Search CURRENT = filtre in-memory (`searchCycleJournalIndex`) — **pas FTS5**.

### 16.2 TARGET

**Materialized Continuity Projection.** Jamais Product SoT.

### 16.3 Onglets P3 = COMPOSITE PROJECTION (pas aggregate unique)

| Onglet | Projette |
| --- | --- |
| Sujets | Cycle Journal entries |
| Réserves | vrais Reservation/Epistemic objects |
| Recommandations | vrais Recommendation/Epistemic objects |
| Décisions | HumanDecision |

Disposition : **KEEP / ADAPT**.

---

## 17. History Architecture

### 17.1 CURRENT FACT

`projectHistory.ts` = bounded read model — **HARVEST / ADAPT**. Pas de HistoryStore dédié par défaut.

### 17.2 TARGET

History = **read projection** from significant governed Product facts — **≠** event sourcing · **≠** dedicated truth · **≠** full conversation log by default.

**Potential Product sources (as applicable) :**

- Project / LPS anchors
- Cycle lifecycle / transitions
- ProjectTrajectory versions / transitions
- HumanDecisions
- ExecutionContracts
- Attempts
- qualified Result / Product Resolution anchors
- relevant Synthesis references
- other significant governed Product facts as needed

**Important :** Transcript is **NOT** automatically converted into History.

---

## 18. Synthesis Architecture

### 18.1 MORRIS DECISION / CONSUMED

Synthèse = **materialized derived projection** durable, traçable, recherchable.
Synthèse ≠ Product SoT · ≠ ReviewBundle brut · ≠ Artifact générique.
**Rebuildable** depuis sources Product.

### 18.2 Pipeline TARGET (génération / dépendance)

```text
Execution / Attempt / Claim
→ Evidence
→ Review
→ Product qualification / ClaimEvaluation
→ canonical ContractResultVerdict
→ Post-Evidence Recommendation when applicable
→ Product Resolution
→ Synthesis Builder
→ Nora narrative enrichment if useful
→ Materialized Synthesis Projection
→ Product SQLite existing (physical persistence boundary)
→ search / UI / Nora retrieval
```

Jamais d’un Cursor report seul. Jamais de la conversation seule.

**Product Resolution** = governed input boundary for Synthesis.
**Synthesis narrative** = downstream of qualified Product facts.
**Product Recommendation** may already be part of Product Resolution — **MUST NOT** depend on Synthesis narrative.

> VERDICT BEFORE RECOMMENDATION IN P3 SYNTHESIS **PRESENTATION**
> ≠
> SYNTHESIS NARRATIVE BEFORE PRODUCT RECOMMENDATION **GENERATION**.

Synthesis never creates canonical Product verdict.
Synthesis never owns the canonical Recommendation.
Synthesis projects qualified Product information and may narratively consolidate it.

### 18.3 Contenu P3 obligatoire (9 sections — présentation)

1. Résumé
2. Ce qui était prévu
3. Ce qui a été réalisé
4. Évaluation du résultat
5. Écarts, réserves et blocages
6. Impact sur le projet
7. Verdict
8. Recommandation / prochaine étape
9. Éléments vérifiés

Presentation ordering **does not** dictate generation dependency.

### 18.4 Provenance conceptuelle

| Section | Sources typiques |
| --- | --- |
| Prévu | EC / objective / expected outputs |
| Réalisé | Attempt + verified effects / Result |
| Évaluation | ClaimEvaluation / Review |
| Écarts | Review / reservations / blockers |
| Verdict | Studio/Product qualification (canonical ContractResultVerdict) |
| Recommendation | post-Evidence Recommendation **from Product Resolution** when present |
| Narrative | Nora enrichment **après** qualification des faits Product |

**Interdit :** Nora narration → recherche a posteriori de faits.
**Interdit :** Product Recommendation générée depuis le récit Synthèse.

### 18.5 CURRENT FACT — Synthesis UI

`SyntheseScreen.tsx` → `VsDemoRoot` / `VsSyntheseScreen` / fixtures vertical-slice. **REPLACE** cette représentation POC. Disposition : **HARVEST** UX honesty · **REJECT** comme SoT.

---

## 19. Synthesis Persistence Decision

### 19.1 MORRIS DECISION — OPTION A ADOPTED

Persister la projection Synthèse dans le **PRODUCT SQLITE EXISTANT** (`oa-product.sqlite` / `SqliteProductStore`).

| Placement | Statut |
| --- | --- |
| Product SQLite existing (`oa-product`) — **physical boundary** | **ADOPTED TARGET** |
| ProductSqliteSession (`nora-session`) | **FORBIDDEN as primary owner** |
| Artifact filesystem as primary owner | **FORBIDDEN** |
| New DB | **FORBIDDEN** |
| SharedKnowledgeStore | **REJECT** |
| Event store | **REJECT** (absent need) |

### 19.2 PHYSICAL PERSISTENCE BOUNDARY ≠ SEMANTIC / EPISTEMIC CLASS

| Axis | Contract |
| --- | --- |
| **PHYSICAL PERSISTENCE BOUNDARY** | existing Product SQLite / `oa-product.sqlite` |
| **SEMANTIC / EPISTEMIC CLASS (Synthesis)** | materialized derived projection · **NON-AUTHORITATIVE** · **NOT Truth C** |

**INVARIANT :**

> CO-LOCATION IN PRODUCT SQLITE
> DOES NOT PROMOTE A DERIVED PROJECTION
> TO PRODUCT TRUTH.

**Storage location ≠ authority class.**

| Horizon | What Product SQLite hosts |
| --- | --- |
| **CURRENT** | Physical host of current governed / authoritative Product persistence (Truth C objects: Project/LPS/Cycle/HD/EC/Attempt/Evidence/RB/Trajectory/CE…). **Synthesis Product-derived persistence = NOT IMPLEMENTED CURRENT.** |
| **TARGET** | Same physical Product SQLite **additionally** hosts explicitly classified rebuildable Synthesis materialized projections. Those projections remain **NON-AUTHORITATIVE** · **NOT Truth C** · rebuildable from governed Product sources · do **not** gain authority from co-location. |

Synthesis implementation target must preserve :
- explicit projection classification ;
- source bindings / provenance ;
- rebuildability ;
- no independent mutation authority ;
- deletion / rebuild without loss of authoritative Product truth.

### 19.3 CURRENT FACT — deux fichiers SQLite

| Fichier | Rôle CURRENT |
| --- | --- |
| `oa-product.sqlite` | Physical host of current governed/authoritative Product persistence (Truth C objects: Project/LPS/Cycle/HD/EC/Attempt/Evidence/RB/Trajectory/CE…) · **≠** Synthesis derived persistence already implemented |
| `nora-session.sqlite` | Session Agents + transcript + Cycle Journal |

`sessionPaths` **interdit** d’utiliser `oa-product.sqlite` comme session. Ce split est **KEEP**.

**TARGET (Option A ADOPTED) :** COMPLETE tables/ports de projection Synthèse **dans** le même Product SQLite physique — **pas** fusion Session↔Truth C · **pas** promotion Synthesis→Truth C par co-location · Synthesis class remains derived / rebuildable / **NOT Truth C**.

### 19.4 Non-sélectionné (OPEN → P5)

Nom exact de table · schéma SQL final · repository TypeScript exact · FTS5 · embeddings · vector DB.

### 19.5 Test architectural fondamental

> IF ALL SYNTHESIS PROJECTIONS ARE DELETED,
> AUTHORITATIVE PRODUCT TRUTH MUST REMAIN RECONSTRUCTIBLE.

---

## 20. Synthesis Search / Currentness / Supersession

### 20.1 Full-content search (héritage P3)

Couvrir au minimum : title · summary · planned · done · evaluation · gaps/reservations/blockers · impact · verdict · recommendation · verified elements · contenu textuel pertinent.

P4 **n’adopte pas** Elasticsearch / vector DB / embedding store. Prefer minimum-sufficient **local Product DB search** en P5. FTS5 = candidat seulement si besoin. Jump/highlight = détail implémentation.

### 20.2 Currentness Synthèse

Ne pas marquer STALE uniquement parce que le Project continue.

| Distinguer | |
| --- | --- |
| **SOURCE CONSISTENCY** | Lineage encore valide |
| **CONTEXT RELEVANCE** | Pertinence pour le présent |

Incohérence réelle si lineage invalidé : Evidence invalidated/superseded · ReviewBundle replaced · ClaimEvaluation corrected · bindings changed · Product Resolution verdict change.

Alors : conserver historique/audit · produire successor/rebuild · **pas** mutation silencieuse du passé.

### 20.3 Identité conceptuelle (non figée)

`synthesisId` · `projectId` · `cycleInstanceId?` · `subject` · `sourceBindings` · `sourceFingerprint` · `content` · `generatedAt` · `generatedBy` · `cognitiveProvenance?` · `status` · `supersedes?`
**OPEN** schéma TypeScript/SQL final.

---

## 21. WP3 — Role / Agent / Surface Projection Architecture

```text
Authoritative Product World
→ Resolution Layer (currentness / effective-authority resolution & enforcement)
→ bounded role-aware projections
```

**REJECT :** SharedKnowledgeStore · UI database · agent semantic database.

---

## 22. Pilot Projection Contract

Minimum-sufficient (ordre conceptuel Pilote) :

1. **Project identity**
2. **Short objective / intention**
3. current LPS / current Cycle
4. Trajectory Terminé / En cours / Proposé
5. Attention courante (reservations / blockers / decisions required)
6. Current Recommendation
7. Execution continuity when relevant
8. Latest relevant Synthesis

P3 exige que le Pilote comprenne : quel Project ? quelle objective/intention ? quel Cycle/état courant ? qu’est-ce qui compte maintenant ?

**Ne pas exposer en UX nominale :** DecisionBasis · authority envelope · CKC internals · Truth C jargon · ReviewBundle raw · semantic fingerprints · model IDs · reasoning efforts · taxonomies machines · internals.

Les distinctions internes restent dans le domain.

---

## 23. Nora Semantic Projection Contract

### 23.1 CURRENT FACT — seed

`studioCognitiveContext.ts` = composer read-only riche : projectTruth · method · activeCycle · work items · trajectoryDecisionSupport · decisions · evidence · review · trajectory · lifecycleRecommendation · reservation blocks · limits.
Invariants : `truthOutranksConversation` · composer ne score pas maturity · ne sélectionne pas trajectory.
`activeCycleCognitiveContext.ts` composé — KEEP/ADAPT.

### 23.2 TARGET — NoraSemanticContext (conceptuel)

Current Project Truth · LPS · Cycle · Trajectory · Recommendations · Reservations/Risks · HumanDecisions · relevant Deliverable Requirements / Artifacts when applicable · Relevant Evidence/Review · Relevant Syntheses · Journal continuity · CKC/method guidance · Product Resolution · provenance/currentness · current task/intent · materiality/risk when deterministic.

**MINIMUM-SUFFICIENT CONTEXT** — pas dump exhaustif permanent.

Disposition seed : **KEEP / ADAPT** → object-native Nora Semantic Context.

---

## 24. Nora Object-native Operations / Forbidden Operations

### 24.1 Nora PEUT (cognitif)

READ · RELATE · CHALLENGE · RECOMMEND · PROPOSE CHANGE · PREPARE · REQUEST DECISION · REQUEST CONFIRMATION · OBSERVE

Exemples : lire HD · relier Evidence↔Recommendation · identifier contradiction · recommander trajectoire · préparer EC candidate · demander matérialisation · observer Execution/Result.

**REQUEST CONFIRMATION — borne :**

Nora may explain / surface / request Confirmation **ONLY** against a prepared/inspectable effect for which **Studio has deterministically resolved** that Confirmation is applicable/required.

Nora does **NOT** autonomously decide « this needs a Confirmation ».

| Role | Confirmation |
| --- | --- |
| Studio | Resolves applicability |
| Nora | Communicates / challenges / prepares |
| Pilote | Confirms |
| Studio | Persists / enforces state |

Confirmation still **≠** HumanDecision.

### 24.2 Nora NE PEUT PAS

ACCEPT HUMAN DECISION · CREATE PILOT JUDGMENT · ACTIVATE CYCLE BY JUDGMENT · PROMOTE PROPOSED TRAJECTORY AS DECIDED · GRANT CONFIRMATION · EXECUTE OUTSIDE AUTHORITY · VERIFY EVIDENCE BY ASSERTION · DECLARE PRODUCT PASS WITHOUT PRODUCT QUALIFICATION · CLOSE CYCLE BY COGNITIVE JUDGMENT · ARCHIVE/ABANDON PROJECT STRUCTURALLY

### 24.3 Pattern object-native

```text
Pilot conversational intent
→ Nora resolves semantic subject
→ Nora reasons on actual Product object/projection
→ Nora proposes semantic change
→ Studio resolves current object
→ currentness check → materiality/authority check
→ governed Product materialization
→ all surfaces re-project same world
```

Pas : text → LLM → duplicate UI text state.

---

## 25. Studio Resolution / Materialization Contract

Studio : **RESOLVE · VALIDATE · MATERIALIZE · ENFORCE**

Currentness · identity · membership · subject binding · versioning · **effective-authority resolution & enforcement** · idempotence · persistence · Product qualification · projection building · guardrails.

Studio peut stocker/enforce une HD — **n’est pas** l’auteur du jugement Pilote.
Studio peut vérifier une claim — l’executor ne devient pas authority source.
Studio resolves/enforces authority conditions — **≠** source of HumanDecision · **≠** source of Pilot Confirmation · **≠** gains authority by persisting a record.

CURRENT seams KEEP/COMPLETE : `resolveProductExecutionContext` · `deriveGovernedExecutionContinuityProjection` · `reconcileGovernedExecution` · `w3bProductTerminalProjection`.

Continuity stages (derived, not new persisted SM) : PRE_EXECUTION · ATTEMPT_ACCEPTED · RUNNING · PRODUCT_MATERIALIZATION_PENDING · POST_EVIDENCE_PENDING · POST_EVIDENCE_COMPLETE · RECOVERY_REQUIRED.

---

## 26. Executor Projection / ExecutionContract Boundary

Executor reçoit contexte **borné par ExecutionContract** :

action · target · scope · inputs · expectedOutputs · requiredCapabilities · constraints · stopConditions · evidenceRequirements · reversibility · relevant contextual material.

EC = contractual **scope / context / capability** boundary consumed inside **effective-authority resolution**.

**ExecutionContract alone ≠ effective authority.**

Cursor/agent **n’a pas** besoin d’un dump Project complet.

Executor **ne décide pas** : Cycle complete · Project replan · Rec→HD · Evidence sufficient · Product PASS · runtime promotion.

**Executor report = CLAIM.**

---

## 27. Surface Projection Matrix

| Surface | Projection source | Technical / currentness rule | Forbidden parallel truth |
| --- | --- | --- | --- |
| **Projects** | Product Project list / currentness | Local Projects search only · no fake global Search | Local Projects store / UI-local inventory SoT |
| **New Project** | Pre-Project intention → CreateProject (Project+LPS) | Continuity rebound to projectId · first Cycle separate | Fake atomic Project+first Cycle · form-as-truth |
| **Conversation** | Transcript + Nora + Product object refs | Real/durable continuity · activity projection · interruption honesty · no CoT | Local `isAccepted=true` truth |
| **Aperçu** | Project/LPS/Cycle/trajectory decided+proposed/attention/Deliverable attention/latest Synthesis | Same Product facts · minimum-sufficient | Cockpit local business model |
| **Exécution** | Canonical continuity projection | No duplicate React business state | Second execution SM in UI |
| **Journal** | Composite Product epistemic tabs | Derived continuity · not aggregate SoT | JournalStore SoT |
| **Historique** | Read projection from Product history objects | Local History search · not transcript dump | HistoryStore / event sourcing default |
| **Synthèses** | Materialized derived from Product Resolution lineage | Full-content local search · rebuildable | Fixture VsDemo as SoT |
| **Auth** | GitHub-only TARGET UX · CURRENT functional GitHub OAuth reuse | Functional REAL capability ≠ P3 visual fidelity · no OAuth internals dump | Alternate auth product truth |
| **Nora Activity** | Observable runtime/provider/tool activity | Pilot-facing START/ACTIVITY/STREAMING/COMPLETE/STOPPED · fallback « Nora travaille… » · no fake % · no CoT | UI state machine as Product authority |
| **Responsive (cross-cutting)** | Same Product semantics across design bands | Projection of same semantics · no second mobile Product model/store | Parallel mobile workflow/SoT |
| **Evidence** | Contextual from Exec/Synthèses | Support surface | Main nav destination |

**Activity mapping note (CURRENT→P3) :** CURRENT `useProductConversation` UI states (`INITIAL`/`READY`/`SENDING`/`ASSISTANT_WORKING`/`SOURCE_LOOKUP`/`ANSWERED`/`ERROR_RECOVERABLE`/`BLOCKED`) are **implementation enums**. They must be **projected** to P3 Pilot-facing states — **not** mechanically equated and **not** elevated to a new authoritative Product state machine.

---

## 27A. Frontend / Visual Projection Technical Boundary

**Purpose :** define HOW P5 can carry P3 faithfully without selecting final implementation details prematurely.

1. **P3 remains visual/interaction authority.**
2. Frontend consumes the **SAME Product projections** as the rest of Studio.
3. Styling / layout / state primitives **never** become Product truth.
4. Existing UI/token/component assets must be classified before construction: KEEP · ADAPT · HARVEST · COMPLETE · REPLACE · FREEZE · RETIRE LATER (§30).
5. Do **NOT** adopt a new design-system stack merely because multiple legacy layers exist.
6. **Target principle :** CONVERGE EXISTING VISUAL ASSETS TOWARD ONE MINIMUM-SUFFICIENT P3-CAPABLE FRONTEND PRESENTATION SYSTEM. (Architectural direction — **≠** framework/design-system implementation choice.)
7. No screen-by-screen CSS architecture.
8. No parallel mobile Product model — responsive = projection of same semantics.
9. No generic abstraction that destroys Figma fidelity.
10. Canonical P3 frames remain implementation reference even where historical Figma status is EXPLORATORY per P3 contract.
11. **No intentional visual deviation.**
12. Runtime screenshot + canonical Figma comparison required for strong visual PASS.
13. **Reduced motion REQUIRED.** Existing `globals.css` `prefers-reduced-motion` = KEEP/HARVEST candidate — **≠** automatic final implementation proof.
14. Accessibility constraints (carrying, not WCAG certification claim): keyboard · focus-visible · labels/errors · contrast verification · no hover-only mobile · touch target contract · motion accessibility.
15. Dynamic-content support must preserve: long Synthesis · expanded Journal exchanges · 9+ execution items · natural scroll · wrapping · truncation · progressive disclosure.
16. Meridian / branding: P3 contract must be supported · do not rename product · do not silently replace branding. CURRENT app tree: Meridian asset not observed as implemented UI — TARGET carry from P3.
17. GitHub Auth: CURRENT functional GitHub OAuth (`lib/auth` · `login-client` · `/api/auth/github-start`) = **KEEP / ADAPT** reuse candidate · P3 visual contract = distinct projection · Auth REAL capability ≠ visual fidelity · do not expose OAuth internals unnecessarily. CURRENT CTA wording (« Se connecter avec GitHub ») ≠ automatic P3 wording fidelity (« Continuer avec GitHub »).
18. Local search: Projects · History · Synthesis full-content · **NO fake global Search**. Local query/read contracts without global search platform.
19. Nora activity: derives from observable real runtime/provider/tool activity · never CoT · never fake percentage · fallback « Nora travaille… » acceptable · STOPPED must correspond to a real interruption capability **or** honestly-qualified state.
20. Streaming interruption: do not invent cancellation semantics. P5 must bind UI STOP to a real cancellable boundary if provided · otherwise qualify limitation honestly.
21. Capture/testability: frontend architecture must support runtime screenshot/visual comparison at P3 target viewports.
22. Exact CSS breakpoints / component hierarchy / token values / framework remain **P5 implementation detail** unless CURRENT reuse classification makes an architectural constraint necessary.

**REJECT absent demonstrated need :** new Tailwind migration · new CSS-in-JS stack · new component library · new design-system service · new responsive framework · third token family as « solution ».

---

## 28. Deep-link Identity Contract

Deep link = **stable identity**, pas état autoritatif dupliqué.

Conceptuel : `/project/:projectId` · `/decision/:decisionId` · `/execution/:executionContractId` · `/synthesis/:synthesisId` · `/journal/:journalEntryId`

On load : stable id → resolve object → Project binding → current/historical → render projection.

No authority in URL. Exact route naming = **OPEN** si conventions router diffèrent (P5).

---

## 29. Recovery / Rehydration Contract

```text
session/history
→ DO NOT TRUST AS CURRENT PRODUCT TRUTH
→ resolve current Product objects
→ rebuild projections
→ rehydrate interaction continuity
→ build fresh Nora Semantic Context
→ continue conversation
```

**PRODUCT TRUTH BEFORE CONVERSATION REPLAY.**
Transcript aide le sens — n’écrase pas le Product state.

### 29.1 Next Nora turn after significant Product effect / Product Resolution

```text
next Nora cognitive turn
→ re-resolve current Product truth
→ re-evaluate relevant projections / currentness
→ recompose NoraSemanticContext
→ then reason
```

A Product Resolution copied into session must **NOT** become durable current truth merely because it was in conversation/session context.

Use cached/derived context **only while** currentness remains established.

---

## 30. WP4 — CURRENT→TARGET Integration Map

### 30.1 Matrice (actifs structurants)

| Asset | CURRENT role | Evidence | TARGET | Disposition | P5 delta | Exit / preuve | Risks |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Product SQLite `oa-product` + `SqliteProductStore` | Physical Product persistence for current governed/authoritative records (Truth C objects) · Synthesis derived persistence **NOT IMPLEMENTED CURRENT** | `db.ts` M1–M8 · paths | Same physical DB + Synthesis as **derived projection** (**class ≠ Truth C**) | **KEEP / COMPLETE** | Synthesis tables/ports | Truth reconstructible w/o syntheses | Don’t merge session · don’t promote Synthesis→Truth C · don’t claim CURRENT Synthesis already stored |
| `productSqliteSession` / `nora-session` | Session + transcript + Journal | NEVER Truth C comments | Session/transcript/journal only | **KEEP** | No Synthesis owner | Collision guards preserved | Expanding into Synthesis = leak |
| `cycleJournalStore` / types | Journal projection | Session DB | Continuity projection | **KEEP / ADAPT** | Composite tabs wiring | Journal ≠ SoT tests | |
| `studioCognitiveContext` | Rich RO composer | F2 | Nora Semantic Context object-native | **KEEP / ADAPT** | Formalize contract | Context minimum-sufficient | |
| `activeCycleCognitiveContext` | Active cycle CKC | F2 | KEEP/ADAPT | **KEEP / ADAPT** | | | |
| CKC cognitive projection | Method guidance | | KEEP | **KEEP** | | Authority NONE | |
| `projectHistory` | Bounded read model | W2 | P3 History surface | **HARVEST / ADAPT** | Enrich projection | No HistoryStore | |
| `resolveProductExecutionContext` | Shared Product Resolution | W2 | KEEP/COMPLETE | **KEEP / COMPLETE** | Synthesis inputs | Not a store | |
| Continuity projection + reconciler | Derived stages + reconcile | W2 | KEEP/COMPLETE | **KEEP / COMPLETE** | UI wording | No second SM | |
| Generic Execution Review Material | FS review payloads | f3 | Execution review only | **KEEP / ADAPT** | Don’t become Product truth | | |
| VerifiedChangeSet / Evidence / RB / CE | Governed pipeline | OA | KEEP | **KEEP** | | | |
| Synthese VsDemo | Fixture UI | synthese/* | Product-derived Synthesis | **REPLACE** | Builder + Product SQLite | Real Synthesis | |
| `cognitiveWorkloadPolicy` | 4 Strategy Classes + envelopes | CWP | KEEP/ADAPT | **KEEP / ADAPT** | Quality floor inputs | UNKNOWN≠LOW | |
| `runNoraCognitiveTurn` | CWP→telemetry→core | F1 | Principal seam for Product-native routing | **KEEP / COMPLETE** | Insert router | REAL R2 | |
| `runNoraAgentsTurn` | Single Runner | F1 | KEEP | **KEEP** | Same path | No second Nora | |
| `reasoningCapability` / `reasoningModelSettings` | Manifest + modelSettings | | KEEP/ADAPT | **KEEP / ADAPT** | Target cohort · mode=standard | No silent coercion | |
| `config.ts` OPENAI_MODEL | Required live model | | Exit nominal Product routing | **RETIRE LATER** (nominal) · TEMP WITH EXIT override | Provenance+telemetry | Exit proof | |
| OPENAI_REASONING_EFFORT | Optional static · F2 provider path | | Exit nominal | **RETIRE LATER** nominal | Align F2 structured calls under SAME Product cognitive routing policy / provenance (wiring = P5) | Dual path risk | |
| `COGNITIVE_STRATEGY_SELECTED` | Telemetry | turn | KEEP + add ROUTING_* | **KEEP / COMPLETE** | New events | No CoT | |
| Turn/Campaign/USD budgets | Safety/FinOps | | KEEP/ADAPT/COMPLETE | **KEEP / COMPLETE** | Cost/task metrics | Budget≠authority | |
| `buildMw0CapabilityManifest` | Eval historical | nora-eval | FREEZE historical | **FREEZE** | New target manifest | Don’t rewrite | |
| Global MR Stage A GPT-5.6 | Eval matrix | | FREEZE/HARVEST | **FREEZE / HARVEST** | Target cohort eval | Immutable history | |
| F2 ProposalStore / decision-subject continuity | Process-local Proposal · durable transcript evolved · stale process-memory disclosure in notice | `proposalStore.ts` · session stores | No false-memory · reuse Product/Epistemic subject integrity · no mandatory new Proposal aggregate without gap | **HARVEST / ADAPT** · TEMP WITH EXIT | Fix stale disclosure · subject integrity | Exit: honest reconstructibility or requalify · no second Proposal truth | Don’t invent Proposal SoT |
| `--sfia-*` tokens (`styles/tokens.css`) | Legacy/general Figma-extracted token family (older generation + some Pre-M6 forest bridges) | `tokens.css` imported by `globals.css` | Harvest/adapt into converged P3-capable layer | **AUDIT / HARVEST / ADAPT** | Converge · do not invent third family | Coherent tokens for implemented P3 slices | Parallel token SoT |
| `--pm6-*` tokens (`product-tokens.css`) | Pre-M6 Option A presentation tokens · explicitly isolated from `--sfia-*` · Penpot/Inter reference | `pre-m6-product-ui/product-tokens.css` | Harvest/adapt/retire-later into same converged layer | **AUDIT / HARVEST / ADAPT / RETIRE LATER** | Convergence path | No dual-token Product UI | Third family / forever dual |
| `globals.css` a11y/motion baseline | focus-visible · prefers-reduced-motion · imports `--sfia-*` | `app/globals.css` | Keep/adapt as baseline carrying | **KEEP / ADAPT** | Align with P3 reduced-motion/a11y | Baseline present + P3 fidelity | Treat as final proof |
| Pre-M6 ProductShell / pages / surfaces | Product shell · Projects · NewProjectIntention · ProjectWorkspace · surfaces | `features/pre-m6-product-ui/**` | Semantic patterns HARVEST/ADAPT · visual/IA toward P3 | **HARVEST / ADAPT** | P3 rail/IA/surfaces | Object-native P3 surfaces | Shell = P3 target |
| `components/ui/**` · `components/shell/**` | Legacy shell/UI primitives (Card/Cta/StatusPill/StudioShell/…) | `components/ui` · `components/shell` | Classify per P3 compatibility | **HARVEST / ADAPT / REPLACE** as fit | Shared primitives if P3-capable | No generic degradation | Premature DS |
| Vertical-slice / VsDemo / synthese fixtures | Demo/fixture presentation | `vertical-slice*` · `features/synthese/*` | Honesty HARVEST · REPLACE as Product Synthesis/UI | **HARVEST / REPLACE** | Product-derived surfaces | No fixture SoT | Fixture permanence |
| GitHub Auth functional | Real GitHub OAuth + allowlist + actor mapping | `lib/auth/**` · `app/login/**` · `/api/auth/**` | Reuse functional boundary · distinct P3 visual projection | **KEEP / ADAPT** (functional) · **REPLACE/ADAPT** (visual) | P3 Auth frame | Functional reuse + visual fidelity separate | Auth REAL = visual PASS |
| Conversation UI state enums | Implementation states INITIAL…BLOCKED | `useProductConversation.ts` | Project to P3 START/ACTIVITY/STREAMING/COMPLETE/STOPPED | **ADAPT** | Honest activity/STOP binding | Observable activity · no CoT | Enum = Product SM |
| Artifact CURRENT paths | Artifact target routing · docs-write artifact evidence/review · completeness/obligation proofs | `artifactTargetRouting.ts` · `f3/*Artifact*` · related W2/F3 | KEEP/ADAPT production/evidence mechanisms | **KEEP / ADAPT** | Bind to Deliverable semantics when applicable | Existence ≠ validation | Artifact = Deliverable |
| Deliverable representation | UI focus helpers / cognitive mentions · **no first-class durable Deliverable aggregate identified** | LifecycleSurface focus helpers · tests/context mentions | TARGET semantic requirement · qualify minimum-sufficient representation in P5 | **COMPLETE (semantic) / GAP** | Prefer reuse Product/Epistemic/Artifact mechanisms | No unnecessary Deliverable store | Invent Deliverable DB |
| DecisionBasis (optional) | Bounded optional types on HD + provenance/currentness | `lib/oa/decision/domain/types.ts` | Reuse when materiality/auditability require · not universal | **KEEP / ADAPT** · no universal mandate | Gap-only COMPLETE | Reconstructibility without mandatory universal basis | DecisionBasisEngine |
| SharedKnowledgeStore | Absent | docs only | REJECT | **REJECT** | | | |
| Parallel router service | Absent | | REJECT | **REJECT** | | | |
| LLM-as-router | Absent | | DEFER/REJECT initial | **REJECT INITIAL** | | | |
| Second Nora / second Project | Absent | | REJECT | **REJECT** | | | |
| FTS5 | Absent | | Candidate only | **OPEN** | If search needs | Don’t default vector DB | |
| Global event sourcing | Absent | | REJECT absent need | **REJECT** | | | |

---

## 31. Asset Classification (rollup)

| Disposition | Exemples |
| --- | --- |
| KEEP | Product SQLite-backed authoritative Product records · Session/Journal · W2 resolution · Runner · CWP classes · GitHub Auth functional mechanics · globals reduced-motion/focus baseline |
| ADAPT | studioCognitiveContext → NoraSemanticContext · reasoning envelopes → eligible configs · History for P3 · conversation UI enums → P3 activity states · Auth visual to P3 |
| COMPLETE | Synthesis Product projection · cognitiveRoutingPolicy · routing telemetry · F2 path alignment · deterministic NO-LLM bypass wiring · Deliverable semantic representation if gap persists · frontend token/primitive convergence |
| HARVEST | VsDemo honesty · old eval evidence · History pattern · `--sfia-*` / `--pm6-*` / pre-M6 semantic patterns · shell/ui primitives if P3-capable |
| FREEZE | GPT-5.6 Stage A · mw0 historical manifest semantics |
| RETIRE LATER | OPENAI_MODEL / OPENAI_REASONING_EFFORT as **nominal** Product selectors · transitional dual-token presentation once converged |
| REPLACE | Synthese fixture as Product Synthesis · non-P3 visual shells where incompatible |
| REJECT | SharedKnowledgeStore · second Nora · router service · Synthesis-in-Session owner · vector DB by default · new DS/framework absent need · universal Validator Engine · universal mandatory DecisionBasis · fake global Search · third token family « solution » |

---

## 32. Persistence Delta

| Concern | CURRENT | TARGET |
| --- | --- | --- |
| Product truth (authoritative) | `oa-product.sqlite` — physical host of current governed/authoritative Product records | KEEP |
| Synthesis derived projection | **NOT IMPLEMENTED CURRENT** (fixture UI only) | COMPLETE in same physical Product SQLite · **class ≠ Truth C** · co-location ≠ Truth C |
| Session/Journal/Transcript | `nora-session.sqlite` | KEEP · not Synthesis owner |
| History | No dedicated store | Keep as read projection |
| Synthesis UI (CURRENT) | Fixture UI (`VsDemo`) | TARGET: Product SQLite materialized derived projection (**≠ Truth C**) |
| Execution review material | Filesystem | KEEP as review material · ≠ Product SoT |

---

## 33. Cognitive Runtime Delta

### 33.1 CURRENT seam

```text
semantic assessment + factual turn context
→ Cognitive Workload Profile
→ Strategy Class
→ dynamic reasoning effort (Agents path)
→ static OPENAI_MODEL
→ same Agents Runner
```

Telemetry : `COGNITIVE_STRATEGY_SELECTED`.

### 33.2 TARGET seam (deterministic bypass + cognition)

```text
Task / requested operation
→ resolve Product context / deterministic constraints

IF deterministic mechanics sufficient:
→ deterministic Studio path
→ NO LLM
→ no cognitive router invocation
→ Product/projection result
→ normal deterministic telemetry/authority semantics as applicable

ELSE cognition materially required:
→ minimum-sufficient Nora Semantic Context
→ Cognitive Workload Assessment
→ Strategy Class
→ Quality Requirements / Floor
→ eligible Model × Reasoning candidates
→ provider capability validation
→ FinOps/latency arbitration among sufficient candidates
→ bounded Cognitive Routing Policy
→ selected model + effort + mode
→ same Nora Agents Runner
→ tool/source use as authorized
→ observations quality/latency/cost

IF cognition insufficient:
→ retrieve relevant context/source if available
→ clarify when actual ambiguity remains
→ challenge / re-evaluate
→ adapt route/config if allowed
→ ONE bounded escalation if warranted
→ otherwise expose uncertainty / NOT PROVEN / abstain
→ fail-closed ONLY on the authoritative/protected EFFECT that cannot honestly proceed
→ NOT global Project STOP by default
```

**INVARIANT :** DETERMINISTIC MECHANICS BYPASS COGNITIVE ROUTING.
Do **NOT** require label `CW0` in the runtime schema. `CW0` = explanatory shorthand only.

**Do NOT create :** CW0 runtime enum mandatory · DeterministicRouter service · CognitiveTask orchestrator platform · new workflow engine.

Router **INSERT INTO** existing path — **ne wrap pas** une plateforme séparée.
Module conceptuel : `cognitiveRoutingPolicy` adjacent à CWP / reasoningCapability / reasoningModelSettings — **OPEN** nom de fichier exact.

### 33.3 Gap CURRENT

F2 `completeStructured` / `OpenAIConversationProvider` peut encore appliquer `OPENAI_REASONING_EFFORT` statique — **second surface**.

**TARGET wording (implementation-neutral) :**

Align F2 structured cognitive calls under the **SAME Product cognitive routing policy / provenance** where applicable.

Objective : **one cognitive selection policy**, not necessarily one function entry point.

P4 does **NOT** decide that every F2 call must literally pass through `runNoraCognitiveTurn`.

Target :
- no silent static `OPENAI_REASONING_EFFORT` competing with Product routing ;
- same capability validation ;
- same routing provenance ;
- same authority separation ;
- same telemetry/accounting semantics where applicable.

Exact wiring = **P5**. Disposition : **ADAPT**.

---

## 34. Provider / Configuration Delta

| Item | Disposition |
| --- | --- |
| Target cohort GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra | **MORRIS DECISION** · EXTERNAL CURRENT INPUT revalidable |
| GPT-5.6 nominal target path | Exit · historical FREEZE |
| OPENAI_MODEL nominal Product selection | RETIRE LATER · TEMP WITH EXIT for dev/test/emergency |
| OPENAI_REASONING_EFFORT nominal | RETIRE LATER · same |
| Current provider capability manifest | ADAPT/BUILD for target cohort + currentness |
| Unsupported model/effort | Fail closed · no silent coercion |
| Account entitlement | NOT PROVEN until REAL |

---

## 35. Evaluation / FinOps Delta

KEEP : turnBudget · campaignBudget · agentsUsdAccounting · nora-eval harness.
ADAPT : campaign budgets / manifests for target cohort.
COMPLETE : cost-per-successful-task metrics · routing observed costs.
FREEZE/HARVEST : Stage A GPT-5.6 cells — **ne pas réécrire**.

PRIMARY METRIC DIRECTION : **COST PER SUCCESSFUL TASK** (pas seulement cost/API call).
Budget ≠ authority. Quality floor avant optimisation.
Target eval harness = **SAME Product cognitive path** — no second eval runtime (§49.1).

**Distinction :** Cognitive FinOps (cost/latency/tokens/escalation) **≠** Product Simplification measurement (PIB heuristic · Net Complexity Reduction · accidental interaction burden).
Do not collapse the two into one score.

---

## 36. WP5 — Nora Cognitive Routing Architecture

### 36.1 MORRIS DECISION — OPTION A ADOPTED

**Strategy-first bounded router** intégré au Nora runtime existant.

| Non-cible | |
| --- | --- |
| Service de routing séparé | REJECT |
| Second Nora / second agent runtime | REJECT |
| LLM-router initial | REJECT INITIAL |
| Nouveau planner | REJECT |
| Deuxième orchestration cognitive | REJECT |
| Fixed Strategy→Model mapping | REJECT as architecture |

---

## 37. Cognitive Workload / Strategy Contract

### 37.1 Signals (KEEP + enhance)

ambiguity · reasoningDepth · sourceBreadth · toolDependency · contradictionRisk · contextSize · verificationNeed · multimodality · latencySensitivity · costBudget · rigorCriticality

**Hard rules CURRENT :** UNKNOWN ≠ LOW · Routine requires sufficient KNOWN-low · tool capability ≠ tool dependency · multimodality from factual workload not availability.

Enhance from Product semantics (verificationNeed ← criticality/materiality/Evidence ; contradictionRisk ← reservations/conflicts ; etc.).

Semantic Nora assessment **MUST NEVER** override authoritative factual signals where factual constraints exist.

### 37.2 Strategy Classes (KEEP)

Routine · Focused · Deep · High-Assurance

**STRATEGY ≠ MODEL.** Strategy définit exigences cognitives — pas un mapping rigide Luna/Sol/Astra.

Enveloppes d’effort CURRENT (illustratives) = **Strategy reasoning-demand envelopes** / **Current policy reasoning envelopes** — **≠** « provider capability envelopes » :

Provider capability validation happens **AFTER** strategy requirements and determines which model×effort combinations are actually eligible.


| Strategy | Effort envelope CURRENT |
| --- | --- |
| Routine | none · low · medium |
| Focused | low · medium · high |
| Deep | medium · high · xhigh |
| High-Assurance | high · xhigh · max |

---

## 38. Strategy-first Bounded Router

**Entry condition :** probabilistic cognition is materially required (§33.2). Otherwise deterministic Studio path — **no router invocation**.

Pipeline when cognition required :

```text
Nora Semantic Context + task context + deterministic runtime constraints
→ CognitiveWorkloadSignals
→ CognitiveStrategyDecision
→ quality requirements / floor
→ eligible model×effort configurations
→ provider capability validation
→ FinOps/latency arbitration among sufficient candidates
→ CognitiveRoutingDecision
→ Nora Agents runtime
```

CognitiveRoutingDecision conceptuel : strategyClass · selectedModel · selectedReasoningEffort · reasoningMode · qualityFloor · toolPolicyRef · sourcePolicyRef · estimatedCostEnvelope · latencyPreference · escalationPolicy · reasonCodes · policyVersion — **OPEN** DTO final.

---

## 39. Target Model Cohort

**MORRIS DECISION / CONSUMED :**

- **GPT-6 Luna**
- **GPT-6.1 Sol**
- **GPT-6 Astra**

GPT-5.6 **sort** du nominal TARGET path.
Preuves historiques GPT-5.6 = **HISTORICAL IMMUTABLE**.
Provider capabilities = **EXTERNAL CURRENT INPUT** — revalidate when claims depend.
Ce document **n’invente pas** pricing/capabilities détaillés non vérifiés.

Eligible envelopes (CANDIDATES ≠ production table) :

| Strategy | Candidate envelope (illustratif) |
| --- | --- |
| Routine | Primarily Luna low-cost configs |
| Focused | Luna broader · Sol if needed |
| Deep | High Luna effort may be evaluated · Sol central · Astra bounded hard cases |
| High-Assurance | Sol high-capability · Astra advanced bounded |

> THESE ARE CANDIDATE ELIGIBILITY ENVELOPES, NOT A PRODUCTION ROUTING TABLE.
> P5/P6 evidence calibrates exact mapping.

---

## 40. Model × Reasoning Independence

**MORRIS DECISION / INVARIANT :**

Model selection **≠** Reasoning effort selection.

Configurations valides conceptuelles : Luna+higher effort · Sol+lower effort · Sol+higher · Astra+medium/high/etc.

Ne pas conflater : Strategy · Model · Effort · SFIA Profile · Project criticality.

---

## 41. Quality Floor

**QUALITY FLOOR** = minimum acceptable cognitive capability for the workload — a **requirements contract**.

**Non-requirement :** Quality Floor is **NOT** necessarily one scalar numeric score.
P4 does **NOT** adopt : `qualityScore` 0–100 · opaque maturity number · black-box single score.

Allowed future representation may be : categorical · rule-based · vector/requirements-based · or another reconstructible bounded policy.

Requirements :
- explainable reason codes ;
- deterministic/factual inputs where available ;
- reconstructible selection ;
- no hidden quality downgrade.

Inputs potentiels : rigorCriticality · verificationNeed · contradictionRisk · ambiguity · reasoningDepth · impact/materiality · challenge requirement · source complexity.

**Selection order :**

1. workload requirements
2. strategy
3. quality floor
4. eliminate insufficient configs
5. among remaining optimize cost/latency
6. select minimum-sufficient

**Hard rule :** BUDGET MUST NOT SILENTLY DOWNGRADE BELOW REQUIRED QUALITY.
Sinon : STOP / limitation / tradeoff explicite.

---

## 42. FinOps / Latency Arbitration

Reuse CURRENT assets — **no new RoutingCostEngine**.

Flow : existing cost estimation → candidate costs → select among cognitively sufficient → runtime → observed accounting.

Metrics cibles : cost/turn · cost/successful task · cost/workload class · by model/effort · escalation cost · latency · tokens · tools · retries · escalation count · outcomes.

---

## 43. Reasoning Mode Policy

**MORRIS DECISION :**

- Nominal P5 target : `reasoning.mode = standard`
- `reasoning.mode = pro` : **evaluation candidate only** until evidence justifies adoption
- Ne pas ouvrir immédiatement une matrice production model × effort × mode

---

## 44. Bounded Escalation

**MORRIS DECISION :** maximum **UNE** escalation cognitive par tâche.

Valide : initial route → execute → explicit insufficiency → one stronger config → result OR honest limitation.
Invalide : Luna→Sol→Astra→… loop.

Escalation peut skip intermédiaires si faits Product le justifient.

Trigger classes conceptuelles : UNRESOLVED_CONTRADICTION · QUALITY_REQUIREMENT_UNMET · REQUIRED_VERIFICATION_UNRESOLVED · CONTEXT_COMPLEXITY_EXCEEDS_ROUTE · TOOL_RESULT_REQUIRES_DEEPER_SYNTHESIS · EVAL_PROVEN_ESCALATION_CASE.

« Model wants smarter model » ≠ preuve d’escalade seule.
Provider failure ≠ cognitive insufficiency.

**Cognitive escalation ≠ authority escalation.** Astra max reste Nora — jamais Pilote/Morris.

### 44.1 Cognitive task / routing correlation identity (P5 requirement)

Il doit exister une identité stable de tâche cognitive / corrélation de routing across :

- model call ;
- tool rounds ;
- retries ;
- escalation.

Conceptuel : `cognitiveTaskId` · `routingCorrelationId` · or equivalent.
Exact identifier/name remains **OPEN**.

**Purpose :** a tool round or internal sub-call must **not** reset the escalation budget and allow accidental multi-escalation.

### 44.2 Anti-oscillation / cross-task reselection

One escalation maximum applies per **stable cognitive task / correlation identity**.

It does **NOT** prohibit selecting a lower/different sufficient configuration for a **NEW subsequent** cognitive task.
De-escalation/reselection across tasks remains policy-driven.
**No autonomous repeated oscillation.**

---

## 45. Tool / Source / Authority Separation

| Concern | Owner |
| --- | --- |
| HOW TO REASON | Cognitive Router |
| WHICH CAPABILITIES REQUIRED | Source Strategy / Tool Policy |
| WHICH ACTIONS ALLOWED | Authority / EC / runtime guardrails |

**Invalid :** Astra ⇒ more tools ⇒ more authority.
Effective authority remains structurally independent of model strength.

---

## 46. Failure Semantics

Séparer explicitement :

| Failure | ≠ |
| --- | --- |
| Provider failure / unavailability | Cognitive task failure auto |
| Budget conflict | Silent downgrade |
| Authority denied | Solvable by stronger model |
| Tool failure | Poor model choice auto |
| Product qualification fail | Provider error |
| Cognitive insufficiency | Global Project STOP by default |
| Missing source | Authority grant by stronger model |

**Cognitive fallback (P2 carried) :** retrieve → clarify → challenge → adapt → bounded escalation → uncertainty/NOT PROVEN/abstain.
Fail-closed **local** to the blocked authoritative/protected effect by default — not global Project STOP.

Do **NOT** generate fluid false certainty.

---

## 47. Telemetry / Observability

KEEP : `COGNITIVE_STRATEGY_SELECTED`.

COMPLETE conceptuel :

**COGNITIVE_ROUTING_SELECTED** — `routingDecisionId` · `cognitiveTaskId` / correlationId · strategyClass · selectedModel · selectedEffort · reasoningMode · qualityFloor · reasonCodes · eligible summary · escalationEligible · cost envelope · budget state · latency preference · provider capability snapshot/version · routing policy version.

**COGNITIVE_ROUTING_OBSERVED** — same correlation ids · initial model/effort/mode · final model/effort/mode · `escalationUsed` · `escalationReason` · actual usage · tokens · latency · tools · retries · estimated/observed cost · `failureClass` where applicable · task outcome linkage.

**DO NOT** expose Chain of Thought / private reasoning.

---

## 48. REAL-FIRST Proof Ladder

**MORRIS DECISION :** REAL-FIRST COGNITIVE DELIVERY — P5 ne ferme pas une slice cognition/routing par Fake/D0 seul lorsque la frontière OpenAI réelle est accessible.

| Step | Contenu |
| --- | --- |
| **D0** | Deterministic policy/invariants · Signals→Strategy→Routing decision · **≠ cognitive proof** |
| **R1** | LIVE provider contract — real calls to target models/configs |
| **R2** | REAL router — real task → assessment → router-selected model/effort → real provider → Nora result · **no manual production pin as principal proof** |
| **R3** | INTEGRATED PRODUCT COGNITIVE PATH — real Project/LPS/Cycle/context/CKC/Journal/Evidence **as applicable to the workload** → Semantic Context → router → real OpenAI → authorized tools → governed Product result · minimum-sufficient semantic context remains invariant |

Fake reste utile pour invariants / substitution d’adapter. Fake ≠ REAL.
DETERMINISTIC PROVEN ≠ READY FOR REAL.

P6 = comparative/global QA · P7 = fresh Project E2E · P8 = promotion/retirement gates.

---

## 49. Historical Eval Harvest / Target Evaluation

HARVEST workloads : W-Routine · W-Clarification · W-Analysis · W-High-Assurance · W-Memory · W-Sources.
Ne pas réutiliser l’ancienne matrice GPT-5.6 comme décision de routing cible.
Target cohort eval : Luna / Sol / Astra.
Historical cells/model IDs : **FREEZE**.

### 49.1 SAME PRODUCT PATH (mandatory)

The target comparative/eval harness must reuse the **SAME Product cognitive path**, not create a second eval runtime.

Target eval path reuses, as applicable :

- same Cognitive Workload policy
- same Cognitive Routing policy
- same Nora runtime
- same provider adapter/runtime
- same Source Strategy
- same Tool Policy
- same authority boundaries
- same telemetry schema
- same accounting semantics

Experimental model/effort pins remain allowed for controlled comparison cells.

But :

> MANUAL MODEL PIN ≠ R2 ROUTER PROOF.

**No :** `EvalRouterRuntime` or separate cognitive implementation.

**Eval dimensions (minimum) :**

quality/task success · grounding · contradiction handling · challenge quality · authority compliance · latency · input/output/reasoning usage where available · tool usage · retries · escalation · estimated/observed cost · cost per successful task.

P6 evaluates TARGET via the same Product path progressively proven in P5.

---

## 50. Debt / Exit Map

| Debt | Owner | Target | Exit proof |
| --- | --- | --- | --- |
| OPENAI_MODEL nominal selection | P5 | Router-selected nominal model | Normal Product path selects model without nominal env dependency |
| OPENAI_REASONING_EFFORT nominal / F2 static path | P5 | Same Product cognitive routing policy / provenance | No silent static override on Product cognitive path |
| GPT-5.6 nominal assumptions in comments/config | P5 | Target cohort naming where current | Historical refs preserved |
| Capability manifest target gap | P5 | Current-target manifest for Luna/Sol/Astra + currentness | Fail-closed unsupported |
| Old eval cohort as routing decision | P6 primarily | Target cohort comparative evidence | Mapping calibrated |
| Synthesis fixture VsDemo | P5 | Product-derived Synthesis in Product SQLite | Rebuildable + searchable semantics |
| History minimal read model | P5 | P3 History surface from Product read projection | No HistoryStore unless gap |
| P3 runtime visual gap | P5/P6 | Screenshots vs canonical Figma | Visual Fidelity Gate |
| Dual LLM surfaces (Agents vs F2 provider) | P5 | Align under Product cognitive policy / provenance | Single policy provenance · not necessarily one function entry |
| F2 Proposal / decision-subject continuity | P5 | Honest subject reconstructibility · no stale transcript disclosure | No second Proposal store without proof |
| **Frontend visual layer divergence** (`--sfia-*` + `--pm6-*` + shells/fixtures) | P5 | One minimum-sufficient P3-capable presentation layer via reuse/convergence | Implemented P3 slices use coherent shared tokens/primitives · legacy/transitional layers classified · no accidental parallel responsive/design architecture |
| **Nora Activity CURRENT→P3 gap** | P5 | Honest observable activity projection · Pilot-facing states · STOP bound to real capability or qualified limitation | No CoT/fake progress · STOPPED honesty |
| **Deliverable representation gap** | P5 | Minimum-sufficient Product representation · prefer reuse Artifact/Epistemic/Product mechanisms | Deliverable ≠ Artifact preserved · no unnecessary aggregate/store · Suggested Deliverable not prematurely durable |
| **Pilot Simplification Proof** | P5/P6 | PIB-informed qualitative comparison + Net Complexity Reduction evidence at integrated scope | No PIBEngine/metrics factory · MATERIAL preserved · ACCIDENTAL removed · admin burden near-zero nominal |
| DecisionBasis universalization risk | P5 | Reuse optional/bounded basis only when needed | No universal mandatory DecisionBasis architecture |
| Universal Validator Engine risk | P5 | Compose domain mechanisms · work-class gap only | No universal Validator Engine |
| `.tmp-sfia-review` historically tracked | Process debt | HORS SCOPE ce cycle | Future process regularization |

Aucune dette « later » sans exit.

---

## 51. P5 Entry Contract

P5 Entry Contract covers **six** dimensions coherently. Satisfying five of six **≠** Product Simplification complete.

> P5 implementation success ≠ P5 Product Simplification success
> unless functionality + experience + semantic integrity + cognition + simplification + required evidence converge at tested scope.

### 51.1 Functional (P2)

P2 FOM integrated · same authority semantics · Deliverable ≠ Artifact · Execution optional production path · Confirmation/HD cardinalities · recovery Product-truth-first · no universal Validator Engine · real Product objects.

### 51.2 Experience (P3)

Implement against P3 Workspace/IA/Figma · no intentional visual deviation · runtime screenshot vs Figma for strong visual PASS · Auth GitHub-only UX · Nora activity honest · reduced-motion · a11y carrying · local searches · no UI-local SoT · no P3 redesign by convenience · frontend convergence path (§27A) not new fixture UI program.

### 51.3 Semantic / Projection (P4)

One Product world · bounded role-aware projections · Synthesis derived in Product SQLite (class ≠ Truth C) · Journal/History/Syntheses contracts · Deliverable/Artifact semantics · DecisionBasis optional/bounded · no SharedKnowledgeStore · no second truth.

### 51.4 Cognitive (P4)

Deterministic NO-LLM bypass · Strategy-first bounded router when cognition required · same Nora · same Agents path · dynamic Strategy/model/reasoning · target cohort · quality floor before FinOps · one escalation max per cognitive task · cognitive fallback retrieve/clarify/challenge/adapt/abstain · local fail-closed · same Product path eval · OPENAI_MODEL/EFFORT TEMP WITH EXIT.

### 51.5 Simplification (P1)

For any P5 slice claiming Product Simplification:

1. identify representative Pilot journey ;
2. compare against relevant CURRENT/baseline interaction burden ;
3. do not increase accidental interaction load without explicit justification ;
4. keep method/runtime administration burden near zero nominally ;
5. preserve MATERIAL interactions ;
6. preserve protection of PROTECTIVE interactions while reducing unnecessary ceremony where possible ;
7. avoid or remove ACCIDENTAL interactions ;
8. demonstrate no new parallel cockpit/workflow ;
9. assess Nora/context burden where relevant ;
10. assess architectural duplication/convergence ;
11. demonstrate Net Complexity Reduction at meaningful integrated scope ;
12. **no metrics factory** · PIB remains heuristic · no numeric PIB thresholds in P4/P5 as architecture.

### 51.6 Proof

D0 → R1 → R2 → R3 progressively · visual fidelity evidence · semantic continuity · no parallel architecture · Cognitive FinOps observations distinct from Simplification proof.
Cannot claim complete from deterministic-only cognitive tests when OpenAI accessible for REAL-required slices.

### 51.7 Architecture anti-parallelism

No second Nora · no SharedKnowledgeStore · no router service · no second Product model · no parallel persistence · no event-sourcing initiative without demonstrated blocker · no new orchestration platform · no fixed Cycle→model mapping · no new design-system stack absent need · no architecture pivot without Morris gate.

### 51.8 Explicit

**P5 AUTHORIZED = NO** jusqu’à GO Morris distinct après requalification.

---

## 52. Recommended P5 Critical-path Convergence

**CORE RULE :**
> COGNITION AND PRODUCT EXPERIENCE CONVERGE EARLY.

**No :** pretty fixture UI program + router laboratory program that only converge at the end.

Trajectoire **convergente** (pas ticket list · pas « finish router then Product UI ») :

1. **Revalidate** target-provider capability boundary.
2. Build **MINIMUM** cognitive routing policy **+ deterministic NO-LLM bypass** · wire into existing Nora runtime path.
3. Build **FIRST object-native Product vertical slice early** using actual **P3-capable frontend convergence path** (not new fixture UI) :
   - REAL Project semantic context ;
   - P3 Conversation ;
   - Nora Semantic Context ;
   - CWP / Strategy when cognition required ;
   - router-selected model/effort when applicable ;
   - real provider call when authorized ;
   - governed Product object/projection ;
   - same object visible through relevant P3 surface(s).
4. Prove **R1 + R2 THROUGH THAT SAME PATH**, not as isolated router demo.
5. Inspect **Pilot interaction burden / accidental complexity** for that journey (PIB heuristic) — slice must not worsen ACCIDENTAL load vs baseline.
6. Expand object-native projections — Aperçu · Exécution · Journal · Historique · Synthèses · Auth visual · Activity — prioritised by critical-path value and reuse.
7. Exercise **Deliverable / Artifact** semantics when relevant (existence ≠ validation ≠ Exit Proof).
8. Prove **R3** integrated representative Product path.
9. Continue runtime/Figma visual comparison for implemented surfaces.
10. **P6** comparative/global QA including **Net Complexity Reduction**.

End-to-end > isolated subsystem completeness.

### 52.1 First REAL Product Integration (anti-parallel)

Representative journey cible :

```text
REAL Project → P3 Conversation → real Project semantic context
→ (deterministic path OR Nora Semantic Context → CWP → Strategy → Product router)
→ real OpenAI when cognition required/authorized
→ Nora governed cognitive outcome / deterministic Product result
→ Studio materializes/updates real Product object when applicable
→ same object in Conversation / Aperçu / Journal / …
→ Evidence / Result / Deliverable·Artifact / Synthesis as applicable
→ PIB/accidental-burden check for the journey
```

---

## 53. P4 Exit Contract

**P4 EXIT PROOF = SATISFIED.** **P4 CLOSED BY MORRIS = YES.**

**P4 CLOSED ≠ P5 AUTHORIZED ≠ runtime implemented ≠ READY FOR REAL.**

| Exit element | Status |
| --- | --- |
| P4 architectural coherence | **SATISFIED** |
| P4 P1/P2/P3 inheritance | **SATISFIED** |
| P4 WP1–WP5 review | **SATISFIED** (PASS) |
| C1–C9 / MC1–MC4 / A–E | **SATISFIED** (PASS) |
| P4 GLOBAL MORRIS VALIDATION | **SATISFIED** (2026-10-05) |
| P4 Git Integration (commit/push/PR) | **SATISFIED** · PR **#552** |
| P4 document integrated on main | **SATISFIED** via PR **#552** / merge `d0b4836046911731605883364d9cc3bef4ac3e7f` |
| Roadmap truth-sync architecture package on main | **SATISFIED** via same merge |
| P4 post-merge verification | **SATISFIED** via CI **#672** / `37248128868` SUCCESS |
| P4 Required Gate | **SATISFIED** (SUCCESS) |
| Blocking reservation preventing documentary closure | **NONE** |
| P4 CLOSED BY MORRIS | **YES** (GO consumed) |
| P4 closure patch integrated on main | **YES** (PR **#553** / merge `17434de03585eb30d13d59d7ba5c249563f0b33c`) |
| P4 FINAL REPOSITORY VERIFICATION | **PASS** (CI **#674** / `37250512824` SUCCESS · Required Gate SUCCESS) |
| P4 final repository truth-sync materialization | **LOCAL CANDIDATE** this pass |
| P4 final truth-sync patch integrated on main | **NO** |
| P5 REQUALIFIED BY CHATGPT | **YES** |
| P5 authorization | **NO** |

**Exit path (gates consommés) :**

1. Global Morris validation — **DONE**
2. Documentary materialization + Roadmap truth-sync candidate — **DONE**
3. ChatGPT review of materialization / truth-sync — **PASS**
4. Morris Git integration authorization (commit + push + PR) — **CONSUMED**
5. PR review / ChatGPT PR assessment — **PASS**
6. Morris merge gate — **CONSUMED** · PR **#552** MERGED
7. Post-merge verification / repository truth — **SATISFIED** (CI **#672**)
8. P4 closure qualification — **SATISFIED**
9. Morris closure decision — **CONSUMED**
10. Closure patch Git integration — **CONSUMED** · PR **#553** MERGED · CI **#674** SUCCESS
11. Final repository truth-sync materialization — **THIS PASS** (local candidate)
12. Final truth-sync patch Git integration — **NOT AUTHORIZED THIS RUN** (distinct future Morris gate)
13. P5 REQUALIFIED BY CHATGPT — **YES** (qualification/recommendation)
14. P5 only under **DISTINCT** Morris GO — **NOT CONSUMED**

**Do NOT skip from P4 CLOSED to P5 AUTHORIZED.**

---

## 54. Open Items / Non-blocking Reserves

| Item | Classe |
| --- | --- |
| Exact Synthesis SQL schema / table name / repository ports | OPEN → P5 |
| Exact full-content search implementation / FTS5 need | OPEN → P5 |
| Exact deep-link technical routes | OPEN → P5 |
| Exact production model×effort table | OPEN → P5/P6 evidence |
| Exact per-workload quality thresholds / escalation thresholds | OPEN |
| reasoning.mode=pro value | OPEN eval |
| Current provider pricing/capabilities at implementation date | EXTERNAL CURRENT INPUT |
| Final CSS breakpoints/tokens (P3 reserves) | OPEN → P5/P6 |
| Exact frontend token convergence implementation / component hierarchy / shared primitive decomposition | OPEN → P5 |
| Exact motion implementation/timings · activity event mapping · streaming cancellation mechanics | OPEN → P5 |
| Exact local Projects/History search mechanism · GitHub Auth visual implementation | OPEN → P5 |
| Exact Deliverable technical representation if CURRENT gap persists | OPEN → P5 · NEW STORE NOT ADOPTED |
| Exact work-class validation mechanisms where domain-specific | OPEN · compose first |
| DecisionBasis representation only if demonstrated need | OPEN · no universal mandate |
| Precise P5 slice decomposition | OPEN after P4 closure · before any P5 start |
| REAL/account entitlement | NOT PROVEN |
| Production router implementation | **NOT IMPLEMENTED** → P5+ |
| R1/R2/R3 REAL proof / GPT-6 routing REAL | **NOT PROVEN** → P5+ when authorized |
| Synthesis Product-derived persistence | **NOT IMPLEMENTED** → P5 |
| P3 runtime/Figma fidelity | **NOT PROVEN** → P5/P6 |
| Net Complexity Reduction / PIB improvement | **NOT PROVEN** → P5/P6 |
| Roadmap closure truth-sync patch | **INTEGRATED ON MAIN** via PR **#553** |
| Roadmap / P4 final repository truth-sync patch | **LOCAL CANDIDATE** this pass · integration on main = DISTINCT Morris Git gate |

**Morris Global Validation + Git Integration + Merge + Closure + Closure-patch merge consumed.** ChatGPT P5 requalification = **COMPLETED**. Next structural Morris gate = **P5 AUTHORIZATION** (not consumed). Architecture substance unchanged.

---

## 55. Morris Decisions Consumed During P4

| Décision | Conséquence | N’autorise PAS | Implication P5 |
| --- | --- | --- | --- |
| **Morris GO P4** — AUTHORIZED/STARTED | Analyse/architecture P4 | P5 · Delivery · REAL · runtime v3 | Requalification + GO P5 distinct |
| **P4 framing** — Semantic + Projection + Cognitive / Technical Delta | Scope WP1–WP5 | Redesign P3 · greenfield | Entry contract |
| **Five WP coherent** | Substance P4 | Closure auto | Documentary consolidation |
| **Target cohort** GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra · GPT-5.6 exits nominal | Router eligibility | Rewrite historical GPT-5.6 | Manifest + REAL proofs |
| **Synthesis architecture** — materialized derived projection | Rebuildable searchable | SoT status | Builder + Product SQLite |
| **Synthesis persistence Option A** — existing Product SQLite | Physical placement in Product SQLite · **class ≠ Truth C** | Session owner · new DB · Artifact primary · KnowledgeStore · Truth-C-by-colocation | Schema/ports OPEN |
| **WP3 projection architecture** — one Product world, bounded projections | No SharedKnowledgeStore | Second agent world | Object-native UI |
| **Nora routing Option A** — Strategy-first bounded router in existing runtime | Insert into path | Router service · second Nora · LLM-router initial | cognitiveRoutingPolicy |
| **Model ≠ reasoning effort** | Independent selection | Fixed Strategy→Model | Config pairs |
| **Quality floor before FinOps** | No silent downgrade | Cost-only routing | Thresholds OPEN |
| **Max one cognitive escalation** | Bounded | Multi-escalation loops | Trigger classes OPEN |
| **REAL-FIRST begins P5** | Proof ladder | Fake-only close when OpenAI accessible | D0/R1/R2/R3 |
| **reasoning.mode nominal=standard** · pro=eval candidate | Limit matrix | Full mode matrix now | Eval gate for pro |
| **OPENAI_MODEL/EFFORT exit nominal** | TEMP WITH EXIT overrides | Immediate env deletion | Exit proof |
| **Full-content search semantics** · no vector DB default | Support P3 search | Elastic/vector adoption | Local search first |
| **No SharedKnowledgeStore / no global ES / no second Project / no parallel architecture** | KEEP backbone | Parallel rebuild | Integration map |
| **P4 GLOBAL VALIDATED BY MORRIS** (2026-10-05 Europe/Paris) | Validates WP1–WP5 + P4 decisions + P5 Entry Contract as target entry | Project Git integration auto · P5 · REAL · runtime v3 | Distinct Git integration then merge/closure then distinct GO P5 |
| **P4 GIT INTEGRATION AUTHORIZATION** (commit/push/PR) | Project commit + source branch push + open PR authorized | Merge · main push · branch delete · P4 closure · P5 · REAL · runtime v3 | DISTINCT Morris merge gate after PR review |
| **P4 MERGE AUTHORIZATION** (PR **#552**) | Merge of validated P4 package onto main | Branch delete · P4 closure auto · P5 · REAL · runtime v3 | Post-merge CI + distinct closure gate |
| **P4 POST-MERGE VERIFICATION & CLOSURE** (2026-10-05) | Documentary/lifecycle P4 CLOSED BY MORRIS · Roadmap living tip truth-sync LOCAL CANDIDATE | P5 authorization · P5 start · REAL · runtime v3 · closure patch auto-integration | Distinct Morris GO for closure patch commit/push/PR · then DISTINCT merge · then P5 requalification |
| **P4 CLOSURE-PATCH GIT INTEGRATION / MERGE** (PR **#553**) | Closure status + Roadmap living tip on main | P5 authorization · REAL · runtime v3 | Post-merge CI **#674** SUCCESS · then final repository truth-sync if needed |
| **P4 FINAL REPOSITORY TRUTH-SYNC** (2026-10-05) | Removes stale living CURRENT claims · records P5 REQUALIFIED BY CHATGPT | Project commit/push/PR auto · P5 authorization · P5 start · REAL · runtime v3 | Distinct Morris GO for truth-sync patch commit/push/PR · then DISTINCT merge · then CURRENT Morris gate = P5 AUTHORIZATION |

**Basis of Global Validation :** ChatGPT Final Targeted Coherence Verification = PASS · C1–C9 PASS · MC1–MC4 PASS · A–E PASS · WP1–WP5 PASS · P1/P2/P3 inheritance PASS · architecture parallelism PASS · P5 Entry Contract PASS.

**Basis of Closure :** PR **#552** MERGED · merge `d0b48360…` · post-merge CI **#672** / `37248128868` SUCCESS · Required Gate SUCCESS · Exit Contract SATISFIED · Morris Closure GO YES.

Pas d’IDs `D-P4-*` inventés.

---

## 56. Claims / Anti-claims Matrix

| Claim | Status |
| --- | --- |
| P4 VALIDATED DOCUMENTARY CANDIDATE | **YES** (this file) |
| P4 TARGETED CORRECTION PASS 01 COMPLETE / REVIEWED | **YES** (C1–C9 PASS) |
| P4 MICRO-CORRECTION PASS 02 COMPLETE | **YES** (MC1–MC4 PASS) |
| P4 AUTONOMOUS REVIEW CORRECTION PASS 03 COMPLETE | **YES** (A–E PASS) |
| ChatGPT Final Targeted Coherence Verification | **PASS** |
| P4 GLOBAL VALIDATED BY MORRIS | **YES** (2026-10-05 Europe/Paris) |
| P4 VALIDATION MATERIALIZATION LOCAL | **YES** (historical) |
| Roadmap truth-sync LOCAL CANDIDATE (pre-merge) | **YES** (historical · now SUPERSEDED as tip) |
| P4 GIT INTEGRATION AUTHORIZED (commit/push/PR) | **YES** (consumed) |
| P4 GIT INTEGRATION COMPLETE | **YES** (PR **#552**) |
| P4 MERGE AUTHORIZED / CONSUMED | **YES** (historical merge gate · consumed) |
| P4 INTEGRATED ON MAIN | **YES** (PR **#552** / `d0b48360…`) |
| Roadmap architecture truth-sync INTEGRATED ON MAIN | **YES** (via PR **#552**) |
| P4 POST-MERGE VERIFIED | **YES** (CI **#672**) |
| P4 CLOSED BY MORRIS | **YES** |
| P4 closure materialization LOCAL CANDIDATE | **YES** (historical · SUPERSEDED as tip) |
| P4 closure patch INTEGRATED ON MAIN | **YES** (PR **#553** / `17434de0…`) |
| P4 FINAL REPOSITORY VERIFICATION | **PASS** (CI **#674**) |
| P4 final repository truth-sync LOCAL CANDIDATE | **YES** (this pass) |
| P5 REQUALIFIED BY CHATGPT | **YES** |
| P5 AUTHORIZED | **NO** |
| TARGET routing architecture validated in P4 | **YES** |
| Production router IMPLEMENTED / PROVEN | **NO** |
| GPT-6 REAL routing proven | **NO** |
| Synthesis Product implemented | **NO** |
| Deliverable Product representation implemented | **NO** (gap qualified) |
| frontend P3 runtime fidelity PROVEN | **NO** |
| Auth P3 visual fidelity PROVEN | **NO** |
| Nora Activity runtime P3 parity PROVEN | **NO** |
| Net Complexity Reduction PROVEN | **NO** |
| Pilot Interaction Budget improvement PROVEN | **NO** |
| runtime v3 ADOPTED | **NO** |
| READY FOR REAL | **NO** |
| Cognitive Completion PROVEN | **NO** |
| Pixel-perfect / Figma-runtime proven | **NO** |
| Roadmap truth-sync LOCAL | **YES** · INTEGRATED = **NO** |
| Architecture parallelism introduced | **NO** (REJECT list explicit) |
| New design-system stack selected | **NO** |
| Universal Validator Engine / mandatory DecisionBasis | **NO** |

---

## 57. References / Source Map

| Source | Role |
| --- | --- |
| `sfia-studio-convergence-build-doctrine.md` | R4 dispositions · R22 OpenAI-native-first |
| `sfia-studio-convergence-roadmap.md` | Living tip — P4 CLOSED + final repository verified · P5 REQUALIFIED · truth-sync LOCAL CANDIDATE this pass · historical rows preserved |
| `product-completion/01-…cadrage.md` | **Product Completion C1** |
| `product-simplification/01-…cadrage.md` | **Product Simplification P1** |
| `product-simplification/02-…functional-operating-model.md` | P2 · P2-D-01…04 |
| `product-simplification/03-…workspace-interaction-architecture.md` | P3 · fidelity · P3→P4 input |
| `sfia-v3-framing/30`–`37` | Doctrine destination |
| `nora-cognitive-completion/08-…trajectory.md` | OpenAI-native-first · historical GPT-5.6 |
| `prompts/templates/sfia-cycle-execution-template.md` | Process v2.6 |
| `method/.../sfia-cycle-routing-guide.md` + operating model + guardrails | Process |
| `method/.../02-fifteen-cycles-synthetic-map.md` | Cycle 15 guidance · CKC detailed ABSENT |
| Product SQLite / Session / Journal / W2 / F2 / CWP / Runner / synthese / eval paths | CURRENT FACT audit |

### 57.1 Architecture Parallelism Check

| Question | Answer |
| --- | --- |
| SharedKnowledgeStore? | **NO** |
| Second Product DB? | **NO** |
| Global event sourcing? | **NO** demonstrated need |
| Second Nora? | **NO** |
| Routing service? | **NO** |
| LLM router initial? | **NO** |
| Another Project aggregate? | **NO** |
| New execution orchestration? | **NO** |
| Synthesis in ProductSqliteSession? | **NO** |
| Artifact as Synthesis owner? | **NO** |
| Vector DB merely for full-content search? | **NO** |
| New design-system / CSS-in-JS / Tailwind migration absent need? | **NO** |
| Universal Validator Engine? | **NO** |
| Universal mandatory DecisionBasis? | **NO** |
| Fake global Search platform? | **NO** |
| CW0 mandatory runtime taxonomy? | **NO** |

### 57.2 R22 Capability Fit Check

| Primitive | Disposition |
| --- | --- |
| Agents / Responses runtime | USE / KEEP |
| Reasoning effort | USE / ADAPT |
| Model selection | COMPLETE with SFIA bounded Product routing policy |
| Tool use | USE / ADAPT + SFIA authority |
| Hosted source capabilities | USE / ADAPT under Source Strategy + authority |
| Provider usage observations | USE / ADAPT FinOps |
| Session/memory primitives | Within SFIA truth boundaries · Session ≠ Truth C |
| Provider-native routing service | Not assumed / not required |
| Internal LLM router | REJECT initial target |
| SFIA delta to BUILD | Workload→quality · strategy-first router · Product semantic inputs · currentness · quality floor · FinOps arbitration · authority separation · bounded escalation · telemetry/eval · object-native integration |

### 57.3 Fake / Real (ce cycle)

Applicable execution : **N/A**. Documentary / repo-informed only.
Future P5 : D0/R1/R2/R3. Claims REAL/READY FOR REAL **interdits** ici.

---

*Fin du document P4 — VALIDATED DOCUMENTARY CANDIDATE — P4 GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS = YES — P4 CLOSURE PATCH INTEGRATED ON MAIN = YES (PR #553 / 17434de0…) — P4 FINAL REPOSITORY VERIFICATION = PASS (CI #674 / 37250512824) — P5 REQUALIFIED BY CHATGPT = YES — ≠ P5 AUTHORIZED — ≠ P5 STARTED — ≠ runtime v3 ADOPTED — ≠ READY FOR REAL — ≠ production router implemented — final truth-sync patch LOCAL CANDIDATE — next = ChatGPT truth-sync review → DISTINCT Morris truth-sync Git integration gate → then CURRENT Morris gate = P5 AUTHORIZATION.*

======================================================================
FINAL VERDICT
======================================================================

READY FOR CHATGPT P4 FINAL TRUTH-SYNC REVIEW —
P5 REQUALIFIED / P5 AUTHORIZATION NOT CONSUMED

Explicitly NOT:
- P5 AUTHORIZED
- P5 STARTED
- READY FOR REAL
- runtime v3 ADOPTED
- P4 FINAL TRUTH-SYNC PATCH INTEGRATED ON MAIN

END OF FULL REVIEW PACK
