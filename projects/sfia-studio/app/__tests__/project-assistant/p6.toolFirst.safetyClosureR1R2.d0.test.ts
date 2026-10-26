/**
 * TOOL-FIRST SAFETY CLOSURE R1/R2
 *
 * R1 — positive non-mutating claim required for pathless NON_STRUCTURAL.
 * R2 — Cursor REAL generalist has no no-write sandbox → fail-closed before Select.
 *
 * Fake DET (CURSOR_REAL≠1) remains admissible for pathless non-mutating.
 * ZERO Cursor REAL effects in this suite.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  qualifyBoundedNonMutatingAnalysisMission,
} from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
import {
  inspectExecutionContract,
} from "@/features/project-assistant/w2/inspectExecutionContract";
import {
  authorizeGenericPreparedContract,
} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import {
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import {
  assertBoundedNonMutatingCursorRealAdmissible,
  BOUNDED_NON_MUTATING_REAL_BLOCK_CODE,
  isBoundedPathlessNonMutatingContract,
} from "@/features/project-assistant/w2/boundedNonMutatingRealLaunchGate";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  ensureManagedRepoCloneSkeleton,
} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  resetPendingGenericPrepareOfferStoreForTests,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import {
  TestOnlyRealExecutionLaunchPort,
} from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

const PLANNING_SCOPE =
  "A 2j; B 4j après A; C 3j après A; D 5j après C; E 4j après B et D; F 2j après C; G 3j après E et F; H 1j après G";

describe("P6 tool-first safety closure R1/R2", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousCursorReal: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousCursorReal = process.env.SFIA_STUDIO_CURSOR_REAL;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    resetPendingGenericPrepareOfferStoreForTests();
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-tf-r1r2.sqlite"),
      idPrefix: "r12",
    });
  });

  afterEach(() => {
    resetPendingGenericPrepareOfferStoreForTests();
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_CURSOR_REAL", previousCursorReal);
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `R12 ${suffix}`,
      objective: "Safety closure R1/R2",
      context: "det r1r2",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `R1${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:r12-${suffix}`,
    });
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
    const identity = `acme/r12-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa };
  }

  async function countAttempts(
    oa: NonNullable<RuntimeApplicationService["oa"]>,
    projectId: string,
  ): Promise<number> {
    const contracts =
      await oa.executionContractServices.contracts.listByProject(projectId);
    let total = 0;
    for (const c of contracts) {
      total += (
        await oa.executionAttemptServices!.attempts.listByContract(
          c.executionContractId,
        )
      ).length;
    }
    return total;
  }

  // ---------------------------------------------------------------------------
  // R1
  // ---------------------------------------------------------------------------

  it("R1+ — explicit none → PREPARE NON_STRUCTURAL, no HD, no Attempt, no fake path", async () => {
    const { projectId, oa } = await seedProject("r1p");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Calculer le chemin critique A–H",
        expectedOutcome: "18 jours ; A→C→D→E→G→H",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.materiality).toBe("non_structural");
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(await countAttempts(oa, projectId)).toBe(0);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
    const inputs = loaded.contract.inputs as Record<string, unknown>;
    expect(inputs.boundedNonMutatingAnalysis).toBe(true);
    expect(inputs.targetPath ?? null).toBeNull();
    expect(inputs.scopeIn).toEqual([]);
  });

  it("R1− — D-P6-SHE-01: repositoryMutation absent → PREPARE OK with STRUCTURAL|UNKNOWN (not silent NON_STRUCTURAL)", async () => {
    const { projectId, oa } = await seedProject("r1a");
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Calculer le chemin critique A–H",
        expectedOutcome: "18 jours",
        scope: PLANNING_SCOPE,
        // no repositoryMutation
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    const live = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("load");
    expect(live.contract.decisionRefs ?? []).toEqual([]);
    // CURRENT: absent mutation claim stamps STRUCTURAL (or UNKNOWN); never silent NON_STRUCTURAL.
    const mat = live.contract.constraints.filter((c) =>
      c.startsWith("MATERIALITY:"),
    );
    expect(mat.some((c) => c === "MATERIALITY:STRUCTURAL" || c === "MATERIALITY:UNKNOWN")).toBe(
      true,
    );
    expect(live.contract.constraints).not.toContain("MATERIALITY:NON_STRUCTURAL");
    expect(await countAttempts(oa, projectId)).toBe(0);
  });

  it("R1− — D-P6-SHE-01: write/elevated stay fail-closed when other gates refuse; structural may PREPARE; unknown not silent NON_STRUCTURAL", async () => {
    const { projectId, oa } = await seedProject("r1n");

    const unk = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse",
        expectedOutcome: "Résultat",
        scope: PLANNING_SCOPE,
        repositoryMutation: "unknown",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // D-P6-SHE-01 — UNKNOWN/STRUCTURAL may PREPARE inspectably (not silent NON_STRUCTURAL).
    if (unk.ok) {
      expect(unk.humanDecisionCreated).toBe(false);
      expect(unk.executionAttemptCreated).toBe(false);
      const unkLive = await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: unk.executionContractId,
      });
      expect(unkLive.ok).toBe(true);
      if (!unkLive.ok) throw new Error("unk load");
      expect(unkLive.contract.constraints).not.toContain(
        "MATERIALITY:NON_STRUCTURAL",
      );
      expect(
        unkLive.contract.constraints.some(
          (c) => c === "MATERIALITY:STRUCTURAL" || c === "MATERIALITY:UNKNOWN",
        ),
      ).toBe(true);
    } else {
      expect(unk.code).not.toBe("GENERIC_PREPARE_DRAFTED");
    }

    const write = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Modifier le dépôt",
        expectedOutcome: "Fichiers changés",
        scope: PLANNING_SCOPE,
        repositoryMutation: "write",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // write may PREPARE as STRUCTURAL/UNKNOWN under SHE, or refuse on other gates —
    // never silent NON_STRUCTURAL pathless admission.
    if (write.ok) {
      const writeLive =
        await oa.executionContractServices.getExecutionContract.execute({
          executionContractId: write.executionContractId,
        });
      expect(writeLive.ok).toBe(true);
      if (!writeLive.ok) throw new Error("write load");
      expect(writeLive.contract.constraints).not.toContain(
        "MATERIALITY:NON_STRUCTURAL",
      );
      expect(write.executionAttemptCreated).toBe(false);
    }

    const elevated = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: {
        ...buildIntentAnalysisFromSolicitedMission({
          objective: "Opération admin",
          expectedOutcome: "Done",
          scope: PLANNING_SCOPE,
          repositoryMutation: "none",
        }),
        executionIntent: {
          intentKind: "read_only",
          scopeIn: [],
          scopeOut: [],
          expectedOutputs: [],
          requiredCapabilities: ["cap:elevated.admin"],
        },
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(elevated.ok).toBe(false);
    if (!elevated.ok) {
      expect(elevated.code).toBe("CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE");
    }

    const structural = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Changement structurel",
        expectedOutcome: "Architecture modifiée",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
        impactSignals: { structuralChange: true, architectureImpact: true },
      }),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(structural.ok).toBe(true);
    if (!structural.ok) throw new Error(structural.message);
    expect(structural.humanDecisionCreated).toBe(false);
    expect(structural.executionAttemptCreated).toBe(false);
    expect(structural.contract.decisionRefs ?? []).toEqual([]);
    expect(structural.contract.constraints).toContain("MATERIALITY:STRUCTURAL");

    // Nora model claim alone (read_only without Product-verified coherence) —
    // docs_write intent contradicts non-mutating. (REAL R2 gate unchanged.)
    const disguised = qualifyBoundedNonMutatingAnalysisMission({
      analysis: {
        ...buildIntentAnalysisFromSolicitedMission({
          objective: "Rédiger un livrable",
          expectedOutcome: "note.md",
          scope: "document",
          repositoryMutation: "none",
        }),
        executionIntent: {
          intentKind: "docs_write",
          scopeIn: [],
          scopeOut: [],
          expectedOutputs: ["note.md"],
          requiredCapabilities: [],
        },
      },
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: false,
    });
    expect(disguised.ok).toBe(false);
    expect(disguised.basis).toBe("intent_kind_not_admitted");
  });

  // ---------------------------------------------------------------------------
  // R2
  // ---------------------------------------------------------------------------

  it("R2 — Fake DET pathless non-mutating still Select/Start admissible", async () => {
    const { projectId, oa } = await seedProject("r2f");
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Calculer le chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(isBoundedPathlessNonMutatingContract(loaded.contract)).toBe(true);
    expect(assertBoundedNonMutatingCursorRealAdmissible(loaded.contract).ok).toBe(
      true,
    );

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) throw new Error(authorized.message);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
  });

  it("R2 — REAL armed → Select refused BEFORE Attempt; Start refuses on valid Attempt with exact R2 code; ordinary write unaffected", async () => {
    const { projectId, oa } = await seedProject("r2r");

    // ZERO REAL harness guarantee: TestOnly launch port never spawns Cursor.
    const launchPort = oa.executionAttemptServices?.realBoundary?.launchPort;
    expect(launchPort).toBeInstanceOf(TestOnlyRealExecutionLaunchPort);
    const testOnlyPort = launchPort as TestOnlyRealExecutionLaunchPort;
    const launchCountAtEntry = testOnlyPort.launchCallCount;

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Calculer le chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
    });
    if (!inspected.ok) throw new Error(inspected.message);
    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    if (!authorized.ok) throw new Error(authorized.message);

    // --- Select under REAL: refuse BEFORE any Attempt (existing assertion).
    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
    const beforeSelectBlock = await countAttempts(oa, projectId);
    const selectedBlocked = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selectedBlocked.ok).toBe(false);
    if (selectedBlocked.ok) throw new Error("expected REAL Select block");
    expect(selectedBlocked.code).toBe(BOUNDED_NON_MUTATING_REAL_BLOCK_CODE);
    expect(await countAttempts(oa, projectId)).toBe(beforeSelectBlock);
    expect(testOnlyPort.launchCallCount).toBe(launchCountAtEntry);

    // --- Select under Fake/DET: create a real accepted Attempt (no external launch).
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(typeof selected.attemptId).toBe("string");
    expect(selected.attemptId.length).toBeGreaterThan(0);
    expect(selected.attemptId).not.toBe("xat:none");
    expect(selected.attemptStatus).toBe("accepted");
    expect(selected.realExecution).toBe(false);
    expect(testOnlyPort.launchCallCount).toBe(launchCountAtEntry);

    const attemptId = selected.attemptId;
    const loadedAttempt =
      await oa.executionAttemptServices!.getExecutionAttempt.execute({
        attemptId,
      });
    expect(loadedAttempt.ok).toBe(true);
    if (!loadedAttempt.ok) {
      throw new Error(
        `getExecutionAttempt failed: ${JSON.stringify(loadedAttempt.error)}`,
      );
    }
    expect(loadedAttempt.attempt.status).toBe("accepted");
    expect(loadedAttempt.attempt.executionContractId).toBe(
      prep.executionContractId,
    );

    const attemptsAfterSelect = await countAttempts(oa, projectId);
    expect(attemptsAfterSelect).toBe(beforeSelectBlock + 1);

    // --- Arm REAL, Start with the valid AttemptId: gate R2 exact code only.
    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
    const launchBeforeStart = testOnlyPort.launchCallCount;
    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(false);
    if (started.ok) throw new Error("expected REAL Start block");
    expect(started.code).toBe(BOUNDED_NON_MUTATING_REAL_BLOCK_CODE);

    // Attempt unchanged — not running; no extra Attempt; no launch ACK.
    const afterStart =
      await oa.executionAttemptServices!.getExecutionAttempt.execute({
        attemptId,
      });
    expect(afterStart.ok).toBe(true);
    if (!afterStart.ok) {
      throw new Error(
        `getExecutionAttempt after Start failed: ${JSON.stringify(afterStart.error)}`,
      );
    }
    expect(afterStart.attempt.status).toBe("accepted");
    expect(afterStart.attempt.status).not.toBe("running");
    expect(await countAttempts(oa, projectId)).toBe(attemptsAfterSelect);
    expect(testOnlyPort.launchCallCount).toBe(launchBeforeStart);
    expect(testOnlyPort.calls.length).toBe(0);

    // Ordinary write mission with concrete paths is NOT blocked by this gate.
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    const writePrep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: {
        ...buildIntentAnalysisFromSolicitedMission({
          objective: "Corriger projects/demo/src/sort.ts",
          expectedOutcome: "Tests verts",
          scope: "projects/demo/src/sort.ts",
          repositoryMutation: "write",
        }),
        executionIntent: {
          intentKind: "other",
          scopeIn: ["projects/demo/src/sort.ts"],
          scopeOut: [],
          expectedOutputs: ["projects/demo/src/sort.ts"],
          requiredCapabilities: [],
        },
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(writePrep.ok).toBe(true);
    if (!writePrep.ok) throw new Error(writePrep.message);
    expect(isBoundedPathlessNonMutatingContract(writePrep.contract)).toBe(false);
    process.env.SFIA_STUDIO_CURSOR_REAL = "1";
    expect(
      assertBoundedNonMutatingCursorRealAdmissible(writePrep.contract).ok,
    ).toBe(true);
  });
});
