/**
 * STUDIO-P6-GENERIC-EXECUTION-TOOL-FIRST-SIMPLIFICATION-01
 *
 * Deterministic Product end-to-end (Fake Cursor / Fake provider boundaries):
 * Nora tool / solicit → Product PREPARE → OA EC → inspect → authorize →
 * Select/Start → Evidence continuity.
 *
 * Scenarios A–J. ZERO Cursor REAL. PREPARE ≠ AUTHORIZE ≠ EXECUTE.
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
  qualifyBoundedNonMutatingAnalysisMission,
} from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
import {
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
} from "@/lib/oa/execution-attempt";
import {
  resetPendingGenericPrepareOfferStoreForTests,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  ensureManagedRepoCloneSkeleton,
} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { settleDeterministicProductCursorSuccess } from "./w2Harness";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  pathUnderProjectWorkspace,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

/** Oracle — CPM earliest-finish critical path for planning A–H (CAS A). */
function criticalPathOracleAtoH(): {
  durationDays: number;
  path: readonly string[];
} {
  const tasks: Record<string, { d: number; preds: string[] }> = {
    A: { d: 2, preds: [] },
    B: { d: 4, preds: ["A"] },
    C: { d: 3, preds: ["A"] },
    D: { d: 5, preds: ["C"] },
    E: { d: 4, preds: ["B", "D"] },
    F: { d: 2, preds: ["C"] },
    G: { d: 3, preds: ["E", "F"] },
    H: { d: 1, preds: ["G"] },
  };
  const es: Record<string, number> = {};
  const ef: Record<string, number> = {};
  const order = ["A", "B", "C", "D", "E", "F", "G", "H"];
  for (const id of order) {
    const t = tasks[id]!;
    const start = t.preds.reduce((m, p) => Math.max(m, ef[p] ?? 0), 0);
    es[id] = start;
    ef[id] = start + t.d;
  }
  const durationDays = ef.H!;
  // Backward pass for critical path (float = 0).
  const lf: Record<string, number> = { H: durationDays };
  const ls: Record<string, number> = { H: durationDays - tasks.H!.d };
  for (const id of [...order].reverse()) {
    for (const p of tasks[id]!.preds) {
      const cand = ls[id]!;
      lf[p] = lf[p] == null ? cand : Math.min(lf[p]!, cand);
      ls[p] = lf[p]! - tasks[p]!.d;
    }
  }
  const critical = order.filter((id) => ls[id] === es[id]);
  return { durationDays, path: critical };
}

const PLANNING_SCOPE = [
  "A 2j sans dépendance",
  "B 4j après A",
  "C 3j après A",
  "D 5j après C",
  "E 4j après B et D",
  "F 2j après C",
  "G 3j après E et F",
  "H 1j après G",
].join("; ");

describe("P6 tool-first Generic Execution contract simplification A–J", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    resetPendingGenericPrepareOfferStoreForTests();
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-tool-first.sqlite"),
      idPrefix: "tf01",
    });
  });

  afterEach(() => {
    resetPendingGenericPrepareOfferStoreForTests();
    cleanupW2TempDirs();
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
  });

  async function seedProject(input: {
    suffix: string;
    withCycle: boolean;
    framingCycle?: boolean;
  }) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `TF ${input.suffix}`,
      objective: "Tool-first simplification",
      context: "det tool-first",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `TF${input.suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:tf-${input.suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const workspaceKey = created.project.projectWorkspaceKey ?? "project";
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

    let cycleInstanceId: string | null = null;
    if (input.withCycle) {
      cycleInstanceId = `cyc:tf-${input.suffix}`;
      await oa.cycleServices.createCycle.execute({
        cycleInstanceId,
        cycleTypeId: input.framingCycle ? "cyc:framing" : "cyc:delivery",
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
        issuedAt: "2026-10-17T10:00:00.000Z",
        forceEnable: true,
      });
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
      if (!started.ok) throw new Error("start");
    }

    const identity = `acme/tf-${input.suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, cycleInstanceId, oa, workspaceKey };
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

  it("unit — pathless analysis qualifies only with positive non-mutating claim", () => {
    const analysis = buildIntentAnalysisFromSolicitedMission({
      objective: "Calculer le chemin critique du planning A–H",
      expectedOutcome: "Durée minimale et chemin critique",
      scope: PLANNING_SCOPE,
      repositoryMutation: "none",
    });
    const ok = qualifyBoundedNonMutatingAnalysisMission({
      analysis,
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: false,
    });
    expect(ok.ok).toBe(true);

    // R1 — absence is NOT a positive claim.
    const absent = qualifyBoundedNonMutatingAnalysisMission({
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Calculer le chemin critique",
        expectedOutcome: "18 jours",
        scope: PLANNING_SCOPE,
      }),
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: false,
    });
    expect(absent.ok).toBe(false);
    expect(absent.basis).toBe("repository_mutation_claim_absent");

    const unknown = qualifyBoundedNonMutatingAnalysisMission({
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Calculer le chemin critique",
        expectedOutcome: "18 jours",
        scope: PLANNING_SCOPE,
        repositoryMutation: "unknown",
      }),
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: false,
    });
    expect(unknown.ok).toBe(false);
    expect(unknown.basis).toBe("repository_mutation_unknown");

    const write = qualifyBoundedNonMutatingAnalysisMission({
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: "Écrire une note",
        expectedOutcome: "note.md",
        scope: "livrable documentaire",
        repositoryMutation: "write",
      }),
      liveOk: true,
      concretePaths: [],
      protectedPathHits: [],
      positiveStructuralSignal: false,
      requestedCapabilities: [],
      isDocumentaryWriteMission: true,
    });
    expect(write.ok).toBe(false);
  });

  it("CAS A — pathless analysis PREPARE → inspect → authorize → Select/Start; oracle 18j", async () => {
    const oracle = criticalPathOracleAtoH();
    expect(oracle.durationDays).toBe(18);
    expect(oracle.path).toEqual(["A", "C", "D", "E", "G", "H"]);

    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "a",
      withCycle: false,
    });
    const decisionsBefore =
      await oa.decisionServices.decisions.listByProject(projectId);

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective:
          "Calculer le chemin critique de ce planning A–H (analyse sans écriture fichier)",
        expectedOutcome: `Durée minimale ${oracle.durationDays} jours ; chemin critique ${oracle.path.join(" → ")}`,
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
        contextNotes: "Mission d'analyse conversationnelle — aucune mutation repo.",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.humanDecisionCreated).toBe(false);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(prep.materiality).toBe("non_structural");
    expect(await countAttempts(oa, projectId)).toBe(0);

    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.decisionRefs ?? []).toEqual([]);
    expect(loaded.contract.constraints).toContain("MATERIALITY:NON_STRUCTURAL");
    expect(loaded.contract.constraints).toContain(
      "MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED",
    );
    expect(loaded.contract.constraints).toContain(
      "NO_INVENTED_DOCUMENTARY_OR_GIT_TARGET",
    );
    const inputs = loaded.contract.inputs as Record<string, unknown>;
    expect(inputs.boundedNonMutatingAnalysis).toBe(true);
    expect(inputs.resolvedAuthoritativeTargetPath ?? null).toBeNull();
    expect(inputs.targetPath ?? null).toBeNull();
    const scopeIn = Array.isArray(inputs.scopeIn) ? inputs.scopeIn : [];
    expect(scopeIn).toEqual([]);
    expect(await countAttempts(oa, projectId)).toBe(0);

    const inspected = await inspectExecutionContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: loaded.contract.version,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);

    const authorized = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) throw new Error(authorized.message);
    expect(authorized.executionAttemptCreated).toBe(false);
    expect(authorized.humanDecisionCreated).toBe(false);

    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(selected.message);
    expect(selected.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);

    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.message);

    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId: started.attemptId,
    });
    expect(settled.ok).toBe(true);
    if (!settled.ok) throw new Error(settled.message);
    expect(settled.attempt.status).toBe("succeeded");

    const decisionsAfter =
      await oa.decisionServices.decisions.listByProject(projectId);
    expect(decisionsAfter.length).toBe(decisionsBefore.length);
    void cycleInstanceId;
  });

  it("CAS B — same pathless mission without CycleInstance; no artificial cycle", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "b",
      withCycle: false,
    });
    const cyclesBefore = (await oa.cycleServices.cycles.listByProject(projectId))
      .length;
    expect(cyclesBefore).toBe(0);

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
    expect(prep.projectContextOnly).toBe(true);
    expect(prep.cycleInstanceId).toBeNull();
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.cycleInstanceId ?? null).toBeNull();
    expect((await oa.cycleServices.cycles.listByProject(projectId)).length).toBe(
      0,
    );
  });

  it("CAS C — active framing cycle retained; no parasitic NEW_CYCLE prepare diversion", async () => {
    const { projectId, cycleInstanceId, oa } = await seedProject({
      suffix: "c",
      withCycle: true,
      framingCycle: true,
    });
    expect(cycleInstanceId).toBeTruthy();
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId,
      mission: {
        objective: "Calculer le chemin critique A–H dans le cycle de cadrage",
        expectedOutcome: "18 jours ; A→C→D→E→G→H",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.cycleInstanceId).toBe(cycleInstanceId);
    const loaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) throw new Error("load");
    expect(loaded.contract.cycleInstanceId).toBe(cycleInstanceId);
    // Cycle still active — not replaced.
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    expect(lps.livingProjectState.activeCycleInstanceId).toBe(cycleInstanceId);
  });

  it("CAS D — git read of existing path keeps project workspace pathRoot", async () => {
    const { projectId, oa, workspaceKey } = await seedProject({
      suffix: "d",
      withCycle: false,
    });
    const schedulePath = pathUnderProjectWorkspace(workspaceKey, "src", "schedule.ts");
    const pathRoot = pathUnderProjectWorkspace(workspaceKey);
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: buildIntentAnalysisFromSolicitedMission({
        objective: `Analyser ${schedulePath}`,
        expectedOutcome: "Résumé des dépendances du fichier",
        scope: schedulePath,
        repositoryMutation: "read",
      }),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // With concrete path, path-bound materiality applies (may need scopeIn on analysis).
    const analysisWithPath = {
      ...buildIntentAnalysisFromSolicitedMission({
        objective: `Analyser ${schedulePath}`,
        expectedOutcome: "Résumé des dépendances du fichier",
        scope: schedulePath,
        repositoryMutation: "read",
      }),
      executionIntent: {
        intentKind: "read_only" as const,
        scopeIn: [schedulePath],
        scopeOut: [],
        expectedOutputs: ["Résumé des dépendances du fichier"],
        requiredCapabilities: [],
      },
    };
    const prep2 = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: analysisWithPath,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep2.ok).toBe(true);
    if (!prep2.ok) throw new Error(prep2.message);
    expect(prep2.materiality.materiality).toBe("non_structural");
    const inputs = prep2.contract.inputs as Record<string, unknown>;
    expect(inputs.pathRoot).toBe(pathRoot);
    expect(inputs.scopeIn).toEqual([schedulePath]);
    void prep;
  });

  it("CAS E — ordinary write prepare names files/effects; no Attempt before authorize", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "e",
      withCycle: false,
    });
    const analysis = {
      ...buildIntentAnalysisFromSolicitedMission({
        objective: "Corriger le tri dans projects/demo/src/sort.ts",
        expectedOutcome: "Tests verts sur le tri",
        scope: "projects/demo/src/sort.ts",
        repositoryMutation: "write",
      }),
      executionIntent: {
        intentKind: "other" as const,
        scopeIn: ["projects/demo/src/sort.ts"],
        scopeOut: [],
        expectedOutputs: ["projects/demo/src/sort.ts"],
        requiredCapabilities: [],
      },
    };
    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);
    expect(prep.executionAttemptCreated).toBe(false);
    expect(await countAttempts(oa, projectId)).toBe(0);
    const inputs = prep.contract.inputs as Record<string, unknown>;
    expect(inputs.scopeIn).toEqual(["projects/demo/src/sort.ts"]);
  });

  it("CAS F — protected / structural remains blocking via Nora tool path", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "f",
      withCycle: false,
    });
    // Prefer a known Product-protected path; fall back to structural signals alone.
    const candidates = [
      ".env",
      "secrets/token",
      "projects/sfia-studio/sfia-v3-framing/30-overview.md",
      "projects/demo/.git/config",
    ];
    const protectedPath =
      candidates.find((p) => Boolean(classifyStudioProductProtectedPath(p))) ??
      null;

    const prep = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: {
        ...buildIntentAnalysisFromSolicitedMission({
          objective: "Modifier une zone structurelle / protégée",
          expectedOutcome: "Changement structurel appliqué",
          scope: protectedPath ?? "architecture runtime v3",
        }),
        signals: {
          structuralChange: true,
          securityImpact: true,
          architectureImpact: true,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
        executionIntent: {
          intentKind: "other",
          scopeIn: protectedPath ? [protectedPath] : [],
          scopeOut: [],
          expectedOutputs: [],
          requiredCapabilities: ["cap:elevated.admin"],
        },
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) throw new Error("expected block");
    expect(
      prep.code === "STRUCTURAL_HUMAN_DECISION_REQUIRED" ||
        prep.code === "MATERIALITY_UNKNOWN" ||
        prep.code === "CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE",
    ).toBe(true);
  });

  it("CAS G — stale version after inspect refuses authorize", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "g",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
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
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) throw new Error(inspected.message);

    const stale = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: inspected.contractVersion + 1,
      expectedSemanticFingerprint: inspected.semanticFingerprint,
      forceLocalAuthority: true,
    });
    expect(stale.ok).toBe(false);
    if (stale.ok) throw new Error("expected stale");
    expect(stale.code).toBe("VERSION_MISMATCH");
  });

  it("CAS H — concurrent second Select does not duplicate Attempt when first accepted", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "h",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
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

    const s1 = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    expect(s1.ok).toBe(true);
    if (!s1.ok) throw new Error(s1.message);
    const s2 = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    // Second select must not invent a second concurrent Attempt identity —
    // either reuse / terminal / fail-closed; never silent duplicate launch.
    expect(s2.ok).toBe(true);
    if (!s2.ok) throw new Error(s2.message);
    expect(s2.attemptId).toBe(s1.attemptId);
    expect(await countAttempts(oa, projectId)).toBe(1);
  });

  it("CAS I — reload durable contract; no invented authorization; reinspect required after clear attestation path", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "i",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
        expectedOutcome: "18j",
        scope: PLANNING_SCOPE,
        repositoryMutation: "none",
      },
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(prep.message);

    // Reload without inspect → authorize refused.
    const blocked = await authorizeGenericPreparedContract({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      expectedVersion: 1,
      expectedSemanticFingerprint: "not-inspected",
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(false);
    if (blocked.ok) throw new Error("expected block");
    expect(
      blocked.code === "INSPECTION_REQUIRED" ||
        blocked.code === "VERSION_MISMATCH" ||
        blocked.code === "FINGERPRINT_MISMATCH" ||
        blocked.code === "INSPECTION_INSUFFICIENT",
    ).toBe(true);
  });

  it("CAS J — after deterministic succeed, Attempt succeeded and EC reloadable", async () => {
    const { projectId, oa } = await seedProject({
      suffix: "j",
      withCycle: false,
    });
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      mission: {
        objective: "Analyse chemin critique",
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
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      forceLocalAuthority: true,
    });
    if (!selected.ok) throw new Error(selected.message);
    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: prep.executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    if (!started.ok) throw new Error(started.message);
    const settled = await settleDeterministicProductCursorSuccess({
      oa,
      attemptId: started.attemptId,
    });
    expect(settled.ok).toBe(true);
    if (!settled.ok) throw new Error(settled.message);
    expect(settled.attempt.status).toBe("succeeded");

    const reloaded = await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prep.executionContractId,
    });
    expect(reloaded.ok).toBe(true);
    if (!reloaded.ok) throw new Error("reload");
    expect(reloaded.contract.executionContractId).toBe(prep.executionContractId);
  });
});
