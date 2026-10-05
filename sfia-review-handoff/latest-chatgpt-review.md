P5-S01 — FIRST INTEGRATED PRODUCT VERTICAL SLICE
WORKSPACE / CONVERSATION
+ SEMANTIC CONTEXT
+ COGNITIVE ROUTING
+ VISUAL FIDELITY
D0 / ZERO REAL
FULL REVIEW PACK

Timestamp: 2026-10-05 09:19:19 +0200
Cycle: 8 — Delivery / implémentation
Profile: Critical
Typology: EVOL
Morris P5 authorization: CONSUMED (GO P5)

======================================================================
LOCAL GIT TRUTH
======================================================================
Repository: mcleland147/sfia-workspace (worktree)
Branch: delivery/sfia-studio-product-simplification-p5-s01-integrated-product-vertical-slice
HEAD / base: 04527bede4a3aad1853387b9eb39af3fe0615412
Expected origin/main: 04527bede4a3aad1853387b9eb39af3fe0615412
MATCH: YES
P4 final: PR #554 MERGED · CI #676 SUCCESS · Required Gate SUCCESS
Staged: EMPTY
Project commit/push/PR/merge this pass: NO

git status --short:
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
 M projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
 M projects/sfia-studio/app/lib/platform/observability/types.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
?? .tmp-sfia-review/p5-s01-diff-stat.txt
?? .tmp-sfia-review/p5-s01-frontend-diff.txt
?? .tmp-sfia-review/p5-s01-name-status.txt
?? .tmp-sfia-review/p5-s01-roadmap-diff.txt
?? .tmp-sfia-review/p5-s01-routing-diff.txt
?? .tmp-sfia-review/visual/
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s01.cognitiveRouting.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s01.integratedProduct.d0.test.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s01.semanticInvariants.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/ProductRailRecents.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectContextSummary.module.css
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectContextSummary.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/workspaceContextPresentation.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveRoutingPolicy.ts
?? projects/sfia-studio/app/public/branding/
?? projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md

```

git diff --name-status:
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
M	projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
M	projects/sfia-studio/app/lib/platform/observability/types.ts
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md

```

git diff --stat:
```
 .tmp-sfia-review/chatgpt-review.md                 | 172 +-----
 .../automaticProjectResume.ui.test.tsx             |   5 +-
 .../pre-m6-product-ui/ProductShell.module.css      | 294 +++++++---
 .../features/pre-m6-product-ui/ProductShell.tsx    | 145 ++---
 .../ProjectWorkspacePage.module.css                | 636 +++++++++++++++++----
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     | 366 +++++++++---
 .../hooks/useProductConversation.ts                |   9 +-
 .../features/pre-m6-product-ui/product-tokens.css  |  74 ++-
 .../surfaces/ConversationSurface.module.css        |  46 +-
 .../pre-m6-product-ui/surfaces/LpsSurface.tsx      |  12 +-
 .../features/project-assistant/orchestrateTurn.ts  |   4 +-
 .../app/lib/nora-cognitive-runtime/index.ts        |  18 +
 .../nora-cognitive-runtime/reasoningCapability.ts  |  25 +-
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts | 143 ++++-
 .../app/lib/nora-cognitive-runtime/types.ts        |   9 +
 .../app/lib/nora-eval/capabilityBudget.ts          |  61 ++
 .../app/lib/platform/observability/types.ts        |   3 +-
 .../convergence/sfia-studio-convergence-roadmap.md |  25 +-
 18 files changed, 1468 insertions(+), 579 deletions(-)

```

======================================================================
P5 STATUS
======================================================================
BEFORE: P5 NOT AUTHORIZED / NOT STARTED (post P4 final truth-sync on main)
AFTER:
- P5 AUTHORIZED BY MORRIS = YES
- P5 STARTED = YES
- P5 IN PROGRESS = YES
- P5-S01 = LOCAL CANDIDATE (visual reserves)
- R1/R2/R3 = NOT STARTED
- READY FOR REAL = NO
- runtime v3 = NON ADOPTED
- ZERO REAL = YES

======================================================================
SOURCES READ (summary)
======================================================================
Build Doctrine · Roadmap · C1 · P1 · P2 · P3 · P4 · v3 30–37 applicable · Nora trajectory · Process templates · CURRENT code seams · Figma MCP Desktop 46:2 / Compact 190:44 / Mobile 190:306 / Meridian 179:2
CKC Delivery coverage: SYNTHETIC / INCOMPLETE (canonical sources used; no invented CKC)

======================================================================
BUILD DOCTRINE APPLICATION
======================================================================
R1–R26 applied: reuse Pre-M6 + Nora runtime; no parallel Product/Nora/Runner/RouterService; no third token family; Fake only at external LLM boundary; no REAL; no architecture pivot; logicalTurnId preferred for cognitive task identity.

======================================================================
FIGMA DESIGN EXTRACTION CONTRACT (Workspace P5-S01)
======================================================================
File key: m4g8j0gNbEzfIuH6S9AZJF
Desktop canonical: 46:2 · 1440×1024
Compact: 190:44 · 1024×768
Mobile: 190:306 · 390×844
Rail: 192×1024 · Meridian 192×390 @ y=250 opacity ~0.10
Project App 1224 · Global header 54 · Project header 104 · Body 866 · Conversation 868 · Context 356 · Focus 50 · Transcript 638 · Composer 178
Colors: canvas #fffdf9 · rail #f1ece5 · body #fbf7f2 · ink #1f1a16 · Nora #d9563b · ok #157a55
Meridian asset: projects/sfia-studio/app/public/branding/meridian-emblem-product.png
Provenance: Figma raw fill via download_assets(179:2) · truncated PNG recovered with Pillow LOAD_TRUNCATED_IMAGES · lion+compass content verified
Reference screenshot: .tmp-sfia-review/visual/figma/workspace-desktop-46-2.png
Runtime screenshots: NOT CAPTURED (Playwright auth bootstrap required) → Visual = CANDIDATE WITH RESERVES · NOT PIXEL-PERFECT PROVEN

======================================================================
CURRENT→TARGET ASSET MATRIX (summary)
======================================================================
| Asset | Class | Action S01 |
| ProductShell | HARVEST/ADAPT | P3 rail layout |
| ProjectWorkspacePage | ADAPT | P3 workspace geometry |
| ConversationSurface | ADAPT | flatter transcript / sticky composer |
| ProjectContextSummary | NEW (projection UI) | Pilot context panel |
| product-tokens --pm6-* | ADAPT | P3 colors/geometry |
| --sfia-* | KEEP/AUDIT | dual-family TEMP WITH EXIT |
| cognitiveWorkloadPolicy | KEEP | Strategy first |
| cognitiveRoutingPolicy | NEW COMPLETE | P5 routing |
| capabilityBudget MW0 | FREEZE | historical GPT-5.6 |
| buildP5TargetCapabilityManifest | NEW | Luna/Sol/Astra |
| runNoraCognitiveTurn | ADAPT | wire routing |
| runNoraAgentsTurn | KEEP | same Runner |
| FakeConversationProvider | KEEP | D0 external boundary |
| logicalProductTurn / logicalTurnId | KEEP | cognitiveTaskId |
| orchestrateTurn | ADAPT | correlationId←logicalTurnId |
| F2 analyzeIntent | RETIRE LATER align | P5-DEBT-F2-ROUTING-ALIGNMENT |
| Meridian | NEW asset | branding |
| VsDemo | HARVEST honesty | not Product SoT |

======================================================================
ARCHITECTURE PARALLELISM CHECK
======================================================================
1 Existing Product model reused? YES
2 Existing Product SQLite reused? YES
3 Existing CWP reused? YES
4 Existing Nora reused? YES
5 Existing Agents Runner reused? YES
6 Existing provider boundary reused? YES
7 Studio Cognitive Context reused/adapted? YES
8 logical Product turn reused? YES
9 Product resolution reused? YES
10 Pre-M6 frontend audited? YES
11 Tokens audited? YES
12 No third token family? YES
13 No router service? YES
14 No second Nora? YES
15 No second Product model? YES
16 No second persistence? YES
17 No separate eval runtime? YES
18 No fake Product path? YES
19 No mobile Product semantics fork? YES
20 No new cockpit? YES
21 No universal validator? YES
22 No metrics factory? YES

======================================================================
PIB / SIMPLIFICATION (S01 scope)
======================================================================
MATERIAL: PRESERVED
PROTECTIVE: PRESERVED
ACCIDENTAL: REDUCED at S01 scope (no model/effort/CKC selectors; Conversation primary; context panel)
Pilot/runtime admin: NEAR ZERO
parallel cockpit: NO
new semantic truth: NO
Net Complexity: IMPROVED AT S01 SCOPE (local) / NOT YET PROVEN globally

======================================================================
TESTS / VALIDATION
======================================================================
Targeted P5: 22 PASS (routing 17 + integrated 1 + semantic 3 + workspace UI 1)
Adjacent: MW2 CWP/modelSettings/nativeLiveBoundary PASS · pre-m6-product-ui suite 201 PASS in combined run
typecheck: PASS
lint: PASS
build: PASS
Playwright runtime visual: NOT RUN (auth bootstrap) — visual reserve
git diff --check: trailing blank line only on .tmp review pack (rewritten below)
Staged: EMPTY
REAL calls: 0 · REAL spend: 0

======================================================================
DEBT / EXIT
======================================================================
P5-DEBT-F2-ROUTING-ALIGNMENT — F2 analyzeIntent still static provider model — Owner P5 — Exit before R3 / integrated completion — Proof: same Product cognitive policy/provenance
OPENAI_MODEL / OPENAI_REASONING_EFFORT — RETIRE LATER from nominal Product routing — TEMP WITH EXIT for bootstrapping/eval
Dual --sfia-* / --pm6-* — TEMP WITH EXIT — converge presentation without third family
Escalation runtime loop — policy max=1 only — exercise before R1
Visual runtime Figma comparison — capture after auth — before claiming Visual PASS
Synthesis shortcut disabled — honest until Product synthesis projection exists
Meridian asset truncated-recovery — replace with clean export if available — Owner P5 visual

======================================================================
GATES
======================================================================
Consumed: MORRIS P5 AUTHORIZATION
Next after ChatGPT PASS: MORRIS P5-S01 GIT INTEGRATION GATE
NOT consumed: REAL · MERGE · R1 · R2 · R3 · runtime v3 adoption

======================================================================
FINAL VERDICT (Cursor self)
======================================================================
READY FOR CHATGPT P5-S01 INTEGRATED DELIVERY REVIEW —
P5 AUTHORIZED / P5 IN PROGRESS /
FIRST PRODUCT VERTICAL SLICE LOCAL CANDIDATE /
P3 WORKSPACE VISUAL CANDIDATE (WITH RESERVES) /
COGNITIVE ROUTING D0 PROVEN /
ZERO REAL

≠ P5 COMPLETE · ≠ PIXEL-PERFECT GLOBAL PASS · ≠ READY FOR REAL · ≠ READY FOR PR/MERGE

======================================================================
FULL P5 DELIVERY DOCUMENT
======================================================================
# SFIA Studio — Chat-First Product Simplification — P5 Integrated Delivery (P5-S01 — First Integrated Product Vertical Slice)

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| **Milestone** | **P5 — INTEGRATED DELIVERY** (Delivery / Implementation / Evidence source) |
| **Slice** | **P5-S01 — First Integrated Product Vertical Slice** |
| **Pass** | **P5-S01 DELIVERY DOCUMENTATION** (evidence source, local) |
| **Typologie** | Delivery evidence dans macro **EVOL** — **≠** doctrine · **≠** nouvelle architecture |
| **Autorité architecture** | **P4** (`04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`) — **inchangée** |
| **Branche** | `delivery/sfia-studio-product-simplification-p5-s01-integrated-product-vertical-slice` |
| **Base / HEAD Git** | `04527bede4a3aad1853387b9eb39af3fe0615412` (changements P5-S01 = **working tree local non commité**) |
| **Base d’intégration** | PR **#554** **MERGED** · CI **#676** **SUCCESS** · Required Gate **SUCCESS** |
| **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
| **P5 AUTHORIZED BY MORRIS** | **YES** (GO P5 consommé dans cette conversation) |
| **P5 STARTED** | **YES** |
| **P5 IN PROGRESS** | **YES** |
| **P5-S01** | **LOCAL CANDIDATE** (réserves visuelles — voir §22 / §25) |
| **R1 / R2 / R3** | **NOT STARTED** |
| **ZERO REAL** | **YES** — aucun appel OpenAI réel dans P5-S01 |
| **READY FOR REAL** | **NO** |
| **runtime v3** | **NON ADOPTED** |
| **Git (ce pass)** | **NO** project commit · **NO** push · **NO** PR · **NO** merge |
| **Langue** | Français (identifiants canoniques anglais préservés) |
| **Fichier** | `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` |
| **Date** | 2026-10-05 · Europe/Paris |

> **Lecture rapide.** Ce document est la **source de livraison / implémentation / preuve** de P5-S01. Il **décrit ce qui a été construit et ce qui est prouvé**, avec ses limites. Il **ne redéfinit rien** : P4 reste l’autorité d’architecture, P3 l’autorité d’expérience/Figma, P2 l’autorité fonctionnelle, P1 l’autorité de simplification. **P5-S01 = LOCAL CANDIDATE avec réserves** : routage cognitif D0 + convergence Workspace/Conversation P3 implémentés et testés localement ; **fidélité visuelle runtime vs Figma NON prouvée** ; **ZERO REAL** ; **R1/R2/R3 NOT STARTED** ; **READY FOR REAL = NO**.

> **Règle de lecture des preuves.** *Implémenté* ≠ *prouvé* ≠ *intégré* ≠ *REAL*. Chaque affirmation ci-dessous est qualifiée par son niveau de preuve. Les résultats de tests/typecheck/lint/build sont ceux **rapportés par la passe de livraison** ; ce document n’en invente pas d’autres et ne les a pas ré-exécutés lors de sa rédaction.

---

## 1. Metadata / authority

### 1.1 Trajectoire CURRENT

```text
P1 = VALIDATED / INTEGRATED / CLOSED
P2 = VALIDATED / INTEGRATED / CLOSED          (PR #549)
P3 = VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED   (PR #550 + #551)
P4 = GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS
     (PR #552 · closure patch PR #553 · truth-sync PR #554 MERGED)
main @ 04527bede4a3aad1853387b9eb39af3fe0615412
CI #676 = SUCCESS · Required Gate = SUCCESS
Morris P5 AUTHORIZATION = CONSUMED (GO P5)
P5 = AUTHORIZED / STARTED / IN PROGRESS
P5-S01 = LOCAL CANDIDATE (visual reserves) — working tree, NOT committed
```

### 1.2 Hiérarchie d’autorité

| Domaine | Autorité | Rôle de ce document |
| --- | --- | --- |
| Simplification (PIB, MATERIAL/PROTECTIVE/ACCIDENTAL) | P1 | Hérite |
| Fonctionnel (FOM, Deliverable ≠ Artifact, HD) | P2 | Hérite |
| Workspace / IA / Figma | P3 | Hérite · implémente un sous-ensemble |
| Sémantique / Projection / Cognition / Routing / Entry Contract | **P4** | Hérite · **implémente un sous-ensemble D0** |
| Delivery / implémentation / preuve | **P5 (ce document)** | **Source de preuve uniquement** |

### 1.3 Ce que ce document n’est pas

- **≠** nouvelle doctrine Product ni architecture ;
- **≠** décision d’architecture (toute divergence P4 exige un gate Morris) ;
- **≠** preuve REAL, R1/R2/R3, ou pixel-perfect ;
- **≠** intégration Git (aucun commit/push/PR/merge dans ce pass) ;
- **≠** modification de la Build Doctrine ou de Figma (Figma = **READ ONLY**).

---

## 2. Morris P5 authorization

| Élément | Statut |
| --- | --- |
| Requalification ChatGPT P5 (P4 §51) | **COMPLETED** (recommandation, ≠ autorisation) |
| **Morris P5 AUTHORIZATION (GO P5)** | **YES — CONSUMED dans cette conversation** |
| P5 AUTHORIZED BY MORRIS | **YES** |
| P5 STARTED | **YES** |
| P5 IN PROGRESS | **YES** |

### 2.1 Ce que le GO P5 autorise / n’autorise pas

| Autorisé | **Non** autorisé (gate distinct requis) |
| --- | --- |
| Implémentation locale P5 (code, tests, CSS, assets Product) | Commit / push / PR du projet |
| Slice P5-S01 en working tree | Merge sur main |
| Tests D0 / UI locaux | **REAL** (appel OpenAI réel) · R1/R2/R3 |
| | Adoption runtime v3 |
| | Mutation Figma |
| | Revendication « READY FOR REAL » |

**Le GO P5 est consommé ; il n’est pas un GO REAL ni un GO Git.**

---

## 3. P5 mission

P5 = **livrer** progressivement, **sur le même chemin Product**, ce que P4 a rendu implémentable : un monde Product unique, des projections role-aware, la cognition Nora routée par Strategy-first bounded router, et l’expérience P3 — **sans** second Nora, **sans** SharedKnowledgeStore, **sans** router service, **sans** second modèle Product, **sans** nouvelle plateforme d’orchestration.

**Règle cœur (P4 §52) :** *COGNITION AND PRODUCT EXPERIENCE CONVERGE EARLY.* Pas de programme « UI fixtures » + « laboratoire router » qui ne convergent qu’à la fin.

**Mission de P5-S01 :** premier **vertical slice intégré** — politique de routage cognitif minimale branchée dans le runtime Nora existant **et** convergence du Workspace/Conversation Pre-M6 vers la structure P3, sur le **même** chemin (Project → Conversation → contexte sémantique → CWP → Strategy → Routing → Agents Runner).

**Non-mission de P5-S01 :** REAL, R1/R2/R3, Aperçu/Exécution/Journal/Historique/Synthèses object-native complets, Auth visual, Activity/STOP, Deliverable/Artifact exercé, P6.

---

## 4. P1→P4 inheritance contract

| Source | Contrat hérité (résumé) | Traitement P5-S01 |
| --- | --- | --- |
| **P1** | Simplification : PIB heuristique ; MATERIAL préservé · PROTECTIVE protégé · ACCIDENTAL réduit ; admin burden ≈ 0 nominal ; Net Complexity Reduction à l’échelle intégrée ; pas de metrics factory | Évaluation **qualitative** (§23) ; **NCR NOT PROVEN** |
| **P2** | Même sémantique d’autorité ; Deliverable ≠ Artifact ; Execution optionnelle ; recovery Product-truth-first ; pas de Universal Validator Engine | Aucune sémantique d’autorité élargie (tests P5-SEM, P5-D0-20) |
| **P3** | Workspace/IA/Figma ; pas de déviation visuelle intentionnelle ; reduced-motion ; a11y ; pas de SoT UI-locale ; pas de redesign par convenance | Structure P3 implémentée par **convergence** de `ProductShell` / `ProjectWorkspacePage` ; **fidélité runtime NON prouvée** |
| **P4** | Un monde Product ; projections bornées ; deterministic NO-LLM bypass avant routing ; Strategy-first bounded router ; cohort Luna/Sol/Astra ; quality floor avant FinOps ; escalation ≤ 1 ; same Nora/same Agents path ; REAL-FIRST dès que la frontière OpenAI est accessible ; OPENAI_MODEL/EFFORT TEMP WITH EXIT | Politique de routage implémentée (D0) ; **REAL-FIRST : frontière non exercée → ZERO REAL, déclaré** |

**Aucun contrat hérité n’a été réinterprété silencieusement.** Les écarts et réserves sont listés en §24–§25.

---

## 5. P5 Entry Contract — six dimensions (statut P5-S01)

P4 §51 : satisfaire cinq dimensions sur six **≠** Product Simplification complète. P5-S01 ne revendique **aucune** dimension « complète » ; statut honnête par dimension :

| # | Dimension | Contenu P5-S01 | Statut P5-S01 |
| --- | --- | --- | --- |
| 1 | **FUNCTIONAL** (P2) | Chemin Project → Conversation existant préservé ; aucun nouvel objet Product ; pas de nouvelle sémantique d’autorité | **PARTIEL — préservé, non étendu** |
| 2 | **EXPERIENCE** (P3) | Rail 192px + Meridian ; Workspace : header global, onglets Conversation/Aperçu/Exécution, focus bar, Conversation + Contexte du projet 356px ; reduced-motion sur scroll conversation | **CANDIDATE AVEC RÉSERVES** — screenshots runtime vs Figma **non capturés** ; Compact/Mobile **non prouvés** |
| 3 | **SEMANTIC INTEGRITY** (P4) | Contexte projet présenté depuis projections **déjà chargées** (présentation-only) ; routing ≠ HumanDecision ≠ Recommendation disposition ; modèle ne peut encoder de champ d’autorité | **D0 PASS (tests invariants)** — Journal/Historique/Synthèses/Aperçu object-native **non livrés** |
| 4 | **COGNITION** (P4) | `cognitiveRoutingPolicy.ts` ; Quality Floor ; cohort ; escalation max = 1 (politique) ; télémetrie `COGNITIVE_ROUTING_SELECTED` ; câblage après Strategy | **D0 PASS** — **ZERO REAL** ; boucle d’escalade runtime **non exercée** ; F2 `analyzeIntent` **non aligné** |
| 5 | **SIMPLIFICATION** (P1) | Pilote ne choisit ni modèle ni effort ; panneau contexte lecture seule ; pas de nouveau cockpit | **Évaluation qualitative uniquement** — **Net Complexity Reduction NOT PROVEN** |
| 6 | **PROOF** | D0 sur chemin intégré (Fake, même Runner) ; UI test layout ; régressions | **D0 seulement** — R1/R2/R3 **NOT STARTED** ; visual fidelity **NON prouvée** |

**Verdict dimensionnel :** 0/6 dimensions « complètes » ; 6/6 touchées à périmètre S01 avec réserves explicites.

---

## 6. Current repository baseline

| Élément | Valeur |
| --- | --- |
| Base / HEAD | `04527bede4a3aad1853387b9eb39af3fe0615412` |
| PR d’entrée | **#554 — MERGED** (P4 final repository truth-sync) |
| CI | **#676 — SUCCESS** |
| Required Gate | **SUCCESS** |
| Branche P5-S01 | `delivery/sfia-studio-product-simplification-p5-s01-integrated-product-vertical-slice` |
| État du working tree | Modifications P5-S01 **non commitées** (voir §9.4) |
| Scratch non suivi | `.tmp-sfia-review/**` (exports Figma de référence, revue ChatGPT) — **hors livrable** |

**Rappel :** la preuve CI #676 qualifie la **base**, pas les modifications P5-S01 locales. Aucune CI n’a été exécutée sur P5-S01 (pas de push).

---

## 7. Critical path

Trajectoire P4 §52, avec statut P5-S01 :

| # | Étape P4 §52 | Statut |
| --- | --- | --- |
| 1 | Revalider la frontière de capacité du provider cible | **FAIT (snapshot daté, D0)** — `buildP5TargetCapabilityManifest` ; revalidation à refaire avant REAL |
| 2 | Politique de routage minimale + deterministic NO-LLM bypass, câblée dans le runtime Nora existant | **FAIT (D0)** — bypass : aucune logique nouvelle (§19) |
| 3 | Premier vertical slice Product object-native via le chemin frontend P3-capable | **PARTIEL** — Workspace/Conversation + contexte ; pas d’objet Product matérialisé nouveau |
| 4 | R1 + R2 par ce même chemin | **NOT STARTED** |
| 5 | Inspection PIB / charge accidentelle | **Qualitative seulement** (§23) |
| 6 | Expansion projections (Aperçu, Exécution, Journal, Historique, Synthèses, Auth, Activity) | **NOT STARTED** (onglets présents, projections object-native non livrées) |
| 7 | Deliverable / Artifact exercés | **NOT STARTED** |
| 8 | R3 chemin Product intégré représentatif | **NOT STARTED** |
| 9 | Comparaison visuelle runtime/Figma | **NON capturée** (réserve) |
| 10 | P6 QA globale + NCR | **Hors périmètre** |

---

## 8. Delivery slicing strategy

- **Slice = chemin vertical bout-en-bout minimal**, pas un sous-système isolé complet.
- **Convergence précoce** : cognition (routing) + expérience (Workspace P3) dans la **même** slice.
- **Réutilisation d’abord** : adapter `ProductShell`, `ProjectWorkspacePage`, `runNoraCognitiveTurn`, `capabilityBudget`, tokens `--pm6-*` existants ; **aucun** nouveau design system, **aucun** nouveau service.
- **Honnêteté de statut** : une slice reste *LOCAL CANDIDATE* tant que les preuves listées ne sont pas complètes et que le gate Git Morris n’est pas passé.

### 8.1 Découpage indicatif

| Slice | Contenu | Statut |
| --- | --- | --- |
| **P5-S01** | Routing policy D0 + Workspace/Conversation P3 + contexte projet | **LOCAL CANDIDATE (réserves visuelles)** |
| P5-S02+ | À décomposer après gate S01 (cf. §26) — **non engagé** | **NOT STARTED** |

Le découpage S02+ est une **liste de travaux restants**, pas un engagement ni une doctrine.

---

## 9. P5-S01 scope

### 9.1 Inclus (implémenté localement)

1. **Cognitive routing policy** (pure, non persistante, non autoritative).
2. **Capability manifest** P5 TARGET (cohort), sans toucher au MW0 historique.
3. **Câblage** du routing dans `runNoraCognitiveTurn` après Strategy.
4. **Identité de tâche cognitive** : `correlationId` d’`orchestrateTurn` préfère `logicalTurnId`.
5. **Télémétrie** `COGNITIVE_ROUTING_SELECTED` (sans CoT).
6. **Shell Pre-M6** : rail P3 192px, emblème Meridian, « Projets récents » réels.
7. **ProjectWorkspacePage** : structure P3 (header global, onglets, focus bar, Conversation + Contexte du projet 356px).
8. **Tokens** `--pm6-*` convergés vers les couleurs P3.
9. **Reduced-motion** pour l’auto-scroll de conversation.
10. **Tests D0 + UI** (§21).

### 9.2 Exclu

REAL · R1/R2/R3 · Aperçu/Exécution/Journal/Historique/Synthèses object-native · Auth GitHub visual · Nora Activity/STOP · Deliverable/Artifact · Synthesis Product-derived · alignement F2 `analyzeIntent` · retrait OPENAI_MODEL/EFFORT · fusion des familles de tokens · preuve Compact/Mobile · P6.

### 9.3 Non-changements explicites

Pas de nouvelle table/store · pas de router service · pas de second Nora · pas de nouvelle plateforme · pas de modification Figma · pas de modification de la Build Doctrine.

### 9.4 Fichiers touchés (working tree, non commités)

| Zone | Fichiers |
| --- | --- |
| Cognition | `lib/nora-cognitive-runtime/cognitiveRoutingPolicy.ts` (**nouveau**) · `runNoraCognitiveTurn.ts` · `reasoningCapability.ts` · `types.ts` · `index.ts` |
| Capability / observabilité | `lib/nora-eval/capabilityBudget.ts` · `lib/platform/observability/types.ts` |
| Orchestration | `features/project-assistant/orchestrateTurn.ts` |
| Shell / Workspace | `ProductShell.tsx` / `.module.css` · `ProductRailRecents.tsx` (**nouveau**) · `ProjectWorkspacePage.tsx` / `.module.css` · `surfaces/ProjectContextSummary.tsx` / `.module.css` (**nouveaux**) · `workspaceContextPresentation.ts` (**nouveau**) |
| Surfaces / hooks / tokens | `surfaces/ConversationSurface.module.css` · `surfaces/LpsSurface.tsx` · `hooks/useProductConversation.ts` · `product-tokens.css` |
| Asset | `public/branding/meridian-emblem-product.png` (**nouveau**) |
| Tests | `p5.s01.cognitiveRouting.d0.test.ts` · `p5.s01.integratedProduct.d0.test.ts` · `p5.s01.semanticInvariants.d0.test.ts` · `p5.s01.workspaceLayout.ui.test.tsx` (**nouveaux**) · `automaticProjectResume.ui.test.tsx` (**ajusté**) |

---

## 10. Product representative journey

Journey cible P4 §52.1, tel que **couvert** par P5-S01 :

```text
REAL Project → P3 Conversation → real Project semantic context
→ (deterministic path OR Nora Semantic Context → CWP → Strategy → Product router)
→ real OpenAI when cognition required/authorized
→ Nora governed cognitive outcome / deterministic Product result
→ Studio materializes/updates real Product object when applicable
→ same object in Conversation / Aperçu / Journal / …
```

| Maillon | P5-S01 |
| --- | --- |
| Project (local Product, vrai LPS) | **D0 — exercé** (test intégré) |
| Conversation P3 (Workspace) | **Implémenté** — layout testé (UI) ; fidélité Figma non prouvée |
| Contexte sémantique projet | **D0 — exercé** (`composeStudioCognitiveContext`) ; panneau « Contexte du projet » en lecture seule |
| CWP → Strategy | **Existant, exercé** |
| Product router | **Implémenté, exercé D0** |
| OpenAI réel | **ZERO REAL** — Fake provider uniquement |
| Matérialisation / mise à jour d’objet Product nouveau | **NON couvert** |
| Même objet visible dans Aperçu/Journal/… | **NON couvert** (onglets = navigation/focus, pas projection object-native) |
| Evidence / Result / Deliverable·Artifact / Synthesis | **NON couvert** |
| PIB / charge accidentelle | **Qualitatif** (§23) |

**La journey est donc couverte en D0 sur son tronçon cognition + contexte + conversation, pas end-to-end Product.**

---

## 11. Current→Target reuse matrix

| Asset | CURRENT | P5-S01 disposition | Delta réalisé | Dette / sortie |
| --- | --- | --- | --- | --- |
| `ProductShell` (Pre-M6) | Shell produit existant | **ADAPT** | Rail P3 192px · Meridian · Projets récents | Famille tokens double (§24) |
| `ProjectWorkspacePage` | Page workspace Pre-M6 | **ADAPT** | Header global · onglets · focus bar · Conversation + Contexte 356px | Fidélité Figma non prouvée ; Aperçu/Exécution = focus/jump, pas projections |
| `ConversationSurface` | Surface conversation | **REUSE + CSS adapt** | Ajustements CSS (`ConversationSurface.module.css`) | — |
| `useProductConversation` | Hook conversation | **REUSE** | Reduced-motion sur auto-scroll | — |
| `LpsSurface` | « État du projet » | **REUSE** | `lpsNextAction` exporté (source unique de formulation) | — |
| `runNoraCognitiveTurn` | Runtime cognitif Nora | **ADAPT** | Routing après Strategy ; Fake garde adapter ; live utilise la chaîne modèle sélectionnée | Boucle escalade non exercée |
| `cognitiveWorkloadPolicy` | CWP / Strategy | **REUSE (inchangé)** | Consommé par la politique de routage | — |
| `capabilityBudget` | Manifests MW0 / courant | **ADAPT** | `buildP5TargetCapabilityManifest` ajouté ; **MW0 historique inchangé (FREEZE)** | Snapshot daté à revalider avant REAL |
| `reasoningCapability` | Validation capability fail-closed | **ADAPT** | Manifest optionnel ; fallback manifest P5 TARGET | — |
| `product-tokens.css` | `--pm6-*` | **ADAPT / converge** | Couleurs vers P3 ; **pas de `--p5-*`** | Dual `--sfia-*`/`--pm6-*` TEMP WITH EXIT |
| Meridian | Emblème Figma | **RECOVER** | `/branding/meridian-emblem-product.png` (§24.4) | Provenance à garder |
| `logicalProductTurn` | Identité de tour logique | **REUSE** | Fournit `logicalTurnId` | — |
| `studioCognitiveContext` | Contexte cognitif Studio | **REUSE** | Exercé dans le test intégré D0 | — |
| F2 `analyzeIntent` | Analyse d’intention F2 | **NON alignée** | Aucun | **P5-DEBT-F2-ROUTING-ALIGNMENT** (provider modèle statique) |

---

## 12. Frontend convergence plan

Principe P4 §27A / §51.2 : **un** layer de présentation P3-capable minimum-suffisant par réutilisation/convergence ; pas de nouveau programme UI de fixtures.

| Élément | Réalisé | Reste |
| --- | --- | --- |
| Famille de tokens canonique de convergence | `--pm6-*` (aucune famille `--p5-*` créée) | Retrait/fusion de `--sfia-*` |
| Palette | Convergée vers couleurs P3 (canvas, ink, bordures, rail) | Vérification contre Figma runtime |
| Shell | Rail 192px | Variantes Compact/Mobile à prouver |
| Workspace | Structure P3 | Surfaces object-native |
| Layouts `--pm6-*` | Largeurs LPS/Journal/contenu maintenues dans le même set | — |

**Contrainte respectée :** pas de nouvelle stack design-system, pas de seconde architecture responsive.

---

## 13. Figma contract

| Élément | Valeur |
| --- | --- |
| Fichier Figma | `m4g8j0gNbEzfIuH6S9AZJF` |
| Workspace Desktop | node **`46:2`** |
| Workspace Compact | node **`190:44`** |
| Workspace Mobile | node **`190:306`** |
| Mode d’accès | **READ ONLY** — aucune mutation Figma |
| Contrat | P3 préservé (aucune déviation visuelle intentionnelle) |

### 13.1 Statut de preuve

- Des **exports Figma** (références) existent en scratch non suivi : `.tmp-sfia-review/visual/figma/*.png` (dont `workspace-desktop-46-2.png`, fichiers `meridian-*.png`). Ce sont des **références Figma**, **pas** des captures runtime.
- **Aucune capture runtime comparative** n’a été produite (Playwright derrière auth). → **PAS de claim de fidélité** (§22).

---

## 14. Workspace implementation status

| Zone P3 | Implémentation | Preuve |
| --- | --- | --- |
| Rail latéral 192px | ✔ | Test UI layout (rendu) |
| Emblème Meridian | ✔ (`/branding/meridian-emblem-product.png`) | Asset présent ; fidélité visuelle non comparée |
| Projets récents (max 5, projets réels) | ✔ (`ProductRailRecents`, via `listProjectsRuntimeAction`) | Pas d’entrée inventée ; état loading/unavailable/ready |
| Header global | ✔ | UI test |
| Onglets Conversation / Aperçu / Exécution | ✔ (navigation/focus) | UI test |
| Focus bar | ✔ | UI test |
| Conversation | ✔ (`ConversationSurface`) | Régression Pre-M6 PASS |
| Contexte du projet 356px | ✔ (`ProjectContextSummary`, lecture seule) | UI test |
| Reduced-motion (auto-scroll) | ✔ | Code ; pas de test dédié rapporté |
| Compact / Mobile | **Non prouvé** | — |
| Aperçu / Exécution object-native | **Non livré** | — |
| Journal / Historique / Synthèses / Auth / Activity / STOP | **Non livré** | — |

Précisions :

- Tab **Aperçu** amène le panneau de contexte dans le champ de vision ; tab **Exécution** saute aux cartes d’exécution déjà présentes dans la conversation — **ce ne sont pas** de nouvelles surfaces/projections.
- Le panneau de contexte **n’héberge aucune action** : décisions et détails restent dans la conversation/Journal/lifecycle existants.

---

## 15. Semantic integration

- **Présentation uniquement** (`workspaceContextPresentation.ts`) : toutes les valeurs sont lues depuis des **projections déjà chargées** (état durable, projection lifecycle, journal de conversation, proposition active). Rien n’est persisté, rien n’est inféré au-delà.
- **Currentness honnête** : « À jour » seulement si état durable **et** transcript lisibles ; sinon « À vérifier » / « Lecture en cours » (`presentCurrentness`).
- **Trajectoire cycles** : bande « Terminé / En cours / Proposé » dérivée des instances de cycle (max 5 nœuds ; superseded/cancelled omis).
- **Formulation unique** du prochain pas : `lpsNextAction` partagé entre « État du projet » et le panneau de contexte.
- **Invariants D0** (`semanticInvariants`) : P5-SEM-05 (le choix de modèle n’encode aucun champ d’autorité) · P5-SEM-02/03 (routing ≠ HumanDecision ≠ Recommendation disposition) · P5-SEM-08 (sémantique Strategy Proposed hors router).

**Non couvert :** Synthesis Product-derived (le raccourci synthèse reste **désactivé** — aucune surface de synthèse Product), Journal/History read models P3, Deliverable representation.

---

## 16. Nora Semantic Context integration

- Le test intégré D0 exerce le **chemin réel local** : Project/LPS Product réels → `composeStudioCognitiveContext` (faits de contexte) → `runNoraCognitiveTurn` → CWP → Strategy → Routing → Fake provider → **même Agents Runner** → résultat Product-safe.
- **Même Nora, même Runner** : aucun second chemin ni second runtime.
- Le routing **ne lit pas** le contexte pour décider une autorité ; il consomme la **décision Strategy** (classe + signaux normalisés + `candidateEnvelope`).
- **Non couvert :** projection sémantique Nora object-native élargie (P4 §23) au-delà de ce que le contexte Studio expose déjà.

---

## 17. Cognitive routing implementation

### 17.1 `cognitiveRoutingPolicy.ts` (nouveau, pur)

| Propriété | Implémentation |
| --- | --- |
| Nature | Fonction pure, non persistante, **non autoritative**, **≠ RouterService** |
| Version de politique | `p5-s01-routing-v1` |
| Pipeline | Strategy → **Quality Floor** → configs éligibles (model × effort) → filtre capability → **FinOps parmi les suffisants** → minimum-suffisant |
| Cohort nominal | `gpt-6-luna` · `gpt-6.1-sol` · `gpt-6-astra` (GPT-5.6 **exclu** du routing nominal) |
| Candidats | Enveloppe d’efforts de la Strategy × cohort — **pas** de mapping fixe Strategy→Modèle ; model × effort indépendants |
| Reasoning mode nominal | `standard` |
| Escalade | `P5_MAX_ESCALATIONS_PER_TASK = 1` (champ `escalationEligible` selon `escalationsUsed`) |
| Identité de tâche | `cognitiveTaskId` stable obligatoire (sinon erreur `COGNITIVE_ROUTING_REQUIRES_STABLE_TASK_ID`) |
| Reconstructibilité | `routingDecisionId`, `reasonCodes`, `policyVersion`, `providerSnapshotIdentity` (hash stable du contenu, hors `retrievedAt`) |
| Échec | **Fail-closed** : `ok:false` avec `NO_SUFFICIENT_CONFIG` ou `BUDGET_EXCLUDES_ALL_SUFFICIENT` ; `BUDGET_MUST_NOT_DOWNGRADE_BELOW_FLOOR` |

### 17.2 Quality Floor (catégoriel, explicable, **pas** un score 0–100)

| Strategy | Catégorie | Plancher modèle | Plancher effort |
| --- | --- | --- | --- |
| Routine | `routine-sufficient` | Luna | ≥ none |
| Focused | `focused-sufficient` | Luna | ≥ low (≥ medium si vérification/ambiguïté élevée) |
| Deep | `deep-sufficient` | Luna (Sol si rigueur/vérification/contradiction élevée) | ≥ medium |
| High-Assurance | `high-assurance-sufficient` | Sol minimum | ≥ high |

Surcharges : `contradictionRisk` élevé → plancher Sol ; `criticalChallengeArmed` → plancher d’effort `high`. **Le budget ne peut jamais abaisser sous le plancher** ; il ne filtre qu’**au sein** de l’ensemble suffisant.

### 17.3 `buildP5TargetCapabilityManifest` (`capabilityBudget.ts`)

| Modèle | Efforts supportés (snapshot) |
| --- | --- |
| `gpt-6-luna` | none · low · medium · high · xhigh · max |
| `gpt-6.1-sol` | low · medium · high · xhigh · max (**none non supporté**) |
| `gpt-6-astra` | low · medium · high · xhigh · max (**none non supporté**) |

- `minimal` reste **non admissible** pour le cohort cible.
- Les lignes de prix sont des **indices d’ordonnancement FinOps datés**, remplaçables — **pas de doctrine**.
- **`buildMw0CapabilityManifest` (GPT-5.6) non modifié — FREEZE historique** ; `buildCurrentOpenAiCapabilityManifest` non remplacé.
- « Documented capability ≠ account/API entitlement » : **non vérifié** (ZERO REAL).

### 17.4 Câblage `runNoraCognitiveTurn`

1. Routing décidé **après Strategy** (`resolveProductCognitiveRouting`).
2. **Pas de routing** si : pin d’éval (`evalModelReasoningControl`) ou Strategy non exécutée.
3. **Limitation de routing** (`ok:false`) → `TechnicalError("CONFIG", …)` **fail-closed**, jamais de downgrade silencieux.
4. **Fake** (provider adapter) : **garde l’adapter** (le modèle sélectionné reste identité/télémétrie) ; **live** : la **chaîne modèle sélectionnée** est passée à l’Agents Runner.
5. Capability de l’effort sélectionné validée contre le manifest P5 TARGET (`validateRuntimeReasoningCapability` avec manifest).
6. Résultat enrichi : `selectedModelId`, `cognitiveRoutingDecisionId`, `cognitiveRoutingPolicyVersion` ; `selectedReasoningEffort` effectif : pin d’éval > routing > CWP.
7. Fallback legacy documenté : si Strategy a tourné mais routing absent, chemin historique (`OPENAI_MODEL` **TEMP WITH EXIT**).

### 17.5 `orchestrateTurn`

`correlationId` préfère **`logicalTurnId`** (identité cognitive stable sur tool rounds / retry / escalade unique), repli sur `f1:${projectId}`.

### 17.6 Télémétrie

Événement **`COGNITIVE_ROUTING_SELECTED`** (type ajouté à `TechnicalEventType`). Détails : `routingDecisionId`, `cognitiveTaskId`, `strategyClass`, modèle/effort sélectionnés, `reasoningMode`, `qualityFloor`, `reasonCodes`, résumé d’éligibles (≤ 12), `escalationEligible`, `maxEscalations`, `providerCapabilitySnapshot`, `routingPolicyVersion`, `estimatedCostUsdHint`. **Aucune Chain of Thought, aucune fausse confiance** (test P5-D0-21).

---

## 18. Provider snapshot

| Élément | Valeur |
| --- | --- |
| Type | Snapshot **daté** d’entrée externe (revalidé pour la livraison P5-S01, 2026-10-05) |
| Cohort | Luna / Sol / Astra |
| Efforts | Voir §17.3 |
| Statut | **Non confirmé par appel réel** — **ZERO REAL** |
| Valeur permanente ? | **Non** — snapshot ≠ doctrine ; **à revalider avant tout gate REAL** |
| Entitlement compte/API | **Non vérifié** |

**Aucun appel OpenAI réel n’a été effectué.** Les capacités ci-dessus sont des **données de manifest**, pas une preuve de disponibilité.

---

## 19. Deterministic bypass

- P4 : **deterministic NO-LLM bypass avant routing**.
- P5-S01 : **aucune logique de bypass nouvelle** ; les chemins déterministes Product existants sont **conservés**. **Pas de routeur par mots-clés.**
- Le routing n’est invoqué que lorsque la Strategy a produit une décision (cognition requise) ; sans décision Strategy, `resolveProductCognitiveRouting` retourne `null`.
- **Réserve :** l’inventaire exhaustif des chemins déterministes et leur ordonnancement par rapport au routing n’est pas ré-audité dans ce document.

---

## 20. Fake/Real qualification D0

| Aspect | Qualification |
| --- | --- |
| Niveau de preuve | **D0** (déterministe/local) |
| Provider | **Fake** (`FakeConversationProvider`) |
| Appels live OpenAI | **0** (P5-D0-24) |
| Même Agents Runner | Oui (P5-D0-23) |
| Fake garde l’adapter | Oui (P5-D0-22) |
| REAL-FIRST (P4 §48) | **Frontière OpenAI non exercée dans S01** — décision d’autorisation REAL **non consommée** ; la slice **ne peut pas** être déclarée close sur cognition/routing |
| R1 / R2 / R3 | **NOT STARTED** |

**D0 PASS ≠ REAL PASS.** Une slice cognition/routing ne se ferme pas par Fake/D0 seul lorsque la frontière OpenAI réelle est accessible : **S01 reste donc LOCAL CANDIDATE**.

---

## 21. Test/evidence matrix

### 21.1 Tests ajoutés (22 cas)

| Fichier | Cas | Couvre |
| --- | --- | --- |
| `p5.s01.cognitiveRouting.d0.test.ts` | **17** | P5-D0-01 … P5-D0-24 (certains cas regroupent plusieurs IDs) |
| `p5.s01.integratedProduct.d0.test.ts` | **1** | Chemin intégré Product réel local + routing + Fake + même Runner |
| `p5.s01.semanticInvariants.d0.test.ts` | **3** | P5-SEM-05 · P5-SEM-02/03 · P5-SEM-08 |
| `p5.s01.workspaceLayout.ui.test.tsx` | **1** | Rail P3 + Workspace Conversation sans internals |

### 21.2 Mapping P5-D0

| ID(s) | Assertion |
| --- | --- |
| P5-D0-01 | Cohort nominal = Luna / Sol / Astra |
| P5-D0-02 | Routing nominal exclut GPT-5.6 |
| P5-D0-03 | Manifest historique MW0 GPT-5.6 inchangé |
| P5-D0-04 | Strategy ne contient aucun mapping modèle fixe |
| P5-D0-05 / 06 | Quality Floor avant FinOps ; configs insuffisantes exclues |
| P5-D0-07 | Luna `none` accepté |
| P5-D0-08 / 09 | Sol / Astra `none` rejeté |
| P5-D0-10 | Modèle inconnu → fail-closed |
| P5-D0-11 | Effort non supporté non coercé silencieusement |
| P5-D0-12 | Le budget ne peut pas abaisser sous le plancher |
| P5-D0-13 / 14 / 15 | Décision reconstructible · version de politique · reason codes |
| P5-D0-16 | Escalade max = 1 |
| P5-D0-17 | Identité de tâche cognitive stable requise |
| P5-D0-18 / 19 | Le client ne peut sélectionner modèle/effort via le chemin Product |
| P5-D0-20 | Un modèle plus fort n’élargit pas les champs d’autorité |
| P5-D0-21 | Télémétrie sans CoT |
| P5-D0-22 / 23 / 24 | Frontière Fake (adapter) · même Runner · zéro live |

### 21.3 Régressions et portes qualité (rapportées par la passe de livraison)

| Vérification | Résultat rapporté |
| --- | --- |
| Suites MW2 + régression UI Pre-M6 ciblées | **PASS (201+ tests ciblés)** |
| `typecheck` | **PASS** |
| `lint` | **PASS** |
| `build` | **PASS** |
| CI distante sur P5-S01 | **N/A** — aucun push |

### 21.4 Ce que la matrice ne prouve pas

Fidélité visuelle · REAL · R1/R2/R3 · exécution de la boucle d’escalade · alignement F2 · comportement Compact/Mobile · accessibilité mesurée (axe/clavier) · NCR.

---

## 22. Visual fidelity evidence

**Verdict : CANDIDATE WITH RESERVES — NOT pixel-perfect PROVEN.**

| Preuve | Statut |
| --- | --- |
| Structure P3 implémentée (rail, header, onglets, focus bar, Conversation + Contexte 356px) | **Oui** (code + test UI de layout) |
| Palette `--pm6-*` convergée vers P3 | **Oui** (valeurs ; pas de comparaison pixel) |
| Emblème Meridian | **Asset récupéré** (§24.4) — comparaison visuelle runtime **non faite** |
| Captures **runtime** vs Figma Desktop `46:2` | **NON capturées** (Playwright derrière auth) |
| Compact `190:44` / Mobile `190:306` | **NON prouvés** |
| Motion / reduced-motion | Auto-scroll respecte `prefers-reduced-motion` (code) ; motion P3 complète **non prouvée** |
| Accessibilité | Éléments sémantiques/`aria-label` présents ; **audit a11y non réalisé** |

**Réserves (obligatoires dans toute citation de ce document) :** aucune formulation « conforme Figma », « pixel-perfect » ou « visual PASS » n’est autorisée tant que des captures runtime comparatives n’existent pas. Gate visuel P4 §51.2 / §51.6 : **non satisfait**.

---

## 23. PIB/Simplification assessment qualitative

> Évaluation **heuristique et qualitative** (PIB reste heuristique ; pas de metrics factory ; pas de seuils numériques). **Net Complexity Reduction = NOT PROVEN.**

| Critère P4 §51.5 | Observation P5-S01 |
| --- | --- |
| Journey représentative | Ouvrir un projet → converser avec Nora (tronçon couvert) |
| Charge d’interaction accidentelle | **Non augmentée par conception** : aucune nouvelle action dans le panneau de contexte ; onglets = aides de navigation |
| Admin burden méthode/runtime | **≈ 0 nominal côté Pilote** : modèle/effort choisis par la politique (client non habilité — P5-D0-18/19) |
| MATERIAL préservé | Décisions/confirmations existantes inchangées (aucun changement de sémantique d’autorité) |
| PROTECTIVE protégé | Fail-closed routing ; pas de downgrade silencieux |
| ACCIDENTAL | Réduction **non mesurée** ; formulation du prochain pas dédupliquée (`lpsNextAction`) |
| Pas de nouveau cockpit/workflow parallèle | Aucun ajouté |
| Charge Nora/contexte | Digest lecture seule ; **non évalué en usage réel** |
| Duplication architecturale | Dual tokens `--sfia-*`/`--pm6-*` **persiste** (TEMP WITH EXIT) |
| NCR à l’échelle intégrée | **NOT PROVEN** (échelle S01 insuffisante) → P5 ultérieur / P6 |

**FinOps cognitif ≠ preuve de simplification** : `estimatedCostUsdHint` est un indice d’ordonnancement, pas une preuve.

---

## 24. Debt + exits

| ID / Actif | Dette | Exit | Statut |
| --- | --- | --- | --- |
| **P5-DEBT-F2-ROUTING-ALIGNMENT** | F2 `analyzeIntent` utilise encore le **modèle statique du provider** (hors politique Product de routage) → risque de double chemin LLM | Aligner F2 sous la même politique / provenance (P4 §30/§50 « dual LLM surfaces ») | **OPEN** |
| `OPENAI_MODEL` | Sélection nominale encore référencée (chemin de repli / bootstrap) | **RETIRE LATER** du chemin nominal (router-selected) | **TEMP WITH EXIT** |
| `OPENAI_REASONING_EFFORT` | Idem (aussi F2 statique) | **RETIRE LATER** du chemin nominal | **TEMP WITH EXIT** |
| Familles de tokens `--sfia-*` / `--pm6-*` | Double famille | Convergence/retrait de `--sfia-*` quand les surfaces migrent | **TEMP WITH EXIT** |
| Snapshot capability P5 TARGET | Daté, non confirmé REAL | Revalidation avant tout gate REAL | **OPEN** |
| Escalade runtime | Politique `max = 1` uniquement, boucle non exercée | Exercer via R1/R2 sur le chemin intégré | **OPEN** |
| Synthesis | Raccourci **désactivé** (pas de surface Product) | Synthesis Product-derived (P4 §18–§20) | **OPEN** |
| Fallback legacy routing absent | Chemin historique encore présent si Strategy sans routing | Retirer quand tous les chemins Product sont routés | **OPEN** |

### 24.4 Provenance de l’asset Meridian

- `app/public/branding/meridian-emblem-product.png` (31 169 octets).
- **Récupéré depuis le remplissage image brut Figma (raw fill)**, décodé avec `LOAD_TRUNCATED_IMAGES` (le fichier source étant tronqué).
- Référence de provenance : exports scratch `.tmp-sfia-review/visual/figma/meridian-*.png` (non suivis, hors livrable).
- **Réserve :** asset récupéré, fidélité de rendu runtime **non comparée** ; la chaîne de récupération (fill tronqué) doit rester documentée si l’asset est ré-exporté proprement depuis Figma.

---

## 25. Open gaps

| # | Gap | Impact |
| --- | --- | --- |
| G1 | Captures runtime comparatives vs Figma **absentes** (auth-gated) | Visual = CANDIDATE WITH RESERVES |
| G2 | Compact / Mobile **non prouvés par screenshot** | Fidélité responsive inconnue |
| G3 | Boucle d’escalade **non exercée** (politique max = 1 seulement) | Comportement runtime inconnu |
| G4 | **P5-DEBT-F2-ROUTING-ALIGNMENT** ouverte | Double surface LLM |
| G5 | **ZERO REAL** ; R1/R2/R3 non démarrés | REAL-FIRST non satisfait |
| G6 | Synthesis Product-derived non livrée ; raccourci désactivé | Pas de surface Synthèse |
| G7 | Aperçu / Exécution / Journal / Historique : onglets de navigation sans projections object-native | Journey Product non bouclée |
| G8 | Nora Activity / STOP / Auth visual / Deliverable-Artifact non livrés | Hors S01 |
| G9 | Dual tokens `--sfia-*` / `--pm6-*` | Duplication temporaire |
| G10 | `OPENAI_MODEL` / `OPENAI_REASONING_EFFORT` encore présents hors chemin nominal | Exit non exécuté |
| G11 | Snapshot capability non confirmé par provider réel | Risque d’écart doc/entitlement |
| G12 | NCR non prouvée ; PIB qualitatif seulement | Simplification non démontrée |
| G13 | Audit a11y non réalisé | Qualité non mesurée |
| G14 | Aucune CI distante sur P5-S01 | Intégration non vérifiée |

---

## 26. Remaining P5 slices

Liste de **travaux restants** (non engagés ; décomposition formelle après gate S01) :

1. **Preuve visuelle** : captures runtime Desktop/Compact/Mobile vs Figma, correction des écarts.
2. **R1 / R2** sur le chemin intégré (nécessite gate REAL distinct) ; revalidation du snapshot provider.
3. **Aperçu / Exécution** object-native depuis projections Product.
4. **Journal / Historique / Synthèses** (dont Synthesis Product-derived dans Product SQLite).
5. **Nora Activity / STOP**, **Auth GitHub visual**.
6. **Deliverable / Artifact** (représentation minimum-suffisante, pas de nouveau store).
7. **Alignement F2** (`P5-DEBT-F2-ROUTING-ALIGNMENT`) ; retrait nominal `OPENAI_MODEL`/`OPENAI_REASONING_EFFORT`.
8. **Exercice de l’escalade** (≤ 1).
9. **Convergence tokens** (`--sfia-*` → `--pm6-*`).
10. **R3** sur chemin Product intégré représentatif.

---

## 27. P6 handoff conditions

P6 (QA comparatif/global, NCR) **ne démarre pas** sur la base de S01. Conditions minimales de handoff (rappel, non exhaustif) :

- P5 slices nécessaires livrées et **intégrées** (gates Git Morris passés) ;
- **R1/R2/R3** exécutés sur le chemin Product intégré (si REAL autorisé) ;
- **Preuves visuelles runtime vs Figma** pour les surfaces implémentées ;
- Preuve de continuité sémantique et d’absence d’architecture parallèle ;
- Évidence PIB/NCR à l’échelle intégrée (P6) ;
- Dettes P5 classées avec exit ou acceptées explicitement.

**Statut actuel : conditions NON remplies.**

---

## 28. Gates

| Gate | Statut |
| --- | --- |
| Morris P5 AUTHORIZATION | **CONSUMED** |
| Revue ChatGPT de la livraison P5-S01 | À faire (si requise par le process) |
| **Prochain gate : MORRIS P5-S01 GIT INTEGRATION** (commit / push / PR) | **NON consommé — NEXT** |
| Merge P5-S01 | **NON consommé** (gate distinct après revue PR) |
| **REAL / R1 / R2 / R3** | **NON consommé / NOT STARTED** |
| Adoption runtime v3 | **NON** |
| Mutation Figma | **NON** |

**Ce pass n’a produit aucun commit, push, PR ou merge.**

---

## 29. Claims / anti-claims

### 29.1 Claims autorisés

| Claim | Niveau |
| --- | --- |
| P5 AUTHORIZED BY MORRIS / STARTED / IN PROGRESS | **YES** |
| Politique de routage cognitif implémentée (pure, D0) | **Implémenté + testé D0** |
| `COGNITIVE_ROUTING_SELECTED` émis sans CoT | **Testé D0** |
| Routing câblé après Strategy dans le runtime Nora existant, même Runner | **Testé D0** |
| Structure Workspace/Shell P3 implémentée localement | **Implémenté + test layout UI** |
| typecheck / lint / build / régressions ciblées PASS | **Rapporté par la passe de livraison** |
| P5-S01 = LOCAL CANDIDATE (réserves visuelles) | **YES** |

### 29.2 Anti-claims (interdits)

| Anti-claim | Statut |
| --- | --- |
| P5-S01 COMPLETE / VALIDATED / INTEGRATED | **NON** |
| P5 COMPLETE | **NON** |
| Fidélité Figma / pixel-perfect / Visual PASS | **NON prouvé** |
| Compact / Mobile conformes | **NON prouvé** |
| REAL / R1 / R2 / R3 PASS | **NON** — ZERO REAL, NOT STARTED |
| READY FOR REAL | **NO** |
| Escalade validée à l’exécution | **NON** (politique seulement) |
| Router de production / RouterService | **NON** (fonction pure intégrée au runtime) |
| F2 aligné sous la politique de routage | **NON** (dette ouverte) |
| `OPENAI_MODEL`/`OPENAI_REASONING_EFFORT` retirés | **NON** (RETIRE LATER) |
| Famille de tokens unique | **NON** (dual TEMP WITH EXIT) |
| Synthesis Product-derived livrée | **NON** |
| Net Complexity Reduction prouvée | **NON** |
| Runtime v3 adopté | **NON** (NON ADOPTED) |
| Intégré sur main / CI verte pour P5-S01 | **NON** (aucun push) |
| Nouvelle doctrine / architecture P5 | **NON** (P4 reste autorité) |

---

## 30. Current verdict

```text
P5 AUTHORIZED BY MORRIS = YES
P5 STARTED              = YES
P5 IN PROGRESS          = YES

P5-S01 = LOCAL CANDIDATE (visual reserves)
         — NOT COMPLETE · NOT VALIDATED · NOT INTEGRATED

R1 / R2 / R3            = NOT STARTED
ZERO REAL               = YES
READY FOR REAL          = NO
runtime v3              = NON ADOPTED

Visual fidelity         = CANDIDATE WITH RESERVES (≠ pixel-perfect PROVEN)
Cognitive routing       = D0 IMPLEMENTED (policy max escalation = 1; loop not exercised)
Net Complexity Reduction = NOT PROVEN

Git this pass           = NO commit · NO push · NO PR · NO merge
Base                    = 04527bede4a3aad1853387b9eb39af3fe0615412
                          (PR #554 MERGED · CI #676 SUCCESS · Required Gate SUCCESS)

NEXT GATE               = MORRIS P5-S01 GIT INTEGRATION (not consumed)
REAL / merge            = NOT consumed
```

**Synthèse honnête.** P5-S01 livre localement un premier tronçon intégré : une politique de routage cognitif D0 branchée sur le runtime Nora existant, et un Workspace/Shell Pre-M6 convergé vers la structure P3. Les tests D0/UI ciblés, le typecheck, le lint et le build passent (rapportés). Restent ouverts : preuve visuelle runtime vs Figma, Compact/Mobile, exercice de l’escalade, alignement F2, retrait nominal des variables d’environnement de modèle, convergence des tokens, projections object-native, et toute preuve REAL. **P4 reste l’autorité d’architecture** ; ce document n’y ajoute aucune doctrine.

---

*Fin du document P5 — Integrated Delivery (P5-S01) — P5 AUTHORIZED BY MORRIS = YES — P5 STARTED = YES — P5 IN PROGRESS = YES — P5-S01 = LOCAL CANDIDATE (visual reserves) — R1/R2/R3 NOT STARTED — ZERO REAL — READY FOR REAL = NO — runtime v3 NON ADOPTED — no project commit/push/PR/merge this pass — P4 remains architecture authority.*

======================================================================
NEW FILE — cognitiveRoutingPolicy.ts
======================================================================
```ts
/**
 * P5-S01 — Strategy-first bounded cognitive routing policy.
 *
 * Pure / non-persistent / non-authoritative. Not a RouterService.
 * Pipeline: Strategy → Quality Floor → eligible model×effort → capability
 * filter → FinOps among sufficient → minimum-sufficient selection.
 *
 * Nominal target cohort: gpt-6-luna · gpt-6.1-sol · gpt-6-astra.
 * GPT-5.6 is excluded from nominal TARGET routing (historical evidence FREEZE).
 */
import { createHash, randomUUID } from "node:crypto";
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
import {
  buildP5TargetCapabilityManifest,
  estimateCostUsd,
  modelCapabilitySet,
  type CapabilityManifest,
} from "@/lib/nora-eval/capabilityBudget";
import type {
  CognitiveStrategyDecision,
  CognitiveWorkloadSignals,
} from "./cognitiveWorkloadPolicy";

export const P5_COGNITIVE_ROUTING_POLICY_VERSION = "p5-s01-routing-v1" as const;

export const P5_TARGET_MODEL_COHORT = [
  "gpt-6-luna",
  "gpt-6.1-sol",
  "gpt-6-astra",
] as const;

export type P5TargetModelId = (typeof P5_TARGET_MODEL_COHORT)[number];

export const P5_REASONING_MODE_NOMINAL = "standard" as const;

/** Max cognitive escalations per stable cognitive task (P4). */
export const P5_MAX_ESCALATIONS_PER_TASK = 1 as const;

const EFFORT_RANK: Record<OpenAiReasoningEffort, number> = {
  none: 0,
  minimal: 0,
  low: 1,
  medium: 2,
  high: 3,
  xhigh: 4,
  max: 5,
};

/** Relative model capability rank for quality-floor comparison (not authority). */
const MODEL_CAPABILITY_RANK: Record<P5TargetModelId, number> = {
  "gpt-6-luna": 1,
  "gpt-6.1-sol": 2,
  "gpt-6-astra": 3,
};

export type CognitiveQualityFloor = {
  /** Minimum model capability rank (1=Luna … 3=Astra). */
  minModelRank: number;
  /** Minimum reasoning effort rank. */
  minEffortRank: number;
  /** Categorical label for reconstructibility. */
  category:
    | "routine-sufficient"
    | "focused-sufficient"
    | "deep-sufficient"
    | "high-assurance-sufficient";
  reasonCodes: string[];
};

export type CognitiveRoutingConfig = {
  modelId: P5TargetModelId;
  reasoningEffort: OpenAiReasoningEffort;
};

export type CognitiveRoutingDecision = {
  ok: true;
  routingDecisionId: string;
  cognitiveTaskId: string;
  strategyClass: CognitiveStrategyDecision["strategyClass"];
  qualityFloor: CognitiveQualityFloor;
  eligibleConfigs: CognitiveRoutingConfig[];
  selectedModel: P5TargetModelId;
  selectedReasoningEffort: OpenAiReasoningEffort;
  reasoningMode: typeof P5_REASONING_MODE_NOMINAL;
  reasonCodes: string[];
  escalationEligible: boolean;
  maxEscalations: typeof P5_MAX_ESCALATIONS_PER_TASK;
  providerSnapshotIdentity: string;
  policyVersion: typeof P5_COGNITIVE_ROUTING_POLICY_VERSION;
  estimatedCostUsdHint: number | null;
};

export type CognitiveRoutingLimitation = {
  ok: false;
  routingDecisionId: string;
  cognitiveTaskId: string;
  strategyClass: CognitiveStrategyDecision["strategyClass"];
  qualityFloor: CognitiveQualityFloor;
  reasonCodes: string[];
  policyVersion: typeof P5_COGNITIVE_ROUTING_POLICY_VERSION;
  providerSnapshotIdentity: string;
};

export type DecideCognitiveRoutingInput = {
  strategy: CognitiveStrategyDecision;
  /** Stable cognitive task identity — prefer logicalTurnId / correlation. */
  cognitiveTaskId: string;
  /** Optional workload signals for quality-floor reasons (already in strategy). */
  signals?: CognitiveWorkloadSignals;
  /** Override manifest (tests). Default: P5 target cohort snapshot. */
  manifest?: CapabilityManifest;
  /** Optional budget ceiling — never silently downgrades below quality floor. */
  maxBudgetUsd?: number | null;
  /** Prior escalations already consumed for this task. */
  escalationsUsed?: number;
};

function signalRank(
  value: CognitiveWorkloadSignals[keyof CognitiveWorkloadSignals] | undefined,
): number {
  if (value === "high") return 3;
  if (value === "medium") return 2;
  if (value === "low") return 1;
  return 0; // unknown
}

/**
 * Derive categorical Quality Floor from strategy + signals.
 * Explainable / reconstructible — NOT a 0–100 score.
 */
export function deriveQualityFloor(
  strategy: CognitiveStrategyDecision,
  signals?: CognitiveWorkloadSignals,
): CognitiveQualityFloor {
  const s = signals ?? strategy.normalizedSignals;
  const reasonCodes: string[] = [
    `strategy:${strategy.strategyClass}`,
    `reasoningDemand:${strategy.reasoningDemand}`,
  ];

  let minModelRank = 1;
  let minEffortRank = EFFORT_RANK[strategy.reasoningDemand] ?? 1;
  let category: CognitiveQualityFloor["category"] = "routine-sufficient";

  switch (strategy.strategyClass) {
    case "Routine":
      category = "routine-sufficient";
      minModelRank = 1;
      minEffortRank = Math.max(minEffortRank, EFFORT_RANK.none);
      break;
    case "Focused":
      category = "focused-sufficient";
      minModelRank = 1;
      minEffortRank = Math.max(minEffortRank, EFFORT_RANK.low);
      if (signalRank(s.verificationNeed) >= 2 || signalRank(s.ambiguity) >= 2) {
        minEffortRank = Math.max(minEffortRank, EFFORT_RANK.medium);
        reasonCodes.push("focused:elevated-verification-or-ambiguity");
      }
      break;
    case "Deep":
      category = "deep-sufficient";
      // Deep may still use Luna at high effort; Sol is preferred floor when rigor high.
      minModelRank =
        signalRank(s.rigorCriticality) >= 3 ||
        signalRank(s.verificationNeed) >= 3 ||
        signalRank(s.contradictionRisk) >= 3
          ? 2
          : 1;
      minEffortRank = Math.max(minEffortRank, EFFORT_RANK.medium);
      reasonCodes.push(
        minModelRank >= 2
          ? "deep:sol-floor-for-high-rigor"
          : "deep:luna-eligible-at-sufficient-effort",
      );
      break;
    case "High-Assurance":
      category = "high-assurance-sufficient";
      minModelRank = 2; // Sol minimum — Astra optional among sufficient
      minEffortRank = Math.max(minEffortRank, EFFORT_RANK.high);
      reasonCodes.push("high-assurance:sol-or-stronger");
      break;
  }

  if (signalRank(s.contradictionRisk) >= 3) {
    minModelRank = Math.max(minModelRank, 2);
    reasonCodes.push("contradictionRisk:high→sol-floor");
  }
  if (strategy.criticalChallengeArmed) {
    minEffortRank = Math.max(minEffortRank, EFFORT_RANK.high);
    reasonCodes.push("criticalChallengeArmed→effort-floor-high");
  }

  return {
    minModelRank,
    minEffortRank,
    category,
    reasonCodes,
  };
}

function meetsQualityFloor(
  config: CognitiveRoutingConfig,
  floor: CognitiveQualityFloor,
): boolean {
  const modelRank = MODEL_CAPABILITY_RANK[config.modelId];
  const effortRank = EFFORT_RANK[config.reasoningEffort] ?? -1;
  return modelRank >= floor.minModelRank && effortRank >= floor.minEffortRank;
}

/**
 * Candidate generation: Strategy envelope × target cohort, NOT fixed Strategy→Model.
 * Model × effort remain independent; capability filter applies next.
 */
export function generateCandidateConfigs(
  strategy: CognitiveStrategyDecision,
): CognitiveRoutingConfig[] {
  const efforts = strategy.candidateEnvelope;
  const configs: CognitiveRoutingConfig[] = [];
  for (const modelId of P5_TARGET_MODEL_COHORT) {
    for (const reasoningEffort of efforts) {
      configs.push({ modelId, reasoningEffort });
    }
  }
  return configs;
}

function filterByProviderCapability(
  configs: CognitiveRoutingConfig[],
  manifest: CapabilityManifest,
): { eligible: CognitiveRoutingConfig[]; rejected: string[] } {
  const eligible: CognitiveRoutingConfig[] = [];
  const rejected: string[] = [];
  for (const c of configs) {
    const supported = modelCapabilitySet(manifest, c.modelId);
    if (!supported) {
      rejected.push(`unknown-model:${c.modelId}`);
      continue;
    }
    if (c.reasoningEffort === "minimal") {
      rejected.push(`unsupported-effort:${c.modelId}/minimal`);
      continue;
    }
    if (!supported.includes(c.reasoningEffort)) {
      rejected.push(`unsupported-effort:${c.modelId}/${c.reasoningEffort}`);
      continue;
    }
    // Nominal cohort allowlist — GPT-5.6 never appears here.
    if (
      !(P5_TARGET_MODEL_COHORT as readonly string[]).includes(c.modelId)
    ) {
      rejected.push(`outside-target-cohort:${c.modelId}`);
      continue;
    }
    eligible.push(c);
  }
  return { eligible, rejected };
}

function sortMinimumSufficient(
  configs: CognitiveRoutingConfig[],
  manifest: CapabilityManifest,
): CognitiveRoutingConfig[] {
  return [...configs].sort((a, b) => {
    const costA = estimateCostUsd({
      manifest,
      modelId: a.modelId,
      inputTokens: 4000,
      outputTokens: 1200,
    });
    const costB = estimateCostUsd({
      manifest,
      modelId: b.modelId,
      inputTokens: 4000,
      outputTokens: 1200,
    });
    if (costA !== costB) return costA - costB;
    const modelDiff =
      MODEL_CAPABILITY_RANK[a.modelId] - MODEL_CAPABILITY_RANK[b.modelId];
    if (modelDiff !== 0) return modelDiff;
    return (
      (EFFORT_RANK[a.reasoningEffort] ?? 0) -
      (EFFORT_RANK[b.reasoningEffort] ?? 0)
    );
  });
}

function providerSnapshotIdentity(manifest: CapabilityManifest): string {
  // Identity is content-stable: exclude retrievedAt (call-time) so the same
  // cohort/capability set hashes identically across turns.
  const payload = JSON.stringify({
    sourceName: manifest.sourceName,
    models: manifest.models.map((m) => ({
      id: m.modelId,
      efforts: m.reasoningEfforts,
      inputUsdPerMTok: m.inputUsdPerMTok,
      outputUsdPerMTok: m.outputUsdPerMTok,
    })),
    allowlist: manifest.campaignAllowlist,
  });
  return createHash("sha256").update(payload).digest("hex").slice(0, 16);
}

/**
 * Decide nominal Product cognitive routing.
 * Fail-closed when no sufficient config remains — never silently downgrade.
 */
export function decideCognitiveRouting(
  input: DecideCognitiveRoutingInput,
): CognitiveRoutingDecision | CognitiveRoutingLimitation {
  const routingDecisionId = randomUUID();
  const cognitiveTaskId = input.cognitiveTaskId.trim();
  if (!cognitiveTaskId) {
    throw new Error("COGNITIVE_ROUTING_REQUIRES_STABLE_TASK_ID");
  }

  const manifest =
    input.manifest ??
    buildP5TargetCapabilityManifest(new Date().toISOString());
  const snapshotId = providerSnapshotIdentity(manifest);
  const qualityFloor = deriveQualityFloor(input.strategy, input.signals);

  const candidates = generateCandidateConfigs(input.strategy);
  const { eligible: capabilityEligible, rejected } = filterByProviderCapability(
    candidates,
    manifest,
  );

  const qualityEligible = capabilityEligible.filter((c) =>
    meetsQualityFloor(c, qualityFloor),
  );

  const reasonCodes = [
    ...qualityFloor.reasonCodes,
    `candidates:${candidates.length}`,
    `capabilityEligible:${capabilityEligible.length}`,
    `qualityEligible:${qualityEligible.length}`,
    ...rejected.slice(0, 12).map((r) => `rejected:${r}`),
  ];

  if (qualityEligible.length === 0) {
    return {
      ok: false,
      routingDecisionId,
      cognitiveTaskId,
      strategyClass: input.strategy.strategyClass,
      qualityFloor,
      reasonCodes: [
        ...reasonCodes,
        "NO_SUFFICIENT_CONFIG",
        "BUDGET_MUST_NOT_DOWNGRADE_BELOW_FLOOR",
      ],
      policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
      providerSnapshotIdentity: snapshotId,
    };
  }

  const ordered = sortMinimumSufficient(qualityEligible, manifest);
  let selected = ordered[0]!;

  // Budget may eliminate higher-cost options only among quality-sufficient set.
  if (input.maxBudgetUsd != null && Number.isFinite(input.maxBudgetUsd)) {
    const withinBudget = ordered.filter((c) => {
      const est = estimateCostUsd({
        manifest,
        modelId: c.modelId,
        inputTokens: 4000,
        outputTokens: 1200,
      });
      return est <= input.maxBudgetUsd!;
    });
    if (withinBudget.length === 0) {
      return {
        ok: false,
        routingDecisionId,
        cognitiveTaskId,
        strategyClass: input.strategy.strategyClass,
        qualityFloor,
        reasonCodes: [
          ...reasonCodes,
          "BUDGET_EXCLUDES_ALL_SUFFICIENT",
          "BUDGET_MUST_NOT_DOWNGRADE_BELOW_FLOOR",
        ],
        policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
        providerSnapshotIdentity: snapshotId,
      };
    }
    selected = withinBudget[0]!;
    reasonCodes.push("budget:filtered-among-sufficient");
  }

  const escalationsUsed = input.escalationsUsed ?? 0;
  const escalationEligible = escalationsUsed < P5_MAX_ESCALATIONS_PER_TASK;

  const estimatedCostUsdHint = estimateCostUsd({
    manifest,
    modelId: selected.modelId,
    inputTokens: 4000,
    outputTokens: 1200,
  });

  reasonCodes.push(
    `selected:${selected.modelId}/${selected.reasoningEffort}`,
    "reasoningMode:standard",
    "finops:among-sufficient-only",
  );

  return {
    ok: true,
    routingDecisionId,
    cognitiveTaskId,
    strategyClass: input.strategy.strategyClass,
    qualityFloor,
    eligibleConfigs: ordered,
    selectedModel: selected.modelId,
    selectedReasoningEffort: selected.reasoningEffort,
    reasoningMode: P5_REASONING_MODE_NOMINAL,
    reasonCodes,
    escalationEligible,
    maxEscalations: P5_MAX_ESCALATIONS_PER_TASK,
    providerSnapshotIdentity: snapshotId,
    policyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
    estimatedCostUsdHint,
  };
}

/** True when model id is outside the P5 nominal target cohort. */
export function isOutsideP5TargetCohort(modelId: string): boolean {
  return !(P5_TARGET_MODEL_COHORT as readonly string[]).includes(modelId);
}

```

======================================================================
NEW TESTS
======================================================================

### FILE projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s01.cognitiveRouting.d0.test.ts

```ts
/** @vitest-environment node */
/**
 * P5-S01 D0 — Cognitive routing policy + Product-path wiring (ZERO REAL).
 */
import { describe, expect, it, vi } from "vitest";
import {
  ScriptedModel,
  assistantMessage,
} from "@openai/agents/testing";
import {
  buildMw0CapabilityManifest,
  buildP5TargetCapabilityManifest,
  modelCapabilitySet,
} from "@/lib/nora-eval/capabilityBudget";
import {
  decideCognitiveRouting,
  deriveQualityFloor,
  generateCandidateConfigs,
  isOutsideP5TargetCohort,
  P5_COGNITIVE_ROUTING_POLICY_VERSION,
  P5_MAX_ESCALATIONS_PER_TASK,
  P5_TARGET_MODEL_COHORT,
  decideCognitiveStrategy,
  normalizeCognitiveWorkloadSignals,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import type { TechnicalEvent } from "@/lib/platform/observability/types";

function strategyFor(
  partial: Parameters<typeof normalizeCognitiveWorkloadSignals>[0],
  profile = "trusted-profile",
) {
  return decideCognitiveStrategy({
    signals: normalizeCognitiveWorkloadSignals(partial),
    trustedSfiaProfile: profile,
  });
}

describe("P5-S01 — cognitive routing D0", () => {
  it("P5-D0-01 — nominal target cohort = Luna / Sol / Astra", () => {
    expect([...P5_TARGET_MODEL_COHORT]).toEqual([
      "gpt-6-luna",
      "gpt-6.1-sol",
      "gpt-6-astra",
    ]);
    const manifest = buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z");
    expect(manifest.models.map((m) => m.modelId).sort()).toEqual([
      "gpt-6-astra",
      "gpt-6-luna",
      "gpt-6.1-sol",
    ]);
  });

  it("P5-D0-02 — nominal routing excludes GPT-5.6", () => {
    expect(isOutsideP5TargetCohort("gpt-5.6-luna")).toBe(true);
    expect(isOutsideP5TargetCohort("gpt-5.6-sol")).toBe(true);
    expect(isOutsideP5TargetCohort("gpt-6-luna")).toBe(false);
    const strategy = strategyFor({
      ambiguity: "low",
      reasoningDepth: "low",
      sourceBreadth: "low",
      verificationNeed: "low",
      contradictionRisk: "low",
    });
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-02",
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(decision.selectedModel.startsWith("gpt-5.6")).toBe(false);
    expect(
      decision.eligibleConfigs.every(
        (c) => !c.modelId.startsWith("gpt-5.6"),
      ),
    ).toBe(true);
  });

  it("P5-D0-03 — historical GPT-5.6 MW0 manifest unchanged", () => {
    const mw0 = buildMw0CapabilityManifest("2026-10-05T00:00:00.000Z");
    expect(mw0.models.map((m) => m.modelId)).toEqual([
      "gpt-5.6-sol",
      "gpt-5.6-terra",
      "gpt-5.6-luna",
    ]);
    expect(mw0.models.some((m) => m.modelId.startsWith("gpt-6"))).toBe(false);
  });

  it("P5-D0-04 — Strategy does not contain fixed model mapping", () => {
    const strategy = strategyFor({
      ambiguity: "medium",
      reasoningDepth: "medium",
      verificationNeed: "medium",
    });
    const candidates = generateCandidateConfigs(strategy);
    const models = new Set(candidates.map((c) => c.modelId));
    expect(models.has("gpt-6-luna")).toBe(true);
    expect(models.has("gpt-6.1-sol")).toBe(true);
    expect(models.has("gpt-6-astra")).toBe(true);
    // Same strategy class yields multi-model candidates (not Strategy→Model fixed).
    expect(models.size).toBe(3);
  });

  it("P5-D0-05 / P5-D0-06 — Quality Floor before FinOps; insufficient excluded", () => {
    const strategy = strategyFor({
      rigorCriticality: "high",
      verificationNeed: "high",
      contradictionRisk: "high",
      ambiguity: "high",
      reasoningDepth: "high",
    });
    expect(strategy.strategyClass).toBe("High-Assurance");
    const floor = deriveQualityFloor(strategy);
    expect(floor.minModelRank).toBeGreaterThanOrEqual(2);
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-05",
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(decision.selectedModel).not.toBe("gpt-6-luna");
    expect(
      decision.eligibleConfigs.every((c) => c.modelId !== "gpt-6-luna" || false),
    );
    // Luna configs must not remain eligible under High-Assurance floor.
    expect(
      decision.eligibleConfigs.every((c) => c.modelId !== "gpt-6-luna"),
    ).toBe(true);
  });

  it("P5-D0-07 — Luna none accepted", () => {
    const manifest = buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z");
    const efforts = modelCapabilitySet(manifest, "gpt-6-luna");
    expect(efforts).toContain("none");
  });

  it("P5-D0-08 / P5-D0-09 — Sol/Astra none rejected", () => {
    const manifest = buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z");
    expect(modelCapabilitySet(manifest, "gpt-6.1-sol")).not.toContain("none");
    expect(modelCapabilitySet(manifest, "gpt-6-astra")).not.toContain("none");
  });

  it("P5-D0-10 — unknown model fail-closed", () => {
    const strategy = strategyFor({});
    const manifest = buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z");
    expect(modelCapabilitySet(manifest, "gpt-unknown-xyz")).toBeNull();
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-10",
      manifest,
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(decision.selectedModel).not.toBe("gpt-unknown-xyz");
  });

  it("P5-D0-11 — unsupported effort not silently coerced", () => {
    const manifest = buildP5TargetCapabilityManifest("2026-10-05T00:00:00.000Z");
    const sol = modelCapabilitySet(manifest, "gpt-6.1-sol")!;
    expect(sol.includes("none")).toBe(false);
    // Routine envelope includes none — Sol none must be filtered, not coerced to low.
    const strategy = strategyFor({
      ambiguity: "low",
      reasoningDepth: "low",
      sourceBreadth: "low",
      verificationNeed: "low",
      contradictionRisk: "low",
    });
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-11",
      manifest,
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(
      decision.eligibleConfigs.some(
        (c) => c.modelId === "gpt-6.1-sol" && c.reasoningEffort === "none",
      ),
    ).toBe(false);
  });

  it("P5-D0-12 — budget cannot downgrade below quality", () => {
    const strategy = strategyFor({
      rigorCriticality: "high",
      verificationNeed: "high",
      contradictionRisk: "high",
      ambiguity: "high",
      reasoningDepth: "high",
    });
    // Impossible budget among Sol/Astra → limitation, not Luna downgrade.
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-12",
      maxBudgetUsd: 0.000001,
    });
    expect(decision.ok).toBe(false);
    if (decision.ok) return;
    expect(decision.reasonCodes).toContain(
      "BUDGET_MUST_NOT_DOWNGRADE_BELOW_FLOOR",
    );
  });

  it("P5-D0-13 / P5-D0-14 / P5-D0-15 — reconstructible + policy version + reason codes", () => {
    const strategy = strategyFor({ ambiguity: "medium" });
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-13-task",
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(decision.routingDecisionId.length).toBeGreaterThan(8);
    expect(decision.cognitiveTaskId).toBe("p5-d0-13-task");
    expect(decision.policyVersion).toBe(P5_COGNITIVE_ROUTING_POLICY_VERSION);
    expect(decision.reasonCodes.length).toBeGreaterThan(0);
    expect(decision.providerSnapshotIdentity.length).toBeGreaterThan(0);
  });

  it("P5-D0-16 — max escalation = 1", () => {
    expect(P5_MAX_ESCALATIONS_PER_TASK).toBe(1);
    const strategy = strategyFor({});
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-16",
      escalationsUsed: 0,
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(decision.maxEscalations).toBe(1);
    expect(decision.escalationEligible).toBe(true);
    const after = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-d0-16",
      escalationsUsed: 1,
    });
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.escalationEligible).toBe(false);
  });

  it("P5-D0-17 — stable cognitive task identity required", () => {
    const strategy = strategyFor({});
    expect(() =>
      decideCognitiveRouting({ strategy, cognitiveTaskId: "   " }),
    ).toThrow(/COGNITIVE_ROUTING_REQUIRES_STABLE_TASK_ID/);
  });

  it("P5-D0-18 / P5-D0-19 — client cannot select model/effort via Product path", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] P5 routing." }],
    });
    const result = await runNoraCognitiveTurn({
      correlationId: "p5-d0-18",
      projectId: "prj:p5",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "probe routing" },
      ],
      provider,
      enableTools: false,
      cognitiveWorkloadSignals: {
        ambiguity: "low",
        reasoningDepth: "low",
        sourceBreadth: "low",
        verificationNeed: "low",
        contradictionRisk: "low",
      },
      trustedSfiaProfile: "trusted-profile",
      // Intentionally no client model/effort fields exist on the input type.
    });
    expect(result.selectedModelId).toBeTruthy();
    expect(P5_TARGET_MODEL_COHORT).toContain(
      result.selectedModelId as (typeof P5_TARGET_MODEL_COHORT)[number],
    );
    expect(result.selectedReasoningEffort).toBeTruthy();
    expect(result.cognitiveRoutingPolicyVersion).toBe(
      P5_COGNITIVE_ROUTING_POLICY_VERSION,
    );
  });

  it("P5-D0-20 — stronger model does not widen authority fields", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] HA." }],
    });
    const result = await runNoraCognitiveTurn({
      correlationId: "p5-d0-20",
      projectId: "prj:p5",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "high assurance probe" },
      ],
      provider,
      enableTools: false,
      cognitiveWorkloadSignals: {
        rigorCriticality: "high",
        verificationNeed: "high",
        contradictionRisk: "high",
        ambiguity: "high",
        reasoningDepth: "high",
      },
      trustedSfiaProfile: "trusted-profile",
    });
    expect(result.selectedModelId).not.toBe("gpt-6-luna");
    // No authority envelope / confirmation / HD fields introduced by routing.
    expect(
      Object.keys(result).some((k) =>
        /authority|humanDecision|confirmation/i.test(k),
      ),
    ).toBe(false);
  });

  it("P5-D0-21 — routing telemetry contains no CoT", async () => {
    const events: TechnicalEvent[] = [];
    const sink: EventSink = {
      emit(event) {
        events.push(event);
      },
    };
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] telemetry." }],
    });
    await runNoraCognitiveTurn({
      correlationId: "p5-d0-21",
      projectId: "prj:p5",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "telemetry probe" },
      ],
      provider,
      enableTools: false,
      sink,
      cognitiveWorkloadSignals: {
        ambiguity: "low",
        reasoningDepth: "low",
        sourceBreadth: "low",
        verificationNeed: "low",
        contradictionRisk: "low",
      },
      trustedSfiaProfile: "trusted-profile",
    });
    const routing = events.find((e) => e.type === "COGNITIVE_ROUTING_SELECTED");
    expect(routing).toBeTruthy();
    const blob = JSON.stringify(routing?.detail ?? {});
    expect(blob).not.toMatch(/chain of thought|private reasoning|confidencePercent|qualityScore/i);
    expect(routing?.detail).toMatchObject({
      routingPolicyVersion: P5_COGNITIVE_ROUTING_POLICY_VERSION,
      selectedModel: expect.any(String),
      selectedEffort: expect.any(String),
    });
  });

  it("P5-D0-22 / P5-D0-23 / P5-D0-24 — Fake boundary + same Runner + zero live", async () => {
    const model = new ScriptedModel([[assistantMessage("ok")]]);
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] boundary." }],
    });
    const spy = vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      throw new Error("UNEXPECTED_LIVE_FETCH");
    });
    try {
      const result = await runNoraCognitiveTurn({
        correlationId: "p5-d0-22",
        projectId: "prj:p5",
        messages: [
          { role: "system", content: sfiaBoundaryInstructions() },
          { role: "user", content: "fake boundary" },
        ],
        provider,
        enableTools: false,
        cognitiveWorkloadSignals: {
          ambiguity: "low",
          reasoningDepth: "low",
          sourceBreadth: "low",
          verificationNeed: "low",
          contradictionRisk: "low",
        },
        trustedSfiaProfile: "trusted-profile",
        // Eval pin with ScriptedModel proves same Agents Runner path remains usable.
        evalModelReasoningControl: {
          modelId: "gpt-6-luna",
          reasoningEffort: "low",
          agentsModel: model,
        },
      });
      expect(result.cognitiveRuntime).toBe("agents");
      expect(result.evalPinnedModelId).toBe("gpt-6-luna");
      expect(spy).not.toHaveBeenCalled();
    } finally {
      spy.mockRestore();
    }
  });
});

```


### FILE projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s01.integratedProduct.d0.test.ts

```ts
/** @vitest-environment node */
/**
 * P5-S01 — Integrated Product vertical slice D0 (ZERO REAL).
 *
 * Real local Product Project/LPS → studioCognitiveContext facts →
 * runNoraCognitiveTurn → CWP → Strategy → P5 routing → Fake provider →
 * SAME Agents Runner → Product-safe result. No live OpenAI.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  P5_COGNITIVE_ROUTING_POLICY_VERSION,
  P5_TARGET_MODEL_COHORT,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { composeStudioCognitiveContext } from "@/features/project-assistant/f2/studioCognitiveContext";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";

function analysisStub(): IntentAnalysisDto {
  return {
    intentClass: "informative",
    parseOk: true,
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: {
      ambiguity: "low",
      reasoningDepth: "low",
      sourceBreadth: "low",
      toolDependency: "low",
      contradictionRisk: "low",
      verificationNeed: "low",
    },
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
  };
}

describe("P5-S01 — integrated Product path D0", () => {
  const tempDirs: string[] = [];
  let projectId = "";
  let lpsId = "";
  let productDbPath = "";

  beforeEach(async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-p5-s01-"));
    tempDirs.push(dir);
    productDbPath = path.join(dir, "oa-product.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
      nowIso: "2026-10-05T08:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Product Simplification P5-S01",
      objective:
        "Premier slice intégré Conversation + contexte sémantique + routing",
      context: "P5-S01 vertical slice D0",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: "P5S01",
      idempotencyKey: `idem:p5-s01-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject failed");
    projectId = created.projectId;
    const project = await runtime.getProject(projectId);
    expect(project.ok).toBe(true);
    if (!project.ok) throw new Error("getProject failed");
    lpsId = project.livingState.id;
    expect(lpsId).toBeTruthy();
  });

  afterEach(() => {
    resetRuntimeApplicationServiceForTests();
    delete process.env.OPS1_CONVERSATION_PROVIDER;
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it("uses real Product Project/LPS + routing + Fake boundary + same Runner", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockImplementation(() => {
      throw new Error("UNEXPECTED_LIVE_FETCH_P5_S01");
    });

    try {
      const projectDto: ProjectAssistantContextDto = {
        projectId,
        name: "Product Simplification P5-S01",
        shortReference: "P5S01",
        objective:
          "Premier slice intégré Conversation + contexte sémantique + routing",
        contextSummary: "P5-S01 vertical slice D0",
        criticality: "STANDARD",
        constraints: ["ZERO REAL"],
        lpsId,
        lpsVersion: 1,
        lpsCreatedAt: "2026-10-05T08:00:00.000Z",
        doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
        doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
        doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
        doctrineStatus: "product-studio-native",
        runtimeMode: "local",
        persistence: "product-sqlite",
        readiness: "ready",
      };

      const runtime = getRuntimeApplicationService();
      const composed = await composeStudioCognitiveContext({
        analysis: analysisStub(),
        project: projectDto,
        registryRoot: resolveProductDoctrineRegistryRoot(),
        truthCContext: "P5-S01 vertical slice D0",
        oa: runtime.oa!,
      });
      expect(composed.ok).toBe(true);
      if (!composed.ok) throw new Error("composeStudioCognitiveContext failed");
      expect(composed.context.projectTruth.projectId).toBe(projectId);
      expect(composed.context.projectTruth.lpsId).toBe(lpsId);
      expect(composed.context.limits.truthOutranksConversation).toBe(true);
      expect(fs.existsSync(productDbPath)).toBe(true);

      const provider = new FakeConversationProvider({
        toolScript: [
          {
            kind: "message",
            text: "[TEST/FAKE] P5-S01 integrated Product path — zero durable mutation.",
          },
        ],
      });

      const result = await runNoraCognitiveTurn({
        correlationId: `logical:${projectId}:p5-s01-turn-1`,
        projectId,
        messages: [
          {
            role: "system",
            content: [
              sfiaBoundaryInstructions(),
              "",
              `ProjectId=${projectId}`,
              `LpsId=${lpsId}`,
              `Objective=${projectDto.objective}`,
            ].join("\n"),
          },
          {
            role: "user",
            content:
              "Peux-tu me rappeler le contexte courant de ce projet sans rien modifier ?",
          },
        ],
        provider,
        enableTools: false,
        turnWorkloadContext: {
          userContentLength: 64,
          historyMessageCount: 0,
          projectCriticality: "STANDARD",
        },
        semanticCognitiveWorkload: analysisStub().cognitiveWorkload,
        trustedSfiaProfile: "trusted-profile",
      });

      expect(result.cognitiveRuntime).toBe("agents");
      expect(result.selectedModelId).toBeTruthy();
      expect(P5_TARGET_MODEL_COHORT).toContain(
        result.selectedModelId as (typeof P5_TARGET_MODEL_COHORT)[number],
      );
      expect(result.cognitiveRoutingPolicyVersion).toBe(
        P5_COGNITIVE_ROUTING_POLICY_VERSION,
      );
      expect(result.cognitiveStrategyClass).toBeTruthy();
      expect(result.selectedReasoningEffort).toBeTruthy();
      expect(result.text).toMatch(/P5-S01|FAKE|contexte|projet/i);
      // No HD/authority expansion fields from routing.
      expect((result as { humanDecisionId?: string }).humanDecisionId).toBeUndefined();
      expect(fetchSpy).not.toHaveBeenCalled();
      // Same Product SQLite file still present — no second Product store.
      expect(fs.existsSync(productDbPath)).toBe(true);
    } finally {
      fetchSpy.mockRestore();
    }
  });
});

```


### FILE projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p5.s01.semanticInvariants.d0.test.ts

```ts
/** @vitest-environment node */
/**
 * P5-S01 — Product semantic invariants at tested D0 scope (ZERO REAL).
 */
import { describe, expect, it } from "vitest";
import {
  decideCognitiveRouting,
  decideCognitiveStrategy,
  normalizeCognitiveWorkloadSignals,
  P5_TARGET_MODEL_COHORT,
} from "@/lib/nora-cognitive-runtime";

describe("P5-S01 — semantic invariants D0", () => {
  it("P5-SEM-05 — model choice cannot encode Product authority fields", () => {
    const strategy = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        rigorCriticality: "high",
        verificationNeed: "high",
        contradictionRisk: "high",
        ambiguity: "high",
        reasoningDepth: "high",
      }),
      trustedSfiaProfile: "trusted-profile",
    });
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-sem-05",
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(P5_TARGET_MODEL_COHORT).toContain(decision.selectedModel);
    const keys = Object.keys(decision);
    expect(keys.some((k) => /authority|humanDecision|confirmation/i.test(k))).toBe(
      false,
    );
  });

  it("P5-SEM-02/03 — routing decision is not HumanDecision / Recommendation disposition", () => {
    const strategy = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({
        ambiguity: "low",
        reasoningDepth: "low",
        sourceBreadth: "low",
        verificationNeed: "low",
        contradictionRisk: "low",
      }),
      trustedSfiaProfile: "trusted-profile",
    });
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-sem-02",
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect("humanDecisionId" in decision).toBe(false);
    expect("recommendationDisposition" in decision).toBe(false);
    expect(decision.reasoningMode).toBe("standard");
  });

  it("P5-SEM-08 — Strategy Proposed trajectory semantics remain outside router", () => {
    // Router must not invent ProjectTrajectory decided/proposed states.
    const strategy = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals({}),
      trustedSfiaProfile: null,
    });
    const decision = decideCognitiveRouting({
      strategy,
      cognitiveTaskId: "p5-sem-08",
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    expect(JSON.stringify(decision)).not.toMatch(/ProjectTrajectory|Terminé|Proposé/);
  });
});

```


### FILE projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx

```ts
/** @vitest-environment jsdom */
/**
 * P5-S01 — Workspace / Conversation P3 layout smoke (UI).
 */
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProductShell } from "@/features/pre-m6-product-ui/ProductShell";
import { ProjectWorkspacePage } from "@/features/pre-m6-product-ui/ProjectWorkspacePage";

const { getProjectRuntimeActionMock, useProductConversationMock } = vi.hoisted(
  () => ({
    getProjectRuntimeActionMock: vi.fn(),
    useProductConversationMock: vi.fn(),
  }),
);

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: (...args: unknown[]) =>
    getProjectRuntimeActionMock(...args),
  setProjectRepositoryBindingAction: vi.fn(),
}));

vi.mock("@/features/pre-m6-product-ui/hooks/useProductConversation", () => ({
  useProductConversation: (...args: unknown[]) =>
    useProductConversationMock(...args),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantActiveCycleWorkspaceAction: vi.fn().mockResolvedValue({
    ok: true,
    cycleTypeId: null,
    repositoryWorkspaceSegment: null,
  }),
  projectAssistantConfirmReservationResolutionAction: vi.fn(),
  projectAssistantDeferReservationAction: vi.fn(),
  projectAssistantPilotLifecycleProjection: vi.fn(),
  projectAssistantPilotLifecycleAction: vi.fn(),
  projectAssistantRecordObligationPolicyAction: vi.fn(),
  projectAssistantCompleteTrajectoryStepAction: vi.fn(),
  projectAssistantResolveBlockingReservationAction: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeAction: vi.fn().mockResolvedValue({
    ok: false,
  }),
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/LifecycleSurface", () => ({
  LifecycleSurface: () => <div data-testid="lifecycle-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/TrajectorySurface", () => ({
  TrajectorySurface: () => <div data-testid="trajectory-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/HistorySurface", () => ({
  HistorySurface: () => <div data-testid="history-stub" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/JournalSurface", () => ({
  JournalSurface: () => <div data-testid="cycle-journal-rail" />,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/LpsSurface", () => ({
  LpsSurface: () => <div data-testid="lps-stub" />,
  lpsNextAction: () => null,
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/RecoverySurface", () => ({
  RecoverySurface: () => null,
}));

vi.mock(
  "@/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel",
  () => ({
    ProjectWorkspaceRoutingPanelLazy: () => null,
  }),
);

vi.mock("@/features/pre-m6-product-ui/ProductRailRecents", () => ({
  ProductRailRecents: () => (
    <div data-testid="studio-rail-recents-stub">Projets récents</div>
  ),
}));

vi.mock("@/features/pre-m6-product-ui/surfaces/ConversationSurface", () => ({
  ConversationSurface: () => (
    <div data-testid="project-assistant-panel">Conversation</div>
  ),
}));

describe("P5-S01 Workspace layout", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      project: {
        projectId: "prj:p5-s01",
        name: "Product Simplification",
        shortReference: "P5",
        objective:
          "Simplifier le pilotage sans perdre gouvernance, preuve et maîtrise du Pilote.",
        contextSummary: "ctx",
        criticality: "STANDARD",
        constraints: [],
        localMode: true,
        source: "REAL_LOCAL_CORE",
        fixture: false,
        projectWorkspaceKey: null,
        repositoryBinding: null,
      },
      livingState: {
        id: "lps:p5",
        version: 3,
        createdAt: "2026-10-05T00:00:00.000Z",
        activeCycleInstanceId: null,
      },
      doctrine: { id: "d", version: "1", digest: "x", status: "RESOLVED" },
      readiness: {
        status: "NOT_READY",
        hard: "OPEN",
        tA6: "INCOMPLETE",
        iam: "NOT_SELECTED",
        productPersistence: "SQLITE_OA_PRODUCT_STORE",
        realAgentExecution: "DISABLED",
        delivery: "NOT_AUTHORIZED",
        cutover: "NOT_AUTHORIZED",
        runReady: false,
        productReady: false,
      },
      disclosures: {},
    });
    useProductConversationMock.mockReturnValue({
      listRef: { current: null },
      messages: [],
      draft: "",
      setDraft: vi.fn(),
      toolEvents: [],
      busy: false,
      error: null,
      send: vi.fn(),
      transcriptAvailability: "available",
      openContinuityPresentation: { kind: "none" },
      refreshConversationContinuity: vi.fn(),
      journalEntries: [],
      activeProposal: null,
      f3Prepare: null,
      f3M3Resolved: null,
      f3Execute: null,
      durableEvidenceOutcome: null,
    });
  });

  it("renders P3 shell rail + Conversation workspace without internals", async () => {
    render(
      <ProductShell
        activeNav="current"
        currentProjectHref="/studio/projects/prj%3Ap5-s01"
      >
        <ProjectWorkspacePage projectId="prj:p5-s01" />
      </ProductShell>,
    );

    expect(screen.getByTestId("studio-shell")).toBeTruthy();
    expect(screen.getByTestId("studio-rail")).toBeTruthy();
    expect(screen.getByTestId("studio-rail-meridian")).toBeTruthy();
    expect(screen.getAllByText("SFIA Studio").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Pilote").length).toBeGreaterThan(0);

    await waitFor(() => {
      expect(screen.getByTestId("project-principal")).toBeTruthy();
    });

    expect(screen.getByTestId("project-tab-conversation")).toHaveAttribute(
      "data-selected",
      "true",
    );
    expect(screen.getByTestId("project-tab-overview").textContent).toMatch(
      /Aperçu/,
    );
    expect(screen.getByTestId("project-tab-execution").textContent).toMatch(
      /Exécution/,
    );
    expect(screen.getByTestId("project-conversation-main")).toBeTruthy();
    expect(screen.getByTestId("project-lps-column")).toBeTruthy();

    const body = document.body.textContent ?? "";
    expect(body).not.toMatch(
      /HumanDecision|ExecutionContract|\bCKC\b|reasoning effort|gpt-6|OPENAI_MODEL/i,
    );
    expect(screen.queryByLabelText(/modèle/i)).toBeNull();
    expect(screen.queryByLabelText(/reasoning/i)).toBeNull();
  });
});

```

======================================================================
USEFUL DIFF — ROUTING / RUNTIME
======================================================================
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 165c90be..7dcb49d2 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -397,7 +397,9 @@ export async function orchestrateProjectAssistantTurn(input: {

   try {
     const turn = await runNoraCognitiveTurn({
-      correlationId: `f1:${project.projectId}`,
+      // P5-S01 — prefer durable logicalTurnId as stable cognitive task identity
+      // across tool rounds / retry / one escalation. Fallback keeps prior f1: key.
+      correlationId: logicalTurnId ?? `f1:${project.projectId}`,
       projectId: project.projectId,
       messages,
       provider,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 8f444247..e56f07f0 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -252,6 +252,24 @@ export {
   buildRunnerModelSettingsForEffort,
   type NoraRunnerModelSettings,
 } from "./reasoningModelSettings";
+export {
+  decideCognitiveRouting,
+  deriveQualityFloor,
+  generateCandidateConfigs,
+  isOutsideP5TargetCohort,
+  P5_COGNITIVE_ROUTING_POLICY_VERSION,
+  P5_MAX_ESCALATIONS_PER_TASK,
+  P5_REASONING_MODE_NOMINAL,
+  P5_TARGET_MODEL_COHORT,
+} from "./cognitiveRoutingPolicy";
+export type {
+  CognitiveQualityFloor,
+  CognitiveRoutingConfig,
+  CognitiveRoutingDecision,
+  CognitiveRoutingLimitation,
+  DecideCognitiveRoutingInput,
+  P5TargetModelId,
+} from "./cognitiveRoutingPolicy";
 export {
   GROUNDING_REFS_TYPE,
   acceptGroundingRefsForProject,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts
index 4e865ae5..567f8ae0 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/reasoningCapability.ts
@@ -1,20 +1,39 @@
 /**
  * Runtime model capability validation — fail-closed, no campaign allowlist.
- * Uses CURRENT OpenAI provider snapshot (incl. Astra). MW0 historical snapshot untouched.
+ * Default: CURRENT OpenAI provider snapshot (incl. Astra). MW0 historical untouched.
+ * Callers on the P5 nominal Product path pass the P5 TARGET cohort manifest.
  */
 import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
 import { TechnicalError } from "@/lib/platform/ai/errors";
 import {
   buildCurrentOpenAiCapabilityManifest,
+  buildP5TargetCapabilityManifest,
   modelCapabilitySet,
+  type CapabilityManifest,
 } from "@/lib/nora-eval/capabilityBudget";

+function resolveCapabilitySet(
+  modelId: string,
+  manifest?: CapabilityManifest,
+): OpenAiReasoningEffort[] | null {
+  if (manifest) {
+    return modelCapabilitySet(manifest, modelId);
+  }
+  const now = new Date().toISOString();
+  // Prefer CURRENT provider universe; fall back to P5 TARGET cohort for
+  // nominal Product / eval pins that already use GPT-6 Luna/Sol/Astra.
+  return (
+    modelCapabilitySet(buildCurrentOpenAiCapabilityManifest(now), modelId) ??
+    modelCapabilitySet(buildP5TargetCapabilityManifest(now), modelId)
+  );
+}
+
 export function validateRuntimeReasoningCapability(
   modelId: string,
   reasoningEffort: OpenAiReasoningEffort,
+  manifest?: CapabilityManifest,
 ): void {
-  const manifest = buildCurrentOpenAiCapabilityManifest(new Date().toISOString());
-  const supported = modelCapabilitySet(manifest, modelId);
+  const supported = resolveCapabilitySet(modelId, manifest);
   if (!supported) {
     throw new TechnicalError(
       "CONFIG",
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index 8ccd697e..faa4c498 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -35,6 +35,13 @@ import {
 } from "./cognitiveWorkloadPolicy";
 import { validateRuntimeReasoningCapability } from "./reasoningCapability";
 import { buildRunnerModelSettingsForEffort } from "./reasoningModelSettings";
+import {
+  decideCognitiveRouting,
+  type CognitiveRoutingDecision,
+} from "./cognitiveRoutingPolicy";
+import {
+  buildP5TargetCapabilityManifest,
+} from "@/lib/nora-eval/capabilityBudget";
 import {
   disposeContradiction,
   type ContradictionConflictInput,
@@ -91,6 +98,7 @@ import type {
 } from "./campaignBudget";
 import type { NoraAgentsUsdAccounting } from "./agentsUsdAccounting";
 import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
+import { TechnicalError } from "@/lib/platform/ai/errors";
 import type { Model } from "@openai/agents";

 /**
@@ -253,6 +261,43 @@ function emitCognitiveStrategyTelemetry(
   });
 }

+function emitCognitiveRoutingTelemetry(
+  sink: EventSink | undefined,
+  correlationId: string,
+  routing: CognitiveRoutingDecision,
+): void {
+  if (!sink) return;
+  sink.emit({
+    type: "COGNITIVE_ROUTING_SELECTED",
+    correlationId,
+    detail: {
+      routingDecisionId: routing.routingDecisionId,
+      cognitiveTaskId: routing.cognitiveTaskId,
+      strategyClass: routing.strategyClass,
+      selectedModel: routing.selectedModel,
+      selectedEffort: routing.selectedReasoningEffort,
+      reasoningMode: routing.reasoningMode,
+      qualityFloor: {
+        category: routing.qualityFloor.category,
+        minModelRank: routing.qualityFloor.minModelRank,
+        minEffortRank: routing.qualityFloor.minEffortRank,
+        reasonCodes: routing.qualityFloor.reasonCodes,
+      },
+      reasonCodes: routing.reasonCodes,
+      eligibleSummary: routing.eligibleConfigs.slice(0, 12).map((c) => ({
+        modelId: c.modelId,
+        reasoningEffort: c.reasoningEffort,
+      })),
+      escalationEligible: routing.escalationEligible,
+      maxEscalations: routing.maxEscalations,
+      providerCapabilitySnapshot: routing.providerSnapshotIdentity,
+      routingPolicyVersion: routing.policyVersion,
+      estimatedCostUsdHint: routing.estimatedCostUsdHint,
+      // Never emit Chain of Thought / private reasoning / fake confidence.
+    },
+  });
+}
+
 function resolveCognitiveStrategyForTurn(
   input: RunNoraCognitiveTurnInput,
 ): ReturnType<typeof decideCognitiveStrategy> | null {
@@ -286,20 +331,60 @@ function resolveCognitiveStrategyForTurn(

 function resolveEvalAgentsModel(
   input: RunNoraCognitiveTurnInput,
+  routing: CognitiveRoutingDecision | null,
 ): Model | string | undefined {
   const control = input.evalModelReasoningControl;
-  if (!control) return undefined;
-  if (control.agentsModel !== undefined) return control.agentsModel;
-  // Fake/completeRound providers keep adapter path — modelId remains Evidence identity.
-  if (input.provider && shouldUseProviderAgentsModelAdapter(input.provider)) {
-    return undefined;
+  if (control) {
+    if (control.agentsModel !== undefined) return control.agentsModel;
+    // Fake/completeRound providers keep adapter path — modelId remains Evidence identity.
+    if (input.provider && shouldUseProviderAgentsModelAdapter(input.provider)) {
+      return undefined;
+    }
+    return control.modelId;
+  }
+
+  // P5 nominal Product path: router-owned model for live Agents; Fake keeps adapter.
+  if (routing) {
+    if (input.provider && shouldUseProviderAgentsModelAdapter(input.provider)) {
+      return undefined;
+    }
+    return routing.selectedModel;
+  }
+
+  return undefined;
+}
+
+function resolveProductCognitiveRouting(
+  input: RunNoraCognitiveTurnInput,
+  decision: ReturnType<typeof decideCognitiveStrategy> | null,
+): CognitiveRoutingDecision | null {
+  // Eval pin owns model×effort — no Product router arbitration.
+  if (input.evalModelReasoningControl) return null;
+  // Strategy skipped → no cognition routing (deterministic / isolated tests).
+  if (!decision) return null;
+
+  const cognitiveTaskId = input.correlationId.trim();
+  const routed = decideCognitiveRouting({
+    strategy: decision,
+    cognitiveTaskId,
+    signals: decision.normalizedSignals,
+  });
+
+  if (!routed.ok) {
+    throw new TechnicalError(
+      "CONFIG",
+      `P5 cognitive routing: aucune configuration suffisante (quality floor). Codes: ${routed.reasonCodes.join(", ")}`,
+    );
   }
-  return control.modelId;
+
+  emitCognitiveRoutingTelemetry(input.sink, input.correlationId, routed);
+  return routed;
 }

 function resolveRunnerModelSettings(
   input: RunNoraCognitiveTurnInput,
   decision: ReturnType<typeof decideCognitiveStrategy> | null,
+  routing: CognitiveRoutingDecision | null,
 ): ReturnType<typeof buildRunnerModelSettingsForEffort> | undefined {
   const evalControl = input.evalModelReasoningControl;
   if (evalControl) {
@@ -310,8 +395,22 @@ function resolveRunnerModelSettings(
     return buildRunnerModelSettingsForEffort(evalControl.reasoningEffort);
   }

+  if (routing) {
+    const p5Manifest = buildP5TargetCapabilityManifest(
+      new Date().toISOString(),
+    );
+    validateRuntimeReasoningCapability(
+      routing.selectedModel,
+      routing.selectedReasoningEffort,
+      p5Manifest,
+    );
+    return buildRunnerModelSettingsForEffort(routing.selectedReasoningEffort);
+  }
+
   if (!decision) return undefined;

+  // Legacy fallback when strategy ran but routing was skipped (should be rare).
+  // OPENAI_MODEL remains TEMP WITH EXIT for non-routed paths / bootstrapping.
   const model =
     typeof input.provider?.providerId === "string" &&
     input.provider.providerId.startsWith("fake")
@@ -326,6 +425,7 @@ function withStrategyFields(
   turn: NoraCognitiveTurnResult,
   decision: ReturnType<typeof decideCognitiveStrategy> | null,
   evalControl?: NoraEvalModelReasoningControl,
+  routing?: CognitiveRoutingDecision | null,
 ): NoraCognitiveTurnResult {
   const base: NoraCognitiveTurnResult = {
     ...turn,
@@ -336,15 +436,24 @@ function withStrategyFields(
           selectedReasoningEffort: evalControl.reasoningEffort,
         }
       : {}),
+    ...(routing
+      ? {
+          selectedModelId: routing.selectedModel,
+          cognitiveRoutingDecisionId: routing.routingDecisionId,
+          cognitiveRoutingPolicyVersion: routing.policyVersion,
+        }
+      : {}),
   };
   if (!decision) return base;
   return {
     ...base,
     cognitiveStrategyClass: decision.strategyClass,
     cwpDerivedReasoningEffort: decision.reasoningEffort,
-    // Effective effort: eval pin wins; else CWP.
+    // Effective effort: eval pin wins; else P5 router; else CWP.
     selectedReasoningEffort:
-      evalControl?.reasoningEffort ?? decision.reasoningEffort,
+      evalControl?.reasoningEffort ??
+      routing?.selectedReasoningEffort ??
+      decision.reasoningEffort,
     criticalChallengeArmed: decision.criticalChallengeArmed,
   };
 }
@@ -444,12 +553,14 @@ function finalizeTurn(
   strategyDecision: ReturnType<typeof decideCognitiveStrategy> | null,
   mw4Grounding?: Mw4GroundingTurnSurface,
   mw6SourceIntelligence?: Mw6SourceIntelligenceSurface,
+  routing?: CognitiveRoutingDecision | null,
 ): NoraCognitiveTurnResult {
   const withMw3 = withMw3Fields(
     withStrategyFields(
       turn,
       strategyDecision,
       input.evalModelReasoningControl,
+      routing,
     ),
     input,
     strategyDecision,
@@ -670,7 +781,15 @@ export async function runNoraCognitiveTurn(
       strategyDecision,
     );
   }
-  const runnerModelSettings = resolveRunnerModelSettings(input, strategyDecision);
+  const routingDecision = resolveProductCognitiveRouting(
+    input,
+    strategyDecision,
+  );
+  const runnerModelSettings = resolveRunnerModelSettings(
+    input,
+    strategyDecision,
+    routingDecision,
+  );

   const system = input.messages.find((m) => m.role === "system");
   const userMessages = input.messages.filter((m) => m.role === "user");
@@ -739,7 +858,7 @@ export async function runNoraCognitiveTurn(
       sink: input.sink,
       enableTools: input.enableTools,
       provider: input.provider,
-      model: resolveEvalAgentsModel(input),
+      model: resolveEvalAgentsModel(input, routingDecision),
       runnerModelSettings,
       usdAccounting: input.usdAccounting,
       enableHostedWebSearch: attachHostedWebSearch,
@@ -822,6 +941,7 @@ export async function runNoraCognitiveTurn(
         strategyDecision,
         mw4,
         mw6,
+        routingDecision,
       ),
       // CORR-02B — factual hosted observation pass-through (no drop).
       ...(hostedSearchObserve ? { hostedSearchObserve } : {}),
@@ -907,7 +1027,7 @@ export async function runNoraCognitiveTurn(
       sink: input.sink,
       enableTools: input.enableTools,
       provider: input.provider,
-      model: resolveEvalAgentsModel(input),
+      model: resolveEvalAgentsModel(input, routingDecision),
       runnerModelSettings,
       usdAccounting: input.usdAccounting,
       enableHostedWebSearch: attachHostedWebSearch,
@@ -984,6 +1104,7 @@ export async function runNoraCognitiveTurn(
       strategyDecision,
       mw4Prep.surface ?? undefined,
       mw6,
+      routingDecision,
     );

     // Persist Evidence IDs claimed/accepted this turn (non-authoritative).
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
index dec56300..096f8c5f 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
@@ -54,6 +54,15 @@ export type NoraCognitiveTurnResult = {
   /** Eval-only pin identity when Stage A / campaign cell control is active. */
   evalPinnedModelId?: string;
   evalPinnedReasoningEffort?: OpenAiReasoningEffort;
+  /**
+   * P5-S01 — router-selected model identity on nominal Product path.
+   * Absent when eval pin / skipCognitiveStrategy / routing limitation.
+   */
+  selectedModelId?: string;
+  /** P5-S01 routing decision id (telemetry / reconstructibility). */
+  cognitiveRoutingDecisionId?: string;
+  /** P5-S01 routing policy version. */
+  cognitiveRoutingPolicyVersion?: string;
   criticalChallengeArmed?: boolean;
   /** MW3 — present only when contradictionAssessment was supplied. */
   contradictionDisposition?: ContradictionDispositionResult;
diff --git a/projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts b/projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
index 8ffe2b3a..192a7558 100644
--- a/projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
@@ -121,6 +121,67 @@ export function buildCurrentOpenAiCapabilityManifest(
   };
 }

+/**
+ * P5 nominal TARGET routing cohort capability snapshot (dated external input).
+ * Cohort EXACT: gpt-6-luna · gpt-6.1-sol · gpt-6-astra.
+ * Does NOT mutate {@link buildMw0CapabilityManifest} (GPT-5.6 historical FREEZE).
+ * Does NOT replace {@link buildCurrentOpenAiCapabilityManifest} provider universe.
+ * Snapshot ≠ permanent SFIA doctrine; account entitlement ≠ documented capability.
+ *
+ * Effort sets (external input revalidated for P5-S01 Delivery, 2026-10-05):
+ * - gpt-6-luna: none · low · medium · high · xhigh · max
+ * - gpt-6.1-sol: low · medium · high · xhigh · max (none unsupported)
+ * - gpt-6-astra: low · medium · high · xhigh · max (none unsupported)
+ *
+ * Pricing rows are replaceable FinOps ordering hints only — not eternal doctrine.
+ */
+export function buildP5TargetCapabilityManifest(
+  retrievedAtIso: string,
+): CapabilityManifest {
+  return {
+    retrievedAt: retrievedAtIso,
+    provider: "openai",
+    sourceName:
+      "P5 nominal TARGET cohort capability snapshot (GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra)",
+    sourceNote:
+      "P5-S01 TARGET routing cohort only — ≠ MW0 historical · ≠ full provider universe · ≠ permanent doctrine · ZERO REAL in S01. Revalidate before REAL gates.",
+    sdkCodeCapabilitySet: OPENAI_REASONING_EFFORT_VALUES,
+    models: [
+      {
+        modelId: "gpt-6-luna",
+        inputUsdPerMTok: 0.2,
+        outputUsdPerMTok: 1.2,
+        reasoningEfforts: ["none", "low", "medium", "high", "xhigh", "max"],
+      },
+      {
+        modelId: "gpt-6.1-sol",
+        inputUsdPerMTok: 4,
+        outputUsdPerMTok: 20,
+        reasoningEfforts: ["low", "medium", "high", "xhigh", "max"],
+      },
+      {
+        modelId: "gpt-6-astra",
+        inputUsdPerMTok: 10,
+        cachedInputUsdPerMTok: 1,
+        outputUsdPerMTok: 50,
+        reasoningEfforts: ["low", "medium", "high", "xhigh", "max"],
+      },
+    ],
+    campaignAllowlist: {
+      modelIds: ["gpt-6-luna", "gpt-6.1-sol", "gpt-6-astra"],
+      reasoningEfforts: ["none", "low", "medium", "high", "xhigh", "max"],
+    },
+    caveats: [
+      "P5 TARGET cohort excludes GPT-5.6 from nominal Product routing.",
+      "Historical GPT-5.6 manifests/evidence remain IMMUTABLE (buildMw0CapabilityManifest).",
+      "Sol/Astra do not support reasoning.effort=none — do not silently coerce.",
+      "minimal remains non-admissible for target cohort.",
+      "Documented capability ≠ account/API entitlement — ZERO REAL in P5-S01.",
+      "Pricing is dated FinOps ordering input only — replaceable provider data.",
+    ],
+  };
+}
+
 /**
  * Distinct campaign capability policy for the Global Model × Reasoning Campaign.
  * EXIT: campaign evaluation contract only — ≠ production model routing / ≠ multi-model router.
diff --git a/projects/sfia-studio/app/lib/platform/observability/types.ts b/projects/sfia-studio/app/lib/platform/observability/types.ts
index 0530dfaa..f1254ffc 100644
--- a/projects/sfia-studio/app/lib/platform/observability/types.ts
+++ b/projects/sfia-studio/app/lib/platform/observability/types.ts
@@ -15,7 +15,8 @@ export type TechnicalEventType =
   | "STRUCTURED_OUTPUT_REJECTED"
   | "TOOL_LOOP_COMPLETED"
   | "TOOL_LOOP_LIMIT_REACHED"
-  | "COGNITIVE_STRATEGY_SELECTED";
+  | "COGNITIVE_STRATEGY_SELECTED"
+  | "COGNITIVE_ROUTING_SELECTED";

 export interface TechnicalEvent {
   type: TechnicalEventType;

```

======================================================================
USEFUL DIFF — FRONTEND
======================================================================
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
index e02d3861..f5133272 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css
@@ -1,7 +1,9 @@
+/* P3 Workspace Desktop 46:2 — Project Switcher Rail + main column. */
+
 .shell {
   min-height: 100vh;
-  display: flex;
-  flex-direction: column;
+  display: grid;
+  grid-template-columns: var(--pm6-rail-width) minmax(0, 1fr);
   background: var(--pm6-canvas);
   color: var(--pm6-ink);
   font-family: var(--pm6-font);
@@ -13,132 +15,269 @@
   box-shadow: var(--pm6-focus-ring);
 }

-.header {
+/* ---------- rail ---------- */
+
+.rail {
   position: sticky;
   top: 0;
-  z-index: 40;
-  background: color-mix(in srgb, var(--pm6-canvas-raised) 88%, transparent);
-  backdrop-filter: blur(10px);
-  border-bottom: 1px solid var(--pm6-border-soft);
+  align-self: start;
+  height: 100vh;
+  overflow: hidden;
+  background: var(--pm6-rail);
+  border-right: 1px solid var(--pm6-rail-border);
+  z-index: 30;
 }

-.headerInner {
-  max-width: var(--pm6-content-max);
-  margin: 0 auto;
-  padding: var(--pm6-space-3) var(--pm6-space-5);
+/* Meridian emblem — decorative only (192×390 at y≈250, opacity ≈ 0.10). */
+.meridian {
+  position: absolute;
+  inset-inline: 0;
+  top: 250px;
+  height: 390px;
+  background-image: url("/branding/meridian-emblem-product.png");
+  background-repeat: no-repeat;
+  background-position: center;
+  background-size: cover;
+  opacity: 0.1;
+  pointer-events: none;
+  user-select: none;
+}
+
+.railInner {
+  position: relative;
+  z-index: 1;
+  height: 100%;
   display: flex;
-  align-items: center;
-  gap: var(--pm6-space-5);
+  flex-direction: column;
+  gap: var(--pm6-space-4);
+  padding: var(--pm6-space-3) var(--pm6-space-2) var(--pm6-space-4);
+  overflow-y: auto;
 }

 .brand {
   display: inline-flex;
   align-items: center;
-  gap: var(--pm6-space-3);
+  gap: 10px;
+  padding: var(--pm6-space-1) var(--pm6-space-2);
+  min-height: 30px;
   text-decoration: none;
   color: inherit;
 }

 .brandMark {
-  width: 34px;
-  height: 34px;
-  border-radius: var(--pm6-radius-md);
+  width: 22px;
+  height: 22px;
+  border-radius: 6px;
   background: var(--pm6-forest);
   color: var(--pm6-forest-ink);
   display: grid;
   place-items: center;
+  flex: 0 0 auto;
 }

 .brandGlyph {
   display: block;
 }

-.brandText {
-  display: flex;
-  flex-direction: column;
-  line-height: 1.2;
+.brandGlyphLetter {
+  display: block;
+  font-size: 11px;
+  font-weight: 500;
+  line-height: 1;
+  letter-spacing: 0.4px;
+  color: inherit;
 }

 .brandName {
-  font-size: 0.98rem;
-  font-weight: 600;
-  color: var(--pm6-forest);
+  font-size: 0.8125rem;
+  font-weight: 500;
+  color: var(--pm6-ink);
+  white-space: nowrap;
 }

-.brandTagline {
-  font-size: 0.76rem;
-  color: var(--pm6-muted);
+.nav {
+  display: flex;
+  flex-direction: column;
+  gap: 2px;
 }

-.nav {
+.navItem {
   display: flex;
   align-items: center;
-  gap: var(--pm6-space-2);
-  margin-left: auto;
+  gap: 8px;
+  padding: 7px var(--pm6-space-2);
+  border-radius: 6px;
+  font-size: 0.75rem;
+  font-weight: 500;
+  color: var(--pm6-muted-strong);
+  text-decoration: none;
+  transition: background 120ms ease, color 120ms ease;
 }

-.navPill {
-  display: inline-flex;
-  align-items: center;
-  padding: 7px 15px;
+.navItem:hover {
+  background: color-mix(in srgb, var(--pm6-border-soft) 55%, transparent);
+  color: var(--pm6-ink);
+}
+
+.navItem[data-active="true"] {
+  background: color-mix(in srgb, var(--pm6-border) 45%, transparent);
+  color: var(--pm6-ink);
+}
+
+.navDot {
+  width: 5px;
+  height: 5px;
   border-radius: var(--pm6-radius-pill);
-  border: 1px solid transparent;
-  font-size: 0.86rem;
+  background: var(--pm6-muted-ghost);
+  flex: 0 0 auto;
+}
+
+.navItem[data-active="true"] .navDot,
+.recentsItem[data-active="true"] .navDot {
+  background: var(--pm6-ink);
+}
+
+/* ---------- recents ---------- */
+
+.recents {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  min-height: 0;
+}
+
+.recentsTitle {
+  margin: 0;
+  padding-inline: var(--pm6-space-2);
+  font-size: 0.625rem;
+  font-weight: 500;
+  letter-spacing: 0.06em;
+  text-transform: uppercase;
+  color: var(--pm6-muted-faint);
+}
+
+.recentsList {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 2px;
+}
+
+.recentsItem {
+  display: flex;
+  align-items: flex-start;
+  gap: 8px;
+  padding: 6px var(--pm6-space-2);
+  border-radius: 6px;
+  font-size: 0.75rem;
+  line-height: 1.25;
   color: var(--pm6-muted-strong);
   text-decoration: none;
-  transition: background 120ms ease, color 120ms ease;
 }

-.navPill:hover {
-  background: var(--pm6-surface);
+.recentsItem .navDot {
+  margin-top: 5px;
+}
+
+.recentsItem:hover {
+  background: color-mix(in srgb, var(--pm6-border-soft) 55%, transparent);
   color: var(--pm6-ink);
 }

-.navPill[data-active="true"] {
-  background: var(--pm6-forest);
-  border-color: var(--pm6-forest);
-  color: var(--pm6-forest-ink);
+.recentsItem[data-active="true"] {
+  color: var(--pm6-ink);
+  font-weight: 500;
 }

-.navPill[data-inert="true"] {
-  color: var(--pm6-muted);
-  cursor: default;
+.recentsLabel {
+  min-width: 0;
+  overflow-wrap: anywhere;
 }

-.navPill[data-inert="true"]:hover {
-  background: transparent;
-  color: var(--pm6-muted);
+.recentsEmpty {
+  margin: 0;
+  padding-inline: var(--pm6-space-2);
+  font-size: 0.6875rem;
+  line-height: 1.4;
+  color: var(--pm6-muted-faint);
 }

-.avatar {
-  width: 34px;
-  height: 34px;
+.railFoot {
+  margin-top: auto;
+  padding-top: var(--pm6-space-3);
+}
+
+.profile {
+  display: flex;
+  align-items: center;
+  gap: 8px;
+  padding: 6px var(--pm6-space-2);
+  font-size: 0.75rem;
+  color: var(--pm6-muted-strong);
+}
+
+.profileDot {
+  width: 5px;
+  height: 5px;
   border-radius: var(--pm6-radius-pill);
-  background: var(--pm6-forest-tint);
-  border: 1px solid var(--pm6-border);
-  color: var(--pm6-forest);
-  display: grid;
-  place-items: center;
-  font-size: 0.85rem;
-  font-weight: 600;
-  flex: 0 0 auto;
+  background: var(--pm6-muted-faint);
+}
+
+/* ---------- main column ---------- */
+
+.column {
+  min-width: 0;
+  display: flex;
+  flex-direction: column;
 }

 .main {
   flex: 1;
+  min-width: 0;
   width: 100%;
+}
+
+/* Non-workspace pages (Projets, Nouveau projet): centered content column. */
+.mainPage {
   max-width: var(--pm6-content-max);
   margin: 0 auto;
-  padding: var(--pm6-space-6) var(--pm6-space-4) var(--pm6-space-7);
+  padding: var(--pm6-space-6) var(--pm6-space-5) var(--pm6-space-7);
 }

-.mainWide {
-  max-width: var(--pm6-content-max-workspace);
-  padding-inline: var(--pm6-space-4);
+/* Workspace: full-bleed — the page owns its global/project headers. */
+.mainWorkspace {
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+}
+
+/* ---------- mobile topbar (hidden ≥768) ---------- */
+
+.mobileBar {
+  display: none;
+}
+
+.mobileNavLink {
+  margin-left: auto;
+  font-size: 0.8125rem;
+  color: var(--pm6-muted-strong);
+  text-decoration: none;
 }

-.headerInnerWide {
-  max-width: var(--pm6-content-max-workspace);
+.mobileProfile {
+  width: 28px;
+  height: 28px;
+  border-radius: var(--pm6-radius-pill);
+  background: var(--pm6-forest-tint);
+  border: 1px solid var(--pm6-border);
+  color: var(--pm6-ink);
+  display: grid;
+  place-items: center;
+  font-size: 0.75rem;
+  font-weight: 600;
+  flex: 0 0 auto;
 }

 .srOnly {
@@ -153,17 +292,30 @@
   border: 0;
 }

+/* <768 — rail collapses into a compact topbar (190:306). */
 @media (max-width: 767px) {
-  .headerInner {
-    padding: var(--pm6-space-3) var(--pm6-space-4);
-    gap: var(--pm6-space-3);
+  .shell {
+    grid-template-columns: minmax(0, 1fr);
   }

-  .brandTagline {
+  .rail {
     display: none;
   }

-  .main {
+  .mobileBar {
+    position: sticky;
+    top: 0;
+    z-index: 40;
+    display: flex;
+    align-items: center;
+    gap: var(--pm6-space-3);
+    height: var(--pm6-global-header-h);
+    padding-inline: var(--pm6-space-4);
+    background: var(--pm6-rail);
+    border-bottom: 1px solid var(--pm6-rail-border);
+  }
+
+  .mainPage {
     padding: var(--pm6-space-5) var(--pm6-space-4) var(--pm6-space-6);
   }
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
index ac52f4d1..1d83c50d 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx
@@ -1,107 +1,120 @@
 import type { ReactNode } from "react";
 import Link from "next/link";
 import "./product-tokens.css";
+import { ProductRailRecents } from "./ProductRailRecents";
 import styles from "./ProductShell.module.css";

 export type ProductNav = "projects" | "current" | "new";

 export type ProductShellProps = {
   activeNav: ProductNav;
-  /** Href for the "Projet courant" pill; omitted when no project is open. */
+  /**
+   * Href of the open project (workspace route). Used only to highlight the
+   * matching entry in « Projets récents »; omitted when no project is open.
+   */
   currentProjectHref?: string;
   children: ReactNode;
 };

+function BrandMark() {
+  // P3 Figma 46:5 — ink square + “S” mark (not a decorative network glyph).
+  return (
+    <span className={styles.brandMark} aria-hidden>
+      <span className={styles.brandGlyphLetter}>S</span>
+    </span>
+  );
+}
+
 /**
- * Self-contained Pre-M6 product shell (brand header + canvas).
- * `studio-shell` is kept as the stable E2E anchor for the shell root.
+ * Pre-M6 product shell — P3 Figma rail layout (Workspace Desktop 46:2).
+ *
+ * Left Project Switcher Rail (192px; 160px <1200; hidden <768 → compact
+ * topbar, 190:306) + main area for children. `studio-shell` is kept as the
+ * stable E2E anchor for the shell root.
+ *
+ * Honesty rules: « Projets récents » only lists real projects (client read of
+ * the existing list action); the profile entry is labelled « Pilote » — no
+ * personal persona is hardcoded. The Meridian emblem is decorative only.
  */
 export function ProductShell({
   activeNav,
   currentProjectHref,
   children,
 }: ProductShellProps) {
-  const currentHref = currentProjectHref ?? null;
-
   return (
-    <div className={styles.shell} data-testid="studio-shell">
-      <header className={styles.header}>
-        <div className={[
-          styles.headerInner,
-          activeNav === "current" ? styles.headerInnerWide : "",
-        ].filter(Boolean).join(" ")}>
+    <div
+      className={styles.shell}
+      data-testid="studio-shell"
+      data-nav={activeNav}
+    >
+      <aside
+        className={styles.rail}
+        data-testid="studio-rail"
+        aria-label="Sélecteur de projet"
+      >
+        <div
+          className={styles.meridian}
+          data-testid="studio-rail-meridian"
+          aria-hidden
+        />
+
+        <div className={styles.railInner}>
           <Link href="/studio" className={styles.brand}>
-            <span className={styles.brandMark} aria-hidden>
-              <svg
-                className={styles.brandGlyph}
-                viewBox="0 0 24 24"
-                width="18"
-                height="18"
-                fill="none"
-              >
-                <circle cx="6" cy="12" r="2.2" fill="currentColor" />
-                <circle cx="12" cy="6.5" r="2.2" fill="currentColor" />
-                <circle cx="18" cy="12" r="2.2" fill="currentColor" />
-                <path
-                  d="M7.7 11.2 L10.4 7.8 M13.6 7.8 L16.3 11.2"
-                  stroke="currentColor"
-                  strokeWidth="1.4"
-                  strokeLinecap="round"
-                />
-              </svg>
-            </span>
-            <span className={styles.brandText}>
-              <span className={styles.brandName}>SFIA Studio</span>
-              <span className={styles.brandTagline}>Pilotage assisté</span>
-            </span>
+            <BrandMark />
+            <span className={styles.brandName}>SFIA Studio</span>
           </Link>

           <nav className={styles.nav} aria-label="Navigation principale">
             <Link
               href="/studio"
-              className={styles.navPill}
+              className={styles.navItem}
               data-active={activeNav === "projects"}
               aria-current={activeNav === "projects" ? "page" : undefined}
             >
+              <span className={styles.navDot} aria-hidden />
               Projets
             </Link>
-            {currentHref ? (
-              <Link
-                href={currentHref}
-                className={styles.navPill}
-                data-active={activeNav === "current"}
-                aria-current={activeNav === "current" ? "page" : undefined}
-              >
-                Projet courant
-              </Link>
-            ) : (
-              <span
-                className={styles.navPill}
-                data-active={activeNav === "current"}
-                data-inert="true"
-              >
-                Projet courant
-              </span>
-            )}
           </nav>

-          <span className={styles.avatar} title="Pilote">
+          <ProductRailRecents currentProjectHref={currentProjectHref} />
+
+          <div className={styles.railFoot}>
+            <span className={styles.profile} data-testid="studio-rail-profile">
+              <span className={styles.profileDot} aria-hidden />
+              Pilote
+            </span>
+          </div>
+        </div>
+      </aside>
+
+      <div className={styles.column}>
+        <header className={styles.mobileBar} data-testid="studio-mobile-bar">
+          <Link href="/studio" className={styles.brand}>
+            <BrandMark />
+            <span className={styles.brandName}>SFIA Studio</span>
+          </Link>
+          <Link
+            href="/studio"
+            className={styles.mobileNavLink}
+            aria-current={activeNav === "projects" ? "page" : undefined}
+          >
+            Projets
+          </Link>
+          <span className={styles.mobileProfile} title="Pilote">
             <span aria-hidden>P</span>
             <span className={styles.srOnly}>Pilote</span>
           </span>
-        </div>
-      </header>
+        </header>

-      <main
-        className={[
-          styles.main,
-          activeNav === "current" ? styles.mainWide : "",
-        ]
-          .filter(Boolean)
-          .join(" ")}
-      >
-        {children}
-      </main>
+        <main
+          className={[
+            styles.main,
+            activeNav === "current" ? styles.mainWorkspace : styles.mainPage,
+          ].join(" ")}
+        >
+          {children}
+        </main>
+      </div>
     </div>
   );
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
index afc426f2..98b89e32 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
@@ -1,197 +1,492 @@
+/*
+ * P3 Workspace Desktop 46:2 (1440×1024) — main column of the product shell.
+ *
+ *   global header ........ 54px   (breadcrumb + currentness)
+ *   project header ....... ~104px (title/objective/chips + tabs)
+ *   body ................. conversation (dominant) | context 356px (280px <1200)
+ *   focus bar ............ 50px   (top of the conversation column)
+ *
+ * <900: single column; context becomes a sheet opened by .lpsToggle.
+ * Colours come from --pm6-* (product-tokens.css). No second token set.
+ */
+
 .root {
+  --ws-global-h: var(--pm6-global-header-h, 54px);
+  --ws-project-h: 104px;
+  --ws-focus-h: var(--pm6-focus-bar-h, 50px);
+  --ws-context-w: var(--pm6-context-width, 356px);
+  --ws-pad-x: 24px;
+
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-4);
-  max-width: var(--pm6-content-max-workspace);
-  margin-inline: auto;
   width: 100%;
+  min-width: 0;
+  min-height: 100vh;
+  background: var(--pm6-canvas);
+  color: var(--pm6-ink);
+  font-family: var(--pm6-font);
 }

 .loading {
   margin: 0;
-  padding: var(--pm6-space-7) 0;
+  padding: var(--pm6-space-7) var(--ws-pad-x, 24px);
   font-size: 0.95rem;
   color: var(--pm6-muted);
 }

-/* ---------- project header ---------- */
+/* ---------- global header (54px) ---------- */
+
+.globalHeader {
+  position: sticky;
+  top: 0;
+  z-index: 25;
+  box-sizing: border-box;
+  height: var(--ws-global-h);
+  flex: 0 0 auto;
+  display: flex;
+  align-items: center;
+  justify-content: space-between;
+  gap: var(--pm6-space-4);
+  padding-inline: var(--ws-pad-x);
+  background: var(--pm6-canvas);
+  border-bottom: 1px solid var(--pm6-border);
+}
+
+.breadcrumb {
+  display: flex;
+  align-items: center;
+  gap: var(--pm6-space-2);
+  min-width: 0;
+  font-size: 0.8125rem;
+  line-height: 1.2;
+}
+
+.breadcrumbLink {
+  color: var(--pm6-muted-strong);
+  text-decoration: none;
+  white-space: nowrap;
+}
+
+.breadcrumbLink:hover {
+  color: var(--pm6-ink);
+  text-decoration: underline;
+}
+
+.breadcrumbSep {
+  color: var(--pm6-muted-ghost);
+}
+
+.breadcrumbCurrent {
+  min-width: 0;
+  overflow: hidden;
+  text-overflow: ellipsis;
+  white-space: nowrap;
+  font-weight: 500;
+  color: var(--pm6-ink);
+}
+
+.currentness {
+  flex: 0 0 auto;
+  display: inline-flex;
+  align-items: center;
+  gap: 6px;
+  padding: 4px 10px;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface);
+  font-size: 0.6875rem;
+  font-weight: 600;
+  letter-spacing: 0.02em;
+  color: var(--pm6-muted-strong);
+  white-space: nowrap;
+}
+
+.currentness::before {
+  content: "";
+  width: 6px;
+  height: 6px;
+  border-radius: var(--pm6-radius-pill);
+  background: var(--pm6-muted-ghost);
+}
+
+.currentness[data-tone="ok"] {
+  color: var(--pm6-ok);
+  border-color: color-mix(in srgb, var(--pm6-ok) 25%, transparent);
+  background: var(--pm6-ok-tint);
+}
+
+.currentness[data-tone="ok"]::before {
+  background: var(--pm6-ok);
+}
+
+.currentness[data-tone="warn"] {
+  color: var(--pm6-warn);
+  border-color: var(--pm6-cream-border);
+  background: var(--pm6-warn-tint);
+}
+
+.currentness[data-tone="warn"]::before {
+  background: var(--pm6-warn);
+}
+
+/* ---------- project header (~104px, with tabs) ---------- */

 .projectHeader {
+  box-sizing: border-box;
+  flex: 0 0 auto;
+  min-height: var(--ws-project-h);
+  display: flex;
+  flex-direction: column;
+  justify-content: space-between;
+  gap: var(--pm6-space-3);
+  padding: var(--pm6-space-4) var(--ws-pad-x) 0;
+  background: var(--pm6-canvas);
+  border-bottom: 1px solid var(--pm6-border);
+}
+
+.projectHeaderRow {
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
   justify-content: space-between;
-  gap: var(--pm6-space-4);
+  gap: var(--pm6-space-3) var(--pm6-space-4);
+  min-width: 0;
 }

 .projectHeaderText {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-2);
+  gap: 2px;
   min-width: 0;
+  flex: 1 1 320px;
 }

 .projectTitle {
   margin: 0;
-  font-size: 1.7rem;
+  font-size: 1.25rem;
   font-weight: 600;
+  line-height: 1.25;
   letter-spacing: -0.01em;
-  color: var(--pm6-forest);
+  color: var(--pm6-ink);
   overflow-wrap: anywhere;
 }

 .projectObjective {
   margin: 0;
-  font-size: 0.92rem;
-  line-height: 1.6;
+  max-width: 72ch;
+  font-size: 0.8125rem;
+  line-height: 1.45;
   color: var(--pm6-muted-strong);
-  max-width: 68ch;
+  display: -webkit-box;
+  -webkit-line-clamp: 2;
+  -webkit-box-orient: vertical;
+  overflow: hidden;
 }

+.projectChips {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: var(--pm6-space-2);
+}
+
+.chipAccent,
+.chipMuted {
+  display: inline-flex;
+  align-items: center;
+  padding: 3px 10px;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid transparent;
+  font-size: 0.6875rem;
+  font-weight: 600;
+  letter-spacing: 0.02em;
+  white-space: nowrap;
+}
+
+.chipAccent {
+  background: var(--pm6-accent-tint);
+  border-color: color-mix(in srgb, var(--pm6-accent) 28%, transparent);
+  color: var(--pm6-accent);
+}
+
+.chipMuted {
+  background: var(--pm6-surface-sunken);
+  border-color: var(--pm6-border);
+  color: var(--pm6-muted-strong);
+}
+
+/* Context sheet opener — only on single-column layouts (<900). */
 .lpsToggle {
   display: none;
   align-items: center;
+  justify-content: center;
   border-radius: var(--pm6-radius-pill);
   border: 1px solid var(--pm6-border-strong);
   background: var(--pm6-surface);
   color: var(--pm6-ink-soft);
-  padding: 9px 16px;
-  font-size: 0.85rem;
+  padding: 6px 14px;
+  font: inherit;
+  font-size: 0.75rem;
   font-weight: 600;
   cursor: pointer;
+  transition: background 120ms ease, border-color 120ms ease;
 }

-.durabilityHint {
-  margin: 0;
-  border-radius: var(--pm6-radius-md);
-  border: 1px solid var(--pm6-border-soft);
-  background: var(--pm6-canvas-raised);
-  padding: var(--pm6-space-3) var(--pm6-space-4);
-  font-size: 0.83rem;
-  line-height: 1.55;
-  color: var(--pm6-muted-strong);
+.lpsToggle:hover {
+  background: var(--pm6-surface-sunken);
+  border-color: var(--pm6-ink-soft);
 }

-/* ---------- layout — Option A: Journal | Conversation | Pilotage ---------- */
+/* ---------- tabs ---------- */

-.layout {
-  display: grid;
-  grid-template-columns: minmax(0, 1fr) var(--pm6-lps-width);
+.tabs {
+  display: flex;
+  align-items: flex-end;
   gap: var(--pm6-space-5);
-  align-items: start;
+  overflow-x: auto;
+  scrollbar-width: none;
 }

-.journalColumn {
+.tabs::-webkit-scrollbar {
   display: none;
+}
+
+.tab {
+  position: relative;
+  margin: 0;
+  padding: 8px 0 10px;
+  border: 0;
+  background: transparent;
+  font: inherit;
+  font-size: 0.8125rem;
+  font-weight: 500;
+  color: var(--pm6-muted-strong);
+  cursor: pointer;
+  white-space: nowrap;
+  transition: color 120ms ease;
+}
+
+.tab::after {
+  content: "";
+  position: absolute;
+  inset-inline: 0;
+  bottom: -1px;
+  height: 2px;
+  border-radius: 2px 2px 0 0;
+  background: transparent;
+  transition: background 120ms ease;
+}
+
+.tab:hover:not(:disabled) {
+  color: var(--pm6-ink);
+}
+
+.tab[data-selected="true"] {
+  color: var(--pm6-ink);
+  font-weight: 600;
+}
+
+.tab[data-selected="true"]::after {
+  background: var(--pm6-ink);
+}
+
+.tab:disabled,
+.tab[aria-disabled="true"] {
+  color: var(--pm6-muted-ghost);
+  cursor: not-allowed;
+}
+
+.tab:focus-visible,
+.lpsToggle:focus-visible,
+.lpsClose:focus-visible,
+.errorCta:focus-visible,
+.breadcrumbLink:focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
+  border-radius: var(--pm6-radius-sm);
+}
+
+/* ---------- body layout: conversation | context ---------- */
+
+.layout {
+  flex: 1 1 auto;
   min-width: 0;
+  display: grid;
+  grid-template-columns: minmax(0, 1fr);
+  align-items: start;
+  background: var(--pm6-body);
 }

 .main {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-5);
   min-width: 0;
+  min-height: 0;
 }

-.conversation {
+/* Focus bar — 50px, top of the conversation column. */
+.focusBar {
+  position: sticky;
+  top: var(--ws-global-h);
+  z-index: 15;
+  box-sizing: border-box;
+  height: var(--ws-focus-h);
+  flex: 0 0 auto;
+  display: flex;
+  align-items: center;
+  gap: var(--pm6-space-3);
+  padding-inline: var(--ws-pad-x);
+  background: var(--pm6-focus-bar);
+  border-bottom: 1px solid var(--pm6-border);
   min-width: 0;
 }

-.lpsColumn {
-  position: sticky;
-  top: 88px;
+.focusLabel {
+  flex: 0 0 auto;
+  display: inline-flex;
+  align-items: center;
+  gap: 6px;
+  font-size: 0.625rem;
+  font-weight: 600;
+  letter-spacing: 0.06em;
+  text-transform: uppercase;
+  color: var(--pm6-muted-faint);
+  white-space: nowrap;
+}
+
+.focusDot {
+  width: 6px;
+  height: 6px;
+  border-radius: var(--pm6-radius-pill);
+  background: var(--pm6-accent);
+}
+
+.focusTitle {
+  flex: 1 1 auto;
   min-width: 0;
+  overflow: hidden;
+  text-overflow: ellipsis;
+  white-space: nowrap;
+  font-size: 0.8125rem;
+  font-weight: 600;
+  color: var(--pm6-ink);
 }

-/* Desktop large: three zones — Journal rail + dominant conversation + pilotage */
-@media (min-width: 1200px) {
-  .layout {
-    grid-template-columns:
-      var(--pm6-journal-width)
-      minmax(620px, 1fr)
-      var(--pm6-lps-width);
-    gap: var(--pm6-space-4);
-  }
+.focusCounts {
+  flex: 0 0 auto;
+  display: inline-flex;
+  align-items: center;
+  gap: var(--pm6-space-2);
+}

-  .journalColumn {
-    display: block;
-    position: sticky;
-    top: 88px;
-  }
+.focusCount {
+  display: inline-flex;
+  align-items: center;
+  padding: 2px 9px;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-cream-border);
+  background: var(--pm6-cream);
+  font-size: 0.6875rem;
+  font-weight: 600;
+  color: var(--pm6-gold-strong);
+  white-space: nowrap;
 }

-/* ~1440: journal 270–290 · conversation ≥620 · rail 510–550 */
-@media (min-width: 1400px) {
-  .layout {
-    grid-template-columns:
-      clamp(270px, 18vw, 290px)
-      minmax(620px, 1fr)
-      clamp(510px, 32vw, 550px);
-  }
+.durabilityHint {
+  margin: var(--pm6-space-4) var(--ws-pad-x) 0;
+  padding: var(--pm6-space-3) var(--pm6-space-4);
+  border-radius: var(--pm6-radius-md);
+  border: 1px solid var(--pm6-border-soft);
+  background: var(--pm6-canvas-raised);
+  font-size: 0.8125rem;
+  line-height: 1.55;
+  color: var(--pm6-muted-strong);
 }

-/* ~1600: journal 270–290 · conversation ≥650 · rail 550–600 */
-@media (min-width: 1600px) {
-  .layout {
-    grid-template-columns:
-      clamp(270px, 18vw, 290px)
-      minmax(650px, 1fr)
-      clamp(550px, 34vw, 600px);
-  }
+.conversation {
+  flex: 1 1 auto;
+  min-width: 0;
+  box-sizing: border-box;
+  width: 100%;
+  max-width: 880px;
+  margin-inline: auto;
+  padding: var(--pm6-space-5) var(--ws-pad-x) 0;
 }

-/* Above 1024px the project state is always alongside the conversation. */
-.lpsClosed,
-.lpsOpen {
-  display: block;
+/* ---------- context column (sticky, independent scroll) ---------- */
+
+.lpsColumn {
+  min-width: 0;
+  box-sizing: border-box;
+  display: flex;
+  flex-direction: column;
+  background: var(--pm6-canvas-raised);
+  border-left: 1px solid var(--pm6-border);
 }

 .lpsSheet {
+  flex: 1 1 auto;
+  min-height: 0;
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-3);
-  max-height: calc(100vh - 120px);
+  gap: var(--pm6-space-4);
+  padding: var(--pm6-space-5) var(--pm6-space-4) var(--pm6-space-4);
   overflow-y: auto;
+  overscroll-behavior: contain;
+}
+
+/* Close button only exists for the <900 sheet. */
+.lpsClose {
+  display: none;
+  align-self: flex-end;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-border-strong);
+  background: var(--pm6-surface);
+  color: var(--pm6-ink-soft);
+  padding: 6px 14px;
+  font: inherit;
+  font-size: 0.75rem;
+  font-weight: 600;
+  cursor: pointer;
 }

-/* H-01 Option A — unified piloting region (LPS + Trajectory presentation) */
+/* Pilotage region (lifecycle · LPS · routing · trajectory) — flat, not a card. */
 .stateTrajectoryRegion {
   display: flex;
   flex-direction: column;
   gap: var(--pm6-space-4);
   min-width: 0;
-  padding: var(--pm6-space-3);
-  background: var(--pm6-canvas-raised);
-  border: 1px solid var(--pm6-border);
-  border-radius: var(--pm6-radius-lg);
+  padding: var(--pm6-space-4) 0 0;
+  border-top: 1px solid var(--pm6-border-soft);
 }

 .stateTrajectoryHead {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-1);
+  gap: 4px;
   padding: 0;
 }

 .stateTrajectoryEyebrow {
   margin: 0;
-  font-size: 0.7rem;
-  font-weight: 700;
-  letter-spacing: 0.1em;
+  font-size: 0.625rem;
+  font-weight: 500;
+  letter-spacing: 0.06em;
   text-transform: uppercase;
-  color: var(--pm6-forest);
+  color: var(--pm6-muted-faint);
 }

 .stateTrajectoryTitle {
   margin: 0;
-  font-size: 1.05rem;
+  font-size: 0.9375rem;
   font-weight: 600;
+  line-height: 1.25;
   color: var(--pm6-ink);
 }

 .stateTrajectoryNote {
   margin: 0;
-  font-size: 0.8rem;
+  font-size: 0.75rem;
   line-height: 1.5;
   color: var(--pm6-muted-strong);
 }
@@ -203,61 +498,144 @@
   min-width: 0;
 }

-.lpsClose {
-  display: none;
-  align-self: flex-end;
-  border-radius: var(--pm6-radius-pill);
-  border: 1px solid var(--pm6-border-strong);
-  background: var(--pm6-surface);
-  color: var(--pm6-ink-soft);
-  padding: 7px 15px;
-  font-size: 0.82rem;
-  font-weight: 600;
-  cursor: pointer;
+/*
+ * Journal now lives in the context column (inside the sheet): stays visible and
+ * stacks with the rest. Kept as a class for the project-journal-column testid.
+ */
+.journalColumn {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-3);
+  min-width: 0;
+  padding-top: var(--pm6-space-4);
+  border-top: 1px solid var(--pm6-border-soft);
 }

-/* ---------- <1200: Journal always accessible (stack); conversation dominant ---------- */
-/* CR-CJ-05 — no dead zone between 1025–1199 (was hidden until 1200). */
+/* ---------- ≥900: two columns, context sticky + own scroll ---------- */

-@media (max-width: 1199px) {
+@media (min-width: 900px) {
   .layout {
-    grid-template-columns: minmax(0, 1fr);
+    grid-template-columns: minmax(0, 1fr) var(--ws-context-w);
+  }
+
+  .lpsColumn {
+    position: sticky;
+    top: var(--ws-global-h);
+    align-self: start;
+    height: calc(100vh - var(--ws-global-h));
+    max-height: calc(100vh - var(--ws-global-h));
+  }
+
+  /* Always visible alongside the conversation. */
+  .lpsClosed,
+  .lpsOpen {
+    display: flex;
+  }
+}
+
+/* ---------- <1200: compact geometry (context 280px) ---------- */
+
+@media (max-width: 1199px) {
+  .root {
+    --ws-context-w: 280px;
+    --ws-pad-x: 20px;
+  }
+
+  .lpsSheet {
+    padding: var(--pm6-space-4) var(--pm6-space-3);
   }

+  /* Journal stays accessible in the context stack (no 900–1199 dead zone). */
   .journalColumn {
     display: block;
-    position: static;
-    order: -1;
+  }
+}
+
+/* ---------- ≥1200: full geometry (context 356px, roomy gutters) ---------- */
+
+@media (min-width: 1200px) {
+  .root {
+    --ws-context-w: 356px;
+    --ws-pad-x: 32px;
+  }
+
+  .lpsSheet {
+    padding: var(--pm6-space-5) var(--pm6-space-5) var(--pm6-space-4);
+  }
+}
+
+/* ---------- <900: single column; context as sheet ---------- */
+
+@media (max-width: 899px) {
+  .root {
+    --ws-pad-x: 16px;
   }

   .lpsToggle {
+    display: inline-flex;
+  }
+
+  .layout {
+    grid-template-columns: minmax(0, 1fr);
+  }
+
+  .lpsClosed {
     display: none;
   }

-  .lpsClose {
+  .lpsOpen {
+    position: fixed;
+    inset: auto 0 0 0;
+    z-index: 60;
+    max-height: min(85vh, 760px);
+    border-left: 0;
+    border-top: 1px solid var(--pm6-border-strong);
+    border-radius: var(--pm6-radius-lg) var(--pm6-radius-lg) 0 0;
+    background: var(--pm6-canvas-raised);
+    box-shadow: 0 -12px 40px rgba(31, 26, 22, 0.18),
+      0 0 0 100vmax rgba(31, 26, 22, 0.32);
+    animation: lpsSheetIn 180ms ease-out;
+  }
+
+  .lpsOpen .lpsClose {
+    display: inline-flex;
+  }
+
+  .lpsOpen .lpsSheet {
+    padding: var(--pm6-space-4);
+  }
+
+  .conversation {
+    padding-top: var(--pm6-space-4);
+  }
+
+  .projectTitle {
+    font-size: 1.125rem;
+  }
+
+  .focusLabel {
     display: none;
   }
+}

-  .lpsColumn {
-    position: static;
-    top: auto;
-    width: auto;
-    z-index: auto;
-    background: transparent;
-    border-left: none;
-    box-shadow: none;
-    padding: 0;
-    overflow: visible;
+@keyframes lpsSheetIn {
+  from {
+    transform: translateY(16px);
+    opacity: 0;
+  }
+  to {
+    transform: translateY(0);
+    opacity: 1;
   }
+}

-  .lpsClosed,
-  .lpsOpen {
-    display: block;
+@media (max-width: 767px) {
+  .lpsToggle {
+    width: 100%;
   }

-  .lpsSheet {
-    max-height: none;
-    overflow: visible;
+  .projectChips {
+    width: 100%;
   }
 }

@@ -269,6 +647,7 @@
   align-items: flex-start;
   gap: var(--pm6-space-3);
   max-width: 620px;
+  margin: var(--pm6-space-6) var(--ws-pad-x, 24px);
   border-radius: var(--pm6-radius-lg);
   border: 1px solid var(--pm6-border);
   background: var(--pm6-surface);
@@ -280,7 +659,7 @@
   margin: 0;
   font-size: 1.35rem;
   font-weight: 600;
-  color: var(--pm6-forest);
+  color: var(--pm6-ink);
 }

 .errorBody {
@@ -300,8 +679,8 @@
   display: inline-flex;
   align-items: center;
   border-radius: var(--pm6-radius-pill);
-  border: 1px solid var(--pm6-forest);
-  background: var(--pm6-forest);
+  border: 1px solid var(--pm6-ink);
+  background: var(--pm6-ink);
   color: var(--pm6-forest-ink);
   padding: 10px 18px;
   font-size: 0.88rem;
@@ -309,13 +688,18 @@
   text-decoration: none;
 }

-@media (max-width: 767px) {
-  .projectTitle {
-    font-size: 1.4rem;
-  }
+.errorCta:hover {
+  background: var(--pm6-forest-hover);
+}

-  .lpsToggle {
-    width: 100%;
-    justify-content: center;
+/* ---------- motion ---------- */
+
+@media (prefers-reduced-motion: reduce) {
+  .root,
+  .root * {
+    scroll-behavior: auto !important;
+    transition-duration: 0.01ms !important;
+    animation-duration: 0.01ms !important;
+    animation-iteration-count: 1 !important;
   }
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 360ca32a..66af4db1 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -18,6 +18,17 @@ import { LpsSurface } from "./surfaces/LpsSurface";
 import { RecoverySurface } from "./surfaces/RecoverySurface";
 import { LifecycleSurface } from "./surfaces/LifecycleSurface";
 import { TrajectorySurface } from "./surfaces/TrajectorySurface";
+import { lpsNextAction } from "./surfaces/LpsSurface";
+import {
+  ProjectContextShortcuts,
+  ProjectContextSummary,
+} from "./surfaces/ProjectContextSummary";
+import {
+  deriveAttentionItems,
+  deriveCycleSummary,
+  deriveTrajectoryNodes,
+  presentCurrentness,
+} from "./workspaceContextPresentation";
 import {
   projectAssistantActiveCycleWorkspaceAction,
   projectAssistantConfirmReservationResolutionAction,
@@ -28,6 +39,18 @@ import { ProjectWorkspaceRoutingPanelLazy } from "./surfaces/ProjectWorkspaceRou
 import type { GetProjectResult, GetProjectSuccess } from "./types";
 import styles from "./ProjectWorkspacePage.module.css";

+/** prefers-reduced-motion: no smooth scrolling for in-page jumps. */
+function scrollBehaviorPref(): ScrollBehavior {
+  if (
+    typeof window !== "undefined" &&
+    typeof window.matchMedia === "function" &&
+    window.matchMedia("(prefers-reduced-motion: reduce)").matches
+  ) {
+    return "auto";
+  }
+  return "smooth";
+}
+
 /**
  * CYCLE-RESERVATION-PILOTING-01 — explicit Pilot draft about one Reservation.
  * Prefill only: the Pilot reads, edits and sends. NEVER auto-sent.
@@ -118,7 +141,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {

   const focusConversation = useCallback(() => {
     conversationRef.current?.scrollIntoView({
-      behavior: "smooth",
+      behavior: scrollBehaviorPref(),
       block: "start",
     });
     const input = conversationRef.current?.querySelector(
@@ -158,7 +181,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     setJournalCollapsed(false);
     const rail = document.querySelector("[data-testid='cycle-journal-rail']");
     if (rail instanceof HTMLElement) {
-      rail.scrollIntoView({ behavior: "smooth", block: "start" });
+      rail.scrollIntoView({ behavior: scrollBehaviorPref(), block: "start" });
     }
   }, []);

@@ -273,11 +296,50 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
         `[data-testid='cycle-journal-entry-${journalEntryId}']`,
       );
       if (el instanceof HTMLElement) {
-        el.scrollIntoView({ behavior: "smooth", block: "nearest" });
+        el.scrollIntoView({ behavior: scrollBehaviorPref(), block: "nearest" });
       }
     }, 0);
   };

+  const scrollToTestId = useCallback((testId: string) => {
+    const el = document.querySelector(`[data-testid='${testId}']`);
+    if (el instanceof HTMLElement) {
+      el.scrollIntoView({ behavior: scrollBehaviorPref(), block: "start" });
+      return true;
+    }
+    return false;
+  }, []);
+
+  /** Shortcut « Journal du cycle » — opens the existing Journal rail. */
+  const openJournal = useCallback(() => {
+    setLpsOpen(true);
+    setJournalCollapsed(false);
+    window.setTimeout(() => scrollToTestId("cycle-journal-rail"), 0);
+  }, [scrollToTestId]);
+
+  /** Shortcut « Historique » — the existing durable history surface. */
+  const openHistory = useCallback(() => {
+    setLpsOpen(true);
+    window.setTimeout(() => scrollToTestId("project-history-panel"), 0);
+  }, [scrollToTestId]);
+
+  /** Tab « Aperçu » — brings the project context panel into view. */
+  const openOverview = useCallback(() => {
+    setLpsOpen(true);
+    window.setTimeout(() => scrollToTestId("project-lps-column"), 0);
+  }, [scrollToTestId]);
+
+  /** Tab « Exécution » — jumps to the governed execution cards already in the conversation. */
+  const openExecution = useCallback(() => {
+    for (const id of [
+      "project-assistant-f3-contract",
+      "project-assistant-f3-prepare",
+      "project-assistant-panel",
+    ]) {
+      if (scrollToTestId(id)) return;
+    }
+  }, [scrollToTestId]);
+
   if (!result) {
     return (
       <p className={styles.loading} data-testid="project-workspace-loading">
@@ -320,95 +382,191 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     proposalSubjectOwnership === "UNKNOWN" ||
     proposalSubjectOwnership === "OWNED";

+  const lifecycle = lifecycleProjection;
+  const decisionPending =
+    controller.activeProposal?.status === "DECISION_REQUIRED";
+  const currentness = presentCurrentness({
+    transcriptAvailability: controller.transcriptAvailability,
+    stateVersion: success.livingState.version,
+  });
+  const cycleSummary = deriveCycleSummary(lifecycle);
+  const attention = deriveAttentionItems({ decisionPending, lifecycle });
+  const trajectoryNodes = deriveTrajectoryNodes(lifecycle);
+  const focusTopic =
+    controller.journalEntries.find((e) => e.isCurrentTopic)?.title ?? null;
+  const nextAction = lpsNextAction(success.readiness.status);
+  const decisionCount = attention.some((a) => a.key === "decision") ? 1 : 0;
+  const reserveCount = lifecycle?.reservationSummary?.activeCount ?? 0;
+  const executionAvailable = Boolean(
+    controller.f3Prepare ||
+      controller.f3M3Resolved ||
+      controller.f3Execute ||
+      controller.durableEvidenceOutcome,
+  );
+
   return (
     <div className={styles.root} data-testid="project-principal">
-      <header className={styles.projectHeader}>
-        <div className={styles.projectHeaderText}>
-          <h1 className={styles.projectTitle}>{success.project.name}</h1>
-          <p className={styles.projectObjective}>{success.project.objective}</p>
-        </div>
-        <button
-          type="button"
-          className={styles.lpsToggle}
-          data-testid="lps-drawer-toggle"
-          aria-expanded={lpsOpen}
-          onClick={() => setLpsOpen((open) => !open)}
+      <div
+        className={styles.globalHeader}
+        data-testid="project-global-header"
+      >
+        <nav className={styles.breadcrumb} aria-label="Fil d’Ariane">
+          <Link href="/studio" className={styles.breadcrumbLink}>
+            Projets
+          </Link>
+          <span className={styles.breadcrumbSep} aria-hidden>
+            /
+          </span>
+          <span className={styles.breadcrumbCurrent} aria-current="page">
+            {success.project.name}
+          </span>
+        </nav>
+        <span
+          className={styles.currentness}
+          data-tone={currentness.tone}
+          data-testid="project-currentness-chip"
+          title={currentness.detail}
         >
-          {lpsOpen
-            ? "Masquer l'état et la trajectoire"
-            : "État du projet / Trajectoire"}
-        </button>
-      </header>
+          {currentness.label}
+        </span>
+      </div>

-      {continuity.kind === "restored_hint" ? (
-        <p
-          className={styles.durabilityHint}
-          data-testid="project-auto-resume-hint"
+      <header className={styles.projectHeader} data-testid="project-header">
+        <div className={styles.projectHeaderRow}>
+          <div className={styles.projectHeaderText}>
+            <h1 className={styles.projectTitle}>{success.project.name}</h1>
+            <p className={styles.projectObjective}>
+              {success.project.objective}
+            </p>
+          </div>
+          <div className={styles.projectChips}>
+            {lifecycle?.selectedCycleInstanceId ? (
+              <>
+                <span className={styles.chipAccent}>{cycleSummary.label}</span>
+                {cycleSummary.statusLabel ? (
+                  <span className={styles.chipMuted}>
+                    {cycleSummary.statusLabel}
+                  </span>
+                ) : null}
+              </>
+            ) : null}
+            <button
+              type="button"
+              className={styles.lpsToggle}
+              data-testid="lps-drawer-toggle"
+              aria-expanded={lpsOpen}
+              onClick={() => setLpsOpen((open) => !open)}
+            >
+              {lpsOpen
+                ? "Masquer l'état et la trajectoire"
+                : "État du projet / Trajectoire"}
+            </button>
+          </div>
+        </div>
+        <nav
+          className={styles.tabs}
+          aria-label="Vues du projet"
+          data-testid="project-tabs"
         >
-          {continuity.message}
-        </p>
-      ) : null}
-      {continuity.kind === "transcript_unavailable" ? (
-        <RecoverySurface
-          message={continuity.message}
-          onRetryTranscript={() => {
-            void controller.refreshConversationContinuity();
-          }}
-        />
-      ) : null}
+          <button
+            type="button"
+            className={styles.tab}
+            data-selected="true"
+            aria-current="true"
+            data-testid="project-tab-conversation"
+            onClick={focusConversation}
+          >
+            Conversation
+          </button>
+          <button
+            type="button"
+            className={styles.tab}
+            data-selected="false"
+            data-testid="project-tab-overview"
+            onClick={openOverview}
+          >
+            Aperçu
+          </button>
+          <button
+            type="button"
+            className={styles.tab}
+            data-selected="false"
+            data-testid="project-tab-execution"
+            disabled={!executionAvailable}
+            aria-disabled={!executionAvailable}
+            title={
+              executionAvailable
+                ? undefined
+                : "Aucune exécution à afficher pour l’instant"
+            }
+            onClick={openExecution}
+          >
+            Exécution
+          </button>
+        </nav>
+      </header>

       <div className={styles.layout} data-testid="project-workspace-layout">
-        <div className={styles.journalColumn} data-testid="project-journal-column">
-          <JournalSurface
-            entries={controller.journalEntries}
-            cycleInstanceId={controller.journalCycleInstanceId}
-            reservationsCycleInstanceId={reservationCycleInstanceId}
-            selectedEntryId={controller.selectedJournalEntryId}
-            onSelectEntry={controller.setSelectedJournalEntryId}
-            onViewExchanges={controller.focusJournalExchanges}
-            onFocusTurn={controller.focusTranscriptTurn}
-            transcriptMessages={controller.messages}
-            collapsed={journalCollapsed}
-            onToggleCollapsed={() => setJournalCollapsed((v) => !v)}
-            reservations={cycleReservations}
-            memoryTab={memoryTab}
-            onMemoryTabChange={setMemoryTab}
-            onTreatWithNora={treatReservationWithNora}
-            onConfirmResolve={confirmReservationResolution}
-            onConfirmDefer={confirmReservationDefer}
-            onViewJournalSubject={viewJournalSubject}
-            reservationBusyId={reservationBusyId}
-            recommendations={cycleRecommendations}
-            decisions={cycleDecisions}
-            onResumeRecommendationInChat={resumeRecommendationInChat}
-          />
-          {reservationNotice ? (
+        <div className={styles.main} ref={conversationRef}>
+          <div className={styles.focusBar} data-testid="project-focus-bar">
+            <span className={styles.focusLabel}>
+              <span className={styles.focusDot} aria-hidden />
+              Focus actuel
+            </span>
+            <span className={styles.focusTitle}>
+              {focusTopic ??
+                (lifecycle?.selectedCycleInstanceId
+                  ? cycleSummary.label
+                  : "Conversation avec Nora")}
+            </span>
+            <span className={styles.focusCounts}>
+              {decisionCount > 0 ? (
+                <span className={styles.focusCount}>1 décision</span>
+              ) : null}
+              {reserveCount > 0 ? (
+                <span className={styles.focusCount}>
+                  {reserveCount} réserve{reserveCount > 1 ? "s" : ""}
+                </span>
+              ) : null}
+            </span>
+          </div>
+
+          {continuity.kind === "restored_hint" ? (
             <p
               className={styles.durabilityHint}
-              data-testid="cycle-reservation-notice"
-              role="status"
+              data-testid="project-auto-resume-hint"
             >
-              {reservationNotice}
+              {continuity.message}
             </p>
           ) : null}
-        </div>
+          {continuity.kind === "transcript_unavailable" ? (
+            <RecoverySurface
+              message={continuity.message}
+              onRetryTranscript={() => {
+                void controller.refreshConversationContinuity();
+              }}
+            />
+          ) : null}

-        <div className={styles.main} ref={conversationRef}>
-          <div className={styles.conversation} data-testid="project-conversation-main">
+          <div
+            className={styles.conversation}
+            data-testid="project-conversation-main"
+          >
             <ConversationSurface
               controller={controller}
               onConfirmReservationResolve={confirmReservationResolution}
               reservationConfirmBusyId={reservationBusyId}
             />
           </div>
-          <HistorySurface result={success} durableOutcome={durableOutcome} />
         </div>

-        <div
-          className={[styles.lpsColumn, lpsOpen ? styles.lpsOpen : styles.lpsClosed].join(
-            " ",
-          )}
+        <aside
+          className={[
+            styles.lpsColumn,
+            lpsOpen ? styles.lpsOpen : styles.lpsClosed,
+          ].join(" ")}
           data-testid="project-lps-column"
+          aria-label="Contexte du projet"
         >
           <div className={styles.lpsSheet}>
             <button
@@ -419,6 +577,16 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
             >
               Fermer
             </button>
+
+            <ProjectContextSummary
+              cycle={cycleSummary}
+              focus={nextAction}
+              focusTopic={focusTopic}
+              currentness={currentness}
+              trajectory={trajectoryNodes}
+              attention={attention}
+            />
+
             <section
               className={styles.stateTrajectoryRegion}
               data-testid="project-state-trajectory-region"
@@ -431,10 +599,6 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                 <h2 className={styles.stateTrajectoryTitle}>
                   État actuel et trajectoire
                 </h2>
-                <p className={styles.stateTrajectoryNote}>
-                  L&apos;état actuel et la trajectoire sont regroupés ici pour
-                  faciliter le pilotage.
-                </p>
               </header>
               <div
                 className={styles.stateTrajectoryStack}
@@ -449,12 +613,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                   onOpenReservations={openReservationsTab}
                   onTreatReservationWithNora={treatReservationWithNora}
                   onEscalateTrajectory={() => {
-                    const el = document.querySelector(
-                      "[data-testid='w2-trajectory-panel']",
-                    );
-                    if (el instanceof HTMLElement) {
-                      el.scrollIntoView({ behavior: "smooth", block: "start" });
-                    }
+                    scrollToTestId("w2-trajectory-panel");
                   }}
                 />
                 <LpsSurface result={success} />
@@ -498,8 +657,53 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                 />
               </div>
             </section>
+
+            <div
+              className={styles.journalColumn}
+              data-testid="project-journal-column"
+            >
+              <JournalSurface
+                entries={controller.journalEntries}
+                cycleInstanceId={controller.journalCycleInstanceId}
+                reservationsCycleInstanceId={reservationCycleInstanceId}
+                selectedEntryId={controller.selectedJournalEntryId}
+                onSelectEntry={controller.setSelectedJournalEntryId}
+                onViewExchanges={controller.focusJournalExchanges}
+                onFocusTurn={controller.focusTranscriptTurn}
+                transcriptMessages={controller.messages}
+                collapsed={journalCollapsed}
+                onToggleCollapsed={() => setJournalCollapsed((v) => !v)}
+                reservations={cycleReservations}
+                memoryTab={memoryTab}
+                onMemoryTabChange={setMemoryTab}
+                onTreatWithNora={treatReservationWithNora}
+                onConfirmResolve={confirmReservationResolution}
+                onConfirmDefer={confirmReservationDefer}
+                onViewJournalSubject={viewJournalSubject}
+                reservationBusyId={reservationBusyId}
+                recommendations={cycleRecommendations}
+                decisions={cycleDecisions}
+                onResumeRecommendationInChat={resumeRecommendationInChat}
+              />
+              {reservationNotice ? (
+                <p
+                  className={styles.durabilityHint}
+                  data-testid="cycle-reservation-notice"
+                  role="status"
+                >
+                  {reservationNotice}
+                </p>
+              ) : null}
+            </div>
+
+            <HistorySurface result={success} durableOutcome={durableOutcome} />
           </div>
-        </div>
+
+          <ProjectContextShortcuts
+            onOpenJournal={openJournal}
+            onOpenHistory={openHistory}
+          />
+        </aside>
       </div>
     </div>
   );
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index b6ba5d62..a581711f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -312,7 +312,14 @@ export function useProductConversation({
   useEffect(() => {
     const el = listRef.current;
     if (!el || typeof el.scrollTo !== "function") return;
-    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
+    const reduceMotion =
+      typeof window !== "undefined" &&
+      typeof window.matchMedia === "function" &&
+      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
+    el.scrollTo({
+      top: el.scrollHeight,
+      behavior: reduceMotion ? "auto" : "smooth",
+    });
   }, [
     messages,
     toolEvents,
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
index 46718967..84f468d5 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
@@ -1,44 +1,47 @@
 /**
  * Pre-M6 Option A product presentation tokens.
  *
- * Visual reference: Penpot file 63bdc57a… pages 03 + 06 (W4-D).
+ * Visual reference: P3 Figma Workspace Desktop 46:2 (1440×1024) and responsive
+ * 190:44 / 190:306. Values converge on the P3 extraction (warm paper canvas,
+ * ink primary, Nora vermilion accent) — same `--pm6-` family, no second set.
  * Prefixed `--pm6-` so this layer never collides with the legacy `--sfia-` set.
- * Inter is the Penpot typography reference — system fallback only (no font files).
+ * Typography: the app already loads Inter via next/font (`--font-inter`); no
+ * additional font is introduced (Geist is not available in this repo).
  */

 :root {
   --pm6-font: Inter, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

-  --pm6-canvas: #f3f1ec;
-  --pm6-canvas-raised: #f7f5f0;
+  --pm6-canvas: #fffdf9;
+  --pm6-canvas-raised: #fbf7f2;
   --pm6-surface: #ffffff;
-  --pm6-surface-sunken: #faf9f6;
+  --pm6-surface-sunken: #fcf8f3;

-  --pm6-forest: #0b3d2e;
-  --pm6-forest-hover: #0f5540;
-  --pm6-forest-tint: #e8f2ed;
-  --pm6-forest-ink: #f4f8f6;
+  --pm6-forest: #1f1a16;
+  --pm6-forest-hover: #3a322b;
+  --pm6-forest-tint: #f3ede5;
+  --pm6-forest-ink: #fffdf9;

   --pm6-cream: #fdf6e3;
   --pm6-cream-border: #e8d9a8;
   --pm6-gold: #a8791c;
   --pm6-gold-strong: #7d5810;

-  --pm6-ink: #1b2320;
-  --pm6-ink-soft: #3d4a45;
-  --pm6-muted: #6b7671;
-  --pm6-muted-strong: #55605c;
+  --pm6-ink: #1f1a16;
+  --pm6-ink-soft: #3d352e;
+  --pm6-muted: #7f766d;
+  --pm6-muted-strong: #6f665e;

-  --pm6-border: #e3ded4;
-  --pm6-border-soft: #ece8e0;
-  --pm6-border-strong: #d3ccbe;
+  --pm6-border: #e6ded5;
+  --pm6-border-soft: #eae2d9;
+  --pm6-border-strong: #d8cfc4;

-  --pm6-danger: #a63329;
+  --pm6-danger: #b8432b;
   --pm6-danger-tint: #fbeeec;
   --pm6-warn: #8a5a12;
   --pm6-warn-tint: #fdf1de;
-  --pm6-ok: #1f6b4f;
-  --pm6-ok-tint: #e7f3ed;
+  --pm6-ok: #157a55;
+  --pm6-ok-tint: #eef7f2;
   --pm6-info: #1f4f6b;
   --pm6-info-tint: #e7f1f6;

@@ -47,10 +50,10 @@
   --pm6-radius-lg: 16px;
   --pm6-radius-pill: 999px;

-  --pm6-shadow-card: 0 1px 2px rgba(27, 35, 32, 0.04),
-    0 8px 24px rgba(27, 35, 32, 0.05);
-  --pm6-shadow-raised: 0 2px 4px rgba(27, 35, 32, 0.06),
-    0 16px 40px rgba(27, 35, 32, 0.08);
+  --pm6-shadow-card: 0 1px 2px rgba(31, 26, 22, 0.04),
+    0 8px 24px rgba(31, 26, 22, 0.05);
+  --pm6-shadow-raised: 0 2px 4px rgba(31, 26, 22, 0.06),
+    0 16px 40px rgba(31, 26, 22, 0.08);

   --pm6-focus-ring: 0 0 0 3px color-mix(in srgb, var(--pm6-forest) 35%, transparent);

@@ -67,4 +70,29 @@
   --pm6-journal-width: 280px;
   --pm6-content-max: 1180px;
   --pm6-content-max-workspace: 1800px;
+
+  /* ---- P3 Workspace Desktop (46:2) additions ---- */
+  --pm6-rail: #f1ece5;
+  --pm6-rail-border: #e6ded5;
+  --pm6-body: #fbf7f2;
+  --pm6-border-faint: #eee7df;
+  --pm6-muted-faint: #978c81;
+  --pm6-muted-ghost: #a69a8e;
+  --pm6-accent: #d9563b;
+  --pm6-accent-tint: #fff0ea;
+  --pm6-focus-bar: #fcf8f3;
+
+  /* Geometry — Figma 1440×1024 */
+  --pm6-rail-width: 192px;
+  --pm6-global-header-h: 54px;
+  --pm6-context-width: 356px;
+  --pm6-focus-bar-h: 50px;
+}
+
+/* Responsive geometry: <1200 compact (rail ~160, context ~280). */
+@media (max-width: 1199px) {
+  :root {
+    --pm6-rail-width: 160px;
+    --pm6-context-width: 280px;
+  }
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
index 45e471c5..dace45e1 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
@@ -2,11 +2,13 @@
   display: flex;
   flex-direction: column;
   gap: var(--pm6-space-4);
-  background: var(--pm6-surface);
-  border: 1px solid var(--pm6-border-soft);
-  border-radius: var(--pm6-radius-lg);
-  box-shadow: var(--pm6-shadow-card);
-  padding: var(--pm6-space-5);
+  /* P3: flat transcript — the page column carries the surface, no card chrome. */
+  background: transparent;
+  border: 0;
+  border-radius: 0;
+  box-shadow: none;
+  padding: 0 0 var(--pm6-space-4);
+  min-width: 0;
 }

 /* ---------- top bar ---------- */
@@ -62,9 +64,7 @@
   flex-direction: column;
   gap: var(--pm6-space-4);
   min-height: 220px;
-  max-height: 52vh;
-  overflow-y: auto;
-  padding-right: var(--pm6-space-2);
+  /* Page scrolls (composer is sticky); no inner scroll box. */
 }

 .threadEmpty {
@@ -140,11 +140,14 @@
   background: var(--pm6-surface-sunken);
   border: 1px solid var(--pm6-border-soft);
   border-top-left-radius: var(--pm6-radius-sm);
+  background: transparent;
+  border-color: transparent;
+  padding-inline: 0;
 }

 .turnMine .bubble {
-  background: var(--pm6-forest-tint);
-  border: 1px solid var(--pm6-forest-tint);
+  background: var(--pm6-rail);
+  border: 1px solid var(--pm6-border-soft);
   border-top-right-radius: var(--pm6-radius-sm);
 }

@@ -648,6 +651,9 @@
 /* ---------- composer ---------- */

 .composer {
+  position: sticky;
+  bottom: 0;
+  z-index: 10;
   display: flex;
   flex-direction: column;
   gap: var(--pm6-space-2);
@@ -655,7 +661,7 @@
   border: 1px solid var(--pm6-border);
   background: var(--pm6-surface);
   padding: var(--pm6-space-3);
-  box-shadow: var(--pm6-shadow-card);
+  box-shadow: var(--pm6-shadow-raised);
 }

 .composerInput {
@@ -688,15 +694,20 @@

 .sendButton {
   border-radius: var(--pm6-radius-pill);
-  border: 1px solid var(--pm6-forest);
-  background: var(--pm6-forest);
+  border: 1px solid var(--pm6-ink);
+  background: var(--pm6-ink);
   color: var(--pm6-forest-ink);
+  transition: background 120ms ease;
   padding: 9px 20px;
   font-size: 0.87rem;
   font-weight: 600;
   cursor: pointer;
 }

+.sendButton:hover:not(:disabled) {
+  background: var(--pm6-forest-hover);
+}
+
 .sendButton:disabled {
   opacity: 0.45;
   cursor: not-allowed;
@@ -742,3 +753,12 @@
     flex: 1 1 100%;
   }
 }
+
+@media (prefers-reduced-motion: reduce) {
+  .root,
+  .root * {
+    scroll-behavior: auto !important;
+    transition-duration: 0.01ms !important;
+    animation-duration: 0.01ms !important;
+  }
+}
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
index a931ef3c..7ea46c65 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
@@ -4,6 +4,13 @@ import type { GetProjectSuccess } from "../types";
 import { projectContextForDisplay } from "@/features/project-assistant/presentationLabels";
 import styles from "./LpsSurface.module.css";

+/** Shared with the Workspace context panel — same wording, one source. */
+export function lpsNextAction(readinessStatus: string): string {
+  return readinessStatus === "NOT_READY"
+    ? "Poursuivre la qualification avec Nora, puis décider."
+    : "Poursuivre avec Nora — la préparation enregistrée reste à décider.";
+}
+
 /**
  * "ÉTAT DU PROJET" — durable projection only.
  * Every line comes from getProjectRuntimeAction; nothing is inferred or invented.
@@ -17,10 +24,7 @@ export function LpsSurface({ result }: { result: GetProjectSuccess }) {
       ? `Avancement enregistré · état v${livingState.version}`
       : "Projet ouvert · état initial enregistré";

-  const nextAction =
-    readiness.status === "NOT_READY"
-      ? "Poursuivre la qualification avec Nora, puis décider."
-      : "Poursuivre avec Nora — la préparation enregistrée reste à décider.";
+  const nextAction = lpsNextAction(readiness.status);

   return (
     <aside

```

======================================================================
USEFUL DIFF — ROADMAP
======================================================================
```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 4d7997d4..a8e53a4d 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,6 +4,7 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S01 INTEGRATED DELIVERY** | 2026-10-05 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5 AUTHORIZED BY MORRIS / STARTED / IN PROGRESS — P5-S01 FIRST INTEGRATED PRODUCT VERTICAL SLICE LOCAL CANDIDATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / implémentation** · Milestone **P5 — Integrated Delivery** · Slice **P5-S01** · CRITICAL · EVOL · Morris P5 AUTHORIZATION = **CONSUMED** · P4 = **CLOSED / FINAL REPOSITORY VERIFIED / FINAL TRUTH-SYNC INTEGRATED ON MAIN** (PR **#554** MERGED · main `04527bede4a3aad1853387b9eb39af3fe0615412` · CI **#676** / `37269800594` SUCCESS · Required Gate SUCCESS) · branche locale `delivery/sfia-studio-product-simplification-p5-s01-integrated-product-vertical-slice` · base `origin/main` @ `04527bede4a3aad1853387b9eb39af3fe0615412` · document = `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` · CURRENT CAPABILITY = **P5-S01 Workspace/Conversation + Product Semantic Context + Cognitive Routing D0 + P3 Visual Fidelity foundation** · REAL = **NOT AUTHORIZED** · R1/R2/R3 = **NOT STARTED** · READY FOR REAL = **NO** · runtime v3 = **NON ADOPTED** · project commit/push/PR/merge = **NOT AUTHORIZED this pass** · next after ChatGPT PASS = **MORRIS P5-S01 GIT INTEGRATION GATE** · **≠** P5 COMPLETE · **≠** P5 CLOSED · **≠** READY FOR MERGE |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P4 FINAL REPOSITORY TRUTH-SYNC** | 2026-10-05 03:32:06 +0200 — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 FINAL REPOSITORY TRUTH-SYNC COMPLETE AS LOCAL CANDIDATE — READY FOR MORRIS P4 FINAL TRUTH-SYNC GIT INTEGRATION GATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-merge / repository truth-sync** · Milestone **P4** · Pass **P4 FINAL REPOSITORY TRUTH-SYNC** · CRITICAL · EVOL/DOC · PR **#552 MERGED** · architecture merge `d0b4836046911731605883364d9cc3bef4ac3e7f` · post-merge CI **#672** SUCCESS · PR **#553 MERGED** · closure patch merge `17434de03585eb30d13d59d7ba5c249563f0b33c` · parents `d0b48360…` + `332ee04d…` · post-merge SFIA Studio CI run **#674** / `37250512824` = **SUCCESS** · Detect / Build / Unit tests / **Required Gate** = **SUCCESS** · P4 GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS = **YES** · P4 closure patch INTEGRATED ON MAIN = **YES** · P4 FINAL REPOSITORY VERIFICATION = **PASS** · P5 REQUALIFIED BY CHATGPT = **YES** · P5 Entry Contract = **DEFINED** · **P5 AUTHORIZED = NO** · **P5 STARTED = NO** · READY FOR REAL = **NO** · runtime v3 = **NON ADOPTED** · production router IMPLEMENTED = **NO** · REAL routing PROVEN = **NO** · document = `projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md` · branche `docs/sfia-studio-p4-final-repository-truth-sync` · base `origin/main` @ `17434de03585eb30d13d59d7ba5c249563f0b33c` · prior handoff `5533a05cbfe334aee7c799ed74f7669ef1a08004` / blob `988967391fd9437355d90611c14aba1b3d74887a` · next = **ChatGPT P4 final truth-sync review** → **DISTINCT Morris truth-sync Git integration gate** (commit/push/PR) → DISTINCT merge → post-merge verify → **CURRENT MORRIS GATE = P5 AUTHORIZATION** (NOT CONSUMED) · **≠** P5 AUTHORIZED · **≠** P5 STARTED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED · **≠** project commit/push/PR/merge this pass · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P4 POST-MERGE VERIFICATION & CLOSURE** | 2026-10-05 02:49:04 +0200 — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 POST-MERGE VERIFICATION & CLOSURE COMPLETE AS LOCAL CANDIDATE — READY FOR MORRIS P4 CLOSURE PATCH GIT INTEGRATION GATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-merge** · Milestone **P4 — SEMANTIC / PROJECTION / COGNITIVE ARCHITECTURE / TECHNICAL DELTA** · Pass **POST-MERGE VERIFICATION & CLOSURE** · CRITICAL · EVOL/DOC · PR **#552 MERGED** · merge `d0b4836046911731605883364d9cc3bef4ac3e7f` · parents `e19f8940…` + `e24747e1…` · post-merge SFIA Studio CI run **#672** / `37248128868` = **SUCCESS** · Detect / Build / Unit tests / **Required Gate** = **SUCCESS** · P4 GLOBAL VALIDATED BY MORRIS = **YES** · P4 INTEGRATED ON MAIN = **YES** · P4 POST-MERGE VERIFIED = **YES** · P4 CLOSED BY MORRIS = **YES** · P4 Exit Proof = **SATISFIED** · closure materialization = **LOCAL CANDIDATE** · closure patch INTEGRATED ON MAIN = **NO** · **P5 = NOT AUTHORIZED / NOT STARTED** (Entry Contract DEFINED by CLOSED P4 · DEFINED ≠ AUTHORIZED) · READY FOR REAL = **NO** · runtime v3 = **NON ADOPTED** · TARGET routing architecture = **VALIDATED / ADOPTED AS P4 TARGET CONTRACT** · production router IMPLEMENTED = **NO** · REAL routing PROVEN = **NO** · Cognitive Completion PROVEN = **NO** · document = `projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md` · branche de clôture `docs/sfia-studio-chat-first-product-simplification-p4-post-merge-closure` · base `origin/main` @ `d0b4836046911731605883364d9cc3bef4ac3e7f` · prior handoff `59dbf0c2f5cfb804e3c21f83e94e56f688d91792` / blob `2f2b45206e71df859b6850b56c7ec8030c514dd2` · next = **ChatGPT P4 post-merge closure review** → **DISTINCT Morris closure-patch Git integration gate** (commit/push/PR) → DISTINCT merge → repository truth → **P5 REQUALIFICATION** → DISTINCT GO P5 if recommended · **≠** P5 AUTHORIZED · **≠** P5 STARTED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED · **≠** production router implemented · **≠** project commit/push/PR/merge this pass · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P4 GIT INTEGRATION AUTHORIZED / IN PROGRESS** | 2026-10-05 02:23:24 +0200 — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 GLOBAL VALIDATED BY MORRIS — GIT INTEGRATION AUTHORIZED / IN PROGRESS (COMMIT / PUSH / PR)** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **15 — Capitalisation / REX** · Milestone **P4** · Pass **GIT INTEGRATION — COMMIT / PUSH / PR** · CRITICAL · EVOL/DOC · Morris Git Integration GO = **YES** (commit/push/PR) · MERGE = **NOT AUTHORIZED** · ChatGPT materialization/truth-sync review = **PASS** · prior handoff `db3b7b93723847629b9e46eef2ac6b343737a8a1` / blob `63829146f51b609fba31d0436a3e9a400b1a1869` · document P4 = VALIDATED DOCUMENTARY CANDIDATE · Roadmap truth-sync included · **P4 INTEGRATED = NO** · **P4 CLOSED = NO** · **P5 = NOT AUTHORIZED / NOT STARTED** · READY FOR REAL = **NO** · runtime v3 = **NON ADOPTED** · branche `docs/sfia-studio-chat-first-product-simplification-p4-semantic-projection-cognitive-architecture` · base `origin/main` @ `e19f89409a5eb717838b9d7bffdc8c3d2ee02b18` · next after PR = **ChatGPT PR review** → **DISTINCT MORRIS MERGE GATE** · **≠** P4 MERGED · **≠** P4 CLOSED · **≠** P5 AUTHORIZED · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence** |
@@ -969,23 +970,23 @@ CRITICAL PATH:
   → P2 — **VALIDATED BY MORRIS + INTEGRATED ON MAIN + POST-MERGE VERIFIED + CLOSED** (PR **#549** / merge `e99d9ad5…`)
   → P3 — **VALIDATED BY MORRIS + INTEGRATED ON MAIN + POST-MERGE VERIFIED + CLOSED** (PR **#550** + closure **#551** / main `e19f8940…`)
   → P4 — **GLOBAL VALIDATED BY MORRIS + INTEGRATED ON MAIN + POST-MERGE VERIFIED + CLOSED BY MORRIS** (PR **#552** / `d0b48360…` · CI **#672** SUCCESS) + **CLOSURE PATCH INTEGRATED** (PR **#553** / `17434de0…` · CI **#674** SUCCESS) · FINAL REPOSITORY VERIFICATION = **PASS**
-  → CURRENT NEXT CAPABILITY — **MORRIS P5 AUTHORIZATION GATE** · P5 REQUALIFIED BY CHATGPT · Entry Contract DEFINED · P5 **NOT AUTHORIZED / NOT STARTED**
-  → CURRENT STRUCTURAL STEP — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 CLOSED + FINAL REPOSITORY VERIFIED → P5 REQUALIFIED BY CHATGPT → AWAITING DISTINCT MORRIS P5 AUTHORIZATION GATE · P1/P2/P3/P4 CLOSED · P5 Entry Contract DEFINED · P5 **≠** authorized · TARGET routing architecture validated/adopted as P4 target contract · production router **NOT IMPLEMENTED/PROVEN** · REAL **≠** authorized · runtime v3 **NON ADOPTED** · final truth-sync materialization LOCAL CANDIDATE · truth-sync patch **≠** on main yet
+  → CURRENT NEXT CAPABILITY — **P5-S01 FIRST INTEGRATED PRODUCT VERTICAL SLICE** (LOCAL CANDIDATE) · next Morris gate after ChatGPT PASS = **P5-S01 GIT INTEGRATION**
+  → CURRENT STRUCTURAL STEP — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — **P5 AUTHORIZED / STARTED / IN PROGRESS** · P5-S01 Workspace/Conversation + Semantic Context + Cognitive Routing D0 + P3 Visual Fidelity foundation · P1/P2/P3/P4 **CLOSED** · P4 FINAL TRUTH-SYNC **ON MAIN** (PR **#554** / `04527bed…` · CI **#676** SUCCESS) · REAL **≠** authorized · R1/R2/R3 **NOT STARTED** · runtime v3 **NON ADOPTED** · project commit/push/PR/merge **≠** this pass
   → DYNAMIC PRODUCT TRAJECTORY — requalify after each capability *(method invariant)*

-CURRENT SIMPLIFICATION TRAJECTORY (living — P4 CLOSED / FINAL REPOSITORY VERIFIED · P5 REQUALIFIED · P5 NOT AUTHORIZED):
+CURRENT SIMPLIFICATION TRAJECTORY (living — P5 AUTHORIZED / IN PROGRESS · P5-S01 LOCAL CANDIDATE):
   Axes: (1) Product Interaction Simplification · (2) HumanDecision Materiality · (3) Cognitive Reliability / Adaptive Model & Reasoning Strategy · (4) Chat-first Operating / Workspace / Semantic Architecture trajectory
   P1 Cadrage — VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED (PR #548 / merge `642a10c8…`)
   → P2 Functional Operating Model — VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED (PR #549 / merge `e99d9ad5…`)
   → P3 Workspace / Interaction Architecture — VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED (PR #550 + closure #551 / main `e19f8940…`)
-  → P4 Semantic / Projection / Cognitive Architecture — GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS (PR #552 / `d0b48360…` · CI #672 SUCCESS) · closure patch INTEGRATED (PR #553 / `17434de0…` · CI #674 SUCCESS) · FINAL REPOSITORY VERIFICATION = PASS · final truth-sync materialization LOCAL CANDIDATE · truth-sync patch ≠ on main yet
-  → P5 Integrated Delivery — REQUALIFIED BY CHATGPT · Entry Contract DEFINED by CLOSED P4 · **NOT AUTHORIZED** · **NOT STARTED**
+  → P4 Semantic / Projection / Cognitive Architecture — GLOBAL VALIDATED / INTEGRATED / POST-MERGE VERIFIED / CLOSED BY MORRIS (PR #552 / `d0b48360…` · CI #672 SUCCESS) · closure patch INTEGRATED (PR #553 / `17434de0…` · CI #674 SUCCESS) · FINAL TRUTH-SYNC INTEGRATED (PR #554 / `04527bed…` · CI #676 SUCCESS) · FINAL REPOSITORY VERIFICATION = PASS
+  → P5 Integrated Delivery — **AUTHORIZED BY MORRIS / STARTED / IN PROGRESS** · P5-S01 = **LOCAL CANDIDATE** · document `05-chat-first-product-simplification-integrated-delivery.md` · **≠** P5 COMPLETE / CLOSED
   → P6 Global Integrated Product QA — NOT AUTHORIZED
   → P7 Fresh Project End-to-End Product Replay — NOT AUTHORIZED · Project NOT SELECTED
   → P8 Requalification — NOT AUTHORIZED
-  TARGET routing architecture — VALIDATED / ADOPTED AS P4 TARGET CONTRACT (Strategy-first bounded · GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra · GPT-5.6 exits nominal TARGET) · exact production workload→model/effort mapping = implementation/evidence subject
-  Production router IMPLEMENTED / REAL routing PROVEN / Cognitive Completion PROVEN — **NO**
-  Trajectory-significant P4 conclusions (detail owned by P4 doc): one Product world · P3-capable frontend convergence · no new DS stack by default · deterministic NO-LLM path · object-native projections · Synthesis derived projection target · Deliverable ≠ Artifact · REAL-FIRST begins in P5 when separately authorized · PIB / Net Complexity part of Product Simplification success · no parallel architecture
+  TARGET routing architecture — VALIDATED / ADOPTED AS P4 TARGET CONTRACT · P5-S01 implements Strategy-first bounded routing D0 (GPT-6 Luna / GPT-6.1 Sol / GPT-6 Astra) · ZERO REAL · GPT-5.6 historical FREEZE
+  Production router REAL PROVEN / Cognitive Completion PROVEN / READY FOR REAL — **NO**
+  Trajectory-significant P4 conclusions remain authority; P5 materializes them on the Product path without parallel architecture
   → OPTIONAL CKC lessons → v2.6 capitalization — DISTINCT METHOD GATE — NOT DECIDED

 M4 ARCHITECTURE GATE: CLOSED (D-M4-01→05)
@@ -1027,8 +1028,8 @@ HISTORICAL / CONSUMED (W2-era tip): NEXT CONVERGENCE CAPABILITY was W2 TRACK D /
 HISTORICAL / SUPERSEDED (P2 CP01 living tip): CURRENT STRUCTURAL STEP was P2 CHECKPOINT 01 CORRECTION PASS 01 COMPLETE — P2 AUTHORIZED/IN PROGRESS — P2 NOT VALIDATED — P3→P8 NOT AUTHORIZED — production model routing NOT SELECTED — Pilot–Nora–Studio semantic TARGET FOR P4 *(true then)*
 HISTORICAL / CONSUMED / SUPERSEDED: NEXT MORRIS GATE AFTER REQUALIFICATION was "selection / authorization of a future Studio capability — NOT STARTED" — SUPERSEDED by D-SIMP-01 (capability selected = Product Simplification C1)
 HISTORICAL / SUPERSEDED (P2 CP01 living tip): CURRENT MORRIS GATE was CHATGPT CLOSURE REVIEW CHECKPOINT 01 *(true then)*
-CURRENT STRUCTURAL STEP: STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 CLOSED + FINAL REPOSITORY VERIFIED → P5 REQUALIFIED BY CHATGPT → AWAITING DISTINCT MORRIS P5 AUTHORIZATION GATE — P1/P2/P3/P4 CLOSED — P5 Entry Contract DEFINED — P5 NOT AUTHORIZED / NOT STARTED — TARGET routing architecture VALIDATED / ADOPTED AS P4 TARGET CONTRACT — production router NOT IMPLEMENTED/PROVEN — REAL NOT AUTHORIZED — runtime v3 NON ADOPTED — READY FOR REAL NO — P4 closure patch INTEGRATED ON MAIN (PR #553) — final truth-sync materialization LOCAL CANDIDATE — truth-sync patch NOT INTEGRATED ON MAIN
-CURRENT MORRIS GATE: P5 AUTHORIZATION — PENDING / NOT CONSUMED · prior P4 gates (validation / git integration / merge #552 / closure / closure-patch merge #553) CONSUMED · ChatGPT P5 requalification COMPLETED · ≠ P5 AUTHORIZED · ≠ P5 STARTED · ≠ READY FOR REAL · ≠ runtime v3 ADOPTED · ≠ truth-sync commit/push/PR this pass
+CURRENT STRUCTURAL STEP: STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — **P5 AUTHORIZED / STARTED / IN PROGRESS** — P5-S01 FIRST INTEGRATED PRODUCT VERTICAL SLICE LOCAL CANDIDATE — Workspace/Conversation + Semantic Context + Cognitive Routing D0 + P3 Visual Fidelity foundation — P1/P2/P3/P4 CLOSED — P4 FINAL TRUTH-SYNC ON MAIN (PR #554 / `04527bed…` / CI #676 SUCCESS) — REAL NOT AUTHORIZED — R1/R2/R3 NOT STARTED — runtime v3 NON ADOPTED — READY FOR REAL NO — project commit/push/PR/merge NOT AUTHORIZED this pass
+CURRENT MORRIS GATE (after ChatGPT P5-S01 PASS): **P5-S01 GIT INTEGRATION** (commit + project branch push + PR only) · MORRIS P5 AUTHORIZATION = **CONSUMED** · REAL gate = **NOT CONSUMED** · MERGE gate = **NOT CONSUMED** · ≠ P5 COMPLETE · ≠ READY FOR REAL · ≠ runtime v3 ADOPTED
 M6 / M7: HISTORICAL MILESTONES — SUPERSEDED / ABSORBED BY PRODUCT COMPLETION — traces conservées
 CKC COVERAGE: corpus Studio-native INTEGRATED · Phase A package-bound INTEGRATED via W1 · Phase B ≠ complete · `15` non structurel
 CKC→V2.6 CAPITALIZATION: FUTURE OPTION — DISTINCT METHOD GATE — NOT DECIDED — Studio doctrine remains v3-exclusive
@@ -1045,7 +1046,7 @@ MAJOR GAP TREATMENT: ADOPTED AS OPTION A SCOPE (F1 entry · nav · workspace ·
 W1 ROADMAP REPOSITORY TRUTH: SATISFIED — PR #396 MERGED — PUSH/MAIN CI 32591909031 SUCCESS
 HISTORICAL / CONSUMED (duplicate W2-era tip block): NEXT REPO GATE / NEXT PRODUCT GATE / NEXT CONVERGENCE CAPABILITY Track D Phase B — CONSUMED by PR #403 + W2 CLOSED + subsequent W3/W4/PC trajectory
 HISTORICAL / SUPERSEDED (repeat tip): CURRENT STRUCTURAL STEP was P2 CHECKPOINT 01 CORRECTION PASS 01 COMPLETE — P2 NOT VALIDATED — P3→P8 NOT AUTHORIZED — production routing NOT SELECTED *(true then)*
-CURRENT STRUCTURAL STEP (repeat for local block coherence): STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 CLOSED + FINAL REPOSITORY VERIFIED → P5 REQUALIFIED BY CHATGPT → AWAITING MORRIS P5 AUTHORIZATION GATE — P1/P2/P3/P4 CLOSED — P5 NOT AUTHORIZED / NOT STARTED — TARGET routing VALIDATED / ADOPTED AS P4 TARGET CONTRACT — production router NOT PROVEN — runtime v3 NON ADOPTED — closure patch ON MAIN via PR #553 — truth-sync patch NOT ON MAIN
+CURRENT STRUCTURAL STEP (repeat for local block coherence): STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5 AUTHORIZED / STARTED / IN PROGRESS — P5-S01 LOCAL CANDIDATE — P1/P2/P3/P4 CLOSED — PR #554 ON MAIN (`04527bed…`) — REAL NOT AUTHORIZED — runtime v3 NON ADOPTED — next gate after ChatGPT PASS = MORRIS P5-S01 GIT INTEGRATION
 M6 / M7: HISTORICAL / SUPERSEDED / ABSORBED — not forward milestones
 CKC COVERAGE: catalogue applicable evolvable — Phase A integrated · Phase B downstream — current 15-type baseline is a measure, not a structural invariant
 CKC→V2.6 CAPITALIZATION: FUTURE OPTION — DISTINCT METHOD GATE — NOT DECIDED — Studio doctrine remains v3-exclusive
@@ -1202,7 +1203,7 @@ Ne pas mettre à jour pour chaque micro-commit sans impact de trajectoire.
 - HISTORICAL / CONSUMED (post-C1 tip): NEXT PRODUCT GATE was **POST-MERGE REPO COHERENCE → MORRIS GATE FOR C2 EXECUTION** *(later CONSUMED by C2 PR #369)*
 - HISTORICAL / CONSUMED (post-C1 tip): NEXT CAPABILITY was **Cycle 2 — Conception fonctionnelle — RECOMMENDED / NOT AUTHORIZED** *(later VALIDATED / INTEGRATED)*
 - HISTORICAL / SUPERSEDED (living tip): CURRENT STRUCTURAL STEP was P2 CHECKPOINT 01 CORRECTION PASS 01 COMPLETE · P2 AUTHORIZED/IN PROGRESS · P2 NOT VALIDATED · P3→P8 NOT AUTHORIZED · production model routing NOT SELECTED · Pilot–Nora–Studio technical architecture NOT ADOPTED *(true then)*
-- CURRENT STRUCTURAL STEP (living tip): **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P4 GLOBAL VALIDATED BY MORRIS — GIT INTEGRATION AUTHORIZED / IN PROGRESS (COMMIT / PUSH / PR)** · P1/P2/P3 **CLOSED** · P4 **GLOBAL VALIDATED** · P4 **NOT INTEGRATED** · P4 **NOT CLOSED** · MERGE **NOT AUTHORIZED** · P5 Entry Contract **DEFINED** · P5 **NOT AUTHORIZED / NOT STARTED** · TARGET routing architecture **VALIDATED IN P4** · production router **NOT IMPLEMENTED/PROVEN** · REAL **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** · READY FOR REAL **NO** · document `product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md` · next after PR = **ChatGPT PR review** → **DISTINCT Morris merge gate**
+- CURRENT STRUCTURAL STEP (living tip): **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5 AUTHORIZED BY MORRIS / STARTED / IN PROGRESS — P5-S01 LOCAL CANDIDATE** · P1/P2/P3/P4 **CLOSED** · P4 FINAL TRUTH-SYNC **ON MAIN** (PR **#554** / `04527bed…` / CI **#676** SUCCESS) · CURRENT CAPABILITY = **P5-S01** Workspace/Conversation + Semantic Context + Cognitive Routing D0 + P3 Visual Fidelity foundation · document `product-simplification/05-chat-first-product-simplification-integrated-delivery.md` · REAL **NOT AUTHORIZED** · R1/R2/R3 **NOT STARTED** · runtime v3 **NON ADOPTED** · READY FOR REAL **NO** · next after ChatGPT PASS = **MORRIS P5-S01 GIT INTEGRATION GATE** · **≠** P5 COMPLETE · **≠** READY FOR MERGE
 - D-PRE-M6-UX-05 : Freeze `uUdLBElF2B4dOefaAYt4QY` · handoff `69106c82024158889f77e9d31508a222ea5f3a0f` / blob `3593ddbdc286cd244790f0ca1d2c421128202c5c` · **ADOPTED AS PRE-M6 VISUAL REFERENCE ON MAIN**
 - CKC coverage : current **4/15** detailed pilots + **11/15** synthetic fallback · target = 100 % du catalogue applicable · `15` non structurel · optional later v2.6 capitalization under distinct method gate
 - Audit handoff historique : `sfia/review-handoff` @ `c5b417dc13fa3700787d28571e5b5abe0599ae98` / `31a5db07fba2555a59ee8c65ad76b537bbd8a73d`

```
