import { describe, expect, it } from "vitest";
import {
  assertPublicationMandateCoversPlan,
  extractPublicationBranchHint,
  looksLikeTechnicalBranchName,
  userStatementRefusesPublication,
  userStatementRequestsMergeOnly,
  userStatementRequestsUnnamedNewBranch,
} from "@/domains/conversation/conversation-publication-mandate-guards";
import type { PublicationPlan } from "@/domains/execution/types";

function plan(overrides: Partial<PublicationPlan> = {}): PublicationPlan {
  return {
    documentId: "doc_1",
    revisionId: "rev_1",
    preparationId: "prep_1",
    repositoryId: "repo_1",
    repositoryFullName: "org/repo",
    authorizationId: "auth_1",
    installationId: "inst_1",
    actorLogin: "pilot",
    permissions: {},
    targetPath: "docs/studio-next/accept01.md",
    targetBranch: "main",
    publicationBranch: "studio/pub-1",
    baseRef: "main",
    baseSha: "abc",
    revisionFingerprint: "rfp",
    contentMarkdown: "# Hi",
    inspection: {
      kind: "CREATE",
      basePath: "docs/studio-next/accept01.md",
      baseSha: null,
      baseContent: null,
      proposedContent: "# Hi",
      unifiedDiff: "",
      inspectionFingerprint: "ifp",
    },
    steps: ["CREATE_BRANCH", "PUBLISH_FILE", "OPEN_PR"],
    ...overrides,
  };
}

describe("conversation-publication-authority guards", () => {
  it("rejects negative publication phrases", () => {
    expect(userStatementRefusesPublication("Crée le doc mais ne publie pas sur GitHub")).toBe(true);
    expect(
      userStatementRefusesPublication(
        "Crée et publie-le dans mon dépôt chemin docs/studio-next/x.md",
      ),
    ).toBe(false);
  });

  it("merge-only utterance does not admit publication mandate", () => {
    expect(userStatementRequestsMergeOnly("Merge la PR #42 dans main")).toBe(true);
    expect(
      userStatementRequestsMergeOnly(
        "Publie docs/foo.md et merge la PR quand c'est prêt",
      ),
    ).toBe(false);
  });

  it("plan drift on path is refused", () => {
    const covered = assertPublicationMandateCoversPlan({
      userStatement: "publie chemin docs/studio-next/accept01.md",
      qualifiedPath: "docs/studio-next/accept01.md",
      qualifiedBranch: null,
      plan: plan(),
    });
    expect(covered.ok).toBe(true);

    const drift = assertPublicationMandateCoversPlan({
      userStatement: "publie chemin docs/studio-next/other.md",
      qualifiedPath: "docs/studio-next/other.md",
      qualifiedBranch: null,
      plan: plan(),
    });
    expect(drift.ok).toBe(false);
    if (!drift.ok) expect(drift.reasonCode).toBe("PLAN_DRIFT");
  });

  it("contradictory path hints fail closed", () => {
    const amb = assertPublicationMandateCoversPlan({
      userStatement: "publie sous docs/b.md",
      qualifiedPath: "docs/a.md",
      qualifiedBranch: null,
      plan: plan({ targetPath: "docs/a.md" }),
    });
    expect(amb.ok).toBe(false);
    if (!amb.ok) expect(amb.reasonCode).toBe("AMBIGUOUS_PATH");
  });
});

describe("P0-01 branch hint extraction", () => {
  it("does not treat French articles as branch names", () => {
    expect(extractPublicationBranchHint("Publie ce document sur une nouvelle branche du repo")).toBe(
      null,
    );
    expect(extractPublicationBranchHint("Publie ce document sur la branche de mon dépôt")).toBe(
      null,
    );
    expect(extractPublicationBranchHint("publie sur une branche dédiée")).toBe(null);
    expect(looksLikeTechnicalBranchName("du")).toBe(false);
    expect(looksLikeTechnicalBranchName("de")).toBe(false);
  });

  it("detects unnamed new-branch intent", () => {
    expect(userStatementRequestsUnnamedNewBranch("Publie sur une nouvelle branche du repo")).toBe(
      true,
    );
    expect(
      userStatementRequestsUnnamedNewBranch("Publie sur la branche feat/docs-publication"),
    ).toBe(false);
  });

  it("accepts an explicit technical branch name", () => {
    expect(
      extractPublicationBranchHint("Publie sur la branche feat/docs-publication"),
    ).toBe("feat/docs-publication");
    expect(extractPublicationBranchHint("publish on branch main")).toBe("main");
    expect(looksLikeTechnicalBranchName("feat/docs-publication")).toBe(true);
  });

  it("does not PLAN_DRIFT on nouvelle branche without a name", () => {
    const covered = assertPublicationMandateCoversPlan({
      userStatement: "Publie ce document sur une nouvelle branche du repo",
      qualifiedPath: null,
      qualifiedBranch: null,
      plan: plan(),
    });
    expect(covered.ok).toBe(true);
  });

  it("PLAN_DRIFT when explicit branch is outside the prepared plan", () => {
    const drift = assertPublicationMandateCoversPlan({
      userStatement: "publie sur la branche feat/other",
      qualifiedPath: null,
      qualifiedBranch: null,
      plan: plan(),
    });
    expect(drift.ok).toBe(false);
    if (!drift.ok) expect(drift.reasonCode).toBe("PLAN_DRIFT");
  });

  it("accepts explicit branch matching publicationBranch", () => {
    const covered = assertPublicationMandateCoversPlan({
      userStatement: "publie sur la branche studio/pub-1",
      qualifiedPath: null,
      qualifiedBranch: null,
      plan: plan(),
    });
    expect(covered.ok).toBe(true);
  });

  it("AMBIGUOUS_BRANCH on contradictory explicit names", () => {
    const amb = assertPublicationMandateCoversPlan({
      userStatement: "publie sur la branche feat/a et aussi branche fix/b",
      qualifiedPath: null,
      qualifiedBranch: null,
      plan: plan(),
    });
    expect(amb.ok).toBe(false);
    if (!amb.ok) expect(amb.reasonCode).toBe("AMBIGUOUS_BRANCH");
  });

  it("does not require the lexical verb publie when path is qualified", () => {
    const covered = assertPublicationMandateCoversPlan({
      userStatement: "Mets à jour le dépôt chemin docs/studio-next/accept01.md",
      qualifiedPath: "docs/studio-next/accept01.md",
      qualifiedBranch: null,
      plan: plan(),
    });
    expect(covered.ok).toBe(true);
  });
});
