# SFIA Studio Convergence Roadmap

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
| **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
| **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
| **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
| **Snapshot Git** | origin/main @ `a9a4765c242948f2287392a2910fb1cd30061a7a` |
| **Timestamp création** | 2026-08-12 21:53:10 CEST (+0200) *(historique)* |
| **Timestamp maintenance** | 2026-08-13 — M2 VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED |
| **Validation Morris** | 2026-08-13 02:05 +0200 (Europe/Paris) — Build Doctrine + Convergence Roadmap officiellement validées comme gouvernance de construction SFIA Studio |
| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS |
| **Sources** | Git `main` · PR #337 · CI #158 · PR #339 · CI #162 · handoff M2 PR-readiness `1ad4746b44169d777a726fc8ceeed1c663469c40` · decision pack G0 · framing `30`–`37` · code M2 on main `projects/sfia-studio/app/**` |
| **Anti-claims** | G0-A/G0-B **consommés** · M1 **mergé** · M2 **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** · ≠ runtime v3 ADOPTED · ≠ Cursor REAL authorized · ≠ Gate D consumed · ≠ Auth/Ack promoted · ≠ M3 authorized · ≠ full OA durable |

## B1. Nature du document

Roadmap de **capacités**. Pas de dates inventées. Pas de timeline calendaire artificielle.
Observation / Recommendation / Decision Required doivent rester **distincts**.

## B2. Destination (boucle produit v3)

Voir Build Doctrine A3 — boucle Morris → Nora → … → Evidence → LPS → Morris.
Fondations V3-F01…F15 = couverture doctrine progressive (B9).

## B3. Point de départ factuel

### Sur main (`a9a4765c242948f2287392a2910fb1cd30061a7a`)

| Capacité | État observé |
| --- | --- |
| `/studio` Project create/view | WIRED — **Product SQLite T-A1 — MERGED ON MAIN** (PR #337) |
| F1 Nora chat | WIRED — contextual assistant |
| F2 qualification / proposal / Morris gate | WIRED — qualification + **real CycleInstance** + live post-mutation `F2ContextSnapshot` ; conversation/proposal **process-local** ; demo authority |
| F3 T-A4→T-A5→T-A6 | WIRED — **FIXTURE ONLY** (`TestExecutionAdapter`) |
| Evidence UI reinjection | WIRED — DTO panel ; **pas** LPS write-back |
| OPS1 Cursor REAL | EXISTS — UI `/ops1` parallèle ; flag `OPS1_CURSOR_REAL` |
| D1 SQLite projects | EXISTS — UI `/projects` parallèle |
| execution-run D2-D | EXISTS — **non** branché F1–F3 |
| FinOps Postgres | EXISTS — transverse ; ≠ Product persistence |
| Product persistence | **SELECTED / ACTIVE** — `node:sqlite` OA Product Store (G0-B) · Project/LPS **+** CycleInstance M2 subset · **≠** persistence de tout le runtime |
| Architecture convergence | **Option 1 ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor (G0-A) |
| Project/LPS restart safety | **PROVEN / MERGED** (process A→B + CI #158) |
| Autres OA (T-A2 CycleInstance M2 subset) | **Product SQLite — MERGED ON MAIN** (PR #339) — Cycle/LPS/CKC linkage durable + restart-safe (subset M2) |
| Autres OA (T-A2 trajectory/epistemic ; T-A3…T-A6) | **Memory partiel** — process-local (HD / ExecutionContract / Attempt / Evidence / Trajectory/Epistemic **non durables**) |
| Cursor REAL depuis Nora | **0** / DISABLED |
| Gate D | **NOT CONSUMED** |

### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`)

| Élément | État |
| --- | --- |
| Auth.js GitHub + Critical Ack composition | Présent localement ; **pas sur HEAD** |
| SqliteAuthorityAttemptJournal wiring | Présent localement ; pilot-bounded ; ≠ Product persistence |
| Classification | Observation / prérequis candidat — **promotion = Decision Required** |

### Recommandation d’audit (historique — supersédée)

Option 1 — OA Native Backbone + Harvest OPS1 Cursor était **RECOMMENDATION — NOT DECIDED**.
**Décision Morris G0-A :** désormais **ADOPTED**.

## B4. Asset disposition matrix (actuelle)

Légende : classifications = **recommandations de convergence** jusqu’à validation Morris, sauf KEEP factuel d’usage main.

| Actif | Preuve | Classification | Justification courte |
| --- | --- | --- | --- |
| T-A0 Doctrine | `lib/oa/doctrine` + project create | **KEEP** | Appelé ; DoctrinePackage cible F03 |
| T-A1 Project/LPS | Product SQLite + `/studio` (PR #337) | **COMPLETE** (M1) / **KEEP** backbone | Durable + restart-safe on main |
| T-A2 Cycle/CKC | Product SQLite CycleInstance + F2/CKC/LPS linkage (PR #339) | **COMPLETE** (M2) / **KEEP** backbone | CycleInstance durable + restart-safe on main ; Trajectory/Epistemic restent Memory |
| T-A3 HD/Confirm/Authority | Memory + F2 decide | **COMPLETE** | Backbone ; manque durable + autorité réelle |
| T-A4 ExecutionContract | F3 prepare/confirm | **KEEP** / **COMPLETE** | Consommable ; path REAL + durable manquent |
| T-A5 Attempt/Adapter port | F3 fixture adapter | **ADAPT** / **HARVEST** | Port OK ; adapter REAL à harvest OPS1 |
| T-A6 Evidence/ReviewBundle | F3 ingest + UI cards | **COMPLETE** | UI reinjection ; LPS write-back manquant |
| T-A7 readiness/HARD rails | `platform/t-a7` | **KEEP** | Honesty rails |
| Shared platform AI | `lib/platform` | **KEEP** | Substrate F1 |
| F1 / F2 / F3 UI | `features/project-assistant` | **KEEP** / **ADAPT** | Remplacer demo/fixture bindings progressivement |
| vertical-slice-runtime | `wireOaStack` | **KEEP** / **ADAPT** | Composition root Studio |
| OPS1 Cursor/worktree/report | `lib/ops1` | **HARVEST** (+ **FREEZE** UI growth **RECOMMENDATION**) | Capacité Cursor réelle isolable |
| execution-run | `lib/oa/execution-run` | **FREEZE** (**RECOMMENDATION**) | Parallèle ; non F3 chain |
| D1 `/projects` | `lib/d1` | **FREEZE** / **RETIRE LATER** (**RECOMMENDATION**) | Parallèle durable |
| FinOps | `lib/oa/finops` | **KEEP** isolé + **FREEZE** lots non bloquants (**RECOMMENDATION**) | Transverse cost ≠ Product persistence |
| Auth.js / Critical Ack candidate | dirty only | **COMPLETE** (après GO promotion) | Prérequis REAL Critical |
| Persistence Memory OA | factories Memory* (trajectory/epistemic ; T-A3…T-A6) | **REPLACE** progressif (T-A1 + T-A2 Cycle subset = SQLite Product **MERGED**) | HD/contract/attempt/evidence/trajectory restent process-local ; milestones ultérieurs |

## B5. Gap map → boucle cible

| Gap | Statut | Bloque |
| --- | --- | --- |
| Project/LPS durable | **MERGED ON MAIN — EXIT PROOF SATISFIED** (PR #337) | — |
| GuidedSession / historique durable | PARTIAL / MISSING — **DEFERRED** (dette optionnelle Roadmap) | usage quotidien / milestone ultérieur |
| CycleInstance réel lié F2 | **CLOSED ON MAIN — M2** (PR #339) — Product SQLite + F2 wire + restart proof | — |
| HumanDecision durable/authoritative | PROCESS_LOCAL / demo | M3, Gate D |
| CKC ↔ cycle binding | **CLOSED ON MAIN — M2** — `ckcResolutionRef` projection on LPS | — |
| live contextSnapshot | **CLOSED ON MAIN — M2** — `F2ContextSnapshot` post-mutation (pas nouvel aggregate durable) | — |
| ExecutionContract from real HD | FIXTURE path only | M3/M4 |
| Cursor projection canonique | PARTIAL | M3/M4 |
| Cursor REAL behind T-A5 | MISSING on Nora | M4 |
| Critical Ack UI | CANDIDATE unwired | M4 |
| Evidence durable | MISSING | M5 |
| ReviewBundle → LPS writeback | MISSING | M5/M6 |
| Nora post-exec analysis | PARTIAL (UI cards) | M5 |
| Restart safety Studio core | **PARTIAL** — Project/LPS + CycleInstance M2 subset **restart-safe on main** ; conversation/proposal/HD/T-A3…T-A6 Memory | M3+ |
| IAM/authz product-grade | PARTIAL (candidate Auth.js) | M4/M8 |

## B6. Decisions / gates

### Décision consommée

- Build Doctrine + Convergence Roadmap = **VALIDATED** construction governance by Morris
- intégrées sur main via PR #334 (`1d09e4159932b3885817911e10a2d29a82ae9ea7`)
- **G0-A** Architecture = **ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor (Morris · 2026-08-13)
- **G0-B** Product persistence = **ADOPTED** — `node:sqlite` Product Store isolé derrière ports OA ; exit Postgres sur multi-writer/multi-user démontré (Morris · 2026-08-13)
- preuve décisions : `convergence/sfia-studio-g0-architecture-persistence-decision-pack.md`

### Preuve / milestone intégrée (≠ nouvelle décision d’architecture)

- **M1** PR #337 merged on main @ `c6925954a7aa86f34c9fcd6f7babf0336014eba3`
- head M1 `5cbda862885b36658fc7f2b33a20311611da969e` · CI SFIA Studio **#158** SUCCESS
- exit proof Project/LPS (create → process restart → same Project/LPS/context/doctrine digest) **SATISFIED**
- **M2** **VALIDATED BY MORRIS** · PR #339 merged on main @ `a9a4765c242948f2287392a2910fb1cd30061a7a`
- head M2 `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` · CI SFIA Studio **#162** SUCCESS
- exit proof Cycle/LPS/CKC + live ContextSnapshot + restart A→B + R1/R2 **SATISFIED**
- merge gate M2 **CLOSED**

### Décisions / gates toujours ouverts (non tranchés ici)

1. Promotion Auth.js / Critical Ack candidate — **Decision Required**
2. Cursor REAL / Gate D — **NOT AUTHORIZED / NOT CONSUMED**
3. Disposition OPS1 / D1 / execution-run — **Decision Required**
4. **M3 Delivery** — **NOT AUTHORIZED — MORRIS GO REQUIRED**

## B7–B8. Roadmap capability-driven (milestones)

### Gate 0 — Convergence architecture / persistence

| Champ | Contenu |
| --- | --- |
| **ID** | G0 |
| **Capacité v3** | Précondition : un seul backbone de construction (évite multi-moteurs) |
| **Outcome** | Morris tranche Option architecture + Product persistence (compact) |
| **Fondations** | transversal (débloque F02/F05/F12…) |
| **État actuel** | **G0-A/B ADOPTED** (Morris) ; M1–M2 **MERGED ON MAIN** |
| **Actifs** | decision pack G0 ; Build Doctrine ; Roadmap |
| **Gaps** | — (décisions structurantes consommées) |
| **Travaux** | décisions écrites — **consommées** |
| **Gates Morris** | **CONSUMED** — architecture + persistence |
| **Hors périmètre** | Cursor REAL (reste hors) |
| **Preuve de sortie** | décision Morris + `sfia-studio-g0-architecture-persistence-decision-pack.md` |
| **Dette tolérée** | aucune implementation speculative au stade G0 |
| **Exit dette** | N/A |
| **Next** | M3 *(M1–M2 SATISFIED)* |
| **Statut** | **DECIDED / CONSUMED** |

### Milestone 1 — Socle projet v3 fiable

| Champ | Contenu |
| --- | --- |
| **ID** | M1 |
| **Capacité v3** | V3-F02 LPS (+ Project) durable et exploitable |
| **Outcome** | Morris crée/reprend un Project et retrouve LPS/contexte critique après redémarrage |
| **État actuel** | Product SQLite OA (`node:sqlite`) derrière ports T-A1 ; composition `/studio` branchée — **on main** |
| **Actifs** | T-A1 ports ; SQLite Product Store ; vertical-slice UI ; doctrine FS |
| **Classification** | COMPLETE T-A1 stores ; ADAPT composition |
| **Gaps** | L4 ContextSnapshot agrégat dédié **absent** du repo — contexte critique M1 = LPS fields + doctrinePackageRef digest (qualifié) |
| **Dépendances** | G0 persistence — **SATISFIED** (G0-B ADOPTED) |
| **Gates** | Merge M1 — **CLOSED** (PR #337) |
| **Hors périmètre** | Cursor REAL ; multi-region ; PostgreSQL Product ; full OA durable |
| **Preuve e2e** | create → restart process → get same project/LPS/digest · + PR #337 merged · + CI #158 PASS |
| **Dette** | coexistence temporaire D1 UI ; autres OA Memory ; exit SQLite→Postgres |
| **Exit dette** | disposition D1 après M1 stable ; Postgres si multi-writer démontré |
| **Next** | M3 *(M2 SATISFIED)* |
| **Statut** | **MERGED ON MAIN — EXIT PROOF SATISFIED** |

### Milestone 2 — Pilotage cognitif v3 utilisable

| Champ | Contenu |
| --- | --- |
| **ID** | M2 |
| **Capacité v3** | V3-F01 CKC · F03 DoctrinePackage · F04 épistémologie (base) · F05 chaîne cognitive |
| **Outcome** | Dialogue Nora dans un projet durable ; qualification cycle ; LPS actualisé sans wizard rigide |
| **État actuel** | **On main** — F1/F2 wired ; CycleInstance Product SQLite + LPS linkage + live `F2ContextSnapshot` post-mutation (PR #339) |
| **Actifs** | T-A1 KEEP · T-A2 Cycle **COMPLETE** (subset) · F1/F2 ADAPT · CKC qualify KEEP · shared RuntimeOaStack |
| **Gaps fermés on main** | CycleInstance wire F2 · CKC↔cycle `ckcResolutionRef` · live ContextSnapshot · LPS N→N+1 · restart process A→B · R1 concurrency · R2 scope |
| **Dette restante** | conversation/proposal process-local ; Trajectory/Epistemic Memory ; DOC-DEBT-M1-01 ouvert |
| **Dépendances** | M1 — **SATISFIED** |
| **Delivery authorization** | **CONSUMED** — GO Morris M2 (Delivery) |
| **Validation gate** | **CONSUMED** — GO MORRIS — VALIDATE M2 + COMMIT / PUSH / PR (2026-08-13) |
| **Commit / push / PR** | **CONSUMED** — PR #339 |
| **Merge** | **CLOSED** — PR #339 MERGED @ `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI #162 SUCCESS |
| **Preuve e2e** | conversation → qualification → Cycle durable → LPS N+1 → proposal ContextSnapshot live → visible `/studio` · process restart PASS · R1 AsyncLocalStorage concurrency PASS · R2 test-scope SHA frozen · PR #339 · merge `a9a4765…` · CI #162 SUCCESS |
| **Next** | M3 — **NOT AUTHORIZED — MORRIS GO REQUIRED** |
| **Statut** | **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** |

### Milestone 3 — Gouvernance humaine + préparation réelle

| Champ | Contenu |
| --- | --- |
| **ID** | M3 |
| **Capacité v3** | V3-F05 chaîne · HumanDecision · ExecutionContract (F12 réversibilité) |
| **Outcome** | Options/reco → Morris décide → decisionRef durable → ExecutionContract exact + projection Cursor |
| **État actuel** | F2 demo authority ; F3 fixture prepare |
| **Actifs** | T-A3/T-A4 ; F2/F3 UI |
| **Gaps** | L2 durable HD ; L3 proposal binding ; L8 REAL contract fields ; autorité non-demo |
| **Dépendances** | M1–M2 — **SATISFIED** ; IAM minimal |
| **Delivery authorization** | **NOT AUTHORIZED — MORRIS GO REQUIRED** |
| **Preuve e2e** | GO Morris → HD accepted/current survive restart → contract fingerprint stable |
| **Statut** | **PARTIAL** — **NEXT CAPABILITY** (≠ authorized) |

### Milestone 4 — Première exécution Cursor REAL bornée depuis Studio

| Champ | Contenu |
| --- | --- |
| **ID** | M4 |
| **Capacité v3** | V3-F11 AgentCapability · F12 · F05 exécution |
| **Outcome** | Action REAL faible risque/read-only depuis Studio via T-A5 + adapter harvesté ; pas de silent REAL→fixture |
| **État actuel** | F3 fixture only ; OPS1 REAL parallèle |
| **Actifs** | T-A5 port ; OPS1 Cursor (**HARVEST**) ; critical-ack candidate |
| **Gaps** | L6 adapter ; L7 Ack UI ; Gate D |
| **Dépendances** | M3 ; promotion Ack ; Gate D |
| **Preuve e2e** | Attempt REAL + journal markers + Evidence non-fixture ; FAIL CLOSED si adapter unavailable |
| **Statut** | **NOT STARTED** |

### Milestone 5 — Retour de preuve + analyse Nora

| Champ | Contenu |
| --- | --- |
| **ID** | M5 |
| **Capacité v3** | V3-F14 Artifact Completeness · Evidence/ReviewBundle · F13 learning (base) |
| **Outcome** | Evidence/ReviewBundle liés contrat/décision ; réinjectés Nora + LPS ; handoff Git transitionnel OK |
| **État actuel** | UI cards Memory ; pas LPS write-back |
| **Gaps** | L9 Evidence→LPS ; durable evidence |
| **Dépendances** | M4 |
| **Preuve e2e** | post-exec : ReviewBundle visible + LPS updated + recommendation next gate |
| **Statut** | **PARTIAL** |

### Milestone 6 — Boucle projet complète

| Champ | Contenu |
| --- | --- |
| **ID** | M6 |
| **Capacité v3** | V3-F05 + F09 replanification (base) |
| **Outcome** | Sans copier-coller manuel : conversation → qualification → décision → exécution → preuve → analyse → update projet → next step |
| **État actuel** | Chaîne fragmentée / process-local / fixture |
| **Dépendances** | M1–M5 |
| **Preuve e2e** | parcours complet redémarrage-safe documenté |
| **Statut** | **NOT STARTED** |

### Milestone 7 — Élargissement contrôlé doctrine v3

| Champ | Contenu |
| --- | --- |
| **ID** | M7 |
| **Capacité v3** | Couverture progressive F06–F10, F08, F13–F15 au-delà du backbone |
| **Outcome** | Cycles/lenses/artefacts/transitions/contradictions/dette/capitalisation étendus **depuis** backbone utilisé |
| **Dépendances** | M6 |
| **Preuve** | matrice B9 avance avec preuves par fondation |
| **Statut** | **NOT STARTED** |

### Milestone 8 — Adoption produit / exploitation

| Champ | Contenu |
| --- | --- |
| **ID** | M8 |
| **Capacité v3** | Conditions d’un futur claim **v3 runtime ADOPTED** |
| **Outcome** | persistence, IAM/authz, sécurité, observabilité, backup/reprise, qualité, rétention, multi-user si requis, coverage doctrine obligatoire |
| **Anti-claim** | Ce milestone **ne préjuge pas** des critères non décidés et **n’autorise pas** le claim ADOPTED |
| **Statut** | **NOT STARTED** |

## B9. Matrice de couverture doctrine V3-F01…F15

| Fondation | Capacité | État courant | Milestone(s) | Preuve attendue | Gap / décision |
| --- | --- | --- | --- | --- | --- |
| V3-F01 CKC | Qualification cognitive | **PARTIAL RUNTIME** — F2 qualify + CycleInstance/CKC binding **on main** (M2) ; proposal process-local | M2, M7 | CKC lié cycle + proposal | proposal durable later |
| V3-F02 LPS | Living Project State | **PARTIAL RUNTIME** — T-A1 Project/LPS durable SQLite **merged on main** ; writeback / autres états associés restent à compléter (M5+) | M1, M5 | M1 / PR #337 / restart proof | writeback + autres OA |
| V3-F03 DoctrinePackage | Package pin/digest | **PARTIAL RUNTIME** — digest in live `F2ContextSnapshot` **on main** (M2) ; KEEP files | M1–M2 | live digest in snapshot | — |
| V3-F04 Épistémologie | Obs/Hyp/… | DOC + UI tags partiels (base M2) | M2, M7 | tags/stop contradictions | later depth |
| V3-F05 Chaîne conv→exec | Boucle native | **PARTIAL RUNTIME** — cognitive piloting M2 on main ; HD/contract/exec encore Memory/fixture | M2–M6 | e2e sans copier-coller | M3+ backbone |
| V3-F06 Trajectory | ProjectTrajectory | Modeled / Memory cycle | M3, M7 | trajectory update post-HD | wire |
| V3-F07 Provenance | Source hierarchy | Doctrine FS | M2, M7 | provenance on artifacts | later |
| V3-F08 Contradictions | Stop/contradiction | DOC | M7 | UI stop + record | later |
| V3-F09 Replanif | Governed replan | DOC | M6–M7 | next-step from ReviewBundle | after M5 |
| V3-F10 DebtItem | Dette gouvernée | DOC | M7–M8 | debt records | later |
| V3-F11 AgentCapability | Caps agents | Fixture agent | M4 | REAL agent descriptor | harvest |
| V3-F12 Réversibilité | Action policy | Partial confirmations | M3–M4 | confirm+ack path | Ack UI |
| V3-F13 Learning | REX contrôlé | DOC / capitalisation | M5, M7 | learning from Evidence | later |
| V3-F14 Artifact Completeness | Completeness gates | Partial ReviewBundle | M5 | completeness checks | durable evidence |
| V3-F15 Maturity | Distributed maturity | Honesty rails T-A7 | M8 | anti-claim maturity | no false READY |

## B10. Chemin critique explicite

```text
CRITICAL PATH:
  M1 durable Project/LPS — SATISFIED / MERGED ON MAIN (PR #337 @ c6925954…)
  → M2 Nora contextuel durable — VALIDATED BY MORRIS / MERGED ON MAIN / EXIT PROOF SATISFIED (PR #339 @ a9a4765…)
  → M3 HD durable + ExecutionContract exact
  → M4 Cursor REAL borné (T-A5+harvest+Ack+Gate D)
  → M5 Evidence/ReviewBundle + LPS writeback
  → M6 boucle complète sans copier-coller

NEXT CAPABILITY: M3 — NOT AUTHORIZED — MORRIS GO REQUIRED

TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth
DECISION REQUIRED: OPS1/D1/execution-run disposition · Ack promotion
G0 CONSUMED: Option 1 ADOPTED · Product persistence node:sqlite ADOPTED
M2 MERGE GATE: CLOSED
```

## B10b. Dette documentaire post-M1

| Id | Observation | Impact | Classification | Owner / gate | Exit |
| --- | --- | --- | --- | --- | --- |
| **DOC-DEBT-M1-01** | Framing `32` métadonnées/maturité indiquent encore « persist runtime non migrée / schemas persist non créés » alors que T-A1 Project/LPS **et** T-A2 CycleInstance M2 subset SQLite sont **mergés** sur main | Risque de lecture contradictoire doctrine cible vs preuve runtime courante (dette plus visible post-M2) | documentation freshness debt | Morris — modification framing v3 = cycle + GO dédié | Cycle documentaire dédié corrigeant **uniquement** l’état factuel sans changer doctrine V3-F02/F06/F09 |

**Anti-claim :** DOC-DEBT-M1-01 ≠ blocker M3 automatique · ≠ autorisation de modifier `32` dans ce cycle · ≠ claim runtime v3 ADOPTED.

## B11. Freeze / stop-doing (**RECOMMENDATION**)

Tant que le chemin critique n’est pas servi, **ne pas** étendre par défaut :

- nouveaux lots FinOps sans dépendance Studio user-visible ;
- nouvelles features execution-run indépendantes ;
- expansion OPS1 UI (hors harvest adapter) ;
- expansion D1 `/projects` ;
- micro-hardening T-A7 sans blocker utilisateur.

Ces FREEZE sont des **recommandations** jusqu’à validation Morris.

## B12. Maintenance de la roadmap

Mettre à jour après : décision Morris structurante · milestone obtenue · nouvelle preuve · changement de dépendance · architecture validée · réserve bloquante · post-merge structurant.
Ne pas mettre à jour pour chaque micro-commit sans impact de trajectoire.

## Références

- Build Doctrine : [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md)
- G0 decision pack : [`sfia-studio-g0-architecture-persistence-decision-pack.md`](./sfia-studio-g0-architecture-persistence-decision-pack.md)
- M1 : PR #337 · merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI #158 · handoff `84330e34461bbd35adc7baa14fabe993baf24288`
- M2 : PR #339 · head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` · merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI #162 · handoff PR-readiness `1ad4746b44169d777a726fc8ceeed1c663469c40`
- Audit handoff historique : `sfia/review-handoff` @ `c5b417dc13fa3700787d28571e5b5abe0599ae98` / `31a5db07fba2555a59ee8c65ad76b537bbd8a73d`
- Framing : `projects/sfia-studio/sfia-v3-framing/30`–`37` (dont DOC-DEBT-M1-01 sur `32`)
