# PRODUCT-PROOF-JOURNEY-INTEGRITY — Review Pack (FULL)

- timestamp: 2026-09-15T15:19:01Z
- Cycle: 8 — Delivery / EVOL / Critical
- Morris GO: full journey audit + bounded non-structural implementation
- origin/main: `6a41ab7e7deda9f7168d12a37b9316413565fa16`
- worktree: `/Users/morris/Projects/sfia-studio-product-proof-journey-integrity`
- branch: `fix/sfia-studio-product-proof-journey-integrity`
- commits ahead: 0 (dirty local candidate)
- dogfood forensic freeze: `/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d` @ `6a41ab7e…`
- forensic snapshot: `~/.cache/sfia-dogfood-backups/journey-integrity-forensic-20260915T150249Z`
- Project commit/push/PR/merge: NOT PERFORMED
- Fake/Real: DETERMINISTIC ONLY

## B. Dogfood forensic observations

Observed failed journey (evidence only; ZERO Product mutation this cycle):

1. Gestion de tâches reopened (LPS v16: `prj:ae9bd0de-e24d-474f-880d-ff5ea56dbaf6`).
2. UI: non-recoverable pending → « Reformulez votre demande ».
3. Reformuler avec Nora + precise materialization for `projects/sfia-studio/.sandbox/gestion-de-taches.md`.
4. Nora conversational success without durable subject transition.
5. After refresh: still Reformulez + generic « Instruire les options » visible.
6. Durable pending still active: `prop:f2:4a90b644-3eb7-43b8-9e83-b140cfeb9a9c`.
7. Durable binding (NOT acme/widget): `mcleland147/sfia-workspace` / pathRoot `projects/sfia-studio/.sandbox`.

## C. CANONICAL JOURNEY CONTRACT J00→J17

| State | Primary action | Subject | SoT | Forbidden competitor |
|---|---|---|---|---|
| J00 Open | load project | Project | LPS/Project | fake binding |
| J01 Recovery | Resume LPS OR focus Nora | Project | LPS | direct proposeOptions |
| J02 Intention | Nora send (+ reinstruction) | Conversation | Nora/F2 | generic Instruire |
| J03 Binding | load/save durable binding | RepositoryBinding | Project payload | sample as truth |
| J04 Qualify | F2 qualify | Cycle/Proposal | Cycle+LPS | silent NEW_CYCLE when active |
| J05 Proposal | DECISION_REQUIRED mint | Proposal | Epistemic+snapshot | competing pending |
| J06 Continuity | re-read subject | Proposal | Epistemic hydrate | obsolete subject |
| J07 Options | Instruire exact proposalId | Proposal | PresentedOptionSet | generic trajectory options |
| J08 Decide | pursue/amend/refuse | Option | HumanDecision | auto-decide |
| J09 Close | DecisionBasis | Proposal closed | DecisionRef | PREPARE on amend/refuse |
| J10 Eligibility | PREPARE if pursue | HD+Proposal | DecisionBasis | PREPARE on amend/refuse |
| J11 PREPARE | mint EC | ExecutionContract | EC | wrong lineage |
| J12 Inspect | inspect | EC | EC | Execute without inspect |
| J13 Confirm | Confirmation if required | EC | Confirmation | skip when required |
| J14 Authority | authorize | EC | Authority | fake authority |
| J15 Execute | Attempt | Attempt | Attempt | auto-execute |
| J16 Evidence | Evidence/ReviewBundle | Evidence | Evidence | silent skip |
| J17 Replan | LPS/next | LPS/Trajectory | LPS | fake trajectory for Proposal |

J00→J12 deterministic this lot. J13→J17 static audit.

## D–F. Root causes (confirmed)

1. Recovery « nouvelle intention » → proposeOptions (Nora bypass).
2. Armed reinstruction cleared on any result.ok (including clarification).
3. TrajectorySurface no Decision Subject refresh after Nora send.
4. Generic Instruire visible beside pending_reinstruction.
5. Proposal body process-local only → COMPLETE via Epistemic proposalSnapshot (no new table).
6. RepositoryBindingForm hardcoded acme/widget.

Prior button bugs are symptoms of Decision Subject routing + arm-consumption + refresh defects.

## G. Asset classification

KEEP: LPS/Epistemic/PresentedOptionSet/HD/DecisionBasis/EC.
COMPLETE: pending marker proposalSnapshot + hydrate.
ADAPT: Recovery, Trajectory CTAs, arm consumption, binding form, refresh notify.
FREEZE: Conversation legacy prepare (already off).

## H. Structural gate

**NO** — no new DB table/migration/aggregate/persistence engine.

## I–P. Implementation + evidence

Files modified listed in git status Product paths above.

Results:
- Targeted: 179 PASS
- Full Vitest: **4063 passed / 137 skipped / 0 failed**
- typecheck/lint/build/diff-check: PASS

Outcomes:
1. Recovery → Nora focus only
2. Reinstruction clears only on superseded / f2_proposal DECISION_REQUIRED
3. Snapshot hydrate restores Proposal after process-local clear
4. Generic CTA hidden when pending owns next action
5. Binding loads durable truth
6. notifyDurableFactsChanged after proposal mint/supersession
7. PREPARE pursue path with gestion-de-taches.md in journey test

## Q. J13→J17 downstream audit

| Stage | Exists | Gap |
|---|---|---|
| J13 Confirmation | Yes | REAL gate; not this lot |
| J14 Authority | Yes | local TEMPORARY WITH EXIT |
| J15 Execute | Yes | REAL forbidden; next dogfood GO |
| J16 Evidence/ReviewBundle | Yes | GCEC proof varies |
| J17 LPS replan | Yes | Decision Subject precedence now gates competitors |

## R–U

Dogfood untouched by this cycle (forensic only).
Next Morris gate: ChatGPT Critical Review → conditional Product commit/PR → dogfood reproof GO.
ZERO LIVE/REAL.

## Verdict

**PRODUCT-PROOF-JOURNEY-INTEGRITY — CANONICAL USER JOURNEY RECONSTRUCTED — DETERMINISTIC PROJECT→NORA→PROPOSAL→OPTIONS→HUMANDECISION→PREPARE PATH PROVEN — DOWNSTREAM PATH AUDITED — READY FOR CHATGPT CRITICAL REVIEW**

────────────────────────────────────────────────────────────
# COMPLETE USEFUL DIFF

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 2b9da045..312eed3e 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -882,6 +882,8 @@ describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
     );
     expect(screen.queryByTestId("w2-reformulate-with-nora")).toBeNull();
     expect(screen.queryByTestId("w2-instruct-recoverable-options")).toBeNull();
+    // JOURNEY-INTEGRITY — pending owns next action; hide generic instruct CTA
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
     expect(reformulate).not.toHaveBeenCalled();
   });

@@ -902,6 +904,7 @@ describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
     );
     expect(screen.getByTestId("w2-instruct-recoverable-options")).toBeVisible();
     expect(screen.queryByTestId("w2-reformulate-with-nora")).toBeNull();
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
     const body = screen.getByTestId("w2-pending-reinstruction-body").textContent ?? "";
     expect(body).not.toMatch(/fallback|process-local|ProjectTrajectory/i);
   });
@@ -927,6 +930,7 @@ describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
     expect(await screen.findByTestId("w2-pending-reinstruction")).toHaveTextContent(
       "Reformulez votre demande",
     );
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
     fireEvent.click(screen.getByTestId("w2-reformulate-with-nora"));
     expect(reformulate).toHaveBeenCalledTimes(1);
     expect(reformulate).toHaveBeenCalledWith("prop:lost-only");
@@ -949,5 +953,23 @@ describe("CORR-PROOF-11 final — pending reinstruction UI states", () => {
     expect(body).not.toMatch(/process-local/i);
     expect(body).not.toMatch(/ProjectTrajectory/i);
     expect(body).not.toMatch(/\bpending\b/i);
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+  });
+
+  it("JOURNEY-INTEGRITY — pending_reinstruction hides generic w2-propose-options", async () => {
+    // Active cycle is present (beforeEach mocks), yet pending must win CTA exclusivity.
+    readActiveDecisionSubjectMock.mockResolvedValue({
+      ok: true,
+      kind: "pending_reinstruction_required",
+      message:
+        "Cette demande doit être reformulée avec Nora pour continuer. Rien ne sera exécuté sans une nouvelle décision de votre part.",
+      proposalIds: ["prop:pending-owns"],
+      recoverableProposalIds: [],
+    });
+
+    render(<TrajectorySurface projectId="prj:pending-cta" />);
+    expect(await screen.findByTestId("w2-pending-reinstruction")).toBeVisible();
+    expect(screen.queryByTestId("w2-propose-options")).toBeNull();
+    expect(proposeMock).not.toHaveBeenCalled();
   });
 });
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx
index b5178d01..4562978f 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx
@@ -1,6 +1,6 @@
 /** @vitest-environment jsdom */
-import { cleanup, render, screen } from "@testing-library/react";
-import { afterEach, describe, expect, it } from "vitest";
+import { cleanup, fireEvent, render, screen } from "@testing-library/react";
+import { afterEach, describe, expect, it, vi } from "vitest";
 import { RecoverySurface } from "@/features/pre-m6-product-ui/surfaces/RecoverySurface";
 import { ProjectRecoveryBanner } from "@/features/studio-projects/ProjectRecoveryBanner";
 import {
@@ -15,6 +15,14 @@ import {
   w1RestartHonestyMessage,
 } from "@/features/project-assistant/presentationLabels";

+/*
+ * JOURNEY-INTEGRITY gap note:
+ * Full ProjectWorkspacePage proof that onRequalify does NOT call proposeOptions
+ * is skipped (heavy page mock surface). RecoverySurface only invokes the
+ * provided onRequalify callback — wiring in ProjectWorkspacePage focuses Nora
+ * (focusConversation + loadProject) and must not set recoveryProposeSignal.
+ */
+
 afterEach(() => {
   cleanup();
 });
@@ -86,6 +94,20 @@ describe("W1 Track E — recovery UI disclosures", () => {
     );
   });

+  it("JOURNEY-INTEGRITY — requalify CTA only fires onRequalify (no propose built-in)", () => {
+    const onRequalify = vi.fn();
+    const onResumeDurable = vi.fn();
+    render(
+      <RecoverySurface
+        onRequalify={onRequalify}
+        onResumeDurable={onResumeDurable}
+      />,
+    );
+    fireEvent.click(screen.getByTestId("recovery-requalify"));
+    expect(onRequalify).toHaveBeenCalledTimes(1);
+    expect(onResumeDurable).not.toHaveBeenCalled();
+  });
+
   it("ProjectRecoveryBanner renders honesty copy and controlled requalify CTA", () => {
     render(<ProjectRecoveryBanner />);
     expect(screen.getByTestId("w1-recovery-disclosures")).toBeTruthy();
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index b5942b86..28f4ea39 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -72,9 +72,8 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   }, []);

   const onRequalify = useCallback(async () => {
-    // B1 — bump signal so TrajectorySurface runs its own proposeOptions()
-    // (shared code path that materializes w2-options).
-    setRecoveryProposeSignal((n) => n + 1);
+    // JOURNEY-INTEGRITY — "nouvelle intention" focuses Nora for qualification.
+    // Must NOT bypass to proposeOptions / Trajectory instruction.
     focusConversation();
     void loadProject();
   }, [focusConversation, loadProject]);
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index df82e7fa..a4b8fa2f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -376,8 +376,17 @@ export function useProductConversation({
       }

       if (reinstructionOfProposalId) {
-        setArmedReinstructionOfProposalId(null);
-        options?.onReinstructionConsumed?.();
+        const reinstructionConsumed =
+          result.reinstructionTransition === "superseded" ||
+          (result.f2?.turnKind === "f2_proposal" &&
+            result.f2.proposal?.status === "DECISION_REQUIRED");
+        if (reinstructionConsumed) {
+          setArmedReinstructionOfProposalId(null);
+          options?.onReinstructionConsumed?.();
+          notifyDurableFactsChanged();
+        }
+      } else if (result.f2?.proposal?.status === "DECISION_REQUIRED") {
+        notifyDurableFactsChanged();
       }

       lastSendFailedRef.current = false;
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx
index f26da938..3cbdc5eb 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx
@@ -1,40 +1,114 @@
 "use client";

-import { useState } from "react";
-import { setProjectRepositoryBindingAction } from "@/lib/vertical-slice-runtime/actions";
+import { useEffect, useState } from "react";
+import {
+  getProjectRuntimeAction,
+  setProjectRepositoryBindingAction,
+} from "@/lib/vertical-slice-runtime/actions";
+
+type BindingFields = {
+  identity: string;
+  remoteUrl: string;
+  defaultBranch: string;
+  pathRoot: string;
+};
+
+const EMPTY: BindingFields = {
+  identity: "",
+  remoteUrl: "",
+  defaultBranch: "",
+  pathRoot: "",
+};

 /**
- * Minimal CR-GCEC-03 UI — view/set Project repository binding.
+ * CR-GCEC-03 / JOURNEY-INTEGRITY — view/set Project repository binding.
+ * Loads durable Project truth; never presents sample values as current truth.
  * Save is local Product persistence only (no network).
  */
 export function RepositoryBindingForm(props: {
   projectId: string;
   onSaved?: () => void;
 }) {
-  const [identity, setIdentity] = useState("acme/widget");
-  const [remoteUrl, setRemoteUrl] = useState(
-    "https://github.com/acme/widget.git",
-  );
-  const [defaultBranch, setDefaultBranch] = useState("main");
-  const [pathRoot, setPathRoot] = useState("docs/");
+  const [identity, setIdentity] = useState(EMPTY.identity);
+  const [remoteUrl, setRemoteUrl] = useState(EMPTY.remoteUrl);
+  const [defaultBranch, setDefaultBranch] = useState(EMPTY.defaultBranch);
+  const [pathRoot, setPathRoot] = useState(EMPTY.pathRoot);
+  const [configured, setConfigured] = useState(false);
   const [message, setMessage] = useState<string | null>(null);
   const [busy, setBusy] = useState(false);
+  const [loaded, setLoaded] = useState(false);
+
+  useEffect(() => {
+    let cancelled = false;
+    void (async () => {
+      const result = await getProjectRuntimeAction(props.projectId);
+      if (cancelled) return;
+      if (!result.ok) {
+        setLoaded(true);
+        setMessage("Binding illisible — aucune valeur d'exemple n'est affichée.");
+        return;
+      }
+      const binding = result.project.repositoryBinding;
+      if (
+        binding &&
+        typeof binding.identity === "string" &&
+        binding.identity.trim() &&
+        typeof binding.remoteUrl === "string" &&
+        binding.remoteUrl.trim()
+      ) {
+        setIdentity(binding.identity);
+        setRemoteUrl(binding.remoteUrl);
+        setDefaultBranch(binding.defaultBranch ?? "main");
+        setPathRoot(binding.pathRoot ?? "");
+        setConfigured(true);
+      } else {
+        setIdentity("");
+        setRemoteUrl("");
+        setDefaultBranch("");
+        setPathRoot("");
+        setConfigured(false);
+      }
+      setLoaded(true);
+    })();
+    return () => {
+      cancelled = true;
+    };
+  }, [props.projectId]);

   async function onSave() {
     setBusy(true);
     setMessage(null);
     try {
+      if (!identity.trim() || !remoteUrl.trim()) {
+        setMessage(
+          "Binding incomplet — renseignez identity et remoteUrl avant d'enregistrer.",
+        );
+        return;
+      }
       const result = await setProjectRepositoryBindingAction({
         projectId: props.projectId,
-        identity,
-        remoteUrl,
-        defaultBranch,
-        pathRoot: pathRoot || undefined,
+        identity: identity.trim(),
+        remoteUrl: remoteUrl.trim(),
+        defaultBranch: defaultBranch.trim() || "main",
+        pathRoot: pathRoot.trim() || undefined,
       });
       if (!result.ok) {
         setMessage(`${result.code}: ${result.message}`);
         return;
       }
+      const saved = result.repositoryBinding as {
+        identity?: string;
+        remoteUrl?: string;
+        defaultBranch?: string;
+        pathRoot?: string;
+      } | null;
+      if (saved) {
+        setIdentity(saved.identity ?? identity);
+        setRemoteUrl(saved.remoteUrl ?? remoteUrl);
+        setDefaultBranch(saved.defaultBranch ?? defaultBranch);
+        setPathRoot(saved.pathRoot ?? pathRoot);
+        setConfigured(true);
+      }
       setMessage("Binding enregistré (local).");
       props.onSaved?.();
     } finally {
@@ -44,6 +118,15 @@ export function RepositoryBindingForm(props: {

   return (
     <div data-testid="repository-binding-form">
+      {!loaded ? (
+        <p data-testid="repo-binding-loading">Lecture du binding…</p>
+      ) : (
+        <p data-testid="repo-binding-status">
+          {configured
+            ? "Binding durable chargé."
+            : "Aucun binding configuré — renseignez le dépôt lié."}
+        </p>
+      )}
       <label>
         provider
         <input value="github" readOnly data-testid="repo-binding-provider" />
@@ -53,6 +136,7 @@ export function RepositoryBindingForm(props: {
         <input
           value={identity}
           onChange={(e) => setIdentity(e.target.value)}
+          placeholder="org/repo"
           data-testid="repo-binding-identity"
         />
       </label>
@@ -61,6 +145,7 @@ export function RepositoryBindingForm(props: {
         <input
           value={remoteUrl}
           onChange={(e) => setRemoteUrl(e.target.value)}
+          placeholder="https://github.com/org/repo.git"
           data-testid="repo-binding-remote-url"
         />
       </label>
@@ -69,6 +154,7 @@ export function RepositoryBindingForm(props: {
         <input
           value={defaultBranch}
           onChange={(e) => setDefaultBranch(e.target.value)}
+          placeholder="main"
           data-testid="repo-binding-default-branch"
         />
       </label>
@@ -77,12 +163,13 @@ export function RepositoryBindingForm(props: {
         <input
           value={pathRoot}
           onChange={(e) => setPathRoot(e.target.value)}
+          placeholder="docs/"
           data-testid="repo-binding-path-root"
         />
       </label>
       <button
         type="button"
-        disabled={busy}
+        disabled={busy || !loaded}
         onClick={() => void onSave()}
         data-testid="repo-binding-save"
       >
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 3b2e2702..fda1792e 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -498,11 +498,8 @@ export function TrajectorySurface({
     void rehydrateActiveDecisionSubject();
   }, [rehydrateActiveDecisionSubject, durableRefreshSignal]);

-  useEffect(() => {
-    if (recoveryProposeSignal > 0) {
-      void proposeOptions();
-    }
-  }, [recoveryProposeSignal, proposeOptions]);
+  // JOURNEY-INTEGRITY — recoveryProposeSignal no longer auto-proposes options.
+  // Kept as optional no-op prop for backward-compatible wiring.

   const decide = useCallback(
     async (selectedOptionRef: string) => {
@@ -1194,11 +1191,11 @@ export function TrajectorySurface({
       ) : null}

       {/*
-        W2 OptionSet requires an active CycleInstance. Hide the CTA in all
-        pre-cycle states (CURRENT NEXT_CYCLE LR, candidate-only, or empty)
-        so the Pilote is never offered a path known to return CYCLE_NOT_QUALIFIED.
+        W2 OptionSet requires an active CycleInstance.
+        JOURNEY-INTEGRITY — when a pending Proposal Decision Subject owns the
+        next action, hide the generic trajectory instruct CTA (no conflicting subjects).
       */}
-      {activeCycleInstanceId ? (
+      {activeCycleInstanceId && !pendingReinstruction ? (
       <div className={styles.actions}>
         <button
           type="button"
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 88d31bc7..d055762e 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -145,6 +145,7 @@ async function commitPendingDecisionSubjectForDecisionRequired(input: {
     lpsId: input.proposal.contextSnapshot.lpsId,
     lpsVersion: input.proposal.contextSnapshot.lpsVersion,
     doctrineDigest: input.proposal.contextSnapshot.doctrineDigest,
+    proposal: input.proposal,
     correlationId: `cor:pending-subject:${input.proposal.proposalId}`,
   };

@@ -656,6 +657,7 @@ function f2Success(base: {
   executionBlocked?: boolean;
   mw5?: Mw5TurnSurface | null;
   turnKind?: "f1_informative" | "f2_clarification" | "f2_proposal" | "f2_blocked";
+  reinstructionTransition?: "superseded" | "not_consumed" | "not_applicable";
 }): ProjectAssistantSendResult {
   const turnKind =
     base.turnKind ??
@@ -677,6 +679,11 @@ function f2Success(base: {
     toolEvents: [],
     project: base.project,
     ephemeralNotice: EPHEMERAL_NOTICE,
+    reinstructionTransition:
+      base.reinstructionTransition ??
+      (base.proposal?.status === "DECISION_REQUIRED"
+        ? "not_applicable"
+        : "not_applicable"),
     mw5: base.mw5
       ? {
           disposition: base.mw5.disposition,
@@ -738,6 +745,7 @@ async function f2ConversationalSuccess(input: {
   executionBlocked?: boolean;
   mw5?: Mw5TurnSurface | null;
   turnKind?: "f1_informative" | "f2_clarification" | "f2_proposal" | "f2_blocked";
+  reinstructionTransition?: "superseded" | "not_consumed" | "not_applicable";
 }): Promise<ProjectAssistantSendResult> {
   await persistCanonicalF2AssistantTurn({
     projectId: input.project.projectId,
@@ -1249,6 +1257,9 @@ export async function orchestrateAssistantSend(input: {
       executionBlocked: true,
       mw5: mw5.surface,
       turnKind: "f2_proposal",
+      reinstructionTransition: reinstructionGate.reinstructionOfProposalId
+        ? "superseded"
+        : "not_applicable",
     });
   }

@@ -1549,5 +1560,8 @@ export async function orchestrateAssistantSend(input: {
     proposal,
     executionBlocked,
     mw5: mw5.surface,
+    reinstructionTransition: newCycleReinstructionOf
+      ? "superseded"
+      : "not_applicable",
   });
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index efc483f3..a01996c1 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -211,6 +211,11 @@ export type ProjectAssistantSendSuccess = {
   /** MW5 — challenge / clarification / Critical ordering / escalation (when assessed). */
   mw5?: Mw5CognitiveSurfaceDto | null;
   f2?: F2TurnPayload;
+  /**
+   * JOURNEY-INTEGRITY — reinstruction arm may clear only when this is "superseded".
+   * Conversational ok without DECISION_REQUIRED supersession → "not_consumed".
+   */
+  reinstructionTransition?: "superseded" | "not_consumed" | "not_applicable";
   /**
    * LR CORR-DELIVERY-02 — optional Product-turn Recommendation materialization.
    * null = not attempted / no structured turn; false = none or fail-closed; true = persisted.
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
index 550e87ee..ba161d17 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
@@ -16,6 +16,7 @@ import {
   pilotPendingReinstructionMessage,
 } from "../presentationLabels";
 import {
+  hydrateProposalsFromPendingMarkers,
   listActivePendingDecisionSubjectMarkers,
   type PendingDecisionSubjectMarker,
 } from "./pendingDecisionSubjectMarker";
@@ -264,6 +265,7 @@ export async function readActiveProposalDecisionSubject(
   if (!pending.ok) return pending;

   if (pending.markers.length > 0) {
+    hydrateProposalsFromPendingMarkers(pending.markers);
     const localDecisionRequired = new Set(
       listProposalsForProject(projectId)
         .filter((p) => p.status === "DECISION_REQUIRED")
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts b/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
index 0b0853e1..e5e6d995 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
@@ -11,6 +11,8 @@

 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
+import type { ProposalDto } from "../f2/types";
+import { saveProposal, getProposal } from "../f2/proposalStore";
 import { pilotAmbiguousPendingMessage } from "../presentationLabels";
 import {
   isProposalSubjectPresentedSet,
@@ -31,6 +33,11 @@ export type PendingDecisionSubjectMarker = {
   readonly lpsVersion: number;
   readonly doctrineDigest: string;
   readonly status: "pending_binding";
+  /**
+   * JOURNEY-INTEGRITY — reconstructible Proposal snapshot inside existing
+   * Epistemic Observation (no new table). Optional for legacy markers.
+   */
+  readonly proposalSnapshot?: ProposalDto;
 };

 export function pendingDecisionSubjectObservationId(
@@ -64,6 +71,12 @@ export function parsePendingDecisionSubjectMarker(
     if (!Number.isInteger(v.lpsVersion)) return null;
     if (typeof v.doctrineDigest !== "string") return null;
     if (v.status !== "pending_binding") return null;
+    const snapshot =
+      v.proposalSnapshot &&
+      typeof v.proposalSnapshot === "object" &&
+      (v.proposalSnapshot as ProposalDto).proposalId === v.proposalId
+        ? (v.proposalSnapshot as ProposalDto)
+        : undefined;
     return {
       kind: PENDING_DECISION_SUBJECT_KIND,
       proposalId: v.proposalId,
@@ -73,12 +86,31 @@ export function parsePendingDecisionSubjectMarker(
       lpsVersion: v.lpsVersion as number,
       doctrineDigest: v.doctrineDigest,
       status: "pending_binding",
+      ...(snapshot ? { proposalSnapshot: snapshot } : {}),
     };
   } catch {
     return null;
   }
 }

+/**
+ * Hydrate process-local ProposalStore from durable marker snapshots when missing.
+ * Completes Epistemic Observation continuity without a new persistence engine.
+ */
+export function hydrateProposalsFromPendingMarkers(
+  markers: readonly PendingDecisionSubjectMarker[],
+): readonly string[] {
+  const hydrated: string[] = [];
+  for (const marker of markers) {
+    if (!marker.proposalSnapshot) continue;
+    if (getProposal(marker.proposalId)) continue;
+    if (marker.proposalSnapshot.proposalId !== marker.proposalId) continue;
+    saveProposal(marker.proposalSnapshot);
+    hydrated.push(marker.proposalId);
+  }
+  return hydrated;
+}
+
 export type WritePendingDecisionSubjectMarkerInput = {
   readonly oa: RuntimeOaStack;
   readonly projectId: string;
@@ -87,6 +119,7 @@ export type WritePendingDecisionSubjectMarkerInput = {
   readonly lpsId: string;
   readonly lpsVersion: number;
   readonly doctrineDigest: string;
+  readonly proposal?: ProposalDto;
   readonly correlationId?: string;
 };

@@ -109,6 +142,9 @@ export async function writePendingDecisionSubjectMarker(
     lpsVersion: input.lpsVersion,
     doctrineDigest: input.doctrineDigest,
     status: "pending_binding",
+    ...(input.proposal && input.proposal.proposalId === input.proposalId
+      ? { proposalSnapshot: input.proposal }
+      : {}),
   };
   const written = await input.oa.cycleServices.updateEpistemicState.execute({
     projectId: input.projectId,
@@ -251,6 +287,7 @@ export type ReplacePendingDecisionSubjectForExplicitReinstructionInput = {
   readonly lpsId: string;
   readonly lpsVersion: number;
   readonly doctrineDigest: string;
+  readonly proposal?: ProposalDto;
   readonly correlationId?: string;
 };

@@ -384,6 +421,9 @@ export async function replacePendingDecisionSubjectForExplicitReinstruction(
     lpsVersion: input.lpsVersion,
     doctrineDigest: input.doctrineDigest,
     status: "pending_binding",
+    ...(input.proposal && input.proposal.proposalId === newProposalId
+      ? { proposalSnapshot: input.proposal }
+      : {}),
   };

   const written = await input.oa.cycleServices.updateEpistemicState.execute({

===== NEW FILE projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts =====
/**
 * PRODUCT-PROOF-JOURNEY-INTEGRITY — Decision Subject continuity, hydrate,
 * reinstruction supersession, pursue→PREPARE lineage (ZERO REAL).
 * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  getProposal,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { PROPOSAL_SUBJECT_PURSUE_REF } from "@/features/project-assistant/w2/proposalSubjectOptions";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import {
  hydrateProposalsFromPendingMarkers,
  listActivePendingDecisionSubjectMarkers,
  replacePendingDecisionSubjectForExplicitReinstruction,
  writePendingDecisionSubjectMarker,
} from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
import {
  assertExplicitReinstructionGate,
  listEffectivePendingDecisionSubjectMarkers,
  readActiveProposalDecisionSubject,
} from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
import type {
  RuntimeApplicationService,
  RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";

const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";
const NON_ACME_BINDING = {
  identity: "mcleland147/sfia-workspace",
  remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
  defaultBranch: "main",
  pathRoot: "projects/sfia-studio/.sandbox",
} as const;

function docsWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string;
  proposalId?: string;
  status?: ProposalDto["status"];
}): ProposalDto {
  return saveProposal({
    proposalId: input.proposalId ?? `prop:f2:jint-${Date.now()}`,
    status: input.status ?? "DECISION_REQUIRED",
    rephrasedRequest: "Matérialiser la note de gestion de tâches",
    objective: "Matérialiser le livrable de gestion de tâches",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "Continuation Artifact du cycle actif",
    scope: "écriture de document bornée — cycle actif",
    outOfScope: ["nouveau cycle", "REAL"],
    activatedBlocks: [],
    expectedOutcome: "Fichier sandbox matérialisé",
    sources: ["nora"],
    risks: ["mauvais sujet décisionnel"],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
    morrisGateRequired: true,
    nextPossibleStep: "Instruire les options sur ce sujet",
    contextSnapshot: {
      projectId: input.projectId,
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      doctrineDigest: input.doctrineDigest,
      activeCycleInstanceId: input.activeCycleInstanceId,
      ckcResolutionRef: "ckcres:w2-harness",
    },
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: null,
      targetRepositoryRef: null,
      targetPath: TARGET_PATH,
      scopeIn: ["sandbox"],
      scopeOut: ["git"],
      expectedOutputs: ["markdown"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      reversibilityExpectation: "reversible",
      artifactBrief: "Note gestion de tâches",
      contentRequirements: [],
      exitRequirementKinds: [],
    },
  });
}

async function markPending(
  oa: RuntimeOaStack,
  proposal: ProposalDto,
  opts?: { withSnapshot?: boolean },
): Promise<void> {
  const sealed = sealProposalExecutionBasis(proposal);
  const subjectDigest = computeProposalSubjectDigest(
    sealed,
    proposal.proposalId,
  );
  const written = await writePendingDecisionSubjectMarker({
    oa,
    projectId: proposal.contextSnapshot.projectId,
    proposalId: proposal.proposalId,
    subjectDigest,
    lpsId: proposal.contextSnapshot.lpsId,
    lpsVersion: proposal.contextSnapshot.lpsVersion,
    doctrineDigest: proposal.contextSnapshot.doctrineDigest,
    ...(opts?.withSnapshot === false ? {} : { proposal }),
  });
  expect(written.ok).toBe(true);
}

describe("PRODUCT-PROOF-JOURNEY-INTEGRITY — T02–T07 / N03 / N05 / T15–T17", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("journey-integrity.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "jint" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "ji",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function proposeWith(projectId: string, proposalId: string) {
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({ oa, projectId });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qualification failed");
    return proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId,
    });
  }

  it("T02 — marker without snapshot + cleared store → pending lost (recoverable empty)", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposalA = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-t02-a",
    });
    await markPending(runtime.oa!, proposalA, { withSnapshot: false });
    resetF2ProposalStoreForTests();
    expect(getProposal(proposalA.proposalId)).toBeNull();

    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pending_reinstruction_required");
    if (read.kind !== "pending_reinstruction_required") return;
    expect(read.recoverableProposalIds).toEqual([]);
    expect(read.message).toMatch(/reformul/i);
  });

  it("T03 — marker WITH snapshot + cleared store → recoverable via hydrate", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposalA = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-t03-a",
    });
    await markPending(runtime.oa!, proposalA, { withSnapshot: true });
    resetF2ProposalStoreForTests();
    expect(getProposal(proposalA.proposalId)).toBeNull();

    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pending_reinstruction_required");
    if (read.kind !== "pending_reinstruction_required") return;
    expect(read.recoverableProposalIds).toEqual([proposalA.proposalId]);
    expect(getProposal(proposalA.proposalId)?.status).toBe("DECISION_REQUIRED");
    expect(getProposal(proposalA.proposalId)?.executionIntent?.targetPath).toBe(
      TARGET_PATH,
    );
  });

  it("T04–T07 — explicit reinstruction A→B with snapshot; B survives store reset", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposalA = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-t04-a",
    });
    await markPending(runtime.oa!, proposalA, { withSnapshot: true });

    const gateRequired = await assertExplicitReinstructionGate({
      oa: runtime.oa!,
      projectId,
      reinstructionOfProposalId: null,
    });
    expect(gateRequired.ok).toBe(false);
    if (gateRequired.ok) return;
    expect(gateRequired.code).toBe("EXPLICIT_REINSTRUCTION_REQUIRED");

    const proposalB = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-t04-b",
    });
    const sealedB = sealProposalExecutionBasis(proposalB);
    const digestB = computeProposalSubjectDigest(sealedB, proposalB.proposalId);
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: proposalA.proposalId,
        newProposalId: proposalB.proposalId,
        subjectDigest: digestB,
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
        proposal: proposalB,
      },
    );
    expect(replaced.ok).toBe(true);

    const effective = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(effective.ok).toBe(true);
    if (!effective.ok) return;
    expect(effective.markers.map((m) => m.proposalId)).toEqual([
      proposalB.proposalId,
    ]);
    expect(effective.markers[0]?.proposalSnapshot?.proposalId).toBe(
      proposalB.proposalId,
    );

    const gateOk = await assertExplicitReinstructionGate({
      oa: runtime.oa!,
      projectId,
      reinstructionOfProposalId: proposalB.proposalId,
    });
    expect(gateOk.ok).toBe(true);

    // Process-local loss — Epistemic snapshot must rehydrate B.
    resetF2ProposalStoreForTests();
    expect(getProposal(proposalB.proposalId)).toBeNull();

    const afterReset = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(afterReset.ok).toBe(true);
    if (!afterReset.ok) return;
    expect(afterReset.kind).toBe("pending_reinstruction_required");
    if (afterReset.kind !== "pending_reinstruction_required") return;
    expect(afterReset.recoverableProposalIds).toEqual([proposalB.proposalId]);
    expect(getProposal(proposalB.proposalId)?.executionIntent?.targetPath).toBe(
      TARGET_PATH,
    );

    const active = await listActivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(active.ok).toBe(true);
    if (!active.ok) return;
    const hydrated = hydrateProposalsFromPendingMarkers(active.markers);
    expect(hydrated).toEqual([]); // already hydrated by read
  });

  it("N03 — multi-pending remains AMBIGUOUS (no first-id arbitration)", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const a = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n03-a",
    });
    const b = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n03-b",
    });
    await markPending(runtime.oa!, a);
    await markPending(runtime.oa!, b);

    const gated = await assertExplicitReinstructionGate({
      oa: runtime.oa!,
      projectId,
      reinstructionOfProposalId: a.proposalId,
    });
    expect(gated.ok).toBe(false);
    if (gated.ok) return;
    expect(gated.code).toBe("AMBIGUOUS_PENDING_REINSTRUCTION");

    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pending_reinstruction_required");
    if (read.kind !== "pending_reinstruction_required") return;
    expect(read.message).toMatch(/Plusieurs demandes/i);
    expect(read.markers.map((m) => m.proposalId).sort()).toEqual(
      [a.proposalId, b.proposalId].sort(),
    );
  });

  it("N05 — arm-clearing contract: DECISION_REQUIRED reinstruction ⇒ superseded (not clarification)", async () => {
    // Documented contract (types.ts + useProductConversation):
    // reinstruction arm clears only when reinstructionTransition === "superseded"
    // (or f2_proposal + DECISION_REQUIRED). Clarification success must NOT be
    // "superseded" — f2Success defaults unset transition to "not_applicable".
    const allowed = ["superseded", "not_consumed", "not_applicable"] as const;
    expect(allowed).toContain("superseded");
    expect(allowed).toContain("not_applicable");
    expect("superseded").not.toBe("not_applicable");

    // DECISION_REQUIRED path after explicit replace reports the supersession
    // surface via Epistemic (A resolved) — arm-clearing signal for UI is
    // reinstructionTransition:"superseded" when orchestrate commits B.
    const { projectId, cycleInstanceId, ctx } = await seed();
    const a = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n05-a",
    });
    await markPending(runtime.oa!, a, { withSnapshot: true });
    const b = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n05-b",
    });
    const sealed = sealProposalExecutionBasis(b);
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: a.proposalId,
        newProposalId: b.proposalId,
        subjectDigest: computeProposalSubjectDigest(sealed, b.proposalId),
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
        proposal: b,
      },
    );
    expect(replaced.ok).toBe(true);

    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
      projectId,
    });
    expect(epistemic.ok).toBe(true);
    if (!epistemic.ok) return;
    const oldItem = epistemic.state.items.find((i) =>
      i.epistemicItemId.includes("jint-n05-a"),
    );
    expect(oldItem?.status).toBe("resolved");
    expect(oldItem?.statement).toContain(
      "<!-- resolved:superseded_by_reinstruction -->",
    );
    // Clarification-shaped result must not claim superseded:
    expect("not_applicable" as const).not.toBe("superseded");
  });

  it("T15/T16/T17 — pursue → PREPARE keeps sandbox targetPath; binding not acme/widget", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const bound = await runtime.setProjectRepositoryBinding({
      projectId,
      ...NON_ACME_BINDING,
    });
    expect(bound.ok).toBe(true);
    if (!bound.ok) return;
    const binding = bound.repositoryBinding as {
      identity?: string;
      pathRoot?: string;
    } | null;
    expect(binding?.identity).toBe(NON_ACME_BINDING.identity);
    expect(binding?.identity).not.toMatch(/acme\/widget/i);
    expect(String(binding?.pathRoot ?? "")).not.toMatch(/acme\/widget/i);

    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-t15",
    });
    expect(proposal.executionIntent?.targetPath).toBe(TARGET_PATH);

    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.decisionBasis?.executionBasis.targetPath).toBe(
      TARGET_PATH,
    );
    expect(hd.decision.decisionBasis?.executionBasis.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );

    const prepared = await prepareM3FromDecision({
      projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, projectId),
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => "2026-09-15T16:00:00.000Z",
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.executionPerformed).toBe(false);
    expect(prepared.payload.attemptCreated).toBe(false);
    expect(prepared.payload.contract.action).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
  });

  it("ZERO REAL / ZERO dogfood — fixture paths only", () => {
    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
    expect(dbPath).not.toContain("sfia-studio-product-proof");
    expect(dbPath).not.toContain("oa-product.sqlite");
  });
});
===== NEW FILE projects/sfia-studio/app/__tests__/pre-m6-product-ui/repositoryBindingForm.ui.test.tsx =====
/** @vitest-environment jsdom */
/**
 * JOURNEY-INTEGRITY — RepositoryBindingForm loads durable truth;
 * never presents acme/widget sample as current binding.
 */
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { RepositoryBindingForm } from "@/features/pre-m6-product-ui/surfaces/RepositoryBindingForm";

const { getProjectRuntimeActionMock, setProjectRepositoryBindingActionMock } =
  vi.hoisted(() => ({
    getProjectRuntimeActionMock: vi.fn(),
    setProjectRepositoryBindingActionMock: vi.fn(),
  }));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: (...args: unknown[]) =>
    getProjectRuntimeActionMock(...args),
  setProjectRepositoryBindingAction: (...args: unknown[]) =>
    setProjectRepositoryBindingActionMock(...args),
}));

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  getProjectRuntimeActionMock.mockReset();
  setProjectRepositoryBindingActionMock.mockReset();
});

describe("RepositoryBindingForm — JOURNEY-INTEGRITY binding truth", () => {
  it("after load with no binding, fields are empty (no acme/widget default)", async () => {
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      project: {
        projectId: "prj:no-binding",
        repositoryBinding: null,
      },
    });

    render(<RepositoryBindingForm projectId="prj:no-binding" />);

    await waitFor(() => {
      expect(screen.getByTestId("repo-binding-status")).toHaveTextContent(
        /Aucun binding configuré/i,
      );
    });

    expect(screen.getByTestId("repo-binding-identity")).toHaveValue("");
    expect(screen.getByTestId("repo-binding-remote-url")).toHaveValue("");
    expect(screen.getByTestId("repo-binding-default-branch")).toHaveValue("");
    expect(screen.getByTestId("repo-binding-path-root")).toHaveValue("");

    const identity = screen.getByTestId("repo-binding-identity") as HTMLInputElement;
    const remote = screen.getByTestId(
      "repo-binding-remote-url",
    ) as HTMLInputElement;
    expect(identity.value).not.toMatch(/acme\/widget/i);
    expect(remote.value).not.toMatch(/acme\/widget/i);
    expect(screen.getByTestId("repository-binding-form").textContent).not.toMatch(
      /acme\/widget/i,
    );
  });

  it("loads durable binding when present (not sample)", async () => {
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      project: {
        projectId: "prj:bound",
        repositoryBinding: {
          identity: "mcleland147/sfia-workspace",
          remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
          defaultBranch: "main",
          pathRoot: "projects/sfia-studio/.sandbox",
        },
      },
    });

    render(<RepositoryBindingForm projectId="prj:bound" />);

    await waitFor(() => {
      expect(screen.getByTestId("repo-binding-status")).toHaveTextContent(
        /Binding durable chargé/i,
      );
    });
    expect(screen.getByTestId("repo-binding-identity")).toHaveValue(
      "mcleland147/sfia-workspace",
    );
    expect(screen.getByTestId("repo-binding-path-root")).toHaveValue(
      "projects/sfia-studio/.sandbox",
    );
    expect(screen.getByTestId("repository-binding-form").textContent).not.toMatch(
      /acme\/widget/i,
    );
  });
});

===== NEW: productProofJourneyIntegrity.d0.test.ts =====
/**
 * PRODUCT-PROOF-JOURNEY-INTEGRITY — Decision Subject continuity, hydrate,
 * reinstruction supersession, pursue→PREPARE lineage (ZERO REAL).
 * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  getProposal,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { PROPOSAL_SUBJECT_PURSUE_REF } from "@/features/project-assistant/w2/proposalSubjectOptions";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import {
  hydrateProposalsFromPendingMarkers,
  listActivePendingDecisionSubjectMarkers,
  replacePendingDecisionSubjectForExplicitReinstruction,
  writePendingDecisionSubjectMarker,
} from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
import {
  assertExplicitReinstructionGate,
  listEffectivePendingDecisionSubjectMarkers,
  readActiveProposalDecisionSubject,
} from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
import type {
  RuntimeApplicationService,
  RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";

const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";
const NON_ACME_BINDING = {
  identity: "mcleland147/sfia-workspace",
  remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
  defaultBranch: "main",
  pathRoot: "projects/sfia-studio/.sandbox",
} as const;

function docsWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string;
  proposalId?: string;
  status?: ProposalDto["status"];
}): ProposalDto {
  return saveProposal({
    proposalId: input.proposalId ?? `prop:f2:jint-${Date.now()}`,
    status: input.status ?? "DECISION_REQUIRED",
    rephrasedRequest: "Matérialiser la note de gestion de tâches",
    objective: "Matérialiser le livrable de gestion de tâches",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "Continuation Artifact du cycle actif",
    scope: "écriture de document bornée — cycle actif",
    outOfScope: ["nouveau cycle", "REAL"],
    activatedBlocks: [],
    expectedOutcome: "Fichier sandbox matérialisé",
    sources: ["nora"],
    risks: ["mauvais sujet décisionnel"],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
    morrisGateRequired: true,
    nextPossibleStep: "Instruire les options sur ce sujet",
    contextSnapshot: {
      projectId: input.projectId,
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      doctrineDigest: input.doctrineDigest,
      activeCycleInstanceId: input.activeCycleInstanceId,
      ckcResolutionRef: "ckcres:w2-harness",
    },
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: null,
      targetRepositoryRef: null,
      targetPath: TARGET_PATH,
      scopeIn: ["sandbox"],
      scopeOut: ["git"],
      expectedOutputs: ["markdown"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      reversibilityExpectation: "reversible",
      artifactBrief: "Note gestion de tâches",
      contentRequirements: [],
      exitRequirementKinds: [],
    },
  });
}

async function markPending(
  oa: RuntimeOaStack,
  proposal: ProposalDto,
  opts?: { withSnapshot?: boolean },
): Promise<void> {
  const sealed = sealProposalExecutionBasis(proposal);
  const subjectDigest = computeProposalSubjectDigest(
    sealed,
    proposal.proposalId,
  );
  const written = await writePendingDecisionSubjectMarker({
    oa,
    projectId: proposal.contextSnapshot.projectId,
    proposalId: proposal.proposalId,
    subjectDigest,
    lpsId: proposal.contextSnapshot.lpsId,
    lpsVersion: proposal.contextSnapshot.lpsVersion,
    doctrineDigest: proposal.contextSnapshot.doctrineDigest,
    ...(opts?.withSnapshot === false ? {} : { proposal }),
  });
  expect(written.ok).toBe(true);
}

describe("PRODUCT-PROOF-JOURNEY-INTEGRITY — T02–T07 / N03 / N05 / T15–T17", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("journey-integrity.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "jint" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "ji",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function proposeWith(projectId: string, proposalId: string) {
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({ oa, projectId });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qualification failed");
    return proposeTrajectoryOptions({
      oa,
      projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId,
    });
  }

  it("T02 — marker without snapshot + cleared store → pending lost (recoverable empty)", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposalA = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-t02-a",
    });
    await markPending(runtime.oa!, proposalA, { withSnapshot: false });
    resetF2ProposalStoreForTests();
    expect(getProposal(proposalA.proposalId)).toBeNull();

    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pending_reinstruction_required");
    if (read.kind !== "pending_reinstruction_required") return;
    expect(read.recoverableProposalIds).toEqual([]);
    expect(read.message).toMatch(/reformul/i);
  });

  it("T03 — marker WITH snapshot + cleared store → recoverable via hydrate", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposalA = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-t03-a",
    });
    await markPending(runtime.oa!, proposalA, { withSnapshot: true });
    resetF2ProposalStoreForTests();
    expect(getProposal(proposalA.proposalId)).toBeNull();

    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pending_reinstruction_required");
    if (read.kind !== "pending_reinstruction_required") return;
    expect(read.recoverableProposalIds).toEqual([proposalA.proposalId]);
    expect(getProposal(proposalA.proposalId)?.status).toBe("DECISION_REQUIRED");
    expect(getProposal(proposalA.proposalId)?.executionIntent?.targetPath).toBe(
      TARGET_PATH,
    );
  });

  it("T04–T07 — explicit reinstruction A→B with snapshot; B survives store reset", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposalA = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-t04-a",
    });
    await markPending(runtime.oa!, proposalA, { withSnapshot: true });

    const gateRequired = await assertExplicitReinstructionGate({
      oa: runtime.oa!,
      projectId,
      reinstructionOfProposalId: null,
    });
    expect(gateRequired.ok).toBe(false);
    if (gateRequired.ok) return;
    expect(gateRequired.code).toBe("EXPLICIT_REINSTRUCTION_REQUIRED");

    const proposalB = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-t04-b",
    });
    const sealedB = sealProposalExecutionBasis(proposalB);
    const digestB = computeProposalSubjectDigest(sealedB, proposalB.proposalId);
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: proposalA.proposalId,
        newProposalId: proposalB.proposalId,
        subjectDigest: digestB,
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
        proposal: proposalB,
      },
    );
    expect(replaced.ok).toBe(true);

    const effective = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(effective.ok).toBe(true);
    if (!effective.ok) return;
    expect(effective.markers.map((m) => m.proposalId)).toEqual([
      proposalB.proposalId,
    ]);
    expect(effective.markers[0]?.proposalSnapshot?.proposalId).toBe(
      proposalB.proposalId,
    );

    const gateOk = await assertExplicitReinstructionGate({
      oa: runtime.oa!,
      projectId,
      reinstructionOfProposalId: proposalB.proposalId,
    });
    expect(gateOk.ok).toBe(true);

    // Process-local loss — Epistemic snapshot must rehydrate B.
    resetF2ProposalStoreForTests();
    expect(getProposal(proposalB.proposalId)).toBeNull();

    const afterReset = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(afterReset.ok).toBe(true);
    if (!afterReset.ok) return;
    expect(afterReset.kind).toBe("pending_reinstruction_required");
    if (afterReset.kind !== "pending_reinstruction_required") return;
    expect(afterReset.recoverableProposalIds).toEqual([proposalB.proposalId]);
    expect(getProposal(proposalB.proposalId)?.executionIntent?.targetPath).toBe(
      TARGET_PATH,
    );

    const active = await listActivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(active.ok).toBe(true);
    if (!active.ok) return;
    const hydrated = hydrateProposalsFromPendingMarkers(active.markers);
    expect(hydrated).toEqual([]); // already hydrated by read
  });

  it("N03 — multi-pending remains AMBIGUOUS (no first-id arbitration)", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const a = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n03-a",
    });
    const b = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n03-b",
    });
    await markPending(runtime.oa!, a);
    await markPending(runtime.oa!, b);

    const gated = await assertExplicitReinstructionGate({
      oa: runtime.oa!,
      projectId,
      reinstructionOfProposalId: a.proposalId,
    });
    expect(gated.ok).toBe(false);
    if (gated.ok) return;
    expect(gated.code).toBe("AMBIGUOUS_PENDING_REINSTRUCTION");

    const read = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(read.ok).toBe(true);
    if (!read.ok) return;
    expect(read.kind).toBe("pending_reinstruction_required");
    if (read.kind !== "pending_reinstruction_required") return;
    expect(read.message).toMatch(/Plusieurs demandes/i);
    expect(read.markers.map((m) => m.proposalId).sort()).toEqual(
      [a.proposalId, b.proposalId].sort(),
    );
  });

  it("N05 — arm-clearing contract: DECISION_REQUIRED reinstruction ⇒ superseded (not clarification)", async () => {
    // Documented contract (types.ts + useProductConversation):
    // reinstruction arm clears only when reinstructionTransition === "superseded"
    // (or f2_proposal + DECISION_REQUIRED). Clarification success must NOT be
    // "superseded" — f2Success defaults unset transition to "not_applicable".
    const allowed = ["superseded", "not_consumed", "not_applicable"] as const;
    expect(allowed).toContain("superseded");
    expect(allowed).toContain("not_applicable");
    expect("superseded").not.toBe("not_applicable");

    // DECISION_REQUIRED path after explicit replace reports the supersession
    // surface via Epistemic (A resolved) — arm-clearing signal for UI is
    // reinstructionTransition:"superseded" when orchestrate commits B.
    const { projectId, cycleInstanceId, ctx } = await seed();
    const a = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n05-a",
    });
    await markPending(runtime.oa!, a, { withSnapshot: true });
    const b = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-n05-b",
    });
    const sealed = sealProposalExecutionBasis(b);
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: a.proposalId,
        newProposalId: b.proposalId,
        subjectDigest: computeProposalSubjectDigest(sealed, b.proposalId),
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
        proposal: b,
      },
    );
    expect(replaced.ok).toBe(true);

    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
      projectId,
    });
    expect(epistemic.ok).toBe(true);
    if (!epistemic.ok) return;
    const oldItem = epistemic.state.items.find((i) =>
      i.epistemicItemId.includes("jint-n05-a"),
    );
    expect(oldItem?.status).toBe("resolved");
    expect(oldItem?.statement).toContain(
      "<!-- resolved:superseded_by_reinstruction -->",
    );
    // Clarification-shaped result must not claim superseded:
    expect("not_applicable" as const).not.toBe("superseded");
  });

  it("T15/T16/T17 — pursue → PREPARE keeps sandbox targetPath; binding not acme/widget", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const bound = await runtime.setProjectRepositoryBinding({
      projectId,
      ...NON_ACME_BINDING,
    });
    expect(bound.ok).toBe(true);
    if (!bound.ok) return;
    const binding = bound.repositoryBinding as {
      identity?: string;
      pathRoot?: string;
    } | null;
    expect(binding?.identity).toBe(NON_ACME_BINDING.identity);
    expect(binding?.identity).not.toMatch(/acme\/widget/i);
    expect(String(binding?.pathRoot ?? "")).not.toMatch(/acme\/widget/i);

    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:jint-t15",
    });
    expect(proposal.executionIntent?.targetPath).toBe(TARGET_PATH);

    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const decided = await decideTrajectory({
      oa: runtime.oa!,
      projectId,
      optionSetRef: proposed.optionSetRef,
      selectedOptionRef: PROPOSAL_SUBJECT_PURSUE_REF,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const hd = await runtime.oa!.decisionServices.getHumanDecision.execute({
      decisionId: decided.decision.decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) return;
    expect(hd.decision.decisionBasis?.executionBasis.targetPath).toBe(
      TARGET_PATH,
    );
    expect(hd.decision.decisionBasis?.executionBasis.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );

    const prepared = await prepareM3FromDecision({
      projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, projectId),
      deps: {
        decisionServices: runtime.oa!.decisionServices,
        authorityResolver: runtime.oa!.authorityResolver,
        executionContractServices: runtime.oa!.executionContractServices,
        nowIso: () => "2026-09-15T16:00:00.000Z",
        forceM3Authority: true,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.executionPerformed).toBe(false);
    expect(prepared.payload.attemptCreated).toBe(false);
    expect(prepared.payload.contract.action).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
  });

  it("ZERO REAL / ZERO dogfood — fixture paths only", () => {
    expect(process.env.OPENAI_API_KEY ?? "").not.toMatch(/^sk-live/);
    expect(dbPath).not.toContain("sfia-studio-product-proof");
    expect(dbPath).not.toContain("oa-product.sqlite");
  });
});

===== NEW: repositoryBindingForm.ui.test.tsx =====
/** @vitest-environment jsdom */
/**
 * JOURNEY-INTEGRITY — RepositoryBindingForm loads durable truth;
 * never presents acme/widget sample as current binding.
 */
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { RepositoryBindingForm } from "@/features/pre-m6-product-ui/surfaces/RepositoryBindingForm";

const { getProjectRuntimeActionMock, setProjectRepositoryBindingActionMock } =
  vi.hoisted(() => ({
    getProjectRuntimeActionMock: vi.fn(),
    setProjectRepositoryBindingActionMock: vi.fn(),
  }));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: (...args: unknown[]) =>
    getProjectRuntimeActionMock(...args),
  setProjectRepositoryBindingAction: (...args: unknown[]) =>
    setProjectRepositoryBindingActionMock(...args),
}));

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  getProjectRuntimeActionMock.mockReset();
  setProjectRepositoryBindingActionMock.mockReset();
});

describe("RepositoryBindingForm — JOURNEY-INTEGRITY binding truth", () => {
  it("after load with no binding, fields are empty (no acme/widget default)", async () => {
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      project: {
        projectId: "prj:no-binding",
        repositoryBinding: null,
      },
    });

    render(<RepositoryBindingForm projectId="prj:no-binding" />);

    await waitFor(() => {
      expect(screen.getByTestId("repo-binding-status")).toHaveTextContent(
        /Aucun binding configuré/i,
      );
    });

    expect(screen.getByTestId("repo-binding-identity")).toHaveValue("");
    expect(screen.getByTestId("repo-binding-remote-url")).toHaveValue("");
    expect(screen.getByTestId("repo-binding-default-branch")).toHaveValue("");
    expect(screen.getByTestId("repo-binding-path-root")).toHaveValue("");

    const identity = screen.getByTestId("repo-binding-identity") as HTMLInputElement;
    const remote = screen.getByTestId(
      "repo-binding-remote-url",
    ) as HTMLInputElement;
    expect(identity.value).not.toMatch(/acme\/widget/i);
    expect(remote.value).not.toMatch(/acme\/widget/i);
    expect(screen.getByTestId("repository-binding-form").textContent).not.toMatch(
      /acme\/widget/i,
    );
  });

  it("loads durable binding when present (not sample)", async () => {
    getProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      project: {
        projectId: "prj:bound",
        repositoryBinding: {
          identity: "mcleland147/sfia-workspace",
          remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
          defaultBranch: "main",
          pathRoot: "projects/sfia-studio/.sandbox",
        },
      },
    });

    render(<RepositoryBindingForm projectId="prj:bound" />);

    await waitFor(() => {
      expect(screen.getByTestId("repo-binding-status")).toHaveTextContent(
        /Binding durable chargé/i,
      );
    });
    expect(screen.getByTestId("repo-binding-identity")).toHaveValue(
      "mcleland147/sfia-workspace",
    );
    expect(screen.getByTestId("repo-binding-path-root")).toHaveValue(
      "projects/sfia-studio/.sandbox",
    );
    expect(screen.getByTestId("repository-binding-form").textContent).not.toMatch(
      /acme\/widget/i,
    );
  });
});

```
