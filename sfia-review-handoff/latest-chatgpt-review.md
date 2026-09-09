# SFIA Studio Review Pack — FULL

| Champ | Valeur |
| --- | --- |
| **Timestamp** | 2026-09-10 00:37:00 CEST |
| **Cycle ID** | `SFIA-STUDIO-CANDIDATE-TRAJECTORY-BRIDGE-CURRENTNESS-CTA-MICRO-CORRECTIVE-01` |
| **Typologie** | 8 — Delivery · RUN micro-corrective · CRITICAL |
| **GO Morris consommé** | `GO MORRIS — CANDIDATE TRAJECTORY BRIDGE CURRENTNESS + PRE-CYCLE CTA MICRO-CORRECTIVE` |
| **Parent / CR anchor** | `3d986d042dacdfae873f07467eee1a20fae1f6d6` |
| **Candidate** | `9d9c8ce7ca6ec884ee3e545978f77e4e9e3d9cc2` |
| **ZERO NEW REAL** | OUI |
| **CR-TRJ-01** | CLOSED DETERMINISTICALLY |
| **CR-TRJ-02** | CLOSED DETERMINISTICALLY |
| **Verdict** | CANDIDATE TRAJECTORY BRIDGE CURRENTNESS + PRE-CYCLE CTA — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW |

---

## 1. Local Git Truth — BEFORE

| Check | Observed |
| --- | --- |
| worktree | `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310` |
| branch | `delivery/sfia-studio-product-proof-qual-to-governed-cycle` |
| HEAD | `3d986d042dacdfae873f07467eee1a20fae1f6d6` |
| parent of HEAD | `0b9a7370f04de9f1b6ebb3aca84d1dd6f15541ee` |
| origin/main | `a9f6c310a0826d0e5bd6f7264603382a86564db1` |
| dirty Product | NONE |
| amend 3d986d04 | **NO** |

## 2. Local Git Truth — AFTER

| Check | Observed |
| --- | --- |
| new SHA | `9d9c8ce7ca6ec884ee3e545978f77e4e9e3d9cc2` |
| parent | `3d986d042dacdfae873f07467eee1a20fae1f6d6` |
| Product push | NONE |
| message | `fix(sfia-studio): harden candidate trajectory bridge currentness` |

```
6 files changed, 482 insertions(+), 10 deletions(-)
```

---

## 3. Sources

- cycle execution template, routing guide, CKC synthetic map
- convergence doctrine/roadmap, cadrage, LPS + epistemology framing
- Review Handoff for bridge candidate `3d986d04`

---

## 4. Convergence

Entry capability (3d986d04) preserved: CURRENT NEXT_CYCLE LR → candidate ProjectTrajectory.

This micro-corrective closes only:
1. currentness material-basis parity (blocking Reservations)
2. pre-cycle W2 CTA honesty

Next: LIVE bridge, then candidate → HumanDecision (out of scope).

---

## 5. CR-TRJ-01 — Blocking Reservations

**Problem:** bridge used `blockingReservationStatements ?? []`, so a durable blocking Reservation could leave LR incorrectly CURRENT.

**Fix:** after successful epistemic read, call canonical `deriveLifecycleBlockersFromEpistemicItems(epistemicItems)` and pass `blockersSnap.statements` into `selectCurrentLifecycleRecommendations` — same basis as lifecycle projection.

Removed optional client/input override path for blockers (single source).

Epistemic reader failure still fail-closes before derivation.

### BAR-TRJ-25
fresh Project → CURRENT LR → add active blocking Reservation → reconstruction STALE → prepare REFUSED → 0 trajectory / 0 cycle / 0 HD.

### BAR-TRJ-26
active `blocking=false` Reservation excluded from blockerFingerprint; bridge still succeeds.

---

## 6. CR-TRJ-02 — Pre-cycle W2 CTA

**Problem:** CTA shown when `activeCycleInstanceId || !preCycleCandidate`, so CURRENT LR + no candidate + no cycle still showed « Instruire les options » (known `CYCLE_NOT_QUALIFIED`).

**Fix:**
- `projectAssistantReadPreCycleCandidateTrajectoryAction` returns `hasCurrentNextCycleRecommendation` via `selectCurrentLifecycleRecommendations` + same blocker derivation.
- TrajectorySurface shows W2 CTA **only if** `activeCycleInstanceId` is set.
- CASE A hint: `pre-cycle-prepare-trajectory-hint` when CURRENT LR + no candidate + no active cycle.
- W2 `qualificationInputs` untouched.

### BAR-TRJ-27 (UI render)
Lifecycle « Préparer la trajectoire » present; W2 CTA absent; no auto W2 call.

### BAR-TRJ-28 (UI render)
candidate visible; W2 CTA absent.

### BAR-TRJ-29
active cycle → W2 CTA preserved; qualification contract unchanged.

---

## 7. Product files changed

1. `prepareCandidateTrajectoryFromCurrentRecommendation.ts`
2. `preCycleCandidateTrajectoryActions.ts`
3. `TrajectorySurface.tsx`
4. `candidateTrajectoryBridge.d0.test.ts`
5. `trajectorySurface.ui.test.tsx`
6. `preCycleTrajectoryCta.ui.test.tsx` (**NEW**)

---

## 8. Validation

| Gate | Result |
| --- | --- |
| Focused BAR-TRJ-25…29 + bridge suite + CTA UI | PASS (21) |
| Full Vitest | **3370 passed / 135 skipped** |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| git diff --check | PASS |
| ZERO NEW REAL | OUI |
| HD / Cycle / START / EC | none added |
| W2 contract | unchanged |

BAR-TRJ-01…24 regression: PASS (suite green).

---

## 9. Reserves

| Reserve | Status |
| --- | --- |
| **CR-TRJ-01** | **CLOSED DETERMINISTICALLY** |
| **CR-TRJ-02** | **CLOSED DETERMINISTICALLY** |
| RESERVE-TRJ-PROVENANCE-01 | **OPEN / NON-BLOCKING** (not closed here) |
| RESERVE-QA-MOCK-01 | **OPEN / NON-BLOCKING** |
| LIVE bridge | OPEN |
| candidate → HD | NEXT capability |

---

## 10. Anti-claims

Not claimed: LIVE bridge · provenance closed · HD bridge · START · R2 · PR · v3 ADOPTED.

**Claim max:** currentness uses full material basis incl. blocking Reservations; invalid pre-cycle W2 CTA no longer presented; B2 bridge unchanged; ZERO NEW REAL.

---

## 11. EXPLOITABLE MODIFIED CONTENT

Unified diff `3d986d042dacdfae873f07467eee1a20fae1f6d6..9d9c8ce7ca6ec884ee3e545978f77e4e9e3d9cc2`:

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
new file mode 100644
index 00000000..e90ba57c
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
@@ -0,0 +1,191 @@
+/** @vitest-environment jsdom */
+/**
+ * BAR-TRJ-27/28 — pre-cycle W2 CTA honesty (CR-TRJ-02).
+ * ZERO NEW REAL.
+ */
+import { cleanup, render, screen, waitFor } from "@testing-library/react";
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
+import { LifecycleSurface } from "@/features/pre-m6-product-ui/surfaces/LifecycleSurface";
+
+const {
+  proposeMock,
+  readPreCycleMock,
+  prepareMock,
+  lifecycleProjectionMock,
+} = vi.hoisted(() => ({
+  proposeMock: vi.fn(),
+  readPreCycleMock: vi.fn(),
+  prepareMock: vi.fn(),
+  lifecycleProjectionMock: vi.fn(),
+}));
+
+vi.mock("@/features/project-assistant/w2/actions", () => ({
+  w2ProposeTrajectoryOptionsAction: (...args: unknown[]) => proposeMock(...args),
+  w2DecideTrajectoryAction: vi.fn(),
+  w2InspectExecutionContractAction: vi.fn(),
+  w2ConfirmExecutionContractAction: vi.fn(),
+  w2AuthorizeExecutionContractAction: vi.fn(),
+  w2AmendExecutionContractAction: vi.fn(),
+  w2PrepareExecutionContractAction: vi.fn(),
+  w2GovernedExecuteSelectAction: vi.fn(),
+  w2GovernedExecuteStartAction: vi.fn(),
+  w2GovernedExecuteCompleteAction: vi.fn(),
+  w2GovernedExecuteCancelAction: vi.fn(),
+  w2MaterializeProductOutcomeAction: vi.fn(),
+  w2RehydrateProductOutcomeAction: vi.fn(),
+  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
+    ok: false,
+    code: "UNUSED",
+    message: "unused",
+  }),
+}));
+
+vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
+  projectAssistantReadPreCycleCandidateTrajectoryAction: (...args: unknown[]) =>
+    readPreCycleMock(...args),
+  projectAssistantPrepareCandidateTrajectoryAction: (...args: unknown[]) =>
+    prepareMock(...args),
+}));
+
+vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
+    lifecycleProjectionMock(...args),
+  projectAssistantPilotLifecycleAction: vi.fn(),
+}));
+
+afterEach(() => {
+  cleanup();
+});
+
+beforeEach(() => {
+  proposeMock.mockReset();
+  readPreCycleMock.mockReset();
+  prepareMock.mockReset();
+  lifecycleProjectionMock.mockReset();
+});
+
+describe("BAR-TRJ-27/28 — pre-cycle W2 CTA honesty", () => {
+  it("BAR-TRJ-27 — CURRENT LR + no candidate + no active cycle: Lifecycle prepare present, W2 CTA absent", async () => {
+    lifecycleProjectionMock.mockResolvedValue({
+      ok: true,
+      projection: {
+        projectId: "prj:trj-27",
+        activeCycleInstanceId: null,
+        selectedCycleInstanceId: null,
+        selectedStatus: null,
+        selectionAmbiguous: false,
+        candidateCycles: [],
+        currentRecommendations: [
+          {
+            recommendationId: "epi:lr:27",
+            projectId: "prj:trj-27",
+            intent: "NEXT_CYCLE",
+            subjectCycleInstanceId: null,
+            targetCycleInstanceId: null,
+            targetCycleTypeId: "cyc:framing",
+            producer: "nora",
+            producedAt: "2026-09-09T20:00:00.000Z",
+            statement: "Recommander un Cadrage.",
+            basisFingerprint: "fp",
+            basisRefs: { projectId: "prj:trj-27" },
+            semanticKey: "key27",
+            authority: "none",
+            isHumanDecision: false,
+            doesNotActivateCycle: true,
+            doesNotFinalize: true,
+            doesNotCreateHumanDecision: true,
+            epistemicStatus: "active",
+            supersedesRecommendationId: null,
+            derivedCurrentness: "CURRENT",
+          },
+        ],
+        cta: {
+          canStart: false,
+          canPause: false,
+          canResume: false,
+          canFinalize: false,
+          canCancel: false,
+          canReevaluate: false,
+        },
+      },
+    });
+
+    readPreCycleMock.mockResolvedValue({
+      ok: true,
+      candidate: null,
+      activeCycleInstanceId: null,
+      hasCurrentNextCycleRecommendation: true,
+    });
+
+    render(<LifecycleSurface projectId="prj:trj-27" />);
+    await waitFor(() => {
+      expect(
+        screen.getByTestId("lifecycle-trajectory-escalate"),
+      ).toBeTruthy();
+    });
+    expect(screen.getByTestId("lifecycle-trajectory-escalate").textContent).toBe(
+      "Préparer la trajectoire",
+    );
+
+    cleanup();
+    render(<TrajectorySurface projectId="prj:trj-27" />);
+    await waitFor(() => {
+      expect(readPreCycleMock).toHaveBeenCalled();
+    });
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(proposeMock).not.toHaveBeenCalled();
+    expect(screen.getByTestId("pre-cycle-prepare-trajectory-hint")).toBeTruthy();
+  });
+
+  it("BAR-TRJ-28 — candidate + no active cycle: candidate visible, W2 CTA absent", async () => {
+    readPreCycleMock.mockResolvedValue({
+      ok: true,
+      candidate: {
+        trajectoryId: "trj:cand-28",
+        version: 1,
+        status: "candidate",
+        projectId: "prj:trj-28",
+        steps: [
+          {
+            stepId: "stp:cadrage-28",
+            order: 1,
+            label: "Cadrage",
+            state: "pending",
+          },
+        ],
+        catalogLabel: "Cadrage",
+        targetCycleTypeId: "cyc:framing",
+        decidedByDecisionRef: null,
+        isEffectiveCurrent: false,
+      },
+      activeCycleInstanceId: null,
+      hasCurrentNextCycleRecommendation: false,
+    });
+
+    render(<TrajectorySurface projectId="prj:trj-28" />);
+    await waitFor(() => {
+      expect(screen.getByTestId("pre-cycle-candidate-trajectory")).toBeTruthy();
+    });
+    expect(screen.getByText("Trajectoire proposée")).toBeTruthy();
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(proposeMock).not.toHaveBeenCalled();
+  });
+
+  it("BAR-TRJ-29 UI — active cycle keeps W2 CTA", async () => {
+    readPreCycleMock.mockResolvedValue({
+      ok: true,
+      candidate: null,
+      activeCycleInstanceId: "cycinst:active-29",
+      hasCurrentNextCycleRecommendation: false,
+    });
+
+    render(<TrajectorySurface projectId="prj:trj-29" />);
+    await waitFor(() => {
+      expect(screen.getByTestId("w2-propose-options")).toBeTruthy();
+    });
+    expect(screen.getByTestId("w2-propose-options").textContent).toContain(
+      "Instruire les options",
+    );
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 68f9682c..58fb65a9 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -13,6 +13,7 @@ const {
   executeSelectMock,
   executeStartMock,
   executeCompleteMock,
+  readPreCycleMock,
 } = vi.hoisted(() => ({
   proposeMock: vi.fn(),
   decideMock: vi.fn(),
@@ -23,6 +24,7 @@ const {
   executeSelectMock: vi.fn(),
   executeStartMock: vi.fn(),
   executeCompleteMock: vi.fn(),
+  readPreCycleMock: vi.fn(),
 }));

 vi.mock("@/features/project-assistant/w2/actions", () => ({
@@ -49,13 +51,8 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
 }));

 vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
-  projectAssistantReadPreCycleCandidateTrajectoryAction: vi
-    .fn()
-    .mockResolvedValue({
-      ok: true,
-      candidate: null,
-      activeCycleInstanceId: "cycinst:test-active",
-    }),
+  projectAssistantReadPreCycleCandidateTrajectoryAction: (...args: unknown[]) =>
+    readPreCycleMock(...args),
   projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
 }));

@@ -73,6 +70,13 @@ beforeEach(() => {
   executeSelectMock.mockReset();
   executeStartMock.mockReset();
   executeCompleteMock.mockReset();
+  readPreCycleMock.mockReset();
+  readPreCycleMock.mockResolvedValue({
+    ok: true,
+    candidate: null,
+    activeCycleInstanceId: "cycinst:test-active",
+    hasCurrentNextCycleRecommendation: false,
+  });
 });

 describe("W2 TrajectorySurface", () => {
@@ -125,6 +129,7 @@ describe("W2 TrajectorySurface", () => {

     render(<TrajectorySurface projectId="prj:w2-ui" />);

+    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
     fireEvent.click(screen.getByTestId("w2-propose-options"));
     expect(await screen.findByTestId("w2-options")).toBeVisible();
     expect(screen.getAllByText("OPTION").length).toBeGreaterThan(0);
@@ -202,6 +207,7 @@ describe("W2 TrajectorySurface", () => {
     });

     render(<TrajectorySurface projectId="prj:w2-ui" />);
+    expect(await screen.findByTestId("w2-propose-options")).toBeVisible();
     fireEvent.click(screen.getByTestId("w2-propose-options"));
     await screen.findByTestId("w2-options");
     fireEvent.click(
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts
index b6e9aaa9..9714d9fa 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts
@@ -749,6 +749,10 @@ describe("GREENFIELD LR → CANDIDATE TRAJECTORY BRIDGE — BAR-TRJ", () => {
     expect(bridgeSrc).not.toMatch(/openai|OpenAI|runNora|Agents/i);
     expect(bridgeSrc).toContain("createInitialTrajectory.execute");
     expect(bridgeSrc).toContain("NORA_LIFECYCLE_RECOMMENDATION_ACTOR");
+    expect(bridgeSrc).toContain("deriveLifecycleBlockersFromEpistemicItems");
+    expect(bridgeSrc).not.toMatch(
+      /blockingReservationStatements:\s*input\.blockingReservationStatements\s*\?\?\s*\[\]/,
+    );
   });

   it("BAR-TRJ-19 — W2 proposeTrajectoryOptions module still requires active cycle (regression)", () => {
@@ -761,4 +765,171 @@ describe("GREENFIELD LR → CANDIDATE TRAJECTORY BRIDGE — BAR-TRJ", () => {
     );
     expect(src).toMatch(/Aucun cycle qualifié n'est actif/);
   });
+
+  it("BAR-TRJ-25 — blocking Reservation stales LR and bridge refuses", async () => {
+    const { runtime, projectId } = await bootFreshProject("25");
+    const materialized = expectMaterialized(
+      await materializeFreshNext(
+        runtime,
+        projectId,
+        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
+      ),
+    );
+
+    const epi = await runtime.oa!.cycleServices.updateEpistemicState.execute({
+      projectId,
+      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+      items: [
+        {
+          epistemicItemId: "epi:rsv-blocking-25",
+          type: "Reservation",
+          statement: "blocking_reservation_trj25",
+          status: "active",
+          blocking: true,
+        },
+      ],
+    });
+    expect(epi.ok).toBe(true);
+
+    const oa = runtime.oa!;
+    const project = await oa.projectServices.getProject.execute({ projectId });
+    const doctrine =
+      (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
+    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
+      projectId,
+    });
+    expect(lps.ok).toBe(true);
+    if (!lps.ok) return;
+    const items = await oa.cycleServices.epistemic.listByProject(projectId);
+    const { deriveLifecycleBlockersFromEpistemicItems } = await import(
+      "@/lib/oa/cycle"
+    );
+    const blockers = deriveLifecycleBlockersFromEpistemicItems(items);
+    expect(blockers.statements).toContain("blocking_reservation_trj25");
+
+    const current = selectCurrentLifecycleRecommendations({
+      items,
+      cycles: await oa.cycleServices.cycles.listByProject(projectId),
+      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
+      lpsVersion: lps.livingProjectState.version,
+      doctrinePackageId: doctrine.doctrinePackageId,
+      doctrinePackageVersion: doctrine.version,
+      doctrinePackageDigest: doctrine.digest,
+      trajectory: null,
+      decisions: await oa.decisionServices.decisions.listByProject(projectId),
+      evidence: [],
+      blockingReservationStatements: blockers.statements,
+    });
+    expect(current.filter((r) => r.intent === "NEXT_CYCLE")).toHaveLength(0);
+
+    const rebuilt = rebuildBasisRefsForRecommendation({
+      item: materialized.item,
+      facts: {
+        cycles: [],
+        lpsActiveCycleInstanceId: null,
+        lpsVersion: lps.livingProjectState.version,
+        doctrinePackageId: doctrine.doctrinePackageId,
+        doctrinePackageVersion: doctrine.version,
+        doctrinePackageDigest: doctrine.digest,
+        trajectory: null,
+        decisions: [],
+        evidence: [],
+        blockingReservationStatements: blockers.statements,
+      },
+    });
+    expect(rebuilt).not.toBeNull();
+    expect(
+      deriveLifecycleRecommendationCurrentness({
+        item: materialized.item,
+        currentBasisRefs: rebuilt!,
+      }),
+    ).toBe("STALE");
+
+    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
+      projectId,
+      deps: bridgeDeps(runtime, {
+        newTrajectoryId: () => "trj:lr-bridge-should-not-25",
+        newStepId: () => "stp:should-not-25",
+      }),
+    });
+    expect(prepared.ok).toBe(false);
+    if (!prepared.ok) {
+      expect(prepared.code).toBe("TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE");
+    }
+    expect(
+      await oa.cycleServices.trajectories.hasAnyByProjectId(projectId),
+    ).toBe(false);
+    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
+      0,
+    );
+    expect(
+      (await oa.decisionServices.decisions.listByProject(projectId)).length,
+    ).toBe(0);
+  });
+
+  it("BAR-TRJ-26 — non-blocking Reservation does not stale LR / bridge still succeeds", async () => {
+    const { runtime, projectId } = await bootFreshProject("26");
+    expectMaterialized(
+      await materializeFreshNext(
+        runtime,
+        projectId,
+        nextCycleLr("cyc:framing", "Envisager un Cadrage."),
+      ),
+    );
+    const epi = await runtime.oa!.cycleServices.updateEpistemicState.execute({
+      projectId,
+      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+      items: [
+        {
+          epistemicItemId: "epi:rsv-nonblocking-26",
+          type: "Reservation",
+          statement: "non_blocking_note_trj26",
+          status: "active",
+          blocking: false,
+        },
+      ],
+    });
+    expect(epi.ok).toBe(true);
+
+    const { deriveLifecycleBlockersFromEpistemicItems } = await import(
+      "@/lib/oa/cycle"
+    );
+    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
+      projectId,
+    );
+    const blockers = deriveLifecycleBlockersFromEpistemicItems(items);
+    expect(blockers.statements).not.toContain("non_blocking_note_trj26");
+    expect(blockers.statements).toHaveLength(0);
+
+    const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
+      projectId,
+      deps: bridgeDeps(runtime, {
+        newTrajectoryId: () => "trj:lr-bridge-fixed26",
+        newStepId: () => "stp:cadrage-fixed26",
+      }),
+    });
+    expect(prepared.ok).toBe(true);
+  });
+
+  it("BAR-TRJ-29 — W2 active-cycle qualification contract unchanged (structural)", () => {
+    const src = fs.readFileSync(
+      path.resolve(
+        APP_ROOT,
+        "features/project-assistant/w2/qualificationInputs.ts",
+      ),
+      "utf8",
+    );
+    expect(src).toContain("CYCLE_NOT_QUALIFIED");
+    expect(src).toContain("activeCycleInstanceId");
+    const trajSrc = fs.readFileSync(
+      path.resolve(
+        APP_ROOT,
+        "features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx",
+      ),
+      "utf8",
+    );
+    // W2 CTA gated strictly on activeCycleInstanceId truth.
+    expect(trajSrc).toMatch(/activeCycleInstanceId \? \(/);
+    expect(trajSrc).toContain("hasCurrentNextCycleRecommendation");
+  });
 });
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 8d4a34bd..05b84adf 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -158,6 +158,8 @@ export function TrajectorySurface({
   const [activeCycleInstanceId, setActiveCycleInstanceId] = useState<
     string | null
   >(null);
+  const [hasCurrentNextCycleRecommendation, setHasCurrentNextCycleRecommendation] =
+    useState(false);
   const [optionSet, setOptionSet] = useState<TrajectoryOptionSetDto | null>(
     null,
   );
@@ -239,10 +241,14 @@ export function TrajectorySurface({
     if (!result.ok) {
       setPreCycleCandidate(null);
       setActiveCycleInstanceId(null);
+      setHasCurrentNextCycleRecommendation(false);
       return;
     }
     setActiveCycleInstanceId(result.activeCycleInstanceId ?? null);
     setPreCycleCandidate(result.candidate ?? null);
+    setHasCurrentNextCycleRecommendation(
+      result.hasCurrentNextCycleRecommendation === true,
+    );
   }, [projectId]);

   useEffect(() => {
@@ -692,7 +698,12 @@ export function TrajectorySurface({
         </section>
       ) : null}

-      {activeCycleInstanceId || !preCycleCandidate ? (
+      {/*
+        W2 OptionSet requires an active CycleInstance. Hide the CTA in all
+        pre-cycle states (CURRENT NEXT_CYCLE LR, candidate-only, or empty)
+        so the Pilote is never offered a path known to return CYCLE_NOT_QUALIFIED.
+      */}
+      {activeCycleInstanceId ? (
       <div className={styles.actions}>
         <button
           type="button"
@@ -711,6 +722,18 @@ export function TrajectorySurface({
       </div>
       ) : null}

+      {!activeCycleInstanceId &&
+      !preCycleCandidate &&
+      hasCurrentNextCycleRecommendation ? (
+        <p
+          className={styles.blockNote}
+          data-testid="pre-cycle-prepare-trajectory-hint"
+        >
+          Préparez d&apos;abord la trajectoire depuis la recommandation lifecycle
+          courante — les options W2 nécessitent un cycle actif.
+        </p>
+      ) : null}
+
       {optionSet ? (
         <>
           <section
diff --git a/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts b/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
index 7ce30e05..2084d262 100644
--- a/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
@@ -7,9 +7,12 @@

 import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
 import {
+  deriveLifecycleBlockersFromEpistemicItems,
   prepareCandidateTrajectoryFromCurrentRecommendation,
   readPreCycleCandidateTrajectory,
+  selectCurrentLifecycleRecommendations,
 } from "@/lib/oa/cycle";
+import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";

 export async function projectAssistantPrepareCandidateTrajectoryAction(input: {
   projectId: string;
@@ -89,6 +92,10 @@ export async function projectAssistantPrepareCandidateTrajectoryAction(input: {
   };
 }

+/**
+ * Durable pre-cycle projection: candidate trajectory + CURRENT NEXT_CYCLE flag.
+ * CURRENT flag uses the same material basis as lifecycle read-side (incl. blockers).
+ */
 export async function projectAssistantReadPreCycleCandidateTrajectoryAction(input: {
   projectId: string;
 }): Promise<{
@@ -112,6 +119,8 @@ export async function projectAssistantReadPreCycleCandidateTrajectoryAction(inpu
     isEffectiveCurrent: false;
   } | null;
   activeCycleInstanceId?: string | null;
+  /** Server-derived via selectCurrentLifecycleRecommendations (canonical basis). */
+  hasCurrentNextCycleRecommendation?: boolean;
 }> {
   const runtime = getRuntimeApplicationService();
   if (!runtime.oa) {
@@ -143,11 +152,79 @@ export async function projectAssistantReadPreCycleCandidateTrajectoryAction(inpu
       code: result.code,
       message: result.reason,
       activeCycleInstanceId,
+      hasCurrentNextCycleRecommendation: false,
     };
   }
+
+  let hasCurrentNextCycleRecommendation = false;
+  try {
+    const epistemicItems = await oa.cycleServices.epistemic.listByProject(
+      input.projectId,
+    );
+    const cycles = await oa.cycleServices.cycles.listByProject(input.projectId);
+    const decisions =
+      await oa.decisionServices.decisions.listByProject(input.projectId);
+    let evidence: Awaited<
+      ReturnType<typeof oa.evidenceReviewServices.repository.listByProject>
+    > = [];
+    const failed = new Set<LifecycleRecommendationMaterialDimension>();
+    try {
+      evidence = await oa.evidenceReviewServices.repository.listByProject(
+        input.projectId,
+      );
+    } catch {
+      failed.add("evidence");
+    }
+
+    let trajectory = null;
+    try {
+      const traj = await oa.cycleServices.getCurrentTrajectory.execute({
+        projectId: input.projectId,
+      });
+      trajectory = traj.ok ? traj.trajectory : null;
+    } catch {
+      failed.add("trajectory");
+    }
+
+    const project = await oa.projectServices.getProject.execute({
+      projectId: input.projectId,
+    });
+    const doctrinePin = project.ok
+      ? (project.project.doctrinePackageRef ??
+        (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
+      : lps.ok
+        ? lps.livingProjectState.doctrinePackageRef
+        : undefined;
+
+    const blockersSnap =
+      deriveLifecycleBlockersFromEpistemicItems(epistemicItems);
+    const current = selectCurrentLifecycleRecommendations({
+      items: epistemicItems,
+      cycles,
+      lpsActiveCycleInstanceId: activeCycleInstanceId,
+      lpsVersion: lps.ok ? lps.livingProjectState.version : null,
+      doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
+      doctrinePackageVersion: doctrinePin?.version ?? null,
+      doctrinePackageDigest: doctrinePin?.digest ?? null,
+      trajectory,
+      decisions,
+      evidence,
+      blockingReservationStatements: blockersSnap.statements,
+      failedMaterialDimensions: failed,
+    });
+    hasCurrentNextCycleRecommendation = current.some(
+      (r) =>
+        r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
+    );
+  } catch {
+    // Fail closed for the flag — do not invent CURRENT.
+    hasCurrentNextCycleRecommendation = false;
+  }
+
   return {
     ok: true,
     candidate: result.candidate,
     activeCycleInstanceId,
+    hasCurrentNextCycleRecommendation,
   };
 }
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts
index df2ed236..53438335 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/prepareCandidateTrajectoryFromCurrentRecommendation.ts
@@ -26,6 +26,7 @@ import {
   resolveTrajectoryBootstrapPresence,
   validateCanonicalTargetCycleTypeId,
 } from "./greenfieldLifecycleBootstrap";
+import { deriveLifecycleBlockersFromEpistemicItems } from "../deriveLifecycleBlockers";
 import {
   selectCurrentLifecycleRecommendations,
   type RebuildLifecycleRecommendationBasisFacts,
@@ -177,7 +178,6 @@ export function buildSingleRecommendedCycleStep(input: {
 export async function prepareCandidateTrajectoryFromCurrentRecommendation(input: {
   projectId: string;
   deps: PrepareCandidateTrajectoryDeps;
-  blockingReservationStatements?: readonly string[];
   failedMaterialDimensions?: ReadonlySet<LifecycleRecommendationMaterialDimension>;
 }): Promise<PrepareCandidateTrajectoryResult> {
   const correlationId = input.deps.correlationId ?? newCorId();
@@ -254,6 +254,10 @@ export async function prepareCandidateTrajectoryFromCurrentRecommendation(input:
     lps.doctrinePackageRef ??
     null;

+  // Same material basis as lifecycle read-side: derive blockers from durable
+  // EpistemicItems — never default to [] when the reader succeeded.
+  const blockersSnap = deriveLifecycleBlockersFromEpistemicItems(epistemicItems);
+
   const facts: RebuildLifecycleRecommendationBasisFacts = {
     cycles,
     lpsActiveCycleInstanceId: lps.activeCycleInstanceId ?? null,
@@ -264,7 +268,7 @@ export async function prepareCandidateTrajectoryFromCurrentRecommendation(input:
     trajectory: null,
     decisions,
     evidence,
-    blockingReservationStatements: input.blockingReservationStatements ?? [],
+    blockingReservationStatements: blockersSnap.statements,
   };

   const current = selectCurrentLifecycleRecommendations({

```

---

## 12. Final verdict

# CANDIDATE TRAJECTORY BRIDGE CURRENTNESS + PRE-CYCLE CTA — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW

Awaiting ChatGPT Critical Review.
No LIVE. No Product push. No PR.
