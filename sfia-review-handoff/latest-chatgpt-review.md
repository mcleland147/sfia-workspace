# SFIA Studio — AKG-M5 / L2-D2 Cycle 6 — LOCAL STUDIO OA CUTOVER READINESS

**Profile:** CRITICAL
**Typologie:** DOC / TECHNICAL READINESS
**Mode:** READ-ONLY INVESTIGATION
**Date/heure locale:** 2026-10-24 16:05 CEST
**Auteur rapport:** Cursor (Composer)
**GO Morris consommé:** LOCAL STUDIO OA CUTOVER READINESS — QUALIFICATION / PREPARATION ONLY
**Cutover:** NOT EXECUTED / NOT AUTHORIZED

---

## 0. Verdict Cursor

**LOCAL STUDIO OA CUTOVER READINESS COMPLETE**
— MORRIS DECISION PACK READY
— PRODUCT DELIVERY NOT AUTHORIZED
— NO CUTOVER EXECUTED

Instruction ChatGPT : Critical Review du pack (persistence durable, Nora, D1 writers, H1/D4, O-01 E2E, R-CUT, Q7–Q12/Q15, Decision Pack). Challenger utilité/simplicité/réutilisation/dette. Proposer ensuite le **Delivery minimal** borné sans le lancer ni présumer son autorisation.

Distinction stricte :
- **READINESS COMPLETE** = ce cycle (qualification + Decision Pack).
- **CUTOVER READY/PROVEN** = NON — R-CUT NOT PROVEN ; aucun Delivery.

---

## 1. GO Morris

Autorité : QUALIFICATION / PREPARATION ONLY.

Déterminer uniquement A–G (emplacement durable ; raccord Studio ; writers/readers D1 ; routes/identités sans migration ; tests de bascule ; décisions Morris restantes ; périmètre Delivery minimal futur).

**Non couvert / non exécuté :** activation OA runtime ; changement env ; start/restart Studio ; freeze D1 ; modification routes ; migration ; ouverture DB historiques ; modification Product ; commit/push/PR projet ; suppression.

---

## 2. Git Truth

| Check | Résultat |
|---|---|
| `pwd -P` | `/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-readiness` |
| Remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| toplevel | même path |
| HEAD | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` |
| `origin/main` | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` |
| Branch | *(detached HEAD = origin/main)* |
| Status | ` M .tmp-sfia-review/chatgpt-review.md` only (pack local remplacé ce cycle) |
| Diff Product | **aucune** |
| Worktree utilisé | readiness |

**Handoff pré-cycle (Fresh Start) tip distant vérifié :**
- commit `b57aecb2a02214e01a25fae4bf0c585b317a71b8`
- blob `6fccb2b5d2f4774a9efc4122120d6837095eedbf`
- worktree handoff `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023` @ même tip
- contenu distant = Cycle 7 Fresh Start PASS (publié) → remplacement pack local autorisé

**P6 worktree (préservé, non muté) :**
- path `/Users/morris/Projects/sfia-workspace`
- HEAD `980064c05f1769f00d0ef85ef5284a899c6a0d73`
- branch `qa/sfia-studio-p6-global-integrated-product-qa`
- dirty : plusieurs fichiers Product/tests + untracked p6-campaign — **INTACT** (aucun reset/stash/clean)

**Candidate Fresh Start (stat only, non ouverte) :**
- path readiness `…/fresh-start-candidates/2026-10-24-oa-isolated/oa-product.sqlite`
- EXISTS size=339968 mtime=Oct 24 15:28:18 2026 — **non altérée**

**Processus Studio :** aucun Next.js/sfia-studio applicatif observé.

Git Truth : PASS.

---

## 3. Sources et versions

Consultées (guidance / code / PRR ; code et preuves > docs) :

- Processus v2.6 (templates / routing / guardrails / operating model) — contrat.
- CKC `06-architecture-technique.md` — CONTENT VALIDATED ; non authority runtime.
- Convergence Build Doctrine + Roadmap (Roadmap B-AKG peut diverger tip — **non corrigée**).
- Product Completion cadrage ; M4 as-is/to-be ; M5 blueprint + **04 L2-D0** §08/§11/§14.
- Doctrine v3 30/32/34/37 — Runtime v3 **NON ADOPTED**.
- PRR CURRENT : README + volumes **03, 04, 05, 06, 07, 08, 09**.
- Code : `lib/oa/project`, `lib/d1`, `lib/vertical-slice-*`, `app/app/*`, `features/pre-m6-product-ui`, `features/d1`, `lib/nora-cognitive-runtime/sessionPaths.ts`.
- Tests : `app/__tests__/oa/project/**` (inventaire couverture ; **aucun test exécuté ce cycle DOC**).
- Handoff Fresh Start FULL @ `b57aecb2…` lu (contenu tip).

---

## 4. Convergence Pre-check

| Item | État |
|---|---|
| Capacité O-01 | Cible ; E2E Product→UI « comprendre » = **KNOWN GAP** |
| V3-F02/F06/F12 | Connexes ; runtime v3 non adopté |
| M4 / M5-A | CLOSED BY MORRIS (borné / documentary) |
| L1/A09 · L2-D0 · L2-D1 | MERGED ; D5 **PROVEN AT TESTED SCOPE** |
| L2-D2 initial readiness | QUALIFIED WITH GATES OPEN |
| L2-D2-P1 | ENV QUAL ACCEPTED |
| Fresh Start | PASS WITH GOVERNED RESERVES |
| L2-D2 Cutover Delivery | **NOT AUTHORIZED** |
| H4 GLOBAL | OPEN (Fresh Start local ≠ PASS global) |
| R-CUT | Design only · **NOT PROVEN** |

**Orientation Morris locale :** un Mac ; pas de staging ; pas de reprise projets D1/OA historiques ; OA vierge ; anciennes bases intactes ; pas de suppression/migration.

**KEEP :** OA domain, SqliteProductStore, schema M9, Project/LPS/audit/idempotence, `/studio`, Nora≠Truth C boundaries.

**ADAPT candidats (futur Delivery) :** config persistence locale ; navigation historique ; guards writers D1 ; tests Product E2E.

**RETIRE LATER candidats :** îlot D1 Project ; routes D1 ; stores D1 sans consumers — **aucun retrait maintenant**.

**L2-D3 migration :** **N/A** pour Fresh Start local sauf nouveau besoin démontré.

Trajectoire : qualification (ce cycle) → décisions Morris → Local Cutover Delivery sous GO distinct → proof/NR → Critical Review → Git integration → future D1 retirement gates.

---

## 5. R23 — Composants / stores / flux (cutover-applicable)

### 5.1 Truth C (Product OA)

| Élément | Fait code |
|---|---|
| Override | `SFIA_STUDIO_PRODUCT_DB_PATH` |
| Default | `{studioRoot}/.sfia-exec/product/oa-product.sqlite` (`studioRoot=resolve(cwd,"..")` si cwd=`app/`) |
| Resolver | `resolveProductSqlitePath` — **`ensureDir` à la résolution** ; refuse alien d1/ops1 |
| Open/schema | `openProductSqlite` → M1…M9 ; `PRODUCT_SCHEMA_VERSION=m9-0.1.0` |
| Store | `SqliteProductStore` |
| Runtime bind | `getRuntimeApplicationService` → facade → OA `createProject` / list / get |
| UI create | `/studio/projects/new` → `NewProjectIntentionPage` → `createProjectRuntimeAction` |
| UI list | `/studio` → `ProjectsPage` |
| UI detail | `/studio/projects/[id]` |
| IDs | `prj:{uuid}` (`localProjectComposition`) |

**Niveau :** DOCUMENTED + COVERAGE VERIFIED (chemins/resolvers) ; binding runtime **non exécuté** ce cycle.

### 5.2 Memory B (Nora session)

| Élément | Fait code |
|---|---|
| Override | `SFIA_STUDIO_NORA_SESSION_DB_PATH` |
| Default | `{studioRoot}/.sfia-exec/product/nora-session.sqlite` |
| Resolver | `resolveNoraSessionSqlitePath` — `ensureDir` ; **refuse** basename/`path` = `oa-product.sqlite`, d1, ops1 |
| Invariant | Memory B ≠ Truth C (PRR 01/05/07) |
| Sensibilité | default **worktree/cwd-sensitive** (PRR 05) |

**Implication Fresh Start :** une OA neuve + une session Nora historique P6 (si même default sous un worktree P6) risque de rattachement conversationnel **silencieux** ≠ Truth C mais UX contaminée. **G-SESSION** requis.

### 5.3 D1 historique

| Élément | Fait code |
|---|---|
| Overrides | `D1_SQLITE_PATH` puis `OPS1_EXEC_ROOT/state/d1.sqlite` |
| Default | `{studioRoot}/.sfia-exec/local-i1/state/d1.sqlite` |
| Open | `openD1Db` / `resolveD1SqlitePath` (aussi `ensureDir`) |
| IDs | `proj-{uuid}` (`lib/d1/ids.ts`) |
| Hold | `MethodModeHold` ACTIVE par défaut — gate **uniquement** `selectMethodMode` via `assertMethodModeTransitionAllowed` |

### 5.4 Flux O-01 Product (cible post-cutover)

```
UI /studio/projects/new
  → createProjectRuntimeAction (server)
  → RuntimeApplicationService.createProject
  → LocalProjectFacade / OA CreateProject
  → SqliteProductStore / Product SQLite
  → Project + LPS (+ audit D5 in-txn au scope L2-D1)
  → list/get UI /studio
  → reopen same DB after process restart
```

### 5.5 Flux D1 legacy (à neutraliser sur env cutover)

```
/projects/new → NewProjectForm → actionCreateProject → createProject → createProjectAtomic
/nouvelle-demande → intake → actionExecuteConfirmation → executeConfirmedMutation → createProject (methodMode forcé)
/projects/[id] → getProject D1 (reader)
/workspace → list D1 (reader)
selectMethodMode → hold-gated WRITER
```

**Aucun mapping `proj-*` → `prj:*`** trouvé comme politique produit (IDs disjoints ; pas de bridge cutover).

---

## 6. Candidate Fresh Start (entrée)

Path TEMPORARY (non modifié ce cycle) :

`/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-readiness/projects/sfia-studio/.sfia-exec/fresh-start-candidates/2026-10-24-oa-isolated/oa-product.sqlite`

Preuves historiques (handoff `b57aecb2`) : `openProductSqlite` ; `m9-0.1.0` ; 0 métier ; 50 tests jetables PASS ; runtime non basculé.

**Ne pas** promouvoir automatiquement en emplacement définitif (worktree readiness jetable / non runtime pérenne).

---

## 7. Options d'emplacement durable OA

### OPTION A — Répertoire données local durable hors worktrees (recommandée à évaluer)

| Critère | Évaluation |
|---|---|
| Durée de vie | Indépendante branches/worktrees |
| Ownership | Mac utilisateur ; path absolu via `SFIA_STUDIO_PRODUCT_DB_PATH` |
| Risque suppression | Faible vs `git worktree remove` / clean WT |
| Isolation branches | Haute (un path, multi-checkouts) |
| Backups | Simple (copie fichier + WAL/SHM si hot) |
| Autorisations | User-owned dir |
| Restart | Stable si env absolute set |
| WAL/SHM | Colocalisés au dirname du path override |
| Simplicité | Haute — mécanisme **existant** |
| Dette | Doc path + discipline env ; pas nouveau moteur |
| Risque P6 | Faible si path ≠ P6 `.sfia-exec/product/oa-product.sqlite` |
| Réversibilité | Unset env → retombe default worktree (attention) |

**Chemin candidat proposé (proposition — NON CRÉÉ) :**

`/Users/morris/Library/Application Support/SFIA-Studio/product/oa-product.sqlite`

(Nora sibling proposé : `…/product/nora-session.sqlite` — G-SESSION.)

Compatible : override absolu `SFIA_STUDIO_PRODUCT_DB_PATH` sans nouveau store.

### OPTION B — Worktree runtime pérenne désigné

| Critère | Évaluation |
|---|---|
| Durée | Liée à la survie du worktree |
| Ownership | Ambigu si plusieurs WT |
| Risque P6 | **Élevé** si WT = P6 dirty (`…/sfia-workspace`) |
| Branches | Default path suit cwd → bascule branch change le fichier « vu » |
| Simplicité | Moyenne (discipline opérationnelle) |
| Dette | Confusion readiness vs P6 vs feat WT |

### OPTION C — Réutiliser le path candidate TEMPORARY comme définitif

| Critère | Évaluation |
|---|---|
| Durée | Mauvaise — sous WT readiness détaché |
| Suppression | Risque élevé (WT de qualification) |
| Isolation | OK vs P6 path, **mais** fragile |
| Exit | Mauvaise (TEMPORARY → définitif sans décision) |

**Recommandation Cursor :** **Option A**, si Morris accepte un path absolu hors repo ; **ne pas** adopter C ; B seulement si un WT non-P6 est explicitement nommé « runtime local » (déconseillé vs A).

**Prérequis Option A :**
1. Décision Morris G-FINAL-PATH (path exact).
2. Init virgin via `openProductSqlite` **sous GO Delivery** (ou copie contrôlée depuis candidate **sans** ouvrir P6/D1) — hors ce cycle.
3. Set `SFIA_STUDIO_PRODUCT_DB_PATH` uniquement sous GO cutover (pas maintenant).
4. Ne pas invoquer `resolveProductSqlitePath()` sans override pendant analyse (ensureDir).

**Coûts/dettes :** documentation ops locale ; tests d'oracle path ; pas d'archi parallèle.

**Décision Morris requise :** G-FINAL-PATH — **OPEN** (aucune adoption automatique ici).

---

## 8. Config Product / Nora / prérequis serveur

### 8.1 Clés path (noms seulement)

| Clé | Rôle | Default | Note cutover |
|---|---|---|---|
| `SFIA_STUDIO_PRODUCT_DB_PATH` | Truth C | worktree `.sfia-exec/product/oa-product.sqlite` | **Levier principal** Option A |
| `SFIA_STUDIO_NORA_SESSION_DB_PATH` | Memory B | sibling `nora-session.sqlite` | Isoler Fresh Start |
| `D1_SQLITE_PATH` / `OPS1_EXEC_ROOT` | D1 | `local-i1/state/d1.sqlite` | Laisser historiques intacts ; freeze writers ≠ delete file |

### 8.2 Prérequis Product locaux (PRR 05 — documentés)

| Clé | Exigence |
|---|---|
| `SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY` | fail-closed si absent (Product local) |
| `SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL` | fail-closed |
| `SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH` | optional / `main` |
| `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY` | yes single-user profile |
| `BETTER_AUTH_SECRET` / URL / GitHub OAuth | auth routes |
| `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` | REAL docs_write |
| `SFIA_STUDIO_CURSOR_REAL` | default OFF ; **aucun REAL** ce cycle |

**Readiness WT :** `.env.local` ABSENT (cycle Fresh Start) — pas d'inspection `.env.local` P6 (interdit).

**Aucun changement de configuration effectué.**

### 8.3 G-SESSION recommandation

Pour Fresh Start local : **Nora session isolée neuve** (path absolu sibling Option A), **sans** réutiliser la session P6. Ne pas créer/reset store ici. Contamination historique = risque UX (transcript), pas corruption Truth C — mais compromet « projet neuf ».

---

## 9. Writers / readers D1 (frontière cutover)

### 9.1 Inventaire mutatif (FAIT code)

| PATH | ROLE | ENTRYPOINT | STORE | INVARIANT | CONSUMERS | RISK | DISPOSITION | EXIT PROOF | GATE |
|---|---|---|---|---|---|---|---|---|---|
| `lib/d1/commands.ts#createProject` | WRITER | actions / confirmation | D1 SQLite | écrit `methodMode` **sans** MethodModeHold (CR-D2-01) | NewProjectForm ; executeConfirmedMutation | Writer leak post-« freeze hold-only » | **FREEZE** (env) / **REPLACE** UX | Q8 no-write | G-H1 + Delivery |
| `lib/d1/repository.ts#createProjectAtomic` | WRITER | createProject | D1 | txn projects+assignments+audit+idempotency | commands | Core persist | FREEZE via upper gate | Q8 | Delivery |
| `lib/d1/actions.ts#actionCreateProject` | WRITER | `/projects/new` | D1 | server action | `features/d1/NewProjectForm` | Surface UI legacy | FREEZE/ADAPT route | Q7/Q8 | D4+Delivery |
| `lib/d1/confirmation/executeConfirmation.ts#CREATE_PROJECT` | WRITER | `actionExecuteConfirmation` | D1 | force `D1_GOVERNANCE_METHOD_MODE` via createProject | `/nouvelle-demande` intake | Bypass hold | FREEZE | Q8 | G-H1 |
| `lib/d1/commands.ts#selectMethodMode` | WRITER | `actionSelectMethodMode` | D1 | **hold-gated** | cockpit D1 | Hold ≠ freeze global | FREEZE (keep hold until retire) | Q6/Q8 | G-H1 |
| `lib/d1/repository.ts#selectMethodModeAtomic` | WRITER | selectMethodMode | D1 | versioned update | commands | | FREEZE | Q8 | Delivery |
| `lib/d1/boundedAtomicAudit.ts` | WRITER (audit tech) | D1 internals/tests | D1 | separate audit table | tests/ops | faible métier | RETIRE LATER / FREEZE env | — | L6 |
| Intake analyze/cancel/clarification/context log | MOSTLY NON-PROJECT-DB ou read | intake actions | telemetry / no Project write claimed | `d1EventSink` : no Project DB writes | nouvelle-demande | faible si gel create | ADAPT/RETIRE LATER | — | L2-D2+ |
| `CONFIRM_EXISTING` / ANALYZE_ONLY / CANCEL | READER / NO_MUTATION | confirmation | D1 read | pas de lien persisté (note code) | intake | deep-link legacy | D4 deny | Q7 | G-D4 |

### 9.2 Readers D1

| PATH | ROLE | ENTRYPOINT | RISK cutover | DISPOSITION |
|---|---|---|---|---|
| `listWorkspaceProjects` / `actionListProjects` | READER | `/workspace` | dual-truth UX | REPLACE + D4 |
| `getProject` / `actionGetProject` | READER | `/projects/[id]` | proj-* visible | D4 deny/redirect |
| `listProjectAudit` | READER | project page | histo | RETIRE LATER |
| `operationalReadiness` | READER | readiness surfaces | `writeCommands:false` | KEEP until L6 / HARVEST |

### 9.3 MethodModeHold — limite critique

**FAIT :** hold ACTIVE bloque `selectMethodMode` seulement.

**FAIT CR-D2-01 :** `createProject` accepte `methodMode` et persiste via `createProjectAtomic` **sans** `assertMethodModeTransitionAllowed`.

**Conséquence :** un « freeze » qui ne couvrirait que le hold = **insuffisant**. Futur freeze doit intercepter **tous** writers listés (create + confirmation CREATE + select).

**Aucun writer modifié ce cycle.**

---

## 10. Routes et identités (D4)

### 10.1 Carte routes (main tip)

| URL | Surface | Store | Disposition candidate |
|---|---|---|---|
| `/` | redirect → `/synthese` | historique POC (≠ Truth C) | hors élargissement L5 ; impact nominal faible si Pilot entre via `/studio` |
| `/studio` | Projects list Product | OA | **KEEP** parcours nominal |
| `/studio/projects/new` | Create Product | OA | **KEEP** |
| `/studio/projects/[id]` | Product project | OA | **KEEP** |
| `/workspace` | D1 workspace | D1 | D4 A deny/redirect → `/studio` |
| `/projects/new` | D1 NewProjectForm | D1 WRITER | D4 A + freeze writer |
| `/projects/[id]` | D1 cockpit | D1 READER | D4 A (404/deny vs soft success) |
| `/nouvelle-demande` | intake D1 | D1 WRITER path | D4 A |
| `/ops1/nouvelle-demande` | ops1 | ops/D1 adjacent | RETIRE LATER / hors minimal si non Pilot path |
| `/synthese` `/decision` `/cycle-actif` | historical nav | POC ≠ OA | ne pas élargir L2-D2 à L5 simplification complète |

### 10.2 Identités

| Famille | Format | Mapping |
|---|---|---|
| D1 | `proj-*` | **aucun** map auto vers OA |
| OA | `prj:*` | Truth C |

Absent ≠ inaccessible : D4 doit éviter faux 200 sur id inconnu **et** éviter invention de projet.

### 10.3 Options D4

| Option | Description | Fit Fresh Start |
|---|---|---|
| **A** Deny/redirect → entrée Studio | Recommandée | **Oui** (pas de reprise) |
| B Fallback legacy RO temporaire | Si besoin deep-link | Non requis localement |
| C Mapping sélectif gouverné | Exception justifiée | **Non** (Morris : pas de reprise) |

**Proposition décision Morris G-D4 :** adopter **A** pour `/workspace`, `/projects/*`, `/nouvelle-demande` → `/studio` (ou page explicite « legacy retiré ») ; HTTP : redirect 308/302 **ou** 410/403 page Product — à trancher ; **pas** soft-404 qui laisse croire à un projet OA.

**D4 non implémenté ce GO.** Q7/Q10/Q15 restent à prouver sous Delivery.

---

## 11. O-01 — Preuve utilisateur / gaps

### 11.1 Matrice E2E cible

| Étape | Composant | Couverture actuelle | Niveau |
|---|---|---|---|
| UI create | NewProjectIntentionPage | UI tests **mocks** action | TEST PRESENT ≠ integrated |
| Server action | createProjectRuntimeAction | wrappers + composition tests | COVERAGE VERIFIED partial |
| OA service | CreateProject use case | `__tests__/oa/project/**` | BEHAVIOR PROVEN AT TESTED SCOPE (DET SQLite) |
| Product SQLite | SqliteProductStore | m1 durability / m5 mig / D5 | BEHAVIOR PROVEN AT TESTED SCOPE |
| Project/LPS | foundation / W1 | PASS historiques | BEHAVIOR PROVEN AT TESTED SCOPE |
| Relecture list/get | OA services | tests list/get | BEHAVIOR PROVEN AT TESTED SCOPE |
| Restart process | m1/m5 RestartProcessProof | DET process A/B | BEHAVIOR PROVEN AT TESTED SCOPE |
| UI after restart « comprendre » | Product UI LPS/state | **KNOWN GAP** Product→UI | KNOWN GAP |
| Human QA P6 | — | **Non** (interdit / hors Fresh Start) | N/A ici |

**L2-D1 D5 :** acquis au scope testé (atomic create audit) — **ne remplace pas** O-01 UI intégrée.

### 11.2 Oracle minimal recommandé (futur Delivery — ne pas créer ici)

1. Env pointe Absolute Product DB virgin (Option A).
2. Deterministic : `createProjectRuntimeAction` → reopen SQLite → list contient `prj:…` + LPS version.
3. UI harness minimal (existing Product shell) : create → navigate `/studio/projects/{id}` → assert titre/état durable depuis Truth C (pas mock store).
4. Restart process Next **ou** worker proof déjà existant + UI remount read.
5. Assert : zéro écriture D1 (Q8) pendant le scénario.

Distinguer mocks UI / services / SQLite / UI intégrée / REAL / Human QA.

---

## 12. R-CUT-01 — Protocole env-scoped (local Fresh Start)

Adapté de L2-D0 §11 ; **design only** ; **NOT PROVEN** ; **pas de cutover global**.

| Step | PRECONDITIONS | OPERATION FUTURE | FILES / COMPONENTS | TEST ORACLE | EXPECTED EVIDENCE | STOP | REVERSIBILITY | MORRIS GATE |
|---|---|---|---|---|---|---|---|---|
| T0 | Git Truth ; P6 dirty intact ; pas de Studio mutatif | Preflight identity/env/process | readiness WT ; path keys | Checklist | Pack | Divergence Git / P6 threat | — | — |
| T1 | T0 | Choisir path durable OA | Option A path | Doc decision | Path abs + absent pre-create | Path ambigu / sous P6 | Changer décision avant bind | **G-FINAL-PATH** |
| T2 | T1 | Backup strategy (hist intact ; candidate/new) | copy policy | Checksums sizes | Backup note | Skip backup hist required? | Restore files | G-FINAL-PATH |
| T3 | Orientation Fresh Start | Formaliser H1 archive + D4 A | methodModeHold ; routes | Q6/Q7 design | Decision record | Map implicite | Policy adjust | **G-H1 G-D4** |
| T4 | T1–T3 | Freeze **all** D1 writers (create+confirm+select) | `commands`/`actions`/`executeConfirmation` | Q8 | Fail closed writes | Hold-only freeze | **Not** unfreeze write sans réconciliation+GO | G-H1 + Delivery |
| T5 | T1 | Init OA virgin sur path final (`openProductSqlite`) | `db.ts` | schema m9 + 0 métier | Init report | Schema change needed | Delete **new** file only | Delivery |
| T6 | T5 | Bind exclusive `SFIA_STUDIO_PRODUCT_DB_PATH` (+ Nora G-SESSION) | env local | resolve equals path | Runtime read path | Dual path | Unset env (attention default WT) | Delivery |
| T7 | T3 D4 A | Redirect/deny legacy URLs | `app/app/**` | Q7/Q10 | HTTP/UX evidence | Soft 404 ambigu | Revert routes | G-D4 |
| T8 | T6 | O-01 integrated proof | studio UI + OA | oracle §11 | PASS DET | Fail create/list | RO UI | **G-O01** |
| T9 | T8 | Restart proof | process + SQLite | m1/m5 style + UI remount | PASS | Data loss | Restore OA file | G-O01 |
| T10 | T4 | Absence nouveaux writes D1 | probe attempts | Q8 | 0 rows new / errors | Writer leak | — | Delivery |
| T11 | T6–T10 | No dual-write | grep+runtime | Q9 | Single writer | Dual path | — | G-RCUT |
| T12 | Failures | Fallback borné RO D1 **si** pertinent ; **pas** rollback write D1 ; **pas** destroy OA new | RO mount | Q12 | Documented exit | Rollback that drops new OA | Unmount RO | G-RCUT |

Rappels : pas dual-write ; pas migration ; pas delete D1 ; hist intact ; pas réactivation writers D1 sans réconciliation+GO ; pas cutover global.

---

## 13. Q7–Q12 / Q15 matrix (ordre futur)

| ID | Oracle existant | Manque | Ordre Delivery |
|---|---|---|---|
| Q7 | NOT PRESENT cutover policy test | Redirect/deny harness | Après D4 decision ; avant claim cutover |
| Q8 | NOT PRESENT | Probe create/select/confirm post-freeze | Après T4 |
| Q9 | Design only | Assert single Product writer | Avec T6–T11 |
| Q10 | Inventaire IDs CODE VERIFIED | Policy test proj vs prj | Avec Q7 |
| Q11 | N/A Fresh Start (no migrate/conserve need) | — | Skip local sauf change Morris |
| Q12 | Harness NOT PRESENT | RO fallback only if B chosen | Optional local |
| Q15 | pre-m6 tests PRESENT partial | NR conversationnel post-bind | Après O-01 UI ; Fake/DET only |

**Fixture isolée ≠ cutover représentatif local.** Tests DET = prérequis, pas preuve REAL globale.

L2-D1 a prouvé Q5.x au scope testé — distinct de Q7–Q12.

---

## 14. R24 / PRR impacts futurs

**Ce cycle :** NO PRODUCT SEMANTIC IMPACT — aucune sync PRR ; digests non rafraîchis ; Roadmap inchangée.

**Post futur Delivery (si comportement change), volumes candidats :**
- 04 dependency (D1/dual-write row)
- 05 env/boundaries (path Absolute)
- 06 persistence/restart
- 08 test proof map (Q7–Q12)
- 09 gaps (O-01 / L2-D2 status)

---

## 15. Decision Pack Morris (compact)

| Gate | Acquis ? | Source | Options | Recommandation | Risque | Preuve nécessaire | Statut | Effet suivant |
|---|---|---|---|---|---|---|---|---|
| **G-FINAL-PATH** | Orientation Fresh Start only | Conversation 2026-10-24 + handoff | A/B/C | **A** abs path Application Support | Mauvais path → perte/isolation | Path écrit + absent pre-init | **OPEN** | Débloque T1–T6 |
| **G-SESSION** | Nora≠Truth C acquis | PRR/code | Réuse P6 session / **isolée neuve** / defer | **Isolée neuve** sibling A | Contamination UX | Path Nora ≠ P6 | **OPEN** | Qualité O-01 conversationnel |
| **G-D4** | Orientation no reprise | Morris | A/B/C | **A** | Dual-truth | Q7/Q10 | **OPEN** (candidate) | T7 |
| **G-H1** | Hold ACTIVE runtime | code | Hold-only / **freeze all writers** / defer | Freeze **all** writers (CR-D2-01) | Leak create | Q8 | **OPEN** | T4 |
| **G-H4-LOCAL** | Fresh Start PASS ; no migrate | handoff b57aecb2 | Couverture locale suffisante ? | **Oui pour local no-migrate** ; H4 GLOBAL reste OPEN | Surpromotion globale | Doc bornée env=local Mac | **DECIDED local / OPEN global** | Autorise skip L2-D3 migrate |
| **G-O01** | Services DET proven ; UI gap | L2-D1 + PRR09 | DET only / DET+UI / +HQA | DET+UI minimale Product | Faux PASS | Oracle §11 | **OPEN** | T8–T9 |
| **G-RCUT** | Design D0 | §11 | Accept protocol local | Accept **design** ≠ proven | Fausse preuve | T0–T12 evidence | **OPEN** (design) | Delivery sequencing |
| **G-DELIVERY** | — | — | GO explicite | Requis avant toute mutation Product/env | Cutover implicite | GO texté | **OPEN** | Autorise Delivery |

**Ne pas** transformer Fresh Start PASS en validation automatique de tous les gates.

---

## 16. Trajectoire / dette / exit / Delivery minimal

### Delivery minimal recommandé (futur — NON AUTORISÉ)

Périmètre candidat **unique** sous GO explicite :

1. Morris ferme G-FINAL-PATH + G-SESSION + G-D4=A + G-H1 freeze-all-writers + G-DELIVERY.
2. Créer dir+DB virgin au path A (ou promouvoir copie candidate → A) via `openProductSqlite` seulement.
3. Documenter (pas commit secrets) activation locale `SFIA_STUDIO_PRODUCT_DB_PATH` (+ Nora).
4. Implémenter freeze writers D1 (fail-closed) **sans** delete DB.
5. Redirect/deny routes legacy listées (D4 A) — **sans** L5 UX globale.
6. Tests nouveaux : Q7, Q8, Q9 + oracle O-01 Product→UI minimal.
7. Preuves T8–T11 ; Critical Review ; Git integration séparée.

**Fichiers candidats futurs (indicatif) :**
- `lib/d1/commands.ts` / `actions.ts` / `confirmation/executeConfirmation.ts` (freeze gate)
- `app/app/workspace/page.tsx`, `projects/**`, `nouvelle-demande/page.tsx` (redirect)
- tests sous `__tests__/oa/` + éventuellement pre-m6 UI integrated
- **Pas** nouveau moteur / store / sync

**Exit :** OA exclusive locale prouvée DET+UI ; D1 writers frozen ; hist files intact ; rollback = unset bind + garder OA file ; **pas** unfreeze write.

**Dette évitée :** Option C ; mapping C ; dual-write ; staging ; runtime v3.

---

## 17. Tests exécutés ce cycle

**Aucun.** Typologie DOC / read-only. Aucun PASS inventé.

(Référence historique Fresh Start : 50 tests OA jetables PASS — hors ce cycle.)

---

## 18. Réserves

1. Contenu P6/D1 SQLite : **UNKNOWN** (non ouverts) — conforme Fresh Start.
2. P6 dirty important — cutover Delivery ne doit **pas** utiliser WT P6 comme runtime.
3. `ensureDir` sur resolvers : risque création dirs si mal invoqués.
4. `/` → `/synthese` laisse surface historique ; hors minimal D4 sauf décision d'élargir.
5. docs_write transitional dual-write (PRR) = autre pont — hors O-01 Project cutover minimal mais à ne pas confondre avec « no dual-write Project ».
6. Roadmap B-AKG peut être stale vs tip — signalé, non corrigé.
7. Sub-investigation parallèle éventuelle : ce pack se fonde sur lecture code tip `1a380f22` + PRR + D0.

---

## 19. FAITS vs HYPOTHÈSES

| FAIT | HYPOTHÈSE |
|---|---|
| HEAD=main `1a380f22` ; handoff Fresh Start tip `b57aecb2` ; candidate mtime inchangé | Option A path exact Application Support accepté par Morris |
| createProject D1 écrit methodMode sans hold | Freeze all-writers est la plus petite intervention Product viable |
| Pas de map proj→prj | Deny/redirect suffit sans exception locale |
| Nora resolver refuse oa-product.sqlite | Session P6 contaminerait UX si réutilisée |
| O-01 UI comprendre = KNOWN GAP | Oracle UI minimal suffira sans Human QA |

---

## 20. Stops non déclenchés

Git Truth OK ; sources présentes ; C1/PRR consultés ; P6 non menacé ; DB hist non ouvertes ; candidate intacte ; pas d'env/Product change ; pas de migration/dual-write ; path final **non adopté** ; hold non contourné ; writers non neutralisés ; pas de faux mapping ; pas de faux PASS tests ; cutover non présenté comme réalisé.

---

## 21. Instruction ChatGPT

1. Valider Option A vs B/C et le path proposé.
2. Challenger G-SESSION (Nora isolée obligatoire vs différable).
3. Vérifier exhaustivité writers D1 (CR-D2-01).
4. Valider D4=A et impacts `/` `/synthese`.
5. Juger oracle O-01 minimal (assez pour Delivery ?).
6. Challenger R-CUT T0–T12 (trop/pas assez).
7. Distinguer READINESS COMPLETE vs CUTOVER PROVEN.
8. Proposer texte exact du prochain **GO Delivery minimal** sans l'autoriser.

---

**FIN DU RAPPORT — LOCAL STUDIO OA CUTOVER READINESS Cycle 6**
