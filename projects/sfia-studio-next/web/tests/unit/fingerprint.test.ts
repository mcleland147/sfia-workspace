import { describe, expect, it } from "vitest";
import { creationFingerprint } from "@/lib/fingerprint";

describe("creationFingerprint", () => {
  it("is stable for same approved fields", () => {
    const a = creationFingerprint({
      preparationId: "prep_1",
      projectName: " Alpha ",
      previewSummary: "s",
      expectedCreationRevision: 2,
    });
    const b = creationFingerprint({
      preparationId: "prep_1",
      projectName: "Alpha",
      previewSummary: "s",
      expectedCreationRevision: 2,
    });
    expect(a).toBe(b);
  });

  it("changes when revision changes", () => {
    const a = creationFingerprint({
      preparationId: "prep_1",
      projectName: "Alpha",
      previewSummary: "s",
      expectedCreationRevision: 2,
    });
    const b = creationFingerprint({
      preparationId: "prep_1",
      projectName: "Alpha",
      previewSummary: "s",
      expectedCreationRevision: 3,
    });
    expect(a).not.toBe(b);
  });
});
