# ChatGPT Critical Review Pack — FULL

| Field | Value |
| --- | --- |
| **Date/time (UTC)** | 2026-09-19T06:22:33Z |
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

## Completeness checklist

- Created project files: **7** (full content below)
- Modified project files: **32** (complete `git diff` per file below)
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

### Modified file list

- `projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/w3dFullCkcCatalog.test.ts`
- `projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`
- `projects/sfia-studio/app/features/project-assistant/actions.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts`
- `projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts`
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
status --short (incl. pack source; pack not product):
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w3dFullCkcCatalog.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
 M projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
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
```

## Sources consulted (role)

- Process/method templates + routing + operating model + guardrails + v2.5 cycles — method constraints
- Convergence Build Doctrine (READ ONLY) + Roadmap (UPDATE one macro entry)
- Product Completion C1/C2/C3/06/14 + UX PE 01–03 — amendements additifs datés 2026-09-19
- v3 framing 17/19/30–37/ckc — READ ONLY destination; routing segment = catalog/runtime
- Code: Project binding, createProject, cycleTypeCatalog, F2 enrich, Proposal, EC, docs_write, UI

## Morris decisions consumed

- D-PC-09 — Project Repository Workspace & Cycle-aware Artifact Routing = Product Completion MUST
- Adapt RepositoryBinding (not parallel engine); retire manual UI; server-owned targeting
- Auto Project + cycle workspaces; Nora filename candidate; HD/Proposal absorbs validation
- mkdir in same Attempt; no empty Git folders; legacy readable without silent migration
- Same macro / no micro-cycles; no project commit this pass; Review Handoff L3 authorized

## Implementation map

| Concern | Location |
| --- | --- |
| Binding create | `createProject` + internal `setProjectRepositoryBinding` |
| Binding persist | `Project.repositoryBinding` in payload JSON |
| pathRoot apply | enrich → scopeIn; docsWrite pathAllowlist |
| OBS-PJ-CLOUD-01 | null/missing target after enrich → clarification; no cycle compose |
| Cycle catalog | `cycleTypeCatalog.ts` + `repositoryWorkspaceSegment` |
| Target resolve | `artifactTargetRouting.ts` |
| docs_write | Fake/REAL launch mkdir+write same Attempt |
| UI | `RepositoryBindingForm` unmounted; `ProjectWorkspaceRoutingPanel` |

## Architecture retained

- ADAPT `ProjectRepositoryBinding` as internal server-owned projection
- Durable `projectWorkspaceKey`; `pathRoot=projects/<key>` when server env present
- Stable `repositoryWorkspaceSegment` (not displayOrder-derived)
- Cycle routing only for automatic `projects/<key>` roots; legacy clamp preserved
- `artifactFileName` non-authoritative; server composes exact `targetPath`
- No second engine / no new SQL table / no doctrine mutation

## OBS-PJ-CLOUD-01 resolution

**Root cause:** F2 active-cycle materialization required an in-bounds `targetPath`; enrich left null / unbound cases clarified repeatedly; no Project+cycle workspace composition existed.

**Correction:** server composes exact target under `projects/<key>/<segment>/` from leaf filename or in-bounds candidate; clarification only when truly insufficient; auto binding at create when server config present.

**Anti-regression:** `productWorkspaceArtifactRouting.applicationPath`, enrich unit tests, `naturalMaterialization`, `corrProof07` PASS.

## Git Review Index — created

```
projects/sfia-studio/app/__tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts
projects/sfia-studio/app/__tests__/pre-m6-product-ui/projectWorkspaceRouting.ui.test.tsx
projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel.tsx
projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts
projects/sfia-studio/app/lib/oa/project/domain/projectWorkspaceKey.ts
projects/sfia-studio/app/lib/oa/project/domain/serverOwnedRepositoryConfig.ts
```

## Git Review Index — modified

```
M	projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/w3dFullCkcCatalog.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
M	projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
M	projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
M	projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts
M	projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
M	projects/sfia-studio/app/lib/oa/project/application/createProject.ts
M	projects/sfia-studio/app/lib/oa/project/domain/types.ts
M	projects/sfia-studio/app/lib/oa/project/index.ts
M	projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
M	projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
M	projects/sfia-studio/app/lib/vertical-slice-core/types.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M	projects/sfia-studio/product-completion/01-product-completion-cadrage.md
M	projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md
M	projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md
M	projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md
M	projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md
M	projects/sfia-studio/product-completion/ux-product-experience/01-experience-architecture.md
M	projects/sfia-studio/product-completion/ux-product-experience/02-end-to-end-wireframes-interaction-model.md
M	projects/sfia-studio/product-completion/ux-product-experience/03-product-screens-visual-state-contract.md
```

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
  it("CREATE when absent, UPDATE when exists, ASK when unknown/ambiguous", () => {
    expect(classifyArtifactWriteMode({ targetExists: false })).toBe("CREATE");
    expect(classifyArtifactWriteMode({ targetExists: true })).toBe("UPDATE");
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
 * Project workspace auto-binding → cycle routing → Proposal target (no manual RepositoryBinding).
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
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  FakeDocsWriteLaunchPort,
} from "@/lib/oa/execution-attempt";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

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
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;
  let previousIdentity: string | undefined;
  let previousRemote: string | undefined;
  let previousBranch: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousIdentity = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    previousRemote = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
    previousBranch = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = "acme/widget";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/widget.git";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = "main";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("pwr-workspace-routing.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "pwr" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
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
  });

  async function seedFramingProject(): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "Mini cadrage — Suivi de tâches",
      objective: "Cadrer le suivi de tâches",
      context: "Product Journey workspace routing reproof",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: "PWR01",
      idempotencyKey: "idem:pwr-workspace-1",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject failed");
    const projectId = created.project.projectId;

    // Auto workspace — no setProjectRepositoryBinding
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

    const cycleInstanceId = "cyc:pwr-framing-1";
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

  it("CA-PWR — auto workspace + natural request → Proposal exact target under cycle root", async () => {
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
    expect(send.f2?.proposal?.requestedOperation).toBe(
      F2_ARTIFACT_MATERIALIZATION_OPERATION,
    );
    expect(send.text ?? "").not.toMatch(/chemin cible du livrable n'est pas encore déterminé/i);

    // No parasite cycle created
    const oa = runtime.oa!;
    const cycles = await oa.cycleServices.cycles.listByProject(projectId);
    const active = cycles.filter((c) => c.status === "active");
    expect(active.map((c) => c.cycleInstanceId)).toEqual([cycleInstanceId]);
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

export function extractArtifactFileNameCandidate(input: {
  artifactFileName?: string | null;
  targetPath?: string | null;
}): string | null {
  const explicit = input.artifactFileName?.trim() || "";
  if (explicit && isSafeArtifactFileNameLeaf(explicit)) return explicit;
  const rawPath = input.targetPath?.trim() || "";
  if (!rawPath) return null;
  const normalized = normalizeRepoRelativePath(rawPath);
  if (!normalized) {
    // bare leaf may fail normalize if treated oddly — try basename
    const base = rawPath.split("/").pop()?.trim() || "";
    return isSafeArtifactFileNameLeaf(base) ? base : null;
  }
  if (!normalized.includes("/")) {
    return isSafeArtifactFileNameLeaf(normalized) ? normalized : null;
  }
  const leaf = normalized.split("/").pop() || "";
  return isSafeArtifactFileNameLeaf(leaf) ? leaf : null;
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
 * - Out-of-bounds paths rejected (no silent rewrite).
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
    if (
      normalizedProposed &&
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
    // Proposed full path outside cycle workspace — fail closed (no silent rewrite).
    if (normalizedProposed && normalizedProposed.includes("/")) {
      return {
        ok: false,
        needsTargetClarification: true,
        code: "TARGET_OUTSIDE_CYCLE_WORKSPACE",
        reason: "proposed_target_outside_cycle_workspace",
        projectRoot,
        cycleRoot,
      };
    }
  }

  const fileName = extractArtifactFileNameCandidate({
    artifactFileName: input.artifactFileName,
    targetPath: proposed || null,
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
 * Ambiguous / unknown existence → ASK (caller must not overwrite silently).
 */
export function classifyArtifactWriteMode(input: {
  targetExists: boolean | null | undefined;
  intentClearlySameDeliverable?: boolean;
}): "CREATE" | "UPDATE" | "ASK" {
  if (input.targetExists === true) {
    if (input.intentClearlySameDeliverable === false) return "ASK";
    return "UPDATE";
  }
  if (input.targetExists === false) return "CREATE";
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
 * Returns null when incomplete — CreateProject then skips auto-binding
 * (legacy-compatible) rather than inventing ambient identity.
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
```

## Modified files — COMPLETE DIFFS (one section per file)

Each section is the full `git diff -- <path>` output (no truncation).

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

### `projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
index 98026767..e4556b6b 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
@@ -160,6 +160,7 @@ describe("visible slice V1 Project/LPS happy path", () => {
         ckcResolutionRef: null,
       },
       repositoryBinding: null,
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
index cc09bca1..453a60e4 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
@@ -24,6 +24,9 @@ import {
   type CycleInstance,
 } from "@/lib/oa/cycle";
 import type { ProjectRepositoryBinding } from "@/lib/oa/project";
+import { resolveArtifactTargetUnderCycleWorkspace } from "@/lib/oa/project/domain/artifactTargetRouting";
+import { isValidProjectWorkspaceKey } from "@/lib/oa/project/domain/projectWorkspaceKey";
+import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
 import type { ProjectAssistantContextDto } from "../types";
 import { classifyHumanDecisionLifecycle } from "./studioCognitiveContext";
 import type { ExecutionIntentPayload } from "./executionIntentSchema";
@@ -33,6 +36,21 @@ import {
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
@@ -385,6 +403,7 @@ export async function resolveActiveCycleGovernedContinuation(input: {
   const enriched = enrichExecutionIntentFromBinding({
     analysisIntent: input.analysis.executionIntent,
     binding: repositoryBinding,
+    activeCycleTypeId: activeCycle.cycleTypeId,
   });

   return {
@@ -413,14 +432,19 @@ function withCanonicalArtifactMaterializationAction(
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
@@ -431,8 +455,6 @@ export function enrichExecutionIntentFromBinding(input: {
   };

   // CORR-PROOF-09 — unsourced affirmative reversibility is never trusted fact
-  // on the Artifact materialization enrich path. Preserve null/unknown only;
-  // never invent "reversible". Provider "reversible"|"irreversible" → null.
   const rawRev = base.reversibilityExpectation;
   const reversibilityExpectation: "unknown" | null =
     rawRev === "unknown" ? "unknown" : null;
@@ -451,7 +473,6 @@ export function enrichExecutionIntentFromBinding(input: {

   const rawRoot = input.binding.pathRoot?.trim() || "";
   const canonicalRoot = rawRoot ? normalizeRepoRelativePath(rawRoot) : null;
-  // Invalid pathRoot on binding → fail closed (clarify), do not invent.
   if (rawRoot && !canonicalRoot) {
     return {
       executionIntent: withCanonicalArtifactMaterializationAction({
@@ -466,23 +487,71 @@ export function enrichExecutionIntentFromBinding(input: {
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
```

### `projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts b/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
index dab3a06c..9a06221c 100644
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
@@ -80,6 +82,11 @@ export type ExecutionIntentPayload = {
   artifactType?: string | null;
   targetRepositoryRef?: string | null;
   targetPath?: string | null;
+  /**
+   * Non-authoritative leaf filename candidate (Pilote or Nora).
+   * Server composes exact targetPath under Project+Cycle workspace.
+   */
+  artifactFileName?: string | null;
   scopeIn?: string[];
   scopeOut?: string[];
   expectedOutputs?: string[];
@@ -196,6 +203,7 @@ export function validateExecutionIntentPayload(
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
index 4e4424e9..be507e1e 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -1155,16 +1155,24 @@ export async function orchestrateAssistantSend(input: {
     });

     if (continuation.needsTargetClarification) {
+      const hasBinding = Boolean(continuation.repositoryBinding);
+      const hasPathRoot = Boolean(
+        continuation.repositoryBinding?.pathRoot?.trim(),
+      );
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
+          hasPathRoot
+            ? "Le nom de fichier du livrable n'est pas encore déterminé (ou le chemin proposé sort du workspace Project/cycle)."
+            : "Le chemin cible du livrable n'est pas encore déterminé.",
+          hasPathRoot
+            ? "Indiquez un filename Markdown sûr (ex. note-de-cadrage.md) — le serveur composera le chemin exact sous le workspace Project et le cycle actif."
+            : hasBinding
+              ? "Précisez le chemin cible dans les bornes du dépôt lié avant de continuer."
+              : "Le dépôt cible n'est pas encore projeté — configuration serveur requise, ou Project legacy sans binding.",
           "Votre décision et la préparation de l'action restent fermées tant que la cible n'est pas clarifiée.",
           "Rien n'a encore été exécuté.",
         ].join(" "),
```

### `projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts b/projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
index b0322ea3..72f89e65 100644
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
```

### `projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts
index ae56b2f1..3e89e0ce 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts
@@ -33,6 +33,12 @@ export type SealedProposalExecutionBasis = {
   readonly artifactType: string | null;
   readonly targetRepositoryRef: string | null;
   readonly targetPath: string | null;
+  /** Non-authoritative leaf filename candidate sealed for HD presentation. */
+  readonly artifactFileName: string | null;
+  /** Server-derived CREATE/UPDATE when existence was resolved; else null. */
+  readonly artifactWriteMode: "CREATE" | "UPDATE" | null;
+  readonly projectWorkspaceRoot: string | null;
+  readonly cycleWorkspaceRoot: string | null;
   readonly scopeIn: readonly string[];
   readonly scopeOut: readonly string[];
   readonly expectedOutputs: readonly string[];
@@ -70,6 +76,21 @@ export function sealProposalExecutionBasis(
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
@@ -85,8 +106,14 @@ export function sealProposalExecutionBasis(
     intentKind: ei?.intentKind ?? null,
     artifactType: ei?.artifactType ?? null,
     targetRepositoryRef: ei?.targetRepositoryRef ?? null,
-    targetPath: ei?.targetPath ?? null,
-    scopeIn: asStringArray(ei?.scopeIn),
+    targetPath,
+    artifactFileName,
+    // Existence is resolved at PREPARE/Attempt — Proposal presents planned mode as null
+    // unless a future caller injects a resolved fact (kept null for digest stability).
+    artifactWriteMode: null,
+    projectWorkspaceRoot,
+    cycleWorkspaceRoot,
+    scopeIn,
     scopeOut: asStringArray(ei?.scopeOut),
     expectedOutputs: asStringArray(ei?.expectedOutputs),
     requiredCapabilities: asStringArray(ei?.requiredCapabilities),
@@ -124,6 +151,10 @@ export function computeProposalSubjectDigest(
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
index 8b05d2de..e87b8d2d 100644
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
@@ -105,6 +109,20 @@ export function deriveProposalSubjectOptions(
   const pathNote = sealed.targetPath
     ? `Chemin scellé: ${sealed.targetPath}`
     : "Aucun targetPath scellé";
+  const fileNote = sealed.artifactFileName
+    ? `Filename: ${sealed.artifactFileName}`
+    : "Filename: (dérivé du targetPath si présent)";
+  const writeNote = sealed.artifactWriteMode
+    ? `Effet fichier: ${sealed.artifactWriteMode}`
+    : "Effet fichier: à confirmer à la préparation (CREATE si absent, UPDATE si existant)";
+  const workspaceNotes = [
+    sealed.projectWorkspaceRoot
+      ? `Workspace projet: ${sealed.projectWorkspaceRoot}/`
+      : null,
+    sealed.cycleWorkspaceRoot
+      ? `Workspace cycle: ${sealed.cycleWorkspaceRoot}/`
+      : null,
+  ].filter((n): n is string => Boolean(n));
   const opNote = `Opération scellée: ${sealed.requestedOperation}`;

   return [
@@ -112,11 +130,13 @@ export function deriveProposalSubjectOptions(
       kind: "OPTION",
       optionRef: PROPOSAL_SUBJECT_PURSUE_REF,
       label: "Poursuivre le sujet proposé",
-      intent: `Décider sur la Proposal ${proposalId} — ${summary}. ${pathNote}. ${opNote}.`,
+      intent: `Décider sur la Proposal ${proposalId} — ${summary}. ${pathNote}. ${fileNote}. ${writeNote}. ${opNote}.`,
       impacts: [
         "HumanDecision liée à cette Proposal",
         "DecisionBasis conserve targetPath / requestedOperation scellés",
         "Pas de promotion ProjectTrajectory automatique",
+        ...workspaceNotes,
+        writeNote,
       ],
       reservations,
       steps: pursueSteps(sealed),
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
index fbe35858..3d2f0c93 100644
--- a/projects/sfia-studio/app/lib/oa/project/index.ts
+++ b/projects/sfia-studio/app/lib/oa/project/index.ts
@@ -9,6 +9,9 @@
 export * from "./domain/types";
 export * from "./domain/errors";
 export * from "./domain/invariants";
+export * from "./domain/projectWorkspaceKey";
+export * from "./domain/serverOwnedRepositoryConfig";
+export * from "./domain/artifactTargetRouting";

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
index 93e90ab3..dadbc3e4 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
@@ -282,6 +282,7 @@ function buildProjection(
       ckcResolutionRef: lps.ckcResolutionRef ?? null,
     }),
     repositoryBinding: projectRepositoryBindingProjection(project),
+    projectWorkspaceKey: project.projectWorkspaceKey?.trim() || null,
     localMode: true,
     iam: "NOT_SELECTED",
     productPersistence: "SQLITE_OA_PRODUCT_STORE",
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
index a8331fd5..5229fffb 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,6 +4,7 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
+| **Timestamp maintenance PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01** | 2026-09-19 — **PRODUCT PROJECT WORKSPACE & CYCLE-AWARE ARTIFACT ROUTING** · Cycle **8** · Delivery / implémentation · EVOL · CRITICAL · Macro **PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01** · **SAME MACRO / NO MICRO-CYCLE** · Morris D-PC-09 **CONSUMED** · baseline `origin/main` `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` · branche `delivery/sfia-studio-project-workspace-artifact-routing-01` · OBS-PJ-CLOUD-01 addressed via full capability (auto Project workspace + cycle segment + server-owned binding + F2/EC/docs_write) · état = **implementation candidate + DETERMINISTIC PROOF PASS (if tests green) + ChatGPT Critical Review PENDING + REAL reproof gate PENDING** · **ZERO OpenAI LIVE / ZERO Cursor REAL** this pass · project commit/push/PR **NONE this pass** · Review Handoff L3 **AUTHORIZED** · runtime v3 = **NON ADOPTED** · **≠** REAL PROVEN · **≠** Product Completion COMPLETE · **≠** Product Journey READY · next same-macro = Morris GO bounded REAL reproof after ChatGPT PASS |
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
index ead9b433..3b5a281e 100644
--- a/projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md
+++ b/projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md
@@ -1248,3 +1248,23 @@ Ce document **ne dit pas** :
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
+5. **targetPath** — composition / validation **server-owned** ; hors Project/Cycle workspace → refuse (pas de rewrite silencieux).
+6. **Proposal / HumanDecision** — présente workspace projet, workspace cycle, filename, target exact, CREATE/UPDATE ; options poursuivre / amender / refuser suffisent.
+7. **Collision** — workspace existant sans preuve d’appartenance → ASK / fail-closed.
+8. **Matérialisation** — aucun mkdir gratuit à Create ; parents créés au premier Attempt docs_write utile.
+9. **Legacy** — anciens bindings `docs/` etc. restent lisibles ; pas de faux claim de migration.
+
+**Preuve :** deterministic candidate · REAL reproof = gate Morris distinct · même macro.
```

### `projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md`

```diff
diff --git a/projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md b/projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md
index c5e2fc4a..d17814ea 100644
--- a/projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md
+++ b/projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md
@@ -931,3 +931,27 @@ Conserve : **capability-driven trajectory** + **cycle-driven maturation**.
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
+CreateProject
+  → projectWorkspaceKey (durable)
+  → server-owned repository config (env)
+  → repositoryBinding.pathRoot = projects/<key>
+
+ActiveCycleGovernedContinuation
+  → CycleTypeCatalog.repositoryWorkspaceSegment
+  → resolveArtifactTargetUnderCycleWorkspace(filename|path candidate)
+  → Proposal seals exact targetPath
+  → HumanDecision (existante)
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
index a734efe5..c413b02b 100644
--- a/projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md
+++ b/projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md
@@ -764,3 +764,20 @@ Do **not** declare:
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
+| `enrichExecutionIntentFromBinding` | compose target sous cycle root pour workspaces `projects/<key>` ; legacy clamp préservé |
+| docs_write | mkdir parents déjà dans Fake/REAL boundary — même Attempt |
+| Persistence | **aucune** nouvelle table / engine |
+| Legacy | load-compatible · pas de migration silencieuse |
+| Build Doctrine / framing 30–37 | **READ ONLY** — non modifiés |
```

### `projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md`

```diff
diff --git a/projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md b/projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md
index 37472b7c..1fdf10d1 100644
--- a/projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md
+++ b/projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md
@@ -543,3 +543,18 @@ Sous `.tmp-sfia-review/product-completion-integrated-qa/screenshots/` :
 ---

 *Fin DOC14 — PC-INTEGRATED-QA-01 (+ CORR-01 technique · CORR-02 cohérence documentaire).*
+
+---
+
+## Amendment 2026-09-19 — Clarification preuve (PRODUCT-PWR-01)
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
index 16429a9a..e6440abe 100644
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
+- **Proposal** : affiche targetPath exact + filename + CREATE/UPDATE ; **pas** de nouveau micro-gate filename.
+- **INTERDIT** : badge MATERIALIZED sur seul path calculé.
```

### `projects/sfia-studio/product-completion/ux-product-experience/02-end-to-end-wireframes-interaction-model.md`

```diff
diff --git a/projects/sfia-studio/product-completion/ux-product-experience/02-end-to-end-wireframes-interaction-model.md b/projects/sfia-studio/product-completion/ux-product-experience/02-end-to-end-wireframes-interaction-model.md
index f2a7e5b9..33f35c73 100644
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
+- **Proposal** : affiche targetPath exact + filename + CREATE/UPDATE ; **pas** de nouveau micro-gate filename.
+- **INTERDIT** : badge MATERIALIZED sur seul path calculé.
```

### `projects/sfia-studio/product-completion/ux-product-experience/03-product-screens-visual-state-contract.md`

```diff
diff --git a/projects/sfia-studio/product-completion/ux-product-experience/03-product-screens-visual-state-contract.md b/projects/sfia-studio/product-completion/ux-product-experience/03-product-screens-visual-state-contract.md
index eee0d8ed..88691232 100644
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
+- **Proposal** : affiche targetPath exact + filename + CREATE/UPDATE ; **pas** de nouveau micro-gate filename.
+- **INTERDIT** : badge MATERIALIZED sur seul path calculé.
```

## Tests executed

- Vitest targeted PWR + corrProof07/09 + naturalMaterialization + cycleTypeCatalog + UI: **120 PASS**
- `tsc --noEmit`: **PASS**
- `next build`: **PASS** (client/catalog boundary fixed)
- OpenAI LIVE calls: **0**
- Cursor REAL calls: **0**

## Fake / Real Qualification

| Item | Value |
| --- | --- |
| Entry proof | Historical docs_write REAL at prior tested scope; new routing NOT PROVEN |
| This pass | **DETERMINISTIC PROVEN** |
| REAL BOUNDARY | NOT PROVEN |
| E2E REAL | NOT PROVEN |
| Realism gaps | Nora LIVE filename; Cursor REAL mkdir+write; fresh Product Journey |
| REAL runs | 0 |

## Evidence deterministic

- Auto workspace `projects/mini-cadrage-suivi-de-taches`
- Cycle `cyc:framing` → `01-cadrage`
- Proposal target `projects/.../01-cadrage/note-de-cadrage.md`
- FakeDocsWrite mkdir parents + write under cycle root
- `RepositoryBindingForm` absent from `ProjectWorkspacePage` source

## Reserves

- Blocking: none for deterministic scope
- Non-blocking: no runtime UI screenshot this pass; REAL reproof pending Morris GO

## Temporary debt

- `RepositoryBindingForm` file retained (not mounted in normal Product path); setter remains for tests/legacy
- Legacy projects not migrated (by design)

## Morris decisions still required

1. ChatGPT Critical Review of this pack
2. GO project Git integration / commit (if review PASS) — distinct
3. GO Cursor REAL / OpenAI LIVE bounded reproof — same macro — distinct
4. push/PR/merge remain distinct

## Pack integrity self-check

- created_count=7
- modified_count=32
- missing_diffs=NONE
- synthesis_only=NO
- truncated_diffs=NO

## Verdict

**IMPLEMENTATION COMPLETE — DETERMINISTIC PROOF PASS — READY FOR CHATGPT CRITICAL REVIEW — MORRIS REAL REPROOF GATE PENDING**

Anti-claims: ≠ REAL PROVEN · ≠ END-TO-END REAL PROVEN · ≠ Product Completion COMPLETE · ≠ Product READY · ≠ runtime v3 ADOPTED · ≠ global L5 · ≠ project Git integrated
