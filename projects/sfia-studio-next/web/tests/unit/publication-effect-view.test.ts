import { describe, expect, it } from "vitest";
import {
  buildPublicationEffectViewFromOwnerPayload,
  formatPublicationOwnerFactsSnippets,
} from "@/domains/conversation/publication-effect-view";
import { composePublicationEffectRestitution } from "@/domains/conversation/publication-effect-restitution";

describe("publication-effect-view owner hydration", () => {
  it("hydrates PR#19 owner payload into complete COMPLETED view", () => {
    const view = buildPublicationEffectViewFromOwnerPayload({
      outcome: "COMPLETED",
      attemptId: "efx_cf6763da-383f-4abd-be6d-ac9ba29b752f",
      decisionId: "dec_aa4db4e0-83cc-4f9d-9888-379183730db0",
      documentTitle: "Références externes — Enseignements de Chantiers360",
      revisionNumber: 2,
      plan: {
        repositoryFullName: "mcleland147/chantiers360",
        publicationBranch: "sfia/pub-3ab1e0c2eb6b7499",
        targetPath: "references-externes-enseignements-chantiers360.md",
        targetBranch: "main",
      },
      result: {
        commitSha: "16f9961ef2ee6d13235e56059313f691521947fd",
        prNumber: 19,
      },
      prHtmlUrl: "https://github.com/mcleland147/chantiers360/pull/19",
      mergeObserved: false,
    });

    expect(view.publicationBranch).toBe("sfia/pub-3ab1e0c2eb6b7499");
    expect(view.targetPath).toBe("references-externes-enseignements-chantiers360.md");
    expect(view.commitSha).toBe("16f9961ef2ee6d13235e56059313f691521947fd");
    expect(view.prNumber).toBe(19);
    expect(view.prUrl).toBe("https://github.com/mcleland147/chantiers360/pull/19");
    expect(view.fileUrl).toContain("/blob/16f9961ef2ee6d13235e56059313f691521947fd/");
    expect(view.mergeObserved).toBe(false);
    expect(view.baseBranch).toBe("main");

    const text = composePublicationEffectRestitution({ priorContent: "", effect: view });
    expect(text).toMatch(/branche `sfia\/pub-3ab1e0c2eb6b7499`/);
    expect(text).toMatch(/PR #19/);
    expect(text).toMatch(/Aucune fusion vers `main`/);
  });

  it("formats owner snippets without claiming merge from PR_OPEN", () => {
    const lines = formatPublicationOwnerFactsSnippets([
      {
        repositoryFullName: "mcleland147/chantiers360",
        targetPath: "references-externes-enseignements-chantiers360.md",
        publicationBranch: "sfia/pub-3ab1e0c2eb6b7499",
        targetBranch: "main",
        headSha: "16f9961ef2ee6d13235e56059313f691521947fd",
        prNumber: 19,
        publicationStatus: "PR_OPEN",
        effectStatus: "COMPLETED",
        mergeObserved: false,
        prStatusLabel: "PR ouverte (historique Studio — non live GitHub)",
      },
    ]);
    expect(lines).toHaveLength(1);
    expect(lines[0]).toMatch(/branch=sfia\/pub-3ab1e0c2eb6b7499/);
    expect(lines[0]).toMatch(/PR #19/);
    expect(lines[0]).toMatch(/non fusionné vers main/);
    expect(lines[0]).not.toMatch(/fusion D8 observée/);
  });
});
