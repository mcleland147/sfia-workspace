# SFIA Review Pack — FULL — CRITICAL

## 00. Identity

| Field | Value |
| --- | --- |
| Timestamp UTC | 2026-10-22T17:55:07Z |
| Cycle | AKG-M4-A / T-A01 — Critical Review Correction Pass 01 |
| Type | Cycle 6 — Architecture technique |
| Profile | CRITICAL |
| Typologie | DOC / Correction d'analyse architecturale |
| Entry status | T-A01 LOCAL CANDIDATE — CHATGPT CRITICAL REVIEW: CORRECTION REQUIRED |
| Repository | mcleland147/sfia-workspace |
| Analysis branch | `analysis/akg-m4a-ta01-dependency-audit` |
| Analysis HEAD | `c48c6a582c10ee3cf6902203d6a4eb01ce3f2139` |
| origin/main | `f44a99b4da84188772b80aca3c9ebe1a3e12617e` |
| Project document path | `projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/05-m4a-dependency-consumers-audit.md` |
| Project document state | untracked local candidate (NOT project-committed) |
| Document git hash-object | `fee29007060e690938f7149bceae7e0adacd4277` |
| Project commit/push/PR | FORBIDDEN / not executed |
| Handoff | L3 bounded publish-in-cycle |

## 01. GO / scope

AUTHORIZED: correct T-A01 audit doc for CORR-01…CORR-04; Full Review Pack; L3 handoff only.

NOT AUTHORIZED: runtime/tests/DB/API/routes; other project docs; OPS1/D1/OA transformation; Cursor REAL; project commit/push/PR/merge; M4-A CLOSED; Delivery/M5.

## 02. Git Review Index

### Before / baseline

| Check | Result |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-akg-m4a-ta01-dependency-audit` |
| Branch | `analysis/akg-m4a-ta01-dependency-audit` MATCH expected `analysis/akg-m4a-ta01-dependency-audit` |
| HEAD | `c48c6a582c10ee3cf6902203d6a4eb01ce3f2139` MATCH expected `c48c6a582c10ee3cf6902203d6a4eb01ce3f2139` |
| origin/main | `f44a99b4da84188772b80aca3c9ebe1a3e12617e` MATCH expected `f44a99b4da84188772b80aca3c9ebe1a3e12617e` |
| Doc present untracked | YES — `projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/05-m4a-dependency-consumers-audit.md` |
| Other project mutations | NONE (only this doc + `.tmp-sfia-review/*`) |

### After corrections (pre-handoff)

```
 M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/05-m4a-dependency-consumers-audit.md
```

### Validations

| Control | Result |
| --- | --- |
| `git diff --no-index --check /dev/null <doc>` exit | `1` (1 = content differs from empty — expected for new file) |
| Trailing whitespace / conflict markers | `NONE` after strip |
| Mermaid fences | 1 ```mermaid block balanced |
| Single project documentary file | YES |
| Project commit | NONE |

### Diff identity (new untracked file)

```
.../05-m4a-dependency-consumers-audit.md           | 463 +++++++++++++++++++++
 1 file changed, 463 insertions(+)
```

Semantic delta vs prior T-A01 candidate: CORR-01 G0 dual-write removal + non-destructive transition; CORR-02 scoped consumer epistemology; CORR-04 FinOps→execution-run edge + SC-B migration criteria; §12 closure matrix. (No other project files.)

## 03. Sources consulted for correction

- `prompts/templates/sfia-cycle-execution-template.md` (relevant §§)
- Build Doctrine A8 / R23 / R24
- Roadmap B-AKG; G0 Architecture & Persistence Decision Pack
- AKG TO-BE / OR-13; M4-A `04`; PRR 04/06/07/09
- Code refs already cited (FinOps T7 shadow deps, VSR/A12, D1/OPS1) — static only

## 04. Correction closure matrix

| ID | Preuve corrigée | Résultat |
| --- | --- | --- |
| CORR-01 | G0 / SC-A — dual-write removed; inventory→historical read→controlled migration→identity verify→OA cutover; G0 challenge = new arbitration | **PASS** |
| CORR-02 | Absolute consumer claims scoped to audited perimeter; confirmed links preserved | **PASS** |
| CORR-03 | This Full pack + Git Review Index + untracked `--no-index` check + handoff L3 | **PASS** if remote verified |
| CORR-04 | Mermaid FinOps→execution-run; SC-B migration criteria (capabilities/tests/consumers/guards/authority) | **PASS** |

## 05. Preserved qualifications

- Capabilities to preserve / candidate classifications retained (KEEP/ADAPT/HARVEST/… remain **candidates**).
- REAL NOT PROVEN · P6 GLOBAL NOT PASSED · runtime v3 NON ADOPTED.
- T-A02…T-A06 remain open.
- M4-A NON CLOSED · T-A01 LOCAL CANDIDATE pending Critical Re-Review.

## 06. R23 / R24

R23: architecture-informed documentary correction against G0/PRR/code citations.
R24: **NO PRODUCT SEMANTIC IMPACT** — analysis doc only.

## 07. Fake / Real

Static only. New Fake NONE. New REAL NONE.

## 08. Review Handoff L3 plan

- Branch: `sfia/review-handoff`
- Canonical: `sfia-review-handoff/latest-chatgpt-review.md`
- Publisher: `scripts/sfia/publish-review-handoff.sh`
- Worktree: `/Users/morris/Projects/sfia-workspace/sfia-review-handoff`
- Message: `docs(review-handoff): AKG-M4-A T-A01 correction pass 01`

(Results after publish in §10 / Cursor report.)

## 09. Instruction ChatGPT (§9.1)

Read on Git:

- Branch: `sfia/review-handoff`
- Path: `sfia-review-handoff/latest-chatgpt-review.md`

Perform: **CHATGPT CRITICAL RE-REVIEW — AKG-M4-A / T-A01 CORRECTION PASS 01**.

Independently verify:

1. Handoff remote commit SHA and blob.
2. Analysis branch/HEAD still `analysis/akg-m4a-ta01-dependency-audit` @ `c48c6a58…`; main `f44a99b4…`.
3. Only project file path `projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/05-m4a-dependency-consumers-audit.md` (untracked; no project commit/push).
4. CORR-01: no ordinary dual-write; G0-compatible transition; G0 reopen isolated.
5. CORR-02: consumer claims epistemically scoped; confirmed edges intact.
6. CORR-03: pack completeness (path, Git Review Index, untracked check, §9.1).
7. CORR-04: diagram + SC-B migration criteria.
8. Anti-claims REAL/P6/v3; M4-A NON CLOSED; T-A01 still LOCAL CANDIDATE.
9. No runtime mutation.

If PASS: accept Correction Pass 01 as remediated investigation input — **not** M4-A CLOSED / Delivery GO.

## 10. Verdict (Cursor target)

READY FOR CHATGPT CRITICAL RE-REVIEW — AKG-M4-A / T-A01 CORRECTION PASS 01

(Conditional on handoff REMOTE VERIFIED.)

## 11. Full corrected document (verbatim)

---

# AKG-M4-A / T-A01 — Audit des dépendances et consommateurs du runtime

| Champ | Valeur |
| --- | --- |
| Cycle | **AKG-M4-A / T-A01** — Audit dépendances & consommateurs |
| Correction | **Critical Review Correction Pass 01** (CORR-01…CORR-04) — 2026-10-22 |
| Type / Profil | Cycle 6 — Architecture technique · **Critical** |
| Typologie | DOC / Architecture / Rationalization Assessment · Correction d'analyse |
| Capacités v3 | V3-F05 / V3-F07 (sous doctrines applicables) |
| Baseline Git (analyse) | Branche `analysis/akg-m4a-ta01-dependency-audit` @ `c48c6a582c10ee3cf6902203d6a4eb01ce3f2139` (= tip `docs/akg-m4a-capability-first-rationalization` / PR #604 Draft) |
| `origin/main` au démarrage | `f44a99b4da84188772b80aca3c9ebe1a3e12617e` |
| Méthode | Analyse **statique** (imports, routes, factories, compositions, tests) · profondeur transitive ≤ 6 · **aucune mutation runtime** |
| Principe | **OR-13 / capability-first** — une dépendance activement utilisée ne justifie pas, à elle seule, la conservation de son implémentation historique |
| Statut maturité | **LOCAL CANDIDATE — INVESTIGATION** · M4-A **NON CLOSED** · classifications **candidates** seulement · Correction Pass 01 en attente de Critical Re-Review |
| Non-claims | Pas de GO Delivery · pas de retrait · pas de P6 GLOBAL PASS · runtime v3 **NON ADOPTED** · REAL **NOT PROVEN** · Fake/Real inchangés · **pas de dual-write D1/OA** comme modalité ordinaire (G0) |

> **Autorité de vérité AS-IS :** code Git + preuves primaires > [PRR](../../../production-runtime-reference/README.md) > [04 M4-A](./04-m4a-runtime-responsibilities-and-transition-assessment.md) > le présent audit. Une contradiction documentaire = écart explicite.

---

## 1. Baseline Git, périmètre et limites

### 1.1 Git Truth (démarrage)

| Référence | Attendu | Observé live | Qualification |
| --- | --- | --- | --- |
| Repository | `mcleland147/sfia-workspace` | MATCH | CONFIRMED |
| `origin/main` | `f44a99b4…` | `f44a99b4da84188772b80aca3c9ebe1a3e12617e` | CONFIRMED |
| Branche source | `docs/akg-m4a-capability-first-rationalization` | tip `c48c6a582c10ee3cf6902203d6a4eb01ce3f2139` | CONFIRMED |
| PR source | #604 Draft, CI validée, non mergée | OPEN Draft · Detect/Build/Required Gate **SUCCESS** · URL https://github.com/mcleland147/sfia-workspace/pull/604 | CONFIRMED |
| Worktree d'analyse | Créé isolé (ne touche pas les WTs dirty préexistants) | `/Users/morris/Projects/sfia-workspace-akg-m4a-ta01-dependency-audit` · branche `analysis/akg-m4a-ta01-dependency-audit` | CONFIRMED |
| Push/commit/PR/merge projet | Interdits | Non exécutés | CONFIRMED |

### 1.2 Périmètre

Auditer les **douze actifs A01–A12** du [document M4-A](./04-m4a-runtime-responsibilities-and-transition-assessment.md) :

- Product UI / routes P0 / D1 / OPS1 ;
- OA Product Runtime ;
- Project Assistant (F2/W2/`orchestrateTurn`) ;
- Nora Cognitive Runtime ;
- `vertical-slice-runtime` et composition REAL ;
- `oa/execution-run` ;
- stores process-local et liens SQLite.

Inclure appels **directs et indirects** : imports TS, routes Next.js, server actions, factories/composition, imports dynamiques, scripts et tests lorsque pertinents.

### 1.3 Limites d'investigation (explicites)

| Limite | Conséquence |
| --- | --- |
| Statique uniquement | Aucune exécution Cursor REAL, aucun effet mutable, aucun build/test comportemental lancé dans ce cycle |
| Profondeur transitive plafonnée à **6** | Au-delà : lien marqué PARTIAL / UNKNOWN avec justification |
| Pas d'inventaire exhaustif de données utilisateur D1/OPS1 | Migration/data = **T-A04** (ouvert) |
| Pas de séquences temporelles complètes Nora→OA→Cursor | **T-A03** (ouvert) |
| PRR 04 = arêtes **curatées**, pas graphe d'import automatique | Complété ici par preuves Git ciblées ; non exhaustif global |
| Consumers « humains » (bookmarks, docs externes) | UNKNOWN hors dépôt |
| Dynamic `import()` non listés exhaustivement | PARTIAL là où seul un échantillon confirmé |

---

## 2. Cartographie composants et dépendances

### 2.1 Graphe de consommation principal (observé)

```mermaid
flowchart TB
  subgraph UI["Interfaces"]
    STU["A01 /studio + pre-m6-product-ui"]
    P0["A02 P0 /synthese /cycle-actif /decision"]
    D1R["A03 D1 routes + features/d1"]
    OPSR["A04 OPS1 /ops1 + features/ops1"]
  end

  subgraph ORCH["Orchestration produit"]
    PA["A06 project-assistant actions / orchestrateTurn / F2 / W2"]
    API["API /api/studio/.../assistant/send"]
  end

  subgraph COG["Cognition"]
    N["A07 nora-cognitive-runtime"]
    NDB[("Nora Session SQLite — mémoire B")]
  end

  subgraph COMP["Composition"]
    VSR["A08 vertical-slice-runtime"]
    REAL["A12 composeStudioProductRealBoundary"]
  end

  subgraph OA["A05 OA Product Runtime"]
    DOM["project / cycle / decision / EC / attempt / evidence"]
    PDB[("Product SQLite — Truth C")]
  end

  subgraph HIST["Historique couplé"]
    D1L["lib/d1"]
    BAA["A09 BoundedAtomicAuditStore type/runtime optionnel"]
    OPSL["lib/ops1 + OPS1_CURSOR_REAL flag"]
    ER["A11 execution-run memory/shadow"]
  end

  subgraph FIN["FinOps / shadow (hors Product Spine)"]
    F7["FinOps T7 shadow deps + rollout script"]
  end

  subgraph TEMP["A10 process-local"]
    PS["proposalStore Map"]
    PO["pendingGenericPrepareOfferStore Map"]
  end

  STU --> PA
  STU --> API
  API --> PA
  PA --> N
  PA --> VSR
  PA --> TEMP
  N --> NDB
  VSR --> DOM
  VSR --> REAL
  REAL --> DOM
  DOM --> PDB
  VSR -.->|type + auditMode=sqlite| BAA
  BAA --> D1L
  D1R --> D1L
  OPSR --> OPSL
  VSR -.->|flag mutual exclusion| OPSL
  F7 -.->|compose / pilot wiring| ER
```

**Lecture :** les flèches continues sont des consommations runtime CONFIRMED au tip analysé. Les flèches pointillées sont des couplages de type, de flag, ou de composition optionnelle. **CORR-04 :** l'arête self-loop `execution-run → execution-run` a été retirée ; la relation vérifiée est FinOps T7 shadow / script → `execution-run` (`scripts/finops-t7-shadow-rollout.ts` ; `lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`), hors Product Spine.

### 2.2 Cycles / couplages transverses observés

| Couplage | Nature | Preuve | Qualification |
| --- | --- | --- | --- |
| Product REAL ↔ flag `OPS1_CURSOR_REAL` | Exclusion mutuelle / safety | `deterministicExternalLaunchBoundary.ts` L47–57 ; `realLaunchSafety.ts` L106–107 | CONFIRMED — **dépendance de gouvernance**, pas d'appel OPS1 adapter depuis A12 |
| VSR → D1 `BoundedAtomicAuditStore` | Type + option `auditMode=sqlite` | `service.ts` L14, L110, L176–187, L758 | CONFIRMED type ; runtime effect **seulement si** store injecté |
| PA ↔ Nora ↔ OA | Orchestration / cognition / autorité | `orchestrateTurn.ts` imports Nora + OA cycle ; `actions.ts` → `getRuntimeApplicationService` | CONFIRMED |
| F2 Proposal → HD → EC | Chaîne autorité (PRR 04) | `proposalStore` → `recordDecision` → prepare paths | CONFIRMED (chemin logique) ; continuité process-local PARTIAL restart |
| execution-run ↔ FinOps T7 | Shadow / scripts | `scripts/finops-t7-shadow-rollout.ts` ; `composeFinOpsT7ShadowExecutionDeps.ts` | CONFIRMED hors Product Spine |
| D1 ↔ OPS1 (nav) | Lien UX historique | `features/d1/D1AppShell.tsx` href `/ops1/nouvelle-demande` | CONFIRMED navigation ; ≠ partage DB |

### 2.3 Consommateurs Product Spine — résultats bornés (CORR-02)

**Épistémologie :** les formulations ci-dessous décrivent ce qui a été **retrouvé / non retrouvé dans le périmètre audité** (imports TS/TSX, routes Next listées, compositions VSR/A12, échantillon tests/e2e/scripts, profondeur ≤ 6). Elles ne prétendent pas une preuve universelle d'absence hors dépôt, hors imports dynamiques non exhaustifs, ni hors bookmarks/ops externes (§1.3).

| Actif | Consommation Product Spine (périmètre audité) | Autre consommation retrouvée | Qualification |
| --- | --- | --- | --- |
| A02 P0 screens | **Aucun consommateur retrouvé** depuis `/studio`, `pre-m6-product-ui` ou `project-assistant` dans les chemins examinés | Routes + features propres + `not-found` → `/synthese` | Routes actives **C** ; absence Spine **bornée** (U hors dépôt) |
| A03 D1 (hors A09) | **Aucun import runtime PA/OA Truth C → `lib/d1` retrouvé** hors pont A09 | Routes D1 + `features/d1` + tests D1 | Îlot **C** ; pont type/audit A09 **C** |
| A04 OPS1 adapter Cursor | **Aucun import** de `lib/ops1/cursorExecutionAdapter` depuis `composeStudioProductRealBoundary` / A12 dans les fichiers inspectés | Route OPS1 + `features/ops1` + e2e OPS1 ; **couplage flag** Product | Îlot + flag **C** |
| A11 execution-run | **Aucun branchement** dans `vertical-slice-runtime/service.ts` Product retrouvé | Tests dédiés + FinOps T7 shadow + script rollout | Hors spine **C** (consommateurs FinOps **C**) |

---

## 3. Matrice A01–A12 — consommateurs directs / indirects

Légende liens : **C** = CONFIRMED · **P** = PARTIAL · **U** = UNKNOWN.
Profondeur : D0 = actif · D1 = consommateur direct · D2+ = transitif (cap 6).

### A01 — Product UI `/studio` + `features/pre-m6-product-ui`

| Capacité | Implémentation actuelle | Entrées | Consommateurs D1 | Transitif pertinent | Preuves | Lien |
| --- | --- | --- | --- | --- | --- | --- |
| Cockpit produit unique (projets, workspace, conversation) | Routes `app/studio/**` + feature `pre-m6-product-ui` (nom historique) | `/studio`, `/studio/projects/[id]`, `/studio/projects/new` | `ProductShell`, `ProjectsPage`, `ProjectWorkspacePage`, surfaces Lifecycle/Trajectory/Conversation/… | → hooks → `project-assistant` actions / W2 / API send | `app/studio/page.tsx` L1–7 ; `app/studio/projects/[id]/page.tsx` ; `login-client.tsx` tokens CSS | **C** |

**Indirects notables :** nombreuses surfaces importent `features/project-assistant/*` (ex. `TrajectorySurface.tsx`, `LifecycleSurface.tsx`, `ExecutionSurface.tsx`, `HistorySurface.tsx`). Tests UI : ~53 fichiers sous `__tests__/pre-m6-product-ui`.

**Classification candidate (inchangée en esprit vs 04) :** KEEP capability / ADAPT implementation (rename éventuel ≠ ce cycle).

### A02 — P0 `/`, `/synthese`, `/cycle-actif`, `/decision`

| Capacité | Implémentation | Consommateurs D1 | Indirects | Preuves | Lien |
| --- | --- | --- | --- | --- | --- |
| Accès « Studio » historique / POC slice | `app/page.tsx` → `redirect("/synthese")` ; screens `features/{synthese,cycle-actif,decision}` | Browser default `/` ; `app/not-found.tsx` → `/synthese` | UtilityRail pointe aussi `/studio` (parallèle) | `app/page.tsx` L1–5 ; `app/synthese/page.tsx` (pills « fixture · slice-only ») | **C** routes ; **U** bookmarks externes |

**Périmètre audité :** aucun import/appel depuis Product Assistant ou modules OA Truth C vers les screens P0 **n'a été retrouvé** (routes `app/{synthese,cycle-actif,decision}`, features homonymes, `app/page.tsx`, `not-found`). Hors dépôt / bookmarks : **U**.
**Candidate :** CONSOLIDATE / RETIRE LATER après audit liens + redirections + tests e2e éventuels.

### A03 — D1 intake / workspace / projects

| Capacité | Implémentation | Consommateurs D1 | Indirects | Données | Preuves | Lien |
| --- | --- | --- | --- | --- | --- | --- |
| Intake, création/lecture projet (historique) | `lib/d1/**` + `features/d1/**` + routes | `app/nouvelle-demande/page.tsx` → `listWorkspaceProjects` + `IntakeView` ; `app/workspace/page.tsx` ; `app/projects/[id]/page.tsx` → `getProject` ; `app/projects/new/page.tsx` → `NewProjectForm` | `features/d1/intake/*`, confirmation, context matching | SQLite distincte `d1.sqlite` via `lib/d1/paths.ts` | Routes L1–4 ci-dessus ; `lib/d1/db.ts` | **C** |

**Pont Product (périmètre audité) :** seul pont code **retrouvé** vers la colonne Product = **A09** (import de type + option `auditMode=sqlite`) — **aucun partage Truth C / Product SQLite** retrouvé avec `d1.sqlite`.
**Tests :** ~17 fichiers `__tests__` référencent `lib/d1` (+ e2e D1).
**Candidate :** HARVEST capability / REPLACE ou CONSOLIDATE implementation (SC-A). **≠ KEEP par existence de routes.** Dual-write D1/OA : **non admissible** sous G0 (voir §7.1 / CORR-01).

### A04 — OPS1 sessions / Cursor historique

| Capacité | Implémentation | Consommateurs D1 | Indirects | Couplage Product | Preuves | Lien |
| --- | --- | --- | --- | --- | --- | --- |
| Session OPS1, gate, allowlist, Cursor adapter, report | `lib/ops1/**` + `features/ops1/Ops1SessionScreen` | `app/ops1/nouvelle-demande/page.tsx` → `NouvelleDemandePageClient` → `Ops1SessionScreen` | e2e OPS1 nombreux ; `features/d1/D1AppShell` lien nav | Flag `OPS1_CURSOR_REAL` lu par Product safety / DET boundary | `cursorExecutionAdapter.ts` `OPS1_CURSOR_REAL_FLAG` ; `deterministicExternalLaunchBoundary.ts` L47–57 | **C** îlot + **C** flag |

**Périmètre audité :** import de `lib/ops1/cursorExecutionAdapter` depuis `composeStudioProductRealBoundary` **non retrouvé** (A12 importe `@/lib/oa/execution-attempt`). Couplage **confirmé** via flag `OPS1_CURSOR_REAL` dans les contrôles Product.
**Candidate :** HARVEST protections utiles / REBUILD ports Product / RETIRE LATER sous **critères de migration** (§7.2 / CORR-04) — **pas** sur seule disparition des tests OPS1. **Ne pas supprimer safety.**

### A05 — OA Product Runtime (project/cycle/decision/EC/attempt/evidence)

| Capacité | Implémentation | Consommateurs D1 | Volume | Preuves | Lien |
| --- | --- | --- | --- | --- | --- |
| Autorité + vérité métier Product (Truth C) | `lib/oa/{project,cycle,decision,execution-contract,execution-attempt,evidence-review}` + SQLite product | `vertical-slice-runtime/service.ts` compose les services ; PA/actions ; nombreux tests | Imports `@/lib/oa/*` : order of magnitude decision≈214, EC/attempt≈161, cycle≈128, project≈112, evidence≈123 (fichiers matching) | `service.ts` imports L16–70 ; G0-A/B ADOPTED | **C** |

**Décisions G0 :** G0-A OA Native Backbone + Harvest OPS1 Cursor **ADOPTED** ; G0-B Product `node:sqlite` **ADOPTED** ([decision pack](../../sfia-studio-g0-architecture-persistence-decision-pack.md)). Remise en cause = arbitrage explicite.
**Candidate :** KEEP socle / ADAPT limites — **pas** REBUILD backbone sans GO G0.

### A06 — Project Assistant (`orchestrateTurn`, `actions`, F2/W2)

| Capacité | Implémentation | Entrées D1 | Consommateurs | Preuves | Lien |
| --- | --- | --- | --- | --- | --- |
| Orchestration produit, préparation missions, décisions UI | `features/project-assistant/**` | API `app/api/studio/projects/[projectId]/assistant/send/route.ts` → `sendProjectAssistantTurn` ; surfaces pre-m6 ; server actions | → VSR (`getRuntimeApplicationService` × nombreuses actions) ; → Nora ; → F2/W2/F3 ; → stores A10 | `actions.ts` L3+ ; `orchestrateTurn.ts` imports Nora+OA ; route send L12–17 | **C** |

**Tests :** ~160 fichiers `__tests__/project-assistant`.
**Candidate :** ADAPT / CONSOLIDATE responsabilités (SC-C) — clarifier frontières vs Nora vs OA ; **ne pas** supprimer HD/Confirm/Authorize pour « simplifier ».

### A07 — Nora Cognitive Runtime

| Capacité | Implémentation | Consommateurs D1 | Persistance | Preuves | Lien |
| --- | --- | --- | --- | --- | --- |
| Cognition, outils admissibles, session/journal | `lib/nora-cognitive-runtime/**` | `orchestrateTurn`, `mw6GovernedNoraTurn`, `logicalProductTurn`, F2/F3, materialize paths | Nora Session SQLite (mémoire B) ≠ Truth C | Imports depuis `features/project-assistant/*` ; `sessionPaths.ts` | **C** |

**Invariant :** cognition ≠ autorité métier (PRR 04 ; doctrine 30/34).
**Candidate :** KEEP / ADAPT frontière avec orchestrateur ; ne pas dupliquer Truth C dans mémoire B.

### A08 — `vertical-slice-runtime`

| Capacité | Implémentation | Consommateurs D1 | Rôle | Preuves | Lien |
| --- | --- | --- | --- | --- | --- |
| Composition Product runtime, ports, singleton | `lib/vertical-slice-runtime/**` (`service.ts`, `singleton.ts`, actions, preflight) | PA `actions.ts` / `w2/actions.ts` / `mw6GovernedNoraTurn` ; `features/studio-projects/*` ; `features/vertical-slice-ui/*` ; e2e/scripts preflight ; nora-eval | Compose OA + audit optionnel + REAL boundary | `getRuntimeApplicationService` usages ; `service.ts` composition | **C** |

**Candidate :** KEEP capability / ADAPT ou REBUILD **composition** (nom `vertical-slice` historique ≠ inutilité). Examiner durée de vie singleton, points d'entrée, disclosures.

### A09 — Dépendance VSR → `lib/d1/boundedAtomicAudit`

| Capacité | Implémentation | Nature du lien | Consommateurs | Preuves | Lien |
| --- | --- | --- | --- | --- | --- |
| Audit borné création projet locale | Classe `BoundedAtomicAuditStore` dans `lib/d1/boundedAtomicAudit.ts` | **Type import** dans `service.ts` ; runtime via `BoundedSqliteLocalProjectCreationAudit` **si** `auditMode=sqlite` + store fourni ; défaut **noop** | `localSqliteAudit.ts` ; tests platform/vertical-slice-core | `service.ts` L14, L106–110, L176–187, L758 ; `localSqliteAudit.ts` L1–43 | **C** type ; **P** usage runtime prod default (noop) |

**OR-13 :** ce lien **prouve un impact de migration**, pas un KEEP D1.
**Candidate :** HARVEST / REPLACE type contract dans frontière Product (port d'audit) **avant** retrait D1.

### A10 — Proposals F2 + offres Generic PREPARE (process-local)

| Capacité | Implémentation | Consommateurs D1 (prod) | Tests | Limite | Preuves | Lien |
| --- | --- | --- | --- | --- | --- | --- |
| Continuité mission / sujet de décision sans inventer l'autorité | `f2/proposalStore.ts` (`Map` sur `globalThis`) ; `w2/pendingGenericPrepareOfferStore.ts` | `orchestrateF2`, `recordDecision`, `validateF2ForPrepare`, `prepareGenericExecutionContractDraft`, `resolve/close/activeProposal*`, `actions` (notice) | ~72 fichiers tests référencent proposalStore | Perdu au restart ; pas multi-instance | En-têtes stores + PRR 06 | **C** |

**HD durable** reste dans Product SQLite via OA decision — à préserver.
**Candidate :** ADAPT / COMPLETE ou REBUILD continuity carriers (sans répliquer Truth C).

### A11 — `lib/oa/execution-run`

| Capacité | Implémentation | Consommateurs hors self | Product Spine | Preuves | Lien |
| --- | --- | --- | --- | --- | --- |
| Modèle d'état exécution memory/fixture-first (FinOps/shadow) | `lib/oa/execution-run/**` (+ `server/`) | ~29 tests dédiés ; `scripts/finops-t7-shadow-rollout.ts` ; `composeFinOpsT7ShadowExecutionDeps.ts` | **Aucun branchement** dans `vertical-slice-runtime/service.ts` Product **retrouvé** (périmètre audité) | `index.ts` « memory/fixture-first » ; PRR 01 hors spine | **C** hors spine ; FinOps consumers **C** |

**Candidate :** FREEZE / audit KEEP vs REPLACE/RETIRE LATER — **pas** promouvoir en moteur alternatif ; **pas** retirer sans T-A02/T-A05.

### A12 — `composeStudioProductRealBoundary` + `execution-attempt`

| Capacité | Implémentation | Consommateurs D1 | Non-consommé | Preuves | Lien |
| --- | --- | --- | --- | --- | --- |
| Exécution Cursor sous contrat/autorité OA | Composition dans VSR + runners/gateway `lib/oa/execution-attempt/infrastructure/*` | `service.ts` L55–57, L764 ; preflight ; tests DET/REAL boundary | OPS1 `cursorExecutionAdapter` **non** importé ici | `composeStudioProductRealBoundary.ts` imports `@/lib/oa/execution-attempt` | **C** |

**Candidate :** KEEP garanties / ADAPT ports ; comparaison OPS1↔Product **obligatoire** avant reconstruction (SC-B). REAL pathless no-write / Tool-First reserves : **KNOWN GAP** (PRR 09) — hors preuve nouvelle ce cycle.

---

## 4. Distinction capacité / implémentation / responsabilité cible

| ID | Capacité à préserver (quoi) | Implémentation AS-IS (comment) | Responsabilité cible TO-BE (où) | Effets / état | Frontière d'autorité | Protections |
| --- | --- | --- | --- | --- | --- | --- |
| A01 | Cockpit unique Pilot↔Nora | `pre-m6-product-ui` + routes studio | Product UI `/studio` unique | React client + server actions | Présentation ≠ HD | Auth session / surfaces gouvernées |
| A02 | Accès fluide sans liens cassés | P0 screens POC | Redirections → `/studio` puis retrait | Aucun Truth C | N/A POC | Claims fixture explicites |
| A03 | Intake / création projet | `lib/d1` + DB `d1.sqlite` | Intake dans Product Truth C | Écritures D1 isolées | Gouvernance D1 propre | authz D1, confirmation |
| A04 | Analyse/exécution outillée + garde-fous | OPS1 session + Cursor adapter + DB ops1 | Capacités outils sous EC OA | OPS1 SQLite + worktrees | Gate OPS1 ≠ OA HD | `OPS1_CURSOR_REAL`, allowlist, path policy |
| A05 | Vérité + autorité métier | Modules OA + Product SQLite | **Socle unique** (G0) | Truth C durable | HD/EC/Attempt | Invariants PRR 07 |
| A06 | Orchestration conversation→mission | PA F2/W2/orchestrateTurn | Orchestrateur produit clair | Actions + projections | N'autorise pas seule | SHE + historical paths |
| A07 | Raisonnement / outils cognitifs | nora-cognitive-runtime | Nora cognition | Mémoire B | Reco ≠ autorité | MW5 challenge, budgets |
| A08 | Composition ports/adapters | vertical-slice-runtime | Composition Product (renommable) | Singleton process | Wiring ≠ policy | serverGuard, disclosures |
| A09 | Audit borné ops locales | Type/classe D1 | Port audit Product | Table D1 si activé | Audit ≠ autorité | Idempotency keys |
| A10 | Continuité sujet/offre courte | Maps process-local | Carrier dédié ou reconstruction HD | Volatile | Proposal ≠ HD | Notices + session key |
| A11 | État exécution shadow/FinOps | execution-run memory | Transverse FinOps **si** valeur | Memory/fixtures | Hors spine | Policy read-only domain |
| A12 | Launch Cursor borné | OA attempt gateways | Port exécution sous EC | Attempt + safety journal | Authorize ≠ launch | REAL flags, confinement |

---

## 5. Dépendances historiques — nécessité actuelle vs inertie

| Dépendance | Utilisée ? | Nécessité structurelle actuelle | Inertie potentielle | Lecture OR-13 |
| --- | --- | --- | --- | --- |
| Routes P0 actives + `/` → synthese | Oui (routing) | **Faible** pour Product Spine | Défaut navigateur `/` | Conserver *capacité d'accès* via redirect ; implémentation POC candidate retrait |
| D1 routes + DB | Oui (îlot) | **Locale à l'îlot** ; pas Truth C | Données/tests/e2e | Harvest capacité intake ; REPLACE impl |
| Type `BoundedAtomicAuditStore` dans VSR | Oui (compile + option) | **Contrat d'audit** utile ; packaging D1 **non** nécessaire | Import path historique | Extraire port ; retirer dépendance module D1 ensuite |
| OPS1 UI + adapter | Oui (îlot + e2e) | Capacités Cursor/gate **à qualifier** vs OA attempt | Surface legacy + flag partagé | Harvest/Rebuild ; flag coupling = impact migration |
| Flag `OPS1_CURSOR_REAL` dans Product safety | Oui | **Oui** tant que flag existe (fail-closed) | Nom OPS1 dans Product | Remplacer par flag Product unique après extinction OPS1 |
| proposalStore Map | Oui (chemin F2 courant) | Continuité courte **oui** ; packaging Map **non** sacré | Process-local debt | ADAPT/REBUILD continuity |
| execution-run | Oui (FinOps/tests) | Pour Product Spine : **non démontrée** | Suite tests large | FREEZE ; ne pas KEEP-as-spine |
| Nom `pre-m6` / `vertical-slice` | N/A | Non | Lexique historique | ADAPT naming ≠ rebuild forcé |

---

## 6. Scénarios candidats (tous non décidés)

Conformité [04 §4](./04-m4a-runtime-responsibilities-and-transition-assessment.md) et TO-BE OR-13. **Aucune classification définitive.**

| ID scénario | Actifs | Options candidates | Ancrage TO-BE / G0 | Statut |
| --- | --- | --- | --- | --- |
| **SC-A** Intake Product | A03, A09, A01 | KEEP D1 (dette) · HARVEST règles · REPLACE intake dans Truth C (OA + Product SQLite) · migration contrôlée non destructive (§7.1) — **sans dual-write** | G0-A/B ; expérience `/studio` ; Truth C unique | CANDIDATE |
| **SC-B** Frontière Cursor unifiée | A04, A12, A05 | HARVEST protections OPS1 · REBUILD ports · RETIRE LATER si critères migration satisfaits (§7.2) | Outils sous contrat ; G0-A harvest | CANDIDATE — ne pas supprimer safety |
| **SC-C** Orchestration Nora/PA/W2 | A06, A07, A10, A01 | Clarifier ownership · CONSOLIDATE chemins redondants · REBUILD carriers non durables | Dialogue continu ; SHE proportionné | CANDIDATE |
| **SC-D** P0 consolidation | A02 | Redirect `/`→`/studio` · RETIRE screens · conserver claims tests | Cockpit unique | CANDIDATE |
| **SC-E** Composition runtime | A08, A09 | ADAPT singleton/disclosures · REBUILD composition · extraire audit port | Composition claire | CANDIDATE |
| **SC-F** Continuity carriers | A10 | COMPLETE restart binding · REBUILD PresentedSubject durable · KEEP Map court terme | Continuité sans 2e vérité | CANDIDATE |
| **SC-G** execution-run | A11 | KEEP shadow · REPLACE FinOps-only · RETIRE LATER | Pas de 2e moteur Product | CANDIDATE FREEZE |

**Anti-biais :** pas de KEEP parce qu'un import existe ; pas de REBUILD parce qu'un nom est ancien.

---

## 7. Impacts (pour candidats REPLACE / REBUILD / CONSOLIDATE sérieux)

### 7.1 SC-A — D1 → Product intake (CORR-01)

**G0 (inchangé) :** G0-A = OA Native Backbone ; G0-B = Product SQLite comme vérité métier Product. **Le dual-write D1/OA n'est pas une modalité ordinaire admissible** sous ces décisions.

| Dimension | Impact |
| --- | --- |
| Consommateurs affectés | Routes D1, `features/d1/**`, e2e D1, tests platform audit, **A09** type path |
| Contrats/données | Schéma `d1.sqlite` ; IDs projet D1 vs OA projectId ; audit events |
| Autorité/sécurité | Ne pas confondre confirmation D1 avec HD OA |
| Risques | Perte historique, doublons, divergence d'identifiants, import A09 bloquant retrait |
| Tests existants | `__tests__` D1/platform ; e2e d1-* |
| Tests manquants | Migration round-trip ; création via `/studio` ≡ capacité intake ; vérification d'identités post-bascule |
| Transition non destructive (candidate, à instruire en T-A04) | (1) inventaire des données D1 ; (2) **lecture historique** D1 si nécessaire (read-only) ; (3) **migration contrôlée** vers OA/Product SQLite ; (4) vérification des identités / non-doublons ; (5) **bascule** des parcours nominaux vers `/studio` + OA ; (6) disposition ultérieure de l'îlot D1 |
| Coexistence ordinaire | **Pas de dual-write.** Lecture historique D1 et/ou gel écritures D1 pendant migration sont les modalités à qualifier — pas une double vérité métier |
| Remise en cause G0 | Tout scénario exigeant un second store métier Product concurrent ou un dual-write durable = **arbitrage Morris nouveau requis**, **pas** une option déjà admissible |
| Retrait ultérieur | Après A09 port extrait + plus aucun import `lib/d1` retrouvé au périmètre Delivery + data disposition gouvernée |

### 7.2 SC-B — OPS1 Cursor → OA Attempt (CORR-04)

| Dimension | Impact |
| --- | --- |
| Consommateurs | `Ops1SessionScreen`, e2e ops1-*, scripts live-smoke ; **flags** Product DET/REAL |
| Contrats | Allowlist/path policy OPS1 vs managed repo / confinement Product |
| Autorité | Gate OPS1 ≠ EC authorize ; éviter double chemin REAL |
| Risques | Perte enforcement, scripts non migrés, assimilation DET/REAL |
| Tests | `__tests__/ops1` (~26) ; tests Product `deterministicCursorBoundary`, `m4RealOff*` |
| Manquants | Matrice capacité-à-capacité OPS1↔Attempt (T-A02) |
| Coexistence | Flag bridge et surfaces OPS1 en lecture/gel pendant migration ; **pas** de second chemin REAL Product via OPS1 adapter |
| Critères de migration avant RETIRE LATER (remplacent « zero tests OPS1 ») | (1) **capacités utiles** OPS1 préservées ou volontairement abandonnées avec preuve ; (2) **tests** correspondants **conservés ou remplacés** côté Product/OA attempt ; (3) **consommateurs** (routes, UI, scripts, e2e) réconciliés ou retirés sous GO ; (4) **garde-fous** (allowlist, path policy, REAL flags, fail-closed) vérifiés sur la frontière Product ; (5) **frontières d'autorité** EC/HD/Attempt non régressées ; (6) harvest documenté |
| Non-critère | La seule disparition ou suppression des tests/e2e OPS1 **ne suffit pas** à autoriser le retrait |

### 7.3 SC-C — Orchestration / continuity

| Dimension | Impact |
| --- | --- |
| Consommateurs | pre-m6 surfaces, API send, F2/W2/F3, tests PA (~160) |
| Contrats | Proposal DTO, pending offer session key, SHE vs historical prepare |
| Autorité | Préservation HD/Confirm/Authorize/SHE ; Proposal≠HD |
| Risques | Double exécution, perte restart, REAL non borné, UX régression |
| Tests | Large deterministic suite ; e2e studio-* |
| Manquants | Séquences fail/STOP/restart complètes (T-A03) |
| Coexistence | Dual admission SHE + historical déjà documenté PRR 04 |
| Retrait carriers | Seulement après continuité prouvée (restart) |

### 7.4 Autres (synthèse)

- **SC-D P0 :** impact UX/bookmarks/`not-found` ; faible impact OA.
- **SC-E composition :** risque large (tout PA) ; tests runtime composition critiques.
- **SC-G execution-run :** impact FinOps T7/shadow ; **aucun impact Product Spine retrouvé** dans le périmètre audité si FREEZE respecté (pas de branchement `service.ts`).

---

## 8. Lacunes de preuve et investigations ouvertes

| ID | Lacune | Impact sur T-A01 | Suite |
| --- | --- | --- | --- |
| L1 | Inventaire capacités exclusives OPS1/D1/P0/execution-run non exhaustif | Classifications restreignables | **T-A02** |
| L2 | Séquences runtime temporelles / restart | Continuity A10 PARTIAL | **T-A03** |
| L3 | Données utilisateur D1/OPS1 volume/valeur | Migration SC-A/B | **T-A04** |
| L4 | Comparaison coûts KEEP vs REBUILD chiffrée | Décision formelle | **T-A05** |
| L5 | Revue contradictoire TO-BE/doctrine v3 | Alignement | **T-A06** |
| L6 | Dynamic imports / conditional requires non exhaustifs | Graphe PARTIAL | Complément audit ciblé |
| L7 | Consommateurs hors dépôt (URLs partagées) | A02/A03 UNKNOWN | Inventory ops |
| L8 | REAL E2E générique | Pas de nouvelle preuve | Hors scope ; PRR 09 gaps |

**Fake/Real :** analyse statique seulement — **aucune preuve REAL nouvelle**. Statuts existants conservés. Realism gaps documentés (PRR 09, Tool-First, restart continuity) restent **KNOWN GAP**.

---

## 9. Recommandations argumentées (étapes suivantes)

1. **Traiter T-A01 comme socle de graphe**, pas comme Formal Exit M4-A.
2. Enchaîner **T-A02** sur A03/A04/A11/A02 : matrice « capacité requise / déjà couverte Product / exclusive / retrait possible ».
3. Prioriser **extraction du port d'audit (A09)** comme déblocage structurel du retrait D1 — sans encore migrer l'intake.
4. Documenter la **matrice OPS1 protections ↔ OA attempt** avant tout harvest code (SC-B).
5. Pour A10 : décider en T-A05 si COMPLETE (binding durable) ou REBUILD carrier — tests restart manquants = bloqueur.
6. **FREEZE** A11 hors spine jusqu'à T-A02/T-A05 ; interdire promotion silencieuse.
7. P0 (A02) : candidat redirect `/`→`/studio` sous GO Delivery distinct après inventaire liens.
8. Maintenir G0-A/B ; toute remise en cause OA/SQLite = arbitrage Morris tracé.
9. Ne pas ouvrir M5 / Delivery transformation depuis ce lot.
10. Publier ce document via revue Critical ChatGPT ; intégration Git projet = GO distinct (commit/PR non autorisés ici).

---

## 10. Conditions de sortie M4-A — encore non satisfaites

Reprise du critère [04 §6](./04-m4a-runtime-responsibilities-and-transition-assessment.md) :

> Aucun candidat n'est classé définitivement tant que sa valeur fonctionnelle, ses consommateurs et le risque de transition ne sont pas suffisamment établis.

| Condition | État après T-A01 |
| --- | --- |
| Graphe consumers A01–A12 vérifié (direct + transitif borné) | **PARTIELLEMENT SATISFAITE** — présents avec limites §1.3 |
| Capacités historiques exclusives inventoriées | **NON** — T-A02 |
| Séquences autorité/temporalité complètes | **NON** — T-A03 |
| Matrice stockage/migration | **NON** — T-A04 |
| Impact pack KEEP/HARVEST/REPLACE/REBUILD + reco formelle | **NON** — T-A05 (ce doc fournit impacts préliminaires seulement) |
| Critical Review alignement TO-BE | **EN COURS** via handoff T-A01 ; clôture T-A06 |
| M4-A CLOSED | **NON** |

---

## 11. Traçabilité et validations de cycle

### Sources consultées (statut)

- Méthode SFIA v2.6 : template cycle, routing guide §4.3.0a, operating model, rules, knowledge layer (guidance).
- Build Doctrine, Roadmap, G0 decision pack.
- AKG : README, 01 AS-IS, 02 TO-BE, 03 registre, 04 M4-A.
- PRR : README, 01, 02, 03, 04, 06, 07, 08, 09 (sections pertinentes).
- Doctrine v3 : 30, 32, 34, 35 (confrontation ; pas de mutation).
- Code tip `c48c6a58…` : routes, features, lib OA/D1/OPS1/VSR/Nora, stores, scripts, tests (échantillon systématique par actif).

### Validations Git (à rejouer en fin de cycle Cursor)

- Un seul fichier projet créé / corrigé : le présent `05-m4a-dependency-consumers-audit.md` (untracked).
- Contrôle whitespace fichier non tracké : `git diff --no-index --check /dev/null <fichier>` (exit 1 attendu si seul le caractère « new file » ; aucun trailing whitespace / conflit).
- `git status --short` : ce path (+ Review Pack temp hors produit).
- Aucun commit/push projet.

### R24

**NO PRODUCT SEMANTIC IMPACT** — document d'analyse uniquement ; PRR/runtime inchangés.

---

## 12. Matrice de fermeture — Critical Review Correction Pass 01

| ID | Objet | Preuve corrigée dans ce document | Résultat |
| --- | --- | --- | --- |
| **CORR-01** | Dual-write ≠ G0 | §7.1 / SC-A : dual-write retiré ; transition inventaire → lecture historique → migration contrôlée → vérification identités → bascule OA ; remise en cause G0 isolée comme arbitrage nouveau | **PASS** (documentaire) |
| **CORR-02** | Épistémologie consumers | §2.3 + A02/A03/A04/A11 reformulés « non retrouvé / périmètre audité » + limites §1.3 ; liens CONFIRMED conservés | **PASS** (documentaire) |
| **CORR-03** | Review Pack / Git | Traité dans le Review Pack FULL Correction Pass 01 (chemin explicite, Git Review Index, contrôle `--no-index`, handoff L3) — hors mutation runtime | **PASS** si handoff remote verified |
| **CORR-04** | Mermaid + SC-B | §2.1 : arête FinOps→execution-run ; §7.2 : critères migration (capacités, tests, consumers, garde-fous, autorité) — pas « zero tests OPS1 » | **PASS** (documentaire) |

**T-A01** demeure **LOCAL CANDIDATE** jusqu'à Critical Re-Review indépendante. **M4-A** demeure **NON CLOSED**.

---

END — `AKG-M4-A / T-A01` — LOCAL CANDIDATE — CORRECTION PASS 01


---

## 12. End matter

END — AKG-M4-A / T-A01 CORRECTION PASS 01
