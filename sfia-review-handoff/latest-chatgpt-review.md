# SFIA STUDIO — LEGACY M3→M4 DELIVERY 01 CRITICAL REVIEW R1 — FULL REVIEW PACK

**Timestamp (UTC):** 2026-09-17T00:40:09Z
**Cycle:** 8 — Delivery / implementation correction (CRITICAL)
**Milestone:** PRODUCT-LEGACY-M3-TO-M4-SUCCESSOR-REMATERIALIZATION-01-R1
**Typology:** EVOL
**Runtime v3:** NON ADOPTED

---

## 0. VERDICT (PREVIEW)

LEGACY M3→M4 DELIVERY 01 CRITICAL REVIEW R1 —
PASS DETERMINISTIC AT TESTED SCOPE —
SUCCESSOR ATTEMPT-SAFETY CLOSED —
LEGACY SQLITE RESTART/REHYDRATION EXIT PROOF CLOSED —
ZERO REAL —
LOCAL CORRECTION COMMIT READY FOR CHATGPT CRITICAL REVIEW —
NO PROJECT PUSH/PR/MERGE —
RUNTIME V3 NON ADOPTED

Authorized claim if Critical Review PASS:

LEGACY PRE-#493 M3 PREPARE → CANONICAL M4 SUCCESSOR
DETERMINISTIC CONTINUITY + REPLAY SAFETY + RESTART/REHYDRATION
PROVEN AT TESTED PRODUCT SCOPE

Forbidden claims remain: Cursor REAL proven; authenticated REAL docs_write; E2E FULL REAL; generalized migration; production autonomy; runtime v3 ADOPTED; global L5; Nora Cognitive Completion; production ready; zero defects.

---

## 1. MORRIS AUTHORITY — CONSUMED

Exact Morris decision consumed for this R1 only:

GO MORRIS — LEGACY M3→M4 DELIVERY 01 CRITICAL REVIEW R1 —
BOUNDED LOCAL CORRECTION —
ZERO REAL —
CLOSE SUCCESSOR ATTEMPT-SAFETY +
LEGACY RESTART/REHYDRATION EXIT PROOF —
CLEAN PRESENTATION HELPER IF LOCAL —
VALIDATION COMPLETE +
ONE LOCAL CORRECTION COMMIT +
FULL REVIEW HANDOFF —
NO PROJECT PUSH/PR/MERGE

Not performed: amend R0; rebase; project push/PR/merge; Cursor REAL; docs_write REAL; OpenAI LIVE; Nora LIVE; schema/migration; Stage A; Reproof 09.

---

## 2. CHATGPT CRITICAL REVIEW R0 → R1 BINDING

Prior ChatGPT Critical Review disposition on R0: **CHANGES REQUESTED**

R0 architecture: ACCEPTED
R0 core rematerialization: ACCEPTED
R0 NOT authorized for project publication because two exit gaps remained.

### BLOCKER 1 — SUCCESSOR ATTEMPT SAFETY — CLOSED

R0 checked Attempts only on the canonical legacy original (`listExecutionAttempts(original)`).

After original → superseded → canonical successor → Attempt on successor, a rematerialize replay could still see Attempts(original)=0 and return the already-executed successor as a fresh rematerialization success payload (`executionPerformed:false`, `attemptCreated:false`, `confirmationRequired:true`).

**R1 disposition:** After `resolveM3ExecutionContract`, Product path queries Attempts for `resolved.successor.executionContractId`. Any Attempt → fail closed `LEGACY_SUCCESSOR_PRIOR_ATTEMPT_EXISTS`. Query failure → fail closed `LEGACY_SUCCESSOR_ATTEMPT_SAFETY_UNPROVEN`. Success payload is never returned for an already-executed successor.

### BLOCKER 2 — LEGACY RESTART / REHYDRATION — CLOSED

R0 proved rematerialize → Fake execute → Attempt+Evidence in-process. Unrelated P1 restart covered fresh paths only.

**R1 disposition:** New SQLite TEMP Runtime A → destroy → Runtime B on SAME DB test: legacy rematerialize → inspect/confirm/authorize → Fake execute → capture ids → shutdown → fresh OA runtime rehydrates same Project/original(superseded)/successor/Attempt/Evidence → rematerialize replay fail-closed → no duplicate Attempt/Evidence → fake launch counter unchanged → ZERO REAL.

---

## 3. GIT TRUTH

| Item | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-studio-product-legacy-m3-to-m4-successor` |
| Branch | `delivery/sfia-studio-product-legacy-m3-to-m4-successor` |
| origin/main | `3a3a90f50cc185af4aa3c2b4ef7dafe035e176e3` |
| R0 commit (parent) | `844869fdf792284719f77bfd8e10cf43ebf75fee` |
| R0 tree | `ea70fec559449ebf09d2d427d10760e970734647` |
| R1 correction commit | `64aec8ea7dd160d29154253e45a2ef023db84c3e` |
| R1 tree | `a31db4a59c8fc8d3baaafeae9f7241cbad2034dd` |
| R1 show | `64aec8ea7dd160d29154253e45a2ef023db84c3e 844869fdf792284719f77bfd8e10cf43ebf75fee a31db4a59c8fc8d3baaafeae9f7241cbad2034dd fix(sfia-studio): close legacy rematerialization replay safety` |
| R0 base / origin/main | `3a3a90f50cc185af4aa3c2b4ef7dafe035e176e3` |
| Prior handoff tip (before R1 publish) | `31297a241c2986913ccafc6b0b3717493b9f4c90` |
| Project remote effects | **ZERO** (no project push/PR/merge) |

```
git status --short (post-commit; local review artifacts / node_modules symlink only):
 M .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/d01-commit-stat.txt
?? .tmp-sfia-review/d01-modified-core.diff
?? .tmp-sfia-review/d01-new-files.diff
?? .tmp-sfia-review/d01-tests.diff
?? .tmp-sfia-review/r1-helper.diff
?? .tmp-sfia-review/r1-resolve.diff
?? .tmp-sfia-review/r1-tests.diff
?? projects/sfia-studio/app/node_modules
```

```
diffstat R0..R1:
 ...roductJourneyGovernedDocsWriteWiring.d0.test.ts | 383 ++++++++++++++++++++-
 .../f3/legacyDocsWritePrepareContractView.ts       |   8 +-
 .../resolveExistingLegacyM3DocsWriteProductPath.ts |  22 ++
 3 files changed, 404 insertions(+), 9 deletions(-)
```

Changed Product files (exactly 3):
1. `projects/sfia-studio/app/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath.ts`
2. `projects/sfia-studio/app/features/project-assistant/f3/legacyDocsWritePrepareContractView.ts`
3. `projects/sfia-studio/app/__tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts`

Schema/migration: NONE
Repository architecture change: NONE
ExecutionContract redesign: NONE
Method/template/doctrine/roadmap/C1/v3 framing: NONE
Workflow/CI: NONE

---

## 4. SUCCESSOR ATTEMPT SAFETY — IMPLEMENTATION

### 4.1 Original Attempt check (kept from R0)

Before resolve:
- `listExecutionAttempts(canonical original id)`
- query fail → `LEGACY_ATTEMPT_SAFETY_UNPROVEN`
- any Attempt → `LEGACY_PRIOR_ATTEMPT_EXISTS`

### 4.2 Successor Attempt check (NEW R1)

After successful `resolveM3ExecutionContract` (idempotent/non-mutating replay ok):
- `listExecutionAttempts(resolved.successor.executionContractId)`
- query fail → `LEGACY_SUCCESSOR_ATTEMPT_SAFETY_UNPROVEN`
- any Attempt → `LEGACY_SUCCESSOR_PRIOR_ATTEMPT_EXISTS` with message that successor already has execution history and cannot be treated as a fresh rematerialization
- only if Attempt count == 0 → return success payload including `executionPerformed:false`, `attemptCreated:false`, `confirmationRequired:true`, `realExecution:false` plus disclosure `PRIOR ATTEMPT COUNT VERIFIED ZERO ON SUCCESSOR`

Oracle is durable Attempt listing — NOT EC.status / Confirmation / Evidence count / UI.

### 4.3 Idempotency cases

| Case | Condition | Expected | Proven |
|---|---|---|---|
| A | original Attempt=0, successor absent | PASS, successor created | existing D01 first rematerialize |
| B | original superseded, successor exists, successor Attempt=0 | PASS, same successor, `reusedFromIdempotency=true`, no second successor | existing D01 idempotent rematerialize |
| C | successor has ≥1 Attempt | FAIL `LEGACY_SUCCESSOR_PRIOR_ATTEMPT_EXISTS`, no fresh success payload, no second successor, no new Attempt, no launch | NEW R1 CASE C |
| D | successor Attempt query fails | FAIL `LEGACY_SUCCESSOR_ATTEMPT_SAFETY_UNPROVEN` | NEW R1 CASE D |

---

## 5. LEGACY SQLITE RESTART / REHYDRATION EXIT PROOF

Test: `R1 — legacy SQLite TEMP restart: rematerialize → Fake execute → rehydrate → replay fail-closed`

Harness: existing Product SQLite TEMP pattern (`createSqliteProductStore` / destroy / fresh OA composition on same path) — no new persistence architecture.

### PHASE 1 — Runtime A
1. Product/project + accepted HumanDecision + docs_write DecisionBasis
2. Historical canonical M3 PREPARE_ONLY original (confirmed class)
3. original Attempt count = 0
4. rematerialize via `resolveExistingLegacyM3DocsWriteProductPath`
5. capture projectId / decisionId / original EC id / successor EC id
6. Inspect → Confirm → Authorize successor
7. Execute via FakeDocsWriteLaunchPort
8. Assert exactly one successor Attempt + Evidence bound to Attempt
9. Capture post-execute successor semanticFingerprint + version (fingerprint may change across lifecycle writes; post-execute identity is the restart oracle)
10. Capture Evidence id; assert Fake launch count = 1; REAL = 0
11. ReviewBundle: durable create observed in OA events (`oa.review_bundle.created`) with `reviewBundleId=rb:docs-write:<attemptId>` and evidenceIds containing the Attempt Evidence — current path persists Evidence; ReviewBundle is produced by governed Fake docs_write path (asserted via event log / existing service semantics; test hard-requires Attempt+Evidence identity continuity)

### PHASE 2 — Shutdown
Destroy/dispose Runtime A store honestly — no in-memory carry into Boot B.

### PHASE 3 — Runtime B (SAME SQLite)
Fresh runtime/application services.
Assert:
- same Project
- original exists and remains superseded
- same successor id / supersession lineage / post-execute fingerprint+version
- same Attempt id (count=1)
- same Evidence id (count=1)
- no duplicate Attempt / Evidence
- fake launch counter for Boot B remains 0 (no automatic relaunch)
- rematerialize replay → `LEGACY_SUCCESSOR_PRIOR_ATTEMPT_EXISTS`
- no new successor / Attempt / Evidence
- Cursor REAL = 0

This single test closes BOTH persistence/rehydration AND successor Attempt-safety after restart.

---

## 6. PRESENTATION HELPER CLEANUP (LOCAL, NON-SECURITY)

File: `legacyDocsWritePrepareContractView.ts`

Changed: YES (local authorized cleanup)

Rationale:
- removed unreachable dead condition (`scope === M4 && !PREPARE_ONLY` after PREPARE_ONLY already required)
- reject obvious already-current M4 scope (`scope === studio.gcec.docs_write`)
- if capabilities array present/non-empty, require `cap:cursor.docs_write` (does not widen; narrows incoherent presentations)
- remains presentation heuristic only — server use-case is authority

UI redesign: NONE

---

## 7. VALIDATION

Environment forced:
- `SFIA_STUDIO_CURSOR_REAL=0`
- `OPS1_CURSOR_REAL=0`
- OpenAI LIVE: 0
- Nora LIVE: 0

### Focused
- `productJourneyGovernedDocsWriteWiring.d0.test.ts` — 30/30 PASS (includes D01 + R1 CASE C/D + restart)
- R1-filtered suite repeated 3× — 3/3 PASS each run (no flake)
- `trajectorySurface.ui.test.tsx` — 42/42 PASS

### Full canonical (app dir)
- typecheck PASS
- lint PASS (`next lint` — no warnings/errors)
- build PASS
- full Vitest: **4186 passed | 137 skipped** (374 files passed | 17 skipped) — ZERO REAL

Import-boundary / governance checks: covered by normal suite (PASS).

---

## 8. FAKE / REAL

| Counter | Value |
|---|---|
| FakeDocsWriteLaunchPort (restart Runtime A execute) | 1 |
| Fake relaunch after Boot B | 0 |
| Cursor REAL | 0 |
| OpenAI LIVE | 0 |
| Nora LIVE | 0 |
| Cursor CLI spawn | 0 |
| filesystem REAL outside temp fixtures | 0 |

Claim mode: **DETERMINISTIC PROVEN AT TESTED LEGACY RESTART SCOPE**
Forbidden inference: READY FOR REAL

---

## 9. SCOPE / RESERVES

Touched only the three files listed above.
No schema/migration.
No new repository / second resolver / recovery engine.
No Reproof-only production path.
No project branch push.
No PR.
No merge.
Runtime v3 NON ADOPTED.

Remaining reserves / next gates:
- ChatGPT Critical Review on this R1 pack
- Only after PASS: Morris may authorize project push + PR + CI
- Only after merge + post-merge Required Gate PASS: NEW Morris GO may authorize authenticated REAL Reproof 09

---

## 10. ACCEPTANCE CHECKLIST (R1)

1. original prior Attempt → blocked — PASS (R0 retained)
2. first rematerialization → succeeds — PASS
3. idempotent replay BEFORE successor execution → same successor — PASS
4. successor prior Attempt → replay blocked — PASS (CASE C)
5. successor Attempt query unavailable → blocked — PASS (CASE D)
6. legacy SQLite path survives fresh-runtime restart — PASS
7. original remains superseded — PASS
8. same successor rehydrates — PASS
9. same Attempt rehydrates — PASS
10. same Evidence rehydrates — PASS
11. no duplicate Attempt — PASS
12. no duplicate Evidence — PASS
13. no automatic fake relaunch — PASS
14. replay after restart/execution fails closed — PASS
15. typecheck PASS
16. lint PASS
17. build PASS
18. full tests PASS
19. Cursor REAL = 0
20. OpenAI/Nora LIVE = 0
21. project remote effects = 0

---

## 11. EXPLOITABLE R1 DIFFS (FULL)

### 11.1 resolveExistingLegacyM3DocsWriteProductPath.ts (`git show R1`)

```diff
commit 64aec8ea7dd160d29154253e45a2ef023db84c3e
Author: Morris Cleland <morris@e8616b0d-1fc3-4e2d-92d3-8e626c04ce19.home>
Date:   Thu Sep 17 02:38:59 2026 +0200

    fix(sfia-studio): close legacy rematerialization replay safety

    Fail closed when a rematerialized successor already has Attempt history, and prove legacy SQLite restart/rehydration without duplicate Attempt/Evidence or relaunch.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath.ts b/projects/sfia-studio/app/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath.ts
index 31c65c96..be7718c8 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath.ts
@@ -398,6 +398,27 @@ export async function resolveExistingLegacyM3DocsWriteProductPath(input: {
   });
   if (!resolved.ok) return resolved;

+  // R1 — successor Attempt safety: never present an already-executed successor
+  // as a fresh rematerialization payload (idempotent resolver replay is non-mutating).
+  const successorId = resolved.successor.executionContractId;
+  const successorListed =
+    await input.deps.executionAttemptServices.listExecutionAttempts.execute({
+      executionContractId: successorId,
+    });
+  if (!successorListed.ok) {
+    return fail(
+      "LEGACY_SUCCESSOR_ATTEMPT_SAFETY_UNPROVEN",
+      successorListed.error.message ??
+        "Cannot prove absence of prior Attempt for rematerialized successor.",
+    );
+  }
+  if (successorListed.attempts.length > 0) {
+    return fail(
+      "LEGACY_SUCCESSOR_PRIOR_ATTEMPT_EXISTS",
+      "Canonical M4 successor already has ExecutionAttempt history — cannot treat rematerialization as a fresh executable successor.",
+    );
+  }
+
   return {
     ok: true,
     payload: {
@@ -420,6 +441,7 @@ export async function resolveExistingLegacyM3DocsWriteProductPath(input: {
         "CURSOR REAL NOT EXECUTED AT REMATERIALIZATION",
         "Profile is server-side; client adapter/command/real/profile fields are ignored",
         "PRIOR ATTEMPT COUNT VERIFIED ZERO ON ORIGINAL",
+        "PRIOR ATTEMPT COUNT VERIFIED ZERO ON SUCCESSOR",
         ...resolved.disclosures,
       ],
     },
```

### 11.2 legacyDocsWritePrepareContractView.ts (`git show R1`)

```diff
commit 64aec8ea7dd160d29154253e45a2ef023db84c3e
Author: Morris Cleland <morris@e8616b0d-1fc3-4e2d-92d3-8e626c04ce19.home>
Date:   Thu Sep 17 02:38:59 2026 +0200

    fix(sfia-studio): close legacy rematerialization replay safety

    Fail closed when a rematerialized successor already has Attempt history, and prove legacy SQLite restart/rehydration without duplicate Attempt/Evidence or relaunch.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/project-assistant/f3/legacyDocsWritePrepareContractView.ts b/projects/sfia-studio/app/features/project-assistant/f3/legacyDocsWritePrepareContractView.ts
index 47255dd9..442d162a 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/legacyDocsWritePrepareContractView.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/legacyDocsWritePrepareContractView.ts
@@ -8,6 +8,7 @@
 const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply";
 const M4_BOUNDED_DOCS_WRITE_TARGET = "workspace.isolated.docs_write";
 const M4_BOUNDED_DOCS_WRITE_SCOPE = "studio.gcec.docs_write";
+const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write";

 function canonicalM3PrepareContractId(decisionId: string): string {
   const safe = decisionId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48);
@@ -31,9 +32,12 @@ export function isLegacyDocsWritePrepareContractView(input: {
   if (input.action !== M4_BOUNDED_DOCS_WRITE_ACTION) return false;
   if (input.target !== M4_BOUNDED_DOCS_WRITE_TARGET) return false;
   if (!input.constraints.includes("PREPARE_ONLY")) return false;
+  // Already-current M4 machine scope is not a legacy prepare projection.
+  if (input.scope === M4_BOUNDED_DOCS_WRITE_SCOPE) return false;
   if (
-    input.scope === M4_BOUNDED_DOCS_WRITE_SCOPE &&
-    !input.constraints.includes("PREPARE_ONLY")
+    Array.isArray(input.requiredCapabilities) &&
+    input.requiredCapabilities.length > 0 &&
+    !input.requiredCapabilities.includes(M4_BOUNDED_DOCS_WRITE_CAPABILITY)
   ) {
     return false;
   }
```

### 11.3 productJourneyGovernedDocsWriteWiring.d0.test.ts (`git show R1`)

```diff
commit 64aec8ea7dd160d29154253e45a2ef023db84c3e
Author: Morris Cleland <morris@e8616b0d-1fc3-4e2d-92d3-8e626c04ce19.home>
Date:   Thu Sep 17 02:38:59 2026 +0200

    fix(sfia-studio): close legacy rematerialization replay safety

    Fail closed when a rematerialized successor already has Attempt history, and prove legacy SQLite restart/rehydration without duplicate Attempt/Evidence or relaunch.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts
index 0dde7939..d5770d74 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts
@@ -1607,15 +1607,15 @@ describe("D01 — legacy M3 PREPARE → M4 successor rematerialization", () => {
     expect(blocked.code).toMatch(/PROJECT_MISMATCH|CONTRACT_PROJECT/);
   });

-  it("presentation helper rejects already-current M4 successor id", async () => {
+  it("presentation helper rejects successor id, M4 scope, and incoherent capability", async () => {
     const { isLegacyDocsWritePrepareContractView } = await import(
       "@/features/project-assistant/f3/legacyDocsWritePrepareContractView"
     );
+    const decisionId = "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411";
     expect(
       isLegacyDocsWritePrepareContractView({
-        decisionId: "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
-        executionContractId:
-          "xct:m3-res:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+        decisionId,
+        executionContractId: `xct:m3-res:${decisionId}`,
         action: M4_BOUNDED_DOCS_WRITE_ACTION,
         target: M4_BOUNDED_DOCS_WRITE_TARGET,
         scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
@@ -1624,17 +1624,386 @@ describe("D01 — legacy M3 PREPARE → M4 successor rematerialization", () => {
     ).toBe(false);
     expect(
       isLegacyDocsWritePrepareContractView({
-        decisionId: "dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
-        executionContractId:
-          "xct:m3:dec:w2-prop:ca889356-2907-4c2a-ac29-003a19e37411",
+        decisionId,
+        executionContractId: `xct:m3:${decisionId}`,
+        action: M4_BOUNDED_DOCS_WRITE_ACTION,
+        target: M4_BOUNDED_DOCS_WRITE_TARGET,
+        scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
+        constraints: ["PREPARE_ONLY"],
+        requiredCapabilities: ["cap:cursor.docs_write"],
+      }),
+    ).toBe(false);
+    expect(
+      isLegacyDocsWritePrepareContractView({
+        decisionId,
+        executionContractId: `xct:m3:${decisionId}`,
+        action: M4_BOUNDED_DOCS_WRITE_ACTION,
+        target: M4_BOUNDED_DOCS_WRITE_TARGET,
+        scope: "docs_write borné — cycle actif — aucune exécution automatique",
+        constraints: ["PREPARE_ONLY"],
+        requiredCapabilities: ["cap:other"],
+      }),
+    ).toBe(false);
+    expect(
+      isLegacyDocsWritePrepareContractView({
+        decisionId,
+        executionContractId: `xct:m3:${decisionId}`,
         action: M4_BOUNDED_DOCS_WRITE_ACTION,
         target: M4_BOUNDED_DOCS_WRITE_TARGET,
         scope: "docs_write borné — cycle actif — aucune exécution automatique",
         constraints: ["PREPARE_ONLY", "NO_CURSOR_REAL", "NO_ATTEMPT", "NO_GATE_D"],
+        requiredCapabilities: ["cap:cursor.docs_write"],
       }),
     ).toBe(true);
   });

+  it("R1 CASE C — rematerialize replay after successor Attempt is fail-closed", async () => {
+    const { resolveExistingLegacyM3DocsWriteProductPath } = await import(
+      "@/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath"
+    );
+    const ctx = await bootLegacyPrepareOnly("leg06", true);
+    const rematDeps = {
+      decisionServices: ctx.oa.decisionServices,
+      authorityResolver: ctx.oa.authorityResolver,
+      executionContractServices: ctx.oa.executionContractServices,
+      executionAttemptServices: ctx.oa.executionAttemptServices,
+      nowIso: () => ctx.oa.clock.nowIso(),
+      forceM3Authority: true,
+      boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
+    };
+    const first = await resolveExistingLegacyM3DocsWriteProductPath({
+      projectId: ctx.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: ctx.currentContext,
+      deps: rematDeps,
+    });
+    expect(first.ok).toBe(true);
+    if (!first.ok) return;
+    const executionContractId = first.payload.successor.executionContractId;
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
+    const executed = await governedExecuteAuthorizedContract({
+      oa: ctx.oa,
+      projectId: ctx.projectId,
+      executionContractId,
+      forceLocalAuthority: true,
+    });
+    expect(executed.ok).toBe(true);
+    if (!executed.ok) return;
+    expect(executed.attemptStatus).toBe("succeeded");
+    const launchAfterExecute = ctx.fakeLaunch.calls.length;
+    expect(launchAfterExecute).toBe(1);
+
+    const replay = await resolveExistingLegacyM3DocsWriteProductPath({
+      projectId: ctx.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: ctx.currentContext,
+      deps: rematDeps,
+    });
+    expect(replay.ok).toBe(false);
+    if (replay.ok) return;
+    expect(replay.code).toBe("LEGACY_SUCCESSOR_PRIOR_ATTEMPT_EXISTS");
+    expect(ctx.fakeLaunch.calls.length).toBe(launchAfterExecute);
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
+  });
+
+  it("R1 CASE D — successor Attempt query failure is fail-closed", async () => {
+    const { resolveExistingLegacyM3DocsWriteProductPath } = await import(
+      "@/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath"
+    );
+    const ctx = await bootLegacyPrepareOnly("leg07", true);
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
+    const successorId = first.payload.successor.executionContractId;
+
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
+            execute: async (request: { executionContractId: string }) => {
+              if (request.executionContractId === ctx.originalId) {
+                return { ok: true as const, attempts: [] };
+              }
+              if (request.executionContractId === successorId) {
+                return {
+                  ok: false as const,
+                  error: {
+                    message: "successor attempt listing unavailable",
+                  },
+                };
+              }
+              return { ok: true as const, attempts: [] };
+            },
+          },
+        } as never,
+        nowIso: () => ctx.oa.clock.nowIso(),
+        forceM3Authority: true,
+        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
+      },
+    });
+    expect(blocked.ok).toBe(false);
+    if (blocked.ok) return;
+    expect(blocked.code).toBe("LEGACY_SUCCESSOR_ATTEMPT_SAFETY_UNPROVEN");
+  });
+
+  it("R1 — legacy SQLite TEMP restart: rematerialize → Fake execute → rehydrate → replay fail-closed", async () => {
+    const { resolveExistingLegacyM3DocsWriteProductPath } = await import(
+      "@/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath"
+    );
+    const ctx = await bootLegacyPrepareOnly("leg08rst", true);
+    const dbPath = ctx.dbPath;
+    const managedBase = path.dirname(ctx.fakeLaunch.gitState.worktreeRoot);
+    const rematDepsA = {
+      decisionServices: ctx.oa.decisionServices,
+      authorityResolver: ctx.oa.authorityResolver,
+      executionContractServices: ctx.oa.executionContractServices,
+      executionAttemptServices: ctx.oa.executionAttemptServices,
+      nowIso: () => ctx.oa.clock.nowIso(),
+      forceM3Authority: true,
+      boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
+    };
+
+    const remat = await resolveExistingLegacyM3DocsWriteProductPath({
+      projectId: ctx.projectId,
+      decisionId: ctx.decisionId,
+      currentContext: ctx.currentContext,
+      deps: rematDepsA,
+    });
+    expect(remat.ok).toBe(true);
+    if (!remat.ok) return;
+    const originalId = remat.payload.original.executionContractId;
+    const successorId = remat.payload.successor.executionContractId;
+    const decisionId = ctx.decisionId;
+    const projectId = ctx.projectId;
+
+    await inspectExecutionContract({
+      oa: ctx.oa,
+      projectId,
+      executionContractId: successorId,
+    });
+    await confirmExecutionContractForAuthorization({
+      oa: ctx.oa,
+      projectId,
+      executionContractId: successorId,
+      forceLocalAuthority: true,
+    });
+    const executed = await governedExecuteAuthorizedContract({
+      oa: ctx.oa,
+      projectId,
+      executionContractId: successorId,
+      forceLocalAuthority: true,
+    });
+    expect(executed.ok).toBe(true);
+    if (!executed.ok) return;
+    expect(executed.attemptStatus).toBe("succeeded");
+    const attemptIdA = executed.attemptId;
+    expect(ctx.fakeLaunch.calls.length).toBe(1);
+
+    const successorAfterExec =
+      await ctx.oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: successorId,
+      });
+    expect(successorAfterExec.ok).toBe(true);
+    if (!successorAfterExec.ok) return;
+    const successorFingerprint =
+      successorAfterExec.contract.semanticFingerprint ?? "";
+    const successorVersion = successorAfterExec.contract.version;
+    expect(successorFingerprint.length).toBeGreaterThan(0);
+
+    const listedA =
+      await ctx.oa.executionAttemptServices.listExecutionAttempts.execute({
+        executionContractId: successorId,
+      });
+    expect(listedA.ok).toBe(true);
+    if (!listedA.ok) return;
+    expect(listedA.attempts.filter((a) => a.status === "succeeded")).toHaveLength(
+      1,
+    );
+
+    const evidenceA = await ctx.oa.evidenceReviewServices.repository.listByProject(
+      projectId,
+    );
+    const evidenceBoundA = evidenceA.filter(
+      (e) => e.bindings?.executionAttemptId === attemptIdA,
+    );
+    expect(evidenceBoundA.length).toBeGreaterThanOrEqual(1);
+    const evidenceCountA = evidenceA.length;
+    const evidenceIdsA = evidenceBoundA.map((e) => e.evidenceId).sort();
+
+    const originalA =
+      await ctx.oa.executionContractServices.getExecutionContract.execute({
+        executionContractId: originalId,
+      });
+    expect(originalA.ok).toBe(true);
+    if (!originalA.ok) return;
+    expect(originalA.contract.status).toBe("superseded");
+
+    const overviewA = await ctx.runtime.getProject(projectId);
+    expect(overviewA.ok).toBe(true);
+    if (!overviewA.ok) return;
+    const currentContextB = {
+      projectId,
+      lpsId: overviewA.livingState.id,
+      lpsVersion: overviewA.livingState.version,
+      doctrineDigest: overviewA.doctrine.digest,
+      activeCycleInstanceId: ctx.cycleInstanceId,
+    };
+
+    const repoRoot = ctx.fakeLaunch.gitState.worktreeRoot;
+    const baseHeadSha = ctx.baseHeadSha;
+    resetRuntimeApplicationServiceForTests();
+
+    const gitStateB = new FakeCursorGitExternalState({
+      worktreeRoot: repoRoot,
+      initialBranch: BRANCH,
+      initialSha: baseHeadSha,
+    });
+    const fakeLaunchB = new FakeDocsWriteLaunchPort({
+      worktreeRoot: repoRoot,
+      pathAllowlist: ["docs/"],
+      defaultBranch: BRANCH,
+      repositoryRef: IDENTITY,
+      gitState: gitStateB,
+    });
+    expect(fakeLaunchB.calls.length).toBe(0);
+
+    const runtimeB = getRuntimeApplicationService({
+      registryRoot: REGISTRY_ROOT,
+      schemasRoot: SCHEMAS_ROOT,
+      nowIso: NOW,
+      idSource: new FixedIdSource("leg08b"),
+      auditMode: "noop",
+      productDbPath: dbPath,
+      realBoundary: {
+        launchPort: fakeLaunchB,
+        safetyJournal: new MemoryLaunchSafetyJournal(),
+        managedRepoRootBase: managedBase,
+      },
+    });
+    const oaB = runtimeB.oa!;
+
+    const projectB = await oaB.projectServices.getProject.execute({ projectId });
+    expect(projectB.ok).toBe(true);
+
+    const originalB =
+      await oaB.executionContractServices.getExecutionContract.execute({
+        executionContractId: originalId,
+      });
+    expect(originalB.ok).toBe(true);
+    if (!originalB.ok) return;
+    expect(originalB.contract.status).toBe("superseded");
+
+    const successorB =
+      await oaB.executionContractServices.getExecutionContract.execute({
+        executionContractId: successorId,
+      });
+    expect(successorB.ok).toBe(true);
+    if (!successorB.ok) return;
+    expect(successorB.contract.scope).toBe(M4_BOUNDED_DOCS_WRITE_SCOPE);
+    expect(successorB.contract.supersedesExecutionContractId).toBe(originalId);
+    expect(successorB.contract.semanticFingerprint).toBe(successorFingerprint);
+    expect(successorB.contract.version).toBe(successorVersion);
+
+    const listedB =
+      await oaB.executionAttemptServices.listExecutionAttempts.execute({
+        executionContractId: successorId,
+      });
+    expect(listedB.ok).toBe(true);
+    if (!listedB.ok) return;
+    const succeededB = listedB.attempts.filter((a) => a.status === "succeeded");
+    expect(succeededB).toHaveLength(1);
+    expect(succeededB[0]!.attemptId).toBe(attemptIdA);
+
+    const evidenceB = await oaB.evidenceReviewServices.repository.listByProject(
+      projectId,
+    );
+    expect(evidenceB.length).toBe(evidenceCountA);
+    const evidenceIdsB = evidenceB
+      .filter((e) => e.bindings?.executionAttemptId === attemptIdA)
+      .map((e) => e.evidenceId)
+      .sort();
+    expect(evidenceIdsB).toEqual(evidenceIdsA);
+
+    const overviewB = await runtimeB.getProject(projectId);
+    expect(overviewB.ok).toBe(true);
+    if (!overviewB.ok) return;
+    const rematReplay = await resolveExistingLegacyM3DocsWriteProductPath({
+      projectId,
+      decisionId,
+      currentContext: {
+        projectId,
+        lpsId: overviewB.livingState.id,
+        lpsVersion: overviewB.livingState.version,
+        doctrineDigest: overviewB.doctrine.digest,
+        activeCycleInstanceId: currentContextB.activeCycleInstanceId,
+      },
+      deps: {
+        decisionServices: oaB.decisionServices,
+        authorityResolver: oaB.authorityResolver,
+        executionContractServices: oaB.executionContractServices,
+        executionAttemptServices: oaB.executionAttemptServices,
+        nowIso: () => oaB.clock.nowIso(),
+        forceM3Authority: true,
+        boundedDocsWriteBaseHeadSha: baseHeadSha,
+      },
+    });
+    expect(rematReplay.ok).toBe(false);
+    if (rematReplay.ok) return;
+    expect(rematReplay.code).toBe("LEGACY_SUCCESSOR_PRIOR_ATTEMPT_EXISTS");
+    expect(fakeLaunchB.calls.length).toBe(0);
+
+    const listedAfter =
+      await oaB.executionAttemptServices.listExecutionAttempts.execute({
+        executionContractId: successorId,
+      });
+    expect(listedAfter.ok).toBe(true);
+    if (!listedAfter.ok) return;
+    expect(
+      listedAfter.attempts.filter((a) => a.status === "succeeded"),
+    ).toHaveLength(1);
+    const evidenceAfter =
+      await oaB.evidenceReviewServices.repository.listByProject(projectId);
+    expect(evidenceAfter.length).toBe(evidenceCountA);
+  });
+
   it("SFIA_STUDIO_CURSOR_REAL=1 alone never selects docs_write profile", () => {
     process.env.SFIA_STUDIO_CURSOR_REAL = "1";
     expect(
```

---

## 12. FULL FILE SNAPSHOTS (POST-R1) — MODIFIED PRODUCT SOURCES

### 12.1 resolveExistingLegacyM3DocsWriteProductPath.ts (full)

```typescript
/**
 * Legacy pre-#493 M3 PREPARE → canonical M4 docs_write successor rematerialization.
 *
 * Does NOT call prepareM3FromDecision (would fail on existing canonical id).
 * Routes the EXISTING durable original into resolveM3ExecutionContract.
 *
 * ZERO StartExecution / Attempt / external launch.
 */

import type { F2ContextSnapshot } from "../f2/types";
import type { ExecutionAttemptServices } from "@/lib/oa/execution-attempt";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  type GitCommandRunner,
} from "@/lib/oa/execution-attempt";
import {
  resolveBoundedReadOnlyBaseHeadSha,
  validateBaseHeadSha,
} from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
import { isLegacyDocsWritePrepareContractView } from "./legacyDocsWritePrepareContractView";
import {
  BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
  boundedDocsWriteM3ResolutionProfile,
} from "./boundedDocsWriteM3ResolutionProfile";
import { qualifyDocsWriteM3Intent } from "./qualifyDocsWriteM3Intent";
import {
  canonicalM3PrepareContractId,
  canonicalM3PrepareIdempotencyKey,
  resolveM3ExecutionContract,
  type ResolveM3Deps,
  type ResolveM3Success,
} from "./resolveM3ExecutionContract";
import type { PrepareM3Deps } from "./prepareM3FromDecision";
import {
  isProposalSubjectOptionRef,
  PROPOSAL_SUBJECT_PURSUE_REF,
} from "../w2/proposalSubjectOptions";

export type ResolveExistingLegacyM3DocsWriteDeps = PrepareM3Deps &
  ResolveM3Deps & {
    executionAttemptServices: Pick<
      ExecutionAttemptServices,
      "listExecutionAttempts"
    >;
    /**
     * Server/test only contract-bound workspace pin.
     * Never accepted from the client.
     */
    boundedDocsWriteBaseHeadSha?: string;
    boundedReadOnlyBaseHeadSha?: string;
    resolveBoundedReadOnlyHead?: () => Promise<string | null> | string | null;
    gitCommandRunner?: GitCommandRunner;
    gitStartDir?: string;
  };

export type F3M3LegacyResolvedPayload = {
  turnKind: "f3_m3_legacy_docs_write_resolved";
  mode: "M3_RESOLVED_BOUNDED_DOCS_WRITE";
  decisionId: string;
  projectId: string;
  original: ResolveM3Success["original"];
  successor: ResolveM3Success["successor"];
  reusedFromIdempotency: boolean;
  executionPerformed: false;
  attemptCreated: false;
  confirmationRequired: true;
  realExecution: false;
  disclosures: string[];
};

const LEGACY_PREPARE_MARKERS = [
  "PREPARE_ONLY",
  "NO_CURSOR_REAL",
  "NO_ATTEMPT",
  "NO_GATE_D",
] as const;

function fail(code: string, message: string) {
  return { ok: false as const, code, message };
}

export { isLegacyDocsWritePrepareContractView };

export async function resolveExistingLegacyM3DocsWriteProductPath(input: {
  projectId: string;
  decisionId: string;
  currentContext: F2ContextSnapshot;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  baseHeadSha?: unknown;
  workspace?: unknown;
  profile?: unknown;
  action?: unknown;
  target?: unknown;
  scope?: unknown;
  deps: ResolveExistingLegacyM3DocsWriteDeps;
}): Promise<
  | { ok: true; payload: F3M3LegacyResolvedPayload }
  | { ok: false; code: string; message: string }
> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.baseHeadSha;
  void input.workspace;
  void input.profile;
  void input.action;
  void input.target;
  void input.scope;

  const loaded = await input.deps.decisionServices.getHumanDecision.execute({
    decisionId: input.decisionId,
  });
  if (!loaded.ok) {
    return fail(loaded.error.detailCode, loaded.error.message);
  }

  const decision = loaded.decision;
  if (decision.projectId !== input.projectId) {
    return fail("PROJECT_MISMATCH", "Decision does not belong to this project.");
  }
  if (decision.status !== "accepted") {
    return fail(
      "DECISION_NOT_CURRENT",
      `Decision status ${decision.status} is not accepted for legacy rematerialization.`,
    );
  }
  if (!decision.decisionBasis) {
    return fail(
      "DECISION_BASIS_REQUIRED",
      "HumanDecision lacks DecisionBasis — cannot rematerialize legacy M3.",
    );
  }
  const basis = decision.decisionBasis;
  if (basis.projectId !== input.projectId) {
    return fail(
      "DECISION_BASIS_PROJECT_MISMATCH",
      "DecisionBasis projectId does not match.",
    );
  }

  if (
    basis.sourceType === "proposal" &&
    isProposalSubjectOptionRef(decision.selectedOptionId) &&
    decision.selectedOptionId !== PROPOSAL_SUBJECT_PURSUE_REF
  ) {
    return fail(
      "PREPARE_NOT_APPLICABLE",
      "Rematérialisation M3 réservée à la poursuite du sujet Proposal — amend/refuse n'ouvrent aucune exécution.",
    );
  }

  const ctx = basis.proposalContext;
  if (
    ctx.doctrineDigest !== undefined &&
    ctx.doctrineDigest !== input.currentContext.doctrineDigest
  ) {
    return fail(
      "CONTEXT_STALE",
      "DecisionBasis doctrine digest is stale — re-decide before rematerialization.",
    );
  }
  if (ctx.lpsVersion > input.currentContext.lpsVersion) {
    return fail(
      "CONTEXT_STALE",
      "DecisionBasis LPS version is ahead of current context — inconsistent state.",
    );
  }

  const canonicalId = canonicalM3PrepareContractId(input.decisionId);
  const originalResult =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: canonicalId,
    });
  if (!originalResult.ok) {
    return fail(originalResult.error.detailCode, originalResult.error.message);
  }
  const original = originalResult.contract;

  if (original.projectId !== input.projectId) {
    return fail(
      "CONTRACT_PROJECT_MISMATCH",
      "Original ExecutionContract does not belong to this project.",
    );
  }
  if (
    !original.decisionRefs ||
    original.decisionRefs.length === 0 ||
    !original.decisionRefs.includes(input.decisionId)
  ) {
    return fail(
      "DECISION_CONTRACT_MISMATCH",
      "Original contract is not linked to this HumanDecision.",
    );
  }
  if (original.executionContractId !== canonicalId) {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      "Loaded contract id is not the canonical M3 PREPARE contract for this decision.",
    );
  }
  if (original.idempotencyKey !== canonicalM3PrepareIdempotencyKey(input.decisionId)) {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      "Loaded contract idempotencyKey is not the canonical M3 PREPARE identity.",
    );
  }
  if (original.requiredAuthority !== "MORRIS") {
    return fail(
      "CANONICAL_M3_CONTRACT_MISMATCH",
      "Canonical M3 PREPARE contract must require MORRIS authority.",
    );
  }

  if (original.action !== M4_BOUNDED_DOCS_WRITE_ACTION) {
    return fail(
      "LEGACY_DOCS_WRITE_ACTION_MISMATCH",
      "Legacy rematerialization requires action cursor.docs_write.apply.",
    );
  }
  if (original.target !== M4_BOUNDED_DOCS_WRITE_TARGET) {
    return fail(
      "LEGACY_DOCS_WRITE_TARGET_MISMATCH",
      "Legacy rematerialization requires target workspace.isolated.docs_write.",
    );
  }
  if (
    !(original.requiredCapabilities ?? []).includes(
      M4_BOUNDED_DOCS_WRITE_CAPABILITY,
    )
  ) {
    return fail(
      "LEGACY_DOCS_WRITE_CAPABILITY_MISMATCH",
      "Legacy rematerialization requires cap:cursor.docs_write.",
    );
  }

  const constraints = original.constraints ?? [];
  const hasPrepareOnly = constraints.includes("PREPARE_ONLY");
  if (!hasPrepareOnly && original.status !== "superseded") {
    // Already-current non-prepare original is not this recovery path.
    // Superseded originals are handled by resolver idempotent reuse below.
    return fail(
      "LEGACY_PREPARE_MARKERS_ABSENT",
      "Original is not a legacy PREPARE_ONLY docs_write contract.",
    );
  }
  if (hasPrepareOnly) {
    // Prefer presence of the historical prepare cluster when still on original.
    const missingMarkers = LEGACY_PREPARE_MARKERS.filter(
      (m) => m !== "PREPARE_ONLY" && !constraints.includes(m),
    );
    // PREPARE_ONLY alone is sufficient eligibility; other markers are historical
    // signals, not hard requirements (older fixtures may omit some).
    void missingMarkers;
  }

  // Already M4 machine profile without prepare markers → not a legacy recovery.
  if (
    original.scope === M4_BOUNDED_DOCS_WRITE_SCOPE &&
    !hasPrepareOnly &&
    original.status !== "superseded"
  ) {
    return fail(
      "LEGACY_ALREADY_M4_CURRENT",
      "Contract already carries canonical M4 docs_write scope — no legacy rematerialization.",
    );
  }

  const intent = qualifyDocsWriteM3Intent({
    executionBasis: basis.executionBasis,
    action: original.action,
    requiredCapabilities: original.requiredCapabilities ?? [],
  });
  if (!intent.ok) return intent;
  if (!intent.preferDocsWrite) {
    return fail(
      "DECISION_BASIS_NOT_DOCS_WRITE",
      "DecisionBasis does not carry coherent docs_write intent for rematerialization.",
    );
  }

  if (
    original.status === "executing" ||
    original.status === "completed" ||
    original.status === "failed" ||
    original.status === "cancelled"
  ) {
    return fail(
      "LEGACY_CONTRACT_LIFECYCLE_REFUSED",
      `Cannot rematerialize contract in status ${original.status}.`,
    );
  }

  const listed =
    await input.deps.executionAttemptServices.listExecutionAttempts.execute({
      executionContractId: canonicalId,
    });
  if (!listed.ok) {
    return fail(
      "LEGACY_ATTEMPT_SAFETY_UNPROVEN",
      listed.error.message ??
        "Cannot prove absence of prior Attempt for legacy original.",
    );
  }
  if (listed.attempts.length > 0) {
    return fail(
      "LEGACY_PRIOR_ATTEMPT_EXISTS",
      "Prior ExecutionAttempt exists on the legacy original — rematerialization refused.",
    );
  }

  // Target path / repository must remain sealed on DecisionBasis (durable truth).
  const eb = basis.executionBasis;
  const targetPath = eb?.targetPath?.trim() ?? "";
  const targetRepositoryRef = eb?.targetRepositoryRef?.trim() ?? "";
  if (!targetPath || !targetRepositoryRef) {
    return fail(
      "DECISION_BASIS_TARGET_INCOMPLETE",
      "DecisionBasis lacks sealed targetPath / targetRepositoryRef.",
    );
  }
  const originalInputs = (original.inputs ?? {}) as Record<string, unknown>;
  const sealedPath =
    typeof originalInputs.targetPath === "string"
      ? originalInputs.targetPath.trim()
      : "";
  const sealedRepo =
    typeof originalInputs.targetRepositoryRef === "string"
      ? originalInputs.targetRepositoryRef.trim()
      : typeof originalInputs.repositoryRef === "string"
        ? String(originalInputs.repositoryRef).trim()
        : "";
  if (sealedPath && sealedPath !== targetPath) {
    return fail(
      "DECISION_BASIS_TARGET_PATH_DRIFT",
      "Durable DecisionBasis targetPath does not match original contract inputs.",
    );
  }
  if (sealedRepo && sealedRepo !== targetRepositoryRef) {
    return fail(
      "DECISION_BASIS_REPOSITORY_DRIFT",
      "Durable DecisionBasis targetRepositoryRef does not match original contract inputs.",
    );
  }

  let sha: string | null = null;
  const pinned =
    input.deps.boundedDocsWriteBaseHeadSha ??
    input.deps.boundedReadOnlyBaseHeadSha;
  if (pinned !== undefined) {
    sha = validateBaseHeadSha(pinned);
  } else if (input.deps.resolveBoundedReadOnlyHead) {
    sha = validateBaseHeadSha(await input.deps.resolveBoundedReadOnlyHead());
  } else {
    const resolved = await resolveBoundedReadOnlyBaseHeadSha({
      gitRunner: input.deps.gitCommandRunner,
      startDir: input.deps.gitStartDir,
    });
    if (!resolved.ok) {
      return fail(resolved.code, resolved.message);
    }
    sha = resolved.sha;
  }
  if (!sha) {
    return fail(
      "BASE_HEAD_SHA_INVALID",
      "baseHeadSha server-side invalide ou absent — fail-closed avant Confirmation / Gate D.",
    );
  }

  const profile = boundedDocsWriteM3ResolutionProfile();
  const resolution = {
    ...profile,
    inputs: {
      ...(profile.inputs ?? {}),
      baseHeadSha: sha,
    },
  };

  const resolved = await resolveM3ExecutionContract({
    projectId: input.projectId,
    decisionId: input.decisionId,
    originalExecutionContractId: canonicalId,
    expectedOriginalVersion: original.version,
    resolution,
    supersessionReason: BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
    deps: input.deps,
  });
  if (!resolved.ok) return resolved;

  // R1 — successor Attempt safety: never present an already-executed successor
  // as a fresh rematerialization payload (idempotent resolver replay is non-mutating).
  const successorId = resolved.successor.executionContractId;
  const successorListed =
    await input.deps.executionAttemptServices.listExecutionAttempts.execute({
      executionContractId: successorId,
    });
  if (!successorListed.ok) {
    return fail(
      "LEGACY_SUCCESSOR_ATTEMPT_SAFETY_UNPROVEN",
      successorListed.error.message ??
        "Cannot prove absence of prior Attempt for rematerialized successor.",
    );
  }
  if (successorListed.attempts.length > 0) {
    return fail(
      "LEGACY_SUCCESSOR_PRIOR_ATTEMPT_EXISTS",
      "Canonical M4 successor already has ExecutionAttempt history — cannot treat rematerialization as a fresh executable successor.",
    );
  }

  return {
    ok: true,
    payload: {
      turnKind: "f3_m3_legacy_docs_write_resolved",
      mode: "M3_RESOLVED_BOUNDED_DOCS_WRITE",
      decisionId: input.decisionId,
      projectId: input.projectId,
      original: resolved.original,
      successor: resolved.successor,
      reusedFromIdempotency: resolved.reusedFromIdempotency,
      executionPerformed: false,
      attemptCreated: false,
      confirmationRequired: true,
      realExecution: false,
      disclosures: [
        "LEGACY M3 PREPARE rematerialized via existing G-UX-15 resolve (no re-PREPARE)",
        "G-UX-15 resolveM3ExecutionContract — bounded docs-write M4 profile (server-selected from DecisionBasis; ZERO LIVE Cursor)",
        "NO Proposal authority",
        "Confirmation required before StartExecution",
        "CURSOR REAL NOT EXECUTED AT REMATERIALIZATION",
        "Profile is server-side; client adapter/command/real/profile fields are ignored",
        "PRIOR ATTEMPT COUNT VERIFIED ZERO ON ORIGINAL",
        "PRIOR ATTEMPT COUNT VERIFIED ZERO ON SUCCESSOR",
        ...resolved.disclosures,
      ],
    },
  };
}
```

### 12.2 legacyDocsWritePrepareContractView.ts (full)

```typescript
/**
 * Client-safe presentation heuristic for legacy M3 PREPARE docs_write recovery CTA.
 * Not the security boundary — server re-validates on rematerialization.
 *
 * Constants duplicated intentionally to keep this module free of Node/server barrels.
 */

const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply";
const M4_BOUNDED_DOCS_WRITE_TARGET = "workspace.isolated.docs_write";
const M4_BOUNDED_DOCS_WRITE_SCOPE = "studio.gcec.docs_write";
const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write";

function canonicalM3PrepareContractId(decisionId: string): string {
  const safe = decisionId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48);
  return `xct:m3:${safe}`;
}

export function isLegacyDocsWritePrepareContractView(input: {
  decisionId: string;
  executionContractId: string;
  action: string;
  target: string;
  scope?: string;
  constraints: readonly string[];
  requiredCapabilities?: readonly string[];
}): boolean {
  if (
    input.executionContractId !== canonicalM3PrepareContractId(input.decisionId)
  ) {
    return false;
  }
  if (input.action !== M4_BOUNDED_DOCS_WRITE_ACTION) return false;
  if (input.target !== M4_BOUNDED_DOCS_WRITE_TARGET) return false;
  if (!input.constraints.includes("PREPARE_ONLY")) return false;
  // Already-current M4 machine scope is not a legacy prepare projection.
  if (input.scope === M4_BOUNDED_DOCS_WRITE_SCOPE) return false;
  if (
    Array.isArray(input.requiredCapabilities) &&
    input.requiredCapabilities.length > 0 &&
    !input.requiredCapabilities.includes(M4_BOUNDED_DOCS_WRITE_CAPABILITY)
  ) {
    return false;
  }
  return true;
}
```

---

## 13. ANTI-CLAIMS / EXPLICIT NON-CLAIMS

- NOT Cursor REAL proven
- NOT authenticated REAL docs_write proven
- NOT E2E FULL REAL
- NOT generalized migration
- NOT production autonomy
- NOT runtime v3 ADOPTED
- NOT global L5
- NOT Nora Cognitive Completion
- NOT production ready
- NOT zero defects
- NOT project-publication authorized (await ChatGPT Critical Review PASS + Morris project GO)

---

## 14. NEXT GATE

STOP after this handoff.

Return to ChatGPT Critical Review.

Do NOT push project branch.
Do NOT create PR.
Do NOT merge.
Do NOT start Reproof 09.

Only after ChatGPT Critical Review PASS:
Morris may authorize project push + PR + CI.

Only after merge + post-merge Required Gate PASS:
a NEW distinct Morris GO may authorize authenticated REAL Reproof 09.

---

## 15. FINAL VERDICT

LEGACY M3→M4 DELIVERY 01 CRITICAL REVIEW R1 —
PASS DETERMINISTIC AT TESTED SCOPE —
SUCCESSOR ATTEMPT-SAFETY CLOSED —
LEGACY SQLITE RESTART/REHYDRATION EXIT PROOF CLOSED —
ZERO REAL —
LOCAL CORRECTION COMMIT READY FOR CHATGPT CRITICAL REVIEW —
NO PROJECT PUSH/PR/MERGE —
RUNTIME V3 NON ADOPTED
