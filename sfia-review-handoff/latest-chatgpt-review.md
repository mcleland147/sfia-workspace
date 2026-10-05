# P5-S03 — GIT INTEGRATION — OBJECT-NATIVE APERÇU + EXÉCUTION — CP01 + CP02 — FULL REVIEW PACK

## 1. Timestamp
2026-10-05 17:34:18 +0200 Europe/Paris

## 2. Morris Git Integration authorization
**MORRIS P5-S03 GIT INTEGRATION GATE = AUTHORIZED — CONSUMED**

Allowed: local truth · validations · stage · commit · push · PR · CI observe · FULL pack · L3 handoff.
Forbidden: merge · auto-merge · branch deletion · OpenAI REAL · R3 · P6 · opportunistic functional/visual expansion.

## 3. Branch
`delivery/sfia-studio-product-simplification-p5-s03-object-native-product-views`

## 4. Pre-commit HEAD
`1a7e80b20949a041b1edc279ffed735b04bda997` (= origin/main)

## 5. origin/main
`1a7e80b20949a041b1edc279ffed735b04bda997` — PR #556 MERGED · CI #680 SUCCESS

## 6. Remote branch pre-state
**ABSENT** before push (confirmed via `git ls-remote`).

## 7. Canonical sources
- Roadmap / doctrine / product-completion 01 / simplification 03/04/05 reread
- Template SHA: `948156a21309ef99c3aaed6410947dc6b9bc569a`
- No architecture reinterpretation during this gate

## 8. Latest CP02 handoff
- `sfia/review-handoff` @ `0905f08d72518b1a2cf5c5bd7dfa6a7074141b62`
- blob `57d7a38e54e456d7f95f1a38c897f62a447d4813`
- ChatGPT Final Critical Review = **PASS**

## 9–13. Final S03 architecture summary
OBJECTS FIRST → PROJECTIONS SECOND → SURFACES THIRD.

- Product object reuse: existing Project / LPS / trajectory / W2 continuity only
- **No new persistence**
- **No new state machine**
- **No architecture parallelism**
- Conversation / Aperçu / Exécution = projections of ONE Product world

## 14. Aperçu proof
OverviewSurface projects LPS / trajectory / attention / history / currentness.
No Product mutations. No fake Synthèses. B1 desktop composition closed.

## 15–22. Exécution proofs
15. Durable reads: `w2DeriveGovernedExecutionContinuityAction` + `w2ReadCurrentGovernedExecutionContinuityAction`
16. Confirmation ≠ Execution: confirm-only path; execute via authorize+reconcile
17. Fresh-mount actionability: durable EC drives CTAs (no F3 oracle)
18. execute→continue: execute once; subsequent `intent=continue` via policy
19. Remount auto-resume: `shouldAutoResumeReconcileOnRemount`
20. No second Attempt from continue
21. recovery / HumanDecision / stable stop (C05–C07)
22. Server authority: `AUTHORIZED` + `executionEligible`

Negatives preserved: `f3M3Resolved` / `f3Prepare` / `f3Execute` / `activeProposal` are NOT Exécution authority.

## 23–27. Visual
23. B1 CLOSED · B2 CLOSED
24. C-actionable treated (composer ≈358×64 / send 36×38)
25. Expected Product content variance preserved (no fake READY EC / Synthèses / counts)
26. Figma nodes: 46:2 · 190:306 · 51:2 · 192:2 · 150:295 · 190:337
27. Reviewed evidence under `.tmp-sfia-review/p5-s03-visual/` (excluded from commit)
- A=0 · B=0 · C-actionable remaining=0

## 28. Staged files exact list (commit)

```
5fc6238a feat(sfia-studio): integrate P5 S03 object-native product views
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx
A	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
A	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
A	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx
A	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/preCycleTrajectoryCta.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
A	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.module.css
A	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
A	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/OverviewSurface.module.css
A	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/OverviewSurface.tsx
A	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M	projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md

```

## 29. Excluded `.tmp` evidence
All of `.tmp-sfia-review/**` excluded (screenshots, manifests, review scratch, auth, CP01/CP02 visual, handoff staging).

## 30. Staged diff check
`git diff --cached --check` = **CLEAN** before commit.

## 31–38. Validation (ZERO REAL)
31. Targeted S03: presentation + object-native + durable + reconcile — **PASS** (28 tests in S03 family; included in suite below)
32. pre-m6 + W2 targeted combined: **22 files / 182 PASS**
33. TrajectorySurface CP2-08 continuity: included PASS
34. deterministic no-LLM: YES
35. typecheck: **PASS**
36. lint: **PASS**
37. build: **PASS**
38. full npm test: **469 passed | 18 skipped · 5207 passed | 138 skipped**

## 39. REAL calls = 0
`P5_S02_RUN_REAL` never set. No provider call.

## 40–41. Commit
40. SHA: `5fc6238a3531a9298c1fb5e310779d814ff05855`
41. Message: `feat(sfia-studio): integrate P5 S03 object-native product views`

```
5fc6238a feat(sfia-studio): integrate P5 S03 object-native product views
 .../automaticProjectResume.ui.test.tsx             |  25 +
 .../chatFirstGovernedDecisionLoop.ui.test.tsx      |  25 +
 .../p5.s01.workspaceLayout.ui.test.tsx             |  47 ++
 ...03.durableExecutionActionContinuity.ui.test.tsx | 426 ++++++++++++++
 ...p5.s03.executionReconcileContinuity.ui.test.tsx | 596 +++++++++++++++++++
 .../p5.s03.objectNativeViews.ui.test.tsx           | 301 ++++++++++
 .../p5.s03.pilotExecutionPresentation.d0.test.ts   | 299 ++++++++++
 .../postExecutionTrajectorySurface.ui.test.tsx     |  25 +
 .../preCycleTrajectoryCta.ui.test.tsx              |  25 +
 .../productJourneyProjectionCoherence.ui.test.tsx  |  25 +
 .../trajectorySurface.ui.test.tsx                  |  25 +
 .../ProjectWorkspacePage.module.css                |  82 ++-
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     | 288 ++++++---
 .../surfaces/ConversationSurface.module.css        |  80 ++-
 .../surfaces/ConversationSurface.tsx               |   9 +-
 .../surfaces/ExecutionSurface.module.css           | 308 ++++++++++
 .../surfaces/ExecutionSurface.tsx                  | 643 +++++++++++++++++++++
 .../surfaces/OverviewSurface.module.css            | 403 +++++++++++++
 .../pre-m6-product-ui/surfaces/OverviewSurface.tsx | 412 +++++++++++++
 .../surfaces/pilotExecutionPresentation.ts         | 569 ++++++++++++++++++
 .../convergence/sfia-studio-convergence-roadmap.md |   6 +-
 ...t-product-simplification-integrated-delivery.md | 101 +++-
 22 files changed, 4596 insertions(+), 124 deletions(-)

```

## 42–43. Push
42. Push result: **SUCCESS** (`-u` new remote branch)
43. Remote branch SHA: `5fc6238a3531a9298c1fb5e310779d814ff05855` (== local)

## 44–46. PR
44. Number/URL: **#557** — https://github.com/mcleland147/sfia-workspace/pull/557
45. Changed files: **exact 22-file S03 scope** (verified via `gh pr view` / `gh pr diff --name-only`)
46. CI state/run: **PENDING / NOT YET REPORTED**
- `gh pr checks 557` → no checks reported
- `statusCheckRollup` = `[]`
- `mergeStateStatus` = `BLOCKED` (required checks absent / not started)
- No Actions run found for head SHA `5fc6238a…` at observation time
- PR URL for CI follow-up: https://github.com/mcleland147/sfia-workspace/pull/557
- CI REAL calls: **none observed** (no run yet)

## 47. Merge NOT performed
Auto-merge = null/disabled. Merge = **NOT AUTHORIZED**.

## 48. Remaining debts
F2 routing OPEN · Synthèses NOT BUILT · Auth · Nora Activity · R3 NOT STARTED · P6 later · runtime v3 NON ADOPTED

## 49. Next gate
**MORRIS P5-S03 MERGE GATE** — only after ChatGPT PR review + required CI green.

## 50. Final verdict

```text
PASS — P5-S03 OBJECT-NATIVE PRODUCT VIEWS
COMMITTED / PUSHED / PR OPEN —
CP01 + CP02 FINAL CANDIDATE PRESERVED —
CONFIRMATION != EXECUTION —
MOUNTED + REMOUNT CONTINUITY PRESERVED —
A=0 / B=0 —
ZERO REAL —
READY FOR CHATGPT PR REVIEW / CI QUALIFICATION —
MERGE NOT AUTHORIZED
```

### Explicit handoff claims
- P5-S03 PR OPEN = **#557**
- exact project commit SHA = `5fc6238a3531a9298c1fb5e310779d814ff05855`
- CI state = PENDING (at publication)
- ZERO REAL
- A=0 / B=0
- Confirmation ≠ Execution
- mounted/remount continuity proven
- expected Product content variance preserved
- MERGE NOT AUTHORIZED

## Useful modified content — ExecutionSurface (commit)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
new file mode 100644
index 00000000..b4f75fba
--- /dev/null
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
@@ -0,0 +1,643 @@
+"use client";
+
+import { useCallback, useEffect, useMemo, useRef, useState } from "react";
+import {
+  w2AuthorizeExecutionContractAction,
+  w2ConfirmExecutionContractAction,
+  w2DeriveGovernedExecutionContinuityAction,
+  w2InspectExecutionContractAction,
+  w2ReadCurrentGovernedExecutionContinuityAction,
+  w2ReconcileGovernedExecutionAction,
+} from "@/features/project-assistant/w2/actions";
+import type { GovernedExecutionContinuityProjection } from "@/features/project-assistant/w2/deriveGovernedExecutionContinuityProjection";
+import {
+  nextReconcileContinueDelayMs,
+  shouldAutoResumeReconcileOnRemount,
+  shouldContinueReconcileNominally,
+} from "@/features/project-assistant/w2/reconcileContinuePolicy";
+import type { CurrentGovernedExecutionContinuityResult } from "@/features/project-assistant/w2/types";
+import {
+  presentPilotExecution,
+  type PilotExecutionPresentation,
+} from "./pilotExecutionPresentation";
+import styles from "./ExecutionSurface.module.css";
+
+export type ExecutionSurfaceProps = {
+  projectId: string;
+  onReturnToConversation: () => void;
+  onPresentationChange?: (presentation: PilotExecutionPresentation) => void;
+  onDurableFactsChanged?: () => void;
+};
+
+type ContinuityLoad =
+  | { readonly ok: true; readonly projection: GovernedExecutionContinuityProjection }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+  | null;
+
+/**
+ * P5-S03 Exécution — durable Product continuity + W2 governed actions.
+ *
+ * Authority path (restart-safe):
+ *   w2ReadCurrent… / w2Derive…
+ *   → Confirm via w2ConfirmExecutionContractAction (no Attempt)
+ *   → Execute via authorize + reconciler intent=execute
+ *   → Continue via reconciler intent=continue (canonical policy)
+ *
+ * Conversation process-local F3 state is NEVER the authority oracle.
+ * Continuation scheduling is presentation-only; Product truth stays server-owned.
+ */
+export function ExecutionSurface({
+  projectId,
+  onReturnToConversation,
+  onPresentationChange,
+  onDurableFactsChanged,
+}: ExecutionSurfaceProps) {
+  const [continuity, setContinuity] = useState<ContinuityLoad>(null);
+  const [preExec, setPreExec] =
+    useState<CurrentGovernedExecutionContinuityResult | null>(null);
+  const [expandedWork, setExpandedWork] = useState(false);
+  const [loading, setLoading] = useState(true);
+  const [busy, setBusy] = useState(false);
+  const [error, setError] = useState<string | null>(null);
+
+  const reconcileMountedRef = useRef(true);
+  const reconcileInFlightRef = useRef(false);
+  const reconcileContinueTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
+    null,
+  );
+  const activeContractIdRef = useRef<string | null>(null);
+  const runServerReconcileRef = useRef<
+    (
+      intent: "execute" | "continue",
+      executionContractId: string,
+      stepIndex?: number,
+    ) => Promise<void>
+  >(async () => {});
+
+  const clearContinueTimer = useCallback(() => {
+    if (reconcileContinueTimerRef.current) {
+      clearTimeout(reconcileContinueTimerRef.current);
+      reconcileContinueTimerRef.current = null;
+    }
+  }, []);
+
+  const refreshExecutionContinuity = useCallback(async () => {
+    const [derived, current] = await Promise.all([
+      w2DeriveGovernedExecutionContinuityAction({ projectId }),
+      w2ReadCurrentGovernedExecutionContinuityAction({ projectId }),
+    ]);
+    if (!reconcileMountedRef.current) return { derived, current };
+    setContinuity(derived);
+    setPreExec(current.ok ? current : null);
+    const nextId =
+      derived.ok && derived.projection.executionContractId
+        ? derived.projection.executionContractId
+        : current.ok &&
+            current.kind === "active" &&
+            current.contract.executionContractId
+          ? current.contract.executionContractId
+          : null;
+    if (
+      activeContractIdRef.current != null &&
+      nextId != null &&
+      activeContractIdRef.current !== nextId
+    ) {
+      // Contract identity changed — cancel stale continuation.
+      clearContinueTimer();
+    }
+    activeContractIdRef.current = nextId;
+    return { derived, current };
+  }, [projectId, clearContinueTimer]);
+
+  const applyProjection = useCallback(
+    (projection: GovernedExecutionContinuityProjection) => {
+      if (!reconcileMountedRef.current) return;
+      setContinuity({ ok: true, projection });
+      const nextId = projection.executionContractId;
+      if (
+        activeContractIdRef.current != null &&
+        nextId != null &&
+        activeContractIdRef.current !== nextId
+      ) {
+        clearContinueTimer();
+      }
+      if (nextId) activeContractIdRef.current = nextId;
+    },
+    [clearContinueTimer],
+  );
+
+  const scheduleContinueIfNeeded = useCallback(
+    (
+      projection: GovernedExecutionContinuityProjection | undefined,
+      executionContractId: string,
+      stepIndex: number,
+    ) => {
+      if (!reconcileMountedRef.current) return;
+      if (!projection) return;
+      if (!shouldContinueReconcileNominally(projection)) return;
+      if (activeContractIdRef.current !== executionContractId) return;
+      clearContinueTimer();
+      const delay = nextReconcileContinueDelayMs(stepIndex + 1);
+      reconcileContinueTimerRef.current = setTimeout(() => {
+        reconcileContinueTimerRef.current = null;
+        if (!reconcileMountedRef.current) return;
+        if (activeContractIdRef.current !== executionContractId) return;
+        void runServerReconcileRef.current(
+          "continue",
+          executionContractId,
+          stepIndex + 1,
+        );
+      }, delay);
+    },
+    [clearContinueTimer],
+  );
+
+  const runServerReconcile = useCallback(
+    async (
+      intent: "execute" | "continue",
+      executionContractId: string,
+      stepIndex = 0,
+    ) => {
+      if (!executionContractId) return;
+      if (reconcileInFlightRef.current && intent === "continue") return;
+      reconcileInFlightRef.current = true;
+      try {
+        const reconciled = await w2ReconcileGovernedExecutionAction({
+          projectId,
+          executionContractId,
+          intent,
+        });
+        if (!reconcileMountedRef.current) return;
+        if (reconciled.projection) {
+          applyProjection(reconciled.projection);
+        } else {
+          await refreshExecutionContinuity();
+        }
+        onDurableFactsChanged?.();
+        if (!reconciled.ok) {
+          setError(reconciled.message);
+          return;
+        }
+        scheduleContinueIfNeeded(
+          reconciled.projection,
+          executionContractId,
+          stepIndex,
+        );
+      } finally {
+        reconcileInFlightRef.current = false;
+      }
+    },
+    [
+      projectId,
+      applyProjection,
+      refreshExecutionContinuity,
+      onDurableFactsChanged,
+      scheduleContinueIfNeeded,
+    ],
+  );
+
+  useEffect(() => {
+    runServerReconcileRef.current = runServerReconcile;
+  }, [runServerReconcile]);
+
+  useEffect(() => {
+    reconcileMountedRef.current = true;
+    return () => {
+      reconcileMountedRef.current = false;
+      clearContinueTimer();
+    };
+  }, [clearContinueTimer]);
+
+  // Initial durable load + remount auto-resume.
+  useEffect(() => {
+    let cancelled = false;
+    setLoading(true);
+    void (async () => {
+      try {
+        const { derived } = await refreshExecutionContinuity();
+        if (cancelled || !reconcileMountedRef.current) return;
+        setLoading(false);
+        if (!derived.ok) return;
+        if (!shouldAutoResumeReconcileOnRemount(derived.projection)) return;
+        const executionContractId = derived.projection.executionContractId;
+        if (!executionContractId) return;
+        await runServerReconcileRef.current("continue", executionContractId, 0);
+      } catch (err) {
+        if (cancelled || !reconcileMountedRef.current) return;
+        setLoading(false);
+        setError(
+          err instanceof Error
+            ? err.message
+            : "Lecture de l’exécution indisponible.",
+        );
+      }
+    })();
+    return () => {
+      cancelled = true;
+    };
+  }, [refreshExecutionContinuity]);
+
+  const presentation = useMemo(
+    () =>
+      presentPilotExecution({
+        continuityProjection: continuity,
+        preExecutionContinuity: preExec,
+        actionsBusy: busy,
+      }),
+    [continuity, preExec, busy],
+  );
+
+  const lastNotifiedKey = useRef<string | null>(null);
+  useEffect(() => {
+    const key = `${presentation.status}|${presentation.stage}|${presentation.cta.kind}|${presentation.cta.kind !== "none" && "enabled" in presentation.cta ? presentation.cta.enabled : ""}`;
+    if (lastNotifiedKey.current === key) return;
+    lastNotifiedKey.current = key;
+    onPresentationChange?.(presentation);
+  }, [presentation, onPresentationChange]);
+
+  const resolveContractId = useCallback((): {
+    executionContractId: string;
+    expectedVersion?: number;
+  } | null => {
+    if (
+      preExec &&
+      preExec.ok &&
+      preExec.kind === "active" &&
+      preExec.contract.executionContractId
+    ) {
+      return {
+        executionContractId: preExec.contract.executionContractId,
+        expectedVersion: preExec.contract.version,
+      };
+    }
+    const id =
+      continuity && continuity.ok
+        ? continuity.projection.executionContractId
+        : null;
+    if (!id) return null;
+    const version =
+      continuity && continuity.ok
+        ? continuity.projection.executionContractVersion
+        : null;
+    return {
+      executionContractId: id,
+      expectedVersion: version ?? undefined,
+    };
+  }, [preExec, continuity]);
+
+  const handleConfirm = useCallback(async () => {
+    const target = resolveContractId();
+    if (!target) {
+      setError("Aucun contrat d’exécution durable à confirmer.");
+      return;
+    }
+    setBusy(true);
+    setError(null);
+    try {
+      const inspected = await w2InspectExecutionContractAction({
+        projectId,
+        executionContractId: target.executionContractId,
+        expectedVersion: target.expectedVersion,
+      });
+      if (!inspected.ok) {
+        setError(inspected.message);
+        await refreshExecutionContinuity();
+        return;
+      }
+      if (!inspected.inspectionSufficient) {
+        setError(
+          "Inspection insuffisante — confirmation refusée jusqu’à actualisation.",
+        );
+        await refreshExecutionContinuity();
+        return;
+      }
+
+      const confirmed = await w2ConfirmExecutionContractAction({
+        projectId,
+        executionContractId: target.executionContractId,
+      });
+      if (!confirmed.ok) {
+        setError(confirmed.message);
+        await refreshExecutionContinuity();
+        return;
+      }
+      // CONFIRM != EXECUTE — never authorize/reconcile/continue from Confirm.
+      await refreshExecutionContinuity();
+      onDurableFactsChanged?.();
+    } finally {
+      setBusy(false);
+    }
+  }, [
+    projectId,
+    resolveContractId,
+    refreshExecutionContinuity,
+    onDurableFactsChanged,
+  ]);
+
+  const handleExecute = useCallback(async () => {
+    const target = resolveContractId();
+    if (!target) {
+      setError("Aucun contrat d’exécution durable à exécuter.");
+      return;
+    }
+    setBusy(true);
+    setError(null);
+    try {
+      const { current } = await refreshExecutionContinuity();
+      const active =
+        current.ok && current.kind === "active" ? current : null;
+      if (!active) {
+        setError("Contrat durable introuvable après relecture.");
+        return;
+      }
+      if (active.contract.status === "confirmation_required") {
+        setError(
+          "Confirmation encore requise — Exécuter refuse d’agir.",
+        );
+        return;
+      }
+
+      if (!active.inspection.inspectionSufficient) {
+        const inspected = await w2InspectExecutionContractAction({
+          projectId,
+          executionContractId: active.contract.executionContractId,
+          expectedVersion: active.contract.version,
+        });
+        if (!inspected.ok || !inspected.inspectionSufficient) {
+          setError(
+            inspected.ok
+              ? "Inspection insuffisante — exécution refusée."
+              : inspected.message,
+          );
+          await refreshExecutionContinuity();
+          return;
+        }
+      }
+
+      const auth = await w2AuthorizeExecutionContractAction({
+        projectId,
+        executionContractId: active.contract.executionContractId,
+      });
+      if (!auth.ok) {
+        setError(auth.message);
+        await refreshExecutionContinuity();
+        return;
+      }
+      if (auth.outcome !== "AUTHORIZED" || auth.executionEligible !== true) {
+        setError(
+          auth.executionEligibilityReasonCode ||
+            "Autorisation insuffisante — exécution refusée.",
+        );
+        await refreshExecutionContinuity();
+        return;
+      }
+
+      // Execute once; continuation uses intent="continue" only.
+      await runServerReconcile(
+        "execute",
+        active.contract.executionContractId,
+        0,
+      );
+    } finally {
+      setBusy(false);
+    }
+  }, [
+    projectId,
+    resolveContractId,
+    refreshExecutionContinuity,
+    runServerReconcile,
+  ]);
+
+  const workItems = expandedWork
+    ? presentation.workItems
+    : presentation.workItems.slice(0, 4);
+
+  if (loading) {
+    return (
+      <div className={styles.root} data-testid="project-execution-surface">
+        <p className={styles.empty}>Lecture de l’exécution…</p>
+      </div>
+    );
+  }
+
+  if (presentation.empty) {
+    return (
+      <div className={styles.root} data-testid="project-execution-surface">
+        <header className={styles.head}>
+          <div>
+            <p className={styles.eyebrow}>Exécution</p>
+            <h2 className={styles.title}>{presentation.title}</h2>
+            <p className={styles.subtitle}>{presentation.subtitle}</p>
+          </div>
+          <span className={styles.chip} data-tone={presentation.tone}>
+            {presentation.statusLabel}
+          </span>
+        </header>
+        <p className={styles.empty} data-testid="project-execution-empty">
+          Aucun contrat d’exécution courant. L’onglet reste disponible sans
+          inventer d’état.
+        </p>
+        <div className={styles.footer}>
+          <button
+            type="button"
+            className={styles.primaryButton}
+            data-testid="project-execution-return"
+            onClick={onReturnToConversation}
+          >
+            Revenir à la conversation
+          </button>
+        </div>
+      </div>
+    );
+  }
+
+  return (
+    <div
+      className={styles.root}
+      data-testid="project-execution-surface"
+      data-status={presentation.status}
+      data-stage={presentation.stage}
+    >
+      <header className={styles.head}>
+        <div>
+          <p className={styles.eyebrow}>Exécution</p>
+          <h2 className={styles.title} data-testid="project-execution-title">
+            {presentation.title}
+          </h2>
+          <p className={styles.subtitle}>{presentation.subtitle}</p>
+        </div>
+        <span
+          className={styles.chip}
+          data-tone={presentation.tone}
+          data-testid="project-execution-status"
+        >
+          {presentation.statusLabel}
+        </span>
+      </header>
+
+      <section className={styles.metrics} aria-label="Faits d’exécution">
+        <div className={styles.metric}>
+          <p className={styles.metricLabel}>État</p>
+          <p className={styles.metricValue}>{presentation.statusLabel}</p>
+          {presentation.stateDetail ? (
+            <p className={styles.metricDetail}>{presentation.stateDetail}</p>
+          ) : null}
+          {presentation.failureCause === "timeout" ? (
+            <p className={styles.metricDetail}>Cause : délai dépassé</p>
+          ) : null}
+        </div>
+        <div className={styles.metric}>
+          <p className={styles.metricLabel}>Portée</p>
+          <p className={styles.metricValue}>
+            {presentation.scopeDetail ?? "Selon le contrat"}
+          </p>
+        </div>
+        <div className={styles.metric}>
+          <p className={styles.metricLabel}>Impact prévu</p>
+          <p className={styles.metricValue}>
+            {presentation.impactDetail ?? "Borné au contrat"}
+          </p>
+        </div>
+        <div className={styles.metric}>
+          <p className={styles.metricLabel}>Réversibilité</p>
+          <p className={styles.metricValue}>
+            {presentation.reversibilityDetail ?? "Selon le contrat"}
+          </p>
+        </div>
+      </section>
+
+      {presentation.resultTitle ? (
+        <section
+          className={styles.result}
+          data-testid="project-execution-result"
+          aria-labelledby="execution-result-title"
+        >
+          <div className={styles.resultHead}>
+            <h3 className={styles.sectionTitle} id="execution-result-title">
+              Résultat
+            </h3>
+            {presentation.resultVerified ? (
+              <span className={styles.chip} data-tone="ok">
+                Vérifié
+              </span>
+            ) : null}
+          </div>
+          <p className={styles.resultTitle}>{presentation.resultTitle}</p>
+          {presentation.resultBody ? (
+            <p className={styles.resultBody}>{presentation.resultBody}</p>
+          ) : null}
+        </section>
+      ) : null}
+
+      <section
+        className={styles.section}
+        aria-labelledby="execution-work-title"
+        data-testid="project-execution-work"
+      >
+        <h3 className={styles.sectionTitle} id="execution-work-title">
+          {presentation.status === "terminee" ||
+          presentation.status === "echouee" ||
+          presentation.status === "arretee"
+            ? "Ce qui a été fait"
+            : "Ce qui va être fait"}
+        </h3>
+        {workItems.length === 0 ? (
+          <p className={styles.empty}>Aucun détail d’éléments disponible.</p>
+        ) : (
+          <ul className={styles.workList}>
+            {workItems.map((item) => (
+              <li key={item.id} className={styles.workItem}>
+                <span className={styles.workLabel}>{item.label}</span>
+                <span className={styles.workState}>{item.stateLabel}</span>
+              </li>
+            ))}
+          </ul>
+        )}
+        {presentation.workItemsCollapsed && !expandedWork ? (
+          <button
+            type="button"
+            className={styles.moreLink}
+            onClick={() => setExpandedWork(true)}
+          >
+            Voir les {presentation.workItemsTotal} éléments →
+          </button>
+        ) : null}
+      </section>
+
+      {presentation.evidenceAvailable ? (
+        <section
+          className={styles.section}
+          aria-labelledby="execution-evidence-title"
+          data-testid="project-execution-evidence"
+        >
+          <h3 className={styles.sectionTitle} id="execution-evidence-title">
+            Preuves associées
+          </h3>
+          <p className={styles.empty}>
+            Les preuves soutiennent le résultat — elles ne le remplacent pas.
+          </p>
+          <ul className={styles.evidenceList}>
+            {presentation.evidenceItems.map((item) => (
+              <li key={item.id} className={styles.evidenceItem}>
+                <span className={styles.evidenceLabel}>{item.label}</span>
+                <span className={styles.evidenceState}>{item.stateLabel}</span>
+              </li>
+            ))}
+          </ul>
+        </section>
+      ) : null}
+
+      {presentation.attentionNote ? (
+        <p className={styles.attention} data-testid="project-execution-attention">
+          {presentation.attentionNote}
+        </p>
+      ) : null}
+
+      {error ? (
+        <p className={styles.attention} role="alert" data-testid="project-execution-error">
+          {error}
+        </p>
+      ) : null}
+
+      <div className={styles.footer}>
+        {presentation.cta.kind === "confirm" ? (
+          <button
+            type="button"
+            className={styles.primaryButton}
+            data-testid="project-execution-confirm"
+            disabled={!presentation.cta.enabled}
+            onClick={() => {
+              void handleConfirm();
+            }}
+          >
+            {busy ? "Confirmation…" : presentation.cta.label}
+          </button>
+        ) : null}
+        {presentation.cta.kind === "execute" ? (
+          <button
+            type="button"
+            className={styles.primaryButton}
+            data-testid="project-execution-execute"
+            disabled={!presentation.cta.enabled}
+            onClick={() => {
+              void handleExecute();
+            }}
+          >
+            {busy ? "Exécution…" : presentation.cta.label}
+          </button>
+        ) : null}
+        {presentation.cta.kind === "return_conversation" ||
+        presentation.cta.kind === "none" ? (
+          <button
+            type="button"
+            className={styles.primaryButton}
+            data-testid="project-execution-return"
+            onClick={onReturnToConversation}
+          >
+            Revenir à la conversation
+          </button>
+        ) : null}
+      </div>
+    </div>
+  );
+}

```
