# ChatGPT Review Pack — FULL
# M4 DELIVERY REAL-OFF

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-14 01:32:23 +0200 (CEST) |
| **Niveau** | FULL |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil** | Critical |
| **Typologie** | EVOL |
| **GO Morris** | **GO MORRIS — M4 DELIVERY REAL-OFF** (**consommé**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `.../sfia-studio-m4-real-off` |
| **Branch** | `delivery/sfia-studio-m4-real-off` |
| **HEAD** | `e974b7306f7400249c31399fd2890d5817833dbf` |
| **origin/main** | `e974b7306f7400249c31399fd2890d5817833dbf` |
| **Handoff source** | `45976b48f0ffd3cc49d81f82b0484164eeda5294` |
| **Architecture evidence** | `366726945f8f533d958c82b7251edb1a5a4b45f0` |
| **Project commit/push/PR** | **NONE** |
| **Cursor REAL** | **NOT ENTERED** (process count **0**) |
| **Flags** | `SFIA_STUDIO_CURSOR_REAL` unset · `OPS1_CURSOR_REAL` unset |

## Local Git Truth

| Check | Result |
|-------|--------|
| baseline | `e974b730…` PR #343 on main |
| remote delivery branch | ABSENT |
| existing PR | NONE |
| staged | empty |
| frozen zones | CLEAN (no convergence/method/ops1/package) |
| f3-real-prerequisites | STATUS_UNCHANGED (sha `97d82038a2b8d743ba7fb14c3b3b03bd87b46691cf85cc40400c607261ec3fbf`) · DIFF sha `d686a45cb228e0c43cd5c861d04524618fae839e6fd98d07ce1d93ed612a3915` |

**Baseline correction note:** explore agent briefly saw wrong M2 checkout; worktree was reset to `delivery/sfia-studio-m4-real-off` @ `e974b730` before implementation. Candidate dirty left intact.

## Decisions D-M4-01→05 alignment

| ID | Implementation |
|----|----------------|
| D-M4-01 | `ExecutionAdapterPort.externalEffects:false` KEEP; `InjectableExecutionAdapter` closed Test\|NoOp; separate `RealExecutionLaunchPort` (`externalEffects:true`) |
| D-M4-02 | `SqliteLaunchSafetyJournal` technical SQLite; CREATED/LAUNCHED; TEMPORARY WITH EXIT; ≠ Product Store |
| D-M4-03 | `createM4BoundedReadOnlyCursorAgentDescriptor` — `executionMode: cursor_cli_real`, trustLevel bounded, exact caps |
| D-M4-04 | Gate D grants + `atomicConsumeGrantAndCreateFrontier` before REAL launch |
| D-M4-05 | No Auth.js / Critical Ack promotion |

## Changed file inventory

### Modified
```
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/errors.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts

 .../app/__tests__/oa/execution-attempt/helpers.ts  |  49 +-
 .../application/startExecution.ts                  | 792 +++++++++++++++++----
 .../app/lib/oa/execution-attempt/domain/errors.ts  |  33 +
 .../app/lib/oa/execution-attempt/domain/types.ts   |  26 +-
 .../app/lib/oa/execution-attempt/index.ts          | 132 +++-
 .../app/lib/vertical-slice-runtime/service.ts      |   2 +
 6 files changed, 880 insertions(+), 154 deletions(-)

```

### Untracked (new)
```
projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffBoundary.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCrashReplay.test.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/grantRealExecutionGate.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeRealExecutionLaunchGateway.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedReadOnlyCursorAgent.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/memoryLaunchSafetyJournal.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteLaunchSafetyJournal.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqliteRealLaunchSafetyJournal.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
projects/sfia-studio/app/lib/oa/execution-attempt/ports/launchSafetyJournalPort.ts
projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
projects/sfia-studio/app/lib/oa/execution-attempt/ports/realLaunchSafetyJournalPort.ts
```

## Classification

| Asset | Class |
|-------|-------|
| Fixture ExecutionAdapterPort | KEEP |
| StartExecution fixture path | KEEP |
| StartExecution REAL branch | ADAPT |
| RealExecutionLaunchPort | COMPLETE (new) |
| Launch safety journal | HARVEST/ADAPT (concept) TEMPORARY WITH EXIT |
| Gate D GD-1 | COMPLETE (new) |
| M4 RO agent | ADAPT/COMPLETE |
| OPS1 primitives | HARVEST without runtime import |
| OPS1 UI/runtime | FREEZE (untouched) |
| Auth/Ack | DEFER / NOT PROMOTED |
| Evidence/LPS | DEFER M5 |

## REAL boundary

- Port: `ports/realExecutionLaunchPort.ts`
- Gateway: `infrastructure/studioCursorRealLaunchGateway.ts` (ProcessRunner injectable; default DisabledRealProcessRunner)
- Flag: `SFIA_STUDIO_CURSOR_REAL` — only `"1"` enables; default OFF
- Explicit rejection if OPS1_CURSOR_REAL=1 in test helper `assertRealOffEnv`
- No `@/lib/ops1` imports in execution-attempt module

## Journal schema (technical SQLite)

File: `infrastructure/sqlite/sqliteLaunchSafetyJournal.ts`
- Separate DB path injected
- Tables for grants + frontier records
- Atomic consume grant + INSERT CREATED
- markLaunched after realProcessInvoked ack
- Ambiguous frontier blocks new launch for same contract fingerprint (even new attemptId)

## Gate D

Use-case: `application/grantGateD.ts`
- Loads attempt+contract server-side
- Binding: contractId/version/fingerprint/attemptId/agentRef/actor/expiry
- Grant ≠ consume; StartExecution consumes with CREATED

## AgentCapability

`infrastructure/m4BoundedReadOnlyCursorAgent.ts`
- trustLevel bounded
- executionMode cursor_cli_real
- exact capabilities/actions/targets/scopes
- adapterRef = M4 REAL gateway id

## StartExecution sequencing (REAL)

validations → REAL agent detect → require journal+gateway → refuse ambiguous frontier → atomic GateD consume+CREATED → realLaunch → LAUNCHED → running → contract executing → confirmation consume
Fixture path unchanged when executionMode ≠ cursor_cli_real.

## Crash/replay (proven with doubles)

| Window | Behavior |
|--------|----------|
| CREATED before launch / crash | no relaunch; reconciliation required |
| invoked before LAUNCHED persist | no second launch |
| LAUNCHED + Attempt Memory lost | no relaunch on same fingerprint |
| REAL OFF | 0 runner calls; 0 fixture for REAL agent path |

## Proofs

| Proof | Result |
|-------|--------|
| fixture externalEffects:false | KEEP |
| REAL not InjectableExecutionAdapter | YES |
| no OA→ops1 import | YES |
| no REAL→fixture fallback | tested |
| CREATED before launch | tested |
| fingerprint frontier | tested |
| Gate D single consume | tested |
| REAL flag OFF in cycle | YES |
| realProcessInvoked live count | **0** |
| Product Store untouched | YES (separate technical DB) |

## Key source excerpts


### `projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts`

```ts
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
  readonly worktreeBaseHeadSha?: string;
  /** Server-derived workspace — never a free client command string. */
  readonly workspaceRoot?: string;
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

/**
 * Injectable process runner for tests — production gateway uses spawn(shell:false).
 * Tests MUST inject a fake; never spawn Cursor during REAL-OFF cycle.
 */
export interface ProcessRunner {
  invoke(input: {
    attemptId: string;
    cwd: string;
    argv: readonly string[];
    timeoutMs: number;
    env: NodeJS.ProcessEnv;
  }): Promise<{
    processRef: string;
    realProcessInvoked: boolean;
    observation?: Partial<RealProcessObservation>;
  }>;
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

```

### `projects/sfia-studio/app/lib/oa/execution-attempt/ports/launchSafetyJournalPort.ts`

```ts
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

```

### `projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts`

```ts
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

```

### `projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts`

```ts
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

```

### `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteLaunchSafetyJournal.ts`

```ts
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

```

### `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedReadOnlyCursorAgent.ts`

```ts
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

```


## Tests

### Targeted execution-attempt
```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app

 ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 19ms
 ✓ __tests__/oa/execution-attempt/attemptRepository.test.ts (33 tests) 123ms
 ✓ __tests__/oa/execution-attempt/m4RealOffCrashReplay.test.ts (1 test) 1017ms
   ✓ M4 REAL-OFF crash replay > restart with same journal path + new MemoryAttempt store refuses second launch  1015ms
 ✓ __tests__/oa/execution-attempt/qaAdversarialValidation.test.ts (12 tests) 1453ms
   ✓ QA RTA5-09 invariant — Contract executing requires persisted running > refuses executing when caller claims running but Attempt is only accepted  508ms
 ✓ __tests__/oa/execution-attempt/m4RealOffBoundary.test.ts (8 tests) 1406ms
   ✓ M4 REAL-OFF boundary > fixture regression still starts via TestExecutionAdapter  552ms
 ✓ __tests__/oa/execution-attempt/lifecycleFoundation.test.ts (24 tests) 1904ms
   ✓ T-A5 SelectExecutionAgent > persists accepted without launching an adapter  447ms

 Test Files  6 passed (6)
      Tests  97 passed (97)
   Start at  01:29:08
   Duration  11.86s (transform 5.01s, setup 2.53s, collect 46.87s, tests 5.92s, environment 1ms, prepare 1.59s)


```
**Result:** 97/97 passed

### Full npm test (summary)
```
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 16113ms
   ✓ V2-A2 Create Project UI > renders all fields, qualification warning, and runtime disclosures  658ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  8269ms
   ✓ V2-A2 Create Project UI > calls only the runtime action with the exact DTO and parsed constraints  1802ms
   ✓ V2-A2 Create Project UI > keeps the idempotency key stable across a retry  1366ms
   ✓ V2-A2 Create Project UI > disables submit and announces pending state  1188ms
   ✓ V2-A2 Create Project UI > maps runtime INPUT_INVALID to its UI field  966ms
   ✓ V2-A2 Create Project UI > shows DOCTRINE_UNRESOLVED as a blocking non-technical error  523ms
   ✓ V2-A2 Create Project UI > renders the real success projection inline and renews the key on reset  496ms
   ✓ V2-A2 Create Project UI > renders identical constraints twice without duplicate React key warnings  465ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 17176ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  3654ms
   ✓ ops1 I6 report + continuation > marks REPORT_INCOMPLETE when allowlisted path lacks coverage  761ms
   ✓ ops1 I6 report + continuation > COMPLETED impossible without mandatory coverage evidence  581ms
   ✓ ops1 I6 report + continuation > METRICS_INCOMPLETE when duration cannot be computed  730ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  3058ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  3060ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  2782ms
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  1942ms
   ✓ ops1 I6 report + continuation > migration I6 remains idempotent on existing store  311ms

 Test Files  169 passed | 13 skipped (182)
      Tests  1665 passed | 131 skipped (1796)
   Start at  01:29:39
   Duration  64.12s (transform 26.40s, setup 45.71s, collect 118.72s, tests 155.90s, environment 52.45s, prepare 49.46s)
```
**Result:** 1665 passed | 131 skipped

### typecheck
PASS (`tsc --noEmit`)

### lint
```

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors

```

### build
```
   Generating static pages (0/10) ...
   Generating static pages (2/10)
   Generating static pages (4/10)
   Generating static pages (7/10)
 ✓ Generating static pages (10/10)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                      127 B         103 kB
├ ○ /_not-found                            127 B         103 kB
├ ○ /cycle-actif                         3.82 kB         119 kB
├ ○ /decision                            5.53 kB         121 kB
├ ƒ /nouvelle-demande                    10.1 kB         116 kB
├ ○ /ops1/nouvelle-demande               18.9 kB         134 kB
├ ƒ /projects/[id]                       2.66 kB         108 kB
├ ○ /projects/new                        2.63 kB         108 kB
├ ƒ /studio/projects/[id]                8.36 kB         118 kB
├ ○ /studio/projects/new                 4.07 kB         114 kB
├ ○ /synthese                            4.84 kB         120 kB
└ ƒ /workspace                             571 B         106 kB
+ First Load JS shared by all             102 kB
  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.99 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

```

### git diff --check
PASS

## Security

shell:false · fixed argv · no user command string · path containment · timeout · stdout/stderr caps · argv redaction · REAL fail-closed · Gate D stale fail-closed · journal fail-closed · fingerprint binding

## Debts preserved

conversation/proposal/Confirmation process-local · Attempt Memory · Evidence Memory · Trajectory/Epistemic · LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT · Auth.js/IAM · Critical Ack N2/N3 · launch journal TEMPORARY WITH EXIT · OPS1/D1/execution-run disposition · DOC-DEBT-M1-01 · M5 Evidence→LPS · Nora post-exec

## M4/M5 boundary

M4: REAL boundary + journal + Gate D + RO agent + technical observation — **present**
M5: Evidence/ReviewBundle/LPS/Nora — **NOT ENTERED**

## Gates remaining

- Morris M4 Delivery validation
- Morris FIRST REAL GO (separate)
- Gate D production consumption (future REAL)
- Ack/Auth promotion (future N2/N3/IAM)
- M5

## Final status

```
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/errors.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffBoundary.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCrashReplay.test.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/application/grantRealExecutionGate.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeRealExecutionLaunchGateway.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedReadOnlyCursorAgent.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/memoryLaunchSafetyJournal.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqliteRealLaunchSafetyJournal.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/ports/launchSafetyJournalPort.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/ports/realLaunchSafetyJournalPort.ts

```

## Full useful diffs — modified files

```diff
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
index 42758a6..f0a8135 100644
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
@@ -53,6 +68,47 @@ import {
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
+    reason === "workspace_outside_exec_root"
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
@@ -66,6 +122,8 @@ export class StartExecution {
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
     private readonly store?: MemoryExecutionAttemptStore,
+    private readonly realLaunchPort?: RealExecutionLaunchPort,
+    private readonly safetyJournal?: RealLaunchSafetyJournalPort,
   ) {}

   async execute(
@@ -326,7 +384,22 @@ export class StartExecution {
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
@@ -383,158 +456,521 @@ export class StartExecution {
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
           executionContractId: contract.executionContractId,
         });
       }
+      if (message.includes("mismatch")) {
+        return fail("GATE_D_BINDING_MISMATCH", message, {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      if (message.includes("ambiguous") || message.includes("frontier")) {
+        return fail("LAUNCH_RECONCILIATION_REQUIRED", message, {
+          executionContractId: contract.executionContractId,
+        });
+      }
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
+        workspaceRoot: request.realWorkspaceRoot,
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
@@ -625,6 +1061,96 @@ export class StartExecution {
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
index d571f32..417f1b1 100644
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
@@ -177,6 +179,11 @@ export type StartExecutionRequest = {
   /** Hostile — ignored, never trusted. */
   claimedAuthorityLevel?: string;
   nowIso?: string;
+  /**
+   * Server-derived workspace root for REAL launch only.
+   * Never a free client command string; ignored on fixture adapter path.
+   */
+  realWorkspaceRoot?: string;
 };

 export type CancelExecutionAttemptRequest = {
@@ -329,7 +336,22 @@ export type AttemptDetailCode =
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
index 35bc217..31b3a50 100644
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
@@ -26,9 +27,9 @@
  * Exported surface:
  * - domain types / errors / invariants (including the agent_selection
  *   Confirmation binding helpers);
- * - ports (repository, registry, adapter, audit);
+ * - ports (repository, registry, adapter, audit, REAL launch + journal);
  * - use-cases (Select, Start, Cancel, RecordResult, RecordFailure, Retry,
- *   TriggerTimeout, Get, List, CheckAttemptAuthorization);
+ *   TriggerTimeout, Get, List, CheckAttemptAuthorization, GrantRealExecutionGate);
  * - memory infrastructure and the two fake adapters;
  * - closed factories `createInMemoryExecutionAttemptServices` and
  *   `createTestExecutionAttemptServices`.
@@ -40,14 +41,26 @@
 export * from "./domain/types";
 export * from "./domain/errors";
 export * from "./domain/invariants";
+export * from "./domain/realLaunchSafety";

 export * from "./ports/executionAttemptRepository";
 export * from "./ports/agentRegistry";
 export * from "./ports/executionAdapter";
 export * from "./ports/executionAttemptAudit";
+export * from "./ports/realExecutionLaunchPort";
+export * from "./ports/realLaunchSafetyJournalPort";
+// launchSafetyJournalPort is a thin re-export — avoid duplicate export * conflict.

 export { SelectExecutionAgent } from "./application/selectExecutionAgent";
 export { StartExecution } from "./application/startExecution";
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
@@ -82,6 +95,35 @@ export {
   ConsoleExecutionAttemptAuditJournal,
   MemoryExecutionAttemptAuditJournal,
 } from "./infrastructure/observability";
+export {
+  CursorCliLaunchGateway,
+  StudioCursorRealLaunchGateway,
+  DisabledRealProcessRunner,
+  FakeRealProcessRunner,
+  FakeProcessRunner,
+  resolveStudioCursorBinPath,
+  resolveCursorBinPath,
+  type CursorCliLaunchGatewayOptions,
+  type StudioCursorRealLaunchGatewayOptions,
+} from "./infrastructure/cursorCliLaunchGateway";
+export {
+  SqliteRealLaunchSafetyJournal,
+  SqliteLaunchSafetyJournal,
+  type SqliteRealLaunchSafetyJournalOptions,
+  type SqliteLaunchSafetyJournalOptions,
+} from "./infrastructure/sqliteRealLaunchSafetyJournal";
+export { MemoryLaunchSafetyJournal } from "./infrastructure/memoryLaunchSafetyJournal";
+export { FakeRealExecutionLaunchGateway } from "./infrastructure/fakeRealExecutionLaunchGateway";
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
@@ -93,6 +135,7 @@ import { CancelExecutionAttempt } from "./application/cancelExecutionAttempt";
 import { CheckAttemptAuthorization } from "./application/checkAttemptAuthorization";
 import { ExecutionContractStatusWriter } from "./application/executionContractStatusWriter";
 import { GetExecutionAttempt } from "./application/getExecutionAttempt";
+import { GrantRealExecutionGate } from "./application/grantRealExecutionGate";
 import { ListExecutionAttempts } from "./application/listExecutionAttempts";
 import { RecordExecutionFailure } from "./application/recordExecutionFailure";
 import { RecordExecutionResult } from "./application/recordExecutionResult";
@@ -109,14 +152,24 @@ import {
   MemoryExecutionAttemptAuditJournal,
 } from "./infrastructure/observability";
 import { TestExecutionAdapter } from "./infrastructure/testExecutionAdapter";
+import {
+  CursorCliLaunchGateway,
+  FakeRealProcessRunner,
+} from "./infrastructure/cursorCliLaunchGateway";
+import { SqliteRealLaunchSafetyJournal } from "./infrastructure/sqliteRealLaunchSafetyJournal";
 import type { AgentDescriptor } from "./domain/types";
 import type { AgentRegistryPort } from "./ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "./ports/executionAttemptAudit";
+import type {
+  ProcessRunner,
+  RealExecutionLaunchPort,
+} from "./ports/realExecutionLaunchPort";
+import type { RealLaunchSafetyJournalPort } from "./ports/realLaunchSafetyJournalPort";

 /**
  * Closed union of injectable adapters. An arbitrary object implementing
  * `ExecutionAdapterPort` is NOT accepted by the factories: only these two
- * fakes exist in this foundation.
+ * fakes exist in this foundation. CursorCliLaunchGateway is NEVER injectable.
  */
 export type InjectableExecutionAdapter =
   | TestExecutionAdapter
@@ -131,6 +184,11 @@ export function isInjectableExecutionAdapter(
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
@@ -149,6 +207,13 @@ export type ExecutionAttemptServices = {
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
@@ -164,8 +229,41 @@ export type CreateInMemoryExecutionAttemptServicesOptions = {
   policy?: Partial<AttemptPolicy>;
   /** Defaults to decisionServices.authority (T-A3 AuthorityResolverPort). */
   authorityResolver?: AuthorityResolverPort;
+  /**
+   * Optional M4 REAL boundary (journal + specialized launch port).
+   * Does NOT enable SFIA_STUDIO_CURSOR_REAL; default product wire stays REAL-OFF.
+   */
+  realBoundary?: RealBoundaryWiring;
+  /** Flat aliases accepted by tests — same as realBoundary. */
+  launchSafetyJournal?: RealLaunchSafetyJournalPort;
+  realLaunch?: RealExecutionLaunchPort;
+  realWorkspaceRoot?: string;
 };

+/**
+ * Composition helper for tests / explicit opt-in wiring.
+ * Default product `wireOaStack` does NOT call this — REAL stays OFF.
+ */
+export function createM4RealOffBoundaryHelpers(options: {
+  readonly databasePath: string;
+  readonly processRunner?: ProcessRunner;
+  readonly env?: NodeJS.ProcessEnv;
+  readonly resolveCursorBin?: () => string | null;
+}): RealBoundaryWiring & {
+  safetyJournal: SqliteRealLaunchSafetyJournal;
+  launchPort: CursorCliLaunchGateway;
+} {
+  const safetyJournal = new SqliteRealLaunchSafetyJournal({
+    databasePath: options.databasePath,
+  });
+  const launchPort = new CursorCliLaunchGateway({
+    processRunner: options.processRunner ?? new FakeRealProcessRunner(),
+    env: options.env,
+    resolveCursorBin: options.resolveCursorBin,
+  });
+  return { safetyJournal, launchPort };
+}
+
 /** Factory for the in-memory ExecutionAttempt runtime foundation. */
 export function createInMemoryExecutionAttemptServices(
   options: CreateInMemoryExecutionAttemptServicesOptions,
@@ -210,6 +308,25 @@ export function createInMemoryExecutionAttemptServices(
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
@@ -231,6 +348,8 @@ export function createInMemoryExecutionAttemptServices(
       clock,
       audit,
       store,
+      realBoundary?.launchPort,
+      realBoundary?.safetyJournal,
     ),
     cancelExecutionAttempt: new CancelExecutionAttempt(
       attempts,
@@ -291,6 +410,11 @@ export function createInMemoryExecutionAttemptServices(
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
index 3eb54c3..27151c4 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -172,6 +172,8 @@ function wireOaStack(
       });

   // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
+  // M4 REAL-OFF default: do NOT wire realBoundary / SFIA_STUDIO_CURSOR_REAL here.
+  // Opt-in composition uses createM4RealOffBoundaryHelpers from execution-attempt.
   const fixtureAdapter = createF3TestExecutionAdapter();
   const fixtureAgent = createF3FixtureAgentDescriptor(clock.nowIso());
   const executionAttemptServices = createInMemoryExecutionAttemptServices({

```

## Full useful diffs — new files

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffBoundary.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffBoundary.test.ts
new file mode 100644
index 0000000..08af4c9
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffBoundary.test.ts
@@ -0,0 +1,540 @@
+/**
+ * M4 Delivery REAL-OFF — Gate D / CREATED / specialized launch boundary.
+ * @vitest-environment node
+ */
+import { readdirSync, readFileSync, mkdtempSync } from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import {
+  assertStudioCursorRealOffForTests,
+  createM4BoundedReadOnlyCursorAgentDescriptor,
+  createM4RealOffBoundaryHelpers,
+  createTestExecutionAttemptServices,
+  CursorCliLaunchGateway,
+  FakeRealProcessRunner,
+  isInjectableExecutionAdapter,
+  isStudioCursorRealEnabled,
+  M4_BOUNDED_RO_ACTION,
+  M4_BOUNDED_RO_CAPABILITY,
+  M4_BOUNDED_RO_SCOPE,
+  M4_BOUNDED_RO_TARGET,
+  M4_BOUNDED_RO_CURSOR_AGENT_ID,
+  SqliteRealLaunchSafetyJournal,
+  TestExecutionAdapter,
+  type RealLaunchSafetyJournalPort,
+} from "@/lib/oa/execution-attempt";
+import { computeExecutionContractSemanticFingerprint } from "@/lib/oa/execution-contract";
+import {
+  MORRIS_ACTOR,
+  NOW,
+  baseBuildRequest,
+  buildStack,
+  grantContractConfirmation,
+  registerMorris,
+  seedAcceptedDecision,
+  seedProject,
+  seedStandardCycle,
+  selectStandardAgent,
+  seedRunningAttempt,
+  type Stack,
+} from "./helpers";
+
+const APP_LIB_OA = path.resolve(__dirname, "../../../lib/oa");
+const M4_EVIDENCE = "evd:morris-n3";
+
+function tempJournalPath(prefix: string): string {
+  const dir = mkdtempSync(path.join(os.tmpdir(), prefix));
+  return path.join(dir, "m4-safety.sqlite");
+}
+
+function scanForOps1Imports(root: string): string[] {
+  const hits: string[] = [];
+  const walk = (dir: string) => {
+    for (const ent of readdirSync(dir, { withFileTypes: true })) {
+      const full = path.join(dir, ent.name);
+      if (ent.isDirectory()) {
+        walk(full);
+        continue;
+      }
+      if (!/\.(ts|tsx|js|mjs|cjs)$/.test(ent.name)) continue;
+      const text = readFileSync(full, "utf8");
+      if (
+        text.includes("@/lib/ops1") ||
+        text.includes('from "@/lib/ops1') ||
+        text.includes("from '@/lib/ops1") ||
+        /from\s+["'].*\/lib\/ops1/.test(text)
+      ) {
+        hits.push(path.relative(root, full));
+      }
+    }
+  };
+  walk(root);
+  return hits;
+}
+
+/** Confirmed M4 contract — registers Morris on M4 scope only (no evidence clash). */
+async function seedM4ConfirmedContract(
+  stack: Stack,
+  overrides: { executionContractId?: string; idempotencyKey?: string } = {},
+): Promise<{ contractId: string; version: number }> {
+  await seedProject(stack.projects);
+  registerMorris(stack.decisions.authority, M4_BOUNDED_RO_SCOPE, M4_EVIDENCE);
+  await seedAcceptedDecision(stack);
+  await seedStandardCycle(stack);
+
+  const built = await stack.execution.buildExecutionContract.execute(
+    baseBuildRequest({
+      cycleInstanceId: "cyc:std-001",
+      executionContractId: overrides.executionContractId ?? "xct:oa-001",
+      idempotencyKey: overrides.idempotencyKey ?? "idem-xct-oa-001",
+      action: M4_BOUNDED_RO_ACTION,
+      target: M4_BOUNDED_RO_TARGET,
+      scope: M4_BOUNDED_RO_SCOPE,
+      requiredCapabilities: [M4_BOUNDED_RO_CAPABILITY],
+      authorityEvidenceId: M4_EVIDENCE,
+    }),
+  );
+  expect(built.ok).toBe(true);
+  if (!built.ok) throw new Error("build failed");
+
+  const validated = await stack.execution.validateExecutionContract.execute({
+    executionContractId: built.contract.executionContractId,
+    actor: MORRIS_ACTOR,
+    authorityEvidenceId: M4_EVIDENCE,
+  });
+  expect(validated.ok).toBe(true);
+  if (!validated.ok) throw new Error("validate failed");
+
+  const confirmationId = await grantContractConfirmation(stack, {
+    scope: M4_BOUNDED_RO_SCOPE,
+    evidenceId: M4_EVIDENCE,
+  });
+  const confirmed = await stack.execution.confirmExecutionContract.execute({
+    executionContractId: validated.contract.executionContractId,
+    confirmationId,
+    actor: MORRIS_ACTOR,
+    authorityEvidenceId: M4_EVIDENCE,
+    expectedVersion: validated.contract.version,
+  });
+  expect(confirmed.ok).toBe(true);
+  if (!confirmed.ok) throw new Error("confirm failed");
+
+  return {
+    contractId: confirmed.contract.executionContractId,
+    version: confirmed.contract.version,
+  };
+}
+
+function wireM4Stack(input: {
+  journalPath: string;
+  runner?: FakeRealProcessRunner;
+  envOverride?: boolean;
+  journal?: RealLaunchSafetyJournalPort;
+}) {
+  const runner = input.runner ?? new FakeRealProcessRunner();
+  const fixtureAdapter = new TestExecutionAdapter();
+  const ownedJournal =
+    input.journal == null
+      ? new SqliteRealLaunchSafetyJournal({ databasePath: input.journalPath })
+      : null;
+  const safetyJournal = input.journal ?? ownedJournal!;
+  const launchPort = new CursorCliLaunchGateway({
+    processRunner: runner,
+    env: input.envOverride
+      ? { ...process.env, SFIA_STUDIO_CURSOR_REAL: "1" }
+      : process.env,
+    resolveCursorBin: () => "/tmp/fake-cursor-bin",
+  });
+  const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
+  const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
+  const attempts = createTestExecutionAttemptServices({
+    decisionServices: stack.decisions,
+    executionContractServices: stack.execution,
+    agents: [m4Agent],
+    adapter: fixtureAdapter,
+    realBoundary: { launchPort, safetyJournal },
+    fixedNowIso: NOW,
+  });
+  stack.attempts = attempts as typeof stack.attempts;
+  return {
+    stack,
+    runner,
+    fixtureAdapter,
+    safetyJournal,
+    close: () => {
+      ownedJournal?.close();
+    },
+  };
+}
+
+describe("M4 REAL-OFF boundary", () => {
+  beforeEach(() => {
+    assertStudioCursorRealOffForTests();
+    expect(isStudioCursorRealEnabled()).toBe(false);
+    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
+    expect(process.env.OPS1_CURSOR_REAL).not.toBe("1");
+  });
+
+  afterEach(() => {
+    assertStudioCursorRealOffForTests();
+  });
+
+  it("fixture regression still starts via TestExecutionAdapter", async () => {
+    const stack = buildStack();
+    const { attemptId } = await seedRunningAttempt(stack);
+    const attempt = await stack.attempts.attempts.findById(attemptId);
+    expect(attempt?.status).toBe("running");
+    expect(
+      (stack.adapter as TestExecutionAdapter).calls.filter(
+        (c) => c.kind === "launch",
+      ).length,
+    ).toBeGreaterThanOrEqual(1);
+  });
+
+  it("rejects CursorCliLaunchGateway as InjectableExecutionAdapter", () => {
+    const gateway = new CursorCliLaunchGateway({
+      processRunner: new FakeRealProcessRunner(),
+    });
+    expect(isInjectableExecutionAdapter(gateway)).toBe(false);
+    expect(() =>
+      createTestExecutionAttemptServices({
+        // @ts-expect-error intentional hostile inject
+        adapter: gateway,
+        decisionServices: {} as never,
+        executionContractServices: {} as never,
+      }),
+    ).toThrow(/adapter_not_allowed/);
+  });
+
+  it("static scan: no ops1 imports under oa execution-attempt", () => {
+    const hits = scanForOps1Imports(
+      path.join(APP_LIB_OA, "execution-attempt"),
+    );
+    expect(hits).toEqual([]);
+  });
+
+  it("Gate D grant then start: CREATED is journaled before fake launch invoke", async () => {
+    const journalPath = tempJournalPath("m4-created-before-");
+    const journal = new SqliteRealLaunchSafetyJournal({
+      databasePath: journalPath,
+    });
+    const runner = new FakeRealProcessRunner();
+    const checkingRunner = {
+      calls: runner.calls,
+      async invoke(input: {
+        attemptId: string;
+        cwd: string;
+        argv: readonly string[];
+        timeoutMs: number;
+        env: NodeJS.ProcessEnv;
+      }) {
+        const frontier = await journal.findFrontierByAttempt(input.attemptId);
+        expect(frontier.some((r) => r.kind === "CREATED")).toBe(true);
+        expect(frontier.some((r) => r.kind === "LAUNCHED")).toBe(false);
+        return runner.invoke(input);
+      },
+    };
+    const launchPort = new CursorCliLaunchGateway({
+      processRunner: checkingRunner,
+      env: { ...process.env, SFIA_STUDIO_CURSOR_REAL: "1" },
+      resolveCursorBin: () => "/tmp/fake-cursor-bin",
+    });
+    const fixtureAdapter = new TestExecutionAdapter();
+    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
+    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
+    const attempts = createTestExecutionAttemptServices({
+      decisionServices: stack.decisions,
+      executionContractServices: stack.execution,
+      agents: [m4Agent],
+      adapter: fixtureAdapter,
+      realBoundary: { launchPort, safetyJournal: journal },
+      fixedNowIso: NOW,
+    });
+    stack.attempts = attempts as typeof stack.attempts;
+
+    const { contractId, version } = await seedM4ConfirmedContract(stack);
+    const selected = await selectStandardAgent(stack, {
+      attemptId: "xat:m4-001",
+      executionContractId: contractId,
+      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
+    });
+    expect(selected.ok).toBe(true);
+
+    expect(stack.attempts.grantRealExecutionGate).toBeDefined();
+    const granted = await stack.attempts.grantRealExecutionGate!.execute({
+      grantId: "gd:m4-001",
+      attemptId: "xat:m4-001",
+      actor: MORRIS_ACTOR,
+      expiresAt: "2026-07-25T07:00:00.000Z",
+      authorityEvidenceId: M4_EVIDENCE,
+    });
+    expect(granted.ok).toBe(true);
+
+    const started = await stack.attempts.startExecution.execute({
+      attemptId: "xat:m4-001",
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: M4_EVIDENCE,
+      realWorkspaceRoot: os.tmpdir(),
+      expectedContractVersion: version,
+    });
+    expect(started.ok).toBe(true);
+    if (!started.ok) return;
+    expect(started.attempt.status).toBe("running");
+    expect(runner.calls).toHaveLength(1);
+    expect(
+      fixtureAdapter.calls.filter((c) => c.kind === "launch"),
+    ).toHaveLength(0);
+
+    const frontier = await journal.findFrontierByAttempt("xat:m4-001");
+    expect(frontier.map((r) => r.kind).sort()).toEqual(["CREATED", "LAUNCHED"]);
+    journal.close();
+  });
+
+  it("REAL flag OFF → reject; runner and fixture calls stay 0", async () => {
+    const journalPath = tempJournalPath("m4-flag-off-");
+    const runner = new FakeRealProcessRunner();
+    const boundary = createM4RealOffBoundaryHelpers({
+      databasePath: journalPath,
+      processRunner: runner,
+      resolveCursorBin: () => "/tmp/fake-cursor-bin",
+    });
+    const fixtureAdapter = new TestExecutionAdapter();
+    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
+    const stack = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
+    const attempts = createTestExecutionAttemptServices({
+      decisionServices: stack.decisions,
+      executionContractServices: stack.execution,
+      agents: [m4Agent],
+      adapter: fixtureAdapter,
+      realBoundary: boundary,
+      fixedNowIso: NOW,
+    });
+    stack.attempts = attempts as typeof stack.attempts;
+
+    const { contractId } = await seedM4ConfirmedContract(stack);
+    const selected = await selectStandardAgent(stack, {
+      attemptId: "xat:m4-off",
+      executionContractId: contractId,
+      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
+    });
+    expect(selected.ok).toBe(true);
+
+    const granted = await stack.attempts.grantRealExecutionGate!.execute({
+      grantId: "gd:m4-off",
+      attemptId: "xat:m4-off",
+      actor: MORRIS_ACTOR,
+      expiresAt: "2026-07-25T07:00:00.000Z",
+      authorityEvidenceId: M4_EVIDENCE,
+    });
+    expect(granted.ok).toBe(true);
+
+    const started = await stack.attempts.startExecution.execute({
+      attemptId: "xat:m4-off",
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: M4_EVIDENCE,
+      realWorkspaceRoot: os.tmpdir(),
+    });
+    expect(started.ok).toBe(false);
+    if (!started.ok) {
+      expect(started.error.detailCode).toBe("REAL_BOUNDARY_DISABLED");
+    }
+    expect(runner.calls).toHaveLength(0);
+    expect(
+      fixtureAdapter.calls.filter((c) => c.kind === "launch"),
+    ).toHaveLength(0);
+    boundary.safetyJournal.close();
+  });
+
+  it("CREATED then crash before launch → retry LAUNCH_RECONCILIATION_REQUIRED", async () => {
+    const journalPath = tempJournalPath("m4-created-crash-");
+    const runner = new FakeRealProcessRunner();
+    const ctx = wireM4Stack({ journalPath, runner, envOverride: true });
+
+    const { contractId } = await seedM4ConfirmedContract(ctx.stack);
+    const selected = await selectStandardAgent(ctx.stack, {
+      attemptId: "xat:m4-created",
+      executionContractId: contractId,
+      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
+    });
+    expect(selected.ok).toBe(true);
+    if (!selected.ok) return;
+
+    const granted = await ctx.stack.attempts.grantRealExecutionGate!.execute({
+      grantId: "gd:m4-created",
+      attemptId: "xat:m4-created",
+      actor: MORRIS_ACTOR,
+      expiresAt: "2026-07-25T07:00:00.000Z",
+      authorityEvidenceId: M4_EVIDENCE,
+    });
+    expect(granted.ok).toBe(true);
+    if (!granted.ok) return;
+
+    const contract = await ctx.stack.execution.contracts.findById(contractId);
+    expect(contract).not.toBeNull();
+    const fingerprint =
+      contract!.semanticFingerprint ??
+      computeExecutionContractSemanticFingerprint(contract!);
+
+    await ctx.safetyJournal.consumeGateDAndAppendCreated({
+      grantId: granted.grant.grantId,
+      attemptId: "xat:m4-created",
+      occurredAt: NOW,
+      identity: {
+        executionContractId: contractId,
+        executionContractVersion: contract!.version,
+        semanticFingerprint: fingerprint,
+      },
+      selectedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
+      actorId: MORRIS_ACTOR.actorId,
+      correlationId: "cor:crash-created",
+    });
+    expect(runner.calls).toHaveLength(0);
+
+    const retry = await ctx.stack.attempts.startExecution.execute({
+      attemptId: "xat:m4-created",
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: M4_EVIDENCE,
+      realWorkspaceRoot: os.tmpdir(),
+    });
+    expect(retry.ok).toBe(false);
+    if (!retry.ok) {
+      expect(retry.error.detailCode).toBe("LAUNCH_RECONCILIATION_REQUIRED");
+    }
+    expect(runner.calls).toHaveLength(0);
+    expect(
+      ctx.fixtureAdapter.calls.filter((c) => c.kind === "launch"),
+    ).toHaveLength(0);
+    ctx.close();
+  });
+
+  it("spawn ack then fail before LAUNCHED → no second launch on retry", async () => {
+    const journalPath = tempJournalPath("m4-launched-fail-");
+    const runner = new FakeRealProcessRunner();
+    const baseJournal = new SqliteRealLaunchSafetyJournal({
+      databasePath: journalPath,
+    });
+    let failAppend = true;
+    const journal: RealLaunchSafetyJournalPort = {
+      persistGateDGrant: (i) => baseJournal.persistGateDGrant(i),
+      findGateDGrant: (id) => baseJournal.findGateDGrant(id),
+      findActiveGateDGrantForAttempt: (id) =>
+        baseJournal.findActiveGateDGrantForAttempt(id),
+      consumeGateDAndAppendCreated: (i) =>
+        baseJournal.consumeGateDAndAppendCreated(i),
+      appendLaunched: async (i) => {
+        if (failAppend) {
+          failAppend = false;
+          throw new Error("simulated_crash_before_launched");
+        }
+        return baseJournal.appendLaunched(i);
+      },
+      findFrontierByAttempt: (id) => baseJournal.findFrontierByAttempt(id),
+      findFrontierByIdentity: (id) => baseJournal.findFrontierByIdentity(id),
+      hasAmbiguousFrontier: (id) => baseJournal.hasAmbiguousFrontier(id),
+      reconcileDispositionForIdentity: (id) =>
+        baseJournal.reconcileDispositionForIdentity(id),
+      hasKindForAttempt: (id, k) => baseJournal.hasKindForAttempt(id, k),
+    };
+    const ctx = wireM4Stack({
+      journalPath,
+      runner,
+      envOverride: true,
+      journal,
+    });
+
+    const { contractId } = await seedM4ConfirmedContract(ctx.stack);
+    const selected = await selectStandardAgent(ctx.stack, {
+      attemptId: "xat:m4-ack-fail",
+      executionContractId: contractId,
+      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
+    });
+    expect(selected.ok).toBe(true);
+
+    const granted = await ctx.stack.attempts.grantRealExecutionGate!.execute({
+      grantId: "gd:m4-ack-fail",
+      attemptId: "xat:m4-ack-fail",
+      actor: MORRIS_ACTOR,
+      expiresAt: "2026-07-25T07:00:00.000Z",
+      authorityEvidenceId: M4_EVIDENCE,
+    });
+    expect(granted.ok).toBe(true);
+
+    const first = await ctx.stack.attempts.startExecution.execute({
+      attemptId: "xat:m4-ack-fail",
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: M4_EVIDENCE,
+      realWorkspaceRoot: os.tmpdir(),
+    });
+    expect(first.ok).toBe(false);
+    if (!first.ok) {
+      expect(first.error.detailCode).toBe("LAUNCH_RECONCILIATION_REQUIRED");
+    }
+    expect(runner.calls).toHaveLength(1);
+    const frontier = await baseJournal.findFrontierByAttempt("xat:m4-ack-fail");
+    expect(frontier.some((r) => r.kind === "CREATED")).toBe(true);
+    expect(frontier.some((r) => r.kind === "LAUNCHED")).toBe(false);
+
+    const retry = await ctx.stack.attempts.startExecution.execute({
+      attemptId: "xat:m4-ack-fail",
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: M4_EVIDENCE,
+      realWorkspaceRoot: os.tmpdir(),
+    });
+    expect(retry.ok).toBe(false);
+    if (!retry.ok) {
+      expect(retry.error.detailCode).toBe("LAUNCH_RECONCILIATION_REQUIRED");
+    }
+    expect(runner.calls).toHaveLength(1);
+    baseJournal.close();
+  });
+
+  it("new attemptId with same fingerprint is blocked by ambiguous frontier", async () => {
+    const journalPath = tempJournalPath("m4-ambig-");
+    const runner = new FakeRealProcessRunner();
+    const ctx = wireM4Stack({ journalPath, runner, envOverride: true });
+
+    const { contractId } = await seedM4ConfirmedContract(ctx.stack);
+    const selected = await selectStandardAgent(ctx.stack, {
+      attemptId: "xat:m4-a1",
+      executionContractId: contractId,
+      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
+    });
+    expect(selected.ok).toBe(true);
+
+    const granted = await ctx.stack.attempts.grantRealExecutionGate!.execute({
+      grantId: "gd:m4-a1",
+      attemptId: "xat:m4-a1",
+      actor: MORRIS_ACTOR,
+      expiresAt: "2026-07-25T07:00:00.000Z",
+      authorityEvidenceId: M4_EVIDENCE,
+    });
+    expect(granted.ok).toBe(true);
+
+    const started = await ctx.stack.attempts.startExecution.execute({
+      attemptId: "xat:m4-a1",
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: M4_EVIDENCE,
+      realWorkspaceRoot: os.tmpdir(),
+    });
+    expect(started.ok).toBe(true);
+    expect(runner.calls).toHaveLength(1);
+
+    // Contract is executing — cannot Select a second attempt. Prove ambiguity via journal
+    // identity from the durable LAUNCHED row (same fingerprint blocks any new CREATED).
+    const frontier = await ctx.safetyJournal.findFrontierByAttempt("xat:m4-a1");
+    expect(frontier.some((r) => r.kind === "LAUNCHED")).toBe(true);
+    const launched = frontier.find((r) => r.kind === "LAUNCHED")!;
+    const identity = {
+      executionContractId: launched.executionContractId,
+      executionContractVersion: launched.executionContractVersion,
+      semanticFingerprint: launched.semanticFingerprint,
+    };
+    expect(await ctx.safetyJournal.hasAmbiguousFrontier(identity)).toBe(true);
+    expect(
+      await ctx.safetyJournal.reconcileDispositionForIdentity(identity),
+    ).toBe("REVIEW_REQUIRED");
+    expect(runner.calls).toHaveLength(1);
+    ctx.close();
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCrashReplay.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCrashReplay.test.ts
new file mode 100644
index 0000000..1babbc3
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCrashReplay.test.ts
@@ -0,0 +1,247 @@
+/**
+ * M4 REAL-OFF crash replay — durable journal across process restart.
+ * @vitest-environment node
+ */
+import { mkdtempSync } from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { beforeEach, describe, expect, it } from "vitest";
+import {
+  assertStudioCursorRealOffForTests,
+  createM4BoundedReadOnlyCursorAgentDescriptor,
+  createTestExecutionAttemptServices,
+  CursorCliLaunchGateway,
+  FakeRealProcessRunner,
+  M4_BOUNDED_RO_ACTION,
+  M4_BOUNDED_RO_CAPABILITY,
+  M4_BOUNDED_RO_CURSOR_AGENT_ID,
+  M4_BOUNDED_RO_SCOPE,
+  M4_BOUNDED_RO_TARGET,
+  SqliteRealLaunchSafetyJournal,
+  TestExecutionAdapter,
+  type RealLaunchSafetyJournalPort,
+} from "@/lib/oa/execution-attempt";
+import {
+  MORRIS_ACTOR,
+  NOW,
+  baseBuildRequest,
+  buildStack,
+  grantContractConfirmation,
+  registerMorris,
+  seedAcceptedDecision,
+  seedProject,
+  seedStandardCycle,
+  selectStandardAgent,
+  type Stack,
+} from "./helpers";
+
+const M4_EVIDENCE = "evd:morris-n3";
+
+function tempJournalPath(prefix: string): string {
+  const dir = mkdtempSync(path.join(os.tmpdir(), prefix));
+  return path.join(dir, "m4-safety.sqlite");
+}
+
+async function seedM4ConfirmedContract(
+  stack: Stack,
+  overrides: { executionContractId?: string; idempotencyKey?: string } = {},
+): Promise<{ contractId: string; version: number }> {
+  await seedProject(stack.projects);
+  registerMorris(stack.decisions.authority, M4_BOUNDED_RO_SCOPE, M4_EVIDENCE);
+  await seedAcceptedDecision(stack);
+  await seedStandardCycle(stack);
+
+  const built = await stack.execution.buildExecutionContract.execute(
+    baseBuildRequest({
+      cycleInstanceId: "cyc:std-001",
+      executionContractId: overrides.executionContractId ?? "xct:oa-001",
+      idempotencyKey: overrides.idempotencyKey ?? "idem-xct-oa-001",
+      action: M4_BOUNDED_RO_ACTION,
+      target: M4_BOUNDED_RO_TARGET,
+      scope: M4_BOUNDED_RO_SCOPE,
+      requiredCapabilities: [M4_BOUNDED_RO_CAPABILITY],
+      authorityEvidenceId: M4_EVIDENCE,
+    }),
+  );
+  expect(built.ok).toBe(true);
+  if (!built.ok) throw new Error("build failed");
+
+  const validated = await stack.execution.validateExecutionContract.execute({
+    executionContractId: built.contract.executionContractId,
+    actor: MORRIS_ACTOR,
+    authorityEvidenceId: M4_EVIDENCE,
+  });
+  expect(validated.ok).toBe(true);
+  if (!validated.ok) throw new Error("validate failed");
+
+  const confirmationId = await grantContractConfirmation(stack, {
+    scope: M4_BOUNDED_RO_SCOPE,
+    evidenceId: M4_EVIDENCE,
+  });
+  const confirmed = await stack.execution.confirmExecutionContract.execute({
+    executionContractId: validated.contract.executionContractId,
+    confirmationId,
+    actor: MORRIS_ACTOR,
+    authorityEvidenceId: M4_EVIDENCE,
+    expectedVersion: validated.contract.version,
+  });
+  expect(confirmed.ok).toBe(true);
+  if (!confirmed.ok) throw new Error("confirm failed");
+
+  return {
+    contractId: confirmed.contract.executionContractId,
+    version: confirmed.contract.version,
+  };
+}
+
+describe("M4 REAL-OFF crash replay", () => {
+  beforeEach(() => {
+    assertStudioCursorRealOffForTests();
+  });
+
+  it("restart with same journal path + new MemoryAttempt store refuses second launch", async () => {
+    const journalPath = tempJournalPath("m4-replay-");
+    const runner = new FakeRealProcessRunner();
+    const fixtureAdapter = new TestExecutionAdapter();
+
+    // --- Process 1: ack then crash before LAUNCHED ---
+    const journal1 = new SqliteRealLaunchSafetyJournal({
+      databasePath: journalPath,
+    });
+    let failAppend = true;
+    const wrappingJournal = (
+      base: SqliteRealLaunchSafetyJournal,
+    ): RealLaunchSafetyJournalPort => ({
+      persistGateDGrant: (i) => base.persistGateDGrant(i),
+      findGateDGrant: (id) => base.findGateDGrant(id),
+      findActiveGateDGrantForAttempt: (id) =>
+        base.findActiveGateDGrantForAttempt(id),
+      consumeGateDAndAppendCreated: (i) =>
+        base.consumeGateDAndAppendCreated(i),
+      appendLaunched: async (i) => {
+        if (failAppend) {
+          failAppend = false;
+          throw new Error("process1_crash_before_launched");
+        }
+        return base.appendLaunched(i);
+      },
+      findFrontierByAttempt: (id) => base.findFrontierByAttempt(id),
+      findFrontierByIdentity: (id) => base.findFrontierByIdentity(id),
+      hasAmbiguousFrontier: (id) => base.hasAmbiguousFrontier(id),
+      reconcileDispositionForIdentity: (id) =>
+        base.reconcileDispositionForIdentity(id),
+      hasKindForAttempt: (id, k) => base.hasKindForAttempt(id, k),
+    });
+
+    const launchPort1 = new CursorCliLaunchGateway({
+      processRunner: runner,
+      env: { ...process.env, SFIA_STUDIO_CURSOR_REAL: "1" },
+      resolveCursorBin: () => "/tmp/fake-cursor-bin",
+    });
+    const m4Agent = createM4BoundedReadOnlyCursorAgentDescriptor(NOW);
+    const stack1 = buildStack({ agents: [m4Agent], adapter: fixtureAdapter });
+    const attempts1 = createTestExecutionAttemptServices({
+      decisionServices: stack1.decisions,
+      executionContractServices: stack1.execution,
+      agents: [m4Agent],
+      adapter: fixtureAdapter,
+      realBoundary: {
+        launchPort: launchPort1,
+        safetyJournal: wrappingJournal(journal1),
+      },
+      fixedNowIso: NOW,
+    });
+    stack1.attempts = attempts1 as typeof stack1.attempts;
+
+    const { contractId } = await seedM4ConfirmedContract(stack1);
+    const selected = await selectStandardAgent(stack1, {
+      attemptId: "xat:m4-replay",
+      executionContractId: contractId,
+      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
+    });
+    expect(selected.ok).toBe(true);
+
+    const granted = await stack1.attempts.grantRealExecutionGate!.execute({
+      grantId: "gd:m4-replay",
+      attemptId: "xat:m4-replay",
+      actor: MORRIS_ACTOR,
+      expiresAt: "2026-07-25T07:00:00.000Z",
+      authorityEvidenceId: M4_EVIDENCE,
+    });
+    expect(granted.ok).toBe(true);
+
+    const crashed = await stack1.attempts.startExecution.execute({
+      attemptId: "xat:m4-replay",
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: M4_EVIDENCE,
+      realWorkspaceRoot: os.tmpdir(),
+    });
+    expect(crashed.ok).toBe(false);
+    if (!crashed.ok) {
+      expect(crashed.error.detailCode).toBe("LAUNCH_RECONCILIATION_REQUIRED");
+    }
+    expect(runner.calls).toHaveLength(1);
+
+    const frontierBeforeRestart =
+      await journal1.findFrontierByAttempt("xat:m4-replay");
+    expect(frontierBeforeRestart.some((r) => r.kind === "CREATED")).toBe(true);
+    expect(frontierBeforeRestart.some((r) => r.kind === "LAUNCHED")).toBe(
+      false,
+    );
+    journal1.close();
+
+    // --- Process 2: new MemoryAttempt store, same journal file ---
+    const journal2 = new SqliteRealLaunchSafetyJournal({
+      databasePath: journalPath,
+    });
+    const launchPort2 = new CursorCliLaunchGateway({
+      processRunner: runner,
+      env: { ...process.env, SFIA_STUDIO_CURSOR_REAL: "1" },
+      resolveCursorBin: () => "/tmp/fake-cursor-bin",
+    });
+    const stack2 = buildStack({
+      agents: [m4Agent],
+      adapter: new TestExecutionAdapter(),
+    });
+    const attempts2 = createTestExecutionAttemptServices({
+      decisionServices: stack2.decisions,
+      executionContractServices: stack2.execution,
+      agents: [m4Agent],
+      adapter: stack2.adapter as TestExecutionAdapter,
+      realBoundary: { launchPort: launchPort2, safetyJournal: journal2 },
+      fixedNowIso: NOW,
+    });
+    stack2.attempts = attempts2 as typeof stack2.attempts;
+
+    const seeded2 = await seedM4ConfirmedContract(stack2, {
+      executionContractId: "xct:oa-replay-2",
+      idempotencyKey: "idem-xct-replay-2",
+    });
+    const selected2 = await selectStandardAgent(stack2, {
+      attemptId: "xat:m4-replay",
+      executionContractId: seeded2.contractId,
+      requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
+    });
+    expect(selected2.ok).toBe(true);
+
+    const durable = await journal2.findFrontierByAttempt("xat:m4-replay");
+    expect(durable.some((r) => r.kind === "CREATED")).toBe(true);
+    expect(durable.some((r) => r.kind === "LAUNCHED")).toBe(false);
+
+    const retry = await stack2.attempts.startExecution.execute({
+      attemptId: "xat:m4-replay",
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: M4_EVIDENCE,
+      realWorkspaceRoot: os.tmpdir(),
+    });
+    expect(retry.ok).toBe(false);
+    if (!retry.ok) {
+      expect([
+        "LAUNCH_RECONCILIATION_REQUIRED",
+        "GATE_D_REQUIRED",
+      ]).toContain(retry.error.detailCode);
+    }
+    expect(runner.calls).toHaveLength(1);
+    journal2.close();
+  });
+});
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
new file mode 100644
index 0000000..48912a5
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
@@ -0,0 +1,209 @@
+/**
+ * GrantGateD — Gate D GD-1 grant use-case (D-M4-04).
+ * Grant ≠ consume. StartExecution consumes with CREATED atomically.
+ * Never starts execution / never launches Cursor.
+ */
+import type { ClockPort } from "@/lib/oa/doctrine";
+import type { AuthorityResolverPort } from "@/lib/oa/decision";
+import type { ExecutionContractRepositoryPort } from "@/lib/oa/execution-contract";
+import { computeExecutionContractSemanticFingerprint } from "@/lib/oa/execution-contract";
+import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
+import type { AttemptDetailCode, ActorReference } from "../domain/types";
+import type { GateDGrant } from "../domain/realLaunchSafety";
+import { isM4BoundedReadOnlyRealAgent } from "../infrastructure/m4BoundedReadOnlyCursorAgent";
+import type { AgentRegistryPort } from "../ports/agentRegistry";
+import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
+import type { RealLaunchSafetyJournalPort } from "../ports/realLaunchSafetyJournalPort";
+import {
+  authorityFailureDetail,
+  newCorrelationId,
+  verifyAttemptAuthority,
+} from "./attemptSupport";
+
+export type GrantGateDRequest = {
+  readonly grantId: string;
+  readonly attemptId: string;
+  readonly actor: ActorReference;
+  readonly expiresAt: string;
+  readonly authorityEvidenceId?: string;
+  readonly correlationId?: string;
+  readonly expectedAttemptVersion?: number;
+  readonly expectedContractVersion?: number;
+  readonly claimedAuthorityLevel?: string;
+  readonly nowIso?: string;
+};
+
+export type GrantGateDSuccess = {
+  readonly ok: true;
+  readonly grant: GateDGrant;
+  readonly durationMs: number;
+};
+
+export type GrantGateDFailure = {
+  readonly ok: false;
+  readonly error: ReturnType<typeof createAttemptError>;
+  readonly durationMs: number;
+};
+
+export type GrantGateDResult = GrantGateDSuccess | GrantGateDFailure;
+
+/** @deprecated Prefer GrantGateDRequest. */
+export type GrantRealExecutionGateRequest = GrantGateDRequest;
+/** @deprecated Prefer GrantGateDResult. */
+export type GrantRealExecutionGateResult = GrantGateDResult;
+
+export class GrantGateD {
+  constructor(
+    private readonly attempts: ExecutionAttemptRepositoryPort,
+    private readonly contracts: ExecutionContractRepositoryPort,
+    private readonly registry: AgentRegistryPort,
+    private readonly authority: AuthorityResolverPort,
+    private readonly safetyJournal: RealLaunchSafetyJournalPort,
+    private readonly clock: ClockPort,
+  ) {}
+
+  async execute(request: GrantGateDRequest): Promise<GrantGateDResult> {
+    const started = Date.now();
+    const timestamp = request.nowIso ?? this.clock.nowIso();
+    const correlationId = request.correlationId ?? newCorrelationId();
+
+    const fail = (
+      detailCode: AttemptDetailCode,
+      internalCauseRef: string,
+      extra?: Partial<Parameters<typeof createAttemptError>[0]>,
+    ): GrantGateDFailure => ({
+      ok: false,
+      error: createAttemptError({
+        detailCode,
+        timestamp,
+        correlationId,
+        attemptId: request.attemptId,
+        internalCauseRef,
+        ...extra,
+      }),
+      durationMs: Date.now() - started,
+    });
+
+    try {
+      if (!request.actor?.actorId || !request.grantId || !request.expiresAt) {
+        return fail("ATTEMPT_INVALID", "gate_d_input_invalid");
+      }
+      if (Date.parse(request.expiresAt) <= Date.parse(timestamp)) {
+        return fail("GATE_D_EXPIRED", "gate_d_expires_at_not_future");
+      }
+
+      const attempt = await this.attempts.findById(request.attemptId);
+      if (!attempt) return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
+      if (attempt.status !== "accepted") {
+        return fail("ATTEMPT_STATE_CONFLICT", `attempt_status_${attempt.status}`);
+      }
+      if (
+        request.expectedAttemptVersion !== undefined &&
+        request.expectedAttemptVersion !== attempt.version
+      ) {
+        return fail("VERSION_CONFLICT", "attempt_occ_mismatch", {
+          expectedVersion: request.expectedAttemptVersion,
+          currentVersion: attempt.version,
+        });
+      }
+
+      const contract = await this.contracts.findById(attempt.executionContractId);
+      if (!contract) {
+        return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
+      }
+      if (contract.status !== "confirmed") {
+        return fail(
+          "EXECUTION_CONTRACT_NOT_CONFIRMED",
+          `contract_status_${contract.status}`,
+        );
+      }
+      if (contract.version !== attempt.executionContractVersion) {
+        return fail("EXECUTION_CONTRACT_STALE", "contract_version_changed");
+      }
+      if (
+        request.expectedContractVersion !== undefined &&
+        request.expectedContractVersion !== contract.version
+      ) {
+        return fail("EXECUTION_CONTRACT_STALE", "contract_occ_mismatch");
+      }
+
+      const fingerprint =
+        contract.semanticFingerprint ??
+        computeExecutionContractSemanticFingerprint(contract);
+      if (!fingerprint) {
+        return fail("ATTEMPT_INVALID", "semantic_fingerprint_missing");
+      }
+      if (
+        contract.action.includes("UNRESOLVED") ||
+        contract.target.includes("UNRESOLVED") ||
+        contract.requiredCapabilities.some(
+          (c) => c === "cap:unresolved" || c.includes("unresolved"),
+        )
+      ) {
+        return fail("REAL_AGENT_PROFILE_INVALID", "unresolved_contract_refused");
+      }
+
+      const agent = this.registry.getAgent(attempt.selectedAgentRef);
+      if (!agent) return fail("AGENT_NOT_FOUND", "selected_agent_missing");
+      if (!isM4BoundedReadOnlyRealAgent(agent)) {
+        return fail("REAL_AGENT_PROFILE_INVALID", "not_m4_bounded_readonly_real");
+      }
+
+      const authz = verifyAttemptAuthority(this.authority, {
+        requiredAuthority: contract.requiredAuthority,
+        actorId: request.actor.actorId,
+        scope: contract.scope,
+        evidenceId: request.authorityEvidenceId,
+        claimedAuthorityLevel: request.claimedAuthorityLevel,
+      });
+      if (!authz.ok) {
+        return fail(
+          authorityFailureDetail(authz.reason),
+          `gate_d_${authz.reason}`,
+        );
+      }
+
+      const identity = {
+        executionContractId: contract.executionContractId,
+        executionContractVersion: contract.version,
+        semanticFingerprint: fingerprint,
+      };
+      if (await this.safetyJournal.hasAmbiguousFrontier(identity)) {
+        return fail(
+          "LAUNCH_RECONCILIATION_REQUIRED",
+          "ambiguous_frontier_blocks_gate_d",
+        );
+      }
+
+      const existing = await this.safetyJournal.findActiveGateDGrantForAttempt(
+        attempt.attemptId,
+      );
+      if (existing) {
+        return fail("GATE_D_ALREADY_GRANTED", "active_grant_exists");
+      }
+
+      const grant = await this.safetyJournal.persistGateDGrant({
+        grantId: request.grantId,
+        executionContractId: contract.executionContractId,
+        executionContractVersion: contract.version,
+        semanticFingerprint: fingerprint,
+        attemptId: attempt.attemptId,
+        selectedAgentRef: attempt.selectedAgentRef,
+        actorId: request.actor.actorId,
+        issuedAt: timestamp,
+        expiresAt: request.expiresAt,
+        correlationId,
+      });
+
+      return { ok: true, grant, durationMs: Date.now() - started };
+    } catch (err) {
+      if (isExecutionAttemptDomainError(err)) {
+        return fail(err.detailCode, err.message);
+      }
+      return fail("EXECUTION_PERSISTENCE_FAILED", "gate_d_persist_failed");
+    }
+  }
+}
+
+/** @deprecated Prefer GrantGateD. */
+export { GrantGateD as GrantRealExecutionGate };
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantRealExecutionGate.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantRealExecutionGate.ts
new file mode 100644
index 0000000..7459716
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantRealExecutionGate.ts
@@ -0,0 +1,12 @@
+/**
+ * GrantRealExecutionGate — Gate D GD-1 grant use-case (D-M4-04).
+ * Re-exports GrantGateD under the Delivery cycle name.
+ */
+export {
+  GrantGateD as GrantRealExecutionGate,
+  GrantGateD,
+  type GrantGateDRequest as GrantRealExecutionGateRequest,
+  type GrantGateDResult as GrantRealExecutionGateResult,
+  type GrantGateDRequest,
+  type GrantGateDResult,
+} from "./grantGateD";
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
new file mode 100644
index 0000000..790267e
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
@@ -0,0 +1,99 @@
+/**
+ * M4 REAL-OFF — technical launch safety + Gate D GD-1 types.
+ *
+ * TEMPORARY WITH EXIT technical journal (D-M4-02).
+ * ≠ Product Store · ≠ Attempt aggregate · ≠ Confirmation · ≠ PREPARE projection.
+ */
+
+export const SFIA_STUDIO_CURSOR_REAL_FLAG = "SFIA_STUDIO_CURSOR_REAL" as const;
+
+/** Closed REAL gateway adapter id — not part of InjectableExecutionAdapter. */
+export const M4_REAL_GATEWAY_ADAPTER_ID = "adp:m4-cursor-cli-real" as const;
+
+export const M4_BOUNDED_RO_CURSOR_AGENT_ID =
+  "agt:m4.cursor.bounded_readonly" as const;
+
+export type RealLaunchReconcileDisposition =
+  | "CLEAR"
+  | "UNKNOWN"
+  | "REVIEW_REQUIRED";
+
+/** Journal record kinds (D-M4-02 / D-M4-04). */
+export type LaunchSafetyRecordKind =
+  | "GATE_D_GRANTED"
+  | "GATE_D_CONSUMED"
+  | "ATTEMPT_CREATED"
+  | "ATTEMPT_LAUNCHED";
+
+/** Frontier kinds used for relaunch ambiguity (CREATED / LAUNCHED). */
+export type RealLaunchFrontierKind = "CREATED" | "LAUNCHED";
+
+export type GateDGrantStatus =
+  | "granted"
+  | "consumed"
+  | "expired"
+  | "invalidated";
+
+export type GateDGrant = {
+  readonly grantId: string;
+  readonly executionContractId: string;
+  readonly executionContractVersion: number;
+  readonly semanticFingerprint: string;
+  readonly attemptId: string;
+  readonly selectedAgentRef: string;
+  readonly actorId: string;
+  readonly issuedAt: string;
+  readonly expiresAt: string;
+  readonly status: GateDGrantStatus;
+  readonly consumedAt?: string;
+  readonly correlationId?: string;
+};
+
+export type RealLaunchFrontierRecord = {
+  readonly recordId: string;
+  readonly kind: RealLaunchFrontierKind;
+  readonly occurredAt: string;
+  readonly executionContractId: string;
+  readonly executionContractVersion: number;
+  readonly semanticFingerprint: string;
+  readonly attemptId: string;
+  readonly selectedAgentRef: string;
+  readonly actorId: string;
+  readonly grantId: string;
+  readonly correlationId: string;
+  readonly processRef?: string;
+  readonly payloadJson: string;
+};
+
+export type ContractSafetyIdentity = {
+  readonly executionContractId: string;
+  readonly executionContractVersion: number;
+  readonly semanticFingerprint: string;
+};
+
+export function isStudioCursorRealEnabled(
+  env: NodeJS.ProcessEnv = process.env,
+): boolean {
+  return env[SFIA_STUDIO_CURSOR_REAL_FLAG] === "1";
+}
+
+export function assertStudioCursorRealOffForTests(
+  env: NodeJS.ProcessEnv = process.env,
+): void {
+  if (env.OPS1_CURSOR_REAL === "1") {
+    throw new Error("M4_REAL_OFF_TESTS_REQUIRE_OPS1_CURSOR_REAL_OFF");
+  }
+  if (isStudioCursorRealEnabled(env)) {
+    throw new Error("M4_REAL_OFF_TESTS_REQUIRE_SFIA_STUDIO_CURSOR_REAL_OFF");
+  }
+}
+
+export function isRealCursorAgentMode(input: {
+  executionMode: string;
+  adapterRef: string;
+}): boolean {
+  return (
+    input.executionMode === "cursor_cli_real" ||
+    input.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID
+  );
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
new file mode 100644
index 0000000..e3b8abd
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorCliLaunchGateway.ts
@@ -0,0 +1,15 @@
+/**
+ * CursorCliLaunchGateway — OA-owned REAL launch ACL (D-M4-01).
+ * Re-exports StudioCursorRealLaunchGateway under the Delivery cycle name.
+ */
+export {
+  StudioCursorRealLaunchGateway as CursorCliLaunchGateway,
+  StudioCursorRealLaunchGateway,
+  DisabledRealProcessRunner,
+  FakeProcessRunner as FakeRealProcessRunner,
+  FakeProcessRunner,
+  resolveStudioCursorBinPath,
+  resolveCursorBinPath,
+  type StudioCursorRealLaunchGatewayOptions as CursorCliLaunchGatewayOptions,
+  type StudioCursorRealLaunchGatewayOptions,
+} from "./studioCursorRealLaunchGateway";
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeRealExecutionLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeRealExecutionLaunchGateway.ts
new file mode 100644
index 0000000..6c7f3ce
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeRealExecutionLaunchGateway.ts
@@ -0,0 +1,99 @@
+/**
+ * FakeRealExecutionLaunchGateway — test double for RealExecutionLaunchPort.
+ * Records calls; never spawns a real process.
+ */
+import { M4_REAL_GATEWAY_ADAPTER_ID } from "../domain/realLaunchSafety";
+import type {
+  RealExecutionLaunchPort,
+  RealLaunchRequest,
+  RealLaunchResult,
+  RealProcessObservation,
+} from "../ports/realExecutionLaunchPort";
+
+export type FakeRealExecutionLaunchGatewayOptions = {
+  readonly gatewayId?: string;
+  readonly behavior?:
+    | { outcome: "ack"; processRef?: string }
+    | { outcome: "reject"; reason: string; detailCode?: RealLaunchRejectDetail }
+    | { outcome: "fail"; reason: string; detailCode?: RealLaunchFailDetail }
+    | { outcome: "throw"; reason: string };
+};
+
+type RealLaunchRejectDetail = NonNullable<
+  Extract<RealLaunchResult, { outcome: "reject" }>["detailCode"]
+>;
+type RealLaunchFailDetail = NonNullable<
+  Extract<RealLaunchResult, { outcome: "fail" }>["detailCode"]
+>;
+
+export class FakeRealExecutionLaunchGateway implements RealExecutionLaunchPort {
+  readonly gatewayId: string;
+  readonly externalEffects = true as const;
+  readonly calls: RealLaunchRequest[] = [];
+  private behavior: NonNullable<FakeRealExecutionLaunchGatewayOptions["behavior"]>;
+  private readonly observations = new Map<string, RealProcessObservation>();
+
+  constructor(options: FakeRealExecutionLaunchGatewayOptions = {}) {
+    this.gatewayId = options.gatewayId ?? M4_REAL_GATEWAY_ADAPTER_ID;
+    this.behavior = options.behavior ?? { outcome: "ack" };
+  }
+
+  setBehavior(
+    behavior: NonNullable<FakeRealExecutionLaunchGatewayOptions["behavior"]>,
+  ): void {
+    this.behavior = behavior;
+  }
+
+  get launchCallCount(): number {
+    return this.calls.length;
+  }
+
+  async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
+    this.calls.push(structuredClone(request));
+    const b = this.behavior;
+    if (b.outcome === "throw") {
+      throw new Error(`fake_real_launch_threw:${b.reason}`);
+    }
+    if (b.outcome === "reject") {
+      return {
+        outcome: "reject",
+        gatewayId: this.gatewayId,
+        attemptId: request.attemptId,
+        reason: b.reason,
+        realProcessInvoked: false,
+        detailCode: b.detailCode,
+      };
+    }
+    if (b.outcome === "fail") {
+      return {
+        outcome: "fail",
+        gatewayId: this.gatewayId,
+        attemptId: request.attemptId,
+        reason: b.reason,
+        realProcessInvoked: false,
+        detailCode: b.detailCode,
+      };
+    }
+    const processRef = b.processRef ?? `proc:${request.attemptId}`;
+    this.observations.set(processRef, {
+      processRef,
+      exitCode: null,
+      timedOut: false,
+      stdout: "",
+      stderr: "",
+      durationMs: 0,
+      realProcessInvoked: true,
+    });
+    return {
+      outcome: "ack",
+      gatewayId: this.gatewayId,
+      attemptId: request.attemptId,
+      realProcessInvoked: true,
+      processRef,
+    };
+  }
+
+  async observe(processRef: string): Promise<RealProcessObservation | null> {
+    return this.observations.get(processRef) ?? null;
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedReadOnlyCursorAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedReadOnlyCursorAgent.ts
new file mode 100644
index 0000000..e7f5fc6
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedReadOnlyCursorAgent.ts
@@ -0,0 +1,75 @@
+/**
+ * M4 bounded read-only Cursor agent descriptor (D-M4-03).
+ * Static / deny-by-default registry entry — no live health probe.
+ * Exact caps only — no wildcards, no unresolved.
+ */
+import type { ProvenanceRecord } from "@/lib/oa/doctrine";
+import {
+  M4_BOUNDED_RO_CURSOR_AGENT_ID,
+  M4_REAL_GATEWAY_ADAPTER_ID,
+} from "../domain/realLaunchSafety";
+import type { AgentDescriptor } from "../domain/types";
+
+export const M4_BOUNDED_RO_CAPABILITY = "cap:cursor.read_only" as const;
+export const M4_BOUNDED_RO_ACTION = "cursor.read_only.inspect" as const;
+export const M4_BOUNDED_RO_TARGET = "workspace.isolated.read" as const;
+export const M4_BOUNDED_RO_SCOPE = "studio.m4.real_off" as const;
+
+export function createM4BoundedReadOnlyCursorAgentDescriptor(
+  nowIso: string,
+  provenance?: ProvenanceRecord,
+): AgentDescriptor {
+  const defaultProvenance: ProvenanceRecord = {
+    schemaVersion: "0.1.0-oa",
+    provenanceRecordId: "prv:m4-bounded-ro-cursor-agent",
+    actor: {
+      actorId: "actor:system",
+      role: "system",
+      authorityLevel: "N1",
+    },
+    source: "system",
+    timestamp: nowIso,
+    correlationId: "cor:m4-bounded-ro-cursor-agent",
+  };
+  const descriptor: AgentDescriptor = {
+    schemaVersion: "0.1.0-oa",
+    agentId: M4_BOUNDED_RO_CURSOR_AGENT_ID,
+    agentType: "cursor_cli_bounded_readonly",
+    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
+    supportedCapabilities: [M4_BOUNDED_RO_CAPABILITY],
+    allowedActions: [M4_BOUNDED_RO_ACTION],
+    allowedTargets: [M4_BOUNDED_RO_TARGET],
+    allowedScopes: [M4_BOUNDED_RO_SCOPE],
+    trustLevel: "bounded",
+    executionMode: "cursor_cli_real",
+    healthStatus: "healthy",
+    version: 1,
+    enabled: true,
+    provenance: provenance ?? defaultProvenance,
+    createdAt: nowIso,
+  };
+  return Object.freeze(descriptor);
+}
+
+export function isM4BoundedReadOnlyRealAgent(agent: AgentDescriptor): boolean {
+  const hasWildcard = (values: readonly string[]) =>
+    values.some((v) => v === "*" || v.includes("*"));
+  return (
+    agent.executionMode === "cursor_cli_real" &&
+    agent.trustLevel === "bounded" &&
+    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID &&
+    agent.enabled === true &&
+    agent.supportedCapabilities.length > 0 &&
+    agent.allowedActions.length > 0 &&
+    agent.allowedTargets.length > 0 &&
+    agent.allowedScopes.length > 0 &&
+    !hasWildcard(agent.supportedCapabilities) &&
+    !hasWildcard(agent.allowedActions) &&
+    !hasWildcard(agent.allowedTargets) &&
+    !hasWildcard(agent.allowedScopes) &&
+    !agent.supportedCapabilities.includes("cap:unresolved") &&
+    !agent.allowedActions.some((a) => a.includes("UNRESOLVED")) &&
+    !agent.allowedTargets.some((t) => t.includes("UNRESOLVED")) &&
+    !agent.allowedScopes.some((s) => s.includes("UNRESOLVED"))
+  );
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/memoryLaunchSafetyJournal.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/memoryLaunchSafetyJournal.ts
new file mode 100644
index 0000000..23cbf1b
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/memoryLaunchSafetyJournal.ts
@@ -0,0 +1,242 @@
+/**
+ * MemoryLaunchSafetyJournal — in-memory journal for unit tests.
+ * Prefer SqliteLaunchSafetyJournal with temp files for durability proofs.
+ */
+import { randomBytes } from "node:crypto";
+import type {
+  ContractSafetyIdentity,
+  GateDGrant,
+  RealLaunchFrontierKind,
+  RealLaunchFrontierRecord,
+  RealLaunchReconcileDisposition,
+} from "../domain/realLaunchSafety";
+import type {
+  AtomicConsumeGrantAndCreateFrontierInput,
+  CreateGrantInput,
+  GrantValidationResult,
+  LaunchSafetyJournalPort,
+  MarkLaunchedInput,
+  ValidateGrantForStartInput,
+} from "../ports/launchSafetyJournalPort";
+
+function newId(prefix: string): string {
+  return `${prefix}:${randomBytes(8).toString("hex")}`;
+}
+
+function identityKey(identity: ContractSafetyIdentity): string {
+  return `${identity.executionContractId}|${identity.executionContractVersion}|${identity.semanticFingerprint}`;
+}
+
+export class MemoryLaunchSafetyJournal implements LaunchSafetyJournalPort {
+  private readonly grants = new Map<string, GateDGrant>();
+  private readonly frontier: RealLaunchFrontierRecord[] = [];
+  /** When true, next atomicConsume throws before mutating (adversarial). */
+  failNextAtomicConsume = false;
+
+  async createGrant(input: CreateGrantInput): Promise<GateDGrant> {
+    if (this.grants.has(input.grantId)) {
+      throw new Error("m4_gate_d_duplicate_grant_id");
+    }
+    for (const g of this.grants.values()) {
+      if (g.attemptId === input.attemptId && g.status === "granted") {
+        throw new Error("m4_gate_d_attempt_unique");
+      }
+    }
+    const grant: GateDGrant = Object.freeze({
+      grantId: input.grantId,
+      executionContractId: input.executionContractId,
+      executionContractVersion: input.executionContractVersion,
+      semanticFingerprint: input.semanticFingerprint,
+      attemptId: input.attemptId,
+      selectedAgentRef: input.selectedAgentRef,
+      actorId: input.actorId,
+      issuedAt: input.issuedAt,
+      expiresAt: input.expiresAt,
+      status: "granted",
+      correlationId: input.correlationId,
+    });
+    this.grants.set(grant.grantId, grant);
+    return grant;
+  }
+
+  async findGrant(grantId: string): Promise<GateDGrant | null> {
+    return this.grants.get(grantId) ?? null;
+  }
+
+  async findActiveGateDGrantForAttempt(
+    attemptId: string,
+  ): Promise<GateDGrant | null> {
+    for (const g of this.grants.values()) {
+      if (g.attemptId === attemptId && g.status === "granted") return g;
+    }
+    return null;
+  }
+
+  async validateGrantForStart(
+    input: ValidateGrantForStartInput,
+  ): Promise<GrantValidationResult> {
+    const grant = await this.findGrant(input.grantId);
+    if (!grant) return { ok: false, reason: "GATE_D_REQUIRED" };
+    if (grant.status === "consumed") {
+      return { ok: false, reason: "GATE_D_ALREADY_CONSUMED" };
+    }
+    if (grant.status !== "granted") {
+      return { ok: false, reason: "GATE_D_INVALID" };
+    }
+    if (Date.parse(grant.expiresAt) <= Date.parse(input.nowIso)) {
+      return { ok: false, reason: "GATE_D_EXPIRED" };
+    }
+    if (
+      grant.attemptId !== input.attemptId ||
+      grant.actorId !== input.actorId ||
+      grant.selectedAgentRef !== input.selectedAgentRef ||
+      grant.executionContractId !== input.identity.executionContractId ||
+      grant.executionContractVersion !==
+        input.identity.executionContractVersion ||
+      grant.semanticFingerprint !== input.identity.semanticFingerprint
+    ) {
+      return { ok: false, reason: "GATE_D_BINDING_MISMATCH" };
+    }
+    return { ok: true, grant };
+  }
+
+  async atomicConsumeGrantAndCreateFrontier(
+    input: AtomicConsumeGrantAndCreateFrontierInput,
+  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }> {
+    if (this.failNextAtomicConsume) {
+      this.failNextAtomicConsume = false;
+      throw new Error("m4_journal_atomic_consume_forced_fail");
+    }
+    const validated = await this.validateGrantForStart({
+      grantId: input.grantId,
+      attemptId: input.attemptId,
+      actorId: input.actorId,
+      selectedAgentRef: input.selectedAgentRef,
+      identity: input.identity,
+      nowIso: input.occurredAt,
+    });
+    if (!validated.ok) {
+      throw new Error(`m4_${validated.reason.toLowerCase()}`);
+    }
+    if (await this.hasAmbiguousFrontier(input.identity)) {
+      throw new Error("m4_launch_frontier_ambiguous");
+    }
+    const consumed: GateDGrant = Object.freeze({
+      ...validated.grant,
+      status: "consumed" as const,
+      consumedAt: input.occurredAt,
+    });
+    this.grants.set(consumed.grantId, consumed);
+    const created: RealLaunchFrontierRecord = Object.freeze({
+      recordId: newId("m4fr"),
+      kind: "CREATED",
+      occurredAt: input.occurredAt,
+      executionContractId: input.identity.executionContractId,
+      executionContractVersion: input.identity.executionContractVersion,
+      semanticFingerprint: input.identity.semanticFingerprint,
+      attemptId: input.attemptId,
+      selectedAgentRef: input.selectedAgentRef,
+      actorId: input.actorId,
+      grantId: input.grantId,
+      correlationId: input.correlationId,
+      payloadJson: "{}",
+    });
+    this.frontier.push(created);
+    return { grant: consumed, created };
+  }
+
+  async markLaunched(
+    input: MarkLaunchedInput,
+  ): Promise<RealLaunchFrontierRecord> {
+    const hasCreated = this.frontier.some(
+      (r) => r.attemptId === input.attemptId && r.kind === "CREATED",
+    );
+    if (!hasCreated) throw new Error("m4_launched_requires_created");
+    const launched: RealLaunchFrontierRecord = Object.freeze({
+      recordId: newId("m4fr"),
+      kind: "LAUNCHED",
+      occurredAt: input.occurredAt,
+      executionContractId: input.identity.executionContractId,
+      executionContractVersion: input.identity.executionContractVersion,
+      semanticFingerprint: input.identity.semanticFingerprint,
+      attemptId: input.attemptId,
+      selectedAgentRef: input.selectedAgentRef,
+      actorId: input.actorId,
+      grantId: input.grantId,
+      correlationId: input.correlationId,
+      processRef: input.processRef,
+      payloadJson: JSON.stringify(input.payload ?? {}),
+    });
+    this.frontier.push(launched);
+    return launched;
+  }
+
+  async findFrontierByContractFingerprint(
+    identity: ContractSafetyIdentity,
+  ): Promise<RealLaunchFrontierRecord[]> {
+    const key = identityKey(identity);
+    return this.frontier.filter((r) => identityKey(r) === key);
+  }
+
+  async findFrontierByAttemptId(
+    attemptId: string,
+  ): Promise<RealLaunchFrontierRecord[]> {
+    return this.frontier.filter((r) => r.attemptId === attemptId);
+  }
+
+  async hasAmbiguousFrontier(
+    identity: ContractSafetyIdentity,
+  ): Promise<boolean> {
+    const rows = await this.findFrontierByContractFingerprint(identity);
+    return rows.length > 0;
+  }
+
+  async reconcileDispositionForIdentity(
+    identity: ContractSafetyIdentity,
+  ): Promise<RealLaunchReconcileDisposition> {
+    const rows = await this.findFrontierByContractFingerprint(identity);
+    if (rows.length === 0) return "CLEAR";
+    if (rows.some((r) => r.kind === "LAUNCHED")) return "REVIEW_REQUIRED";
+    if (rows.some((r) => r.kind === "CREATED")) return "UNKNOWN";
+    return "REVIEW_REQUIRED";
+  }
+
+  async hasKindForAttempt(
+    attemptId: string,
+    kind: RealLaunchFrontierKind,
+  ): Promise<boolean> {
+    return this.frontier.some((r) => r.attemptId === attemptId && r.kind === kind);
+  }
+
+  async persistGateDGrant(input: CreateGrantInput): Promise<GateDGrant> {
+    return this.createGrant(input);
+  }
+
+  async findGateDGrant(grantId: string): Promise<GateDGrant | null> {
+    return this.findGrant(grantId);
+  }
+
+  async consumeGateDAndAppendCreated(
+    input: AtomicConsumeGrantAndCreateFrontierInput,
+  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }> {
+    return this.atomicConsumeGrantAndCreateFrontier(input);
+  }
+
+  async appendLaunched(
+    input: MarkLaunchedInput,
+  ): Promise<RealLaunchFrontierRecord> {
+    return this.markLaunched(input);
+  }
+
+  async findFrontierByAttempt(
+    attemptId: string,
+  ): Promise<RealLaunchFrontierRecord[]> {
+    return this.findFrontierByAttemptId(attemptId);
+  }
+
+  async findFrontierByIdentity(
+    identity: ContractSafetyIdentity,
+  ): Promise<RealLaunchFrontierRecord[]> {
+    return this.findFrontierByContractFingerprint(identity);
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteLaunchSafetyJournal.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteLaunchSafetyJournal.ts
new file mode 100644
index 0000000..a1351a7
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteLaunchSafetyJournal.ts
@@ -0,0 +1,478 @@
+/**
+ * SqliteLaunchSafetyJournal — technical SQLite safety DB (D-M4-02/04).
+ *
+ * Isolated file path · NOT Product Store · NOT D1 business DB · NOT Attempt store.
+ * TEMPORARY WITH EXIT.
+ */
+import { randomBytes } from "node:crypto";
+import { DatabaseSync } from "node:sqlite";
+import type {
+  ContractSafetyIdentity,
+  GateDGrant,
+  RealLaunchFrontierKind,
+  RealLaunchFrontierRecord,
+  RealLaunchReconcileDisposition,
+} from "../../domain/realLaunchSafety";
+import type {
+  AtomicConsumeGrantAndCreateFrontierInput,
+  CreateGrantInput,
+  GrantValidationResult,
+  LaunchSafetyJournalPort,
+  MarkLaunchedInput,
+  ValidateGrantForStartInput,
+} from "../../ports/launchSafetyJournalPort";
+
+const SCHEMA_SQL = `
+PRAGMA foreign_keys = ON;
+
+CREATE TABLE IF NOT EXISTS m4_gate_d_grants (
+  grant_id TEXT PRIMARY KEY NOT NULL,
+  execution_contract_id TEXT NOT NULL,
+  execution_contract_version INTEGER NOT NULL,
+  semantic_fingerprint TEXT NOT NULL,
+  attempt_id TEXT NOT NULL UNIQUE,
+  selected_agent_ref TEXT NOT NULL,
+  actor_id TEXT NOT NULL,
+  issued_at TEXT NOT NULL,
+  expires_at TEXT NOT NULL,
+  status TEXT NOT NULL,
+  consumed_at TEXT,
+  correlation_id TEXT
+);
+
+CREATE TABLE IF NOT EXISTS m4_launch_frontier (
+  record_id TEXT PRIMARY KEY NOT NULL,
+  kind TEXT NOT NULL,
+  occurred_at TEXT NOT NULL,
+  execution_contract_id TEXT NOT NULL,
+  execution_contract_version INTEGER NOT NULL,
+  semantic_fingerprint TEXT NOT NULL,
+  attempt_id TEXT NOT NULL,
+  selected_agent_ref TEXT NOT NULL,
+  actor_id TEXT NOT NULL,
+  grant_id TEXT NOT NULL,
+  correlation_id TEXT NOT NULL,
+  process_ref TEXT,
+  payload_json TEXT NOT NULL,
+  UNIQUE (attempt_id, kind)
+);
+
+-- At most one CREATED per contract safety identity (blocks new attemptId bypass).
+CREATE UNIQUE INDEX IF NOT EXISTS idx_m4_frontier_created_identity
+  ON m4_launch_frontier(execution_contract_id, execution_contract_version, semantic_fingerprint)
+  WHERE kind = 'CREATED';
+
+CREATE INDEX IF NOT EXISTS idx_m4_frontier_identity
+  ON m4_launch_frontier(execution_contract_id, execution_contract_version, semantic_fingerprint);
+`;
+
+function newId(prefix: string): string {
+  return `${prefix}:${randomBytes(8).toString("hex")}`;
+}
+
+function mapGrant(row: Record<string, unknown>): GateDGrant {
+  return Object.freeze({
+    grantId: String(row.grant_id),
+    executionContractId: String(row.execution_contract_id),
+    executionContractVersion: Number(row.execution_contract_version),
+    semanticFingerprint: String(row.semantic_fingerprint),
+    attemptId: String(row.attempt_id),
+    selectedAgentRef: String(row.selected_agent_ref),
+    actorId: String(row.actor_id),
+    issuedAt: String(row.issued_at),
+    expiresAt: String(row.expires_at),
+    status: String(row.status) as GateDGrant["status"],
+    consumedAt: row.consumed_at != null ? String(row.consumed_at) : undefined,
+    correlationId:
+      row.correlation_id != null ? String(row.correlation_id) : undefined,
+  });
+}
+
+function mapFrontier(row: Record<string, unknown>): RealLaunchFrontierRecord {
+  return Object.freeze({
+    recordId: String(row.record_id),
+    kind: String(row.kind) as RealLaunchFrontierKind,
+    occurredAt: String(row.occurred_at),
+    executionContractId: String(row.execution_contract_id),
+    executionContractVersion: Number(row.execution_contract_version),
+    semanticFingerprint: String(row.semantic_fingerprint),
+    attemptId: String(row.attempt_id),
+    selectedAgentRef: String(row.selected_agent_ref),
+    actorId: String(row.actor_id),
+    grantId: String(row.grant_id),
+    correlationId: String(row.correlation_id),
+    processRef: row.process_ref != null ? String(row.process_ref) : undefined,
+    payloadJson: String(row.payload_json ?? "{}"),
+  });
+}
+
+export type SqliteLaunchSafetyJournalOptions = {
+  /** Explicit technical DB path — required for durability across processes. */
+  readonly databasePath: string;
+};
+
+export class SqliteLaunchSafetyJournal implements LaunchSafetyJournalPort {
+  private readonly db: DatabaseSync;
+  readonly databasePath: string;
+
+  constructor(options: SqliteLaunchSafetyJournalOptions) {
+    if (!options.databasePath || options.databasePath.trim() === "") {
+      throw new Error("m4_safety_journal_database_path_required");
+    }
+    this.databasePath = options.databasePath;
+    this.db = new DatabaseSync(options.databasePath);
+    this.db.exec(SCHEMA_SQL);
+  }
+
+  /** Test helper — close handle. */
+  close(): void {
+    this.db.close();
+  }
+
+  async createGrant(input: CreateGrantInput): Promise<GateDGrant> {
+    this.db.exec("BEGIN IMMEDIATE");
+    try {
+      this.db
+        .prepare(
+          `INSERT INTO m4_gate_d_grants (
+            grant_id, execution_contract_id, execution_contract_version,
+            semantic_fingerprint, attempt_id, selected_agent_ref, actor_id,
+            issued_at, expires_at, status, correlation_id
+          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'granted', ?)`,
+        )
+        .run(
+          input.grantId,
+          input.executionContractId,
+          input.executionContractVersion,
+          input.semanticFingerprint,
+          input.attemptId,
+          input.selectedAgentRef,
+          input.actorId,
+          input.issuedAt,
+          input.expiresAt,
+          input.correlationId ?? null,
+        );
+      this.db.exec("COMMIT");
+    } catch (error) {
+      try {
+        this.db.exec("ROLLBACK");
+      } catch {
+        /* ignore */
+      }
+      throw error;
+    }
+    const grant = await this.findGrant(input.grantId);
+    if (!grant) throw new Error("m4_gate_d_persist_failed");
+    return grant;
+  }
+
+  /** Transitional alias. */
+  async persistGateDGrant(input: CreateGrantInput): Promise<GateDGrant> {
+    return this.createGrant(input);
+  }
+
+  async findGrant(grantId: string): Promise<GateDGrant | null> {
+    const row = this.db
+      .prepare(`SELECT * FROM m4_gate_d_grants WHERE grant_id = ?`)
+      .get(grantId) as Record<string, unknown> | undefined;
+    return row ? mapGrant(row) : null;
+  }
+
+  async findGateDGrant(grantId: string): Promise<GateDGrant | null> {
+    return this.findGrant(grantId);
+  }
+
+  async findActiveGateDGrantForAttempt(
+    attemptId: string,
+  ): Promise<GateDGrant | null> {
+    const row = this.db
+      .prepare(
+        `SELECT * FROM m4_gate_d_grants
+         WHERE attempt_id = ? AND status = 'granted'`,
+      )
+      .get(attemptId) as Record<string, unknown> | undefined;
+    return row ? mapGrant(row) : null;
+  }
+
+  async validateGrantForStart(
+    input: ValidateGrantForStartInput,
+  ): Promise<GrantValidationResult> {
+    const grant = await this.findGrant(input.grantId);
+    if (!grant) return { ok: false, reason: "GATE_D_REQUIRED" };
+    if (grant.status === "consumed") {
+      return { ok: false, reason: "GATE_D_ALREADY_CONSUMED" };
+    }
+    if (grant.status !== "granted") {
+      return { ok: false, reason: "GATE_D_INVALID" };
+    }
+    if (Date.parse(grant.expiresAt) <= Date.parse(input.nowIso)) {
+      return { ok: false, reason: "GATE_D_EXPIRED" };
+    }
+    if (
+      grant.attemptId !== input.attemptId ||
+      grant.actorId !== input.actorId ||
+      grant.selectedAgentRef !== input.selectedAgentRef ||
+      grant.executionContractId !== input.identity.executionContractId ||
+      grant.executionContractVersion !==
+        input.identity.executionContractVersion ||
+      grant.semanticFingerprint !== input.identity.semanticFingerprint
+    ) {
+      return { ok: false, reason: "GATE_D_BINDING_MISMATCH" };
+    }
+    return { ok: true, grant };
+  }
+
+  async atomicConsumeGrantAndCreateFrontier(
+    input: AtomicConsumeGrantAndCreateFrontierInput,
+  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }> {
+    this.db.exec("BEGIN IMMEDIATE");
+    try {
+      const grantRow = this.db
+        .prepare(`SELECT * FROM m4_gate_d_grants WHERE grant_id = ?`)
+        .get(input.grantId) as Record<string, unknown> | undefined;
+      if (!grantRow) {
+        throw new Error("m4_gate_d_not_found");
+      }
+      const grant = mapGrant(grantRow);
+      if (grant.status === "consumed") {
+        throw new Error("m4_gate_d_already_consumed");
+      }
+      if (grant.status !== "granted") {
+        throw new Error("m4_gate_d_not_granted");
+      }
+      if (Date.parse(grant.expiresAt) <= Date.parse(input.occurredAt)) {
+        this.db
+          .prepare(
+            `UPDATE m4_gate_d_grants SET status = 'expired' WHERE grant_id = ?`,
+          )
+          .run(input.grantId);
+        throw new Error("m4_gate_d_expired");
+      }
+      if (grant.attemptId !== input.attemptId) {
+        throw new Error("m4_gate_d_attempt_mismatch");
+      }
+      if (
+        grant.executionContractId !== input.identity.executionContractId ||
+        grant.executionContractVersion !==
+          input.identity.executionContractVersion ||
+        grant.semanticFingerprint !== input.identity.semanticFingerprint
+      ) {
+        throw new Error("m4_gate_d_identity_mismatch");
+      }
+      if (grant.selectedAgentRef !== input.selectedAgentRef) {
+        throw new Error("m4_gate_d_agent_mismatch");
+      }
+      if (grant.actorId !== input.actorId) {
+        throw new Error("m4_gate_d_actor_mismatch");
+      }
+
+      const ambiguous = this.db
+        .prepare(
+          `SELECT 1 AS ok FROM m4_launch_frontier
+           WHERE execution_contract_id = ?
+             AND execution_contract_version = ?
+             AND semantic_fingerprint = ?
+           LIMIT 1`,
+        )
+        .get(
+          input.identity.executionContractId,
+          input.identity.executionContractVersion,
+          input.identity.semanticFingerprint,
+        );
+      if (ambiguous) {
+        throw new Error("m4_launch_frontier_ambiguous");
+      }
+
+      this.db
+        .prepare(
+          `UPDATE m4_gate_d_grants
+           SET status = 'consumed', consumed_at = ?
+           WHERE grant_id = ? AND status = 'granted'`,
+        )
+        .run(input.occurredAt, input.grantId);
+
+      const recordId = newId("m4fr");
+      this.db
+        .prepare(
+          `INSERT INTO m4_launch_frontier (
+            record_id, kind, occurred_at, execution_contract_id,
+            execution_contract_version, semantic_fingerprint, attempt_id,
+            selected_agent_ref, actor_id, grant_id, correlation_id,
+            process_ref, payload_json
+          ) VALUES (?, 'CREATED', ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL, '{}')`,
+        )
+        .run(
+          recordId,
+          input.occurredAt,
+          input.identity.executionContractId,
+          input.identity.executionContractVersion,
+          input.identity.semanticFingerprint,
+          input.attemptId,
+          input.selectedAgentRef,
+          input.actorId,
+          input.grantId,
+          input.correlationId,
+        );
+
+      this.db.exec("COMMIT");
+
+      const createdRow = this.db
+        .prepare(`SELECT * FROM m4_launch_frontier WHERE record_id = ?`)
+        .get(recordId) as Record<string, unknown>;
+      const updatedGrant = await this.findGrant(input.grantId);
+      if (!updatedGrant) throw new Error("m4_gate_d_consume_lost");
+      return { grant: updatedGrant, created: mapFrontier(createdRow) };
+    } catch (error) {
+      try {
+        this.db.exec("ROLLBACK");
+      } catch {
+        /* ignore */
+      }
+      throw error;
+    }
+  }
+
+  /** Transitional alias. */
+  async consumeGateDAndAppendCreated(
+    input: AtomicConsumeGrantAndCreateFrontierInput,
+  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }> {
+    return this.atomicConsumeGrantAndCreateFrontier(input);
+  }
+
+  async markLaunched(
+    input: MarkLaunchedInput,
+  ): Promise<RealLaunchFrontierRecord> {
+    this.db.exec("BEGIN IMMEDIATE");
+    try {
+      const created = this.db
+        .prepare(
+          `SELECT 1 AS ok FROM m4_launch_frontier
+           WHERE attempt_id = ? AND kind = 'CREATED'`,
+        )
+        .get(input.attemptId);
+      if (!created) {
+        throw new Error("m4_launched_requires_created");
+      }
+      const recordId = newId("m4fr");
+      const payloadJson = JSON.stringify(input.payload ?? {});
+      this.db
+        .prepare(
+          `INSERT INTO m4_launch_frontier (
+            record_id, kind, occurred_at, execution_contract_id,
+            execution_contract_version, semantic_fingerprint, attempt_id,
+            selected_agent_ref, actor_id, grant_id, correlation_id,
+            process_ref, payload_json
+          ) VALUES (?, 'LAUNCHED', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
+        )
+        .run(
+          recordId,
+          input.occurredAt,
+          input.identity.executionContractId,
+          input.identity.executionContractVersion,
+          input.identity.semanticFingerprint,
+          input.attemptId,
+          input.selectedAgentRef,
+          input.actorId,
+          input.grantId,
+          input.correlationId,
+          input.processRef,
+          payloadJson,
+        );
+      this.db.exec("COMMIT");
+      const row = this.db
+        .prepare(`SELECT * FROM m4_launch_frontier WHERE record_id = ?`)
+        .get(recordId) as Record<string, unknown>;
+      return mapFrontier(row);
+    } catch (error) {
+      try {
+        this.db.exec("ROLLBACK");
+      } catch {
+        /* ignore */
+      }
+      throw error;
+    }
+  }
+
+  /** Transitional alias. */
+  async appendLaunched(
+    input: MarkLaunchedInput,
+  ): Promise<RealLaunchFrontierRecord> {
+    return this.markLaunched(input);
+  }
+
+  async findFrontierByAttemptId(
+    attemptId: string,
+  ): Promise<RealLaunchFrontierRecord[]> {
+    const rows = this.db
+      .prepare(
+        `SELECT * FROM m4_launch_frontier WHERE attempt_id = ? ORDER BY occurred_at`,
+      )
+      .all(attemptId) as Record<string, unknown>[];
+    return rows.map(mapFrontier);
+  }
+
+  async findFrontierByAttempt(
+    attemptId: string,
+  ): Promise<RealLaunchFrontierRecord[]> {
+    return this.findFrontierByAttemptId(attemptId);
+  }
+
+  async findFrontierByContractFingerprint(
+    identity: ContractSafetyIdentity,
+  ): Promise<RealLaunchFrontierRecord[]> {
+    const rows = this.db
+      .prepare(
+        `SELECT * FROM m4_launch_frontier
+         WHERE execution_contract_id = ?
+           AND execution_contract_version = ?
+           AND semantic_fingerprint = ?
+         ORDER BY occurred_at`,
+      )
+      .all(
+        identity.executionContractId,
+        identity.executionContractVersion,
+        identity.semanticFingerprint,
+      ) as Record<string, unknown>[];
+    return rows.map(mapFrontier);
+  }
+
+  async findFrontierByIdentity(
+    identity: ContractSafetyIdentity,
+  ): Promise<RealLaunchFrontierRecord[]> {
+    return this.findFrontierByContractFingerprint(identity);
+  }
+
+  async hasAmbiguousFrontier(
+    identity: ContractSafetyIdentity,
+  ): Promise<boolean> {
+    const rows = await this.findFrontierByContractFingerprint(identity);
+    return rows.length > 0;
+  }
+
+  async reconcileDispositionForIdentity(
+    identity: ContractSafetyIdentity,
+  ): Promise<RealLaunchReconcileDisposition> {
+    const rows = await this.findFrontierByContractFingerprint(identity);
+    if (rows.length === 0) return "CLEAR";
+    const hasCreated = rows.some((r) => r.kind === "CREATED");
+    const hasLaunched = rows.some((r) => r.kind === "LAUNCHED");
+    if (hasLaunched) return "REVIEW_REQUIRED";
+    if (hasCreated) return "UNKNOWN";
+    return "REVIEW_REQUIRED";
+  }
+
+  async hasKindForAttempt(
+    attemptId: string,
+    kind: RealLaunchFrontierKind,
+  ): Promise<boolean> {
+    const row = this.db
+      .prepare(
+        `SELECT 1 AS ok FROM m4_launch_frontier WHERE attempt_id = ? AND kind = ?`,
+      )
+      .get(attemptId, kind);
+    return Boolean(row);
+  }
+}
+
+/** Transitional export name. */
+export { SqliteLaunchSafetyJournal as SqliteRealLaunchSafetyJournal };
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqliteRealLaunchSafetyJournal.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqliteRealLaunchSafetyJournal.ts
new file mode 100644
index 0000000..2bc3c99
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqliteRealLaunchSafetyJournal.ts
@@ -0,0 +1,10 @@
+/**
+ * SqliteRealLaunchSafetyJournal — technical SQLite safety DB (D-M4-02/04).
+ * Re-exports SqliteLaunchSafetyJournal under the Delivery cycle name.
+ */
+export {
+  SqliteLaunchSafetyJournal as SqliteRealLaunchSafetyJournal,
+  SqliteLaunchSafetyJournal,
+  type SqliteLaunchSafetyJournalOptions as SqliteRealLaunchSafetyJournalOptions,
+  type SqliteLaunchSafetyJournalOptions,
+} from "./sqlite/sqliteLaunchSafetyJournal";
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
new file mode 100644
index 0000000..6aa8808
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -0,0 +1,294 @@
+/**
+ * StudioCursorRealLaunchGateway — OA-owned REAL launch ACL (D-M4-01).
+ *
+ * Harvested concepts from OPS1 (no import from lib/ops1).
+ * Default REAL process enablement OFF via SFIA_STUDIO_CURSOR_REAL.
+ * Tests MUST inject ProcessRunner — never spawn Cursor in REAL-OFF cycle.
+ */
+import { accessSync, constants } from "node:fs";
+import path from "node:path";
+import {
+  isStudioCursorRealEnabled,
+  M4_REAL_GATEWAY_ADAPTER_ID,
+  SFIA_STUDIO_CURSOR_REAL_FLAG,
+} from "../domain/realLaunchSafety";
+import type {
+  ProcessRunner,
+  RealExecutionLaunchPort,
+  RealLaunchRequest,
+  RealLaunchResult,
+  RealProcessObservation,
+} from "../ports/realExecutionLaunchPort";
+
+export type StudioCursorRealLaunchGatewayOptions = {
+  readonly processRunner: ProcessRunner;
+  readonly env?: NodeJS.ProcessEnv;
+  readonly resolveCursorBin?: () => string | null;
+  readonly defaultTimeoutMs?: number;
+  /** Server-configured workspace fallback when request omits workspaceRoot. */
+  readonly workspaceRoot?: string;
+};
+
+/** Copy of OPS1 resolveCursorBinPath pattern — no ops1 import. */
+export function resolveCursorBinPath(
+  env: NodeJS.ProcessEnv = process.env,
+): string | null {
+  const candidates = [
+    env.SFIA_CURSOR_BIN,
+    "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
+    path.join(env.HOME ?? "", ".local/bin/cursor-agent"),
+  ].filter(Boolean) as string[];
+  for (const c of candidates) {
+    try {
+      accessSync(c, constants.X_OK);
+      return c;
+    } catch {
+      /* next */
+    }
+  }
+  return null;
+}
+
+export const resolveStudioCursorBinPath = resolveCursorBinPath;
+
+/**
+ * Production process runner — shell:false spawn.
+ * MUST NOT be used while REAL flag is OFF (gateway rejects first).
+ * REAL-OFF Delivery cycle tests must not instantiate this against live Cursor.
+ */
+export class DisabledRealProcessRunner implements ProcessRunner {
+  async invoke(): Promise<{
+    processRef: string;
+    realProcessInvoked: boolean;
+  }> {
+    throw new Error("m4_real_process_runner_disabled_for_real_off_cycle");
+  }
+}
+
+export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
+  readonly gatewayId = M4_REAL_GATEWAY_ADAPTER_ID;
+  readonly externalEffects = true as const;
+
+  private readonly runner: ProcessRunner;
+  private readonly env: NodeJS.ProcessEnv;
+  private readonly resolveBin: () => string | null;
+  private readonly timeoutMs: number;
+  private readonly configuredWorkspace?: string;
+  private readonly observations = new Map<string, RealProcessObservation>();
+
+  constructor(options: StudioCursorRealLaunchGatewayOptions) {
+    this.runner = options.processRunner;
+    this.env = options.env ?? process.env;
+    this.resolveBin =
+      options.resolveCursorBin ?? (() => resolveCursorBinPath(this.env));
+    this.timeoutMs = options.defaultTimeoutMs ?? 60_000;
+    this.configuredWorkspace = options.workspaceRoot;
+  }
+
+  async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
+    if (request.adapterRef !== this.gatewayId) {
+      return {
+        outcome: "reject",
+        gatewayId: this.gatewayId,
+        attemptId: request.attemptId,
+        reason: "adapter_ref_mismatch",
+        realProcessInvoked: false,
+        detailCode: "REAL_AGENT_PROFILE_INVALID",
+      };
+    }
+
+    if (!isStudioCursorRealEnabled(this.env)) {
+      return {
+        outcome: "reject",
+        gatewayId: this.gatewayId,
+        attemptId: request.attemptId,
+        reason: "studio_cursor_real_disabled",
+        realProcessInvoked: false,
+        detailCode: "REAL_BOUNDARY_DISABLED",
+      };
+    }
+
+    if (
+      (request.target && request.target.includes("UNRESOLVED")) ||
+      (request.action && request.action.includes("UNRESOLVED"))
+    ) {
+      return {
+        outcome: "reject",
+        gatewayId: this.gatewayId,
+        attemptId: request.attemptId,
+        reason: "unresolved_contract_refused",
+        realProcessInvoked: false,
+        detailCode: "REAL_AGENT_PROFILE_INVALID",
+      };
+    }
+
+    const bin = this.resolveBin();
+    if (!bin) {
+      return {
+        outcome: "fail",
+        gatewayId: this.gatewayId,
+        attemptId: request.attemptId,
+        reason: "cursor_unavailable",
+        realProcessInvoked: false,
+        detailCode: "CURSOR_UNAVAILABLE",
+      };
+    }
+
+    const cwd = request.workspaceRoot ?? this.configuredWorkspace;
+    if (!cwd || cwd.trim() === "") {
+      return {
+        outcome: "reject",
+        gatewayId: this.gatewayId,
+        attemptId: request.attemptId,
+        reason: "workspace_invalid",
+        realProcessInvoked: false,
+        detailCode: "REAL_WORKSPACE_INVALID",
+      };
+    }
+    const resolved = path.resolve(cwd);
+    const execRoot = this.env.SFIA_STUDIO_EXEC_ROOT;
+    if (execRoot) {
+      const root = path.resolve(execRoot);
+      if (resolved !== root && !resolved.startsWith(root + path.sep)) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "workspace_outside_exec_root",
+          realProcessInvoked: false,
+          detailCode: "REAL_WORKSPACE_INVALID",
+        };
+      }
+    }
+
+    // Fixed argv shape — no user-controlled shell / generic command string.
+    const instruction = [
+      "TÂCHE UNIQUE — lecture seule bornée.",
+      `target=${request.target ?? ""}`,
+      `action=${request.action ?? ""}`,
+      `scope=${request.scope ?? ""}`,
+      `fingerprint=${request.semanticFingerprint}`,
+      "Aucune mutation, aucun git remote/commit/push/PR/merge.",
+    ].join("\n");
+
+    const argv = [
+      "agent",
+      "--print",
+      "--workspace",
+      resolved,
+      "--trust",
+      "--sandbox",
+      "enabled",
+      instruction,
+    ];
+
+    try {
+      const invoked = await this.runner.invoke({
+        attemptId: request.attemptId,
+        cwd: resolved,
+        argv,
+        timeoutMs: this.timeoutMs,
+        env: {
+          ...this.env,
+          [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
+        },
+      });
+
+      if (!invoked.realProcessInvoked) {
+        return {
+          outcome: "fail",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "real_process_not_invoked",
+          realProcessInvoked: false,
+          detailCode: "REAL_LAUNCH_FAILED",
+        };
+      }
+
+      this.observations.set(invoked.processRef, {
+        processRef: invoked.processRef,
+        exitCode: invoked.observation?.exitCode ?? null,
+        timedOut: invoked.observation?.timedOut ?? false,
+        stdout: invoked.observation?.stdout ?? "",
+        stderr: invoked.observation?.stderr ?? "",
+        durationMs: invoked.observation?.durationMs ?? 0,
+        realProcessInvoked: true,
+        worktreeRef: resolved,
+      });
+
+      return {
+        outcome: "ack",
+        gatewayId: this.gatewayId,
+        attemptId: request.attemptId,
+        realProcessInvoked: true,
+        processRef: invoked.processRef,
+        worktreeRef: resolved,
+      };
+    } catch {
+      return {
+        outcome: "fail",
+        gatewayId: this.gatewayId,
+        attemptId: request.attemptId,
+        reason: "real_launch_threw",
+        realProcessInvoked: false,
+        detailCode: "REAL_LAUNCH_FAILED",
+      };
+    }
+  }
+
+  async observe(processRef: string): Promise<RealProcessObservation | null> {
+    return this.observations.get(processRef) ?? null;
+  }
+
+  async awaitCompletion(
+    processRef: string,
+  ): Promise<RealProcessObservation | null> {
+    return this.observe(processRef);
+  }
+}
+
+/** Test-only process runner — never spawns Cursor. */
+export class FakeProcessRunner implements ProcessRunner {
+  readonly calls: Array<{
+    attemptId: string;
+    cwd: string;
+    argv: readonly string[];
+  }> = [];
+
+  constructor(
+    private readonly behavior: {
+      realProcessInvoked?: boolean;
+      processRef?: string;
+      throwError?: boolean;
+    } = {},
+  ) {}
+
+  async invoke(input: {
+    attemptId: string;
+    cwd: string;
+    argv: readonly string[];
+    timeoutMs: number;
+    env: NodeJS.ProcessEnv;
+  }): Promise<{
+    processRef: string;
+    realProcessInvoked: boolean;
+  }> {
+    this.calls.push({
+      attemptId: input.attemptId,
+      cwd: input.cwd,
+      argv: input.argv,
+    });
+    if (this.behavior.throwError) {
+      throw new Error("fake_real_process_threw");
+    }
+    return {
+      processRef: this.behavior.processRef ?? `proc:${input.attemptId}`,
+      realProcessInvoked: this.behavior.realProcessInvoked ?? true,
+    };
+  }
+}
+
+/** @deprecated Prefer StudioCursorRealLaunchGateway. */
+export { StudioCursorRealLaunchGateway as CursorCliLaunchGateway };
+/** @deprecated Prefer FakeProcessRunner. */
+export { FakeProcessRunner as FakeRealProcessRunner };
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/launchSafetyJournalPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/launchSafetyJournalPort.ts
new file mode 100644
index 0000000..209c605
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/launchSafetyJournalPort.ts
@@ -0,0 +1,15 @@
+/**
+ * LaunchSafetyJournalPort — Delivery naming aliases.
+ * Canonical definitions live in realLaunchSafetyJournalPort.ts.
+ */
+export type {
+  RealLaunchSafetyJournalPort,
+  LaunchSafetyJournalPort,
+  PersistGateDGrantInput,
+  PersistGateDGrantInput as CreateGrantInput,
+  AtomicConsumeGateDAndCreateFrontierInput,
+  AtomicConsumeGateDAndCreateFrontierInput as AtomicConsumeGrantAndCreateFrontierInput,
+  MarkLaunchedInput,
+  ValidateGrantForStartInput,
+  GrantValidationResult,
+} from "./realLaunchSafetyJournalPort";
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
new file mode 100644
index 0000000..bcd0c3e
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
@@ -0,0 +1,110 @@
+/**
+ * RealExecutionLaunchPort — specialized REAL OA boundary (D-M4-01 Option B).
+ *
+ * Distinct from ExecutionAdapterPort (externalEffects:false forever).
+ * Must NOT be accepted by InjectableExecutionAdapter.
+ */
+
+export type RealLaunchRequest = {
+  readonly attemptId: string;
+  readonly executionContractId: string;
+  readonly executionContractVersion: number;
+  readonly semanticFingerprint: string;
+  readonly selectedAgentRef: string;
+  readonly adapterRef: string;
+  readonly correlationId: string;
+  readonly worktreeBaseHeadSha?: string;
+  /** Server-derived workspace — never a free client command string. */
+  readonly workspaceRoot?: string;
+  /** Structured contract fields for fixed argv — not free client argv. */
+  readonly action?: string;
+  readonly target?: string;
+  readonly scope?: string;
+};
+
+export type RealLaunchAck = {
+  readonly outcome: "ack";
+  readonly gatewayId: string;
+  readonly attemptId: string;
+  readonly realProcessInvoked: true;
+  readonly processRef: string;
+  readonly worktreeRef?: string;
+};
+
+export type RealLaunchReject = {
+  readonly outcome: "reject";
+  readonly gatewayId: string;
+  readonly attemptId: string;
+  readonly reason: string;
+  readonly realProcessInvoked: false;
+  readonly detailCode?:
+    | "REAL_BOUNDARY_DISABLED"
+    | "CURSOR_UNAVAILABLE"
+    | "REAL_WORKSPACE_INVALID"
+    | "REAL_LAUNCH_FAILED"
+    | "REAL_AGENT_PROFILE_INVALID";
+};
+
+export type RealLaunchFailure = {
+  readonly outcome: "fail";
+  readonly gatewayId: string;
+  readonly attemptId: string;
+  readonly reason: string;
+  readonly realProcessInvoked: false | boolean;
+  readonly detailCode?:
+    | "REAL_BOUNDARY_DISABLED"
+    | "CURSOR_UNAVAILABLE"
+    | "REAL_WORKSPACE_INVALID"
+    | "REAL_LAUNCH_FAILED";
+};
+
+export type RealLaunchResult =
+  | RealLaunchAck
+  | RealLaunchReject
+  | RealLaunchFailure;
+
+export type RealProcessObservation = {
+  readonly processRef: string;
+  readonly exitCode: number | null;
+  readonly timedOut: boolean;
+  readonly stdout: string;
+  readonly stderr: string;
+  readonly durationMs: number;
+  readonly realProcessInvoked: boolean;
+  readonly worktreeRef?: string;
+};
+
+/**
+ * Injectable process runner for tests — production gateway uses spawn(shell:false).
+ * Tests MUST inject a fake; never spawn Cursor during REAL-OFF cycle.
+ */
+export interface ProcessRunner {
+  invoke(input: {
+    attemptId: string;
+    cwd: string;
+    argv: readonly string[];
+    timeoutMs: number;
+    env: NodeJS.ProcessEnv;
+  }): Promise<{
+    processRef: string;
+    realProcessInvoked: boolean;
+    observation?: Partial<RealProcessObservation>;
+  }>;
+}
+
+/** @deprecated Prefer ProcessRunner. */
+export type RealProcessRunnerPort = ProcessRunner;
+
+export interface RealExecutionLaunchPort {
+  readonly gatewayId: string;
+  /**
+   * Static marker — REAL boundary may declare external effects.
+   * Fixture ExecutionAdapterPort must remain externalEffects:false.
+   */
+  readonly externalEffects: true;
+  launch(request: RealLaunchRequest): Promise<RealLaunchResult>;
+  observe?(processRef: string): Promise<RealProcessObservation | null>;
+  awaitCompletion?(
+    processRef: string,
+  ): Promise<RealProcessObservation | null>;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realLaunchSafetyJournalPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realLaunchSafetyJournalPort.ts
new file mode 100644
index 0000000..f3373e7
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realLaunchSafetyJournalPort.ts
@@ -0,0 +1,125 @@
+/**
+ * RealLaunchSafetyJournalPort — technical Gate D + launch frontier journal (D-M4-02/04).
+ *
+ * NOT Product Store · NOT Attempt aggregate · NOT Confirmation · TEMPORARY WITH EXIT.
+ */
+import type {
+  ContractSafetyIdentity,
+  GateDGrant,
+  RealLaunchFrontierKind,
+  RealLaunchFrontierRecord,
+  RealLaunchReconcileDisposition,
+} from "../domain/realLaunchSafety";
+
+export type PersistGateDGrantInput = {
+  readonly grantId: string;
+  readonly executionContractId: string;
+  readonly executionContractVersion: number;
+  readonly semanticFingerprint: string;
+  readonly attemptId: string;
+  readonly selectedAgentRef: string;
+  readonly actorId: string;
+  readonly issuedAt: string;
+  readonly expiresAt: string;
+  readonly correlationId?: string;
+};
+
+/** @deprecated Prefer PersistGateDGrantInput. */
+export type CreateGrantInput = PersistGateDGrantInput;
+
+export type AtomicConsumeGateDAndCreateFrontierInput = {
+  readonly grantId: string;
+  readonly attemptId: string;
+  readonly occurredAt: string;
+  readonly identity: ContractSafetyIdentity;
+  readonly selectedAgentRef: string;
+  readonly actorId: string;
+  readonly correlationId: string;
+};
+
+/** @deprecated Prefer AtomicConsumeGateDAndCreateFrontierInput. */
+export type AtomicConsumeGrantAndCreateFrontierInput =
+  AtomicConsumeGateDAndCreateFrontierInput;
+
+export type MarkLaunchedInput = {
+  readonly attemptId: string;
+  readonly occurredAt: string;
+  readonly identity: ContractSafetyIdentity;
+  readonly selectedAgentRef: string;
+  readonly actorId: string;
+  readonly grantId: string;
+  readonly correlationId: string;
+  readonly processRef: string;
+  readonly payload?: Record<string, unknown> | unknown;
+};
+
+export type ValidateGrantForStartInput = {
+  readonly grantId: string;
+  readonly attemptId: string;
+  readonly actorId: string;
+  readonly selectedAgentRef: string;
+  readonly identity: ContractSafetyIdentity;
+  readonly nowIso: string;
+};
+
+export type GrantValidationResult =
+  | { readonly ok: true; readonly grant: GateDGrant }
+  | {
+      readonly ok: false;
+      readonly reason:
+        | "GATE_D_REQUIRED"
+        | "GATE_D_INVALID"
+        | "GATE_D_EXPIRED"
+        | "GATE_D_ALREADY_CONSUMED"
+        | "GATE_D_BINDING_MISMATCH";
+    };
+
+/**
+ * Canonical M4 journal port used by StartExecution + GrantRealExecutionGate.
+ * Implementations may also expose transitional aliases (createGrant, markLaunched, …).
+ */
+export interface RealLaunchSafetyJournalPort {
+  persistGateDGrant(input: PersistGateDGrantInput): Promise<GateDGrant>;
+  findGateDGrant(grantId: string): Promise<GateDGrant | null>;
+  findActiveGateDGrantForAttempt(attemptId: string): Promise<GateDGrant | null>;
+  consumeGateDAndAppendCreated(
+    input: AtomicConsumeGateDAndCreateFrontierInput,
+  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }>;
+  appendLaunched(input: MarkLaunchedInput): Promise<RealLaunchFrontierRecord>;
+  findFrontierByAttempt(
+    attemptId: string,
+  ): Promise<RealLaunchFrontierRecord[]>;
+  findFrontierByIdentity(
+    identity: ContractSafetyIdentity,
+  ): Promise<RealLaunchFrontierRecord[]>;
+  hasAmbiguousFrontier(identity: ContractSafetyIdentity): Promise<boolean>;
+  reconcileDispositionForIdentity(
+    identity: ContractSafetyIdentity,
+  ): Promise<RealLaunchReconcileDisposition>;
+  hasKindForAttempt(
+    attemptId: string,
+    kind: RealLaunchFrontierKind,
+  ): Promise<boolean>;
+}
+
+/**
+ * Extended journal surface used by transitional GrantGateD / Memory journal.
+ * Includes both task names and alternate names.
+ */
+export interface LaunchSafetyJournalPort extends RealLaunchSafetyJournalPort {
+  createGrant(input: CreateGrantInput): Promise<GateDGrant>;
+  findGrant(grantId: string): Promise<GateDGrant | null>;
+  validateGrantForStart(
+    input: ValidateGrantForStartInput,
+  ): Promise<GrantValidationResult>;
+  atomicConsumeGrantAndCreateFrontier(
+    input: AtomicConsumeGrantAndCreateFrontierInput,
+  ): Promise<{ grant: GateDGrant; created: RealLaunchFrontierRecord }>;
+  markLaunched(input: MarkLaunchedInput): Promise<RealLaunchFrontierRecord>;
+  findFrontierByAttemptId(
+    attemptId: string,
+  ): Promise<RealLaunchFrontierRecord[]>;
+  findFrontierByContractFingerprint(
+    identity: ContractSafetyIdentity,
+  ): Promise<RealLaunchFrontierRecord[]>;
+}

```

## Verdict

**M4 DELIVERY REAL-OFF IMPLEMENTED CANDIDATE —**
D-M4-01 TO D-M4-05 IMPLEMENTATION ALIGNED —
SPECIALIZED REAL BOUNDARY PRESENT —
FIXTURE PORT PRESERVED —
DURABLE CREATED/LAUNCHED FRONTIER PRESENT —
GATE D GD-1 IMPLEMENTED AND TESTED —
BOUNDED READ-ONLY AGENT PROFILE IMPLEMENTED —
OPS1 PRIMITIVES HARVESTED WITHOUT RUNTIME COUPLING —
CRASH/REPLAY FAIL-CLOSED PROVEN —
NO DUPLICATE REAL LAUNCH AFTER RESTART PROVEN WITH TEST DOUBLES —
NO REAL→FIXTURE FALLBACK PROVEN —
CURSOR REAL PROCESS NOT ENTERED —
REAL FLAG OFF —
M4 EXIT PROOF NOT YET SATISFIED —
M5 NOT AUTHORIZED —
NO PROJECT COMMIT/PUSH/PR —
READY FOR CHATGPT REVIEW / MORRIS M4 DELIVERY VALIDATION GATE
