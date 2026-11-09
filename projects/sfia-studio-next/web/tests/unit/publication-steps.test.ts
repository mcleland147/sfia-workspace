import { describe, expect, it } from "vitest";
import {
  assertPublicationEffectProof,
  NOMINAL_PUBLICATION_STEPS,
  resolvePublicationSteps,
  validatePublicationSteps,
} from "@/domains/execution/publication-steps";
import {
  buildUnifiedDiff,
  inspectionFingerprint,
  publicationEffectFingerprint,
  revisionContentFingerprint,
} from "@/domains/execution/fingerprint";
import type { PublicationPlan, PublicationProgress } from "@/domains/execution/types";
import { effectProviderLabel } from "@/components/integrations/publication-effect-labels";

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
    baseSha: "base-sha",
    revisionFingerprint,
    contentMarkdown: content,
    inspection,
    steps: [...NOMINAL_PUBLICATION_STEPS],
    ...over,
  };
}

describe("publication steps validation (T01–T08 helpers)", () => {
  it("T01: steps vide refusé", () => {
    expect(() => validatePublicationSteps([])).toThrow(/vide/);
  });

  it("T02: steps null refusé", () => {
    expect(() => validatePublicationSteps(null)).toThrow(/null/);
  });

  it("T03: steps mal typé refusé", () => {
    expect(() => validatePublicationSteps("CREATE_BRANCH")).toThrow(/tableau/);
    expect(() => validatePublicationSteps({ 0: "CREATE_BRANCH" })).toThrow(/tableau/);
  });

  it("T04: étape inconnue refusée", () => {
    expect(() =>
      validatePublicationSteps(["CREATE_BRANCH", "PUBLISH_FILE", "MERGE"]),
    ).toThrow(/inconnue/);
  });

  it("T05: duplication refusée", () => {
    expect(() =>
      validatePublicationSteps(["CREATE_BRANCH", "CREATE_BRANCH", "PUBLISH_FILE"]),
    ).toThrow(/dupliqu/);
  });

  it("T06: ordre invalide refusé", () => {
    expect(() =>
      validatePublicationSteps(["PUBLISH_FILE", "CREATE_BRANCH", "OPEN_PR"]),
    ).toThrow(/ordre/);
  });

  it("T07: branche seule refusée", () => {
    expect(() => validatePublicationSteps(["CREATE_BRANCH"])).toThrow(/séquence|PUBLISH_FILE/);
  });

  it("T08: PR seule refusée", () => {
    expect(() => validatePublicationSteps(["OPEN_PR"])).toThrow(/séquence|PUBLISH_FILE/);
  });

  it("undefined → séquence nominale", () => {
    expect(resolvePublicationSteps(undefined)).toEqual([...NOMINAL_PUBLICATION_STEPS]);
  });

  it("séquence nominale acceptée", () => {
    expect(validatePublicationSteps([...NOMINAL_PUBLICATION_STEPS])).toEqual([
      ...NOMINAL_PUBLICATION_STEPS,
    ]);
  });
});

describe("publication effect proof (T11–T12 helpers)", () => {
  const progressOk: PublicationProgress = {
    branchCreated: true,
    filePublished: true,
    prCreated: true,
    prOpened: true,
    prNumber: 18,
    prCurrentState: "OPEN",
    commitSha: "doc-commit-sha",
  };

  it("T11: SHA de base seul insuffisant", () => {
    expect(() =>
      assertPublicationEffectProof({
        plan: samplePlan(),
        progress: { ...progressOk, commitSha: "base-sha", filePublished: true },
        commitSha: "base-sha",
      }),
    ).toThrow(/base/);
  });

  it("T12: preuve nominale acceptée", () => {
    expect(() =>
      assertPublicationEffectProof({
        plan: samplePlan(),
        progress: progressOk,
        commitSha: "doc-commit-sha",
      }),
    ).not.toThrow();
  });

  it("absence PUBLISH_FILE prouvée refusée", () => {
    expect(() =>
      assertPublicationEffectProof({
        plan: samplePlan(),
        progress: { ...progressOk, filePublished: false },
        commitSha: "doc-commit-sha",
      }),
    ).toThrow(/PUBLISH_FILE/);
  });
});

describe("fingerprint + effectProviderMode compatibility", () => {
  it("historique sans mode: fingerprint stable", () => {
    const without = samplePlan();
    delete without.effectProviderMode;
    const a = publicationEffectFingerprint(without);
    const b = publicationEffectFingerprint({ ...without });
    expect(a).toBe(b);
  });

  it("mode REAL/SCRIPTED change le fingerprint", () => {
    const base = publicationEffectFingerprint(samplePlan());
    const real = publicationEffectFingerprint(samplePlan({ effectProviderMode: "REAL" }));
    const scripted = publicationEffectFingerprint(samplePlan({ effectProviderMode: "SCRIPTED" }));
    expect(real).not.toBe(base);
    expect(scripted).not.toBe(base);
    expect(real).not.toBe(scripted);
  });
});

describe("T17: historique mode inconnu → UNKNOWN", () => {
  it("jamais REAL inventé", () => {
    expect(effectProviderLabel(undefined)).toBe("UNKNOWN");
    expect(effectProviderLabel(null)).toBe("UNKNOWN");
    expect(effectProviderLabel("")).toBe("UNKNOWN");
    expect(effectProviderLabel("CONNECTED")).toBe("UNKNOWN");
    expect(effectProviderLabel("REAL")).toBe("REAL");
    expect(effectProviderLabel("SCRIPTED")).toBe("SCRIPTED");
  });
});
