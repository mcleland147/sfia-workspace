import { describe, expect, it } from "vitest";
import {
  NoraTurnQualificationSchema,
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
} from "@/domains/conversation/semantic-qualification";
import { normalizePreparationTitle } from "@/domains/preparation/space-naming";

describe("preparation title", () => {
  it("accepts a historical qualification that omits the title", () => {
    const parsed = NoraTurnQualificationSchema.parse({
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "Bonjour",
      proposedProjectName: "Nom de travail",
    });
    expect(parsed.suggestedPreparationTitle).toBeUndefined();
    expect(parsed.proposedProjectName).toBe("Nom de travail");
    expect(parsed.goal).toBe("Bonjour");
  });

  it("keeps an unusable suggestion inside a valid qualification", () => {
    const tooLong = "a".repeat(90);
    const parsed = NoraTurnQualificationSchema.parse({
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      suggestedPreparationTitle: tooLong,
    });
    expect(parsed.suggestedPreparationTitle).toBe(tooLong);
    expect(normalizePreparationTitle(tooLong)).toBeNull();
    expect(normalizePreparationTitle("  Refonte   des accès  ")).toBe("Refonte des accès");
    expect(normalizePreparationTitle("ligne\nautre")).toBeNull();
    expect(normalizePreparationTitle("<script>")).toBeNull();
    expect(normalizePreparationTitle("")).toBeNull();
  });
});
