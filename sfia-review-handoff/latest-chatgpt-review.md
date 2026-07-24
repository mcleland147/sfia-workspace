# ChatGPT Review Pack — FULL

## META

| Champ | Valeur |
|-------|--------|
| **Date/heure Europe/Paris** | 2026-07-24 14:47:40 CEST (+0200) |
| **Cycle** | Validation Option A T-A3 — Decision / Confirmation / Authority |
| **Profil** | Critical |
| **Gate consommé** | `GO VALIDATION DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A3` |
| **Repo** | `mcleland147/sfia-workspace` |
| **origin/main** | `5f5c6161063e11065aaf5be74d8181ee2c2eeaea` — Merge PR #263 (T-A2) |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority` |
| **HEAD initial expected** | `a71f0b44ee980092b93a7a06e505df60a66d07fb` |
| **HEAD initial observed** | `a71f0b44ee980092b93a7a06e505df60a66d07fb` — MATCH |
| **HEAD final** | `7afd12a76e4450451e1a84a5f0add16eac5c222f` |
| **merge-base(HEAD, origin/main)** | `5f5c6161063e11065aaf5be74d8181ee2c2eeaea` |
| **Status / staged / untracked** | clean tracked tree; untracked `.tmp-sfia-review/` only (local evidence; not committed) |
| **Handoff SOURCE consumed** | blob `2f32d62c24a60c762fa4407acd7c2e96add802ed` / commit `c1032e501849fc8d28be5471cf0325c06b6e6e55` (delivery handoff — T-A3 FOUNDATION IMPLEMENTED) |
| **Tech WT** | `/Users/morris/Projects/sfia-workspace-v3-native-option-a-tech` |
| **Handoff WT** | `/Users/morris/Projects/sfia-workspace/sfia-review-handoff` |
| **Main checkout** | `/Users/morris/Projects/sfia-workspace` |
| **Push / PR / merge projet** | **NONE** |
| **T-A4 / DATABASE SELECTED / package.json / method/** / modeled schema edits / SQL** | **NONE** |
| **Niveau** | FULL |

## VERDICT

**SFIA STUDIO V3-NATIVE OPTION A T-A3 VALIDATION PASSED AFTER CORRECTION — MORRIS DECISION REQUIRED**

Blockers B1–B4 **proven + fixed**. Reserves B5 / R1 / R-T-A3-* remain OPEN (not closed).

## Truth Check

| Check | Résultat |
|-------|----------|
| Date Europe/Paris | 2026-07-24 14:47:40 CEST (+0200) — PASS |
| Gate | `GO VALIDATION DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A3` — PASS |
| origin/main | `5f5c616…` — MATCH |
| Branche | `delivery/sfia-studio-v3-native-option-a-t-a3-decision-confirmation-authority` — PASS |
| HEAD initial expected | `a71f0b4…` — MATCH observed |
| Delivery commits present (not rewritten) | `6d2c4af` feat · `5e699e9` test · `a71f0b4` docs — PASS |
| Correction chain | `f1cf170` fix → `5d988dd` adversarial tests → `7afd12a` findings — PASS |
| merge-base | = origin/main `5f5c616…` — PASS |
| Ancestor of `5f5c616` | YES — PASS |
| Diff validation `a71f0b4..HEAD` | **11 files**, **+1195 / −163** — PASS |
| Diff final vs origin/main `5f5c616..HEAD` | **37 files**, **+5871 / −1** — PASS |
| Handoff source blob | `2f32d62c…` type `blob` on `c1032e5` — PASS |
| Concurrent project PR / push | NONE — PASS |
| Working tree | only untracked `.tmp-sfia-review/` — PASS |

**Truth Check verdict:** **PASS**

## Handoff source consumed

- Branch `origin/sfia/review-handoff` commit **`c1032e501849fc8d28be5471cf0325c06b6e6e55`**
- Path `sfia-review-handoff/latest-chatgpt-review.md`
- Blob **`2f32d62c24a60c762fa4407acd7c2e96add802ed`**
- Content class: **Delivery** review pack (verdict `…FOUNDATION IMPLEMENTED — MORRIS VALIDATION REQUIRED`)
- This validation pack **supersedes** that delivery handoff for Morris/ChatGPT decision; it does **not** rewrite the delivery commit chain `a71f0b4`.

## CKC (for this validation cycle)

Not in T-A3 scope. T-A2 CKC foundation remains; T-A3 does not mutate CKC resolver. Critical cycle stays `proposed` when a decision links a cycle (**R-T-A3-1**).

## Sources consulted

- `lib/oa/decision/**` (application + infrastructure)
- `__tests__/oa/decision/**` (foundation + delivery adversarial + validation adversarial + anti-legacy)
- `sfia-v3-delivery/.../t-a3-decision-confirmation-authority/**` (01–07)
- Prior delivery handoff blob `2f32d62c…`
- Exploration blockers B1–B4 (TOCTOU, refuse/cancel race, dual supersede, silent links)

## Canonical T-A3 definition

Foundation slice for `HumanDecision`, `Confirmation` (N1/N2/N3), `AuthorityResolverPort`:

- Dual enums: Decision.authority (`morris|delegated|system_non_structuring`) vs Confirmation.level (`N1|N2|N3`)
- Morris gate = verified N3 **and** `canActAsMorris` (never invent from displayName/actorId)
- One accepted decision per subject; supersede = immutable history
- In-memory store + ports; failNextSave rollback; audit events
- Optional LPS `decisionIds` + Epistemic `DecisionRef` via public T-A1/T-A2 APIs only

## Scope / Out of scope

| In scope (validation) | Out of scope (respected) |
|-----------------------|--------------------------|
| Prove B1–B4 with adversarial tests | Modeled schema / method / package.json edits |
| Fix only `lib/oa/decision/**` | UI / Execution / Evidence / ReviewBundle |
| Docs pack §07 + README/05/06/04 | T-A4 |
| Review pack FULL + handoff publish | Project push / PR / merge |
| Evidence freeze / actor mismatch tests | Closing B5 / R1 / R-T-A3-* without Morris |
| | Rewrite delivery commits `a71f0b4` chain |

## Diff initial (delivery HEAD a71f0b4)

Delivery at start: **35 files** under `5f5c616..a71f0b4` (feat+test+docs). Validation starts clean at `a71f0b4`.

## Architecture (post-correction)

### Module

`projects/sfia-studio/app/lib/oa/decision/`

- `domain/` types · errors · invariants (clone arrays)
- `application/` Record / Get / List / Request / Grant / Refuse / Consume / Cancel / Supersede / Verify
- `ports/` DecisionRepo · ConfirmationRepo · AuthorityResolver · Audit
- `infrastructure/` MemoryDecisionStore (mutex + snapshot txn) · repos · MemoryAuthorityResolver (immutable register) · observability

### Authority

- Registry `AuthorityEvidence` with optional `canActAsMorris`
- **N3 ≠ Morris gate**
- NEVER trusts client `authorityLevel` / `displayName`
- Re-register same `evidenceId` → throws `evidence_immutable`
- actorId vs evidence mismatch → `actor_mismatch` → `AUTHORITY_DENIED`

### Integration T-A1 / T-A2

- Require project via `getProject`
- Optional cycle: GetCycle + same projectId; **does not mutate** Critical `proposed` (**R-T-A3-1**)
- After accept: optional Epistemic DecisionRef / LPS decisionIds — **fail-closed when requested** (B4)

## Decision domain (post B1)

`RecordHumanDecision` / `SupersedeHumanDecision` snapshot authority, actor, selectedOptionId, status, nonStructuring, subject, scope **before any await**; persist only snapshots.

## Confirmation domain (post B2)

- Grant / Consume: re-load under txn (already)
- Refuse: re-load; only `requested` → `refused`
- Cancel: re-load; only `requested`\|`granted` → `cancelled`
- Concurrent grant+refuse: one wins; refuse cannot overwrite grant

## Supersession (post B3)

Inside txn: `current.status === expectedPreStatus` and supersedable; concurrent second supersede → `STATE_CONFLICT`; at most one accepted successor per subject.

## Link fail-closed (post B4)

When `linkToLivingProjectState` / `linkEpistemicDecisionRef` requested and fails:

1. Compensate: supersede orphan decision in decision store
2. Return `LPS_VERSION_CONFLICT` or `PERSISTENCE_FAILURE`
3. Residual orphan only if compensate fails → **R-T-A3-2**

## Immutability / anti-aliasing

structuredClone on returns; clone-before-validate arrays; B1 scalar snapshots; evidence register immutable.

## Repositories / transactions / mutex

Single `MemoryDecisionStore` promise mutex + begin/commit/rollback. Cross-store Decision↔LPS/Epistemic: no distributed txn (**R-T-A3-2**); fail-closed + compensate.

## Errors matrix + retryability

| detailCode | Modeled | Notes |
|------------|---------|-------|
| AUTHORITY_DENIED / AUTHORITY_SCOPE_MISMATCH | AUTHORITY_DENIED | scope mapped |
| STATE_CONFLICT | STATE_CONFLICT | refuse/cancel/supersede races |
| VERSION_CONFLICT / LPS_VERSION_CONFLICT | STATE_CONFLICT | retryable |
| PERSISTENCE_FAILURE | STATE_CONFLICT | link fail / txn fail |

## Provenance / security

Hostile authorityLevel/displayName ignored; TOCTOU mutations ignored post-snapshot; no prototype pollution vectors added.

## Observability

Audit: `oa.authority.verified`, `oa.decision.recorded|superseded`, `oa.confirmation.*`.

## Performance

In-memory only; mutex serializes concurrent grant/supersede; no DB.

## Tests before / after

| Suite | Before (delivery) | After (validation) |
|-------|-------------------|--------------------|
| `__tests__/oa/decision` | **38** | **50** (+12) |
| `__tests__/oa/cycle` | 48 | **48** |
| `__tests__/oa/project` | 30 | **30** |
| `__tests__/oa/doctrine` | 28 | **28** |
| platform + fixtures | 10 | **10** |
| **Total matrix** | 154 | **166** |

New suite: `__tests__/oa/decision/validationAdversarial.test.ts` (12).

## Typecheck lint build diff-check

| Gate | Result |
|------|--------|
| `npx tsc --noEmit` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `git diff --check` | PASS |
| secrets / SQL / package.json / modeled / method / legacy ops1 imports | NONE touched |

## Findings blockers (B1–B4) with proof

| ID | Title | Proven? | Fixed? | Evidence |
|----|-------|---------|--------|----------|
| **B1** | TOCTOU authority/actor/selectedOptionId/status/subject/scope after await | Yes | Yes | `ignores authority/selectedOptionId/actor mutated after await starts` · supersede variant |
| **B2** | Refuse/cancel overwrite grant (stale outside txn) | Yes | Yes | `concurrent grant+refuse…` · `refuse after grant` · `cancel after consume` |
| **B3** | Concurrent supersede dual-accepted | Yes | Yes | `concurrent supersede… one accepted successor` · `refuses supersede of already superseded` |
| **B4** | Silent LPS/epistemic link failures | Yes | Yes | LPS version conflict fail-closed + compensate · missing expectedLpsVersion · success path |
| **E** | actorId/evidence mismatch + escalate canActAsMorris | Guard + freeze | Yes | mismatch denied · `evidence_immutable` |

## Findings non-blocking / reserves

| ID | Status |
|----|--------|
| **B5** | OPEN — T-A1 satellite ids beyond decisionIds |
| **R1** | OPEN — cross-store Project↔Cycle atomicity |
| **R-T-A3-1** | OPEN — no public Critical acknowledge |
| **R-T-A3-2** | OPEN residual — compensate failure edge |
| **R-T-A3-3** | OPEN — in-memory authority |
| **R-T-A3-4** | OPEN — scope detail → AUTHORITY_DENIED |

## Corrections complete

1. **B1** — `recordHumanDecision.ts` / `supersedeHumanDecision.ts`: snapshot before await
2. **B2** — `refuseConfirmation.ts` / `cancelConfirmation.ts`: re-load under txn
3. **B3** — `supersedeHumanDecision.ts`: expectedPreStatus + supersedable + single accepted
4. **B4** — `recordHumanDecision.ts`: fail-closed links + compensate supersede
5. **Evidence** — `memoryAuthorityResolver.ts`: immutable register

## Files created/modified/deleted

### Created

- `app/__tests__/oa/decision/validationAdversarial.test.ts`
- `sfia-v3-delivery/.../t-a3-.../07-validation-findings-and-morris-decision-pack.md`

### Modified

- `app/lib/oa/decision/application/{recordHumanDecision,supersedeHumanDecision,refuseConfirmation,cancelConfirmation}.ts`
- `app/lib/oa/decision/infrastructure/memoryAuthorityResolver.ts`
- `sfia-v3-delivery/.../t-a3-.../{README,04,05,06}.md`

### Deleted

- none

## Protected files untouched

- `method/**` · modeled schemas · `package.json` · T-A4 · control-tower · main WT `.tmp-sfia-review/`

## Diff final

| Range | Files | +/- |
|-------|-------|-----|
| `a71f0b4..HEAD` (validation only) | 11 | +1195 / −163 |
| `5f5c616..HEAD` (delivery+validation) | 37 | +5871 / −1 |

## Correction commits

| SHA | Message |
|-----|---------|
| `f1cf170f0995560e638ef45355ea88f39424ac7f` | fix(sfia-studio): correct T-A3 validation findings |
| `5d988dda0cc467a07d273726ea6f2b0929f9aaf6` | test(sfia-studio): strengthen T-A3 adversarial validation |
| `7afd12a76e4450451e1a84a5f0add16eac5c222f` | docs(sfia-studio): record T-A3 validation findings |

Delivery chain `6d2c4af` → `5e699e9` → `a71f0b4` **not rewritten**.

## Decisions T-A3-D01..D10 (Morris open)

| ID | Recommendation |
|----|----------------|
| **T-A3-D01** | **ACCEPT** — Dual enums |
| **T-A3-D02** | **ACCEPT** — Morris gate N3 + canActAsMorris |
| **T-A3-D03** | **ACCEPT** — Never trust client authorityLevel/displayName; B1 snapshots |
| **T-A3-D04** | **ACCEPT** — One accepted per subject; B3 fixed |
| **T-A3-D05** | **ACCEPT** — Supersede immutable history |
| **T-A3-D06** | **ACCEPT WITH RESERVE** — In-memory authority + immutable register (R-T-A3-3) |
| **T-A3-D07** | **ACCEPT WITH RESERVE** — Critical stays proposed (R-T-A3-1) |
| **T-A3-D08** | **ACCEPT** — LPS decisionIds; B5 remains |
| **T-A3-D09** | **ACCEPT WITH RESERVE** — Detail mapping; B4 fail-closed (R-T-A3-4) |
| **T-A3-D10** | **ACCEPT WITH RESERVE** — Foundation-only; R1 / R-T-A3-2 |

## Reserves / Debt / Anti-claims

Pas MERGED · Pas Morris validated · Pas T-A4 AUTHORIZED · Pas DATABASE SELECTED · Pas B5/R1/R-T-A3-* CLOSED · Pas `VALIDATED WITH RESERVES` · Pas push/PR

## Working tree final

Tracked clean. Untracked: `.tmp-sfia-review/chatgpt-review.md` (this pack; published via handoff script).

## Push/PR/merge/T-A4 = NONE

Project branch **not** pushed. Handoff branch `sfia/review-handoff` only (Validation pack).

## Verdict exact (allowed string)

**SFIA STUDIO V3-NATIVE OPTION A T-A3 VALIDATION PASSED AFTER CORRECTION — MORRIS DECISION REQUIRED**
