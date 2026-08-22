# SFIA Studio — Product Completion — Wave 1 — Delivery Readiness Qualification

| Champ | Valeur |
|---|---|
| **Projet** | SFIA Studio — Product Completion |
| **Cycle** | 8 — Delivery / implémentation — **QUALIFICATION / READINESS ONLY** |
| **Profil SFIA** | CRITICAL |
| **Typologie** | DOC |
| **Vague** | **W1 — Vérité, contexte et continuité** |
| **Base Git** | `origin/main` @ `7750b2a4017338c1a236433c4db8f5cc97dc2feb` |
| **Branche analyse** | `docs/sfia-studio-g2-doctrinepackage-materialization-decision` *(G2 truth sync candidate · ≠ main until merge)* |
| **GO Morris consommé (backlog)** | **VALIDATE SFIA STUDIO PRODUCT COMPLETION CYCLE 5** — modèle 5 Epics · 4 Vagues · cut-line P0/P1 · CKC RESOLVE→CONSUME→INTEGRATE · réserve audit R5 non bloquante · **NO DELIVERY AUTHORIZED BY THIS VALIDATION** |
| **GO Morris consommé (readiness Cursor)** | **QUALIFICATION READINESS W1** — analyse repo-first · aucune implémentation |
| **GO Morris consommé (G2 truth sync)** | **RECORD G2 PRODUCT DOCTRINEPACKAGE MATERIALIZATION DECISION IN GIT** — synchronize DP↔CKC · W1 readiness · backlog · Roadmap · **NO G3 · NO PACKAGE IMPLEMENTATION · NO DELIVERY** |
| **Verdict ChatGPT (review finale)** | **W1 READINESS QUALIFIED — MACRO SCOPE + ARCHITECTURE SUFFICIENT — DELIVERY NOT YET AUTHORIZED — NO STRUCTURAL ARCHITECTURE GAP** |
| **Statut** | **CHATGPT READINESS QUALIFIED — INTEGRATED ON MAIN (PR #393) — G1 CLOSED — G2 DECIDED BY MORRIS — G2 DOCUMENTARY SYNC CANDIDATE — G3 NOT AUTHORIZED — NO DELIVERY AUTHORIZED** |
| **Runtime v3** | **NON ADOPTED** |
| **Delivery** | **NON AUTORISÉE** |
| **REAL** | **ZERO** |

## Anti-affirmations

- **≠** W1 implémentée · **≠** W1 prouvée · **≠** READY FOR DELIVERY · **≠** Phase B complète · **≠** REAL · **≠** runtime v3 ADOPTED.
- Backlog + readiness + Roadmap **INTEGRATED ON MAIN** via PR #393 · G1 **CLOSED**.
- `packageVersion` **`1.0.0`** **choisi par Morris (G2)** · **≠** product package matérialisé · **≠** runtime binding implémenté.
- `consumed=true` **≠** preuve Nora Phase B · Phase A **≠** Phase B.

---

## 1. Métadonnées / Git truth

| Field | Value |
|---|---|
| repo | `mcleland147/sfia-workspace` |
| pwd | `/Users/morris/Projects/sfia-workspace` |
| branch | `docs/sfia-studio-g2-doctrinepackage-materialization-decision` |
| HEAD | *(G2 truth sync candidate · see PR)* |
| origin/main | `7750b2a4017338c1a236433c4db8f5cc97dc2feb` |
| PR #393 | **MERGED** · merge `7750b2a4017338c1a236433c4db8f5cc97dc2feb` |
| push/main CI | SFIA Studio CI **run #274** · databaseId **`32575982499`** · event `push` · conclusion **SUCCESS** |
| backlog on main | `05-product-completion-backlog-user-stories.md` — **INTEGRATED ON MAIN** |
| readiness on main | `07-product-completion-wave-1-delivery-readiness.md` — **INTEGRATED ON MAIN** |
| intégration Git (G1) | **CLOSED / SATISFIED** — PR #393 merge + push/main CI #274 SUCCESS |

---

## 2. Décisions Morris consommées

| Décision | Effet readiness |
|---|---|
| Backlog Cycle 5 **VALIDÉ** Morris | Scope W1 authoritative depuis backlog local + handoff |
| **NO DELIVERY** par validation backlog | Ce document ne autorise pas Delivery |
| C6 **CLOSED** Morris | TD-C6-01…06 = implement-only · pas de réouverture |
| D01-NARROW · D02 Option B · D05 NONE **ADOPTED** | Direction Phase A suffisante · pas de réouverture |
| **G2 DECIDED BY MORRIS (2026-08-22)** | `pkg:sfia-studio-doctrine-v3@1.0.0` · OPTION A root `projects/sfia-studio/app/lib/oa/doctrine/product/` · resolver/repository **KEEP** · fixture **QUARANTINE / TEST-ONLY → RETIRE LATER** · **implementation = G3** |
| Réserve audit R5 (non bloquante) | Acceptée · traçabilité TE vs US clarifiée |
| runtime v3 **NON ADOPTED** | Hors scope W1 |

---

## 3. Hiérarchie des sources

| Priorité | Sources |
|---|---|
| 1 — Backlog validé | `05-product-completion-backlog-user-stories.md` — **INTEGRATED ON MAIN (PR #393)** |
| 2 — Produit / architecture | C1 · C2 · FA · UX · C6 delta · DP↔CKC qualification |
| 3 — Runtime Git | `projects/sfia-studio/app/**` (état `@ origin/main`) |
| 4 — Process | Build Doctrine · Roadmap · SFIA method · CKC delivery guidance (cognitive only) |
| 5 — v3 framing | Contradiction-check only |

---

## 4. Capacité / outcome produit W1

**Résultat utilisateur W1 (backlog §9) :** le Pilote peut **créer/reprendre un Project** avec vérité reconstructible · doctrine/CKC applicable résolu honnêtement · autorité non inventée · **seam CKC→Nora bornée** démontrée — **sans** closure complète recovery E2E (W3) ni Phase B complète (W2/W3).

**Outcomes C1 servis (partiellement) :** O-01 · O-02 · O-03 (seam) · O-04 (ordre autorité) · O-09 · prérequis O-10/O-12.

**Lot cohérent ?** **OUI avec condition** — ce n'est pas du plumbing pur si Track E (reprise produit) et seam D sont inclus dans l'exit proof ; sinon risque de fausse sortie « infra-only » (anti-claim backlog explicite).

---

## 5. Scope W1 exact

### Inclus (P0 + enablers)

| ID | Scope W1 |
|---|---|
| US-P0-01 | Reprise honnête Project |
| US-P0-02 | Continuité sémantique inter-session Nora |
| US-P0-03 | Trajectoire durable proposed/decided |
| US-P0-04 | Confirmation durable scoped restart-safe |
| US-P0-05 | Ordre K→L→M→N |
| US-P0-06 | CKC Phase A package-bound |
| US-P0-07 | **Foundation slice only** (≠ closure E2E) |
| US-P0-08 | Seam CKC→Nora bornée (≠ Phase B closure) |
| TD-C6-01/02/04/05/06 | Enablers principaux |
| TD-C6-03 | Si requis vérité autorité/audit W1 |
| DK-01…07 | Phase A |
| DK-08 | Partiel — seam W1 uniquement |

### Explicitement hors W1 (W2/W3/W4)

| Reste | Vague |
|---|---|
| US-P1-14 Phase B complète | W2–W3 |
| US-P0-07 closure E2E recovery/replan | W3 |
| US-P1-04…07 exécution/evidence/boucle | W3 |
| US-P1-10/13 PE closure | W4 |
| REAL agent execution | gated séparément |

---

## 6. Inventaire état repo courant

### DoctrinePackage

| Élément | État |
|---|---|
| `ResolveDoctrinePackage` | **KEEP** — fail-closed · registry local · pas fallback v2.6 |
| Registry fixture | **1 entrée** : `pkg:studio-v3-oa@1.0.0` |
| `pkg:sfia-studio-doctrine-v3` | **Absent runtime** — identité adoptée docs only |
| Default pin | `DEFAULT_LOCAL_DOCTRINE_PIN` → fixture |

### Product SQLite (M1–M5)

| Domaine | SQLite ? | Fichier factory |
|---|---|---|
| Project / LPS | **OUI** | `createSqliteProductProjectServices.ts` |
| CycleInstance | **OUI** | `createSqliteCycleServices.ts` |
| HumanDecision | **OUI** | `createSqliteDecisionServices.ts` |
| ExecutionContract | **OUI** | `createSqliteExecutionContractServices.ts` |
| ExecutionAttempt / Evidence | **OUI** | M4/M5 factories |
| **Trajectory** | **NON — Memory** | `MemoryTrajectoryRepository` même en stack SQLite |
| **Epistemic** | **NON — Memory** | `MemoryEpistemicRepository` |
| **Confirmation** | **NON — Memory** | `MemoryConfirmationRepository` |

### CKC Phase A

| Élément | État |
|---|---|
| `cycleTypeCatalog.ts` | Static · **method git paths** comme provenance |
| `ckcReferenceManifest.ts` | **Method binding** — SoT manifest |
| `ckcQualificationResolver.ts` | Manifest + catalog · `doctrineStatus: method-candidate` hardcodé |
| `qualifyCycleWithCkc.ts` | Orchestrateur unique · **KEEP/ADAPT** |
| Package-internal index | **NOT IMPLEMENTED** |

### Composition / F2

| Élément | État |
|---|---|
| `orchestrateF2.ts` | Qualify → cycle/LPS → proposal · **KEEP/ADAPT** |
| `qualify.ts` | Appelle `qualifyCycleWithCkc` via runtime stack |
| Conversation / proposals | **Process-local** (`proposalStore`, orchestrateTurn) |
| Nora post-evidence | F3 only — hors seam W1 direct |

### UI product path

| Route | Engine | W1 target ? |
|---|---|---|
| `/studio/*` | OA Product SQLite + pre-m6-product-ui | **OUI — canonical** |
| `/projects/*` · `/workspace` | D1 SQLite | **NON — HARVEST/FREEZE** |

---

## 7. Classification des actifs

| # | Actif | Verdict | Notes |
|---|---|---|---|
| 1 | OA Native backbone | **KEEP** | Ports/use-cases pattern |
| 2 | Product SQLite / SqliteProductStore | **KEEP** | Schema M5-0.1.0 additive |
| 3 | ResolveDoctrinePackage / ports | **KEEP** | |
| 4 | FilesystemDoctrinePackageRepository | **KEEP / ADAPT** | Adapter matérialisation future · ≠ décision SoT permanente |
| 5 | Fixture `pkg:studio-v3-oa` | **FREEZE / QUARANTINE** | Ne pas promouvoir silencieusement |
| 6 | Family `pkg:sfia-studio-doctrine-v3` | **ADOPTED identity · G2 DECISION CLOSED · RUNTIME MATERIALIZATION OPEN** | `1.0.0` + OPTION A root decided · not in registry yet |
| 7 | Manifest contract | **ADAPT / COMPLETE** | Index CKC interne package (D02) |
| 8 | CycleTypeCatalog core | **KEEP** | Routing identity |
| 9 | Catalog method-path CKC bindings | **REPLACE / ADAPT** | Exit SoT runtime |
| 10 | CKC_REFERENCE_MANIFEST | **REPLACE** | Par index package-internal |
| 11 | CkcQualificationResolver | **ADAPT** | Pas second resolver |
| 12 | CkcConsumptionProof | **COMPLETE / ADAPT** | Phase A · ≠ Phase B claim |
| 13 | vertical-slice-runtime / F2 | **ADAPT** | Pas second orchestrator |
| 14 | Trajectory ports | **KEEP** | |
| 15 | MemoryTrajectoryRepository | **REPLACE** | SQLite adapter TD-C6-01/06 |
| 16 | Confirmation ports | **KEEP** | |
| 17 | MemoryConfirmationRepository | **REPLACE/COMPLETE** | TD-C6-02/05 granted-upward |
| 18 | Epistemic ports | **KEEP** | |
| 19 | MemoryEpistemicRepository | **COMPLETE/REPLACE** | TD-C6-04 selective |
| 20 | Product SQLite schema | **COMPLETE** | Migration additive post GO |
| 21 | `/studio` + pre-m6-product-ui | **KEEP / ADAPT** | W1 product path |
| 22 | `/projects` + D1 | **HARVEST / FREEZE** | Pas chemin produit parallèle |

---

## 8. Registre des écarts W1

| Gap ID | Description | US/REQ | Priorité | Bloque Delivery ? |
|---|---|---|---|---|
| GAP-W1-01 | Backlog + readiness + roadmap pas sur main | **G1** | P0 governance | **NON** — **CLOSED / SATISFIED** · PR #393 + CI #274 |
| GAP-W1-02 | Product package non matérialisé | **G2 structural + G3 runtime** | P0 | **OUI** — G2 decision **CLOSED** · runtime materialization **OPEN — G3 implementation gap** |
| GAP-W1-03 | CKC runtime dépend manifest/chemins méthode | DK-01…07 · US-P0-06 | P0 | **OUI** |
| GAP-W1-04 | Trajectory Memory-only | TD-C6-01/06 · US-P0-03 | P0 | **OUI** |
| GAP-W1-05 | Confirmation Memory-only | TD-C6-02/05 · US-P0-04 | P0 | **OUI** |
| GAP-W1-06 | Epistemic Memory-only | TD-C6-04 · US-P0-02 | P0 | **OUI** |
| GAP-W1-07 | Seam CKC→Nora non prouvée | US-P0-08 · DK-08 partial | P0 | **OUI** |
| GAP-W1-08 | Fixture pin leakage UX | DK-04 | P1 | Partiel |
| GAP-W1-09 | Conversation/process-local non durable | US-P0-01/02 | P1 | Disclosure requis · attendu |
| GAP-W1-10 | AuthorityVerificationReceipt absent | TD-C6-03 | P2 W1 | Optionnel W1 |
| GAP-W1-11 | D1 parallel UI/engine | Resume path | P2 | Scope `/studio` only |

---

## 9. Readiness DoctrinePackage / CKC Phase A

### Présence product package

| Question | Réponse |
|---|---|
| Product package cible présent ? | **NON** — seul `pkg:studio-v3-oa@1.0.0` fixture |
| Registry contenu | `fixtures/registry.json` — 1 entry |
| `pkg:sfia-studio-doctrine-v3` | Docs convergence only |

### Gate Morris minimum (G2) — **DECIDED BY MORRIS**

**G2 structural decision CLOSED (Morris 2026-08-22) :**

1. **first packageVersion** = **`1.0.0`**
2. **physical materialization root** = **OPTION A** `projects/sfia-studio/app/lib/oa/doctrine/product/`
3. **historical fixture** = **QUARANTINE / TEST-ONLY → RETIRE LATER**

**Still G3 (implementation · NOT AUTHORIZED) :** exact cutover policy · default pin replacement · registry/manifest creation · runtime wiring.

**Decision record :** voir §26 **PRODUCT DOCTRINEPACKAGE MATERIALIZATION — MORRIS DECISION PACK**.

---

## 26. PRODUCT DOCTRINEPACKAGE MATERIALIZATION — MORRIS DECISION PACK

**But :** enregistrer **G2 DECIDED BY MORRIS** · conserver provenance historique Options A/B/C · **G2 Git sync = candidate until PR merge**.

### Facts locked

| Fact | Statut |
|---|---|
| Product family identity | `pkg:sfia-studio-doctrine-v3` — **ADOPTED** |
| Historical fixture | `pkg:studio-v3-oa@1.0.0` — **≠ product package** · **QUARANTINE / TEST-ONLY → RETIRE LATER** *(G2)* · **still present until G3** |
| D02 Option B | package manifest → digest-protected internal CKC index → Studio-native CKC — **ADOPTED** |
| D05 fallback | **NONE** for first product package — **ADOPTED** |
| `DoctrinePackageRepositoryPort` | **KEEP** |
| `ResolveDoctrinePackage` | **KEEP** |
| `FilesystemDoctrinePackageRepository` | current adapter — **MAY BE REUSED** |
| Current physical layout (`lib/oa/doctrine/fixtures/`) | **≠ permanent Product SoT** · **current runtime root until G3** |
| first `packageVersion` | **`1.0.0` — ADOPTED BY MORRIS — G2** |
| physical materialization root | **OPTION A** `projects/sfia-studio/app/lib/oa/doctrine/product/` — **ADOPTED BY MORRIS — G2** |

**Repo evidence (runtime @ `origin/main` @ `7750b2a…`) :**

| Élément | Chemin actuel |
|---|---|
| Default `registryRoot` | `projects/sfia-studio/app/lib/oa/doctrine/fixtures/` (`resolveDefaultVerticalSliceRoots` · `paths.ts`) |
| Registry file | `fixtures/registry.json` — schema `0.1.0-oa-registry` |
| Package layout | `fixtures/packages/{relativePackageDir}/manifest.json` |
| Fixture entry | `packages/pkg-studio-v3-oa-1.0.0` |
| Default pin | `DEFAULT_LOCAL_DOCTRINE_PIN` → fixture |

**HARD RULE :** `fixtures/packages` **≠** racine produit permanente recommandée · toute option utilisant ce chemin = **TEMPORARY TRANSITION ONLY · WITH EXPLICIT EXIT · NOT RECOMMENDED AS TARGET**.

### OPTION A — PRODUCT-NATIVE ROOT CLOSE TO EXISTING DOCTRINE MODULE — **ADOPTED BY MORRIS (G2)**

| Dimension | Détail |
|---|---|
| **Principe** | Réutiliser `FilesystemDoctrinePackageRepository` + ports existants · racine sémantiquement honnête **non-fixture** sous le module doctrine OA |
| **Candidate root** | `projects/sfia-studio/app/lib/oa/doctrine/product/` *(registry.json + packages/)* — **ADOPTED BY MORRIS — G2** |
| **Adapter reused** | `FilesystemDoctrinePackageRepository` · `ResolveDoctrinePackage` · wiring via `registryRoot` option |
| **File impact (future G3)** | **CREATE** `product/registry.json` · **CREATE** `product/packages/pkg-sfia-studio-doctrine-v3-{version}/manifest.json` + CKC index · **MODIFY** `paths.ts` or composition default `registryRoot` · **MODIFY** `localProjectComposition.ts` default pin · tests pointing at `fixtures/` |
| **Fixture isolation** | `fixtures/` reste pour tests/historique · fixture quarantaine explicite · pas de promotion silencieuse |
| **Cutover** | G3 implementation · pin default + moment cutover · dual-registry transition possible short-term |
| **Test/CI** | Tests doctrine existants (`resolveDoctrinePackage.test.ts`) · adapter registry root in tests · remote CI @ `7750b2a` **GREEN** (run #274 `32575982499`) |
| **Provenance** | Product packages = published product artifacts · digest-protected manifest |
| **Debt** | Deux racines registry possibles pendant transition |
| **Exit path** | Fixture registry read-only/quarantine · single product registryRoot en production path |
| **Pros** | Sémantique claire · minimal code · aligné D01-NARROW |
| **Cons** | Migration wiring default root · coordination tests |
| **Risks** | Confusion si transition mal documentée |

**MORRIS DECISION — OPTION A ADOPTED** *(2026-08-22)* — historical recommendation candidate superseded.

### OPTION B — PRODUCT-LEVEL PACKAGE ROOT UNDER SFIA STUDIO PROJECT — **NOT SELECTED** *(historical alternative)*

| Dimension | Détail |
|---|---|
| **Principe** | Artefacts package au niveau projet Studio (hors `app/lib/oa/doctrine/fixtures`) · même port/adaptateur filesystem |
| **Candidate root** | `projects/sfia-studio/doctrine-packages/` *(registry.json + packages/)* — **DISCOVERED FROM REPO** : aucun répertoire existant · création future autorisée seulement sous **G3** |
| **Adapter reused** | `FilesystemDoctrinePackageRepository` avec `registryRoot` absolu résolu depuis app root |
| **File impact (future G3)** | **CREATE** project-level tree · **MODIFY** `paths.ts` / runtime composition pour résoudre chemin projet · CI path checks |
| **Fixture isolation** | `fixtures/` inchangé pour tests unitaires |
| **Cutover** | Idem Option A |
| **Test/CI** | Tests must resolve project-relative path · packaging in monorepo layout |
| **Provenance** | Packages visibles comme artefacts produit Studio distincts du code runtime |
| **Debt** | Chemin cross-module · résolution cwd-sensitive |
| **Exit path** | Consolidation vers Option A ou registry unique documentée |
| **Pros** | Séparation code runtime / artefacts doctrine produit très visible |
| **Cons** | Plus de wiring path · pas de precedent repo today |
| **Risks** | Résolution path Next.js vs tests vs CI |

### OPTION C — TEMPORARY EXISTING FIXTURE ROOT — **NOT SELECTED** *(historical alternative · NOT RECOMMENDED AS TARGET)*

| Dimension | Détail |
|---|---|
| **Principe** | Matérialiser temporairement sous `lib/oa/doctrine/fixtures/packages/` |
| **Candidate root** | `fixtures/packages/pkg-sfia-studio-doctrine-v3-{version}/` |
| **Label** | **TEMPORARY WITH EXIT · NOT TARGET · fixture leakage debt visible** |
| **Adapter reused** | Aucun changement registryRoot |
| **File impact** | **CREATE** package dir beside fixture · **MODIFY** `registry.json` entry · default pin |
| **Fixture isolation** | **FAIBLE** — product et fixture cohabitent |
| **Exit path** | Migration obligatoire vers Option A ou B · quarantaine `pkg:studio-v3-oa` |
| **Pros** | Minimal short-term diff |
| **Cons** | Violates semantic honesty · debt durable · **NOT RECOMMENDED AS TARGET** |
| **Risks** | Promotion silencieuse fixture→product · confusion gouvernance |

### packageVersion — decision table

| Decision | Value | Rationale | Means | Does NOT mean |
|---|---|---|---|---|
| **MORRIS G2** | **`1.0.0`** | Convention semver · first published product envelope | First immutable published product identity under family | Runtime maturity · W1 complete · Phase B · REAL · runtime v3 ADOPTED |

**Historical candidates (superseded by G2) :**

| Candidate | Rationale | Means | Does NOT mean |
|---|---|---|---|
| `0.1.0` | Pre-release semantics | Early product envelope · explicit non-final | **≠** CKC `contractVersion 0.1.0` automatically |
| `0.1.0-v3.1-d1`-style | Alignement naming catalogue snapshot | Traceability to catalog pin | **≠** package digest · **≠** catalog hash · coupling risk |

`packageVersion` **≠** runtime maturity · **≠** CKC `contractVersion` · **≠** package digest · **≠** runtime v3 ADOPTED.

### G2 MORRIS DECISION — PRODUCT DOCTRINEPACKAGE MATERIALIZATION — **DECIDED**

```
- package family:     pkg:sfia-studio-doctrine-v3  [LOCKED]
- first packageVersion:   1.0.0  [ADOPTED BY MORRIS — G2]
- materialization strategy/root:  OPTION A — projects/sfia-studio/app/lib/oa/doctrine/product/  [ADOPTED BY MORRIS — G2]
- existing resolver/repository:   KEEP  [LOCKED]
- binding:              D02 OPTION B  [LOCKED]
- fallback:             NONE  [LOCKED]
- historical fixture:   QUARANTINE / TEST-ONLY → RETIRE LATER  [ADOPTED BY MORRIS — G2]
- implementation:       NOT AUTHORIZED UNTIL G3
```

**Future G3 file impact (EXPECTED CREATE · not authorized this cycle) :**

- `projects/sfia-studio/app/lib/oa/doctrine/product/registry.json`
- `projects/sfia-studio/app/lib/oa/doctrine/product/packages/...`
- `fixtures/registry.json` remains **CONDITIONAL transitional/quarantine only**

---

### DK-01…DK-08 qualification

| DK | État courant | Cible W1 | Fichiers impact | Exit proof |
|---|---|---|---|---|
| **DK-01** | Catalog refs `method/...` paths | Package index SoT | `cycleTypeCatalog.ts` · resolver | Aucune ref method-path comme SoT runtime |
| **DK-02** | `CKC_REFERENCE_MANIFEST` method | Index interne package | `ckcReferenceManifest.ts` → package artifact | Manifest remplacé sur chemin produit |
| **DK-03** | Proof sans package identity complète | Proof schema COMPLETE | `ckcConsumptionProof.ts` · resolver | CA-PC-33/34 reconstructible |
| **DK-04** | Default pin = fixture | Product cutover + quarantine | `localProjectComposition.ts` · registry | Pas de promotion silencieuse fixture |
| **DK-05** | `doctrineStatus=method-candidate` hardcodé | Package-aware status | `ckcQualificationResolver.ts` · catalog | Status depuis package/index |
| **DK-06** | Dual path A/B non joints | Composition service/F2 | `qualify.ts` · `orchestrateF2.ts` · runtime | Pin projet → qualification chain |
| **DK-07** | Synthetic fallback global | Package-local or none (D05) | resolver · catalog | Fail-closed NONE first package |
| **DK-08** | `consumed` over-read | Seam proof only W1 | F2 prompt/context injection | Output attributable · ≠ Phase B closure |

**Phase A ≠ Phase B :** prouvé par design — resolver `consumed=true` insuffisant · US-P0-08 explicitement bornée · US-P1-14 reste W2/W3.

---

## 10. Readiness durabilité C6

| TD | État | Fichiers actuels | Delta future Delivery |
|---|---|---|---|
| **TD-C6-01** | NOT IMPLEMENTED | `memoryTrajectoryRepository.ts` · `createSqliteCycleServices.ts` L66 | `sqliteTrajectoryRepository.ts` · migration additive · tests restart |
| **TD-C6-02** | NOT IMPLEMENTED | `memoryConfirmationRepository.ts` · `createSqliteDecisionServices.ts` L65 | SQLite confirmation scope · CAS consume |
| **TD-C6-03** | NOT IMPLEMENTED | absent | `AuthorityVerificationReceipt` repo · optional W1 |
| **TD-C6-04** | NOT IMPLEMENTED | `memoryEpistemicRepository.ts` | selective-by-materialization rules |
| **TD-C6-05** | NOT IMPLEMENTED | same as C6-02 | `granted` durable · `requested` ephemeral |
| **TD-C6-06** | NOT IMPLEMENTED | trajectory memory | explicit current pointer column/logic |

**Schema :** une migration additive sur `lib/oa/project/infrastructure/sqlite/db.ts` suffit (M5 pattern).

**Parallélisation B vs A :** Track B / B1–B3 peuvent démarrer sous **G3 W1 Delivery GO**, **en parallèle** de Track A selon les dépendances **G2** applicables, avec coordination du schema B5 · **A1 (matérialisation) bloque A** mais **ne bloque pas** B1–B3 techniquement une fois G3 ouvert.

**Pas de réouverture C6.**

---

## 11. Readiness reprise / continuité

| Capacité | État | Gap |
|---|---|---|
| Reprise Project/LPS SQLite | **Partiel** | Polish UX + disclosure |
| Trajectory reconstructible | **NON** | Memory loss restart |
| Confirmation reconstructible | **NON** | Memory loss |
| Epistemic reconstructible | **NON** | Memory loss |
| Conversation disclosure | **Partiel** | F2 notices existants |
| Recovery foundation | **Partiel** | US-P0-07 slice sans E2E |

**Product path W1 :** `/studio/projects/[id]` → `ProjectWorkspacePage` · surfaces Recovery/History/LPS.

---

## 12. Readiness composition / seam Nora bornée

| Point | Seam actuel | Cible W1 |
|---|---|---|
| DoctrinePackage → qualification | Pin sur project · resolver ignore package CKC index | Pin → manifest → **package index** → artifact |
| Phase A proof → LPS | `projectCkcResolutionRef` | Enrichir proof package identity |
| CKC content → Nora | **Non connecté** — F2 qualify ne charge pas contenu CKC cognitif | **Track D** : load resolved content → inject F2/orchestrateTurn context · output attributable |
| Second orchestrator | **NON** | ADAPT existing F2 |

**US-P0-08 minimum :** 1 cycle type représentatif · comportement différencié vs contrôle · Recommendation only · preuve ≠ US-P1-14.

---

## 13. Cartographie fichiers impact (candidate — aucune modification ce cycle)

### MODIFY (future Delivery)

| Fichier | Workstream |
|---|---|
| `lib/oa/project/infrastructure/sqlite/db.ts` | B5 schema |
| `lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts` | B1 wiring |
| `lib/oa/cycle/infrastructure/sqlite/sqliteTrajectoryRepository.ts` | **CREATE** B1 |
| `lib/oa/decision/infrastructure/sqlite/createSqliteDecisionServices.ts` | B2 wiring |
| `lib/oa/decision/infrastructure/sqlite/sqliteConfirmationRepository.ts` | **CREATE** B2 |
| `lib/oa/cycle/infrastructure/sqlite/sqliteEpistemicRepository.ts` | **CREATE** B3 |
| `lib/oa/cycle/infrastructure/ckcQualificationResolver.ts` | A4 |
| `lib/oa/cycle/infrastructure/ckcReferenceManifest.ts` | A3 replace |
| `lib/oa/cycle/domain/cycleTypeCatalog.ts` | A3 ADAPT |
| `lib/oa/cycle/domain/ckcConsumptionProof.ts` | A5 |
| `lib/vertical-slice-core/localProjectComposition.ts` | A1 pin/registry (G2-dependent root) |
| Product DoctrinePackage registry/materialization (G2-dependent) | **G2 ADOPTED OPTION A:** `lib/oa/doctrine/product/` — registry + package tree · **EXPECTED CREATE under G3** · **NOT AUTHORIZED this cycle** |
| `lib/oa/doctrine/fixtures/registry.json` | **CONDITIONAL ONLY** — transitional/quarantine handling if explicitly required · **NOT target product registry** · **NOT guaranteed future modification** |
| `features/project-assistant/f2/orchestrateF2.ts` | C/D |
| `features/project-assistant/f2/qualify.ts` | C |
| `features/pre-m6-product-ui/surfaces/RecoverySurface.tsx` | E |

### KEEP (no structural change)

`resolveDoctrinePackage.ts` · `wireOaStack` · `createSqliteProductProjectServices.ts` · ports pattern.

---

## 14. Plan tests / evidence (future Delivery)

| Layer | Tests attendus |
|---|---|
| Unit | Trajectory/Confirmation/Epistemic repo · resolver fail-closed · proof schema |
| Integration | Restart process proof (M1/M5 pattern) · authority path · K→L→M→N order |
| Product | UAT reprise SC-01/13/14 · RecoverySurface · trajectory S6 |
| Seam | Nora output attributable · anti-claim Phase A≠B |
| CI | Existing OA suites green + new W1 suites |

**Baseline actuel (read-only) :**

| Commande | Résultat | Classification |
|---|---|---|
| Remote `origin/main` CI @ `7750b2a…` | **SUCCESS** — run #274 `32575982499` (typecheck · lint · build · unit · integration) | **CANONICAL BASELINE GREEN** |
| `npm run typecheck` (local) | **FAIL** — module `pg` FinOps absent localement | **LOCAL ENVIRONMENT / DEPENDENCY LIMITATION** · NON-W1 BLOCKING = **NO** |
| `npm test` OA subset (local) | **192/194 PASS** — 2 restart process proof (TSX worker path) | **LOCAL ENVIRONMENT / TEST INVOCATION LIMITATION** · unless CI reproduces |

**Rule :** local FAIL **≠** code baseline broken when remote CI canonique sur le même SHA est **GREEN**.

---

## 15. Workstream DAG

```
G2 package decision (Morris)
        |
        v
    TRACK A (Phase A) --------\
                               \
G3 W1 Delivery GO -------------> TRACK C (composition) → TRACK D (seam) → TRACK E (product proof) → W1 EXIT
        |                      /
        v                     /
    TRACK B (C6 durability) -/
```

**Track A ∥ Track B** : parallel candidates **after G3** (and G2 for Track A materialization) · convergence at **Track C**.

---

## 16. Critical path

1. **G1** Product Completion Git truth *(Draft PR → merge)*
2. **G2** Morris Product DoctrinePackage materialization decision
3. **G3** Morris W1 Delivery GO *(umbrella — absorbs former G-W1-03/04/05)*
4. **Track A ∥ Track B** en parallèle sous G3
5. **Track C → D → E** convergence · W1 E2E exit proof

**Goulot :** G2 (matérialisation) · puis intégration A+B+C+D+E.

**Anti-pattern corrigé :** Phase A **→** C6 **→** composition en séquence stricte **≠** modèle cible · A et B sont **∥ candidates**.

---

## 17. Parallélisation

| Parallèle possible | Condition |
|---|---|
| **Track B** (C6 adapters) **∥ Track A** | **Après G3** · schema design coordonné (B5) |
| **Track E** foundation (UI resume polish) **∥ Track A/B** | Partiel — sans claim exit |
| **Track D** | Après Phase A + durable LPS/epistemic (fin Track B) |
| **Exit proof** | **NON** avant A+B+C+D+E intégrés |

---

## 18. Dettes / exit paths

| Dette | Exit |
|---|---|
| Fixture `pkg:studio-v3-oa` | Quarantine après product cutover (DK-04) |
| Method paths in catalog | Package index (DK-01) |
| D1 parallel routes | FREEZE · pas W1 target |
| FinOps pg typecheck local | LOCAL ENVIRONMENT LIMITATION · remote CI green |
| Full Phase B | W2/W3 · gate distinct |

---

## 19. Qualification Fake / Real

| Boundary | Rule |
|---|---|
| Fixture `pkg:studio-v3-oa@1.0.0` | **≠ product package** · explicit cutover required |
| Fixture execution adapter | **≠ W1 proof** · REAL gated separately |
| W1 entry level | **NOT PROVEN** |
| This cycle proof | **REPOSITORY-INFORMED READINESS ONLY** |
| Future W1 Delivery proof | Deterministic product capability + bounded semantic seam |

**DETERMINISTIC PROVEN ≠ READY FOR REAL**

---

## 20. Gate register — modèle actif G1 / G2 / G3

| Gate | But | Statut | Owner | Exit / evidence |
|---|---|---|---|---|
| **G1** | Product Completion Git truth — backlog Morris-validé · readiness ChatGPT-qualifiée · roadmap sync sur **main** | **CLOSED / SATISFIED** | Morris | PR #393 merge `7750b2a…` + push/main CI #274 SUCCESS |
| **G2** | Product DoctrinePackage materialization — `packageVersion` · root · fixture disposition | **DECIDED BY MORRIS** · Git sync **CANDIDATE** | Morris | Decision §26 · G2 truth sync PR · **≠** implementation |
| **G3** | GO Morris W1 Delivery — umbrella autorise Track A+B+C+D+E sous décisions adoptées (C6 · D01/D02/D05 · G2) | **NOT AUTHORIZED** | Morris | Requiert G2 Git integration qualified + **new** Morris G3 GO |

**G3 consomme (implémentation · pas réouverture) :** TD-C6-01…06 · D01-NARROW · D02 Option B · D05 NONE · bounded seam US-P0-08 · **≠** full Phase B · **≠** REAL · **≠** runtime v3.

### Mapping audit (gates historiques G-W1-01…07)

| Ancien | Nouveau |
|---|---|
| G-W1-01 Backlog Git | **G1** |
| G-W1-02 Package materialization | **G2** |
| G-W1-03 C6 Delivery | **absorbed into G3** |
| G-W1-04 DP Phase A impl | **absorbed into G3** |
| G-W1-05 Bounded seam | **absorbed into G3** |
| G-W1-06 REAL | **N/A** W1 |
| G-W1-07 Product Git write | **downstream transport governance** — **NOT** a pre-Delivery blocker · commit/push/PR/merge restent gated par tranche future après G3 explicite |

---

## 21. Décisions structurantes encore requises

| Décision | Blocker ? | Owner |
|---|---|---|
| **G1** merge Product Completion truth on main | **CLOSED** — PR #393 |
| **G2** first packageVersion + materialization root/strategy | **DECIDED BY MORRIS** — Git sync candidate · runtime impl **OPEN (G3)** |
| **G3** W1 Delivery GO (umbrella) | **OUI** before any W1 coding · **NOT AUTHORIZED** |
| TD-C6-03 in W1 scope vs W2 | **NON** — optionnel W1 | Morris/ChatGPT |

**Aucune** nouvelle architecture DB/stack/registry/resolver parallèle requise · **NO STRUCTURAL ARCHITECTURE GAP**.

---

## 22. Exit proof W1 (fonctionnel unique)

W1 est **CLOSED** lorsque, sur **`/studio/*`** avec Product SQLite durable path, un scénario reproductible démontre :

1. **Reprise honnête** — durable vs non-durable disclosed · pas d'autorité inventée (US-P0-01)
2. **LPS + epistemic materialized** survive restart (US-P0-02 · TD-C6-04)
3. **Trajectory** proposed/decided + current pointer survive restart (US-P0-03 · TD-C6-01/06)
4. **Confirmation** granted durable · scope-bound · CAS · restored ≠ effective without revalidation (US-P0-04 · TD-C6-02/05)
5. **Order K→L→M→N** enforced (US-P0-05)
6. **Phase A** — package-bound CKC resolution · no method-path SoT · fail-closed NONE · proof schema (US-P0-06 · DK-01…07)
7. **Recovery foundation** — CTA requalify path · no silent auto-requalify (US-P0-07 slice)
8. **Bounded seam** — resolved CKC cognitive content → Nora → attributable Recommendation · ≠ Phase B closure (US-P0-08)

**Technical SUCCESS alone ≠ W1 exit.**

---

## 23. Frontière handoff W2

W2 reçoit :
- US-P1-14 Phase B complète · US-P1-01/02 Options/HD · US-P1-03 EC inspect · REQ-07/09 closure · catalog cognitive coverage beyond seam

W1 **ne doit pas** :
- Claim Phase B closed
- Claim recovery E2E closed
- Pull REAL execution

---

## 24. Delivery scope candidate (future — NOT AUTHORIZED)

| Track | Stories / TE |
|---|---|
| A | US-P0-06 · DK-01…07 |
| B | US-P0-03/04/02 · TD-C6-01/02/04/05/06 |
| C | Composition qualify chain |
| D | US-P0-08 · DK-08 partial |
| E | US-P0-01/05/07 foundation · US-P0-02 disclosure |

**Estimated P0 closure in W1 :** 7/8 US materially advanced · US-P0-07 **foundation only**.

---

## 25. Verdict readiness

### Réponses binaires obligatoires

| Question | Réponse |
|---|---|
| Architecture sufficiente ? | **OUI** |
| Nouvelle architecture requise ? | **NON** |
| Moteur parallèle requis ? | **NON** |
| Backlog Git-intégré ? | **OUI** *(G1 CLOSED · PR #393)* |
| packageVersion décidé ? | **OUI** *(G2 · `1.0.0` · ≠ materialized)* |
| Product package matérialisé ? | **NON** |
| Phase A runtime bound ? | **NON** *(G3 impl not authorized)* |
| Trajectory durable ? | **NON** *(impl not done)* |
| Confirmation durable ? | **NON** |
| Epistemic sélectif durable ? | **NON** |
| Seam CKC→Nora prouvée ? | **NON** |
| Baseline CI/tests | **GREEN on main** @ `7750b2a` (CI #274 `32575982499` SUCCESS) · local limitations only |
| Delivery GO recommandé now ? | **NON** |
| Structural architecture gap ? | **NON** |

### Verdict scale

## **W1 READINESS QUALIFIED — MACRO SCOPE + ARCHITECTURE SUFFICIENT — DELIVERY NOT YET AUTHORIZED — NO STRUCTURAL ARCHITECTURE GAP**

Architecture et macro scope **qualifiés** · ports OA/Product SQLite **réutilisables** · **pas** d'architecture parallèle · C6 + D01/D02/D05 + **G2 structural decision** **suffisants sous G3** · **G1 CLOSED** · **G2 DECIDED** · **G3** autorise implémentation W1 **only after new Morris GO** · Track A **∥** Track B · **DELIVERY NOT AUTHORIZED**.

### Blockers before G3 W1 Delivery GO

1. **G2 Git truth integration** — G2 Morris decision documentary sync on main *(this PR candidate)*
2. **G3** — **new** Morris W1 Delivery GO *(NOT AUTHORIZED · successful G2 merge ≠ automatic G3)*
3. **Runtime gaps** — product package materialization · Phase A impl · C6 durability · bounded seam *(G3 implementation · not closed)*

---

*Qualifié 2026-08-22 · ChatGPT readiness review consolidated · G1 CLOSED PR #393 · G2 DECIDED BY MORRIS · G2 Git sync Cycle 7 · G3 NOT AUTHORIZED · NO Delivery · NO REAL · runtime v3 NON ADOPTED.*
