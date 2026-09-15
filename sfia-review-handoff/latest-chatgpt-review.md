# ChatGPT Review Pack — PRODUCT JOURNEY PROJECTION COHERENCE
## RepositoryBinding projection + Decision-Subject CTA precedence

| Field | Value |
| --- | --- |
| **A. Timestamp** | 2026-09-15 22:25 CEST (Europe/Paris) |
| **Cycle** | 8 — Delivery / implementation |
| **Typology** | RUN |
| **Profile** | CRITICAL |
| **Repository** | `mcleland147/sfia-workspace` |
| **B. Git Truth — origin/main base** | `3166fbc141dbd387f67b6d1d0e0424c881b97df6` (Merge PR #489) |
| **Branch (local only)** | `fix/sfia-studio-product-projection-coherence` |
| **Worktree** | `/Users/morris/Projects/sfia-studio-product-projection-coherence` |
| **Product commit** | NONE |
| **Product push / PR / merge** | NONE |
| **Input Review Handoff (preflight)** | `sfia/review-handoff` @ `7923e2cc` · blob `bafba2a8…` |
| **Prior coherence handoff** | `11a41817` · blob `5ecb37d9…` (narrative-only; lacked reviewable candidate diff) |
| **This republication** | Review Handoff only — **ZERO Product file change** since validated candidate; adds full unified diffs for 13 files |
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

---

## AE. Candidate identity (validated local — unchanged for this republication)

Base: `origin/main` = `3166fbc141dbd387f67b6d1d0e0424c881b97df6`

Branch: `fix/sfia-studio-product-projection-coherence` (dirty local; **no Product commit**)

SHA-256 of the 13 candidate files (proves published diff == already-validated local bytes):

| # | Path | sha256 |
| --- | --- | --- |
| 1 | `projects/sfia-studio/app/lib/vertical-slice-core/types.ts` | `1ff78e56140499ddb9b68d3e421f3abd9955abbb6f808b2b0b613b2bc24404da` |
| 2 | `projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts` | `b258ef47a3f54631d2f248e369a4f437444d58e0461fc2e48861239882823a1f` |
| 3 | `projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts` | `69759139ca9752213999575c305e524dc9e9873b4f42c15ae0c0e69d131f40b5` |
| 4 | `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx` | `1b6e921438399d7d969537cf83737d6cab2b60daed09d4a16be1109f47f0aebd` |
| 5 | `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx` | `26a15616b94b146bfb72158e78cd60ddd760b5dfb5907f794612d6b0acfd0d0a` |
| 6 | `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx` | `0ebeb2ed47eb06785c7b9062b92767c353b330eac0b918fb3a4e3f2b5d09a948` |
| 7 | `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx` | `dc67ea058b1710e91df32aa28ed2ee3412c0b2f33d543ee470e4262aa783a139` |
| 8 | `projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts` | `42dbdf966e62f0cd7cb415f82fde105ee76ebf48220c8625f6ce0b3e5a42f2cd` |
| 9 | `projects/sfia-studio/app/__tests__/vertical-slice-runtime/repositoryBindingProjection.d0.test.ts` | `394ca25e87d703201547f9fb437cda4d2571edd6385b310f2fd42a9265931414` |
| 10 | `projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx` | `6a11f6f5d16979036b88ec49565a0d1a37ea999c5d61c43a4163de3e4b675a7a` |
| 11 | `projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx` | `bcf8517ff82e1f72db8c478c5c96b4fc4cc436cfd94f50678adbe0f8566b89e2` |
| 12 | `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx` | `5889566060ed3eef96c406fe2ae0947ca01188f4396b3a5617207d380e81478d` |
| 13 | `projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx` | `840956ee4e5f75154ecdfca3e32afdcb42219452d0cf07086711a11855e66bff` |

Prior validation retained (no Product/test mutation in this republication cycle):

- Focused: 59 passed / 0 failed
- Full Vitest: 4112 passed / 137 skipped / 0 failed
- typecheck / lint / build / diff-check: PASS
- Dogfood / LIVE / REAL / Product Git: ZERO / NONE

---

## AF. Diff index — what to verify in the unified diff below

| Control point | Where in diff |
| --- | --- |
| Exact type on `LocalProjectCreationView` | `types.ts` — `repositoryBinding: ProjectRepositoryBinding \| null` |
| Copy/freeze in `buildProjection` | `localProjectComposition.ts` — `projectRepositoryBindingProjection` + `freezeView` + field in return |
| Exact mapping to `RuntimeProjectState` | `mapping.ts` — `toRuntimeProjectState` |
| `subjectReadStatus` lifecycle | `TrajectorySurface.tsx` — pending→ready/error in `rehydrateActiveDecisionSubject` |
| UNKNOWN / OWNED / NONE effect | `TrajectorySurface.tsx` ownership `useEffect` + `ProjectWorkspacePage.tsx` `suppressGenericIntentionCta` |
| Parent wiring | `ProjectWorkspacePage.tsx` — state + Recovery/Lifecycle/Trajectory props |
| Recovery suppress conditions | `RecoverySurface.tsx` — `suppressGenericIntentionCta` hides `recovery-requalify` |
| Lifecycle suppress conditions | `LifecycleSurface.tsx` — `suppressGenericNoraCta` hides `lifecycle-define-deliverable-cta` |
| CASE A / NONE / read-error tests | `productJourneyProjectionCoherence.ui.test.tsx` CTA-1 / CTA-5 / CTA-6; Trajectory ownership callbacks; Recovery/Lifecycle unit tests |

---

## AG. Reviewable candidate unified diff (13 files vs `3166fbc1`)

Diff generated from the local dirty candidate against `HEAD` = `3166fbc141dbd387f67b6d1d0e0424c881b97df6`. New files shown as full adds. No Product commit exists; this is the reviewable candidate surface.

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx
index cb145f11..38233a2c 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/lifecyclePresentation.phaseB.d0.test.tsx
@@ -300,3 +300,46 @@ describe("LC-B-01 — LifecycleSurface durableRefreshSignal", () => {
     expect(projectionMock).toHaveBeenLastCalledWith({ projectId: "prj:ui" });
   });
 });
+
+describe("JOURNEY-INTEGRITY — Lifecycle generic Nora CTA precedence", () => {
+  it("suppressGenericNoraCta hides define-deliverable while keeping livrable facts", async () => {
+    const missing = baseProjection({
+      assessment: assessment({
+        canComplete: false,
+        blockers: ["artifact_missing"],
+        obligations: [
+          {
+            family: "artifact",
+            status: "MISSING",
+            applicability: "APPLICABLE",
+            blocking: true,
+          },
+        ],
+      }),
+    });
+    projectionMock.mockResolvedValue({ ok: true, projection: missing });
+
+    const { rerender } = render(
+      <LifecycleSurface projectId="prj:ui" suppressGenericNoraCta={false} />,
+    );
+    await waitFor(() => {
+      expect(
+        document.querySelector("[data-testid='lifecycle-define-deliverable-cta']"),
+      ).not.toBeNull();
+    });
+
+    rerender(
+      <LifecycleSurface projectId="prj:ui" suppressGenericNoraCta />,
+    );
+    await waitFor(() => {
+      expect(
+        document.querySelector("[data-testid='lifecycle-define-deliverable-cta']"),
+      ).toBeNull();
+    });
+    expect(
+      document.querySelector(
+        "[data-testid='lifecycle-require-artifact-continuation']",
+      ),
+    ).not.toBeNull();
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 544daddb..23de0373 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -1002,6 +1002,69 @@ describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
     expect(screen.queryByTestId("w2-propose-options")).toBeNull();
     expect(proposeMock).not.toHaveBeenCalled();
   });
+
+  it("JOURNEY-INTEGRITY — ownership callback: CASE A unrecoverable → OWNED", async () => {
+    const onOwnership = vi.fn();
+    readActiveDecisionSubjectMock.mockResolvedValue({
+      ok: true,
+      kind: "pending_reinstruction_required",
+      message:
+        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
+      proposalIds: ["prop:case-a"],
+      recoverableProposalIds: [],
+    });
+
+    render(
+      <TrajectorySurface
+        projectId="prj:own-a"
+        onProposalSubjectOwnershipChange={onOwnership}
+        onRequestReformulateWithNora={vi.fn()}
+      />,
+    );
+    expect(await screen.findByTestId("w2-reformulate-with-nora")).toBeVisible();
+    await waitFor(() => {
+      expect(onOwnership).toHaveBeenCalledWith("OWNED");
+    });
+    expect(onOwnership).toHaveBeenCalledWith("UNKNOWN");
+  });
+
+  it("JOURNEY-INTEGRITY — ownership callback: kind none → NONE", async () => {
+    const onOwnership = vi.fn();
+    readActiveDecisionSubjectMock.mockResolvedValue({
+      ok: true,
+      kind: "none",
+    });
+
+    render(
+      <TrajectorySurface
+        projectId="prj:own-none"
+        onProposalSubjectOwnershipChange={onOwnership}
+      />,
+    );
+    await waitFor(() => {
+      expect(onOwnership).toHaveBeenCalledWith("NONE");
+    });
+  });
+
+  it("JOURNEY-INTEGRITY — ownership callback: read error → UNKNOWN fail-closed", async () => {
+    const onOwnership = vi.fn();
+    readActiveDecisionSubjectMock.mockResolvedValue({
+      ok: false,
+      code: "READ_FAILED",
+      message: "Decision Subject illisible",
+    });
+
+    render(
+      <TrajectorySurface
+        projectId="prj:own-err"
+        onProposalSubjectOwnershipChange={onOwnership}
+      />,
+    );
+    await waitFor(() => {
+      expect(onOwnership).toHaveBeenCalledWith("UNKNOWN");
+    });
+    expect(onOwnership).not.toHaveBeenCalledWith("NONE");
+  });
 });

 describe("JOURNEY-INTEGRITY — CTA exclusivity on the mutating primary action", () => {
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx
index ea681b41..42357cb0 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx
@@ -109,6 +109,26 @@ describe("W1 Track E — recovery UI disclosures", () => {
     expect(onResumeDurable).not.toHaveBeenCalled();
   });

+  it("JOURNEY-INTEGRITY — suppressGenericIntentionCta hides requalify, keeps resume", () => {
+    const onRequalify = vi.fn();
+    const onResumeDurable = vi.fn();
+    render(
+      <RecoverySurface
+        suppressGenericIntentionCta
+        onRequalify={onRequalify}
+        onResumeDurable={onResumeDurable}
+      />,
+    );
+    expect(screen.getByTestId("recovery-resume-durable")).toBeTruthy();
+    expect(screen.queryByTestId("recovery-requalify")).toBeNull();
+    expect(screen.getByTestId("project-recovery-banner").textContent).not.toMatch(
+      /repartir d'une intention claire/i,
+    );
+    fireEvent.click(screen.getByTestId("recovery-resume-durable"));
+    expect(onResumeDurable).toHaveBeenCalledTimes(1);
+    expect(onRequalify).not.toHaveBeenCalled();
+  });
+
   it("ProjectRecoveryBanner renders honesty copy and controlled requalify CTA", () => {
     render(<ProjectRecoveryBanner />);
     expect(screen.getByTestId("w1-recovery-disclosures")).toBeTruthy();
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
index 79c28a53..98026767 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
@@ -159,6 +159,7 @@ describe("visible slice V1 Project/LPS happy path", () => {
         activeCycleInstanceId: null,
         ckcResolutionRef: null,
       },
+      repositoryBinding: null,
       localMode: true,
       iam: "NOT_SELECTED",
       productPersistence: "SQLITE_OA_PRODUCT_STORE",
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index c74f2d7d..a8c7c3af 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -29,6 +29,13 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   const [trajectoryRefreshSignal, setTrajectoryRefreshSignal] = useState(0);
   /** B1 — bump so LifecycleSurface reloads after Trajectory (or other) durable mutations. */
   const [lifecycleRefreshSignal, setLifecycleRefreshSignal] = useState(0);
+  /**
+   * JOURNEY-INTEGRITY — Proposal subject ownership from TrajectorySurface.
+   * Fail-closed UNKNOWN until first durable subject read resolves.
+   */
+  const [proposalSubjectOwnership, setProposalSubjectOwnership] = useState<
+    "UNKNOWN" | "OWNED" | "NONE"
+  >("UNKNOWN");
   const conversationRef = useRef<HTMLDivElement | null>(null);
   const refreshInFlight = useRef(false);

@@ -119,6 +126,11 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     activeCycleInstanceId: success.livingState.activeCycleInstanceId,
   });

+  /** Suppress competing generic Nora/intention CTAs while subject is owned or unknown. */
+  const suppressGenericIntentionCta =
+    proposalSubjectOwnership === "UNKNOWN" ||
+    proposalSubjectOwnership === "OWNED";
+
   return (
     <div className={styles.root} data-testid="project-principal">
       <header className={styles.projectHeader}>
@@ -141,6 +153,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {

       {showRecovery ? (
         <RecoverySurface
+          suppressGenericIntentionCta={suppressGenericIntentionCta}
           onResumeDurable={() => {
             setLpsOpen(true);
             focusConversation();
@@ -203,6 +216,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                   projectId={projectId}
                   durableRefreshSignal={lifecycleRefreshSignal}
                   onDurableFactsChanged={notifyDurableFactsChanged}
+                  suppressGenericNoraCta={suppressGenericIntentionCta}
                   onEscalateTrajectory={() => {
                     const el = document.querySelector(
                       "[data-testid='w2-trajectory-panel']",
@@ -235,6 +249,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                   composition="lps-embedded"
                   durableRefreshSignal={trajectoryRefreshSignal}
                   onDurableFactsChanged={notifyDurableFactsChanged}
+                  onProposalSubjectOwnershipChange={setProposalSubjectOwnership}
                   activeProposalId={
                     controller.activeProposal?.status === "DECISION_REQUIRED"
                       ? controller.activeProposal.proposalId
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
index d52b7a95..149e5150 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
@@ -33,12 +33,18 @@ export function LifecycleSurface({
   durableRefreshSignal = 0,
   onDurableFactsChanged,
   onEscalateTrajectory,
+  suppressGenericNoraCta = false,
 }: {
   projectId: string;
   /** B1 — parent bumps after Trajectory (or other) durable mutations. */
   durableRefreshSignal?: number;
   onDurableFactsChanged?: () => void;
   onEscalateTrajectory?: () => void;
+  /**
+   * JOURNEY-INTEGRITY — when Proposal Decision Subject owns next action,
+   * suppress competing generic Nora continuation CTAs (e.g. define deliverable).
+   */
+  suppressGenericNoraCta?: boolean;
 }) {
   const [projection, setProjection] = useState<PilotLifecycleProjection | null>(
     null,
@@ -483,7 +489,7 @@ export function LifecycleSurface({
         </section>
       ) : null}

-      {cta.showRequireArtifactContinuation ? (
+      {cta.showRequireArtifactContinuation && !suppressGenericNoraCta ? (
         <section
           className={styles.block}
           data-testid="lifecycle-require-artifact-continuation"
@@ -506,6 +512,20 @@ export function LifecycleSurface({
         </section>
       ) : null}

+      {cta.showRequireArtifactContinuation && suppressGenericNoraCta ? (
+        <section
+          className={styles.block}
+          data-testid="lifecycle-require-artifact-continuation"
+        >
+          <h3 className={styles.blockTitle}>Livrable requis</h3>
+          <p className={styles.muted}>
+            Un livrable est requis avant finalisation. Une proposition active
+            porte déjà la prochaine action métier — poursuivez-la dans la
+            trajectoire plutôt que d&apos;ouvrir une intention Nora concurrente.
+          </p>
+        </section>
+      ) : null}
+
       {cta.showReplan ? (
         <section className={styles.block} data-testid="lifecycle-resume-drift">
           <h3 className={styles.blockTitle}>Dérive à la reprise</h3>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
index 07c96178..cca2472c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx
@@ -16,9 +16,16 @@ import styles from "./RecoverySurface.module.css";
 export function RecoverySurface({
   onResumeDurable,
   onRequalify,
+  suppressGenericIntentionCta = false,
 }: {
   onResumeDurable?: () => void;
   onRequalify?: () => void;
+  /**
+   * JOURNEY-INTEGRITY — when a Proposal-specific Decision Subject owns the
+   * next business action, hide the competing generic "nouvelle intention" CTA.
+   * Resume/navigation may remain.
+   */
+  suppressGenericIntentionCta?: boolean;
 }) {
   return (
     <section
@@ -32,11 +39,9 @@ export function RecoverySurface({
           Reprenez où le projet en est réellement
         </h2>
         <p className={styles.text}>
-          Studio relit seulement ce qui a été réellement enregistré. La
-          conversation, une confirmation encore demandée ou une proposition non
-          enregistrée ne sont pas inventées au rechargement — vous pouvez
-          reprendre l&apos;état enregistré ou repartir d&apos;une intention
-          claire.
+          {suppressGenericIntentionCta
+            ? "Studio relit seulement ce qui a été réellement enregistré. Une proposition active porte déjà la prochaine action métier — reprenez l'état enregistré pour l'inspecter, sans ouvrir une intention concurrente."
+            : "Studio relit seulement ce qui a été réellement enregistré. La conversation, une confirmation encore demandée ou une proposition non enregistrée ne sont pas inventées au rechargement — vous pouvez reprendre l'état enregistré ou repartir d'une intention claire."}
         </p>
         <ul className={styles.disclosureList} data-testid="w1-recovery-disclosures">
           <li>{W1_DURABLE_DISCLOSURE}</li>
@@ -54,14 +59,16 @@ export function RecoverySurface({
         >
           Reprendre l&apos;état enregistré
         </button>
-        <button
-          type="button"
-          className={styles.secondary}
-          data-testid="recovery-requalify"
-          onClick={onRequalify}
-        >
-          {W1_REQUALIFY_CTA}
-        </button>
+        {!suppressGenericIntentionCta ? (
+          <button
+            type="button"
+            className={styles.secondary}
+            data-testid="recovery-requalify"
+            onClick={onRequalify}
+          >
+            {W1_REQUALIFY_CTA}
+          </button>
+        ) : null}
       </div>
     </section>
   );
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 6abe4ca9..8f711b54 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -155,6 +155,7 @@ export function TrajectorySurface({
   composition = "standalone",
   activeProposalId = null,
   onRequestReformulateWithNora,
+  onProposalSubjectOwnershipChange,
 }: {
   projectId: string;
   onDurableFactsChanged?: () => void;
@@ -175,9 +176,19 @@ export function TrajectorySurface({
    * Called with the effective pending proposalId to supersede.
    */
   onRequestReformulateWithNora?: (proposalId: string) => void;
+  /**
+   * JOURNEY-INTEGRITY — notify parent whether Proposal-specific journey owns
+   * the next business action. Fail-closed: UNKNOWN until subject read resolves.
+   */
+  onProposalSubjectOwnershipChange?: (
+    ownership: "UNKNOWN" | "OWNED" | "NONE",
+  ) => void;
 }) {
   const [busy, setBusy] = useState<Busy>(null);
   const [error, setError] = useState<string | null>(null);
+  const [subjectReadStatus, setSubjectReadStatus] = useState<
+    "pending" | "ready" | "error"
+  >("pending");
   const [pendingReinstruction, setPendingReinstruction] = useState<{
     readonly message: string;
     readonly proposalIds: readonly string[];
@@ -328,16 +339,19 @@ export function TrajectorySurface({

   /** CORR-PROOF-10 — rehydrate bound Proposal OptionSet from durable Epistemic. */
   const rehydrateActiveDecisionSubject = useCallback(async () => {
+    setSubjectReadStatus("pending");
     const result = await w2ReadActiveDecisionSubjectAction({ projectId });
     if (!result.ok) {
       setError(result.message);
       setPendingReinstruction(null);
+      setSubjectReadStatus("error");
       return;
     }
     if (result.kind === "bound_awaiting_decision") {
       setOptionSet(result.optionSet);
       setError(null);
       setPendingReinstruction(null);
+      setSubjectReadStatus("ready");
       return;
     }
     if (result.kind === "pending_reinstruction_required") {
@@ -348,9 +362,11 @@ export function TrajectorySurface({
         recoverableProposalIds: result.recoverableProposalIds,
       });
       setError(null);
+      setSubjectReadStatus("ready");
       return;
     }
     setPendingReinstruction(null);
+    setSubjectReadStatus("ready");
     // kind === "none" — leave local optionSet as-is for trajectory path
   }, [projectId]);

@@ -968,6 +984,21 @@ export function TrajectorySurface({
     // contract prepared: Inspect (then confirm / authorize) owns the next action
     contract != null;

+  useEffect(() => {
+    if (!onProposalSubjectOwnershipChange) return;
+    if (subjectReadStatus === "pending" || subjectReadStatus === "error") {
+      onProposalSubjectOwnershipChange("UNKNOWN");
+      return;
+    }
+    onProposalSubjectOwnershipChange(
+      proposalSubjectOwnsNextAction ? "OWNED" : "NONE",
+    );
+  }, [
+    onProposalSubjectOwnershipChange,
+    proposalSubjectOwnsNextAction,
+    subjectReadStatus,
+  ]);
+
   return (
     <section
       className={[
diff --git a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
index 22326df2..93e90ab3 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
@@ -116,9 +116,25 @@ function freezeView(view: LocalProjectCreationView): LocalProjectCreationView {
   Object.freeze(view.constraints);
   Object.freeze(view.doctrine);
   Object.freeze(view.lps);
+  if (view.repositoryBinding) Object.freeze(view.repositoryBinding);
   return Object.freeze(view);
 }

+function projectRepositoryBindingProjection(
+  project: Project,
+): LocalProjectCreationView["repositoryBinding"] {
+  const binding = project.repositoryBinding;
+  if (!binding) return null;
+  return Object.freeze({
+    provider: binding.provider,
+    identity: binding.identity,
+    remoteUrl: binding.remoteUrl,
+    defaultBranch: binding.defaultBranch,
+    ...(binding.pathRoot !== undefined ? { pathRoot: binding.pathRoot } : {}),
+    ...(binding.baseSha !== undefined ? { baseSha: binding.baseSha } : {}),
+  });
+}
+
 function contextSummary(context: string): string {
   const normalized = context.trim().replace(/\s+/g, " ");
   return normalized.length <= 240
@@ -265,6 +281,7 @@ function buildProjection(
       activeCycleInstanceId: lps.activeCycleInstanceId ?? null,
       ckcResolutionRef: lps.ckcResolutionRef ?? null,
     }),
+    repositoryBinding: projectRepositoryBindingProjection(project),
     localMode: true,
     iam: "NOT_SELECTED",
     productPersistence: "SQLITE_OA_PRODUCT_STORE",
diff --git a/projects/sfia-studio/app/lib/vertical-slice-core/types.ts b/projects/sfia-studio/app/lib/vertical-slice-core/types.ts
index 718f3148..30d9f409 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-core/types.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-core/types.ts
@@ -3,7 +3,10 @@ import type {
   DoctrinePackagePin,
   DoctrinePackageRefStatus,
 } from "@/lib/oa/doctrine";
-import type { ProjectDetailCode } from "@/lib/oa/project";
+import type {
+  ProjectDetailCode,
+  ProjectRepositoryBinding,
+} from "@/lib/oa/project";

 export type PerceivedCriticality = "LOW" | "STANDARD" | "HIGH";

@@ -47,6 +50,11 @@ export interface LocalProjectCreationView {
   readonly constraints: readonly string[];
   readonly doctrine: LocalProjectDoctrineProjection;
   readonly lps: LocalProjectLpsProjection;
+  /**
+   * Durable Project.repositoryBinding projected for runtime/UI.
+   * null = honestly unbound; never invent a sample.
+   */
+  readonly repositoryBinding: ProjectRepositoryBinding | null;
   readonly localMode: true;
   readonly iam: "NOT_SELECTED";
   readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
index b2345aa4..488e37aa 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
@@ -65,6 +65,7 @@ export function toRuntimeErrorDtoFromProjectError(
 export function toRuntimeProjectState(
   view: LocalProjectCreationView,
 ): RuntimeProjectState {
+  const binding = view.repositoryBinding;
   return Object.freeze({
     projectId: view.projectId,
     name: view.projectName,
@@ -76,6 +77,18 @@ export function toRuntimeProjectState(
     localMode: true,
     source: "REAL_LOCAL_CORE",
     fixture: false,
+    repositoryBinding: binding
+      ? Object.freeze({
+          provider: binding.provider,
+          identity: binding.identity,
+          remoteUrl: binding.remoteUrl,
+          defaultBranch: binding.defaultBranch,
+          ...(binding.pathRoot !== undefined
+            ? { pathRoot: binding.pathRoot }
+            : {}),
+          ...(binding.baseSha !== undefined ? { baseSha: binding.baseSha } : {}),
+        })
+      : null,
   });
 }

diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/repositoryBindingProjection.d0.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/repositoryBindingProjection.d0.test.ts
new file mode 100644
index 00000000..23005d36
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/repositoryBindingProjection.d0.test.ts
@@ -0,0 +1,138 @@
+/** @vitest-environment node */
+/**
+ * JOURNEY-INTEGRITY — RepositoryBinding durable → LocalProjectCreationView →
+ * RuntimeProjectState projection (application path, isolated Product DB).
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, describe, expect, it } from "vitest";
+import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
+import {
+  createRuntimeApplicationService,
+  resetRuntimeApplicationServiceForTests,
+  type CreateProjectRuntimeInput,
+} from "@/lib/vertical-slice-runtime";
+
+const APP_ROOT = path.resolve(__dirname, "../..");
+const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
+const SCHEMAS_ROOT = path.resolve(
+  APP_ROOT,
+  "../sfia-v3-modeled/v3-native-option-a/schemas",
+);
+
+const BINDING = {
+  identity: "mcleland147/sfia-workspace",
+  remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
+  defaultBranch: "main",
+  pathRoot: "projects/sfia-studio/.sandbox",
+  baseSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
+} as const;
+
+class FixedIdSource implements LocalProjectIdSource {
+  private project = 0;
+  private lps = 0;
+  private correlation = 0;
+
+  nextProjectId(): string {
+    this.project += 1;
+    return `prj:bind-proj-${this.project}`;
+  }
+
+  nextLpsVersionId(): string {
+    this.lps += 1;
+    return `lps:bind-proj-${this.lps}`;
+  }
+
+  nextCorrelationId(): string {
+    this.correlation += 1;
+    return `cor:bind-proj-${this.correlation}`;
+  }
+}
+
+const INPUT: CreateProjectRuntimeInput = {
+  name: "Binding projection",
+  objective: "Prove durable repositoryBinding reaches runtime.getProject.",
+  context: "Isolated Product SQLite — not historical dogfood.",
+  criticality: "STANDARD",
+  constraints: ["No network", "No REAL"],
+  shortReference: "BIND-PROJ",
+  idempotencyKey: "idem:binding-projection-1",
+};
+
+function tempDb(): string {
+  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-bind-proj-"));
+  return path.join(dir, "oa-product.sqlite");
+}
+
+afterEach(() => {
+  resetRuntimeApplicationServiceForTests();
+});
+
+describe("JOURNEY-INTEGRITY — RepositoryBinding runtime projection", () => {
+  it("B1–B6 — getProject returns exact durable binding after setProjectRepositoryBinding", async () => {
+    const productDbPath = tempDb();
+    const runtime = createRuntimeApplicationService({
+      registryRoot: REGISTRY_ROOT,
+      schemasRoot: SCHEMAS_ROOT,
+      nowIso: "2026-09-15T21:00:00.000Z",
+      idSource: new FixedIdSource(),
+      auditMode: "noop",
+      productDbPath,
+    });
+
+    const created = await runtime.createProject(INPUT);
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+
+    // B6 — unbound project remains honestly null
+    const unbound = await runtime.getProject(created.projectId);
+    expect(unbound.ok).toBe(true);
+    if (!unbound.ok) return;
+    expect(unbound.project.repositoryBinding).toBeNull();
+
+    const set = await runtime.setProjectRepositoryBinding({
+      projectId: created.projectId,
+      ...BINDING,
+    });
+    expect(set.ok).toBe(true);
+    if (!set.ok) return;
+
+    // B2–B5 — real projection chain (not write echo alone)
+    const loaded = await runtime.getProject(created.projectId);
+    expect(loaded.ok).toBe(true);
+    if (!loaded.ok) return;
+
+    expect(loaded.project.repositoryBinding).toEqual({
+      provider: "github",
+      identity: BINDING.identity,
+      remoteUrl: BINDING.remoteUrl,
+      defaultBranch: BINDING.defaultBranch,
+      pathRoot: BINDING.pathRoot,
+      baseSha: BINDING.baseSha,
+    });
+    expect(Object.isFrozen(loaded.project.repositoryBinding)).toBe(true);
+    expect(String(loaded.project.repositoryBinding?.identity)).not.toMatch(
+      /acme\/widget/i,
+    );
+  });
+
+  it("B6 — project without binding stays null after create (no sample)", async () => {
+    const runtime = createRuntimeApplicationService({
+      registryRoot: REGISTRY_ROOT,
+      schemasRoot: SCHEMAS_ROOT,
+      nowIso: "2026-09-15T21:00:00.000Z",
+      idSource: new FixedIdSource(),
+      auditMode: "noop",
+      productDbPath: tempDb(),
+    });
+    const created = await runtime.createProject({
+      ...INPUT,
+      idempotencyKey: "idem:binding-unbound",
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    expect(created.project.repositoryBinding).toBeNull();
+    expect(JSON.stringify(created.project)).not.toMatch(/acme\/widget/i);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
new file mode 100644
index 00000000..3ccc476c
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
@@ -0,0 +1,338 @@
+/** @vitest-environment jsdom */
+/**
+ * JOURNEY-INTEGRITY — cross-surface CASE A composition:
+ * Trajectory ownership → ProjectWorkspacePage → Recovery/Lifecycle CTA suppression.
+ */
+import {
+  cleanup,
+  fireEvent,
+  render,
+  screen,
+  waitFor,
+} from "@testing-library/react";
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import { ProjectWorkspacePage } from "@/features/pre-m6-product-ui/ProjectWorkspacePage";
+
+const {
+  getProjectRuntimeActionMock,
+  readActiveDecisionSubjectMock,
+  lifecycleProjectionMock,
+  useProductConversationMock,
+} = vi.hoisted(() => ({
+  getProjectRuntimeActionMock: vi.fn(),
+  readActiveDecisionSubjectMock: vi.fn(),
+  lifecycleProjectionMock: vi.fn(),
+  useProductConversationMock: vi.fn(),
+}));
+
+vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
+  getProjectRuntimeAction: (...args: unknown[]) =>
+    getProjectRuntimeActionMock(...args),
+  setProjectRepositoryBindingAction: vi.fn(),
+}));
+
+vi.mock("@/features/pre-m6-product-ui/hooks/useProductConversation", () => ({
+  useProductConversation: (...args: unknown[]) =>
+    useProductConversationMock(...args),
+}));
+
+vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
+    lifecycleProjectionMock(...args),
+  projectAssistantPilotLifecycleAction: vi.fn(),
+  projectAssistantRecordObligationPolicyAction: vi.fn(),
+  projectAssistantCompleteTrajectoryStepAction: vi.fn(),
+  projectAssistantResolveBlockingReservationAction: vi.fn(),
+  projectAssistantRehydrateEvidenceOutcomeAction: vi.fn().mockResolvedValue({
+    ok: false,
+    status: "rehydrate_error",
+    code: "NO_EVIDENCE_OUTCOME_REFS",
+    message: "none",
+    mode: "fixture",
+    retryable: false,
+  }),
+  projectAssistantSendAction: vi.fn(),
+  projectAssistantDecideAction: vi.fn(),
+  projectAssistantPrepareF3FixtureAction: vi.fn(),
+  projectAssistantPrepareM3Action: vi.fn(),
+  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
+}));
+
+vi.mock("@/features/project-assistant/w2/actions", () => ({
+  w2ProposeTrajectoryOptionsAction: vi.fn(),
+  w2DecideTrajectoryAction: vi.fn(),
+  w2InspectExecutionContractAction: vi.fn(),
+  w2ConfirmExecutionContractAction: vi.fn(),
+  w2AuthorizeExecutionContractAction: vi.fn(),
+  w2AmendExecutionContractAction: vi.fn(),
+  w2PrepareExecutionContractAction: vi.fn(),
+  w2GovernedExecuteSelectAction: vi.fn(),
+  w2GovernedExecuteStartAction: vi.fn(),
+  w2GovernedExecuteCompleteAction: vi.fn(),
+  w2ReadActiveDecisionSubjectAction: (...args: unknown[]) =>
+    readActiveDecisionSubjectMock(...args),
+  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
+    ok: false,
+    code: "UNUSED",
+    message: "unused",
+  }),
+  w2RehydrateProductOutcomeAction: vi.fn(),
+}));
+
+vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
+  projectAssistantReadPreCycleCandidateTrajectoryAction: vi
+    .fn()
+    .mockResolvedValue({
+      ok: true,
+      candidate: null,
+      activeCycleInstanceId: "cyc:case-a",
+      hasCurrentNextCycleRecommendation: false,
+    }),
+  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
+  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: vi
+    .fn()
+    .mockResolvedValue({ ok: true, presentation: null, alreadyDecided: null }),
+  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
+  prepareCycleFromValidatedTrajectoryAction: vi.fn(),
+  readPreparedTrajectoryCycleAction: vi.fn().mockResolvedValue({
+    ok: true,
+    prepared: null,
+  }),
+  startPreparedTrajectoryCycleAction: vi.fn(),
+}));
+
+const PROJECT = {
+  ok: true as const,
+  project: {
+    projectId: "prj:case-a",
+    name: "CASE A",
+    shortReference: "CASEA",
+    objective: "Reformuler owns next action",
+    contextSummary: "Pending proposal without snapshot",
+    constraints: [] as string[],
+    criticality: "STANDARD" as const,
+    localMode: true as const,
+    source: "REAL_LOCAL_CORE" as const,
+    fixture: false as const,
+    repositoryBinding: {
+      provider: "github" as const,
+      identity: "mcleland147/sfia-workspace",
+      remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
+      defaultBranch: "main",
+      pathRoot: "projects/sfia-studio/.sandbox",
+    },
+  },
+  doctrine: {
+    id: "pkg:studio-v3-oa",
+    version: "1.0.0",
+    digest: "digest:case-a",
+    status: "RESOLVED",
+  },
+  livingState: {
+    id: "lps:case-a",
+    version: 2,
+    createdAt: "2026-09-15T10:00:00.000Z",
+    activeCycleInstanceId: "cyc:case-a" as string | null,
+  },
+  readiness: {
+    status: "NOT_READY" as const,
+    hard: "OPEN" as const,
+    tA6: "INCOMPLETE" as const,
+    iam: "NOT_SELECTED" as const,
+    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
+    realAgentExecution: "DISABLED" as const,
+    delivery: "NOT_AUTHORIZED" as const,
+    cutover: "NOT_AUTHORIZED" as const,
+    runReady: false,
+    productReady: false,
+  },
+  disclosures: {
+    runtimeMode: "LOCAL_PROCESS",
+    persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE",
+    productPersistence: "SQLITE_OA_PRODUCT_STORE",
+    projectLpsRestartSafe: true,
+    cycleInstanceRestartSafe: true,
+    agentExecution: "DISABLED",
+  },
+};
+
+const LIFECYCLE_ARTIFACT_MISSING = {
+  ok: true,
+  projection: {
+    projectId: "prj:case-a",
+    activeCycleInstanceId: "cyc:case-a",
+    activeCycle: null,
+    pausedCycles: [],
+    candidateCycles: [],
+    supersededCycles: [],
+    terminalCycles: [],
+    selectedCycleInstanceId: "cyc:case-a",
+    selectedStatus: "active",
+    selectionAmbiguous: false,
+    assessment: {
+      cycleInstanceId: "cyc:case-a",
+      projectId: "prj:case-a",
+      finalizeDecisionId: null,
+      finalizeAccepted: false,
+      assessedAt: "2026-09-15T10:00:00.000Z",
+      canComplete: false,
+      blockers: ["artifact_missing"],
+      obligations: [
+        {
+          family: "artifact",
+          status: "MISSING",
+          applicability: "APPLICABLE",
+          blocking: true,
+        },
+      ],
+    },
+    cta: {
+      canStart: false,
+      canPause: true,
+      canResume: false,
+      canFinalize: true,
+      canCancel: true,
+    },
+    currentRecommendations: [],
+  },
+};
+
+afterEach(() => {
+  cleanup();
+});
+
+beforeEach(() => {
+  getProjectRuntimeActionMock.mockReset();
+  readActiveDecisionSubjectMock.mockReset();
+  lifecycleProjectionMock.mockReset();
+  useProductConversationMock.mockReset();
+  getProjectRuntimeActionMock.mockResolvedValue(PROJECT);
+  lifecycleProjectionMock.mockResolvedValue(LIFECYCLE_ARTIFACT_MISSING);
+  useProductConversationMock.mockReturnValue({
+    listRef: { current: null },
+    messages: [],
+    draft: "",
+    setDraft: vi.fn(),
+    toolEvents: [],
+    uiState: "READY",
+    error: null,
+    modeLabel: "fixture",
+    ephemeralNotice: "",
+    lrMaterializeNotice: null,
+    lrMaterializeCode: null,
+    f2: null,
+    activeProposal: null,
+    reservesText: "",
+    setReservesText: vi.fn(),
+    f3Prepare: null,
+    f3M3Resolved: null,
+    f3Execute: null,
+    durableEvidenceOutcome: null,
+    durableRehydrateError: null,
+    busy: false,
+    blocked: false,
+    canSend: true,
+    gateOpen: false,
+    recommendationFreshness: null,
+    qualificationFreshness: null,
+    durableOutcomeFreshness: null,
+    canPrepareResolvedM3: false,
+    canPrepareLegacyFixture: false,
+    canConfirmResolvedM3: false,
+    canConfirmLegacyFixture: false,
+    canRefreshResolvedM3Running: false,
+    sendMessage: vi.fn(),
+    armReinstructionOfProposalId: vi.fn(),
+    armedReinstructionOfProposalId: null,
+    decide: vi.fn(),
+    prepareResolvedM3: vi.fn(),
+    prepareLegacyFixture: vi.fn(),
+    confirmAndExecuteResolvedM3: vi.fn(),
+    confirmAndExecuteLegacyFixture: vi.fn(),
+    refreshResolvedM3RunningAttempt: vi.fn(),
+    retryLastUserMessage: vi.fn(),
+  });
+});
+
+describe("JOURNEY-INTEGRITY — ProjectWorkspace CASE A composition", () => {
+  it("CTA-1 cross-surface — Reformuler owns next action; Recovery/Lifecycle generics absent", async () => {
+    readActiveDecisionSubjectMock.mockResolvedValue({
+      ok: true,
+      kind: "pending_reinstruction_required",
+      message:
+        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
+      proposalIds: ["prop:f2:4a90b644-3eb7-43b8-9e83-b140cfeb9a9c"],
+      recoverableProposalIds: [],
+    });
+
+    render(<ProjectWorkspacePage projectId="prj:case-a" />);
+
+    expect(await screen.findByTestId("project-principal")).toBeTruthy();
+    expect(await screen.findByTestId("project-recovery-banner")).toBeTruthy();
+    expect(screen.getByTestId("recovery-resume-durable")).toBeTruthy();
+
+    fireEvent.click(screen.getByTestId("lps-drawer-toggle"));
+
+    expect(await screen.findByTestId("w2-reformulate-with-nora")).toBeVisible();
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-prepare-contract-sandbox")).toBeNull();
+    expect(screen.queryByTestId("w3a-execute")).toBeNull();
+
+    await waitFor(() => {
+      expect(screen.queryByTestId("recovery-requalify")).toBeNull();
+      expect(
+        screen.queryByTestId("lifecycle-define-deliverable-cta"),
+      ).toBeNull();
+    });
+
+    expect(
+      screen.getByTestId("lifecycle-require-artifact-continuation"),
+    ).toBeTruthy();
+    expect(await screen.findByTestId("repo-binding-status")).toHaveTextContent(
+      /Binding durable chargé/i,
+    );
+    expect(screen.getByTestId("repo-binding-identity")).toHaveValue(
+      "mcleland147/sfia-workspace",
+    );
+  });
+
+  it("CTA-5 — no Proposal ownership restores Recovery requalify + Lifecycle Nora CTA", async () => {
+    readActiveDecisionSubjectMock.mockResolvedValue({
+      ok: true,
+      kind: "none",
+    });
+
+    render(<ProjectWorkspacePage projectId="prj:case-a" />);
+    expect(await screen.findByTestId("project-recovery-banner")).toBeTruthy();
+    fireEvent.click(screen.getByTestId("lps-drawer-toggle"));
+
+    await waitFor(() => {
+      expect(screen.getByTestId("recovery-requalify")).toBeTruthy();
+      expect(
+        screen.getByTestId("lifecycle-define-deliverable-cta"),
+      ).toBeTruthy();
+    });
+    expect(screen.queryByTestId("w2-reformulate-with-nora")).toBeNull();
+  });
+
+  it("CTA-6 — Decision Subject read error keeps generics fail-closed", async () => {
+    readActiveDecisionSubjectMock.mockResolvedValue({
+      ok: false,
+      code: "READ_FAILED",
+      message: "Decision Subject illisible",
+    });
+
+    render(<ProjectWorkspacePage projectId="prj:case-a" />);
+    expect(await screen.findByTestId("project-recovery-banner")).toBeTruthy();
+    fireEvent.click(screen.getByTestId("lps-drawer-toggle"));
+
+    await waitFor(() => {
+      expect(readActiveDecisionSubjectMock).toHaveBeenCalled();
+    });
+    expect(screen.queryByTestId("recovery-requalify")).toBeNull();
+    expect(
+      screen.queryByTestId("lifecycle-define-deliverable-cta"),
+    ).toBeNull();
+  });
+});
```

---

## AH. Republication verdict

**PRODUCT-JOURNEY-PROJECTION-COHERENCE — REVIEW HANDOFF REPUBLISHED WITH FULL REVIEWABLE CANDIDATE DIFF (13 FILES) — ZERO PRODUCT MUTATION SINCE VALIDATED CANDIDATE — READY FOR CHATGPT CRITICAL REVIEW**
