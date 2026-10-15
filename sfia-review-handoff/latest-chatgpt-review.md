# SFIA STUDIO — Review Pack FULL — PR #585 R-CI-01 GIT INTEGRATION

## A. Horodatage Europe/Paris

2026-10-15 18:37:42 CEST

Mode: mono-cycle cumulative
Cycle type: 13 — PR readiness / Git Integration
Profil: CRITICAL
CKC: ckc:studio:delivery (+ ckc:studio:qa-validation)
Finding: R-CI-01
Aucun merge. Aucune nouvelle PR. Aucun REAL.

---

## B. GO Morris commit/push/PR/CI

GO MORRIS — 2026-10-15

Autorisé et consommé:
- staging strict 2 fichiers R-CI-01
- commit additionnel sur Delivery
- push normal
- mise à jour PR #585
- vérification CI GitHub
- Review Pack FULL + Handoff L3

NON consommé: MERGE.

---

## C. Qualification SFIA

- Projet: SFIA Studio / mcleland147/sfia-workspace
- Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Milestone: P6 GLOBAL INTEGRATED PRODUCT QA (NOT PASSED)
- Capacité: V3-F05
- Typologie: INC + Git Integration bornée
- Gate merge: NON CONSOMMÉ

---

## D. Git Truth initial

Worktree: `/Users/morris/Projects/sfia-workspace-p6-generic-exec-continuity-e7822033`

| Check | Observed |
|---|---|
| Branch | delivery/sfia-studio-p6-generic-execution-conversational-continuity |
| HEAD | 45dee6830ed19be8ff9a9e1c28434fcd0b8c9d02 |
| origin/delivery | 45dee683… |
| origin/main | e7822033f159d6a0e9c15f6f26843bd1248edbc1 |
| PR #585 | OPEN, base=main, headOid=45dee683 |
| Dirty Product | confirmForAuthorization.ts (M) + p6.rCi01… (??) |
| Pack local | .tmp-sfia-review/chatgpt-review.md |
| Staged | none |
| Entry handoff | ad8d6737 / blob dfb5f4e5 |

Verdict: **PASS — no drift**.

---

## E. Sources et convergence

Sources lues / appliquées (KEEP):
- convergence build doctrine + roadmap
- product-completion C1
- product-simplification 02 / 04 / 07
- doctrine v3 30–35
- template cycle + routing
- T-A4 KEEP (no schema change in R-CI-01 commit)
- Handoff R-CI-01 correction: ad8d673 / dfb5f4e5 (PASS WITH RESERVES historique)

Convergence:
- R-CI-01 DETERMINISTIC CORRECTION REVIEWED → Git Integration
- Gap: correctif absent du remote → **clos par ce cycle**
- Exit Proof cycle: correctif intégré PR #585 + CI qualifiée
- Capacité suivante: qualification findings CI + Final Critical PR Review (pas merge auto)

---

## F. PR #585 d'entrée

- URL: https://github.com/mcleland147/sfia-workspace/pull/585
- HEAD entrée: 45dee683
- CI initiale FAIL: https://github.com/mcleland147/sfia-workspace/actions/runs/38748483640
- Finding: R-CI-01 (Confirm MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE sur legacy W2 / CP02)

---

## G. Review Handoff R-CI-01 d'entrée

- Commit: ad8d6737756da481028fa5d995f051ceb021de1c
- Blob: dfb5f4e5a1888be8cd0c1565d9e4488ae8f66f0b
- Contenu: correction Cases A–D + tests L01–L14 + verdict LOCAL CANDIDATE / READY FOR CRITICAL REVIEW
- Critical Review historique: PASS WITH RESERVES

---

## H. Manifest exact

Commit R-CI-01 uniquement:

MODIFY:
- projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts

CREATE:
- projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts

EXACTEMENT 2 fichiers. Pack `.tmp-sfia-review/` NON commité.

PR cumulative vs main: 32 fichiers (31 du commit 45dee683 + 1 CREATE R-CI-01; confirm déjà dans les 31).

---

## I. Vérification du candidat

Markers confirmés vs handoff ad8d673:
- R-CI-01 routing comment
- Case D early DECISION_REQUIRED
- requiresGd4CurrentMaterialityRevalidation
- Case A legacy skip Product revalidation
- skipMaterialityRevalidation borné non_structural
- Tests L01, L03, L04, L05, L06, L08, L09, L10

Aucune divergence fonctionnelle → **CANDIDATE MATCH**.

---

## J. Contrôles pré-commit

- git diff --check: PASS
- scope: 2 fichiers attendus
- secret scan ciblé: clean
- preuves historiques DET (non rejouées): CP02 22/22; P6 suites 54/54; legacy 26/26; T-A4 20/20; typecheck/lint PASS
- Aucun REAL / ports :3020 / bases QA touchés

---

## K. Staging exact

```
A  projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts
M  projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
```

Count staged: 2. Aucun troisième fichier.

---

## L. Commit SHA

- Nouveau: `e7774a0c71e3b052f091ed2dffdd70651916dd2d`
- Parent: `45dee6830ed19be8ff9a9e1c28434fcd0b8c9d02` (conservé, non amendé)
- Message: `fix(studio): restore legacy W2 Confirm compatibility`
- 2 files changed, 634 insertions(+), 64 deletions(-)

---

## M. Diff du commit (name-status)

```
A	projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts
M	projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
```

---

## N. Contenu exploitable du fichier créé

### CREATE p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts

```typescript
/**
 * R-CI-01 — Legacy W2 Confirm compatibility vs G-D4 CURRENT materiality.
 *
 * Confirms G-D4 Product revalidation applies only to G-D4-policy contracts.
 * Legacy W2 contracts with real HumanDecision refs and no MATERIALITY stamp
 * must Confirm without requiring NON_STRUCTURAL Product revalidation.
 *
 * Deterministic only — ZERO OpenAI REAL — ZERO Cursor REAL.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { prepareGenericExecutionContractDraft } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { materialityFromContractConstraints } from "@/lib/oa/execution-contract";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { ExecutionContract } from "@/lib/oa/execution-contract";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function baseAnalysis(
  overrides: Partial<IntentAnalysisDto> = {},
): IntentAnalysisDto {
  return {
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:delivery",
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective: "Corriger le filtrage demo",
    scope: "projects/demo/app/filter.ts",
    rephrasedRequest: "Corriger le bug de filtrage",
    outOfScope: ["refonte UI"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION SANS AUTORISATION"],
    activatedBlocks: [],
    expectedOutcome: "Filtrage corrigé",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "other",
      scopeIn: ["projects/demo/app/filter.ts"],
      scopeOut: ["refonte UI"],
    } as IntentAnalysisDto["executionIntent"],
    ...overrides,
  };
}

describe("R-CI-01 Legacy W2 Confirm compatibility", () => {
  let runtime: RuntimeApplicationService;
  let previousProvider: string | undefined;
  let previousMorris: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-rci01.sqlite"),
      idPrefix: "rci01",
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetPendingGenericPrepareOfferStoreForTests();
    setConversationProviderForTests(null);
    cleanupW2TempDirs();
    restoreEnvVar("OPS1_CONVERSATION_PROVIDER", previousProvider);
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
  });

  async function prepareLegacyW2(suffix: string) {
    const seeded = await seedQualifiedProject(runtime, { suffix });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error("decide");
    const context = await currentF2Context(runtime, seeded.projectId);
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
      qualifiedOperationKind: "generate-temporary-artifact",
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);
    return {
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      contract: prepared.contract,
    };
  }

  async function seedGd4Cycle(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `R-CI-01 ${suffix}`,
      objective: "G-D4 confirm routing",
      context: "det",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `RC${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:rci01-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const cycleInstanceId = `cyc:rci01-${suffix}`;
    await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:delivery",
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
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-10-15T08:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error("auth");
    const lps1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps1.ok) throw new Error("lps1");
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
    const identity = `acme/rci01-${suffix}`;
    const bound = await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
    expect(bound.ok).toBe(true);
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, cycleInstanceId, oa, identity };
  }

  it("L01 — legacy W2 prepare (real HD, no G-D4 stamp) → inspect → Confirm PASS", async () => {
    const legacy = await prepareLegacyW2("l01");
    expect(legacy.contract.decisionRefs ?? []).toEqual([legacy.decisionId]);
    expect(
      materialityFromContractConstraints(legacy.contract.constraints),
    ).toBeNull();
    expect(
      (legacy.contract.constraints ?? []).some((c) =>
        c.startsWith("MATERIALITY:"),
      ),
    ).toBe(false);

    const inspected = await inspectExecutionContract({
      oa: legacy.oa,
      projectId: legacy.projectId,
      executionContractId: legacy.contract.executionContractId,
    });
    expect(inspected.ok).toBe(true);

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: legacy.oa,
      projectId: legacy.projectId,
      executionContractId: legacy.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) throw new Error(confirmed.code);
  });

  it("L03 — legacy W2 without inspection → Confirm BLOCK", async () => {
    const legacy = await prepareLegacyW2("l03");
    const confirmed = await confirmExecutionContractForAuthorization({
      oa: legacy.oa,
      projectId: legacy.projectId,
      executionContractId: legacy.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected block");
    expect(confirmed.code).toBe("INSPECTION_REQUIRED");
  });

  it("L04 — legacy W2 Confirm with wrong projectId → PROJECT_MISMATCH", async () => {
    const legacy = await prepareLegacyW2("l04");
    await inspectExecutionContract({
      oa: legacy.oa,
      projectId: legacy.projectId,
      executionContractId: legacy.contract.executionContractId,
    });
    const confirmed = await confirmExecutionContractForAuthorization({
      oa: legacy.oa,
      projectId: "prj:other-project-rci01",
      executionContractId: legacy.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected mismatch");
    expect(confirmed.code).toBe("PROJECT_MISMATCH");
  });

  it("L05 — G-D4 NON_STRUCTURAL empty refs → Confirm PASS (CURRENT available)", async () => {
    const seeded = await seedGd4Cycle("l05");
    const prep = await prepareGenericExecutionContractDraft({
      oa: seeded.oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      analysis: baseAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.contract.decisionRefs ?? []).toEqual([]);
    expect(prep.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");

    const inspected = await inspectExecutionContract({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });
    expect(inspected.ok).toBe(true);

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) throw new Error(`${confirmed.code}: ${confirmed.message}`);
  });

  it("L06 — G-D4 NON_STRUCTURAL Confirm fails closed when Product context unavailable", async () => {
    const seeded = await seedGd4Cycle("l06");
    const prep = await prepareGenericExecutionContractDraft({
      oa: seeded.oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      analysis: baseAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    await inspectExecutionContract({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });

    // Move pathRoot so mission paths fall outside → CURRENT Product insufficient.
    const rebound =
      await seeded.oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId: seeded.projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: seeded.identity,
          remoteUrl: `https://github.com/${seeded.identity}.git`,
          defaultBranch: "main",
          pathRoot: "projects/elsewhere",
        },
      });
    expect(rebound.ok).toBe(true);

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected G-D4 fail-closed");
    expect([
      "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
      "REPOSITORY_BINDING_STALE",
      "SCOPE_OUTSIDE_PATH_ROOT",
    ]).toContain(confirmed.code);
  });

  it("L08 — G-D4 repository identity change (LPS unchanged) → Confirm STALE", async () => {
    const seeded = await seedGd4Cycle("l08");
    const prep = await prepareGenericExecutionContractDraft({
      oa: seeded.oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      analysis: baseAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    await inspectExecutionContract({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });

    const rebound =
      await seeded.oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId: seeded.projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: "acme/rci01-l08-other",
          remoteUrl: "https://github.com/acme/rci01-l08-other.git",
          defaultBranch: "main",
          pathRoot: "projects/demo",
        },
      });
    expect(rebound.ok).toBe(true);
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity: "acme/rci01-l08-other",
    });

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected stale");
    expect(confirmed.code).toBe("REPOSITORY_BINDING_STALE");
  });

  async function prepareInspectedGd4(suffix: string) {
    const seeded = await seedGd4Cycle(suffix);
    const prep = await prepareGenericExecutionContractDraft({
      oa: seeded.oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      analysis: baseAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const inspected = await inspectExecutionContract({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      expectedVersion: prep.contract.version,
    });
    expect(inspected.ok).toBe(true);
    return { seeded, prep };
  }

  function withContractOverlay(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    overlay: (contract: ExecutionContract) => ExecutionContract,
  ) {
    const original = oa.executionContractServices.getExecutionContract.execute.bind(
      oa.executionContractServices.getExecutionContract,
    );
    oa.executionContractServices.getExecutionContract.execute = (async (
      req: { executionContractId: string },
    ) => {
      const got = await original(req);
      if (!got.ok) return got;
      return { ok: true as const, contract: overlay(got.contract) };
    }) as typeof oa.executionContractServices.getExecutionContract.execute;
  }

  it("L09 — empty decisionRefs without G-D4 stamp → Confirm REFUS", async () => {
    const { seeded, prep } = await prepareInspectedGd4("l09");
    withContractOverlay(seeded.oa, (contract) => ({
      ...contract,
      decisionRefs: [],
      constraints: (contract.constraints ?? []).filter(
        (c) => !c.startsWith("MATERIALITY:"),
      ),
      inputs: {
        ...(contract.inputs as Record<string, unknown>),
        materialityFacts: undefined,
      },
    }));

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected refus");
    expect(confirmed.code).toBe("DECISION_REQUIRED");
    expect(confirmed.message).toMatch(/sans décision humaine ni justification G-D4/i);
  });

  it("L10 — STRUCTURAL stamp with empty refs → Confirm BLOCK (no legacy bypass)", async () => {
    const { seeded, prep } = await prepareInspectedGd4("l10");
    withContractOverlay(seeded.oa, (contract) => ({
      ...contract,
      decisionRefs: [],
      constraints: [
        ...(contract.constraints ?? []).filter(
          (c) => !c.startsWith("MATERIALITY:"),
        ),
        "MATERIALITY:STRUCTURAL",
      ],
    }));

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: seeded.oa,
      projectId: seeded.projectId,
      executionContractId: prep.contract.executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) throw new Error("expected structural block");
    // Must not take the legacy HD path; G-D4 structural remains fail-closed.
    // Fail-closed on G-D4 path (stamp mismatch / structural / context) — never legacy PASS.
    expect([
      "DECISION_REQUIRED",
      "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
      "MATERIALITY_STRUCTURAL",
      "MATERIALITY_CURRENT_MISMATCH",
    ]).toContain(confirmed.code);
  });
});

```

---

## O. Diff complet du fichier modifié

```diff
commit e7774a0c71e3b052f091ed2dffdd70651916dd2d
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Oct 15 18:27:38 2026 +0200

    fix(studio): restore legacy W2 Confirm compatibility

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
index 45f23296..b2cd6cee 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
@@ -142,9 +142,12 @@ export async function confirmExecutionContractForAuthorization(
     };
   }

-  // G-D4 / A2 — empty decisionRefs only when NON_STRUCTURAL stamp AND CURRENT
-  // Product revalidation agrees. Stamp alone is never sufficient authority.
   // Confirmation ≠ HumanDecision (P2-D-03). Do not invent a dec: to unlock Confirm.
+  //
+  // R-CI-01 — Route materiality CURRENT revalidation only for G-D4 policy contracts.
+  // Legacy W2 contracts (no MATERIALITY:* stamp, real decisionRefs) keep historical
+  // HD freshness / project / inspection gates via OA Confirm — they must not be
+  // forced through Product NON_STRUCTURAL revalidation that expects G-D4 stamps.
   const decisionRefs = contract.decisionRefs ?? [];
   const decisionRef = decisionRefs[0];
   const stamped = materialityFromContractConstraints(contract.constraints);
@@ -154,77 +157,103 @@ export async function confirmExecutionContractForAuthorization(
     typeof contractInputs.materialityFacts === "object"
       ? (contractInputs.materialityFacts as Record<string, unknown>)
       : null;
+  const stampedCurrentness = parseStampedProductCurrentness(factsRaw);

-  let recomputedMateriality = stamped ?? "unknown";
-  if (input.skipMaterialityRevalidation !== true) {
-    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
-      oa,
-      projectId: input.projectId,
-      analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
-      cycleInstanceId: contract.cycleInstanceId ?? null,
-      stampedMateriality: stamped,
-      stampedCurrentness: parseStampedProductCurrentness(factsRaw),
-    });
-    if (!revalidated.ok) {
-      const passThrough =
-        revalidated.code === "MATERIALITY_CURRENT_MISMATCH" ||
-        revalidated.code === "MATERIALITY_CURRENTNESS_STALE" ||
-        revalidated.code === "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE" ||
-        revalidated.code === "REPOSITORY_BINDING_STALE" ||
-        revalidated.code === "REPOSITORY_BINDING_UNAVAILABLE" ||
-        revalidated.code.startsWith("SCOPE_");
-      return {
-        ok: false,
-        code:
-          revalidated.code === "MATERIALITY_STRUCTURAL" ||
-          revalidated.code === "MATERIALITY_UNKNOWN"
-            ? "DECISION_REQUIRED"
-            : passThrough
-              ? revalidated.code
-              : "DECISION_REQUIRED",
-        message: revalidated.message,
-      };
-    }
-    recomputedMateriality = revalidated.current.assessment.materiality;
-  } else if (stamped !== "non_structural") {
+  // Case D — empty refs without G-D4 stamp: never treat as legacy HD path.
+  if (decisionRefs.length === 0 && stamped == null) {
     return {
       ok: false,
       code: "DECISION_REQUIRED",
       message:
-        "Stamp de matérialité non NON_STRUCTURAL — HumanDecision requise.",
+        "Contrat sans décision humaine ni justification G-D4 NON_STRUCTURAL — confirmation refusée.",
     };
   }

-  const admissible = assertDecisionRefsAdmissibleForConfirm({
-    decisionRefs,
-    stampedMateriality: stamped,
-    recomputed: {
-      materiality:
-        recomputedMateriality === "non_structural" ||
-        recomputedMateriality === "structural" ||
-        recomputedMateriality === "unknown"
-          ? recomputedMateriality
-          : "unknown",
-      reasonCodes: ["current_product_revalidation"],
-      humanDecisionRequired: recomputedMateriality !== "non_structural",
-      constraintToken:
-        recomputedMateriality === "structural"
-          ? "MATERIALITY:STRUCTURAL"
-          : recomputedMateriality === "unknown"
-            ? "MATERIALITY:UNKNOWN"
-            : "MATERIALITY:NON_STRUCTURAL",
-    },
-  });
-  if (!admissible.ok) {
-    return {
-      ok: false,
-      code: "DECISION_REQUIRED",
-      message:
-        stamped === "non_structural" && recomputedMateriality !== "non_structural"
-          ? "Matérialité structurelle détectée à la confirmation — HumanDecision requise."
-          : "Contrat sans décision humaine rattachée alors qu'une HumanDecision est requise — confirmation refusée.",
-    };
+  // G-D4 policy: explicit MATERIALITY stamp and/or Product currentness stamp at PREPARE.
+  const requiresGd4CurrentMaterialityRevalidation =
+    stamped != null || stampedCurrentness != null;
+
+  let recomputedMateriality = stamped ?? "unknown";
+  if (requiresGd4CurrentMaterialityRevalidation) {
+    // Cases B/C — G-D4 stamped (NON_STRUCTURAL / STRUCTURAL / UNKNOWN) or stamped facts.
+    if (input.skipMaterialityRevalidation !== true) {
+      const revalidated = await revalidateMaterialityAgainstCurrentProduct({
+        oa,
+        projectId: input.projectId,
+        analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
+        cycleInstanceId: contract.cycleInstanceId ?? null,
+        stampedMateriality: stamped,
+        stampedCurrentness,
+      });
+      if (!revalidated.ok) {
+        const passThrough =
+          revalidated.code === "MATERIALITY_CURRENT_MISMATCH" ||
+          revalidated.code === "MATERIALITY_CURRENTNESS_STALE" ||
+          revalidated.code === "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE" ||
+          revalidated.code === "REPOSITORY_BINDING_STALE" ||
+          revalidated.code === "REPOSITORY_BINDING_UNAVAILABLE" ||
+          revalidated.code.startsWith("SCOPE_");
+        return {
+          ok: false,
+          code:
+            revalidated.code === "MATERIALITY_STRUCTURAL" ||
+            revalidated.code === "MATERIALITY_UNKNOWN"
+              ? "DECISION_REQUIRED"
+              : passThrough
+                ? revalidated.code
+                : "DECISION_REQUIRED",
+          message: revalidated.message,
+        };
+      }
+      recomputedMateriality = revalidated.current.assessment.materiality;
+    } else if (stamped !== "non_structural") {
+      // skipMaterialityRevalidation only valid after a governed G-D4 CURRENT pass
+      // that already established NON_STRUCTURAL (authorizeGenericPreparedContract).
+      return {
+        ok: false,
+        code: "DECISION_REQUIRED",
+        message:
+          "Stamp de matérialité non NON_STRUCTURAL — HumanDecision requise.",
+      };
+    } else {
+      recomputedMateriality = "non_structural";
+    }
+
+    const admissible = assertDecisionRefsAdmissibleForConfirm({
+      decisionRefs,
+      stampedMateriality: stamped,
+      recomputed: {
+        materiality:
+          recomputedMateriality === "non_structural" ||
+          recomputedMateriality === "structural" ||
+          recomputedMateriality === "unknown"
+            ? recomputedMateriality
+            : "unknown",
+        reasonCodes: ["current_product_revalidation"],
+        humanDecisionRequired: recomputedMateriality !== "non_structural",
+        constraintToken:
+          recomputedMateriality === "structural"
+            ? "MATERIALITY:STRUCTURAL"
+            : recomputedMateriality === "unknown"
+              ? "MATERIALITY:UNKNOWN"
+              : "MATERIALITY:NON_STRUCTURAL",
+      },
+    });
+    if (!admissible.ok) {
+      return {
+        ok: false,
+        code: "DECISION_REQUIRED",
+        message:
+          stamped === "non_structural" &&
+          recomputedMateriality !== "non_structural"
+            ? "Matérialité structurelle détectée à la confirmation — HumanDecision requise."
+            : "Contrat sans décision humaine rattachée alors qu'une HumanDecision est requise — confirmation refusée.",
+      };
+    }
   }
+  // Case A — Legacy W2: no G-D4 stamp, decisionRefs non-empty.
+  // OA ConfirmExecutionContract validates HD existence/freshness/project/supersession.
+  // Do not invent MATERIALITY stamps or call Product NON_STRUCTURAL revalidation.

   const authority = registerLocalAuthorityForExecutionClass({
     authorityResolver: oa.authorityResolver,

```

---

## P. Vérification remote

Push: `45dee683..e7774a0c` → origin/delivery/...
Local HEAD = remote Delivery = `e7774a0c71e3b052f091ed2dffdd70651916dd2d`
Aucun force push.

---

## Q. État PR après push

- PR #585 OPEN
- base: main
- headRef: delivery/sfia-studio-p6-generic-execution-conversational-continuity
- headRefOid: e7774a0c71e3b052f091ed2dffdd70651916dd2d
- Commits PR: 45dee683 (feat) + e7774a0c (fix R-CI-01)
- URL: https://github.com/mcleland147/sfia-workspace/pull/585

---

## R. Nouveau HEAD

`e7774a0c71e3b052f091ed2dffdd70651916dd2d`

---

## S. CI run ID

- Run: 38769198746
- URL: https://github.com/mcleland147/sfia-workspace/actions/runs/38769198746
- headSha: e7774a0c71e3b052f091ed2dffdd70651916dd2d
- event: pull_request
- status: completed
- conclusion: **failure**

CI initiale (ne pas confondre): 38748483640 sur 45dee683.

---

## T. Résultats des jobs

| Job / Step | Résultat |
|---|---|
| Detect SFIA Studio changes | SUCCESS |
| Typecheck | SUCCESS |
| Lint | SUCCESS |
| Build | SUCCESS |
| Unit tests (Vitest) | **FAILURE** — 3 failed / 5886 passed / 143 skipped |
| Modeled governance / secrets / whitespace | (validate a échoué sur Vitest) |
| SFIA Studio Required Gate | **FAILURE** (validate_result=failure) |

### Vitest failures (NEW FINDINGS — hors correctif R-CI-01 2-fichiers)

1. `__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts:100`
   - expected hash `0f7c73b7539df09d` vs received `7781362a64d98c01`
   - Cause observée: empreinte runtime reference non mise à jour pour modules CREATE du commit 45dee683

2. `__tests__/vertical-slice-runtime/importBoundaries.test.ts:173`
   - allowlist Set 88 vs 91
   - Entrées manquantes observées:
     - `authorizeGenericPreparedContract.ts:@/lib/vertical-slice-runtime`
     - `prepareGenericExecutionContractDraft.ts:@/lib/vertical-slice-runtime`
     - `resolveAuthoritativeProductMateriality.ts:@/lib/vertical-slice-runtime`
   - Cause: fichiers CREATE du commit initial 45dee683 non allowlistés

3. `__tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts:483`
   - `cyclesAfterPropose.length` expected 1 received 0
   - Cause: à qualifier — interaction chat-first / cycle unbound (commit 45dee683 perimeter), **pas** le diff Confirm R-CI-01

### R-CI-01 / CP02 dans cette CI

Les 3 failures listées ne sont **pas** CP02 ni p6.rCi01.
CP02 exécuté dans les logs (stdout suites SF/PL/REC…) sans apparaitre dans FAIL list.
→ Finding historique R-CI-01 (MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE) **non reproduit** sur e7774a0c.
→ Required Gate reste FAIL pour findings **nouveaux / cumulatifs PR**.

Aucune Correction Pass autonome lancée (GO).

---

## U. Required Gate

**FAILURE**

```
detect_result=success
validate_result=failure
studio_changed=true
Required gate FAIL: Studio validation required but result=failure.
```

---

## V. Fake / Real

- Applicable: OUI
- Fake: suites DET CI / provider fake
- REAL: NON exécuté
- Niveau atteint: R-CI-01 GIT INTEGRATED / CI VERIFIED (failure qualified)
- Hors scope: REAL BOUNDARY; E2E REAL; P6 GLOBAL PASS; PRODUCT READY; RUNTIME V3 ADOPTED
- Gate REAL: NON AUTORISÉ

---

## W. Réserves

1. Required Gate FAIL — 3 findings CI à qualifier (allowlist / fingerprint / HQA-F01).
2. Ces findings relèvent du périmètre CREATE 45dee683, pas du commit R-CI-01 2-fichiers.
3. Human QA e66 / Cursor REAL / Evidence E2E non prouvés.
4. P6 GLOBAL NOT PASSED.
5. Merge NON autorisé.

---

## X. Dette / Exit

- Exit Proof intégration R-CI-01: **ATTEINT** (commit+push+PR HEAD e7774a0c).
- Exit Proof Required Gate SUCCESS: **NON ATTEINT**.
- Dette: findings CI CI-IB-01 (import boundaries), CI-PRR-01 (productionRuntimeReference), CI-HQA-F01 (chatFirstCycleStartGate) — noms provisoires pour qualification.
- Capacité suivante: GO Morris correction bornée findings CI OU qualification ChatGPT, puis Final Critical PR Review, puis merge distinct.

---

## Y. Gates Morris restants

1. Qualification / correction éventuelle des 3 Vitest failures (GO distinct)
2. Critical Review finale ChatGPT (après CI verte ou avec verdict STOP)
3. Merge Gate
4. Post-merge verification
5. Human QA P6 e66
6. REAL / runtime v3 — hors scope

---

## Z. Git Truth final

| Check | Value |
|---|---|
| HEAD Delivery local | e7774a0c71e3b052f091ed2dffdd70651916dd2d |
| origin/delivery | e7774a0c… |
| origin/main | e7822033… |
| PR #585 head | e7774a0c… OPEN |
| Dirty | .tmp-sfia-review/chatgpt-review.md only |
| Project staged | none |

---

## AA. Verdict

**R-CI-01 GIT INTEGRATED
PR #585 UPDATED
CI FAILURE
NEW FINDINGS TO QUALIFY**

Pas READY FOR MERGE.
Pas P6 GLOBAL PASS.
Pas CI SUCCESS / Required Gate SUCCESS.

R-CI-01 historique (legacy Confirm) intégré; Required Gate bloqué par 3 failures cumulatives PR hors scope du commit R-CI-01.

---

## AB. Instruction ChatGPT

Lire le nouveau Review Handoff distant.

Vérifier:
- identité cycle 13 Git Integration
- GO Morris commit/push/PR/CI
- branche / HEAD e7774a0c / base main
- staging exact 2 fichiers
- parent 45dee683 non amendé
- push normal
- PR #585 actualisée
- CI 38769198746 sur e7774a0c
- Required Gate FAIL
- 3 findings Vitest (relation vs R-CI-01)
- Fake/Real honesty
- Pack complet + handoff

Rendre: **FINAL CRITICAL PR REVIEW READINESS**
(PASS / PASS WITH RESERVES / NOT READY / STOP).

Ne pas déclencher: MERGE, POST-MERGE, HUMAN QA, CURSOR REAL, P6 PROMOTION, RUNTIME V3.

Si NOT READY: qualifier les 3 findings et le GO correction minimal recommandé.

---

## AG. Git Review Index

| Item | Value |
|---|---|
| Entry HEAD | 45dee683 |
| Integration HEAD | e7774a0c |
| Entry handoff | ad8d673 / dfb5f4e5 |
| CI new | 38769198746 FAIL |
| CI old | 38748483640 FAIL (R-CI-01) |

FIN REVIEW PACK FULL — R-CI-01 GIT INTEGRATION
