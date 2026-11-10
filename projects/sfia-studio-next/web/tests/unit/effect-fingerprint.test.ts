import { describe, expect, it } from "vitest";
import {
  buildUnifiedDiff,
  inspectionFingerprint,
  mergeEffectFingerprint,
  publicationEffectFingerprint,
  revisionContentFingerprint,
} from "@/domains/execution/fingerprint";
import type { MergePlan, PublicationPlan } from "@/domains/execution/types";

function samplePlan(over: Partial<PublicationPlan> = {}): PublicationPlan {
  const content = "# Hello\n";
  const unified = buildUnifiedDiff("docs/a.md", null, content);
  const revisionFingerprint = revisionContentFingerprint(content);
  const inspection = {
    kind: "CREATE" as const,
    basePath: "docs/a.md",
    baseSha: "base",
    baseContent: null,
    proposedContent: content,
    unifiedDiff: unified,
    inspectionFingerprint: inspectionFingerprint({
      revisionId: "rev1",
      revisionFingerprint,
      targetPath: "docs/a.md",
      baseSha: "base",
      baseContent: null,
      proposedContent: content,
      unifiedDiff: unified,
    }),
  };
  return {
    documentId: "doc1",
    revisionId: "rev1",
    preparationId: "prep1",
    repositoryId: "repo1",
    repositoryFullName: "acme/docs",
    authorizationId: "auth1",
    installationId: "inst1",
    actorLogin: "pilot",
    permissions: { contents: "write", pull_requests: "write" },
    targetPath: "docs/a.md",
    targetBranch: "main",
    publicationBranch: "sfia/pub-x",
    baseRef: "main",
    baseSha: "base",
    revisionFingerprint,
    contentMarkdown: content,
    inspection,
    steps: ["CREATE_BRANCH", "PUBLISH_FILE", "OPEN_PR"],
    ...over,
  };
}

describe("effect fingerprints (B6/B7)", () => {
  it("changes when inspection or provenance changes", () => {
    const a = publicationEffectFingerprint(samplePlan());
    const b = publicationEffectFingerprint(samplePlan({ installationId: "inst2" }));
    expect(a).not.toBe(b);
  });

  it("merge fingerprint includes publication provenance", () => {
    const plan: MergePlan = {
      repositoryId: "r",
      repositoryFullName: "acme/docs",
      authorizationId: "a",
      installationId: "i",
      actorLogin: "u",
      publicationAttemptId: "efx1",
      publicationRefId: "dpr1",
      documentId: "d",
      revisionId: "rev",
      targetPath: "docs/a.md",
      prNumber: 1,
      expectedHeadSha: "h",
      expectedBaseSha: "b",
      expectedHeadRef: "sfia/pub-x",
      expectedBaseRef: "main",
      publicationBranch: "sfia/pub-x",
    };
    const fp = mergeEffectFingerprint(plan);
    expect(fp).toHaveLength(64);
    expect(mergeEffectFingerprint({ ...plan, prNumber: 2 })).not.toBe(fp);
  });
});
