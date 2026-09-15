# CORR-PROOF-11 — Review Pack (FULL)

- timestamp: 2026-09-15T10:40:30Z
- cycle: 8 — Delivery / EVOL / Critical
- Morris GO consumed: local Product candidate only — reinstruction continuity + amend/refuse UX gating + pilot-facing semantics
- repository: mcleland147/sfia-workspace
- worktree: `/Users/morris/Projects/sfia-studio-corr-proof-11-reinstruction-pilot-language`
- branch: `fix/sfia-studio-corr-proof-11-reinstruction-pilot-language`
- base / HEAD: `1215c4823ba29421f46553f9b2fd2bde5b63c0f6` (dirty candidate; **0 commits** ahead of origin/main)
- dogfood worktree preserved: `/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d` @ `1215c482…` (DB/session/env/3020 NOT touched)
- Project commit / push / PR / merge: **NOT PERFORMED**

## Sources read

Process: cycle template, routing guide, operating model, guardrails, synthetic map.
Convergence: build doctrine, roadmap, product-completion cadrage.
v3 framing: 32 / 33 / 34 (read-only).
Code: ProposalStore, orchestrateF2, pending/active/resolve/propose/decide/prepare/actions/types, presentationLabels, ProjectWorkspacePage, useProductConversation, TrajectorySurface, CORR-10 tests.

## Root causes

### Gap A — Reinstruction continuity — CONFIRMED

- `readActiveProposalDecisionSubject` order: bound awaiting → effective pending → none.
- Pending-only returns `pending_reinstruction_required` with a message that incorrectly always claimed process-local loss.
- `orchestrateF2` wrote a **new** pending marker on each DECISION_REQUIRED Proposal with **no supersession** of prior effective pendings → ghost A after reinstruction/restart.
- Resolve reasons were only `option_set_bound|decided|amended|refused` — no `superseded_by_reinstruction`.
- Multi-pending possible; no explicit reinstruction transport.

### Gap B — Amend/Refuse ≠ PREPARE — CONFIRMED

- Backend already fail-closed: `prepareExecutionContractFromW2Decision` → `PREPARE_NOT_APPLICABLE` when proposal subject selectedOption ≠ pursue.
- UI bug: TrajectorySurface rendered operation selector + « Préparer le contrat d'exécution » for **any** `decision`.

### Gap C — Pilot language — CONFIRMED

- TrajectorySurface exposed Proposal IDs, ProjectTrajectory jargon, raw option refs as primary copy.
- Nora active-cycle envelope in `orchestrateF2` is **deterministic** (`[LIVE]`, docs_write, ZERO Attempt, DECISION REQUIRED…) — not provider prose.
- `presentationLabels.formatNoraAssistantDisplayText` existed but did not scrub those envelope phrases; TrajectorySurface barely used helpers.

## Design retained — explicit reinstruction

1. Client may send opaque `reinstructionOfProposalId` (non-authoritative).
2. Server gate `assertExplicitReinstructionGate`:
   - no effective pending → write new pending as before;
   - effective pending **without** reinstruction → `EXPLICIT_REINSTRUCTION_REQUIRED` (no competing decidable Proposal);
   - reinstruction id must match an **effective** pending; fail closed otherwise;
   - bound awaiting OptionSet blocks supersession.
3. On valid reinstruction after `saveProposal(B)`:
   - `replacePendingDecisionSubjectForExplicitReinstruction` atomically resolves A + writes B in **one** `updateEpistemicState` items batch (transactional when UoW present);
   - on failure → `markProposalStale(B)`; A remains authoritative.
4. Ordinary Nora turn without reinstruction never resolves pendings (R10).
5. Legacy CORR-10 markers compatible (same Epistemic Observation shape; no migration).
6. Reinstruction A never clears unrelated pending B; no project-global clear.

### Recoverability honesty

Pending read now exposes `recoverableProposalIds` (process-local DECISION_REQUIRED still present).
Pilot message does **not** claim loss when recoverable; CTA can instruct options on that id.
When not recoverable: reformulation CTA arms `reinstructionOfProposalId` + focuses Nora.

## Gap B UX

- amend → `w2-amend-next-action` (no op selector / no PREPARE)
- refuse → `w2-refuse-next-action`
- pursue / trajectory decisions keep PREPARE path
- direct PREPARE amend/refuse still `PREPARE_NOT_APPLICABLE` (backend)

## Gap C language

- `pilotPendingReinstructionMessage`, `pilotProposalOptionLabel`, `pilotPrepareNotApplicableMessage`
- scrub in `formatNoraAssistantDisplayText` for ZERO Attempt / Cursor REAL / DECISION_REQUIRED / docs_write / pending_reinstruction_required
- orchestrateF2 active-cycle textParts rewritten to pilot French (mode test/réel, décision requise, rien exécuté)
- TrajectorySurface: « Proposition à examiner », « Votre décision », technical IDs in `<details data-testid="w2-technical-details">`

## Atomicity / crash consistency

| Scenario | Outcome |
|---|---|
| Atomic replace succeeds | A resolved (`superseded_by_reinstruction`), B sole active pending |
| Replace fails after saveProposal(B) | B STALE; A still effective |
| Bound awaiting present | replace refused |
| Wrong / empty reinstruction id | fail closed; A unchanged |

## Multi-subject safety

- Closure/reinstruction of A does not neutralize unrelated B
- Trajectory DecisionRef without `prop:` does not close Proposal pendings (CORR-10 invariant kept)
- Ambiguous / non-matching reinstruction → fail closed
- No silent supersession of bound awaiting subject

## Files created / modified (candidate)

**New**
- `projects/sfia-studio/app/__tests__/project-assistant/corrProof11.reinstructionPilotLanguage.d0.test.ts` (15 tests; R01–R22 coverage, some combined)

**Modified**
- `w2/pendingDecisionSubjectMarker.ts` — supersede reason + atomic replace
- `w2/activeProposalDecisionSubject.ts` — recoverable ids + reinstruction gate helpers
- `w2/resolveProposalDecisionSubject.ts` — pilot messages
- `w2/actions.ts`, `w2/types.ts` — recoverableProposalIds transport
- `f2/orchestrateF2.ts` — reinstruction gate + replace + pilot envelope
- `actions.ts` — `reinstructionOfProposalId` passthrough
- `presentationLabels.ts` — pilot helpers + scrub
- `TrajectorySurface.tsx` — pending CTA, amend/refuse gating, pilot copy
- `ProjectWorkspacePage.tsx` / `useProductConversation.ts` — arm/consume reinstruction
- `trajectorySurface.ui.test.tsx` — amend/refuse UI + mocks
- `corrProof07…T15` — second send must pass explicit reinstruction (behavioral consequence of Gap A gate)

## Diffstat (Product/app only)

13 tracked files changed, **+876 / −82**, plus untracked:
`corrProof11.reinstructionPilotLanguage.d0.test.ts`

(`.tmp-sfia-review/chatgpt-review.md` is local review-only — excluded from any future project commit.)

## Validation

| Suite | Result |
|---|---|
| CORR-PROOF-11 | **15 PASS** |
| CORR-PROOF-10 | **45 PASS** |
| CORR-PROOF-07 | **32 PASS** |
| CORR-PROOF-09 | **15 PASS** |
| W2 Track A | **22 PASS** |
| TrajectorySurface UI | **7 PASS** |
| importBoundaries | **5 PASS** |
| Targeted total | **158 PASS** |
| Full Vitest | **4045 passed / 137 skipped / 0 failed** (380 files: 363 passed / 17 skipped) |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| git diff --check | PASS |

## Fake / Real

- DETERMINISTIC ONLY
- ZERO OpenAI LIVE
- ZERO Cursor REAL
- ZERO dogfood mutation / ZERO interaction with « Gestion de tâches »
- runtime v3 NON ADOPTED
- NOT REAL BOUNDARY / NOT E2E REAL / NOT L5

## Dogfood untouched

- Product DB / nora-session / d1 / .env.local not modified by this cycle
- Server 3020 left as found (still listening from prior env prep)
- No dogfood reproof

## Debt / reserves / exit

- Physical housekeeping of superseded markers still non-blocking (resolved status is authoritative)
- Broader Product redesign / Figma fidelity out of scope
- Provider-generated Nora prose not post-processed beyond existing display scrub
- Exit: ChatGPT Critical Review for **Git Integration Readiness** (still no project commit in this cycle)

## Structural decisions

None requiring Decision Pack — reuse Epistemic Observation + ProposalStore + presentationLabels + existing UoW.

## Forbidden actions NOT performed

- project commit / push / PR / merge
- dogfood mutation
- REAL / LIVE
- migrations / new tables / aggregates
- doctrine / roadmap / C1 / v3 framing edits
- redesign / design-system overhaul
- force push / branch delete

## Verdict

CORR-PROOF-11 — REINSTRUCTION CONTINUITY + AMEND/REFUSE UX GATING + PILOT-FACING SEMANTICS DETERMINISTICALLY PROVEN — READY FOR CHATGPT GIT INTEGRATION READINESS


---

# APPENDIX — FULL DIFFS FOR CRITICAL REVIEW

> Republished pack: narrative + complete diffs. Trailing whitespace stripped for handoff publisher compliance; diff content otherwise complete.

## git diff --stat

```
 .../trajectorySurface.ui.test.tsx                  | 136 +++++++++++
 .../corrProof07.artifactMaterialization.d0.test.ts |  13 +-
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |   4 +
 .../hooks/useProductConversation.ts                |  27 +++
 .../surfaces/TrajectorySurface.tsx                 | 180 +++++++++++++--
 .../app/features/project-assistant/actions.ts      |  10 +
 .../features/project-assistant/f2/orchestrateF2.ts | 253 ++++++++++++++++-----
 .../project-assistant/presentationLabels.ts        |  47 ++++
 .../app/features/project-assistant/w2/actions.ts   |   1 +
 .../w2/activeProposalDecisionSubject.ts            |  81 ++++++-
 .../w2/pendingDecisionSubjectMarker.ts             | 195 +++++++++++++++-
 .../w2/resolveProposalDecisionSubject.ts           |  10 +-
 .../app/features/project-assistant/w2/types.ts     |   1 +
 13 files changed, 876 insertions(+), 82 deletions(-)
```

## git diff (all 13 tracked Product/test files, complete)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 6337029a..e389ffb9 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -118,6 +118,142 @@ beforeEach(() => {
 });

 describe("W2 TrajectorySurface", () => {
+  it("CORR-PROOF-11 — amend decision hides prepare; shows next-action", async () => {
+    proposeMock.mockResolvedValue({
+      ok: true,
+      optionSetRef: "optset:w2-proposal",
+      cycleTypeId: "cyc:delivery",
+      recommendedProfile: "Critical",
+      decisionSubjectMode: "proposal",
+      proposalId: "prop:f2:ui-amend",
+      promotesProjectTrajectory: false,
+      options: [
+        {
+          kind: "OPTION",
+          optionRef: "opt:proposal-subject:amend",
+          label: "Amender le sujet avant d'engager",
+          intent: "Modifier",
+          impacts: [],
+          reservations: [],
+          steps: [],
+        },
+        {
+          kind: "OPTION",
+          optionRef: "opt:proposal-subject:pursue",
+          label: "Poursuivre le sujet proposé",
+          intent: "Continuer",
+          impacts: [],
+          reservations: [],
+          steps: [],
+        },
+      ],
+      recommendation: {
+        label: "RECOMMANDATION — PAS UNE DÉCISION",
+        recommendedOptionRef: "opt:proposal-subject:pursue",
+        rationale: "Continuer.",
+        isHumanDecision: false,
+        ckcAttribution: false,
+      },
+      epistemicRefs: [],
+      proposedTrajectory: null,
+      phase: "OPTIONS_PROPOSED",
+      autoDecisionPerformed: false,
+      executionPerformed: false,
+      ckcCognitionCompletedBeforeMutation: true,
+    });
+    decideMock.mockResolvedValue({
+      ok: true,
+      decision: {
+        decisionId: "dec:amend",
+        selectedOptionRef: "opt:proposal-subject:amend",
+        actorRole: "Pilote",
+        authorityClass: "morris",
+        statusLabel: "DÉCISION HUMAINE PRISE",
+        capturedAt: "2026-08-23T04:30:00.000Z",
+        decisionBasisLinked: true,
+        reservesText: null,
+        proposalId: "prop:f2:ui-amend",
+      },
+      trajectory: null,
+      livingProjectStateVersion: 3,
+      executionPerformed: false,
+      promotesProjectTrajectory: false,
+      decisionSubjectMode: "proposal",
+    });
+
+    render(<TrajectorySurface projectId="prj:w2-ui" />);
+    fireEvent.click(await screen.findByTestId("w2-propose-options"));
+    await screen.findByTestId("w2-options");
+    fireEvent.click(screen.getByTestId("w2-decide-opt:proposal-subject:amend"));
+    expect(await screen.findByTestId("w2-decision")).toBeVisible();
+    expect(screen.getByTestId("w2-amend-next-action")).toBeVisible();
+    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
+    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
+    expect(screen.getByTestId("w2-decided-option")).toHaveTextContent("Modifier");
+  });
+
+  it("CORR-PROOF-11 — pursue on proposal subject still shows prepare", async () => {
+    proposeMock.mockResolvedValue({
+      ok: true,
+      optionSetRef: "optset:w2-proposal-pursue",
+      cycleTypeId: "cyc:delivery",
+      recommendedProfile: "Critical",
+      decisionSubjectMode: "proposal",
+      proposalId: "prop:f2:ui-pursue",
+      promotesProjectTrajectory: false,
+      options: [
+        {
+          kind: "OPTION",
+          optionRef: "opt:proposal-subject:pursue",
+          label: "Poursuivre le sujet proposé",
+          intent: "Continuer",
+          impacts: [],
+          reservations: [],
+          steps: [],
+        },
+      ],
+      recommendation: {
+        label: "RECOMMANDATION — PAS UNE DÉCISION",
+        recommendedOptionRef: "opt:proposal-subject:pursue",
+        rationale: "Continuer.",
+        isHumanDecision: false,
+        ckcAttribution: false,
+      },
+      epistemicRefs: [],
+      proposedTrajectory: null,
+      phase: "OPTIONS_PROPOSED",
+      autoDecisionPerformed: false,
+      executionPerformed: false,
+      ckcCognitionCompletedBeforeMutation: true,
+    });
+    decideMock.mockResolvedValue({
+      ok: true,
+      decision: {
+        decisionId: "dec:pursue",
+        selectedOptionRef: "opt:proposal-subject:pursue",
+        actorRole: "Pilote",
+        authorityClass: "morris",
+        statusLabel: "DÉCISION HUMAINE PRISE",
+        capturedAt: "2026-08-23T04:30:00.000Z",
+        decisionBasisLinked: true,
+        reservesText: null,
+        proposalId: "prop:f2:ui-pursue",
+      },
+      trajectory: null,
+      livingProjectStateVersion: 3,
+      executionPerformed: false,
+      promotesProjectTrajectory: false,
+      decisionSubjectMode: "proposal",
+    });
+
+    render(<TrajectorySurface projectId="prj:w2-ui" />);
+    fireEvent.click(await screen.findByTestId("w2-propose-options"));
+    await screen.findByTestId("w2-options");
+    fireEvent.click(screen.getByTestId("w2-decide-opt:proposal-subject:pursue"));
+    expect(await screen.findByTestId("w2-decision")).toBeVisible();
+    expect(screen.getByTestId("w2-prepare-contract")).toBeVisible();
+    expect(screen.queryByTestId("w2-amend-next-action")).toBeNull();
+  });
   it("labels Options and Recommendation distinctly and never auto-decides", async () => {
     proposeMock.mockResolvedValue({
       ok: true,
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
index 38538870..fc5d857e 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
@@ -331,10 +331,14 @@ describe("CORR-PROOF-07 — Active-cycle artifact materialization continuation",
     return cycles.length;
   }

-  async function sendMaterialize(phrasing: string) {
+  async function sendMaterialize(
+    phrasing: string,
+    opts?: { reinstructionOfProposalId?: string | null },
+  ) {
     return orchestrateAssistantSend({
       projectId,
       content: `${phrasing} __F2_ARTIFACT_MATERIALIZE__`,
+      reinstructionOfProposalId: opts?.reinstructionOfProposalId,
     });
   }

@@ -715,9 +719,16 @@ describe("CORR-PROOF-07 — Active-cycle artifact materialization continuation",

   it("T15 — two semantically equivalent phrasings pass (not exact one string)", async () => {
     const a = await sendMaterialize("Matérialise ce livrable.");
+    expect(a.ok).toBe(true);
+    if (!a.ok) return;
+    const priorProposalId = a.f2?.proposal?.proposalId ?? null;
+    expect(priorProposalId).toBeTruthy();
     resetF2ProposalStoreForTests();
+    // CORR-PROOF-11 — second DECISION_REQUIRED requires explicit reinstruction
+    // of the durable pending subject (store reset alone is not enough).
     const b = await sendMaterialize(
       "Peux-tu écrire le document attendu dans le dépôt ?",
+      { reinstructionOfProposalId: priorProposalId },
     );
     expect(a.ok && b.ok).toBe(true);
     if (!a.ok || !b.ok) return;
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 9be0a296..b5942b86 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -243,6 +243,10 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                       ? controller.activeProposal.proposalId
                       : null
                   }
+                  onRequestReformulateWithNora={(proposalId) => {
+                    controller.armReinstructionOfProposalId(proposalId);
+                    focusConversation();
+                  }}
                 />
               </div>
             </section>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index 94be44b8..df82e7fa 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -138,6 +138,9 @@ export function useProductConversation({
    * Retained until terminal client-observed success.
    */
   const pendingRetryEnvelopeRef = useRef<PendingTurnRetryEnvelope | null>(null);
+  /** CORR-PROOF-11 — armed opaque proposalId for explicit reinstruction send. */
+  const [armedReinstructionOfProposalId, setArmedReinstructionOfProposalId] =
+    useState<string | null>(null);

   const listRef = useRef<HTMLDivElement | null>(null);
   const f3InFlightRef = useRef(false);
@@ -278,6 +281,13 @@ export function useProductConversation({
       history?: PendingTurnRetryEnvelope["history"] | null;
       /** Exact content from pending retry envelope (retry path). */
       content?: string | null;
+      /**
+       * CORR-PROOF-11 — opaque prior pending proposalId for explicit reinstruction.
+       * Cleared by caller after a successful send that consumed it.
+       */
+      reinstructionOfProposalId?: string | null;
+      /** Fired after a successful send that included reinstructionOfProposalId. */
+      onReinstructionConsumed?: () => void;
     },
   ) {
     const usingRetryEnvelope = Boolean(options?.turnRetryKey?.trim());
@@ -316,6 +326,10 @@ export function useProductConversation({
       turnRetryKey,
     });
     pendingRetryEnvelopeRef.current = envelope;
+    const reinstructionOfProposalId =
+      typeof options?.reinstructionOfProposalId === "string"
+        ? options.reinstructionOfProposalId.trim() || null
+        : armedReinstructionOfProposalId;

     startTransition(async () => {
       setUiState("ASSISTANT_WORKING");
@@ -329,6 +343,9 @@ export function useProductConversation({
           ...(presentedLogicalTurnId
             ? { logicalTurnId: presentedLogicalTurnId }
             : {}),
+          ...(reinstructionOfProposalId
+            ? { reinstructionOfProposalId }
+            : {}),
         });
       } catch {
         // Transport / Server Action rejection before structured response.
@@ -358,6 +375,11 @@ export function useProductConversation({
         return;
       }

+      if (reinstructionOfProposalId) {
+        setArmedReinstructionOfProposalId(null);
+        options?.onReinstructionConsumed?.();
+      }
+
       lastSendFailedRef.current = false;
       lastLogicalTurnIdRef.current = result.logicalTurnId ?? null;
       // Terminal client-observed success — clear transport retry envelope.
@@ -696,6 +718,11 @@ export function useProductConversation({
     canConfirmLegacyFixture,
     canRefreshResolvedM3Running,
     sendMessage,
+    armReinstructionOfProposalId: (proposalId: string) => {
+      const trimmed = proposalId.trim();
+      if (trimmed) setArmedReinstructionOfProposalId(trimmed);
+    },
+    armedReinstructionOfProposalId,
     decide,
     prepareResolvedM3,
     prepareLegacyFixture,
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 889411dc..e0d676f5 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -51,7 +51,13 @@ import {
   W4C_NEXT_ACTION_LEAD,
   W4C_POST_EVIDENCE_HEADING,
   W4C_PRODUCT_OUTCOME_LABELS,
+  pilotPrepareNotApplicableMessage,
+  pilotProposalOptionLabel,
 } from "@/features/project-assistant/presentationLabels";
+import {
+  PROPOSAL_SUBJECT_AMEND_REF,
+  PROPOSAL_SUBJECT_REFUSE_REF,
+} from "@/features/project-assistant/w2/proposalSubjectOptions";
 import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
 import type { ExecutionContractStatus } from "@/lib/oa/execution-contract/domain/types";
 import styles from "./TrajectorySurface.module.css";
@@ -144,6 +150,7 @@ export function TrajectorySurface({
   durableRefreshSignal = 0,
   composition = "standalone",
   activeProposalId = null,
+  onRequestReformulateWithNora,
 }: {
   projectId: string;
   onDurableFactsChanged?: () => void;
@@ -161,9 +168,19 @@ export function TrajectorySurface({
    * Server resolves; client never sends objective/path/operation.
    */
   activeProposalId?: string | null;
+  /**
+   * CORR-PROOF-11 — arm explicit reinstruction + focus conversation.
+   * Called with the effective pending proposalId to supersede.
+   */
+  onRequestReformulateWithNora?: (proposalId: string) => void;
 }) {
   const [busy, setBusy] = useState<Busy>(null);
   const [error, setError] = useState<string | null>(null);
+  const [pendingReinstruction, setPendingReinstruction] = useState<{
+    readonly message: string;
+    readonly proposalIds: readonly string[];
+    readonly recoverableProposalIds: readonly string[];
+  } | null>(null);
   const [preCycleCandidate, setPreCycleCandidate] = useState<{
     trajectoryId: string;
     version: number;
@@ -256,9 +273,15 @@ export function TrajectorySurface({
   const proposeOptions = useCallback(async () => {
     setBusy("options");
     setError(null);
+    const recoverableSole =
+      pendingReinstruction?.recoverableProposalIds.length === 1
+        ? pendingReinstruction.recoverableProposalIds[0]!
+        : null;
+    const proposalIdForPropose = activeProposalId ?? recoverableSole;
+    setPendingReinstruction(null);
     const result = await w2ProposeTrajectoryOptionsAction({
       projectId,
-      proposalId: activeProposalId ?? null,
+      proposalId: proposalIdForPropose,
     });
     setBusy(null);
     if (!result.ok) {
@@ -280,25 +303,38 @@ export function TrajectorySurface({
     setProductOutcome(null);
     setPostEvidence(null);
     onDurableFactsChanged?.();
-  }, [projectId, activeProposalId, onDurableFactsChanged]);
+  }, [
+    projectId,
+    activeProposalId,
+    pendingReinstruction,
+    onDurableFactsChanged,
+  ]);

   /** CORR-PROOF-10 — rehydrate bound Proposal OptionSet from durable Epistemic. */
   const rehydrateActiveDecisionSubject = useCallback(async () => {
     const result = await w2ReadActiveDecisionSubjectAction({ projectId });
     if (!result.ok) {
       setError(result.message);
+      setPendingReinstruction(null);
       return;
     }
     if (result.kind === "bound_awaiting_decision") {
       setOptionSet(result.optionSet);
       setError(null);
+      setPendingReinstruction(null);
       return;
     }
     if (result.kind === "pending_reinstruction_required") {
       setOptionSet(null);
-      setError(result.message);
+      setPendingReinstruction({
+        message: result.message,
+        proposalIds: result.proposalIds,
+        recoverableProposalIds: result.recoverableProposalIds,
+      });
+      setError(null);
       return;
     }
+    setPendingReinstruction(null);
     // kind === "none" — leave local optionSet as-is for trajectory path
   }, [projectId]);

@@ -520,7 +556,11 @@ export function TrajectorySurface({
     });
     setBusy(null);
     if (!result.ok) {
-      setError(result.message);
+      setError(
+        result.code === "PREPARE_NOT_APPLICABLE"
+          ? pilotPrepareNotApplicableMessage()
+          : result.message,
+      );
       return;
     }
     const prepared = result.contract;
@@ -883,6 +923,64 @@ export function TrajectorySurface({
         </p>
       ) : null}

+      {pendingReinstruction ? (
+        <section
+          className={styles.block}
+          aria-labelledby="w2-pending-reinstruction-title"
+          data-testid="w2-pending-reinstruction"
+        >
+          <h3
+            id="w2-pending-reinstruction-title"
+            className={styles.blockTitle}
+          >
+            Reformulez votre demande
+          </h3>
+          <p className={styles.blockBody} data-testid="w2-pending-reinstruction-body">
+            {pendingReinstruction.message}
+          </p>
+          {pendingReinstruction.recoverableProposalIds.length > 0 ? (
+            <div className={styles.actions}>
+              <button
+                type="button"
+                className={styles.primaryAction}
+                data-testid="w2-instruct-recoverable-options"
+                onClick={() => void proposeOptions()}
+                disabled={busy !== null}
+              >
+                Instruire les options
+              </button>
+            </div>
+          ) : (
+            <div className={styles.actions}>
+              <button
+                type="button"
+                className={styles.primaryAction}
+                data-testid="w2-reformulate-with-nora"
+                onClick={() => {
+                  const targetId =
+                    pendingReinstruction.proposalIds[0] ?? "";
+                  if (targetId) onRequestReformulateWithNora?.(targetId);
+                }}
+                disabled={
+                  busy !== null ||
+                  pendingReinstruction.proposalIds.length === 0 ||
+                  !onRequestReformulateWithNora
+                }
+              >
+                Reformuler avec Nora
+              </button>
+            </div>
+          )}
+          <details data-testid="w2-technical-details">
+            <summary>Détails techniques</summary>
+            <p className={styles.blockNote}>
+              Propositions en attente :{" "}
+              {pendingReinstruction.proposalIds.join(", ") || "—"}
+            </p>
+          </details>
+        </section>
+      ) : null}
+
       {preCycleCandidate && !activeCycleInstanceId ? (
         <section
           className={styles.block}
@@ -1086,16 +1184,23 @@ export function TrajectorySurface({
               Options proposées
             </h3>
             {optionSet.proposalId ? (
-              <p
-                className={styles.blockNote}
-                data-testid="w2-decision-subject"
-              >
-                Sujet de décision : Proposal{" "}
-                <code>{optionSet.proposalId}</code>
-                {optionSet.promotesProjectTrajectory === false
-                  ? " — arbitrage sur ce sujet (pas une promotion ProjectTrajectory)."
-                  : null}
-              </p>
+              <>
+                <p
+                  className={styles.blockNote}
+                  data-testid="w2-decision-subject"
+                >
+                  Proposition à examiner
+                  {optionSet.promotesProjectTrajectory === false
+                    ? " — arbitrage sur cette proposition (pas une promotion de trajectoire projet)."
+                    : null}
+                </p>
+                <details data-testid="w2-technical-details">
+                  <summary>Détails techniques</summary>
+                  <p className={styles.blockNote}>
+                    Proposal <code>{optionSet.proposalId}</code>
+                  </p>
+                </details>
+              </>
             ) : (
               <p
                 className={styles.blockNote}
@@ -1108,7 +1213,7 @@ export function TrajectorySurface({
               {optionSet.proposedTrajectory
                 ? `${optionSet.proposedTrajectory.statusLabel} · version ${optionSet.proposedTrajectory.version} · pas encore courante`
                 : optionSet.decisionSubjectMode === "proposal"
-                  ? "Sujet Proposal — aucune ProjectTrajectory proposée (ZERO promotion)."
+                  ? "Proposition — aucune trajectoire projet proposée."
                   : "Aucune trajectoire proposée."}
             </p>
             <ul className={styles.optionList}>
@@ -1187,13 +1292,19 @@ export function TrajectorySurface({
             <span className={styles.sectionKind} data-kind="decision">
               Décision humaine
             </span>
-            Décision de trajectoire — {decision.statusLabel}
+            {optionSet?.decisionSubjectMode === "proposal" ||
+            decision.proposalId
+              ? `Votre décision — ${decision.statusLabel}`
+              : `Décision de trajectoire — ${decision.statusLabel}`}
           </h3>
           <dl className={styles.facts}>
             <div>
               <dt>Option retenue</dt>
               <dd data-testid="w2-decided-option">
-                {decision.selectedOptionRef}
+                {optionSet?.decisionSubjectMode === "proposal" ||
+                decision.proposalId
+                  ? pilotProposalOptionLabel(decision.selectedOptionRef)
+                  : decision.selectedOptionRef}
               </dd>
             </div>
             <div>
@@ -1215,6 +1326,40 @@ export function TrajectorySurface({
               </dd>
             </div>
           </dl>
+          <details data-testid="w2-technical-details">
+            <summary>Détails techniques</summary>
+            <p className={styles.blockNote}>
+              Réf. option : <code>{decision.selectedOptionRef}</code>
+              {decision.proposalId ? (
+                <>
+                  {" "}
+                  · Proposal <code>{decision.proposalId}</code>
+                </>
+              ) : null}
+            </p>
+          </details>
+          {decision.selectedOptionRef === PROPOSAL_SUBJECT_AMEND_REF ? (
+            <p
+              className={styles.blockBody}
+              data-testid="w2-amend-next-action"
+            >
+              Modifiez la proposition avec Nora, puis reformulez explicitement
+              si une nouvelle instruction est requise. Aucune préparation
+              d&apos;exécution ici.
+            </p>
+          ) : null}
+          {decision.selectedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF ? (
+            <p
+              className={styles.blockBody}
+              data-testid="w2-refuse-next-action"
+            >
+              Vous avez choisi de ne pas poursuivre cette proposition.
+              Reformulez avec Nora si vous souhaitez un nouveau sujet. Aucune
+              préparation d&apos;exécution ici.
+            </p>
+          ) : null}
+          {decision.selectedOptionRef !== PROPOSAL_SUBJECT_AMEND_REF &&
+          decision.selectedOptionRef !== PROPOSAL_SUBJECT_REFUSE_REF ? (
           <div
             className={styles.actions}
             data-testid="w3a-qualify-execution-work"
@@ -1274,6 +1419,7 @@ export function TrajectorySurface({
                 : "Préparer le contrat d'exécution"}
             </button>
           </div>
+          ) : null}
         </section>
       ) : null}

diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 0690de45..d96e40e2 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -95,6 +95,11 @@ export async function projectAssistantSendAction(input: {
    * NOT Product turn identity / SFIA authority — Session-adjacent lookup only.
    */
   turnRetryKey?: string;
+  /**
+   * CORR-PROOF-11 — opaque prior pending proposalId for explicit reinstruction.
+   * Untrusted until server validates against effective pending markers.
+   */
+  reinstructionOfProposalId?: string | null;
 }): Promise<ProjectAssistantSendResult> {
   const executionContractId =
     typeof input.executionContractId === "string"
@@ -122,6 +127,10 @@ export async function projectAssistantSendAction(input: {
       claimedAuthorityLevel: input.claimedAuthorityLevel,
     });
   }
+  const reinstructionOfProposalId =
+    typeof input.reinstructionOfProposalId === "string"
+      ? input.reinstructionOfProposalId.trim() || null
+      : null;
   return orchestrateAssistantSend({
     projectId: input.projectId,
     content: input.content,
@@ -130,6 +139,7 @@ export async function projectAssistantSendAction(input: {
     sessionDbPath: input.sessionDbPath,
     logicalTurnId: input.logicalTurnId,
     turnRetryKey: input.turnRetryKey,
+    reinstructionOfProposalId,
   });
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 26385e6d..49c029a1 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -25,6 +25,7 @@ import {
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
 import type {
   AssistantHistoryMessage,
+  AssistantUiMode,
   ProjectAssistantContextDto,
   ProjectAssistantSendResult,
 } from "../types";
@@ -78,6 +79,7 @@ import { getCycleTypeById, type CycleInstance } from "@/lib/oa/cycle";
 import {
   F2_PROCESS_LOCAL_NOTICE,
   createProposalId,
+  markProposalStale,
   saveProposal,
 } from "./proposalStore";
 import type {
@@ -87,7 +89,13 @@ import type {
   QualificationDto,
 } from "./types";
 import type { ExecutionIntentPayload } from "./executionIntentSchema";
-import { writePendingDecisionSubjectMarker } from "../w2/pendingDecisionSubjectMarker";
+import {
+  assertExplicitReinstructionGate,
+} from "../w2/activeProposalDecisionSubject";
+import {
+  replacePendingDecisionSubjectForExplicitReinstruction,
+  writePendingDecisionSubjectMarker,
+} from "../w2/pendingDecisionSubjectMarker";
 import {
   computeProposalSubjectDigest,
   sealProposalExecutionBasis,
@@ -96,6 +104,121 @@ import {
 const EPHEMERAL_NOTICE =
   "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.";

+function normalizeOpaqueProposalId(raw: unknown): string | null {
+  if (typeof raw !== "string") return null;
+  const trimmed = raw.trim();
+  return trimmed.length > 0 ? trimmed : null;
+}
+
+/**
+ * CORR-PROOF-11 — gate + write/replace pending decision subject for a new
+ * DECISION_REQUIRED Proposal. Ordinary turns without reinstruction never
+ * resolve existing pendings (R10).
+ */
+async function commitPendingDecisionSubjectForDecisionRequired(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly proposal: ProposalDto;
+  readonly reinstructionOfProposalId: string | null;
+  readonly mode: AssistantUiMode;
+}): Promise<
+  | { readonly ok: true }
+  | {
+      readonly ok: false;
+      readonly status: "validation_error";
+      readonly code: string;
+      readonly message: string;
+      readonly mode: AssistantUiMode;
+      readonly retryable: boolean;
+    }
+> {
+  const sealed = sealProposalExecutionBasis(input.proposal);
+  const subjectDigest = computeProposalSubjectDigest(
+    sealed,
+    input.proposal.proposalId,
+  );
+  const markerInput = {
+    oa: input.oa,
+    projectId: input.projectId,
+    proposalId: input.proposal.proposalId,
+    subjectDigest,
+    lpsId: input.proposal.contextSnapshot.lpsId,
+    lpsVersion: input.proposal.contextSnapshot.lpsVersion,
+    doctrineDigest: input.proposal.contextSnapshot.doctrineDigest,
+    correlationId: `cor:pending-subject:${input.proposal.proposalId}`,
+  };
+
+  if (input.reinstructionOfProposalId) {
+    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
+      {
+        ...markerInput,
+        oldProposalId: input.reinstructionOfProposalId,
+        newProposalId: input.proposal.proposalId,
+        correlationId: `cor:pending-subject-reinstruction:${input.reinstructionOfProposalId}:${input.proposal.proposalId}`,
+      },
+    );
+    if (!replaced.ok) {
+      markProposalStale(input.proposal.proposalId);
+      return {
+        ok: false,
+        status: "validation_error",
+        code: replaced.code,
+        message: replaced.message,
+        mode: input.mode,
+        retryable: true,
+      };
+    }
+    return { ok: true };
+  }
+
+  const marker = await writePendingDecisionSubjectMarker(markerInput);
+  if (!marker.ok) {
+    return {
+      ok: false,
+      status: "validation_error",
+      code: marker.code,
+      message: marker.message,
+      mode: input.mode,
+      retryable: true,
+    };
+  }
+  return { ok: true };
+}
+
+async function resolveExplicitReinstructionGate(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly reinstructionOfProposalId: string | null;
+  readonly mode: AssistantUiMode;
+}): Promise<
+  | { readonly ok: true; readonly reinstructionOfProposalId: string | null }
+  | {
+      readonly ok: false;
+      readonly status: "validation_error";
+      readonly code: string;
+      readonly message: string;
+      readonly mode: AssistantUiMode;
+      readonly retryable: boolean;
+    }
+> {
+  const gated = await assertExplicitReinstructionGate({
+    oa: input.oa,
+    projectId: input.projectId,
+    reinstructionOfProposalId: input.reinstructionOfProposalId,
+  });
+  if (!gated.ok) {
+    return {
+      ok: false,
+      status: "validation_error",
+      code: gated.code,
+      message: gated.message,
+      mode: input.mode,
+      retryable: true,
+    };
+  }
+  return gated;
+}
+
 async function deriveProductPathMw3Assessment(
   analysis: IntentAnalysisDto,
   projectId: string,
@@ -649,6 +772,11 @@ export async function orchestrateAssistantSend(input: {
    * Opaque client transport retry correlation (untrusted; not Product identity).
    */
   turnRetryKey?: string;
+  /**
+   * CORR-PROOF-11 — opaque prior pending proposalId for explicit reinstruction.
+   * Server-validated against effective pending markers; never trusted alone.
+   */
+  reinstructionOfProposalId?: string | null;
   /**
    * INTERNAL / EVAL-ONLY — Stage A constitutive model×effort pin.
    * Propagated to analyzeIntent + F1 cognitive path. Never a client DTO field.
@@ -665,6 +793,9 @@ export async function orchestrateAssistantSend(input: {
   campaignBudget?: NoraCampaignBudget;
 }): Promise<ProjectAssistantSendResult> {
   const content = input.content.trim();
+  const reinstructionOfProposalId = normalizeOpaqueProposalId(
+    input.reinstructionOfProposalId,
+  );
   if (!content) {
     return {
       ok: false,
@@ -1048,6 +1179,23 @@ export async function orchestrateAssistantSend(input: {

     // Pilot explicit decision required (existing morrisGateRequired seam for recordF2Decision).
     // Presentation uses Pilot wording — never "gate Morris construction" on this path.
+    const reinstructionGate = await resolveExplicitReinstructionGate({
+      oa,
+      projectId: project.projectId,
+      reinstructionOfProposalId,
+      mode: modeResolution.mode,
+    });
+    if (!reinstructionGate.ok) {
+      return {
+        ok: false,
+        status: "validation_error",
+        code: reinstructionGate.code ?? "EXPLICIT_REINSTRUCTION_REQUIRED",
+        message: reinstructionGate.message,
+        mode: modeResolution.mode,
+        retryable: reinstructionGate.retryable ?? true,
+      };
+    }
+
     const proposal = saveProposal(
       buildProposal({
         intent: analysis,
@@ -1061,49 +1209,33 @@ export async function orchestrateAssistantSend(input: {
       }),
     );

-    // CORR-PROOF-10 — durable pending subject marker before OptionSet binding.
-    // Fail closed when OA is available and marker write fails.
+    // CORR-PROOF-10/11 — durable pending subject marker (write or explicit supersession).
     {
-      const sealed = sealProposalExecutionBasis(proposal);
-      const subjectDigest = computeProposalSubjectDigest(
-        sealed,
-        proposal.proposalId,
-      );
-      const marker = await writePendingDecisionSubjectMarker({
+      const marker = await commitPendingDecisionSubjectForDecisionRequired({
         oa,
         projectId: project.projectId,
-        proposalId: proposal.proposalId,
-        subjectDigest,
-        lpsId: proposal.contextSnapshot.lpsId,
-        lpsVersion: proposal.contextSnapshot.lpsVersion,
-        doctrineDigest: proposal.contextSnapshot.doctrineDigest,
-        correlationId: `cor:pending-subject:${proposal.proposalId}`,
+        proposal,
+        reinstructionOfProposalId: reinstructionGate.reinstructionOfProposalId,
+        mode: modeResolution.mode,
       });
       if (!marker.ok) {
-        return {
-          ok: false,
-          status: "validation_error",
-          code: marker.code,
-          message: marker.message,
-          mode: modeResolution.mode,
-          retryable: true,
-        };
+        return marker;
       }
     }

     const textParts = [
-      presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
-      "Continuation gouvernée — matérialisation du livrable requis sur le cycle actif.",
-      `Cycle actif: ${activeCycle.cycleInstanceId} (${activeCycle.status}) — aucun nouveau CycleInstance.`,
-      `Profil cycle: ${qualification.recommendedProfile}.`,
-      "Proposition d'effet de matérialisation liée au cycle actif (docs_write) — NON exécutée.",
-      "RECOMMANDATION ≠ HumanDecision ≠ Execution.",
-      "DÉCISION PILOTE EXPLICITE REQUISE avant PREPARE / ExecutionContract.",
-      "AUCUNE EXÉCUTION — ZERO Attempt — ZERO Cursor REAL.",
+      presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+      "Continuation sur le cycle actif — matérialisation du livrable demandé.",
+      `Cycle actif conservé: ${activeCycle.cycleInstanceId} (${activeCycle.status}).`,
+      `Profil: ${qualification.recommendedProfile}.`,
+      "Une proposition d'écriture de document est prête à examiner — non exécutée.",
+      "Recommandation ≠ décision Pilote ≠ exécution.",
+      "Décision Pilote requise avant préparation du plan d'exécution.",
+      "Rien n'a encore été exécuté.",
       mw5.surface.disposition === "ESCALATE"
         ? mw5.text
         : mw5.surface.disclosure,
-      "Nora n'émet pas de HumanDecision, GO, Confirmation ou acte Pilote.",
+      "Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.",
     ];

     return f2ConversationalSuccess({
@@ -1334,6 +1466,28 @@ export async function orchestrateAssistantSend(input: {
     }) || mw5.surface.disposition === "ESCALATE";

   const status = morrisGateRequired ? "DECISION_REQUIRED" : "READY_NO_GATE";
+
+  let newCycleReinstructionOf: string | null = null;
+  if (status === "DECISION_REQUIRED") {
+    const reinstructionGate = await resolveExplicitReinstructionGate({
+      oa,
+      projectId: project.projectId,
+      reinstructionOfProposalId,
+      mode: modeResolution.mode,
+    });
+    if (!reinstructionGate.ok) {
+      return {
+        ok: false,
+        status: "validation_error",
+        code: reinstructionGate.code ?? "EXPLICIT_REINSTRUCTION_REQUIRED",
+        message: reinstructionGate.message,
+        mode: modeResolution.mode,
+        retryable: reinstructionGate.retryable ?? true,
+      };
+    }
+    newCycleReinstructionOf = reinstructionGate.reinstructionOfProposalId;
+  }
+
   const proposal = saveProposal(
     buildProposal({
       intent: analysis,
@@ -1346,36 +1500,21 @@ export async function orchestrateAssistantSend(input: {
   );

   if (status === "DECISION_REQUIRED") {
-    const sealed = sealProposalExecutionBasis(proposal);
-    const subjectDigest = computeProposalSubjectDigest(
-      sealed,
-      proposal.proposalId,
-    );
-    const marker = await writePendingDecisionSubjectMarker({
+    const marker = await commitPendingDecisionSubjectForDecisionRequired({
       oa,
       projectId: project.projectId,
-      proposalId: proposal.proposalId,
-      subjectDigest,
-      lpsId: proposal.contextSnapshot.lpsId,
-      lpsVersion: proposal.contextSnapshot.lpsVersion,
-      doctrineDigest: proposal.contextSnapshot.doctrineDigest,
-      correlationId: `cor:pending-subject:${proposal.proposalId}`,
+      proposal,
+      reinstructionOfProposalId: newCycleReinstructionOf,
+      mode: modeResolution.mode,
     });
     if (!marker.ok) {
-      return {
-        ok: false,
-        status: "validation_error",
-        code: marker.code,
-        message: marker.message,
-        mode: modeResolution.mode,
-        retryable: true,
-      };
+      return marker;
     }
   }

   const executionBlocked = analysis.intentClass === "execution_request";
   const textParts = [
-    presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
+    presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
     "Qualification SFIA et proposition structurée générées.",
     `Cycle: ${qualification.cycleTypeId} (${qualification.cycleLabel}).`,
     `CycleInstance candidate: ${created.cycle.cycleInstanceId} (${created.cycle.status}) — NON ACTIVE — Pilot START requis.`,
@@ -1387,17 +1526,17 @@ export async function orchestrateAssistantSend(input: {
     ...(qualification.ckcCognitiveRecommendation
       ? [qualification.ckcCognitiveRecommendation]
       : []),
-    "RECOMMANDATION ≠ décision Pilote — AUCUNE activation authority-bearing avant Pilot START.",
+    "Recommandation ≠ décision Pilote — aucune activation d'autorité avant Pilot START.",
     morrisGateRequired
-      ? "DÉCISION REQUISE — gate Morris construction (≠ Pilot lifecycle START)."
-      : "NO MORRIS CONSTRUCTION GATE REQUIRED — AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI.",
+      ? "Décision Pilote requise — gate Morris construction (≠ Pilot lifecycle START)."
+      : "Pas de gate Morris construction — AUCUNE EXÉCUTION — F2 s'arrête ici.",
     executionBlocked
       ? "Demande d'exécution détectée — AUCUNE EXÉCUTION (Cursor/PR/merge indisponibles)."
       : "AUCUNE EXÉCUTION.",
     mw5.surface.disposition === "ESCALATE"
       ? mw5.text
       : mw5.surface.disclosure,
-    "Nora n'émet pas de HumanDecision, GO, Confirmation, décision Morris ou acte Pilote.",
+    "Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.",
   ];

   return f2ConversationalSuccess({
diff --git a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
index e900e92f..af73c02a 100644
--- a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
+++ b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
@@ -740,6 +740,39 @@ export function scrubPiloteFacingEngineJargon(text: string): string {
  * - neutralize visible markdown emphasis markers without HTML
  * Does not alter user messages; does not use dangerouslySetInnerHTML.
  */
+/**
+ * CORR-PROOF-11 — pending Proposal subject reinstruction (Pilote-facing).
+ * Never claims process-local loss unless recoverability is known false.
+ */
+export function pilotPendingReinstructionMessage(input: {
+  recoverable: boolean;
+}): string {
+  if (input.recoverable) {
+    return "Une proposition attend encore votre instruction. Vous pouvez instruire les options sur cette proposition — ce n'est pas une perte définitive.";
+  }
+  return "Reformulez explicitement votre demande avec Nora pour remplacer la proposition en attente. Aucun fallback vers des options de trajectoire génériques.";
+}
+
+/** Pilote labels for Proposal-subject option refs (technical ref stays in details). */
+export function pilotProposalOptionLabel(
+  optionRef: string | null | undefined,
+): string {
+  switch ((optionRef ?? "").trim()) {
+    case "opt:proposal-subject:pursue":
+      return "Continuer";
+    case "opt:proposal-subject:amend":
+      return "Modifier";
+    case "opt:proposal-subject:refuse":
+      return "Ne pas poursuivre";
+    default:
+      return nonempty(optionRef) ?? "Option";
+  }
+}
+
+export function pilotPrepareNotApplicableMessage(): string {
+  return "La préparation d'exécution ne s'applique pas après une décision de modification ou de refus — poursuivez avec Nora.";
+}
+
 export function formatNoraAssistantDisplayText(text: string | null | undefined): string {
   if (!text) return "";
   let out = text;
@@ -748,6 +781,20 @@ export function formatNoraAssistantDisplayText(text: string | null | undefined):
   out = out.replace(/\\\*/g, "*");
   out = out.replace(/\[MW5[^\]]*\]/gi, "");
   out = out.replace(/\bcount=\d+\b/gi, "");
+  // Soften deterministic Nora envelope jargon (presentation only).
+  out = out.replace(
+    /\bAUCUNE EXÉCUTION\s*[—–-]\s*ZERO Attempt\s*[—–-]\s*ZERO Cursor REAL\b/gi,
+    "Rien n'a encore été exécuté.",
+  );
+  out = out.replace(/\bZERO Attempt\b/gi, "Rien n'a encore été exécuté");
+  out = out.replace(/\bZERO Cursor REAL\b/gi, "aucune exécution Cursor réelle");
+  out = out.replace(
+    /\bDÉCISION PILOTE EXPLICITE REQUISE\b/gi,
+    "Votre décision est requise",
+  );
+  out = out.replace(/\bDECISION_REQUIRED\b/g, "Votre décision est requise");
+  out = out.replace(/\bpending_reinstruction_required\b/g, "reformulation requise");
+  out = out.replace(/\bdocs_write\b/g, "écriture de document");
   // Soften markdown emphasis / headings leftovers without rendering HTML.
   out = out.replace(/\*\*([^*]+)\*\*/g, "$1");
   out = out.replace(/(^|\n)#{1,6}\s+/g, "$1");
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index db241880..f0af827a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -130,6 +130,7 @@ export async function w2ReadActiveDecisionSubjectAction(input: {
       kind: "pending_reinstruction_required",
       message: read.message,
       proposalIds: read.markers.map((m) => m.proposalId),
+      recoverableProposalIds: read.recoverableProposalIds,
     };
   }
   return {
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
index d5ea8908..e0ff2524 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
@@ -10,6 +10,8 @@
  */

 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import { listProposalsForProject } from "../f2/proposalStore";
+import { pilotPendingReinstructionMessage } from "../presentationLabels";
 import {
   listActivePendingDecisionSubjectMarkers,
   type PendingDecisionSubjectMarker,
@@ -37,6 +39,8 @@ export type ActiveProposalDecisionSubject =
       readonly ok: true;
       readonly kind: "pending_reinstruction_required";
       readonly markers: readonly PendingDecisionSubjectMarker[];
+      /** Pending proposalIds still present as DECISION_REQUIRED in process-local store. */
+      readonly recoverableProposalIds: readonly string[];
       readonly message: string;
     }
   | {
@@ -257,14 +261,87 @@ export async function readActiveProposalDecisionSubject(
   if (!pending.ok) return pending;

   if (pending.markers.length > 0) {
+    const localDecisionRequired = new Set(
+      listProposalsForProject(projectId)
+        .filter((p) => p.status === "DECISION_REQUIRED")
+        .map((p) => p.proposalId),
+    );
+    const recoverableProposalIds = pending.markers
+      .map((m) => m.proposalId)
+      .filter((id) => localDecisionRequired.has(id));
     return {
       ok: true,
       kind: "pending_reinstruction_required",
       markers: pending.markers,
-      message:
-        "Sujet décisionnel pending durable détecté après perte process-local — réinstruction Nora requise. Aucun fallback vers options de trajectoire génériques.",
+      recoverableProposalIds,
+      message: pilotPendingReinstructionMessage({
+        recoverable: recoverableProposalIds.length > 0,
+      }),
     };
   }

   return { ok: true, kind: "none" };
 }
+
+/**
+ * CORR-PROOF-11 — server gate before minting a competing DECISION_REQUIRED subject.
+ * Ordinary turns without reinstruction must not resolve pendings (R10); they must
+ * not silently write a second pending either.
+ */
+export async function assertExplicitReinstructionGate(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly reinstructionOfProposalId: string | null;
+}): Promise<
+  | { readonly ok: true; readonly reinstructionOfProposalId: string | null }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+> {
+  const effective = await listEffectivePendingDecisionSubjectMarkers(
+    input.oa,
+    input.projectId,
+  );
+  if (!effective.ok) {
+    return {
+      ok: false,
+      code: effective.code,
+      message: effective.message,
+    };
+  }
+
+  if (effective.markers.length === 0) {
+    if (input.reinstructionOfProposalId) {
+      return {
+        ok: false,
+        code: "REINSTRUCTION_SUBJECT_NOT_EFFECTIVE",
+        message:
+          "Aucune proposition en attente à remplacer — retirez la réinstruction explicite.",
+      };
+    }
+    return { ok: true, reinstructionOfProposalId: null };
+  }
+
+  if (!input.reinstructionOfProposalId) {
+    return {
+      ok: false,
+      code: "EXPLICIT_REINSTRUCTION_REQUIRED",
+      message: pilotPendingReinstructionMessage({ recoverable: false }),
+    };
+  }
+
+  const match = effective.markers.find(
+    (m) => m.proposalId === input.reinstructionOfProposalId,
+  );
+  if (!match) {
+    return {
+      ok: false,
+      code: "REINSTRUCTION_SUBJECT_NOT_EFFECTIVE",
+      message:
+        "La proposition à remplacer n'est pas un sujet pending effectif pour ce projet.",
+    };
+  }
+
+  return {
+    ok: true,
+    reinstructionOfProposalId: input.reinstructionOfProposalId,
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts b/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
index bec4ed42..7d6f0b4a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
@@ -2,6 +2,8 @@
  * CORR-PROOF-10 remediation — durable Epistemic Observation marking a
  * pending Proposal decision subject before PresentedOptionSet binding.
  *
+ * CORR-PROOF-11 — explicit reinstruction supersession (atomic resolve+write).
+ *
  * NOT a HumanDecision, NOT a durable Proposal, NOT a new table.
  * Prevents silent fallback to generic ProjectTrajectory options after
  * process-local ProposalStore loss (restart-before-binding).
@@ -9,6 +11,11 @@

 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
+import {
+  isProposalSubjectPresentedSet,
+  parsePresentedOptionSetStatement,
+  W2_PRESENTED_OPTION_SET_KIND,
+} from "./presentedOptionSet";

 export const PENDING_DECISION_SUBJECT_KIND =
   "w2_pending_decision_subject" as const;
@@ -169,12 +176,19 @@ export async function listActivePendingDecisionSubjectMarkers(
   return { ok: true, markers: out };
 }

+export type PendingDecisionSubjectResolveReason =
+  | "option_set_bound"
+  | "decided"
+  | "amended"
+  | "refused"
+  | "superseded_by_reinstruction";
+
 export async function resolvePendingDecisionSubjectMarker(
   input: {
     readonly oa: RuntimeOaStack;
     readonly projectId: string;
     readonly proposalId: string;
-    readonly reason: "option_set_bound" | "decided" | "amended" | "refused";
+    readonly reason: PendingDecisionSubjectResolveReason;
     readonly correlationId?: string;
   },
 ): Promise<
@@ -226,3 +240,182 @@ export async function resolvePendingDecisionSubjectMarker(
   }
   return { ok: true };
 }
+
+export type ReplacePendingDecisionSubjectForExplicitReinstructionInput = {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly oldProposalId: string;
+  readonly newProposalId: string;
+  readonly subjectDigest: string;
+  readonly lpsId: string;
+  readonly lpsVersion: number;
+  readonly doctrineDigest: string;
+  readonly correlationId?: string;
+};
+
+/**
+ * CORR-PROOF-11 — atomically supersede one effective pending marker with a new
+ * pending subject for explicit Nora reinstruction. Fail closed; never clears
+ * all pendings blindly; never supersedes when a bound awaiting OptionSet exists.
+ */
+export async function replacePendingDecisionSubjectForExplicitReinstruction(
+  input: ReplacePendingDecisionSubjectForExplicitReinstructionInput,
+): Promise<
+  | { readonly ok: true; readonly epistemicItemId: string }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+> {
+  const oldProposalId = input.oldProposalId.trim();
+  const newProposalId = input.newProposalId.trim();
+  if (!oldProposalId || !newProposalId || oldProposalId === newProposalId) {
+    return {
+      ok: false,
+      code: "INVALID_REINSTRUCTION_SUBJECT",
+      message:
+        "Réinstruction explicite invalide — l'ancienne et la nouvelle proposition doivent être distinctes.",
+    };
+  }
+
+  const epistemic = await input.oa.cycleServices.getEpistemicState.execute({
+    projectId: input.projectId,
+  });
+  if (!epistemic.ok) {
+    return {
+      ok: false,
+      code: "EPISTEMIC_READ_FAILED",
+      message:
+        "État épistémique illisible — supersession de sujet pending refusée. Aucune mutation.",
+    };
+  }
+
+  // Fail closed when a bound Proposal PresentedOptionSet still awaits HD.
+  const decidedRefs = new Set<string>();
+  for (const item of epistemic.state.items) {
+    if (item.type !== "DecisionRef" || item.status !== "active") continue;
+    for (const rel of item.relatedObjects ?? []) {
+      if (rel.startsWith("optset:")) decidedRefs.add(rel);
+    }
+  }
+  for (const item of epistemic.state.items) {
+    if (item.type !== "Observation" || item.status !== "active") continue;
+    const parsed = parsePresentedOptionSetStatement(item.statement);
+    if (!parsed) continue;
+    if (!isProposalSubjectPresentedSet(parsed)) continue;
+    if (parsed.kind !== W2_PRESENTED_OPTION_SET_KIND) continue;
+    if (decidedRefs.has(parsed.optionSetRef)) continue;
+    return {
+      ok: false,
+      code: "BOUND_PROPOSAL_SUBJECT_BLOCKS_REINSTRUCTION",
+      message:
+        "Un jeu d'options Proposal est déjà en attente de décision — supersession silencieuse refusée.",
+    };
+  }
+
+  const closedProposalIds = new Set<string>();
+  for (const item of epistemic.state.items) {
+    if (item.type !== "DecisionRef" || item.status !== "active") continue;
+    const related = item.relatedObjects ?? [];
+    const hasOptionSet = related.some((r) => r.startsWith("optset:"));
+    if (!hasOptionSet) continue;
+    for (const rel of related) {
+      if (rel.startsWith("prop:")) closedProposalIds.add(rel);
+    }
+  }
+
+  const activePending = await listActivePendingDecisionSubjectMarkers(
+    input.oa,
+    input.projectId,
+  );
+  if (!activePending.ok) {
+    return {
+      ok: false,
+      code: activePending.code,
+      message: activePending.message,
+    };
+  }
+  const effective = activePending.markers.filter(
+    (m) => !closedProposalIds.has(m.proposalId),
+  );
+  const oldMarker = effective.find((m) => m.proposalId === oldProposalId);
+  if (!oldMarker) {
+    return {
+      ok: false,
+      code: "REINSTRUCTION_SUBJECT_NOT_EFFECTIVE",
+      message:
+        "La proposition à remplacer n'est pas un sujet pending effectif pour ce projet.",
+    };
+  }
+
+  const oldEpistemicItemId = pendingDecisionSubjectObservationId(
+    input.projectId,
+    oldProposalId,
+  );
+  const newEpistemicItemId = pendingDecisionSubjectObservationId(
+    input.projectId,
+    newProposalId,
+  );
+  const existingOld = epistemic.state.items.find(
+    (i) => i.epistemicItemId === oldEpistemicItemId,
+  );
+  if (!existingOld || existingOld.status !== "active") {
+    return {
+      ok: false,
+      code: "REINSTRUCTION_SUBJECT_NOT_ACTIVE",
+      message:
+        "Marqueur pending à superséder introuvable ou déjà clos — aucune mutation.",
+    };
+  }
+
+  const reason = "superseded_by_reinstruction" as const;
+  const newMarker: PendingDecisionSubjectMarker = {
+    kind: PENDING_DECISION_SUBJECT_KIND,
+    proposalId: newProposalId,
+    projectId: input.projectId,
+    subjectDigest: input.subjectDigest,
+    lpsId: input.lpsId,
+    lpsVersion: input.lpsVersion,
+    doctrineDigest: input.doctrineDigest,
+    status: "pending_binding",
+  };
+
+  const written = await input.oa.cycleServices.updateEpistemicState.execute({
+    projectId: input.projectId,
+    items: [
+      {
+        epistemicItemId: oldEpistemicItemId,
+        type: "Observation",
+        statement: `${existingOld.statement}\n<!-- resolved:${reason} -->`,
+        status: "resolved",
+        source: existingOld.source,
+        relatedObjects: [
+          ...(existingOld.relatedObjects ?? []),
+          `resolved:${reason}`,
+          `superseded_by:${newProposalId}`,
+        ],
+      },
+      {
+        epistemicItemId: newEpistemicItemId,
+        type: "Observation",
+        statement: serializePendingDecisionSubjectMarker(newMarker),
+        status: "active",
+        source: newProposalId,
+        relatedObjects: [
+          input.projectId,
+          newProposalId,
+          newEpistemicItemId,
+        ],
+      },
+    ],
+    createdBy: LOCAL_PILOTE_ACTOR,
+    correlationId:
+      input.correlationId ??
+      `cor:pending-subject-reinstruction:${oldProposalId}:${newProposalId}`,
+  });
+  if (!written.ok) {
+    return {
+      ok: false,
+      code: written.error.detailCode,
+      message: `Supersession pending decision subject échouée (${written.error.detailCode}).`,
+    };
+  }
+  return { ok: true, epistemicItemId: newEpistemicItemId };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts
index 3ad812d7..a43b537d 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts
@@ -19,6 +19,7 @@ import {
 } from "../f2/proposalStore";
 import type { F2ContextSnapshot, ProposalDto } from "../f2/types";
 import type { ExecutionIntentPayload } from "../f2/executionIntentSchema";
+import { pilotPendingReinstructionMessage } from "../presentationLabels";
 import { listEffectivePendingDecisionSubjectMarkers } from "./activeProposalDecisionSubject";

 export type SealedProposalExecutionBasis = {
@@ -274,11 +275,13 @@ export async function assertProposalSubjectGateOrFail(input: {

   if (!provided) {
     if (pending.length > 0) {
+      const recoverable = pending.some((m) =>
+        activeLocal.some((p) => p.proposalId === m.proposalId),
+      );
       return {
         ok: false,
         code: "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
-        message:
-          "Sujet décisionnel pending durable détecté après perte process-local — réinstruction Nora requise. Aucun fallback vers options de trajectoire génériques.",
+        message: pilotPendingReinstructionMessage({ recoverable }),
       };
     }
     if (activeLocal.length > 0) {
@@ -304,8 +307,7 @@ export async function assertProposalSubjectGateOrFail(input: {
       return {
         ok: false,
         code: "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
-        message:
-          "Proposal process-local absente alors qu'un marqueur pending durable existe — aucune reconstruction. Réinstruction Nora requise.",
+        message: pilotPendingReinstructionMessage({ recoverable: false }),
       };
     }
     // No effective pending — resolveProposalDecisionSubject will fail NOT_FOUND
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index 7a4be826..f21eddff 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -219,6 +219,7 @@ export type ActiveDecisionSubjectReadResult =
       readonly kind: "pending_reinstruction_required";
       readonly message: string;
       readonly proposalIds: readonly string[];
+      readonly recoverableProposalIds: readonly string[];
     }
   | {
       readonly ok: true;
```

## Per-file complete diffs (same content, sectioned)

### FILE DIFF — `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 6337029a..e389ffb9 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -118,6 +118,142 @@ beforeEach(() => {
 });

 describe("W2 TrajectorySurface", () => {
+  it("CORR-PROOF-11 — amend decision hides prepare; shows next-action", async () => {
+    proposeMock.mockResolvedValue({
+      ok: true,
+      optionSetRef: "optset:w2-proposal",
+      cycleTypeId: "cyc:delivery",
+      recommendedProfile: "Critical",
+      decisionSubjectMode: "proposal",
+      proposalId: "prop:f2:ui-amend",
+      promotesProjectTrajectory: false,
+      options: [
+        {
+          kind: "OPTION",
+          optionRef: "opt:proposal-subject:amend",
+          label: "Amender le sujet avant d'engager",
+          intent: "Modifier",
+          impacts: [],
+          reservations: [],
+          steps: [],
+        },
+        {
+          kind: "OPTION",
+          optionRef: "opt:proposal-subject:pursue",
+          label: "Poursuivre le sujet proposé",
+          intent: "Continuer",
+          impacts: [],
+          reservations: [],
+          steps: [],
+        },
+      ],
+      recommendation: {
+        label: "RECOMMANDATION — PAS UNE DÉCISION",
+        recommendedOptionRef: "opt:proposal-subject:pursue",
+        rationale: "Continuer.",
+        isHumanDecision: false,
+        ckcAttribution: false,
+      },
+      epistemicRefs: [],
+      proposedTrajectory: null,
+      phase: "OPTIONS_PROPOSED",
+      autoDecisionPerformed: false,
+      executionPerformed: false,
+      ckcCognitionCompletedBeforeMutation: true,
+    });
+    decideMock.mockResolvedValue({
+      ok: true,
+      decision: {
+        decisionId: "dec:amend",
+        selectedOptionRef: "opt:proposal-subject:amend",
+        actorRole: "Pilote",
+        authorityClass: "morris",
+        statusLabel: "DÉCISION HUMAINE PRISE",
+        capturedAt: "2026-08-23T04:30:00.000Z",
+        decisionBasisLinked: true,
+        reservesText: null,
+        proposalId: "prop:f2:ui-amend",
+      },
+      trajectory: null,
+      livingProjectStateVersion: 3,
+      executionPerformed: false,
+      promotesProjectTrajectory: false,
+      decisionSubjectMode: "proposal",
+    });
+
+    render(<TrajectorySurface projectId="prj:w2-ui" />);
+    fireEvent.click(await screen.findByTestId("w2-propose-options"));
+    await screen.findByTestId("w2-options");
+    fireEvent.click(screen.getByTestId("w2-decide-opt:proposal-subject:amend"));
+    expect(await screen.findByTestId("w2-decision")).toBeVisible();
+    expect(screen.getByTestId("w2-amend-next-action")).toBeVisible();
+    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
+    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
+    expect(screen.getByTestId("w2-decided-option")).toHaveTextContent("Modifier");
+  });
+
+  it("CORR-PROOF-11 — pursue on proposal subject still shows prepare", async () => {
+    proposeMock.mockResolvedValue({
+      ok: true,
+      optionSetRef: "optset:w2-proposal-pursue",
+      cycleTypeId: "cyc:delivery",
+      recommendedProfile: "Critical",
+      decisionSubjectMode: "proposal",
+      proposalId: "prop:f2:ui-pursue",
+      promotesProjectTrajectory: false,
+      options: [
+        {
+          kind: "OPTION",
+          optionRef: "opt:proposal-subject:pursue",
+          label: "Poursuivre le sujet proposé",
+          intent: "Continuer",
+          impacts: [],
+          reservations: [],
+          steps: [],
+        },
+      ],
+      recommendation: {
+        label: "RECOMMANDATION — PAS UNE DÉCISION",
+        recommendedOptionRef: "opt:proposal-subject:pursue",
+        rationale: "Continuer.",
+        isHumanDecision: false,
+        ckcAttribution: false,
+      },
+      epistemicRefs: [],
+      proposedTrajectory: null,
+      phase: "OPTIONS_PROPOSED",
+      autoDecisionPerformed: false,
+      executionPerformed: false,
+      ckcCognitionCompletedBeforeMutation: true,
+    });
+    decideMock.mockResolvedValue({
+      ok: true,
+      decision: {
+        decisionId: "dec:pursue",
+        selectedOptionRef: "opt:proposal-subject:pursue",
+        actorRole: "Pilote",
+        authorityClass: "morris",
+        statusLabel: "DÉCISION HUMAINE PRISE",
+        capturedAt: "2026-08-23T04:30:00.000Z",
+        decisionBasisLinked: true,
+        reservesText: null,
+        proposalId: "prop:f2:ui-pursue",
+      },
+      trajectory: null,
+      livingProjectStateVersion: 3,
+      executionPerformed: false,
+      promotesProjectTrajectory: false,
+      decisionSubjectMode: "proposal",
+    });
+
+    render(<TrajectorySurface projectId="prj:w2-ui" />);
+    fireEvent.click(await screen.findByTestId("w2-propose-options"));
+    await screen.findByTestId("w2-options");
+    fireEvent.click(screen.getByTestId("w2-decide-opt:proposal-subject:pursue"));
+    expect(await screen.findByTestId("w2-decision")).toBeVisible();
+    expect(screen.getByTestId("w2-prepare-contract")).toBeVisible();
+    expect(screen.queryByTestId("w2-amend-next-action")).toBeNull();
+  });
   it("labels Options and Recommendation distinctly and never auto-decides", async () => {
     proposeMock.mockResolvedValue({
       ok: true,
```

### FILE DIFF — `projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
index 38538870..fc5d857e 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
@@ -331,10 +331,14 @@ describe("CORR-PROOF-07 — Active-cycle artifact materialization continuation",
     return cycles.length;
   }

-  async function sendMaterialize(phrasing: string) {
+  async function sendMaterialize(
+    phrasing: string,
+    opts?: { reinstructionOfProposalId?: string | null },
+  ) {
     return orchestrateAssistantSend({
       projectId,
       content: `${phrasing} __F2_ARTIFACT_MATERIALIZE__`,
+      reinstructionOfProposalId: opts?.reinstructionOfProposalId,
     });
   }

@@ -715,9 +719,16 @@ describe("CORR-PROOF-07 — Active-cycle artifact materialization continuation",

   it("T15 — two semantically equivalent phrasings pass (not exact one string)", async () => {
     const a = await sendMaterialize("Matérialise ce livrable.");
+    expect(a.ok).toBe(true);
+    if (!a.ok) return;
+    const priorProposalId = a.f2?.proposal?.proposalId ?? null;
+    expect(priorProposalId).toBeTruthy();
     resetF2ProposalStoreForTests();
+    // CORR-PROOF-11 — second DECISION_REQUIRED requires explicit reinstruction
+    // of the durable pending subject (store reset alone is not enough).
     const b = await sendMaterialize(
       "Peux-tu écrire le document attendu dans le dépôt ?",
+      { reinstructionOfProposalId: priorProposalId },
     );
     expect(a.ok && b.ok).toBe(true);
     if (!a.ok || !b.ok) return;
```

### FILE DIFF — `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 9be0a296..b5942b86 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -243,6 +243,10 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                       ? controller.activeProposal.proposalId
                       : null
                   }
+                  onRequestReformulateWithNora={(proposalId) => {
+                    controller.armReinstructionOfProposalId(proposalId);
+                    focusConversation();
+                  }}
                 />
               </div>
             </section>
```

### FILE DIFF — `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index 94be44b8..df82e7fa 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -138,6 +138,9 @@ export function useProductConversation({
    * Retained until terminal client-observed success.
    */
   const pendingRetryEnvelopeRef = useRef<PendingTurnRetryEnvelope | null>(null);
+  /** CORR-PROOF-11 — armed opaque proposalId for explicit reinstruction send. */
+  const [armedReinstructionOfProposalId, setArmedReinstructionOfProposalId] =
+    useState<string | null>(null);

   const listRef = useRef<HTMLDivElement | null>(null);
   const f3InFlightRef = useRef(false);
@@ -278,6 +281,13 @@ export function useProductConversation({
       history?: PendingTurnRetryEnvelope["history"] | null;
       /** Exact content from pending retry envelope (retry path). */
       content?: string | null;
+      /**
+       * CORR-PROOF-11 — opaque prior pending proposalId for explicit reinstruction.
+       * Cleared by caller after a successful send that consumed it.
+       */
+      reinstructionOfProposalId?: string | null;
+      /** Fired after a successful send that included reinstructionOfProposalId. */
+      onReinstructionConsumed?: () => void;
     },
   ) {
     const usingRetryEnvelope = Boolean(options?.turnRetryKey?.trim());
@@ -316,6 +326,10 @@ export function useProductConversation({
       turnRetryKey,
     });
     pendingRetryEnvelopeRef.current = envelope;
+    const reinstructionOfProposalId =
+      typeof options?.reinstructionOfProposalId === "string"
+        ? options.reinstructionOfProposalId.trim() || null
+        : armedReinstructionOfProposalId;

     startTransition(async () => {
       setUiState("ASSISTANT_WORKING");
@@ -329,6 +343,9 @@ export function useProductConversation({
           ...(presentedLogicalTurnId
             ? { logicalTurnId: presentedLogicalTurnId }
             : {}),
+          ...(reinstructionOfProposalId
+            ? { reinstructionOfProposalId }
+            : {}),
         });
       } catch {
         // Transport / Server Action rejection before structured response.
@@ -358,6 +375,11 @@ export function useProductConversation({
         return;
       }

+      if (reinstructionOfProposalId) {
+        setArmedReinstructionOfProposalId(null);
+        options?.onReinstructionConsumed?.();
+      }
+
       lastSendFailedRef.current = false;
       lastLogicalTurnIdRef.current = result.logicalTurnId ?? null;
       // Terminal client-observed success — clear transport retry envelope.
@@ -696,6 +718,11 @@ export function useProductConversation({
     canConfirmLegacyFixture,
     canRefreshResolvedM3Running,
     sendMessage,
+    armReinstructionOfProposalId: (proposalId: string) => {
+      const trimmed = proposalId.trim();
+      if (trimmed) setArmedReinstructionOfProposalId(trimmed);
+    },
+    armedReinstructionOfProposalId,
     decide,
     prepareResolvedM3,
     prepareLegacyFixture,
```

### FILE DIFF — `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 889411dc..e0d676f5 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -51,7 +51,13 @@ import {
   W4C_NEXT_ACTION_LEAD,
   W4C_POST_EVIDENCE_HEADING,
   W4C_PRODUCT_OUTCOME_LABELS,
+  pilotPrepareNotApplicableMessage,
+  pilotProposalOptionLabel,
 } from "@/features/project-assistant/presentationLabels";
+import {
+  PROPOSAL_SUBJECT_AMEND_REF,
+  PROPOSAL_SUBJECT_REFUSE_REF,
+} from "@/features/project-assistant/w2/proposalSubjectOptions";
 import { filterProductReservationsForDisplay } from "@/features/project-assistant/w2/w3cProductPresentation";
 import type { ExecutionContractStatus } from "@/lib/oa/execution-contract/domain/types";
 import styles from "./TrajectorySurface.module.css";
@@ -144,6 +150,7 @@ export function TrajectorySurface({
   durableRefreshSignal = 0,
   composition = "standalone",
   activeProposalId = null,
+  onRequestReformulateWithNora,
 }: {
   projectId: string;
   onDurableFactsChanged?: () => void;
@@ -161,9 +168,19 @@ export function TrajectorySurface({
    * Server resolves; client never sends objective/path/operation.
    */
   activeProposalId?: string | null;
+  /**
+   * CORR-PROOF-11 — arm explicit reinstruction + focus conversation.
+   * Called with the effective pending proposalId to supersede.
+   */
+  onRequestReformulateWithNora?: (proposalId: string) => void;
 }) {
   const [busy, setBusy] = useState<Busy>(null);
   const [error, setError] = useState<string | null>(null);
+  const [pendingReinstruction, setPendingReinstruction] = useState<{
+    readonly message: string;
+    readonly proposalIds: readonly string[];
+    readonly recoverableProposalIds: readonly string[];
+  } | null>(null);
   const [preCycleCandidate, setPreCycleCandidate] = useState<{
     trajectoryId: string;
     version: number;
@@ -256,9 +273,15 @@ export function TrajectorySurface({
   const proposeOptions = useCallback(async () => {
     setBusy("options");
     setError(null);
+    const recoverableSole =
+      pendingReinstruction?.recoverableProposalIds.length === 1
+        ? pendingReinstruction.recoverableProposalIds[0]!
+        : null;
+    const proposalIdForPropose = activeProposalId ?? recoverableSole;
+    setPendingReinstruction(null);
     const result = await w2ProposeTrajectoryOptionsAction({
       projectId,
-      proposalId: activeProposalId ?? null,
+      proposalId: proposalIdForPropose,
     });
     setBusy(null);
     if (!result.ok) {
@@ -280,25 +303,38 @@ export function TrajectorySurface({
     setProductOutcome(null);
     setPostEvidence(null);
     onDurableFactsChanged?.();
-  }, [projectId, activeProposalId, onDurableFactsChanged]);
+  }, [
+    projectId,
+    activeProposalId,
+    pendingReinstruction,
+    onDurableFactsChanged,
+  ]);

   /** CORR-PROOF-10 — rehydrate bound Proposal OptionSet from durable Epistemic. */
   const rehydrateActiveDecisionSubject = useCallback(async () => {
     const result = await w2ReadActiveDecisionSubjectAction({ projectId });
     if (!result.ok) {
       setError(result.message);
+      setPendingReinstruction(null);
       return;
     }
     if (result.kind === "bound_awaiting_decision") {
       setOptionSet(result.optionSet);
       setError(null);
+      setPendingReinstruction(null);
       return;
     }
     if (result.kind === "pending_reinstruction_required") {
       setOptionSet(null);
-      setError(result.message);
+      setPendingReinstruction({
+        message: result.message,
+        proposalIds: result.proposalIds,
+        recoverableProposalIds: result.recoverableProposalIds,
+      });
+      setError(null);
       return;
     }
+    setPendingReinstruction(null);
     // kind === "none" — leave local optionSet as-is for trajectory path
   }, [projectId]);

@@ -520,7 +556,11 @@ export function TrajectorySurface({
     });
     setBusy(null);
     if (!result.ok) {
-      setError(result.message);
+      setError(
+        result.code === "PREPARE_NOT_APPLICABLE"
+          ? pilotPrepareNotApplicableMessage()
+          : result.message,
+      );
       return;
     }
     const prepared = result.contract;
@@ -883,6 +923,64 @@ export function TrajectorySurface({
         </p>
       ) : null}

+      {pendingReinstruction ? (
+        <section
+          className={styles.block}
+          aria-labelledby="w2-pending-reinstruction-title"
+          data-testid="w2-pending-reinstruction"
+        >
+          <h3
+            id="w2-pending-reinstruction-title"
+            className={styles.blockTitle}
+          >
+            Reformulez votre demande
+          </h3>
+          <p className={styles.blockBody} data-testid="w2-pending-reinstruction-body">
+            {pendingReinstruction.message}
+          </p>
+          {pendingReinstruction.recoverableProposalIds.length > 0 ? (
+            <div className={styles.actions}>
+              <button
+                type="button"
+                className={styles.primaryAction}
+                data-testid="w2-instruct-recoverable-options"
+                onClick={() => void proposeOptions()}
+                disabled={busy !== null}
+              >
+                Instruire les options
+              </button>
+            </div>
+          ) : (
+            <div className={styles.actions}>
+              <button
+                type="button"
+                className={styles.primaryAction}
+                data-testid="w2-reformulate-with-nora"
+                onClick={() => {
+                  const targetId =
+                    pendingReinstruction.proposalIds[0] ?? "";
+                  if (targetId) onRequestReformulateWithNora?.(targetId);
+                }}
+                disabled={
+                  busy !== null ||
+                  pendingReinstruction.proposalIds.length === 0 ||
+                  !onRequestReformulateWithNora
+                }
+              >
+                Reformuler avec Nora
+              </button>
+            </div>
+          )}
+          <details data-testid="w2-technical-details">
+            <summary>Détails techniques</summary>
+            <p className={styles.blockNote}>
+              Propositions en attente :{" "}
+              {pendingReinstruction.proposalIds.join(", ") || "—"}
+            </p>
+          </details>
+        </section>
+      ) : null}
+
       {preCycleCandidate && !activeCycleInstanceId ? (
         <section
           className={styles.block}
@@ -1086,16 +1184,23 @@ export function TrajectorySurface({
               Options proposées
             </h3>
             {optionSet.proposalId ? (
-              <p
-                className={styles.blockNote}
-                data-testid="w2-decision-subject"
-              >
-                Sujet de décision : Proposal{" "}
-                <code>{optionSet.proposalId}</code>
-                {optionSet.promotesProjectTrajectory === false
-                  ? " — arbitrage sur ce sujet (pas une promotion ProjectTrajectory)."
-                  : null}
-              </p>
+              <>
+                <p
+                  className={styles.blockNote}
+                  data-testid="w2-decision-subject"
+                >
+                  Proposition à examiner
+                  {optionSet.promotesProjectTrajectory === false
+                    ? " — arbitrage sur cette proposition (pas une promotion de trajectoire projet)."
+                    : null}
+                </p>
+                <details data-testid="w2-technical-details">
+                  <summary>Détails techniques</summary>
+                  <p className={styles.blockNote}>
+                    Proposal <code>{optionSet.proposalId}</code>
+                  </p>
+                </details>
+              </>
             ) : (
               <p
                 className={styles.blockNote}
@@ -1108,7 +1213,7 @@ export function TrajectorySurface({
               {optionSet.proposedTrajectory
                 ? `${optionSet.proposedTrajectory.statusLabel} · version ${optionSet.proposedTrajectory.version} · pas encore courante`
                 : optionSet.decisionSubjectMode === "proposal"
-                  ? "Sujet Proposal — aucune ProjectTrajectory proposée (ZERO promotion)."
+                  ? "Proposition — aucune trajectoire projet proposée."
                   : "Aucune trajectoire proposée."}
             </p>
             <ul className={styles.optionList}>
@@ -1187,13 +1292,19 @@ export function TrajectorySurface({
             <span className={styles.sectionKind} data-kind="decision">
               Décision humaine
             </span>
-            Décision de trajectoire — {decision.statusLabel}
+            {optionSet?.decisionSubjectMode === "proposal" ||
+            decision.proposalId
+              ? `Votre décision — ${decision.statusLabel}`
+              : `Décision de trajectoire — ${decision.statusLabel}`}
           </h3>
           <dl className={styles.facts}>
             <div>
               <dt>Option retenue</dt>
               <dd data-testid="w2-decided-option">
-                {decision.selectedOptionRef}
+                {optionSet?.decisionSubjectMode === "proposal" ||
+                decision.proposalId
+                  ? pilotProposalOptionLabel(decision.selectedOptionRef)
+                  : decision.selectedOptionRef}
               </dd>
             </div>
             <div>
@@ -1215,6 +1326,40 @@ export function TrajectorySurface({
               </dd>
             </div>
           </dl>
+          <details data-testid="w2-technical-details">
+            <summary>Détails techniques</summary>
+            <p className={styles.blockNote}>
+              Réf. option : <code>{decision.selectedOptionRef}</code>
+              {decision.proposalId ? (
+                <>
+                  {" "}
+                  · Proposal <code>{decision.proposalId}</code>
+                </>
+              ) : null}
+            </p>
+          </details>
+          {decision.selectedOptionRef === PROPOSAL_SUBJECT_AMEND_REF ? (
+            <p
+              className={styles.blockBody}
+              data-testid="w2-amend-next-action"
+            >
+              Modifiez la proposition avec Nora, puis reformulez explicitement
+              si une nouvelle instruction est requise. Aucune préparation
+              d&apos;exécution ici.
+            </p>
+          ) : null}
+          {decision.selectedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF ? (
+            <p
+              className={styles.blockBody}
+              data-testid="w2-refuse-next-action"
+            >
+              Vous avez choisi de ne pas poursuivre cette proposition.
+              Reformulez avec Nora si vous souhaitez un nouveau sujet. Aucune
+              préparation d&apos;exécution ici.
+            </p>
+          ) : null}
+          {decision.selectedOptionRef !== PROPOSAL_SUBJECT_AMEND_REF &&
+          decision.selectedOptionRef !== PROPOSAL_SUBJECT_REFUSE_REF ? (
           <div
             className={styles.actions}
             data-testid="w3a-qualify-execution-work"
@@ -1274,6 +1419,7 @@ export function TrajectorySurface({
                 : "Préparer le contrat d'exécution"}
             </button>
           </div>
+          ) : null}
         </section>
       ) : null}

```

### FILE DIFF — `projects/sfia-studio/app/features/project-assistant/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 0690de45..d96e40e2 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -95,6 +95,11 @@ export async function projectAssistantSendAction(input: {
    * NOT Product turn identity / SFIA authority — Session-adjacent lookup only.
    */
   turnRetryKey?: string;
+  /**
+   * CORR-PROOF-11 — opaque prior pending proposalId for explicit reinstruction.
+   * Untrusted until server validates against effective pending markers.
+   */
+  reinstructionOfProposalId?: string | null;
 }): Promise<ProjectAssistantSendResult> {
   const executionContractId =
     typeof input.executionContractId === "string"
@@ -122,6 +127,10 @@ export async function projectAssistantSendAction(input: {
       claimedAuthorityLevel: input.claimedAuthorityLevel,
     });
   }
+  const reinstructionOfProposalId =
+    typeof input.reinstructionOfProposalId === "string"
+      ? input.reinstructionOfProposalId.trim() || null
+      : null;
   return orchestrateAssistantSend({
     projectId: input.projectId,
     content: input.content,
@@ -130,6 +139,7 @@ export async function projectAssistantSendAction(input: {
     sessionDbPath: input.sessionDbPath,
     logicalTurnId: input.logicalTurnId,
     turnRetryKey: input.turnRetryKey,
+    reinstructionOfProposalId,
   });
 }

```

### FILE DIFF — `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 26385e6d..49c029a1 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -25,6 +25,7 @@ import {
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
 import type {
   AssistantHistoryMessage,
+  AssistantUiMode,
   ProjectAssistantContextDto,
   ProjectAssistantSendResult,
 } from "../types";
@@ -78,6 +79,7 @@ import { getCycleTypeById, type CycleInstance } from "@/lib/oa/cycle";
 import {
   F2_PROCESS_LOCAL_NOTICE,
   createProposalId,
+  markProposalStale,
   saveProposal,
 } from "./proposalStore";
 import type {
@@ -87,7 +89,13 @@ import type {
   QualificationDto,
 } from "./types";
 import type { ExecutionIntentPayload } from "./executionIntentSchema";
-import { writePendingDecisionSubjectMarker } from "../w2/pendingDecisionSubjectMarker";
+import {
+  assertExplicitReinstructionGate,
+} from "../w2/activeProposalDecisionSubject";
+import {
+  replacePendingDecisionSubjectForExplicitReinstruction,
+  writePendingDecisionSubjectMarker,
+} from "../w2/pendingDecisionSubjectMarker";
 import {
   computeProposalSubjectDigest,
   sealProposalExecutionBasis,
@@ -96,6 +104,121 @@ import {
 const EPHEMERAL_NOTICE =
   "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.";

+function normalizeOpaqueProposalId(raw: unknown): string | null {
+  if (typeof raw !== "string") return null;
+  const trimmed = raw.trim();
+  return trimmed.length > 0 ? trimmed : null;
+}
+
+/**
+ * CORR-PROOF-11 — gate + write/replace pending decision subject for a new
+ * DECISION_REQUIRED Proposal. Ordinary turns without reinstruction never
+ * resolve existing pendings (R10).
+ */
+async function commitPendingDecisionSubjectForDecisionRequired(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly proposal: ProposalDto;
+  readonly reinstructionOfProposalId: string | null;
+  readonly mode: AssistantUiMode;
+}): Promise<
+  | { readonly ok: true }
+  | {
+      readonly ok: false;
+      readonly status: "validation_error";
+      readonly code: string;
+      readonly message: string;
+      readonly mode: AssistantUiMode;
+      readonly retryable: boolean;
+    }
+> {
+  const sealed = sealProposalExecutionBasis(input.proposal);
+  const subjectDigest = computeProposalSubjectDigest(
+    sealed,
+    input.proposal.proposalId,
+  );
+  const markerInput = {
+    oa: input.oa,
+    projectId: input.projectId,
+    proposalId: input.proposal.proposalId,
+    subjectDigest,
+    lpsId: input.proposal.contextSnapshot.lpsId,
+    lpsVersion: input.proposal.contextSnapshot.lpsVersion,
+    doctrineDigest: input.proposal.contextSnapshot.doctrineDigest,
+    correlationId: `cor:pending-subject:${input.proposal.proposalId}`,
+  };
+
+  if (input.reinstructionOfProposalId) {
+    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
+      {
+        ...markerInput,
+        oldProposalId: input.reinstructionOfProposalId,
+        newProposalId: input.proposal.proposalId,
+        correlationId: `cor:pending-subject-reinstruction:${input.reinstructionOfProposalId}:${input.proposal.proposalId}`,
+      },
+    );
+    if (!replaced.ok) {
+      markProposalStale(input.proposal.proposalId);
+      return {
+        ok: false,
+        status: "validation_error",
+        code: replaced.code,
+        message: replaced.message,
+        mode: input.mode,
+        retryable: true,
+      };
+    }
+    return { ok: true };
+  }
+
+  const marker = await writePendingDecisionSubjectMarker(markerInput);
+  if (!marker.ok) {
+    return {
+      ok: false,
+      status: "validation_error",
+      code: marker.code,
+      message: marker.message,
+      mode: input.mode,
+      retryable: true,
+    };
+  }
+  return { ok: true };
+}
+
+async function resolveExplicitReinstructionGate(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly reinstructionOfProposalId: string | null;
+  readonly mode: AssistantUiMode;
+}): Promise<
+  | { readonly ok: true; readonly reinstructionOfProposalId: string | null }
+  | {
+      readonly ok: false;
+      readonly status: "validation_error";
+      readonly code: string;
+      readonly message: string;
+      readonly mode: AssistantUiMode;
+      readonly retryable: boolean;
+    }
+> {
+  const gated = await assertExplicitReinstructionGate({
+    oa: input.oa,
+    projectId: input.projectId,
+    reinstructionOfProposalId: input.reinstructionOfProposalId,
+  });
+  if (!gated.ok) {
+    return {
+      ok: false,
+      status: "validation_error",
+      code: gated.code,
+      message: gated.message,
+      mode: input.mode,
+      retryable: true,
+    };
+  }
+  return gated;
+}
+
 async function deriveProductPathMw3Assessment(
   analysis: IntentAnalysisDto,
   projectId: string,
@@ -649,6 +772,11 @@ export async function orchestrateAssistantSend(input: {
    * Opaque client transport retry correlation (untrusted; not Product identity).
    */
   turnRetryKey?: string;
+  /**
+   * CORR-PROOF-11 — opaque prior pending proposalId for explicit reinstruction.
+   * Server-validated against effective pending markers; never trusted alone.
+   */
+  reinstructionOfProposalId?: string | null;
   /**
    * INTERNAL / EVAL-ONLY — Stage A constitutive model×effort pin.
    * Propagated to analyzeIntent + F1 cognitive path. Never a client DTO field.
@@ -665,6 +793,9 @@ export async function orchestrateAssistantSend(input: {
   campaignBudget?: NoraCampaignBudget;
 }): Promise<ProjectAssistantSendResult> {
   const content = input.content.trim();
+  const reinstructionOfProposalId = normalizeOpaqueProposalId(
+    input.reinstructionOfProposalId,
+  );
   if (!content) {
     return {
       ok: false,
@@ -1048,6 +1179,23 @@ export async function orchestrateAssistantSend(input: {

     // Pilot explicit decision required (existing morrisGateRequired seam for recordF2Decision).
     // Presentation uses Pilot wording — never "gate Morris construction" on this path.
+    const reinstructionGate = await resolveExplicitReinstructionGate({
+      oa,
+      projectId: project.projectId,
+      reinstructionOfProposalId,
+      mode: modeResolution.mode,
+    });
+    if (!reinstructionGate.ok) {
+      return {
+        ok: false,
+        status: "validation_error",
+        code: reinstructionGate.code ?? "EXPLICIT_REINSTRUCTION_REQUIRED",
+        message: reinstructionGate.message,
+        mode: modeResolution.mode,
+        retryable: reinstructionGate.retryable ?? true,
+      };
+    }
+
     const proposal = saveProposal(
       buildProposal({
         intent: analysis,
@@ -1061,49 +1209,33 @@ export async function orchestrateAssistantSend(input: {
       }),
     );

-    // CORR-PROOF-10 — durable pending subject marker before OptionSet binding.
-    // Fail closed when OA is available and marker write fails.
+    // CORR-PROOF-10/11 — durable pending subject marker (write or explicit supersession).
     {
-      const sealed = sealProposalExecutionBasis(proposal);
-      const subjectDigest = computeProposalSubjectDigest(
-        sealed,
-        proposal.proposalId,
-      );
-      const marker = await writePendingDecisionSubjectMarker({
+      const marker = await commitPendingDecisionSubjectForDecisionRequired({
         oa,
         projectId: project.projectId,
-        proposalId: proposal.proposalId,
-        subjectDigest,
-        lpsId: proposal.contextSnapshot.lpsId,
-        lpsVersion: proposal.contextSnapshot.lpsVersion,
-        doctrineDigest: proposal.contextSnapshot.doctrineDigest,
-        correlationId: `cor:pending-subject:${proposal.proposalId}`,
+        proposal,
+        reinstructionOfProposalId: reinstructionGate.reinstructionOfProposalId,
+        mode: modeResolution.mode,
       });
       if (!marker.ok) {
-        return {
-          ok: false,
-          status: "validation_error",
-          code: marker.code,
-          message: marker.message,
-          mode: modeResolution.mode,
-          retryable: true,
-        };
+        return marker;
       }
     }

     const textParts = [
-      presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
-      "Continuation gouvernée — matérialisation du livrable requis sur le cycle actif.",
-      `Cycle actif: ${activeCycle.cycleInstanceId} (${activeCycle.status}) — aucun nouveau CycleInstance.`,
-      `Profil cycle: ${qualification.recommendedProfile}.`,
-      "Proposition d'effet de matérialisation liée au cycle actif (docs_write) — NON exécutée.",
-      "RECOMMANDATION ≠ HumanDecision ≠ Execution.",
-      "DÉCISION PILOTE EXPLICITE REQUISE avant PREPARE / ExecutionContract.",
-      "AUCUNE EXÉCUTION — ZERO Attempt — ZERO Cursor REAL.",
+      presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+      "Continuation sur le cycle actif — matérialisation du livrable demandé.",
+      `Cycle actif conservé: ${activeCycle.cycleInstanceId} (${activeCycle.status}).`,
+      `Profil: ${qualification.recommendedProfile}.`,
+      "Une proposition d'écriture de document est prête à examiner — non exécutée.",
+      "Recommandation ≠ décision Pilote ≠ exécution.",
+      "Décision Pilote requise avant préparation du plan d'exécution.",
+      "Rien n'a encore été exécuté.",
       mw5.surface.disposition === "ESCALATE"
         ? mw5.text
         : mw5.surface.disclosure,
-      "Nora n'émet pas de HumanDecision, GO, Confirmation ou acte Pilote.",
+      "Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.",
     ];

     return f2ConversationalSuccess({
@@ -1334,6 +1466,28 @@ export async function orchestrateAssistantSend(input: {
     }) || mw5.surface.disposition === "ESCALATE";

   const status = morrisGateRequired ? "DECISION_REQUIRED" : "READY_NO_GATE";
+
+  let newCycleReinstructionOf: string | null = null;
+  if (status === "DECISION_REQUIRED") {
+    const reinstructionGate = await resolveExplicitReinstructionGate({
+      oa,
+      projectId: project.projectId,
+      reinstructionOfProposalId,
+      mode: modeResolution.mode,
+    });
+    if (!reinstructionGate.ok) {
+      return {
+        ok: false,
+        status: "validation_error",
+        code: reinstructionGate.code ?? "EXPLICIT_REINSTRUCTION_REQUIRED",
+        message: reinstructionGate.message,
+        mode: modeResolution.mode,
+        retryable: reinstructionGate.retryable ?? true,
+      };
+    }
+    newCycleReinstructionOf = reinstructionGate.reinstructionOfProposalId;
+  }
+
   const proposal = saveProposal(
     buildProposal({
       intent: analysis,
@@ -1346,36 +1500,21 @@ export async function orchestrateAssistantSend(input: {
   );

   if (status === "DECISION_REQUIRED") {
-    const sealed = sealProposalExecutionBasis(proposal);
-    const subjectDigest = computeProposalSubjectDigest(
-      sealed,
-      proposal.proposalId,
-    );
-    const marker = await writePendingDecisionSubjectMarker({
+    const marker = await commitPendingDecisionSubjectForDecisionRequired({
       oa,
       projectId: project.projectId,
-      proposalId: proposal.proposalId,
-      subjectDigest,
-      lpsId: proposal.contextSnapshot.lpsId,
-      lpsVersion: proposal.contextSnapshot.lpsVersion,
-      doctrineDigest: proposal.contextSnapshot.doctrineDigest,
-      correlationId: `cor:pending-subject:${proposal.proposalId}`,
+      proposal,
+      reinstructionOfProposalId: newCycleReinstructionOf,
+      mode: modeResolution.mode,
     });
     if (!marker.ok) {
-      return {
-        ok: false,
-        status: "validation_error",
-        code: marker.code,
-        message: marker.message,
-        mode: modeResolution.mode,
-        retryable: true,
-      };
+      return marker;
     }
   }

   const executionBlocked = analysis.intentClass === "execution_request";
   const textParts = [
-    presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
+    presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
     "Qualification SFIA et proposition structurée générées.",
     `Cycle: ${qualification.cycleTypeId} (${qualification.cycleLabel}).`,
     `CycleInstance candidate: ${created.cycle.cycleInstanceId} (${created.cycle.status}) — NON ACTIVE — Pilot START requis.`,
@@ -1387,17 +1526,17 @@ export async function orchestrateAssistantSend(input: {
     ...(qualification.ckcCognitiveRecommendation
       ? [qualification.ckcCognitiveRecommendation]
       : []),
-    "RECOMMANDATION ≠ décision Pilote — AUCUNE activation authority-bearing avant Pilot START.",
+    "Recommandation ≠ décision Pilote — aucune activation d'autorité avant Pilot START.",
     morrisGateRequired
-      ? "DÉCISION REQUISE — gate Morris construction (≠ Pilot lifecycle START)."
-      : "NO MORRIS CONSTRUCTION GATE REQUIRED — AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI.",
+      ? "Décision Pilote requise — gate Morris construction (≠ Pilot lifecycle START)."
+      : "Pas de gate Morris construction — AUCUNE EXÉCUTION — F2 s'arrête ici.",
     executionBlocked
       ? "Demande d'exécution détectée — AUCUNE EXÉCUTION (Cursor/PR/merge indisponibles)."
       : "AUCUNE EXÉCUTION.",
     mw5.surface.disposition === "ESCALATE"
       ? mw5.text
       : mw5.surface.disclosure,
-    "Nora n'émet pas de HumanDecision, GO, Confirmation, décision Morris ou acte Pilote.",
+    "Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.",
   ];

   return f2ConversationalSuccess({
```

### FILE DIFF — `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
index e900e92f..af73c02a 100644
--- a/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
+++ b/projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
@@ -740,6 +740,39 @@ export function scrubPiloteFacingEngineJargon(text: string): string {
  * - neutralize visible markdown emphasis markers without HTML
  * Does not alter user messages; does not use dangerouslySetInnerHTML.
  */
+/**
+ * CORR-PROOF-11 — pending Proposal subject reinstruction (Pilote-facing).
+ * Never claims process-local loss unless recoverability is known false.
+ */
+export function pilotPendingReinstructionMessage(input: {
+  recoverable: boolean;
+}): string {
+  if (input.recoverable) {
+    return "Une proposition attend encore votre instruction. Vous pouvez instruire les options sur cette proposition — ce n'est pas une perte définitive.";
+  }
+  return "Reformulez explicitement votre demande avec Nora pour remplacer la proposition en attente. Aucun fallback vers des options de trajectoire génériques.";
+}
+
+/** Pilote labels for Proposal-subject option refs (technical ref stays in details). */
+export function pilotProposalOptionLabel(
+  optionRef: string | null | undefined,
+): string {
+  switch ((optionRef ?? "").trim()) {
+    case "opt:proposal-subject:pursue":
+      return "Continuer";
+    case "opt:proposal-subject:amend":
+      return "Modifier";
+    case "opt:proposal-subject:refuse":
+      return "Ne pas poursuivre";
+    default:
+      return nonempty(optionRef) ?? "Option";
+  }
+}
+
+export function pilotPrepareNotApplicableMessage(): string {
+  return "La préparation d'exécution ne s'applique pas après une décision de modification ou de refus — poursuivez avec Nora.";
+}
+
 export function formatNoraAssistantDisplayText(text: string | null | undefined): string {
   if (!text) return "";
   let out = text;
@@ -748,6 +781,20 @@ export function formatNoraAssistantDisplayText(text: string | null | undefined):
   out = out.replace(/\\\*/g, "*");
   out = out.replace(/\[MW5[^\]]*\]/gi, "");
   out = out.replace(/\bcount=\d+\b/gi, "");
+  // Soften deterministic Nora envelope jargon (presentation only).
+  out = out.replace(
+    /\bAUCUNE EXÉCUTION\s*[—–-]\s*ZERO Attempt\s*[—–-]\s*ZERO Cursor REAL\b/gi,
+    "Rien n'a encore été exécuté.",
+  );
+  out = out.replace(/\bZERO Attempt\b/gi, "Rien n'a encore été exécuté");
+  out = out.replace(/\bZERO Cursor REAL\b/gi, "aucune exécution Cursor réelle");
+  out = out.replace(
+    /\bDÉCISION PILOTE EXPLICITE REQUISE\b/gi,
+    "Votre décision est requise",
+  );
+  out = out.replace(/\bDECISION_REQUIRED\b/g, "Votre décision est requise");
+  out = out.replace(/\bpending_reinstruction_required\b/g, "reformulation requise");
+  out = out.replace(/\bdocs_write\b/g, "écriture de document");
   // Soften markdown emphasis / headings leftovers without rendering HTML.
   out = out.replace(/\*\*([^*]+)\*\*/g, "$1");
   out = out.replace(/(^|\n)#{1,6}\s+/g, "$1");
```

### FILE DIFF — `projects/sfia-studio/app/features/project-assistant/w2/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index db241880..f0af827a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -130,6 +130,7 @@ export async function w2ReadActiveDecisionSubjectAction(input: {
       kind: "pending_reinstruction_required",
       message: read.message,
       proposalIds: read.markers.map((m) => m.proposalId),
+      recoverableProposalIds: read.recoverableProposalIds,
     };
   }
   return {
```

### FILE DIFF — `projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
index d5ea8908..e0ff2524 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
@@ -10,6 +10,8 @@
  */

 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import { listProposalsForProject } from "../f2/proposalStore";
+import { pilotPendingReinstructionMessage } from "../presentationLabels";
 import {
   listActivePendingDecisionSubjectMarkers,
   type PendingDecisionSubjectMarker,
@@ -37,6 +39,8 @@ export type ActiveProposalDecisionSubject =
       readonly ok: true;
       readonly kind: "pending_reinstruction_required";
       readonly markers: readonly PendingDecisionSubjectMarker[];
+      /** Pending proposalIds still present as DECISION_REQUIRED in process-local store. */
+      readonly recoverableProposalIds: readonly string[];
       readonly message: string;
     }
   | {
@@ -257,14 +261,87 @@ export async function readActiveProposalDecisionSubject(
   if (!pending.ok) return pending;

   if (pending.markers.length > 0) {
+    const localDecisionRequired = new Set(
+      listProposalsForProject(projectId)
+        .filter((p) => p.status === "DECISION_REQUIRED")
+        .map((p) => p.proposalId),
+    );
+    const recoverableProposalIds = pending.markers
+      .map((m) => m.proposalId)
+      .filter((id) => localDecisionRequired.has(id));
     return {
       ok: true,
       kind: "pending_reinstruction_required",
       markers: pending.markers,
-      message:
-        "Sujet décisionnel pending durable détecté après perte process-local — réinstruction Nora requise. Aucun fallback vers options de trajectoire génériques.",
+      recoverableProposalIds,
+      message: pilotPendingReinstructionMessage({
+        recoverable: recoverableProposalIds.length > 0,
+      }),
     };
   }

   return { ok: true, kind: "none" };
 }
+
+/**
+ * CORR-PROOF-11 — server gate before minting a competing DECISION_REQUIRED subject.
+ * Ordinary turns without reinstruction must not resolve pendings (R10); they must
+ * not silently write a second pending either.
+ */
+export async function assertExplicitReinstructionGate(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly reinstructionOfProposalId: string | null;
+}): Promise<
+  | { readonly ok: true; readonly reinstructionOfProposalId: string | null }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+> {
+  const effective = await listEffectivePendingDecisionSubjectMarkers(
+    input.oa,
+    input.projectId,
+  );
+  if (!effective.ok) {
+    return {
+      ok: false,
+      code: effective.code,
+      message: effective.message,
+    };
+  }
+
+  if (effective.markers.length === 0) {
+    if (input.reinstructionOfProposalId) {
+      return {
+        ok: false,
+        code: "REINSTRUCTION_SUBJECT_NOT_EFFECTIVE",
+        message:
+          "Aucune proposition en attente à remplacer — retirez la réinstruction explicite.",
+      };
+    }
+    return { ok: true, reinstructionOfProposalId: null };
+  }
+
+  if (!input.reinstructionOfProposalId) {
+    return {
+      ok: false,
+      code: "EXPLICIT_REINSTRUCTION_REQUIRED",
+      message: pilotPendingReinstructionMessage({ recoverable: false }),
+    };
+  }
+
+  const match = effective.markers.find(
+    (m) => m.proposalId === input.reinstructionOfProposalId,
+  );
+  if (!match) {
+    return {
+      ok: false,
+      code: "REINSTRUCTION_SUBJECT_NOT_EFFECTIVE",
+      message:
+        "La proposition à remplacer n'est pas un sujet pending effectif pour ce projet.",
+    };
+  }
+
+  return {
+    ok: true,
+    reinstructionOfProposalId: input.reinstructionOfProposalId,
+  };
+}
```

### FILE DIFF — `projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts b/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
index bec4ed42..7d6f0b4a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
@@ -2,6 +2,8 @@
  * CORR-PROOF-10 remediation — durable Epistemic Observation marking a
  * pending Proposal decision subject before PresentedOptionSet binding.
  *
+ * CORR-PROOF-11 — explicit reinstruction supersession (atomic resolve+write).
+ *
  * NOT a HumanDecision, NOT a durable Proposal, NOT a new table.
  * Prevents silent fallback to generic ProjectTrajectory options after
  * process-local ProposalStore loss (restart-before-binding).
@@ -9,6 +11,11 @@

 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
+import {
+  isProposalSubjectPresentedSet,
+  parsePresentedOptionSetStatement,
+  W2_PRESENTED_OPTION_SET_KIND,
+} from "./presentedOptionSet";

 export const PENDING_DECISION_SUBJECT_KIND =
   "w2_pending_decision_subject" as const;
@@ -169,12 +176,19 @@ export async function listActivePendingDecisionSubjectMarkers(
   return { ok: true, markers: out };
 }

+export type PendingDecisionSubjectResolveReason =
+  | "option_set_bound"
+  | "decided"
+  | "amended"
+  | "refused"
+  | "superseded_by_reinstruction";
+
 export async function resolvePendingDecisionSubjectMarker(
   input: {
     readonly oa: RuntimeOaStack;
     readonly projectId: string;
     readonly proposalId: string;
-    readonly reason: "option_set_bound" | "decided" | "amended" | "refused";
+    readonly reason: PendingDecisionSubjectResolveReason;
     readonly correlationId?: string;
   },
 ): Promise<
@@ -226,3 +240,182 @@ export async function resolvePendingDecisionSubjectMarker(
   }
   return { ok: true };
 }
+
+export type ReplacePendingDecisionSubjectForExplicitReinstructionInput = {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly oldProposalId: string;
+  readonly newProposalId: string;
+  readonly subjectDigest: string;
+  readonly lpsId: string;
+  readonly lpsVersion: number;
+  readonly doctrineDigest: string;
+  readonly correlationId?: string;
+};
+
+/**
+ * CORR-PROOF-11 — atomically supersede one effective pending marker with a new
+ * pending subject for explicit Nora reinstruction. Fail closed; never clears
+ * all pendings blindly; never supersedes when a bound awaiting OptionSet exists.
+ */
+export async function replacePendingDecisionSubjectForExplicitReinstruction(
+  input: ReplacePendingDecisionSubjectForExplicitReinstructionInput,
+): Promise<
+  | { readonly ok: true; readonly epistemicItemId: string }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+> {
+  const oldProposalId = input.oldProposalId.trim();
+  const newProposalId = input.newProposalId.trim();
+  if (!oldProposalId || !newProposalId || oldProposalId === newProposalId) {
+    return {
+      ok: false,
+      code: "INVALID_REINSTRUCTION_SUBJECT",
+      message:
+        "Réinstruction explicite invalide — l'ancienne et la nouvelle proposition doivent être distinctes.",
+    };
+  }
+
+  const epistemic = await input.oa.cycleServices.getEpistemicState.execute({
+    projectId: input.projectId,
+  });
+  if (!epistemic.ok) {
+    return {
+      ok: false,
+      code: "EPISTEMIC_READ_FAILED",
+      message:
+        "État épistémique illisible — supersession de sujet pending refusée. Aucune mutation.",
+    };
+  }
+
+  // Fail closed when a bound Proposal PresentedOptionSet still awaits HD.
+  const decidedRefs = new Set<string>();
+  for (const item of epistemic.state.items) {
+    if (item.type !== "DecisionRef" || item.status !== "active") continue;
+    for (const rel of item.relatedObjects ?? []) {
+      if (rel.startsWith("optset:")) decidedRefs.add(rel);
+    }
+  }
+  for (const item of epistemic.state.items) {
+    if (item.type !== "Observation" || item.status !== "active") continue;
+    const parsed = parsePresentedOptionSetStatement(item.statement);
+    if (!parsed) continue;
+    if (!isProposalSubjectPresentedSet(parsed)) continue;
+    if (parsed.kind !== W2_PRESENTED_OPTION_SET_KIND) continue;
+    if (decidedRefs.has(parsed.optionSetRef)) continue;
+    return {
+      ok: false,
+      code: "BOUND_PROPOSAL_SUBJECT_BLOCKS_REINSTRUCTION",
+      message:
+        "Un jeu d'options Proposal est déjà en attente de décision — supersession silencieuse refusée.",
+    };
+  }
+
+  const closedProposalIds = new Set<string>();
+  for (const item of epistemic.state.items) {
+    if (item.type !== "DecisionRef" || item.status !== "active") continue;
+    const related = item.relatedObjects ?? [];
+    const hasOptionSet = related.some((r) => r.startsWith("optset:"));
+    if (!hasOptionSet) continue;
+    for (const rel of related) {
+      if (rel.startsWith("prop:")) closedProposalIds.add(rel);
+    }
+  }
+
+  const activePending = await listActivePendingDecisionSubjectMarkers(
+    input.oa,
+    input.projectId,
+  );
+  if (!activePending.ok) {
+    return {
+      ok: false,
+      code: activePending.code,
+      message: activePending.message,
+    };
+  }
+  const effective = activePending.markers.filter(
+    (m) => !closedProposalIds.has(m.proposalId),
+  );
+  const oldMarker = effective.find((m) => m.proposalId === oldProposalId);
+  if (!oldMarker) {
+    return {
+      ok: false,
+      code: "REINSTRUCTION_SUBJECT_NOT_EFFECTIVE",
+      message:
+        "La proposition à remplacer n'est pas un sujet pending effectif pour ce projet.",
+    };
+  }
+
+  const oldEpistemicItemId = pendingDecisionSubjectObservationId(
+    input.projectId,
+    oldProposalId,
+  );
+  const newEpistemicItemId = pendingDecisionSubjectObservationId(
+    input.projectId,
+    newProposalId,
+  );
+  const existingOld = epistemic.state.items.find(
+    (i) => i.epistemicItemId === oldEpistemicItemId,
+  );
+  if (!existingOld || existingOld.status !== "active") {
+    return {
+      ok: false,
+      code: "REINSTRUCTION_SUBJECT_NOT_ACTIVE",
+      message:
+        "Marqueur pending à superséder introuvable ou déjà clos — aucune mutation.",
+    };
+  }
+
+  const reason = "superseded_by_reinstruction" as const;
+  const newMarker: PendingDecisionSubjectMarker = {
+    kind: PENDING_DECISION_SUBJECT_KIND,
+    proposalId: newProposalId,
+    projectId: input.projectId,
+    subjectDigest: input.subjectDigest,
+    lpsId: input.lpsId,
+    lpsVersion: input.lpsVersion,
+    doctrineDigest: input.doctrineDigest,
+    status: "pending_binding",
+  };
+
+  const written = await input.oa.cycleServices.updateEpistemicState.execute({
+    projectId: input.projectId,
+    items: [
+      {
+        epistemicItemId: oldEpistemicItemId,
+        type: "Observation",
+        statement: `${existingOld.statement}\n<!-- resolved:${reason} -->`,
+        status: "resolved",
+        source: existingOld.source,
+        relatedObjects: [
+          ...(existingOld.relatedObjects ?? []),
+          `resolved:${reason}`,
+          `superseded_by:${newProposalId}`,
+        ],
+      },
+      {
+        epistemicItemId: newEpistemicItemId,
+        type: "Observation",
+        statement: serializePendingDecisionSubjectMarker(newMarker),
+        status: "active",
+        source: newProposalId,
+        relatedObjects: [
+          input.projectId,
+          newProposalId,
+          newEpistemicItemId,
+        ],
+      },
+    ],
+    createdBy: LOCAL_PILOTE_ACTOR,
+    correlationId:
+      input.correlationId ??
+      `cor:pending-subject-reinstruction:${oldProposalId}:${newProposalId}`,
+  });
+  if (!written.ok) {
+    return {
+      ok: false,
+      code: written.error.detailCode,
+      message: `Supersession pending decision subject échouée (${written.error.detailCode}).`,
+    };
+  }
+  return { ok: true, epistemicItemId: newEpistemicItemId };
+}
```

### FILE DIFF — `projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts
index 3ad812d7..a43b537d 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveProposalDecisionSubject.ts
@@ -19,6 +19,7 @@ import {
 } from "../f2/proposalStore";
 import type { F2ContextSnapshot, ProposalDto } from "../f2/types";
 import type { ExecutionIntentPayload } from "../f2/executionIntentSchema";
+import { pilotPendingReinstructionMessage } from "../presentationLabels";
 import { listEffectivePendingDecisionSubjectMarkers } from "./activeProposalDecisionSubject";

 export type SealedProposalExecutionBasis = {
@@ -274,11 +275,13 @@ export async function assertProposalSubjectGateOrFail(input: {

   if (!provided) {
     if (pending.length > 0) {
+      const recoverable = pending.some((m) =>
+        activeLocal.some((p) => p.proposalId === m.proposalId),
+      );
       return {
         ok: false,
         code: "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
-        message:
-          "Sujet décisionnel pending durable détecté après perte process-local — réinstruction Nora requise. Aucun fallback vers options de trajectoire génériques.",
+        message: pilotPendingReinstructionMessage({ recoverable }),
       };
     }
     if (activeLocal.length > 0) {
@@ -304,8 +307,7 @@ export async function assertProposalSubjectGateOrFail(input: {
       return {
         ok: false,
         code: "PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED",
-        message:
-          "Proposal process-local absente alors qu'un marqueur pending durable existe — aucune reconstruction. Réinstruction Nora requise.",
+        message: pilotPendingReinstructionMessage({ recoverable: false }),
       };
     }
     // No effective pending — resolveProposalDecisionSubject will fail NOT_FOUND
```

### FILE DIFF — `projects/sfia-studio/app/features/project-assistant/w2/types.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index 7a4be826..f21eddff 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -219,6 +219,7 @@ export type ActiveDecisionSubjectReadResult =
       readonly kind: "pending_reinstruction_required";
       readonly message: string;
       readonly proposalIds: readonly string[];
+      readonly recoverableProposalIds: readonly string[];
     }
   | {
       readonly ok: true;
```


## NEW FILE — complete content

### `projects/sfia-studio/app/__tests__/project-assistant/corrProof11.reinstructionPilotLanguage.d0.test.ts`

```typescript
/**
 * CORR-PROOF-11 — Explicit reinstruction supersession + pilot language.
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
import {
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
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
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import {
  listActivePendingDecisionSubjectMarkers,
  replacePendingDecisionSubjectForExplicitReinstruction,
  writePendingDecisionSubjectMarker,
} from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
import {
  listEffectivePendingDecisionSubjectMarkers,
  readActiveProposalDecisionSubject,
  assertExplicitReinstructionGate,
} from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import {
  formatNoraAssistantDisplayText,
  pilotPendingReinstructionMessage,
  pilotPrepareNotApplicableMessage,
  pilotProposalOptionLabel,
} from "@/features/project-assistant/presentationLabels";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";

const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";

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
    proposalId: input.proposalId ?? `prop:f2:corr11-${Date.now()}`,
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
  });
  expect(written.ok).toBe(true);
}

describe("CORR-PROOF-11 — reinstruction + pilot language R01–R22", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("corr11.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "corr11" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
  });

  async function seed() {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "c11",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    return { ...seeded, ctx };
  }

  async function proposeWith(projectId: string, proposalId?: string | null) {
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
      proposalId: proposalId ?? null,
    });
  }

  it("R01 — first-time writePending still creates a single effective pending", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r01",
    });
    await markPending(runtime.oa!, proposal);
    const effective = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(effective.ok).toBe(true);
    if (!effective.ok) return;
    expect(effective.markers.map((m) => m.proposalId)).toEqual([
      "prop:f2:corr11-r01",
    ]);
  });

  it("R02/R07 — replacePending atomically resolves old + activates new", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const oldP = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r02-old",
    });
    await markPending(runtime.oa!, oldP);
    const newId = "prop:f2:corr11-r02-new";
    const sealed = sealProposalExecutionBasis(oldP);
    const subjectDigest = computeProposalSubjectDigest(sealed, newId);
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: oldP.proposalId,
        newProposalId: newId,
        subjectDigest,
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
      },
    );
    expect(replaced.ok).toBe(true);
    const active = await listActivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(active.ok).toBe(true);
    if (!active.ok) return;
    expect(active.markers.map((m) => m.proposalId)).toEqual([newId]);

    const epistemic = await runtime.oa!.cycleServices.getEpistemicState.execute({
      projectId,
    });
    expect(epistemic.ok).toBe(true);
    if (!epistemic.ok) return;
    const oldItem = epistemic.state.items.find((i) =>
      i.epistemicItemId.includes("corr11-r02-old"),
    );
    expect(oldItem?.status).toBe("resolved");
    expect(oldItem?.statement).toContain(
      "<!-- resolved:superseded_by_reinstruction -->",
    );
    expect(oldItem?.relatedObjects).toEqual(
      expect.arrayContaining([
        "resolved:superseded_by_reinstruction",
        `superseded_by:${newId}`,
      ]),
    );
  });

  it("R03 — replace fails when oldProposalId is not effective pending", async () => {
    const { projectId, ctx } = await seed();
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: "prop:f2:missing",
        newProposalId: "prop:f2:new",
        subjectDigest: "digest",
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
      },
    );
    expect(replaced.ok).toBe(false);
    if (replaced.ok) return;
    expect(replaced.code).toBe("REINSTRUCTION_SUBJECT_NOT_EFFECTIVE");
  });

  it("R04 — replace fails when oldProposalId equals newProposalId or empty", async () => {
    const { projectId, ctx } = await seed();
    const same = await replacePendingDecisionSubjectForExplicitReinstruction({
      oa: runtime.oa!,
      projectId,
      oldProposalId: "prop:f2:same",
      newProposalId: "prop:f2:same",
      subjectDigest: "digest",
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
    });
    expect(same.ok).toBe(false);
    if (!same.ok) expect(same.code).toBe("INVALID_REINSTRUCTION_SUBJECT");

    const empty = await replacePendingDecisionSubjectForExplicitReinstruction({
      oa: runtime.oa!,
      projectId,
      oldProposalId: "",
      newProposalId: "prop:f2:new",
      subjectDigest: "digest",
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
    });
    expect(empty.ok).toBe(false);
  });

  it("R05 — replace fails when a bound awaiting Proposal OptionSet exists", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r05",
    });
    await markPending(runtime.oa!, proposal);
    const proposed = await proposeWith(projectId, proposal.proposalId);
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: proposal.proposalId,
        newProposalId: "prop:f2:corr11-r05-new",
        subjectDigest: "digest",
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
      },
    );
    expect(replaced.ok).toBe(false);
    if (replaced.ok) return;
    expect(replaced.code).toBe("BOUND_PROPOSAL_SUBJECT_BLOCKS_REINSTRUCTION");
  });

  it("R08 — gate blocks competing DECISION_REQUIRED without explicit reinstruction", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const first = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r08-a",
    });
    await markPending(runtime.oa!, first);

    const gated = await assertExplicitReinstructionGate({
      oa: runtime.oa!,
      projectId,
      reinstructionOfProposalId: null,
    });
    expect(gated.ok).toBe(false);
    if (gated.ok) return;
    expect(gated.code).toBe("EXPLICIT_REINSTRUCTION_REQUIRED");
    expect(gated.message).not.toMatch(/pending_reinstruction_required/);
    expect(gated.message).toMatch(/Reformulez|reformul/i);

    const after = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.markers.map((m) => m.proposalId)).toEqual([
      "prop:f2:corr11-r08-a",
    ]);
  });

  it("R09/R13 — valid reinstruction supersedes matched pending only", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const a = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r09-a",
    });
    await markPending(runtime.oa!, a);
    const b = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r09-b",
    });
    await markPending(runtime.oa!, b);

    const sealed = sealProposalExecutionBasis(b);
    const newId = "prop:f2:corr11-r09-c";
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: a.proposalId,
        newProposalId: newId,
        subjectDigest: computeProposalSubjectDigest(sealed, newId),
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
      },
    );
    expect(replaced.ok).toBe(true);
    const effective = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(effective.ok).toBe(true);
    if (!effective.ok) return;
    const ids = effective.markers.map((m) => m.proposalId).sort();
    expect(ids).toEqual([newId, "prop:f2:corr11-r09-b"].sort());
  });

  it("R10 — ordinary Nora turn without reinstruction does not resolve pending", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r10",
    });
    await markPending(runtime.oa!, proposal);

    const chat = await orchestrateAssistantSend({
      projectId,
      content: "Bonjour Nora, où en est le projet ?",
    });
    expect(chat.ok).toBe(true);

    const effective = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(effective.ok).toBe(true);
    if (!effective.ok) return;
    expect(effective.markers.map((m) => m.proposalId)).toEqual([
      "prop:f2:corr11-r10",
    ]);
  });

  it("R11 — invalid reinstructionOfProposalId fails closed", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r11",
    });
    await markPending(runtime.oa!, proposal);

    const gated = await assertExplicitReinstructionGate({
      oa: runtime.oa!,
      projectId,
      reinstructionOfProposalId: "prop:f2:not-pending",
    });
    expect(gated.ok).toBe(false);
    if (gated.ok) return;
    expect(gated.code).toBe("REINSTRUCTION_SUBJECT_NOT_EFFECTIVE");
  });

  it("R12 — replace after saveProposal pattern: new subject supersedes; failure leaves old", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const old = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r12-old",
    });
    await markPending(runtime.oa!, old);

    const newProposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r12-new",
    });
    const sealed = sealProposalExecutionBasis(newProposal);
    const subjectDigest = computeProposalSubjectDigest(
      sealed,
      newProposal.proposalId,
    );
    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: old.proposalId,
        newProposalId: newProposal.proposalId,
        subjectDigest,
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
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
      newProposal.proposalId,
    ]);

    // Fail-closed path: invalid replace leaves prior pending authoritative
    const fail = await replacePendingDecisionSubjectForExplicitReinstruction({
      oa: runtime.oa!,
      projectId,
      oldProposalId: "prop:f2:ghost",
      newProposalId: "prop:f2:corr11-r12-fail",
      subjectDigest: "x",
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
    });
    expect(fail.ok).toBe(false);
    const still = await listEffectivePendingDecisionSubjectMarkers(
      runtime.oa!,
      projectId,
    );
    expect(still.ok).toBe(true);
    if (!still.ok) return;
    expect(still.markers.map((m) => m.proposalId)).toEqual([
      newProposal.proposalId,
    ]);
  });

  it("R14/R15 — recoverableProposalIds + pilot message when store intact vs lost", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r14",
    });
    await markPending(runtime.oa!, proposal);

    const recoverable = await readActiveProposalDecisionSubject(
      runtime.oa!,
      projectId,
    );
    expect(recoverable.ok).toBe(true);
    if (!recoverable.ok) return;
    expect(recoverable.kind).toBe("pending_reinstruction_required");
    if (recoverable.kind !== "pending_reinstruction_required") return;
    expect(recoverable.recoverableProposalIds).toEqual([proposal.proposalId]);
    expect(recoverable.message).toMatch(/instruire|instruction/i);
    expect(recoverable.message).not.toMatch(/perte process-local/i);

    resetF2ProposalStoreForTests();
    const lost = await readActiveProposalDecisionSubject(runtime.oa!, projectId);
    expect(lost.ok).toBe(true);
    if (!lost.ok) return;
    expect(lost.kind).toBe("pending_reinstruction_required");
    if (lost.kind !== "pending_reinstruction_required") return;
    expect(lost.recoverableProposalIds).toEqual([]);
    expect(lost.message).toMatch(/Reformulez|reformul/i);
    expect(lost.message).not.toMatch(/perte process-local/i);
  });

  it("R16 — propose gate keeps PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED code", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r16",
    });
    await markPending(runtime.oa!, proposal);
    resetF2ProposalStoreForTests();
    const proposed = await proposeWith(projectId, null);
    expect(proposed.ok).toBe(false);
    if (proposed.ok) return;
    expect(proposed.code).toBe("PENDING_DECISION_SUBJECT_REINSTRUCTION_REQUIRED");
    expect(proposed.message).toMatch(/Reformulez|reformul/i);
  });

  it("R17/R18/R19 — pursue/amend/refuse option refs and prepare applicability labels", () => {
    expect(pilotProposalOptionLabel(PROPOSAL_SUBJECT_PURSUE_REF)).toBe(
      "Continuer",
    );
    expect(pilotProposalOptionLabel(PROPOSAL_SUBJECT_AMEND_REF)).toBe(
      "Modifier",
    );
    expect(pilotProposalOptionLabel(PROPOSAL_SUBJECT_REFUSE_REF)).toBe(
      "Ne pas poursuivre",
    );
    expect(pilotPrepareNotApplicableMessage()).toMatch(/préparation/i);
  });

  it("R20/R21/R22 — presentationLabels scrub + pending messages", () => {
    expect(
      formatNoraAssistantDisplayText(
        "AUCUNE EXÉCUTION — ZERO Attempt — ZERO Cursor REAL. DECISION_REQUIRED docs_write pending_reinstruction_required",
      ),
    ).toMatch(/Rien n'a encore été exécuté/);
    expect(
      formatNoraAssistantDisplayText(
        "AUCUNE EXÉCUTION — ZERO Attempt — ZERO Cursor REAL. DECISION_REQUIRED docs_write pending_reinstruction_required",
      ),
    ).toMatch(/écriture de document/);
    expect(
      formatNoraAssistantDisplayText(
        "AUCUNE EXÉCUTION — ZERO Attempt — ZERO Cursor REAL. DECISION_REQUIRED docs_write pending_reinstruction_required",
      ),
    ).not.toMatch(/pending_reinstruction_required/);
    expect(
      formatNoraAssistantDisplayText("DÉCISION PILOTE EXPLICITE REQUISE"),
    ).toMatch(/Votre décision est requise/);

    expect(pilotPendingReinstructionMessage({ recoverable: true })).toMatch(
      /instruire|instruction/i,
    );
    expect(pilotPendingReinstructionMessage({ recoverable: false })).toMatch(
      /Reformulez|reformul/i,
    );
  });

  it("R06 — DecisionRef-closed old subject cannot be reinvented as reinstruction target", async () => {
    const { projectId, cycleInstanceId, ctx } = await seed();
    const proposal = docsWriteProposal({
      projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: cycleInstanceId,
      proposalId: "prop:f2:corr11-r06",
    });
    await markPending(runtime.oa!, proposal);
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

    const replaced = await replacePendingDecisionSubjectForExplicitReinstruction(
      {
        oa: runtime.oa!,
        projectId,
        oldProposalId: proposal.proposalId,
        newProposalId: "prop:f2:corr11-r06-new",
        subjectDigest: "digest",
        lpsId: ctx.lpsId,
        lpsVersion: ctx.lpsVersion,
        doctrineDigest: ctx.doctrineDigest,
      },
    );
    expect(replaced.ok).toBe(false);
  });
});
```
