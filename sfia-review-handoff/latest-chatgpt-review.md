# Review Pack FULL — M5 ARCHITECTURE DECISION → CONVERGENCE ROADMAP SYNC — DOCUMENTATION ONLY

| Champ | Valeur |
| --- | --- |
| Timestamp | 2026-08-15 06:23:35 CEST (+0200) |
| GO architecture | GO MORRIS — ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY |
| GO sync | GO MORRIS — SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY |
| Repo | mcleland147/sfia-workspace |
| Cycle | Roadmap projet — M5 architecture decision sync |
| Profil / Typologie | Standard / DOC |
| CKC | absent — fallback synthetic map + v2.5 cycles + routing/template (cognitive only) |
| Branch | `docs/sfia-studio-m5-architecture-roadmap-sync` |
| HEAD / base | `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` |
| origin/main | `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` |
| Incoming handoff | `63f41e3f328868286c14312a58a7b79f850383c0` |
| Project commit/push/PR/merge | NOT PERFORMED |
| Cursor REAL / M5 Delivery / schema | 0 |

## Convergence Pre-check

| Item | État |
| --- | --- |
| Build Doctrine | READ / KEEP — not modified |
| Roadmap | ADAPT factuel — this cycle |
| framing 30/32/33/35/37 | READ ONLY |
| Capacité M5 | V3-F14 (+ F13/F02/F04/F05/F09/F10/F15) |
| M4 | CLOSED |
| M5 Entry Qualification | COMPLETE |
| M5 architecture | ADOPTED BY MORRIS / NOT IMPLEMENTED |
| M5 Delivery | NOT AUTHORIZED |
| Next immediate gate | M5 DELIVERY AUTHORIZATION |
| Next capability after M5 | M6 — NOT STARTED / NOT AUTHORIZED |
| runtime v3 | NON ADOPTED |
| Timeout reserve | UNCHANGED |

## Stale-claim matrix

| Claim Roadmap (pré-sync) | Nouvelle vérité | Preuve | Section |
| --- | --- | --- | --- |
| Snapshot `2d1361ee…` | Snapshot `5132f1bc…` | origin/main / PR #348 | metadata |
| M5 = PARTIAL / NOT AUTHORIZED (only) | ARCHITECTURE TRAJECTORY ADOPTED + DELIVERY NOT AUTHORIZED | Morris ADOPT GO + handoff `63f41e3…` | M5 / B6 / B10 |
| M5 persistence non sélectionnée | M5-A OPTION B ADOPTED / NOT IMPLEMENTED | Morris M5-A | B3/B4/B6/M5 |
| Attempt/Evidence/RB Memory only (no target) | CURRENT Memory + TARGET Product SQLite selected | handoff + Morris | B3/B4 |
| ReviewBundle→LPS MISSING only | MISSING IN RUNTIME + W1 ADOPTED target | Morris M5-B | B5/M5 |
| journal TEMPORARY (no M5-C) | KEEP TEMPORARY WITH EXIT + M5-C ADOPTED disposition | Morris M5-C | B3/B4/B6 |
| next gate = generic M5 GO | NEXT IMMEDIATE = M5 DELIVERY AUTHORIZATION | Morris sync GO | B6/B10 |
| M6 NOT STARTED | NOT STARTED / NOT AUTHORIZED (unchanged auth) | Roadmap | M6 |
| CURSOR_REAL_TIMEOUT_POLICY | UNCHANGED OPEN / NON-BLOCKING | B10a | B10a |

## Decisions transcribed

### M5-A — OPTION B ADOPTED
ExecutionAttempt + Evidence + ReviewBundle durable together in existing OA Product SQLite behind existing ports/domain/use cases.
**≠ implemented.**

### M5-B — W1 ADOPTED
Automatic factual LPS link update for Evidence/ReviewBundle refs; Recommendation remains Recommendation.
No automatic HumanDecision / gateConsumed / executionAuthority / structural trajectory validation.
**≠ implemented.**

### M5-C — KEEP TEMPORARY WITH EXIT
Journal stays for first M5 Delivery; retirement needs durable Attempt + safety equivalence + dedicated Morris GO.

## Current state vs selected target

| Concern | CURRENT runtime | SELECTED target |
| --- | --- | --- |
| ExecutionAttempt | Memory / process-local | Product SQLite (M5-A) |
| Evidence | Memory / process-local | Product SQLite (M5-A) |
| ReviewBundle | Memory / process-local | Product SQLite (M5-A) |
| LPS | Product SQLite durable | + W1 factual evidence/RB append |
| RecommendNextGate | Recommendation-only | KEEP Recommendation-only |
| Launch journal | isolated technical SQLite | KEEP TEMPORARY WITH EXIT (M5-C) |

## Sections modified

metadata · anti-claims · B3 · B4 · B5 · B6 (M5 Architecture Decisions) · M4 Next · M5 · M6 · B9 · B10 · B10a note · références

## Validations

### git diff --check

```
(clean)
```

### git status --short

```
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
?? .tmp-sfia-review/
```

### git diff --stat

```
 .../convergence/sfia-studio-convergence-roadmap.md | 164 ++++++++++++++-------
 1 file changed, 110 insertions(+), 54 deletions(-)
```

Scope tracked = EXACTEMENT 1 fichier Roadmap · staged empty · `.tmp-sfia-review/**` untracked only.

## DIFF COMPLET — `sfia-studio-convergence-roadmap.md`

````diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 7401ed8..773dd6d 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -6,13 +6,13 @@
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
 | **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
 | **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
-| **Snapshot Git** | origin/main @ `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` |
+| **Snapshot Git** | origin/main @ `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` |
 | **Timestamp création** | 2026-08-12 21:53:10 CEST (+0200) *(historique)* |
-| **Timestamp maintenance** | 2026-08-14 Europe/Paris — M4 EXIT PROOF ACCEPTED BY MORRIS — M4 CLOSED — NEXT = M5 (NOT AUTHORIZED) — CURSOR_REAL_TIMEOUT_POLICY OPEN / NON-BLOCKING |
+| **Timestamp maintenance** | 2026-08-15 06:23 CEST (+0200) — M5 ENTRY QUALIFICATION COMPLETE — M5 ARCHITECTURE TRAJECTORY ADOPTED BY MORRIS — M5 DELIVERY NOT AUTHORIZED — NO REAL — NEXT IMMEDIATE GATE = M5 DELIVERY AUTHORIZATION — CURSOR_REAL_TIMEOUT_POLICY OPEN / NON-BLOCKING |
 | **Validation Morris** | 2026-08-13 02:05 +0200 (Europe/Paris) — Build Doctrine + Convergence Roadmap officiellement validées comme gouvernance de construction SFIA Studio |
-| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` · **M4 Architecture docs :** PR #343 / merge `e974b7306f7400249c31399fd2890d5817833dbf` · **M4 Delivery :** PR #344 / head `f7270b21ccdbcf1cd543879e7c4120d87b874479` / merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI SFIA Studio **#172** SUCCESS (same head `f7270b21` after Morris-authorized rerun ; initial T7-C08 Class C / M4 causality not established — diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` ; no code change between failure and success) · **M4 post-Delivery Roadmap :** PR #345 / merge `3575c8863d8a13b610dbfde96a33426a620b2c56` · **M4 pre-reproof bounding :** PR #346 / head `8900cd06be195b2dd9fa154a7153608fdde6f9a3` / merge `fc7e20aaeb5153b4d73c1809f865e361f00e1b34` · CI SFIA Studio **#176** SUCCESS · ZERO REAL in bounding integration · **M4 post-pre-reproof Roadmap :** PR #347 / merge `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` · CI SFIA Studio **#178** SUCCESS · **M4 GOVERNED REAL COMPLETION PROOF** handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** |
-| **Sources** | Git `main` @ `2d1361ee…` · PR #337/#339/#340/#341/#342/#343/#344/#345/#346/#347 · CI #158/#162/#166/#172/#176/#178 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · M4 CI diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` · FIRST REAL handoff `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` · timeout diagnosis handoff `797daeccfa2ec445a1ecaf10f042de635cb1fe21` · pre-reproof bounding handoffs `3c56cb29367268231c1db26b4de7af5cfe0ef499` / `9ffce8cc4a78f15af322d4fb4aab8bf63896ff6c` · final M4 governed REAL completion handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · GO Morris **M4 Delivery** / **MERGE PR #344** · GO Morris **FIRST M4 CURSOR REAL** · GO Morris **DIAGNOSE TIMEOUT** · GO Morris **PRE-REPROOF BOUNDING** / **MERGE PR #346** · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · M4 Product path on main `projects/sfia-studio/app/**` |
-| **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 exit proof **SATISFIED** · M4 exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** · M4 CLOSED **≠** M5 AUTHORIZED · M4 CLOSED **≠** runtime v3 ADOPTED · one bounded successful REAL completion **≠** global Cursor REAL safety for arbitrary capabilities/tasks · strict runtime read-only proof applies to the **demonstrated M4 bounded path**, not arbitrary future Cursor tasks · timeout 60000 **proven sufficient for demonstrated M4 bounded RO path** **≠** universal Cursor REAL timeout policy · FIRST REAL historical timeout **≠** timeout proven defective · `CURSOR_REAL_TIMEOUT_POLICY` OPEN / NON-BLOCKING **≠** M4 reopened · technical launch journal **≠** Product Store · Critical Ack/Auth.js future IAM **≠** required retroactively for M4 first low-risk RO path · v3 global baseline **NOT PROMOTED** · ≠ full OA durable |
+| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` · **M4 Architecture docs :** PR #343 / merge `e974b7306f7400249c31399fd2890d5817833dbf` · **M4 Delivery :** PR #344 / head `f7270b21ccdbcf1cd543879e7c4120d87b874479` / merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI SFIA Studio **#172** SUCCESS (same head `f7270b21` after Morris-authorized rerun ; initial T7-C08 Class C / M4 causality not established — diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` ; no code change between failure and success) · **M4 post-Delivery Roadmap :** PR #345 / merge `3575c8863d8a13b610dbfde96a33426a620b2c56` · **M4 pre-reproof bounding :** PR #346 / head `8900cd06be195b2dd9fa154a7153608fdde6f9a3` / merge `fc7e20aaeb5153b4d73c1809f865e361f00e1b34` · CI SFIA Studio **#176** SUCCESS · ZERO REAL in bounding integration · **M4 post-pre-reproof Roadmap :** PR #347 / merge `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` · CI SFIA Studio **#178** SUCCESS · **M4 GOVERNED REAL COMPLETION PROOF** handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · **M4 closure Roadmap :** PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · **M5 Entry Qualification** handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** |
+| **Sources** | Git `main` @ `2d1361ee…` · PR #337/#339/#340/#341/#342/#343/#344/#345/#346/#347 · CI #158/#162/#166/#172/#176/#178 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · M4 CI diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` · FIRST REAL handoff `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` · timeout diagnosis handoff `797daeccfa2ec445a1ecaf10f042de635cb1fe21` · pre-reproof bounding handoffs `3c56cb29367268231c1db26b4de7af5cfe0ef499` / `9ffce8cc4a78f15af322d4fb4aab8bf63896ff6c` · final M4 governed REAL completion handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · GO Morris **M4 Delivery** / **MERGE PR #344** · GO Morris **FIRST M4 CURSOR REAL** · GO Morris **DIAGNOSE TIMEOUT** · GO Morris **PRE-REPROOF BOUNDING** / **MERGE PR #346** · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · M5 Entry Qualification handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · M4 Product path on main `projects/sfia-studio/app/**` |
+| **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 exit proof **SATISFIED** · M4 exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** · M5 Entry Qualification **COMPLETE** · M5 architecture trajectory **ADOPTED BY MORRIS** · M5 architecture ADOPTED **≠** M5 Delivery authorized · M5 architecture ADOPTED **≠** M5 implemented · M5-A Product SQLite target selected **≠** Attempt/Evidence/ReviewBundle durable today · M5-B W1 factual write-back authority **≠** Recommendation becomes Decision · Recommendation **≠** HumanDecision · Recommendation **≠** gate consumed · LPS factual evidence link **≠** structural trajectory validation · M5-C KEEP TEMPORARY WITH EXIT **≠** technical journal retired · durable Attempt future **≠** journal automatically obsolete · M5 Entry Qualification COMPLETE **≠** M5 CLOSED · M5 architecture ADOPTED **≠** M6 started · M4 CLOSED **≠** M5 Delivery authorized · M4 CLOSED **≠** runtime v3 ADOPTED · one bounded successful REAL completion **≠** global Cursor REAL safety for arbitrary capabilities/tasks · strict runtime read-only proof applies to the **demonstrated M4 bounded path**, not arbitrary future Cursor tasks · timeout 60000 **proven sufficient for demonstrated M4 bounded RO path** **≠** universal Cursor REAL timeout policy · FIRST REAL historical timeout **≠** timeout proven defective · `CURSOR_REAL_TIMEOUT_POLICY` OPEN / NON-BLOCKING **unchanged by M5 architecture decision** **≠** M4/M5 reopened · technical launch journal **≠** Product Store · Critical Ack/Auth.js future IAM **≠** required retroactively for M4 first low-risk RO path · v3 global baseline **NOT PROMOTED** · runtime v3 **NON ADOPTED** · ≠ full OA durable |

 ## B1. Nature du document

@@ -26,7 +26,7 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).

 ## B3. Point de départ factuel

-### Sur main (`2d1361ee71bec7a21f6f76efc7c33eaf3146802a`)
+### Sur main (`5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e`)

 | Capacité | État observé |
 | --- | --- |
@@ -34,7 +34,7 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).
 | F1 Nora chat | WIRED — contextual assistant |
 | F2 qualification / proposal / Morris gate | WIRED — qualification + **real CycleInstance** + live post-mutation `F2ContextSnapshot` ; conversation/proposal **process-local** ; M3 GO path uses server-owned temporary local Morris authority (fail-closed) |
 | F3 / M3 PREPARE | WIRED — **M3 Product path** : HumanDecision durable → ExecutionContract durable → Cursor PREPARE-only projection ; **fixture historique/test** (`TestExecutionAdapter`) conservé ≠ chemin REAL |
-| Evidence UI reinjection | WIRED — DTO panel ; **pas** LPS write-back |
+| Evidence UI reinjection | WIRED — DTO panel Memory/process-local ; **pas** durable LPS evidence/RB write-back **today** (M5-B W1 = ADOPTED target, NOT IMPLEMENTED) |
 | OPS1 Cursor REAL | EXISTS — UI `/ops1` parallèle ; flag `OPS1_CURSOR_REAL` |
 | D1 SQLite projects | EXISTS — UI `/projects` parallèle |
 | execution-run D2-D | EXISTS — **non** branché F1–F3 |
@@ -43,16 +43,21 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).
 | Architecture convergence | **Option 1 ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor (G0-A) |
 | Project/LPS restart safety | **PROVEN / MERGED** (process A→B + CI #158) |
 | Autres OA (T-A2 CycleInstance M2 subset) | **Product SQLite — MERGED ON MAIN** (PR #339) — Cycle/LPS/CKC linkage durable + restart-safe (subset M2) |
-| Autres OA (T-A2 trajectory/epistemic ; Confirmation ; T-A5 Attempt product ; T-A6 Evidence) | **Memory partiel** — process-local |
+| Autres OA (T-A2 trajectory/epistemic ; Confirmation ; T-A5 Attempt product ; T-A6 Evidence/ReviewBundle) | **CURRENT RUNTIME = Memory / process-local** · M5-A **TARGET** Product SQLite Attempt+Evidence+ReviewBundle = **ADOPTED / NOT IMPLEMENTED** |
 | Autres OA (T-A3 HD) | **Product SQLite — MERGED ON MAIN — M3** (PR #341) ; Confirmation reste Memory/process-local |
-| Autres OA (T-A4 ExecutionContract) | **Product SQLite — MERGED ON MAIN — M3** (PR #341) — PREPARE-only ; Attempt product still Memory |
+| Autres OA (T-A4 ExecutionContract) | **Product SQLite — MERGED ON MAIN — M3** (PR #341) — PREPARE-only ; Attempt product **CURRENT** Memory · M5-A durable Attempt **TARGET ADOPTED / NOT IMPLEMENTED** |
 | Architecture M4 | **ADOPTED + IMPLEMENTED ON MAIN — M4 CLOSED** — D-M4-01→05 via PR #344 · Delivery **MERGED** · FIRST REAL historical + final governed completion reproof **PASS** · exit proof **ACCEPTED BY MORRIS** |
 | T-A5 REAL (Nora/Studio) | **IMPLEMENTED ON MAIN / DEFAULT OFF** — specialized OA-owned boundary ; fixture `externalEffects:false` **preserved** ; gateway deterministic bounding **ON MAIN** (`--mode ask` + README.md markers) ; historical governed REAL launches = **2** ; successful governed REAL completions = **1** |
 | Cursor REAL depuis Nora | **2 historical governed attempts** — Run1 FIRST REAL (`xat:m4-first-real-001`) launch **PROVEN** / completion **NOT** (timeout ~60s) · Run2 final reproof (`xat:m4-reproof-86b5ecb05474`) completion **PROVEN** (~15.7s / `M4_READ_ONLY_OK`) · identities never reused across runs |
 | Gate D | **IMPLEMENTED ON MAIN** (GD-1) · consumed **once per governed REAL** historically (Run1 + Run2) · future REAL still requires **fresh** Gate D + Morris GO |
-| Technical CREATED/LAUNCHED frontier | **IMPLEMENTED ON MAIN** · **TEMPORARY WITH EXIT** · ≠ Product Store · REAL TRACE **PROVEN** on both historical governed runs |
+| Technical CREATED/LAUNCHED frontier | **IMPLEMENTED ON MAIN** · **TEMPORARY WITH EXIT** · **M5-C disposition ADOPTED** (KEEP during first M5 Delivery) · ≠ Product Store · REAL TRACE **PROVEN** on both historical governed runs |
 | Bounded RO AgentCapability | **IMPLEMENTED ON MAIN** · static / deny-by-default · KEEP · **STRICT BOUNDED RUNTIME TOOL-SURFACE PROVEN FOR FINAL M4 REPROOF** (Read=1 README only ; Shell/Glob/Grep/write=0) — **≠** “Cursor is globally read-only” |
 | `CURSOR_REAL_TIMEOUT_POLICY` | **OPEN / NON-BLOCKING POST-M4 RESERVE** — current product timeout **60000** = **KEEP FOR NOW** · proven sufficient for demonstrated M4 bounded RO path · **NOT** universal policy · **NOT** proven defective |
+| M5 architecture trajectory | **ADOPTED BY MORRIS / NOT IMPLEMENTED** — Entry Qualification **COMPLETE** (handoff `63f41e3…`) · Delivery **NOT AUTHORIZED** · exit proof **NOT YET SATISFIED** |
+| M5-A Persistence boundary | **OPTION B ADOPTED** — TARGET Product SQLite OA backbone for **ExecutionAttempt + Evidence + ReviewBundle** behind existing ports/domain/use cases · CURRENT runtime still Memory |
+| M5-B Nora/LPS write-back | **W1 ADOPTED** — TARGET factual LPS link update for Evidence/ReviewBundle refs + Recommendation separate · CURRENT append path does **not** write `evidenceIds`/`reviewBundleIds` · Recommendation remains Recommendation |
+| M5-C Technical journal | **KEEP TEMPORARY WITH EXIT** — ADOPTED disposition for first M5 Delivery · retirement needs durable Attempt + safety equivalence + dedicated Morris GO |
+| NEXT IMMEDIATE GATE | **M5 DELIVERY AUTHORIZATION** — **NOT AUTHORIZED** · NEXT CAPABILITY after M5 closure = **M6** (NOT STARTED / NOT AUTHORIZED) |

 ### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`) — historique / harvest

@@ -78,22 +83,28 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | T-A2 Cycle/CKC | Product SQLite CycleInstance + F2/CKC/LPS linkage (PR #339) | **COMPLETE** (M2) / **KEEP** backbone | CycleInstance durable + restart-safe on main ; Trajectory/Epistemic restent Memory |
 | T-A3 HD/Confirm/Authority | Product SQLite HD **ON MAIN** (PR #341) + Confirmation Memory + local Morris authority TEMPORARY WITH EXIT | **COMPLETE** (M3) / **KEEP** backbone | HD durable on main ; Confirmation process-local ; Auth.js exit ouvert |
 | T-A4 ExecutionContract | Product SQLite + M3 PREPARE truthful + Cursor projection PREPARE-only **ON MAIN** (PR #341) | **COMPLETE** (M3) / **KEEP** backbone | Durable on main ; no Attempt/REAL ; fixture path historique/test conservé |
-| T-A5 Attempt / fixture adapter port | F3 fixture adapter · `ExecutionAdapterPort.externalEffects:false` · PR #344 | **KEEP** core lifecycle + **KEEP** zero-effect port | StartExecution remains sole authority sequencer ; fixture port intact (D-M4-01) |
+| T-A5 Attempt domain + ports / fixture adapter port | F3 fixture adapter · `ExecutionAdapterPort.externalEffects:false` · PR #344 | **KEEP** domain/ports/lifecycle + **KEEP** zero-effect port | StartExecution remains sole authority sequencer ; fixture port intact (D-M4-01) ; M5-A durable Attempt target **ADOPTED / NOT IMPLEMENTED** |
 | T-A5 specialized REAL boundary | PR #344 + PR #346 / main `2d1361ee…` | **COMPLETE M4 / KEEP** (+ gateway bounding) | OA-owned REAL boundary **implemented, default OFF** — no OA→OPS1 runtime coupling — TWO historical governed launches · ONE successful completion under deterministic `--mode ask` / README bounding · M4 CLOSED |
-| T-A5 launch journal (CREATED/LAUNCHED) | PR #344 / main · exercised on both REAL runs | **TEMPORARY WITH EXIT — IMPLEMENTED / KEEP** | Technical safety journal ; ≠ Product Store ; REAL TRACE PROVEN ; exit → Attempt/Evidence durable path M5+ / dedicated Morris gate |
+| T-A5 launch journal (CREATED/LAUNCHED) | PR #344 / main · exercised on both REAL runs | **KEEP / TEMPORARY WITH EXIT — M5-C ADOPTED DISPOSITION** | Technical safety journal ; ≠ Product Store ; REAL TRACE PROVEN ; **no retirement in first M5 Delivery** ; future exit → durable Attempt + safety equivalence + dedicated Morris GO |
 | AgentCapability REAL RO profile | PR #344 / `m4BoundedReadOnlyCursorAgent` · KEEP | **COMPLETE M4 / KEEP** | Bounded RO profile exercised ; final reproof proved strict bounded tool-surface for that path ; AgentCapability **unchanged** through bounding/closure |
 | Product timeout 60000 | product default / both REAL runs | **KEEP CURRENT VALUE FOR NOW** + **OPEN / NON-BLOCKING POST-M4 RESERVE** (`CURSOR_REAL_TIMEOUT_POLICY`) | Sufficient for demonstrated M4 bounded RO completion (~15.7s) ; FIRST REAL timeout historical ≠ proven defect ; **no** universal timeout policy selected |
-| T-A6 Evidence/ReviewBundle | F3 ingest + UI cards | **COMPLETE** | UI reinjection ; LPS write-back manquant |
+| T-A6 Evidence/ReviewBundle domain + ports + use cases | F3 ingest + UI cards Memory | **KEEP** domain/ports/use cases · Memory product adapters **REPLACE ON PRODUCT PATH DURING M5 DELIVERY** · Product SQLite Evidence/RB target **ADOPTED FOR M5 / NOT IMPLEMENTED** | UI reinjection exists ; CURRENT Memory ; M5-A durable target selected ; M5-B W1 LPS factual link **ADOPTED / NOT IMPLEMENTED** |
+| Product SQLite Attempt/Evidence/ReviewBundle target | M5 Entry Qualification handoff `63f41e3…` · Morris M5-A OPTION B | **ADOPTED FOR M5 / NOT IMPLEMENTED** | Existing OA Product SQLite backbone (G0-B) behind existing ports — Delivery required |
+| LivingProjectState | Product SQLite `oa_lps` · type already has `evidenceIds` / `reviewBundleIds` | **KEEP** | Durable LPS exists ; factual Evidence/RB linkage fields present on type |
+| AppendLivingProjectStateVersion | request/path today | **ADAPT TARGET FOR M5 W1** | CURRENT runtime gap: request/path does **not** yet write `evidenceIds`/`reviewBundleIds` ; future W1 = factual Evidence/RB link append only |
+| RecommendNextGate | evidence-review coordination | **KEEP — RECOMMENDATION-ONLY** | Never HumanDecision / gateConsumed / executionAuthority ; unchanged by M5-B W1 |
+| Claim/Maturity memory stores | evidence-review memory | **FREEZE / later ADAPT** | Out of minimal M5 slice |
+| Product SQLite backbone | G0-B ADOPTED · Project/LPS/Cycle/HD/EC on main | **KEEP / COMPLETE** | Target persistence backbone already selected ; extend for M5-A aggregates in Delivery |
 | T-A7 readiness/HARD rails | `platform/t-a7` | **KEEP** | Honesty rails |
 | Shared platform AI | `lib/platform` | **KEEP** | Substrate F1 |
-| F1 / F2 / F3 UI | `features/project-assistant` | **KEEP** / **ADAPT** | Remplacer demo/fixture bindings progressivement |
-| vertical-slice-runtime | `wireOaStack` · PR #344 comments only | **KEEP** / **ADAPT** | Composition root Studio ; REAL boundary **intentionally not wired by default** (M4 REAL-OFF) |
+| F1 / F2 / F3 UI / Nora compose | `features/project-assistant` · F3 ingest→RecommendNextGate | **KEEP** / **HARVEST/ADAPT** — **NO NEW ENGINE** | Compose existing use cases ; durable readback + W1 LPS link pending M5 Delivery |
+| vertical-slice-runtime | `wireOaStack` · PR #344 comments only | **KEEP** / **ADAPT** (future M5 Delivery durable adapter wire) | Composition root Studio ; REAL boundary **intentionally not wired by default** (M4 REAL-OFF) ; Attempt/Evidence/RB still Memory today |
 | OPS1 Cursor/worktree/report | `lib/ops1` | **HARVEST** (+ **FREEZE** UI growth **RECOMMENDATION**) | Capacité Cursor réelle isolable ; harvest ≠ call OPS1 runtime from OA |
 | execution-run | `lib/oa/execution-run` | **FREEZE** (**RECOMMENDATION**) | Parallèle ; non F3 chain |
 | D1 `/projects` | `lib/d1` | **FREEZE** / **RETIRE LATER** (**RECOMMENDATION**) | Parallèle durable |
 | FinOps | `lib/oa/finops` | **KEEP** isolé + **FREEZE** lots non bloquants (**RECOMMENDATION**) | Transverse cost ≠ Product persistence |
 | Auth.js / Critical Ack candidate | dirty only (inspected) | **DEFER for first RO** (D-M4-05) · **NOT PROMOTED** | Not a prerequisite of first M4 read-only proof ; remains candidate for future N2/N3 / IAM gate ; debt **preserved** |
-| Persistence Memory OA | factories Memory* (trajectory/epistemic ; Confirmation ; T-A5 Attempt product ; T-A6) | **REPLACE** progressif (T-A1 + T-A2 + T-A3 HD + T-A4 ExecutionContract = SQLite Product **ON MAIN through M3**) | Attempt/Evidence/Trajectory/Confirmation restent process-local ; M4 technical launch journal **IMPLEMENTED** TEMPORARY WITH EXIT (≠ Product Store ; does **not** close Product persistence debt) |
+| Persistence Memory OA | factories Memory* (trajectory/epistemic ; Confirmation ; T-A5 Attempt product ; T-A6 Evidence/RB ; Claims/Maturity) | **REPLACE ON PRODUCT PATH DURING M5 DELIVERY** for Attempt/Evidence/ReviewBundle (M5-A OPTION B **ADOPTED**) · Claims/Maturity **FREEZE / later ADAPT** (out of minimal M5) · Trajectory/Confirmation remain process-local | CURRENT Attempt/Evidence/RB Memory ; TARGET Product SQLite **ADOPTED / NOT IMPLEMENTED** ; journal KEEP TEMPORARY WITH EXIT (M5-C) ≠ Product Store |

 ## B5. Gap map → boucle cible

@@ -105,20 +116,25 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | HumanDecision durable/authoritative | **CLOSED ON MAIN — M3** — Product SQLite + LPS link ; autorité local-single-user TEMPORARY WITH EXIT (durabilité HD fermée ≠ IAM product-grade fermé) | future IAM (Ack **not** absolute for first RO — D-M4-05) ; historical Gate D first-REAL consumption already proven once |
 | CKC ↔ cycle binding | **CLOSED ON MAIN — M2** — `ckcResolutionRef` projection on LPS | — |
 | live contextSnapshot | **CLOSED ON MAIN — M2** — `F2ContextSnapshot` post-mutation (pas nouvel aggregate durable) | — |
-| ExecutionContract from real HD | **CLOSED ON MAIN — M3** — exact/unresolved fields from DecisionBasis ; fixture path historique conservé | M5 (Evidence path) — separate Morris GO |
+| ExecutionContract from real HD | **CLOSED ON MAIN — M3** — exact/unresolved fields from DecisionBasis ; fixture path historique conservé | M5 Delivery (Evidence path) — architecture selected ; Delivery **NOT AUTHORIZED** |
 | Cursor projection canonique | **CLOSED ON MAIN — M3 PREPARE-only** (`executionAllowed=false`) | future elevated REAL classes / M5+ |
 | Cursor REAL behind T-A5 | **IMPLEMENTATION MERGED / DEFAULT OFF** · M4 governed completion **PROVEN** (final reproof) · M4 **CLOSED** | future REAL requires distinct Morris GO (not M4 reopen) |
 | REAL specialized adapter boundary | **CLOSED ON MAIN — PR #344** (+ gateway bounding PR #346) — implemented, default OFF | KEEP |
-| durable launch frontier (CREATED/LAUNCHED) | **IMPLEMENTED ON MAIN — PR #344** — TEMPORARY WITH EXIT · REAL TRACE **PROVEN** (both runs) | Attempt/Evidence product durability exit M5+ |
+| durable launch frontier (CREATED/LAUNCHED) | **IMPLEMENTED ON MAIN — PR #344** — TEMPORARY WITH EXIT · **M5-C KEEP** for first M5 Delivery · REAL TRACE **PROVEN** (both runs) | Future journal retirement gate (after durable Attempt + safety equivalence + Morris GO) |
 | Gate D durable grant | **IMPLEMENTED ON MAIN** (GD-1) · consumed once per historical governed REAL · **not reusable** | fresh Gate D for any future REAL |
 | bounded REAL AgentCapability RO | **IMPLEMENTED ON MAIN** · final reproof **STRICT BOUNDED TOOL-SURFACE PROVEN** for demonstrated path | KEEP ; future capabilities separate |
 | governed REAL completion (M4) | **PROVEN** — final reproof PASS (handoff `1123a30f…`) · exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** | — |
 | `CURSOR_REAL_TIMEOUT_POLICY` | **OPEN / NON-BLOCKING POST-M4** — 60000 KEEP FOR NOW | future REAL class needing policy qualification |
 | Critical Ack UI | CANDIDATE / MISSING — **NOT BLOCKING FIRST M4 READ-ONLY PROOF BY D-M4-05** ; remains for future N2/N3 / IAM | future N2/N3 · IAM gate |
-| Evidence durable | MISSING | M5 |
-| ReviewBundle → LPS writeback | MISSING | M5/M6 |
-| Nora post-exec analysis | PARTIAL (UI cards) | M5 |
-| Restart safety Studio core | **PARTIAL** — Project/LPS/Cycle/HD/ExecutionContract **restart-safe ON MAIN** ; conversation/proposal/Confirmation/Attempt product/Evidence Memory ; M4 crash/replay protections + REAL journal reopen **PROVEN** | M5+ Attempt/Evidence durability |
+| ExecutionAttempt product durability | **MISSING IN RUNTIME** · M5-A TARGET SELECTED (Product SQLite) · **M5 DELIVERY REQUIRED** | M5 Delivery (NOT AUTHORIZED yet) |
+| Evidence durability | **MISSING IN RUNTIME** · M5-A TARGET SELECTED (Product SQLite) · **M5 DELIVERY REQUIRED** | M5 Delivery (NOT AUTHORIZED yet) |
+| ReviewBundle durability | **MISSING IN RUNTIME** · M5-A TARGET SELECTED (Product SQLite) · **M5 DELIVERY REQUIRED** | M5 Delivery (NOT AUTHORIZED yet) |
+| Technical journal exit | **DEFERRED / NON-BLOCKING** first M5 Delivery · M5-C KEEP TEMPORARY WITH EXIT | Future dedicated Morris GO |
+| Claim/Maturity durability | **DEFER / future** — not minimal M5 | later |
+| Timeout / IAM / OPS1 | **OUT OF M5 CRITICAL PATH** | separate |
+| Evidence/ReviewBundle → LPS factual write-back | **MISSING IN RUNTIME** · M5-B W1 AUTHORITY **SELECTED** · **M5 DELIVERY REQUIRED** | M5 Delivery (NOT AUTHORIZED yet) |
+| Nora post-exec analysis | **PARTIAL** — RecommendNextGate **KEEP** · durable Evidence/RB sources + W1 LPS factual link pending Delivery | M5 Delivery |
+| Restart safety Studio core | **PARTIAL** — Project/LPS/Cycle/HD/ExecutionContract **restart-safe ON MAIN** ; conversation/proposal/Confirmation/Attempt product/Evidence/ReviewBundle **CURRENT Memory** ; M4 crash/replay + journal reopen **PROVEN** · M5-A durable Attempt+Evidence+RB **TARGET ADOPTED / NOT IMPLEMENTED** | M5 Delivery |
 | IAM/authz product-grade | PARTIAL / MISSING (M3 local authority temporary ; Auth.js candidate **NOT PROMOTED**) — **not** a blocker of first RO proof (D-M4-05) ; debt preserved | future IAM gate / M8 |

 ## B6. Decisions / gates
@@ -182,13 +198,29 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 - **M4 EXIT PROOF** — **ACCEPTED BY MORRIS**
 - **M4** — **CLOSED** (GO **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION**)

+### M5 Architecture Decisions — CONSUMED BY MORRIS
+
+- **M5 ENTRY QUALIFICATION** = **COMPLETE** — handoff `63f41e3f328868286c14312a58a7b79f850383c0`
+- GO architecture : **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY**
+- GO Roadmap sync : **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY**
+
+| ID | Décision | Statut |
+| --- | --- | --- |
+| **M5-A** | Persistence boundary **OPTION B** — ExecutionAttempt + Evidence + ReviewBundle durable together in existing OA Product SQLite behind existing ports/domain/use cases | **ADOPTED** · **NOT IMPLEMENTED** |
+| **M5-B** | Nora/LPS write-back **W1** — automatic factual LPS link update allowed for Evidence/ReviewBundle refs ; Recommendation remains Recommendation ; **no** automatic HumanDecision / gate consumption / executionAuthority / structural trajectory validation | **ADOPTED** · **NOT IMPLEMENTED** |
+| **M5-C** | Technical launch journal disposition **KEEP TEMPORARY WITH EXIT** during first M5 Delivery ; retirement later needs durable Attempt + safety equivalence + dedicated Morris GO | **ADOPTED DISPOSITION** |
+
 ### Décisions / gates toujours ouverts

-1. **M5 — Retour de preuve + analyse Nora** — **NOT AUTHORIZED** — separate Morris GO required (M4 dependency **SATISFIED**)
-2. Critical Ack / Auth.js promotion for future N2/N3 / IAM — **Decision Required** (separate)
-3. Disposition OPS1 / D1 / execution-run — **Decision Required**
-4. runtime v3 adoption — **NOT AUTHORIZED**
-5. **`CURSOR_REAL_TIMEOUT_POLICY`** — **OPEN / NON-BLOCKING POST-M4 RESERVE** — current 60000 **KEEP FOR NOW** · no structural timeout decision selected
+1. **M5 DELIVERY AUTHORIZATION** — **NOT AUTHORIZED** (architecture consumed ; Delivery separate Morris GO)
+2. Future M5 validation / PR / merge gates — **NOT AUTHORIZED**
+3. M5 exit proof acceptance — future Morris gate — **NOT YET SATISFIED**
+4. Technical launch journal retirement — future dedicated gate (M5-C)
+5. **M6 — Boucle projet complète** — **NOT STARTED / NOT AUTHORIZED**
+6. Critical Ack / Auth.js promotion for future N2/N3 / IAM — **Decision Required** (separate)
+7. Disposition OPS1 / D1 / execution-run — **Decision Required**
+8. runtime v3 adoption — **NOT AUTHORIZED**
+9. **`CURSOR_REAL_TIMEOUT_POLICY`** — **OPEN / NON-BLOCKING POST-M4 RESERVE** — current 60000 **KEEP FOR NOW** · unchanged by M5 architecture decision · no structural timeout decision selected

 ### Décisions / gates historiques encore listés (non tranchés comme promotion)

@@ -274,7 +306,7 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | **Merge** | **CLOSED** — PR #341 MERGED @ `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS |
 | **Exit evidence** | **EXIT PROOF SATISFIED ON MAIN** |
 | **Preuve e2e** | GO → HD durable + LPS N+1 · restart → PREPARE sans Proposal · ExecutionContract durable · fingerprint persisted=recomputed=projection · unresolved semantics fail-closed · Cursor PREPARE-only · authority adversarial PASS · local 1656 / 131 / 0 · CI #166 SUCCESS · merge #341 |
-| **Next** | M5 — Retour de preuve + analyse Nora — **MORRIS GO REQUIRED** *(M4 CLOSED)* |
+| **Next** | M5 — architecture **ADOPTED** · Delivery **NOT AUTHORIZED** *(M4 CLOSED)* |
 | **Statut** | **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** |

 ### Milestone 4 — Première exécution Cursor REAL bornée depuis Studio
@@ -291,20 +323,27 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | **Dépendances** | M3 — **SATISFIED** · D-M4-01→05 — **SATISFIED** · Delivery — **SATISFIED** · FIRST REAL / diagnosis / bounding / completion proof / exit acceptance — **CONSUMED** |
 | **Preuve de sortie M4** | **SATISFIED / ACCEPTED BY MORRIS** — exact HD/EC · bounded agent · Gate D single-use · governed Cursor REAL · CREATED/LAUNCHED · no duplicate launch · no fixture fallback · isolated pinned workspace · bounded RO completion · fail-closed safety · final completion PASS |
 | **Statut** | **M4 EXIT PROOF ACCEPTED BY MORRIS — CLOSED** |
-| **Next** | M5 — Retour de preuve + analyse Nora — **NOT AUTHORIZED** without separate Morris GO |
+| **Next** | M5 architecture **ADOPTED BY MORRIS** · **NEXT IMMEDIATE GATE = M5 DELIVERY AUTHORIZATION** (NOT AUTHORIZED) |

 ### Milestone 5 — Retour de preuve + analyse Nora

 | Champ | Contenu |
 | --- | --- |
 | **ID** | M5 |
-| **Capacité v3** | V3-F14 Artifact Completeness · Evidence/ReviewBundle · F13 learning (base) |
-| **Outcome** | Evidence/ReviewBundle liés contrat/décision ; réinjectés Nora + LPS ; handoff Git transitionnel OK |
-| **État actuel** | UI cards Memory ; pas LPS write-back |
-| **Gaps** | L9 Evidence→LPS ; durable evidence |
-| **Dépendances** | M4 — **SATISFIED / CLOSED** |
-| **Preuve e2e** | post-exec : ReviewBundle visible + LPS updated + recommendation next gate |
-| **Statut** | **PARTIAL / NOT AUTHORIZED** — **M5 EXECUTION REQUIRES A SEPARATE MORRIS GO** |
+| **Capacité v3** | V3-F14 Artifact Completeness · Evidence/ReviewBundle · F13 learning (base) · support F02/F05/F09 |
+| **Outcome** | Evidence/ReviewBundle liés contrat/décision → réinjectés Nora → liens factuels LPS → Recommendation next gate → gouvernance humaine préservée |
+| **État actuel runtime** | Attempt **Memory** · Evidence **Memory** · ReviewBundle **Memory** · LPS durable but factual Evidence/RB append **missing** · Nora/F3 partial compose · RecommendNextGate Recommendation-only |
+| **Architecture** | **ADOPTED BY MORRIS** — Entry Qualification **COMPLETE** (handoff `63f41e3f328868286c14312a58a7b79f850383c0`) · **NOT IMPLEMENTED** |
+| **M5-A** | **OPTION B ADOPTED** — Product SQLite Attempt + Evidence + ReviewBundle behind existing ports |
+| **M5-B** | **W1 ADOPTED** — factual LPS link update + Recommendation separate |
+| **M5-C** | **KEEP TEMPORARY WITH EXIT** — journal stays for first M5 Delivery |
+| **Actifs** | domain/ports/use cases **KEEP** · memory product adapters **REPLACE** · Product SQLite backbone **KEEP** · LPS **KEEP** + append **ADAPT** · Nora/F3 **HARVEST/ADAPT** · launch journal **KEEP TEMPORARY WITH EXIT** |
+| **Gaps restants avant capability proof** | SQLite Attempt/Evidence/ReviewBundle adapters · Product schema evolution · RuntimeOaStack durable wiring · Attempt→Evidence durable bridge · ReviewBundle durable path · W1 LPS factual append · Nora/UI durable readback · restart QA · anti-claim QA |
+| **Dépendances** | M4 — **SATISFIED / CLOSED** · Architecture gate — **SATISFIED / CONSUMED** · Delivery gate — **NOT AUTHORIZED** |
+| **Preuve e2e cible** | terminal Attempt durable · Evidence durable liée Attempt/EC · ReviewBundle durable · process restart recovers same objects · LPS N+1 contains expected evidenceIds/reviewBundleIds · ReviewBundle visible Nora/UI · Recommendation next gate visible · Recommendation ≠ HumanDecision · gateConsumed=false · decisionCreated=false · no automatic execution · no unauthorized REAL · runtime state survives restart |
+| **Statut** | **M5 ARCHITECTURE TRAJECTORY ADOPTED BY MORRIS — DELIVERY NOT AUTHORIZED — IMPLEMENTATION NOT STARTED** |
+| **Next immediate gate** | **M5 DELIVERY AUTHORIZATION** — separate Morris GO required |
+| **Next capability after M5** | **M6** — NOT STARTED / NOT AUTHORIZED |

 ### Milestone 6 — Boucle projet complète

@@ -314,9 +353,9 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | **Capacité v3** | V3-F05 + F09 replanification (base) |
 | **Outcome** | Sans copier-coller manuel : conversation → qualification → décision → exécution → preuve → analyse → update projet → next step |
 | **État actuel** | Chaîne fragmentée / process-local / fixture |
-| **Dépendances** | M1–M5 |
+| **Dépendances** | M1–M5 — M5 architecture selection **does NOT** satisfy M5 dependency ; M6 cannot start until M5 capability/exit proof is satisfied and Morris opens M6 |
 | **Preuve e2e** | parcours complet redémarrage-safe documenté |
-| **Statut** | **NOT STARTED** |
+| **Statut** | **NOT STARTED / NOT AUTHORIZED** |

 ### Milestone 7 — Élargissement contrôlé doctrine v3

@@ -344,20 +383,20 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | Fondation | Capacité | État courant | Milestone(s) | Preuve attendue | Gap / décision |
 | --- | --- | --- | --- | --- | --- |
 | V3-F01 CKC | Qualification cognitive | **PARTIAL RUNTIME** — F2 qualify + CycleInstance/CKC binding **on main** (M2) ; proposal process-local | M2, M7 | CKC lié cycle + proposal | proposal durable later |
-| V3-F02 LPS | Living Project State | **PARTIAL RUNTIME** — T-A1 Project/LPS durable SQLite **merged on main** ; writeback / autres états associés restent à compléter (M5+) | M1, M5 | M1 / PR #337 / restart proof | writeback + autres OA |
+| V3-F02 LPS | Living Project State | **PARTIAL RUNTIME** — LPS durable on main ; M5-B W1 architecture **SELECTED** ; factual Evidence/RB write-back **NOT IMPLEMENTED** | M1, M5 | M1 restart proof · future W1 Delivery | W1 append + autres OA |
 | V3-F03 DoctrinePackage | Package pin/digest | **PARTIAL RUNTIME** — digest in live `F2ContextSnapshot` **on main** (M2) ; KEEP files | M1–M2 | live digest in snapshot | — |
 | V3-F04 Épistémologie | Obs/Hyp/… | DOC + UI tags partiels (base M2) | M2, M7 | tags/stop contradictions | later depth |
-| V3-F05 Chaîne conv→exec | Boucle native | **PARTIAL RUNTIME** — through M4 governed execution **demonstrated / milestone CLOSED** ; Evidence / LPS writeback / Nora post-exec **not closed** | M2–M6 | e2e sans copier-coller | M5+ (NOT AUTHORIZED yet) |
+| V3-F05 Chaîne conv→exec | Boucle native | **PARTIAL RUNTIME** — through M4 CLOSED ; M5 architecture **SELECTED** for evidence→LPS post-exec closure · **implementation pending** · full loop still M6 | M2–M6 | e2e sans copier-coller | M5 Delivery NOT AUTHORIZED · then M6 |
 | V3-F06 Trajectory | ProjectTrajectory | Modeled / Memory cycle | M3, M7 | trajectory update post-HD | wire |
 | V3-F07 Provenance | Source hierarchy | Doctrine FS | M2, M7 | provenance on artifacts | later |
 | V3-F08 Contradictions | Stop/contradiction | DOC | M7 | UI stop + record | later |
-| V3-F09 Replanif | Governed replan | DOC | M6–M7 | next-step from ReviewBundle | after M5 |
+| V3-F09 Replanif | Governed replan | DOC · M5 preserves Recommendation-only (W1) · structural replanning remains future / M6 | M6–M7 | next-step from ReviewBundle | after M5 exit |
 | V3-F10 DebtItem | Dette gouvernée | DOC | M7–M8 | debt records | later |
 | V3-F11 AgentCapability | Caps agents | Fixture + **bounded REAL RO KEEP** · M4 scope exercised successfully on final reproof (strict bounded tool-surface proven for that path) | M4 | M4 CLOSED for this capability class | future AgentCapability classes separate |
 | V3-F12 Réversibilité | Action policy | Gate D + CREATED/LAUNCHED + spawn ACK/completion controls **demonstrated for M4** · Ack **deferred for first RO** (D-M4-05) | M3–M4 | M4 CLOSED · Ack for elevated classes later | future IAM / N2/N3 |
-| V3-F13 Learning | REX contrôlé | DOC / capitalisation | M5, M7 | learning from Evidence | later |
-| V3-F14 Artifact Completeness | Completeness gates | Partial ReviewBundle | M5 | completeness checks | durable evidence |
-| V3-F15 Maturity | Distributed maturity | Honesty rails T-A7 | M8 | anti-claim maturity | no false READY |
+| V3-F13 Learning | REX contrôlé | DOC / capitalisation · M5 architecture selected for durable Evidence/RB learning base · implementation pending | M5, M7 | learning from Evidence | M5 Delivery then later |
+| V3-F14 Artifact Completeness | Completeness gates | Partial ReviewBundle runtime · M5-A Attempt/Evidence/RB durable **target decided** · runtime still Memory / persistence pending | M5 | completeness + restart-safe artifacts | M5 Delivery |
+| V3-F15 Maturity | Distributed maturity | Honesty rails T-A7 · runtime v3 **NON ADOPTED** · no maturity promotion from M5 architecture ADOPT | M8 | anti-claim maturity | no false READY |

 ## B10. Chemin critique explicite

@@ -374,8 +413,14 @@ CRITICAL PATH:
   → post-pre-reproof Roadmap sync MERGED (PR #347 @ 2d1361ee…)
   → M4 GOVERNED REAL COMPLETION PROOF PASS (handoff 1123a30f…) — duration≈15.7s — M4_READ_ONLY_OK — strict bounded tool-surface PROVEN for that path
   → M4 EXIT PROOF ACCEPTED BY MORRIS — M4 CLOSED
-  → NEXT CAPABILITY = M5 — RETOUR DE PREUVE + ANALYSE NORA
-  → M5 NOT AUTHORIZED (separate Morris GO required)
+  → M4 closure Roadmap MERGED (PR #348 @ 5132f1bc…)
+  → M5 ENTRY QUALIFICATION — COMPLETE (handoff 63f41e3…)
+  → M5 ARCHITECTURE TRAJECTORY — ADOPTED BY MORRIS (M5-A OPTION B · M5-B W1 · M5-C KEEP TEMPORARY WITH EXIT)
+  → NEXT IMMEDIATE GATE = M5 DELIVERY AUTHORIZATION — NOT AUTHORIZED
+  → M5 DELIVERY — NOT AUTHORIZED / IMPLEMENTATION NOT STARTED
+  → M5 EXIT PROOF — NOT YET SATISFIED
+  → NEXT CAPABILITY AFTER M5 = M6 — Boucle projet complète
+  → M6 — NOT STARTED / NOT AUTHORIZED

 M4 ARCHITECTURE GATE: CLOSED (D-M4-01→05)
 M4 DELIVERY GATE: CLOSED / MERGED (PR #344)
@@ -387,19 +432,25 @@ M4 EXIT PROOF: ACCEPTED BY MORRIS — SATISFIED
 M4: CLOSED
 GATE D: IMPLEMENTED — consumed once per historical governed REAL — fresh grant required for future REAL
 CRITICAL ACK: DEFERRED FOR FIRST RO — FUTURE N2/N3 / IAM — NOT PROMOTED
-TECHNICAL LAUNCH JOURNAL: TEMPORARY WITH EXIT — ≠ PRODUCT STORE
+TECHNICAL LAUNCH JOURNAL: KEEP TEMPORARY WITH EXIT — M5-C ADOPTED DISPOSITION — ≠ PRODUCT STORE
 TIMEOUT 60000: KEEP FOR NOW — proven sufficient for demonstrated M4 bounded RO path — NOT universal policy — NOT proven defective
-CURSOR_REAL_TIMEOUT_POLICY: OPEN / NON-BLOCKING POST-M4 RESERVE
+CURSOR_REAL_TIMEOUT_POLICY: OPEN / NON-BLOCKING POST-M4 RESERVE — UNCHANGED BY M5 ARCHITECTURE DECISION
 STRICT BOUNDED RUNTIME READ-ONLY TOOL-SURFACE: PROVEN FOR FINAL M4 REPROOF PATH ONLY
-M5: NOT AUTHORIZED
+M5 ENTRY QUALIFICATION: COMPLETE
+M5 ARCHITECTURE GATE: CONSUMED / ADOPTED BY MORRIS (NOT IMPLEMENTED)
+M5 DELIVERY AUTHORIZATION: NOT AUTHORIZED
+M5 EXIT PROOF: NOT YET SATISFIED
+M5: ARCHITECTURE ADOPTED — DELIVERY NOT AUTHORIZED — IMPLEMENTATION NOT STARTED

-NEXT CAPABILITY: M5 — RETOUR DE PREUVE + ANALYSE NORA — MORRIS GO REQUIRED
+NEXT IMMEDIATE GATE: M5 DELIVERY AUTHORIZATION — MORRIS GO REQUIRED
+NEXT CAPABILITY AFTER M5: M6 — NOT STARTED / NOT AUTHORIZED

-NON-BLOCKING POST-M4 RESERVES (do NOT reopen M4):
+NON-BLOCKING / FUTURE RESERVES (do NOT reopen M4 ; do NOT block M5 architecture):
   - CURSOR_REAL_TIMEOUT_POLICY — OPEN / NON-BLOCKING
-  - technical launch journal — TEMPORARY WITH EXIT
+  - technical launch journal — KEEP TEMPORARY WITH EXIT (M5-C)
   - future IAM / Critical Ack for elevated classes
-  - Confirmation / Attempt product / Evidence durability partial
+  - Claims/Maturity durability — later
+  - Confirmation process-local — later

 TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
 FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth
@@ -429,6 +480,7 @@ Document key (tracking only — **not** an architecture decision):
 | Not proven | 60000 **defective** |
 | Classification | **KEEP CURRENT 60000 FOR NOW** + **OPEN / NON-BLOCKING POST-M4 RESERVE** |
 | Blocks M5? | **No** |
+| Changed by M5 architecture decision? | **No** — reserve unchanged |
 | Reopens M4? | **No** |

 No structural selection now among: global 90s/120s · unlimited · dynamic · per-AgentCapability · per-ExecutionContract · per class. Any such selection needs dedicated proof + Morris decision.
@@ -481,6 +533,10 @@ Ne pas mettre à jour pour chaque micro-commit sans impact de trajectoire.
 - M4 post-pre-reproof Roadmap sync : PR #347 · head `4f989aba92bce5ca33e1de251523694559b53902` · merge `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` · CI SFIA Studio **#178** SUCCESS
 - M4 GOVERNED REAL COMPLETION PROOF : handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · Attempt `xat:m4-reproof-86b5ecb05474` · Gate D `gtd:m4-reproof-86b5ecb05474` · PASS
 - Morris GO : **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION**
-- Current main (Roadmap candidate base) : `2d1361ee71bec7a21f6f76efc7c33eaf3146802a`
+- M4 closure Roadmap sync : PR #348 · merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e`
+- M5 Entry Qualification : handoff `63f41e3f328868286c14312a58a7b79f850383c0`
+- Morris GO : **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY**
+- Morris GO : **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY**
+- Current main (Roadmap candidate base) : `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e`
 - Audit handoff historique : `sfia/review-handoff` @ `c5b417dc13fa3700787d28571e5b5abe0599ae98` / `31a5db07fba2555a59ee8c65ad76b537bbd8a73d`
 - Framing : `projects/sfia-studio/sfia-v3-framing/30`–`37` (dont `34` · DOC-DEBT-M1-01 sur `32`)
````

## Safety counters

| Control | Count |
| --- | --- |
| Cursor REAL | 0 |
| M5 Delivery | 0 |
| code/schema/migration | 0 |
| Build Doctrine / framing / method | 0 |
| project commit/push/PR/merge | 0 |
| journal retirement | 0 |
| timeout change | 0 |
| M6 work | 0 |

## Anti-claims

- M5 architecture ADOPTED ≠ M5 Delivery authorized ≠ M5 implemented ≠ M5 CLOSED
- M5-A target ≠ durable today
- M5-B W1 ≠ Recommendation becomes Decision
- M5-C KEEP ≠ journal retired
- M6 NOT AUTHORIZED
- runtime v3 NON ADOPTED
- timeout reserve unchanged
- M4 remains CLOSED

## Next

- ChatGPT review of handoff
- separate Morris GO for Roadmap Git integration (commit/push/PR)
- after Roadmap stable on main: separate Morris GO for M5 Delivery Authorization

## Verdict

**M5 ARCHITECTURE DECISION SYNC IMPLEMENTED LOCALLY — M5-A OPTION B ADOPTED — M5-B W1 ADOPTED — M5-C KEEP TEMPORARY WITH EXIT — M5 DELIVERY NOT AUTHORIZED — M6 NOT AUTHORIZED — ZERO REAL — READY FOR CHATGPT REVIEW**

### Instruction ChatGPT

Ouvrir `sfia-review-handoff/latest-chatgpt-review.md` sur `origin/sfia/review-handoff`. Vérifier branch/base, Roadmap only, décisions Morris exactes, M5-A OPTION B, M5-B W1, M5-C KEEP TEMPORARY WITH EXIT, current≠target, no implementation claims, M5 Delivery NOT AUTHORIZED, M6 NOT AUTHORIZED, runtime v3 NON ADOPTED, timeout unchanged, ZERO REAL/Delivery, diff complet exploitable. Si modified content absent: REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING.
