import { describe, expect, it } from "vitest";
import { mergeDocumentProductionBody } from "@/domains/conversation/run-nora-cognitive-turn";

describe("C22 production consolidation (owner mergeDocumentProductionBody)", () => {
  it("APPEND mid-work keeps prior + novel", () => {
    const prev = "# Mission\n\nPart A only.\n\n## Exigence déterminante\n\nConserver le plafond 50.";
    const next = "## Critères\n\n- C1";
    const merged = mergeDocumentProductionBody({
      prevDoc: prev,
      incoming: next,
      mergeMode: "APPEND",
      continueWork: true,
    });
    expect(merged.appliedMode).toBe("APPEND");
    expect(merged.contentMarkdown).toContain("plafond 50");
    expect(merged.contentMarkdown).toContain("Critères");
  });

  it("SUPERSEDE only when explicit — not from heading count", () => {
    const prev =
      "# Mission\n\n## Exigence déterminante\n\nConserver le plafond 50.\n\n## Scope\n\nDraft.";
    const final = [
      "# Mission technique isolée",
      "",
      "## Périmètre",
      "Implémenter add(a,b).",
      "",
      "## Critères",
      "- add(2,3) === 5",
    ].join("\n");
    const withoutMode = mergeDocumentProductionBody({
      prevDoc: prev,
      incoming: final,
      mergeMode: null,
      workDisposition: "COMPLETE",
      continueWork: false,
    });
    // C22: no implicit supersede from length/headings — APPEND preserves prior.
    expect(withoutMode.contentMarkdown).toContain("plafond 50");
    expect(withoutMode.appliedMode).toBe("APPEND");

    const withMode = mergeDocumentProductionBody({
      prevDoc: prev,
      incoming: final + "\n\n## Exigence déterminante\n\nConserver le plafond 50.",
      mergeMode: "SUPERSEDE",
      workDisposition: "COMPLETE",
      continueWork: false,
    });
    expect(withMode.appliedMode).toBe("SUPERSEDE");
    expect(withMode.contentMarkdown).toContain("plafond 50");
    expect(withMode.contentMarkdown).not.toMatch(/Draft\./);
  });
});
