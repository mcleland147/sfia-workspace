# ChatGPT Review Pack — PRODUCT JOURNEY PROJECTION COHERENCE
## RepositoryBinding projection + Decision-Subject CTA precedence

| Field | Value |
| --- | --- |
| **A. Timestamp** | 2026-09-15 22:10 CEST (Europe/Paris) |
| **Cycle** | 8 — Delivery / implementation |
| **Typology** | RUN |
| **Profile** | CRITICAL |
| **Repository** | `mcleland147/sfia-workspace` |
| **B. Git Truth — origin/main base** | `3166fbc141dbd387f67b6d1d0e0424c881b97df6` (Merge PR #489) |
| **Branch (local only)** | `fix/sfia-studio-product-projection-coherence` |
| **Worktree** | `/Users/morris/Projects/sfia-studio-product-projection-coherence` |
| **Product commit** | NONE |
| **Product push / PR / merge** | NONE |
| **Input Review Handoff** | `sfia/review-handoff` @ `7923e2cc` · blob `bafba2a8a2cf9022d5a872f2cfa3a0f3ca9657e8` |
| **Input authenticated preflight** | PRODUCT-JOURNEY-AUTHENTICATED-PREFLIGHT-02 |
| **Input preflight verdict** | MANUAL REPROOF BLOCKED — AUTHENTICATED PRODUCT PROJECTION INCOHERENT |

---

## C. Morris GO consumed

Authorized:

- dedicated local branch/worktree from exact current main `3166fbc1…`;
- RepositoryBinding projection repair;
- Decision Subject CTA-precedence propagation;
- directly related deterministic tests;
- full local validation;
- FULL Review Pack;
- Review Handoff publication (L3).

Not authorized / not done:

- dogfood Product mutation / UI business interaction;
- OpenAI LIVE; Cursor REAL; docs_write REAL;
- Product source commit / push / PR / merge;
- DB migration / seed / binding resave on historical state.

---

## D. Cycle / profile / SFIA qualification

- **Cycle:** 8 — Delivery
- **Profile:** Critical — authenticated Product UI contradicted durable Project truth and offered competing Nora/intention subjects immediately before Proposal → HD → EC Inspect.
- **Capability served:** V3-F02 (truthful durable LPS/projection) + V3-F04 (explicit Decision Subject ownership).
- **Downstream preserved:** V3-F11/F12 ExecutionContract/authority — not exercised.
- **CKC:** absent for Delivery pilot → fallback to routing + v2.6 method + Studio convergence sources. No execution authority derived.

---

## E. Convergence / trajectory link

Continues Product Journey Lot A/B (PR #488) + Fake provider natural materialization (PR #489) toward authenticated manual Product reproof readiness. Does **not** claim authenticated manual reproof passed, Nora REAL, Gate D ready, or runtime v3 ADOPTED.

---

## F. Authenticated preflight blocker evidence

From PRODUCT-JOURNEY-AUTHENTICATED-PREFLIGHT-02 (handoff `7923e2cc` / blob `bafba2a8…`):

**Gap A — RepositoryBinding**

Durable Product truth:

- provider: `github`
- identity: `mcleland147/sfia-workspace`
- remoteUrl: `https://github.com/mcleland147/sfia-workspace.git`
- defaultBranch: `main`
- pathRoot: `projects/sfia-studio/.sandbox`

UI showed: « Aucun binding configuré » with empty fields.

**Gap B — Decision Subject / generic CTA precedence**

Durable subject: pending Proposal `prop:f2:4a90b644-3eb7-43b8-9e83-b140cfeb9a9c`, `proposalSnapshot` ABSENT → CASE A « Reformuler avec Nora ».

Also visible competing generics:

- Recovery « Repartir d'une nouvelle intention… »
- Lifecycle « Définir le livrable avec Nora »

---

## G. Gap A root cause

OA `Project` already carries `repositoryBinding`.
`LocalProjectComposition.buildProjection(project, lps)` receives that Project.
`LocalProjectCreationView` omitted `repositoryBinding`.
`RuntimeProjectState` already models it.
`toRuntimeProjectState(view)` therefore could not project it.
`RepositoryBindingForm` already renders correctly when `getProjectRuntimeAction` returns a binding.

**Projection loss**, not persistence defect. No second binding store. No SQLite UI read.

---

## H. Exact RepositoryBinding projection design

Canonical chain restored:

```
OA Project.repositoryBinding
  → LocalProjectCreationView.repositoryBinding (ProjectRepositoryBinding | null)
  → toRuntimeProjectState → RuntimeProjectState.repositoryBinding
  → getProjectRuntimeAction
  → RepositoryBindingForm
```

- Reuses exported `ProjectRepositoryBinding` (no divergent schema).
- Absent → `null` (honest unbound).
- Fields preserved: provider, identity, remoteUrl, defaultBranch, pathRoot, baseSha.
- Immutable freeze conventions preserved.
- `service.ts` / `actions.ts` / `RepositoryBindingForm.tsx` KEEP.

---

## I. Binding production diffs

### `types.ts`

- Import `ProjectRepositoryBinding`.
- Add `readonly repositoryBinding: ProjectRepositoryBinding | null` on `LocalProjectCreationView`.

### `localProjectComposition.ts`

- `projectRepositoryBindingProjection(project)` copies durable binding (or `null`).
- `buildProjection` includes `repositoryBinding`.
- `freezeView` freezes binding object when present.

### `mapping.ts`

- `toRuntimeProjectState` carries binding into `RuntimeProjectState.repositoryBinding` (frozen object or `null`).

---

## J. Binding test diffs

| File | Change |
| --- | --- |
| `__tests__/vertical-slice-runtime/repositoryBindingProjection.d0.test.ts` | **NEW** — B1–B6 application-path: create → setBinding → `getProject` exact match incl. pathRoot/baseSha; unbound stays null; no acme/widget |
| `__tests__/vertical-slice-core/localProjectComposition.test.ts` | Expect `repositoryBinding: null` on create projection |
| `__tests__/pre-m6-product-ui/repositoryBindingForm.ui.test.tsx` | KEEP — non-regression B7–B9 |

---

## K. Runtime application-path binding proof

Isolated temp Product SQLite (not dogfood):

1. `createRuntimeApplicationService({ productDbPath: temp })`
2. `createProject`
3. assert `getProject(...).repositoryBinding === null`
4. `setProjectRepositoryBinding` with authenticated preflight values + valid `baseSha`
5. `getProject` returns exact:

```json
{
  "provider": "github",
  "identity": "mcleland147/sfia-workspace",
  "remoteUrl": "https://github.com/mcleland147/sfia-workspace.git",
  "defaultBranch": "main",
  "pathRoot": "projects/sfia-studio/.sandbox",
  "baseSha": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
}
```

Result: **PASS** (2/2 in `repositoryBindingProjection.d0.test.ts`).

---

## L. RepositoryBindingForm non-regression

Existing UI tests still green (5/5): empty unbound fields, durable load, no acme/widget, read-failure fail-closed, save+reread path unchanged. Form still reads only via `getProjectRuntimeAction`.

---

## M. Gap B root cause

`TrajectorySurface` already computes `proposalSubjectOwnsNextAction` and suppresses generic W2 instruct CTA. Ownership was **not** propagated to Recovery / Lifecycle sibling generics → competing Nora/intention subjects in CASE A.

No second Decision Subject engine. No duplicate Proposal lookup in Recovery/Lifecycle.

---

## N. Exact ownership propagation design

```
TrajectorySurface
  subjectReadStatus: pending | ready | error
  proposalSubjectOwnsNextAction (existing)
  → onProposalSubjectOwnershipChange("UNKNOWN" | "OWNED" | "NONE")
ProjectWorkspacePage
  proposalSubjectOwnership state (initial UNKNOWN)
  suppressGenericIntentionCta = UNKNOWN || OWNED
  → RecoverySurface.suppressGenericIntentionCta
  → LifecycleSurface.suppressGenericNoraCta
```

---

## O. Fail-closed initial/read-error semantics

| Subject read | Ownership signal | Generic Nora/intention CTAs |
| --- | --- | --- |
| before first resolve / pending re-read | `UNKNOWN` | suppressed |
| read error | `UNKNOWN` | suppressed |
| pending_reinstruction / options awaiting HD / pursue-PREPARE / contract | `OWNED` | suppressed |
| successful read, no Proposal-owned next action | `NONE` | existing Recovery/Lifecycle behavior |

---

## P. Recovery diff

- New prop `suppressGenericIntentionCta`.
- When true: hide `recovery-requalify`; keep `recovery-resume-durable`.
- Copy adjusted so it does not recommend starting a new intention while suppressed.

---

## Q. Lifecycle diff

- New prop `suppressGenericNoraCta`.
- When true and artifact continuation applies: keep livrable facts block; hide `lifecycle-define-deliverable-cta`; non-mutating guidance to active trajectory subject.

---

## R. Trajectory / parent wiring diff

- `TrajectorySurface`: `subjectReadStatus`, ownership `useEffect`, new callback prop.
- `ProjectWorkspacePage`: ownership state + suppress wiring to Recovery + Lifecycle + Trajectory callback.

---

## S. Cross-surface CASE A proof

`__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx` (NEW) renders **actual** `ProjectWorkspacePage` with mocked server boundaries:

**CTA-1 CASE A** (pending unrecoverable Proposal + artifact-missing lifecycle + livingState v2 recovery):

| Control | Expected | Observed |
| --- | --- | --- |
| `w2-reformulate-with-nora` | VISIBLE | PASS |
| `w2-propose-options` | ABSENT | PASS |
| PREPARE / Execute | ABSENT | PASS |
| `recovery-requalify` | ABSENT | PASS |
| `lifecycle-define-deliverable-cta` | ABSENT | PASS |
| `recovery-resume-durable` | may remain | PASS |
| binding identity fields | durable values | PASS |

**CTA-5** kind `none` → Recovery requalify + Lifecycle Nora CTA restored — PASS.
**CTA-6** read error → generics fail-closed — PASS.

---

## T. Generic no-subject non-regression

- CTA-5 composition proof above.
- Recovery default (no suppress) still shows requalify (`w1RecoveryFoundation`).
- Lifecycle without suppress still shows define-deliverable CTA.

---

## U. CORR-PROOF-10/11 + Lot A/B regressions

| Suite | Result |
| --- | --- |
| `corrProof10.decisionContextContinuity.d0.test.ts` | 45 passed |
| `corrProof11.reinstructionPilotLanguage.d0.test.ts` | 18 passed |
| `productProofJourneyIntegrity.d0.test.ts` | 13 passed |
| `productProofJourneyIntegrity.applicationPath.d0.test.ts` | 6 passed |
| `trajectorySurface.ui.test.tsx` (incl. ownership callbacks) | 21 passed |

---

## V. Focused validation

Command (worktree, local `vitest`):

```
vitest run \
  __tests__/vertical-slice-runtime/repositoryBindingProjection.d0.test.ts \
  __tests__/vertical-slice-core/localProjectComposition.test.ts \
  __tests__/pre-m6-product-ui/repositoryBindingForm.ui.test.tsx \
  __tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx \
  __tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx \
  __tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx \
  __tests__/project-assistant/w1RecoveryFoundation.test.tsx
```

**Result: 7 files · 59 passed · 0 failed.**

---

## W. Full Vitest exact result

From `projects/sfia-studio/app` → `npm test`:

```
Test Files  371 passed | 17 skipped (388)
     Tests  4112 passed | 137 skipped (4249)
```

Baseline after PR #489: 4102 passed / 137 skipped / 0 failed.
Delta: **+10 passed** (new binding + CTA/composition coverage). **0 failed.**

---

## X. typecheck / lint / build / diff-check

| Gate | Result |
| --- | --- |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS (No ESLint warnings or errors) |
| `npm run build` | PASS |
| `git diff --check` | PASS (clean) |

---

## Y. Dogfood Product mutation

**ZERO.** No interaction with port 3020 historical Product; no SQLite mutation of dogfood; no binding resave; no Nora/HD/PREPARE/Execute on historical state.

---

## Z. LIVE / REAL

**ZERO.** No OpenAI LIVE. No Cursor REAL. No docs_write REAL. No Git execution REAL.

---

## AA. Product Git actions

**NONE.** Local dirty candidate only. No Product commit, push, PR, or merge.

---

## AB. Remaining reserve

Authenticated Product preflight **must be rerun** only after:

local Critical Review → Git integration → post-merge verification → separate Morris gate.

---

## AC. Next gate

**ChatGPT Critical Review** of this pack / handoff.

---

## AD. Verdict

**PRODUCT-JOURNEY-PROJECTION-COHERENCE — REPOSITORY BINDING DURABLE PROJECTION RESTORED — PROPOSAL DECISION-SUBJECT OWNS THE BUSINESS NEXT ACTION ACROSS TRAJECTORY / RECOVERY / LIFECYCLE — CASE A REFORMULER IS UNIQUE BUSINESS ACTION — ZERO PRODUCT MUTATION — ZERO REAL — READY FOR CHATGPT CRITICAL REVIEW**

### Explicit non-claims

- authenticated manual reproof passed — **NO**
- Nora / OpenAI / Cursor REAL — **NO**
- Product Proof complete / Gate D ready / runtime v3 ADOPTED — **NO**

---

## Production file scope (actual)

Expected + delivered:

1. `projects/sfia-studio/app/lib/vertical-slice-core/types.ts`
2. `projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts`
3. `projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts`
4. `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`
5. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx`
6. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx`
7. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`

Tests:

8. `.../repositoryBindingProjection.d0.test.ts` (new)
9. `.../productJourneyProjectionCoherence.ui.test.tsx` (new)
10. `.../localProjectComposition.test.ts`
11. `.../lifecyclePresentation.phaseB.d0.test.tsx`
12. `.../trajectorySurface.ui.test.tsx`
13. `.../w1RecoveryFoundation.test.tsx`

KEEP confirmed: `RepositoryBindingForm.tsx`, `vertical-slice-runtime/service.ts`, `actions.ts`, Proposal/F2/Decision Subject server logic, FakeConversationProvider, auth, GCEC, package.json, CI.
