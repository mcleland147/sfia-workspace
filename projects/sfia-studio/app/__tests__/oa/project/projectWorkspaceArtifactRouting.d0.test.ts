/**
 * PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01 — domain routing unit tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assessProjectWorkspaceCollision,
  classifyArtifactWriteMode,
  composeCycleWorkspaceRoot,
  deriveProjectWorkspaceKeyFromTitle,
  composeProjectWorkspacePathRoot,
  extractArtifactFileNameCandidate,
  hasDurableSameArtifactEvidence,
  isSafeArtifactFileNameLeaf,
  resolveArtifactTargetUnderCycleWorkspace,
  resolveServerOwnedRepositoryConfig,
} from "@/lib/oa/project";
import { enrichExecutionIntentFromBinding } from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
import { getCycleTypeById } from "@/lib/oa/cycle";

describe("PRODUCT-PWR-01 Project workspace key", () => {
  it("derives stable kebab key from Mini cadrage title", () => {
    expect(
      deriveProjectWorkspaceKeyFromTitle("Mini cadrage — Suivi de tâches"),
    ).toBe("mini-cadrage-suivi-de-taches");
    expect(
      composeProjectWorkspacePathRoot("mini-cadrage-suivi-de-taches"),
    ).toBe("projects/mini-cadrage-suivi-de-taches");
  });

  it("rename of title does not mutate an already durable key", () => {
    const durable = deriveProjectWorkspaceKeyFromTitle(
      "Mini cadrage — Suivi de tâches",
    );
    const renamed = deriveProjectWorkspaceKeyFromTitle(
      "Mini cadrage — Suivi de tâches (v2 renommé)",
    );
    // New derivation differs — callers must keep the stored durable key.
    expect(durable).toBe("mini-cadrage-suivi-de-taches");
    expect(renamed).not.toBe(durable);
    expect(composeProjectWorkspacePathRoot(durable)).toBe(
      "projects/mini-cadrage-suivi-de-taches",
    );
  });
});

describe("PRODUCT-PWR-01 server-owned repository config", () => {
  it("returns null when incomplete — never invents ambient identity", () => {
    expect(resolveServerOwnedRepositoryConfig({})).toBeNull();
    expect(
      resolveServerOwnedRepositoryConfig({
        SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY: "acme/widget",
      }),
    ).toBeNull();
  });

  it("resolves explicit identity/remote without hardcoding owner/repo in domain", () => {
    const cfg = resolveServerOwnedRepositoryConfig({
      SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY: "acme/widget",
      SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL:
        "https://github.com/acme/widget.git",
      SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH: "main",
    });
    expect(cfg).toEqual({
      provider: "github",
      identity: "acme/widget",
      remoteUrl: "https://github.com/acme/widget.git",
      defaultBranch: "main",
    });
  });
});

describe("PRODUCT-PWR-01 artifact target routing", () => {
  const projectRoot = "projects/mini-cadrage-suivi-de-taches";
  const segment = "01-cadrage";

  it("composes exact target from leaf filename under cycle workspace", () => {
    const r = resolveArtifactTargetUnderCycleWorkspace({
      projectPathRoot: projectRoot,
      repositoryWorkspaceSegment: segment,
      artifactFileName: "note-de-cadrage.md",
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.targetPath).toBe(
      "projects/mini-cadrage-suivi-de-taches/01-cadrage/note-de-cadrage.md",
    );
    expect(r.cycleRoot).toBe(
      "projects/mini-cadrage-suivi-de-taches/01-cadrage",
    );
  });

  it("accepts in-bounds full targetPath as candidate", () => {
    const r = resolveArtifactTargetUnderCycleWorkspace({
      projectPathRoot: projectRoot,
      repositoryWorkspaceSegment: segment,
      proposedTargetPath:
        "projects/mini-cadrage-suivi-de-taches/01-cadrage/note-de-cadrage.md",
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.targetPath).toBe(
      "projects/mini-cadrage-suivi-de-taches/01-cadrage/note-de-cadrage.md",
    );
  });

  it("rejects out-of-bounds target without silent rewrite", () => {
    const r = resolveArtifactTargetUnderCycleWorkspace({
      projectPathRoot: projectRoot,
      repositoryWorkspaceSegment: segment,
      proposedTargetPath: "docs/mini-cadrage-suivi-taches.md",
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe("TARGET_OUTSIDE_CYCLE_WORKSPACE");
  });

  it("rejects traversal / absolute / slash filename", () => {
    expect(isSafeArtifactFileNameLeaf("../x.md")).toBe(false);
    expect(isSafeArtifactFileNameLeaf("/abs.md")).toBe(false);
    expect(isSafeArtifactFileNameLeaf("sub/dir.md")).toBe(false);
    const r = resolveArtifactTargetUnderCycleWorkspace({
      projectPathRoot: projectRoot,
      repositoryWorkspaceSegment: segment,
      artifactFileName: "evil/../x.md",
    });
    expect(r.ok).toBe(false);
  });

  it("rejects malformed cycle segment", () => {
    expect(
      composeCycleWorkspaceRoot({
        projectPathRoot: projectRoot,
        repositoryWorkspaceSegment: "../x",
      }),
    ).toBeNull();
  });
});

describe("PRODUCT-PWR-01 CREATE/UPDATE + collision", () => {
  it("CREATE when absent; UPDATE only with same-deliverable proof; else ASK", () => {
    expect(classifyArtifactWriteMode({ targetExists: false })).toBe("CREATE");
    expect(
      classifyArtifactWriteMode({
        targetExists: true,
        intentClearlySameDeliverable: true,
      }),
    ).toBe("UPDATE");
    // CR-PWR-02 — exists without same-deliverable proof is ASK (not UPDATE)
    expect(classifyArtifactWriteMode({ targetExists: true })).toBe("ASK");
    expect(
      classifyArtifactWriteMode({
        targetExists: true,
        intentClearlySameDeliverable: undefined,
      }),
    ).toBe("ASK");
    expect(classifyArtifactWriteMode({ targetExists: null })).toBe("ASK");
    expect(
      classifyArtifactWriteMode({
        targetExists: true,
        intentClearlySameDeliverable: false,
      }),
    ).toBe("ASK");
  });

  it("CR-PWR-02A — hasDurableSameArtifactEvidence exact contract", () => {
    const projectId = "prj:pwr-same";
    const target =
      "projects/mini-cadrage-suivi-de-taches/01-cadrage/note-de-cadrage.md";
    const ok = {
      type: "artifact",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      location: target,
      status: "available",
      bindings: { projectId },
    };
    expect(
      hasDurableSameArtifactEvidence({
        projectId,
        targetPath: target,
        evidence: [ok],
      }),
    ).toBe(true);
    // Existence alone is not modeled here — caller must not pass targetExists as proof.
    expect(
      hasDurableSameArtifactEvidence({
        projectId,
        targetPath: target,
        evidence: [],
      }),
    ).toBe(false);
    // Wrong project
    expect(
      hasDurableSameArtifactEvidence({
        projectId,
        targetPath: target,
        evidence: [{ ...ok, bindings: { projectId: "prj:other" } }],
      }),
    ).toBe(false);
    // Filename-only location mismatch
    expect(
      hasDurableSameArtifactEvidence({
        projectId,
        targetPath: target,
        evidence: [{ ...ok, location: "note-de-cadrage.md" }],
      }),
    ).toBe(false);
    // Rejected / stale / superseded → not proof; contradictory → fail closed
    expect(
      hasDurableSameArtifactEvidence({
        projectId,
        targetPath: target,
        evidence: [ok, { ...ok, status: "rejected" }],
      }),
    ).toBe(false);
    expect(
      hasDurableSameArtifactEvidence({
        projectId,
        targetPath: target,
        evidence: [{ ...ok, status: "stale" }],
      }),
    ).toBe(false);
    expect(
      hasDurableSameArtifactEvidence({
        projectId,
        targetPath: target,
        evidence: [ok, { ...ok, status: "superseded" }],
      }),
    ).toBe(false);
    expect(
      hasDurableSameArtifactEvidence({
        projectId,
        targetPath: target,
        evidence: [ok, { ...ok, status: "unavailable" }],
      }),
    ).toBe(false);
    expect(
      hasDurableSameArtifactEvidence({
        projectId,
        targetPath: target,
        evidence: [ok, { ...ok, availability: "unavailable" }],
      }),
    ).toBe(false);
    expect(
      hasDurableSameArtifactEvidence({
        projectId,
        targetPath: target,
        evidence: [{ ...ok, status: "unavailable" }],
      }),
    ).toBe(false);
    // Wrong project conflict must not poison current project proof
    expect(
      hasDurableSameArtifactEvidence({
        projectId,
        targetPath: target,
        evidence: [
          ok,
          {
            ...ok,
            status: "rejected",
            bindings: { projectId: "prj:other" },
          },
        ],
      }),
    ).toBe(true);
    // Different target conflict must not poison current target
    expect(
      hasDurableSameArtifactEvidence({
        projectId,
        targetPath: target,
        evidence: [
          ok,
          {
            ...ok,
            status: "rejected",
            location: `${target.replace(/note-de-cadrage\.md$/, "other.md")}`,
          },
        ],
      }),
    ).toBe(true);
    // Non-artifact type
    expect(
      hasDurableSameArtifactEvidence({
        projectId,
        targetPath: target,
        evidence: [{ ...ok, type: "document" }],
      }),
    ).toBe(false);
  });

  it("workspace collision fail-closed without durable ownership", () => {
    expect(
      assessProjectWorkspaceCollision({
        projectPathRoot: "projects/mini-cadrage-suivi-de-taches",
        existingRepoRelativePaths: [],
      }),
    ).toBe("absent_ok");
    expect(
      assessProjectWorkspaceCollision({
        projectPathRoot: "projects/mini-cadrage-suivi-de-taches",
        existingRepoRelativePaths: [
          "projects/mini-cadrage-suivi-de-taches/01-cadrage/x.md",
        ],
      }),
    ).toBe("ambiguous_collision");
    expect(
      assessProjectWorkspaceCollision({
        projectPathRoot: "projects/mini-cadrage-suivi-de-taches",
        existingRepoRelativePaths: [
          "projects/mini-cadrage-suivi-de-taches/01-cadrage/x.md",
        ],
        durableOwnershipMatches: true,
      }),
    ).toBe("reuse_same_project");
  });
});

describe("CR-PWR-01 invalid proposedTargetPath fail-closed", () => {
  const projectRoot = "projects/mini-cadrage-suivi-de-taches";
  const segment = "01-cadrage";

  it.each([
    "../x.md",
    "/abs.md",
    "../../note.md",
    "sub/../note.md",
    "\\\\evil\\\\x.md",
    "a/../../x.md",
  ])("MUST NOT salvage basename from %s", (proposed) => {
    const r = resolveArtifactTargetUnderCycleWorkspace({
      projectPathRoot: projectRoot,
      repositoryWorkspaceSegment: segment,
      proposedTargetPath: proposed,
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toMatch(/TARGET_PATH_INVALID|TARGET_OUTSIDE_CYCLE_WORKSPACE/);
    // Never silently become x.md / note.md under cycle root
    expect(JSON.stringify(r)).not.toMatch(/"targetPath"/);
  });

  it("valid leaf via artifactFileName composes under cycle", () => {
    const r = resolveArtifactTargetUnderCycleWorkspace({
      projectPathRoot: projectRoot,
      repositoryWorkspaceSegment: segment,
      artifactFileName: "note-de-cadrage.md",
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.targetPath).toBe(
      "projects/mini-cadrage-suivi-de-taches/01-cadrage/note-de-cadrage.md",
    );
  });

  it("valid full in-bounds path accepted", () => {
    const path =
      "projects/mini-cadrage-suivi-de-taches/01-cadrage/note-de-cadrage.md";
    const r = resolveArtifactTargetUnderCycleWorkspace({
      projectPathRoot: projectRoot,
      repositoryWorkspaceSegment: segment,
      proposedTargetPath: path,
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.targetPath).toBe(path);
  });

  it("full out-of-bounds path rejected without rewrite", () => {
    const r = resolveArtifactTargetUnderCycleWorkspace({
      projectPathRoot: projectRoot,
      repositoryWorkspaceSegment: segment,
      proposedTargetPath: "docs/note.md",
    });
    expect(r.ok).toBe(false);
    if (r.ok) return;
    expect(r.code).toBe("TARGET_OUTSIDE_CYCLE_WORKSPACE");
  });

  it("extractArtifactFileNameCandidate never salvages traversal basename", () => {
    expect(
      extractArtifactFileNameCandidate({ targetPath: "../x.md" }),
    ).toBeNull();
    expect(
      extractArtifactFileNameCandidate({ targetPath: "/abs.md" }),
    ).toBeNull();
    expect(
      extractArtifactFileNameCandidate({
        artifactFileName: "note-de-cadrage.md",
      }),
    ).toBe("note-de-cadrage.md");
  });
});

describe("PRODUCT-PWR-01 enrichExecutionIntentFromBinding cycle routing", () => {
  const binding = {
    provider: "github" as const,
    identity: "acme/widget",
    remoteUrl: "https://github.com/acme/widget.git",
    defaultBranch: "main",
    pathRoot: "projects/mini-cadrage-suivi-de-taches",
  };

  it("OBS-PJ-CLOUD-01 fix — leaf filename composes exact target under cyc:framing", () => {
    expect(getCycleTypeById("cyc:framing")?.repositoryWorkspaceSegment).toBe(
      "01-cadrage",
    );
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        artifactFileName: "note-de-cadrage.md",
        targetPath: null,
        requestedOperation: "cursor.docs_write.apply",
      },
      binding,
      activeCycleTypeId: "cyc:framing",
    });
    expect(enriched.needsTargetClarification).toBe(false);
    expect(enriched.executionIntent?.targetPath).toBe(
      "projects/mini-cadrage-suivi-de-taches/01-cadrage/note-de-cadrage.md",
    );
    expect(enriched.executionIntent?.scopeIn).toEqual([
      "projects/mini-cadrage-suivi-de-taches/01-cadrage",
    ]);
  });

  it("in-bounds full path from Pilote is preserved (no null wipe)", () => {
    const path =
      "projects/mini-cadrage-suivi-de-taches/01-cadrage/note-de-cadrage.md";
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        targetPath: path,
        requestedOperation: "cursor.docs_write.apply",
      },
      binding,
      activeCycleTypeId: "cyc:framing",
    });
    expect(enriched.needsTargetClarification).toBe(false);
    expect(enriched.executionIntent?.targetPath).toBe(path);
  });

  it("legacy sandbox pathRoot keeps clamp even when cycle type is known", () => {
    const sandbox = {
      ...binding,
      pathRoot: "projects/sfia-studio/.sandbox",
    };
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        targetPath: "projects/sfia-studio/.sandbox/gestion-de-taches.md",
        requestedOperation: "cursor.docs_write.apply",
      },
      binding: sandbox,
      activeCycleTypeId: "cyc:framing",
    });
    expect(enriched.needsTargetClarification).toBe(false);
    expect(enriched.executionIntent?.targetPath).toBe(
      "projects/sfia-studio/.sandbox/gestion-de-taches.md",
    );
    expect(enriched.executionIntent?.scopeIn).toEqual([
      "projects/sfia-studio/.sandbox",
    ]);
  });

  it("legacy pathRoot without cycle segment keeps prior clamp semantics", () => {
    const legacy = {
      ...binding,
      pathRoot: "docs",
    };
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        targetPath: "docs/note.md",
        requestedOperation: "cursor.docs_write.apply",
      },
      binding: legacy,
      activeCycleTypeId: null,
    });
    expect(enriched.needsTargetClarification).toBe(false);
    expect(enriched.executionIntent?.targetPath).toBe("docs/note.md");
    expect(enriched.executionIntent?.scopeIn).toEqual(["docs"]);
  });
});
