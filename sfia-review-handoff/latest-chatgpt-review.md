# SFIA Studio — AKG-M5 / L2-D2 Cycle 13 — R24 FINAL CORRECTION + MANIFEST DIGEST SYNC + CUMULATIVE PR READINESS

**Profile:** CRITICAL
**Typologie:** DOC CORRECTION / CONFORMANCE / PR READINESS
**Date/heure locale:** 2026-10-24 19:30 CEST
**Auteur rapport:** Cursor (Composer)
**GO / Autorité:** Morris 2026-10-24 — R24 Final Correction + G-MANIFEST digest sync + Cycle 13 PR Readiness **GRANTED**. **G-GIT OPEN. G-ACTIVATION OPEN.**

---

## 0. Verdict Cursor

**AKG-M5 L2-D2 CUMULATIVE PR READINESS**
— TECHNICALLY READY FOR G-GIT DECISION
— PRODUCT + PRR + MANIFEST COHERENT
— CONFORMANCE PASS
— CRITICAL REVIEW REQUIRED
— NO PROJECT COMMIT/PUSH/PR/MERGE
— ACTIVATION NOT AUTHORIZED

Instruction ChatGPT : Critical Review Cycle 13 cumulatif ; si satisfaisant, recommander le prochain gate Morris pour **Git Integration** uniquement — sans commit/push/PR/merge/activation implicites.

---

## 01. GO Morris

Autorisé : R24-01/02 doc fixes ; manifest digests justifiés ; validations ; qualification PR Readiness ; handoff L3.

**Non autorisé :** commit/push/PR/merge projet ; activation OA-exclusive ; DB définitives/historiques ; runtime actif ; v3 adoption.

---

## 02. Cycle / profil

Cycle **13 — PR Readiness** · CRITICAL · DOC CORRECTION / CONFORMANCE / PR READINESS.

Capacité O-01 · Fondations V3-F02/F06/F12 · Milestone AKG-M5 · Livraison L2-D2.

---

## 03. Date/heure

2026-10-24 19:30 CEST (Europe/Paris).

---

## 04. Git Truth

| Check | Résultat |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-local-oa-cutover` |
| Branch | `feat/akg-m5-l2-d2-local-oa-cutover` |
| HEAD | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` |
| origin/main (local+ls-remote) | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` — **inchangé** |
| Staged | vide |
| Dirty | Delivery L2-D2 + CORR-02 + R24 + C13 corrections + manifest — **préservé** |
| Handoff tip entrée | `85f15081937389ef8f73e9c68242743d4fc1e30a` / blob `b529d333da21415de233818137634927cdcf37a6` |
| P6 | dirty ~11 — **non altéré** |

Git Truth : **PASS**.

---

## 05. Convergence Pre-check

Doctrine VALIDATED · Roadmap ACTIVE · C1 VALIDATED · L2-D1 MERGED · L2-D2 Readiness ACCEPTED · Delivery IMPLEMENTED LOCALLY · CORR-02 PASS WITH GOVERNED RESERVES · R24 LOCAL AUTHORING COMPLETE · R24 Critical Review PASS WITH TWO DOCUMENTARY CORRECTIONS · G-MANIFEST GRANTED · G-GIT OPEN · G-ACTIVATION OPEN · runtime v3 NON ADOPTED.

---

## 06. Sources

SFIA v2.6 · Convergence · Product Completion · M4/M5 · Framings · CKC 08 · PRR + manifest · handoffs Delivery / CORR-REVIEW-01 / CORR-02 / R24@85f15081 · code/tests dirty.

---

## 07. R23 composants (chaîne A–L)

| Check | Statut |
|---|---|
| A D1 freeze before open/DDL | BEHAVIOR PROVEN AT TESTED SCOPE (DET) |
| B mutative guards injected APIs | BEHAVIOR PROVEN AT TESTED SCOPE |
| C confirm FORBIDDEN → ok:false / no onDone | BEHAVIOR PROVEN AT TESTED SCOPE |
| D D4 redirect / notFound / no proj→prj | BEHAVIOR PROVEN AT TESTED SCOPE |
| E O-01 LPS objective → UI | BEHAVIOR PROVEN AT TESTED SCOPE |
| F Memory B ≠ Truth C | DOCUMENTED / CURRENT INV |
| G H4 no historical migration | DOCUMENTED |
| H raw DatabaseSync residual | KNOWN GAP |
| I DET ≠ LIVE / R-CUT | DOCUMENTED |
| J runtime v3 NON ADOPTED | DOCUMENTED |
| K PRR LOCAL CANDIDATE ≠ CURRENT ON MAIN | DOCUMENTED |
| L no parallel architecture | DOCUMENTED |

---

## 08. R24 corrections exactes (Cycle 13)

### R24-01 — trim() predicate (vols 04/05)

Code : `process.env[KEY]?.trim() === "1"`.

Doc before claimed « exactly `"1"` » without trim. Corrected to document trim semantics + examples ON/OFF.

### R24-02 — SQLite snapshot debt (vol 06 + 09)

Removed claim that coherent file copies are the operational backup model. Added debt `R-L2D2-SQLITE-SNAPSHOT` : procedure **to qualify and prove before G-ACTIVATION** (quiesce, WAL/SHM, backup API, verify restore, preserve source). **No live backup executed.**

---

## 09. Diffs documentaires Cycle 13 (corrections)

### Current corrected sections

#### Vol 05 inventory + overlay (trim)

```markdown
## Overlay — AKG-M5 L2-D2 exclusive marker + Option A paths (LOCAL DELIVERY CANDIDATE — 2026-10-24)

| Rule | Detail |
|---|---|
| Activation predicate | Env value **trimmed** must equal `"1"` — matches `isLocalOaExclusiveMode()` (`trim() === "1"`). Examples: `"1"` ON · `" 1 "` ON · `"0"` OFF · unset OFF · other strings OFF |
| Default | OFF / unset — preserves CURRENT ON MAIN D1 behavior |
| Binding | Server-only ; documented in `app/.env.example` ; **never** `NEXT_PUBLIC_*` |
| Future instance paths | Absolute `SFIA_STUDIO_PRODUCT_DB_PATH` + `SFIA_STUDIO_NORA_SESSION_DB_PATH` for isolated Application Support–class locations (Option A design) |
| Isolation | Do **not** set exclusive globally for all Git worktrees ; Fresh Start candidate remains a distinct preparation |
| This cycle | R24 documents the marker — **does not** set user `.env.local`, create definitive DBs, or start Studio |
| Anti-claims | Exclusive **not** ADOPTED · cutover **not** proven · configuration of this Delivery worktree **unchanged** for activation |
```

#### Vol 04 marker row

```markdown
| Marker | `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` | `localOaExclusiveMode.ts` | Fail-closed when env **after `trim()`** equals `"1"` ; default OFF |
```

#### Vol 06 backups + debt

```markdown
| Backups / snapshot | **NOT PROVEN** — see debt `R-L2D2-SQLITE-SNAPSHOT` below. Do **not** treat a naive file copy of `*.sqlite` as a validated cutover backup |
| Restart | DET reopen / singleton reset / M1 process durability proven at tested scope · **Studio live restart / R-CUT** = **NOT PROVEN** |
| Residual boundary | Raw `DatabaseSync` outside D1 applicative APIs **not** guarded — **KNOWN GAP** (declared CORR-02) |
| Proof | freeze + injected + O-01 + D5 + M1 suites — **DETERMINISTIC AT TESTED SCOPE** (31 PASS / 7 files per CORR-02 handoff) |
| Anti-claims | Exclusive **not** active on main · cutover **not** proven · App Support definitive DBs **not** created · live backup **not** executed this cycle |

### Debt — `R-L2D2-SQLITE-SNAPSHOT` (operational, pre–G-ACTIVATION)

**Owner / gate:** Morris G-ACTIVATION preparation (distinct from G-GIT). **Exit:** documented + DET-proven coherent snapshot/restore of Truth C (+ Memory B if in scope) **before** exclusive arming on a designated local instance.

**To qualify and prove (not claimed now):**
1. Quiesce writers — no active Studio Product/Nora connections holding the target DB (or equivalent exclusive access).
2. Account for SQLite sidecar files when present (`*-wal` / `*-shm`) — a lone `.sqlite` copy while WAL is hot is **not** a coherent backup.
3. Prefer an online-safe mechanism when quiesce is incomplete (e.g. SQLite backup API / VACUUM INTO / checked checkpoint) over blind filesystem copy.
4. Preserve source OA files until restore verification succeeds.
5. Verify recovery by opening the snapshot on a disposable path and reading Project + LPS (Truth C) without mutating the live source.
6. Record procedure + proof artifacts under the activation Decision Pack — **no live backup in this Cycle 13**.

```

#### Vol 09 debt rows

```markdown
| Residual writer | Raw `DatabaseSync` outside D1 applicative APIs — **KNOWN GAP** |
| `R-L2D2-SQLITE-SNAPSHOT` | Coherent SQLite snapshot/restore for Truth C (+ Memory B) **NOT PROVEN** — must be qualified before G-ACTIVATION (see vol 06) · naive file copy **≠** validated backup |
| Temporary debt exit | Digests sync (this Cycle 13 G-MANIFEST) → ChatGPT Critical Review → G-GIT decision on **cumulative** Delivery → post-merge → **separate** G-ACTIVATION (+ snapshot debt exit) for local exclusive cutover |
```

### Diff vs HEAD for corrected volumes (includes prior R24 content — review Cycle13 intent above)

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index 77c62354..dd32ca73 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -125,7 +125,25 @@ OA = authority of record. W2 = Product coordination. Nora = cognition/recommenda
 | DEP-CREATE-AUDIT-TXN | `CreateProject` | `ProjectAuditJournalPort` + `SqliteProductStore` | Success `oa.project.created` append **inside** UnitOfWork (same SQLite txn when durable) |
 | DEP-COMPOSE-AUDIT-DEFAULT | `localProjectComposition` | `SqliteProjectAuditJournal` | Default Product create journal durable (replaces Memory inject) |
 | New Product table | — | — | **NONE** (`oa_audit_events` reused) |
-| D1 / dual-write | — | — | **NONE** — L2-D2 NOT AUTHORIZED |
+| D1 / dual-write | — | — | **NONE** at L2-D1 merge scope — L2-D2 was **not** authorized then (see L2-D2 candidate overlay below) |
+
+### Overlay — AKG-M5 L2-D2 local OA-exclusive D1 freeze + D4 (LOCAL DELIVERY CANDIDATE — 2026-10-24)
+
+**Epistemic:** dirty branch `feat/akg-m5-l2-d2-local-oa-cutover` @ base `1a380f22…` — **NOT CURRENT ON MAIN**. Default exclusive OFF preserves historical D1. Activation = distinct G-ACTIVATION.
+
+| Edge / surface | From | To | Candidate change |
+|---|---|---|---|
+| Marker | `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` | `localOaExclusiveMode.ts` | Fail-closed when env **after `trim()`** equals `"1"` ; default OFF |
+| Open guard | callers of `openD1Db` | `assertD1AccessAllowedWhenLocalOaExclusive` | Before path resolve / open / DDL |
+| Mutative repo | `D1ProjectRepository.createProjectAtomic` / `selectMethodModeAtomic` | same assert | **CORR-02** — closes injected `DatabaseSync` bypass |
+| Mutative audit | `BoundedAtomicAuditStore.append` / `clearForTests` | same assert | **CORR-02** |
+| Commands | `createProject` / `selectMethodMode` / confirmation execute | repo + open guards | FORBIDDEN without D1 file create |
+| Confirmation action | `actionExecuteConfirmation` | UI `ConfirmationPanel` | **CORR-02:** FAILED+FORBIDDEN → `ok:false` (no false success) |
+| D4 routes | `app/workspace`, `projects/new`, `nouvelle-demande`, `projects/[id]` | `legacyNavigation.ts` | redirect `/studio` or `notFound` when exclusive ON |
+| Indirect consumers | Intake / D1 pages / audit port injectors | above writers | Covered when they use guarded APIs |
+| Residual | raw `DatabaseSync.exec/prepare` outside D1 APIs | — | **KNOWN GAP** — not controlled by applicative guards |
+
+Manifest curated edges: **unchanged** (narrative / non-indexed dependency only). Dual-write Product↔D1: **none** as target architecture.

 ### Overlay — AKG-M5 L1/A09 audit-port decoupling (local Delivery 2026-10-23)

diff --git a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
index 8513b780..12e40456 100644
--- a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
@@ -15,8 +15,9 @@

 | Name | Purpose | Required | Default/notes | Boundaries |
 |---|---|---|---|---|
-| `SFIA_STUDIO_PRODUCT_DB_PATH` | Absolute product SQLite | optional | else `.sfia-exec/product/oa-product.sqlite` | Truth C |
-| `SFIA_STUDIO_NORA_SESSION_DB_PATH` | Absolute Nora session SQLite | optional | else cwd-relative `.sfia-exec/product/nora-session.sqlite` | Memory B; **worktree-sensitive** |
+| `SFIA_STUDIO_PRODUCT_DB_PATH` | Absolute product SQLite | optional | else `.sfia-exec/product/oa-product.sqlite` | Truth C · server-only · prefer absolute path for durable instance |
+| `SFIA_STUDIO_NORA_SESSION_DB_PATH` | Absolute Nora session SQLite | optional | else cwd-relative `.sfia-exec/product/nora-session.sqlite` | Memory B · **≠ Truth C** · worktree-sensitive · prefer absolute per-instance |
+| `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` | Local OA-exclusive cutover marker (L2-D2) | no — default **OFF** | Arms when `process.env` value **after `trim()`** equals `"1"` (code: `isLocalOaExclusiveMode`) ; `"1"` / `" 1 "` → ON ; unset / `"0"` / other → OFF (historical D1) | Server-only · **not** global across worktrees · **G-ACTIVATION** required · LOCAL CANDIDATE code on dirty Delivery **≠** active on main |
 | `SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY` | Server-owned repo identity | yes Product local | fail-closed if absent | config |
 | `SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL` | Server-owned remote | yes Product local | fail-closed | config |
 | `SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH` | Default branch | optional | `main` | config |
@@ -44,3 +45,15 @@

 - Product binding/authority envs are **server-only** (never `NEXT_PUBLIC_*`).
 - Browser must not supply repository binding or Pilot authority claims.
+
+## Overlay — AKG-M5 L2-D2 exclusive marker + Option A paths (LOCAL DELIVERY CANDIDATE — 2026-10-24)
+
+| Rule | Detail |
+|---|---|
+| Activation predicate | Env value **trimmed** must equal `"1"` — matches `isLocalOaExclusiveMode()` (`trim() === "1"`). Examples: `"1"` ON · `" 1 "` ON · `"0"` OFF · unset OFF · other strings OFF |
+| Default | OFF / unset — preserves CURRENT ON MAIN D1 behavior |
+| Binding | Server-only ; documented in `app/.env.example` ; **never** `NEXT_PUBLIC_*` |
+| Future instance paths | Absolute `SFIA_STUDIO_PRODUCT_DB_PATH` + `SFIA_STUDIO_NORA_SESSION_DB_PATH` for isolated Application Support–class locations (Option A design) |
+| Isolation | Do **not** set exclusive globally for all Git worktrees ; Fresh Start candidate remains a distinct preparation |
+| This cycle | R24 documents the marker — **does not** set user `.env.local`, create definitive DBs, or start Studio |
+| Anti-claims | Exclusive **not** ADOPTED · cutover **not** proven · configuration of this Delivery worktree **unchanged** for activation |
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index 31dc9845..706043ab 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -94,7 +94,36 @@ Four situations must stay distinct (S2 / M-HD-01 HD11):
 | Idempotent reuse audit | Best-effort (Project already durable) |
 | New table / port | **NONE** |
 | Proof | `l2d1D5CreateAuditAtomicity.test.ts` Q5.1–Q5.7 — DETERMINISTIC AT TESTED SCOPE |
-| Not claimed | L2-D2 cutover · O-01 E2E COMPLETE (« comprendre » Product→UI KNOWN GAP) · REAL · runtime v3 ADOPTED · D1 retire |
+| Not claimed (at L2-D1 merge) | L2-D2 cutover · O-01 integrated Product→UI « comprendre » (then KNOWN GAP) · REAL · runtime v3 ADOPTED · D1 retire |
+
+## Overlay — AKG-M5 L2-D2 OA / D1 persistence freeze (LOCAL DELIVERY CANDIDATE — 2026-10-24)
+
+| Item | Candidate status |
+|---|---|
+| Product OA Truth C | KEEP — `oa-product.sqlite` / `SFIA_STUDIO_PRODUCT_DB_PATH` · Project + LPS |
+| Nora Memory B | KEEP distinct — `nora-session.sqlite` / `SFIA_STUDIO_NORA_SESSION_DB_PATH` · **≠** Truth C |
+| D1 historical | FREEZE gated when exclusive `"1"` · RETIRE LATER · **no** physical removal in L2-D2/CORR-02 |
+| Freeze at open | `openD1Db` → assert **before** resolve / open / DDL |
+| Freeze at mutation | **CORR-02:** `createProjectAtomic` / `selectMethodModeAtomic` / `BoundedAtomicAuditStore.append|clearForTests` assert before BEGIN/INSERT/UPDATE/DELETE |
+| Dual-write Product↔D1 | **None** as target under exclusive |
+| H4 local | No historical D1→OA migration in this Delivery |
+| Backups / snapshot | **NOT PROVEN** — see debt `R-L2D2-SQLITE-SNAPSHOT` below. Do **not** treat a naive file copy of `*.sqlite` as a validated cutover backup |
+| Restart | DET reopen / singleton reset / M1 process durability proven at tested scope · **Studio live restart / R-CUT** = **NOT PROVEN** |
+| Residual boundary | Raw `DatabaseSync` outside D1 applicative APIs **not** guarded — **KNOWN GAP** (declared CORR-02) |
+| Proof | freeze + injected + O-01 + D5 + M1 suites — **DETERMINISTIC AT TESTED SCOPE** (31 PASS / 7 files per CORR-02 handoff) |
+| Anti-claims | Exclusive **not** active on main · cutover **not** proven · App Support definitive DBs **not** created · live backup **not** executed this cycle |
+
+### Debt — `R-L2D2-SQLITE-SNAPSHOT` (operational, pre–G-ACTIVATION)
+
+**Owner / gate:** Morris G-ACTIVATION preparation (distinct from G-GIT). **Exit:** documented + DET-proven coherent snapshot/restore of Truth C (+ Memory B if in scope) **before** exclusive arming on a designated local instance.
+
+**To qualify and prove (not claimed now):**
+1. Quiesce writers — no active Studio Product/Nora connections holding the target DB (or equivalent exclusive access).
+2. Account for SQLite sidecar files when present (`*-wal` / `*-shm`) — a lone `.sqlite` copy while WAL is hot is **not** a coherent backup.
+3. Prefer an online-safe mechanism when quiesce is incomplete (e.g. SQLite backup API / VACUUM INTO / checked checkpoint) over blind filesystem copy.
+4. Preserve source OA files until restore verification succeeds.
+5. Verify recovery by opening the snapshot on a disposable path and reading Project + LPS (Truth C) without mutating the live source.
+6. Record procedure + proof artifacts under the activation Decision Pack — **no live backup in this Cycle 13**.

 ## Additional stores (harvest)

diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 87edbab6..bab1e6aa 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,17 +5,36 @@
 - Runtime v3 **NON ADOPTED**
 - This corpus does not change product behavior by itself (Living Reference is descriptive)

+## Overlay — AKG-M5 L2-D2 local OA cutover + CORR-02 + R24 (LOCAL DELIVERY CANDIDATE — 2026-10-24)
+
+| Item | Status |
+|---|---|
+| Epistemic | **LOCAL DELIVERY CANDIDATE** on `feat/akg-m5-l2-d2-local-oa-cutover` @ dirty tip over base `1a380f22…` — **NOT CURRENT ON MAIN** · **NOT ACTIVATED** |
+| G-DELIVERY / CORR-02 | Consumed at tested scope ; Critical Review PASS WITH GOVERNED RESERVES (handoff `ceb0a69d` / blob `bb749527`) |
+| G-PRR (this cycle) | **DOCUMENTARY AUTHORING GRANTED** — R24 semantic sync of README/03–09 · Product code **unchanged by R24** · digests **not** rewritten (manifest outside allowlist) |
+| G-GIT | **OPEN** — no project commit/push/PR/merge |
+| G-ACTIVATION | **OPEN** — exclusive default OFF ; no Studio live ; no definitive App Support DBs |
+| DET proof | **31 PASS / 7 suites** (freeze / injected / confirmation UI / D4 / O-01 / D5 / M1) |
+| O-01 « comprendre » | LPS objective → Product UI **BEHAVIOR PROVEN AT TESTED SCOPE (DET)** on disposable SQLite — **≠** LIVE E2E |
+| Q15 global | **PARTIAL** — CORR-02 conversational impacts targeted only |
+| Residual writer | Raw `DatabaseSync` outside D1 applicative APIs — **KNOWN GAP** |
+| `R-L2D2-SQLITE-SNAPSHOT` | Coherent SQLite snapshot/restore for Truth C (+ Memory B) **NOT PROVEN** — must be qualified before G-ACTIVATION (see vol 06) · naive file copy **≠** validated backup |
+| R-CUT / routes live | **NOT PROVEN** |
+| P6 GLOBAL PASS | **NOT CLAIMED** |
+| Runtime v3 | **NON ADOPTED** |
+| Temporary debt exit | Digests sync (this Cycle 13 G-MANIFEST) → ChatGPT Critical Review → G-GIT decision on **cumulative** Delivery → post-merge → **separate** G-ACTIVATION (+ snapshot debt exit) for local exclusive cutover |
+
 ## Overlay — AKG-M5 L2-D1 O-01 + D5 (CURRENT ON MAIN — PR #612 post-merge verified 2026-10-24)

 | Item | Status |
 |---|---|
-| GO | L2-D1 local Delivery + CORR-01 + Git Integration + merge **consumed** at their bounded scopes ; **PR #612 MERGED ON MAIN** ; no GO L2-D2 |
+| GO | L2-D1 local Delivery + CORR-01 + Git Integration + merge **consumed** at their bounded scopes ; **PR #612 MERGED ON MAIN** ; at merge time L2-D2 was not yet authorized (see L2-D2 candidate overlay above for later local Delivery) |
 | Branch | **HISTORICAL source:** `feat/akg-m5-l2-d1-product-o01-audit` @ base `d6230177…` ; **CURRENT main:** `b792bc83e1fbe3ee2f630d2637c137ee246bf07a` (PR #612 merge) |
 | Lifecycle note | Local Delivery / CORR-01 / Draft PR = **HISTORICAL stages** ; [PR #612](https://github.com/mcleland147/sfia-workspace/pull/612) **MERGED** ; [post-merge CI #40082088441](https://github.com/mcleland147/sfia-workspace/actions/runs/40082088441) **SUCCESS** ; Product capability is CURRENT on main only at its proven scope |
 | D5 | Success create audit **inside** Product UnitOfWork · Studio composition defaults `SqliteProjectAuditJournal` |
 | Q5.1–Q5.7 | DETERMINISTIC PROVEN AT TESTED SCOPE (`l2d1D5CreateAuditAtomicity.test.ts`) |
-| O-01 | Create/list/get/resume OA paths reused — no parallel engine · no D1 cutover · « comprendre » E2E Product→UI = **KNOWN GAP** |
-| L2-D2 | **NOT AUTHORIZED** |
+| O-01 (at L2-D1 merge) | Create/list/get/resume OA paths reused — no parallel engine · no D1 cutover · integrated « comprendre » Product→UI was **KNOWN GAP** then |
+| L2-D2 (at L2-D1 merge) | Was **NOT AUTHORIZED** — superseded as *authorization status* by later L2-D2 local Delivery candidate (still **not** on main / not activated) |
 | H4 / R-CUT | **OPEN / NOT PROVEN** (unchanged) |
 | REAL / P6 / v3 | REAL **NOT PROVEN** · P6 GLOBAL **NOT PASSED** · runtime v3 **NON ADOPTED** |

@@ -27,10 +46,10 @@
 | CR-D1-02 / Q5.3 | Success `oa.project.created` append observed with `DatabaseSync.isTransaction === true` (node:sqlite) |
 | CR-D1-01 / Q5.4 | Contractual audit failure → rollback (no Project/LPS/idem/success) → clean retry → single durable create → idempotent reuse |
 | Product source | **UNCHANGED** vs L2-D1 Delivery (Option A conserved) |
-| O-01 « comprendre » | Surfaces Product COVERAGE VERIFIED; UI mocks presentation BEHAVIOR AT TESTED SCOPE; **integrated durable Product→UI comprehend** = **KNOWN GAP** (governed) |
+| O-01 « comprendre » (CORR-01 epoch) | Surfaces Product COVERAGE VERIFIED; UI mocks presentation BEHAVIOR AT TESTED SCOPE; integrated durable Product→UI comprehend was **KNOWN GAP** then — see L2-D2 candidate overlay for later DET objective→UI proof |
 | Additional product semantic impact | **NONE** beyond L2-D1 initial R24 |
-| Lifecycle | **CURRENT ON MAIN after PR #612 MERGED / CI SUCCESS** ; historical CORR-01 proven at deterministic tested scope, not O-01 E2E COMPLETE |
-| L2-D2 | **NOT AUTHORIZED** |
+| Lifecycle | **CURRENT ON MAIN after PR #612 MERGED / CI SUCCESS** ; historical CORR-01 proven at deterministic tested scope, not O-01 LIVE E2E COMPLETE |
+| L2-D2 (CORR-01 epoch) | **NOT AUTHORIZED** then — later local Delivery candidate exists (not on main) |

 ## Overlay — AKG-M5 L1/A09 audit-port decoupling (local Delivery 2026-10-23)

```

**Product code this cycle:** **UNCHANGED**.

---

## 10. Manifest avant / après

- `schemaVersion` / `kind` / `canonicalReadme` / structure / IDs / paths : **préservés**
- `lastReviewedCommit` : **non inventé** (reste `928ab15b…` historique — branche dirty)
- **Uniquement** champs `sha256_16` mis à jour (9 entrées)

### Diff manifest

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 1f7897cd..a4590353 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -7,7 +7,7 @@
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "00bd5a869be87d20"
+      "sha256_16": "9f4f725a6e74292e"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -19,31 +19,31 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "f0ec94936c4d8572"
+      "sha256_16": "aa0ecb788594ba28"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "e561093e584e0dc6"
+      "sha256_16": "c387e30afaf6c9f4"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
-      "sha256_16": "9883dc02a7856cf9"
+      "sha256_16": "f842eb604a111d86"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "14d06a6e0492f23c"
+      "sha256_16": "c09beba0eac9e1d5"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "f19dd23a99dc896a"
+      "sha256_16": "87023ecee1e04ab5"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "b5589e7ce97e6595"
+      "sha256_16": "708e2b7512ec293f"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "0306ff8900fdbb7f"
+      "sha256_16": "dfdc6a605bec1820"
     }
   ],
   "components": [
@@ -713,7 +713,7 @@
     },
     {
       "path": "projects/sfia-studio/app/.env.example",
-      "sha256_16": "c14369cbe6ac4f42"
+      "sha256_16": "c32542c141934455"
     }
   ],
   "trackedTests": [
```

---

## 11. Liste des 9 digests synchronisés

| List | File | Before | After | Classification |
|---|---|---|---|---|
| volume | `03-end-to-end-flow-catalog.md` | `f0ec94936c4d8572` | `aa0ecb788594ba28` | R24 semantic sync |
| volume | `04-dependency-impact-map.md` | `e561093e584e0dc6` | `c387e30afaf6c9f4` | R24 + Cycle13 final corrections |
| volume | `05-environments-configuration-and-boundaries.md` | `9883dc02a7856cf9` | `f842eb604a111d86` | R24 + Cycle13 final corrections |
| volume | `06-persistence-restart-and-recovery.md` | `14d06a6e0492f23c` | `c09beba0eac9e1d5` | R24 + Cycle13 final corrections |
| volume | `07-authority-invariants-and-failure-modes.md` | `f19dd23a99dc896a` | `87023ecee1e04ab5` | R24 semantic sync |
| volume | `08-test-proof-and-conformance-map.md` | `b5589e7ce97e6595` | `708e2b7512ec293f` | R24 semantic sync |
| volume | `09-known-gaps-reserves-and-current-boundaries.md` | `0306ff8900fdbb7f` | `dfdc6a605bec1820` | R24 + Cycle13 final corrections |
| volume | `README.md` | `00bd5a869be87d20` | `9f4f725a6e74292e` | R24 semantic sync |
| trackedSource | `.env.example` | `c14369cbe6ac4f42` | `c32542c141934455` | L2-D2 Delivery (.env.example) |

**UNKNOWN drifts :** 0 (inventaire pré-write). **trackedTests :** 0 changements.

---

## 12. Dérives supplémentaires

Aucune. Pré-write inventory : TOTAL_DRIFTS=9 · UNKNOWN_DRIFTS=0 · puis `--write-digests` · post-write checker PASS.

---

## 13. Cumulative changed files

### Porcelain actuel

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/.env.example
 M projects/sfia-studio/app/app/nouvelle-demande/page.tsx
 M projects/sfia-studio/app/app/projects/[id]/page.tsx
 M projects/sfia-studio/app/app/projects/new/page.tsx
 M projects/sfia-studio/app/app/workspace/page.tsx
 M projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts
 M projects/sfia-studio/app/lib/d1/commands.ts
 M projects/sfia-studio/app/lib/d1/confirmation/actions.ts
 M projects/sfia-studio/app/lib/d1/confirmation/executeConfirmation.ts
 M projects/sfia-studio/app/lib/d1/context/buildSnapshot.ts
 M projects/sfia-studio/app/lib/d1/db.ts
 M projects/sfia-studio/app/lib/d1/errors.ts
 M projects/sfia-studio/app/lib/d1/index.ts
 M projects/sfia-studio/app/lib/d1/repository.ts
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
 M projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
 M projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
 M projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/README.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/d1/l2d2ConfirmationForbiddenUi.test.tsx
?? projects/sfia-studio/app/__tests__/d1/l2d2D4LegacyNavigation.test.ts
?? projects/sfia-studio/app/__tests__/d1/l2d2InjectedConnectionWriterGuards.test.ts
?? projects/sfia-studio/app/__tests__/d1/l2d2LocalOaExclusiveFreeze.test.ts
?? projects/sfia-studio/app/__tests__/oa/project/l2d2O01ProductUiIntegrated.test.tsx
?? projects/sfia-studio/app/lib/d1/legacyNavigation.ts
?? projects/sfia-studio/app/lib/d1/localOaExclusiveMode.store.ts
?? projects/sfia-studio/app/lib/d1/localOaExclusiveMode.test-only.ts
?? projects/sfia-studio/app/lib/d1/localOaExclusiveMode.ts
```

### Cumul logique pour future PR unique

**Product / D1 (Delivery + CORR-02):**
- `lib/d1/localOaExclusiveMode*.ts`, `legacyNavigation.ts`, `db.ts`, `commands.ts`, `repository.ts`, `boundedAtomicAudit.ts`, `confirmation/actions.ts`, `executeConfirmation.ts`, `errors.ts`, `index.ts`, `context/buildSnapshot.ts`
- pages : `workspace`, `projects/new`, `nouvelle-demande`, `projects/[id]`
- `.env.example`
- tests : freeze, injected, confirmation UI, D4, O-01 (+ Delivery untracked)

**PRR (R24 + C13):**
- README, 03–09, `production-runtime-reference.manifest.json`

**Hors PR projet :** `.tmp-sfia-review/chatgpt-review.md` (local only)

---

## 14. Couverture tests

Suites : freeze / injected / confirmation UI / D4 / O-01 / D5 / M1.

CORR-02 historical : 31 PASS / 7. **Ce cycle re-exécuté : 31 PASS / 7.**

---

## 15. Validations réellement exécutées

| Commande | Résultat |
|---|---|
| `git diff --check` | PASS |
| `npm run typecheck` | PASS |
| vitest L2-D2/CORR-02 batch (7 files) | **31 PASS** |
| `node scripts/check-production-runtime-reference.mjs` (pre) | FAIL expected (9 drifts) |
| inventory UNKNOWN | **0** |
| `--write-digests` | OK — 9 sha256_16 only |
| checker (post) | **CONFORMANCE OK** |
| `productionRuntimeReference.conformance.d0.test.ts` | **5 PASS** |
| Studio server / activation / P6 DB | **not run / not touched** |

### Checker post

```
OK: canonical README exists
RESULT: PRODUCTION RUNTIME REFERENCE CONFORMANCE OK
```

### Conformance

```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-local-oa-cutover/projects/sfia-studio/app

 ✓ __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts (5 tests) 62ms

 Test Files  1 passed (1)
      Tests  5 passed (5)
   Start at  19:28:45
   Duration  3.16s (transform 538ms, setup 801ms, collect 120ms, tests 62ms, environment 1ms, prepare 943ms)

```

### Tests batch

```
   ✓ L2-D1 D5 CreateProject audit atomicity > Q5.1 — create success + durable oa.project.created  383ms
stdout | __tests__/oa/project/l2d2O01ProductUiIntegrated.test.tsx > L2-D2 O-01 Product→UI integrated (Q-O01 / Q9) > create → SQLite durable → list UI → workspace UI → reopen + no D1 write
{"event":"d1.project_create","ts":"2026-10-24T17:29:24.292Z","status":"failed","durationMs":0,"errorCode":"FORBIDDEN"}

 ✓ __tests__/oa/project/l2d2O01ProductUiIntegrated.test.tsx (1 test) 604ms
   ✓ L2-D2 O-01 Product→UI integrated (Q-O01 / Q9) > create → SQLite durable → list UI → workspace UI → reopen + no D1 write  601ms

 Test Files  7 passed (7)
      Tests  31 passed (31)
   Start at  19:28:50
   Duration  33.94s (transform 24.80s, setup 4.62s, collect 54.01s, tests 5.09s, environment 7.62s, prepare 4.40s)

```

---

## 16. PRR checker / conformance

**PASS** after digest sync. Digest match = local file equality — **≠** cutover validity · **≠** CURRENT ON MAIN promotion.

---

## 17. Fake / Real qualification

| Preuve | Classe |
|---|---|
| Freeze / D4 / CORR-02 / O-01 objective UI | DETERMINISTIC AT TESTED SCOPE |
| PRR digests | DETERMINISTIC CONFORMANCE (local tree) |
| Studio live / R-CUT / App Support | NOT PROVEN / NOT AUTHORIZED |
| P6 GLOBAL / REAL BOUNDARY / v3 | NOT CLAIMED |

---

## 18. Dette / exit / R-CUT

| Debt | Status | Exit |
|---|---|---|
| `R-L2D2-SQLITE-SNAPSHOT` | OPEN | Qualify+prove coherent snapshot before G-ACTIVATION |
| Raw DatabaseSync | KNOWN GAP | Declare boundary ; no claim of total control |
| Q15 global | PARTIAL | Separate campaign if required |
| R-CUT live | NOT PROVEN | After G-ACTIVATION under distinct GO |
| Digests on main | PENDING G-GIT | Merge + post-merge CI |

---

## 19. Réserves

- Delivery dirty not integrated.
- Exclusive OFF on main / not activated.
- Snapshot procedure not proven.
- Q15 global PARTIAL.
- No project commit this cycle.

---

## 20. PR Readiness Decision Pack

### A. Synthèse cumulée

Local OA-exclusive cutover **readiness** : D1 freeze (open+mutation/CORR-02), D4 legacy nav Option A, O-01 Product→UI with LPS objective, PRR sync + digest conformance — all **LOCAL CANDIDATE** on dirty branch over main `1a380f22`.

### B. Fichiers / impacts

See §13. Single future PR should include Product+tests+PRR+manifest.

### C. Preuves

Code dirty · 31 DET tests · PRR overlays · manifest 9 digests · checker+conformance PASS.

### D. Risks / reserves

Residual raw SQLite · snapshot debt · activation mis-arm if GO skipped · Q15 PARTIAL.

### E. DET vs LIVE

DET only. LIVE / cutover / Studio active **NOT PROVEN**.

### F. Chemin critique restant

Critical Review C13 → Morris **G-GIT** → commit/push/PR/merge → post-merge CI → **G-ACTIVATION** (+ snapshot exit) → R-CUT live proof.

### G. Dette et exit

§18.

### H. Titres PR candidats

1. `AKG-M5 L2-D2 — Local OA-Exclusive Cutover Readiness, D1 Freeze, D4, O-01 and PRR Alignment`
2. `AKG-M5 L2-D2: OA-exclusive D1 freeze + D4 nav + O-01 UI proof + PRR/manifest sync`

### I. Proposition de description PR (draft — NOT CREATED)

```markdown
## Summary
- Local OA-exclusive marker (default OFF) fail-closes D1 open + guarded mutative APIs (CORR-02 injected connections).
- D4 Option A: generic legacy → /studio; deep links notFound; no proj→prj mapping.
- Confirmation FORBIDDEN surfaces ok:false (no false UI success).
- O-01 DET: durable LPS objective → Product list/workspace UI.
- PRR R24 + Cycle13 corrections (trim predicate; SQLite snapshot debt) + justified digest sync.

## Test plan
- [ ] vitest L2-D2/CORR-02 batch (31)
- [ ] productionRuntimeReference.conformance
- [ ] check-production-runtime-reference.mjs
- [ ] typecheck
- [ ] Confirm exclusive remains OFF on merge (no activation)
- [ ] Confirm no P6/historical DB touch

## Explicit non-claims
Not activated · not cutover proven · not runtime v3 · not P6 GLOBAL PASS.
```

### J. Validations CI futures

Studio required gates + PRR conformance + typecheck + targeted vitest paths above.

### K. Impacts future intégration

Main gains inactive-by-default exclusive path + docs. Behavior change only if env set to trimmed `"1"` under separate activation GO.

### L. Next steps post-merge / activation

Post-merge verify → Decision Pack activation → snapshot debt exit → arm exclusive on designated instance → R-CUT live — **distinct Morris GOs**.

**PR Readiness technical verdict:** READY FOR **G-GIT DECISION** (not granted).

---

## 21. Statut G-GIT / G-ACTIVATION

| Gate | État |
|---|---|
| G-MANIFEST (this cycle) | **CONSUMED** (9 digests) |
| G-PRR content | Corrections applied — Critical Review C13 required |
| G-GIT | **OPEN** |
| G-ACTIVATION | **OPEN** |

---

## 22. Verdict

**AKG-M5 L2-D2 CUMULATIVE PR READINESS — TECHNICALLY READY FOR G-GIT DECISION — PRODUCT + PRR + MANIFEST COHERENT — CONFORMANCE PASS — CRITICAL REVIEW REQUIRED — NO PROJECT COMMIT/PUSH/PR/MERGE — ACTIVATION NOT AUTHORIZED.**

Ne pas déclarer : G-GIT GRANTED · PR MERGED · CUTOVER PROVEN · STUDIO LIVE VALIDATED · PRODUCT COMPLETION COMPLETE · P6 GLOBAL PASS · REAL BOUNDARY PROVEN · STUDIO V3 RUNTIME ADOPTED.

---

## 23. Instruction ChatGPT

1. Critical Review Cycle 13 cumulatif (R24-01/02, digests, manifest, Product, tests, PR Readiness).
2. Vérifier trim semantics + snapshot debt honesty.
3. Confirmer 9 digests only / no structure change.
4. Statuer G-GIT recommendation **sans** engager commit/push/PR/merge.
5. Conserver G-ACTIVATION distinct + `R-L2D2-SQLITE-SNAPSHOT` exit.

Handoffs immuables antérieurs : Delivery ; CORR-REVIEW-01 `828e9197` ; CORR-02 `ceb0a69d` ; R24 `85f15081`.

FIN DU PACK CYCLE 13.
