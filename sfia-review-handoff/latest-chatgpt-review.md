# SFIA Studio — Cycle 8 — Wave 1 Delivery Readiness Qualification — Review Pack FULL

| Field | Value |
|---|---|
| **Timestamp (Europe/Paris)** | 2026-08-22T13:45:00+02:00 |
| **Cycle** | 8 — Delivery / implémentation — QUALIFICATION / READINESS ONLY |
| **Profil SFIA** | CRITICAL |
| **Typologie** | DOC |
| **Milestone** | PRODUCT COMPLETION — WAVE 1 — DELIVERY READINESS QUALIFICATION |
| **Runtime v3** | NON ADOPTED |
| **Delivery** | NOT AUTHORIZED |
| **REAL** | ZERO |
| **Review Pack** | FULL |
| **Cursor verdict (candidate)** | W1 READINESS PARTIAL — MORRIS GATES REQUIRED BEFORE DELIVERY GO |

---

## Local Git Truth

| Field | Value |
|---|---|
| repo | mcleland147/sfia-workspace |
| pwd | /Users/morris/Projects/sfia-workspace |
| branch | docs/sfia-studio-product-completion-backlog |
| HEAD | aca3dc8ab250ea1d751a833912787751e856c7b6 |
| origin/main | aca3dc8ab250ea1d751a833912787751e856c7b6 |
| tracked diff | none |
| staged diff | none |
| backlog | projects/sfia-studio/product-completion/05-product-completion-backlog-user-stories.md — untracked |
| readiness doc | projects/sfia-studio/product-completion/07-product-completion-wave-1-delivery-readiness.md — untracked (created this cycle) |

**STOP conditions:** none triggered.

---

## Canonical Template / Routing (read)

- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md

---

## Convergence Pre-Check

| Item | Status |
|---|---|
| Capability v3 | Product Completion W1 readiness — not v3 adoption |
| Milestone | W1 Delivery Readiness Qualification |
| Trajectory link | W1 → W2/W3/W4 boundaries explicit |
| Build Doctrine | consumed — process/gates only |
| Roadmap | consumed — process/gates only |
| runtime v3 | NON ADOPTED |

---

## Morris Decisions Consumed

1. **VALIDATE SFIA STUDIO PRODUCT COMPLETION CYCLE 5 — BACKLOG** — source-locked · 5 Epics · 4 Waves · P0/P1 cut-line · CKC RESOLVE→CONSUME→INTEGRATE · R5 non-blocking · **NO DELIVERY AUTHORIZED**
2. C6 CLOSED — implement-only
3. D01-NARROW · D02 Option B · D05 NONE — adopted · no reopen
4. packageVersion / materialization deferred
5. This cycle: readiness qualification only — no implementation

---

## Backlog Truth

| Item | Value |
|---|---|
| Local path | projects/sfia-studio/product-completion/05-product-completion-backlog-user-stories.md |
| Handoff baseline | commit db96f5ece54349c2323e69fc92941fcb9366ab21 · blob 06b8b7bc817b2f59ebc02a40fce7bf6905d6f412 |
| Morris validation | CONSUMED for trajectory — not integrated on main |
| Git integration | **NO** |
| Drift check | No material drift on W1 scope / 5 Epics / 4 Waves / R5 reserve |

---

## W1 Scope (validated backlog)

US-P0-01…08 · TD-C6-01/02/04/05/06 (+03 if needed) · DK-01…07 · DK-08 partial only.

Explicitly NOT W1: full Phase B (US-P1-14) · US-P0-07 E2E closure (W3) · execution/evidence loop (W3) · REAL.

---

## Runtime Files Inspected (sample)

- lib/vertical-slice-core/localProjectComposition.ts — DEFAULT pin pkg:studio-v3-oa@1.0.0
- lib/vertical-slice-runtime/service.ts — wireOaStack · Memory repos on SQLite path
- lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts — MemoryTrajectory/Epistemic
- lib/oa/decision/infrastructure/sqlite/createSqliteDecisionServices.ts — MemoryConfirmation
- lib/oa/cycle/infrastructure/ckcQualificationResolver.ts — method-candidate hardcoded
- lib/oa/cycle/infrastructure/ckcReferenceManifest.ts — method binding SoT
- lib/oa/cycle/domain/cycleTypeCatalog.ts — method git paths
- lib/oa/doctrine/application/resolveDoctrinePackage.ts
- features/project-assistant/f2/orchestrateF2.ts · qualify.ts
- app/studio/** · features/pre-m6-product-ui/**

---

## Asset Classification Summary

KEEP: OA backbone · Product SQLite · ports · CycleTypeCatalog core · ResolveDoctrinePackage
ADAPT/COMPLETE: resolver · proof · F2 · manifest/index · composition
REPLACE: Memory Trajectory/Confirmation/Epistemic on product path · method-path CKC SoT
FREEZE/QUARANTINE: pkg:studio-v3-oa fixture
HARVEST/FREEZE: /projects D1 parallel path

**Parallel engine required:** NO

---

## Dependency Graph (workstreams)

G-W1-01 + G-W1-02 + G-W1-04 → Track A (Phase A)
G-W1-03 → Track B (C6 durability) — parallel candidate with A post-gates
Track A + B → Track C (composition) → Track D (bounded Nora seam) → Track E (product proof) → W1 E2E exit

Critical path: G-W1-02 materialization → Phase A cutover → C6 durability → composition → seam → product proof.

---

## Baseline Validations (read-only)

| Command | Result |
|---|---|
| npm run typecheck | FAIL — pg module FinOps (PRE-EXISTING · NON-W1) |
| npm test OA subset | 192/194 PASS — 2 restart process proof fails (TSX path · ENVIRONMENT LIMITATION) |

---

## Fake / Real Qualification

- Fixture pkg:studio-v3-oa ≠ product package
- W1 CAPABILITY = NOT PROVEN at entry
- This cycle = REPOSITORY-INFORMED READINESS ONLY
- REAL = ZERO · gated separately

---

## Reserves

- R5 audit reserve (non-blocking) — accepted at backlog validation
- FinOps typecheck — NON-W1 reserve
- TD-C6-03 optional in W1 vs W2 — Morris/ChatGPT if needed

---

## Recommendations vs Decisions

**Recommendations (non-decisionnel):**
- Integrate validated backlog on main before Delivery (G-W1-01)
- Package materialization Option A: pkg:sfia-studio-doctrine-v3@1.0.0 under fixtures/packages with explicit cutover
- Single umbrella W1 Delivery GO after sub-gates · include bounded seam · preserve full Phase B gate
- Track A ∥ Track B development after C6/DP gates

**Decisions required (Morris):** G-W1-01…05 · G-W1-07

---

## No Project Write Confirmation

- No runtime code modified
- No migration · no schema change · no registry mutation
- No project commit · no project push · no PR · no merge
- Created: 07-product-completion-wave-1-delivery-readiness.md (untracked candidate)
- Handoff L3 publish authorized only

---

## Cursor Readiness Verdict (candidate)

**W1 READINESS PARTIAL — MORRIS GATES REQUIRED BEFORE DELIVERY GO**

Architecture sufficient: YES · New architecture: NO · Parallel engine: NO · Delivery GO now: NO

Blockers: backlog Git integration · package materialization/packageVersion · C6 Delivery GO · DP Phase A impl GO · W1 umbrella GO

---

## Complete Readiness Document (07-product-completion-wave-1-delivery-readiness.md)

# SFIA Studio — Product Completion — Wave 1 — Delivery Readiness Qualification

| Champ | Valeur |
|---|---|
| **Projet** | SFIA Studio — Product Completion |
| **Cycle** | 8 — Delivery / implémentation — **QUALIFICATION / READINESS ONLY** |
| **Profil SFIA** | CRITICAL |
| **Typologie** | DOC |
| **Vague** | **W1 — Vérité, contexte et continuité** |
| **Base Git** | `origin/main` @ `aca3dc8ab250ea1d751a833912787751e856c7b6` |
| **Branche analyse** | `docs/sfia-studio-product-completion-backlog` *(local · non intégrée)* |
| **GO Morris consommé (backlog)** | **VALIDATE SFIA STUDIO PRODUCT COMPLETION CYCLE 5** — modèle 5 Epics · 4 Vagues · cut-line P0/P1 · CKC RESOLVE→CONSUME→INTEGRATE · réserve audit R5 non bloquante · **NO DELIVERY AUTHORIZED BY THIS VALIDATION** |
| **GO Morris consommé (readiness)** | **QUALIFICATION READINESS W1** — analyse repo-first · aucune implémentation |
| **Statut** | **CANDIDAT — QUALIFICATION READINESS WAVE 1 — EN ATTENTE REVUE CHATGPT / DÉCISION MORRIS — NO DELIVERY AUTHORIZED** |
| **Runtime v3** | **NON ADOPTED** |
| **Delivery** | **NON AUTORISÉE** |
| **REAL** | **ZERO** |

## Anti-affirmations

- **≠** Backlog intégré sur main · **≠** W1 implémentée · **≠** W1 prouvée · **≠** READY FOR DELIVERY · **≠** packageVersion choisi · **≠** Phase B complète · **≠** REAL · **≠** runtime v3 ADOPTED.
- Le backlog Morris-validé reste **candidat local** jusqu'à intégration Git distincte.
- `consumed=true` **≠** preuve Nora Phase B · Phase A **≠** Phase B.

---

## 1. Métadonnées / Git truth

| Field | Value |
|---|---|
| repo | `mcleland147/sfia-workspace` |
| pwd | `/Users/morris/Projects/sfia-workspace` |
| branch | `docs/sfia-studio-product-completion-backlog` |
| HEAD | `aca3dc8ab250ea1d751a833912787751e856c7b6` |
| origin/main | `aca3dc8ab250ea1d751a833912787751e856c7b6` |
| backlog local | `05-product-completion-backlog-user-stories.md` — **untracked** |
| handoff baseline | `db96f5ec` / blob `06b8b7bc…` |
| drift backlog ↔ handoff | **Aucun drift matériel détecté** sur structure W1 / 5 Epics / 4 Vagues |

---

## 2. Décisions Morris consommées

| Décision | Effet readiness |
|---|---|
| Backlog Cycle 5 **VALIDÉ** Morris | Scope W1 authoritative depuis backlog local + handoff |
| **NO DELIVERY** par validation backlog | Ce document ne autorise pas Delivery |
| C6 **CLOSED** Morris | TD-C6-01…06 = implement-only · pas de réouverture |
| D01-NARROW · D02 Option B · D05 NONE **ADOPTED** | Direction Phase A suffisante · pas de réouverture |
| packageVersion / matérialisation **DEFERRED** | Gate G-W1-02 ouverte |
| Réserve audit R5 (non bloquante) | Acceptée · traçabilité TE vs US clarifiée |
| runtime v3 **NON ADOPTED** | Hors scope W1 |

---

## 3. Hiérarchie des sources

| Priorité | Sources |
|---|---|
| 1 — Backlog validé | `05-product-completion-backlog-user-stories.md` (local candidate) |
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
| 6 | Family `pkg:sfia-studio-doctrine-v3` | **ADOPTED identity · MATERIALIZATION OPEN** | Pas dans registry |
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
| GAP-W1-01 | Backlog non intégré Git main | G-W1-01 | P0 governance | **OUI** (recommandé) |
| GAP-W1-02 | Product package non matérialisé · packageVersion non choisi | DK-04 · G-W1-02 | P0 | **OUI** |
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

### Gate Morris minimum (G-W1-02) — **NE PAS CHOISIR**

Décision requise :
1. **first packageVersion** (ex. `1.0.0` vs autre)
2. **physical materialization root** (sous `fixtures/` vs répertoire produit dédié)
3. **cutover policy** : quand remplacer default pin · quarantaine fixture

**Options minimales (recommandation candidate non décisionnelle) :**

| Option | Description | Trade-off |
|---|---|---|
| **A (recommandée candidate)** | Matérialiser `pkg:sfia-studio-doctrine-v3@1.0.0` sous `lib/oa/doctrine/fixtures/packages/` · registry entry · default pin cutover explicite · fixture quarantaine | Minimal · aligné D01-NARROW |
| **B** | Alias registry : même manifest digest · rename id only | Risque confusion fixture/product |
| **C** | Dual-pin transition period | Complexité gouvernance |

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

**Parallélisation B vs A :** B1–B3 peuvent démarrer **en parallèle** de A2–A4 **après** GO C6 Delivery · B5 (schema) doit coordonner migrations · **A1 (matérialisation) bloque A** mais **ne bloque pas** B1–B3 techniquement.

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
| `lib/vertical-slice-core/localProjectComposition.ts` | A1 pin/registry |
| `lib/oa/doctrine/fixtures/registry.json` | A1 |
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

| Commande | Résultat |
|---|---|
| `npm run typecheck` | **FAIL** — erreurs `pg` FinOps (PRE-EXISTING · NON-W1) |
| `npm test` (OA subset) | **192/194 PASS** — 2 fails restart process proof (TSX path env · ENVIRONMENT LIMITATION) |

---

## 15. Workstream DAG

```
G-W1-01 Backlog Git ──┐
G-W1-02 Package mat. ─┼──► TRACK A (Phase A)
G-W1-04 DP impl GO ────┘         │
                                 ├──► TRACK C (composition)
G-W1-03 C6 Delivery GO ──► TRACK B (durability) ──┤
                                 │                 │
                                 └──► TRACK D (seam) ──► TRACK E (product proof)
                                                              │
                                                              ▼
                                                      W1 E2E EXIT PROOF
```

---

## 16. Critical path

1. **G-W1-01** Backlog Git integration *(recommandé)*
2. **G-W1-02** Morris package materialization decision
3. **G-W1-04** DP Phase A implementation GO
4. **A1→A5** Package-bound CKC resolution
5. **G-W1-03** C6 Delivery GO + **B1–B5** durability
6. **C1–C4** Composition binding
7. **D1–D4** Bounded seam
8. **E1–E6** Product-facing W1 proof

**Goulot :** G-W1-02 (matérialisation) + Phase A resolver cutover.

---

## 17. Parallélisation

| Parallèle possible | Condition |
|---|---|
| **Track B** (C6 adapters) **∥ Track A** (post gates) | Après G-W1-03 + schema design coordonné |
| **Track E** foundation (UI resume polish) **∥ Track A** | Partiel — sans claim exit |
| **Track D** **∥ fin Track B** | Seam needs Phase A + durable LPS/epistemic |
| **Track A** **∥ Track B** avant intégration | **OUI** en développement · **NON** en exit proof |

---

## 18. Dettes / exit paths

| Dette | Exit |
|---|---|
| Fixture `pkg:studio-v3-oa` | Quarantine après product cutover (DK-04) |
| Method paths in catalog | Package index (DK-01) |
| D1 parallel routes | FREEZE · pas W1 target |
| FinOps pg typecheck | NON-W1 reserve |
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

## 20. Gate register G-W1-01…07

| Gate | Statut | Owner | Evidence required |
|---|---|---|---|
| **G-W1-01** Backlog Git truth | **OPEN** | Morris | Backlog on main · PR merged |
| **G-W1-02** Product package materialization | **OPEN** | Morris | packageVersion · root · cutover policy |
| **G-W1-03** C6 Delivery | **OPEN** | Morris | Explicit W1 C6 implementation GO |
| **G-W1-04** Phase A / DP implementation | **OPEN** | Morris | DP implementation GO (distinct from architecture) |
| **G-W1-05** Bounded Phase B seam | **OPEN** | Morris | W1 Delivery GO may include seam · full Phase B gate preserved |
| **G-W1-06** REAL | **N/A** | — | W1 excludes REAL |
| **G-W1-07** Product Git write | **OPEN** | Morris | Future Delivery commits require GO |

---

## 21. Décisions structurantes encore requises

| Décision | Blocker ? | Owner |
|---|---|---|
| Backlog Git integration before Delivery | Recommandé **OUI** | Morris |
| first packageVersion + materialization | **OUI** | Morris |
| C6 W1 implementation GO | **OUI** | Morris |
| DP Phase A implementation GO | **OUI** | Morris |
| W1 Delivery GO (umbrella) | **OUI** | Morris |
| TD-C6-03 in W1 scope vs W2 | **NON** — optionnel W1 | Morris/ChatGPT |

**Aucune** nouvelle architecture DB/stack/registry requise.

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
| Backlog Git-intégré ? | **NON** |
| packageVersion décidé ? | **NON** |
| Product package matérialisé ? | **NON** |
| Phase A runtime bound ? | **NON** |
| Trajectory durable ? | **NON** |
| Confirmation durable ? | **NON** |
| Epistemic sélectif durable ? | **NON** |
| Seam CKC→Nora prouvée ? | **NON** |
| Delivery GO recommandé now ? | **NON** |
| Baseline CI/tests | **PARTIAL** — OA core green · FinOps typecheck fail · 2 env test fails |

### Verdict scale

## **W1 READINESS PARTIAL — MORRIS GATES REQUIRED BEFORE DELIVERY GO**

Macro scope et architecture **cohérents** · ports OA/Product SQLite **réutilisables** · **pas** d'architecture parallèle requise · C6 + D01/D02/D05 **suffisants** · matérialisation package + intégration backlog **gates ouverts** · parallélisation Track A + Track B **candidate** · composition + seam **après Phase A** · **DELIVERY NOT AUTHORIZED** · retour ChatGPT readiness review / Morris gates.

### Blockers before any W1 Delivery GO

1. G-W1-01 Backlog Git integration *(strongly recommended)*
2. G-W1-02 Product package materialization / packageVersion
3. G-W1-04 DP Phase A implementation GO
4. G-W1-03 C6 durability Delivery GO
5. G-W1-05 W1 Delivery GO (umbrella, includes bounded seam)

---

*Qualifié 2026-08-22 · Cycle 8 readiness only · NO Delivery · NO REAL · Morris decision required.*
