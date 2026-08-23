# REVIEW PACK FULL — W2-G3 — A3 CANDIDATE REINSTRUCTION VERSIONING

Mono-cycle A3 FINAL MICRO-CORRECTION. Réinitialisé au début de ce cycle.
Delivery W2-G3 EABC + corrections A2 + A3 versioning restent **non commités** sur la branche projet.

---

## A. Metadata

| Field | Value |
|---|---|
| Timestamp (UTC) | 2026-08-23T07:58:37Z |
| Repo | mcleland147/sfia-workspace |
| Branch | `delivery/sfia-studio-w2-g3-umbrella-a` |
| HEAD | `3a86f8190deb34e37bede868a6e765b0440fc839` |
| origin/main | `3a86f8190deb34e37bede868a6e765b0440fc839` |
| Drift | NONE |
| Incoming handoff commit | `b0fbad1c7ad688813f080ea1a5d090055b641dd1` |
| Incoming handoff blob | `d4eafccd7a55fce26dabeb33427f243283aebbba` |
| Incoming verdict | A2 PASS / A3 STOP |
| Decision | **D-W2-A3-01 Candidate Reinstruction Versioning — ADOPTED BY MORRIS — CONSUMED** |
| Gates | Phase B OUT · Execute OUT · REAL OUT · Project Git OUT · C6 CLOSED · Runtime v3 NON ADOPTED |

---

## B. Local Git Truth

- Branch / HEAD / origin/main match expected.
- Staged: **empty**.
- Working tree: prior Delivery + A2 intact + this A3 delta.
- Out-of-scope preserved: `projects/eventops-poc/`, `projects/flex-office-demo/`.
- No reset / stash / destructive checkout.

---

## C. Decision consumed — D-W2-A3-01

### Semantics applied

1. Same ProjectTrajectory SoT (`same trajectoryId`).
2. Material OptionSet / qualification change → **new candidate version** (never reuse T@vN for Y).
3. Prior undecided candidate → `status=superseded`; payload (steps) immutable; `T@vN+1.supersedesTrajectoryVersion = vN`.
4. Candidate never updates `oa_project_trajectory_current`.
5. OCC on lineage HEAD `expectedVersion`; conflict → `TRAJECTORY_VERSION_CONFLICT`.
6. Atomic Product UoW: supersede + save next + LPS append.
7. Presented OptionSet X stays bound to old version; Y binds only to new version.
8. A2 remains authoritative for decide freshness.
9. No second SoT / engine / status / table / C6 reopen.

### Anti-claims

- A3 implemented ≠ W2 complete
- candidate version ≠ current
- Recommendation ≠ HD
- DETERMINISTIC ≠ REAL
- ≠ READY FOR PR / MERGE

---

## D. Inventory before implementation

| Concern | Prior behavior |
|---|---|
| `ProposeTrajectoryVersion` | Required **current** pointer; OCC on current.version only |
| W2 digest mismatch + no current | Reused same `trajectoryId@version`, Observation-only rebind (**A3 bug**) |
| `findById` | Prefers current pointer, so not sufficient alone as lineage HEAD when candidate is ahead of current |
| Port methods | `findCurrent`, `findByProjectAndVersion`, `findById`, `save`, `markSuperseded` — **sufficient** via probe |

**Port extension:** NONE. Lineage HEAD resolved with existing queries.

---

## E. Implementation

### E.1 Lineage HEAD resolution (`resolveTrajectoryLineageHead`)

Deterministic, server-side:

1. If `findCurrentByProjectId` → start there (must match `trajectoryId`).
2. Else `findById(trajectoryId)` (latest when no current).
3. Probe `findByProjectAndVersion(projectId, version+1…)` until gap.
4. Result = OCC base.

Covers:

- **CAS A** — no current, candidate v1 → head=v1 → mint v2.
- **CAS B** — current vN + undecided candidate vN+1 → head=vN+1 → mint vN+2 (no silent reuse of vN+1).

### E.2 `ProposeTrajectoryVersion` adaptation

- OCC: `expectedVersion === head.version` else `TRAJECTORY_VERSION_CONFLICT`.
- Refuse if `head.version+1` already exists (extra collision guard).
- Create `vN+1` with `supersedesTrajectoryVersion = head.version`.
- Supersede prior when:
  - proposing `validated|active` (existing), **or**
  - `head.status === "candidate"` (D-W2-A3-01).
- Proposing `candidate` from decided current: **does not** supersede current; current pointer unchanged.
- Candidate save never installs current (existing `shouldUpdateCurrentPointer`).
- All in existing Product UoW / cycle store transaction + LPS append.

### E.3 W2 `proposeTrajectoryOptions`

Removed fallback:

```
digest mismatch + no current → reuse same version
```

New:

1. Exact idempotence (same `optionSetDigest` **and** `qualificationDigest` on latest candidate) → reuse same version (A3-1).
2. Else if lineage exists → `proposeTrajectoryVersion` with `expectedVersion = latest.version`.
3. Else → `createInitialTrajectory` v1 candidate.
4. Observation supersede targets the **prior candidate version’s** OptionSet (not a silent trajectory rewrite).

### E.4 A2 intact

`decideTrajectory` still compares live `qualificationDigest` vs presented; mismatch → `OPTION_SET_STALE`.

---

## F. Cases

| Case | Result |
|---|---|
| No-current reinstruction (CAS A) | T@v1 superseded → T@v2 candidate; current=none |
| Current + first candidate (A3-7) | T@vN current preserved; T@vN+1 candidate |
| Current + reinstruct undecided candidate (CAS B / A3-8) | T@vN+1 superseded → T@vN+2 candidate; current stays vN |
| Exact idempotence | No artificial version bump |

**No STOP for lineage head** — CAS B satisfied without new repository contract.

---

## G. Tests

### A3 matrix

| ID | Result |
|---|---|
| A3-1 exact idempotence | PASS |
| A3-2 first candidate reinstruction | PASS |
| A3-3 old X refused | PASS (with A3-4) |
| A3-4 new Y decidable / selected steps | PASS |
| A3-5 history + restart | PASS |
| A3-6 OCC concurrency | PASS |
| A3-6b reinstruction atomicity (fail save) | PASS |
| A3-7 current then one candidate | PASS |
| A3-8 current + reinstruct undecided | PASS |

### Non-regression

| Suite | Result |
|---|---|
| A1 / A2 / A4 in `w2EabcDelivery` | PASS |
| `w2EabcDelivery` full | **23/23 PASS** |
| OA `cycleTrajectoryEpistemicCkc` | **22/22 PASS** |
| OA `w1TrajectoryDurability` | **3/3 PASS** |
| OA `adversarialValidation` | **22/22 PASS** |
| TrajectorySurface + labels + W1 CKC | **45/45 PASS** |
| Playwright `studio-w2-g3-correction-runtime.spec.ts` | **1/1 PASS** |
| In-scope tsc | clean |
| `git diff --check` (A3 files) | clean |

### Known pre-existing (non-blocking)

`uatUxSemanticReserves` Morris label mismatch — out of A3 diff; unchanged known reserve.

---

## H. Final consolidated diff

### This A3 pass — files touched

1. `projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts` — lineage HEAD OCC + candidate supersession
2. `projects/sfia-studio/app/lib/oa/cycle/index.ts` — export `resolveTrajectoryLineageHead`
3. `projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts` — remove unsafe reuse; wire version bump
4. `projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts` — A3-1…A3-8 (+6b)

### Prior Delivery / A2 (still untracked / modified, not reopened)

- Full `features/project-assistant/w2/*` including A2 `decideTrajectory`
- TrajectorySurface, OA promote/inspect/receipts, disclosures, e2e, harness
- Tracked delta vs origin/main: 36 files (+543/−88) from prior cycles

### Exploitable A3 delta summary

**Before:** material Y could bind to same T@vN as X when no current.
**After:** Y binds to T@vN+1; X’s candidate superseded; Observation X superseded; A2 still blocks stale decide.

Key helper excerpt:

```typescript
export async function resolveTrajectoryLineageHead(trajectories, projectId, trajectoryId) {
  const current = await trajectories.findCurrentByProjectId(projectId);
  let head = current && current.trajectoryId === trajectoryId
    ? current
    : await trajectories.findById(trajectoryId);
  // probe findByProjectAndVersion forward…
  return head;
}
```

Supersession rule excerpt:

```typescript
if (promotesEffectiveCurrent || head.status === "candidate") {
  await this.trajectories.markSuperseded(head.trajectoryId, head.version);
}
await this.trajectories.save(trajectory); // candidate → no current pointer
```

---

## I. Architecture proof

| Claim | Evidence |
|---|---|
| Same SoT | Same `trajectoryId` across X→Y |
| No second engine | Adapted `ProposeTrajectoryVersion` only |
| No new status | Uses existing `superseded` / `candidate` |
| No new table / port method | Probe via existing queries |
| Current pointer projection only | Candidate save does not update current |
| C6 CLOSED | No parallel Proposal domain |
| A2 intact | Live qualification digest check unchanged |

---

## J. Remaining gaps

- Phase B / Track D — not authorized
- Full W2 product exit — not claimed
- Confirmation multi-factor simplification — retained known
- REAL — OUT
- Figma visual fidelity — INCONCLUSIVE
- UAT Morris label reserve — pre-existing

---

## K. Git boundaries

- **No** project commit / push / PR / merge
- Handoff L3 only on `sfia/review-handoff`
- Return to `delivery/sfia-studio-w2-g3-umbrella-a` with Delivery intact

---

## L. Verdict

**READY FOR CHATGPT RE-REVIEW — W2-G3 A3 CANDIDATE REINSTRUCTION VERSIONING IMPLEMENTED**

---

## M. Instruction ChatGPT

Re-review A3 (CAS A + CAS B + OCC + A2 coexistence) before any project Git integration.
