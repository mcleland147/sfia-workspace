# ChatGPT Review Pack — P5-S06 Pilot Experience Completion (FULL / HANDOFF)

## 0. Handoff routing
- Canonical remote file: `sfia-review-handoff/latest-chatgpt-review.md`
- Branch: `sfia/review-handoff`
- Purpose: give ChatGPT the **complete exploitable contents** for P5-S06 LOCAL CANDIDATE
- Product Git (commit/push/PR/merge on delivery branch / main): **NOT AUTHORIZED**
- Prior remote handoff (SUPERSEDED): P5-S05 Git Integration @ `21d706e5` — **not S06**

## 1. Date + heure
2026-10-06 09:04:25 CEST

## 2. Repo / branche / HEAD / base origin/main
- **Repo worktree:** `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` (sfia-workspace)
- **Branche delivery:** `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion`
- **HEAD:** `16a8e2fd823d75d7c59ce1fb4d55cb862d112697`
- **origin/main:** `16a8e2fd823d75d7c59ce1fb4d55cb862d112697`
- **HEAD = origin/main (expected 16a8e2fd…):** YES
- **Staged on delivery branch:** vide
- **Project Git:** NOT AUTHORIZED this pass

### git status --short (product + docs)
```
 M projects/sfia-studio/app/app/login/login-client.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
 M projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx
?? projects/sfia-studio/app/app/login/login-client.module.css
?? projects/sfia-studio/app/features/pre-m6-product-ui/newProjectConversation.ts
```

### git diff --stat (tracked product+docs only)
```
 .../sfia-studio/app/app/login/login-client.tsx     | 161 ++++----
 .../NewProjectIntentionPage.module.css             | 172 ++++++++-
 .../pre-m6-product-ui/NewProjectIntentionPage.tsx  | 413 ++++++++++-----------
 .../pre-m6-product-ui/ProjectsPage.module.css      | 126 ++++++-
 .../features/pre-m6-product-ui/ProjectsPage.tsx    | 257 ++++++++++---
 .../surfaces/ConversationSurface.tsx               |  51 ++-
 .../convergence/sfia-studio-convergence-roadmap.md |   3 +-
 ...t-product-simplification-integrated-delivery.md |  90 ++++-
 8 files changed, 869 insertions(+), 404 deletions(-)

```

**Inventory ChatGPT demanded:**
- **8 fichiers modifiés (tracked):** login-client.tsx, NewProjectIntentionPage.tsx/.module.css, ProjectsPage.tsx/.module.css, ConversationSurface.tsx, Roadmap, P5 doc
- **3 fichiers nouveaux:** `newProjectConversation.ts`, `login-client.module.css`, `p5.s06.pilotExperience.d0.test.tsx`
- **Note:** `.tmp-sfia-review/chatgpt-review.md` is local pack only — not a product file. This handoff **is** the published pack.

## 3. Décision Morris consommée
- **GO Morris P5-S06 DELIVERY = YES / CONSUMED** (2026-10-06)
- Autorise: Delivery locale S06 + tests + preuves + truth-sync factuel + **publication Review Handoff** (cette passe, demandée explicitement)
- N’autorise PAS: commit/push/PR/merge **projet** · REAL · architecture pivot · persistence · mutation Figma
- Slicing restant **S06 / S07 / S08** = ADOPTED
- P5-S05 = INTEGRATED / POST-MERGE VERIFIED via PR **#560** / CI Studio **#688** (main `16a8e2fd…`)

## 4. Sources documentaires exactes + sections
- Gouvernance: Build Doctrine · Roadmap · C1 Product Completion
- Macro: P1–P5 product-simplification
- P3 S06: §12 Projets · §13 Nouveau projet · §14 Workspace/Conversation · §28 Nora activité · §29 Auth · §30–§32 · §34.1 · §37 · §39
- P4 S06: §27A · §28–§29 · §50–§52
- Figma READ-ONLY fileKey `m4g8j0gNbEzfIuH6S9AZJF`: 63:39 · 67:39 · 190:284 · 130:3 · 190:551 · 190:253 · motion 125:*

## 5. Classification des actifs
| Actif | Class |
| --- | --- |
| ProductShell / ProductRailRecents / `--pm6-*` | KEEP |
| listProjectsRuntimeAction / createProjectRuntimeAction | KEEP |
| ProjectsPage | ADAPT |
| NewProjectIntentionPage | ADAPT / REPLACE presentation (form → conversational) |
| newProjectConversation.ts | COMPLETE (client ephemeral helpers) |
| D1 Intake | HARVEST/EVALUATE — **NOT** Product nominal |
| useProductConversation / ConversationSurface | ADAPT labels · FREEZE STOP (no Abort seam) |
| Better/Auth / github-start / allowlist | KEEP absolute |
| login-client presentation | ADAPT |
| Journal / Historique / Deliverable | FREEZE (S07) |

## 6. CURRENT → TARGET S06
| CURRENT (pre-S06 / main) | TARGET | Outcome |
| --- | --- | --- |
| Thin Projects list | Hierarchy + local search + À reprendre from facts + orientation real | **ADAPT delivered** |
| NewProject form | Pre-Project conversation + preview + CTA → createProjectRuntimeAction | **ADAPT delivered** |
| Busy labels, no STOP | START/ACTIVITY/COMPLETE from real uiState; no fake ■ | **PARTIAL** |
| Auth « Se connecter… », no mark | Split + Continuer avec GitHub + SVG mark | **ADAPT delivered** |

## 7. Contenu exploitable — synthèse
See **§10 FULL FILES / FULL DIFFS** (no truncation).

Axe A: local search; À reprendre = non archived/closed + updatedAt ≤14d; Orientation/Demander à Nora → `/studio/projects/new`; empty state; home route `/studio`.
Axe B: ephemeral client thread; deterministic absorbUserTurn; CTA unique Créer; one createProjectRuntimeAction; no auto Cycle; D1 not wired.
Axe C: data-nora-phase; labels Nora travaille / consulte sources / Réponse prête; composer stays ↑; title discloses stop unavailable.
Axe D: split narrative+card; href `/api/auth/github-start?from=`; no OAuth internals.
Axe E: labels, aria-live, disabled CTA, mobile stack.

## 8. Liste complète fichiers modifiés/créés
See inventory in §2. Scratch visual: `.tmp-sfia-review/p5-s06-visual/**` (not in product Git; hashes in §12).

## 9. Sections documentaires modifiées

### 9.1 Roadmap — FULL DIFF
```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 3b89bbcf..39344a49 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,8 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S05 CP02 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S05 CORRECTION PASS 02 — LOCAL CANDIDATE PASS** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S05** · Pass **CP02** · Morris P5-S05 CP02 GATE = **AUTHORIZED / CONSUMED** · prior Delivery+REAL/R3 + CP01 gates remain **CONSUMED** · base/main **`79a0e48a69c8dd634a8cecf972199bea8a4daeec`** · branche `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` · B1 F1 model = **SELECTED→DISPATCH CONFIG PROVEN** (`providerReturnedModel=NOT_OBSERVED`; REAL via `providerResponseId`) · B2 R3-19 = completed anti-secret observation (no stale pending) · campaign `p5-s05-r3-cp02-1791247484728` · productFP `35f31263…` (unchanged vs CP01) · harnessFP `a8049035…` (changed) · F2 Luna/low selected→configured→returned · F1 Luna/high selected→dispatched · CKC **N_A** · accounting BOUNDED (F1 modelInvocations=3) · R3 = **PASS AT TESTED SCOPE — LOCAL CANDIDATE AFTER CP02 FINAL EVIDENCE CORRECTION** · F2 EXIT PROOF PASS — LOCAL CANDIDATE · full npm test **5272 PASS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git = **NOT AUTHORIZED** · next = **ChatGPT Final Critical Re-Review** → **MORRIS P5-S05 GIT INTEGRATION GATE** if PASS · **≠** INTEGRATED · **≠** CLOSED ON MAIN |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 PILOT EXPERIENCE COMPLETION — LOCAL CANDIDATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Profile **Standard** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Morris P5-S06 DELIVERY GATE = **AUTHORIZED / CONSUMED** (2026-10-06) · slicing P5 restant **S06/S07/S08** = **ADOPTED** · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** (PR **#560** P5-S05 R3 · CI Studio **#688** SUCCESS) · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · P5-S05 = **INTEGRATED / POST-MERGE VERIFIED** · F2 routing alignment = **CLOSED ON MAIN** · R3 = **PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** · Axes S06 : A Projects **ADAPT** · B Nouveau projet chat-first **ADAPT** (ephemeral client · createProjectRuntimeAction · D1 NOT nominal) · C Nora Activity **PARTIAL** (labels honnêtes · **STOP/■ absent** — no fake STOPPED) · D Auth GitHub visual **ADAPT** (backend KEEP) · E responsive/a11y touched surfaces · ZERO REAL · full npm test **5278 PASS / 139 skipped** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git = **NOT AUTHORIZED** · next = **ChatGPT Review de S06** → gate Morris distinct si PASS · S07 = **NOT STARTED** · **≠** INTEGRATED · **≠** P5 COMPLETE |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S05 CP02 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S05 CORRECTION PASS 02 — LOCAL CANDIDATE PASS *(true then; superseded by P5-S05 INTEGRATED via PR #560 then by P5-S06 LOCAL CANDIDATE tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S05** · Pass **CP02** · Morris P5-S05 CP02 GATE = **AUTHORIZED / CONSUMED** · prior Delivery+REAL/R3 + CP01 gates remain **CONSUMED** · base/main **`79a0e48a69c8dd634a8cecf972199bea8a4daeec`** · branche `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` · B1 F1 model = **SELECTED→DISPATCH CONFIG PROVEN** (`providerReturnedModel=NOT_OBSERVED`; REAL via `providerResponseId`) · B2 R3-19 = completed anti-secret observation (no stale pending) · campaign `p5-s05-r3-cp02-1791247484728` · productFP `35f31263…` (unchanged vs CP01) · harnessFP `a8049035…` (changed) · F2 Luna/low selected→configured→returned · F1 Luna/high selected→dispatched · CKC **N_A** · accounting BOUNDED (F1 modelInvocations=3) · R3 = **PASS AT TESTED SCOPE — LOCAL CANDIDATE AFTER CP02 FINAL EVIDENCE CORRECTION** · F2 EXIT PROOF PASS — LOCAL CANDIDATE · full npm test **5272 PASS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git = **NOT AUTHORIZED** · next = **ChatGPT Final Critical Re-Review** → **MORRIS P5-S05 GIT INTEGRATION GATE** if PASS · **≠** INTEGRATED · **≠** CLOSED ON MAIN |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S05 CP01 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S05 CORRECTION PASS 01 — LOCAL CANDIDATE PASS *(true then; superseded by P5-S05 CP02 tip after residual B1 F1 model semantics + B2 R3-19 observation)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S05** · Pass **CP01** · Morris P5-S05 CP01 GATE = **AUTHORIZED / CONSUMED** · prior Delivery+REAL/R3 gate remains **CONSUMED** · base/main **`79a0e48a69c8dd634a8cecf972199bea8a4daeec`** · branche `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` · A1 CKC = **N_A** · A2 accounting = **BOUNDED** · A3 effort = **SELECTED→DISPATCH CONFIG PROVEN** · campaign `p5-s05-r3-cp01-1791245552722` · productFP `35f31263…` · harnessFP `fd10646b…` · Critical Review residual = **CORRECTION REQUIRED** (B1 F1 usage.model ≠ provider-returned; B2 R3-19 stale observation) · **≠** INTEGRATED · **≠** CLOSED ON MAIN |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S05 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S05 R3 + F2 ROUTING ALIGNMENT — LOCAL CANDIDATE PASS *(true then; superseded by P5-S05 CP01 tip after Critical Review A1/A2/A3 correction)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S05** · Morris P5-S05 DELIVERY + REAL/R3 GATE = **AUTHORIZED / CONSUMED** · base/main **`79a0e48a69c8dd634a8cecf972199bea8a4daeec`** (PR **#559** POST-S04 TRUTH-SYNC merge · CI **#686** SUCCESS) · branche `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` · F2 routing alignment = **EXIT PROOF PASS — LOCAL CANDIDATE** · R3 = **PASS AT TESTED SCOPE — LOCAL CANDIDATE** · campaign `p5-s05-r3-1791242959473` · fingerprint `39bc5907bff9cc23d1a150869c891ead04dc1fe5dd382f550ae91e76b0b5ee31` · F2 `gpt-6-luna/low` → actual match · F1 `gpt-6-luna/high` → actual match · journal tools `cycle_journal_search` + `get_entry` + `get_sources` · HD=0 · R1/R2 PASS historical · P5 = **IN PROGRESS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project commit/push/PR/merge = **NOT AUTHORIZED** · Critical Review = **CORRECTION REQUIRED** (A1/A2/A3) · **≠** INTEGRATED · **≠** CLOSED ON MAIN · **≠** P5 COMPLETE |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S04 INTEGRATED / POST-S04 TRUTH-SYNC** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S04 PRODUCT-DERIVED SYNTHÈSES — INTEGRATED / POST-MERGE VERIFIED — POST-S04 TRUTH-SYNC *(true then; superseded by P5-S05 LOCAL CANDIDATE tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-merge** · Milestone **P5** · Slice **P5-S04** · Standard · DOC · Morris P5 POST-S04 TRUTH-SYNC GATE = **CONSUMED** · PR **#558** **MERGED** · merge/main **`c7b53b93d48e626e5ac1548886162936ce7e9eb3`** · post-merge CI **#684** / run **`37377995199`** = **SUCCESS** · Detect / Build / **Required Gate** = **SUCCESS** · P5-S04 = **INTEGRATED / POST-MERGE VERIFIED** · CP01/CP02 preserved · A=0 / B=0 preserved · ZERO REAL for S04 · P5 = **AUTHORIZED / STARTED / IN PROGRESS** · F2 routing debt **OPEN** · R1 **PASS** · R2 **PASS** · R3 **NOT STARTED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · ChatGPT POST-S04 REQUALIFICATION = **PASS** · next RECOMMENDED capability = **P5-S05 — R3 Integrated Product Cognitive Path + F2 Routing Alignment** · P5-S05 DELIVERY = **NOT AUTHORIZED** · P5-S05 REAL / R3 = **NOT AUTHORIZED** · next = **MORRIS P5-S05 DELIVERY + REAL GATE** (distinct · only after review of this truth-sync) · **≠** P5 COMPLETE · **≠** R3 PASS · **≠** S05 STARTED · **≠** runtime v3 ADOPTED |

```

### 9.2 P5 Integrated Delivery — FULL DIFF
```diff
diff --git a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
index 5f23603b..5583aced 100644
--- a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
+++ b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
@@ -5,40 +5,44 @@
 | **Projet** | SFIA Studio |
 | **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
 | **Milestone** | **P5 — INTEGRATED DELIVERY** (Delivery / Implementation / Evidence source) |
-| **Slice** | **P5-S01**…**P5-S04** (integrated) + **P5-S05** (local candidate) |
-| **Pass** | **P5-S05 CORRECTION PASS 02 — LOCAL CANDIDATE PASS** |
+| **Slice** | **P5-S01**…**P5-S05** (integrated) + **P5-S06** (local candidate) |
+| **Pass** | **P5-S06 PILOT EXPERIENCE COMPLETION — LOCAL CANDIDATE** |
 | **Typologie** | Delivery evidence dans macro **EVOL** — **≠** doctrine · **≠** nouvelle architecture |
 | **Autorité architecture** | **P4** (`04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`) — **inchangée** |
-| **Base / HEAD Git** | `origin/main` = `79a0e48a69c8dd634a8cecf972199bea8a4daeec` (PR **#559** POST-S04 TRUTH-SYNC · CI **#686** SUCCESS) |
+| **Base / HEAD Git** | `origin/main` = `16a8e2fd823d75d7c59ce1fb4d55cb862d112697` (PR **#560** P5-S05 R3 · CI Studio **#688** SUCCESS) |
 | **P5-S01 integration** | PR **#555** **MERGED** · post-merge CI **#678** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S02 integration** | PR **#556** **MERGED** · post-merge CI **#680** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S03 integration** | PR **#557** **MERGED** · post-merge CI **#682** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S04 integration** | PR **#558** **MERGED** · post-merge CI **#684** / run **`37377995199`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
+| **P5-S05 integration** | PR **#560** **MERGED** · post-merge CI Studio **#688** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** · F2 routing alignment **CLOSED ON MAIN** · R3 **PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** |
 | **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
-| **Branche S05** | `delivery/sfia-studio-product-simplification-p5-s05-r3-f2-routing-alignment` (local · **NOT committed**) |
+| **Branche S06** | `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` (local · **NOT committed**) |
 | **P5 AUTHORIZED BY MORRIS** | **YES** |
 | **P5 STARTED** | **YES** |
 | **P5 IN PROGRESS** | **YES** |
+| **P5 COMPLETE** | **NO** |
+| **P6 READY** | **NO** |
 | **P5-S01** | **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S02** | **INTEGRATED / POST-MERGE VERIFIED** — R1/R2 **PROVEN** · envelope deviation **ACCEPTED BY MORRIS** |
 | **P5-S03** | **INTEGRATED / POST-MERGE VERIFIED** · Object-Native Aperçu + Exécution · A=0/B=0 |
 | **P5-S04** | **INTEGRATED / POST-MERGE VERIFIED** · Product-derived Synthèses M9 · CP01/CP02 preserved · A=0/B=0 · B1/B2 CLOSED |
-| **P5-S05** | **LOCAL CANDIDATE PASS AFTER CP02** — F2 routing EXIT PROOF · R3 PASS AT TESTED SCOPE |
-| **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 PASS AT TESTED SCOPE — LOCAL CANDIDATE (CP02)** |
-| **ZERO REAL** | **NO for S05 R3** (bounded REAL OpenAI) · S04 ZERO REAL preserved historically |
-| **READY FOR REAL** | **R3 CP02 executed under Morris S05 + CP01 + CP02 gates** |
+| **P5-S05** | **INTEGRATED / POST-MERGE VERIFIED** — F2 routing CLOSED ON MAIN · R3 PASS AT TESTED SCOPE |
+| **P5-S06** | **LOCAL CANDIDATE** — Pilot Experience Completion (A/B/D/E delivered · C PARTIAL — STOP absent) |
+| **P5 slicing restant** | **S06 / S07 / S08** — **ADOPTED BY MORRIS** (2026-10-06) · S07/S08 = **NOT STARTED** |
+| **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** (S05) |
+| **ZERO REAL** | **YES for S06** · S05 R3 REAL historique préservé (bounded OpenAI sous gate S05) |
 | **runtime v3** | **NON ADOPTED** |
-| **Git (S05)** | **NOT AUTHORIZED** — no project commit/push/PR/merge |
-| **Next** | **ChatGPT Final Critical Re-Review** → **MORRIS P5-S05 GIT INTEGRATION GATE** if PASS |
-| **P5-S05 DELIVERY** | **AUTHORIZED / CONSUMED** |
-| **P5-S05 REAL / R3** | **AUTHORIZED / CONSUMED** |
-| **P5-S05 CP01** | **AUTHORIZED / CONSUMED** |
-| **P5-S05 CP02** | **AUTHORIZED / CONSUMED** |
+| **Git (S06)** | **NOT AUTHORIZED** — no project commit/push/PR/merge |
+| **Next** | **ChatGPT Review de S06** → gate Morris distinct si PASS · **≠** S07 |
+| **P5-S05 DELIVERY** | **AUTHORIZED / CONSUMED** → **INTEGRATED** via PR **#560** |
+| **P5-S05 REAL / R3** | **AUTHORIZED / CONSUMED** → **INTEGRATED** |
+| **P5-S05 CP01 / CP02** | **AUTHORIZED / CONSUMED** (historique) |
+| **P5-S06 DELIVERY** | **AUTHORIZED / CONSUMED** |
 | **Langue** | Français (identifiants canoniques anglais préservés) |
 | **Fichier** | `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` |
 | **Date** | 2026-10-06 · Europe/Paris |

-> **Lecture rapide.** P5-S01…S04 **intégrés**. P5-S05 CP02 = **LOCAL CANDIDATE PASS** (B1 F1 selected→dispatch · B2 R3-19 scan observation · CKC N_A · accounting borné). **≠ INTEGRATED** · **≠ P5 COMPLETE** · **≠ runtime v3 ADOPTED**. Project Git **NOT AUTHORIZED**.
+> **Lecture rapide.** P5-S01…S05 **intégrés** (S05 = PR **#560** / CI **#688**). P5-S06 = **LOCAL CANDIDATE** (Projets + Nouveau projet conversationnel + Auth visual + activity labels honnêtes ; **STOP Nora non câblé** — pas de faux STOPPED). **≠ INTEGRATED** · **≠ P5 COMPLETE** · **≠ runtime v3 ADOPTED**. Project Git **NOT AUTHORIZED**.
 > **Règle de lecture des preuves.** *Implémenté* ≠ *prouvé* ≠ *intégré* ≠ *REAL*. Chaque affirmation ci-dessous est qualifiée par son niveau de preuve. Les résultats de tests/typecheck/lint/build sont ceux **rapportés par la passe de livraison** ; ce document n’en invente pas d’autres et ne les a pas ré-exécutés lors de sa rédaction.

 ---
@@ -972,4 +976,58 @@ Anti-claims explicites :

 ---

-*Fin du document P5 — Integrated Delivery — S01/S02/S03/S04 INTEGRATED / POST-MERGE VERIFIED · S05 CP02 LOCAL CANDIDATE PASS · R3 PASS AT TESTED SCOPE LOCAL · project Git NOT AUTHORIZED · P5 COMPLETE NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*
+---
+
+## 39. P5-S06 — Pilot Experience Completion — LOCAL CANDIDATE (truth-sync)
+
+> **Qualification.** Enregistrement factuel de la Delivery locale P5-S06 sous GO Morris DELIVERY consommé le 2026-10-06. **≠ INTEGRATED** · **≠ P5 COMPLETE** · project Git **NOT AUTHORIZED**.
+
+### 39.1 Git / gates
+
+| Item | Valeur |
+| --- | --- |
+| Base / HEAD | `16a8e2fd823d75d7c59ce1fb4d55cb862d112697` = `origin/main` |
+| Branche | `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` |
+| P5-S05 | **INTEGRATED / POST-MERGE VERIFIED** — PR **#560** · CI Studio **#688** SUCCESS |
+| F2 routing | **CLOSED ON MAIN** |
+| R3 | **PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** |
+| Morris S06 DELIVERY | **CONSUMED** |
+| Slicing restant | **S06 / S07 / S08** ADOPTED · S07/S08 **NOT STARTED** |
+| ZERO REAL (S06) | **YES** |
+| runtime v3 | **NON ADOPTED** |
+| P5 COMPLETE / P6 READY | **NO** / **NO** |
+
+### 39.2 Axes livrés (honnêteté)
+
+| Axe | Statut | Notes |
+| --- | --- | --- |
+| A Projects | **ADAPT** | Recherche locale · À reprendre depuis `updatedAt` ≤14j · Orientation → `/studio/projects/new` · empty state · pas d’attention inventée |
+| B Nouveau projet | **ADAPT** | Conversation pré-Project éphémère client · `createProjectRuntimeAction` au CTA · D1 Intake **NOT** nominal · pas de store / pas d’auto-Cycle |
+| C Nora Activity / STOP | **PARTIAL** | Phases START/ACTIVITY/COMPLETE projetées depuis `uiState` réel · **■ STOP absent** (pas de seam Abort Product) — **pas de faux STOPPED** |
+| D Auth GitHub visual | **ADAPT** | Split narrative+card · « Continuer avec GitHub » · mark SVG · backend Better/Auth **KEEP** |
+| E Responsive / a11y | **ADAPT** (surfaces touchées) | Labels · focus · targets · reduced-motion conservé côté conversation |
+
+### 39.3 Preuves
+
+| Porte | Résultat |
+| --- | --- |
+| `p5.s06.pilotExperience.d0.test.tsx` | **6 PASS** |
+| Auth unit tests ciblés | **PASS** |
+| typecheck / lint / build | **PASS** |
+| full `npm test` | **5278 PASS / 139 skipped** |
+| Visual runtime | Auth + Projects `/studio` + New Project capturés sous `.tmp-sfia-review/p5-s06-visual/runtime/` vs Figma refs sous `…/figma/` — **pas de claim Visual PASS global** |
+
+### 39.4 Réserves
+
+| Classe | Réserve |
+| --- | --- |
+| **BLOCKING** (avant S06 COMPLETE) | P3 STOP/■ non satisfait sans architecture cancellation — décision Morris : accepter PARTIAL ou autoriser delta |
+| **NON-BLOCKING** | Écarts Class B Projects/New Project vs frames Figma EXPLORATORY (table Attention, quick-replies, layout 3-col) · STREAMING non projeté (non observable) · D1 HARVEST only |
+
+### 39.5 Next
+
+**ChatGPT Review de S06** → gate Morris distinct. **S07** reste **NOT STARTED**.
+
+---
+
+*Fin du document P5 — Integrated Delivery — S01…S05 INTEGRATED / POST-MERGE VERIFIED · S06 LOCAL CANDIDATE · project Git NOT AUTHORIZED · P5 COMPLETE NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*

```

## 10. FULL FILES + FULL DIFFS (exploitable)

### CREATED `projects/sfia-studio/app/features/pre-m6-product-ui/newProjectConversation.ts` (full)
```ts
/**
 * P5-S06 — non-authoritative pre-Project intention helpers.
 * Client-only ephemeral state. No Product store. No D1 Intake path.
 * Deterministic clarification (ZERO REAL) — not a second Nora runtime.
 */

export type PreProjectDraft = {
  name: string;
  intention: string;
  context: string;
};

export type ChatTurn = {
  id: string;
  role: "user" | "nora";
  text: string;
};

const NAME_HINT =
  /(?:nom(?:me[rz]?|mons)?(?:\s+le)?\s+projet|appelle[- ]le|titre)\s*[:«"']?\s*(.+)$/i;

export function emptyDraft(): PreProjectDraft {
  return { name: "", intention: "", context: "" };
}

export function isMinimumSufficient(draft: PreProjectDraft): boolean {
  return draft.name.trim().length > 0 && draft.intention.trim().length > 0;
}

/**
 * Merge a free-text user turn into the ephemeral draft.
 * Order: intention first → name → optional context.
 */
export function absorbUserTurn(
  draft: PreProjectDraft,
  raw: string,
): PreProjectDraft {
  const text = raw.replace(/\u0000/g, "").trim();
  if (!text) return draft;
  const next = { ...draft };

  if (!next.intention.trim()) {
    next.intention = text.slice(0, 4000);
    return next;
  }

  const nameMatch = text.match(NAME_HINT);
  if (!next.name.trim()) {
    if (nameMatch?.[1]) {
      next.name = nameMatch[1].trim().replace(/^["«']|["»']$/g, "").slice(0, 200);
    } else {
      next.name = text.slice(0, 200);
    }
    return next;
  }

  next.context = next.context
    ? `${next.context}\n${text}`.slice(0, 4000)
    : text.slice(0, 4000);
  return next;
}

export function nextNoraPrompt(draft: PreProjectDraft): string {
  if (!draft.intention.trim()) {
    return "Décrivez l’intention du projet — ce que vous voulez accomplir. Aucun projet durable n’est créé pour l’instant.";
  }
  if (!draft.name.trim()) {
    return "J’ai noté l’intention. Quel nom voulez-vous donner à ce projet ?";
  }
  return "Voici ce que j’ai compris. Vérifiez l’aperçu, puis créez le projet quand vous êtes prêt — ou précisez encore le contexte.";
}

export function openingNoraTurn(): ChatTurn {
  return {
    id: "nora-open",
    role: "nora",
    text: "Parlez-moi du projet que vous voulez démarrer. Je clarifierai l’essentiel avant toute création durable.",
  };
}

```

### CREATED `projects/sfia-studio/app/app/login/login-client.module.css` (full)
```css
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: var(--pm6-space-5, 24px) var(--pm6-space-6, 32px)
    var(--pm6-space-6, 32px);
  background: var(--pm6-canvas, #fffdf9);
  color: var(--pm6-ink, #1f1a16);
  font-family: var(--pm6-font, Inter, "Segoe UI", sans-serif);
}

.topBrand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: var(--pm6-space-6, 32px);
}

.mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--pm6-forest, #1f1a16);
  color: var(--pm6-forest-ink, #fffdf9);
  font-size: 0.85rem;
  font-weight: 700;
}

.brandText {
  font-size: 0.95rem;
  font-weight: 650;
  color: var(--pm6-ink, #1f1a16);
}

.layout {
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 22rem);
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

.narrative {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-3, 12px);
  max-width: 34rem;
}

.eyebrow {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--pm6-muted, #7f766d);
}

.narrativeTitle {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 650;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: var(--pm6-ink, #1f1a16);
}

.narrativeBody {
  margin: 0;
  font-size: 1rem;
  line-height: 1.55;
  color: var(--pm6-muted-strong, #6f665e);
  max-width: 36ch;
}

.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-4, 16px);
  padding: var(--pm6-space-6, 32px) var(--pm6-space-5, 24px);
  background: var(--pm6-surface, #fff);
  border: 1px solid var(--pm6-border-soft, #eae2d9);
  border-radius: var(--pm6-radius-lg, 16px);
  box-shadow: var(--pm6-shadow-card, 0 8px 24px rgba(31, 26, 22, 0.05));
}

.title {
  margin: 0;
  font-size: 1.55rem;
  font-weight: 650;
  letter-spacing: -0.02em;
  color: var(--pm6-ink, #1f1a16);
}

.lead {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--pm6-muted-strong, #6f665e);
}

.error {
  margin: 0;
  padding: 0.75rem 1rem;
  border-radius: var(--pm6-radius-md, 12px);
  background: var(--pm6-danger-tint, #fbeeec);
  border: 1px solid color-mix(in srgb, var(--pm6-danger, #b8432b) 35%, transparent);
  color: var(--pm6-danger, #b8432b);
  font-size: 0.9rem;
  line-height: 1.5;
}

.githubCta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-height: 44px;
  box-sizing: border-box;
  border: 1px solid var(--pm6-forest, #1f1a16);
  border-radius: var(--pm6-radius-md, 12px);
  padding: 0.85rem 1rem;
  background: var(--pm6-forest, #1f1a16);
  color: var(--pm6-forest-ink, #fffdf9);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  cursor: pointer;
}

.githubCta:hover {
  background: var(--pm6-forest-hover, #3a322b);
}

.githubCta:focus-visible {
  outline: none;
  box-shadow: var(--pm6-focus-ring, 0 0 0 3px rgba(31, 26, 22, 0.35));
}

.githubIcon {
  flex: 0 0 auto;
  display: block;
}

.note {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--pm6-muted, #7f766d);
  text-align: center;
}

.sessionHint {
  margin: 0;
  padding: 0.75rem 0.9rem;
  border-radius: var(--pm6-radius-md, 12px);
  background: var(--pm6-canvas-raised, #fbf7f2);
  border: 1px solid var(--pm6-border-soft, #eae2d9);
  font-size: 0.8rem;
  line-height: 1.45;
  color: var(--pm6-ink-soft, #3d352e);
}

@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
    align-items: stretch;
  }

  .narrative {
    max-width: none;
  }
}

@media (max-width: 767px) {
  .page {
    padding: var(--pm6-space-4, 16px);
  }

  .narrativeTitle {
    font-size: 1.55rem;
  }

  .card {
    margin-top: var(--pm6-space-2, 8px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .githubCta {
    transition: none;
  }
}

```

### CREATED `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx` (full)
```tsx
/** @vitest-environment jsdom */
import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectsPage } from "@/features/pre-m6-product-ui/ProjectsPage";
import { NewProjectIntentionPage } from "@/features/pre-m6-product-ui/NewProjectIntentionPage";
import { LoginClient } from "@/app/login/login-client";
import {
  absorbUserTurn,
  emptyDraft,
  isMinimumSufficient,
  nextNoraPrompt,
} from "@/features/pre-m6-product-ui/newProjectConversation";

const { listProjectsRuntimeActionMock, createProjectRuntimeActionMock, pushMock } =
  vi.hoisted(() => ({
    listProjectsRuntimeActionMock: vi.fn(),
    createProjectRuntimeActionMock: vi.fn(),
    pushMock: vi.fn(),
  }));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  listProjectsRuntimeAction: listProjectsRuntimeActionMock,
  createProjectRuntimeAction: createProjectRuntimeActionMock,
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

afterEach(() => {
  cleanup();
  listProjectsRuntimeActionMock.mockReset();
  createProjectRuntimeActionMock.mockReset();
  pushMock.mockReset();
});

describe("P5-S06 newProjectConversation helpers", () => {
  it("does not invent name/intention and requires both for create readiness", () => {
    const d0 = emptyDraft();
    expect(isMinimumSufficient(d0)).toBe(false);
    const d1 = absorbUserTurn(d0, "Moderniser le reporting contrats");
    expect(d1.intention).toContain("Moderniser");
    expect(d1.name).toBe("");
    expect(isMinimumSufficient(d1)).toBe(false);
    const d2 = absorbUserTurn(d1, "Reporting Alpha");
    expect(d2.name).toBe("Reporting Alpha");
    expect(isMinimumSufficient(d2)).toBe(true);
    expect(nextNoraPrompt(d2)).toMatch(/aperçu|créez/i);
  });
});

describe("P5-S06 ProjectsPage", () => {
  it("shows P3 empty state without inventing projects", async () => {
    listProjectsRuntimeActionMock.mockResolvedValue({
      ok: true,
      projects: [],
      disclosures: {},
    });
    render(<ProjectsPage />);
    await waitFor(() =>
      expect(screen.getByTestId("studio-projects-empty")).toBeInTheDocument(),
    );
    expect(screen.getByTestId("studio-projects-create")).toHaveTextContent(
      /Nouveau projet/i,
    );
    expect(screen.queryByTestId("studio-projects-resume")).toBeNull();
  });

  it("filters locally and derives À reprendre only from updatedAt facts", async () => {
    const recent = new Date().toISOString();
    listProjectsRuntimeActionMock.mockResolvedValue({
      ok: true,
      projects: [
        {
          projectId: "prj:a",
          title: "Alpha Reporting",
          name: "Alpha Reporting",
          status: "active",
          objective: "Reporting",
          updatedAt: recent,
        },
        {
          projectId: "prj:b",
          title: "Beta Archive",
          name: "Beta Archive",
          status: "archived",
          objective: "Old",
          updatedAt: "2020-01-01T00:00:00.000Z",
        },
      ],
      disclosures: {},
    });
    const user = userEvent.setup();
    render(<ProjectsPage />);
    await waitFor(() =>
      expect(screen.getByTestId("studio-projects-list")).toBeInTheDocument(),
    );
    expect(screen.getByTestId("studio-projects-resume")).toBeInTheDocument();
    expect(
      within(screen.getByTestId("studio-projects-resume")).getByText(
        "Alpha Reporting",
      ),
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("studio-projects-resume")).queryByText(
        "Beta Archive",
      ),
    ).toBeNull();

    await user.type(screen.getByTestId("studio-projects-search"), "beta");
    expect(screen.getByTestId("studio-projects-list")).toHaveTextContent(
      "Beta Archive",
    );
    expect(screen.getByTestId("studio-projects-list")).not.toHaveTextContent(
      "Alpha Reporting",
    );
    expect(screen.getByTestId("studio-projects-ask-nora")).toHaveAttribute(
      "href",
      "/studio/projects/new",
    );
  });
});

describe("P5-S06 NewProjectIntentionPage conversational", () => {
  beforeEach(() => {
    vi.spyOn(globalThis.crypto, "randomUUID").mockReturnValue(
      "00000000-0000-4000-8000-000000000099",
    );
  });

  it("does not create a Project before explicit CTA", async () => {
    const user = userEvent.setup();
    render(<NewProjectIntentionPage />);
    expect(screen.getByTestId("create-project-form")).toBeInTheDocument();
    expect(screen.getByTestId("create-project-submit")).toBeDisabled();

    await user.type(
      screen.getByTestId("new-project-input"),
      "Suivre les contrats fournisseurs",
    );
    await user.click(screen.getByTestId("new-project-send"));
    expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
    expect(screen.getByTestId("preview-intention")).toHaveTextContent(
      /contrats/i,
    );
    expect(screen.getByTestId("create-project-submit")).toBeDisabled();

    await user.type(screen.getByTestId("new-project-input"), "Contrats Q3");
    await user.click(screen.getByTestId("new-project-send"));
    expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
    expect(screen.getByTestId("preview-name")).toHaveTextContent("Contrats Q3");
    expect(screen.getByTestId("create-project-submit")).toBeEnabled();
  });

  it("creates exactly one Project via canonical action and no invented HD", async () => {
    createProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      projectId: "prj:s06-1",
      project: {
        projectId: "prj:s06-1",
        name: "Contrats Q3",
        objective: "Suivre les contrats fournisseurs",
        criticality: "STANDARD",
      },
      livingState: { version: 1 },
      readiness: { status: "NOT_READY" },
      reusedFromIdempotencyKey: false,
    });
    const user = userEvent.setup();
    render(<NewProjectIntentionPage />);
    await user.type(
      screen.getByTestId("new-project-input"),
      "Suivre les contrats fournisseurs",
    );
    await user.click(screen.getByTestId("new-project-send"));
    await user.type(screen.getByTestId("new-project-input"), "Contrats Q3");
    await user.click(screen.getByTestId("new-project-send"));
    await user.click(screen.getByTestId("create-project-submit"));

    await waitFor(() =>
      expect(createProjectRuntimeActionMock).toHaveBeenCalledTimes(1),
    );
    const arg = createProjectRuntimeActionMock.mock.calls[0]![0];
    expect(arg.name).toBe("Contrats Q3");
    expect(arg.objective).toMatch(/contrats/i);
    expect(arg.criticality).toBe("STANDARD");
    expect(arg).not.toHaveProperty("cycleId");
    expect(arg).not.toHaveProperty("humanDecision");
    expect(pushMock).toHaveBeenCalledWith("/studio/projects/prj%3As06-1");
  });
});

describe("P5-S06 Auth login visual", () => {
  it("exposes GitHub-only Continuer avec GitHub and existing start href", () => {
    render(<LoginClient fromPath="/studio" />);
    const cta = screen.getByTestId("login-github");
    expect(cta).toHaveTextContent("Continuer avec GitHub");
    expect(cta).toHaveAttribute(
      "href",
      "/api/auth/github-start?from=%2Fstudio",
    );
    expect(screen.getByTestId("login-surface")).toHaveTextContent(
      /Bienvenue dans SFIA Studio/,
    );
    expect(screen.queryByText(/OAuth|client_id|redirect_uri/i)).toBeNull();
  });
});

```

### MODIFIED `projects/sfia-studio/app/app/login/login-client.tsx` — FULL DIFF
```diff
diff --git a/projects/sfia-studio/app/app/login/login-client.tsx b/projects/sfia-studio/app/app/login/login-client.tsx
index 9dea8ffa..3be4deca 100644
--- a/projects/sfia-studio/app/app/login/login-client.tsx
+++ b/projects/sfia-studio/app/app/login/login-client.tsx
@@ -1,22 +1,42 @@
 "use client";

 import { useMemo } from "react";
+import "@/features/pre-m6-product-ui/product-tokens.css";
+import styles from "./login-client.module.css";

 const ERROR_MESSAGES: Record<string, string> = {
   github_user_not_allowlisted:
     "Votre compte GitHub n'est pas autorisé à accéder à SFIA Studio.",
   github_id_unparseable:
-    "Impossible de vérifier l'identité GitHub (identifiant manquant).",
+    "Impossible de vérifier l'identité GitHub. Réessayez la connexion.",
   ALLOWLIST_DENIED:
-    "Votre identité GitHub n'est plus dans la liste d'autorisation SFIA.",
+    "Votre identité GitHub n'est plus autorisée pour SFIA Studio.",
   NO_SESSION: "Authentification requise pour accéder à SFIA Studio.",
   PROVIDER_ACCOUNT_MISSING:
     "Session incomplète — reconnectez-vous avec GitHub.",
   AUTH_CONFIG_ERROR:
-    "Configuration d'authentification indisponible (fail-closed).",
-  provider_not_allowed: "Seul GitHub OAuth est accepté.",
+    "Connexion indisponible pour le moment. Réessayez plus tard.",
+  provider_not_allowed: "Seul GitHub est accepté pour se connecter.",
 };

+function GitHubMark({ className }: { className?: string }) {
+  return (
+    <svg
+      className={className}
+      width="20"
+      height="20"
+      viewBox="0 0 16 16"
+      aria-hidden="true"
+      focusable="false"
+    >
+      <path
+        fill="currentColor"
+        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
+      />
+    </svg>
+  );
+}
+
 export function LoginClient({
   errorCode,
   fromPath,
@@ -40,91 +60,60 @@ export function LoginClient({
   const githubStartHref = `/api/auth/github-start?from=${encodeURIComponent(callbackURL)}`;

   return (
-    <div
-      style={{
-        minHeight: "100vh",
-        display: "flex",
-        alignItems: "center",
-        justifyContent: "center",
-        padding: "2rem",
-        background:
-          "linear-gradient(160deg, #0f172a 0%, #1e293b 55%, #0f172a 100%)",
-        color: "#e2e8f0",
-        fontFamily: "var(--font-inter), system-ui, sans-serif",
-      }}
-    >
-      <main
-        style={{
-          width: "min(28rem, 100%)",
-          border: "1px solid rgba(148, 163, 184, 0.35)",
-          borderRadius: "12px",
-          padding: "2rem",
-          background: "rgba(15, 23, 42, 0.85)",
-        }}
-        data-testid="login-surface"
-      >
-        <p
-          style={{
-            letterSpacing: "0.12em",
-            fontSize: "0.75rem",
-            textTransform: "uppercase",
-            color: "#94a3b8",
-            margin: 0,
-          }}
-        >
-          SFIA Studio
-        </p>
-        <h1 style={{ margin: "0.75rem 0 0.5rem", fontSize: "1.75rem" }}>
-          Connexion
-        </h1>
-        <p style={{ margin: "0 0 1.5rem", color: "#cbd5e1", lineHeight: 1.5 }}>
-          Authentifiez-vous avec GitHub. L&apos;accès Studio est réservé aux
-          identités autorisées côté serveur (rôle runtime : Pilote).
-        </p>
+    <div className={styles.page}>
+      <header className={styles.topBrand} aria-hidden="false">
+        <span className={styles.mark} aria-hidden="true">
+          S
+        </span>
+        <span className={styles.brandText}>SFIA Studio</span>
+      </header>

-        {message ? (
-          <p
-            role="alert"
-            data-testid="login-error"
-            style={{
-              margin: "0 0 1.25rem",
-              padding: "0.75rem 1rem",
-              borderRadius: "8px",
-              background: "rgba(127, 29, 29, 0.45)",
-              border: "1px solid rgba(248, 113, 113, 0.45)",
-              color: "#fecaca",
-            }}
-          >
-            {message}
+      <div className={styles.layout}>
+        <section className={styles.narrative} aria-labelledby="login-narrative">
+          <p className={styles.eyebrow}>Espace projet</p>
+          <h1 id="login-narrative" className={styles.narrativeTitle}>
+            Un espace de travail calme, continu et gouverné.
+          </h1>
+          <p className={styles.narrativeBody}>
+            Retrouvez vos projets, leur contexte et votre conversation avec
+            Nora.
           </p>
-        ) : null}
+        </section>

-        {/*
-          Native <a> — OAuth must work even when client chunks fail to hydrate
-          (observed: /_next/.../login/page.js → 404 left a dead <button>).
-          No preventDefault: href always navigates to public /api/auth/github-start.
-        */}
-        <a
-          href={githubStartHref}
-          data-testid="login-github"
-          style={{
-            display: "block",
-            width: "100%",
-            boxSizing: "border-box",
-            border: 0,
-            borderRadius: "8px",
-            padding: "0.85rem 1rem",
-            background: "#f8fafc",
-            color: "#0f172a",
-            fontWeight: 600,
-            cursor: "pointer",
-            textAlign: "center",
-            textDecoration: "none",
-          }}
-        >
-          Se connecter avec GitHub
-        </a>
-      </main>
+        <main className={styles.card} data-testid="login-surface">
+          <h2 className={styles.title}>Bienvenue dans SFIA Studio</h2>
+          <p className={styles.lead}>
+            Connectez-vous pour retrouver vos projets et reprendre votre
+            travail.
+          </p>
+
+          {message ? (
+            <p role="alert" data-testid="login-error" className={styles.error}>
+              {message}
+            </p>
+          ) : null}
+
+          {/*
+            Native <a> — OAuth must work even when client chunks fail to hydrate.
+            No preventDefault: href always navigates to public /api/auth/github-start.
+          */}
+          <a
+            href={githubStartHref}
+            data-testid="login-github"
+            className={styles.githubCta}
+          >
+            <GitHubMark className={styles.githubIcon} />
+            Continuer avec GitHub
+          </a>
+
+          <p className={styles.note}>
+            L&apos;accès est réservé aux comptes autorisés.
+          </p>
+          <p className={styles.sessionHint}>
+            Votre session vous ramène à votre espace de travail.
+          </p>
+        </main>
+      </div>
     </div>
   );
 }

```

### MODIFIED `projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css` — FULL DIFF
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
index ad57ac05..b4ffbd1d 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css
@@ -2,7 +2,7 @@
   display: flex;
   flex-direction: column;
   gap: var(--pm6-space-5);
-  max-width: 720px;
+  max-width: 980px;
 }

 .hero {
@@ -124,14 +124,23 @@
 .quietButton {
   display: inline-flex;
   align-items: center;
-  border-radius: var(--pm6-radius-pill);
+  justify-content: center;
+  border-radius: var(--pm6-radius-md);
   padding: 11px 20px;
+  min-height: 38px;
   font-size: 0.9rem;
   font-weight: 600;
   cursor: pointer;
   text-decoration: none;
 }

+.primaryButton:focus-visible,
+.quietButton:focus-visible,
+.textarea:focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
+}
+
 .primaryButton,
 .primaryLink {
   background: var(--pm6-forest);
@@ -209,6 +218,151 @@
   overflow-wrap: anywhere;
 }

+.chatLayout {
+  display: grid;
+  grid-template-columns: minmax(0, 1fr) minmax(220px, 280px);
+  gap: var(--pm6-space-4);
+  align-items: stretch;
+}
+
+.thread {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-3);
+  min-height: 280px;
+  max-height: 420px;
+  overflow: auto;
+  padding: var(--pm6-space-4);
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-lg);
+  box-shadow: var(--pm6-shadow-card);
+}
+
+.bubbleUser,
+.bubbleNora {
+  display: flex;
+  flex-direction: column;
+  gap: 4px;
+  max-width: 92%;
+  padding: var(--pm6-space-3);
+  border-radius: var(--pm6-radius-md);
+}
+
+.bubbleUser {
+  align-self: flex-end;
+  background: var(--pm6-forest-tint);
+  border: 1px solid var(--pm6-border-soft);
+}
+
+.bubbleNora {
+  align-self: flex-start;
+  background: var(--pm6-canvas-raised);
+  border: 1px solid var(--pm6-border-soft);
+}
+
+.bubbleLabel {
+  margin: 0;
+  font-size: 0.7rem;
+  font-weight: 700;
+  letter-spacing: 0.06em;
+  text-transform: uppercase;
+  color: var(--pm6-muted);
+}
+
+.bubbleText {
+  margin: 0;
+  font-size: 0.92rem;
+  line-height: 1.55;
+  color: var(--pm6-ink);
+  overflow-wrap: anywhere;
+}
+
+.preview {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-3);
+  padding: var(--pm6-space-4);
+  background: var(--pm6-cream);
+  border: 1px solid var(--pm6-cream-border);
+  border-radius: var(--pm6-radius-lg);
+}
+
+.previewTitle {
+  margin: 0;
+  font-size: 0.95rem;
+  font-weight: 650;
+  color: var(--pm6-ink);
+}
+
+.previewList {
+  margin: 0;
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-3);
+}
+
+.previewList dt {
+  font-size: 0.7rem;
+  font-weight: 700;
+  letter-spacing: 0.07em;
+  text-transform: uppercase;
+  color: var(--pm6-muted);
+}
+
+.previewList dd {
+  margin: 2px 0 0;
+  font-size: 0.88rem;
+  line-height: 1.5;
+  color: var(--pm6-ink-soft);
+  overflow-wrap: anywhere;
+}
+
+.previewHint,
+.previewHintReady {
+  margin: 0;
+  font-size: 0.8rem;
+  line-height: 1.45;
+}
+
+.previewHint {
+  color: var(--pm6-muted-strong);
+}
+
+.previewHintReady {
+  color: var(--pm6-ok);
+  font-weight: 600;
+}
+
+.composer {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-3);
+  padding: var(--pm6-space-4);
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-lg);
+  box-shadow: var(--pm6-shadow-card);
+}
+
+.srOnly {
+  position: absolute;
+  width: 1px;
+  height: 1px;
+  padding: 0;
+  margin: -1px;
+  overflow: hidden;
+  clip: rect(0, 0, 0, 0);
+  white-space: nowrap;
+  border: 0;
+}
+
+@media (max-width: 1024px) {
+  .chatLayout {
+    grid-template-columns: 1fr;
+  }
+}
+
 @media (max-width: 767px) {
   .card {
     padding: var(--pm6-space-4);
@@ -217,4 +371,18 @@
   .heroTitle {
     font-size: 1.5rem;
   }
+
+  .actions {
+    flex-direction: column;
+    align-items: stretch;
+  }
+
+  .primaryButton,
+  .quietButton {
+    width: 100%;
+  }
+
+  .thread {
+    max-height: 320px;
+  }
 }

```

### MODIFIED `projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx` — FULL DIFF
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
index a9e7eb9c..b1881aa1 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
@@ -1,77 +1,95 @@
 "use client";

-import { useEffect, useRef, useState, type FormEvent } from "react";
+import { useEffect, useId, useRef, useState, type FormEvent } from "react";
 import Link from "next/link";
+import { useRouter } from "next/navigation";
 import { createProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
+import {
+  absorbUserTurn,
+  emptyDraft,
+  isMinimumSufficient,
+  nextNoraPrompt,
+  openingNoraTurn,
+  type ChatTurn,
+  type PreProjectDraft,
+} from "./newProjectConversation";
 import styles from "./NewProjectIntentionPage.module.css";

 type CreateResult = Awaited<ReturnType<typeof createProjectRuntimeAction>>;
 type CreateSuccess = Extract<CreateResult, { ok: true }>;

-type FieldErrors = {
-  name?: string;
-  intention?: string;
-};
-
 function createIdempotencyKey(): string {
   const uuid = globalThis.crypto?.randomUUID?.();
   return `pm6-intent:${uuid ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
 }

+function turnId(prefix: string): string {
+  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
+}
+
 /**
- * PROVISIONAL intention sheet — W4-BR aligns labels to UXR-01 (Nom / Intention /
- * contexte optionnel / Créer + Annuler). Behavior Create/Resume unchanged.
+ * P5-S06 — conversational New Project (chat-first) before durable Create.
+ * Ephemeral client intention only · createProjectRuntimeAction on explicit CTA.
+ * No D1 Intake · no pre-Project store · no auto Cycle · ZERO REAL cognition.
  */
 export function NewProjectIntentionPage() {
-  const [name, setName] = useState("");
-  const [intention, setIntention] = useState("");
-  const [precisions, setPrecisions] = useState("");
+  const router = useRouter();
+  const fieldId = useId();
+  const [draft, setDraft] = useState<PreProjectDraft>(() => emptyDraft());
+  const [turns, setTurns] = useState<ChatTurn[]>(() => [openingNoraTurn()]);
+  const [composer, setComposer] = useState("");
   const [idempotencyKey, setIdempotencyKey] = useState("");
-  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
   const [submitError, setSubmitError] = useState<string | null>(null);
   const [pending, setPending] = useState(false);
   const [created, setCreated] = useState<CreateSuccess | null>(null);
-
-  const nameRef = useRef<HTMLInputElement>(null);
-  const intentionRef = useRef<HTMLTextAreaElement>(null);
+  const threadRef = useRef<HTMLDivElement>(null);
+  const inputRef = useRef<HTMLTextAreaElement>(null);

   useEffect(() => {
     setIdempotencyKey(createIdempotencyKey());
   }, []);

-  async function onSubmit(event: FormEvent<HTMLFormElement>) {
-    event.preventDefault();
-    if (pending) return;
+  useEffect(() => {
+    const el = threadRef.current;
+    if (!el) return;
+    el.scrollTop = el.scrollHeight;
+  }, [turns, draft]);
+
+  const ready = isMinimumSufficient(draft);

+  function onSend(event?: FormEvent) {
+    event?.preventDefault();
+    const text = composer.trim();
+    if (!text || pending) return;
+    const nextDraft = absorbUserTurn(draft, text);
+    const userTurn: ChatTurn = {
+      id: turnId("user"),
+      role: "user",
+      text,
+    };
+    const noraTurn: ChatTurn = {
+      id: turnId("nora"),
+      role: "nora",
+      text: nextNoraPrompt(nextDraft),
+    };
+    setDraft(nextDraft);
+    setTurns((current) => [...current, userTurn, noraTurn]);
+    setComposer("");
     setSubmitError(null);
-    const errors: FieldErrors = {};
-    if (!name.trim()) {
-      errors.name = "Donnez un nom au projet.";
-    } else if (name.trim().length > 200) {
-      errors.name = "Le nom ne peut pas dépasser 200 caractères.";
-    }
-    if (!intention.trim()) {
-      errors.intention = "Décrivez l’intention du projet.";
-    }
-    setFieldErrors(errors);
-    if (errors.name) {
-      nameRef.current?.focus();
-      return;
-    }
-    if (errors.intention) {
-      intentionRef.current?.focus();
-      return;
-    }
+  }

+  async function onCreate() {
+    if (pending || !ready) return;
+    setSubmitError(null);
     const stableKey = idempotencyKey || createIdempotencyKey();
     if (!idempotencyKey) setIdempotencyKey(stableKey);
     setPending(true);
     try {
-      const trimmedIntention = intention.trim();
+      const intention = draft.intention.trim();
       const result = await createProjectRuntimeAction({
-        name: name.trim(),
-        objective: trimmedIntention,
-        context: precisions.trim() || trimmedIntention,
+        name: draft.name.trim(),
+        objective: intention,
+        context: draft.context.trim() || intention,
         criticality: "STANDARD",
         constraints: [],
         idempotencyKey: stableKey,
@@ -79,19 +97,12 @@ export function NewProjectIntentionPage() {

       if (result.ok) {
         setCreated(result);
+        router.push(
+          `/studio/projects/${encodeURIComponent(result.projectId)}`,
+        );
         return;
       }

-      if (result.error.code === "INPUT_INVALID") {
-        if (result.error.field === "name") {
-          setFieldErrors({ name: result.error.message });
-          nameRef.current?.focus();
-          return;
-        }
-        setFieldErrors({ intention: result.error.message });
-        intentionRef.current?.focus();
-        return;
-      }
       if (result.error.code === "DOCTRINE_UNRESOLVED") {
         setSubmitError(
           "Le projet n’a pas pu être créé : le référentiel local n’a pas pu être validé. Rien n’a été enregistré.",
@@ -100,203 +111,158 @@ export function NewProjectIntentionPage() {
       }
       setSubmitError(
         result.error.retryable
-          ? "La création n’a pas abouti. Vous pouvez réessayer : votre saisie est conservée."
-          : "La création n’a pas abouti. Vérifiez votre saisie avant de réessayer.",
+          ? "La création n’a pas abouti. Vous pouvez réessayer : la conversation est conservée."
+          : "La création n’a pas abouti. Précisez encore l’intention ou le nom avant de réessayer.",
       );
     } catch {
       setSubmitError(
-        "Le service local n’a pas répondu. Votre saisie est conservée ; vous pouvez réessayer.",
+        "Le service local n’a pas répondu. La conversation est conservée ; vous pouvez réessayer.",
       );
     } finally {
       setPending(false);
     }
   }

-  function reset() {
-    setName("");
-    setIntention("");
-    setPrecisions("");
-    setFieldErrors({});
-    setSubmitError(null);
-    setCreated(null);
-    setIdempotencyKey(createIdempotencyKey());
-  }
-
   if (created) {
     return (
-      <div className={styles.page}>
+      <div className={styles.page} data-testid="new-project-created">
         <header className={styles.hero}>
           <h1 className={styles.heroTitle}>Projet créé</h1>
           <p className={styles.heroSubtitle}>
-            Nora peut maintenant ouvrir la conversation de qualification. La
-            décision vous appartient toujours.
+            Ouverture du workspace… La suite se poursuit avec Nora dans le
+            projet durable.
           </p>
         </header>
-
-        <section className={styles.card}>
-          <dl className={styles.summary}>
-            <div>
-              <dt>Nom</dt>
-              <dd>{created.project.name}</dd>
-            </div>
-            <div>
-              <dt>Intention</dt>
-              <dd>{created.project.objective}</dd>
-            </div>
-            <div>
-              <dt>État du projet</dt>
-              <dd>Enregistré · v{created.livingState.version}</dd>
-            </div>
-          </dl>
-          <div className={styles.actions}>
-            <Link
-              href={`/studio/projects/${encodeURIComponent(created.projectId)}`}
-              className={styles.primaryLink}
-              data-testid="open-project-workspace"
-            >
-              Ouvrir le projet
-            </Link>
-            <button type="button" className={styles.quietButton} onClick={reset}>
-              Créer un autre projet
-            </button>
-          </div>
-          <details className={styles.details}>
-            <summary>Détails techniques</summary>
-            <dl className={styles.summary}>
-              <div>
-                <dt>Identifiant projet</dt>
-                <dd className={styles.code}>{created.projectId}</dd>
-              </div>
-              <div>
-                <dt>Criticité perçue</dt>
-                <dd>{created.project.criticality}</dd>
-              </div>
-              <div>
-                <dt>Préparation</dt>
-                <dd>{created.readiness.status}</dd>
-              </div>
-              <div>
-                <dt>Clé de tentative réutilisée</dt>
-                <dd>{String(created.reusedFromIdempotencyKey)}</dd>
-              </div>
-            </dl>
-          </details>
-        </section>
+        <Link
+          href={`/studio/projects/${encodeURIComponent(created.projectId)}`}
+          className={styles.primaryButton}
+          data-testid="open-project-workspace"
+        >
+          Ouvrir le projet
+        </Link>
       </div>
     );
   }

   return (
-    <div className={styles.page}>
+    <div
+      className={styles.page}
+      data-testid="create-project-form"
+      data-surface="new-project-chat"
+      data-create-surface="conversational"
+    >
       <header className={styles.hero}>
         <p className={styles.heroEyebrow}>SFIA Studio</p>
         <h1 className={styles.heroTitle}>Nouveau projet</h1>
         <p className={styles.heroSubtitle}>
-          Nommez le projet et décrivez votre intention. Nora qualifiera ensuite —
-          vous gardez la décision.
+          Discutez de l&apos;intention avec Nora. Aucun projet durable n&apos;est
+          créé tant que vous n&apos;avez pas confirmé.
         </p>
       </header>

-      <form
-        className={styles.card}
-        onSubmit={onSubmit}
-        noValidate
-        aria-busy={pending}
-        data-testid="create-project-form"
-      >
-        <div className={styles.field}>
-          <label className={styles.label} htmlFor="project-name">
-            Nom du projet
-          </label>
-          <input
-            ref={nameRef}
-            id="project-name"
-            name="name"
-            className={styles.input}
-            maxLength={200}
-            value={name}
-            aria-invalid={Boolean(fieldErrors.name)}
-            aria-describedby={fieldErrors.name ? "project-name-error" : undefined}
-            onChange={(event) => {
-              setName(event.target.value);
-              setFieldErrors((current) => ({ ...current, name: undefined }));
-            }}
-          />
-          {fieldErrors.name ? (
-            <p className={styles.fieldError} id="project-name-error">
-              {fieldErrors.name}
-            </p>
-          ) : null}
+      <div className={styles.chatLayout}>
+        <div
+          className={styles.thread}
+          ref={threadRef}
+          data-testid="new-project-thread"
+          aria-live="polite"
+        >
+          {turns.map((turn) => (
+            <div
+              key={turn.id}
+              className={
+                turn.role === "user" ? styles.bubbleUser : styles.bubbleNora
+              }
+              data-role={turn.role}
+            >
+              <p className={styles.bubbleLabel}>
+                {turn.role === "user" ? "Vous" : "Nora"}
+              </p>
+              <p className={styles.bubbleText}>{turn.text}</p>
+            </div>
+          ))}
         </div>

-        <div className={styles.field}>
-          <label className={styles.label} htmlFor="project-objective">
-            Intention du projet
-          </label>
-          <textarea
-            ref={intentionRef}
-            id="project-objective"
-            name="objective"
-            className={styles.textarea}
-            rows={4}
-            value={intention}
-            placeholder="Décrivez ce que vous voulez accomplir…"
-            aria-invalid={Boolean(fieldErrors.intention)}
-            aria-describedby={
-              fieldErrors.intention
-                ? "project-objective-error project-objective-help"
-                : "project-objective-help"
-            }
-            onChange={(event) => {
-              setIntention(event.target.value);
-              setFieldErrors((current) => ({ ...current, intention: undefined }));
-            }}
-          />
-          <p className={styles.help} id="project-objective-help">
-            Sans donnée personnelle ni secret. C&apos;est le point de départ de
-            la qualification, pas un engagement d&apos;exécution.
-          </p>
-          {fieldErrors.intention ? (
-            <p className={styles.fieldError} id="project-objective-error">
-              {fieldErrors.intention}
+        <aside
+          className={styles.preview}
+          data-testid="new-project-preview"
+          aria-labelledby={`${fieldId}-preview`}
+        >
+          <h2 id={`${fieldId}-preview`} className={styles.previewTitle}>
+            Ce que Nora a compris
+          </h2>
+          <dl className={styles.previewList}>
+            <div>
+              <dt>Nom</dt>
+              <dd data-testid="preview-name">
+                {draft.name.trim() || "Pas encore précisé"}
+              </dd>
+            </div>
+            <div>
+              <dt>Intention</dt>
+              <dd data-testid="preview-intention">
+                {draft.intention.trim() || "Pas encore précisée"}
+              </dd>
+            </div>
+            <div>
+              <dt>Contexte</dt>
+              <dd data-testid="preview-context">
+                {draft.context.trim() || "Optionnel"}
+              </dd>
+            </div>
+          </dl>
+          {!ready ? (
+            <p className={styles.previewHint}>
+              Nom et intention sont requis avant création.
             </p>
-          ) : null}
-        </div>
-
-        <div className={styles.field}>
-          <label className={styles.label} htmlFor="project-context">
-            Contexte optionnel
-          </label>
-          <textarea
-            id="project-context"
-            name="context"
-            className={styles.textarea}
-            rows={3}
-            value={precisions}
-            placeholder="Ajoutez uniquement le contexte utile au projet."
-            aria-describedby="project-context-help"
-            onChange={(event) => setPrecisions(event.target.value)}
-          />
-          <p className={styles.help} id="project-context-help">
-            Sans contexte, votre intention suffit pour créer le projet. Vous
-            pourrez préciser la suite avec Nora ensuite.
-          </p>
-        </div>
-
-        <div aria-live="assertive" aria-atomic="true">
-          {submitError ? (
-            <p className={styles.submitError} role="alert" data-testid="submit-error">
-              {submitError}
+          ) : (
+            <p className={styles.previewHintReady}>
+              Prêt à créer — aucun Cycle n&apos;est démarré automatiquement.
             </p>
-          ) : null}
-        </div>
+          )}
+        </aside>
+      </div>

+      <form
+        className={styles.composer}
+        onSubmit={onSend}
+        data-testid="new-project-composer"
+      >
+        <label className={styles.srOnly} htmlFor={`${fieldId}-composer`}>
+          Message à Nora
+        </label>
+        <textarea
+          ref={inputRef}
+          id={`${fieldId}-composer`}
+          className={styles.textarea}
+          rows={3}
+          value={composer}
+          disabled={pending}
+          placeholder="Décrivez votre intention…"
+          data-testid="new-project-input"
+          onChange={(event) => setComposer(event.target.value)}
+          onKeyDown={(event) => {
+            if (event.key === "Enter" && !event.shiftKey) {
+              event.preventDefault();
+              onSend();
+            }
+          }}
+        />
         <div className={styles.actions}>
           <button
             type="submit"
+            className={styles.quietButton}
+            disabled={pending || composer.trim().length === 0}
+            data-testid="new-project-send"
+          >
+            Envoyer
+          </button>
+          <button
+            type="button"
             className={styles.primaryButton}
-            disabled={pending || !idempotencyKey}
+            disabled={pending || !ready}
             data-testid="create-project-submit"
+            onClick={() => void onCreate()}
           >
             {pending ? "Création…" : "Créer le projet"}
           </button>
@@ -307,21 +273,22 @@ export function NewProjectIntentionPage() {
           >
             Annuler
           </Link>
-          <span className={styles.status} role="status" aria-live="polite">
-            {pending ? "Création en cours…" : ""}
-          </span>
         </div>
-
-        <details className={styles.details}>
-          <summary>Détails techniques</summary>
-          <p className={styles.help}>
-            Clé de tentative stable pendant les réessais, renouvelée après « Créer
-            un autre projet ».
-          </p>
-          <p className={styles.code} data-testid="idempotency-key">
-            {idempotencyKey || "Génération locale…"}
-          </p>
-        </details>
+        <div aria-live="assertive" aria-atomic="true">
+          {submitError ? (
+            <p
+              className={styles.submitError}
+              role="alert"
+              data-testid="submit-error"
+            >
+              {submitError}
+            </p>
+          ) : null}
+        </div>
+        <p className={styles.help}>
+          Nora clarifie l&apos;essentiel avant création. Aucun projet n&apos;est
+          créé tant que vous n&apos;avez pas choisi « Créer le projet ».
+        </p>
       </form>
     </div>
   );

```

### MODIFIED `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css` — FULL DIFF
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css
index 62812b9a..20d2eb7c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css
@@ -48,12 +48,13 @@
 .heroCta,
 .emptyCta,
 .cardPrimary,
-.cardSecondary {
+.orientationCta {
   display: inline-flex;
   align-items: center;
   justify-content: center;
   border-radius: var(--pm6-radius-md);
   padding: 11px 18px;
+  min-height: 38px;
   font-size: 0.9rem;
   font-weight: 600;
   text-decoration: none;
@@ -74,16 +75,115 @@
   background: var(--pm6-forest-hover);
 }

-.cardSecondary {
+.heroCta:focus-visible,
+.emptyCta:focus-visible,
+.cardPrimary:focus-visible,
+.orientationCta:focus-visible,
+.search:focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
+}
+
+.orientation {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: space-between;
+  gap: var(--pm6-space-4);
+  padding: var(--pm6-space-4) var(--pm6-space-5);
+  background: var(--pm6-cream);
+  border: 1px solid var(--pm6-cream-border);
+  border-radius: var(--pm6-radius-lg);
+}
+
+.orientationText {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  min-width: 0;
+  flex: 1;
+}
+
+.orientationBody {
+  margin: 0;
+  font-size: 0.9rem;
+  line-height: 1.5;
+  color: var(--pm6-ink-soft);
+}
+
+.orientationCta {
   background: var(--pm6-surface);
   border: 1px solid var(--pm6-border-strong);
   color: var(--pm6-ink);
 }

-.cardSecondary:hover {
+.orientationCta:hover {
   background: var(--pm6-surface-sunken);
 }

+.section {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-3);
+}
+
+.sectionHead {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: flex-end;
+  justify-content: space-between;
+  gap: var(--pm6-space-3);
+}
+
+.sectionTitle {
+  margin: 0;
+  font-size: 1.05rem;
+  font-weight: 650;
+  color: var(--pm6-ink);
+}
+
+.sectionHint {
+  margin: 0;
+  font-size: 0.82rem;
+  color: var(--pm6-muted);
+}
+
+.searchWrap {
+  flex: 1 1 220px;
+  max-width: 320px;
+}
+
+.search {
+  width: 100%;
+  min-height: 38px;
+  border: 1px solid var(--pm6-border-strong);
+  border-radius: var(--pm6-radius-md);
+  padding: 8px 12px;
+  font: inherit;
+  font-size: 0.9rem;
+  color: var(--pm6-ink);
+  background: var(--pm6-surface);
+}
+
+.srOnly {
+  position: absolute;
+  width: 1px;
+  height: 1px;
+  padding: 0;
+  margin: -1px;
+  overflow: hidden;
+  clip: rect(0, 0, 0, 0);
+  white-space: nowrap;
+  border: 0;
+}
+
+.cardTitleRow {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: var(--pm6-space-2);
+}
+
 .hint {
   margin: 0;
   font-size: 0.86rem;
@@ -228,6 +328,15 @@
   }
 }

+@media (prefers-reduced-motion: reduce) {
+  .heroCta,
+  .emptyCta,
+  .cardPrimary,
+  .orientationCta {
+    transition: none;
+  }
+}
+
 @media (max-width: 767px) {
   .hero {
     padding: var(--pm6-space-4);
@@ -238,10 +347,16 @@
   }

   .heroCta,
-  .emptyCta {
+  .emptyCta,
+  .orientationCta {
     width: 100%;
   }

+  .searchWrap {
+    max-width: none;
+    flex-basis: 100%;
+  }
+
   .card {
     padding: var(--pm6-space-4);
   }
@@ -250,8 +365,7 @@
     width: 100%;
   }

-  .cardPrimary,
-  .cardSecondary {
+  .cardPrimary {
     flex: 1 1 auto;
   }
 }

```

### MODIFIED `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx` — FULL DIFF
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
index 54bf9c47..00ddf709 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx
@@ -1,6 +1,6 @@
 "use client";

-import { useEffect, useState } from "react";
+import { useEffect, useMemo, useState } from "react";
 import Link from "next/link";
 import { listProjectsRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
 import styles from "./ProjectsPage.module.css";
@@ -16,10 +16,12 @@ type ListState =

 type Badge = { label: string; tone: "neutral" | "active" | "waiting" };

-function formatRelativeFr(iso: string | undefined): string {
-  if (!iso) return "Projet disponible";
+const RESUME_WINDOW_MS = 14 * 24 * 60 * 60 * 1000;
+
+function formatRelativeFr(iso: string | undefined): string | null {
+  if (!iso) return null;
   const ts = Date.parse(iso);
-  if (Number.isNaN(ts)) return "Projet disponible";
+  if (Number.isNaN(ts)) return null;
   const deltaMs = Date.now() - ts;
   const minutes = Math.floor(deltaMs / 60_000);
   if (minutes < 1) return "À l’instant";
@@ -29,7 +31,7 @@ function formatRelativeFr(iso: string | undefined): string {
     const d = new Date(ts);
     const hh = String(d.getHours()).padStart(2, "0");
     const mm = String(d.getMinutes()).padStart(2, "0");
-    return hours < 18 ? `Aujourd’hui, ${hh}h${mm}` : `Hier, ${hh}h${mm}`;
+    return `Aujourd’hui, ${hh}h${mm}`;
   }
   const days = Math.floor(hours / 24);
   if (days === 1) return "Hier";
@@ -44,7 +46,7 @@ function badgeFor(status: string): Badge {
     case "active":
       return { label: "Actif", tone: "active" };
     case "paused":
-      return { label: "En attente de décision", tone: "waiting" };
+      return { label: "En attente", tone: "waiting" };
     case "closed":
       return { label: "Clos", tone: "neutral" };
     case "archived":
@@ -54,9 +56,77 @@ function badgeFor(status: string): Badge {
   }
 }

+function matchesQuery(project: ProjectRow, query: string): boolean {
+  const q = query.trim().toLowerCase();
+  if (!q) return true;
+  const hay = [
+    project.title,
+    project.name,
+    project.objective,
+    project.context,
+    project.status,
+  ]
+    .filter(Boolean)
+    .join(" ")
+    .toLowerCase();
+  return hay.includes(q);
+}
+
+function isResumeCandidate(project: ProjectRow): boolean {
+  if (project.status === "closed" || project.status === "archived") return false;
+  if (!project.updatedAt) return false;
+  const ts = Date.parse(project.updatedAt);
+  if (Number.isNaN(ts)) return false;
+  return Date.now() - ts <= RESUME_WINDOW_MS;
+}
+
+function ProjectCard({
+  project,
+  primaryLabel = "Ouvrir",
+}: {
+  project: ProjectRow;
+  primaryLabel?: string;
+}) {
+  const badge = badgeFor(project.status);
+  const href = `/studio/projects/${encodeURIComponent(project.projectId)}`;
+  const activity = formatRelativeFr(project.updatedAt);
+  return (
+    <li className={styles.card} data-testid="studio-projects-card">
+      <div className={styles.cardMain}>
+        <div className={styles.cardTitleRow}>
+          <h3 className={styles.cardTitle}>{project.title}</h3>
+          <span className={styles.badge} data-tone={badge.tone}>
+            {badge.label}
+          </span>
+        </div>
+        <p className={styles.cardDescription}>
+          {project.objective?.trim() ||
+            project.context?.trim() ||
+            "Ouvrez le projet pour poursuivre avec Nora."}
+        </p>
+        {activity ? (
+          <p className={styles.cardMeta} data-testid="studio-projects-activity">
+            Dernière activité · {activity}
+          </p>
+        ) : null}
+      </div>
+      <div className={styles.cardActions}>
+        <Link
+          href={href}
+          className={styles.cardPrimary}
+          data-testid="studio-projects-open"
+        >
+          {primaryLabel}
+        </Link>
+      </div>
+    </li>
+  );
+}
+
 /** F1 — Projects entry point. Nora recommends, the Pilote decides. */
 export function ProjectsPage() {
   const [state, setState] = useState<ListState>({ status: "loading" });
+  const [query, setQuery] = useState("");

   useEffect(() => {
     let cancelled = false;
@@ -82,6 +152,23 @@ export function ProjectsPage() {
     };
   }, []);

+  const filtered = useMemo(() => {
+    if (state.status !== "ready") return [];
+    return state.projects.filter((p) => matchesQuery(p, query));
+  }, [state, query]);
+
+  const resumeProjects = useMemo(() => {
+    if (state.status !== "ready") return [];
+    return [...state.projects]
+      .filter(isResumeCandidate)
+      .sort((a, b) => {
+        const ta = Date.parse(a.updatedAt ?? "") || 0;
+        const tb = Date.parse(b.updatedAt ?? "") || 0;
+        return tb - ta;
+      })
+      .slice(0, 3);
+  }, [state]);
+
   const count =
     state.status === "ready"
       ? state.projects.length
@@ -89,34 +176,54 @@ export function ProjectsPage() {
         ? 0
         : null;

-  const subtitle =
-    count === null
-      ? "Entrée / reprise — Nora recommande, vous décidez"
-      : count === 0
-        ? "Aucun projet · créez pour démarrer"
-        : `${count} projet${count > 1 ? "s" : ""} · reprendre ou créer`;
-
-  const showHeroCreate = state.status !== "empty";
-
   return (
     <div className={styles.page} data-testid="studio-projects-home">
       <header className={styles.hero}>
         <div className={styles.heroText}>
           <p className={styles.heroEyebrow}>SFIA Studio</p>
-          <h1 className={styles.heroTitle}>Projets — entrée / reprise</h1>
-          <p className={styles.heroSubtitle}>{subtitle}</p>
+          <h1 className={styles.heroTitle}>Projets</h1>
+          <p className={styles.heroSubtitle}>
+            {count === null
+              ? "Reprendre un projet ou en créer un nouveau."
+              : count === 0
+                ? "Aucun projet pour le moment."
+                : `${count} projet${count > 1 ? "s" : ""} · reprendre ou créer`}
+          </p>
         </div>
-        {showHeroCreate ? (
+        {state.status !== "empty" ? (
           <Link
             href="/studio/projects/new"
             className={styles.heroCta}
             data-testid="studio-projects-create"
           >
-            Créer un projet
+            + Nouveau projet
           </Link>
         ) : null}
       </header>

+      {state.status === "ready" ? (
+        <section
+          className={styles.orientation}
+          data-testid="studio-projects-orientation"
+          aria-label="Orientation Nora"
+        >
+          <div className={styles.orientationText}>
+            <h2 className={styles.sectionTitle}>Orientation Nora</h2>
+            <p className={styles.orientationBody}>
+              Décrivez une nouvelle intention — Nora clarifie avant toute
+              création durable.
+            </p>
+          </div>
+          <Link
+            href="/studio/projects/new"
+            className={styles.orientationCta}
+            data-testid="studio-projects-ask-nora"
+          >
+            Demander à Nora
+          </Link>
+        </section>
+      ) : null}
+
       {state.status === "loading" ? (
         <p className={styles.hint} data-testid="studio-projects-loading">
           Chargement en cours…
@@ -124,7 +231,11 @@ export function ProjectsPage() {
       ) : null}

       {state.status === "error" ? (
-        <div className={styles.error} role="alert" data-testid="studio-projects-error">
+        <div
+          className={styles.error}
+          role="alert"
+          data-testid="studio-projects-error"
+        >
           <p className={styles.errorTitle}>{state.message}</p>
           <p className={styles.hint}>
             Réessayez dans un instant. Aucune donnée n&apos;est inventée.
@@ -134,58 +245,84 @@ export function ProjectsPage() {

       {state.status === "empty" ? (
         <div className={styles.empty} data-testid="studio-projects-empty">
-          <p className={styles.emptyTitle}>Aucun projet.</p>
+          <p className={styles.emptyTitle}>Aucun projet pour commencer</p>
           <p className={styles.emptyBody}>
-            Créez un projet pour commencer avec Nora. Vous pourrez ensuite
-            préciser votre besoin et décider de la suite.
+            Créez votre premier projet. Nora clarifiera l&apos;intention avec
+            vous avant toute matérialisation durable.
           </p>
           <Link
             href="/studio/projects/new"
             className={styles.emptyCta}
             data-testid="studio-projects-create"
           >
-            Créer un projet
+            + Nouveau projet
           </Link>
         </div>
       ) : null}

+      {state.status === "ready" && resumeProjects.length > 0 ? (
+        <section
+          className={styles.section}
+          data-testid="studio-projects-resume"
+          aria-labelledby="projects-resume-heading"
+        >
+          <h2 id="projects-resume-heading" className={styles.sectionTitle}>
+            À reprendre
+          </h2>
+          <p className={styles.sectionHint}>
+            Projets récemment mis à jour — dérivé de la dernière activité
+            connue.
+          </p>
+          <ul className={styles.cardList}>
+            {resumeProjects.map((project) => (
+              <ProjectCard
+                key={`resume-${project.projectId}`}
+                project={project}
+                primaryLabel="Reprendre"
+              />
+            ))}
+          </ul>
+        </section>
+      ) : null}
+
       {state.status === "ready" ? (
-        <ul className={styles.cardList} data-testid="studio-projects-list">
-          {state.projects.map((project) => {
-            const badge = badgeFor(project.status);
-            const href = `/studio/projects/${encodeURIComponent(project.projectId)}`;
-            return (
-              <li key={project.projectId} className={styles.card}>
-                <div className={styles.cardMain}>
-                  <h2 className={styles.cardTitle}>{project.title}</h2>
-                  <span className={styles.badge} data-tone={badge.tone}>
-                    {badge.label}
-                  </span>
-                  <p className={styles.cardDescription}>
-                    {project.objective?.trim() ||
-                      project.context?.trim() ||
-                      "Ouvrez le projet pour poursuivre avec Nora."}
-                  </p>
-                  <p className={styles.cardMeta}>
-                    {formatRelativeFr(project.updatedAt)}
-                  </p>
-                </div>
-                <div className={styles.cardActions}>
-                  <Link
-                    href={href}
-                    className={styles.cardPrimary}
-                    data-testid="studio-projects-open"
-                  >
-                    Reprendre
-                  </Link>
-                  <Link href={href} className={styles.cardSecondary}>
-                    Voir l&apos;état
-                  </Link>
-                </div>
-              </li>
-            );
-          })}
-        </ul>
+        <section
+          className={styles.section}
+          data-testid="studio-projects-all"
+          aria-labelledby="projects-all-heading"
+        >
+          <div className={styles.sectionHead}>
+            <h2 id="projects-all-heading" className={styles.sectionTitle}>
+              Tous les projets
+            </h2>
+            <div className={styles.searchWrap}>
+              <label className={styles.srOnly} htmlFor="projects-local-search">
+                Rechercher dans vos projets
+              </label>
+              <input
+                id="projects-local-search"
+                className={styles.search}
+                type="search"
+                value={query}
+                onChange={(event) => setQuery(event.target.value)}
+                placeholder="Rechercher…"
+                data-testid="studio-projects-search"
+                autoComplete="off"
+              />
+            </div>
+          </div>
+          {filtered.length === 0 ? (
+            <p className={styles.hint} data-testid="studio-projects-search-empty">
+              Aucun projet ne correspond à « {query.trim()} ».
+            </p>
+          ) : (
+            <ul className={styles.cardList} data-testid="studio-projects-list">
+              {filtered.map((project) => (
+                <ProjectCard key={project.projectId} project={project} />
+              ))}
+            </ul>
+          )}
+        </section>
       ) : null}
     </div>
   );

```

### MODIFIED `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx` — FULL DIFF
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index a423ec48..fdef6896 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -1477,15 +1477,40 @@ export function ConversationSurface({
             className={styles.composerStatus}
             aria-live="polite"
             data-testid="project-assistant-status"
+            data-nora-phase={
+              blocked
+                ? "blocked"
+                : uiState === "SENDING"
+                  ? "start"
+                  : busy
+                    ? uiState === "SOURCE_LOOKUP"
+                      ? "activity"
+                      : "activity"
+                    : uiState === "ERROR_RECOVERABLE"
+                      ? "error"
+                      : uiState === "ANSWERED"
+                        ? "complete"
+                        : "idle"
+            }
           >
-            {busy
-              ? uiState === "SOURCE_LOOKUP"
-                ? "Consultation des sources en cours…"
-                : "Nora rédige sa réponse…"
-              : blocked
-                ? "Assistant indisponible — configuration manquante."
-                : "Prêt"}
+            {blocked
+              ? "Assistant indisponible — configuration manquante."
+              : uiState === "SENDING"
+                ? "Nora travaille…"
+                : busy
+                  ? uiState === "SOURCE_LOOKUP"
+                    ? "Nora consulte les sources…"
+                    : "Nora travaille…"
+                  : uiState === "ERROR_RECOVERABLE"
+                    ? "Réponse interrompue — vous pouvez réessayer."
+                    : uiState === "ANSWERED"
+                      ? "Réponse prête"
+                      : "Prêt"}
           </span>
+          {/*
+            P3 composer ↑ / ■ / ↑ — STOPPED requires a real Abort/cancel seam.
+            CURRENT Product path has no cancelable in-flight turn; do not fake ■.
+          */}
           <button
             type="submit"
             className={styles.sendButton}
@@ -1496,16 +1521,22 @@ export function ConversationSurface({
               blocked
                 ? "Assistant indisponible"
                 : busy
-                  ? "Envoi en cours"
+                  ? "Nora travaille — arrêt non disponible sur ce chemin"
                   : draft.trim().length === 0
                     ? "Saisissez un message"
                     : "Envoyer le message"
             }
             aria-label={
-              canSend ? "Envoyer le message à Nora" : "Envoi indisponible"
+              canSend
+                ? "Envoyer le message à Nora"
+                : busy
+                  ? "Nora travaille"
+                  : "Envoi indisponible"
             }
           >
-            <span className={styles.sendLabelFull}>Envoyer</span>
+            <span className={styles.sendLabelFull}>
+              {busy ? "Nora travaille…" : "Envoyer"}
+            </span>
             <span className={styles.sendLabelCompact} aria-hidden="true">
               ↑
             </span>

```

### AFTER snapshots (full files for primary Product surfaces)
#### `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx` AFTER (full)
```tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { listProjectsRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import styles from "./ProjectsPage.module.css";

type ListResult = Awaited<ReturnType<typeof listProjectsRuntimeAction>>;
type ProjectRow = Extract<ListResult, { ok: true }>["projects"][number];

type ListState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "empty" }
  | { status: "ready"; projects: readonly ProjectRow[] };

type Badge = { label: string; tone: "neutral" | "active" | "waiting" };

const RESUME_WINDOW_MS = 14 * 24 * 60 * 60 * 1000;

function formatRelativeFr(iso: string | undefined): string | null {
  if (!iso) return null;
  const ts = Date.parse(iso);
  if (Number.isNaN(ts)) return null;
  const deltaMs = Date.now() - ts;
  const minutes = Math.floor(deltaMs / 60_000);
  if (minutes < 1) return "À l’instant";
  if (minutes < 60) return `Il y a ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    const d = new Date(ts);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `Aujourd’hui, ${hh}h${mm}`;
  }
  const days = Math.floor(hours / 24);
  if (days === 1) return "Hier";
  if (days < 7) return `Il y a ${days} jours`;
  return `Il y a ${Math.floor(days / 7)} sem.`;
}

function badgeFor(status: string): Badge {
  switch (status) {
    case "draft":
      return { label: "Brouillon", tone: "neutral" };
    case "active":
      return { label: "Actif", tone: "active" };
    case "paused":
      return { label: "En attente", tone: "waiting" };
    case "closed":
      return { label: "Clos", tone: "neutral" };
    case "archived":
      return { label: "Archivé", tone: "neutral" };
    default:
      return { label: status, tone: "neutral" };
  }
}

function matchesQuery(project: ProjectRow, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const hay = [
    project.title,
    project.name,
    project.objective,
    project.context,
    project.status,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

function isResumeCandidate(project: ProjectRow): boolean {
  if (project.status === "closed" || project.status === "archived") return false;
  if (!project.updatedAt) return false;
  const ts = Date.parse(project.updatedAt);
  if (Number.isNaN(ts)) return false;
  return Date.now() - ts <= RESUME_WINDOW_MS;
}

function ProjectCard({
  project,
  primaryLabel = "Ouvrir",
}: {
  project: ProjectRow;
  primaryLabel?: string;
}) {
  const badge = badgeFor(project.status);
  const href = `/studio/projects/${encodeURIComponent(project.projectId)}`;
  const activity = formatRelativeFr(project.updatedAt);
  return (
    <li className={styles.card} data-testid="studio-projects-card">
      <div className={styles.cardMain}>
        <div className={styles.cardTitleRow}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <span className={styles.badge} data-tone={badge.tone}>
            {badge.label}
          </span>
        </div>
        <p className={styles.cardDescription}>
          {project.objective?.trim() ||
            project.context?.trim() ||
            "Ouvrez le projet pour poursuivre avec Nora."}
        </p>
        {activity ? (
          <p className={styles.cardMeta} data-testid="studio-projects-activity">
            Dernière activité · {activity}
          </p>
        ) : null}
      </div>
      <div className={styles.cardActions}>
        <Link
          href={href}
          className={styles.cardPrimary}
          data-testid="studio-projects-open"
        >
          {primaryLabel}
        </Link>
      </div>
    </li>
  );
}

/** F1 — Projects entry point. Nora recommends, the Pilote decides. */
export function ProjectsPage() {
  const [state, setState] = useState<ListState>({ status: "loading" });
  const [query, setQuery] = useState("");

  useEffect(() => {
    let cancelled = false;
    void listProjectsRuntimeAction().then((result) => {
      if (cancelled) return;
      if (!result.ok) {
        setState({
          status: "error",
          message:
            result.error.message ||
            "Impossible de charger vos projets pour le moment.",
        });
        return;
      }
      if (result.projects.length === 0) {
        setState({ status: "empty" });
        return;
      }
      setState({ status: "ready", projects: result.projects });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    if (state.status !== "ready") return [];
    return state.projects.filter((p) => matchesQuery(p, query));
  }, [state, query]);

  const resumeProjects = useMemo(() => {
    if (state.status !== "ready") return [];
    return [...state.projects]
      .filter(isResumeCandidate)
      .sort((a, b) => {
        const ta = Date.parse(a.updatedAt ?? "") || 0;
        const tb = Date.parse(b.updatedAt ?? "") || 0;
        return tb - ta;
      })
      .slice(0, 3);
  }, [state]);

  const count =
    state.status === "ready"
      ? state.projects.length
      : state.status === "empty"
        ? 0
        : null;

  return (
    <div className={styles.page} data-testid="studio-projects-home">
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.heroEyebrow}>SFIA Studio</p>
          <h1 className={styles.heroTitle}>Projets</h1>
          <p className={styles.heroSubtitle}>
            {count === null
              ? "Reprendre un projet ou en créer un nouveau."
              : count === 0
                ? "Aucun projet pour le moment."
                : `${count} projet${count > 1 ? "s" : ""} · reprendre ou créer`}
          </p>
        </div>
        {state.status !== "empty" ? (
          <Link
            href="/studio/projects/new"
            className={styles.heroCta}
            data-testid="studio-projects-create"
          >
            + Nouveau projet
          </Link>
        ) : null}
      </header>

      {state.status === "ready" ? (
        <section
          className={styles.orientation}
          data-testid="studio-projects-orientation"
          aria-label="Orientation Nora"
        >
          <div className={styles.orientationText}>
            <h2 className={styles.sectionTitle}>Orientation Nora</h2>
            <p className={styles.orientationBody}>
              Décrivez une nouvelle intention — Nora clarifie avant toute
              création durable.
            </p>
          </div>
          <Link
            href="/studio/projects/new"
            className={styles.orientationCta}
            data-testid="studio-projects-ask-nora"
          >
            Demander à Nora
          </Link>
        </section>
      ) : null}

      {state.status === "loading" ? (
        <p className={styles.hint} data-testid="studio-projects-loading">
          Chargement en cours…
        </p>
      ) : null}

      {state.status === "error" ? (
        <div
          className={styles.error}
          role="alert"
          data-testid="studio-projects-error"
        >
          <p className={styles.errorTitle}>{state.message}</p>
          <p className={styles.hint}>
            Réessayez dans un instant. Aucune donnée n&apos;est inventée.
          </p>
        </div>
      ) : null}

      {state.status === "empty" ? (
        <div className={styles.empty} data-testid="studio-projects-empty">
          <p className={styles.emptyTitle}>Aucun projet pour commencer</p>
          <p className={styles.emptyBody}>
            Créez votre premier projet. Nora clarifiera l&apos;intention avec
            vous avant toute matérialisation durable.
          </p>
          <Link
            href="/studio/projects/new"
            className={styles.emptyCta}
            data-testid="studio-projects-create"
          >
            + Nouveau projet
          </Link>
        </div>
      ) : null}

      {state.status === "ready" && resumeProjects.length > 0 ? (
        <section
          className={styles.section}
          data-testid="studio-projects-resume"
          aria-labelledby="projects-resume-heading"
        >
          <h2 id="projects-resume-heading" className={styles.sectionTitle}>
            À reprendre
          </h2>
          <p className={styles.sectionHint}>
            Projets récemment mis à jour — dérivé de la dernière activité
            connue.
          </p>
          <ul className={styles.cardList}>
            {resumeProjects.map((project) => (
              <ProjectCard
                key={`resume-${project.projectId}`}
                project={project}
                primaryLabel="Reprendre"
              />
            ))}
          </ul>
        </section>
      ) : null}

      {state.status === "ready" ? (
        <section
          className={styles.section}
          data-testid="studio-projects-all"
          aria-labelledby="projects-all-heading"
        >
          <div className={styles.sectionHead}>
            <h2 id="projects-all-heading" className={styles.sectionTitle}>
              Tous les projets
            </h2>
            <div className={styles.searchWrap}>
              <label className={styles.srOnly} htmlFor="projects-local-search">
                Rechercher dans vos projets
              </label>
              <input
                id="projects-local-search"
                className={styles.search}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Rechercher…"
                data-testid="studio-projects-search"
                autoComplete="off"
              />
            </div>
          </div>
          {filtered.length === 0 ? (
            <p className={styles.hint} data-testid="studio-projects-search-empty">
              Aucun projet ne correspond à « {query.trim()} ».
            </p>
          ) : (
            <ul className={styles.cardList} data-testid="studio-projects-list">
              {filtered.map((project) => (
                <ProjectCard key={project.projectId} project={project} />
              ))}
            </ul>
          )}
        </section>
      ) : null}
    </div>
  );
}

```

#### `projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx` AFTER (full)
```tsx
"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import {
  absorbUserTurn,
  emptyDraft,
  isMinimumSufficient,
  nextNoraPrompt,
  openingNoraTurn,
  type ChatTurn,
  type PreProjectDraft,
} from "./newProjectConversation";
import styles from "./NewProjectIntentionPage.module.css";

type CreateResult = Awaited<ReturnType<typeof createProjectRuntimeAction>>;
type CreateSuccess = Extract<CreateResult, { ok: true }>;

function createIdempotencyKey(): string {
  const uuid = globalThis.crypto?.randomUUID?.();
  return `pm6-intent:${uuid ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
}

function turnId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

/**
 * P5-S06 — conversational New Project (chat-first) before durable Create.
 * Ephemeral client intention only · createProjectRuntimeAction on explicit CTA.
 * No D1 Intake · no pre-Project store · no auto Cycle · ZERO REAL cognition.
 */
export function NewProjectIntentionPage() {
  const router = useRouter();
  const fieldId = useId();
  const [draft, setDraft] = useState<PreProjectDraft>(() => emptyDraft());
  const [turns, setTurns] = useState<ChatTurn[]>(() => [openingNoraTurn()]);
  const [composer, setComposer] = useState("");
  const [idempotencyKey, setIdempotencyKey] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [created, setCreated] = useState<CreateSuccess | null>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setIdempotencyKey(createIdempotencyKey());
  }, []);

  useEffect(() => {
    const el = threadRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [turns, draft]);

  const ready = isMinimumSufficient(draft);

  function onSend(event?: FormEvent) {
    event?.preventDefault();
    const text = composer.trim();
    if (!text || pending) return;
    const nextDraft = absorbUserTurn(draft, text);
    const userTurn: ChatTurn = {
      id: turnId("user"),
      role: "user",
      text,
    };
    const noraTurn: ChatTurn = {
      id: turnId("nora"),
      role: "nora",
      text: nextNoraPrompt(nextDraft),
    };
    setDraft(nextDraft);
    setTurns((current) => [...current, userTurn, noraTurn]);
    setComposer("");
    setSubmitError(null);
  }

  async function onCreate() {
    if (pending || !ready) return;
    setSubmitError(null);
    const stableKey = idempotencyKey || createIdempotencyKey();
    if (!idempotencyKey) setIdempotencyKey(stableKey);
    setPending(true);
    try {
      const intention = draft.intention.trim();
      const result = await createProjectRuntimeAction({
        name: draft.name.trim(),
        objective: intention,
        context: draft.context.trim() || intention,
        criticality: "STANDARD",
        constraints: [],
        idempotencyKey: stableKey,
      });

      if (result.ok) {
        setCreated(result);
        router.push(
          `/studio/projects/${encodeURIComponent(result.projectId)}`,
        );
        return;
      }

      if (result.error.code === "DOCTRINE_UNRESOLVED") {
        setSubmitError(
          "Le projet n’a pas pu être créé : le référentiel local n’a pas pu être validé. Rien n’a été enregistré.",
        );
        return;
      }
      setSubmitError(
        result.error.retryable
          ? "La création n’a pas abouti. Vous pouvez réessayer : la conversation est conservée."
          : "La création n’a pas abouti. Précisez encore l’intention ou le nom avant de réessayer.",
      );
    } catch {
      setSubmitError(
        "Le service local n’a pas répondu. La conversation est conservée ; vous pouvez réessayer.",
      );
    } finally {
      setPending(false);
    }
  }

  if (created) {
    return (
      <div className={styles.page} data-testid="new-project-created">
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>Projet créé</h1>
          <p className={styles.heroSubtitle}>
            Ouverture du workspace… La suite se poursuit avec Nora dans le
            projet durable.
          </p>
        </header>
        <Link
          href={`/studio/projects/${encodeURIComponent(created.projectId)}`}
          className={styles.primaryButton}
          data-testid="open-project-workspace"
        >
          Ouvrir le projet
        </Link>
      </div>
    );
  }

  return (
    <div
      className={styles.page}
      data-testid="create-project-form"
      data-surface="new-project-chat"
      data-create-surface="conversational"
    >
      <header className={styles.hero}>
        <p className={styles.heroEyebrow}>SFIA Studio</p>
        <h1 className={styles.heroTitle}>Nouveau projet</h1>
        <p className={styles.heroSubtitle}>
          Discutez de l&apos;intention avec Nora. Aucun projet durable n&apos;est
          créé tant que vous n&apos;avez pas confirmé.
        </p>
      </header>

      <div className={styles.chatLayout}>
        <div
          className={styles.thread}
          ref={threadRef}
          data-testid="new-project-thread"
          aria-live="polite"
        >
          {turns.map((turn) => (
            <div
              key={turn.id}
              className={
                turn.role === "user" ? styles.bubbleUser : styles.bubbleNora
              }
              data-role={turn.role}
            >
              <p className={styles.bubbleLabel}>
                {turn.role === "user" ? "Vous" : "Nora"}
              </p>
              <p className={styles.bubbleText}>{turn.text}</p>
            </div>
          ))}
        </div>

        <aside
          className={styles.preview}
          data-testid="new-project-preview"
          aria-labelledby={`${fieldId}-preview`}
        >
          <h2 id={`${fieldId}-preview`} className={styles.previewTitle}>
            Ce que Nora a compris
          </h2>
          <dl className={styles.previewList}>
            <div>
              <dt>Nom</dt>
              <dd data-testid="preview-name">
                {draft.name.trim() || "Pas encore précisé"}
              </dd>
            </div>
            <div>
              <dt>Intention</dt>
              <dd data-testid="preview-intention">
                {draft.intention.trim() || "Pas encore précisée"}
              </dd>
            </div>
            <div>
              <dt>Contexte</dt>
              <dd data-testid="preview-context">
                {draft.context.trim() || "Optionnel"}
              </dd>
            </div>
          </dl>
          {!ready ? (
            <p className={styles.previewHint}>
              Nom et intention sont requis avant création.
            </p>
          ) : (
            <p className={styles.previewHintReady}>
              Prêt à créer — aucun Cycle n&apos;est démarré automatiquement.
            </p>
          )}
        </aside>
      </div>

      <form
        className={styles.composer}
        onSubmit={onSend}
        data-testid="new-project-composer"
      >
        <label className={styles.srOnly} htmlFor={`${fieldId}-composer`}>
          Message à Nora
        </label>
        <textarea
          ref={inputRef}
          id={`${fieldId}-composer`}
          className={styles.textarea}
          rows={3}
          value={composer}
          disabled={pending}
          placeholder="Décrivez votre intention…"
          data-testid="new-project-input"
          onChange={(event) => setComposer(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              onSend();
            }
          }}
        />
        <div className={styles.actions}>
          <button
            type="submit"
            className={styles.quietButton}
            disabled={pending || composer.trim().length === 0}
            data-testid="new-project-send"
          >
            Envoyer
          </button>
          <button
            type="button"
            className={styles.primaryButton}
            disabled={pending || !ready}
            data-testid="create-project-submit"
            onClick={() => void onCreate()}
          >
            {pending ? "Création…" : "Créer le projet"}
          </button>
          <Link
            href="/studio"
            className={styles.quietButton}
            data-testid="create-project-cancel"
          >
            Annuler
          </Link>
        </div>
        <div aria-live="assertive" aria-atomic="true">
          {submitError ? (
            <p
              className={styles.submitError}
              role="alert"
              data-testid="submit-error"
            >
              {submitError}
            </p>
          ) : null}
        </div>
        <p className={styles.help}>
          Nora clarifie l&apos;essentiel avant création. Aucun projet n&apos;est
          créé tant que vous n&apos;avez pas choisi « Créer le projet ».
        </p>
      </form>
    </div>
  );
}

```

#### `projects/sfia-studio/app/app/login/login-client.tsx` AFTER (full)
```tsx
"use client";

import { useMemo } from "react";
import "@/features/pre-m6-product-ui/product-tokens.css";
import styles from "./login-client.module.css";

const ERROR_MESSAGES: Record<string, string> = {
  github_user_not_allowlisted:
    "Votre compte GitHub n'est pas autorisé à accéder à SFIA Studio.",
  github_id_unparseable:
    "Impossible de vérifier l'identité GitHub. Réessayez la connexion.",
  ALLOWLIST_DENIED:
    "Votre identité GitHub n'est plus autorisée pour SFIA Studio.",
  NO_SESSION: "Authentification requise pour accéder à SFIA Studio.",
  PROVIDER_ACCOUNT_MISSING:
    "Session incomplète — reconnectez-vous avec GitHub.",
  AUTH_CONFIG_ERROR:
    "Connexion indisponible pour le moment. Réessayez plus tard.",
  provider_not_allowed: "Seul GitHub est accepté pour se connecter.",
};

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}

export function LoginClient({
  errorCode,
  fromPath,
}: {
  errorCode?: string | null;
  fromPath?: string | null;
}) {
  const message = useMemo(() => {
    if (!errorCode) return null;
    return (
      ERROR_MESSAGES[errorCode] ??
      "Accès refusé. Connectez-vous avec un compte GitHub autorisé."
    );
  }, [errorCode]);

  const callbackURL =
    fromPath && fromPath.startsWith("/") && !fromPath.startsWith("//")
      ? fromPath
      : "/studio";

  const githubStartHref = `/api/auth/github-start?from=${encodeURIComponent(callbackURL)}`;

  return (
    <div className={styles.page}>
      <header className={styles.topBrand} aria-hidden="false">
        <span className={styles.mark} aria-hidden="true">
          S
        </span>
        <span className={styles.brandText}>SFIA Studio</span>
      </header>

      <div className={styles.layout}>
        <section className={styles.narrative} aria-labelledby="login-narrative">
          <p className={styles.eyebrow}>Espace projet</p>
          <h1 id="login-narrative" className={styles.narrativeTitle}>
            Un espace de travail calme, continu et gouverné.
          </h1>
          <p className={styles.narrativeBody}>
            Retrouvez vos projets, leur contexte et votre conversation avec
            Nora.
          </p>
        </section>

        <main className={styles.card} data-testid="login-surface">
          <h2 className={styles.title}>Bienvenue dans SFIA Studio</h2>
          <p className={styles.lead}>
            Connectez-vous pour retrouver vos projets et reprendre votre
            travail.
          </p>

          {message ? (
            <p role="alert" data-testid="login-error" className={styles.error}>
              {message}
            </p>
          ) : null}

          {/*
            Native <a> — OAuth must work even when client chunks fail to hydrate.
            No preventDefault: href always navigates to public /api/auth/github-start.
          */}
          <a
            href={githubStartHref}
            data-testid="login-github"
            className={styles.githubCta}
          >
            <GitHubMark className={styles.githubIcon} />
            Continuer avec GitHub
          </a>

          <p className={styles.note}>
            L&apos;accès est réservé aux comptes autorisés.
          </p>
          <p className={styles.sessionHint}>
            Votre session vous ramène à votre espace de travail.
          </p>
        </main>
      </div>
    </div>
  );
}

```

## 11. Résultats tests
| Suite | Result |
| --- | --- |
| `p5.s06.pilotExperience.d0.test.tsx` | **6 PASS** |
| `__tests__/auth/**` ciblés | **122 PASS / 1 skipped** |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** |
| `npm run build` | **PASS** |
| `npm test` full | **5278 PASS / 139 skipped** (475 files passed / 19 skipped) |
| REAL campaign | **NOT RUN** |

Full S06 test file is in §10 CREATED.

## 12. Preuves visuelles
Mono-file handoff cannot attach PNG binaries. Captures exist locally with hashes:

| Path | bytes | sha256 prefix |
| --- | --- | --- |
| `.tmp-sfia-review/p5-s06-visual/figma/auth-desktop-130-3.png` | 45665 | `22657f8b80e1b60f…` |
| `.tmp-sfia-review/p5-s06-visual/figma/auth-mobile-190-551.png` | 13112 | `b8a534cfcaa9b8d0…` |
| `.tmp-sfia-review/p5-s06-visual/figma/new-project-desktop-67-39.png` | 148342 | `85138e214c38cc02…` |
| `.tmp-sfia-review/p5-s06-visual/figma/new-project-mobile-190-284.png` | 30336 | `8cd0279c620cc485…` |
| `.tmp-sfia-review/p5-s06-visual/figma/projects-desktop-63-39.png` | 105461 | `e00814d68e3a78eb…` |
| `.tmp-sfia-review/p5-s06-visual/figma/projects-mobile-190-253.png` | 24023 | `e22753393234cff1…` |
| `.tmp-sfia-review/p5-s06-visual/runtime/auth-desktop-1440x1024.png` | 64908 | `34d1b574b85536dc…` |
| `.tmp-sfia-review/p5-s06-visual/runtime/auth-mobile-390x844.png` | 50063 | `09bab4f459b45fa7…` |
| `.tmp-sfia-review/p5-s06-visual/runtime/new-project-desktop-1440x1024.png` | 116011 | `db82d1cfe54e01db…` |
| `.tmp-sfia-review/p5-s06-visual/runtime/new-project-mobile-390x844.png` | 48026 | `a24ec95f3be226d9…` |
| `.tmp-sfia-review/p5-s06-visual/runtime/projects-desktop-1440x1024.png` | 156759 | `4544f84324450536…` |
| `.tmp-sfia-review/p5-s06-visual/runtime/projects-mobile-390x844.png` | 59539 | `4a70e9ef86f4a3ea…` |

Viewports: Auth/Projects/New Project desktop 1440×1024 and mobile 390×844.
Auth captured on `/login`. Projects on `/studio` (not `/studio/projects` which 404s). New Project on `/studio/projects/new` with auth storage.

## 13. Comparaison Figma / runtime
### Auth 130:3 / 190:551
SHELL split narrative+card: aligned. CTA Continuer avec GitHub + mark: aligned. Green-dot continuity Figma: absent (Class B). **Comparative YES · ≠ Visual PASS.**

### Projects 63:39 / 190:253
SHELL ProductShell KEEP. Hierarchy hero / + Nouveau / Orientation / À reprendre / Tous + search: present. Figma table+Attention column: **not invented** (Class B honesty). Mobile stacks vs compact list: Class B.

### New Project 67:39 / 190:284
Conversation + preview + CTA Créer: semantic OK. Figma 3-col + quick-replies: **not invented** (Class B/C).

### Nora motion 125:*
Labels only from real uiState. STOPPED **not shown**. No motion PASS claimed.

## 14. Simplification qualitative
Removed: New Project form as nominal path. Added: min-sufficient conversation, preview, project search, real orientation href. MATERIAL: create/list actions, ProductShell, github-start. PROTECTIVE: no Project before CTA, no fake STOP, no fake attention. Architecture dupliquée: NON.

## 15. Architecture-parallelism check
Second store/Nora/router: NO. D1 nominal: NO. New persistence: NO. Auth authority: NO. Pre-Project: client ephemeral only.

## 16. REAL = 0
OPS1_CONVERSATION_PROVIDER=fake for visual. Clarification deterministic. No OpenAI S06 campaign.

## 17. Réserves
### BLOCKING
P3 Nora STOP/■ — no Product Abort seam; no fake STOPPED; S06 cannot be COMPLETE on C without Morris (accept PARTIAL or cancellation architecture delta).

### NON-BLOCKING
Visual Class B Projects/New Project vs EXPLORATORY Figma; STREAMING not distinct; Auth green-dot missing; PNG binaries not in this markdown file.

## 18. Dette
| Debt | Owner | Target | Exit |
| --- | --- | --- | --- |
| P5-S06-DEBT-NORA-STOP | Product/runtime | S06 CP or dedicated gate | Abort seam + ■ OR Morris accept PARTIAL |
| P5-S06-DEBT-VISUAL-CLASS-B | Frontend | S06 CP / S08 | Close Class B without inventing facts |
| Pre-Project ephemeral | Product | S07 if durable needed | Morris architecture delta |

## 19. Décisions Morris requises
1. Accepter LOCAL CANDIDATE with C PARTIAL **or** authorize STOP architecture
2. Git Integration projet = gate distinct after ChatGPT Review
3. S07 NOT STARTED until S06 gate

## 20. Verdict unique
**READY FOR REVIEW — P5-S06 LOCAL CANDIDATE**

Anti-claims: ≠ INTEGRATED · ≠ P5 COMPLETE · ≠ P6 READY · ≠ runtime v3 ADOPTED · ≠ global Visual PASS · ≠ REAL proven · ≠ S06 COMPLETE on Axe C STOP
