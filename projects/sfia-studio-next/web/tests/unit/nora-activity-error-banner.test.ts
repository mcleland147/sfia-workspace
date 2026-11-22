import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("Nora activity error banner copy", () => {
  it("does not imply a failed mutation for informational UNKNOWN turns", () => {
    const src = readFileSync(
      join(process.cwd(), "src/components/figma/NoraConversation.tsx"),
      "utf8",
    );
    expect(src).toMatch(/nora-activity-error/);
    expect(src).toMatch(/Aucune mutation n&apos;est relancée automatiquement/);
    expect(src).toMatch(/intention d&apos;effet reste ouverte/);
    // Old mutation-centric wording must not remain as the sole message.
    expect(src).not.toMatch(
      /La dernière tentative n&apos;a pas abouti clairement\. Le texte saisi est conservé ;\s*réessayez ou réconciliez si une intention reste ouverte\./,
    );
  });
});
