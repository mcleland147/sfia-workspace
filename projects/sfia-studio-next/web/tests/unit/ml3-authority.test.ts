import { describe, expect, it } from "vitest";
import { evaluateCurrentAuthority, methodUsageRestricted } from "@/domains/decisions/authority";

describe("ml3 authority restrictions", () => {
  const cycleBlock = {
    id: "r-cycle",
    targetKind: "CYCLE_MUTATION",
    targetRef: "*",
    status: "ACTIVE",
  };

  it("blocks cycle mutations and still allows a lift", () => {
    expect(evaluateCurrentAuthority({ operation: "OPEN_CYCLE", restrictions: [cycleBlock] }).allowed).toBe(
      false,
    );
    expect(
      evaluateCurrentAuthority({ operation: "TRANSITION_CYCLE", restrictions: [cycleBlock] }).allowed,
    ).toBe(false);
    expect(
      evaluateCurrentAuthority({ operation: "LIFT_RESTRICTION", restrictions: [cycleBlock] }).allowed,
    ).toBe(true);
    expect(
      evaluateCurrentAuthority({
        operation: "OPEN_CYCLE",
        restrictions: [{ ...cycleBlock, status: "LIFTED" }],
      }).allowed,
    ).toBe(true);
  });

  it("blocks only the named cycle and lets another cycle through", () => {
    const uxOnly = {
      id: "r-ux",
      targetKind: "CYCLE_MUTATION",
      targetRef: "UX_UI",
      status: "ACTIVE",
    };
    expect(
      evaluateCurrentAuthority({
        operation: "OPEN_CYCLE",
        restrictions: [uxOnly],
        cycleType: "UX_UI",
      }).allowed,
    ).toBe(false);
    expect(
      evaluateCurrentAuthority({
        operation: "OPEN_CYCLE",
        restrictions: [uxOnly],
        cycleType: "CADRAGE",
      }).allowed,
    ).toBe(true);
    expect(
      evaluateCurrentAuthority({
        operation: "CLOSE_CYCLE",
        restrictions: [{ ...uxOnly, targetRef: "cyc-a" }],
        cycleId: "cyc-a",
      }).allowed,
    ).toBe(false);
    expect(
      evaluateCurrentAuthority({
        operation: "CLOSE_CYCLE",
        restrictions: [{ ...uxOnly, targetRef: "cyc-a" }],
        cycleId: "cyc-b",
      }).allowed,
    ).toBe(true);
  });

  it("treats a global cycle or pilotage target as blocking every candidate", () => {
    for (const targetRef of ["*", ""]) {
      const globalCycle = {
        id: "r-global",
        targetKind: "CYCLE_MUTATION",
        targetRef,
        status: "ACTIVE",
      };
      expect(
        evaluateCurrentAuthority({
          operation: "OPEN_CYCLE",
          restrictions: [globalCycle],
          cycleType: "CADRAGE",
        }).allowed,
      ).toBe(false);
      expect(
        evaluateCurrentAuthority({
          operation: "OPEN_CYCLE",
          restrictions: [globalCycle],
          cycleType: "UX_UI",
        }).allowed,
      ).toBe(false);
    }
    const globalEffect = {
      id: "r-effect",
      targetKind: "PILOTAGE_EFFECT",
      targetRef: "*",
      status: "ACTIVE",
    };
    expect(
      evaluateCurrentAuthority({
        operation: "CHOOSE_METHOD",
        restrictions: [globalEffect],
        methodRef: "Scrum",
      }).allowed,
    ).toBe(false);
    expect(
      evaluateCurrentAuthority({
        operation: "OPEN_CYCLE",
        restrictions: [globalEffect],
        cycleType: "CADRAGE",
      }).allowed,
    ).toBe(false);
    const namedEffect = { ...globalEffect, targetRef: "Scrum" };
    expect(
      evaluateCurrentAuthority({
        operation: "CHOOSE_METHOD",
        restrictions: [namedEffect],
        methodRef: "Scrum",
        effectTargetRef: "Scrum",
      }).allowed,
    ).toBe(false);
    expect(
      evaluateCurrentAuthority({
        operation: "CHOOSE_METHOD",
        restrictions: [namedEffect],
        methodRef: "Kanban",
        effectTargetRef: "Kanban",
      }).allowed,
    ).toBe(true);
  });

  it("marks method use as restricted without treating that as erasure or a cycle block", () => {
    const methodUse = {
      id: "r-method",
      targetKind: "METHOD_USE",
      targetRef: "Scrum",
      status: "ACTIVE",
    };
    expect(methodUsageRestricted([methodUse], "Scrum")).toBe(true);
    expect(methodUsageRestricted([methodUse], "Kanban")).toBe(false);
    const verdict = evaluateCurrentAuthority({
      operation: "OPEN_CYCLE",
      restrictions: [methodUse],
      methodRef: "Scrum",
    });
    expect(verdict.allowed).toBe(true);
    expect(verdict.usageRestricted).toBe(true);
  });

  it("CR-01: TRANSITION_CYCLE is blocked when source A or target B is restricted", () => {
    const blockB = {
      id: "r-b",
      targetKind: "CYCLE_MUTATION",
      targetRef: "UX_UI",
      status: "ACTIVE",
    };
    expect(
      evaluateCurrentAuthority({
        operation: "TRANSITION_CYCLE",
        restrictions: [blockB],
        cycleId: "cyc-a",
        cycleType: "CADRAGE",
        toCycleType: "UX_UI",
      }).allowed,
    ).toBe(false);
    expect(
      evaluateCurrentAuthority({
        operation: "TRANSITION_CYCLE",
        restrictions: [blockB],
        cycleId: "cyc-a",
        cycleType: "CADRAGE",
        toCycleType: "DELIVERY",
      }).allowed,
    ).toBe(true);

    const blockA = {
      id: "r-a",
      targetKind: "CYCLE_MUTATION",
      targetRef: "CADRAGE",
      status: "ACTIVE",
    };
    expect(
      evaluateCurrentAuthority({
        operation: "TRANSITION_CYCLE",
        restrictions: [blockA],
        cycleId: "cyc-a",
        cycleType: "CADRAGE",
        toCycleType: "UX_UI",
      }).allowed,
    ).toBe(false);

    const blockAId = {
      id: "r-aid",
      targetKind: "CYCLE_MUTATION",
      targetRef: "cyc-a",
      status: "ACTIVE",
    };
    expect(
      evaluateCurrentAuthority({
        operation: "TRANSITION_CYCLE",
        restrictions: [blockAId],
        cycleId: "cyc-a",
        cycleType: "CADRAGE",
        toCycleType: "UX_UI",
      }).allowed,
    ).toBe(false);

    const unrelated = {
      id: "r-other",
      targetKind: "CYCLE_MUTATION",
      targetRef: "SECURITE",
      status: "ACTIVE",
    };
    expect(
      evaluateCurrentAuthority({
        operation: "TRANSITION_CYCLE",
        restrictions: [unrelated],
        cycleId: "cyc-a",
        cycleType: "CADRAGE",
        toCycleType: "UX_UI",
      }).allowed,
    ).toBe(true);

    const global = {
      id: "r-g",
      targetKind: "CYCLE_MUTATION",
      targetRef: "*",
      status: "ACTIVE",
    };
    expect(
      evaluateCurrentAuthority({
        operation: "TRANSITION_CYCLE",
        restrictions: [global],
        cycleId: "cyc-a",
        cycleType: "CADRAGE",
        toCycleType: "UX_UI",
      }).allowed,
    ).toBe(false);
  });
});
