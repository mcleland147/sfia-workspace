import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "src/components/figma");

describe("NoraSharedComposer wiring", () => {
  it("exists and is imported by Travail and sas parents", () => {
    const shared = join(root, "NoraSharedComposer.tsx");
    expect(existsSync(shared)).toBe(true);
    const noraConversation = readFileSync(join(root, "NoraConversation.tsx"), "utf8");
    const preparationConversation = readFileSync(
      join(root, "PreparationConversation.tsx"),
      "utf8",
    );
    expect(noraConversation).toMatch(/from "@\/components\/figma\/NoraSharedComposer"/);
    expect(noraConversation).toMatch(/<NoraSharedComposer[\s\S]*variant="travail"/);
    expect(preparationConversation).toMatch(/from "@\/components\/figma\/NoraSharedComposer"/);
    expect(preparationConversation).toMatch(/<NoraSharedComposer[\s\S]*variant="prep"/);
  });

  it("does not aria-hide the sas command bar when draft is empty (mic stays exposed)", () => {
    const src = readFileSync(join(root, "NoraSharedComposer.tsx"), "utf8");
    const barOpen = src.match(/<div[\s\S]*?className="sas-composer-bar"[^>]*>/)?.[0] ?? "";
    expect(barOpen).not.toContain("aria-hidden");
    expect(src).toMatch(
      /className="sas-composer-hint"[\s\S]*aria-hidden=\{!dictationActive && !props\.draft\.trim\(\)\}/,
    );
  });

  it("routes dictation to project API when projectId is set", () => {
    const src = readFileSync(join(root, "NoraSharedComposer.tsx"), "utf8");
    expect(src).toMatch(
      /dictationPreparationId = props\.projectId \? undefined : props\.preparationId/,
    );
  });
});

describe("ComposerDictationControl contracts", () => {
  it("dictationApiBase prefers project over preparation", async () => {
    const { dictationApiBase } = await import("@/components/figma/ComposerDictationControl");
    expect(
      dictationApiBase({ projectId: "prj_1", preparationId: "prep_1" }),
    ).toBe("/api/projects/prj_1/dictation");
    expect(dictationApiBase({ preparationId: "prep_1" })).toBe(
      "/api/preparations/prep_1/dictation",
    );
    expect(dictationApiBase({})).toBeNull();
  });

  it("shows audio wave only in listening phase (not requesting/finalizing)", () => {
    const src = readFileSync(
      join(process.cwd(), "src/components/figma/ComposerDictationControl.tsx"),
      "utf8",
    );
    expect(src).toMatch(/const showWave = phase === "listening";/);
    expect(src).not.toMatch(/const showWave = phase === "listening" \|\| phase === "finalizing"/);
  });
});