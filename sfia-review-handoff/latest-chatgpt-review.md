# ChatGPT Review Pack — FULL

## META

| Champ | Valeur |
|-------|--------|
| **Date/heure Europe/Paris** | 2026-07-24 13:26:24 CEST (+0200) |
| **Cycle** | PR Readiness Option A T-A2 — Cycle / Trajectory / Epistemic / CKC |
| **Profil** | Critical |
| **Gate consommé** | `GO PR READINESS DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A2` |
| **Repo** | `mcleland147/sfia-workspace` |
| **origin/main (base)** | `102b6c6c1d662c2359b1a11802f1bbc7e620935d` — feat(sfia-studio): add v3-native T-A1 Project and LPS foundation (#262) |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc` |
| **HEAD initial (avant PR readiness)** | `bdd39d51382d228d38c83fc2f6b60de18d64f7ad` |
| **HEAD final** | `75aee25a33e45b63b96805e85d72326d1525b056` |
| **Docs commit** | `75aee25a33e45b63b96805e85d72326d1525b056` — `docs(sfia-studio): align T-A2 PR readiness HEAD and checklist` (prior PR readiness tip `30a332eb4ecc34cce3ce99c5c909dc800bfad927`) |
| **merge-base(HEAD, origin/main)** | `102b6c6c1d662c2359b1a11802f1bbc7e620935d` |
| **Status / staged / untracked** | tracked clean except untracked `.tmp-sfia-review/` (local evidence; not committed) |
| **Working tree note** | `?? .tmp-sfia-review/` |
| **Handoff SOURCE consumed** | validation handoff commit `da3bcf0a6625247e959992a9937a3229108f051d` / blob `aa53e7710b6bb0a9274647f4e7fa5fe54a897bf9` |
| **Tech WT** | `/Users/morris/Projects/sfia-workspace-v3-native-option-a-tech` |
| **Handoff WT** | `/Users/morris/Projects/sfia-workspace/sfia-review-handoff` |
| **Main checkout** | `/Users/morris/Projects/sfia-workspace` |
| **Push projet** | **DONE** — remote SHA `75aee25a33e45b63b96805e85d72326d1525b056` == local HEAD (normal push, no force); prior tip `30a332eb4ecc34cce3ce99c5c909dc800bfad927` |
| **PR** | **#263** — https://github.com/mcleland147/sfia-workspace/pull/263 |
| **PR state** | OPEN · not draft · base `main` · head `delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc` · headOid `75aee25a33e45b63b96805e85d72326d1525b056` |
| **Mergeable** | MERGEABLE (mergeStateStatus CLEAN) |
| **Auto-merge** | **absent** (`null`) |
| **Merge exécuté** | **NO** |
| **Branche conservée** | **YES** |
| **T-A3** | **NOT LAUNCHED / NOT AUTHORIZED** |
| **Niveau** | FULL |

## Truth Check

| Check | Résultat |
|-------|----------|
| Date Europe/Paris | 2026-07-24 13:26:24 CEST (+0200) — PASS |
| Gate | `GO PR READINESS DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A2` — PASS |
| origin/main | `102b6c6c1d662c2359b1a11802f1bbc7e620935d` — MATCH expected `102b6c6…` |
| Branche | `delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc` — PASS |
| HEAD initial | `bdd39d5…` — MATCH |
| merge-base | = origin/main — PASS |
| Diff final | 40 files changed, 4974 insertions(+), 6 deletions(-) — PASS |
| Protected paths | method/ prompts/ package.json SQL schemas-modeled T-A3 HumanDecision — **absent** — PASS |
| Concurrent T-A2 PR before create | none — PASS |
| Push | remote SHA == local — PASS |
| PR | #263 OPEN non-draft — PASS |

**Truth Check verdict:** **PASS**

## Handoff source consumed

- Branch `origin/sfia/review-handoff` commit **`da3bcf0a6625247e959992a9937a3229108f051d`**
- Path `sfia-review-handoff/latest-chatgpt-review.md`
- Blob **`aa53e7710b6bb0a9274647f4e7fa5fe54a897bf9`**
- Content class: **Validation** review pack (verdict `…VALIDATION PASSED AFTER CORRECTION — MORRIS DECISION REQUIRED`)
- This PR readiness pack **supersedes** that validation handoff for Morris/ChatGPT review of the opened PR; it does **not** rewrite history of the validation commit.

## Template / sources consulted

1. Cycle prompt — PR Readiness Delivery Option A — T-A2 (§13–§21)
2. Validation handoff blob `aa53e771…` / commit `da3bcf0`
3. Delivery docs `t-a2-cycle-trajectory-epistemic-ckc/{01..08,README}.md`
4. Implementation `projects/sfia-studio/app/lib/oa/cycle/**` (read-only this cycle)
5. Minimal LPS touch `lib/oa/project/application/appendLivingProjectStateVersion.ts`, `types.ts` (pre-existing on branch)
6. Tests `__tests__/oa/cycle/**`, project, doctrine, platform
7. Prior PR patterns T-A0 #261 / T-A1 #262
8. Local evidence `/tmp/t-a2-pr-readiness-tests.txt`

## CKC (for this PR readiness cycle)

| Item | Value |
|------|-------|
| **Found** | Port `CkcResolver` + `MemoryCkcResolver` + `ResolveCycleKnowledgeContract` |
| **Guidance** | Absent CKC → unavailable + `intra_v3_only` — does **not** block Create |
| **executionAuthority** | always false; hostile true → `CKC_UNAVAILABLE` |
| **Authority in this cycle** | **none** — cognitive guidance only for reviewers |

## Diff avant PR readiness (at HEAD `bdd39d5`)

At validation tip vs origin/main:

```
39 files changed, 4775 insertions(+), 6 deletions(-)
```

## Diff final (après docs PR readiness)

```
40 files changed, 4974 insertions(+), 6 deletions(-)
```

### Commits `origin/main...HEAD`

```
75aee25 docs(sfia-studio): align T-A2 PR readiness HEAD and checklist
30a332e docs(sfia-studio): prepare T-A2 Cycle and Trajectory PR
bdd39d5 docs(sfia-studio): align T-A2 validation verdict string
833fd14 docs(sfia-studio): record T-A2 validation findings
b7d6672 test(sfia-studio): strengthen T-A2 adversarial validation
d7af9cd fix(sfia-studio): correct T-A2 validation findings
633d463 docs(sfia-studio): document Option A T-A2 delivery
230b4a9 test(sfia-studio): validate T-A2 qualification and trajectory invariants
b4a185a feat(sfia-studio): add v3 Cycle and Trajectory foundation
```

### Fichiers créés (38)

```
projects/sfia-studio/app/__tests__/oa/cycle/adversarialValidation.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/antiLegacy.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts
projects/sfia-studio/app/lib/oa/cycle/application/createCycle.ts
projects/sfia-studio/app/lib/oa/cycle/application/createInitialTrajectory.ts
projects/sfia-studio/app/lib/oa/cycle/application/getCurrentTrajectory.ts
projects/sfia-studio/app/lib/oa/cycle/application/getCycle.ts
projects/sfia-studio/app/lib/oa/cycle/application/getEpistemicState.ts
projects/sfia-studio/app/lib/oa/cycle/application/getTrajectoryVersion.ts
projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts
projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycle.ts
projects/sfia-studio/app/lib/oa/cycle/application/resolveCycleKnowledgeContract.ts
projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts
projects/sfia-studio/app/lib/oa/cycle/domain/invariants.ts
projects/sfia-studio/app/lib/oa/cycle/domain/qualification.ts
projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
projects/sfia-studio/app/lib/oa/cycle/index.ts
projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryCkcResolver.ts
projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryCycleRepository.ts
projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryCycleStore.ts
projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryEpistemicRepository.ts
projects/sfia-studio/app/lib/oa/cycle/infrastructure/memoryTrajectoryRepository.ts
projects/sfia-studio/app/lib/oa/cycle/infrastructure/observability.ts
projects/sfia-studio/app/lib/oa/cycle/ports/ckcResolver.ts
projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
projects/sfia-studio/app/lib/oa/cycle/ports/cycleRepository.ts
projects/sfia-studio/app/lib/oa/cycle/ports/epistemicRepository.ts
projects/sfia-studio/app/lib/oa/cycle/ports/trajectoryRepository.ts
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a2-cycle-trajectory-epistemic-ckc/01-scope-and-canonical-slice-definition.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a2-cycle-trajectory-epistemic-ckc/02-domain-contracts-and-invariants.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a2-cycle-trajectory-epistemic-ckc/03-persistence-consistency-and-failure-modes.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a2-cycle-trajectory-epistemic-ckc/04-tests-evidence-and-reserves.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a2-cycle-trajectory-epistemic-ckc/05-delivery-validation-and-decision-pack.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a2-cycle-trajectory-epistemic-ckc/06-morris-validation-and-pr-readiness.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a2-cycle-trajectory-epistemic-ckc/07-validation-findings-and-morris-decision-pack.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a2-cycle-trajectory-epistemic-ckc/08-pr-readiness.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a2-cycle-trajectory-epistemic-ckc/README.md
```

### Fichiers modifiés (2)

```
projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
projects/sfia-studio/app/lib/oa/project/domain/types.ts
```

### Fichiers supprimés (0)

```
(none)
```

## Scope / hors scope

### In scope

- CycleInstance / ProjectTrajectory / EpistemicItem / CkcResolution foundation
- Qualification déterministe ; Critical `proposed`
- Trajectory versioning + LPS linkage
- Adversarial validation corrections B1/B3/B4/E
- Docs PR readiness including `08-pr-readiness.md`
- Push + non-draft PR to main

### Out of scope

HumanDecision · Confirmation · ExecutionContract · agents · Evidence/Review/Claim · UI · cutover v2.6 · MethodMode/OPS1 · SQL · DATABASE SELECTED · modeled schema edits · method/** · prompts/** · package.json · T-A3 · Critical Morris ack · inventing T-A1 reservationIds API · **merge**

## Architecture

Modular monolith `lib/oa/cycle`:

```
QualifyCycle → recommendation only (isMorrisDecision=false)
CreateCycle → ProjectServices.GetProject → persist CycleInstance
CreateInitialTrajectory / ProposeTrajectoryVersion
  → clone-first steps → validate → TrajectoryRepository (mutex)
  → AppendLivingProjectStateVersion (expectedVersion / expectedLpsVersion)
ResolveCycleKnowledgeContract → CkcResolverPort (guidance; executionAuthority=false)
UpdateEpistemicState → refuse Hypothesis/Observation→DecisionRef promotion
```

Layers: domain / application / ports / infrastructure (memory) / index barrels. Consumes `@/lib/oa/project` and `@/lib/oa/doctrine` public APIs only.

## Qualification

Deterministic signal priority: Critical signals → Critical (+ justification on Create); else `lowRiskBounded` → Light; else Standard. Capitalization via `cycleTypeId=cyc:capitalization` (not profile enum). Qualify never sets `isMorrisDecision=true`.

## Trajectoire

Versioned snapshots; propose with `expectedVersion` + LPS expectedVersion; mutex + conflict; cyclic/orphan/self deps rejected; size cap 256_000 UTF-8; propose status allowlist; logical rollback = propose restored version (never rewrite history).

## État épistémique

Types Observation/Hypothesis/Option/Recommendation/DecisionRef/Reservation/Contradiction/EvidenceRef. Promotion Hypothesis/Observation→DecisionRef forbidden (flag, supersede, **same-id**).

## CKC

Guidance-only; hostile executionAuthority denied; absent does not block Create.

## Intégration T-A1 / LPS

Intentional minimal linkage fields only (trajectoryId/version, activeCycleInstanceId, ckcResolutionRef, epistemicItemIds). **B5 OPEN**: satellite ids not carried by T-A1 append API. **R1 OPEN**: no cross-store atomicity.

## Corrections B1 / B3 / B4 / E

| ID | Status | Fix |
|----|--------|-----|
| B1 TOCTOU steps | **CORRECTED** | clone-first before validate/persist |
| B3 orphan/self deps | **CORRECTED** | reject orphan + self_dependency |
| B4 stale propose | **CORRECTED** | allowlist candidate\|validated\|active |
| E same-id promotion | **CORRECTED** | guard in assertNoHypothesisDecisionPromotion |

## Réserves B5 / R1

| ID | Status | Notes |
|----|--------|-------|
| **B5** | **OPEN RESERVE** | Do not invent T-A1 reservationIds API in T-A2 |
| **R1** | **OPEN RESERVE** | Dual mutex; acceptable foundation; structural debt pre-real persistence |

## Erreurs

Detail codes mapped to modeled ErrorRecord codes (`STATE_CONFLICT`, `DECISION_REQUIRED`, `AUTHORITY_DENIED`, `CKC_UNAVAILABLE`, `CONTEXT_STALE`). Enum not extended — debt T-A2-D08.

## Sécurité

Identifier prefixes validated; no secrets in diff; hostile CKC cannot grant authority; no method/ops1/sfia-context imports; no SQL/migrations; no package.json.

## Observabilité

Minimal audit events (`oa.cycle.*`, `oa.trajectory.*`, `oa.epistemic.*`, `oa.ckc.*`) without trajectory/epistemic payloads.

## Performance

In-memory foundation only; UTF-8 size cap; no DB selected; concurrency via promise-queue mutex.

## Tests (réexécutés PR readiness)

| Commande | Exit | Durée (s) | Tests / notes |
|----------|------|-----------|---------------|
| `npx vitest run __tests__/oa/cycle` | 0 | ~1 | **48 PASS** |
| `npx vitest run __tests__/oa/project` | 0 | ~1 | **30 PASS** |
| `npx vitest run __tests__/oa/doctrine` | 0 | ~1 | **28 PASS** |
| `npx vitest run __tests__/platform __tests__/fixtures.test.ts` | 0 | ~0 | **10 PASS** |
| `npx tsc --noEmit` | 0 | ~1 | PASS |
| `npx next lint` (cycle+project) | 0 | ~2 | No ESLint warnings |
| `npx next build` | 0 | ~7 | PASS |
| `git diff --check origin/main...HEAD` | 0 | ~0 | PASS |

Total connu: **116 PASS**.

### Raw evidence excerpt

```
===== vitest-cycle =====
cmd: npx vitest run __tests__/oa/cycle
exit: 0
duration_s: 1
--- tail ---

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-v3-native-option-a-tech/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 11ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 55ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 59ms

 Test Files  3 passed (3)
      Tests  48 passed (48)
   Start at  13:19:48
   Duration  436ms (transform 143ms, setup 128ms, collect 340ms, tests 125ms, environment 0ms, prepare 111ms)


===== vitest-project =====
cmd: npx vitest run __tests__/oa/project
exit: 0
duration_s: 1
--- tail ---

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-v3-native-option-a-tech/projects/sfia-studio/app

 ✓ __tests__/oa/project/antiLegacy.test.ts (4 tests) 4ms
 ✓ __tests__/oa/project/projectLpsFoundation.test.ts (26 tests) 65ms

 Test Files  2 passed (2)
      Tests  30 passed (30)
   Start at  13:19:49
   Duration  325ms (transform 83ms, setup 42ms, collect 119ms, tests 69ms, environment 0ms, prepare 50ms)


===== vitest-doctrine =====
cmd: npx vitest run __tests__/oa/doctrine
exit: 0
duration_s: 1
--- tail ---

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-v3-native-option-a-tech/projects/sfia-studio/app

 ✓ __tests__/oa/doctrine/antiLegacy.test.ts (3 tests) 5ms
 ✓ __tests__/oa/doctrine/schemaValidation.test.ts (3 tests) 32ms
 ✓ __tests__/oa/doctrine/resolveDoctrinePackage.test.ts (22 tests) 60ms

 Test Files  3 passed (3)
      Tests  28 passed (28)
   Start at  13:19:49
   Duration  282ms (transform 67ms, setup 68ms, collect 141ms, tests 96ms, environment 0ms, prepare 82ms)


===== vitest-platform =====
cmd: npx vitest run __tests__/platform __tests__/fixtures.test.ts
exit: 0
duration_s: 0
--- tail ---

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-v3-native-option-a-tech/projects/sfia-studio/app

 ✓ __tests__/platform/import-boundaries.test.ts (3 tests) 12ms
 ✓ __tests__/platform/platform-ai.test.ts (5 tests) 2ms
 ✓ __tests__/fixtures.test.ts (2 tests) 1ms

 Test Files  3 passed (3)
      Tests  10 passed (10)
   Start at  13:19:50
   Duration  407ms (transform 49ms, setup 62ms, collect 51ms, tests 15ms, environment 238ms, prepare 99ms)


===== tsc =====
cmd: npx tsc --noEmit
exit: 0
duration_s: 1
--- tail ---

===== lint-cycle-project =====
cmd: npx next lint --dir lib/oa/cycle --dir __tests__/oa/cycle --dir lib/oa/project --dir __tests__/oa/project
exit: 0
duration_s: 2
--- tail ---
`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors

===== next-build =====
cmd: npx next build
exit: 0
duration_s: 7
--- tail ---
   ▲ Next.js 15.5.20

   Creating an optimized production build ...
 ✓ Compiled successfully in 888ms
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/9) ...
   Generating static pages (2/9)
   Generating static pages (4/9)
   Generating static pages (6/9)
 ✓ Generating static pages (9/9)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                      127 B         103 kB
├ ○ /_not-found                            127 B         103 kB
├ ○ /cycle-actif                         3.82 kB         119 kB
├ ○ /decision                            5.53 kB         120 kB
├ ƒ /nouvelle-demande                    10.2 kB         116 kB
├ ○ /ops1/nouvelle-demande               18.5 kB         133 kB
├ ƒ /projects/[id]                       2.66 kB         108 kB
├ ○ /projects/new                        2.63 kB         108 kB
├ ○ /synthese                            4.84 kB         120 kB
└ ƒ /workspace                             571 B         106 kB
+ First Load JS shared by all             102 kB
  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.96 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand


===== diff-check =====
cmd: git diff --check origin/main...HEAD
exit: 0
duration_s: 0
--- tail ---

===== protected-path-greps =====
sql:
absent
package:
absent
schemas-modeled:
absent
method-prompts:
absent
secrets-like:
absent
legacy-imports:
absent
t-a3:
absent
DONE

```

## Décisions T-A2-D01…D10 — recommandations (Morris encore REQUIS)

| ID | Recommandation | Morris |
|----|----------------|--------|
| T-A2-D01 | **ACCEPT** | REQUISE |
| T-A2-D02 | **ACCEPT** | REQUISE |
| T-A2-D03 | **ACCEPT** | REQUISE |
| T-A2-D04 | **ACCEPT** | REQUISE |
| T-A2-D05 | **ACCEPT WITH RESERVE** (R1/B5) | REQUISE |
| T-A2-D06 | **ACCEPT** | REQUISE |
| T-A2-D07 | **ACCEPT** | REQUISE |
| T-A2-D08 | **ACCEPT** | REQUISE |
| T-A2-D09 | **ACCEPT** | REQUISE |
| T-A2-D10 | **ACCEPT WITH RESERVE** (B5/R1) | REQUISE |

**No `VALIDATED BY MORRIS` claim** — no Git source closing these decisions.

## Dettes

B5 LPS satellite carry · R1 cross-store atomicity · ErrorRecord enum · Capitalization schema gap · DATABASE SELECTED · Critical ack hors T-A2 · bounds tuning

## Anti-claims

Pas MERGED · Pas merge autorisé · Pas Morris validated T-A2-D01…D10 · Pas T-A3 · Pas DATABASE SELECTED · Pas B5/R1 CLOSED · Pas `VALIDATED WITH RESERVES` as Morris verdict · Validation = **PASSED AFTER CORRECTION** only

## Push projet

- Command: `git push origin HEAD` (NO `--force`) after align docs commit
- Local HEAD: `75aee25a33e45b63b96805e85d72326d1525b056`
- Remote SHA: `75aee25a33e45b63b96805e85d72326d1525b056` — **MATCH**
- Prior PR readiness tip: `30a332eb4ecc34cce3ce99c5c909dc800bfad927`
- Branch tracking: `origin/delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc`

## PR

| Champ | Valeur |
|-------|--------|
| **Number** | **263** |
| **URL** | https://github.com/mcleland147/sfia-workspace/pull/263 |
| **Title** | feat(sfia-studio): add v3-native T-A2 Cycle and Trajectory foundation |
| **State** | OPEN |
| **Draft** | false |
| **Base** | main |
| **Head** | delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc |
| **headOid** | `75aee25a33e45b63b96805e85d72326d1525b056` |
| **Commits** | 9 |
| **Files** | 40 |
| **Additions** | 4974 |
| **Deletions** | 6 |
| **Mergeable** | MERGEABLE |
| **Auto-merge** | none |
| **Merged** | **NO** |

## Merge

**NOT EXECUTED.** Gate `GO MERGE PR T-A2` **not consumed**.

## Documentation créée / modifiée (contenu)

### `08-pr-readiness.md` (complet)

```markdown
# 08 — PR readiness — T-A2 Cycle / Trajectory / Epistemic / CKC

| Champ | Valeur |
|-------|--------|
| **Date/heure Europe/Paris** | 2026-07-24 13:17:57 CEST (+0200) |
| **Gate consommé** | `GO PR READINESS DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A2` |
| **Base** | `origin/main` @ `102b6c6c1d662c2359b1a11802f1bbc7e620935d` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc` |
| **HEAD avant PR readiness** | `bdd39d51382d228d38c83fc2f6b60de18d64f7ad` |
| **HEAD final** | `30a332eb4ecc34cce3ce99c5c909dc800bfad927` |
| **merge-base(HEAD, origin/main)** | `102b6c6c1d662c2359b1a11802f1bbc7e620935d` |
| **Diff vs origin/main** | 40 files changed, 4974 insertions(+), 6 deletions(-) |
| **Validation technique** | **PASSED AFTER CORRECTION** — 48/30/28/10 |
| **Décisions Morris T-A2-D01…D10** | **encore requises** (recommandations agents uniquement ; pas de source Git Morris-validated) |
| **Push / PR** | **DONE** — remote SHA `30a332eb4ecc34cce3ce99c5c909dc800bfad927` · PR **#263** OPEN non-draft |
| **Merge** | **interdit** / **not done** (gate `GO MERGE PR T-A2` non consommé) |
| **Gate suivant (non consommé)** | `GO MERGE PR T-A2` |

## Scope

- Module `projects/sfia-studio/app/lib/oa/cycle/**` — CycleInstance, ProjectTrajectory, EpistemicItem, CkcResolution
- Qualification déterministe (Critical / Light / Standard) ; Critical reste `proposed`
- Trajectoire versionnée + LPS link via T-A1 `AppendLivingProjectStateVersion`
- CKC guidance-only (`executionAuthority=false`) ; absent CKC n’bloque pas Create
- Tests foundation + adversarial + anti-legacy (48)
- Extensions LPS minimales (champs de liaison)
- Corrections validation B1 / B3 / B4 / E
- Documentation `t-a2-cycle-trajectory-epistemic-ckc/**`

## Hors scope

HumanDecision · Confirmation · ExecutionContract · agents · Evidence / ReviewBundle / ClaimEvaluation · UI Option A · cutover v2.6 · MethodMode / OPS1 · SQL / migrations · IAM · DATABASE SELECTED · schemas modeled · `method/**` · `prompts/**` · `package.json` · T-A3+ · Critical Morris ack · inventer API T-A1 `reservationIds` (B5)

## Architecture

Modular monolith `lib/oa/cycle` (domain / application / ports / infrastructure mémoire) :

```
QualifyCycle → recommendation only (isMorrisDecision=false)
CreateCycle → ProjectServices.GetProject → persist CycleInstance
CreateInitialTrajectory / ProposeTrajectoryVersion
  → clone-first steps → validate → TrajectoryRepository (mutex)
  → AppendLivingProjectStateVersion (expectedVersion / expectedLpsVersion)
ResolveCycleKnowledgeContract → CkcResolverPort (guidance; executionAuthority=false)
UpdateEpistemicState → refuse Hypothesis/Observation→DecisionRef promotion
```

## Corrections B1 / B3 / B4 / E (corrigées)

| ID | Defect | Fix | Status |
|----|--------|-----|--------|
| **B1** | TOCTOU: validate then await then clone `request.steps` | Clone-first avant validate/persist | **CORRECTED** |
| **B3** | Orphan deps accepted (DFS skipped unknowns) + self-deps | Reject orphan + explicit `self_dependency` | **CORRECTED** |
| **B4** | Propose `stale`/`superseded` orphans current pointer | Allowlist `candidate\|validated\|active` | **CORRECTED** |
| **E** | Same-id Hypothesis/Observation → DecisionRef overwrite | Guard in `assertNoHypothesisDecisionPromotion` | **CORRECTED** |

## Tests adversariaux

Suite `__tests__/oa/cycle/adversarialValidation.test.ts` — prouve B1/B3/B4/E, hostile CKC, qualification edges, failNextSave rollback, immutabilité, concurrency `TRAJECTORY_VERSION_CONFLICT`, Critical stays proposed, same-id promotion, B5 LPS carry probe (documents OPEN RESERVE).

## Résultats de validation (matrice PR readiness)

| Suite | Attendu | Résultat |
|-------|---------|----------|
| `npx vitest run __tests__/oa/cycle` | 48 | PASS (réexécuté ce cycle) |
| `npx vitest run __tests__/oa/project` | 30 | PASS |
| `npx vitest run __tests__/oa/doctrine` | 28 | PASS |
| `npx vitest run __tests__/platform __tests__/fixtures.test.ts` | 10 | PASS |
| `npx tsc --noEmit` | PASS | PASS |
| lint `lib/oa/cycle` + `lib/oa/project` (+ tests cycle) | PASS | PASS |
| `npx next build` | PASS si faisable | PASS / noté dans review pack |
| `git diff --check origin/main...HEAD` | PASS | PASS |

Total connu : **116** tests PASS.

## Réserves OPEN (non fermées)

| ID | Réserve | Statut |
|----|---------|--------|
| **B5 / R6** | T-A1 append ne porte pas `reservationIds` / ids satellites LPS ; T-A2 ne doit pas inventer l’API | **OPEN RESERVE** |
| **R1** | Pas d’atomicité cross-store stricte Project↔Cycle (deux mutex mémoire) | **OPEN RESERVE** |

Autres dettes documentées (non blockers fondation) : ErrorRecord enum borné · bornes nombre versions/étapes/items · mémoire uniquement · Capitalization via `cycleTypeId` · Critical acknowledgement hors T-A2.

## Dettes

1. **B5** — évolution explicite contrat LPS T-A1 pour carry-forward satellite ids
2. **R1** — transaction unique / outbox avant persistance réelle ou exécution critique
3. **ErrorRecord** — extension enum modeled pour detail codes T-A2 (mapping actuel documenté)
4. **Capitalization** — schema `profile` sans valeur Capitalization (porté par `cycleTypeId`)
5. **DATABASE SELECTED** — ports mémoire seulement
6. **Critical ack** — hors T-A2 (reste `proposed`)

## Décisions T-A2-D01…D10 — recommandations (Morris encore requis)

| ID | Observation | Preuve | Option | Alternative rejetée | Réserve / dette | Réversibilité | Recommandation | Morris |
|----|-------------|--------|--------|---------------------|-----------------|---------------|----------------|--------|
| **T-A2-D01** | Isolation module cycle | anti-legacy + suite 48 | `lib/oa/cycle` | fusion d1/OPS1 | — | Haute | **ACCEPT** | **REQUISE** |
| **T-A2-D02** | Capitalization hors enum profile | tests Capitalization | `cycleTypeId=cyc:capitalization` | étendre enum maintenant | schema gap | Haute | **ACCEPT** | **REQUISE** |
| **T-A2-D03** | Qualification déterministe | edges adversarial | Critical/Light/Standard | scores inventés | — | Haute | **ACCEPT** | **REQUISE** |
| **T-A2-D04** | Critical sans auto-ack | `never auto-acks Critical` | status `proposed` | auto-acknowledge | ack T-A3+ | Haute | **ACCEPT** | **REQUISE** |
| **T-A2-D05** | Versioning + concurrency | B1/B3/B4 fixed + concurrent conflict | expectedVersion + clone-first + allowlist | in-place / stale propose | **R1/B5** | Haute | **ACCEPT WITH RESERVE** | **REQUISE** |
| **T-A2-D06** | Repos locaux | failNextSave rollback | in-memory + ports | SQL maintenant | adapter DB futur | Haute | **ACCEPT** | **REQUISE** |
| **T-A2-D07** | CKC guidance | hostile denied ; absent OK | unavailable + `intra_v3_only` | inventer detailed / bloquer Create | contenu CKC futur | Haute | **ACCEPT** | **REQUISE** |
| **T-A2-D08** | Erreurs bornées | mapping detail codes | map vers codes existants | étendre schema enum | enum debt | Moyenne | **ACCEPT** | **REQUISE** |
| **T-A2-D09** | Cap taille traj | size cap test | `MAX_TRAJECTORY_SNAPSHOT_BYTES=256_000` | illimité | tuning | Haute | **ACCEPT** | **REQUISE** |
| **T-A2-D10** | Foundation-only | exclusions + docs | slice bornée | wiring session/decision | **B5/R1** + activation | Haute | **ACCEPT WITH RESERVE** | **REQUISE** |

Pas de claim `VALIDATED BY MORRIS` — aucune source Git Morris-validated pour T-A2-D01…D10.

## Anti-claims

- Pas T-A2 **MERGED**
- Pas merge autorisé dans ce cycle
- Pas Morris **VALIDATED** décisions T-A2 (recommandations seulement)
- Pas T-A3 **AUTHORIZED** / **LAUNCHED**
- Pas DATABASE SELECTED / SQL / schemas modeled runtime adoptés
- Pas V2.6 REMOVED / MethodMode REMOVED / OPS1 RETIRED
- Pas OPTION A IMPLEMENTED (foundation slice only)
- Pas UI / HumanDecision / Confirmation / Execution / Evidence
- Pas B5 / R1 **CLOSED**
- Pas `VALIDATED WITH RESERVES` comme verdict Morris — verdict technique = **PASSED AFTER CORRECTION**

## Stratégie de rollback

- Trajectoire : proposer une nouvelle version restaurée (jamais rewrite in-place des versions historiques)
- Cycle / epistemic : fail-closed ; rollback logique store mémoire sur `failNextSave`
- LPS : `expectedVersion` / conflict — pas d’overwrite silencieux
- Rollback produit = revert / non-merge de la PR ; branche conservée

## Risques de merge

| Risque | Mitigation |
|--------|------------|
| Partial Project↔Cycle (R1) | Accepté fondation ; documenté OPEN |
| LPS satellite ids drop (B5) | OPEN RESERVE ; pas d’API inventée |
| Reviewer confond validation technique / décision Morris | Status discipline explicite dans PR + docs |
| Scope creep T-A3 / UI | Exclusions + anti-claims |
| Concurrent propose | Mutex + `TRAJECTORY_VERSION_CONFLICT` prouvé |

## Review focus

1. Transaction / concurrence trajectoire + LPS expectedVersion
2. Intégration LPS (champs de liaison uniquement)
3. Corrections B1 / B3 / B4 / E
4. Distinction recommandation vs décision (`isMorrisDecision=false`)
5. Critical reste `proposed`
6. CKC sans autorité d’exécution
7. Trajectoire immutable (versions)
8. Promotion épistémique interdite
9. Réserves B5 / R1 toujours OPEN

## Checklist PR

- [x] Truth Check branche / HEAD / merge-base / diff
- [x] Corrections B1/B3/B4/E présentes + tests adversariaux verts
- [x] Matrice 48/30/28/10 + tsc/lint/build/diff-check
- [x] Chemins protégés absents du diff
- [x] Docs PR readiness (`08` + wording)
- [x] Commit docs local
- [x] Push `-u` (ce cycle)
- [x] PR non-draft vers `main` (ce cycle)
- [x] Review pack FULL + handoff publish (ce cycle)
- [ ] **Merge** — **NON** (gate `GO MERGE PR T-A2` non consommé)

## Gate de merge requis

**Non consommé** : `GO MERGE PR T-A2`.

Ce cycle crée uniquement la PR pour revue Morris. Merge, auto-merge, force-push, rebase/squash rewrite, et lancement T-A3 sont **interdits**.

## Verdict cycle (après PR créée)

**SFIA STUDIO V3-NATIVE OPTION A T-A2 PR CREATED — MORRIS REVIEW REQUIRED**
TION A T-A2 PR CREATED — MORRIS REVIEW REQUIRED**
```

### `README.md` (complet)

```markdown
# T-A2 — Cycle / Trajectory / Epistemic / CKC Foundation (Delivery Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A2 — Cycle/Trajectory/Epistemic/CKC |
| **Profil** | Critical |
| **Gate consommé (validation)** | `GO VALIDATION DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A2` |
| **Gate consommé (PR readiness)** | `GO PR READINESS DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A2` |
| **Statut validation** | **PASSED AFTER CORRECTION** — décisions Morris T-A2-D01…D10 encore ouvertes |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc` |
| **Base** | `origin/main` @ `102b6c6c1d662c2359b1a11802f1bbc7e620935d` |
| **HEAD start PR readiness** | `bdd39d51382d228d38c83fc2f6b60de18d64f7ad` |
| **Tests T-A2** | **48** PASS |
| **Dépendance** | T-A1 Project/LPS Foundation (merged PR #262) · T-A0 Doctrine |
| **Merge** | **interdit** dans le cycle PR readiness (gate `GO MERGE PR T-A2` non consommé) |
| **Réserves OPEN** | **B5** (LPS satellite ids) · **R1** (atomicité cross-store) |

## Objectif

Fournir une fondation runtime minimale, testée et fail-closed pour `CycleInstance`, `ProjectTrajectory`, `EpistemicItem` et `CkcResolution` v3-native : qualification déterministe, création cycle (Critical `proposed`), trajectoire versionnée liée au LPS via T-A1, épistémologie sans promotion Hypothesis→DecisionRef, CKC guidance-only — sans cutover, sans UI, sans T-A3+.

## Contenu

1. [01-scope-and-canonical-slice-definition.md](./01-scope-and-canonical-slice-definition.md)
2. [02-domain-contracts-and-invariants.md](./02-domain-contracts-and-invariants.md)
3. [03-persistence-consistency-and-failure-modes.md](./03-persistence-consistency-and-failure-modes.md)
4. [04-tests-evidence-and-reserves.md](./04-tests-evidence-and-reserves.md)
5. [05-delivery-validation-and-decision-pack.md](./05-delivery-validation-and-decision-pack.md)
6. [06-morris-validation-and-pr-readiness.md](./06-morris-validation-and-pr-readiness.md)
7. [07-validation-findings-and-morris-decision-pack.md](./07-validation-findings-and-morris-decision-pack.md)
8. [08-pr-readiness.md](./08-pr-readiness.md)

## Corrections validation

**B1 / B3 / B4 / E** — **CORRECTED** (voir `07` et `08`).

## Anti-claims

- Pas T-A2 **MERGED**
- Pas T-A3 **AUTHORIZED**
- Pas READY FOR DELIVERY GLOBAL
- Pas DATABASE SELECTED
- Pas SCHEMAS ADOPTED runtime
- Pas V2.6 REMOVED / MethodMode REMOVED / OPS1 RETIRED
- Pas OPTION A IMPLEMENTED (foundation slice only)
- Pas UI / HumanDecision / Confirmation / Execution / Evidence
- Pas décisions T-A2 **VALIDATED BY MORRIS** (pas de source Git)
- Pas B5 / R1 fermées
- Pas Capitalization dans l’enum `profile` (schema gap — voir T-A2-D02)

```

### `05-delivery-validation-and-decision-pack.md` (complet)

```markdown
# 05 — Delivery validation and decision pack

| Champ | Valeur |
|-------|--------|
| **Date** | 2026-07-24 (Europe/Paris) |
| **Gate** | `GO DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A2` + `GO VALIDATION … T-A2` |
| **Statut** | Décisions **T-A2-D01…D10 CANDIDATES** — Morris validation required (pas de source Git Morris-validated) |
| **Verdict technique** | Fondation T-A2 **PASSED AFTER CORRECTION** ; B1/B3/B4/E **CORRECTED** ; réserves **B5/R1 OPEN** |
| **PR readiness** | Voir [08-pr-readiness.md](./08-pr-readiness.md) — gate PR readiness séparé ; **merge interdit** sans `GO MERGE PR T-A2` |

## Validations exécutées

| Commande | Résultat |
|----------|----------|
| `npx vitest run __tests__/oa/cycle` | PASS — 48 tests (26 foundation + 22 adversarial) |
| `npx vitest run __tests__/oa/project` | PASS — 30 |
| `npx vitest run __tests__/oa/doctrine` | PASS — 28 |
| `npx vitest run __tests__/platform __tests__/fixtures.test.ts` | PASS — 10 |
| `npx tsc --noEmit` | PASS |
| `next lint` (dirs `lib/oa/cycle`, `__tests__/oa/cycle`, `lib/oa/project`) | PASS |
| `npx next build` | PASS |
| `git diff --check` | PASS |

Adversarial proof + fixes: [07-validation-findings-and-morris-decision-pack.md](./07-validation-findings-and-morris-decision-pack.md).

## Décisions candidates T-A2-D01…D10

| ID | Décision | Observation | Option retenue | Alternative rejetée | Dette | Réversibilité | Recommandation | Morris |
|----|----------|-------------|----------------|---------------------|-------|---------------|----------------|--------|
| **T-A2-D01** | Boundaries Cycle module | Modular monolith OA | `lib/oa/cycle` isolé | Fusion d1/OPS1 | — | Haute | Valider isolation | attendue |
| **T-A2-D02** | Capitalization | Schema profile sans Capitalization | `cycleTypeId=cyc:capitalization` + profile règles | Étendre enum profile | Schema gap | Haute | Valider gap | attendue |
| **T-A2-D03** | Qualification | Signaux explicites | Critical/Light/Standard déterministe | Scores inventés | — | Haute | Valider | attendue |
| **T-A2-D04** | Critical status | FD-OA-03 | `proposed` sans auto-ack | Auto-acknowledge | Ack T-A3+ | Haute | Valider | attendue |
| **T-A2-D05** | Trajectory versioning | Canonique T-A2 | expectedVersion + supersede + LPS link + clone-first + status allowlist + orphan deps | In-place mutate / stale propose | R1/B5 | Haute | **ACCEPT WITH RESERVE** | attendue |
| **T-A2-D06** | Repos locaux | Pas DB selected | In-memory + ports | SQL maintenant | Adapter DB futur | **Haute** | Valider mémoire | attendue |
| **T-A2-D07** | CKC absent | Guidance only | unavailable + intra_v3_only ; pas de blocage Create | Inventer detailed | Contenu CKC futur | Haute | Valider | attendue |
| **T-A2-D08** | Erreurs | Enum modeled borné | Detail codes + map (STATE_CONFLICT / DECISION_REQUIRED / AUTHORITY_DENIED / CKC_UNAVAILABLE / CONTEXT_STALE) | Étendre schema | Enum extension | Moyenne | Valider mapping | attendue |
| **T-A2-D09** | Limite taille traj | AT <256KB | `MAX_TRAJECTORY_SNAPSHOT_BYTES=256_000` | Illimité | Tuning | Haute | Valider | attendue |
| **T-A2-D10** | Readiness foundation-only | Pas UI/T-A3 | Slice bornée + validation adversarial | Wiring session/decision | B5/R1 + activation future | Haute | **ACCEPT WITH RESERVE** | attendue |

## Schema gap notes

1. **Capitalization** n’est pas dans `CycleInstance.profile` enum — porté par `cycleTypeId`.
2. Pas de schema `CycleType` / knowledge package dédié — CKC via `CkcResolution` seulement.
3. Detail codes T-A2 hors enum `ErrorRecord.code` — mapping documenté.

## Hypothèses

- Mémoire suffisante pour tests / fondation
- Append LPS T-A1 étendu (linkage) reste compatible non-régression T-A1
- Justify Critical est une string non vide (pas de policy métier plus riche)

## Anti-claims

Pas MERGED · Pas T-A3 AUTHORIZED · Pas DATABASE SELECTED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED · Pas cutover · Pas Morris decision inventée

## Gate suivant

PR readiness (`GO PR READINESS … T-A2`) puis revue Morris sur PR. Merge uniquement via `GO MERGE PR T-A2` (non consommé). Puis `GO DELIVERY … T-A3` (non autorisé ici).

```

### `06-morris-validation-and-pr-readiness.md` (complet)

```markdown
# 06 — Morris validation and PR readiness

## Statut

| Champ | Valeur |
|-------|--------|
| **Implémentation** | COMPLETE (local commits) |
| **Validation adversarial** | COMPLETE — **PASSED AFTER CORRECTION** — findings in `07-…` |
| **Blockers B1 / B3 / B4 / E** | **CORRECTED** |
| **Réserves B5 / R1** | **OPEN** |
| **Tests T-A2** | **48** PASS |
| **HEAD validation tip** | `bdd39d51382d228d38c83fc2f6b60de18d64f7ad` |
| **Morris décisions T-A2-D01…D10** | **REQUIRED** — non consommées (recommandations agents uniquement) |
| **PR readiness** | Pack `08-pr-readiness.md` — gate `GO PR READINESS … T-A2` |
| **Merge** | **INTERDIT** ce cycle — gate `GO MERGE PR T-A2` non consommé |

## Checklist Morris

- [ ] Confirmer MATCH T-A2 Cycle/Trajectory/Epistemic/CKC
- [ ] Valider règles qualification (Critical justification, Light/Standard)
- [ ] Valider Capitalization = cycleTypeId (schema gap T-A2-D02)
- [ ] Valider Critical reste `proposed` (pas d’ack inventé)
- [ ] Valider trajectoire versionnée + LPS expectedVersion + mutex
- [ ] Valider refus promotion Hypothesis→DecisionRef
- [ ] Valider CKC absent = unavailable, pas d’invention, pas de blocage Create
- [ ] Valider corrections B1/B3/B4/E
- [ ] Accepter réserves OPEN B5/R1 (ou demander évolution LPS / atomicité)
- [ ] Valider anti-legacy / pas SQL / pas method / pas T-A3
- [ ] Décider T-A2-D01…D10 (candidates → décisions Morris)
- [ ] Autoriser (ou non) merge via gate dédié

## Verdict validation (exact)

**SFIA STUDIO V3-NATIVE OPTION A T-A2 VALIDATION PASSED AFTER CORRECTION — MORRIS DECISION REQUIRED**

## Verdict PR readiness (après création PR)

**SFIA STUDIO V3-NATIVE OPTION A T-A2 PR CREATED — MORRIS REVIEW REQUIRED**

Ne pas confondre avec `VALIDATED WITH RESERVES` / `VALIDATED BY MORRIS` — aucune décision Morris T-A2 n’est close sans source Git explicite.

```

### `07-validation-findings-and-morris-decision-pack.md` (complet)

```markdown
# 07 — Validation findings and Morris decision pack

| Field | Value |
|-------|-------|
| **Gate** | `GO VALIDATION DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A2` |
| **Date** | 2026-07-24 (Europe/Paris) |
| **HEAD start** | `633d46389f650c03a5d4c113fced41f106c2067b` |
| **HEAD final (validation)** | `bdd39d51382d228d38c83fc2f6b60de18d64f7ad` |
| **Scope** | Prove defects with adversarial tests; fix only proven T-A2-scoped defects |
| **Morris** | **NOT VALIDATED** — recommendations only |

## Evidence method

1. Baseline: `__tests__/oa/cycle` → **26 PASS**
2. Adversarial suite added → **7 FAIL** (proven defects) + 15 PASS
3. Fixes in `lib/oa/cycle/**` only
4. Final: `__tests__/oa/cycle` → **48 PASS**

## Findings

| ID | Title | Proven? | Blocker? | Fixed? | Evidence (test) |
|----|-------|---------|----------|--------|-----------------|
| **B1** | TOCTOU: validate then await then clone `request.steps` | Yes | Yes | Yes | `ignores cycle injected after clone-before-validate` / `ignores orphan dep injected after clone-before-validate` |
| **B3** | Orphan deps accepted (DFS skipped unknowns) | Yes | Yes | Yes | `rejects dependency pointing to non-existent stepId` |
| **B3b** | Self-deps | Already rejected via cycle DFS | No | N/A (explicit `self_dependency` added) | `rejects self-dependency` |
| **B4** | Propose `stale`/`superseded` orphans current pointer | Yes | Yes | Yes | `refuses stale status…` / `refuses superseded status on propose` |
| **CKC** | Hostile `executionAuthority:true` / invalid fallback | Already guarded | Yes if regress | Already fixed | `returns CKC_UNAVAILABLE when resolver grants…` / `…invalid fallbackPolicy` |
| **Q** | Qualification edges (Critical wins, Light→Standard, Critical justification, Capitalization) | Yes (already correct) | No | N/A | Qualification edges describe block |
| **R** | `failNextSave` cycle/trajectory/epistemic rollback | Yes (already correct) | No | N/A | failNextSave rollback describe block |
| **I** | Returned objects aliased into store | Epistemic + prior cycle/traj covered | No | N/A | Immutability + existing anti-aliasing |
| **C** | Concurrent propose same `expectedVersion` | Yes (already correct) | No | N/A | `one success and one TRAJECTORY_VERSION_CONFLICT…` |
| **Crit** | Critical stays `proposed`; `isMorrisDecision:false` | Yes (already correct) | No | N/A | `never auto-acks Critical…` |
| **E** | Same-id Hypothesis/Observation → DecisionRef overwrite | Yes | Yes | Yes | `forbids Hypothesis→DecisionRef via same-id…` / `forbids Observation→DecisionRef…` |
| **B5** | LPS `reservationIds` (etc.) carry-forward on T-A2 link | Investigated | No (T-A1 debt) | **OPEN RESERVE** | `documents that T-A2 trajectory link does not invent reservationIds API` |
| **R1** | Cross-store Project↔Cycle atomicity | Accepted | No | Reserve | Prior docs; no distributed txn invented |

## Fixes applied (T-A2 only)

1. **Clone-first** in `ProposeTrajectoryVersion` and `CreateInitialTrajectory` before validate/persist.
2. **Orphan + self dependency** rejection in `validateTrajectorySteps`.
3. **Propose status allowlist** `candidate|validated|active` via `validateProposeTrajectoryStatus`.
4. **Same-id promotion guard** in `assertNoHypothesisDecisionPromotion` (Hypothesis/Observation → DecisionRef).

## B5 / R1 reserves (not fixed here)

| ID | Reserve | Why not fixed in T-A2 |
|----|---------|------------------------|
| **B5 / R6** | T-A1 `AppendLivingProjectStateVersion` does not accept or carry `reservationIds` / `contradictionIds` / `evidenceIds` / … from current LPS | Fix requires T-A1 append core; T-A2 callers cannot overlay fields the API omits. Prefer OPEN RESERVE over T-A1 scope creep. |
| **R1** | No strict cross-store atomicity Project↔Cycle | Accepted foundation reserve; in-memory dual mutex only. |

## Recommended Morris decisions (candidates — not consumed)

| ID | Recommendation |
|----|----------------|
| **T-A2-D01** | **ACCEPT** — module isolation held under adversarial suite |
| **T-A2-D02** | **ACCEPT** — Capitalization via `cycleTypeId` confirmed |
| **T-A2-D03** | **ACCEPT** — qualification edges confirmed |
| **T-A2-D04** | **ACCEPT** — Critical stays `proposed` |
| **T-A2-D05** | **ACCEPT WITH RESERVE** — versioning + concurrency OK; B1/B3/B4 fixed; R1/B5 remain |
| **T-A2-D06** | **ACCEPT** — in-memory + ports; failNextSave rollback proven |
| **T-A2-D07** | **ACCEPT** — hostile CKC denied; absent CKC guidance-only |
| **T-A2-D08** | **ACCEPT** — detail codes + mapping unchanged; new causes under existing codes |
| **T-A2-D09** | **ACCEPT** — size cap unchanged |
| **T-A2-D10** | **ACCEPT WITH RESERVE** — foundation-only; B5/R1 reserves; no UI/T-A3 |

## Verdict (exact allowed string)

**SFIA STUDIO V3-NATIVE OPTION A T-A2 VALIDATION PASSED AFTER CORRECTION — MORRIS DECISION REQUIRED**

## Anti-claims

Pas MERGED · Pas Morris validated décisions · Pas T-A3 AUTHORIZED · Pas DATABASE SELECTED · Pas B5/R1 CLOSED · Pas `VALIDATED WITH RESERVES` comme claim Morris

PR readiness : voir [08-pr-readiness.md](./08-pr-readiness.md).

```

## Rollback strategy

Propose restored trajectory version; fail-closed memory rollback; LPS expectedVersion conflicts; product rollback = do not merge / revert PR; branch kept.

## Merge risks

R1 partial cross-store · B5 satellite drop · reviewer confuses technical validation with Morris decision · scope creep T-A3/UI

## Review focus

Transaction/concurrency · LPS linkage · B1/B3/B4/E · recommendation vs decision · Critical proposed · CKC no authority · immutable trajectory · epistemic promotion banned · B5/R1 OPEN

## Status discipline

- Validation technique PASSED AFTER CORRECTION
- Morris decisions still required
- Merge NOT authorized this cycle
- T-A3 NOT authorized

## Gate suivant (candidat, non consommé)

`GO MERGE PR T-A2`

## Verdict exact

**SFIA STUDIO V3-NATIVE OPTION A T-A2 PR CREATED — MORRIS REVIEW REQUIRED**
