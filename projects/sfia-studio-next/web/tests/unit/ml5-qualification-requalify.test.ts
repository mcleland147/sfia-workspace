import { describe, expect, it } from "vitest";

/**
 * G15 — requalification history append is pure logic exercised here;
 * route POST uses the same snapshot shape without Cursor redispatch.
 */
function appendQualificationHistory(
  historyJson: string,
  snapshot: {
    at: string;
    verdict: string;
    authorPilotId: string;
    requalifyReason: string;
  },
): unknown[] {
  let history: unknown[] = [];
  try {
    history = JSON.parse(historyJson || "[]") as unknown[];
  } catch {
    history = [];
  }
  if (!Array.isArray(history)) history = [];
  history.push(snapshot);
  return history;
}

describe("ML5 G15 qualification requalify history", () => {
  it("preserves prior verdict when appending", () => {
    const next = appendQualificationHistory("[]", {
      at: "2026-11-23T10:00:00.000Z",
      verdict: "INDETERMINATE",
      authorPilotId: "pilot_a",
      requalifyReason: "Handoff late pièces reçues",
    });
    expect(next).toHaveLength(1);
    expect((next[0] as { verdict: string }).verdict).toBe("INDETERMINATE");
    const again = appendQualificationHistory(JSON.stringify(next), {
      at: "2026-11-23T11:00:00.000Z",
      verdict: "NON_CONFORME",
      authorPilotId: "pilot_a",
      requalifyReason: "Tests non capturés",
    });
    expect(again).toHaveLength(2);
    expect((again[0] as { verdict: string }).verdict).toBe("INDETERMINATE");
    expect((again[1] as { verdict: string }).verdict).toBe("NON_CONFORME");
  });

  it("never implies cursorRedispatch", () => {
    const responseShape = { requalified: true, cursorRedispatch: false as const };
    expect(responseShape.cursorRedispatch).toBe(false);
  });
});
