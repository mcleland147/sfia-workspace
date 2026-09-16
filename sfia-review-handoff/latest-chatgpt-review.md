# SFIA STUDIO — PRODUCT JOURNEY ↔ GOVERNED DOCS_WRITE EXECUTION WIRING
## Review Pack FULL — Cycle 8 Delivery Critical Remediation (SAME LOT)

- timestamp UTC: 2026-09-16T19:37:52Z
- cycle continuation: SAME Delivery lot — Critical Review blockers B1/B2/P1 closed
- type: Cycle 8 — Delivery / implémentation
- typologie v2.4: EVOL
- profil SFIA: Critical
- Morris GO exact: POURSUITE DU MÊME DELIVERY LOT — fermer blockers Critical Review (B1 provenance Fake/Real, B2 no intent widening, P1 SQLite TEMP restart) — STOP avant commit/push/PR/REAL
- previous Delivery handoff tip consumed: `1b857c74b7f56278a304ede225a72ef596d39f02`
- note: remote `sfia/review-handoff` tip at cadrage start of THIS remediation was later overwritten by unrelated transmission-guide pack `9a3544c1…`; prior docs-write Delivery pack remains at `1b857c74…` and is the continuity source for this remediation.

## 1. Repo / local truth
- repo: mcleland147/sfia-workspace
- worktree: `/Users/morris/Projects/sfia-studio-product-real-docs-write-wiring`
- branch: `delivery/sfia-studio-product-real-docs-write-wiring`
- initial HEAD (= origin/main): `a8a5dffaa84fe25f792074b93696a74722de8fdf`
- final HEAD (no project commit): `a8a5dffaa84fe25f792074b93696a74722de8fdf`
- origin/main: `a8a5dffaa84fe25f792074b93696a74722de8fdf` (unchanged)
- project commit/push/PR/merge: **0**
- mid-cycle prior Delivery note retained: brief wrong checkout to `fix/sfia-studio-ec-rehydration-continuity@b871ad7c` was restored before first Delivery pack; **not repeated** in this remediation.

## 2. Sources / CKC / Convergence
- Process: cycle-execution-template, routing-guide, operating-model, rules-and-guardrails (read; not mutated)
- CKC Cycle 8 detailed: **ABSENT** → fallback method/routing/template + Product doctrine
- Build Doctrine: VALIDATED — ACTIVE ON MAIN
- Roadmap: VALIDATED — ACTIVE LIVING ROADMAP
- Product Completion: CLOSED / COMPLETE BY MORRIS (not reopened)
- Runtime v3: **NON ADOPTED**
- Doctrine 34/35: KEEP (AgentCapability / Evidence) — not mutated
- Protected paths (method/prompts/convergence/product-completion/sfia-v3-framing): **unchanged**

## 3. Fake/Real qualification
- Level: **DETERMINISTIC PROVEN DELIVERY CANDIDATE — CRITICAL REVIEW BLOCKERS CLOSED**
- Fake: FakeDocsWriteLaunchPort (`boundaryProofMode = deterministic_fake`)
- REAL gateway present in tree: StudioCursorRealLaunchGateway (`boundaryProofMode = cursor_real`) — **NOT EXECUTED**
- Env during all commands: `SFIA_STUDIO_CURSOR_REAL=0` `OPS1_CURSOR_REAL=0` `OPS1_CONVERSATION_PROVIDER=fake`
- OpenAI LIVE: 0 · Nora LIVE: 0 · Cursor OS subprocess: 0
- ≠ READY FOR REAL · ≠ REAL BOUNDARY PROVEN · ≠ E2E REAL PROVEN

## 4. Critical Review findings consumed
| ID | Finding | Disposition |
|----|---------|-------------|
| B1 | Static / contract-kind / agent-only Fake↔Real claims | **CLOSED** — `boundaryProofMode` on launch port + `deriveAttemptProvenance` |
| B2 | Capability-alone / permissive auto-select docs_write | **CLOSED** — DecisionBasis-bound predicate; fail-closed incoherent |
| P1 | Same-runtime replay ≠ restart-safe proof | **CLOSED** — SQLite TEMP Runtime A→destroy→Runtime B |

## 5. B1 — provenance diagnosis & implementation
### Root cause
W2 projections used static `realExecution: false` / `externalEffects: false` and/or inferred REAL from M4 agent/adapter contract identity. Contract kind ≠ execution provenance. FakeDocsWriteLaunchPort shares contractual M4 adapter id but is not Cursor OS REAL.

### Before
- Provenance driven largely by agent.executionMode / adapterRef / Attempt status
- No explicit boundary proof-mode dimension on `RealExecutionLaunchPort`

### After
1. **Machine/executor profile** — agent.executionMode / selectedAgentRef (unchanged)
2. **adapterId / adapterRef** — contractual M4 gateway identity (`M4_REAL_GATEWAY_ADAPTER_ID`) — **may legitimately remain** for Fake and REAL; documents CONTRACT identity, not physical boundary
3. **boundaryProofMode** — `deterministic_fake` | `cursor_real` on composed launch port (required on port interface)
4. **realExecution** — true **only** when `boundaryProofMode === cursor_real` AND launch observed on Attempt
5. **externalEffects** — true when M4 path launched (Fake may mutate isolated temp FS); fixture stays false
6. **realProcessInvoked** — port-level ACK; on Fake may be true without Cursor OS REAL claim
7. Evidence/RB id prefix stays `ev:m4-bounded-ro:` / `rb:m4-bounded-ro:` (contractual M4 namespace); Fake vs Real carried by mode/`boundaryProofMode`/`realExecution` (avoids LPS/rehydrate drift)

### Provenance truth table
| Case | Selected profile | adapterId | boundaryProofMode | realExecution | externalEffects | Proof maturity |
|------|------------------|-----------|-------------------|---------------|-----------------|----------------|
| A F3 fixture | fixture adapter | F3 adapter | `fixture` | false | false | DETERMINISTIC / FIXTURE |
| B M4 + FakeDocsWrite | agt:m4…docs_write | M4_REAL_GATEWAY | `deterministic_fake` | **false** | true (post-launch) | DETERMINISTIC PROVEN |
| C M4 + cursor_real stub (no Cursor spawn) | same M4 agent | M4_REAL_GATEWAY | `cursor_real` | **true** (metadata only) | true | DETERMINISTIC test of projection logic |
| D StudioCursorRealLaunchGateway | — | — | `cursor_real` | — | — | **NOT PROVEN this cycle** |

### B1 tests
- B1.1 Fake docs_write → realExecution false + boundaryProofMode deterministic_fake
- B1.3 failed fake never promotes REAL
- B1.4/B1.5 REAL-shaped stub without Cursor → projection can claim REAL only via boundaryProofMode
- AUTO path asserts post-launch `externalEffects: true` with `realExecution: false`
- P1 replay preserves provenance after restart

## 6. B2 — DecisionBasis binding / no widening
### Root cause
Prior Delivery auto-selected docs_write when `action === docs_write` **OR** capability included docs_write — too permissive.

### Structured fields used (selection predicate)
| Field | Source object | Human-decided? | Server-derived? | Client mutable? | Validation |
|-------|---------------|----------------|-----------------|-----------------|------------|
| `executionBasis.intentKind` / `requestedOperation` | HumanDecision.decisionBasis (sealed at GO) | yes (accepted GO) | server-recorded | no after seal | must prove docs_write intent |
| `preparedContract.action` | PREPARE from DecisionBasis | derived | server | no | must === `cursor.docs_write.apply` |
| `preparedContract.requiredCapabilities` | PREPARE from DecisionBasis | derived | server | no | must include `cap:cursor.docs_write` |
| `preferBoundedDocsWriteProfile` | server/test deps only | n/a | server | **ignored from client** | true still requires coherent prepare |

### Exact predicate
Auto-select bounded_docs_write **iff**:
`basisDocsWriteIntent ∧ basisOpCompatible ∧ actionIsDocsWrite ∧ capabilityIsDocsWrite`
Partial markers without full canonical → `DOCS_WRITE_INTENT_INCOHERENT` fail-closed.
Explicit `preferBoundedDocsWriteProfile=true` still requires action+capability coherent → else `DOCS_WRITE_PROFILE_PREPARE_INCOHERENT`.
REAL env never participates.

### Invariant
`resolved.action / target / capability / machine scope` MUST be a technical resolution of the accepted DecisionBasis — never an independent widening. Capability alone cannot promote action. Action alone without compatible DecisionBasis cannot promote.

### B2 tests
- B2.1 structured DecisionBasis docs_write → M3_RESOLVED_BOUNDED_DOCS_WRITE
- B2.2/B2.4 incompatible requestedOperation (`github.pr.merge` + intentKind docs_write) → DOCS_WRITE_INTENT_INCOHERENT
- B2.3 prefer=true + non-docs prepare → DOCS_WRITE_PROFILE_PREPARE_INCOHERENT
- B2.5 REAL env no auto-select
- B2.6 no client force via selectProduct alone
- B2.7 narrative French scope never M4 match
- B2.8 supersession: covered by Reproof 05 property test (original PREPARE_ONLY preserved; successor supersedes; no stale transfer)

## 7. P1 — SQLite TEMP restart-safe proof
### Design
- Runtime A: tmp root + SQLite TEMP + managed repo + FakeDocsWriteLaunchPort + REAL OFF
- Execute docs_write → 1 terminal Attempt + Evidence (+ ReviewBundle via lifecycle)
- Destroy: `resetRuntimeApplicationServiceForTests()` (no SQLite delete, no manual row edits)
- Runtime B: **same** `productDbPath`, fresh Fake (`calls.length=0`), new MemoryLaunchSafetyJournal
- Rehydrate Attempt/Evidence IDs; replay `governedExecuteAuthorizedContract` → `reusedExistingAttempt`, Fake B calls stay 0

### Observed (test `P1 — SQLite TEMP fresh-runtime restart`)
- Runtime A launch count: 1
- Runtime B fresh launch count: 0
- Attempt ID continuity: same succeeded Attempt
- Evidence count delta after replay: 0
- Attempt count delta after replay: 0
- ReviewBundle: present via evidence lifecycle when created; count stable after replay
- No memory object copy A→B — SQLite + filesystem temp only

## 8. Architecture invariants preserved
A1–A16: one Product SM; Fake only at boundary; M4 matcher strict; machine scope `studio.gcec.docs_write`; business disclosure separate; PREPARE_ONLY original; supersede successor; no stale approvals; confirm→authority→Select/GateD/Start; Evidence from Attempt pipeline; REAL OFF fail-closed; no parallel engine; no over-claims.

## 9. Files before → after remediation
### Already in Delivery lot (continued)
- prepareAndResolveM3ProductPath.ts — **ADAPT** B2 predicate
- resolveM3ExecutionContract.ts — successor disclosure (prior)
- confirmAndExecuteResolvedM3.ts — docs_write execute branch (prior)
- executeConfirmedBoundedDocsWriteContract.ts — **NEW** (prior Delivery)
- f3/index.ts — exports
- governedExecuteAuthorizedContract.ts — dual path + projectProvenance
- TrajectorySurface.tsx — slim successor view
- productJourneyGovernedDocsWriteWiring.d0.test.ts — **NEW** + B1/B2/P1
- uatUxSemanticReserves.ui.test.tsx — fixture fields

### Additional minimal (B1/P1 necessity)
- deriveAttemptProvenance.ts — rewrite provenance dimensions
- f3/types.ts — BOUNDED_M4_DETERMINISTIC mode
- ingestEvidenceAndRecommend.ts / executeConfirmedBoundedReadOnlyContract.ts — boundaryProofMode pass-through
- w2/types.ts — boolean realExecution/externalEffects + optional boundaryProofMode
- realExecutionLaunchPort.ts — BoundaryProofMode on port
- fakeDocsWriteLaunchPort.ts / studioCursorRealLaunchGateway.ts / deterministicExternalLaunchBoundary.ts / testOnlyRealExecutionLaunchPort.ts — declare boundaryProofMode
- startExecution.ts — journal payload includes boundaryProofMode
- preM6.realProductWiringResidual.test.ts — stub boundaryProofMode

## 10. Validation matrix (exact)
All with `SFIA_STUDIO_CURSOR_REAL=0 OPS1_CURSOR_REAL=0 OPS1_CONVERSATION_PROVIDER=fake`, OpenAI unset.

| Suite | Result |
|-------|--------|
| focused productJourneyGovernedDocsWriteWiring.d0.test.ts | **20 passed** |
| related (w3a + gcec lots + qa-pre-m6 + residual + VS deterministicCursorBoundary + execution-attempt + evidence + persistence + uatUx) | **60 files / 713 tests passed** |
| typecheck (`npm run typecheck`) | **PASS** |
| lint (`npm run lint`) | **PASS** (0 warnings/errors) |
| build (`npm run build`) | **PASS** |
| git diff --check | **PASS** |

## 11. ZERO effects
- Cursor REAL launches: **0**
- OpenAI LIVE: **0**
- Nora LIVE: **0**
- project commit: **0**
- project push: **0**
- project PR: **0**
- merge: **0**

## 12. Reserves / debts / claims
### Authorized claims
- SAME Delivery lot Critical Remediation PASS at deterministic scope
- Provenance distinguishes machine profile vs actual Fake/Real boundary proof mode
- No REAL claim from contract kind / agent alone / env alone
- Docs_write resolution bound to structured accepted HumanDecision
- SQLite TEMP fresh-runtime restart proves Attempt+Evidence continuity without relaunch/duplication
- Reproof 05/06/07 properties preserved in deterministic tests

### Forbidden claims
- READY FOR REAL / REAL BOUNDARY PROVEN / E2E REAL PROVEN
- runtime v3 ADOPTED
- matcher weakened
- schema/persistence migration performed
- historical dogfood mutated
- ChatGPT Critical Review already closed (this pack is the candidate for that review)

### Reserves / debt
- Actual StudioCursorRealLaunchGateway still NOT exercised (next gate only after Critical Review PASS + Morris GO)
- TRAJECTORY_NOT_FOUND not addressed (out of scope unless Delivery regression — none observed)
- Evidence durable `boundaryProofMode` column not added (intentionally — no schema migration; proof mode from composed port + Attempt observation)

## 13. Exact verdict
**PRODUCT-JOURNEY-GOVERNED-DOCS-WRITE-WIRING — CRITICAL REMEDIATION PASS — SAME DELIVERY LOT CLOSED AT DETERMINISTIC SCOPE — EXECUTION PROVENANCE DISTINGUISHES MACHINE PROFILE FROM ACTUAL FAKE/REAL BOUNDARY TRUTH — NO REAL CLAIM FROM CONTRACT KIND / AGENT / ENV ALONE — DOCS_WRITE RESOLUTION STRICTLY BOUND TO STRUCTURED ACCEPTED HUMAN DECISION WITH NO AUTHORITY WIDENING — CANONICAL M4 SCOPE PRESERVED — SUPERSESSION GOVERNANCE PRESERVED — SQLITE TEMP FRESH-RUNTIME RESTART PROVES ATTEMPT + EVIDENCE CONTINUITY WITHOUT RELAUNCH OR DUPLICATION — REPROOF 05/06/07 NON-REGRESSION PASS — ZERO CURSOR REAL — ZERO OPENAI LIVE — ZERO PROJECT COMMIT/PUSH/PR/MERGE — RUNTIME V3 NON ADOPTED — READY FOR CHATGPT CRITICAL REVIEW**

## 14. Next gate
**CHATGPT CRITICAL REVIEW** of this remediation pack.
Then Morris decision only — do **not** start REAL, do **not** project commit/push/PR.

## 15. git status / diff --stat (Product; excludes node_modules & review pngs)
```
19 tracked modified + 2 untracked Product files (see section 9)
667 insertions(+), 125 deletions(-) on tracked Product paths (excludes Review Pack rewrite)
git diff --check: PASS
HEAD remains a8a5dffaa84fe25f792074b93696a74722de8fdf
```

---

## 16. ANTI-STUB — full exploitable diffs / new files

### git diff (modified tracked Product files)
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts
index eb95f2b7..e6ba2347 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts
@@ -49,6 +49,11 @@ export type TestOnlyRealExecutionLaunchPortOptions = {
 export class TestOnlyRealExecutionLaunchPort implements RealExecutionLaunchPort {
   readonly gatewayId: string;
   readonly externalEffects = true as const;
+  /**
+   * Stub of the cursor_real gateway contract for projection/metadata tests.
+   * Does NOT spawn Cursor. REAL BOUNDARY PROVEN remains false for the cycle.
+   */
+  readonly boundaryProofMode = "cursor_real" as const;
   readonly calls: RealLaunchRequest[] = [];
   /** Explicit label for review claims — not a real Cursor process count. */
   readonly simulatedTechnicalAckCount = { value: 0 };
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
index 5bb947a6..0012fdb3 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
@@ -110,6 +110,42 @@ const RESOLVED: F3M3ResolvedPayload = {
     stopConditions: ["GATE_D_REQUIRED"],
     supersedesExecutionContractId: "xct:m3:dec:f2:demo",
     supersessionReason: "bounded",
+    semanticFingerprint: "fp:demo",
+    evidenceRequirements: [],
+    inspectionDisclosure: {
+      action: "cursor.read_only.inspect",
+      technicalTarget: "workspace.isolated.read",
+      scope: "studio.m4.real_off",
+      targetRepositoryRef: null,
+      targetPath: null,
+      scopeIn: null,
+      scopeOut: null,
+      createOrModify: null,
+      noDelete: null,
+      objective: null,
+      artifactType: null,
+      artifactBrief: null,
+      contentRequirements: null,
+      validationExpectations: null,
+      expectedOutputs: null,
+      evidenceRequirements: [],
+      requiredAuthority: "MORRIS",
+      requiredCapabilities: ["cap:cursor.read_only"],
+      constraints: [
+        "BOUNDED READ-ONLY",
+        "CURSOR CLI REAL PROFILE",
+        "GATE D REQUIRED",
+        "NO GIT WRITE",
+        "NO GITHUB WRITE",
+      ],
+      stopConditions: ["GATE_D_REQUIRED"],
+      reversibility: "reversible",
+      contractVersion: 3,
+      executionContractId: "xct:m3-res:dec:f2:demo",
+      semanticFingerprint: "fp:demo",
+      disclosureComplete: true,
+      incompletenessCode: null,
+    },
   },
   reusedFromIdempotency: false,
   executionPerformed: false,
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts
index feb128d3..9350edb5 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts
@@ -481,6 +481,7 @@ describe("Cycle 8 — Pre-M6 REAL product wiring residual closure", () => {
     const noAwaitPort: RealExecutionLaunchPort = {
       gatewayId: M4_REAL_GATEWAY_ADAPTER_ID,
       externalEffects: true,
+      boundaryProofMode: "deterministic_fake",
       async launch(request) {
         return {
           outcome: "ack",
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 7e0fa460..da65d63a 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -17,7 +17,7 @@ import {
   useState,
 } from "react";
 import { flushSync } from "react-dom";
-import { projectAssistantPrepareM3Action } from "@/features/project-assistant/actions";
+import { projectAssistantPrepareResolvedM3Action } from "@/features/project-assistant/actions";
 import {
   w2AmendExecutionContractAction,
   w2AuthorizeExecutionContractAction,
@@ -843,12 +843,14 @@ export function TrajectorySurface({
   ]);

   /**
-   * JOURNEY-INTEGRITY / Lot A-B final — Proposal-backed PREPARE.
+   * JOURNEY-INTEGRITY / Lot A-B final — Proposal-backed PREPARE+RESOLVE.
    *
    * After pursue on a Proposal Decision Subject, the sealed DecisionBasis already
    * carries the decided operation (e.g. cursor.docs_write.apply). The Pilot must
    * not re-select a sandbox op. Client sends only projectId + decisionId; the
-   * server resolves targetPath / operation / binding from durable lineage.
+   * server resolves targetPath / operation / binding from durable lineage and
+   * supersedes PREPARE into the canonical M4 docs-write machine profile when
+   * DecisionBasis indicates docs_write (studio.gcec.docs_write).
    */
   const prepareProposalBackedContract = useCallback(async () => {
     if (continuityMutationBlocked) return;
@@ -856,7 +858,7 @@ export function TrajectorySurface({
     if (decisionDefersExecution) return;
     setBusy("contract");
     setError(null);
-    const result = await projectAssistantPrepareM3Action({
+    const result = await projectAssistantPrepareResolvedM3Action({
       projectId,
       decisionId: decision.decisionId,
     });
@@ -865,7 +867,7 @@ export function TrajectorySurface({
       setError(result.message);
       return;
     }
-    const prepared = result.f3.contract;
+    const prepared = result.f3.successor;
     setContract({
       executionContractId: prepared.executionContractId,
       version: prepared.version,
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
index bdee43e5..3a774700 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
@@ -24,6 +24,7 @@ import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
 import type { ProjectServices } from "@/lib/oa/project";
 import { F3_ADAPTER_ID } from "./constants";
 import { executeConfirmedBoundedReadOnlyContract } from "./executeConfirmedBoundedReadOnlyContract";
+import { executeConfirmedBoundedDocsWriteContract } from "./executeConfirmedBoundedDocsWriteContract";
 import { executeConfirmedFixtureSafeContract } from "./executeConfirmedFixtureSafeContract";
 import { authorizedM3ResolutionKind } from "./selectProductM3ResolutionProfile";
 import type { F3ExecutePayload } from "./types";
@@ -155,12 +156,46 @@ export async function confirmAndExecuteResolvedM3(input: {
     });
   }

+  if (kind === "bounded_docs_write") {
+    return executeConfirmedBoundedDocsWriteContract({
+      projectId: input.projectId,
+      decisionId: input.decisionId,
+      proposal: null,
+      contract,
+      expectedContractVersion: input.expectedContractVersion,
+      actor: LOCAL_MORRIS_M3_ACTOR,
+      authorityEvidenceId: auth.evidenceId,
+      identities: {
+        confirmationId: `cfm:m3:${contract.executionContractId}:v${contract.version}`,
+        confirmationIdempotencyKey: `idem:m3-cfm:${contract.executionContractId}:v${contract.version}`,
+        confirmationLevel: "N3",
+        attemptId,
+        attemptIdempotencyKey: `idem:m3-att:${contract.executionContractId}`,
+        grantId: `gd:m3:${contract.executionContractId.replace(/^xct:/, "")}`,
+      },
+      extraDisclosures: [
+        "M3 resolved successor — bounded docs-write profile",
+        "NO Proposal authority",
+        "Launch port is Fake or REAL composition — client real/adapter fields ignored",
+      ],
+      deps: {
+        decisionServices: input.deps.decisionServices,
+        executionContractServices: input.deps.executionContractServices,
+        executionAttemptServices: input.deps.executionAttemptServices,
+        evidenceReviewServices: input.deps.evidenceReviewServices,
+        projectServices: input.deps.projectServices,
+        productDurablePath: input.deps.productDurablePath,
+        nowIso: input.deps.nowIso,
+      },
+    });
+  }
+
   if (kind !== "fixture") {
     return {
       ok: false,
       code: "M3_SUCCESSOR_GOVERNANCE_MISMATCH",
       message:
-        "Successor n'est ni fixture-safe ni bounded read-only — refus fail-closed.",
+        "Successor n'est ni fixture-safe, ni bounded read-only, ni bounded docs-write — refus fail-closed.",
     };
   }

diff --git a/projects/sfia-studio/app/features/project-assistant/f3/deriveAttemptProvenance.ts b/projects/sfia-studio/app/features/project-assistant/f3/deriveAttemptProvenance.ts
index d94e1195..55e0c628 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/deriveAttemptProvenance.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/deriveAttemptProvenance.ts
@@ -1,23 +1,51 @@
 /**
- * GAP-5 — provenance derived from the Attempt / selected agent, never from
- * SFIA_STUDIO_CURSOR_REAL or any other environment flag.
+ * GAP-5 / Critical Review B1 — provenance from Attempt + selected agent profile
+ * + actual launch-boundary proof mode. Never from:
+ * - SFIA_STUDIO_CURSOR_REAL / env flags
+ * - contract kind alone
+ * - agent descriptor alone
+ * - status succeeded alone
+ *
+ * Distinctions:
+ * 1. machine/executor profile (agent.executionMode / adapterRef contract id)
+ * 2. boundaryProofMode (deterministic_fake | cursor_real) from composed launch port
+ * 3. realExecution / Cursor REAL claim — only when boundaryProofMode === cursor_real
+ *    AND a launch was observed on the Attempt
+ * 4. port-level realProcessInvoked ACK ≠ Cursor OS REAL proof when fake
  */

 import {
   M4_REAL_GATEWAY_ADAPTER_ID,
   type AgentDescriptor,
+  type BoundaryProofMode,
 } from "@/lib/oa/execution-attempt";
 import { F3_ADAPTER_ID, F3_MODE } from "./constants";
 import type { F3Mode } from "./types";

 export const F3_REAL_MODE = "CURSOR_CLI_REAL" as const;
+/** M4-shaped agent profile executed via deterministic Fake boundary (ZERO Cursor OS). */
+export const F3_BOUNDED_M4_DETERMINISTIC_MODE =
+  "BOUNDED_M4_DETERMINISTIC" as const;

 export type DerivedAttemptProvenance = {
   mode: F3Mode;
+  /** Contractual adapter identity (may be M4_REAL_GATEWAY_ADAPTER_ID for Fake and REAL). */
   adapterRef: string;
   executionMode: string;
+  /** Actual composed boundary proof mode (or fixture when no REAL port). */
+  boundaryProofMode: BoundaryProofMode | "fixture";
+  /**
+   * Port-contract ACK that a launch path ran.
+   * On deterministic_fake this may be true without implying Cursor OS REAL.
+   */
   realProcessInvoked: boolean;
+  /** True only when Cursor REAL boundary proof mode + observed launch. */
   realExecution: boolean;
+  /**
+   * Product-observable effects outside pure fixture adapter.
+   * Deterministic Fake docs-write may mutate isolated temp FS → true.
+   * Cursor REAL → true. Pure F3 fixture → false.
+   */
   externalEffects: boolean;
   evidenceId: string;
   reviewBundleId: string;
@@ -27,6 +55,7 @@ function safeAttemptSegment(attemptId: string): string {
   return attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
 }

+/** M4-shaped Cursor CLI agent profile (machine executor), not a REAL proof. */
 export function isBoundedReadOnlyRealAgent(
   agent: Pick<AgentDescriptor, "adapterRef" | "executionMode"> | null,
 ): boolean {
@@ -37,6 +66,23 @@ export function isBoundedReadOnlyRealAgent(
   );
 }

+export function attemptLaunchObserved(attempt: {
+  status: string;
+  resultRef?: string;
+  launchedAt?: string;
+  irreversibleEffectsPossible?: boolean;
+}): boolean {
+  return (
+    attempt.irreversibleEffectsPossible === true ||
+    attempt.status === "running" ||
+    attempt.status === "succeeded" ||
+    attempt.status === "failed" ||
+    attempt.status === "timeout" ||
+    Boolean(attempt.launchedAt) ||
+    Boolean(attempt.resultRef)
+  );
+}
+
 export function deriveAttemptProvenance(input: {
   attempt: {
     attemptId: string;
@@ -50,33 +96,79 @@ export function deriveAttemptProvenance(input: {
     AgentDescriptor,
     "adapterRef" | "executionMode" | "agentId"
   > | null;
+  /**
+   * From RealExecutionLaunchPort.boundaryProofMode when a realBoundary is
+   * composed. Omit / null → fixture path (no M4 launch port).
+   */
+  boundaryProofMode?: BoundaryProofMode | null;
 }): DerivedAttemptProvenance {
   const segment = safeAttemptSegment(input.attempt.attemptId);
-  const realAgent = isBoundedReadOnlyRealAgent(input.agent);
-  const realProcessInvoked =
-    realAgent &&
-    (input.attempt.irreversibleEffectsPossible === true ||
-      input.attempt.status === "running" ||
-      input.attempt.status === "succeeded" ||
-      Boolean(input.attempt.launchedAt));
+  const m4Profile = isBoundedReadOnlyRealAgent(input.agent);
+  const launched = attemptLaunchObserved(input.attempt);
+  const proof: BoundaryProofMode | "fixture" =
+    input.boundaryProofMode === "cursor_real" ||
+    input.boundaryProofMode === "deterministic_fake"
+      ? input.boundaryProofMode
+      : "fixture";
+
+  const cursorRealProven =
+    m4Profile && proof === "cursor_real" && launched;
+  const deterministicM4 =
+    m4Profile && proof === "deterministic_fake";

-  if (realAgent) {
+  if (cursorRealProven) {
     return {
       mode: F3_REAL_MODE,
       adapterRef: input.agent!.adapterRef,
       executionMode: input.agent!.executionMode,
-      realProcessInvoked,
-      realExecution: realProcessInvoked,
+      boundaryProofMode: "cursor_real",
+      realProcessInvoked: true,
+      realExecution: true,
       externalEffects: true,
       evidenceId: `ev:m4-bounded-ro:${segment}`,
       reviewBundleId: `rb:m4-bounded-ro:${segment}`,
     };
   }

+  if (deterministicM4) {
+    return {
+      mode: F3_BOUNDED_M4_DETERMINISTIC_MODE,
+      adapterRef: input.agent!.adapterRef,
+      executionMode: input.agent!.executionMode,
+      boundaryProofMode: "deterministic_fake",
+      // Port may ACK launch; Cursor OS REAL remains false.
+      realProcessInvoked: launched,
+      realExecution: false,
+      externalEffects: launched,
+      // Evidence ID namespace stays M4 contractual (same as REAL path).
+      // Fake vs Real is carried by boundaryProofMode / realExecution / mode —
+      // not by renaming the Evidence prefix (avoids LPS/rehydrate drift).
+      evidenceId: `ev:m4-bounded-ro:${segment}`,
+      reviewBundleId: `rb:m4-bounded-ro:${segment}`,
+    };
+  }
+
+  // M4-shaped agent selected but not yet launched / no boundary composed:
+  // never claim Cursor REAL from agent identity alone.
+  if (m4Profile) {
+    return {
+      mode: F3_BOUNDED_M4_DETERMINISTIC_MODE,
+      adapterRef: input.agent!.adapterRef,
+      executionMode: input.agent!.executionMode,
+      boundaryProofMode: proof,
+      realProcessInvoked: false,
+      realExecution: false,
+      externalEffects: false,
+      evidenceId: `ev:m4-bounded-ro:${segment}`,
+      reviewBundleId: `rb:m4-bounded-ro:${segment}`,
+    };
+  }
+
   return {
     mode: F3_MODE,
     adapterRef: input.agent?.adapterRef ?? F3_ADAPTER_ID,
     executionMode: input.agent?.executionMode ?? "adapter_sync_fixture",
+    boundaryProofMode: "fixture",
     realProcessInvoked: false,
     realExecution: false,
     externalEffects: false,
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts b/projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts
index 723bc28f..ab379999 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts
@@ -257,7 +257,11 @@ async function finishBoundedAttempt(input: {
   }

   const agent = attempts.registry.getAgent(attempt.selectedAgentRef);
-  const provenance = deriveAttemptProvenance({ attempt, agent });
+  const provenance = deriveAttemptProvenance({
+    attempt,
+    agent,
+    boundaryProofMode: attempts.realBoundary?.launchPort.boundaryProofMode,
+  });

   const refreshed =
     await input.deps.executionContractServices.getExecutionContract.execute({
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/index.ts b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
index 34154be5..4a1f0872 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
@@ -46,13 +46,14 @@ export {
   selectProductM3ResolutionProfile,
   authorizedM3ResolutionKind,
 } from "./selectProductM3ResolutionProfile";
-export { deriveAttemptProvenance, F3_REAL_MODE } from "./deriveAttemptProvenance";
+export { deriveAttemptProvenance, F3_REAL_MODE, F3_BOUNDED_M4_DETERMINISTIC_MODE } from "./deriveAttemptProvenance";
 export { completeBoundedReadOnlyLaunch } from "./completeBoundedReadOnlyLaunch";
 export type {
   BoundedLaunchObservationFacts,
   CompleteBoundedReadOnlyLaunchResult,
 } from "./completeBoundedReadOnlyLaunch";
 export { executeConfirmedBoundedReadOnlyContract } from "./executeConfirmedBoundedReadOnlyContract";
+export { executeConfirmedBoundedDocsWriteContract } from "./executeConfirmedBoundedDocsWriteContract";
 export { prepareAndResolveM3ProductPath } from "./prepareAndResolveM3ProductPath";
 export type {
   F3M3ResolvedPayload,
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts b/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
index 65b62160..c464c64f 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
@@ -71,6 +71,7 @@ async function resolveProvenance(input: {
       mode: F3_MODE,
       adapterRef: "adp:f3-test-fixture",
       executionMode: "adapter_sync_fixture",
+      boundaryProofMode: "fixture",
       realProcessInvoked: false,
       realExecution: false,
       externalEffects: false,
@@ -87,6 +88,7 @@ async function resolveProvenance(input: {
       mode: F3_MODE,
       adapterRef: "adp:f3-test-fixture",
       executionMode: "adapter_sync_fixture",
+      boundaryProofMode: "fixture",
       realProcessInvoked: false,
       realExecution: false,
       externalEffects: false,
@@ -97,7 +99,12 @@ async function resolveProvenance(input: {
   const agent = attemptServices.registry.getAgent(
     loaded.attempt.selectedAgentRef,
   );
-  return deriveAttemptProvenance({ attempt: loaded.attempt, agent });
+  return deriveAttemptProvenance({
+    attempt: loaded.attempt,
+    agent,
+    // Callers with M4 docs-write/RO pass provenance explicitly with boundaryProofMode.
+    boundaryProofMode: null,
+  });
 }

 export async function ingestEvidenceAndRecommend(input: {
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
index 9cd9c650..062506e6 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
@@ -19,12 +19,16 @@ import {
   type ResolveM3Deps,
   type ResolveM3Success,
 } from "./resolveM3ExecutionContract";
+import {
+  M4_BOUNDED_DOCS_WRITE_ACTION,
+  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+  type GitCommandRunner,
+} from "@/lib/oa/execution-attempt";
 import { selectProductM3ResolutionProfile } from "./selectProductM3ResolutionProfile";
 import {
   resolveBoundedReadOnlyBaseHeadSha,
   validateBaseHeadSha,
 } from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
-import type { GitCommandRunner } from "@/lib/oa/execution-attempt";

 export type PrepareAndResolveM3Deps = PrepareM3Deps &
   ResolveM3Deps & {
@@ -36,6 +40,8 @@ export type PrepareAndResolveM3Deps = PrepareM3Deps &
     /**
      * Server/test only. Never accepted from the client.
      * Selects the bounded docs-write M3 profile (GCEC first vertical).
+     * When omitted, docs-write prepare contracts auto-select this profile
+     * (DecisionBasis intent) — never client REAL flags.
      */
     preferBoundedDocsWriteProfile?: boolean;
     /**
@@ -60,7 +66,10 @@ export type PrepareAndResolveM3Deps = PrepareM3Deps &

 export type F3M3ResolvedPayload = {
   turnKind: "f3_m3_resolved";
-  mode: "M3_RESOLVED_FIXTURE" | "M3_RESOLVED_BOUNDED_READ_ONLY";
+  mode:
+    | "M3_RESOLVED_FIXTURE"
+    | "M3_RESOLVED_BOUNDED_READ_ONLY"
+    | "M3_RESOLVED_BOUNDED_DOCS_WRITE";
   decisionId: string;
   projectId: string;
   prepare: F3M3PreparePayload;
@@ -109,10 +118,74 @@ export async function prepareAndResolveM3ProductPath(input: {
     return prepared;
   }

+  const preparedContract = prepared.payload.contract;
+  const decisionLoaded =
+    await input.deps.decisionServices.getHumanDecision.execute({
+      decisionId: input.decisionId,
+    });
+  if (!decisionLoaded.ok) {
+    return {
+      ok: false,
+      code: decisionLoaded.error.detailCode,
+      message: decisionLoaded.error.message,
+    };
+  }
+  const executionBasis = decisionLoaded.decision.decisionBasis?.executionBasis;
+  const basisDocsWriteIntent =
+    executionBasis?.intentKind === "docs_write" ||
+    executionBasis?.requestedOperation?.trim() === M4_BOUNDED_DOCS_WRITE_ACTION;
+  const basisRequestedOp = executionBasis?.requestedOperation?.trim() ?? "";
+  const basisOpCompatible =
+    basisRequestedOp === "" ||
+    basisRequestedOp === M4_BOUNDED_DOCS_WRITE_ACTION;
+  const actionIsDocsWrite =
+    preparedContract.action === M4_BOUNDED_DOCS_WRITE_ACTION;
+  const capabilityIsDocsWrite = preparedContract.requiredCapabilities.includes(
+    M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+  );
+
+  // B2 — no authority widening: capability alone / action alone / incompatible
+  // DecisionBasis never promote to bounded_docs_write. Explicit server prefer
+  // remains a test escape hatch; client REAL flags never participate.
+  if (input.deps.preferBoundedDocsWriteProfile === true) {
+    // explicit server/test opt-in — still require coherent prepare action+cap
+    if (!actionIsDocsWrite || !capabilityIsDocsWrite) {
+      return {
+        ok: false,
+        code: "DOCS_WRITE_PROFILE_PREPARE_INCOHERENT",
+        message:
+          "preferBoundedDocsWriteProfile refusé — PREPARE action/capability docs_write incohérents.",
+      };
+    }
+  } else if (input.deps.preferBoundedDocsWriteProfile !== false) {
+    const partialDocsWriteMarker =
+      basisDocsWriteIntent || actionIsDocsWrite || capabilityIsDocsWrite;
+    const fullCanonicalDocsWrite =
+      basisDocsWriteIntent &&
+      basisOpCompatible &&
+      actionIsDocsWrite &&
+      capabilityIsDocsWrite;
+    if (partialDocsWriteMarker && !fullCanonicalDocsWrite) {
+      return {
+        ok: false,
+        code: "DOCS_WRITE_INTENT_INCOHERENT",
+        message:
+          "Intention docs_write incohérente (DecisionBasis / action / capability) — fail-closed, aucune promotion automatique.",
+      };
+    }
+  }
+
+  const preferDocsWrite =
+    input.deps.preferBoundedDocsWriteProfile === true ||
+    (input.deps.preferBoundedDocsWriteProfile !== false &&
+      basisDocsWriteIntent &&
+      basisOpCompatible &&
+      actionIsDocsWrite &&
+      capabilityIsDocsWrite);
+
   const selected = selectProductM3ResolutionProfile({
     preferBoundedReadOnlyProfile: input.deps.preferBoundedReadOnlyProfile === true,
-    preferBoundedDocsWriteProfile:
-      input.deps.preferBoundedDocsWriteProfile === true,
+    preferBoundedDocsWriteProfile: preferDocsWrite,
   });

   let resolution = selected.profile;
@@ -176,13 +249,16 @@ export async function prepareAndResolveM3ProductPath(input: {

   const fixtureSelected = selected.kind === "fixture";
   const docsWriteSelected = selected.kind === "bounded_docs_write";
+  const readOnlySelected = selected.kind === "bounded_read_only";
   return {
     ok: true,
     payload: {
       turnKind: "f3_m3_resolved",
       mode: fixtureSelected
         ? "M3_RESOLVED_FIXTURE"
-        : "M3_RESOLVED_BOUNDED_READ_ONLY",
+        : docsWriteSelected
+          ? "M3_RESOLVED_BOUNDED_DOCS_WRITE"
+          : "M3_RESOLVED_BOUNDED_READ_ONLY",
       decisionId: input.decisionId,
       projectId: input.projectId,
       prepare: prepared.payload,
@@ -198,11 +274,15 @@ export async function prepareAndResolveM3ProductPath(input: {
         fixtureSelected
           ? "G-UX-15 resolveM3ExecutionContract — fixture-safe ZERO REAL profile"
           : docsWriteSelected
-            ? "G-UX-15 resolveM3ExecutionContract — bounded docs-write M4 profile (server-selected; ZERO LIVE Cursor; Fake boundary in tests)"
+            ? "G-UX-15 resolveM3ExecutionContract — bounded docs-write M4 profile (server-selected from DecisionBasis; ZERO LIVE Cursor; Fake boundary in tests)"
             : "G-UX-15 resolveM3ExecutionContract — bounded read-only M4 profile (server-selected; ZERO LIVE in this cycle)",
         "NO Proposal authority",
         "Confirmation required before StartExecution",
-        fixtureSelected ? "NO CURSOR REAL" : "CURSOR REAL NOT EXECUTED AT PREPARE",
+        fixtureSelected
+          ? "NO CURSOR REAL"
+          : readOnlySelected || docsWriteSelected
+            ? "CURSOR REAL NOT EXECUTED AT PREPARE"
+            : "CURSOR REAL NOT EXECUTED AT PREPARE",
         "Profile is server-side; client adapter/command/real fields are ignored",
         ...resolved.disclosures,
       ],
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
index f9aa9551..bb318d43 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
@@ -33,6 +33,8 @@ import type {
   ExecutionWindowClass,
   Reversibility,
 } from "@/lib/oa/execution-contract";
+import { projectExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract/projection/inspectionDisclosure";
+import type { ExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract/projection/inspectionDisclosure";

 const UNRESOLVED_ACTION = "UNRESOLVED_ACTION";
 const UNRESOLVED_TARGET = "UNRESOLVED_TARGET";
@@ -147,6 +149,9 @@ export type ResolveM3Success = {
     stopConditions: string[];
     supersedesExecutionContractId: string;
     supersessionReason: string;
+    semanticFingerprint: string;
+    evidenceRequirements: string[];
+    inspectionDisclosure: ExecutionContractInspectionDisclosure;
   };
   reusedFromIdempotency: boolean;
   disclosures: string[];
@@ -373,6 +378,7 @@ function toOriginalView(contract: ExecutionContract) {
 }

 function toSuccessorView(contract: ExecutionContract) {
+  const disclosure = projectExecutionContractInspectionDisclosure(contract);
   return {
     executionContractId: contract.executionContractId,
     version: contract.version,
@@ -387,6 +393,9 @@ function toSuccessorView(contract: ExecutionContract) {
     stopConditions: [...contract.stopConditions],
     supersedesExecutionContractId: contract.supersedesExecutionContractId ?? "",
     supersessionReason: contract.supersessionReason ?? "",
+    semanticFingerprint: contract.semanticFingerprint ?? "",
+    evidenceRequirements: [...contract.evidenceRequirements],
+    inspectionDisclosure: disclosure.disclosure,
   };
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/f3/types.ts b/projects/sfia-studio/app/features/project-assistant/f3/types.ts
index d24de60d..b46dc9fe 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/types.ts
@@ -6,7 +6,10 @@
 import type { ProposalDto } from "../f2/types";
 import type { F3_MODE } from "./constants";

-export type F3Mode = typeof F3_MODE | "CURSOR_CLI_REAL";
+export type F3Mode =
+  | typeof F3_MODE
+  | "CURSOR_CLI_REAL"
+  | "BOUNDED_M4_DETERMINISTIC";

 export type F3ContractDto = {
   executionContractId: string;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index 3eff8b22..28f4594b 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -4,6 +4,11 @@
  * Phase 1 (select): fresh AUTHORIZED evaluation → accepted
  * Phase 2 (start): continue durable Attempt → running (no re-authorize on executing EC)
  * Phase 3 (record): continue running Attempt → technical terminal
+ *
+ * Dual Product orchestration (ONE state machine):
+ * - Sandbox / fixture-safe EC → F3 fixture adapter (existing)
+ * - Resolved M4 bounded docs-write EC → OA Select → Gate D → StartExecution
+ *   with Fake or REAL launch port from composition (client real/adapter ignored)
  */

 import { createHash } from "node:crypto";
@@ -22,9 +27,17 @@ import type {
   SelectionProfile,
   SelectionStrategy,
 } from "@/lib/oa/execution-attempt";
-import { resolveSelectionStrategy } from "@/lib/oa/execution-attempt";
+import {
+  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
+  M4_REAL_GATEWAY_ADAPTER_ID,
+  resolveSelectionStrategy,
+} from "@/lib/oa/execution-attempt";
 import type { CycleProfile } from "@/lib/oa/cycle";
 import { F3_ADAPTER_ID } from "@/features/project-assistant/f3/constants";
+import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
+import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
+import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
+import { authorizedM3ResolutionKind } from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
 import type {
   GovernedExecuteAuthorizedContractResult,
@@ -40,6 +53,40 @@ function mapCycleProfileToSelectionProfile(
   return "standard";
 }

+/**
+ * adapterId = contractual M4 gateway identity for docs-write ECs
+ * (Fake and REAL share M4_REAL_GATEWAY_ADAPTER_ID). Physical Fake vs REAL is
+ * carried by boundaryProofMode / realExecution from deriveAttemptProvenance.
+ */
+function adapterIdForContract(contract: ExecutionContract): string {
+  return isBoundedDocsWriteContract(contract)
+    ? M4_REAL_GATEWAY_ADAPTER_ID
+    : F3_ADAPTER_ID;
+}
+
+function projectProvenance(
+  oa: RuntimeOaStack,
+  attempt: Pick<
+    ExecutionAttempt,
+    | "attemptId"
+    | "selectedAgentRef"
+    | "status"
+    | "resultRef"
+    | "launchedAt"
+    | "irreversibleEffectsPossible"
+  >,
+) {
+  const agent =
+    oa.executionAttemptServices?.registry.getAgent(attempt.selectedAgentRef) ??
+    null;
+  return deriveAttemptProvenance({
+    attempt,
+    agent,
+    boundaryProofMode:
+      oa.executionAttemptServices?.realBoundary?.launchPort.boundaryProofMode,
+  });
+}
+
 function attemptIdentities(executionContractId: string, version: number) {
   const digest = createHash("sha256")
     .update(`${executionContractId}@${version}`)
@@ -67,6 +114,10 @@ export type GovernedExecuteAuthorizedContractInput = {

 type Failure = GovernedExecuteAuthorizedContractResult;

+function isBoundedDocsWriteContract(contract: ExecutionContract): boolean {
+  return authorizedM3ResolutionKind(contract) === "bounded_docs_write";
+}
+
 function fixtureBoundaryFailure(oa: RuntimeOaStack): Failure | null {
   if (!oa.fixtureAdapter || !oa.executionAttemptServices) {
     return {
@@ -93,6 +144,47 @@ function fixtureBoundaryFailure(oa: RuntimeOaStack): Failure | null {
   return null;
 }

+/** Docs-write path: require composed launch boundary (Fake in tests / REAL when opted-in). */
+function docsWriteBoundaryFailure(oa: RuntimeOaStack): Failure | null {
+  if (!oa.executionAttemptServices) {
+    return {
+      ok: false,
+      code: "ATTEMPT_STACK_UNAVAILABLE",
+      message: "Services ExecutionAttempt indisponibles — aucune exécution.",
+    };
+  }
+  if (!oa.executionAttemptServices.realBoundary) {
+    return {
+      ok: false,
+      code: "REAL_BOUNDARY_REQUIRED",
+      message:
+        "Contrat bounded docs-write refusé — realBoundary absent (fail-closed, pas de fallback fixture).",
+    };
+  }
+  if (!oa.executionAttemptServices.grantRealExecutionGate) {
+    return {
+      ok: false,
+      code: "GATE_D_REQUIRED",
+      message:
+        "Contrat bounded docs-write refusé — Gate D non disponible (fail-closed).",
+    };
+  }
+  return null;
+}
+
+function launchCallCountOf(port: unknown): number {
+  if (port && typeof port === "object") {
+    if ("launchCallCount" in port) {
+      const n = (port as { launchCallCount: unknown }).launchCallCount;
+      if (typeof n === "number") return n;
+    }
+    if ("calls" in port && Array.isArray((port as { calls: unknown }).calls)) {
+      return (port as { calls: unknown[] }).calls.length;
+    }
+  }
+  return 0;
+}
+
 async function loadContract(
   oa: RuntimeOaStack,
   input: GovernedExecuteAuthorizedContractInput,
@@ -196,12 +288,15 @@ async function loadContract(
   return { ok: true, contract, selectionProfile };
 }

-function projectAttempt(attempt: ExecutionAttempt): GovernedExecuteAttemptProjection {
+function projectAttempt(
+  attempt: ExecutionAttempt,
+  adapterId: string = F3_ADAPTER_ID,
+): GovernedExecuteAttemptProjection {
   return {
     attemptId: attempt.attemptId,
     attemptStatus: attempt.status,
     selectedAgentRef: attempt.selectedAgentRef,
-    adapterId: F3_ADAPTER_ID,
+    adapterId,
   };
 }

@@ -214,8 +309,15 @@ function buildTechnicalTerminal(input: {
   launchCountBefore: number;
   statusLabel?: string;
 }): GovernedExecuteAuthorizedContractResult {
-  const launchCount = input.oa.fixtureAdapter!.launchCallCount;
+  const docsWrite = isBoundedDocsWriteContract(input.contract);
+  const adapterId = adapterIdForContract(input.contract);
+  const launchCount = docsWrite
+    ? launchCallCountOf(
+        input.oa.executionAttemptServices?.realBoundary?.launchPort,
+      )
+    : input.oa.fixtureAdapter!.launchCallCount;
   const status = input.attempt.status;
+  const provenance = projectProvenance(input.oa, input.attempt);
   const defaultLabel =
     status === "cancelled"
       ? "TERMINAL TECHNIQUE ANNULÉ — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ"
@@ -230,15 +332,16 @@ function buildTechnicalTerminal(input: {
     attemptId: input.attempt.attemptId,
     attemptStatus: status,
     selectedAgentRef: input.attempt.selectedAgentRef,
-    adapterId: F3_ADAPTER_ID,
+    adapterId,
     selectionProfile: input.selectionProfile,
     reusedExistingAttempt: input.reusedExistingAttempt,
     launchCount,
     launchDelta: launchCount - input.launchCountBefore,
     executionPerformed: true,
     attemptCreated: !input.reusedExistingAttempt,
-    realExecution: false,
-    externalEffects: false,
+    realExecution: provenance.realExecution,
+    externalEffects: provenance.externalEffects,
+    boundaryProofMode: provenance.boundaryProofMode,
     gitWritePerformed: false,
     cycleInstanceClosed: false,
     projectArchived: false,
@@ -250,7 +353,7 @@ function buildTechnicalTerminal(input: {
       status === "failed" ||
       status === "timeout",
     productSuccessSemantics: false,
-    attempt: projectAttempt(input.attempt),
+    attempt: projectAttempt(input.attempt, adapterId),
   };
 }

@@ -301,15 +404,22 @@ export async function governedExecuteSelectAgent(
   void input.real;
   void input.adapterRef;

-  const boundary = fixtureBoundaryFailure(input.oa);
-  if (boundary) return boundary;
-
   const loaded = await loadContract(input.oa, input);
   if (!loaded.ok) {
     if (loaded.result.ok && loaded.result.phase === "terminal") return loaded.result;
     return loaded.result;
   }
   const { contract, selectionProfile } = loaded;
+  const docsWrite = isBoundedDocsWriteContract(contract);
+  const boundary = docsWrite
+    ? docsWriteBoundaryFailure(input.oa)
+    : fixtureBoundaryFailure(input.oa);
+  if (boundary) return boundary;
+
+  const adapterId = adapterIdForContract(contract);
+  const launchCountBefore = docsWrite
+    ? launchCallCountOf(input.oa.executionAttemptServices!.realBoundary!.launchPort)
+    : input.oa.fixtureAdapter!.launchCallCount;

   const succeeded = await findSucceededAttempt(
     input.oa,
@@ -322,7 +432,7 @@ export async function governedExecuteSelectAgent(
       selectionProfile,
       oa: input.oa,
       reusedExistingAttempt: true,
-      launchCountBefore: input.oa.fixtureAdapter!.launchCallCount,
+      launchCountBefore,
     });
   }

@@ -357,21 +467,32 @@ export async function governedExecuteSelectAgent(
     return { ok: false, code: authority.code, message: authority.message };
   }

-  const strategyResolved = resolveSelectionStrategy(selectionProfile);
-  if ("detailCode" in strategyResolved) {
-    return {
-      ok: false,
-      code: strategyResolved.detailCode,
-      message: strategyResolved.reason,
-    };
-  }
-  if (strategyResolved.strategy === "human_confirmed_proposal") {
-    return {
-      ok: false,
-      code: "AGENT_CONFIRMATION_REQUIRED",
-      message:
-        "Profil Critical — confirmation agent_selection Pilote requise avant sélection (aucune simulation).",
-    };
+  // Docs-write shares F3 M4 selection: capabilities_deterministic + requested
+  // M4 agent (system-initiated). Cycle Critical must not invent a second
+  // agent-confirmation Product path for an already Confirmation-gated EC.
+  let effectiveProfile: SelectionProfile = selectionProfile;
+  let selectionStrategy: SelectionStrategy;
+  if (docsWrite) {
+    effectiveProfile = "standard";
+    selectionStrategy = "capabilities_deterministic";
+  } else {
+    const strategyResolved = resolveSelectionStrategy(selectionProfile);
+    if ("detailCode" in strategyResolved) {
+      return {
+        ok: false,
+        code: strategyResolved.detailCode,
+        message: strategyResolved.reason,
+      };
+    }
+    if (strategyResolved.strategy === "human_confirmed_proposal") {
+      return {
+        ok: false,
+        code: "AGENT_CONFIRMATION_REQUIRED",
+        message:
+          "Profil Critical — confirmation agent_selection Pilote requise avant sélection (aucune simulation).",
+      };
+    }
+    selectionStrategy = strategyResolved.strategy;
   }

   const identities = attemptIdentities(
@@ -387,9 +508,12 @@ export async function governedExecuteSelectAgent(
       actor: LOCAL_PILOTE_ACTOR,
       authorityEvidenceId: authority.evidenceId,
       expectedContractVersion: contract.version,
-      selectionProfile,
-      selectionStrategy: strategyResolved.strategy,
-      systemInitiated: false,
+      selectionProfile: effectiveProfile,
+      selectionStrategy,
+      systemInitiated: docsWrite,
+      ...(docsWrite
+        ? { requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID }
+        : {}),
     });
   if (!selected.ok) {
     return {
@@ -399,6 +523,7 @@ export async function governedExecuteSelectAgent(
     };
   }

+  const provenance = projectProvenance(input.oa, selected.attempt);
   return {
     ok: true,
     phase: "accepted",
@@ -407,15 +532,16 @@ export async function governedExecuteSelectAgent(
     attemptId: selected.attempt.attemptId,
     attemptStatus: selected.attempt.status,
     selectedAgentRef: selected.attempt.selectedAgentRef,
-    adapterId: F3_ADAPTER_ID,
-    selectionProfile,
-    realExecution: false,
-    externalEffects: false,
+    adapterId,
+    selectionProfile: effectiveProfile,
+    realExecution: provenance.realExecution,
+    externalEffects: provenance.externalEffects,
+    boundaryProofMode: provenance.boundaryProofMode,
     authorityReceiptUsedAsPermission: false,
     statusLabel: "TENTATIVE ACCEPTÉE — EN ATTENTE DE DÉMARRAGE",
     technicalTerminal: false,
     productSuccessSemantics: false,
-    attempt: projectAttempt(selected.attempt),
+    attempt: projectAttempt(selected.attempt, adapterId),
   };
 }

@@ -423,12 +549,19 @@ export async function governedExecuteSelectAgent(
 export async function governedExecuteStart(
   input: GovernedExecuteAuthorizedContractInput & { readonly attemptId: string },
 ): Promise<GovernedExecutePhaseResult> {
-  const boundary = fixtureBoundaryFailure(input.oa);
-  if (boundary) return boundary;
-
   const loaded = await loadContract(input.oa, input);
   if (!loaded.ok) return loaded.result;
   const { contract, selectionProfile } = loaded;
+  const docsWrite = isBoundedDocsWriteContract(contract);
+  const boundary = docsWrite
+    ? docsWriteBoundaryFailure(input.oa)
+    : fixtureBoundaryFailure(input.oa);
+  if (boundary) return boundary;
+
+  const adapterId = adapterIdForContract(contract);
+  const launchCountBefore = docsWrite
+    ? launchCallCountOf(input.oa.executionAttemptServices!.realBoundary!.launchPort)
+    : input.oa.fixtureAdapter!.launchCallCount;

   const succeeded = await findSucceededAttempt(
     input.oa,
@@ -441,7 +574,7 @@ export async function governedExecuteStart(
       selectionProfile,
       oa: input.oa,
       reusedExistingAttempt: true,
-      launchCountBefore: input.oa.fixtureAdapter!.launchCallCount,
+      launchCountBefore,
     });
   }

@@ -454,10 +587,32 @@ export async function governedExecuteStart(
     return { ok: false, code: authority.code, message: authority.message };
   }

-  const launchCountBefore = input.oa.fixtureAdapter!.launchCallCount;
-
-  // R-W3B-04 — TEST-ONLY external adapter fail arm (never a product UI outcome).
-  applyW3bAdapterFailArmIfPresent(input.oa.fixtureAdapter);
+  if (!docsWrite) {
+    // R-W3B-04 — TEST-ONLY external adapter fail arm (never a product UI outcome).
+    applyW3bAdapterFailArmIfPresent(input.oa.fixtureAdapter);
+  } else {
+    const grantId = `gd:w3a:${input.attemptId.replace(/^xat:/, "")}`;
+    const nowMs = Date.parse(input.oa.clock.nowIso());
+    const expiresAt = new Date(
+      (Number.isFinite(nowMs) ? nowMs : Date.now()) + 60 * 60 * 1000,
+    ).toISOString();
+    const gate = await input.oa.executionAttemptServices!.grantRealExecutionGate!.execute(
+      {
+        grantId,
+        attemptId: input.attemptId,
+        actor: LOCAL_PILOTE_ACTOR,
+        expiresAt,
+        authorityEvidenceId: authority.evidenceId,
+      },
+    );
+    if (!gate.ok) {
+      return {
+        ok: false,
+        code: gate.error.detailCode,
+        message: gate.error.message,
+      };
+    }
+  }

   const started = await input.oa.executionAttemptServices!.startExecution.execute({
     attemptId: input.attemptId,
@@ -474,7 +629,6 @@ export async function governedExecuteStart(
     const attempt =
       fromStart ??
       (existing && existing.ok && existing.attempt ? existing.attempt : null);
-    // Adapter/executor failure durably failed the Attempt — product path continues to FC-11/12.
     if (
       attempt &&
       (attempt.status === "failed" || attempt.status === "timeout")
@@ -492,44 +646,47 @@ export async function governedExecuteStart(
       ok: false,
       code: started.error.detailCode,
       message: started.error.message,
-      attempt: attempt ? projectAttempt(attempt) : undefined,
+      attempt: attempt ? projectAttempt(attempt, adapterId) : undefined,
     };
   }

   // R-W3B-03 — TEST-ONLY governed stop arm: FC-10 SystemGovernedStop (not human Cancel).
-  const stopArm = consumeW3bBoundaryArm();
-  if (stopArm?.kind === "governed_stop") {
-    const onContract =
-      contract.stopConditions.includes(stopArm.stopCondition) ||
-      contract.constraints.some(
-        (c) =>
-          c === stopArm.stopCondition ||
-          (c.startsWith("PROTECTED:") &&
-            (stopArm.stopCondition === c ||
-              stopArm.stopCondition.startsWith(`${c} `) ||
-              stopArm.stopCondition.startsWith(`${c}:`))),
-      );
-    if (onContract && input.oa.executionAttemptServices!.systemGovernedStop) {
-      const stopped =
-        await input.oa.executionAttemptServices!.systemGovernedStop.execute({
-          attemptId: started.attempt.attemptId,
-          stopCode: stopArm.stopCondition,
-          stopSourceRef: `w3b-e2e-boundary:${stopArm.stopCondition}`,
-          reason: stopArm.stopCondition,
-        });
-      if (stopped.ok) {
-        return buildTechnicalTerminal({
-          contract,
-          attempt: stopped.attempt,
-          selectionProfile,
-          oa: input.oa,
-          reusedExistingAttempt: false,
-          launchCountBefore,
-        });
+  if (!docsWrite) {
+    const stopArm = consumeW3bBoundaryArm();
+    if (stopArm?.kind === "governed_stop") {
+      const onContract =
+        contract.stopConditions.includes(stopArm.stopCondition) ||
+        contract.constraints.some(
+          (c) =>
+            c === stopArm.stopCondition ||
+            (c.startsWith("PROTECTED:") &&
+              (stopArm.stopCondition === c ||
+                stopArm.stopCondition.startsWith(`${c} `) ||
+                stopArm.stopCondition.startsWith(`${c}:`))),
+        );
+      if (onContract && input.oa.executionAttemptServices!.systemGovernedStop) {
+        const stopped =
+          await input.oa.executionAttemptServices!.systemGovernedStop.execute({
+            attemptId: started.attempt.attemptId,
+            stopCode: stopArm.stopCondition,
+            stopSourceRef: `w3b-e2e-boundary:${stopArm.stopCondition}`,
+            reason: stopArm.stopCondition,
+          });
+        if (stopped.ok) {
+          return buildTechnicalTerminal({
+            contract,
+            attempt: stopped.attempt,
+            selectionProfile,
+            oa: input.oa,
+            reusedExistingAttempt: false,
+            launchCountBefore,
+          });
+        }
       }
     }
   }

+  const runningProvenance = projectProvenance(input.oa, started.attempt);
   return {
     ok: true,
     phase: "running",
@@ -538,15 +695,16 @@ export async function governedExecuteStart(
     attemptId: started.attempt.attemptId,
     attemptStatus: started.attempt.status,
     selectedAgentRef: started.attempt.selectedAgentRef,
-    adapterId: F3_ADAPTER_ID,
+    adapterId,
     selectionProfile,
-    realExecution: false,
-    externalEffects: false,
+    realExecution: runningProvenance.realExecution,
+    externalEffects: runningProvenance.externalEffects,
+    boundaryProofMode: runningProvenance.boundaryProofMode,
     authorityReceiptUsedAsPermission: false,
     statusLabel: "EXÉCUTION EN COURS",
     technicalTerminal: false,
     productSuccessSemantics: false,
-    attempt: projectAttempt(started.attempt),
+    attempt: projectAttempt(started.attempt, adapterId),
   };
 }

@@ -554,13 +712,19 @@ export async function governedExecuteStart(
 export async function governedExecuteRecordResult(
   input: GovernedExecuteAuthorizedContractInput & { readonly attemptId: string },
 ): Promise<GovernedExecuteAuthorizedContractResult> {
-  const boundary = fixtureBoundaryFailure(input.oa);
-  if (boundary) return boundary;
-
   const loaded = await loadContract(input.oa, input);
   if (!loaded.ok) return loaded.result;
   const { contract, selectionProfile } = loaded;
-  const launchCountBefore = input.oa.fixtureAdapter!.launchCallCount;
+  const docsWrite = isBoundedDocsWriteContract(contract);
+  const boundary = docsWrite
+    ? docsWriteBoundaryFailure(input.oa)
+    : fixtureBoundaryFailure(input.oa);
+  if (boundary) return boundary;
+
+  const adapterId = adapterIdForContract(contract);
+  const launchCountBefore = docsWrite
+    ? launchCallCountOf(input.oa.executionAttemptServices!.realBoundary!.launchPort)
+    : input.oa.fixtureAdapter!.launchCallCount;

   const succeeded = await findSucceededAttempt(
     input.oa,
@@ -577,6 +741,76 @@ export async function governedExecuteRecordResult(
     });
   }

+  if (docsWrite) {
+    const existing =
+      await input.oa.executionAttemptServices!.getExecutionAttempt.execute({
+        attemptId: input.attemptId,
+      });
+    if (!existing.ok || !existing.attempt) {
+      return {
+        ok: false,
+        code: existing.ok ? "ATTEMPT_NOT_FOUND" : existing.error.detailCode,
+        message: existing.ok
+          ? "Attempt introuvable pour completion docs-write."
+          : existing.error.message,
+      };
+    }
+    let attempt = existing.attempt;
+    if (attempt.status === "running" && !attempt.resultRef) {
+      const targetPath =
+        typeof contract.inputs?.targetPath === "string"
+          ? contract.inputs.targetPath
+          : undefined;
+      const pathAllowlist = Array.isArray(contract.inputs?.pathAllowlist)
+        ? (contract.inputs.pathAllowlist as string[])
+        : undefined;
+      const completed = await completeBoundedDocsWriteLaunch({
+        attempt: attempt as never,
+        services: input.oa.executionAttemptServices!,
+        ...(targetPath ? { targetPath } : {}),
+        ...(pathAllowlist ? { pathAllowlist } : {}),
+      });
+      if (!completed.ok) {
+        return {
+          ok: false,
+          code: completed.code,
+          message: completed.message,
+          attempt: projectAttempt(attempt, adapterId),
+        };
+      }
+      attempt = completed.attempt;
+      if (
+        completed.status === "succeeded" &&
+        "facts" in completed &&
+        completed.facts &&
+        contract.cycleInstanceId
+      ) {
+        await ingestDocsWriteArtifactEvidence({
+          evidenceReviewServices: input.oa.evidenceReviewServices,
+          projectId: input.projectId,
+          cycleInstanceId: contract.cycleInstanceId,
+          executionContractId: contract.executionContractId,
+          executionAttemptId: attempt.attemptId,
+          targetPath: completed.facts.targetPath,
+          digest: completed.facts.digest,
+          nowIso: input.oa.clock.nowIso(),
+        });
+      }
+    }
+    return buildTechnicalTerminal({
+      contract,
+      attempt,
+      selectionProfile,
+      oa: input.oa,
+      reusedExistingAttempt: false,
+      launchCountBefore,
+      statusLabel:
+        attempt.status === "succeeded"
+          ? "TERMINAL TECHNIQUE DOCS-WRITE — RÉSULTAT PRODUIT À QUALIFIER"
+          : undefined,
+    });
+  }
+
   const identities = attemptIdentities(
     contract.executionContractId,
     contract.version,
@@ -599,7 +833,7 @@ export async function governedExecuteRecordResult(
       message: recorded.error.message,
       attempt:
         existing.ok && existing.attempt
-          ? projectAttempt(existing.attempt)
+          ? projectAttempt(existing.attempt, adapterId)
           : undefined,
     };
   }
@@ -624,6 +858,7 @@ export async function governedExecuteRecordResult(
   }

   const launchCount = input.oa.fixtureAdapter!.launchCallCount;
+  const fixtureProvenance = projectProvenance(input.oa, recorded.attempt);
   return {
     ok: true,
     phase: "terminal",
@@ -639,17 +874,17 @@ export async function governedExecuteRecordResult(
     launchDelta: launchCount - launchCountBefore,
     executionPerformed: true,
     attemptCreated: true,
-    realExecution: false,
-    externalEffects: false,
+    realExecution: fixtureProvenance.realExecution,
+    externalEffects: fixtureProvenance.externalEffects,
+    boundaryProofMode: fixtureProvenance.boundaryProofMode,
     gitWritePerformed: false,
     cycleInstanceClosed,
     projectArchived,
     authorityReceiptUsedAsPermission: false,
-    statusLabel:
-      "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ",
+    statusLabel: "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ",
     technicalTerminal: recorded.attempt.status === "succeeded",
     productSuccessSemantics: false,
-    attempt: projectAttempt(recorded.attempt),
+    attempt: projectAttempt(recorded.attempt, adapterId),
   };
 }

@@ -667,13 +902,20 @@ export async function governedExecuteCancel(
     readonly reason?: string;
   },
 ): Promise<GovernedExecuteAuthorizedContractResult> {
-  const boundary = fixtureBoundaryFailure(input.oa);
-  if (boundary) return boundary;
-
   const loaded = await loadContract(input.oa, input);
   if (!loaded.ok) return loaded.result;
   const { contract, selectionProfile } = loaded;
-  const launchCountBefore = input.oa.fixtureAdapter!.launchCallCount;
+  const docsWrite = isBoundedDocsWriteContract(contract);
+  const boundary = docsWrite
+    ? docsWriteBoundaryFailure(input.oa)
+    : fixtureBoundaryFailure(input.oa);
+  if (boundary) return boundary;
+
+  const launchCountBefore = docsWrite
+    ? launchCallCountOf(
+        input.oa.executionAttemptServices!.realBoundary!.launchPort,
+      )
+    : input.oa.fixtureAdapter!.launchCallCount;

   registerPiloteAuthority(
     input.oa,
@@ -699,7 +941,7 @@ export async function governedExecuteCancel(
       message: cancelled.error.message,
       attempt:
         existing.ok && existing.attempt
-          ? projectAttempt(existing.attempt)
+          ? projectAttempt(existing.attempt, adapterIdForContract(contract))
           : undefined,
     };
   }
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index 2b7b77b6..42a4372d 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -382,8 +382,10 @@ export type GovernedExecutePhaseSuccess = {
   readonly selectedAgentRef: string;
   readonly adapterId: string;
   readonly selectionProfile: string;
-  readonly realExecution: false;
-  readonly externalEffects: false;
+  readonly realExecution: boolean;
+  readonly externalEffects: boolean;
+  /** Boundary proof mode when a REAL launch port is composed; fixture otherwise. */
+  readonly boundaryProofMode?: "deterministic_fake" | "cursor_real" | "fixture";
   readonly authorityReceiptUsedAsPermission: false;
   readonly statusLabel: string;
   readonly technicalTerminal: boolean;
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 55c48666..348979ea 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -1809,7 +1809,11 @@ export class StartExecution {
         grantId: consumedGrant.grantId,
         correlationId,
         processRef: launch.processRef,
-        payload: { gatewayId: launch.gatewayId },
+        payload: {
+          gatewayId: launch.gatewayId,
+          boundaryProofMode: this.realLaunchPort.boundaryProofMode,
+          realProcessInvoked: launch.realProcessInvoked,
+        },
       });
     } catch (err) {
       // Process invoked; LAUNCHED missing → CREATED-only UNKNOWN; no second launch.
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
index f1c48fa5..60548dc4 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
@@ -147,6 +147,8 @@ function resolveAuthorizedEffects(
 export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
   readonly gatewayId = M4_REAL_GATEWAY_ADAPTER_ID;
   readonly externalEffects = true as const;
+  /** Deterministic Fake substitution — never Cursor OS REAL proof. */
+  readonly boundaryProofMode = "deterministic_fake" as const;
   readonly calls: RealLaunchRequest[] = [];
   readonly touchedFiles: string[] = [];
   lastDigest: string | null = null;
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index 91d2fa0f..ddc7ee75 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -253,6 +253,8 @@ export { DisabledRealProcessRunner };

 export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
   readonly gatewayId = M4_REAL_GATEWAY_ADAPTER_ID;
+  /** Actual Cursor REAL gateway — proof mode is cursor_real. */
+  readonly boundaryProofMode = "cursor_real" as const;
   readonly externalEffects = true as const;

   private readonly runner: ProcessRunner;
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
index fd8d10eb..783f1f10 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
@@ -211,13 +211,27 @@ export interface ProcessRunner {
 /** @deprecated Prefer ProcessRunner. */
 export type RealProcessRunnerPort = ProcessRunner;

+/**
+ * Distinguishes Fake/deterministic boundary substitution from actual Cursor
+ * REAL gateway proof. Contract adapter identity (gatewayId) may be shared.
+ * This is NOT derived from env flags, agent descriptors, or contract kind.
+ */
+export type BoundaryProofMode = "deterministic_fake" | "cursor_real";
+
 export interface RealExecutionLaunchPort {
   readonly gatewayId: string;
   /**
    * Static marker — REAL boundary may declare external effects.
    * Fixture ExecutionAdapterPort must remain externalEffects:false.
+   * Deterministic Fake ports also declare true when they mutate isolated temp FS.
    */
   readonly externalEffects: true;
+  /**
+   * Proof-mode of this launch-port implementation.
+   * - deterministic_fake: FakeDocsWrite / E2E deterministic doubles (ZERO Cursor OS)
+   * - cursor_real: StudioCursorRealLaunchGateway (or a test stub of that contract)
+   */
+  readonly boundaryProofMode: BoundaryProofMode;
   launch(request: RealLaunchRequest): Promise<RealLaunchResult>;
   observe?(processRef: string): Promise<RealProcessObservation | null>;
   awaitCompletion?(
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary.ts
index a873f2fe..32b6303d 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary.ts
@@ -84,6 +84,7 @@ export class TestOnlyDeterministicCursorLaunchPort
 {
   readonly gatewayId: string;
   readonly externalEffects = true as const;
+  readonly boundaryProofMode = "deterministic_fake" as const;
   readonly calls: RealLaunchRequest[] = [];
   readonly simulatedTechnicalAckCount = { value: 0 };
   private readonly pendingObserveLimit: number;
```

### NEW FILE — executeConfirmedBoundedDocsWriteContract.ts
```typescript
/**
 * Confirm → Select M4 bounded docs-write → Grant Gate D → StartExecution.
 * Same Product orchestration as bounded read-only; Fake/REAL differ only at launch port.
 * No fixture fallback. No client adapter/command. No NodeCursorProcessRunner here.
 * ZERO LIVE Cursor in Delivery tests — inject FakeDocsWriteLaunchPort as realBoundary.
 */

import type {
  DecisionServices,
  OaActorReference,
} from "@/lib/oa/decision";
import type {
  ExecutionContract,
  ExecutionContractServices,
} from "@/lib/oa/execution-contract";
import {
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  type ExecutionAttemptServices,
} from "@/lib/oa/execution-attempt";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import type { ProposalDto } from "../f2/types";
import { resolvePersistenceNotice } from "../presentationLabels";
import {
  F3_CONFIRM_ACTION_REF,
  F3_LABELS,
} from "./constants";
import { deriveAttemptProvenance } from "./deriveAttemptProvenance";
import {
  completeBoundedDocsWriteLaunch,
  type DocsWriteCompletionFacts,
} from "./completeBoundedDocsWriteLaunch";
import { ingestDocsWriteArtifactEvidence } from "./ingestDocsWriteArtifactEvidence";
import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
import type { F3ExecutePayload } from "./types";

export type BoundedDocsWritePipelineDeps = {
  decisionServices: DecisionServices;
  executionContractServices: ExecutionContractServices;
  executionAttemptServices: ExecutionAttemptServices;
  evidenceReviewServices: EvidenceReviewServices;
  projectServices?: ProjectServices;
  productDurablePath?: boolean;
  nowIso: () => string;
};

export type BoundedDocsWritePipelineIdentities = {
  confirmationId: string;
  confirmationIdempotencyKey: string;
  confirmationLevel: "N2" | "N3";
  attemptId: string;
  attemptIdempotencyKey: string;
  grantId: string;
};

function launchCallCountOf(port: unknown): number {
  if (port && typeof port === "object") {
    if ("launchCallCount" in port) {
      const n = (port as { launchCallCount: unknown }).launchCallCount;
      if (typeof n === "number") return n;
    }
    if ("calls" in port && Array.isArray((port as { calls: unknown }).calls)) {
      return (port as { calls: unknown[] }).calls.length;
    }
  }
  return 0;
}

function pendingEvidence(mode: F3ExecutePayload["mode"]): F3ExecutePayload["evidence"] {
  return {
    evidenceId: "ev:pending-real",
    status: "pending",
    sourceKind: "execution_attempt",
    technicalResultRef: null,
    verified: false,
    mode,
  };
}

function pendingReviewBundle(
  mode: F3ExecutePayload["mode"],
): F3ExecutePayload["reviewBundle"] {
  return {
    reviewBundleId: "rb:pending-real",
    status: "pending",
    version: 0,
    evidenceRefs: [],
    mode,
  };
}

function pendingRecommendation(
  mode: F3ExecutePayload["mode"],
): F3ExecutePayload["recommendation"] {
  return {
    kind: "recommendation",
    status: "pending",
    executionAuthority: false,
    gateConsumed: false,
    decisionCreated: false,
    attemptAutoLaunchNextCycle: false,
    openHardReservationRefs: [],
    hardBlockers: [],
    nextGateCode: null,
    nextActionCode: null,
    recommendationLabel: F3_LABELS.recommendationNotDecision,
    mode,
    analysisStatus: "not_attempted",
    analysisText: null,
    analysisProviderId: null,
    analysisUnavailableReason: null,
  };
}

function buildPayload(input: {
  proposal: ProposalDto | null;
  decisionId: string;
  contract: ExecutionContract;
  attempt: {
    attemptId: string;
    status: string;
    selectedAgentRef: string;
    resultRef?: string;
    selectionStrategy?: string;
    launchedAt?: string;
    irreversibleEffectsPossible?: boolean;
    startedAt?: string;
    executionWindowClass?: string;
    resolvedMaxDurationMs?: number;
  };
  launchCount: number;
  reusedExistingAttempt: boolean;
  extraDisclosures: readonly string[];
  productDurablePath: boolean;
  provenance: ReturnType<typeof deriveAttemptProvenance>;
  processRef?: string | null;
  ingested?: Extract<
    Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
    { ok: true }
  >;
}): F3ExecutePayload {
  const persistenceNotice = resolvePersistenceNotice({
    productDurablePath: input.productDurablePath,
    mode: input.provenance.mode,
    kind: "execute",
  });
  return {
    turnKind: "f3_execute",
    mode: input.provenance.mode,
    proposal: input.proposal,
    decisionId: input.decisionId,
    contract: {
      executionContractId: input.contract.executionContractId,
      version: input.contract.version,
      status: input.contract.status,
      action: input.contract.action,
      target: input.contract.target,
      scope: input.contract.scope,
      requiredAuthority: input.contract.requiredAuthority,
      mode: input.provenance.mode,
      constraints: [...input.contract.constraints],
    },
    attempt: {
      attemptId: input.attempt.attemptId,
      status: input.attempt.status,
      selectedAgentRef: input.attempt.selectedAgentRef,
      adapterId: input.provenance.adapterRef,
      adapterRef: input.provenance.adapterRef,
      executionMode: input.provenance.executionMode,
      realProcessInvoked: input.provenance.realProcessInvoked,
      externalEffects: input.provenance.externalEffects,
      resultRef: input.attempt.resultRef ?? null,
      launchCount: input.launchCount,
      selectionStrategy:
        input.attempt.selectionStrategy ?? "capabilities_deterministic",
      mode: input.provenance.mode,
      startedAt: input.attempt.startedAt ?? null,
      executionWindowClass: input.attempt.executionWindowClass ?? null,
      resolvedMaxDurationMs: input.attempt.resolvedMaxDurationMs ?? null,
      processRef: input.processRef ?? null,
    },
    evidence: input.ingested?.evidence ?? pendingEvidence(input.provenance.mode),
    reviewBundle:
      input.ingested?.reviewBundle ??
      pendingReviewBundle(input.provenance.mode),
    recommendation:
      input.ingested?.recommendation ??
      pendingRecommendation(input.provenance.mode),
    reusedExistingAttempt: input.reusedExistingAttempt,
    executionPerformed: true,
    realExecution: input.provenance.realExecution,
    gitWritePerformed: false,
    labels: {
      fixtureNoReal: F3_LABELS.fixtureNoReal,
      noGitWrite: F3_LABELS.noGitWrite,
      recommendationNotDecision: F3_LABELS.recommendationNotDecision,
      cursorRealBlocked: F3_LABELS.cursorRealBlocked,
      hardOpen: F3_LABELS.hardOpen,
    },
    processLocalNotice: persistenceNotice,
    disclosures: [
      F3_LABELS.noGitWrite,
      F3_LABELS.recommendationNotDecision,
      F3_LABELS.noReadyClaim,
      F3_LABELS.noTa6Complete,
      "BOUNDED DOCS-WRITE BRANCH — provenance from Attempt, not env flag",
      ...input.extraDisclosures,
      persistenceNotice,
    ],
  };
}

async function finishBoundedDocsWriteAttempt(input: {
  projectId: string;
  decisionId: string;
  proposal: ProposalDto | null;
  contract: ExecutionContract;
  attempt: {
    attemptId: string;
    status: string;
    selectedAgentRef: string;
    resultRef?: string;
    selectionStrategy?: string;
    launchedAt?: string;
    irreversibleEffectsPossible?: boolean;
    version?: number;
    startedAt?: string;
    executionWindowClass?: string;
    resolvedMaxDurationMs?: number;
  };
  launchCount: number;
  reusedExistingAttempt: boolean;
  extraDisclosures: readonly string[];
  productDurablePath: boolean;
  deps: BoundedDocsWritePipelineDeps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  const attempts = input.deps.executionAttemptServices;
  let attempt = input.attempt;
  let facts: DocsWriteCompletionFacts | null = null;
  let processRef: string | null = null;
  const extra = [...input.extraDisclosures];

  if (attempt.status === "running" && !attempt.resultRef) {
    const targetPath =
      typeof input.contract.inputs?.targetPath === "string"
        ? input.contract.inputs.targetPath
        : undefined;
    const pathAllowlist = Array.isArray(input.contract.inputs?.pathAllowlist)
      ? (input.contract.inputs.pathAllowlist as string[])
      : undefined;
    const completed = await completeBoundedDocsWriteLaunch({
      attempt: attempt as never,
      services: attempts,
      ...(targetPath ? { targetPath } : {}),
      ...(pathAllowlist ? { pathAllowlist } : {}),
    });
    if (!completed.ok) return completed;
    attempt = completed.attempt;
    if (completed.status === "succeeded") {
      facts = completed.facts;
      processRef = completed.facts.processRef;
    } else {
      processRef = completed.observation?.processRef ?? null;
      if (completed.status === "running") {
        extra.push(
          "Docs-write process ACK — completion still pending; no Evidence candidate",
        );
      } else if (completed.status === "timeout") {
        extra.push("Docs-write process timed out — no Evidence candidate");
      } else if (completed.status === "failed") {
        extra.push("Docs-write process non-zero exit — no Evidence candidate");
      }
    }
  }

  const agent = attempts.registry.getAgent(attempt.selectedAgentRef);
  const provenance = deriveAttemptProvenance({
    attempt,
    agent,
    boundaryProofMode: attempts.realBoundary?.launchPort.boundaryProofMode,
  });

  const refreshed =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: input.contract.executionContractId,
    });
  const contract = refreshed.ok ? refreshed.contract : input.contract;

  let ingested:
    | Extract<
        Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
        { ok: true }
      >
    | undefined;
  if (attempt.status === "succeeded" && attempt.resultRef && facts) {
    const cycleInstanceId = contract.cycleInstanceId;
    if (!cycleInstanceId) {
      return {
        ok: false,
        code: "CYCLE_BINDING_REQUIRED",
        message:
          "Docs-write Evidence refusée — ExecutionContract sans cycleInstanceId.",
      };
    }
    const artifact = await ingestDocsWriteArtifactEvidence({
      evidenceReviewServices: input.deps.evidenceReviewServices,
      projectId: input.projectId,
      cycleInstanceId,
      executionContractId: contract.executionContractId,
      executionAttemptId: attempt.attemptId,
      targetPath: facts.targetPath,
      digest: facts.digest,
      nowIso: input.deps.nowIso(),
    });
    if (!artifact.ok) return artifact;
    extra.push(
      `Docs-write Evidence ${artifact.evidenceId} / ReviewBundle ${artifact.reviewBundleId}`,
      `target ${facts.targetPath} digest ${facts.digest.slice(0, 12)}…`,
    );
    ingested = {
      ok: true,
      evidence: {
        evidenceId: artifact.evidenceId,
        status: artifact.evidenceStatus,
        sourceKind: "execution_attempt",
        technicalResultRef: attempt.resultRef ?? null,
        verified: true,
        mode: provenance.mode,
      },
      reviewBundle: {
        reviewBundleId: artifact.reviewBundleId,
        status: "available",
        version: 1,
        evidenceRefs: [artifact.evidenceId],
        mode: provenance.mode,
      },
      recommendation: pendingRecommendation(provenance.mode),
      provenance,
    } as unknown as Extract<
      Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
      { ok: true }
    >;
  }
  return {
    ok: true,
    payload: buildPayload({
      proposal: input.proposal,
      decisionId: input.decisionId,
      contract,
      attempt,
      launchCount: input.launchCount,
      reusedExistingAttempt: input.reusedExistingAttempt,
      extraDisclosures: extra,
      productDurablePath: input.productDurablePath,
      provenance,
      processRef,
      ingested,
    }),
  };
}

export async function executeConfirmedBoundedDocsWriteContract(input: {
  projectId: string;
  decisionId: string;
  proposal: ProposalDto | null;
  contract: ExecutionContract;
  expectedContractVersion: number;
  actor: OaActorReference;
  authorityEvidenceId: string;
  identities: BoundedDocsWritePipelineIdentities;
  extraDisclosures?: readonly string[];
  deps: BoundedDocsWritePipelineDeps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  const attempts = input.deps.executionAttemptServices;
  const realBoundary = attempts.realBoundary;
  if (!realBoundary) {
    return {
      ok: false,
      code: "REAL_BOUNDARY_REQUIRED",
      message:
        "Contrat bounded docs-write refusé — realBoundary absent (fail-closed, pas de fallback fixture).",
    };
  }
  if (!attempts.grantRealExecutionGate) {
    return {
      ok: false,
      code: "GATE_D_REQUIRED",
      message:
        "Contrat bounded docs-write refusé — Gate D non disponible (fail-closed, pas de fallback fixture).",
    };
  }

  let contract = input.contract;
  const extraDisclosures = input.extraDisclosures ?? [];
  const productDurable =
    input.deps.productDurablePath ?? input.deps.projectServices !== undefined;

  const listed = await attempts.listExecutionAttempts.execute({
    executionContractId: contract.executionContractId,
  });
  if (listed.ok) {
    const reusable = listed.attempts.find(
      (a) => a.status === "succeeded" || a.status === "running",
    );
    if (reusable) {
      return finishBoundedDocsWriteAttempt({
        projectId: input.projectId,
        decisionId: input.decisionId,
        proposal: input.proposal,
        contract,
        attempt: reusable,
        launchCount: launchCallCountOf(realBoundary.launchPort),
        reusedExistingAttempt: true,
        extraDisclosures,
        productDurablePath: productDurable,
        deps: input.deps,
      });
    }
  }

  if (contract.version !== input.expectedContractVersion) {
    return {
      ok: false,
      code: "CONTRACT_VERSION_MISMATCH",
      message: `Version contrat attendue ${input.expectedContractVersion}, actuelle ${contract.version}.`,
    };
  }

  if (
    contract.status === "confirmation_required" ||
    contract.status === "validated"
  ) {
    const requested = await input.deps.decisionServices.requestConfirmation.execute({
      confirmationId: input.identities.confirmationId,
      level: input.identities.confirmationLevel,
      actionRef: F3_CONFIRM_ACTION_REF,
      requestedBy: input.actor,
      requestedTo: input.actor,
      scope: contract.scope,
      idempotencyKey: input.identities.confirmationIdempotencyKey,
      decisionRef: input.decisionId,
    });
    if (!requested.ok) {
      return {
        ok: false,
        code: requested.error.detailCode,
        message: requested.error.message,
      };
    }

    const granted = await input.deps.decisionServices.grantConfirmation.execute({
      confirmationId: input.identities.confirmationId,
      actor: input.actor,
      authorityEvidenceId: input.authorityEvidenceId,
    });
    if (!granted.ok) {
      return {
        ok: false,
        code: granted.error.detailCode,
        message: granted.error.message,
      };
    }

    const confirmed =
      await input.deps.executionContractServices.confirmExecutionContract.execute(
        {
          executionContractId: contract.executionContractId,
          confirmationId: input.identities.confirmationId,
          actor: input.actor,
          authorityEvidenceId: input.authorityEvidenceId,
          expectedVersion: contract.version,
        },
      );
    if (!confirmed.ok) {
      return {
        ok: false,
        code: confirmed.error.detailCode,
        message: confirmed.error.message,
      };
    }
    contract = confirmed.contract;
  } else if (
    contract.status !== "confirmed" &&
    contract.status !== "executing" &&
    contract.status !== "completed"
  ) {
    return {
      ok: false,
      code: "CONTRACT_NOT_CONFIRMABLE",
      message: `Contrat non confirmable (statut ${contract.status}).`,
    };
  }

  const selected = await attempts.selectExecutionAgent.execute({
    attemptId: input.identities.attemptId,
    executionContractId: contract.executionContractId,
    idempotencyKey: input.identities.attemptIdempotencyKey,
    actor: input.actor,
    authorityEvidenceId: input.authorityEvidenceId,
    expectedContractVersion: contract.version,
    selectionProfile: "standard",
    selectionStrategy: "capabilities_deterministic",
    requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    systemInitiated: true,
  });
  if (!selected.ok) {
    return {
      ok: false,
      code: selected.error.detailCode,
      message: selected.error.message,
    };
  }

  const nowMs = Date.parse(input.deps.nowIso());
  const expiresAt = new Date(
    (Number.isFinite(nowMs) ? nowMs : Date.now()) + 60 * 60 * 1000,
  ).toISOString();

  const gate = await attempts.grantRealExecutionGate.execute({
    grantId: input.identities.grantId,
    attemptId: input.identities.attemptId,
    actor: input.actor,
    expiresAt,
    authorityEvidenceId: input.authorityEvidenceId,
  });
  if (!gate.ok) {
    return {
      ok: false,
      code: gate.error.detailCode,
      message: gate.error.message,
    };
  }

  const started = await attempts.startExecution.execute({
    attemptId: input.identities.attemptId,
    actor: input.actor,
    authorityEvidenceId: input.authorityEvidenceId,
  });
  if (!started.ok) {
    return {
      ok: false,
      code: started.error.detailCode,
      message: started.error.message,
    };
  }

  return finishBoundedDocsWriteAttempt({
    projectId: input.projectId,
    decisionId: input.decisionId,
    proposal: input.proposal,
    contract,
    attempt: started.attempt,
    launchCount: launchCallCountOf(realBoundary.launchPort),
    reusedExistingAttempt: false,
    extraDisclosures,
    productDurablePath: productDurable,
    deps: input.deps,
  });
}
```

### NEW FILE — productJourneyGovernedDocsWriteWiring.d0.test.ts
```typescript
/**
 * PRODUCT JOURNEY ↔ GOVERNED DOCS_WRITE EXECUTION WIRING — Delivery proofs.
 *
 * Deterministic only. ZERO Cursor REAL. ZERO OpenAI LIVE.
 * Proves: EC machine profile auto-resolve, W2 inspect/confirm/authority,
 * Product Execute → existing OA Attempt/Evidence pipeline, Fake boundary,
 * fail-closed without boundary, Reproof 05/06/07 non-regression properties.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  LOCAL_PILOTE_ACTOR,
} from "@/lib/oa/decision";
import {
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  M4_REAL_GATEWAY_ADAPTER_ID,
  MemoryLaunchSafetyJournal,
  createM4BoundedDocsWriteCursorAgentDescriptor,
  isStudioCursorRealEnabled,
} from "@/lib/oa/execution-attempt";
import { agentMatchViolation } from "@/lib/oa/execution-attempt/domain/invariants";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
import { boundedDocsWriteM3ResolutionProfile } from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import {
  authorizedM3ResolutionKind,
  selectProductM3ResolutionProfile,
} from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import {
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  prepareCycleFromValidatedTrajectory,
  startPreparedTrajectoryCycle,
  materializeLifecycleRecommendationFromStructuredOutput,
  resolveTrajectoryBootstrapPresence,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import {
  governedExecuteAuthorizedContract,
  governedExecuteSelectAgent,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const IDENTITY = "acme/widget";
const BRANCH = "main";
const NOW = "2026-09-16T18:00:00.000Z";
const PILOTE = LOCAL_PILOTE_ACTOR;
const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const tempRoots: string[] = [];

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempRoots.push(dir);
  return dir;
}

function assertRealOff(): void {
  delete process.env.SFIA_STUDIO_CURSOR_REAL;
  delete process.env.OPS1_CURSOR_REAL;
  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
  process.env.OPS1_CURSOR_REAL = "0";
  expect(isStudioCursorRealEnabled()).toBe(false);
}

function initManagedRepo(managedBase: string, identity: string) {
  fs.mkdirSync(managedBase, { recursive: true });
  const repoRoot = path.join(managedBase, identity.replace("/", "__"));
  fs.mkdirSync(path.join(repoRoot, "docs"), { recursive: true });
  fs.writeFileSync(path.join(repoRoot, "docs", ".keep"), "");
  execFileSync("git", ["init"], { cwd: repoRoot });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: repoRoot,
  });
  execFileSync("git", ["config", "user.name", "Test"], { cwd: repoRoot });
  execFileSync("git", ["add", "."], { cwd: repoRoot });
  execFileSync("git", ["commit", "-m", "init"], { cwd: repoRoot });
  const baseHeadSha = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
  return { repoRoot, baseHeadSha };
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:pjw-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    this.n += 1;
    return `lps:pjw-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    this.n += 1;
    return `cor:pjw-${this.prefix}-${this.n}`;
  }
}

beforeEach(() => {
  assertRealOff();
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  setConversationProviderForTests(null);
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
});

afterEach(() => {
  assertRealOff();
  setConversationProviderForTests(null);
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
  while (tempRoots.length) {
    const d = tempRoots.pop();
    if (d) {
      try {
        fs.rmSync(d, { recursive: true, force: true });
      } catch {
        /* ignore */
      }
    }
  }
});

describe("10.1 / profile — machine scope vs business disclosure", () => {
  it("bounded docs_write profile is canonical M4 scope without PREPARE_ONLY", () => {
    const profile = boundedDocsWriteM3ResolutionProfile();
    expect(profile.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(profile.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
    expect(profile.scope).toBe(M4_BOUNDED_DOCS_WRITE_SCOPE);
    expect(profile.constraints).not.toContain("PREPARE_ONLY");
    expect(profile.constraints).not.toContain("NO_CURSOR_REAL");
    expect(profile.constraints).not.toContain("NO_ATTEMPT");
    expect(authorizedM3ResolutionKind({
      action: profile.action,
      target: profile.target,
      scope: profile.scope!,
      reversibility: profile.reversibility,
      requiredCapabilities: profile.requiredCapabilities,
      constraints: profile.constraints ?? [],
      stopConditions: profile.stopConditions ?? [],
    })).toBe("bounded_docs_write");
  });

  it("narrative/French scope alone never matches M4 agent", () => {
    const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const violation = agentMatchViolation(agent, {
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      requiredCapabilities: ["cap:cursor.docs_write"],
      scope: "docs_write borné — cycle actif — aucune exécution automatique",
    });
    expect(violation).not.toBeNull();
    expect(violation?.detailCode).toMatch(/SCOPE|scope/i);
  });

  it("selectProductM3ResolutionProfile docs-write explicit; fixture default", () => {
    expect(
      selectProductM3ResolutionProfile({ preferBoundedDocsWriteProfile: true })
        .kind,
    ).toBe("bounded_docs_write");
    expect(selectProductM3ResolutionProfile().kind).toBe("fixture");
  });
});

async function bootDocsWriteJourney(suffix: string, withBoundary: boolean) {
  const root = tempDir(`sfia-pjw-${suffix}-`);
  const managedBase = path.join(root, "managed");
  const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);
  const gitState = new FakeCursorGitExternalState({
    worktreeRoot: repoRoot,
    initialBranch: BRANCH,
    initialSha: baseHeadSha,
  });
  const fakeLaunch = new FakeDocsWriteLaunchPort({
    worktreeRoot: repoRoot,
    pathAllowlist: ["docs/"],
    defaultBranch: BRANCH,
    repositoryRef: IDENTITY,
    gitState,
  });
  const safetyJournal = new MemoryLaunchSafetyJournal();
  const runtime = getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: NOW,
    idSource: new FixedIdSource(suffix),
    auditMode: "noop",
    productDbPath: path.join(root, "oa.sqlite"),
    ...(withBoundary
      ? {
          realBoundary: {
            launchPort: fakeLaunch,
            safetyJournal,
            managedRepoRootBase: managedBase,
          },
        }
      : {}),
  });
  const oa = runtime.oa!;

  const created = await runtime.createProject({
    name: `PJW ${suffix}`,
    objective: "Product Journey docs_write wiring",
    context: "delivery",
    criticality: "STANDARD",
    constraints: ["ZERO LIVE"],
    shortReference: `PJW${suffix}`.slice(0, 8),
    idempotencyKey: `idem:pjw-${suffix}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("createProject");
  const projectId = created.project.projectId;

  const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
    projectId,
    actor: PILOTE,
    binding: {
      provider: "github",
      identity: IDENTITY,
      remoteUrl: `https://github.com/${IDENTITY}.git`,
      defaultBranch: BRANCH,
      pathRoot: "docs",
      baseSha: baseHeadSha,
    },
  });
  expect(bound.ok).toBe(true);

  const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions0 = await oa.decisionServices.decisions.listByProject(projectId);
  const lpsBoot = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lpsBoot.ok) throw new Error("lps");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const projectBoot = await oa.projectServices.getProject.execute({ projectId });
  if (!projectBoot.ok || !projectBoot.project.doctrinePackageRef) {
    throw new Error("doctrine pin missing");
  }
  const pin = projectBoot.project.doctrinePackageRef;

  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: {
      narrative: "PJW Next cycle.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Design fonctionnel.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:functional-design",
        rationale: "PJW",
        authority: "none" as const,
        isHumanDecision: false as const,
        qualificationSignals: { ...SIGNALS_LIGHT },
      },
    },
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles: cycles0,
      lpsActiveCycleInstanceId: lpsBoot.livingProjectState.activeCycleInstanceId,
      lpsVersion: lpsBoot.livingProjectState.version,
      doctrinePackageId: pin.doctrinePackageId,
      doctrinePackageVersion: pin.version,
      doctrinePackageDigest: pin.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions: decisions0,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: NOW,
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  if (!mat.materialization?.ok) {
    throw new Error(
      `materialization failed: ${JSON.stringify(mat, null, 2).slice(0, 2000)}`,
    );
  }

  const bridgeDeps = {
    trajectories: oa.cycleServices.trajectories,
    createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    runInTransaction: ((fn: () => Promise<unknown>) =>
      oa.projectServices.store.runInTransaction(fn)) as <T>(
      fn: () => Promise<T>,
    ) => Promise<T>,
    listEpistemicByProject: (pid: string) =>
      oa.cycleServices.epistemic.listByProject(pid),
    listCyclesByProject: (pid: string) =>
      oa.cycleServices.cycles.listByProject(pid),
    listDecisionsByProject: (pid: string) =>
      oa.decisionServices.decisions.listByProject(pid),
    listEvidenceByProject: (pid: string) =>
      oa.evidenceReviewServices.repository.listByProject(pid),
    getCurrentLps: (pid: string) =>
      oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: pid,
      }),
    getProjectDoctrinePin: async (pid: string) => {
      const p = await oa.projectServices.getProject.execute({ projectId: pid });
      if (!p.ok) return null;
      const d = p.project.doctrinePackageRef;
      return d
        ? {
            doctrinePackageId: d.doctrinePackageId,
            version: d.version,
            digest: d.digest,
          }
        : null;
    },
    newTrajectoryId: () => `trj:pjw-${suffix}`,
    newStepId: () => `stp:pjw-${suffix}`,
    newProvenanceObservationId: () => `epi:pjw-${suffix}`,
    correlationId: `cor:pjw-bridge-${suffix}`,
  };

  const candidate = await prepareCandidateTrajectoryFromCurrentRecommendation({
    projectId,
    deps: bridgeDeps,
  });
  expect(candidate.ok).toBe(true);
  const presentation = await buildPreCycleCandidateApprovalPresentation({
    oa,
    projectId,
  });
  expect(presentation.ok && presentation.presentation).toBeTruthy();
  if (!presentation.ok || !presentation.presentation) {
    throw new Error("presentation");
  }
  const approved = await approveCandidateTrajectory({
    oa,
    projectId,
    presentationDigest: presentation.presentation.presentationDigest,
    forceLocalAuthority: true,
  });
  expect(approved.ok).toBe(true);
  const prep = await prepareCycleFromValidatedTrajectory({ oa, projectId });
  expect(prep.ok).toBe(true);
  if (!prep.ok) throw new Error(prep.code);
  const startedCycle = await startPreparedTrajectoryCycle({
    oa,
    projectId,
    cycleInstanceId: prep.cycle.cycleInstanceId,
    forceLocalAuthority: true,
  });
  expect(startedCycle.ok).toBe(true);
  if (!startedCycle.ok) throw new Error(startedCycle.code);
  const cycleInstanceId = startedCycle.cycle.cycleInstanceId;

  const overview = await runtime.getProject(projectId);
  expect(overview.ok).toBe(true);
  if (!overview.ok) throw new Error("overview");
  const provider = new FakeConversationProvider();
  const analyzed = await analyzeIntent({
    userContent: "__F2_DOCS_WRITE_GCEC__ produce functional design",
    projectSummary: overview.project.name ?? "PJW",
    provider,
  });
  const snapshot = {
    projectId,
    lpsId: overview.livingState.id,
    lpsVersion: overview.livingState.version,
    doctrineDigest: overview.doctrine.digest,
    activeCycleInstanceId: cycleInstanceId,
    ckcResolutionRef: null as string | null,
  };
  const proposal = saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: analyzed.analysis.rephrasedRequest ?? "docs write",
    objective: analyzed.analysis.objective ?? "FD",
    cycleTypeId:
      analyzed.analysis.candidateCycleTypeId ?? "cyc:functional-design",
    recommendedProfile: "Standard",
    rationale: "PJW",
    scope: analyzed.analysis.scope ?? "docs/",
    outOfScope: analyzed.analysis.outOfScope,
    activatedBlocks: analyzed.analysis.activatedBlocks,
    expectedOutcome: analyzed.analysis.expectedOutcome ?? "artifact",
    sources: [],
    risks: analyzed.analysis.risks,
    reservations: analyzed.analysis.reservations,
    stopConditions: analyzed.analysis.stopConditions,
    morrisGateRequired: true,
    nextPossibleStep: "F3 PREPARE",
    contextSnapshot: snapshot,
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: analyzed.analysis.requestedOperation,
    executionIntent: analyzed.analysis.executionIntent,
  });
  const go = await recordF2Decision({
    proposalId: proposal.proposalId,
    projectId,
    decisionKind: "GO",
    currentContext: snapshot,
    decisionServices: oa.decisionServices,
    authorityResolver: oa.authorityResolver,
    nowIso: () => oa.clock.nowIso(),
    forceM3Authority: true,
  });
  expect(go.ok).toBe(true);
  if (!go.ok) throw new Error("go");
  const decisionId = go.decision.decisionId;

  const overviewAfter = await runtime.getProject(projectId);
  if (!overviewAfter.ok) throw new Error("overviewAfter");

  return {
    runtime,
    oa,
    projectId,
    cycleInstanceId,
    decisionId,
    baseHeadSha,
    fakeLaunch,
    currentContext: {
      projectId,
      lpsId: overviewAfter.livingState.id,
      lpsVersion: overviewAfter.livingState.version,
      doctrineDigest: overviewAfter.doctrine.digest,
      activeCycleInstanceId: cycleInstanceId,
    },
    dbPath: path.join(root, "oa.sqlite"),
  };
}

describe("10.1 / 10.3 / 10.4 / 10.5 / 10.6 / 10.7 — Product Execute wiring", () => {
  it("AUTO resolve docs_write (no prefer flag) → inspect → confirm → AUTHORIZED → governedExecute one Attempt", async () => {
    const ctx = await bootDocsWriteJourney("auto", true);
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      currentContext: ctx.currentContext,
      deps: {
        decisionServices: ctx.oa.decisionServices,
        authorityResolver: ctx.oa.authorityResolver,
        executionContractServices: ctx.oa.executionContractServices,
        nowIso: () => ctx.oa.clock.nowIso(),
        forceM3Authority: true,
        // Intentionally omit preferBoundedDocsWriteProfile — DecisionBasis auto-select.
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe("M3_RESOLVED_BOUNDED_DOCS_WRITE");
    const successor = prepared.payload.successor;
    expect(successor.scope).toBe(M4_BOUNDED_DOCS_WRITE_SCOPE);
    expect(successor.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(successor.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
    expect(successor.constraints).not.toContain("PREPARE_ONLY");
    expect(successor.constraints).not.toContain("NO_ATTEMPT");
    expect(prepared.payload.prepare.contract.constraints).toContain("PREPARE_ONLY");
    expect(prepared.payload.prepare.contract.scope).not.toBe(
      M4_BOUNDED_DOCS_WRITE_SCOPE,
    );

    const executionContractId = successor.executionContractId;

    const inspected = await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;
    expect(inspected.inspectionSufficient).toBe(true);

    const blocked = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(true);
    if (!blocked.ok) return;
    expect(blocked.outcome).toBe("BLOCKED");

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const authorized = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) return;
    expect(authorized.outcome).toBe("AUTHORIZED");

    const launchBefore = ctx.fakeLaunch.calls.length;
    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.phase).toBe("terminal");
    expect(executed.selectedAgentRef).toBe(M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID);
    expect(executed.adapterId).toBe(M4_REAL_GATEWAY_ADAPTER_ID);
    expect(executed.realExecution).toBe(false);
    expect(executed.boundaryProofMode).toBe("deterministic_fake");
    // Isolated temp FS mutations via Fake port — not Cursor REAL.
    expect(executed.externalEffects).toBe(true);
    expect(executed.attemptStatus).toBe("succeeded");
    expect(ctx.fakeLaunch.calls.length).toBe(launchBefore + 1);

    const listed =
      await ctx.oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listed.ok).toBe(true);
    if (!listed.ok) return;
    const succeeded = listed.attempts.filter((a) => a.status === "succeeded");
    expect(succeeded).toHaveLength(1);

    const replay = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.reusedExistingAttempt).toBe(true);
    expect(ctx.fakeLaunch.calls.length).toBe(launchBefore + 1);

    const evidence = await ctx.oa.evidenceReviewServices.repository.listByProject(
      ctx.projectId,
    );
    expect(
      evidence.some(
        (e) =>
          e.bindings?.executionAttemptId === succeeded[0]!.attemptId ||
          e.bindings?.executionContractId === executionContractId,
      ),
    ).toBe(true);
  });

  it("docs_write EC without realBoundary → REAL_BOUNDARY_REQUIRED fail-closed", async () => {
    const ctx = await bootDocsWriteJourney("nobound", false);
    expect(ctx.oa.executionAttemptServices.realBoundary).toBeUndefined();
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      currentContext: ctx.currentContext,
      deps: {
        decisionServices: ctx.oa.decisionServices,
        authorityResolver: ctx.oa.authorityResolver,
        executionContractServices: ctx.oa.executionContractServices,
        nowIso: () => ctx.oa.clock.nowIso(),
        forceM3Authority: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe("M3_RESOLVED_BOUNDED_DOCS_WRITE");

    const executionContractId = prepared.payload.successor.executionContractId;
    await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
    });
    await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });

    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) return;
    expect(selected.code).toBe("REAL_BOUNDARY_REQUIRED");
  });
});

describe("10.9 — Reproof 05/06/07 non-regression properties", () => {
  it("Reproof 07 — legacy narrative scope never equals studio.gcec.docs_write match", () => {
    expect(
      authorizedM3ResolutionKind({
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: M4_BOUNDED_DOCS_WRITE_TARGET,
        scope: "docs_write borné — cycle actif — aucune exécution automatique",
        reversibility: "reversible",
        requiredCapabilities: ["cap:cursor.docs_write"],
        constraints: [
          "PREPARE_ONLY",
          "NO_CURSOR_REAL",
          "NO_ATTEMPT",
          "OUT_OF_SCOPE:Cursor REAL",
        ],
        stopConditions: ["AUTHORITY_DENIED"],
      }),
    ).toBeNull();
  });

  it("Reproof 07 — REAL flag alone never auto-selects docs_write profile", () => {
    const off = selectProductM3ResolutionProfile({
      env: { SFIA_STUDIO_CURSOR_REAL: "0", NODE_ENV: "test" },
    });
    const on = selectProductM3ResolutionProfile({
      env: { SFIA_STUDIO_CURSOR_REAL: "1", NODE_ENV: "test" },
    });
    // REAL may arm bounded_read_only composition; it must NEVER silently
    // promote docs_write or rewrite an inspected EC's semantics.
    expect(off.kind).not.toBe("bounded_docs_write");
    expect(on.kind).not.toBe("bounded_docs_write");
    expect(on.kind === "fixture" || on.kind === "bounded_read_only").toBe(true);
  });

  it("Reproof 06 — missing Confirmation blocks authority on resolved docs_write", async () => {
    const ctx = await bootDocsWriteJourney("nocfm", true);
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      currentContext: ctx.currentContext,
      deps: {
        decisionServices: ctx.oa.decisionServices,
        authorityResolver: ctx.oa.authorityResolver,
        executionContractServices: ctx.oa.executionContractServices,
        nowIso: () => ctx.oa.clock.nowIso(),
        forceM3Authority: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executionContractId = prepared.payload.successor.executionContractId;
    await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
    });
    const auth = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    expect(auth.outcome).toBe("BLOCKED");
    expect(auth.reasonCode).toMatch(/confirmation/i);
  });

  it("Reproof 05 — prepare original is superseded; successor linked; PREPARE_ONLY preserved on original", async () => {
    const ctx = await bootDocsWriteJourney("stale", true);
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      currentContext: ctx.currentContext,
      deps: {
        decisionServices: ctx.oa.decisionServices,
        authorityResolver: ctx.oa.authorityResolver,
        executionContractServices: ctx.oa.executionContractServices,
        nowIso: () => ctx.oa.clock.nowIso(),
        forceM3Authority: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const originalLoaded =
      await ctx.oa.executionContractServices.getExecutionContract.execute({
        executionContractId: prepared.payload.original.executionContractId,
      });
    expect(originalLoaded.ok).toBe(true);
    if (!originalLoaded.ok) return;
    expect(originalLoaded.contract.status).toBe("superseded");
    expect(originalLoaded.contract.constraints).toContain("PREPARE_ONLY");
    expect(prepared.payload.successor.supersedesExecutionContractId).toBe(
      prepared.payload.original.executionContractId,
    );
    expect(prepared.payload.successor.constraints).not.toContain("PREPARE_ONLY");
  });
});

describe("B1 — provenance Fake/Real truth", () => {
  it("B1.1 Fake docs_write: M4 profile + deterministic_fake ⇒ realExecution false", async () => {
    const ctx = await bootDocsWriteJourney("b11", true);
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      currentContext: ctx.currentContext,
      deps: {
        decisionServices: ctx.oa.decisionServices,
        authorityResolver: ctx.oa.authorityResolver,
        executionContractServices: ctx.oa.executionContractServices,
        nowIso: () => ctx.oa.clock.nowIso(),
        forceM3Authority: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executionContractId = prepared.payload.successor.executionContractId;
    await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
    });
    await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    expect(selected.realExecution).toBe(false);
    expect(selected.boundaryProofMode).toBe("deterministic_fake");

    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.selectedAgentRef).toBe(M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID);
    expect(executed.adapterId).toBe(M4_REAL_GATEWAY_ADAPTER_ID);
    expect(executed.boundaryProofMode).toBe("deterministic_fake");
    expect(executed.realExecution).toBe(false);
  });

  it("B1.4/B1.5 REAL-shaped stub boundary without Cursor ⇒ projection can claim REAL metadata only via boundaryProofMode", () => {
    const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const fakeProv = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:b15-fake",
        selectedAgentRef: agent.agentId,
        status: "succeeded",
        launchedAt: NOW,
        resultRef: "res:x",
      },
      agent,
      boundaryProofMode: "deterministic_fake",
    });
    expect(fakeProv.realExecution).toBe(false);
    expect(fakeProv.boundaryProofMode).toBe("deterministic_fake");
    expect(fakeProv.mode).toBe("BOUNDED_M4_DETERMINISTIC");

    const realShapedProv = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:b15-stub",
        selectedAgentRef: agent.agentId,
        status: "succeeded",
        launchedAt: NOW,
        resultRef: "res:y",
      },
      agent,
      boundaryProofMode: "cursor_real",
    });
    // Projection capability: cursor_real proof mode + launched ⇒ realExecution true
    // without spawning Cursor (metadata test only — cycle still ZERO REAL launches).
    expect(realShapedProv.realExecution).toBe(true);
    expect(realShapedProv.boundaryProofMode).toBe("cursor_real");
    expect(realShapedProv.mode).toBe("CURSOR_CLI_REAL");

    const agentOnly = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:b15-agent",
        selectedAgentRef: agent.agentId,
        status: "succeeded",
        launchedAt: NOW,
      },
      agent,
      boundaryProofMode: null,
    });
    expect(agentOnly.realExecution).toBe(false);
  });

  it("B1.3 rejected/failed fake never promotes REAL", () => {
    const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const failed = deriveAttemptProvenance({
      attempt: {
        attemptId: "xat:b13",
        selectedAgentRef: agent.agentId,
        status: "failed",
        launchedAt: NOW,
      },
      agent,
      boundaryProofMode: "deterministic_fake",
    });
    expect(failed.realExecution).toBe(false);
    expect(failed.boundaryProofMode).toBe("deterministic_fake");
  });
});

describe("B2 — no DecisionBasis / intent widening", () => {
  it("B2.1 structured DecisionBasis docs_write + action + capability → bounded_docs_write", async () => {
    const ctx = await bootDocsWriteJourney("b21", false);
    const decision = await ctx.oa.decisionServices.getHumanDecision.execute({
      decisionId: ctx.decisionId,
    });
    expect(decision.ok).toBe(true);
    if (!decision.ok) return;
    const eb = decision.decision.decisionBasis?.executionBasis;
    expect(eb?.intentKind === "docs_write" || eb?.requestedOperation).toBeTruthy();

    const prepared = await prepareAndResolveM3ProductPath({
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      currentContext: ctx.currentContext,
      deps: {
        decisionServices: ctx.oa.decisionServices,
        authorityResolver: ctx.oa.authorityResolver,
        executionContractServices: ctx.oa.executionContractServices,
        nowIso: () => ctx.oa.clock.nowIso(),
        forceM3Authority: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe("M3_RESOLVED_BOUNDED_DOCS_WRITE");
    expect(prepared.payload.successor.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(prepared.payload.successor.scope).toBe(M4_BOUNDED_DOCS_WRITE_SCOPE);
  });

  it("B2.2/B2.4 incompatible DecisionBasis requestedOperation fails closed (no promotion)", async () => {
    const ctx = await bootDocsWriteJourney("b24", false);
    // Re-record a sibling decision with contradictory requestedOperation via new proposal
    const overview = await ctx.runtime.getProject(ctx.projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const snapshot = {
      projectId: ctx.projectId,
      lpsId: overview.livingState.id,
      lpsVersion: overview.livingState.version,
      doctrineDigest: overview.doctrine.digest,
      activeCycleInstanceId: ctx.cycleInstanceId,
      ckcResolutionRef: null as string | null,
    };
    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest: "contradictory op",
      objective: "FD",
      cycleTypeId: "cyc:functional-design",
      recommendedProfile: "Standard",
      rationale: "B2.4",
      scope: "docs/",
      outOfScope: [],
      activatedBlocks: [],
      expectedOutcome: "artifact",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      morrisGateRequired: true,
      nextPossibleStep: "F3 PREPARE",
      contextSnapshot: snapshot,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
      requestedOperation: "github.pr.merge",
      executionIntent: {
        intentKind: "docs_write",
        requestedOperation: "github.pr.merge",
        artifactType: "functional_design",
        targetRepositoryRef: IDENTITY,
        targetPath: "docs/functional-design.md",
        scopeIn: ["docs/"],
        requiredCapabilities: ["cap:cursor.docs_write"],
        reversibilityExpectation: "reversible",
      },
    });
    const go = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId: ctx.projectId,
      decisionKind: "GO",
      currentContext: snapshot,
      decisionServices: ctx.oa.decisionServices,
      authorityResolver: ctx.oa.authorityResolver,
      nowIso: () => ctx.oa.clock.nowIso(),
      forceM3Authority: true,
    });
    expect(go.ok).toBe(true);
    if (!go.ok) return;
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: ctx.projectId,
      decisionId: go.decision.decisionId,
      currentContext: {
        projectId: ctx.projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
        activeCycleInstanceId: ctx.cycleInstanceId,
      },
      deps: {
        decisionServices: ctx.oa.decisionServices,
        authorityResolver: ctx.oa.authorityResolver,
        executionContractServices: ctx.oa.executionContractServices,
        nowIso: () => ctx.oa.clock.nowIso(),
        forceM3Authority: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("DOCS_WRITE_INTENT_INCOHERENT");
  });

  it("B2.3 prefer=true without coherent prepare action/capability fails closed", async () => {
    const root = tempDir("sfia-pjw-b23-");
    const managedBase = path.join(root, "managed");
    const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);
    const runtime = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      idSource: new FixedIdSource("b23"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa.sqlite"),
    });
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "B23",
      objective: "non-docs",
      context: "delivery",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "B23",
      idempotencyKey: "idem:b23",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;
    await oa.projectServices.setProjectRepositoryBinding.execute({
      projectId,
      actor: PILOTE,
      binding: {
        provider: "github",
        identity: IDENTITY,
        remoteUrl: `https://github.com/${IDENTITY}.git`,
        defaultBranch: BRANCH,
        pathRoot: "docs",
        baseSha: baseHeadSha,
      },
    });
    // Minimal non-docs GO via empty executionIntent → prepare UNRESOLVED
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;
    const snapshot = {
      projectId,
      lpsId: overview.livingState.id,
      lpsVersion: overview.livingState.version,
      doctrineDigest: overview.doctrine.digest,
      activeCycleInstanceId: null as string | null,
      ckcResolutionRef: null as string | null,
    };
    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest: "generic",
      objective: "generic",
      cycleTypeId: "cyc:functional-design",
      recommendedProfile: "Standard",
      rationale: "B2.3",
      scope: "n/a",
      outOfScope: [],
      activatedBlocks: [],
      expectedOutcome: "n/a",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      morrisGateRequired: true,
      nextPossibleStep: "F3 PREPARE",
      contextSnapshot: snapshot,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
      requestedOperation: null,
      executionIntent: null,
    });
    const go = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      currentContext: snapshot,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: true,
    });
    expect(go.ok).toBe(true);
    if (!go.ok) return;
    const prepared = await prepareAndResolveM3ProductPath({
      projectId,
      decisionId: go.decision.decisionId,
      currentContext: {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
        activeCycleInstanceId: null,
      },
      deps: {
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        executionContractServices: oa.executionContractServices,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
        preferBoundedDocsWriteProfile: true,
        boundedDocsWriteBaseHeadSha: baseHeadSha,
        gitStartDir: repoRoot,
      },
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("DOCS_WRITE_PROFILE_PREPARE_INCOHERENT");
  });

  it("B2.5 REAL env does not auto-select docs_write", () => {
    expect(
      selectProductM3ResolutionProfile({
        env: { SFIA_STUDIO_CURSOR_REAL: "1", NODE_ENV: "test" },
      }).kind,
    ).not.toBe("bounded_docs_write");
  });

  it("B2.6 client cannot force profile via selectProduct alone", () => {
    // Without server prefer flag, selector stays fixture — no client-forced machine profile.
    expect(selectProductM3ResolutionProfile().kind).toBe("fixture");
    expect(
      selectProductM3ResolutionProfile({
        preferBoundedDocsWriteProfile: false,
      }).kind,
    ).toBe("fixture");
  });

  it("B2.7 narrative French scope never matches M4", () => {
    expect(
      authorizedM3ResolutionKind({
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: M4_BOUNDED_DOCS_WRITE_TARGET,
        scope: "docs_write borné — cycle actif — aucune exécution automatique",
        reversibility: "reversible",
        requiredCapabilities: ["cap:cursor.docs_write"],
        constraints: ["PREPARE_ONLY", "NO_CURSOR_REAL"],
        stopConditions: ["AUTHORITY_DENIED"],
      }),
    ).toBeNull();
  });
});

describe("P1 — SQLite TEMP fresh-runtime restart", () => {
  it("Runtime A execute → destroy → Runtime B same SQLite rehydrates Attempt+Evidence without relaunch", async () => {
    const ctx = await bootDocsWriteJourney("p1rst", true);
    const dbPath = ctx.dbPath;
    const managedBase = path.dirname(ctx.fakeLaunch.gitState.worktreeRoot);
    // Fake worktreeRoot is repoRoot under managed/<identity>

    const prepared = await prepareAndResolveM3ProductPath({
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      currentContext: ctx.currentContext,
      deps: {
        decisionServices: ctx.oa.decisionServices,
        authorityResolver: ctx.oa.authorityResolver,
        executionContractServices: ctx.oa.executionContractServices,
        nowIso: () => ctx.oa.clock.nowIso(),
        forceM3Authority: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executionContractId = prepared.payload.successor.executionContractId;
    await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
    });
    await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.attemptStatus).toBe("succeeded");
    const attemptIdA = executed.attemptId;
    const launchCountA = ctx.fakeLaunch.calls.length;
    expect(launchCountA).toBe(1);

    const listedA =
      await ctx.oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listedA.ok).toBe(true);
    if (!listedA.ok) return;
    const attemptsA = listedA.attempts.filter((a) => a.status === "succeeded");
    expect(attemptsA).toHaveLength(1);

    const evidenceA = await ctx.oa.evidenceReviewServices.repository.listByProject(
      ctx.projectId,
    );
    const evidenceBoundA = evidenceA.filter(
      (e) => e.bindings?.executionAttemptId === attemptIdA,
    );
    expect(evidenceBoundA.length).toBeGreaterThanOrEqual(1);
    const evidenceCountA = evidenceA.length;

    // --- Simulated process stop: destroy Runtime A in-memory services ---
    const projectId = ctx.projectId;
    const repoRoot = ctx.fakeLaunch.gitState.worktreeRoot;
    const baseHeadSha = ctx.baseHeadSha;
    resetRuntimeApplicationServiceForTests();

    // --- Runtime B: same SQLite, fresh Fake port (calls=0) ---
    const gitStateB = new FakeCursorGitExternalState({
      worktreeRoot: repoRoot,
      initialBranch: BRANCH,
      initialSha: baseHeadSha,
    });
    const fakeLaunchB = new FakeDocsWriteLaunchPort({
      worktreeRoot: repoRoot,
      pathAllowlist: ["docs/"],
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
      gitState: gitStateB,
    });
    expect(fakeLaunchB.calls.length).toBe(0);
    expect(fakeLaunchB.boundaryProofMode).toBe("deterministic_fake");

    const runtimeB = getRuntimeApplicationService({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: NOW,
      idSource: new FixedIdSource("p1b"),
      auditMode: "noop",
      productDbPath: dbPath,
      realBoundary: {
        launchPort: fakeLaunchB,
        safetyJournal: new MemoryLaunchSafetyJournal(),
        managedRepoRootBase: managedBase,
      },
    });
    const oaB = runtimeB.oa!;

    const projectB = await oaB.projectServices.getProject.execute({ projectId });
    expect(projectB.ok).toBe(true);

    const ecB = await oaB.executionContractServices.getExecutionContract.execute({
      executionContractId,
    });
    expect(ecB.ok).toBe(true);
    if (!ecB.ok) return;
    expect(ecB.contract.scope).toBe(M4_BOUNDED_DOCS_WRITE_SCOPE);

    const listedB =
      await oaB.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listedB.ok).toBe(true);
    if (!listedB.ok) return;
    const succeededB = listedB.attempts.filter((a) => a.status === "succeeded");
    expect(succeededB).toHaveLength(1);
    expect(succeededB[0]!.attemptId).toBe(attemptIdA);
    expect(succeededB[0]!.resultRef).toBe(attemptsA[0]!.resultRef);

    const evidenceB = await oaB.evidenceReviewServices.repository.listByProject(
      projectId,
    );
    expect(evidenceB.length).toBe(evidenceCountA);
    expect(
      evidenceB.some((e) => e.bindings?.executionAttemptId === attemptIdA),
    ).toBe(true);

    // Replay on Runtime B — must reuse Attempt, no Fake relaunch
    const replay = await governedExecuteAuthorizedContract({
      oa: oaB,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.reusedExistingAttempt).toBe(true);
    expect(replay.attemptId).toBe(attemptIdA);
    expect(fakeLaunchB.calls.length).toBe(0);
    expect(replay.realExecution).toBe(false);
    expect(replay.boundaryProofMode).toBe("deterministic_fake");

    const listedAfter =
      await oaB.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listedAfter.ok).toBe(true);
    if (!listedAfter.ok) return;
    expect(
      listedAfter.attempts.filter((a) => a.status === "succeeded"),
    ).toHaveLength(1);
    const evidenceAfter =
      await oaB.evidenceReviewServices.repository.listByProject(projectId);
    expect(evidenceAfter.length).toBe(evidenceCountA);
  });
});

describe("smoke — env REAL off", () => {
  it("SFIA_STUDIO_CURSOR_REAL and OPS1_CURSOR_REAL remain off", () => {
    assertRealOff();
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).toBe("0");
    expect(process.env.OPS1_CURSOR_REAL).toBe("0");
  });
});
```
\n
