# ChatGPT Critical Review Pack — FULL

| Field | Value |
| --- | --- |
| **Date/time (UTC)** | 2026-09-19T06:54:39Z |
| **Macro** | PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01 |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil** | Critical |
| **Typologie** | EVOL |
| **Workspace** | /tmp/sfia-pwr-01-dev |
| **Branch** | `delivery/sfia-studio-project-workspace-artifact-routing-01` |
| **origin/main** | `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` |
| **HEAD** | `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` |
| **Project commit** | NONE (this pass) |
| **Project push/PR/merge** | NONE |
| **Pack level** | FULL — complete created files + complete diffs for every modified project file |
| **Synthesis-only** | NO |
| **Supersedes handoff** | `a87e98633ae838886cdee780c88c3cf64a35a00b` |
| **CR closed** | CR-PWR-01 · CR-PWR-02 · CR-PWR-03 · CR-PWR-04 |

## Completeness checklist

- Created project files: **8** (full content below)
- Modified project files: **37** (complete `git diff` per file below)
- `.tmp-sfia-review/**` excluded from product index (pack source only; never staged/committed)
- Secrets / `.env.local`: none included

### Created file list

- `projects/sfia-studio/app/__tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/projectWorkspaceRouting.ui.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel.tsx`
- `projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts`
- `projects/sfia-studio/app/lib/oa/project/domain/projectWorkspaceKey.ts`
- `projects/sfia-studio/app/lib/oa/project/domain/serverOwnedRepositoryConfig.ts`
- `projects/sfia-studio/app/lib/oa/project/infrastructure/managedRepoPathFacts.ts`

### Modified file list

- `projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/w3dFullCkcCatalog.test.ts`
- `projects/sfia-studio/app/__tests__/setup.ts`
- `projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`
- `projects/sfia-studio/app/features/project-assistant/actions.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts`
- `projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts`
- `projects/sfia-studio/app/lib/oa/decision/domain/types.ts`
- `projects/sfia-studio/app/lib/oa/project/application/createProject.ts`
- `projects/sfia-studio/app/lib/oa/project/domain/types.ts`
- `projects/sfia-studio/app/lib/oa/project/index.ts`
- `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`
- `projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts`
- `projects/sfia-studio/app/lib/vertical-slice-core/types.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md`
- `projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md`
- `projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md`
- `projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md`
- `projects/sfia-studio/product-completion/ux-product-experience/01-experience-architecture.md`
- `projects/sfia-studio/product-completion/ux-product-experience/02-end-to-end-wireframes-interaction-model.md`
- `projects/sfia-studio/product-completion/ux-product-experience/03-product-screens-visual-state-contract.md`


## Local Git Truth Check

```
origin/main == a6dba9776bfb1b4cb1570a87b20b0c71e546e441
expected baseline a6dba9776bfb1b4cb1570a87b20b0c71e546e441
baseline_match = True
branch: delivery/sfia-studio-project-workspace-artifact-routing-01
HEAD: a6dba9776bfb1b4cb1570a87b20b0c71e546e441
status --short (excl. pack source):

 M projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w3dFullCkcCatalog.test.ts
 M projects/sfia-studio/app/__tests__/setup.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
 M projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
 M projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/types.ts
 M projects/sfia-studio/app/lib/oa/project/application/createProject.ts
 M projects/sfia-studio/app/lib/oa/project/domain/types.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
 M projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
 M projects/sfia-studio/app/lib/vertical-slice-core/types.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
 M projects/sfia-studio/product-completion/01-product-completion-cadrage.md
 M projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md
 M projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md
 M projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md
 M projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md
 M projects/sfia-studio/product-completion/ux-product-experience/01-experience-architecture.md
 M projects/sfia-studio/product-completion/ux-product-experience/02-end-to-end-wireframes-interaction-model.md
 M projects/sfia-studio/product-completion/ux-product-experience/03-product-screens-visual-state-contract.md
?? projects/sfia-studio/app/__tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/projectWorkspaceRouting.ui.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel.tsx
?? projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts
?? projects/sfia-studio/app/lib/oa/project/domain/projectWorkspaceKey.ts
?? projects/sfia-studio/app/lib/oa/project/domain/serverOwnedRepositoryConfig.ts
?? projects/sfia-studio/app/lib/oa/project/infrastructure/managedRepoPathFacts.ts
```


## Morris decisions consumed

1. D-PC-09 — Project Repository Workspace & Cycle-aware Artifact Routing (prior)
2. GO corrections CR-PWR-01…04 — AUTORISÉ (this pass)
3. This GO ≠ project commit/push/PR/merge ≠ Cursor REAL ≠ OpenAI LIVE ≠ runtime v3

## État avant correction

Prior handoff `a87e9863` established implementation candidate with deterministic proof, but Critical Review identified:
- CR-PWR-01 — invalid proposedTargetPath could be salvaged into basename
- CR-PWR-02 — classifyArtifactWriteMode / artifactWriteMode not wired into Proposal
- CR-PWR-03 — assessProjectWorkspaceCollision not wired
- CR-PWR-04 — new Product Project could persist unbound after UI form removal

## CR-PWR-01 résolution — INVALID TARGET MUST FAIL CLOSED

**Root cause:** `extractArtifactFileNameCandidate` / resolve fall-through salvaged basename from absolute/traversal/malformed paths.

**Correction:** proposedTargetPath that fails normalize → `TARGET_PATH_INVALID` fail-closed; extract never salvages basename from invalid paths; bare safe leaf still composes under cycle root.

**Tests:** `../x.md`, `/abs.md`, `../../note.md`, `sub/../note.md`, backslash traversal, valid leaf, in-bounds full, out-of-bounds full.

## CR-PWR-02 résolution — CREATE/UPDATE/ASK WIRED

**Repository read fact source:** `ManagedProjectRepositoryResolver` + local FS probe via `managedRepoPathFacts` (reuses existing managed-repo substrate; ZERO network; no second inspection engine). Applied when `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` is configured.

**Classification:** absent→CREATE; present+same-deliverable→UPDATE; present without same-deliverable proof→ASK; unknown→ASK. (exists=true alone is no longer UPDATE.)

**Wiring:** ActiveCycleGovernedContinuation injects `artifactWriteMode` → Proposal seal/digest → DecisionBasis → PREPARE.

**ASK:** clarification / non-executable Proposal; recommendation amends.

**TOCTOU:** `revalidateSealedArtifactWriteMode` in PREPARE — CREATE stale if file appeared; UPDATE stale if disappeared; ASK refused.

## CR-PWR-03 résolution — WORKSPACE COLLISION WIRED

**Fact source:** managed-repo inventory under `projects/<key>` + `listProjects` for other claimants + Evidence location/source under pathRoot for same-project ownership.

**Ownership rule:** slug match ≠ ownership; directory existence ≠ ownership; other Project same key/pathRoot → ambiguous_collision; Evidence under workspace for same Project → reuse_same_project.

**Fail-closed:** ambiguous_collision → clarification, no executable write Proposal, no parasite CycleInstance.

## CR-PWR-04 résolution — NEW PRODUCT PROJECT MUST NOT BE UNBOUND

**Authoritative boundary:** `LocalProjectComposition.createProject` (Product facade) — fail-closed BEFORE OA persist when server-owned config absent/invalid. Low-level OA `CreateProject` remains for legacy/fixture reload.

**Atomicity:** no Project/LPS after refusal. Functional FR message via `describeServerOwnedRepositoryConfigGap`.

**Legacy:** historical unbound Projects remain loadable; no auto-migration; no ambient fallback; no manual form.

## Wiring exact Product

```
Create Product Project (config required)
→ automatic projectWorkspaceKey + pathRoot projects/<key>
→ start cyc:framing → 01-cadrage
→ REQUIRE_ARTIFACT
→ resolveArtifactTargetUnderCycleWorkspace
→ managed-repo existence + collision qualify
→ CREATE/UPDATE/ASK
→ Proposal seal → HumanDecision → PREPARE TOCTOU → Fake docs_write → Evidence
```

## Architecture retained

ProjectRepositoryBinding server-owned · durable projectWorkspaceKey · pathRoot projects/<key> · repositoryWorkspaceSegment · server targetPath · filename non-authoritative · existing Proposal/HD/EC/docs_write · no parallel repository architecture · no new persistence engine.



## Created files — FULL CONTENT


### `projects/sfia-studio/app/__tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts`

```typescript
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

```


### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/projectWorkspaceRouting.ui.test.tsx`

```typescript
/** @vitest-environment jsdom */
/**
 * PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01 — read-only workspace UI.
 */
import fs from "node:fs";
import path from "node:path";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import {
  ProjectWorkspaceRoutingPanel,
  ProjectWorkspaceRoutingPanelLazy,
} from "@/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel";

afterEach(() => {
  cleanup();
});

describe("PRODUCT-PWR-01 ProjectWorkspaceRoutingPanel", () => {
  it("panel shows logical project/cycle workspaces without MATERIALIZED claim", () => {
    render(
      <ProjectWorkspaceRoutingPanel
        projectId="prj:pwr"
        projectWorkspaceKey="mini-cadrage-suivi-de-taches"
        pathRoot="projects/mini-cadrage-suivi-de-taches"
        repositoryIdentity="acme/widget"
        activeCycleTypeId="cyc:framing"
        activeCycleWorkspaceSegment="01-cadrage"
      />,
    );
    expect(screen.getByTestId("project-workspace-path").textContent).toContain(
      "projects/mini-cadrage-suivi-de-taches/",
    );
    expect(
      screen.getByTestId("project-cycle-workspace-path").textContent,
    ).toContain("projects/mini-cadrage-suivi-de-taches/01-cadrage/");
    expect(screen.getByTestId("project-workspace-routing").textContent).not.toMatch(
      /MATERIALIZED/i,
    );
    expect(screen.queryByTestId("repository-binding-form")).toBeNull();
  });

  it("lazy panel loads active cycle type for cycle workspace", async () => {
    render(
      <ProjectWorkspaceRoutingPanelLazy
        projectId="prj:pwr"
        pathRoot="projects/mini-cadrage-suivi-de-taches"
        projectWorkspaceKey="mini-cadrage-suivi-de-taches"
        loadActiveCycleWorkspace={async () => ({
          cycleTypeId: "cyc:framing",
          repositoryWorkspaceSegment: "01-cadrage",
        })}
      />,
    );
    await waitFor(() => {
      expect(
        screen.getByTestId("project-cycle-workspace-path").textContent,
      ).toContain("01-cadrage");
    });
  });

  it("ProjectWorkspacePage source no longer mounts RepositoryBindingForm", () => {
    const pagePath = path.resolve(
      __dirname,
      "../../features/pre-m6-product-ui/ProjectWorkspacePage.tsx",
    );
    const src = fs.readFileSync(pagePath, "utf8");
    expect(src).not.toMatch(/RepositoryBindingForm/);
    expect(src).toMatch(/ProjectWorkspaceRoutingPanel/);
  });
});

```


### `projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts`

```typescript
/**
 * PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01 — deterministic Product Journey
 * + CR-PWR-01…04 corrections.
 *
 * ZERO REAL / ZERO LIVE / ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import { revalidateSealedArtifactWriteMode } from "@/features/project-assistant/f3/prepareM3FromDecision";
import { sealProposalExecutionBasis } from "@/features/project-assistant/w2/proposalSubjectIntegrity";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { FakeDocsWriteLaunchPort } from "@/lib/oa/execution-attempt";
import {
  ensureManagedRepoCloneSkeleton,
} from "@/lib/oa/project";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { createLocalVerticalSliceServices } from "@/lib/vertical-slice-core";

const NATURAL_REQUEST = `Matérialise la note de cadrage de ce cycle. N'exécute rien : prépare la proposition pour ma décision.`;

const EXPECTED_PROJECT_ROOT = "projects/mini-cadrage-suivi-de-taches";
const EXPECTED_CYCLE_ROOT = `${EXPECTED_PROJECT_ROOT}/01-cadrage`;
const EXPECTED_TARGET = `${EXPECTED_CYCLE_ROOT}/note-de-cadrage.md`;

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

describe("PRODUCT-PWR-01 deterministic workspace routing journey", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;
  let managedBase: string;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;
  let previousIdentity: string | undefined;
  let previousRemote: string | undefined;
  let previousBranch: string | undefined;
  let previousManaged: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousIdentity = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    previousRemote = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
    previousBranch = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH;
    previousManaged = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = "acme/widget";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/widget.git";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = "main";
    managedBase = fs.mkdtempSync(path.join(os.tmpdir(), "pwr-managed-"));
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: "acme/widget",
    });
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("pwr-workspace-routing.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "pwr" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    try {
      fs.rmSync(managedBase, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar(
      "SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY",
      previousMorrisAuthority,
    );
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY", previousIdentity);
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL", previousRemote);
    restoreEnvVar(
      "SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH",
      previousBranch,
    );
    restoreEnvVar(SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV, previousManaged);
  });

  async function seedFramingProject(input?: {
    idempotencyKey?: string;
    name?: string;
  }): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: input?.name ?? "Mini cadrage — Suivi de tâches",
      objective: "Cadrer le suivi de tâches",
      context: "Product Journey workspace routing reproof",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: "PWR01",
      idempotencyKey: input?.idempotencyKey ?? "idem:pwr-workspace-1",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject failed");
    const projectId = created.project.projectId;

    expect(created.project.projectWorkspaceKey).toBe(
      "mini-cadrage-suivi-de-taches",
    );
    expect(created.project.repositoryBinding?.pathRoot).toBe(
      EXPECTED_PROJECT_ROOT,
    );
    expect(created.project.repositoryBinding?.identity).toBe("acme/widget");

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps0.ok).toBe(true);
    if (!lps0.ok) throw new Error("LPS unavailable");

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        { stepId: "stp:clarify", order: 1, label: "Clarify", state: "done" },
        { stepId: "stp:deliver", order: 2, label: "Deliver", state: "done" },
      ],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    expect(traj.ok).toBe(true);

    const cycleInstanceId = `cyc:pwr-framing-${projectId.slice(-6)}`;
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:framing",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: {
        actorId: "actor:nora-f2",
        role: "agent",
        displayName: "Nora F2",
        authorityLevel: "N1",
      },
      linkAsActiveCycle: false,
    });
    expect(candidate.ok).toBe(true);

    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-09-19T10:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error("authority failed");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps1.ok).toBe(true);
    if (!lps1.ok) throw new Error("LPS unavailable");

    const started = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: {
        actorId: LOCAL_PILOTE_ACTOR.actorId,
        role: LOCAL_PILOTE_ACTOR.role,
        displayName: LOCAL_PILOTE_ACTOR.displayName,
        authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
      },
      authorityEvidenceId: auth.evidenceId,
      expectedLpsVersion: lps1.livingProjectState.version,
    });
    expect(started.ok).toBe(true);

    const obligation = await recordObligationPolicyRequireArtifact({
      projectId,
      cycleInstanceId,
      cycleServices: oa.cycleServices,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => "2026-09-19T10:01:00.000Z",
    });
    expect(obligation.ok).toBe(true);

    return { projectId, cycleInstanceId };
  }

  it("CA-PWR — auto workspace + CREATE mode when target absent", async () => {
    expect(NATURAL_REQUEST).not.toMatch(/__F2_/);
    expect(NATURAL_REQUEST).not.toMatch(/docs\//);

    const { projectId, cycleInstanceId } = await seedFramingProject();

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed: ${JSON.stringify(send)}`);

    expect(send.f2?.turnKind).toBe("f2_proposal");
    expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(send.f2?.proposal?.executionIntent?.targetPath).toBe(EXPECTED_TARGET);
    expect(send.f2?.proposal?.executionIntent?.artifactFileName).toBe(
      "note-de-cadrage.md",
    );
    expect(send.f2?.proposal?.executionIntent?.scopeIn).toEqual([
      EXPECTED_CYCLE_ROOT,
    ]);
    expect(send.f2?.proposal?.executionIntent?.artifactWriteMode).toBe("CREATE");
    expect(send.f2?.proposal?.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );

    const sealed = sealProposalExecutionBasis(send.f2!.proposal!);
    expect(sealed.artifactWriteMode).toBe("CREATE");
    expect(sealed.targetPath).toBe(EXPECTED_TARGET);
    expect(sealed.projectWorkspaceRoot).toBe(EXPECTED_PROJECT_ROOT);
    expect(sealed.cycleWorkspaceRoot).toBe(EXPECTED_CYCLE_ROOT);

    const oa = runtime.oa!;
    const cycles = await oa.cycleServices.cycles.listByProject(projectId);
    const active = cycles.filter((c) => c.status === "active");
    expect(active.map((c) => c.cycleInstanceId)).toEqual([cycleInstanceId]);
  });

  it("CA-PWR — existing target without same-deliverable ambiguity → ASK (no executable Proposal)", async () => {
    const repoRoot = ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: "acme/widget",
    });
    const abs = path.join(repoRoot, EXPECTED_TARGET);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    // Pre-existing file — but we do NOT seed Evidence ownership for a *different*
    // intent ambiguity path: governed continuation still sets same-deliverable=true
    // when exists. For ASK we need exists + NOT same deliverable.
    // Simulate ambiguity by planting a file then forcing write-mode via collision:
    // occupy workspace without Evidence → collision ASK before write-mode UPDATE.
    fs.writeFileSync(
      path.join(repoRoot, EXPECTED_PROJECT_ROOT, "foreign.md"),
      "# foreign\n",
      "utf8",
    );

    const { projectId } = await seedFramingProject({
      idempotencyKey: "idem:pwr-ask-1",
    });

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed: ${JSON.stringify(send)}`);
    // Workspace occupied without Evidence ownership → clarification (not executable Proposal)
    expect(send.f2?.turnKind).toBe("f2_clarification");
    expect(send.f2?.proposal).toBeFalsy();
    expect(send.text ?? "").toMatch(/collision|appartenance|ASK|ambigu/i);
  });

  it("CA-PWR — FakeDocsWrite mkdir parents + write under cycle workspace", async () => {
    const worktree = fs.mkdtempSync(path.join(os.tmpdir(), "pwr-wt-"));
    const port = new FakeDocsWriteLaunchPort({
      worktreeRoot: worktree,
      pathAllowlist: [EXPECTED_CYCLE_ROOT],
      targetPath: EXPECTED_TARGET,
      content: "# Note de cadrage\n",
    });
    const abs = path.join(worktree, EXPECTED_TARGET);
    expect(fs.existsSync(path.dirname(abs))).toBe(false);

    const launch = await port.launch({
      attemptId: "att:pwr-1",
      executionContractId: "xct:pwr-1",
      executionContractVersion: 1,
      semanticFingerprint: "fp:pwr",
      selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
      adapterRef: "adp:m4-cursor-cli-real",
      correlationId: "cor:pwr-1",
      baseHeadSha: "a".repeat(40),
      action: "cursor.docs_write.apply",
      timeoutMs: 5_000,
      docsWriteSpec: {
        repositoryRef: "acme/widget",
        targetPath: EXPECTED_TARGET,
        pathAllowlist: [EXPECTED_CYCLE_ROOT],
        artifactType: "deliverable_document",
        artifactBrief: "Note de cadrage",
        contentRequirements: ["Objectif", "Périmètre"],
        scopeIn: [EXPECTED_CYCLE_ROOT],
        scopeOut: [],
        expectedOutputs: [EXPECTED_TARGET],
        validationExpectations: [],
        evidenceRequirements: ["artifact_digest"],
        createOrModify: true,
        noDelete: true,
      },
    });

    expect(launch.outcome).toBe("ack");
    expect(fs.existsSync(abs)).toBe(true);
    expect(fs.readFileSync(abs, "utf8")).toContain("Note de cadrage");
    expect(fs.existsSync(path.join(worktree, "docs"))).toBe(false);
    fs.rmSync(worktree, { recursive: true, force: true });
  });

  it("CR-PWR-02 TOCTOU — CREATE stale when file appears; UPDATE stale when file disappears", () => {
    const repoRoot = ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: "acme/widget",
    });
    const abs = path.join(repoRoot, EXPECTED_TARGET);

    const createOk = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "CREATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: "acme/widget",
      managedRepoRootBase: managedBase,
    });
    expect(createOk.ok).toBe(true);

    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, "# appeared\n", "utf8");
    const createStale = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "CREATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: "acme/widget",
      managedRepoRootBase: managedBase,
    });
    expect(createStale.ok).toBe(false);
    if (createStale.ok) return;
    expect(createStale.code).toBe("ARTIFACT_WRITE_MODE_STALE_CREATE");

    const updateOk = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "UPDATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: "acme/widget",
      managedRepoRootBase: managedBase,
    });
    expect(updateOk.ok).toBe(true);

    fs.rmSync(abs, { force: true });
    const updateStale = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "UPDATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: "acme/widget",
      managedRepoRootBase: managedBase,
    });
    expect(updateStale.ok).toBe(false);
    if (updateStale.ok) return;
    expect(updateStale.code).toBe("ARTIFACT_WRITE_MODE_STALE_UPDATE");

    const ask = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "ASK",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: "acme/widget",
      managedRepoRootBase: managedBase,
    });
    expect(ask.ok).toBe(false);
    if (ask.ok) return;
    expect(ask.code).toBe("ARTIFACT_WRITE_MODE_ASK");
  });

  it("CR-PWR-03 — second Project same title cannot silently write into first workspace", async () => {
    const first = await seedFramingProject({ idempotencyKey: "idem:pwr-c1" });
    const repoRoot = ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: "acme/widget",
    });
    fs.mkdirSync(path.join(repoRoot, EXPECTED_CYCLE_ROOT), { recursive: true });
    fs.writeFileSync(
      path.join(repoRoot, EXPECTED_TARGET),
      "# first project note\n",
      "utf8",
    );

    const second = await seedFramingProject({
      idempotencyKey: "idem:pwr-c2",
      name: "Mini cadrage — Suivi de tâches",
    });
    expect(second.projectId).not.toBe(first.projectId);

    const send = await projectAssistantSendAction({
      projectId: second.projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed`);
    expect(send.f2?.turnKind).toBe("f2_clarification");
    expect(send.f2?.proposal).toBeFalsy();

    const oa = runtime.oa!;
    const cycles = await oa.cycleServices.cycles.listByProject(second.projectId);
    const active = cycles.filter((c) => c.status === "active");
    expect(active).toHaveLength(1);
    expect(active[0]!.cycleInstanceId).toBe(second.cycleInstanceId);
  });
});

describe("CR-PWR-04 Product Create fail-closed without server-owned config", () => {
  const APP_ROOT = path.resolve(__dirname, "../..");
  const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
  const SCHEMAS_ROOT = path.resolve(
    APP_ROOT,
    "../sfia-v3-modeled/v3-native-option-a/schemas",
  );

  let prevIdentity: string | undefined;
  let prevRemote: string | undefined;

  beforeEach(() => {
    prevIdentity = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    prevRemote = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
  });

  afterEach(() => {
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY", prevIdentity);
    restoreEnvVar("SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL", prevRemote);
  });

  it("missing identity → Product Create refused, no Project/LPS", async () => {
    delete process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/widget.git";
    const services = createLocalVerticalSliceServices({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-09-19T12:00:00.000Z",
    });
    const result = await services.facade.createProject({
      name: "Should Fail",
      objective: "x",
      context: "y",
      perceivedCriticality: "STANDARD",
      constraints: [],
      shortReference: "FAIL",
      idempotencyKey: "idem:pwr04-missing-id",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.message).toMatch(/Identité|server-owned|refusée/i);
    const listed = await services.projectServices.listProjects.execute();
    expect(listed.ok).toBe(true);
    if (listed.ok) expect(listed.projects).toHaveLength(0);
  });

  it("invalid remote → Product Create refused", async () => {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = "acme/widget";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL = "not-a-url";
    const services = createLocalVerticalSliceServices({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-09-19T12:00:00.000Z",
    });
    const result = await services.facade.createProject({
      name: "Should Fail Remote",
      objective: "x",
      context: "y",
      perceivedCriticality: "STANDARD",
      constraints: [],
      shortReference: "FAIL2",
      idempotencyKey: "idem:pwr04-bad-remote",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.message).toMatch(/Remote|invalide|refusée/i);
  });

  it("complete config → Product Project with automatic binding", async () => {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = "acme/widget";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/widget.git";
    const services = createLocalVerticalSliceServices({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-09-19T12:00:00.000Z",
    });
    const result = await services.facade.createProject({
      name: "Mini cadrage — Suivi de tâches",
      objective: "x",
      context: "y",
      perceivedCriticality: "STANDARD",
      constraints: [],
      shortReference: "OK",
      idempotencyKey: "idem:pwr04-ok",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.project.projectWorkspaceKey).toBe(
      "mini-cadrage-suivi-de-taches",
    );
    expect(result.project.repositoryBinding?.pathRoot).toBe(
      EXPECTED_PROJECT_ROOT,
    );
  });
});

```


### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel.tsx`

```typescript
"use client";

/**
 * Read-only Project / Cycle workspace projection.
 * PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01 — no manual RepositoryBinding edit.
 * Wording is honest: logical planned workspace until Evidence proves materialization.
 * Client-safe: no CycleTypeCatalog / doctrine imports (server supplies segment).
 */

import { useEffect, useState } from "react";
import styles from "../ProjectWorkspacePage.module.css";

export type ProjectWorkspaceRoutingPanelProps = {
  projectId: string;
  projectWorkspaceKey?: string | null;
  pathRoot?: string | null;
  repositoryIdentity?: string | null;
  /** Active cycle type id — display only. */
  activeCycleTypeId?: string | null;
  /** Stable catalog segment supplied by server (never derived client-side from displayOrder). */
  activeCycleWorkspaceSegment?: string | null;
};

function composeCycleRoot(
  pathRoot: string | null,
  segment: string | null,
): string | null {
  if (!pathRoot || !segment) return null;
  const root = pathRoot.replace(/\/+$/, "");
  const seg = segment.trim().replace(/^\/+|\/+$/g, "");
  if (!root || !seg || seg.includes("/") || seg.includes("..")) return null;
  return `${root}/${seg}`;
}

export function ProjectWorkspaceRoutingPanel(
  props: ProjectWorkspaceRoutingPanelProps,
) {
  const pathRoot = props.pathRoot?.trim() || null;
  const key = props.projectWorkspaceKey?.trim() || null;
  const projectWorkspace = pathRoot
    ? `${pathRoot.replace(/\/+$/, "")}/`
    : key
      ? `projects/${key}/`
      : null;

  const cycleRoot = composeCycleRoot(
    pathRoot,
    props.activeCycleWorkspaceSegment?.trim() || null,
  );

  return (
    <section
      className={styles.stateTrajectoryNote}
      data-testid="project-workspace-routing"
      aria-label="Workspace repository du Project"
    >
      <h3 className={styles.stateTrajectoryTitle}>Workspace repository</h3>
      <p className={styles.stateTrajectoryNote}>
        Chemins logiques prévus pour les livrables gouvernés. Aucune
        matérialisation Git n&apos;est affirmée ici sans Evidence
        correspondante.
      </p>
      {props.repositoryIdentity ? (
        <p data-testid="project-workspace-repo-identity">
          <strong>Repository :</strong> {props.repositoryIdentity}
        </p>
      ) : (
        <p data-testid="project-workspace-repo-identity-missing">
          Repository cible non encore projeté (configuration serveur
          absente ou Project legacy).
        </p>
      )}
      <p data-testid="project-workspace-path">
        <strong>Workspace projet :</strong>{" "}
        {projectWorkspace ?? "non déterminé"}
      </p>
      <p data-testid="project-cycle-workspace-path">
        <strong>Workspace cycle actif :</strong>{" "}
        {cycleRoot
          ? `${cycleRoot}/`
          : "aucun cycle actif / segment indisponible"}
      </p>
      {props.activeCycleTypeId ? (
        <p data-testid="project-active-cycle-type">
          <strong>Cycle type :</strong> {props.activeCycleTypeId}
        </p>
      ) : null}
    </section>
  );
}

export function ProjectWorkspaceRoutingPanelLazy(
  props: ProjectWorkspaceRoutingPanelProps & {
    loadActiveCycleWorkspace?: () => Promise<{
      cycleTypeId: string | null;
      repositoryWorkspaceSegment: string | null;
    }>;
  },
) {
  const [cycleTypeId, setCycleTypeId] = useState<string | null>(
    props.activeCycleTypeId ?? null,
  );
  const [segment, setSegment] = useState<string | null>(
    props.activeCycleWorkspaceSegment ?? null,
  );
  useEffect(() => {
    let cancelled = false;
    if (props.activeCycleTypeId && props.activeCycleWorkspaceSegment) {
      setCycleTypeId(props.activeCycleTypeId);
      setSegment(props.activeCycleWorkspaceSegment);
      return;
    }
    if (!props.loadActiveCycleWorkspace) return;
    void props.loadActiveCycleWorkspace().then((info) => {
      if (cancelled) return;
      setCycleTypeId(info.cycleTypeId);
      setSegment(info.repositoryWorkspaceSegment);
    });
    return () => {
      cancelled = true;
    };
  }, [
    props.activeCycleTypeId,
    props.activeCycleWorkspaceSegment,
    props.loadActiveCycleWorkspace,
    props.projectId,
  ]);

  return (
    <ProjectWorkspaceRoutingPanel
      {...props}
      activeCycleTypeId={cycleTypeId}
      activeCycleWorkspaceSegment={segment}
    />
  );
}

```


### `projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts`

```typescript
/**
 * Cycle-aware artifact target composition / validation (server-owned).
 * Nora filename proposals are non-authoritative candidates only.
 * Pure domain — no features/ imports.
 *
 * CR-PWR-01: invalid proposedTargetPath must FAIL CLOSED (never salvage basename).
 * CR-PWR-02: classifyArtifactWriteMode — exists without same-deliverable proof → ASK.
 */

function normalizeRepoRelativePath(raw: string): string | null {
  const n = raw.replace(/\\/g, "/").replace(/^\.\//, "").replace(/\/+$/, "");
  if (!n || n.startsWith("/")) return null;
  const segs = n.split("/");
  if (segs.some((seg) => seg === ".." || seg === "")) return null;
  return n;
}

export type ArtifactTargetRoutingResult =
  | {
      ok: true;
      projectRoot: string;
      cycleRoot: string;
      artifactFileName: string;
      targetPath: string;
      needsTargetClarification: false;
    }
  | {
      ok: false;
      needsTargetClarification: true;
      code: string;
      reason: string;
      projectRoot?: string;
      cycleRoot?: string;
    };

const MARKDOWN_LEAF = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,120}\.md$/;

export function isSafeArtifactFileNameLeaf(name: string): boolean {
  const trimmed = name.trim();
  if (!trimmed || trimmed.includes("/") || trimmed.includes("\\")) return false;
  if (trimmed.includes("..")) return false;
  return MARKDOWN_LEAF.test(trimmed);
}

/**
 * Resolve a filename candidate from an explicit leaf field only, or from a
 * proposed path that is already a bare safe leaf (no directories).
 *
 * CR-PWR-01 — NEVER extract basename from absolute / traversal / malformed paths
 * to "repair" them into a composable leaf.
 */
export function extractArtifactFileNameCandidate(input: {
  artifactFileName?: string | null;
  targetPath?: string | null;
}): string | null {
  const explicit = input.artifactFileName?.trim() || "";
  if (explicit && isSafeArtifactFileNameLeaf(explicit)) return explicit;
  const rawPath = input.targetPath?.trim() || "";
  if (!rawPath) return null;
  const normalized = normalizeRepoRelativePath(rawPath);
  if (!normalized) return null;
  // Full paths are not filename candidates — only bare leaves.
  if (normalized.includes("/")) return null;
  return isSafeArtifactFileNameLeaf(normalized) ? normalized : null;
}

export function isPathWithinRoot(targetRaw: string, pathRootRaw: string): boolean {
  const target = normalizeRepoRelativePath(targetRaw);
  const root = normalizeRepoRelativePath(pathRootRaw);
  if (!target || !root) return false;
  if (target === root) return true;
  return target.startsWith(root + "/");
}

export function composeCycleWorkspaceRoot(input: {
  projectPathRoot: string;
  repositoryWorkspaceSegment: string;
}): string | null {
  const projectRoot = normalizeRepoRelativePath(input.projectPathRoot);
  const segment = input.repositoryWorkspaceSegment.trim().replace(/^\/+|\/+$/g, "");
  if (!projectRoot || !segment) return null;
  if (segment.includes("/") || segment.includes("\\") || segment.includes("..")) {
    return null;
  }
  if (!/^[a-z0-9][a-z0-9._-]{0,80}$/i.test(segment)) return null;
  return `${projectRoot}/${segment}`;
}

/**
 * Compose exact server-owned target under Project + Cycle workspace.
 * - Full in-bounds targetPath accepted when under cycle root.
 * - Leaf filename (or artifactFileName) composed under cycle root.
 * - Invalid / out-of-bounds proposedTargetPath → FAIL CLOSED (no silent rewrite).
 */
export function resolveArtifactTargetUnderCycleWorkspace(input: {
  projectPathRoot: string;
  repositoryWorkspaceSegment: string;
  artifactFileName?: string | null;
  proposedTargetPath?: string | null;
}): ArtifactTargetRoutingResult {
  const projectRoot = normalizeRepoRelativePath(input.projectPathRoot);
  if (!projectRoot) {
    return {
      ok: false,
      needsTargetClarification: true,
      code: "PROJECT_ROOT_INVALID",
      reason: "project_path_root_invalid",
    };
  }
  const cycleRoot = composeCycleWorkspaceRoot({
    projectPathRoot: projectRoot,
    repositoryWorkspaceSegment: input.repositoryWorkspaceSegment,
  });
  if (!cycleRoot) {
    return {
      ok: false,
      needsTargetClarification: true,
      code: "CYCLE_SEGMENT_INVALID",
      reason: "cycle_workspace_segment_invalid",
      projectRoot,
    };
  }

  const proposed = input.proposedTargetPath?.trim() || "";
  if (proposed) {
    const normalizedProposed = normalizeRepoRelativePath(proposed);
    // CR-PWR-01 — absolute / traversal / malformed / backslash-escape → fail closed.
    // Never fall through to basename salvage.
    if (!normalizedProposed) {
      return {
        ok: false,
        needsTargetClarification: true,
        code: "TARGET_PATH_INVALID",
        reason: "proposed_target_absolute_traversal_or_malformed",
        projectRoot,
        cycleRoot,
      };
    }

    if (normalizedProposed.includes("/")) {
      if (
        isPathWithinRoot(normalizedProposed, cycleRoot) &&
        normalizedProposed !== cycleRoot
      ) {
        const leaf = normalizedProposed.split("/").pop() || "";
        if (!isSafeArtifactFileNameLeaf(leaf)) {
          return {
            ok: false,
            needsTargetClarification: true,
            code: "TARGET_LEAF_INVALID",
            reason: "target_leaf_not_safe_markdown",
            projectRoot,
            cycleRoot,
          };
        }
        return {
          ok: true,
          projectRoot,
          cycleRoot,
          artifactFileName: leaf,
          targetPath: normalizedProposed,
          needsTargetClarification: false,
        };
      }
      return {
        ok: false,
        needsTargetClarification: true,
        code: "TARGET_OUTSIDE_CYCLE_WORKSPACE",
        reason: "proposed_target_outside_cycle_workspace",
        projectRoot,
        cycleRoot,
      };
    }

    // Bare leaf proposed as path — compose under cycle root (same as filename).
    if (!isSafeArtifactFileNameLeaf(normalizedProposed)) {
      return {
        ok: false,
        needsTargetClarification: true,
        code: "TARGET_LEAF_INVALID",
        reason: "proposed_bare_leaf_not_safe_markdown",
        projectRoot,
        cycleRoot,
      };
    }
    return {
      ok: true,
      projectRoot,
      cycleRoot,
      artifactFileName: normalizedProposed,
      targetPath: `${cycleRoot}/${normalizedProposed}`,
      needsTargetClarification: false,
    };
  }

  const fileName = extractArtifactFileNameCandidate({
    artifactFileName: input.artifactFileName,
    targetPath: null,
  });
  if (!fileName) {
    return {
      ok: false,
      needsTargetClarification: true,
      code: "ARTIFACT_FILENAME_REQUIRED",
      reason: "artifact_filename_absent_or_invalid",
      projectRoot,
      cycleRoot,
    };
  }

  const targetPath = `${cycleRoot}/${fileName}`;
  return {
    ok: true,
    projectRoot,
    cycleRoot,
    artifactFileName: fileName,
    targetPath,
    needsTargetClarification: false,
  };
}

/**
 * Classify CREATE vs UPDATE from a filesystem existence fact (never LLM).
 *
 * CR-PWR-02:
 * - absent → CREATE
 * - present + intentClearlySameDeliverable === true → UPDATE
 * - present + intentClearlySameDeliverable false/undefined/null → ASK
 * - unknown → ASK
 */
export function classifyArtifactWriteMode(input: {
  targetExists: boolean | null | undefined;
  intentClearlySameDeliverable?: boolean | null;
}): "CREATE" | "UPDATE" | "ASK" {
  if (input.targetExists === false) return "CREATE";
  if (input.targetExists === true) {
    if (input.intentClearlySameDeliverable === true) return "UPDATE";
    return "ASK";
  }
  return "ASK";
}

/**
 * Collision check for Project workspace directory before first materialization.
 * existingPaths = repo-relative paths known to exist (read-only inventory).
 */
export function assessProjectWorkspaceCollision(input: {
  projectPathRoot: string;
  existingRepoRelativePaths: readonly string[];
  /** When the existing tree is already claimed by this same durable key. */
  durableOwnershipMatches?: boolean;
}): "absent_ok" | "reuse_same_project" | "ambiguous_collision" {
  const root = normalizeRepoRelativePath(input.projectPathRoot);
  if (!root) return "ambiguous_collision";
  const occupied = input.existingRepoRelativePaths.some((p) => {
    const n = normalizeRepoRelativePath(p);
    if (!n) return false;
    return n === root || n.startsWith(root + "/") || root.startsWith(n + "/");
  });
  if (!occupied) return "absent_ok";
  if (input.durableOwnershipMatches === true) return "reuse_same_project";
  return "ambiguous_collision";
}

/** Re-export normalize for callers that must share identical path rules. */
export { normalizeRepoRelativePath as normalizeArtifactRepoRelativePath };

```


### `projects/sfia-studio/app/lib/oa/project/domain/projectWorkspaceKey.ts`

```typescript
/**
 * PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01
 * Stable Project workspace key derived once from title at create time.
 * Rename of title must NOT recompute an existing durable key.
 */
export const PROJECT_WORKSPACE_PREFIX = "projects" as const;

/**
 * Derive a stable kebab workspace key from a Project title.
 * Deterministic, ASCII-leaning, path-safe leaf (no slashes).
 */
export function deriveProjectWorkspaceKeyFromTitle(title: string): string {
  const normalized = title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
  const key = normalized.slice(0, 80).replace(/-+$/g, "");
  return key.length > 0 ? key : "project";
}

/** Repo-relative Project workspace root: projects/<key> */
export function composeProjectWorkspacePathRoot(workspaceKey: string): string {
  const key = workspaceKey.trim().replace(/^\/+|\/+$/g, "");
  if (!key || key.includes("/") || key.includes("\\") || key.includes("..")) {
    throw new Error("invalid_project_workspace_key");
  }
  return `${PROJECT_WORKSPACE_PREFIX}/${key}`;
}

export function isValidProjectWorkspaceKey(key: string): boolean {
  return (
    typeof key === "string" &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(key) &&
    key.length >= 1 &&
    key.length <= 80
  );
}

```


### `projects/sfia-studio/app/lib/oa/project/domain/serverOwnedRepositoryConfig.ts`

```typescript
/**
 * Server-owned default Product repository identity for automatic Project binding.
 * Never hardcode owner/repo in domain. Never accept client-supplied ambient cwd.
 */
export const SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY_ENV =
  "SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY" as const;
export const SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL_ENV =
  "SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL" as const;
export const SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH_ENV =
  "SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH" as const;

export type ServerOwnedRepositoryConfig = {
  provider: "github";
  identity: string;
  remoteUrl: string;
  defaultBranch: string;
};

/**
 * Resolve explicit server repository config.
 * Returns null when incomplete — never invent ambient identity.
 *
 * CR-PWR-04 — Product Create (LocalProjectComposition) FAIL-CLOSED when null.
 * Low-level CreateProject may still omit binding for legacy/fixture reload only.
 */
export function resolveServerOwnedRepositoryConfig(
  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
): ServerOwnedRepositoryConfig | null {
  const identity = env[SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY_ENV]?.trim() ?? "";
  const remoteUrl =
    env[SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL_ENV]?.trim() ?? "";
  const defaultBranch =
    env[SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH_ENV]?.trim() || "main";
  if (!identity || !remoteUrl) return null;
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(identity)) return null;
  if (!remoteUrl.startsWith("https://") && !remoteUrl.startsWith("git@")) {
    return null;
  }
  return {
    provider: "github",
    identity,
    remoteUrl,
    defaultBranch,
  };
}

/** Functional reason when Product Create refuses missing/invalid server config. */
export function describeServerOwnedRepositoryConfigGap(
  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
): string {
  const identity = env[SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY_ENV]?.trim() ?? "";
  const remoteUrl =
    env[SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL_ENV]?.trim() ?? "";
  if (!identity && !remoteUrl) {
    return "Configuration dépôt server-owned absente (identité et remote URL requises). Création Product refusée — aucun Project partiel.";
  }
  if (!identity) {
    return "Identité dépôt server-owned manquante. Création Product refusée — aucun Project partiel.";
  }
  if (!remoteUrl) {
    return "Remote URL dépôt server-owned manquante. Création Product refusée — aucun Project partiel.";
  }
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(identity)) {
    return "Identité dépôt server-owned invalide (attendu owner/repo). Création Product refusée — aucun Project partiel.";
  }
  if (!remoteUrl.startsWith("https://") && !remoteUrl.startsWith("git@")) {
    return "Remote URL dépôt server-owned invalide. Création Product refusée — aucun Project partiel.";
  }
  return "Configuration dépôt server-owned incomplète. Création Product refusée — aucun Project partiel.";
}

```


### `projects/sfia-studio/app/lib/oa/project/infrastructure/managedRepoPathFacts.ts`

```typescript
/**
 * Read-only managed-repo path facts for Product workspace routing.
 *
 * Reuses ManagedProjectRepositoryResolver + local filesystem probes.
 * NOT a second repository inspection engine. ZERO network. No writes.
 *
 * Returns null when the managed clone / base is unavailable (unknown fact → ASK).
 */
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import {
  ManagedProjectRepositoryResolver,
  sanitizeManagedRepoIdentity,
} from "@/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver";
import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { normalizeArtifactRepoRelativePath } from "@/lib/oa/project/domain/artifactTargetRouting";

const resolver = new ManagedProjectRepositoryResolver();

function resolveRepoRoot(input: {
  identity: string;
  managedRepoRootBase?: string | null;
}): string | null {
  const base =
    (typeof input.managedRepoRootBase === "string" &&
    input.managedRepoRootBase.trim()
      ? path.resolve(input.managedRepoRootBase.trim())
      : null) ?? resolveManagedRepoRootBaseFromEnv() ?? null;
  if (!base) return null;
  return resolver.resolveLocalRepoRoot({ identity: input.identity }, base);
}

/**
 * Probe whether a repo-relative path exists as a file (or directory) under the
 * managed clone. null = unknown (no managed base / clone missing).
 */
export function probeManagedRepoRelativePathExists(input: {
  identity: string;
  repoRelativePath: string;
  managedRepoRootBase?: string | null;
}): boolean | null {
  const rel = normalizeArtifactRepoRelativePath(input.repoRelativePath);
  if (!rel) return null;
  const repoRoot = resolveRepoRoot(input);
  if (!repoRoot) return null;
  const abs = path.resolve(repoRoot, rel);
  if (abs !== repoRoot && !abs.startsWith(repoRoot + path.sep)) return null;
  return existsSync(abs);
}

/**
 * List existing repo-relative paths under a project workspace root (shallow walk).
 * null = unknown. Empty array = root absent.
 */
export function listManagedRepoPathsUnderRoot(input: {
  identity: string;
  pathRoot: string;
  managedRepoRootBase?: string | null;
  maxEntries?: number;
}): string[] | null {
  const root = normalizeArtifactRepoRelativePath(input.pathRoot);
  if (!root) return null;
  const repoRoot = resolveRepoRoot(input);
  if (!repoRoot) return null;
  const absRoot = path.resolve(repoRoot, root);
  if (absRoot !== repoRoot && !absRoot.startsWith(repoRoot + path.sep)) {
    return null;
  }
  if (!existsSync(absRoot)) return [];
  const max = input.maxEntries ?? 256;
  const out: string[] = [root];
  const walk = (absDir: string, relDir: string) => {
    if (out.length >= max) return;
    let entries: string[];
    try {
      entries = readdirSync(absDir);
    } catch {
      return;
    }
    for (const name of entries) {
      if (out.length >= max) return;
      if (name === ".git") continue;
      const absChild = path.join(absDir, name);
      const relChild = `${relDir}/${name}`;
      out.push(relChild);
      try {
        if (statSync(absChild).isDirectory()) walk(absChild, relChild);
      } catch {
        /* skip */
      }
    }
  };
  try {
    if (statSync(absRoot).isDirectory()) walk(absRoot, root);
  } catch {
    /* file at root — already recorded */
  }
  return out;
}

/** Test helper: ensure a managed clone skeleton exists (git dir marker only). */
export function ensureManagedRepoCloneSkeleton(input: {
  managedRepoRootBase: string;
  identity: string;
}): string {
  const base = path.resolve(input.managedRepoRootBase);
  const sanitized = sanitizeManagedRepoIdentity(input.identity);
  const repoRoot = path.join(base, sanitized);
  const gitDir = path.join(repoRoot, ".git");
  if (!existsSync(gitDir)) {
    mkdirSync(gitDir, { recursive: true });
  }
  return repoRoot;
}

```


## Modified files — COMPLETE DIFFS (one section per file)


### `projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
index 01814905..c4af1686 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
@@ -95,6 +95,7 @@ describe("V3.1-D1 cycle type catalog", () => {
           unavailableBehavior: "fail-closed",
         },
         aliases: [],
+        repositoryWorkspaceSegment: "16-w3d-extension-probe",
       });
       return entries;
     });
@@ -102,6 +103,62 @@ describe("V3.1-D1 cycle type catalog", () => {
     expect(validateCycleTypeCatalog(extended)).toEqual([]);
   });

+  it("PRODUCT-PWR-01: stable repositoryWorkspaceSegment per cycle (not displayOrder-derived)", () => {
+    const framing = getCycleTypeById("cyc:framing");
+    const delivery = getCycleTypeById("cyc:delivery");
+    expect(framing?.repositoryWorkspaceSegment).toBe("01-cadrage");
+    expect(delivery?.repositoryWorkspaceSegment).toBe(
+      "08-delivery-implementation",
+    );
+    const segments = CYCLE_TYPE_CATALOG.entries.map(
+      (e) => e.repositoryWorkspaceSegment,
+    );
+    expect(new Set(segments).size).toBe(segments.length);
+    // Must not equal String(displayOrder) padding alone as the sole source of truth
+    for (const e of CYCLE_TYPE_CATALOG.entries) {
+      expect(e.repositoryWorkspaceSegment).not.toBe(String(e.displayOrder));
+      expect(e.repositoryWorkspaceSegment.length).toBeGreaterThan(2);
+    }
+  });
+
+  it("PRODUCT-PWR-01: rejects empty/duplicate/unsafe workspace segments", () => {
+    const empty = cloneCatalog((entries) => {
+      entries[0] = { ...entries[0], repositoryWorkspaceSegment: "" };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(empty).some(
+        (i) => i.code === "WORKSPACE_SEGMENT_EMPTY",
+      ),
+    ).toBe(true);
+
+    const dup = cloneCatalog((entries) => {
+      entries[1] = {
+        ...entries[1],
+        repositoryWorkspaceSegment: entries[0].repositoryWorkspaceSegment,
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(dup).some(
+        (i) => i.code === "WORKSPACE_SEGMENT_DUPLICATE",
+      ),
+    ).toBe(true);
+
+    const unsafe = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        repositoryWorkspaceSegment: "../escape",
+      };
+      return entries;
+    });
+    expect(
+      validateCycleTypeCatalog(unsafe).some(
+        (i) => i.code === "WORKSPACE_SEGMENT_INVALID",
+      ),
+    ).toBe(true);
+  });
+
   it("lists exact adopted cycleTypeId set in order", () => {
     expect(listCycleTypes().map((e) => e.cycleTypeId)).toEqual([
       ...EXPECTED_IDS,
```


### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
index 49d22f19..9b380cb7 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
@@ -39,6 +39,11 @@ vi.mock("@/features/pre-m6-product-ui/hooks/useProductConversation", () => ({
 vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantPilotLifecycleProjection: (...args: unknown[]) =>
     lifecycleProjectionMock(...args),
+  projectAssistantActiveCycleWorkspaceAction: vi.fn().mockResolvedValue({
+    ok: true,
+    cycleTypeId: null,
+    repositoryWorkspaceSegment: null,
+  }),
   projectAssistantPilotLifecycleAction: vi.fn(),
   projectAssistantRecordObligationPolicyAction: vi.fn(),
   projectAssistantCompleteTrajectoryStepAction: vi.fn(),
@@ -125,6 +130,7 @@ const PROJECT = {
       defaultBranch: "main",
       pathRoot: "projects/sfia-studio/.sandbox",
     },
+    projectWorkspaceKey: null as string | null,
   },
   doctrine: {
     id: "pkg:studio-v3-oa",
@@ -293,12 +299,11 @@ describe("JOURNEY-INTEGRITY — ProjectWorkspace CASE A composition", () => {
     expect(
       screen.getByTestId("lifecycle-require-artifact-continuation"),
     ).toBeTruthy();
-    expect(await screen.findByTestId("repo-binding-status")).toHaveTextContent(
-      /Binding durable chargé/i,
-    );
-    expect(screen.getByTestId("repo-binding-identity")).toHaveValue(
-      "mcleland147/sfia-workspace",
+    expect(await screen.findByTestId("project-workspace-routing")).toBeTruthy();
+    expect(screen.getByTestId("project-workspace-path")).toHaveTextContent(
+      /projects\/sfia-studio\/\.sandbox/i,
     );
+    expect(screen.queryByTestId("repository-binding-form")).toBeNull();
   });

   it("CTA-5 — no Proposal ownership restores Recovery requalify + Lifecycle Nora CTA", async () => {
```


### `projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts
index 904d19a7..b00d535b 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts
@@ -43,6 +43,7 @@ function ei(overrides?: Record<string, unknown>) {
     artifactType: null,
     targetRepositoryRef: null,
     targetPath: null,
+    artifactFileName: null,
     scopeIn: [],
     scopeOut: [],
     expectedOutputs: [],
```


### `projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
index dd214a87..cd4176e6 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
@@ -75,6 +75,17 @@ export function bootW2Runtime(input: {
 }): RuntimeApplicationService {
   process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
   process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
+  // CR-PWR-04 — Product Create requires server-owned repository config.
+  if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim()) {
+    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = "acme/w2-harness";
+  }
+  if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL?.trim()) {
+    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
+      "https://github.com/acme/w2-harness.git";
+  }
+  if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH?.trim()) {
+    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = "main";
+  }
   resetRuntimeApplicationServiceForTests();
   return getRuntimeApplicationService({
     registryRoot: W2_REGISTRY_ROOT,
```


### `projects/sfia-studio/app/__tests__/project-assistant/w3dFullCkcCatalog.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w3dFullCkcCatalog.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w3dFullCkcCatalog.test.ts
index 8feb00aa..6713d45d 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w3dFullCkcCatalog.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w3dFullCkcCatalog.test.ts
@@ -121,6 +121,7 @@ function extensionCatalogEntry(): CycleTypeDefinition {
       unavailableBehavior: "fail-closed",
     },
     aliases: [],
+    repositoryWorkspaceSegment: "16-w3d-extension-probe",
   };
 }

```


### `projects/sfia-studio/app/__tests__/setup.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/setup.ts b/projects/sfia-studio/app/__tests__/setup.ts
index 873a765e..f17c550d 100644
--- a/projects/sfia-studio/app/__tests__/setup.ts
+++ b/projects/sfia-studio/app/__tests__/setup.ts
@@ -20,3 +20,19 @@ process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH = path.join(
   sessionDir,
   "nora-session.sqlite",
 );
+
+/**
+ * CR-PWR-04 — Product Create requires server-owned repository config.
+ * Provide deterministic test defaults so Product-path suites remain green.
+ * Tests that intentionally clear these vars must restore them in afterEach.
+ */
+if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim()) {
+  process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = "acme/vitest-default";
+}
+if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL?.trim()) {
+  process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
+    "https://github.com/acme/vitest-default.git";
+}
+if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH?.trim()) {
+  process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = "main";
+}
```


### `projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
index 98026767..858144e5 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
@@ -2,7 +2,7 @@
 import fs from "node:fs";
 import os from "node:os";
 import path from "node:path";
-import { afterEach, describe, expect, it } from "vitest";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
 import { resetD1DbForTests } from "@/lib/d1/db";
 import {
@@ -64,6 +64,31 @@ function createOptions() {
   };
 }

+function restoreEnv(name: string, previous: string | undefined): void {
+  if (previous === undefined) delete process.env[name];
+  else process.env[name] = previous;
+}
+
+let prevIdentity: string | undefined;
+let prevRemote: string | undefined;
+let prevBranch: string | undefined;
+
+beforeEach(() => {
+  prevIdentity = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
+  prevRemote = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
+  prevBranch = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH;
+  process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = "acme/visible-slice";
+  process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
+    "https://github.com/acme/visible-slice.git";
+  process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = "main";
+});
+
+afterEach(() => {
+  restoreEnv("SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY", prevIdentity);
+  restoreEnv("SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL", prevRemote);
+  restoreEnv("SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH", prevBranch);
+});
+
 describe("visible slice V1 local composition", () => {
   it("creates services without React, network, fixtures, or IAM", () => {
     const services = createLocalVerticalSliceServices(createOptions());
@@ -159,7 +184,14 @@ describe("visible slice V1 Project/LPS happy path", () => {
         activeCycleInstanceId: null,
         ckcResolutionRef: null,
       },
-      repositoryBinding: null,
+      repositoryBinding: {
+        provider: "github",
+        identity: "acme/visible-slice",
+        remoteUrl: "https://github.com/acme/visible-slice.git",
+        defaultBranch: "main",
+        pathRoot: "projects/visible-slice-v1",
+      },
+      projectWorkspaceKey: "visible-slice-v1",
       localMode: true,
       iam: "NOT_SELECTED",
       productPersistence: "SQLITE_OA_PRODUCT_STORE",
```


### `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index a8c7c3af..a2eaab89 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -12,7 +12,8 @@ import { LpsSurface } from "./surfaces/LpsSurface";
 import { RecoverySurface } from "./surfaces/RecoverySurface";
 import { LifecycleSurface } from "./surfaces/LifecycleSurface";
 import { TrajectorySurface } from "./surfaces/TrajectorySurface";
-import { RepositoryBindingForm } from "./surfaces/RepositoryBindingForm";
+import { projectAssistantActiveCycleWorkspaceAction } from "@/features/project-assistant/actions";
+import { ProjectWorkspaceRoutingPanelLazy } from "./surfaces/ProjectWorkspaceRoutingPanel";
 import type { GetProjectResult, GetProjectSuccess } from "./types";
 import styles from "./ProjectWorkspacePage.module.css";

@@ -227,23 +228,28 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                   }}
                 />
                 <LpsSurface result={success} />
-                <section
-                  className={styles.stateTrajectoryNote}
-                  data-testid="project-repository-binding"
-                  aria-label="Repository binding"
-                >
-                  <h3 className={styles.stateTrajectoryTitle}>
-                    Repository binding
-                  </h3>
-                  <p className={styles.stateTrajectoryNote}>
-                    Binding explicite du dépôt Product (aucune résolution réseau
-                    à l&apos;enregistrement).
-                  </p>
-                  <RepositoryBindingForm
-                    projectId={projectId}
-                    onSaved={() => void loadProject()}
-                  />
-                </section>
+                <ProjectWorkspaceRoutingPanelLazy
+                  projectId={projectId}
+                  projectWorkspaceKey={
+                    success.project.projectWorkspaceKey ?? null
+                  }
+                  pathRoot={
+                    success.project.repositoryBinding?.pathRoot ?? null
+                  }
+                  repositoryIdentity={
+                    success.project.repositoryBinding?.identity ?? null
+                  }
+                  loadActiveCycleWorkspace={async () => {
+                    const info = await projectAssistantActiveCycleWorkspaceAction(
+                      { projectId },
+                    );
+                    return {
+                      cycleTypeId: info.cycleTypeId,
+                      repositoryWorkspaceSegment:
+                        info.repositoryWorkspaceSegment,
+                    };
+                  }}
+                />
                 <TrajectorySurface
                   projectId={projectId}
                   composition="lps-embedded"
```


### `projects/sfia-studio/app/features/project-assistant/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 3c7b294e..022fc92e 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -17,6 +17,7 @@ import {
   assessResumeReconciliation,
   deriveLifecycleBlockersFromEpistemicItems,
 } from "@/lib/oa/cycle";
+import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
 import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
 import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
 import type { F2DecisionKind } from "./f2/types";
@@ -1371,6 +1372,39 @@ export async function projectAssistantPilotLifecycleProjection(input: {
   };
 }

+/**
+ * PRODUCT-PWR-01 — active cycle workspace segment (server-owned catalog metadata).
+ * Client UI must not import CycleTypeCatalog (doctrine / node:fs).
+ */
+export async function projectAssistantActiveCycleWorkspaceAction(input: {
+  projectId: string;
+}): Promise<{
+  ok: boolean;
+  cycleTypeId: string | null;
+  repositoryWorkspaceSegment: string | null;
+  message?: string;
+}> {
+  const life = await projectAssistantPilotLifecycleProjection({
+    projectId: input.projectId,
+  });
+  if (!life.ok || !life.projection?.activeCycle) {
+    return {
+      ok: true,
+      cycleTypeId: null,
+      repositoryWorkspaceSegment: null,
+    };
+  }
+  const cycleTypeId = life.projection.activeCycle.cycleTypeId ?? null;
+  const segment = cycleTypeId
+    ? getCycleTypeById(cycleTypeId)?.repositoryWorkspaceSegment ?? null
+    : null;
+  return {
+    ok: true,
+    cycleTypeId,
+    repositoryWorkspaceSegment: segment,
+  };
+}
+
 /**
  * CORR-PROOF-05 — Pilot lifecycle transitions (START/PAUSE/RESUME/FINALIZE/CANCEL).
  * Never uses morrisGateRequired as Pilot lifecycle authority.
```


### `projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
index cc09bca1..319cbe43 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
@@ -23,7 +23,19 @@ import {
   OBLIGATION_POLICY_REQUIRE_ARTIFACT,
   type CycleInstance,
 } from "@/lib/oa/cycle";
-import type { ProjectRepositoryBinding } from "@/lib/oa/project";
+import type { Project, ProjectRepositoryBinding } from "@/lib/oa/project";
+import {
+  assessProjectWorkspaceCollision,
+  classifyArtifactWriteMode,
+  resolveArtifactTargetUnderCycleWorkspace,
+} from "@/lib/oa/project/domain/artifactTargetRouting";
+import { isValidProjectWorkspaceKey } from "@/lib/oa/project/domain/projectWorkspaceKey";
+import {
+  listManagedRepoPathsUnderRoot,
+  probeManagedRepoRelativePathExists,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
+import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
 import type { ProjectAssistantContextDto } from "../types";
 import { classifyHumanDecisionLifecycle } from "./studioCognitiveContext";
 import type { ExecutionIntentPayload } from "./executionIntentSchema";
@@ -33,6 +45,21 @@ import {
 } from "./f2CanonicalOperations";
 import type { F2ContinuationKind, IntentAnalysisDto } from "./types";

+/**
+ * Automatic Project workspace roots are exactly `projects/<workspace-key>`.
+ * Legacy roots (docs/, projects/sfia-studio/.sandbox, …) keep prior clamp semantics.
+ */
+export function isAutomaticProjectWorkspacePathRoot(pathRoot: string): boolean {
+  const n = normalizeRepoRelativePath(pathRoot);
+  if (!n) return false;
+  const parts = n.split("/");
+  return (
+    parts.length === 2 &&
+    parts[0] === "projects" &&
+    isValidProjectWorkspaceKey(parts[1]!)
+  );
+}
+
 /** Re-export canonical constants (single source: f2CanonicalOperations). */
 export {
   F2_ARTIFACT_MATERIALIZATION_CAPABILITIES,
@@ -77,11 +104,28 @@ export type ActiveCycleContinuationOa = {
       }): Promise<
         | {
             ok: true;
-            project: { repositoryBinding?: ProjectRepositoryBinding };
+            project: {
+              projectId: string;
+              projectWorkspaceKey?: string;
+              repositoryBinding?: ProjectRepositoryBinding;
+            };
           }
         | { ok: false }
       >;
     };
+    readonly listProjects: {
+      execute(): Promise<
+        | { ok: true; projects: readonly Project[] }
+        | { ok: false }
+      >;
+    };
+  };
+  readonly evidenceReviewServices?: {
+    readonly repository: {
+      listByProject(projectId: string): Promise<
+        ReadonlyArray<{ location?: string; source?: string }>
+      >;
+    };
   };
 };

@@ -105,7 +149,13 @@ export type ContinuationBlockedReason =
   | "no_require_artifact"
   | "artifact_already_satisfied"
   | "lifecycle_assess_failed"
-  | "incompatible_execution_intent";
+  | "incompatible_execution_intent"
+  | "workspace_collision_ambiguous";
+
+export type ActiveCycleContinuationClarificationReason =
+  | "target_unresolved"
+  | "workspace_collision_ambiguous"
+  | "artifact_write_mode_ask";

 export function parseContinuationKind(
   raw: unknown,
@@ -289,6 +339,7 @@ export type ActiveCycleContinuationResolution =
       readonly activeCycle: CycleInstance;
       readonly repositoryBinding: ProjectRepositoryBinding | null;
       readonly needsTargetClarification: boolean;
+      readonly clarificationReason?: ActiveCycleContinuationClarificationReason;
       readonly enrichedExecutionIntent: ExecutionIntentPayload | null;
     }
   | {
@@ -375,27 +426,173 @@ export async function resolveActiveCycleGovernedContinuation(input: {

   // Authoritative Project.repositoryBinding — never invent a second SoT.
   let repositoryBinding: ProjectRepositoryBinding | null = null;
+  let projectWorkspaceKey: string | undefined;
   const proj = await input.oa.projectServices.getProject.execute({
     projectId: input.project.projectId,
   });
   if (proj.ok) {
     repositoryBinding = proj.project.repositoryBinding ?? null;
+    projectWorkspaceKey = proj.project.projectWorkspaceKey;
   }

   const enriched = enrichExecutionIntentFromBinding({
     analysisIntent: input.analysis.executionIntent,
     binding: repositoryBinding,
+    activeCycleTypeId: activeCycle.cycleTypeId,
   });

+  if (enriched.needsTargetClarification) {
+    return {
+      mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
+      activeCycle,
+      repositoryBinding,
+      needsTargetClarification: true,
+      clarificationReason: "target_unresolved",
+      enrichedExecutionIntent: enriched.executionIntent,
+    };
+  }
+
+  // CR-PWR-03 — workspace collision before first materialization (automatic roots).
+  // Only when managed-repo substrate is configured (otherwise inventory is unknown).
+  const pathRoot = repositoryBinding?.pathRoot?.trim() || "";
+  const managedBaseForCollision = resolveManagedRepoRootBaseFromEnv();
+  if (
+    pathRoot &&
+    isAutomaticProjectWorkspacePathRoot(pathRoot) &&
+    repositoryBinding?.identity &&
+    managedBaseForCollision
+  ) {
+    const collision = await qualifyProjectWorkspaceCollision({
+      oa: input.oa,
+      projectId: input.project.projectId,
+      pathRoot,
+      workspaceKey: projectWorkspaceKey,
+      identity: repositoryBinding.identity,
+      managedRepoRootBase: managedBaseForCollision,
+    });
+    if (collision === "ambiguous_collision") {
+      return {
+        mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
+        activeCycle,
+        repositoryBinding,
+        needsTargetClarification: true,
+        clarificationReason: "workspace_collision_ambiguous",
+        enrichedExecutionIntent: {
+          ...(enriched.executionIntent ?? {}),
+          intentKind: "docs_write",
+          targetPath: null,
+          artifactWriteMode: "ASK",
+        },
+      };
+    }
+  }
+
+  // CR-PWR-02 — repository existence read → CREATE/UPDATE/ASK before Proposal.
+  // Only when managed-repo substrate is configured (same resolver StartExecution uses).
+  // Absent managed base → leave write mode unresolved (null); do not invent ASK.
+  const targetPath = enriched.executionIntent?.targetPath?.trim() || "";
+  const managedBase = resolveManagedRepoRootBaseFromEnv();
+  let withMode: ExecutionIntentPayload = { ...(enriched.executionIntent ?? {}) };
+
+  if (targetPath && repositoryBinding?.identity && managedBase) {
+    const targetExists = probeManagedRepoRelativePathExists({
+      identity: repositoryBinding.identity,
+      repoRelativePath: targetPath,
+      managedRepoRootBase: managedBase,
+    });
+    const artifactWriteMode = classifyArtifactWriteMode({
+      targetExists,
+      intentClearlySameDeliverable:
+        targetExists === true ? true : undefined,
+    });
+    withMode = { ...withMode, artifactWriteMode };
+
+    if (artifactWriteMode === "ASK") {
+      return {
+        mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
+        activeCycle,
+        repositoryBinding,
+        needsTargetClarification: true,
+        clarificationReason: "artifact_write_mode_ask",
+        enrichedExecutionIntent: withMode,
+      };
+    }
+  }
+
   return {
     mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
     activeCycle,
     repositoryBinding,
-    needsTargetClarification: enriched.needsTargetClarification,
-    enrichedExecutionIntent: enriched.executionIntent,
+    needsTargetClarification: false,
+    enrichedExecutionIntent: withMode,
   };
 }

+/**
+ * CR-PWR-03 — ownership only from durable Project/Evidence truths.
+ * Slug match alone is never ownership. Directory existence alone is never ownership.
+ */
+async function qualifyProjectWorkspaceCollision(input: {
+  oa: ActiveCycleContinuationOa;
+  projectId: string;
+  pathRoot: string;
+  workspaceKey: string | undefined;
+  identity: string;
+  managedRepoRootBase: string;
+}): Promise<"absent_ok" | "reuse_same_project" | "ambiguous_collision"> {
+  const inventory = listManagedRepoPathsUnderRoot({
+    identity: input.identity,
+    pathRoot: input.pathRoot,
+    managedRepoRootBase: input.managedRepoRootBase,
+  });
+  // Unknown managed clone — cannot invent occupation.
+  if (inventory === null) {
+    return "absent_ok";
+  }
+
+  const listed = await input.oa.projectServices.listProjects.execute();
+  const otherClaimants =
+    listed.ok
+      ? listed.projects.filter((p) => {
+          if (p.projectId === input.projectId) return false;
+          if (
+            input.workspaceKey &&
+            p.projectWorkspaceKey === input.workspaceKey
+          ) {
+            return true;
+          }
+          const otherRoot = p.repositoryBinding?.pathRoot?.trim() || "";
+          return otherRoot === input.pathRoot;
+        })
+      : [];
+  if (otherClaimants.length > 0) {
+    return "ambiguous_collision";
+  }
+
+  let durableOwnershipMatches = false;
+  if (inventory.length > 0 && input.oa.evidenceReviewServices) {
+    try {
+      const evidence =
+        await input.oa.evidenceReviewServices.repository.listByProject(
+          input.projectId,
+        );
+      durableOwnershipMatches = evidence.some((ev) => {
+        const loc = (ev.location ?? ev.source ?? "").trim();
+        if (!loc) return false;
+        return isPathWithinRoot(loc, input.pathRoot);
+      });
+    } catch {
+      durableOwnershipMatches = false;
+    }
+  }
+
+  return assessProjectWorkspaceCollision({
+    projectPathRoot: input.pathRoot,
+    existingRepoRelativePaths: inventory,
+    durableOwnershipMatches,
+  });
+}
+
 /**
  * CR-07-06 — after acceptance, action + capabilities are server-owned for this seam.
  * Never preserve provider-arbitrary requestedOperation / requiredCapabilities.
@@ -413,14 +610,19 @@ function withCanonicalArtifactMaterializationAction(
 }

 /**
- * Bound Nora-proposed path/scope to authoritative binding.
- * Never invent identity/path; never widen pathRoot via scopeIn (CR-07-01);
- * never accept traversal targets (CR-07-02); never invent reversibility (CR-07-03);
- * never preserve contradictory / arbitrary action or capabilities (CR-07-06).
+ * Bound Nora-proposed path/scope to authoritative binding + cycle workspace.
+ * PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01:
+ * - leaf filename / artifactFileName → server composes exact target under cycle root
+ * - full in-bounds target accepted
+ * - out-of-bounds / missing filename → clarify (fail-closed)
+ * Never invent identity; never widen pathRoot via scopeIn (CR-07-01);
+ * never invent reversibility (CR-07-03).
  */
 export function enrichExecutionIntentFromBinding(input: {
   analysisIntent: ExecutionIntentPayload | null;
   binding: ProjectRepositoryBinding | null;
+  /** Active cycle type id — used to resolve stable repositoryWorkspaceSegment. */
+  activeCycleTypeId?: string | null;
 }): {
   executionIntent: ExecutionIntentPayload | null;
   needsTargetClarification: boolean;
@@ -431,8 +633,6 @@ export function enrichExecutionIntentFromBinding(input: {
   };

   // CORR-PROOF-09 — unsourced affirmative reversibility is never trusted fact
-  // on the Artifact materialization enrich path. Preserve null/unknown only;
-  // never invent "reversible". Provider "reversible"|"irreversible" → null.
   const rawRev = base.reversibilityExpectation;
   const reversibilityExpectation: "unknown" | null =
     rawRev === "unknown" ? "unknown" : null;
@@ -451,7 +651,6 @@ export function enrichExecutionIntentFromBinding(input: {

   const rawRoot = input.binding.pathRoot?.trim() || "";
   const canonicalRoot = rawRoot ? normalizeRepoRelativePath(rawRoot) : null;
-  // Invalid pathRoot on binding → fail closed (clarify), do not invent.
   if (rawRoot && !canonicalRoot) {
     return {
       executionIntent: withCanonicalArtifactMaterializationAction({
@@ -466,23 +665,71 @@ export function enrichExecutionIntentFromBinding(input: {
     };
   }

-  // CR-07-01 — effective scopeIn is authoritative pathRoot only.
-  // MODEL ∩ BINDING = binding bound; Nora must never widen.
-  const effectiveScopeIn: string[] = canonicalRoot ? [canonicalRoot] : [];
+  if (!canonicalRoot) {
+    return {
+      executionIntent: withCanonicalArtifactMaterializationAction({
+        ...base,
+        intentKind: "docs_write",
+        targetRepositoryRef: input.binding.identity,
+        targetPath: null,
+        scopeIn: [],
+        reversibilityExpectation,
+      }),
+      needsTargetClarification: true,
+    };
+  }
+
+  const cycleTypeId = input.activeCycleTypeId?.trim() || "";
+  const cycleDef = cycleTypeId ? getCycleTypeById(cycleTypeId) : undefined;
+  const segment = cycleDef?.repositoryWorkspaceSegment?.trim() || "";
+
+  // New automatic Project workspaces (projects/<key>) use cycle segment routing.
+  // Legacy pathRoots (docs/, sandbox, …) keep prior pathRoot∩target semantics.
+  if (segment && isAutomaticProjectWorkspacePathRoot(canonicalRoot)) {
+    const routed = resolveArtifactTargetUnderCycleWorkspace({
+      projectPathRoot: canonicalRoot,
+      repositoryWorkspaceSegment: segment,
+      artifactFileName: base.artifactFileName,
+      proposedTargetPath: base.targetPath,
+    });
+    if (!routed.ok) {
+      return {
+        executionIntent: withCanonicalArtifactMaterializationAction({
+          ...base,
+          intentKind: "docs_write",
+          targetRepositoryRef: input.binding.identity,
+          targetPath: null,
+          scopeIn: [routed.cycleRoot ?? canonicalRoot],
+          reversibilityExpectation,
+        }),
+        needsTargetClarification: true,
+      };
+    }
+    return {
+      executionIntent: withCanonicalArtifactMaterializationAction({
+        ...base,
+        intentKind: "docs_write",
+        targetRepositoryRef: input.binding.identity,
+        targetPath: routed.targetPath,
+        artifactFileName: routed.artifactFileName,
+        scopeIn: [routed.cycleRoot],
+        reversibilityExpectation,
+      }),
+      needsTargetClarification: false,
+    };
+  }

+  // Legacy binding (or cycle segment unavailable): pathRoot-only clamp.
+  const effectiveScopeIn: string[] = [canonicalRoot];
   const proposedPath = base.targetPath?.trim() || "";
   let targetPath: string | null = null;
   let needsClarification = false;

   if (!proposedPath) {
     needsClarification = true;
-  } else if (!canonicalRoot) {
-    // Binding without usable pathRoot — cannot authorize a write target.
-    needsClarification = true;
   } else {
     const normalizedTarget = normalizeRepoRelativePath(proposedPath);
     if (!normalizedTarget || !isPathWithinRoot(proposedPath, canonicalRoot)) {
-      // Hostile / out-of-bounds — null target, no silent rewrite (CR-07-02).
       needsClarification = true;
       targetPath = null;
     } else {
@@ -538,5 +785,7 @@ export function continuationBlockedMessage(
       return `Continuation Artifact demandée, mais l'évaluation Pilot lifecycle a échoué (fail-closed).${cycleHint} Aucun nouveau CycleInstance créé.`;
     case "incompatible_execution_intent":
       return `Continuation Artifact signalée, mais l'intention d'effet docs_write compatible est absente.${cycleHint} Aucune proposition de matérialisation. Aucun nouveau CycleInstance créé.`;
+    case "workspace_collision_ambiguous":
+      return `Workspace Project déjà présent sans preuve d'appartenance durable — collision ambiguë.${cycleHint} Aucune Proposal exécutable. Aucun nouveau CycleInstance créé.`;
   }
 }
```


### `projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts b/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
index dab3a06c..e360bd30 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
@@ -36,6 +36,7 @@ export const F2_EXECUTION_INTENT_JSON_SCHEMA: Record<string, unknown> = {
     artifactType: NULLABLE_STRING,
     targetRepositoryRef: NULLABLE_STRING,
     targetPath: NULLABLE_STRING,
+    artifactFileName: NULLABLE_STRING,
     scopeIn: STRING_ARRAY,
     scopeOut: STRING_ARRAY,
     expectedOutputs: STRING_ARRAY,
@@ -61,6 +62,7 @@ export const F2_EXECUTION_INTENT_JSON_SCHEMA: Record<string, unknown> = {
     "artifactType",
     "targetRepositoryRef",
     "targetPath",
+    "artifactFileName",
     "scopeIn",
     "scopeOut",
     "expectedOutputs",
@@ -80,6 +82,16 @@ export type ExecutionIntentPayload = {
   artifactType?: string | null;
   targetRepositoryRef?: string | null;
   targetPath?: string | null;
+  /**
+   * Non-authoritative leaf filename candidate (Pilote or Nora).
+   * Server composes exact targetPath under Project+Cycle workspace.
+   */
+  artifactFileName?: string | null;
+  /**
+   * Server-owned CREATE/UPDATE/ASK from repository existence fact.
+   * Never produced by Nora — injected after enrich + managed-repo probe.
+   */
+  artifactWriteMode?: "CREATE" | "UPDATE" | "ASK" | null;
   scopeIn?: string[];
   scopeOut?: string[];
   expectedOutputs?: string[];
@@ -196,6 +208,7 @@ export function validateExecutionIntentPayload(
       artifactType: asNullableString(r.artifactType) ?? null,
       targetRepositoryRef: asNullableString(r.targetRepositoryRef) ?? null,
       targetPath: asNullableString(r.targetPath) ?? null,
+      artifactFileName: asNullableString(r.artifactFileName) ?? null,
       scopeIn: scopeIn ?? [],
       scopeOut: scopeOut ?? [],
       expectedOutputs: expectedOutputs ?? [],
```


### `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index 075ee19b..b6de6112 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -635,7 +635,10 @@ Si le Project a déjà un cycle actif et que la demande porte sur la matérialis
   * requestedOperation (top-level) ET executionIntent.requestedOperation restent génériques ailleurs ; pour CETTE continuation Artifact, les laisser null (préféré) ou exactement cursor.docs_write.apply — JAMAIS une valeur contradictoire (ex. github.pr.merge) ;
   * si des requiredCapabilities sont fournies pour ce chemin → « cap:cursor.docs_write » (le serveur reste autoritaire après acceptation) ;
   * la description naturelle du livrable va dans objective / rephrasedRequest / artifactBrief / contentRequirements — JAMAIS dans artifactMaterializationOperation ;
-  * targetPath / targetRepositoryRef PEUVENT rester null (le serveur utilise Project.repositoryBinding) — ne PAS inventer de chemin ;
+  * targetPath / targetRepositoryRef PEUVENT rester null (le serveur compose sous Project workspace + cycle segment) — ne PAS inventer de chemin repository complet ;
+  * si le Pilote a fourni un filename leaf sûr (ex. note-de-cadrage.md), le reporter dans artifactFileName ;
+  * si aucun filename n'est fourni, proposer un artifactFileName Markdown cohérent avec le livrable/cycle (NON-AUTORITAIRE) ;
+  * ne PAS demander au Pilote de construire un path technique repository complet lorsque workspace Project+cycle est déterminable ;
   * reversibilityExpectation pour cette continuation : null ou unknown seulement — NE PAS affirmer reversible/irreversible sans provenance serveur ;
 - définition seule du livrable (sans effet de matérialisation) → informative, continuationKind=null, artifactMaterializationOperation=null.
 Aucune phrase magique exacte n'autorise seule cette continuation.`;
```


### `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 4e4424e9..df3a15fa 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -1155,17 +1155,42 @@ export async function orchestrateAssistantSend(input: {
     });

     if (continuation.needsTargetClarification) {
+      const hasBinding = Boolean(continuation.repositoryBinding);
+      const hasPathRoot = Boolean(
+        continuation.repositoryBinding?.pathRoot?.trim(),
+      );
+      const reason = continuation.clarificationReason ?? "target_unresolved";
+      const clarificationText =
+        reason === "workspace_collision_ambiguous"
+          ? [
+              "Le workspace Project cible existe déjà sans preuve d'appartenance durable à ce Project.",
+              "Collision ambiguë — aucune Proposal exécutable d'écriture sur ce workspace.",
+              "Clarifiez l'ownership ou choisissez un autre Project avant de continuer.",
+            ]
+          : reason === "artifact_write_mode_ask"
+            ? [
+                "La cible exacte est résolue, mais l'effet fichier (CREATE/UPDATE) est ambigu (ASK).",
+                "Précisez si le livrable doit créer ou mettre à jour le fichier existant.",
+                "Votre décision et la préparation restent fermées tant que CREATE ou UPDATE n'est pas scellé.",
+              ]
+            : [
+                hasPathRoot
+                  ? "Le nom de fichier du livrable n'est pas encore déterminé (ou le chemin proposé sort du workspace Project/cycle / est invalide)."
+                  : "Le chemin cible du livrable n'est pas encore déterminé.",
+                hasPathRoot
+                  ? "Indiquez un filename Markdown sûr (ex. note-de-cadrage.md) — le serveur composera le chemin exact sous le workspace Project et le cycle actif. Un chemin invalide (traversal/absolu) est refusé sans rewrite."
+                  : hasBinding
+                    ? "Précisez le chemin cible dans les bornes du dépôt lié avant de continuer."
+                    : "Le dépôt cible n'est pas encore projeté — configuration serveur requise, ou Project legacy sans binding.",
+                "Votre décision et la préparation de l'action restent fermées tant que la cible n'est pas clarifiée.",
+              ];
       return f2ConversationalSuccess({
         userText: content,
         sessionDbPath: input.sessionDbPath,
         text: [
           presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
           "Le cycle en cours est conservé.",
-          "Le chemin cible du livrable n'est pas encore déterminé.",
-          continuation.repositoryBinding
-            ? "Précisez le chemin cible dans les bornes du dépôt lié avant de continuer."
-            : "Configurez le dépôt lié ou précisez le chemin avant de proposer un effet.",
-          "Votre décision et la préparation de l'action restent fermées tant que la cible n'est pas clarifiée.",
+          ...clarificationText,
           "Rien n'a encore été exécuté.",
         ].join(" "),
         mode: modeResolution.mode as "fixture" | "live",
```


### `projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts b/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
index b0322ea3..15bf14e5 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
@@ -110,6 +110,7 @@ function buildDecisionBasis(input: {
             artifactType: ei.artifactType ?? null,
             targetRepositoryRef: ei.targetRepositoryRef ?? null,
             targetPath: ei.targetPath ?? null,
+            artifactFileName: ei.artifactFileName ?? null,
             scopeIn: ei.scopeIn ?? [],
             scopeOut: ei.scopeOut ?? [],
             expectedOutputs: ei.expectedOutputs ?? [],
@@ -165,6 +166,13 @@ function buildDecisionBasis(input: {
             artifactType: ei.artifactType ?? undefined,
             targetRepositoryRef: ei.targetRepositoryRef ?? undefined,
             targetPath: ei.targetPath ?? undefined,
+            artifactFileName: ei.artifactFileName ?? undefined,
+            artifactWriteMode:
+              ei.artifactWriteMode === "CREATE" ||
+              ei.artifactWriteMode === "UPDATE" ||
+              ei.artifactWriteMode === "ASK"
+                ? ei.artifactWriteMode
+                : undefined,
             scopeIn: ei.scopeIn ? [...ei.scopeIn] : undefined,
             scopeOut: ei.scopeOut ? [...ei.scopeOut] : undefined,
             expectedOutputs: ei.expectedOutputs
```


### `projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
index 328be8b5..c9c4c730 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
@@ -29,6 +29,65 @@ import {
   PROPOSAL_SUBJECT_PURSUE_REF,
 } from "../w2/proposalSubjectOptions";
 import { BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS } from "./boundedDocsWriteM3ResolutionProfile";
+import { probeManagedRepoRelativePathExists } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+
+/**
+ * CR-PWR-02 TOCTOU — sealed CREATE must not overwrite a file that appeared;
+ * sealed UPDATE must not silently create a file that disappeared;
+ * ASK never prepares.
+ */
+export function revalidateSealedArtifactWriteMode(input: {
+  artifactWriteMode: "CREATE" | "UPDATE" | "ASK" | null | undefined;
+  targetPath: string | null | undefined;
+  targetRepositoryRef: string | null | undefined;
+  managedRepoRootBase?: string | null;
+}):
+  | { ok: true; targetExists: boolean | null }
+  | { ok: false; code: string; message: string } {
+  const mode = input.artifactWriteMode ?? null;
+  if (mode === "ASK") {
+    return {
+      ok: false,
+      code: "ARTIFACT_WRITE_MODE_ASK",
+      message:
+        "Effet fichier ASK — PREPARE refusé jusqu'à clarification CREATE/UPDATE.",
+    };
+  }
+  if (mode !== "CREATE" && mode !== "UPDATE") {
+    return { ok: true, targetExists: null };
+  }
+  const targetPath = input.targetPath?.trim() || "";
+  const identity = input.targetRepositoryRef?.trim() || "";
+  if (!targetPath || !identity) {
+    return {
+      ok: false,
+      code: "TARGET_UNRESOLVED",
+      message: "targetPath / repositoryRef absents pour revalidation WRITE mode.",
+    };
+  }
+  const targetExists = probeManagedRepoRelativePathExists({
+    identity,
+    repoRelativePath: targetPath,
+    managedRepoRootBase: input.managedRepoRootBase,
+  });
+  if (mode === "CREATE" && targetExists === true) {
+    return {
+      ok: false,
+      code: "ARTIFACT_WRITE_MODE_STALE_CREATE",
+      message:
+        "CREATE scellé obsolète — le fichier cible est apparu depuis la Proposal. Requalification requise.",
+    };
+  }
+  if (mode === "UPDATE" && targetExists === false) {
+    return {
+      ok: false,
+      code: "ARTIFACT_WRITE_MODE_STALE_UPDATE",
+      message:
+        "UPDATE scellé obsolète — le fichier cible a disparu depuis la Proposal. Requalification requise.",
+    };
+  }
+  return { ok: true, targetExists };
+}

 /**
  * EC.evidenceRequirements must be OA identifiers (`prefix:value`).
@@ -164,6 +223,10 @@ function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
       inputs.scopeOut = eb.scopeOut ?? [];
       inputs.createOrModify = true;
       inputs.noDelete = true;
+      if (eb.artifactWriteMode === "CREATE" || eb.artifactWriteMode === "UPDATE") {
+        inputs.artifactWriteMode = eb.artifactWriteMode;
+      }
+      if (eb.artifactFileName) inputs.artifactFileName = eb.artifactFileName;
       if (eb.artifactType) inputs.artifactType = eb.artifactType;
       if (eb.artifactBrief) inputs.artifactBrief = eb.artifactBrief;
       if (eb.contentRequirements)
@@ -357,6 +420,21 @@ export async function prepareM3FromDecision(input: {
     };
   }

+  const eb = basis.executionBasis;
+  const docsWriteIntent =
+    eb.intentKind === "docs_write" ||
+    eb.requestedOperation?.trim() === "cursor.docs_write.apply";
+  if (docsWriteIntent) {
+    const writeCheck = revalidateSealedArtifactWriteMode({
+      artifactWriteMode: eb.artifactWriteMode,
+      targetPath: eb.targetPath,
+      targetRepositoryRef: eb.targetRepositoryRef,
+    });
+    if (!writeCheck.ok) {
+      return writeCheck;
+    }
+  }
+
   const fields = fieldsFromBasis(basis, decision.decisionId);
   const issuedAt = input.deps.nowIso();
   const authority = registerLocalPiloteAuthority({
```


### `projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
index e3fbaa33..9bb2c46d 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
@@ -463,6 +463,13 @@ export async function decideTrajectory(
           artifactType: sealed!.artifactType ?? undefined,
           targetRepositoryRef: sealed!.targetRepositoryRef ?? undefined,
           targetPath: sealed!.targetPath ?? undefined,
+          artifactFileName: sealed!.artifactFileName ?? undefined,
+          artifactWriteMode:
+            sealed!.artifactWriteMode === "CREATE" ||
+            sealed!.artifactWriteMode === "UPDATE" ||
+            sealed!.artifactWriteMode === "ASK"
+              ? sealed!.artifactWriteMode
+              : undefined,
           scopeIn: [...sealed!.scopeIn],
           scopeOut: [...sealed!.scopeOut],
           expectedOutputs: [...sealed!.expectedOutputs],
```


### `projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts
index ae56b2f1..6cb15fa5 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts
@@ -33,6 +33,16 @@ export type SealedProposalExecutionBasis = {
   readonly artifactType: string | null;
   readonly targetRepositoryRef: string | null;
   readonly targetPath: string | null;
+  /** Non-authoritative leaf filename candidate sealed for HD presentation. */
+  readonly artifactFileName: string | null;
+  /**
+   * Server-derived CREATE/UPDATE when existence was resolved.
+   * ASK = ambiguity sealed — Proposal not executable until clarified.
+   * null = legacy / unresolved (treat as non-executable for docs_write materialization).
+   */
+  readonly artifactWriteMode: "CREATE" | "UPDATE" | "ASK" | null;
+  readonly projectWorkspaceRoot: string | null;
+  readonly cycleWorkspaceRoot: string | null;
   readonly scopeIn: readonly string[];
   readonly scopeOut: readonly string[];
   readonly expectedOutputs: readonly string[];
@@ -62,6 +72,13 @@ function asStringArray(value: readonly string[] | null | undefined): string[] {
   return value ? [...value] : [];
 }

+function sealArtifactWriteMode(
+  raw: unknown,
+): "CREATE" | "UPDATE" | "ASK" | null {
+  if (raw === "CREATE" || raw === "UPDATE" || raw === "ASK") return raw;
+  return null;
+}
+
 /**
  * Canonical sealed execution basis — every authoritative field is materialised
  * with deterministic null/empty defaults for digest stability.
@@ -70,6 +87,21 @@ export function sealProposalExecutionBasis(
   proposal: ProposalDto,
 ): SealedProposalExecutionBasis {
   const ei: ExecutionIntentPayload | null | undefined = proposal.executionIntent;
+  const targetPath = ei?.targetPath ?? null;
+  const artifactFileName =
+    ei?.artifactFileName?.trim() ||
+    (targetPath ? targetPath.split("/").pop()?.trim() || null : null);
+  const scopeIn = asStringArray(ei?.scopeIn);
+  const cycleWorkspaceRoot = scopeIn[0]?.trim() || null;
+  let projectWorkspaceRoot: string | null = null;
+  if (cycleWorkspaceRoot && cycleWorkspaceRoot.includes("/")) {
+    const parts = cycleWorkspaceRoot.split("/");
+    if (parts.length >= 2 && parts[0] === "projects") {
+      projectWorkspaceRoot = parts.slice(0, 2).join("/");
+    } else if (parts.length >= 2) {
+      projectWorkspaceRoot = parts.slice(0, -1).join("/");
+    }
+  }
   return {
     objective: proposal.objective,
     scope: proposal.scope,
@@ -85,8 +117,12 @@ export function sealProposalExecutionBasis(
     intentKind: ei?.intentKind ?? null,
     artifactType: ei?.artifactType ?? null,
     targetRepositoryRef: ei?.targetRepositoryRef ?? null,
-    targetPath: ei?.targetPath ?? null,
-    scopeIn: asStringArray(ei?.scopeIn),
+    targetPath,
+    artifactFileName,
+    artifactWriteMode: sealArtifactWriteMode(ei?.artifactWriteMode),
+    projectWorkspaceRoot,
+    cycleWorkspaceRoot,
+    scopeIn,
     scopeOut: asStringArray(ei?.scopeOut),
     expectedOutputs: asStringArray(ei?.expectedOutputs),
     requiredCapabilities: asStringArray(ei?.requiredCapabilities),
@@ -124,6 +160,10 @@ export function computeProposalSubjectDigest(
     artifactType: sealed.artifactType,
     targetRepositoryRef: sealed.targetRepositoryRef,
     targetPath: sealed.targetPath,
+    artifactFileName: sealed.artifactFileName,
+    artifactWriteMode: sealed.artifactWriteMode,
+    projectWorkspaceRoot: sealed.projectWorkspaceRoot,
+    cycleWorkspaceRoot: sealed.cycleWorkspaceRoot,
     scopeIn: [...sealed.scopeIn],
     scopeOut: [...sealed.scopeOut],
     expectedOutputs: [...sealed.expectedOutputs],
```


### `projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
index 8b05d2de..61380102 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
@@ -43,10 +43,14 @@ function step(

 function subjectSummary(sealed: SealedProposalExecutionBasis): string {
   const path = sealed.targetPath == null ? null : sealed.targetPath.trim() || null;
+  const fileName = sealed.artifactFileName?.trim() || null;
+  const writeMode = sealed.artifactWriteMode;
   const op = sealed.requestedOperation.trim() || null;
   const parts = [
     sealed.objective.trim(),
     path ? `cible ${path}` : null,
+    fileName && !path ? `fichier ${fileName}` : null,
+    writeMode ? `mode ${writeMode}` : null,
     op ? `effet ${op}` : null,
   ].filter((p): p is string => Boolean(p));
   return parts.join(" · ");
@@ -105,20 +109,49 @@ export function deriveProposalSubjectOptions(
   const pathNote = sealed.targetPath
     ? `Chemin scellé: ${sealed.targetPath}`
     : "Aucun targetPath scellé";
+  const fileNote = sealed.artifactFileName
+    ? `Filename: ${sealed.artifactFileName}`
+    : "Filename: (dérivé du targetPath si présent)";
+  const writeNote =
+    sealed.artifactWriteMode === "CREATE"
+      ? "Effet fichier: CREATE (cible absente)"
+      : sealed.artifactWriteMode === "UPDATE"
+        ? "Effet fichier: UPDATE — le fichier existe déjà (pas d'overwrite silencieux)"
+        : sealed.artifactWriteMode === "ASK"
+          ? "Effet fichier: ASK — ambiguïté d'existence/intention ; Proposal non exécutable"
+          : "Effet fichier: à confirmer à la préparation (CREATE si absent, UPDATE si existant)";
+  const workspaceNotes = [
+    sealed.projectWorkspaceRoot
+      ? `Workspace projet: ${sealed.projectWorkspaceRoot}/`
+      : null,
+    sealed.cycleWorkspaceRoot
+      ? `Workspace cycle: ${sealed.cycleWorkspaceRoot}/`
+      : null,
+  ].filter((n): n is string => Boolean(n));
   const opNote = `Opération scellée: ${sealed.requestedOperation}`;
+  const askBlocksPursue = sealed.artifactWriteMode === "ASK";

   return [
     {
       kind: "OPTION",
       optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
       label: "Poursuivre le sujet proposé",
-      intent: `Décider sur la Proposal ${proposalId} — ${summary}. ${pathNote}. ${opNote}.`,
+      intent: askBlocksPursue
+        ? `Sujet ${proposalId} non exécutable — effet fichier ASK. ${pathNote}. ${fileNote}. ${writeNote}.`
+        : `Décider sur la Proposal ${proposalId} — ${summary}. ${pathNote}. ${fileNote}. ${writeNote}. ${opNote}.`,
       impacts: [
         "HumanDecision liée à cette Proposal",
-        "DecisionBasis conserve targetPath / requestedOperation scellés",
+        "DecisionBasis conserve targetPath / requestedOperation / artifactWriteMode scellés",
         "Pas de promotion ProjectTrajectory automatique",
+        ...workspaceNotes,
+        writeNote,
+        ...(askBlocksPursue
+          ? ["PREPARE / exécution fermés tant que ASK"]
+          : []),
       ],
-      reservations,
+      reservations: askBlocksPursue
+        ? ["ARTIFACT_WRITE_MODE_ASK", ...reservations]
+        : reservations,
       steps: pursueSteps(sealed),
     },
     {
@@ -157,11 +190,14 @@ export function deriveProposalSubjectRecommendation(
   const { sealed, proposalId } = inputs;
   const summary = subjectSummary(sealed);

-  if (sealed.reservations.length > 0) {
+  if (sealed.reservations.length > 0 || sealed.artifactWriteMode === "ASK") {
     return {
       label: "RECOMMANDATION — PAS UNE DÉCISION",
       recommendedOptionRef: PROPOSAL_SUBJECT_AMEND_REF,
-      rationale: `Réserves explicites sur la Proposal ${proposalId} (${sealed.reservations.length}) — amender ou clarifier avant de poursuivre « ${summary} ».`,
+      rationale:
+        sealed.artifactWriteMode === "ASK"
+          ? `Effet fichier ASK sur la Proposal ${proposalId} — clarifier CREATE ou UPDATE avant de poursuivre « ${summary} ».`
+          : `Réserves explicites sur la Proposal ${proposalId} (${sealed.reservations.length}) — amender ou clarifier avant de poursuivre « ${summary} ».`,
       isHumanDecision: false,
       promotesTrajectory: false,
       ckcAttribution: null,
```


### `projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
index 1c8710a5..17d30c77 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
@@ -90,6 +90,11 @@ export type CycleTypeDefinition = {
   ckc: CycleTypeCkcMapping;
   /** Controlled aliases (1→1). Empty in D1 — no initial aliases. */
   aliases: readonly string[];
+  /**
+   * Stable repository workspace segment under Project pathRoot.
+   * PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01 — NOT derived from displayOrder.
+   */
+  repositoryWorkspaceSegment: string;
 };

 export type CycleTypeCatalog = {
@@ -148,6 +153,7 @@ const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
     methodReference: methodRef("§4.1"),
     ckc: Object.freeze(detailedCkc(CKC_PILOT_CADRAGE_PATH)),
     aliases: Object.freeze([] as string[]),
+    repositoryWorkspaceSegment: "01-cadrage",
   }),
   Object.freeze({
     cycleTypeId: "cyc:functional-design",
@@ -160,6 +166,7 @@ const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
     methodReference: methodRef("§4.2"),
     ckc: Object.freeze(detailedCkc(CKC_PILOT_CONCEPTION_PATH)),
     aliases: Object.freeze([] as string[]),
+    repositoryWorkspaceSegment: "02-conception-fonctionnelle",
   }),
   Object.freeze({
     cycleTypeId: "cyc:functional-architecture",
@@ -172,6 +179,7 @@ const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
     methodReference: methodRef("§4.3"),
     ckc: Object.freeze(syntheticCkc()),
     aliases: Object.freeze([] as string[]),
+    repositoryWorkspaceSegment: "03-architecture-fonctionnelle",
   }),
   Object.freeze({
     cycleTypeId: "cyc:ux-ui",
@@ -184,6 +192,7 @@ const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
     methodReference: methodRef("§4.4"),
     ckc: Object.freeze(syntheticCkc()),
     aliases: Object.freeze([] as string[]),
+    repositoryWorkspaceSegment: "04-ux-ui",
   }),
   Object.freeze({
     cycleTypeId: "cyc:backlog",
@@ -196,6 +205,7 @@ const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
     methodReference: methodRef("§4.5"),
     ckc: Object.freeze(syntheticCkc()),
     aliases: Object.freeze([] as string[]),
+    repositoryWorkspaceSegment: "05-backlog-user-stories",
   }),
   Object.freeze({
     cycleTypeId: "cyc:technical-architecture",
@@ -208,6 +218,7 @@ const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
     methodReference: methodRef("§4.6"),
     ckc: Object.freeze(detailedCkc(CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH)),
     aliases: Object.freeze([] as string[]),
+    repositoryWorkspaceSegment: "06-architecture-technique",
   }),
   Object.freeze({
     cycleTypeId: "cyc:integration-devops",
@@ -220,6 +231,7 @@ const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
     methodReference: methodRef("§4.7"),
     ckc: Object.freeze(syntheticCkc()),
     aliases: Object.freeze([] as string[]),
+    repositoryWorkspaceSegment: "07-integration-devops",
   }),
   Object.freeze({
     cycleTypeId: "cyc:delivery",
@@ -232,6 +244,7 @@ const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
     methodReference: methodRef("§4.8"),
     ckc: Object.freeze(syntheticCkc()),
     aliases: Object.freeze([] as string[]),
+    repositoryWorkspaceSegment: "08-delivery-implementation",
   }),
   Object.freeze({
     cycleTypeId: "cyc:qa-validation",
@@ -244,6 +257,7 @@ const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
     methodReference: methodRef("§4.9"),
     ckc: Object.freeze(detailedCkc(CKC_PILOT_QA_VALIDATION_PATH)),
     aliases: Object.freeze([] as string[]),
+    repositoryWorkspaceSegment: "09-qa-validation",
   }),
   Object.freeze({
     cycleTypeId: "cyc:security",
@@ -256,6 +270,7 @@ const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
     methodReference: methodRef("§4.10"),
     ckc: Object.freeze(syntheticCkc()),
     aliases: Object.freeze([] as string[]),
+    repositoryWorkspaceSegment: "10-securite-rssi",
   }),
   Object.freeze({
     cycleTypeId: "cyc:release",
@@ -268,6 +283,7 @@ const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
     methodReference: methodRef("§4.11"),
     ckc: Object.freeze(syntheticCkc()),
     aliases: Object.freeze([] as string[]),
+    repositoryWorkspaceSegment: "11-deploiement-release",
   }),
   Object.freeze({
     cycleTypeId: "cyc:observability",
@@ -280,6 +296,7 @@ const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
     methodReference: methodRef("§4.12"),
     ckc: Object.freeze(syntheticCkc()),
     aliases: Object.freeze([] as string[]),
+    repositoryWorkspaceSegment: "12-observabilite-run-readiness",
   }),
   Object.freeze({
     cycleTypeId: "cyc:pr-readiness",
@@ -292,6 +309,7 @@ const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
     methodReference: methodRef("§4.13"),
     ckc: Object.freeze(syntheticCkc()),
     aliases: Object.freeze([] as string[]),
+    repositoryWorkspaceSegment: "13-pr-readiness",
   }),
   Object.freeze({
     cycleTypeId: "cyc:post-merge",
@@ -304,6 +322,7 @@ const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
     methodReference: methodRef("§4.14"),
     ckc: Object.freeze(syntheticCkc()),
     aliases: Object.freeze([] as string[]),
+    repositoryWorkspaceSegment: "14-post-merge",
   }),
   Object.freeze({
     cycleTypeId: CAPITALIZATION_CYCLE_TYPE_ID,
@@ -316,6 +335,7 @@ const CYCLE_TYPE_ENTRIES: readonly CycleTypeDefinition[] = Object.freeze([
     methodReference: methodRef("§4.15"),
     ckc: Object.freeze(syntheticCkc()),
     aliases: Object.freeze([] as string[]),
+    repositoryWorkspaceSegment: "15-capitalisation-rex",
   }),
 ]) as readonly CycleTypeDefinition[];

@@ -409,6 +429,7 @@ export function validateCycleTypeCatalog(
   const keys = new Set<string>();
   const numbers = new Set<number>();
   const orders = new Set<number>();
+  const workspaceSegments = new Set<string>();

   for (const entry of entries) {
     if (!isOaIdentifier(entry.cycleTypeId)) {
@@ -439,6 +460,31 @@ export function validateCycleTypeCatalog(
     }
     keys.add(entry.canonicalKey);

+    const seg = entry.repositoryWorkspaceSegment?.trim() ?? "";
+    if (!seg) {
+      issues.push({
+        code: "WORKSPACE_SEGMENT_EMPTY",
+        message: `missing repositoryWorkspaceSegment: ${entry.cycleTypeId}`,
+      });
+    } else if (
+      seg.includes("/") ||
+      seg.includes("\\") ||
+      seg.includes("..") ||
+      !/^[a-z0-9][a-z0-9._-]{0,80}$/i.test(seg)
+    ) {
+      issues.push({
+        code: "WORKSPACE_SEGMENT_INVALID",
+        message: `invalid repositoryWorkspaceSegment for ${entry.cycleTypeId}: ${seg}`,
+      });
+    } else if (workspaceSegments.has(seg)) {
+      issues.push({
+        code: "WORKSPACE_SEGMENT_DUPLICATE",
+        message: `duplicate repositoryWorkspaceSegment: ${seg}`,
+      });
+    } else {
+      workspaceSegments.add(seg);
+    }
+
     if (numbers.has(entry.methodCycleNumber)) {
       issues.push({
         code: "METHOD_NUMBER_DUPLICATE",
```


### `projects/sfia-studio/app/lib/oa/decision/domain/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/decision/domain/types.ts b/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
index c6f1d1d8..2b4ff448 100644
--- a/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
@@ -168,6 +168,10 @@ export type DecisionBasis = {
     artifactType?: string;
     targetRepositoryRef?: string;
     targetPath?: string;
+    /** Server-sealed leaf filename (presentation + digest continuity). */
+    artifactFileName?: string;
+    /** Server-sealed CREATE/UPDATE from repository existence fact at Proposal. */
+    artifactWriteMode?: "CREATE" | "UPDATE" | "ASK";
     scopeIn?: string[];
     scopeOut?: string[];
     expectedOutputs?: string[];
```


### `projects/sfia-studio/app/lib/oa/project/application/createProject.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/application/createProject.ts b/projects/sfia-studio/app/lib/oa/project/application/createProject.ts
index 8f307e45..24dd6807 100644
--- a/projects/sfia-studio/app/lib/oa/project/application/createProject.ts
+++ b/projects/sfia-studio/app/lib/oa/project/application/createProject.ts
@@ -16,6 +16,11 @@ import type {
   LivingProjectState,
   Project,
 } from "../domain/types";
+import {
+  composeProjectWorkspacePathRoot,
+  deriveProjectWorkspaceKeyFromTitle,
+} from "../domain/projectWorkspaceKey";
+import { resolveServerOwnedRepositoryConfig } from "../domain/serverOwnedRepositoryConfig";
 import type { LivingProjectStateRepositoryPort } from "../ports/livingProjectStateRepositoryPort";
 import type { ProjectAuditJournalPort } from "../ports/projectAuditJournalPort";
 import type { ProjectRepositoryPort } from "../ports/projectRepositoryPort";
@@ -209,6 +214,23 @@ export class CreateProject {
         uiOwnership: false,
       };

+      // Durable workspace key — derived once; never recomputed on title rename.
+      const projectWorkspaceKey = deriveProjectWorkspaceKeyFromTitle(
+        request.title,
+      );
+      const projectPathRoot =
+        composeProjectWorkspacePathRoot(projectWorkspaceKey);
+      const serverRepo = resolveServerOwnedRepositoryConfig(process.env);
+      const repositoryBinding = serverRepo
+        ? {
+            provider: serverRepo.provider,
+            identity: serverRepo.identity,
+            remoteUrl: serverRepo.remoteUrl,
+            defaultBranch: serverRepo.defaultBranch,
+            pathRoot: projectPathRoot,
+          }
+        : undefined;
+
       const project: Project = {
         schemaVersion: "0.1.0-oa",
         projectId: request.projectId,
@@ -216,6 +238,8 @@ export class CreateProject {
         status: "active",
         currentLpsVersionId: lpsVersionId,
         doctrinePackageRef: structuredClone(doctrinePackageRef),
+        projectWorkspaceKey,
+        ...(repositoryBinding ? { repositoryBinding } : {}),
         createdAt: timestamp,
         updatedAt: timestamp,
         createdBy: structuredClone(request.createdBy),
```


### `projects/sfia-studio/app/lib/oa/project/domain/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/domain/types.ts b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
index ef28417f..3e6c5323 100644
--- a/projects/sfia-studio/app/lib/oa/project/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
@@ -50,7 +50,11 @@ export type ProjectRepositoryBinding = {
   defaultBranch: string;
   /** Optional pin; otherwise resolved at PREPARE/Gate D. */
   baseSha?: string;
-  /** Relative allowlist root (e.g. docs/). */
+  /**
+   * Relative allowlist root.
+   * New Projects: `projects/<stable-workspace-key>` (server-owned).
+   * Legacy Projects may retain historical roots (e.g. docs/).
+   */
   pathRoot?: string;
 };

@@ -62,7 +66,15 @@ export type Project = {
   currentLpsVersionId?: string;
   doctrinePackageRef?: DoctrinePackageRef;
   activeCycleInstanceId?: string;
-  /** Explicit Product target repository — never ambient sfia-workspace. */
+  /**
+   * Durable Project workspace key (PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01).
+   * Set once at create; title rename must NOT recompute.
+   */
+  projectWorkspaceKey?: string;
+  /**
+   * Explicit Product target repository — never ambient sfia-workspace.
+   * For new Projects this is an internal server-owned projection (no manual UI).
+   */
   repositoryBinding?: ProjectRepositoryBinding;
   createdAt: string;
   updatedAt?: string;
```


### `projects/sfia-studio/app/lib/oa/project/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/index.ts b/projects/sfia-studio/app/lib/oa/project/index.ts
index fbe35858..26b91fa0 100644
--- a/projects/sfia-studio/app/lib/oa/project/index.ts
+++ b/projects/sfia-studio/app/lib/oa/project/index.ts
@@ -9,6 +9,14 @@
 export * from "./domain/types";
 export * from "./domain/errors";
 export * from "./domain/invariants";
+export * from "./domain/projectWorkspaceKey";
+export * from "./domain/serverOwnedRepositoryConfig";
+export * from "./domain/artifactTargetRouting";
+export {
+  probeManagedRepoRelativePathExists,
+  listManagedRepoPathsUnderRoot,
+  ensureManagedRepoCloneSkeleton,
+} from "./infrastructure/managedRepoPathFacts";

 export * from "./ports/projectRepositoryPort";
 export * from "./ports/livingProjectStateRepositoryPort";
```


### `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index acf9ffe9..2c8f0097 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -59,16 +59,37 @@ function extractSingleRepoRelativeMdPath(probe: string): string | null {
   return path;
 }

+/** Exactly one safe Markdown leaf filename (no slash); else null. */
+function extractSingleMdFileNameLeaf(probe: string): string | null {
+  const re =
+    /(?:^|[\s`"'(])([A-Za-z0-9][A-Za-z0-9._-]{0,120}\.md)(?=$|[\s`"'),.])/g;
+  const hits: string[] = [];
+  let m: RegExpExecArray | null;
+  while ((m = re.exec(probe)) !== null) {
+    // Skip if the hit is part of a path (preceded by /)
+    const idx = m.index ?? 0;
+    if (idx > 0 && probe[idx] === "/") continue;
+    const before = probe.slice(Math.max(0, idx - 1), idx + 1);
+    if (before.includes("/")) continue;
+    hits.push(m[1]!);
+  }
+  // Filter out hits that appear as path suffixes already counted elsewhere
+  const leaves = hits.filter((h) => !probe.includes(`/${h}`));
+  if (leaves.length !== 1) return null;
+  return leaves[0]!;
+}
+
 /**
  * Narrow natural Pilot contract for artifact materialization (no synonym engine).
  * Requires ALL of:
  * 1) materialize wording family
- * 2) exactly one repo-relative .md path
+ * 2) exactly one repo-relative .md path OR one safe .md leaf OR framing note cue
  * 3) explicit proposal / decision preparation
  * 4) explicit no-execution guard
  */
 function matchNaturalArtifactMaterialization(probe: string): {
-  targetPath: string;
+  targetPath: string | null;
+  artifactFileName: string;
   artifactBrief: string;
   contentRequirement: string;
 } | null {
@@ -83,11 +104,25 @@ function matchNaturalArtifactMaterialization(probe: string): {
   if (!hasProposalOrDecision || !hasNoExecution) return null;

   const targetPath = extractSingleRepoRelativeMdPath(probe);
-  if (!targetPath) return null;
+  const leafFromPath = targetPath
+    ? targetPath.split("/").pop() || null
+    : null;
+  const bareLeaf = extractSingleMdFileNameLeaf(probe);
+  let artifactFileName = leafFromPath || bareLeaf || null;
+  // Framing note cue without explicit filename — Nora-like non-authoritative candidate
+  if (
+    !artifactFileName &&
+    /\bnote\b/.test(normalized) &&
+    /\bcadrage\b/.test(normalized)
+  ) {
+    artifactFileName = "note-de-cadrage.md";
+  }
+  if (!artifactFileName) return null;

   const brief = probe.replace(/\s+/g, " ").trim().slice(0, 240);
   return {
     targetPath,
+    artifactFileName,
     artifactBrief: brief,
     contentRequirement: brief,
   };
@@ -95,15 +130,19 @@ function matchNaturalArtifactMaterialization(probe: string): {

 /** Shared F2 artifact-materialization analysis payload (sentinel + natural). */
 function buildArtifactMaterializationAnalysis(input: {
-  targetPath: string;
+  targetPath?: string | null;
+  artifactFileName?: string | null;
   challengeResponseAssessment?: FakeChallengeAssessment;
   artifactBrief?: string;
   contentRequirements?: string[];
 }): Record<string, unknown> {
-  const targetPath = input.targetPath;
-  const parentSlash = targetPath.lastIndexOf("/");
+  const targetPath = input.targetPath ?? null;
+  const artifactFileName =
+    input.artifactFileName?.trim() ||
+    (targetPath ? targetPath.split("/").pop() || null : null);
+  const parentSlash = targetPath ? targetPath.lastIndexOf("/") : -1;
   const scopeIn =
-    parentSlash > 0 ? [targetPath.slice(0, parentSlash + 1)] : ["docs/"];
+    parentSlash > 0 ? [targetPath!.slice(0, parentSlash + 1)] : [];
   return {
     intentClass: "execution_request",
     candidateCycleTypeId: "cyc:framing",
@@ -136,9 +175,10 @@ function buildArtifactMaterializationAnalysis(input: {
       artifactType: "deliverable_document",
       targetRepositoryRef: null,
       targetPath,
+      artifactFileName,
       scopeIn,
       scopeOut: [],
-      expectedOutputs: [targetPath],
+      expectedOutputs: targetPath ? [targetPath] : artifactFileName ? [artifactFileName] : [],
       requiredCapabilities: ["cap:cursor.docs_write"],
       validationExpectations: [],
       evidenceRequirements: [],
@@ -1128,6 +1168,7 @@ export class FakeConversationProvider implements ConversationProvider {
           this.callCount,
           buildArtifactMaterializationAnalysis({
             targetPath: naturalMaterialization.targetPath,
+            artifactFileName: naturalMaterialization.artifactFileName,
             artifactBrief: naturalMaterialization.artifactBrief,
             contentRequirements: [naturalMaterialization.contentRequirement],
           }),
```


### `projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
index 93e90ab3..8e404b34 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
@@ -17,6 +17,8 @@ import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constant
 import {
   MemoryProjectAuditJournal,
   createSqliteProductProjectServices,
+  describeServerOwnedRepositoryConfigGap,
+  resolveServerOwnedRepositoryConfig,
   type LivingProjectState,
   type Project,
   type ProjectServices,
@@ -282,6 +284,7 @@ function buildProjection(
       ckcResolutionRef: lps.ckcResolutionRef ?? null,
     }),
     repositoryBinding: projectRepositoryBindingProjection(project),
+    projectWorkspaceKey: project.projectWorkspaceKey?.trim() || null,
     localMode: true,
     iam: "NOT_SELECTED",
     productPersistence: "SQLITE_OA_PRODUCT_STORE",
@@ -346,6 +349,33 @@ class LocalProjectFacadeImpl implements LocalProjectFacade {
       });
     }

+    // CR-PWR-04 — Product Create authoritative boundary: server-owned repository
+    // config is a precondition. Fail closed BEFORE any Project/LPS persistence.
+    // Low-level OA CreateProject remains available for legacy/fixture reload.
+    const serverRepo = resolveServerOwnedRepositoryConfig(process.env);
+    if (!serverRepo) {
+      const configError = projectError(
+        "PROJECT_CREATION_FAILED",
+        describeServerOwnedRepositoryConfigGap(process.env),
+        { projectDetailCode: "PROJECT_INVALID" },
+      );
+      auditFailed =
+        !this.appendAudit({
+          event: "LOCAL_PROJECT_CREATION_FAILED",
+          timestamp,
+          correlationId,
+          idempotencyKey: command.idempotencyKey ?? "missing",
+          projectId: requestedProjectId,
+          result: "FAILED",
+          errorCode: configError.code,
+        }) || auditFailed;
+      return Object.freeze({
+        ok: false,
+        error: configError,
+        auditStatus: this.auditStatus(auditFailed),
+      });
+    }
+
     const result = await this.projects.createProject.execute({
       projectId: requestedProjectId,
       title: command.name,
```


### `projects/sfia-studio/app/lib/vertical-slice-core/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-core/types.ts b/projects/sfia-studio/app/lib/vertical-slice-core/types.ts
index 30d9f409..353cda27 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-core/types.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-core/types.ts
@@ -55,6 +55,11 @@ export interface LocalProjectCreationView {
    * null = honestly unbound; never invent a sample.
    */
   readonly repositoryBinding: ProjectRepositoryBinding | null;
+  /**
+   * Durable Project workspace key (PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01).
+   * Set once at create; never recomputed from title rename.
+   */
+  readonly projectWorkspaceKey: string | null;
   readonly localMode: true;
   readonly iam: "NOT_SELECTED";
   readonly productPersistence: "SQLITE_OA_PRODUCT_STORE";
```


### `projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
index 488e37aa..5af395c2 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
@@ -77,6 +77,7 @@ export function toRuntimeProjectState(
     localMode: true,
     source: "REAL_LOCAL_CORE",
     fixture: false,
+    projectWorkspaceKey: view.projectWorkspaceKey ?? null,
     repositoryBinding: binding
       ? Object.freeze({
           provider: binding.provider,
```


### `projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
index fc84a352..c7990160 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
@@ -62,6 +62,8 @@ export interface RuntimeProjectState {
     readonly pathRoot?: string;
     readonly baseSha?: string;
   } | null;
+  /** Durable Project workspace key — null for legacy / unbound. */
+  readonly projectWorkspaceKey?: string | null;
 }

 export interface RuntimeErrorDto {
```


### `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index a8331fd5..948173a7 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,6 +4,7 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
+| **Timestamp maintenance PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01** | 2026-09-19 — **PRODUCT PROJECT WORKSPACE & CYCLE-AWARE ARTIFACT ROUTING** · Cycle **8** · Delivery / implémentation · EVOL · CRITICAL · Macro **PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01** · **SAME MACRO / NO MICRO-CYCLE** · Morris D-PC-09 **CONSUMED** · baseline `origin/main` `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` · branche `delivery/sfia-studio-project-workspace-artifact-routing-01` · OBS-PJ-CLOUD-01 addressed via full capability (auto Project workspace + cycle segment + server-owned binding + F2/EC/docs_write) · état = **implementation candidate corrected (CR-PWR-01…04) + DETERMINISTIC PROOF PASS (if tests green) + ChatGPT Critical Review PENDING + REAL reproof gate PENDING** · **ZERO OpenAI LIVE / ZERO Cursor REAL** this pass · project commit/push/PR **NONE this pass** · Review Handoff L3 **AUTHORIZED** · runtime v3 = **NON ADOPTED** · **≠** REAL PROVEN · **≠** Product Completion COMPLETE · **≠** Product Journey READY · next same-macro = Morris GO bounded REAL reproof after ChatGPT PASS |
 | **Timestamp maintenance PRODUCT-JOURNEY-CLAIM-EVIDENCE-COMPLETION-01** | 2026-09-18 19:05:00 CEST (+0200) — **PRODUCT JOURNEY CLAIM EVIDENCE COMPLETION — PROJECT GIT INTEGRATION** · EVOL · CRITICAL · Macro **PRODUCT-JOURNEY-CLAIM-EVIDENCE-COMPLETION-01** · **SAME MACRO / NO MICRO-CYCLE** · Morris GO **PROJECT GIT INTEGRATION — AUTHORIZED** **CONSUMED** · baseline `origin/main` `9c6ac90974113044330284dd110108287ba2319e` · branche `qa/sfia-studio-product-journey-claim-evidence-completion-01` · CR-CEC-01/02/03 **CLOSED** · ChatGPT Critical Review **PASS** (handoff `cdde19b43ab1e2bb8d1348d67c8e0df9d569acf3`) · historical CE `evidence-completion-v1` **pass IMMUTABLE** · successor CE `evidence-completion-v2` **pass** · Product **SUCCESS** · LPS v29 · Trajectory v4 unchanged · Attempts **3→3** · **ZERO NEW CURSOR REAL** · runtime v3 = **NON ADOPTED** · repository lifecycle = **PROJECT GIT INTEGRATION / PR PENDING** · commit/push/PR **AUTHORIZED** · merge **NOT AUTHORIZED / DISTINCT MORRIS GATE** · **≠** Product Journey READY/COMPLETE · **≠** integrated on main · **≠** post-merge verified · **≠** new REAL proof · next = PR CI / Morris merge decision |
 | **Timestamp maintenance historique PRODUCT-JOURNEY-CLAIM-EVIDENCE-COMPLETION-01 first pass (pre-CR-CEC)** | *(historique tip · superseded as tip by CR-CEC-01/02/03 correction)* — 2026-09-18 16:15:00 CEST (+0200) — first evidence-completion pass · correctionRef `evidence-completion-v1` · CE **pass** superseding strict-eo-v1 **not_proven** · Product **SUCCESS** · LPS v27→v28 · Attempts **3→3** · ZERO REAL · ChatGPT Critical Review then required CR-CEC-01/02/03 before Git acceptance |
 | **Timestamp maintenance historique PRODUCT-JOURNEY-POST-EXECUTION-REPLAN-01 (pre-CLAIM-EVIDENCE-COMPLETION-01)** | 2026-09-18 15:30:00 CEST (+0200) — **PRODUCT JOURNEY POST-EXECUTION REPLAN — PROJECT GIT INTEGRATION** · EVOL · CRITICAL · Macro **PRODUCT-JOURNEY-POST-EXECUTION-REPLAN-01** · CR-PJR-01/02/03 **CLOSED / PRESERVED** · original macro baseline `ca77b400f9b2e91557ccded2a304c2ec68fbc14c` (PR **#502** ContractResult A+B merge) · **requalified current baseline** `origin/main` `9be4b80629cb594821cc7b35abf22c89df65acc1` after documentation-only PR **#503** (`sfia-studio-transmission-guide.md` only · **NON-OVERLAPPING DOCUMENTARY MAIN ADVANCE**) · branche `qa/sfia-studio-product-journey-post-execution-replan-01` · Attempt 3 current CE strict **not_proven** preserved · Product **UNCLAIMED** · portable PJR + correctionRef + current-CE W3-C semantics preserved · Attempts **3→3** · **ZERO NEW STUDIO/CURSOR REAL** · runtime v3 = **NON ADOPTED** · repository lifecycle = **PROJECT GIT INTEGRATION — RESOLVE FROM GIT / PR EVIDENCE** · **≠** READY · **≠** Attempt 3 Product PASS · next = PR CI / conditional merge / post-merge verification |
```


### `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`

```diff
diff --git a/projects/sfia-studio/product-completion/01-product-completion-cadrage.md b/projects/sfia-studio/product-completion/01-product-completion-cadrage.md
index 29ec4a33..baf91f84 100644
--- a/projects/sfia-studio/product-completion/01-product-completion-cadrage.md
+++ b/projects/sfia-studio/product-completion/01-product-completion-cadrage.md
@@ -1133,3 +1133,28 @@ C1 INTEGRATED ON MAIN
 ---

 *SFIA Studio — Product Completion — Cycle 1 Cadrage — VALIDATED BY MORRIS — INTEGRATED ON MAIN — GOVERNANCE/DOCTRINE SYNC INTEGRATED ON MAIN via PR #365 / `dbd5ff99…` — POST-MERGE REPO COHERENCE CURRENT GATE — RUNTIME V3 NON ADOPTED.*
+
+---
+
+## Amendment 2026-09-19 — D-PC-09 Project Repository Workspace & Cycle-aware Artifact Routing
+
+| Métadonnée | Valeur |
+| --- | --- |
+| **Date** | 2026-09-19 |
+| **Macro** | PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01 |
+| **Décision Morris** | **D-PC-09** — capacité Product Completion MUST · construction autorisée · **≠** promotion globale · **≠** REAL AUTHORIZED |
+| **Origine** | Product Journey manuel « Mini cadrage — Suivi de tâches » · OBS-PJ-CLOUD-01 (targetPath explicite non reconnu / clarification répétée) |
+| **État historique C1** | **PRESERVED** — ce MUST n’était **pas** couvert historiquement par C1 ; aucun claim rétroactif |
+| **Implémentation courante** | **implementation candidate** (même macro) |
+| **Preuve courante** | **DETERMINISTIC PROVEN** si tests PASS · **REAL NOT PROVEN** |
+| **Anti-claims** | ≠ Product Completion COMPLETE · ≠ runtime v3 ADOPTED · ≠ REAL PROVEN |
+
+### Disposition adoptée (additive)
+
+- Project Repository Workspace & Cycle-aware Artifact Routing = **MUST** Product Completion.
+- RepositoryBinding manuel Pilote **RETIRE** du parcours Product normal ; projection technique **server-owned** (ADAPT, pas second engine).
+- Workspace Project stable sous `projects/<project-workspace-key>/` à Create Project (aucune écriture Git à la création).
+- Cycle actif → segment catalogue stable `repositoryWorkspaceSegment` (≠ displayOrder recalculé).
+- Filename Pilote/Nora = candidat non autoritaire ; serveur compose `targetPath` exact ; Proposal/HD existante absorbe la validation (pas de micro-gate).
+- CREATE vs UPDATE honnête ; mkdir parents dans le même Attempt docs_write.
+- Legacy Projects lisibles sans migration silencieuse.
```


### `projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md`

```diff
diff --git a/projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md b/projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md
index ead9b433..d41c32ec 100644
--- a/projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md
+++ b/projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md
@@ -1248,3 +1248,24 @@ Ce document **ne dit pas** :
 ---

 *SFIA Studio — Product Completion — Cycle 2 Conception fonctionnelle — VALIDATED BY MORRIS — INTEGRATED ON MAIN VIA PR #369 / `2406ccda211842fc7f8da3699bb186a30f7dc105` — POST-MERGE METADATA COHERENCE SYNC CARRIED BY PR #370 — GIT/PR EVIDENCE AUTHORITATIVE — NO DELIVERY — NO NEXT-CAPABILITY EXECUTION — RUNTIME V3 NON ADOPTED — ZERO REAL*
+
+---
+
+## Amendment 2026-09-19 — Behavioural contract (D-PC-09 / PRODUCT-PWR-01)
+
+**Décision Morris :** D-PC-09 consommée · capacité MUST · **≠** réécriture historique C2.
+
+### Comportement fonctionnel (additive)
+
+1. **Create Project** — aucun RepositoryBinding manuel ; workspace key durable dérivé du titre une fois ; `pathRoot = projects/<key>` lorsque config serveur présente.
+2. **Rename titre** — ne recalcule / ne déplace **pas** le workspace durable existant.
+3. **Cycle workspace** — `<projectRoot>/<repositoryWorkspaceSegment>` depuis CycleTypeCatalog (segments stables 01-cadrage…15-capitalisation-rex pour le snapshot courant ; catalogue évolutif ; pas d’invariant « exactement 15 »).
+4. **Filename** — Pilote explicite conservé comme candidat ; absent → Nora peut proposer un leaf Markdown non autoritaire.
+5. **targetPath** — composition / validation **server-owned** ; hors Project/Cycle workspace **ou path invalide** (absolu / traversal / malformé) → **FAIL CLOSED** (jamais de salvage basename / rewrite silencieux).
+6. **Proposal / HumanDecision** — présente workspace projet, workspace cycle, filename, target exact, **Effet fichier CREATE/UPDATE** scellé **avant** HumanDecision ; options poursuivre / amender / refuser suffisent. **ASK** → Proposal non exécutable.
+7. **Collision** — workspace existant sans preuve d'appartenance durable → ASK / fail-closed (slug ≠ ownership ; existence dossier ≠ ownership).
+8. **Matérialisation** — aucun mkdir gratuit à Create ; parents créés au premier Attempt docs_write utile. **TOCTOU** : CREATE/UPDATE scellés revalidés avant PREPARE (fichier apparu/disparu → STOP).
+9. **Legacy** — anciens bindings `docs/` etc. restent lisibles ; pas de faux claim de migration.
+10. **Create Product** — config repository server-owned = **précondition** ; absente/invalide → FAIL CLOSED avant persistence (aucun Project/LPS orphelin ; pas de formulaire manuel).
+
+**Preuve :** deterministic candidate · REAL reproof = gate Morris distinct · même macro · CR-PWR-01…04.
```


### `projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md`

```diff
diff --git a/projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md b/projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md
index c5e2fc4a..e38d2297 100644
--- a/projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md
+++ b/projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md
@@ -931,3 +931,32 @@ Conserve : **capability-driven trajectory** + **cycle-driven maturation**.
 ---

 *VALIDATED BY MORRIS — INTEGRATED ON MAIN via PR #378 — POST-MERGE COHERENCE COMPLETE via PR #379 — FA-R01…FA-R12 CLOSED — NO CODE — NO DELIVERY — ZERO REAL — RUNTIME V3 NON ADOPTED — NEXT CYCLE NOT SELECTED — SOURCE BRANCH CLEANUP NOT PERFORMED*
+
+---
+
+## Amendment 2026-09-19 — Functional architecture (D-PC-09)
+
+**Architecture retenue :** ADAPT `ProjectRepositoryBinding` + CycleTypeCatalog segment + ArtifactTargetResolver (fonctions domaine) · **aucune** architecture parallèle · **aucune** nouvelle persistence engine.
+
+```text
+CreateProject (Product boundary)
+  → server-owned repository config REQUIRED (else FAIL CLOSED pre-persist)
+  → projectWorkspaceKey (durable)
+  → repositoryBinding.pathRoot = projects/<key>
+
+ActiveCycleGovernedContinuation
+  → CycleTypeCatalog.repositoryWorkspaceSegment
+  → resolveArtifactTargetUnderCycleWorkspace(filename|path candidate)
+     · invalid path → FAIL CLOSED (no basename salvage)
+  → managed-repo read fact (existence / workspace inventory)
+  → workspace collision qualify (absent_ok | reuse_same_project | ASK)
+  → classifyArtifactWriteMode (CREATE | UPDATE | ASK)
+  → Proposal seals exact targetPath + artifactWriteMode
+  → HumanDecision (existante) — ASK non exécutable
+  → PREPARE revalidates sealed WRITE mode (TOCTOU)
+  → ExecutionContract.inputs.targetPath
+  → docs_write Attempt (mkdir parents + write)
+  → Artifact Evidence
+```
+
+UI Product : `RepositoryBindingForm` retiré du parcours normal · panneau read-only Workspace projet / cycle (chemin prévu / logique — jamais MATERIALIZED sans Evidence).
```


### `projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md`

```diff
diff --git a/projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md b/projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md
index a734efe5..12b2b0ed 100644
--- a/projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md
+++ b/projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md
@@ -764,3 +764,24 @@ Do **not** declare:
 ---

 *ARCHITECTURE DIRECTION ADOPTED BY MORRIS · CLOSURE INTEGRATED ON MAIN · POST-MERGE TRUTH SATISFIED · C6 CLOSED BY MORRIS · FINAL COHERENCE TRANSPORTED VIA PR #384 · STATE RESOLVE FROM GIT · NO CODE · NO MIGRATION · NO BACKLOG · NO DELIVERY · ZERO REAL · RUNTIME V3 NON ADOPTED · ADOPTION ≠ IMPLEMENTATION*
+
+---
+
+## Amendment 2026-09-19 — Technical delta (PRODUCT-PWR-01)
+
+| Élément | Disposition |
+| --- | --- |
+| `ProjectRepositoryBinding` | ADAPT — projection interne server-owned |
+| Config | `SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY` / `_REMOTE_URL` / `_DEFAULT_BRANCH` (pas de hardcode owner/repo domaine) |
+| `projectWorkspaceKey` | champ durable additif sur Project |
+| `CycleTypeDefinition.repositoryWorkspaceSegment` | metadata stable + validation unicité/sûreté |
+| F2 `artifactFileName` | candidat non autoritaire |
+| `enrichExecutionIntentFromBinding` | compose target sous cycle root pour workspaces `projects/<key>` ; legacy clamp préservé ; invalid path FAIL CLOSED |
+| `classifyArtifactWriteMode` | CREATE/UPDATE/ASK from managed-repo existence fact — wired into Proposal seal (CR-PWR-02) |
+| `assessProjectWorkspaceCollision` | wired before materialization Proposal (CR-PWR-03) |
+| Product Create boundary | LocalProjectComposition fail-closed si config server-owned absente/invalide (CR-PWR-04) |
+| PREPARE TOCTOU | `revalidateSealedArtifactWriteMode` — CREATE/UPDATE stale → STOP |
+| docs_write | mkdir parents déjà dans Fake/REAL boundary — même Attempt |
+| Persistence | **aucune** nouvelle table / engine |
+| Legacy | load-compatible · pas de migration silencieuse |
+| Build Doctrine / framing 30–37 | **READ ONLY** — non modifiés |
```


### `projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md`

```diff
diff --git a/projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md b/projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md
index 37472b7c..2535b9fc 100644
--- a/projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md
+++ b/projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md
@@ -543,3 +543,20 @@ Sous `.tmp-sfia-review/product-completion-integrated-qa/screenshots/` :
 ---

 *Fin DOC14 — PC-INTEGRATED-QA-01 (+ CORR-01 technique · CORR-02 cohérence documentaire).*
+
+---
+
+## Amendment 2026-09-19 — Clarification preuve (PRODUCT-PWR-01)
+
+**CR-PWR-01…04 (same macro):** invalid path fail-closed · CREATE/UPDATE/ASK avant HD · collision workspace fail-closed · Product Create config précondition · TOCTOU PREPARE.
+
+**Historique DOC14 PRESERVED.** Les preuves integrated/deterministic antérieures **ne couvrent pas** Project Repository Workspace & Cycle-aware Artifact Routing.
+
+| Claim | État |
+| --- | --- |
+| Historical docs_write REAL at prior tested scope | **PRESERVED** |
+| Nouvelle capacité workspace/cycle routing | **DETERMINISTIC candidate** this macro · **REAL NOT PROVEN** |
+| Product Completion globally COMPLETE | **INTERDIT** |
+| OBS-PJ-CLOUD-01 | traité comme symptôme du gap produit plus large ; correction = capacité cible, pas patch symptôme seul |
+
+Aucun claim rétroactif falsifié.
```


### `projects/sfia-studio/product-completion/ux-product-experience/01-experience-architecture.md`

```diff
diff --git a/projects/sfia-studio/product-completion/ux-product-experience/01-experience-architecture.md b/projects/sfia-studio/product-completion/ux-product-experience/01-experience-architecture.md
index 16429a9a..c7ae3055 100644
--- a/projects/sfia-studio/product-completion/ux-product-experience/01-experience-architecture.md
+++ b/projects/sfia-studio/product-completion/ux-product-experience/01-experience-architecture.md
@@ -637,3 +637,12 @@ Ce document **ne dit pas** :
 ---

 *SFIA Studio — Product Completion — UX Experience Architecture — VALIDATED BY MORRIS — INTEGRATED ON MAIN via PR #372 — NO DELIVERY — NO REAL — NEXT UX SUBCYCLE NOT SELECTED — RUNTIME V3 NON ADOPTED*
+
+---
+
+## Amendment 2026-09-19 — Workspace routing UX (D-PC-09)
+
+- **RETIRE** : configuration manuelle RepositoryBinding (provider / identity / remote / branch / pathRoot) comme responsabilité Pilote dans le parcours Product normal.
+- **EXPOSE** (read-only) : Workspace projet `projects/<key>/` · Workspace cycle actif `<project>/<segment>/` · wording « chemin prévu / workspace logique » avant Evidence.
+- **Proposal** : affiche targetPath exact + filename + **Effet fichier CREATE/UPDATE** (scellé avant HD) ; ASK → non exécutable ; **pas** de nouveau micro-gate filename.
+- **INTERDIT** : badge MATERIALIZED sur seul path calculé.
```


### `projects/sfia-studio/product-completion/ux-product-experience/02-end-to-end-wireframes-interaction-model.md`

```diff
diff --git a/projects/sfia-studio/product-completion/ux-product-experience/02-end-to-end-wireframes-interaction-model.md b/projects/sfia-studio/product-completion/ux-product-experience/02-end-to-end-wireframes-interaction-model.md
index f2a7e5b9..d0c8578b 100644
--- a/projects/sfia-studio/product-completion/ux-product-experience/02-end-to-end-wireframes-interaction-model.md
+++ b/projects/sfia-studio/product-completion/ux-product-experience/02-end-to-end-wireframes-interaction-model.md
@@ -724,3 +724,12 @@ C1 INTEGRATED → C2 INTEGRATED → UX EXPERIENCE ARCHITECTURE INTEGRATED → E2
 ---

 *SFIA Studio — Product Completion — UX E2E Wireframes & Interaction Model — **VALIDATED BY MORRIS — INTEGRATED ON MAIN** via PR #374 — H-01…H-04 CARRY — NO SCREENS — NO COMPONENTS — NO DELIVERY — NO REAL — NEXT CAPABILITY NOT SELECTED — RUNTIME V3 NON ADOPTED*
+
+---
+
+## Amendment 2026-09-19 — Workspace routing UX (D-PC-09)
+
+- **RETIRE** : configuration manuelle RepositoryBinding (provider / identity / remote / branch / pathRoot) comme responsabilité Pilote dans le parcours Product normal.
+- **EXPOSE** (read-only) : Workspace projet `projects/<key>/` · Workspace cycle actif `<project>/<segment>/` · wording « chemin prévu / workspace logique » avant Evidence.
+- **Proposal** : affiche targetPath exact + filename + **Effet fichier CREATE/UPDATE** (scellé avant HD) ; ASK → non exécutable ; **pas** de nouveau micro-gate filename.
+- **INTERDIT** : badge MATERIALIZED sur seul path calculé.
```


### `projects/sfia-studio/product-completion/ux-product-experience/03-product-screens-visual-state-contract.md`

```diff
diff --git a/projects/sfia-studio/product-completion/ux-product-experience/03-product-screens-visual-state-contract.md b/projects/sfia-studio/product-completion/ux-product-experience/03-product-screens-visual-state-contract.md
index eee0d8ed..1a35c7ae 100644
--- a/projects/sfia-studio/product-completion/ux-product-experience/03-product-screens-visual-state-contract.md
+++ b/projects/sfia-studio/product-completion/ux-product-experience/03-product-screens-visual-state-contract.md
@@ -225,3 +225,12 @@ Remaining product gate **after** this post-merge coherence is integrated on main
 ---

 *VALIDATED BY MORRIS — INTEGRATED ON MAIN — PR #376 — H-01…H-04 CARRY — NO COMPONENTS — NO DELIVERY — NO REAL — NEXT CAPABILITY NOT SELECTED — RUNTIME V3 NON ADOPTED*
+
+---
+
+## Amendment 2026-09-19 — Workspace routing UX (D-PC-09)
+
+- **RETIRE** : configuration manuelle RepositoryBinding (provider / identity / remote / branch / pathRoot) comme responsabilité Pilote dans le parcours Product normal.
+- **EXPOSE** (read-only) : Workspace projet `projects/<key>/` · Workspace cycle actif `<project>/<segment>/` · wording « chemin prévu / workspace logique » avant Evidence.
+- **Proposal** : affiche targetPath exact + filename + **Effet fichier CREATE/UPDATE** (scellé avant HD) ; ASK → non exécutable ; **pas** de nouveau micro-gate filename.
+- **INTERDIT** : badge MATERIALIZED sur seul path calculé.
```


## Tests executed

- projectWorkspaceArtifactRouting.d0 (+ CR-PWR-01/02/03 unit)
- productWorkspaceArtifactRouting.applicationPath.d0 (CREATE E2E, ASK/collision, TOCTOU, CR-PWR-04)
- projectWorkspaceRouting.ui / productJourneyProjectionCoherence.ui
- cycleTypeCatalog / localProjectComposition / corrProof07 / corrProof09 / w3d / naturalMaterialization / proposalSubjectIntegrity / productProofJourneyIntegrity
- vitest round4: **170 passed / 0 failed** (11 files)
- `tsc --noEmit`: PASS
- `next build`: PASS

## Deterministic E2E proof

- Project "Mini cadrage — Suivi de tâches"
- projectWorkspaceKey = `mini-cadrage-suivi-de-taches`
- pathRoot = `projects/mini-cadrage-suivi-de-taches`
- cyc:framing → `01-cadrage`
- filename `note-de-cadrage.md`
- target = `projects/mini-cadrage-suivi-de-taches/01-cadrage/note-de-cadrage.md`
- target absent + managed repo configured → Proposal `artifactWriteMode = CREATE`
- occupied workspace without ownership / second same-title Project → clarification ASK (no executable Proposal)
- proposedTargetPath `../x.md` → FAIL CLOSED (never becomes `x.md`)

## Fake / Real Qualification

| Item | Value |
| --- | --- |
| Applicable | YES |
| Mode | DETERMINISTIC ONLY |
| OpenAI LIVE | 0 |
| Cursor REAL | 0 |
| Remote project Git effects | 0 |

## Claims autorisés

- implementation candidate corrected
- DETERMINISTIC PROVEN
- automatic workspace routing deterministically proven
- CREATE/UPDATE/ASK deterministically proven
- workspace collision fail-closed deterministically proven
- unbound new Product Project fail-closed deterministically proven

## Claims interdits

- REAL PROVEN · END-TO-END REAL PROVEN · Product Completion COMPLETE · Product READY · runtime v3 ADOPTED · global L5

## Documentation

- D-PC-09 amendments updated in C1/C2/C3/06/14/UX (same macro; no new doc)
- Roadmap **same** PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01 entry updated
- Build Doctrine / framing 30–37 **READ ONLY** untouched

## Temporary debt / Reserves

- Blocking: none for deterministic scope
- Non-blocking: no runtime UI screenshot this pass; REAL reproof pending Morris GO
- `RepositoryBindingForm` file retained (not mounted in Product path)

## Morris decisions still required

1. ChatGPT Critical Review of this pack (CR-PWR-01…04)
2. GO project Git integration / commit (if review PASS) — distinct
3. GO Cursor REAL / OpenAI LIVE bounded reproof — same macro — distinct
4. push/PR/merge remain distinct

## Pack integrity self-check

- created_count=8
- modified_count=37
- missing_diffs=NONE
- synthesis_only=NO
- truncated_diffs=NO

## Verdict

**CR-PWR-01 CLOSED**
**CR-PWR-02 CLOSED**
**CR-PWR-03 CLOSED**
**CR-PWR-04 CLOSED**

**IMPLEMENTATION COMPLETE — DETERMINISTIC PROOF PASS — READY FOR CHATGPT CRITICAL REVIEW — MORRIS REAL REPROOF GATE PENDING**

Anti-claims: ≠ REAL PROVEN · ≠ END-TO-END REAL PROVEN · ≠ Product Completion COMPLETE · ≠ Product READY · ≠ runtime v3 ADOPTED · ≠ global L5 · ≠ project Git integrated

## PACK COMPLETE — ALL PROJECT FILES COVERED
