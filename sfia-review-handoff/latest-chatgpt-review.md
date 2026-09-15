# PRODUCT-JOURNEY-LOT-A-B — Review Pack (FULL)

## A. Timestamp / Git Truth / cycle / Morris GO

- Timestamp (UTC): 2026-09-15T16:19:54Z
- Repository: mcleland147/sfia-workspace
- origin/main: `6a41ab7e7deda9f7168d12a37b9316413565fa16`
- Candidate worktree: `/Users/morris/Projects/sfia-studio-product-proof-journey-integrity`
- Branch: `fix/sfia-studio-product-proof-journey-integrity`
- HEAD (base, unchanged): `6a41ab7e7deda9f7168d12a37b9316413565fa16`
- Product commits ahead: **ZERO** (dirty local candidate only)
- Cycle: **8 — Delivery / EVOL / Critical**
- Formal C2 promotion: **NOT** declared
- Runtime v3: **NON ADOPTED**
- Morris GO consumed: continue Journey Integrity candidate; remediate Lot A/B; deterministic only; STOP before Confirm/Authority/Execute; NO Product commit/push/PR/merge; ZERO LIVE/REAL; dogfood frozen

## B. Product Journey Reconciliation target consumed

Authoritative handoff consumed: `sfia/review-handoff` Product Journey Reconciliation
(`c7893f873626cbc9c1001b93392af4764cef506e` / blob `26d94ea3066f63c460dbcc351720ac807fb8f35f`).

Target capability closed by this lot:

> Project / active cycle → Nora → Proposal Decision Subject → Options + Recommendation → HumanDecision → DecisionBasis → ExecutionContract PREPARE → Inspect → **STOP BEFORE Confirm / Authority / Execute**

Lots closed: **LOT A** (Decision Subject precedence) + **LOT B** (semantic continuity / reconstruction).
Lots NOT implemented: **LOT D** (Cursor REAL), **LOT E** (Evidence→replan REAL).

## C. Pre-remediation candidate hash/diff freeze

Pre-remediation private backup: `/tmp/sfia-product-journey-lot-ab-pre-remediation.patch` (24145 bytes).

Hash freeze from Reconciliation (BEFORE analysis) matched 12 Product/test files at start of this lot (**HASH_FREEZE_MATCH**). Edits after that freeze are intentional Lot A/B remediation.

## D. LPS v15→v16 forensic diagnosis

Read-only forensic SQLite:
`/Users/morris/.cache/sfia-dogfood-backups/journey-integrity-forensic-20260915T150249Z/oa-product.sqlite`
Project `prj:ae9bd0de-…` (“Gestion de tâches”).

| Version | createdAt | correlationId | createdBy | Meaning |
|---|---|---|---|---|
| **v14** | 2026-09-14T22:39:43Z | `w2-promote:optset:…` | actor:local-pilote | Trajectory promote HD |
| **v15** | 2026-09-15T09:35:28Z | `w2-dec-prop:prop:f2:195b23b4-…` | actor:local-pilote | W2 Proposal HumanDecision (amend lineage) — LPS append via `recordHumanDecision` |
| **v16** | 2026-09-15T14:34:48Z | `ltu:ea0b2776…` | **actor:nora** | Nora ACW `materializeActiveCycleWork` — +3 `epi:acw:*` items |

Dogfood was **not** mutated for this diagnosis.

## E. Root cause and sequencing result

- Failed reinstruction turn was conversational success **without** Proposal supersession, while F1/ACW still advanced LPS (v15→v16).
- Same-turn F2 active-cycle Proposal mint does **not** append LPS; marker bind uses proposal `contextSnapshot` from live project context at mint.
- After ACW advances LPS, a prior pending marker bound to older LPS fails snapshot live-compatibility → **non-recoverable** → Reformuler (fail-closed) — correct V3-F02 behavior.
- AP13 proves: immediately after application-path mint, marker `lpsId`/`lpsVersion` equal live LPS (B not immediately stale).

**Verdict:** LPS progression **EXPLAINED**. No structural LPS lifecycle redesign required.

## F. Final Decision Subject precedence matrix

| State | Primary CTA | Hidden mutating competitors |
|---|---|---|
| A Lost pending (marker, no valid hydrate) | Reformuler avec Nora | generic Instruire/Réinstruire; trajectory decision mutation; PREPARE; Execute |
| B Recoverable pending | Instruire les options (exact Proposal) | Reformuler; generic Instruire; PREPARE |
| C OptionSet bound / awaiting HD | pursue / amend / refuse | generic Instruire/Réinstruire; Recovery primary; PREPARE; Execute |
| D HD = amend | Nora reformulation guidance | PREPARE; generic options; Execute |
| E HD = refuse | continuation/requalification guidance | PREPARE; generic options; Execute |
| F HD = pursue, no EC | PREPARE path | generic Instruire; new Proposal decision CTAs |
| G EC prepared, not inspected | Inspect | Proposal option gen/decision; PREPARE duplicate; Execute |
| H EC inspected | STOP (Confirm/authority UI preserved, not exercised) | — |
| none (no Proposal/EC subject) | generic Instruire if active cycle | — |

Implemented via `proposalSubjectOwnsNextAction` in `TrajectorySurface.tsx` (STRICT on mutating CTAs; soft on informational Cycle/Trajectory visibility).

## G. Reinstruction transition contract

Server authoritative values on every successful orchestrator return:

- `superseded` — reinstruction requested AND structured DECISION_REQUIRED commit replaced effective A with B
- `not_consumed` — reinstruction requested AND conversational/clarification/block/MW5/F1 success without supersession
- `not_applicable` — no reinstruction requested

Client (`useProductConversation`): clear `armedReinstructionOfProposalId` **ONLY** when `reinstructionTransition === "superseded"`.

## H. Snapshot integrity contract

`isValidProposalSnapshotForHydration(marker, live)` requires marker↔snapshot identity (proposalId, projectId, lpsId, lpsVersion, doctrineDigest), `DECISION_REQUIRED`, `morrisGateRequired===true`, live LPS/project/doctrine match, not closed, and `computeProposalSubjectDigest(sealProposalExecutionBasis(snapshot), proposalId) === marker.subjectDigest`.

Fail → no hydrate → Reformuler / requalification. Never silent repair.

## I. Legacy-marker behavior

Marker without `proposalSnapshot`: durable evidence of subject existence remains; **NON-RECOVERABLE**; sole primary action Reformuler. No migration/backfill.

## J. Repository binding state contract

States: LOADING → Save disabled; LOADED_UNBOUND / LOADED_BOUND → Save when fields valid; READ_FAILED → “binding illisible”, Save disabled, not treated as unbound.

After write: mandatory `getProjectRuntimeAction` reread before verified claim. Write ok + reread fail → “enregistrement effectué mais vérification durable impossible”; no false verified. projectId change ignores late reads / resets fields. No acme/widget samples.

## K. Persistence / Pilot-language contract

`F2_PROCESS_LOCAL_NOTICE` (and aligned ephemeral notice): conversation is not a durable aggregate; effective Decision Subject is durable/reconstructible while valid; else explicit reformulation — never invention; Project/LPS/Cycle/HD/EC in Product SQLite; ZERO Cursor REAL. Technical detail secondary.

## L. Actual application-path routing map

```
Pilot Recovery "Repartir d'une nouvelle intention"
→ ProjectWorkspacePage.onRequalify → focusConversation + loadProject
→ MUST NOT proposeOptions / recoveryProposeSignal (REMOVED)

Pilot arms Reformuler / Instruire
→ armReinstructionOfProposalId / proposeOptions(proposalId)

Pilot Nora Send
→ ConversationSurface → useProductConversation.sendMessage
→ projectAssistantSendAction → orchestrateAssistantSend
→ reinstructionTransition + optional pending marker write/replace
→ notifyDurableFactsChanged → TrajectorySurface rehydrate

Instruire options
→ w2ProposeTrajectoryOptionsAction → PresentedOptionSet (Proposal subject)

pursue / amend / refuse
→ w2DecideTrajectoryAction → HumanDecision + DecisionBasis

PREPARE (docs_write lineage in proof)
→ projectAssistantPrepareM3Action → prepareM3FromDecision
→ ExecutionContract (ZERO Attempt)

Inspect
→ w2InspectExecutionContractAction → inspection state
→ STOP (no Confirm / Authorize / Execute)
```

## M. Complete canonical journey test evidence

File: `productProofJourneyIntegrity.applicationPath.d0.test.ts`

- **AP11/AP12** — `projectAssistantSendAction`: clarification → `not_consumed`; mint B → `superseded` (Nora mints B; no manual replace as sole proof)
- **AP13** — process-local ProposalStore wipe → `readActiveProposalDecisionSubject` recovers B; marker LPS matches live
- **AP21–AP24** — propose → decide pursue → `projectAssistantPrepareM3Action` → `w2InspectExecutionContractAction`; `attemptCreated===false`; `executionPerformed===false`; `grantsAuthority===false`

Domain/negatives: `productProofJourneyIntegrity.d0.test.ts` (N03 multi-pending, N04–N08 snapshot integrity, N09 legacy, N10 generic trajectory, N19 process loss, N20 LPS append stale vs post-append hydrate).

## N. Negative test evidence

Covered: N01 (AP11), N03, N04–N08, N09, N10, N11 (UI OptionSet hides Réinstruire), N12/N13 (amend/refuse no PREPARE — preserved), N14–N15 (pursue→PREPARE→Inspect), N16–N17 (binding), N18–N19 (reload/process loss), N20 (LPS sequencing).

## O. Cycle / Trajectory informational vs action precedence

Cycle/Lifecycle informational panels remain visible. Trajectory mutating generic Instruire yields when Proposal/EC owns next action. Broad Lot C cycle semantics **not** changed. Attempt≠cycle close preserved.

## P. PREPARE operation-kind finding / disposition

**HIGH reserve (Lot D adjacent):** Trajectory W2 PREPARE UI still uses client-chosen sandbox allowlist (`read|simulate|generate-temporary-artifact`). M3 `prepareM3FromDecision` / `projectAssistantPrepareM3Action` derives `cursor.docs_write.apply` from sealed DecisionBasis. Merging selectors would mix client-chosen vs sealed kinds. Application-path proof uses M3 prepare for docs_write lineage. No redesign in this lot.

## Q. Exact files modified + justification

| File | Why |
|---|---|
| `ProjectWorkspacePage.tsx` | Remove recoveryProposeSignal; Recovery→Nora only |
| `useProductConversation.ts` | Arm clear only on superseded |
| `TrajectorySurface.tsx` | CTA ownership matrix; remove dead prop |
| `RepositoryBindingForm.tsx` | Fail-closed load/save + reread |
| `orchestrateF2.ts` | Emit not_consumed / superseded / not_applicable |
| `types.ts` | Contract comment |
| `proposalStore.ts` | Honest Pilot persistence notice |
| `pendingDecisionSubjectMarker.ts` | Snapshot integrity + live hydrate |
| `activeProposalDecisionSubject.ts` | Pass live LPS context into hydrate |
| `productProofJourneyIntegrity.d0.test.ts` | Negatives + live hydrate |
| `productProofJourneyIntegrity.applicationPath.d0.test.ts` | **NEW** application-path proof |
| `repositoryBindingForm.ui.test.tsx` | Binding fail-closed UI |
| `trajectorySurface.ui.test.tsx` | CTA precedence UI |
| `w1RecoveryFoundation.test.tsx` | Recovery wiring notes |

## R. COMPLETE useful diffs (modified Product/test content)

### useProductConversation.ts
```diff
(missing)
```

### ProjectWorkspacePage.tsx
```diff
(missing)
```

### proposalStore.ts
```diff
(missing)
```

### types.ts
```diff
(missing)
```

### activeProposalDecisionSubject.ts
```diff
(missing)
```

### orchestrateF2.ts (reinstruction helpers + call sites)
```diff
(missing)
```

### pendingDecisionSubjectMarker.ts (integrity)
```diff
(missing)
```

### RepositoryBindingForm.tsx
```diff
(missing)
```

### TrajectorySurface.tsx
```diff
(missing)
```

### Application-path test (structure excerpt)
```
1:/**
2: * PRODUCT-PROOF-JOURNEY-INTEGRITY — APPLICATION PATH.
3: *
4: * Every step below goes through a real Product entrypoint the UI calls:
5: *   projectAssistantSendAction → orchestrateAssistantSend (fixture provider)
6: *   w2ProposeTrajectoryOptionsAction → w2DecideTrajectoryAction
7: *   projectAssistantPrepareM3Action → w2InspectExecutionContractAction
8: *
9: * No test bypass mints the decision subject: Proposal B is minted by Nora's
10: * own turn, and the chain is picked up again from durable truth only.
11: *
12: * Layer A ("AP1x") proves send → orchestrate → reinstruction verdict + durable
13: * marker. Layer B ("AP2x") proves propose → decide → PREPARE → inspect using
14: * the very Proposal id Layer A committed, reloaded through
15: * readActiveProposalDecisionSubject after a process-local wipe.
16: *
17: * Deterministic — ZERO REAL / ZERO LIVE / ZERO dogfood mutation / ZERO Attempt.
18: * @vitest-environment node
19: */
20:import { afterEach, beforeEach, describe, expect, it } from "vitest";
21:import { projectAssistantSendAction } from "@/features/project-assistant/actions";
22:import { projectAssistantPrepareM3Action } from "@/features/project-assistant/actions";
23:import {
24:  w2DecideTrajectoryAction,
25:  w2InspectExecutionContractAction,
26:  w2ProposeTrajectoryOptionsAction,
27:} from "@/features/project-assistant/w2/actions";
28:import {
29:  getProposal,
30:  resetF2ProposalStoreForTests,
31:  saveProposal,
32:} from "@/features/project-assistant/f2/proposalStore";
33:import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
34:import type { ProposalDto } from "@/features/project-assistant/f2/types";
35:import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
36:import { PROPOSAL_SUBJECT_PURSUE_REF } from "@/features/project-assistant/w2/proposalSubjectOptions";
37:import {
38:  computeProposalSubjectDigest,
39:  sealProposalExecutionBasis,
40:} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
156:describe("PRODUCT-PROOF-JOURNEY-INTEGRITY — application path AP11–AP24", () => {
190:      constraints: ["ZERO REAL"],
305:    // AP11 — armed but non-committing turn: the arm must survive.
306:    const clarification = await projectAssistantSendAction({
326:    // AP12 — Nora mints the replacement subject on her own turn.
327:    const mint = await projectAssistantSendAction({
350:  it("AP11/AP12 — send action: armed clarification not_consumed, mint superseded", async () => {
379:  it("AP13 — process-local loss after the mint: the same subject is reconstructed", async () => {
405:  it("AP21–AP24 — reconstructed subject → propose → decide → PREPARE → inspect (ZERO Attempt, STOP)", async () => {
418:    // AP21 — Options are instructed on the Proposal subject, never a generic one.
433:    // AP22 — Pilote decides "poursuivre" on the presented set.
458:    // AP23 — PREPARE from the durable decision. No Attempt, no execution.
470:    expect(prepared.f3.attemptCreated).toBe(false);
477:    // AP24 — Inspect is the last admissible step: it grants nothing.
478:    const inspected = await w2InspectExecutionContractAction({
```

Untracked new tests are part of the candidate overlay (full sources in worktree):
- `productProofJourneyIntegrity.applicationPath.d0.test.ts` (490 lines)
- `productProofJourneyIntegrity.d0.test.ts` (857 lines)
- `repositoryBindingForm.ui.test.tsx` (210 lines)

## S. Targeted test commands / results

```
npx vitest run productProofJourneyIntegrity*.test.ts w1RecoveryFoundation
  repositoryBindingForm trajectorySurface corrProof11 corrProof10
  corrProof07 f2.orchestrate
→ 165 passed / 0 failed (10 files)

npx vitest run corrProof09.materializationIntentContract.d0.test.ts
→ 15 passed / 0 failed
```

## T. Full typecheck / lint / build / Vitest / diff-check

| Gate | Result |
|---|---|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS (0 warnings/errors) |
| `npm run build` | PASS |
| `npm test` (full Vitest) | **4077 passed / 137 skipped / 0 failed** |
| `git diff --check` (Product) | PASS |

Baseline reconciliation: 4063 passed / 137 skipped — delta ≈ +14 tests from Lot A/B.

## U. Fake / Real qualification

- External cognition: FakeConversationProvider / fixture (**allowed**)
- Internal Product transitions: actual `projectAssistantSendAction` / W2 / M3 prepare / inspect actions
- **DETERMINISTICALLY PROVEN**
- NOT: REAL BOUNDARY / END-TO-END REAL / READY FOR CURSOR REAL / PRODUCT PROOF COMPLETE / RUNTIME V3 ADOPTED

## V. Dogfood untouched evidence

Worktree `/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d` remains at `6a41ab7e`. Forensic SQLite read-only only. **ZERO dogfood mutation.**

## W. Remaining reserves

1. PREPARE op-kind UI divergence (W2 selector vs M3 sealed docs_write) — HIGH / Lot D adjacent
2. Lifecycle mutation CTA soft-yield under Proposal ownership — minimal Lot C (informational kept; not fully gated)
3. Formal Product Completion C2 — Morris only
4. Lot D Cursor REAL Product handoff — Gate D required
5. Lot E Evidence→ReviewBundle→replan REAL loop

## X. Lot D dependency

Requires Lot A/B accepted + Gate D Morris authorization to wire Product Execute to GCEC REAL under EC/Confirmation/authority. Do not conflate fixture Execute with Cursor REAL.

## Y. Recommended next gate

**ChatGPT Critical Review** of this dirty Lot A/B candidate → Morris accept/reject → then Product Git integration (commit/PR) only after GO. After merge: Lot D planning for First Governed Cursor Task.

## Z. Unique verdict

**PRODUCT-JOURNEY-LOT-A-B — CANONICAL DECISION SUBJECT + SEMANTIC CONTINUITY CONVERGED — ACTUAL PRODUCT APPLICATION PATH PROJECT→NORA→PROPOSAL→OPTIONS→HUMANDECISION→PREPARE→INSPECT DETERMINISTICALLY PROVEN — ZERO REAL — READY FOR CHATGPT CRITICAL REVIEW**

## Appendix — Full Product diffs

### ProjectWorkspacePage.tsx.diff
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index b5942b86..c74f2d7d 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -26,7 +26,6 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   const [durableOutcome, setDurableOutcome] =
     useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
   const [lpsOpen, setLpsOpen] = useState(false);
-  const [recoveryProposeSignal, setRecoveryProposeSignal] = useState(0);
   const [trajectoryRefreshSignal, setTrajectoryRefreshSignal] = useState(0);
   /** B1 — bump so LifecycleSurface reloads after Trajectory (or other) durable mutations. */
   const [lifecycleRefreshSignal, setLifecycleRefreshSignal] = useState(0);
@@ -72,9 +71,8 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
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
@@ -235,7 +233,6 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                 <TrajectorySurface
                   projectId={projectId}
                   composition="lps-embedded"
-                  recoveryProposeSignal={recoveryProposeSignal}
                   durableRefreshSignal={trajectoryRefreshSignal}
                   onDurableFactsChanged={notifyDurableFactsChanged}
                   activeProposalId={

```

### RepositoryBindingForm.tsx.diff
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx
index f26da938..b5834f39 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx
@@ -1,41 +1,167 @@
 "use client";

-import { useState } from "react";
-import { setProjectRepositoryBindingAction } from "@/lib/vertical-slice-runtime/actions";
+import { useCallback, useEffect, useRef, useState } from "react";
+import {
+  getProjectRuntimeAction,
+  setProjectRepositoryBindingAction,
+} from "@/lib/vertical-slice-runtime/actions";
+
+type DurableBinding = {
+  identity?: string;
+  remoteUrl?: string;
+  defaultBranch?: string;
+  pathRoot?: string;
+} | null;

 /**
- * Minimal CR-GCEC-03 UI — view/set Project repository binding.
- * Save is local Product persistence only (no network).
+ * READ_FAILED is NOT "unbound": an unreadable binding must never be presented
+ * as an absence, and must never be overwritten by a blind save.
+ */
+type BindingReadState =
+  | "LOADING"
+  | "LOADED_UNBOUND"
+  | "LOADED_BOUND"
+  | "READ_FAILED";
+
+const READ_FAILED_MESSAGE =
+  "Binding illisible — état durable inconnu. Aucune valeur d'exemple n'est affichée et l'enregistrement est fermé jusqu'à une relecture réussie.";
+
+const VERIFICATION_IMPOSSIBLE_MESSAGE =
+  "Enregistrement effectué mais vérification durable impossible — le binding n'est pas confirmé. Rechargez la page avant tout nouvel enregistrement.";
+
+/**
+ * CR-GCEC-03 / JOURNEY-INTEGRITY — view/set Project repository binding.
+ *
+ * Loads durable Project truth and never presents sample values as current
+ * truth. A save is only claimed as durable after a successful re-read of the
+ * Project runtime; the write echo alone is not evidence.
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
+  const [identity, setIdentity] = useState("");
+  const [remoteUrl, setRemoteUrl] = useState("");
+  const [defaultBranch, setDefaultBranch] = useState("");
+  const [pathRoot, setPathRoot] = useState("");
+  const [readState, setReadState] = useState<BindingReadState>("LOADING");
   const [message, setMessage] = useState<string | null>(null);
   const [busy, setBusy] = useState(false);
+  /** Set when durability could not be verified — no further blind save. */
+  const [saveClosedUntilReload, setSaveClosedUntilReload] = useState(false);
+
+  /** Current projectId, so late async results for a prior project are dropped. */
+  const activeProjectIdRef = useRef(props.projectId);
+  activeProjectIdRef.current = props.projectId;
+
+  const clearFields = useCallback(() => {
+    setIdentity("");
+    setRemoteUrl("");
+    setDefaultBranch("");
+    setPathRoot("");
+  }, []);
+
+  const applyDurableBinding = useCallback(
+    (binding: DurableBinding): boolean => {
+      const bound =
+        Boolean(binding) &&
+        typeof binding?.identity === "string" &&
+        binding.identity.trim().length > 0 &&
+        typeof binding.remoteUrl === "string" &&
+        binding.remoteUrl.trim().length > 0;
+      if (!bound || !binding) {
+        clearFields();
+        return false;
+      }
+      setIdentity(binding.identity ?? "");
+      setRemoteUrl(binding.remoteUrl ?? "");
+      setDefaultBranch(binding.defaultBranch ?? "main");
+      setPathRoot(binding.pathRoot ?? "");
+      return true;
+    },
+    [clearFields],
+  );
+
+  useEffect(() => {
+    const requestedProjectId = props.projectId;
+    let cancelled = false;
+    setReadState("LOADING");
+    setMessage(null);
+    setSaveClosedUntilReload(false);
+    clearFields();
+
+    void (async () => {
+      const result = await getProjectRuntimeAction(requestedProjectId);
+      if (cancelled) return;
+      if (activeProjectIdRef.current !== requestedProjectId) return;
+      if (!result.ok) {
+        clearFields();
+        setReadState("READ_FAILED");
+        setMessage(READ_FAILED_MESSAGE);
+        return;
+      }
+      const bound = applyDurableBinding(
+        result.project.repositoryBinding as DurableBinding,
+      );
+      setReadState(bound ? "LOADED_BOUND" : "LOADED_UNBOUND");
+    })();
+
+    return () => {
+      cancelled = true;
+    };
+  }, [props.projectId, applyDurableBinding, clearFields]);
+
+  const saveDisabled =
+    busy ||
+    readState === "LOADING" ||
+    readState === "READ_FAILED" ||
+    saveClosedUntilReload;

   async function onSave() {
+    if (saveDisabled) return;
+    const requestedProjectId = props.projectId;
     setBusy(true);
     setMessage(null);
     try {
-      const result = await setProjectRepositoryBindingAction({
-        projectId: props.projectId,
-        identity,
-        remoteUrl,
-        defaultBranch,
-        pathRoot: pathRoot || undefined,
+      if (!identity.trim() || !remoteUrl.trim()) {
+        setMessage(
+          "Binding incomplet — renseignez identity et remoteUrl avant d'enregistrer.",
+        );
+        return;
+      }
+      const written = await setProjectRepositoryBindingAction({
+        projectId: requestedProjectId,
+        identity: identity.trim(),
+        remoteUrl: remoteUrl.trim(),
+        defaultBranch: defaultBranch.trim() || "main",
+        pathRoot: pathRoot.trim() || undefined,
       });
-      if (!result.ok) {
-        setMessage(`${result.code}: ${result.message}`);
+      if (activeProjectIdRef.current !== requestedProjectId) return;
+      if (!written.ok) {
+        setMessage(`${written.code}: ${written.message}`);
+        return;
+      }
+
+      // Durable truth comes from a fresh read, never from the write echo.
+      const reread = await getProjectRuntimeAction(requestedProjectId);
+      if (activeProjectIdRef.current !== requestedProjectId) return;
+      if (!reread.ok) {
+        setReadState("READ_FAILED");
+        setSaveClosedUntilReload(true);
+        setMessage(VERIFICATION_IMPOSSIBLE_MESSAGE);
+        return;
+      }
+      const bound = applyDurableBinding(
+        reread.project.repositoryBinding as DurableBinding,
+      );
+      if (!bound) {
+        setReadState("LOADED_UNBOUND");
+        setSaveClosedUntilReload(true);
+        setMessage(VERIFICATION_IMPOSSIBLE_MESSAGE);
         return;
       }
-      setMessage("Binding enregistré (local).");
+      setReadState("LOADED_BOUND");
+      setMessage("Binding enregistré et vérifié.");
       props.onSaved?.();
     } finally {
       setBusy(false);
@@ -44,6 +170,17 @@ export function RepositoryBindingForm(props: {

   return (
     <div data-testid="repository-binding-form">
+      {readState === "LOADING" ? (
+        <p data-testid="repo-binding-loading">Lecture du binding…</p>
+      ) : (
+        <p data-testid="repo-binding-status">
+          {readState === "READ_FAILED"
+            ? "Binding illisible — état durable inconnu."
+            : readState === "LOADED_BOUND"
+              ? "Binding durable chargé."
+              : "Aucun binding configuré — renseignez le dépôt lié."}
+        </p>
+      )}
       <label>
         provider
         <input value="github" readOnly data-testid="repo-binding-provider" />
@@ -53,6 +190,7 @@ export function RepositoryBindingForm(props: {
         <input
           value={identity}
           onChange={(e) => setIdentity(e.target.value)}
+          placeholder="org/repo"
           data-testid="repo-binding-identity"
         />
       </label>
@@ -61,6 +199,7 @@ export function RepositoryBindingForm(props: {
         <input
           value={remoteUrl}
           onChange={(e) => setRemoteUrl(e.target.value)}
+          placeholder="https://github.com/org/repo.git"
           data-testid="repo-binding-remote-url"
         />
       </label>
@@ -69,6 +208,7 @@ export function RepositoryBindingForm(props: {
         <input
           value={defaultBranch}
           onChange={(e) => setDefaultBranch(e.target.value)}
+          placeholder="main"
           data-testid="repo-binding-default-branch"
         />
       </label>
@@ -77,12 +217,13 @@ export function RepositoryBindingForm(props: {
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
+        disabled={saveDisabled}
         onClick={() => void onSave()}
         data-testid="repo-binding-save"
       >

```

### TrajectorySurface.tsx.diff
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 3b2e2702..c468d32b 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -149,7 +149,6 @@ function yieldBrowserPaint(): Promise<void> {
 export function TrajectorySurface({
   projectId,
   onDurableFactsChanged,
-  recoveryProposeSignal = 0,
   durableRefreshSignal = 0,
   composition = "standalone",
   activeProposalId = null,
@@ -157,8 +156,6 @@ export function TrajectorySurface({
 }: {
   projectId: string;
   onDurableFactsChanged?: () => void;
-  /** B1 — increment from RecoverySurface requalify to reuse proposeOptions(). */
-  recoveryProposeSignal?: number;
   /** Increment after Lifecycle bridge / durable mutations to rehydrate candidate. */
   durableRefreshSignal?: number;
   /**
@@ -498,12 +495,6 @@ export function TrajectorySurface({
     void rehydrateActiveDecisionSubject();
   }, [rehydrateActiveDecisionSubject, durableRefreshSignal]);

-  useEffect(() => {
-    if (recoveryProposeSignal > 0) {
-      void proposeOptions();
-    }
-  }, [recoveryProposeSignal, proposeOptions]);
-
   const decide = useCallback(
     async (selectedOptionRef: string) => {
       if (!optionSet) return;
@@ -896,6 +887,29 @@ export function TrajectorySurface({
     setProductEvidencePending(false);
   }, [attempt, projectId]);

+  /**
+   * JOURNEY-INTEGRITY — CTA exclusivity on the mutating primary action.
+   *
+   * While a Proposal decision subject still owns the next useful action, the
+   * generic ProjectTrajectory instruct CTA must not offer a competing subject.
+   * Informational blocks above remain visible; only the mutating CTA is strict.
+   */
+  const decidedOptionRef = decision?.selectedOptionRef ?? null;
+  const decisionDefersExecution =
+    decidedOptionRef === PROPOSAL_SUBJECT_AMEND_REF ||
+    decidedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF;
+  const proposalSubjectOwnsNextAction =
+    // reformulate / instruct the pending subject
+    pendingReinstruction != null ||
+    // options presented, awaiting the HumanDecision
+    (optionSet != null && decision == null) ||
+    // amend / refuse: next move is with Nora, never a new generic instruction
+    (decision != null && decisionDefersExecution) ||
+    // pursue decided but no contract yet: PREPARE owns the next action
+    (decision != null && contract == null) ||
+    // contract prepared: Inspect (then confirm / authorize) owns the next action
+    contract != null;
+
   return (
     <section
       className={[
@@ -1194,11 +1208,13 @@ export function TrajectorySurface({
       ) : null}

       {/*
-        W2 OptionSet requires an active CycleInstance. Hide the CTA in all
-        pre-cycle states (CURRENT NEXT_CYCLE LR, candidate-only, or empty)
-        so the Pilote is never offered a path known to return CYCLE_NOT_QUALIFIED.
+        W2 OptionSet requires an active CycleInstance.
+        JOURNEY-INTEGRITY — whenever a Proposal decision subject owns the next
+        action (pending, options awaiting decision, decision taken, contract
+        prepared), the generic trajectory instruct CTA is hidden so two
+        decision subjects can never compete for the same primary action.
       */}
-      {activeCycleInstanceId ? (
+      {activeCycleInstanceId && !proposalSubjectOwnsNextAction ? (
       <div className={styles.actions}>
         <button
           type="button"
@@ -1207,7 +1223,7 @@ export function TrajectorySurface({
           onClick={() => void proposeOptions()}
           disabled={busy !== null}
         >
-          {optionSet ? "Réinstruire les options" : "Instruire les options"}
+          Instruire les options
         </button>
         {busy ? (
           <span className={styles.busy} role="status" data-testid="w2-busy">
@@ -1417,8 +1433,22 @@ export function TrajectorySurface({
               préparation d&apos;exécution ici.
             </p>
           ) : null}
-          {decision.selectedOptionRef !== PROPOSAL_SUBJECT_AMEND_REF &&
-          decision.selectedOptionRef !== PROPOSAL_SUBJECT_REFUSE_REF ? (
+          {/*
+            Contract prepared → Inspect owns the next action; no re-PREPARE here.
+
+            RESERVE (HIGH, Lot D) — two PREPARE lineages coexist and are not
+            merged here on purpose:
+              · W2 `w2PrepareExecutionContractAction` takes an explicit operation
+                kind from this selector, allowlisted server-side (sandbox ops).
+              · M3 `projectAssistantPrepareM3Action` derives the operation from
+                the sealed DecisionBasis, so a `docs_write` execution basis keeps
+                its artifact-materialization action without any UI choice.
+            A Proposal decided on a docs_write basis therefore has no admissible
+            entry in this selector. Auto-routing to the M3 path from here would
+            mix a client-chosen kind with a sealed one; qualifying the divergence
+            is deliberately left to Lot D rather than merged into this surface.
+          */}
+          {!decisionDefersExecution && !contract ? (
           <div
             className={styles.actions}
             data-testid="w3a-qualify-execution-work"
@@ -1473,9 +1503,7 @@ export function TrajectorySurface({
                   : undefined
               }
             >
-              {contract
-                ? "Repréparer le contrat d'exécution"
-                : "Préparer le contrat d'exécution"}
+              Préparer le contrat d&apos;exécution
             </button>
           </div>
           ) : null}

```

### activeProposalDecisionSubject.ts.diff
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
index 550e87ee..df57d207 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
@@ -9,15 +9,20 @@
  * may remain; reconstruction shadows it. READ FAILURE ≠ EMPTY STATE.
  */

-import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import {
+  readLiveProjectContext,
+  type RuntimeOaStack,
+} from "@/lib/vertical-slice-runtime";
 import { listProposalsForProject } from "../f2/proposalStore";
 import {
   pilotAmbiguousPendingMessage,
   pilotPendingReinstructionMessage,
 } from "../presentationLabels";
 import {
+  hydrateProposalsFromPendingMarkers,
   listActivePendingDecisionSubjectMarkers,
   type PendingDecisionSubjectMarker,
+  type SnapshotHydrationLiveContext,
 } from "./pendingDecisionSubjectMarker";
 import {
   isProposalSubjectPresentedSet,
@@ -264,6 +269,25 @@ export async function readActiveProposalDecisionSubject(
   if (!pending.ok) return pending;

   if (pending.markers.length > 0) {
+    // Snapshot continuity is only admissible against live Product truth.
+    // Unreadable live context is an epistemic failure, not "no subject".
+    const live = await readLiveProjectContext(oa, projectId);
+    if (!live.ok) {
+      return {
+        ok: false,
+        code: "EPISTEMIC_READ_FAILED",
+        message:
+          "Contexte Project/LPS courant illisible — reconstruction du sujet de décision refusée. Aucun fallback trajectoire générique.",
+      };
+    }
+    const liveContext: SnapshotHydrationLiveContext = {
+      projectId,
+      lpsId: live.context.lpsId,
+      lpsVersion: live.context.lpsVersion,
+      doctrineDigest: live.context.doctrineDigest,
+      closedProposalIds: pending.closedProposalIds,
+    };
+    hydrateProposalsFromPendingMarkers(pending.markers, liveContext);
     const localDecisionRequired = new Set(
       listProposalsForProject(projectId)
         .filter((p) => p.status === "DECISION_REQUIRED")

```

### orchestrateF2.ts.diff
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 88d31bc7..4e4424e9 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -101,8 +101,8 @@ import {
   sealProposalExecutionBasis,
 } from "../w2/resolveProposalDecisionSubject";

-const EPHEMERAL_NOTICE =
-  "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.";
+/** Single source of persistence honesty for both the turn notice and the Proposal. */
+const EPHEMERAL_NOTICE = F2_PROCESS_LOCAL_NOTICE;

 function normalizeOpaqueProposalId(raw: unknown): string | null {
   if (typeof raw !== "string") return null;
@@ -145,6 +145,7 @@ async function commitPendingDecisionSubjectForDecisionRequired(input: {
     lpsId: input.proposal.contextSnapshot.lpsId,
     lpsVersion: input.proposal.contextSnapshot.lpsVersion,
     doctrineDigest: input.proposal.contextSnapshot.doctrineDigest,
+    proposal: input.proposal,
     correlationId: `cor:pending-subject:${input.proposal.proposalId}`,
   };

@@ -644,6 +645,20 @@ function qualificationFromActiveCycle(input: {
   };
 }

+/**
+ * JOURNEY-INTEGRITY — the reinstruction arm is a server verdict, never a
+ * client inference. "superseded" is reserved for a committed supersession of
+ * the prior pending subject; an armed turn that ends any other way reports
+ * "not_consumed" so the Pilot keeps the arm.
+ */
+function resolveReinstructionTransition(base: {
+  reinstructionTransition?: "superseded" | "not_consumed" | "not_applicable";
+  reinstructionOfProposalId?: string | null;
+}): "superseded" | "not_consumed" | "not_applicable" {
+  if (base.reinstructionTransition) return base.reinstructionTransition;
+  return base.reinstructionOfProposalId ? "not_consumed" : "not_applicable";
+}
+
 function f2Success(base: {
   text: string;
   mode: "fixture" | "live";
@@ -656,6 +671,12 @@ function f2Success(base: {
   executionBlocked?: boolean;
   mw5?: Mw5TurnSurface | null;
   turnKind?: "f1_informative" | "f2_clarification" | "f2_proposal" | "f2_blocked";
+  reinstructionTransition?: "superseded" | "not_consumed" | "not_applicable";
+  /**
+   * JOURNEY-INTEGRITY — armed reinstruction carried by this turn. Only the
+   * server may declare supersession; any other outcome leaves the arm intact.
+   */
+  reinstructionOfProposalId?: string | null;
 }): ProjectAssistantSendResult {
   const turnKind =
     base.turnKind ??
@@ -677,6 +698,7 @@ function f2Success(base: {
     toolEvents: [],
     project: base.project,
     ephemeralNotice: EPHEMERAL_NOTICE,
+    reinstructionTransition: resolveReinstructionTransition(base),
     mw5: base.mw5
       ? {
           disposition: base.mw5.disposition,
@@ -738,6 +760,8 @@ async function f2ConversationalSuccess(input: {
   executionBlocked?: boolean;
   mw5?: Mw5TurnSurface | null;
   turnKind?: "f1_informative" | "f2_clarification" | "f2_proposal" | "f2_blocked";
+  reinstructionTransition?: "superseded" | "not_consumed" | "not_applicable";
+  reinstructionOfProposalId?: string | null;
 }): Promise<ProjectAssistantSendResult> {
   await persistCanonicalF2AssistantTurn({
     projectId: input.project.projectId,
@@ -1025,6 +1049,9 @@ export async function orchestrateAssistantSend(input: {
       model: f1.model ?? model,
       ephemeralNotice: EPHEMERAL_NOTICE,
       mw5: null,
+      reinstructionTransition: resolveReinstructionTransition({
+        reinstructionOfProposalId,
+      }),
       f2: {
         turnKind: "f1_informative",
         intentClass: reportedIntent,
@@ -1059,6 +1086,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
     });
   }

@@ -1075,6 +1103,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
     });
   }

@@ -1107,6 +1136,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
       executionBlocked: true,
       turnKind:
         continuation.reason === "incompatible_execution_intent" ||
@@ -1143,6 +1173,7 @@ export async function orchestrateAssistantSend(input: {
         model,
         project,
         intentClass: analysis.intentClass,
+        reinstructionOfProposalId,
         qualification,
         executionBlocked: analysis.intentClass === "execution_request",
         turnKind: "f2_clarification",
@@ -1169,6 +1200,7 @@ export async function orchestrateAssistantSend(input: {
         model,
         project,
         intentClass: analysis.intentClass,
+        reinstructionOfProposalId,
         qualification,
         executionBlocked: analysis.intentClass === "execution_request",
         mw5: mw5.surface,
@@ -1249,6 +1281,10 @@ export async function orchestrateAssistantSend(input: {
       executionBlocked: true,
       mw5: mw5.surface,
       turnKind: "f2_proposal",
+      reinstructionOfProposalId,
+      reinstructionTransition: reinstructionGate.reinstructionOfProposalId
+        ? "superseded"
+        : undefined,
     });
   }

@@ -1276,6 +1312,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
     });
   }

@@ -1344,6 +1381,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
       qualification,
       executionBlocked: analysis.intentClass === "execution_request",
     });
@@ -1369,6 +1407,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
       qualification,
       executionBlocked: analysis.intentClass === "execution_request",
       mw5: mw5.surface,
@@ -1407,6 +1446,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
       qualification,
       executionBlocked: analysis.intentClass === "execution_request",
     });
@@ -1424,6 +1464,7 @@ export async function orchestrateAssistantSend(input: {
       model,
       project,
       intentClass: analysis.intentClass,
+      reinstructionOfProposalId,
       qualification: {
         ...qualification,
         cycleInstanceId: created.cycle.cycleInstanceId,
@@ -1549,5 +1590,7 @@ export async function orchestrateAssistantSend(input: {
     proposal,
     executionBlocked,
     mw5: mw5.surface,
+    reinstructionOfProposalId,
+    reinstructionTransition: newCycleReinstructionOf ? "superseded" : undefined,
   });
 }

```

### pendingDecisionSubjectMarker.ts.diff
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts b/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
index 0b0853e1..13f4f439 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
@@ -11,12 +11,18 @@

 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
+import type { ProposalDto } from "../f2/types";
+import { saveProposal, getProposal } from "../f2/proposalStore";
 import { pilotAmbiguousPendingMessage } from "../presentationLabels";
 import {
   isProposalSubjectPresentedSet,
   parsePresentedOptionSetStatement,
   W2_PRESENTED_OPTION_SET_KIND,
 } from "./presentedOptionSet";
+import {
+  computeProposalSubjectDigest,
+  sealProposalExecutionBasis,
+} from "./resolveProposalDecisionSubject";

 export const PENDING_DECISION_SUBJECT_KIND =
   "w2_pending_decision_subject" as const;
@@ -31,6 +37,11 @@ export type PendingDecisionSubjectMarker = {
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
@@ -64,6 +75,12 @@ export function parsePendingDecisionSubjectMarker(
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
@@ -73,12 +90,81 @@ export function parsePendingDecisionSubjectMarker(
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
+ * Live Product truth a snapshot must still agree with before it may be trusted
+ * as a reconstructible decision subject.
+ */
+export type SnapshotHydrationLiveContext = {
+  projectId: string;
+  lpsId: string;
+  lpsVersion: number;
+  doctrineDigest: string;
+  closedProposalIds?: ReadonlySet<string>;
+};
+
+/**
+ * JOURNEY-INTEGRITY — a snapshot is admissible only when it is internally
+ * coherent with its marker, still decidable, AND still matches live Product
+ * truth. Any mismatch means requalification, never silent repair.
+ */
+export function isValidProposalSnapshotForHydration(
+  marker: PendingDecisionSubjectMarker,
+  live: SnapshotHydrationLiveContext,
+): boolean {
+  const snapshot = marker.proposalSnapshot;
+  if (!snapshot) return false;
+  if (snapshot.proposalId !== marker.proposalId) return false;
+
+  const snapshotContext = snapshot.contextSnapshot;
+  if (!snapshotContext) return false;
+  if (snapshotContext.projectId !== marker.projectId) return false;
+  if (snapshotContext.lpsId !== marker.lpsId) return false;
+  if (snapshotContext.lpsVersion !== marker.lpsVersion) return false;
+  if (snapshotContext.doctrineDigest !== marker.doctrineDigest) return false;
+
+  if (snapshot.status !== "DECISION_REQUIRED") return false;
+  if (snapshot.morrisGateRequired !== true) return false;
+
+  if (live.projectId !== marker.projectId) return false;
+  if (live.lpsId !== marker.lpsId) return false;
+  if (live.lpsVersion !== marker.lpsVersion) return false;
+  if (live.doctrineDigest !== marker.doctrineDigest) return false;
+
+  if (live.closedProposalIds?.has(marker.proposalId)) return false;
+
+  const recomputed = computeProposalSubjectDigest(
+    sealProposalExecutionBasis(snapshot),
+    snapshot.proposalId,
+  );
+  return recomputed === marker.subjectDigest;
+}
+
+/**
+ * Hydrate process-local ProposalStore from durable marker snapshots when
+ * missing. Live context is mandatory: continuity is only honest while the
+ * snapshot still describes the current Project/LPS/doctrine truth.
+ */
+export function hydrateProposalsFromPendingMarkers(
+  markers: readonly PendingDecisionSubjectMarker[],
+  live: SnapshotHydrationLiveContext,
+): readonly string[] {
+  const hydrated: string[] = [];
+  for (const marker of markers) {
+    if (getProposal(marker.proposalId)) continue;
+    if (!isValidProposalSnapshotForHydration(marker, live)) continue;
+    saveProposal(marker.proposalSnapshot!);
+    hydrated.push(marker.proposalId);
+  }
+  return hydrated;
+}
+
 export type WritePendingDecisionSubjectMarkerInput = {
   readonly oa: RuntimeOaStack;
   readonly projectId: string;
@@ -87,6 +173,7 @@ export type WritePendingDecisionSubjectMarkerInput = {
   readonly lpsId: string;
   readonly lpsVersion: number;
   readonly doctrineDigest: string;
+  readonly proposal?: ProposalDto;
   readonly correlationId?: string;
 };

@@ -109,6 +196,9 @@ export async function writePendingDecisionSubjectMarker(
     lpsVersion: input.lpsVersion,
     doctrineDigest: input.doctrineDigest,
     status: "pending_binding",
+    ...(input.proposal && input.proposal.proposalId === input.proposalId
+      ? { proposalSnapshot: input.proposal }
+      : {}),
   };
   const written = await input.oa.cycleServices.updateEpistemicState.execute({
     projectId: input.projectId,
@@ -251,6 +341,7 @@ export type ReplacePendingDecisionSubjectForExplicitReinstructionInput = {
   readonly lpsId: string;
   readonly lpsVersion: number;
   readonly doctrineDigest: string;
+  readonly proposal?: ProposalDto;
   readonly correlationId?: string;
 };

@@ -384,6 +475,9 @@ export async function replacePendingDecisionSubjectForExplicitReinstruction(
     lpsVersion: input.lpsVersion,
     doctrineDigest: input.doctrineDigest,
     status: "pending_binding",
+    ...(input.proposal && input.proposal.proposalId === newProposalId
+      ? { proposalSnapshot: input.proposal }
+      : {}),
   };

   const written = await input.oa.cycleServices.updateEpistemicState.execute({

```

### proposalStore.ts.diff
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts b/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
index 3496280e..ba01c084 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts
@@ -19,8 +19,17 @@ function getSlot(): StoreSlot {
   return g[STORE_KEY];
 }

+/**
+ * JOURNEY-INTEGRITY — honest persistence disclosure.
+ *
+ * The conversation is NOT a durable aggregate and this notice must never claim
+ * that the whole Proposal is one. What is promised is narrower and true: the
+ * effective decision subject is kept or reconstructible while it stays valid
+ * (Epistemic marker + snapshot), and a lost or altered subject leads to
+ * explicit requalification instead of invention.
+ */
 export const F2_PROCESS_LOCAL_NOTICE =
-  "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle/HumanDecision/ExecutionContract M3 sont persistés dans Product SQLite. Authority locale TEMPORARY WITH EXIT. Aucune exécution Cursor REAL.";
+  "La conversation n'est pas un agrégat durable. Le sujet de décision effectif est conservé ou reconstruisible tant qu'il reste valide ; sinon reformulation explicite — jamais d'invention. Project/LPS/Cycle/HumanDecision/ExecutionContract restent dans Product SQLite. Aucune exécution Cursor REAL. (Détail technique : marqueur d'observation épistémique durable ; transcript et Proposal en mémoire de processus ; autorité locale TEMPORARY WITH EXIT.)";

 export function createProposalId(): string {
   return `prop:f2:${randomUUID()}`;

```

### types.ts.diff
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index efc483f3..75a5de97 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -211,6 +211,15 @@ export type ProjectAssistantSendSuccess = {
   /** MW5 — challenge / clarification / Critical ordering / escalation (when assessed). */
   mw5?: Mw5CognitiveSurfaceDto | null;
   f2?: F2TurnPayload;
+  /**
+   * JOURNEY-INTEGRITY — server verdict on the armed reinstruction.
+   * "superseded": the prior pending decision subject was actually replaced —
+   *   the only value that may clear the client arm.
+   * "not_consumed": the turn carried an armed reinstruction but no supersession
+   *   was committed (clarification, block, MW5 deny, F1 advisory…).
+   * "not_applicable": no reinstruction was armed for this turn.
+   */
+  reinstructionTransition?: "superseded" | "not_consumed" | "not_applicable";
   /**
    * LR CORR-DELIVERY-02 — optional Product-turn Recommendation materialization.
    * null = not attempted / no structured turn; false = none or fail-closed; true = persisted.

```

### useProductConversation.ts.diff
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index df82e7fa..eb15e095 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -375,10 +375,20 @@ export function useProductConversation({
         return;
       }

-      if (reinstructionOfProposalId) {
+      // Supersession is a server verdict only. A DECISION_REQUIRED Proposal
+      // alone does not prove the prior pending subject was replaced, so the arm
+      // survives clarifications, blocks, MW5 denials and F1 advisory turns.
+      if (
+        reinstructionOfProposalId &&
+        result.reinstructionTransition === "superseded"
+      ) {
         setArmedReinstructionOfProposalId(null);
         options?.onReinstructionConsumed?.();
       }
+      if (result.f2?.proposal?.status === "DECISION_REQUIRED") {
+        // A committed decision subject is a durable Epistemic marker write.
+        notifyDurableFactsChanged();
+      }

       lastSendFailedRef.current = false;
       lastLogicalTurnIdRef.current = result.logicalTurnId ?? null;

```

- NEW `projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts` sha256=3457717da300c9d43ac03c889641aff009663ef6cfd79941523e12977f438e8b bytes=17980

- NEW `projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts` sha256=9c144c49fefa373d28c37e5e49c3f03c85eb7a82d430431121a9c7d3d49b1a70 bytes=30413

- NEW `projects/sfia-studio/app/__tests__/pre-m6-product-ui/repositoryBindingForm.ui.test.tsx` sha256=83f88a5d9484beeb2345028828596c37d5e789c697b14d2888314b667c0d8d2d bytes=7354
