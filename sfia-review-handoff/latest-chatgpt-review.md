# SFIA STUDIO — PRODUCT LEGACY M3 PREPARE → M4 SUCCESSOR REMATERIALIZATION 01
## Review Pack FULL

- timestamp Europe/Paris: **2026-09-17 02:10:15 CEST**
- timestamp UTC: **2026-09-17T00:10:15Z**
- milestone: **PRODUCT-LEGACY-M3-TO-M4-SUCCESSOR-REMATERIALIZATION-01**
- cycle: **8 — Delivery / implementation**
- typology: **EVOL**
- profile: **CRITICAL**
- Morris phrase: **"ok go"**
- Bounded interpretation: ONE Delivery macro-cycle closing the Reproof 08 authenticated legacy PREPARE_ONLY → canonical M4 successor gap; deterministic only; ONE local project commit; ZERO REAL; NO project push/PR/merge; FULL Review Pack + handoff.
- Cursor REAL: **0**
- docs_write REAL effect: **0**
- OpenAI LIVE: **0**
- Nora LIVE: **0**
- Project push/PR/merge: **0**
- Local project commit: **YES** `844869fdf792284719f77bfd8e10cf43ebf75fee`
- Runtime v3: **NON ADOPTED**
- Verdict: **PRODUCT LEGACY M3 PREPARE → M4 SUCCESSOR REMATERIALIZATION — PASS DETERMINISTIC AT TESTED SCOPE — SUPPORTED PRODUCT RECOVERY PATH IMPLEMENTED — LEGACY ORIGINAL PRESERVED — CANONICAL M4 SUCCESSOR + FRESH GOVERNANCE CHAIN PROVEN — ZERO REAL — LOCAL COMMIT READY FOR CHATGPT CRITICAL REVIEW — NO PROJECT PUSH/PR/MERGE — RUNTIME V3 NON ADOPTED**

---

## 1. Exact Morris decision + bounded interpretation

Morris: `ok go`

Consumed for ONE bounded Delivery after ChatGPT Critical Review of Reproof 08.

Authorized: minimal Product capability for legacy pre-#493 PREPARE_ONLY → M4 successor; Product app/UI/tests; deterministic validation; one local commit; Review Pack; L3 handoff.

Forbidden: Cursor REAL, docs_write REAL, OpenAI/Nora LIVE, project push/PR/merge, schema/migration, doctrine/method/CI mutation, Stage A, runtime v3.

---

## 2. Cycle / typology / Critical rationale

- Project: SFIA Studio
- Cycle 8 Delivery / EVOL / CRITICAL
- Critical: modifies governed EC lifecycle + backward continuity of durable Product state; HumanDecision→EC→Inspection→Confirmation→authority; enables historical Project to reach M4 docs_write AgentCapability; fail-closed preserved; prepares but does NOT execute future Cursor REAL.
- Product Completion: CLOSED (not reopened)
- Runtime v3: NON ADOPTED

---

## 3. Git truth

| Fact | Value |
|------|-------|
| Worktree | `/Users/morris/Projects/sfia-studio-product-legacy-m3-to-m4-successor` |
| Base / origin/main | `3a3a90f50cc185af4aa3c2b4ef7dafe035e176e3` |
| Base tree | `fe6b03938fb24e295eb931cf6c5a79b1fa4056c2` |
| Branch | `delivery/sfia-studio-product-legacy-m3-to-m4-successor` |
| Local commit | `844869fdf792284719f77bfd8e10cf43ebf75fee` |
| Commit tree | `ea70fec559449ebf09d2d427d10760e970734647` |
| Project remote effects | **ZERO** (no push) |
| Reproof 08 handoff tip verified | `bedb6a2a09dc8c19bca90368960529939f380265` / blob `261256af5a14df4f2a2ecfc0cc7dd088ccdd7435` |

### Commit stat

```
commit 844869fdf792284719f77bfd8e10cf43ebf75fee
Author: Morris Cleland <morris@e8616b0d-1fc3-4e2d-92d3-8e626c04ce19.home>
Date:   Thu Sep 17 02:09:13 2026 +0200

    feat(sfia-studio): rematerialize legacy docs-write successor

    Add a supported Product path that resolves an existing pre-#493 M3 PREPARE
    docs_write contract into the canonical M4 successor without re-PREPARE,
    preserving DecisionBasis lineage and requiring fresh inspection/confirmation.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../trajectorySurface.ui.test.tsx                  | 178 +++++++++
 ...roductJourneyGovernedDocsWriteWiring.d0.test.ts | 350 +++++++++++++++++
 .../importBoundaries.test.ts                       |   1 +
 .../surfaces/TrajectorySurface.tsx                 | 124 +++++-
 .../app/features/project-assistant/actions.ts      | 115 ++++++
 .../app/features/project-assistant/f3/index.ts     |  11 +
 .../f3/legacyDocsWritePrepareContractView.ts       |  41 ++
 .../f3/prepareAndResolveM3ProductPath.ts           |  64 +--
 .../f3/qualifyDocsWriteM3Intent.ts                 | 114 ++++++
 .../resolveExistingLegacyM3DocsWriteProductPath.ts | 427 +++++++++++++++++++++
 .../app/features/project-assistant/types.ts        |  24 ++
 11 files changed, 1395 insertions(+), 54 deletions(-)

```

---

## 4. Sources read

PROCESS: cycle template, routing guide, operating model, guardrails.
CONVERGENCE: build doctrine, roadmap, product-completion cadrage.
V3 framing 34/35 (read-only).
LATEST REVIEW: Reproof 08 handoff (STOP — PRODUCT M4 SUCCESSOR AUTHORITY CHAIN NOT PROVEN).
IMPLEMENTATION: prepareM3FromDecision, prepareAndResolveM3ProductPath, resolveM3ExecutionContract, boundedDocsWriteM3ResolutionProfile, selectProductM3ResolutionProfile, actions.ts, TrajectorySurface, buildExecutionContract / duplicate-id behavior, listExecutionAttempts, #493 wiring tests, trajectorySurface.ui.test.tsx.

---

## 5. Convergence qualification

KEEP existing resolver / M4 profile / DecisionBasis / supersession / Fake boundary.
COMPLETE Product recovery path + UI affordance + deterministic continuity proof.
HARVEST Reproof 08 acceptance scenario + #493 non-regression.
NO parallel state machine / migration / DB rewrite.

---

## 6. Reproof 08 root cause

Authenticated historical Project rehydrated confirmed canonical M3 PREPARE EC:

- `xct:m3:dec:w2-prop:ca889356-…`
- action/target already docs_write
- narrative scope (not `studio.gcec.docs_write`)
- constraints include PREPARE_ONLY / NO_CURSOR_REAL / NO_ATTEMPT / NO_GATE_D
- UI hides generic PREPARE once contract exists
- fresh `#493` path calls `prepareM3FromDecision` → `buildExecutionContract` fail-closes on existing canonical `executionContractId` before idempotent reuse
- authority correctly blocked (`executor_capability_insufficient`)

Therefore Delivery must NOT re-PREPARE; it must route the EXISTING original into `resolveM3ExecutionContract`.

---

## 7. Architecture classification

**KEEP**
- `resolveM3ExecutionContract`
- `canonicalM3PrepareContractId`
- `boundedDocsWriteM3ResolutionProfile`
- DecisionBasis / HumanDecision
- supersession semantics
- fresh `prepareAndResolveM3ProductPath` / `projectAssistantPrepareResolvedM3Action`
- Inspection / Confirmation / authority / Gate D
- existing persistence schema
- FakeDocsWriteLaunchPort

**COMPLETE**
- `resolveExistingLegacyM3DocsWriteProductPath`
- `projectAssistantResolveLegacyM3DocsWriteAction`
- UI CTA « Actualiser le contrat d'exécution »
- shared `qualifyDocsWriteM3Intent`
- client-safe `isLegacyDocsWritePrepareContractView`
- deterministic + negative tests

**HARVEST**
- Reproof 08 durable state class
- #493 wiring tests / Fake boundary

**NOT DONE**
- no migration / schema change
- no second runner
- no Cursor REAL

---

## 8. Exact changed files

1. `f3/resolveExistingLegacyM3DocsWriteProductPath.ts` (new)
2. `f3/qualifyDocsWriteM3Intent.ts` (new)
3. `f3/legacyDocsWritePrepareContractView.ts` (new)
4. `f3/prepareAndResolveM3ProductPath.ts` (use shared qualifier)
5. `f3/index.ts` (exports)
6. `actions.ts` (server action)
7. `types.ts` (result DTOs)
8. `TrajectorySurface.tsx` (CTA + continuity decisionRef)
9. `productJourneyGovernedDocsWriteWiring.d0.test.ts` (D01 suite)
10. `trajectorySurface.ui.test.tsx` (CTA UI)
11. `importBoundaries.test.ts` (allowlist)

---

## 9. New application flow

1. Server loads accepted HumanDecision + DecisionBasis
2. Derives canonical original id server-side
3. Loads durable original; proves project/decision/canonical identity
4. Proves docs_write action/target/capability + PREPARE_ONLY eligibility
5. Proves Attempt count == 0 via `listExecutionAttempts`
6. Resolves baseHeadSha server-side (same mechanism as #493)
7. Selects `boundedDocsWriteM3ResolutionProfile`
8. Calls existing `resolveM3ExecutionContract` (supersession engine)
9. Returns successor — ZERO execution

UI: when projected contract is legacy PREPARE_ONLY docs_write (presentation heuristic), show « Actualiser le contrat d'exécution »; generic PREPARE remains hidden; on success project successor, clear inspection/authorization/attempt UI, require new Inspect.

---

## 10. Eligibility / Attempt safety

Fail-closed when: non-docs DecisionBasis; incoherent action/capability; non-canonical id; wrong project/decision; lifecycle executing/completed/failed/cancelled; prior Attempt exists; missing sealed targetPath/repository on DecisionBasis; stale context; already-current M4 without prepare markers (non-superseded).

Attempt safety: `listExecutionAttempts` on original; length > 0 → `LEGACY_PRIOR_ATTEMPT_EXISTS`.

Hostile client fields (real/profile/agent/action/target/scope/baseHeadSha) ignored.

---

## 11. Inspection / Confirmation semantics

Old Confirmation binds historical EC/version — NOT transferred.
After rematerialization: original superseded (audit preserved); successor new identity; UI clears inspection/authorization; amendment-style notice « CONTRAT ACTUALISÉ — RÉINSPECTION REQUISE »; new Inspect → Confirm → authority required.

Deterministic proof: old Confirmation does not authorize successor (BLOCKED until new inspect+confirm).

---

## 12. Deterministic Fake/Real qualification

Trigger: yes (downstream Cursor boundary exists).
This cycle proof: **DETERMINISTIC PROVEN** for legacy rematerialization continuity.
Fake boundary: FakeDocsWriteLaunchPort.
REAL: OUT OF SCOPE / ZERO.
`SFIA_STUDIO_CURSOR_REAL=1` alone never selects docs_write profile / never dispatches.

Proven path parity: HD → DecisionBasis → original → successor → Inspect → Confirm → AUTHORIZED → StartExecution → one Attempt → Evidence/RB → Fake launch; restart suite still green on fresh path; D01 rematerialize→execute proven.

---

## 13. Validation results

| Gate | Result |
|------|--------|
| Focused D01 + wiring | 27 PASS |
| TrajectorySurface UI | 42 PASS |
| importBoundaries | PASS (allowlist updated) |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| Full Vitest | **4183 passed** / 137 skipped / 0 failed |
| Cursor REAL launches | **0** |
| OpenAI/Nora LIVE | **0** |

Focused suites re-run after recovery to exact main: PASS.

---

## 14. Reserves / debts

- Authenticated REAL Reproof 09 remains a separate Morris GO after push/PR/merge + Required Gate.
- Post-execution Nora/LPS continuity observation still pending after a future REAL proof (Reproof 08 classification C).
- Local commit not pushed (authorized).

---

## 15. Claims authorized

LEGACY PRE-#493 M3 PREPARE → CANONICAL M4 DOCS_WRITE SUCCESSOR DETERMINISTIC CONTINUITY PROVEN AT TESTED PRODUCT SCOPE.

Includes: supported Product recovery path; original preserved/superseded; successor M4; Inspection/Confirmation reset; deterministic authority/execution via Fake; Attempt/Evidence; ZERO REAL.

## 16. Claims forbidden

Cursor REAL proven; authenticated REAL docs_write; E2E FULL REAL; generalized migration; production autonomy; Nora Cognitive Completion; runtime v3 ADOPTED; global L5; zero defects; production ready.

---

## 17. Exact verdict

**PRODUCT LEGACY M3 PREPARE → M4 SUCCESSOR REMATERIALIZATION — PASS DETERMINISTIC AT TESTED SCOPE — SUPPORTED PRODUCT RECOVERY PATH IMPLEMENTED — LEGACY ORIGINAL PRESERVED — CANONICAL M4 SUCCESSOR + FRESH GOVERNANCE CHAIN PROVEN — ZERO REAL — LOCAL COMMIT READY FOR CHATGPT CRITICAL REVIEW — NO PROJECT PUSH/PR/MERGE — RUNTIME V3 NON ADOPTED**

## 18. Next gate

STOP. Do not push project branch. Do not create PR. Do not merge. Do not start Reproof 09.

Next: **ChatGPT Critical Review → Morris decision** (may authorize project push + PR + CI). Only after merge + Required Gate PASS may a NEW DISTINCT Morris GO authorize authenticated REAL Reproof 09.

---

## APPENDIX A — Complete new-file diffs (exploitable)

```diff
commit 844869fdf792284719f77bfd8e10cf43ebf75fee
Author:     Morris Cleland <morris@e8616b0d-1fc3-4e2d-92d3-8e626c04ce19.home>
AuthorDate: Thu Sep 17 02:09:13 2026 +0200
Commit:     Morris Cleland <morris@e8616b0d-1fc3-4e2d-92d3-8e626c04ce19.home>
CommitDate: Thu Sep 17 02:09:13 2026 +0200

    feat(sfia-studio): rematerialize legacy docs-write successor

    Add a supported Product path that resolves an existing pre-#493 M3 PREPARE
    docs_write contract into the canonical M4 successor without re-PREPARE,
    preserving DecisionBasis lineage and requiring fresh inspection/confirmation.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/project-assistant/f3/legacyDocsWritePrepareContractView.ts b/projects/sfia-studio/app/features/project-assistant/f3/legacyDocsWritePrepareContractView.ts
new file mode 100644
index 00000000..47255dd9
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f3/legacyDocsWritePrepareContractView.ts
@@ -0,0 +1,41 @@
+/**
+ * Client-safe presentation heuristic for legacy M3 PREPARE docs_write recovery CTA.
+ * Not the security boundary — server re-validates on rematerialization.
+ *
+ * Constants duplicated intentionally to keep this module free of Node/server barrels.
+ */
+
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply";
+const M4_BOUNDED_DOCS_WRITE_TARGET = "workspace.isolated.docs_write";
+const M4_BOUNDED_DOCS_WRITE_SCOPE = "studio.gcec.docs_write";
+
+function canonicalM3PrepareContractId(decisionId: string): string {
+  const safe = decisionId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48);
+  return `xct:m3:${safe}`;
+}
+
+export function isLegacyDocsWritePrepareContractView(input: {
+  decisionId: string;
+  executionContractId: string;
+  action: string;
+  target: string;
+  scope?: string;
+  constraints: readonly string[];
+  requiredCapabilities?: readonly string[];
+}): boolean {
+  if (
+    input.executionContractId !== canonicalM3PrepareContractId(input.decisionId)
+  ) {
+    return false;
+  }
+  if (input.action !== M4_BOUNDED_DOCS_WRITE_ACTION) return false;
+  if (input.target !== M4_BOUNDED_DOCS_WRITE_TARGET) return false;
+  if (!input.constraints.includes("PREPARE_ONLY")) return false;
+  if (
+    input.scope === M4_BOUNDED_DOCS_WRITE_SCOPE &&
+    !input.constraints.includes("PREPARE_ONLY")
+  ) {
+    return false;
+  }
+  return true;
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/qualifyDocsWriteM3Intent.ts b/projects/sfia-studio/app/features/project-assistant/f3/qualifyDocsWriteM3Intent.ts
new file mode 100644
index 00000000..49c40985
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f3/qualifyDocsWriteM3Intent.ts
@@ -0,0 +1,114 @@
+/**
+ * Shared DecisionBasis / prepare-contract docs_write coherence for M3 paths.
+ * Server-side only — never driven by client REAL / profile / agent hints.
+ */
+
+import {
+  M4_BOUNDED_DOCS_WRITE_ACTION,
+  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+} from "@/lib/oa/execution-attempt";
+
+export type DocsWriteExecutionBasisLike = {
+  intentKind?: string | null;
+  requestedOperation?: string | null;
+} | null | undefined;
+
+export type DocsWriteIntentQualification =
+  | {
+      ok: true;
+      preferDocsWrite: true;
+      basisDocsWriteIntent: true;
+      actionIsDocsWrite: true;
+      capabilityIsDocsWrite: true;
+    }
+  | {
+      ok: true;
+      preferDocsWrite: false;
+      basisDocsWriteIntent: boolean;
+      actionIsDocsWrite: boolean;
+      capabilityIsDocsWrite: boolean;
+    }
+  | { ok: false; code: string; message: string };
+
+/**
+ * Qualify docs_write intent coherently across DecisionBasis + action + capability.
+ * Mirrors prepareAndResolveM3ProductPath B2 rules (no authority widening).
+ */
+export function qualifyDocsWriteM3Intent(input: {
+  executionBasis: DocsWriteExecutionBasisLike;
+  action: string;
+  requiredCapabilities: readonly string[];
+  /**
+   * Server/test only. Never from the client.
+   * true = force docs_write profile when prepare action/cap coherent.
+   * false = never auto-select docs_write.
+   * undefined = auto from DecisionBasis coherence.
+   */
+  preferBoundedDocsWriteProfile?: boolean;
+}): DocsWriteIntentQualification {
+  const executionBasis = input.executionBasis;
+  const basisDocsWriteIntent =
+    executionBasis?.intentKind === "docs_write" ||
+    executionBasis?.requestedOperation?.trim() === M4_BOUNDED_DOCS_WRITE_ACTION;
+  const basisRequestedOp = executionBasis?.requestedOperation?.trim() ?? "";
+  const basisOpCompatible =
+    basisRequestedOp === "" ||
+    basisRequestedOp === M4_BOUNDED_DOCS_WRITE_ACTION;
+  const actionIsDocsWrite = input.action === M4_BOUNDED_DOCS_WRITE_ACTION;
+  const capabilityIsDocsWrite = input.requiredCapabilities.includes(
+    M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+  );
+
+  if (input.preferBoundedDocsWriteProfile === true) {
+    if (!actionIsDocsWrite || !capabilityIsDocsWrite) {
+      return {
+        ok: false,
+        code: "DOCS_WRITE_PROFILE_PREPARE_INCOHERENT",
+        message:
+          "preferBoundedDocsWriteProfile refusé — PREPARE action/capability docs_write incohérents.",
+      };
+    }
+    return {
+      ok: true,
+      preferDocsWrite: true,
+      basisDocsWriteIntent: true,
+      actionIsDocsWrite: true,
+      capabilityIsDocsWrite: true,
+    };
+  }
+
+  if (input.preferBoundedDocsWriteProfile !== false) {
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
+    if (fullCanonicalDocsWrite) {
+      return {
+        ok: true,
+        preferDocsWrite: true,
+        basisDocsWriteIntent: true,
+        actionIsDocsWrite: true,
+        capabilityIsDocsWrite: true,
+      };
+    }
+  }
+
+  return {
+    ok: true,
+    preferDocsWrite: false,
+    basisDocsWriteIntent: Boolean(basisDocsWriteIntent),
+    actionIsDocsWrite,
+    capabilityIsDocsWrite,
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath.ts b/projects/sfia-studio/app/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath.ts
new file mode 100644
index 00000000..31c65c96
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath.ts
@@ -0,0 +1,427 @@
+/**
+ * Legacy pre-#493 M3 PREPARE → canonical M4 docs_write successor rematerialization.
+ *
+ * Does NOT call prepareM3FromDecision (would fail on existing canonical id).
+ * Routes the EXISTING durable original into resolveM3ExecutionContract.
+ *
+ * ZERO StartExecution / Attempt / external launch.
+ */
+
+import type { F2ContextSnapshot } from "../f2/types";
+import type { ExecutionAttemptServices } from "@/lib/oa/execution-attempt";
+import {
+  M4_BOUNDED_DOCS_WRITE_ACTION,
+  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+  M4_BOUNDED_DOCS_WRITE_SCOPE,
+  M4_BOUNDED_DOCS_WRITE_TARGET,
+  type GitCommandRunner,
+} from "@/lib/oa/execution-attempt";
+import {
+  resolveBoundedReadOnlyBaseHeadSha,
+  validateBaseHeadSha,
+} from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
+import { isLegacyDocsWritePrepareContractView } from "./legacyDocsWritePrepareContractView";
+import {
+  BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
+  boundedDocsWriteM3ResolutionProfile,
+} from "./boundedDocsWriteM3ResolutionProfile";
+import { qualifyDocsWriteM3Intent } from "./qualifyDocsWriteM3Intent";
+import {
+  canonicalM3PrepareContractId,
+  canonicalM3PrepareIdempotencyKey,
+  resolveM3ExecutionContract,
+  type ResolveM3Deps,
+  type ResolveM3Success,
+} from "./resolveM3ExecutionContract";
+import type { PrepareM3Deps } from "./prepareM3FromDecision";
+import {
+  isProposalSubjectOptionRef,
+  PROPOSAL_SUBJECT_PURSUE_REF,
+} from "../w2/proposalSubjectOptions";
+
+export type ResolveExistingLegacyM3DocsWriteDeps = PrepareM3Deps &
+  ResolveM3Deps & {
+    executionAttemptServices: Pick<
+      ExecutionAttemptServices,
+      "listExecutionAttempts"
+    >;
+    /**
+     * Server/test only contract-bound workspace pin.
+     * Never accepted from the client.
+     */
+    boundedDocsWriteBaseHeadSha?: string;
+    boundedReadOnlyBaseHeadSha?: string;
+    resolveBoundedReadOnlyHead?: () => Promise<string | null> | string | null;
+    gitCommandRunner?: GitCommandRunner;
+    gitStartDir?: string;
+  };
+
+export type F3M3LegacyResolvedPayload = {
+  turnKind: "f3_m3_legacy_docs_write_resolved";
+  mode: "M3_RESOLVED_BOUNDED_DOCS_WRITE";
+  decisionId: string;
+  projectId: string;
+  original: ResolveM3Success["original"];
+  successor: ResolveM3Success["successor"];
+  reusedFromIdempotency: boolean;
+  executionPerformed: false;
+  attemptCreated: false;
+  confirmationRequired: true;
+  realExecution: false;
+  disclosures: string[];
+};
+
+const LEGACY_PREPARE_MARKERS = [
+  "PREPARE_ONLY",
+  "NO_CURSOR_REAL",
+  "NO_ATTEMPT",
+  "NO_GATE_D",
+] as const;
+
+function fail(code: string, message: string) {
+  return { ok: false as const, code, message };
+}
+
+export { isLegacyDocsWritePrepareContractView };
+
+export async function resolveExistingLegacyM3DocsWriteProductPath(input: {
+  projectId: string;
+  decisionId: string;
+  currentContext: F2ContextSnapshot;
+  /** Hostile — ignored. */
+  mode?: unknown;
+  adapterRef?: unknown;
+  agentId?: unknown;
+  command?: unknown;
+  real?: unknown;
+  baseHeadSha?: unknown;
+  workspace?: unknown;
+  profile?: unknown;
+  action?: unknown;
+  target?: unknown;
+  scope?: unknown;
+  deps: ResolveExistingLegacyM3DocsWriteDeps;
+}): Promise<
+  | { ok: true; payload: F3M3LegacyResolvedPayload }
+  | { ok: false; code: string; message: string }
+> {
+  void input.mode;
+  void input.adapterRef;
+  void input.agentId;
+  void input.command;
+  void input.real;
+  void input.baseHeadSha;
+  void input.workspace;
+  void input.profile;
+  void input.action;
+  void input.target;
+  void input.scope;
+
+  const loaded = await input.deps.decisionServices.getHumanDecision.execute({
+    decisionId: input.decisionId,
+  });
+  if (!loaded.ok) {
+    return fail(loaded.error.detailCode, loaded.error.message);
+  }
+
+  const decision = loaded.decision;
+  if (decision.projectId !== input.projectId) {
+    return fail("PROJECT_MISMATCH", "Decision does not belong to this project.");
+  }
+  if (decision.status !== "accepted") {
+    return fail(
+      "DECISION_NOT_CURRENT",
+      `Decision status ${decision.status} is not accepted for legacy rematerialization.`,
+    );
+  }
+  if (!decision.decisionBasis) {
+    return fail(
+      "DECISION_BASIS_REQUIRED",
+      "HumanDecision lacks DecisionBasis — cannot rematerialize legacy M3.",
+    );
+  }
+  const basis = decision.decisionBasis;
+  if (basis.projectId !== input.projectId) {
+    return fail(
+      "DECISION_BASIS_PROJECT_MISMATCH",
+      "DecisionBasis projectId does not match.",
+    );
+  }
+
+  if (
+    basis.sourceType === "proposal" &&
+    isProposalSubjectOptionRef(decision.selectedOptionId) &&
+    decision.selectedOptionId !== PROPOSAL_SUBJECT_PURSUE_REF
+  ) {
+    return fail(
+      "PREPARE_NOT_APPLICABLE",
+      "Rematérialisation M3 réservée à la poursuite du sujet Proposal — amend/refuse n'ouvrent aucune exécution.",
+    );
+  }
+
+  const ctx = basis.proposalContext;
+  if (
+    ctx.doctrineDigest !== undefined &&
+    ctx.doctrineDigest !== input.currentContext.doctrineDigest
+  ) {
+    return fail(
+      "CONTEXT_STALE",
+      "DecisionBasis doctrine digest is stale — re-decide before rematerialization.",
+    );
+  }
+  if (ctx.lpsVersion > input.currentContext.lpsVersion) {
+    return fail(
+      "CONTEXT_STALE",
+      "DecisionBasis LPS version is ahead of current context — inconsistent state.",
+    );
+  }
+
+  const canonicalId = canonicalM3PrepareContractId(input.decisionId);
+  const originalResult =
+    await input.deps.executionContractServices.getExecutionContract.execute({
+      executionContractId: canonicalId,
+    });
+  if (!originalResult.ok) {
+    return fail(originalResult.error.detailCode, originalResult.error.message);
+  }
+  const original = originalResult.contract;
+
+  if (original.projectId !== input.projectId) {
+    return fail(
+      "CONTRACT_PROJECT_MISMATCH",
+      "Original ExecutionContract does not belong to this project.",
+    );
+  }
+  if (
+    !original.decisionRefs ||
+    original.decisionRefs.length === 0 ||
+    !original.decisionRefs.includes(input.decisionId)
+  ) {
+    return fail(
+      "DECISION_CONTRACT_MISMATCH",
+      "Original contract is not linked to this HumanDecision.",
+    );
+  }
+  if (original.executionContractId !== canonicalId) {
+    return fail(
+      "CANONICAL_M3_CONTRACT_MISMATCH",
+      "Loaded contract id is not the canonical M3 PREPARE contract for this decision.",
+    );
+  }
+  if (original.idempotencyKey !== canonicalM3PrepareIdempotencyKey(input.decisionId)) {
+    return fail(
+      "CANONICAL_M3_CONTRACT_MISMATCH",
+      "Loaded contract idempotencyKey is not the canonical M3 PREPARE identity.",
+    );
+  }
+  if (original.requiredAuthority !== "MORRIS") {
+    return fail(
+      "CANONICAL_M3_CONTRACT_MISMATCH",
+      "Canonical M3 PREPARE contract must require MORRIS authority.",
+    );
+  }
+
+  if (original.action !== M4_BOUNDED_DOCS_WRITE_ACTION) {
+    return fail(
+      "LEGACY_DOCS_WRITE_ACTION_MISMATCH",
+      "Legacy rematerialization requires action cursor.docs_write.apply.",
+    );
+  }
+  if (original.target !== M4_BOUNDED_DOCS_WRITE_TARGET) {
+    return fail(
+      "LEGACY_DOCS_WRITE_TARGET_MISMATCH",
+      "Legacy rematerialization requires target workspace.isolated.docs_write.",
+    );
+  }
+  if (
+    !(original.requiredCapabilities ?? []).includes(
+      M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+    )
+  ) {
+    return fail(
+      "LEGACY_DOCS_WRITE_CAPABILITY_MISMATCH",
+      "Legacy rematerialization requires cap:cursor.docs_write.",
+    );
+  }
+
+  const constraints = original.constraints ?? [];
+  const hasPrepareOnly = constraints.includes("PREPARE_ONLY");
+  if (!hasPrepareOnly && original.status !== "superseded") {
+    // Already-current non-prepare original is not this recovery path.
+    // Superseded originals are handled by resolver idempotent reuse below.
+    return fail(
+      "LEGACY_PREPARE_MARKERS_ABSENT",
+      "Original is not a legacy PREPARE_ONLY docs_write contract.",
+    );
+  }
+  if (hasPrepareOnly) {
+    // Prefer presence of the historical prepare cluster when still on original.
+    const missingMarkers = LEGACY_PREPARE_MARKERS.filter(
+      (m) => m !== "PREPARE_ONLY" && !constraints.includes(m),
+    );
+    // PREPARE_ONLY alone is sufficient eligibility; other markers are historical
+    // signals, not hard requirements (older fixtures may omit some).
+    void missingMarkers;
+  }
+
+  // Already M4 machine profile without prepare markers → not a legacy recovery.
+  if (
+    original.scope === M4_BOUNDED_DOCS_WRITE_SCOPE &&
+    !hasPrepareOnly &&
+    original.status !== "superseded"
+  ) {
+    return fail(
+      "LEGACY_ALREADY_M4_CURRENT",
+      "Contract already carries canonical M4 docs_write scope — no legacy rematerialization.",
+    );
+  }
+
+  const intent = qualifyDocsWriteM3Intent({
+    executionBasis: basis.executionBasis,
+    action: original.action,
+    requiredCapabilities: original.requiredCapabilities ?? [],
+  });
+  if (!intent.ok) return intent;
+  if (!intent.preferDocsWrite) {
+    return fail(
+      "DECISION_BASIS_NOT_DOCS_WRITE",
+      "DecisionBasis does not carry coherent docs_write intent for rematerialization.",
+    );
+  }
+
+  if (
+    original.status === "executing" ||
+    original.status === "completed" ||
+    original.status === "failed" ||
+    original.status === "cancelled"
+  ) {
+    return fail(
+      "LEGACY_CONTRACT_LIFECYCLE_REFUSED",
+      `Cannot rematerialize contract in status ${original.status}.`,
+    );
+  }
+
+  const listed =
+    await input.deps.executionAttemptServices.listExecutionAttempts.execute({
+      executionContractId: canonicalId,
+    });
+  if (!listed.ok) {
+    return fail(
+      "LEGACY_ATTEMPT_SAFETY_UNPROVEN",
+      listed.error.message ??
+        "Cannot prove absence of prior Attempt for legacy original.",
+    );
+  }
+  if (listed.attempts.length > 0) {
+    return fail(
+      "LEGACY_PRIOR_ATTEMPT_EXISTS",
+      "Prior ExecutionAttempt exists on the legacy original — rematerialization refused.",
+    );
+  }
+
+  // Target path / repository must remain sealed on DecisionBasis (durable truth).
+  const eb = basis.executionBasis;
+  const targetPath = eb?.targetPath?.trim() ?? "";
+  const targetRepositoryRef = eb?.targetRepositoryRef?.trim() ?? "";
+  if (!targetPath || !targetRepositoryRef) {
+    return fail(
+      "DECISION_BASIS_TARGET_INCOMPLETE",
+      "DecisionBasis lacks sealed targetPath / targetRepositoryRef.",
+    );
+  }
+  const originalInputs = (original.inputs ?? {}) as Record<string, unknown>;
+  const sealedPath =
+    typeof originalInputs.targetPath === "string"
+      ? originalInputs.targetPath.trim()
+      : "";
+  const sealedRepo =
+    typeof originalInputs.targetRepositoryRef === "string"
+      ? originalInputs.targetRepositoryRef.trim()
+      : typeof originalInputs.repositoryRef === "string"
+        ? String(originalInputs.repositoryRef).trim()
+        : "";
+  if (sealedPath && sealedPath !== targetPath) {
+    return fail(
+      "DECISION_BASIS_TARGET_PATH_DRIFT",
+      "Durable DecisionBasis targetPath does not match original contract inputs.",
+    );
+  }
+  if (sealedRepo && sealedRepo !== targetRepositoryRef) {
+    return fail(
+      "DECISION_BASIS_REPOSITORY_DRIFT",
+      "Durable DecisionBasis targetRepositoryRef does not match original contract inputs.",
+    );
+  }
+
+  let sha: string | null = null;
+  const pinned =
+    input.deps.boundedDocsWriteBaseHeadSha ??
+    input.deps.boundedReadOnlyBaseHeadSha;
+  if (pinned !== undefined) {
+    sha = validateBaseHeadSha(pinned);
+  } else if (input.deps.resolveBoundedReadOnlyHead) {
+    sha = validateBaseHeadSha(await input.deps.resolveBoundedReadOnlyHead());
+  } else {
+    const resolved = await resolveBoundedReadOnlyBaseHeadSha({
+      gitRunner: input.deps.gitCommandRunner,
+      startDir: input.deps.gitStartDir,
+    });
+    if (!resolved.ok) {
+      return fail(resolved.code, resolved.message);
+    }
+    sha = resolved.sha;
+  }
+  if (!sha) {
+    return fail(
+      "BASE_HEAD_SHA_INVALID",
+      "baseHeadSha server-side invalide ou absent — fail-closed avant Confirmation / Gate D.",
+    );
+  }
+
+  const profile = boundedDocsWriteM3ResolutionProfile();
+  const resolution = {
+    ...profile,
+    inputs: {
+      ...(profile.inputs ?? {}),
+      baseHeadSha: sha,
+    },
+  };
+
+  const resolved = await resolveM3ExecutionContract({
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+    originalExecutionContractId: canonicalId,
+    expectedOriginalVersion: original.version,
+    resolution,
+    supersessionReason: BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
+    deps: input.deps,
+  });
+  if (!resolved.ok) return resolved;
+
+  return {
+    ok: true,
+    payload: {
+      turnKind: "f3_m3_legacy_docs_write_resolved",
+      mode: "M3_RESOLVED_BOUNDED_DOCS_WRITE",
+      decisionId: input.decisionId,
+      projectId: input.projectId,
+      original: resolved.original,
+      successor: resolved.successor,
+      reusedFromIdempotency: resolved.reusedFromIdempotency,
+      executionPerformed: false,
+      attemptCreated: false,
+      confirmationRequired: true,
+      realExecution: false,
+      disclosures: [
+        "LEGACY M3 PREPARE rematerialized via existing G-UX-15 resolve (no re-PREPARE)",
+        "G-UX-15 resolveM3ExecutionContract — bounded docs-write M4 profile (server-selected from DecisionBasis; ZERO LIVE Cursor)",
+        "NO Proposal authority",
+        "Confirmation required before StartExecution",
+        "CURSOR REAL NOT EXECUTED AT REMATERIALIZATION",
+        "Profile is server-side; client adapter/command/real/profile fields are ignored",
+        "PRIOR ATTEMPT COUNT VERIFIED ZERO ON ORIGINAL",
+        ...resolved.disclosures,
+      ],
+    },
+  };
+}

```

## APPENDIX B — Complete modified core diffs

```diff
commit 844869fdf792284719f77bfd8e10cf43ebf75fee
Author: Morris Cleland <morris@e8616b0d-1fc3-4e2d-92d3-8e626c04ce19.home>
Date:   Thu Sep 17 02:09:13 2026 +0200

    feat(sfia-studio): rematerialize legacy docs-write successor

    Add a supported Product path that resolves an existing pre-#493 M3 PREPARE
    docs_write contract into the canonical M4 successor without re-PREPARE,
    preserving DecisionBasis lineage and requiring fresh inspection/confirmation.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index da65d63a..3ac63c8d 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -17,7 +17,11 @@ import {
   useState,
 } from "react";
 import { flushSync } from "react-dom";
-import { projectAssistantPrepareResolvedM3Action } from "@/features/project-assistant/actions";
+import {
+  projectAssistantPrepareResolvedM3Action,
+  projectAssistantResolveLegacyM3DocsWriteAction,
+} from "@/features/project-assistant/actions";
+import { isLegacyDocsWritePrepareContractView } from "@/features/project-assistant/f3/legacyDocsWritePrepareContractView";
 import {
   w2AmendExecutionContractAction,
   w2AuthorizeExecutionContractAction,
@@ -258,6 +262,9 @@ export function TrajectorySurface({
     useState<"pending" | "ready" | "error">("pending");
   const [executionContinuityConflict, setExecutionContinuityConflict] =
     useState(false);
+  const [continuityDecisionRef, setContinuityDecisionRef] = useState<
+    string | null
+  >(null);
   const [pendingReinstruction, setPendingReinstruction] = useState<{
     readonly message: string;
     readonly proposalIds: readonly string[];
@@ -367,6 +374,22 @@ export function TrajectorySurface({
     proposalPursue && decision?.decisionBasisLinked === true;
   const proposalBackedPrepareBlocked =
     proposalPursue && decision?.decisionBasisLinked !== true;
+  const rematerializeDecisionId =
+    decision?.decisionId ?? continuityDecisionRef ?? null;
+  const legacyDocsWriteRematerializeReady = Boolean(
+    !decisionDefersExecution &&
+      rematerializeDecisionId &&
+      contract &&
+      isLegacyDocsWritePrepareContractView({
+        decisionId: rematerializeDecisionId,
+        executionContractId: contract.executionContractId,
+        action: contract.action,
+        target: contract.target,
+        scope: contract.scope,
+        constraints: contract.constraints,
+        requiredCapabilities: contract.requiredCapabilities,
+      }),
+  );

   function paintAttemptPhase(
     phase: GovernedExecutePhaseSuccess["phase"],
@@ -491,6 +514,7 @@ export function TrajectorySurface({
       setAuthorization(null);
       setAmendmentDraft("");
       setAmendmentNotice(null);
+      setContinuityDecisionRef(null);
       setExecutionContinuityReadStatus("error");
       return;
     }
@@ -501,6 +525,7 @@ export function TrajectorySurface({
       setAuthorization(null);
       setAmendmentDraft("");
       setAmendmentNotice(null);
+      setContinuityDecisionRef(null);
       setExecutionContinuityReadStatus("ready");
       return;
     }
@@ -519,6 +544,7 @@ export function TrajectorySurface({
       setAuthorization(null);
       setAmendmentDraft("");
       setAmendmentNotice(null);
+      setContinuityDecisionRef(null);
       setExecutionContinuityReadStatus("ready");
       return;
     }
@@ -542,6 +568,7 @@ export function TrajectorySurface({
         result.contract.inspectionDisclosure,
       ),
     });
+    setContinuityDecisionRef(result.decisionRef ?? null);
     setInspection(result.inspection);
     setAuthorization(null);
     setError(null);
@@ -901,6 +928,76 @@ export function TrajectorySurface({
     onDurableFactsChanged,
   ]);

+  const rematerializeLegacyDocsWriteContract = useCallback(async () => {
+    if (continuityMutationBlocked) return;
+    const decisionId = decision?.decisionId ?? continuityDecisionRef;
+    if (!decisionId || !contract) return;
+    if (
+      !isLegacyDocsWritePrepareContractView({
+        decisionId,
+        executionContractId: contract.executionContractId,
+        action: contract.action,
+        target: contract.target,
+        scope: contract.scope,
+        constraints: contract.constraints,
+        requiredCapabilities: contract.requiredCapabilities,
+      })
+    ) {
+      return;
+    }
+    setBusy("contract");
+    setError(null);
+    const result = await projectAssistantResolveLegacyM3DocsWriteAction({
+      projectId,
+      decisionId,
+    });
+    setBusy(null);
+    if (!result.ok) {
+      setError(result.message);
+      return;
+    }
+    const prepared = result.f3.successor;
+    setContract({
+      executionContractId: prepared.executionContractId,
+      version: prepared.version,
+      status: prepared.status,
+      action: prepared.action,
+      target: prepared.target,
+      scope: prepared.scope,
+      requiredAuthority: prepared.requiredAuthority,
+      constraints: [...prepared.constraints],
+      stopConditions: [...prepared.stopConditions],
+      requiredCapabilities: [...prepared.requiredCapabilities],
+      reversibility: prepared.reversibility,
+      semanticFingerprint: prepared.semanticFingerprint,
+      inspectionDisclosure: toInspectionDisclosureView(
+        prepared.inspectionDisclosure,
+      ),
+    });
+    setInspection(null);
+    setAuthorization(null);
+    setAmendmentDraft("");
+    setAmendmentNotice({
+      priorExecutionContractId: result.f3.original.executionContractId,
+      additionalConstraint:
+        "préparation historique → contrat d'exécution gouverné actuel",
+      statusLabel:
+        "CONTRAT ACTUALISÉ — RÉINSPECTION REQUISE AVANT CONFIRMATION",
+      priorInspectionDoesNotCoverSuccessor: true,
+    });
+    setAttempt(null);
+    setAttemptPhase(null);
+    setAttemptStatusLabel(null);
+    onDurableFactsChanged?.();
+  }, [
+    continuityMutationBlocked,
+    decision,
+    continuityDecisionRef,
+    contract,
+    projectId,
+    onDurableFactsChanged,
+  ]);
+
   const inspect = useCallback(async () => {
     if (continuityMutationBlocked) return;
     if (!contract) return;
@@ -2168,6 +2265,31 @@ export function TrajectorySurface({
             </div>
           ) : null}

+          {legacyDocsWriteRematerializeReady ? (
+            <div
+              className={styles.actions}
+              data-testid="w2-legacy-docs-write-rematerialize"
+            >
+              <p
+                className={styles.blockNote}
+                data-testid="w2-legacy-docs-write-rematerialize-note"
+              >
+                Cette préparation historique peut être actualisée en contrat
+                d&apos;exécution gouverné actuel. Aucune exécution n&apos;est
+                lancée — une nouvelle inspection sera requise.
+              </p>
+              <button
+                type="button"
+                className={styles.primaryAction}
+                data-testid="w2-rematerialize-legacy-docs-write"
+                onClick={() => void rematerializeLegacyDocsWriteContract()}
+                disabled={busy !== null || continuityMutationBlocked}
+              >
+                Actualiser le contrat d&apos;exécution
+              </button>
+            </div>
+          ) : null}
+
           <div className={styles.actions}>
             <button
               type="button"
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index d96e40e2..3c7b294e 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -25,6 +25,7 @@ import { confirmAndExecuteResolvedM3 } from "./f3/confirmAndExecuteResolvedM3";
 import { prepareF3Fixture } from "./f3/prepareF3Fixture";
 import { prepareM3FromDecision } from "./f3/prepareM3FromDecision";
 import { prepareAndResolveM3ProductPath } from "./f3/prepareAndResolveM3ProductPath";
+import { resolveExistingLegacyM3DocsWriteProductPath } from "./f3/resolveExistingLegacyM3DocsWriteProductPath";
 import { rehydrateEvidenceOutcomeFromLps } from "./f3/rehydrateEvidenceOutcomeFromLps";
 import { resolveF3EphemeralNotice } from "./f3/constants";
 import {
@@ -43,6 +44,7 @@ import type {
   ProjectAssistantPrepareF3Result,
   ProjectAssistantPrepareM3Result,
   ProjectAssistantPrepareResolvedM3Result,
+  ProjectAssistantResolveLegacyM3DocsWriteResult,
   ProjectAssistantRehydrateEvidenceOutcomeResult,
   ProjectAssistantSendResult,
 } from "./types";
@@ -597,6 +599,119 @@ export async function projectAssistantPrepareResolvedM3Action(input: {
   };
 }

+/**
+ * Legacy pre-#493 M3 PREPARE → canonical M4 docs_write successor rematerialization.
+ * Does NOT re-PREPARE. Routes existing canonical original into resolveM3ExecutionContract.
+ * Returns successor for Inspect → Confirmation. No StartExecution / Attempt / REAL.
+ */
+export async function projectAssistantResolveLegacyM3DocsWriteAction(input: {
+  projectId: string;
+  decisionId: string;
+  /** Hostile — ignored. */
+  mode?: unknown;
+  adapterRef?: unknown;
+  agentId?: unknown;
+  command?: unknown;
+  real?: unknown;
+  profile?: unknown;
+  action?: unknown;
+  target?: unknown;
+  scope?: unknown;
+  baseHeadSha?: unknown;
+  selectedAgentRef?: unknown;
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+}): Promise<ProjectAssistantResolveLegacyM3DocsWriteResult> {
+  void input.mode;
+  void input.adapterRef;
+  void input.agentId;
+  void input.command;
+  void input.real;
+  void input.profile;
+  void input.action;
+  void input.target;
+  void input.scope;
+  void input.baseHeadSha;
+  void input.selectedAgentRef;
+  void input.canActAsMorris;
+  void input.claimedAuthorityLevel;
+
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "prepare_error",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA indisponibles pour rematérialisation M3 legacy.",
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+
+  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
+  if (!projectResult.ok) {
+    return {
+      ok: false,
+      status: "project_not_found",
+      code: projectResult.error.code,
+      message: projectResult.error.message,
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+  const project = toContextDto(projectResult);
+
+  const resolved = await resolveExistingLegacyM3DocsWriteProductPath({
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+    currentContext: {
+      projectId: project.projectId,
+      lpsId: project.lpsId,
+      lpsVersion: project.lpsVersion,
+      doctrineDigest: project.doctrineDigest,
+      activeCycleInstanceId: project.activeCycleInstanceId,
+      ckcResolutionRef: project.ckcResolutionRef,
+    },
+    deps: {
+      decisionServices: runtime.oa.decisionServices,
+      authorityResolver: runtime.oa.authorityResolver,
+      executionContractServices: runtime.oa.executionContractServices,
+      executionAttemptServices: runtime.oa.executionAttemptServices,
+      nowIso: () => runtime.oa!.clock.nowIso(),
+    },
+  });
+
+  if (!resolved.ok) {
+    return {
+      ok: false,
+      status: resolved.code === "CONTEXT_STALE" ? "stale" : "prepare_error",
+      code: resolved.code,
+      message: resolved.message,
+      mode: "fixture",
+      retryable: resolved.code === "CONTEXT_STALE",
+    };
+  }
+
+  const f3 = resolved.payload;
+  return {
+    ok: true,
+    status: "ok",
+    mode: "m3_legacy_docs_write_resolved",
+    presentation: "unconfirmed",
+    text: [
+      "Contrat d'exécution actualisé — prêt à inspecter",
+      `Successeur ${f3.successor.executionContractId} v${f3.successor.version} (${f3.successor.status})`,
+      `Action ${f3.successor.action} · cible ${f3.successor.target} · scope ${f3.successor.scope}`,
+      "Nouvelle inspection requise — ancienne confirmation non transférée",
+      "AUCUNE EXÉCUTION RÉELLE",
+    ].join(" — "),
+    project,
+    ephemeralNotice:
+      "Préparation historique rematérialisée en contrat gouverné actuel. Inspection puis confirmation process-local. Cursor REAL bloqué.",
+    f3,
+  };
+}
+
 type ProjectAssistantPrepareF3FailureProposal =
   import("./f2/types").ProposalDto | null;

diff --git a/projects/sfia-studio/app/features/project-assistant/f3/index.ts b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
index 4a1f0872..a02263cb 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
@@ -59,6 +59,17 @@ export type {
   F3M3ResolvedPayload,
   PrepareAndResolveM3Deps,
 } from "./prepareAndResolveM3ProductPath";
+export { resolveExistingLegacyM3DocsWriteProductPath } from "./resolveExistingLegacyM3DocsWriteProductPath";
+export { isLegacyDocsWritePrepareContractView } from "./legacyDocsWritePrepareContractView";
+export type {
+  F3M3LegacyResolvedPayload,
+  ResolveExistingLegacyM3DocsWriteDeps,
+} from "./resolveExistingLegacyM3DocsWriteProductPath";
+export { qualifyDocsWriteM3Intent } from "./qualifyDocsWriteM3Intent";
+export type {
+  DocsWriteIntentQualification,
+  DocsWriteExecutionBasisLike,
+} from "./qualifyDocsWriteM3Intent";
 export { confirmAndExecuteF3Fixture } from "./confirmAndExecuteF3Fixture";
 export { confirmAndExecuteResolvedM3 } from "./confirmAndExecuteResolvedM3";
 export type { ConfirmExecuteResolvedM3Deps } from "./confirmAndExecuteResolvedM3";
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
index 062506e6..dd121802 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
@@ -19,11 +19,8 @@ import {
   type ResolveM3Deps,
   type ResolveM3Success,
 } from "./resolveM3ExecutionContract";
-import {
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
-  type GitCommandRunner,
-} from "@/lib/oa/execution-attempt";
+import { type GitCommandRunner } from "@/lib/oa/execution-attempt";
+import { qualifyDocsWriteM3Intent } from "./qualifyDocsWriteM3Intent";
 import { selectProductM3ResolutionProfile } from "./selectProductM3ResolutionProfile";
 import {
   resolveBoundedReadOnlyBaseHeadSha,
@@ -131,61 +128,22 @@ export async function prepareAndResolveM3ProductPath(input: {
     };
   }
   const executionBasis = decisionLoaded.decision.decisionBasis?.executionBasis;
-  const basisDocsWriteIntent =
-    executionBasis?.intentKind === "docs_write" ||
-    executionBasis?.requestedOperation?.trim() === M4_BOUNDED_DOCS_WRITE_ACTION;
-  const basisRequestedOp = executionBasis?.requestedOperation?.trim() ?? "";
-  const basisOpCompatible =
-    basisRequestedOp === "" ||
-    basisRequestedOp === M4_BOUNDED_DOCS_WRITE_ACTION;
-  const actionIsDocsWrite =
-    preparedContract.action === M4_BOUNDED_DOCS_WRITE_ACTION;
-  const capabilityIsDocsWrite = preparedContract.requiredCapabilities.includes(
-    M4_BOUNDED_DOCS_WRITE_CAPABILITY,
-  );
-
   // B2 — no authority widening: capability alone / action alone / incompatible
   // DecisionBasis never promote to bounded_docs_write. Explicit server prefer
   // remains a test escape hatch; client REAL flags never participate.
-  if (input.deps.preferBoundedDocsWriteProfile === true) {
-    // explicit server/test opt-in — still require coherent prepare action+cap
-    if (!actionIsDocsWrite || !capabilityIsDocsWrite) {
-      return {
-        ok: false,
-        code: "DOCS_WRITE_PROFILE_PREPARE_INCOHERENT",
-        message:
-          "preferBoundedDocsWriteProfile refusé — PREPARE action/capability docs_write incohérents.",
-      };
-    }
-  } else if (input.deps.preferBoundedDocsWriteProfile !== false) {
-    const partialDocsWriteMarker =
-      basisDocsWriteIntent || actionIsDocsWrite || capabilityIsDocsWrite;
-    const fullCanonicalDocsWrite =
-      basisDocsWriteIntent &&
-      basisOpCompatible &&
-      actionIsDocsWrite &&
-      capabilityIsDocsWrite;
-    if (partialDocsWriteMarker && !fullCanonicalDocsWrite) {
-      return {
-        ok: false,
-        code: "DOCS_WRITE_INTENT_INCOHERENT",
-        message:
-          "Intention docs_write incohérente (DecisionBasis / action / capability) — fail-closed, aucune promotion automatique.",
-      };
-    }
+  const intent = qualifyDocsWriteM3Intent({
+    executionBasis,
+    action: preparedContract.action,
+    requiredCapabilities: preparedContract.requiredCapabilities,
+    preferBoundedDocsWriteProfile: input.deps.preferBoundedDocsWriteProfile,
+  });
+  if (!intent.ok) {
+    return intent;
   }

-  const preferDocsWrite =
-    input.deps.preferBoundedDocsWriteProfile === true ||
-    (input.deps.preferBoundedDocsWriteProfile !== false &&
-      basisDocsWriteIntent &&
-      basisOpCompatible &&
-      actionIsDocsWrite &&
-      capabilityIsDocsWrite);
-
   const selected = selectProductM3ResolutionProfile({
     preferBoundedReadOnlyProfile: input.deps.preferBoundedReadOnlyProfile === true,
-    preferBoundedDocsWriteProfile: preferDocsWrite,
+    preferBoundedDocsWriteProfile: intent.preferDocsWrite,
   });

   let resolution = selected.profile;
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 75a5de97..b8521902 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -362,6 +362,30 @@ export type ProjectAssistantPrepareResolvedM3Result =
   | ProjectAssistantPrepareResolvedM3Success
   | ProjectAssistantPrepareResolvedM3Failure;

+export type ProjectAssistantResolveLegacyM3DocsWriteSuccess = {
+  ok: true;
+  status: "ok";
+  mode: "m3_legacy_docs_write_resolved";
+  presentation: "unconfirmed";
+  text: string;
+  project: ProjectAssistantContextDto;
+  ephemeralNotice: string;
+  f3: import("./f3/resolveExistingLegacyM3DocsWriteProductPath").F3M3LegacyResolvedPayload;
+};
+
+export type ProjectAssistantResolveLegacyM3DocsWriteFailure = {
+  ok: false;
+  status: "prepare_error" | "stale" | "project_not_found" | "validation_error";
+  code: string;
+  message: string;
+  mode: AssistantUiMode;
+  retryable: boolean;
+};
+
+export type ProjectAssistantResolveLegacyM3DocsWriteResult =
+  | ProjectAssistantResolveLegacyM3DocsWriteSuccess
+  | ProjectAssistantResolveLegacyM3DocsWriteFailure;
+
 export type ProjectAssistantExecuteF3Success = {
   ok: true;
   status: "ok";

```

## APPENDIX C — Complete test diffs

```diff
commit 844869fdf792284719f77bfd8e10cf43ebf75fee
Author: Morris Cleland <morris@e8616b0d-1fc3-4e2d-92d3-8e626c04ce19.home>
Date:   Thu Sep 17 02:09:13 2026 +0200

    feat(sfia-studio): rematerialize legacy docs-write successor

    Add a supported Product path that resolves an existing pre-#493 M3 PREPARE
    docs_write contract into the canonical M4 successor without re-PREPARE,
    preserving DecisionBasis lineage and requiring fresh inspection/confirmation.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 1917178d..c5be33db 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -15,6 +15,7 @@ const {
   amendMock,
   prepareContractMock,
   prepareM3Mock,
+  resolveLegacyMock,
   executeSelectMock,
   executeStartMock,
   executeCompleteMock,
@@ -33,6 +34,7 @@ const {
   amendMock: vi.fn(),
   prepareContractMock: vi.fn(),
   prepareM3Mock: vi.fn(),
+  resolveLegacyMock: vi.fn(),
   executeSelectMock: vi.fn(),
   executeStartMock: vi.fn(),
   executeCompleteMock: vi.fn(),
@@ -52,6 +54,8 @@ const {
 vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantPrepareResolvedM3Action: (...args: unknown[]) =>
     prepareM3Mock(...args),
+  projectAssistantResolveLegacyM3DocsWriteAction: (...args: unknown[]) =>
+    resolveLegacyMock(...args),
 }));

 vi.mock("@/features/project-assistant/w2/actions", () => ({
@@ -109,6 +113,7 @@ beforeEach(() => {
   amendMock.mockReset();
   prepareContractMock.mockReset();
   prepareM3Mock.mockReset();
+  resolveLegacyMock.mockReset();
   executeSelectMock.mockReset();
   executeStartMock.mockReset();
   executeCompleteMock.mockReset();
@@ -1605,6 +1610,179 @@ describe("JOURNEY-INTEGRITY — Proposal-backed PREPARE (sealed operation)", ()
     expect(inspectMock).not.toHaveBeenCalled();
   });

+  it("D01 — legacy PREPARE_ONLY EC shows Actualiser CTA; hides generic PREPARE; rematerialize projects successor", async () => {
+    const decisionId = "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411";
+    const originalId = `xct:m3:${decisionId}`;
+    readGovernedExecutionContinuityMock.mockResolvedValue({
+      ok: true,
+      kind: "active",
+      decisionRef: decisionId,
+      contract: {
+        executionContractId: originalId,
+        version: 3,
+        status: "confirmed",
+        action: "cursor.docs_write.apply",
+        target: "workspace.isolated.docs_write",
+        scope: "docs_write borné — cycle actif — aucune exécution automatique",
+        requiredAuthority: "MORRIS",
+        constraints: [
+          "PREPARE_ONLY",
+          "NO_CURSOR_REAL",
+          "NO_ATTEMPT",
+          "NO_GATE_D",
+        ],
+        stopConditions: ["AUCUNE EXÉCUTION", "AUTHORITY_DENIED"],
+        requiredCapabilities: ["cap:cursor.docs_write"],
+        reversibility: "irreversible",
+        semanticFingerprint: "fp-legacy",
+        effectConfirmationRequired: true,
+        effectConfirmationLevel: "N3",
+        inspectionDisclosure: {
+          action: "cursor.docs_write.apply",
+          technicalTarget: "workspace.isolated.docs_write",
+          scope: "docs_write borné — cycle actif — aucune exécution automatique",
+          targetRepositoryRef: "mcleland147/sfia-workspace",
+          targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+          scopeIn: ["projects/sfia-studio/.sandbox"],
+          scopeOut: [],
+          createOrModify: true,
+          noDelete: true,
+          objective: null,
+          artifactType: null,
+          artifactBrief: null,
+          contentRequirements: null,
+          validationExpectations: null,
+          expectedOutputs: ["projects/sfia-studio/.sandbox/gestion-de-taches.md"],
+          evidenceRequirements: [],
+          requiredAuthority: "MORRIS",
+          requiredCapabilities: ["cap:cursor.docs_write"],
+          constraints: ["PREPARE_ONLY"],
+          stopConditions: ["AUTHORITY_DENIED"],
+          reversibility: "irreversible",
+          contractVersion: 3,
+          executionContractId: originalId,
+          semanticFingerprint: "fp-legacy",
+          disclosureComplete: true,
+          incompletenessCode: null,
+        },
+      },
+      inspection: {
+        executionContractId: originalId,
+        contractVersion: 3,
+        semanticFingerprint: "fp-legacy",
+        statusLabel: "INSPECTÉ · inspecter n'autorise pas",
+        inspectionSufficient: true,
+        attestationRef: "insp:legacy",
+        attestedVersion: 3,
+        staleAttestationRef: null,
+        reinspectionRequired: false,
+        reason: null,
+        grantsAuthority: false,
+      },
+    });
+
+    resolveLegacyMock.mockResolvedValue({
+      ok: true,
+      status: "ok",
+      mode: "m3_legacy_docs_write_resolved",
+      presentation: "unconfirmed",
+      text: "ok",
+      project: { projectId: "prj:legacy" },
+      ephemeralNotice: "notice",
+      f3: {
+        turnKind: "f3_m3_legacy_docs_write_resolved",
+        mode: "M3_RESOLVED_BOUNDED_DOCS_WRITE",
+        decisionId,
+        projectId: "prj:legacy",
+        original: {
+          executionContractId: originalId,
+          version: 3,
+          status: "superseded",
+        },
+        successor: {
+          executionContractId: `xct:m3-res:${decisionId}`,
+          version: 1,
+          status: "confirmation_required",
+          action: "cursor.docs_write.apply",
+          target: "workspace.isolated.docs_write",
+          scope: "studio.gcec.docs_write",
+          requiredAuthority: "MORRIS",
+          constraints: ["BOUNDED DOCS-WRITE", "GATE D REQUIRED"],
+          stopConditions: ["GATE_D_REQUIRED"],
+          requiredCapabilities: ["cap:cursor.docs_write"],
+          reversibility: "reversible",
+          supersedesExecutionContractId: originalId,
+          supersessionReason: "bounded docs-write",
+          semanticFingerprint: "fp-successor",
+          evidenceRequirements: [],
+          inspectionDisclosure: {
+            action: "cursor.docs_write.apply",
+            technicalTarget: "workspace.isolated.docs_write",
+            scope: "studio.gcec.docs_write",
+            targetRepositoryRef: "mcleland147/sfia-workspace",
+            targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
+            scopeIn: ["projects/sfia-studio/.sandbox"],
+            scopeOut: [],
+            createOrModify: true,
+            noDelete: true,
+            objective: null,
+            artifactType: null,
+            artifactBrief: null,
+            contentRequirements: null,
+            validationExpectations: null,
+            expectedOutputs: null,
+            evidenceRequirements: [],
+            requiredAuthority: "MORRIS",
+            requiredCapabilities: ["cap:cursor.docs_write"],
+            constraints: ["BOUNDED DOCS-WRITE"],
+            stopConditions: ["GATE_D_REQUIRED"],
+            reversibility: "reversible",
+            contractVersion: 1,
+            executionContractId: `xct:m3-res:${decisionId}`,
+            semanticFingerprint: "fp-successor",
+            disclosureComplete: true,
+            incompletenessCode: null,
+          },
+        },
+        reusedFromIdempotency: false,
+        executionPerformed: false,
+        attemptCreated: false,
+        confirmationRequired: true,
+        realExecution: false,
+        disclosures: [],
+      },
+    });
+
+    render(<TrajectorySurface projectId="prj:legacy-remat" />);
+    expect(await screen.findByTestId("w2-contract")).toBeVisible();
+    expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
+    expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
+    expect(
+      await screen.findByTestId("w2-legacy-docs-write-rematerialize"),
+    ).toBeVisible();
+    expect(
+      screen.getByTestId("w2-rematerialize-legacy-docs-write"),
+    ).toBeVisible();
+
+    fireEvent.click(screen.getByTestId("w2-rematerialize-legacy-docs-write"));
+    expect(await screen.findByTestId("w2-amendment-notice")).toBeVisible();
+    expect(screen.getByTestId("w2-amendment-status")).toHaveTextContent(
+      /CONTRAT ACTUALISÉ/i,
+    );
+    expect(screen.getByTestId("w2-contract-scope")).toHaveTextContent(
+      "studio.gcec.docs_write",
+    );
+    expect(screen.getByTestId("w2-contract-id-tech")).toHaveTextContent(
+      `xct:m3-res:${decisionId}`,
+    );
+    expect(screen.queryByTestId("w2-legacy-docs-write-rematerialize")).toBeNull();
+    expect(resolveLegacyMock).toHaveBeenCalledWith({
+      projectId: "prj:legacy-remat",
+      decisionId,
+    });
+    expect(prepareM3Mock).not.toHaveBeenCalled();
+  });
+
   it("EC rehydration — pending continuity hides generic Instruire les options", async () => {
     let resolveContinuity: (value: unknown) => void = () => {};
     readGovernedExecutionContinuityMock.mockReturnValue(
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts
index c4e5c41e..0dde7939 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts
@@ -1296,6 +1296,356 @@ describe("P1 — SQLite TEMP fresh-runtime restart", () => {
   });
 });

+describe("D01 — legacy M3 PREPARE → M4 successor rematerialization", () => {
+  async function bootLegacyPrepareOnly(suffix: string, withBoundary: boolean) {
+    const ctx = await bootDocsWriteJourney(suffix, withBoundary);
+    const { prepareM3FromDecision } = await import(
+      "@/features/project-assistant/f3/prepareM3FromDecision"
+    );
+    const prepared = await prepareM3FromDecision({
+      projectId: ctx.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: ctx.currentContext,
+      deps: {
+        decisionServices: ctx.oa.decisionServices,
+        authorityResolver: ctx.oa.authorityResolver,
+        executionContractServices: ctx.oa.executionContractServices,
+        nowIso: () => ctx.oa.clock.nowIso(),
+        forceM3Authority: true,
+      },
+    });
+    expect(prepared.ok).toBe(true);
+    if (!prepared.ok) throw new Error(prepared.message);
+    expect(prepared.payload.contract.constraints).toContain("PREPARE_ONLY");
+    expect(prepared.payload.contract.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
+    expect(prepared.payload.contract.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
+    expect(prepared.payload.contract.scope).not.toBe(M4_BOUNDED_DOCS_WRITE_SCOPE);
+
+    await inspectExecutionContract({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: prepared.payload.contract.executionContractId,
+    });
+    const confirmed = await confirmExecutionContractForAuthorization({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId: prepared.payload.contract.executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(confirmed.ok).toBe(true);
+    if (!confirmed.ok) throw new Error(confirmed.message ?? confirmed.code);
+
+    const loaded =
+      await ctx.oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: prepared.payload.contract.executionContractId,
+      });
+    expect(loaded.ok).toBe(true);
+    if (!loaded.ok) throw new Error("load");
+    expect(loaded.contract.status).toBe("confirmed");
+    expect(loaded.contract.constraints).toContain("PREPARE_ONLY");
+
+    return { ...ctx, originalId: prepared.payload.contract.executionContractId };
+  }
+
+  it("legacy confirmed PREPARE_ONLY → rematerialize → M4 successor without re-PREPARE", async () => {
+    const { resolveExistingLegacyM3DocsWriteProductPath } = await import(
+      "@/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath"
+    );
+    const { prepareM3FromDecision } = await import(
+      "@/features/project-assistant/f3/prepareM3FromDecision"
+    );
+    const ctx = await bootLegacyPrepareOnly("leg01", true);
+
+    const rePrepare = await prepareM3FromDecision({
+      projectId: ctx.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: ctx.currentContext,
+      deps: {
+        decisionServices: ctx.oa.decisionServices,
+        authorityResolver: ctx.oa.authorityResolver,
+        executionContractServices: ctx.oa.executionContractServices,
+        nowIso: () => ctx.oa.clock.nowIso(),
+        forceM3Authority: true,
+      },
+    });
+    expect(rePrepare.ok).toBe(false);
+
+    const remat = await resolveExistingLegacyM3DocsWriteProductPath({
+      projectId: ctx.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: ctx.currentContext,
+      real: true,
+      profile: "hostile",
+      agentId: "agt:hostile",
+      deps: {
+        decisionServices: ctx.oa.decisionServices,
+        authorityResolver: ctx.oa.authorityResolver,
+        executionContractServices: ctx.oa.executionContractServices,
+        executionAttemptServices: ctx.oa.executionAttemptServices,
+        nowIso: () => ctx.oa.clock.nowIso(),
+        forceM3Authority: true,
+        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
+      },
+    });
+    expect(remat.ok).toBe(true);
+    if (!remat.ok) return;
+    expect(remat.payload.mode).toBe("M3_RESOLVED_BOUNDED_DOCS_WRITE");
+    expect(remat.payload.executionPerformed).toBe(false);
+    expect(remat.payload.attemptCreated).toBe(false);
+    expect(remat.payload.realExecution).toBe(false);
+    expect(remat.payload.successor.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
+    expect(remat.payload.successor.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
+    expect(remat.payload.successor.scope).toBe(M4_BOUNDED_DOCS_WRITE_SCOPE);
+    expect(remat.payload.successor.constraints).not.toContain("PREPARE_ONLY");
+    expect(remat.payload.successor.constraints).not.toContain("NO_CURSOR_REAL");
+    expect(remat.payload.successor.constraints).not.toContain("NO_ATTEMPT");
+    expect(remat.payload.successor.constraints).not.toContain("NO_GATE_D");
+    expect(remat.payload.successor.supersedesExecutionContractId).toBe(
+      ctx.originalId,
+    );
+    expect(remat.payload.successor.requiredCapabilities).toContain(
+      "cap:cursor.docs_write",
+    );
+
+    const original =
+      await ctx.oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: ctx.originalId,
+      });
+    expect(original.ok).toBe(true);
+    if (!original.ok) return;
+    expect(original.contract.status).toBe("superseded");
+    expect(original.contract.constraints).toContain("PREPARE_ONLY");
+  });
+
+  it("legacy rematerialize → inspect → confirm → AUTHORIZED → Fake execute one Attempt + Evidence", async () => {
+    const { resolveExistingLegacyM3DocsWriteProductPath } = await import(
+      "@/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath"
+    );
+    const ctx = await bootLegacyPrepareOnly("leg02", true);
+    const remat = await resolveExistingLegacyM3DocsWriteProductPath({
+      projectId: ctx.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: ctx.currentContext,
+      deps: {
+        decisionServices: ctx.oa.decisionServices,
+        authorityResolver: ctx.oa.authorityResolver,
+        executionContractServices: ctx.oa.executionContractServices,
+        executionAttemptServices: ctx.oa.executionAttemptServices,
+        nowIso: () => ctx.oa.clock.nowIso(),
+        forceM3Authority: true,
+        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
+      },
+    });
+    expect(remat.ok).toBe(true);
+    if (!remat.ok) return;
+    const executionContractId = remat.payload.successor.executionContractId;
+
+    const blocked = await evaluateExecutionAuthorization({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(blocked.ok).toBe(true);
+    if (!blocked.ok) return;
+    expect(blocked.outcome).toBe("BLOCKED");
+
+    await inspectExecutionContract({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId,
+    });
+    await confirmExecutionContractForAuthorization({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId,
+      forceLocalAuthority: true,
+    });
+    const authorized = await evaluateExecutionAuthorization({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(authorized.ok).toBe(true);
+    if (!authorized.ok) return;
+    expect(authorized.outcome).toBe("AUTHORIZED");
+
+    const launchBefore = ctx.fakeLaunch.calls.length;
+    const executed = await governedExecuteAuthorizedContract({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(executed.ok).toBe(true);
+    if (!executed.ok) return;
+    expect(executed.attemptStatus).toBe("succeeded");
+    expect(ctx.fakeLaunch.calls.length).toBe(launchBefore + 1);
+    expect(executed.realExecution).toBe(false);
+    expect(executed.boundaryProofMode).toBe("deterministic_fake");
+
+    const listed =
+      await ctx.oa.executionAttemptServices.listExecutionAttempts.execute({
+        executionContractId,
+      });
+    expect(listed.ok).toBe(true);
+    if (!listed.ok) return;
+    expect(listed.attempts.filter((a) => a.status === "succeeded")).toHaveLength(
+      1,
+    );
+    const evidence = await ctx.oa.evidenceReviewServices.repository.listByProject(
+      ctx.projectId,
+    );
+    expect(
+      evidence.some((e) => e.bindings?.executionAttemptId === executed.attemptId),
+    ).toBe(true);
+  });
+
+  it("idempotent rematerialize reuses successor — no second supersession", async () => {
+    const { resolveExistingLegacyM3DocsWriteProductPath } = await import(
+      "@/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath"
+    );
+    const ctx = await bootLegacyPrepareOnly("leg03", true);
+    const first = await resolveExistingLegacyM3DocsWriteProductPath({
+      projectId: ctx.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: ctx.currentContext,
+      deps: {
+        decisionServices: ctx.oa.decisionServices,
+        authorityResolver: ctx.oa.authorityResolver,
+        executionContractServices: ctx.oa.executionContractServices,
+        executionAttemptServices: ctx.oa.executionAttemptServices,
+        nowIso: () => ctx.oa.clock.nowIso(),
+        forceM3Authority: true,
+        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
+      },
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+    const second = await resolveExistingLegacyM3DocsWriteProductPath({
+      projectId: ctx.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: ctx.currentContext,
+      deps: {
+        decisionServices: ctx.oa.decisionServices,
+        authorityResolver: ctx.oa.authorityResolver,
+        executionContractServices: ctx.oa.executionContractServices,
+        executionAttemptServices: ctx.oa.executionAttemptServices,
+        nowIso: () => ctx.oa.clock.nowIso(),
+        forceM3Authority: true,
+        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
+      },
+    });
+    expect(second.ok).toBe(true);
+    if (!second.ok) return;
+    expect(second.payload.reusedFromIdempotency).toBe(true);
+    expect(second.payload.successor.executionContractId).toBe(
+      first.payload.successor.executionContractId,
+    );
+  });
+
+  it("prior Attempt on original blocks rematerialization", async () => {
+    const { resolveExistingLegacyM3DocsWriteProductPath } = await import(
+      "@/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath"
+    );
+    const ctx = await bootLegacyPrepareOnly("leg04", true);
+    const blocked = await resolveExistingLegacyM3DocsWriteProductPath({
+      projectId: ctx.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: ctx.currentContext,
+      deps: {
+        decisionServices: ctx.oa.decisionServices,
+        authorityResolver: ctx.oa.authorityResolver,
+        executionContractServices: ctx.oa.executionContractServices,
+        executionAttemptServices: {
+          listExecutionAttempts: {
+            execute: async () =>
+              ({
+                ok: true as const,
+                attempts: [
+                  {
+                    attemptId: "att:hostile",
+                    executionContractId: ctx.originalId,
+                    status: "failed",
+                  },
+                ],
+              }) as never,
+          },
+        } as never,
+        nowIso: () => ctx.oa.clock.nowIso(),
+        forceM3Authority: true,
+        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
+      },
+    });
+    expect(blocked.ok).toBe(false);
+    if (blocked.ok) return;
+    expect(blocked.code).toBe("LEGACY_PRIOR_ATTEMPT_EXISTS");
+  });
+
+  it("wrong project lineage blocked", async () => {
+    const { resolveExistingLegacyM3DocsWriteProductPath } = await import(
+      "@/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath"
+    );
+    const ctx = await bootLegacyPrepareOnly("leg05", true);
+    const blocked = await resolveExistingLegacyM3DocsWriteProductPath({
+      projectId: "prj:wrong-project",
+      decisionId: ctx.decisionId,
+      currentContext: { ...ctx.currentContext, projectId: "prj:wrong-project" },
+      deps: {
+        decisionServices: ctx.oa.decisionServices,
+        authorityResolver: ctx.oa.authorityResolver,
+        executionContractServices: ctx.oa.executionContractServices,
+        executionAttemptServices: ctx.oa.executionAttemptServices,
+        nowIso: () => ctx.oa.clock.nowIso(),
+        forceM3Authority: true,
+        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
+      },
+    });
+    expect(blocked.ok).toBe(false);
+    if (blocked.ok) return;
+    expect(blocked.code).toMatch(/PROJECT_MISMATCH|CONTRACT_PROJECT/);
+  });
+
+  it("presentation helper rejects already-current M4 successor id", async () => {
+    const { isLegacyDocsWritePrepareContractView } = await import(
+      "@/features/project-assistant/f3/legacyDocsWritePrepareContractView"
+    );
+    expect(
+      isLegacyDocsWritePrepareContractView({
+        decisionId: "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+        executionContractId:
+          "xct:m3-res:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+        action: M4_BOUNDED_DOCS_WRITE_ACTION,
+        target: M4_BOUNDED_DOCS_WRITE_TARGET,
+        scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
+        constraints: ["BOUNDED DOCS-WRITE"],
+      }),
+    ).toBe(false);
+    expect(
+      isLegacyDocsWritePrepareContractView({
+        decisionId: "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+        executionContractId:
+          "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+        action: M4_BOUNDED_DOCS_WRITE_ACTION,
+        target: M4_BOUNDED_DOCS_WRITE_TARGET,
+        scope: "docs_write borné — cycle actif — aucune exécution automatique",
+        constraints: ["PREPARE_ONLY", "NO_CURSOR_REAL", "NO_ATTEMPT", "NO_GATE_D"],
+      }),
+    ).toBe(true);
+  });
+
+  it("SFIA_STUDIO_CURSOR_REAL=1 alone never selects docs_write profile", () => {
+    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
+    expect(
+      selectProductM3ResolutionProfile({
+        env: { SFIA_STUDIO_CURSOR_REAL: "1", NODE_ENV: "test" },
+      }).kind,
+    ).not.toBe("bounded_docs_write");
+    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
+  });
+});
+
 describe("smoke — env REAL off", () => {
   it("SFIA_STUDIO_CURSOR_REAL and OPS1_CURSOR_REAL remain off", () => {
     assertRealOff();
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 63e6d71f..18df0e0e 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -85,6 +85,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/confirmAndExecuteResolvedM3.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/f3/prepareAndResolveM3ProductPath.ts:@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha",
+      "features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath.ts:@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha",
       "features/project-assistant/f3/selectProductM3ResolutionProfile.ts:@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary",
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",

```
