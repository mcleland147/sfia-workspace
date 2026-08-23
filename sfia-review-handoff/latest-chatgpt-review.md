# REVIEW PACK FULL — W2-G3 — MICRO-CORRECTION A2+A3

Mono-cycle MICRO-CORRECTION. Réinitialisé au début de ce micro-pass.
Permet de revoir le DELTA A2/A3 et l’état consolidé Delivery + correction + micro-pass (toujours non commité sur la branche projet).

---

## A. Metadata

| Field | Value |
|---|---|
| Timestamp (UTC) | 2026-08-23T07:44:00Z |
| Repo | mcleland147/sfia-workspace |
| Branch | `delivery/sfia-studio-w2-g3-umbrella-a` |
| HEAD | `3a86f8190deb34e37bede868a6e765b0440fc839` |
| origin/main | `3a86f8190deb34e37bede868a6e765b0440fc839` |
| Drift vs origin/main | NONE (commit pointers identical) |
| Incoming handoff | W2-G3 E+A+B+C — CORRECTION PASS |
| Incoming handoff blob | `8f7719bc5addc3f9e40468178962726cc2dab246` |
| Gates | W2-G3 EABC CONSUMED · prior Correction CONSUMED · A2+A3 micro-correction CONSUMED · Track D / Phase B NOT CONSUMED · Execute OUT · REAL OUT · Project Git integration NOT AUTHORIZED · C6 CLOSED · Runtime v3 NON ADOPTED |

---

## B. Scope

### In scope (this micro-pass)

- **A2** — stale qualification enforcement at `decideTrajectory`
- **A3** — Stage 0 repository discovery + STOP (no invented versioning)
- Tests proving A2 + documenting A3 structural gap
- Non-regression A1/A4/B/C/E + Playwright `/studio`
- Review Pack FULL + L3 handoff publish only

### Explicit non-goals

- Track D / CKC Phase B
- Execute / Attempt / REAL
- Project commit / push / PR / merge
- New ProjectTrajectory SoT / parallel engine / new versioning policy
- C6 reopen
- UI redesign / Figma claims
- Redefinition of `computeQualificationDigest` matter

---

## C. Local Git Truth

### Initial (micro-pass start)

- Branch / HEAD / origin/main match expected `3a86f819…`
- Staged: empty
- Working tree: Delivery W2-G3 EABC + prior correction pass (uncommitted) intact
- Out-of-scope preserved: `projects/eventops-poc/`, `projects/flex-office-demo/`

### Tracked modified (consolidated Delivery+correction vs origin/main)

36 tracked files under `projects/sfia-studio/` (+543 / −88) — prior Delivery/correction; **not reopened** by this micro-pass except via non-regression.

### Untracked in-scope (Delivery + correction + micro)

- `projects/sfia-studio/app/features/project-assistant/w2/` (entire W2 product path)
- `projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts`
- `projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts`
- TrajectorySurface UI + OA promote/inspect/receipt files from prior Delivery/correction
- `.tmp-sfia-review/` (this pack)

### Untracked out-of-scope (preserved)

- `projects/eventops-poc/`
- `projects/flex-office-demo/`

### Files modified by THIS micro-pass only

1. `projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts` — A2 qualificationDigest live check
2. `projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts` — A2-1/2/5/6 + A3 Stage 0 evidence rewrite

**Not mutated for A3:** `proposeTrajectoryOptions.ts` (unsafe T@vN reuse path left as discovered evidence; no invented primitive).

---

## D. Stage 0 A3 Discovery — READ ONLY

### 1. Current semantics of inspected primitives

| Primitive | Semantics |
|---|---|
| `createInitialTrajectory` | Creates `trj:*` **v1** only. Fails if trajectoryId exists OR project already has a **current** pointer. Candidate status does **not** install current. |
| `proposeTrajectoryVersion` | Requires `findCurrentByProjectId`. OCC on `expectedVersion === current.version`. Writes `version = current.version + 1`. With `status: "candidate"`, does **not** mark prior current superseded / does **not** move current pointer. Appends LPS link to new version. |
| `markSuperseded` | Sets status=`superseded` on `(trajectoryId, version)` via save; used when propose installs validated/active. |
| `getCurrentTrajectory` | Reads `oa_project_trajectory_current` pointer only (validated/active). |
| `getTrajectoryVersion` | Reads durable row by projectId + version. |
| Repository uniqueness | PK `(trajectory_id, version)`. Current pointer updated only for `validated` \| `active`. |

### 2. Primitive for: candidate vN + OptionSet X → material change → distinct candidate → same SoT → no rewrite of vN → not current?

**Partial only:**

- **When a current trajectory exists:** `proposeTrajectoryVersion` already yields same `trajectoryId` + next version as candidate without rewriting the prior current payload. Compatible with C6 / D-W2-01 / D-W2-03 (reuse OA; ProjectTrajectory remains SoT; candidate ≠ current until HD+promote).
- **When only an undecided candidate exists (no current):** **NO** adopted primitive. `proposeTrajectoryVersion` fails with `TRAJECTORY_NOT_FOUND` / `missing_current_trajectory`. `createInitialTrajectory` cannot append vN+1 on the same id (id already exists) and must not mint a second trajectoryId as workaround.

### 3. Same trajectoryId + next distinct version naturally?

- **Yes** iff current pointer exists (`proposeTrajectoryVersion`).
- **No** for first undecided candidate reinstruction (primary W2 path before first HD).

### 4. Adopted candidate→candidate / candidate supersession rule?

**None** for undecided candidate without current. Supersession of prior current occurs only when proposing validated/active (or via promote path). Observation supersession exists in W2 epistemic layer but does **not** version the ProjectTrajectory candidate.

### 5. Existing primitive merely unwired by W2?

- **Wired when current exists** (propose path already calls `proposeTrajectoryVersion`).
- **Not merely unwired** for no-current + digest mismatch: the gap is in the **adopted OA model**, not a missing W2 call. Current W2 fallback (lines 220–224 of `proposeTrajectoryOptions.ts`) **reuses same trajectoryId + same candidateVersion** and only rebinds Observation — exactly the A3 blocker.

### Stage 0 conclusion

**STRUCTURAL DECISION REQUIRED**

`STOP — CANDIDATE REINSTRUCTION MODEL INSUFFICIENT — MORRIS STRUCTURAL DECISION REQUIRED`

A2 may proceed independently (done below). A3 not solved technically.

---

## E. A2 — Stale Qualification Enforcement — PASS

### Exact bug

Presented OptionSet already sealed `qualificationDigest`, but `decideTrajectory` accepted the presented set even after material qualification drift (e.g. new active Reservation changing digest / recommendation). Prior correction test even asserted decide X still PASS after drift.

### Correction

In `decideTrajectory`, after loading the exact durable presented set and verifying optionSetDigest integrity:

1. Resolve **current** qualification server-side via existing `resolveW2QualificationInputs` (no client matter).
2. Recompute `computeQualificationDigest` with the **same** contract used at propose.
3. Compare to `presented.qualificationDigest`.
4. On mismatch → `OPTION_SET_STALE`, **no HD**, **no promotion**, message requires réinstruction.
5. On match → proceed with the **presented** options only (no re-derivation of a substitute set Y).

### Digest owner / matter

Unchanged: `computeQualificationDigest` over cycleTypeId, recommendedProfile, criticalSignalsPresent, irreversible, reservations, ckcAttribution. No functional redefinition.

### Anti-rederive

Freshness check answers only: “Is presented X still valid for arbitration?” It never substitutes Y, never records HD as if Pilote saw Y.

### Code excerpt (micro-pass)

```typescript
const liveQualification = await resolveW2QualificationInputs({ oa, projectId: input.projectId });
// ...
const currentQualificationDigest = computeQualificationDigest({ ...liveQualification.qualification.inputs });
if (currentQualificationDigest !== presented.qualificationDigest) {
  return { ok: false, code: "OPTION_SET_STALE", message: "… réinstruction requise. Aucune décision enregistrée." };
}
```

### Tests A2

| ID | Result |
|---|---|
| A2-1 happy path unchanged → decide X → HD + current | PASS |
| A2-2 reservation drift → OPTION_SET_STALE · 0 accepted HD · no current | PASS |
| A2-3 profile/critical drift | not separately added (reservation path covers digest matter; profile change needs cycle rewrite outside micro-scope) |
| A2-4 CKC attribution ref drift | not separately added (would need Track D / LPS rewrite; digest already includes ckcAttribution) |
| A2-5 hostile client options/authority fields ignored; forged trajectory/missing set refused | PASS |
| A2-6 restart Product SQLite + durable drift still STALE | PASS |

**Verdict A2: PASS**

---

## F. A3 — Candidate Semantic Identity — STOP + Decision Pack

### Verdict

**STOP — CANDIDATE REINSTRUCTION MODEL INSUFFICIENT — MORRIS STRUCTURAL DECISION REQUIRED**

No technical A3 fix applied. Unsafe reuse path left as discovery evidence (not claimed fixed).

### Decision pack (Morris)

#### A. État actuel

- First propose without current → `createInitialTrajectory` → candidate T@v1 + OptionSet X Observation.
- Material digest mismatch without current → W2 currently reuses T@v1 and supersedes Observation only (`proposeTrajectoryOptions` fallback).
- `proposeTrajectoryVersion` cannot run without current.
- After a decided current exists, next propose already uses `proposeTrajectoryVersion` → T@vN+1 (sufficient for that subcase only).

#### B. Failure scenario

OptionSet X bound to T@vN → qualification drifts → OptionSet Y presented still claiming T@vN → candidate identity silently means X then Y → history dishonest; A2 stale on X helps decide-time but does not restore semantic identity of the candidate version.

#### C. Invariant cible

If Y’s optionSetDigest / qualificationDigest differs materially from X, Y must not bind to the same `(trajectoryId, version)` as X. Old candidate/version content must not be rewritten to mean Y. Same ProjectTrajectory SoT preferred; new distinct candidate version if model supports it.

#### D. Primitives disponibles

`createInitialTrajectory`, `proposeTrajectoryVersion` (requires current), `markSuperseded`, get current/version, Observation supersession.

#### E. Pourquoi insuffisantes

No adopted candidate→candidate version bump without current. Creating a second trajectoryId is forbidden as workaround. Rewriting T@vN is forbidden. Inventing `reproposeCandidateVersion` / new status / new table / new SoT would reopen C6 / structural model without Morris.

#### F. Options minimales de modèle (NON DÉCISIONNELLES — Cursor)

1. **Extend `ProposeTrajectoryVersion`** (or twin OA use case under existing SoT) to OCC against **latest undecided candidate** when no current — mint vN+1, leave vN immutable, do not install current.
2. **Product policy:** fail-closed reinstruction before first decision (refuse second propose until HD or explicit discard) — still needs Morris product rule; does not alone give distinct candidate versions.
3. **Adopt explicit candidate supersession rule** (status / supersedesTrajectoryVersion on candidate→candidate) under D-W2-01/03 — Morris framing required.
4. **Do not** mint second trajectoryId; **do not** reopen C6 with a parallel Proposal SoT.

#### G. Impacts

- W2 propose path before first HD blocked or reshaped depending on option.
- History honesty / audit of OptionSet↔candidate bindings.
- Possible LPS append semantics for candidate-only version bumps.
- Tests A3-1…A3-5 become implementable only after model choice.

#### H. Recommandation Cursor (non décisionnelle)

Prefer option **F.1** if Morris wants same SoT + natural version lineage without second id; otherwise choose an explicit fail-closed product rule (F.2) as interim. Do not invent outside adopted OA.

#### I. Fichiers potentiellement concernés (après décision Morris)

- `lib/oa/cycle/application/proposeTrajectoryVersion.ts` (or new adopted twin)
- `features/project-assistant/w2/proposeTrajectoryOptions.ts`
- trajectory repository / invariants / tests OA + `w2EabcDelivery.test.ts`

#### J. C6

**C6 remains CLOSED** until Morris decides otherwise. No parallel architecture introduced in this micro-pass.

### A3 evidence test

`A3 — Stage 0 evidence: material digests reinstruction reuses T@vN (model insufficient)` — proves second propose reuses same id/version AND `proposeTrajectoryVersion` without current returns `TRAJECTORY_NOT_FOUND`.

---

## G. Non-regressions

### A1

Selecting non-recommended option still seals selected option steps on decided/current (`proposes a candidate… then promotes only after Pilote HD`). PASS in suite.

### A4

`A4 — HD+promote share one Product UoW` — promote fault → 0 accepted HD → no current → recover decide PASS.

### B/C/E (suite w2EabcDelivery)

- Recommendation `source === optionSetRef` (not CKC as semantic cause) — covered in A2-1 epistemic check + prior Track B.
- Phase B disclosure `NOT_AUTHORIZED_NOT_IMPLEMENTED` — Track E disclosure test PASS.
- Inspection / Confirmation / AUTHORIZED / STOP before Execute / no Attempt — remaining suite cases PASS (16/16).
- Playwright `/studio` correction path PASS (see H).

Pre-existing out-of-scope UI fail (not aggravated by A2/A3):

- `uatUxSemanticReserves.ui.test.tsx` — expects `/Morris/` on confirmation summary; UI shows “autorité structurante”. Prior Delivery text drift; **not** touched by this micro-pass.

---

## H. Tests

### Commands & counts

| Command | Result |
|---|---|
| `npx vitest run __tests__/project-assistant/w2EabcDelivery.test.ts` | **16 passed / 16** |
| OA trajectory: `cycleTrajectoryEpistemicCkc` + `w1TrajectoryDurability` | **25 passed / 25** |
| Adjacent UI/W2 batch (9 files) | **87 passed**, **1 failed** (`uatUxSemanticReserves` pre-existing) |
| `npx playwright test e2e/studio-w2-g3-correction-runtime.spec.ts` | **1 passed / 1** (~7.4s) |
| In-scope `tsc` filter on A2/A3 paths | **NO_IN_SCOPE_TSC_ERRORS** |
| Full `tsc` | FinOps/`pg` pre-existing errors only |
| `git diff --check` (micro files) | clean |

### Restart

A2-6 PASS (SQLite reopen detects durable qualification drift).

### Playwright

Canonical `/studio` Options → HD → EC inspect → STOP BEFORE EXECUTE — PASS. No Execute. Visual Figma: INCONCLUSIVE / non-blocking (unchanged).

---

## I. Final diff

### Distinction

| Layer | Status |
|---|---|
| Prior Delivery EABC + Correction Pass | Intact, uncommitted |
| Micro-pass A2 | Applied in `decideTrajectory.ts` + tests |
| Micro-pass A3 | STOP only — Stage 0 evidence test; no propose rewrite |

### Consolidated vs origin/main

- Tracked: 36 files, +543/−88 (prior Delivery/correction)
- Untracked W2 tree + tests + e2e + OA promote/inspect (full product path still local)

### Micro-pass modified content (reviewable)

**`decideTrajectory.ts`** — added import of `computeQualificationDigest` + `resolveW2QualificationInputs`; after optionSetDigest seal check, live qualification digest compare → `OPTION_SET_STALE`.

**`w2EabcDelivery.test.ts`** — replaced incorrect “decide after drift PASS” A2 with A2-1/2/5/6; rewrote A3 as Stage 0 insufficiency evidence (reuse T@vN + proposeVersion without current fails).

### Remaining A3 risk in tree

`proposeTrajectoryOptions.ts` lines 220–224 still reuse T@vN on digest mismatch without current. **Known / intentional non-fix pending Morris.** A2 blocks deciding a stale X after drift even if that path runs.

---

## J. Architecture

| Item | Status |
|---|---|
| OA KEEP | YES |
| Product SQLite KEEP | YES |
| ProjectTrajectory unique SoT | YES |
| No second SoT / parallel engine | YES |
| C6 | CLOSED |
| Runtime v3 | NON ADOPTED |

---

## K. Remaining gaps

- **A3 structural model** — blocking for honest candidate reinstruction before first HD
- Phase B / Track D — not consumed
- W2 final exit — not claimed
- Confirmation known simplification (EC lifecycle) — retained from prior correction
- REAL — OUT
- Visual Figma fidelity — INCONCLUSIVE
- Pre-existing UAT-UX Morris label drift — out of micro-scope

---

## L. Git

- **No** project `git add` / commit / push / PR / merge
- Handoff L3 only on `sfia/review-handoff` (see publication section after publish)
- Return to branch `delivery/sfia-studio-w2-g3-umbrella-a` with local Delivery intact

---

## M. Verdict (this micro-cycle)

**A2: PASS**

**A3: STOP — CANDIDATE REINSTRUCTION MODEL INSUFFICIENT — MORRIS STRUCTURAL DECISION REQUIRED**

Combined cycle verdict for ChatGPT:

**STOP — CANDIDATE REINSTRUCTION MODEL INSUFFICIENT — MORRIS STRUCTURAL DECISION REQUIRED**

(with A2 micro-correction applied and reviewable; A3 not claimed fixed)

---

## N. Instruction ChatGPT

1. Re-review A2 qualification stale enforcement.
2. Confirm Stage 0 A3 discovery and decision pack; **do not** treat T@vN reuse as acceptable.
3. Morris must choose a candidate reinstruction model before any further A3 implementation.
4. No project Git integration until A3 model decision + subsequent delivery GO.
