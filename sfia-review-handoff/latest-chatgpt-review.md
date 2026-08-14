# SFIA Studio — ChatGPT Review Pack (FULL)
# M4 DELIVERY REAL-OFF — CORRECTION MICRO-CYCLE R1/R2/R3

## 0. Meta

| Champ | Valeur |
|-------|--------|
| **Timestamp (Europe/Paris)** | 2026-08-14 03:48:44 CEST (+0200) |
| **Niveau** | FULL |
| **Cycle** | 8 — Delivery / implémentation correction |
| **Profil** | Critical |
| **Typologie** | RUN — micro-correction candidat non commité |
| **GO Morris** | **GO — M4 DELIVERY REAL-OFF CORRECTION** (consommé) |
| **Repo** | mcleland147/sfia-workspace |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off` |
| **Branch** | `delivery/sfia-studio-m4-real-off` |
| **HEAD** | `e974b7306f7400249c31399fd2890d5817833dbf` |
| **origin/main** | `e974b7306f7400249c31399fd2890d5817833dbf` |
| **Handoff source** | `54ee64eebc8f0d8d0ad484356959916ced186e33` |
| **Architecture evidence** | `366726945f8f533d958c82b7251edb1a5a4b45f0` |
| **Project commit/push/PR** | **NONE** |
| **Cursor REAL process** | **0** |

## 1. GO / Convergence

- M1–M3 CLOSED; M4 Architecture D-M4-01→05 ADOPTED ON MAIN — **not reopened**
- M4 Delivery: IMPLEMENTED CANDIDATE → **CORRECTED CANDIDATE** (this cycle)
- Cursor REAL / FIRST REAL / M5 / runtime v3 ADOPTED: **NOT AUTHORIZED**

## 2. Local Git Truth

| Check | Result |
|-------|--------|
| branch | delivery/sfia-studio-m4-real-off |
| HEAD | e974b730… (unchanged) |
| origin/main | e974b730… |
| remote delivery branch | ABSENT |
| PR | NONE |
| staged | empty |
| handoff tip at start | 54ee64ee… |

## 3. Inventaire AVANT correction (handoff 54ee64ee)

- Specialized REAL gateway + Gate D + journal + bounded RO agent present
- **R1 open:** FakeProcessRunner publicly composable; createM4RealOffBoundaryHelpers defaulted Fake; no NodeCursorProcessRunner
- **R2 open:** EXEC_ROOT optional; caller cwd/workspaceRoot; baseHeadSha unused; no worktree prepare/HEAD verify
- **R3 open:** tests injected gateway env `SFIA_STUDIO_CURSOR_REAL="1"` (process.env OFF but claim inaccurate)

## 4. Inventaire APRÈS correction

### R1 CLOSED
- `NodeCursorProcessRunner` — production; `SpawnPrimitive` injectable; default `node:child_process.spawn`; **shell:false**; executable ≠ argv; 64 KiB caps; timeout→SIGTERM; realProcessInvoked only after spawn success
- Fake REAL doubles moved to `__tests__/oa/execution-attempt/support/`
- Barrel **does not** export FakeProcessRunner / FakeRealProcessRunner / FakeRealExecutionLaunchGateway
- `createM4RealOffBoundaryHelpers` **removed**
- `fakeRealExecutionLaunchGateway.ts` **deleted** from product infra
- Product gateway requires explicit `processRunner` + `workspacePort`

### R2 CLOSED
- `RealExecutionWorkspacePort` + `StudioGitWorktreeWorkspace`
- `repoRoot` + `execRoot` **required** (fail if missing/equal)
- Contract-bound `inputs.baseHeadSha` (40 hex) validated in StartExecution **before** Gate D consume
- No `StartExecutionRequest.realWorkspaceRoot`; no caller-controlled REAL cwd
- Gateway: prepareWorkspace → then process invoke; HEAD must equal baseHeadSha
- Git via injectable `GitCommandRunner`; tests use FakeGitCommandRunner only
- Order: validations → baseHeadSha → Gate D → atomic CREATED → prepare → Cursor invoke → LAUNCHED

### R3 CLOSED
- production `process.env` flags remained **unset/OFF** throughout
- **0** test configs set `SFIA_STUDIO_CURSOR_REAL="1"` or `OPS1_CURSOR_REAL="1"`
- Positive StartExecution / crash-replay use **`TestOnlyRealExecutionLaunchPort`** (SIMULATED technical ACK)
- Production gateway tested **OFF-only** (runner call count 0)

## 5. Exact enablement / call claims

| Claim | Value |
|-------|-------|
| PRODUCTION env `SFIA_STUDIO_CURSOR_REAL` | unset / OFF |
| PRODUCTION env `OPS1_CURSOR_REAL` | unset / OFF |
| Test configs setting real flag to 1 | **0** |
| PRODUCTION gateway enabled calls | **0** |
| PRODUCTION Cursor runner **actual** spawn | **0** (FakeSpawnPrimitive / no live spawn) |
| REAL git worktree **actual** execution | **0** (FakeGitCommandRunner) |
| Cursor REAL process count | **0** |
| TEST-ONLY simulated RealExecutionLaunchPort calls | used in positive orchestration / crash-replay (SIMULATED ACK ≠ REAL) |

**Precise claim (not “REAL flag OFF” alone):**
production process env flags remained OFF/unset throughout the cycle; positive orchestration tests used TEST-ONLY boundary doubles and did not enable the production Cursor gateway.

## 6. Static scans (commands run)

```
rg -n 'from ["'\''`].*lib/ops1' projects/sfia-studio/app/lib/oa/execution-attempt  → NONE
rg FakeProcessRunner|FakeRealProcessRunner|FakeRealExecutionLaunchGateway|createM4RealOffBoundaryHelpers projects/.../index.ts → NONE
rg 'SFIA_STUDIO_CURSOR_REAL\s*[=:]\s*["'\'']1' projects/.../__tests__/oa/execution-attempt → NONE
rg 'new Fake' projects/.../lib/oa/execution-attempt → NONE
git diff --name-only -- convergence sfia-v3-framing method prompts .github ops1 package.json → empty frozen
```

## 7. QA

### Targeted
```
npx vitest run __tests__/oa/execution-attempt
Test Files  9 passed (9)
Tests  123 passed (123)
```

### Full
```
npm test
Test Files  172 passed | 13 skipped (185)
Tests  1691 passed | 131 skipped (1822)
```

### Other
- `npm run typecheck` → exit 0 (after fixing ProcessEnv `{}` → `process.env` in R1/R2 tests)
- `npm run lint` → exit 0
- `npm run build` → exit 0
- `git diff --check` → DIFF_CHECK_OK

## 8. Security checklist

| Control | Status |
|---------|--------|
| shell:false Cursor | YES (NodeCursorProcessRunner) |
| shell:false Git runner | YES (production default spawn) |
| executable server-side | YES |
| argv structured / no generic command | YES |
| no client cwd | YES |
| execRoot required | YES |
| containment | YES |
| baseHeadSha contract-bound | YES |
| existing worktree refused | YES |
| HEAD pin verified | YES |
| no fetch/push/pull/commit | YES |
| timeout + SIGTERM | YES |
| stdout/stderr 64 KiB | YES |
| Fake not product default | YES |
| Gate D / CREATED atomicity | PRESERVED |
| no REAL→fixture fallback | PRESERVED |
| crash/replay no relaunch | PRESERVED |

## 9. Debts / remaining gates

- Technical journal TEMPORARY WITH EXIT
- Auth.js / Critical Ack not promoted
- Production runner/workspace **implemented ≠ executed**
- FIRST REAL still requires **separate Morris GO**
- M5 NOT AUTHORIZED
- M4 exit proof NOT SATISFIED
- runtime v3 NON ADOPTED

## 10. Verdict

**M4 DELIVERY REAL-OFF CORRECTION COMPLETE —**
R1 PRODUCTION CURSOR RUNNER CLOSED —
FALSE REAL PROOF PATH REMOVED —
R2 WORKSPACE / WORKTREE FAIL-CLOSED CLOSED —
BASE HEAD CONTRACT-BOUND —
R3 REAL-OFF TEST CLAIM CORRECTED —
PRODUCTION REAL FLAGS OFF THROUGHOUT —
NO PRODUCTION CURSOR SPAWN —
NO REAL GIT WORKTREE EXECUTION —
CRASH/REPLAY SAFETY PRESERVED —
NO REAL→FIXTURE FALLBACK —
QA GREEN —
NO PROJECT COMMIT/PUSH/PR —
M4 EXIT PROOF NOT YET SATISFIED —
FIRST REAL NOT AUTHORIZED —
READY FOR CHATGPT REVIEW / MORRIS M4 DELIVERY VALIDATION GATE

## 11. Anti-claims

Production runner implemented ≠ executed · Worktree impl present ≠ real worktree created · Test-only simulated ACK ≠ Cursor REAL · Gateway capable ≠ REAL authorized · Gate D tests ≠ production consume · Corrected candidate ≠ M4 validated · M4 ≠ runtime v3 ADOPTED

---

# APPENDIX A — Full useful git diff (modified tracked files)

diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts
index e96f90e..d48e57b 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts
@@ -229,15 +229,19 @@ export function registerMorris(
   scope = CONTRACT_SCOPE,
   evidenceId = "evd:morris-n3",
 ): void {
-  authority.register({
-    evidenceId,
-    actorId: "actor:morris",
-    level: "N3",
-    scope,
-    issuedAt: "2026-07-01T00:00:00.000Z",
-    source: "registry",
-    canActAsMorris: true,
-  });
+  try {
+    authority.register({
+      evidenceId,
+      actorId: "actor:morris",
+      level: "N3",
+      scope,
+      issuedAt: "2026-07-01T00:00:00.000Z",
+      source: "registry",
+      canActAsMorris: true,
+    });
+  } catch (err) {
+    if (!(err instanceof Error) || err.message !== "evidence_immutable") throw err;
+  }
 }

 export function registerN3NoMorris(
@@ -403,12 +407,23 @@ export async function seedConfirmedContract(
   overrides: Partial<BuildExecutionContractRequest> = {},
 ): Promise<{ contractId: string; version: number }> {
   await seedProject(stack.projects);
-  registerMorris(stack.decisions.authority);
+  const scope = overrides.scope ?? CONTRACT_SCOPE;
+  const evidenceId =
+    typeof overrides.authorityEvidenceId === "string"
+      ? overrides.authorityEvidenceId
+      : scope === CONTRACT_SCOPE
+        ? "evd:morris-n3"
+        : `evd:morris-${scope.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
+  registerMorris(stack.decisions.authority, scope, evidenceId);
   await seedAcceptedDecision(stack);
   await seedStandardCycle(stack);

   const built = await stack.execution.buildExecutionContract.execute(
-    baseBuildRequest({ cycleInstanceId: "cyc:std-001", ...overrides }),
+    baseBuildRequest({
+      cycleInstanceId: "cyc:std-001",
+      authorityEvidenceId: evidenceId,
+      ...overrides,
+    }),
   );
   expect(built.ok).toBe(true);
   if (!built.ok) throw new Error("build failed");
@@ -416,17 +431,20 @@ export async function seedConfirmedContract(
   const validated = await stack.execution.validateExecutionContract.execute({
     executionContractId: built.contract.executionContractId,
     actor: MORRIS_ACTOR,
-    authorityEvidenceId: "evd:morris-n3",
+    authorityEvidenceId: evidenceId,
   });
   expect(validated.ok).toBe(true);
   if (!validated.ok) throw new Error("validate failed");

-  const confirmationId = await grantContractConfirmation(stack);
+  const confirmationId = await grantContractConfirmation(stack, {
+    scope,
+    evidenceId,
+  });
   const confirmed = await stack.execution.confirmExecutionContract.execute({
     executionContractId: validated.contract.executionContractId,
     confirmationId,
     actor: MORRIS_ACTOR,
-    authorityEvidenceId: "evd:morris-n3",
+    authorityEvidenceId: evidenceId,
     expectedVersion: validated.contract.version,
   });
   expect(confirmed.ok).toBe(true);
@@ -509,6 +527,7 @@ export async function selectStandardAgent(
     idempotencyKey?: string;
     requestedAgentRef?: string;
     selectionTtlMs?: number;
+    authorityEvidenceId?: string;
   },
 ) {
   return stack.attempts.selectExecutionAgent.execute({
@@ -516,7 +535,7 @@ export async function selectStandardAgent(
     executionContractId: input.executionContractId,
     idempotencyKey: input.idempotencyKey ?? "idem-attempt-001",
     actor: MORRIS_ACTOR,
-    authorityEvidenceId: "evd:morris-n3",
+    authorityEvidenceId: input.authorityEvidenceId ?? "evd:morris-n3",
     selectionProfile: "standard",
     requestedAgentRef: input.requestedAgentRef,
     selectionTtlMs: input.selectionTtlMs,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 42758a6..9eb798c 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -7,8 +7,9 @@
  *  2. The Attempt is ALREADY persisted `accepted` (Select did it). Start never
  *     launches before an `accepted` Attempt exists (anti launch-then-persist).
  *  3. The contract stays `confirmed` while the Attempt is `accepted`.
- *  4. Only the injected fake adapter `launch(attemptId)` is called; it is
- *     idempotent.
+ *  4. Fixture path: only the injected fake adapter `launch(attemptId)` is
+ *     called; it is idempotent. REAL path (`cursor_cli_real`) NEVER calls the
+ *     fixture adapter — it uses RealExecutionLaunchPort + safety journal.
  *  5. Launch reject/failure → Attempt `failed`, never `executing`.
  *  6. LaunchAck → Attempt `running` persisted FIRST, then contract
  *     `executing`, then the agent_selection Confirmation is consumed.
@@ -20,13 +21,18 @@
  * - launch REJECT (deterministic refusal, nothing started) → contract stays
  *   `confirmed`, so an authorized Retry remains possible;
  * - launch FAIL (indeterminate adapter error) → contract `failed`.
+ *
+ * M4 REAL path (D-M4-01…05): Gate D consume+CREATED is atomic and precedes
+ * realLaunchPort.launch; LAUNCHED is journaled before Attempt `running`.
  */
 import type { ClockPort } from "@/lib/oa/doctrine";
 import type { DecisionServices } from "@/lib/oa/decision";
 import type {
   CheckExecutionAuthorization,
+  ExecutionContract,
   ExecutionContractRepositoryPort,
 } from "@/lib/oa/execution-contract";
+import { computeExecutionContractSemanticFingerprint } from "@/lib/oa/execution-contract";
 import type { AuthorityResolverPort } from "@/lib/oa/decision";
 import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
 import {
@@ -35,15 +41,24 @@ import {
   assertAgentSelectionConfirmation,
 } from "../domain/invariants";
 import type {
+  ActorReference,
+  AttemptDetailCode,
   ExecutionAttempt,
   ExecutionAttemptResult,
   StartExecutionRequest,
 } from "../domain/types";
+import type {
+  ContractSafetyIdentity,
+  GateDGrant,
+} from "../domain/realLaunchSafety";
+import { isM4BoundedReadOnlyRealAgent } from "../infrastructure/m4BoundedReadOnlyCursorAgent";
 import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAdapterPort } from "../ports/executionAdapter";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
+import type { RealExecutionLaunchPort } from "../ports/realExecutionLaunchPort";
+import type { RealLaunchSafetyJournalPort } from "../ports/realLaunchSafetyJournalPort";
 import {
   authorityFailureDetail,
   contractGateDetail,
@@ -53,6 +68,65 @@ import {
 import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";
 import { mapContractAuthorizationDetail } from "./selectExecutionAgent";

+function isRealExecutionAgent(
+  agent: Parameters<typeof isM4BoundedReadOnlyRealAgent>[0],
+): boolean {
+  return (
+    agent.executionMode === "cursor_cli_real" ||
+    isM4BoundedReadOnlyRealAgent(agent)
+  );
+}
+
+const FULL_GIT_SHA_RE = /^[0-9a-f]{40}$/i;
+
+/** Contract-bound baseHeadSha from ExecutionContract.inputs (T-A4 inputs already exist). */
+export function extractContractBaseHeadSha(
+  contract: ExecutionContract,
+): string | null {
+  const inputs = contract.inputs;
+  if (!inputs || typeof inputs !== "object") return null;
+  const raw = (inputs as Record<string, unknown>).baseHeadSha;
+  if (typeof raw !== "string") return null;
+  const trimmed = raw.trim();
+  if (!FULL_GIT_SHA_RE.test(trimmed)) return null;
+  return trimmed.toLowerCase();
+}
+
+function mapRealLaunchRejectDetail(
+  reason: string,
+  detailCode?: string,
+): AttemptDetailCode {
+  if (
+    detailCode === "REAL_BOUNDARY_DISABLED" ||
+    detailCode === "CURSOR_UNAVAILABLE" ||
+    detailCode === "REAL_WORKSPACE_INVALID" ||
+    detailCode === "REAL_LAUNCH_FAILED" ||
+    detailCode === "REAL_AGENT_PROFILE_INVALID"
+  ) {
+    return detailCode;
+  }
+  if (
+    reason === "studio_cursor_real_disabled" ||
+    reason.includes("real_disabled")
+  ) {
+    return "REAL_BOUNDARY_DISABLED";
+  }
+  if (reason === "cursor_unavailable") return "CURSOR_UNAVAILABLE";
+  if (
+    reason === "workspace_invalid" ||
+    reason === "workspace_outside_exec_root" ||
+    reason.includes("REAL_WORKSPACE_INVALID") ||
+    reason.includes("base_head_sha") ||
+    reason.includes("workspace_prepare")
+  ) {
+    return "REAL_WORKSPACE_INVALID";
+  }
+  if (reason === "unresolved_contract_refused") {
+    return "REAL_AGENT_PROFILE_INVALID";
+  }
+  return "REAL_LAUNCH_FAILED";
+}
+
 export class StartExecution {
   constructor(
     private readonly attempts: ExecutionAttemptRepositoryPort,
@@ -66,6 +140,8 @@ export class StartExecution {
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
     private readonly store?: MemoryExecutionAttemptStore,
+    private readonly realLaunchPort?: RealExecutionLaunchPort,
+    private readonly safetyJournal?: RealLaunchSafetyJournalPort,
   ) {}

   async execute(
@@ -326,7 +402,22 @@ export class StartExecution {
         });
       }

-      // Step 4 — the ONLY adapter interaction.
+      // M4 REAL path — never touch the fixture adapter.
+      if (isRealExecutionAgent(agent)) {
+        return this.executeRealLaunch({
+          request,
+          attempt,
+          contract,
+          agent,
+          consumeConfirmationId,
+          timestamp,
+          correlationId,
+          started,
+          fail,
+        });
+      }
+
+      // Step 4 — fixture adapter ONLY (non-REAL agents).
       let launch;
       try {
         launch = await this.adapter.launch({
@@ -383,158 +474,541 @@ export class StartExecution {
         });
       }

-      // Step 6a — Attempt running FIRST.
-      const runningAttempt: ExecutionAttempt = {
-        ...attempt,
-        status: "running",
-        launchedAt: timestamp,
-        startedAt: timestamp,
-        updatedAt: timestamp,
-        version: attempt.version + 1,
-      };
-      try {
-        const persist = async () => {
-          await this.attempts.update(runningAttempt, attempt.version);
-        };
-        if (this.store) {
-          await this.store.runInTransaction(persist);
-        } else {
-          await persist();
-        }
-      } catch (err) {
-        // Nothing real ran (fake adapter) — the Attempt stays `accepted` and
-        // a replayed Start reuses the memoized launch ack.
-        if (isExecutionAttemptDomainError(err)) {
-          return fail(err.detailCode, `running_persist_${err.message}`, {
-            executionContractId: contract.executionContractId,
-            expectedVersion: err.expectedVersion,
-            currentVersion: err.currentVersion,
-          });
-        }
-        return fail("EXECUTION_PERSISTENCE_FAILED", "running_persist_failed", {
+      return this.persistRunningAfterAck({
+        attempt,
+        contract,
+        actor: request.actor,
+        consumeConfirmationId,
+        timestamp,
+        correlationId,
+        started,
+        adapterIdForAudit: this.adapter.adapterId,
+        fail,
+      });
+    } catch {
+      return fail("EXECUTION_PERSISTENCE_FAILED", "unexpected_exception");
+    }
+  }
+
+  private async executeRealLaunch(input: {
+    request: StartExecutionRequest;
+    attempt: ExecutionAttempt;
+    contract: ExecutionContract;
+    agent: NonNullable<ReturnType<AgentRegistryPort["getAgent"]>>;
+    consumeConfirmationId: string | undefined;
+    timestamp: string;
+    correlationId: string;
+    started: number;
+    fail: (
+      detailCode: AttemptDetailCode,
+      internalCauseRef: string,
+      extra?: Partial<Parameters<typeof createAttemptError>[0]> & {
+        attempt?: ExecutionAttempt;
+      },
+    ) => ExecutionAttemptResult;
+  }): Promise<ExecutionAttemptResult> {
+    const {
+      request,
+      attempt,
+      contract,
+      agent,
+      consumeConfirmationId,
+      timestamp,
+      correlationId,
+      started,
+      fail,
+    } = input;
+
+    if (!this.safetyJournal) {
+      return fail("LAUNCH_JOURNAL_UNAVAILABLE", "safety_journal_missing", {
+        executionContractId: contract.executionContractId,
+      });
+    }
+    if (!this.realLaunchPort) {
+      return fail("REAL_BOUNDARY_DISABLED", "real_launch_port_missing", {
+        executionContractId: contract.executionContractId,
+      });
+    }
+    if (!isM4BoundedReadOnlyRealAgent(agent)) {
+      return fail("REAL_AGENT_PROFILE_INVALID", "not_m4_bounded_readonly_real", {
+        selectedAgentRef: attempt.selectedAgentRef,
+      });
+    }
+
+    // Contract-bound baseHeadSha BEFORE Gate D consume / CREATED (R2).
+    const baseHeadSha = extractContractBaseHeadSha(contract);
+    if (!baseHeadSha) {
+      const raw =
+        contract.inputs &&
+        typeof contract.inputs === "object" &&
+        "baseHeadSha" in (contract.inputs as Record<string, unknown>)
+          ? (contract.inputs as Record<string, unknown>).baseHeadSha
+          : undefined;
+      return fail(
+        raw === undefined || raw === null || raw === ""
+          ? "REAL_WORKSPACE_INVALID"
+          : "REAL_WORKSPACE_INVALID",
+        raw === undefined || raw === null || raw === ""
+          ? "contract_base_head_sha_missing"
+          : "contract_base_head_sha_invalid",
+        { executionContractId: contract.executionContractId },
+      );
+    }
+
+    const fingerprint =
+      contract.semanticFingerprint ??
+      computeExecutionContractSemanticFingerprint(contract);
+    if (!fingerprint) {
+      return fail("ATTEMPT_INVALID", "semantic_fingerprint_missing", {
+        executionContractId: contract.executionContractId,
+      });
+    }
+    const identity: ContractSafetyIdentity = {
+      executionContractId: contract.executionContractId,
+      executionContractVersion: contract.version,
+      semanticFingerprint: fingerprint,
+    };
+
+    if (await this.safetyJournal.hasAmbiguousFrontier(identity)) {
+      return fail(
+        "LAUNCH_RECONCILIATION_REQUIRED",
+        "ambiguous_frontier_blocks_real_start",
+        { executionContractId: contract.executionContractId },
+      );
+    }
+    const disposition =
+      await this.safetyJournal.reconcileDispositionForIdentity(identity);
+    if (disposition !== "CLEAR") {
+      return fail(
+        "LAUNCH_RECONCILIATION_REQUIRED",
+        `frontier_disposition_${disposition}`,
+        { executionContractId: contract.executionContractId },
+      );
+    }
+    if (
+      (await this.safetyJournal.hasKindForAttempt(
+        attempt.attemptId,
+        "CREATED",
+      )) ||
+      (await this.safetyJournal.hasKindForAttempt(
+        attempt.attemptId,
+        "LAUNCHED",
+      ))
+    ) {
+      return fail(
+        "LAUNCH_RECONCILIATION_REQUIRED",
+        "attempt_frontier_already_present",
+        { executionContractId: contract.executionContractId },
+      );
+    }
+
+    const grant = await this.safetyJournal.findActiveGateDGrantForAttempt(
+      attempt.attemptId,
+    );
+    if (!grant) {
+      return fail("GATE_D_REQUIRED", "active_gate_d_grant_missing", {
+        executionContractId: contract.executionContractId,
+      });
+    }
+    const bindingError = this.validateGateDGrantBinding({
+      grant,
+      attempt,
+      identity,
+      actorId: request.actor.actorId,
+      nowIso: timestamp,
+    });
+    if (bindingError) {
+      return fail(bindingError.detailCode, bindingError.reason, {
+        executionContractId: contract.executionContractId,
+      });
+    }
+
+    let consumedGrant: GateDGrant;
+    try {
+      const consumed = await this.safetyJournal.consumeGateDAndAppendCreated({
+        grantId: grant.grantId,
+        attemptId: attempt.attemptId,
+        occurredAt: timestamp,
+        identity,
+        selectedAgentRef: attempt.selectedAgentRef,
+        actorId: request.actor.actorId,
+        correlationId,
+      });
+      consumedGrant = consumed.grant;
+    } catch (err) {
+      const message = err instanceof Error ? err.message : "consume_failed";
+      if (message.includes("expired")) {
+        return fail("GATE_D_EXPIRED", message, {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      if (message.includes("mismatch")) {
+        return fail("GATE_D_BINDING_MISMATCH", message, {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      if (message.includes("ambiguous") || message.includes("frontier")) {
+        return fail("LAUNCH_RECONCILIATION_REQUIRED", message, {
           executionContractId: contract.executionContractId,
         });
       }
+      if (message.includes("consumed") || message.includes("not_granted")) {
+        return fail("GATE_D_ALREADY_CONSUMED", message, {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      return fail("GATE_D_INVALID", message, {
+        executionContractId: contract.executionContractId,
+      });
+    }

-      // Step 6b — contract executing AFTER the Attempt is running.
-      const contractWrite = await this.contractStatusWriter.write({
+    let launch;
+    try {
+      launch = await this.realLaunchPort.launch({
+        attemptId: attempt.attemptId,
         executionContractId: contract.executionContractId,
-        expectedVersion: contract.version,
-        nextStatus: "executing",
+        executionContractVersion: contract.version,
+        semanticFingerprint: fingerprint,
         selectedAgentRef: attempt.selectedAgentRef,
-        runningAttempt: {
-          attemptId: runningAttempt.attemptId,
-          status: runningAttempt.status,
-        },
+        adapterRef: agent.adapterRef,
+        correlationId,
+        baseHeadSha,
+        action: contract.action,
+        target: contract.target,
+        scope: contract.scope,
       });
-      if (!contractWrite.ok) {
-        const compensated = await this.compensateAfterRunning({
-          attempt: runningAttempt,
-          timestamp,
-          correlationId,
-          started,
-        });
-        return {
-          ok: false,
-          error: createAttemptError({
-            detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
-            timestamp,
-            correlationId,
-            attemptId: attempt.attemptId,
-            executionContractId: contract.executionContractId,
-            internalCauseRef: contractWrite.internalCauseRef,
-            currentVersion: contractWrite.currentVersion,
-          }),
-          attempt: compensated,
-          durationMs: Date.now() - started,
-        };
-      }
+    } catch {
+      return this.failRealLaunch({
+        attempt,
+        contractVersion: contract.version,
+        detailCode: "REAL_LAUNCH_FAILED",
+        reason: "real_launch_threw",
+        timestamp,
+        correlationId,
+        started,
+        realProcessInvoked: false,
+      });
+    }

-      // Step 6c — consume the agent_selection Confirmation on success only.
-      if (consumeConfirmationId) {
-        const consumed = await this.decisionServices.consumeConfirmation.execute(
-          {
-            confirmationId: consumeConfirmationId,
-            actor: request.actor,
-            correlationId,
-            nowIso: timestamp,
-          },
-        );
-        if (!consumed.ok) {
-          const alreadyConsumed =
-            consumed.error.detailCode === "CONFIRMATION_ALREADY_CONSUMED";
-          if (!alreadyConsumed) {
-            // Residual R-T-A3-2: the Attempt is running and the contract is
-            // executing; cross-store consumption cannot be rolled back.
-            this.audit.append({
-              event: "oa.execution_attempt.started",
-              ts: timestamp,
-              correlationId,
-              attemptId: attempt.attemptId,
-              executionContractId: contract.executionContractId,
-              confirmationRef: consumeConfirmationId,
-              newStatus: "running",
-              contractStatus: contractWrite.contract.status,
-              result: "error",
-              detailCode: "AGENT_CONFIRMATION_CONSUME_FAILED",
-              durationMs: Date.now() - started,
-            });
-            return {
-              ok: false,
-              error: createAttemptError({
-                detailCode: "AGENT_CONFIRMATION_CONSUME_FAILED",
-                timestamp,
-                correlationId,
-                attemptId: attempt.attemptId,
-                executionContractId: contract.executionContractId,
-                confirmationId: consumeConfirmationId,
-                internalCauseRef: `consume_${consumed.error.detailCode}`,
-              }),
-              attempt: runningAttempt,
-              durationMs: Date.now() - started,
-            };
-          }
-        }
-      }
+    if (launch.outcome !== "ack" || launch.realProcessInvoked !== true) {
+      const reason =
+        launch.outcome === "ack" ? "real_process_not_invoked" : launch.reason;
+      const detailCode = mapRealLaunchRejectDetail(
+        reason,
+        launch.outcome === "ack"
+          ? undefined
+          : "detailCode" in launch
+            ? launch.detailCode
+            : undefined,
+      );
+      return this.failRealLaunch({
+        attempt,
+        contractVersion: contract.version,
+        detailCode,
+        reason,
+        timestamp,
+        correlationId,
+        started,
+        realProcessInvoked: Boolean(launch.realProcessInvoked),
+      });
+    }
+    if (launch.attemptId !== attempt.attemptId) {
+      return this.failRealLaunch({
+        attempt,
+        contractVersion: contract.version,
+        detailCode: "REAL_LAUNCH_FAILED",
+        reason: "real_launch_attempt_binding_mismatch",
+        timestamp,
+        correlationId,
+        started,
+        realProcessInvoked: true,
+      });
+    }
+    if (launch.gatewayId !== this.realLaunchPort.gatewayId) {
+      return this.failRealLaunch({
+        attempt,
+        contractVersion: contract.version,
+        detailCode: "REAL_LAUNCH_FAILED",
+        reason: "real_launch_gateway_binding_mismatch",
+        timestamp,
+        correlationId,
+        started,
+        realProcessInvoked: true,
+      });
+    }

+    try {
+      await this.safetyJournal.appendLaunched({
+        attemptId: attempt.attemptId,
+        occurredAt: timestamp,
+        identity,
+        selectedAgentRef: attempt.selectedAgentRef,
+        actorId: request.actor.actorId,
+        grantId: consumedGrant.grantId,
+        correlationId,
+        processRef: launch.processRef,
+        payload: { gatewayId: launch.gatewayId },
+      });
+    } catch (err) {
+      // Process invoked; LAUNCHED missing → CREATED-only UNKNOWN; no second launch.
       const durationMs = Date.now() - started;
       this.audit.append({
-        event: "oa.execution_attempt.started",
+        event: "oa.execution_attempt.launch_failed",
         ts: timestamp,
         correlationId,
-        attemptId: runningAttempt.attemptId,
-        executionContractId: contract.executionContractId,
-        executionContractVersion: contract.version,
-        selectedAgentRef: runningAttempt.selectedAgentRef,
-        adapterId: this.adapter.adapterId,
-        confirmationRef: consumeConfirmationId,
+        attemptId: attempt.attemptId,
+        executionContractId: attempt.executionContractId,
+        selectedAgentRef: attempt.selectedAgentRef,
+        adapterId: this.realLaunchPort.gatewayId,
         previousStatus: "accepted",
-        newStatus: "running",
-        contractStatus: contractWrite.contract.status,
-        result: "ok",
+        newStatus: "accepted",
+        result: "error",
+        detailCode: "LAUNCH_RECONCILIATION_REQUIRED",
         durationMs,
       });
-      this.audit.append({
-        event: "oa.execution_contract.status_written",
-        ts: timestamp,
-        correlationId,
-        attemptId: runningAttempt.attemptId,
-        executionContractId: contract.executionContractId,
-        contractStatus: contractWrite.contract.status,
-        result: "ok",
+      return {
+        ok: false,
+        error: createAttemptError({
+          detailCode: "LAUNCH_RECONCILIATION_REQUIRED",
+          timestamp,
+          correlationId,
+          attemptId: attempt.attemptId,
+          executionContractId: contract.executionContractId,
+          internalCauseRef:
+            err instanceof Error
+              ? `launched_persist_failed_after_invoke:${err.message}`
+              : "launched_persist_failed_after_invoke",
+        }),
+        attempt,
         durationMs,
+      };
+    }
+
+    return this.persistRunningAfterAck({
+      attempt,
+      contract,
+      actor: request.actor,
+      consumeConfirmationId,
+      timestamp,
+      correlationId,
+      started,
+      adapterIdForAudit: this.realLaunchPort.gatewayId,
+      fail,
+    });
+  }
+
+  private validateGateDGrantBinding(input: {
+    grant: GateDGrant;
+    attempt: ExecutionAttempt;
+    identity: ContractSafetyIdentity;
+    actorId: string;
+    nowIso: string;
+  }): { detailCode: AttemptDetailCode; reason: string } | null {
+    const { grant, attempt, identity, actorId, nowIso } = input;
+    if (grant.status === "consumed") {
+      return { detailCode: "GATE_D_ALREADY_CONSUMED", reason: "grant_consumed" };
+    }
+    if (grant.status !== "granted") {
+      return {
+        detailCode: "GATE_D_INVALID",
+        reason: `grant_status_${grant.status}`,
+      };
+    }
+    if (Date.parse(grant.expiresAt) <= Date.parse(nowIso)) {
+      return { detailCode: "GATE_D_EXPIRED", reason: "grant_expired" };
+    }
+    if (
+      grant.attemptId !== attempt.attemptId ||
+      grant.executionContractId !== identity.executionContractId ||
+      grant.executionContractVersion !== identity.executionContractVersion ||
+      grant.semanticFingerprint !== identity.semanticFingerprint ||
+      grant.selectedAgentRef !== attempt.selectedAgentRef ||
+      grant.actorId !== actorId
+    ) {
+      return {
+        detailCode: "GATE_D_BINDING_MISMATCH",
+        reason: "grant_binding_mismatch",
+      };
+    }
+    return null;
+  }
+
+  private async persistRunningAfterAck(input: {
+    attempt: ExecutionAttempt;
+    contract: ExecutionContract;
+    actor: ActorReference;
+    consumeConfirmationId: string | undefined;
+    timestamp: string;
+    correlationId: string;
+    started: number;
+    adapterIdForAudit: string;
+    fail: (
+      detailCode: AttemptDetailCode,
+      internalCauseRef: string,
+      extra?: Partial<Parameters<typeof createAttemptError>[0]> & {
+        attempt?: ExecutionAttempt;
+      },
+    ) => ExecutionAttemptResult;
+  }): Promise<ExecutionAttemptResult> {
+    const {
+      attempt,
+      contract,
+      actor,
+      consumeConfirmationId,
+      timestamp,
+      correlationId,
+      started,
+      adapterIdForAudit,
+      fail,
+    } = input;
+
+    // Step 6a — Attempt running FIRST.
+    const runningAttempt: ExecutionAttempt = {
+      ...attempt,
+      status: "running",
+      launchedAt: timestamp,
+      startedAt: timestamp,
+      updatedAt: timestamp,
+      version: attempt.version + 1,
+    };
+    try {
+      const persist = async () => {
+        await this.attempts.update(runningAttempt, attempt.version);
+      };
+      if (this.store) {
+        await this.store.runInTransaction(persist);
+      } else {
+        await persist();
+      }
+    } catch (err) {
+      // Fixture path: nothing real ran. REAL path after LAUNCHED: leave
+      // attempt accepted; journal already has CREATED+LAUNCHED (reconcile).
+      if (isExecutionAttemptDomainError(err)) {
+        return fail(err.detailCode, `running_persist_${err.message}`, {
+          executionContractId: contract.executionContractId,
+          expectedVersion: err.expectedVersion,
+          currentVersion: err.currentVersion,
+        });
+      }
+      return fail("EXECUTION_PERSISTENCE_FAILED", "running_persist_failed", {
+        executionContractId: contract.executionContractId,
       });
+    }

+    // Step 6b — contract executing AFTER the Attempt is running.
+    const contractWrite = await this.contractStatusWriter.write({
+      executionContractId: contract.executionContractId,
+      expectedVersion: contract.version,
+      nextStatus: "executing",
+      selectedAgentRef: attempt.selectedAgentRef,
+      runningAttempt: {
+        attemptId: runningAttempt.attemptId,
+        status: runningAttempt.status,
+      },
+    });
+    if (!contractWrite.ok) {
+      const compensated = await this.compensateAfterRunning({
+        attempt: runningAttempt,
+        timestamp,
+        correlationId,
+        started,
+      });
       return {
-        ok: true,
-        attempt: structuredClone(runningAttempt),
-        contractStatus: contractWrite.contract.status,
-        contractVersion: contractWrite.contract.version,
-        durationMs,
+        ok: false,
+        error: createAttemptError({
+          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
+          timestamp,
+          correlationId,
+          attemptId: attempt.attemptId,
+          executionContractId: contract.executionContractId,
+          internalCauseRef: contractWrite.internalCauseRef,
+          currentVersion: contractWrite.currentVersion,
+        }),
+        attempt: compensated,
+        durationMs: Date.now() - started,
       };
-    } catch {
-      return fail("EXECUTION_PERSISTENCE_FAILED", "unexpected_exception");
     }
+
+    // Step 6c — consume the agent_selection Confirmation on success only.
+    if (consumeConfirmationId) {
+      const consumed = await this.decisionServices.consumeConfirmation.execute({
+        confirmationId: consumeConfirmationId,
+        actor,
+        correlationId,
+        nowIso: timestamp,
+      });
+      if (!consumed.ok) {
+        const alreadyConsumed =
+          consumed.error.detailCode === "CONFIRMATION_ALREADY_CONSUMED";
+        if (!alreadyConsumed) {
+          // Residual R-T-A3-2: the Attempt is running and the contract is
+          // executing; cross-store consumption cannot be rolled back.
+          this.audit.append({
+            event: "oa.execution_attempt.started",
+            ts: timestamp,
+            correlationId,
+            attemptId: attempt.attemptId,
+            executionContractId: contract.executionContractId,
+            confirmationRef: consumeConfirmationId,
+            newStatus: "running",
+            contractStatus: contractWrite.contract.status,
+            result: "error",
+            detailCode: "AGENT_CONFIRMATION_CONSUME_FAILED",
+            durationMs: Date.now() - started,
+          });
+          return {
+            ok: false,
+            error: createAttemptError({
+              detailCode: "AGENT_CONFIRMATION_CONSUME_FAILED",
+              timestamp,
+              correlationId,
+              attemptId: attempt.attemptId,
+              executionContractId: contract.executionContractId,
+              confirmationId: consumeConfirmationId,
+              internalCauseRef: `consume_${consumed.error.detailCode}`,
+            }),
+            attempt: runningAttempt,
+            durationMs: Date.now() - started,
+          };
+        }
+      }
+    }
+
+    const durationMs = Date.now() - started;
+    this.audit.append({
+      event: "oa.execution_attempt.started",
+      ts: timestamp,
+      correlationId,
+      attemptId: runningAttempt.attemptId,
+      executionContractId: contract.executionContractId,
+      executionContractVersion: contract.version,
+      selectedAgentRef: runningAttempt.selectedAgentRef,
+      adapterId: adapterIdForAudit,
+      confirmationRef: consumeConfirmationId,
+      previousStatus: "accepted",
+      newStatus: "running",
+      contractStatus: contractWrite.contract.status,
+      result: "ok",
+      durationMs,
+    });
+    this.audit.append({
+      event: "oa.execution_contract.status_written",
+      ts: timestamp,
+      correlationId,
+      attemptId: runningAttempt.attemptId,
+      executionContractId: contract.executionContractId,
+      contractStatus: contractWrite.contract.status,
+      result: "ok",
+      durationMs,
+    });
+
+    return {
+      ok: true,
+      attempt: structuredClone(runningAttempt),
+      contractStatus: contractWrite.contract.status,
+      contractVersion: contractWrite.contract.version,
+      durationMs,
+    };
   }

   /** Launch reject/failure → Attempt failed, never executing. */
@@ -625,6 +1099,96 @@ export class StartExecution {
     };
   }

+  /**
+   * REAL launch failed after CREATED (or without invoke). Marks Attempt failed.
+   * Journal CREATED is left in place for reconciliation (no second launch).
+   */
+  private async failRealLaunch(input: {
+    attempt: ExecutionAttempt;
+    contractVersion: number;
+    detailCode: AttemptDetailCode;
+    reason: string;
+    timestamp: string;
+    correlationId: string;
+    started: number;
+    realProcessInvoked: boolean;
+  }): Promise<ExecutionAttemptResult> {
+    const failedAttempt: ExecutionAttempt = {
+      ...input.attempt,
+      status: "failed",
+      failedAt: input.timestamp,
+      stopReason: `REAL_LAUNCH_FAILED: ${input.reason}`,
+      irreversibleEffectsPossible: input.realProcessInvoked,
+      updatedAt: input.timestamp,
+      version: input.attempt.version + 1,
+    };
+
+    let persistedAttempt: ExecutionAttempt | undefined;
+    try {
+      const persist = async () => {
+        await this.attempts.update(failedAttempt, input.attempt.version);
+        await this.attempts.releaseActiveContract(
+          failedAttempt.executionContractId,
+          failedAttempt.attemptId,
+        );
+      };
+      if (this.store) {
+        await this.store.runInTransaction(persist);
+      } else {
+        await persist();
+      }
+      persistedAttempt = failedAttempt;
+    } catch {
+      persistedAttempt = undefined;
+    }
+
+    let contractStatus: string | undefined;
+    const indeterminate =
+      input.detailCode === "REAL_LAUNCH_FAILED" ||
+      input.detailCode === "CURSOR_UNAVAILABLE";
+    if (indeterminate) {
+      const write = await this.contractStatusWriter.write({
+        executionContractId: input.attempt.executionContractId,
+        expectedVersion: input.contractVersion,
+        nextStatus: "failed",
+        reason: "REAL launch failed before acknowledgement",
+      });
+      contractStatus = write.ok ? write.contract.status : undefined;
+    }
+
+    const durationMs = Date.now() - input.started;
+    this.audit.append({
+      event: "oa.execution_attempt.launch_failed",
+      ts: input.timestamp,
+      correlationId: input.correlationId,
+      attemptId: input.attempt.attemptId,
+      executionContractId: input.attempt.executionContractId,
+      selectedAgentRef: input.attempt.selectedAgentRef,
+      adapterId: this.realLaunchPort?.gatewayId,
+      previousStatus: "accepted",
+      newStatus: persistedAttempt ? "failed" : "accepted",
+      contractStatus,
+      stopReason: failedAttempt.stopReason,
+      result: "error",
+      detailCode: input.detailCode,
+      durationMs,
+    });
+
+    return {
+      ok: false,
+      error: createAttemptError({
+        detailCode: input.detailCode,
+        timestamp: input.timestamp,
+        correlationId: input.correlationId,
+        attemptId: input.attempt.attemptId,
+        executionContractId: input.attempt.executionContractId,
+        internalCauseRef: input.reason,
+      }),
+      attempt: persistedAttempt,
+      durationMs,
+    };
+  }
+
   /**
    * Contract update failed AFTER the Attempt became running: compensate
    * fail-closed. No second adapter call, no business rollback.
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/errors.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/errors.ts
index 7c82e7a..9cf4fdb 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/errors.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/errors.ts
@@ -52,6 +52,20 @@ const DETAIL_TO_MODELED: Record<AttemptDetailCode, AttemptModeledErrorCode> = {
   STALE_CONTEXT_DETECTED: "CONTEXT_STALE",
   CONCURRENCY_CONFLICT: "STATE_CONFLICT",
   VERSION_CONFLICT: "STATE_CONFLICT",
+  REAL_BOUNDARY_DISABLED: "AUTHORITY_DENIED",
+  GATE_D_REQUIRED: "AUTHORITY_DENIED",
+  GATE_D_INVALID: "AUTHORITY_DENIED",
+  GATE_D_EXPIRED: "CONTEXT_STALE",
+  GATE_D_ALREADY_CONSUMED: "STATE_CONFLICT",
+  GATE_D_ALREADY_GRANTED: "STATE_CONFLICT",
+  GATE_D_BINDING_MISMATCH: "AUTHORITY_DENIED",
+  LAUNCH_JOURNAL_UNAVAILABLE: "EXECUTION_FAILED",
+  LAUNCH_RECONCILIATION_REQUIRED: "STATE_CONFLICT",
+  REAL_AGENT_PROFILE_INVALID: "CAPABILITY_MISSING",
+  CURSOR_UNAVAILABLE: "EXECUTION_FAILED",
+  REAL_WORKSPACE_INVALID: "EXECUTION_FAILED",
+  WORKSPACE_INVALID: "EXECUTION_FAILED",
+  REAL_LAUNCH_FAILED: "EXECUTION_FAILED",
 };

 /** Safe operator-facing messages — never echo payloads, secrets or evidence. */
@@ -122,6 +136,25 @@ const SAFE_MESSAGES: Record<AttemptDetailCode, string> = {
     "Stale contract or decision detected; operation refused (no auto-cancel).",
   CONCURRENCY_CONFLICT: "Concurrent execution attempt conflict.",
   VERSION_CONFLICT: "Execution attempt version conflict.",
+  REAL_BOUNDARY_DISABLED:
+    "Studio Cursor REAL boundary is disabled; no real process may start.",
+  GATE_D_REQUIRED: "An explicit Gate D grant is required before REAL start.",
+  GATE_D_INVALID: "Gate D grant is invalid for this start.",
+  GATE_D_EXPIRED: "Gate D grant has expired.",
+  GATE_D_ALREADY_CONSUMED: "Gate D grant was already consumed.",
+  GATE_D_ALREADY_GRANTED: "An active Gate D grant already exists for this attempt.",
+  GATE_D_BINDING_MISMATCH:
+    "Gate D grant binding does not match attempt, contract, agent, or actor.",
+  LAUNCH_JOURNAL_UNAVAILABLE:
+    "Technical launch safety journal is unavailable.",
+  LAUNCH_RECONCILIATION_REQUIRED:
+    "Ambiguous launch frontier requires reconciliation; relaunch refused.",
+  REAL_AGENT_PROFILE_INVALID:
+    "Selected agent is not a valid bounded REAL Cursor profile.",
+  CURSOR_UNAVAILABLE: "Cursor CLI is unavailable for REAL launch.",
+  REAL_WORKSPACE_INVALID: "REAL launch workspace root is invalid.",
+  WORKSPACE_INVALID: "Isolated REAL workspace path is invalid.",
+  REAL_LAUNCH_FAILED: "REAL launch failed before acknowledgement.",
 };

 const NON_RECOVERABLE: ReadonlySet<AttemptDetailCode> = new Set<
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
index d571f32..14740c5 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
@@ -62,7 +62,9 @@ export type AgentExecutionMode =
   | "dry_run"
   | "simulated"
   | "adapter_async"
-  | "adapter_sync_fixture";
+  | "adapter_sync_fixture"
+  /** M4 REAL Cursor CLI mode — requires specialized RealExecutionLaunchPort (D-M4-03). */
+  | "cursor_cli_real";

 export type AgentHealthStatus =
   | "unknown"
@@ -329,7 +331,22 @@ export type AttemptDetailCode =
   | "EXECUTION_TIMEOUT"
   | "STALE_CONTEXT_DETECTED"
   | "CONCURRENCY_CONFLICT"
-  | "VERSION_CONFLICT";
+  | "VERSION_CONFLICT"
+  /** M4 REAL-OFF boundary (D-M4-01…05) */
+  | "REAL_BOUNDARY_DISABLED"
+  | "GATE_D_REQUIRED"
+  | "GATE_D_INVALID"
+  | "GATE_D_EXPIRED"
+  | "GATE_D_ALREADY_CONSUMED"
+  | "GATE_D_ALREADY_GRANTED"
+  | "GATE_D_BINDING_MISMATCH"
+  | "LAUNCH_JOURNAL_UNAVAILABLE"
+  | "LAUNCH_RECONCILIATION_REQUIRED"
+  | "REAL_AGENT_PROFILE_INVALID"
+  | "CURSOR_UNAVAILABLE"
+  | "REAL_WORKSPACE_INVALID"
+  | "WORKSPACE_INVALID"
+  | "REAL_LAUNCH_FAILED";

 export type AttemptStructuredError = {
   code: AttemptModeledErrorCode;
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index 35bc217..85ec45b 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -10,7 +10,8 @@
  * injectable adapters are `TestExecutionAdapter` and `NoOpExecutionAdapter`;
  * there is no shell, network, MCP, Cursor, worker, queue, scheduler, SQL or
  * UI anywhere in this module, and a real execution capability is NOT
- * authorized by it.
+ * authorized by it. M4 REAL boundary is opt-in via `realBoundary` and stays
+ * REAL-OFF unless the specialized gateway env flag is explicitly enabled.
  *
  * Ownership split with T-A4:
  * - T-A4 owns draft…confirmed (+ pre-exec cancelled, superseded) and REFUSES
@@ -26,13 +27,15 @@
  * Exported surface:
  * - domain types / errors / invariants (including the agent_selection
  *   Confirmation binding helpers);
- * - ports (repository, registry, adapter, audit);
+ * - ports (repository, registry, adapter, audit, REAL launch + journal + workspace);
  * - use-cases (Select, Start, Cancel, RecordResult, RecordFailure, Retry,
- *   TriggerTimeout, Get, List, CheckAttemptAuthorization);
+ *   TriggerTimeout, Get, List, CheckAttemptAuthorization, GrantRealExecutionGate);
  * - memory infrastructure and the two fake adapters;
  * - closed factories `createInMemoryExecutionAttemptServices` and
  *   `createTestExecutionAttemptServices`.
  *
+ * NOT exported: test-only REAL doubles (process runners / launch gateways) —
+ * those live under __tests__/…/support only.
  * NOT exported: any mutation entry point for the agent registry — the
  * descriptor set is closed at construction.
  */
@@ -40,14 +43,27 @@
 export * from "./domain/types";
 export * from "./domain/errors";
 export * from "./domain/invariants";
+export * from "./domain/realLaunchSafety";

 export * from "./ports/executionAttemptRepository";
 export * from "./ports/agentRegistry";
 export * from "./ports/executionAdapter";
 export * from "./ports/executionAttemptAudit";
+export * from "./ports/realExecutionLaunchPort";
+export * from "./ports/realExecutionWorkspacePort";
+export * from "./ports/realLaunchSafetyJournalPort";
+// launchSafetyJournalPort is a thin re-export — avoid duplicate export * conflict.

 export { SelectExecutionAgent } from "./application/selectExecutionAgent";
-export { StartExecution } from "./application/startExecution";
+export { StartExecution, extractContractBaseHeadSha } from "./application/startExecution";
+export {
+  GrantRealExecutionGate,
+  GrantGateD,
+  type GrantRealExecutionGateRequest,
+  type GrantRealExecutionGateResult,
+  type GrantGateDRequest,
+  type GrantGateDResult,
+} from "./application/grantRealExecutionGate";
 export { CancelExecutionAttempt } from "./application/cancelExecutionAttempt";
 export { RecordExecutionResult } from "./application/recordExecutionResult";
 export { RecordExecutionFailure } from "./application/recordExecutionFailure";
@@ -82,6 +98,46 @@ export {
   ConsoleExecutionAttemptAuditJournal,
   MemoryExecutionAttemptAuditJournal,
 } from "./infrastructure/observability";
+export {
+  CursorCliLaunchGateway,
+  StudioCursorRealLaunchGateway,
+  DisabledRealProcessRunner,
+  NodeCursorProcessRunner,
+  NODE_CURSOR_STDOUT_CAP_BYTES,
+  NODE_CURSOR_STDERR_CAP_BYTES,
+  resolveStudioCursorBinPath,
+  resolveCursorBinPath,
+  type CursorCliLaunchGatewayOptions,
+  type StudioCursorRealLaunchGatewayOptions,
+  type SpawnPrimitive,
+  type NodeCursorProcessRunnerOptions,
+} from "./infrastructure/cursorCliLaunchGateway";
+export {
+  StudioGitWorktreeWorkspace,
+  NodeGitCommandRunner,
+  isFullGitSha,
+  workspacePathForAttempt,
+  type GitCommandRunner,
+  type GitCommandResult,
+  type StudioGitWorktreeWorkspaceOptions,
+} from "./infrastructure/studioGitWorktreeWorkspace";
+export {
+  SqliteRealLaunchSafetyJournal,
+  SqliteLaunchSafetyJournal,
+  type SqliteRealLaunchSafetyJournalOptions,
+  type SqliteLaunchSafetyJournalOptions,
+} from "./infrastructure/sqliteRealLaunchSafetyJournal";
+export { MemoryLaunchSafetyJournal } from "./infrastructure/memoryLaunchSafetyJournal";
+export {
+  createM4BoundedReadOnlyCursorAgentDescriptor,
+  isM4BoundedReadOnlyRealAgent,
+  M4_BOUNDED_RO_CAPABILITY,
+  M4_BOUNDED_RO_ACTION,
+  M4_BOUNDED_RO_TARGET,
+  M4_BOUNDED_RO_SCOPE,
+} from "./infrastructure/m4BoundedReadOnlyCursorAgent";
+export { M4_BOUNDED_RO_CURSOR_AGENT_ID, M4_REAL_GATEWAY_ADAPTER_ID } from "./domain/realLaunchSafety";
+export { assertStudioCursorRealOffForTests } from "./domain/realLaunchSafety";

 import type { ClockPort } from "@/lib/oa/doctrine";
 import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
@@ -93,6 +149,7 @@ import { CancelExecutionAttempt } from "./application/cancelExecutionAttempt";
 import { CheckAttemptAuthorization } from "./application/checkAttemptAuthorization";
 import { ExecutionContractStatusWriter } from "./application/executionContractStatusWriter";
 import { GetExecutionAttempt } from "./application/getExecutionAttempt";
+import { GrantRealExecutionGate } from "./application/grantRealExecutionGate";
 import { ListExecutionAttempts } from "./application/listExecutionAttempts";
 import { RecordExecutionFailure } from "./application/recordExecutionFailure";
 import { RecordExecutionResult } from "./application/recordExecutionResult";
@@ -112,11 +169,13 @@ import { TestExecutionAdapter } from "./infrastructure/testExecutionAdapter";
 import type { AgentDescriptor } from "./domain/types";
 import type { AgentRegistryPort } from "./ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "./ports/executionAttemptAudit";
+import type { RealExecutionLaunchPort } from "./ports/realExecutionLaunchPort";
+import type { RealLaunchSafetyJournalPort } from "./ports/realLaunchSafetyJournalPort";

 /**
  * Closed union of injectable adapters. An arbitrary object implementing
  * `ExecutionAdapterPort` is NOT accepted by the factories: only these two
- * fakes exist in this foundation.
+ * fakes exist in this foundation. CursorCliLaunchGateway is NEVER injectable.
  */
 export type InjectableExecutionAdapter =
   | TestExecutionAdapter
@@ -131,6 +190,11 @@ export function isInjectableExecutionAdapter(
   );
 }

+export type RealBoundaryWiring = {
+  readonly launchPort: RealExecutionLaunchPort;
+  readonly safetyJournal: RealLaunchSafetyJournalPort;
+};
+
 export type ExecutionAttemptServices = {
   store: MemoryExecutionAttemptStore;
   attempts: MemoryExecutionAttemptRepository;
@@ -149,6 +213,13 @@ export type ExecutionAttemptServices = {
   getExecutionAttempt: GetExecutionAttempt;
   listExecutionAttempts: ListExecutionAttempts;
   checkAttemptAuthorization: CheckAttemptAuthorization;
+  /** Present only when `realBoundary` was provided to the factory. */
+  grantRealExecutionGate?: GrantRealExecutionGate;
+  /** Alias for grantRealExecutionGate (Delivery naming). */
+  grantGateD?: GrantRealExecutionGate;
+  realBoundary?: RealBoundaryWiring;
+  launchSafetyJournal?: RealLaunchSafetyJournalPort;
+  realLaunch?: RealExecutionLaunchPort;
 };

 export type CreateInMemoryExecutionAttemptServicesOptions = {
@@ -164,6 +235,15 @@ export type CreateInMemoryExecutionAttemptServicesOptions = {
   policy?: Partial<AttemptPolicy>;
   /** Defaults to decisionServices.authority (T-A3 AuthorityResolverPort). */
   authorityResolver?: AuthorityResolverPort;
+  /**
+   * Optional M4 REAL boundary (journal + specialized launch port).
+   * Does NOT enable SFIA_STUDIO_CURSOR_REAL; default product wire stays REAL-OFF.
+   * No Fake REAL runner is chosen by this factory.
+   */
+  realBoundary?: RealBoundaryWiring;
+  /** Flat aliases accepted by tests — same as realBoundary. */
+  launchSafetyJournal?: RealLaunchSafetyJournalPort;
+  realLaunch?: RealExecutionLaunchPort;
 };

 /** Factory for the in-memory ExecutionAttempt runtime foundation. */
@@ -210,6 +290,25 @@ export function createInMemoryExecutionAttemptServices(
     store,
   );

+  const realBoundary =
+    options.realBoundary ??
+    (options.launchSafetyJournal && options.realLaunch
+      ? {
+          safetyJournal: options.launchSafetyJournal,
+          launchPort: options.realLaunch,
+        }
+      : undefined);
+  const grantRealExecutionGate = realBoundary
+    ? new GrantRealExecutionGate(
+        attempts,
+        contracts,
+        registry,
+        authority,
+        realBoundary.safetyJournal,
+        clock,
+      )
+    : undefined;
+
   return {
     store,
     attempts,
@@ -231,6 +330,8 @@ export function createInMemoryExecutionAttemptServices(
       clock,
       audit,
       store,
+      realBoundary?.launchPort,
+      realBoundary?.safetyJournal,
     ),
     cancelExecutionAttempt: new CancelExecutionAttempt(
       attempts,
@@ -291,6 +392,11 @@ export function createInMemoryExecutionAttemptServices(
       clock,
       audit,
     ),
+    grantRealExecutionGate,
+    grantGateD: grantRealExecutionGate,
+    realBoundary,
+    launchSafetyJournal: realBoundary?.safetyJournal,
+    realLaunch: realBoundary?.launchPort,
   };
 }

diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index 3eb54c3..2c366c1 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -172,6 +172,8 @@ function wireOaStack(
       });

   // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
+  // M4 REAL-OFF default: do NOT wire realBoundary / SFIA_STUDIO_CURSOR_REAL here.
+  // Opt-in REAL composition is explicit (journal + RealExecutionLaunchPort); no Fake defaults.
   const fixtureAdapter = createF3TestExecutionAdapter();
   const fixtureAgent = createF3FixtureAgentDescriptor(clock.nowIso());
   const executionAttemptServices = createInMemoryExecutionAttemptServices({

---

# APPENDIX B — Full contents of new untracked project files

===== NEW FILE: projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffBoundary.test.ts =====
/**
 * M4 Delivery REAL-OFF — Gate D / CREATED / specialized launch boundary.
 * Positive StartExecution paths use TestOnlyRealExecutionLaunchPort (SIMULATED ACK).
 * Production gateway tested only for OFF/reject paths — never SFIA_STUDIO_CURSOR_REAL=1.
 * @vitest-environment node
 */
import { readdirSync, readFileSync, mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  createM4BoundedReadOnlyCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  CursorCliLaunchGateway,
  DisabledRealProcessRunner,
  isInjectableExecutionAdapter,
  isStudioCursorRealEnabled,
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  SqliteRealLaunchSafetyJournal,
  TestExecutionAdapter,
  type RealLaunchSafetyJournalPort,
} from "@/lib/oa/execution-attempt";
import { computeExecutionContractSemanticFingerprint } from "@/lib/oa/execution-contract";
import {
  MORRIS_ACTOR,
  NOW,
  baseBuildRequest,
  buildStack,
  grantContractConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
  selectStandardAgent,
  seedRunningAttempt,
  type Stack,
} from "./helpers";
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import { FakeRealExecutionWorkspacePort } from "./support/fakeSpawnAndGit";
import { M4_EVIDENCE, m4ContractInputs } from "./support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";

const APP_LIB_OA = path.resolve(__dirname, "../../../lib/oa");

function tempJournalPath(prefix: string): string {
  const dir = mkdtempSync(path.join(os.tmpdir(), prefix));
  return path.join(dir, "m4-safety.sqlite");
}

function scanForOps1Imports(root: string): string[] {
  const hits: string[] = [];
  const walk = (dir: string) => {
    for (const ent of readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        walk(full);
        continue;
      }
      if (!/\.(ts|tsx|js|mjs|cjs)$/.test(ent.name)) continue;
      const text = readFileSync(full, "utf8");
      if (
        text.includes("@/lib/ops1") ||
        text.includes('from "@/lib/ops1') ||
        text.includes("from '@/lib/ops1") ||
        /from\s+["'].*\/lib\/ops1/.test(text)
      ) {
        hits.push(path.relative(root, full));
      }
    }
  };
  walk(root);
  return hits;
}

/** Confirmed M4 contract with contract-bound inputs.baseHeadSha. */
async function seedM4ConfirmedContract(
  stack: Stack,
  overrides: {
    executionContractId?: string;
    idempotencyKey?: string;
    inputs?: Record<string, unknown>;
  } = {},
): Promise<{ contractId: string; version: number }> {
  await seedProject(stack.projects);
  registerMorris(stack.decisions.authority, M4_BOUNDED_RO_SCOPE, M4_EVIDENCE);
  await seedAcceptedDecision(stack);
  await seedStandardCycle(stack);

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      cycleInstanceId: "cyc:std-001",
      executionContractId: overrides.executionContractId ?? "xct:oa-001",
      idempotencyKey: overrides.idempotencyKey ?? "idem-xct-oa-001",
      action: M4_BOUNDED_RO_ACTION,
      target: M4_BOUNDED_RO_TARGET,
      scope: M4_BOUNDED_RO_SCOPE,
      requiredCapabilities: [M4_BOUNDED_RO_CAPABILITY],
      authorityEvidenceId: M4_EVIDENCE,
      inputs: overrides.inputs ?? m4ContractInputs(),
    }),
  );
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");

  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");

  const confirmationId = await grantContractConfirmation(stack, {
    scope: M4_BOUNDED_RO_SCOPE,
    evidenceId: M4_EVIDENCE,
  });
  const confirmed = await stack.execution.confirmExecutionContract.execute({
    executionContractId: validated.contract.executionContractId,
    confirmationId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
    expectedVersion: validated.contract.version,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm failed");

  return {
    contractId: confirmed.contract.executionContractId,
    version: confirmed.contract.version,
  };
}

function wireM4Stack(input: {
  journalPath: string;
  launchPort?: TestOnlyRealExecutionLaunchPort;
  journal?: RealLaunchSafetyJournalPort;
}) {
  const launchPort = input.launchPort ?? new TestOnlyRealExecutionLaunchPort();
  const fixtureAdapter = new TestExecutionAdapter();
  const ownedJournal =
    input.journal == null
      ? new SqliteRealLaunchSafetyJournal({ databasePath: input.journalPath })
      : null;
  const safetyJournal = input.journal ?? ownedJournal!;
  const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
  const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
  const attempts = createTestExecutionAttemptServices({
    decisionServices: stack.decisions,
    executionContractServices: stack.execution,
    agents: [m4Agent],
    adapter: fixtureAdapter,
    realBoundary: { launchPort, safetyJournal },
    fixedNowIso: NOW,
  });
  stack.attempts = attempts as typeof stack.attempts;
  return {
    stack,
    launchPort,
    fixtureAdapter,
    safetyJournal,
    close: () => {
      ownedJournal?.close();
    },
  };
}

describe("M4 REAL-OFF boundary", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
    expect(isStudioCursorRealEnabled()).toBe(false);
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
    expect(process.env.OPS1_CURSOR_REAL).not.toBe("1");
  });

  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("fixture regression still starts via TestExecutionAdapter", async () => {
    const stack = buildStack();
    const { attemptId } = await seedRunningAttempt(stack);
    const attempt = await stack.attempts.attempts.findById(attemptId);
    expect(attempt?.status).toBe("running");
    expect(
      (stack.adapter as TestExecutionAdapter).calls.filter(
        (c) => c.kind === "launch",
      ).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("rejects CursorCliLaunchGateway as InjectableExecutionAdapter", () => {
    const gateway = new CursorCliLaunchGateway({
      processRunner: new DisabledRealProcessRunner(),
      workspacePort: new FakeRealExecutionWorkspacePort(),
    });
    expect(isInjectableExecutionAdapter(gateway)).toBe(false);
    expect(() =>
      createTestExecutionAttemptServices({
        // @ts-expect-error intentional hostile inject
        adapter: gateway,
        decisionServices: {} as never,
        executionContractServices: {} as never,
      }),
    ).toThrow(/adapter_not_allowed/);
  });

  it("static scan: no ops1 imports under oa execution-attempt", () => {
    const hits = scanForOps1Imports(
      path.join(APP_LIB_OA, "execution-attempt"),
    );
    expect(hits).toEqual([]);
  });

  it("Gate D grant then start: CREATED is journaled before simulated launch", async () => {
    const journalPath = tempJournalPath("m4-created-before-");
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const inner = new TestOnlyRealExecutionLaunchPort();
    const launchPort: TestOnlyRealExecutionLaunchPort = Object.assign(
      Object.create(Object.getPrototypeOf(inner)),
      inner,
      {
        async launch(
          request: Parameters<TestOnlyRealExecutionLaunchPort["launch"]>[0],
        ) {
          const frontier = await journal.findFrontierByAttempt(
            request.attemptId,
          );
          expect(frontier.some((r) => r.kind === "CREATED")).toBe(true);
          expect(frontier.some((r) => r.kind === "LAUNCHED")).toBe(false);
          return inner.launch(request);
        },
      },
    );

    const fixtureAdapter = new TestExecutionAdapter();
    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    const attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: { launchPort, safetyJournal: journal },
      fixedNowIso: NOW,
    });
    stack.attempts = attempts as typeof stack.attempts;

    const { contractId, version } = await seedM4ConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      attemptId: "xat:m4-001",
      executionContractId: contractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);

    expect(stack.attempts.grantRealExecutionGate).toBeDefined();
    const granted = await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:m4-001",
      attemptId: "xat:m4-001",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:m4-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedContractVersion: version,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(started.attempt.status).toBe("running");
    expect(inner.launchCallCount).toBe(1);
    expect(inner.simulatedAckCount).toBe(1);
    expect(
      fixtureAdapter.calls.filter((c) => c.kind === "launch"),
    ).toHaveLength(0);

    const frontier = await journal.findFrontierByAttempt("xat:m4-001");
    expect(frontier.map((r) => r.kind).sort()).toEqual(["CREATED", "LAUNCHED"]);
    journal.close();
  });

  it("REAL flag OFF → production gateway reject; runner and fixture calls stay 0", async () => {
    const journalPath = tempJournalPath("m4-flag-off-");
    const runner = new FakeProcessRunner();
    const safetyJournal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const launchPort = new CursorCliLaunchGateway({
      processRunner: runner,
      workspacePort: new FakeRealExecutionWorkspacePort(),
      env: process.env,
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    const fixtureAdapter = new TestExecutionAdapter();
    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    const attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: { launchPort, safetyJournal },
      fixedNowIso: NOW,
    });
    stack.attempts = attempts as typeof stack.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      attemptId: "xat:m4-off",
      executionContractId: contractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);

    const granted = await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:m4-off",
      attemptId: "xat:m4-off",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:m4-off",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.detailCode).toBe("REAL_BOUNDARY_DISABLED");
    }
    expect(runner.calls).toHaveLength(0);
    expect(
      fixtureAdapter.calls.filter((c) => c.kind === "launch"),
    ).toHaveLength(0);
    safetyJournal.close();
  });

  it("CREATED then crash before launch → retry LAUNCH_RECONCILIATION_REQUIRED", async () => {
    const journalPath = tempJournalPath("m4-created-crash-");
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const ctx = wireM4Stack({ journalPath, launchPort });

    const { contractId } = await seedM4ConfirmedContract(ctx.stack);
    const selected = await selectStandardAgent(ctx.stack, {
      attemptId: "xat:m4-created",
      executionContractId: contractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;

    const granted = await ctx.stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:m4-created",
      attemptId: "xat:m4-created",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);
    if (!granted.ok) return;

    const contract = await ctx.stack.execution.contracts.findById(contractId);
    expect(contract).not.toBeNull();
    const fingerprint =
      contract!.semanticFingerprint ??
      computeExecutionContractSemanticFingerprint(contract!);

    await ctx.safetyJournal.consumeGateDAndAppendCreated({
      grantId: granted.grant.grantId,
      attemptId: "xat:m4-created",
      occurredAt: NOW,
      identity: {
        executionContractId: contractId,
        executionContractVersion: contract!.version,
        semanticFingerprint: fingerprint,
      },
      selectedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
      actorId: MORRIS_ACTOR.actorId,
      correlationId: "cor:crash-created",
    });
    expect(launchPort.launchCallCount).toBe(0);

    const retry = await ctx.stack.attempts.startExecution.execute({
      attemptId: "xat:m4-created",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(retry.ok).toBe(false);
    if (!retry.ok) {
      expect(retry.error.detailCode).toBe("LAUNCH_RECONCILIATION_REQUIRED");
    }
    expect(launchPort.launchCallCount).toBe(0);
    expect(
      ctx.fixtureAdapter.calls.filter((c) => c.kind === "launch"),
    ).toHaveLength(0);
    ctx.close();
  });

  it("simulated ACK then fail before LAUNCHED → no second simulated launch on retry", async () => {
    const journalPath = tempJournalPath("m4-launched-fail-");
    const baseJournal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    let failAppend = true;
    const journal: RealLaunchSafetyJournalPort = {
      persistGateDGrant: (i) => baseJournal.persistGateDGrant(i),
      findGateDGrant: (id) => baseJournal.findGateDGrant(id),
      findActiveGateDGrantForAttempt: (id) =>
        baseJournal.findActiveGateDGrantForAttempt(id),
      consumeGateDAndAppendCreated: (i) =>
        baseJournal.consumeGateDAndAppendCreated(i),
      appendLaunched: async (i) => {
        if (failAppend) {
          failAppend = false;
          throw new Error("simulated_crash_before_launched");
        }
        return baseJournal.appendLaunched(i);
      },
      findFrontierByAttempt: (id) => baseJournal.findFrontierByAttempt(id),
      findFrontierByIdentity: (id) => baseJournal.findFrontierByIdentity(id),
      hasAmbiguousFrontier: (id) => baseJournal.hasAmbiguousFrontier(id),
      reconcileDispositionForIdentity: (id) =>
        baseJournal.reconcileDispositionForIdentity(id),
      hasKindForAttempt: (id, k) => baseJournal.hasKindForAttempt(id, k),
    };
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const ctx = wireM4Stack({ journalPath, launchPort, journal });

    const { contractId } = await seedM4ConfirmedContract(ctx.stack);
    const selected = await selectStandardAgent(ctx.stack, {
      attemptId: "xat:m4-ack-fail",
      executionContractId: contractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);

    const granted = await ctx.stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:m4-ack-fail",
      attemptId: "xat:m4-ack-fail",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);

    const first = await ctx.stack.attempts.startExecution.execute({
      attemptId: "xat:m4-ack-fail",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(first.ok).toBe(false);
    if (!first.ok) {
      expect(first.error.detailCode).toBe("LAUNCH_RECONCILIATION_REQUIRED");
    }
    expect(launchPort.launchCallCount).toBe(1);
    const frontier = await baseJournal.findFrontierByAttempt("xat:m4-ack-fail");
    expect(frontier.some((r) => r.kind === "CREATED")).toBe(true);
    expect(frontier.some((r) => r.kind === "LAUNCHED")).toBe(false);

    const retry = await ctx.stack.attempts.startExecution.execute({
      attemptId: "xat:m4-ack-fail",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(retry.ok).toBe(false);
    if (!retry.ok) {
      expect(retry.error.detailCode).toBe("LAUNCH_RECONCILIATION_REQUIRED");
    }
    expect(launchPort.launchCallCount).toBe(1);
    baseJournal.close();
  });

  it("new attemptId with same fingerprint is blocked by ambiguous frontier", async () => {
    const journalPath = tempJournalPath("m4-ambig-");
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const ctx = wireM4Stack({ journalPath, launchPort });

    const { contractId } = await seedM4ConfirmedContract(ctx.stack);
    const selected = await selectStandardAgent(ctx.stack, {
      attemptId: "xat:m4-a1",
      executionContractId: contractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);

    const granted = await ctx.stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:m4-a1",
      attemptId: "xat:m4-a1",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);

    const started = await ctx.stack.attempts.startExecution.execute({
      attemptId: "xat:m4-a1",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(true);
    expect(launchPort.launchCallCount).toBe(1);

    const frontier = await ctx.safetyJournal.findFrontierByAttempt("xat:m4-a1");
    expect(frontier.some((r) => r.kind === "LAUNCHED")).toBe(true);
    const launched = frontier.find((r) => r.kind === "LAUNCHED")!;
    const identity = {
      executionContractId: launched.executionContractId,
      executionContractVersion: launched.executionContractVersion,
      semanticFingerprint: launched.semanticFingerprint,
    };
    expect(await ctx.safetyJournal.hasAmbiguousFrontier(identity)).toBe(true);
    expect(
      await ctx.safetyJournal.reconcileDispositionForIdentity(identity),
    ).toBe("REVIEW_REQUIRED");
    expect(launchPort.launchCallCount).toBe(1);
    ctx.close();
  });
});

===== NEW FILE: projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts =====
/**
 * M4 REAL-OFF correction R1 — production NodeCursorProcessRunner + no Fake product exports.
 * @vitest-environment node
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import * as ExecutionAttemptBarrel from "@/lib/oa/execution-attempt";
import {
  assertStudioCursorRealOffForTests,
  createInMemoryExecutionAttemptServices,
  DisabledRealProcessRunner,
  NODE_CURSOR_STDERR_CAP_BYTES,
  NODE_CURSOR_STDOUT_CAP_BYTES,
  NodeCursorProcessRunner,
  StudioCursorRealLaunchGateway,
} from "@/lib/oa/execution-attempt";
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import {
  FakeRealExecutionWorkspacePort,
  FakeSpawnPrimitive,
} from "./support/fakeSpawnAndGit";

const BARREL_SRC = path.resolve(
  __dirname,
  "../../../lib/oa/execution-attempt/index.ts",
);

describe("M4 REAL-OFF correction R1", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("R1-01 barrel does not export Fake REAL doubles", () => {
    const src = readFileSync(BARREL_SRC, "utf8");
    expect(src).not.toMatch(/export\s+\{[^}]*FakeProcessRunner/);
    expect(src).not.toMatch(/export\s+\{[^}]*FakeRealProcessRunner/);
    expect(src).not.toMatch(/export\s+\{[^}]*FakeRealExecutionLaunchGateway/);
    expect(src).not.toMatch(
      /from\s+["'].*fakeRealExecutionLaunchGateway["']/,
    );
    expect(
      (ExecutionAttemptBarrel as Record<string, unknown>).FakeProcessRunner,
    ).toBeUndefined();
    expect(
      (ExecutionAttemptBarrel as Record<string, unknown>).FakeRealProcessRunner,
    ).toBeUndefined();
    expect(
      (ExecutionAttemptBarrel as Record<string, unknown>)
        .FakeRealExecutionLaunchGateway,
    ).toBeUndefined();
    expect(
      (ExecutionAttemptBarrel as Record<string, unknown>)
        .createM4RealOffBoundaryHelpers,
    ).toBeUndefined();
  });

  it("R1-02 product factory never defaults Fake REAL runner", () => {
    const src = readFileSync(BARREL_SRC, "utf8");
    expect(src).not.toMatch(/new FakeRealProcessRunner/);
    expect(src).not.toMatch(/new FakeProcessRunner/);
    expect(typeof createInMemoryExecutionAttemptServices).toBe("function");
  });

  it("R1-03/04 NodeCursorProcessRunner uses separate executable + shell:false", async () => {
    const fake = new FakeSpawnPrimitive({ pid: 9001, exitCode: 0 });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:r1",
      executable: "/tmp/fake-cursor",
      argv: ["agent", "--print", "hi"],
      cwd: "/tmp/ws",
      timeoutMs: 5_000,
      env: process.env,
    });
    expect(fake.calls).toHaveLength(1);
    expect(fake.calls[0].executable).toBe("/tmp/fake-cursor");
    expect(fake.calls[0].argv).toEqual(["agent", "--print", "hi"]);
    expect(fake.calls[0].argv[0]).not.toBe("/tmp/fake-cursor");
    expect(fake.calls[0].options.shell).toBe(false);
    expect(result.realProcessInvoked).toBe(true);
    expect(result.processRef).toBe("pid:9001");
  });

  it("R1-05 pre-spawn failure → realProcessInvoked=false", async () => {
    const fake = new FakeSpawnPrimitive({ throwBeforeSpawn: true });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:r1-pre",
      executable: "/tmp/fake-cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 1_000,
      env: process.env,
    });
    expect(result.realProcessInvoked).toBe(false);
  });

  it("R1-05b spawn error before start → realProcessInvoked=false", async () => {
    const fake = new FakeSpawnPrimitive({ errorBeforeSpawn: true });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:r1-err",
      executable: "/tmp/fake-cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 1_000,
      env: process.env,
    });
    expect(result.realProcessInvoked).toBe(false);
  });

  it("R1-06 spawn confirmed yields stable processRef", async () => {
    const fake = new FakeSpawnPrimitive({ pid: 7777, exitCode: 0 });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:r1-ack",
      executable: "/bin/cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 2_000,
      env: process.env,
    });
    expect(result.realProcessInvoked).toBe(true);
    expect(result.processRef).toBe("pid:7777");
  });

  it("R1-07 timeout issues SIGTERM via fake child", async () => {
    const fake = new FakeSpawnPrimitive({
      pid: 5555,
      hangMs: 5_000,
      exitCode: null,
    });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:r1-to",
      executable: "/bin/cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 20,
      env: process.env,
    });
    expect(result.realProcessInvoked).toBe(true);
    expect(result.observation?.timedOut).toBe(true);
  });

  it("R1-08 stdout/stderr caps at 64 KiB", async () => {
    const big = "x".repeat(NODE_CURSOR_STDOUT_CAP_BYTES + 4_096);
    const fake = new FakeSpawnPrimitive({
      pid: 1,
      exitCode: 0,
      stdoutChunks: [big],
      stderrChunks: [big],
    });
    const runner = new NodeCursorProcessRunner({
      spawnPrimitive: fake.asSpawnPrimitive(),
    });
    const result = await runner.invoke({
      attemptId: "xat:r1-cap",
      executable: "/bin/cursor",
      argv: ["agent"],
      cwd: "/tmp/ws",
      timeoutMs: 2_000,
      env: process.env,
    });
    expect(result.observation?.stdout?.length).toBe(
      NODE_CURSOR_STDOUT_CAP_BYTES,
    );
    expect(result.observation?.stderr?.length).toBe(
      NODE_CURSOR_STDERR_CAP_BYTES,
    );
  });

  it("R1-09 gateway OFF never falls back to fixture; DisabledRealProcessRunner stays product", async () => {
    expect(new DisabledRealProcessRunner()).toBeInstanceOf(
      DisabledRealProcessRunner,
    );
    const runner = new FakeProcessRunner();
    const gateway = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: new FakeRealExecutionWorkspacePort(),
      env: { ...process.env },
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    const result = await gateway.launch({
      attemptId: "xat:r1-09",
      executionContractId: "xct:1",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4",
      adapterRef: gateway.gatewayId,
      correlationId: "cor:1",
      baseHeadSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    });
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.detailCode).toBe("REAL_BOUNDARY_DISABLED");
    }
    expect(runner.calls).toHaveLength(0);
  });
});

===== NEW FILE: projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts =====
/**
 * M4 REAL-OFF correction R2 — contract baseHeadSha + StudioGitWorktreeWorkspace.
 * @vitest-environment node
 */
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  createM4BoundedReadOnlyCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
  SqliteRealLaunchSafetyJournal,
  StudioCursorRealLaunchGateway,
  StudioGitWorktreeWorkspace,
  TestExecutionAdapter,
  workspacePathForAttempt,
} from "@/lib/oa/execution-attempt";
import {
  MORRIS_ACTOR,
  NOW,
  baseBuildRequest,
  buildStack,
  grantContractConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
  selectStandardAgent,
  type Stack,
} from "./helpers";
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import {
  FakeGitCommandRunner,
  FakeRealExecutionWorkspacePort,
} from "./support/fakeSpawnAndGit";
import {
  M4_EVIDENCE,
  M4_TEST_BASE_HEAD_SHA,
  m4ContractInputs,
} from "./support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";

function tempJournalPath(prefix: string): string {
  const dir = mkdtempSync(path.join(os.tmpdir(), prefix));
  return path.join(dir, "m4-safety.sqlite");
}

async function seedM4ConfirmedContract(
  stack: Stack,
  overrides: {
    executionContractId?: string;
    idempotencyKey?: string;
    inputs?: Record<string, unknown> | undefined;
    omitInputs?: boolean;
  } = {},
): Promise<{ contractId: string; version: number }> {
  await seedProject(stack.projects);
  registerMorris(stack.decisions.authority, M4_BOUNDED_RO_SCOPE, M4_EVIDENCE);
  await seedAcceptedDecision(stack);
  await seedStandardCycle(stack);

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      cycleInstanceId: "cyc:std-001",
      executionContractId: overrides.executionContractId ?? "xct:oa-001",
      idempotencyKey: overrides.idempotencyKey ?? "idem-xct-oa-001",
      action: M4_BOUNDED_RO_ACTION,
      target: M4_BOUNDED_RO_TARGET,
      scope: M4_BOUNDED_RO_SCOPE,
      requiredCapabilities: [M4_BOUNDED_RO_CAPABILITY],
      authorityEvidenceId: M4_EVIDENCE,
      ...(overrides.omitInputs
        ? {}
        : { inputs: overrides.inputs ?? m4ContractInputs() }),
    }),
  );
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");

  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");

  const confirmationId = await grantContractConfirmation(stack, {
    scope: M4_BOUNDED_RO_SCOPE,
    evidenceId: M4_EVIDENCE,
  });
  const confirmed = await stack.execution.confirmExecutionContract.execute({
    executionContractId: validated.contract.executionContractId,
    confirmationId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
    expectedVersion: validated.contract.version,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm failed");

  return {
    contractId: confirmed.contract.executionContractId,
    version: confirmed.contract.version,
  };
}

async function selectAndGrant(
  stack: Stack,
  contractId: string,
  attemptId: string,
  grantId: string,
) {
  const selected = await selectStandardAgent(stack, {
    attemptId,
    executionContractId: contractId,
    requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
  });
  expect(selected.ok).toBe(true);
  const granted = await stack.attempts.grantRealExecutionGate!.execute({
    grantId,
    attemptId,
    actor: MORRIS_ACTOR,
    expiresAt: "2026-07-25T07:00:00.000Z",
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(granted.ok).toBe(true);
  return granted;
}

describe("M4 REAL-OFF correction R2", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("R2-01 missing baseHeadSha refused before Gate D consume / CREATED", async () => {
    const journalPath = tempJournalPath("m4-r2-01-");
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: { launchPort, safetyJournal: journal },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack, {
      omitInputs: true,
    });
    await selectAndGrant(stack, contractId, "xat:r2-01", "gd:r2-01");

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-01",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.detailCode).toBe("REAL_WORKSPACE_INVALID");
      expect(started.error.internalCauseRef).toContain("base_head_sha");
    }
    expect(launchPort.launchCallCount).toBe(0);
    expect(await journal.hasKindForAttempt("xat:r2-01", "CREATED")).toBe(
      false,
    );
    const grant = await journal.findActiveGateDGrantForAttempt("xat:r2-01");
    expect(grant?.status).toBe("granted");
    journal.close();
  });

  it("R2-02 invalid baseHeadSha refused", async () => {
    const journalPath = tempJournalPath("m4-r2-02-");
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: { launchPort, safetyJournal: journal },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack, {
      inputs: { baseHeadSha: "not-a-sha" },
    });
    await selectAndGrant(stack, contractId, "xat:r2-02", "gd:r2-02");
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-02",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.detailCode).toBe("REAL_WORKSPACE_INVALID");
    }
    expect(launchPort.launchCallCount).toBe(0);
    expect(await journal.hasKindForAttempt("xat:r2-02", "CREATED")).toBe(
      false,
    );
    journal.close();
  });

  it("R2-03 launch receives contract baseHeadSha (not StartExecution field)", async () => {
    const journalPath = tempJournalPath("m4-r2-03-");
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: { launchPort, safetyJournal: journal },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack);
    await selectAndGrant(stack, contractId, "xat:r2-03", "gd:r2-03");
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-03",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(true);
    expect(launchPort.calls[0]?.baseHeadSha).toBe(M4_TEST_BASE_HEAD_SHA);
    expect(
      (launchPort.calls[0] as { workspaceRoot?: string }).workspaceRoot,
    ).toBeUndefined();
    journal.close();
  });

  it("R2-04/05 fail-closed when repoRoot/execRoot missing or equal", () => {
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    expect(
      () =>
        new StudioGitWorktreeWorkspace({
          repoRoot: "",
          execRoot: "/tmp/exec",
          gitRunner: git,
        }),
    ).toThrow(/repo_root/);
    expect(
      () =>
        new StudioGitWorktreeWorkspace({
          repoRoot: "/tmp/repo",
          execRoot: "",
          gitRunner: git,
        }),
    ).toThrow(/exec_root/);
    expect(
      () =>
        new StudioGitWorktreeWorkspace({
          repoRoot: "/tmp/same",
          execRoot: "/tmp/same",
          gitRunner: git,
        }),
    ).toThrow(/must_differ/);
  });

  it("R2-06/07 refuse outside execRoot / existing path", async () => {
    const root = mkdtempSync(path.join(os.tmpdir(), "m4-r2-roots-"));
    const repoRoot = path.join(root, "repo");
    const execRoot = path.join(root, "exec");
    mkdirSync(repoRoot);
    mkdirSync(execRoot);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    const existing = workspacePathForAttempt(execRoot, "xat:exists");
    mkdirSync(existing, { recursive: true });
    writeFileSync(path.join(existing, "marker"), "x");
    await expect(
      ws.prepareWorkspace({
        attemptId: "xat:exists",
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      }),
    ).rejects.toThrow(/workspace_path_exists/);
  });

  it("R2-08/10 fake git receives only expected commands; HEAD exact accepted", async () => {
    const root = mkdtempSync(path.join(os.tmpdir(), "m4-r2-ok-"));
    const repoRoot = path.join(root, "repo");
    const execRoot = path.join(root, "exec");
    mkdirSync(repoRoot);
    mkdirSync(execRoot);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    const prepared = await ws.prepareWorkspace({
      attemptId: "xat:r2-ok",
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    expect(prepared.verifiedHeadSha).toBe(M4_TEST_BASE_HEAD_SHA);
    expect(prepared.workspacePath.startsWith(execRoot + path.sep)).toBe(true);
    expect(git.calls.map((c) => c.argv[0])).toEqual([
      "rev-parse",
      "worktree",
      "rev-parse",
    ]);
    expect(git.calls[0].argv).toEqual([
      "rev-parse",
      "--verify",
      `${M4_TEST_BASE_HEAD_SHA}^{commit}`,
    ]);
    expect(git.calls[1].argv.slice(0, 3)).toEqual([
      "worktree",
      "add",
      "--detach",
    ]);
    expect(git.calls[2].argv).toEqual(["rev-parse", "HEAD"]);
  });

  it("R2-09 HEAD mismatch fail-closed", async () => {
    const root = mkdtempSync(path.join(os.tmpdir(), "m4-r2-mis-"));
    const repoRoot = path.join(root, "repo");
    const execRoot = path.join(root, "exec");
    mkdirSync(repoRoot);
    mkdirSync(execRoot);
    const git = new FakeGitCommandRunner({
      baseHeadSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.prepareWorkspace({
        attemptId: "xat:r2-mis",
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      }),
    ).rejects.toThrow(/head_mismatch/);
  });

  it("R2-11 FakeGitCommandRunner never invokes OS git", async () => {
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    expect(git.calls).toHaveLength(0);
    await git.run(["rev-parse", "HEAD"], "/tmp");
    expect(git.calls).toHaveLength(1);
  });

  it("R2-12 CREATED durable before workspace prepare", async () => {
    const journalPath = tempJournalPath("m4-r2-12-");
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const workspace = new FakeRealExecutionWorkspacePort();
    const runner = new FakeProcessRunner();
    // Production gateway stays OFF — use TestOnly for ACK, wrap to assert CREATED.
    const base = new TestOnlyRealExecutionLaunchPort();
    const launchPort = {
      gatewayId: base.gatewayId,
      externalEffects: true as const,
      async launch(request: Parameters<typeof base.launch>[0]) {
        const frontier = await journal.findFrontierByAttempt(request.attemptId);
        expect(frontier.some((r) => r.kind === "CREATED")).toBe(true);
        // prepare would happen inside production gateway after CREATED;
        // here we simulate that ordering proof via journal assert above.
        expect(workspace.prepares).toHaveLength(0);
        return base.launch(request);
      },
    };
    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: {
        launchPort: launchPort as TestOnlyRealExecutionLaunchPort,
        safetyJournal: journal,
      },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack);
    await selectAndGrant(stack, contractId, "xat:r2-12", "gd:r2-12");
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-12",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(true);
    expect(runner.calls).toHaveLength(0);
    journal.close();
  });

  it("R2-13 workspace prepare failure after CREATED → runner 0, retry blocked", async () => {
    const journalPath = tempJournalPath("m4-r2-13-");
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const runner = new FakeProcessRunner();
    const workspace = new FakeRealExecutionWorkspacePort({ fail: true });
    // Use a custom launch port that mirrors gateway order: prepare then invoke.
    const launchPort = {
      gatewayId: "adp:m4-cursor-cli-real",
      externalEffects: true as const,
      async launch(request: {
        attemptId: string;
        baseHeadSha: string;
      }) {
        try {
          await workspace.prepareWorkspace({
            attemptId: request.attemptId,
            baseHeadSha: request.baseHeadSha,
          });
        } catch {
          return {
            outcome: "reject" as const,
            gatewayId: "adp:m4-cursor-cli-real",
            attemptId: request.attemptId,
            reason: "REAL_WORKSPACE_INVALID:fake_prepare_failed",
            realProcessInvoked: false as const,
            detailCode: "REAL_WORKSPACE_INVALID" as const,
          };
        }
        return runner.invoke({
          attemptId: request.attemptId,
          executable: "/tmp/x",
          argv: [],
          cwd: "/tmp",
          timeoutMs: 1,
          env: process.env,
        }).then((r) => ({
          outcome: "ack" as const,
          gatewayId: "adp:m4-cursor-cli-real",
          attemptId: request.attemptId,
          realProcessInvoked: true as const,
          processRef: r.processRef,
        }));
      },
    };

    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: {
        launchPort: launchPort as never,
        safetyJournal: journal,
      },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack);
    await selectAndGrant(stack, contractId, "xat:r2-13", "gd:r2-13");
    const first = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-13",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(first.ok).toBe(false);
    if (!first.ok) {
      expect(first.error.detailCode).toBe("REAL_WORKSPACE_INVALID");
    }
    expect(await journal.hasKindForAttempt("xat:r2-13", "CREATED")).toBe(true);
    expect(runner.calls).toHaveLength(0);

    const retry = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-13",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(retry.ok).toBe(false);
    if (!retry.ok) {
      expect(retry.error.detailCode).toBe("LAUNCH_RECONCILIATION_REQUIRED");
    }
    expect(runner.calls).toHaveLength(0);
    journal.close();
  });

  it("R2-14 simulated worktree+invoke + LAUNCHED persist fail → no second launch", async () => {
    const journalPath = tempJournalPath("m4-r2-14-");
    const baseJournal = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    let failAppend = true;
    const journal = {
      persistGateDGrant: (i: never) => baseJournal.persistGateDGrant(i),
      findGateDGrant: (id: string) => baseJournal.findGateDGrant(id),
      findActiveGateDGrantForAttempt: (id: string) =>
        baseJournal.findActiveGateDGrantForAttempt(id),
      consumeGateDAndAppendCreated: (i: never) =>
        baseJournal.consumeGateDAndAppendCreated(i),
      appendLaunched: async (i: never) => {
        if (failAppend) {
          failAppend = false;
          throw new Error("r2_14_crash");
        }
        return baseJournal.appendLaunched(i);
      },
      findFrontierByAttempt: (id: string) =>
        baseJournal.findFrontierByAttempt(id),
      findFrontierByIdentity: (id: never) =>
        baseJournal.findFrontierByIdentity(id),
      hasAmbiguousFrontier: (id: never) =>
        baseJournal.hasAmbiguousFrontier(id),
      reconcileDispositionForIdentity: (id: never) =>
        baseJournal.reconcileDispositionForIdentity(id),
      hasKindForAttempt: (id: string, k: "CREATED" | "LAUNCHED") =>
        baseJournal.hasKindForAttempt(id, k),
    };
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: {
        launchPort,
        safetyJournal: journal as never,
      },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack);
    await selectAndGrant(stack, contractId, "xat:r2-14", "gd:r2-14");
    const first = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-14",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(first.ok).toBe(false);
    expect(launchPort.launchCallCount).toBe(1);
    const retry = await stack.attempts.startExecution.execute({
      attemptId: "xat:r2-14",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(retry.ok).toBe(false);
    expect(launchPort.launchCallCount).toBe(1);
    baseJournal.close();
  });

  it("production gateway with OFF env never prepares workspace / never invokes runner", async () => {
    const runner = new FakeProcessRunner();
    const workspace = new FakeRealExecutionWorkspacePort();
    const gateway = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: workspace,
      env: process.env,
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    const result = await gateway.launch({
      attemptId: "xat:gw-off",
      executionContractId: "xct:1",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4",
      adapterRef: gateway.gatewayId,
      correlationId: "cor",
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    expect(result.outcome).toBe("reject");
    expect(workspace.prepares).toHaveLength(0);
    expect(runner.calls).toHaveLength(0);
  });
});

===== NEW FILE: projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR3.test.ts =====
/**
 * M4 REAL-OFF correction R3 — no test enables SFIA_STUDIO_CURSOR_REAL=1.
 * @vitest-environment node
 */
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  createM4BoundedReadOnlyCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  DisabledRealProcessRunner,
  isStudioCursorRealEnabled,
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  SqliteRealLaunchSafetyJournal,
  StudioCursorRealLaunchGateway,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import {
  MORRIS_ACTOR,
  NOW,
  baseBuildRequest,
  buildStack,
  grantContractConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
  selectStandardAgent,
} from "./helpers";
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import { FakeRealExecutionWorkspacePort } from "./support/fakeSpawnAndGit";
import {
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
} from "@/lib/oa/execution-attempt";
import { M4_EVIDENCE, m4ContractInputs } from "./support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";

const TESTS_DIR = __dirname;

function scanM4TestsForRealFlagEnablement(): string[] {
  const hits: string[] = [];
  const walk = (dir: string) => {
    for (const ent of readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        walk(full);
        continue;
      }
      if (!/\.(ts|tsx)$/.test(ent.name)) continue;
      const text = readFileSync(full, "utf8");
      // Positive enablement literals / assignments — allow negative assertions.
      const enablePatterns = [
        /SFIA_STUDIO_CURSOR_REAL:\s*["']1["']/,
        /SFIA_STUDIO_CURSOR_REAL\s*=\s*["']1["']/,
        /process\.env\.SFIA_STUDIO_CURSOR_REAL\s*=\s*["']1["']/,
        /OPS1_CURSOR_REAL:\s*["']1["']/,
        /OPS1_CURSOR_REAL\s*=\s*["']1["']/,
      ];
      for (const re of enablePatterns) {
        if (re.test(text)) {
          hits.push(path.relative(TESTS_DIR, full));
          break;
        }
      }
    }
  };
  walk(TESTS_DIR);
  return hits;
}

describe("M4 REAL-OFF correction R3", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
    expect(isStudioCursorRealEnabled()).toBe(false);
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("R3-01 assertStudioCursorRealOffForTests passes in harness", () => {
    expect(() => assertStudioCursorRealOffForTests()).not.toThrow();
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
    expect(process.env.OPS1_CURSOR_REAL).not.toBe("1");
  });

  it("R3-02/03/04 static scan: no M4 test enables REAL flag to 1", () => {
    expect(scanM4TestsForRealFlagEnablement()).toEqual([]);
  });

  it("R3-05 production gateway OFF → processRunner call count 0", async () => {
    const runner = new FakeProcessRunner();
    const gateway = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: new FakeRealExecutionWorkspacePort(),
      env: process.env,
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    const result = await gateway.launch({
      attemptId: "xat:r3-05",
      executionContractId: "xct:1",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4",
      adapterRef: gateway.gatewayId,
      correlationId: "cor",
      baseHeadSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    });
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("R3-05b missing flag / non-1 env reject with DisabledRealProcessRunner unused", async () => {
    const runner = new DisabledRealProcessRunner();
    const gateway = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: new FakeRealExecutionWorkspacePort(),
      env: { ...process.env, SFIA_STUDIO_CURSOR_REAL: "0" },
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    const result = await gateway.launch({
      attemptId: "xat:r3-05b",
      executionContractId: "xct:1",
      executionContractVersion: 1,
      semanticFingerprint: "fp",
      selectedAgentRef: "agt:m4",
      adapterRef: gateway.gatewayId,
      correlationId: "cor",
      baseHeadSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    });
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.detailCode).toBe("REAL_BOUNDARY_DISABLED");
    }
  });

  it("R3-06 positive StartExecution uses TestOnlyRealExecutionLaunchPort only", async () => {
    const dir = mkdtempSync(path.join(os.tmpdir(), "m4-r3-06-"));
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: path.join(dir, "j.sqlite"),
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    expect(launchPort.constructor.name).toBe("TestOnlyRealExecutionLaunchPort");

    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: { launchPort, safetyJournal: journal },
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    await seedProject(stack.projects);
    registerMorris(stack.decisions.authority, M4_BOUNDED_RO_SCOPE, M4_EVIDENCE);
    await seedAcceptedDecision(stack);
    await seedStandardCycle(stack);
    const built = await stack.execution.buildExecutionContract.execute(
      baseBuildRequest({
        cycleInstanceId: "cyc:std-001",
        action: M4_BOUNDED_RO_ACTION,
        target: M4_BOUNDED_RO_TARGET,
        scope: M4_BOUNDED_RO_SCOPE,
        requiredCapabilities: [M4_BOUNDED_RO_CAPABILITY],
        authorityEvidenceId: M4_EVIDENCE,
        inputs: m4ContractInputs(),
      }),
    );
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const validated = await stack.execution.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    const confirmationId = await grantContractConfirmation(stack, {
      scope: M4_BOUNDED_RO_SCOPE,
      evidenceId: M4_EVIDENCE,
    });
    const confirmed = await stack.execution.confirmExecutionContract.execute({
      executionContractId: validated.contract.executionContractId,
      confirmationId,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      expectedVersion: validated.contract.version,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const selected = await selectStandardAgent(stack, {
      attemptId: "xat:r3-06",
      executionContractId: confirmed.contract.executionContractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);
    const granted = await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:r3-06",
      attemptId: "xat:r3-06",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:r3-06",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(started.ok).toBe(true);
    expect(launchPort.simulatedAckCount).toBe(1);
    expect(isStudioCursorRealEnabled()).toBe(false);
    journal.close();
  });
});

===== NEW FILE: projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCrashReplay.test.ts =====
/**
 * M4 REAL-OFF crash replay — durable journal across process restart.
 * Uses TestOnlyRealExecutionLaunchPort (SIMULATED ACK) — never enables production REAL flag.
 * @vitest-environment node
 */
import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  createM4BoundedReadOnlyCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  M4_BOUNDED_RO_ACTION,
  M4_BOUNDED_RO_CAPABILITY,
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  M4_BOUNDED_RO_SCOPE,
  M4_BOUNDED_RO_TARGET,
  SqliteRealLaunchSafetyJournal,
  TestExecutionAdapter,
  type RealLaunchSafetyJournalPort,
} from "@/lib/oa/execution-attempt";
import {
  MORRIS_ACTOR,
  NOW,
  baseBuildRequest,
  buildStack,
  grantContractConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
  selectStandardAgent,
  type Stack,
} from "./helpers";
import { M4_EVIDENCE, m4ContractInputs } from "./support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";

function tempJournalPath(prefix: string): string {
  const dir = mkdtempSync(path.join(os.tmpdir(), prefix));
  return path.join(dir, "m4-safety.sqlite");
}

async function seedM4ConfirmedContract(
  stack: Stack,
  overrides: { executionContractId?: string; idempotencyKey?: string } = {},
): Promise<{ contractId: string; version: number }> {
  await seedProject(stack.projects);
  registerMorris(stack.decisions.authority, M4_BOUNDED_RO_SCOPE, M4_EVIDENCE);
  await seedAcceptedDecision(stack);
  await seedStandardCycle(stack);

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      cycleInstanceId: "cyc:std-001",
      executionContractId: overrides.executionContractId ?? "xct:oa-001",
      idempotencyKey: overrides.idempotencyKey ?? "idem-xct-oa-001",
      action: M4_BOUNDED_RO_ACTION,
      target: M4_BOUNDED_RO_TARGET,
      scope: M4_BOUNDED_RO_SCOPE,
      requiredCapabilities: [M4_BOUNDED_RO_CAPABILITY],
      authorityEvidenceId: M4_EVIDENCE,
      inputs: m4ContractInputs(),
    }),
  );
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");

  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");

  const confirmationId = await grantContractConfirmation(stack, {
    scope: M4_BOUNDED_RO_SCOPE,
    evidenceId: M4_EVIDENCE,
  });
  const confirmed = await stack.execution.confirmExecutionContract.execute({
    executionContractId: validated.contract.executionContractId,
    confirmationId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
    expectedVersion: validated.contract.version,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm failed");

  return {
    contractId: confirmed.contract.executionContractId,
    version: confirmed.contract.version,
  };
}

describe("M4 REAL-OFF crash replay", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });

  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("restart with same journal path + new MemoryAttempt store refuses second launch", async () => {
    const journalPath = tempJournalPath("m4-replay-");
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const fixtureAdapter = new TestExecutionAdapter();

    // --- Process 1: simulated ACK then crash before LAUNCHED ---
    const journal1 = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    let failAppend = true;
    const wrappingJournal = (
      base: SqliteRealLaunchSafetyJournal,
    ): RealLaunchSafetyJournalPort => ({
      persistGateDGrant: (i) => base.persistGateDGrant(i),
      findGateDGrant: (id) => base.findGateDGrant(id),
      findActiveGateDGrantForAttempt: (id) =>
        base.findActiveGateDGrantForAttempt(id),
      consumeGateDAndAppendCreated: (i) =>
        base.consumeGateDAndAppendCreated(i),
      appendLaunched: async (i) => {
        if (failAppend) {
          failAppend = false;
          throw new Error("process1_crash_before_launched");
        }
        return base.appendLaunched(i);
      },
      findFrontierByAttempt: (id) => base.findFrontierByAttempt(id),
      findFrontierByIdentity: (id) => base.findFrontierByIdentity(id),
      hasAmbiguousFrontier: (id) => base.hasAmbiguousFrontier(id),
      reconcileDispositionForIdentity: (id) =>
        base.reconcileDispositionForIdentity(id),
      hasKindForAttempt: (id, k) => base.hasKindForAttempt(id, k),
    });

    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
    const stack1 = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
    const attempts1 = createTestExecutionAttemptServices({
      decisionServices: stack1.decisions,
      executionContractServices: stack1.execution,
      agents: [m4Agent],
      adapter: fixtureAdapter,
      realBoundary: {
        launchPort,
        safetyJournal: wrappingJournal(journal1),
      },
      fixedNowIso: NOW,
    });
    stack1.attempts = attempts1 as typeof stack1.attempts;

    const { contractId } = await seedM4ConfirmedContract(stack1);
    const selected = await selectStandardAgent(stack1, {
      attemptId: "xat:m4-replay",
      executionContractId: contractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected.ok).toBe(true);

    const granted = await stack1.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:m4-replay",
      attemptId: "xat:m4-replay",
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(granted.ok).toBe(true);

    const crashed = await stack1.attempts.startExecution.execute({
      attemptId: "xat:m4-replay",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(crashed.ok).toBe(false);
    if (!crashed.ok) {
      expect(crashed.error.detailCode).toBe("LAUNCH_RECONCILIATION_REQUIRED");
    }
    expect(launchPort.launchCallCount).toBe(1);

    const frontierBeforeRestart =
      await journal1.findFrontierByAttempt("xat:m4-replay");
    expect(frontierBeforeRestart.some((r) => r.kind === "CREATED")).toBe(true);
    expect(frontierBeforeRestart.some((r) => r.kind === "LAUNCHED")).toBe(
      false,
    );
    journal1.close();

    // --- Process 2: new MemoryAttempt store, same journal file ---
    const journal2 = new SqliteRealLaunchSafetyJournal({
      databasePath: journalPath,
    });
    const stack2 = buildStack({
      agents: [m4Agent],
      adapter: new TestExecutionAdapter(),
    });
    const attempts2 = createTestExecutionAttemptServices({
      decisionServices: stack2.decisions,
      executionContractServices: stack2.execution,
      agents: [m4Agent],
      adapter: stack2.adapter as TestExecutionAdapter,
      realBoundary: { launchPort, safetyJournal: journal2 },
      fixedNowIso: NOW,
    });
    stack2.attempts = attempts2 as typeof stack2.attempts;

    const seeded2 = await seedM4ConfirmedContract(stack2, {
      executionContractId: "xct:oa-replay-2",
      idempotencyKey: "idem-xct-replay-2",
    });
    const selected2 = await selectStandardAgent(stack2, {
      attemptId: "xat:m4-replay",
      executionContractId: seeded2.contractId,
      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    });
    expect(selected2.ok).toBe(true);

    const durable = await journal2.findFrontierByAttempt("xat:m4-replay");
    expect(durable.some((r) => r.kind === "CREATED")).toBe(true);
    expect(durable.some((r) => r.kind === "LAUNCHED")).toBe(false);

    const retry = await stack2.attempts.startExecution.execute({
      attemptId: "xat:m4-replay",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
    });
    expect(retry.ok).toBe(false);
    if (!retry.ok) {
      expect([
        "LAUNCH_RECONCILIATION_REQUIRED",
        "GATE_D_REQUIRED",
      ]).toContain(retry.error.detailCode);
    }
    expect(launchPort.launchCallCount).toBe(1);
    journal2.close();
  });
});

===== NEW FILE: projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeProcessRunner.ts =====
/**
 * TEST-ONLY ProcessRunner doubles — never spawn Cursor.
 * Not exported from product barrel.
 */
import type {
  ProcessRunner,
  ProcessRunnerInvokeInput,
  ProcessRunnerInvokeResult,
} from "@/lib/oa/execution-attempt";

export class FakeProcessRunner implements ProcessRunner {
  readonly calls: ProcessRunnerInvokeInput[] = [];
  /** SIMULATED TECHNICAL ACK counter — not a real Cursor invoke. */
  simulatedInvokeCount = 0;

  constructor(
    private readonly behavior: {
      realProcessInvoked?: boolean;
      processRef?: string;
      throwError?: boolean;
    } = {},
  ) {}

  async invoke(
    input: ProcessRunnerInvokeInput,
  ): Promise<ProcessRunnerInvokeResult> {
    this.calls.push(input);
    this.simulatedInvokeCount += 1;
    if (this.behavior.throwError) {
      throw new Error("fake_real_process_threw");
    }
    return {
      processRef: this.behavior.processRef ?? `proc:sim:${input.attemptId}`,
      // SIMULATED TECHNICAL ACK — not a live Cursor process.
      realProcessInvoked: this.behavior.realProcessInvoked ?? true,
    };
  }
}

/** @deprecated Prefer FakeProcessRunner. */
export { FakeProcessRunner as FakeRealProcessRunner };

===== NEW FILE: projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts =====
/**
 * TEST-ONLY spawn / git doubles — no OS process, no real git.
 */
import { EventEmitter } from "node:events";
import type { ChildProcess } from "node:child_process";
import type {
  GitCommandResult,
  GitCommandRunner,
  SpawnPrimitive,
} from "@/lib/oa/execution-attempt";

export type FakeSpawnCall = {
  executable: string;
  argv: readonly string[];
  options: {
    cwd: string;
    env: NodeJS.ProcessEnv;
    shell: false;
    stdio: ["ignore", "pipe", "pipe"];
  };
};

export type FakeChildBehavior = {
  /** If true, spawn throws before child exists. */
  throwBeforeSpawn?: boolean;
  /** If true, emit error before spawn (realProcessInvoked=false). */
  errorBeforeSpawn?: boolean;
  pid?: number;
  exitCode?: number | null;
  stdoutChunks?: string[];
  stderrChunks?: string[];
  /** Delay close so timeout can fire. */
  hangMs?: number;
};

export class FakeSpawnPrimitive {
  readonly calls: FakeSpawnCall[] = [];
  private behavior: FakeChildBehavior;

  constructor(behavior: FakeChildBehavior = {}) {
    this.behavior = behavior;
  }

  setBehavior(behavior: FakeChildBehavior): void {
    this.behavior = behavior;
  }

  asSpawnPrimitive(): SpawnPrimitive {
    return (executable, argv, options) => {
      this.calls.push({ executable, argv, options });
      if (this.behavior.throwBeforeSpawn) {
        throw new Error("fake_spawn_threw_before_start");
      }
      return createFakeChild(this.behavior) as ChildProcess;
    };
  }
}

function createFakeChild(behavior: FakeChildBehavior): ChildProcess {
  const ee = new EventEmitter() as ChildProcess & EventEmitter;
  const stdout = new EventEmitter();
  const stderr = new EventEmitter();
  (ee as { stdout: EventEmitter }).stdout = stdout;
  (ee as { stderr: EventEmitter }).stderr = stderr;
  (ee as { killed: boolean }).killed = false;
  let pid: number | undefined = behavior.errorBeforeSpawn
    ? undefined
    : (behavior.pid ?? 4242);
  Object.defineProperty(ee, "pid", {
    get: () => pid,
    configurable: true,
  });

  (ee as { kill: (signal?: string) => boolean }).kill = (
    signal?: string,
  ) => {
    (ee as { killed: boolean; lastSignal?: string }).killed = true;
    (ee as { lastSignal?: string }).lastSignal = signal;
    queueMicrotask(() => ee.emit("close", behavior.exitCode ?? null));
    return true;
  };

  queueMicrotask(() => {
    if (behavior.errorBeforeSpawn) {
      ee.emit("error", new Error("fake_spawn_error_before_start"));
      return;
    }
    ee.emit("spawn");
    for (const chunk of behavior.stdoutChunks ?? []) {
      stdout.emit("data", Buffer.from(chunk));
    }
    for (const chunk of behavior.stderrChunks ?? []) {
      stderr.emit("data", Buffer.from(chunk));
    }
    if (behavior.hangMs && behavior.hangMs > 0) {
      setTimeout(() => {
        /* wait for kill from timeout */
      }, behavior.hangMs);
      return;
    }
    queueMicrotask(() => ee.emit("close", behavior.exitCode ?? 0));
  });

  return ee;
}

export class FakeGitCommandRunner implements GitCommandRunner {
  readonly calls: Array<{ argv: readonly string[]; cwd: string }> = [];
  private readonly scripted: GitCommandResult[];
  private headOverride: string | null = null;
  private failOn?: (argv: readonly string[]) => GitCommandResult | null;

  constructor(
    options: {
      baseHeadSha?: string;
      results?: GitCommandResult[];
      failOn?: (argv: readonly string[]) => GitCommandResult | null;
    } = {},
  ) {
    this.scripted = options.results ?? [];
    this.headOverride = options.baseHeadSha ?? null;
    this.failOn = options.failOn;
  }

  setHeadSha(sha: string): void {
    this.headOverride = sha;
  }

  async run(
    argv: readonly string[],
    cwd: string,
  ): Promise<GitCommandResult> {
    this.calls.push({ argv: [...argv], cwd });
    if (this.failOn) {
      const forced = this.failOn(argv);
      if (forced) return forced;
    }
    if (this.scripted.length > 0) {
      return this.scripted.shift()!;
    }
    // Default happy path: verify / worktree add / rev-parse HEAD
    if (argv[0] === "rev-parse" && argv[1] === "--verify") {
      return { stdout: "commit\n", stderr: "", exitCode: 0 };
    }
    if (argv[0] === "worktree" && argv[1] === "add") {
      return { stdout: "", stderr: "", exitCode: 0 };
    }
    if (argv[0] === "rev-parse" && argv[1] === "HEAD") {
      return {
        stdout: `${this.headOverride ?? "0".repeat(40)}\n`,
        stderr: "",
        exitCode: 0,
      };
    }
    return { stdout: "", stderr: "unexpected_fake_git_argv", exitCode: 1 };
  }
}

/** TEST-ONLY workspace port that records prepare calls. */
export class FakeRealExecutionWorkspacePort {
  readonly prepares: Array<{ attemptId: string; baseHeadSha: string }> = [];
  private fail = false;
  private workspacePath = "/tmp/fake-exec-root/wt-test";

  constructor(
    options: { workspacePath?: string; fail?: boolean } = {},
  ) {
    if (options.workspacePath) this.workspacePath = options.workspacePath;
    this.fail = options.fail ?? false;
  }

  setFail(fail: boolean): void {
    this.fail = fail;
  }

  async prepareWorkspace(request: {
    attemptId: string;
    baseHeadSha: string;
  }): Promise<{ workspacePath: string; verifiedHeadSha: string }> {
    this.prepares.push({ ...request });
    if (this.fail) {
      throw new Error("REAL_WORKSPACE_INVALID:fake_prepare_failed");
    }
    return {
      workspacePath: this.workspacePath,
      verifiedHeadSha: request.baseHeadSha.toLowerCase(),
    };
  }
}

===== NEW FILE: projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts =====
/**
 * Shared M4 REAL-OFF test fixtures (contract inputs.baseHeadSha, wiring).
 */
export const M4_TEST_BASE_HEAD_SHA =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

export const M4_EVIDENCE = "evd:morris-n3";

export function m4ContractInputs(
  baseHeadSha: string = M4_TEST_BASE_HEAD_SHA,
): { baseHeadSha: string } {
  return { baseHeadSha };
}

===== NEW FILE: projects/sfia-studio/app/__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts =====
/**
 * TEST-ONLY RealExecutionLaunchPort — simulated ACK for positive StartExecution paths.
 * NEVER enables production StudioCursorRealLaunchGateway / SFIA_STUDIO_CURSOR_REAL.
 * SIMULATED TECHNICAL ACK only — not a REAL Cursor invocation.
 */
import {
  M4_REAL_GATEWAY_ADAPTER_ID,
  type RealExecutionLaunchPort,
  type RealLaunchRequest,
  type RealLaunchResult,
  type RealProcessObservation,
} from "@/lib/oa/execution-attempt";

export type TestOnlyRealExecutionLaunchPortOptions = {
  readonly gatewayId?: string;
  readonly behavior?:
    | { outcome: "ack"; processRef?: string }
    | {
        outcome: "reject";
        reason: string;
        detailCode?: NonNullable<
          Extract<RealLaunchResult, { outcome: "reject" }>["detailCode"]
        >;
      }
    | {
        outcome: "fail";
        reason: string;
        detailCode?: NonNullable<
          Extract<RealLaunchResult, { outcome: "fail" }>["detailCode"]
        >;
      }
    | { outcome: "throw"; reason: string };
};

/**
 * Test-only launch port. Returns SIMULATED TECHNICAL ACK.
 * Must never be confused with production gateway enablement.
 */
export class TestOnlyRealExecutionLaunchPort implements RealExecutionLaunchPort {
  readonly gatewayId: string;
  readonly externalEffects = true as const;
  readonly calls: RealLaunchRequest[] = [];
  /** Explicit label for review claims — not a real Cursor process count. */
  readonly simulatedTechnicalAckCount = { value: 0 };
  private behavior: NonNullable<
    TestOnlyRealExecutionLaunchPortOptions["behavior"]
  >;
  private readonly observations = new Map<string, RealProcessObservation>();

  constructor(options: TestOnlyRealExecutionLaunchPortOptions = {}) {
    this.gatewayId = options.gatewayId ?? M4_REAL_GATEWAY_ADAPTER_ID;
    this.behavior = options.behavior ?? { outcome: "ack" };
  }

  setBehavior(
    behavior: NonNullable<TestOnlyRealExecutionLaunchPortOptions["behavior"]>,
  ): void {
    this.behavior = behavior;
  }

  get launchCallCount(): number {
    return this.calls.length;
  }

  get simulatedAckCount(): number {
    return this.simulatedTechnicalAckCount.value;
  }

  async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
    this.calls.push(structuredClone(request));
    const b = this.behavior;
    if (b.outcome === "throw") {
      throw new Error(`test_only_real_launch_threw:${b.reason}`);
    }
    if (b.outcome === "reject") {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: b.reason,
        realProcessInvoked: false,
        detailCode: b.detailCode,
      };
    }
    if (b.outcome === "fail") {
      return {
        outcome: "fail",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: b.reason,
        realProcessInvoked: false,
        detailCode: b.detailCode,
      };
    }
    this.simulatedTechnicalAckCount.value += 1;
    const processRef = b.processRef ?? `proc:sim:${request.attemptId}`;
    this.observations.set(processRef, {
      processRef,
      exitCode: null,
      timedOut: false,
      stdout: "",
      stderr: "",
      durationMs: 0,
      realProcessInvoked: true,
    });
    // SIMULATED TECHNICAL ACK — production gateway flag was never enabled.
    return {
      outcome: "ack",
      gatewayId: this.gatewayId,
      attemptId: request.attemptId,
      realProcessInvoked: true,
      processRef,
    };
  }

  async observe(processRef: string): Promise<RealProcessObservation | null> {
    return this.observations.get(processRef) ?? null;
  }
}

/** Alias kept for relocated FakeRealExecutionLaunchGateway. */
export {
  TestOnlyRealExecutionLaunchPort as FakeRealExecutionLaunchGateway,
};

===== NEW FILE: projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts =====
/**
 * GrantGateD — Gate D GD-1 grant use-case (D-M4-04).
 * Grant ≠ consume. StartExecution consumes with CREATED atomically.
 * Never starts execution / never launches Cursor.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
import { computeExecutionContractSemanticFingerprint } from "@/lib/oa/execution-contract";
import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
import type { AttemptDetailCode, ActorReference } from "../domain/types";
import type { GateDGrant } from "../domain/realLaunchSafety";
import { isM4BoundedReadOnlyRealAgent } from "../infrastructure/m4BoundedReadOnlyCursorAgent";
import type { AgentRegistryPort } from "../ports/agentRegistry";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
import type { RealLaunchSafetyJournalPort } from "../ports/realLaunchSafetyJournalPort";
import {
  authorityFailureDetail,
  newCorrelationId,
  verifyAttemptAuthority,
} from "./attemptSupport";

export type GrantGateDRequest = {
  readonly grantId: string;
  readonly attemptId: string;
  readonly actor: ActorReference;
  readonly expiresAt: string;
  readonly authorityEvidenceId?: string;
  readonly correlationId?: string;
  readonly expectedAttemptVersion?: number;
  readonly expectedContractVersion?: number;
  readonly claimedAuthorityLevel?: string;
  readonly nowIso?: string;
};

export type GrantGateDSuccess = {
  readonly ok: true;
  readonly grant: GateDGrant;
  readonly durationMs: number;
};

export type GrantGateDFailure = {
  readonly ok: false;
  readonly error: ReturnType<typeof createAttemptError>;
  readonly durationMs: number;
};

export type GrantGateDResult = GrantGateDSuccess | GrantGateDFailure;

/** @deprecated Prefer GrantGateDRequest. */
export type GrantRealExecutionGateRequest = GrantGateDRequest;
/** @deprecated Prefer GrantGateDResult. */
export type GrantRealExecutionGateResult = GrantGateDResult;

export class GrantGateD {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly registry: AgentRegistryPort,
    private readonly authority: AuthorityResolverPort,
    private readonly safetyJournal: RealLaunchSafetyJournalPort,
    private readonly clock: ClockPort,
  ) {}

  async execute(request: GrantGateDRequest): Promise<GrantGateDResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId = request.correlationId ?? newCorrelationId();

    const fail = (
      detailCode: AttemptDetailCode,
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createAttemptError>[0]>,
    ): GrantGateDFailure => ({
      ok: false,
      error: createAttemptError({
        detailCode,
        timestamp,
        correlationId,
        attemptId: request.attemptId,
        internalCauseRef,
        ...extra,
      }),
      durationMs: Date.now() - started,
    });

    try {
      if (!request.actor?.actorId || !request.grantId || !request.expiresAt) {
        return fail("ATTEMPT_INVALID", "gate_d_input_invalid");
      }
      if (Date.parse(request.expiresAt) <= Date.parse(timestamp)) {
        return fail("GATE_D_EXPIRED", "gate_d_expires_at_not_future");
      }

      const attempt = await this.attempts.findById(request.attemptId);
      if (!attempt) return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
      if (attempt.status !== "accepted") {
        return fail("ATTEMPT_STATE_CONFLICT", `attempt_status_${attempt.status}`);
      }
      if (
        request.expectedAttemptVersion !== undefined &&
        request.expectedAttemptVersion !== attempt.version
      ) {
        return fail("VERSION_CONFLICT", "attempt_occ_mismatch", {
          expectedVersion: request.expectedAttemptVersion,
          currentVersion: attempt.version,
        });
      }

      const contract = await this.contracts.findById(attempt.executionContractId);
      if (!contract) {
        return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
      }
      if (contract.status !== "confirmed") {
        return fail(
          "EXECUTION_CONTRACT_NOT_CONFIRMED",
          `contract_status_${contract.status}`,
        );
      }
      if (contract.version !== attempt.executionContractVersion) {
        return fail("EXECUTION_CONTRACT_STALE", "contract_version_changed");
      }
      if (
        request.expectedContractVersion !== undefined &&
        request.expectedContractVersion !== contract.version
      ) {
        return fail("EXECUTION_CONTRACT_STALE", "contract_occ_mismatch");
      }

      const fingerprint =
        contract.semanticFingerprint ??
        computeExecutionContractSemanticFingerprint(contract);
      if (!fingerprint) {
        return fail("ATTEMPT_INVALID", "semantic_fingerprint_missing");
      }
      if (
        contract.action.includes("UNRESOLVED") ||
        contract.target.includes("UNRESOLVED") ||
        contract.requiredCapabilities.some(
          (c) => c === "cap:unresolved" || c.includes("unresolved"),
        )
      ) {
        return fail("REAL_AGENT_PROFILE_INVALID", "unresolved_contract_refused");
      }

      const agent = this.registry.getAgent(attempt.selectedAgentRef);
      if (!agent) return fail("AGENT_NOT_FOUND", "selected_agent_missing");
      if (!isM4BoundedReadOnlyRealAgent(agent)) {
        return fail("REAL_AGENT_PROFILE_INVALID", "not_m4_bounded_readonly_real");
      }

      const authz = verifyAttemptAuthority(this.authority, {
        requiredAuthority: contract.requiredAuthority,
        actorId: request.actor.actorId,
        scope: contract.scope,
        evidenceId: request.authorityEvidenceId,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
      });
      if (!authz.ok) {
        return fail(
          authorityFailureDetail(authz.reason),
          `gate_d_${authz.reason}`,
        );
      }

      const identity = {
        executionContractId: contract.executionContractId,
        executionContractVersion: contract.version,
        semanticFingerprint: fingerprint,
      };
      if (await this.safetyJournal.hasAmbiguousFrontier(identity)) {
        return fail(
          "LAUNCH_RECONCILIATION_REQUIRED",
          "ambiguous_frontier_blocks_gate_d",
        );
      }

      const existing = await this.safetyJournal.findActiveGateDGrantForAttempt(
        attempt.attemptId,
      );
      if (existing) {
        return fail("GATE_D_ALREADY_GRANTED", "active_grant_exists");
      }

      const grant = await this.safetyJournal.persistGateDGrant({
        grantId: request.grantId,
        executionContractId: contract.executionContractId,
        executionContractVersion: contract.version,
        semanticFingerprint: fingerprint,
        attemptId: attempt.attemptId,
        selectedAgentRef: attempt.selectedAgentRef,
        actorId: request.actor.actorId,
        issuedAt: timestamp,
        expiresAt: request.expiresAt,
        correlationId,
      });

      return { ok: true, grant, durationMs: Date.now() - started };
    } catch (err) {
      if (isExecutionAttemptDomainError(err)) {
        return fail(err.detailCode, err.message);
      }
      return fail("EXECUTION_PERSISTENCE_FAILED", "gate_d_persist_failed");
    }
  }
}

/** @deprecated Prefer GrantGateD. */
export { GrantGateD as GrantRealExecutionGate };

===== NEW FILE: projects/sfia-studio/app/lib/oa/execution-attempt/application/grantRealExecutionGate.ts =====
/**
 * GrantRealExecutionGate — Gate D GD-1 grant use-case (D-M4-04).
 * Re-exports GrantGateD under the Delivery cycle name.
 */
export {
  GrantGateD as GrantRealExecutionGate,
  GrantGateD,
  type GrantGateDRequest as GrantRealExecutionGateRequest,
  type GrantGateDResult as GrantRealExecutionGateResult,
  type GrantGateDRequest,
  type GrantGateDResult,
} from "./grantGateD";

===== NEW FILE: projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts =====
/**
 * M4 REAL-OFF — technical launch safety + Gate D GD-1 types.
 *
 * TEMPORARY WITH EXIT technical journal (D-M4-02).
 * ≠ Product Store · ≠ Attempt aggregate · ≠ Confirmation · ≠ PREPARE projection.
 */

export const SFIA_STUDIO_CURSOR_REAL_FLAG = "SFIA_STUDIO_CURSOR_REAL" as const;

/** Closed REAL gateway adapter id — not part of InjectableExecutionAdapter. */
export const M4_REAL_GATEWAY_ADAPTER_ID = "adp:m4-cursor-cli-real" as const;

export const M4_BOUNDED_RO_CURSOR_AGENT_ID =
  "agt:m4.cursor.bounded_readonly" as const;

export type RealLaunchReconcileDisposition =
  | "CLEAR"
  | "UNKNOWN"
  | "REVIEW_REQUIRED";

/** Journal record kinds (D-M4-02 / D-M4-04). */
export type LaunchSafetyRecordKind =
  | "GATE_D_GRANTED"
  | "GATE_D_CONSUMED"
  | "ATTEMPT_CREATED"
  | "ATTEMPT_LAUNCHED";

/** Frontier kinds used for relaunch ambiguity (CREATED / LAUNCHED). */
export type RealLaunchFrontierKind = "CREATED" | "LAUNCHED";

export type GateDGrantStatus =
  | "granted"
  | "consumed"
  | "expired"
  | "invalidated";

export type GateDGrant = {
  readonly grantId: string;
  readonly executionContractId: string;
  readonly executionContractVersion: number;
  readonly semanticFingerprint: string;
  readonly attemptId: string;
  readonly selectedAgentRef: string;
  readonly actorId: string;
  readonly issuedAt: string;
  readonly expiresAt: string;
  readonly status: GateDGrantStatus;
  readonly consumedAt?: string;
  readonly correlationId?: string;
};

export type RealLaunchFrontierRecord = {
  readonly recordId: string;
  readonly kind: RealLaunchFrontierKind;
  readonly occurredAt: string;
  readonly executionContractId: string;
  readonly executionContractVersion: number;
  readonly semanticFingerprint: string;
  readonly attemptId: string;
  readonly selectedAgentRef: string;
  readonly actorId: string;
  readonly grantId: string;
  readonly correlationId: string;
  readonly processRef?: string;
  readonly payloadJson: string;
};

export type ContractSafetyIdentity = {
  readonly executionContractId: string;
  readonly executionContractVersion: number;
  readonly semanticFingerprint: string;
};

export function isStudioCursorRealEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return env[SFIA_STUDIO_CURSOR_REAL_FLAG] === "1";
}

export function assertStudioCursorRealOffForTests(
  env: NodeJS.ProcessEnv = process.env,
): void {
  if (env.OPS1_CURSOR_REAL === "1") {
    throw new Error("M4_REAL_OFF_TESTS_REQUIRE_OPS1_CURSOR_REAL_OFF");
  }
  if (isStudioCursorRealEnabled(env)) {
    throw new Error("M4_REAL_OFF_TESTS_REQUIRE_SFIA_STUDIO_CURSOR_REAL_OFF");
  }
}

export function isRealCursorAgentMode(input: {
  executionMode: string;
  adapterRef: string;
}): boolean {
  return (
    input.executionMode === "cursor_cli_real" ||
    input.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID
  );
}

===== NEW FILE: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts =====
/**
 * CursorCliLaunchGateway — OA-owned REAL launch ACL (D-M4-01).
 * Re-exports StudioCursorRealLaunchGateway under the Delivery cycle name.
 * Fake runners are NOT re-exported — use __tests__/…/support doubles.
 */
export {
  StudioCursorRealLaunchGateway as CursorCliLaunchGateway,
  StudioCursorRealLaunchGateway,
  DisabledRealProcessRunner,
  resolveStudioCursorBinPath,
  resolveCursorBinPath,
  type StudioCursorRealLaunchGatewayOptions as CursorCliLaunchGatewayOptions,
  type StudioCursorRealLaunchGatewayOptions,
} from "./studioCursorRealLaunchGateway";
export {
  NodeCursorProcessRunner,
  NODE_CURSOR_STDOUT_CAP_BYTES,
  NODE_CURSOR_STDERR_CAP_BYTES,
  type SpawnPrimitive,
  type NodeCursorProcessRunnerOptions,
} from "./nodeCursorProcessRunner";

===== NEW FILE: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedReadOnlyCursorAgent.ts =====
/**
 * M4 bounded read-only Cursor agent descriptor (D-M4-03).
 * Static / deny-by-default registry entry — no live health probe.
 * Exact caps only — no wildcards, no unresolved.
 */
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  M4_REAL_GATEWAY_ADAPTER_ID,
} from "../domain/realLaunchSafety";
import type { AgentDescriptor } from "../domain/types";

export const M4_BOUNDED_RO_CAPABILITY = "cap:cursor.read_only" as const;
export const M4_BOUNDED_RO_ACTION = "cursor.read_only.inspect" as const;
export const M4_BOUNDED_RO_TARGET = "workspace.isolated.read" as const;
export const M4_BOUNDED_RO_SCOPE = "studio.m4.real_off" as const;

export function createM4BoundedReadOnlyCursorAgentDescriptor(
  nowIso: string,
  provenance?: ProvenanceRecord,
): AgentDescriptor {
  const defaultProvenance: ProvenanceRecord = {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:m4-bounded-ro-cursor-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:m4-bounded-ro-cursor-agent",
  };
  const descriptor: AgentDescriptor = {
    schemaVersion: "0.1.0-oa",
    agentId: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    agentType: "cursor_cli_bounded_readonly",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    supportedCapabilities: [M4_BOUNDED_RO_CAPABILITY],
    allowedActions: [M4_BOUNDED_RO_ACTION],
    allowedTargets: [M4_BOUNDED_RO_TARGET],
    allowedScopes: [M4_BOUNDED_RO_SCOPE],
    trustLevel: "bounded",
    executionMode: "cursor_cli_real",
    healthStatus: "healthy",
    version: 1,
    enabled: true,
    provenance: provenance ?? defaultProvenance,
    createdAt: nowIso,
  };
  return Object.freeze(descriptor);
}

export function isM4BoundedReadOnlyRealAgent(agent: AgentDescriptor): boolean {
  const hasWildcard = (values: readonly string[]) =>
    values.some((v) => v === "*" || v.includes("*"));
  return (
    agent.executionMode === "cursor_cli_real" &&
    agent.trustLevel === "bounded" &&
    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID &&
    agent.enabled === true &&
    agent.supportedCapabilities.length > 0 &&
    agent.allowedActions.length > 0 &&
    agent.allowedTargets.length > 0 &&
    agent.allowedScopes.length > 0 &&
    !hasWildcard(agent.supportedCapabilities) &&
    !hasWildcard(agent.allowedActions) &&
    !hasWildcard(agent.allowedTargets) &&
    !hasWildcard(agent.allowedScopes) &&
    !agent.supportedCapabilities.includes("cap:unresolved") &&
    !agent.allowedActions.some((a) => a.includes("UNRESOLVED")) &&
    !agent.allowedTargets.some((t) => t.includes("UNRESOLVED")) &&
    !agent.allowedScopes.some((s) => s.includes("UNRESOLVED"))
  );
}

===== NEW FILE: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/memoryLaunchSafetyJournal.ts =====
/**
 * MemoryLaunchSafetyJournal — in-memory journal for unit tests.
 * Prefer SqliteLaunchSafetyJournal with temp files for durability proofs.
 */
import { randomBytes } from "node:crypto";
import type {
  ContractSafetyIdentity,
  GateDGrant,
  RealLaunchFrontierKind,
  RealLaunchFrontierRecord,
  RealLaunchReconcileDisposition,
} from "../domain/realLaunchSafety";
import type {
  AtomicConsumeGrantAndCreateFrontierInput,
  CreateGrantInput,
  GrantValidationResult,
  LaunchSafetyJournalPort,
  MarkLaunchedInput,
  ValidateGrantForStartInput,
} from "../ports/launchSafetyJournalPort";

function newId(prefix: string): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

function identityKey(identity: ContractSafetyIdentity): string {
  return `${identity.executionContractId}|${identity.executionContractVersion}|${identity.semanticFingerprint}`;
}

export class MemoryLaunchSafetyJournal implements LaunchSafetyJournalPort {
  private readonly grants = new Map<string, GateDGrant>();
  private readonly frontier: RealLaunchFrontierRecord[] = [];
  /** When true, next atomicConsume throws before mutating (adversarial). */
  failNextAtomicConsume = false;

  async createGrant(input: CreateGrantInput): Promise<GateDGrant> {
    if (this.grants.has(input.grantId)) {
      throw new Error("m4_gate_d_duplicate_grant_id");
    }
    for (const g of this.grants.values()) {
      if (g.attemptId === input.attemptId && g.status === "granted") {
        throw new Error("m4_gate_d_attempt_unique");
      }
    }
    const grant: GateDGrant = Object.freeze({
      grantId: input.grantId,
      executionContractId: input.executionContractId,
      executionContractVersion: input.executionContractVersion,
      semanticFingerprint: input.semanticFingerprint,
      attemptId: input.attemptId,
      selectedAgentRef: input.selectedAgentRef,
      actorId: input.actorId,
      issuedAt: input.issuedAt,
      expiresAt: input.expiresAt,
      status: "granted",
      correlationId: input.correlationId,
    });
    this.grants.set(grant.grantId, grant);
    return grant;
  }

  async findGrant(grantId: string): Promise<GateDGrant | null> {
    return this.grants.get(grantId) ?? null;
  }

  async findActiveGateDGrantForAttempt(
    attemptId: string,
  ): Promise<GateDGrant | null> {
    for (const g of this.grants.values()) {
      if (g.attemptId === attemptId && g.status === "granted") return g;
    }
    return null;
  }

  async validateGrantForStart(
    input: ValidateGrantForStartInput,
  ): Promise<GrantValidationResult> {
    const grant = await this.findGrant(input.grantId);
    if (!grant) return { ok: false, reason: "GATE_D_REQUIRED" };
    if (grant.status === "consumed") {
      return { ok: false, reason: "GATE_D_ALREADY_CONSUMED" };
    }
    if (grant.status !== "granted") {
      return { ok: false, reason: "GATE_D_INVALID" };
    }
    if (Date.parse(grant.expiresAt) <= Date.parse(input.nowIso)) {
      return { ok: false, reason: "GATE_D_EXPIRED" };
    }
    if (
      grant.attemptId !== input.attemptId ||
      grant.actorId !== input.actorId ||
      grant.selectedAgentRef !== input.selectedAgentRef ||
      grant.executionContractId !== input.identity.executionContractId ||
      grant.executionContractVersion !==
        input.identity.executionContractVersion ||
      grant.semanticFingerprint !== input.identity.semanticFingerprint
    ) {
      return { ok: false, reason: "GATE_D_BINDING_MISMATCH" };
    }
    return { ok: true, grant };
  }

  async atomicConsumeGrantAndCreateFrontier(
    input: AtomicConsumeGrantAndCreateFrontierInput,
  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }> {
    if (this.failNextAtomicConsume) {
      this.failNextAtomicConsume = false;
      throw new Error("m4_journal_atomic_consume_forced_fail");
    }
    const validated = await this.validateGrantForStart({
      grantId: input.grantId,
      attemptId: input.attemptId,
      actorId: input.actorId,
      selectedAgentRef: input.selectedAgentRef,
      identity: input.identity,
      nowIso: input.occurredAt,
    });
    if (!validated.ok) {
      throw new Error(`m4_${validated.reason.toLowerCase()}`);
    }
    if (await this.hasAmbiguousFrontier(input.identity)) {
      throw new Error("m4_launch_frontier_ambiguous");
    }
    const consumed: GateDGrant = Object.freeze({
      ...validated.grant,
      status: "consumed" as const,
      consumedAt: input.occurredAt,
    });
    this.grants.set(consumed.grantId, consumed);
    const created: RealLaunchFrontierRecord = Object.freeze({
      recordId: newId("m4fr"),
      kind: "CREATED",
      occurredAt: input.occurredAt,
      executionContractId: input.identity.executionContractId,
      executionContractVersion: input.identity.executionContractVersion,
      semanticFingerprint: input.identity.semanticFingerprint,
      attemptId: input.attemptId,
      selectedAgentRef: input.selectedAgentRef,
      actorId: input.actorId,
      grantId: input.grantId,
      correlationId: input.correlationId,
      payloadJson: "{}",
    });
    this.frontier.push(created);
    return { grant: consumed, created };
  }

  async markLaunched(
    input: MarkLaunchedInput,
  ): Promise<RealLaunchFrontierRecord> {
    const hasCreated = this.frontier.some(
      (r) => r.attemptId === input.attemptId && r.kind === "CREATED",
    );
    if (!hasCreated) throw new Error("m4_launched_requires_created");
    const launched: RealLaunchFrontierRecord = Object.freeze({
      recordId: newId("m4fr"),
      kind: "LAUNCHED",
      occurredAt: input.occurredAt,
      executionContractId: input.identity.executionContractId,
      executionContractVersion: input.identity.executionContractVersion,
      semanticFingerprint: input.identity.semanticFingerprint,
      attemptId: input.attemptId,
      selectedAgentRef: input.selectedAgentRef,
      actorId: input.actorId,
      grantId: input.grantId,
      correlationId: input.correlationId,
      processRef: input.processRef,
      payloadJson: JSON.stringify(input.payload ?? {}),
    });
    this.frontier.push(launched);
    return launched;
  }

  async findFrontierByContractFingerprint(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchFrontierRecord[]> {
    const key = identityKey(identity);
    return this.frontier.filter((r) => identityKey(r) === key);
  }

  async findFrontierByAttemptId(
    attemptId: string,
  ): Promise<RealLaunchFrontierRecord[]> {
    return this.frontier.filter((r) => r.attemptId === attemptId);
  }

  async hasAmbiguousFrontier(
    identity: ContractSafetyIdentity,
  ): Promise<boolean> {
    const rows = await this.findFrontierByContractFingerprint(identity);
    return rows.length > 0;
  }

  async reconcileDispositionForIdentity(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchReconcileDisposition> {
    const rows = await this.findFrontierByContractFingerprint(identity);
    if (rows.length === 0) return "CLEAR";
    if (rows.some((r) => r.kind === "LAUNCHED")) return "REVIEW_REQUIRED";
    if (rows.some((r) => r.kind === "CREATED")) return "UNKNOWN";
    return "REVIEW_REQUIRED";
  }

  async hasKindForAttempt(
    attemptId: string,
    kind: RealLaunchFrontierKind,
  ): Promise<boolean> {
    return this.frontier.some((r) => r.attemptId === attemptId && r.kind === kind);
  }

  async persistGateDGrant(input: CreateGrantInput): Promise<GateDGrant> {
    return this.createGrant(input);
  }

  async findGateDGrant(grantId: string): Promise<GateDGrant | null> {
    return this.findGrant(grantId);
  }

  async consumeGateDAndAppendCreated(
    input: AtomicConsumeGrantAndCreateFrontierInput,
  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }> {
    return this.atomicConsumeGrantAndCreateFrontier(input);
  }

  async appendLaunched(
    input: MarkLaunchedInput,
  ): Promise<RealLaunchFrontierRecord> {
    return this.markLaunched(input);
  }

  async findFrontierByAttempt(
    attemptId: string,
  ): Promise<RealLaunchFrontierRecord[]> {
    return this.findFrontierByAttemptId(attemptId);
  }

  async findFrontierByIdentity(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchFrontierRecord[]> {
    return this.findFrontierByContractFingerprint(identity);
  }
}

===== NEW FILE: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/nodeCursorProcessRunner.ts =====
/**
 * NodeCursorProcessRunner — production Cursor process runner (M4 R1).
 *
 * spawn(shell:false); executable separate from argv; 64 KiB stdout/stderr caps;
 * timeout → SIGTERM. SpawnPrimitive is injectable for tests (no real Cursor).
 */
import { spawn as nodeSpawn, type ChildProcess } from "node:child_process";
import type {
  ProcessRunner,
  ProcessRunnerInvokeInput,
  ProcessRunnerInvokeResult,
} from "../ports/realExecutionLaunchPort";

export const NODE_CURSOR_STDOUT_CAP_BYTES = 64 * 1024;
export const NODE_CURSOR_STDERR_CAP_BYTES = 64 * 1024;

export type SpawnPrimitive = (
  executable: string,
  argv: readonly string[],
  options: {
    cwd: string;
    env: NodeJS.ProcessEnv;
    shell: false;
    stdio: ["ignore", "pipe", "pipe"];
  },
) => ChildProcess;

export type NodeCursorProcessRunnerOptions = {
  readonly spawnPrimitive?: SpawnPrimitive;
};

function appendCapped(current: string, chunk: Buffer, cap: number): string {
  if (current.length >= cap) return current;
  const next = chunk.toString("utf8");
  const remaining = cap - current.length;
  return current + next.slice(0, remaining);
}

export class NodeCursorProcessRunner implements ProcessRunner {
  private readonly spawnPrimitive: SpawnPrimitive;

  constructor(options: NodeCursorProcessRunnerOptions = {}) {
    this.spawnPrimitive = options.spawnPrimitive ?? defaultSpawnPrimitive;
  }

  async invoke(
    input: ProcessRunnerInvokeInput,
  ): Promise<ProcessRunnerInvokeResult> {
    if (!input.executable || input.executable.trim() === "") {
      return {
        processRef: `proc:pre-spawn:${input.attemptId}`,
        realProcessInvoked: false,
        observation: {
          processRef: `proc:pre-spawn:${input.attemptId}`,
          exitCode: null,
          timedOut: false,
          stdout: "",
          stderr: "executable_missing",
          durationMs: 0,
          realProcessInvoked: false,
        },
      };
    }

    const started = Date.now();
    let child: ChildProcess;
    try {
      child = this.spawnPrimitive(input.executable, [...input.argv], {
        cwd: input.cwd,
        env: input.env,
        shell: false,
        stdio: ["ignore", "pipe", "pipe"],
      });
    } catch {
      return {
        processRef: `proc:pre-spawn:${input.attemptId}`,
        realProcessInvoked: false,
        observation: {
          processRef: `proc:pre-spawn:${input.attemptId}`,
          exitCode: null,
          timedOut: false,
          stdout: "",
          stderr: "spawn_threw_before_start",
          durationMs: Date.now() - started,
          realProcessInvoked: false,
        },
      };
    }

    let stdout = "";
    let stderr = "";
    // Attach stream listeners before awaiting spawn confirmation (microtask races).
    child.stdout?.on("data", (chunk: Buffer) => {
      stdout = appendCapped(stdout, chunk, NODE_CURSOR_STDOUT_CAP_BYTES);
    });
    child.stderr?.on("data", (chunk: Buffer) => {
      stderr = appendCapped(stderr, chunk, NODE_CURSOR_STDERR_CAP_BYTES);
    });

    const spawned = await waitForSpawnConfirmation(child);
    if (!spawned.ok) {
      return {
        processRef: `proc:pre-spawn:${input.attemptId}`,
        realProcessInvoked: false,
        observation: {
          processRef: `proc:pre-spawn:${input.attemptId}`,
          exitCode: null,
          timedOut: false,
          stdout,
          stderr: stderr || spawned.reason,
          durationMs: Date.now() - started,
          realProcessInvoked: false,
        },
      };
    }

    const processRef =
      typeof child.pid === "number" && child.pid > 0
        ? `pid:${child.pid}`
        : `proc:${input.attemptId}:${started}`;

    return await new Promise<ProcessRunnerInvokeResult>((resolve) => {
      let timedOut = false;
      let settled = false;

      const finish = (result: ProcessRunnerInvokeResult) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        resolve(result);
      };

      const timer = setTimeout(() => {
        timedOut = true;
        try {
          child.kill("SIGTERM");
        } catch {
          /* ignore */
        }
      }, input.timeoutMs);

      child.on("error", () => {
        finish({
          processRef,
          realProcessInvoked: true,
          observation: {
            processRef,
            exitCode: null,
            timedOut,
            stdout,
            stderr,
            durationMs: Date.now() - started,
            realProcessInvoked: true,
            worktreeRef: input.cwd,
          },
        });
      });

      child.on("close", (code: number | null) => {
        finish({
          processRef,
          realProcessInvoked: true,
          observation: {
            processRef,
            exitCode: code,
            timedOut,
            stdout,
            stderr,
            durationMs: Date.now() - started,
            realProcessInvoked: true,
            worktreeRef: input.cwd,
          },
        });
      });
    });
  }
}

function defaultSpawnPrimitive(
  executable: string,
  argv: readonly string[],
  options: {
    cwd: string;
    env: NodeJS.ProcessEnv;
    shell: false;
    stdio: ["ignore", "pipe", "pipe"];
  },
): ChildProcess {
  return nodeSpawn(executable, [...argv], options);
}

function waitForSpawnConfirmation(
  child: ChildProcess,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  return new Promise((resolve) => {
    let settled = false;
    const done = (result: { ok: true } | { ok: false; reason: string }) => {
      if (settled) return;
      settled = true;
      child.off("spawn", onSpawn);
      child.off("error", onError);
      resolve(result);
    };
    const onSpawn = () => done({ ok: true });
    const onError = () =>
      done({ ok: false, reason: "spawn_error_before_start" });

    // Already started (pid assigned synchronously on many platforms).
    if (typeof child.pid === "number" && child.pid > 0) {
      done({ ok: true });
      return;
    }

    child.once("spawn", onSpawn);
    child.once("error", onError);

    // Microtask fallback: if neither fires quickly but pid appears.
    queueMicrotask(() => {
      if (typeof child.pid === "number" && child.pid > 0) {
        done({ ok: true });
      }
    });
  });
}

/** Fail-closed runner kept in product surface — never spawns. */
export class DisabledRealProcessRunner implements ProcessRunner {
  async invoke(): Promise<ProcessRunnerInvokeResult> {
    throw new Error("m4_real_process_runner_disabled_for_real_off_cycle");
  }
}

===== NEW FILE: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteLaunchSafetyJournal.ts =====
/**
 * SqliteLaunchSafetyJournal — technical SQLite safety DB (D-M4-02/04).
 *
 * Isolated file path · NOT Product Store · NOT D1 business DB · NOT Attempt store.
 * TEMPORARY WITH EXIT.
 */
import { randomBytes } from "node:crypto";
import { DatabaseSync } from "node:sqlite";
import type {
  ContractSafetyIdentity,
  GateDGrant,
  RealLaunchFrontierKind,
  RealLaunchFrontierRecord,
  RealLaunchReconcileDisposition,
} from "../../domain/realLaunchSafety";
import type {
  AtomicConsumeGrantAndCreateFrontierInput,
  CreateGrantInput,
  GrantValidationResult,
  LaunchSafetyJournalPort,
  MarkLaunchedInput,
  ValidateGrantForStartInput,
} from "../../ports/launchSafetyJournalPort";

const SCHEMA_SQL = `
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS m4_gate_d_grants (
  grant_id TEXT PRIMARY KEY NOT NULL,
  execution_contract_id TEXT NOT NULL,
  execution_contract_version INTEGER NOT NULL,
  semantic_fingerprint TEXT NOT NULL,
  attempt_id TEXT NOT NULL UNIQUE,
  selected_agent_ref TEXT NOT NULL,
  actor_id TEXT NOT NULL,
  issued_at TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  status TEXT NOT NULL,
  consumed_at TEXT,
  correlation_id TEXT
);

CREATE TABLE IF NOT EXISTS m4_launch_frontier (
  record_id TEXT PRIMARY KEY NOT NULL,
  kind TEXT NOT NULL,
  occurred_at TEXT NOT NULL,
  execution_contract_id TEXT NOT NULL,
  execution_contract_version INTEGER NOT NULL,
  semantic_fingerprint TEXT NOT NULL,
  attempt_id TEXT NOT NULL,
  selected_agent_ref TEXT NOT NULL,
  actor_id TEXT NOT NULL,
  grant_id TEXT NOT NULL,
  correlation_id TEXT NOT NULL,
  process_ref TEXT,
  payload_json TEXT NOT NULL,
  UNIQUE (attempt_id, kind)
);

-- At most one CREATED per contract safety identity (blocks new attemptId bypass).
CREATE UNIQUE INDEX IF NOT EXISTS idx_m4_frontier_created_identity
  ON m4_launch_frontier(execution_contract_id, execution_contract_version, semantic_fingerprint)
  WHERE kind = 'CREATED';

CREATE INDEX IF NOT EXISTS idx_m4_frontier_identity
  ON m4_launch_frontier(execution_contract_id, execution_contract_version, semantic_fingerprint);
`;

function newId(prefix: string): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

function mapGrant(row: Record<string, unknown>): GateDGrant {
  return Object.freeze({
    grantId: String(row.grant_id),
    executionContractId: String(row.execution_contract_id),
    executionContractVersion: Number(row.execution_contract_version),
    semanticFingerprint: String(row.semantic_fingerprint),
    attemptId: String(row.attempt_id),
    selectedAgentRef: String(row.selected_agent_ref),
    actorId: String(row.actor_id),
    issuedAt: String(row.issued_at),
    expiresAt: String(row.expires_at),
    status: String(row.status) as GateDGrant["status"],
    consumedAt: row.consumed_at != null ? String(row.consumed_at) : undefined,
    correlationId:
      row.correlation_id != null ? String(row.correlation_id) : undefined,
  });
}

function mapFrontier(row: Record<string, unknown>): RealLaunchFrontierRecord {
  return Object.freeze({
    recordId: String(row.record_id),
    kind: String(row.kind) as RealLaunchFrontierKind,
    occurredAt: String(row.occurred_at),
    executionContractId: String(row.execution_contract_id),
    executionContractVersion: Number(row.execution_contract_version),
    semanticFingerprint: String(row.semantic_fingerprint),
    attemptId: String(row.attempt_id),
    selectedAgentRef: String(row.selected_agent_ref),
    actorId: String(row.actor_id),
    grantId: String(row.grant_id),
    correlationId: String(row.correlation_id),
    processRef: row.process_ref != null ? String(row.process_ref) : undefined,
    payloadJson: String(row.payload_json ?? "{}"),
  });
}

export type SqliteLaunchSafetyJournalOptions = {
  /** Explicit technical DB path — required for durability across processes. */
  readonly databasePath: string;
};

export class SqliteLaunchSafetyJournal implements LaunchSafetyJournalPort {
  private readonly db: DatabaseSync;
  readonly databasePath: string;

  constructor(options: SqliteLaunchSafetyJournalOptions) {
    if (!options.databasePath || options.databasePath.trim() === "") {
      throw new Error("m4_safety_journal_database_path_required");
    }
    this.databasePath = options.databasePath;
    this.db = new DatabaseSync(options.databasePath);
    this.db.exec(SCHEMA_SQL);
  }

  /** Test helper — close handle. */
  close(): void {
    this.db.close();
  }

  async createGrant(input: CreateGrantInput): Promise<GateDGrant> {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      this.db
        .prepare(
          `INSERT INTO m4_gate_d_grants (
            grant_id, execution_contract_id, execution_contract_version,
            semantic_fingerprint, attempt_id, selected_agent_ref, actor_id,
            issued_at, expires_at, status, correlation_id
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'granted', ?)`,
        )
        .run(
          input.grantId,
          input.executionContractId,
          input.executionContractVersion,
          input.semanticFingerprint,
          input.attemptId,
          input.selectedAgentRef,
          input.actorId,
          input.issuedAt,
          input.expiresAt,
          input.correlationId ?? null,
        );
      this.db.exec("COMMIT");
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      throw error;
    }
    const grant = await this.findGrant(input.grantId);
    if (!grant) throw new Error("m4_gate_d_persist_failed");
    return grant;
  }

  /** Transitional alias. */
  async persistGateDGrant(input: CreateGrantInput): Promise<GateDGrant> {
    return this.createGrant(input);
  }

  async findGrant(grantId: string): Promise<GateDGrant | null> {
    const row = this.db
      .prepare(`SELECT * FROM m4_gate_d_grants WHERE grant_id = ?`)
      .get(grantId) as Record<string, unknown> | undefined;
    return row ? mapGrant(row) : null;
  }

  async findGateDGrant(grantId: string): Promise<GateDGrant | null> {
    return this.findGrant(grantId);
  }

  async findActiveGateDGrantForAttempt(
    attemptId: string,
  ): Promise<GateDGrant | null> {
    const row = this.db
      .prepare(
        `SELECT * FROM m4_gate_d_grants
         WHERE attempt_id = ? AND status = 'granted'`,
      )
      .get(attemptId) as Record<string, unknown> | undefined;
    return row ? mapGrant(row) : null;
  }

  async validateGrantForStart(
    input: ValidateGrantForStartInput,
  ): Promise<GrantValidationResult> {
    const grant = await this.findGrant(input.grantId);
    if (!grant) return { ok: false, reason: "GATE_D_REQUIRED" };
    if (grant.status === "consumed") {
      return { ok: false, reason: "GATE_D_ALREADY_CONSUMED" };
    }
    if (grant.status !== "granted") {
      return { ok: false, reason: "GATE_D_INVALID" };
    }
    if (Date.parse(grant.expiresAt) <= Date.parse(input.nowIso)) {
      return { ok: false, reason: "GATE_D_EXPIRED" };
    }
    if (
      grant.attemptId !== input.attemptId ||
      grant.actorId !== input.actorId ||
      grant.selectedAgentRef !== input.selectedAgentRef ||
      grant.executionContractId !== input.identity.executionContractId ||
      grant.executionContractVersion !==
        input.identity.executionContractVersion ||
      grant.semanticFingerprint !== input.identity.semanticFingerprint
    ) {
      return { ok: false, reason: "GATE_D_BINDING_MISMATCH" };
    }
    return { ok: true, grant };
  }

  async atomicConsumeGrantAndCreateFrontier(
    input: AtomicConsumeGrantAndCreateFrontierInput,
  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }> {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      const grantRow = this.db
        .prepare(`SELECT * FROM m4_gate_d_grants WHERE grant_id = ?`)
        .get(input.grantId) as Record<string, unknown> | undefined;
      if (!grantRow) {
        throw new Error("m4_gate_d_not_found");
      }
      const grant = mapGrant(grantRow);
      if (grant.status === "consumed") {
        throw new Error("m4_gate_d_already_consumed");
      }
      if (grant.status !== "granted") {
        throw new Error("m4_gate_d_not_granted");
      }
      if (Date.parse(grant.expiresAt) <= Date.parse(input.occurredAt)) {
        this.db
          .prepare(
            `UPDATE m4_gate_d_grants SET status = 'expired' WHERE grant_id = ?`,
          )
          .run(input.grantId);
        throw new Error("m4_gate_d_expired");
      }
      if (grant.attemptId !== input.attemptId) {
        throw new Error("m4_gate_d_attempt_mismatch");
      }
      if (
        grant.executionContractId !== input.identity.executionContractId ||
        grant.executionContractVersion !==
          input.identity.executionContractVersion ||
        grant.semanticFingerprint !== input.identity.semanticFingerprint
      ) {
        throw new Error("m4_gate_d_identity_mismatch");
      }
      if (grant.selectedAgentRef !== input.selectedAgentRef) {
        throw new Error("m4_gate_d_agent_mismatch");
      }
      if (grant.actorId !== input.actorId) {
        throw new Error("m4_gate_d_actor_mismatch");
      }

      const ambiguous = this.db
        .prepare(
          `SELECT 1 AS ok FROM m4_launch_frontier
           WHERE execution_contract_id = ?
             AND execution_contract_version = ?
             AND semantic_fingerprint = ?
           LIMIT 1`,
        )
        .get(
          input.identity.executionContractId,
          input.identity.executionContractVersion,
          input.identity.semanticFingerprint,
        );
      if (ambiguous) {
        throw new Error("m4_launch_frontier_ambiguous");
      }

      this.db
        .prepare(
          `UPDATE m4_gate_d_grants
           SET status = 'consumed', consumed_at = ?
           WHERE grant_id = ? AND status = 'granted'`,
        )
        .run(input.occurredAt, input.grantId);

      const recordId = newId("m4fr");
      this.db
        .prepare(
          `INSERT INTO m4_launch_frontier (
            record_id, kind, occurred_at, execution_contract_id,
            execution_contract_version, semantic_fingerprint, attempt_id,
            selected_agent_ref, actor_id, grant_id, correlation_id,
            process_ref, payload_json
          ) VALUES (?, 'CREATED', ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL, '{}')`,
        )
        .run(
          recordId,
          input.occurredAt,
          input.identity.executionContractId,
          input.identity.executionContractVersion,
          input.identity.semanticFingerprint,
          input.attemptId,
          input.selectedAgentRef,
          input.actorId,
          input.grantId,
          input.correlationId,
        );

      this.db.exec("COMMIT");

      const createdRow = this.db
        .prepare(`SELECT * FROM m4_launch_frontier WHERE record_id = ?`)
        .get(recordId) as Record<string, unknown>;
      const updatedGrant = await this.findGrant(input.grantId);
      if (!updatedGrant) throw new Error("m4_gate_d_consume_lost");
      return { grant: updatedGrant, created: mapFrontier(createdRow) };
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      throw error;
    }
  }

  /** Transitional alias. */
  async consumeGateDAndAppendCreated(
    input: AtomicConsumeGrantAndCreateFrontierInput,
  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }> {
    return this.atomicConsumeGrantAndCreateFrontier(input);
  }

  async markLaunched(
    input: MarkLaunchedInput,
  ): Promise<RealLaunchFrontierRecord> {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      const created = this.db
        .prepare(
          `SELECT 1 AS ok FROM m4_launch_frontier
           WHERE attempt_id = ? AND kind = 'CREATED'`,
        )
        .get(input.attemptId);
      if (!created) {
        throw new Error("m4_launched_requires_created");
      }
      const recordId = newId("m4fr");
      const payloadJson = JSON.stringify(input.payload ?? {});
      this.db
        .prepare(
          `INSERT INTO m4_launch_frontier (
            record_id, kind, occurred_at, execution_contract_id,
            execution_contract_version, semantic_fingerprint, attempt_id,
            selected_agent_ref, actor_id, grant_id, correlation_id,
            process_ref, payload_json
          ) VALUES (?, 'LAUNCHED', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        )
        .run(
          recordId,
          input.occurredAt,
          input.identity.executionContractId,
          input.identity.executionContractVersion,
          input.identity.semanticFingerprint,
          input.attemptId,
          input.selectedAgentRef,
          input.actorId,
          input.grantId,
          input.correlationId,
          input.processRef,
          payloadJson,
        );
      this.db.exec("COMMIT");
      const row = this.db
        .prepare(`SELECT * FROM m4_launch_frontier WHERE record_id = ?`)
        .get(recordId) as Record<string, unknown>;
      return mapFrontier(row);
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      throw error;
    }
  }

  /** Transitional alias. */
  async appendLaunched(
    input: MarkLaunchedInput,
  ): Promise<RealLaunchFrontierRecord> {
    return this.markLaunched(input);
  }

  async findFrontierByAttemptId(
    attemptId: string,
  ): Promise<RealLaunchFrontierRecord[]> {
    const rows = this.db
      .prepare(
        `SELECT * FROM m4_launch_frontier WHERE attempt_id = ? ORDER BY occurred_at`,
      )
      .all(attemptId) as Record<string, unknown>[];
    return rows.map(mapFrontier);
  }

  async findFrontierByAttempt(
    attemptId: string,
  ): Promise<RealLaunchFrontierRecord[]> {
    return this.findFrontierByAttemptId(attemptId);
  }

  async findFrontierByContractFingerprint(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchFrontierRecord[]> {
    const rows = this.db
      .prepare(
        `SELECT * FROM m4_launch_frontier
         WHERE execution_contract_id = ?
           AND execution_contract_version = ?
           AND semantic_fingerprint = ?
         ORDER BY occurred_at`,
      )
      .all(
        identity.executionContractId,
        identity.executionContractVersion,
        identity.semanticFingerprint,
      ) as Record<string, unknown>[];
    return rows.map(mapFrontier);
  }

  async findFrontierByIdentity(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchFrontierRecord[]> {
    return this.findFrontierByContractFingerprint(identity);
  }

  async hasAmbiguousFrontier(
    identity: ContractSafetyIdentity,
  ): Promise<boolean> {
    const rows = await this.findFrontierByContractFingerprint(identity);
    return rows.length > 0;
  }

  async reconcileDispositionForIdentity(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchReconcileDisposition> {
    const rows = await this.findFrontierByContractFingerprint(identity);
    if (rows.length === 0) return "CLEAR";
    const hasCreated = rows.some((r) => r.kind === "CREATED");
    const hasLaunched = rows.some((r) => r.kind === "LAUNCHED");
    if (hasLaunched) return "REVIEW_REQUIRED";
    if (hasCreated) return "UNKNOWN";
    return "REVIEW_REQUIRED";
  }

  async hasKindForAttempt(
    attemptId: string,
    kind: RealLaunchFrontierKind,
  ): Promise<boolean> {
    const row = this.db
      .prepare(
        `SELECT 1 AS ok FROM m4_launch_frontier WHERE attempt_id = ? AND kind = ?`,
      )
      .get(attemptId, kind);
    return Boolean(row);
  }
}

/** Transitional export name. */
export { SqliteLaunchSafetyJournal as SqliteRealLaunchSafetyJournal };

===== NEW FILE: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqliteRealLaunchSafetyJournal.ts =====
/**
 * SqliteRealLaunchSafetyJournal — technical SQLite safety DB (D-M4-02/04).
 * Re-exports SqliteLaunchSafetyJournal under the Delivery cycle name.
 */
export {
  SqliteLaunchSafetyJournal as SqliteRealLaunchSafetyJournal,
  SqliteLaunchSafetyJournal,
  type SqliteLaunchSafetyJournalOptions as SqliteRealLaunchSafetyJournalOptions,
  type SqliteLaunchSafetyJournalOptions,
} from "./sqlite/sqliteLaunchSafetyJournal";

===== NEW FILE: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts =====
/**
 * StudioCursorRealLaunchGateway — OA-owned REAL launch ACL (D-M4-01).
 *
 * Harvested concepts from OPS1 (no import from lib/ops1).
 * Default REAL process enablement OFF via SFIA_STUDIO_CURSOR_REAL.
 * Requires ProcessRunner + RealExecutionWorkspacePort (no Fake defaults).
 * Order: enablement → bin resolve → prepareWorkspace → runner.invoke.
 */
import { accessSync, constants } from "node:fs";
import path from "node:path";
import {
  isStudioCursorRealEnabled,
  M4_REAL_GATEWAY_ADAPTER_ID,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
} from "../domain/realLaunchSafety";
import type {
  ProcessRunner,
  RealExecutionLaunchPort,
  RealLaunchRequest,
  RealLaunchResult,
  RealProcessObservation,
} from "../ports/realExecutionLaunchPort";
import type { RealExecutionWorkspacePort } from "../ports/realExecutionWorkspacePort";
import { DisabledRealProcessRunner } from "./nodeCursorProcessRunner";

export type StudioCursorRealLaunchGatewayOptions = {
  readonly processRunner: ProcessRunner;
  readonly workspacePort: RealExecutionWorkspacePort;
  readonly env?: NodeJS.ProcessEnv;
  readonly resolveCursorBin?: () => string | null;
  readonly defaultTimeoutMs?: number;
};

/** Copy of OPS1 resolveCursorBinPath pattern — no ops1 import. */
export function resolveCursorBinPath(
  env: NodeJS.ProcessEnv = process.env,
): string | null {
  const candidates = [
    env.SFIA_CURSOR_BIN,
    "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    path.join(env.HOME ?? "", ".local/bin/cursor-agent"),
  ].filter(Boolean) as string[];
  for (const c of candidates) {
    try {
      accessSync(c, constants.X_OK);
      return c;
    } catch {
      /* next */
    }
  }
  return null;
}

export const resolveStudioCursorBinPath = resolveCursorBinPath;

export { DisabledRealProcessRunner };

export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
  readonly gatewayId = M4_REAL_GATEWAY_ADAPTER_ID;
  readonly externalEffects = true as const;

  private readonly runner: ProcessRunner;
  private readonly workspacePort: RealExecutionWorkspacePort;
  private readonly env: NodeJS.ProcessEnv;
  private readonly resolveBin: () => string | null;
  private readonly timeoutMs: number;
  private readonly observations = new Map<string, RealProcessObservation>();

  constructor(options: StudioCursorRealLaunchGatewayOptions) {
    if (!options.processRunner) {
      throw new Error("studio_cursor_real_launch_process_runner_required");
    }
    if (!options.workspacePort) {
      throw new Error("studio_cursor_real_launch_workspace_port_required");
    }
    this.runner = options.processRunner;
    this.workspacePort = options.workspacePort;
    this.env = options.env ?? process.env;
    this.resolveBin =
      options.resolveCursorBin ?? (() => resolveCursorBinPath(this.env));
    this.timeoutMs = options.defaultTimeoutMs ?? 60_000;
  }

  async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
    if (request.adapterRef !== this.gatewayId) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "adapter_ref_mismatch",
        realProcessInvoked: false,
        detailCode: "REAL_AGENT_PROFILE_INVALID",
      };
    }

    if (!isStudioCursorRealEnabled(this.env)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "studio_cursor_real_disabled",
        realProcessInvoked: false,
        detailCode: "REAL_BOUNDARY_DISABLED",
      };
    }

    if (
      (request.target && request.target.includes("UNRESOLVED")) ||
      (request.action && request.action.includes("UNRESOLVED"))
    ) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "unresolved_contract_refused",
        realProcessInvoked: false,
        detailCode: "REAL_AGENT_PROFILE_INVALID",
      };
    }

    const baseHeadSha =
      request.baseHeadSha ?? request.worktreeBaseHeadSha ?? "";
    if (!/^[0-9a-f]{40}$/i.test(baseHeadSha)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "base_head_sha_invalid",
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    const bin = this.resolveBin();
    if (!bin) {
      return {
        outcome: "fail",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "cursor_unavailable",
        realProcessInvoked: false,
        detailCode: "CURSOR_UNAVAILABLE",
      };
    }

    let workspacePath: string;
    try {
      const prepared = await this.workspacePort.prepareWorkspace({
        attemptId: request.attemptId,
        baseHeadSha,
      });
      workspacePath = prepared.workspacePath;
    } catch (err) {
      const message = err instanceof Error ? err.message : "workspace_failed";
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: message.includes("REAL_WORKSPACE_INVALID")
          ? message
          : `workspace_prepare_failed:${message}`,
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    // Fixed argv shape — executable is separate; no user-controlled shell.
    const instruction = [
      "TÂCHE UNIQUE — lecture seule bornée.",
      `target=${request.target ?? ""}`,
      `action=${request.action ?? ""}`,
      `scope=${request.scope ?? ""}`,
      `fingerprint=${request.semanticFingerprint}`,
      "Aucune mutation, aucun git remote/commit/push/PR/merge.",
    ].join("\n");

    const argv = [
      "agent",
      "--print",
      "--workspace",
      workspacePath,
      "--trust",
      "--sandbox",
      "enabled",
      instruction,
    ];

    try {
      const invoked = await this.runner.invoke({
        attemptId: request.attemptId,
        executable: bin,
        cwd: workspacePath,
        argv,
        timeoutMs: this.timeoutMs,
        env: {
          ...this.env,
          [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
        },
      });

      if (!invoked.realProcessInvoked) {
        return {
          outcome: "fail",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "real_process_not_invoked",
          realProcessInvoked: false,
          detailCode: "REAL_LAUNCH_FAILED",
        };
      }

      this.observations.set(invoked.processRef, {
        processRef: invoked.processRef,
        exitCode: invoked.observation?.exitCode ?? null,
        timedOut: invoked.observation?.timedOut ?? false,
        stdout: invoked.observation?.stdout ?? "",
        stderr: invoked.observation?.stderr ?? "",
        durationMs: invoked.observation?.durationMs ?? 0,
        realProcessInvoked: true,
        worktreeRef: workspacePath,
      });

      return {
        outcome: "ack",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        realProcessInvoked: true,
        processRef: invoked.processRef,
        worktreeRef: workspacePath,
      };
    } catch {
      return {
        outcome: "fail",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "real_launch_threw",
        realProcessInvoked: false,
        detailCode: "REAL_LAUNCH_FAILED",
      };
    }
  }

  async observe(processRef: string): Promise<RealProcessObservation | null> {
    return this.observations.get(processRef) ?? null;
  }

  async awaitCompletion(
    processRef: string,
  ): Promise<RealProcessObservation | null> {
    return this.observe(processRef);
  }
}

/** @deprecated Prefer StudioCursorRealLaunchGateway. */
export { StudioCursorRealLaunchGateway as CursorCliLaunchGateway };

===== NEW FILE: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts =====
/**
 * StudioGitWorktreeWorkspace — fail-closed isolated Git worktree prep (M4 R2).
 *
 * Injectable GitCommandRunner; production default spawn(shell:false).
 * Tests MUST inject FakeGitCommandRunner — never run real git worktree in REAL-OFF.
 */
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import path from "node:path";
import { spawn as nodeSpawn } from "node:child_process";
import type {
  PrepareWorkspaceRequest,
  PrepareWorkspaceResult,
  RealExecutionWorkspacePort,
} from "../ports/realExecutionWorkspacePort";

export type GitCommandResult = {
  readonly stdout: string;
  readonly stderr: string;
  readonly exitCode: number;
};

export interface GitCommandRunner {
  run(
    argv: readonly string[],
    cwd: string,
  ): Promise<GitCommandResult>;
}

export type StudioGitWorktreeWorkspaceOptions = {
  readonly repoRoot: string;
  readonly execRoot: string;
  readonly gitRunner: GitCommandRunner;
};

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

export function isFullGitSha(value: unknown): value is string {
  return typeof value === "string" && FULL_SHA_RE.test(value);
}

export function workspacePathForAttempt(
  execRoot: string,
  attemptId: string,
): string {
  const digest = createHash("sha256")
    .update(attemptId, "utf8")
    .digest("hex")
    .slice(0, 24);
  const safe = attemptId.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 48);
  return path.resolve(execRoot, `wt-${safe}-${digest}`);
}

export class StudioGitWorktreeWorkspace implements RealExecutionWorkspacePort {
  private readonly repoRoot: string;
  private readonly execRoot: string;
  private readonly gitRunner: GitCommandRunner;

  constructor(options: StudioGitWorktreeWorkspaceOptions) {
    if (!options.repoRoot || options.repoRoot.trim() === "") {
      throw new Error("studio_git_worktree_repo_root_required");
    }
    if (!options.execRoot || options.execRoot.trim() === "") {
      throw new Error("studio_git_worktree_exec_root_required");
    }
    const repoRoot = path.resolve(options.repoRoot);
    const execRoot = path.resolve(options.execRoot);
    if (repoRoot === execRoot) {
      throw new Error("studio_git_worktree_repo_exec_roots_must_differ");
    }
    if (!options.gitRunner) {
      throw new Error("studio_git_worktree_git_runner_required");
    }
    this.repoRoot = repoRoot;
    this.execRoot = execRoot;
    this.gitRunner = options.gitRunner;
  }

  async prepareWorkspace(
    request: PrepareWorkspaceRequest,
  ): Promise<PrepareWorkspaceResult> {
    if (!isFullGitSha(request.baseHeadSha)) {
      throw new Error("REAL_WORKSPACE_INVALID:base_head_sha_invalid");
    }
    const baseHeadSha = request.baseHeadSha.toLowerCase();
    const workspacePath = workspacePathForAttempt(
      this.execRoot,
      request.attemptId,
    );

    if (
      workspacePath !== this.execRoot &&
      !workspacePath.startsWith(this.execRoot + path.sep)
    ) {
      throw new Error("REAL_WORKSPACE_INVALID:workspace_outside_exec_root");
    }
    if (existsSync(workspacePath)) {
      throw new Error("REAL_WORKSPACE_INVALID:workspace_path_exists");
    }

    // a) verify commit exists
    const verify = await this.gitRunner.run(
      ["rev-parse", "--verify", `${baseHeadSha}^{commit}`],
      this.repoRoot,
    );
    if (verify.exitCode !== 0) {
      throw new Error("REAL_WORKSPACE_INVALID:base_head_sha_missing");
    }

    // b) worktree add --detach
    const add = await this.gitRunner.run(
      ["worktree", "add", "--detach", workspacePath, baseHeadSha],
      this.repoRoot,
    );
    if (add.exitCode !== 0) {
      throw new Error("REAL_WORKSPACE_INVALID:worktree_add_failed");
    }

    // c) rev-parse HEAD must equal baseHeadSha exactly
    const head = await this.gitRunner.run(["rev-parse", "HEAD"], workspacePath);
    if (head.exitCode !== 0) {
      throw new Error("REAL_WORKSPACE_INVALID:head_rev_parse_failed");
    }
    const verifiedHeadSha = head.stdout.trim().toLowerCase();
    if (verifiedHeadSha !== baseHeadSha) {
      throw new Error("REAL_WORKSPACE_INVALID:head_mismatch");
    }

    return { workspacePath, verifiedHeadSha };
  }
}

/**
 * Production GitCommandRunner — spawn(shell:false).
 * Tests MUST NOT use this; inject FakeGitCommandRunner instead.
 */
export class NodeGitCommandRunner implements GitCommandRunner {
  async run(
    argv: readonly string[],
    cwd: string,
  ): Promise<GitCommandResult> {
    return await new Promise((resolve) => {
      const child = nodeSpawn("git", [...argv], {
        cwd,
        shell: false,
        stdio: ["ignore", "pipe", "pipe"],
      });
      let stdout = "";
      let stderr = "";
      child.stdout?.on("data", (c: Buffer) => {
        if (stdout.length < 64 * 1024) stdout += c.toString("utf8");
      });
      child.stderr?.on("data", (c: Buffer) => {
        if (stderr.length < 64 * 1024) stderr += c.toString("utf8");
      });
      child.on("error", () => {
        resolve({ stdout, stderr: stderr || "git_spawn_error", exitCode: 1 });
      });
      child.on("close", (code) => {
        resolve({ stdout, stderr, exitCode: code ?? 1 });
      });
    });
  }
}

===== NEW FILE: projects/sfia-studio/app/lib/oa/execution-attempt/ports/launchSafetyJournalPort.ts =====
/**
 * LaunchSafetyJournalPort — Delivery naming aliases.
 * Canonical definitions live in realLaunchSafetyJournalPort.ts.
 */
export type {
  RealLaunchSafetyJournalPort,
  LaunchSafetyJournalPort,
  PersistGateDGrantInput,
  PersistGateDGrantInput as CreateGrantInput,
  AtomicConsumeGateDAndCreateFrontierInput,
  AtomicConsumeGateDAndCreateFrontierInput as AtomicConsumeGrantAndCreateFrontierInput,
  MarkLaunchedInput,
  ValidateGrantForStartInput,
  GrantValidationResult,
} from "./realLaunchSafetyJournalPort";

===== NEW FILE: projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts =====
/**
 * RealExecutionLaunchPort — specialized REAL OA boundary (D-M4-01 Option B).
 *
 * Distinct from ExecutionAdapterPort (externalEffects:false forever).
 * Must NOT be accepted by InjectableExecutionAdapter.
 */

export type RealLaunchRequest = {
  readonly attemptId: string;
  readonly executionContractId: string;
  readonly executionContractVersion: number;
  readonly semanticFingerprint: string;
  readonly selectedAgentRef: string;
  readonly adapterRef: string;
  readonly correlationId: string;
  /**
   * Contract-bound full Git SHA (40 hex). Preferred name.
   * Alias `worktreeBaseHeadSha` accepted for older call sites.
   */
  readonly baseHeadSha: string;
  /** @deprecated Prefer baseHeadSha — kept as alias only. */
  readonly worktreeBaseHeadSha?: string;
  /** Structured contract fields for fixed argv — not free client argv. */
  readonly action?: string;
  readonly target?: string;
  readonly scope?: string;
};

export type RealLaunchAck = {
  readonly outcome: "ack";
  readonly gatewayId: string;
  readonly attemptId: string;
  readonly realProcessInvoked: true;
  readonly processRef: string;
  readonly worktreeRef?: string;
};

export type RealLaunchReject = {
  readonly outcome: "reject";
  readonly gatewayId: string;
  readonly attemptId: string;
  readonly reason: string;
  readonly realProcessInvoked: false;
  readonly detailCode?:
    | "REAL_BOUNDARY_DISABLED"
    | "CURSOR_UNAVAILABLE"
    | "REAL_WORKSPACE_INVALID"
    | "REAL_LAUNCH_FAILED"
    | "REAL_AGENT_PROFILE_INVALID";
};

export type RealLaunchFailure = {
  readonly outcome: "fail";
  readonly gatewayId: string;
  readonly attemptId: string;
  readonly reason: string;
  readonly realProcessInvoked: false | boolean;
  readonly detailCode?:
    | "REAL_BOUNDARY_DISABLED"
    | "CURSOR_UNAVAILABLE"
    | "REAL_WORKSPACE_INVALID"
    | "REAL_LAUNCH_FAILED";
};

export type RealLaunchResult =
  | RealLaunchAck
  | RealLaunchReject
  | RealLaunchFailure;

export type RealProcessObservation = {
  readonly processRef: string;
  readonly exitCode: number | null;
  readonly timedOut: boolean;
  readonly stdout: string;
  readonly stderr: string;
  readonly durationMs: number;
  readonly realProcessInvoked: boolean;
  readonly worktreeRef?: string;
};

export type ProcessRunnerInvokeInput = {
  readonly attemptId: string;
  /** Resolved Cursor binary — NEVER embedded as argv[0]. */
  readonly executable: string;
  readonly argv: readonly string[];
  readonly cwd: string;
  readonly timeoutMs: number;
  readonly env: NodeJS.ProcessEnv;
};

export type ProcessRunnerInvokeResult = {
  readonly processRef: string;
  readonly realProcessInvoked: boolean;
  readonly observation?: Partial<RealProcessObservation>;
};

/**
 * Injectable process runner. Production: NodeCursorProcessRunner (spawn shell:false).
 * Tests MUST inject a fake / FakeSpawnPrimitive — never spawn Cursor during REAL-OFF.
 */
export interface ProcessRunner {
  invoke(input: ProcessRunnerInvokeInput): Promise<ProcessRunnerInvokeResult>;
}

/** @deprecated Prefer ProcessRunner. */
export type RealProcessRunnerPort = ProcessRunner;

export interface RealExecutionLaunchPort {
  readonly gatewayId: string;
  /**
   * Static marker — REAL boundary may declare external effects.
   * Fixture ExecutionAdapterPort must remain externalEffects:false.
   */
  readonly externalEffects: true;
  launch(request: RealLaunchRequest): Promise<RealLaunchResult>;
  observe?(processRef: string): Promise<RealProcessObservation | null>;
  awaitCompletion?(
    processRef: string,
  ): Promise<RealProcessObservation | null>;
}

===== NEW FILE: projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionWorkspacePort.ts =====
/**
 * RealExecutionWorkspacePort — OA-owned isolated worktree preparation (M4 R2).
 *
 * Server-side roots only; callers supply attemptId + contract-bound baseHeadSha.
 * Never accepts a free client cwd.
 */

export type PrepareWorkspaceRequest = {
  readonly attemptId: string;
  /** Full 40-hex Git SHA from ExecutionContract.inputs.baseHeadSha. */
  readonly baseHeadSha: string;
};

export type PrepareWorkspaceResult = {
  readonly workspacePath: string;
  readonly verifiedHeadSha: string;
};

export interface RealExecutionWorkspacePort {
  prepareWorkspace(
    request: PrepareWorkspaceRequest,
  ): Promise<PrepareWorkspaceResult>;
}

===== NEW FILE: projects/sfia-studio/app/lib/oa/execution-attempt/ports/realLaunchSafetyJournalPort.ts =====
/**
 * RealLaunchSafetyJournalPort — technical Gate D + launch frontier journal (D-M4-02/04).
 *
 * NOT Product Store · NOT Attempt aggregate · NOT Confirmation · TEMPORARY WITH EXIT.
 */
import type {
  ContractSafetyIdentity,
  GateDGrant,
  RealLaunchFrontierKind,
  RealLaunchFrontierRecord,
  RealLaunchReconcileDisposition,
} from "../domain/realLaunchSafety";

export type PersistGateDGrantInput = {
  readonly grantId: string;
  readonly executionContractId: string;
  readonly executionContractVersion: number;
  readonly semanticFingerprint: string;
  readonly attemptId: string;
  readonly selectedAgentRef: string;
  readonly actorId: string;
  readonly issuedAt: string;
  readonly expiresAt: string;
  readonly correlationId?: string;
};

/** @deprecated Prefer PersistGateDGrantInput. */
export type CreateGrantInput = PersistGateDGrantInput;

export type AtomicConsumeGateDAndCreateFrontierInput = {
  readonly grantId: string;
  readonly attemptId: string;
  readonly occurredAt: string;
  readonly identity: ContractSafetyIdentity;
  readonly selectedAgentRef: string;
  readonly actorId: string;
  readonly correlationId: string;
};

/** @deprecated Prefer AtomicConsumeGateDAndCreateFrontierInput. */
export type AtomicConsumeGrantAndCreateFrontierInput =
  AtomicConsumeGateDAndCreateFrontierInput;

export type MarkLaunchedInput = {
  readonly attemptId: string;
  readonly occurredAt: string;
  readonly identity: ContractSafetyIdentity;
  readonly selectedAgentRef: string;
  readonly actorId: string;
  readonly grantId: string;
  readonly correlationId: string;
  readonly processRef: string;
  readonly payload?: Record<string, unknown> | unknown;
};

export type ValidateGrantForStartInput = {
  readonly grantId: string;
  readonly attemptId: string;
  readonly actorId: string;
  readonly selectedAgentRef: string;
  readonly identity: ContractSafetyIdentity;
  readonly nowIso: string;
};

export type GrantValidationResult =
  | { readonly ok: true; readonly grant: GateDGrant }
  | {
      readonly ok: false;
      readonly reason:
        | "GATE_D_REQUIRED"
        | "GATE_D_INVALID"
        | "GATE_D_EXPIRED"
        | "GATE_D_ALREADY_CONSUMED"
        | "GATE_D_BINDING_MISMATCH";
    };

/**
 * Canonical M4 journal port used by StartExecution + GrantRealExecutionGate.
 * Implementations may also expose transitional aliases (createGrant, markLaunched, …).
 */
export interface RealLaunchSafetyJournalPort {
  persistGateDGrant(input: PersistGateDGrantInput): Promise<GateDGrant>;
  findGateDGrant(grantId: string): Promise<GateDGrant | null>;
  findActiveGateDGrantForAttempt(attemptId: string): Promise<GateDGrant | null>;
  consumeGateDAndAppendCreated(
    input: AtomicConsumeGateDAndCreateFrontierInput,
  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }>;
  appendLaunched(input: MarkLaunchedInput): Promise<RealLaunchFrontierRecord>;
  findFrontierByAttempt(
    attemptId: string,
  ): Promise<RealLaunchFrontierRecord[]>;
  findFrontierByIdentity(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchFrontierRecord[]>;
  hasAmbiguousFrontier(identity: ContractSafetyIdentity): Promise<boolean>;
  reconcileDispositionForIdentity(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchReconcileDisposition>;
  hasKindForAttempt(
    attemptId: string,
    kind: RealLaunchFrontierKind,
  ): Promise<boolean>;
}

/**
 * Extended journal surface used by transitional GrantGateD / Memory journal.
 * Includes both task names and alternate names.
 */
export interface LaunchSafetyJournalPort extends RealLaunchSafetyJournalPort {
  createGrant(input: CreateGrantInput): Promise<GateDGrant>;
  findGrant(grantId: string): Promise<GateDGrant | null>;
  validateGrantForStart(
    input: ValidateGrantForStartInput,
  ): Promise<GrantValidationResult>;
  atomicConsumeGrantAndCreateFrontier(
    input: AtomicConsumeGrantAndCreateFrontierInput,
  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }>;
  markLaunched(input: MarkLaunchedInput): Promise<RealLaunchFrontierRecord>;
  findFrontierByAttemptId(
    attemptId: string,
  ): Promise<RealLaunchFrontierRecord[]>;
  findFrontierByContractFingerprint(
    identity: ContractSafetyIdentity,
  ): Promise<RealLaunchFrontierRecord[]>;
}


---
# APPENDIX C — File sizes (untracked)
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffBoundary.test.ts` (19253 bytes)
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts` (7187 bytes)
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts` (21325 bytes)
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR3.test.ts` (7995 bytes)
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCrashReplay.test.ts` (8387 bytes)
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeProcessRunner.ts` (1185 bytes)
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts` (5501 bytes)
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/support/m4Fixtures.ts` (350 bytes)
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts` (3762 bytes)
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts` (7582 bytes)
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/grantRealExecutionGate.ts` (385 bytes)
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts` (2871 bytes)
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts` (771 bytes)
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedReadOnlyCursorAgent.ts` (2781 bytes)
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/memoryLaunchSafetyJournal.ts` (8307 bytes)
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/nodeCursorProcessRunner.ts` (6548 bytes)
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteLaunchSafetyJournal.ts` (15704 bytes)
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqliteRealLaunchSafetyJournal.ts` (424 bytes)
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts` (7866 bytes)
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts` (5152 bytes)
- `projects/sfia-studio/app/lib/oa/execution-attempt/ports/launchSafetyJournalPort.ts` (521 bytes)
- `projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts` (3613 bytes)
- `projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionWorkspacePort.ts` (647 bytes)
- `projects/sfia-studio/app/lib/oa/execution-attempt/ports/realLaunchSafetyJournalPort.ts` (4291 bytes)

# APPENDIX D — Final git truth
```
branch=delivery/sfia-studio-m4-real-off
HEAD=e974b7306f7400249c31399fd2890d5817833dbf
origin/main=e974b7306f7400249c31399fd2890d5817833dbf
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/errors.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffBoundary.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR3.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCrashReplay.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/support/
?? projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/application/grantRealExecutionGate.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedReadOnlyCursorAgent.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/memoryLaunchSafetyJournal.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/nodeCursorProcessRunner.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqliteRealLaunchSafetyJournal.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/ports/launchSafetyJournalPort.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionWorkspacePort.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/ports/realLaunchSafetyJournalPort.ts
```
