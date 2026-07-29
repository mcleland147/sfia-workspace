# First user-visible vertical slice framing — Review pack FULL

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-29 15:50:06 CEST (+0200) |
| **Repo** | mcleland147/sfia-workspace |
| **Workspace** | /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge |
| **Branche** | `framing/sfia-studio-first-user-visible-vertical-slice` |
| **HEAD** | `c1955179a36079e060c41a845c2a1950084966c8` |
| **Base** | `7916066310777abce4fd5a64ff0c87759c375fd6` |
| **git status** | tracked clean · untracked `.tmp-sfia-review/**` only |
| **Gate** | `GO FRAME FIRST USER-VISIBLE SFIA STUDIO VERTICAL SLICE — PROJECT CREATION TO CYCLE RECOMMENDATION AND MORRIS DECISION DASHBOARD — REUSE T-A0 TO T-A7 CORE — LOCAL BOUNDED DATA ONLY — NO IAM REAL AGENT EXECUTION DELIVERY OR CUTOVER` |
| **Cycle/profil** | 2 (+1/3/4/5/9/15) · Standard · EVOL/UX/DOC/CAPA |
| **Handoff parent** | `ade18f18…` / blob `1058196c…` |
| **Niveau** | FULL |

## Truth check

PASSED — origin/main=`7916066310777abce4fd5a64ff0c87759c375fd6` · worktree tracked clean · framing branch from origin/main · no unfinished git op · no app files modified.

## Sources Git

- Template / routing / operating model (méthode)
- `32-poc-vertical-slice-functional-design.md`
- Pack T-A7 01–20 + README
- `app/app/**` routes, `components/shell/**`, `components/vertical-slice/**`, `lib/vertical-slice/**`, `lib/harness/**`, `lib/navigation.ts`, `features/**`, `styles/tokens.css`
- `lib/oa/{doctrine,project,cycle,decision,execution-contract,execution-attempt,evidence-review}/**`
- `lib/platform/t-a7/**`, `lib/d1/boundedAtomicAudit.ts`, `lib/d1/db.ts`
- Handoff parent post-merge #291

## État UI actuel

Trois stacks non unifiées : VS POC (fixture/harness) · OPS1 legacy · D1 SQLite. Cœur OA T-A0→T-A6 (+T-A7) **non branché UI** (zéro import `@/lib/oa/**` depuis features/app).

## Inventaire (résumé)

Voir doc `01` — matrices routes/composants KEEP/ADAPT/REPLACE/REMOVE.

## Parcours cible

Project Creation → Cycle Recommendation → Morris Decision → Readiness Dashboard (+ history bornée). T-A4/T-A5 display-only.

## Mapping T-A0→T-A7

Voir doc `03` — facade obligatoire ; React sans règles domaine.

## Architecture fonctionnelle

`UI → VerticalSliceFacade → OA ports → memory(+optional sqlite audit) → projections`

## Données / fixture

Mémoire OA · audit sqlite optionnel · sessionStorage UI-only · fixtures off happy path.

## Contrat visuel / Figma

- FileKey `lrjA1WEyRpL05vKR8k29LO` · page `0:1` UX-B — P0
- Write Figma **non exécutée**
- 12 frames contrat Git · 1440/1280/390
- Statut : `FIGMA TARGET RESOLVED — WRITE NOT EXECUTED — GIT VISUAL CONTRACT PRODUCED`

## Backlog

V1…V6 · reco plusieurs PR · V1 first (D-VS-04).

## Décisions candidates D-VS-01→05

Toutes **non validées** — reco Cursor dans README/`10`.

## Anti-claims

Pas d'IAM · pas product persistence · pas agent réel · pas delivery/cutover · pas HARD/T-A6 closure · framing ≠ produit ready.

## Fichiers créés (commit `c1955179`)

commit c1955179a36079e060c41a845c2a1950084966c8
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Wed Jul 29 15:49:30 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Wed Jul 29 15:49:30 2026 +0200

    docs(sfia-studio): frame first user-visible vertical slice journey
    
    Document the Project→Recommendation→Decision→Dashboard contract, T-A0–T-A7 UI mapping, local composition options, visual contract, and Morris decision candidates without changing application code.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/01-current-ui-and-core-inventory.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/02-user-journey-and-functional-scope.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/03-t-a0-to-t-a7-ui-mapping.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/04-information-architecture-and-navigation.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/05-visual-contract-and-figma-reference.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/06-local-data-and-application-composition.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/07-accessibility-responsive-and-error-states.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/09-validation-test-and-visual-proof-plan.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/10-risks-reservations-and-morris-decision-pack.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md

## Contenu complet des fichiers créés


### `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md`

```markdown
# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING COMPLETE — AWAITING MORRIS DECISIONS D-VS-01→05` |
| **Date** | 2026-07-29 15:45:00 CEST (+0200) |
| **Cycle** | 2 — Conception fonctionnelle (+1/3/4/5/9/15) |
| **Profil** | Standard |
| **Gate** | `GO FRAME FIRST USER-VISIBLE SFIA STUDIO VERTICAL SLICE — PROJECT CREATION TO CYCLE RECOMMENDATION AND MORRIS DECISION DASHBOARD — REUSE T-A0 TO T-A7 CORE — LOCAL BOUNDED DATA ONLY — NO IAM REAL AGENT EXECUTION DELIVERY OR CUTOVER` |
| **Branche** | `framing/sfia-studio-first-user-visible-vertical-slice` |
| **Base** | `origin/main` @ `7916066310777abce4fd5a64ff0c87759c375fd6` |
| **Code applicatif** | **aucune modification** |
| **Push / PR projet** | **aucun** (ce cycle) |

## Objectif

Cadrer le premier parcours **réellement visible et compréhensible** :

**Project Creation → Cycle Recommendation → Morris Decision → Readiness Dashboard**

en réutilisant le cœur T-A0→T-A7, sans IAM, sans persistance produit, sans agent réel, sans delivery/cutover.

## Synthèse

Trois stacks UI coexistent aujourd’hui et **ne sont pas unifiées** :

1. **VS POC** — StudioShell + fixtures/harness (`/synthese`, `/decision`, `/cycle-actif`, `?vs=`).
2. **OPS1** — session conversationnelle legacy (`/ops1/nouvelle-demande`).
3. **D1** — workspace/intake SQLite local (`/nouvelle-demande`, `/workspace`, `/projects/*`).

Le cœur Option A (`lib/oa/**`) est **complet jusqu’à T-A6** (+ fondations T-A7) mais **aucune route UI n’importe `@/lib/oa/**` aujourd’hui**.

Le framing propose une **facade applicative locale** au-dessus des use cases OA + lecture T-A7, en **adaptant StudioShell** et en **séparant strictement** fixture / local / produit.

## Scope / hors scope

**Dans le scope (cible produit local borné)** : création Project/LPS réelle · doctrine T-A0 · qualification cycle T-A2 · décision locale T-A3 honnête · dashboard readiness T-A6/T-A7 · historique borné F13.4.

**Hors scope** : IAM · Critical ack réel · agent/shell Cursor réel · harness BeB comme happy path · persistance produit · API HTTP obligatoire · delivery/cutover · fermeture HARD/T-A6/B5/R1/R-M01 · T-A7 COMPLETE · nouveau design system.

## Parcours cible (résumé)

1. Arrivée — disclosure mode local · CTA Créer un projet
2. Création — champs minimaux → T-A0+T-A1
3. Fiche projet — LPS, cycle, blockers
4. Recommandation — T-A2 (≠ décision)
5. Décision Morris — Valider/Refuser/Reporter/Corriger · mode `LOCAL MORRIS DECISION DEMO`
6. Readiness dashboard — anti-claims honnêtes
7. Historique borné

## Architecture (résumé)

```text
UI (StudioShell + screens)
  → VerticalSliceFacade (application composition)
    → ports T-A0…T-A7 use cases
      → adapters mémoire OA (+ audit SQLite optionnel)
        → UI projections read-only
```

Aucun composant React ne décide Critical / HARD closed / preuve suffisante / autorité / gate.

## Figma

| Item | Valeur |
|------|--------|
| FileKey | `lrjA1WEyRpL05vKR8k29LO` (tokens.css) |
| Page listée | `0:1` — **UX-B — P0** |
| Écriture Figma ce cycle | **non exécutée** (page P0 existante non écrasée) |
| Contrat visuel | **Git** — voir `05` |
| Statut | `FIGMA TARGET RESOLVED — WRITE NOT EXECUTED — GIT VISUAL CONTRACT PRODUCED` |

## Backlog recommandé

V1 Composition locale Project → V2 Create UI → V3 Recommendation → V4 Decision → V5 Dashboard → V6 Consolidation visuelle.

Recommandation de livraison : **plusieurs PR** (une par lot V1–V5), commits atomiques ; V6 peut accompagner ou suivre.

## Décisions Morris candidates (non validées)

| ID | Sujet | Recommandation Cursor |
|----|-------|----------------------|
| D-VS-01 | Stratégie UI | **ADAPT** routes POC + namespace dédié optionnel `/studio/v1/*` |
| D-VS-02 | Composition locale | **Hybride** mémoire OA + audit SQLite optionnel |
| D-VS-03 | Démo | Fixtures **désactivées** sur happy path ; mode demo séparé |
| D-VS-04 | Premier lot | **V1 Project creation + composition** |
| D-VS-05 | Figma | **Nouvelle page** dans fichier existant après GO |

## Anti-claims

- Framing ≠ produit ready ≠ MVP validé
- UI POC ≠ cœur OA branché
- Décision locale ≠ autorité IAM
- Local SQLite ≠ persistance produit
- Recommandation ≠ décision Morris
- HARD/T-A6 restent ouverts

## Index du pack

| Doc | Sujet |
|-----|-------|
| `01` | Inventaire UI + cœur |
| `02` | Journey et scope |
| `03` | Mapping T-A0→T-A7 ↔ UI |
| `04` | IA & navigation |
| `05` | Contrat visuel & Figma |
| `06` | Données locales & composition |
| `07` | A11y / responsive / erreurs |
| `08` | Backlog & slicing |
| `09` | Plan validation / preuves |
| `10` | Risques & decision pack Morris |

## Gate candidat suivant

`GO IMPLEMENT FIRST USER-VISIBLE SFIA STUDIO VERTICAL SLICE LOT V1 — LOCAL PROJECT CREATION AND CORE COMPOSITION — REUSE EXISTING UI SHELL — NO IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

**Condition** : Morris tranche au minimum D-VS-01, D-VS-02, D-VS-04 (et idéalement D-VS-03).

## Verdict

`FIRST USER-VISIBLE SFIA STUDIO VERTICAL SLICE FRAMING COMPLETE — EXISTING POC UI AUDITED — PROJECT TO CYCLE RECOMMENDATION TO MORRIS DECISION TO READINESS DASHBOARD CONTRACT DEFINED — T-A0 TO T-A7 REUSE MAPPED — LOCAL BOUNDED DATA ONLY — IMPLEMENTATION BACKLOG READY FOR MORRIS DECISION — NO APPLICATION CODE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

```

### `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/01-current-ui-and-core-inventory.md`

```markdown
# 01 — Current UI and core inventory

## 1. Observation confirmée

Une UI POC existe. Elle n’est **pas** un produit fonctionnel branché sur Option A.

## 2. Routes existantes

| Route | Rôle actuel | Source données | KEEP/ADAPT/REPLACE/REMOVE |
|-------|-------------|----------------|---------------------------|
| `/` | redirect → `/synthese` | n/a | **ADAPT** → empty/list ou dashboard |
| `/synthese` | VS-UX-10 clôture POC | fixture + harness | **ADAPT** → Readiness Dashboard |
| `/decision` | Gate Morris POC GO/NO-GO… | fixture + harness | **ADAPT** → Morris Decision (T-A3) |
| `/cycle-actif` | Exécution/analyse POC | fixture + harness | **REPLACE LATER** pour V1–V5 (hors happy path) ; conserver demo |
| `/nouvelle-demande` | D1 intake conversationnel | D1 SQLite | **KEEP** (parcours parallèle) ; **ne pas** fusionner forcé en V1 |
| `/ops1/nouvelle-demande` | OPS1 legacy | OPS1 sessionStorage | **REMOVE LATER** (hors slice) |
| `/workspace` | D1 home | D1 SQLite | **KEEP** parallèle ; éventuel lien futur |
| `/projects/new` | Création D1 manuelle | D1 commands | **ADAPT inspiration** ; V1 doit appeler **OA T-A1** pas seulement D1 |
| `/projects/[id]` | Cockpit D1 | D1 get/audit | **ADAPT inspiration** → Project overview OA |

## 3. Composants

| Composant | Décision |
|-----------|----------|
| `StudioShell` | **KEEP** — layout rail/topbar/canvas/copilot |
| `UtilityRail` / `Topbar` / `FLUSH_TABS` | **ADAPT** — onglets alignés parcours cible |
| `CopilotPanel` (Nora) | **KEEP** en mode disclosure ; pas d’autorité |
| `VsDemoRoot` / `VsDemoChrome` / `VsDemoContext` | **KEEP** pour demo fixture ; **ne pas** devenir store produit |
| `Vs*Screen` | **ADAPT** patterns UI ; remplacer data fixture par projections facade |
| UI primitives (`StatusPill`, `MetricCard`, `CtaButton`, `Card`…) | **KEEP** |
| `D1AppShell` / intake | **KEEP** stack D1 parallèle |
| Harness (`lib/harness/**`) | **KEEP** pour BeB demo ; **hors** happy path V1–V5 |
| `sessionStorage` VS keys | **UI éphémère / resume demo only** — **interdit** pour état métier OA |

## 4. Cœur OA (non branché UI)

| Zone | Path | Factory |
|------|------|---------|
| T-A0 | `app/lib/oa/doctrine/**` | `createLocalDoctrineResolver` / test |
| T-A1 | `app/lib/oa/project/**` | `createInMemoryProjectServices` |
| T-A2 | `app/lib/oa/cycle/**` | `createInMemoryCycleServices` |
| T-A3 | `app/lib/oa/decision/**` | `createInMemoryDecisionServices` |
| T-A4 | `app/lib/oa/execution-contract/**` | in-memory |
| T-A5 | `app/lib/oa/execution-attempt/**` | NoOp/Test adapters only |
| T-A6 | `app/lib/oa/evidence-review/**` | in-memory |
| T-A7 | `app/lib/platform/t-a7/**` | fonctions pure/read-only |
| Audit local | `app/lib/d1/boundedAtomicAudit.ts` | `BoundedAtomicAuditStore` |

**Gap critique** : zéro import `@/lib/oa/**` depuis `app/app/**` ou `features/**`.

## 5. Dette POC

- Trois stacks parallèles (VS / OPS1 / D1)
- VsDemoContext comme pseudo-store
- sessionStorage métier-adjacent
- Copy « simulation » / gates fixture confondables avec décisions réelles
- Tab Preuves disabled simulé
- Doc `32` décrit un BeB harness/agent — **distinct** du slice user-visible OA ciblé ici

## 6. Réutilisable tel quel

StudioShell layout · tokens.css · UI primitives · use cases OA · T-A7 evaluators · doctrine fixtures registry.

## 7. Fixture-only aujourd’hui

Tout `Vs*` happy path · harness fixture/simulation · Increment C/D/E panels.

```

### `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/02-user-journey-and-functional-scope.md`

```markdown
# 02 — User journey and functional scope

## 1. Persona

**Morris (L0)** — décideur local en mode démo borné. Pas de compte. Pas d’email.

## 2. Journey (étapes)

### J1 — Arrivée
- Produit : SFIA Studio
- Disclosure : mode **LOCAL BOUNDED** · IAM NOT_SELECTED · agent réel indisponible · delivery NOT AUTHORIZED
- CTA primaire : **Créer un projet**
- CTA secondaire : Voir readiness (si projet existant local)

### J2 — Création projet
Champs :
- nom (title)
- objectif
- contexte
- criticité perçue : faible / standard / élevé → mappe vers profil Light/Standard/Critical **comme entrée de qualification**, pas comme décision
- contraintes principales (texte)
- option : référence courte

Interdits : email, organisation, secrets, PII, infra.

Sortie : Project + LPS v1 créés via T-A0+T-A1.

### J3 — Fiche projet
Affiche : nom, objectif, contexte synthétique, doctrine pin, LPS version, cycle courant (si), profil, maturité (si), blockers T-A7, dernière décision, prochaine recommandation.

### J4 — Recommandation de cycle
Produit via T-A2 (`QualifyCycle` / `CreateCycle` / epistemic items).
Affiche : cycle recommandé, profil, justification structurée, blocs, réserves, confiance/épistémique, Observation vs Hypothesis vs non-décidé.
**Bandeau obligatoire** : « Recommandation ≠ décision Morris ».

### J5 — Décision Morris
Actions : Valider · Refuser · Reporter · Demander une correction.
Mode UI : **`LOCAL MORRIS DECISION DEMO`**.
Critical réel : **bloqué** (R-T-A3-1 OPEN) — état dédié.
Mappe T-A3 `RecordHumanDecision` + confirmations selon besoin.

### J6 — Readiness dashboard
Voir section statuts ci-dessous.

### J7 — Historique borné
Événements locaux + projection F13.4 (max items, PREFIX_ONLY/GIT_ONLY pour doc).

### J8 — Contrat / tentative (affichage seul)
T-A4/T-A5 : « non généré / non lancé » ou DEMO explicite. Jamais Cursor connecté.

## 3. Statuts dashboard attendus (slice)

| Item | Valeur |
|------|--------|
| HARD | REDUCED — REMAINS OPEN |
| T-A6 | FOUNDATION ADVANCED — REMAINS INCOMPLETE |
| local persistence | SELECTED — BOUNDED LOCAL |
| product persistence | NOT_SELECTED |
| IAM | NOT_SELECTED |
| RUN | NOT READY |
| delivery | NOT AUTHORIZED |
| cutover | NOT AUTHORIZED |
| productionRollbackProven | false |
| crossStoreDurable | false |

## 4. Hors scope fonctionnel

Agent réel · shell · GPT live comme dépendance V1 · multi-tenant · IAM · Critical ack authentifié · delivery · cutover · fermeture blockers.

```

### `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/03-t-a0-to-t-a7-ui-mapping.md`

```markdown
# 03 — T-A0→T-A7 UI mapping

## Principe

UI → `VerticalSliceFacade` → use cases OA / fonctions T-A7 → adapters → projections.

## Matrice

| Étape UI | Module | Use case / API | Input UI | Output UI | Erreurs → UI |
|----------|--------|----------------|----------|-----------|--------------|
| Create | T-A0 | `ResolveDoctrinePackage.resolve` | pin doctrine défaut registry local | doctrine active | DOCTRINE_UNRESOLVED → banner + retry |
| Create | T-A1 | `CreateProject.execute` | title, objective, context, actor local demo, pin, idempotencyKey | Project + LPS v1 | PROJECT_INVALID / ALREADY_EXISTS / PERSISTENCE_FAILURE |
| Overview | T-A1 | `GetProject` / `GetCurrentLivingProjectState` | projectId | fiche | NOT_FOUND |
| Recommend | T-A2 | `QualifyCycle` / `CreateCycle` / `UpdateEpistemicState` / `GetEpistemicState` | projectId, perceived criticality, constraints | CycleInstance + Recommendation epistemic | validation errors → form |
| Decision | T-A3 | `RecordHumanDecision` (+ optional confirmation APIs) | selectedOption, rationale, authority=`LOCAL_DEMO` mapping honnête | HumanDecision | STATE_CONFLICT / authority denied → blocked Critical |
| Authority | T-A3 | `VerifyAuthority` | demo evidence **non authentifiée** | ok=false pour Critical réel | Critical blocked state |
| Evidence/maturity | T-A6 | `EvaluateClaim` / `ProposeMaturity` / `RecommendNextGate` (RO) | project/cycle refs | claims/maturity/next gate | UNKNOWN/BLOCKED honest |
| Readiness | T-A7 | `evaluateHardFoundation`, `evaluateTA6Foundation`, `queryHardTa6FoundationAggregation`, `queryBlockerAggregation`, `evaluateBoundedClaim`, `describeBoundedPersistenceDecision`, `queryOperationalReadiness` | — | dashboard cards | always fail-closed values |
| History | T-A7 F13 | `defaultBoundedHistoryProvider` / documentary | cursor/limit | list bornée | unavailable provider |
| Atomicity (fondation) | T-A7 | `runProjectCycleAtomicOperation` + optional audit port | internal facade | journal local | rollback failed shown honest |
| T-A4/T-A5 | display only | no StartExecution in V1–V5 happy path | — | « non lancé » | — |

## Actor local

`createdBy` / `actor` : ActorReference **demo locale** explicitement non-IAM (ex. `actor:local-morris-demo`).
Jamais `canActAsMorris` authentifié. Critical structurant → **blocked**.

## Interdits UI

Décider Critical · fermer HARD · marquer preuve suffisante · consommer gate Morris · inventer autorité.

```

### `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/04-information-architecture-and-navigation.md`

```markdown
# 04 — Information architecture and navigation

## 1. IA cible (premier slice)

```text
Home (disclosure + CTA)
 ├─ Create project
 ├─ Project overview
 │   ├─ Cycle recommendation
 │   ├─ Morris decision
 │   └─ Readiness dashboard
 └─ Bounded history (panel or section)
```

Demo/fixture entry (séparé) :
`Demo fixture mode` → VsDemoChrome (existant) — **non default**.

## 2. Navigation proposée

Réutiliser `StudioShell` flush :

| Onglet / rail | Route candidate | Remarque |
|---------------|-----------------|----------|
| Accueil | `/` ou `/studio` | disclosure |
| Créer | `/studio/projects/new` **ou** adapt `/projects/new` | D-VS-01 |
| Projet | `/studio/projects/[id]` | overview |
| Recommandation | section ou `/studio/projects/[id]/recommendation` | |
| Décision | `/studio/projects/[id]/decision` **ou** adapt `/decision` | |
| Readiness | `/studio/projects/[id]/readiness` **ou** adapt `/synthese` | |
| Cycle actif POC | `/cycle-actif` | secondary / later |

**Recommandation Cursor (D-VS-01)** : **Option hybride** —
- conserver StudioShell + tokens ;
- introduire namespace `/studio/*` pour le parcours OA afin d’éviter collision D1 `/nouvelle-demande` et VS fixtures ;
- garder `/decision` `/synthese` `/cycle-actif` comme alias/demo jusqu’à migration.

Ce n’est **pas** une décision Morris.

## 3. Hiérarchie visuelle

1. Disclosure mode local (toujours visible en bandeau)
2. Titre projet / étape
3. Action primaire unique
4. Statuts / blockers
5. Détail épistémique / technique (secondaire)

## 4. Densité

Standard — éviter dashboard « tout T-A7 » en premier viewport. Première vue = une job.

## 5. Copilot Nora

Conservé comme aide contextuelle **non autoritaire**. Messages anti-claim pré-écrits.

```

### `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/05-visual-contract-and-figma-reference.md`

```markdown
# 05 — Visual contract and Figma reference

## 1. Figma

| Champ | Valeur |
|-------|--------|
| FileKey | `lrjA1WEyRpL05vKR8k29LO` |
| Source | `app/styles/tokens.css` header |
| Page existante | `0:1` — **UX-B — P0** |
| Écriture ce cycle | **aucune** (pas d’écrasement P0) |
| Statut | `FIGMA TARGET RESOLVED — WRITE NOT EXECUTED — GIT VISUAL CONTRACT PRODUCED` |
| D-VS-05 reco | Créer page **`FRAMING — First visible VS`** dans le même fichier après GO Morris |

## 2. Design system

**Réutiliser** tokens existants (`--sfia-*`), StudioShell, StatusPill, MetricCard, CtaButton, Card.
**Interdit** : nouveau design system parallèle.

## 3. Dimensions

| Viewport | Size |
|----------|------|
| Desktop | 1440 × 1024 |
| Laptop | 1280 × 800 |
| Mobile ref | 390 × 844 |

## 4. Frames (contrat Git)

| # | Frame | Objectif | Contenu clé | Actions | États | Mapping | Acceptation |
|---|-------|----------|-------------|---------|-------|---------|-------------|
| 1 | Project list / empty | Accueil | disclosure + empty CTA | Créer | empty/loading | — | CTA unique visible |
| 2 | Create project | Formulaire | champs minimaux | Submit / Cancel | validation errors | T-A0/T-A1 | projet créé local |
| 3 | Project overview | Fiche | LPS, doctrine, blockers | Recommander / Décider | partial/blocked | T-A1/T-A7 | données cœur |
| 4 | Cycle recommendation | Reco | profil, justification, epistemic | Accepter pour décision | confidence low | T-A2 | bandeau ≠ décision |
| 5 | Morris decision | Décision | 4 actions + mode LOCAL DEMO | Valider/Refuser/Reporter/Corriger | Critical blocked | T-A3 | decisionId enregistré |
| 6 | Readiness dashboard | Synthèse | HARD/T-A6/IAM/persistence/RUN | Voir historique | NOT READY | T-A6/T-A7 | anti-claims visibles |
| 7 | Decision confirmation | Confirm | résumé avant accept | Confirmer / Annuler | — | T-A3 confirm APIs | pas d’auto-accept |
| 8 | Refusal / correction | États négatifs | motif | Retour overview | — | T-A3 | historique mis à jour |
| 9 | Critical blocked | Stop Critical | R-T-A3-1 OPEN | Retour | blocked | T-A3/T-A7 | aucun faux GO |
| 10 | Local data disclosure | Transparence | local vs produit | Fermer | — | T-A7 persistence | wording NOT_SELECTED |
| 11 | Mobile / narrow | Responsive | stack vertical | mêmes actions | — | — | usable 390 |
| 12 | Error / empty | Erreurs | messages liés champs | Retry | error | mapped codes | a11y labels |

Node IDs Figma : **à créer** (non disponibles — écriture non exécutée).

## 5. Layout contract

- Shell : rail gauche + topbar + canvas (+ copilot optionnel)
- Bandeau sticky : `LOCAL BOUNDED · IAM NOT_SELECTED · NO REAL AGENT · DELIVERY NOT AUTHORIZED`
- Une action primaire par écran
- Blockers en liste textuelle (pas couleur seule)
- Focus visible sur CTA et champs

## 6. Tokens

Conserver palette flush Studio existante. Pas de thème purple-AI générique nouveau.

```

### `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/06-local-data-and-application-composition.md`

```markdown
# 06 — Local data and application composition

## 1. Composition cible

```text
features/studio-vertical-slice/ (futur)
  facade/
    createProjectFlow.ts
    recommendCycleFlow.ts
    recordLocalMorrisDecisionFlow.ts
    readinessProjection.ts
  ports.ts          # interfaces only
ui screens → facade only (no domain rules)
```

Factories OA existantes :
- `createInMemoryProjectServices(doctrineResolver)`
- `createInMemoryCycleServices(...)`
- `createInMemoryDecisionServices(...)`
- `createInMemoryEvidenceReviewServices(...)`
- T-A7 pure functions
- Optional: `BoundedAtomicAuditStore` injecté pour journal Project↔Cycle

## 2. Options composition (D-VS-02)

| Option | Description | Verdict Cursor |
|--------|-------------|----------------|
| 1 | Facade + mémoire OA seule | viable |
| 2 | D1 SQLite product commands seules | **rejeté** pour cœur OA (D1 ≠ T-A1) |
| 3 | **Hybride** mémoire OA + audit SQLite optionnel | **recommandé** |

D1 `/projects` reste stack parallèle ; ne pas le présenter comme Project OA.

## 3. Distinctions d’état

| Type | Exemples | Lieu |
|------|----------|------|
| État métier | Project, LPS, Cycle, Decision | adapters OA mémoire (process) |
| Audit local | d1_atomic_audit | SQLite local path env |
| État UI | step, form dirty, panel open | React state |
| Cache | projections | mémoire éphémère |
| Fixture | VS-UX-* | fixtures/ + VsDemoContext |
| Vérité doc | method, framing docs | **Git** |

## 4. sessionStorage

Autorisé : UI éphémère / resume demo.
**Interdit** : source de vérité Project/LPS/Decision.

## 5. Fixture boundary

| Mode | Default | Happy path |
|------|---------|------------|
| Product-local OA | on | **oui** |
| VS fixture demo | off | **non** |
| Harness BeB | off | **non** (slice distinct doc 32) |

## 6. Interdits

Supabase · Postgres distant · API cloud · cookies auth · secrets · PII · réseau · package.json change sans arbitrage.

```

### `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/07-accessibility-responsive-and-error-states.md`

```markdown
# 07 — Accessibility, responsive, and error states

## Accessibilité

- Navigation clavier complète (tab order shell → form → CTA)
- Focus visible (tokens existants / outline)
- Labels liés (`htmlFor` / aria)
- Erreurs associées au champ (`aria-describedby`)
- Contraste AA sur texte et bandeaux
- Structure titres h1→h2
- Actions non fondées sur la couleur seule (StatusPill + texte)
- Live region pour erreurs submit

## Responsive

| Breakpoint | Comportement |
|------------|--------------|
| 1440 | Shell complet + copilot |
| 1280 | Copilot collapse optionnel |
| 390 | Rail → menu ; stack vertical ; CTA full-width |

## États

| État | Comportement |
|------|--------------|
| loading | skeleton / spinner + aria-busy |
| empty | CTA créer |
| error | message + retry |
| success | toast/inline + next step |
| blocked | Critical / HARD banners |

## Mapping erreurs (exemples)

| Code | UI |
|------|-----|
| PROJECT_INVALID | inline fields |
| DOCTRINE_UNRESOLVED | banner blocking |
| STATE_CONFLICT | conflict panel + refresh |
| authority denied / Critical | frame Critical blocked |

```

### `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md`

```markdown
# 08 — Implementation backlog and slicing

## Stratégie de livraison (recommandation, non décision)

**Plusieurs PR** (V1…V5), chacune mergeable ; commits atomiques 1–3.
Branche framing docs séparée. Pas de big-bang unique.

## Lot V1 — Composition locale Project

| Item | Contenu |
|------|---------|
| Objectif | Facade + CreateProject/LPS + doctrine resolve + tests |
| Fichiers probables | `app/lib/studio-vertical-slice/**` (nouveau), tests |
| Dépendances | T-A0/T-A1 memory factories |
| Tests | unit facade, idempotency, doctrine fail |
| Captures | non (pas UI obligatoire) |
| Stop | IAM, HTTP, package.json sans GO |
| Dette | facade initiale |
| Gate | `GO IMPLEMENT … LOT V1 …` |
| Verdict attendu | V1 COMPLETE — NO UI REQUIRED OR MINIMAL HOOK |

## Lot V2 — Parcours Create Project

| Item | Contenu |
|------|---------|
| Objectif | Écran create + validation + navigation overview |
| UI | StudioShell + form |
| Tests | component + parcours |
| Captures | desktop create + error |
| Gate | distinct après V1 |

## Lot V3 — Cycle Recommendation

T-A2 qualify/create + projection + bandeau ≠ décision.

## Lot V4 — Morris Decision

T-A3 record + LOCAL DEMO mode + Critical blocked + history.

## Lot V5 — Readiness Dashboard

T-A6/T-A7 projections + anti-claims + blockers.

## Lot V6 — Consolidation visuelle

Responsive, a11y, captures, Figma page compare, REX.

## D-VS-04 recommandation

Commencer par **V1 only** (composition). Ne pas livrer V1–V5 d’un coup.

```

### `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/09-validation-test-and-visual-proof-plan.md`

```markdown
# 09 — Validation, test, and visual proof plan

## Critères d’acceptation futurs (slice)

### Fonctionnels
- Project/LPS créés via T-A1 réel
- Doctrine résolue via T-A0
- Cycle qualifié via T-A2
- Recommandation produite (epistemic)
- Décision locale via T-A3
- Dashboard dérivé T-A6/T-A7
- Blockers issus T-A7
- Historique borné
- Happy path **sans** fixture

### UX
- Parcours compréhensible sans jargon T-Ax en premier plan
- Prochaine action évidente
- Reco ≠ décision visible
- Local ≠ produit visible
- Aucun faux claim

### Technique
- Pas de logique domaine dans React
- typecheck/lint/build
- unit + component + parcours + boundaries
- pas d’API distante
- pas de dep inutile

### Visuel
- Contrat Git (et Figma page si D-VS-05)
- Captures desktop + responsive
- Pas de READY visuel sans preuve

### A11y
- Clavier, focus, labels, contraste, titres

## Preuves par lot

Chaque PR : tests verts + captures listées dans `08` + anti-claim checklist.

```

### `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/10-risks-reservations-and-morris-decision-pack.md`

```markdown
# 10 — Risks, reservations, and Morris decision pack

## Risques

| ID | Risque | Mitigation framing |
|----|--------|-------------------|
| R1 | Dupliquer UI POC sans OA | Facade obligatoire |
| R2 | VsDemoContext → store produit | Fixture-only boundary |
| R3 | sessionStorage métier | Interdit |
| R4 | Règles T-A2/3/7 dans React | Mapping + review boundaries |
| R5 | Confusion fixture/local/produit | disclosures + modes |
| R6 | Fausse autorité Morris | LOCAL DEMO + Critical blocked |
| R7 | Dashboard illisible | IA progressive |
| R8 | Persistance produit implicite | D-VS-02 hybride borné |
| R9 | API HTTP prématurée | Interdit V1–V5 |
| R10 | Design system parallèle | tokens existants |
| R11 | Doc 32 BeB confondu avec ce slice | Distinction explicite |

## Réserves ouvertes (blockers)

HARD REDUCED OPEN · T-A6 incomplete · B5/R1/R-M01 OPEN · R-T-A3-1 · IAM NOT_SELECTED · product persistence NOT_SELECTED.

## Decision pack Morris

### D-VS-01 — Stratégie UI
1. Adapter routes POC existantes
2. Nouveau namespace `/studio/*`
3. Remplacement progressif

**Reco Cursor** : **2 + adapt shell** (hybride). Non validé.

### D-VS-02 — Composition locale
1. Mémoire OA seule
2. D1 commands seules
3. Hybride mémoire + audit SQLite

**Reco Cursor** : **3**. Non validé.

### D-VS-03 — Mode démo
1. Fixtures séparées
2. Fixtures off by default
3. Suppression future fixtures

**Reco Cursor** : **2** puis trajectoire **3**. Non validé.

### D-VS-04 — Premier lot
1. Project only (V1)
2. Project + recommendation
3. Parcours complet

**Reco Cursor** : **1**. Non validé.

### D-VS-05 — Figma
1. Réutiliser page P0
2. Nouvelle page framing
3. Contrat Git only temporaire

**Reco Cursor** : **2** après GO ; **3** satisfait ce cycle. Non validé.

## Anti-overreach

Aucune option ci-dessus n’est `DECIDED` / `ADOPTED` dans ce cycle.

```

## Matrice de complétude pack

| Doc | Présent | Complet pour framing |
|-----|---------|----------------------|
| README | oui | oui |
| 01 inventaire | oui | oui |
| 02 journey | oui | oui |
| 03 mapping | oui | oui |
| 04 IA nav | oui | oui |
| 05 visual/Figma | oui | oui |
| 06 data/composition | oui | oui |
| 07 a11y | oui | oui |
| 08 backlog | oui | oui |
| 09 validation | oui | oui |
| 10 risks/decisions | oui | oui |

## Git final

- branche: `framing/sfia-studio-first-user-visible-vertical-slice`
- HEAD: `c1955179a36079e060c41a845c2a1950084966c8`
- upstream: **aucun**
- tracked clean
- untracked: `.tmp-sfia-review/**`
- **aucun fichier applicatif modifié**
- **aucun push projet**

## Actions non exécutées

implémentation React · routes · tests app · harness · IAM · product persistence · agent réel · delivery · cutover · push framing · PR · merge · écriture Figma · fermeture blockers

## Gate candidat

`GO IMPLEMENT FIRST USER-VISIBLE SFIA STUDIO VERTICAL SLICE LOT V1 — LOCAL PROJECT CREATION AND CORE COMPOSITION — REUSE EXISTING UI SHELL — NO IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

Condition: Morris tranche D-VS-01, D-VS-02, D-VS-04 (idéalement D-VS-03).

## Verdict

`FIRST USER-VISIBLE SFIA STUDIO VERTICAL SLICE FRAMING COMPLETE — EXISTING POC UI AUDITED — PROJECT TO CYCLE RECOMMENDATION TO MORRIS DECISION TO READINESS DASHBOARD CONTRACT DEFINED — T-A0 TO T-A7 REUSE MAPPED — LOCAL BOUNDED DATA ONLY — IMPLEMENTATION BACKLOG READY FOR MORRIS DECISION — NO APPLICATION CODE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER — HANDOFF UPDATED AND REMOTE VERIFIED`
