# ChatGPT Review Pack — FULL

| Métadonnée | Valeur |
| --- | --- |
| **Timestamp Europe/Paris** | 2026-10-04 06:21:21 +0200 |
| **Macro** | STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 |
| **Milestone** | P3 — WORKSPACE / INTERACTION ARCHITECTURE |
| **Pass** | P3 OPENING TARGETED CORRECTION PASS 01 |
| **Profil** | CRITICAL |
| **Typologie** | DOC dans macro EVOL · guidance cyc:ux-ui |
| **Niveau** | FULL |
| **Verdict attendu** | READY FOR CHATGPT P3 OPENING CLOSURE REVIEW — FCR-P3-OPEN-01 CLOSED — FCR-P3-OPEN-02 CLOSED — P3 NOT YET VALIDATED |

---

## A–B. Objectif / Cycle / Profile

Corriger exclusivement **FCR-P3-OPEN-01** (Figma Registry — 13 pages top-level) et **FCR-P3-OPEN-02** (retained user-visible surface coverage + Auth/Login visual contract). Aucune mutation Figma · aucune maquette · aucune validation Screen 01 / North Star / IA · aucun code · aucun P4 · aucune HumanDecision Morris nouvelle.

## C. Local Git Truth

```text
pwd = /Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3
toplevel = /Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3
branch = docs/sfia-studio-chat-first-product-simplification-p3-workspace-interaction-architecture
HEAD = e99d9ad5cc7011e414b00006e88ac33e11b5ce87
origin/main = e99d9ad5cc7011e414b00006e88ac33e11b5ce87
expected origin/main = e99d9ad5cc7011e414b00006e88ac33e11b5ce87
match = YES
project commit = NO
project push = NO
```

## D. Entry Review Handoff

| Champ | Valeur |
| --- | --- |
| commit | `787a8b6c4b0adea11c28fbd87fe5ffd39b45fc6f` |
| blob | `7f25addb94a662bc20160e6929099359d1e55d04` |
| remote tip at entry | MATCH (`787a8b6c…`) |

## E. ChatGPT P3 Opening Review #1

**NOT READY — TARGETED CORRECTION REQUIRED** · findings ouverts à l’entrée : **FCR-P3-OPEN-01**, **FCR-P3-OPEN-02**.

## F. FCR-P3-OPEN-01 — Figma Registry

### F1. Contenu avant

```markdown
### 8.2 Pages MCP-confirmées (AVANT — incorrect)
| Page id | Nom | Statut |
| `0:1` | 00 — P3 North Star | CONFIRMÉE via get_metadata |
> Écart inventaire. Les pages 01–12 … n’apparaissent pas … Qualification : structure page-level PARTIAL · contenu frame-level PRESENT / EXPLORATORY.
```

### F2. Preuve Figma ChatGPT (autoritative, READ ONLY)

| Item | Value |
| --- | --- |
| fileKey | `m4g8j0gNbEzfIuH6S9AZJF` |
| Top-level pages | **13 PRESENT** |
| `0:1` | 00 — P3 North Star |
| `2:2` | 01 — Current Product Audit |
| `2:3` | 02 — IA & Target Flows |
| `2:4` | 03 — Foundations |
| `2:5` | 04 — Components |
| `2:6` | 05 — Screen 01 · Projects |
| `2:7` | 06 — Screen 02 · New Project |
| `2:8` | 07 — Screen 03 · Project Workspace |
| `2:9` | 08 — Screen 04 · Decision & Confirmation |
| `2:10` | 09 — Screen 05 · History & Evidence |
| `2:11` | 10 — Motion & Interaction |
| `2:12` | 11 — States & Responsive |
| `2:13` | 12 — Review Log |
| Frames revalidées | `3:75` 1440×1024 · `4:2` 1600×1320 · `8:2` 1440×1024 · `11:2` 1600×1280 · `12:2` 1660×1320 |

Cette preuve supersede l’interprétation « seule page 0:1 ».

### F3. Contenu après — metadata Figma + §8.2–8.3 complets

```markdown
| **Figma** | **REQUIRED DESIGN SURFACE** · structure = **13 TOP-LEVEL PAGES CONFIRMED** · content = **PARTIAL / EXPLORATORY / NOT VALIDATED** · READ ONLY ce pass |

### 8.2 Pages top-level — structure CONFIRMED (13)

> **Correction FCR-P3-OPEN-01.** Preuve autoritative ChatGPT Figma MCP READ ONLY (post Opening Review #1). La qualification antérieure « seule page `0:1` / page-level PARTIAL » est **retirée** comme factuellement incorrecte.
>
> **Distinction obligatoire :**
>
> - **Figma file structure** = **CONFIRMED** (13 pages top-level PRESENT).
> - **Designed content** = **PARTIAL / EXPLORATORY**.
> - **Empty/planned pages** = **PRESENT / NOT YET DESIGNED** (page exists ≠ design exists).
> - **Existing designed boards** = **EXPLORATORY PRE-CYCLE CANDIDATE / NOT VALIDATED**.
> - **Aucune page/frame = VALIDATED.** Frame exists ≠ screen validated.

| Page id | Nom | Structure | Contenu design | Statut |
| --- | --- | --- | --- | --- |
| `0:1` | 00 — P3 North Star | PRESENT | Board `4:2` exploratoire | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| `2:2` | 01 — Current Product Audit | PRESENT | Board `11:2` exploratoire | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| `2:3` | 02 — IA & Target Flows | PRESENT | Board `12:2` exploratoire | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| `2:4` | 03 — Foundations | PRESENT | Specimen `3:75` exploratoire | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| `2:5` | 04 — Components | PRESENT | Foundations/components exploratoires (HARVEST / REQUALIFY) | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| `2:6` | 05 — Screen 01 · Projects | PRESENT | Frame `8:2` exploratoire / partiel | PRE-CYCLE CANDIDATE · **Screen 01 NOT VALIDATED** |
| `2:7` | 06 — Screen 02 · New Project | PRESENT | **DESIGN NOT YET PRODUCED** | PAGE PRESENT · NOT VALIDATED |
| `2:8` | 07 — Screen 03 · Project Workspace | PRESENT | **DESIGN NOT YET PRODUCED** | PAGE PRESENT · NOT VALIDATED |
| `2:9` | 08 — Screen 04 · Decision & Confirmation | PRESENT | **DESIGN NOT YET PRODUCED** | PAGE PRESENT · NOT VALIDATED |
| `2:10` | 09 — Screen 05 · History & Evidence | PRESENT | **DESIGN NOT YET PRODUCED** | PAGE PRESENT · NOT VALIDATED |
| `2:11` | 10 — Motion & Interaction | PRESENT | **DESIGN NOT YET PRODUCED** | PAGE PRESENT · NOT VALIDATED |
| `2:12` | 11 — States & Responsive | PRESENT | **DESIGN NOT YET PRODUCED** | PAGE PRESENT · NOT VALIDATED |
| `2:13` | 12 — Review Log | PRESENT | **DESIGN NOT YET PRODUCED** / log prévu | PAGE PRESENT · NOT VALIDATED |

### 8.3 Frames / boards confirmés

| Frame | node | Dimensions | Parent page | Rôle | Maturity CKC | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| P3 Foundations Specimen | `3:75` | 1440×1024 | 03 — Foundations (`2:4`) | Tokens/couleurs/specimen premium candidat | EXPLORATORY | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| P3 North Star Board | `4:2` | 1600×1320 | 00 — P3 North Star (`0:1`) | North Star + anatomy + screen review order | EXPLORATORY | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| Screen 01 · Projects / Default | `8:2` | 1440×1024 | 05 — Screen 01 · Projects (`2:6`) | Premier écran Projects | EXPLORATORY / PARTIAL | PRE-CYCLE CANDIDATE · **Screen 01 NOT VALIDATED** |
| Current Product Audit Board | `11:2` | 1600×1280 | 01 — Current Product Audit (`2:2`) | Audit 3 générations UI + risques | EXPLORATORY | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| P3 IA & Target Flows Board | `12:2` | 1660×1320 | 02 — IA & Target Flows (`2:3`) | IA cible + flows + decision candidates | EXPLORATORY | PRE-CYCLE CANDIDATE · NOT VALIDATED |

Foundations/tokens/components exploratoires (Button, Status Chip, Project Card, etc.) observés via instances Screen 01 / Foundations = **HARVEST / REQUALIFY** · **≠ ADOPT**.

---
```

Qualification finale : **structure = CONFIRMED** · **content = PARTIAL / EXPLORATORY** · empty planned pages = PRESENT / NOT YET DESIGNED · page exists ≠ design exists · frame exists ≠ validated · **aucune page/frame VALIDATED** · Figma mutation = **NONE**.

Status finding: **CORRECTED / CLOSED** (documentaire).

## G. FCR-P3-OPEN-02 — Complete retained-screen coverage

### G1. Contenu avant

```markdown
| **F — Auth** | `/login` | Authentification | KEEP (hors redesign premium P3 sauf cohérence visuelle) | N/A |
| `/login` | F | Auth | KEEP |
| Login | Auth | Auth | errors | — | — | visual coherence later |
| **P3-AC-10** | Screen coverage : inventaire repo mappé aux familles cibles. |
Exit criteria: no explicit Retained user-visible surface coverage COMPLETE.
```

### G2. Après — Gen F / route `/login`

```markdown
| **F — Auth** | `/login` | Authentification | **KEEP** (comportement fonctionnel) + **REDESIGN** (contrat visuel / interaction P3) | Auth architecture hors P3 · UX premium **IN SCOPE** |
| **F — Auth** | `/login` | Authentification | **KEEP** (comportement fonctionnel) + **REDESIGN** (contrat visuel / interaction P3) | Auth architecture hors P3 · UX premium **IN SCOPE** |
```

### G3. §11 complet modifié (règle retained + Auth/Login + inventory)

```markdown
## 11. Screen / Surface Inventory

### 11.0 Règle — couverture des surfaces utilisateur retained (FCR-P3-OPEN-02)

Toute surface utilisateur **conservée** dans la cible Product doit :

- **A.** être mappée à une **target screen/surface family P3** ;

**OU**

- **B.** être **explicitement exclue** avec justification documentée.

Une surface retained **ne peut pas** échapper au contrat premium / screen-by-screen uniquement parce qu’elle est fonctionnellement stable (« later », « hors P3 », « coherence only » sans justification = **interdit**).

Surfaces classées **RETIRE LATER** :

- ne nécessitent **pas** automatiquement un redesign premium complet ;
- doivent être **explicitement qualifiées** ;
- si elles restent exposées significativement dans la trajectoire produit, leur **dette visuelle transitoire** doit être enregistrée.

La couverture porte sur les **surfaces utilisateur / Product jobs**, pas sur chaque fichier React interne.

### 11.1 Inventaire existant → familles cibles

| Existing | Product job | Target family candidate | States needed | P2 invariant | Figma coverage | Missing design |
| --- | --- | --- | --- | --- | --- | --- |
| `/studio` ProjectsPage | Reprendre / créer | **Projects** | empty / loading / error / stale | chat-first entry | Screen 01 `8:2` exploratory | empty/error/responsive |
| `/workspace` D1 home | Liste projets | **Projects** (converge) | idem | Project focus | page `2:6` / frame `8:2` | merge with Screen 01 |
| `/`→`/synthese` | Home legacy | **Projects** (entry redesign) | — | no cockpit-first | — | replace entry (design first · redirect Delivery later) |
| New project D1/pre-M6 | Intention | **New Project** | clarify / incomplete | Deliverable≠execute | page `2:7` PRESENT / design not yet produced | full screen family |
| ProjectWorkspacePage / ProjectCockpitView | Pilotage projet | **Project Workspace** | blocked / reserved / awaiting | Conversation primary | page `2:8` PRESENT / design not yet produced · anatomy North Star | full screen + states |
| ConfirmationPanel / Decision screen | Authority moments | **Decision & Confirmation** | N-levels / fail-closed | Rec≠HD≠Conf | page `2:9` PRESENT / design not yet produced | exact presentation |
| History/Evidence/LPS/Trajectory/Journal/Recovery | Continuity & proof | **History & Evidence** (+ contextual layers) | stale / missing | Journal≠SoT · Recovery truth | page `2:10` PRESENT / design not yet produced | proof access UX |
| Lifecycle / exit panels | Closure / transition | **Project Workspace** + governed moments | exit eligible | P2-D-02/04 | — | close≠next |
| `/login` | Authentification | **Auth / Login** | voir §11.3 | Auth UX ≠ Auth architecture | **manquante** (pas encore de page Figma dédiée) | contrat visuel + états + a11y |
| Legacy `/synthese` `/cycle-actif` `/decision` `/ops1/*` | POC / parallel shells | **RETIRE LATER** (exclusion redesign premium complet) | — | — | Audit board `11:2` | Dette visuelle transitoire **enregistrée** tant qu’exposées · pas de redesign premium automatique · pas de RETIRE effectif en P3 |

### 11.2 Familles cibles P3 (contrat)

| Target family | In scope P3 | Notes |
| --- | --- | --- |
| **Projects** | Oui | Screen 01 family |
| **New Project** | Oui | page Figma `2:7` présente · design à produire |
| **Project Workspace** | Oui | page Figma `2:8` |
| **Decision & Confirmation** | Oui | page Figma `2:9` |
| **History & Evidence** | Oui | page Figma `2:10` (+ layers contextuels) |
| **Auth / Login** | **Oui — visual / interaction contract** | comportement fonctionnel **KEEP** · architecture Auth **OUT OF SCOPE P3** sauf blocker UX |
| **Motion & Interaction** | Oui (cross-cutting) | page Figma `2:11` |
| **States & Responsive** | Oui (cross-cutting) | page Figma `2:12` |
| Legacy POC shells | **RETIRE LATER** | exclusion redesign premium · dette visuelle si exposition significative |

### 11.3 Auth / Login — contrat P3

| Champ | Valeur |
| --- | --- |
| Target family | **Auth / Login** |
| Route | `/login` |
| Functional behavior | **KEEP** unless real functional gap discovered |
| Authentication architecture | **OUT OF SCOPE P3** unless UX evidence reveals a functional blocker requiring requalification |
| Visual / interaction contract | **IN SCOPE P3** |
| Visual requirement | Cohérent avec foundations P3 finales et langage Product · **≠** redesign Auth logic pour seule cohérence visuelle |

États minimum à revoir / concevoir :

- nominal ;
- loading / submitting ;
- invalid credentials / authentication rejection (si applicable) ;
- technical error ;
- session-related state si observable dans le produit actuel ;
- disabled / submitting action ;
- keyboard / focus behavior.

Accessibilité (contrat interaction-level) :

- labels ;
- focus-visible ;
- keyboard ;
- error association ;
- non-color-only states ;
- contrast ;
- responsive behavior.

### 11.4 Backlog Figma (point de départ — ≠ exhaustivité prouvée)

Projects · New Project · Project Workspace · Decision & Confirmation · History & Evidence · **Auth / Login** · Motion & Interaction · States & Responsive

= **candidate coverage** · inventaire repo + règle §11.0 = preuve de couverture retained. Page Figma Auth peut être ajoutée dans un design pass ultérieur ; l’absence de page ≠ exclusion du contrat.

---
```

### G4. P3-AC-10

```markdown
| **P3-AC-10** | Toute surface utilisateur conservée dans la cible Product est mappée à une target family P3 ou explicitement exclue avec justification ; aucune surface retained ne peut échapper silencieusement au contrat screen-by-screen. Inventaire repo-first conservé. |
```

### G5. Exit Criteria §21

```markdown
## 21. Exit Criteria P3 (validation globale — future)

P3 ne pourra être **VALIDATED** que lorsque :

1. Screen inventory complet.
2. **Retained user-visible surface coverage = COMPLETE** — toutes les surfaces utilisateur conservées sont mappées à une target family P3, ou exclusion explicite justifiée ; surfaces **RETIRE LATER** identifiées avec exposition transitoire / dette visuelle qualifiée ; aucun écran Product visible n’échappe implicitement au contrat P3.
3. Screen families nécessaires conçues (y compris **Auth / Login** visual/interaction contract).
4. États structurants conçus.
5. Confirmation / HumanDecision UX validée.
6. IA validée.
7. Visual language validé.
8. Motion contract suffisamment défini.
9. Responsive / accessibility contract suffisamment défini.
10. Figma reference frames identifiées.
11. Cross-screen coherence review PASS.
12. Findings fermés ou réserves explicitement acceptées.
13. Final Critical Review PASS.
14. Morris validation distincte.

```text
Artifact / Figma frame exists ≠ P3 exit proof
```

---
```

Full-product coverage check : retained Product surfaces mappées (Projects / New Project / Project Workspace / Decision & Confirmation / History & Evidence / Auth-Login) ; legacy POC = RETIRE LATER avec dette visuelle transitoire enregistrée ; aucune retained surface en « later / hors P3 / coherence only » silencieux.

Status finding: **CORRECTED / CLOSED** (documentaire).

## H. Non-regression

| Check | Status |
| --- | --- |
| P3 GO CONSUMED | YES |
| P3 AUTHORIZED / IN PROGRESS / NOT VALIDATED | YES |
| Figma REQUIRED DESIGN SURFACE | YES |
| Figma NOT VALIDATED | YES |
| Screen 01 NOT VALIDATED | YES |
| North Star EXPLORATORY CANDIDATE / NOT ADOPTED | YES |
| CC-D01 Option A prévaut | YES |
| Conversation = primary channel | YES |
| Chat-first ≠ Chat-only | YES |
| Recommendation ≠ HumanDecision | YES |
| Confirmation ≠ HumanDecision | YES |
| Project ≠ Cycle | YES |
| Journal/Memory ≠ SoT | YES |
| No permanent cockpit / method-first | YES |
| No P4 technical architecture | YES |
| No code / Delivery / RETIRE execution | YES |
| ZERO REAL | YES |
| runtime v3 NON ADOPTED | YES |
| Figma operator OPEN | YES |
| Morris Entry Directives / P2-D / CC-Dx unreopened | YES |

## I. Roadmap truth-sync

Nouveau tip CURRENT (historique préservé) :

```markdown
| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P3 OPENING TARGETED CORRECTION PASS 01** | 2026-10-04 06:20:46 +0200 — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P3 OPENING TARGETED CORRECTION PASS 01 COMPLETE AS LOCAL CANDIDATE — READY FOR CHATGPT P3 OPENING CLOSURE REVIEW** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Milestone **P3 — WORKSPACE / INTERACTION ARCHITECTURE** · Pass **OPENING TARGETED CORRECTION PASS 01** · Type **UX/UI / Interaction Architecture** () · CRITICAL · EVOL/DOC · **P2 VALIDATED BY MORRIS + INTEGRATED ON MAIN + POST-MERGE VERIFIED + CLOSED** (PR **#549**) · **P3 AUTHORIZED BY MORRIS / IN PROGRESS / NOT VALIDATED** · P3 Initialization / Design Contract = **COMPLETE AS LOCAL CANDIDATE** · ChatGPT P3 Opening Review #1 = **NOT READY — TARGETED CORRECTION REQUIRED** · **FCR-P3-OPEN-01 CORRECTED** (Figma structure = **13 TOP-LEVEL PAGES CONFIRMED** · content = **PARTIAL / EXPLORATORY / NOT VALIDATED**) · **FCR-P3-OPEN-02 CORRECTED** (retained user-visible surface coverage rule ESTABLISHED · **Auth/Login IN P3 VISUAL CONTRACT** / functional KEEP) · Screen design under formalized cycle = **NOT YET RESUMED** · Figma mutation = **NONE** · Screen 01 **NOT VALIDATED** · North Star **NOT ADOPTED** · document =  · branche  · base  @  · entry handoff  / blob  · **P4→P8 NOT AUTHORIZED** · production routing = **NOT SELECTED** · Cognitive Completion = **NOT PROVEN** · runtime v3 = **NON ADOPTED** · **ZERO REAL** · next = **CHATGPT P3 OPENING CLOSURE REVIEW** · **≠** Opening Review PASS · **≠** P3 VALIDATED · **≠** Figma VALIDATED · **≠** Screen 01 VALIDATED · **≠** North Star ADOPTED · **≠** P4 AUTHORIZED · **≠** project commit/push/PR/merge · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT /  / PR evidence** |
```

## J. Figma mutation check

**NONE** — correction documentaire uniquement · READ ONLY.

## K. Fake / Real

**ZERO REAL** · design evidence only · Figma frame ≠ runtime proof · READY FOR REAL = NO.

## L. Validations

```text
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
?? .tmp-sfia-review/_build_p3_open_tc01_pack.py
?? projects/sfia-studio/product-simplification/03-chat-first-product-simplification-workspace-interaction-architecture.md

M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md

.tmp-sfia-review/chatgpt-review.md                 | 285 +++++++++------------
 .../convergence/sfia-studio-convergence-roadmap.md |   2 +
 2 files changed, 121 insertions(+), 166 deletions(-)
diff --check: PASS
cached: (empty)
```

Scope attendu : P3 doc + Roadmap + tmp pack. Pas de code. Pas de project commit.

## M. Anti-claims

Opening Review PASS = NO · P3 VALIDATED = NO · Figma VALIDATED = NO · Screen 01 VALIDATED = NO · North Star ADOPTED = NO · UX final adopted = NO · P4 AUTHORIZED = NO · P5 AUTHORIZED = NO · READY FOR REAL = NO · production routing NOT SELECTED · Cognitive Completion NOT PROVEN · runtime v3 NON ADOPTED · ZERO REAL.

## N. Verdict

**READY FOR CHATGPT P3 OPENING CLOSURE REVIEW — TARGETED CORRECTION PASS 01 COMPLETE — FCR-P3-OPEN-01 CLOSED — FCR-P3-OPEN-02 CLOSED — P3 NOT YET VALIDATED**

Next gate: **ChatGPT P3 Opening Closure Review** (vérifier vérité Figma · couverture retained · Auth/Login · non-régression · absence P4 leakage).

## O. Full modified P3 document (obligatoire — fichier modifié)

Path: `projects/sfia-studio/product-simplification/03-chat-first-product-simplification-workspace-interaction-architecture.md` · lines=658 · bytes=32312

<details><summary>Full P3 document content</summary>

```markdown
# SFIA Studio — Chat-First Product Simplification — P3 Workspace / Interaction Architecture

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| **Milestone** | **P3 — WORKSPACE / INTERACTION ARCHITECTURE** |
| **Pass** | **P3 OPENING TARGETED CORRECTION PASS 01** (après Initialization / Design Contract LOCAL CANDIDATE) |
| **Type SFIA / guidance** | UX/UI · Interaction Architecture · `cyc:ux-ui` / `ckc:studio:ux-ui` |
| **Profil** | **CRITICAL** |
| **Typologie** | **DOC** dans macro **EVOL** |
| **Base Git** | `origin/main` @ `e99d9ad5cc7011e414b00006e88ac33e11b5ce87` (PR **#549** merge P2) |
| **Branche locale** | `docs/sfia-studio-chat-first-product-simplification-p3-workspace-interaction-architecture` |
| **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
| **Statut P3** | **AUTHORIZED BY MORRIS / IN PROGRESS / NOT VALIDATED** |
| **P2** | **VALIDATED BY MORRIS + INTEGRATED ON MAIN + POST-MERGE VERIFIED + CLOSED** |
| **Figma** | **REQUIRED DESIGN SURFACE** · structure = **13 TOP-LEVEL PAGES CONFIRMED** · content = **PARTIAL / EXPLORATORY / NOT VALIDATED** · READ ONLY ce pass |
| **Figma file** | [SFIA Studio — P3 Workspace & Interaction Architecture](https://www.figma.com/design/m4g8j0gNbEzfIuH6S9AZJF) · fileKey `m4g8j0gNbEzfIuH6S9AZJF` |
| **runtime v3** | **NON ADOPTED** |
| **READY FOR REAL** | **NO** |
| **P4→P8** | **NOT AUTHORIZED** |
| **Langue** | Français (identifiants Product canoniques préservés) |
| **Fichier** | `projects/sfia-studio/product-simplification/03-chat-first-product-simplification-workspace-interaction-architecture.md` |
| **Date** | 2026-10-04 · Europe/Paris |

> **Lecture rapide.** P3 transforme **HOW STUDIO FUNCTIONS** (P2) en **HOW THE PILOT INTERACTS WITH STUDIO**. Ce pass ouvre le cycle, crée le contrat de conception/revue écran par écran, inventorie le repo UI et le Figma pré-cycle. **Aucune** maquette nouvelle · **aucune** validation Screen 01 · **aucun** code · **aucun** P4 · **≠ P3 VALIDATED**.

---

## 1. Autorité / décisions consommées

### 1.1 Trajectoire

```text
C1 Product Simplification = VALIDATED / INTEGRATED / CLOSED
P2 Functional Operating Model = VALIDATED BY MORRIS + INTEGRATED ON MAIN + POST-MERGE VERIFIED + CLOSED
  (PR #549 · merge e99d9ad5… · commit 45f422ae…)
P3 Workspace / Interaction Architecture = AUTHORIZED BY MORRIS / IN PROGRESS
P4→P8 = NOT AUTHORIZED
```

### 1.2 Morris P3 Entry Directives — explicit decision / cycle constraints

Décision Morris explicite de démarrage P3 (sans inventer un ID P3-D-* tant qu’aucun registre P3 n’est défini) :

1. Figma fait partie obligatoire du cycle.
2. L’historique design utilisable était surtout Penpot ; pas de projet Figma cible historique.
3. Un nouveau fichier Figma a été créé avant la matérialisation formelle Cursor/Git.
4. Ce travail Figma **ne doit pas être jeté** : REUSE après requalification.
5. Cible UX = **PREMIUM** / proche d’une UX finale produit.
6. Revue **écran par écran**.
7. Cohérence chat-first structurante (P2 + CC-D01 Option A).
8. Interactions / transitions / micro-interactions lorsque valeur réelle.
9. Le cycle peut prendre le temps nécessaire — pas un wireframe rapide ni un reskin.
10. Opérateur Figma (ChatGPT / Cursor / répartition) = **OPEN** — Morris décidera au moment approprié.

### 1.3 Décisions v3 UX héritées (inputs — non reouvertes)

| ID | Contenu | Usage P3 |
| --- | --- | --- |
| **CC-D01 Option A** | Prévaut pour Studio | Challenger toute résurrection « cockpit avant chat » |
| **CC-D03** | Panneau vivant | Contexte LPS/continuité on-demand |
| **CC-D05** | Décisions / gates | Authority semantics visibles |
| **CC-D06** | Confirmations N1–N3 | Confirmation ≠ HumanDecision |
| **CC-D12** | Fallback CKC silencieux | Pas d’admin méthode en flux nominal |
| **CC-D13** | Project ≠ Cycle | Surfaces et navigation distinctes |
| **P2-D-01…04** | Rec/HD · closure · Confirmation · lifecycle | Invariants UX non négociables |

Aucune nouvelle décision structurante P3 n’est inventée ni consommée dans ce pass.

---

## 2. Hiérarchie de sources / règles épistémiques

```text
Git + décisions Morris
  > P2 Functional Operating Model (VALIDATED)
  > v3 doctrine applicable (CC-D* / framings)
  > repo evidence (UI actuelle)
  > Figma exploratory candidate
  > hypothesis / recommendation
```

| Source | Autorité |
| --- | --- |
| Git / Morris | Construction & gates |
| P2 | Contrats fonctionnels contraignants |
| CKC `ckc:studio:ux-ui` | Guidance cognitive · **authority NONE** |
| Framing 11 UX IA | **HARVEST historique** · « Cockpit avant chat » **≠** vérité actuelle si contradiction CC-D01/P2 |
| Repo UI | Preuve CURRENT · classification KEEP/HARVEST/ADAPT/… |
| Figma pré-cycle | Structure 13 pages **CONFIRMED** · content **PARTIAL / EXPLORATORY** · NOT VALIDATED · NOT execution source |
| Penpot | Historical design evidence · HARVEST only |

---

## 3. Objectif P3

**Transformer HOW STUDIO FUNCTIONS (P2) en HOW THE PILOT INTERACTS WITH STUDIO.**

Le Pilote doit pouvoir piloter Studio principalement par conversation avec Nora, tout en préservant :

- frontières d’autorité (Recommendation / HumanDecision / Confirmation) ;
- currentness / provenance ;
- LPS / ProjectTrajectory ;
- Evidence / Recovery / Resume ;
- progressive disclosure ;
- cohérence visuelle premium cross-screen.

---

## 4. Scope / Non-scope

### 4.1 In scope

IA · surfaces · navigation · interaction model · progressive disclosure · Confirmation UX · HumanDecision UX · Evidence UX · recovery/resume UX · empty/loading/error/blocked · motion · responsive · accessibility · visual system · component strategy · screen contract · Figma as visual contract surface.

### 4.2 Out of scope

| Hors scope | Route |
| --- | --- |
| Architecture technique / DB / schema / API / persistence / state machine | **P4** |
| Implémentation Product / Delivery | **P5** |
| Global Integrated QA / Figma↔runtime proof | **P6** |
| Fresh E2E / REAL | **P7** (+ GO distinct) |
| Production routing / mapping modèle | **P8** |
| Mutation Figma / validation Screen 01 dans ce pass | **NEXT design passes** après Opening Review |

---

## 5. Invariants P2 hérités (impact UX)

1. Chat-first ≠ Chat-only.
2. Conversation = primary interaction channel.
3. Nora = cognition · **≠** Product authority.
4. Studio = authoritative materialization / enforcement.
5. Recommendation ≠ HumanDecision.
6. Confirmation ≠ HumanDecision · porte sur l’effet inspecté.
7. Execution = branche optionnelle / transverse.
8. Review ≠ Validation.
9. Validated Deliverable ≠ whole Exit Proof.
10. Cycle close ≠ next Cycle activation.
11. Project ≠ Cycle (CC-D13).
12. Journal / Memory ≠ source of truth · ≠ second cockpit.
13. Functional Routes ≠ runtime taxonomy.
14. Cognitive escalation ≠ authority escalation.
15. Conversation ≠ durable mutation.
16. Recovery reconstruit current truth · ≠ stale-session replay.

---

## 6. Existing Product UX Audit (repo-first)

> Audit au HEAD `e99d9ad5…`. Aucune modification de code. Classification = disposition P3 candidate.

### 6.1 Générations UI parallèles observées

| Gen | Surfaces / paths | Rôle | Classification | Gap vs P2 |
| --- | --- | --- | --- | --- |
| **A — Legacy StudioShell** | `components/shell/*` · routes `/synthese` `/cycle-actif` `/decision` · features `synthese` `cycle-actif` `decision` | Shell rail+topbar+copilot fixe · POC vertical-slice | **HARVEST** shell patterns · **FREEZE/RETIRE LATER** composition | Chat secondaire · cockpit multi-panneaux · géométrie fixe · jargon cycle |
| **B — D1 Workspace** | `features/d1/*` · `/workspace` `/projects/*` `/nouvelle-demande` · `D1AppShell` `WorkspaceHomeView` `ProjectCockpitView` `IntakeView` `ConfirmationPanel` | Entrée workspace + intake conversationnel + cockpit projet | **ADAPT** | Structure intermédiaire · duplication avec pre-M6 · « Cockpit » naming |
| **C — Pre-M6 Product UI** | `features/pre-m6-product-ui/*` · `/studio` `/studio/projects/*` · `ProductShell` `ProjectsPage` `NewProjectIntentionPage` `ProjectWorkspacePage` + surfaces Conversation/Journal/LPS/Trajectory/History/Recovery/Lifecycle | Chat-first continuity le plus proche de P2 | **KEEP + REDESIGN** | 3 colonnes compétitives · drawer dense · héritage visuel · authority semantics à renforcer |
| **D — Studio-projects / Project-assistant** | `features/studio-projects/*` · `features/project-assistant/*` | Panneaux LPS/history/recovery · orchestration Nora | **HARVEST** capacités · **ADAPT** surfaces | Densité / jargon / risque second cockpit |
| **E — Vertical slice / Ops1** | `features/vertical-slice-ui` · `ops1` · `nouvelle-demande` legacy paths | POC / ops | **FREEZE / RETIRE LATER** | Hors trajectoire Product Simplification nominale |
| **F — Auth** | `/login` | Authentification | **KEEP** (comportement fonctionnel) + **REDESIGN** (contrat visuel / interaction P3) | Auth architecture hors P3 · UX premium **IN SCOPE** |

### 6.2 Routes / pages inventoriées

| Route | Génération active | Job Product | Disposition candidate |
| --- | --- | --- | --- |
| `/` → redirect `/synthese` | A | Home historique | **REDESIGN** entry → Projects chat-first |
| `/synthese` | A | Synthèse slice | **HARVEST** états · **RETIRE LATER** surface |
| `/cycle-actif` | A | Cycle actif POC | **RETIRE LATER** |
| `/decision` | A | Gate Morris visuelle POC | **HARVEST** authority cues · **REDESIGN** dans Decision & Confirmation |
| `/workspace` | B | Liste projets D1 | **ADAPT** → family Projects |
| `/projects/new` | B | New project form | **ADAPT** → New Project conversationnel |
| `/projects/[id]` | B | Project cockpit | **REDESIGN** → Project Workspace |
| `/nouvelle-demande` | B | Intake conversationnel | **HARVEST** → New Project / Nora entry |
| `/ops1/nouvelle-demande` | E | Ops1 | **FREEZE** |
| `/studio` | C | Projects home chat-first | **KEEP + REDESIGN** → Screen 01 family |
| `/studio/projects/new` | C | New project intention | **KEEP + REDESIGN** → Screen 02 |
| `/studio/projects/[id]` | C | Project workspace | **KEEP + REDESIGN** → Screen 03 |
| `/login` | F | Auth / Login | **KEEP** (fonctionnel) + **visual/interaction IN SCOPE P3** → family **Auth / Login** |

### 6.3 Surfaces Product (pre-M6) — capacités utiles

| Surface | Path | Capacité | Classification |
| --- | --- | --- | --- |
| ConversationSurface | `pre-m6-product-ui/surfaces/` | Canal primaire Nora | **KEEP** · redesign présentation |
| JournalSurface | idem | Continuité sujets | **KEEP** · ≠ SoT |
| LpsSurface | idem | LPS projection | **KEEP** · on-demand |
| TrajectorySurface | idem | ProjectTrajectory | **KEEP** · Recommended ≠ decided |
| HistorySurface | idem | Historique | **KEEP** |
| RecoverySurface | idem | Recovery UX | **KEEP** · no stale invent |
| LifecycleSurface / CycleExitStatePanel | idem | Lifecycle | **ADAPT** · P2-D-02/04 |
| ConfirmationPanel (D1) | `d1/confirmation/` | Confirmation | **ADAPT** · P2-D-03 |

### 6.4 Risques d’architecture UI parallèle

1. **Trois+ shells** (StudioShell · D1 · ProductShell) = dette de convergence.
2. **Home redirect** vers `/synthese` (legacy) plutôt que `/studio` chat-first.
3. **Naming « Cockpit »** (D1) risque de résurrection framing 11.
4. **Aucun RETIRE effectif en P3** — seulement classification · retrait après P5/P6 + gate.

---

## 7. Historical Penpot / prior design assets

| Asset | Qualification |
| --- | --- |
| Penpot historical work | **historical design evidence / HARVEST only** |
| Restauration Penpot comme design source courante | **INTERDIT** |
| Ancien Figma / contrats UX docs (`14-ux-ui-contract.md`, packs Ops1, etc.) | **HARVEST** patterns · **≠** SoT P3 |

---

## 8. Figma Registry (READ ONLY inventory)

### 8.1 Qualification fichier

| Champ | Valeur |
| --- | --- |
| Nom | SFIA Studio — P3 Workspace & Interaction Architecture |
| URL | https://www.figma.com/design/m4g8j0gNbEzfIuH6S9AZJF |
| fileKey | `m4g8j0gNbEzfIuH6S9AZJF` |
| Cas template §6.6 | **FIGMA AVAILABLE — NOT VALIDATED** |
| Origine | Créé pré-cycle (ChatGPT/Figma MCP) avant matérialisation Cursor/Git |
| Statut | **EXPLORATORY PRE-CYCLE CANDIDATE — REUSABLE — NOT VALIDATED — NOT PRODUCT TRUTH — NOT EXECUTION SOURCE — NOT DELIVERY READY** |
| Mutation ce pass | **NONE** |

### 8.2 Pages top-level — structure CONFIRMED (13)

> **Correction FCR-P3-OPEN-01.** Preuve autoritative ChatGPT Figma MCP READ ONLY (post Opening Review #1). La qualification antérieure « seule page `0:1` / page-level PARTIAL » est **retirée** comme factuellement incorrecte.
>
> **Distinction obligatoire :**
>
> - **Figma file structure** = **CONFIRMED** (13 pages top-level PRESENT).
> - **Designed content** = **PARTIAL / EXPLORATORY**.
> - **Empty/planned pages** = **PRESENT / NOT YET DESIGNED** (page exists ≠ design exists).
> - **Existing designed boards** = **EXPLORATORY PRE-CYCLE CANDIDATE / NOT VALIDATED**.
> - **Aucune page/frame = VALIDATED.** Frame exists ≠ screen validated.

| Page id | Nom | Structure | Contenu design | Statut |
| --- | --- | --- | --- | --- |
| `0:1` | 00 — P3 North Star | PRESENT | Board `4:2` exploratoire | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| `2:2` | 01 — Current Product Audit | PRESENT | Board `11:2` exploratoire | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| `2:3` | 02 — IA & Target Flows | PRESENT | Board `12:2` exploratoire | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| `2:4` | 03 — Foundations | PRESENT | Specimen `3:75` exploratoire | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| `2:5` | 04 — Components | PRESENT | Foundations/components exploratoires (HARVEST / REQUALIFY) | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| `2:6` | 05 — Screen 01 · Projects | PRESENT | Frame `8:2` exploratoire / partiel | PRE-CYCLE CANDIDATE · **Screen 01 NOT VALIDATED** |
| `2:7` | 06 — Screen 02 · New Project | PRESENT | **DESIGN NOT YET PRODUCED** | PAGE PRESENT · NOT VALIDATED |
| `2:8` | 07 — Screen 03 · Project Workspace | PRESENT | **DESIGN NOT YET PRODUCED** | PAGE PRESENT · NOT VALIDATED |
| `2:9` | 08 — Screen 04 · Decision & Confirmation | PRESENT | **DESIGN NOT YET PRODUCED** | PAGE PRESENT · NOT VALIDATED |
| `2:10` | 09 — Screen 05 · History & Evidence | PRESENT | **DESIGN NOT YET PRODUCED** | PAGE PRESENT · NOT VALIDATED |
| `2:11` | 10 — Motion & Interaction | PRESENT | **DESIGN NOT YET PRODUCED** | PAGE PRESENT · NOT VALIDATED |
| `2:12` | 11 — States & Responsive | PRESENT | **DESIGN NOT YET PRODUCED** | PAGE PRESENT · NOT VALIDATED |
| `2:13` | 12 — Review Log | PRESENT | **DESIGN NOT YET PRODUCED** / log prévu | PAGE PRESENT · NOT VALIDATED |

### 8.3 Frames / boards confirmés

| Frame | node | Dimensions | Parent page | Rôle | Maturity CKC | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| P3 Foundations Specimen | `3:75` | 1440×1024 | 03 — Foundations (`2:4`) | Tokens/couleurs/specimen premium candidat | EXPLORATORY | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| P3 North Star Board | `4:2` | 1600×1320 | 00 — P3 North Star (`0:1`) | North Star + anatomy + screen review order | EXPLORATORY | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| Screen 01 · Projects / Default | `8:2` | 1440×1024 | 05 — Screen 01 · Projects (`2:6`) | Premier écran Projects | EXPLORATORY / PARTIAL | PRE-CYCLE CANDIDATE · **Screen 01 NOT VALIDATED** |
| Current Product Audit Board | `11:2` | 1600×1280 | 01 — Current Product Audit (`2:2`) | Audit 3 générations UI + risques | EXPLORATORY | PRE-CYCLE CANDIDATE · NOT VALIDATED |
| P3 IA & Target Flows Board | `12:2` | 1660×1320 | 02 — IA & Target Flows (`2:3`) | IA cible + flows + decision candidates | EXPLORATORY | PRE-CYCLE CANDIDATE · NOT VALIDATED |

Foundations/tokens/components exploratoires (Button, Status Chip, Project Card, etc.) observés via instances Screen 01 / Foundations = **HARVEST / REQUALIFY** · **≠ ADOPT**.

---

## 9. P3 North Star Candidate (EXPLORATORY)

Propositions présentes dans Figma — **CANDIDATE uniquement** jusqu’à décision Morris :

- conversation-led workspace ;
- minimal global navigation ;
- context on demand (LPS / Trajectory / Evidence / Journal) ;
- calm-premium visual language ;
- typographie système candidate (Geist évoqué en exploration) ;
- accents cobalt/violet ;
- global Nora entry ;
- project cards ;
- motion as continuity.

**Statut : EXPLORATORY CANDIDATE — NOT ADOPTED — NOT VALIDATED.**

---

## 10. Information Architecture

### 10.1 Règle doctrinale

**CC-D01 Option A prévaut.**

Challenger toute résurrection implicite de :

- cockpit avant chat ;
- multi-panel permanent workspace ;
- method-first navigation ;
- visible internal workflow SFIA.

Le framing 11 (« Cockpit avant chat ») = **HARVEST historique** · **≠** vérité P3 si contradiction.

### 10.2 IA candidate (depuis board `12:2` — non adoptée)

```text
Projects → New Project → Project Workspace
  → Governed Moment (Decision / Confirmation)
  → Result & Evidence
  → retour conversation
```

Couches workspace : PRIMARY conversation · ON DEMAND état/trajectoire · WHEN MATERIAL decision/confirmation · AFTER EFFECT evidence · RESUME journal/history.

### 10.3 Questions ouvertes (Morris)

| Question | Options (non décidées) |
| --- | --- |
| Adopter la North Star / IA conversation-led minimale ? | Adopt / Amend / Replace |
| Modèle de présentation du contexte ? | Drawer / sheet / inline / hybrid |
| Navigation globale minimale ? | Rail 3 items / autre |
| Home Product = `/studio` vs redirect legacy ? | Redirect change later in Delivery · design first |

---

## 11. Screen / Surface Inventory

### 11.0 Règle — couverture des surfaces utilisateur retained (FCR-P3-OPEN-02)

Toute surface utilisateur **conservée** dans la cible Product doit :

- **A.** être mappée à une **target screen/surface family P3** ;

**OU**

- **B.** être **explicitement exclue** avec justification documentée.

Une surface retained **ne peut pas** échapper au contrat premium / screen-by-screen uniquement parce qu’elle est fonctionnellement stable (« later », « hors P3 », « coherence only » sans justification = **interdit**).

Surfaces classées **RETIRE LATER** :

- ne nécessitent **pas** automatiquement un redesign premium complet ;
- doivent être **explicitement qualifiées** ;
- si elles restent exposées significativement dans la trajectoire produit, leur **dette visuelle transitoire** doit être enregistrée.

La couverture porte sur les **surfaces utilisateur / Product jobs**, pas sur chaque fichier React interne.

### 11.1 Inventaire existant → familles cibles

| Existing | Product job | Target family candidate | States needed | P2 invariant | Figma coverage | Missing design |
| --- | --- | --- | --- | --- | --- | --- |
| `/studio` ProjectsPage | Reprendre / créer | **Projects** | empty / loading / error / stale | chat-first entry | Screen 01 `8:2` exploratory | empty/error/responsive |
| `/workspace` D1 home | Liste projets | **Projects** (converge) | idem | Project focus | page `2:6` / frame `8:2` | merge with Screen 01 |
| `/`→`/synthese` | Home legacy | **Projects** (entry redesign) | — | no cockpit-first | — | replace entry (design first · redirect Delivery later) |
| New project D1/pre-M6 | Intention | **New Project** | clarify / incomplete | Deliverable≠execute | page `2:7` PRESENT / design not yet produced | full screen family |
| ProjectWorkspacePage / ProjectCockpitView | Pilotage projet | **Project Workspace** | blocked / reserved / awaiting | Conversation primary | page `2:8` PRESENT / design not yet produced · anatomy North Star | full screen + states |
| ConfirmationPanel / Decision screen | Authority moments | **Decision & Confirmation** | N-levels / fail-closed | Rec≠HD≠Conf | page `2:9` PRESENT / design not yet produced | exact presentation |
| History/Evidence/LPS/Trajectory/Journal/Recovery | Continuity & proof | **History & Evidence** (+ contextual layers) | stale / missing | Journal≠SoT · Recovery truth | page `2:10` PRESENT / design not yet produced | proof access UX |
| Lifecycle / exit panels | Closure / transition | **Project Workspace** + governed moments | exit eligible | P2-D-02/04 | — | close≠next |
| `/login` | Authentification | **Auth / Login** | voir §11.3 | Auth UX ≠ Auth architecture | **manquante** (pas encore de page Figma dédiée) | contrat visuel + états + a11y |
| Legacy `/synthese` `/cycle-actif` `/decision` `/ops1/*` | POC / parallel shells | **RETIRE LATER** (exclusion redesign premium complet) | — | — | Audit board `11:2` | Dette visuelle transitoire **enregistrée** tant qu’exposées · pas de redesign premium automatique · pas de RETIRE effectif en P3 |

### 11.2 Familles cibles P3 (contrat)

| Target family | In scope P3 | Notes |
| --- | --- | --- |
| **Projects** | Oui | Screen 01 family |
| **New Project** | Oui | page Figma `2:7` présente · design à produire |
| **Project Workspace** | Oui | page Figma `2:8` |
| **Decision & Confirmation** | Oui | page Figma `2:9` |
| **History & Evidence** | Oui | page Figma `2:10` (+ layers contextuels) |
| **Auth / Login** | **Oui — visual / interaction contract** | comportement fonctionnel **KEEP** · architecture Auth **OUT OF SCOPE P3** sauf blocker UX |
| **Motion & Interaction** | Oui (cross-cutting) | page Figma `2:11` |
| **States & Responsive** | Oui (cross-cutting) | page Figma `2:12` |
| Legacy POC shells | **RETIRE LATER** | exclusion redesign premium · dette visuelle si exposition significative |

### 11.3 Auth / Login — contrat P3

| Champ | Valeur |
| --- | --- |
| Target family | **Auth / Login** |
| Route | `/login` |
| Functional behavior | **KEEP** unless real functional gap discovered |
| Authentication architecture | **OUT OF SCOPE P3** unless UX evidence reveals a functional blocker requiring requalification |
| Visual / interaction contract | **IN SCOPE P3** |
| Visual requirement | Cohérent avec foundations P3 finales et langage Product · **≠** redesign Auth logic pour seule cohérence visuelle |

États minimum à revoir / concevoir :

- nominal ;
- loading / submitting ;
- invalid credentials / authentication rejection (si applicable) ;
- technical error ;
- session-related state si observable dans le produit actuel ;
- disabled / submitting action ;
- keyboard / focus behavior.

Accessibilité (contrat interaction-level) :

- labels ;
- focus-visible ;
- keyboard ;
- error association ;
- non-color-only states ;
- contrast ;
- responsive behavior.

### 11.4 Backlog Figma (point de départ — ≠ exhaustivité prouvée)

Projects · New Project · Project Workspace · Decision & Confirmation · History & Evidence · **Auth / Login** · Motion & Interaction · States & Responsive

= **candidate coverage** · inventaire repo + règle §11.0 = preuve de couverture retained. Page Figma Auth peut être ajoutée dans un design pass ultérieur ; l’absence de page ≠ exclusion du contrat.

---

## 12. Screen-by-screen Review Method

Chaque famille d’écran :

```text
A. Current-state evidence (repo + captures)
B. Product job
C. P2 invariants applicables
D. Target flow
E. Information hierarchy
F. Interaction contract
G. States (empty/loading/error/blocked/stale/…)
H. Authority semantics (Rec / HD / Confirmation)
I. Accessibility
J. Responsive behavior
K. Motion behavior (+ reduced-motion)
L. Figma candidate (mutate only after GO design pass)
M. ChatGPT critical review
N. Morris decision if structural
O. Consolidation in this P3 document
```

Règles :

- Ne pas passer au prochain écran avec blocker structurel non résolu.
- Détail cosmétique non structurant peut rester ouvert.
- Artifact Figma exists ≠ validated screen.

---

## 13. Visual Quality Contract — PREMIUM / NEAR-FINAL

Exigence Morris : UX **PREMIUM — NEAR-FINAL PRODUCT QUALITY**.

Cela signifie (sans hardcoder le style) :

- forte hiérarchie visuelle ;
- simplicité apparente ;
- cohérence cross-screen ;
- réduction du jargon SFIA ;
- progressive disclosure ;
- typographie et spacing système ;
- états complets ;
- accessibilité réelle ;
- focus / focus-visible ;
- affordances claires ;
- motion significative ;
- **pas** de SaaS dashboard générique ;
- **pas** de décoration gratuite ;
- **pas** d’ambiguïté visuelle sur l’autorité ;
- design suffisamment abouti pour servir de référence P5 **après** validation.

---

## 14. Motion & Interaction Contract

Motion **peut** servir : continuity · focus · hierarchy · currentness · reveal/hide context · confirmation of state change · spatial continuity.

Motion **ne doit pas** : masquer une transition d’autorité · rendre Recommendation ≈ décision · créer latence artificielle · être purement décorative · compromettre `prefers-reduced-motion`.

Reduced motion = **REQUIRED** dans le contrat.

Timings/easing exacts = **OPEN** jusqu’au travail Figma Motion.

---

## 15. HumanDecision / Confirmation UX

P3 doit rendre **visuellement difficile** de confondre :

| Concept | Traitement UX requis |
| --- | --- |
| Recommendation | Proposée / challengeable · non autoritaire |
| HumanDecision | Jugement Product structurel · provenance claire |
| Confirmation | Autorise un **effet inspecté** lorsque requis · ≠ HD · n’élargit ni scope ni authority (P2-D-03) |

Ne pas fusionner Confirmation et HumanDecision pour « simplifier ».

---

## 16. Evidence / Currentness / Recovery UX

Besoins UX (sans représentation technique P4) :

- accès Evidence / ReviewBundle business-first ;
- source / currentness visible ;
- états stale / blocked / error ;
- Resume / Recovery sans invention ;
- incomplete context → clarify / rederive ;
- Journal = orientation · ≠ SoT.

---

## 17. Responsive & Accessibility

| Sujet | Contrat |
| --- | --- |
| Desktop-first | Candidate |
| Breakpoints à étudier | large · laptop · compact desktop · tablet si pertinent |
| Mobile | Qualifier besoin/non-besoin · **ne pas inventer** automatiquement |
| A11y | keyboard · focus · contrast · labels · reduced-motion · non-color-only · focus management modal/sheet · SR semantics at interaction-contract level |
| WCAG claim | **INTERDIT** sans preuve |

---

## 18. Component / Foundation Strategy

Besoin d’un **design system local SFIA Studio** (tokens, typography, effects, Button, Status Chip, Project Card…).

Travail Figma exploratoire = **HARVEST / REQUALIFY** · **≠ ADOPT automatique**.

Pas de dépendance obligatoire Material / Simple Design System.

---

## 19. Decision Register / Open Questions

### 19.1 Explicit / inherited

| Item | Statut |
| --- | --- |
| Morris P3 Entry Directives | CONSUMED |
| P2-D-01…04 | ADOPTED / CLOSED |
| CC-D01/03/05/06/12/13 | Inherited inputs |

### 19.2 Open structural (Morris later)

| Sujet | Statut |
| --- | --- |
| IA / North Star cible | OPEN |
| Global navigation model | OPEN |
| Context presentation model | OPEN |
| Confirmation presentation model | OPEN |
| Visual reference adoption (premium system) | OPEN |
| Responsive contract (si structurel) | OPEN |
| Figma operator assignment (ChatGPT/Cursor/…) | **OPEN — MORRIS WILL ASSIGN PER DESIGN PASS** |

Critères de choix opérateur (non attribution) : cohérence Product/doctrine · travail visuel natif · dépendance repo/runtime · volume déclinaisons · comparaison code/design · risque dérive sémantique.

---

## 20. P3 Acceptance Criteria (documentaires / design)

| ID | Critère |
| --- | --- |
| **P3-AC-01** | Conformité invariants P2 préservée dans chaque famille d’écran. |
| **P3-AC-02** | Audit repo UI des générations présentes documenté (pas seulement pain points connus). |
| **P3-AC-03** | Architecture de navigation cohérente avec chat-first / CC-D01. |
| **P3-AC-04** | Chat-first réel : conversation = canal primaire · surfaces de soutien proportionnées. |
| **P3-AC-05** | Project ≠ Cycle visible dans l’IA et les headers. |
| **P3-AC-06** | Authority semantics : Rec / HD / Confirmation distincts. |
| **P3-AC-07** | Progressive disclosure du contexte (pas de cockpit permanent). |
| **P3-AC-08** | États critiques conçus (empty/loading/error/blocked/stale au minimum par famille). |
| **P3-AC-09** | Evidence / recovery / currentness UX définis. |
| **P3-AC-10** | Toute surface utilisateur conservée dans la cible Product est mappée à une target family P3 ou explicitement exclue avec justification ; aucune surface retained ne peut échapper silencieusement au contrat screen-by-screen. Inventaire repo-first conservé. |
| **P3-AC-11** | Visual coherence premium cross-screen. |
| **P3-AC-12** | Motion contract + reduced-motion. |
| **P3-AC-13** | Accessibility contract interaction-level. |
| **P3-AC-14** | Responsive contract (desktop-first + breakpoints étudiés). |
| **P3-AC-15** | Figma frames reviewed (pas seulement existantes). |
| **P3-AC-16** | No P4 leakage (pas DB/API/schema/state machine). |
| **P3-AC-17** | No parallel Product architecture / second Nora. |
| **P3-AC-18** | No code / no Delivery claim dans P3. |

---

## 21. Exit Criteria P3 (validation globale — future)

P3 ne pourra être **VALIDATED** que lorsque :

1. Screen inventory complet.
2. **Retained user-visible surface coverage = COMPLETE** — toutes les surfaces utilisateur conservées sont mappées à une target family P3, ou exclusion explicite justifiée ; surfaces **RETIRE LATER** identifiées avec exposition transitoire / dette visuelle qualifiée ; aucun écran Product visible n’échappe implicitement au contrat P3.
3. Screen families nécessaires conçues (y compris **Auth / Login** visual/interaction contract).
4. États structurants conçus.
5. Confirmation / HumanDecision UX validée.
6. IA validée.
7. Visual language validé.
8. Motion contract suffisamment défini.
9. Responsive / accessibility contract suffisamment défini.
10. Figma reference frames identifiées.
11. Cross-screen coherence review PASS.
12. Findings fermés ou réserves explicitement acceptées.
13. Final Critical Review PASS.
14. Morris validation distincte.

```text
Artifact / Figma frame exists ≠ P3 exit proof
```

---

## 22. Downstream Routing

| Phase | Contenu |
| --- | --- |
| **P4** | Technical / Semantic Architecture Delta only |
| **P5** | Implementation des décisions P3/P4 validées |
| **P6** | Integrated QA + runtime/Figma comparison |
| **P7** | Fresh E2E / REAL sous gate |
| **P8** | Evidence-based requalification |

---

## 23. Gates actuels / Anti-claims

| Gate | Statut |
| --- | --- |
| P2 | CLOSED / INTEGRATED |
| Morris P3 GO | CONSUMED |
| P3 Initialization / Design Contract | COMPLETE AS LOCAL CANDIDATE (si validations PASS) |
| ChatGPT P3 Opening Review #1 | **NOT READY — TARGETED CORRECTION REQUIRED** (historique) |
| Opening Targeted Correction Pass 01 | **COMPLETE AS LOCAL CANDIDATE** (si validations PASS) |
| FCR-P3-OPEN-01 / FCR-P3-OPEN-02 | **CORRECTED** (documentaire) |
| ChatGPT P3 Opening Closure Review | **NOT STARTED / NEXT** |
| Screen design under formalized cycle | **NOT YET RESUMED** (Figma pré-cycle = harvest · aucune mutation ce pass) |
| P3 VALIDATED | **NO** |
| Figma VALIDATED | **NO** |
| Screen 01 VALIDATED | **NO** |
| UX final adopted | **NO** |
| P4 AUTHORIZED | **NO** |
| P5 AUTHORIZED | **NO** |
| READY FOR REAL | **NO** |
| production routing | **NOT SELECTED** |
| Cognitive Completion | **NOT PROVEN** |
| runtime v3 | **NON ADOPTED** |

---

## 24. Next gate

```text
ChatGPT P3 Opening Closure Review
  → si PASS : Design Contract Opening stabilisé (≠ P3 VALIDATED)
  → arbitrage design structurant Morris
  → puis seulement reprise mutations Figma écran par écran
```

**Ne pas reprendre automatiquement Figma dans ce pass.**

---

*Fin du document P3 — OPENING TARGETED CORRECTION PASS 01 — P3 AUTHORIZED / NOT VALIDATED — Figma structure 13 pages CONFIRMED / content PARTIAL EXPLORATORY — ZERO REAL.*

```

</details>
