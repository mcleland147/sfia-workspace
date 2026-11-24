/**
 * ML5 C10 — confirmed must be explicit boolean; absent ≠ silent refuse.
 */
import { describe, expect, it } from "vitest";

describe("ML5 C10 D6 confirmed contract", () => {
  it("treats only true as Oui and only false as Non", () => {
    const decide = (confirmed: unknown) => {
      if (typeof confirmed !== "boolean") return "REJECT_NO_ACT";
      return confirmed ? "AUTHORIZE" : "REFUSE";
    };
    expect(decide(true)).toBe("AUTHORIZE");
    expect(decide(false)).toBe("REFUSE");
    expect(decide(undefined)).toBe("REJECT_NO_ACT");
    expect(decide(null)).toBe("REJECT_NO_ACT");
    expect(decide("true")).toBe("REJECT_NO_ACT");
    expect(decide(1)).toBe("REJECT_NO_ACT");
  });
});
