# SFIA Studio — AKG-M5 / L2-D2 Cycle 8 — R24 PRR SEMANTIC SYNCHRONIZATION

**Profile:** CRITICAL
**Typologie:** DOC / R24 SEMANTIC SYNC
**Date/heure locale:** 2026-10-24 19:12 CEST
**Auteur rapport:** Cursor (Composer)
**GO / Autorité:** **G-PRR DOCUMENTARY AUTHORING GRANTED** (Morris) — R24 PRR SYNCHRONIZATION ONLY. **G-GIT OPEN. G-ACTIVATION OPEN.**

---

## 0. Verdict Cursor

**AKG-M5 L2-D2 R24 PRR SEMANTIC SYNC**
— LOCAL AUTHORING COMPLETE
— PRR CONTENT REVIEW REQUIRED
— PRODUCT CODE UNCHANGED
— G-GIT OPEN
— G-ACTIVATION OPEN
— HANDOFF REMOTE VERIFIED *(après publication L3)*

Instruction ChatGPT : Critical Review cohérence code/PRR, exactitude des statuts candidate vs CURRENT ON MAIN, preuves DET, digests REFERENCE REVIEW REQUIRED, préparation G-GIT sans activation.

---

## 01. GO Morris

Autorisé uniquement :
- synchroniser PRR (allowlist README + vols 03–09) avec L2-D2 + CORR-02 ;
- validations conformité ;
- Review Pack FULL + handoff L3.

**Non autorisé :** Product mutation ; digest/manifest edit ; commit/push/PR projet ; activation Studio ; DB historiques / définitives.

---

## 02. Git Truth

| Check | Résultat |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-local-oa-cutover` |
| Branch | `feat/akg-m5-l2-d2-local-oa-cutover` |
| HEAD | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` |
| origin/main | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` |
| Delivery+CORR-02 dirty | **préservé** (non reset) |
| Handoff tip entrée | `ceb0a69db87fcf443cf08525cb6d99ec44c1e8fd` / blob `bb74952741e117dfbcbe5da198d1987beb3907e6` |
| P6 dirty | ~11 — non altéré |
| Staged | vide |

Git Truth : **PASS**.

---

## 03. Convergence Pre-check

Build Doctrine VALIDATED · Roadmap ACTIVE · C1 VALIDATED · L2-D1 MERGED · L2-D2 Readiness ACCEPTED · Delivery IMPLEMENTED LOCALLY · CORR-02 Critical Review PASS WITH GOVERNED RESERVES · Runtime v3 NON ADOPTED · D1 FREEZE gated RETIRE LATER · H4 local no migration · R-CUT NOT PROVEN.

Ce cycle = documentation candidate de cette trajectoire. Aucune architecture parallèle.

---

## 04. Sources

Processus v2.6 templates/routing/guardrails/operating model · CKC 08 · Convergence · Product Completion · M4/M5 · Framings 30/32/34/37 · PRR README + 03–09 · code/tests dirty Delivery+CORR-02 · handoffs CORR-REVIEW-01 + CORR-02.

Règle : Git + code + preuves > PRR.

---

## 05. R23 (architecture applicable)

| Volume | Objet | Source primaire | Delta | Preuve | Trajectoire | Statut |
|---|---|---|---|---|---|---|
| README | Overlay L2-D2 identity/gates | handoff CORR-02 + Git | overlay borné | DOCUMENTED | O-01 local exclusive | LOCAL CANDIDATE |
| 03 | F01 OA create ; F20 D4/confirm | code routes + actions | overlays | DET suites | Product vs D1 | LOCAL CANDIDATE |
| 04 | deps marker/open/mutation/D4 | repository/audit/db/nav | overlay edges | DET injected/freeze | freeze writers | LOCAL CANDIDATE |
| 05 | env exclusive + absolute DB paths | `.env.example` + mode ts | inventory + overlay | DOCUMENTED | future G-ACTIVATION | LOCAL CANDIDATE env semantics |
| 06 | Truth C / Memory B / D1 freeze | persistence + CORR-02 | overlay | DET | no dual-write | LOCAL CANDIDATE + KNOWN GAP raw SQLite |
| 07 | candidate INVs | actions/UI/nav | candidate table **≠ CURRENT** | DET | fail-closed exclusive | LOCAL CANDIDATE |
| 08 | proof map 31/7 | CORR-02 handoff | overlay + rows | COVERAGE VERIFIED / BEHAVIOR DET | Q15 PARTIAL | LOCAL CANDIDATE proofs |
| 09 | gaps/gates/exit | GO matrix | top overlay | DOCUMENTED | G-GIT then G-ACTIVATION | LOCAL CANDIDATE |

---

## 06. Inventaire fichiers

### Dirty complet (Delivery + CORR-02 + R24)

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

### Delta R24 uniquement (allowlist)

```
M projects/sfia-studio/production-runtime-reference/README.md
M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
M projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
M projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
```

**8 files changed, +140 / −11** (PRR only).

**Product code this cycle:** **UNCHANGED** (Delivery/CORR-02 dirty inchangé ; aucune nouvelle mutation Product R24).

**Manifest / digests:** **non modifiés** (hors allowlist GO) → digests drift attendu.

---

## 07–08. Contenu des sections PRR créées/modifiées + diff

### README — overlay L2-D2

```markdown
**AKG-M5 L2-D2 local OA Fresh Start cutover — LOCAL DELIVERY CANDIDATE + R24 PRR authoring (2026-10-24):**

| Epistemic class | Element |
|---|---|
| **LOCAL DELIVERY CANDIDATE** | Worktree `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-local-oa-cutover` · branch `feat/akg-m5-l2-d2-local-oa-cutover` · HEAD base `1a380f22c2ee9c63c525213e01de4bca14dff9ca` (= `origin/main`) · Product code **dirty / uncommitted / not on main** |
| **G-DELIVERY** | Consumed — L2-D2 freeze D1 / D4 legacy nav / O-01 DET implemented locally at tested scope |
| **CORR-02** | Critical Review PASS WITH GOVERNED RESERVES (handoff `ceb0a69db87fcf443cf08525cb6d99ec44c1e8fd` / blob `bb74952741e117dfbcbe5da198d1987beb3907e6`) — confirmation `ok:false`+FORBIDDEN ; injected writer guards ; O-01 LPS objective→UI |
| **R24 this cycle** | **G-PRR DOCUMENTARY AUTHORING GRANTED** — semantic sync of vols README/03–09 only ; **≠** Product mutation ; **≠** digest write (manifest not in allowlist) |
| **DETERMINISTIC PROVEN** | 31 tests / 7 suites at CORR-02 tested scope (freeze / injected / confirmation UI / D4 / O-01 / D5 / M1) |
| **NOT CURRENT ON MAIN** | New D1 exclusive guards, D4 redirects, confirmation FORBIDDEN contract — **inactive on integrated runtime** until G-GIT + merge |
| **G-GIT** | **OPEN** — no project commit/push/PR/merge |
| **G-ACTIVATION** | **OPEN** — `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` default OFF ; no Studio live cutover |
| **Runtime v3** | **NON ADOPTED** |
| **Anti-claims** | OA-exclusive **not** ADOPTED · CUTOVER **not** PROVEN · STUDIO LIVE **not** VALIDATED · P6 GLOBAL PASS **not** claimed · DET ≠ LIVE |

Volumes touched by this R24 overlay: README · 03 · 04 · 05 · 06 · 07 · 08 · 09. Digest refresh deferred until ChatGPT semantic accept + distinct digest authorization (manifest path protected / not edited here).

```

### Volume 03 — F01 note + F20 D4/confirm overlay

```markdown
## F01 — Project creation / greenfield
- **Trigger:** Studio create project
- **Steps:** LocalProjectComposition → oa_projects/LPS → optional trajectory bootstrap
- **Paths:** `vertical-slice-runtime/service.ts`, project create use cases
- **Status:** COMPLETE (deterministic); greenfield continuity corrections on main (#531)
- **Overlay — AKG-M5 L2-D2 LOCAL DELIVERY CANDIDATE (≠ CURRENT ON MAIN):** Product create remains OA Truth C (`prj:*` / `oa_*`). Under local exclusive marker (future G-ACTIVATION only), D1 create/confirm paths fail-closed — **no dual-write**, **no** `proj-*`→`prj:*` mapping. O-01 DET proves create → durable LPS objective → list/workspace UI (« comprendre ») on disposable SQLite. **≠** live Studio activation.

## F02 — Project load / restart

### Overlay — AKG-M5 L2-D2 D4 + D1 confirmation (LOCAL DELIVERY CANDIDATE — 2026-10-24)

| Flow | Candidate behavior (dirty Delivery + CORR-02) | Status class |
|---|---|---|
| **D4 Option A — generic legacy routes** | `/workspace`, `/projects/new`, `/nouvelle-demande` → redirect `/studio` when exclusive ON | LOCAL CANDIDATE · DET proven (`l2d2D4LegacyNavigation`) · **≠** live Studio |
| **D4 — legacy deep links** | `/projects/[id]` (D1-shaped) → `notFound()` when exclusive ON — **no** `proj-*`→`prj:*` rewrite | same |
| **D4 — exclusive OFF** | helpers no-op — historical D1 routes unchanged | CURRENT ON MAIN behavior preserved until activation |
| **D1 confirmation CREATE** | Exclusive ON: `executeConfirmedMutation` → `FAILED`+`FORBIDDEN` ; **CORR-02:** `actionExecuteConfirmation` → **`ok:false` / `FORBIDDEN`** (not `ok:true`+FAILED) | LOCAL CANDIDATE · DET (`l2d2LocalOaExclusiveFreeze` + `l2d2ConfirmationForbiddenUi`) |
| **Confirmation UI** | `ConfirmationPanel` already bails on `!res.ok` — **no `onDone`** → Intake does not enter confirmed success | BEHAVIOR PROVEN AT TESTED SCOPE (unit) |
| **Product vs D1** | Target create/find/comprehend/resume = OA Product UI (`/studio/...`) ; D1 Intake/confirm = historical freeze-gated surface | D1 FREEZE gated · RETIRE LATER |

**Anti-claims:** exclusive mode **not** active on main · cutover **not** proven · routes live **not** proven.

```

### Volume 04 — dependency overlay

```markdown
### Overlay — AKG-M5 L2-D2 local OA-exclusive D1 freeze + D4 (LOCAL DELIVERY CANDIDATE — 2026-10-24)

**Epistemic:** dirty branch `feat/akg-m5-l2-d2-local-oa-cutover` @ base `1a380f22…` — **NOT CURRENT ON MAIN**. Default exclusive OFF preserves historical D1. Activation = distinct G-ACTIVATION.

| Edge / surface | From | To | Candidate change |
|---|---|---|---|
| Marker | `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` | `localOaExclusiveMode.ts` | Exactly `"1"` arms fail-closed ; default OFF |
| Open guard | callers of `openD1Db` | `assertD1AccessAllowedWhenLocalOaExclusive` | Before path resolve / open / DDL |
| Mutative repo | `D1ProjectRepository.createProjectAtomic` / `selectMethodModeAtomic` | same assert | **CORR-02** — closes injected `DatabaseSync` bypass |
| Mutative audit | `BoundedAtomicAuditStore.append` / `clearForTests` | same assert | **CORR-02** |
| Commands | `createProject` / `selectMethodMode` / confirmation execute | repo + open guards | FORBIDDEN without D1 file create |
| Confirmation action | `actionExecuteConfirmation` | UI `ConfirmationPanel` | **CORR-02:** FAILED+FORBIDDEN → `ok:false` (no false success) |
| D4 routes | `app/workspace`, `projects/new`, `nouvelle-demande`, `projects/[id]` | `legacyNavigation.ts` | redirect `/studio` or `notFound` when exclusive ON |
| Indirect consumers | Intake / D1 pages / audit port injectors | above writers | Covered when they use guarded APIs |
| Residual | raw `DatabaseSync.exec/prepare` outside D1 APIs | — | **KNOWN GAP** — not controlled by applicative guards |

Manifest curated edges: **unchanged** (narrative / non-indexed dependency only). Dual-write Product↔D1: **none** as target architecture.

```

### Volume 05 — inventory rows + overlay

```markdown
| `SFIA_STUDIO_PRODUCT_DB_PATH` | Absolute product SQLite | optional | else `.sfia-exec/product/oa-product.sqlite` | Truth C · server-only · prefer absolute path for durable instance |
| `SFIA_STUDIO_NORA_SESSION_DB_PATH` | Absolute Nora session SQLite | optional | else cwd-relative `.sfia-exec/product/nora-session.sqlite` | Memory B · **≠ Truth C** · worktree-sensitive · prefer absolute per-instance |
| `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` | Local OA-exclusive cutover marker (L2-D2) | no — default **OFF** | Arms **only** when exactly `"1"` ; unset/`0` = historical D1 | Server-only · **not** global across worktrees · **G-ACTIVATION** required · LOCAL CANDIDATE code on dirty Delivery **≠** active on main |
| Activation value | Exactly `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE=1` (string `"1"` only) |
| Future instance paths | Absolute `SFIA_STUDIO_PRODUCT_DB_PATH` + `SFIA_STUDIO_NORA_SESSION_DB_PATH` for isolated Application Support–class locations (Option A design) |

## Overlay — AKG-M5 L2-D2 exclusive marker + Option A paths (LOCAL DELIVERY CANDIDATE — 2026-10-24)

| Rule | Detail |
|---|---|
| Activation value | Exactly `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE=1` (string `"1"` only) |
| Default | OFF / unset — preserves CURRENT ON MAIN D1 behavior |
| Binding | Server-only ; documented in `app/.env.example` ; **never** `NEXT_PUBLIC_*` |
| Future instance paths | Absolute `SFIA_STUDIO_PRODUCT_DB_PATH` + `SFIA_STUDIO_NORA_SESSION_DB_PATH` for isolated Application Support–class locations (Option A design) |
| Isolation | Do **not** set exclusive globally for all Git worktrees ; Fresh Start candidate remains a distinct preparation |
| This cycle | R24 documents the marker — **does not** set user `.env.local`, create definitive DBs, or start Studio |
| Anti-claims | Exclusive **not** ADOPTED · cutover **not** proven · configuration of this Delivery worktree **unchanged** for activation |
```

### Volume 06 — persistence overlay

```markdown
## Overlay — AKG-M5 L2-D2 OA / D1 persistence freeze (LOCAL DELIVERY CANDIDATE — 2026-10-24)

| Item | Candidate status |
|---|---|
| Product OA Truth C | KEEP — `oa-product.sqlite` / `SFIA_STUDIO_PRODUCT_DB_PATH` · Project + LPS |
| Nora Memory B | KEEP distinct — `nora-session.sqlite` / `SFIA_STUDIO_NORA_SESSION_DB_PATH` · **≠** Truth C |
| D1 historical | FREEZE gated when exclusive `"1"` · RETIRE LATER · **no** physical removal in L2-D2/CORR-02 |
| Freeze at open | `openD1Db` → assert **before** resolve / open / DDL |
| Freeze at mutation | **CORR-02:** `createProjectAtomic` / `selectMethodModeAtomic` / `BoundedAtomicAuditStore.append|clearForTests` assert before BEGIN/INSERT/UPDATE/DELETE |
| Dual-write Product↔D1 | **None** as target under exclusive |
| H4 local | No historical D1→OA migration in this Delivery |
| Backups | Coherent SQLite file copies remain the operational model for Truth C / Memory B when activated — **not** proven this cycle |
| Restart | DET reopen / singleton reset / M1 process durability proven at tested scope · **Studio live restart / R-CUT** = **NOT PROVEN** |
| Residual boundary | Raw `DatabaseSync` outside D1 applicative APIs **not** guarded — **KNOWN GAP** (declared CORR-02) |
| Proof | freeze + injected + O-01 + D5 + M1 suites — **DETERMINISTIC AT TESTED SCOPE** (31 PASS / 7 files per CORR-02 handoff) |
| Anti-claims | Exclusive **not** active on main · cutover **not** proven · App Support definitive DBs **not** created |

```

### Volume 07 — candidate invariants (not CURRENT)

```markdown
## Overlay — AKG-M5 L2-D2 candidate invariants (LOCAL DELIVERY CANDIDATE — NOT CURRENT ON MAIN)

Do **not** promote these to **CURRENT IMPLEMENTED** until G-GIT merge + post-merge verification. They describe dirty Delivery + CORR-02 behavior at DET scope.

| ID (candidate) | Statement | Source | Proof class |
|---|---|---|---|
| INV-L2D2-D1-REFUSED-EXCLUSIVE | When `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE=1`, D1 open + guarded mutative APIs refuse with `D1Error` `FORBIDDEN` | `localOaExclusiveMode.ts` / `db.ts` / `repository.ts` / `boundedAtomicAudit.ts` | BEHAVIOR PROVEN AT TESTED SCOPE |
| INV-L2D2-CONFIRM-FORBIDDEN-OK-FALSE | Confirmation `FAILED`+`FORBIDDEN` surfaces as `actionExecuteConfirmation` → `ok:false` / `code=FORBIDDEN` (not `ok:true`) | `confirmation/actions.ts` CORR-02 | BEHAVIOR PROVEN AT TESTED SCOPE |
| INV-L2D2-CONFIRM-NO-ONDONE-ON-REFUSAL | UI must not treat refused confirmation as success (`ConfirmationPanel` skips `onDone` on `!ok`) | `ConfirmationPanel.tsx` + `l2d2ConfirmationForbiddenUi` | BEHAVIOR PROVEN AT TESTED SCOPE |
| INV-L2D2-NO-MUTATION-VIA-GUARDED-APIS | No D1 write via guarded repository/audit APIs under exclusive (incl. pre-opened injected connection) | CORR-02 injected suite | BEHAVIOR PROVEN AT TESTED SCOPE |
| INV-L2D2-NO-PROJ-TO-PRJ-MAP | Legacy D1 deep links do not rewrite `proj-*` → `prj:*` | `legacyNavigation.ts` / D4 tests | BEHAVIOR PROVEN AT TESTED SCOPE |
| INV-REC-NE-HD / INV-MEMB-NE-TRUTHC | Unchanged CURRENT — Recommendation ≠ HD ; Memory B ≠ Truth C | existing catalog | CURRENT IMPLEMENTED (main) |

**Residual KNOWN GAP:** unguarded raw SQLite on a held `DatabaseSync` outside D1 APIs.

**Failure mode (candidate):** exclusive ON + D1 create/confirm → Pilot sees refusal ; Product OA create path remains the target continuity surface.

```

### Volume 08 — proof map + O-01 rows

```markdown
## Overlay — AKG-M5 L2-D2 proof map (LOCAL DELIVERY CANDIDATE — R24 2026-10-24)

| Suite file | What it proves | Class |
|---|---|---|
| `l2d2LocalOaExclusiveFreeze.test.ts` | Exclusive ON: open/create/methodMode/confirm refuse ; no D1 file ; OFF preserved ; CORR-02 `ok:false` | DET |
| `l2d2InjectedConnectionWriterGuards.test.ts` | Pre-opened injected DB cannot mutate via repo/audit APIs under exclusive | DET |
| `l2d2ConfirmationForbiddenUi.test.tsx` | Panel does not call `onDone` on `ok:false` FORBIDDEN | DET (jsdom) |
| `l2d2D4LegacyNavigation.test.ts` | Generic→`/studio` ; deep link→`notFound` ; OFF no-op ; no proj→prj map | DET |
| `l2d2O01ProductUiIntegrated.test.tsx` | OA create + LPS objective durable → Product list/workspace UI → reopen ; D1 probe blocked | DET (jsdom + real SqliteProductStore) |
| `l2d1D5CreateAuditAtomicity.test.ts` | D5 non-regression | DET (CURRENT ON MAIN capability) |
| `m1ProductSqliteDurability.test.ts` | Process/reopen durability non-regression | DET |

**Batch cited:** CORR-02 handoff `ceb0a69d` — **31 PASS / 7 files**. SQLite = `os.tmpdir()` only. **LIVE Studio / Application Support / R-CUT: NOT PROVEN.** Q15 conversational global: **PARTIAL** (CORR-02 targeted only).


| O-01 / D5 CreateProject audit (AKG-M5 L2-D1 CURRENT ON MAIN PR #612 + CORR-01) | `l2d1D5CreateAuditAtomicity.test.ts` (Q5.1–Q5.7) + M1 durability/restart suites | **DETERMINISTIC AT TESTED SCOPE** — success audit inside Product UnitOfWork; Studio composition Sqlite journal default; **CORR-01:** Q5.3 observes `DatabaseSync.isTransaction` during success append; Q5.4 covers audit-failure→rollback→clean retry→single create; PR #612 [post-merge CI #40082088441](https://github.com/mcleland147/sfia-workspace/actions/runs/40082088441) SUCCESS; at L2-D1 merge, integrated O-01 « comprendre » Product→UI was KNOWN GAP (addressed as **LOCAL CANDIDATE** under L2-D2 row below) · **≠** REAL |
| O-01 / L2-D2 local OA exclusive + D4 + CORR-02 (LOCAL DELIVERY CANDIDATE — **≠ CURRENT ON MAIN**) | `l2d2LocalOaExclusiveFreeze.test.ts` · `l2d2InjectedConnectionWriterGuards.test.ts` · `l2d2ConfirmationForbiddenUi.test.tsx` · `l2d2D4LegacyNavigation.test.ts` · `l2d2O01ProductUiIntegrated.test.tsx` (+ D5 + M1 non-regression in same CORR-02 batch) | **DETERMINISTIC AT TESTED SCOPE** — CORR-02 handoff reports **31 PASS / 7 suites** ; disposable SQLite only ; O-01 LPS **objective** → list `studio-projects-current` + workspace `project-subtitle` ; confirmation FORBIDDEN → `ok:false` ; injected writers guarded ; D4 redirect/notFound ; **≠** Studio live · **≠** cutover · Q15 global **PARTIAL** |
```

### Volume 09 — gaps overlay

```markdown
## Overlay — AKG-M5 L2-D2 local OA cutover + CORR-02 + R24 (LOCAL DELIVERY CANDIDATE — 2026-10-24)

| Item | Status |
|---|---|
| Epistemic | **LOCAL DELIVERY CANDIDATE** on `feat/akg-m5-l2-d2-local-oa-cutover` @ dirty tip over base `1a380f22…` — **NOT CURRENT ON MAIN** · **NOT ACTIVATED** |
| G-DELIVERY / CORR-02 | Consumed at tested scope ; Critical Review PASS WITH GOVERNED RESERVES (handoff `ceb0a69d` / blob `bb749527`) |
| G-PRR (this cycle) | **DOCUMENTARY AUTHORING GRANTED** — R24 semantic sync of README/03–09 · Product code **unchanged by R24** · digests **not** rewritten (manifest outside allowlist) |
| G-GIT | **OPEN** — no project commit/push/PR/merge |
| G-ACTIVATION | **OPEN** — exclusive default OFF ; no Studio live ; no definitive App Support DBs |
| DET proof | **31 PASS / 7 suites** (freeze / injected / confirmation UI / D4 / O-01 / D5 / M1) |
| O-01 « comprendre » | LPS objective → Product UI **BEHAVIOR PROVEN AT TESTED SCOPE (DET)** on disposable SQLite — **≠** LIVE E2E |
| Q15 global | **PARTIAL** — CORR-02 conversational impacts targeted only |
| Residual writer | Raw `DatabaseSync` outside D1 applicative APIs — **KNOWN GAP** |
| R-CUT / routes live | **NOT PROVEN** |
| P6 GLOBAL PASS | **NOT CLAIMED** |
| Runtime v3 | **NON ADOPTED** |
| Temporary debt exit | After ChatGPT PRR content review → digest refresh under distinct authorization → G-GIT PR readiness of **cumulative** Delivery (Product+PRR) → post-merge → **separate** G-ACTIVATION for local exclusive cutover |

```

### Diff exploitable (PRR only)

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 3dcefc30..d07dc70f 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -9,6 +9,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Steps:** LocalProjectComposition → oa_projects/LPS → optional trajectory bootstrap
 - **Paths:** `vertical-slice-runtime/service.ts`, project create use cases
 - **Status:** COMPLETE (deterministic); greenfield continuity corrections on main (#531)
+- **Overlay — AKG-M5 L2-D2 LOCAL DELIVERY CANDIDATE (≠ CURRENT ON MAIN):** Product create remains OA Truth C (`prj:*` / `oa_*`). Under local exclusive marker (future G-ACTIVATION only), D1 create/confirm paths fail-closed — **no dual-write**, **no** `proj-*`→`prj:*` mapping. O-01 DET proves create → durable LPS objective → list/workspace UI (« comprendre ») on disposable SQLite. **≠** live Studio activation.

 ## F02 — Project load / restart
 - **Trigger:** Open `/studio/projects/[id]`
@@ -198,6 +199,19 @@ Descriptive Product routing map for the same conversational front door. **Does n
 - **Parallel BC:** `lib/oa/execution-run/**` (memory-only; FinOps/T7 shadow consumer; not product EC→Attempt)
 - **Status:** ACTIVE compatibility / temporary keep — **no SAFE TO REMOVE proven** under SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (see vol 09)

+### Overlay — AKG-M5 L2-D2 D4 + D1 confirmation (LOCAL DELIVERY CANDIDATE — 2026-10-24)
+
+| Flow | Candidate behavior (dirty Delivery + CORR-02) | Status class |
+|---|---|---|
+| **D4 Option A — generic legacy routes** | `/workspace`, `/projects/new`, `/nouvelle-demande` → redirect `/studio` when exclusive ON | LOCAL CANDIDATE · DET proven (`l2d2D4LegacyNavigation`) · **≠** live Studio |
+| **D4 — legacy deep links** | `/projects/[id]` (D1-shaped) → `notFound()` when exclusive ON — **no** `proj-*`→`prj:*` rewrite | same |
+| **D4 — exclusive OFF** | helpers no-op — historical D1 routes unchanged | CURRENT ON MAIN behavior preserved until activation |
+| **D1 confirmation CREATE** | Exclusive ON: `executeConfirmedMutation` → `FAILED`+`FORBIDDEN` ; **CORR-02:** `actionExecuteConfirmation` → **`ok:false` / `FORBIDDEN`** (not `ok:true`+FAILED) | LOCAL CANDIDATE · DET (`l2d2LocalOaExclusiveFreeze` + `l2d2ConfirmationForbiddenUi`) |
+| **Confirmation UI** | `ConfirmationPanel` already bails on `!res.ok` — **no `onDone`** → Intake does not enter confirmed success | BEHAVIOR PROVEN AT TESTED SCOPE (unit) |
+| **Product vs D1** | Target create/find/comprehend/resume = OA Product UI (`/studio/...`) ; D1 Intake/confirm = historical freeze-gated surface | D1 FREEZE gated · RETIRE LATER |
+
+**Anti-claims:** exclusive mode **not** active on main · cutover **not** proven · routes live **not** proven.
+
 ## Generic Execution → Review → Result (CURRENT — Correction Pass 02 candidate)

 Nominal Product path (architecture D-ER; **CURRENT ON MAIN** at deterministic tested scope — prior “LOCAL CANDIDATE / NOT INTEGRATED ON MAIN” wording is **HISTORICAL** relative to Generic Execution / Tool-First / SHE merges on main; ≠ REAL · ≠ P6 GLOBAL PASS):
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index 77c62354..14c4c296 100644
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
+| Marker | `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` | `localOaExclusiveMode.ts` | Exactly `"1"` arms fail-closed ; default OFF |
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
index 8513b780..94da5380 100644
--- a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
@@ -15,8 +15,9 @@

 | Name | Purpose | Required | Default/notes | Boundaries |
 |---|---|---|---|---|
-| `SFIA_STUDIO_PRODUCT_DB_PATH` | Absolute product SQLite | optional | else `.sfia-exec/product/oa-product.sqlite` | Truth C |
-| `SFIA_STUDIO_NORA_SESSION_DB_PATH` | Absolute Nora session SQLite | optional | else cwd-relative `.sfia-exec/product/nora-session.sqlite` | Memory B; **worktree-sensitive** |
+| `SFIA_STUDIO_PRODUCT_DB_PATH` | Absolute product SQLite | optional | else `.sfia-exec/product/oa-product.sqlite` | Truth C · server-only · prefer absolute path for durable instance |
+| `SFIA_STUDIO_NORA_SESSION_DB_PATH` | Absolute Nora session SQLite | optional | else cwd-relative `.sfia-exec/product/nora-session.sqlite` | Memory B · **≠ Truth C** · worktree-sensitive · prefer absolute per-instance |
+| `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` | Local OA-exclusive cutover marker (L2-D2) | no — default **OFF** | Arms **only** when exactly `"1"` ; unset/`0` = historical D1 | Server-only · **not** global across worktrees · **G-ACTIVATION** required · LOCAL CANDIDATE code on dirty Delivery **≠** active on main |
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
+| Activation value | Exactly `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE=1` (string `"1"` only) |
+| Default | OFF / unset — preserves CURRENT ON MAIN D1 behavior |
+| Binding | Server-only ; documented in `app/.env.example` ; **never** `NEXT_PUBLIC_*` |
+| Future instance paths | Absolute `SFIA_STUDIO_PRODUCT_DB_PATH` + `SFIA_STUDIO_NORA_SESSION_DB_PATH` for isolated Application Support–class locations (Option A design) |
+| Isolation | Do **not** set exclusive globally for all Git worktrees ; Fresh Start candidate remains a distinct preparation |
+| This cycle | R24 documents the marker — **does not** set user `.env.local`, create definitive DBs, or start Studio |
+| Anti-claims | Exclusive **not** ADOPTED · cutover **not** proven · configuration of this Delivery worktree **unchanged** for activation |
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index 31dc9845..53ffaadc 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -94,7 +94,24 @@ Four situations must stay distinct (S2 / M-HD-01 HD11):
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
+| Backups | Coherent SQLite file copies remain the operational model for Truth C / Memory B when activated — **not** proven this cycle |
+| Restart | DET reopen / singleton reset / M1 process durability proven at tested scope · **Studio live restart / R-CUT** = **NOT PROVEN** |
+| Residual boundary | Raw `DatabaseSync` outside D1 applicative APIs **not** guarded — **KNOWN GAP** (declared CORR-02) |
+| Proof | freeze + injected + O-01 + D5 + M1 suites — **DETERMINISTIC AT TESTED SCOPE** (31 PASS / 7 files per CORR-02 handoff) |
+| Anti-claims | Exclusive **not** active on main · cutover **not** proven · App Support definitive DBs **not** created |

 ## Additional stores (harvest)

diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index aef82ade..8ce19a5a 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -103,6 +103,23 @@ sinon STOP · 0 Attempt

 ---

+## Overlay — AKG-M5 L2-D2 candidate invariants (LOCAL DELIVERY CANDIDATE — NOT CURRENT ON MAIN)
+
+Do **not** promote these to **CURRENT IMPLEMENTED** until G-GIT merge + post-merge verification. They describe dirty Delivery + CORR-02 behavior at DET scope.
+
+| ID (candidate) | Statement | Source | Proof class |
+|---|---|---|---|
+| INV-L2D2-D1-REFUSED-EXCLUSIVE | When `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE=1`, D1 open + guarded mutative APIs refuse with `D1Error` `FORBIDDEN` | `localOaExclusiveMode.ts` / `db.ts` / `repository.ts` / `boundedAtomicAudit.ts` | BEHAVIOR PROVEN AT TESTED SCOPE |
+| INV-L2D2-CONFIRM-FORBIDDEN-OK-FALSE | Confirmation `FAILED`+`FORBIDDEN` surfaces as `actionExecuteConfirmation` → `ok:false` / `code=FORBIDDEN` (not `ok:true`) | `confirmation/actions.ts` CORR-02 | BEHAVIOR PROVEN AT TESTED SCOPE |
+| INV-L2D2-CONFIRM-NO-ONDONE-ON-REFUSAL | UI must not treat refused confirmation as success (`ConfirmationPanel` skips `onDone` on `!ok`) | `ConfirmationPanel.tsx` + `l2d2ConfirmationForbiddenUi` | BEHAVIOR PROVEN AT TESTED SCOPE |
+| INV-L2D2-NO-MUTATION-VIA-GUARDED-APIS | No D1 write via guarded repository/audit APIs under exclusive (incl. pre-opened injected connection) | CORR-02 injected suite | BEHAVIOR PROVEN AT TESTED SCOPE |
+| INV-L2D2-NO-PROJ-TO-PRJ-MAP | Legacy D1 deep links do not rewrite `proj-*` → `prj:*` | `legacyNavigation.ts` / D4 tests | BEHAVIOR PROVEN AT TESTED SCOPE |
+| INV-REC-NE-HD / INV-MEMB-NE-TRUTHC | Unchanged CURRENT — Recommendation ≠ HD ; Memory B ≠ Truth C | existing catalog | CURRENT IMPLEMENTED (main) |
+
+**Residual KNOWN GAP:** unguarded raw SQLite on a held `DatabaseSync` outside D1 APIs.
+
+**Failure mode (candidate):** exclusive ON + D1 create/confirm → Pilot sees refusal ; Product OA create path remains the target continuity surface.
+
 ## Failure modes (selected) — CURRENT IMPLEMENTED

 | Code/State | Layer | Trigger | User effect | Mutations | Fail-closed |
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 686ba4ce..f9076138 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -9,11 +9,26 @@
 - E2E: Playwright `app/e2e/**` (often harness/boundary routes)
 - Conformance (this macro): `app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

+## Overlay — AKG-M5 L2-D2 proof map (LOCAL DELIVERY CANDIDATE — R24 2026-10-24)
+
+| Suite file | What it proves | Class |
+|---|---|---|
+| `l2d2LocalOaExclusiveFreeze.test.ts` | Exclusive ON: open/create/methodMode/confirm refuse ; no D1 file ; OFF preserved ; CORR-02 `ok:false` | DET |
+| `l2d2InjectedConnectionWriterGuards.test.ts` | Pre-opened injected DB cannot mutate via repo/audit APIs under exclusive | DET |
+| `l2d2ConfirmationForbiddenUi.test.tsx` | Panel does not call `onDone` on `ok:false` FORBIDDEN | DET (jsdom) |
+| `l2d2D4LegacyNavigation.test.ts` | Generic→`/studio` ; deep link→`notFound` ; OFF no-op ; no proj→prj map | DET |
+| `l2d2O01ProductUiIntegrated.test.tsx` | OA create + LPS objective durable → Product list/workspace UI → reopen ; D1 probe blocked | DET (jsdom + real SqliteProductStore) |
+| `l2d1D5CreateAuditAtomicity.test.ts` | D5 non-regression | DET (CURRENT ON MAIN capability) |
+| `m1ProductSqliteDurability.test.ts` | Process/reopen durability non-regression | DET |
+
+**Batch cited:** CORR-02 handoff `ceb0a69d` — **31 PASS / 7 files**. SQLite = `os.tmpdir()` only. **LIVE Studio / Application Support / R-CUT: NOT PROVEN.** Q15 conversational global: **PARTIAL** (CORR-02 targeted only).
+
 ## Flow → tests (selected)

 | Flow | Deterministic tests | Notes |
 |---|---|---|
-| O-01 / D5 CreateProject audit (AKG-M5 L2-D1 CURRENT ON MAIN PR #612 + CORR-01) | `l2d1D5CreateAuditAtomicity.test.ts` (Q5.1–Q5.7) + M1 durability/restart suites | **DETERMINISTIC AT TESTED SCOPE** — success audit inside Product UnitOfWork; Studio composition Sqlite journal default; **CORR-01:** Q5.3 observes `DatabaseSync.isTransaction` during success append; Q5.4 covers audit-failure→rollback→clean retry→single create; PR #612 [post-merge CI #40082088441](https://github.com/mcleland147/sfia-workspace/actions/runs/40082088441) SUCCESS; O-01 « comprendre » Product→UI integrated E2E = KNOWN GAP; **≠** L2-D2 · **≠** REAL |
+| O-01 / D5 CreateProject audit (AKG-M5 L2-D1 CURRENT ON MAIN PR #612 + CORR-01) | `l2d1D5CreateAuditAtomicity.test.ts` (Q5.1–Q5.7) + M1 durability/restart suites | **DETERMINISTIC AT TESTED SCOPE** — success audit inside Product UnitOfWork; Studio composition Sqlite journal default; **CORR-01:** Q5.3 observes `DatabaseSync.isTransaction` during success append; Q5.4 covers audit-failure→rollback→clean retry→single create; PR #612 [post-merge CI #40082088441](https://github.com/mcleland147/sfia-workspace/actions/runs/40082088441) SUCCESS; at L2-D1 merge, integrated O-01 « comprendre » Product→UI was KNOWN GAP (addressed as **LOCAL CANDIDATE** under L2-D2 row below) · **≠** REAL |
+| O-01 / L2-D2 local OA exclusive + D4 + CORR-02 (LOCAL DELIVERY CANDIDATE — **≠ CURRENT ON MAIN**) | `l2d2LocalOaExclusiveFreeze.test.ts` · `l2d2InjectedConnectionWriterGuards.test.ts` · `l2d2ConfirmationForbiddenUi.test.tsx` · `l2d2D4LegacyNavigation.test.ts` · `l2d2O01ProductUiIntegrated.test.tsx` (+ D5 + M1 non-regression in same CORR-02 batch) | **DETERMINISTIC AT TESTED SCOPE** — CORR-02 handoff reports **31 PASS / 7 suites** ; disposable SQLite only ; O-01 LPS **objective** → list `studio-projects-current` + workspace `project-subtitle` ; confirmation FORBIDDEN → `ok:false` ; injected writers guarded ; D4 redirect/notFound ; **≠** Studio live · **≠** cutover · Q15 global **PARTIAL** |
 | F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, **productCycleE2eStabilization.frontDoor**, fakeProvider materialization | **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** — oracle traverses Product UI server actions (Send→Decide→PrepareResolvedM3→ConfirmAndExecuteResolvedM3→Rehydrate) |
 | F05 optional documentary → Generic PREPARE (PR #586) | `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` (+ G-D4, Product Continuity, HQA-F01) | DETERMINISTIC — `no_require_artifact` routes to Generic PREPARE; Artifact obligation path preserved; exact caps; non-authoritative path candidates; Fake cue `__P6_OPTIONAL_DOCUMENTARY_MD__` ≠ OpenAI LIVE |
 | F04 Nora Generic PREPARE tool (D-ER-16) | `p6.der16.genericNoraToolInvocation.d0.test.ts` | DETERMINISTIC — solicit PREPARE only; structural fail-closed; no Attempt; PENDING_GIT_INTEGRATION |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 87edbab6..4048f49d 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,17 +5,35 @@
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
+| R-CUT / routes live | **NOT PROVEN** |
+| P6 GLOBAL PASS | **NOT CLAIMED** |
+| Runtime v3 | **NON ADOPTED** |
+| Temporary debt exit | After ChatGPT PRR content review → digest refresh under distinct authorization → G-GIT PR readiness of **cumulative** Delivery (Product+PRR) → post-merge → **separate** G-ACTIVATION for local exclusive cutover |
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

@@ -27,10 +45,10 @@
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

diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index 0ddd5661..07b05c74 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -31,6 +31,23 @@ Fake/DET remains the deterministic proof path for R1/R2 at tested scope. Determi

 **AKG-M0 methodological continuity overlay — historical preparation vs PR candidate:** **Historical snapshot (2026-10-19, étape 1 authoring):** README role/coverage/maintenance + R-S02 Tool-First CURRENT requalification + read-only vs Delivery proportion were authored locally; at that stage **manifest digests were not yet refreshed** (`REFERENCE REVIEW REQUIRED` then). **Later in the same AKG-M0 documentary lot (PR #591 candidate):** the README digest was synchronized into `production-runtime-reference.manifest.json` after semantic acceptance — digest match is a **deterministic conformance** fact of this candidate, **not** semantic exhaustiveness and **not** proof that AKG-M0 is ACTIVE ON MAIN. **Activation on main** remains contingent on merge + post-merge verification under distinct Morris gates. P6 GLOBAL PASS / runtime v3 ADOPTED / TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT closed / AKG-M0 ACTIVE ON MAIN **NOT CLAIMED**.

+**AKG-M5 L2-D2 local OA Fresh Start cutover — LOCAL DELIVERY CANDIDATE + R24 PRR authoring (2026-10-24):**
+
+| Epistemic class | Element |
+|---|---|
+| **LOCAL DELIVERY CANDIDATE** | Worktree `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-local-oa-cutover` · branch `feat/akg-m5-l2-d2-local-oa-cutover` · HEAD base `1a380f22c2ee9c63c525213e01de4bca14dff9ca` (= `origin/main`) · Product code **dirty / uncommitted / not on main** |
+| **G-DELIVERY** | Consumed — L2-D2 freeze D1 / D4 legacy nav / O-01 DET implemented locally at tested scope |
+| **CORR-02** | Critical Review PASS WITH GOVERNED RESERVES (handoff `ceb0a69db87fcf443cf08525cb6d99ec44c1e8fd` / blob `bb74952741e117dfbcbe5da198d1987beb3907e6`) — confirmation `ok:false`+FORBIDDEN ; injected writer guards ; O-01 LPS objective→UI |
+| **R24 this cycle** | **G-PRR DOCUMENTARY AUTHORING GRANTED** — semantic sync of vols README/03–09 only ; **≠** Product mutation ; **≠** digest write (manifest not in allowlist) |
+| **DETERMINISTIC PROVEN** | 31 tests / 7 suites at CORR-02 tested scope (freeze / injected / confirmation UI / D4 / O-01 / D5 / M1) |
+| **NOT CURRENT ON MAIN** | New D1 exclusive guards, D4 redirects, confirmation FORBIDDEN contract — **inactive on integrated runtime** until G-GIT + merge |
+| **G-GIT** | **OPEN** — no project commit/push/PR/merge |
+| **G-ACTIVATION** | **OPEN** — `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` default OFF ; no Studio live cutover |
+| **Runtime v3** | **NON ADOPTED** |
+| **Anti-claims** | OA-exclusive **not** ADOPTED · CUTOVER **not** PROVEN · STUDIO LIVE **not** VALIDATED · P6 GLOBAL PASS **not** claimed · DET ≠ LIVE |
+
+Volumes touched by this R24 overlay: README · 03 · 04 · 05 · 06 · 07 · 08 · 09. Digest refresh deferred until ChatGPT semantic accept + distinct digest authorization (manifest path protected / not edited here).
+
 ## What this corpus is

 This corpus describes **how SFIA Studio actually works now** in the checked-out Git tree:
```

---

## 09. Preuves et limites

| Classe | Contenu |
|---|---|
| CURRENT ON MAIN | L2-D1 D5 / OA create paths ; exclusive OFF = historical D1 |
| LOCAL DELIVERY CANDIDATE | Freeze / D4 / CORR-02 confirmation+writers / O-01 objective UI |
| DETERMINISTIC PROVEN | 31 PASS / 7 suites (CORR-02) — non re-exécutés ce cycle R24 |
| NOT PROVEN | Cutover live · Studio activation · R-CUT · routes live · P6 GLOBAL · runtime v3 |

---

## 10. Validations

| Check | Résultat |
|---|---|
| Allowlist only | **PASS** (8 fichiers) |
| Product unchanged (R24) | **PASS** |
| Candidate ≠ CURRENT wording | **PASS** (overlays explicites) |
| 31 tests referenced | **PASS** (vol 08/09/README) |
| `git diff --check` (PRR) | **PASS** |
| `check-production-runtime-reference.mjs` | **FAIL expected** — REFERENCE REVIEW REQUIRED (digest drift volumes + `.env.example` Delivery) |
| Conformance vitest | **1 failed / 4 passed** — digest match test (expected) |

### Checker output (réel)

```
OK: canonical README exists
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/README.md: manifest=00bd5a869be87d20 current=9f4f725a6e74292e ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md: manifest=f0ec94936c4d8572 current=aa0ecb788594ba28 ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md: manifest=e561093e584e0dc6 current=7da9514415827a0b ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md: manifest=9883dc02a7856cf9 current=7951897601b6e914 ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md: manifest=14d06a6e0492f23c current=91bd1db759d22b05 ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md: manifest=f19dd23a99dc896a current=87023ecee1e04ab5 ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md: manifest=b5589e7ce97e6595 current=708e2b7512ec293f ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md: manifest=0306ff8900fdbb7f current=9e087c95200b915d ⇒ REFERENCE REVIEW REQUIRED
FAIL: trackedSource digest drift for projects/sfia-studio/app/.env.example: manifest=c14369cbe6ac4f42 current=c32542c141934455 ⇒ REFERENCE REVIEW REQUIRED
RESULT: REFERENCE REVIEW REQUIRED / CONFORMANCE FAILED

```

### Conformance tail (réel)

```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-local-oa-cutover/projects/sfia-studio/app

 ❯ __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts (5 tests | 1 failed) 177ms
   ✓ Living Production Runtime Reference conformance > manifest exists and is valid JSON schema v1 3ms
   ✓ Living Production Runtime Reference conformance > canonical README and all volumes exist 1ms
   ✓ Living Production Runtime Reference conformance > component / flow / invariant / dependency IDs are unique and resolve 7ms
   × Living Production Runtime Reference conformance > tracked source/test/volume digests match current tree 146ms
     → expected '00bd5a869be87d20' to be '9f4f725a6e74292e' // Object.is equality
   ✓ Living Production Runtime Reference conformance > intentional digest drift is detectable (temporary mutation) 13ms

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts > Living Production Runtime Reference conformance > tracked source/test/volume digests match current tree
AssertionError: expected '00bd5a869be87d20' to be '9f4f725a6e74292e' // Object.is equality

Expected: "9f4f725a6e74292e"
Received: "00bd5a869be87d20"

 ❯ __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts:100:27
     98|       const abs = path.join(repoRoot, e.path);
     99|       expect(fs.existsSync(abs)).toBe(true);
    100|       expect(e.sha256_16).toBe(sha16(abs));
       |                           ^
    101|     }
    102|   });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯


 Test Files  1 failed (1)
      Tests  1 failed | 4 passed (5)
   Start at  19:11:55
   Duration  1.72s (transform 87ms, setup 207ms, collect 41ms, tests 177ms, environment 0ms, prepare 160ms)

```

**Gate digests:** refresh mécanique **non effectué** — manifest hors allowlist R24 ; contrat living = digests après revue sémantique ChatGPT + autorisation distincte.

---

## 11. Impacts documentaires

- PRR désormais distingue CURRENT ON MAIN vs LOCAL DELIVERY CANDIDATE pour L2-D2/CORR-02.
- Guards D1 **non** présentés comme actifs sur runtime intégré.
- OA-exclusive **non** ADOPTED.
- DET **non** promu LIVE.
- Exit dette temporaire : content review → digest GO → G-GIT cumul Delivery → G-ACTIVATION distinct.

---

## 12. Réserves / stops

Aucun STOP. Réserves :
- Digests non synchronisés (attendu).
- Q15 global PARTIAL.
- Raw SQLite KNOWN GAP.
- G-GIT / G-ACTIVATION OPEN.

---

## 13. Statut gates

| Gate | État |
|---|---|
| G-PRR DOCUMENTARY AUTHORING | **CONSUMED** (contenu local) — **PRR CONTENT REVIEW REQUIRED** avant CURRENT ON MAIN claim |
| G-GIT | **OPEN** |
| G-ACTIVATION | **OPEN** |
| Runtime v3 | **NON ADOPTED** |

---

## 14. Verdict

**AKG-M5 L2-D2 R24 PRR SEMANTIC SYNC — LOCAL AUTHORING COMPLETE — PRR CONTENT REVIEW REQUIRED — PRODUCT CODE UNCHANGED — G-GIT OPEN — G-ACTIVATION OPEN.**

Ne pas déclarer : PRR CURRENT ON MAIN pour L2-D2 ; CUTOVER PROVEN ; STUDIO LIVE VALIDATED ; PRODUCT COMPLETION COMPLETE ; RUNTIME V3 ADOPTED.

---

## 15. Instruction ChatGPT

1. Critical Review cohérence code dirty / PRR overlays.
2. Vérifier exactitude des statuts candidate vs CURRENT.
3. Contrôler périmètre (pas de réforme globale PRR).
4. Qualifier preuves DET + digests REFERENCE REVIEW REQUIRED.
5. Confirmer absence d'architecture parallèle.
6. Statuer dette/exit (digest puis G-GIT).
7. Proposer **PR Readiness** du Delivery cumulé (Product+PRR) **sans** commit/push/PR/merge/activation implicites.

FIN DU PACK R24.
