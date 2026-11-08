import { describe, expect, it } from "vitest";
import {
  PREPARATIONS_PAGE_SIZE,
  decodePreparationsCursor,
  encodePreparationsCursor,
} from "@/domains/identity/portfolio-cursor";
import { preparationDisplayLabel } from "@/domains/identity/portfolio-labels";
import { StudioError } from "@/lib/http-errors";

describe("A1 preparations cursor", () => {
  it("round-trips opaque keyset cursor", () => {
    const createdAt = new Date("2026-11-08T10:00:00.000Z");
    const encoded = encodePreparationsCursor({ createdAt, id: "prep-1" });
    const decoded = decodePreparationsCursor(encoded);
    expect(decoded).toEqual({ createdAt: createdAt.toISOString(), id: "prep-1" });
  });

  it("rejects malformed cursor as INVALID_CURSOR (400)", () => {
    expect(() => decodePreparationsCursor("not-a-cursor")).toThrow(StudioError);
    try {
      decodePreparationsCursor("%%%");
    } catch (e) {
      expect(e).toBeInstanceOf(StudioError);
      expect((e as StudioError).httpStatus).toBe(400);
      expect((e as StudioError).message).toBe("INVALID_CURSOR");
    }
  });

  it("uses page size 25", () => {
    expect(PREPARATIONS_PAGE_SIZE).toBe(25);
  });
});

describe("A1 preparation labels", () => {
  it("stays neutral when preview empty", () => {
    expect(preparationDisplayLabel({ id: "abcdefghij" })).toBe("Préparation abcdefgh");
  });

  it("prefers previewName", () => {
    expect(
      preparationDisplayLabel({
        id: "x",
        previewName: "  Sas alpha  ",
        previewSummary: "ignored",
      }),
    ).toBe("Sas alpha");
  });
});
