import { describe, expect, it } from "vitest";
import { resolveTransition } from "../src/domain/transitions.js";

describe("resolveTransition", () => {
  it("qualifies from STAT-01", () => {
    const result = resolveTransition("STAT-01", "qualify");
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.toStatus).toBe("STAT-02");
      expect(result.type).toBe("qualification.confirmed");
      expect(result.label).toBe("Qualification fictive confirmée");
    }
  });

  it("plans from STAT-02", () => {
    const result = resolveTransition("STAT-02", "plan");
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.toStatus).toBe("STAT-03");
      expect(result.type).toBe("planning.confirmed");
      expect(result.label).toBe("Planification fictive confirmée");
    }
  });

  it("completes intervention from STAT-03", () => {
    const result = resolveTransition("STAT-03", "complete_intervention");
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.toStatus).toBe("STAT-04");
      expect(result.type).toBe("intervention.completed");
      expect(result.label).toBe("Intervention fictive réalisée");
    }
  });

  it("closes report from STAT-04", () => {
    const result = resolveTransition("STAT-04", "close_report");
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.toStatus).toBe("STAT-06");
      expect(result.type).toBe("report.closed");
      expect(result.label).toBe("Compte rendu fictif clôturé");
    }
  });

  it("refuses transition from STAT-06", () => {
    const result = resolveTransition("STAT-06", "qualify");
    expect(result).toEqual({
      ok: false,
      code: "TRANSITION_NOT_ALLOWED",
    });
  });

  it("refuses unknown action", () => {
    const result = resolveTransition("STAT-01", "unknown_action");
    expect(result).toEqual({
      ok: false,
      code: "INVALID_TRANSITION_ACTION",
    });
  });

  it("refuses wrong status for action", () => {
    const result = resolveTransition("STAT-02", "qualify");
    expect(result).toEqual({
      ok: false,
      code: "TRANSITION_NOT_ALLOWED",
    });
  });
});
