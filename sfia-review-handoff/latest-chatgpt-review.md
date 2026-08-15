# SFIA Studio — Review Pack FULL
## Cycle 15 — M5 CLOSURE + PRE-M6 USER JOURNEY / UX BASELINE ROADMAP ALIGNMENT

**Timestamp (Europe/Paris):** 2026-08-15 12:41:48 CEST (+0200)

**Niveau:** FULL

**Supersedes handoff:** `d64b85f53dd098051879e5aa266ab1ccd050fe90` / blob `9b1cef6a0f8f96b4810a4fc83079d2d0e5217107`

**Verdict candidat:** M5 CLOSURE PRESERVED — PRE-M6 USER JOURNEY / UX BASELINE TRAJECTORY ALIGNED IN CONVERGENCE ROADMAP — V3-F05 USER JOURNEY VALIDATION INSERTED BEFORE M6 — EXISTING M1→M5 RUNTIME KEPT — EXISTING UI SUBJECT TO FUTURE SELECTIVE AUDIT/HARVEST — NO UX DELIVERY — NO FIGMA ACTION — M6 NOT STARTED / NOT AUTHORIZED — ZERO REAL — READY FOR CHATGPT REVIEW

---

## 1. GO utilisateur exact

```text
ok go pour la modification
```

## 2. Contexte

ChatGPT recommended **not** integrating the prior M5 closure Roadmap candidate while it still said NEXT CAPABILITY = M6 / NEXT IMMEDIATE GATE = M6 ENTRY QUALIFICATION, because Morris explicitly chose a product step before M6:

- restart cleanly on the user journey ;
- build a new product UX baseline on M1→M5 runtime ;
- do **not** rebuild runtime/domain/persistence from zero ;
- do **not** treat historical UI as mandatory foundation ;
- audit / selectively reuse useful UI assets ;
- design then functionally test the M1→M5 journey ;
- only then return to M6.

Leaving the prior candidate unchanged would make it **trajectory-stale** if committed.

## 3. Interprétation gouvernée

```text
GO MORRIS — ALIGN M5 CLOSURE ROADMAP WITH PRE-M6 USER JOURNEY / UX BASELINE TRAJECTORY — KEEP M5 CLOSED — KEEP M5-C — NO UX DESIGN EXECUTION YET — NO FIGMA ACTION YET — NO UI DELIVERY — NO M6 — ZERO REAL — NO PROJECT GIT WRITE
```

## 4. Qualification

| Champ | Valeur |
| --- | --- |
| Cycle | **15 — Capitalisation / REX** (M5 closure Roadmap amendment) |
| Profil | **Standard** |
| Typologie | **DOC** |
| Capacité primaire | **V3-F05** |
| Support | V3-F02 / V3-F14 / V3-F15 |
| Milestone clôturé | **M5 — CLOSED BY MORRIS** |
| M6 | **NOT STARTED / NOT AUTHORIZED** |

## 5. Initial Git Truth

| Check | Observed |
| --- | --- |
| branch | `docs/sfia-studio-m5-closure` |
| HEAD / origin/main | `3467ecdf74ac2010c45f34545fb8684563dea547` |
| incoming handoff | `d64b85f53dd098051879e5aa266ab1ccd050fe90` |
| incoming blob | `9b1cef6a0f8f96b4810a4fc83079d2d0e5217107` |
| remote closure branch | **ABSENT** |
| tracked | Roadmap only |
| staged | empty |
| REAL | unset |

## 6. Candidate identity before amendment

Working-tree closure patch vs handoff `d64b85f…` FULL useful diff:

- content lines **identical**
- only difference = **1 trailing blank line** in handoff embed artifact
- claims present: M5 EXIT ACCEPTED · M5 CLOSED YES · M5-C KEEP · owner debt · runtime NON ADOPTED · M6 NOT AUTHORIZED · snapshot `3467ecd…` · PR #352 MERGED

**Verdict identity:** PASS (content-identical; blank-line embed only)

## 7. Sources / UX authority

Process + Convergence + Doctrine **30/37** (authority) + framing **11/16** (historical/support only).

**Precedence:** validated UX decisions in framing **30/37** (incl. **CC-D01**) prevail over older candidate wording in framing **11** (« Cockpit avant chat »). Framing files **not modified**.

## 8. Exact sections amended

1. Metadata timestamp / Intégration (user wording + governed interpretation) / Anti-claims Pre-M6
2. B3 NEXT CONVERGENCE CAPABILITY / NEXT IMMEDIATE GATE / M6 sequenced after Pre-M6
3. B6 Pre-M6 sequencing CONSUMED + open gates rewrite
4. Milestone 4/5 next pointers
5. **New** Pre-M6 Convergence Gate section (between M5 and M6)
6. Milestone 6 dependencies (Pre-M6 required / not yet satisfied)
7. B9 V3-F05 / F14 rows
8. B10 critical path + status block + UX audit reserve
9. Références Pre-M6 note

**Preserved:** M5 CLOSED · M5-C KEEP · snapshot `3467ecd…` · runtime v3 NON ADOPTED · no M6 architecture.

## 9. COMPLETE final Roadmap useful diff against main

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index afe430d..6a054e8 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -6,13 +6,13 @@
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
 | **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
 | **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
-| **Snapshot Git** | origin/main @ `d8961f1d85a98b5d4185f007f16ddac209e2e557` |
+| **Snapshot Git** | origin/main @ `3467ecdf74ac2010c45f34545fb8684563dea547` |
 | **Timestamp création** | 2026-08-12 21:53:10 CEST (+0200) *(historique)* |
-| **Timestamp maintenance** | 2026-08-15 09:45 CEST (+0200) — M5 TECHNICAL/FUNCTIONAL EXIT PROOF SATISFIED ON MAIN — M5-01…M5-34 SATISFIED ON MAIN — M5 CLOSURE DECISION PENDING MORRIS — NO REAL — NO M6 — NEXT IMMEDIATE GATE = MORRIS ACCEPT M5 EXIT PROOF + CLOSE M5 — CURSOR_REAL_TIMEOUT_POLICY OPEN / NON-BLOCKING |
+| **Timestamp maintenance** | 2026-08-15 12:41 CEST (+0200) — M5 EXIT PROOF ACCEPTED BY MORRIS — M5 CLOSED — M5-C KEEP TEMPORARY WITH EXIT — PRE-M6 USER JOURNEY / UX BASELINE INSERTED BEFORE M6 — PRE-M6 WORK NOT STARTED — M6 NOT STARTED / NOT AUTHORIZED — ZERO REAL — runtime v3 NON ADOPTED — NEXT GATE = PRE-M6 USER JOURNEY / UX BASELINE QUALIFICATION / DISTINCT MORRIS GO REQUIRED — CURSOR_REAL_TIMEOUT_POLICY OPEN / NON-BLOCKING |
 | **Validation Morris** | 2026-08-13 02:05 +0200 (Europe/Paris) — Build Doctrine + Convergence Roadmap officiellement validées comme gouvernance de construction SFIA Studio |
-| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` · **M4 Architecture docs :** PR #343 / merge `e974b7306f7400249c31399fd2890d5817833dbf` · **M4 Delivery :** PR #344 / head `f7270b21ccdbcf1cd543879e7c4120d87b874479` / merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI SFIA Studio **#172** SUCCESS (same head `f7270b21` after Morris-authorized rerun ; initial T7-C08 Class C / M4 causality not established — diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` ; no code change between failure and success) · **M4 post-Delivery Roadmap :** PR #345 / merge `3575c8863d8a13b610dbfde96a33426a620b2c56` · **M4 pre-reproof bounding :** PR #346 / head `8900cd06be195b2dd9fa154a7153608fdde6f9a3` / merge `fc7e20aaeb5153b4d73c1809f865e361f00e1b34` · CI SFIA Studio **#176** SUCCESS · ZERO REAL in bounding integration · **M4 post-pre-reproof Roadmap :** PR #347 / merge `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` · CI SFIA Studio **#178** SUCCESS · **M4 GOVERNED REAL COMPLETION PROOF** handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · **M4 closure Roadmap :** PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · **M5 Entry Qualification** handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · **M5 Delivery (Option B + W1) :** PR #350 / head `17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11` / merge `8f753218e4fff7d68d78c1d57e9c3e8fb7e60943` · CI SFIA Studio **#184** SUCCESS · post-merge CI **#185** SUCCESS · **M5 UI/Nora durable rehydrate :** PR #351 / head `ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7` / merge `d8961f1d85a98b5d4185f007f16ddac209e2e557` · CI SFIA Studio **#186** SUCCESS · post-merge CI **#187** SUCCESS · M5 exit re-evaluation handoff `54b0f5b43a50861c26226aa3ffc06460f8ffbafe` · blob `131c85172bbd6370a3edcd71347a64932c9303ab` · M5 EXIT PROOF **SATISFIED ON MAIN** · M5 **CLOSURE PENDING MORRIS** |
-| **Sources** | Git `main` @ `d8961f1d…` · PR #337/#339/#340/#341/#342/#343/#344/#345/#346/#347/#348/#349/#350/#351 · CI #158/#162/#166/#172/#176/#178/#184/#185/#186/#187 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · M4 CI diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` · FIRST REAL handoff `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` · timeout diagnosis handoff `797daeccfa2ec445a1ecaf10f042de635cb1fe21` · pre-reproof bounding handoffs `3c56cb29367268231c1db26b4de7af5cfe0ef499` / `9ffce8cc4a78f15af322d4fb4aab8bf63896ff6c` · final M4 governed REAL completion handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · GO Morris **M4 Delivery** / **MERGE PR #344** · GO Morris **FIRST M4 CURSOR REAL** · GO Morris **DIAGNOSE TIMEOUT** · GO Morris **PRE-REPROOF BOUNDING** / **MERGE PR #346** · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · M5 Entry Qualification handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · M4 Product path on main `projects/sfia-studio/app/**` |
-| **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 exit proof **SATISFIED** · M4 exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** · M5 Entry Qualification **COMPLETE** · M5 architecture trajectory **ADOPTED BY MORRIS** · M5 Delivery **IMPLEMENTED ON MAIN** (PR #350) · M5 UI rehydrate **IMPLEMENTED ON MAIN** (PR #351) · M5 technical/functional exit proof **SATISFIED ON MAIN** · M5 exit proof **≠** M5 CLOSED · M5 CLOSED **PENDING MORRIS** · M5 CLOSED future **≠** M6 automatically authorized · M5-A OPTION B **IMPLEMENTED ON MAIN** · M5-B W1 **IMPLEMENTED ON MAIN** · M5-B W1 factual write-back **≠** Recommendation becomes Decision · Recommendation **≠** HumanDecision · Recommendation **≠** gate consumed · Recommendation **≠** ExecutionAuthority · LPS factual evidence link **≠** structural trajectory validation · readback **≠** execution · remount UI visibility **≠** automatic next-cycle launch · M5-C KEEP TEMPORARY WITH EXIT **≠** technical journal retired · durable Product Attempt **≠** technical M4 journal automatically obsolete · M5 implementation **≠** runtime v3 ADOPTED · M5 implementation **≠** global v3 baseline promoted · M5 ZERO REAL **≠** global Cursor REAL authorization · M5 architecture ADOPTED **≠** M6 started · M4 CLOSED **≠** runtime v3 ADOPTED · one bounded successful REAL completion **≠** global Cursor REAL safety for arbitrary capabilities/tasks · strict runtime read-only proof applies to the **demonstrated M4 bounded path**, not arbitrary future Cursor tasks · timeout 60000 **proven sufficient for demonstrated M4 bounded RO path** **≠** universal Cursor REAL timeout policy · FIRST REAL historical timeout **≠** timeout proven defective · `CURSOR_REAL_TIMEOUT_POLICY` OPEN / NON-BLOCKING **unchanged by M5 architecture decision** **≠** M4/M5 reopened · technical launch journal **≠** Product Store · Critical Ack/Auth.js future IAM **≠** required retroactively for M4 first low-risk RO path · v3 global baseline **NOT PROMOTED** · runtime v3 **NON ADOPTED** · ≠ full OA durable |
+| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` · **M4 Architecture docs :** PR #343 / merge `e974b7306f7400249c31399fd2890d5817833dbf` · **M4 Delivery :** PR #344 / head `f7270b21ccdbcf1cd543879e7c4120d87b874479` / merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI SFIA Studio **#172** SUCCESS (same head `f7270b21` after Morris-authorized rerun ; initial T7-C08 Class C / M4 causality not established — diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` ; no code change between failure and success) · **M4 post-Delivery Roadmap :** PR #345 / merge `3575c8863d8a13b610dbfde96a33426a620b2c56` · **M4 pre-reproof bounding :** PR #346 / head `8900cd06be195b2dd9fa154a7153608fdde6f9a3` / merge `fc7e20aaeb5153b4d73c1809f865e361f00e1b34` · CI SFIA Studio **#176** SUCCESS · ZERO REAL in bounding integration · **M4 post-pre-reproof Roadmap :** PR #347 / merge `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` · CI SFIA Studio **#178** SUCCESS · **M4 GOVERNED REAL COMPLETION PROOF** handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · **M4 closure Roadmap :** PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · **M5 Entry Qualification** handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · **M5 Delivery (Option B + W1) :** PR #350 / head `17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11` / merge `8f753218e4fff7d68d78c1d57e9c3e8fb7e60943` · CI SFIA Studio **#184** SUCCESS · post-merge CI **#185** SUCCESS · **M5 UI/Nora durable rehydrate :** PR #351 / head `ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7` / merge `d8961f1d85a98b5d4185f007f16ddac209e2e557` · CI SFIA Studio **#186** SUCCESS · post-merge CI **#187** SUCCESS · M5 exit re-evaluation handoff `54b0f5b43a50861c26226aa3ffc06460f8ffbafe` · blob `131c85172bbd6370a3edcd71347a64932c9303ab` · M5 EXIT PROOF **SATISFIED ON MAIN** · **M5 capitalization / Roadmap sync :** PR #352 / head `c26824c602ec041cb1d40e9078191c0f1cde4e95` / merge `3467ecdf74ac2010c45f34545fb8684563dea547` · CI SFIA Studio PR run **#31875337665** SUCCESS · post-merge CI run **#31875621317** SUCCESS · post-merge handoff `0121e184c936f8dc73ffe80e20d43027fec495d7` · blob `4c293ae07a0d516b16d6dd2d4087d3e25858e275` · GO Morris **ACCEPT M5 EXIT PROOF + CLOSE M5 — KEEP M5-C TECHNICAL JOURNAL — ZERO REAL — NO M6 EXECUTION — RUNTIME V3 NON ADOPTED — NO BRANCH DELETE** · M5 EXIT PROOF **ACCEPTED BY MORRIS** · M5 **CLOSED** · User wording **« ok go pour la modification »** · governed interpretation **ALIGN M5 CLOSURE ROADMAP WITH PRE-M6 USER JOURNEY / UX BASELINE TRAJECTORY — KEEP M5 CLOSED — KEEP M5-C — NO UX DESIGN EXECUTION YET — NO FIGMA ACTION YET — NO UI DELIVERY — NO M6 — ZERO REAL — NO PROJECT GIT WRITE** · PRE-M6 USER JOURNEY / UX BASELINE = **TRAJECTORY SEQUENCING DECIDED BY MORRIS / WORK NOT STARTED / NOT AUTHORIZED FOR DELIVERY** |
+| **Sources** | Git `main` @ `3467ecd…` · PR #337/#339/#340/#341/#342/#343/#344/#345/#346/#347/#348/#349/#350/#351/#352 · CI #158/#162/#166/#172/#176/#178/#184/#185/#186/#187 · PR #352 CI run #31875337665 / post-merge #31875621317 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · M4 CI diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` · FIRST REAL handoff `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` · timeout diagnosis handoff `797daeccfa2ec445a1ecaf10f042de635cb1fe21` · pre-reproof bounding handoffs `3c56cb29367268231c1db26b4de7af5cfe0ef499` / `9ffce8cc4a78f15af322d4fb4aab8bf63896ff6c` · final M4 governed REAL completion handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · GO Morris **M4 Delivery** / **MERGE PR #344** · GO Morris **FIRST M4 CURSOR REAL** · GO Morris **DIAGNOSE TIMEOUT** · GO Morris **PRE-REPROOF BOUNDING** / **MERGE PR #346** · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · M5 Entry Qualification handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · M4 Product path on main `projects/sfia-studio/app/**` |
+| **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 exit proof **SATISFIED** · M4 exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** · M5 Entry Qualification **COMPLETE** · M5 architecture trajectory **ADOPTED BY MORRIS** · M5 Delivery **IMPLEMENTED ON MAIN** (PR #350) · M5 UI rehydrate **IMPLEMENTED ON MAIN** (PR #351) · M5 technical/functional exit proof **SATISFIED ON MAIN** · M5 EXIT PROOF **ACCEPTED BY MORRIS** · M5 **CLOSED** · M5 CLOSED **≠** M6 AUTHORIZED · M5 CLOSED **≠** M6 STARTED · M5 CLOSED **≠** runtime v3 ADOPTED · M5 CLOSED **≠** global v3 baseline promoted · M5 CLOSED **≠** M5-C retired · M5 exit accepted **≠** global Cursor REAL authorization · M5 CLOSED future **≠** M6 automatically authorized · Pre-M6 trajectory decided **≠** Pre-M6 UX qualification executed · Pre-M6 trajectory decided **≠** Figma authorized · Figma future contract **≠** approved design · new UX baseline **≠** runtime rewrite · existing UI not canonical **≠** existing UI automatically deleted · existing UI audit **≠** REPLACE decisions already consumed · M1→M5 runtime KEEP **≠** all runtime complete · Pre-M6 user proof **≠** runtime v3 ADOPTED · M6 after Pre-M6 **≠** M6 automatically authorized · Validated UX decisions in framing **30/37** (CC-D01) prevail over older candidate wording in framing **11** · M5-A OPTION B **IMPLEMENTED ON MAIN** · M5-B W1 **IMPLEMENTED ON MAIN** · M5-B W1 factual write-back **≠** Recommendation becomes Decision · Recommendation **≠** HumanDecision · Recommendation **≠** gate consumed · Recommendation **≠** ExecutionAuthority · LPS factual evidence link **≠** structural trajectory validation · readback **≠** execution · remount UI visibility **≠** automatic next-cycle launch · M5-C KEEP TEMPORARY WITH EXIT **≠** technical journal retired · durable Product Attempt **≠** technical M4 journal automatically obsolete · M5 implementation **≠** runtime v3 ADOPTED · M5 implementation **≠** global v3 baseline promoted · M5 ZERO REAL **≠** global Cursor REAL authorization · M5 architecture ADOPTED **≠** M6 started · M4 CLOSED **≠** runtime v3 ADOPTED · one bounded successful REAL completion **≠** global Cursor REAL safety for arbitrary capabilities/tasks · strict runtime read-only proof applies to the **demonstrated M4 bounded path**, not arbitrary future Cursor tasks · timeout 60000 **proven sufficient for demonstrated M4 bounded RO path** **≠** universal Cursor REAL timeout policy · FIRST REAL historical timeout **≠** timeout proven defective · `CURSOR_REAL_TIMEOUT_POLICY` OPEN / NON-BLOCKING **unchanged by M5 architecture decision** **≠** M4/M5 reopened · technical launch journal **≠** Product Store · Critical Ack/Auth.js future IAM **≠** required retroactively for M4 first low-risk RO path · v3 global baseline **NOT PROMOTED** · runtime v3 **NON ADOPTED** · ≠ full OA durable |

 ## B1. Nature du document

@@ -26,7 +26,7 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).

 ## B3. Point de départ factuel

-### Sur main (`d8961f1d85a98b5d4185f007f16ddac209e2e557`)
+### Sur main (`3467ecdf74ac2010c45f34545fb8684563dea547`)

 | Capacité | État observé |
 | --- | --- |
@@ -50,14 +50,16 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).
 | T-A5 REAL (Nora/Studio) | **IMPLEMENTED ON MAIN / DEFAULT OFF** — specialized OA-owned boundary ; fixture `externalEffects:false` **preserved** ; gateway deterministic bounding **ON MAIN** (`--mode ask` + README.md markers) ; historical governed REAL launches = **2** ; successful governed REAL completions = **1** |
 | Cursor REAL depuis Nora | **2 historical governed attempts** — Run1 FIRST REAL (`xat:m4-first-real-001`) launch **PROVEN** / completion **NOT** (timeout ~60s) · Run2 final reproof (`xat:m4-reproof-86b5ecb05474`) completion **PROVEN** (~15.7s / `M4_READ_ONLY_OK`) · identities never reused across runs |
 | Gate D | **IMPLEMENTED ON MAIN** (GD-1) · consumed **once per governed REAL** historically (Run1 + Run2) · future REAL still requires **fresh** Gate D + Morris GO |
-| Technical CREATED/LAUNCHED frontier | **IMPLEMENTED ON MAIN** · **TEMPORARY WITH EXIT** · **M5-C KEEP TEMPORARY WITH EXIT** (unchanged after M5 Delivery) · ≠ Product Attempt Store · REAL TRACE **PROVEN** on both historical governed runs · **OWNER NOT EXPLICITLY RECORDED** |
+| Technical CREATED/LAUNCHED frontier | **IMPLEMENTED ON MAIN** · **TEMPORARY WITH EXIT** · **M5-C KEEP TEMPORARY WITH EXIT** (unchanged after M5 CLOSED) · ≠ Product Attempt Store · REAL TRACE **PROVEN** on both historical governed runs · **OWNER NOT EXPLICITLY RECORDED** (**POST-M5 GOVERNANCE DEBT / DECISION REQUIRED**) |
 | Bounded RO AgentCapability | **IMPLEMENTED ON MAIN** · static / deny-by-default · KEEP · **STRICT BOUNDED RUNTIME TOOL-SURFACE PROVEN FOR FINAL M4 REPROOF** (Read=1 README only ; Shell/Glob/Grep/write=0) — **≠** “Cursor is globally read-only” |
 | `CURSOR_REAL_TIMEOUT_POLICY` | **OPEN / NON-BLOCKING POST-M4 RESERVE** — current product timeout **60000** = **KEEP FOR NOW** · proven sufficient for demonstrated M4 bounded RO path · **NOT** universal policy · **NOT** proven defective |
-| M5 architecture trajectory | **ADOPTED BY MORRIS + IMPLEMENTED ON MAIN** — Entry Qualification **COMPLETE** · Delivery PR #350 **MERGED** · UI rehydrate PR #351 **MERGED** · exit proof **SATISFIED ON MAIN** · closure **PENDING MORRIS** |
+| M5 architecture trajectory | **ADOPTED BY MORRIS + IMPLEMENTED ON MAIN** — Entry Qualification **COMPLETE** · Delivery PR #350 **MERGED** · UI rehydrate PR #351 **MERGED** · capitalization PR #352 **MERGED** · exit proof **ACCEPTED BY MORRIS** · M5 **CLOSED** |
 | M5-A Persistence boundary | **OPTION B ADOPTED + IMPLEMENTED ON MAIN** — Product SQLite OA backbone for **ExecutionAttempt + Evidence + ReviewBundle** behind existing ports/domain/use cases (PR #350) |
 | M5-B Nora/LPS write-back | **W1 ADOPTED + IMPLEMENTED ON MAIN** — factual LPS `evidenceIds`/`reviewBundleIds` append · provenance `actor:sfia-studio-system-factual-writer` (role system / authority none) · Recommendation remains Recommendation (PR #350) |
-| M5-C Technical journal | **KEEP TEMPORARY WITH EXIT** — unchanged · journal still present and distinct from Product Attempt Store · retirement needs safety equivalence + dedicated Morris GO · owner **NOT EXPLICITLY RECORDED** |
-| NEXT IMMEDIATE GATE | **MORRIS ACCEPT M5 EXIT PROOF + CLOSE M5** — **PENDING** · after closure only, NEXT CAPABILITY = **M6** (NOT STARTED / NOT AUTHORIZED) |
+| M5-C Technical journal | **KEEP TEMPORARY WITH EXIT** — unchanged after M5 CLOSED · journal still present and distinct from Product Attempt Store · retirement needs safety equivalence + dedicated Morris GO · owner **NOT EXPLICITLY RECORDED** (**POST-M5 GOVERNANCE DEBT / DECISION REQUIRED**) |
+| NEXT CONVERGENCE CAPABILITY | **PRE-M6 USER JOURNEY / UX BASELINE** — **TRAJECTORY DECIDED BY MORRIS** · **WORK NOT STARTED** · **NOT AUTHORIZED FOR DELIVERY** |
+| NEXT IMMEDIATE GATE | **PRE-M6 USER JOURNEY / UX BASELINE QUALIFICATION — DISTINCT MORRIS GO REQUIRED** · **≠** Pre-M6 UX executed · **≠** Figma authorized · **≠** UI Delivery authorized |
+| M6 (sequenced after Pre-M6) | **NOT STARTED / NOT AUTHORIZED** — sequenced **AFTER** successful Pre-M6 user journey / UX validation + distinct Morris GO |

 ### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`) — historique / harvest

@@ -85,7 +87,7 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | T-A4 ExecutionContract | Product SQLite + M3 PREPARE truthful + Cursor projection PREPARE-only **ON MAIN** (PR #341) | **COMPLETE** (M3) / **KEEP** backbone | Durable on main ; no Attempt/REAL ; fixture path historique/test conservé |
 | T-A5 Attempt domain + ports / fixture adapter port | F3 fixture adapter · `ExecutionAdapterPort.externalEffects:false` · PR #344 + Product SQLite Attempt (PR #350) | **KEEP** domain/ports/lifecycle + **KEEP** zero-effect port + **COMPLETE M5 Attempt Product path** | StartExecution remains sole authority sequencer ; fixture port intact (D-M4-01) ; M5-A durable Attempt **IMPLEMENTED ON MAIN** |
 | T-A5 specialized REAL boundary | PR #344 + PR #346 / main `2d1361ee…` | **COMPLETE M4 / KEEP** (+ gateway bounding) | OA-owned REAL boundary **implemented, default OFF** — no OA→OPS1 runtime coupling — TWO historical governed launches · ONE successful completion under deterministic `--mode ask` / README bounding · M4 CLOSED |
-| T-A5 launch journal (CREATED/LAUNCHED) | PR #344 / main · exercised on both REAL runs | **KEEP / TEMPORARY WITH EXIT — M5-C** | Technical safety journal ; ≠ Product Attempt Store ; REAL TRACE PROVEN ; **still not retired after M5 Delivery** ; future exit → safety equivalence + dedicated Morris GO · owner **NOT EXPLICITLY RECORDED** |
+| T-A5 launch journal (CREATED/LAUNCHED) | PR #344 / main · exercised on both REAL runs | **KEEP / TEMPORARY WITH EXIT — M5-C** | Technical safety journal ; ≠ Product Attempt Store ; REAL TRACE PROVEN ; **still not retired after M5 CLOSED** ; future exit → safety equivalence + dedicated Morris GO · owner **NOT EXPLICITLY RECORDED** (**POST-M5 GOVERNANCE DEBT / DECISION REQUIRED**) |
 | AgentCapability REAL RO profile | PR #344 / `m4BoundedReadOnlyCursorAgent` · KEEP | **COMPLETE M4 / KEEP** | Bounded RO profile exercised ; final reproof proved strict bounded tool-surface for that path ; AgentCapability **unchanged** through bounding/closure |
 | Product timeout 60000 | product default / both REAL runs | **KEEP CURRENT VALUE FOR NOW** + **OPEN / NON-BLOCKING POST-M4 RESERVE** (`CURSOR_REAL_TIMEOUT_POLICY`) | Sufficient for demonstrated M4 bounded RO completion (~15.7s) ; FIRST REAL timeout historical ≠ proven defect ; **no** universal timeout policy selected |
 | T-A6 Evidence/ReviewBundle domain + ports + use cases | F3 ingest + Product SQLite Evidence/RB (PR #350) + Panel remount consumer (PR #351) | **KEEP** domain/ports/use cases · **COMPLETE M5 Product path** | Durable Evidence/RB ON MAIN ; W1 LPS factual link **IMPLEMENTED** ; Nora UI remount visibility **PROVEN** |
@@ -120,7 +122,7 @@ Légende : classifications = **recommandations de convergence** jusqu’à valid
 | Cursor projection canonique | **CLOSED ON MAIN — M3 PREPARE-only** (`executionAllowed=false`) | future elevated REAL classes / M5+ |
 | Cursor REAL behind T-A5 | **IMPLEMENTATION MERGED / DEFAULT OFF** · M4 governed completion **PROVEN** (final reproof) · M4 **CLOSED** | future REAL requires distinct Morris GO (not M4 reopen) |
 | REAL specialized adapter boundary | **CLOSED ON MAIN — PR #344** (+ gateway bounding PR #346) — implemented, default OFF | KEEP |
-| durable launch frontier (CREATED/LAUNCHED) | **IMPLEMENTED ON MAIN — PR #344** — TEMPORARY WITH EXIT · **M5-C KEEP** unchanged after M5 Delivery · REAL TRACE **PROVEN** (both runs) | Future journal retirement gate (safety equivalence + dedicated Morris GO) |
+| durable launch frontier (CREATED/LAUNCHED) | **IMPLEMENTED ON MAIN — PR #344** — TEMPORARY WITH EXIT · **M5-C KEEP** unchanged after M5 CLOSED · REAL TRACE **PROVEN** (both runs) · owner **NOT EXPLICITLY RECORDED** (POST-M5 GOVERNANCE DEBT) | Future journal retirement gate (safety equivalence + dedicated Morris GO) |
 | Gate D durable grant | **IMPLEMENTED ON MAIN** (GD-1) · consumed once per historical governed REAL · **not reusable** | fresh Gate D for any future REAL |
 | bounded REAL AgentCapability RO | **IMPLEMENTED ON MAIN** · final reproof **STRICT BOUNDED TOOL-SURFACE PROVEN** for demonstrated path | KEEP ; future capabilities separate |
 | governed REAL completion (M4) | **PROVEN** — final reproof PASS (handoff `1123a30f…`) · exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** | — |
@@ -210,23 +212,42 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | **M5-B** | Nora/LPS write-back **W1** — automatic factual LPS link update allowed for Evidence/ReviewBundle refs ; Recommendation remains Recommendation ; **no** automatic HumanDecision / gate consumption / executionAuthority / structural trajectory validation | **ADOPTED** · **IMPLEMENTED ON MAIN** (PR #350) |
 | **M5-C** | Technical launch journal disposition **KEEP TEMPORARY WITH EXIT** ; retirement later needs safety equivalence + dedicated Morris GO | **ADOPTED DISPOSITION — UNCHANGED** |

-### M5 Delivery / UI / exit — CONSUMED EVIDENCE (≠ closure)
+### M5 Delivery / UI / exit / capitalization — CONSUMED

 - M5 Delivery GO historically **CONSUMED** · PR #350 **MERGED** @ `8f753218…` · CI #184/#185 SUCCESS
 - M5 UI/Nora durable rehydrate · PR #351 **MERGED** @ `d8961f1d…` · CI #186/#187 SUCCESS
 - M5 technical/functional exit proof · handoff `54b0f5b43a50861c26226aa3ffc06460f8ffbafe` · **SATISFIED ON MAIN** (M5-01…M5-34)
-- **M5 CLOSED = NO** — no GO `ACCEPT M5 EXIT PROOF + CLOSE M5` consumed
+- M5 capitalization Roadmap sync · PR #352 **MERGED** @ `3467ecd…` · CI run #31875337665 SUCCESS · post-merge #31875621317 SUCCESS · handoff `0121e184…`
+
+### M5 closure gate — CONSUMED
+
+- GO Morris **ACCEPT M5 EXIT PROOF + CLOSE M5 — KEEP M5-C TECHNICAL JOURNAL — ZERO REAL — NO M6 EXECUTION — RUNTIME V3 NON ADOPTED — NO BRANCH DELETE**
+- M5 EXIT PROOF = **ACCEPTED BY MORRIS**
+- M5 = **CLOSED**
+- Evidence: M5-01…M5-34 SATISFIED ON MAIN · exit handoff `54b0f5b4…` · capitalization PR #352 · post-merge handoff `0121e184…` · explicit Morris GO this cycle
+- This is a **HumanDecision** Morris (not a Recommendation)
+
+### Pre-M6 trajectory sequencing — CONSUMED DECISION
+
+- User wording : **« ok go pour la modification »**
+- Governed interpretation : **ALIGN M5 CLOSURE ROADMAP WITH PRE-M6 USER JOURNEY / UX BASELINE TRAJECTORY** (KEEP M5 CLOSED · KEEP M5-C · NO UX DESIGN / FIGMA / UI DELIVERY / M6 in this documentary amendment)
+- Decision : **PRE-M6 USER JOURNEY / UX BASELINE MUST PRECEDE M6 ENTRY**
+- Status : **TRAJECTORY SEQUENCING DECIDED BY MORRIS** · **WORK NOT STARTED** · **NOT AUTHORIZED FOR DELIVERY**
+- This is a **HumanDecision** Morris sequencing choice (not a Recommendation left candidate)

 ### Décisions / gates toujours ouverts

-1. **MORRIS ACCEPT M5 EXIT PROOF + CLOSE M5** — **PENDING** (NEXT IMMEDIATE GATE)
-2. Technical launch journal retirement — future dedicated gate (M5-C KEEP)
-3. **M6 — Boucle projet complète** — **NOT STARTED / NOT AUTHORIZED** (requires M5 CLOSED + future Morris GO)
-4. Critical Ack / Auth.js promotion for future N2/N3 / IAM — **Decision Required** (separate)
-5. Disposition OPS1 / D1 / execution-run — **Decision Required**
-6. runtime v3 adoption — **NOT AUTHORIZED**
-7. **`CURSOR_REAL_TIMEOUT_POLICY`** — **OPEN / NON-BLOCKING POST-M4 RESERVE** — current 60000 **KEEP FOR NOW** · unchanged by M5 · no structural timeout decision selected
-8. `confirmAndExecuteF3Fixture` optional `productDurablePath` fallback — **NON-BLOCKING HARDENING RESERVE**
+1. **PRE-M6 USER JOURNEY / UX BASELINE QUALIFICATION — DISTINCT MORRIS GO REQUIRED** — NEXT IMMEDIATE GATE · **≠** Pre-M6 UX executed · **≠** Figma authorized · **≠** UI Delivery authorized
+2. Technical launch journal retirement — future dedicated gate (M5-C **KEEP TEMPORARY WITH EXIT**)
+3. M5-C journal owner — **OWNER NOT EXPLICITLY RECORDED** · **POST-M5 GOVERNANCE DEBT / DECISION REQUIRED** (does **not** reopen M5 CLOSED; does **not** authorize retirement)
+4. **M6 ENTRY QUALIFICATION** — future only **after** Pre-M6 user journey / UX functional validation · still requires distinct Morris GO · **≠** authorized now
+5. **M6 — Boucle projet complète** — **NOT STARTED / NOT AUTHORIZED** (M5 CLOSED SATISFIED · Pre-M6 **REQUIRED BY MORRIS SEQUENCING** · Pre-M6 **NOT YET SATISFIED**)
+6. Critical Ack / Auth.js promotion for future N2/N3 / IAM — **Decision Required** (separate)
+7. Disposition OPS1 / D1 / execution-run — **Decision Required**
+8. runtime v3 adoption — **NOT AUTHORIZED**
+9. **`CURSOR_REAL_TIMEOUT_POLICY`** — **OPEN / NON-BLOCKING POST-M4 RESERVE** — current 60000 **KEEP FOR NOW** · unchanged by Pre-M6 sequencing · no structural timeout decision selected
+10. `confirmAndExecuteF3Fixture` optional `productDurablePath` fallback — **NON-BLOCKING HARDENING RESERVE**
+11. Existing Studio UI / historical POC surfaces — **TO QUALIFY DURING PRE-M6 UX AUDIT** (KEEP/ADAPT/HARVEST/REPLACE/FREEZE/RETIRE LATER) · **no component-level disposition in this cycle**

 ### Décisions / gates historiques encore listés (non tranchés comme promotion)

@@ -312,7 +333,7 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | **Merge** | **CLOSED** — PR #341 MERGED @ `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS |
 | **Exit evidence** | **EXIT PROOF SATISFIED ON MAIN** |
 | **Preuve e2e** | GO → HD durable + LPS N+1 · restart → PREPARE sans Proposal · ExecutionContract durable · fingerprint persisted=recomputed=projection · unresolved semantics fail-closed · Cursor PREPARE-only · authority adversarial PASS · local 1656 / 131 / 0 · CI #166 SUCCESS · merge #341 |
-| **Next** | M5 — exit proof **SATISFIED ON MAIN** · closure **PENDING MORRIS** *(M4 CLOSED)* |
+| **Next** | M5 — exit proof **ACCEPTED BY MORRIS** · **CLOSED** *(M4 CLOSED)* |
 | **Statut** | **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** |

 ### Milestone 4 — Première exécution Cursor REAL bornée depuis Studio
@@ -329,7 +350,7 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | **Dépendances** | M3 — **SATISFIED** · D-M4-01→05 — **SATISFIED** · Delivery — **SATISFIED** · FIRST REAL / diagnosis / bounding / completion proof / exit acceptance — **CONSUMED** |
 | **Preuve de sortie M4** | **SATISFIED / ACCEPTED BY MORRIS** — exact HD/EC · bounded agent · Gate D single-use · governed Cursor REAL · CREATED/LAUNCHED · no duplicate launch · no fixture fallback · isolated pinned workspace · bounded RO completion · fail-closed safety · final completion PASS |
 | **Statut** | **M4 EXIT PROOF ACCEPTED BY MORRIS — CLOSED** |
-| **Next** | M5 exit proof **SATISFIED ON MAIN** · **NEXT IMMEDIATE GATE = MORRIS ACCEPT M5 EXIT PROOF + CLOSE M5** |
+| **Next** | M5 exit proof **ACCEPTED BY MORRIS** · M5 **CLOSED** · **NEXT = PRE-M6 USER JOURNEY / UX BASELINE** (then M6) |

 ### Milestone 5 — Retour de preuve + analyse Nora

@@ -342,14 +363,36 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | **Architecture** | **ADOPTED BY MORRIS + IMPLEMENTED ON MAIN** — Entry Qualification **COMPLETE** (handoff `63f41e3…`) · Delivery PR #350 · UI PR #351 |
 | **M5-A** | **OPTION B ADOPTED + IMPLEMENTED ON MAIN** — Product SQLite Attempt + Evidence + ReviewBundle behind existing ports (PR #350) |
 | **M5-B** | **W1 ADOPTED + IMPLEMENTED ON MAIN** — factual LPS link update + Recommendation separate · system factual writer (PR #350) |
-| **M5-C** | **KEEP TEMPORARY WITH EXIT** — journal still present ; not retired ; owner **NOT EXPLICITLY RECORDED** |
+| **M5-C** | **KEEP TEMPORARY WITH EXIT** — journal still present ; not retired ; owner **NOT EXPLICITLY RECORDED** (**POST-M5 GOVERNANCE DEBT / DECISION REQUIRED**) |
 | **Actifs** | domain/ports/use cases **KEEP** · Product SQLite Attempt/Evidence/RB **COMPLETE** · LPS **KEEP** + W1 append **COMPLETE** · Nora/F3 durable remount consumer **COMPLETE** · launch journal **KEEP TEMPORARY WITH EXIT** |
-| **Preuve e2e** | **SATISFIED ON MAIN** — M5-01…M5-34 · process A→B restart · remount UI M5-27/M5-28 · anti-claims · ZERO unauthorized REAL · CI #184/#185/#186/#187 SUCCESS |
-| **Intégration** | PR #350 merge `8f753218…` · PR #351 merge `d8961f1d…` · exit handoff `54b0f5b4…` |
-| **Dépendances** | M4 — **SATISFIED / CLOSED** · Architecture — **CONSUMED** · Delivery — **CONSUMED / MERGED** · UI rehydrate — **CONSUMED / MERGED** |
-| **Statut** | **M5 EXIT PROOF SATISFIED ON MAIN — CLOSURE DECISION PENDING MORRIS** |
-| **Next immediate gate** | **MORRIS ACCEPT M5 EXIT PROOF + CLOSE M5** |
-| **Next capability after M5 closure** | **M6** — NOT STARTED / NOT AUTHORIZED |
+| **Technical / Functional Exit** | **SATISFIED ON MAIN** — M5-01…M5-34 · process A→B restart · remount UI M5-27/M5-28 · anti-claims · ZERO unauthorized REAL · CI #184/#185/#186/#187 SUCCESS |
+| **Exit Proof** | **ACCEPTED BY MORRIS** |
+| **Intégration** | PR #350 merge `8f753218…` · PR #351 merge `d8961f1d…` · capitalization PR #352 merge `3467ecd…` · exit handoff `54b0f5b4…` · post-merge handoff `0121e184…` |
+| **Dépendances** | M4 — **SATISFIED / CLOSED** · Architecture — **CONSUMED** · Delivery — **CONSUMED / MERGED** · UI rehydrate — **CONSUMED / MERGED** · Capitalization Roadmap — **CONSUMED / MERGED** · Closure gate — **CONSUMED** |
+| **Statut** | **M5 EXIT PROOF ACCEPTED BY MORRIS — CLOSED** |
+| **Next convergence capability** | **PRE-M6 USER JOURNEY / UX BASELINE** — **WORK NOT STARTED** · **NOT AUTHORIZED FOR DELIVERY** |
+| **Next immediate gate** | **PRE-M6 USER JOURNEY / UX BASELINE QUALIFICATION — DISTINCT MORRIS GO REQUIRED** |
+| **After Pre-M6** | **M6 ENTRY QUALIFICATION** — still **NOT STARTED / NOT AUTHORIZED** without distinct Morris GO |
+
+
+### Pre-M6 Convergence Gate — User Journey / UX Baseline
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | PRE-M6 *(convergence gate — **not** Milestone 5.5 · **not** M6)* |
+| **Capacité principale** | **V3-F05** — chaîne conversation → décision → exécution |
+| **Support** | V3-F02 LPS · V3-F14 Artifact Completeness · V3-F15 maturity / anti-claims |
+| **Purpose** | Establish the first clean SFIA Studio product UX baseline **over** the proven M1→M5 runtime — prove that already-built capabilities form a coherent, usable product journey |
+| **Principle** | **RESTART UX / INFORMATION ARCHITECTURE FROM THE CANONICAL USER JOURNEY** · **KEEP M1→M5 RUNTIME / DOMAIN / APPLICATION BACKBONE** · UI actuelle **≠** baseline imposée · historical POC / transitory screens **not** reused by default · selective harvest only after explicit asset audit |
+| **UX doctrine authority** | Validated decisions in framing **30/37** prevail (incl. **CC-D01** : conversation dominante + panneau vivant + confirmations structurantes · **pas** de stepper principal · **pas** de workspace multi-panneaux MVP) · older candidate wording in framing **11** (incl. « Cockpit avant chat ») is **supporting/historical**, not superior authority |
+| **Inputs / KEEP (runtime)** | M1→M5 runtime backbone · Product SQLite · Project/LPS · CycleInstance · HumanDecision · ExecutionContract · ExecutionAttempt · Evidence · ReviewBundle · existing application/domain ports/use cases |
+| **Existing UI assets** | **TO QUALIFY DURING PRE-M6 UX AUDIT** — candidate dispositions KEEP / ADAPT / HARVEST / REPLACE / FREEZE / RETIRE LATER · **no** component-level disposition consumed in this Roadmap cycle · **no** automatic deletion |
+| **Future work sequence (trajectory only — none authorized here)** | 1. Pre-M6 User Journey Qualification · 2. UX / Functional Information Architecture · 3. Figma Visual Contract · 4. Morris UX Validation · 5. UI Delivery over existing M1→M5 runtime · 6. Browser E2E functional proof · 7. Runtime visual proof / Figma comparison · 8. Morris UAT · 9. Gap / debt / learning re-evaluation · 10. M6 Entry Qualification |
+| **Figma** | Visual contract **required before** Pre-M6 UI Delivery · **action = 0** in this cycle · no file / frame / design decision claimed |
+| **Future proof expected** | Functional browser E2E through M1→M5 user journey · runtime visual evidence · Figma/runtime comparison · Morris UAT · gaps/debt captured |
+| **Anti-scope** | No runtime rewrite · no parallel UI/business engine · no Product SQLite / domain / ports rewrite by default · no M6 architecture/delivery · no Cursor REAL |
+| **Statut** | **TRAJECTORY DECIDED BY MORRIS** · **WORK NOT STARTED** · **NOT AUTHORIZED FOR DELIVERY** |
+| **Next after Pre-M6 proof** | **M6 ENTRY QUALIFICATION** — distinct Morris GO still required |

 ### Milestone 6 — Boucle projet complète

@@ -359,7 +402,7 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | **Capacité v3** | V3-F05 + F09 replanification (base) |
 | **Outcome** | Sans copier-coller manuel : conversation → qualification → décision → exécution → preuve → analyse → update projet → next step |
 | **État actuel** | Chaîne fragmentée / process-local / fixture |
-| **Dépendances** | M1–M5 — M5 exit proof **SATISFIED ON MAIN** but **M5 CLOSED = NO** ; M6 cannot start until Morris **closes M5** and opens M6 with a distinct GO |
+| **Dépendances** | M1–M5 — **SATISFIED** · M5 — **CLOSED** · **PRE-M6 USER JOURNEY / UX BASELINE** = **REQUIRED BY MORRIS SEQUENCING DECISION** · **NOT YET SATISFIED** *(product-convergence precondition — not a new runtime dependency)* · M6 entry qualifiable only after Pre-M6 user journey / UX functional validation **and** a distinct Morris GO · **M6 = NOT STARTED / NOT AUTHORIZED** |
 | **Preuve e2e** | parcours complet redémarrage-safe documenté |
 | **Statut** | **NOT STARTED / NOT AUTHORIZED** |

@@ -392,7 +435,7 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | V3-F02 LPS | Living Project State | **PARTIAL RUNTIME** — LPS durable on main ; M5-B W1 factual Evidence/RB write-back **IMPLEMENTED ON MAIN** | M1, M5 | M1 restart · W1 append proven | conversation durability later |
 | V3-F03 DoctrinePackage | Package pin/digest | **PARTIAL RUNTIME** — digest in live `F2ContextSnapshot` **on main** (M2) ; KEEP files | M1–M2 | live digest in snapshot | — |
 | V3-F04 Épistémologie | Obs/Hyp/… | DOC + UI tags partiels (base M2) | M2, M7 | tags/stop contradictions | later depth |
-| V3-F05 Chaîne conv→exec | Boucle native | **PARTIAL RUNTIME** — through M5 exit proof **SATISFIED ON MAIN** (evidence→LPS→Nora remount) · full continuous loop still M6 | M2–M6 | e2e sans copier-coller | M5 closure pending · then M6 GO |
+| V3-F05 Chaîne conv→exec | Boucle native | **PARTIAL RUNTIME** — M1→M5 runtime chain exists and is proven technically through M5 **CLOSED** · Pre-M6 must prove it as a coherent usable product journey · full continuous loop remains later M6 | M2–M6 · Pre-M6 | Pre-M6 functional user journey / UX validation · then M6 complete continuous loop | Pre-M6 WORK NOT STARTED · M6 NOT AUTHORIZED |
 | V3-F06 Trajectory | ProjectTrajectory | Modeled / Memory cycle | M3, M7 | trajectory update post-HD | wire |
 | V3-F07 Provenance | Source hierarchy | Doctrine FS | M2, M7 | provenance on artifacts | later |
 | V3-F08 Contradictions | Stop/contradiction | DOC | M7 | UI stop + record | later |
@@ -401,7 +444,7 @@ GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f53
 | V3-F11 AgentCapability | Caps agents | Fixture + **bounded REAL RO KEEP** · M4 scope exercised successfully on final reproof (strict bounded tool-surface proven for that path) | M4 | M4 CLOSED for this capability class | future AgentCapability classes separate |
 | V3-F12 Réversibilité | Action policy | Gate D + CREATED/LAUNCHED + spawn ACK/completion controls **demonstrated for M4** · Ack **deferred for first RO** (D-M4-05) | M3–M4 | M4 CLOSED · Ack for elevated classes later | future IAM / N2/N3 |
 | V3-F13 Learning | REX contrôlé | DOC / capitalisation · durable Evidence/RB learning base **ON MAIN** · Cycle 15 capitalization/REX recorded in review handoff (not method promotion) | M5, M7 | learning from Evidence | later depth / method promotion separate |
-| V3-F14 Artifact Completeness | Completeness gates | Attempt/Evidence/RB durable **ON MAIN** · remount UI visibility **PROVEN** · M5-01…34 **SATISFIED ON MAIN** | M5 | completeness + restart-safe artifacts | M5 closure pending Morris |
+| V3-F14 Artifact Completeness | Completeness gates | Attempt/Evidence/RB durable **ON MAIN** · remount UI visibility **PROVEN** · M5-01…34 **SATISFIED ON MAIN** · M5 **CLOSED** | M5 · Pre-M6 | completeness + restart-safe artifacts · Pre-M6 UX usability proof | Pre-M6 before M6 |
 | V3-F15 Maturity | Distributed maturity | Honesty rails T-A7 · runtime v3 **NON ADOPTED** · no maturity promotion from M5 architecture ADOPT | M8 | anti-claim maturity | no false READY |

 ## B10. Chemin critique explicite
@@ -425,8 +468,16 @@ CRITICAL PATH:
   → M5 DELIVERY Option B + W1 — MERGED (PR #350 @ 8f753218…) — CI #184/#185 SUCCESS
   → M5 UI/Nora durable rehydrate — MERGED (PR #351 @ d8961f1d…) — CI #186/#187 SUCCESS
   → M5 EXIT PROOF — SATISFIED ON MAIN (M5-01…M5-34) — handoff 54b0f5b4…
-  → M5 CLOSURE — PENDING MORRIS (ACCEPT M5 EXIT PROOF + CLOSE M5)
-  → NEXT CAPABILITY AFTER M5 CLOSURE = M6 — Boucle projet complète
+  → M5 CAPITALIZATION ROADMAP — MERGED (PR #352 @ 3467ecd…) — CI #31875337665 / post-merge #31875621317 SUCCESS
+  → M5 EXIT ACCEPTANCE + CLOSURE — CONSUMED BY MORRIS (ACCEPT M5 EXIT PROOF + CLOSE M5 · KEEP M5-C · ZERO REAL · NO M6 EXECUTION)
+  → M5 — CLOSED
+  → PRE-M6 USER JOURNEY / UX BASELINE — TRAJECTORY DECIDED / WORK NOT STARTED
+  → PRE-M6 QUALIFICATION
+  → UX / INFORMATION ARCHITECTURE
+  → FIGMA VISUAL CONTRACT
+  → UI DELIVERY OVER M1→M5 RUNTIME
+  → FUNCTIONAL E2E + VISUAL PROOF + MORRIS UAT
+  → M6 ENTRY QUALIFICATION
   → M6 — NOT STARTED / NOT AUTHORIZED

 M4 ARCHITECTURE GATE: CLOSED (D-M4-01→05)
@@ -447,21 +498,26 @@ M5 ENTRY QUALIFICATION: COMPLETE
 M5 ARCHITECTURE GATE: CONSUMED / ADOPTED BY MORRIS
 M5 DELIVERY: CONSUMED / MERGED (PR #350)
 M5 UI REHYDRATE: CONSUMED / MERGED (PR #351)
-M5 EXIT PROOF: SATISFIED ON MAIN (M5-01…M5-34)
-M5 CLOSED: NO — CLOSURE DECISION PENDING MORRIS
-M5: EXIT PROOF SATISFIED ON MAIN — CLOSURE PENDING MORRIS
-
-NEXT IMMEDIATE GATE: MORRIS ACCEPT M5 EXIT PROOF + CLOSE M5
-NEXT CAPABILITY AFTER M5 CLOSURE: M6 — NOT STARTED / NOT AUTHORIZED
-
-NON-BLOCKING / FUTURE RESERVES (do NOT reopen M4 ; do NOT auto-close M5):
+M5 CAPITALIZATION ROADMAP: CONSUMED / MERGED (PR #352)
+M5 EXIT PROOF: SATISFIED ON MAIN (M5-01…M5-34) + ACCEPTED BY MORRIS
+M5 CLOSURE GATE: CONSUMED
+M5 CLOSED: YES — CLOSED BY MORRIS
+M5: EXIT PROOF ACCEPTED BY MORRIS — CLOSED
+
+PRE-M6 USER JOURNEY / UX BASELINE: TRAJECTORY DECIDED BY MORRIS — WORK NOT STARTED — NOT AUTHORIZED FOR DELIVERY
+NEXT IMMEDIATE GATE: PRE-M6 USER JOURNEY / UX BASELINE QUALIFICATION — DISTINCT MORRIS GO REQUIRED
+NEXT CONVERGENCE CAPABILITY: PRE-M6 USER JOURNEY / UX BASELINE
+M6: NOT STARTED / NOT AUTHORIZED — sequenced AFTER Pre-M6 validation + distinct Morris GO
+
+NON-BLOCKING / FUTURE RESERVES (do NOT reopen M4 ; do NOT reopen M5 CLOSED ; do NOT authorize Pre-M6 delivery / Figma / M6):
   - CURSOR_REAL_TIMEOUT_POLICY — OPEN / NON-BLOCKING
-  - technical launch journal — KEEP TEMPORARY WITH EXIT (M5-C) — OWNER NOT EXPLICITLY RECORDED
+  - technical launch journal — KEEP TEMPORARY WITH EXIT (M5-C) — OWNER NOT EXPLICITLY RECORDED — POST-M5 GOVERNANCE DEBT / DECISION REQUIRED
   - confirmAndExecuteF3Fixture optional productDurablePath fallback — NON-BLOCKING HARDENING
+  - UX CURRENT STATE — HISTORICAL / MIXED SURFACES TO AUDIT DURING PRE-M6 (not a structural debt claim without dedicated analysis)
   - future IAM / Critical Ack for elevated classes
   - Claims/Maturity durability — later
   - Confirmation process-local — later
-  - delivery branch cleanup — non-blocking (delete NOT authorized by capitalization GO)
+  - delivery/capitalization branch cleanup — non-blocking (delete NOT AUTHORIZED)

 TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
 FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth
@@ -551,7 +607,11 @@ Ne pas mettre à jour pour chaque micro-commit sans impact de trajectoire.
 - M5 Delivery : PR #350 · head `17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11` · merge `8f753218e4fff7d68d78c1d57e9c3e8fb7e60943` · CI #184/#185 SUCCESS
 - M5 UI/Nora durable rehydrate : PR #351 · head `ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7` · merge `d8961f1d85a98b5d4185f007f16ddac209e2e557` · CI #186/#187 SUCCESS
 - M5 exit re-evaluation handoff : `54b0f5b43a50861c26226aa3ffc06460f8ffbafe` · blob `131c85172bbd6370a3edcd71347a64932c9303ab`
-- M5 EXIT PROOF : **SATISFIED ON MAIN** · M5 CLOSED : **NO** (pending Morris)
-- Current main : `d8961f1d85a98b5d4185f007f16ddac209e2e557`
+- M5 capitalization Roadmap sync : PR #352 · head `c26824c602ec041cb1d40e9078191c0f1cde4e95` · merge `3467ecdf74ac2010c45f34545fb8684563dea547` · CI run #31875337665 SUCCESS · post-merge #31875621317 SUCCESS · handoff `0121e184c936f8dc73ffe80e20d43027fec495d7`
+- Morris GO : **ACCEPT M5 EXIT PROOF + CLOSE M5 — KEEP M5-C TECHNICAL JOURNAL — ZERO REAL — NO M6 EXECUTION — RUNTIME V3 NON ADOPTED — NO BRANCH DELETE**
+- M5 EXIT PROOF : **ACCEPTED BY MORRIS** · M5 : **CLOSED**
+- User wording : **« ok go pour la modification »** · governed interpretation : align M5 closure Roadmap with **PRE-M6 USER JOURNEY / UX BASELINE** before M6
+- PRE-M6 : **TRAJECTORY DECIDED / WORK NOT STARTED / NOT AUTHORIZED FOR DELIVERY** · Figma action **0** · UI Delivery **0**
+- Current main (closure sync base) : `3467ecdf74ac2010c45f34545fb8684563dea547`
 - Audit handoff historique : `sfia/review-handoff` @ `c5b417dc13fa3700787d28571e5b5abe0599ae98` / `31a5db07fba2555a59ee8c65ad76b537bbd8a73d`
 - Framing : `projects/sfia-studio/sfia-v3-framing/30`–`37` (dont `34` · DOC-DEBT-M1-01 sur `32`)

```

## 10. Pre-M6 section (complete post-edit)

```markdown
### Pre-M6 Convergence Gate — User Journey / UX Baseline

| Champ | Contenu |
| --- | --- |
| **ID** | PRE-M6 *(convergence gate — **not** Milestone 5.5 · **not** M6)* |
| **Capacité principale** | **V3-F05** — chaîne conversation → décision → exécution |
| **Support** | V3-F02 LPS · V3-F14 Artifact Completeness · V3-F15 maturity / anti-claims |
| **Purpose** | Establish the first clean SFIA Studio product UX baseline **over** the proven M1→M5 runtime — prove that already-built capabilities form a coherent, usable product journey |
| **Principle** | **RESTART UX / INFORMATION ARCHITECTURE FROM THE CANONICAL USER JOURNEY** · **KEEP M1→M5 RUNTIME / DOMAIN / APPLICATION BACKBONE** · UI actuelle **≠** baseline imposée · historical POC / transitory screens **not** reused by default · selective harvest only after explicit asset audit |
| **UX doctrine authority** | Validated decisions in framing **30/37** prevail (incl. **CC-D01** : conversation dominante + panneau vivant + confirmations structurantes · **pas** de stepper principal · **pas** de workspace multi-panneaux MVP) · older candidate wording in framing **11** (incl. « Cockpit avant chat ») is **supporting/historical**, not superior authority |
| **Inputs / KEEP (runtime)** | M1→M5 runtime backbone · Product SQLite · Project/LPS · CycleInstance · HumanDecision · ExecutionContract · ExecutionAttempt · Evidence · ReviewBundle · existing application/domain ports/use cases |
| **Existing UI assets** | **TO QUALIFY DURING PRE-M6 UX AUDIT** — candidate dispositions KEEP / ADAPT / HARVEST / REPLACE / FREEZE / RETIRE LATER · **no** component-level disposition consumed in this Roadmap cycle · **no** automatic deletion |
| **Future work sequence (trajectory only — none authorized here)** | 1. Pre-M6 User Journey Qualification · 2. UX / Functional Information Architecture · 3. Figma Visual Contract · 4. Morris UX Validation · 5. UI Delivery over existing M1→M5 runtime · 6. Browser E2E functional proof · 7. Runtime visual proof / Figma comparison · 8. Morris UAT · 9. Gap / debt / learning re-evaluation · 10. M6 Entry Qualification |
| **Figma** | Visual contract **required before** Pre-M6 UI Delivery · **action = 0** in this cycle · no file / frame / design decision claimed |
| **Future proof expected** | Functional browser E2E through M1→M5 user journey · runtime visual evidence · Figma/runtime comparison · Morris UAT · gaps/debt captured |
| **Anti-scope** | No runtime rewrite · no parallel UI/business engine · no Product SQLite / domain / ports rewrite by default · no M6 architecture/delivery · no Cursor REAL |
| **Statut** | **TRAJECTORY DECIDED BY MORRIS** · **WORK NOT STARTED** · **NOT AUTHORIZED FOR DELIVERY** |
| **Next after Pre-M6 proof** | **M6 ENTRY QUALIFICATION** — distinct Morris GO still required |


```

## 11. Pre-M6 purpose / trajectory / KEEP statements

**Purpose:** first clean SFIA Studio product UX baseline over proven M1→M5 runtime; prove already-built capabilities as a coherent usable product journey.

**Trajectory (documented only — none authorized):**
1. Pre-M6 User Journey Qualification
2. UX / Functional IA
3. Figma Visual Contract
4. Morris UX Validation
5. UI Delivery over M1→M5 runtime
6. Browser E2E functional proof
7. Runtime visual / Figma comparison
8. Morris UAT
9. Gap / debt / learning re-evaluation
10. M6 Entry Qualification

**Runtime KEEP:** Product SQLite · Project/LPS · CycleInstance · HD · EC · Attempt · Evidence · ReviewBundle · ports/use cases.

**Existing UI:** TO QUALIFY DURING PRE-M6 UX AUDIT · KEEP/ADAPT/HARVEST/REPLACE/FREEZE/RETIRE LATER · **no component-level disposition** · **no deletion**.

## 12. Status matrix after amendment

| Item | Value |
| --- | --- |
| M5 CLOSED | **YES — preserved** |
| M5-C | **KEEP TEMPORARY WITH EXIT — preserved** |
| Pre-M6 | TRAJECTORY DECIDED · WORK NOT STARTED · NOT AUTHORIZED FOR DELIVERY |
| Next immediate gate | **PRE-M6 USER JOURNEY / UX BASELINE QUALIFICATION — DISTINCT MORRIS GO REQUIRED** |
| Figma action | **0** |
| UI Delivery | **0** |
| M6 | **NOT STARTED / NOT AUTHORIZED** |
| runtime v3 | **NON ADOPTED** |

## 13. Coherence sweep

Searched: NEXT CAPABILITY · NEXT IMMEDIATE GATE · M6 ENTRY · M6 · Pre-M6 · USER JOURNEY · UX BASELINE · Figma · M5 CLOSED · M5-C · runtime v3 · conversation · cockpit · CC-D01 · WORK NOT STARTED · NOT AUTHORIZED · READY · STARTED

| Check | Result |
| --- | --- |
| current-state `NEXT CAPABILITY = M6` | **0** |
| current-state `NEXT IMMEDIATE GATE = M6 ENTRY…` | **0** |
| M6 NOT STARTED / NOT AUTHORIZED | preserved |
| M5 CLOSED | preserved |
| M5-C KEEP | preserved |
| Pre-M6 presented as executed | **0** |
| Figma done / UI Delivery authorized | **0** |
| component-level REPLACE claims | **0** |
| runtime v3 ADOPTED positive claim | **0** |
| Unresolved current-state contradictions | **0** |

## 14. git diff --check

clean

## 15. Final Git (project writes = 0)

```text
branch = docs/sfia-studio-m5-closure
HEAD = 3467ecdf74ac2010c45f34545fb8684563dea547
origin/main = 3467ecdf74ac2010c45f34545fb8684563dea547
modified = Roadmap only
stat ≈ +108 / -48 (amended from prior +62/-46)
staged = empty
project commit/push/PR/merge/branch-delete = 0
```

## 16. Safety counters

| Counter | Value |
| --- | --- |
| Roadmap files modified | **1** |
| M5 CLOSED preserved | **1** |
| M5-C disposition changed | **0** |
| Runtime / UI code / Figma / UX artifacts | **0** |
| M6 qualification/architecture/delivery | **0** |
| Cursor REAL | **0** |
| runtime v3 adoption / global promotion | **0** |
| Build Doctrine / framing / method | **0** |
| project Git writes | **0** |
| Review Handoff push | **1** L3 |

## 17. Next Morris Gate

1. ChatGPT verifies FULL diff + M5 CLOSED + M5-C KEEP + Pre-M6 before M6 + no implicit UX design + M6 closed
2. If PASS: distinct GO commit/push/Draft PR of this Roadmap
3. Then PRE-M6 USER JOURNEY / UX BASELINE QUALIFICATION (future cycle)
4. M6 only after Pre-M6 proof + new Morris GO

## 18. Verdict

```text
M5 CLOSURE PRESERVED — PRE-M6 USER JOURNEY / UX BASELINE TRAJECTORY ALIGNED IN CONVERGENCE ROADMAP — V3-F05 USER JOURNEY VALIDATION INSERTED BEFORE M6 — EXISTING M1→M5 RUNTIME KEPT — EXISTING UI SUBJECT TO FUTURE SELECTIVE AUDIT/HARVEST — NO UX DELIVERY — NO FIGMA ACTION — M6 NOT STARTED / NOT AUTHORIZED — ZERO REAL — READY FOR CHATGPT REVIEW
```

INTERDIT (not asserted): PRE-M6 UX READY · FIGMA APPROVED · UI BASELINE IMPLEMENTED · M6 READY · M6 AUTHORIZED · runtime v3 ADOPTED

---

END OF REVIEW PACK FULL — Cycle 15 M5 Closure + Pre-M6 Trajectory Alignment
