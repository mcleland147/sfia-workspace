import { describe, expect, it } from "vitest";
import { getRequestStatusLabel } from "./requestStatus";

describe("requestStatus", () => {
  it("labels STAT-05 as En attente", () => {
    expect(getRequestStatusLabel("STAT-05")).toBe("En attente");
  });

  it("labels STAT-07 as Annulée", () => {
    expect(getRequestStatusLabel("STAT-07")).toBe("Annulée");
  });
});
