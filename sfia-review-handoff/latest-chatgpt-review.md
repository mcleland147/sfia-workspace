# T-A7 HARD / T-A6 foundation — Review pack FULL

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-29 12:57:58 CEST (+0200) |
| **Repo** | mcleland147/sfia-workspace |
| **Workspace** | /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge |
| **Gate** | `GO FRAME AND EXECUTE CONSOLIDATED T-A7 HARD AND T-A6 FOUNDATION LOT — INCLUDE ATOMICITY AND MINIMAL PERSISTENCE DECISION — NO IAM DELIVERY OR CUTOVER` |
| **Branche** | `delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation` |
| **Base** | `1068ddb37dd8eb9e94c2fca9963fe32ad79a801f` |
| **HEAD** | `9c125059f3323a7df862b96d32f1940b1cbdefc1` |
| **Handoff parent** | commit `72361936` · blob `79fdbfd42f2da64fc2fa6a7482dae5068a0bff99` |
| **Niveau** | FULL |

## Truth check

- workspace correct: `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge`
- origin/main contains `1068ddb37dd8eb9e94c2fca9963fe32ad79a801f` (exact tip at branch creation)
- working tree tracked clean after commits; untracked `.tmp-sfia-review/**` only
- staged empty; no unfinished git op; target branch absent remote; no PR
- Verdict truth check: **PASSED**

## Sources exactes

- Pack T-A7 docs 01–19 under `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/`
- Runtime: `app/lib/platform/t-a7/**`, `app/lib/d1/**`
- Parent handoff `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` @ `72361936`

## Définition HARD (canonique Git)

- Identifiant: réserves R-T-A3-1…4 (autorité Critical + atomicité durable Decision/LPS/Epistemic et Project↔Cycle)
- Sources: docs 06/11/14/19; hold `HARD_OPEN`; stop SC-07 / TR-S-08
- Statut lot: **HARD REDUCED — REMAINS OPEN**
- Fermeture: impossible (IAM/Critical ack, cross-store durable, gate Morris distinct)
- `deliveryReady=false`, `closedByCiGreen=false` invariants

## Critères HARD

### Réduction (satisfaits dans ce lot)
- contrat INTERNAL_ONLY hardBlockerFoundation
- audit atomique local + coordinateur Project↔Cycle
- honesty flags productionRollbackProven=false / crossStoreDurable=false

### Fermeture (non satisfaits)
- R-T-A3-1 authenticated Critical ack
- R-T-A3-2 durable cross-store atomicity + authorized drill
- Morris dedicated HARD closure gate

## Matrice T-A6

| Capacité | État | Réductible | Note |
|----------|------|------------|------|
| D1–D5 OA memory | PRESENT | non/partiel D3 | existants |
| R-M01 bounded evaluator | PARTIAL | oui | further reduced |
| T6-C11 reserves | MISSING | non | blocks COMPLETE |
| T6-C15 Morris GO | MISSING | non | blocks COMPLETE |

Statut: **FOUNDATION ADVANCED — REMAINS INCOMPLETE**

## Options de persistance

| Option | Techno | Présente | Verdict |
|--------|--------|----------|---------|
| A | mémoire sim seule | oui | insuffisant seul |
| B | node:sqlite via D1 | oui | **SELECTED** |
| C | fichier append-only | non | rejeté |
| D | better-sqlite3/ORM | non | interdit (dep) |
| E | cloud/SaaS | non | interdit |

## Décision et justification

**SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE** (`node:sqlite` via D1).
Product persistence remains **NOT_SELECTED**. Git remains method truth.

## Règle de décision bornée (critère par critère)

| Critère | OK? |
|---------|-----|
| Techno déjà présente / runtime standard sans nouvelle dépendance | OUI (node:sqlite + D1) |
| Usage local/dev/test uniquement | OUI |
| Aucune infra distante | OUI |
| Aucun secret | OUI |
| Aucune donnée personnelle | OUI |
| Aucune identité utilisateur / IAM | OUI |
| Aucune rupture API publique | OUI |
| Aucune migration irréversible | OUI (CREATE IF NOT EXISTS) |
| Rollback par suppression/revert démontrable | OUI |
| Pas de second système de vérité doc/méthode | OUI (Git reste) |
| Strictement nécessaire à preuve d’atomicité | OUI (journal) |
| Dette faible documentée | OUI |
| Tests déterministes | OUI |
| Fichiers dans périmètre autorisé | OUI |

Aucune condition en échec → pas de STOP Morris structural.

## Architecture

- platform contracts (HARD/T-A6/decision/aggregation/coordinator+audit port)
- d1 BoundedAtomicAuditStore implements port (platform does NOT import d1)
- schema d1_atomic_audit in db.ts

## Alternatives rejetées

Nouvelle dépendance npm; cloud; ORM; second truth store; API/UI product; HARD auto-close.

## Liste exacte des fichiers

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

## Contenu complet des fichiers créés


### `projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts`

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

### `projects/sfia-studio/app/lib/platform/t-a7/tA6FoundationStatus.ts`

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

### `projects/sfia-studio/app/lib/platform/t-a7/boundedPersistenceDecision.ts`

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

### `projects/sfia-studio/app/lib/platform/t-a7/projectCycleAtomicCoordinator.ts`

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
          ? "prepare"
          : input.failAt === "verify"
            ? "verify"
            : input.failAt === "rollback"
              ? "rollback"
              : undefined;

  const initial = input.initial ?? defaultDraft();

  if (audit) {
    audit.append({
      opId,
      idempotencyKey: input.idempotencyKey,
      phase: "prepare",
      outcome: "IN_PROGRESS",
      correlationId: opId,
      projectRef: initial.projectId,
      cycleRef: initial.cycleId,
      payload: { step: "start" },
    });
  }

  const sim = runSimulatedAtomicOperation<ProjectCycleDraft>({
    initial,
    prepare: (s) => ({ ...s, version: s.version + 1 }),
    apply: (s) => ({
      ...s,
      projectName: `${s.projectName}:applied`,
      version: s.version + 1,
    }),
    verify: (s) => {
      if (input.failAt === "apply_cycle") return false;
      return s.version >= 2 && s.projectName.includes(":applied");
    },
    rollback: (s) => ({
      ...s,
      projectName: "draft-project",
      cycleLabel: "draft-cycle",
      linked: false,
      version: 0,
    }),
    failAt: mapFail,
    rollbackFails: input.rollbackFails,
  });

  let finalDraft = sim.finalState.workingSnapshot;
  if (sim.outcome === "SUCCEEDED") {
    finalDraft = {
      ...finalDraft,
      linked: true,
      cycleLabel: `${finalDraft.cycleLabel}:linked`,
    };
    if (audit) {
      audit.append({
        opId,
        idempotencyKey: input.idempotencyKey,
        phase: "apply_project",
        outcome: "IN_PROGRESS",
        correlationId: opId,
        projectRef: finalDraft.projectId,
        cycleRef: finalDraft.cycleId,
      });
      audit.append({
        opId,
        idempotencyKey: input.idempotencyKey,
        phase: "apply_cycle",
        outcome: "IN_PROGRESS",
        correlationId: opId,
        projectRef: finalDraft.projectId,
        cycleRef: finalDraft.cycleId,
      });
      audit.append({
        opId,
        idempotencyKey: input.idempotencyKey,
        phase: "commit",
        outcome: "COMMITTED",
        correlationId: opId,
        projectRef: finalDraft.projectId,
        cycleRef: finalDraft.cycleId,
        payload: { linked: true },
      });
    }
  } else if (
    sim.outcome === "ROLLED_BACK" ||
    sim.outcome === "FAILED_PREPARE" ||
    sim.outcome === "ROLLBACK_FAILED"
  ) {
    if (audit) {
      audit.append({
        opId,
        idempotencyKey: input.idempotencyKey,
        phase: "rollback",
        outcome:
          sim.outcome === "ROLLBACK_FAILED" ? "FAILED" : "ROLLED_BACK",
        correlationId: opId,
        projectRef: finalDraft.projectId,
        cycleRef: finalDraft.cycleId,
      });
    }
  }

  const result: ProjectCycleAtomicResult = Object.freeze({
    schemaVersion: "t-a7-project-cycle-atomic.1",
    accessSurface: "INTERNAL_ONLY",
    opId,
    idempotencyKey: input.idempotencyKey,
    outcome: sim.outcome,
    finalDraft: Object.freeze({ ...finalDraft }),
    partialValidated: false,
    productionRollbackProven: false,
    crossStoreDurable: false,
    auditPersisted: Boolean(audit),
    conflict: false,
    persistence: audit
      ? "BOUNDED_LOCAL_AUDIT_OPTIONAL"
      : "NONE_IN_MEMORY_ONLY",
    iam: "NOT_SELECTED",
  });

  if (
    result.outcome === "SUCCEEDED" ||
    result.outcome === "ROLLED_BACK" ||
    result.outcome === "FAILED_PREPARE" ||
    result.outcome === "ROLLBACK_FAILED"
  ) {
    completedKeys.set(input.idempotencyKey, result);
  }

  return result;
}

/** Test helper: clear idempotency cache. */
export function resetProjectCycleAtomicCacheForTests(): void {
  completedKeys.clear();
}

export function runProjectCycleIdempotentRollback(
  previous: ProjectCycleAtomicResult,
): ProjectCycleAtomicResult {
  const simLike = runIdempotentRollback(
    {
      schemaVersion: "t-a7-r1-atomic-sim.1",
      accessSurface: "INTERNAL_ONLY",
      outcome: previous.outcome === "SUCCEEDED" ? "SUCCEEDED" : "ROLLED_BACK",
      finalState: Object.freeze({
        phase: "done" as const,
        initialSnapshot: previous.finalDraft,
        workingSnapshot: previous.finalDraft,
        outcome:
          previous.outcome === "SUCCEEDED"
            ? ("SUCCEEDED" as const)
            : ("ROLLED_BACK" as const),
        history: Object.freeze([]) as readonly string[],
        rolledBack: previous.outcome !== "SUCCEEDED",
        partialValidated: false as const,
      }),
      persistence: "NONE_IN_MEMORY_ONLY",
      productionRollbackProven: false,
      mutable: false,
      iam: "NOT_SELECTED",
    },
    (s: ProjectCycleDraft) => ({
      ...s,
      linked: false,
      version: 0,
      projectName: "draft-project",
      cycleLabel: "draft-cycle",
    }),
  );

  return Object.freeze({
    ...previous,
    outcome: simLike.outcome,
    finalDraft: Object.freeze({ ...simLike.finalState.workingSnapshot }),
    partialValidated: false,
    productionRollbackProven: false,
  });
}

```

### `projects/sfia-studio/app/lib/platform/t-a7/hardTa6FoundationAggregation.ts`

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

### `projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts`

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

### `projects/sfia-studio/app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts`

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

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/20-hard-ta6-atomicity-minimal-persistence-foundation-lot.md`

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

## Diffs des fichiers modifiés

```diff
diff --git a/projects/sfia-studio/app/lib/d1/db.ts b/projects/sfia-studio/app/lib/d1/db.ts
index 435245e..90e64b0 100644
--- a/projects/sfia-studio/app/lib/d1/db.ts
+++ b/projects/sfia-studio/app/lib/d1/db.ts
@@ -50,12 +50,46 @@ CREATE TABLE IF NOT EXISTS d1_idempotency_keys (
   created_at TEXT NOT NULL
 );
 
+CREATE TABLE IF NOT EXISTS d1_atomic_audit (
+  row_id INTEGER PRIMARY KEY AUTOINCREMENT,
+  op_id TEXT NOT NULL,
+  idempotency_key TEXT NOT NULL,
+  phase TEXT NOT NULL CHECK (
+    phase IN (
+      'prepare',
+      'apply_project',
+      'apply_cycle',
+      'verify',
+      'commit',
+      'rollback'
+    )
+  ),
+  outcome TEXT NOT NULL CHECK (
+    outcome IN (
+      'IN_PROGRESS',
+      'COMMITTED',
+      'ROLLED_BACK',
+      'FAILED',
+      'CONFLICT'
+    )
+  ),
+  correlation_id TEXT NOT NULL,
+  project_ref TEXT,
+  cycle_ref TEXT,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  schema_version TEXT NOT NULL
+);
+
 CREATE INDEX IF NOT EXISTS idx_d1_projects_workspace
   ON d1_projects(workspace_id, state);
 CREATE INDEX IF NOT EXISTS idx_d1_audit_project
   ON d1_audit_events(project_id, occurred_at);
+CREATE INDEX IF NOT EXISTS idx_d1_atomic_audit_op
+  ON d1_atomic_audit(op_id, created_at);
+CREATE INDEX IF NOT EXISTS idx_d1_atomic_audit_idem
+  ON d1_atomic_audit(idempotency_key, created_at);
 `;
-
 let singleton: DatabaseSync | null = null;
 let singletonPath: string | null = null;
 
diff --git a/projects/sfia-studio/app/lib/d1/index.ts b/projects/sfia-studio/app/lib/d1/index.ts
index 5539f49..8ac869a 100644
--- a/projects/sfia-studio/app/lib/d1/index.ts
+++ b/projects/sfia-studio/app/lib/d1/index.ts
@@ -29,3 +29,12 @@ export type {
   OperationalReadinessAccessSurface,
 } from "./operationalReadiness";
 export { resetD1DbForTests } from "./db";
+export {
+  BoundedAtomicAuditStore,
+  BOUNDED_ATOMIC_AUDIT_SCHEMA_VERSION,
+} from "./boundedAtomicAudit";
+export type {
+  BoundedAtomicAuditRecord,
+  BoundedAtomicPhase,
+  BoundedAtomicOutcome,
+} from "./boundedAtomicAudit";
diff --git a/projects/sfia-studio/app/lib/platform/t-a7/index.ts b/projects/sfia-studio/app/lib/platform/t-a7/index.ts
index 541b499..9877df1 100644
--- a/projects/sfia-studio/app/lib/platform/t-a7/index.ts
+++ b/projects/sfia-studio/app/lib/platform/t-a7/index.ts
@@ -1,6 +1,11 @@
-/** Platform T-A7 bounded foundations (lot 1 + consolidated blocker reduction). */
+/** Platform T-A7 bounded foundations (lot 1 + blocker reduction + HARD/T-A6 foundation). */
 export * from "./boundedHistoryRead";
 export * from "./blockerControlPlane";
 export * from "./simulatedAtomicOperation";
 export * from "./boundedClaimEvaluator";
 export * from "./blockerAggregation";
+export * from "./hardBlockerFoundation";
+export * from "./tA6FoundationStatus";
+export * from "./boundedPersistenceDecision";
+export * from "./projectCycleAtomicCoordinator";
+export * from "./hardTa6FoundationAggregation";
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
index d8da692..1b46f99 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-technical-readiness-framing/README.md
@@ -2,33 +2,27 @@
 
 | Champ | Valeur |
 |-------|--------|
+| **Mise à jour lot HARD/T-A6 foundation** | 2026-07-29 12:55:00 CEST (+0200) |
 | **Mise à jour lot consolidé B5/R1/R-M01** | 2026-07-29 10:08:00 CEST (+0200) |
 | **Mise à jour post-merge PR #288** | 2026-07-29 02:09:00 CEST (+0200) |
-| **Mise à jour N3** | 2026-07-28 22:45:18 CEST (+0200) |
-| **Mise à jour D1–D8 / L-F11F13** | 2026-07-28 22:58:09 CEST (+0200) |
-| **Mise à jour résultats L-F11F13** | 2026-07-28 23:22:34 CEST (+0200) |
-| **Mise à jour correctif F-PR-01** | 2026-07-29 00:27:00 CEST (+0200) |
 | **N3** | `DECIDED — ADOPTED BY MORRIS` — cadrage F11.2/F13.4 completion |
 | **D1–D8** | `DECIDED — ADOPTED BY MORRIS` (voir `16`) |
 | **Lot L-F11F13** | `INTEGRATED ON MAIN` (PR [#288](https://github.com/mcleland147/sfia-workspace/pull/288) · merge `a105431…`) |
-| **F-PR-01** | `RESOLVED` (TS2322 · commit `5afe095…`) |
-| **CI post-merge** | run `30407614333` — **SUCCESS** |
-| **Lot consolidé B5/R1/R-M01** | `EXECUTED LOCALLY` — voir `19` |
-| **B5 / R1 / R-M01** | `REDUCED — REMAINS OPEN` |
-| **HARD** | `OPEN HARD — UNCHANGED` |
+| **Lot consolidé B5/R1/R-M01** | `INTEGRATED ON MAIN` (PR [#290](https://github.com/mcleland147/sfia-workspace/pull/290) · merge `1068ddb…`) |
+| **Lot HARD/T-A6/atomicité/persistance** | `EXECUTED LOCALLY` — voir `20` |
+| **HARD** | `REDUCED — REMAINS OPEN` |
+| **T-A6** | `FOUNDATION ADVANCED — REMAINS INCOMPLETE` |
+| **B5 / R1 / R-M01** | `REDUCED / FURTHER REDUCED — REMAIN OPEN` |
+| **Persistance (produit)** | `NOT_SELECTED` |
+| **Persistance (locale bornée)** | `SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE` (`node:sqlite` D1 audit) |
+| **IAM** | `NOT_SELECTED` |
 | **O3** | `DECIDED — ADOPTED BY MORRIS` |
-| **T-A7** | `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY` |
-| **Lot 1** | `INTEGRATED ON MAIN` (PR [#287](https://github.com/mcleland147/sfia-workspace/pull/287) · merge `770605bc…`) |
-| **F03.3** | `PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED` |
-| **P03–P11** | P03–P07 · P10–P11 **PARTIAL** · P08 · P09 **MISSING** |
-| **F11.2** | contrat **INTERNAL_ONLY** intégré sur `main` · pas HTTP/UI · **≠ cutover-complete** |
-| **F13.4** | seed+SHA · PREFIX_ONLY · GIT_ONLY intégré · **≠ archive / cutover** |
-| **IAM / Persistence** | `NOT SELECTED` / `NOT SELECTED` |
-| **T-A6 / Option A** | `NOT DECLARED` / `NOT COMPLETE` |
-| **Delivery / cutover** | `NOT AUTHORIZED` |
-| **Main tip (docs #289)** | `bddfc6ac821b5684cd4b611d397596aa8e310802` |
-| **Main validé (technique #288)** | `a10543143f88ac3bd886c717d49e2d6163c6b360` (snapshot historique) |
-| **Branche lot consolidé** | `delivery/sfia-studio-t-a7-consolidated-blocker-reduction` |
+| **T-A7** | `OPEN` |
+| **Lot 1** | `INTEGRATED ON MAIN` (PR [#287](https://github.com/mcleland147/sfia-workspace/pull/287)) |
+| **F11.2 / F13.4** | contrats INTERNAL_ONLY intégrés · **≠** cutover |
+| **Delivery / cutover / RUN** | `NOT AUTHORIZED` / `NOT READY` |
+| **Main tip** | `1068ddb37dd8eb9e94c2fca9963fe32ad79a801f` |
+| **Branche lot foundation** | `delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation` |
 | **Push / PR (branche lot)** | **aucun** |
 
 ## Index du pack
@@ -45,41 +39,46 @@
 | `16` | decision pack Morris F11/F13 |
 | `17` | résultats lot L-F11F13 (pré-merge) |
 | `18` | post-merge validation & capitalisation PR #288 |
-| `19` | lot consolidé réduction B5 / R1 / R-M01 (local) |
+| `19` | lot consolidé réduction B5 / R1 / R-M01 |
+| `20` | HARD / T-A6 / atomicité / persistance locale bornée |
 
-## État courant sur `main` (+ lot local)
+## État courant
 
-1. MethodMode hold (lot 1) — défaut actif ; override test-only hors barrel
-2. F11.2 INTERNAL_ONLY + états READY/NOT_READY/UNKNOWN — **intégré** (PR #288)
-3. F13.4 seed enrichi + SHA + PREFIX_ONLY + GIT_ONLY — **intégré** (PR #288)
-4. F-PR-01 typings — **résolu** et validé par CI post-merge
-5. Doc 18 capitalisation PR #288 — **intégré** (PR #289 · main `bddfc6a…`)
-6. Lot consolidé B5/R1/R-M01 — **exécuté localement** (doc `19`) · **non poussé**
+1. MethodMode hold — défaut actif ; raisons HARD/B5/R1/R-M01
+2. F11/F13 INTERNAL_ONLY — intégrés (PR #288)
+3. B5/R1/R-M01 controls — intégrés (PR #290) · restent OPEN
+4. HARD foundation + T-A6 foundation + atomic audit — **local** (doc `20`) · HARD/T-A6 restent ouverts/incomplets
+5. Persistance produit — NOT_SELECTED ; audit sqlite local — SELECTED borné
 
 ## Anti-claims
 
-- PR #288 mergée ≠ T-A7 entièrement ouvert ≠ delivery/cutover ready
-- F11/F13 internal completion ≠ HTTP public ≠ IAM ≠ persistence
-- contrat interne F11 ≠ API réseau
-- seed F13 + SHA ≠ store concurrent à Git
-- hold ≠ blockers fermés
-- CI verte ≠ RUN READY / RGPD VALIDATED
-- capitalisation ≠ nouvelle décision Morris
-- B5/R1/R-M01 REDUCED ≠ CLOSED / SATISFIED / DELIVERY READY
-- simulation R1 ≠ rollback production prouvé
-- claim evaluator borné ≠ T-A6 complete
+- PR #290 mergée ≠ HARD CLOSED ≠ T-A6 COMPLETE
+- Bounded local persistence ≠ product persistence SELECTED ≠ second truth vs Git
+- HARD REDUCED ≠ CLOSED / delivery ready
+- T-A6 FOUNDATION ADVANCED ≠ COMPLETE / Option A complete
+- simulation + audit local ≠ productionRollbackProven
+- CI verte ≠ RUN READY / cutover
 
-## Gate candidat suivant
+## Blockers encore ouverts
+
+HARD · B5 · R1 · R-M01 · T-A6 incomplete · T-A7 OPEN · IAM NOT_SELECTED
 
-`GO PUSH AND OPEN PR — T-A7 CONSOLIDATED B5 R1 R-M01 BLOCKER REDUCTION — NO MERGE DELIVERY OR CUTOVER`
+## Gate candidat suivant
 
-**Statut :** `NOT CONSUMED` · `READY FOR MORRIS PUSH AND PR DECISION` (après PR readiness locale)
+`GO PUSH AND OPEN PR — T-A7 HARD T-A6 ATOMICITY AND BOUNDED PERSISTENCE FOUNDATION — NO MERGE IAM DELIVERY OR CUTOVER`
 
-HARD reste `OPEN HARD`. Aucune autorisation delivery/cutover.
+**Statut :** `NOT CONSUMED` · prêt après PR readiness locale du lot 20
 
 ## Verdict courant
 
-`T-A7 CONSOLIDATED B5 R1 R-M01 BLOCKER REDUCTION EXECUTED LOCALLY — REDUCED AND REMAIN OPEN — HARD UNCHANGED — NO IAM PERSISTENCE DELIVERY OR CUTOVER — PROJECT BRANCH NOT PUSHED`
+`T-A7 HARD AND T-A6 FOUNDATION LOT COMPLETE — HARD AND T-A6 SUBSTANTIALLY ADVANCED BUT REMAIN OPEN — BOUNDED LOCAL PERSISTENCE DECISION RECORDED — ATOMICITY AND ROLLBACK EVIDENCE ADDED — B5 R1 R-M01 REMAIN OPEN — IAM NOT SELECTED — NO DELIVERY OR CUTOVER — LOCAL COMMITS READY FOR MORRIS PUSH AND PR DECISION — PROJECT BRANCH NOT PUSHED`
+
+---
+
+## Historique — lot consolidé B5/R1/R-M01
+
+> Voir `19`. Intégré via PR #290 (`1068ddb…`). Avant merge, le lot était local sur
+> `delivery/sfia-studio-t-a7-consolidated-blocker-reduction`.
 
 ---
 
@@ -89,8 +88,6 @@ HARD reste `OPEN HARD`. Aucune autorisation delivery/cutover.
 
 Avant merge #288, le lot existait sur
 `delivery/sfia-studio-t-a7-f11-f13-internal-completion` @ `5afe095…`.
-Les formulations « READY FOR PR READINESS RE-RUN » / « TYPECHECK TO BE RECONFIRMED »
-étaient **vraies avant** push/PR/merge #288 ; elles sont **obsolètes** pour l’état courant en tête de README.
 
 ---
 
@@ -98,25 +95,4 @@ Les formulations « READY FOR PR READINESS RE-RUN » / « TYPECHECK TO BE RECONF
 
 > Section **historique**. Voir aussi `11-t-a7-lot1-post-merge-and-next-blocker-framing.md`.
 
-Post-merge confirmé 2026-07-28 : PR #287 · checks `30393629328` / `30393814783` · branche source préservée · README aligné main.
-
-Gate d’intégration et options N1–N5 : document `11`. N3 a depuis été **sélectionné** par Morris.
-
----
-
-## Historique du lot local pré-intégration (lot 1)
-
-> Section **historique** uniquement. Ne décrit **pas** l’état courant sur `main`.
-
-Avant PR #287, le lot 1 existait uniquement en local sur
-`framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness`
-au-dessus de `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421`.
-
-À cette étape, le résumé d’état indiquait correctement :
-
-- `Push / PR projet : aucun`
-- gate d’intégration candidat `NOT CONSUMED`
-- verdict se terminant par `PROJECT BRANCH NOT PUSHED`
-
-Ces formulations étaient **vraies avant** push/PR/merge #287 (2026-07-28 ~21:49–21:52 CEST).
-Elles sont **obsolètes** pour l’état courant documenté en tête de ce README.
+Post-merge confirmé : PR #287. Gate d’intégration et options N1–N5 : document `11`. N3 depuis **sélectionné** par Morris.
```

## Schéma / migration

- Table `d1_atomic_audit` + indexes (CREATE IF NOT EXISTS) — réversible
- Schema version audit: `t-a7-bounded-atomic-audit.1`

## Tests

- `t-a7-hard-ta6-persistence-foundation.test.ts` — 15 tests
- régression `t-a7-consolidated-blocker-reduction.test.ts` — 19
- `__tests__/platform` — 69 passed
- `__tests__/d1` — 74 passed
- import-boundaries — OK (platform↛d1)

## Commandes / résultats

| Commande | Résultat |
|----------|----------|
| npm run typecheck | OK |
| npm run lint | OK |
| npm test platform | 69 passed |
| npm test d1 | 74 passed |
| npm run build | OK |
| git diff --check | OK |

## Preuves HARD / T-A6 / atomicité / persistance

- HARD: foundation contract + remains OPEN + no CI close
- T-A6: FOUNDATION_ADVANCED + T6-C11/C15 MISSING
- Atomicité: succès/échec/rollback/idempotence tests
- Persistance: audit append/read/cleanup + decision record

## Anti-claims

HARD CLOSED; T-A6/Option A/T-A7 COMPLETE; RUN READY; delivery/cutover; product persistence SELECTED; productionRollbackProven

## Statuts finaux

| Item | Status |
|------|--------|
| HARD | REDUCED — REMAINS OPEN |
| T-A6 | FOUNDATION ADVANCED — REMAINS INCOMPLETE |
| R1 | FURTHER REDUCED — REMAINS OPEN |
| R-M01 | FURTHER REDUCED — REMAINS OPEN |
| B5 | REDUCED — REMAINS OPEN |
| Persistence (local) | SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE |
| Persistence (product) | NOT_SELECTED |
| IAM | NOT_SELECTED |
| T-A7 | OPEN |
| RUN | NOT READY |
| Delivery/cutover | NOT AUTHORIZED |

## Findings

| ID | Sévérité | Surface | Preuve | Impact | Correction | Statut | Bloquant PR |
|----|----------|---------|--------|--------|------------|--------|-------------|
| F-BND-01 | Minor | import boundary | platform imported d1 mid-cycle | test fail | port injecté + decision in platform | CORRECTED | non |
| — | — | — | aucun Critical/Major ouvert | — | — | — | — |

## PR readiness

**READY FOR MORRIS PUSH AND PR DECISION**

- base/commits/scope OK; no forbidden files; persistence decision recorded; migrations reversible
- typecheck/lint/build/tests OK; anti-claims OK; docs 20+README OK
- no upstream / no push / no PR

## Commits

9c12505 docs(sfia-studio): document HARD T-A6 atomicity and persistence foundation lot
a857e0e test(sfia-studio): validate HARD T-A6 atomicity and bounded persistence
5615905 feat(sfia-studio): add T-A7 HARD T-A6 and bounded atomic persistence foundation

## Diff stat

 .../t-a7-hard-ta6-persistence-foundation.test.ts   | 267 +++++++++++++++
 .../sfia-studio/app/lib/d1/boundedAtomicAudit.ts   | 144 ++++++++
 projects/sfia-studio/app/lib/d1/db.ts              |  36 +-
 projects/sfia-studio/app/lib/d1/index.ts           |   9 +
 .../platform/t-a7/boundedPersistenceDecision.ts    |  33 ++
 .../app/lib/platform/t-a7/hardBlockerFoundation.ts | 193 +++++++++++
 .../platform/t-a7/hardTa6FoundationAggregation.ts  |  76 +++++
 .../sfia-studio/app/lib/platform/t-a7/index.ts     |   7 +-
 .../platform/t-a7/projectCycleAtomicCoordinator.ts | 298 +++++++++++++++++
 .../app/lib/platform/t-a7/tA6FoundationStatus.ts   | 133 ++++++++
 ...atomicity-minimal-persistence-foundation-lot.md | 365 +++++++++++++++++++++
 .../t-a7-technical-readiness-framing/README.md     | 112 +++----
 12 files changed, 1603 insertions(+), 70 deletions(-)

## Git final

- branch: `delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation`
- HEAD: `9c125059f3323a7df862b96d32f1940b1cbdefc1`
- upstream: none
- dirty tracked: none
- untracked: `.tmp-sfia-review/**`

## Risques / réserves / dette

- Risque confusion local vs product persistence — documenté
- Dette: table audit + cache idempotency process-local — faible
- Réserve: HARD/T-A6/B5/R1/R-M01 remain OPEN

## Rollback

Revert 3 commits; DROP TABLE d1_atomic_audit; no remote state.

## Actions non exécutées

push projet; PR; merge; IAM; delivery; cutover; HARD close; T-A6 complete

## Gate candidat

`GO PUSH AND OPEN PR — T-A7 HARD T-A6 ATOMICITY AND BOUNDED PERSISTENCE FOUNDATION — NO MERGE IAM DELIVERY OR CUTOVER`

## Verdict

T-A7 HARD AND T-A6 FOUNDATION LOT COMPLETE — HARD AND T-A6 SUBSTANTIALLY ADVANCED BUT REMAIN OPEN — BOUNDED LOCAL PERSISTENCE DECISION RECORDED — ATOMICITY AND ROLLBACK EVIDENCE ADDED — B5 R1 R-M01 REMAIN OPEN — IAM NOT SELECTED — NO DELIVERY OR CUTOVER — LOCAL COMMITS READY FOR MORRIS PUSH AND PR DECISION — HANDOFF UPDATED AND REMOTE VERIFIED
