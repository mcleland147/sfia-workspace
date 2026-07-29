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
