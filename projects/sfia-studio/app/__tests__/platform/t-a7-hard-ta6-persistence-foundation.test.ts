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
