# PR #291 post-merge validation & lot closure — Review pack FULL

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-29 14:10:52 CEST (+0200) |
| **Repo** | mcleland147/sfia-workspace |
| **Workspace** | /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge |
| **Cycle** | 14 — Post-merge (+9/12/13/15) |
| **Profil** | Capitalization · Standard renforcé · Critical context |
| **Gate consommé** | `GO POST-MERGE VALIDATE AND CLOSE T-A7 HARD T-A6 ATOMICITY AND BOUNDED PERSISTENCE FOUNDATION LOT — PR #291 — MAIN 7916066 — NO HARD OR T-A6 CLOSURE IAM PRODUCT PERSISTENCE DELIVERY OR CUTOVER` |
| **Branche/HEAD/upstream** | `delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation` @ `9c125059f3323a7df862b96d32f1940b1cbdefc1` → `origin/delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation` |
| **Main** | `7916066310777abce4fd5a64ff0c87759c375fd6` |
| **Handoff parent** | `ea2fad2e8ed84cd4943a0d7456d82a613667524b` / blob `b6a46c8986484503f3e47b95adb91e4a2b1d8f6e` |
| **Niveau** | FULL |

## Truth check

PASSED — workspace correct · branche/HEAD/upstream inchangés · origin/main=`7916066310777abce4fd5a64ff0c87759c375fd6` · parents exacts · source branch présente @ `9c125059f3323a7df862b96d32f1940b1cbdefc1` · tracked propre · staged vide · untracked `.tmp-sfia-review/**` only · aucune opération inachevée · aucun checkout main · aucune modification versionnée.

## PR #291

| Champ | Valeur |
|-------|--------|
| State | MERGED |
| URL | https://github.com/mcleland147/sfia-workspace/pull/291 |
| mergedAt | 2026-07-29T11:38:48Z |
| mergedBy | mcleland147 |
| mergeCommit | `7916066310777abce4fd5a64ff0c87759c375fd6` |
| headRefOid | `9c125059f3323a7df862b96d32f1940b1cbdefc1` (inchangé) |
| autoMerge | null |
| delete-branch | non |
| admin override | non |
| stratégie | merge commit |

## Merge commit / parents / branche source

| Champ | Valeur |
|-------|--------|
| Merge | `7916066310777abce4fd5a64ff0c87759c375fd6` |
| Parent 1 | `1068ddb37dd8eb9e94c2fca9963fe32ad79a801f` |
| Parent 2 | `9c125059f3323a7df862b96d32f1940b1cbdefc1` |
| Message | Merge pull request #291 … |
| Source remote | présente @ `9c125059f3323a7df862b96d32f1940b1cbdefc1` |

## 12 fichiers intégrés (blobs main == source tip)

A	projects/sfia-studio/app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts
A	projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts
M	projects/sfia-studio/app/lib/d1/db.ts
M	projects/sfia-studio/app/lib/d1/index.ts
A	projects/sfia-studio/app/lib/platform/t-a7/boundedPersistenceDecision.ts
A	projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts
A	projects/sfia-studio/app/lib/platform/t-a7/hardTa6FoundationAggregation.ts
M	projects/sfia-studio/app/lib/platform/t-a7/index.ts
A	projects/sfia-studio/app/lib/platform/t-a7/projectCycleAtomicCoordinator.ts
A	projects/sfia-studio/app/lib/platform/t-a7/tA6FoundationStatus.ts
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/20-hard-ta6-atomicity-minimal-persistence-foundation-lot.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md

Stat: 12 files changed, 1603 insertions(+), 70 deletions(-)

## Fichiers interdits absents

Aucun package.json / lockfile / method/** / .github/** / HTTP / UI / IAM / infra distante dans le delta.

## CI post-merge

- Run: 30448369070
- URL: https://github.com/mcleland147/sfia-workspace/actions/runs/30448369070
- status=completed · conclusion=success · headSha=7916066310777abce4fd5a64ff0c87759c375fd6
- Jobs SUCCESS: Detect · Build and validate · Required Gate
- Steps SUCCESS: Setup Node.js · Install · Typecheck · Lint · Build · Unit tests Vitest · Modeled governance · Secret pattern scan · Trailing whitespace

## HARD (extrait substantiel origin/main)

```typescript
/**
 * T-A7 HARD foundation — INTERNAL_ONLY control contract.
 * Documents R-T-A3-1/2/3/4 evidence without closing HARD.
 * CI green alone never closes HARD; deliveryReady always false.
 */

export type HardReserveId =
  | "R_T_A3_1"
  | "R_T_A3_2"
  | "R_T_A3_3"
  | "R_T_A3_4";

export type HardEvidenceState =
  | "NONE"
  | "PARTIAL"
  | "FOUNDATION_PRESENT"
  | "UNKNOWN";

export interface HardReserveRecord {
  readonly id: HardReserveId;
  readonly severity: "HARD" | "OPEN";
  readonly label: string;
  readonly evidenceState: HardEvidenceState;
  readonly proofAvailable: readonly string[];
  readonly proofMissing: readonly string[];
  readonly openDependencies: readonly string[];
  readonly remainsOpen: true;
}

export interface HardFoundationSnapshot {
  readonly schemaVersion: "t-a7-hard-foundation.1";
  readonly accessSurface: "INTERNAL_ONLY";
  readonly evaluatedAt: string;
  readonly lifecycle: "REDUCED" | "OPEN";
  readonly openHard: true;
  readonly remainsOpen: true;
  readonly deliveryReady: false;
  readonly cutoverReady: false;
  readonly closedByCiGreen: false;
  readonly actionAuthorized: "CONTINUE_FOUNDATION_ONLY";
  readonly actionForbidden: readonly [
    "DELIVERY",
    "CUTOVER",
    "CLOSE_HARD",
    "IGNORE_HARD",
  ];
  readonly stopReason: string;
  readonly reserves: readonly HardReserveRecord[];
  readonly reductionEvidence: readonly string[];
  readonly closureCriteriaUnmet: readonly string[];
  readonly mutable: false;
  readonly writeCommands: false;
  readonly iam: "NOT_SELECTED";
  readonly persistenceProduct: "NOT_SELECTED";
}

export interface HardFoundationInput {
  readonly foundationPresent?: boolean;
  readonly evaluatedAt?: string;
}

function freezeDeep<T extends object>(value: T): T {
  Object.freeze(value);
  for (const v of Object.values(value)) {
    if (v && typeof v === "object" && !Object.isFrozen(v)) {
      freezeDeep(v as object);
    }
  }
  return value;
}

/**
 * Evaluate HARD foundation. Always remains OPEN HARD.
 * REDUCED only means simulation/foundation contracts exist.
 */
export function evaluateHardFoundation(
  input: HardFoundationInput = {},
): HardFoundationSnapshot {
  const foundationPresent = input.foundationPresent ?? true;
  const evaluatedAt = input.evaluatedAt ?? new Date().toISOString();
  const evidence: HardEvidenceState = foundationPresent
    ? "FOUNDATION_PRESENT"
    : "PARTIAL";

  const reserves: readonly HardReserveRecord[] = [
    {
      id: "R_T_A3_1",
      severity: "HARD",
      label: "Critical acknowledge / authority (no public Critical ack API)",
      evidenceState: evidence,
      proofAvailable: foundationPresent
        ? ["hard-foundation-contract", "fail-closed-hold"]
        : [],
      proofMissing: [
        "authenticated Critical acknowledge API",
        "IAM-backed authority",
        "Morris GO for real Critical execution",
      ],
      openDependencies: ["IAM", "DELIVERY_GATE"],
      remainsOpen: true,
    },
    {
      id: "R_T_A3_2",
      severity: "HARD",
      label: "Decision↔LPS/Epistemic and Project↔Cycle durable atomicity",
      evidenceState: evidence,
      proofAvailable: foundationPresent
        ? [
            "bounded-local-atomic-audit",
            "project-cycle-coordinator-sim",
            "idempotency-keys",
          ]
        : [],
      proofMissing: [
        "cross-store durable Project↔Cycle transaction",
        "authorized non-prod rollback drill",
        "production concurrency proof",
      ],
      openDependencies: ["R1", "PERSISTENCE_PRODUCT"],
      remainsOpen: true,
    },
    {
      id: "R_T_A3_3",
      severity: "OPEN",
      label: "Authority registry (in-memory)",
      evidenceState: "PARTIAL",
      proofAvailable: ["memory-authority-placeholder"],
      proofMissing: ["durable authority registry"],
      openDependencies: ["IAM"],
      remainsOpen: true,
    },
    {
      id: "R_T_A3_4",
      severity: "OPEN",
      label: "Enum mapping hygiene",
      evidenceState: "PARTIAL",
      proofAvailable: [],
      proofMissing: ["full enum hygiene audit"],
      openDependencies: [],
      remainsOpen: true,
    },
  ];

  return freezeDeep({
    schemaVersion: "t-a7-hard-foundation.1",
    accessSurface: "INTERNAL_ONLY",
    evaluatedAt,
    lifecycle: foundationPresent ? "REDUCED" : "OPEN",
    openHard: true,
    remainsOpen: true,
    deliveryReady: false,
    cutoverReady: false,
    closedByCiGreen: false,
    actionAuthorized: "CONTINUE_FOUNDATION_ONLY",
    actionForbidden: [
      "DELIVERY",
      "CUTOVER",
      "CLOSE_HARD",
      "IGNORE_HARD",
    ],
    stopReason:
      "HARD remains OPEN HARD — authority/atomicity unresolved; SC-07 / TR-S-08 apply.",
    reserves,
    reductionEvidence: foundationPresent
      ? [
          "INTERNAL_ONLY hard foundation contract",
          "bounded local atomic audit (node:sqlite)",
          "project↔cycle coordinator with honest productionRollbackProven=false",
        ]
      : [],
    closureCriteriaUnmet: [
      "R-T-A3-1 authenticated Critical ack",
      "R-T-A3-2 durable cross-store atomicity",
      "Morris dedicated HARD closure gate",
      "No IAM/delivery/production requirement residual",
    ],
    mutable: false,
    writeCommands: false,
    iam: "NOT_SELECTED",
    persistenceProduct: "NOT_SELECTED",
  });
}

export function assertHardNeverClosedByCi(
  snap: HardFoundationSnapshot,
): void {
  if (snap.openHard !== true || snap.remainsOpen !== true) {
    throw new Error("HARD must remain OPEN HARD in this lot.");
  }
  if (snap.deliveryReady !== false || snap.closedByCiGreen !== false) {
    throw new Error("HARD must never be delivery-ready or closed by CI.");
  }
}
```

Vérifié: INTERNAL_ONLY · R-T-A3-1…4 · SC-07/TR-S-08 · openHard/remainsOpen=true · deliveryReady/cutoverReady/closedByCiGreen=false · IAM/persistenceProduct NOT_SELECTED · **REDUCED — REMAINS OPEN**

## T-A6 (extrait substantiel)

```typescript
/**
 * T-A6 foundation status — INTERNAL_ONLY.
 * Advances evidence model without declaring T-A6 COMPLETE.
 */

import { evaluateBoundedClaim } from "./boundedClaimEvaluator";

export type TA6CapabilityId =
  | "D1_EVIDENCE"
  | "D2_REVIEW_BUNDLE"
  | "D3_CLAIM_EVALUATION"
  | "D4_MATURITY"
  | "D5_NEXT_GATE"
  | "R_M01_BOUNDED_EVALUATOR"
  | "T6_C11_RESERVES"
  | "T6_C15_MORRIS_GO";

export interface TA6CapabilityRow {
  readonly id: TA6CapabilityId;
  readonly contract: string;
  readonly state: "PRESENT" | "PARTIAL" | "MISSING";
  readonly reducibleInThisLot: boolean;
  readonly note: string;
}

export interface TA6FoundationSnapshot {
  readonly schemaVersion: "t-a7-ta6-foundation.1";
  readonly accessSurface: "INTERNAL_ONLY";
  readonly evaluatedAt: string;
  readonly status: "FOUNDATION_ADVANCED";
  readonly remainsIncomplete: true;
  readonly tA6Complete: false;
  readonly optionAComplete: false;
  readonly rM01RemainsOpen: true;
  readonly capabilities: readonly TA6CapabilityRow[];
  readonly sampleSurclaimGuard: "BLOCKED" | "UNSUPPORTED";
  readonly mutable: false;
  readonly iam: "NOT_SELECTED";
  readonly persistenceProduct: "NOT_SELECTED";
}

export interface TA6FoundationInput {
  readonly evaluatedAt?: string;
  readonly foundationEvidencePresent?: boolean;
}

export function evaluateTA6Foundation(
  input: TA6FoundationInput = {},
): TA6FoundationSnapshot {
  const evaluatedAt = input.evaluatedAt ?? new Date().toISOString();
  const foundationEvidencePresent = input.foundationEvidencePresent ?? true;

  const capabilities: readonly TA6CapabilityRow[] = [
    {
      id: "D1_EVIDENCE",
      contract: "Evidence register/ingest/verify (OA memory)",
      state: "PRESENT",
      reducibleInThisLot: false,
      note: "Already integrated in-memory; not closed by this lot.",
    },
    {
      id: "D2_REVIEW_BUNDLE",
      contract: "ReviewBundle lifecycle",
      state: "PRESENT",
      reducibleInThisLot: false,
      note: "Memory-bounded OA capability.",
    },
    {
      id: "D3_CLAIM_EVALUATION",
      contract: "Evaluate/confirm/reject claims",
      state: "PRESENT",
      reducibleInThisLot: true,
      note: "Bounded anti-surclaim evaluator reinforced; production ClaimEvaluator ≠ closed.",
    },
    {
      id: "D4_MATURITY",
      contract: "Maturity propose/confirm/downgrade",
      state: "PRESENT",
      reducibleInThisLot: false,
      note: "Existing OA memory path.",
    },
    {
      id: "D5_NEXT_GATE",
      contract: "RecommendNextGate read-only",
      state: "PRESENT",
      reducibleInThisLot: false,
      note: "Auto-launch forbidden preserved.",
    },
    {
      id: "R_M01_BOUNDED_EVALUATOR",
      contract: "Governance ClaimEvaluator readiness",
      state: foundationEvidencePresent ? "PARTIAL" : "MISSING",
      reducibleInThisLot: true,
      note: "Further reduced via foundation evidence; R-M01 remains OPEN.",
    },
    {
      id: "T6_C11_RESERVES",
      contract: "R-M01 / U-M02 / C1–C4 resolved or bounded",
      state: "MISSING",
      reducibleInThisLot: false,
      note: "Blocks T-A6 COMPLETE declaration.",
    },
    {
      id: "T6_C15_MORRIS_GO",
      contract: "GO DECLARE T-A6 COMPLETE",
      state: "MISSING",
      reducibleInThisLot: false,
      note: "Requires distinct Morris gate.",
    },
  ];

  const surclaim = evaluateBoundedClaim({
    claimId: "T_A6_COMPLETE",
    tA6Complete: false,
    hardOpen: true,
  });

  return Object.freeze({
    schemaVersion: "t-a7-ta6-foundation.1",
    accessSurface: "INTERNAL_ONLY",
    evaluatedAt,
    status: "FOUNDATION_ADVANCED",
    remainsIncomplete: true,
    tA6Complete: false,
    optionAComplete: false,
    rM01RemainsOpen: true,
    capabilities: Object.freeze(capabilities.map((c) => Object.freeze({ ...c }))),
    sampleSurclaimGuard: surclaim.status === "BLOCKED" ? "BLOCKED" : "UNSUPPORTED",
    mutable: false,
    iam: "NOT_SELECTED",
    persistenceProduct: "NOT_SELECTED",
  });
}
```

Vérifié: FOUNDATION_ADVANCED · remainsIncomplete · tA6Complete=false · T6-C11/C15 MISSING · rM01RemainsOpen · **FOUNDATION ADVANCED — REMAINS INCOMPLETE**

## Persistance locale (décision + store + schéma)

```typescript
/**
 * Bounded local persistence decision — INTERNAL_ONLY.
 * Product persistence remains NOT_SELECTED. Git remains method truth.
 * Technology already present: node:sqlite via D1 (no new npm dependency).
 */

export interface BoundedPersistenceDecision {
  readonly decision: "SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE";
  readonly technology: "node:sqlite via D1";
  readonly productPersistence: "NOT_SELECTED";
  readonly gitRemainsMethodTruth: true;
  readonly iam: "NOT_SELECTED";
  readonly secrets: false;
  readonly network: false;
  readonly reversible: true;
  readonly schemaVersion: "t-a7-bounded-persistence-decision.1";
  readonly accessSurface: "INTERNAL_ONLY";
}

export function describeBoundedPersistenceDecision(): BoundedPersistenceDecision {
  return Object.freeze({
    decision: "SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE",
    technology: "node:sqlite via D1",
    productPersistence: "NOT_SELECTED",
    gitRemainsMethodTruth: true,
    iam: "NOT_SELECTED",
    secrets: false,
    network: false,
    reversible: true,
    schemaVersion: "t-a7-bounded-persistence-decision.1",
    accessSurface: "INTERNAL_ONLY",
  });
}
```

```typescript
/**
 * Bounded local atomic audit — uses existing D1 node:sqlite.
 * NOT product persistence SELECTED. Git remains method truth.
 * Implements ProjectCycleAuditPort without platform importing d1.
 */

import type { DatabaseSync } from "node:sqlite";
import { openD1Db, nowIso } from "@/lib/d1/db";
import type { ProjectCycleAuditPort } from "@/lib/platform/t-a7/projectCycleAtomicCoordinator";

export const BOUNDED_ATOMIC_AUDIT_SCHEMA_VERSION =
  "t-a7-bounded-atomic-audit.1" as const;

export type BoundedAtomicPhase =
  | "prepare"
  | "apply_project"
  | "apply_cycle"
  | "verify"
  | "commit"
  | "rollback";

export type BoundedAtomicOutcome =
  | "IN_PROGRESS"
  | "COMMITTED"
  | "ROLLED_BACK"
  | "FAILED"
  | "CONFLICT";

export interface BoundedAtomicAuditRecord {
  readonly opId: string;
  readonly idempotencyKey: string;
  readonly phase: BoundedAtomicPhase;
  readonly outcome: BoundedAtomicOutcome;
  readonly correlationId: string;
  readonly projectRef: string | null;
  readonly cycleRef: string | null;
  readonly payloadJson: string;
  readonly createdAt: string;
  readonly schemaVersion: typeof BOUNDED_ATOMIC_AUDIT_SCHEMA_VERSION;
}

export interface AppendAtomicAuditInput {
  readonly opId: string;
  readonly idempotencyKey: string;
  readonly phase: BoundedAtomicPhase;
  readonly outcome: BoundedAtomicOutcome;
  readonly correlationId: string;
  readonly projectRef?: string | null;
  readonly cycleRef?: string | null;
  readonly payload?: unknown;
}

export class BoundedAtomicAuditStore implements ProjectCycleAuditPort {
  constructor(private readonly db: DatabaseSync = openD1Db()) {}

  append(input: AppendAtomicAuditInput): BoundedAtomicAuditRecord {
    const createdAt = nowIso();
    const record: BoundedAtomicAuditRecord = {
      opId: input.opId,
      idempotencyKey: input.idempotencyKey,
      phase: input.phase,
      outcome: input.outcome,
      correlationId: input.correlationId,
      projectRef: input.projectRef ?? null,
      cycleRef: input.cycleRef ?? null,
      payloadJson: JSON.stringify(input.payload ?? {}),
      createdAt,
      schemaVersion: BOUNDED_ATOMIC_AUDIT_SCHEMA_VERSION,
    };

    this.db.exec("BEGIN IMMEDIATE");
    try {
      this.db
        .prepare(
          `INSERT INTO d1_atomic_audit (
            op_id, idempotency_key, phase, outcome, correlation_id,
            project_ref, cycle_ref, payload_json, created_at, schema_version
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        )
        .run(
          record.opId,
          record.idempotencyKey,
          record.phase,
          record.outcome,
          record.correlationId,
          record.projectRef,
          record.cycleRef,
          record.payloadJson,
          record.createdAt,
          record.schemaVersion,
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
    return Object.freeze(record);
  }

  findByIdempotencyKey(key: string): BoundedAtomicAuditRecord[] {
    const rows = this.db
      .prepare(
        `SELECT * FROM d1_atomic_audit
         WHERE idempotency_key = ?
         ORDER BY created_at ASC`,
      )
      .all(key) as Record<string, unknown>[];
    return rows.map(mapRow);
  }

  listByOpId(opId: string): BoundedAtomicAuditRecord[] {
    const rows = this.db
      .prepare(
        `SELECT * FROM d1_atomic_audit
         WHERE op_id = ?
         ORDER BY created_at ASC`,
      )
      .all(opId) as Record<string, unknown>[];
    return rows.map(mapRow);
  }

  clearForTests(): void {
    this.db.exec("DELETE FROM d1_atomic_audit");
  }
}

function mapRow(row: Record<string, unknown>): BoundedAtomicAuditRecord {
  return Object.freeze({
    opId: String(row.op_id),
    idempotencyKey: String(row.idempotency_key),
    phase: String(row.phase) as BoundedAtomicPhase,
    outcome: String(row.outcome) as BoundedAtomicOutcome,
    correlationId: String(row.correlation_id),
    projectRef: row.project_ref == null ? null : String(row.project_ref),
    cycleRef: row.cycle_ref == null ? null : String(row.cycle_ref),
    payloadJson: String(row.payload_json),
    createdAt: String(row.created_at),
    schemaVersion: BOUNDED_ATOMIC_AUDIT_SCHEMA_VERSION,
  });
}
```

Schéma db.ts: CREATE TABLE IF NOT EXISTS d1_atomic_audit + indexes — réversible.

Vérifié: node:sqlite via D1 · local/dev/test · pas PII/secret/réseau/IAM/dep · product NOT_SELECTED · Git method truth

## Atomicité Project↔Cycle (extrait + invariants)

```typescript
/**
 * Project↔Cycle atomic coordinator — local foundation.
 * Uses in-memory unit of work + optional audit port (injected; no platform→d1 import).
 * productionRollbackProven remains false; not a product API.
 */

import { randomUUID } from "node:crypto";
import {
  runIdempotentRollback,
  runSimulatedAtomicOperation,
  type AtomicOperationResult,
} from "./simulatedAtomicOperation";

export type ProjectCycleAuditPhase =
  | "prepare"
  | "apply_project"
  | "apply_cycle"
  | "verify"
  | "commit"
  | "rollback";

export type ProjectCycleAuditOutcome =
  | "IN_PROGRESS"
  | "COMMITTED"
  | "ROLLED_BACK"
  | "FAILED"
  | "CONFLICT";

/** Injected audit port — implemented by D1 BoundedAtomicAuditStore in tests/adapters. */
export interface ProjectCycleAuditPort {
  append(input: {
    readonly opId: string;
    readonly idempotencyKey: string;
    readonly phase: ProjectCycleAuditPhase;
    readonly outcome: ProjectCycleAuditOutcome;
    readonly correlationId: string;
    readonly projectRef?: string | null;
    readonly cycleRef?: string | null;
    readonly payload?: unknown;
  }): void;
}

export interface ProjectCycleDraft {
  readonly projectId: string;
  readonly projectName: string;
  readonly cycleId: string;
  readonly cycleLabel: string;
  readonly linked: boolean;
  readonly version: number;
}

export type ProjectCycleFailAt =
  | "prepare"
  | "apply_project"
  | "apply_cycle"
  | "verify"
  | "rollback";

export interface ProjectCycleAtomicInput {
  readonly idempotencyKey: string;
  readonly initial?: ProjectCycleDraft;
  readonly failAt?: ProjectCycleFailAt;
  readonly rollbackFails?: boolean;
  /** When set, audit journal entries are appended via this port. */
  readonly auditStore?: ProjectCycleAuditPort;
}

export interface ProjectCycleAtomicResult {
  readonly schemaVersion: "t-a7-project-cycle-atomic.1";
  readonly accessSurface: "INTERNAL_ONLY";
  readonly opId: string;
  readonly idempotencyKey: string;
  readonly outcome: AtomicOperationResult<ProjectCycleDraft>["outcome"];
  readonly finalDraft: ProjectCycleDraft;
  readonly partialValidated: false;
  readonly productionRollbackProven: false;
  readonly crossStoreDurable: false;
  readonly auditPersisted: boolean;
  readonly conflict: boolean;
  readonly persistence: "BOUNDED_LOCAL_AUDIT_OPTIONAL" | "NONE_IN_MEMORY_ONLY";
  readonly iam: "NOT_SELECTED";
}

const completedKeys = new Map<string, ProjectCycleAtomicResult>();

function defaultDraft(): ProjectCycleDraft {
  return {
    projectId: `proj-${randomUUID()}`,
    projectName: "draft-project",
    cycleId: `cycle-${randomUUID()}`,
    cycleLabel: "draft-cycle",
    linked: false,
    version: 0,
  };
}

/**
 * Run a bounded Project↔Cycle unit of work.
 * Same idempotency key returns prior committed/rolled-back result (conflict-safe).
 */
export function runProjectCycleAtomicOperation(
  input: ProjectCycleAtomicInput,
): ProjectCycleAtomicResult {
  const prior = completedKeys.get(input.idempotencyKey);
  if (prior) {
    return Object.freeze({
      ...prior,
      conflict: true,
    });
  }

  const opId = randomUUID();
  const audit = input.auditStore ?? null;

  const mapFail =
    input.failAt === "apply_project"
      ? "apply"
      : input.failAt === "apply_cycle"
        ? "verify"
        : input.failAt === "prepare"
// ... remainder on main ...
4: * productionRollbackProven remains false; not a product API.
30:export interface ProjectCycleAuditPort {
33:    readonly idempotencyKey: string;
60:  readonly idempotencyKey: string;
65:  readonly auditStore?: ProjectCycleAuditPort;
72:  readonly idempotencyKey: string;
75:  readonly partialValidated: false;
76:  readonly productionRollbackProven: false;
77:  readonly crossStoreDurable: false;
79:  readonly conflict: boolean;
84:const completedKeys = new Map<string, ProjectCycleAtomicResult>();
99: * Same idempotency key returns prior committed/rolled-back result (conflict-safe).
104:  const prior = completedKeys.get(input.idempotencyKey);
108:      conflict: true,
133:      idempotencyKey: input.idempotencyKey,
176:        idempotencyKey: input.idempotencyKey,
185:        idempotencyKey: input.idempotencyKey,
194:        idempotencyKey: input.idempotencyKey,
211:        idempotencyKey: input.idempotencyKey,
226:    idempotencyKey: input.idempotencyKey,
229:    partialValidated: false,
230:    productionRollbackProven: false,
231:    crossStoreDurable: false,
233:    conflict: false,
246:    completedKeys.set(input.idempotencyKey, result);
252:/** Test helper: clear idempotency cache. */
254:  completedKeys.clear();
275:        partialValidated: false as const,
278:      productionRollbackProven: false,
295:    partialValidated: false,
296:    productionRollbackProven: false,
```

Vérifié: prepare/apply/verify/commit|rollback · partialValidated=false · idempotency+conflict · rollback idempotent · ROLLBACK_FAILED honnête · productionRollbackProven=false · crossStoreDurable=false · cache process-local · **platform n'importe pas D1** (port injecté)

## Agrégation INTERNAL_ONLY

```typescript
/**
 * Consolidated INTERNAL_ONLY foundation view: HARD + T-A6 + atomicity + persistence.
 */

import { evaluateHardFoundation } from "./hardBlockerFoundation";
import { evaluateTA6Foundation } from "./tA6FoundationStatus";
import { queryBlockerAggregation } from "./blockerAggregation";
import { describeBoundedPersistenceDecision } from "./boundedPersistenceDecision";

export interface HardTa6FoundationAggregation {
  readonly schemaVersion: "t-a7-hard-ta6-foundation-agg.1";
  readonly accessSurface: "INTERNAL_ONLY";
  readonly evaluatedAt: string;
  readonly hard: ReturnType<typeof evaluateHardFoundation>;
  readonly tA6: ReturnType<typeof evaluateTA6Foundation>;
  readonly blockers: ReturnType<typeof queryBlockerAggregation>;
  readonly persistence: ReturnType<typeof describeBoundedPersistenceDecision>;
  readonly b5RemainsOpen: true;
  readonly r1FurtherReduced: true;
  readonly rM01FurtherReduced: true;
  readonly hardRemainsOpenHard: true;
  readonly tA6RemainsIncomplete: true;
  readonly tA7Open: true;
  readonly runReady: false;
  readonly deliveryAuthorized: false;
  readonly cutoverAuthorized: false;
  readonly iam: "NOT_SELECTED";
  readonly mutable: false;
  readonly adminUi: false;
  readonly writeCommands: false;
  readonly httpRoute: false;
}

export function queryHardTa6FoundationAggregation(
  evaluatedAt = new Date().toISOString(),
): HardTa6FoundationAggregation {
  const hard = evaluateHardFoundation({
    foundationPresent: true,
    evaluatedAt,
  });
  const tA6 = evaluateTA6Foundation({
    foundationEvidencePresent: true,
    evaluatedAt,
  });
  const blockers = queryBlockerAggregation({
    b5FoundationPresent: true,
    r1SimulationEvidencePresent: true,
    rM01FoundationPresent: true,
    evaluatedAt,
  });
  const persistence = describeBoundedPersistenceDecision();

  return Object.freeze({
    schemaVersion: "t-a7-hard-ta6-foundation-agg.1",
    accessSurface: "INTERNAL_ONLY",
    evaluatedAt,
    hard,
    tA6,
    blockers,
    persistence,
    b5RemainsOpen: true,
    r1FurtherReduced: true,
    rM01FurtherReduced: true,
    hardRemainsOpenHard: true,
    tA6RemainsIncomplete: true,
    tA7Open: true,
    runReady: false,
    deliveryAuthorized: false,
    cutoverAuthorized: false,
    iam: "NOT_SELECTED",
    mutable: false,
    adminUi: false,
    writeCommands: false,
    httpRoute: false,
  });
}
```

## Tests du lot (complet)

```typescript
/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { resetD1DbForTests } from "@/lib/d1/db";
import { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
import { describeBoundedPersistenceDecision } from "@/lib/platform/t-a7/boundedPersistenceDecision";
import {
  assertHardNeverClosedByCi,
  evaluateHardFoundation,
} from "@/lib/platform/t-a7/hardBlockerFoundation";
import { evaluateTA6Foundation } from "@/lib/platform/t-a7/tA6FoundationStatus";
import {
  resetProjectCycleAtomicCacheForTests,
  runProjectCycleAtomicOperation,
  runProjectCycleIdempotentRollback,
} from "@/lib/platform/t-a7/projectCycleAtomicCoordinator";
import { queryHardTa6FoundationAggregation } from "@/lib/platform/t-a7/hardTa6FoundationAggregation";
import { readMethodModeHold } from "@/lib/d1/methodModeHold";
import { queryOperationalReadiness } from "@/lib/d1/operationalReadiness";
import { evaluateBoundedClaim } from "@/lib/platform/t-a7/boundedClaimEvaluator";

describe("T-A7 HARD foundation", () => {
  it("reduces HARD with foundation evidence but remains OPEN HARD", () => {
    const snap = evaluateHardFoundation({ foundationPresent: true });
    expect(snap.lifecycle).toBe("REDUCED");
    expect(snap.openHard).toBe(true);
    expect(snap.remainsOpen).toBe(true);
    expect(snap.deliveryReady).toBe(false);
    expect(snap.closedByCiGreen).toBe(false);
    expect(snap.accessSurface).toBe("INTERNAL_ONLY");
    expect(snap.iam).toBe("NOT_SELECTED");
    assertHardNeverClosedByCi(snap);
  });

  it("keeps UNKNOWN/PARTIAL honesty and forbids CI closure", () => {
    const snap = evaluateHardFoundation({ foundationPresent: false });
    expect(snap.lifecycle).toBe("OPEN");
    expect(snap.reserves.every((r) => r.remainsOpen)).toBe(true);
    expect(() => {
      // @ts-expect-error intentional immutability probe
      snap.deliveryReady = true;
    }).toThrow();
  });
});

describe("T-A6 foundation status", () => {
  it("advances foundation while remaining incomplete", () => {
    const snap = evaluateTA6Foundation();
    expect(snap.status).toBe("FOUNDATION_ADVANCED");
    expect(snap.remainsIncomplete).toBe(true);
    expect(snap.tA6Complete).toBe(false);
    expect(snap.optionAComplete).toBe(false);
    expect(snap.rM01RemainsOpen).toBe(true);
    expect(snap.sampleSurclaimGuard).toBe("BLOCKED");
    const c11 = snap.capabilities.find((c) => c.id === "T6_C11_RESERVES");
    const c15 = snap.capabilities.find((c) => c.id === "T6_C15_MORRIS_GO");
    expect(c11?.state).toBe("MISSING");
    expect(c15?.state).toBe("MISSING");
  });

  it("refuses T-A6/RUN/delivery surclaims", () => {
    for (const claimId of [
      "T_A6_COMPLETE",
      "T_A7_COMPLETE",
      "OPTION_A_COMPLETE",
      "RUN_READY",
      "DELIVERY_READY",
      "CUTOVER_READY",
    ] as const) {
      const e = evaluateBoundedClaim({
        claimId,
        tA6Complete: false,
        hardOpen: true,
        ciGreen: true,
        healthStatus: "SIMULATED",
      });
      expect(e.status).not.toBe("SUPPORTED");
    }
  });
});

describe("bounded local persistence (node:sqlite D1)", () => {
  let tmpDir: string;

  beforeEach(() => {
    resetD1DbForTests();
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "d1-atomic-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
  });

  afterEach(() => {
    resetD1DbForTests();
    delete process.env.D1_SQLITE_PATH;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it("records decision as existing bounded local persistence", () => {
    const d = describeBoundedPersistenceDecision();
    expect(d.decision).toBe("SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE");
    expect(d.productPersistence).toBe("NOT_SELECTED");
    expect(d.gitRemainsMethodTruth).toBe(true);
    expect(d.network).toBe(false);
    expect(d.secrets).toBe(false);
  });

  it("appends and reads atomic audit transactionally", () => {
    const store = new BoundedAtomicAuditStore();
    store.append({
      opId: "op-1",
      idempotencyKey: "idem-1",
      phase: "prepare",
      outcome: "IN_PROGRESS",
      correlationId: "c-1",
      projectRef: "p1",
      cycleRef: "c1",
      payload: { n: 1 },
    });
    store.append({
      opId: "op-1",
      idempotencyKey: "idem-1",
      phase: "commit",
      outcome: "COMMITTED",
      correlationId: "c-1",
      projectRef: "p1",
      cycleRef: "c1",
    });
    const rows = store.findByIdempotencyKey("idem-1");
    expect(rows).toHaveLength(2);
    expect(rows[1]?.outcome).toBe("COMMITTED");
    expect(rows[0]?.schemaVersion).toBe("t-a7-bounded-atomic-audit.1");
  });

  it("supports cleanup for tests", () => {
    const store = new BoundedAtomicAuditStore();
    store.append({
      opId: "op-x",
      idempotencyKey: "idem-x",
      phase: "prepare",
      outcome: "IN_PROGRESS",
      correlationId: "c-x",
    });
    store.clearForTests();
    expect(store.listByOpId("op-x")).toHaveLength(0);
  });
});

describe("Project↔Cycle atomic coordinator", () => {
  let tmpDir: string;
  let auditStore: BoundedAtomicAuditStore;

  beforeEach(() => {
    resetProjectCycleAtomicCacheForTests();
    resetD1DbForTests();
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "d1-pc-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
    auditStore = new BoundedAtomicAuditStore();
  });

  afterEach(() => {
    resetProjectCycleAtomicCacheForTests();
    resetD1DbForTests();
    delete process.env.D1_SQLITE_PATH;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it("succeeds nominally and links project↔cycle", () => {
    const r = runProjectCycleAtomicOperation({
      idempotencyKey: "ok-1",
      auditStore,
    });
    expect(r.outcome).toBe("SUCCEEDED");
    expect(r.finalDraft.linked).toBe(true);
    expect(r.partialValidated).toBe(false);
    expect(r.productionRollbackProven).toBe(false);
    expect(r.crossStoreDurable).toBe(false);
    expect(r.auditPersisted).toBe(true);
    const audit = auditStore.findByIdempotencyKey("ok-1");
    expect(audit.some((a) => a.outcome === "COMMITTED")).toBe(true);
  });

  it("fails prepare without partial validation", () => {
    const r = runProjectCycleAtomicOperation({
      idempotencyKey: "prep-fail",
      failAt: "prepare",
      auditStore,
    });
    expect(r.outcome).toBe("FAILED_PREPARE");
    expect(r.finalDraft.linked).toBe(false);
    expect(r.partialValidated).toBe(false);
  });

  it("rolls back after apply/verify failure", () => {
    const r = runProjectCycleAtomicOperation({
      idempotencyKey: "apply-fail",
      failAt: "apply_project",
      auditStore,
    });
    expect(r.outcome).toBe("ROLLED_BACK");
    expect(r.finalDraft.linked).toBe(false);
    expect(r.partialValidated).toBe(false);
  });

  it("reports rollback failure honestly", () => {
    const r = runProjectCycleAtomicOperation({
      idempotencyKey: "rb-fail",
      failAt: "verify",
      rollbackFails: true,
      auditStore,
    });
    expect(r.outcome).toBe("ROLLBACK_FAILED");
    expect(r.productionRollbackProven).toBe(false);
  });

  it("retries same idempotency key without double commit", () => {
    const first = runProjectCycleAtomicOperation({
      idempotencyKey: "idem-same",
      auditStore,
    });
    const second = runProjectCycleAtomicOperation({
      idempotencyKey: "idem-same",
      auditStore,
    });
    expect(first.outcome).toBe("SUCCEEDED");
    expect(second.conflict).toBe(true);
    expect(second.opId).toBe(first.opId);
  });

  it("supports idempotent double rollback", () => {
    const first = runProjectCycleAtomicOperation({
      idempotencyKey: "rb-idem",
      failAt: "apply_cycle",
    });
    const second = runProjectCycleIdempotentRollback(first);
    expect(first.outcome).toBe("ROLLED_BACK");
    expect(second.outcome).toBe("ROLLED_BACK");
  });
});

describe("HARD/T-A6 aggregation compatibility", () => {
  it("aggregates foundation statuses without authorizing delivery", () => {
    const snap = queryHardTa6FoundationAggregation();
    expect(snap.hard.lifecycle).toBe("REDUCED");
    expect(snap.hardRemainsOpenHard).toBe(true);
    expect(snap.tA6.status).toBe("FOUNDATION_ADVANCED");
    expect(snap.tA6RemainsIncomplete).toBe(true);
    expect(snap.b5RemainsOpen).toBe(true);
    expect(snap.r1FurtherReduced).toBe(true);
    expect(snap.rM01FurtherReduced).toBe(true);
    expect(snap.runReady).toBe(false);
    expect(snap.deliveryAuthorized).toBe(false);
    expect(snap.httpRoute).toBe(false);
    expect(snap.persistence.productPersistence).toBe("NOT_SELECTED");
  });

  it("remains compatible with MethodMode hold and F11", () => {
    const hold = readMethodModeHold();
    expect(hold.active).toBe(true);
    expect(hold.reasons.map((r) => r.code)).toEqual(
      expect.arrayContaining(["HARD_OPEN", "B5_OPEN", "R1_OPEN", "R_M01_OPEN"]),
    );
    const f11 = queryOperationalReadiness();
    expect(f11.readinessStatus).toBe("NOT_READY");
    expect(f11.observed.health.status).toBe("SIMULATED");
  });
});
```

15 tests · HARD/T-A6/persistence/atomicité/idempotence/rollback · MethodMode+F11 compatibility

## Document 20 (complet)

```markdown
# 20 — HARD / T-A6 atomicity & bounded local persistence foundation lot

| Champ | Valeur |
|-------|--------|
| **Document** | `20-hard-ta6-atomicity-minimal-persistence-foundation-lot.md` |
| **Statut** | `EXECUTED LOCALLY — HARD REDUCED REMAINS OPEN — T-A6 FOUNDATION ADVANCED REMAINS INCOMPLETE` |
| **Date/heure/fuseau** | 2026-07-29 12:55:00 CEST (+0200) |
| **Cycle** | 6 — Architecture technique et implémentation (+ 5/7/9/12/13/15) |
| **Profil** | Critical · EVOL / QA / DOC / CAPA |
| **Gate Morris** | `GO FRAME AND EXECUTE CONSOLIDATED T-A7 HARD AND T-A6 FOUNDATION LOT — INCLUDE ATOMICITY AND MINIMAL PERSISTENCE DECISION — NO IAM DELIVERY OR CUTOVER` |
| **Branche** | `delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation` |
| **Base** | `origin/main` @ `1068ddb37dd8eb9e94c2fca9963fe32ad79a801f` (PR #290) |
| **Push / PR** | **aucun** (ce cycle) |

---

## 1. Objet du lot

Cadrer et exécuter en un seul cycle consolidé :

- qualification et réduction substantielle de HARD (sans fermeture) ;
- progression démontrée de T-A6 (sans COMPLETE) ;
- fondation d’atomicité Project↔Cycle plus réaliste que la simulation pure ;
- décision de persistance minimale, bornée et réversible ;
- code, tests, documentation et PR readiness locale unique.

---

## 2. Gate Morris

Consommé : gate consolidé ci-dessus.

Autorisé : lecture repo, branche locale depuis `origin/main`, comparaison/décision bornée de persistance, implémentation locale, tests, docs, 1–4 commits, PR readiness, review pack FULL, handoff L3.

Interdit : push projet, PR, merge, IAM, delivery, cutover, fermeture HARD, T-A6/Option A/T-A7 COMPLETE, RUN READY.

---

## 3. Branche / base

| Champ | Valeur |
|-------|--------|
| Base | `1068ddb37dd8eb9e94c2fca9963fe32ad79a801f` |
| Branche | `delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation` |
| Upstream | **aucun** |
| Tree au démarrage | propre (untracked `.tmp-sfia-review/**` only) |

---

## 4. Sources Git

| Source | Chemin / référence |
|--------|-------------------|
| Pack T-A7 | `…/t-a7-technical-readiness-framing/01`–`19` (priorité 04, 06, 11, 14, 15, 19) |
| Runtime T-A7 | `app/lib/platform/t-a7/**` |
| D1 | `app/lib/d1/**` (sqlite, hold, F11) |
| Handoff parent | `sfia/review-handoff` · commit `72361936` · blob `79fdbfd4…` |
| Méthode | templates / routing / operating model (lecture seule) |

HARD/T-A6 **non inventés** depuis le prompt : définitions tirées des docs pack + hold reasons + lot 19.

---

## 5. Définition canonique HARD

| Item | Valeur |
|------|--------|
| Identifiant | Réserves **R-T-A3-1…4** (autorité Critical + atomicité durable) |
| Libellé | OPEN HARD — stop conditions SC-07 / TR-S-08 |
| Sources | docs `06`, `11`, `14`, `19` ; hold `HARD_OPEN` |
| Risque | autoriser delivery/cutover ou Critical sans autorité/atomicité prouvées |
| Entités | Project↔Cycle, Decision/LPS/Epistemic (lié), authority registry |
| Invariants | `deliveryReady=false` ; CI ≠ fermeture ; fail-closed hold |
| Rôle atomicité | R-T-A3-2 exige atomicité durable — simulation seule insuffisante |
| Rôle persistance | preuve locale utile ; **≠** product persistence SELECTED ; **≠** fermeture HARD |
| Relation B5/R1 | B5 stop-before-delivery ; R1 atomicité — HARD les surplombe |
| Hors lot | IAM, Critical ack public, drills non-prod autorisés, production |
| Anti-claims | HARD CLOSED ; delivery ready ; CI = closed |

---

## 6. Critères de réduction / fermeture HARD

**Réduction (ce lot) :**

- contrat INTERNAL_ONLY explicite (critères, preuves manquantes, actions) ;
- journal d’audit atomique local + coordinateur Project↔Cycle ;
- `productionRollbackProven=false` / `crossStoreDurable=false` honnêtes.

**Fermeture complète (non atteinte) :**

- Critères canoniques Git tous satisfaits ;
- aucune preuve hors local requise **ou** preuves fournies ;
- pas d’IAM/delivery/production résiduel ;
- gate Morris distinct de fermeture si exigé.

**Résultat :** `HARD REDUCED — REMAINS OPEN`

---

## 7. État canonique T-A6

| Item | Valeur |
|------|--------|
| Avant | OA D1–D5 in-memory ; ClaimEvaluator borné (lot 19) ; R-M01 OPEN |
| Après | fondation avancée + matrice capacités ; T6-C11/T6-C15 toujours MISSING |
| Max autorisé | `FOUNDATION ADVANCED — REMAINS INCOMPLETE` |
| COMPLETE interdit sans | critères Git explicites + T6-C11/C15 + gate Morris |

---

## 8. Matrice capacités T-A6

| Capacité | Contrat | État | Code | Tests | Réductible ici | Critère complétion |
|----------|---------|------|------|-------|----------------|--------------------|
| D1 Evidence | register/ingest | PRESENT | OA memory | existants | non | preuves + reserves |
| D2 ReviewBundle | lifecycle | PRESENT | OA | existants | non | — |
| D3 Claim eval | evaluate/confirm | PRESENT | OA + bounded | oui | partiel | anti-surclaim + R-M01 |
| D4 Maturity | propose/confirm | PRESENT | OA | existants | non | — |
| D5 NextGate | recommend RO | PRESENT | OA | existants | non | no auto-launch |
| R-M01 | governance evaluator | PARTIAL | boundedClaimEvaluator + foundation | oui | oui | R-M01 CLOSED |
| T6-C11 | reserves bounded | MISSING | — | — | non | reserves résolues |
| T6-C15 | Morris GO COMPLETE | MISSING | — | — | non | gate distinct |

ClaimEvaluator borné : refuse T_A6/T_A7/Option A/RUN/delivery/cutover SUPPORTED.

---

## 9. Options de persistance comparées

| Option | Techno | Présente | Atomicité | Rollback | Dette | Verdict |
|--------|--------|----------|-----------|----------|-------|---------|
| A | Adapter mémoire seul (`simulatedAtomicOperation`) | oui | sim | sim | faible | insuffisant seul pour preuve journal |
| B | **node:sqlite via D1 existant** | **oui** | BEGIN/COMMIT | revert table | faible | **SELECTED** |
| C | Fichier append-only ad hoc | non | faible | delete file | moyenne | rejeté (doublon vs D1) |
| D | better-sqlite3 / ORM | non | forte | migration | haute | **interdit** (nouvelle dépendance) |
| E | Cloud / SaaS | non | forte | infra | critique | **interdit** |

---

## 10. Décision de persistance

`SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE`

Technologie : `node:sqlite` via runtime D1 déjà adopté.

Product persistence : **`NOT_SELECTED`**.

---

## 11. Justification

- Déjà dans le repo (pas de `package.json` / lockfile) ;
- local/dev/test only ; pas de réseau, secret, PII, IAM ;
- schéma `CREATE IF NOT EXISTS` réversible ;
- Git reste source de vérité méthodologique ;
- nécessaire pour journaliser l’atomicité au-delà de la pure RAM ;
- tests déterministes avec `D1_SQLITE_PATH` + `resetD1DbForTests`.

---

## 12. Alternatives rejetées

- Nouvelle dépendance npm / cloud / ORM ;
- Second store documentaire concurrent à Git ;
- Persistance produit SELECTED ;
- API HTTP / UI d’administration.

---

## 13. Architecture retenue

```
platform/t-a7/
  hardBlockerFoundation.ts          — contrat HARD
  tA6FoundationStatus.ts            — matrice T-A6
  boundedPersistenceDecision.ts     — décision (pas d’import d1)
  projectCycleAtomicCoordinator.ts  — UoW + port audit injecté
  hardTa6FoundationAggregation.ts   — vue consolidée INTERNAL_ONLY
  (+ lot 19: blocker*, simulated*, boundedClaim*)

d1/
  db.ts                             — table d1_atomic_audit
  boundedAtomicAudit.ts             — store sqlite (implémente le port)
```

Frontière : **platform n’importe pas d1** (audit injecté depuis tests/adapters).

---

## 14. Architecture non retenue

- Second moteur workflow / CQRS / event bus ;
- Microservice / ORM / cloud ;
- API publique Project/Cycle complète ;
- Fermeture automatique HARD via CI.

---

## 15. Modèle d’atomicité

Unité de travail Project↔Cycle :

1. prepare (version++)
2. apply_project
3. apply_cycle / verify (link)
4. commit **ou** rollback vers snapshot initial

`partialValidated` toujours `false`. Lien `linked=true` uniquement sur SUCCEEDED.

---

## 16. Stratégie transactionnelle

- Mémoire : rollback vers snapshot initial via `simulatedAtomicOperation` ;
- SQLite audit : `BEGIN IMMEDIATE` / `COMMIT` / `ROLLBACK` par append ;
- Pas de transaction cross-store product (explicitement `crossStoreDurable=false`).

---

## 17. Idempotence

Clé `idempotencyKey` : second appel retourne le résultat antérieur avec `conflict=true` (pas de double commit).

---

## 18. Rollback

- Succès de rollback → `ROLLED_BACK` ;
- Échec de rollback → `ROLLBACK_FAILED` honnête ;
- Double rollback idempotent ;
- `productionRollbackProven=false` toujours.

---

## 19. Concurrence

Détection via cache d’idempotency keys (process-local). Pas de preuve multi-processus production.

---

## 20. Fichiers créés / modifiés

| Fichier | Statut | Justification |
|---------|--------|---------------|
| `app/lib/platform/t-a7/hardBlockerFoundation.ts` | créé | contrat HARD |
| `app/lib/platform/t-a7/tA6FoundationStatus.ts` | créé | matrice T-A6 |
| `app/lib/platform/t-a7/boundedPersistenceDecision.ts` | créé | décision bornée |
| `app/lib/platform/t-a7/projectCycleAtomicCoordinator.ts` | créé | atomicité |
| `app/lib/platform/t-a7/hardTa6FoundationAggregation.ts` | créé | vue consolidée |
| `app/lib/d1/boundedAtomicAudit.ts` | créé | journal sqlite |
| `app/lib/d1/db.ts` | modifié | schéma audit |
| `app/lib/d1/index.ts` | modifié | exports |
| `app/lib/platform/t-a7/index.ts` | modifié | exports |
| `app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts` | créé | tests |
| `…/20-hard-ta6-….md` | créé | doc lot |
| `…/README.md` | modifié | index pack |

Aucun `package.json` / lockfile / method/** / .github/** / IAM / UI.

---

## 21. Tests

Fichier : `t-a7-hard-ta6-persistence-foundation.test.ts` (15) + régression lot 19 (19) + boundaries + D1 suites.

Couverture : HARD immutable/CI, T-A6 incomplete/anti-surclaim, audit CRUD, succès/échec/rollback/idempotence, agrégation, MethodMode/F11.

---

## 22. Résultats

| Commande | Résultat |
|----------|----------|
| `npm run typecheck` | OK |
| `npm run lint` | OK |
| `npm test -- __tests__/platform` | 69 passed |
| `npm test -- __tests__/d1` | 74 passed |
| `npm run build` | OK |
| `git diff --check` | OK |

---

## 23. Preuves HARD

Disponibles : contrat foundation ; audit local ; coordinateur ; anti-CI-closure.

Manquantes : Critical ack authentifié ; atomicité cross-store durable ; drill autorisé ; gate fermeture Morris.

---

## 24. Preuves T-A6

Disponibles : D1–D5 memory ; bounded evaluator ; matrice FOUNDATION_ADVANCED.

Manquantes : T6-C11 ; T6-C15 ; R-M01 CLOSED ; Option A complete.

---

## 25. Raisons maintien OPEN / incomplete

- HARD : R-T-A3-1/2 non clos ; IAM NOT_SELECTED ; pas de gate fermeture ;
- T-A6 : T6-C11/C15 MISSING ; R-M01 OPEN ;
- B5/R1/R-M01 : further reduced but OPEN.

---

## 26. Anti-claims

- HARD CLOSED / deliveryReady
- T-A6 COMPLETE / Option A COMPLETE / T-A7 COMPLETE
- RUN READY / cutover
- Product persistence SELECTED
- productionRollbackProven
- CI green = fermeture blocker

---

## 27. Dette créée

- Table `d1_atomic_audit` locale (faible, réversible) ;
- Cache idempotency process-local ;
- Port audit à câbler explicitement (pas d’import platform→d1).

---

## 28. Dette évitée

- Nouvelle dépendance npm ;
- Cloud / IAM / second truth store ;
- API produit Project/Cycle prématurée.

---

## 29. Risques résiduels

- Confusion « bounded local persistence » vs product SELECTED → documenté ;
- Surclaim HARD REDUCED = CLOSED → tests + anti-claims ;
- Atomicité locale ≠ production.

---

## 30. Rollback du lot

1. Revert commits de la branche ;
2. `DROP TABLE IF EXISTS d1_atomic_audit` (ou revert `db.ts`) ;
3. Aucune migration irréversible ; aucun secret ; aucun remote state.

---

## 31. PR readiness

`READY FOR MORRIS PUSH AND PR DECISION` (après commits locaux + pack) — **aucun push/PR dans ce cycle**.

---

## 32. Gate suivant candidat

`GO PUSH AND OPEN PR — T-A7 HARD T-A6 ATOMICITY AND BOUNDED PERSISTENCE FOUNDATION — NO MERGE IAM DELIVERY OR CUTOVER`

---

## 33. Verdict

`T-A7 HARD AND T-A6 FOUNDATION LOT COMPLETE — HARD AND T-A6 SUBSTANTIALLY ADVANCED BUT REMAIN OPEN — BOUNDED LOCAL PERSISTENCE DECISION RECORDED — ATOMICITY AND ROLLBACK EVIDENCE ADDED — B5 R1 R-M01 REMAIN OPEN — IAM NOT SELECTED — NO DELIVERY OR CUTOVER — LOCAL COMMITS READY FOR MORRIS PUSH AND PR DECISION`
```

## README pack (complet)

```markdown
# T-A7 — Technical readiness framing

| Champ | Valeur |
|-------|--------|
| **Mise à jour lot HARD/T-A6 foundation** | 2026-07-29 12:55:00 CEST (+0200) |
| **Mise à jour lot consolidé B5/R1/R-M01** | 2026-07-29 10:08:00 CEST (+0200) |
| **Mise à jour post-merge PR #288** | 2026-07-29 02:09:00 CEST (+0200) |
| **N3** | `DECIDED — ADOPTED BY MORRIS` — cadrage F11.2/F13.4 completion |
| **D1–D8** | `DECIDED — ADOPTED BY MORRIS` (voir `16`) |
| **Lot L-F11F13** | `INTEGRATED ON MAIN` (PR [#288](https://github.com/mcleland147/sfia-workspace/pull/288) · merge `a105431…`) |
| **Lot consolidé B5/R1/R-M01** | `INTEGRATED ON MAIN` (PR [#290](https://github.com/mcleland147/sfia-workspace/pull/290) · merge `1068ddb…`) |
| **Lot HARD/T-A6/atomicité/persistance** | `EXECUTED LOCALLY` — voir `20` |
| **HARD** | `REDUCED — REMAINS OPEN` |
| **T-A6** | `FOUNDATION ADVANCED — REMAINS INCOMPLETE` |
| **B5 / R1 / R-M01** | `REDUCED / FURTHER REDUCED — REMAIN OPEN` |
| **Persistance (produit)** | `NOT_SELECTED` |
| **Persistance (locale bornée)** | `SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE` (`node:sqlite` D1 audit) |
| **IAM** | `NOT_SELECTED` |
| **O3** | `DECIDED — ADOPTED BY MORRIS` |
| **T-A7** | `OPEN` |
| **Lot 1** | `INTEGRATED ON MAIN` (PR [#287](https://github.com/mcleland147/sfia-workspace/pull/287)) |
| **F11.2 / F13.4** | contrats INTERNAL_ONLY intégrés · **≠** cutover |
| **Delivery / cutover / RUN** | `NOT AUTHORIZED` / `NOT READY` |
| **Main tip** | `1068ddb37dd8eb9e94c2fca9963fe32ad79a801f` |
| **Branche lot foundation** | `delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation` |
| **Push / PR (branche lot)** | **aucun** |

## Index du pack

| Doc | Sujet |
|-----|-------|
| `01`–`09` | framing readiness / O2 |
| `10` | lot 1 borné (O3) |
| `11` | post-merge lot 1 + options N1–N5 |
| `12` | F11.2 completion surface & gaps |
| `13` | F13.4 completion surface & gaps |
| `14` | dépendances & frontières runtime |
| `15` | options de lots bornés futurs |
| `16` | decision pack Morris F11/F13 |
| `17` | résultats lot L-F11F13 (pré-merge) |
| `18` | post-merge validation & capitalisation PR #288 |
| `19` | lot consolidé réduction B5 / R1 / R-M01 |
| `20` | HARD / T-A6 / atomicité / persistance locale bornée |

## État courant

1. MethodMode hold — défaut actif ; raisons HARD/B5/R1/R-M01
2. F11/F13 INTERNAL_ONLY — intégrés (PR #288)
3. B5/R1/R-M01 controls — intégrés (PR #290) · restent OPEN
4. HARD foundation + T-A6 foundation + atomic audit — **local** (doc `20`) · HARD/T-A6 restent ouverts/incomplets
5. Persistance produit — NOT_SELECTED ; audit sqlite local — SELECTED borné

## Anti-claims

- PR #290 mergée ≠ HARD CLOSED ≠ T-A6 COMPLETE
- Bounded local persistence ≠ product persistence SELECTED ≠ second truth vs Git
- HARD REDUCED ≠ CLOSED / delivery ready
- T-A6 FOUNDATION ADVANCED ≠ COMPLETE / Option A complete
- simulation + audit local ≠ productionRollbackProven
- CI verte ≠ RUN READY / cutover

## Blockers encore ouverts

HARD · B5 · R1 · R-M01 · T-A6 incomplete · T-A7 OPEN · IAM NOT_SELECTED

## Gate candidat suivant

`GO PUSH AND OPEN PR — T-A7 HARD T-A6 ATOMICITY AND BOUNDED PERSISTENCE FOUNDATION — NO MERGE IAM DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED` · prêt après PR readiness locale du lot 20

## Verdict courant

`T-A7 HARD AND T-A6 FOUNDATION LOT COMPLETE — HARD AND T-A6 SUBSTANTIALLY ADVANCED BUT REMAIN OPEN — BOUNDED LOCAL PERSISTENCE DECISION RECORDED — ATOMICITY AND ROLLBACK EVIDENCE ADDED — B5 R1 R-M01 REMAIN OPEN — IAM NOT SELECTED — NO DELIVERY OR CUTOVER — LOCAL COMMITS READY FOR MORRIS PUSH AND PR DECISION — PROJECT BRANCH NOT PUSHED`

---

## Historique — lot consolidé B5/R1/R-M01

> Voir `19`. Intégré via PR #290 (`1068ddb…`). Avant merge, le lot était local sur
> `delivery/sfia-studio-t-a7-consolidated-blocker-reduction`.

---

## Historique — lot L-F11F13 (pré-intégration)

> Section **historique**. Voir `17` et `18`.

Avant merge #288, le lot existait sur
`delivery/sfia-studio-t-a7-f11-f13-internal-completion` @ `5afe095…`.

---

## Historique post-merge (lot 1)

> Section **historique**. Voir aussi `11-t-a7-lot1-post-merge-and-next-blocker-framing.md`.

Post-merge confirmé : PR #287. Gate d’intégration et options N1–N5 : document `11`. N3 depuis **sélectionné** par Morris.
```

Historique 01–19 préservé sur main (20 fichiers pack listés).

## Compatibilité MethodMode / F11 / F13 / boundaries

- MethodMode hold raisons HARD_OPEN / B5_OPEN / R1_OPEN / R_M01_OPEN présentes
- F11 operationalReadiness INTERNAL_ONLY · NOT_READY with SIMULATED health
- F13 bounded history modules préservés (lot antérieur)
- platform → d1/ops1 imports: **0** sur origin/main

## Anti-claims confirmés

HARD CLOSED · T-A6/T-A7/Option A COMPLETE · B5/R1/R-M01 CLOSED · PRODUCT PERSISTENCE SELECTED · PRODUCTION READY · RUN/DELIVERY/CUTOVER READY · productionRollbackProven=true · crossStoreDurable=true · IAM SELECTED — **tous absents / contredits**

## Findings

| ID | Sévérité | Surface | Fichier/section | Observation | Preuve | Impact | Recommandation | Action | Gate Morris |
|----|----------|---------|-----------------|-------------|--------|--------|----------------|--------|-------------|
| F-DOC-01 | Minor | docs pack README current status | `…/t-a7-technical-readiness-framing/README.md` table tête + verdict | Après merge #291, le README présente encore le lot comme `EXECUTED LOCALLY`, `Push/PR aucun`, Main tip `1068ddb…`, et verdict `PROJECT BRANCH NOT PUSHED` | blobs main README · PR MERGED · main=`7916066310777abce4fd5a64ff0c87759c375fd6` | confusion d’état courant vs snapshot pré-push | Mettre à jour README en capitalisation post-merge distincte (hors ce cycle) | aucune correction ici | oui (docs capitalization) |
| F-DOC-02 | Info | doc 20 lot snapshot | `20-….md` statut EXECUTED LOCALLY / Push aucun | Snapshot d’exécution du lot pré-push/PR, cohérent comme document de lot | doc 20 header | faible si lu comme historique de lot | Préserver; éventuellement note post-merge dans cycle docs futur | aucune | non |
| F-BND-01 | Info | architecture | projectCycleAtomicCoordinator / hardTa6FoundationAggregation | Finding Minor F-BND-01 (platform→d1) corrigé avant merge; boundaries OK post-merge | import-boundaries CI + scan platform | dette évitée | aucune | aucune | non |

Aucun Critical/Major. Clôture du lot autorisée avec réserves documentaires non bloquantes.

## Matrice de clôture

| Critère | Résultat |
|---------|----------|
| Git local | PASS |
| PR #291 MERGED | PASS |
| merge commit/parents | PASS |
| main 7916066 | PASS |
| branche source préservée | PASS |
| 12 fichiers | PASS |
| fichiers interdits | PASS (absents) |
| CI post-merge 30448369070 | PASS SUCCESS |
| HARD REDUCED REMAINS OPEN | PASS |
| T-A6 FOUNDATION ADVANCED INCOMPLETE | PASS |
| B5/R1/R-M01 OPEN | PASS |
| T-A7 OPEN | PASS |
| persistance locale SELECTED bornée | PASS |
| persistance produit NOT_SELECTED | PASS |
| IAM NOT_SELECTED | PASS |
| atomicité / rollback / idempotence / concurrence | PASS (local) |
| architecture platform/D1 port | PASS |
| MethodMode/F11/F13 | PASS |
| tests | PASS |
| document 20 | PASS (contenu) |
| README | PASS avec F-DOC-01 Minor |
| snapshot historique | F-DOC-02 Info |
| productionRollbackProven=false | PASS |
| crossStoreDurable=false | PASS |
| RUN NOT READY | PASS |
| delivery/cutover NOT AUTHORIZED | PASS |
| findings Critical/Major | aucun |
| verdict clôture lot | **CLOSED** (lot only) |

## REX

- Port injecté platform↛d1 indispensable pour boundaries
- Décision persistance bornée sans nouvelle dépendance évite STOP Morris
- README doit être mis à jour en cycle capitalization post-merge dédié (évite stale current claims)
- Clôture de lot ≠ fermeture blockers — discipline anti-claims effective dans le code

## Dette créée / évitée

- Créée: table d1_atomic_audit · cache idempotency process-local · README stale Minor
- Évitée: npm dep · cloud · product persistence · API/UI · second truth store

## Risques / réserves

- Confusion local SQLite vs product persistence
- HARD/T-A6/B5/R1/R-M01 restent OPEN
- F-DOC-01 Minor README stale jusqu’à capitalisation

## Git final

- branche/HEAD/upstream inchangés
- tracked propre · `.tmp-sfia-review/**` only
- aucune action distante projet (hors handoff L3)

## Actions non exécutées

code/tests/docs edits · commits projet · push projet · PR · delete-branch · HARD/T-A6/B5/R1/R-M01 closure · IAM · product persistence · productionRollbackProven=true · crossStoreDurable=true · RUN READY · delivery · cutover

## Gate candidat éventuel

Aucune suite automatique. Décision Morris distincte requise pour: T6-C11 · T6-C15 · persistance produit · IAM/Critical ack · atomicité cross-store · prochain lot T-A7 · delivery/cutover · (optionnel) capitalisation README post-merge #291.

## Verdict

`T-A7 HARD T-A6 FOUNDATION LOT POST-MERGE VALIDATED WITH NON-BLOCKING RESERVES — LOT CLOSED — BLOCKERS REMAIN OPEN — NO IAM PRODUCT PERSISTENCE DELIVERY OR CUTOVER`

Complément:

`PR #291 POST-MERGE VALIDATION COMPLETE — MAIN 7916066 AND POST-MERGE CI VERIFIED — T-A7 HARD T-A6 ATOMICITY AND BOUNDED LOCAL PERSISTENCE FOUNDATION LOT CLOSED — HARD AND T-A6 REMAIN OPEN — B5 R1 R-M01 REMAIN OPEN — T-A7 REMAINS OPEN — BOUNDED LOCAL PERSISTENCE SELECTED — PRODUCT PERSISTENCE AND IAM NOT SELECTED — PRODUCTION ROLLBACK AND CROSS-STORE DURABILITY NOT PROVEN — NO DELIVERY OR CUTOVER — HANDOFF UPDATED AND REMOTE VERIFIED`
