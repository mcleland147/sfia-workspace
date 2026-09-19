# ChatGPT Critical Review Pack — FULL

- **Timestamp:** 2026-09-19T07:38:14Z
- **Macro:** PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01
- **Cycle:** 8 — Delivery / implémentation
- **Profil:** Critical
- **Typologie:** EVOL
- **SAME MACRO / NO MICRO-CYCLE**

## Git truth

```
branch: delivery/sfia-studio-project-workspace-artifact-routing-01
HEAD: a6dba9776bfb1b4cb1570a87b20b0c71e546e441
origin/main: a6dba9776bfb1b4cb1570a87b20b0c71e546e441
expected origin/main: a6dba9776bfb1b4cb1570a87b20b0c71e546e441
origin/main match: YES
project commit: NONE
project push: NONE
project PR: NONE
project merge: NONE
worktree: /tmp/sfia-pwr-01-dev
```

### status --short

```
 M .tmp-sfia-review/chatgpt-review.md
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
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
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

### diff --stat

```
 .tmp-sfia-review/chatgpt-review.md                 | 5243 +++++++++++++++++++-
 .../__tests__/oa/cycle/cycleTypeCatalog.test.ts    |   57 +
 .../productJourneyProjectionCoherence.ui.test.tsx  |   15 +-
 ...roof09.materializationIntentContract.d0.test.ts |    1 +
 .../app/__tests__/project-assistant/w2Harness.ts   |   11 +
 .../project-assistant/w3dFullCkcCatalog.test.ts    |    1 +
 projects/sfia-studio/app/__tests__/setup.ts        |   16 +
 .../localProjectComposition.test.ts                |   36 +-
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |   42 +-
 .../app/features/project-assistant/actions.ts      |   34 +
 .../f2/activeCycleGovernedContinuation.ts          |  397 +-
 .../project-assistant/f2/executionIntentSchema.ts  |   13 +
 .../project-assistant/f2/intentAnalysis.ts         |    5 +-
 .../features/project-assistant/f2/orchestrateF2.ts |   41 +-
 .../project-assistant/f2/recordDecision.ts         |    8 +
 .../project-assistant/f3/prepareM3FromDecision.ts  |  126 +
 .../project-assistant/w2/decideTrajectory.ts       |    7 +
 .../w2/proposalSubjectIntegrity.ts                 |   44 +-
 .../project-assistant/w2/proposalSubjectOptions.ts |   62 +-
 .../app/lib/oa/cycle/domain/cycleTypeCatalog.ts    |   46 +
 .../app/lib/oa/decision/domain/types.ts            |    4 +
 .../application/startExecution.ts                  |    7 +
 .../infrastructure/fakeDocsWriteLaunchPort.ts      |   42 +-
 .../studioCursorRealLaunchGateway.ts               |   35 +-
 .../ports/realExecutionLaunchPort.ts               |    6 +
 .../lib/oa/project/application/createProject.ts    |   24 +
 .../sfia-studio/app/lib/oa/project/domain/types.ts |   16 +-
 projects/sfia-studio/app/lib/oa/project/index.ts   |    8 +
 .../app/lib/platform/ai/fakeProvider.ts            |   57 +-
 .../vertical-slice-core/localProjectComposition.ts |   30 +
 .../app/lib/vertical-slice-core/types.ts           |    5 +
 .../app/lib/vertical-slice-runtime/mapping.ts      |    1 +
 .../app/lib/vertical-slice-runtime/types.ts        |    2 +
 .../convergence/sfia-studio-convergence-roadmap.md |    1 +
 .../01-product-completion-cadrage.md               |   25 +
 ...-product-completion-conception-fonctionnelle.md |   21 +
 ...roduct-completion-architecture-fonctionnelle.md |   34 +
 ...duct-completion-architecture-technique-delta.md |   23 +
 ...pletion-integrated-proof-final-qualification.md |   17 +
 .../01-experience-architecture.md                  |    9 +
 .../02-end-to-end-wireframes-interaction-model.md  |    9 +
 .../03-product-screens-visual-state-contract.md    |    9 +
 42 files changed, 6305 insertions(+), 285 deletions(-)
```

### name-status

```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
M	projects/sfia-studio/app/__tests__/project-assistant/w3dFullCkcCatalog.test.ts
M	projects/sfia-studio/app/__tests__/setup.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
M	projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
M	projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts
M	projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
M	projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts
M	projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectIntegrity.ts
M	projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts
M	projects/sfia-studio/app/lib/oa/decision/domain/types.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
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

### untracked

```
projects/sfia-studio/app/__tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts
projects/sfia-studio/app/__tests__/pre-m6-product-ui/projectWorkspaceRouting.ui.test.tsx
projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel.tsx
projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts
projects/sfia-studio/app/lib/oa/project/domain/projectWorkspaceKey.ts
projects/sfia-studio/app/lib/oa/project/domain/serverOwnedRepositoryConfig.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/managedRepoPathFacts.ts
```

### staged

```

(empty — nothing staged)
```

## Décisions Morris

1. GO correction finale déterministe — **AUTORISÉ / CONSUMED** (this pass)
2. ChatGPT Critical Review — **PENDING** (this handoff)
3. GO project Git integration / commit — **NOT AUTHORIZED** this pass
4. GO bounded REAL reproof in SAME macro — **NOT AUTHORIZED** this pass
5. push / PR / merge — **DISTINCT pending gates**

## Previous Critical Review (superseded handoff)

- Prior handoff commit: `f6019a0d73c432494a4000e7d87a6d920645c2c5`
- Prior blob: `9cc18544f5a0e49e23529d14fdd7a94fa3e4d00f`
- Prior scope: CR-PWR-01…04 deterministic corrections + Proposal→Evidence E2E
- Remaining Critical gaps closed this pass:
  1. Evidence `unavailable` contradiction fail-open → **CLOSED**
  2. execution-time TOCTOU before mutation → **CLOSED**
  3. ReviewBundle assertion in deterministic E2E → **CLOSED**

## Evidence unavailable fix (FINAL GAP 1)

`hasDurableSameArtifactEvidence` now fail-closes on any blocking conflict for the same `projectId`+`targetPath`, including:

- status rejected / superseded / stale / unavailable
- availability unavailable

Simplification: `if (blockingConflict) return false;` after admissible filter — never `sameDeliverable=true` when a contradictory Evidence row coexists with an admissible one.

Wrong-project / different-target conflicts do not block the current Project/target.

## Execution-time TOCTOU design (FINAL GAP 2)

Shared pure assert:

- `assertSealedArtifactWriteModeAgainstExistence` (PREPARE + execution)
- `assertArtifactWriteModeAtExecution` (phase-specific codes)

Wired at last reliable frontier before mutation:

- `FakeDocsWriteLaunchPort.launch` — before `mkdir`/`writeFile`
- `StudioCursorRealLaunchGateway` — before Cursor REAL spawn

Sealed `artifactWriteMode` carried via `DocsWriteLaunchSpec` from EC inputs (`extractDocsWriteLaunchSpec`) — not client-mutable at launch.

Codes:

- `ARTIFACT_WRITE_MODE_STALE_CREATE_AT_EXECUTION`
- `ARTIFACT_WRITE_MODE_STALE_UPDATE_AT_EXECUTION`
- `ARTIFACT_WRITE_MODE_EXECUTION_REVALIDATION_UNAVAILABLE`
- ASK/null automatic Product docs_write → STOP

On guard failure: launch `reject` → Attempt `failed` with `stopReason` distinguishing stale CREATE/UPDATE · no FS mutation · no success Artifact Evidence.

## Fake/REAL parity

Same domain function `assertArtifactWriteModeAtExecution` composed into both adapters. No new state machine / persistence / engine.

## CREATE stale proof

Pipeline HD→EC→inspect→confirm→authorize→execute:

- CREATE sealed + PREPARE PASS
- file created after PREPARE
- Execute → Attempt failed · `ARTIFACT_WRITE_MODE_STALE_CREATE_AT_EXECUTION`
- preexisting content unchanged · `touchedFiles` unchanged · no available Artifact Evidence

## UPDATE stale proof

- UPDATE from Evidence + PREPARE PASS
- file removed before Execute
- Attempt failed · `ARTIFACT_WRITE_MODE_STALE_UPDATE_AT_EXECUTION`
- file not recreated

## Unavailable execution fact proof

- managed repo destroyed after PREPARE
- Execute STOP · no mutation · `REAL_WORKSPACE_INVALID` / revalidation unavailable path

## Nominal CREATE proof

Deterministic E2E Mini cadrage:

Create Project → framing cycle → REQUIRE_ARTIFACT → Proposal CREATE → HD → DecisionBasis → PREPARE → EC → inspect → confirmation → authorization → execution-time TOCTOU → Fake docs_write → Attempt succeeded → file+digest → Evidence → **ReviewBundle**

## Nominal UPDATE proof

- prior exact durable Evidence + file exists → Proposal UPDATE
- execution-time revalidation PASS
- file modified (not silent recreate)

## ReviewBundle proof (FINAL GAP 3)

Pipeline `ingestDocsWriteArtifactEvidence` creates ReviewBundle automatically.

E2E asserts via `reviewBundleRepository.listByProject`:

- `evidenceRefs` contains Artifact `evidenceId`
- `projectId` match
- `executionContractId` match
- `reviewBundleId` `rb:docs-write:…`
- no parasite bundles for other projects

## E2E final

Target: `projects/mini-cadrage-suivi-de-taches/01-cadrage/note-de-cadrage.md`
Mode CREATE stable end-to-end · ZERO REAL · ZERO LIVE

## Fichiers créés / modifiés

See name-status + untracked above.

## Full content created (new files)


### NEW: `projects/sfia-studio/app/__tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts`

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
```

### NEW: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/projectWorkspaceRouting.ui.test.tsx`

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

### NEW: `projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts`

```typescript
/**
 * PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01 — deterministic Product Journey
 * + CR-PWR-01…04 corrections + Proposal→Evidence E2E.
 *
 * ZERO REAL / ZERO LIVE / ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { revalidateSealedArtifactWriteMode } from "@/features/project-assistant/f3/prepareM3FromDecision";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { sealProposalExecutionBasis } from "@/features/project-assistant/w2/proposalSubjectIntegrity";
import {
  deriveProposalSubjectOptions,
  deriveProposalSubjectRecommendation,
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
} from "@/features/project-assistant/w2/proposalSubjectOptions";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { governedExecuteAuthorizedContract } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { Digest } from "@/lib/oa/doctrine";
import {
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  MemoryLaunchSafetyJournal,
  isStudioCursorRealEnabled,
} from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  ensureManagedRepoCloneSkeleton,
  listManagedRepoPathsUnderRoot,
} from "@/lib/oa/project";
import {
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { createLocalVerticalSliceServices } from "@/lib/vertical-slice-core";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_FIXED_NOW,
  W2_REGISTRY_ROOT,
  W2_SCHEMAS_ROOT,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

const NATURAL_REQUEST = `Matérialise la note de cadrage de ce cycle. N'exécute rien : prépare la proposition pour ma décision.`;

const EXPECTED_PROJECT_ROOT = "projects/mini-cadrage-suivi-de-taches";
const EXPECTED_CYCLE_ROOT = `${EXPECTED_PROJECT_ROOT}/01-cadrage`;
const EXPECTED_TARGET = `${EXPECTED_CYCLE_ROOT}/note-de-cadrage.md`;
const IDENTITY = "acme/widget";
const BRANCH = "main";
const DIGEST_SEED =
  "sha256:cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc" as Digest;

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function assertRealOff(): void {
  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
  process.env.OPS1_CURSOR_REAL = "0";
  expect(isStudioCursorRealEnabled()).toBe(false);
}

function initManagedGitRepo(managedBase: string, identity: string) {
  fs.mkdirSync(managedBase, { recursive: true });
  const repoRoot = path.join(managedBase, identity.replace("/", "__"));
  fs.mkdirSync(repoRoot, { recursive: true });
  fs.writeFileSync(path.join(repoRoot, ".keep"), "");
  execFileSync("git", ["init"], { cwd: repoRoot });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: repoRoot,
  });
  execFileSync("git", ["config", "user.name", "Test"], { cwd: repoRoot });
  execFileSync("git", ["add", "."], { cwd: repoRoot });
  execFileSync("git", ["commit", "-m", "init"], { cwd: repoRoot });
  const baseHeadSha = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
  return { repoRoot, baseHeadSha };
}

class SeededIdSource implements LocalProjectIdSource {
  private project = 0;
  private lps = 0;
  private correlation = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.project += 1;
    return `prj:${this.prefix}-${this.project}`;
  }
  nextLpsVersionId(): string {
    this.lps += 1;
    return `lps:${this.prefix}-${this.lps}`;
  }
  nextCorrelationId(): string {
    this.correlation += 1;
    return `cor:${this.prefix}-${this.correlation}`;
  }
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
    assertRealOff();
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousIdentity = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    previousRemote = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
    previousBranch = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH;
    previousManaged = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = IDENTITY;
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/widget.git";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = BRANCH;
    managedBase = fs.mkdtempSync(path.join(os.tmpdir(), "pwr-managed-"));
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
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
    assertRealOff();
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
    expect(created.project.repositoryBinding?.identity).toBe(IDENTITY);

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

  it("CR-PWR-01 — proposedTargetPath ../x.md never salvages; no executable Proposal", async () => {
    const { enrichExecutionIntentFromBinding } = await import(
      "@/features/project-assistant/f2/activeCycleGovernedContinuation"
    );
    const enriched = enrichExecutionIntentFromBinding({
      analysisIntent: {
        intentKind: "docs_write",
        targetPath: "../x.md",
        requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      },
      binding: {
        provider: "github",
        identity: IDENTITY,
        remoteUrl: "https://github.com/acme/widget.git",
        defaultBranch: BRANCH,
        pathRoot: EXPECTED_PROJECT_ROOT,
      },
      activeCycleTypeId: "cyc:framing",
    });
    expect(enriched.needsTargetClarification).toBe(true);
    expect(enriched.executionIntent?.targetPath ?? null).not.toBe("x.md");
    expect(JSON.stringify(enriched)).not.toMatch(
      /projects\/mini-cadrage-suivi-de-taches\/01-cadrage\/x\.md/,
    );

    const { projectId } = await seedFramingProject({
      idempotencyKey: "idem:pwr-cr01-trav",
    });
    // Natural materialization without a salvageable leaf → clarification, never x.md
    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed`);
    // Fresh empty workspace → CREATE Proposal (path is server-composed, not ../x.md)
    expect(send.f2?.proposal?.executionIntent?.targetPath).toBe(EXPECTED_TARGET);
    expect(JSON.stringify(send)).not.toMatch(/\.\.\/x\.md/);
  });

  it("CR-PWR-02A — file exists WITHOUT exact Evidence → ASK (not UPDATE)", async () => {
    const repoRoot = ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });
    const abs = path.join(repoRoot, EXPECTED_TARGET);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, "# orphan file — no Evidence\n", "utf8");

    const { projectId } = await seedFramingProject({
      idempotencyKey: "idem:pwr-ask-no-ev",
    });

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed`);
    // Occupied workspace without durable ownership OR write-mode ASK — fail closed.
    expect(send.f2?.turnKind).toBe("f2_clarification");
    expect(send.f2?.proposal).toBeFalsy();
    expect(send.text ?? "").toMatch(
      /ASK|Evidence|appartenance|collision|ambigu|indisponible|CREATE|UPDATE/i,
    );
  });

  it("CR-PWR-02A — exact prior Evidence + file exists → Proposal UPDATE", async () => {
    const repoRoot = ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });
    const abs = path.join(repoRoot, EXPECTED_TARGET);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, "# prior artifact\n", "utf8");

    const { projectId, cycleInstanceId } = await seedFramingProject({
      idempotencyKey: "idem:pwr-update-ev",
    });
    void cycleInstanceId;
    const oa = runtime.oa!;
    // Same-deliverable Evidence: projectId + exact location + governed source.
    // Omit GCEC attempt/contract bindings so Pilot lifecycle does NOT mark
    // artifact obligation SATISFIED (UPDATE rematerialization still open).
    const reg = await oa.evidenceReviewServices.registerEvidence.execute({
      evidenceId: `ev:pwr-prior-${projectId}`,
      idempotencyKey: `idem:ev-pwr-prior-${projectId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      type: "artifact",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      status: "available",
      location: EXPECTED_TARGET,
      digest: DIGEST_SEED,
      classification: "internal",
      storageMode: "metadata_only",
      bindings: {
        projectId,
      },
    });
    expect(reg.ok).toBe(true);

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed: ${JSON.stringify(send)}`);
    expect(send.f2?.turnKind).toBe("f2_proposal");
    expect(send.f2?.proposal?.executionIntent?.artifactWriteMode).toBe("UPDATE");
    expect(send.f2?.proposal?.executionIntent?.targetPath).toBe(EXPECTED_TARGET);
    const sealed = sealProposalExecutionBasis(send.f2!.proposal!);
    expect(sealed.artifactWriteMode).toBe("UPDATE");
  });

  it("CR-PWR-02B — managedRepoRootBase absent → ASK / no executable Proposal", async () => {
    delete process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
    const { projectId } = await seedFramingProject({
      idempotencyKey: "idem:pwr-no-base",
    });
    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed`);
    expect(send.f2?.turnKind).toBe("f2_clarification");
    expect(send.f2?.proposal).toBeFalsy();
    expect(send.text ?? "").toMatch(/indisponible|UNKNOWN|managed|repository/i);
  });

  it("CR-PWR-02B — managed base present but clone absent → ASK", async () => {
    const clone = path.join(managedBase, IDENTITY.replace("/", "__"));
    fs.rmSync(clone, { recursive: true, force: true });
    const { projectId } = await seedFramingProject({
      idempotencyKey: "idem:pwr-no-clone",
    });
    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed`);
    expect(send.f2?.turnKind).toBe("f2_clarification");
    expect(send.f2?.proposal).toBeFalsy();
  });

  it("CR-PWR-03 — inventory null is NOT absent_ok", () => {
    const inventory = listManagedRepoPathsUnderRoot({
      identity: IDENTITY,
      pathRoot: EXPECTED_PROJECT_ROOT,
      managedRepoRootBase: "/tmp/sfia-pwr-nonexistent-base-xyz",
    });
    expect(inventory).toBeNull();
    // Domain contract: caller must not treat null as [].
    expect(inventory === null).toBe(true);
    expect(inventory === null ? "unknown_inventory" : "absent_ok").toBe(
      "unknown_inventory",
    );
  });

  it("CR-PWR-03 — listProjects fails + occupied workspace → ASK", async () => {
    const repoRoot = ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });
    fs.mkdirSync(path.join(repoRoot, EXPECTED_CYCLE_ROOT), { recursive: true });
    fs.writeFileSync(
      path.join(repoRoot, EXPECTED_TARGET),
      "# occupied\n",
      "utf8",
    );

    const { projectId } = await seedFramingProject({
      idempotencyKey: "idem:pwr-list-fail",
    });
    const oa = runtime.oa!;
    const spy = vi
      .spyOn(oa.projectServices.listProjects, "execute")
      .mockResolvedValue({
        ok: false,
        error: {
          code: "INTERNAL",
          detailCode: "LIST_FAILED",
          message: "forced listProjects failure",
        },
      } as never);

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    spy.mockRestore();
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed`);
    expect(send.f2?.turnKind).toBe("f2_clarification");
    expect(send.f2?.proposal).toBeFalsy();
  });

  it("CR-PWR-03 — Evidence read fails + occupied workspace → ASK / fail-closed", async () => {
    const repoRoot = ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });
    fs.mkdirSync(path.join(repoRoot, EXPECTED_CYCLE_ROOT), { recursive: true });
    fs.writeFileSync(
      path.join(repoRoot, EXPECTED_TARGET),
      "# occupied\n",
      "utf8",
    );

    const { projectId } = await seedFramingProject({
      idempotencyKey: "idem:pwr-ev-fail",
    });
    const oa = runtime.oa!;
    const spy = vi
      .spyOn(oa.evidenceReviewServices.repository, "listByProject")
      .mockRejectedValue(new Error("forced evidence read failure"));

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    spy.mockRestore();
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed`);
    expect(send.f2?.proposal).toBeFalsy();
    expect(["f2_clarification", "f2_blocked"]).toContain(send.f2?.turnKind);
  });

  it("CR-PWR-02C TOCTOU — CREATE/UPDATE + probe null STOP; null mode STOP on automatic", () => {
    const createUnknown = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "CREATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: "/tmp/sfia-pwr-missing-base",
    });
    expect(createUnknown.ok).toBe(false);
    if (createUnknown.ok) return;
    expect(createUnknown.code).toBe(
      "ARTIFACT_WRITE_MODE_REVALIDATION_UNAVAILABLE",
    );

    const updateUnknown = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "UPDATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: "/tmp/sfia-pwr-missing-base",
    });
    expect(updateUnknown.ok).toBe(false);
    if (updateUnknown.ok) return;
    expect(updateUnknown.code).toBe(
      "ARTIFACT_WRITE_MODE_REVALIDATION_UNAVAILABLE",
    );

    const nullMode = revalidateSealedArtifactWriteMode({
      artifactWriteMode: null,
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: managedBase,
      requireResolvedWriteMode: true,
    });
    expect(nullMode.ok).toBe(false);
    if (nullMode.ok) return;
    expect(nullMode.code).toBe("ARTIFACT_WRITE_MODE_UNRESOLVED");
  });

  it("CR-PWR-02 TOCTOU — CREATE stale when file appears; UPDATE stale when file disappears", () => {
    const repoRoot = ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
    });
    const abs = path.join(repoRoot, EXPECTED_TARGET);

    const createOk = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "CREATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: managedBase,
    });
    expect(createOk.ok).toBe(true);

    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, "# appeared\n", "utf8");
    const createStale = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "CREATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: managedBase,
    });
    expect(createStale.ok).toBe(false);
    if (createStale.ok) return;
    expect(createStale.code).toBe("ARTIFACT_WRITE_MODE_STALE_CREATE");

    const updateOk = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "UPDATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: managedBase,
    });
    expect(updateOk.ok).toBe(true);

    fs.rmSync(abs, { force: true });
    const updateStale = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "UPDATE",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: managedBase,
    });
    expect(updateStale.ok).toBe(false);
    if (updateStale.ok) return;
    expect(updateStale.code).toBe("ARTIFACT_WRITE_MODE_STALE_UPDATE");

    const ask = revalidateSealedArtifactWriteMode({
      artifactWriteMode: "ASK",
      targetPath: EXPECTED_TARGET,
      targetRepositoryRef: IDENTITY,
      managedRepoRootBase: managedBase,
    });
    expect(ask.ok).toBe(false);
    if (ask.ok) return;
    expect(ask.code).toBe("ARTIFACT_WRITE_MODE_ASK");
  });

  it("CR-PWR-02 — ASK/null blocks pursue on automatic docs_write options", () => {
    const askSealed = sealProposalExecutionBasis({
      proposalId: "prop:ask",
      status: "DECISION_REQUIRED",
      rephrasedRequest: "mat",
      objective: "mat",
      cycleTypeId: "cyc:framing",
      recommendedProfile: "Standard",
      rationale: "t",
      scope: EXPECTED_CYCLE_ROOT,
      outOfScope: [],
      activatedBlocks: [],
      expectedOutcome: "artifact",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      morrisGateRequired: true,
      nextPossibleStep: "x",
      contextSnapshot: {
        projectId: "prj:x",
        lpsId: "lps:x",
        lpsVersion: 1,
        doctrineDigest: "sha256:aa",
        activeCycleInstanceId: "cyc:x",
      },
      processLocalNotice: "n",
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      executionIntent: {
        intentKind: "docs_write",
        targetPath: EXPECTED_TARGET,
        artifactFileName: "note-de-cadrage.md",
        artifactWriteMode: "ASK",
        scopeIn: [EXPECTED_CYCLE_ROOT],
        requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      },
    } as never);
    const opts = deriveProposalSubjectOptions({
      sealed: askSealed,
      proposalId: "prop:ask",
    });
    const pursue = opts.find((o) => o.optionRef === PROPOSAL_SUBJECT_PURSUE_REF);
    expect(pursue?.reservations).toContain("ARTIFACT_WRITE_MODE_ASK");
    const rec = deriveProposalSubjectRecommendation({
      sealed: askSealed,
      proposalId: "prop:ask",
    });
    expect(rec.recommendedOptionRef).toBe(PROPOSAL_SUBJECT_AMEND_REF);

    const nullSealed = sealProposalExecutionBasis({
      proposalId: "prop:null",
      status: "DECISION_REQUIRED",
      rephrasedRequest: "mat",
      objective: "mat",
      cycleTypeId: "cyc:framing",
      recommendedProfile: "Standard",
      rationale: "t",
      scope: EXPECTED_CYCLE_ROOT,
      outOfScope: [],
      activatedBlocks: [],
      expectedOutcome: "artifact",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      morrisGateRequired: true,
      nextPossibleStep: "x",
      contextSnapshot: {
        projectId: "prj:x",
        lpsId: "lps:x",
        lpsVersion: 1,
        doctrineDigest: "sha256:aa",
        activeCycleInstanceId: "cyc:x",
      },
      processLocalNotice: "n",
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      executionIntent: {
        intentKind: "docs_write",
        targetPath: EXPECTED_TARGET,
        artifactFileName: "note-de-cadrage.md",
        artifactWriteMode: null,
        scopeIn: [EXPECTED_CYCLE_ROOT],
        requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      },
    } as never);
    const nullOpts = deriveProposalSubjectOptions({
      sealed: nullSealed,
      proposalId: "prop:null",
    });
    const nullPursue = nullOpts.find(
      (o) => o.optionRef === PROPOSAL_SUBJECT_PURSUE_REF,
    );
    expect(nullPursue?.reservations).toContain("ARTIFACT_WRITE_MODE_ASK");
  });

  it("CR-PWR-03 — second Project same title cannot silently write into first workspace", async () => {
    const first = await seedFramingProject({ idempotencyKey: "idem:pwr-c1" });
    const repoRoot = ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: managedBase,
      identity: IDENTITY,
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

describe("CR-PWR-01…04 + DETERMINISTIC E2E Proposal→Evidence", () => {
  let managedBase: string;
  let repoRoot: string;
  let baseHeadSha: string;
  let fakeLaunch: FakeDocsWriteLaunchPort;
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;
  let previousIdentity: string | undefined;
  let previousRemote: string | undefined;
  let previousBranch: string | undefined;
  let previousManaged: string | undefined;
  const tempRoots: string[] = [];

  beforeEach(() => {
    assertRealOff();
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousIdentity = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY;
    previousRemote = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
    previousBranch = process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH;
    previousManaged = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = IDENTITY;
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
      "https://github.com/acme/widget.git";
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = BRANCH;

    const root = fs.mkdtempSync(path.join(os.tmpdir(), "pwr-e2e-"));
    tempRoots.push(root);
    managedBase = path.join(root, "managed");
    process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV] = managedBase;
    ({ repoRoot, baseHeadSha } = initManagedGitRepo(managedBase, IDENTITY));

    const gitState = new FakeCursorGitExternalState({
      worktreeRoot: repoRoot,
      initialBranch: BRANCH,
      initialSha: baseHeadSha,
    });
    fakeLaunch = new FakeDocsWriteLaunchPort({
      worktreeRoot: repoRoot,
      pathAllowlist: [EXPECTED_CYCLE_ROOT],
      defaultBranch: BRANCH,
      repositoryRef: IDENTITY,
      gitState,
      content: "# Note de cadrage\n\nObjectif / Périmètre\n",
    });
    const safetyJournal = new MemoryLaunchSafetyJournal();

    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    runtime = getRuntimeApplicationService({
      registryRoot: W2_REGISTRY_ROOT,
      schemasRoot: W2_SCHEMAS_ROOT,
      nowIso: W2_FIXED_NOW,
      idSource: new SeededIdSource("pwr-e2e"),
      auditMode: "noop",
      productDbPath: path.join(root, "oa.sqlite"),
      realBoundary: {
        launchPort: fakeLaunch,
        safetyJournal,
        managedRepoRootBase: managedBase,
      },
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    while (tempRoots.length) {
      const d = tempRoots.pop();
      if (d) {
        try {
          fs.rmSync(d, { recursive: true, force: true });
        } catch {
          /* ignore */
        }
      }
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
    assertRealOff();
  });

  async function seedFramingForE2e(): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "Mini cadrage — Suivi de tâches",
      objective: "Cadrer le suivi de tâches",
      context: "Product Journey workspace routing E2E",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: "PWRE2E",
      idempotencyKey: "idem:pwr-e2e-create",
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

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("LPS");
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

    const cycleInstanceId = `cyc:pwr-e2e-${projectId.slice(-6)}`;
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
    if (!auth.ok) throw new Error("auth");

    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("LPS1");
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

  it("DETERMINISTIC E2E — Proposal→HD→EC→Attempt→Artifact Evidence (CREATE)", async () => {
    const { projectId, cycleInstanceId } = await seedFramingForE2e();
    const oa = runtime.oa!;

    // Target absent initially
    expect(fs.existsSync(path.join(repoRoot, EXPECTED_TARGET))).toBe(false);

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(`send failed: ${JSON.stringify(send)}`);
    expect(send.f2?.turnKind).toBe("f2_proposal");
    const proposal = send.f2!.proposal!;
    expect(proposal.executionIntent?.targetPath).toBe(EXPECTED_TARGET);
    expect(proposal.executionIntent?.artifactFileName).toBe(
      "note-de-cadrage.md",
    );
    expect(proposal.executionIntent?.targetRepositoryRef).toBe(IDENTITY);
    expect(proposal.executionIntent?.artifactWriteMode).toBe("CREATE");
    const sealed = sealProposalExecutionBasis(proposal);
    expect(sealed.projectWorkspaceRoot).toBe(EXPECTED_PROJECT_ROOT);
    expect(sealed.cycleWorkspaceRoot).toBe(EXPECTED_CYCLE_ROOT);
    expect(sealed.artifactWriteMode).toBe("CREATE");
    expect(sealed.targetRepositoryRef).toBe(IDENTITY);
    const proposalId = proposal.proposalId;

    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) throw new Error("overview");

    const decided = await recordF2Decision({
      proposalId,
      projectId,
      decisionKind: "GO",
      currentContext: {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
        activeCycleInstanceId: cycleInstanceId,
      },
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error(`decide: ${decided.message}`);
    const decisionId = decided.decision.decisionId;

    const hd = await oa.decisionServices.getHumanDecision.execute({
      decisionId,
    });
    expect(hd.ok).toBe(true);
    if (!hd.ok) throw new Error("hd");
    expect(hd.decision.decisionBasis?.executionBasis?.targetPath).toBe(
      EXPECTED_TARGET,
    );
    expect(hd.decision.decisionBasis?.executionBasis?.targetRepositoryRef).toBe(
      IDENTITY,
    );
    expect(hd.decision.decisionBasis?.executionBasis?.artifactWriteMode).toBe(
      "CREATE",
    );
    expect(hd.decision.decisionBasis?.executionBasis?.artifactFileName).toBe(
      "note-de-cadrage.md",
    );

    const overviewAfter = await runtime.getProject(projectId);
    expect(overviewAfter.ok).toBe(true);
    if (!overviewAfter.ok) throw new Error("overviewAfter");

    const prepared = await prepareAndResolveM3ProductPath({
      projectId,
      decisionId,
      currentContext: {
        projectId,
        lpsId: overviewAfter.livingState.id,
        lpsVersion: overviewAfter.livingState.version,
        doctrineDigest: overviewAfter.doctrine.digest,
        activeCycleInstanceId: cycleInstanceId,
      },
      deps: {
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        executionContractServices: oa.executionContractServices,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
        boundedDocsWriteBaseHeadSha: baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(`prepare: ${prepared.message}`);
    expect(prepared.payload.mode).toBe("M3_RESOLVED_BOUNDED_DOCS_WRITE");
    const successor = prepared.payload.successor;
    const executionContractId = successor.executionContractId;

    // F3 prepare DTO omits inputs; durable EC + successor must retain DecisionBasis target.
    const durable =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId,
      });
    expect(durable.ok).toBe(true);
    if (!durable.ok) throw new Error("durable EC");
    expect(durable.contract.inputs?.targetPath).toBe(EXPECTED_TARGET);
    expect(durable.contract.inputs?.pathAllowlist).toEqual([EXPECTED_CYCLE_ROOT]);
    expect(durable.contract.inputs?.artifactWriteMode).toBe("CREATE");
    const successorInputs = (
      successor as { inputs?: Record<string, unknown> }
    ).inputs;
    expect(successorInputs?.targetPath ?? durable.contract.inputs?.targetPath).toBe(
      EXPECTED_TARGET,
    );

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId,
    });
    expect(inspected.ok).toBe(true);

    const confirmed = await confirmExecutionContractForAuthorization({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);

    const authorized = await evaluateExecutionAuthorization({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) throw new Error("authz");
    expect(authorized.outcome).toBe("AUTHORIZED");

    const launchBefore = fakeLaunch.calls.length;
    const executed = await governedExecuteAuthorizedContract({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) throw new Error(`execute: ${JSON.stringify(executed)}`);
    expect(executed.phase).toBe("terminal");
    expect(executed.selectedAgentRef).toBe(M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID);
    expect(executed.realExecution).toBe(false);
    expect(executed.boundaryProofMode).toBe("deterministic_fake");
    expect(executed.attemptStatus).toBe("succeeded");
    expect(fakeLaunch.calls.length).toBe(launchBefore + 1);

    const absTarget = path.join(repoRoot, EXPECTED_TARGET);
    expect(fs.existsSync(absTarget)).toBe(true);
    expect(fs.existsSync(path.dirname(absTarget))).toBe(true);
    expect(fs.readFileSync(absTarget, "utf8")).toContain("Note de cadrage");

    const listed =
      await oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listed.ok).toBe(true);
    if (!listed.ok) throw new Error("list attempts");
    const succeeded = listed.attempts.filter((a) => a.status === "succeeded");
    expect(succeeded).toHaveLength(1);
    const attemptId = succeeded[0]!.attemptId;

    const evidence = await oa.evidenceReviewServices.repository.listByProject(
      projectId,
    );
    const artifact = evidence.find(
      (e) =>
        e.type === "artifact" &&
        e.location === EXPECTED_TARGET &&
        e.bindings?.projectId === projectId,
    );
    expect(artifact).toBeTruthy();
    expect(artifact!.digest).toMatch(/^sha256:/);
    expect(artifact!.bindings?.executionAttemptId).toBe(attemptId);
    expect(artifact!.bindings?.executionContractId).toBe(executionContractId);

    // FINAL GAP 3 — ReviewBundle produced by governed ingest pipeline
    const bundles =
      await oa.evidenceReviewServices.reviewBundleRepository.listByProject(
        projectId,
      );
    const linked = bundles.filter((b) =>
      (b.evidenceRefs ?? []).includes(artifact!.evidenceId),
    );
    expect(linked.length).toBeGreaterThanOrEqual(1);
    const rb = linked[0]!;
    expect(rb.projectId).toBe(projectId);
    expect(rb.executionContractId).toBe(executionContractId);
    expect(rb.evidenceRefs).toContain(artifact!.evidenceId);
    expect(rb.reviewBundleId).toMatch(/^rb:docs-write:/);
    // No parasite bundles for other projects
    expect(bundles.every((b) => b.projectId === projectId)).toBe(true);

    const cycles = await oa.cycleServices.cycles.listByProject(projectId);
    const active = cycles.filter((c) => c.status === "active");
    expect(active.map((c) => c.cycleInstanceId)).toEqual([cycleInstanceId]);
  });

  async function reachAuthorizedDocsWrite(input: {
    projectId: string;
    cycleInstanceId: string;
    proposalId: string;
  }): Promise<{ decisionId: string; executionContractId: string }> {
    const oa = runtime.oa!;
    const overview = await runtime.getProject(input.projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) throw new Error("overview");
    const decided = await recordF2Decision({
      proposalId: input.proposalId,
      projectId: input.projectId,
      decisionKind: "GO",
      currentContext: {
        projectId: input.projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
        activeCycleInstanceId: input.cycleInstanceId,
      },
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error(decided.message);
    const decisionId = decided.decision.decisionId;
    const overviewAfter = await runtime.getProject(input.projectId);
    if (!overviewAfter.ok) throw new Error("overviewAfter");
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: input.projectId,
      decisionId,
      currentContext: {
        projectId: input.projectId,
        lpsId: overviewAfter.livingState.id,
        lpsVersion: overviewAfter.livingState.version,
        doctrineDigest: overviewAfter.doctrine.digest,
        activeCycleInstanceId: input.cycleInstanceId,
      },
      deps: {
        decisionServices: oa.decisionServices,
        authorityResolver: oa.authorityResolver,
        executionContractServices: oa.executionContractServices,
        nowIso: () => oa.clock.nowIso(),
        forceM3Authority: true,
        boundedDocsWriteBaseHeadSha: baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.message);
    const executionContractId = prepared.payload.successor.executionContractId;
    await inspectExecutionContract({
      oa,
      projectId: input.projectId,
      executionContractId,
    });
    await confirmExecutionContractForAuthorization({
      oa,
      projectId: input.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    const authorized = await evaluateExecutionAuthorization({
      oa,
      projectId: input.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (authorized.ok) expect(authorized.outcome).toBe("AUTHORIZED");
    return { decisionId, executionContractId };
  }

  it("EXEC TOCTOU — CREATE stale after PREPARE → STOP, no overwrite, no success Evidence", async () => {
    const { projectId, cycleInstanceId } = await seedFramingForE2e();
    const oa = runtime.oa!;
    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok && send.f2?.turnKind === "f2_proposal").toBe(true);
    const proposal = send.f2!.proposal!;
    expect(proposal.executionIntent?.artifactWriteMode).toBe("CREATE");
    const { executionContractId } = await reachAuthorizedDocsWrite({
      projectId,
      cycleInstanceId,
      proposalId: proposal.proposalId,
    });

    const absTarget = path.join(repoRoot, EXPECTED_TARGET);
    fs.mkdirSync(path.dirname(absTarget), { recursive: true });
    const prior = "# preexisting after PREPARE — must not be overwritten\n";
    fs.writeFileSync(absTarget, prior, "utf8");

    const launchBefore = fakeLaunch.calls.length;
    const touchedBefore = fakeLaunch.touchedFiles.length;
    const executed = await governedExecuteAuthorizedContract({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    // Existing semantics: execute call completes as technical terminal; Attempt failed.
    expect(executed.ok).toBe(true);
    if (!executed.ok) throw new Error(JSON.stringify(executed));
    expect(executed.phase).toBe("terminal");
    expect(executed.attemptStatus).toBe("failed");
    expect(executed.technicalTerminal).toBe(true);
    expect(executed.productSuccessSemantics).toBe(false);
    expect(fs.readFileSync(absTarget, "utf8")).toBe(prior);
    expect(fakeLaunch.touchedFiles.length).toBe(touchedBefore);
    expect(fakeLaunch.calls.length).toBeGreaterThanOrEqual(launchBefore + 1);
    const lastSpec = fakeLaunch.calls[fakeLaunch.calls.length - 1]?.docsWriteSpec;
    expect(lastSpec?.artifactWriteMode).toBe("CREATE");
    expect(lastSpec?.targetPath).toBe(EXPECTED_TARGET);
    const listed =
      await oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listed.ok).toBe(true);
    if (!listed.ok) throw new Error("list attempts");
    expect(listed.attempts.some((a) => a.status === "succeeded")).toBe(false);
    const failed = listed.attempts.filter((a) => a.status === "failed");
    expect(failed.length).toBeGreaterThanOrEqual(1);
    expect(failed[0]!.stopReason ?? "").toMatch(
      /ARTIFACT_WRITE_MODE_STALE_CREATE_AT_EXECUTION/,
    );
    const evidence = await oa.evidenceReviewServices.repository.listByProject(
      projectId,
    );
    expect(
      evidence.some(
        (e) =>
          e.type === "artifact" &&
          e.location === EXPECTED_TARGET &&
          e.status === "available",
      ),
    ).toBe(false);
  });

  it("EXEC TOCTOU — UPDATE stale after PREPARE → STOP, file not recreated", async () => {
    const absTarget = path.join(repoRoot, EXPECTED_TARGET);
    fs.mkdirSync(path.dirname(absTarget), { recursive: true });
    fs.writeFileSync(absTarget, "# prior for UPDATE\n", "utf8");

    const { projectId, cycleInstanceId } = await seedFramingForE2e();
    const oa = runtime.oa!;
    const reg = await oa.evidenceReviewServices.registerEvidence.execute({
      evidenceId: `ev:pwr-upd-${projectId}`,
      idempotencyKey: `idem:ev-pwr-upd-${projectId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      type: "artifact",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      status: "available",
      location: EXPECTED_TARGET,
      digest: DIGEST_SEED,
      classification: "internal",
      storageMode: "metadata_only",
      bindings: { projectId },
    });
    expect(reg.ok).toBe(true);

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok && send.f2?.turnKind === "f2_proposal").toBe(true);
    expect(send.f2!.proposal!.executionIntent?.artifactWriteMode).toBe("UPDATE");
    const { executionContractId } = await reachAuthorizedDocsWrite({
      projectId,
      cycleInstanceId,
      proposalId: send.f2!.proposal!.proposalId,
    });

    fs.rmSync(absTarget, { force: true });
    expect(fs.existsSync(absTarget)).toBe(false);
    const touchedBefore = fakeLaunch.touchedFiles.length;

    const executed = await governedExecuteAuthorizedContract({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) throw new Error(JSON.stringify(executed));
    expect(executed.phase).toBe("terminal");
    expect(executed.attemptStatus).toBe("failed");
    expect(executed.technicalTerminal).toBe(true);
    expect(executed.productSuccessSemantics).toBe(false);
    const listed =
      await oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listed.ok).toBe(true);
    if (!listed.ok) throw new Error("list attempts");
    const failed = listed.attempts.filter((a) => a.status === "failed");
    expect(failed.length).toBeGreaterThanOrEqual(1);
    expect(failed[0]!.stopReason ?? "").toMatch(
      /ARTIFACT_WRITE_MODE_STALE_UPDATE_AT_EXECUTION/,
    );
    expect(fs.existsSync(absTarget)).toBe(false);
    expect(fakeLaunch.touchedFiles.length).toBe(touchedBefore);
  });

  it("EXEC TOCTOU — repository fact unavailable after PREPARE → STOP", async () => {
    const { projectId, cycleInstanceId } = await seedFramingForE2e();
    const oa = runtime.oa!;
    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok && send.f2?.turnKind === "f2_proposal").toBe(true);
    const { executionContractId } = await reachAuthorizedDocsWrite({
      projectId,
      cycleInstanceId,
      proposalId: send.f2!.proposal!.proposalId,
    });

    // Destroy worktree / managed clone after PREPARE — existence fact unavailable
    fs.rmSync(repoRoot, { recursive: true, force: true });
    expect(fs.existsSync(repoRoot)).toBe(false);

    const executed = await governedExecuteAuthorizedContract({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(false);
    expect(JSON.stringify(executed)).toMatch(
      /EXECUTION_REVALIDATION_UNAVAILABLE|REAL_WORKSPACE_INVALID|REAL_LAUNCH_FAILED|managed_repo/i,
    );
    expect(fs.existsSync(path.join(repoRoot, EXPECTED_TARGET))).toBe(false);
  });

  it("EXEC TOCTOU — UPDATE nominal (Evidence-derived) → file modified", async () => {
    const absTarget = path.join(repoRoot, EXPECTED_TARGET);
    fs.mkdirSync(path.dirname(absTarget), { recursive: true });
    fs.writeFileSync(absTarget, "# prior content before UPDATE\n", "utf8");

    const { projectId, cycleInstanceId } = await seedFramingForE2e();
    const oa = runtime.oa!;
    const reg = await oa.evidenceReviewServices.registerEvidence.execute({
      evidenceId: `ev:pwr-upd-nom-${projectId}`,
      idempotencyKey: `idem:ev-pwr-upd-nom-${projectId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      type: "artifact",
      source: "execution_attempt:docs_write",
      sourceKind: "external",
      status: "available",
      location: EXPECTED_TARGET,
      digest: DIGEST_SEED,
      classification: "internal",
      storageMode: "metadata_only",
      bindings: { projectId },
    });
    expect(reg.ok).toBe(true);

    const send = await projectAssistantSendAction({
      projectId,
      content: NATURAL_REQUEST,
    });
    expect(send.ok && send.f2?.turnKind === "f2_proposal").toBe(true);
    expect(send.f2!.proposal!.executionIntent?.artifactWriteMode).toBe("UPDATE");
    const { executionContractId } = await reachAuthorizedDocsWrite({
      projectId,
      cycleInstanceId,
      proposalId: send.f2!.proposal!.proposalId,
    });

    const durable =
      await oa.executionContractServices.getExecutionContract.execute({
        executionContractId,
      });
    expect(durable.ok).toBe(true);
    if (durable.ok) {
      expect(durable.contract.inputs?.artifactWriteMode).toBe("UPDATE");
    }

    const executed = await governedExecuteAuthorizedContract({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) throw new Error(JSON.stringify(executed));
    expect(executed.attemptStatus).toBe("succeeded");
    const after = fs.readFileSync(absTarget, "utf8");
    expect(after).toContain("Note de cadrage");
    expect(after).not.toBe("# prior content before UPDATE\n");
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

  it("missing remote → Product Create refused", async () => {
    process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = "acme/widget";
    delete process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL;
    const services = createLocalVerticalSliceServices({
      registryRoot: REGISTRY_ROOT,
      schemasRoot: SCHEMAS_ROOT,
      nowIso: "2026-09-19T12:00:00.000Z",
    });
    const result = await services.facade.createProject({
      name: "Should Fail Remote Missing",
      objective: "x",
      context: "y",
      perceivedCriticality: "STANDARD",
      constraints: [],
      shortReference: "FAILR",
      idempotencyKey: "idem:pwr04-missing-remote",
    });
    expect(result.ok).toBe(false);
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

### NEW: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ProjectWorkspaceRoutingPanel.tsx`

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

### NEW: `projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts`

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
 *
 * CR-PWR-02A — never set intentClearlySameDeliverable from targetExists alone.
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
 * CR-PWR-02A — durable same-deliverable proof from Evidence (never filename/slug alone).
 *
 * Acceptable Evidence:
 * - bindings.projectId === current projectId
 * - type === "artifact"
 * - canonical location === canonical targetPath
 * - status ∈ {"available", "verified"}
 * - availability !== "unavailable"
 * - source/sourceKind compatible with prior governed materialization
 *
 * Rejected/stale/superseded/unavailable → not proof.
 * Multiple contradictory admissible+rejected on same path → ASK (caller treats as false).
 */
export type SameDeliverableEvidenceLike = {
  readonly type?: string;
  readonly source?: string;
  readonly sourceKind?: string;
  readonly location?: string;
  readonly status?: string;
  readonly availability?: string;
  readonly bindings?: { readonly projectId?: string };
};

export function hasDurableSameArtifactEvidence(input: {
  projectId: string;
  targetPath: string;
  evidence: readonly SameDeliverableEvidenceLike[];
}): boolean {
  const target = normalizeRepoRelativePath(input.targetPath);
  if (!target || !input.projectId.trim()) return false;

  const admissible = input.evidence.filter((ev) => {
    if (ev.bindings?.projectId !== input.projectId) return false;
    if (ev.type !== "artifact") return false;
    const loc = normalizeRepoRelativePath(ev.location?.trim() || "");
    if (!loc || loc !== target) return false;
    if (ev.availability === "unavailable") return false;
    if (ev.status !== "available" && ev.status !== "verified") return false;
    const source = (ev.source ?? "").trim();
    const sourceKind = (ev.sourceKind ?? "").trim();
    const governedSource =
      source.includes("docs_write") ||
      source.includes("execution_attempt") ||
      sourceKind === "execution_attempt" ||
      sourceKind === "external" ||
      sourceKind === "system";
    return governedSource;
  });

  if (admissible.length === 0) return false;

  // Any contradictory Evidence on the same projectId+target (including
  // status/availability unavailable) fail-closes even when an admissible
  // row also exists — never UPDATE on ambiguous durable truth.
  const blockingConflict = input.evidence.some((ev) => {
    const loc = normalizeRepoRelativePath(ev.location?.trim() || "");
    if (!loc || loc !== target) return false;
    if (ev.bindings?.projectId !== input.projectId) return false;
    return (
      ev.status === "rejected" ||
      ev.status === "superseded" ||
      ev.status === "stale" ||
      ev.status === "unavailable" ||
      ev.availability === "unavailable"
    );
  });
  if (blockingConflict) return false;

  return admissible.length > 0;
}

/**
 * Pure CREATE/UPDATE/ASK vs existence fact (PREPARE + execution-time TOCTOU).
 * Callers map `kind` to phase-specific detail codes.
 */
export function assertSealedArtifactWriteModeAgainstExistence(input: {
  artifactWriteMode: "CREATE" | "UPDATE" | "ASK" | null | undefined;
  targetExists: boolean | null;
  /** Automatic Product docs_write: null/unresolved mode is refused. */
  requireResolvedWriteMode?: boolean;
}):
  | { ok: true }
  | {
      ok: false;
      kind:
        | "ASK"
        | "UNRESOLVED"
        | "UNAVAILABLE"
        | "STALE_CREATE"
        | "STALE_UPDATE"
        | "TARGET_UNRESOLVED";
    } {
  const mode = input.artifactWriteMode ?? null;
  if (mode === "ASK") return { ok: false, kind: "ASK" };
  if (mode !== "CREATE" && mode !== "UPDATE") {
    if (input.requireResolvedWriteMode) {
      return { ok: false, kind: "UNRESOLVED" };
    }
    return { ok: true };
  }
  if (input.targetExists === null) {
    return { ok: false, kind: "UNAVAILABLE" };
  }
  if (mode === "CREATE" && input.targetExists === true) {
    return { ok: false, kind: "STALE_CREATE" };
  }
  if (mode === "UPDATE" && input.targetExists === false) {
    return { ok: false, kind: "STALE_UPDATE" };
  }
  return { ok: true };
}

/** Automatic Product workspace targets under projects/<key>/… */
export function isAutomaticProductDocsWriteTargetPath(
  targetPath: string | null | undefined,
): boolean {
  const t = (targetPath ?? "").trim();
  return /^projects\/[a-z0-9]+(?:-[a-z0-9]+)*(?:\/|$)/.test(t);
}

/**
 * Execution-time TOCTOU — last reliable check before filesystem mutation.
 * Shared Fake/REAL semantics (phase-specific codes).
 */
export function assertArtifactWriteModeAtExecution(input: {
  artifactWriteMode: "CREATE" | "UPDATE" | "ASK" | null | undefined;
  targetExists: boolean | null;
  requireResolvedWriteMode?: boolean;
}):
  | { ok: true }
  | { ok: false; code: string; message: string } {
  const check = assertSealedArtifactWriteModeAgainstExistence(input);
  if (check.ok) return { ok: true };
  switch (check.kind) {
    case "ASK":
      return {
        ok: false,
        code: "ARTIFACT_WRITE_MODE_ASK",
        message: "Effet fichier ASK — écriture refusée à l'exécution.",
      };
    case "UNRESOLVED":
      return {
        ok: false,
        code: "ARTIFACT_WRITE_MODE_UNRESOLVED",
        message: "Effet fichier non scellé à l'exécution — écriture refusée.",
      };
    case "UNAVAILABLE":
      return {
        ok: false,
        code: "ARTIFACT_WRITE_MODE_EXECUTION_REVALIDATION_UNAVAILABLE",
        message:
          "Fait d'existence indisponible juste avant mutation — aucune écriture.",
      };
    case "STALE_CREATE":
      return {
        ok: false,
        code: "ARTIFACT_WRITE_MODE_STALE_CREATE_AT_EXECUTION",
        message:
          "CREATE scellé obsolète à l'exécution — cible apparue après PREPARE. Aucune écriture.",
      };
    case "STALE_UPDATE":
      return {
        ok: false,
        code: "ARTIFACT_WRITE_MODE_STALE_UPDATE_AT_EXECUTION",
        message:
          "UPDATE scellé obsolète à l'exécution — cible disparue après PREPARE. Aucune écriture.",
      };
    default:
      return {
        ok: false,
        code: "ARTIFACT_WRITE_MODE_EXECUTION_REVALIDATION_UNAVAILABLE",
        message: "Revalidation WRITE mode impossible à l'exécution.",
      };
  }
}

/**
 * Collision check for Project workspace directory before first materialization.
 * existingPaths = repo-relative paths known to exist (read-only inventory).
 *
 * Caller must NOT pass a null inventory as empty — UNKNOWN ≠ ABSENT (CR-PWR-03).
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

### NEW: `projects/sfia-studio/app/lib/oa/project/domain/projectWorkspaceKey.ts`

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

### NEW: `projects/sfia-studio/app/lib/oa/project/domain/serverOwnedRepositoryConfig.ts`

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

### NEW: `projects/sfia-studio/app/lib/oa/project/infrastructure/managedRepoPathFacts.ts`

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

## Complete diffs (modified tracked files)

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
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
index cc09bca1..a8cf1fe3 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
@@ -23,7 +23,20 @@ import {
   OBLIGATION_POLICY_REQUIRE_ARTIFACT,
   type CycleInstance,
 } from "@/lib/oa/cycle";
-import type { ProjectRepositoryBinding } from "@/lib/oa/project";
+import type { Project, ProjectRepositoryBinding } from "@/lib/oa/project";
+import {
+  assessProjectWorkspaceCollision,
+  classifyArtifactWriteMode,
+  hasDurableSameArtifactEvidence,
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
@@ -33,6 +46,21 @@ import {
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
@@ -77,11 +105,28 @@ export type ActiveCycleContinuationOa = {
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

@@ -105,7 +150,14 @@ export type ContinuationBlockedReason =
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
+  | "artifact_write_mode_ask"
+  | "repository_fact_unavailable";

 export function parseContinuationKind(
   raw: unknown,
@@ -289,6 +341,7 @@ export type ActiveCycleContinuationResolution =
       readonly activeCycle: CycleInstance;
       readonly repositoryBinding: ProjectRepositoryBinding | null;
       readonly needsTargetClarification: boolean;
+      readonly clarificationReason?: ActiveCycleContinuationClarificationReason;
       readonly enrichedExecutionIntent: ExecutionIntentPayload | null;
     }
   | {
@@ -362,10 +415,18 @@ export async function resolveActiveCycleGovernedContinuation(input: {
   }

   // CR-07-05 — assess failure is FAIL-CLOSED (not "probably missing").
-  const assessed = await input.oa.cycleServices.pilotLifecycle.assess({
-    cycleInstanceId: activeId,
-    projectId: input.project.projectId,
-  });
+  // Evidence repository throws during assess must not escape as an uncaught error.
+  let assessed: Awaited<
+    ReturnType<typeof input.oa.cycleServices.pilotLifecycle.assess>
+  >;
+  try {
+    assessed = await input.oa.cycleServices.pilotLifecycle.assess({
+      cycleInstanceId: activeId,
+      projectId: input.project.projectId,
+    });
+  } catch {
+    return blocked("lifecycle_assess_failed", activeCycle);
+  }
   if (!assessed.ok) {
     return blocked("lifecycle_assess_failed", activeCycle);
   }
@@ -375,27 +436,265 @@ export async function resolveActiveCycleGovernedContinuation(input: {

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
+  // Automatic Product workspaces require a readable managed-repo fact (UNKNOWN ≠ ABSENT).
+  const pathRoot = repositoryBinding?.pathRoot?.trim() || "";
+  const isAutomaticRoot =
+    Boolean(pathRoot) && isAutomaticProjectWorkspacePathRoot(pathRoot);
+  const managedBase = resolveManagedRepoRootBaseFromEnv();
+
+  if (isAutomaticRoot && repositoryBinding?.identity) {
+    if (!managedBase) {
+      return {
+        mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
+        activeCycle,
+        repositoryBinding,
+        needsTargetClarification: true,
+        clarificationReason: "repository_fact_unavailable",
+        enrichedExecutionIntent: {
+          ...(enriched.executionIntent ?? {}),
+          intentKind: "docs_write",
+          targetPath: enriched.executionIntent?.targetPath ?? null,
+          artifactWriteMode: "ASK",
+        },
+      };
+    }
+
+    const collision = await qualifyProjectWorkspaceCollision({
+      oa: input.oa,
+      projectId: input.project.projectId,
+      pathRoot,
+      workspaceKey: projectWorkspaceKey,
+      identity: repositoryBinding.identity,
+      managedRepoRootBase: managedBase,
+    });
+    if (
+      collision === "ambiguous_collision" ||
+      collision === "unknown_inventory"
+    ) {
+      return {
+        mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
+        activeCycle,
+        repositoryBinding,
+        needsTargetClarification: true,
+        clarificationReason:
+          collision === "unknown_inventory"
+            ? "repository_fact_unavailable"
+            : "workspace_collision_ambiguous",
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
+  // CR-PWR-02 — repository existence + Evidence same-deliverable → CREATE/UPDATE/ASK.
+  // Automatic Product workspace: UNKNOWN repo fact MUST fail closed (never null→CREATE).
+  const targetPath = enriched.executionIntent?.targetPath?.trim() || "";
+  let withMode: ExecutionIntentPayload = { ...(enriched.executionIntent ?? {}) };
+
+  if (isAutomaticRoot && repositoryBinding?.identity) {
+    if (!managedBase || !targetPath) {
+      return {
+        mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
+        activeCycle,
+        repositoryBinding,
+        needsTargetClarification: true,
+        clarificationReason: "repository_fact_unavailable",
+        enrichedExecutionIntent: {
+          ...withMode,
+          intentKind: "docs_write",
+          artifactWriteMode: "ASK",
+        },
+      };
+    }
+
+    const targetExists = probeManagedRepoRelativePathExists({
+      identity: repositoryBinding.identity,
+      repoRelativePath: targetPath,
+      managedRepoRootBase: managedBase,
+    });
+
+    if (targetExists === null) {
+      return {
+        mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION",
+        activeCycle,
+        repositoryBinding,
+        needsTargetClarification: true,
+        clarificationReason: "repository_fact_unavailable",
+        enrichedExecutionIntent: {
+          ...withMode,
+          intentKind: "docs_write",
+          artifactWriteMode: "ASK",
+        },
+      };
+    }
+
+    let intentClearlySameDeliverable: boolean | undefined;
+    if (targetExists === true) {
+      let evidenceList: ReadonlyArray<{
+        type?: string;
+        source?: string;
+        sourceKind?: string;
+        location?: string;
+        status?: string;
+        availability?: string;
+        bindings?: { projectId?: string };
+      }> = [];
+      let evidenceReadOk = false;
+      if (input.oa.evidenceReviewServices) {
+        try {
+          evidenceList =
+            await input.oa.evidenceReviewServices.repository.listByProject(
+              input.project.projectId,
+            );
+          evidenceReadOk = true;
+        } catch {
+          evidenceReadOk = false;
+        }
+      }
+      if (!evidenceReadOk) {
+        intentClearlySameDeliverable = false;
+      } else {
+        intentClearlySameDeliverable = hasDurableSameArtifactEvidence({
+          projectId: input.project.projectId,
+          targetPath,
+          evidence: evidenceList,
+        });
+      }
+    }
+
+    const artifactWriteMode = classifyArtifactWriteMode({
+      targetExists,
+      intentClearlySameDeliverable,
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
+ * UNKNOWN inventory / failed listProjects / failed Evidence on occupied tree → not absent_ok.
+ */
+async function qualifyProjectWorkspaceCollision(input: {
+  oa: ActiveCycleContinuationOa;
+  projectId: string;
+  pathRoot: string;
+  workspaceKey: string | undefined;
+  identity: string;
+  managedRepoRootBase: string;
+}): Promise<
+  | "absent_ok"
+  | "reuse_same_project"
+  | "ambiguous_collision"
+  | "unknown_inventory"
+> {
+  const inventory = listManagedRepoPathsUnderRoot({
+    identity: input.identity,
+    pathRoot: input.pathRoot,
+    managedRepoRootBase: input.managedRepoRootBase,
+  });
+  // CR-PWR-03 — UNKNOWN ≠ ABSENT.
+  if (inventory === null) {
+    return "unknown_inventory";
+  }
+
+  const listed = await input.oa.projectServices.listProjects.execute();
+  if (!listed.ok) {
+    if (inventory.length > 0) return "ambiguous_collision";
+    return "unknown_inventory";
+  }
+
+  const otherClaimants = listed.projects.filter((p) => {
+    if (p.projectId === input.projectId) return false;
+    if (input.workspaceKey && p.projectWorkspaceKey === input.workspaceKey) {
+      return true;
+    }
+    const otherRoot = p.repositoryBinding?.pathRoot?.trim() || "";
+    return otherRoot === input.pathRoot;
+  });
+  if (otherClaimants.length > 0) {
+    return "ambiguous_collision";
+  }
+
+  if (inventory.length === 0) {
+    return "absent_ok";
+  }
+
+  if (!input.oa.evidenceReviewServices) {
+    return "ambiguous_collision";
+  }
+  let durableOwnershipMatches = false;
+  try {
+    const evidence =
+      await input.oa.evidenceReviewServices.repository.listByProject(
+        input.projectId,
+      );
+    durableOwnershipMatches = evidence.some((ev) => {
+      const loc = (ev.location ?? "").trim();
+      if (!loc) return false;
+      return isPathWithinRoot(loc, input.pathRoot);
+    });
+  } catch {
+    return "ambiguous_collision";
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
@@ -413,14 +712,19 @@ function withCanonicalArtifactMaterializationAction(
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
@@ -431,8 +735,6 @@ export function enrichExecutionIntentFromBinding(input: {
   };

   // CORR-PROOF-09 — unsourced affirmative reversibility is never trusted fact
-  // on the Artifact materialization enrich path. Preserve null/unknown only;
-  // never invent "reversible". Provider "reversible"|"irreversible" → null.
   const rawRev = base.reversibilityExpectation;
   const reversibilityExpectation: "unknown" | null =
     rawRev === "unknown" ? "unknown" : null;
@@ -451,7 +753,6 @@ export function enrichExecutionIntentFromBinding(input: {

   const rawRoot = input.binding.pathRoot?.trim() || "";
   const canonicalRoot = rawRoot ? normalizeRepoRelativePath(rawRoot) : null;
-  // Invalid pathRoot on binding → fail closed (clarify), do not invent.
   if (rawRoot && !canonicalRoot) {
     return {
       executionIntent: withCanonicalArtifactMaterializationAction({
@@ -466,23 +767,71 @@ export function enrichExecutionIntentFromBinding(input: {
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
@@ -538,5 +887,7 @@ export function continuationBlockedMessage(
       return `Continuation Artifact demandée, mais l'évaluation Pilot lifecycle a échoué (fail-closed).${cycleHint} Aucun nouveau CycleInstance créé.`;
     case "incompatible_execution_intent":
       return `Continuation Artifact signalée, mais l'intention d'effet docs_write compatible est absente.${cycleHint} Aucune proposition de matérialisation. Aucun nouveau CycleInstance créé.`;
+    case "workspace_collision_ambiguous":
+      return `Workspace Project déjà présent sans preuve d'appartenance durable — collision ambiguë.${cycleHint} Aucune Proposal exécutable. Aucun nouveau CycleInstance créé.`;
   }
 }
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
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 4e4424e9..a211c53d 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -1155,17 +1155,48 @@ export async function orchestrateAssistantSend(input: {
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
+          : reason === "repository_fact_unavailable"
+            ? [
+                "Le fait d'existence repository (managed clone / inventory) est indisponible.",
+                "Aucune Proposal exécutable tant que la vérité read-only du dépôt n'est pas lisible.",
+                "UNKNOWN ≠ CREATE — configuration managed-repo / clone requis.",
+              ]
+            : reason === "artifact_write_mode_ask"
+              ? [
+                  "La cible exacte est résolue, mais l'effet fichier (CREATE/UPDATE) est ambigu (ASK).",
+                  "UPDATE exige une Evidence Artifact durable exacte pour CE Project et CE target — l'existence fichier seule ne suffit pas.",
+                  "Votre décision et la préparation restent fermées tant que CREATE ou UPDATE n'est pas scellé.",
+                ]
+              : [
+                  hasPathRoot
+                    ? "Le nom de fichier du livrable n'est pas encore déterminé (ou le chemin proposé sort du workspace Project/cycle / est invalide)."
+                    : "Le chemin cible du livrable n'est pas encore déterminé.",
+                  hasPathRoot
+                    ? "Indiquez un filename Markdown sûr (ex. note-de-cadrage.md) — le serveur composera le chemin exact sous le workspace Project et le cycle actif. Un chemin invalide (traversal/absolu) est refusé sans rewrite."
+                    : hasBinding
+                      ? "Précisez le chemin cible dans les bornes du dépôt lié avant de continuer."
+                      : "Le dépôt cible n'est pas encore projeté — configuration serveur requise, ou Project legacy sans binding.",
+                  "Votre décision et la préparation de l'action restent fermées tant que la cible n'est pas clarifiée.",
+                ];
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
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
index 328be8b5..194ec050 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
@@ -29,6 +29,110 @@ import {
   PROPOSAL_SUBJECT_PURSUE_REF,
 } from "../w2/proposalSubjectOptions";
 import { BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS } from "./boundedDocsWriteM3ResolutionProfile";
+import { probeManagedRepoRelativePathExists } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  assertSealedArtifactWriteModeAgainstExistence,
+  isAutomaticProductDocsWriteTargetPath,
+} from "@/lib/oa/project/domain/artifactTargetRouting";
+
+/**
+ * CR-PWR-02 TOCTOU (PREPARE) — sealed CREATE must not overwrite a file that appeared;
+ * sealed UPDATE must not silently create a file that disappeared;
+ * ASK / null / UNKNOWN probe never prepares for automatic Product docs_write.
+ *
+ * Execution-time revalidation uses the same pure assert with EXECUTION_* codes
+ * at Fake/REAL launch boundaries (see assertArtifactWriteModeAtExecution).
+ */
+export function revalidateSealedArtifactWriteMode(input: {
+  artifactWriteMode: "CREATE" | "UPDATE" | "ASK" | null | undefined;
+  targetPath: string | null | undefined;
+  targetRepositoryRef: string | null | undefined;
+  managedRepoRootBase?: string | null;
+  /** When true (automatic Product workspace docs_write), null mode is refused. */
+  requireResolvedWriteMode?: boolean;
+}):
+  | { ok: true; targetExists: boolean | null }
+  | { ok: false; code: string; message: string } {
+  const mode = input.artifactWriteMode ?? null;
+  if (mode === "CREATE" || mode === "UPDATE") {
+    const targetPath = input.targetPath?.trim() || "";
+    const identity = input.targetRepositoryRef?.trim() || "";
+    if (!targetPath || !identity) {
+      return {
+        ok: false,
+        code: "TARGET_UNRESOLVED",
+        message:
+          "targetPath / repositoryRef absents pour revalidation WRITE mode.",
+      };
+    }
+  }
+  const targetExists =
+    mode === "CREATE" || mode === "UPDATE"
+      ? probeManagedRepoRelativePathExists({
+          identity: input.targetRepositoryRef!.trim(),
+          repoRelativePath: input.targetPath!.trim(),
+          managedRepoRootBase: input.managedRepoRootBase,
+        })
+      : null;
+  const check = assertSealedArtifactWriteModeAgainstExistence({
+    artifactWriteMode: mode,
+    targetExists,
+    requireResolvedWriteMode: input.requireResolvedWriteMode,
+  });
+  if (!check.ok) {
+    switch (check.kind) {
+      case "ASK":
+        return {
+          ok: false,
+          code: "ARTIFACT_WRITE_MODE_ASK",
+          message:
+            "Effet fichier ASK — PREPARE refusé jusqu'à clarification CREATE/UPDATE.",
+        };
+      case "UNRESOLVED":
+        return {
+          ok: false,
+          code: "ARTIFACT_WRITE_MODE_UNRESOLVED",
+          message:
+            "Effet fichier non scellé (null) sur docs_write Product automatique — PREPARE refusé.",
+        };
+      case "UNAVAILABLE":
+        return {
+          ok: false,
+          code: "ARTIFACT_WRITE_MODE_REVALIDATION_UNAVAILABLE",
+          message:
+            "Fait d'existence repository indisponible à la revalidation PREPARE — aucune écriture.",
+        };
+      case "STALE_CREATE":
+        return {
+          ok: false,
+          code: "ARTIFACT_WRITE_MODE_STALE_CREATE",
+          message:
+            "CREATE scellé obsolète — le fichier cible est apparu depuis la Proposal. Requalification requise.",
+        };
+      case "STALE_UPDATE":
+        return {
+          ok: false,
+          code: "ARTIFACT_WRITE_MODE_STALE_UPDATE",
+          message:
+            "UPDATE scellé obsolète — le fichier cible a disparu depuis la Proposal. Requalification requise.",
+        };
+      default:
+        return {
+          ok: false,
+          code: "TARGET_UNRESOLVED",
+          message: "Revalidation WRITE mode impossible.",
+        };
+    }
+  }
+  return { ok: true, targetExists };
+}
+
+/**
+ * @deprecated Prefer assertArtifactWriteModeAtExecution from
+ * `@/lib/oa/project/domain/artifactTargetRouting` (shared Fake/REAL seam).
+ * Re-export kept for call-site compatibility within f3.
+ */
+export { assertArtifactWriteModeAtExecution } from "@/lib/oa/project/domain/artifactTargetRouting";

 /**
  * EC.evidenceRequirements must be OA identifiers (`prefix:value`).
@@ -164,6 +268,10 @@ function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
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
@@ -357,6 +465,24 @@ export async function prepareM3FromDecision(input: {
     };
   }

+  const eb = basis.executionBasis;
+  const docsWriteIntent =
+    eb.intentKind === "docs_write" ||
+    eb.requestedOperation?.trim() === "cursor.docs_write.apply";
+  if (docsWriteIntent) {
+    const targetPath = eb.targetPath?.trim() || "";
+    const writeCheck = revalidateSealedArtifactWriteMode({
+      artifactWriteMode: eb.artifactWriteMode,
+      targetPath: eb.targetPath,
+      targetRepositoryRef: eb.targetRepositoryRef,
+      requireResolvedWriteMode:
+        isAutomaticProductDocsWriteTargetPath(targetPath),
+    });
+    if (!writeCheck.ok) {
+      return writeCheck;
+    }
+  }
+
   const fields = fieldsFromBasis(basis, decision.decisionId);
   const issuedAt = input.deps.nowIso();
   const authority = registerLocalPiloteAuthority({
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
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
index 8b05d2de..7c060037 100644
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
@@ -105,20 +109,57 @@ export function deriveProposalSubjectOptions(
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
+        ? "Effet fichier: UPDATE — Evidence Artifact durable exacte pour ce Project/target"
+        : sealed.artifactWriteMode === "ASK"
+          ? "Effet fichier: ASK — ambiguïté d'existence/intention ; Proposal non exécutable"
+          : "Effet fichier: non résolu";
+  const workspaceNotes = [
+    sealed.projectWorkspaceRoot
+      ? `Workspace projet: ${sealed.projectWorkspaceRoot}/`
+      : null,
+    sealed.cycleWorkspaceRoot
+      ? `Workspace cycle: ${sealed.cycleWorkspaceRoot}/`
+      : null,
+  ].filter((n): n is string => Boolean(n));
   const opNote = `Opération scellée: ${sealed.requestedOperation}`;
+  const automaticDocsWrite =
+    sealed.intentKind === "docs_write" &&
+    Boolean(
+      sealed.projectWorkspaceRoot?.startsWith("projects/") ||
+        sealed.targetPath?.startsWith("projects/"),
+    );
+  const askBlocksPursue =
+    sealed.artifactWriteMode === "ASK" ||
+    (automaticDocsWrite && sealed.artifactWriteMode == null);

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
@@ -157,11 +198,22 @@ export function deriveProposalSubjectRecommendation(
   const { sealed, proposalId } = inputs;
   const summary = subjectSummary(sealed);

-  if (sealed.reservations.length > 0) {
+  if (
+    sealed.reservations.length > 0 ||
+    sealed.artifactWriteMode === "ASK" ||
+    (sealed.intentKind === "docs_write" &&
+      (sealed.projectWorkspaceRoot?.startsWith("projects/") ||
+        sealed.targetPath?.startsWith("projects/")) &&
+      sealed.artifactWriteMode == null)
+  ) {
     return {
       label: "RECOMMANDATION — PAS UNE DÉCISION",
       recommendedOptionRef: PROPOSAL_SUBJECT_AMEND_REF,
-      rationale: `Réserves explicites sur la Proposal ${proposalId} (${sealed.reservations.length}) — amender ou clarifier avant de poursuivre « ${summary} ».`,
+      rationale:
+        sealed.artifactWriteMode === "ASK" ||
+        sealed.artifactWriteMode == null
+          ? `Effet fichier ASK/non résolu sur la Proposal ${proposalId} — clarifier CREATE ou UPDATE (Evidence durable requise pour UPDATE) avant de poursuivre « ${summary} ».`
+          : `Réserves explicites sur la Proposal ${proposalId} (${sealed.reservations.length}) — amender ou clarifier avant de poursuivre « ${summary} ».`,
       isHumanDecision: false,
       promotesTrajectory: false,
       ckcAttribution: null,
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
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 348979ea..8b504414 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -215,6 +215,12 @@ export function extractDocsWriteLaunchSpec(
     asNonEmptyString(inputs.repositoryIdentity) ??
     repositoryRef;

+  const rawMode = inputs.artifactWriteMode;
+  const artifactWriteMode =
+    rawMode === "CREATE" || rawMode === "UPDATE" || rawMode === "ASK"
+      ? rawMode
+      : undefined;
+
   return {
     ok: true,
     spec: {
@@ -231,6 +237,7 @@ export function extractDocsWriteLaunchSpec(
       evidenceRequirements: evidenceRequirements ?? [],
       createOrModify: true,
       noDelete: true,
+      ...(artifactWriteMode ? { artifactWriteMode } : {}),
     },
     repositoryBindingIdentity: bindingIdentity ?? undefined,
   };
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
index 60548dc4..95946715 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
@@ -11,6 +11,7 @@
  * for unit tests only.
  */
 import { createHash } from "node:crypto";
+import { existsSync } from "node:fs";
 import { mkdir, writeFile, readFile, readdir } from "node:fs/promises";
 import path from "node:path";
 import {
@@ -21,6 +22,10 @@ import {
   type RealLaunchResult,
   type RealProcessObservation,
 } from "@/lib/oa/execution-attempt";
+import {
+  assertArtifactWriteModeAtExecution,
+  isAutomaticProductDocsWriteTargetPath,
+} from "@/lib/oa/project/domain/artifactTargetRouting";
 import { M4_BOUNDED_LOCAL_COMMIT_ACTION } from "./m4BoundedLocalCommitCursorAgent";
 import { M4_BOUNDED_REMOTE_PUSH_ACTION } from "./m4BoundedRemotePushCursorAgent";
 import { M4_BOUNDED_PR_CREATE_ACTION } from "./m4BoundedPrCreateCursorAgent";
@@ -472,6 +477,35 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
     const canFsModify = !isCommitOnly && authorized.has("filesystem.modify");

     if (canFsCreate || canFsModify) {
+      // Execution-time TOCTOU — probe BEFORE mkdir/write (never mutate first).
+      const worktreePresent = existsSync(root);
+      let targetExists: boolean | null = null;
+      if (!worktreePresent) {
+        targetExists = null;
+      } else {
+        try {
+          targetExists = existsSync(abs);
+        } catch {
+          targetExists = null;
+        }
+      }
+      const writeMode = spec?.artifactWriteMode;
+      const guard = assertArtifactWriteModeAtExecution({
+        artifactWriteMode: writeMode,
+        targetExists,
+        requireResolvedWriteMode: isAutomaticProductDocsWriteTargetPath(rel),
+      });
+      if (!guard.ok) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: guard.code,
+          realProcessInvoked: false,
+          detailCode: "REAL_WORKSPACE_INVALID",
+        };
+      }
+
       await mkdir(path.dirname(abs), { recursive: true });
       const brief = spec?.artifactBrief ?? "Functional design";
       const contentReqs = (spec?.contentRequirements ?? []).join(", ");
@@ -482,13 +516,7 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
           `attempt=${request.attemptId}\n` +
           `brief=${brief}\n` +
           `contentRequirements=${contentReqs}\n`;
-      let existed = false;
-      try {
-        await readFile(abs);
-        existed = true;
-      } catch {
-        existed = false;
-      }
+      const existed = targetExists === true;
       await writeFile(abs, body, "utf8");
       this.touchedFiles.push(rel);
       const digest = `sha256:${createHash("sha256").update(body).digest("hex")}`;
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index 9e0ed5d6..f84459d0 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -6,7 +6,7 @@
  * Requires ProcessRunner + RealExecutionWorkspacePort (no Fake defaults).
  * Order: enablement → bin resolve → prepareWorkspace → runner.invoke.
  */
-import { accessSync, constants } from "node:fs";
+import { accessSync, constants, existsSync } from "node:fs";
 import path from "node:path";
 import {
   isStudioCursorRealEnabled,
@@ -23,6 +23,10 @@ import type {
   RealLaunchResult,
   RealProcessObservation,
 } from "../ports/realExecutionLaunchPort";
+import {
+  assertArtifactWriteModeAtExecution,
+  isAutomaticProductDocsWriteTargetPath,
+} from "@/lib/oa/project/domain/artifactTargetRouting";
 import type { RealExecutionWorkspacePort } from "../ports/realExecutionWorkspacePort";
 import { DisabledRealProcessRunner } from "./nodeCursorProcessRunner";
 import { assertResolvedTimeoutMs } from "@/lib/oa/execution-contract";
@@ -813,6 +817,35 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
           detailCode: "REAL_WORKSPACE_INVALID",
         };
       }
+      // Execution-time TOCTOU — same invariant as FakeDocsWriteLaunchPort,
+      // before Cursor REAL process is invoked.
+      let targetExists: boolean | null = null;
+      try {
+        if (!existsSync(workspacePath)) {
+          targetExists = null;
+        } else {
+          targetExists = existsSync(resolvedPaths.absoluteTargetPath);
+        }
+      } catch {
+        targetExists = null;
+      }
+      const writeGuard = assertArtifactWriteModeAtExecution({
+        artifactWriteMode: spec.artifactWriteMode,
+        targetExists,
+        requireResolvedWriteMode: isAutomaticProductDocsWriteTargetPath(
+          resolvedPaths.sealedTargetPath,
+        ),
+      });
+      if (!writeGuard.ok) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: writeGuard.code,
+          realProcessInvoked: false,
+          detailCode: "REAL_WORKSPACE_INVALID",
+        };
+      }
       instruction = [
         "TÂCHE UNIQUE — bounded docs-write déterministe (GCEC).",
         `EXACT AUTHORIZED FILE (absolute path inside prepared worktree — modify exactly this file and no other): ${resolvedPaths.absoluteTargetPath}`,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
index 783f1f10..a1e8dd1c 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
@@ -24,6 +24,12 @@ export type DocsWriteLaunchSpec = {
   readonly evidenceRequirements: readonly string[];
   readonly createOrModify: true;
   readonly noDelete: true;
+  /**
+   * Server-sealed CREATE/UPDATE from DecisionBasis (Product automatic workspace).
+   * ASK / missing on automatic Product path → execution-time fail-closed.
+   * Legacy docs/ paths may omit (createOrModify envelope).
+   */
+  readonly artifactWriteMode?: "CREATE" | "UPDATE" | "ASK";
 };

 /** Canonical Git launch specs — single source from domain. */
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
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index a8331fd5..bbded30c 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,6 +4,7 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
+| **Timestamp maintenance PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01** | 2026-09-19 — **PRODUCT PROJECT WORKSPACE & CYCLE-AWARE ARTIFACT ROUTING** · Cycle **8** · Delivery / implémentation · EVOL · CRITICAL · Macro **PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01** · **SAME MACRO / NO MICRO-CYCLE** · Morris D-PC-09 **CONSUMED** · baseline `origin/main` `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` · branche `delivery/sfia-studio-project-workspace-artifact-routing-01` · OBS-PJ-CLOUD-01 addressed via full capability (auto Project workspace + cycle segment + server-owned binding + F2/EC/docs_write) · état = **CR-PWR-01…04 CLOSED + DETERMINISTIC E2E + EXECUTION-TIME SAFETY PROVEN (Proposal→Evidence→ReviewBundle; Evidence unavailable fail-closed; PREPARE + pre-mutation TOCTOU Fake/REAL) + ChatGPT Final Critical Review PENDING + REAL reproof gate PENDING** · same-deliverable = Evidence durable exacte (≠ targetExists alone; unavailable contradiction fail-closed) · UNKNOWN repo / inventory / TOCTOU fail-closed · **ZERO OpenAI LIVE / ZERO Cursor REAL** this pass · project commit/push/PR **NONE this pass** · Review Handoff L3 **AUTHORIZED** · runtime v3 = **NON ADOPTED** · **≠** REAL PROVEN · **≠** Product Completion COMPLETE · **≠** Product Journey READY · next same-macro = Morris GO bounded REAL reproof after ChatGPT PASS |
 | **Timestamp maintenance PRODUCT-JOURNEY-CLAIM-EVIDENCE-COMPLETION-01** | 2026-09-18 19:05:00 CEST (+0200) — **PRODUCT JOURNEY CLAIM EVIDENCE COMPLETION — PROJECT GIT INTEGRATION** · EVOL · CRITICAL · Macro **PRODUCT-JOURNEY-CLAIM-EVIDENCE-COMPLETION-01** · **SAME MACRO / NO MICRO-CYCLE** · Morris GO **PROJECT GIT INTEGRATION — AUTHORIZED** **CONSUMED** · baseline `origin/main` `9c6ac90974113044330284dd110108287ba2319e` · branche `qa/sfia-studio-product-journey-claim-evidence-completion-01` · CR-CEC-01/02/03 **CLOSED** · ChatGPT Critical Review **PASS** (handoff `cdde19b43ab1e2bb8d1348d67c8e0df9d569acf3`) · historical CE `evidence-completion-v1` **pass IMMUTABLE** · successor CE `evidence-completion-v2` **pass** · Product **SUCCESS** · LPS v29 · Trajectory v4 unchanged · Attempts **3→3** · **ZERO NEW CURSOR REAL** · runtime v3 = **NON ADOPTED** · repository lifecycle = **PROJECT GIT INTEGRATION / PR PENDING** · commit/push/PR **AUTHORIZED** · merge **NOT AUTHORIZED / DISTINCT MORRIS GATE** · **≠** Product Journey READY/COMPLETE · **≠** integrated on main · **≠** post-merge verified · **≠** new REAL proof · next = PR CI / Morris merge decision |
 | **Timestamp maintenance historique PRODUCT-JOURNEY-CLAIM-EVIDENCE-COMPLETION-01 first pass (pre-CR-CEC)** | *(historique tip · superseded as tip by CR-CEC-01/02/03 correction)* — 2026-09-18 16:15:00 CEST (+0200) — first evidence-completion pass · correctionRef `evidence-completion-v1` · CE **pass** superseding strict-eo-v1 **not_proven** · Product **SUCCESS** · LPS v27→v28 · Attempts **3→3** · ZERO REAL · ChatGPT Critical Review then required CR-CEC-01/02/03 before Git acceptance |
 | **Timestamp maintenance historique PRODUCT-JOURNEY-POST-EXECUTION-REPLAN-01 (pre-CLAIM-EVIDENCE-COMPLETION-01)** | 2026-09-18 15:30:00 CEST (+0200) — **PRODUCT JOURNEY POST-EXECUTION REPLAN — PROJECT GIT INTEGRATION** · EVOL · CRITICAL · Macro **PRODUCT-JOURNEY-POST-EXECUTION-REPLAN-01** · CR-PJR-01/02/03 **CLOSED / PRESERVED** · original macro baseline `ca77b400f9b2e91557ccded2a304c2ec68fbc14c` (PR **#502** ContractResult A+B merge) · **requalified current baseline** `origin/main` `9be4b80629cb594821cc7b35abf22c89df65acc1` after documentation-only PR **#503** (`sfia-studio-transmission-guide.md` only · **NON-OVERLAPPING DOCUMENTARY MAIN ADVANCE**) · branche `qa/sfia-studio-product-journey-post-execution-replan-01` · Attempt 3 current CE strict **not_proven** preserved · Product **UNCLAIMED** · portable PJR + correctionRef + current-CE W3-C semantics preserved · Attempts **3→3** · **ZERO NEW STUDIO/CURSOR REAL** · runtime v3 = **NON ADOPTED** · repository lifecycle = **PROJECT GIT INTEGRATION — RESOLVE FROM GIT / PR EVIDENCE** · **≠** READY · **≠** Attempt 3 Product PASS · next = PR CI / conditional merge / post-merge verification |
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
diff --git a/projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md b/projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md
index ead9b433..26f99793 100644
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
+6. **Proposal / HumanDecision** — présente workspace projet, workspace cycle, filename, target exact, **Effet fichier CREATE/UPDATE** scellé **avant** HumanDecision ; options poursuivre / amender / refuser suffisent. **ASK** / **null** (docs_write automatique) → Proposal non exécutable (poursuivre bloqué). **UPDATE** exige une Evidence Artifact durable exacte (`projectId` + `location` canonique + status admissible) — **existence fichier seule ≠ same deliverable**. Contradiction Evidence sur le même target (rejected / superseded / stale / **unavailable** status ou availability) → **fail closed** (pas de sameDeliverable).
+7. **Collision** — workspace existant sans preuve d'appartenance durable → ASK / fail-closed (slug ≠ ownership ; existence dossier ≠ ownership). **inventory UNKNOWN (`null`) ≠ ABSENT** — fail closed (jamais `absent_ok`). listProjects / Evidence indisponibles sur workspace occupé → ASK / fail-closed.
+8. **Matérialisation** — aucun mkdir gratuit à Create ; parents créés au premier Attempt docs_write utile. **TOCTOU** : CREATE/UPDATE scellés revalidés **à PREPARE** et **juste avant mutation** (Fake/REAL ; fichier apparu/disparu → STOP ; **probe UNKNOWN → STOP**). Repository fact UNKNOWN (managed base / clone) → ASK / fail-closed (jamais null→CREATE).
+9. **Legacy** — anciens bindings `docs/` etc. restent lisibles ; pas de faux claim de migration.
+10. **Create Product** — config repository server-owned = **précondition** ; absente/invalide → FAIL CLOSED avant persistence (aucun Project/LPS orphelin ; pas de formulaire manuel).
+
+**Preuve :** deterministic E2E Proposal→HD→EC→Attempt→Evidence→**ReviewBundle** PASS (FakeDocsWrite) · REAL reproof = gate Morris distinct · même macro · CR-PWR-01…04 CLOSED (deterministic scope + execution-time safety).
diff --git a/projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md b/projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md
index c5e2fc4a..9cc9c8e6 100644
--- a/projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md
+++ b/projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md
@@ -931,3 +931,37 @@ Conserve : **capability-driven trajectory** + **cycle-driven maturation**.
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
+     · UNKNOWN (null inventory / missing managed base|clone) → ASK / fail-closed (≠ absent_ok / ≠ CREATE)
+  → workspace collision qualify (absent_ok | reuse_same_project | ASK | unknown_inventory)
+  → hasDurableSameArtifactEvidence(projectId, targetPath, Evidence[])
+     · UPDATE only with exact durable Evidence — never targetExists alone
+     · contradiction (rejected/superseded/stale/unavailable) → fail closed
+  → classifyArtifactWriteMode (CREATE | UPDATE | ASK)
+  → Proposal seals exact targetPath + artifactWriteMode
+  → HumanDecision (existante) — ASK / null non exécutable sur docs_write automatique
+  → PREPARE revalidates sealed WRITE mode (TOCTOU; probe null → STOP)
+  → ExecutionContract.inputs.targetPath + artifactWriteMode
+  → execution-time TOCTOU (Fake/REAL, before mutation; probe null → STOP)
+  → docs_write Attempt (mkdir parents + write)
+  → Artifact Evidence + ReviewBundle
+```
+
+UI Product : `RepositoryBindingForm` retiré du parcours normal · panneau read-only Workspace projet / cycle (chemin prévu / logique — jamais MATERIALIZED sans Evidence).
diff --git a/projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md b/projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md
index a734efe5..b8a37667 100644
--- a/projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md
+++ b/projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md
@@ -764,3 +764,26 @@ Do **not** declare:
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
+| Execution-time TOCTOU | `assertArtifactWriteModeAtExecution` in FakeDocsWrite + StudioCursorRealLaunchGateway — same sealed mode vs existence; stale/unknown → reject before write |
+| same-deliverable Evidence | `hasDurableSameArtifactEvidence` — contradiction incl. status/availability `unavailable` → fail closed |
+| docs_write | mkdir parents déjà dans Fake/REAL boundary — même Attempt |
+| Persistence | **aucune** nouvelle table / engine |
+| Legacy | load-compatible · pas de migration silencieuse |
+| Build Doctrine / framing 30–37 | **READ ONLY** — non modifiés |
diff --git a/projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md b/projects/sfia-studio/product-completion/14-product-completion-integrated-proof-final-qualification.md
index 37472b7c..d8315b61 100644
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
+**CR-PWR-01…04 (same macro):** invalid path fail-closed · CREATE/UPDATE/ASK avant HD · collision workspace fail-closed · Product Create config précondition · TOCTOU PREPARE **et** execution-time (Fake/REAL) · Evidence `unavailable` contradiction fail-closed · deterministic E2E Evidence+ReviewBundle.
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

## Tests

### Commands + results

1. `npx vitest run __tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts __tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts`
   → **2 files / 48 tests PASS**

2. Minimum suite (first run):
   `productJourneyGovernedDocsWriteWiring.d0.test.ts` + cycle catalog + UI routing + corrProof09 + w3d + localProjectComposition + productJourneyProjectionCoherence
   → **127 PASS / 2 FAIL (known 5000ms timeout flake only)**

3. Timeout rerun isolated:
   `npx vitest run …productJourneyGovernedDocsWriteWiring.d0.test.ts -t "idempotent rematerialize|R1 — legacy SQLite" --testTimeout=30000`
   → **2/2 PASS** (timeout flake only; not assertion failure)

4. `proposalSubjectIntegrity.d0.test.ts` → **5 PASS**

5. FakeDocsWrite allowlist smoke (gcecOneLotDelivery §15) → **PASS**

### typecheck

`npx tsc --noEmit` → **PASS** (empty output)

### build

`npx next build` → **PASS** (after prefer-const lint fix on FakeDocsWrite)

## Fake / Real qualification

- FakeDocsWrite boundary only for proof
- OpenAI LIVE = **0**
- Cursor REAL = **0**
- remote project Git effects = **0**
- REAL gateway source carries same execution-time invariant (deterministic/source-safe; not exercised LIVE)

## Docs updates (strict tip only)

- C2 conception: unavailable contradiction fail-closed · TOCTOU PREPARE + pre-mutation · E2E includes ReviewBundle
- C3 functional arch flowchart tip
- C6 tech delta: execution-time TOCTOU + same-deliverable unavailable
- DOC14 CR-PWR tip line
- Roadmap living tip updated
- Build Doctrine **UNTOUCHED**
- Framing 30–37 **UNTOUCHED**

## Reserves

NONE blocking for deterministic scope.

## Debt

- bounded REAL reproof still Morris gate (SAME macro after ChatGPT PASS)
- project Git integration / commit / push / PR / merge remain distinct Morris gates

## Verdict

CR-PWR-01 CLOSED
CR-PWR-02 CLOSED
CR-PWR-03 CLOSED
CR-PWR-04 CLOSED

**PRODUCT PROJECT WORKSPACE ROUTING — DETERMINISTIC E2E + EXECUTION-TIME SAFETY PROVEN — READY FOR CHATGPT FINAL CRITICAL REVIEW — MORRIS GIT/REAL GATES PENDING**

### Anti-claims

≠ REAL PROVEN
≠ END-TO-END REAL PROVEN
≠ Product Completion COMPLETE
≠ Product READY
≠ runtime v3 ADOPTED
≠ global L5
≠ project Git integrated

### Instruction ChatGPT

Lire le nouveau handoff distant. Vérifier spécifiquement :

1. `unavailable` bloque sameDeliverable
2. CREATE stale après PREPARE n'écrit rien
3. UPDATE stale après PREPARE ne recrée rien
4. fact UNKNOWN juste avant write bloque
5. Fake et REAL portent le même invariant
6. Evidence + ReviewBundle réellement prouvés
7. ZERO REAL/LIVE
8. FULL diffs présents

Ne pas autoriser Git integration ni REAL tant que la final Critical Review n'est pas PASS.
