/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  assertNeverDeliveryReady,
  evaluatePreDeliveryControl,
} from "@/lib/platform/t-a7/blockerControlPlane";
import {
  runIdempotentRollback,
  runSimulatedAtomicOperation,
} from "@/lib/platform/t-a7/simulatedAtomicOperation";
import { evaluateBoundedClaim } from "@/lib/platform/t-a7/boundedClaimEvaluator";
import { queryBlockerAggregation } from "@/lib/platform/t-a7/blockerAggregation";
import { readMethodModeHold } from "@/lib/d1/methodModeHold";
import { queryOperationalReadiness } from "@/lib/d1/operationalReadiness";
import fs from "node:fs";
import path from "node:path";

describe("T-A7 B5 pre-delivery control plane", () => {
  it("keeps B5 blocking and never delivery-ready when HARD is open", () => {
    const d = evaluatePreDeliveryControl({ b5FoundationPresent: true });
    expect(d.hardOpen).toBe(true);
    expect(d.b5Open).toBe(true);
    expect(d.deliveryReady).toBe(false);
    expect(d.actionAuthorized).toBe("STOP_BEFORE_DELIVERY");
    expect(d.accessSurface).toBe("INTERNAL_ONLY");
    expect(d.iam).toBe("NOT_SELECTED");
    expect(d.persistence).toBe("NOT_SELECTED");
    const b5 = d.blockers.find((b) => b.id === "B5");
    expect(b5?.status).toBe("REDUCED");
    expect(b5?.deliveryReady).toBe(false);
    expect(b5?.openDependencies).toContain("HARD");
    assertNeverDeliveryReady(d);
  });

  it("preserves UNKNOWN/PARTIAL honesty when foundation absent", () => {
    const d = evaluatePreDeliveryControl({ b5FoundationPresent: false });
    const b5 = d.blockers.find((b) => b.id === "B5");
    expect(b5?.status).toBe("OPEN");
    expect(b5?.evidenceState).toBe("PARTIAL");
    expect(d.deliveryReady).toBe(false);
  });

  it("reports HARD dependency and freezes results", () => {
    const d = evaluatePreDeliveryControl({ b5FoundationPresent: true });
    expect(d.blockers.find((b) => b.id === "HARD")?.status).toBe("OPEN");
    expect(() => {
      // @ts-expect-error intentional
      d.deliveryReady = true;
    }).toThrow();
  });
});

describe("T-A7 R1 simulated atomic operation", () => {
  type S = { value: number; label: string };

  const basePlan = {
    initial: { value: 1, label: "init" } satisfies S,
    prepare: (s: S) => ({ ...s, label: "prepared" }),
    apply: (s: S) => ({ ...s, value: s.value + 1, label: "applied" }),
    verify: (s: S) => s.value === 2 && s.label === "applied",
    rollback: (s: S) => ({ ...s, value: 1, label: "init" }),
  };

  it("succeeds on nominal simulation", () => {
    const r = runSimulatedAtomicOperation(basePlan);
    expect(r.outcome).toBe("SUCCEEDED");
    expect(r.persistence).toBe("NONE_IN_MEMORY_ONLY");
    expect(r.productionRollbackProven).toBe(false);
    expect(r.finalState.partialValidated).toBe(false);
    expect(r.finalState.workingSnapshot.value).toBe(2);
  });

  it("fails prepare without mutating past initial", () => {
    const r = runSimulatedAtomicOperation({ ...basePlan, failAt: "prepare" });
    expect(r.outcome).toBe("FAILED_PREPARE");
    expect(r.finalState.workingSnapshot).toEqual(basePlan.initial);
  });

  it("rolls back after apply failure", () => {
    const r = runSimulatedAtomicOperation({ ...basePlan, failAt: "apply" });
    expect(r.outcome).toBe("ROLLED_BACK");
    expect(r.finalState.rolledBack).toBe(true);
    expect(r.finalState.workingSnapshot).toEqual(basePlan.initial);
    expect(r.finalState.partialValidated).toBe(false);
  });

  it("rolls back after verify failure", () => {
    const r = runSimulatedAtomicOperation({
      ...basePlan,
      verify: () => false,
    });
    expect(r.outcome).toBe("ROLLED_BACK");
    expect(r.finalState.workingSnapshot).toEqual(basePlan.initial);
  });

  it("supports idempotent double rollback", () => {
    const first = runSimulatedAtomicOperation({
      ...basePlan,
      failAt: "apply",
    });
    const second = runIdempotentRollback(first, basePlan.rollback);
    expect(second.outcome).toBe("ROLLED_BACK");
    expect(second.finalState.history).toContain("rollback:idempotent_noop");
  });

  it("reports rollback failure honestly", () => {
    const r = runSimulatedAtomicOperation({
      ...basePlan,
      failAt: "verify",
      rollbackFails: true,
    });
    expect(r.outcome).toBe("ROLLBACK_FAILED");
    expect(r.productionRollbackProven).toBe(false);
  });

  it("never claims external persistence", () => {
    const r = runSimulatedAtomicOperation(basePlan);
    expect(r.persistence).toBe("NONE_IN_MEMORY_ONLY");
    expect(r.iam).toBe("NOT_SELECTED");
  });
});

describe("T-A7 R-M01 bounded claim evaluator", () => {
  it("supports bounded non-delivery claims with full evidence", () => {
    const e = evaluateBoundedClaim({
      claimId: "F11_INTERNAL_CONTRACT_PRESENT",
      evidenceSources: [
        { id: "t1", kind: "TEST", present: true, detail: "unit" },
      ],
      criteria: [
        { id: "c1", state: "SATISFIED", detail: "INTERNAL_ONLY" },
      ],
    });
    expect(e.status).toBe("SUPPORTED");
    expect(e.rM01RemainsOpen).toBe(true);
    expect(e.tA6Complete).toBe(false);
  });

  it("marks unsupported / unknown / blocked honestly", () => {
    expect(
      evaluateBoundedClaim({
        claimId: "F11_INTERNAL_CONTRACT_PRESENT",
        evidenceSources: [
          { id: "t1", kind: "TEST", present: true, detail: "unit" },
        ],
        criteria: [
          { id: "c1", state: "NOT_SATISFIED", detail: "missing" },
        ],
      }).status,
    ).toBe("UNSUPPORTED");

    expect(
      evaluateBoundedClaim({
        claimId: "F11_INTERNAL_CONTRACT_PRESENT",
      }).status,
    ).toBe("UNKNOWN");

    expect(
      evaluateBoundedClaim({
        claimId: "DELIVERY_READY",
        hardOpen: true,
        ciGreen: true,
      }).status,
    ).toBe("BLOCKED");
  });

  it("refuses CI-green-only and health SIMULATED as readiness proof", () => {
    expect(
      evaluateBoundedClaim({ claimId: "CI_GREEN_ONLY", ciGreen: true }).status,
    ).toBe("UNSUPPORTED");
    expect(
      evaluateBoundedClaim({
        claimId: "HEALTH_SIMULATED",
        healthStatus: "SIMULATED",
      }).status,
    ).toBe("UNSUPPORTED");
  });

  it("blocks delivery/cutover/RUN claims while HARD is open", () => {
    for (const claimId of [
      "DELIVERY_READY",
      "CUTOVER_READY",
      "RUN_READY",
    ] as const) {
      const e = evaluateBoundedClaim({ claimId, hardOpen: true, ciGreen: true });
      expect(e.status).toBe("BLOCKED");
      expect(e.status).not.toBe("SUPPORTED");
    }
  });

  it("blocks T-A6/Option A/T-A7 complete while T-A6 incomplete", () => {
    for (const claimId of [
      "T_A6_COMPLETE",
      "OPTION_A_COMPLETE",
      "T_A7_COMPLETE",
    ] as const) {
      const e = evaluateBoundedClaim({ claimId, tA6Complete: false });
      expect(e.status).toBe("BLOCKED");
      expect(e.rM01RemainsOpen).toBe(true);
    }
  });
});

describe("T-A7 blocker aggregation + compatibility", () => {
  it("aggregates B5/R1/R-M01/HARD as reduced-but-open and HARD unchanged", () => {
    const snap = queryBlockerAggregation();
    expect(snap.accessSurface).toBe("INTERNAL_ONLY");
    expect(snap.httpRoute).toBe(false);
    expect(snap.adminUi).toBe(false);
    expect(snap.writeCommands).toBe(false);
    expect(snap.deliveryAuthorized).toBe(false);
    expect(snap.cutoverAuthorized).toBe(false);
    expect(snap.runReady).toBe(false);
    expect(snap.hardUnchanged).toBe(true);
    expect(snap.sampleClaimGuard.status).toBe("BLOCKED");

    const byId = Object.fromEntries(snap.blockers.map((b) => [b.id, b]));
    expect(byId.B5.reduction).toBe("REDUCED");
    expect(byId.B5.remainsOpen).toBe(true);
    expect(byId.R1.reduction).toBe("REDUCED");
    expect(byId.R1.remainsOpen).toBe(true);
    expect(byId.R_M01.reduction).toBe("REDUCED");
    expect(byId.R_M01.remainsOpen).toBe(true);
    expect(byId.HARD.reduction).toBe("UNCHANGED");
    expect(byId.HARD.lifecycle).toBe("OPEN_HARD");
  });

  it("remains compatible with MethodMode hold and F11 readiness", () => {
    const hold = readMethodModeHold();
    expect(hold.active).toBe(true);
    const codes = hold.reasons.map((r) => r.code);
    expect(codes).toEqual(
      expect.arrayContaining([
        "B5_OPEN",
        "R1_OPEN",
        "R_M01_OPEN",
        "HARD_OPEN",
      ]),
    );

    const f11 = queryOperationalReadiness();
    expect(f11.accessSurface).toBe("INTERNAL_ONLY");
    expect(f11.readinessStatus).toBe("NOT_READY");
    expect(f11.observed.health.status).toBe("SIMULATED");
  });

  it("exports only from platform/t-a7 barrel without HTTP routes", () => {
    const barrel = path.join(
      process.cwd(),
      "lib/platform/t-a7/index.ts",
    );
    const src = fs.readFileSync(barrel, "utf8");
    expect(src).toContain("blockerControlPlane");
    expect(src).toContain("simulatedAtomicOperation");
    expect(src).toContain("boundedClaimEvaluator");
    expect(src).toContain("blockerAggregation");
    expect(src).not.toMatch(/next\/(server|headers)|express|http\.createServer/);
  });

  it("does not import method/** or OPS1 functional modules", () => {
    const root = path.join(process.cwd(), "lib/platform/t-a7");
    for (const file of [
      "blockerControlPlane.ts",
      "simulatedAtomicOperation.ts",
      "boundedClaimEvaluator.ts",
      "blockerAggregation.ts",
    ]) {
      const src = fs.readFileSync(path.join(root, file), "utf8");
      expect(src).not.toMatch(/from ["']method\//);
      expect(src).not.toMatch(/ops1/i);
      expect(src).not.toMatch(/better-sqlite|sqlite|postgres|prisma/i);
      expect(src).not.toMatch(/fetch\(|axios|node:net/);
    }
  });
});
