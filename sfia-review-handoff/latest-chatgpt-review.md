# SFIA Studio — AKG-M5 / L2-D2 Cycle 7 — LOCAL OA FRESH START PREPARATION

**Profile:** CRITICAL
**Typologie:** RUN / ENVIRONMENT PREPARATION
**Date/heure locale:** 2026-10-24 15:29 CEST
**Auteur rapport:** Cursor (Composer)
**GO Morris consommé:** LOCAL FRESH START PREPARATION ONLY
**Cutover:** NOT AUTHORIZED (ce GO n'est PAS un GO cutover L2-D2)

---

## 0. Verdict Cursor

**LOCAL OA FRESH START PREPARATION PASS**
— NEW OA CANDIDATE ISOLATED
— HISTORICAL DATA UNTOUCHED
— CUTOVER NOT AUTHORIZED

Instruction ChatGPT : revue critique du pack FULL ; confirmer isolation + virginité ; ne pas interpréter comme autorisation de bascule runtime / D1 freeze / activation `SFIA_STUDIO_PRODUCT_DB_PATH` / restart Studio. Prochain GO borné candidate : **LOCAL STUDIO OA CUTOVER READINESS**.

---

## 1. GO Morris consommé

Décision Morris 2026-10-24 :

- Développement/test exclusif Mac local.
- Aucune reprise des anciens projets D1/OA.
- Cible Product OA avec base SQLite neuve et vierge.
- Ancien historique intact.
- Aucun staging séparé.

Résultat attendu de CE cycle uniquement : environnement de persistance OA **candidat**, isolé, initialisé via mécanismes Product actuels, avec preuves de sécurité et d'initialisation.

**NE PAS exécuté (conforme) :** bascule config active ; start/restart Studio ; désactivation D1 ; migration projets ; suppression anciennes bases ; architecture de stockage parallèle ; commit/push/PR projet.

---

## 2. Git Truth

| Check | Résultat |
|---|---|
| `pwd -P` | `/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-readiness` |
| Remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| `HEAD` | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` |
| `origin/main` | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` |
| Branch | *(detached HEAD on origin/main)* |
| Status porcelain | ` M .tmp-sfia-review/chatgpt-review.md` only (pack local) |
| Diff source Product | **aucune** (AUCUN fichier source créé/modifié) |
| Worktree utilisé | **readiness** `/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-readiness` |

Alignement tip P1 handoff (pré-publication) :

- Branche distante `sfia/review-handoff` tip : `58b3f2afe84da26160203df8de0762b7a26e327e`
- Worktree handoff : `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023` clean @ même SHA

**P6 worktree préservé (non muté) :**
`/Users/morris/Projects/sfia-workspace` @ `980064c0` branch `qa/sfia-studio-p6-global-integrated-product-qa` — dirty state **non touché** (ni stash, ni reset, ni open DB métier).

**Divergence Git Truth :** aucune. PASS.

---

## 3. Sources et convergence (lecture)

Canoniques lues / prises en compte (guidance, non exécutées comme authority runtime) :

- SFIA v2.6 templates / routing / guardrails / operating model (référence contrat).
- CKC `07-integration-devops.md` — guidance contenu.
- Convergence Build Doctrine + Roadmap (note R24 : Roadmap B-AKG détaillée historiquement moins à jour que CURRENT TIP — **aucune correction doc ce cycle**).
- Product Completion cadrage ; M4 to-be ; M5 blueprint + L2-D0 readiness.
- Doctrine v3 32/34/37 — **Runtime v3 NON ADOPTED**.
- PRR CURRENT volumes 04/05/06/07/08/09 — **pas de sync R24** (aucun changement Product).
- Handoff P1 FULL (tip `58b3f2af…`) + orientation Morris Fresh Start.
- Code path Product : `sqlite/paths.ts`, `sqlite/db.ts` (`openProductSqlite`, `PRODUCT_SCHEMA_VERSION` = `m9-0.1.0`), composition locale, D1 paths (lecture résolution seulement).

**Convergence pre-check :**

- Capacité cible O-01 — hors preuve E2E ce cycle.
- Architecture : OA = Product Truth C ; Studio `/studio` parcours nominal.
- Actifs : OA SQLite / SqliteProductStore / Product Schema / SqliteProjectAuditJournal / LPS+idempotence = KEEP ; D1 = RETIRE LATER ; données P6 = PRESERVE.
- État : L2-D1 MERGED/VERIFIED ; L2-D2 READINESS QUALIFIED ; P1 ENV QUAL ACCEPTED ; H4 GLOBAL OPEN ; R-CUT NOT PROVEN.
- Orientation Morris : LOCAL FRESH START, NO HISTORICAL PROJECT MIGRATION (périmètre local identifié uniquement).

Trajectoire rappelée : Fresh OA preparation → Critical Review ChatGPT → separate local cutover qualification → D1 writer/reader cutover sous GO → O-01 proof → future D1 retirement sous GO.

---

## 4. Worktree et processus

**Worktree d'exécution :** readiness (detached `origin/main`).

**Processus observés (sans secrets) :**

- Aucun processus Next.js / Studio / `sfia-studio` applicatif détecté au moment du check.
- Seul bruit node hors périmètre : daemon Codex artifact-session (non Studio).
- `lsof` sur la base candidate : aucun holder applicatif.

**Runtime actif Studio :** non démarré / non redémarré (interdit par GO).

---

## 5. Configuration / path discovery (R23)

### 5.1 Overrides shell (session agent)

| Clé | État |
|---|---|
| `SFIA_STUDIO_PRODUCT_DB_PATH` | UNSET |
| `SFIA_STUDIO_NORA_SESSION_DB_PATH` | UNSET |
| `D1_SQLITE_PATH` | UNSET |
| `OPS1_EXEC_ROOT` | UNSET |
| `SFIA_STUDIO_CURSOR_REAL` | UNSET |
| `BETTER_AUTH_SECRET` | UNSET |

### 5.2 Fichiers env

- `app/.env.local` : **ABSENT** dans le worktree readiness (aucune clé active locale à masquer).
- Aucune modification `.env*` effectuée.

### 5.3 Résolution Product (code, non invoquée sur bases historiques)

`resolveProductSqlitePath` (`paths.ts`) :

1. Si override explicite ou `SFIA_STUDIO_PRODUCT_DB_PATH` → `path.resolve` + **`ensureDir(dirname)`** + refuse chemins alien `d1.sqlite` / `ops1`.
2. Sinon default : `{studioRoot}/.sfia-exec/product/oa-product.sqlite` où `studioRoot = resolve(cwd, "..")` quand cwd = `app/`.

**Avertissement opérationnel :** invoquer le résolveur default **crée** le répertoire product. Pendant la découverte, le résolveur n'a **pas** été appelé sur le chemin default historique. L'init candidate a utilisé `openProductSqlite(absolutePath)` directement (mécanisme Product d'ouverture/schéma), sans toucher l'env actif.

### 5.4 Existence chemins (stat only — aucun open SQLite historique)

**Readiness WT :**

| Chemin | État |
|---|---|
| `…/readiness/…/.sfia-exec/product/oa-product.sqlite` | ABSENT (avant et après) |
| `…/readiness/…/.sfia-exec/local-i1/state/d1.sqlite` | ABSENT |
| Default product dir readiness | non créé par ce cycle |

**P6 WT (existence fichier seulement — contenus NON lus / NON ouverts) :**

| Chemin | État |
|---|---|
| `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/product/oa-product.sqlite` | EXISTS FILE size=3207168 |
| `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/state/d1.sqlite` | EXISTS FILE size=376832 |

### 5.5 Risques de collision

| Risque | Évaluation |
|---|---|
| Candidate == P6 OA path | **FAUX** (`realpath` distincts) |
| Candidate sous P6 worktree | **FAUX** |
| Symlink candidate → hist | **FAUX** (`isLink=false`, realpath = path) |
| Partage D1 / OPS1 | **FAUX** (hors `state/d1`, hors ops1 ; basename `oa-product.sqlite`) |
| Processus utilisant candidate | **Aucun** observé |
| Env actif pointant candidate | **Non** (UNSET + pas de `.env.local`) |
| Default readiness créé par erreur | **Non** (DEFAULT_STILL_ABSENT) |

---

## 6. Chemin candidat OA (TEMPORARY)

**Chemin absolu résolu :**

```
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-readiness/projects/sfia-studio/.sfia-exec/fresh-start-candidates/2026-10-24-oa-isolated/oa-product.sqlite
```

**Statut artefact :** TEMPORARY — cible = future base OA locale sous GO cutover ; exit = activation autorisée **ou** retrait contrôlé sous décision Morris.

**Preuve d'absence préalable :** `CANDIDATE_ABSENT` avant mkdir/init.

**Gitignore :** `projects/sfia-studio/.sfia-exec/**` → fichier **non versionné** (confirmé `git check-ignore`).

**Aucun changement** de `SFIA_STUDIO_PRODUCT_DB_PATH` / runtime / Studio.

---

## 7. Initialisation effectuée

**Mécanisme :** `openProductSqlite(dbPath)` depuis `app/lib/oa/project/infrastructure/sqlite/db.ts` (Product schema M1→M9, `PRODUCT_SCHEMA_VERSION = m9-0.1.0`).

**Runner :** `tsx` one-shot sous `.tmp-sfia-review/` (hors source Product) — **AUCUN** fichier source Product créé/modifié.

**Résultat init :**

| Champ | Valeur |
|---|---|
| schema_version | `m9-0.1.0` (match expected) |
| isLink | false |
| size | 339968 bytes |
| tables Product | jeu OA courant présent (`oa_projects`, `oa_lps`, `oa_lps_current`, `oa_idempotency`, `oa_audit_events`, … + `schema_meta`) |
| `oa_projects` | 0 |
| `oa_lps` | 0 |
| `oa_lps_current` | 0 |
| `oa_idempotency` | 0 |
| `oa_audit_events` | 0 |
| create-like audit rows | 0 |
| `schema_meta` rows | 1 (`schema_version`) — métadonnée technique attendue, **pas** ligne métier |
| WAL/SHM résiduels | absents après close |
| Dépendance D1 pour init | **aucune** (Product-only) |

**Reopen preuve :** second `openProductSqlite` sur la **même** candidate → schéma `m9-0.1.0`, counts métier toujours 0, size inchangé (339968).

**STOP structural :** non déclenché (aucun changement code/schéma/chemin protégé requis).

---

## 8. Validation ciblée (tests jetables)

**Règle respectée :** la base candidate n'a **pas** servi de fixture ; tests utilisent `os.tmpdir()` / `mkdtemp` via `createTestSqliteProductProjectServices`.

**Env Product path :** UNSET pendant les tests.

**Suite exécutée** (`vitest run`, cwd `app/`) :

| Fichier | Résultat |
|---|---|
| `m1ProductSqliteDurability.test.ts` | PASS |
| `m5ProductSchemaMigration.test.ts` | PASS |
| `m5W1LpsAppend.test.ts` | PASS |
| `l2d1D5CreateAuditAtomicity.test.ts` | PASS (D5 / Q5.x scope) |
| `projectLpsFoundation.test.ts` | PASS |
| `m1RestartProcessProof.test.ts` | PASS |
| `m5RestartProcessProof.test.ts` | PASS |

**Agrégat :** 7 files / **50 tests PASS** / exit 0.
**Errors / skips :** aucun.

**Post-tests candidate :** reopen → always virgin ; size/mtime inchangés vs post-init (`mtime=Oct 24 15:28:18 2026`, size=339968).

### Niveaux de preuve (séparés)

| Affirmation | Niveau |
|---|---|
| Candidate isolée créée via Product init | **BEHAVIOR PROVEN AT TESTED SCOPE** |
| Schéma `m9-0.1.0` + tables OA | **BEHAVIOR PROVEN AT TESTED SCOPE** |
| Virginité métier (0 projects/LPS/idempotency/audits) | **BEHAVIOR PROVEN AT TESTED SCOPE** |
| Tests OA schema/persist/LPS/audit/idempotence/restart sur DB jetables | **COVERAGE VERIFIED** + **BEHAVIOR PROVEN AT TESTED SCOPE** |
| Isolation vs P6 paths (realpath ≠) | **DOCUMENTED** + path identity proven |
| Contenu métier P6/D1 historiques | **UNKNOWN** (volontairement non ouverts — H4 local Fresh Start) |
| Cutover runtime / O-01 E2E Studio UI | **KNOWN GAP** (hors GO) |
| REAL Cursor agent / P6 Human QA | **Non exécuté** (interdit) |

Aucun claim **REAL**.

---

## 9. H4 / H1 / D4 / R-CUT (état inchangé côté décision globale)

| Item | État ce cycle |
|---|---|
| H4 local Fresh Start | Morris : pas de reprise anciens projets → **pas de migration D1→OA nécessaire pour cette cible locale neuve** |
| H4 GLOBAL | **reste OPEN** — ne pas convertir |
| Contenu anciennes DB | UNKNOWN ; non inventorié (sans valeur dans ce périmètre) |
| H1 MethodModeHold | ACTIVE côté D1 historique ; **aucune propagation OA** ; aucun writer D1 modifié |
| CR-D2-01 | rappel : `createProject` D1 peut écrire methodMode hors hold — hors scope mutation |
| D4 | deny/redirect = recommandation candidate, **non implémenté** |
| R-CUT | design only ; Q7–Q12 / Q15 **non fermés** |

---

## 10. Isolation vis-à-vis de D1 / P6

**FAITS :**

1. Candidate créée uniquement sous readiness WT, sous `.sfia-exec/fresh-start-candidates/…` (non default `product/`).
2. P6 OA et D1 existent toujours aux chemins historiques ; tailles observées par `stat` uniquement.
3. Aucune écriture, backup, delete, WAL/SHM mutation sur historiques.
4. Aucune bascule env ; Studio non redémarré.
5. Tests n'ont pas ciblé la candidate.

**HYPOTHÈSES (explicites) :**

- H1 : P6 dirty files hors DB restent inchangés faute d'opérations sur ce worktree (non re-diffés exhaustivement ce cycle — préservation par non-toucher).
- H2 : aucun autre agent n'a écrit la candidate entre init et pack (mtime stable observé).

---

## 11. R23 / R24

**R23 :** frontières de chemins reconstituées ; collision candidate/historique non prouvée comme risque actif ; `ensureDir` risk documenté pour futurs appels `resolveProductSqlitePath` sans override.

**R24 :**

- Qualification : **NO PRODUCT SEMANTIC IMPACT**.
- Aucune sync PRR requise.
- Aucune correction Roadmap/Doctrine.
- Aucun fichier Product dans le Review Pack (aucune source Product modifiée).

---

## 12. Capacité v3 et trajectoire

- Runtime v3 : **NON ADOPTED**.
- O-01 : non prouvé E2E ici ; préparation persistence seulement.
- Pas de store/moteur parallèle durable ajouté (candidate = instance Product schema standard, emplacement temporaire hors activation).

---

## 13. Conditions pour prochain GO — LOCAL STUDIO OA CUTOVER READINESS

Bornes suggérées (à décider Morris — **non autorisées ici**) :

1. Décider activation candidate **ou** chemin final local OA (peut être ce candidate ou autre path absolu neuf).
2. Plan borné : set `SFIA_STUDIO_PRODUCT_DB_PATH` (ou équivalent documenté) **sans** toucher P6 DB ; preuve lecture/écriture O-01 sur OA neuf.
3. Qualifier writers/readers D1 restants (incl. create/intake/confirmation + CR-D2-01) avant freeze/read-only.
4. D4 redirect/deny comme décision séparée.
5. Ne pas migrer historique (aligné Fresh Start).
6. Preuves séparées : DOCUMENTED / COVERAGE / BEHAVIOR — toujours pas REAL sauf GO explicite.

**Aucun GO Delivery ou cutover implicite.**

---

## 14. Réserves

1. `npm ci` a été exécuté dans readiness `app/` pour permettre tsx/vitest — `node_modules` local ; pas de commit.
2. Scripts one-shot sous `.tmp-sfia-review/` (init/reopen) — jetables, hors Product source.
3. Existence taille P6 DBs via `stat` seulement ; pas d'intégrité SQLite historique vérifiée (interdit/non nécessaire).
4. Roadmap B-AKG détaillée peut diverger du tip — signalé, non corrigé.

---

## 15. Distinction faits / hypothèses (synthèse)

| Type | Contenu |
|---|---|
| FAIT | Git Truth HEAD=origin/main `1a380f22…` ; candidate absente puis créée ; schema `m9-0.1.0` ; counts métier 0 ; 50 tests PASS sur DB jetables ; candidate toujours vierge après ; P6 paths distincts |
| HYPOTHÈSE | Stabilité long-terme hors observation ; contenu P6 UNKNOWN |
| NON-CLAIM | Cutover ; REAL ; H4 GLOBAL PASS ; D1 retirement ; O-01 E2E Studio |

---

## 16. Instruction ChatGPT

Revue critique FULL :

1. Confirmer que le GO « PREPARATION ONLY » est respecté (pas de cutover implicite).
2. Valider l'isolation candidate vs P6/D1 et la virginité métier.
3. Valider que les tests n'ont pas pollué la candidate.
4. Ne pas élargir vers activation env / restart / D1 freeze.
5. Si PASS critique : recommander formulation exacte du prochain GO **LOCAL STUDIO OA CUTOVER READINESS** borné.
6. Si réserve : formuler STOP ou PARTIAL avec gate précise.

---

**FIN DU RAPPORT CYCLE 7 — LOCAL OA FRESH START PREPARATION**
