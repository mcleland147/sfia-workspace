# SFIA Studio — AKG-M5 / L2-Q0 — Intake & Persistence Migration Readiness

**Date / heure:** 2026-10-23 21:10 Europe/Paris (CEST)
**Passe corrective inventaires:** 2026-10-23 ~21:15 CEST — consolidation CODE VERIFIED des inventaires parallèles D1/OA (sans re-développement, sans mutation projet)
**Cycle:** 6 — Architecture technique
**Profil:** Critical
**Typologie:** Investigation read-only + decision pack
**GO Morris:** **L2-Q0 QUALIFICATION READ-ONLY — GRANTED**
**NON autorisé / NON effectué:** Delivery L2 · migration · schéma · dual-write · retrait D1 · cutover · runtime change · commit/push/PR/merge **projet** · L3/L4 start · v3/REAL/SHADOW

**Instruction ChatGPT:** lire d’abord `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` ; vérifier tip/blob, matrices, couverture H4, décisions non consommées et verdict.

---

## 1. Verdict

**L2-Q0 INVESTIGATION COMPLETE — READY FOR CHATGPT CRITICAL REVIEW WITH GOVERNED OPEN GATES**

Gates explicitement **OPEN** (décision Morris requise, non PASS hypothétique) :
- **H1 / R-MM-01** — MethodMode treatment
- **H4 / R-VOL-01** — volumes : **local PARTIAL VERIFIED** ; **prod UNKNOWN**
- **R-CUT-01** — protocole design-only ; **non exécuté**

**Jamais affirmé :** L2 DELIVERY READY · L2 MIGRATION AUTHORIZED · H1/H4 PASS.

---

## 2. Git Truth

| Item | Valeur |
|---|---|
| ChatGPT main tip (pré-check) | `94c7a30d253396cba71f4c4938a1a0671fc0801c` |
| `origin/main` après fetch | **identique** `94c7a30d…` |
| PR #609 | MERGED → merge `e8e8b5e1…` |
| PR #610 | MERGED → tip `94c7a30d…` |
| Worktree investigation | `/Users/morris/Projects/sfia-workspace-akg-m5-l2-q0-readonly` |
| HEAD investigation | **detached** `94c7a30d…` |
| Mutations projet dans ce WT | **aucune** (`git status` clean hors éventuel `.tmp-sfia-review` local) |
| WT principal concurrent | `sfia-workspace` sur `qa/sfia-studio-p6-…` **dirty** (P6) — **non touché** |
| Branche projet créée | **NON** |
| Commit/push/PR projet | **NON** |

### Preuves post-merge L1 (préservées)

- L1/A09 Delivery MERGED (#609) + post-merge status sync (#610).
- AKG-M5-A Formal Exit CLOSED BY MORRIS (documentary) inchangé.
- AKG-M5 global **OPEN**.

---

## 3. Sources lues (extrait)

Processus : contrat L2-Q0 ; `publish-review-handoff.sh` ; CKC cycle 6 = guidance candidate.

Convergence : Build Doctrine / Roadmap (via tip CURRENT post-#610) ; M5-A `01`/`02`/`03` ; M4-A `08` storage assessment ; G0 persistence pack (référencé M4).

PRR : `04`, `06`, `09` (focus dépendances / persistence / gaps).

Code @ `94c7a30d` : `lib/d1/**`, `features/d1/**`, routes `app/projects*`, `app/workspace`, `app/nouvelle-demande` ; `lib/oa/project/**`, `lib/vertical-slice-{core,runtime}/**`, `app/studio/**`, `features/pre-m6-product-ui/**`.

---

## 4. Convergence pre-check (résultat)

| Item | Statut |
|---|---|
| G0-A / G0-B | ADOPTED (doctrine) — OA Product SQLite = backbone Product |
| M5-A | CLOSED BY MORRIS (documentary) |
| L1/A09 | MERGED / POST-MERGE VERIFIED |
| Dual-write D1↔OA | **FORBIDDEN** (doctrine + M4-A 08) ; **CODE VERIFIED** absence d’import croisé write path |
| Runtime v3 / REAL / SHADOW | NON ADOPTED / NOT PROVEN / OFF |

---

## 5. Topologie AS-IMPLEMENTED (CODE VERIFIED)

```text
[Historical D1 island]                    [Product OA backbone]
 /workspace  /projects/*  /nouvelle-demande   /studio/*  pre-m6-product-ui
        │                                          │
        ▼                                          ▼
 features/d1 + lib/d1/actions/commands        VSR actions → RuntimeApplicationService
        │                                          │
        ▼                                          ▼
 openD1Db() → .sfia-exec/.../d1.sqlite       SqliteProductStore → oa-product.sqlite
 tables: d1_projects, assignments,           tables: oa_projects, oa_lps,
         audit_events, idempotency,                  oa_idempotency, oa_audit_events, …
         atomic_audit
 MethodMode column + MethodModeHold          No MethodMode product field
 IDs: proj-{uuid}                            IDs: prj:{uuid}
```

**Evidence:**
- D1 path resolver `lib/d1/paths.ts` L9–32 → default `.sfia-exec/local-i1/state/d1.sqlite`
- OA path `lib/oa/project/infrastructure/sqlite/paths.ts` L9–31 → `.sfia-exec/product/oa-product.sqlite`
- `openD1Db` **migrate-on-open** (`db.ts` L96–107) — **interdit** pour H4 ; inspection via `sqlite3 mode=ro&immutable=1` seulement
- `openProductSqlite` également schema-creating — même règle

**Classification actifs (evidence-based):**

| Actif | Classification | Note |
|---|---|---|
| OA Project / LPS / Product audit journal | KEEP (Product SoT) | G0-B |
| D1 intake UI + commands | HARVEST patterns / RETIRE LATER island | After cutover gates |
| `ProjectCycleAuditPort` + D1 `BoundedAtomicAuditStore` | KEEP port / ADAPT adapter (L1 done) | Transient until L2 audit decision |
| MethodMode / Hold | GOVERNED OPEN (H1) | Do not productize by default |
| OPS1 | OUT OF SCOPE L2-Q0 | Separate island |

---

## 6. Matrice writers / readers (substantielle)

### 6.1 D1 Project writes

| Source | Caller | Effect | Store | Authority | Tests (presence) | Evidence |
|---|---|---|---|---|---|---|
| `commands.createProject` | `actions.ts` → UI `NewProjectForm` / confirmation | INSERT project+assignments+audit+idem | `d1_*` | Mono-operator + MethodMode | `__tests__/d1/project-foundation*`, intake-* | CODE VERIFIED `commands.ts` L24–100 |
| `commands.selectMethodMode` | `actions.ts` | UPDATE method_mode + audit | `d1_projects` | **Hold gate** `assertMethodModeTransitionAllowed` | method-mode-hold tests | `commands.ts` L147–168 ; `methodModeHold.ts` L86–118 |
| `repository.createProjectAtomic` | commands | txn write | D1 | repo | foundation tests | `repository.ts` L84+ |
| Intake confirmation `executeConfirmation` | D1 confirmation flow | may call `createProject` | D1 | confirmation validate | intake-c* | `executeConfirmation.ts` |
| `BoundedAtomicAuditStore.append` | injected / t-a7 tests ; **not** Product VSR import | INSERT `d1_atomic_audit` | D1 | ProjectCycleAuditPort impl | t-a7-hard-ta6 | `boundedAtomicAudit.ts` |

### 6.2 D1 Project reads

| Source | Caller | Effect | Evidence |
|---|---|---|---|
| `getProject` / list via repo | cockpit, workspace home, confirmation | SELECT `d1_projects` | `repository.ts` L37+ ; routes `app/projects/[id]`, `app/workspace` |
| Context snapshot | intake context | read repo | `context/buildSnapshot.ts` |

### 6.3 OA Product writes

| Source | Caller | Effect | Store | Evidence |
|---|---|---|---|---|
| `LocalProjectFacade.createProject` | `RuntimeApplicationService.createProject` ← `createProjectRuntimeAction` ← `NewProjectIntentionPage` | Project + LPS + OA audit events + idem | `oa_*` | `localProjectComposition.ts` L318+ ; `service.ts` L618+ ; `actions.ts` |
| `SqliteProjectRepository` insert | OA services | INSERT `oa_projects` | OA | `sqliteProjectRepository.ts` |
| `SqliteProjectAuditJournal` | OA create path | INSERT `oa_audit_events` | OA | `sqliteProjectAuditJournal.ts` |

### 6.4 OA Product reads

| Source | Caller | Evidence |
|---|---|---|
| list/get via VSR | `ProjectsPage`, `ProductRailRecents`, studio workspace | `listProjectsRuntimeAction` / `getProject` |
| PA / Nora turns | project-assistant (indirect via runtime stack) | DOCUMENTED + CODE VERIFIED wiring (not full BEHAVIOR PROVEN here) |

### 6.5 Coexistence / dual-write

| Question | Résultat | Niveau |
|---|---|---|
| Deux UI de création actives ? | **OUI** — `/projects/new` (D1) vs `/studio/projects/new` (OA) | CODE VERIFIED |
| Dual-write même create ? | **NON** — `lib/d1` n’importe pas OA ; `lib/oa` n’importe pas D1 | CODE VERIFIED (grep cross-import write path = empty) |
| Identités croisées | D1 `proj-*` vs OA `prj:*` ; **overlap local IDs = 0** | CODE VERIFIED + H4 aggregate |
| Deux listes projets | Workspace D1 vs Studio OA | CODE VERIFIED |

---


---

## 6bis. Consolidation inventaires parallèles (CODE VERIFIED) — passe corrective

Sources inventaire (agents read-only @ `94c7a30d`) :
- [D1 writers/readers inventory](ecd3cb08-9a6a-4d29-8b6e-5e592d629591)
- [OA Project writers/readers](8de4048e-3f02-44e1-8a1f-cea399fb37e6)

Ces points **complètent** §§6–10 sans invalider le verdict Q0. Aucune mutation projet.

### D1 — précisions

| Point | Preuve | Impact décision |
|---|---|---|
| Tout DML produit D1-I1 passe par `D1ProjectRepository` (+ `BoundedAtomicAuditStore` pour `d1_atomic_audit`) | Grep DML `d1_*` limité à `repository.ts` / `boundedAtomicAudit.ts` | Surface cutover writers claire |
| `d1_assignments` : INSERT à la création ; **aucun SELECT** dans `app/` | Inventaire D1 §2.1 / gaps | Assignments = write-only local ; migration ownership non trivial |
| `selectMethodMode` / `actionSelectMethodMode` : **pas d’appelant UI production** `features/d1` | Inventaire D1 §4 / §16 | Hold bloque les transitions ; create n’appelle **pas** `assertMethodModeTransitionAllowed` |
| MethodMode **hold** = in-memory / gouvernance default (`methodModeHoldOverrideSlot`) — **non persisté SQLite** | `methodModeHold.ts` + store | Archive MethodMode column ≠ archive du hold |
| Intake analyze / cancel : **pas** d’écriture Project DB | `d1EventSink` / intake actions | Cutover intake ≠ geler analyze-only |
| `CONFIRM_EXISTING_PROJECT_CONTEXT` : read only ; **pas** de lien intake↔project persisté | `executeConfirmation.ts` comments | Pas de relation durable à migrer pour ce path |

### OA Product — précisions

| Point | Preuve | Impact décision |
|---|---|---|
| Tables Product Project : `oa_projects`, `oa_lps`, `oa_lps_current`, `oa_idempotency`, `oa_audit_events` | DDL `db.ts` + adapters | SoT Product inchangé |
| **Default Studio composition** : Project/LPS → **SQLite** ; `ProjectAuditJournalPort` → **`MemoryProjectAuditJournal`** (pas `oa_audit_events`) | `localProjectComposition.ts` inject memory audit | Durabilité Project ≠ durabilité journal OA sur create/list/get Studio |
| Materialization Memory B : LPS via `AppendLivingProjectStateVersion` ; audit **`SqliteProjectAuditJournal`** quand stack Product SQLite | `service.ts` wireOaStack | Dual sink audit selon chemin — ne pas unifier sans design |
| `LocalProjectCreationAuditPort` (noop/memory/sqlite→`ProjectCycleAuditPort`) **distinct** de `ProjectAuditJournalPort` | L1 + inventaire OA §5.2 | Confirme non-unification des ports (pack §10) |
| `GetProject` success : **pas** d’append audit (failures only) | `getProject.ts` | Journal OA non exhaustif des reads |
| Reader hors-port : `evaluateProductRealReadiness.ts` SELECT existence `oa_projects` | Inventaire OA §8 | Exception à documenter au cutover readers |

### Non-régression vs pack principal

- Dual-write D1↔OA : toujours **absent**.
- H1/H4/R-CUT-01 : toujours **OPEN** (décision Morris).
- Option L2 recommandée **A** : inchangée.
- Verdict : **inchangé** — INVESTIGATION COMPLETE WITH GOVERNED OPEN GATES.


## 7. H1 — MethodMode

### 7.1 As-implemented

| Élément | Contenu | Evidence |
|---|---|---|
| Enum | `SFIA_V2_6` \| `TRANSITION` \| `V3_CANDIDATE` | `types.ts` L6–7 |
| Schema | `d1_projects.method_mode` CHECK same set | `db.ts` L14–16 |
| Hold | Default **ACTIVE** with reasons B5/R1/R-M01/HARD/T-A7/F11.2/F13.4 | `methodModeHold.ts` L25–69 |
| Transition | `decideMethodModeTransition` BLOCK if hold.active ; `selectMethodMode` calls assert | L86–118 ; `commands.ts` L155 |
| Forbidden claims | Blocks V3-ADOPTED / IMPLEMENTED strings in name/objective | `domain.ts` L9–32 |
| OA Product | **Pas** de champ MethodMode équivalent | CODE VERIFIED schema `oa_projects` |

### 7.2 Volumes MethodMode (local D1 only)

| method_mode | count |
|---|---|
| `V3_CANDIDATE` | 127 |
| `SFIA_V2_6` | 4 |
| (TRANSITION) | 0 observé |

**Environnement:** `.sfia-exec/local-i1/state/d1.sqlite` — **LOCAL DEV** ; **≠ prod**.

### 7.3 Options H1 (comparaison)

| Option | Description | Pros | Cons | Recommandation |
|---|---|---|---|---|
| **A** | Historiser MethodMode **uniquement** D1/archive RO | Respecte doctrine Product ; pas de pollution OA | Perte sémantique si UI Product devait l’afficher | **Préférée** |
| **B** | Convertir **une** sémantique Product minimale sous GO dédié | Continuité UX si besoin prouvé | Risque de doctrine parallèle ; design + GO | Seulement si preuve produit |
| **C** | Compat temporaire bornée + exit | Transition douce | Dette ; fenêtre dual-sémantique | Acceptable **bornée** si A+cutover phasé |

**Recommandation motivée (≠ ADOPTED):** **A** comme défaut ; **C** seulement si Morris exige affichage temporaire d’un label non-autoritatif dérivé d’archive ; **jamais** transférer MethodMode comme doctrine Product / runtime v3.

**Décision Morris H1 requise.**

---

## 8. H4 — Volumes (read-only)

### 8.1 Méthode

- Chemins résolus depuis code (`paths.ts` D1/OA).
- Fichiers **sous** `projects/sfia-studio/.sfia-exec/` du workspace principal uniquement.
- `sqlite3 'file:…?mode=ro&immutable=1'` — **pas** `openD1Db` / `openProductSqlite`.
- Agrégats COUNT / status / method_mode uniquement — **aucun** nom/objectif/PII/payload.
- mtime/size D1 inchangés après query.

### 8.2 Inventaire local autorisé

| Env | Path (workspace-relative) | Size | Tables / COUNT | Couverture |
|---|---|---|---|---|
| LOCAL D1 | `.sfia-exec/local-i1/state/d1.sqlite` | 376832 B (mtime Aug 22) | projects **131** (ACTIVE 122 / DRAFT 9) ; assignments 262 ; audit_events 385 ; idempotency 131 ; atomic_audit **0** | LOCAL VERIFIED |
| LOCAL OA default | `.sfia-exec/product/oa-product.sqlite` | 3207168 B | projects **43** (`prj:*`) ; lps 229 ; idempotency 43 ; audit_events 1469 | LOCAL VERIFIED |
| LOCAL OA campaign | `…/new-project-campaign-01/product/oa-product.sqlite` | ~9 MB | projects 22 ; audit_events 8742 | LOCAL harness |
| LOCAL OA reproof | `…/pwr-dpc09-real-reproof-01/product/oa-product.sqlite` | ~1.2 MB | projects 11 ; audit_events 604 | LOCAL harness |
| PROD | — | — | — | **UNKNOWN / NOT VERIFIED** |

### 8.3 Conclusions H4

| Claim | Status |
|---|---|
| « volumes = zéro » | **FALSE** locally — D1 non vide |
| Migration conservation potentiellement nécessaire | **YES (local evidence)** — au minimum archive RO / mapping decision |
| Couverture cutover-complete | **NO** — prod UNKNOWN |
| **R-VOL-01** | **OPEN** |
| H4 qualification | **PARTIAL — LOCAL VERIFIED / PROD UNKNOWN** |

---

## 9. Identités & données (matrice)

| Donnée D1 | Importance | Équivalent OA | Migration? | Archive RO? | Reconstruction? | Perte OK? | Décision |
|---|---|---|---|---|---|---|---|
| `project_id` `proj-*` | Identité historique | `prj:*` **différent** | Mapping table **si** continuity UX | OUI | Non 1:1 auto | Non si users naviguent anciennes URLs | Morris: mapping vs freeze URLs |
| name / objective / context | Métier intake | OA project payload | Sélectif si conservation | OUI | Partiel | Dépend usage | H4+product |
| `method_mode` | Gouvernance D1 | **Aucun** | **Non** vers doctrine OA | OUI | N/A | Acceptable si A | **H1** |
| state DRAFT/ACTIVE | Cycle D1 | OA lifecycle différent | Non mécanique | OUI | Via Product rules | — | Design L2 |
| assignments owner/DM | Authz D1 | Product ownership model | Non trivial | OUI | Via L4 later | — | L2/L4 |
| `d1_audit_events` | Preuve intake | `oa_audit_events` (autre contrat) | Archive ≠ merge ports | OUI | Non | Perte write-path OK si archive | Audit decision |
| `d1_idempotency_keys` | Replay D1 | `oa_idempotency` | **Ne pas fusionner** keys | OUI | N/A | OK freeze D1 writers | Cutover |
| `d1_atomic_audit` | Phase journal | ProjectCycleAuditPort / OA journal | Local count **0** | OUI | N/A | Faible volume local | L2 audit path |
| LPS | N/A D1 | `oa_lps` Product | N/A | — | — | — | Product only |

**Overlap IDs D1∩OA (local default DBs):** **0** — CODE+aggregate VERIFIED.

---

## 10. Contrats d’audit (séparés)

| Contrat | Responsabilité | Store | Append | Readers | Notes L2 |
|---|---|---|---|---|---|
| `LocalProjectCreationAuditPort` | Events création projet local | memory/noop/sqlite-adapter | append events | tests/composition | Product create path |
| `ProjectCycleAuditPort` | Journal phases atomiques | D1 `BoundedAtomicAuditStore` (transient) | append | TEST_ONLY find/list on D1 | L1 découplé VSR/core |
| `ProjectAuditJournalPort` / Sqlite journal | OA project audit | `oa_audit_events` | append | OA services | Product SoT events |
| `d1_audit_events` | Intake lifecycle events | D1 | via repo atomic | D1 UI | Archive candidate |
| Unification ports | — | — | — | — | **NOT in Q0** ; needs design+GO |

---

## 11. R-CUT-01 — Protocole (design-only, non exécuté)

| # | Étape | Préconditions | Contrôle / preuve | Stop | Rollback |
|---|---|---|---|---|---|
| 0 | Baseline writers/readers | L2-Q0 pack accepted | Matrices §6 | Ambiguïté ownership | — |
| 1 | Gate **H1** | Morris decision A/B/C | Decision record | Unresolved MethodMode | — |
| 2 | Gate **H4** | Env inventory incl. **prod policy** | R-VOL-01 coverage | Prod UNKNOWN sans policy | — |
| 3 | Backup + inventaire | RO dumps aggregates + file hashes | Checksums | Incomplete inventory | Restore files |
| 4 | Identity policy | Mapping vs URL freeze | Spec + tests | Implicit remapping | Abort |
| 5 | Historical data policy | migrate-select / archive-only | Counts before/after | Dual-write temptation | Abort |
| 6 | **Freeze D1 writers** | Feature flag / route disable | No new `d1_projects` inserts | Writer still hot | Re-enable D1 UI |
| 7 | OA writer exclusive Product | Studio create only | Telemetry/tests | D1 still creating | — |
| 8 | Reader cutover | Nav/list to OA | UX checks | Broken deep links | Point readers back to D1 RO |
| 9 | Idempotence isolation | Separate key spaces | No shared idem tables | Key collision design | — |
| 10 | Verify | Counts + smoke DET | Diff report | Drift | Rollback readers |
| 11 | D1 archive RO | FS permissions / code paths read-only | Attempted write fails | Write still possible | Fix perms |
| 12 | RETIRE LATER | L6 gate | Consumer clear | Premature delete | Keep archive |

**Atomicité inter-bases:** **NON existante** — ne pas inventer.
**Compensation effets externes:** N/A / hors scope.
**Dual-write:** **FORBIDDEN** à toute étape.

---

## 12. Options L2 (comparaison)

| Option | Description | Complexité | Risque | Preuves | Effet L3/L4/L6 | Reco |
|---|---|---|---|---|---|---|
| **A** | Cutover Product OA + **D1 RO archive** | Faible–moyenne | Deep links D1 ; MethodMode | H1=A ; H4 policy ; freeze writers | Débloque L3/L4 ownership later ; L6 retire | **Recommandée** |
| **B** | Migration sélective + mapping IDs | Moyenne–haute | Mapping errors ; PII handling | Mapping tests ; sampled verify | Plus lourd avant L4 | Si continuity URLs requise |
| **C** | Migration exhaustive | Haute | Coût ; overclaim | Full inventory prod | Retarde L3 | Seulement si volumes/usages le justifient |
| **D** | Dual-write | — | — | — | — | **FORBIDDEN** |

**Recommandation (≠ ADOPTED):** **A** — plus simple, alignée G0/M5, pas de dual-write ; compléter par **B partiel** seulement sur décision Morris pour URLs/IDs critiques.

---

## 13. Trajectoire qualification

| Milestone | Statut |
|---|---|
| V3-F05+ Product capacity | Visée ; runtime v3 NON ADOPTED |
| M5-A | CLOSED documentary |
| L1/A09 | MERGED |
| **L2-Q0** | **Cette investigation** |
| Delivery L2 | **NOT AUTHORIZED** — needs H1/H4/R-CUT + GO Delivery |
| L3 Product Attempt | Distinct GO |
| L4 ownership/orchestration | Distinct ; H8 conditional |
| L6 retire/freeze | After L2/L3 proofs |

**Chemin critique:** H1 → H4 coverage policy → R-CUT-01 accept → GO Delivery L2 (option A) → freeze D1 writers → verify → archive RO → (later) L6 retire.

---

## 14. Fake / Real

| Item | Valeur |
|---|---|
| Applicable | Oui — local DBs + DET tests présence |
| Preuves | CODE VERIFIED + LOCAL RO aggregates |
| Migration / cutover prouvés | **NON** |
| Prod volumes | **UNKNOWN** |
| READY FOR REAL / REAL PROVEN / v3 ADOPTED | **NON** |
| DETERMINISTIC ≠ READY FOR REAL | Conservé |

---

## 15. Décisions Morris explicitement sollicitées

1. **H1 MethodMode:** adopter **A** (archive-only), ou **B/C** avec conditions ?
2. **H4 / R-VOL-01:** accepter cutover sur **local+policy prod UNKNOWN**, ou exiger inventaire prod/staging avant Delivery L2 ?
3. **Identités:** mapping `proj-*`→`prj:*` (**B**), ou freeze deep-links D1 + Product-only IDs (**A**) ?
4. **R-CUT-01:** accepter protocole §11 comme base Delivery, amendements ?
5. **Option L2:** confirmer **A** (OA + D1 RO) comme trajectoire candidate ?
6. **GO Delivery L2:** NOT NOW jusqu’à Critical Review + réponses 1–5.

---

## 16. Exit proof L2-Q0

| Critère | Status |
|---|---|
| Git Truth aligned `94c7a30d` | SATISFIED |
| Zéro mutation projet | SATISFIED |
| Writers/readers matrices | SATISFIED (CODE VERIFIED) |
| H1 inventaire + options | SATISFIED ; **decision OPEN** |
| H4 local aggregates RO | SATISFIED PARTIAL ; **R-VOL-01 OPEN** |
| Audit contracts séparés | SATISFIED |
| Cutover protocol design | SATISFIED ; **not executed** |
| Options L2 + recommendation | SATISFIED ; **not ADOPTED** |
| Dual-write absent | SATISFIED |

---

## 17. Dette + exit

| Dette | Exit condition |
|---|---|
| D1 island still writable via historical routes | Freeze writers under L2 Delivery |
| MethodMode hold / enum | H1 decision + archive |
| Adapter D1 atomic audit | L2 audit retention decision post-cutover |
| R-VOL-01 | Prod/staging policy or inventory GO |
| R-CUT-01 unproven | Execution under Delivery GO + verify |

---

## 18. Review Handoff L3

### Avant publish

| Item | Valeur |
|---|---|
| Tip précédent (Cycle 13) | `4de5dc55bd3069f4aefafa4ee0cfb1c7e075fe4f` |

### Après publish (à compléter post-script)

| Item | Valeur |
|---|---|
| Verdict | **HANDOFF UPDATED — REMOTE VERIFIED** |
| Commit FULL (contenu substantiel) | `d5cc774749e9c2416681f0bf1d50d8b0e88cb431` |
| Blob FULL | `dbfbcec8a3246874b6c6d680e5f5c5c0019815ea` |
| Parent | `4de5dc55bd3069f4aefafa4ee0cfb1c7e075fe4f` |
| Tip distant courant | `git rev-parse origin/sfia/review-handoff` (peut être sync §18 descendant) |
| Force push | NON |
| Projet push/PR | NON |

---

## 19. Validations anti-mutation (cette investigation)

- Pas de `openD1Db` / `openProductSqlite` applicatif.
- Pas de SQL write ; D1 mtime inchangé.
- Pas de modification schéma / dual-write / cutover.
- Pas de commit/push/PR/merge projet.
- WT P6 dirty non interféré.

**Fin pack FULL — matrices substantielles ; SYNTHESIS ONLY interdit.**

---

## 18bis. Handoff tip — passe corrective inventaires

| Item | Valeur |
|---|---|
| Tip avant corrective | `73d97565e42a95dc4ad63897a61fd623f4449db2` |
| Commit FULL inventaires (ce contenu) | `c561ce16784a81c3882b420fc2fcbb3f0709c44d` |
| Blob FULL | `eb84fbb28d4aa618183b80ed8d957d1c57f6444c` |
| Tip distant courant | `git rev-parse origin/sfia/review-handoff` (peut avancer d’un sync) |
| Projet | inchangé @ `94c7a30d` ; pas de push/PR |
