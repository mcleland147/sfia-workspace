# ChatGPT Review Pack — FULL

## META

| Champ | Valeur |
|-------|--------|
| **Date/heure** | 2026-07-24 09:44:40 CEST (+0200) |
| **Cycle** | Validation (QA) — T-A1 Project / LPS Foundation |
| **Profil** | Critical |
| **Gate consommé** | `GO VALIDATION DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A1` |
| **Repo** | mcleland147/sfia-workspace |
| **origin/main** | `8013c71342a019ab6c1297f05443a0dd8b6fac7c` — feat(sfia-studio): add v3-native T-A0 Doctrine Foundation (#261) |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation` |
| **HEAD pré-correction (delivery)** | `262d274b82573585e373448e7a4f94e9c5419e9a` |
| **HEAD final** | `861ca766cfd081060b1dddd6ef614aad96f264e1` |
| **Correction commit** | `861ca766cfd081060b1dddd6ef614aad96f264e1` — fix(sfia-studio): correct T-A1 Project and LPS validation |
| **merge-base(origin/main)** | `8013c71342a019ab6c1297f05443a0dd8b6fac7c` |
| **Handoff source (pré-validation)** | blob `982b6ac83861660a6c56598c94b556c03b53c0a2` (T-A1 delivery review) |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-v3-native-option-a-tech` |
| **Push projet / PR / merge** | **aucun** |
| **T-A2 / method/** / modeled schemas / package.json / SQL** | **hors scope / inchangés** |
| **Niveau** | FULL |

## 1. Truth Check (validation)

| Check | Résultat |
|-------|----------|
| Date Europe/Paris | 2026-07-24 09:25→09:44 CEST (+0200) — PASS |
| Fetch `origin/main` | `8013c71342a019ab6c1297f05443a0dd8b6fac7c` — MATCH |
| HEAD initial attendu | `262d274b82573585e373448e7a4f94e9c5419e9a` — MATCH |
| Commits delivery | `090e7be`, `fc8a51a`, `262d274` présents — MATCH |
| merge-base | `8013c713…` = origin/main — MATCH |
| Diff pre-fix | **24 files**, **+2584** — MATCH |
| Handoff blob | `982b6ac83861660a6c56598c94b556c03b53c0a2` present (blob) — MATCH |
| Concurrent T-A1 PR | **aucune** open — PASS |
| Status | clean hors `.tmp-sfia-review/` — PASS |

**Verdict Truth Check :** **PASS** (puis correction locale → HEAD final `861ca76`)

## 2. Scope validé

**Inclus :** `app/lib/oa/project/**`, `__tests__/oa/project/**`, docs `t-a1-project-lps-foundation/**`, ErrorRecord modeled enum (lecture), doctrine public resolve API (lecture/régression).

**Exclus :** push/PR/merge projet, `method/**`, modeled schema edits, `package.json`, T-A2, SQL migrations, UI/session wiring.

## 3. Findings critiques (preuve + correction)

### 3.1 Atomicity — PASS (après re-preuve)

- `MemoryProjectStore.runInTransaction` snapshot/rollback ; `failNextSave` hooks.
- Preuve : fail after project insert / during LPS / during append (LPS after supersede / project update) → **aucun orphelin** ; previous LPS reste `active` ; `currentLpsVersionId` inchangé.
- Tests : `rolls back atomically when LPS save fails…`, `…project save fails…`, `rolls back append when LPS save fails…`, `…project update fails…`.

### 3.2 Immutability / aliasing — PASS (renforcé)

- Repos : `structuredClone` on read/write ; `markSuperseded` clone-then-write ; create/append return clones.
- Preuve : mutate returned / input / historical → store inchangé.
- Tests : `does not alias…`, `keeps historical LPS immutable…`.

### 3.3 Optimistic concurrency — **BUG BLOQUANT trouvé → FIXED**

- **Avant fix :** `Promise.all` double-append même `expectedVersion` → **deux succès** (v2 fork, `lpsCount=3`). Check hors transaction.
- **Fix :** mutex file sur `runInTransaction` + re-check `expectedVersion` **inside** txn ; `LpsVersionConflictSignal` → `LPS_VERSION_CONFLICT`.
- Preuve post-fix : un gagnant + un conflit ; `lpsById.size === 2`.
- Tests : concurrent double-append ; expectedVersion high (99) ; low (0 → `LPS_INVALID`) ; stale after append.

### 3.4 Snapshot 256KB — PASS (UTF-8 bytes)

- `measureLpsSnapshotBytes` = `Buffer.byteLength(JSON.stringify(fields), "utf8")` ; limite `bytes > 256_000`.
- Boundary ASCII : limit-1 / limit acceptés ; limit+1 → `LPS_INVALID`.
- Unicode : delta emoji = 4 UTF-8 bytes ; payload multi-emoji over-limit → `LPS_INVALID`.

### 3.5 Doctrine pin on append — Option A retenable

- Create : `DoctrinePackageResolverPort.resolve({pin})` only.
- Append : pin optionnel = compare id+version+digest vs `Project.doctrinePackageRef` ; **pas de re-resolve**.
- **Reco Morris :** **ACCEPTER** Option A (pin-compare only). Re-resolve/verify digest = option future non requise pour T-A1.

### 3.6 ErrorRecord mapping — dette documentée (non bloquant)

| DetailCode | Modeled `code` | retryable |
|------------|----------------|-----------|
| DOCTRINE_UNRESOLVED | DOCTRINE_UNRESOLVED | true |
| LPS_VERSION_CONFLICT | STATE_CONFLICT | true |
| PERSISTENCE_FAILURE | STATE_CONFLICT | true |
| PROJECT_NOT_FOUND / LPS_NOT_FOUND | STATE_CONFLICT | **false** |
| PROJECT_INVALID / LPS_INVALID / PROJECT_ALREADY_EXISTS | STATE_CONFLICT | false |

- Enum modeled (lecture) : `DOCTRINE_UNRESOLVED`, `CONTEXT_STALE`, `STATE_CONFLICT`, … — **pas** de `NOT_FOUND` / `INVALID`.
- `STATE_CONFLICT` masque NOT_FOUND au niveau `code` ; **`retryable=false`** + **`detailCode`** évitent retry incorrect.
- **Reco :** documenter dette T-A1-D08 ; **ne pas** changer schemas ; pas de remap local vers `CONTEXT_STALE` pour NOT_FOUND (sémantique incorrecte).

### 3.7 Prototype pollution — PASS

- Objective/context `__proto__` traités comme données ; `structuredClone` ; Object.prototype non pollué.
- Test : `treats __proto__ objective text as data…`.

### 3.8 Performance (microbench local)

| Opération | Avg ms |
|-----------|--------|
| create (n=30) | **1.600** |
| append ×50 (per-op avg) | **0.143** |
| read project+current (n=50) | **0.011** |
| create ~256KB snapshot (n=10) | **1.231** |

Non-SLA ; ordre de grandeur in-memory acceptable.

## 4. Validation matrix (commandes)

| Gate | Commande | Exit | Résultat |
|------|----------|------|----------|
| Project tests (avant) | `vitest __tests__/oa/project` | 0 | **20/20** |
| Project tests (après) | `vitest __tests__/oa/project` | 0 | **30/30** |
| Doctrine regression | `vitest __tests__/oa/doctrine` | 0 | **28/28** |
| Platform + fixtures | `vitest __tests__/platform __tests__/fixtures.test.ts` | 0 | **10/10** |
| Typecheck | `npx tsc --noEmit` | 0 | PASS |
| Lint | `next lint --dir lib/oa/project --dir __tests__/oa/project` | 0 | PASS |
| Build | `npx next build` | 0 | PASS |
| Whitespace | `git diff --check` | 0 | PASS |
| Forbidden paths | greps method/SQL/package.json/modeled edits | 0 | ABSENT |
| Concurrent PR | `gh pr list` T-A1 | 0 | none |

## 5. Recommandations D01–D10 (Morris)

| ID | Observation | Preuve | Réserve | Reco | Morris attendu |
|----|-------------|--------|---------|------|----------------|
| **T-A1-D01** | Module `lib/oa/project` isolé ; anti-legacy PASS | antiLegacy 4/4 ; imports doctrine ports only | — | **ACCEPTER** | décision |
| **T-A1-D02** | Prefixed ids `prj:`/`lps:`/`prv:` ; LPS v1 | create + invalid id tests | — | **ACCEPTER** | décision |
| **T-A1-D03** | Snapshot versionné + supersede ; audit minimal | append + historical get | ES futur | **ACCEPTER** | décision |
| **T-A1-D04** | Optimistic `expectedVersion` ; mutex+in-txn check | concurrent test 1 win / 1 conflict | — | **ACCEPTER** | décision |
| **T-A1-D05** | Resolve on create ; pin-compare on append (Option A) | pin mismatch → DOCTRINE_UNRESOLVED | no re-verify | **ACCEPTER** | décision |
| **T-A1-D06** | In-memory + ports ; NOT DATABASE SELECTED | MemoryProjectStore ; no SQL | DB adapter futur | **ACCEPTER** | décision |
| **T-A1-D07** | Audit Memory/Console ; pas de snapshot body | events created/appended/conflict | metrics | **ACCEPTER** | décision |
| **T-A1-D08** | Detail→modeled map ; NOT_FOUND→STATE_CONFLICT | errors.ts + retryable matrix | enum extension | **ACCEPTER avec réserve** | décision |
| **T-A1-D09** | `MAX_LPS_SNAPSHOT_BYTES=256_000` UTF-8 JSON bytes | boundary + unicode tests | tuning | **ACCEPTER** | décision |
| **T-A1-D10** | Foundation-only ; pas UI/T-A2 | scope greps | activation future | **ACCEPTER** | décision |

## 6. Correction commit

```
861ca766cfd081060b1dddd6ef614aad96f264e1 fix(sfia-studio): correct T-A1 Project and LPS validation
```

Fichiers : append/create apps, memory store/repo, project tests (+10), docs T-A1 02–05.

## 7. Commits branche (`origin/main...HEAD`)

```
861ca76 fix(sfia-studio): correct T-A1 Project and LPS validation
262d274 docs(sfia-studio): document Option A T-A1 delivery
fc8a51a test(sfia-studio): validate T-A1 Project and LPS invariants
090e7be feat(sfia-studio): add v3 Project and LPS foundation
```

**Shortstat final :** 24 files changed, 2990 insertions(+)

## 8. Anti-claims

- Pas T-A1 MERGED / push / PR
- Pas T-A2 AUTHORIZED
- Pas DATABASE SELECTED
- Pas SCHEMAS ADOPTED / modeled enum extended
- Pas V2.6 / MethodMode / OPS1 REMOVED
- Pas OPTION A IMPLEMENTED / PRODUCTION READY
- Validation PASSED ≠ autorisation merge sans décision Morris

## 9. Actions non exécutées (volontaire)

- `git push` branche projet
- `gh pr create` / merge
- écriture `method/**` / modeled schemas / `package.json` / SQL
- wiring session / UI / T-A2

## 10. Working tree final

```
## delivery/sfia-studio-v3-native-option-a-t-a1-project-lps-foundation
?? .tmp-sfia-review/
```

## 11. Handoff

Publication bornée `sfia/review-handoff` via `publish-review-handoff.sh` — message :

`docs(review-handoff): publish Studio Option A T-A1 validation review`

Pré-cycle source blob : `982b6ac83861660a6c56598c94b556c03b53c0a2`

## 12. Blockers

**Aucun blocker ouvert post-fix.** Concurrent double-append était blocker → corrigé + testé.

Réserves non-bloquantes : mémoire-only ; ErrorRecord enum sans NOT_FOUND ; pas de re-resolve append.

## 13. Verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A1 PROJECT/LPS FOUNDATION VALIDATION PASSED — MORRIS DECISION REQUIRED**

## 14. Gate suivant candidat (post-décision Morris)

Après acceptation Morris + éventuelle PR readiness/merge :
`GO DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A2` (**non autorisé ici**).
