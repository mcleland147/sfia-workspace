import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import {
  composerDraftStorageKey,
  prepComposerDraftStorageKey,
} from "@/domains/conversation/composer-draft";

const root = join(process.cwd(), "src/components/figma");

describe("NoraSharedComposer wiring", () => {
  it("isolates prep vs projet draft storage keys (C.2)", () => {
    const projectKey = composerDraftStorageKey({
      pilotId: "pilot-a",
      projectId: "proj-1",
      lane: "3100",
    });
    const prepKey = prepComposerDraftStorageKey({
      pilotId: "pilot-a",
      preparationId: "prep-1",
      lane: "3100",
    });
    expect(projectKey).not.toEqual(prepKey);
    expect(projectKey).toContain("travail");
    expect(prepKey).toContain("prep");
  });

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

  it("keeps the microphone in the shared row, not a second command bar", () => {
    const src = readFileSync(join(root, "NoraSharedComposer.tsx"), "utf8");
    expect(src).not.toMatch(/sas-composer/);
    const row = src.match(/<div className="fig-travail-composer-row">[\s\S]*?<\/div>/)?.[0] ?? "";
    expect(row).toContain("dictationControl");
    expect(row).not.toContain("aria-hidden={");
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
    // Wave RAF starts only after setPhase("listening") — not during connexion.
    expect(src).toMatch(
      /setPhase\("listening"\);[\s\S]*requestAnimationFrame\(tick\)/,
    );
  });

  it("maps SESSION_OPEN_TIMEOUT to an explicit French client error (MP-06 DET)", async () => {
    const { dictationClientErrorMessage } = await import(
      "@/components/figma/ComposerDictationControl"
    );
    expect(
      dictationClientErrorMessage({ code: "SESSION_OPEN_TIMEOUT" }),
    ).toMatch(/Connexion dictée expirée/);
    expect(
      dictationClientErrorMessage({ message: "SESSION_OPEN_TIMEOUT" }),
    ).toMatch(/Connexion dictée expirée/);
    expect(
      dictationClientErrorMessage({ code: "TRANSPORT_OPEN_FAILED" }),
    ).toMatch(/Transport dictée indisponible/);
  });
});

describe("NoraSharedComposer C.1 consolidation", () => {
  it("shares one keydown/IME path via sharedTextareaProps (prep vs travail)", () => {
    const src = readFileSync(join(root, "NoraSharedComposer.tsx"), "utf8");
    expect(src).toMatch(/const sharedTextareaProps = \{/);
    expect(src).toMatch(/function onTextareaKeyDown/);
    expect(src).toMatch(/function canAdmitSend/);
    const keydown = src.match(/function onTextareaKeyDown[\s\S]*?\n  \}/)?.[0] ?? "";
    expect(keydown).not.toMatch(/variant|metaKey|ctrlKey/);
    expect(keydown).toMatch(/!e\.shiftKey/);
    expect(src).toMatch(/className="fig-composer fig-travail-composer relative"/);
    expect(src).not.toMatch(/if \(props\.variant === "prep"\) return/);
    expect(src).toMatch(/dictationActive[\s\S]*e\.preventDefault/);
  });

  it("blocks draft mutation while dictation is active", () => {
    const src = readFileSync(join(root, "NoraSharedComposer.tsx"), "utf8");
    expect(src).toMatch(
      /onChange: \(e: ChangeEvent<HTMLTextAreaElement>\) => \{\s*if \(composerLocked \|\| dictationActive\) return;/,
    );
  });
});