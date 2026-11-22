import { describe, expect, it } from "vitest";
import {
  publicationBranchFromCorrelationKey,
  resolvePublicationBranchName,
} from "@/domains/execution/fingerprint";
import { extractExplicitPublicationBranch } from "@/domains/conversation/conversation-publication-mandate-guards";

describe("preparePublication branch selection contract", () => {
  it("uses explicit Pilote branch without correlation substitution", () => {
    const corr = "pub:mission:turn-8ca19672-e702-489c-b6b8-dd03ed3a5049";
    const mandated = "sfia/pub-r12-recette-20261122";
    const out = resolvePublicationBranchName({
      correlationKey: corr,
      targetBranch: "main",
      publicationBranch: mandated,
    });
    expect(out.ok).toBe(true);
    if (out.ok) {
      expect(out.publicationBranch).toBe(mandated);
      expect(out.publicationBranch).not.toBe(publicationBranchFromCorrelationKey(corr));
    }
  });

  it("auto-generates from correlationKey when no explicit head is named", () => {
    const corr = "pub:mission:turn-demo";
    const out = resolvePublicationBranchName({
      correlationKey: corr,
      targetBranch: "main",
      publicationBranch: null,
    });
    expect(out.ok).toBe(true);
    if (out.ok) {
      expect(out.publicationBranch).toBe(publicationBranchFromCorrelationKey(corr));
      expect(out.publicationBranch.startsWith("sfia/pub-")).toBe(true);
    }
  });

  it("refuses explicit branch identical to base", () => {
    const out = resolvePublicationBranchName({
      correlationKey: "pub:mission:x",
      targetBranch: "main",
      publicationBranch: "main",
    });
    expect(out.ok).toBe(false);
    if (!out.ok) expect(out.reason).toBe("SAME_AS_BASE");
  });

  it("end-to-end: USER labeled branch → prepare input → not correlation hash", () => {
    const user = `- Branche à créer : \`sfia/pub-r12-recette-20261122\`\n- Base : \`main\``;
    const explicit = extractExplicitPublicationBranch({ userText: user, baseBranch: "main" });
    expect(explicit).toBe("sfia/pub-r12-recette-20261122");
    const corr = "pub:mission:turn-8ca19672-e702-489c-b6b8-dd03ed3a5049";
    const out = resolvePublicationBranchName({
      correlationKey: corr,
      targetBranch: "main",
      publicationBranch: explicit,
    });
    expect(out).toEqual({ ok: true, publicationBranch: "sfia/pub-r12-recette-20261122" });
    expect(publicationBranchFromCorrelationKey(corr)).toBe("sfia/pub-91996c24991c351b");
  });
});
