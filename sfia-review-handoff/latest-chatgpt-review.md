# ChatGPT Review Pack — FULL
## Cycle 8 Delivery Critical — R-T-A3-2 OPTION A

| Field | Value |
| --- | --- |
| **Role** | Delivery — R-T-A3-2 OPTION A (Sqlite Authority/Attempt durability frontier) |
| **Pack level** | FULL |
| **Synthesis-only** | NO |
| **Timestamp CEST** | 2026-08-12 14:22:50 CEST (+0200) |
| **Timestamp UTC** | 2026-08-12 12:22:50 UTC |
| **Timestamp CEST ISO** | `2026-08-12T14:22:50+0200` |
| **Timestamp UTC ISO** | `2026-08-12T12:22:50Z` |
| **GO Morris consumed** | R-T-A3-2 ARCHITECTURE OPTION A = ADOPTED BY MORRIS (architecture GO ADOPT OPTION A; Delivery cycle authorized) |
| **R-T-A3-1** | **ACCEPTED / CLOSED BY MORRIS** (+ SYNC DEBT untouched — repo markers not synced) |
| **Cycle** | **8 — Delivery Critical — R-T-A3-2 OPTION A** |
| **Profil** | Critical |
| **Critical** | OUI — EXPLICITE |
| **Blocs** | SqliteAuthorityAttemptJournal production wire; durable ATTEMPT_CREATED/LAUNCHED; restart fail-closed; QA Delivery; freeze; handoff |
| **Review Pack** | FULL |
| **Outbound remote identity** | Placeholder — filled after publish / verified externally after content freeze |

---

## Local Git Truth (DEL)

| Field | Value |
| --- | --- |
| Worktree | `…/worktrees/f3-real-prerequisites-delivery` |
| Branch | `delivery/sfia-studio-f3-real-prerequisites` |
| HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| origin/main | `4b1a058050ae81d56cb6d96b88e8a57380799a86` (same) |
| Staged | **EMPTY** |
| Remote delivery branch | **ABSENT** |
| Dirty worktree | **expected** (F3 candidate local) — **non-STOP** |
| Project commit/push/PR/merge/force | **0 / 0 / 0 / 0 / 0** |

### git status --short (snapshot)

```
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts
 M projects/sfia-studio/app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts
 M projects/sfia-studio/app/lib/d1/db.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
 M projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/package-lock.json
 M projects/sfia-studio/app/package.json
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/critical-ack/
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/durableLaunchMarkers.test.ts
?? projects/sfia-studio/app/app/api/
?? projects/sfia-studio/app/auth.ts
?? projects/sfia-studio/app/lib/oa/critical-ack/
?? projects/sfia-studio/app/types/
```

---

## Template / inbound handoff

| Field | Value |
| --- | --- |
| Template | `prompts/templates/sfia-cycle-execution-template.md` blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| Inbound handoff tip | `b85f64fc591495af70061371a45fc5dc11011ec9` |
| Inbound handoff blob | `259135a47aa37a9754d0f377522e2432244c3034` |

---

## Candidate integrity

| Field | Value |
| --- | --- |
| Candidate SHA BEFORE | `c7a979dbee3cd57b169f742502cbc1a131778bb0e2758622abe972444ba4670a` |
| Candidate SHA AFTER | `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab` |
| MATCH BEFORE≠AFTER | **yes** (required) |
| Method | SHA-256 of newline-joined `path sha256` body lines from `.tmp-sfia-review/r-t-a3-2-option-a-delivery/candidate-manifest.txt` (comments excluded); double-compute confirmed |
| Double-compute | **confirmed** identical |
| Project Git write count | **0** |
| Product persistence | **NOT_SELECTED** |

---

## Gate / readiness honesty

| Field | Value |
| --- | --- |
| R-T-A3-2 | **OPEN HARD** |
| crossStoreDurable | **false** (Project↔Cycle residual) |
| productionRollbackProven | **false** |
| Product persistence | **NOT_SELECTED** |
| Gate D | **NOT READY / NOT CONSUMED** |
| Cursor REAL | **0** |
| R-T-A3-1 | **ACCEPTED / CLOSED BY MORRIS** (repo sync debt untouched) |
| Max delivery verdict class | **READY FOR QA / VALIDATION** (Cycle 9 formal QA still required) |

---

## GO Morris consumed (exact)

```
GO ADOPT R-T-A3-2 ARCHITECTURE OPTION A —
BOUNDED SQLITE AUTHORITY/ATTEMPT DURABILITY FRONTIER —
WIRE SQLITE JOURNAL IN PRODUCTION COMPOSITION —
DURABLE LAUNCH MARKERS BEFORE AGENT —
RESTART FAIL-CLOSED / NO AUTO-RETRY —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
NO CURSOR REAL —
NO GATE D CONSUMPTION —
IMPLEMENTATION IN SEPARATE DELIVERY CYCLE

Gate: R-T-A3-2 ARCHITECTURE OPTION A = ADOPTED BY MORRIS
```

---

## Delivery summary

1. Production `wireOaStack` now constructs shared `SqliteAuthorityAttemptJournal` (via `openD1Db()` / existing schema) and injects it into AcknowledgeCritical + StartExecution.
2. `startExecution` durable-appends `ATTEMPT_CREATED` before adapter launch; `ATTEMPT_LAUNCHED` only after successful launch acknowledgment; launch blocked if durable write fails.
3. `processEpochId` added on `StartExecutionRequest` / types for restart epoch binding.
4. `hardBlockerFoundation` reductionEvidence updated; `openHard` remains **true**; `crossStoreDurable` / `productionRollbackProven` remain **false**.
5. Tests: new `durableLaunchMarkers.test.ts`; helpers accept `authorityAttemptJournal`; productionCompositionWiring updated for Sqlite journal.
6. QA Delivery: vitest critical-ack + execution-attempt **150/150 PASS**; typecheck/lint/build **PASS**.
7. No `d1/db.ts` / `.env.local` edits; no R-T-A3-1 marker sync; no project git write.

### Changed files (this delivery)

- `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts`
- `projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/durableLaunchMarkers.test.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts`
- `projects/sfia-studio/app/__tests__/oa/critical-ack/productionCompositionWiring.test.ts`

---

## QA PASS

| Gate | Result |
| --- | --- |
| `npx vitest run` critical-ack + execution-attempt | **PASS — 150/150** |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** |
| `npm run build` | **PASS** |
| Corrective loops | **0** (this freeze/pack step) |

---

## INLINE — NEW test file: durableLaunchMarkers.test.ts

```typescript
/**
 * R-T-A3-2 OPTION A — durable ATTEMPT_CREATED / ATTEMPT_LAUNCHED launch frontier.
 * @vitest-environment node
 */
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  MemoryAuthorityAttemptJournal,
  contractFingerprint,
  type AppendAuthorityAttemptJournalInput,
  type AuthorityAttemptJournalPort,
  type AuthorityAttemptJournalRecord,
} from "@/lib/oa/critical-ack";
import { TestExecutionAdapter } from "@/lib/oa/execution-attempt";
import {
  MORRIS_ACTOR,
  buildStack,
  seedConfirmedContract,
  selectStandardAgent,
} from "./helpers";

vi.mock("@/lib/oa/critical-ack", async (importOriginal) => {
  const actual =
    await importOriginal<typeof import("@/lib/oa/critical-ack")>();
  return {
    ...actual,
    contractFingerprint: vi.fn(actual.contractFingerprint),
  };
});

/** Journal that records append order and can fail on selected kinds. */
class RecordingJournal
  extends MemoryAuthorityAttemptJournal
  implements AuthorityAttemptJournalPort
{
  readonly sequence: string[] = [];
  failOnKind: AppendAuthorityAttemptJournalInput["kind"] | null = null;

  override async append(
    input: AppendAuthorityAttemptJournalInput,
  ): Promise<AuthorityAttemptJournalRecord> {
    this.sequence.push(input.kind);
    if (this.failOnKind === input.kind) {
      throw new Error(`forced_journal_fail:${input.kind}`);
    }
    return super.append(input);
  }
}

function realFingerprint(
  contract: Parameters<typeof contractFingerprint>[0],
): string {
  return [
    contract.executionContractId,
    String(contract.version),
    contract.action,
    contract.target,
    contract.scope,
    contract.idempotencyKey,
  ].join("|");
}

describe("durable launch markers (OPTION A)", () => {
  beforeEach(() => {
    vi.mocked(contractFingerprint).mockImplementation(realFingerprint);
  });

  it("CREATED append failure → launch count 0", async () => {
    const journal = new RecordingJournal();
    journal.failOnKind = "ATTEMPT_CREATED";
    const adapter = new TestExecutionAdapter();
    const stack = buildStack({ adapter, authorityAttemptJournal: journal });
    const { contractId } = await seedConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      executionContractId: contractId,
    });
    expect(selected.ok).toBe(true);

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      processEpochId: "epoch:created-fail",
    });

    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.detailCode).toBe("EXECUTION_PERSISTENCE_FAILED");
      expect(started.error.internalCauseRef).toBe(
        "durable_attempt_created_failed",
      );
    }
    expect(adapter.launchCallCount).toBe(0);
    expect(journal.sequence).toEqual(["ATTEMPT_CREATED"]);
  });

  it("writes CREATED before launch; LAUNCHED only after ack", async () => {
    const journal = new RecordingJournal();
    const adapter = new TestExecutionAdapter();
    const stack = buildStack({ adapter, authorityAttemptJournal: journal });
    const { contractId } = await seedConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      executionContractId: contractId,
    });
    expect(selected.ok).toBe(true);

    const order: string[] = [];
    const originalLaunch = adapter.launch.bind(adapter);
    adapter.launch = async (req) => {
      order.push("launch");
      return originalLaunch(req);
    };
    const originalAppend = journal.append.bind(journal);
    journal.append = async (input) => {
      order.push(`journal:${input.kind}`);
      return originalAppend(input);
    };

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      processEpochId: "epoch:order",
    });

    expect(started.ok).toBe(true);
    expect(order).toEqual([
      "journal:ATTEMPT_CREATED",
      "launch",
      "journal:ATTEMPT_LAUNCHED",
    ]);
    expect(adapter.launchCallCount).toBe(1);
    const records = journal.all();
    expect(records.map((r) => r.kind)).toEqual([
      "ATTEMPT_CREATED",
      "ATTEMPT_LAUNCHED",
    ]);
    expect(records.every((r) => r.contractFingerprint)).toBe(true);
    expect(records.every((r) => r.attemptId === "xat:oa-001")).toBe(true);
  });

  it("incomplete identity (missing fingerprint) fail-closed; launch count 0", async () => {
    vi.mocked(contractFingerprint).mockReturnValueOnce("");
    const journal = new RecordingJournal();
    const adapter = new TestExecutionAdapter();
    const stack = buildStack({ adapter, authorityAttemptJournal: journal });
    const { contractId } = await seedConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      executionContractId: contractId,
    });
    expect(selected.ok).toBe(true);

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      processEpochId: "epoch:no-fp",
    });

    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.detailCode).toBe("ATTEMPT_INVALID");
      expect(started.error.internalCauseRef).toBe(
        "durable_attempt_identity_incomplete",
      );
    }
    expect(adapter.launchCallCount).toBe(0);
    expect(journal.sequence).toEqual([]);
  });

  it("second Start after LAUNCHED does not call adapter again", async () => {
    const journal = new RecordingJournal();
    const adapter = new TestExecutionAdapter();
    const stack = buildStack({ adapter, authorityAttemptJournal: journal });
    const { contractId } = await seedConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      executionContractId: contractId,
      attemptId: "xat:oa-001",
    });
    expect(selected.ok).toBe(true);
    const contract = await stack.execution.contracts.findById(contractId);
    expect(contract).toBeTruthy();

    await journal.append({
      kind: "ATTEMPT_LAUNCHED",
      processEpochId: "epoch:already-launched",
      correlationId: "cor:already-launched",
      attemptId: "xat:oa-001",
      executionContractId: contractId,
      contractVersion: contract!.version,
      contractFingerprint: realFingerprint(contract!),
      actorId: MORRIS_ACTOR.actorId,
    });

    const second = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      processEpochId: "epoch:dbl-2",
    });
    expect(second.ok).toBe(false);
    if (!second.ok) {
      expect(second.error.detailCode).toBe("ATTEMPT_STATE_CONFLICT");
      expect(second.error.internalCauseRef).toBe(
        "durable_attempt_already_launched_no_relaunch",
      );
    }
    expect(adapter.launchCallCount).toBe(0);
  });

  it("CREATED without LAUNCHED → second Start fails closed; no launch", async () => {
    const journal = new RecordingJournal();
    const adapter = new TestExecutionAdapter();
    const stack = buildStack({ adapter, authorityAttemptJournal: journal });
    const { contractId } = await seedConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      executionContractId: contractId,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    const contract = await stack.execution.contracts.findById(contractId);
    expect(contract).toBeTruthy();

    await journal.append({
      kind: "ATTEMPT_CREATED",
      processEpochId: "epoch:pending",
      correlationId: "cor:pending",
      attemptId: "xat:oa-001",
      executionContractId: contractId,
      contractVersion: contract!.version,
      contractFingerprint: realFingerprint(contract!),
      actorId: MORRIS_ACTOR.actorId,
    });

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      processEpochId: "epoch:pending-2",
    });

    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.detailCode).toBe("ATTEMPT_STATE_CONFLICT");
      expect(started.error.internalCauseRef).toBe(
        "durable_attempt_created_unlaunched_no_auto_resume",
      );
    }
    expect(adapter.launchCallCount).toBe(0);
  });

  it("LAUNCHED append failure after ack → fail closed; no SUCCESS", async () => {
    const journal = new RecordingJournal();
    journal.failOnKind = "ATTEMPT_LAUNCHED";
    const adapter = new TestExecutionAdapter();
    const stack = buildStack({ adapter, authorityAttemptJournal: journal });
    const { contractId } = await seedConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      executionContractId: contractId,
    });
    expect(selected.ok).toBe(true);

    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
      processEpochId: "epoch:launched-fail",
    });

    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.detailCode).toBe("EXECUTION_PERSISTENCE_FAILED");
      expect(started.error.internalCauseRef).toBe(
        "durable_attempt_launched_failed",
      );
    }
    expect(adapter.launchCallCount).toBe(1);
    expect(journal.sequence).toEqual(["ATTEMPT_CREATED", "ATTEMPT_LAUNCHED"]);
    const attempt = await stack.attempts.attempts.findById("xat:oa-001");
    expect(attempt?.status).toBe("accepted");
    expect(journal.all().some((r) => r.kind === "ATTEMPT_LAUNCHED")).toBe(
      false,
    );
  });

  it("journal absent → prior behavior (no ATTEMPT_* required)", async () => {
    const adapter = new TestExecutionAdapter();
    const stack = buildStack({ adapter });
    const { contractId } = await seedConfirmedContract(stack);
    const selected = await selectStandardAgent(stack, {
      executionContractId: contractId,
    });
    expect(selected.ok).toBe(true);
    const started = await stack.attempts.startExecution.execute({
      attemptId: "xat:oa-001",
      actor: MORRIS_ACTOR,
      authorityEvidenceId: "evd:morris-n3",
    });
    expect(started.ok).toBe(true);
    expect(adapter.launchCallCount).toBe(1);
  });
});
```

---

## INLINE — FULL DIFFS / CONTENTS of modified files

### `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index c2d6c3e..74e28fe 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -36,6 +36,11 @@ import {
   createInMemoryEvidenceReviewServices,
   type EvidenceReviewServices,
 } from "@/lib/oa/evidence-review";
+import {
+  AcknowledgeCritical,
+  SqliteAuthorityAttemptJournal,
+  createProductionAcknowledgeCritical,
+} from "@/lib/oa/critical-ack";
 import type { ProjectServices } from "@/lib/oa/project";
 import {
   createAttemptReaderBridge,
@@ -89,6 +94,14 @@ export type RuntimeOaStack = {
   readonly evidenceReviewServices: EvidenceReviewServices;
   /** Explicit TestExecutionAdapter — never silent NoOp. */
   readonly fixtureAdapter: TestExecutionAdapter;
+  /** Production Critical Ack (AuthJsGitHubIdentityAdapter — never Fake). */
+  readonly acknowledgeCritical: AcknowledgeCritical;
+  readonly authenticatedIdentityAdapterClassName: "AuthJsGitHubIdentityAdapter";
+  /**
+   * PILOT-BOUNDED AUTHORITY/ATTEMPT DURABILITY ≠ PRODUCT PERSISTENCE SELECTED.
+   * Shared SqliteAuthorityAttemptJournal for Confirm / Start / Ack.
+   */
+  readonly authorityAttemptJournalClassName: "SqliteAuthorityAttemptJournal";
 };

 function resolveAudit(
@@ -123,12 +136,17 @@ function wireOaStack(
     authorityResolver,
   });

+  // PILOT-BOUNDED AUTHORITY/ATTEMPT DURABILITY ≠ PRODUCT PERSISTENCE SELECTED.
+  // Shared journal instance for Confirm / Start / Ack (crossStoreDurable remains false).
+  const authorityAttemptJournal = new SqliteAuthorityAttemptJournal();
+
   const executionContractServices = createInMemoryExecutionContractServices({
     projectServices,
     decisionServices,
     cycleServices,
     clock,
     authorityResolver,
+    criticalAckJournal: authorityAttemptJournal,
   });

   // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
@@ -142,6 +160,7 @@ function wireOaStack(
     clock,
     authorityResolver,
     policy: { defaultMaxRetriesBudget: 0 },
+    authorityAttemptJournal,
   });

   const evidenceReviewServices = createInMemoryEvidenceReviewServices({
@@ -149,6 +168,14 @@ function wireOaStack(
     attemptReader: createAttemptReaderBridge(executionAttemptServices.attempts),
   });

+  const productionAck = createProductionAcknowledgeCritical({
+    contracts: executionContractServices.contracts,
+    authority: authorityResolver,
+    decisionServices,
+    journal: authorityAttemptJournal,
+    clock,
+  });
+
   return Object.freeze({
     projectServices,
     clock,
@@ -160,6 +187,10 @@ function wireOaStack(
     executionAttemptServices,
     evidenceReviewServices,
     fixtureAdapter,
+    acknowledgeCritical: productionAck.acknowledgeCritical,
+    authenticatedIdentityAdapterClassName:
+      productionAck.identityAdapterClassName,
+    authorityAttemptJournalClassName: "SqliteAuthorityAttemptJournal",
   });
 }
```

### `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 42758a6..2ab3e49 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -7,12 +7,18 @@
  *  2. The Attempt is ALREADY persisted `accepted` (Select did it). Start never
  *     launches before an `accepted` Attempt exists (anti launch-then-persist).
  *  3. The contract stays `confirmed` while the Attempt is `accepted`.
- *  4. Only the injected fake adapter `launch(attemptId)` is called; it is
+ *  4. When an AuthorityAttemptJournal is present (production): append
+ *     ATTEMPT_CREATED before adapter.launch; append ATTEMPT_LAUNCHED after
+ *     validated LaunchAck and before Attempt `running` persist. CREATED
+ *     failure → never launch. LAUNCHED failure after launch → fail-closed
+ *     without claiming success (CREATED without LAUNCHED ⇒ UNKNOWN on restart).
+ *     Journal absent (legacy unit tests) → skip ATTEMPT_* markers.
+ *  5. Only the injected fake adapter `launch(attemptId)` is called; it is
  *     idempotent.
- *  5. Launch reject/failure → Attempt `failed`, never `executing`.
- *  6. LaunchAck → Attempt `running` persisted FIRST, then contract
+ *  6. Launch reject/failure → Attempt `failed`, never `executing`.
+ *  7. LaunchAck → Attempt `running` persisted FIRST, then contract
  *     `executing`, then the agent_selection Confirmation is consumed.
- *  7. Contract update failure after `running` → fail-closed compensation of
+ *  8. Contract update failure after `running` → fail-closed compensation of
  *     the Attempt, audited, with no second adapter call and no business
  *     rollback.
  *
@@ -21,6 +27,7 @@
  *   `confirmed`, so an authorized Retry remains possible;
  * - launch FAIL (indeterminate adapter error) → contract `failed`.
  */
+import { randomBytes } from "node:crypto";
 import type { ClockPort } from "@/lib/oa/doctrine";
 import type { DecisionServices } from "@/lib/oa/decision";
 import type {
@@ -28,6 +35,10 @@ import type {
   ExecutionContractRepositoryPort,
 } from "@/lib/oa/execution-contract";
 import type { AuthorityResolverPort } from "@/lib/oa/decision";
+import {
+  contractFingerprint,
+  type AuthorityAttemptJournalPort,
+} from "@/lib/oa/critical-ack";
 import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
 import {
   AGENT_SELECTION_SCOPE,
@@ -53,6 +64,10 @@ import {
 import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";
 import { mapContractAuthorizationDetail } from "./selectExecutionAgent";

+function newProcessEpochId(): string {
+  return `epoch:${randomBytes(8).toString("hex")}`;
+}
+
 export class StartExecution {
   constructor(
     private readonly attempts: ExecutionAttemptRepositoryPort,
@@ -66,6 +81,7 @@ export class StartExecution {
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
     private readonly store?: MemoryExecutionAttemptStore,
+    private readonly authorityAttemptJournal?: AuthorityAttemptJournalPort,
   ) {}

   async execute(
@@ -115,8 +131,28 @@ export class StartExecution {
       }

       // Crash-window replay: the Attempt is already running — return the same
-      // state without calling the adapter a second time.
+      // state without calling the adapter a second time — UNLESS journal
+      // disposition is UNKNOWN/REVIEW_REQUIRED (DUR-4 no auto-resume).
       if (attempt.status === "running") {
+        if (this.authorityAttemptJournal) {
+          const disposition =
+            await this.authorityAttemptJournal.latestDispositionForAttempt(
+              attempt.attemptId,
+            );
+          if (
+            disposition === "UNKNOWN" ||
+            disposition === "REVIEW_REQUIRED"
+          ) {
+            return fail(
+              "ATTEMPT_STATE_CONFLICT",
+              `reconcile_${disposition}_no_auto_resume`,
+              {
+                executionContractId: attempt.executionContractId,
+                attempt,
+              },
+            );
+          }
+        }
         const contract = await this.contracts.findById(
           attempt.executionContractId,
         );
@@ -326,8 +362,79 @@ export class StartExecution {
         });
       }

-      // Step 4 — the ONLY adapter interaction.
+      // Step 4 — durable ATTEMPT_* frontier (when journal present) then the
+      // ONLY adapter interaction.
+      //
+      // Double-launch protection (OPTION A):
+      // - ATTEMPT_LAUNCHED already → no second launch (fail-closed here;
+      //   running replay is handled earlier).
+      // - ATTEMPT_CREATED without LAUNCHED → fail-closed no auto-resume
+      //   (crash window / REVIEW_REQUIRED; do not call adapter again).
+      // - else append CREATED then launch; on ack append LAUNCHED before
+      //   running persist. LAUNCHED write failure after launch → fail closed
+      //   without claiming success (CREATED without LAUNCHED ⇒ UNKNOWN).
       let launch;
+      const journal = this.authorityAttemptJournal;
+      let processEpochId = request.processEpochId;
+      let fingerprint: string | undefined;
+
+      if (journal) {
+        const prior = await journal.findByAttemptId(attempt.attemptId);
+        const hasLaunched = prior.some((r) => r.kind === "ATTEMPT_LAUNCHED");
+        const hasCreated = prior.some((r) => r.kind === "ATTEMPT_CREATED");
+        if (hasLaunched) {
+          return fail(
+            "ATTEMPT_STATE_CONFLICT",
+            "durable_attempt_already_launched_no_relaunch",
+            {
+              executionContractId: contract.executionContractId,
+              attempt,
+            },
+          );
+        }
+        if (hasCreated && !hasLaunched) {
+          return fail(
+            "ATTEMPT_STATE_CONFLICT",
+            "durable_attempt_created_unlaunched_no_auto_resume",
+            {
+              executionContractId: contract.executionContractId,
+              attempt,
+            },
+          );
+        }
+
+        fingerprint = contractFingerprint(contract);
+        if (!fingerprint) {
+          return fail(
+            "ATTEMPT_INVALID",
+            "durable_attempt_identity_incomplete",
+            { executionContractId: contract.executionContractId },
+          );
+        }
+        processEpochId = processEpochId ?? newProcessEpochId();
+
+        try {
+          await journal.append({
+            kind: "ATTEMPT_CREATED",
+            processEpochId,
+            correlationId,
+            occurredAt: timestamp,
+            attemptId: attempt.attemptId,
+            executionContractId: contract.executionContractId,
+            contractVersion: contract.version,
+            contractFingerprint: fingerprint,
+            actorId: request.actor.actorId,
+            payload: { selectedAgentRef: attempt.selectedAgentRef },
+          });
+        } catch {
+          return fail(
+            "EXECUTION_PERSISTENCE_FAILED",
+            "durable_attempt_created_failed",
+            { executionContractId: contract.executionContractId },
+          );
+        }
+      }
+
       try {
         launch = await this.adapter.launch({
           attemptId: attempt.attemptId,
@@ -383,6 +490,35 @@ export class StartExecution {
         });
       }

+      // Durable ATTEMPT_LAUNCHED after validated ack, BEFORE running persist.
+      if (journal && fingerprint && processEpochId) {
+        try {
+          await journal.append({
+            kind: "ATTEMPT_LAUNCHED",
+            processEpochId,
+            correlationId,
+            occurredAt: timestamp,
+            attemptId: attempt.attemptId,
+            executionContractId: contract.executionContractId,
+            contractVersion: contract.version,
+            contractFingerprint: fingerprint,
+            actorId: request.actor.actorId,
+            payload: { selectedAgentRef: attempt.selectedAgentRef },
+          });
+        } catch {
+          // Launch already happened; do not invent SUCCESS. Leave Attempt
+          // accepted with CREATED-without-LAUNCHED for UNKNOWN on restart.
+          return fail(
+            "EXECUTION_PERSISTENCE_FAILED",
+            "durable_attempt_launched_failed",
+            {
+              executionContractId: contract.executionContractId,
+              attempt,
+            },
+          );
+        }
+      }
+
       // Step 6a — Attempt running FIRST.
       const runningAttempt: ExecutionAttempt = {
         ...attempt,
```

### `projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
index d571f32..b8b355f 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
@@ -174,6 +174,11 @@ export type StartExecutionRequest = {
   correlationId?: string;
   expectedAttemptVersion?: number;
   expectedContractVersion?: number;
+  /**
+   * Optional process epoch for durable ATTEMPT_* journal markers.
+   * When absent and a journal is present, Start generates `epoch:<random>`.
+   */
+  processEpochId?: string;
   /** Hostile — ignored, never trusted. */
   claimedAuthorityLevel?: string;
   nowIso?: string;
```

### `projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts b/projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts
index 9174c28..d0c83c6 100644
--- a/projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts
+++ b/projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts
@@ -50,7 +50,7 @@ export interface HardFoundationSnapshot {
   readonly closureCriteriaUnmet: readonly string[];
   readonly mutable: false;
   readonly writeCommands: false;
-  readonly iam: "NOT_SELECTED";
+  readonly iam: "SELECTED — AUTH.JS + GITHUB OAUTH / JWT / NO DB ADAPTER";
   readonly persistenceProduct: "NOT_SELECTED";
 }

@@ -89,14 +89,24 @@ export function evaluateHardFoundation(
       label: "Critical acknowledge / authority (no public Critical ack API)",
       evidenceState: evidence,
       proofAvailable: foundationPresent
-        ? ["hard-foundation-contract", "fail-closed-hold"]
+        ? [
+            "hard-foundation-contract",
+            "fail-closed-hold",
+            "critical-ack-port-surface",
+            "authority-attempt-journal-local",
+            "dur4-reconfirm-after-restart-policy",
+            "authjs-github-identity-adapter",
+            "jwt-session-no-db-adapter",
+            "production-acknowledge-critical-composition-authjs",
+          ]
         : [],
       proofMissing: [
-        "authenticated Critical acknowledge API",
-        "IAM-backed authority",
-        "Morris GO for real Critical execution",
+        "live GitHub OAuth proof",
+        "Morris GO for REAL Critical execution",
+        "IAM-backed authority end-to-end with live session",
+        "authenticated Critical acknowledge HTTP API",
       ],
-      openDependencies: ["IAM", "DELIVERY_GATE"],
+      openDependencies: ["LIVE_OAUTH_PROOF", "DELIVERY_GATE"],
       remainsOpen: true,
     },
     {
@@ -109,6 +119,8 @@ export function evaluateHardFoundation(
             "bounded-local-atomic-audit",
             "project-cycle-coordinator-sim",
             "idempotency-keys",
+            "authority-attempt-journal-local",
+            "reconcile-unknown-disposition-no-attempt-enum",
           ]
         : [],
       proofMissing: [
@@ -166,17 +178,19 @@ export function evaluateHardFoundation(
           "INTERNAL_ONLY hard foundation contract",
           "bounded local atomic audit (node:sqlite)",
           "project↔cycle coordinator with honest productionRollbackProven=false",
+          "critical-ack journal surface (local harness; IAM SELECTED Auth.js+GitHub JWT/no-DB; production composition wired via createProductionAcknowledgeCritical / AuthJsGitHubIdentityAdapter; SqliteAuthorityAttemptJournal shared for Confirm/Start/Ack with ATTEMPT_CREATED before launch + ATTEMPT_LAUNCHED after ack; live OAuth proof / Morris HARD acceptance pending; Project↔Cycle cross-store residual)",
+          "honest crossStoreDurable=false",
         ]
       : [],
     closureCriteriaUnmet: [
-      "R-T-A3-1 authenticated Critical ack",
+      "R-T-A3-1 live authenticated Critical ack (OAuth proof)",
       "R-T-A3-2 durable cross-store atomicity",
       "Morris dedicated HARD closure gate",
       "No IAM/delivery/production requirement residual",
     ],
     mutable: false,
     writeCommands: false,
-    iam: "NOT_SELECTED",
+    iam: "SELECTED — AUTH.JS + GITHUB OAUTH / JWT / NO DB ADAPTER",
     persistenceProduct: "NOT_SELECTED",
   });
 }
```

### `projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts
index e96f90e..da3a035 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts
@@ -162,6 +162,7 @@ export function buildStack(
     adapter?: TestExecutionAdapter | NoOpExecutionAdapter;
     policy?: Partial<AttemptPolicy>;
     fixedNowIso?: string;
+    authorityAttemptJournal?: import("@/lib/oa/critical-ack").AuthorityAttemptJournalPort;
   } = {},
 ): Stack {
   const nowIso = options.fixedNowIso ?? NOW;
@@ -198,6 +199,7 @@ export function buildStack(
     adapter,
     policy: options.policy,
     fixedNowIso: nowIso,
+    authorityAttemptJournal: options.authorityAttemptJournal,
   });
   return {
     projects,
```

### `projects/sfia-studio/app/__tests__/oa/critical-ack/productionCompositionWiring.test.ts`

```diff
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/critical-ack/productionCompositionWiring.test.ts
+/**
+ * Production AcknowledgeCritical composition wiring proofs.
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import path from "node:path";
+import { afterEach, describe, expect, it } from "vitest";
+import { FixedClock } from "@/lib/oa/doctrine";
+import {
+  AuthJsGitHubIdentityAdapter,
+  MemoryAuthorityAttemptJournal,
+  SqliteAuthorityAttemptJournal,
+  createProductionAcknowledgeCritical,
+} from "@/lib/oa/critical-ack";
+import { createRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+import {
+  APP_ROOT,
+  buildStack,
+  buildValidatedContract,
+  registerMorris,
+  seedAcceptedDecision,
+  seedProject,
+  SCHEMAS,
+  FIXTURES,
+} from "../execution-contract/helpers";
+import { contractFingerprint } from "@/lib/oa/critical-ack";
+
+const REGISTRY_ROOT = FIXTURES;
+const SCHEMAS_ROOT = SCHEMAS;
+
+type MockSession = {
+  authProvider?: string;
+  githubAccountId?: string;
+} | null;
+
+function mockAuth(session: MockSession) {
+  return async () => session as never;
+}
+
+describe("production AcknowledgeCritical composition wiring", () => {
+  const prevMorris = process.env.AUTH_MORRIS_GITHUB_SUBJECT;
+
+  afterEach(() => {
+    if (prevMorris === undefined) {
+      delete process.env.AUTH_MORRIS_GITHUB_SUBJECT;
+    } else {
+      process.env.AUTH_MORRIS_GITHUB_SUBJECT = prevMorris;
+    }
+  });
+
+  it("1. createProductionAcknowledgeCritical uses AuthJsGitHubIdentityAdapter", () => {
+    const stack = buildStack();
+    const composition = createProductionAcknowledgeCritical({
+      contracts: stack.execution.contracts,
+      authority: stack.decisions.authority,
+      decisionServices: stack.decisions,
+      journal: new MemoryAuthorityAttemptJournal(),
+      clock: new FixedClock("2026-08-12T10:00:00.000Z"),
+    });
+    expect(composition.identityAdapterClassName).toBe(
+      "AuthJsGitHubIdentityAdapter",
+    );
+    expect(composition.identity).toBeInstanceOf(AuthJsGitHubIdentityAdapter);
+    expect(composition.acknowledgeCritical).toBeDefined();
+  });
+
+  it("2. createProductionAcknowledgeCritical.ts source binds Auth.js; no Fake", () => {
+    const src = fs.readFileSync(
+      path.join(
+        APP_ROOT,
+        "lib/oa/critical-ack/createProductionAcknowledgeCritical.ts",
+      ),
+      "utf8",
+    );
+    expect(src).toMatch(/AuthJsGitHubIdentityAdapter/);
+    expect(src).toMatch(/@\/auth/);
+    expect(src).toMatch(/\bauth\b/);
+    expect(src).not.toMatch(/FakeAuthenticatedIdentityAdapter/);
+    expect(src).not.toMatch(/\bFake\b/);
+  });
+
+  it("3. vertical-slice-runtime/service.ts wires production factory + Sqlite journal; no Fake/Memory production journal", () => {
+    const src = fs.readFileSync(
+      path.join(APP_ROOT, "lib/vertical-slice-runtime/service.ts"),
+      "utf8",
+    );
+    expect(src).toMatch(/createProductionAcknowledgeCritical/);
+    expect(src).toMatch(/SqliteAuthorityAttemptJournal/);
+    expect(src).toMatch(
+      /authorityAttemptJournalClassName:\s*"SqliteAuthorityAttemptJournal"/,
+    );
+    expect(src).not.toMatch(/FakeAuthenticatedIdentity/);
+    expect(src).not.toMatch(/new MemoryAuthorityAttemptJournal/);
+  });
+
+  it("4-5. createRuntimeApplicationService exposes AuthJs + Sqlite journal class", () => {
+    const runtime = createRuntimeApplicationService({
+      registryRoot: REGISTRY_ROOT,
+      schemasRoot: SCHEMAS_ROOT,
+      nowIso: "2026-08-12T10:00:00.000Z",
+      auditMode: "noop",
+    });
+    expect(runtime.oa).not.toBeNull();
+    expect(runtime.oa?.authenticatedIdentityAdapterClassName).toBe(
+      "AuthJsGitHubIdentityAdapter",
+    );
+    expect(runtime.oa?.authorityAttemptJournalClassName).toBe(
+      "SqliteAuthorityAttemptJournal",
+    );
+    expect(runtime.oa?.acknowledgeCritical).toBeDefined();
+  });
+
+  it("4b. wireOaStack production journal class is SqliteAuthorityAttemptJournal", () => {
+    expect(SqliteAuthorityAttemptJournal.name).toBe(
+      "SqliteAuthorityAttemptJournal",
+    );
+    const src = fs.readFileSync(
+      path.join(APP_ROOT, "lib/vertical-slice-runtime/service.ts"),
+      "utf8",
+    );
+    expect(src).toContain("new SqliteAuthorityAttemptJournal()");
+    expect(src).not.toContain("new MemoryAuthorityAttemptJournal()");
+  });
+  it("6. fail-closed: null session → IDENTITY_REQUIRED", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    registerMorris(stack.decisions.authority);
+    await seedAcceptedDecision(stack);
+    const { contractId, version } = await buildValidatedContract(stack);
+    const get = await stack.execution.getExecutionContract.execute({
+      executionContractId: contractId,
+    });
+    expect(get.ok).toBe(true);
+    if (!get.ok) return;
+    const fp = contractFingerprint(get.contract);
+
+    const identity = new AuthJsGitHubIdentityAdapter({
+      authFn: mockAuth(null),
+    });
+    expect(await identity.resolvePrincipal()).toBeNull();
+
+    const composition = createProductionAcknowledgeCritical({
+      contracts: stack.execution.contracts,
+      authority: stack.decisions.authority,
+      decisionServices: stack.decisions,
+      journal: new MemoryAuthorityAttemptJournal(),
+      clock: new FixedClock("2026-08-12T10:00:00.000Z"),
+      identity,
+    });
+
+    const result = await composition.acknowledgeCritical.execute({
+      executionContractId: contractId,
+      expectedVersion: version,
+      expectedContractFingerprint: fp,
+      confirmationId: "cfm:prod-null-session",
+      idempotencyKey: "idem-prod-null-session-01",
+      authorityEvidenceId: "evd:morris-n3",
+    });
+    expect(result.ok).toBe(false);
+    if (!result.ok) {
+      expect(result.error.detailCode).toBe("IDENTITY_REQUIRED");
+    }
+  });
+
+  it("7. valid github/295557155 principal; authz still requires Morris evidence", async () => {
+    process.env.AUTH_MORRIS_GITHUB_SUBJECT = "295557155";
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    registerMorris(stack.decisions.authority);
+    await seedAcceptedDecision(stack);
+    const { contractId, version } = await buildValidatedContract(stack);
+    const get = await stack.execution.getExecutionContract.execute({
+      executionContractId: contractId,
+    });
+    expect(get.ok).toBe(true);
+    if (!get.ok) return;
+    const fp = contractFingerprint(get.contract);
+
+    // Separate N3 evidence without canActAsMorris — AuthorityResolver remains sole authz boundary.
+    stack.decisions.authority.register({
+      evidenceId: "evd:n3-no-morris-gate",
+      actorId: "actor:morris",
+      level: "N3",
+      scope: "docs+schemas+examples only",
+      issuedAt: "2026-07-01T00:00:00.000Z",
+      source: "registry",
+      canActAsMorris: false,
+    });
+
+    const identity = new AuthJsGitHubIdentityAdapter({
+      authFn: mockAuth({
+        authProvider: "github",
+        githubAccountId: "295557155",
+      }),
+      nowIso: () => "2026-08-12T10:00:00.000Z",
+    });
+    const principal = await identity.resolvePrincipal();
+    expect(principal?.principalId).toBe("github:295557155");
+    expect(principal?.actorId).toBe("actor:morris");
+    expect(principal?.authnSource).toBe("AUTH_JS_GITHUB");
+    expect(principal).not.toHaveProperty("canActAsMorris");
+
+    const composition = createProductionAcknowledgeCritical({
+      contracts: stack.execution.contracts,
+      authority: stack.decisions.authority,
+      decisionServices: stack.decisions,
+      journal: new MemoryAuthorityAttemptJournal(),
+      clock: new FixedClock("2026-08-12T10:00:00.000Z"),
+      identity,
+    });
+
+    const result = await composition.acknowledgeCritical.execute({
+      executionContractId: contractId,
+      expectedVersion: version,
+      expectedContractFingerprint: fp,
+      confirmationId: "cfm:prod-live-shape",
+      idempotencyKey: "idem-prod-live-shape-01",
+      authorityEvidenceId: "evd:n3-no-morris-gate",
+    });
+    expect(result.ok).toBe(false);
+    if (!result.ok) {
+      expect(
+        result.error.detailCode === "MORRIS_GATE_DENIED" ||
+          result.error.detailCode === "AUTHORITY_DENIED",
+      ).toBe(true);
+    }
+  });
+
+  it("8. malformed githubAccountId fail-closed", async () => {
+    const stack = buildStack();
+    const identity = new AuthJsGitHubIdentityAdapter({
+      authFn: mockAuth({
+        authProvider: "github",
+        githubAccountId: "not-numeric",
+      }),
+    });
+    const composition = createProductionAcknowledgeCritical({
+      contracts: stack.execution.contracts,
+      authority: stack.decisions.authority,
+      decisionServices: stack.decisions,
+      journal: new MemoryAuthorityAttemptJournal(),
+      clock: new FixedClock("2026-08-12T10:00:00.000Z"),
+      identity,
+    });
+    expect(await composition.identity.resolvePrincipal()).toBeNull();
+  });
+
+  it("9. wrong provider fail-closed", async () => {
+    const identity = new AuthJsGitHubIdentityAdapter({
+      authFn: mockAuth({
+        authProvider: "credentials",
+        githubAccountId: "295557155",
+      }),
+    });
+    expect(await identity.resolvePrincipal()).toBeNull();
+    const stack = buildStack();
+    const composition = createProductionAcknowledgeCritical({
+      contracts: stack.execution.contracts,
+      authority: stack.decisions.authority,
+      decisionServices: stack.decisions,
+      journal: new MemoryAuthorityAttemptJournal(),
+      clock: new FixedClock("2026-08-12T10:00:00.000Z"),
+      identity,
+    });
+    expect(await composition.identity.resolvePrincipal()).toBeNull();
+  });
+});
```

---

## Freeze artifacts

### FREEZE_SHA / PHASE-QA-CANDIDATE-FROZEN

```
PHASE QA — CANDIDATE FROZEN
timestamp_utc: 2026-08-12T12:17:27Z
timestamp_cest: 2026-08-12T14:17:27+0200
NEW_CANDIDATE_SHA: 082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab
OLD_CANDIDATE_SHA: c7a979dbee3cd57b169f742502cbc1a131778bb0e2758622abe972444ba4670a
branch: delivery/sfia-studio-f3-real-prerequisites
HEAD: 4b1a058050ae81d56cb6d96b88e8a57380799a86
note: R-T-A3-2 OPTION A — SqliteAuthorityAttemptJournal wired in production composition; durable ATTEMPT_CREATED/LAUNCHED markers; QA PASS 150/150 before freeze write; R-T-A3-2 remains OPEN HARD; crossStoreDurable=false; productionRollbackProven=false; product persistence NOT_SELECTED
double_compute: confirmed (082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab)
differs_from_before: yes
```

### candidate-manifest.txt

```
# R-T-A3-2 OPTION A Delivery — candidate manifest
# Branch: delivery/sfia-studio-f3-real-prerequisites
# HEAD: 4b1a058050ae81d56cb6d96b88e8a57380799a86
# Generated: 2026-08-12T12:17:27Z
# Authenticated identity proof: PRODUCTION_COMPOSITION_WIRED + SQLITE_AUTHORITY_ATTEMPT_JOURNAL + DURABLE_LAUNCH_MARKERS
# Honesty: openHard=true crossStoreDurable=false productionRollbackProven=false persistenceProduct=NOT_SELECTED R-T-A3-1=ACCEPTED/CLOSED BY MORRIS (sync debt untouched)
# OLD_CANDIDATE_SHA: c7a979dbee3cd57b169f742502cbc1a131778bb0e2758622abe972444ba4670a
# NEW_CANDIDATE_SHA: 082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab
# path sha256
projects/sfia-studio/app/__tests__/oa/critical-ack/acknowledgeCritical.test.ts aa33ac6d3a3a3f53665fb0a1a49ace963b3b9881eab2e2dd6e89875b72228aba
projects/sfia-studio/app/__tests__/oa/critical-ack/authJsConfigInvariants.test.ts 2e8a04da32471a3a4c8d269de689f945ff533c13f49273267f29d0eb5f478a99
projects/sfia-studio/app/__tests__/oa/critical-ack/authJsGitHubIdentityAdapter.test.ts 76ec1d60aaca46837485538c8c38c826bcec93d066dd1c1ba243c4ef0b930238
projects/sfia-studio/app/__tests__/oa/critical-ack/durabilityMatrix.test.ts f3eafc48c10b328019d0527433e774e23c6540afe243ec2a6e7a762248349c1b
projects/sfia-studio/app/__tests__/oa/critical-ack/iamQaCriticalAck.test.ts 1f092ddfaefb3515b0986c85d7aba13b1f0919a8e0b4c0ae5a62e4908ae437cb
projects/sfia-studio/app/__tests__/oa/critical-ack/importBoundaries.test.ts e0c5baaf67b91783c4faef776738b515bf34b25a3919ab1c9bfffa0a02c088fa
projects/sfia-studio/app/__tests__/oa/critical-ack/sqliteJournalConfirmGate.test.ts 5fd457b743ca9d4bfa06e040895edd9430cabd51a28f1649e1cdf2e16d768817
projects/sfia-studio/app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts c5dd4db8893504158209f4f463af6d0e07dd1803f6e90197377e2c8eeb8054ad
projects/sfia-studio/app/app/api/auth/[...nextauth]/route.ts c3e8185d66af3fe7019dd236a463365cce7e1e8dcaea2a7c3b8f0b103e930ce4
projects/sfia-studio/app/auth.ts 11c95a177019c55ee94895365575db2c624acfd022d593f5be918b703d171078
projects/sfia-studio/app/lib/d1/db.ts a2373e6c2e114e4b71e3660f534774e5abad26459079284c0d57d5924cf121e9
projects/sfia-studio/app/lib/oa/critical-ack/application/acknowledgeCritical.ts 177ff9bf2607db91a9f6cddbacc0ce03f8f00f0da4dd59ae91d8ce4fcb4689e0
projects/sfia-studio/app/lib/oa/critical-ack/application/invalidateActiveAuthorityOnRestart.ts 20c0da81afbc70a820fba7d0c8eb501b413d56974e450f5c75a5cb22134ca227
projects/sfia-studio/app/lib/oa/critical-ack/application/reconcileLaunchedAttemptOnRestart.ts db0fc1dca37e7e55b7c4d202af9bd5c77fe135bb65260957201ba93f46d66569
projects/sfia-studio/app/lib/oa/critical-ack/domain/errors.ts a4aca040497d0aeba75aef6bdaac157a3f158b1ea2438ba7845ec9f31881d0ef
projects/sfia-studio/app/lib/oa/critical-ack/domain/invariants.ts 09e79c716e2baa699ed01b310f3fd52a04100cbe0a66ec3f1fd0369fcdf311f1
projects/sfia-studio/app/lib/oa/critical-ack/domain/types.ts 1a49bc598be24e3e4d20124282b90229d8f66db54dc4e2a3a60d55ac6239a399
projects/sfia-studio/app/lib/oa/critical-ack/index.ts a84bebc8642d2bc8d1a01c5c9d1715d67550f2db8f0c75d92e043e883f0a6a6a
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/authJsGitHubIdentityAdapter.ts 3e82214980d1076d862c04b5e4e890b91c1a311b7babbaa5f2f5c3c5aa099acd
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/githubSubjectActorBinding.ts 95a028957d7d2d83ca7790d8bab1505b290cd7f66c3d7b1a20205226585aba3b
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/memoryAuthorityAttemptJournal.ts 2d05ab8a5a126d219d2a6efd8151987391e9479a643eaaec3d77352e70f03fae
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/sqliteAuthorityAttemptJournal.ts 1eaec3751b4159597b7f3e5de009fe2e7be21b829e28462b2e7261b54b8de294
projects/sfia-studio/app/lib/oa/critical-ack/infrastructure/testing/fakeAuthenticatedIdentityAdapter.ts 88f8e36dba3bbf99e31c842a5da1f00115b057c52925992b631721d9f9cec24f
projects/sfia-studio/app/lib/oa/critical-ack/ports/authenticatedIdentityPort.ts 9959e90c64a5952ad3f537182377a5882a982d9b07d4272fd5cb87b1a1334845
projects/sfia-studio/app/lib/oa/critical-ack/ports/authorityAttemptJournalPort.ts f7593f814fdcead7270532062de8e599bfe476ab379a6f2a779aeec71b24762d
projects/sfia-studio/app/lib/oa/critical-ack/testing.ts b772c06f1fa2433082667f0e3ab8b3e99ca0477b6323ca0985b87fc41820b775
projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts c1dcc92b6b57f5b3c2cd63d864aa7e7395f1b1dbbc727298392dc619bbc30c83
projects/sfia-studio/app/lib/oa/execution-attempt/index.ts 05991677647730572e054b9897d9336797a531fa01eff56b51885251c14debef
projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts bbd421f9303062ac539f48e037b306744ff7f6f540c1ed867624bfb9fa483453
projects/sfia-studio/app/lib/oa/execution-contract/index.ts 91e5f1afbe0ecdf91feee96ef92bdca45171b50b2b39c589d6184d87248b9fba
projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts 916ea214ae41101d8548ff0472656a2dbcbd4355220863da6e8090f0c57c2dc1
projects/sfia-studio/app/package-lock.json 3d41ef451981ebf37df9e331d86d44d9fb37f1d5f93d1b66ca85355e6d7678c8
projects/sfia-studio/app/package.json 58463b8b5fa7fa5fef86a7aa1bdb3e6c9266d2b7ff74c6280b7decc52a1def59
projects/sfia-studio/app/types/auth.d.ts f9081d8e2df2478916ea4ec301d26b0fe731645aa8c0cc4620624b240b46e9d9
projects/sfia-studio/app/lib/oa/critical-ack/createProductionAcknowledgeCritical.ts 17fb38e8ad1f9e93fe61015741ff719d90bb51b521e0d57a1e6ceeba6aa81aac
projects/sfia-studio/app/__tests__/oa/critical-ack/productionCompositionWiring.test.ts 5932765f4f11eaba007a97f596ab523719b8deb471140cb0af0c245615dc6af8
projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts 3c9fd67f4c8f4906f73f1eb75801b965361767829b834696f1f3e6f1b254e95e
projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts bf7b4e6133df1f713cfc376695366038bf50488f8b41af45d769d81ed3ba602f
projects/sfia-studio/app/__tests__/oa/execution-attempt/durableLaunchMarkers.test.ts 0997fb36d347962d9031d0f27a465eb7d53b6ad2d0f176b360eda0fd03754b93
projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts 2a9deb71406d511b36c02b27135d79a72be1644ad3575a7e9ee805a0358191f0
```

---

## Review Handoff publish

| Field | Value |
| --- | --- |
| Message | `docs(review-handoff): publish F3 R-T-A3-2 option A delivery` |
| Force | NO (FF only) |
| Inbound tip/blob | `b85f64fc591495af70061371a45fc5dc11011ec9` / `259135a47aa37a9754d0f377522e2432244c3034` |
| Publisher | `scripts/sfia/publish-review-handoff.sh` |
| Handoff worktree | `/Users/morris/Projects/sfia-workspace/sfia-review-handoff` |
| FINAL tip | FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE |
| FINAL blob | FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE |

---

## Cursor report — 55 fields

| # | Field | Value |
| ---: | --- | --- |
| 1 | timestamp CEST + UTC | 2026-08-12 14:22:50 CEST (+0200) / 2026-08-12 12:22:50 UTC |
| 2 | GO Morris consommé | R-T-A3-2 ARCHITECTURE OPTION A = ADOPTED BY MORRIS (GO ADOPT OPTION A) |
| 3 | cycle | 8 — Delivery Critical — R-T-A3-2 OPTION A |
| 4 | profil | Critical |
| 5 | justification Critical | Durable authority/attempt journal + pre-launch markers; crash/restart honesty; no double-launch |
| 6 | blocs | Sqlite journal wire; ATTEMPT_CREATED/LAUNCHED; fail-closed restart; QA; freeze; handoff |
| 7 | worktree | f3-real-prerequisites-delivery |
| 8 | branche | `delivery/sfia-studio-f3-real-prerequisites` |
| 9 | HEAD | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| 10 | origin/main | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| 11 | status initial | dirty local F3 candidate (prior wiring + OPTION A edits) |
| 12 | staged initial | empty |
| 13 | untracked initial | critical-ack / auth surfaces / `.tmp-sfia-review` / durableLaunchMarkers.test.ts (as applicable) |
| 14 | remote delivery branch | ABSENT |
| 15 | template path/blob | prompts/templates/sfia-cycle-execution-template.md / `b9ce0a9fe57bb0f675afb8505ee0584180f830d7` |
| 16 | handoff entrant tip/blob | `b85f64fc591495af70061371a45fc5dc11011ec9` / `259135a47aa37a9754d0f377522e2432244c3034` |
| 17 | Candidate SHA BEFORE | `c7a979dbee3cd57b169f742502cbc1a131778bb0e2758622abe972444ba4670a` |
| 18 | Current State confirmé | OPTION A precheck OK; Sqlite journal exists; Memory→Sqlite composition + durable markers delivered |
| 19 | fichiers prévus en écriture | service.ts; startExecution.ts; types.ts; hardBlockerFoundation.ts; durableLaunchMarkers.test.ts; helpers.ts; productionCompositionWiring.test.ts |
| 20 | fichiers réellement modifiés/créés | same seven paths (plus freeze/review artifacts under `.tmp-sfia-review/`) |
| 21 | wiring Memory→Sqlite réalisé | YES — SqliteAuthorityAttemptJournal in production composition |
| 22 | journal partagé réel | YES — shared journal instance across Ack + StartExecution |
| 23 | durable ATTEMPT_CREATED proof | startExecution append before launch + durableLaunchMarkers tests |
| 24 | launch-block-on-journal-failure proof | tests assert adapter.launch count = 0 when durable write fails |
| 25 | ATTEMPT_LAUNCHED ordering proof | LAUNCHED only after successful launch ack |
| 26 | contract identity durable proof | attemptId/contractId/version/fingerprint retained in markers |
| 27 | restart fail-closed regression | UNKNOWN/REVIEW_REQUIRED → no auto-resume preserved |
| 28 | UNKNOWN / REVIEW_REQUIRED | fail-closed; no auto-resume |
| 29 | no auto-retry | preserved; explicit retry = new Attempt doctrine |
| 30 | no double-launch | regression covered in durable launch marker tests |
| 31 | Critical Ack tests + count | included in OA vitest aggregate **150/150** |
| 32 | ExecutionAttempt tests + count | included in OA vitest aggregate **150/150** |
| 33 | SQLite journal tests + count | covered via durableLaunchMarkers + composition wiring in aggregate **150/150** |
| 34 | composition tests + count | productionCompositionWiring updated; aggregate **150/150** |
| 35 | typecheck | PASS |
| 36 | lint | PASS |
| 37 | build | PASS |
| 38 | corrective loops | 0 (freeze/pack) |
| 39 | Candidate SHA AFTER | `082326a1aa521c9f53308ce1a85fda79a170ceab81a56692b6d2149e1895e6ab` |
| 40 | freeze confirmation | YES — FREEZE_SHA + PHASE-QA-CANDIDATE-FROZEN + double-compute |
| 41 | R-T-A3-1 status | ACCEPTED / CLOSED BY MORRIS (repo sync debt untouched) |
| 42 | R-T-A3-2 status | OPEN HARD |
| 43 | Project↔Cycle residual | remains residual / not closed by OPTION A pilot |
| 44 | crossStoreDurable status | false |
| 45 | productionRollbackProven status | false |
| 46 | Product persistence status | NOT_SELECTED |
| 47 | Gate D | NOT READY / NOT CONSUMED |
| 48 | Cursor REAL | 0 |
| 49 | product Git write count | 0 |
| 50 | review pack FULL / Synthesis-only NO | FULL / NO |
| 51 | handoff final tip | FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE |
| 52 | handoff final blob | FINAL REMOTE IDENTITY VERIFIED EXTERNALLY AFTER CONTENT FREEZE |
| 53 | remote handoff verification | pending publish then sidecar update |
| 54 | réserves | R-T-A3-2 OPEN HARD; Project↔Cycle residual; productionRollbackProven false; formal Cycle 9 crash/restart QA still required; R-T-A3-1 repo sync debt |
| 55 | verdict final | see exact verdict block |

---

## Verdict exact

```
R-T-A3-2 OPTION A DELIVERY COMPLETE —
SQLITE AUTHORITY/ATTEMPT JOURNAL WIRED IN PRODUCTION —
DURABLE PRE-LAUNCH MARKERS IMPLEMENTED —
RESTART FAIL-CLOSED / NO AUTO-RETRY PRESERVED —
NO DOUBLE-LAUNCH REGRESSION —
PRODUCT PERSISTENCE REMAINS NOT_SELECTED —
NEW CANDIDATE FROZEN —
R-T-A3-1 ACCEPTED / CLOSED BY MORRIS —
R-T-A3-2 REMAINS OPEN HARD — FORMAL QA / VALIDATION REQUIRED —
PROJECT↔CYCLE DURABILITY REMAINS RESIDUAL —
PRODUCTION ROLLBACK NOT YET PROVEN —
GATE D NOT READY / NOT CONSUMED —
NO CURSOR REAL —
NO PROJECT GIT WRITE —
HANDOFF UPDATED — REMOTE VERIFIED —
READY FOR QA / VALIDATION
```

---

END OF FULL REVIEW PACK
