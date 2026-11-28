import { describe, expect, it } from "vitest";
import {
  CYCLE_OBJECTIVE_PENDING_LABEL,
  displayableCycleObjective,
  isOperationalCycleObjective,
  persistableCycleObjective,
} from "@/domains/pilotage/cycle-objective-display";

describe("cycle objective display boundary", () => {
  it("rejects OPEN instruction texts as métier finalité", () => {
    expect(
      isOperationalCycleObjective(
        "Ouvrir le premier cycle CADRAGE, ou reprendre le cycle déjà actif sans doublon",
      ),
    ).toBe(true);
    expect(displayableCycleObjective("OPEN_CYCLE CADRAGE")).toBeNull();
    expect(displayableCycleObjective("Cycle CADRAGE")).toBeNull();
  });

  it("keeps real métier objectives", () => {
    const m =
      "Clarifier l'intention Equip'Campus et le périmètre de coordination entre sites.";
    expect(displayableCycleObjective(m)).toBe(m);
    expect(persistableCycleObjective(m, "CADRAGE")).toBe(m);
  });

  it("persists a non-instructional placeholder when operational", () => {
    const p = persistableCycleObjective("OPEN_CYCLE CADRAGE", "CADRAGE");
    expect(p).toMatch(/Finalité métier à préciser/);
    expect(p).not.toMatch(/OPEN_CYCLE|sans doublon/i);
    expect(CYCLE_OBJECTIVE_PENDING_LABEL.length).toBeGreaterThan(10);
    expect(displayableCycleObjective(p)).toBeNull();
  });
});
