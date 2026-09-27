/**
 * ACTIVE-CYCLE-ARTIFACT-MATERIALIZATION-CONTINUITY-CORR-01
 *
 * Path-less natural Pilot materialization of the active cycle's required
 * deliverable must stay on ACTIVE_CYCLE_GOVERNED_CONTINUATION — never silent
 * NEW_CYCLE_FORMALIZATION. Semantic WHAT continuity of the stabilized brief
 * must be preserved into the Proposal.
 *
 * Deterministic Fake only — ZERO Cursor REAL — ZERO PocketTasks mutation.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  hasNaturalActiveCycleDeliverableMaterializationSignal,
  hasExplicitArtifactContinuationKind,
  resolveActiveCycleGovernedContinuation,
  shouldEnterActiveCycleArtifactContinuationHandling,
} from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

/** Synthetic WHAT — analogous to PocketTasks; not PocketTasks-hardcoded. */
const STABILIZED_WHAT = [
  "statuts A / B / C",
  "attribut optionnel P avec valeurs basse / moyenne / haute",
  "attribut optionnel D",
  "filtres par statut et P",
  "règle dérivée dépendant de D et du statut",
  "persistance locale requise",
  "règle Z explicitement hors périmètre",
].join("; ");

const PATHLESS_NATURAL_REQUEST = `Matérialise cette spécification fonctionnelle comme livrable de référence du cycle, sans élargir le périmètre ni ajouter de choix techniques.
La spécification consolidée inclut : ${STABILIZED_WHAT}.`;

const PATHLESS_WITH_GUARD = `Matérialise le livrable de référence du cycle actif.
Contenu stabilisé : ${STABILIZED_WHAT}.
N'exécute rien : prépare la proposition pour ma décision.`;

const VAGUE_TALK = `Parlons du livrable attendu du cycle — qu'est-ce qui doit y figurer ?`;

const SANDBOX_BINDING = {
  identity: "mcleland147/sfia-workspace",
  remoteUrl: "https://github.com/mcleland147/sfia-workspace.git",
  defaultBranch: "main",
  pathRoot: "projects/sfia-studio/.sandbox/",
} as const;

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function baseAnalysis(
  overrides: Partial<IntentAnalysisDto> = {},
): IntentAnalysisDto {
  const {
    cognitiveWorkload,
    contradictionCandidate,
    challengeResponseAssessment,
    continuationKind,
    artifactMaterializationOperation,
    executionIntent,
    ...rest
  } = overrides;
  return {
    parseOk: true,
    intentClass: "execution_request",
    candidateCycleTypeId: "cyc:functional-design",
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    cognitiveWorkload: cognitiveWorkload ?? null,
    contradictionCandidate: contradictionCandidate ?? null,
    challengeResponseAssessment: challengeResponseAssessment ?? "sufficient",
    objective: "Matérialiser le livrable requis du cycle actif",
    scope: "docs_write borné — cycle actif",
    rephrasedRequest:
      "Matérialisation de la spécification fonctionnelle comme livrable de référence du cycle",
    outOfScope: ["Nouveau CycleInstance"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION"],
    activatedBlocks: ["proposition"],
    expectedOutcome: "Proposition de matérialisation",
    criticalJustification: null,
    requestedOperation: null,
    continuationKind: continuationKind ?? null,
    artifactMaterializationOperation: artifactMaterializationOperation ?? null,
    executionIntent: executionIntent ?? null,
    ...rest,
  };
}

describe("ACTIVE-CYCLE ARTIFACT MATERIALIZATION CONTINUITY CORR-01", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;
  let previousProvider: string | undefined;
  let previousMorrisAuthority: string | undefined;

  beforeEach(() => {
    previousProvider = process.env.OPS1_CONVERSATION_PROVIDER;
    previousMorrisAuthority = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("ac-artifact-mat-corr01.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "acam" });
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
  });

  async function seedActiveCycleWithRequireArtifact(suffix: string): Promise<{
    projectId: string;
    cycleInstanceId: string;
  }> {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `AC artifact mat ${suffix}`,
      objective: "Continuité matérialisation cycle actif",
      context: "cycle actif + REQUIRE_ARTIFACT",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `ACAM${suffix.toUpperCase()}`,
      idempotencyKey: `idem:acam-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;

    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        { stepId: "stp:a", order: 1, label: "Clarify", state: "done" },
        { stepId: "stp:b", order: 2, label: "Deliver", state: "done" },
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

    const cycleInstanceId = `cyc:acam-${suffix}`;
    const candidate = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:functional-design",
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
      issuedAt: "2026-09-27T08:00:00.000Z",
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

    const obligation = await recordObligationPolicyRequireArtifact({
      projectId,
      cycleInstanceId,
      cycleServices: oa.cycleServices,
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      nowIso: () => "2026-09-27T08:01:00.000Z",
    });
    expect(obligation.ok).toBe(true);

    const bound = await runtime.setProjectRepositoryBinding({
      projectId,
      ...SANDBOX_BINDING,
    });
    expect(bound.ok).toBe(true);

    return { projectId, cycleInstanceId };
  }

  async function countCycles(projectId: string): Promise<number> {
    const cycles = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    return cycles.length;
  }

  it("unit — natural pathless signal enters continuation handling; vague talk does not", () => {
    const natural = baseAnalysis({
      continuationKind: null,
      rephrasedRequest:
        "Matérialiser la spécification comme livrable de référence du cycle",
    });
    expect(hasExplicitArtifactContinuationKind(natural)).toBe(false);
    expect(hasNaturalActiveCycleDeliverableMaterializationSignal(natural)).toBe(
      true,
    );
    expect(shouldEnterActiveCycleArtifactContinuationHandling(natural)).toBe(
      true,
    );

    const vague = baseAnalysis({
      intentClass: "informative",
      objective: "Parlons du livrable",
      rephrasedRequest: "Parlons du livrable attendu du cycle",
      continuationKind: null,
    });
    expect(hasNaturalActiveCycleDeliverableMaterializationSignal(vague)).toBe(
      false,
    );
    expect(shouldEnterActiveCycleArtifactContinuationHandling(vague)).toBe(
      false,
    );
  });

  it("unit — natural signal without docs_write effect → BLOCKED not NEW_CYCLE", async () => {
    const { projectId, cycleInstanceId } =
      await seedActiveCycleWithRequireArtifact("blk");
    const overview = await runtime.getProject(projectId);
    expect(overview.ok).toBe(true);
    if (!overview.ok) return;

    const analysis = baseAnalysis({
      continuationKind: null,
      artifactMaterializationOperation: null,
      executionIntent: null,
      rephrasedRequest:
        "Matérialiser la spécification comme livrable de référence du cycle",
    });

    const resolved = await resolveActiveCycleGovernedContinuation({
      project: {
        projectId,
        name: overview.project.name,
        shortReference: null,
        objective: overview.project.objective,
        contextSummary: "test",
        criticality: "STANDARD",
        constraints: [],
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        lpsCreatedAt: overview.livingState.createdAt,
        doctrineId: overview.doctrine.id,
        doctrineVersion: String(overview.doctrine.version),
        doctrineDigest: overview.doctrine.digest,
        doctrineStatus: overview.doctrine.status,
        runtimeMode: "local",
        persistence: "product-sqlite",
        readiness: "ready",
        activeCycleInstanceId: cycleInstanceId,
        ckcResolutionRef: null,
      },
      analysis,
      oa: runtime.oa!,
    });
    expect(resolved.mode).toBe("ACTIVE_CYCLE_CONTINUATION_BLOCKED");
    if (resolved.mode === "ACTIVE_CYCLE_CONTINUATION_BLOCKED") {
      expect(resolved.reason).toBe("incompatible_execution_intent");
    }
    expect(await countCycles(projectId)).toBe(1);
  });

  it("AP — pathless natural materialization → ZERO new CycleInstance; active cycle preserved; WHAT continuity", async () => {
    const { projectId, cycleInstanceId } =
      await seedActiveCycleWithRequireArtifact("pathless");
    const cyclesBefore = await countCycles(projectId);

    const send = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_NATURAL_REQUEST,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(JSON.stringify(send));

    expect(await countCycles(projectId)).toBe(cyclesBefore);
    expect(send.text).toMatch(/cycle en cours est conservé|clarif/i);
    expect(send.text).not.toMatch(/nouveau cycle est proposé/i);

    // Pathless → clarification in-cycle OR proposal on same active cycle.
    if (send.f2?.turnKind === "f2_clarification") {
      expect(send.f2.qualification?.cycleInstanceId).toBe(cycleInstanceId);
      expect(send.f2.proposal ?? null).toBeNull();
    } else {
      expect(send.f2?.turnKind).toBe("f2_proposal");
      expect(send.f2?.proposal?.status).toBe("DECISION_REQUIRED");
      expect(send.f2?.qualification?.cycleInstanceId).toBe(cycleInstanceId);
      expect(send.f2?.proposal?.contextSnapshot?.activeCycleInstanceId).toBe(
        cycleInstanceId,
      );
      expect(send.f2?.proposal?.requestedOperation).toBe(
        F2_ARTIFACT_MATERIALIZATION_OPERATION,
      );
      expect(send.f2?.decision).toBeNull();
      const what =
        [
          send.f2?.proposal?.executionIntent?.artifactBrief,
          ...(send.f2?.proposal?.executionIntent?.contentRequirements ?? []),
        ]
          .filter(Boolean)
          .join("\n") || "";
      expect(what).toMatch(/statuts A \/ B \/ C/i);
      expect(what).toMatch(/attribut optionnel P/i);
      expect(what).toMatch(/attribut optionnel D/i);
      expect(what).toMatch(/persistance locale/i);
      expect(what).toMatch(/règle Z explicitement hors périmètre/i);
      // Must not invent contradictory exclusions of P/D.
      expect(what).not.toMatch(/priorit[ée]s?\s+(retir|hors périmètre)/i);
      expect(what).not.toMatch(/échéances?\s+(retir|hors périmètre)/i);
    }
  });

  it("AP — pathless with explicit guard → same active cycle; no Execute/HD inventée", async () => {
    const { projectId, cycleInstanceId } =
      await seedActiveCycleWithRequireArtifact("guard");
    const oa = runtime.oa!;
    const hdBefore = (await oa.decisionServices.decisions.listByProject(projectId))
      .length;

    const send = await projectAssistantSendAction({
      projectId,
      content: PATHLESS_WITH_GUARD,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(JSON.stringify(send));

    expect(await countCycles(projectId)).toBe(1);
    const active = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    }).catch(() => null);
    void active;
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (lps.ok) {
      expect(lps.livingProjectState.activeCycleInstanceId).toBe(cycleInstanceId);
    }

    expect(send.f2?.decision).toBeNull();
    const hdAfter = (await oa.decisionServices.decisions.listByProject(projectId))
      .length;
    expect(hdAfter).toBe(hdBefore);

    if (typeof oa.executionContractServices.contracts.listByProject === "function") {
      const contracts =
        await oa.executionContractServices.contracts.listByProject(projectId);
      expect(contracts.length).toBe(0);
    }
  });

  it("AP — vague talk about deliverable does NOT open Artifact continuation / new cycle", async () => {
    const { projectId } = await seedActiveCycleWithRequireArtifact("vague");
    const cyclesBefore = await countCycles(projectId);

    const send = await projectAssistantSendAction({
      projectId,
      content: VAGUE_TALK,
    });
    expect(send.ok).toBe(true);
    if (!send.ok) throw new Error(JSON.stringify(send));

    expect(await countCycles(projectId)).toBe(cyclesBefore);
    expect(send.f2?.proposal ?? null).toBeNull();
    expect(send.f2?.turnKind === "f2_proposal").toBe(false);
  });
});