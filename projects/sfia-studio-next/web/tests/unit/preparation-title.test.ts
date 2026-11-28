import { describe, expect, it } from "vitest";
import { ZodObject, ZodOptional, ZodString } from "zod";
import {
  NoraTurnQualificationLiveOutputSchema,
  NoraTurnQualificationSchema,
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  validateNoraTurnQualification,
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

  it("ignores a non-textual or very long suggestion without losing the qualification", () => {
    expect(NoraTurnQualificationLiveOutputSchema).toBeInstanceOf(ZodObject);
    const field = NoraTurnQualificationLiveOutputSchema.shape.suggestedPreparationTitle;
    expect(field).toBeInstanceOf(ZodOptional);
    expect(field.unwrap()).toBeInstanceOf(ZodString);
    const base = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "Comprendre le sujet",
    };
    const numeric = validateNoraTurnQualification({ ...base, suggestedPreparationTitle: 12 });
    expect(numeric.ok).toBe(true);
    if (numeric.ok) expect(numeric.value.suggestedPreparationTitle).toBeUndefined();
    const huge = validateNoraTurnQualification({ ...base, suggestedPreparationTitle: "a".repeat(4000) });
    expect(huge.ok).toBe(true);
    if (huge.ok) expect(normalizePreparationTitle(huge.value.suggestedPreparationTitle ?? "")).toBeNull();
    expect(validateNoraTurnQualification({ ...base, goal: 4 }).ok).toBe(false);
  });
});
