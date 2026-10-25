# SFIA Studio — AKG-M5 / L2-D2 — G-ACTIVATION PRE-READINESS — INTEGRATED TECHNICAL QUALIFICATION

**Profile:** Critical
**Typologie:** EVOL / QA / ARCHITECTURE READINESS
**Cycle projet:** 6 — Architecture technique (+ bloc 9 QA qualification)
**Date/heure locale:** 2026-10-25 03:58 CET
**Auteur rapport:** Cursor (Composer)
**GO / Autorité:** Morris — Qualifier les preuves techniques manquantes avant G-ACTIVATION, après PR #616. **QUALIFICATION ONLY.**
**Autorisé:** lecture Git/code/PRR · matrice de preuves · proposition Delivery intégré · Review Pack FULL · Handoff L3.
**NON autorisé:** activation · LIVE · migration · code Delivery · commit/push/PR projet · manifest write · suppression · DB utilisateur · Studio LIVE.

---

## 0. Verdict Cursor

**AKG-M5 L2-D2 G-ACTIVATION PRE-READINESS QUALIFIED WITH EVIDENCE-BASED GAPS**

**G-ACTIVATION — NOT GRANTED**
**REAL CUTOVER — NOT PROVEN**
**RUNTIME V3 — NON ADOPTED**
**PROJECT GIT — NOT MUTATED**
**REVIEW HANDOFF — REMOTE VERIFIED** *(après publication L3)*

Qualification = faits + gaps + options + recommandation. **Aucune recommandation ≠ décision Morris.**

---

## 01. Horodatage / GO

2026-10-25 03:58 CET · GO G-ACTIVATION Pre-Readiness Integrated Technical Qualification consommé.

---

## 02. Local Git Truth

| Check | Résultat |
|---|---|
| toplevel | `/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d2-postmerge-truth-sync` |
| Branch locale | `docs/akg-m5-l2-d2-r01-postmerge-status` @ `241335ee27aa463c02b1b1cabce2f67bc6f49f08` |
| origin/main | `d7aad77e999e4fe64f31a776ddf39c1d99278b1b` |
| PR #616 | **MERGED** 2026-10-25T02:19:57Z · merge = main |
| CI post-merge | [run 40154041670](https://github.com/mcleland147/sfia-workspace/actions/runs/40154041670) **COMPLETED / SUCCESS** |
| Dirty tracked projet | **aucun** (seulement `.tmp` pack) |
| Staged | aucun |
| Delivery / P6 / autres WT | **préservés** (non touchés) |
| Lecture code | `projects/sfia-studio/app/` **diff 0** vs `origin/main` sur chemins L2-D2 investigés |

Git Truth : **PASS**. Main requalifié : `7b64ab21…` → `d7aad77e…` = merge PR #616 (attendu).

---

## 03. Sources Git consultées

Méthode v2.6 : cycle template · routing · operating model.
Convergence : Build Doctrine · Roadmap CURRENT tip L2-D2.
C1 Product Completion.
M5 blueprint + L2-D0 `04` (§08 H4 checklist, R-CUT protocol).
Doctrine v3 : 30 / 32 / 34 / 35 / 37.
PRR README + 03–09 (CURRENT overlays L2-D2).
Code : `localOaExclusiveMode.ts` · `db.ts` · `repository.ts` · `boundedAtomicAudit.ts` · `legacyNavigation.ts` · Product/Nora paths · confirmation · suites `l2d2*` / M1 / L2-D1 D5.
Preuves : PR #614 / #615 / #616 + CI associées.

---

## 04. Capacité / milestone / actifs

| Item | Statut |
|---|---|
| Capacité v3 | **O-01** Créer, trouver, comprendre et reprendre un Project |
| Milestone | AKG-M5 / L2-D2 |
| OA Product Truth C | **KEEP** |
| Nora Memory B | **KEEP** (fichier distinct) |
| D1 historique | **FREEZE** sous marker / **RETIRE LATER** (pas de retrait) |
| Dual-write | **aucun** sur create Product (DET) |
| Runtime v3 | **NON ADOPTED** |

---

## 05. R23 / R24

**R23:** architecture-informed — code/preuves primaires vs PRR. Pas de rebuild M4/M5. DET ≠ LIVE.
**R24:** **NO NEW PRODUCT SEMANTIC IMPACT** — ce cycle ne modifie aucun artefact projet.

---

## 06. Acquis vs non acquis (faits)

### 6.1 Faits prouvés (DET + Git)

1. L2-D2 code **CURRENT ON MAIN** (PR #614) · marker default **OFF** · arming `trim()==="1"`.
2. Guards D1 : `openD1Db` + `createProjectAtomic` / `selectMethodModeAtomic` + audit append/clear — **BEHAVIOR PROVEN AT TESTED SCOPE**.
3. Injected writer guards (CORR-02) — **DET**.
4. Confirmation FORBIDDEN → `ok:false` — **DET**.
5. D4 Option A helpers redirect/`notFound` · **no** `proj-*`→`prj:*` — **DET** (unit, mocked next/navigation).
6. O-01 LPS objective → UI — **DET** (`l2d2O01ProductUiIntegrated`).
7. Product txn durability / D5 audit-in-txn — **DET** (M1 / L2-D1 suites).
8. Documentary R-01 status + digests — PR #615/#616 MERGED · CI SUCCESS.
9. Structural: VSR/Product create **sans** import `@/lib/d1`.

### 6.2 Gaps non prouvés (KNOWN GAP / UNKNOWN)

1. **H4-env** : aucune instance cible formellement désignée → **H4-ENV NOT QUALIFIED**.
2. **R-VOL-01** : volumes production **UNKNOWN**.
3. **R-L2D2-SQLITE-SNAPSHOT** : aucun helper backup/restore Product/Nora/D1 dans `app/lib` · pas de WAL management code.
4. **raw DatabaseSync** : bypass possible sur handle D1 pré-ouvert (`exec`/`prepare`) · reads D1 non gelés · OPS1/Product/Nora hors scope du freeze.
5. **D4 HTTP LIVE** : pas de Playwright/e2e avec env exclusive ON.
6. **Env trim arming** : tests utilisent override test-only · **aucun** test `process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE`.
7. **R-CUT LIVE** : protocole L2-D0 steps backup/verify/RO non exécutés sur instance Studio.
8. **Q12 RO fallback** : **NOT IMPLEMENTED**.
9. **Application Support** paths : documentés Option A · **non câblés** en code (cwd-relative `.sfia-exec` par défaut).

### 6.3 Hypothèses (non décisions)

- Un Fresh Start jetable avec chemins absolus env est le candidat le plus sûr pour première LIVE.
- Une copie fichier « à froid » après close des connexions peut être un MVP snapshot · **non prouvé**.
- `/ops1/nouvelle-demande` hors D4 instrumenté · policy à clarifier (in/out of exclusive UX).

---

## 07. Matrice de preuves intégrée

| ID | Capacité | Composants | Sources code | Preuve primaire | Couverture | KNOWN GAP | Impact user | Impact data | Dépendance | Mitigation proposée | Exit proof | Gate Morris | Statut |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| H4-env | O-01 continuity | Product/Nora/D1/OPS1 paths | `paths.ts` · `sessionPaths.ts` · `d1/paths.ts` · PRR 05 · L2-D0 §08 | Inventaire code + docs | DOCUMENTED (local model) | Instance cible / owners / prod volumes UNKNOWN | Confusion multi-worktree si env global | Partage DB si absolute path mal géré | Désignation instance | Checklist H4 remplie sur instance nommée | Checklist signée + owner | GO désignation env | **H4-ENV NOT QUALIFIED** |
| R-VOL-01 | O-01 | volumes D1/OA | L2-D0 §08 counts (local Q0) | Doc historique | DOCUMENTED (local) | Prod UNKNOWN | — | Conservation | Inventaire env | Scan env ciblé (RO) | Inventaire + conservation | GO inventaire | **OPEN** |
| R-L2D2-SQLITE-SNAPSHOT | O-01 durable | Product + Nora (+D1 RO) | *absence* backup helpers · PRR 06 | DET reopen tests ≠ snapshot | BEHAVIOR PROVEN reopen DET | Coherent backup/restore NOT PROVEN | Perte données si cutover sans backup | Corruption / hot copy | Connexions fermées | Helper snapshot borné (SQLite API ou stop-the-world copy) sur chemins jetables | Restore → Project+LPS+Memory B OK | GO Delivery prep | **KNOWN GAP** |
| raw DatabaseSync | Freeze integrity | D1 `DatabaseSync` | `db.ts` · `repository.ts` · injected tests · Product/Nora/OPS1 opens | DET injected writers guarded | COVERAGE VERIFIED guards | Raw `exec` bypass · reads ungated | Contournement freeze | Mutation D1 hors API | Exclusive ON | (A) document residual + deny operational use (B) optional interceptor/tests non-contournement | Preuve non-contournement DET + policy | GO si code change | **KNOWN GAP** |
| D4 HTTP | O-01 navigation | 4 routes + `legacyNavigation.ts` | pages workspace/projects/nouvelle-demande | `l2d2D4LegacyNavigation.test.ts` | BEHAVIOR PROVEN DET helpers | HTTP LIVE NOT PROVEN · ops1 policy UNKNOWN | Liens historiques cassés/404 attendus | Aucune migration id | Marker ON | Harness HTTP/e2e env=`1` disposable | GET redirect/404 codes | GO LIVE harness | **R-02 OPEN** |
| dual-write | Truth C unique | OA create vs D1 | VSR sans d1 · O01 test | DET O01 + structural | BEHAVIOR PROVEN DET | LIVE cutover not proven | Double écriture | Divergence Truth | Freeze D1 | Garder fail-closed · smoke LIVE | Smoke create OA only | G-ACTIVATION | **DET OK / LIVE OPEN** |
| R-CUT | Cutover borné | marker + freeze + D4 + backup | `localOaExclusiveMode.ts` · L2-D0 R-CUT | DET freeze/D4/O01 | PARTIAL DET | LIVE protocol NOT PROVEN | Basculer writers | Perte si pas backup | H4 + snapshot + D4 HTTP | Réhearsal disposables | Protocol steps 5–9 LIVE disposable | **G-ACTIVATION** | **NOT PROVEN LIVE** |
| recovery/restart | O-01 reprise | Product SQLite | M1 restart/durability tests | DET process reopen | BEHAVIOR PROVEN DET | Studio LIVE restart / App Support | Session perdue | Incohérence | Snapshot | Restart Studio disposable après snapshot | UI list/get project | G-ACTIVATION prep | **DET OK / LIVE OPEN** |
| G-ACTIVATION | Gate | env marker | `.env.example` · PRR 05/09 | Docs + code default OFF | DOCUMENTED | NOT GRANTED | Active freeze LIVE | All D1 writers blocked | All prior exits | Distinct Morris GO after proofs | GO explicit | **OPEN / NOT GRANTED** |

---

## 08. H4-env — synthèse checklist L2-D0 §08

| # | Item | Statut |
|---|---|---|
| 1 | Environment identified | DOCUMENTED policy · **UNKNOWN** named instance → **H4-ENV NOT QUALIFIED** |
| 2 | Owners | DOCUMENTED UNASSIGNED · **UNKNOWN** named |
| 3 | Writers D1 | COVERAGE VERIFIED + BEHAVIOR PROVEN DET freeze |
| 4 | Readers / routes | COVERAGE VERIFIED (4 routes) |
| 5 | Volumes | DOCUMENTED local Q0 · prod UNKNOWN |
| 6 | Users / journeys | UNKNOWN prod |
| 7 | Conservation | DOCUMENTED options · UNKNOWN prod |
| 8 | Backup / RO | **KNOWN GAP** (R-L2D2-SQLITE-SNAPSHOT · Q12 absent) |
| 9 | Old links D4 | DOCUMENTED + DET proven · LIVE OPEN |
| 10 | Fallback | DOCUMENTED concept · NOT PROVEN |
| 11 | NR tests env | PARTIAL (L2-D2 DET ≠ full NR) |
| 12 | No writer post-freeze | BEHAVIOR PROVEN DET guarded APIs · raw residual |
| 13 | Stops | DOCUMENTED |
| 14 | Morris GO per env | **NOT GRANTED** |

**Path model CURRENT (code):**
- Truth C: `SFIA_STUDIO_PRODUCT_DB_PATH` ou `{studioRoot}/.sfia-exec/product/oa-product.sqlite`
- Memory B: `SFIA_STUDIO_NORA_SESSION_DB_PATH` ou sibling `nora-session.sqlite`
- D1: `D1_SQLITE_PATH` / `OPS1_EXEC_ROOT` → `.sfia-exec/local-i1/state/d1.sqlite`
- Isolation: **cwd/worktree-relative** sauf absolute env
- **Pas** d'Application Support hardcodé

---

## 09. SQLite / raw DatabaseSync

### Snapshot/restore

- Aucun `VACUUM INTO` / `sqlite3_backup` / `journal_mode=WAL` dans `app/lib`.
- Preuve existante = **reopen same file** (DET), pas backup cohérent multi-fichiers Truth C + Memory B.
- Naive file copy **≠** validated backup (PRR 06/09).

### raw DatabaseSync residual

| Classe | Couvert exclusive? |
|---|---|
| `openD1Db` + repo/audit writers | OUI (assert) |
| Injected D1 mutation APIs | OUI (CORR-02 DET) |
| Raw `db.exec` sur handle pré-ouvert | **NON** — KNOWN GAP |
| D1 reads via repo | **NON gelés** (by design writer-freeze) |
| Product / Nora / OPS1 / M4 safety | **Hors** marker |

Absence de preuve LIVE ≠ absence de risque.

---

## 10. D4 / R-CUT

### D4

```
legacyNavigation.ts:
  redirectLegacyGenericEntryToStudioIfExclusive → redirect("/studio")
  denyLegacyProjectDeepLinkIfExclusive → notFound()  // never maps to prj:*
```

Consumers: `/workspace` · `/projects/new` · `/nouvelle-demande` · `/projects/[id]`.
Proof: **DET helpers only**. HTTP LIVE = R-02 OPEN.
`/ops1/nouvelle-demande` : **non instrumenté** D4 → policy UNKNOWN.

### R-CUT vs L2-D0

| Step (doc) | Code | Proof |
|---|---|---|
| H4 checklist | process | OPEN |
| Backup before freeze | missing | NOT PROVEN |
| Freeze writers | implemented | DET |
| D4 deny/redirect | implemented | DET · LIVE OPEN |
| Smoke verify | partial DET | LIVE OPEN |
| RO fallback Q12 | missing | NOT PROVEN |
| Unfreeze sans réconciliation | policy only | — |

Arming LIVE = `process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE=1` sur instance nommée — **≠** override test-only.

---

## 11. Fake / Real Qualification

| Classe | Contenu |
|---|---|
| Entrée | DETERMINISTIC PROVEN AT TESTED SCOPE (L2-D2 31/7 historiques + CI #614) + PR #615/#616 documentary |
| Ce cycle | DOCUMENTARY/CODE QUALIFICATION ONLY · **aucun** nouveau test exécuté |
| Tests | **NOT RUN** — `node_modules` absent · pas d'install · pas de Studio LIVE · pas de DB utilisateur |
| REAL / LIVE | **NOT PROVEN** · DETERMINISTIC ≠ READY FOR REAL |

---

## 12. Options (≠ décisions)

**Option A — Fresh Start disposable only (recommandée pour premier lot technique)**
Préparer instance jetable absolute-path · snapshot DET · HTTP D4 harness · R-CUT rehearsal sans données utilisateur.

**Option B — Application Support / instance réelle**
Exige H4 owners + conservation + backup prouvé **avant** tout arming · risque élevé · **non recommandé** comme premier LIVE.

**Option C — Documentation-only continue**
N'ajoute pas de preuve technique · **insuffisant** pour G-ACTIVATION.

**Recommandation Cursor (non ADOPTED):** Option A — un seul Delivery technique borné « G-ACTIVATION PREPARATION ».

---

## 13. Proposition Delivery intégré

### Titre candidat

**AKG-M5 L2-D2 — G-ACTIVATION PREPARATION — BOUNDED DELIVERY**

### Objectif end-to-end

Sur une **instance jetable désignée** (Fresh Start / absolute env paths), produire les exit proofs techniques manquants pour permettre un futur GO **G-ACTIVATION** distinct — sans activer une instance utilisateur.

### Instance / classe

**Classe:** disposable local Studio (worktree ou managed root dédié).
**Owner:** à assigner (aujourd'hui UNASSIGNED) — **décision Morris**.
**Volumes:** Product + Nora (+ D1 historique présent mais freeze) sous chemins absolus documentés.

### Chemin critique

1. Morris désigne instance jetable + conservation rules (H4 partial).
2. Delivery: helper/procedure **coherent snapshot/restore** Truth C (+ Memory B) sur artefacts temporaires · DET proof.
3. Delivery: **non-contournement** raw D1 sous exclusive (tests DET + policy; code minimal si GO).
4. Delivery: **D4 HTTP LIVE harness** (server test / Playwright) with **real env** `=1` on disposable.
5. Delivery: **R-CUT rehearsal** disposable: snapshot → arm env → freeze verify → D4 HTTP → OA create smoke → restore drill.
6. ChatGPT Critical Review → Morris **G-ACTIVATION** distinct (ou STOP).

### Sous-ensembles exécutables (un lot, étapes validables)

| Slice | Output | Preuve |
|---|---|---|
| S1 Snapshot | API/script borné + DET restore Project/LPS | DET |
| S2 Residual writer | Tests non-contournement ± garde minimale | DET |
| S3 D4 HTTP | Harness HTTP exclusive ON | Bounded REAL / HTTP |
| S4 R-CUT rehearsal | Runbook exécuté disposable | Bounded REAL |

### Composants réutilisés (pas d'architecture parallèle)

- `localOaExclusiveMode` · D1 guards · `legacyNavigation` · Product `SqliteProductStore` · Nora `ProductSqliteSession` · chemins existants.
- **Réutiliser** SQLite natif / stop-the-world close+copy plutôt que nouveau store.

### Fichiers candidats (indicatif — sous GO Delivery)

- `app/lib/oa/project/infrastructure/sqlite/*` (snapshot helper)
- `app/lib/nora-cognitive-runtime/sessionPaths.ts` / session (coordonner Memory B)
- `app/lib/d1/*` (uniquement si garde residual autorisée)
- `app/__tests__/**` + éventuel `e2e/` HTTP
- PRR 05/06/08/09 sync **après** preuves (doc distincte)

### Modifications minimales

- Ajouter capacité snapshot/restore **bornée** + tests jetables.
- Ajouter preuve HTTP D4.
- Documenter runbook R-CUT disposable.
- **Pas** d'activation default ON · **pas** dual-write · **pas** mapper proj→prj.

### Risques / reversibility

- Risque principal = toucher mauvaises DB → mitiger par absolute disposable paths + deny user App Support.
- Reversibility: marker OFF · restore snapshot · D1 files préservés (freeze ≠ delete).

### Dettes / exit

| Dette | Exit |
|---|---|
| R-L2D2-SQLITE-SNAPSHOT | DET restore proof + procedure |
| R-02 | HTTP LIVE pass disposable |
| R-03 raw | Non-contournement DET + policy |
| H4-env | Instance nommée + checklist |
| R-CUT LIVE | Rehearsal disposable documented |
| Q12 RO | Explicit in/out of scope for first G-ACTIVATION |

### Challenge obligatoire

| Question | Réponse |
|---|---|
| Utile pour O-01 ? | Oui — reprise Project/LPS après cutover sans perte |
| Plus simple ? | Oui vs App Support first |
| Réutiliser existant ? | Oui — marker/guards/D4/Product SQLite |
| Architecture parallèle ? | Non si snapshot sur fichiers existants |
| Preuve bout-en-bout ? | Oui via S1–S4 sur même instance jetable |
| REAL proof nécessaire ? | Bounded REAL (HTTP + rehearsal) **avant** G-ACTIVATION ; pas user LIVE |
| Décisions Morris ? | (1) désigner instance (2) GO Delivery prep (3) GO G-ACTIVATION later (4) formal close R-01 séparée |
| Studio après lot ? | Toujours DEFAULT OFF jusqu'à G-ACTIVATION ; runbook prêt |

---

## 14. Décisions Morris requises

1. **Désigner** la classe/instance H4 pour première préparation (recommandé: disposable Fresh Start).
2. **GO Delivery** « G-ACTIVATION PREPARATION — BOUNDED DELIVERY » (scope S1–S4).
3. Clarifier policy **`/ops1/nouvelle-demande`** sous exclusive.
4. Clarifier si **Q12 RO fallback** est in-scope du premier G-ACTIVATION ou DEFER.
5. **G-ACTIVATION** elle-même — **distincte**, après exit proofs.
6. **R-01 formal close** — **NOT** ce cycle (déjà exit proof satisfied).

**Ne pas autoriser l'exécution par anticipation.**

---

## 15. Stops / garde-fous respectés

- Aucune modification code projet.
- Aucun commit/push/PR/merge projet.
- Aucune activation / migration / DB utilisateur / Studio LIVE.
- Aucun manifest write.
- Aucune suppression worktree/branche.
- Tests Product **NOT RUN** (node_modules absent) — motif documenté.
- Qualification **non STOP** : gaps identifiés sans contradiction structurante bloquant la *qualification* elle-même.

---

## 16. Cleanup

**PRESERVED** — docs WT · Delivery · P6 · handoff branch · aucune suppression.

---

## 17. Git Truth final

| Check | Résultat |
|---|---|
| Branch | `docs/akg-m5-l2-d2-r01-postmerge-status` |
| HEAD | `241335ee…` |
| origin/main | `d7aad77e…` |
| Projet dirty | **aucun** |
| Pack | `.tmp-sfia-review/chatgpt-review.md` only |

---

## 18. Instruction ChatGPT

1. Lire handoff distant `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
2. Requalifier sur Git CURRENT `origin/main=d7aad77e…`.
3. Vérifier matrice H4 / SQLite / raw DB / D4 / R-CUT.
4. Challenger Option A Delivery intégré.
5. Proposer **GO Delivery borné** ou **STOP** — **sans** G-ACTIVATION.

FIN DU PACK G-ACTIVATION PRE-READINESS QUALIFICATION.
