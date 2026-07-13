import { describe, expect, it } from "vitest";
import { validateTitle } from "@/lib/tasks/validation";
import { MAX_TITLE_LENGTH } from "@/lib/tasks/constants";

describe("validation", () => {
  it("requires a non-empty trimmed title", () => {
    expect(validateTitle("   ")).toBe("Le titre est obligatoire.");
    expect(validateTitle("Tâche valide")).toBeNull();
  });

  it("limits title length", () => {
    const tooLong = "a".repeat(MAX_TITLE_LENGTH + 1);
    expect(validateTitle(tooLong)).toBe(
      `Le titre ne peut pas dépasser ${MAX_TITLE_LENGTH} caractères.`,
    );
  });
});
